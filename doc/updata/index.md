---
title: "更新日志"
description: "见证每一次变化"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="./">←返回</a></small><br>

## 未来计划

> [i] 开发中内容，请以最终实装品质为准。<br>
> 若您有其它建议、BUG反馈、申诉需求等，请前往[Github฿](https://github.com/kdxhub/Streack/issues/new)或[Gitee฿](https://gitee.com/kdxiaoyi/Streack/issues/new)发起Issue。

### 即将到来

* 在菜单中添加PlaceholderAPI支持以呈现更加丰富的菜单界面
* 为「坚守者」增加更多战利品
* 6月月度调查
  * 增加更详细的活动介绍

### 已知问题

* 命令`/l`接受过多参数时表现异常，后续版本更新时会改为自动丢弃多余参数
* 部分链接无法被发送到客户端，该问题会在后续版本修复
* 基岩版菜单中部分材质缺失，该问题会在后续版本修复

## S1P2「樱飘雪霁月」更新日志

### 25w31-dev-b

* 现在亡灵生物试图进入主城区域时会被排斥
* 新增管理员快捷指令

### 25w30-dev-b

* 降低「下界之星」的回收价
* 更新部分插件版本
* 移除粘液科技拓展包*下界乌托邦 Netheopoiesis*
* 新增粘液科技拓展包*异域花园 ExoticGarden*

### 25w30-dev-a
* 更新服务器版本至`Java 1.21.4`
* *Streack Service Datapack*更新
  * *更多配方*模块：现在默认禁用1.21.3配方机制修复
  * 更新图标与协议版本
* *Streack 资源包*更新
  * 更新图标与协议版本
* 特性调整
  * 现在砂轮可以用于叠加带有诅咒的附魔书
  * 现在铁砧会销毁其砸中的掉落物
  * 现在处于*旁观模式*的玩家无法获取进度
  * 现在手（曾）持物品的*末影人*会自然消失
  * 现在对雪使用「锹」时会减少雪层并掉落雪球
* 协议支持
  * 新增[RoughlyEnoughItems฿](https://github.com/shedaniel/RoughlyEnoughItems)协议支持
  * 新增[ChatImage฿](https://github.com/kitUIN/ChatImage)协议支持
  * 现在聊天中玩家名会以文本组件的形式发送
  * 现在世界元数据协议会通过[Servux฿](https://www.mcmod.cn/class/5219.html)发送
  * 移除[Servux฿](https://www.mcmod.cn/class/5219.html)发送的数据中的世界种子
  * 现在所有玩家数据会通过[Plusls Carpet Addition฿](https://github.com/Nyan-Work/plusls-carpet-addition/blob/nyan-work/dev/README_ZH_CN.md)发送到对应玩家客户端上
* 优化
  * 优化使用「剪刀」调整方块朝向时的行为
  * 优化区块加载，参见[C2ME引擎฿](https://modrinth.com/mod/c2me-fabric)
  * 减少服务器核心更新检测频率
  * 优化实体碰撞检测行为

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober@1.0.6.min.js"></script><script src="https://kdxiaoyi.top/Streack/_page/js/pmd.js"></script><script src="https://rs.kdxiaoyi.top/res/scripts/js/pmd-reRender.min.js"></script>