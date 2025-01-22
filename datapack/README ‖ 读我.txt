# Streack Service Datapack数据包说明书

本数据包遵循模块化设计，基本命名空间以kdx开始。
请勿与使用命名空间kdx的数据包混用，以防不期的效果。

禁用特定子模块可以把它的文件夹里面加一个大写字母，因为MC不识别带有大写字母的路径。

> 这是一个Markdown格式文件，使用Markdown阅读器打开以获得更好的体验。

# 模块表
## 核心模块 kdx:*

核心模块，加载后才能使用其余模块。
加载后会向存档写入Streack Service Datapack的基本信息，并启用部分地毯mod功能。
每次启动时，此模块会输出一个启动完成文本，用以解决Farbic原版服务端没有明显的“服务器启动完成”控制台输出的问题。

添加了一个进度页签，该页签用于查看已加载的拓展组件的拓扑图。

## 更有成就感的物品们 kdx.ma:*

为一些物品创建一些进度，让获取这些物品更有成就感。
同时也有一些隐藏进度。

不过后期这里实际上承担了「更多进度」的用途——没错，触发其它东西也有进度。

## 更多配方 kdx.mrecipe:*

为一堆东西添加非常实用的配方，这些配方并不破坏游戏平衡。

## 服务器礼包 kdx.kits:*

创建服务器礼包并自动在适宜条件下发放，详情见`/function kdx.kits:_help`命令。
需要禁用查熊模组之类的`barrier`记录，否则会乱。

默认禁用

## Mutiple World kdx.mworld:*

创建一堆预定义维度以备用。

---
Copyright (C) 2025, kdxiaoyi.
All right reserved.
Licensed as CC BY-NC 4.0.
See more @ http://kdx233.github.io/licen