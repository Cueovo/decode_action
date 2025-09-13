//Sat Sep 13 2025 17:42:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("云闪付 国补"),
  ckName = "YSF-GB-CK";
let userCookie = $.getjson(ckName);
const urlYSF = "https://scene.cup.com.cn/gfmnewsc/appback/couponAcquire";
function headerData() {
  try {
    return {
      "Content-Type": "application/json",
      "User-Agent": userCookie.UserAgent,
      "channelNo": userCookie.channelNo,
      "token": userCookie.token,
      "Cookie": userCookie.Cookie,
      "Referer": "https://scene.cup.com.cn/gsp_front/2025/index?appNo=YJHX044025048&channelNo=Q000101",
      "appNo": userCookie.appNo
    };
  } catch (_0x1dd799) {
    console.log("CK获取失败，请重新获取");
    return {};
  }
}
function getCookie() {
  if ($request && $request.method != "OPTIONS") {
    {
      const _0x3b901f = $request.headers.token,
        _0x2ac796 = $request.headers["User-Agent"],
        _0xa8ea1c = $request.headers.Cookie,
        _0x321079 = $request.headers.channelNo,
        _0x228657 = $request.headers.appNo;
      if (_0x3b901f && _0x2ac796 && _0xa8ea1c) $.setjson({
        "token": _0x3b901f,
        "UserAgent": _0x2ac796,
        "Cookie": _0xa8ea1c,
        "channelNo": _0x321079,
        "appNo": _0x228657
      }, ckName), $.msg($.name, "", "获取签到Cookie成功🎉");else {
        $.msg($.name, "", "错误获取签到Cookie失败");
      }
    }
  }
  $.done();
}
async function couponAcquire(_0xfdd52d) {
  const _0x20e6df = headerData(),
    _0x4d3d64 = "{\"areaCode\":\"610113\",\"longitude\":\"108.897463921441\",\"latitude\":\"34.26066596137153\",\"acquireType\":\"1\",\"cateCode\":\"" + _0xfdd52d + "\",\"activityId\":null,\"engGrade\":null,\"coordType\":\"gcj02ll\",\"gpsAreaCode\":\"610113\"}",
    _0x476d13 = {
      "url": urlYSF,
      "headers": _0x20e6df,
      "body": _0x4d3d64
    },
    _0x33138e = await $.http.post(_0x476d13);
  _0x33138e.statusCode === 200 ? $.log("✅ 请求成功: " + _0x33138e.body) : $.log("⚠️ 请求失败: " + _0x33138e.statusCode + "\n" + _0x33138e.body);
}
(async () => {
  if (typeof $request != "undefined") {
    getCookie();
    return;
  }
  if (!userCookie) {
    $.log("❌请先获取 CK");
    $.done();
    return;
  }
  const _0x3bb3bd = ["A01", "A02", "A03", "A0401", "A0403", "A0402", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12"];
  for (let _0x582aa2 = 0; _0x582aa2 < 10; _0x582aa2++) {
    for (let _0x289bf4 of _0x3bb3bd) {
      await couponAcquire(_0x289bf4);
    }
  }
})().finally(() => {
  $.done();
});
function Env(e, t) {
  class s {
    constructor(e) {
      this.env = e;
    }
    send(e, t = "GET") {
      e = "string" == typeof e ? {
        url: e
      } : e;
      let s = this.get;
      "POST" === t && (s = this.post);
      const i = new Promise((t, i) => {
        s.call(this, e, (e, s, o) => {
          e ? i(e) : t(s);
        });
      });
      return e.timeout ? ((e, t = 1000) => Promise.race([e, new Promise((e, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, t);
      })]))(i, e.timeout) : i;
    }
    get(e) {
      return this.send.call(this.env, e);
    }
    post(e) {
      return this.send.call(this.env, e, "POST");
    }
  }
  return new class {
    constructor(e, t) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = e;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, t);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(e, t = null) {
      try {
        return JSON.parse(e);
      } catch {
        return t;
      }
    }
    toStr(e, t = null, ...s) {
      try {
        return JSON.stringify(e, ...s);
      } catch {
        return t;
      }
    }
    getjson(e, t) {
      let s = t;
      if (this.getdata(e)) try {
        s = JSON.parse(this.getdata(e));
      } catch {}
      return s;
    }
    setjson(e, t) {
      try {
        return this.setdata(JSON.stringify(e), t);
      } catch {
        return false;
      }
    }
    getScript(e) {
      return new Promise(t => {
        this.get({
          url: e
        }, (e, s, i) => t(i));
      });
    }
    runScript(e, t) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = t && t.timeout ? t.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: e,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: o
          };
        this.post(n, (e, t, i) => s(i));
      }).catch(e => this.logErr(e));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          t = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(e),
          i = !s && this.fs.existsSync(t);
        if (!s && !i) return {};
        {
          const i = s ? e : t;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (e) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          t = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(e),
          i = !s && this.fs.existsSync(t),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(e, o) : i ? this.fs.writeFileSync(t, o) : this.fs.writeFileSync(e, o);
      }
    }
    lodash_get(e, t, s) {
      const i = t.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = e;
      for (const e of i) if (o = Object(o)[e], undefined === o) return s;
      return o;
    }
    lodash_set(e, t, s) {
      Object(e) !== e || (Array.isArray(t) || (t = t.toString().match(/[^.[\]]+/g) || []), t.slice(0, -1).reduce((e, s, i) => Object(e[s]) === e[s] ? e[s] : e[s] = Math.abs(t[i + 1]) >> 0 == +t[i + 1] ? [] : {}, e)[t[t.length - 1]] = s);
      return e;
    }
    getdata(e) {
      let t = this.getval(e);
      if (/^@/.test(e)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(e),
          o = s ? this.getval(s) : "";
        if (o) try {
          const e = JSON.parse(o);
          t = e ? this.lodash_get(e, i, "") : t;
        } catch (e) {
          t = "";
        }
      }
      return t;
    }
    setdata(e, t) {
      let s = false;
      if (/^@/.test(t)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(t),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const t = JSON.parse(a);
          this.lodash_set(t, o, e);
          s = this.setval(JSON.stringify(t), i);
        } catch (t) {
          const r = {};
          this.lodash_set(r, o, e);
          s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(e, t);
      return s;
    }
    getval(e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(e);
        case "Quantumult X":
          return $prefs.valueForKey(e);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[e];
        default:
          return this.data && this.data[e] || null;
      }
    }
    setval(e, t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(e, t);
        case "Quantumult X":
          return $prefs.setValueForKey(e, t);
        case "Node.js":
          this.data = this.loaddata();
          this.data[t] = e;
          this.writedata();
          return true;
        default:
          return this.data && this.data[t] || null;
      }
    }
    initGotEnv(e) {
      this.got = this.got ? this.got : require("got").got;
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      e && (e.headers = e.headers ? e.headers : {}, e && (e.headers = e.headers ? e.headers : {}, undefined === e.headers.cookie && undefined === e.headers.Cookie && undefined === e.cookieJar && (e.cookieJar = this.ckjar)));
    }
    get(e, t = () => {}) {
      switch (e.headers && (delete e.headers["Content-Type"], delete e.headers["Content-Length"], delete e.headers["content-type"], delete e.headers["content-length"]), e.params && (e.url += "?" + this.queryStr(e.params)), undefined === e.followRedirect || e.followRedirect || ((this.isSurge() || this.isLoon()) && (e["auto-redirect"] = false), this.isQuanX() && (e.opts ? e.opts.redirection = false : e.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (e.headers = e.headers || {}, Object.assign(e.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(e, (e, s, i) => {
            !e && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            t(e, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (e.opts = e.opts || {}, Object.assign(e.opts, {
            hints: false
          }));
          $task.fetch(e).then(e => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = e;
            t(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, e => t(e && e.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(e);
          this.got(e).on("redirect", (e, t) => {
            try {
              if (e.headers["set-cookie"]) {
                const s = e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                t.cookieJar = this.ckjar;
              }
            } catch (e) {
              this.logErr(e);
            }
          }).then(e => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = e,
              n = s.decode(a, this.encoding);
            t(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, e => {
            const {
              message: i,
              response: o
            } = e;
            t(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(e, t = () => {}) {
      const s = e.method ? e.method.toLocaleLowerCase() : "post";
      switch (e.body && e.headers && !e.headers["Content-Type"] && !e.headers["content-type"] && (e.headers["content-type"] = "application/x-www-form-urlencoded"), e.headers && (delete e.headers["Content-Length"], delete e.headers["content-length"]), undefined === e.followRedirect || e.followRedirect || ((this.isSurge() || this.isLoon()) && (e["auto-redirect"] = false), this.isQuanX() && (e.opts ? e.opts.redirection = false : e.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (e.headers = e.headers || {}, Object.assign(e.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](e, (e, s, i) => {
            !e && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            t(e, s, i);
          });
          break;
        case "Quantumult X":
          e.method = s;
          this.isNeedRewrite && (e.opts = e.opts || {}, Object.assign(e.opts, {
            hints: false
          }));
          $task.fetch(e).then(e => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = e;
            t(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, e => t(e && e.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(e);
          const {
            url: o,
            ...r
          } = e;
          this.got[s](o, r).then(e => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = e,
              n = i.decode(a, this.encoding);
            t(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, e => {
            const {
              message: s,
              response: o
            } = e;
            t(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(e, t = null) {
      const s = t ? new Date(t) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(e) && (e = e.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let t in i) new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[t] : ("00" + i[t]).substr(("" + i[t]).length)));
      return e;
    }
    queryStr(e) {
      let t = "";
      for (const s in e) {
        let i = e[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), t += `${s}=${i}&`);
      }
      t = t.substring(0, t.length - 1);
      return t;
    }
    msg(t = e, s = "", i = "", o = {}) {
      const r = e => {
        const {
          $open: t,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = e;
        switch (typeof e) {
          case undefined:
            return e;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: e
                };
              case "Loon":
              case "Shadowrocket":
                return e;
              case "Quantumult X":
                return {
                  "open-url": e
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = e.openUrl || e.url || e["open-url"] || t;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = e["update-pasteboard"] || e.updatePasteboard || s;
                  n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  });
                  let h = e.mediaUrl || e["media-url"] || i;
                  if (h) {
                    let e, t;
                    if (h.startsWith("http")) {} else if (h.startsWith("data:")) {
                      const [s] = h.split(";"),
                        [, i] = h.split(",");
                      e = i;
                      t = s.replace("data:", "");
                    } else {
                      e = h;
                      t = (e => {
                        const t = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in t) if (0 === e.indexOf(s)) return t[s];
                        return null;
                      })(h);
                    }
                    Object.assign(r, {
                      "media-url": h,
                      "media-base64": e,
                      "media-base64-mime": o ?? t
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": e["auto-dismiss"],
                    sound: e.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = e.openUrl || e.url || e["open-url"] || t;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = e.mediaUrl || e["media-url"] || i;
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = e["open-url"] || e.url || e.openUrl || t;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = e.mediaUrl || e["media-url"] || i;
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = e["update-pasteboard"] || e.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(t, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(t, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let e = ["", "==============📣系统通知📣=============="];
        e.push(t);
        s && e.push(s);
        i && e.push(i);
        console.log(e.join("\n"));
        this.logs = this.logs.concat(e);
      }
    }
    debug(...e) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (e.length > 0 && (this.logs = [...this.logs, ...e]), console.log(`${this.logLevelPrefixs.debug}${e.map(e => e ?? String(e)).join(this.logSeparator)}`));
    }
    info(...e) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (e.length > 0 && (this.logs = [...this.logs, ...e]), console.log(`${this.logLevelPrefixs.info}${e.map(e => e ?? String(e)).join(this.logSeparator)}`));
    }
    warn(...e) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (e.length > 0 && (this.logs = [...this.logs, ...e]), console.log(`${this.logLevelPrefixs.warn}${e.map(e => e ?? String(e)).join(this.logSeparator)}`));
    }
    error(...e) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (e.length > 0 && (this.logs = [...this.logs, ...e]), console.log(`${this.logLevelPrefixs.error}${e.map(e => e ?? String(e)).join(this.logSeparator)}`));
    }
    log(...e) {
      e.length > 0 && (this.logs = [...this.logs, ...e]);
      console.log(e.map(e => e ?? String(e)).join(this.logSeparator));
    }
    logErr(e, t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t, e);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t, undefined !== e.message ? e.message : e, e.stack);
          break;
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(e = {}) {
      const t = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${t} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(e);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(e, t);
}