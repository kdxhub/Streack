# Streack Service Datapack数据包说明书

本数据包遵循模块化设计，命名空间均以kdx开头。
请勿与命名空间冲突的数据包混用，以防意外的效果。

禁用特定子模块可以把它的文件夹里面加一个大写字母（直接删掉也行），因为MC不识别带有大写字母的路径。
关于数据包版本适配可以查看`spyglass.json`这个文件，里面写的版本就是。

> 这是一个Markdown格式文件，使用Markdown阅读器打开以获得更好的体验。

# 模块表
## [核心] 元模块 kdx:*

核心模块，加载后才能使用其余模块。
加载后会向存档写入Streack Service Datapack的基本信息，并启用部分地毯mod功能（地毯mod功能现已禁用，如有需要可自行启用）。

添加了一个进度页签，该页签用于查看已加载的拓展组件的拓扑图。

## 扫地姬 kdx.cleaner:*

扫地姬会每隔10分钟清除全部掉落物。
在开始工作前会有全局提示。

扫地姬关闭请输入命令`/function kdx.cleaner:_off`
↑输入后在下次扫地完成后生效
扫地姬开启请输入命令`/function kdx.cleaner:_on`

同时支持通过特定操作为特定物品添加不会被扫掉的标记

## 服务器礼包 kdx.kits:*

创建服务器礼包并自动在适宜条件下发放，详情见`/function kdx.kits:_help`命令。

## 更有成就感的物品们 kdx.ma:*

为一些物品创建一些进度，让获取这些物品更有成就感。
同时也有一些隐藏进度。

不过后期这里实际上承担了「更多进度」的用途——没错，触发其它东西也有进度。

## 更多配方 kdx.mrecipe:*

为一堆东西添加非常实用的配方，这些配方并不破坏游戏平衡。

同时可选通过强行授予配方修复低版本进入1.21.3及更高版本会导致JEI/REI等崩溃的问题。
这个问题是因为自上述版本起服务器不再向客户端发送未解锁配方详情，当新配方在工作台内解锁时JEI/REI等mod会因这个问题崩溃。
这个修复作者认为无关紧要——因为配方可以在mcwiki上查到，JEI/REI等mod也可以，所以这一改动没有什么影响。
↑如果您觉得需要，可以手动编辑`./data/kdx.mrecipe/function/fix_1_21_3.mcfunction`这个文件，删除最后一行的`#`号即可

## Mutiple World kdx.mworld:*

创建一堆预定义维度以备用。
受限于原版特性，未经修改的游戏需要在创建世界时启用此数据包才会生效。

## Policy Helper kdx.policynotice:*

允许创建用户协议通知，支持通过控制台/op推送新版本更新通知。
注意协议链接需要自行修改`./data/kdx.policynotice/function/links.mcfunction`中的内容。

## Other

本数据包包含其它硬编码数据包的汉化文件，但这些文件无法单独工作，需要搭配目标数据包才可工作。
需要将此数据包的优先级设为最高。

---
Copyright (C) 2025, kdxiaoyi.
All right reserved.
Licensed as CC BY-NC 4.0.
See more @ http://kdx233.github.io/licen