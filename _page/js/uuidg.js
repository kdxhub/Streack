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
String.prototype.lines = function() { return this.split(/\r*\n/); };
String.prototype.lineCount = function() { return this.lines().length; };
/*引入pmd里的存储api*/const pmdStorage={Cookies:{set:function(e,t,o,n){const s=`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(o){const e=new Date;e.setTime(e.getTime()+1e3*o),document.cookie=`${s}; expires=${e.toUTCString()}; path=${n}`}else document.cookie=`${s}; path=${n}`},get:function(e){const t=document.cookie.split("; ");for(const o of t){const[t,n]=o.split("=",2);if(decodeURIComponent(t)===e)return decodeURIComponent(n)}return null},remove:function(e){this.set(e,"",{expires:-1})},getAll:function(){const e=document.cookie.split("; "),t={};for(const o of e){const[e,n]=o.split("=",2);t[decodeURIComponent(e)]=decodeURIComponent(n)}return t},reset_dangerous:function(){const e=this.getAll();for(const t in e)this.remove(t)}},Local:{set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){localStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){localStorage.clear()}},Session:{set:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},get:function(e){const t=sessionStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}},remove:function(e){sessionStorage.removeItem(e)},getAll:function(){const e={};for(let t=0;t<sessionStorage.length;t++){const o=sessionStorage.key(t);e[o]=this.get(o)}return e},reset_dangerous:function(){sessionStorage.clear()}}};
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

// UUID生成器与封装
let UUIDGeneratorUtil = {
  hexToBytes:/* 将16进制字符串转为字节数组 */ function (hex) {
    hex = hex.replace(/-/g, '');
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
  },
  bytesToHex:/** 将字节数组转换为UUID格式的16进制字符串 */ function (bytes) {
    return [
      bytes.slice(0, 4).join(''),
      bytes.slice(4, 6).join(''),
      bytes.slice(6, 8).join(''),
      bytes.slice(8, 10).join(''),
      bytes.slice(10, 16).join('')
    ].map(s => s.replace(/([0-9a-f]{2})/g, '$1')).join('-');
  },
  hashToUUID:/** 使用指定算法生成哈希型UUID */ async function (algorithm, input, version) {
    const hash = await crypto.subtle.digest(algorithm, input);
    const bytes = new Uint8Array(hash);
    // 设置版本和变体位
    bytes[6] = (bytes[6] & 0x0F) | (version << 4);
    bytes[8] = (bytes[8] & 0x3F) | 0x80;
    return UUIDGeneratorUtil.bytesToHex(bytes.slice(0, 16));
  }
};
let UUIDGenerator = {
  v1: function () {
    // 虚拟MAC地址（6字节随机数，符合RFC标准）
    const mac = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));
    mac[0] |= 0x01; // 设置组播位（避免真实MAC）
    // 当前时间戳（从1582-10-15开始的100ns计数）
    const now = Date.now();
    const timestamp = (now * 10000) + 122192928000000000;
    // 分割时间戳到UUID字段
    const timeLow = (timestamp & 0xFFFFFFFF) >>> 0;
    const timeMid = ((timestamp >>> 32) & 0xFFFF) >>> 0;
    const timeHi = ((timestamp >>> 48) & 0x0FFF) | (1 << 12); // 版本1标记
    // 时钟序列（2字节随机数）
    const clockSeq = Math.floor(Math.random() * 0x3FFF);
    // 组装UUID
    const hex = (num, length) => num.toString(16).padStart(length, '0');
    return [
      hex(timeLow, 8),
      hex(timeMid, 4),
      hex(timeHi, 4),
      hex((clockSeq & 0x3FFF) | 0x8000, 4), // 变体标记
      hex((mac[0] << 8) | mac[1], 4),
      hex((mac[2] << 8) | mac[3], 4),
      hex((mac[4] << 8) | mac[5], 4)
    ].join('-');
  },
  v3: function (namespace, name) {
    // 预定义命名空间UUID（RFC标准）
    const NS = {
      'ns:dns': '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      'ns:url': '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
      'ns:oid': '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
      'ns:x500': '6ba7b814-9dad-11d1-80b4-00c04fd430c8'
    };
    // 将命名空间UUID和名称转换为字节
    const nsBytes = UUIDGeneratorUtil.hexToBytes(NS[namespace] || namespace);
    const nameBytes = new TextEncoder().encode(name);
    const input = new Uint8Array([...nsBytes, ...nameBytes]);
    // 计算MD5哈希（浏览器原生API）
    return UUIDGeneratorUtil.hashToUUID('MD5', input, 3);
  },
  v4: function () {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    // 设置版本和变体位
    bytes[6] = (bytes[6] & 0x0F) | 0x40; // 版本4
    bytes[8] = (bytes[8] & 0x3F) | 0x80;  // 变体10
    return UUIDGeneratorUtil.bytesToHex(bytes);
  },
  v5: function (namespace, name) {
    // 同v3，但使用SHA-1
    const NS = {
      'ns:dns': '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      'ns:url': '6ba7b811-9dad-11d1-80b4-00c04fd430c8'
    };
    const nsBytes = UUIDGeneratorUtil.hexToBytes(NS[namespace] || namespace);
    const nameBytes = new TextEncoder().encode(name);
    const input = new Uint8Array([...nsBytes, ...nameBytes]);
    return UUIDGeneratorUtil.hashToUUID('SHA-1', input, 5);
  },
  v6: function () {
    // 类似v1，但时间戳字段顺序调整
    const uuidv1 = v1().replace(/-/g, '');
    const bytes = UUIDGeneratorUtil.hexToBytes(uuidv1);
    // 重新排列时间戳字段
    const newBytes = new Uint8Array(16);
    newBytes.set(bytes.slice(4, 10), 0);  // 时间低位
    newBytes.set(bytes.slice(2, 4), 6);   // 时间中位
    newBytes.set(bytes.slice(0, 2), 8);   // 时间高位
    newBytes.set(bytes.slice(10), 10);    // 其余部分
    // 设置版本6标记
    newBytes[6] = (newBytes[6] & 0x0F) | 0x60;
    return UUIDGeneratorUtil.bytesToHex(newBytes);
  },
  v7: function () {
    const timestamp = Date.now();
    const randBytes = new Uint8Array(10);
    crypto.getRandomValues(randBytes);
    // 组装UUID（48位时间戳 + 74位随机数）
    const bytes = new Uint8Array(16);
    bytes[0] = (timestamp >>> 40) & 0xFF;
    bytes[1] = (timestamp >>> 32) & 0xFF;
    bytes[2] = (timestamp >>> 24) & 0xFF;
    bytes[3] = (timestamp >>> 16) & 0xFF;
    bytes[4] = (timestamp >>> 8) & 0xFF;
    bytes[5] = timestamp & 0xFF;
    bytes.set(randBytes.slice(0, 10), 6);
    // 设置版本7标记
    bytes[6] = (bytes[6] & 0x0F) | 0x70;
    return UUIDGeneratorUtil.bytesToHex(bytes);
  },
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
    t.style.height = 'auto';
    t.style.height = t.scrollHeight + 'px';
  },
  updataLineCount: function (t, d) {
    d.innerHTML = "";
    for (let i = 0; i < (t.value.lineCount() - 0); i++) {
      let span = document.createElement("span");
      span.dataset.line = i + 1;
      d.appendChild(span);
    };
  }
};
TextareaHelper.updataHeight(pageElements.content.main.result.renderer.textarea);
TextareaHelper.updataLineCount(pageElements.content.main.result.renderer.textarea, pageElements.content.main.result.renderer.lineCounter);
pageElements.content.main.result.renderer.textarea.addEventListener("input", (e) => {
  TextareaHelper.updataHeight(e.srcElement);
  TextareaHelper.updataLineCount(e.srcElement, pageElements.content.main.result.renderer.lineCounter);
});

// 检查输入是否合法
pageElements.content.main.config./* 生成数量检测 */number.addEventListener("change", (e) => {
  let value = parseInt(e.srcElement.value);
  if (isNaN(value) || value < 1) {
    e.srcElement.value = 1;
  };
  pageElements.content.main.config.number_notice.innerHTML = ``;
  if (value > 100) {
    pageElements.content.main.config.number_notice.innerHTML = `数量过大会引起页面卡顿，同时设置项不会自动保存。`;
  };
});

//按钮功能实现
pageElements.content.main.config./* 清空 */clearBtn.addEventListener("click", () => {
  pageElements.content.main.result.renderer.textarea.value = "Ready...";
  pageElements.content.main.config.downloadBtn.disabled = true;
  pageElements.content.main.config.copyBtn.disabled = true;
  pageElements.content.main.config.clearBtn.disabled = true;
  TextareaHelper.updataHeight(pageElements.content.main.result.renderer.textarea);
  TextareaHelper.updataLineCount(pageElements.content.main.result.renderer.textarea, pageElements.content.main.result.renderer.lineCounter);
});
pageElements.content.main.config.clearBtn.click();
pageElements.content.main.config./* 下载 */downloadBtn.addEventListener("click", () => {
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
pageElements.content.main.config./* 复制 */copyBtn.addEventListener("click", () => {
  let text = pageElements.content.main.result.renderer.textarea.value;
  if (text == "Ready...") {
    msg("你还没有生成任何UUID,该复制什么呢？", "好", true);
    return;
  };
  CopyText(text);
});

//remove no script tip
pageElements.no_script.remove();