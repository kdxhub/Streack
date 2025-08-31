---
title: "更新日志"
description: "见证每一次变化"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="../">←返回</a></small><br>

## 未来计划

> [i] 开发中内容，请以最终实装品质为准。<br>
> 若您有其它建议、BUG反馈、申诉需求等，请前往[Github฿](https://github.com/kdxhub/Streack/issues/new)或[Gitee฿](https://gitee.com/kdxiaoyi/Streack/issues/new)发起Issue。

### 即将到来

* 在菜单中添加PlaceholderAPI支持以呈现更加丰富的菜单界面
* 为「坚守者」增加更多战利品
* 启用`streack.bedrock`权限节点

### 已知问题

* 命令`/l`接受过多参数时表现异常，后续版本更新时会改为自动丢弃多余参数
* 部分链接无法被发送到客户端，该问题会在后续版本修复

## S1P2「樱飘雪霁月」更新日志

### 25w35a

* 登录提示信息的发送间隔延长至10秒
* 新增栈流电子邮件服务

### 25w34d

* *Streack Service Datapack*更新
  * *更多配方*模块中调整部分配方文件路径
  * *更多配方*模块中新增配方
    * 为所有原木添加批量合成木制建筑材料的配方
    * 「木板×5」+「箱子×1」→「箱船×1」
    * 「原木×3」→「碗×16」
    * 「铁块×1」+「铁锭×2」→「铁链×9」
    * 「原木×7」→「木桶×4」
    * 「原木×8」→「箱子×4」
    * 「铁块×7」→「炼药锅×9」
    * 「原木×7」→「堆肥桶×8」
    * 「骨头×9」→「骨块×3」
    * 「金块×3」+「金锭×1」+「红石块×1」+「石砖墙×1」→「钟×1」
    * 「铁块×4」+「红石块×1」→「指南针×9」
    * 「铁块×2」→「重质测重压力板×9」
    * *略*
* 修复假人能以任意名字和任意坐标召唤的问题

### 25w34c

* 回滚下列更新：
  * **25w34b**：~~移除物品/方块「自动附魔机」「自动附魔机 II」~~
  * **25w34b**：~~修复通过特定操作可以获得异常叠加与等级的附魔的问题~~
* 对「自动附魔机」和「自动祛魔机」做出以下更改：
  * 此类机器的I一级只能处理至高5级附魔
  * 此类机器的II级只能处理至高9级附魔
  * 添加相应数据标签，持有此类标签的物品无法在上述机器中处理

### 25w34b

* 移除物品/方块「不死图腾（粘液科技）」「灵魂绑定背包」「自动附魔机」「自动附魔机 II」
* 修复通过特定操作可以获得异常叠加与等级的附魔的问题
* 优化资源包加载体验

### 25w34a

* 部分第三方链接现在经由安全提醒中间页再跳转
* 新增服务器侧粘液科技资源包功能
* 修复Streack资源包无法识别的问题
* 新增诊断模式内容
* 修改MCMOD找服玩中的描述
* 优化服务器性能

### 25w32a

* 修复命令`/debuginfo`展示信息异常的问题
* *Streack Service Datapack*更新
  * *更多配方*模块中调整配方
    * 「强化深板岩」的合成配方现在需要「下界合金锭」而不是「下界合金块」

### 25w31a

* 同步「前瞻先行服」的更改至正式服中

### 25w31-dev-b

* 现在亡灵生物试图进入主城区域时会被排斥
* 新增管理员快捷指令

### 25w31-dev-a

* 大幅修改首页样式
* 调整文档结构

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

## 过往版本更新日志

* [S1P1「樱飘雪霁月」](./s1-je1_21_3)

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober@1.0.6.min.js"></script><script src="https://kdxiaoyi.top/Streack/_page/js/pmd.js"></script><script src="https://rs.kdxiaoyi.top/res/scripts/js/pmd-reRender.min.js"></script>