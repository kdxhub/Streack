---
title: "将Bedrock账户绑定至Java版账户"
description: "linkaccount"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="/Streack/doc">←返回</a> |
 创建：2025-02-22 | 最后更新：2025-02-22</small><br>

## 前言

Floodgate允许您直接使用基岩版连接到服务器，不过您的昵称采用Xbox档案名且拥有前缀；而*Linkaccount*可以帮助您以Java版玩家档案进入服务器。<br>
栈流Streack使用由Geyser官方提供的绑定服务，该绑定服务旨在允许您一次绑定、处处可用。<br>
阅读Geyser官方提供的[Global Linking ฿](https://link.geysermc.org/)以获取更多信息。<br>

> [x] 请注意，**绑定后您的基岩版数据会全部丢失**，直到您主动[解绑](#解绑)。

> [i] 继续操作前，您需要一个Java正版账户和一个基岩版账户。

## 绑定
Geyser官方提供了两种绑定方法：[在线绑定 ฿](https://link.geysermc.org/method/online)和[进服绑定 ฿](https://link.geysermc.org/method/server)。两者具有等效作用，且用时很快，少于5分钟（原文如此）。

相关页面有详细帮助（英文），您可使用网页翻译阅读。

## 解绑
虽然Geyser官方并未提及如何解绑，但教程作者摸索出来了。<br>
在绑定后，需要使用Java/基岩任一账户登录下方服务器：

* Java版：`link.geysermc.org:25565`
* 基岩版：`link.geysermc.org`，端口`19132`

进服以后执行下方命令即可：

```text
/unlinkaccount
```

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober.min.js"></script><script src="https://kdxiaoyi.top/Streack/page/pmd-reRender.min.js"></script>