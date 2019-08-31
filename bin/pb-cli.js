#!/usr/bin/env node
"use strict";
const fs = require('fs');
const path = require('path');
const program = require('commander');
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
    .action((target) => {
    build(target);
});
program.parse(process.argv);
function build(target) {
    console.log('build ' + target);
}
