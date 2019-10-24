#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require('fs');
var path = require('path');
var program = require('commander');
var child_process = require('child_process');
var glob = require('glob');
var UglifyJS = require('uglify-js');
var config = {};
// 配置文件如果存在则读取
if (fs.existsSync(path.resolve('pb.config.js'))) {
    config = require(path.resolve('pb.config.js'));
}
program
    .version('1.0.2', '-v, --version');
program
    .command('build <target>')
    .description('构建proto js/ts文件')
    .option('-t,--dir_target', 'proto文件目录')
    .action(function (target) {
    build(target);
});
program.parse(process.argv);
function resolve(name) {
    return path.resolve(name);
}
function build(target) {
    return __awaiter(this, void 0, void 0, function () {
        var pbConfig, delimited, convert, verify, create, input, output, args, file_bundleJs, file_bundleTs, files, jsContent, minjs, tsContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('build ' + target);
                    try {
                        pbConfig = require(target);
                    }
                    catch (e) {
                        pbConfig = {
                            delimited: false,
                            convert: false,
                            verify: false,
                            create: true,
                        };
                    }
                    delimited = pbConfig.delimited, convert = pbConfig.convert, verify = pbConfig.verify, create = pbConfig.create, input = pbConfig.input, output = pbConfig.output;
                    args = ['-t static', '--keep-case'];
                    if (!delimited) {
                        args.push('--no-delimited');
                    }
                    if (!convert) {
                        args.push('--no-convert');
                    }
                    if (!verify) {
                        args.push('--no-verify');
                    }
                    if (!create) {
                        args.push('--no-create');
                    }
                    if (!input) {
                        input = resolve(target);
                        input = fs.statSync(input).isDirectory ? input : path.basename(input);
                    }
                    input = resolve(input);
                    output || (output = path.join(input, 'output'));
                    output = resolve(output);
                    console.log('input:', input);
                    console.log('output:', output);
                    if (!fs.existsSync(output)) {
                        fs.mkdirSync(output);
                    }
                    file_bundleJs = path.join(output, 'proto_bundle.js');
                    file_bundleTs = path.join(output, 'proto_bundle.d.ts');
                    return [4 /*yield*/, findFiles(input, '**/*.proto')];
                case 1:
                    files = _a.sent();
                    console.log(files);
                    ////////////////////////////////////////// 生成js
                    args.push('-p', input, files.join(' '));
                    args.push('-o', file_bundleJs);
                    return [4 /*yield*/, exec('pbjs', args)];
                case 2:
                    _a.sent();
                    jsContent = '$protobuf=protobuf;' + fs.readFileSync(file_bundleJs, 'utf-8');
                    fs.writeFileSync(file_bundleJs, jsContent, 'utf-8');
                    minjs = UglifyJS.minify(jsContent);
                    fs.writeFileSync(file_bundleJs.replace('.js', '.min.js'), minjs.code, 'utf-8');
                    ////////////////////////////////////////// 生成ts
                    return [4 /*yield*/, exec('pbts', [
                            '--main',
                            file_bundleJs,
                            '-o', file_bundleTs
                        ])];
                case 3:
                    ////////////////////////////////////////// 生成ts
                    _a.sent();
                    tsContent = fs.readFileSync(file_bundleTs, 'utf-8');
                    tsContent = tsContent.replace(/\$protobuf/gi, "protobuf").replace(/export namespace/gi, 'declare namespace');
                    tsContent = 'type Long = protobuf.Long;\n' + tsContent;
                    fs.writeFileSync(file_bundleTs, tsContent, 'utf-8');
                    return [2 /*return*/];
            }
        });
    });
}
function findFiles(base, pattern) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        var result = [];
        glob(path.join(base, pattern), function (err, files) {
            files.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!fs.statSync(item).isDirectory()) return [3 /*break*/, 2];
                            _b = (_a = result).concat;
                            return [4 /*yield*/, findFiles(item, pattern)];
                        case 1:
                            result = _b.apply(_a, [_c.sent()]);
                            return [3 /*break*/, 3];
                        case 2:
                            result.push(item);
                            _c.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            resolve(result);
        });
    });
}
function exec(command, args) {
    return new Promise(function (resolve, reject) {
        var cmd = command + " " + args.join(" ");
        child_process.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                console.error(error);
                reject(error);
            }
            else {
                resolve(stdout);
            }
        });
    });
}
