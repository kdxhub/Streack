//定义页面元素集合
pageElements = {
  _: {
    closeAllTabs: function() {
      document.querySelector('s-bottom-sheet').showed = false;
      document.querySelector('s-dialog').showed = false;
    },
  },
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
    slot: Array.from(document.querySelectorAll("div[slot='true']")),
    slot0_floatP: document.getElementById("slot0-bg-floatingText"),
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
  donateMessage: {
    root: document.getElementById("donate_message"),
    thk: document.getElementById("donate_THK_message"),
    selector: document.getElementById("donate_link_selector"),
  },
  commentMessage: {
    root: document.getElementById("comment_message"),
    id: document.getElementById("commentid"),
  },
  issueMessage: {
    _: {
      value: ["github","gitee","qq","email"],
      link: ["https://github.com/kdxhub/Streack/issues/new","https://gitee.com/kdxiaoyi/Streack/issues/new","javascript:qqunlink()","mailto:streack@kdxiaoyi.top"],
    },
    root: document.getElementById("issue_message"),
    selector: document.getElementById("issue_link_selector"),
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
const /*防抖函数，减少频繁计算*/debounce = (fn, wait = 16) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};
pageElements.main._.totalSlots = pageElements.main.slot.length;
function calcWhereOfWhichSlot() {
  const threshold = window.innerHeight * 0;
  let closestIndex = 0;
  let minDistance = Infinity;
  pageElements.main.slot.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    const distance = Math.abs(rect.top - threshold);
    if (rect.top <= threshold && distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });
  if (closestIndex == 1 && pageElements.main.slot0_floatP.classList.contains("show")) { closestIndex--; };
  pageElements.main._.CurrentSlot = closestIndex;
  window.location.hash = pageElements.main._.CurrentSlot;
};
function handleScroll(e) {
  /* 更新CurrentSlot */
  calcWhereOfWhichSlot();
  /* 首屏切换 */
  let delta;
  let deltaMax = 5;
  if (e.type === 'wheel') {
    delta = e.deltaY;
  } else if (e.type === 'touchmove') {
    delta = pageElements.main._.startY - e.touches[0].clientY;
  };
  if (delta > deltaMax && pageElements.main._.CurrentSlot == 0) {/*离开首屏*/
    if (pageElements.main._.CurrentSlot < pageElements.main._.totalSlots - 1) {
      e.preventDefault();
      scrollToSlot(1);
    };
  } else if (delta < -deltaMax && pageElements.main.root.scrollTop == 0) {/*进入首屏*/
    if (pageElements.main._.CurrentSlot > 0) {
      e.preventDefault();
      scrollToSlot(0);
    };
  };

  // if (pageElements.main.none_slot.indexOf(e.srcElement) != -1) {return;};
  // e.preventDefault();
  // if (/*若有正在播放的动画则不响应事件*/pageElements.main._.onScroll) {return;};
  // pageElements.main._.onScroll = true;
  // pageElements.main._.scrollTimeout = setTimeout(() => {
  //   pageElements.main._.onScroll = false;
  // }, /*在800毫秒内不允许再次触发事件*/800);
};
function scrollToSlot(slotIndex) {
  let slot = pageElements.main.slot[slotIndex];
  if (!!slot) {
    if (/* 由首栏至其他栏 */pageElements.main._.CurrentSlot == 0 && slotIndex != 0) {
      pageElements.main.slot[0].style.top = `-100vh`;
      pageElements.main.slot0_floatP.classList.remove("show");
    };
    if (/* 返回首栏 */pageElements.main._.CurrentSlot != 0 && slotIndex == 0) {
      pageElements.main.slot[0].style.top = `0`;
      pageElements.main.root.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        pageElements.main.slot0_floatP.classList.add("show");
      }, 500);
      pageElements.main._.CurrentSlot = slotIndex;
      window.location.hash = slotIndex;
      // let isScrolling;
      // pageElements.main.root.addEventListener('scroll', function slot0_isScrolledToTop() {
      //   clearTimeout(isScrolling);
      //   isScrolling = setTimeout(() => {
      //     pageElements.main.root.removeEventListener('scroll', slot0_isScrolledToTop);
      //     pageElements.main.slot0_floatP.classList.add("show");
      //   }, 100);
      // });
      return;
    };
    pageElements.main.root.scrollTo({
      top: slot.offsetTop,
      behavior: 'smooth',
    });
    pageElements.main._.CurrentSlot = slotIndex;
    window.location.hash = slotIndex;
    return;
  } else {
    msg("不存在的分栏……", "好", true);
    console.error("捕获了错误：","\n> StreackPage：不存在的分栏\n",`准备跳转目标分栏，但发现了${slotIndex}，其不存在于分栏表中。\n分栏表：`,pageElements.main.slot,`\n上下文：`,this);
  };
};
pageElements.main.root.addEventListener('wheel', handleScroll, { passive: false });
pageElements.main.root.addEventListener('touchstart', (e) => {
  pageElements.main._.startY = e.touches[0].clientY;
}, { passive: true });
pageElements.main.root.addEventListener('touchmove', handleScroll, { passive: false });

//Hash识别与处理
function qqunlink(/*加群*/) {
  pageElements._.closeAllTabs();
  pageElements.qunMessage.root.showed = true;
  openURL("#qqun_done", true);
  openURL(pageElements.qunMessage.id.href, true);
};
function commentlink(/*评论*/) {
  pageElements._.closeAllTabs();
  pageElements.commentMessage.root.showed = true;
  openURL("#comment_done", true);
  openURL(pageElements.commentMessage.id.href, true);
};
function donatelink(/*赞助*/from) {
  if (!from) { from = "first"; };
  switch (from.toLowerCase()) {
    case "then": {
      pageElements.donateMessage.thk.innerHTML = `谢谢。`;
      break;
    };
    case "first": {
      pageElements.donateMessage.thk.innerHTML = `赞助`;
      break;
    };
  };
  pageElements._.closeAllTabs();
  pageElements.donateMessage.root.showed = true;
  openURL("#donate_done__", true);
};
function issuelink(/*发起issue*/) {
  pageElements._.closeAllTabs();
  pageElements.issueMessage.root.showed = true;
  openURL("#issue_done", true);
};
function hashChange() {
  switch (window.location.hash.replace('#', '').toLowerCase()) {
    case "play": {
      pageElements._.closeAllTabs();
      pageElements.startPlay.root.showed = true;
      break;
    }
    case "donate": { donatelink("first"); break; };
    case "donate_done": { donatelink("then"); break; };
    case "donate_done__": { pageElements.donateMessage.thk.innerHTML = `赞助`; pageElements.donateMessage.root.showed = true; break; };
    case "qqun": { qqunlink(); break; };
    case "qqun_done": { pageElements.qunMessage.root.showed = true; break; };
    case "comment": { commentlink(); break; };
    case "comment_done": { pageElements.commentMessage.root.showed = true; break; };
    case "issue": { issuelink(); break; };
    case "issue_done": { pageElements.issueMessage.root.showed = true; break; };
    default: {
      let slotIndex = parseInt(window.location.hash.replace('#', ''));
      if (
        !isNaN(slotIndex)
        && slotIndex >= 0
        && slotIndex < pageElements.main._.totalSlots
        && slotIndex != pageElements.main._.CurrentSlot
      ) {
        scrollToSlot(slotIndex);
      };
      break;
    };
  };
}
window.addEventListener('hashchange', hashChange);
pageElements.main._.CurrentSlot = 0;
document.addEventListener('DOMContentLoaded', () => {
  hashChange();
  if (pageElements.main._.CurrentSlot == 0) {
    pageElements.main.slot0_floatP.classList.add("show");
  };
});

//处理Issue Link Selector
pageElements.issueMessage.selector.addEventListener("change", (event) => {
  let index = pageElements.issueMessage._.value.indexOf(event.target.value);
  if (index >= 0 && index <= pageElements.issueMessage._.link.length - 1) {
    openURL(pageElements.issueMessage._.link[index], true);
  } else {
    msg("不存在的工单链接标识", "好", true);
    console.error("捕获了错误：", "\n> JavaScript：数组下标越界\n", `位于Issue_Link_Selector的OpenURL()调用的数组，允许最大下标为${pageElements.issueMessage._.link.length - 1}，但发现了${index}，上下文为`, event, "\n> StreackPage：未知的Issue Link\n", `位于Issue_Link_Selector的getValue，允许的值有`, pageElements.issueMessage._.value, `，但发现了`, event.target.value);
  };
  event.target.value = "";
});

//处理Donate Link Selector
pageElements.donateMessage.selector.addEventListener("change", (event) => {
  openURL("#donate_done", true);
  openURL(event.target.value, true);
  event.target.value = "";
});

//移除no_script标签
document.getElementById(`no_script`).remove();