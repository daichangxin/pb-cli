# pb-cli
导出pbjs和pbts文件

### 安装
```
npm install pbts-cli -g
```

### 使用
```
pbts-cli build proto-files-path   //proto-files-path: proto文件路径
pbts-cli build pbconfig.json   //pbconfig.json 编译配置文件
```

编译配置文件：
```
{
    "delimited": false,
    "convert": false,
    "verify": false,
    "create": true,
    "input": "../sample",
    "output": "../sample/output"
}
```

### 注意
proto文件必须有package，且package名称相同
