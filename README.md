# x-fold
react折叠组件
# 安装
```
npm install --save x-fold
```
# 使用
```
<Tabs defaultActive={["1"]} onChange={this.onChange}>
    <Panel tab="选项卡一" key="1">这是选项卡一的内容</Panel>
    <Panel tab="选项卡二" key="2">这是选项卡2的内容</Panel>
</Tabs>
```
# API
### Tabs
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| defaultActive | 默认显示的显项卡 | Array \| string | - |
| onChange | 改变时触发 | function |
### Tabs.Panel

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| key | 主键，对应`defaultActive`的值 | string | |
| tab | 选项卡标题 | string \| ReactNode | | 
 
### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)
