//Sat Sep 27 2025 14:53:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function e() {
  new PerformanceObserver(_0x2a1e91 => {
    _0x2a1e91.getEntries().forEach(_0x5b819f => {
      "navigation" === _0x5b819f.entryType && console.log("页面加载时间:", _0x5b819f.loadEventEnd - _0x5b819f.loadEventStart);
    });
  }).observe({
    entryTypes: ["navigation", "measure"]
  });
}
function n() {
  let _0x3d1d14;
  let _0x19c89b = 0;
  let _0x44c439 = 0;
  document.addEventListener("click", () => {
    _0x19c89b++;
    _0x19c89b % 10 == 0 && console.log("用户点击次数:", _0x19c89b);
  });
  window.addEventListener("scroll", () => {
    clearTimeout(_0x3d1d14);
    _0x3d1d14 = setTimeout(() => {
      _0x44c439++;
      console.log("用户滚动次数:", _0x44c439);
    }, 100);
  });
}
function o() {
  const _0x9f307a = window.fetch;
  window.fetch = function (..._0xed38d1) {
    console.log("拦截到网络请求:", _0xed38d1[0]);
    return _0x9f307a.apply(this, _0xed38d1).then(_0x19f69d => (console.log("请求响应状态:", _0x19f69d.status), _0x19f69d));
  };
}
function t() {
  const _0x34908f = document.querySelectorAll("video");
  const _0x1012ee = document.querySelectorAll("img");
  const _0x1448bb = document.querySelectorAll("a");
  const _0x14cebd = {
    videos: _0x34908f.length,
    images: _0x1012ee.length,
    links: _0x1448bb.length
  };
  const _0x2363e4 = {
    videos: _0x34908f,
    images: _0x1012ee,
    links: _0x1448bb
  };
  console.log("页面元素统计:", _0x14cebd);
  return _0x2363e4;
}
function i() {
  const _0x8687f8 = {
    url: window.location.href,
    title: document.title,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
  console.log("收集页面数据:", _0x8687f8);
  return _0x8687f8;
}
function r() {
  window.addEventListener("error", _0x359c99 => {
    const _0x40dc19 = {
      message: _0x359c99.message,
      filename: _0x359c99.filename,
      lineno: _0x359c99.lineno,
      colno: _0x359c99.colno,
      error: _0x359c99.error
    };
    console.error("页面错误:", _0x40dc19);
  });
  window.addEventListener("unhandledrejection", _0x10fec4 => {
    console.error("未处理的Promise拒绝:", _0x10fec4.reason);
  });
}
function s() {
  let _0x1b934c = !document.hidden;
  let _0x5290a4 = Date.now();
  document.addEventListener("visibilitychange", () => {
    _0x1b934c = !document.hidden;
    _0x1b934c ? (_0x5290a4 = Date.now(), console.log("页面变为可见")) : console.log("页面变为隐藏");
  });
  return {
    isVisible: () => _0x1b934c,
    getLastActiveTime: () => _0x5290a4,
    getInactiveTime: () => Date.now() - _0x5290a4
  };
}
function c() {
  const _0x2f9a4f = document.querySelectorAll("meta[http-equiv=\"Content-Security-Policy\"]");
  const _0x37f41c = [];
  _0x2f9a4f.forEach(_0x2fe9ae => {
    _0x37f41c.push(_0x2fe9ae.getAttribute("content"));
  });
  console.log("检测到CSP策略:", _0x37f41c);
  return _0x37f41c;
}
function l() {
  const _0x169f8e = {
    storage: "undefined" != typeof chrome && chrome.storage,
    runtime: "undefined" != typeof chrome && chrome.runtime,
    tabs: "undefined" != typeof chrome && chrome.tabs,
    permissions: "undefined" != typeof chrome && chrome.permissions
  };
  console.log("扩展功能可用性:", _0x169f8e);
  return _0x169f8e;
}
window.addEventListener("message", async _0x6ef3bb => {
  if (_0x6ef3bb.data && "CHECK_ACTIVATION_STATUS" === _0x6ef3bb.data.type) {
    try {
      const _0x26343a = {
        isActivated: true
      };
      await new Promise(_0xe1b4a2 => {
        {
          const _0xa4b9ad = {
            type: "CHECK_ACTIVATION_STATUS"
          };
          chrome.runtime.sendMessage(_0xa4b9ad, _0xe1b4a2);
        }
      });
      window.postMessage({
        type: "ACTIVATION_STATUS_RESPONSE",
        data: _0x26343a
      }, "*");
    } catch (_0x3887c4) {
      console.error("检查激活状态失败:", _0x3887c4);
      window.postMessage({
        type: "ACTIVATION_STATUS_RESPONSE",
        data: {
          isActivated: false,
          error: _0x3887c4.message
        }
      }, "*");
    }
  }
});