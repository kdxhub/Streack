var uuidErr = "";
// Import Library: uuidjs@Github.com/uuid | The MIT License @ https://github.com/uuidjs/uuid/blob/main/LICENSE.md
import('https://rs.kdxiaoyi.top/res/scripts/js/uuid@11.1.0/dist/esm-browser/index.js').then((e) => {
  uuid = e;
}).catch((e) => {
  console.error("[Streack.webtool.uuid/initialize]", "无法加载uuid.js\n", `@ Import {uuid.js}\n`, e);
  uuidErr = "未能加载库uuid.js。检查网络连接并升级浏览器版本后再试。";
})

Object.defineProperty(Uint8Array.prototype, 'toHex', {
  value () {
    return Array.from(this, b => b.toString(16).padStart(2, '0'))
  },
  enumerable: false
})
Object.defineProperty(Uint8Array.prototype, 'toBin', {
  value () {
    return Array.from(this, b => b.toString(2).padStart(8, '0'))
  },
  enumerable: false
})
Object.defineProperty(Uint8Array.prototype, 'toDec', {
  value () {
    return Array.from(this, b => b.toString(10).padStart(3, '0'))
  },
  enumerable: false
})
Object.defineProperty(Uint8Array.prototype, 'toBase64', {
  value () {
    if (typeof btoa/* Browser */ === 'function') {
      const binStr = Array.from(this, b => String.fromCharCode(b)).join('')
      return btoa(binStr)
    }
    if (typeof Buffer/* Node.js */ !== 'undefined') {
      return Buffer.from(this.buffer, this.byteOffset, this.byteLength).toString('base64')
    }
    throw new Error('Unsupported runtime')
  },
  enumerable: false
})

String.prototype.UUIDformat = function (dash, format) {
  switch (format) {
    case "bin": {
      return uuid.parse(this.toString()).toBin().join("");
    };
    case "dec": {
      return uuid.parse(this.toString()).toDec().join();
    };
    case "binA": {
      return "[" + uuid.parse(this.toString()).toBin().join(",") + "]";
    };
    case "decA": {
      return "[" + uuid.parse(this.toString()).toDec().join(",") + "]";
    };
    case "hexA": {
      return "[" + uuid.parse(this.toString()).toHex().join(",") + "]";
    };
    case "base64": {
      return uuid.parse(this.toString()).toBase64();
    };
    default: {
      if (!!dash) {
        return this;
      } else {
        return this.replace(/-/g, "");
      };
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
      result = Array.from({ length: e.data.loop }, () => uuid.v3(e.data.v3_5.name, e.data.v3_5.namespace).UUIDformat(e.data.dash, e.data.format));
      break;
    };
    case "5": {
      result = Array.from({ length: e.data.loop }, () => uuid.v5(e.data.v3_5.name, e.data.v3_5.namespace).UUIDformat(e.data.dash, e.data.format));
      break;
    };
    case "1": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v1().UUIDformat(e.data.dash, e.data.format));
      };
      break;
    };
    case "6": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v6().UUIDformat(e.data.dash, e.data.format));
      };
      break;
    };
    case "7": {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v7().UUIDformat(e.data.dash, e.data.format));
      };
      break;
    };
    default: {
      for (let i = 0; i < e.data.loop; i++) {
        result.push(uuid.v4().UUIDformat(e.data.dash, e.data.format));
      };
      break;
    };
  };
  if (e.data.capitalize) {
    result = result.map((e) => e.toUpperCase());
  };
  postMessage({ error: false, result: result });
};

// capitalize: false
// dash: true
// format: "string"|"bin"|"hex"|"base64"
// loop: 1
// v3_5: {namespace: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', name: 'kdxiaoyi.top'}
// version: "4"