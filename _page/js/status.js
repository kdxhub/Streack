//def
function/*修改过的func，找不到时返回空字符串*/ getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return ""; };
String.prototype./*移除指定参数*/removeQuery = function(name) { if (name == undefined) {return this.replace(/[?&].*=[^&]*&?/g, "");} else {return this.replace(`/[?&]` + name + `=[^&]*&?/g`, "");}; };
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
/*引入pmd里的存储api*/const pmdStorage={Cookies:{set:function(e,t,o,n){const s=`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(o){const e=new Date;e.setTime(e.getTime()+1e3*o),document.cookie=`${s}; expires=${e.toUTCString()}; path=${n}`}else document.cookie=`${s}; path=${n}`},get:function(e){const t=document.cookie.split("; ");for(const o of t){const[t,n]=o.split("=",2);if(decodeURIComponent(t)===e)return decodeURIComponent(n)}return null},remove:function(e){this.set(e,"",{expires:-1})},getAll:function(){const e=document.cookie.split("; "),t={};for(const o of e){const[e,n]=o.split("=",2);t[decodeURIComponent(e)]=decodeURIComponent(n)}return t},reset_dangerous:function(){const e=this.getAll();for(const t in e)this.remove(t)}},Local:{set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){localStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){localStorage.clear()}},Session:{set:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=sessionStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){sessionStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<sessionStorage.length;t++){const o=sessionStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){sessionStorage.clear()}}};
pageElements = {
  _: {
    goal: getQueryString("server"),
    streack: "streack.kdxiaoyi.top:25882",
    fetchUrl: {
      je: "https://api.mcstatus.io/v2/status/java/",
      be: "https://api.mcstatus.io/v2/status/bedrock/",
      icon: "https://api.mcstatus.io/v2/icon/",
    },
    debug: false,
    refreshTime: {
      je: -1,
      be: -1,
      IntervalID: -1,
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
  newForm: {
    root: document.getElementById("newForm"),
    url: document.getElementById("newForm-input"),
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
      notice: {
        root: document.getElementById("notice"),
        time: document.getElementById("notice-time"),
        third: document.getElementById("notice-thirdpart"),
      },
      je: {
        root: document.getElementById("je"),
        progress: document.getElementById("je-progress"),
        subtitle: document.getElementById("je-subtitle"),
        widgetbox: {
          root: document.getElementById("je-field"),
          icon: document.getElementById("je-icon"),
          motd: document.getElementById("je-motd"),
        },
        online: {
          track: document.getElementById("je-player-track"),
          tip: document.getElementById("je-player-tip"),
          listBtn: document.getElementById("je-player-list-btn"),
          list: document.getElementById("je-player-list"),
        },
      },
      be: {
        root: document.getElementById("be"),
        progress: document.getElementById("be-progress"),
        subtitle: document.getElementById("be-subtitle"),
        widgetbox: {
          root: document.getElementById("be-field"),
          motd: document.getElementById("be-motd"),
        },
      },
    },
  },
};
if (!!getQueryString("debug")) {
  pageElements._.debug = true;
  msg("调试模式已启用", "好")
  console.warn("Debug模式已启用");
  console.log("pageElements:", pageElements);
}

//PMD框架相关处理
/* 自定义Style */
if (!!conf.info.style) {
  let styleEle = document.createElement("style");
  styleEle.innerHTML = conf.info.style;
  document.body.appendChild(styleEle);
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
if (!!pmdStorage.Cookies.get("pmd-prefer_color_theme")) {
  /*如果检测到Cookies中相关设置则启用用户偏好配色*/
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "dark") {
    pageElements.content.lsidebar.slot3.user_setting.color.root.value = "dark";
  };
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "light") {
    pageElements.content.lsidebar.slot3.user_setting.color.root.value = "light";
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

//发起请求
if (
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])\.){1,}([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(:[0-9]{1,5})?$/.test(pageElements._.goal)
  ||/*IPv4*/ /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/.test(pageElements._.goal)
) {
  pageElements._.fetchUrl.je += pageElements._.goal;
  pageElements._.fetchUrl.be += pageElements._.goal;
  pageElements._.fetchUrl.icon += pageElements._.goal;
  pageElements.content.main.notice.third.innerHTML = `当前正在查询 <big><span class="selectable Mojangles">${pageElements._.goal}</span></big> 的状态，仅显示可显示信息。`;
  pageElements.newForm.url.value = pageElements._.goal;
  if (pageElements._.debug) {console.log("使用地址：",pageElements._.goal);};
} else {
  if (pageElements._.goal != "") { msg("目标服务器地址不合法", "好", true); };
  pageElements._.fetchUrl.je += pageElements._.streack;
  pageElements._.fetchUrl.be += pageElements._.streack;
  pageElements._.fetchUrl.icon += pageElements._.streack;
  if (pageElements._.debug) {console.warn("目标服务器地址不合法，已使用默认地址：",pageElements._.goal);};
};
async function fetchData(url) {
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error(response.status);
    };
    let jsonData = await response.json();
    if (!jsonData.retrieved_at) { jsonData.retrieved_at = 1; };
    if (!!jsonData.expires_at) { jsonData.cacheTimeRemaining = Math.floor((jsonData.expires_at - Date.now()) / 1000 + 1); };
    if (pageElements._.debug) { console.log("向", url, "获取数据于", Date.now(),"：", jsonData);};
    return jsonData;
  } catch (error) {
    console.error(error)
    throw error;
  };
};
function update_je() {
  //je
  pageElements.content.main.je.progress.style = ``;
  fetchData(pageElements._.fetchUrl.je)
    .then(result => {
      if (result.online) {/* 在线时更新信息 */
        pageElements.content.main.je.subtitle.style = `color:#30C496;`;
        pageElements.content.main.je.subtitle.innerHTML = `✓ 可连接`;
        /*MOTD卡片信息*/
        pageElements.content.main.je.widgetbox.root.style = ``;
        pageElements.content.main.je.widgetbox.motd.innerHTML = result.motd.html.replace(/* TODO:这里需要处理\\n */"\n", "<br>");
        pageElements.content.main.je.widgetbox.icon.src = pageElements._.fetchUrl.icon;
        /*在线人数信息*/
        pageElements.content.main.je.online.track.max = result.players.max;
        pageElements.content.main.je.online.track.value = result.players.online;
        pageElements.content.main.je.online.tip.innerHTML = `${result.players.online} / ${result.players.max}`;
        if (!!result.players.list && result.players.list.length >= 1) {
          pageElements.content.main.je.online.list.innerHTML = "";
          result.players.list.forEach((subJson) => {
            pageElements.content.main.je.online.list.innerHTML += subJson.name_html;
            pageElements.content.main.je.online.list.innerHTML += "<br>";
          });
          pageElements.content.main.je.online.listBtn.style = "";
        } else {
          pageElements.content.main.je.online.listBtn.style = "display:none;";
        };
      } else {/* 不在线时更新信息 */
        pageElements.content.main.je.subtitle.style = `color:#E23B2E;`;
        pageElements.content.main.je.subtitle.innerHTML = `✕ 未知的服务器`;
        pageElements.content.main.je.widgetbox.root.style = `display:none;`;
      };
      if (!result.cacheTimeRemaining) {/* 处理下次刷新时间 */
        pageElements._.refreshTime.je = 60;
      } else {
        pageElements._.refreshTime.je = result.cacheTimeRemaining;
      };
      if (result.retrieved_at <= (Date.now() - /* 数据更新旧于则提示*/2000)) {pageElements.content.main.je.subtitle.innerHTML += `（基于缓存）`;}
    })
    .catch(error => {
      pageElements.content.main.je.subtitle.style = `color:#FBC116;`;
      pageElements.content.main.je.subtitle.innerHTML = `✕ API故障`;
      console.error(error);
    })
    .finally(() => {
      pageElements.content.main.je.progress.style = `display:none;`;
    })
    ;
}
function update_be() {
  //be
  pageElements.content.main.be.progress.style = ``;
  fetchData(pageElements._.fetchUrl.be)
    .then(result => {
      if (result.online) {/* 在线时更新信息 */
        pageElements.content.main.be.subtitle.style = `color:#30C496;`;
        pageElements.content.main.be.subtitle.innerHTML = `✓ 可连接`;
        pageElements.content.main.be.widgetbox.root.style = ``;      } else {/* 不在线时更新信息 */
        pageElements.content.main.be.subtitle.style = `color:#E23B2E;`;
        pageElements.content.main.be.subtitle.innerHTML = `✕ 未知的服务器`;
        pageElements.content.main.be.widgetbox.root.style = `display:none;`;
      };
      if (/* 处理下次刷新时间 */!result.cacheTimeRemaining) {
        pageElements._.refreshTime.be = 60;
      } else {
        pageElements._.refreshTime.be = result.cacheTimeRemaining;
      };
      if (result.retrieved_at <= (Date.now() - /* 数据更新旧于则提示*/2000)) {pageElements.content.main.be.subtitle.innerHTML += `（基于缓存）`;}
    })
    .catch(error => {
      pageElements.content.main.be.subtitle.style = `color:#FBC116;`;
      pageElements.content.main.be.subtitle.innerHTML = `✕ API故障`;
      console.error(error);
    })
    .finally(() => {
      pageElements.content.main.be.progress.style = `display:none;`;
    })
    ;
};
update_je();
update_be();

//发起新请求按钮事件
function removeNewFormData() {
  pageElements.newForm.url.error = "";
  pageElements.newForm.url.value = ``;
};
function startNewLookup(url) {
  pageElements.newForm.url.error = "";
  if (
    /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])\.){1,}([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(:[0-9]{1,5})?$/.test(url)
    ||/*IPv4*/ /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/.test(url)
  ) {
    let targetURL = window.location.href.removeQuery();
    targetURL += "?server=" + url;
    openURL(targetURL,true)
  } else {
    if (!pageElements.newForm.url.value) {
      openURL(window.location.href.removeQuery(),true)
    } else {
      msg("无效的地址，请检查输入", "好", true);
    };
    pageElements.newForm.url.error = "true";
  };
};

//初始化计时器
pageElements._.refreshTime.IntervalID = setInterval(() => {
  pageElements._.refreshTime.je -= 1;
  pageElements._.refreshTime.be -= 1;
  if (pageElements._.refreshTime.je == 0) { update_je(); };
  if (pageElements._.refreshTime.jb == 0) { update_be(); };
  let jeTime="现在";
  let beTime="现在";
  if (pageElements._.refreshTime.je >= 1) {jeTime = pageElements._.refreshTime.je.toString() + "秒";};
  if (pageElements._.refreshTime.be >= 1) {beTime = pageElements._.refreshTime.be.toString() + "秒";};
  pageElements.content.main.notice.time.innerHTML = `${jeTime} / ${beTime}`;
}, 1000);

//remove no script tip
pageElements.no_script.remove();