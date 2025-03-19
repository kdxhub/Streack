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
    style: ``,
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
      src: "http://kdxiaoyi.top/Streack/assets/img/cover.png",
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
    },
    solt_2: {
      /*左侧边栏·第2格内容*/
      innerHTML:`
<s-chip id="side_ship_0" onclick="openURL('/Streack/','')" clickable="true" class="sidebar_btn">
<s-icon slot="start" type="home"></s-icon>
首页</s-chip>
<s-chip id="side_ship_1" onclick="openURL('/Streack/doc/connect/join','')" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"></path></svg></s-icon>
加入服务器</s-chip>
<s-chip id="side_ship_2" onclick="openURL('/Streack/doc/','')" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280v-40h80v40h-80Zm0-60v-31q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v31h-80Zm200 18-42-43q11-17 16.5-36t5.5-39q0-20-5.5-39T598-515l42-43q20 26 30 56t10 62q0 32-10 62t-30 56Zm-320 0q-20-26-30-56t-10-62q0-83 58.5-141.5T480-640v-50l90 80-90 80v-50q-58 0-99 41t-41 99q0 20 5.5 39t16.5 36l-42 43ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Zm0 80v40h480v-40H240Zm0-640h480v-40H240v40Zm0-40v40-40Zm0 720v-40 40Z"></path></svg></s-icon>
文档</s-chip>`,
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
    footer: ``,
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