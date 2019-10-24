#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const child_process = require('child_process');
const glob = require('glob');
const UglifyJS = require('uglify-js');

let config = {};
// 配置文件如果存在则读取
if (fs.existsSync(path.resolve('pb.config.js'))) {
    config = require(path.resolve('pb.config.js'));
}

program
    .version('1.0.3', '-v, --version')

program
    .command('build <target>')
    .description('构建proto js/ts文件')
    .option('-t,--dir_target', 'proto文件目录')
    .action((target: string) => {
        build(target);
    });

program.parse(process.argv);

function resolve(name: string) {
    return path.resolve(name);
}

async function build(target: string) {
    console.log('build ' + target);
    let pbConfig: any;
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
    let { delimited, convert, verify, create, input, output } = pbConfig;
    const args = ['-t static', '--keep-case'];
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
    const file_bundleJs = path.join(output, 'proto_bundle.js');
    const file_bundleTs = path.join(output, 'proto_bundle.d.ts');
    const files = await findFiles(input, '**/*.proto');
    console.log(files);
    ////////////////////////////////////////// 生成js
    args.push('-p', input, files.join(' '));
    args.push('-o', file_bundleJs);
    await exec('pbjs', args);

    ////////////////////////////////////////// uglify
    const jsContent = '$protobuf=protobuf;' + fs.readFileSync(file_bundleJs, 'utf-8');
    fs.writeFileSync(file_bundleJs, jsContent, 'utf-8');
    const minjs = UglifyJS.minify(jsContent);
    fs.writeFileSync(file_bundleJs.replace('.js', '.min.js'), minjs.code, 'utf-8');

    ////////////////////////////////////////// 生成ts
    await exec('pbts', [
        '--main',
        file_bundleJs,
        '-o', file_bundleTs
    ]);
    let tsContent: string = fs.readFileSync(file_bundleTs, 'utf-8');
    tsContent = tsContent.replace(/\$protobuf/gi, "protobuf").replace(/export namespace/gi, 'declare namespace');
    tsContent = 'type Long = protobuf.Long;\n' + tsContent;
    fs.writeFileSync(file_bundleTs, tsContent, 'utf-8');
}

function findFiles(base: string, pattern: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        let result: string[] = [];
        glob(path.join(base, pattern), (err, files) => {
            files.forEach(async item => {
                if (fs.statSync(item).isDirectory()) {
                    result = result.concat(await findFiles(item, pattern));
                } else {
                    result.push(item);
                }
            });
            resolve(result);
        });
    });
}

function exec(command: string, args: string[]) {
    return new Promise<string>((resolve, reject) => {
        const cmd = command + " " + args.join(" ");
        child_process.exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else {
                resolve(stdout)
            }
        })
    })
}