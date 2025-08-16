// 全局变量与函数定义
function/*修改过的func，找不到时返回空字符串*/ getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return ""; };
String.prototype./*移除指定参数*/removeQuery = function (name) { if (name == undefined) { return this.replace(/[?&].*=[^&]*&?/g, ""); } else { return this.replace(`/[?&]` + name + `=[^&]*&?/g`, ""); }; };
function openURL(URI, IsInPresentWindow) {
  let linkEle = document.createElement("a");
  if (!!IsInPresentWindow) {
    linkEle.target = "_self";
  } else {
    linkEle.target = "_blank";
  };
  linkEle.href = URI;
  linkEle.click();
  return linkEle;
};
function msg(Message, ConfirmBtnText, isWarning, duration, onclick, align, icon) {
  let infoJSON = {
    root: pageElements.root,
    text: Message,
    type: "basic",
    action: {},
  };
  if (ConfirmBtnText) { infoJSON.action.text = ConfirmBtnText.toString(); };
  if (isWarning) { infoJSON.type = "error"; };
  if (duration) { infoJSON.duration = parseInt(duration.toString()); };
  if (onclick) { infoJSON.action.click = onclick; };
  if (align) { infoJSON.align = ["auto", "top", "bottom"][align.toString().match(/\d+/) % 3]; };
  if (icon) { infoJSON.icon = icon; };
  customElements.get("s-snackbar").builder(infoJSON);
  return infoJSON;
};
function CopyText(text) {
  if (!navigator.clipboard) {
    msg("未能复制文本，因为方法不支持", "好", true);
    return false;
  };
  navigator.clipboard.writeText(text.toString()).then(
    function () {
      msg(`✓ 已复制文本`, `好`);
      return true;
    },
    function () {
      msg("未能复制文本，因为拒绝访问剪贴板", "好", true);
      console.error(err);
      return false;
    },
  );
};
var uuidWorker = null;
let uuid = {};
String.prototype.lines = function () { return this.split(/\r*\n/); };
String.prototype.lineCount = function () { return this.lines().length; };
/*引入pmd里的存储api*/const pmdStorage = { Cookies: { set: function (e, t, o, n) { const s = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(o){const e=new Date;e.setTime(e.getTime()+1e3*o),document.cookie=`${s}; expires=${e.toUTCString()}; path=${n}`}else document.cookie=`${s}; path=${n}`},get:function(e){const t=document.cookie.split("; ");for(const o of t){const[t,n]=o.split("=",2);if(decodeURIComponent(t)===e)return decodeURIComponent(n)}return null},remove:function(e){this.set(e,"",{expires:-1})},getAll:function(){const e=document.cookie.split("; "),t={};for(const o of e){const[e,n]=o.split("=",2);t[decodeURIComponent(e)]=decodeURIComponent(n)}return t},reset_dangerous:function(){const e=this.getAll();for(const t in e)this.remove(t)}},Local:{set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){localStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){localStorage.clear()}},Session:{set:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=sessionStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){sessionStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<sessionStorage.length;t++){const o=sessionStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){sessionStorage.clear()}}};

// 页面元素组
pageElements = {
  _: {
    closeAllTabs: function() {
      document.querySelector('s-bottom-sheet').showed = false;
      document.querySelector('s-dialog').showed = false;
    },
  },
  root: document.getElementById("pageRoot"),
  no_script: document.getElementById("no_script"),
  appbar: {
    root: document.getElementById("appbarRoot"),
    menuBtn: document.getElementById("menuBtn"),
    title: document.getElementById("pageTitle"),
    newBtn: document.getElementById("newBtn"),
  },
  content: {
    root: document.getElementById("mainContent"),
    lsidebar: {
      root: document.getElementById("LeftSiderbar"),
      slot1: document.getElementById("slot_1"),
      slot2: document.getElementById("slot_2"),
      slot3: {
        root: document.getElementById("slot_3"),
        user_setting: {
          root: document.getElementById("user_setting_parent"),
          sub: document.getElementById("user_settings"),
          color: {
            root: document.getElementById("color_theme_prefer"),
            auto: document.getElementById("color_theme_prefer_a"),
            light: document.getElementById("color_theme_prefer_l"),
            dark: document.getElementById("color_theme_prefer_d"),
          },
        },
      },
      slot4: {
        _: {
          timeCountInterval: -1,
        },
        root: document.getElementById("slot_4"),
        saying: document.getElementById("slot_4_saying"),
        time: document.getElementById("slot_4_time"),
        license: document.getElementById("slot_4_license"),
      },
    },
    main: {
      root: document.getElementById("pContent"),
      config: {
        _: {
          loaded: [],
          save_max_spawn_number: 100,
          process: {
            still_notice_timeout: -1,
            promise: null,
          },
        },
        root: document.getElementById("confCard"),
        version: document.getElementById("uuid-version-picker"),
        number: document.getElementById("howmany-uuid"),
        number_notice: document.getElementById("howmany-uuid-notice"),
        output_format: document.getElementById("uuid-format"),
        capitalize: document.getElementById("isCapitalized"),
        dash: document.getElementById("isDashUsed"),
        spawnBtn: document.getElementById("actionBtn-spawn"),
        loading: document.getElementById("actionBtn-spawn-loading"),
        copyBtn: document.getElementById("actionBtn-copy"),
        downloadBtn: document.getElementById("actionBtn-download"),
        clearBtn: document.getElementById("actionBtn-clearAll"),
        v3_5: {
          root: document.getElementById("v3_5-conf"),
          namespace: document.getElementById("uuidv3_5-namespace-custom"),
          namespace_selector: document.getElementById("uuidv3_5-namespace-select"),
          name: document.getElementById("uuidv3_5-name"),
        },
      },
      result: {
        root: document.getElementById("resultCard"),
        renderer: {
          root: document.getElementById("result-renderer"),
          lineCounter: document.getElementById("line-numbers"),
          textarea: document.getElementById("result-renderer-text"),
        }
      },
    },
  },
};

// Import Library: uuidWorker
try {
  uuidWorker = new Worker("https://kdxiaoyi.top/Streack/_page/js/uuidg.worker.js");
  if (typeof uuidWorker !== "object") {
    throw new Error("Worker对象创建失败");
  };
  pageElements.content.main.config._.loaded.push(true);
} catch (e) {
  console.error("[Streack.webtool.uuid/initialize]", "无法加载uuid.Worker\n", `@ Import {uuidg.worker.js}\n`, e);
  pageElements.content.main.config._.loaded.push(e);
  TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, "未能加载库uuid-worker。检查网络连接并升级浏览器版本后再试。", pageElements.content.main.result.renderer.lineCounter);
};

// Import Library: uuidjs@Github.com/uuid | The MIT License @ https://github.com/uuidjs/uuid/blob/main/LICENSE.md
import('https://rs.kdxiaoyi.top/res/scripts/js/uuid@11.1.0/dist/esm-browser/index.js').then((e) => {
  uuid = e;
  pageElements.content.main.config._.loaded.push(true);
}).catch((e) => {
  console.error("[Streack.webtool.uuid/initialize]", "无法加载uuid.js\n", `@ Import {uuid.js}\n`, e);
  pageElements.content.main.config._.loaded.push(e);
  TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, "未能加载库uuid.js。检查网络连接并升级浏览器版本后再试。", pageElements.content.main.result.renderer.lineCounter);
}).finally(() => {
  if (!pageElements.content.main.config._.loaded.every(e => e === true)) {
    msg("初始化时发生错误", "好", true);
    pageElements.content.main.config.spawnBtn.disabled = true;
    pageElements.content.main.config.copyBtn.disabled = true;
    pageElements.content.main.config.downloadBtn.disabled = true;
    pageElements.content.main.config.clearBtn.disabled = true;
  } else {
    pageElements.content.main.config.spawnBtn.disabled = false;
    pageElements.content.main.config.clearBtn.click();
  };
  pageElements.content.main.config.loading.style.display = "none";
});

// PMD框架相关处理
/* 背景图 */
/* 自定义Style */
styleEle = document.createElement("style");
styleEle.innerHTML += `
  html{
    --pmd-bg-src: url(${conf.img.background.src});
    --pmd-bg-blur: blur(${conf.img.background.blur}px);
    --pmd-bg-alpha-l: ${conf.img.background.alpha[0]};
    --pmd-bg-alpha-d: ${conf.img.background.alpha[1]};
  }
`;
if (!!conf.info.style) {
  styleEle.innerHTML += conf.info.style;
  document.head.appendChild(styleEle);
}
/* 侧栏内容覆写 */
pageElements.content.lsidebar.slot1.innerHTML = `<div slot="image"><img title="${conf.sidebar.solt_1.title}" alt="${conf.sidebar.solt_1.alt}" class="ui-img sidebar_img" pmduiimg="true" src="${conf.sidebar.solt_1.src}"></div><div slot="headline"><span>${conf.sidebar.solt_1.alt}</span></div>`;
pageElements.content.lsidebar.slot2.innerHTML = conf.sidebar.solt_2.innerHTML;
pageElements.content.lsidebar.slot4.saying.innerHTML = `<center>${conf.info.saying}</center>`;
pageElements.content.lsidebar.slot4.license.innerHTML = `<center><small>以<a href="${conf.info.licen.link}">${conf.info.licen.what}</a>协议提供内容</small></center>`;
/* 配色功能 */
function ChangeColorTheme(target, animationCenter) {
  if /* 若传入无效动画中心元素则指定为侧栏按钮 */ (!(animationCenter instanceof HTMLElement)) { animationCenter = pageElements.appbar.menuBtn; };
  return pageElements.root.toggle(target, animationCenter);
};
if (!!pmdStorage.Cookies.get("pmd-prefer_color_theme") && pmdStorage.Cookies.get("pmd-prefer_color_theme") != "auto") {
  /*如果检测到Cookies中相关设置则启用用户偏好配色*/
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "dark") {
    pageElements.content.lsidebar.slot3.user_setting.color.root.value = "dark";
    ChangeColorTheme("dark");
  };
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "light") {
    pageElements.content.lsidebar.slot3.user_setting.color.root.value = "light";
    ChangeColorTheme("light");
  };
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ChangeColorTheme("dark");
  } else {
    ChangeColorTheme("light");
  };
};
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (pageElements.content.lsidebar.slot3.user_setting.color.root.value != "auto") {return;};
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ChangeColorTheme("dark");
  } else {
    ChangeColorTheme("light");
  };
});
pageElements.content.lsidebar.slot3.user_setting.color.root.addEventListener("change", () => {
  if (pageElements.content.lsidebar.slot3.user_setting.color.root.value == "auto") {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ChangeColorTheme("dark", pageElements.content.lsidebar.slot3.user_setting.color.auto);
    } else {
      ChangeColorTheme("light", pageElements.content.lsidebar.slot3.user_setting.color.auto);
    };
    pmdStorage.Cookies.set("pmd-prefer_color_theme", "auto", 2147483647, "/");
  };
  if (pageElements.content.lsidebar.slot3.user_setting.color.root.value == "dark") {
    ChangeColorTheme("dark", pageElements.content.lsidebar.slot3.user_setting.color.dark);
    pmdStorage.Cookies.set("pmd-prefer_color_theme", "dark", 2147483647, "/");
  };
  if (pageElements.content.lsidebar.slot3.user_setting.color.root.value == "light") {
    ChangeColorTheme("light", pageElements.content.lsidebar.slot3.user_setting.color.light);
    pmdStorage.Cookies.set("pmd-prefer_color_theme", "light", 2147483647, "/");
  };
});
/* 时间显示 */
function RefreshCountup(countupY, countupM, countupD) {
  /*计算时间差，JS月份从0开始要减1*/
  let timeDifference = Date.now() - new Date(countupY, countupM - 1, countupD);
  /*转换日期差*/
  let countupD_ = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let countupH = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let countupM_ = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let countupS = Math.floor((timeDifference % (1000 * 60)) / 1000);
  /*更新显示*/
  pageElements.content.lsidebar.slot4.time.innerHTML = `<center><small>本站已建立${countupD_}天${countupH}小时${countupM_}分钟${countupS}秒</small></center>`;
};
if (conf.info.time[0] && !conf.sidebar.replacement) {
  pageElements.content.lsidebar.slot4._.timeCountInterval = setInterval(() => {RefreshCountup(conf.info.time[1],conf.info.time[2],conf.info.time[3])}, 1000);
} else {pageElements.content.lsidebar.slot4.time.remove();};

// 注册高度自适应
TextareaHelper = {
  updataHeight: function(t){
    t.style.height = 'fit-content';
    t.style.height = t.scrollHeight + 'px';
    return t.offsetHeight;
  },
  updataLineCount: function (t, d) {
    d.innerHTML = "";
    for (let i = 0; i < (t.value.lineCount() - 0); i++) {
      let span = document.createElement("span");
      span.dataset.line = i + 1;
      d.appendChild(span);
    };
    return [t.offsetHeight, d.offsetHeight];
  },
  setValue: function (t, v, d) {
    t.value = v;
    TextareaHelper.updataHeight(t);
    TextareaHelper.updataLineCount(t, d);
    return [t.offsetHeight, d.offsetHeight];
  }
};

// 检查输入是否合法
pageElements.content.main.config./* 生成数量检测 */number.addEventListener("change", (e) => {
  let value = parseInt(e.srcElement.value);
  if (isNaN(value) || value < 1) {
    e.srcElement.value = 1;
  };
  pageElements.content.main.config.number_notice.innerHTML = ``;
  if (value > pageElements.content.main.config._.save_max_spawn_number) {
    pageElements.content.main.config.number_notice.innerHTML = `数量过大会引起页面卡顿，同时设置项不会自动保存。`;
  };
  if (value > 4294967295) {
    msg(`指定的数量 ${e.srcElement.value} 超出浏览器所支持上限。`, "好", false);
    e.srcElement.value = 1;
  };
});

// v3/v5参数显示处理
pageElements.content.main.config./* UUID版本选择 */version.addEventListener("change", (e) => {
  if (e.srcElement.value == "3" || e.srcElement.value == "5") {
    pageElements.content.main.config.v3_5.root.style.display = "";
  } else {
    pageElements.content.main.config.v3_5.root.style.display = "none";
  };
});
pageElements.content.main.config.v3_5./* 命名空间选择器 */namespace_selector.addEventListener("change", (e) => {
  if (e.srcElement.options[e.srcElement.selectedIndex].value == "custom") {
    pageElements.content.main.config.v3_5.namespace.readOnly = false;
    pageElements.content.main.config.v3_5.namespace.value = "";
  } else {
    pageElements.content.main.config.v3_5.namespace.readOnly = true;
    pageElements.content.main.config.v3_5.namespace.value = e.srcElement.options[e.srcElement.selectedIndex].value;
  }
});
pageElements.content.main.config.v3_5./* 命名空间改变时移除错误提示 */namespace.addEventListener("change", (e) => {
  if (e.srcElement.value != "") {
    e.srcElement.error = false;
  };
});
pageElements.content.main.config.v3_5./* 同上，名称 */name.addEventListener("change", (e) => {
  if (e.srcElement.value != "") {
    e.srcElement.error = false;
  };
});

// 清空按钮功能实现
pageElements.content.main.config.clearBtn.addEventListener("click", () => {
  pageElements.content.main.config.downloadBtn.disabled = true;
  pageElements.content.main.config.copyBtn.disabled = true;
  pageElements.content.main.config.clearBtn.disabled = true;
  TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, "Ready...", pageElements.content.main.result.renderer.lineCounter);
});

// 下载按钮功能实现
pageElements.content.main.config.downloadBtn.addEventListener("click", () => {
  let text = pageElements.content.main.result.renderer.textarea.value;
  if (text == "Ready...") {
    msg("你还没有生成任何UUID,该下载什么呢？", "好", true);
    return;
  };
  let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `uuid-${new Date().toISOString().replace(/[:.]/g, "-").replace(/T/g, "_")}.txt`;
  link.click();
});

// 复制按钮功能实现
pageElements.content.main.config.copyBtn.addEventListener("click", () => {
  let text = pageElements.content.main.result.renderer.textarea.value;
  if (text == "Ready...") {
    msg("你还没有生成任何UUID,该复制什么呢？", "好", true);
    return;
  };
  CopyText(text);
});

// 获取UUID按钮功能实现
/* 添加Worker消息处理 */
uuidWorker.onmessage = (e) => {
  if (/* 自锁判断 */!pageElements.content.main.config.spawnBtn.dataset.onprocessing) { return; };
  if (!e.data.error) {
    TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, e.data.result.join("\n"), pageElements.content.main.result.renderer.lineCounter);
  } else {
    console.error("[Streack.webtool.uuid/worker]", "Worker返回错误:", e.data.error);
    msg(`Streack.webtool.uuid/worker 抛出了错误：\n${e.data.errorReazon}`, "好", true, 10000);
    TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, `发生错误。`, pageElements.content.main.result.renderer.lineCounter);
  };
  /* 移除动画并设置状态 */
  clearTimeout(pageElements.content.main.config._.process.still_notice_timeout);
  pageElements.content.main.config.downloadBtn.disabled = false;
  pageElements.content.main.config.copyBtn.disabled = false;
  pageElements.content.main.config.clearBtn.disabled = false;
  pageElements.content.main.config.loading.style.display = "none";
  /* 移除自锁 */
  pageElements.content.main.config.spawnBtn.dataset.onprocessing = "";
};
/* 添加Worker错误处理，提供调试 */
uuidWorker.onerror = (e) => {
  console.error("[Streack.webtool.uuid/worker]", "Worker发生错误:", e);
  msg(`Streack.webtool.uuid/worker 抛出了错误：\n${e.message}`, "好", true, 10000);
  TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, `发生错误。`, pageElements.content.main.result.renderer.lineCounter);
  /* 移除动画并设置状态 */
  clearTimeout(pageElements.content.main.config._.process.still_notice_timeout);
  pageElements.content.main.config.downloadBtn.disabled = false;
  pageElements.content.main.config.copyBtn.disabled = false;
  pageElements.content.main.config.clearBtn.disabled = false;
  pageElements.content.main.config.loading.style.display = "none";
  /* 移除自锁 */
  pageElements.content.main.config.spawnBtn.dataset.onprocessing = "";
};
pageElements.content.main.config.spawnBtn.addEventListener("click", async (e) => {
  /* 校验前置条件 */
  if (/* 自锁判断 */!!e.srcElement.dataset.onprocessing) { return; };
  if (/* 初始化状态判断 */!pageElements.content.main.config._.loaded.every(e => e === true)) {
    msg("尚未初始化，请稍后再试……", "好", true);
    return;
  };
  /* v3/v5前置条件判断 */
  if (pageElements.content.main.config.version.value == "3" || pageElements.content.main.config.version.value == "5") {
    if (!pageElements.content.main.config.v3_5.name.value) {
      pageElements.content.main.config.v3_5.name.error = true;
      msg("「名称」不能为空", "好", true);
      return;
    };
    if (!uuid.validate(pageElements.content.main.config.v3_5.namespace.value)) {
      pageElements.content.main.config.v3_5.namespace.error = true;
      msg("「命名空间」需为一个有效UUID", "好", true);
      return;
    };
  };
  // /* 保存设置 */
  // if (isNaN(praseInt(pageElements.content.main.config.number.value)) || praseInt(pageElements.content.main.config.number.value) > pageElements.content.main.config._.save_max_spawn_number) {
  //   saveConf();
  // };
  /* 设置自锁 */
  e.srcElement.dataset.onprocessing = "true";
  /* 设置动画 */
  pageElements.content.main.config.loading.style.display = "";
  TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, "正在生成……", pageElements.content.main.result.renderer.lineCounter);
  pageElements.content.main.config._.process.still_notice_timeout = setTimeout(() => {
    TextareaHelper.setValue(pageElements.content.main.result.renderer.textarea, "仍在生成……", pageElements.content.main.result.renderer.lineCounter);
  }, 10000);
  let temp/*立即重绘页面*/ = e.srcElement.offsetHeight;
  /* 等待UUID生成 */
  uuidWorker.postMessage({
    loop: parseInt(pageElements.content.main.config.number.value),
    version: pageElements.content.main.config.version.value,
    v3_5: {
      namespace: pageElements.content.main.config.v3_5.namespace.value,
      name: pageElements.content.main.config.v3_5.name.value,
    },
    format: pageElements.content.main.config.output_format.value,
    capitalize: pageElements.content.main.config.capitalize.checked,
    dash: pageElements.content.main.config.dash.checked,
  });
});

//remove no script tip
pageElements.no_script.remove();