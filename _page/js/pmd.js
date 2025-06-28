// 自定义设置项区 详见文档：https://kdxiaoyi.top/Pages-md-reRender/global-conf (有待更新)
const conf = {
  info: {
    /*浏览器语言检测覆写*/
    lang: "zh-hans",
    /*启用建站时长计时 [是否启用t/f,年,月,日]*/
    time: [true,2024,12,25],
    /*左侧边栏·一言*/
    saying: `不是最好的体验却是尽心尽力的服务`,
    licen: {
      /*文章授权协议*/
      what: `CC BY-NC 4.0`,
      /*文章授权协议链接*/
      link: `https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans`,
    },
    /*自定义CSS样式*/
    style: `s-card#slot_2 {flex-wrap: wrap;flex-direction: row;}`,
    CloudflareAPI/* TODO，启用无效 */: {
      /*在脚注中显示Cloudflare节点信息，需要你的站点经过其代理*/
      enabled: false,
      /*Cloudflare节点信息映射表，一般不需要改动*/
      nodes: false,
    },
    /*允许将正文内的View on Github按钮转移*/
    view_on_github: true,
  },
  code: {
  /*在代码块下方添加复制代码按钮*/
    enabled: true,
    /*代码块复制按钮默认文本*/
    tip: "Copy",
    /*代码块复制按钮点击后文本*/
    done: "Copied!",
  },
  img: {
    /*允许点击图片来查看原图*/
    view: true,
    imgse_com: {
      /*启用查看原图对imgse图床的优化*/
      enabled: true,
      /*启用查看原图 跳转至imgse查看页而不是源文件*/
      detail: true,
    },
    /*图片加载失败后的占位符图片*/
    error: "https://rs.kdxiaoyi.top/res/images/load_err.svg",
    background: {
      /*背景图片（自动应用不透明遮罩）*/
      src: "https://s21.ax1x.com/2025/04/22/pEIZ9AA.png",
      /*背景图片遮罩透明度，分别为亮色和暗色遮罩，范围0~1*/
      alpha: [0.8, 0.82],
      /*背景图片模糊度，为-1禁用*/
      blur: -1,
    },
  },
  sidebar: {
    solt_1: {
      /*左侧边栏·第1格·背景图片*/
      src: `http://kdxiaoyi.top/Streack/assets/img/cover.png`,
      /*左侧边栏·第1格·背景图片描述*/
      alt: `栈流 Streack`,
      /*左侧边栏·第1格·描述文案背景，依次亮色透明度、暗色透明度、亮色模糊度、暗色模糊度*/
      background: [0.8, 0.82, -1, -1],
      /*左侧边栏·第1格·图片标题（悬浮提示内容）*/
      title: "栈流Streack题图",
    },
    solt_2: {
      /*左侧边栏·第2格内容*/
      innerHTML:`
<s-chip id="side_ship_0" onclick="openURL('/Streack/',true)" clickable="true" class="sidebar_btn">
<s-icon slot="start" name="home"></s-icon>
首页</s-chip>
<s-chip id="side_ship_1" onclick="openURL('/Streack/#play',true)" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"></path></svg></s-icon>
加入我们</s-chip>
<s-chip id="side_ship_2" onclick="openURL('/Streack/doc/',true)" style="width:49%;margin:1% auto 1% 0%;" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg viewBox="0 -960 960 960"><path d="M80-720v-200h200v80H160v120H80Zm720 0v-120H680v-80h200v200h-80ZM80-40v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680ZM280-240h400v-480H280v480Zm0 80q-33 0-56.5-23.5T200-240v-480q0-33 23.5-56.5T280-800h400q33 0 56.5 23.5T760-720v480q0 33-23.5 56.5T680-160H280Zm80-400h240v-80H360v80Zm0 120h240v-80H360v80Zm0 120h240v-80H360v80Zm-80 80v-480 480Z"></path></svg></s-icon>
文档目录</s-chip>
<s-chip id="side_ship_5" onclick="openURL('/Streack/#issue',true)" style="width:49%;margin:1% 0 1% 0%;" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg viewBox="0 -960 960 960"><path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z"></path></svg></s-icon>
反馈与申诉</s-chip>
<s-chip id="side_ship_4" onclick="openURL('/Streack/doc/event/',true)" style="width:49%;margin:1% auto 1% 0%;" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg viewBox="0 -960 960 960"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path></svg></s-icon>
活动一览</s-chip>
<s-chip id="side_ship_3" onclick="openURL('/Streack/doc/news/',true)" style="width:49%;margin:1% 0 1% 0%;" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"></path></svg></s-icon>
近期资讯</s-chip>
<s-chip id="side_ship_6" onclick="openURL('/Streack/webtool/status',true)" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg viewBox="0 -960 960 960"><path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z"></path></svg></s-icon>
服务器实时状态</s-chip>`,
      /*左侧边栏·第2格内容中没有按文档编写请启用此项*/
      preventDefault: false,
    },
    /*自定义边栏内容，禁用保持留空*/
    replacement: ``,
  },
  copy: {
  },
  hyper_markdown: {
    /*在标题的最后添加一个按钮以复制链接指向这个标题*/
    header_link: true,
    /*在页面底端增加文章脚注，为空不额外添加*/
    footer: `Copyright © 2025, Streack & kdxiaoyi.<br>此站点与Mojang Studio、Microsoft或网易Netease没有任何关联。`,
    /*检查引用部分高级语法，详见文档*/
    quotepro: [true,`#1A73E7`,`#FBC116`,`#E23B2E`,`#30C496`],
  },
  link: {
    arrow: {
      /*为所有在新标签页打开的链接添加右上箭头*/
      enabled: true,
      /*仅对含有 ↗ 或 $ 的链接生效*/
      replace: true,
      /*如果链接含有 ฿ 则将其修改为新标签页打开*/
      target_replace: true,
      /*外链图标*/
      icon: `<s-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg></s-icon>`,
    },
  },
  index: {
    /*启用目录统计，高级用法详见文档*/
    enabled: true,
    /*启用目录索引侧栏*/
    sidebar: true,
  },
};
/*在复制的文本结尾追加文字，见文档*/
conf.copy.endnote = `Copyright © 2025, kdxiaoyi & Streack.<br>本站点和服务器与Mojang Studio、Microsoft、网易Netease均没有关联。`;