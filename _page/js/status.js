//def
function/*修改过的func，找不到时返回空字符串*/ getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return ""; };
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
    refreshTime: -1,
  },
  root: document.getElementById("a"),
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
      notice: {
        root: document.getElementById("notice"),
        time: document.getElementById("notice-time"),
        third: document.getElementById("notice-thirdpart"),
      },
      je: {
        root: document.getElementById("je"),
        progress: document.getElementById("je-progress"),
        subtitle: document.getElementById("je-subtitle"),
      },
      be: {
        root: document.getElementById("be"),
        progress: document.getElementById("be-progress"),
        subtitle: document.getElementById("be-subtitle"),
      },
    },
  },
};

//PMD框架相关处理
pageElements.content.lsidebar.slot1.innerHTML = `<div slot="image"><img title="${conf.sidebar.solt_1.title}" alt="${conf.sidebar.solt_1.alt}" class="ui-img sidebar_img" pmduiimg="true" src="${conf.sidebar.solt_1.src}"></div><div slot="headline"><span>${conf.sidebar.solt_1.alt}</span></div>`;
pageElements.content.lsidebar.slot2.innerHTML = conf.sidebar.solt_2.innerHTML;
pageElements.content.lsidebar.slot4.saying.innerHTML = `<center>${conf.info.saying}</center>`;
pageElements.content.lsidebar.slot4.license.innerHTML = `<center><small>以<a href="${conf.info.licen.link}">${conf.info.licen.what}</a>协议提供内容</small></center>`;

//发起请求
if (
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])\.){1,}([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(:[0-9]{1,5})?$/.test(pageElements._.goal)
  ||/*IPv4*/ /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/.test(pageElements._.goal)
) {
  pageElements._.fetchUrl.je += pageElements._.goal;
  pageElements._.fetchUrl.be += pageElements._.goal;
  pageElements._.fetchUrl.icon += pageElements._.goal;
  pageElements.content.main.notice.third.innerHTML = `当前正在查询 <big><span class="selectable Mojangles">${pageElements._.goal}</span></big> 的状态，仅显示可显示信息。`;
} else {
  if (pageElements._.goal != "") { msg("目标服务器地址不合法", "好", true); };
  pageElements._.fetchUrl.je += pageElements._.streack;
  pageElements._.fetchUrl.be += pageElements._.streack;
  pageElements._.fetchUrl.icon += pageElements._.streack;
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
    if (!!jsonData.expires_at) { jsonData.cacheTimeRemaining = Math.floor((jsonData.expires_at - Date.now()) / 1000); };
    return jsonData;
  } catch (error) {
    console.error(error)
    throw error;
  };
};
function update() {
  //je
  pageElements.content.main.je.progress.style = ``;
  fetchData(pageElements._.fetchUrl.je)
    .then(result => {
      if (result.online) {
        pageElements.content.main.je.subtitle.style = `color:#30C496;`;
        pageElements.content.main.je.subtitle.innerHTML = `✓ 可连接`;
      } else {
        pageElements.content.main.je.subtitle.style = `color:#E23B2E;`;
        pageElements.content.main.je.subtitle.innerHTML = `✕ 未知的服务器`;
      };
      if (!result.cacheTimeRemaining) {
        pageElements._.refreshTime = 60;
      } else {
        pageElements.content.main.je.subtitle.innerHTML += `（基于缓存）`;
        pageElements._.refreshTime = result.cacheTimeRemaining;
        pageElements._.refreshTime_je = result.cacheTimeRemaining;
      };
    })
    .catch(error => {
      pageElements.content.main.je.subtitle.style = `color:#FBC116;`;
      pageElements.content.main.je.subtitle.innerHTML = `✕ API故障`;
    })
    .finally(() => {
      pageElements.content.main.je.progress.style = `display:none;`;
    })
    ;
  //be
  pageElements.content.main.be.progress.style = ``;
  fetchData(pageElements._.fetchUrl.be)
    .then(result => {
      if (result.online) {
        pageElements.content.main.be.subtitle.style = `color:#30C496;`;
        pageElements.content.main.be.subtitle.innerHTML = `✓ 可连接`;
      } else {
        pageElements.content.main.be.subtitle.style = `color:#E23B2E;`;
        pageElements.content.main.be.subtitle.innerHTML = `✕ 未知的服务器`;
      };
      if (!result.cacheTimeRemaining) {
        pageElements._.refreshTime = 60;
      } else {
        pageElements.content.main.be.subtitle.innerHTML += `（基于缓存）`;
        if (pageElements._.refreshTime < pageElements._.refreshTime_je) {
          pageElements._.refreshTime = result.cacheTimeRemaining;
        };
      };
    })
    .catch(error => {
      pageElements.content.main.be.subtitle.style = `color:#FBC116;`;
      pageElements.content.main.be.subtitle.innerHTML = `✕ API故障`;
    })
    .finally(() => {
      pageElements.content.main.be.progress.style = `display:none;`;
    })
    ;
};
update();

//初始化计时器
setInterval(() => {
  pageElements._.refreshTime -= 1;
  if (pageElements._.refreshTime == 0) { update(); };
  if (pageElements._.refreshTime >= 1) {
    pageElements.content.main.notice.time.innerHTML = `${pageElements._.refreshTime}秒`;
  } else {
    pageElements.content.main.notice.time.innerHTML = `现在`;
  };
}, 1000);

//remove no script tip
pageElements.no_script.remove();