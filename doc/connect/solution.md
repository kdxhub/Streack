---
title: "无法连接到服务器常见问题"
description: "快速疑难解答"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="/Streack/doc">←返回</a> |
 创建：2025-01-19 | 最后更新：2025-01-19</small><br>

> [@] 在左侧边栏可以找到目录树，您也可以使用`Ctrl/Command`+`F`快捷键打开「在网页上查找」等类似功能。<br>
> 但本文列出的错误原因通常只列出关键字，请考虑搜索单词而不是输入整个错误提示。

> [i] 请善用搜索引擎，这篇文章不是万能的。<br>
> [必应฿](https://bing.com) 或者 [百度฿](httpa://baidu.com)。

## Connection refused (连接被拒绝)
多试几次，如果还不行就在群里发送`ipt`让机器人帮您查询服务器状态。<br>
一般而言，在多试几次还不行那多半是服务器崩溃了或者正在~~崩溃~~启动中，联系管理员后耐心等待。

## Unknown Host (未知的主机)
您输入的服务器地址有问题，请**检查拼写错误**。<br>
若拼写是正确且地址为最新地址，那么请：
* 打开您设备上的终端（Windows为Powershell或命令提示符、Linux为bash、安卓可用Termux等）
* 输入命令`nslookup streack.kdxiaoyi.top`查询结果。
* 若没有解析出任何IP地址，为您的DNS提供商出错，请更换。
* ~~排除域名过期的可能性~~

> [i] 以上教程还是太高级了？看不懂？<br>
> 那我也没办法，要不你[百度一下฿](https://www.baidu.com/s?wd=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%20Unknown%20Host%20%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA)？

## 因为不使用自定义资源包而被踢出游戏
**为了您的游玩体验，请考虑使用服务器资源包。**

## 无效会话
您的账户因未知（或者您自己作的）原因导致服务器对您的账户开启了正版验证，而您并未使用正版登录。<br>
解决方案：<br>
* [购买正版฿](https://www.xbox.com/zh-CN/games/store/minecraft-java-bedrock-edition-for-pc/9nxp44l49shj)
* 联系管理员
* 更换您的离线登录用户名

## 无法连接至身份验证服务器
巨硬和Mojang抽风，没有什么解决方案。<br>
如果您善于折腾，可以试试[xmdhs/mcping฿](https://github.com/xmdhs/mcping)工具。<br>

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober.min.js"></script><script src="https://kdxiaoyi.top/Streack/page/pmd-reRender.min.js"></script>