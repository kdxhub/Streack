---
title: "「熵流」概率公示"
description: "Entroprix Probability Publicity"
---
<small id="old_menu"><a href="/Streack/">首页</a> | <a href="/Streack/doc/">文档</a></small><small><a href="../../">←返回</a></small><br>

## 定义<sup>*</sup>
### 熵流
**熵流**（*Entroprix*）是栈流Streack内随机奖励机制（*Gacha*，亦称*抽卡*）系统的命名。<br>
该系统的使用需要您获得一定数量的游戏道具或达成特定条件，且**不能**通过充值的方式获取。

### 卡池
**卡池**是一种通俗说法，指含有不同奖励的「熵流」系统。每卡池的抽数与保底都独立计算。

### 抽数
**抽数**指您触发「熵流」机制的次数。通常情况下，此“次数”为距离上一次获取最高级物品后所触发次数。

### 保底
**保底**指距离上次获取同级保底物品（若有）后累计达到一定抽数便必定能获得保底同级奖励的机制。<br>
保底可能会由于卡池变动而清空，详见对应告示。

### 个体偏差
「熵流」的公示概率是基于其奖励设置与具体算法而推算的，可能受算法缺陷或个人测试样本量不够大而产生一定误差。<br>
因此，请知悉：概率计算结果不能完全反映试验所得频率规律。

### 概率计算
我们使用LCG算法实现概率的计算，每次抽取概率均为下述由基础概率与其它因素计算而来的综合概率。<br>
综合概率的影响因素有该奖励能否获取和是否触发保底。<br>
每组奖励中部分奖励可能由于游戏内其它因素限制而无法获取，此时我们会将其概率平分给同组其它物品或是在获取该奖励时返还等效一抽的其它奖励<sup>**</sup>。

## 各「熵流」卡池奖励概率及其保底

### 熵流·赠

| 基础概率 | 可能奖励<sup>***</sup> | 保底抽数 |
|:-:|:----|:-:|
|0.5%|[下界合金块×1]|30|
|0.1%|[粘液科技全解]|-|
|8.8%|[人造钻石×3]|-|
|12.2%|[微微闪耀的金西瓜片×6]|-|
|6.2%|[基础染料套装]|-|
|9.8%|[废石套装]|-|
|2.0%|[强化深板岩×1]|-|
|0.2%|[传送券（获得后立即使用）×1]|-|
|20%|[栈钱×102]|-|
|20.2%|[栈钱×31]|-|
|20%|无|-|

* 每玩家最多可抽46次

# 注释
\* 我们保留上述文本的最终解释权利。<br>
\** 以游戏内提示为准。<br>
\*** 多项奖励以`[]`包括时表示括弧内奖励为同时获取，视为一个奖励。<br>

<script src="https://rs.kdxiaoyi.top/res/scripts/js/sober@1.0.6.min.js"></script><script src="https://kdxiaoyi.top/Streack/page/js/pmd.js"></script><script src="https://rs.kdxiaoyi.top/res/scripts/js/pmd-reRender.min.js"></script>