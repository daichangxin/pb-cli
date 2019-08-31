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
    .version('1.0.0', '-v, --version')
    .command('init')
    .description('初始化pb-cli配置')
    .action(() => {
        console.log('init');
    });

program
    .command('build <target>')
    .description('构建proto js/ts文件')
    .option('-t,--dir_target', 'proto文件目录')
    .action((target: string) => {
        build(target);
    });

program.parse(process.argv);


async function build(target: string) {
    console.log('build ' + target);
    const dir_output = path.join(target, 'output');
    if (!fs.existsSync(dir_output)) {
        fs.mkdirSync(dir_output);
    }
    const file_bundleJs = path.join(dir_output, 'proto_bundle.js');
    const file_bundleTs = path.join(dir_output, 'proto_bundle.d.ts');
    const files = await findFiles(target, '**/*.proto');
    console.log(files);
    ////////////////////////////////////////// 生成js
    await exec('pbjs', [
        '--no-delimited',
        '--no-convert',
        '--no-verify',
        '--no-create',
        '-t static',
        // '-w es6', 会生成const等语法，导致uglify无法执行
        '--keep-case',
        '-p', target,
        files.join(' '),
        '-o', file_bundleJs
    ]);

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