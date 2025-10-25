//def
const getQueryString=(()=>{const cache=Object.create(null);return function(name){if(!name)return'';const qs=(location.search||'')+(location.hash.match(/\?.*$/)?.[0]||'');const reg=cache[name]||(cache[name]=new RegExp(`(?:^|&)${name}=([^&]*)`,'i'));const match=qs.slice(1).match(reg);return match?decodeURIComponent(match[1]):''}})();
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
  if (ConfirmBtnText) {infoJSON.action.text = ConfirmBtnText.toString();};
  if (isWarning) {infoJSON.type = "error";};
  if (duration) {infoJSON.duration = parseInt(duration.toString());};
  if (onclick) {infoJSON.action.click = onclick;};
  if (align) {infoJSON.align = ["auto", "top", "bottom"][ align.toString().match(/\d+/) % 3 ];};
  if (icon) {infoJSON.icon = icon;};
  customElements.get("s-snackbar").builder(infoJSON);
  return infoJSON;
};
/*引入pmd里的存储api*/const pmdStorage={Cookies:{set:function(e,t,o,n){const s=`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(o){const e=new Date;e.setTime(e.getTime()+1e3*o),document.cookie=`${s}; expires=${e.toUTCString()}; path=${n}`}else document.cookie=`${s}; path=${n}`},get:function(e){const t=document.cookie.split("; ");for(const o of t){const[t,n]=o.split("=",2);if(decodeURIComponent(t)===e)return decodeURIComponent(n)}return null},remove:function(e){this.set(e,"",{expires:-1})},getAll:function(){const e=document.cookie.split("; "),t={};for(const o of e){const[e,n]=o.split("=",2);t[decodeURIComponent(e)]=decodeURIComponent(n)}return t},reset_dangerous:function(){const e=this.getAll();for(const t in e)this.remove(t)}},Local:{set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){localStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){localStorage.clear()}},Session:{set:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=sessionStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){sessionStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<sessionStorage.length;t++){const o=sessionStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){sessionStorage.clear()}}};
pageElements = {
  _: {
    closeAllTabs: function() {
      if (!!document.querySelector('s-bottom-sheet')) {document.querySelector('s-bottom-sheet').showed = false;};
      if (!!document.querySelector('s-dialog')) {document.querySelector('s-dialog').showed = false;};
    },
  },
  root: document.getElementById("pageRoot"),
  no_script: document.getElementById("no_script"),
  appbar: {
    root: document.getElementById("appbarRoot"),
    menuBtn: document.getElementById("menuBtn"),
    title: document.getElementById("pageTitle"),
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
      msg: document.getElementById("msg"),
      goal: document.getElementById("goal"),
      goBtn: document.getElementById("goBtn"),
      progress: document.getElementById("counter"),
      sec: document.getElementById("secDisplay"),
    },
  },
  conf: document.getElementById("config"),
};

//PMD框架相关处理
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
}
document.head.appendChild(styleEle);
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

//修正参数
var redirect = {
  time: 5000,
  gap: 10,
  timerId: -1,
  to: "https://mc.kdxiaoyi.top/",
};
pageElements.content.main.progress.max = redirect.time;
pageElements.content.main.progress.value = redirect.time;
pageElements.content.main.goBtn.disabled = "false";
pageElements.content.main.goBtn.addEventListener("click", () => { openURL(redirect.to, true); });

//拼接新地址
try {
  let origin = new URL(location.href);
  origin.protocol = "https:";
  origin.hostname = "mc.kdxiaoyi.top";
  redirect.to = origin.href;
  if (!!getQueryString("debug")) { msg("拼接目标地址：" + redirect.to); };
} catch (e) {
  msg("未能拼接目标地址，因为发生了以下错误：" + e, "好", true);
  console.error("[Streack.old_transfer.redirect.link_process] 未能拼接目标地址，因为发生了以下错误：", e);
};

//注册计时器
redirect.timerId = setInterval(() => {
  pageElements.content.main.progress.value = pageElements.content.main.progress.value - redirect.gap;
  pageElements.content.main.sec.innerHTML = ` (${Math.floor(pageElements.content.main.progress.value / 1000 + 1)})`;
  if (pageElements.content.main.progress.value <= 10) {
    clearInterval(redirect.timerId);
    pageElements.content.main.sec.innerHTML = ``;
    pageElements.content.main.progress.style.display = `none`;
    if (!getQueryString("debug")) {
      openURL(redirect.to, true);
    } else {
      msg("调试模式下页面不会自动跳转。");
    };
  };
}, redirect.gap);

//remove no script tip
pageElements.no_script.remove();