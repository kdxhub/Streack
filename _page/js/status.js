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
  },
  root: document.getElementById("a"),
  no_script: document.getElementById("no_script"),
  progress: document.getElementById("progress"),
  appbar: {
    root: document.getElementById("appbarRoot"),
    menuBtn: document.getElementById("menuBtn"),
    title: document.getElementById("pageTitle"),
    refreshBtn: document.getElementById("refreshBtn"),
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
      },
      be: {
        root: document.getElementById("be"),
      },
    },
  },
};

//发起请求
if (
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])\.){1,}([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(:[0-9]{1,5})?$/.test(pageElements._.goal)
  ||/*IPv4*/ /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/.test(pageElements._.goal)
  ) {
    pageElements._.fetchUrl.je += pageElements._.goal;
    pageElements._.fetchUrl.be += pageElements._.goal;
    pageElements._.fetchUrl.icon += pageElements._.goal;
    pageElements.content.main.notice.third.innerHTML=`当前正在查询<big><span class="selectable Mojangles">${pageElements._.goal}</span></big>的状态，仅显示可显示信息。`;
  } else {
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
    jsonData.cacheTimeRemaining = response.headers.get('X-Cache-Time-Remaining');
    return jsonData;
  } catch (error) {
    throw error;
  };
}
fetchData(/*je*/pageElements._.fetchUrl.je)
  .then(result => {
    console.log("请求成功:", result);
  })
  .catch(error => {
    console.error("请求失败:", error);
  })
;

//remove no script tip
pageElements.no_script.remove();