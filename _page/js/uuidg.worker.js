var uuidErr = "";
// Import Library: uuidjs@Github.com/uuid | The MIT License @ https://github.com/uuidjs/uuid/blob/main/LICENSE.md
import('https://rs.kdxiaoyi.top/res/scripts/js/uuid@11.1.0/dist/esm-browser/index.js').then((e) => {
  uuid = e;
}).catch((e) => {
  console.error("[Streack.webtool.uuid/initialize]", "无法加载uuid.js\n", `@ Import {uuid.js}\n`, e);
  uuidErr = "未能加载库uuid.js。检查网络连接并升级浏览器版本后再试。";
})

String.prototype.UUIDformat = function (dash, capitalize, format) {
  switch (format) {
    case "string": {
      return this;
    };
    case "bin": {
      return uuid.parse(this).join("");
    };
    case "hex": {
      return uuid.parse(this).join().toString("hex");
    };
    case "base64": {
      return Buffer.from(uuid.parse(this)).toString("base64");
    };
    default: {
      return this;
    };
  };
};

onmessage = (e) => {
  if (/* uuid.js库加载失败 */!!uuidErr) {
    postMessage({ error: true, errorReazon: uuidErr });
    return;
  }
  let result = [];
  switch (e.data.version) {
    case "3": {
      result = Array.from({ length: e.data.loop }, () => uuid.v3(e.data.v3_5.name, e.data.v3_5.namespace).UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      break;
    };
    case "5": {
      result = Array.from({ length: e.data.loop }, () => uuid.v5(e.data.v3_5.name, e.data.v3_5.namespace).UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      break;
    };
    case "1": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v1().UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      };
      break;
    };
    case "6": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v6().UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      };
      break;
    };
    case "7": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v7().UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      };
      break;
    };
    default: {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v4().UUIDformat(e.data.dash, e.data.capitalize, e.data.format));
      };
      break;
    };
  };
  postMessage({ error: false, result: result });
};

// capitalize: false
// dash: true
// format: "string"|"bin"|"hex"|"base64"
// loop: 1
// v3_5: {namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', name: 'kdxiaoyi.top'}
// version: "4"