!function (e) {
    function t(t) {
        for (var n, s, a = t[0], u = t[1], c = t[2], h = 0, f = []; h < a.length; h++) s = a[h], Object.prototype.hasOwnProperty.call(i, s) && i[s] && f.push(i[s][0]), i[s] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (l && l(t); f.length;) f.shift()();
        return o.push.apply(o, c || []), r()
    }

    function r() {
        for (var e, t = 0; t < o.length; t++) {
            for (var r = o[t], n = !0, a = 1; a < r.length; a++) {
                var u = r[a];
                0 !== i[u] && (n = !1)
            }
            n && (o.splice(t--, 1), e = s(s.s = r[0]))
        }
        return e
    }

    var n = {}, i = {"qr_code_login/index": 0}, o = [];

    function s(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }

    s.m = e, s.c = n, s.d = function (e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) s.d(r, n, function (t) {
            return e[t]
        }.bind(null, n));
        return r
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "//y.qq.com/m/client/";
    var a = window.webpackJsonp = window.webpackJsonp || [], u = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var l = u;
    o.push(["3a777eb19", "common"]), r()
}({
    "083bc56f9": function (e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == r.call(e)
        }
    }, "1b4b22b88": function (e, t, r) {
        "use strict";
        (function (r) {
            var n, i, o, s;

            function a(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [], s = !0, a = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0) ;
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || b(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u() {
                u = function () {
                    return e
                };
                var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function a(e, t, r) {
                    return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
                }

                try {
                    a({}, "")
                } catch (e) {
                    a = function (e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var i = t && t.prototype instanceof f ? t : f, o = Object.create(i.prototype), s = new P(n || []);
                    return o._invoke = function (e, t, r) {
                        var n = "suspendedStart";
                        return function (i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return {value: void 0, done: !0}
                            }
                            for (r.method = i, r.arg = o; ;) {
                                var s = r.delegate;
                                if (s) {
                                    var a = _(s, r);
                                    if (a) {
                                        if (a === h) continue;
                                        return a
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(e, t, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === h) continue;
                                    return {value: u.arg, done: r.done}
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(e, r, s), o
                }

                function l(e, t, r) {
                    try {
                        return {type: "normal", arg: e.call(t, r)}
                    } catch (e) {
                        return {type: "throw", arg: e}
                    }
                }

                e.wrap = c;
                var h = {};

                function f() {
                }

                function p() {
                }

                function d() {
                }

                var v = {};
                a(v, i, (function () {
                    return this
                }));
                var g = Object.getPrototypeOf, y = g && g(g(I([])));
                y && y !== t && r.call(y, i) && (v = y);
                var m = d.prototype = f.prototype = Object.create(v);

                function b(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        a(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var n;
                    this._invoke = function (i, o) {
                        function s() {
                            return new t((function (n, s) {
                                !function n(i, o, s, a) {
                                    var u = l(e[i], e, o);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, h = c.value;
                                        return h && "object" == S(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function (e) {
                                            n("next", e, s, a)
                                        }), (function (e) {
                                            n("throw", e, s, a)
                                        })) : t.resolve(h).then((function (e) {
                                            c.value = e, s(c)
                                        }), (function (e) {
                                            return n("throw", e, s, a)
                                        }))
                                    }
                                    a(u.arg)
                                }(i, o, n, s)
                            }))
                        }

                        return n = n ? n.then(s, s) : s()
                    }
                }

                function _(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, h;
                    var i = n.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function k(e) {
                    var t = {tryLoc: e[0]};
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function P(e) {
                    this.tryEntries = [{tryLoc: "root"}], e.forEach(k, this), this.reset(!0)
                }

                function I(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, o = function t() {
                                for (; ++n < e.length;) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                            return o.next = o
                        }
                    }
                    return {next: x}
                }

                function x() {
                    return {value: void 0, done: !0}
                }

                return p.prototype = d, a(m, "constructor", d), a(d, "constructor", p), p.displayName = a(d, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, a(e, s, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function (e) {
                    return {__await: e}
                }, b(w.prototype), a(w.prototype, o, (function () {
                    return this
                })), e.AsyncIterator = w, e.async = function (t, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new w(c(t, r, n, i), o);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function (e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(m), a(m, s, "Generator"), a(m, i, (function () {
                    return this
                })), a(m, "toString", (function () {
                    return "[object Generator]"
                })), e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(), function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
                }, e.values = I, P.prototype = {
                    constructor: P, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i], s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var a = r.call(o, "catchLoc"), u = r.call(o, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(s)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), E(r), h
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    E(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, t, r) {
                        return this.delegate = {
                            iterator: I(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && function (e, t) {
                    (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }(e, t)
            }

            function l(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var r, n = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return h(this, r)
                }
            }

            function h(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function v(e, t, r) {
                return t && d(e.prototype, t), r && d(e, r), Object.defineProperty(e, "prototype", {writable: !1}), e
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                return function (e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || b(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = b(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, i = function () {
                        };
                        return {
                            s: i, n: function () {
                                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                            }, e: function (e) {
                                throw e
                            }, f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0, a = !1;
                return {
                    s: function () {
                        r = r.call(e)
                    }, n: function () {
                        var e = r.next();
                        return s = e.done, e
                    }, e: function (e) {
                        a = !0, o = e
                    }, f: function () {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }

            function b(e, t) {
                if (e) {
                    if ("string" == typeof e) return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
                }
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach((function (t) {
                        E(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function E(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            s = function () {
                return function e(t, r, n) {
                    function i(s, a) {
                        if (!r[s]) {
                            if (!t[s]) {
                                if (o) return o(s, !0);
                                var u = new Error("Cannot find module '" + s + "'");
                                throw u.code = "MODULE_NOT_FOUND", u
                            }
                            var c = r[s] = {exports: {}};
                            t[s][0].call(c.exports, (function (e) {
                                return i(t[s][1][e] || e)
                            }), c, c.exports, e, t, r, n)
                        }
                        return r[s].exports
                    }

                    for (var o = !1, s = 0; s < n.length; s++) i(n[s]);
                    return i
                }({
                    1: [function (e, t, r) {
                        var n = e("events").EventEmitter, i = e("./store"), o = e("./topic-alias-recv"),
                            s = e("./topic-alias-send"), a = e("mqtt-packet"), u = e("./default-message-id-provider"),
                            c = e("readable-stream").Writable, l = e("./inherits"), h = e("./clone").clone,
                            f = e("./reinterval"), p = e("./validations"), d = function (e) {
                                setTimeout(e, 0)
                            }, v = window.setImmediate || function (e) {
                                d(e)
                            }, g = {
                                keepalive: 60,
                                reschedulePings: !0,
                                protocolId: "MQTT",
                                protocolVersion: 4,
                                reconnectPeriod: 1e3,
                                connectTimeout: 3e4,
                                clean: !0,
                                resubscribe: !0
                            }, y = ["ECONNREFUSED", "EADDRINUSE", "ECONNRESET", "ENOTFOUND"], b = {
                                0: "",
                                1: "Unacceptable protocol version",
                                2: "Identifier rejected",
                                3: "Server unavailable",
                                4: "Bad username or password",
                                5: "Not authorized",
                                16: "No matching subscribers",
                                17: "No subscription existed",
                                128: "Unspecified error",
                                129: "Malformed Packet",
                                130: "Protocol Error",
                                131: "Implementation specific error",
                                132: "Unsupported Protocol Version",
                                133: "Client Identifier not valid",
                                134: "Bad User Name or Password",
                                135: "Not authorized",
                                136: "Server unavailable",
                                137: "Server busy",
                                138: "Banned",
                                139: "Server shutting down",
                                140: "Bad authentication method",
                                141: "Keep Alive timeout",
                                142: "Session taken over",
                                143: "Topic Filter invalid",
                                144: "Topic Name invalid",
                                145: "Packet identifier in use",
                                146: "Packet Identifier not found",
                                147: "Receive Maximum exceeded",
                                148: "Topic Alias invalid",
                                149: "Packet too large",
                                150: "Message rate too high",
                                151: "Quota exceeded",
                                152: "Administrative action",
                                153: "Payload format invalid",
                                154: "Retain not supported",
                                155: "QoS not supported",
                                156: "Use another server",
                                157: "Server moved",
                                158: "Shared Subscriptions not supported",
                                159: "Connection rate exceeded",
                                160: "Maximum connect time",
                                161: "Subscription Identifiers not supported",
                                162: "Wildcard Subscriptions not supported"
                            };

                        function w(e, t) {
                            var r;
                            t.properties && (r = t.properties.topicAlias);
                            var n = t.topic.toString();
                            if (0 === n.length) {
                                if (void 0 === r) return new Error("Unregistered Topic Alias");
                                if (void 0 === (n = e.topicAliasSend.getTopicByAlias(r))) return new Error("Unregistered Topic Alias");
                                t.topic = n
                            }
                            r && delete t.properties.topicAlias
                        }

                        function _(e, t, r) {
                            e.emit("packetsend", t), !a.writeToStream(t, e.stream, e.options) && r && r !== P ? e.stream.once("drain", r) : r && r()
                        }

                        function E(e, t, r, n) {
                            var i, o = t;
                            if ("publish" === o.cmd && (o = h(t), i = w(e, o))) return r && r(i);
                            e.outgoingStore.put(o, (function (i) {
                                if (i) return r && r(i);
                                n(), _(e, t, r)
                            }))
                        }

                        function P(e) {
                        }

                        function I(e, t) {
                            var r, s = this;
                            if (!(this instanceof I)) return new I(e, t);
                            for (r in this.options = t || {}, g) void 0 === this.options[r] ? this.options[r] = g[r] : this.options[r] = t[r];
                            this.options.clientId = "string" == typeof t.clientId ? t.clientId : "mqttjs_" + Math.random().toString(16).substr(2, 8), this.options.customHandleAcks = 5 === t.protocolVersion && t.customHandleAcks ? t.customHandleAcks : function () {
                                arguments[3](0)
                            }, this.streamBuilder = e, this.messageIdProvider = void 0 === this.options.messageIdProvider ? new u : this.options.messageIdProvider, this.outgoingStore = t.outgoingStore || new i, this.incomingStore = t.incomingStore || new i, this.queueQoSZero = void 0 === t.queueQoSZero || t.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, t.topicAliasMaximum > 0 && (t.topicAliasMaximum > 65535 || (this.topicAliasRecv = new o(t.topicAliasMaximum))), this.on("connect", (function () {
                                var e = this.queue;
                                !function t() {
                                    var r, n = e.shift();
                                    if (n) {
                                        var i = !0;
                                        (r = n.packet).messageId && 0 !== r.messageId && (s.messageIdProvider.register(r.messageId) || (i = !1)), i ? s._sendPacket(r, (function (e) {
                                            n.cb && n.cb(e), t()
                                        })) : t()
                                    } else s._resubscribe()
                                }()
                            })), this.on("close", (function () {
                                this.connected = !1, clearTimeout(this.connackTimer), null !== s.pingTimer && (s.pingTimer.clear(), s.pingTimer = null), this.topicAliasRecv && this.topicAliasRecv.clear(), this._setupReconnect()
                            })), n.call(this), this._setupStream()
                        }

                        l(I, n), I.prototype._setupStream = function () {
                            var e = this, t = this, r = new c, n = a.parser(this.options), i = null, o = [];

                            function s() {
                                if (o.length) d(u); else {
                                    var e = i;
                                    i = null, e()
                                }
                            }

                            function u() {
                                var e = o.shift();
                                if (e) t._handlePacket(e, s); else {
                                    var r = i;
                                    i = null, r && r()
                                }
                            }

                            this._clearReconnect(), this.stream = this.streamBuilder(this), n.on("packet", (function (e) {
                                o.push(e)
                            })), r._write = function (e, t, r) {
                                i = r, n.parse(e), u()
                            }, this.stream.pipe(r), this.stream.on("error", (function (e) {
                                y.includes(e.code) && t.emit("error", e)
                            })), this.stream.on("close", (function () {
                                var e;
                                (e = t.outgoing) && Object.keys(e).forEach((function (t) {
                                    e[t].volatile && "function" == typeof e[t].cb && (e[t].cb(new Error("Connection closed")), delete e[t])
                                })), t.emit("close")
                            }));
                            var l = Object.create(this.options);
                            if (l.cmd = "connect", this.topicAliasRecv && (l.properties || (l.properties = {}), this.topicAliasRecv && (l.properties.topicAliasMaximum = this.topicAliasRecv.max)), _(this, l), n.on("error", this.emit.bind(this, "error")), this.options.properties) {
                                if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return t.end((function () {
                                    return e.emit("error", new Error("Packet has no Authentication Method"))
                                })), this;
                                this.options.properties.authenticationMethod && this.options.authPacket && "object" === S(this.options.authPacket) && _(this, Object.assign({
                                    cmd: "auth",
                                    reasonCode: 0
                                }, this.options.authPacket))
                            }
                            this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout((function () {
                                t._cleanUp(!0)
                            }), this.options.connectTimeout)
                        }, I.prototype._handlePacket = function (e, t) {
                            var r = this.options;
                            if (5 === r.protocolVersion && r.properties && r.properties.maximumPacketSize && r.properties.maximumPacketSize < e.length) return this.emit("error", new Error("exceeding packets size " + e.cmd)), this.end({
                                reasonCode: 149,
                                properties: {reasonString: "Maximum packet size was exceeded"}
                            }), this;
                            switch (this.emit("packetreceive", e), e.cmd) {
                                case"publish":
                                    this._handlePublish(e, t);
                                    break;
                                case"puback":
                                case"pubrec":
                                case"pubcomp":
                                case"suback":
                                case"unsuback":
                                    this._handleAck(e), t();
                                    break;
                                case"pubrel":
                                    this._handlePubrel(e, t);
                                    break;
                                case"connack":
                                    this._handleConnack(e), t();
                                    break;
                                case"auth":
                                    this._handleAuth(e), t();
                                    break;
                                case"pingresp":
                                    this._handlePingresp(e), t();
                                    break;
                                case"disconnect":
                                    this._handleDisconnect(e), t()
                            }
                        }, I.prototype._checkDisconnecting = function (e) {
                            return this.disconnecting && (e && e !== P ? e(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting
                        }, I.prototype.publish = function (e, t, r, n) {
                            var i = this.options;
                            if ("function" == typeof r && (n = r, r = null), r = Object.assign({
                                qos: 0,
                                retain: !1,
                                dup: !1
                            }, r), this._checkDisconnecting(n)) return this;
                            var o = this, s = function () {
                                var s = 0;
                                if ((1 === r.qos || 2 === r.qos) && null === (s = o._nextId())) return !1;
                                var a = {
                                    cmd: "publish",
                                    topic: e,
                                    payload: t,
                                    qos: r.qos,
                                    retain: r.retain,
                                    messageId: s,
                                    dup: r.dup
                                };
                                switch (5 === i.protocolVersion && (a.properties = r.properties), r.qos) {
                                    case 1:
                                    case 2:
                                        o.outgoing[a.messageId] = {
                                            volatile: !1,
                                            cb: n || P
                                        }, o._sendPacket(a, void 0, r.cbStorePut);
                                        break;
                                    default:
                                        o._sendPacket(a, n, r.cbStorePut)
                                }
                                return !0
                            };
                            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !s()) && this._storeProcessingQueue.push({
                                invoke: s,
                                cbStorePut: r.cbStorePut,
                                callback: n
                            }), this
                        }, I.prototype.subscribe = function () {
                            for (var e = this, t = new Array(arguments.length), r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            var n = [], i = t.shift(), o = i.resubscribe, s = t.pop() || P, a = t.pop(),
                                u = this.options.protocolVersion;
                            delete i.resubscribe, "string" == typeof i && (i = [i]), "function" != typeof s && (a = s, s = P);
                            var c = p.validateTopics(i);
                            if (null !== c) return v(s, new Error("Invalid topic " + c)), this;
                            if (this._checkDisconnecting(s)) return this;
                            var l = {qos: 0};
                            if (5 === u && (l.nl = !1, l.rap = !1, l.rh = 0), a = Object.assign(l, a), Array.isArray(i) ? i.forEach((function (t) {
                                if (!Object.prototype.hasOwnProperty.call(e._resubscribeTopics, t) || e._resubscribeTopics[t].qos < a.qos || o) {
                                    var r = {topic: t, qos: a.qos};
                                    5 === u && (r.nl = a.nl, r.rap = a.rap, r.rh = a.rh, r.properties = a.properties), n.push(r)
                                }
                            })) : Object.keys(i).forEach((function (t) {
                                if (!Object.prototype.hasOwnProperty.call(e._resubscribeTopics, t) || e._resubscribeTopics[t].qos < i[t].qos || o) {
                                    var r = {topic: t, qos: i[t].qos};
                                    5 === u && (r.nl = i[t].nl, r.rap = i[t].rap, r.rh = i[t].rh, r.properties = a.properties), n.push(r)
                                }
                            })), !n.length) return s(null, []), this;
                            var h = function () {
                                var t = e._nextId();
                                if (null === t) return !1;
                                var r = {cmd: "subscribe", subscriptions: n, qos: 1, retain: !1, dup: !1, messageId: t};
                                if (a.properties && (r.properties = a.properties), e.options.resubscribe) {
                                    var i = [];
                                    n.forEach((function (t) {
                                        if (e.options.reconnectPeriod > 0) {
                                            var r = {qos: t.qos};
                                            5 === u && (r.nl = t.nl || !1, r.rap = t.rap || !1, r.rh = t.rh || 0, r.properties = t.properties), e._resubscribeTopics[t.topic] = r, i.push(t.topic)
                                        }
                                    })), e.messageIdToTopic[r.messageId] = i
                                }
                                return e.outgoing[r.messageId] = {
                                    volatile: !0, cb: function (e, t) {
                                        if (!e) for (var r = t.granted, i = 0; i < r.length; i += 1) n[i].qos = r[i];
                                        s(e, n)
                                    }
                                }, e._sendPacket(r), !0
                            };
                            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !h()) && this._storeProcessingQueue.push({
                                invoke: h,
                                callback: s
                            }), this
                        }, I.prototype.unsubscribe = function () {
                            for (var e = this, t = new Array(arguments.length), r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            var n = t.shift(), i = t.pop() || P, o = t.pop();
                            "string" == typeof n && (n = [n]), "function" != typeof i && (o = i, i = P);
                            var s = p.validateTopics(n);
                            if (null !== s) return v(i, new Error("Invalid topic " + s)), this;
                            if (e._checkDisconnecting(i)) return this;
                            var a = function () {
                                var t = e._nextId();
                                if (null === t) return !1;
                                var r = {cmd: "unsubscribe", qos: 1, messageId: t};
                                return "string" == typeof n ? r.unsubscriptions = [n] : Array.isArray(n) && (r.unsubscriptions = n), e.options.resubscribe && r.unsubscriptions.forEach((function (t) {
                                    delete e._resubscribeTopics[t]
                                })), "object" === S(o) && o.properties && (r.properties = o.properties), e.outgoing[r.messageId] = {
                                    volatile: !0,
                                    cb: i
                                }, e._sendPacket(r), !0
                            };
                            return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !a()) && this._storeProcessingQueue.push({
                                invoke: a,
                                callback: i
                            }), this
                        }, I.prototype.end = function (e, t, r) {
                            var n = this;

                            function i() {
                                n._cleanUp(e, (function () {
                                    d(function () {
                                        n.disconnected = !0, n.incomingStore.close((function (e) {
                                            n.outgoingStore.close((function (t) {
                                                n.emit("end"), r && r(e || t)
                                            }))
                                        })), n._deferredReconnect && n._deferredReconnect()
                                    }.bind(n))
                                }), t)
                            }

                            return null != e && "boolean" == typeof e || (r = t || P, t = e, e = !1, "object" !== S(t) && (r = t, t = null, "function" != typeof r && (r = P))), "object" !== S(t) && (r = t, t = null), r = r || P, this.disconnecting ? (r(), this) : (this._clearReconnect(), this.disconnecting = !0, !e && Object.keys(this.outgoing).length > 0 ? this.once("outgoingEmpty", setTimeout.bind(null, i, 10)) : i(), this)
                        }, I.prototype.removeOutgoingMessage = function (e) {
                            var t = this.outgoing[e] ? this.outgoing[e].cb : null;
                            return delete this.outgoing[e], this.outgoingStore.del({messageId: e}, (function () {
                                t(new Error("Message removed"))
                            })), this
                        }, I.prototype.reconnect = function (e) {
                            var t = this, r = function () {
                                e ? (t.options.incomingStore = e.incomingStore, t.options.outgoingStore = e.outgoingStore) : (t.options.incomingStore = null, t.options.outgoingStore = null), t.incomingStore = t.options.incomingStore || new i, t.outgoingStore = t.options.outgoingStore || new i, t.disconnecting = !1, t.disconnected = !1, t._deferredReconnect = null, t._reconnect()
                            };
                            return this.disconnecting && !this.disconnected ? this._deferredReconnect = r : r(), this
                        }, I.prototype._reconnect = function () {
                            var e = this;
                            this.emit("reconnect"), this.connected ? this.end((function () {
                                e._setupStream()
                            })) : this._setupStream()
                        }, I.prototype._setupReconnect = function () {
                            var e = this;
                            !e.disconnecting && !e.reconnectTimer && e.options.reconnectPeriod > 0 && (this.reconnecting || (this.emit("offline"), this.reconnecting = !0), e.reconnectTimer = setInterval((function () {
                                e._reconnect()
                            }), e.options.reconnectPeriod))
                        }, I.prototype._clearReconnect = function () {
                            this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null)
                        }, I.prototype._cleanUp = function (e, t) {
                            var r, n = arguments[2];
                            if (t && this.stream.on("close", t), e) 0 === this.options.reconnectPeriod && this.options.clean && (r = this.outgoing) && Object.keys(r).forEach((function (e) {
                                "function" == typeof r[e].cb && (r[e].cb(new Error("Connection closed")), delete r[e])
                            })), this.stream.destroy(); else {
                                var i = Object.assign({cmd: "disconnect"}, n);
                                this._sendPacket(i, v.bind(null, this.stream.end.bind(this.stream)))
                            }
                            this.disconnecting || (this._clearReconnect(), this._setupReconnect()), null !== this.pingTimer && (this.pingTimer.clear(), this.pingTimer = null), t && !this.connected && (this.stream.removeListener("close", t), t())
                        }, I.prototype._sendPacket = function (e, t, r) {
                            r = r || P, t = t || P;
                            var n = function (e, t) {
                                if (5 === e.options.protocolVersion && "publish" === t.cmd) {
                                    var r;
                                    t.properties && (r = t.properties.topicAlias);
                                    var n = t.topic.toString();
                                    if (e.topicAliasSend) if (r) {
                                        if (0 !== n.length && !e.topicAliasSend.put(n, r)) return new Error("Sending Topic Alias out of range")
                                    } else 0 !== n.length && (e.options.autoAssignTopicAlias ? (r = e.topicAliasSend.getAliasByTopic(n)) ? (t.topic = "", t.properties = k(k({}, t.properties), {}, {topicAlias: r})) : (r = e.topicAliasSend.getLruAlias(), e.topicAliasSend.put(n, r), t.properties = k(k({}, t.properties), {}, {topicAlias: r})) : e.options.autoUseTopicAlias && (r = e.topicAliasSend.getAliasByTopic(n)) && (t.topic = "", t.properties = k(k({}, t.properties), {}, {topicAlias: r}))); else if (r) return new Error("Sending Topic Alias out of range")
                                }
                            }(this, e);
                            if (n) t(n); else {
                                if (!this.connected) return "auth" === e.cmd ? (this._shiftPingInterval(), void _(this, e, t)) : void this._storePacket(e, t, r);
                                switch (this._shiftPingInterval(), e.cmd) {
                                    case"publish":
                                        break;
                                    case"pubrel":
                                        return void E(this, e, t, r);
                                    default:
                                        return void _(this, e, t)
                                }
                                switch (e.qos) {
                                    case 2:
                                    case 1:
                                        E(this, e, t, r);
                                        break;
                                    case 0:
                                    default:
                                        _(this, e, t)
                                }
                            }
                        }, I.prototype._storePacket = function (e, t, r) {
                            r = r || P;
                            var n = e;
                            if ("publish" === n.cmd) {
                                var i = w(this, n = h(e));
                                if (i) return t && t(i)
                            }
                            0 === (n.qos || 0) && this.queueQoSZero || "publish" !== n.cmd ? this.queue.push({
                                packet: n,
                                cb: t
                            }) : n.qos > 0 ? (t = this.outgoing[n.messageId] ? this.outgoing[n.messageId].cb : null, this.outgoingStore.put(n, (function (e) {
                                if (e) return t && t(e);
                                r()
                            }))) : t && t(new Error("No connection to broker"))
                        }, I.prototype._setupPingTimer = function () {
                            var e = this;
                            !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = f((function () {
                                e._checkPing()
                            }), 1e3 * this.options.keepalive))
                        }, I.prototype._shiftPingInterval = function () {
                            this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule(1e3 * this.options.keepalive)
                        }, I.prototype._checkPing = function () {
                            this.pingResp ? (this.pingResp = !1, this._sendPacket({cmd: "pingreq"})) : this._cleanUp(!0)
                        }, I.prototype._handlePingresp = function () {
                            this.pingResp = !0
                        }, I.prototype._handleConnack = function (e) {
                            var t = this.options, r = 5 === t.protocolVersion ? e.reasonCode : e.returnCode;
                            if (clearTimeout(this.connackTimer), delete this.topicAliasSend, e.properties) {
                                if (e.properties.topicAliasMaximum) {
                                    if (e.properties.topicAliasMaximum > 65535) return void this.emit("error", new Error("topicAliasMaximum from broker is out of range"));
                                    e.properties.topicAliasMaximum > 0 && (this.topicAliasSend = new s(e.properties.topicAliasMaximum))
                                }
                                e.properties.serverKeepAlive && t.keepalive && (t.keepalive = e.properties.serverKeepAlive, this._shiftPingInterval()), e.properties.maximumPacketSize && (t.properties || (t.properties = {}), t.properties.maximumPacketSize = e.properties.maximumPacketSize)
                            }
                            if (0 === r) this.reconnecting = !1, this._onConnect(e); else if (r > 0) {
                                var n = new Error("Connection refused: " + b[r]);
                                this.emit("error", n, e)
                            }
                        }, I.prototype._handleAuth = function (e) {
                            var t = this.options.protocolVersion, r = 5 === t ? e.reasonCode : e.returnCode;
                            if (5 !== t) {
                                var n = new Error("Protocol error: Auth packets are only supported in MQTT 5. Your version:" + t);
                                return n.code = r, void this.emit("error", n)
                            }
                            var i = this;
                            this.handleAuth(e, (function (e, t) {
                                if (e) i.emit("error", e); else if (24 === r) i.reconnecting = !1, i._sendPacket(t); else {
                                    var n = new Error("Connection refused: " + b[r]);
                                    e.code = r, i.emit("error", n)
                                }
                            }))
                        }, I.prototype.handleAuth = function (e, t) {
                            t()
                        }, I.prototype._handlePublish = function (e, t) {
                            t = void 0 !== t ? t : P;
                            var r, n = e.topic.toString(), i = e.payload, o = e.qos, s = e.messageId, a = this,
                                u = this.options, c = [0, 16, 128, 131, 135, 144, 145, 151, 153];
                            if (5 === this.options.protocolVersion && (e.properties && (r = e.properties.topicAlias), void 0 !== r)) if (0 === n.length) {
                                if (!(r > 0 && r <= 65535)) return void this.emit("error", new Error("Received Topic Alias is out of range"));
                                var l = this.topicAliasRecv.getTopicByAlias(r);
                                if (!l) return void this.emit("error", new Error("Received unregistered Topic Alias"));
                                n = l
                            } else if (!this.topicAliasRecv.put(n, r)) return void this.emit("error", new Error("Received Topic Alias is out of range"));
                            switch (o) {
                                case 2:
                                    u.customHandleAcks(n, i, e, (function (r, n) {
                                        return r instanceof Error || (n = r, r = null), r ? a.emit("error", r) : -1 === c.indexOf(n) ? a.emit("error", new Error("Wrong reason code for pubrec")) : void (n ? a._sendPacket({
                                            cmd: "pubrec",
                                            messageId: s,
                                            reasonCode: n
                                        }, t) : a.incomingStore.put(e, (function () {
                                            a._sendPacket({cmd: "pubrec", messageId: s}, t)
                                        })))
                                    }));
                                    break;
                                case 1:
                                    u.customHandleAcks(n, i, e, (function (r, o) {
                                        return r instanceof Error || (o = r, r = null), r ? a.emit("error", r) : -1 === c.indexOf(o) ? a.emit("error", new Error("Wrong reason code for puback")) : (o || a.emit("message", n, i, e), void a.handleMessage(e, (function (e) {
                                            if (e) return t && t(e);
                                            a._sendPacket({cmd: "puback", messageId: s, reasonCode: o}, t)
                                        })))
                                    }));
                                    break;
                                case 0:
                                    this.emit("message", n, i, e), this.handleMessage(e, t)
                            }
                        }, I.prototype.handleMessage = function (e, t) {
                            t()
                        }, I.prototype._handleAck = function (e) {
                            var t, r = e.messageId, n = e.cmd, i = null,
                                o = this.outgoing[r] ? this.outgoing[r].cb : null, s = this;
                            if (o && o !== P) {
                                switch (n) {
                                    case"pubcomp":
                                    case"puback":
                                        var a = e.reasonCode;
                                        a && a > 0 && 16 !== a && ((t = new Error("Publish error: " + b[a])).code = a, o(t, e)), delete this.outgoing[r], this.outgoingStore.del(e, o), this.messageIdProvider.deallocate(r), this._invokeStoreProcessingQueue();
                                        break;
                                    case"pubrec":
                                        i = {cmd: "pubrel", qos: 2, messageId: r};
                                        var u = e.reasonCode;
                                        u && u > 0 && 16 !== u ? ((t = new Error("Publish error: " + b[u])).code = u, o(t, e)) : this._sendPacket(i);
                                        break;
                                    case"suback":
                                        delete this.outgoing[r], this.messageIdProvider.deallocate(r);
                                        for (var c = 0; c < e.granted.length; c++) if (0 != (128 & e.granted[c])) {
                                            var l = this.messageIdToTopic[r];
                                            l && l.forEach((function (e) {
                                                delete s._resubscribeTopics[e]
                                            }))
                                        }
                                        this._invokeStoreProcessingQueue(), o(null, e);
                                        break;
                                    case"unsuback":
                                        delete this.outgoing[r], this.messageIdProvider.deallocate(r), this._invokeStoreProcessingQueue(), o(null);
                                        break;
                                    default:
                                        s.emit("error", new Error("unrecognized packet type"))
                                }
                                this.disconnecting && 0 === Object.keys(this.outgoing).length && this.emit("outgoingEmpty")
                            }
                        }, I.prototype._handlePubrel = function (e, t) {
                            t = void 0 !== t ? t : P;
                            var r = this, n = {cmd: "pubcomp", messageId: e.messageId};
                            r.incomingStore.get(e, (function (e, i) {
                                e ? r._sendPacket(n, t) : (r.emit("message", i.topic, i.payload, i), r.handleMessage(i, (function (e) {
                                    if (e) return t(e);
                                    r.incomingStore.del(i, P), r._sendPacket(n, t)
                                })))
                            }))
                        }, I.prototype._handleDisconnect = function (e) {
                            this.emit("disconnect", e)
                        }, I.prototype._nextId = function () {
                            return this.messageIdProvider.allocate()
                        }, I.prototype.getLastMessageId = function () {
                            return this.messageIdProvider.getLastAllocated()
                        }, I.prototype._resubscribe = function () {
                            var e = Object.keys(this._resubscribeTopics);
                            if (!this._firstConnection && (this.options.clean || 5 === this.options.protocolVersion && !this.connackPacket.sessionPresent) && e.length > 0) if (this.options.resubscribe) if (5 === this.options.protocolVersion) for (var t = 0; t < e.length; t++) {
                                var r = {};
                                r[e[t]] = this._resubscribeTopics[e[t]], r.resubscribe = !0, this.subscribe(r, {properties: r[e[t]].properties})
                            } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics); else this._resubscribeTopics = {};
                            this._firstConnection = !1
                        }, I.prototype._onConnect = function (e) {
                            if (this.disconnected) this.emit("connect", e); else {
                                var t = this;
                                this.connackPacket = e, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = !0, function r() {
                                    var n = t.outgoingStore.createStream();

                                    function i() {
                                        t._storeProcessing = !1, t._packetIdsDuringStoreProcessing = {}
                                    }

                                    function o() {
                                        n.destroy(), n = null, t._flushStoreProcessingQueue(), i()
                                    }

                                    t.once("close", o), n.on("error", (function (e) {
                                        i(), t._flushStoreProcessingQueue(), t.removeListener("close", o), t.emit("error", e)
                                    })), n.on("end", (function () {
                                        var n = !0;
                                        for (var s in t._packetIdsDuringStoreProcessing) if (!t._packetIdsDuringStoreProcessing[s]) {
                                            n = !1;
                                            break
                                        }
                                        n ? (i(), t.removeListener("close", o), t._invokeAllStoreProcessingQueue(), t.emit("connect", e)) : r()
                                    })), function e() {
                                        if (n) {
                                            t._storeProcessing = !0;
                                            var r, i = n.read(1);
                                            i ? t._packetIdsDuringStoreProcessing[i.messageId] ? e() : t.disconnecting || t.reconnectTimer ? n.destroy && n.destroy() : (r = t.outgoing[i.messageId] ? t.outgoing[i.messageId].cb : null, t.outgoing[i.messageId] = {
                                                volatile: !1,
                                                cb: function (t, n) {
                                                    r && r(t, n), e()
                                                }
                                            }, t._packetIdsDuringStoreProcessing[i.messageId] = !0, t.messageIdProvider.register(i.messageId) && t._sendPacket(i)) : n.once("readable", e)
                                        }
                                    }()
                                }()
                            }
                        }, I.prototype._invokeStoreProcessingQueue = function () {
                            if (this._storeProcessingQueue.length > 0) {
                                var e = this._storeProcessingQueue[0];
                                if (e && e.invoke()) return this._storeProcessingQueue.shift(), !0
                            }
                            return !1
                        }, I.prototype._invokeAllStoreProcessingQueue = function () {
                            for (; this._invokeStoreProcessingQueue();) ;
                        }, I.prototype._flushStoreProcessingQueue = function () {
                            var e, t = m(this._storeProcessingQueue);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value;
                                    r.cbStorePut && r.cbStorePut(new Error("Connection closed")), r.callback && r.callback(new Error("Connection closed"))
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this._storeProcessingQueue.splice(0)
                        }, t.exports = I
                    }, {
                        "./clone": 2,
                        "./default-message-id-provider": 5,
                        "./inherits": 6,
                        "./reinterval": 7,
                        "./store": 8,
                        "./topic-alias-recv": 9,
                        "./topic-alias-send": 10,
                        "./validations": 11,
                        events: 22,
                        "mqtt-packet": 47,
                        "readable-stream": 76
                    }],
                    2: [function (e, t, r) {
                        (function (e) {
                            (function () {
                                function r(t) {
                                    return t instanceof e ? e.from(t) : new t.constructor(t.buffer.slice(), t.byteOffset, t.length)
                                }

                                t.exports = function (e) {
                                    return (e = e || {}).circles ? function (e) {
                                        var t = [], n = [];
                                        return e.proto ? function e(o) {
                                            if ("object" !== S(o) || null === o) return o;
                                            if (o instanceof Date) return new Date(o);
                                            if (Array.isArray(o)) return i(o, e);
                                            if (o instanceof Map) return new Map(i(Array.from(o), e));
                                            if (o instanceof Set) return new Set(i(Array.from(o), e));
                                            var s = {};
                                            for (var a in t.push(o), n.push(s), o) {
                                                var u = o[a];
                                                if ("object" !== S(u) || null === u) s[a] = u; else if (u instanceof Date) s[a] = new Date(u); else if (u instanceof Map) s[a] = new Map(i(Array.from(u), e)); else if (u instanceof Set) s[a] = new Set(i(Array.from(u), e)); else if (ArrayBuffer.isView(u)) s[a] = r(u); else {
                                                    var c = t.indexOf(u);
                                                    s[a] = -1 !== c ? n[c] : e(u)
                                                }
                                            }
                                            return t.pop(), n.pop(), s
                                        } : function e(o) {
                                            if ("object" !== S(o) || null === o) return o;
                                            if (o instanceof Date) return new Date(o);
                                            if (Array.isArray(o)) return i(o, e);
                                            if (o instanceof Map) return new Map(i(Array.from(o), e));
                                            if (o instanceof Set) return new Set(i(Array.from(o), e));
                                            var s = {};
                                            for (var a in t.push(o), n.push(s), o) if (!1 !== Object.hasOwnProperty.call(o, a)) {
                                                var u = o[a];
                                                if ("object" !== S(u) || null === u) s[a] = u; else if (u instanceof Date) s[a] = new Date(u); else if (u instanceof Map) s[a] = new Map(i(Array.from(u), e)); else if (u instanceof Set) s[a] = new Set(i(Array.from(u), e)); else if (ArrayBuffer.isView(u)) s[a] = r(u); else {
                                                    var c = t.indexOf(u);
                                                    s[a] = -1 !== c ? n[c] : e(u)
                                                }
                                            }
                                            return t.pop(), n.pop(), s
                                        };

                                        function i(e, i) {
                                            for (var o = Object.keys(e), s = new Array(o.length), a = 0; a < o.length; a++) {
                                                var u = o[a], c = e[u];
                                                if ("object" !== S(c) || null === c) s[u] = c; else if (c instanceof Date) s[u] = new Date(c); else if (ArrayBuffer.isView(c)) s[u] = r(c); else {
                                                    var l = t.indexOf(c);
                                                    s[u] = -1 !== l ? n[l] : i(c)
                                                }
                                            }
                                            return s
                                        }
                                    }(e) : e.proto ? function e(n) {
                                        if ("object" !== S(n) || null === n) return n;
                                        if (n instanceof Date) return new Date(n);
                                        if (Array.isArray(n)) return t(n, e);
                                        if (n instanceof Map) return new Map(t(Array.from(n), e));
                                        if (n instanceof Set) return new Set(t(Array.from(n), e));
                                        var i = {};
                                        for (var o in n) {
                                            var s = n[o];
                                            "object" !== S(s) || null === s ? i[o] = s : s instanceof Date ? i[o] = new Date(s) : s instanceof Map ? i[o] = new Map(t(Array.from(s), e)) : s instanceof Set ? i[o] = new Set(t(Array.from(s), e)) : ArrayBuffer.isView(s) ? i[o] = r(s) : i[o] = e(s)
                                        }
                                        return i
                                    } : function e(n) {
                                        if ("object" !== S(n) || null === n) return n;
                                        if (n instanceof Date) return new Date(n);
                                        if (Array.isArray(n)) return t(n, e);
                                        if (n instanceof Map) return new Map(t(Array.from(n), e));
                                        if (n instanceof Set) return new Set(t(Array.from(n), e));
                                        var i = {};
                                        for (var o in n) if (!1 !== Object.hasOwnProperty.call(n, o)) {
                                            var s = n[o];
                                            "object" !== S(s) || null === s ? i[o] = s : s instanceof Date ? i[o] = new Date(s) : s instanceof Map ? i[o] = new Map(t(Array.from(s), e)) : s instanceof Set ? i[o] = new Set(t(Array.from(s), e)) : ArrayBuffer.isView(s) ? i[o] = r(s) : i[o] = e(s)
                                        }
                                        return i
                                    };

                                    function t(e, t) {
                                        for (var n = Object.keys(e), i = new Array(n.length), o = 0; o < n.length; o++) {
                                            var s = n[o], a = e[s];
                                            "object" !== S(a) || null === a ? i[s] = a : a instanceof Date ? i[s] = new Date(a) : ArrayBuffer.isView(a) ? i[s] = r(a) : i[s] = t(a)
                                        }
                                        return i
                                    }
                                }
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {buffer: 17}],
                    3: [function (e, t, r) {
                        var n = e("buffer").Buffer, i = e("duplexify"), o = e("readable-stream").Transform;
                        t.exports = function (e, t, r) {
                            var s, a = function (e) {
                                    var t = function (e) {
                                        var t = e;
                                        return e.hostname || (t.hostname = "localhost"), e.port || ("wss" === e.protocol ? t.port = 443 : t.port = 80), e.path || (t.path = "/"), e.wsOptions || (t.wsOptions = {}), t
                                    }(e);
                                    if (t.hostname || (t.hostname = t.host), !t.hostname) {
                                        if ("undefined" == typeof document) throw new Error("Could not determine host. Specify host manually.");
                                        var r = new URL(document.URL);
                                        t.hostname = r.hostname, t.port || (t.port = r.port)
                                    }
                                    return void 0 === t.objectMode && (t.objectMode = !(!0 === t.binary || void 0 === t.binary)), t
                                }(t).browserBufferSize || 524288, u = t.browserBufferTimeout || 1e3, c = !t.objectMode,
                                l = function (e, t, r) {
                                    var n = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt",
                                        i = function (e, t) {
                                            var r = e.protocol + "://" + e.hostname + ":" + e.port + e.path;
                                            return "function" == typeof e.transformWsUrl && (r = e.transformWsUrl(r, e, t)), r
                                        }(t, e), o = new WebSocket(i, [n], r);
                                    return o.binaryType = "arraybuffer", o
                                }(e, t, r), h = function (e, t, r) {
                                    var n = new o({objectModeMode: e.objectMode});
                                    return n._write = t, n._flush = function (e) {
                                        l.close(), e()
                                    }, n
                                }(t, (function e(t, r, i) {
                                    l.bufferedAmount > a && setTimeout(e, u, t, r, i), c && "string" == typeof t && (t = n.from(t, "utf8"));
                                    try {
                                        l.send(t)
                                    } catch (e) {
                                        return i(e)
                                    }
                                    i()
                                }));
                            t.objectMode || (h._writev = y), h.on("close", (function () {
                                l.close()
                            }));
                            var f = void 0 !== l.addEventListener;

                            function p() {
                                s.setReadable(h), s.setWritable(h), s.emit("connect")
                            }

                            function d() {
                                s.end(), s.destroy()
                            }

                            function v(e) {
                                s.destroy(e)
                            }

                            function g(e) {
                                var t = e.data;
                                t = t instanceof ArrayBuffer ? n.from(t) : n.from(t, "utf8"), h.push(t)
                            }

                            function y(e, t) {
                                for (var r = new Array(e.length), i = 0; i < e.length; i++) "string" == typeof e[i].chunk ? r[i] = n.from(e[i], "utf8") : r[i] = e[i].chunk;
                                this._write(n.concat(r), "binary", t)
                            }

                            return l.readyState === l.OPEN ? s = h : (s = s = i(void 0, void 0, t), t.objectMode || (s._writev = y), f ? l.addEventListener("open", p) : l.onopen = p), s.socket = l, f ? (l.addEventListener("close", d), l.addEventListener("error", v), l.addEventListener("message", g)) : (l.onclose = d, l.onerror = v, l.onmessage = g), s
                        }
                    }, {buffer: 17, duplexify: 20, "readable-stream": 76}],
                    4: [function (e, t, r) {
                        var n, i, o, s = e("buffer").Buffer, a = e("readable-stream").Transform, u = e("duplexify");
                        t.exports = function (e, t) {
                            if (t.hostname = t.hostname || t.host, !t.hostname) throw new Error("Could not determine host. Specify host manually.");
                            var r = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt";
                            !function (e) {
                                e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
                            }(t);
                            var c = function (e, t) {
                                var r = "wxs" === e.protocol ? "wss" : "ws", n = r + "://" + e.hostname + e.path;
                                return e.port && 80 !== e.port && 443 !== e.port && (n = r + "://" + e.hostname + ":" + e.port + e.path), "function" == typeof e.transformWsUrl && (n = e.transformWsUrl(n, e, t)), n
                            }(t, e);
                            n = wx.connectSocket({url: c, protocols: [r]}), i = function () {
                                var e = new a;
                                return e._write = function (e, t, r) {
                                    n.send({
                                        data: e.buffer, success: function () {
                                            r()
                                        }, fail: function (e) {
                                            r(new Error(e))
                                        }
                                    })
                                }, e._flush = function (e) {
                                    n.close({
                                        success: function () {
                                            e()
                                        }
                                    })
                                }, e
                            }(), (o = u.obj())._destroy = function (e, t) {
                                n.close({
                                    success: function () {
                                        t && t(e)
                                    }
                                })
                            };
                            var l = o.destroy;
                            return o.destroy = function () {
                                o.destroy = l;
                                var e = this;
                                setTimeout((function () {
                                    n.close({
                                        fail: function () {
                                            e._destroy(new Error)
                                        }
                                    })
                                }), 0)
                            }.bind(o), n.onOpen((function () {
                                o.setReadable(i), o.setWritable(i), o.emit("connect")
                            })), n.onMessage((function (e) {
                                var t = e.data;
                                t = t instanceof ArrayBuffer ? s.from(t) : s.from(t, "utf8"), i.push(t)
                            })), n.onClose((function () {
                                o.end(), o.destroy()
                            })), n.onError((function (e) {
                                o.destroy(new Error(e.errMsg))
                            })), o
                        }
                    }, {buffer: 17, duplexify: 20, "readable-stream": 76}],
                    5: [function (e, t, r) {
                        function n() {
                            if (!(this instanceof n)) return new n;
                            this.nextId = Math.max(1, Math.floor(65535 * Math.random()))
                        }

                        n.prototype.allocate = function () {
                            var e = this.nextId++;
                            return 65536 === this.nextId && (this.nextId = 1), e
                        }, n.prototype.getLastAllocated = function () {
                            return 1 === this.nextId ? 65535 : this.nextId - 1
                        }, n.prototype.register = function (e) {
                            return !0
                        }, n.prototype.deallocate = function (e) {
                        }, n.prototype.clear = function () {
                        }, t.exports = n
                    }, {}],
                    6: [function (e, t, r) {
                        "function" == typeof Object.create ? t.exports = function (e, t) {
                            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function (e, t) {
                            if (t) {
                                e.super_ = t;
                                var r = function () {
                                };
                                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                            }
                        }
                    }, {}],
                    7: [function (e, t, r) {
                        t.exports = function () {
                            if ("function" != typeof arguments[0]) throw new Error("callback needed");
                            if ("number" != typeof arguments[1]) throw new Error("interval needed");
                            var e;
                            if (arguments.length > 0) {
                                e = new Array(arguments.length - 2);
                                for (var t = 0; t < e.length; t++) e[t] = arguments[t + 2]
                            }
                            return new function (e, t, r) {
                                var n = this;
                                this._callback = e, this._args = r, this._interval = setInterval(e, t, this._args), this.reschedule = function (e) {
                                    e || (e = n._interval), n._interval && clearInterval(n._interval), n._interval = setInterval(n._callback, e, n._args)
                                }, this.clear = function () {
                                    n._interval && (clearInterval(n._interval), n._interval = void 0)
                                }, this.destroy = function () {
                                    n._interval && clearInterval(n._interval), n._callback = void 0, n._interval = void 0, n._args = void 0
                                }
                            }(arguments[0], arguments[1], e)
                        }
                    }, {}],
                    8: [function (e, t, r) {
                        var n = e("readable-stream").Readable, i = {objectMode: !0}, o = {clean: !0};

                        function s(e) {
                            if (!(this instanceof s)) return new s(e);
                            this.options = e || {}, this.options = Object.assign(o, e), this._inflights = new Map
                        }

                        s.prototype.put = function (e, t) {
                            return this._inflights.set(e.messageId, e), t && t(), this
                        }, s.prototype.createStream = function () {
                            var e = new n(i), t = [], r = !1, o = 0;
                            return this._inflights.forEach((function (e, r) {
                                t.push(e)
                            })), e._read = function () {
                                !r && o < t.length ? this.push(t[o++]) : this.push(null)
                            }, e.destroy = function () {
                                if (!r) {
                                    var e = this;
                                    r = !0, setTimeout((function () {
                                        e.emit("close")
                                    }), 0)
                                }
                            }, e
                        }, s.prototype.del = function (e, t) {
                            return (e = this._inflights.get(e.messageId)) ? (this._inflights.delete(e.messageId), t(null, e)) : t && t(new Error("missing packet")), this
                        }, s.prototype.get = function (e, t) {
                            return (e = this._inflights.get(e.messageId)) ? t(null, e) : t && t(new Error("missing packet")), this
                        }, s.prototype.close = function (e) {
                            this.options.clean && (this._inflights = null), e && e()
                        }, t.exports = s
                    }, {"readable-stream": 76}],
                    9: [function (e, t, r) {
                        function n(e) {
                            if (!(this instanceof n)) return new n(e);
                            this.aliasToTopic = {}, this.max = e
                        }

                        n.prototype.put = function (e, t) {
                            return !(0 === t || t > this.max || (this.aliasToTopic[t] = e, this.length = Object.keys(this.aliasToTopic).length, 0))
                        }, n.prototype.getTopicByAlias = function (e) {
                            return this.aliasToTopic[e]
                        }, n.prototype.clear = function () {
                            this.aliasToTopic = {}
                        }, t.exports = n
                    }, {}],
                    10: [function (e, t, r) {
                        var n = e("lru-cache"), i = e("number-allocator").NumberAllocator;

                        function o(e) {
                            if (!(this instanceof o)) return new o(e);
                            e > 0 && (this.aliasToTopic = new n({max: e}), this.topicToAlias = {}, this.numberAllocator = new i(1, e), this.max = e, this.length = 0)
                        }

                        o.prototype.put = function (e, t) {
                            if (0 === t || t > this.max) return !1;
                            var r = this.aliasToTopic.get(t);
                            return r && delete this.topicToAlias[r], this.aliasToTopic.set(t, e), this.topicToAlias[e] = t, this.numberAllocator.use(t), this.length = this.aliasToTopic.length, !0
                        }, o.prototype.getTopicByAlias = function (e) {
                            return this.aliasToTopic.get(e)
                        }, o.prototype.getAliasByTopic = function (e) {
                            var t = this.topicToAlias[e];
                            return void 0 !== t && this.aliasToTopic.get(t), t
                        }, o.prototype.clear = function () {
                            this.aliasToTopic.reset(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0
                        }, o.prototype.getLruAlias = function () {
                            return this.numberAllocator.firstVacant() || this.aliasToTopic.keys()[this.aliasToTopic.length - 1]
                        }, t.exports = o
                    }, {"lru-cache": 44, "number-allocator": 53}],
                    11: [function (e, t, r) {
                        function n(e) {
                            for (var t = e.split("/"), r = 0; r < t.length; r++) if ("+" !== t[r]) {
                                if ("#" === t[r]) return r === t.length - 1;
                                if (-1 !== t[r].indexOf("+") || -1 !== t[r].indexOf("#")) return !1
                            }
                            return !0
                        }

                        t.exports = {
                            validateTopics: function (e) {
                                if (0 === e.length) return "empty_topic_list";
                                for (var t = 0; t < e.length; t++) if (!n(e[t])) return e[t];
                                return null
                            }
                        }
                    }, {}],
                    12: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n = e("../client"), i = e("../store"), o = e("url"), s = {};

                                function a(e, t, r) {
                                    if ("object" !== S(e) || t || (t = e, e = null), t = t || {}, e) {
                                        var i = o.parse(e, !0);
                                        if (null != i.port && (i.port = Number(i.port)), null === (t = Object.assign(i, t)).protocol) throw new Error("Missing protocol");
                                        t.protocol = t.protocol.replace(/:$/, "")
                                    }
                                    if (function (e) {
                                        var t;
                                        e.auth && ((t = e.auth.match(/^(.+):(.+)$/)) ? (e.username = t[1], e.password = t[2]) : e.username = e.auth)
                                    }(t), t.query && "string" == typeof t.query.clientId && (t.clientId = t.query.clientId), t.cert && t.key) {
                                        if (!t.protocol) throw new Error("Missing secure protocol key");
                                        if (-1 === ["mqtts", "wss", "wxs", "alis"].indexOf(t.protocol)) switch (t.protocol) {
                                            case"ws":
                                                t.protocol = "wss";
                                                break;
                                            default:
                                                throw new Error('Unknown protocol for secure connection: "' + t.protocol + '"!')
                                        }
                                    }
                                    if (!s[t.protocol]) {
                                        var a = -1 !== ["mqtts", "wss"].indexOf(t.protocol);
                                        t.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((function (e, t) {
                                            return (!a || t % 2 != 0) && "function" == typeof s[e]
                                        }))[0]
                                    }
                                    if (!1 === t.clean && !t.clientId) throw new Error("Missing clientId for unclean clients");
                                    t.protocol && (t.defaultProtocol = t.protocol);
                                    var u = new n((function (e) {
                                        return t.servers && (e._reconnectCount && e._reconnectCount !== t.servers.length || (e._reconnectCount = 0), t.host = t.servers[e._reconnectCount].host, t.port = t.servers[e._reconnectCount].port, t.protocol = t.servers[e._reconnectCount].protocol ? t.servers[e._reconnectCount].protocol : t.defaultProtocol, t.hostname = t.host, e._reconnectCount++), s[t.protocol](e, t, r)
                                    }), t);
                                    return u.on("error", (function () {
                                    })), u
                                }

                                void 0 !== r && r.title, s.wx = e("./wx"), s.wxs = e("./wx"), s.ws = e("./ws"), s.wss = e("./ws"), t.exports = a, t.exports.connect = a, t.exports.MqttClient = n, t.exports.Store = i
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {"../client": 1, "../store": 8, "./ws": 3, "./wx": 4, _process: 57, url: 80}],
                    13: [function (e, t, r) {
                        r.byteLength = function (e) {
                            var t = c(e), r = t[0], n = t[1];
                            return 3 * (r + n) / 4 - n
                        }, r.toByteArray = function (e) {
                            var t, r, n = c(e), s = n[0], a = n[1], u = new o(function (e, t, r) {
                                return 3 * (t + r) / 4 - r
                            }(0, s, a)), l = 0, h = a > 0 ? s - 4 : s;
                            for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                            return 2 === a && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[l++] = 255 & t), 1 === a && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t), u
                        }, r.fromByteArray = function (e) {
                            for (var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(l(e, s, s + 16383 > a ? a : s + 16383));
                            return 1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), o.join("")
                        };
                        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

                        function c(e) {
                            var t = e.length;
                            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                            var r = e.indexOf("=");
                            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
                        }

                        function l(e, t, r) {
                            for (var i, o, s = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                            return s.join("")
                        }

                        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
                    }, {}],
                    14: [function (e, t, r) {
                        var n = e("buffer").Buffer, i = Symbol.for("BufferList");

                        function o(e) {
                            if (!(this instanceof o)) return new o(e);
                            o._init.call(this, e)
                        }

                        o._init = function (e) {
                            Object.defineProperty(this, i, {value: !0}), this._bufs = [], this.length = 0, e && this.append(e)
                        }, o.prototype._new = function (e) {
                            return new o(e)
                        }, o.prototype._offset = function (e) {
                            if (0 === e) return [0, 0];
                            for (var t = 0, r = 0; r < this._bufs.length; r++) {
                                var n = t + this._bufs[r].length;
                                if (e < n || r === this._bufs.length - 1) return [r, e - t];
                                t = n
                            }
                        }, o.prototype._reverseOffset = function (e) {
                            for (var t = e[0], r = e[1], n = 0; n < t; n++) r += this._bufs[n].length;
                            return r
                        }, o.prototype.get = function (e) {
                            if (!(e > this.length || e < 0)) {
                                var t = this._offset(e);
                                return this._bufs[t[0]][t[1]]
                            }
                        }, o.prototype.slice = function (e, t) {
                            return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t)
                        }, o.prototype.copy = function (e, t, r, i) {
                            if (("number" != typeof r || r < 0) && (r = 0), ("number" != typeof i || i > this.length) && (i = this.length), r >= this.length) return e || n.alloc(0);
                            if (i <= 0) return e || n.alloc(0);
                            var o = !!e, s = this._offset(r), a = i - r, u = a, c = o && t || 0, l = s[1];
                            if (0 === r && i === this.length) {
                                if (!o) return 1 === this._bufs.length ? this._bufs[0] : n.concat(this._bufs, this.length);
                                for (var h = 0; h < this._bufs.length; h++) this._bufs[h].copy(e, c), c += this._bufs[h].length;
                                return e
                            }
                            if (u <= this._bufs[s[0]].length - l) return o ? this._bufs[s[0]].copy(e, t, l, l + u) : this._bufs[s[0]].slice(l, l + u);
                            o || (e = n.allocUnsafe(a));
                            for (var f = s[0]; f < this._bufs.length; f++) {
                                var p = this._bufs[f].length - l;
                                if (!(u > p)) {
                                    this._bufs[f].copy(e, c, l, l + u), c += p;
                                    break
                                }
                                this._bufs[f].copy(e, c, l), c += p, u -= p, l && (l = 0)
                            }
                            return e.length > c ? e.slice(0, c) : e
                        }, o.prototype.shallowSlice = function (e, t) {
                            if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t) return this._new();
                            var r = this._offset(e), n = this._offset(t), i = this._bufs.slice(r[0], n[0] + 1);
                            return 0 === n[1] ? i.pop() : i[i.length - 1] = i[i.length - 1].slice(0, n[1]), 0 !== r[1] && (i[0] = i[0].slice(r[1])), this._new(i)
                        }, o.prototype.toString = function (e, t, r) {
                            return this.slice(t, r).toString(e)
                        }, o.prototype.consume = function (e) {
                            if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
                            for (; this._bufs.length;) {
                                if (!(e >= this._bufs[0].length)) {
                                    this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                                    break
                                }
                                e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                            }
                            return this
                        }, o.prototype.duplicate = function () {
                            for (var e = this._new(), t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
                            return e
                        }, o.prototype.append = function (e) {
                            if (null == e) return this;
                            if (e.buffer) this._appendBuffer(n.from(e.buffer, e.byteOffset, e.byteLength)); else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) this.append(e[t]); else if (this._isBufferList(e)) for (var r = 0; r < e._bufs.length; r++) this.append(e._bufs[r]); else "number" == typeof e && (e = e.toString()), this._appendBuffer(n.from(e));
                            return this
                        }, o.prototype._appendBuffer = function (e) {
                            this._bufs.push(e), this.length += e.length
                        }, o.prototype.indexOf = function (e, t, r) {
                            if (void 0 === r && "string" == typeof t && (r = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
                            if ("number" == typeof e ? e = n.from([e]) : "string" == typeof e ? e = n.from(e, r) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = n.from(e.buffer, e.byteOffset, e.byteLength) : n.isBuffer(e) || (e = n.from(e)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length) return t > this.length ? this.length : t;
                            for (var i = this._offset(t), o = i[0], s = i[1]; o < this._bufs.length; o++) {
                                for (var a = this._bufs[o]; s < a.length;) if (a.length - s >= e.length) {
                                    var u = a.indexOf(e, s);
                                    if (-1 !== u) return this._reverseOffset([o, u]);
                                    s = a.length - e.length + 1
                                } else {
                                    var c = this._reverseOffset([o, s]);
                                    if (this._match(c, e)) return c;
                                    s++
                                }
                                s = 0
                            }
                            return -1
                        }, o.prototype._match = function (e, t) {
                            if (this.length - e < t.length) return !1;
                            for (var r = 0; r < t.length; r++) if (this.get(e + r) !== t[r]) return !1;
                            return !0
                        }, function () {
                            var e = {
                                readDoubleBE: 8,
                                readDoubleLE: 8,
                                readFloatBE: 4,
                                readFloatLE: 4,
                                readInt32BE: 4,
                                readInt32LE: 4,
                                readUInt32BE: 4,
                                readUInt32LE: 4,
                                readInt16BE: 2,
                                readInt16LE: 2,
                                readUInt16BE: 2,
                                readUInt16LE: 2,
                                readInt8: 1,
                                readUInt8: 1,
                                readIntBE: null,
                                readIntLE: null,
                                readUIntBE: null,
                                readUIntLE: null
                            };
                            for (var t in e) !function (t) {
                                o.prototype[t] = null === e[t] ? function (e, r) {
                                    return this.slice(e, e + r)[t](0, r)
                                } : function () {
                                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                    return this.slice(r, r + e[t])[t](0)
                                }
                            }(t)
                        }(), o.prototype._isBufferList = function (e) {
                            return e instanceof o || o.isBufferList(e)
                        }, o.isBufferList = function (e) {
                            return null != e && e[i]
                        }, t.exports = o
                    }, {buffer: 17}],
                    15: [function (e, t, r) {
                        var n = e("readable-stream").Duplex, i = e("inherits"), o = e("./BufferList");

                        function s(e) {
                            if (!(this instanceof s)) return new s(e);
                            if ("function" == typeof e) {
                                this._callback = e;
                                var t = function (e) {
                                    this._callback && (this._callback(e), this._callback = null)
                                }.bind(this);
                                this.on("pipe", (function (e) {
                                    e.on("error", t)
                                })), this.on("unpipe", (function (e) {
                                    e.removeListener("error", t)
                                })), e = null
                            }
                            o._init.call(this, e), n.call(this)
                        }

                        i(s, n), Object.assign(s.prototype, o.prototype), s.prototype._new = function (e) {
                            return new s(e)
                        }, s.prototype._write = function (e, t, r) {
                            this._appendBuffer(e), "function" == typeof r && r()
                        }, s.prototype._read = function (e) {
                            if (!this.length) return this.push(null);
                            e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e)
                        }, s.prototype.end = function (e) {
                            n.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
                        }, s.prototype._destroy = function (e, t) {
                            this._bufs.length = 0, this.length = 0, t(e)
                        }, s.prototype._isBufferList = function (e) {
                            return e instanceof s || e instanceof o || s.isBufferList(e)
                        }, s.isBufferList = o.isBufferList, t.exports = s, t.exports.BufferListStream = s, t.exports.BufferList = o
                    }, {"./BufferList": 14, inherits: 24, "readable-stream": 76}],
                    16: [function (e, t, r) {
                    }, {}],
                    17: [function (e, t, r) {
                        (function (t) {
                            (function () {
                                var t = e("base64-js"), n = e("ieee754");
                                r.Buffer = s, r.SlowBuffer = function (e) {
                                    return +e != e && (e = 0), s.alloc(+e)
                                }, r.INSPECT_MAX_BYTES = 50;
                                var i = 2147483647;

                                function o(e) {
                                    if (e > i) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                                    var t = new Uint8Array(e);
                                    return t.__proto__ = s.prototype, t
                                }

                                function s(e, t, r) {
                                    if ("number" == typeof e) {
                                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                                        return c(e)
                                    }
                                    return a(e, t, r)
                                }

                                function a(e, t, r) {
                                    if ("string" == typeof e) return function (e, t) {
                                        if ("string" == typeof t && "" !== t || (t = "utf8"), !s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                                        var r = 0 | f(e, t), n = o(r), i = n.write(e, t);
                                        return i !== r && (n = n.slice(0, i)), n
                                    }(e, t);
                                    if (ArrayBuffer.isView(e)) return l(e);
                                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + S(e));
                                    if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return function (e, t, r) {
                                        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                                        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                                        var n;
                                        return (n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)).__proto__ = s.prototype, n
                                    }(e, t, r);
                                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                    var n = e.valueOf && e.valueOf();
                                    if (null != n && n !== e) return s.from(n, t, r);
                                    var i = function (e) {
                                        if (s.isBuffer(e)) {
                                            var t = 0 | h(e.length), r = o(t);
                                            return 0 === r.length || e.copy(r, 0, 0, t), r
                                        }
                                        return void 0 !== e.length ? "number" != typeof e.length || F(e.length) ? o(0) : l(e) : "Buffer" === e.type && Array.isArray(e.data) ? l(e.data) : void 0
                                    }(e);
                                    if (i) return i;
                                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + S(e))
                                }

                                function u(e) {
                                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                                }

                                function c(e) {
                                    return u(e), o(e < 0 ? 0 : 0 | h(e))
                                }

                                function l(e) {
                                    for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                                    return r
                                }

                                function h(e) {
                                    if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                                    return 0 | e
                                }

                                function f(e, t) {
                                    if (s.isBuffer(e)) return e.length;
                                    if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
                                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + S(e));
                                    var r = e.length, n = arguments.length > 2 && !0 === arguments[2];
                                    if (!n && 0 === r) return 0;
                                    for (var i = !1; ;) switch (t) {
                                        case"ascii":
                                        case"latin1":
                                        case"binary":
                                            return r;
                                        case"utf8":
                                        case"utf-8":
                                            return j(e).length;
                                        case"ucs2":
                                        case"ucs-2":
                                        case"utf16le":
                                        case"utf-16le":
                                            return 2 * r;
                                        case"hex":
                                            return r >>> 1;
                                        case"base64":
                                            return D(e).length;
                                        default:
                                            if (i) return n ? -1 : j(e).length;
                                            t = ("" + t).toLowerCase(), i = !0
                                    }
                                }

                                function p(e, t, r) {
                                    var n = e[t];
                                    e[t] = e[r], e[r] = n
                                }

                                function d(e, t, r, n, i) {
                                    if (0 === e.length) return -1;
                                    if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), F(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                                        if (i) return -1;
                                        r = e.length - 1
                                    } else if (r < 0) {
                                        if (!i) return -1;
                                        r = 0
                                    }
                                    if ("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, n, i);
                                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i);
                                    throw new TypeError("val must be string, number or Buffer")
                                }

                                function v(e, t, r, n, i) {
                                    var o, s = 1, a = e.length, u = t.length;
                                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                        if (e.length < 2 || t.length < 2) return -1;
                                        s = 2, a /= 2, u /= 2, r /= 2
                                    }

                                    function c(e, t) {
                                        return 1 === s ? e[t] : e.readUInt16BE(t * s)
                                    }

                                    if (i) {
                                        var l = -1;
                                        for (o = r; o < a; o++) if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                                            if (-1 === l && (l = o), o - l + 1 === u) return l * s
                                        } else -1 !== l && (o -= o - l), l = -1
                                    } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                                        for (var h = !0, f = 0; f < u; f++) if (c(e, o + f) !== c(t, f)) {
                                            h = !1;
                                            break
                                        }
                                        if (h) return o
                                    }
                                    return -1
                                }

                                function g(e, t, r, n) {
                                    r = Number(r) || 0;
                                    var i = e.length - r;
                                    n ? (n = Number(n)) > i && (n = i) : n = i;
                                    var o = t.length;
                                    n > o / 2 && (n = o / 2);
                                    for (var s = 0; s < n; ++s) {
                                        var a = parseInt(t.substr(2 * s, 2), 16);
                                        if (F(a)) return s;
                                        e[r + s] = a
                                    }
                                    return s
                                }

                                function y(e, t, r, n) {
                                    return U(j(t, e.length - r), e, r, n)
                                }

                                function m(e, t, r, n) {
                                    return U(function (e) {
                                        for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                                        return t
                                    }(t), e, r, n)
                                }

                                function b(e, t, r, n) {
                                    return m(e, t, r, n)
                                }

                                function w(e, t, r, n) {
                                    return U(D(t), e, r, n)
                                }

                                function _(e, t, r, n) {
                                    return U(function (e, t) {
                                        for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = (r = e.charCodeAt(s)) >> 8, i = r % 256, o.push(i), o.push(n);
                                        return o
                                    }(t, e.length - r), e, r, n)
                                }

                                function k(e, r, n) {
                                    return 0 === r && n === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(r, n))
                                }

                                function E(e, t, r) {
                                    r = Math.min(e.length, r);
                                    for (var n = [], i = t; i < r;) {
                                        var o, s, a, u, c = e[i], l = null,
                                            h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                        if (i + h <= r) switch (h) {
                                            case 1:
                                                c < 128 && (l = c);
                                                break;
                                            case 2:
                                                128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                                break;
                                            case 3:
                                                o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                                break;
                                            case 4:
                                                o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                                        }
                                        null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += h
                                    }
                                    return function (e) {
                                        var t = e.length;
                                        if (t <= P) return String.fromCharCode.apply(String, e);
                                        for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += P));
                                        return r
                                    }(n)
                                }

                                r.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function () {
                                    try {
                                        var e = new Uint8Array(1);
                                        return e.__proto__ = {
                                            __proto__: Uint8Array.prototype, foo: function () {
                                                return 42
                                            }
                                        }, 42 === e.foo()
                                    } catch (e) {
                                        return !1
                                    }
                                }(), !s.TYPED_ARRAY_SUPPORT && "undefined" != typeof console && console.error, Object.defineProperty(s.prototype, "parent", {
                                    enumerable: !0,
                                    get: function () {
                                        if (s.isBuffer(this)) return this.buffer
                                    }
                                }), Object.defineProperty(s.prototype, "offset", {
                                    enumerable: !0, get: function () {
                                        if (s.isBuffer(this)) return this.byteOffset
                                    }
                                }), "undefined" != typeof Symbol && null != Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                                    value: null,
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !1
                                }), s.poolSize = 8192, s.from = function (e, t, r) {
                                    return a(e, t, r)
                                }, s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, s.alloc = function (e, t, r) {
                                    return function (e, t, r) {
                                        return u(e), e <= 0 ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
                                    }(e, t, r)
                                }, s.allocUnsafe = function (e) {
                                    return c(e)
                                }, s.allocUnsafeSlow = function (e) {
                                    return c(e)
                                }, s.isBuffer = function (e) {
                                    return null != e && !0 === e._isBuffer && e !== s.prototype
                                }, s.compare = function (e, t) {
                                    if (q(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), q(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                    if (e === t) return 0;
                                    for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i) if (e[i] !== t[i]) {
                                        r = e[i], n = t[i];
                                        break
                                    }
                                    return r < n ? -1 : n < r ? 1 : 0
                                }, s.isEncoding = function (e) {
                                    switch (String(e).toLowerCase()) {
                                        case"hex":
                                        case"utf8":
                                        case"utf-8":
                                        case"ascii":
                                        case"latin1":
                                        case"binary":
                                        case"base64":
                                        case"ucs2":
                                        case"ucs-2":
                                        case"utf16le":
                                        case"utf-16le":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                }, s.concat = function (e, t) {
                                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    if (0 === e.length) return s.alloc(0);
                                    var r;
                                    if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                                    var n = s.allocUnsafe(t), i = 0;
                                    for (r = 0; r < e.length; ++r) {
                                        var o = e[r];
                                        if (q(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                                        o.copy(n, i), i += o.length
                                    }
                                    return n
                                }, s.byteLength = f, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
                                    var e = this.length;
                                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                    for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                                    return this
                                }, s.prototype.swap32 = function () {
                                    var e = this.length;
                                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                    for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                                    return this
                                }, s.prototype.swap64 = function () {
                                    var e = this.length;
                                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                    for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                                    return this
                                }, s.prototype.toString = function () {
                                    var e = this.length;
                                    return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : function (e, t, r) {
                                        var n = !1;
                                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                                        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                                        if ((r >>>= 0) <= (t >>>= 0)) return "";
                                        for (e || (e = "utf8"); ;) switch (e) {
                                            case"hex":
                                                return A(this, t, r);
                                            case"utf8":
                                            case"utf-8":
                                                return E(this, t, r);
                                            case"ascii":
                                                return I(this, t, r);
                                            case"latin1":
                                            case"binary":
                                                return x(this, t, r);
                                            case"base64":
                                                return k(this, t, r);
                                            case"ucs2":
                                            case"ucs-2":
                                            case"utf16le":
                                            case"utf-16le":
                                                return T(this, t, r);
                                            default:
                                                if (n) throw new TypeError("Unknown encoding: " + e);
                                                e = (e + "").toLowerCase(), n = !0
                                        }
                                    }.apply(this, arguments)
                                }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function (e) {
                                    if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                                    return this === e || 0 === s.compare(this, e)
                                }, s.prototype.inspect = function () {
                                    var e = "", t = r.INSPECT_MAX_BYTES;
                                    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
                                }, s.prototype.compare = function (e, t, r, n, i) {
                                    if (q(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + S(e));
                                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                                    if (n >= i && t >= r) return 0;
                                    if (n >= i) return -1;
                                    if (t >= r) return 1;
                                    if (this === e) return 0;
                                    for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), u = Math.min(o, a), c = this.slice(n, i), l = e.slice(t, r), h = 0; h < u; ++h) if (c[h] !== l[h]) {
                                        o = c[h], a = l[h];
                                        break
                                    }
                                    return o < a ? -1 : a < o ? 1 : 0
                                }, s.prototype.includes = function (e, t, r) {
                                    return -1 !== this.indexOf(e, t, r)
                                }, s.prototype.indexOf = function (e, t, r) {
                                    return d(this, e, t, r, !0)
                                }, s.prototype.lastIndexOf = function (e, t, r) {
                                    return d(this, e, t, r, !1)
                                }, s.prototype.write = function (e, t, r, n) {
                                    if (void 0 === t) n = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0; else {
                                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                        t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                                    }
                                    var i = this.length - t;
                                    if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                    n || (n = "utf8");
                                    for (var o = !1; ;) switch (n) {
                                        case"hex":
                                            return g(this, e, t, r);
                                        case"utf8":
                                        case"utf-8":
                                            return y(this, e, t, r);
                                        case"ascii":
                                            return m(this, e, t, r);
                                        case"latin1":
                                        case"binary":
                                            return b(this, e, t, r);
                                        case"base64":
                                            return w(this, e, t, r);
                                        case"ucs2":
                                        case"ucs-2":
                                        case"utf16le":
                                        case"utf-16le":
                                            return _(this, e, t, r);
                                        default:
                                            if (o) throw new TypeError("Unknown encoding: " + n);
                                            n = ("" + n).toLowerCase(), o = !0
                                    }
                                }, s.prototype.toJSON = function () {
                                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                                };
                                var P = 4096;

                                function I(e, t, r) {
                                    var n = "";
                                    r = Math.min(e.length, r);
                                    for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                                    return n
                                }

                                function x(e, t, r) {
                                    var n = "";
                                    r = Math.min(e.length, r);
                                    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                                    return n
                                }

                                function A(e, t, r) {
                                    var n = e.length;
                                    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                                    for (var i = "", o = t; o < r; ++o) i += N(e[o]);
                                    return i
                                }

                                function T(e, t, r) {
                                    for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                    return i
                                }

                                function O(e, t, r) {
                                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                                    if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                                }

                                function C(e, t, r, n, i, o) {
                                    if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                    if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                                    if (r + n > e.length) throw new RangeError("Index out of range")
                                }

                                function R(e, t, r, n, i, o) {
                                    if (r + n > e.length) throw new RangeError("Index out of range");
                                    if (r < 0) throw new RangeError("Index out of range")
                                }

                                function B(e, t, r, i, o) {
                                    return t = +t, r >>>= 0, o || R(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4
                                }

                                function L(e, t, r, i, o) {
                                    return t = +t, r >>>= 0, o || R(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8
                                }

                                s.prototype.slice = function (e, t) {
                                    var r = this.length;
                                    (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                                    var n = this.subarray(e, t);
                                    return n.__proto__ = s.prototype, n
                                }, s.prototype.readUIntLE = function (e, t, r) {
                                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                                    return n
                                }, s.prototype.readUIntBE = function (e, t, r) {
                                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                                    for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                                    return n
                                }, s.prototype.readUInt8 = function (e, t) {
                                    return e >>>= 0, t || O(e, 1, this.length), this[e]
                                }, s.prototype.readUInt16LE = function (e, t) {
                                    return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8
                                }, s.prototype.readUInt16BE = function (e, t) {
                                    return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
                                }, s.prototype.readUInt32LE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                                }, s.prototype.readUInt32BE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                                }, s.prototype.readIntLE = function (e, t, r) {
                                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                                }, s.prototype.readIntBE = function (e, t, r) {
                                    e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                                    for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                                }, s.prototype.readInt8 = function (e, t) {
                                    return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                                }, s.prototype.readInt16LE = function (e, t) {
                                    e >>>= 0, t || O(e, 2, this.length);
                                    var r = this[e] | this[e + 1] << 8;
                                    return 32768 & r ? 4294901760 | r : r
                                }, s.prototype.readInt16BE = function (e, t) {
                                    e >>>= 0, t || O(e, 2, this.length);
                                    var r = this[e + 1] | this[e] << 8;
                                    return 32768 & r ? 4294901760 | r : r
                                }, s.prototype.readInt32LE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                                }, s.prototype.readInt32BE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                                }, s.prototype.readFloatLE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !0, 23, 4)
                                }, s.prototype.readFloatBE = function (e, t) {
                                    return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !1, 23, 4)
                                }, s.prototype.readDoubleLE = function (e, t) {
                                    return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !0, 52, 8)
                                }, s.prototype.readDoubleBE = function (e, t) {
                                    return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !1, 52, 8)
                                }, s.prototype.writeUIntLE = function (e, t, r, n) {
                                    e = +e, t >>>= 0, r >>>= 0, n || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                                    var i = 1, o = 0;
                                    for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                                    return t + r
                                }, s.prototype.writeUIntBE = function (e, t, r, n) {
                                    e = +e, t >>>= 0, r >>>= 0, n || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                                    var i = r - 1, o = 1;
                                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                                    return t + r
                                }, s.prototype.writeUInt8 = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                                }, s.prototype.writeUInt16LE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                                }, s.prototype.writeUInt16BE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                                }, s.prototype.writeUInt32LE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                                }, s.prototype.writeUInt32BE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                                }, s.prototype.writeIntLE = function (e, t, r, n) {
                                    if (e = +e, t >>>= 0, !n) {
                                        var i = Math.pow(2, 8 * r - 1);
                                        C(this, e, t, r, i - 1, -i)
                                    }
                                    var o = 0, s = 1, a = 0;
                                    for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                                    return t + r
                                }, s.prototype.writeIntBE = function (e, t, r, n) {
                                    if (e = +e, t >>>= 0, !n) {
                                        var i = Math.pow(2, 8 * r - 1);
                                        C(this, e, t, r, i - 1, -i)
                                    }
                                    var o = r - 1, s = 1, a = 0;
                                    for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                                    return t + r
                                }, s.prototype.writeInt8 = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                                }, s.prototype.writeInt16LE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                                }, s.prototype.writeInt16BE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                                }, s.prototype.writeInt32LE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                                }, s.prototype.writeInt32BE = function (e, t, r) {
                                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                                }, s.prototype.writeFloatLE = function (e, t, r) {
                                    return B(this, e, t, !0, r)
                                }, s.prototype.writeFloatBE = function (e, t, r) {
                                    return B(this, e, t, !1, r)
                                }, s.prototype.writeDoubleLE = function (e, t, r) {
                                    return L(this, e, t, !0, r)
                                }, s.prototype.writeDoubleBE = function (e, t, r) {
                                    return L(this, e, t, !1, r)
                                }, s.prototype.copy = function (e, t, r, n) {
                                    if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                                    if (0 === e.length || 0 === this.length) return 0;
                                    if (t < 0) throw new RangeError("targetStart out of bounds");
                                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                                    var i = n - r;
                                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n); else if (this === e && r < t && t < n) for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                                    return i
                                }, s.prototype.fill = function (e, t, r, n) {
                                    if ("string" == typeof e) {
                                        if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                                        if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                                        if (1 === e.length) {
                                            var i = e.charCodeAt(0);
                                            ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                                        }
                                    } else "number" == typeof e && (e &= 255);
                                    if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                                    if (r <= t) return this;
                                    var o;
                                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < r; ++o) this[o] = e; else {
                                        var a = s.isBuffer(e) ? e : s.from(e, n), u = a.length;
                                        if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                                        for (o = 0; o < r - t; ++o) this[o + t] = a[o % u]
                                    }
                                    return this
                                };
                                var M = /[^+/0-9A-Za-z-_]/g;

                                function N(e) {
                                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                                }

                                function j(e, t) {
                                    var r;
                                    t = t || 1 / 0;
                                    for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                                        if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                                            if (!i) {
                                                if (r > 56319) {
                                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                                    continue
                                                }
                                                if (s + 1 === n) {
                                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                                    continue
                                                }
                                                i = r;
                                                continue
                                            }
                                            if (r < 56320) {
                                                (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                                continue
                                            }
                                            r = 65536 + (i - 55296 << 10 | r - 56320)
                                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                                        if (i = null, r < 128) {
                                            if ((t -= 1) < 0) break;
                                            o.push(r)
                                        } else if (r < 2048) {
                                            if ((t -= 2) < 0) break;
                                            o.push(r >> 6 | 192, 63 & r | 128)
                                        } else if (r < 65536) {
                                            if ((t -= 3) < 0) break;
                                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                        } else {
                                            if (!(r < 1114112)) throw new Error("Invalid code point");
                                            if ((t -= 4) < 0) break;
                                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                        }
                                    }
                                    return o
                                }

                                function D(e) {
                                    return t.toByteArray(function (e) {
                                        if ((e = (e = e.split("=")[0]).trim().replace(M, "")).length < 2) return "";
                                        for (; e.length % 4 != 0;) e += "=";
                                        return e
                                    }(e))
                                }

                                function U(e, t, r, n) {
                                    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                                    return i
                                }

                                function q(e, t) {
                                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                                }

                                function F(e) {
                                    return e != e
                                }
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {"base64-js": 13, buffer: 17, ieee754: 23}],
                    18: [function (e, t, r) {
                        (function (n) {
                            (function () {
                                var i;
                                r.formatArgs = function (e) {
                                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                                        var r = "color: " + this.color;
                                        e.splice(1, 0, r, "color: inherit");
                                        var n = 0, i = 0;
                                        e[0].replace(/%[a-zA-Z%]/g, (function (e) {
                                            "%%" !== e && "%c" === e && (i = ++n)
                                        })), e.splice(i, 0, r)
                                    }
                                }, r.save = function (e) {
                                    try {
                                        e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                                    } catch (e) {
                                    }
                                }, r.load = function () {
                                    var e;
                                    try {
                                        e = r.storage.getItem("debug")
                                    } catch (e) {
                                    }
                                    return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e
                                }, r.useColors = function () {
                                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                                }, r.storage = function () {
                                    try {
                                        return localStorage
                                    } catch (e) {
                                    }
                                }(), r.destroy = (i = !1, function () {
                                    i || (i = !0)
                                }), r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], r.log = console.debug || console.log || function () {
                                }, t.exports = e("./common")(r), t.exports.formatters.j = function (e) {
                                    try {
                                        return JSON.stringify(e)
                                    } catch (e) {
                                        return "[UnexpectedJSONParseError]: " + e.message
                                    }
                                }
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {"./common": 19, _process: 57}],
                    19: [function (e, t, r) {
                        t.exports = function (t) {
                            function r(e) {
                                var t, i, o, s = null;

                                function a() {
                                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                    if (a.enabled) {
                                        var o = a, s = Number(new Date), u = s - (t || s);
                                        o.diff = u, o.prev = t, o.curr = s, t = s, n[0] = r.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                                        var c = 0;
                                        n[0] = n[0].replace(/%([a-zA-Z%])/g, (function (e, t) {
                                            if ("%%" === e) return "%";
                                            c++;
                                            var i = r.formatters[t];
                                            if ("function" == typeof i) {
                                                var s = n[c];
                                                e = i.call(o, s), n.splice(c, 1), c--
                                            }
                                            return e
                                        })), r.formatArgs.call(o, n), (o.log || r.log).apply(o, n)
                                    }
                                }

                                return a.namespace = e, a.useColors = r.useColors(), a.color = r.selectColor(e), a.extend = n, a.destroy = r.destroy, Object.defineProperty(a, "enabled", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function () {
                                        return null !== s ? s : (i !== r.namespaces && (i = r.namespaces, o = r.enabled(e)), o)
                                    },
                                    set: function (e) {
                                        s = e
                                    }
                                }), "function" == typeof r.init && r.init(a), a
                            }

                            function n(e, t) {
                                var n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                                return n.log = this.log, n
                            }

                            function i(e) {
                                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                            }

                            return r.debug = r, r.default = r, r.coerce = function (e) {
                                return e instanceof Error ? e.stack || e.message : e
                            }, r.disable = function () {
                                var e = [].concat(y(r.names.map(i)), y(r.skips.map(i).map((function (e) {
                                    return "-" + e
                                })))).join(",");
                                return r.enable(""), e
                            }, r.enable = function (e) {
                                var t;
                                r.save(e), r.namespaces = e, r.names = [], r.skips = [];
                                var n = ("string" == typeof e ? e : "").split(/[\s,]+/), i = n.length;
                                for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.slice(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
                            }, r.enabled = function (e) {
                                if ("*" === e[e.length - 1]) return !0;
                                var t, n;
                                for (t = 0, n = r.skips.length; t < n; t++) if (r.skips[t].test(e)) return !1;
                                for (t = 0, n = r.names.length; t < n; t++) if (r.names[t].test(e)) return !0;
                                return !1
                            }, r.humanize = e("ms"), r.destroy = function () {
                            }, Object.keys(t).forEach((function (e) {
                                r[e] = t[e]
                            })), r.names = [], r.skips = [], r.formatters = {}, r.selectColor = function (e) {
                                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                                return r.colors[Math.abs(t) % r.colors.length]
                            }, r.enable(r.load()), r
                        }
                    }, {ms: 52}],
                    20: [function (e, t, r) {
                        (function (r, n) {
                            (function () {
                                var i = e("readable-stream"), o = e("end-of-stream"), s = e("inherits"),
                                    a = e("stream-shift"),
                                    u = n.from && n.from !== Uint8Array.from ? n.from([0]) : new n([0]),
                                    c = function (e, t) {
                                        e._corked ? e.once("uncork", t) : t()
                                    }, l = function (e, t) {
                                        return function (r) {
                                            r ? function (e, t) {
                                                e._autoDestroy && e.destroy(t)
                                            }(e, "premature close" === r.message ? null : r) : t && !e._ended && e.end()
                                        }
                                    }, h = function () {
                                    }, f = function e(t, r, n) {
                                        if (!(this instanceof e)) return new e(t, r, n);
                                        i.Duplex.call(this, n), this._writable = null, this._readable = null, this._readable2 = null, this._autoDestroy = !n || !1 !== n.autoDestroy, this._forwardDestroy = !n || !1 !== n.destroy, this._forwardEnd = !n || !1 !== n.end, this._corked = 1, this._ondrain = null, this._drained = !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, t && this.setWritable(t), r && this.setReadable(r)
                                    };
                                s(f, i.Duplex), f.obj = function (e, t, r) {
                                    return r || (r = {}), r.objectMode = !0, r.highWaterMark = 16, new f(e, t, r)
                                }, f.prototype.cork = function () {
                                    1 == ++this._corked && this.emit("cork")
                                }, f.prototype.uncork = function () {
                                    this._corked && 0 == --this._corked && this.emit("uncork")
                                }, f.prototype.setWritable = function (e) {
                                    if (this._unwrite && this._unwrite(), this.destroyed) e && e.destroy && e.destroy(); else if (null !== e && !1 !== e) {
                                        var t = this, n = o(e, {writable: !0, readable: !1}, l(this, this._forwardEnd)),
                                            i = function () {
                                                var e = t._ondrain;
                                                t._ondrain = null, e && e()
                                            };
                                        this._unwrite && r.nextTick(i), this._writable = e, this._writable.on("drain", i), this._unwrite = function () {
                                            t._writable.removeListener("drain", i), n()
                                        }, this.uncork()
                                    } else this.end()
                                }, f.prototype.setReadable = function (e) {
                                    if (this._unread && this._unread(), this.destroyed) e && e.destroy && e.destroy(); else {
                                        if (null === e || !1 === e) return this.push(null), void this.resume();
                                        var t, r = this, n = o(e, {writable: !1, readable: !0}, l(this)),
                                            s = function () {
                                                r._forward()
                                            }, a = function () {
                                                r.push(null)
                                            };
                                        this._drained = !0, this._readable = e, this._readable2 = e._readableState ? e : (t = e, new i.Readable({
                                            objectMode: !0,
                                            highWaterMark: 16
                                        }).wrap(t)), this._readable2.on("readable", s), this._readable2.on("end", a), this._unread = function () {
                                            r._readable2.removeListener("readable", s), r._readable2.removeListener("end", a), n()
                                        }, this._forward()
                                    }
                                }, f.prototype._read = function () {
                                    this._drained = !0, this._forward()
                                }, f.prototype._forward = function () {
                                    if (!this._forwarding && this._readable2 && this._drained) {
                                        var e;
                                        for (this._forwarding = !0; this._drained && null !== (e = a(this._readable2));) this.destroyed || (this._drained = this.push(e));
                                        this._forwarding = !1
                                    }
                                }, f.prototype.destroy = function (e, t) {
                                    if (t || (t = h), this.destroyed) return t(null);
                                    this.destroyed = !0;
                                    var n = this;
                                    r.nextTick((function () {
                                        n._destroy(e), t(null)
                                    }))
                                }, f.prototype._destroy = function (e) {
                                    if (e) {
                                        var t = this._ondrain;
                                        this._ondrain = null, t ? t(e) : this.emit("error", e)
                                    }
                                    this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy && this._writable.destroy()), this.emit("close")
                                }, f.prototype._write = function (e, t, r) {
                                    if (!this.destroyed) return this._corked ? c(this, this._write.bind(this, e, t, r)) : e === u ? this._finish(r) : this._writable ? void (!1 === this._writable.write(e) ? this._ondrain = r : this.destroyed || r()) : r()
                                }, f.prototype._finish = function (e) {
                                    var t = this;
                                    this.emit("preend"), c(this, (function () {
                                        var r, n;
                                        n = function () {
                                            !1 === t._writableState.prefinished && (t._writableState.prefinished = !0), t.emit("prefinish"), c(t, e)
                                        }, (r = t._forwardEnd && t._writable) ? r._writableState && r._writableState.finished ? n() : r._writableState ? r.end(n) : (r.end(), n()) : n()
                                    }))
                                }, f.prototype.end = function (e, t, r) {
                                    return "function" == typeof e ? this.end(null, null, e) : "function" == typeof t ? this.end(e, null, t) : (this._ended = !0, e && this.write(e), this._writableState.ending || this._writableState.destroyed || this.write(u), i.Writable.prototype.end.call(this, r))
                                }, t.exports = f
                            }).call(this)
                        }).call(this, e("_process"), e("buffer").Buffer)
                    }, {
                        _process: 57,
                        buffer: 17,
                        "end-of-stream": 21,
                        inherits: 24,
                        "readable-stream": 76,
                        "stream-shift": 78
                    }],
                    21: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n = e("once"), i = function () {
                                };
                                t.exports = function e(t, o, s) {
                                    if ("function" == typeof o) return e(t, null, o);
                                    o || (o = {}), s = n(s || i);
                                    var a = t._writableState, u = t._readableState,
                                        c = o.readable || !1 !== o.readable && t.readable,
                                        l = o.writable || !1 !== o.writable && t.writable, h = !1, f = function () {
                                            t.writable || p()
                                        }, p = function () {
                                            l = !1, c || s.call(t)
                                        }, d = function () {
                                            c = !1, l || s.call(t)
                                        }, v = function (e) {
                                            s.call(t, e ? new Error("exited with error code: " + e) : null)
                                        }, g = function (e) {
                                            s.call(t, e)
                                        }, y = function () {
                                            r.nextTick(m)
                                        }, m = function () {
                                            if (!h) return (!c || u && u.ended && !u.destroyed) && (!l || a && a.ended && !a.destroyed) ? void 0 : s.call(t, new Error("premature close"))
                                        }, b = function () {
                                            t.req.on("finish", p)
                                        };
                                    return function (e) {
                                        return e.setHeader && "function" == typeof e.abort
                                    }(t) ? (t.on("complete", p), t.on("abort", y), t.req ? b() : t.on("request", b)) : l && !a && (t.on("end", f), t.on("close", f)), function (e) {
                                        return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                                    }(t) && t.on("exit", v), t.on("end", d), t.on("finish", p), !1 !== o.error && t.on("error", g), t.on("close", y), function () {
                                        h = !0, t.removeListener("complete", p), t.removeListener("abort", y), t.removeListener("request", b), t.req && t.req.removeListener("finish", p), t.removeListener("end", f), t.removeListener("close", f), t.removeListener("finish", p), t.removeListener("exit", v), t.removeListener("end", d), t.removeListener("error", g), t.removeListener("close", y)
                                    }
                                }
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {_process: 57, once: 55}],
                    22: [function (e, t, r) {
                        var n = Object.create || function (e) {
                            var t = function () {
                            };
                            return t.prototype = e, new t
                        }, i = Object.keys || function (e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                            return r
                        }, o = Function.prototype.bind || function (e) {
                            var t = this;
                            return function () {
                                return t.apply(e, arguments)
                            }
                        };

                        function s() {
                            this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = n(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                        }

                        t.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._maxListeners = void 0;
                        var a, u = 10;
                        try {
                            var c = {};
                            Object.defineProperty && Object.defineProperty(c, "x", {value: 0}), a = 0 === c.x
                        } catch (e) {
                            a = !1
                        }

                        function l(e) {
                            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
                        }

                        function h(e, t, r, i) {
                            var o, s, a;
                            if ("function" != typeof r) throw new TypeError('"listener" argument must be a function');
                            if ((s = e._events) ? (s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), a = s[t]) : (s = e._events = n(null), e._eventsCount = 0), a) {
                                if ("function" == typeof a ? a = s[t] = i ? [r, a] : [a, r] : i ? a.unshift(r) : a.push(r), !a.warned && (o = l(e)) && o > 0 && a.length > o) {
                                    a.warned = !0;
                                    var u = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, "object" === ("undefined" == typeof console ? "undefined" : S(console)) && console.warn
                                }
                            } else a = s[t] = r, ++e._eventsCount;
                            return e
                        }

                        function f() {
                            if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                                case 0:
                                    return this.listener.call(this.target);
                                case 1:
                                    return this.listener.call(this.target, arguments[0]);
                                case 2:
                                    return this.listener.call(this.target, arguments[0], arguments[1]);
                                case 3:
                                    return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                                default:
                                    for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
                                    this.listener.apply(this.target, e)
                            }
                        }

                        function p(e, t, r) {
                            var n = {fired: !1, wrapFn: void 0, target: e, type: t, listener: r}, i = o.call(f, n);
                            return i.listener = r, n.wrapFn = i, i
                        }

                        function d(e, t, r) {
                            var n = e._events;
                            if (!n) return [];
                            var i = n[t];
                            return i ? "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function (e) {
                                for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                                return t
                            }(i) : g(i, i.length) : []
                        }

                        function v(e) {
                            var t = this._events;
                            if (t) {
                                var r = t[e];
                                if ("function" == typeof r) return 1;
                                if (r) return r.length
                            }
                            return 0
                        }

                        function g(e, t) {
                            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
                            return r
                        }

                        a ? Object.defineProperty(s, "defaultMaxListeners", {
                            enumerable: !0, get: function () {
                                return u
                            }, set: function (e) {
                                if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                                u = e
                            }
                        }) : s.defaultMaxListeners = u, s.prototype.setMaxListeners = function (e) {
                            if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
                            return this._maxListeners = e, this
                        }, s.prototype.getMaxListeners = function () {
                            return l(this)
                        }, s.prototype.emit = function (e) {
                            var t, r, n, i, o, s, a = "error" === e;
                            if (s = this._events) a = a && null == s.error; else if (!a) return !1;
                            if (a) {
                                if (arguments.length > 1 && (t = arguments[1]), t instanceof Error) throw t;
                                var u = new Error('Unhandled "error" event. (' + t + ")");
                                throw u.context = t, u
                            }
                            if (!(r = s[e])) return !1;
                            var c = "function" == typeof r;
                            switch (n = arguments.length) {
                                case 1:
                                    !function (e, t, r) {
                                        if (t) e.call(r); else for (var n = e.length, i = g(e, n), o = 0; o < n; ++o) i[o].call(r)
                                    }(r, c, this);
                                    break;
                                case 2:
                                    !function (e, t, r, n) {
                                        if (t) e.call(r, n); else for (var i = e.length, o = g(e, i), s = 0; s < i; ++s) o[s].call(r, n)
                                    }(r, c, this, arguments[1]);
                                    break;
                                case 3:
                                    !function (e, t, r, n, i) {
                                        if (t) e.call(r, n, i); else for (var o = e.length, s = g(e, o), a = 0; a < o; ++a) s[a].call(r, n, i)
                                    }(r, c, this, arguments[1], arguments[2]);
                                    break;
                                case 4:
                                    !function (e, t, r, n, i, o) {
                                        if (t) e.call(r, n, i, o); else for (var s = e.length, a = g(e, s), u = 0; u < s; ++u) a[u].call(r, n, i, o)
                                    }(r, c, this, arguments[1], arguments[2], arguments[3]);
                                    break;
                                default:
                                    for (i = new Array(n - 1), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    !function (e, t, r, n) {
                                        if (t) e.apply(r, n); else for (var i = e.length, o = g(e, i), s = 0; s < i; ++s) o[s].apply(r, n)
                                    }(r, c, this, i)
                            }
                            return !0
                        }, s.prototype.addListener = function (e, t) {
                            return h(this, e, t, !1)
                        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) {
                            return h(this, e, t, !0)
                        }, s.prototype.once = function (e, t) {
                            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                            return this.on(e, p(this, e, t)), this
                        }, s.prototype.prependOnceListener = function (e, t) {
                            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                            return this.prependListener(e, p(this, e, t)), this
                        }, s.prototype.removeListener = function (e, t) {
                            var r, i, o, s, a;
                            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                            if (!(i = this._events)) return this;
                            if (!(r = i[e])) return this;
                            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = n(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t)); else if ("function" != typeof r) {
                                for (o = -1, s = r.length - 1; s >= 0; s--) if (r[s] === t || r[s].listener === t) {
                                    a = r[s].listener, o = s;
                                    break
                                }
                                if (o < 0) return this;
                                0 === o ? r.shift() : function (e, t) {
                                    for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
                                    e.pop()
                                }(r, o), 1 === r.length && (i[e] = r[0]), i.removeListener && this.emit("removeListener", e, a || t)
                            }
                            return this
                        }, s.prototype.removeAllListeners = function (e) {
                            var t, r, o;
                            if (!(r = this._events)) return this;
                            if (!r.removeListener) return 0 === arguments.length ? (this._events = n(null), this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = n(null) : delete r[e]), this;
                            if (0 === arguments.length) {
                                var s, a = i(r);
                                for (o = 0; o < a.length; ++o) "removeListener" !== (s = a[o]) && this.removeAllListeners(s);
                                return this.removeAllListeners("removeListener"), this._events = n(null), this._eventsCount = 0, this
                            }
                            if ("function" == typeof (t = r[e])) this.removeListener(e, t); else if (t) for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
                            return this
                        }, s.prototype.listeners = function (e) {
                            return d(this, e, !0)
                        }, s.prototype.rawListeners = function (e) {
                            return d(this, e, !1)
                        }, s.listenerCount = function (e, t) {
                            return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t)
                        }, s.prototype.listenerCount = v, s.prototype.eventNames = function () {
                            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
                        }
                    }, {}],
                    23: [function (e, t, r) {
                        r.read = function (e, t, r, n, i) {
                            var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, h = r ? i - 1 : 0,
                                f = r ? -1 : 1, p = e[t + h];
                            for (h += f, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + e[t + h], h += f, l -= 8) ;
                            for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e[t + h], h += f, l -= 8) ;
                            if (0 === o) o = 1 - c; else {
                                if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                                s += Math.pow(2, n), o -= c
                            }
                            return (p ? -1 : 1) * s * Math.pow(2, o - n)
                        }, r.write = function (e, t, r, n, i, o) {
                            var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, h = l >> 1,
                                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1,
                                d = n ? 1 : -1, v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + p] = 255 & a, p += d, a /= 256, i -= 8) ;
                            for (s = s << i | a, c += i; c > 0; e[r + p] = 255 & s, p += d, s /= 256, c -= 8) ;
                            e[r + p - d] |= 128 * v
                        }
                    }, {}],
                    24: [function (e, t, r) {
                        "function" == typeof Object.create ? t.exports = function (e, t) {
                            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function (e, t) {
                            if (t) {
                                e.super_ = t;
                                var r = function () {
                                };
                                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                            }
                        }
                    }, {}],
                    25: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0}), r.Container = r.Base = r.ContainerIterator = void 0;
                        var n = v((function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.NORMAL;
                            g(this, e), this.iteratorType = t
                        }));
                        r.ContainerIterator = n, n.NORMAL = !1, n.REVERSE = !0;
                        var i = function () {
                            function e() {
                                g(this, e), this.length = 0
                            }

                            return v(e, [{
                                key: "size", value: function () {
                                    return this.length
                                }
                            }, {
                                key: "empty", value: function () {
                                    return 0 === this.length
                                }
                            }]), e
                        }();
                        r.Base = i;
                        var o = function (e) {
                            c(r, i);
                            var t = l(r);

                            function r() {
                                return g(this, r), t.apply(this, arguments)
                            }

                            return v(r)
                        }();
                        r.Container = o
                    }, {}],
                    26: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = e("../../ContainerBase/index"), i = function (e) {
                            c(r, n.Base);
                            var t = l(r);

                            function r() {
                                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
                                        for (var t, r = 0, n = (t = "string" != typeof e ? JSON.stringify(e) : e).length, i = 0; i < n; i++) r = (r << 5) - r + t.charCodeAt(i), r |= 0;
                                        return r >>> 0
                                    };
                                if (g(this, r), e = t.call(this), n < 16 || 0 != (n & n - 1)) throw new RangeError("InitBucketNum range error");
                                return e.bucketNum = e.initBucketNum = n, e.hashFunc = i, e
                            }

                            return v(r, [{
                                key: "clear", value: function () {
                                    this.length = 0, this.bucketNum = this.initBucketNum, this.hashTable = []
                                }
                            }]), r
                        }();
                        i.sigma = .75, i.treeifyThreshold = 8, i.untreeifyThreshold = 6, i.minTreeifySize = 64, i.maxBucketNum = 1 << 30, r.default = i
                    }, {"../../ContainerBase/index": 25}],
                    27: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var i = n(e("./Base/index")), o = n(e("../SequentialContainer/Vector")),
                            s = n(e("../TreeContainer/OrderedMap")), a = function (e, t) {
                                c(n, e);
                                var r = l(n);

                                function n() {
                                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        i = arguments.length > 1 ? arguments[1] : void 0,
                                        o = arguments.length > 2 ? arguments[2] : void 0;
                                    return g(this, n), (e = r.call(this, i, o)).hashTable = [], t.forEach((function (t) {
                                        return e.setElement(t[0], t[1])
                                    })), e
                                }

                                return v(n, [{
                                    key: "reAllocate", value: function () {
                                        var e = this;
                                        if (!(this.bucketNum >= i.default.maxBucketNum)) {
                                            var t = [], r = this.bucketNum;
                                            this.bucketNum <<= 1;
                                            for (var n = Object.keys(this.hashTable), a = n.length, u = function (a) {
                                                var u = parseInt(n[a]), c = e.hashTable[u], l = c.size();
                                                if (0 === l) return "continue";
                                                if (1 === l) {
                                                    var h = c.front();
                                                    return t[e.hashFunc(h[0]) & e.bucketNum - 1] = new o.default([h], !1), "continue"
                                                }
                                                var f = [], p = [];
                                                c.forEach((function (t) {
                                                    0 == (e.hashFunc(t[0]) & r) ? f.push(t) : p.push(t)
                                                })), c instanceof s.default ? (f.length > i.default.untreeifyThreshold ? t[u] = new s.default(f) : f.length && (t[u] = new o.default(f, !1)), p.length > i.default.untreeifyThreshold ? t[u + r] = new s.default(p) : p.length && (t[u + r] = new o.default(p, !1))) : (f.length >= i.default.treeifyThreshold ? t[u] = new s.default(f) : f.length && (t[u] = new o.default(f, !1)), p.length >= i.default.treeifyThreshold ? t[u + r] = new s.default(p) : p.length && (t[u + r] = new o.default(p, !1)))
                                            }, c = 0; c < a; ++c) u(c);
                                            this.hashTable = t
                                        }
                                    }
                                }, {
                                    key: "forEach", value: function (e) {
                                        for (var t = Object.values(this.hashTable), r = t.length, n = 0, i = 0; i < r; ++i) t[i].forEach((function (t) {
                                            return e(t, n++)
                                        }))
                                    }
                                }, {
                                    key: "setElement", value: function (e, t) {
                                        var r = this.hashFunc(e) & this.bucketNum - 1, i = this.hashTable[r];
                                        if (i) {
                                            var a = i.size();
                                            if (i instanceof o.default) {
                                                var u, c = m(i);
                                                try {
                                                    for (c.s(); !(u = c.n()).done;) {
                                                        var l = u.value;
                                                        if (l[0] === e) return void (l[1] = t)
                                                    }
                                                } catch (e) {
                                                    c.e(e)
                                                } finally {
                                                    c.f()
                                                }
                                                if (i.pushBack([e, t]), a + 1 >= n.treeifyThreshold) {
                                                    if (this.bucketNum <= n.minTreeifySize) return this.length += 1, void this.reAllocate();
                                                    this.hashTable[r] = new s.default(this.hashTable[r])
                                                }
                                                this.length += 1
                                            } else {
                                                i.setElement(e, t);
                                                var h = i.size();
                                                this.length += h - a
                                            }
                                        } else this.length += 1, this.hashTable[r] = new o.default([[e, t]], !1);
                                        this.length > this.bucketNum * n.sigma && this.reAllocate()
                                    }
                                }, {
                                    key: "getElementByKey", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        if (r) {
                                            if (r instanceof s.default) return r.getElementByKey(e);
                                            var n, i = m(r);
                                            try {
                                                for (i.s(); !(n = i.n()).done;) {
                                                    var o = n.value;
                                                    if (o[0] === e) return o[1]
                                                }
                                            } catch (e) {
                                                i.e(e)
                                            } finally {
                                                i.f()
                                            }
                                        }
                                    }
                                }, {
                                    key: "eraseElementByKey", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        if (r) if (r instanceof o.default) {
                                            var n, s = 0, a = m(r);
                                            try {
                                                for (a.s(); !(n = a.n()).done;) {
                                                    if (n.value[0] === e) return r.eraseElementByPos(s), void (this.length -= 1);
                                                    s += 1
                                                }
                                            } catch (e) {
                                                a.e(e)
                                            } finally {
                                                a.f()
                                            }
                                        } else {
                                            var u = r.size();
                                            r.eraseElementByKey(e);
                                            var c = r.size();
                                            this.length += c - u, c <= i.default.untreeifyThreshold && (this.hashTable[t] = new o.default(r))
                                        }
                                    }
                                }, {
                                    key: "find", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        if (!r) return !1;
                                        if (r instanceof s.default) return !r.find(e).equals(r.end());
                                        var n, i = m(r);
                                        try {
                                            for (i.s(); !(n = i.n()).done;) if (n.value[0] === e) return !0
                                        } catch (e) {
                                            i.e(e)
                                        } finally {
                                            i.f()
                                        }
                                        return !1
                                    }
                                }, {
                                    key: t, value: function () {
                                        return u().mark((function e() {
                                            var t, r, n, i, o, s, a;
                                            return u().wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        t = Object.values(this.hashTable), r = t.length, n = 0;
                                                    case 3:
                                                        if (!(n < r)) {
                                                            e.next = 25;
                                                            break
                                                        }
                                                        i = t[n], o = m(i), e.prev = 6, o.s();
                                                    case 8:
                                                        if ((s = o.n()).done) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        return a = s.value, e.next = 12, a;
                                                    case 12:
                                                        e.next = 8;
                                                        break;
                                                    case 14:
                                                        e.next = 19;
                                                        break;
                                                    case 16:
                                                        e.prev = 16, e.t0 = e.catch(6), o.e(e.t0);
                                                    case 19:
                                                        return e.prev = 19, o.f(), e.finish(19);
                                                    case 22:
                                                        ++n, e.next = 3;
                                                        break;
                                                    case 25:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this, [[6, 16, 19, 22]])
                                        })).bind(this)()
                                    }
                                }]), n
                            }(i.default, Symbol.iterator);
                        r.default = a
                    }, {"../SequentialContainer/Vector": 36, "../TreeContainer/OrderedMap": 40, "./Base/index": 26}],
                    28: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var i = n(e("./Base/index")), o = n(e("../SequentialContainer/Vector")),
                            s = n(e("../TreeContainer/OrderedSet")), a = function (e, t) {
                                c(n, e);
                                var r = l(n);

                                function n() {
                                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        i = arguments.length > 1 ? arguments[1] : void 0,
                                        o = arguments.length > 2 ? arguments[2] : void 0;
                                    return g(this, n), (e = r.call(this, i, o)).hashTable = [], t.forEach((function (t) {
                                        return e.insert(t)
                                    })), e
                                }

                                return v(n, [{
                                    key: "reAllocate", value: function () {
                                        var e = this;
                                        if (!(this.bucketNum >= i.default.maxBucketNum)) {
                                            var t = [], r = this.bucketNum;
                                            this.bucketNum <<= 1;
                                            for (var n = Object.keys(this.hashTable), a = n.length, u = function (a) {
                                                var u = parseInt(n[a]), c = e.hashTable[u], l = c.size();
                                                if (0 === l) return "continue";
                                                if (1 === l) {
                                                    var h = c.front();
                                                    return t[e.hashFunc(h) & e.bucketNum - 1] = new o.default([h], !1), "continue"
                                                }
                                                var f = [], p = [];
                                                c.forEach((function (t) {
                                                    0 == (e.hashFunc(t) & r) ? f.push(t) : p.push(t)
                                                })), c instanceof s.default ? (f.length > i.default.untreeifyThreshold ? t[u] = new s.default(f) : f.length && (t[u] = new o.default(f, !1)), p.length > i.default.untreeifyThreshold ? t[u + r] = new s.default(p) : p.length && (t[u + r] = new o.default(p, !1))) : (f.length >= i.default.treeifyThreshold ? t[u] = new s.default(f) : f.length && (t[u] = new o.default(f, !1)), p.length >= i.default.treeifyThreshold ? t[u + r] = new s.default(p) : p.length && (t[u + r] = new o.default(p, !1)))
                                            }, c = 0; c < a; ++c) u(c);
                                            this.hashTable = t
                                        }
                                    }
                                }, {
                                    key: "forEach", value: function (e) {
                                        for (var t = Object.values(this.hashTable), r = t.length, n = 0, i = 0; i < r; ++i) t[i].forEach((function (t) {
                                            return e(t, n++)
                                        }))
                                    }
                                }, {
                                    key: "insert", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        if (r) {
                                            var n = r.size();
                                            if (r instanceof o.default) {
                                                if (!r.find(e).equals(r.end())) return;
                                                if (r.pushBack(e), n + 1 >= i.default.treeifyThreshold) {
                                                    if (this.bucketNum <= i.default.minTreeifySize) return this.length += 1, void this.reAllocate();
                                                    this.hashTable[t] = new s.default(r)
                                                }
                                                this.length += 1
                                            } else {
                                                r.insert(e);
                                                var a = r.size();
                                                this.length += a - n
                                            }
                                        } else this.hashTable[t] = new o.default([e], !1), this.length += 1;
                                        this.length > this.bucketNum * i.default.sigma && this.reAllocate()
                                    }
                                }, {
                                    key: "eraseElementByKey", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        if (r) {
                                            var n = r.size();
                                            if (0 !== n) if (r instanceof o.default) {
                                                r.eraseElementByValue(e);
                                                var s = r.size();
                                                this.length += s - n
                                            } else {
                                                r.eraseElementByKey(e);
                                                var a = r.size();
                                                this.length += a - n, a <= i.default.untreeifyThreshold && (this.hashTable[t] = new o.default(r))
                                            }
                                        }
                                    }
                                }, {
                                    key: "find", value: function (e) {
                                        var t = this.hashFunc(e) & this.bucketNum - 1, r = this.hashTable[t];
                                        return !!r && !r.find(e).equals(r.end())
                                    }
                                }, {
                                    key: t, value: function () {
                                        return u().mark((function e() {
                                            var t, r, n, i, o, s, a;
                                            return u().wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        t = Object.values(this.hashTable), r = t.length, n = 0;
                                                    case 3:
                                                        if (!(n < r)) {
                                                            e.next = 25;
                                                            break
                                                        }
                                                        i = t[n], o = m(i), e.prev = 6, o.s();
                                                    case 8:
                                                        if ((s = o.n()).done) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        return a = s.value, e.next = 12, a;
                                                    case 12:
                                                        e.next = 8;
                                                        break;
                                                    case 14:
                                                        e.next = 19;
                                                        break;
                                                    case 16:
                                                        e.prev = 16, e.t0 = e.catch(6), o.e(e.t0);
                                                    case 19:
                                                        return e.prev = 19, o.f(), e.finish(19);
                                                    case 22:
                                                        ++n, e.next = 3;
                                                        break;
                                                    case 25:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this, [[6, 16, 19, 22]])
                                        })).bind(this)()
                                    }
                                }]), n
                            }(i.default, Symbol.iterator);
                        r.default = a
                    }, {"../SequentialContainer/Vector": 36, "../TreeContainer/OrderedSet": 41, "./Base/index": 26}],
                    29: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = e("../ContainerBase/index"), i = function (e) {
                            c(r, n.Base);
                            var t = l(r);

                            function r() {
                                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e, t) {
                                        return e > t ? -1 : e < t ? 1 : 0
                                    }, o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                g(this, r), (e = t.call(this)).cmp = i, Array.isArray(n) ? e.priorityQueue = o ? y(n) : n : (e.priorityQueue = [], n.forEach((function (t) {
                                    return e.priorityQueue.push(t)
                                }))), e.length = e.priorityQueue.length;
                                for (var s = e.length - 1 >> 1; s >= 0; --s) for (var a = s, u = a << 1 | 1; u < e.length;) {
                                    var c = u, l = c + 1, h = c;
                                    if (l < e.length && e.cmp(e.priorityQueue[c], e.priorityQueue[l]) > 0 && (h = l), e.cmp(e.priorityQueue[a], e.priorityQueue[h]) <= 0) break;
                                    var f = [e.priorityQueue[h], e.priorityQueue[a]];
                                    e.priorityQueue[a] = f[0], e.priorityQueue[h] = f[1], u = (a = h) << 1 | 1
                                }
                                return e
                            }

                            return v(r, [{
                                key: "adjust", value: function (e) {
                                    var t = e << 1 | 1, r = 2 + (e << 1);
                                    if (t < this.length && this.cmp(this.priorityQueue[e], this.priorityQueue[t]) > 0) {
                                        var n = [this.priorityQueue[t], this.priorityQueue[e]];
                                        this.priorityQueue[e] = n[0], this.priorityQueue[t] = n[1]
                                    }
                                    if (r < this.length && this.cmp(this.priorityQueue[e], this.priorityQueue[r]) > 0) {
                                        var i = [this.priorityQueue[r], this.priorityQueue[e]];
                                        this.priorityQueue[e] = i[0], this.priorityQueue[r] = i[1]
                                    }
                                }
                            }, {
                                key: "clear", value: function () {
                                    this.length = 0, this.priorityQueue.length = 0
                                }
                            }, {
                                key: "push", value: function (e) {
                                    if (this.priorityQueue.push(e), this.length += 1, 1 !== this.length) for (var t = this.length - 1; t > 0;) {
                                        var r = t - 1 >> 1;
                                        if (this.cmp(this.priorityQueue[r], e) <= 0) break;
                                        this.adjust(r), t = r
                                    }
                                }
                            }, {
                                key: "pop", value: function () {
                                    if (this.length) {
                                        var e = this.priorityQueue[this.length - 1];
                                        this.length -= 1;
                                        for (var t = 0; t < this.length;) {
                                            var r = t << 1 | 1, n = 2 + (t << 1);
                                            if (r >= this.length) break;
                                            var i = r;
                                            if (n < this.length && this.cmp(this.priorityQueue[r], this.priorityQueue[n]) > 0 && (i = n), this.cmp(this.priorityQueue[i], e) >= 0) break;
                                            this.priorityQueue[t] = this.priorityQueue[i], t = i
                                        }
                                        this.priorityQueue[t] = e, this.priorityQueue.pop()
                                    }
                                }
                            }, {
                                key: "top", value: function () {
                                    return this.priorityQueue[0]
                                }
                            }]), r
                        }();
                        r.default = i
                    }, {"../ContainerBase/index": 25}],
                    30: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var i = n(e("../SequentialContainer/Deque")), o = e("../ContainerBase/index"),
                            s = function (e) {
                                c(r, o.Base);
                                var t = l(r);

                                function r() {
                                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                    return g(this, r), (e = t.call(this)).queue = new i.default(n), e.length = e.queue.size(), e
                                }

                                return v(r, [{
                                    key: "clear", value: function () {
                                        this.queue.clear(), this.length = 0
                                    }
                                }, {
                                    key: "push", value: function (e) {
                                        this.queue.pushBack(e), this.length += 1
                                    }
                                }, {
                                    key: "pop", value: function () {
                                        this.queue.popFront(), this.length && (this.length -= 1)
                                    }
                                }, {
                                    key: "front", value: function () {
                                        return this.queue.front()
                                    }
                                }]), r
                            }();
                        r.default = s
                    }, {"../ContainerBase/index": 25, "../SequentialContainer/Deque": 34}],
                    31: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = e("../ContainerBase/index"), i = function (e) {
                            c(r, n.Base);
                            var t = l(r);

                            function r() {
                                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return g(this, r), (e = t.call(this)).stack = [], n.forEach((function (t) {
                                    return e.push(t)
                                })), e
                            }

                            return v(r, [{
                                key: "clear", value: function () {
                                    this.length = 0, this.stack.length = 0
                                }
                            }, {
                                key: "push", value: function (e) {
                                    this.stack.push(e), this.length += 1
                                }
                            }, {
                                key: "pop", value: function () {
                                    this.stack.pop(), this.length > 0 && (this.length -= 1)
                                }
                            }, {
                                key: "top", value: function () {
                                    return this.stack[this.length - 1]
                                }
                            }]), r
                        }();
                        r.default = i
                    }, {"../ContainerBase/index": 25}],
                    32: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0}), r.RandomIterator = void 0;
                        var n = e("../../../utils/checkParams"), i = e("../../ContainerBase/index"), o = function (e) {
                            c(r, i.ContainerIterator);
                            var t = l(r);

                            function r(e, n, o, s, a) {
                                var u;
                                return g(this, r), (u = t.call(this, a)).node = e, u.size = n, u.getElementByPos = o, u.setElementByPos = s, u.iteratorType === i.ContainerIterator.NORMAL ? (u.pre = function () {
                                    if (0 === this.node) throw new RangeError("Deque iterator access denied!");
                                    return this.node -= 1, this
                                }, u.next = function () {
                                    if (this.node === this.size()) throw new RangeError("Deque Iterator access denied!");
                                    return this.node += 1, this
                                }) : (u.pre = function () {
                                    if (this.node === this.size() - 1) throw new RangeError("Deque iterator access denied!");
                                    return this.node += 1, this
                                }, u.next = function () {
                                    if (-1 === this.node) throw new RangeError("Deque iterator access denied!");
                                    return this.node -= 1, this
                                }), u
                            }

                            return v(r, [{
                                key: "pointer", get: function () {
                                    return (0, n.checkWithinAccessParams)(this.node, 0, this.size() - 1), this.getElementByPos(this.node)
                                }, set: function (e) {
                                    (0, n.checkWithinAccessParams)(this.node, 0, this.size() - 1), this.setElementByPos(this.node, e)
                                }
                            }, {
                                key: "equals", value: function (e) {
                                    return this.node === e.node
                                }
                            }]), r
                        }();
                        r.RandomIterator = o
                    }, {"../../../utils/checkParams": 43, "../../ContainerBase/index": 25}],
                    33: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = e("../../ContainerBase/index"), i = function (e) {
                            c(r, n.Container);
                            var t = l(r);

                            function r() {
                                return g(this, r), t.apply(this, arguments)
                            }

                            return v(r)
                        }();
                        r.default = i
                    }, {"../../ContainerBase/index": 25}],
                    34: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.DequeIterator = void 0;
                        var i = n(e("./Base/index")), o = e("../../utils/checkParams"), s = e("../ContainerBase/index"),
                            a = e("./Base/RandomIterator"), h = function (e) {
                                c(r, a.RandomIterator);
                                var t = l(r);

                                function r() {
                                    return g(this, r), t.apply(this, arguments)
                                }

                                return v(r, [{
                                    key: "copy", value: function () {
                                        return new r(this.node, this.size, this.getElementByPos, this.setElementByPos, this.iteratorType)
                                    }
                                }]), r
                            }();
                        r.DequeIterator = h;
                        var p = function (e, t) {
                            c(n, e);
                            var r = l(n);

                            function n() {
                                var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
                                if (g(this, n), (e = r.call(this)).first = 0, e.curFirst = 0, e.last = 0, e.curLast = 0, e.bucketNum = 0, e.map = [], "size" in i) t = "number" == typeof i.size ? i.size : i.size(); else {
                                    if (!("length" in i)) throw new RangeError("Can't get container's size!");
                                    t = i.length
                                }
                                e.bucketSize = o, e.bucketNum = Math.max(Math.ceil(t / e.bucketSize), 1);
                                for (var s = 0; s < e.bucketNum; ++s) e.map.push(new Array(e.bucketSize));
                                var a = Math.ceil(t / e.bucketSize);
                                return e.first = e.last = (e.bucketNum >> 1) - (a >> 1), e.curFirst = e.curLast = e.bucketSize - t % e.bucketSize >> 1, i.forEach((function (t) {
                                    return e.pushBack(t)
                                })), e.size = e.size.bind(f(e)), e.getElementByPos = e.getElementByPos.bind(f(e)), e.setElementByPos = e.setElementByPos.bind(f(e)), e
                            }

                            return v(n, [{
                                key: "reAllocate", value: function () {
                                    for (var e = [], t = Math.max(this.bucketNum >> 1, 1), r = 0; r < t; ++r) e[r] = new Array(this.bucketSize);
                                    for (var n = this.first; n < this.bucketNum; ++n) e[e.length] = this.map[n];
                                    for (var i = 0; i < this.last; ++i) e[e.length] = this.map[i];
                                    e[e.length] = y(this.map[this.last]), this.first = t, this.last = e.length - 1;
                                    for (var o = 0; o < t; ++o) e[e.length] = new Array(this.bucketSize);
                                    this.map = e, this.bucketNum = e.length
                                }
                            }, {
                                key: "getElementIndex", value: function (e) {
                                    var t = this.curFirst + e + 1, r = t % this.bucketSize, n = r - 1,
                                        i = this.first + (t - r) / this.bucketSize;
                                    return 0 === r && (i -= 1), i %= this.bucketNum, n < 0 && (n += this.bucketSize), {
                                        curNodeBucketIndex: i,
                                        curNodePointerIndex: n
                                    }
                                }
                            }, {
                                key: "clear", value: function () {
                                    this.map = [[]], this.bucketNum = 1, this.first = this.last = this.length = 0, this.curFirst = this.curLast = this.bucketSize >> 1
                                }
                            }, {
                                key: "front", value: function () {
                                    return this.map[this.first][this.curFirst]
                                }
                            }, {
                                key: "back", value: function () {
                                    return this.map[this.last][this.curLast]
                                }
                            }, {
                                key: "begin", value: function () {
                                    return new h(0, this.size, this.getElementByPos, this.setElementByPos)
                                }
                            }, {
                                key: "end", value: function () {
                                    return new h(this.length, this.size, this.getElementByPos, this.setElementByPos)
                                }
                            }, {
                                key: "rBegin", value: function () {
                                    return new h(this.length - 1, this.size, this.getElementByPos, this.setElementByPos, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "rEnd", value: function () {
                                    return new h(-1, this.size, this.getElementByPos, this.setElementByPos, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "pushBack", value: function (e) {
                                    this.length && (this.curLast < this.bucketSize - 1 ? this.curLast += 1 : this.last < this.bucketNum - 1 ? (this.last += 1, this.curLast = 0) : (this.last = 0, this.curLast = 0), this.last === this.first && this.curLast === this.curFirst && this.reAllocate()), this.length += 1, this.map[this.last][this.curLast] = e
                                }
                            }, {
                                key: "popBack", value: function () {
                                    this.length && (this.map[this.last][this.curLast] = void 0, 1 !== this.length && (this.curLast > 0 ? this.curLast -= 1 : this.last > 0 ? (this.last -= 1, this.curLast = this.bucketSize - 1) : (this.last = this.bucketNum - 1, this.curLast = this.bucketSize - 1)), this.length -= 1)
                                }
                            }, {
                                key: "pushFront", value: function (e) {
                                    this.length && (this.curFirst > 0 ? this.curFirst -= 1 : this.first > 0 ? (this.first -= 1, this.curFirst = this.bucketSize - 1) : (this.first = this.bucketNum - 1, this.curFirst = this.bucketSize - 1), this.first === this.last && this.curFirst === this.curLast && this.reAllocate()), this.length += 1, this.map[this.first][this.curFirst] = e
                                }
                            }, {
                                key: "popFront", value: function () {
                                    this.length && (this.map[this.first][this.curFirst] = void 0, 1 !== this.length && (this.curFirst < this.bucketSize - 1 ? this.curFirst += 1 : this.first < this.bucketNum - 1 ? (this.first += 1, this.curFirst = 0) : (this.first = 0, this.curFirst = 0)), this.length -= 1)
                                }
                            }, {
                                key: "forEach", value: function (e) {
                                    for (var t = 0; t < this.length; ++t) e(this.getElementByPos(t), t)
                                }
                            }, {
                                key: "getElementByPos", value: function (e) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1);
                                    var t = this.getElementIndex(e), r = t.curNodeBucketIndex,
                                        n = t.curNodePointerIndex;
                                    return this.map[r][n]
                                }
                            }, {
                                key: "setElementByPos", value: function (e, t) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1);
                                    var r = this.getElementIndex(e), n = r.curNodeBucketIndex,
                                        i = r.curNodePointerIndex;
                                    this.map[n][i] = t
                                }
                            }, {
                                key: "insert", value: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                    if ((0, o.checkWithinAccessParams)(e, 0, this.length), 0 === e) for (; r--;) this.pushFront(t); else if (e === this.length) for (; r--;) this.pushBack(t); else {
                                        for (var n = [], i = e; i < this.length; ++i) n.push(this.getElementByPos(i));
                                        this.cut(e - 1);
                                        for (var s = 0; s < r; ++s) this.pushBack(t);
                                        for (var a = 0; a < n.length; ++a) this.pushBack(n[a])
                                    }
                                }
                            }, {
                                key: "cut", value: function (e) {
                                    if (e < 0) this.clear(); else {
                                        var t = this.getElementIndex(e), r = t.curNodeBucketIndex,
                                            n = t.curNodePointerIndex;
                                        this.last = r, this.curLast = n, this.length = e + 1
                                    }
                                }
                            }, {
                                key: "eraseElementByPos", value: function (e) {
                                    var t = this;
                                    if ((0, o.checkWithinAccessParams)(e, 0, this.length - 1), 0 === e) this.popFront(); else if (e === this.length - 1) this.popBack(); else {
                                        for (var r = [], n = e + 1; n < this.length; ++n) r.push(this.getElementByPos(n));
                                        this.cut(e), this.popBack(), r.forEach((function (e) {
                                            return t.pushBack(e)
                                        }))
                                    }
                                }
                            }, {
                                key: "eraseElementByValue", value: function (e) {
                                    if (this.length) {
                                        for (var t = [], r = 0; r < this.length; ++r) {
                                            var n = this.getElementByPos(r);
                                            n !== e && t.push(n)
                                        }
                                        for (var i = t.length, o = 0; o < i; ++o) this.setElementByPos(o, t[o]);
                                        this.cut(i - 1)
                                    }
                                }
                            }, {
                                key: "eraseElementByIterator", value: function (e) {
                                    var t = e.node;
                                    return this.eraseElementByPos(t), e.next()
                                }
                            }, {
                                key: "find", value: function (e) {
                                    for (var t = 0; t < this.length; ++t) if (this.getElementByPos(t) === e) return new h(t, this.size, this.getElementByPos, this.setElementByPos);
                                    return this.end()
                                }
                            }, {
                                key: "reverse", value: function () {
                                    for (var e = 0, t = this.length - 1; e < t;) {
                                        var r = this.getElementByPos(e);
                                        this.setElementByPos(e, this.getElementByPos(t)), this.setElementByPos(t, r), e += 1, t -= 1
                                    }
                                }
                            }, {
                                key: "unique", value: function () {
                                    if (!(this.length <= 1)) {
                                        for (var e = 1, t = this.getElementByPos(0), r = 1; r < this.length; ++r) {
                                            var n = this.getElementByPos(r);
                                            n !== t && (t = n, this.setElementByPos(e++, n))
                                        }
                                        for (; this.length > e;) this.popBack()
                                    }
                                }
                            }, {
                                key: "sort", value: function (e) {
                                    for (var t = [], r = 0; r < this.length; ++r) t.push(this.getElementByPos(r));
                                    t.sort(e);
                                    for (var n = 0; n < this.length; ++n) this.setElementByPos(n, t[n])
                                }
                            }, {
                                key: "shrinkToFit", value: function () {
                                    if (this.length) {
                                        var e = [];
                                        this.forEach((function (t) {
                                            return e.push(t)
                                        })), this.bucketNum = Math.max(Math.ceil(this.length / this.bucketSize), 1), this.length = this.first = this.last = this.curFirst = this.curLast = 0, this.map = [];
                                        for (var t = 0; t < this.bucketNum; ++t) this.map.push(new Array(this.bucketSize));
                                        for (var r = 0; r < e.length; ++r) this.pushBack(e[r])
                                    }
                                }
                            }, {
                                key: t, value: function () {
                                    return u().mark((function e() {
                                        var t;
                                        return u().wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    t = 0;
                                                case 1:
                                                    if (!(t < this.length)) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 4, this.getElementByPos(t);
                                                case 4:
                                                    ++t, e.next = 1;
                                                    break;
                                                case 7:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })).bind(this)()
                                }
                            }]), n
                        }(i.default, Symbol.iterator);
                        r.default = p
                    }, {
                        "../../utils/checkParams": 43,
                        "../ContainerBase/index": 25,
                        "./Base/RandomIterator": 32,
                        "./Base/index": 33
                    }],
                    35: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.LinkListIterator = r.LinkNode = void 0;
                        var i = n(e("./Base/index")), o = e("../../utils/checkParams"), s = e("../ContainerBase/index"),
                            a = v((function e(t) {
                                g(this, e), this.value = void 0, this.pre = void 0, this.next = void 0, this.value = t
                            }));
                        r.LinkNode = a;
                        var h = function (e) {
                            c(r, s.ContainerIterator);
                            var t = l(r);

                            function r(e, n, i) {
                                var o;
                                return g(this, r), (o = t.call(this, i)).node = e, o.header = n, o.iteratorType === s.ContainerIterator.NORMAL ? (o.pre = function () {
                                    if (this.node.pre === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.pre, this
                                }, o.next = function () {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.next, this
                                }) : (o.pre = function () {
                                    if (this.node.next === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.next, this
                                }, o.next = function () {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.pre, this
                                }), o
                            }

                            return v(r, [{
                                key: "pointer", get: function () {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node.value
                                }, set: function (e) {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    this.node.value = e
                                }
                            }, {
                                key: "equals", value: function (e) {
                                    return this.node === e.node
                                }
                            }, {
                                key: "copy", value: function () {
                                    return new r(this.node, this.header, this.iteratorType)
                                }
                            }]), r
                        }();
                        r.LinkListIterator = h;
                        var f = function (e, t) {
                            c(n, e);
                            var r = l(n);

                            function n() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return g(this, n), (e = r.call(this)).header = new a, e.head = void 0, e.tail = void 0, t.forEach((function (t) {
                                    return e.pushBack(t)
                                })), e
                            }

                            return v(n, [{
                                key: "clear", value: function () {
                                    this.length = 0, this.head = this.tail = void 0, this.header.pre = this.header.next = void 0
                                }
                            }, {
                                key: "begin", value: function () {
                                    return new h(this.head || this.header, this.header)
                                }
                            }, {
                                key: "end", value: function () {
                                    return new h(this.header, this.header)
                                }
                            }, {
                                key: "rBegin", value: function () {
                                    return new h(this.tail || this.header, this.header, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "rEnd", value: function () {
                                    return new h(this.header, this.header, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "front", value: function () {
                                    return this.head ? this.head.value : void 0
                                }
                            }, {
                                key: "back", value: function () {
                                    return this.tail ? this.tail.value : void 0
                                }
                            }, {
                                key: "forEach", value: function (e) {
                                    if (this.length) for (var t = this.head, r = 0; t !== this.header;) e(t.value, r++), t = t.next
                                }
                            }, {
                                key: "getElementByPos", value: function (e) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1);
                                    for (var t = this.head; e--;) t = t.next;
                                    return t.value
                                }
                            }, {
                                key: "eraseElementByPos", value: function (e) {
                                    if ((0, o.checkWithinAccessParams)(e, 0, this.length - 1), 0 === e) this.popFront(); else if (e === this.length - 1) this.popBack(); else {
                                        for (var t = this.head; e--;) t = t.next;
                                        var r = (t = t).pre, n = t.next;
                                        n.pre = r, r.next = n, this.length -= 1
                                    }
                                }
                            }, {
                                key: "eraseElementByValue", value: function (e) {
                                    for (; this.head && this.head.value === e;) this.popFront();
                                    for (; this.tail && this.tail.value === e;) this.popBack();
                                    if (this.head) for (var t = this.head; t !== this.header;) {
                                        if (t.value === e) {
                                            var r = t.pre, n = t.next;
                                            n && (n.pre = r), r && (r.next = n), this.length -= 1
                                        }
                                        t = t.next
                                    }
                                }
                            }, {
                                key: "eraseElementByIterator", value: function (e) {
                                    var t = e.node;
                                    if (t === this.header) throw new RangeError("Invalid iterator");
                                    if (e = e.next(), this.head === t) this.popFront(); else if (this.tail === t) this.popBack(); else {
                                        var r = t.pre, n = t.next;
                                        n && (n.pre = r), r && (r.next = n), this.length -= 1
                                    }
                                    return e
                                }
                            }, {
                                key: "pushBack", value: function (e) {
                                    this.length += 1;
                                    var t = new a(e);
                                    this.tail ? (this.tail.next = t, t.pre = this.tail, this.tail = t) : (this.head = this.tail = t, this.header.next = this.head, this.head.pre = this.header), this.tail.next = this.header, this.header.pre = this.tail
                                }
                            }, {
                                key: "popBack", value: function () {
                                    this.tail && (this.length -= 1, this.head === this.tail ? (this.head = this.tail = void 0, this.header.next = void 0) : (this.tail = this.tail.pre, this.tail && (this.tail.next = void 0)), this.header.pre = this.tail, this.tail && (this.tail.next = this.header))
                                }
                            }, {
                                key: "setElementByPos", value: function (e, t) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1);
                                    for (var r = this.head; e--;) r = r.next;
                                    r.value = t
                                }
                            }, {
                                key: "insert", value: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                    if ((0, o.checkWithinAccessParams)(e, 0, this.length), !(r <= 0)) if (0 === e) for (; r--;) this.pushFront(t); else if (e === this.length) for (; r--;) this.pushBack(t); else {
                                        for (var n = this.head, i = 1; i < e; ++i) n = n.next;
                                        var s = n.next;
                                        for (this.length += r; r--;) n.next = new a(t), n.next.pre = n, n = n.next;
                                        n.next = s, s && (s.pre = n)
                                    }
                                }
                            }, {
                                key: "find", value: function (e) {
                                    if (!this.head) return this.end();
                                    for (var t = this.head; t !== this.header;) {
                                        if (t.value === e) return new h(t, this.header);
                                        t = t.next
                                    }
                                    return this.end()
                                }
                            }, {
                                key: "reverse", value: function () {
                                    if (!(this.length <= 1)) for (var e = this.head, t = this.tail, r = 0; r << 1 < this.length;) {
                                        var n = e.value;
                                        e.value = t.value, t.value = n, e = e.next, t = t.pre, r += 1
                                    }
                                }
                            }, {
                                key: "unique", value: function () {
                                    if (!(this.length <= 1)) for (var e = this.head; e !== this.header;) {
                                        for (var t = e; t.next && t.value === t.next.value;) t = t.next, this.length -= 1;
                                        e.next = t.next, e.next && (e.next.pre = e), e = e.next
                                    }
                                }
                            }, {
                                key: "sort", value: function (e) {
                                    if (!(this.length <= 1)) {
                                        var t = [];
                                        this.forEach((function (e) {
                                            return t.push(e)
                                        })), t.sort(e);
                                        var r = this.head;
                                        t.forEach((function (e) {
                                            r.value = e, r = r.next
                                        }))
                                    }
                                }
                            }, {
                                key: "pushFront", value: function (e) {
                                    this.length += 1;
                                    var t = new a(e);
                                    this.head ? (t.next = this.head, this.head.pre = t, this.head = t) : (this.head = this.tail = t, this.tail.next = this.header, this.header.pre = this.tail), this.header.next = this.head, this.head.pre = this.header
                                }
                            }, {
                                key: "popFront", value: function () {
                                    this.head && (this.length -= 1, this.head === this.tail ? (this.head = this.tail = void 0, this.header.pre = this.tail) : (this.head = this.head.next, this.head && (this.head.pre = this.header)), this.header.next = this.head)
                                }
                            }, {
                                key: "merge", value: function (e) {
                                    var t = this;
                                    if (this.head) {
                                        var r = this.head;
                                        e.forEach((function (e) {
                                            for (; r && r !== t.header && r.value <= e;) r = r.next;
                                            if (r === t.header) t.pushBack(e), r = t.tail; else if (r === t.head) t.pushFront(e), r = t.head; else {
                                                t.length += 1;
                                                var n = r.pre;
                                                n.next = new a(e), n.next.pre = n, n.next.next = r, r.pre = n.next
                                            }
                                        }))
                                    } else e.forEach((function (e) {
                                        return t.pushBack(e)
                                    }))
                                }
                            }, {
                                key: t, value: function () {
                                    return u().mark((function e() {
                                        var t;
                                        return u().wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (this.head) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    t = this.head;
                                                case 3:
                                                    if (t === this.header) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 6, t.value;
                                                case 6:
                                                    t = t.next, e.next = 3;
                                                    break;
                                                case 9:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })).bind(this)()
                                }
                            }]), n
                        }(i.default, Symbol.iterator);
                        r.default = f
                    }, {"../../utils/checkParams": 43, "../ContainerBase/index": 25, "./Base/index": 33}],
                    36: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.VectorIterator = void 0;
                        var i = n(e("./Base/index")), o = e("../../utils/checkParams"), s = e("../ContainerBase/index"),
                            a = e("./Base/RandomIterator"), h = function (e) {
                                c(r, a.RandomIterator);
                                var t = l(r);

                                function r() {
                                    return g(this, r), t.apply(this, arguments)
                                }

                                return v(r, [{
                                    key: "copy", value: function () {
                                        return new r(this.node, this.size, this.getElementByPos, this.setElementByPos, this.iteratorType)
                                    }
                                }]), r
                            }();
                        r.VectorIterator = h;
                        var p = function (e, t) {
                            c(n, e);
                            var r = l(n);

                            function n() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return g(this, n), e = r.call(this), Array.isArray(t) ? (e.vector = i ? y(t) : t, e.length = t.length) : (e.vector = [], t.forEach((function (t) {
                                    return e.pushBack(t)
                                }))), e.size = e.size.bind(f(e)), e.getElementByPos = e.getElementByPos.bind(f(e)), e.setElementByPos = e.setElementByPos.bind(f(e)), e
                            }

                            return v(n, [{
                                key: "clear", value: function () {
                                    this.length = 0, this.vector.length = 0
                                }
                            }, {
                                key: "begin", value: function () {
                                    return new h(0, this.size, this.getElementByPos, this.setElementByPos)
                                }
                            }, {
                                key: "end", value: function () {
                                    return new h(this.length, this.size, this.getElementByPos, this.setElementByPos)
                                }
                            }, {
                                key: "rBegin", value: function () {
                                    return new h(this.length - 1, this.size, this.getElementByPos, this.setElementByPos, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "rEnd", value: function () {
                                    return new h(-1, this.size, this.getElementByPos, this.setElementByPos, s.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "front", value: function () {
                                    return this.vector[0]
                                }
                            }, {
                                key: "back", value: function () {
                                    return this.vector[this.length - 1]
                                }
                            }, {
                                key: "forEach", value: function (e) {
                                    for (var t = 0; t < this.length; ++t) e(this.vector[t], t)
                                }
                            }, {
                                key: "getElementByPos", value: function (e) {
                                    return (0, o.checkWithinAccessParams)(e, 0, this.length - 1), this.vector[e]
                                }
                            }, {
                                key: "eraseElementByPos", value: function (e) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1), this.vector.splice(e, 1), this.length -= 1
                                }
                            }, {
                                key: "eraseElementByValue", value: function (e) {
                                    for (var t = 0, r = 0; r < this.length; ++r) this.vector[r] !== e && (this.vector[t++] = this.vector[r]);
                                    this.length = this.vector.length = t
                                }
                            }, {
                                key: "eraseElementByIterator", value: function (e) {
                                    var t = e.node;
                                    return e = e.next(), this.eraseElementByPos(t), e
                                }
                            }, {
                                key: "pushBack", value: function (e) {
                                    this.vector.push(e), this.length += 1
                                }
                            }, {
                                key: "popBack", value: function () {
                                    this.length && (this.vector.pop(), this.length -= 1)
                                }
                            }, {
                                key: "setElementByPos", value: function (e, t) {
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1), this.vector[e] = t
                                }
                            }, {
                                key: "insert", value: function (e, t) {
                                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                    (0, o.checkWithinAccessParams)(e, 0, this.length), (r = this.vector).splice.apply(r, [e, 0].concat(y(new Array(n).fill(t)))), this.length += n
                                }
                            }, {
                                key: "find", value: function (e) {
                                    for (var t = 0; t < this.length; ++t) if (this.vector[t] === e) return new h(t, this.size, this.getElementByPos, this.getElementByPos);
                                    return this.end()
                                }
                            }, {
                                key: "reverse", value: function () {
                                    this.vector.reverse()
                                }
                            }, {
                                key: "unique", value: function () {
                                    for (var e = 1, t = 1; t < this.length; ++t) this.vector[t] !== this.vector[t - 1] && (this.vector[e++] = this.vector[t]);
                                    this.length = this.vector.length = e
                                }
                            }, {
                                key: "sort", value: function (e) {
                                    this.vector.sort(e)
                                }
                            }, {
                                key: t, value: function () {
                                    return u().mark((function e() {
                                        return u().wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.delegateYield(this.vector, "t0", 1);
                                                case 1:
                                                    return e.abrupt("return", e.t0);
                                                case 2:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })).bind(this)()
                                }
                            }]), n
                        }(i.default, Symbol.iterator);
                        r.default = p
                    }, {
                        "../../utils/checkParams": 43,
                        "../ContainerBase/index": 25,
                        "./Base/RandomIterator": 32,
                        "./Base/index": 33
                    }],
                    37: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = e("../../ContainerBase/index"), i = function (e) {
                            c(r, n.ContainerIterator);
                            var t = l(r);

                            function r(e, i, o) {
                                var s;
                                return g(this, r), (s = t.call(this, o)).node = e, s.header = i, s.iteratorType === n.ContainerIterator.NORMAL ? (s.pre = function () {
                                    if (this.node === this.header.left) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.pre(), this
                                }, s.next = function () {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.next(), this
                                }) : (s.pre = function () {
                                    if (this.node === this.header.right) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.next(), this
                                }, s.next = function () {
                                    if (this.node === this.header) throw new RangeError("LinkList iterator access denied!");
                                    return this.node = this.node.pre(), this
                                }), s
                            }

                            return v(r, [{
                                key: "equals", value: function (e) {
                                    return this.node === e.node
                                }
                            }]), r
                        }();
                        r.default = i
                    }, {"../../ContainerBase/index": 25}],
                    38: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var n = function () {
                            function e(t, r) {
                                g(this, e), this.color = !0, this.key = void 0, this.value = void 0, this.left = void 0, this.right = void 0, this.parent = void 0, this.key = t, this.value = r
                            }

                            return v(e, [{
                                key: "pre", value: function () {
                                    var t = this;
                                    if (t.color === e.RED && t.parent.parent === t) t = t.right; else if (t.left) for (t = t.left; t.right;) t = t.right; else {
                                        for (var r = t.parent; r.left === t;) r = (t = r).parent;
                                        t = r
                                    }
                                    return t
                                }
                            }, {
                                key: "next", value: function () {
                                    var e = this;
                                    if (e.right) for (e = e.right; e.left;) e = e.left; else {
                                        for (var t = e.parent; t.right === e;) t = (e = t).parent;
                                        e.right !== t && (e = t)
                                    }
                                    return e
                                }
                            }, {
                                key: "rotateLeft", value: function () {
                                    var e = this.parent, t = this.right, r = t.left;
                                    return e.parent === this ? e.parent = t : e.left === this ? e.left = t : e.right = t, t.parent = e, t.left = this, this.parent = t, this.right = r, r && (r.parent = this), t
                                }
                            }, {
                                key: "rotateRight", value: function () {
                                    var e = this.parent, t = this.left, r = t.right;
                                    return e.parent === this ? e.parent = t : e.left === this ? e.left = t : e.right = t, t.parent = e, t.right = this, this.parent = t, this.left = r, r && (r.parent = this), t
                                }
                            }, {
                                key: "remove", value: function () {
                                    var e = this.parent;
                                    this === e.left ? e.left = void 0 : e.right = void 0
                                }
                            }]), e
                        }();
                        n.RED = !0, n.BLACK = !1, r.default = n
                    }, {}],
                    39: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0});
                        var i = n(e("./TreeNode")), o = e("../../ContainerBase/index"),
                            s = e("../../../utils/checkParams"), a = function (e) {
                                c(r, o.Container);
                                var t = l(r);

                                function r() {
                                    var e,
                                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function (e, t) {
                                            return e < t ? -1 : e > t ? 1 : 0
                                        };
                                    return g(this, r), (e = t.call(this)).root = void 0, e.header = new i.default, e.inOrderTraversal = function (t, r) {
                                        return void 0 !== t && (!!e.inOrderTraversal(t.left, r) || !!r(t) || e.inOrderTraversal(t.right, r))
                                    }, e.cmp = n, e
                                }

                                return v(r, [{
                                    key: "_lowerBound", value: function (e, t) {
                                        for (var r; e;) {
                                            var n = this.cmp(e.key, t);
                                            if (n < 0) e = e.right; else {
                                                if (!(n > 0)) return e;
                                                r = e, e = e.left
                                            }
                                        }
                                        return void 0 === r ? this.header : r
                                    }
                                }, {
                                    key: "_upperBound", value: function (e, t) {
                                        for (var r; e;) {
                                            var n = this.cmp(e.key, t);
                                            n <= 0 ? e = e.right : n > 0 && (r = e, e = e.left)
                                        }
                                        return void 0 === r ? this.header : r
                                    }
                                }, {
                                    key: "_reverseLowerBound", value: function (e, t) {
                                        for (var r; e;) {
                                            var n = this.cmp(e.key, t);
                                            if (n < 0) r = e, e = e.right; else {
                                                if (!(n > 0)) return e;
                                                e = e.left
                                            }
                                        }
                                        return void 0 === r ? this.header : r
                                    }
                                }, {
                                    key: "_reverseUpperBound", value: function (e, t) {
                                        for (var r; e;) {
                                            var n = this.cmp(e.key, t);
                                            n < 0 ? (r = e, e = e.right) : n >= 0 && (e = e.left)
                                        }
                                        return void 0 === r ? this.header : r
                                    }
                                }, {
                                    key: "eraseNodeSelfBalance", value: function (e) {
                                        for (; ;) {
                                            var t = e.parent;
                                            if (t === this.header) return;
                                            if (e.color === i.default.RED) return void (e.color = i.default.BLACK);
                                            if (e === t.left) {
                                                var r = t.right;
                                                if (r.color === i.default.RED) r.color = i.default.BLACK, t.color = i.default.RED, t === this.root ? this.root = t.rotateLeft() : t.rotateLeft(); else if (r.color === i.default.BLACK) {
                                                    if (r.right && r.right.color === i.default.RED) return r.color = t.color, t.color = i.default.BLACK, r.right.color = i.default.BLACK, void (t === this.root ? this.root = t.rotateLeft() : t.rotateLeft());
                                                    r.left && r.left.color === i.default.RED ? (r.color = i.default.RED, r.left.color = i.default.BLACK, r.rotateRight()) : (r.color = i.default.RED, e = t)
                                                }
                                            } else {
                                                var n = t.left;
                                                if (n.color === i.default.RED) n.color = i.default.BLACK, t.color = i.default.RED, t === this.root ? this.root = t.rotateRight() : t.rotateRight(); else {
                                                    if (n.left && n.left.color === i.default.RED) return n.color = t.color, t.color = i.default.BLACK, n.left.color = i.default.BLACK, void (t === this.root ? this.root = t.rotateRight() : t.rotateRight());
                                                    n.right && n.right.color === i.default.RED ? (n.color = i.default.RED, n.right.color = i.default.BLACK, n.rotateLeft()) : (n.color = i.default.RED, e = t)
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    key: "eraseNode", value: function (e) {
                                        if (1 !== this.length) {
                                            for (var t = e; t.left || t.right;) {
                                                if (t.right) for (t = t.right; t.left;) t = t.left; else t.left && (t = t.left);
                                                var r = [t.key, e.key];
                                                e.key = r[0], t.key = r[1];
                                                var n = [t.value, e.value];
                                                e.value = n[0], t.value = n[1], e = t
                                            }
                                            this.header.left === t ? this.header.left = t.parent : this.header.right === t && (this.header.right = t.parent), this.eraseNodeSelfBalance(t), t.remove(), this.length -= 1, this.root.color = i.default.BLACK
                                        } else this.clear()
                                    }
                                }, {
                                    key: "insertNodeSelfBalance", value: function (e) {
                                        for (; ;) {
                                            var t = e.parent;
                                            if (t.color === i.default.BLACK) return;
                                            var r = t.parent;
                                            if (t === r.left) {
                                                var n = r.right;
                                                if (n && n.color === i.default.RED) {
                                                    if (n.color = t.color = i.default.BLACK, r === this.root) return;
                                                    r.color = i.default.RED, e = r;
                                                    continue
                                                }
                                                if (e === t.right) {
                                                    if (e.color = i.default.BLACK, e.left && (e.left.parent = t), e.right && (e.right.parent = r), t.right = e.left, r.left = e.right, e.left = t, e.right = r, r === this.root) this.root = e, this.header.parent = e; else {
                                                        var o = r.parent;
                                                        o.left === r ? o.left = e : o.right = e
                                                    }
                                                    e.parent = r.parent, t.parent = e, r.parent = e
                                                } else t.color = i.default.BLACK, r === this.root ? this.root = r.rotateRight() : r.rotateRight();
                                                r.color = i.default.RED
                                            } else {
                                                var s = r.left;
                                                if (s && s.color === i.default.RED) {
                                                    if (s.color = t.color = i.default.BLACK, r === this.root) return;
                                                    r.color = i.default.RED, e = r;
                                                    continue
                                                }
                                                if (e === t.left) {
                                                    if (e.color = i.default.BLACK, e.left && (e.left.parent = r), e.right && (e.right.parent = t), r.right = e.left, t.left = e.right, e.left = r, e.right = t, r === this.root) this.root = e, this.header.parent = e; else {
                                                        var a = r.parent;
                                                        a.left === r ? a.left = e : a.right = e
                                                    }
                                                    e.parent = r.parent, t.parent = e, r.parent = e
                                                } else t.color = i.default.BLACK, r === this.root ? this.root = r.rotateLeft() : r.rotateLeft();
                                                r.color = i.default.RED
                                            }
                                            return
                                        }
                                    }
                                }, {
                                    key: "findElementNode", value: function (e, t) {
                                        for (; e;) {
                                            var r = this.cmp(e.key, t);
                                            if (r < 0) e = e.right; else {
                                                if (!(r > 0)) return e;
                                                e = e.left
                                            }
                                        }
                                        return e
                                    }
                                }, {
                                    key: "set", value: function (e, t, r) {
                                        if (void 0 === this.root) return this.length += 1, this.root = new i.default(e, t), this.root.color = i.default.BLACK, this.root.parent = this.header, this.header.parent = this.root, this.header.left = this.root, void (this.header.right = this.root);
                                        var n, o = this.header.left, s = this.cmp(o.key, e);
                                        if (0 !== s) {
                                            if (s > 0) o.left = new i.default(e, t), o.left.parent = o, n = o.left, this.header.left = n; else {
                                                var a = this.header.right, u = this.cmp(a.key, e);
                                                if (0 === u) return void (a.value = t);
                                                if (u < 0) a.right = new i.default(e, t), a.right.parent = a, n = a.right, this.header.right = n; else {
                                                    if (void 0 !== r) {
                                                        var c = r.node;
                                                        if (c !== this.header) {
                                                            var l = this.cmp(c.key, e);
                                                            if (0 === l) return void (c.value = t);
                                                            if (l > 0) {
                                                                var h = c.pre(), f = this.cmp(h.key, e);
                                                                if (0 === f) return void (h.value = t);
                                                                f < 0 && (n = new i.default(e, t), void 0 === h.right ? (h.right = n, n.parent = h) : (c.left = n, n.parent = c))
                                                            }
                                                        }
                                                    }
                                                    if (void 0 === n) for (n = this.root; ;) {
                                                        var p = this.cmp(n.key, e);
                                                        if (p > 0) {
                                                            if (void 0 === n.left) {
                                                                n.left = new i.default(e, t), n.left.parent = n, n = n.left;
                                                                break
                                                            }
                                                            n = n.left
                                                        } else {
                                                            if (!(p < 0)) return void (n.value = t);
                                                            if (void 0 === n.right) {
                                                                n.right = new i.default(e, t), n.right.parent = n, n = n.right;
                                                                break
                                                            }
                                                            n = n.right
                                                        }
                                                    }
                                                }
                                            }
                                            this.length += 1, this.insertNodeSelfBalance(n)
                                        } else o.value = t
                                    }
                                }, {
                                    key: "clear", value: function () {
                                        this.length = 0, this.root = void 0, this.header.parent = void 0, this.header.left = this.header.right = void 0
                                    }
                                }, {
                                    key: "updateKeyByIterator", value: function (e, t) {
                                        var r = e.node;
                                        if (r === this.header) throw new TypeError("Invalid iterator!");
                                        if (1 === this.length) return r.key = t, !0;
                                        if (r === this.header.left) return this.cmp(r.next().key, t) > 0 && (r.key = t, !0);
                                        if (r === this.header.right) return this.cmp(r.pre().key, t) < 0 && (r.key = t, !0);
                                        var n = r.pre().key;
                                        if (this.cmp(n, t) >= 0) return !1;
                                        var i = r.next().key;
                                        return !(this.cmp(i, t) <= 0 || (r.key = t, 0))
                                    }
                                }, {
                                    key: "eraseElementByPos", value: function (e) {
                                        var t = this;
                                        (0, s.checkWithinAccessParams)(e, 0, this.length - 1);
                                        var r = 0;
                                        this.inOrderTraversal(this.root, (function (n) {
                                            return e === r ? (t.eraseNode(n), !0) : (r += 1, !1)
                                        }))
                                    }
                                }, {
                                    key: "eraseElementByKey", value: function (e) {
                                        if (this.length) {
                                            var t = this.findElementNode(this.root, e);
                                            void 0 !== t && this.eraseNode(t)
                                        }
                                    }
                                }, {
                                    key: "eraseElementByIterator", value: function (e) {
                                        var t = e.node;
                                        if (t === this.header) throw new RangeError("Invalid iterator");
                                        return void 0 === t.right && (e = e.next()), this.eraseNode(t), e
                                    }
                                }, {
                                    key: "getHeight", value: function () {
                                        return this.length ? function e(t) {
                                            return t ? Math.max(e(t.left), e(t.right)) + 1 : 0
                                        }(this.root) : 0
                                    }
                                }]), r
                            }();
                        r.default = a
                    }, {"../../../utils/checkParams": 43, "../../ContainerBase/index": 25, "./TreeNode": 38}],
                    40: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.OrderedMapIterator = void 0;
                        var i = e("../ContainerBase/index"), o = e("../../utils/checkParams"), s = n(e("./Base/index")),
                            h = n(e("./Base/TreeIterator")), p = function (e) {
                                c(r, h.default);
                                var t = l(r);

                                function r() {
                                    return g(this, r), t.apply(this, arguments)
                                }

                                return v(r, [{
                                    key: "pointer", get: function () {
                                        var e = this;
                                        if (this.node === this.header) throw new RangeError("OrderedMap iterator access denied");
                                        return new Proxy([], {
                                            get: function (t, r) {
                                                return "0" === r ? e.node.key : "1" === r ? e.node.value : void 0
                                            }, set: function (t, r, n) {
                                                if ("1" !== r) throw new TypeError("props must be 1");
                                                return e.node.value = n, !0
                                            }
                                        })
                                    }
                                }, {
                                    key: "copy", value: function () {
                                        return new r(this.node, this.header, this.iteratorType)
                                    }
                                }]), r
                            }();
                        r.OrderedMapIterator = p;
                        var d = function (e, t) {
                            c(n, e);
                            var r = l(n);

                            function n() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    i = arguments.length > 1 ? arguments[1] : void 0;
                                return g(this, n), (e = r.call(this, i)).iterationFunc = u().mark((function e(t) {
                                    return u().wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (void 0 !== t) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return e.delegateYield(this.iterationFunc(t.left), "t0", 3);
                                            case 3:
                                                return e.next = 5, [t.key, t.value];
                                            case 5:
                                                return e.delegateYield(this.iterationFunc(t.right), "t1", 6);
                                            case 6:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })), e.iterationFunc = e.iterationFunc.bind(f(e)), t.forEach((function (t) {
                                    var r = a(t, 2), n = r[0], i = r[1];
                                    return e.setElement(n, i)
                                })), e
                            }

                            return v(n, [{
                                key: "begin", value: function () {
                                    return new p(this.header.left || this.header, this.header)
                                }
                            }, {
                                key: "end", value: function () {
                                    return new p(this.header, this.header)
                                }
                            }, {
                                key: "rBegin", value: function () {
                                    return new p(this.header.right || this.header, this.header, i.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "rEnd", value: function () {
                                    return new p(this.header, this.header, i.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "front", value: function () {
                                    if (this.length) {
                                        var e = this.header.left;
                                        return [e.key, e.value]
                                    }
                                }
                            }, {
                                key: "back", value: function () {
                                    if (this.length) {
                                        var e = this.header.right;
                                        return [e.key, e.value]
                                    }
                                }
                            }, {
                                key: "forEach", value: function (e) {
                                    var t, r = 0, n = m(this);
                                    try {
                                        for (n.s(); !(t = n.n()).done;) e(t.value, r++)
                                    } catch (e) {
                                        n.e(e)
                                    } finally {
                                        n.f()
                                    }
                                }
                            }, {
                                key: "lowerBound", value: function (e) {
                                    var t = this._lowerBound(this.root, e);
                                    return new p(t, this.header)
                                }
                            }, {
                                key: "upperBound", value: function (e) {
                                    var t = this._upperBound(this.root, e);
                                    return new p(t, this.header)
                                }
                            }, {
                                key: "reverseLowerBound", value: function (e) {
                                    var t = this._reverseLowerBound(this.root, e);
                                    return new p(t, this.header)
                                }
                            }, {
                                key: "reverseUpperBound", value: function (e) {
                                    var t = this._reverseUpperBound(this.root, e);
                                    return new p(t, this.header)
                                }
                            }, {
                                key: "setElement", value: function (e, t, r) {
                                    this.set(e, t, r)
                                }
                            }, {
                                key: "find", value: function (e) {
                                    var t = this.findElementNode(this.root, e);
                                    return void 0 !== t ? new p(t, this.header) : this.end()
                                }
                            }, {
                                key: "getElementByKey", value: function (e) {
                                    var t = this.findElementNode(this.root, e);
                                    return t ? t.value : void 0
                                }
                            }, {
                                key: "getElementByPos", value: function (e) {
                                    var t;
                                    (0, o.checkWithinAccessParams)(e, 0, this.length - 1);
                                    var r, n = 0, i = m(this);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var s = r.value;
                                            if (n === e) {
                                                t = s;
                                                break
                                            }
                                            n += 1
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                    return t
                                }
                            }, {
                                key: "union", value: function (e) {
                                    var t = this;
                                    e.forEach((function (e) {
                                        var r = a(e, 2), n = r[0], i = r[1];
                                        return t.setElement(n, i)
                                    }))
                                }
                            }, {
                                key: t, value: function () {
                                    return this.iterationFunc(this.root)
                                }
                            }]), n
                        }(s.default, Symbol.iterator);
                        r.default = d
                    }, {
                        "../../utils/checkParams": 43,
                        "../ContainerBase/index": 25,
                        "./Base/TreeIterator": 37,
                        "./Base/index": 39
                    }],
                    41: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.OrderedSetIterator = void 0;
                        var i = n(e("./Base/index")), o = e("../ContainerBase/index"), s = e("../../utils/checkParams"),
                            a = n(e("./Base/TreeIterator")), h = function (e) {
                                c(r, a.default);
                                var t = l(r);

                                function r() {
                                    return g(this, r), t.apply(this, arguments)
                                }

                                return v(r, [{
                                    key: "pointer", get: function () {
                                        if (this.node === this.header) throw new RangeError("OrderedSet iterator access denied!");
                                        return this.node.key
                                    }
                                }, {
                                    key: "copy", value: function () {
                                        return new r(this.node, this.header, this.iteratorType)
                                    }
                                }]), r
                            }();
                        r.OrderedSetIterator = h;
                        var p = function (e, t) {
                            c(n, e);
                            var r = l(n);

                            function n() {
                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    i = arguments.length > 1 ? arguments[1] : void 0;
                                return g(this, n), (e = r.call(this, i)).iterationFunc = u().mark((function e(t) {
                                    return u().wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                if (void 0 !== t) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return e.delegateYield(this.iterationFunc(t.left), "t0", 3);
                                            case 3:
                                                return e.next = 5, t.key;
                                            case 5:
                                                return e.delegateYield(this.iterationFunc(t.right), "t1", 6);
                                            case 6:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })), t.forEach((function (t) {
                                    return e.insert(t)
                                })), e.iterationFunc = e.iterationFunc.bind(f(e)), e
                            }

                            return v(n, [{
                                key: "begin", value: function () {
                                    return new h(this.header.left || this.header, this.header)
                                }
                            }, {
                                key: "end", value: function () {
                                    return new h(this.header, this.header)
                                }
                            }, {
                                key: "rBegin", value: function () {
                                    return new h(this.header.right || this.header, this.header, o.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "rEnd", value: function () {
                                    return new h(this.header, this.header, o.ContainerIterator.REVERSE)
                                }
                            }, {
                                key: "front", value: function () {
                                    return this.header.left ? this.header.left.key : void 0
                                }
                            }, {
                                key: "back", value: function () {
                                    return this.header.right ? this.header.right.key : void 0
                                }
                            }, {
                                key: "forEach", value: function (e) {
                                    var t, r = 0, n = m(this);
                                    try {
                                        for (n.s(); !(t = n.n()).done;) e(t.value, r++)
                                    } catch (e) {
                                        n.e(e)
                                    } finally {
                                        n.f()
                                    }
                                }
                            }, {
                                key: "getElementByPos", value: function (e) {
                                    var t;
                                    (0, s.checkWithinAccessParams)(e, 0, this.length - 1);
                                    var r, n = 0, i = m(this);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            n === e && (t = o), n += 1
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                    return t
                                }
                            }, {
                                key: "insert", value: function (e, t) {
                                    this.set(e, void 0, t)
                                }
                            }, {
                                key: "find", value: function (e) {
                                    var t = this.findElementNode(this.root, e);
                                    return void 0 !== t ? new h(t, this.header) : this.end()
                                }
                            }, {
                                key: "lowerBound", value: function (e) {
                                    var t = this._lowerBound(this.root, e);
                                    return new h(t, this.header)
                                }
                            }, {
                                key: "upperBound", value: function (e) {
                                    var t = this._upperBound(this.root, e);
                                    return new h(t, this.header)
                                }
                            }, {
                                key: "reverseLowerBound", value: function (e) {
                                    var t = this._reverseLowerBound(this.root, e);
                                    return new h(t, this.header)
                                }
                            }, {
                                key: "reverseUpperBound", value: function (e) {
                                    var t = this._reverseUpperBound(this.root, e);
                                    return new h(t, this.header)
                                }
                            }, {
                                key: "union", value: function (e) {
                                    var t = this;
                                    e.forEach((function (e) {
                                        return t.insert(e)
                                    }))
                                }
                            }, {
                                key: t, value: function () {
                                    return this.iterationFunc(this.root)
                                }
                            }]), n
                        }(i.default, Symbol.iterator);
                        r.default = p
                    }, {
                        "../../utils/checkParams": 43,
                        "../ContainerBase/index": 25,
                        "./Base/TreeIterator": 37,
                        "./Base/index": 39
                    }],
                    42: [function (e, t, r) {
                        var n = this && this.__importDefault || function (e) {
                            return e && e.__esModule ? e : {default: e}
                        };
                        Object.defineProperty(r, "__esModule", {value: !0}), r.HashContainer = r.TreeContainer = r.SequentialContainer = r.ContainerIterator = r.Container = r.HashMap = r.HashSet = r.OrderedMapIterator = r.OrderedMap = r.OrderedSetIterator = r.OrderedSet = r.DequeIterator = r.Deque = r.LinkListIterator = r.LinkList = r.VectorIterator = r.Vector = r.PriorityQueue = r.Queue = r.Stack = void 0;
                        var i = e("./container/OtherContainer/Stack");
                        Object.defineProperty(r, "Stack", {
                            enumerable: !0, get: function () {
                                return n(i).default
                            }
                        });
                        var o = e("./container/OtherContainer/Queue");
                        Object.defineProperty(r, "Queue", {
                            enumerable: !0, get: function () {
                                return n(o).default
                            }
                        });
                        var s = e("./container/OtherContainer/PriorityQueue");
                        Object.defineProperty(r, "PriorityQueue", {
                            enumerable: !0, get: function () {
                                return n(s).default
                            }
                        });
                        var a = e("./container/SequentialContainer/Vector");
                        Object.defineProperty(r, "Vector", {
                            enumerable: !0, get: function () {
                                return n(a).default
                            }
                        }), Object.defineProperty(r, "VectorIterator", {
                            enumerable: !0, get: function () {
                                return a.VectorIterator
                            }
                        });
                        var u = e("./container/SequentialContainer/LinkList");
                        Object.defineProperty(r, "LinkList", {
                            enumerable: !0, get: function () {
                                return n(u).default
                            }
                        }), Object.defineProperty(r, "LinkListIterator", {
                            enumerable: !0, get: function () {
                                return u.LinkListIterator
                            }
                        });
                        var c = e("./container/SequentialContainer/Deque");
                        Object.defineProperty(r, "Deque", {
                            enumerable: !0, get: function () {
                                return n(c).default
                            }
                        }), Object.defineProperty(r, "DequeIterator", {
                            enumerable: !0, get: function () {
                                return c.DequeIterator
                            }
                        });
                        var l = e("./container/TreeContainer/OrderedSet");
                        Object.defineProperty(r, "OrderedSet", {
                            enumerable: !0, get: function () {
                                return n(l).default
                            }
                        }), Object.defineProperty(r, "OrderedSetIterator", {
                            enumerable: !0, get: function () {
                                return l.OrderedSetIterator
                            }
                        });
                        var h = e("./container/TreeContainer/OrderedMap");
                        Object.defineProperty(r, "OrderedMap", {
                            enumerable: !0, get: function () {
                                return n(h).default
                            }
                        }), Object.defineProperty(r, "OrderedMapIterator", {
                            enumerable: !0, get: function () {
                                return h.OrderedMapIterator
                            }
                        });
                        var f = e("./container/HashContainer/HashSet");
                        Object.defineProperty(r, "HashSet", {
                            enumerable: !0, get: function () {
                                return n(f).default
                            }
                        });
                        var p = e("./container/HashContainer/HashMap");
                        Object.defineProperty(r, "HashMap", {
                            enumerable: !0, get: function () {
                                return n(p).default
                            }
                        });
                        var d = e("./container/ContainerBase/index");
                        Object.defineProperty(r, "Container", {
                            enumerable: !0, get: function () {
                                return d.Container
                            }
                        }), Object.defineProperty(r, "ContainerIterator", {
                            enumerable: !0, get: function () {
                                return d.ContainerIterator
                            }
                        });
                        var v = e("./container/SequentialContainer/Base/index");
                        Object.defineProperty(r, "SequentialContainer", {
                            enumerable: !0, get: function () {
                                return n(v).default
                            }
                        });
                        var g = e("./container/TreeContainer/Base/index");
                        Object.defineProperty(r, "TreeContainer", {
                            enumerable: !0, get: function () {
                                return n(g).default
                            }
                        });
                        var y = e("./container/HashContainer/Base/index");
                        Object.defineProperty(r, "HashContainer", {
                            enumerable: !0, get: function () {
                                return n(y).default
                            }
                        })
                    }, {
                        "./container/ContainerBase/index": 25,
                        "./container/HashContainer/Base/index": 26,
                        "./container/HashContainer/HashMap": 27,
                        "./container/HashContainer/HashSet": 28,
                        "./container/OtherContainer/PriorityQueue": 29,
                        "./container/OtherContainer/Queue": 30,
                        "./container/OtherContainer/Stack": 31,
                        "./container/SequentialContainer/Base/index": 33,
                        "./container/SequentialContainer/Deque": 34,
                        "./container/SequentialContainer/LinkList": 35,
                        "./container/SequentialContainer/Vector": 36,
                        "./container/TreeContainer/Base/index": 39,
                        "./container/TreeContainer/OrderedMap": 40,
                        "./container/TreeContainer/OrderedSet": 41
                    }],
                    43: [function (e, t, r) {
                        Object.defineProperty(r, "__esModule", {value: !0}), r.checkWithinAccessParams = void 0, r.checkWithinAccessParams = function (e, t, r) {
                            if (e < t || e > r) throw new RangeError
                        }
                    }, {}],
                    44: [function (e, t, r) {
                        var n = e("yallist"), i = Symbol("max"), o = Symbol("length"), s = Symbol("lengthCalculator"),
                            a = Symbol("allowStale"), u = Symbol("maxAge"), c = Symbol("dispose"),
                            l = Symbol("noDisposeOnSet"), h = Symbol("lruList"), f = Symbol("cache"),
                            p = Symbol("updateAgeOnGet"), d = function () {
                                return 1
                            }, y = function () {
                                function e(t) {
                                    if (g(this, e), "number" == typeof t && (t = {max: t}), t || (t = {}), t.max && ("number" != typeof t.max || t.max < 0)) throw new TypeError("max must be a non-negative number");
                                    this[i] = t.max || 1 / 0;
                                    var r = t.length || d;
                                    if (this[s] = "function" != typeof r ? d : r, this[a] = t.stale || !1, t.maxAge && "number" != typeof t.maxAge) throw new TypeError("maxAge must be a number");
                                    this[u] = t.maxAge || 0, this[c] = t.dispose, this[l] = t.noDisposeOnSet || !1, this[p] = t.updateAgeOnGet || !1, this.reset()
                                }

                                return v(e, [{
                                    key: "max", get: function () {
                                        return this[i]
                                    }, set: function (e) {
                                        if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
                                        this[i] = e || 1 / 0, w(this)
                                    }
                                }, {
                                    key: "allowStale", get: function () {
                                        return this[a]
                                    }, set: function (e) {
                                        this[a] = !!e
                                    }
                                }, {
                                    key: "maxAge", get: function () {
                                        return this[u]
                                    }, set: function (e) {
                                        if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
                                        this[u] = e, w(this)
                                    }
                                }, {
                                    key: "lengthCalculator", get: function () {
                                        return this[s]
                                    }, set: function (e) {
                                        var t = this;
                                        "function" != typeof e && (e = d), e !== this[s] && (this[s] = e, this[o] = 0, this[h].forEach((function (e) {
                                            e.length = t[s](e.value, e.key), t[o] += e.length
                                        }))), w(this)
                                    }
                                }, {
                                    key: "length", get: function () {
                                        return this[o]
                                    }
                                }, {
                                    key: "itemCount", get: function () {
                                        return this[h].length
                                    }
                                }, {
                                    key: "rforEach", value: function (e, t) {
                                        t = t || this;
                                        for (var r = this[h].tail; null !== r;) {
                                            var n = r.prev;
                                            E(this, e, r, t), r = n
                                        }
                                    }
                                }, {
                                    key: "forEach", value: function (e, t) {
                                        t = t || this;
                                        for (var r = this[h].head; null !== r;) {
                                            var n = r.next;
                                            E(this, e, r, t), r = n
                                        }
                                    }
                                }, {
                                    key: "keys", value: function () {
                                        return this[h].toArray().map((function (e) {
                                            return e.key
                                        }))
                                    }
                                }, {
                                    key: "values", value: function () {
                                        return this[h].toArray().map((function (e) {
                                            return e.value
                                        }))
                                    }
                                }, {
                                    key: "reset", value: function () {
                                        var e = this;
                                        this[c] && this[h] && this[h].length && this[h].forEach((function (t) {
                                            return e[c](t.key, t.value)
                                        })), this[f] = new Map, this[h] = new n, this[o] = 0
                                    }
                                }, {
                                    key: "dump", value: function () {
                                        var e = this;
                                        return this[h].map((function (t) {
                                            return !b(e, t) && {k: t.key, v: t.value, e: t.now + (t.maxAge || 0)}
                                        })).toArray().filter((function (e) {
                                            return e
                                        }))
                                    }
                                }, {
                                    key: "dumpLru", value: function () {
                                        return this[h]
                                    }
                                }, {
                                    key: "set", value: function (e, t, r) {
                                        if ((r = r || this[u]) && "number" != typeof r) throw new TypeError("maxAge must be a number");
                                        var n = r ? Date.now() : 0, a = this[s](t, e);
                                        if (this[f].has(e)) {
                                            if (a > this[i]) return _(this, this[f].get(e)), !1;
                                            var p = this[f].get(e).value;
                                            return this[c] && (this[l] || this[c](e, p.value)), p.now = n, p.maxAge = r, p.value = t, this[o] += a - p.length, p.length = a, this.get(e), w(this), !0
                                        }
                                        var d = new k(e, t, a, n, r);
                                        return d.length > this[i] ? (this[c] && this[c](e, t), !1) : (this[o] += d.length, this[h].unshift(d), this[f].set(e, this[h].head), w(this), !0)
                                    }
                                }, {
                                    key: "has", value: function (e) {
                                        if (!this[f].has(e)) return !1;
                                        var t = this[f].get(e).value;
                                        return !b(this, t)
                                    }
                                }, {
                                    key: "get", value: function (e) {
                                        return m(this, e, !0)
                                    }
                                }, {
                                    key: "peek", value: function (e) {
                                        return m(this, e, !1)
                                    }
                                }, {
                                    key: "pop", value: function () {
                                        var e = this[h].tail;
                                        return e ? (_(this, e), e.value) : null
                                    }
                                }, {
                                    key: "del", value: function (e) {
                                        _(this, this[f].get(e))
                                    }
                                }, {
                                    key: "load", value: function (e) {
                                        this.reset();
                                        for (var t = Date.now(), r = e.length - 1; r >= 0; r--) {
                                            var n = e[r], i = n.e || 0;
                                            if (0 === i) this.set(n.k, n.v); else {
                                                var o = i - t;
                                                o > 0 && this.set(n.k, n.v, o)
                                            }
                                        }
                                    }
                                }, {
                                    key: "prune", value: function () {
                                        var e = this;
                                        this[f].forEach((function (t, r) {
                                            return m(e, r, !1)
                                        }))
                                    }
                                }]), e
                            }(), m = function (e, t, r) {
                                var n = e[f].get(t);
                                if (n) {
                                    var i = n.value;
                                    if (b(e, i)) {
                                        if (_(e, n), !e[a]) return
                                    } else r && (e[p] && (n.value.now = Date.now()), e[h].unshiftNode(n));
                                    return i.value
                                }
                            }, b = function (e, t) {
                                if (!t || !t.maxAge && !e[u]) return !1;
                                var r = Date.now() - t.now;
                                return t.maxAge ? r > t.maxAge : e[u] && r > e[u]
                            }, w = function (e) {
                                if (e[o] > e[i]) for (var t = e[h].tail; e[o] > e[i] && null !== t;) {
                                    var r = t.prev;
                                    _(e, t), t = r
                                }
                            }, _ = function (e, t) {
                                if (t) {
                                    var r = t.value;
                                    e[c] && e[c](r.key, r.value), e[o] -= r.length, e[f].delete(r.key), e[h].removeNode(t)
                                }
                            }, k = v((function e(t, r, n, i, o) {
                                g(this, e), this.key = t, this.value = r, this.length = n, this.now = i, this.maxAge = o || 0
                            })), E = function (e, t, r, n) {
                                var i = r.value;
                                b(e, i) && (_(e, r), e[a] || (i = void 0)), i && t.call(n, i.value, i.key, e)
                            };
                        t.exports = y
                    }, {yallist: 85}],
                    45: [function (e, t, r) {
                        (function (e) {
                            (function () {
                                var r = t.exports;
                                for (var n in r.types = {
                                    0: "reserved",
                                    1: "connect",
                                    2: "connack",
                                    3: "publish",
                                    4: "puback",
                                    5: "pubrec",
                                    6: "pubrel",
                                    7: "pubcomp",
                                    8: "subscribe",
                                    9: "suback",
                                    10: "unsubscribe",
                                    11: "unsuback",
                                    12: "pingreq",
                                    13: "pingresp",
                                    14: "disconnect",
                                    15: "auth"
                                }, r.codes = {}, r.types) {
                                    var i = r.types[n];
                                    r.codes[i] = n
                                }
                                for (var o in r.CMD_SHIFT = 4, r.CMD_MASK = 240, r.DUP_MASK = 8, r.QOS_MASK = 3, r.QOS_SHIFT = 1, r.RETAIN_MASK = 1, r.VARBYTEINT_MASK = 127, r.VARBYTEINT_FIN_MASK = 128, r.VARBYTEINT_MAX = 268435455, r.SESSIONPRESENT_MASK = 1, r.SESSIONPRESENT_HEADER = e.from([r.SESSIONPRESENT_MASK]), r.CONNACK_HEADER = e.from([r.codes.connack << r.CMD_SHIFT]), r.USERNAME_MASK = 128, r.PASSWORD_MASK = 64, r.WILL_RETAIN_MASK = 32, r.WILL_QOS_MASK = 24, r.WILL_QOS_SHIFT = 3, r.WILL_FLAG_MASK = 4, r.CLEAN_SESSION_MASK = 2, r.CONNECT_HEADER = e.from([r.codes.connect << r.CMD_SHIFT]), r.properties = {
                                    sessionExpiryInterval: 17,
                                    willDelayInterval: 24,
                                    receiveMaximum: 33,
                                    maximumPacketSize: 39,
                                    topicAliasMaximum: 34,
                                    requestResponseInformation: 25,
                                    requestProblemInformation: 23,
                                    userProperties: 38,
                                    authenticationMethod: 21,
                                    authenticationData: 22,
                                    payloadFormatIndicator: 1,
                                    messageExpiryInterval: 2,
                                    contentType: 3,
                                    responseTopic: 8,
                                    correlationData: 9,
                                    maximumQoS: 36,
                                    retainAvailable: 37,
                                    assignedClientIdentifier: 18,
                                    reasonString: 31,
                                    wildcardSubscriptionAvailable: 40,
                                    subscriptionIdentifiersAvailable: 41,
                                    sharedSubscriptionAvailable: 42,
                                    serverKeepAlive: 19,
                                    responseInformation: 26,
                                    serverReference: 28,
                                    topicAlias: 35,
                                    subscriptionIdentifier: 11
                                }, r.propertiesCodes = {}, r.properties) {
                                    var s = r.properties[o];
                                    r.propertiesCodes[s] = o
                                }

                                function a(t) {
                                    return [0, 1, 2].map((function (n) {
                                        return [0, 1].map((function (i) {
                                            return [0, 1].map((function (o) {
                                                var s = e.alloc(1);
                                                return s.writeUInt8(r.codes[t] << r.CMD_SHIFT | (i ? r.DUP_MASK : 0) | n << r.QOS_SHIFT | o, 0, !0), s
                                            }))
                                        }))
                                    }))
                                }

                                r.propertiesTypes = {
                                    sessionExpiryInterval: "int32",
                                    willDelayInterval: "int32",
                                    receiveMaximum: "int16",
                                    maximumPacketSize: "int32",
                                    topicAliasMaximum: "int16",
                                    requestResponseInformation: "byte",
                                    requestProblemInformation: "byte",
                                    userProperties: "pair",
                                    authenticationMethod: "string",
                                    authenticationData: "binary",
                                    payloadFormatIndicator: "byte",
                                    messageExpiryInterval: "int32",
                                    contentType: "string",
                                    responseTopic: "string",
                                    correlationData: "binary",
                                    maximumQoS: "int8",
                                    retainAvailable: "byte",
                                    assignedClientIdentifier: "string",
                                    reasonString: "string",
                                    wildcardSubscriptionAvailable: "byte",
                                    subscriptionIdentifiersAvailable: "byte",
                                    sharedSubscriptionAvailable: "byte",
                                    serverKeepAlive: "int16",
                                    responseInformation: "string",
                                    serverReference: "string",
                                    topicAlias: "int16",
                                    subscriptionIdentifier: "var"
                                }, r.PUBLISH_HEADER = a("publish"), r.SUBSCRIBE_HEADER = a("subscribe"), r.SUBSCRIBE_OPTIONS_QOS_MASK = 3, r.SUBSCRIBE_OPTIONS_NL_MASK = 1, r.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, r.SUBSCRIBE_OPTIONS_RAP_MASK = 1, r.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, r.SUBSCRIBE_OPTIONS_RH_MASK = 3, r.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, r.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], r.SUBSCRIBE_OPTIONS_NL = 4, r.SUBSCRIBE_OPTIONS_RAP = 8, r.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], r.UNSUBSCRIBE_HEADER = a("unsubscribe"), r.ACKS = {
                                    unsuback: a("unsuback"),
                                    puback: a("puback"),
                                    pubcomp: a("pubcomp"),
                                    pubrel: a("pubrel"),
                                    pubrec: a("pubrec")
                                }, r.SUBACK_HEADER = e.from([r.codes.suback << r.CMD_SHIFT]), r.VERSION3 = e.from([3]), r.VERSION4 = e.from([4]), r.VERSION5 = e.from([5]), r.VERSION131 = e.from([131]), r.VERSION132 = e.from([132]), r.QOS = [0, 1, 2].map((function (t) {
                                    return e.from([t])
                                })), r.EMPTY = {
                                    pingreq: e.from([r.codes.pingreq << 4, 0]),
                                    pingresp: e.from([r.codes.pingresp << 4, 0]),
                                    disconnect: e.from([r.codes.disconnect << 4, 0])
                                }
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {buffer: 17}],
                    46: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n = e("./writeToStream"), i = e("events"), o = function (e) {
                                    c(n, i);
                                    var t = l(n);

                                    function n() {
                                        var e;
                                        return g(this, n), (e = t.call(this))._array = new Array(20), e._i = 0, e
                                    }

                                    return v(n, [{
                                        key: "write", value: function (e) {
                                            return this._array[this._i++] = e, !0
                                        }
                                    }, {
                                        key: "concat", value: function () {
                                            var e, t = 0, n = new Array(this._array.length), i = this._array, o = 0;
                                            for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? n[e] = i[e].length : n[e] = r.byteLength(i[e]), t += n[e];
                                            var s = r.allocUnsafe(t);
                                            for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? (i[e].copy(s, o), o += n[e]) : (s.write(i[e], o), o += n[e]);
                                            return s
                                        }
                                    }]), n
                                }();
                                t.exports = function (e, t) {
                                    var r = new o;
                                    return n(e, r, t), r.concat()
                                }
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {"./writeToStream": 51, buffer: 17, events: 22}],
                    47: [function (e, t, r) {
                        r.parser = e("./parser").parser, r.generate = e("./generate"), r.writeToStream = e("./writeToStream")
                    }, {"./generate": 46, "./parser": 50, "./writeToStream": 51}],
                    48: [function (e, t, r) {
                        (function (e) {
                            (function () {
                                var r = {}, n = e.isBuffer(e.from([1, 2]).subarray(0, 1));

                                function i(t) {
                                    var r = e.allocUnsafe(2);
                                    return r.writeUInt8(t >> 8, 0), r.writeUInt8(255 & t, 1), r
                                }

                                t.exports = {
                                    cache: r, generateCache: function () {
                                        for (var e = 0; e < 65536; e++) r[e] = i(e)
                                    }, generateNumber: i, genBufVariableByteInt: function (t) {
                                        var r = 0, i = 0, o = e.allocUnsafe(4);
                                        do {
                                            r = t % 128 | 0, (t = t / 128 | 0) > 0 && (r |= 128), o.writeUInt8(r, i++)
                                        } while (t > 0 && i < 4);
                                        return t > 0 && (i = 0), n ? o.subarray(0, i) : o.slice(0, i)
                                    }, generate4ByteBuffer: function (t) {
                                        var r = e.allocUnsafe(4);
                                        return r.writeUInt32BE(t, 0), r
                                    }
                                }
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {buffer: 17}],
                    49: [function (e, t, r) {
                        var n = v((function e() {
                            g(this, e), this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
                        }));
                        t.exports = n
                    }, {}],
                    50: [function (e, t, r) {
                        var n = e("bl"), i = e("events"), o = e("./packet"), s = e("./constants"),
                            a = e("debug")("mqtt-packet:parser"), u = function (e) {
                                c(r, i);
                                var t = l(r);

                                function r() {
                                    var e;
                                    return g(this, r), (e = t.call(this)).parser = e.constructor.parser, e
                                }

                                return v(r, [{
                                    key: "_resetState", value: function () {
                                        a("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new o, this.error = null, this._list = n(), this._stateCounter = 0
                                    }
                                }, {
                                    key: "parse", value: function (e) {
                                        for (this.error && this._resetState(), this._list.append(e), a("parse: current state: %s", this._states[this._stateCounter]); (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) this._stateCounter++, a("parse: state complete. _stateCounter is now: %d", this._stateCounter), a("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
                                        return a("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length
                                    }
                                }, {
                                    key: "_parseHeader", value: function () {
                                        var e = this._list.readUInt8(0);
                                        return this.packet.cmd = s.types[e >> s.CMD_SHIFT], this.packet.retain = 0 != (e & s.RETAIN_MASK), this.packet.qos = e >> s.QOS_SHIFT & s.QOS_MASK, this.packet.dup = 0 != (e & s.DUP_MASK), a("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0
                                    }
                                }, {
                                    key: "_parseLength", value: function () {
                                        var e = this._parseVarByteNum(!0);
                                        return e && (this.packet.length = e.value, this._list.consume(e.bytes)), a("_parseLength %d", e.value), !!e
                                    }
                                }, {
                                    key: "_parsePayload", value: function () {
                                        a("_parsePayload: payload %O", this._list);
                                        var e = !1;
                                        if (0 === this.packet.length || this._list.length >= this.packet.length) {
                                            switch (this._pos = 0, this.packet.cmd) {
                                                case"connect":
                                                    this._parseConnect();
                                                    break;
                                                case"connack":
                                                    this._parseConnack();
                                                    break;
                                                case"publish":
                                                    this._parsePublish();
                                                    break;
                                                case"puback":
                                                case"pubrec":
                                                case"pubrel":
                                                case"pubcomp":
                                                    this._parseConfirmation();
                                                    break;
                                                case"subscribe":
                                                    this._parseSubscribe();
                                                    break;
                                                case"suback":
                                                    this._parseSuback();
                                                    break;
                                                case"unsubscribe":
                                                    this._parseUnsubscribe();
                                                    break;
                                                case"unsuback":
                                                    this._parseUnsuback();
                                                    break;
                                                case"pingreq":
                                                case"pingresp":
                                                    break;
                                                case"disconnect":
                                                    this._parseDisconnect();
                                                    break;
                                                case"auth":
                                                    this._parseAuth();
                                                    break;
                                                default:
                                                    this._emitError(new Error("Not supported"))
                                            }
                                            e = !0
                                        }
                                        return a("_parsePayload complete result: %s", e), e
                                    }
                                }, {
                                    key: "_parseConnect", value: function () {
                                        var e, t, r, n;
                                        a("_parseConnect");
                                        var i = {}, o = this.packet, u = this._parseString();
                                        if (null === u) return this._emitError(new Error("Cannot parse protocolId"));
                                        if ("MQTT" !== u && "MQIsdp" !== u) return this._emitError(new Error("Invalid protocolId"));
                                        if (o.protocolId = u, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                                        if (o.protocolVersion = this._list.readUInt8(this._pos), o.protocolVersion >= 128 && (o.bridgeMode = !0, o.protocolVersion = o.protocolVersion - 128), 3 !== o.protocolVersion && 4 !== o.protocolVersion && 5 !== o.protocolVersion) return this._emitError(new Error("Invalid protocol version"));
                                        if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                                        if (i.username = this._list.readUInt8(this._pos) & s.USERNAME_MASK, i.password = this._list.readUInt8(this._pos) & s.PASSWORD_MASK, i.will = this._list.readUInt8(this._pos) & s.WILL_FLAG_MASK, i.will && (o.will = {}, o.will.retain = 0 != (this._list.readUInt8(this._pos) & s.WILL_RETAIN_MASK), o.will.qos = (this._list.readUInt8(this._pos) & s.WILL_QOS_MASK) >> s.WILL_QOS_SHIFT), o.clean = 0 != (this._list.readUInt8(this._pos) & s.CLEAN_SESSION_MASK), this._pos++, o.keepalive = this._parseNum(), -1 === o.keepalive) return this._emitError(new Error("Packet too short"));
                                        if (5 === o.protocolVersion) {
                                            var c = this._parseProperties();
                                            Object.getOwnPropertyNames(c).length && (o.properties = c)
                                        }
                                        var l = this._parseString();
                                        if (null === l) return this._emitError(new Error("Packet too short"));
                                        if (o.clientId = l, a("_parseConnect: packet.clientId: %s", o.clientId), i.will) {
                                            if (5 === o.protocolVersion) {
                                                var h = this._parseProperties();
                                                Object.getOwnPropertyNames(h).length && (o.will.properties = h)
                                            }
                                            if (null === (e = this._parseString())) return this._emitError(new Error("Cannot parse will topic"));
                                            if (o.will.topic = e, a("_parseConnect: packet.will.topic: %s", o.will.topic), null === (t = this._parseBuffer())) return this._emitError(new Error("Cannot parse will payload"));
                                            o.will.payload = t, a("_parseConnect: packet.will.paylaod: %s", o.will.payload)
                                        }
                                        if (i.username) {
                                            if (null === (n = this._parseString())) return this._emitError(new Error("Cannot parse username"));
                                            o.username = n, a("_parseConnect: packet.username: %s", o.username)
                                        }
                                        if (i.password) {
                                            if (null === (r = this._parseBuffer())) return this._emitError(new Error("Cannot parse password"));
                                            o.password = r
                                        }
                                        return this.settings = o, a("_parseConnect: complete"), o
                                    }
                                }, {
                                    key: "_parseConnack", value: function () {
                                        a("_parseConnack");
                                        var e = this.packet;
                                        if (this._list.length < 1) return null;
                                        if (e.sessionPresent = !!(this._list.readUInt8(this._pos++) & s.SESSIONPRESENT_MASK), 5 === this.settings.protocolVersion) this._list.length >= 2 ? e.reasonCode = this._list.readUInt8(this._pos++) : e.reasonCode = 0; else {
                                            if (this._list.length < 2) return null;
                                            e.returnCode = this._list.readUInt8(this._pos++)
                                        }
                                        if (-1 === e.returnCode || -1 === e.reasonCode) return this._emitError(new Error("Cannot parse return code"));
                                        if (5 === this.settings.protocolVersion) {
                                            var t = this._parseProperties();
                                            Object.getOwnPropertyNames(t).length && (e.properties = t)
                                        }
                                        a("_parseConnack: complete")
                                    }
                                }, {
                                    key: "_parsePublish", value: function () {
                                        a("_parsePublish");
                                        var e = this.packet;
                                        if (e.topic = this._parseString(), null === e.topic) return this._emitError(new Error("Cannot parse topic"));
                                        if (!(e.qos > 0) || this._parseMessageId()) {
                                            if (5 === this.settings.protocolVersion) {
                                                var t = this._parseProperties();
                                                Object.getOwnPropertyNames(t).length && (e.properties = t)
                                            }
                                            e.payload = this._list.slice(this._pos, e.length), a("_parsePublish: payload from buffer list: %o", e.payload)
                                        }
                                    }
                                }, {
                                    key: "_parseSubscribe", value: function () {
                                        a("_parseSubscribe");
                                        var e, t, r, n, i, o, u, c = this.packet;
                                        if (1 !== c.qos) return this._emitError(new Error("Wrong subscribe header"));
                                        if (c.subscriptions = [], this._parseMessageId()) {
                                            if (5 === this.settings.protocolVersion) {
                                                var l = this._parseProperties();
                                                Object.getOwnPropertyNames(l).length && (c.properties = l)
                                            }
                                            for (; this._pos < c.length;) {
                                                if (null === (e = this._parseString())) return this._emitError(new Error("Cannot parse topic"));
                                                if (this._pos >= c.length) return this._emitError(new Error("Malformed Subscribe Payload"));
                                                r = (t = this._parseByte()) & s.SUBSCRIBE_OPTIONS_QOS_MASK, o = 0 != (t >> s.SUBSCRIBE_OPTIONS_NL_SHIFT & s.SUBSCRIBE_OPTIONS_NL_MASK), i = 0 != (t >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT & s.SUBSCRIBE_OPTIONS_RAP_MASK), n = t >> s.SUBSCRIBE_OPTIONS_RH_SHIFT & s.SUBSCRIBE_OPTIONS_RH_MASK, u = {
                                                    topic: e,
                                                    qos: r
                                                }, 5 === this.settings.protocolVersion ? (u.nl = o, u.rap = i, u.rh = n) : this.settings.bridgeMode && (u.rh = 0, u.rap = !0, u.nl = !0), a("_parseSubscribe: push subscription `%s` to subscription", u), c.subscriptions.push(u)
                                            }
                                        }
                                    }
                                }, {
                                    key: "_parseSuback", value: function () {
                                        a("_parseSuback");
                                        var e = this.packet;
                                        if (this.packet.granted = [], this._parseMessageId()) {
                                            if (5 === this.settings.protocolVersion) {
                                                var t = this._parseProperties();
                                                Object.getOwnPropertyNames(t).length && (e.properties = t)
                                            }
                                            for (; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
                                        }
                                    }
                                }, {
                                    key: "_parseUnsubscribe", value: function () {
                                        a("_parseUnsubscribe");
                                        var e = this.packet;
                                        if (e.unsubscriptions = [], this._parseMessageId()) {
                                            if (5 === this.settings.protocolVersion) {
                                                var t = this._parseProperties();
                                                Object.getOwnPropertyNames(t).length && (e.properties = t)
                                            }
                                            for (; this._pos < e.length;) {
                                                var r = this._parseString();
                                                if (null === r) return this._emitError(new Error("Cannot parse topic"));
                                                a("_parseUnsubscribe: push topic `%s` to unsubscriptions", r), e.unsubscriptions.push(r)
                                            }
                                        }
                                    }
                                }, {
                                    key: "_parseUnsuback", value: function () {
                                        a("_parseUnsuback");
                                        var e = this.packet;
                                        if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
                                        if (5 === this.settings.protocolVersion) {
                                            var t = this._parseProperties();
                                            for (Object.getOwnPropertyNames(t).length && (e.properties = t), e.granted = []; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
                                        }
                                    }
                                }, {
                                    key: "_parseConfirmation", value: function () {
                                        a("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
                                        var e = this.packet;
                                        if (this._parseMessageId(), 5 === this.settings.protocolVersion && (e.length > 2 ? (e.reasonCode = this._parseByte(), a("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode)) : e.reasonCode = 0, e.length > 3)) {
                                            var t = this._parseProperties();
                                            Object.getOwnPropertyNames(t).length && (e.properties = t)
                                        }
                                        return !0
                                    }
                                }, {
                                    key: "_parseDisconnect", value: function () {
                                        var e = this.packet;
                                        if (a("_parseDisconnect"), 5 === this.settings.protocolVersion) {
                                            this._list.length > 0 ? e.reasonCode = this._parseByte() : e.reasonCode = 0;
                                            var t = this._parseProperties();
                                            Object.getOwnPropertyNames(t).length && (e.properties = t)
                                        }
                                        return a("_parseDisconnect result: true"), !0
                                    }
                                }, {
                                    key: "_parseAuth", value: function () {
                                        a("_parseAuth");
                                        var e = this.packet;
                                        if (5 !== this.settings.protocolVersion) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
                                        e.reasonCode = this._parseByte();
                                        var t = this._parseProperties();
                                        return Object.getOwnPropertyNames(t).length && (e.properties = t), a("_parseAuth: result: true"), !0
                                    }
                                }, {
                                    key: "_parseMessageId", value: function () {
                                        var e = this.packet;
                                        return e.messageId = this._parseNum(), null === e.messageId ? (this._emitError(new Error("Cannot parse messageId")), !1) : (a("_parseMessageId: packet.messageId %d", e.messageId), !0)
                                    }
                                }, {
                                    key: "_parseString", value: function (e) {
                                        var t = this._parseNum(), r = t + this._pos;
                                        if (-1 === t || r > this._list.length || r > this.packet.length) return null;
                                        var n = this._list.toString("utf8", this._pos, r);
                                        return this._pos += t, a("_parseString: result: %s", n), n
                                    }
                                }, {
                                    key: "_parseStringPair", value: function () {
                                        return a("_parseStringPair"), {
                                            name: this._parseString(),
                                            value: this._parseString()
                                        }
                                    }
                                }, {
                                    key: "_parseBuffer", value: function () {
                                        var e = this._parseNum(), t = e + this._pos;
                                        if (-1 === e || t > this._list.length || t > this.packet.length) return null;
                                        var r = this._list.slice(this._pos, t);
                                        return this._pos += e, a("_parseBuffer: result: %o", r), r
                                    }
                                }, {
                                    key: "_parseNum", value: function () {
                                        if (this._list.length - this._pos < 2) return -1;
                                        var e = this._list.readUInt16BE(this._pos);
                                        return this._pos += 2, a("_parseNum: result: %s", e), e
                                    }
                                }, {
                                    key: "_parse4ByteNum", value: function () {
                                        if (this._list.length - this._pos < 4) return -1;
                                        var e = this._list.readUInt32BE(this._pos);
                                        return this._pos += 4, a("_parse4ByteNum: result: %s", e), e
                                    }
                                }, {
                                    key: "_parseVarByteNum", value: function (e) {
                                        a("_parseVarByteNum");
                                        for (var t, r = 0, n = 1, i = 0, o = !1, u = this._pos ? this._pos : 0; r < 4 && u + r < this._list.length;) {
                                            if (i += n * ((t = this._list.readUInt8(u + r++)) & s.VARBYTEINT_MASK), n *= 128, 0 == (t & s.VARBYTEINT_FIN_MASK)) {
                                                o = !0;
                                                break
                                            }
                                            if (this._list.length <= r) break
                                        }
                                        return !o && 4 === r && this._list.length >= r && this._emitError(new Error("Invalid variable byte integer")), u && (this._pos += r), a("_parseVarByteNum: result: %o", o = !!o && (e ? {
                                            bytes: r,
                                            value: i
                                        } : i)), o
                                    }
                                }, {
                                    key: "_parseByte", value: function () {
                                        var e;
                                        return this._pos < this._list.length && (e = this._list.readUInt8(this._pos), this._pos++), a("_parseByte: result: %o", e), e
                                    }
                                }, {
                                    key: "_parseByType", value: function (e) {
                                        switch (a("_parseByType: type: %s", e), e) {
                                            case"byte":
                                                return 0 !== this._parseByte();
                                            case"int8":
                                                return this._parseByte();
                                            case"int16":
                                                return this._parseNum();
                                            case"int32":
                                                return this._parse4ByteNum();
                                            case"var":
                                                return this._parseVarByteNum();
                                            case"string":
                                                return this._parseString();
                                            case"pair":
                                                return this._parseStringPair();
                                            case"binary":
                                                return this._parseBuffer()
                                        }
                                    }
                                }, {
                                    key: "_parseProperties", value: function () {
                                        a("_parseProperties");
                                        for (var e = this._parseVarByteNum(), t = this._pos + e, r = {}; this._pos < t;) {
                                            var n = this._parseByte();
                                            if (!n) return this._emitError(new Error("Cannot parse property code type")), !1;
                                            var i = s.propertiesCodes[n];
                                            if (!i) return this._emitError(new Error("Unknown property")), !1;
                                            if ("userProperties" !== i) r[i] ? (Array.isArray(r[i]) || (r[i] = [r[i]]), r[i].push(this._parseByType(s.propertiesTypes[i]))) : r[i] = this._parseByType(s.propertiesTypes[i]); else {
                                                r[i] || (r[i] = Object.create(null));
                                                var o = this._parseByType(s.propertiesTypes[i]);
                                                if (r[i][o.name]) if (Array.isArray(r[i][o.name])) r[i][o.name].push(o.value); else {
                                                    var u = r[i][o.name];
                                                    r[i][o.name] = [u], r[i][o.name].push(o.value)
                                                } else r[i][o.name] = o.value
                                            }
                                        }
                                        return r
                                    }
                                }, {
                                    key: "_newPacket", value: function () {
                                        return a("_newPacket"), this.packet && (this._list.consume(this.packet.length), a("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), a("_newPacket: new packet"), this.packet = new o, this._pos = 0, !0
                                    }
                                }, {
                                    key: "_emitError", value: function (e) {
                                        a("_emitError"), this.error = e, this.emit("error", e)
                                    }
                                }], [{
                                    key: "parser", value: function (e) {
                                        return this instanceof r ? (this.settings = e || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : (new r).parser(e)
                                    }
                                }]), r
                            }();
                        t.exports = u
                    }, {"./constants": 45, "./packet": 49, bl: 15, debug: 18, events: 22}],
                    51: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n = e("./constants"), i = r.allocUnsafe(0), o = r.from([0]), s = e("./numbers"),
                                    a = e("process-nextick-args").nextTick, u = e("debug")("mqtt-packet:writeToStream"),
                                    c = s.cache, l = s.generateNumber, h = s.generateCache, f = s.genBufVariableByteInt,
                                    p = s.generate4ByteBuffer, d = E, v = !0;

                                function g(e, t, s) {
                                    switch (u("generate called"), t.cork && (t.cork(), a(y, t)), v && (v = !1, h()), u("generate: packet.cmd: %s", e.cmd), e.cmd) {
                                        case"connect":
                                            return function (e, t, i) {
                                                var o = e || {}, s = o.protocolId || "MQTT", a = o.protocolVersion || 4,
                                                    u = o.will, c = o.clean, l = o.keepalive || 0, h = o.clientId || "",
                                                    f = o.username, p = o.password, v = o.properties;
                                                void 0 === c && (c = !0);
                                                var g = 0;
                                                if (!s || "string" != typeof s && !r.isBuffer(s)) return t.emit("error", new Error("Invalid protocolId")), !1;
                                                if (g += s.length + 2, 3 !== a && 4 !== a && 5 !== a) return t.emit("error", new Error("Invalid protocol version")), !1;
                                                if (g += 1, ("string" == typeof h || r.isBuffer(h)) && (h || a >= 4) && (h || c)) g += r.byteLength(h) + 2; else {
                                                    if (a < 4) return t.emit("error", new Error("clientId must be supplied before 3.1.1")), !1;
                                                    if (1 * c == 0) return t.emit("error", new Error("clientId must be given if cleanSession set to 0")), !1
                                                }
                                                if ("number" != typeof l || l < 0 || l > 65535 || l % 1 != 0) return t.emit("error", new Error("Invalid keepalive")), !1;
                                                if (g += 2, g += 1, 5 === a) {
                                                    var y = x(t, v);
                                                    if (!y) return !1;
                                                    g += y.length
                                                }
                                                if (u) {
                                                    if ("object" !== S(u)) return t.emit("error", new Error("Invalid will")), !1;
                                                    if (!u.topic || "string" != typeof u.topic) return t.emit("error", new Error("Invalid will topic")), !1;
                                                    if (g += r.byteLength(u.topic) + 2, g += 2, u.payload) {
                                                        if (!(u.payload.length >= 0)) return t.emit("error", new Error("Invalid will payload")), !1;
                                                        "string" == typeof u.payload ? g += r.byteLength(u.payload) : g += u.payload.length
                                                    }
                                                    var m = {};
                                                    if (5 === a) {
                                                        if (!(m = x(t, u.properties))) return !1;
                                                        g += m.length
                                                    }
                                                }
                                                var b = !1;
                                                if (null != f) {
                                                    if (!R(f)) return t.emit("error", new Error("Invalid username")), !1;
                                                    b = !0, g += r.byteLength(f) + 2
                                                }
                                                if (null != p) {
                                                    if (!b) return t.emit("error", new Error("Username is required to use password")), !1;
                                                    if (!R(p)) return t.emit("error", new Error("Invalid password")), !1;
                                                    g += C(p) + 2
                                                }
                                                t.write(n.CONNECT_HEADER), w(t, g), I(t, s), o.bridgeMode && (a += 128), t.write(131 === a ? n.VERSION131 : 132 === a ? n.VERSION132 : 4 === a ? n.VERSION4 : 5 === a ? n.VERSION5 : n.VERSION3);
                                                var k = 0;
                                                return k |= null != f ? n.USERNAME_MASK : 0, k |= null != p ? n.PASSWORD_MASK : 0, k |= u && u.retain ? n.WILL_RETAIN_MASK : 0, k |= u && u.qos ? u.qos << n.WILL_QOS_SHIFT : 0, k |= u ? n.WILL_FLAG_MASK : 0, k |= c ? n.CLEAN_SESSION_MASK : 0, t.write(r.from([k])), d(t, l), 5 === a && y.write(), I(t, h), u && (5 === a && m.write(), _(t, u.topic), I(t, u.payload)), null != f && I(t, f), null != p && I(t, p), !0
                                            }(e, t);
                                        case"connack":
                                            return function (e, t, i) {
                                                var s = i ? i.protocolVersion : 4, a = e || {},
                                                    u = 5 === s ? a.reasonCode : a.returnCode, c = a.properties, l = 2;
                                                if ("number" != typeof u) return t.emit("error", new Error("Invalid return code")), !1;
                                                var h = null;
                                                if (5 === s) {
                                                    if (!(h = x(t, c))) return !1;
                                                    l += h.length
                                                }
                                                return t.write(n.CONNACK_HEADER), w(t, l), t.write(a.sessionPresent ? n.SESSIONPRESENT_HEADER : o), t.write(r.from([u])), null != h && h.write(), !0
                                            }(e, t, s);
                                        case"publish":
                                            return function (e, t, o) {
                                                u("publish: packet: %o", e);
                                                var s = o ? o.protocolVersion : 4, a = e || {}, c = a.qos || 0,
                                                    l = a.retain ? n.RETAIN_MASK : 0, h = a.topic, f = a.payload || i,
                                                    p = a.messageId, v = a.properties, g = 0;
                                                if ("string" == typeof h) g += r.byteLength(h) + 2; else {
                                                    if (!r.isBuffer(h)) return t.emit("error", new Error("Invalid topic")), !1;
                                                    g += h.length + 2
                                                }
                                                if (r.isBuffer(f) ? g += f.length : g += r.byteLength(f), c && "number" != typeof p) return t.emit("error", new Error("Invalid messageId")), !1;
                                                c && (g += 2);
                                                var y = null;
                                                if (5 === s) {
                                                    if (!(y = x(t, v))) return !1;
                                                    g += y.length
                                                }
                                                return t.write(n.PUBLISH_HEADER[c][a.dup ? 1 : 0][l ? 1 : 0]), w(t, g), d(t, C(h)), t.write(h), c > 0 && d(t, p), null != y && y.write(), u("publish: payload: %o", f), t.write(f)
                                            }(e, t, s);
                                        case"puback":
                                        case"pubrec":
                                        case"pubrel":
                                        case"pubcomp":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.cmd || "puback",
                                                    u = s.messageId, c = s.dup && "pubrel" === a ? n.DUP_MASK : 0,
                                                    l = 0, h = s.reasonCode, f = s.properties, p = 5 === o ? 3 : 2;
                                                if ("pubrel" === a && (l = 1), "number" != typeof u) return t.emit("error", new Error("Invalid messageId")), !1;
                                                var v = null;
                                                if (5 === o && "object" === S(f)) {
                                                    if (!(v = A(t, f, i, p))) return !1;
                                                    p += v.length
                                                }
                                                return t.write(n.ACKS[a][l][c][0]), w(t, p), d(t, u), 5 === o && t.write(r.from([h])), null !== v && v.write(), !0
                                            }(e, t, s);
                                        case"subscribe":
                                            return function (e, t, i) {
                                                u("subscribe: packet: ");
                                                var o = i ? i.protocolVersion : 4, s = e || {},
                                                    a = s.dup ? n.DUP_MASK : 0, c = s.messageId, l = s.subscriptions,
                                                    h = s.properties, f = 0;
                                                if ("number" != typeof c) return t.emit("error", new Error("Invalid messageId")), !1;
                                                f += 2;
                                                var p = null;
                                                if (5 === o) {
                                                    if (!(p = x(t, h))) return !1;
                                                    f += p.length
                                                }
                                                if ("object" !== S(l) || !l.length) return t.emit("error", new Error("Invalid subscriptions")), !1;
                                                for (var v = 0; v < l.length; v += 1) {
                                                    var g = l[v].topic, y = l[v].qos;
                                                    if ("string" != typeof g) return t.emit("error", new Error("Invalid subscriptions - invalid topic")), !1;
                                                    if ("number" != typeof y) return t.emit("error", new Error("Invalid subscriptions - invalid qos")), !1;
                                                    if (5 === o) {
                                                        if ("boolean" != typeof (l[v].nl || !1)) return t.emit("error", new Error("Invalid subscriptions - invalid No Local")), !1;
                                                        if ("boolean" != typeof (l[v].rap || !1)) return t.emit("error", new Error("Invalid subscriptions - invalid Retain as Published")), !1;
                                                        var b = l[v].rh || 0;
                                                        if ("number" != typeof b || b > 2) return t.emit("error", new Error("Invalid subscriptions - invalid Retain Handling")), !1
                                                    }
                                                    f += r.byteLength(g) + 2 + 1
                                                }
                                                u("subscribe: writing to stream: %o", n.SUBSCRIBE_HEADER), t.write(n.SUBSCRIBE_HEADER[1][a ? 1 : 0][0]), w(t, f), d(t, c), null !== p && p.write();
                                                var k, E = !0, P = m(l);
                                                try {
                                                    for (P.s(); !(k = P.n()).done;) {
                                                        var I = k.value, A = I.topic, T = I.qos, O = +I.nl, C = +I.rap,
                                                            R = I.rh, B = void 0;
                                                        _(t, A), B = n.SUBSCRIBE_OPTIONS_QOS[T], 5 === o && (B |= O ? n.SUBSCRIBE_OPTIONS_NL : 0, B |= C ? n.SUBSCRIBE_OPTIONS_RAP : 0, B |= R ? n.SUBSCRIBE_OPTIONS_RH[R] : 0), E = t.write(r.from([B]))
                                                    }
                                                } catch (e) {
                                                    P.e(e)
                                                } finally {
                                                    P.f()
                                                }
                                                return E
                                            }(e, t, s);
                                        case"suback":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.messageId,
                                                    u = s.granted, c = s.properties, l = 0;
                                                if ("number" != typeof a) return t.emit("error", new Error("Invalid messageId")), !1;
                                                if (l += 2, "object" !== S(u) || !u.length) return t.emit("error", new Error("Invalid qos vector")), !1;
                                                for (var h = 0; h < u.length; h += 1) {
                                                    if ("number" != typeof u[h]) return t.emit("error", new Error("Invalid qos vector")), !1;
                                                    l += 1
                                                }
                                                var f = null;
                                                if (5 === o) {
                                                    if (!(f = A(t, c, i, l))) return !1;
                                                    l += f.length
                                                }
                                                return t.write(n.SUBACK_HEADER), w(t, l), d(t, a), null !== f && f.write(), t.write(r.from(u))
                                            }(e, t, s);
                                        case"unsubscribe":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.messageId,
                                                    u = s.dup ? n.DUP_MASK : 0, c = s.unsubscriptions, l = s.properties,
                                                    h = 0;
                                                if ("number" != typeof a) return t.emit("error", new Error("Invalid messageId")), !1;
                                                if (h += 2, "object" !== S(c) || !c.length) return t.emit("error", new Error("Invalid unsubscriptions")), !1;
                                                for (var f = 0; f < c.length; f += 1) {
                                                    if ("string" != typeof c[f]) return t.emit("error", new Error("Invalid unsubscriptions")), !1;
                                                    h += r.byteLength(c[f]) + 2
                                                }
                                                var p = null;
                                                if (5 === o) {
                                                    if (!(p = x(t, l))) return !1;
                                                    h += p.length
                                                }
                                                t.write(n.UNSUBSCRIBE_HEADER[1][u ? 1 : 0][0]), w(t, h), d(t, a), null !== p && p.write();
                                                for (var v = !0, g = 0; g < c.length; g++) v = _(t, c[g]);
                                                return v
                                            }(e, t, s);
                                        case"unsuback":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.messageId,
                                                    u = s.dup ? n.DUP_MASK : 0, c = s.granted, l = s.properties,
                                                    h = s.cmd, f = 2;
                                                if ("number" != typeof a) return t.emit("error", new Error("Invalid messageId")), !1;
                                                if (5 === o) {
                                                    if ("object" !== S(c) || !c.length) return t.emit("error", new Error("Invalid qos vector")), !1;
                                                    for (var p = 0; p < c.length; p += 1) {
                                                        if ("number" != typeof c[p]) return t.emit("error", new Error("Invalid qos vector")), !1;
                                                        f += 1
                                                    }
                                                }
                                                var v = null;
                                                if (5 === o) {
                                                    if (!(v = A(t, l, i, f))) return !1;
                                                    f += v.length
                                                }
                                                return t.write(n.ACKS[h][0][u][0]), w(t, f), d(t, a), null !== v && v.write(), 5 === o && t.write(r.from(c)), !0
                                            }(e, t, s);
                                        case"pingreq":
                                        case"pingresp":
                                            return function (e, t, r) {
                                                return t.write(n.EMPTY[e.cmd])
                                            }(e, t);
                                        case"disconnect":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.reasonCode,
                                                    u = s.properties, c = 5 === o ? 1 : 0, l = null;
                                                if (5 === o) {
                                                    if (!(l = A(t, u, i, c))) return !1;
                                                    c += l.length
                                                }
                                                return t.write(r.from([n.codes.disconnect << 4])), w(t, c), 5 === o && t.write(r.from([a])), null !== l && l.write(), !0
                                            }(e, t, s);
                                        case"auth":
                                            return function (e, t, i) {
                                                var o = i ? i.protocolVersion : 4, s = e || {}, a = s.reasonCode,
                                                    u = s.properties, c = 5 === o ? 1 : 0;
                                                5 !== o && t.emit("error", new Error("Invalid mqtt version for auth packet"));
                                                var l = A(t, u, i, c);
                                                return !!l && (c += l.length, t.write(r.from([n.codes.auth << 4])), w(t, c), t.write(r.from([a])), null !== l && l.write(), !0)
                                            }(e, t, s);
                                        default:
                                            return t.emit("error", new Error("Unknown command")), !1
                                    }
                                }

                                function y(e) {
                                    e.uncork()
                                }

                                Object.defineProperty(g, "cacheNumbers", {
                                    get: function () {
                                        return d === E
                                    }, set: function (e) {
                                        e ? (c && 0 !== Object.keys(c).length || (v = !0), d = E) : (v = !1, d = P)
                                    }
                                });
                                var b = {};

                                function w(e, t) {
                                    if (t > n.VARBYTEINT_MAX) return e.emit("error", new Error("Invalid variable byte integer: ".concat(t))), !1;
                                    var r = b[t];
                                    return r || (r = f(t), t < 16384 && (b[t] = r)), u("writeVarByteInt: writing to stream: %o", r), e.write(r)
                                }

                                function _(e, t) {
                                    var n = r.byteLength(t);
                                    return d(e, n), u("writeString: %s", t), e.write(t, "utf8")
                                }

                                function k(e, t, r) {
                                    _(e, t), _(e, r)
                                }

                                function E(e, t) {
                                    return u("writeNumberCached: number: %d", t), u("writeNumberCached: %o", c[t]), e.write(c[t])
                                }

                                function P(e, t) {
                                    var r = l(t);
                                    return u("writeNumberGenerated: %o", r), e.write(r)
                                }

                                function I(e, t) {
                                    "string" == typeof t ? _(e, t) : t ? (d(e, t.length), e.write(t)) : d(e, 0)
                                }

                                function x(e, t) {
                                    if ("object" !== S(t) || null != t.length) return {
                                        length: 1, write: function () {
                                            O(e, {}, 0)
                                        }
                                    };
                                    var i = 0;

                                    function o(t, i) {
                                        var o = 0;
                                        switch (n.propertiesTypes[t]) {
                                            case"byte":
                                                if ("boolean" != typeof i) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 2;
                                                break;
                                            case"int8":
                                                if ("number" != typeof i || i < 0 || i > 255) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 2;
                                                break;
                                            case"binary":
                                                if (i && null === i) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 1 + r.byteLength(i) + 2;
                                                break;
                                            case"int16":
                                                if ("number" != typeof i || i < 0 || i > 65535) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 3;
                                                break;
                                            case"int32":
                                                if ("number" != typeof i || i < 0 || i > 4294967295) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 5;
                                                break;
                                            case"var":
                                                if ("number" != typeof i || i < 0 || i > 268435455) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 1 + r.byteLength(f(i));
                                                break;
                                            case"string":
                                                if ("string" != typeof i) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += 3 + r.byteLength(i.toString());
                                                break;
                                            case"pair":
                                                if ("object" !== S(i)) return e.emit("error", new Error("Invalid ".concat(t, ": ").concat(i))), !1;
                                                o += Object.getOwnPropertyNames(i).reduce((function (e, t) {
                                                    var n = i[t];
                                                    return Array.isArray(n) ? e += n.reduce((function (e, n) {
                                                        return e + (3 + r.byteLength(t.toString()) + 2 + r.byteLength(n.toString()))
                                                    }), 0) : e += 3 + r.byteLength(t.toString()) + 2 + r.byteLength(i[t].toString()), e
                                                }), 0);
                                                break;
                                            default:
                                                return e.emit("error", new Error("Invalid property ".concat(t, ": ").concat(i))), !1
                                        }
                                        return o
                                    }

                                    if (t) for (var s in t) {
                                        var a = 0, u = 0, c = t[s];
                                        if (Array.isArray(c)) for (var l = 0; l < c.length; l++) {
                                            if (!(u = o(s, c[l]))) return !1;
                                            a += u
                                        } else {
                                            if (!(u = o(s, c))) return !1;
                                            a = u
                                        }
                                        if (!a) return !1;
                                        i += a
                                    }
                                    return {
                                        length: r.byteLength(f(i)) + i, write: function () {
                                            O(e, t, i)
                                        }
                                    }
                                }

                                function A(e, t, r, n) {
                                    var i = ["reasonString", "userProperties"],
                                        o = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0,
                                        s = x(e, t);
                                    if (o) for (; n + s.length > o;) {
                                        var a = i.shift();
                                        if (!a || !t[a]) return !1;
                                        delete t[a], s = x(e, t)
                                    }
                                    return s
                                }

                                function T(e, t, i) {
                                    switch (n.propertiesTypes[t]) {
                                        case"byte":
                                            e.write(r.from([n.properties[t]])), e.write(r.from([+i]));
                                            break;
                                        case"int8":
                                            e.write(r.from([n.properties[t]])), e.write(r.from([i]));
                                            break;
                                        case"binary":
                                            e.write(r.from([n.properties[t]])), I(e, i);
                                            break;
                                        case"int16":
                                            e.write(r.from([n.properties[t]])), d(e, i);
                                            break;
                                        case"int32":
                                            e.write(r.from([n.properties[t]])), function (e, t) {
                                                var r = p(t);
                                                u("write4ByteNumber: %o", r), e.write(r)
                                            }(e, i);
                                            break;
                                        case"var":
                                            e.write(r.from([n.properties[t]])), w(e, i);
                                            break;
                                        case"string":
                                            e.write(r.from([n.properties[t]])), _(e, i);
                                            break;
                                        case"pair":
                                            Object.getOwnPropertyNames(i).forEach((function (o) {
                                                var s = i[o];
                                                Array.isArray(s) ? s.forEach((function (i) {
                                                    e.write(r.from([n.properties[t]])), k(e, o.toString(), i.toString())
                                                })) : (e.write(r.from([n.properties[t]])), k(e, o.toString(), s.toString()))
                                            }));
                                            break;
                                        default:
                                            return e.emit("error", new Error("Invalid property ".concat(t, " value: ").concat(i))), !1
                                    }
                                }

                                function O(e, t, r) {
                                    for (var n in w(e, r), t) if (Object.prototype.hasOwnProperty.call(t, n) && null !== t[n]) {
                                        var i = t[n];
                                        if (Array.isArray(i)) for (var o = 0; o < i.length; o++) T(e, n, i[o]); else T(e, n, i)
                                    }
                                }

                                function C(e) {
                                    return e ? e instanceof r ? e.length : r.byteLength(e) : 0
                                }

                                function R(e) {
                                    return "string" == typeof e || e instanceof r
                                }

                                t.exports = g
                            }).call(this)
                        }).call(this, e("buffer").Buffer)
                    }, {"./constants": 45, "./numbers": 48, buffer: 17, debug: 18, "process-nextick-args": 56}],
                    52: [function (e, t, r) {
                        var n = 1e3, i = 6e4, o = 60 * i, s = 24 * o;

                        function a(e, t, r, n) {
                            var i = t >= 1.5 * r;
                            return Math.round(e / r) + " " + n + (i ? "s" : "")
                        }

                        t.exports = function (e, t) {
                            t = t || {};
                            var r = S(e);
                            if ("string" === r && e.length > 0) return function (e) {
                                if (!((e = String(e)).length > 100)) {
                                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                                    if (t) {
                                        var r = parseFloat(t[1]);
                                        switch ((t[2] || "ms").toLowerCase()) {
                                            case"years":
                                            case"year":
                                            case"yrs":
                                            case"yr":
                                            case"y":
                                                return 315576e5 * r;
                                            case"weeks":
                                            case"week":
                                            case"w":
                                                return 6048e5 * r;
                                            case"days":
                                            case"day":
                                            case"d":
                                                return r * s;
                                            case"hours":
                                            case"hour":
                                            case"hrs":
                                            case"hr":
                                            case"h":
                                                return r * o;
                                            case"minutes":
                                            case"minute":
                                            case"mins":
                                            case"min":
                                            case"m":
                                                return r * i;
                                            case"seconds":
                                            case"second":
                                            case"secs":
                                            case"sec":
                                            case"s":
                                                return r * n;
                                            case"milliseconds":
                                            case"millisecond":
                                            case"msecs":
                                            case"msec":
                                            case"ms":
                                                return r;
                                            default:
                                                return
                                        }
                                    }
                                }
                            }(e);
                            if ("number" === r && isFinite(e)) return t.long ? function (e) {
                                var t = Math.abs(e);
                                return t >= s ? a(e, t, s, "day") : t >= o ? a(e, t, o, "hour") : t >= i ? a(e, t, i, "minute") : t >= n ? a(e, t, n, "second") : e + " ms"
                            }(e) : function (e) {
                                var t = Math.abs(e);
                                return t >= s ? Math.round(e / s) + "d" : t >= o ? Math.round(e / o) + "h" : t >= i ? Math.round(e / i) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms"
                            }(e);
                            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                        }
                    }, {}],
                    53: [function (e, t, r) {
                        var n = e("./lib/number-allocator.js");
                        t.exports.NumberAllocator = n
                    }, {"./lib/number-allocator.js": 54}],
                    54: [function (e, t, r) {
                        var n = e("js-sdsl").OrderedSet, i = e("debug")("number-allocator:trace"),
                            o = e("debug")("number-allocator:error");

                        function s(e, t) {
                            this.low = e, this.high = t
                        }

                        function a(e, t) {
                            if (!(this instanceof a)) return new a(e, t);
                            this.min = e, this.max = t, this.ss = new n([], (function (e, t) {
                                return e.compare(t)
                            })), i("Create"), this.clear()
                        }

                        s.prototype.equals = function (e) {
                            return this.low === e.low && this.high === e.high
                        }, s.prototype.compare = function (e) {
                            return this.low < e.low && this.high < e.low ? -1 : e.low < this.low && e.high < this.low ? 1 : 0
                        }, a.prototype.firstVacant = function () {
                            return 0 === this.ss.size() ? null : this.ss.front().low
                        }, a.prototype.alloc = function () {
                            if (0 === this.ss.size()) return i("alloc():empty"), null;
                            var e = this.ss.begin(), t = e.pointer.low, r = e.pointer.high, n = t;
                            return n + 1 <= r ? this.ss.updateKeyByIterator(e, new s(t + 1, r)) : this.ss.eraseElementByPos(0), i("alloc():" + n), n
                        }, a.prototype.use = function (e) {
                            var t = new s(e, e), r = this.ss.lowerBound(t);
                            if (!r.equals(this.ss.end())) {
                                var n = r.pointer.low, o = r.pointer.high;
                                return r.pointer.equals(t) ? (this.ss.eraseElementByIterator(r), i("use():" + e), !0) : !(n > e || (n === e ? (this.ss.updateKeyByIterator(r, new s(n + 1, o)), i("use():" + e), 0) : o === e ? (this.ss.updateKeyByIterator(r, new s(n, o - 1)), i("use():" + e), 0) : (this.ss.updateKeyByIterator(r, new s(e + 1, o)), this.ss.insert(new s(n, e - 1)), i("use():" + e), 0)))
                            }
                            return i("use():failed"), !1
                        }, a.prototype.free = function (e) {
                            if (e < this.min || e > this.max) o("free():" + e + " is out of range"); else {
                                var t = new s(e, e), r = this.ss.upperBound(t);
                                if (r.equals(this.ss.end())) {
                                    if (r.equals(this.ss.begin())) return void this.ss.insert(t);
                                    r.pre();
                                    var n = r.pointer.high;
                                    r.pointer.high + 1 === e ? this.ss.updateKeyByIterator(r, new s(n, e)) : this.ss.insert(t)
                                } else if (r.equals(this.ss.begin())) if (e + 1 === r.pointer.low) {
                                    var a = r.pointer.high - 1, u = r.pointer.high;
                                    this.ss.updateKeyByIterator(r, new s(a, u))
                                } else this.ss.insert(t); else {
                                    var c = r.pointer.low, l = r.pointer.high;
                                    r.pre();
                                    var h = r.pointer.low;
                                    if (r.pointer.high + 1 === e) if (e + 1 === c) {
                                        this.ss.eraseElementByIterator(r);
                                        var f = r.pointer.high;
                                        this.ss.updateKeyByIterator(r, new s(h, f))
                                    } else this.ss.updateKeyByIterator(r, new s(h, e)); else e + 1 === c ? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new s(e, l))) : this.ss.insert(t)
                                }
                                i("free():" + e)
                            }
                        }, a.prototype.clear = function () {
                            i("clear()"), this.ss.clear(), this.ss.insert(new s(this.min, this.max))
                        }, a.prototype.intervalCount = function () {
                            return this.ss.size()
                        }, a.prototype.dump = function () {
                            var e, t = m(this.ss);
                            try {
                                for (t.s(); !(e = t.n()).done;) e.value
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }, t.exports = a
                    }, {debug: 18, "js-sdsl": 42}],
                    55: [function (e, t, r) {
                        var n = e("wrappy");

                        function i(e) {
                            var t = function t() {
                                return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
                            };
                            return t.called = !1, t
                        }

                        function o(e) {
                            var t = function t() {
                                if (t.called) throw new Error(t.onceError);
                                return t.called = !0, t.value = e.apply(this, arguments)
                            }, r = e.name || "Function wrapped with `once`";
                            return t.onceError = r + " shouldn't be called more than once", t.called = !1, t
                        }

                        t.exports = n(i), t.exports.strict = n(o), i.proto = i((function () {
                            Object.defineProperty(Function.prototype, "once", {
                                value: function () {
                                    return i(this)
                                }, configurable: !0
                            }), Object.defineProperty(Function.prototype, "onceStrict", {
                                value: function () {
                                    return o(this)
                                }, configurable: !0
                            })
                        }))
                    }, {wrappy: 83}],
                    56: [function (e, t, r) {
                        (function (e) {
                            (function () {
                                void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                                    nextTick: function (t, r, n, i) {
                                        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                                        var o, s, a = arguments.length;
                                        switch (a) {
                                            case 0:
                                            case 1:
                                                return e.nextTick(t);
                                            case 2:
                                                return e.nextTick((function () {
                                                    t.call(null, r)
                                                }));
                                            case 3:
                                                return e.nextTick((function () {
                                                    t.call(null, r, n)
                                                }));
                                            case 4:
                                                return e.nextTick((function () {
                                                    t.call(null, r, n, i)
                                                }));
                                            default:
                                                for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                                                return e.nextTick((function () {
                                                    t.apply(null, o)
                                                }))
                                        }
                                    }
                                } : t.exports = e
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {_process: 57}],
                    57: [function (e, t, r) {
                        var n, i, o = t.exports = {};

                        function s() {
                            throw new Error("setTimeout has not been defined")
                        }

                        function a() {
                            throw new Error("clearTimeout has not been defined")
                        }

                        function u(e) {
                            if (n === setTimeout) return setTimeout(e, 0);
                            if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                            try {
                                return n(e, 0)
                            } catch (t) {
                                try {
                                    return n.call(null, e, 0)
                                } catch (t) {
                                    return n.call(this, e, 0)
                                }
                            }
                        }

                        !function () {
                            try {
                                n = "function" == typeof setTimeout ? setTimeout : s
                            } catch (e) {
                                n = s
                            }
                            try {
                                i = "function" == typeof clearTimeout ? clearTimeout : a
                            } catch (e) {
                                i = a
                            }
                        }();
                        var c, l = [], h = !1, f = -1;

                        function p() {
                            h && c && (h = !1, c.length ? l = c.concat(l) : f = -1, l.length && d())
                        }

                        function d() {
                            if (!h) {
                                var e = u(p);
                                h = !0;
                                for (var t = l.length; t;) {
                                    for (c = l, l = []; ++f < t;) c && c[f].run();
                                    f = -1, t = l.length
                                }
                                c = null, h = !1, function (e) {
                                    if (i === clearTimeout) return clearTimeout(e);
                                    if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                                    try {
                                        i(e)
                                    } catch (t) {
                                        try {
                                            return i.call(null, e)
                                        } catch (t) {
                                            return i.call(this, e)
                                        }
                                    }
                                }(e)
                            }
                        }

                        function v(e, t) {
                            this.fun = e, this.array = t
                        }

                        function g() {
                        }

                        o.nextTick = function (e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            l.push(new v(e, t)), 1 !== l.length || h || u(d)
                        }, v.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
                            return []
                        }, o.binding = function (e) {
                            throw new Error("process.binding is not supported")
                        }, o.cwd = function () {
                            return "/"
                        }, o.chdir = function (e) {
                            throw new Error("process.chdir is not supported")
                        }, o.umask = function () {
                            return 0
                        }
                    }, {}],
                    58: [function (e, t, n) {
                        (function (e) {
                            (function () {
                                !function (r) {
                                    var i = "object" == S(n) && n && !n.nodeType && n,
                                        o = "object" == S(t) && t && !t.nodeType && t, s = "object" == S(e) && e;
                                    s.global !== s && s.window !== s && s.self !== s || (r = s);
                                    var a, u, c = 2147483647, l = 36, h = /^xn--/, f = /[^\x20-\x7E]/,
                                        p = /[\x2E\u3002\uFF0E\uFF61]/g, d = {
                                            overflow: "Overflow: input needs wider integers to process",
                                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                            "invalid-input": "Invalid input"
                                        }, v = Math.floor, g = String.fromCharCode;

                                    function y(e) {
                                        throw new RangeError(d[e])
                                    }

                                    function m(e, t) {
                                        for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                                        return n
                                    }

                                    function b(e, t) {
                                        var r = e.split("@"), n = "";
                                        return r.length > 1 && (n = r[0] + "@", e = r[1]), n + m((e = e.replace(p, ".")).split("."), t).join(".")
                                    }

                                    function w(e) {
                                        for (var t, r, n = [], i = 0, o = e.length; i < o;) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
                                        return n
                                    }

                                    function _(e) {
                                        return m(e, (function (e) {
                                            var t = "";
                                            return e > 65535 && (t += g((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + g(e)
                                        })).join("")
                                    }

                                    function k(e, t) {
                                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                                    }

                                    function E(e, t, r) {
                                        var n = 0;
                                        for (e = r ? v(e / 700) : e >> 1, e += v(e / t); e > 455; n += l) e = v(e / 35);
                                        return v(n + 36 * e / (e + 38))
                                    }

                                    function P(e) {
                                        var t, r, n, i, o, s, a, u, h, f, p, d = [], g = e.length, m = 0, b = 128,
                                            w = 72;
                                        for ((r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && y("not-basic"), d.push(e.charCodeAt(n));
                                        for (i = r > 0 ? r + 1 : 0; i < g;) {
                                            for (o = m, s = 1, a = l; i >= g && y("invalid-input"), ((u = (p = e.charCodeAt(i++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : l) >= l || u > v((c - m) / s)) && y("overflow"), m += u * s, !(u < (h = a <= w ? 1 : a >= w + 26 ? 26 : a - w)); a += l) s > v(c / (f = l - h)) && y("overflow"), s *= f;
                                            w = E(m - o, t = d.length + 1, 0 == o), v(m / t) > c - b && y("overflow"), b += v(m / t), m %= t, d.splice(m++, 0, b)
                                        }
                                        return _(d)
                                    }

                                    function I(e) {
                                        var t, r, n, i, o, s, a, u, h, f, p, d, m, b, _, S = [];
                                        for (d = (e = w(e)).length, t = 128, r = 0, o = 72, s = 0; s < d; ++s) (p = e[s]) < 128 && S.push(g(p));
                                        for (n = i = S.length, i && S.push("-"); n < d;) {
                                            for (a = c, s = 0; s < d; ++s) (p = e[s]) >= t && p < a && (a = p);
                                            for (a - t > v((c - r) / (m = n + 1)) && y("overflow"), r += (a - t) * m, t = a, s = 0; s < d; ++s) if ((p = e[s]) < t && ++r > c && y("overflow"), p == t) {
                                                for (u = r, h = l; !(u < (f = h <= o ? 1 : h >= o + 26 ? 26 : h - o)); h += l) _ = u - f, b = l - f, S.push(g(k(f + _ % b, 0))), u = v(_ / b);
                                                S.push(g(k(u, 0))), o = E(r, m, n == i), r = 0, ++n
                                            }
                                            ++r, ++t
                                        }
                                        return S.join("")
                                    }

                                    if (a = {
                                        version: "1.4.1",
                                        ucs2: {decode: w, encode: _},
                                        decode: P,
                                        encode: I,
                                        toASCII: function (e) {
                                            return b(e, (function (e) {
                                                return f.test(e) ? "xn--" + I(e) : e
                                            }))
                                        },
                                        toUnicode: function (e) {
                                            return b(e, (function (e) {
                                                return h.test(e) ? P(e.slice(4).toLowerCase()) : e
                                            }))
                                        }
                                    }, i && o) if (t.exports == i) o.exports = a; else for (u in a) a.hasOwnProperty(u) && (i[u] = a[u]); else r.punycode = a
                                }(this)
                            }).call(this)
                        }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    59: [function (e, t, r) {
                        function n(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }

                        t.exports = function (e, t, r, o) {
                            t = t || "&", r = r || "=";
                            var s = {};
                            if ("string" != typeof e || 0 === e.length) return s;
                            var a = /\+/g;
                            e = e.split(t);
                            var u = 1e3;
                            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                            var c = e.length;
                            u > 0 && c > u && (c = u);
                            for (var l = 0; l < c; ++l) {
                                var h, f, p, d, v = e[l].replace(a, "%20"), g = v.indexOf(r);
                                g >= 0 ? (h = v.substr(0, g), f = v.substr(g + 1)) : (h = v, f = ""), p = decodeURIComponent(h), d = decodeURIComponent(f), n(s, p) ? i(s[p]) ? s[p].push(d) : s[p] = [s[p], d] : s[p] = d
                            }
                            return s
                        };
                        var i = Array.isArray || function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }
                    }, {}],
                    60: [function (e, t, r) {
                        var n = function (e) {
                            switch (S(e)) {
                                case"string":
                                    return e;
                                case"boolean":
                                    return e ? "true" : "false";
                                case"number":
                                    return isFinite(e) ? e : "";
                                default:
                                    return ""
                            }
                        };
                        t.exports = function (e, t, r, a) {
                            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" === S(e) ? o(s(e), (function (s) {
                                var a = encodeURIComponent(n(s)) + r;
                                return i(e[s]) ? o(e[s], (function (e) {
                                    return a + encodeURIComponent(n(e))
                                })).join(t) : a + encodeURIComponent(n(e[s]))
                            })).join(t) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e)) : ""
                        };
                        var i = Array.isArray || function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        };

                        function o(e, t) {
                            if (e.map) return e.map(t);
                            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                            return r
                        }

                        var s = Object.keys || function (e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                            return t
                        }
                    }, {}],
                    61: [function (e, t, r) {
                        r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode")
                    }, {"./decode": 59, "./encode": 60}],
                    62: [function (e, t, r) {
                        var n = {};

                        function i(e, t, r) {
                            r || (r = Error);
                            var i = function (e) {
                                var r, n;

                                function i(r, n, i) {
                                    return e.call(this, function (e, r, n) {
                                        return "string" == typeof t ? t : t(e, r, n)
                                    }(r, n, i)) || this
                                }

                                return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
                            }(r);
                            i.prototype.name = r.name, i.prototype.code = e, n[e] = i
                        }

                        function o(e, t) {
                            if (Array.isArray(e)) {
                                var r = e.length;
                                return e = e.map((function (e) {
                                    return String(e)
                                })), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                            }
                            return "of ".concat(t, " ").concat(String(e))
                        }

                        i("ERR_INVALID_OPT_VALUE", (function (e, t) {
                            return 'The value "' + t + '" is invalid for option "' + e + '"'
                        }), TypeError), i("ERR_INVALID_ARG_TYPE", (function (e, t, r) {
                            var n, i, s;
                            if ("string" == typeof t && (i = "not ", t.substr(0, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function (e, t, r) {
                                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                            }(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type")); else {
                                var a = function (e, t, r) {
                                    return "number" != typeof r && (r = 0), !(r + ".".length > e.length) && -1 !== e.indexOf(".", r)
                                }(e) ? "property" : "argument";
                                s = 'The "'.concat(e, '" ').concat(a, " ").concat(n, " ").concat(o(t, "type"))
                            }
                            return s + ". Received type ".concat(S(r))
                        }), TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", (function (e) {
                            return "The " + e + " method is not implemented"
                        })), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", (function (e) {
                            return "Cannot call " + e + " after a stream was destroyed"
                        })), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", (function (e) {
                            return "Unknown encoding: " + e
                        }), TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = n
                    }, {}],
                    63: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n = Object.keys || function (e) {
                                    var t = [];
                                    for (var r in e) t.push(r);
                                    return t
                                };
                                t.exports = c;
                                var i = e("./_stream_readable"), o = e("./_stream_writable");
                                e("inherits")(c, i);
                                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                                    var u = s[a];
                                    c.prototype[u] || (c.prototype[u] = o.prototype[u])
                                }

                                function c(e) {
                                    if (!(this instanceof c)) return new c(e);
                                    i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", l)))
                                }

                                function l() {
                                    this._writableState.ended || r.nextTick(h, this)
                                }

                                function h(e) {
                                    e.end()
                                }

                                Object.defineProperty(c.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState.highWaterMark
                                    }
                                }), Object.defineProperty(c.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(c.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(c.prototype, "destroyed", {
                                    enumerable: !1, get: function () {
                                        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                    }, set: function (e) {
                                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                    }
                                })
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {"./_stream_readable": 65, "./_stream_writable": 67, _process: 57, inherits: 24}],
                    64: [function (e, t, r) {
                        t.exports = i;
                        var n = e("./_stream_transform");

                        function i(e) {
                            if (!(this instanceof i)) return new i(e);
                            n.call(this, e)
                        }

                        e("inherits")(i, n), i.prototype._transform = function (e, t, r) {
                            r(null, e)
                        }
                    }, {"./_stream_transform": 66, inherits: 24}],
                    65: [function (e, t, n) {
                        (function (r, n) {
                            (function () {
                                var i;
                                t.exports = P, P.ReadableState = S, e("events").EventEmitter;
                                var o, s = function (e, t) {
                                        return e.listeners(t).length
                                    }, a = e("./internal/streams/stream"), u = e("buffer").Buffer,
                                    c = n.Uint8Array || function () {
                                    }, l = e("util");
                                o = l && l.debuglog ? l.debuglog("stream") : function () {
                                };
                                var h, f, p, d = e("./internal/streams/buffer_list"),
                                    v = e("./internal/streams/destroy"),
                                    g = e("./internal/streams/state").getHighWaterMark, y = e("../errors").codes,
                                    m = y.ERR_INVALID_ARG_TYPE, b = y.ERR_STREAM_PUSH_AFTER_EOF,
                                    w = y.ERR_METHOD_NOT_IMPLEMENTED, _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                                e("inherits")(P, a);
                                var k = v.errorOrDestroy, E = ["error", "close", "destroy", "pause", "resume"];

                                function S(t, r, n) {
                                    i = i || e("./_stream_duplex"), t = t || {}, "boolean" != typeof n && (n = r instanceof i), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = g(this, t, "readableHighWaterMark", n), this.buffer = new d, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (h || (h = e("string_decoder/").StringDecoder), this.decoder = new h(t.encoding), this.encoding = t.encoding)
                                }

                                function P(t) {
                                    if (i = i || e("./_stream_duplex"), !(this instanceof P)) return new P(t);
                                    var r = this instanceof i;
                                    this._readableState = new S(t, this, r), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), a.call(this)
                                }

                                function I(e, t, r, n, i) {
                                    o("readableAddChunk", t);
                                    var s, a = e._readableState;
                                    if (null === t) a.reading = !1, function (e, t) {
                                        if (o("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var r = t.decoder.end();
                                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                                            }
                                            t.ended = !0, t.sync ? O(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, C(e)))
                                        }
                                    }(e, a); else if (i || (s = function (e, t) {
                                        var r, n;
                                        return n = t, u.isBuffer(n) || n instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (r = new m("chunk", ["string", "Buffer", "Uint8Array"], t)), r
                                    }(a, t)), s) k(e, s); else if (a.objectMode || t && t.length > 0) if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function (e) {
                                        return u.from(e)
                                    }(t)), n) a.endEmitted ? k(e, new _) : x(e, a, t, !0); else if (a.ended) k(e, new b); else {
                                        if (a.destroyed) return !1;
                                        a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? x(e, a, t, !1) : R(e, a)) : x(e, a, t, !1)
                                    } else n || (a.reading = !1, R(e, a));
                                    return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
                                }

                                function x(e, t, r, n) {
                                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && O(e)), R(e, t)
                                }

                                Object.defineProperty(P.prototype, "destroyed", {
                                    enumerable: !1, get: function () {
                                        return void 0 !== this._readableState && this._readableState.destroyed
                                    }, set: function (e) {
                                        this._readableState && (this._readableState.destroyed = e)
                                    }
                                }), P.prototype.destroy = v.destroy, P.prototype._undestroy = v.undestroy, P.prototype._destroy = function (e, t) {
                                    t(e)
                                }, P.prototype.push = function (e, t) {
                                    var r, n = this._readableState;
                                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = u.from(e, t), t = ""), r = !0), I(this, e, t, !1, r)
                                }, P.prototype.unshift = function (e) {
                                    return I(this, e, null, !0, !1)
                                }, P.prototype.isPaused = function () {
                                    return !1 === this._readableState.flowing
                                }, P.prototype.setEncoding = function (t) {
                                    h || (h = e("string_decoder/").StringDecoder);
                                    var r = new h(t);
                                    this._readableState.decoder = r, this._readableState.encoding = this._readableState.decoder.encoding;
                                    for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += r.write(n.data), n = n.next;
                                    return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                                };
                                var A = 1073741824;

                                function T(e, t) {
                                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
                                        return e >= A ? e = A : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                                    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                                }

                                function O(e) {
                                    var t = e._readableState;
                                    o("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (o("emitReadable", t.flowing), t.emittedReadable = !0, r.nextTick(C, e))
                                }

                                function C(e) {
                                    var t = e._readableState;
                                    o("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, j(e)
                                }

                                function R(e, t) {
                                    t.readingMore || (t.readingMore = !0, r.nextTick(B, e, t))
                                }

                                function B(e, t) {
                                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                        var r = t.length;
                                        if (o("maybeReadMore read 0"), e.read(0), r === t.length) break
                                    }
                                    t.readingMore = !1
                                }

                                function L(e) {
                                    var t = e._readableState;
                                    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                                }

                                function M(e) {
                                    o("readable nexttick read 0"), e.read(0)
                                }

                                function N(e, t) {
                                    o("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), j(e), t.flowing && !t.reading && e.read(0)
                                }

                                function j(e) {
                                    var t = e._readableState;
                                    for (o("flow", t.flowing); t.flowing && null !== e.read();) ;
                                }

                                function D(e, t) {
                                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
                                    var r
                                }

                                function U(e) {
                                    var t = e._readableState;
                                    o("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, r.nextTick(q, t, e))
                                }

                                function q(e, t) {
                                    if (o("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                        var r = t._writableState;
                                        (!r || r.autoDestroy && r.finished) && t.destroy()
                                    }
                                }

                                function F(e, t) {
                                    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
                                    return -1
                                }

                                P.prototype.read = function (e) {
                                    o("read", e), e = parseInt(e, 10);
                                    var t = this._readableState, r = e;
                                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return o("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? U(this) : O(this), null;
                                    if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && U(this), null;
                                    var n, i = t.needReadable;
                                    return o("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && o("length less than watermark", i = !0), t.ended || t.reading ? o("reading or ended", i = !1) : i && (o("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(r, t))), null === (n = e > 0 ? D(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && U(this)), null !== n && this.emit("data", n), n
                                }, P.prototype._read = function (e) {
                                    k(this, new w("_read()"))
                                }, P.prototype.pipe = function (e, t) {
                                    var n = this, i = this._readableState;
                                    switch (i.pipesCount) {
                                        case 0:
                                            i.pipes = e;
                                            break;
                                        case 1:
                                            i.pipes = [i.pipes, e];
                                            break;
                                        default:
                                            i.pipes.push(e)
                                    }
                                    i.pipesCount += 1, o("pipe count=%d opts=%j", i.pipesCount, t);
                                    var a = t && !1 === t.end || e === r.stdout || e === r.stderr ? v : u;

                                    function u() {
                                        o("onend"), e.end()
                                    }

                                    i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", (function t(r, s) {
                                        o("onunpipe"), r === n && s && !1 === s.hasUnpiped && (s.hasUnpiped = !0, o("cleanup"), e.removeListener("close", p), e.removeListener("finish", d), e.removeListener("drain", c), e.removeListener("error", f), e.removeListener("unpipe", t), n.removeListener("end", u), n.removeListener("end", v), n.removeListener("data", h), l = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || c())
                                    }));
                                    var c = function (e) {
                                        return function () {
                                            var t = e._readableState;
                                            o("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, j(e))
                                        }
                                    }(n);
                                    e.on("drain", c);
                                    var l = !1;

                                    function h(t) {
                                        o("ondata");
                                        var r = e.write(t);
                                        o("dest.write", r), !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !l && (o("false write response, pause", i.awaitDrain), i.awaitDrain++), n.pause())
                                    }

                                    function f(t) {
                                        o("onerror", t), v(), e.removeListener("error", f), 0 === s(e, "error") && k(e, t)
                                    }

                                    function p() {
                                        e.removeListener("finish", d), v()
                                    }

                                    function d() {
                                        o("onfinish"), e.removeListener("close", p), v()
                                    }

                                    function v() {
                                        o("unpipe"), n.unpipe(e)
                                    }

                                    return n.on("data", h), function (e, t, r) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                                    }(e, "error", f), e.once("close", p), e.once("finish", d), e.emit("pipe", n), i.flowing || (o("pipe resume"), n.resume()), e
                                }, P.prototype.unpipe = function (e) {
                                    var t = this._readableState, r = {hasUnpiped: !1};
                                    if (0 === t.pipesCount) return this;
                                    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                                    if (!e) {
                                        var n = t.pipes, i = t.pipesCount;
                                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                        for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {hasUnpiped: !1});
                                        return this
                                    }
                                    var s = F(t.pipes, e);
                                    return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                                }, P.prototype.on = function (e, t) {
                                    var n = a.prototype.on.call(this, e, t), i = this._readableState;
                                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, o("on readable", i.length, i.reading), i.length ? O(this) : i.reading || r.nextTick(M, this))), n
                                }, P.prototype.addListener = P.prototype.on, P.prototype.removeListener = function (e, t) {
                                    var n = a.prototype.removeListener.call(this, e, t);
                                    return "readable" === e && r.nextTick(L, this), n
                                }, P.prototype.removeAllListeners = function (e) {
                                    var t = a.prototype.removeAllListeners.apply(this, arguments);
                                    return "readable" !== e && void 0 !== e || r.nextTick(L, this), t
                                }, P.prototype.resume = function () {
                                    var e = this._readableState;
                                    return e.flowing || (o("resume"), e.flowing = !e.readableListening, function (e, t) {
                                        t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(N, e, t))
                                    }(this, e)), e.paused = !1, this
                                }, P.prototype.pause = function () {
                                    return o("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (o("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                                }, P.prototype.wrap = function (e) {
                                    var t = this, r = this._readableState, n = !1;
                                    for (var i in e.on("end", (function () {
                                        if (o("wrapped end"), r.decoder && !r.ended) {
                                            var e = r.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    })), e.on("data", (function (i) {
                                        o("wrapped data"), r.decoder && (i = r.decoder.write(i)), (!r.objectMode || null != i) && (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))
                                    })), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
                                        return function () {
                                            return e[t].apply(e, arguments)
                                        }
                                    }(i));
                                    for (var s = 0; s < E.length; s++) e.on(E[s], this.emit.bind(this, E[s]));
                                    return this._read = function (t) {
                                        o("wrapped _read", t), n && (n = !1, e.resume())
                                    }, this
                                }, "function" == typeof Symbol && (P.prototype[Symbol.asyncIterator] = function () {
                                    return void 0 === f && (f = e("./internal/streams/async_iterator")), f(this)
                                }), Object.defineProperty(P.prototype, "readableHighWaterMark", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._readableState.highWaterMark
                                    }
                                }), Object.defineProperty(P.prototype, "readableBuffer", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._readableState && this._readableState.buffer
                                    }
                                }), Object.defineProperty(P.prototype, "readableFlowing", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._readableState.flowing
                                    },
                                    set: function (e) {
                                        this._readableState && (this._readableState.flowing = e)
                                    }
                                }), P._fromList = D, Object.defineProperty(P.prototype, "readableLength", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._readableState.length
                                    }
                                }), "function" == typeof Symbol && (P.from = function (t, r) {
                                    return void 0 === p && (p = e("./internal/streams/from")), p(P, t, r)
                                })
                            }).call(this)
                        }).call(this, e("_process"), void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../errors": 62,
                        "./_stream_duplex": 63,
                        "./internal/streams/async_iterator": 68,
                        "./internal/streams/buffer_list": 69,
                        "./internal/streams/destroy": 70,
                        "./internal/streams/from": 72,
                        "./internal/streams/state": 74,
                        "./internal/streams/stream": 75,
                        _process: 57,
                        buffer: 17,
                        events: 22,
                        inherits: 24,
                        "string_decoder/": 79,
                        util: 16
                    }],
                    66: [function (e, t, r) {
                        t.exports = c;
                        var n = e("../errors").codes, i = n.ERR_METHOD_NOT_IMPLEMENTED, o = n.ERR_MULTIPLE_CALLBACK,
                            s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING, a = n.ERR_TRANSFORM_WITH_LENGTH_0,
                            u = e("./_stream_duplex");

                        function c(e) {
                            if (!(this instanceof c)) return new c(e);
                            u.call(this, e), this._transformState = {
                                afterTransform: function (e, t) {
                                    var r = this._transformState;
                                    r.transforming = !1;
                                    var n = r.writecb;
                                    if (null === n) return this.emit("error", new o);
                                    r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                                    var i = this._readableState;
                                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                                }.bind(this),
                                needTransform: !1,
                                transforming: !1,
                                writecb: null,
                                writechunk: null,
                                writeencoding: null
                            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", l)
                        }

                        function l() {
                            var e = this;
                            "function" != typeof this._flush || this._readableState.destroyed ? h(this, null, null) : this._flush((function (t, r) {
                                h(e, t, r)
                            }))
                        }

                        function h(e, t, r) {
                            if (t) return e.emit("error", t);
                            if (null != r && e.push(r), e._writableState.length) throw new a;
                            if (e._transformState.transforming) throw new s;
                            return e.push(null)
                        }

                        e("inherits")(c, u), c.prototype.push = function (e, t) {
                            return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
                        }, c.prototype._transform = function (e, t, r) {
                            r(new i("_transform()"))
                        }, c.prototype._write = function (e, t, r) {
                            var n = this._transformState;
                            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                                var i = this._readableState;
                                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                            }
                        }, c.prototype._read = function (e) {
                            var t = this._transformState;
                            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                        }, c.prototype._destroy = function (e, t) {
                            u.prototype._destroy.call(this, e, (function (e) {
                                t(e)
                            }))
                        }
                    }, {"../errors": 62, "./_stream_duplex": 63, inherits: 24}],
                    67: [function (e, t, n) {
                        (function (r, n) {
                            (function () {
                                function i(e) {
                                    var t = this;
                                    this.next = null, this.entry = null, this.finish = function () {
                                        !function (e, t, r) {
                                            var n = e.entry;
                                            for (e.entry = null; n;) {
                                                var i = n.callback;
                                                t.pendingcb--, i(void 0), n = n.next
                                            }
                                            t.corkedRequestsFree.next = e
                                        }(t, e)
                                    }
                                }

                                var o;
                                t.exports = P, P.WritableState = S;
                                var s, a = {deprecate: e("util-deprecate")}, u = e("./internal/streams/stream"),
                                    c = e("buffer").Buffer, l = n.Uint8Array || function () {
                                    }, h = e("./internal/streams/destroy"),
                                    f = e("./internal/streams/state").getHighWaterMark, p = e("../errors").codes,
                                    d = p.ERR_INVALID_ARG_TYPE, v = p.ERR_METHOD_NOT_IMPLEMENTED,
                                    g = p.ERR_MULTIPLE_CALLBACK, y = p.ERR_STREAM_CANNOT_PIPE,
                                    m = p.ERR_STREAM_DESTROYED, b = p.ERR_STREAM_NULL_VALUES,
                                    w = p.ERR_STREAM_WRITE_AFTER_END, _ = p.ERR_UNKNOWN_ENCODING, k = h.errorOrDestroy;

                                function E() {
                                }

                                function S(t, n, s) {
                                    o = o || e("./_stream_duplex"), t = t || {}, "boolean" != typeof s && (s = n instanceof o), this.objectMode = !!t.objectMode, s && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = f(this, t, "writableHighWaterMark", s), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                    var a = !1 === t.decodeStrings;
                                    this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                                        !function (e, t) {
                                            var n = e._writableState, i = n.sync, o = n.writecb;
                                            if ("function" != typeof o) throw new g;
                                            if (function (e) {
                                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                                            }(n), t) !function (e, t, n, i, o) {
                                                --t.pendingcb, n ? (r.nextTick(o, i), r.nextTick(C, e, t), e._writableState.errorEmitted = !0, k(e, i)) : (o(i), e._writableState.errorEmitted = !0, k(e, i), C(e, t))
                                            }(e, n, i, t, o); else {
                                                var s = T(n) || e.destroyed;
                                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || A(e, n), i ? r.nextTick(x, e, n, s, o) : x(e, n, s, o)
                                            }
                                        }(n, e)
                                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
                                }

                                function P(t) {
                                    var r = this instanceof (o = o || e("./_stream_duplex"));
                                    if (!r && !s.call(P, this)) return new P(t);
                                    this._writableState = new S(t, this, r), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), u.call(this)
                                }

                                function I(e, t, r, n, i, o, s) {
                                    t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new m("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
                                }

                                function x(e, t, r, n) {
                                    r || function (e, t) {
                                        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                                    }(e, t), t.pendingcb--, n(), C(e, t)
                                }

                                function A(e, t) {
                                    t.bufferProcessing = !0;
                                    var r = t.bufferedRequest;
                                    if (e._writev && r && r.next) {
                                        var n = t.bufferedRequestCount, o = new Array(n), s = t.corkedRequestsFree;
                                        s.entry = r;
                                        for (var a = 0, u = !0; r;) o[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
                                        o.allBuffers = u, I(e, t, !0, t.length, o, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
                                    } else {
                                        for (; r;) {
                                            var c = r.chunk, l = r.encoding, h = r.callback;
                                            if (I(e, t, !1, t.objectMode ? 1 : c.length, c, l, h), r = r.next, t.bufferedRequestCount--, t.writing) break
                                        }
                                        null === r && (t.lastBufferedRequest = null)
                                    }
                                    t.bufferedRequest = r, t.bufferProcessing = !1
                                }

                                function T(e) {
                                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                                }

                                function O(e, t) {
                                    e._final((function (r) {
                                        t.pendingcb--, r && k(e, r), t.prefinished = !0, e.emit("prefinish"), C(e, t)
                                    }))
                                }

                                function C(e, t) {
                                    var n = T(t);
                                    if (n && (function (e, t) {
                                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, r.nextTick(O, e, t)))
                                    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                        var i = e._readableState;
                                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                                    }
                                    return n
                                }

                                e("inherits")(P, u), S.prototype.getBuffer = function () {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                }, function () {
                                    try {
                                        Object.defineProperty(S.prototype, "buffer", {
                                            get: a.deprecate((function () {
                                                return this.getBuffer()
                                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {
                                    }
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (s = Function.prototype[Symbol.hasInstance], Object.defineProperty(P, Symbol.hasInstance, {
                                    value: function (e) {
                                        return !!s.call(this, e) || this === P && e && e._writableState instanceof S
                                    }
                                })) : s = function (e) {
                                    return e instanceof this
                                }, P.prototype.pipe = function () {
                                    k(this, new y)
                                }, P.prototype.write = function (e, t, n) {
                                    var i, o = this._writableState, s = !1,
                                        a = !o.objectMode && (i = e, c.isBuffer(i) || i instanceof l);
                                    return a && !c.isBuffer(e) && (e = function (e) {
                                        return c.from(e)
                                    }(e)), "function" == typeof t && (n = t, t = null), a ? t = "buffer" : t || (t = o.defaultEncoding), "function" != typeof n && (n = E), o.ending ? function (e, t) {
                                        var n = new w;
                                        k(e, n), r.nextTick(t, n)
                                    }(this, n) : (a || function (e, t, n, i) {
                                        var o;
                                        return null === n ? o = new b : "string" == typeof n || t.objectMode || (o = new d("chunk", ["string", "Buffer"], n)), !o || (k(e, o), r.nextTick(i, o), !1)
                                    }(this, o, e, n)) && (o.pendingcb++, s = function (e, t, r, n, i, o) {
                                        if (!r) {
                                            var s = function (e, t, r) {
                                                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = c.from(t, r)), t
                                            }(t, n, i);
                                            n !== s && (r = !0, i = "buffer", n = s)
                                        }
                                        var a = t.objectMode ? 1 : n.length;
                                        t.length += a;
                                        var u = t.length < t.highWaterMark;
                                        if (u || (t.needDrain = !0), t.writing || t.corked) {
                                            var l = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: n,
                                                encoding: i,
                                                isBuf: r,
                                                callback: o,
                                                next: null
                                            }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else I(e, t, !1, a, n, i, o);
                                        return u
                                    }(this, o, a, e, t, n)), s
                                }, P.prototype.cork = function () {
                                    this._writableState.corked++
                                }, P.prototype.uncork = function () {
                                    var e = this._writableState;
                                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
                                }, P.prototype.setDefaultEncoding = function (e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new _(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(P.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(P.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState.highWaterMark
                                    }
                                }), P.prototype._write = function (e, t, r) {
                                    r(new v("_write()"))
                                }, P.prototype._writev = null, P.prototype.end = function (e, t, n) {
                                    var i = this._writableState;
                                    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function (e, t, n) {
                                        t.ending = !0, C(e, t), n && (t.finished ? r.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
                                    }(this, i, n), this
                                }, Object.defineProperty(P.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function () {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(P.prototype, "destroyed", {
                                    enumerable: !1, get: function () {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    }, set: function (e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), P.prototype.destroy = h.destroy, P.prototype._undestroy = h.undestroy, P.prototype._destroy = function (e, t) {
                                    t(e)
                                }
                            }).call(this)
                        }).call(this, e("_process"), void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../errors": 62,
                        "./_stream_duplex": 63,
                        "./internal/streams/destroy": 70,
                        "./internal/streams/state": 74,
                        "./internal/streams/stream": 75,
                        _process: 57,
                        buffer: 17,
                        inherits: 24,
                        "util-deprecate": 82
                    }],
                    68: [function (e, t, r) {
                        (function (r) {
                            (function () {
                                var n;

                                function i(e, t, r) {
                                    return t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r, e
                                }

                                var o = e("./end-of-stream"), s = Symbol("lastResolve"), a = Symbol("lastReject"),
                                    u = Symbol("error"), c = Symbol("ended"), l = Symbol("lastPromise"),
                                    h = Symbol("handlePromise"), f = Symbol("stream");

                                function p(e, t) {
                                    return {value: e, done: t}
                                }

                                function d(e) {
                                    var t = e[s];
                                    if (null !== t) {
                                        var r = e[f].read();
                                        null !== r && (e[l] = null, e[s] = null, e[a] = null, t(p(r, !1)))
                                    }
                                }

                                var v = Object.getPrototypeOf((function () {
                                })), g = Object.setPrototypeOf((i(n = {
                                    get stream() {
                                        return this[f]
                                    }, next: function () {
                                        var e = this, t = this[u];
                                        if (null !== t) return Promise.reject(t);
                                        if (this[c]) return Promise.resolve(p(void 0, !0));
                                        if (this[f].destroyed) return new Promise((function (t, n) {
                                            r.nextTick((function () {
                                                e[u] ? n(e[u]) : t(p(void 0, !0))
                                            }))
                                        }));
                                        var n, i = this[l];
                                        if (i) n = new Promise(function (e, t) {
                                            return function (r, n) {
                                                e.then((function () {
                                                    t[c] ? r(p(void 0, !0)) : t[h](r, n)
                                                }), n)
                                            }
                                        }(i, this)); else {
                                            var o = this[f].read();
                                            if (null !== o) return Promise.resolve(p(o, !1));
                                            n = new Promise(this[h])
                                        }
                                        return this[l] = n, n
                                    }
                                }, Symbol.asyncIterator, (function () {
                                    return this
                                })), i(n, "return", (function () {
                                    var e = this;
                                    return new Promise((function (t, r) {
                                        e[f].destroy(null, (function (e) {
                                            e ? r(e) : t(p(void 0, !0))
                                        }))
                                    }))
                                })), n), v);
                                t.exports = function (e) {
                                    var t, n = Object.create(g, (i(t = {}, f, {
                                        value: e,
                                        writable: !0
                                    }), i(t, s, {value: null, writable: !0}), i(t, a, {
                                        value: null,
                                        writable: !0
                                    }), i(t, u, {
                                        value: null,
                                        writable: !0
                                    }), i(t, c, {
                                        value: e._readableState.endEmitted,
                                        writable: !0
                                    }), i(t, h, {
                                        value: function (e, t) {
                                            var r = n[f].read();
                                            r ? (n[l] = null, n[s] = null, n[a] = null, e(p(r, !1))) : (n[s] = e, n[a] = t)
                                        }, writable: !0
                                    }), t));
                                    return n[l] = null, o(e, (function (e) {
                                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                            var t = n[a];
                                            return null !== t && (n[l] = null, n[s] = null, n[a] = null, t(e)), void (n[u] = e)
                                        }
                                        var r = n[s];
                                        null !== r && (n[l] = null, n[s] = null, n[a] = null, r(p(void 0, !0))), n[c] = !0
                                    })), e.on("readable", function (e) {
                                        r.nextTick(d, e)
                                    }.bind(null, n)), n
                                }
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {"./end-of-stream": 71, _process: 57}],
                    69: [function (e, t, r) {
                        function n(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }))), r.push.apply(r, n)
                            }
                            return r
                        }

                        function i(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }

                        function o(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }

                        var s = e("buffer").Buffer, a = e("util").inspect, u = a && a.custom || "inspect";
                        t.exports = function () {
                            function e() {
                                !function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.head = null, this.tail = null, this.length = 0
                            }

                            var t, r;
                            return t = e, (r = [{
                                key: "push", value: function (e) {
                                    var t = {data: e, next: null};
                                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                }
                            }, {
                                key: "unshift", value: function (e) {
                                    var t = {data: e, next: this.head};
                                    0 === this.length && (this.tail = t), this.head = t, ++this.length
                                }
                            }, {
                                key: "shift", value: function () {
                                    if (0 !== this.length) {
                                        var e = this.head.data;
                                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                    }
                                }
                            }, {
                                key: "clear", value: function () {
                                    this.head = this.tail = null, this.length = 0
                                }
                            }, {
                                key: "join", value: function (e) {
                                    if (0 === this.length) return "";
                                    for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                                    return r
                                }
                            }, {
                                key: "concat", value: function (e) {
                                    if (0 === this.length) return s.alloc(0);
                                    for (var t, r, n, i = s.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, r = i, n = a, s.prototype.copy.call(t, r, n), a += o.data.length, o = o.next;
                                    return i
                                }
                            }, {
                                key: "consume", value: function (e, t) {
                                    var r;
                                    return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                                }
                            }, {
                                key: "first", value: function () {
                                    return this.head.data
                                }
                            }, {
                                key: "_getString", value: function (e) {
                                    var t = this.head, r = 1, n = t.data;
                                    for (e -= n.length; t = t.next;) {
                                        var i = t.data, o = e > i.length ? i.length : e;
                                        if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
                                            o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                                            break
                                        }
                                        ++r
                                    }
                                    return this.length -= r, n
                                }
                            }, {
                                key: "_getBuffer", value: function (e) {
                                    var t = s.allocUnsafe(e), r = this.head, n = 1;
                                    for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                                        var i = r.data, o = e > i.length ? i.length : e;
                                        if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                                            o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                                            break
                                        }
                                        ++n
                                    }
                                    return this.length -= n, t
                                }
                            }, {
                                key: u, value: function (e, t) {
                                    return a(this, function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? n(Object(r), !0).forEach((function (t) {
                                                i(e, t, r[t])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            }))
                                        }
                                        return e
                                    }({}, t, {depth: 0, customInspect: !1}))
                                }
                            }]) && o(t.prototype, r), e
                        }()
                    }, {buffer: 17, util: 16}],
                    70: [function (e, t, r) {
                        (function (e) {
                            (function () {
                                function r(e, t) {
                                    i(e, t), n(e)
                                }

                                function n(e) {
                                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                                }

                                function i(e, t) {
                                    e.emit("error", t)
                                }

                                t.exports = {
                                    destroy: function (t, o) {
                                        var s = this, a = this._readableState && this._readableState.destroyed,
                                            u = this._writableState && this._writableState.destroyed;
                                        return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(i, this, t)) : e.nextTick(i, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function (t) {
                                            !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(n, s) : (s._writableState.errorEmitted = !0, e.nextTick(r, s, t)) : e.nextTick(r, s, t) : o ? (e.nextTick(n, s), o(t)) : e.nextTick(n, s)
                                        })), this)
                                    }, undestroy: function () {
                                        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                    }, errorOrDestroy: function (e, t) {
                                        var r = e._readableState, n = e._writableState;
                                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                    }
                                }
                            }).call(this)
                        }).call(this, e("_process"))
                    }, {_process: 57}],
                    71: [function (e, t, r) {
                        var n = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

                        function i() {
                        }

                        t.exports = function e(t, r, o) {
                            if ("function" == typeof r) return e(t, null, r);
                            r || (r = {}), o = function (e) {
                                var t = !1;
                                return function () {
                                    if (!t) {
                                        t = !0;
                                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                        e.apply(this, n)
                                    }
                                }
                            }(o || i);
                            var s = r.readable || !1 !== r.readable && t.readable,
                                a = r.writable || !1 !== r.writable && t.writable, u = function () {
                                    t.writable || l()
                                }, c = t._writableState && t._writableState.finished, l = function () {
                                    a = !1, c = !0, s || o.call(t)
                                }, h = t._readableState && t._readableState.endEmitted, f = function () {
                                    s = !1, h = !0, a || o.call(t)
                                }, p = function (e) {
                                    o.call(t, e)
                                }, d = function () {
                                    var e;
                                    return s && !h ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : a && !c ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
                                }, v = function () {
                                    t.req.on("finish", l)
                                };
                            return function (e) {
                                return e.setHeader && "function" == typeof e.abort
                            }(t) ? (t.on("complete", l), t.on("abort", d), t.req ? v() : t.on("request", v)) : a && !t._writableState && (t.on("end", u), t.on("close", u)), t.on("end", f), t.on("finish", l), !1 !== r.error && t.on("error", p), t.on("close", d), function () {
                                t.removeListener("complete", l), t.removeListener("abort", d), t.removeListener("request", v), t.req && t.req.removeListener("finish", l), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", l), t.removeListener("end", f), t.removeListener("error", p), t.removeListener("close", d)
                            }
                        }
                    }, {"../../../errors": 62}],
                    72: [function (e, t, r) {
                        t.exports = function () {
                            throw new Error("Readable.from is not available in the browser")
                        }
                    }, {}],
                    73: [function (e, t, r) {
                        var n, i = e("../../../errors").codes, o = i.ERR_MISSING_ARGS, s = i.ERR_STREAM_DESTROYED;

                        function a(e) {
                            if (e) throw e
                        }

                        function u(e) {
                            e()
                        }

                        function c(e, t) {
                            return e.pipe(t)
                        }

                        t.exports = function () {
                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            var l, h = function (e) {
                                return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
                            }(r);
                            if (Array.isArray(r[0]) && (r = r[0]), r.length < 2) throw new o("streams");
                            var f = r.map((function (t, i) {
                                var o = i < r.length - 1;
                                return function (t, r, i, o) {
                                    o = function (e) {
                                        var t = !1;
                                        return function () {
                                            t || (t = !0, e.apply(void 0, arguments))
                                        }
                                    }(o);
                                    var a = !1;
                                    t.on("close", (function () {
                                        a = !0
                                    })), void 0 === n && (n = e("./end-of-stream")), n(t, {
                                        readable: r,
                                        writable: i
                                    }, (function (e) {
                                        if (e) return o(e);
                                        a = !0, o()
                                    }));
                                    var u = !1;
                                    return function (e) {
                                        if (!a && !u) return u = !0, function (e) {
                                            return e.setHeader && "function" == typeof e.abort
                                        }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void o(e || new s("pipe"))
                                    }
                                }(t, o, i > 0, (function (e) {
                                    l || (l = e), e && f.forEach(u), o || (f.forEach(u), h(l))
                                }))
                            }));
                            return r.reduce(c)
                        }
                    }, {"../../../errors": 62, "./end-of-stream": 71}],
                    74: [function (e, t, r) {
                        var n = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
                        t.exports = {
                            getHighWaterMark: function (e, t, r, i) {
                                var o = function (e, t, r) {
                                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                                }(t, i, r);
                                if (null != o) {
                                    if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
                                    return Math.floor(o)
                                }
                                return e.objectMode ? 16 : 16384
                            }
                        }
                    }, {"../../../errors": 62}],
                    75: [function (e, t, r) {
                        t.exports = e("events").EventEmitter
                    }, {events: 22}],
                    76: [function (e, t, r) {
                        (r = t.exports = e("./lib/_stream_readable.js")).Stream = r, r.Readable = r, r.Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js"), r.finished = e("./lib/internal/streams/end-of-stream.js"), r.pipeline = e("./lib/internal/streams/pipeline.js")
                    }, {
                        "./lib/_stream_duplex.js": 63,
                        "./lib/_stream_passthrough.js": 64,
                        "./lib/_stream_readable.js": 65,
                        "./lib/_stream_transform.js": 66,
                        "./lib/_stream_writable.js": 67,
                        "./lib/internal/streams/end-of-stream.js": 71,
                        "./lib/internal/streams/pipeline.js": 73
                    }],
                    77: [function (e, t, r) {
                        var n = e("buffer"), i = n.Buffer;

                        function o(e, t) {
                            for (var r in e) t[r] = e[r]
                        }

                        function s(e, t, r) {
                            return i(e, t, r)
                        }

                        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, r), r.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function (e, t, r) {
                            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                            return i(e, t, r)
                        }, s.alloc = function (e, t, r) {
                            if ("number" != typeof e) throw new TypeError("Argument must be a number");
                            var n = i(e);
                            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                        }, s.allocUnsafe = function (e) {
                            if ("number" != typeof e) throw new TypeError("Argument must be a number");
                            return i(e)
                        }, s.allocUnsafeSlow = function (e) {
                            if ("number" != typeof e) throw new TypeError("Argument must be a number");
                            return n.SlowBuffer(e)
                        }
                    }, {buffer: 17}],
                    78: [function (e, t, r) {
                        t.exports = function (e) {
                            var t, r = e._readableState;
                            return r ? r.objectMode || "number" == typeof e._duplexState ? e.read() : e.read((t = r).buffer.length ? t.buffer.head ? t.buffer.head.data.length : t.buffer[0].length : t.length) : null
                        }
                    }, {}],
                    79: [function (e, t, r) {
                        var n = e("safe-buffer").Buffer, i = n.isEncoding || function (e) {
                            switch ((e = "" + e) && e.toLowerCase()) {
                                case"hex":
                                case"utf8":
                                case"utf-8":
                                case"ascii":
                                case"binary":
                                case"base64":
                                case"ucs2":
                                case"ucs-2":
                                case"utf16le":
                                case"utf-16le":
                                case"raw":
                                    return !0;
                                default:
                                    return !1
                            }
                        };

                        function o(e) {
                            var t;
                            switch (this.encoding = function (e) {
                                var t = function (e) {
                                    if (!e) return "utf8";
                                    for (var t; ;) switch (e) {
                                        case"utf8":
                                        case"utf-8":
                                            return "utf8";
                                        case"ucs2":
                                        case"ucs-2":
                                        case"utf16le":
                                        case"utf-16le":
                                            return "utf16le";
                                        case"latin1":
                                        case"binary":
                                            return "latin1";
                                        case"base64":
                                        case"ascii":
                                        case"hex":
                                            return e;
                                        default:
                                            if (t) return;
                                            e = ("" + e).toLowerCase(), t = !0
                                    }
                                }(e);
                                if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                                return t || e
                            }(e), this.encoding) {
                                case"utf16le":
                                    this.text = u, this.end = c, t = 4;
                                    break;
                                case"utf8":
                                    this.fillLast = a, t = 4;
                                    break;
                                case"base64":
                                    this.text = l, this.end = h, t = 3;
                                    break;
                                default:
                                    return this.write = f, void (this.end = p)
                            }
                            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
                        }

                        function s(e) {
                            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                        }

                        function a(e) {
                            var t = this.lastTotal - this.lastNeed, r = function (e, t, r) {
                                if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                                if (e.lastNeed > 1 && t.length > 1) {
                                    if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                                }
                            }(this, e);
                            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
                        }

                        function u(e, t) {
                            if ((e.length - t) % 2 == 0) {
                                var r = e.toString("utf16le", t);
                                if (r) {
                                    var n = r.charCodeAt(r.length - 1);
                                    if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                                }
                                return r
                            }
                            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                        }

                        function c(e) {
                            var t = e && e.length ? this.write(e) : "";
                            if (this.lastNeed) {
                                var r = this.lastTotal - this.lastNeed;
                                return t + this.lastChar.toString("utf16le", 0, r)
                            }
                            return t
                        }

                        function l(e, t) {
                            var r = (e.length - t) % 3;
                            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                        }

                        function h(e) {
                            var t = e && e.length ? this.write(e) : "";
                            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                        }

                        function f(e) {
                            return e.toString(this.encoding)
                        }

                        function p(e) {
                            return e && e.length ? this.write(e) : ""
                        }

                        r.StringDecoder = o, o.prototype.write = function (e) {
                            if (0 === e.length) return "";
                            var t, r;
                            if (this.lastNeed) {
                                if (void 0 === (t = this.fillLast(e))) return "";
                                r = this.lastNeed, this.lastNeed = 0
                            } else r = 0;
                            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                        }, o.prototype.end = function (e) {
                            var t = e && e.length ? this.write(e) : "";
                            return this.lastNeed ? t + "�" : t
                        }, o.prototype.text = function (e, t) {
                            var r = function (e, t, r) {
                                var n = t.length - 1;
                                if (n < r) return 0;
                                var i = s(t[n]);
                                return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                            }(this, e, t);
                            if (!this.lastNeed) return e.toString("utf8", t);
                            this.lastTotal = r;
                            var n = e.length - (r - this.lastNeed);
                            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                        }, o.prototype.fillLast = function (e) {
                            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                        }
                    }, {"safe-buffer": 77}],
                    80: [function (e, t, r) {
                        var n = e("punycode"), i = e("./util");

                        function o() {
                            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                        }

                        r.parse = b, r.resolve = function (e, t) {
                            return b(e, !1, !0).resolve(t)
                        }, r.resolveObject = function (e, t) {
                            return e ? b(e, !1, !0).resolveObject(t) : t
                        }, r.format = function (e) {
                            return i.isString(e) && (e = b(e)), e instanceof o ? e.format() : o.prototype.format.call(e)
                        }, r.Url = o;
                        var s = /^([a-z0-9.+-]+:)/i, a = /:[0-9]*$/, u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                            c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                            l = ["'"].concat(c), h = ["%", "/", "?", ";", "#"].concat(l), f = ["/", "?", "#"],
                            p = /^[+a-z0-9A-Z_-]{0,63}$/, d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                            v = {javascript: !0, "javascript:": !0}, g = {javascript: !0, "javascript:": !0}, y = {
                                http: !0,
                                https: !0,
                                ftp: !0,
                                gopher: !0,
                                file: !0,
                                "http:": !0,
                                "https:": !0,
                                "ftp:": !0,
                                "gopher:": !0,
                                "file:": !0
                            }, m = e("querystring");

                        function b(e, t, r) {
                            if (e && i.isObject(e) && e instanceof o) return e;
                            var n = new o;
                            return n.parse(e, t, r), n
                        }

                        o.prototype.parse = function (e, t, r) {
                            if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + S(e));
                            var o = e.indexOf("?"), a = -1 !== o && o < e.indexOf("#") ? "?" : "#", c = e.split(a);
                            c[0] = c[0].replace(/\\/g, "/");
                            var b = e = c.join(a);
                            if (b = b.trim(), !r && 1 === e.split("#").length) {
                                var w = u.exec(b);
                                if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? m.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                            }
                            var _ = s.exec(b);
                            if (_) {
                                var k = (_ = _[0]).toLowerCase();
                                this.protocol = k, b = b.substr(_.length)
                            }
                            if (r || _ || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                                var E = "//" === b.substr(0, 2);
                                !E || _ && g[_] || (b = b.substr(2), this.slashes = !0)
                            }
                            if (!g[_] && (E || _ && !y[_])) {
                                for (var P, I, x = -1, A = 0; A < f.length; A++) -1 !== (T = b.indexOf(f[A])) && (-1 === x || T < x) && (x = T);
                                for (-1 !== (I = -1 === x ? b.lastIndexOf("@") : b.lastIndexOf("@", x)) && (P = b.slice(0, I), b = b.slice(I + 1), this.auth = decodeURIComponent(P)), x = -1, A = 0; A < h.length; A++) {
                                    var T;
                                    -1 !== (T = b.indexOf(h[A])) && (-1 === x || T < x) && (x = T)
                                }
                                -1 === x && (x = b.length), this.host = b.slice(0, x), b = b.slice(x), this.parseHost(), this.hostname = this.hostname || "";
                                var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                                if (!O) for (var C = this.hostname.split(/\./), R = (A = 0, C.length); A < R; A++) {
                                    var B = C[A];
                                    if (B && !B.match(p)) {
                                        for (var L = "", M = 0, N = B.length; M < N; M++) B.charCodeAt(M) > 127 ? L += "x" : L += B[M];
                                        if (!L.match(p)) {
                                            var j = C.slice(0, A), D = C.slice(A + 1), U = B.match(d);
                                            U && (j.push(U[1]), D.unshift(U[2])), D.length && (b = "/" + D.join(".") + b), this.hostname = j.join(".");
                                            break
                                        }
                                    }
                                }
                                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = n.toASCII(this.hostname));
                                var q = this.port ? ":" + this.port : "", F = this.hostname || "";
                                this.host = F + q, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
                            }
                            if (!v[k]) for (A = 0, R = l.length; A < R; A++) {
                                var Q = l[A];
                                if (-1 !== b.indexOf(Q)) {
                                    var V = encodeURIComponent(Q);
                                    V === Q && (V = escape(Q)), b = b.split(Q).join(V)
                                }
                            }
                            var W = b.indexOf("#");
                            -1 !== W && (this.hash = b.substr(W), b = b.slice(0, W));
                            var K = b.indexOf("?");
                            if (-1 !== K ? (this.search = b.substr(K), this.query = b.substr(K + 1), t && (this.query = m.parse(this.query)), b = b.slice(0, K)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                                q = this.pathname || "";
                                var z = this.search || "";
                                this.path = q + z
                            }
                            return this.href = this.format(), this
                        }, o.prototype.format = function () {
                            var e = this.auth || "";
                            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                            var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", o = !1, s = "";
                            this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (s = m.stringify(this.query));
                            var a = this.search || s && "?" + s || "";
                            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), t + o + (r = r.replace(/[?#]/g, (function (e) {
                                return encodeURIComponent(e)
                            }))) + (a = a.replace("#", "%23")) + n
                        }, o.prototype.resolve = function (e) {
                            return this.resolveObject(b(e, !1, !0)).format()
                        }, o.prototype.resolveObject = function (e) {
                            if (i.isString(e)) {
                                var t = new o;
                                t.parse(e, !1, !0), e = t
                            }
                            for (var r = new o, n = Object.keys(this), s = 0; s < n.length; s++) {
                                var a = n[s];
                                r[a] = this[a]
                            }
                            if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                            if (e.slashes && !e.protocol) {
                                for (var u = Object.keys(e), c = 0; c < u.length; c++) {
                                    var l = u[c];
                                    "protocol" !== l && (r[l] = e[l])
                                }
                                return y[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                            }
                            if (e.protocol && e.protocol !== r.protocol) {
                                if (!y[e.protocol]) {
                                    for (var h = Object.keys(e), f = 0; f < h.length; f++) {
                                        var p = h[f];
                                        r[p] = e[p]
                                    }
                                    return r.href = r.format(), r
                                }
                                if (r.protocol = e.protocol, e.host || g[e.protocol]) r.pathname = e.pathname; else {
                                    for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift());) ;
                                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/")
                                }
                                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                                    var v = r.pathname || "", m = r.search || "";
                                    r.path = v + m
                                }
                                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                            }
                            var b = r.pathname && "/" === r.pathname.charAt(0),
                                w = e.host || e.pathname && "/" === e.pathname.charAt(0),
                                _ = w || b || r.host && e.pathname, k = _,
                                E = r.pathname && r.pathname.split("/") || [],
                                S = (d = e.pathname && e.pathname.split("/") || [], r.protocol && !y[r.protocol]);
                            if (S && (r.hostname = "", r.port = null, r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), _ = _ && ("" === d[0] || "" === E[0])), w) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, E = d; else if (d.length) E || (E = []), E.pop(), E = E.concat(d), r.search = e.search, r.query = e.query; else if (!i.isNullOrUndefined(e.search)) return S && (r.hostname = r.host = E.shift(), (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), r.search = e.search, r.query = e.query, i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
                            if (!E.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                            for (var P = E.slice(-1)[0], I = (r.host || e.host || E.length > 1) && ("." === P || ".." === P) || "" === P, x = 0, A = E.length; A >= 0; A--) "." === (P = E[A]) ? E.splice(A, 1) : ".." === P ? (E.splice(A, 1), x++) : x && (E.splice(A, 1), x--);
                            if (!_ && !k) for (; x--; x) E.unshift("..");
                            !_ || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), I && "/" !== E.join("/").substr(-1) && E.push("");
                            var T, O = "" === E[0] || E[0] && "/" === E[0].charAt(0);
                            return S && (r.hostname = r.host = O ? "" : E.length ? E.shift() : "", (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())), (_ = _ || r.host && E.length) && !O && E.unshift(""), E.length ? r.pathname = E.join("/") : (r.pathname = null, r.path = null), i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                        }, o.prototype.parseHost = function () {
                            var e = this.host, t = a.exec(e);
                            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                        }
                    }, {"./util": 81, punycode: 58, querystring: 61}],
                    81: [function (e, t, r) {
                        t.exports = {
                            isString: function (e) {
                                return "string" == typeof e
                            }, isObject: function (e) {
                                return "object" === S(e) && null !== e
                            }, isNull: function (e) {
                                return null === e
                            }, isNullOrUndefined: function (e) {
                                return null == e
                            }
                        }
                    }, {}],
                    82: [function (e, t, n) {
                        (function (e) {
                            (function () {
                                function r(t) {
                                    try {
                                        if (!e.localStorage) return !1
                                    } catch (e) {
                                        return !1
                                    }
                                    var r = e.localStorage[t];
                                    return null != r && "true" === String(r).toLowerCase()
                                }

                                t.exports = function (e, t) {
                                    if (r("noDeprecation")) return e;
                                    var n = !1;
                                    return function () {
                                        if (!n) {
                                            if (r("throwDeprecation")) throw new Error(t);
                                            r("traceDeprecation"), n = !0
                                        }
                                        return e.apply(this, arguments)
                                    }
                                }
                            }).call(this)
                        }).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    83: [function (e, t, r) {
                        t.exports = function e(t, r) {
                            if (t && r) return e(t)(r);
                            if ("function" != typeof t) throw new TypeError("need wrapper function");
                            return Object.keys(t).forEach((function (e) {
                                n[e] = t[e]
                            })), n;

                            function n() {
                                for (var e = new Array(arguments.length), r = 0; r < e.length; r++) e[r] = arguments[r];
                                var n = t.apply(this, e), i = e[e.length - 1];
                                return "function" == typeof n && n !== i && Object.keys(i).forEach((function (e) {
                                    n[e] = i[e]
                                })), n
                            }
                        }
                    }, {}],
                    84: [function (e, t, r) {
                        t.exports = function (e) {
                            e.prototype[Symbol.iterator] = u().mark((function e() {
                                var t;
                                return u().wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t = this.head;
                                        case 1:
                                            if (!t) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 4, t.value;
                                        case 4:
                                            t = t.next, e.next = 1;
                                            break;
                                        case 7:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))
                        }
                    }, {}],
                    85: [function (e, t, r) {
                        function n(e) {
                            var t = this;
                            if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function (e) {
                                t.push(e)
                            })); else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
                            return t
                        }

                        function i(e, t, r) {
                            var n = t === e.head ? new a(r, null, t, e) : new a(r, t, t.next, e);
                            return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n
                        }

                        function o(e, t) {
                            e.tail = new a(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
                        }

                        function s(e, t) {
                            e.head = new a(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
                        }

                        function a(e, t, r, n) {
                            if (!(this instanceof a)) return new a(e, t, r, n);
                            this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
                        }

                        t.exports = n, n.Node = a, n.create = n, n.prototype.removeNode = function (e) {
                            if (e.list !== this) throw new Error("removing node which does not belong to this list");
                            var t = e.next, r = e.prev;
                            return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
                        }, n.prototype.unshiftNode = function (e) {
                            if (e !== this.head) {
                                e.list && e.list.removeNode(e);
                                var t = this.head;
                                e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
                            }
                        }, n.prototype.pushNode = function (e) {
                            if (e !== this.tail) {
                                e.list && e.list.removeNode(e);
                                var t = this.tail;
                                e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
                            }
                        }, n.prototype.push = function () {
                            for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
                            return this.length
                        }, n.prototype.unshift = function () {
                            for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
                            return this.length
                        }, n.prototype.pop = function () {
                            if (this.tail) {
                                var e = this.tail.value;
                                return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
                            }
                        }, n.prototype.shift = function () {
                            if (this.head) {
                                var e = this.head.value;
                                return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
                            }
                        }, n.prototype.forEach = function (e, t) {
                            t = t || this;
                            for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next
                        }, n.prototype.forEachReverse = function (e, t) {
                            t = t || this;
                            for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev
                        }, n.prototype.get = function (e) {
                            for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
                            if (t === e && null !== r) return r.value
                        }, n.prototype.getReverse = function (e) {
                            for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
                            if (t === e && null !== r) return r.value
                        }, n.prototype.map = function (e, t) {
                            t = t || this;
                            for (var r = new n, i = this.head; null !== i;) r.push(e.call(t, i.value, this)), i = i.next;
                            return r
                        }, n.prototype.mapReverse = function (e, t) {
                            t = t || this;
                            for (var r = new n, i = this.tail; null !== i;) r.push(e.call(t, i.value, this)), i = i.prev;
                            return r
                        }, n.prototype.reduce = function (e, t) {
                            var r, n = this.head;
                            if (arguments.length > 1) r = t; else {
                                if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                                n = this.head.next, r = this.head.value
                            }
                            for (var i = 0; null !== n; i++) r = e(r, n.value, i), n = n.next;
                            return r
                        }, n.prototype.reduceReverse = function (e, t) {
                            var r, n = this.tail;
                            if (arguments.length > 1) r = t; else {
                                if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                                n = this.tail.prev, r = this.tail.value
                            }
                            for (var i = this.length - 1; null !== n; i--) r = e(r, n.value, i), n = n.prev;
                            return r
                        }, n.prototype.toArray = function () {
                            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
                            return e
                        }, n.prototype.toArrayReverse = function () {
                            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
                            return e
                        }, n.prototype.slice = function (e, t) {
                            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                            var r = new n;
                            if (t < e || t < 0) return r;
                            e < 0 && (e = 0), t > this.length && (t = this.length);
                            for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
                            for (; null !== o && i < t; i++, o = o.next) r.push(o.value);
                            return r
                        }, n.prototype.sliceReverse = function (e, t) {
                            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                            var r = new n;
                            if (t < e || t < 0) return r;
                            e < 0 && (e = 0), t > this.length && (t = this.length);
                            for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
                            for (; null !== o && i > e; i--, o = o.prev) r.push(o.value);
                            return r
                        }, n.prototype.splice = function (e, t) {
                            e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
                            for (var r = 0, n = this.head; null !== n && r < e; r++) n = n.next;
                            var o = [];
                            for (r = 0; n && r < t; r++) o.push(n.value), n = this.removeNode(n);
                            for (null === n && (n = this.tail), n !== this.head && n !== this.tail && (n = n.prev), r = 0; r < (arguments.length <= 2 ? 0 : arguments.length - 2); r++) n = i(this, n, r + 2 < 2 || arguments.length <= r + 2 ? void 0 : arguments[r + 2]);
                            return o
                        }, n.prototype.reverse = function () {
                            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                                var n = r.prev;
                                r.prev = r.next, r.next = n
                            }
                            return this.head = t, this.tail = e, this
                        };
                        try {
                            e("./iterator.js")(n)
                        } catch (e) {
                        }
                    }, {"./iterator.js": 84}]
                }, {}, [12])(12)
            }, "object" === S(t) && void 0 !== e ? e.exports = s() : (i = [], void 0 === (o = "function" == typeof (n = s) ? n.apply(t, i) : n) || (e.exports = o))
        }).call(this, r("7d1531389"))
    }, "231c3ab61": function (e, t, r) {
        "use strict";
        (function (e) {
            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(t => Object.getOwnPropertyDescriptor(e, t).enumerable)), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(t => {
                        f(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(t => {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function o() {
                o = () => e;
                var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || ((e, t, r) => {
                        e[t] = r.value
                    }), i = "function" == typeof Symbol ? Symbol : {}, s = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";

                function c(e, t, r) {
                    return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
                }

                try {
                    c({}, "")
                } catch (e) {
                    c = (e, t, r) => e[t] = r
                }

                function l(e, t, r, i) {
                    var o = t && t.prototype instanceof p ? t : p, s = Object.create(o.prototype), a = new I(i || []);
                    return n(s, "_invoke", {value: k(e, r, a)}), s
                }

                function h(e, t, r) {
                    try {
                        return {type: "normal", arg: e.call(t, r)}
                    } catch (e) {
                        return {type: "throw", arg: e}
                    }
                }

                e.wrap = l;
                var f = {};

                function p() {
                }

                function d() {
                }

                function v() {
                }

                var g = {};
                c(g, s, (function () {
                    return this
                }));
                var y = Object.getPrototypeOf, m = y && y(y(x([])));
                m && m !== t && r.call(m, s) && (g = m);
                var b = v.prototype = p.prototype = Object.create(g);

                function w(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        c(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    function i(n, o, s, a) {
                        var u = h(e[n], e, o);
                        if ("throw" !== u.type) {
                            var c = u.arg, l = c.value;
                            return l && "object" == typeof l && r.call(l, "__await") ? t.resolve(l.__await).then(e => {
                                i("next", e, s, a)
                            }, e => {
                                i("throw", e, s, a)
                            }) : t.resolve(l).then(e => {
                                c.value = e, s(c)
                            }, e => i("throw", e, s, a))
                        }
                        a(u.arg)
                    }

                    var o;
                    n(this, "_invoke", {
                        value: (e, r) => {
                            function n() {
                                return new t((t, n) => {
                                    i(e, r, t, n)
                                })
                            }

                            return o = o ? o.then(n, n) : n()
                        }
                    })
                }

                function k(e, t, r) {
                    var n = "suspendedStart";
                    return (i, o) => {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === i) throw o;
                            return {value: void 0, done: !0}
                        }
                        for (r.method = i, r.arg = o; ;) {
                            var s = r.delegate;
                            if (s) {
                                var a = E(s, r);
                                if (a) {
                                    if (a === f) continue;
                                    return a
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = h(e, t, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                return {value: u.arg, done: r.done}
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function E(e, t) {
                    var r = t.method, n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), f;
                    var i = h(n, e.iterator, t.arg);
                    if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, f;
                    var o = i.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function S(e) {
                    var t = {tryLoc: e[0]};
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function P(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{tryLoc: "root"}], e.forEach(S, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[s];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, i = function t() {
                                for (; ++n < e.length;) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                            return i.next = i
                        }
                    }
                    return {next: A}
                }

                function A() {
                    return {value: void 0, done: !0}
                }

                return d.prototype = v, n(b, "constructor", {
                    value: v,
                    configurable: !0
                }), n(v, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = c(v, u, "GeneratorFunction"), e.isGeneratorFunction = e => {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = e => (Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, c(e, u, "GeneratorFunction")), e.prototype = Object.create(b), e), e.awrap = e => ({__await: e}), w(_.prototype), c(_.prototype, a, (function () {
                    return this
                })), e.AsyncIterator = _, e.async = (t, r, n, i, o) => {
                    void 0 === o && (o = Promise);
                    var s = new _(l(t, r, n, i), o);
                    return e.isGeneratorFunction(r) ? s : s.next().then(e => e.done ? e.value : s.next())
                }, w(b), c(b, u, "Generator"), c(b, s, (function () {
                    return this
                })), c(b, "toString", () => "[object Generator]"), e.keys = e => {
                    var t = Object(e), r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(), function e() {
                        for (; r.length;) {
                            var n = r.pop();
                            if (n in t) return e.value = n, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
                }, e.values = x, I.prototype = {
                    constructor: I, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(P), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i], s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var a = r.call(o, "catchLoc"), u = r.call(o, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(s)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), P(r), f
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    P(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, t, r) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e => typeof e : e => e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e)(e)
            }

            function a(e, t, r, n, i, o, s) {
                try {
                    var a = e[o](s), u = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(n, i)
            }

            function u(e) {
                return function () {
                    var t = this, r = arguments;
                    return new Promise((n, i) => {
                        var o = e.apply(t, r);

                        function s(e) {
                            a(o, n, i, s, u, "next", e)
                        }

                        function u(e) {
                            a(o, n, i, s, u, "throw", e)
                        }

                        s(void 0)
                    })
                }
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p(n.key), n)
                }
            }

            function h(e, t, r) {
                return t && l(e.prototype, t), r && l(e, r), Object.defineProperty(e, "prototype", {writable: !1}), e
            }

            function f(e, t, r) {
                return (t = p(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p(e) {
                var t = function (e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t);
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            r.d(t, "a", (function () {
                return d
            })), r.d(t, "b", (function () {
                return we
            }));
            var d, v = "wss://mu.y.qq.com/ws/handshake", g = {
                keepalive: 45,
                protocolVersion: 5,
                properties: {
                    authenticationMethod: void 0,
                    authenticationData: void 0,
                    userProperties: {tmeAppID: "qqmusic", business: "", hashTag: "", clientTag: ""}
                },
                clientId: ""
            }, y = {properties: {userProperties: {authorization: "tmelogin", pubsub: "multicast"}}};
            (e => {
                e.UNICAST = "unicast", e.MULTICAST = "multicast", e.BROADCAST = "broadcast"
            })(d || (d = {}));
            var m, b, w = {156: "Use another server", 157: "Server moved"};

            function _(e, t) {
                return new Promise(e => {
                    var r = new XMLHttpRequest;
                    r.open("POST", "https://u6.y.qq.com/cgi-bin/musics.fcg", !0), r.timeout = 2e4, r.onreadystatechange = () => {
                        var t, n;
                        if (r && 4 === r.readyState && (0 !== r.status || r.responseURL && 0 === r.responseURL.indexOf("file:"))) {
                            r.status >= 200 && r.status <= 300 || 304 === r.status || 0 === r.status || (t = -r.status), n = r.response;
                            var i = JSON.parse(n);
                            e(t ? {err: n} : {res: i})
                        }
                    };
                    var n = {};
                    t.forEach((e, t) => {
                        n["req_".concat(t)] = e
                    }), r.send(JSON.stringify(n))
                })
            }

            function k(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = u(o().mark((function e(t) {
                    var r, n, i, s, a, u, c, l, h, f, p;
                    return o().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _(0, [{
                                    module: "music.goms.report",
                                    method: "config",
                                    param: {userID: t}
                                }]);
                            case 2:
                                if (s = e.sent, a = s.res, !(u = s.err)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(u));
                            case 7:
                                if (0 !== (null == a || null === (r = a.req_0) || void 0 === r ? void 0 : r.code)) {
                                    e.next = 11;
                                    break
                                }
                                return c = a.req_0.data, l = c.arriveInterval, h = c.elapsePercent, f = c.failInterval, p = {
                                    arriveInterval: l,
                                    elapsePercent: h,
                                    failInterval: f
                                }, e.abrupt("return", Promise.resolve(p));
                            case 11:
                                return e.abrupt("return", Promise.reject((null == a || null === (n = a.req_0) || void 0 === n ? void 0 : n.Msg) || "Get Ws Report Config Error:".concat(null == a || null === (i = a.req_0) || void 0 === i ? void 0 : i.code)));
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function S(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = u(o().mark((function e(t) {
                    var r, n, i, s, a, u, c, l, h, f, p;
                    return o().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _(0, [{module: "music.goms.report", method: "arrive", param: t}]);
                            case 2:
                                if (s = e.sent, a = s.res, !(u = s.err)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(u));
                            case 7:
                                if (0 !== (null == a || null === (r = a.req_0) || void 0 === r ? void 0 : r.code)) {
                                    e.next = 11;
                                    break
                                }
                                return c = a.req_0.data, l = c.arriveInterval, h = c.elapsePercent, f = c.failInterval, p = {
                                    arriveInterval: l,
                                    elapsePercent: h,
                                    failInterval: f
                                }, e.abrupt("return", Promise.resolve(p));
                            case 11:
                                return e.abrupt("return", Promise.reject((null == a || null === (n = a.req_0) || void 0 === n ? void 0 : n.msgs) || "Ws Timing Report Error:".concat(null == a || null === (i = a.req_0) || void 0 === i ? void 0 : i.code)));
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = u(o().mark((function e(t) {
                    var r, n, i, s, a, u;
                    return o().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _(0, [{module: "music.goms.report", method: "elapse", param: t}]);
                            case 2:
                                if (s = e.sent, a = s.res, !(u = s.err)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(u));
                            case 7:
                                if (0 !== (null == a || null === (r = a.req_0) || void 0 === r ? void 0 : r.code)) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve(a.req_0.data.elapsePercent));
                            case 9:
                                return e.abrupt("return", Promise.reject((null == a || null === (n = a.req_0) || void 0 === n ? void 0 : n.msg) || "Ws Error Report Error:".concat(null == a || null === (i = a.req_0) || void 0 === i ? void 0 : i.code)));
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function A(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = u(o().mark((function e(t) {
                    var r, n, i, s, a, u;
                    return o().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _(0, [{module: "music.goms.report", method: "fail", param: t}]);
                            case 2:
                                if (s = e.sent, a = s.res, !(u = s.err)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(u));
                            case 7:
                                if (0 !== (null == a || null === (r = a.req_0) || void 0 === r ? void 0 : r.code)) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve(a.req_0.data.failInterval));
                            case 9:
                                return e.abrupt("return", Promise.reject((null == a || null === (n = a.req_0) || void 0 === n ? void 0 : n.msg) || "Ws Error Report Error:".concat(null == a || null === (i = a.req_0) || void 0 === i ? void 0 : i.code)));
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function O(e) {
                if (!e) return 0;
                for (var t = 0, r = 0; r < e.length; r++) t = (37 * t + e.charCodeAt(r)) % 100;
                return t
            }

            (e => {
                e.QoS0 = "0", e.QoS1 = "1"
            })(m || (m = {})), (e => {
                e[e.connect = 1] = "connect", e[e.connack = 2] = "connack", e[e.publish = 3] = "publish", e[e.puback = 4] = "puback", e[e.pubrec = 5] = "pubrec", e[e.pubrel = 6] = "pubrel", e[e.pubcomp = 7] = "pubcomp", e[e.subscribe = 8] = "subscribe", e[e.suback = 9] = "suback", e[e.unsubscribe = 10] = "unsubscribe", e[e.unsuback = 11] = "unsuback", e[e.pingreq = 12] = "pingreq", e[e.pingresp = 13] = "pingresp", e[e.disconnect = 14] = "disconnect"
            })(b || (b = {}));
            var C = new (function () {
                function e() {
                    c(this, e), f(this, "logger", () => {
                    }), f(this, "reportBuffer", []), f(this, "errorBuffer", []), f(this, "reportConfig", {
                        arriveInterval: 60,
                        elapsePercent: .1,
                        failInterval: 0
                    }), f(this, "userId", ""), f(this, "needSamplingReport", !1), f(this, "timingReportTimer", 0), f(this, "errorReportTimer", 0), f(this, "timeDiff", 0)
                }

                var t, r, n, s, a, l;
                return h(e, [{
                    key: "init", value: (l = u(o().mark((function e(t) {
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getWsConfigs();
                                case 2:
                                    this.initConfigs(), this.getReportBuffer();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e) {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "initTimeCalibration", value: function (e) {
                        var t = e.subscribeStart, r = e.subscribeEnd, n = e.serverTime, i = Date.now();
                        if (t && r && n) {
                            var o = Math.floor((r - t) / 2);
                            this.timeDiff = i - (n + o), this.logger("~~ QmSocket:: Time calibrate timeDiff:", this.timeDiff)
                        }
                    }
                }, {
                    key: "report", value: (a = u(o().mark((function e(t, r) {
                        var n, i, s, a, u, c, l, h, f, p;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = t.topic, s = t.properties, !this.needSamplingReport) {
                                        e.next = 15;
                                        break
                                    }
                                    return c = {
                                        topic: i,
                                        userID: this.userId,
                                        publishTime: parseInt(null == s || null === (a = s.userProperties) || void 0 === a ? void 0 : a.publishTime, 10),
                                        brokerPublishTime: parseInt(null == s || null === (u = s.userProperties) || void 0 === u ? void 0 : u.brokerPublishTime, 10),
                                        clientRecvTime: Date.now() - this.timeDiff,
                                        clientSendTime: Date.now() - this.timeDiff
                                    }, e.prev = 3, this.logger("~~ QmSocket:: sampling report:", c), e.next = 7, I(c);
                                case 7:
                                    l = e.sent, this.reportConfig.elapsePercent = l, this.needSamplingReport = O(this.userId) < 100 * l, e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(3);
                                case 15:
                                    h = r.channelID, f = r.clientId, p = {
                                        channelID: h || "",
                                        clientID: f || "",
                                        msgID: null == s || null === (n = s.userProperties) || void 0 === n ? void 0 : n.msgID,
                                        time: Date.now() - this.timeDiff
                                    }, this.reportBuffer.push(p), localStorage.setItem("wsReport", JSON.stringify(this.reportBuffer)), this.setTimeIntervals();
                                case 20:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[3, 12]])
                    }))), function (e, t) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "reportAck", value: function (e) {
                        var t = i(i({}, e), {}, {
                            clientRecvTime: Date.now() - this.timeDiff,
                            clientSendTime: Date.now() - this.timeDiff
                        });
                        this.logger("~~ QmSocket:: ack report:", t), function (e) {
                            _(0, [{module: "music.goms.logic", method: "ack", param: e}])
                        }(t)
                    }
                }, {
                    key: "reportError", value: (s = u(o().mark((function e(t, r) {
                        var n, i, s, a, u, c, l, h, f;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    s = t.topic, a = void 0 === s ? "" : s, u = t.properties, c = t.reasonCode, l = t.cmd, h = r.channelID, f = {
                                        topic: a,
                                        userID: this.userId,
                                        channelID: h || "",
                                        msgID: "".concat(null == u || null === (n = u.userProperties) || void 0 === n ? void 0 : n.msgID),
                                        code: c || -1,
                                        packetType: +b[l]
                                    }, this.errorBuffer.push(f), 0 === (null === (i = this.reportConfig) || void 0 === i ? void 0 : i.failInterval) && this.doErrorReport();
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e, t) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "doErrorReport", value: (n = u(o().mark((function e() {
                        var t;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.errorBuffer.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2, this.logger("~~ QmSocket:: error report:", this.errorBuffer), e.next = 6, A({items: this.errorBuffer});
                                case 6:
                                    t = e.sent, this.reportConfig.failInterval = t, this.errorBuffer = [], e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(2);
                                case 14:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[2, 11]])
                    }))), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getWsConfigs", value: (r = u(o().mark((function e() {
                        var t;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, this.logger("~~ QmSocket:: get WS config, uin: ".concat("")), e.next = 5, k("");
                                case 5:
                                    t = e.sent, this.reportConfig = t, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 9]])
                    }))), function () {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "initConfigs", value: function () {
                        this.userId = "";
                        var e = O(this.userId), t = this.reportConfig.elapsePercent;
                        this.needSamplingReport = e < 100 * t, this.setTimeIntervals(), this.setErrorTimeIntervals()
                    }
                }, {
                    key: "getReportBuffer", value: function () {
                        try {
                            var e = localStorage.getItem("wsReport");
                            if (e) try {
                                this.reportBuffer = JSON.parse(e), localStorage.removeItem("wsReport")
                            } catch (e) {
                            }
                        } catch (e) {
                        }
                    }
                }, {
                    key: "setTimeIntervals", value: function () {
                        var e = this, t = this.reportConfig.arriveInterval;
                        if (0 === t) this.doReport(); else if (t > 0) {
                            if (this.timingReportTimer) return;
                            this.timingReportTimer = window.setTimeout(() => {
                                e.logger("~~ QmSocket:: reportTimer"), e.doReport(), e.timingReportTimer = 0
                            }, 1e3 * t)
                        }
                    }
                }, {
                    key: "setErrorTimeIntervals", value: function () {
                        var e = this, t = this.reportConfig.failInterval;
                        if (0 === t) this.doErrorReport(); else if (t > 0) {
                            if (this.errorReportTimer) return;
                            this.errorReportTimer = window.setTimeout(() => {
                                e.logger("~~ QmSocket:: errReportTimer"), e.doErrorReport(), e.errorReportTimer = 0
                            }, 1e3 * t)
                        }
                    }
                }, {
                    key: "doReport", value: (t = u(o().mark((function e() {
                        var t, r;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== this.reportBuffer.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = {
                                        userID: this.userId || "",
                                        items: this.reportBuffer
                                    }, e.prev = 3, this.logger("~~ QmSocket:: timing report:", t), e.next = 7, S(t);
                                case 7:
                                    r = e.sent, this.reportConfig = r, e.next = 15;
                                    break;
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(3), e.abrupt("return");
                                case 15:
                                    this.reportBuffer = [], localStorage.removeItem("wsReport");
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[3, 11]])
                    }))), function () {
                        return t.apply(this, arguments)
                    })
                }]), e
            }());

            function R() {
                return (R = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            var B = document, L = navigator, M = setTimeout, N = window, j = window.performance;
            (j && j.timing || {}).navigationStart;
            var D = navigator.userAgent, U = JSON.stringify, q = "complete" === B.readyState, F = q ? null : [];
            N.addEventListener("load", () => {
                q = !0, F.forEach(e => e())
            });
            var Q = /\bQQMusic\//i.test(D);

            function V(e) {
                return e && e.toLocaleLowerCase()
            }

            var W, K, z = location;
            (K = D.match(/QQMUSIC\/(\d[\.\d]*)/i)) ? W = "music" : (K = D.match(/MicroMessenger\/(\d[\.\d]*)/i)) ? W = "weixin" : (K = D.match(/(?:iPad|iPhone|iPod).*? (?:IPad)?QQ\/([\d\.]+)/) || D.match(/\bV1_AND_SQI?_(?:[\d\.]+)(?:.*? QQ\/([\d\.]+))?/)) ? W = "mqq" : (K = D.match(/\bqmkege\/(\d[\.\d]*)/i)) ? W = "qmkege" : /Qzone\//.test(D) ? W = "qzone" : /\/[\w. ]+MQQBrowser\//i.test(D) ? W = "qqbrowser" : /Weibo\ \(*/i.test(D) && (W = "weibo");
            var H, Y, G = W || "other", J = K ? K[1] : "";
            (Y = D.match(/(?:Android);?[\s\/]+([\d.]+)?/)) ? H = "android" : (Y = D.match(/(?:iPad).*OS\s([\d_]+)/) || D.match(/(?:iPod)(?:.*OS\s([\d_]+))?/) || D.match(/(?:iPhone\sOS)\s([\d_]+)/)) && (H = "ios");
            var X = H || "", $ = Y ? Y[1] : "";

            function Z(e) {
                var t = B.cookie.match(RegExp("(^|;\\s*)" + e + "=([^;]*)(;|$)"));
                return t ? t[2] : ""
            }

            var ee, te, re, ne, ie, oe = "ios" === X, se = Z("login_type") || "0",
                ae = (ee = D.match(/\bNetType\/(\w+)/i)) ? ee[1] : "unknown", ue = "getDeviceInfo", ce = "getGuid",
                le = {
                    _appid: "qqmusic",
                    _uid: (re = Z("uin") || Z("p_uin") || 0, 2 == Z("login_type") && (re = Z("wxuin") || Z("uin") || 0), re && (re = re.replace(/^o/, ""), !/^\d+$/.test(re) || re < 1e4 ? re = 0 : re.length < 14 && (re = parseInt(re, 10))), re),
                    _platform: oe ? 1 : 11,
                    _account_source: se,
                    _os_version: $ || "",
                    _app_version: J,
                    _channelid: ("channelId", te = z.href.split("#")[0].match(new RegExp("(\\?|&)channelId=(.*?)(#|&|$)", "i")), decodeURIComponent(te ? te[2] : "")),
                    _os: X,
                    _app: G,
                    _opertime: (Date.now() / 1e3 | 0).toString(),
                    _network_type: V(ae)
                }, he = [], fe = function (e, t, r) {
                    Array.isArray(t) ? t.forEach(t => {
                        he.push(R({_key: e, _opertime: (Date.now() / 1e3 | 0).toString()}, t))
                    }) : he.push(R({_key: e, _opertime: (Date.now() / 1e3 | 0).toString()}, t));
                    var n, i = function () {
                        new Promise(e => {
                            if (Q && window.M) {
                                var t = function (e) {
                                    return new Promise(t => {
                                        var r, n;
                                        r = e, n = r => {
                                            e === ue ? (le._mobile_factory = r.modelVersion, le._mobile_type = r.modelVersion, le._os_version = r.systemVersion) : e === ce ? (le._deviceid = r.imei, le._mnc = r.isp) : le._network_type = V(r.type), t()
                                        }, window.M && window.M.client && "function" == typeof window.M.client.invoke && window.M.client.invoke("device", r, {}, e => {
                                            n(e && 0 == e.code && e.data || {})
                                        })
                                    })
                                };
                                Promise.all([t(ue), t(ce), t("getNetworkType")]).then(() => {
                                    e(le)
                                })
                            } else e(le)
                        }).then(e => {
                            !function (e, t) {
                                if (t = U(t), "ios" != X && L.sendBeacon) navigator.sendBeacon(e, t); else {
                                    var r = new XMLHttpRequest;
                                    r.open("POST", e), r.send(t)
                                }
                            }("//stat6.y.qq.com/sdk/fcgi-bin/sdk.fcg", {common: e, items: he}), he.length = 0, ne = 0
                        })
                    };
                    n = () => {
                        ne && clearTimeout(ne), -1 != r ? ne = M(i, r >= 0 ? r : 500) : i()
                    }, q ? n() : F.push(n)
                };
            (e => {
                e[e.INIT = 1] = "INIT", e[e.LONGPOLLING_INIT = 2] = "LONGPOLLING_INIT", e[e.MESSAGE_ERROR = 3] = "MESSAGE_ERROR", e[e.PACKET = 4] = "PACKET", e[e.ERROR = 5] = "ERROR"
            })(ie || (ie = {}));
            var pe, de, ve, ge = function (e) {
                var t = i({cmd: 21, int20: e}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                fe("webcomm", t)
            }, ye = {
                clientId: "", getClientId: (pe = u(o().mark((function e(t) {
                    return o().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!this.clientId) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", this.clientId);
                            case 2:
                                return this.clientId = "".concat(Date.now()).concat(Math.floor(1e4 * Math.random())), e.abrupt("return", this.clientId);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return pe.apply(this, arguments)
                }), isObject: function (e) {
                    return e && "object" === s(e) && !Array.isArray(e)
                }, mergeDeep: function (e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    if (!r.length) return e;
                    var i = r.shift();
                    if (this.isObject(e) && this.isObject(i)) for (var o in i) this.isObject(i[o]) ? (e[o] || Object.assign(e, f({}, o, {})), this.mergeDeep(e[o], i[o])) : Object.assign(e, f({}, o, i[o]));
                    return this.mergeDeep.apply(this, [e].concat(r))
                }, getParam: function (e) {
                    for (var t = window.location.search.substring(1).split("&"), r = 0; r < t.length; r++) {
                        var n = t[r].split("=");
                        if (n[0] === e) return decodeURIComponent(n[1] || "")
                    }
                    return ""
                }
            }, me = r("1b4b22b88").connect;
            (e => {
                e[e.SUCCESS = 0] = "SUCCESS", e[e.ERROR = 1] = "ERROR", e[e.TIMEOUT = 2] = "TIMEOUT", e[e.ABORT = 3] = "ABORT"
            })(de || (de = {})), (e => {
                e[e.WEBSOCKET = 0] = "WEBSOCKET", e[e.LONGPOLLING = 1] = "LONGPOLLING"
            })(ve || (ve = {}));
            var be = function () {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                "1" === ye.getParam("isDev") && (e = console).warn.apply(e, ["----- QmSocketDev::"].concat(r))
            }, we = function () {
                function t(e) {
                    var r = this;
                    c(this, t), f(this, "config", void 0), f(this, "logger", (function () {
                        var e;
                        "1" === ye.getParam("debug") && (e = console).warn.apply(e, arguments)
                    })), f(this, "topics", []), f(this, "socket", void 0), f(this, "userProperties", void 0), f(this, "authenticationMethod", ""), f(this, "wsUrl", v), f(this, "clientId", ""), f(this, "inOrder", !1), f(this, "uin", void 0), f(this, "onMsgCallback", void 0), f(this, "onConnectCallback", void 0), f(this, "onSubscribeCallback", void 0), f(this, "onErrorCallback", void 0), f(this, "timeCalibrationConfig", void 0), f(this, "longpollingXhrMap", {}), f(this, "largestMsgIdMap", {}), f(this, "wsProperties", {}), f(this, "msgReportMap", {}), f(this, "handleMessage", (e, t, n, i) => {
                        var o, s, a;
                        r.logger("~~ QmSocket:: ".concat(i === ve.LONGPOLLING ? "【LongPolling】" : "", "HandleMessage:"), e, t, n);
                        var u, c, l,
                            h = +((null == n || null === (o = n.properties) || void 0 === o || null === (s = o.userProperties) || void 0 === s ? void 0 : s.msgID) || 0);
                        null !== (a = r.msgReportMap) && void 0 !== a && a[h] ? r.msgReportMap[h][i === ve.LONGPOLLING ? "lp" : "ws"] = !0 : r.msgReportMap[h] = {
                            ws: i === ve.WEBSOCKET,
                            lp: i === ve.LONGPOLLING
                        }, i === ve.LONGPOLLING && setTimeout(() => {
                            var t, n;
                            t = r.msgReportMap[h], n = {
                                str1: r.clientId,
                                str2: e,
                                int1: h,
                                int2: null != t && t.ws ? 1 : 0,
                                int3: null != t && t.lp ? 1 : 0
                            }, ge(ie.MESSAGE_ERROR, n), delete r.msgReportMap[h], r.logger("【LongPolling】Report:", n)
                        }, 1e3), r.largestMsgIdMap[e] !== h ? r.inOrder ? null === (u = r.largestMsgIdMap) || void 0 === u || !u[n.topic] || r.largestMsgIdMap[n.topic] <= h ? (r.largestMsgIdMap[n.topic] = h, r.logger("~~ QmSocket:: ".concat(i === ve.LONGPOLLING ? "【LongPolling】" : "", "InOrder MsgCallback(topic/payload/packet):"), e, t, n), null === (c = r.onMsgCallback) || void 0 === c || c.call(r, e, t, n)) : r.logger("~~ QmSocket:: ".concat(i === ve.LONGPOLLING ? "【LongPolling】" : "", "HandleMessage: Discard message packet:"), n, " payload:", t) : (r.largestMsgIdMap[n.topic] = h, r.logger("~~ QmSocket:: ".concat(i === ve.LONGPOLLING ? "【LongPolling】" : "", "NotInOrder MsgCallback(topic/payload/packet):"), e, t, n), null === (l = r.onMsgCallback) || void 0 === l || l.call(r, e, t, n)) : r.logger("~~ QmSocket:: ".concat(i === ve.LONGPOLLING ? "【LongPolling】" : "", "HandleMessage: MsgId already existed, return"))
                    }), this.config = e;
                    var n = e.topics, i = void 0 === n ? [] : n, o = e.uin, s = void 0 === o ? "" : o,
                        a = e.userProperties, u = void 0 === a ? {} : a, l = e.authenticationMethod,
                        h = void 0 === l ? "" : l, p = e.inOrder, d = void 0 !== p && p, g = e.isTest,
                        y = void 0 !== g && g;
                    this.topics = i, this.wsUrl = y ? "wss://test.y.qq.com/ws/handshake" : v, this.clientId = "", this.userProperties = u, this.authenticationMethod = h || "pass", this.inOrder = d, this.uin = s, C.init(e), this.init()
                }

                var r, n;
                return h(t, [{
                    key: "init", value: (n = u(o().mark((function e() {
                        var t, r, n, s, a, u = this, c = arguments;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = c.length > 0 && void 0 !== c[0] ? c[0] : this.wsUrl, this.clientId) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, ye.getClientId(this.config);
                                case 4:
                                    this.clientId = e.sent;
                                case 5:
                                    s = Object.assign({userID: this.uin || this.clientId}, null === (t = g.properties) || void 0 === t ? void 0 : t.userProperties, this.userProperties), a = i(i({}, g), {}, {
                                        properties: i(i({}, g.properties), {}, {
                                            authenticationData: "",
                                            authenticationMethod: this.authenticationMethod || (null === (r = g.properties) || void 0 === r ? void 0 : r.authenticationMethod),
                                            userProperties: s
                                        }), clientId: this.clientId
                                    }), this.wsProperties.clientId = a.clientId, this.largestMsgIdMap = {}, this.socket = me(n, a), this.logger("~~ QmSocket:: topic subscribe: ".concat(JSON.stringify(this.topics))), this.timeCalibrationConfig = {subscribeStart: Date.now()}, this.topics.forEach(e => {
                                        var t,
                                            r = i(i({}, y), {}, {properties: i(i({}, y.properties), {}, {userProperties: i(i({}, null === (t = y.properties) || void 0 === t ? void 0 : t.userProperties), {}, {pubsub: e.pubType})})});
                                        u.socket.subscribe(e.topic, r), e.subscribed = !0
                                    }), this.bindEvent();
                                case 14:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "bindEvent", value: function () {
                        var e = this;
                        this.socket.on("connect", t => {
                            var r, n, i, o, s;
                            e.wsProperties.channelID = (null === (r = t.properties) || void 0 === r || null === (n = r.userProperties) || void 0 === n ? void 0 : n.channelID) || "", e.wsProperties.server = (null === (i = t.properties) || void 0 === i || null === (o = i.userProperties) || void 0 === o ? void 0 : o.server) || "", e.logger("~~ QmSocket:: WS connected", "Property: ".concat(JSON.stringify(e.wsProperties))), null === (s = e.onConnectCallback) || void 0 === s || s.call(e, t)
                        }), this.socket.on("error", (t, r) => {
                            var n;
                            e.logger("~~ QmSocket:: WS error", "Property: ".concat(JSON.stringify(e.wsProperties)), "Packet: ", r), e.errFunc(t, r), null === (n = e.onErrorCallback) || void 0 === n || n.call(e, t)
                        }), this.socket.on("close", () => {
                            e.logger("~~ QmSocket:: WS closed")
                        }), this.socket.on("message", (t, r, n) => {
                            var i, o = r.toString("utf-8");
                            C.report(n, e.wsProperties);
                            var s = n.properties;
                            if ((null == s || null === (i = s.userProperties) || void 0 === i ? void 0 : i.QoS) === m.QoS1) {
                                var a, u, c, l = {
                                    msgID: "".concat(null == s || null === (a = s.userProperties) || void 0 === a ? void 0 : a.msgID),
                                    publishTime: parseInt(null == s || null === (u = s.userProperties) || void 0 === u ? void 0 : u.publishTime, 10),
                                    brokerPublishTime: parseInt(null == s || null === (c = s.userProperties) || void 0 === c ? void 0 : c.brokerPublishTime, 10),
                                    clientRecvTime: Date.now(),
                                    clientSendTime: Date.now()
                                };
                                C.reportAck(l)
                            }
                            var h = {};
                            try {
                                h = JSON.parse(o), e.handleMessage(t, h, n, ve.WEBSOCKET)
                            } catch (r) {
                                e.logger("~~ QmSocket:: topic ".concat(t, " payload parse error"), "Error:", r)
                            }
                        }), this.socket.on("packetreceive", t => {
                            var r, n, i, o;
                            e.logger("~~ QmSocket:: PacketReceive:", t), "suback" === t.cmd && (null === (r = e.onSubscribeCallback) || void 0 === r || r.call(e, t), null !== (n = e.timeCalibrationConfig) && void 0 !== n && n.subscribeEnd || (e.timeCalibrationConfig || (e.timeCalibrationConfig = {}), e.timeCalibrationConfig.subscribeEnd = Date.now(), e.timeCalibrationConfig.serverTime = +((null == t || null === (i = t.properties) || void 0 === i || null === (o = i.userProperties) || void 0 === o ? void 0 : o.timestamp) || 0), C.initTimeCalibration(e.timeCalibrationConfig)))
                        })
                    }
                }, {
                    key: "errFunc", value: (r = u(o().mark((function e(t, r) {
                        var n, i, s;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = null == r ? void 0 : r.reasonCode, !Object.keys(w).includes("".concat(n))) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 4, this.close(!0);
                                case 4:
                                    (s = null == r || null === (i = r.properties) || void 0 === i ? void 0 : i.serverReference) ? this.init("".concat(this.wsUrl, "/").concat(s)) : this.init(), e.next = 9;
                                    break;
                                case 8:
                                    C.reportError(r, this.wsProperties);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e, t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "onMessage", value: function (e) {
                        this.onMsgCallback = e
                    }
                }, {
                    key: "onConnect", value: function (e) {
                        this.onConnectCallback = e
                    }
                }, {
                    key: "onSubscribe", value: function (e) {
                        this.onSubscribeCallback = e
                    }
                }, {
                    key: "onError", value: function (e) {
                        this.onErrorCallback = e
                    }
                }, {
                    key: "unsubscribe", value: function (e) {
                        var t = this;
                        this.logger("~~ QmSocket:: topic unsubscribe: ".concat(JSON.stringify(this.topics)));
                        var r = [];
                        e.forEach(e => {
                            var n = t.topics.find(t => t.topic === e);
                            n ? (t.socket.unsubscribe(e), n.subscribed = !1, t.stopLongPolling(e)) : r.push(e)
                        }), r.length && r.forEach(e => {
                        })
                    }
                }, {
                    key: "subscribeTopics", value: function (e) {
                        var t = this;
                        this.logger("~~ QmSocket:: topic subscribe ".concat(JSON.stringify(this.topics)));
                        var r = [];
                        e.forEach(e => {
                            var n, o = t.topics.find(t => t.topic === e.topic);
                            if (o && o.subscribed) r.push(e); else {
                                var s = i(i({}, y), {}, {properties: i(i({}, y.properties), {}, {userProperties: i(i({}, null === (n = y.properties) || void 0 === n ? void 0 : n.userProperties), {}, {pubsub: e.pubType})})});
                                t.socket.subscribe(e.topic, s), o ? o.subscribed = !0 : t.topics.push(i(i({}, e), {}, {subscribed: !0}))
                            }
                        }), r.length && r.forEach(e => {
                        })
                    }
                }, {
                    key: "close", value: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            r = function () {
                                e.logger("Close: Handle topics: ".concat(JSON.stringify(e.topics.map(e => e.topic)))), e.topics.forEach(t => {
                                    e.stopLongPolling(t.topic), t.subscribed = !1
                                })
                            };
                        return new Promise(n => {
                            t ? e.socket.end(!0, () => {
                                e.logger("~~ QmSocket:: WS force close"), r(), n(!0)
                            }) : e.socket.end(!1, () => {
                                e.logger("~~ QmSocket:: WS close"), r(), n(!0)
                            })
                        })
                    }
                }, {
                    key: "_ajax", value: function (e, t, r) {
                        var n = this, i = new XMLHttpRequest;
                        i.open("POST", e.url, !0), i.timeout = e.timeout, i.setRequestHeader("x-goms-serial", "json"), i.withCredentials = !0, i.responseType = "json", i.onload = () => {
                            i.status >= 200 && i.status < 300 ? (n.logger("~~ QmSocket:: 【LongPolling】LongPolling: XHR Response:", i.response), null == r || r(de.SUCCESS, i.response)) : (n.logger("~~ QmSocket:: 【LongPolling】LongPolling: XHR Error status:", i.status), null == r || r(de.ERROR))
                        }, i.onerror = () => {
                            n.logger("~~ QmSocket:: 【LongPolling】LongPolling: XHR Request error..."), null == r || r(de.ERROR)
                        }, i.ontimeout = () => {
                            n.logger("~~ QmSocket:: 【LongPolling】LongPolling: XHR Request timeout..."), null == r || r(de.TIMEOUT)
                        }, i.onabort = () => {
                            n.logger("~~ QmSocket:: 【LongPolling】LongPolling: XHR Request aborted..."), null == r || r(de.ABORT)
                        };
                        var o = t, s = JSON.stringify(o);
                        return i.send(s), i
                    }
                }, {
                    key: "startLongPolling", value: function (t) {
                        var r, n = this;
                        if (this.topics.some(e => e.topic === t && e.subscribed)) if (null !== (r = this.longpollingXhrMap) && void 0 !== r && r[t]) this.logger("~~ QmSocket:: 【LongPolling】StartLongPolling: 已存在".concat(t, "的长轮询链接，无需重复创建")); else {
                            var i = 0;
                            !function r() {
                                var o, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de.SUCCESS,
                                    a = arguments.length > 1 ? arguments[1] : void 0;
                                if (n.logger("~~ QmSocket:: 【LongPolling】StartLongPolling SendReq(topic/status/res)", t, s, a), null != a && a.packets && s === de.SUCCESS) {
                                    var u = a.packets;
                                    (void 0 === u ? [] : u).forEach(r => {
                                        var i = r.payload, o = void 0 === i ? "" : i, s = r.metadata,
                                            a = e.from(o, "base64").toString();
                                        try {
                                            var u = JSON.parse(a);
                                            n.handleMessage(t, u, {properties: {userProperties: s}}, ve.LONGPOLLING)
                                        } catch (e) {
                                        }
                                    })
                                }
                                var c = null === (o = n.topics) || void 0 === o ? void 0 : o.find(e => e.topic === t);
                                if (be("【LongPolling】SendReq(findTopic):", c), null != c && c.subscribed) {
                                    if ([de.ABORT, de.ERROR].includes(s) || void 0 !== (null == a ? void 0 : a.code) && 0 !== (null == a ? void 0 : a.code)) {
                                        if (n.logger("~~ QmSocket:: 【LongPolling】StartLongPolling SendReq(topic/status/errCount)", t, s, i), i >= 5) return void n.stopLongPolling(t);
                                        i++
                                    }
                                    n.longpollingXhrMap[t] = n._ajax({
                                        url: "1" === ye.getParam("isTest") ? "https://test.y.qq.com/longpolling/api/v1/subscribe" : "https://mu.y.qq.com/longpolling/api/v1/subscribe",
                                        timeout: 59e3
                                    }, {
                                        topicFilter: t,
                                        userID: n.uin || n.userProperties.hashTag,
                                        lastMsgID: (n.largestMsgIdMap[t] || 0).toString(),
                                        clientTag: n.userProperties.clientTag,
                                        hashTag: n.userProperties.hashTag
                                    }, r)
                                }
                            }()
                        } else this.logger("~~ QmSocket:: 【LongPolling】StartLongPolling: QmSocket未订阅topic: ".concat(t, ", 长轮询建立失败"))
                    }
                }, {
                    key: "stopLongPolling", value: function (e) {
                        var t, r;
                        null !== (t = this.longpollingXhrMap) && void 0 !== t && t[e] ? (null === (r = this.longpollingXhrMap[e]) || void 0 === r || r.abort(), this.longpollingXhrMap[e] = null) : this.logger("~~ QmSocket:: 【LongPolling】StopLongPolling: QmSocket未订阅topic: ".concat(e, ", 无可关闭的长轮询"))
                    }
                }, {
                    key: "getSocket", value: function () {
                        return this.socket
                    }
                }, {
                    key: "getWsProperties", value: function () {
                        return this.wsProperties
                    }
                }]), t
            }()
        }).call(this, r("4b1b0067c").Buffer)
    }, "266a1f7c2": function (e, t) {
        e.exports = React
    }, "3a777eb19": function (e, t, r) {
        "use strict";
        r.r(t), function (e) {
            var t = r("155df070c"), n = r("266a1f7c2"), i = r.n(n), o = r("c0b5c3645"), s = r.n(o), a = r("51253eb34"),
                u = r("068279ff7"), c = Object(t.a)(a.a, a.b), l = Object(u.hot)(e)(c);
            s.a[window.__ssrFirstPageData__ ? "hydrate" : "render"](i.a.createElement(l, null), document.getElementById("js_app"))
        }.call(this, r("aa181bac4")(e))
    }, "4b1b0067c": function (e, t, r) {
        "use strict";
        (function (e) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
            var n = r("8f1a72fe1"), i = r("ed646d8db"), o = r("083bc56f9");

            function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(e, t) {
                if (s() < t) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
            }

            function u(e, t, r) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, e)
                }
                return c(this, e, t, r)
            }

            function c(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = f(e, t);
                    return e
                }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | d(t, r), i = (e = a(e, n)).write(t, r);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, r) : function (e, t) {
                    if (u.isBuffer(t)) {
                        var r = 0 | p(t.length);
                        return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : f(e, t);
                        if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(e, t) {
                if (l(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function f(e, t) {
                var r = t.length < 0 ? 0 : 0 | p(t.length);
                e = a(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function p(e) {
                if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }

            function d(e, t) {
                if (u.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return q(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return F(e).length;
                    default:
                        if (n) return q(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function v(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ;) switch (e) {
                    case"hex":
                        return T(this, t, r);
                    case"utf8":
                    case"utf-8":
                        return I(this, t, r);
                    case"ascii":
                        return x(this, t, r);
                    case"latin1":
                    case"binary":
                        return A(this, t, r);
                    case"base64":
                        return P(this, t, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return O(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function g(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function y(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, r, n, i) {
                var o, s = 1, a = e.length, u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }

                if (i) {
                    var l = -1;
                    for (o = r; o < a; o++) if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                        if (-1 === l && (l = o), o - l + 1 === u) return l * s
                    } else -1 !== l && (o -= o - l), l = -1
                } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                    for (var h = !0, f = 0; f < u; f++) if (c(e, o + f) !== c(t, f)) {
                        h = !1;
                        break
                    }
                    if (h) return o
                }
                return -1
            }

            function b(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function w(e, t, r, n) {
                return Q(q(t, e.length - r), e, r, n)
            }

            function _(e, t, r, n) {
                return Q(function (e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function k(e, t, r, n) {
                return _(e, t, r, n)
            }

            function E(e, t, r, n) {
                return Q(F(t), e, r, n)
            }

            function S(e, t, r, n) {
                return Q(function (e, t) {
                    for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(t, e.length - r), e, r, n)
            }

            function P(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function I(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var o, s, a, u, c = e[i], l = null, h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + h <= r) switch (h) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                            break;
                        case 3:
                            o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                            break;
                        case 4:
                            o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                    }
                    null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += h
                }
                return function (e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    var r = "", n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                    return r
                }(n)
            }

            t.Buffer = u, t.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function (e) {
                return e.__proto__ = u.prototype, e
            }, u.from = function (e, t, r) {
                return c(null, e, t, r)
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })), u.alloc = function (e, t, r) {
                return function (e, t, r, n) {
                    return l(t), t <= 0 ? a(e, t) : void 0 !== r ? "string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r) : a(e, t)
                }(null, e, t, r)
            }, u.allocUnsafe = function (e) {
                return h(null, e)
            }, u.allocUnsafeSlow = function (e) {
                return h(null, e)
            }, u.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, u.compare = function (e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i) if (e[i] !== t[i]) {
                    r = e[i], n = t[i];
                    break
                }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function (e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return u.alloc(0);
                var r;
                if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = u.allocUnsafe(t), i = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), i += s.length
                }
                return n
            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                return this
            }, u.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                return this
            }, u.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                return this
            }, u.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : v.apply(this, arguments)
            }, u.prototype.equals = function (e) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }, u.prototype.inspect = function () {
                var e = "", r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, u.prototype.compare = function (e, t, r, n, i) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(n, i), l = e.slice(t, r), h = 0; h < a; ++h) if (c[h] !== l[h]) {
                    o = c[h], s = l[h];
                    break
                }
                return o < s ? -1 : s < o ? 1 : 0
            }, u.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, u.prototype.indexOf = function (e, t, r) {
                return y(this, e, t, r, !0)
            }, u.prototype.lastIndexOf = function (e, t, r) {
                return y(this, e, t, r, !1)
            }, u.prototype.write = function (e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1; ;) switch (n) {
                    case"hex":
                        return b(this, e, t, r);
                    case"utf8":
                    case"utf-8":
                        return w(this, e, t, r);
                    case"ascii":
                        return _(this, e, t, r);
                    case"latin1":
                    case"binary":
                        return k(this, e, t, r);
                    case"base64":
                        return E(this, e, t, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return S(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, u.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };

            function x(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function A(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function T(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = t; o < r; ++o) i += U(e[o]);
                return i
            }

            function O(e, t, r) {
                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function C(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function R(e, t, r, n, i, o) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function B(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function L(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function M(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function N(e, t, r, n, o) {
                return o || M(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4
            }

            function j(e, t, r, n, o) {
                return o || M(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8
            }

            u.prototype.slice = function (e, t) {
                var r, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = u.prototype; else {
                    var i = t - e;
                    r = new u(i, void 0);
                    for (var o = 0; o < i; ++o) r[o] = this[o + e]
                }
                return r
            }, u.prototype.readUIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || C(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, u.prototype.readUIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || C(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, u.prototype.readUInt8 = function (e, t) {
                return t || C(e, 1, this.length), this[e]
            }, u.prototype.readUInt16LE = function (e, t) {
                return t || C(e, 2, this.length), this[e] | this[e + 1] << 8
            }, u.prototype.readUInt16BE = function (e, t) {
                return t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, u.prototype.readUInt32LE = function (e, t) {
                return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, u.prototype.readUInt32BE = function (e, t) {
                return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, u.prototype.readIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || C(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, u.prototype.readIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || C(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, u.prototype.readInt8 = function (e, t) {
                return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, u.prototype.readInt16LE = function (e, t) {
                t || C(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function (e, t) {
                t || C(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function (e, t) {
                return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, u.prototype.readInt32BE = function (e, t) {
                return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, u.prototype.readFloatLE = function (e, t) {
                return t || C(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, u.prototype.readFloatBE = function (e, t) {
                return t || C(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, u.prototype.readDoubleLE = function (e, t) {
                return t || C(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, u.prototype.readDoubleBE = function (e, t) {
                return t || C(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, u.prototype.writeUIntLE = function (e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1, o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, u.prototype.writeUIntBE = function (e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || R(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1, o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, u.prototype.writeUInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, u.prototype.writeUInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
            }, u.prototype.writeUInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
            }, u.prototype.writeUInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4
            }, u.prototype.writeUInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
            }, u.prototype.writeIntLE = function (e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    R(this, e, t, r, i - 1, -i)
                }
                var o = 0, s = 1, a = 0;
                for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, u.prototype.writeIntBE = function (e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    R(this, e, t, r, i - 1, -i)
                }
                var o = r - 1, s = 1, a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, u.prototype.writeInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, u.prototype.writeInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2
            }, u.prototype.writeInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2
            }, u.prototype.writeInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4
            }, u.prototype.writeInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || R(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
            }, u.prototype.writeFloatLE = function (e, t, r) {
                return N(this, e, t, !0, r)
            }, u.prototype.writeFloatBE = function (e, t, r) {
                return N(this, e, t, !1, r)
            }, u.prototype.writeDoubleLE = function (e, t, r) {
                return j(this, e, t, !0, r)
            }, u.prototype.writeDoubleBE = function (e, t, r) {
                return j(this, e, t, !1, r)
            }, u.prototype.copy = function (e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && r < t && t < n) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r]; else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, u.prototype.fill = function (e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var o;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < r; ++o) this[o] = e; else {
                    var s = u.isBuffer(e) ? e : q(new u(e, n).toString()), a = s.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
                }
                return this
            };
            var D = /[^+\/0-9A-Za-z-_]/g;

            function U(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function q(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function F(e) {
                return n.toByteArray(function (e) {
                    if ((e = function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(D, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function Q(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }
        }).call(this, r("7d1531389"))
    }, "51253eb34": function (e, t, r) {
        "use strict";
        r.d(t, "b", (function () {
            return h
        }));
        var n = r("6c4ad67ec"), i = r("266a1f7c2"), o = r.n(i), s = r("231c3ab61"), a = r("e03dca229"),
            u = r("fd6e9c3ee"), c = (r("708db1820"), r("339fff543"));
        r("f8273fae5");

        function l() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            l = function () {
                return t
            };
            var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, i = Object.defineProperty || function (e, t, r) {
                    e[t] = r.value
                }, o = "function" == typeof Symbol ? Symbol : {}, s = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";

            function c(e, t, r) {
                return Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                c({}, "")
            } catch (e) {
                c = function (e, t, r) {
                    return e[t] = r
                }
            }

            function h(e, t, r, n) {
                var o = t && t.prototype instanceof y ? t : y, s = Object.create(o.prototype), a = new O(n || []);
                return i(s, "_invoke", {value: I(e, r, a)}), s
            }

            function f(e, t, r) {
                try {
                    return {type: "normal", arg: e.call(t, r)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            t.wrap = h;
            var p = "suspendedStart", d = "executing", v = "completed", g = {};

            function y() {
            }

            function m() {
            }

            function b() {
            }

            var w = {};
            c(w, s, (function () {
                return this
            }));
            var _ = Object.getPrototypeOf, k = _ && _(_(C([])));
            k && k !== r && n.call(k, s) && (w = k);
            var E = b.prototype = y.prototype = Object.create(w);

            function S(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    c(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function P(e, t) {
                function r(i, o, s, a) {
                    var u = f(e[i], e, o);
                    if ("throw" !== u.type) {
                        var c = u.arg, l = c.value;
                        return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function (e) {
                            r("next", e, s, a)
                        }), (function (e) {
                            r("throw", e, s, a)
                        })) : t.resolve(l).then((function (e) {
                            c.value = e, s(c)
                        }), (function (e) {
                            return r("throw", e, s, a)
                        }))
                    }
                    a(u.arg)
                }

                var o;
                i(this, "_invoke", {
                    value: function (e, n) {
                        function i() {
                            return new t((function (t, i) {
                                r(e, n, t, i)
                            }))
                        }

                        return o = o ? o.then(i, i) : i()
                    }
                })
            }

            function I(t, r, n) {
                var i = p;
                return function (o, s) {
                    if (i === d) throw new Error("Generator is already running");
                    if (i === v) {
                        if ("throw" === o) throw s;
                        return {value: e, done: !0}
                    }
                    for (n.method = o, n.arg = s; ;) {
                        var a = n.delegate;
                        if (a) {
                            var u = x(a, n);
                            if (u) {
                                if (u === g) continue;
                                return u
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (i === p) throw i = v, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = d;
                        var c = f(t, r, n);
                        if ("normal" === c.type) {
                            if (i = n.done ? v : "suspendedYield", c.arg === g) continue;
                            return {value: c.arg, done: n.done}
                        }
                        "throw" === c.type && (i = v, n.method = "throw", n.arg = c.arg)
                    }
                }
            }

            function x(t, r) {
                var n = r.method, i = t.iterator[n];
                if (i === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, x(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), g;
                var o = f(i, t.iterator, r.arg);
                if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;
                var s = o.arg;
                return s ? s.done ? (r[t.resultName] = s.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, g) : s : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g)
            }

            function A(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function T(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function O(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(A, this), this.reset(!0)
            }

            function C(t) {
                if (t || "" === t) {
                    var r = t[s];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1, o = function r() {
                            for (; ++i < t.length;) if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                            return r.value = e, r.done = !0, r
                        };
                        return o.next = o
                    }
                }
                throw new TypeError(typeof t + " is not iterable")
            }

            return m.prototype = b, i(E, "constructor", {value: b, configurable: !0}), i(b, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = c(b, u, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, c(e, u, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, t.awrap = function (e) {
                return {__await: e}
            }, S(P.prototype), c(P.prototype, a, (function () {
                return this
            })), t.AsyncIterator = P, t.async = function (e, r, n, i, o) {
                void 0 === o && (o = Promise);
                var s = new P(h(e, r, n, i), o);
                return t.isGeneratorFunction(r) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, S(E), c(E, u, "Generator"), c(E, s, (function () {
                return this
            })), c(E, "toString", (function () {
                return "[object Generator]"
            })), t.keys = function (e) {
                var t = Object(e), r = [];
                for (var n in t) r.push(n);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, t.values = C, O.prototype = {
                constructor: O, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(T), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;

                    function i(n, i) {
                        return a.type = "throw", a.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                    }

                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var s = this.tryEntries[o], a = s.completion;
                        if ("root" === s.tryLoc) return i("end");
                        if (s.tryLoc <= this.prev) {
                            var u = n.call(s, "catchLoc"), c = n.call(s, "finallyLoc");
                            if (u && c) {
                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                            } else if (u) {
                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var s = o ? o.completion : {};
                    return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), T(r), g
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                T(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, r, n) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = e), g
                }
            }, t
        }

        var h = function () {
            var e = Object(n.a)(l().mark((function e(t) {
                var r, n, i, o, s;
                return l().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.query, n = r.tmeAppID, i = r.ct, o = r.cv, s = r.uid, e.next = 3, Object(a.f)(n, i, o, s);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }();
        t.a = function (e) {
            var t = e.resData, r = t.qrcodeData, h = t.tmeAppID, f = t.ct, p = t.cv, d = t.uid, v = r || {},
                g = v.qrcode, y = v.qrcodeID, m = v.expiresIn, b = Object(i.useState)(g), w = b[0], _ = b[1],
                k = Object(i.useState)(!1), E = k[0], S = k[1], P = Object(i.useState)(""), I = P[0], x = P[1],
                A = Object(i.useState)(!1), T = A[0], O = A[1], C = Object(i.useState)(!1), R = C[0], B = C[1],
                L = Object(i.useRef)(null), M = void 0, N = Object(i.useMemo)((function () {
                    if (null != r && r.webConf) try {
                        var e = JSON.parse(r.webConf), t = e.qrcodeTitle, n = e.qrcodeSubTitle, i = e.qrcodeDesc,
                            o = e.scanSuccessTitle, s = e.scanSuccessSubTitle, a = e.scanSuccessDesc, u = e.scanFailedTitle,
                            c = e.scanFailedSubTitle, l = e.scanFailedDesc, h = e.loginFailedTitle,
                            f = e.loginFailedSubTitle, p = e.loginFailedDesc, d = e.qrcodeExpiredTitle,
                            v = e.qrcodeExpiredSubTitle, g = e.qrcodeExpiredDesc, y = e.noQrcodeTitle,
                            m = e.noQrcodeSubTitle, b = e.noQrcodeDesc;
                        return w ? E ? {title: d, subtitle: v, desc: g} : R ? {
                            title: h,
                            subtitle: f,
                            desc: p
                        } : T ? {title: u, subtitle: c, desc: l} : I ? {title: o, subtitle: s, desc: a} : {
                            title: t,
                            subtitle: n,
                            desc: i
                        } : {title: y, subtitle: m, desc: b}
                    } catch (e) {
                    }
                }), [h, E, I, T, R, w]);
            Object(i.useEffect)((function () {
                j(y), U(m)
            }), [y, m]);
            var j = function () {
                var e = Object(n.a)(l().mark((function e(t) {
                    var r, n, i, o;
                    return l().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                (r = {})["management.qrcode_login/" + t] = {
                                    topicParam: {
                                        topic: "management.qrcode_login/" + t,
                                        pubType: s.a.UNICAST
                                    }, callback: function (e) {
                                        return console.log(e)
                                    }
                                }, n = r, i = Object.values(n).map((function (e) {
                                    return e.topicParam
                                })), o = new s.b({
                                    topics: i,
                                    inOrder: !0,
                                    userProperties: {
                                        business: "management",
                                        hashTag: "" + t,
                                        clientTag: "management.user",
                                        userID: "" + t
                                    },
                                    authenticationMethod: "pass"
                                }), window.console.log("qmSocket", o), null == o || o.onMessage((function (e, t, r) {
                                    var n, i;
                                    window.console.log("onMessage", e, r, t);
                                    var o = null == r || null == (n = r.properties) || null == (n = n.userProperties) ? void 0 : n.type,
                                        s = null == r || null == (i = r.properties) || null == (i = i.userProperties) ? void 0 : i.msgID;
                                    if (null == c.l || Object(c.l)({
                                        element_id: o || "qmSocketMessage",
                                        ext: JSON.stringify({topic: e, msgID: s})
                                    }), "scanned" === o) U(t.expiresIn), (null == t ? void 0 : t.appName) && x(t.appName), L.current = null == t ? void 0 : t.appType, O(!1); else if ("cookies" === o) {
                                        var a;
                                        if (null != t && t.cookies && null != t && t.commConf && Object.keys(t.cookies).length >= 2) if ("20" === f || "6" === f || "19" === f) null == (a = window) || null == (a = a.top) || a.postMessage(JSON.stringify({
                                            code: "qqmusic",
                                            cookies: t.cookies
                                        }), location.origin), null == c.l || Object(c.l)({
                                            element_id: "postMessage",
                                            ext: JSON.stringify({cookies: t.cookies})
                                        }), window.console.log("postMessage"); else if ("24" === f) {
                                            var l;
                                            null == (l = window) || null == (l = l.top) || l.postMessage(JSON.stringify({
                                                code: "qqmusic" === c.b ? "qqmusicConsortia" : "kgConsortia",
                                                cookies: t.cookies
                                            }), "https://platform.tencentmusic.com")
                                        } else "1" === f || "11" === f || "46" === f || "18" === f ? u.client.open("other", "scanLoginResult", {
                                            cookies: t.cookies,
                                            appType: L.current
                                        }) : (Object.keys(t.cookies).forEach((function (e) {
                                            u.cookie.set(e, t.cookies[e].value, t.commConf.domain, t.commConf.path, t.commConf.expires)
                                        })), c.j && (window.location.href = decodeURI(c.j)))
                                    } else "canceled" === o ? (O(!0), x("")) : "loginFailed" === o && B(!0)
                                }));
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), D = function () {
                var e = Object(n.a)(l().mark((function e() {
                    var t, r, n, i, o, s;
                    return l().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(a.f)(h, f, p, d);
                            case 2:
                                t = e.sent, r = t.qrcodeData, i = (n = r || {}).qrcode, o = n.qrcodeID, s = n.expiresIn, _(i), j(o), S(!1), U(s), x(""), O(!1), B(!1), "1" !== f && "11" !== f && "46" !== f || null == c.k || Object(c.k)({element_id: "1021059"});
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), U = function (e) {
                "number" != typeof e || isNaN(e) || (M && clearTimeout(M), M = setTimeout((function () {
                    S((function (e) {
                        return !0, !0
                    }))
                }), 1e3 * e))
            };
            Object(i.useEffect)((function () {
                "1" !== f && "11" !== f && "46" !== f || (u.client.open("ui", "hideMiniPlayer", {}), null == c.l || Object(c.l)({element_id: "5019754"}))
            }), [f]);
            var q, F;
            return q = "1" === f || "11" === f || "46" === f || "18" === f ? {paddingTop: "1rem"} : {}, F = o.a.createElement("div", {
                className: "frmae_qrcode",
                style: q
            }, o.a.createElement("div", {className: "frmae_qrcode__tit"}, (null == N ? void 0 : N.title) || ""), o.a.createElement("div", {className: "frmae_qrcode__qrcode " + (E || I || T || R || !w ? "disable" : "")}, o.a.createElement("img", {
                src: w,
                alt: "",
                className: "frmae_qrcode__qrcode_img"
            }), (E || R || !w) && o.a.createElement("a", {
                href: "javascript:;",
                className: "frmae_qrcode__qrcode_btn",
                onClick: D
            })), o.a.createElement("div", {className: "frmae_qrcode__sub_tit"}, (null == N ? void 0 : N.subtitle) || ""), o.a.createElement("div", {className: "frmae_qrcode__desc"}, (null == N ? void 0 : N.desc) || "")), c.f ? F : o.a.createElement("div", {className: "mod_popup"}, o.a.createElement("div", {className: "popup__mask"}, o.a.createElement("div", {className: "popup__box"}, F)))
        }
    }, "708db1820": function (e, t, r) {
    }, "8f1a72fe1": function (e, t, r) {
        "use strict";
        t.byteLength = function (e) {
            var t = c(e), r = t[0], n = t[1];
            return 3 * (r + n) / 4 - n
        }, t.toByteArray = function (e) {
            var t, r, n = c(e), s = n[0], a = n[1], u = new o(function (e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, s, a)), l = 0, h = a > 0 ? s - 4 : s;
            for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
            2 === a && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[l++] = 255 & t);
            1 === a && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t);
            return u
        }, t.fromByteArray = function (e) {
            for (var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(l(e, s, s + 16383 > a ? a : s + 16383));
            1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return o.join("")
        };
        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

        function c(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function l(e, t, r) {
            for (var i, o, s = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            return s.join("")
        }

        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, c0b5c3645: function (e, t) {
        e.exports = ReactDOM
    }, ed646d8db: function (e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function (e, t, r, n, i) {
            var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, h = r ? i - 1 : 0, f = r ? -1 : 1,
                p = e[t + h];
            for (h += f, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + e[t + h], h += f, l -= 8) ;
            for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e[t + h], h += f, l -= 8) ;
            if (0 === o) o = 1 - c; else {
                if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), o -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n)
        }, t.write = function (e, t, r, n, i, o) {
            var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, h = l >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, d = n ? 1 : -1,
                v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + p] = 255 & a, p += d, a /= 256, i -= 8) ;
            for (s = s << i | a, c += i; c > 0; e[r + p] = 255 & s, p += d, s /= 256, c -= 8) ;
            e[r + p - d] |= 128 * v
        }
    }, f8273fae5: function (e, t) {
        Object.values || (Object.values = function (e) {
            return Object.keys(e).map((function (t) {
                return e[t]
            }))
        })
    }, fd6e9c3ee: function (e, t) {
        e.exports = Music
    }
});