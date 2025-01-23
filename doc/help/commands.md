---
title: "常用命令列表"
description: "Practical Commands"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="/Streack/doc">←返回</a> |
 创建：2025-01-14 | 最后更新：2025-01-14</small><br>

> [!] 这篇文章的内容可能已过时，仍有待更新。

## 传送与地标
### 玩家互传
请求传送到玩家：

```command
/tpa <玩家名字>
```

请求玩家传送到我：

```command
/tpahere <玩家名字>
```

接受请求（适用于基岩版无法点击聊天栏）：

```command
/tpaccept
```

拒绝请求（适用于基岩版无法点击聊天栏）：

```command
/tpadeny
```

### 个人传送点
设置传送点：

```command
/home set <名字>
```

传送到传送点：

```command
/home tp <名字>
```

删除传送点：

```command
/home del <名字>
```

### 返回上一坐标

```command
/back
```

## 安全与账户
### 离线账户登录验证
> [!]以下命令**仅限离线登录/外置验证玩家使用**。<br>
> 因为Java正版登录使用Mojang API验证、基岩版登录使用[Floodgate฿](https://modrinth.com/mod/floodgate)和Xbox API验证，均不使用EasyAuth服务。

本服使用[EasyAuth฿](https://www.mcmod.cn/class/6241.html)提供登录验证服务。

```command
/login <password>, /l <password>
登陆账号

/logout
退出登陆

/register <password> <password>
注册账号

/account
管理账号

/unregister <password>
注销账号

/changePassword <old password> <new password>
更改密码
```

### 绑定Java账户
> [!] 以下内容仅供**基岩版玩家**使用。

本服使用[Geyser฿](https://www.mcmod.cn/class/9757.html)为基岩版玩家提供服务。<br>
而Geyser允许您将基岩版账户绑定至Java版账户。<br>
具体教程见于[此处](/Streack/doc/safe/linkaccount)。

### 查熊
本服的查熊mod是[Ledger฿](https://www.mcmod.cn/class/5389.html)，与CoreProtect类似。

```command
/ledger i
```

输入此命令进入**检查模式**。
此模式下攻击/破坏方块查询此位置的放置/破坏记录，右键/使用方块查询此位置的容器存取记录（若有）。

## 地毯
### 假人命令

```
/player <假人名> <操作> [参数]
```

供生电玩家使用，会用的自然会用，不会用的也不需要用。<br>

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober.min.js"></script><script src="https://kdxiaoyi.top/Streack/page/pmd-reRender.min.js"></script>