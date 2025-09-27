//Sat Sep 27 2025 14:54:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
async function e() {
  try {
    const _0x58b049 = await chrome.storage.local.get(["activationCode", "activationExpiry", "deviceFingerprint"]);
    if (_0x58b049.activationCode && _0x58b049.activationExpiry && _0x58b049.deviceFingerprint) {
      const _0x3dc369 = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      };
      const _0x46e6fe = _0x58b049.deviceFingerprint;
      const _0x541aba = _0x58b049.activationCode;
      const _0x13e685 = await fetch("http://182.61.29.251/app/plugin/active", {
        method: "POST",
        headers: _0x3dc369,
        body: JSON.stringify({
          fingerId: _0x46e6fe,
          code: _0x541aba
        })
      });
      const _0x33052d = await _0x13e685.json();
      return _0x33052d.status ? (console.log("✅ 插件已激活"), true) : (console.log("❌ 激活码验证失败:", _0x33052d.msg), await chrome.storage.local.remove(["activationCode", "activationExpiry", "deviceFingerprint"]), false);
    }
    console.log("❌ 插件未激活");
    return false;
  } catch (_0x3db526) {
    console.error("检查激活状态失败:", _0x3db526);
    try {
      const _0x1a7c6b = await chrome.storage.local.get(["activationExpiry"]);
      return !!_0x1a7c6b.activationExpiry && (Date.now() < _0x1a7c6b.activationExpiry ? (console.log("⚠️ 网络错误，使用本地过期时间判断"), true) : (console.log("❌ 本地时间已过期"), await chrome.storage.local.remove(["activationCode", "activationExpiry", "deviceFingerprint"]), false));
    } catch (_0x1253a0) {
      console.error("本地状态检查失败:", _0x1253a0);
      return false;
    }
  }
}
chrome.runtime.onInstalled.addListener(() => {
  console.log("抖音视频跳转插件已安装");
  chrome.storage.local.set({
    isFirstInstall: true,
    installTime: Date.now()
  });
});
chrome.runtime.onMessage.addListener((_0x5bdb32, _0x4c5337, _0x10b7f5) => {
  switch (console.log("Background收到消息:", _0x5bdb32), _0x5bdb32.type) {
    case "SET_STORAGE_DATA":
      chrome.storage.local.set(_0x5bdb32.data, () => {
        const _0x220edd = {
          success: true
        };
        _0x10b7f5(_0x220edd);
      });
      return true;
    case "CHECK_ACTIVATION_STATUS":
      e().then(_0x561e83 => {
        const _0x184ec6 = {
          isActivated: _0x561e83
        };
        _0x10b7f5(_0x184ec6);
      }).catch(_0x30c1c2 => {
        console.error("检查激活状态失败:", _0x30c1c2);
        _0x10b7f5({
          isActivated: false,
          error: _0x30c1c2.message
        });
      });
      return true;
  }
});