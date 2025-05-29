---
title: "群智能体指南"
description: "QQBOT"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="../../">←返回</a> |
 创建：2025-05-29 | 最后更新：2025-05-30</small><br>

[栈流Streack的交流群฿](https://kdxiaoyi.top/Streack/#qqun)内有QQ智能体，为您提供相关服务。

# 小可

> [i] **小可**（**AkariBot**）是由茶馆Teahouse-Studios开发的公共多平台机器人与IP，提供*Minecraft*相关查询服务、小游戏、Maimai、Phigros、Cytoid、AI问答等服务。<br>
> 请参阅：[小可Wiki฿](https://bot.teahouse.team/)和[Teahouse-Studios/akari-bot฿](https://github.com/Teahouse-Studios/akari-bot)。

> [!] **小可由第三方提供服务**，若使用即视为您额外同意[《茶馆工作室隐私政策》฿](https://teahouse.team/privacy/)。<br>
> 您也不得利用漏洞或使用诱导等方式让小可输出违法违规言论。一经发现违背小可使用条款和[栈流Streack基本方针](https://kdxiaoyi.top/Streack/doc/policy/rule)中的内容，对Bot使用者进行相应惩罚。

以下列出具有捷径别名的命令，详细可用模块命令请使用`~help`查看或前往[小可Wiki฿](https://bot.teahouse.team/)。<br>
此处列出的命令用法可能过时，请以`~help <命令名>`的结果为准。

提示：
* `<>`表示必须参数，格式为自定义文本。
  * 通常情况下，多个必须参数只能选择一个，即子命令。
* `[]`表示可选参数，格式为开关。
  * `[a/b/c]`像这样以`/`分割的表示参数互斥，只能选择其中一个。
  * `<[]>`表示可选参数，格式为自定义文本。
* `~`是小可默认命令前缀，其全半角形式均可，部分别名不含此前缀。
* 几乎所有命令加上`--legacy`参数表示强制以纯文本模式输出结果而不是图片。

## MC相关
### `streack`

对服务器发起MOTD查询，返回Java版路线和基岩版路线状态、人数和MOTD信息。

### `~mcplayer`

* 参数：`<Profile>`
* 别名：`~player`/`~namemc`/`~mcskin`/`~skin`/`~nm`

后接玩家名或UUID（`<Profile>`），返回其所对应的Java正版档案信息和对应Namemc地址。

### `~s`

* 参数：`<Address>`
* 别名：`~server`/`~mcserver`

后接地址，对指定地址（`<Address`）的服务器发起MOTD查询，返回Java版路线和基岩版路线状态、人数和MOTD信息。<br>
**禁止利用此命令隐性宣传其它服务器**，请注意其返回消息内含您查询的地址，而您一般无权撤回小可发送的消息。

## 小游戏
### `化学式`

* 参数：`[<pcid>/captcha/stop]`
* 别名：`~cc`/`~chemical code`

启动一个写有机物化学式小游戏。其中：

* `[<pcid>]`指根据指定[PubChem ID฿](https://pubchem.ncbi.nlm.nih.gov/docs/identifier-exchange-service)出题；
* `[captcha]`指验证码模式，可以理解为困难模式；
* `[stop]`表示停止当前游戏。

### `词汇`

* 参数：`[--hard/--trial]`
* 别名：`~wordle`/`~wd`

启动一个Wordle游戏，在5轮内猜出一个5字母单词。<br>
其中`[--hard]`和`[--trial]`分别表示困难模式和试炼模式。<br>

连续两局Wordle必须间隔至少5分钟。

## 小工具
### `缩写`

* 参数：`<Abbreviate>`
* 别名：`~short`/`~nbnhhsh`

输入一个首字母缩写（`<Abbreviate>`，拼音英文皆可），返回其大概率的全称。

### `哔哩哔哩`

* 参数：`<BVID/AVID> [-i]`
* 别名：`~b`/`~bilibili`/`~哔哩哔哩`

返回BVID/AVID对应的视频信息，加上`-i`获取详细信息。

### `颜色`

* 参数：`[<Color>]`
* 别名：`色彩`/`~c`/`~color`

输入一个色彩代码（为空则随机），返回其详细信息。<br>
支持格式：HSL、RGB、HEX、CSS颜色、Material Design颜色代号。

### `百科`

* 参数：`<pagetitle> <id <pageid>> <search <str>> [-l <lang>]`
* 别名：`~w`/`~wiki`

根据条件返回对应MediaWiki页面的基本信息和Infobox截图。

* `<pagetitle>`指MediaWiki页面标题查询页面
* `id <pageid>`指根据MediaWiki页面PID查询页面
* `search <str>`指搜索MediaWiki页面
* `-l <lang>`以指定语言访问MediaWiki页面

> [x] 请勿尝试利用此功能访问奇怪的网页（非MediaWiki页面会被拦截）或查询奇怪的词条（会被小可云拦截），否则后果（被小可拉黑，无法使用小可服务）自负。

#### Wiki列表
若没有指定跨Wiki前缀，则默认[中文Minecraft Wiki฿](//zh.minecraft.wiki)。<br>
也支持其它Wiki查询，方法是在查询关键词前加上`<prefix>:`，例如`akari:`。受支持的前缀如下：<br>

|前缀|Wiki|
|:-:|:--|
| `akari` | [小可Wiki฿](https://bot.teahouse.team/) |
| `t` | [泰拉瑞亚官方中文Wiki฿](https://terraria.wiki.gg/zh/) |
| `sr` | [旅行者酒馆崩坏：星穹铁道Wiki฿](https://wiki.biligame.com/sr/) |
| `ys` | [旅行者酒馆原神Wiki฿](https://wiki.biligame.com/ys/) |
| `zzz` | [旅行者酒馆绝区零Wiki฿](https://wiki.biligame.com/zzz/) |
| `prts` | [Mooncell-PRTS明日方舟Wiki฿](https://prts.wiki/) |
| `fgo` | [Mooncell-FGO Wiki฿](https://fgo.wiki/) |
| [其它在这里列出的前缀฿](https://zh.minecraft.wiki/w/Special:%E8%B7%A8wiki#%E8%B7%A8wiki%E5%89%8D%E7%BC%80) | ~~这到底什么交流群支持这些乱七八糟的Wiki？~~ |

### `~phi`

* 别名：`~phigros`

发送`~help phigros`查看使用帮助。

> [x] 绑定Phigros账号时建议使用私聊发送，该绑定跟随QQ号。

## 花瓣
### `花瓣`

* 别名：`~petal`

返回当前具有的花瓣数。<br>
花瓣可以依靠签到和小游戏获得。

### `小可`

* 参数：`<Content>`
* 别名：`~ai`

AI问答，需要消耗花瓣。

### `签到`

* 别名：`打卡`/`~sign`

每日一签，获得随机花瓣。

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober@1.0.6.min.js"></script><script src="https://kdxiaoyi.top/Streack/page/js/pmd.js"></script><script src="https://rs.kdxiaoyi.top/res/scripts/js/pmd-reRender.min.js"></script>