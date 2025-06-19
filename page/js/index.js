//定义页面元素集合
pageElements = {
  root: document.getElementById("page"),
  no_script: document.getElementById("no_script"),
  main: {
    _: {
      CurrentSlot: 0,
      scrollTimeout: 0,
      onScroll: false,
      totalSlots: 0,
      startY: 0,
      scrollIntervalID: -1,
    },
    root: document.getElementById("main"),
    slot: document.querySelectorAll("div[slot='true']"),
  },
  startPlay: {
    root: document.getElementById("go-play"),
  },
  floatBtn: {
    root: document.getElementById("floating"),
    startPlay: document.getElementById("go-play-trigger"),
  },
  qunMessage: {
    root: document.getElementById("qun_message"),
    id: document.getElementById("qqunid"),
  },
  commentMessage: {
    root: document.getElementById("comment_message"),
    id: document.getElementById("commentid"),
  },
  issueMessage: {
    root: document.getElementById("issue_message"),
  },
};
pageElements.main.slot = document.querySelectorAll("div[slot='true']");

//API
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
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

// /**TODO 首页施工自动跳转文档 */openURL("./doc",true)

//safari user-scalable=no
document.addEventListener('gesturestart', (event) => event.preventDefault())

//暗黑模式隐式支持
function ChangeColorTheme(target, animationCenter) {
  if /* 若传入无效动画中心元素则指定为默认元素 */ (!(animationCenter instanceof HTMLElement)) { animationCenter = pageElements.main.root; };
  return pageElements.root.toggle(target, animationCenter);
};
if (!!pmdStorage.Cookies.get("pmd-prefer_color_theme")) {
  /*如果检测到Cookies中相关设置则启用用户偏好配色，即继承文档配色设置*/
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "dark") {ChangeColorTheme("dark")};
  if (pmdStorage.Cookies.get("pmd-prefer_color_theme") == "light") {ChangeColorTheme("light")};
};
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if ((pmdStorage.Cookies.get("pmd-prefer_color_theme") == "dark" || pmdStorage.Cookies.get("pmd-prefer_color_theme") == "light")) { return; };
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ChangeColorTheme("dark");
  } else {
    ChangeColorTheme("light");
  };
});
if (!!(pmdStorage.Cookies.get("pmd-prefer_color_theme") == "dark" || pmdStorage.Cookies.get("pmd-prefer_color_theme") == "light")) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ChangeColorTheme("dark");
  } else {
    ChangeColorTheme("light");
  };
};

//抽屉滚动动态支持
pageElements.main._.totalSlots = pageElements.main.slot.length;
function handleScroll(e) {
  e.preventDefault();
  if (/*若有正在播放的动画则不响应事件*/pageElements.main._.onScroll) {return;};
  let delta;
  if (e.type === 'wheel') {
    delta = e.deltaY;
  } else if (e.type === 'touchmove') {
    delta = pageElements.main._.startY - e.touches[0].clientY;
  };
  if (delta > 5) {/*向下*/
    if (pageElements.main._.CurrentSlot < pageElements.main._.totalSlots - 1) {
      pageElements.main._.CurrentSlot++;
      scrollToSlot(pageElements.main._.CurrentSlot);
    };
  } else if (delta < -5) {/*向上*/
    if (pageElements.main._.CurrentSlot > 0) {
      pageElements.main._.CurrentSlot--;
      scrollToSlot(pageElements.main._.CurrentSlot);
    };
  };
  pageElements.main._.onScroll = true;
  pageElements.main._.scrollTimeout = setTimeout(() => {
    pageElements.main._.onScroll = false;
  }, /*在800毫秒内不允许再次触发事件*/800);
};
function scrollToSlot(slotIndex) {
  let slot = pageElements.main.slot[slotIndex];
  if (!!slot) {
    pageElements.main.root.scrollTo({
      top: slot.offsetTop,
      behavior: 'smooth',
    });
    pageElements.main._.CurrentSlot = slotIndex;
    window.location.hash = slotIndex;
  } else {
    msg("不存在的分栏……", "好", true);
    console.error(`不存在的分栏${slotIndex}`);
  };
};
pageElements.main.root.addEventListener('wheel', handleScroll, { passive: false });
pageElements.main.root.addEventListener('touchstart', (e) => {
  pageElements.main._.startY = e.touches[0].clientY;
}, { passive: true });
pageElements.main.root.addEventListener('touchmove', handleScroll, { passive: false });

//Hash识别与处理
function qqunlink(/*加群*/) {
  pageElements.startPlay.root.showed = false;
  pageElements.qunMessage.root.showed = true;
  pageElements.commentMessage.root.showed = false;
  pageElements.issueMessage.root.showed = false;
  openURL("#qqun_done", true);
  openURL(pageElements.qunMessage.id.href, true);
};
if (window.location.hash.replace('#', '').toLowerCase() == "qqun") {qqunlink();};
if (window.location.hash.replace('#', '').toLowerCase() == "qqun_done") {pageElements.qunMessage.root.showed = true;};
function commentlink(/*评论*/) {
  pageElements.startPlay.root.showed = false;
  pageElements.qunMessage.root.showed = false;
  pageElements.commentMessage.root.showed = true;
  pageElements.issueMessage.root.showed = false;
  openURL("#comment_done", true);
  openURL(pageElements.commentMessage.id.href, true);
};
if (window.location.hash.replace('#', '').toLowerCase() == "comment") {qqunlink();};
if (window.location.hash.replace('#', '').toLowerCase() == "comment_done") {pageElements.commentMessage.root.showed = true;};
function issuelink(/*发起issue*/open) {
  pageElements.startPlay.root.showed = false;
  pageElements.qunMessage.root.showed = false;
  pageElements.commentMessage.root.showed = false;
  pageElements.issueMessage.root.showed = true;
  openURL("#issue_done", true);
};
if (window.location.hash.replace('#', '').toLowerCase() == "issue") {issuelink();};
if (window.location.hash.replace('#', '').toLowerCase() == "issue_done") {pageElements.issueMessage.root.showed = true;};


//当hash变更时也要滚动
window.addEventListener('hashchange', () => {
  if (window.location.hash.replace('#', '').toLowerCase() == "qqun") {qqunlink();return;};
  let slotIndex = parseInt(window.location.hash.replace('#', ''));
  if (!isNaN(slotIndex) && slotIndex >= 0 && slotIndex < pageElements.main._.totalSlots) {
    scrollToSlot(slotIndex);
  };
});

//移除no_script标签
document.getElementById(`no_script`).remove();