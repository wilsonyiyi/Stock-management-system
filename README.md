# Stock-management-system
> Angular4.0构建一个股票后台管理系统

## 目录

### 1.技术栈

### 2.搭建步骤



### 3.问题汇总

1. 全局样式引入注意细节
```
// 以引入bootstrap.css为例
(项目结构)
-- stock
    -- e2e
    -- node_modules
    -- src
    -- package.json
    -- angular-cli.json
    -- ...
// 这里选择修改angular-cli.json文件apps数组里对象的styles属性，虽然angular-cli.json是和node_modules同级，但是这里却要以src内部文件的位置作为参考， 所以引用node_modules里的文件时，相对地址需要写成"../node_modules/bootstrap/dist/css/bootstrap.css"

```


