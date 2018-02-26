if (!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function(t, e, n) {
        "use strict";
        function r(t, e) {
            "object" === ("undefined" == typeof t ? "undefined" : i(t)) && (e = t,
            t = void 0),
            e = e || {};
            var n, r = s(t), a = r.source, f = r.id, p = r.path, h = l[f] && p in l[f].nsps, d = e.forceNew || e["force new connection"] || !1 === e.multiplex || h;
            return d ? (u("ignoring socket cache for %s", a),
            n = c(a, e)) : (l[f] || (u("new io instance for %s", a),
            l[f] = c(a, e)),
            n = l[f]),
            r.query && !e.query ? e.query = r.query : e && "object" === i(e.query) && (e.query = o(e.query)),
            n.socket(r.path, e)
        }
        function o(t) {
            var e = [];
            for (var n in t)
                t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e.join("&")
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , s = n(1)
          , a = n(7)
          , c = n(17)
          , u = n(3)("socket.io-client");
        t.exports = e = r;
        var l = e.managers = {};
        e.protocol = a.protocol,
        e.connect = r,
        e.Manager = n(17),
        e.Socket = n(44)
    }
    , function(t, e, n) {
        (function(e) {
            "use strict";
            function r(t, n) {
                var r = t;
                n = n || e.location,
                null == t && (t = n.protocol + "//" + n.host),
                "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
                /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t),
                t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t),
                i("parse %s", t),
                r = o(t)),
                r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
                r.path = r.path || "/";
                var s = r.host.indexOf(":") !== -1
                  , a = s ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + a + ":" + r.port,
                r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port),
                r
            }
            var o = n(2)
              , i = n(3)("socket.io-client:url");
            t.exports = r
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t) {
            var e = t
              , o = t.indexOf("[")
              , i = t.indexOf("]");
            o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
            for (var s = n.exec(t || ""), a = {}, c = 14; c--; )
                a[r[c]] = s[c] || "";
            return o != -1 && i != -1 && (a.source = e,
            a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
            a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
            a.ipv6uri = !0),
            a
        }
    }
    , function(t, e, n) {
        (function(r) {
            function o() {
                return "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function i() {
                var t = arguments
                  , n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
                !n)
                    return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0
                  , i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++,
                    "%c" === t && (i = o))
                }),
                t.splice(i, 0, r),
                t
            }
            function s() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function a(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }
            function c() {
                try {
                    return e.storage.debug
                } catch (t) {}
                if ("undefined" != typeof r && "env"in r)
                    return r.env.DEBUG
            }
            function u() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            e = t.exports = n(5),
            e.log = s,
            e.formatArgs = i,
            e.save = a,
            e.load = c,
            e.useColors = o,
            e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(),
            e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
            ,
            e.enable(c())
        }
        ).call(e, n(4))
    }
    , function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (l === setTimeout)
                return setTimeout(t, 0);
            if ((l === n || !l) && setTimeout)
                return l = setTimeout,
                setTimeout(t, 0);
            try {
                return l(t, 0)
            } catch (e) {
                try {
                    return l.call(null, t, 0)
                } catch (e) {
                    return l.call(this, t, 0)
                }
            }
        }
        function i(t) {
            if (f === clearTimeout)
                return clearTimeout(t);
            if ((f === r || !f) && clearTimeout)
                return f = clearTimeout,
                clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }
        function s() {
            y && h && (y = !1,
            h.length ? d = h.concat(d) : g = -1,
            d.length && a())
        }
        function a() {
            if (!y) {
                var t = o(s);
                y = !0;
                for (var e = d.length; e; ) {
                    for (h = d,
                    d = []; ++g < e; )
                        h && h[g].run();
                    g = -1,
                    e = d.length
                }
                h = null,
                y = !1,
                i(t)
            }
        }
        function c(t, e) {
            this.fun = t,
            this.array = e
        }
        function u() {}
        var l, f, p = t.exports = {};
        !function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                f = r
            }
        }();
        var h, d = [], y = !1, g = -1;
        p.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            d.push(new c(t,e)),
            1 !== d.length || y || o(a)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        p.title = "browser",
        p.browser = !0,
        p.env = {},
        p.argv = [],
        p.version = "",
        p.versions = {},
        p.on = u,
        p.addListener = u,
        p.once = u,
        p.off = u,
        p.removeListener = u,
        p.removeAllListeners = u,
        p.emit = u,
        p.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        p.cwd = function() {
            return "/"
        }
        ,
        p.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        p.umask = function() {
            return 0
        }
    }
    , function(t, e, n) {
        function r() {
            return e.colors[l++ % e.colors.length]
        }
        function o(t) {
            function n() {}
            function o() {
                var t = o
                  , n = +new Date
                  , i = n - (u || n);
                t.diff = i,
                t.prev = u,
                t.curr = n,
                u = n,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = r());
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
                    s[a] = arguments[a];
                s[0] = e.coerce(s[0]),
                "string" != typeof s[0] && (s = ["%o"].concat(s));
                var c = 0;
                s[0] = s[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n)
                        return n;
                    c++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = s[c];
                        n = o.call(t, i),
                        s.splice(c, 1),
                        c--
                    }
                    return n
                }),
                s = e.formatArgs.apply(t, s);
                var l = o.log || e.log || console.log.bind(console);
                l.apply(t, s)
            }
            n.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : n;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var n = (t || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && (t = n[o].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function s() {
            e.enable("")
        }
        function a(t) {
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o.debug = o,
        e.coerce = c,
        e.disable = s,
        e.enable = i,
        e.enabled = a,
        e.humanize = n(6),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var u, l = 0
    }
    , function(t, e) {
        function n(t) {
            if (t = String(t),
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1])
                      , r = (e[2] || "ms").toLowerCase();
                    switch (r) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * l;
                    case "days":
                    case "day":
                    case "d":
                        return n * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * a;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                    }
                }
            }
        }
        function r(t) {
            return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
        }
        function i(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var s = 1e3
          , a = 60 * s
          , c = 60 * a
          , u = 24 * c
          , l = 365.25 * u;
        t.exports = function(t, e) {
            e = e || {};
            var i = typeof t;
            if ("string" === i && t.length > 0)
                return n(t);
            if ("number" === i && isNaN(t) === !1)
                return e.long ? o(t) : r(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }
    , function(t, e, n) {
        function r() {}
        function o(t) {
            var n = ""
              , r = !1;
            return n += t.type,
            e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (n += t.attachments,
            n += "-"),
            t.nsp && "/" != t.nsp && (r = !0,
            n += t.nsp),
            null != t.id && (r && (n += ",",
            r = !1),
            n += t.id),
            null != t.data && (r && (n += ","),
            n += p.stringify(t.data)),
            f("encoded %j as %s", t, n),
            n
        }
        function i(t, e) {
            function n(t) {
                var n = d.deconstructPacket(t)
                  , r = o(n.packet)
                  , i = n.buffers;
                i.unshift(r),
                e(i)
            }
            d.removeBlobs(t, n)
        }
        function s() {
            this.reconstructor = null
        }
        function a(t) {
            var n = {}
              , r = 0;
            if (n.type = Number(t.charAt(0)),
            null == e.types[n.type])
                return l();
            if (e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type) {
                for (var o = ""; "-" != t.charAt(++r) && (o += t.charAt(r),
                r != t.length); )
                    ;
                if (o != Number(o) || "-" != t.charAt(r))
                    throw new Error("Illegal attachments");
                n.attachments = Number(o)
            }
            if ("/" == t.charAt(r + 1))
                for (n.nsp = ""; ++r; ) {
                    var i = t.charAt(r);
                    if ("," == i)
                        break;
                    if (n.nsp += i,
                    r == t.length)
                        break
                }
            else
                n.nsp = "/";
            var s = t.charAt(r + 1);
            if ("" !== s && Number(s) == s) {
                for (n.id = ""; ++r; ) {
                    var i = t.charAt(r);
                    if (null == i || Number(i) != i) {
                        --r;
                        break
                    }
                    if (n.id += t.charAt(r),
                    r == t.length)
                        break
                }
                n.id = Number(n.id)
            }
            return t.charAt(++r) && (n = c(n, t.substr(r))),
            f("decoded %s as %j", t, n),
            n
        }
        function c(t, e) {
            try {
                t.data = p.parse(e)
            } catch (t) {
                return l()
            }
            return t
        }
        function u(t) {
            this.reconPack = t,
            this.buffers = []
        }
        function l(t) {
            return {
                type: e.ERROR,
                data: "parser error"
            }
        }
        var f = n(8)("socket.io-parser")
          , p = n(11)
          , h = n(13)
          , d = n(14)
          , y = n(16);
        e.protocol = 4,
        e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
        e.CONNECT = 0,
        e.DISCONNECT = 1,
        e.EVENT = 2,
        e.ACK = 3,
        e.ERROR = 4,
        e.BINARY_EVENT = 5,
        e.BINARY_ACK = 6,
        e.Encoder = r,
        e.Decoder = s,
        r.prototype.encode = function(t, n) {
            if (f("encoding packet %j", t),
            e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type)
                i(t, n);
            else {
                var r = o(t);
                n([r])
            }
        }
        ,
        h(s.prototype),
        s.prototype.add = function(t) {
            var n;
            if ("string" == typeof t)
                n = a(t),
                e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type ? (this.reconstructor = new u(n),
                0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
            else {
                if (!y(t) && !t.base64)
                    throw new Error("Unknown type: " + t);
                if (!this.reconstructor)
                    throw new Error("got binary data when not reconstructing a packet");
                n = this.reconstructor.takeBinaryData(t),
                n && (this.reconstructor = null,
                this.emit("decoded", n))
            }
        }
        ,
        s.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
        ,
        u.prototype.takeBinaryData = function(t) {
            if (this.buffers.push(t),
            this.buffers.length == this.reconPack.attachments) {
                var e = d.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(),
                e
            }
            return null
        }
        ,
        u.prototype.finishedReconstruction = function() {
            this.reconPack = null,
            this.buffers = []
        }
    }
    , function(t, e, n) {
        function r() {
            return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }
        function o() {
            var t = arguments
              , n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
            !n)
                return t;
            var r = "color: " + this.color;
            t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
            var o = 0
              , i = 0;
            return t[0].replace(/%[a-z%]/g, function(t) {
                "%%" !== t && (o++,
                "%c" === t && (i = o))
            }),
            t.splice(i, 0, r),
            t
        }
        function i() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function s(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }
        function a() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return t
        }
        function c() {
            try {
                return window.localStorage
            } catch (t) {}
        }
        e = t.exports = n(9),
        e.log = i,
        e.formatArgs = o,
        e.save = s,
        e.load = a,
        e.useColors = r,
        e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(),
        e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        e.formatters.j = function(t) {
            return JSON.stringify(t)
        }
        ,
        e.enable(a())
    }
    , function(t, e, n) {
        function r() {
            return e.colors[l++ % e.colors.length]
        }
        function o(t) {
            function n() {}
            function o() {
                var t = o
                  , n = +new Date
                  , i = n - (u || n);
                t.diff = i,
                t.prev = u,
                t.curr = n,
                u = n,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = r());
                var s = Array.prototype.slice.call(arguments);
                s[0] = e.coerce(s[0]),
                "string" != typeof s[0] && (s = ["%o"].concat(s));
                var a = 0;
                s[0] = s[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n)
                        return n;
                    a++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = s[a];
                        n = o.call(t, i),
                        s.splice(a, 1),
                        a--
                    }
                    return n
                }),
                "function" == typeof e.formatArgs && (s = e.formatArgs.apply(t, s));
                var c = o.log || e.log || console.log.bind(console);
                c.apply(t, s)
            }
            n.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : n;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var n = (t || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && (t = n[o].replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function s() {
            e.enable("")
        }
        function a(t) {
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o,
        e.coerce = c,
        e.disable = s,
        e.enable = i,
        e.enabled = a,
        e.humanize = n(10),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var u, l = 0
    }
    , function(t, e) {
        function n(t) {
            if (t = "" + t,
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1])
                      , r = (e[2] || "ms").toLowerCase();
                    switch (r) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * l;
                    case "days":
                    case "day":
                    case "d":
                        return n * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * a;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * s;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n
                    }
                }
            }
        }
        function r(t) {
            return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
        }
        function i(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var s = 1e3
          , a = 60 * s
          , c = 60 * a
          , u = 24 * c
          , l = 365.25 * u;
        t.exports = function(t, e) {
            return e = e || {},
            "string" == typeof t ? n(t) : e.long ? o(t) : r(t)
        }
    }
    , function(t, e, n) {
        (function(t, n) {
            var r = !1;
            (function() {
                function o(t, e) {
                    function n(t) {
                        if (n[t] !== g)
                            return n[t];
                        var o;
                        if ("bug-string-char-index" == t)
                            o = "a" != "a"[0];
                        else if ("json" == t)
                            o = n("json-stringify") && n("json-parse");
                        else {
                            var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == t) {
                                var c = e.stringify
                                  , l = "function" == typeof c && b;
                                if (l) {
                                    (s = function() {
                                        return 1
                                    }
                                    ).toJSON = s;
                                    try {
                                        l = "0" === c(0) && "0" === c(new r) && '""' == c(new i) && c(v) === g && c(g) === g && c() === g && "1" === c(s) && "[1]" == c([s]) && "[null]" == c([g]) && "null" == c(null) && "[null,null,null]" == c([g, v, null]) && c({
                                            a: [s, !0, !1, null, "\0\b\n\f\r\t"]
                                        }) == a && "1" === c(null, s) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new u(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new u(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new u(-1))
                                    } catch (t) {
                                        l = !1
                                    }
                                }
                                o = l
                            }
                            if ("json-parse" == t) {
                                var f = e.parse;
                                if ("function" == typeof f)
                                    try {
                                        if (0 === f("0") && !f(!1)) {
                                            s = f(a);
                                            var p = 5 == s.a.length && 1 === s.a[0];
                                            if (p) {
                                                try {
                                                    p = !f('"\t"')
                                                } catch (t) {}
                                                if (p)
                                                    try {
                                                        p = 1 !== f("01")
                                                    } catch (t) {}
                                                if (p)
                                                    try {
                                                        p = 1 !== f("1.")
                                                    } catch (t) {}
                                            }
                                        }
                                    } catch (t) {
                                        p = !1
                                    }
                                o = p
                            }
                        }
                        return n[t] = !!o
                    }
                    t || (t = c.Object()),
                    e || (e = c.Object());
                    var r = t.Number || c.Number
                      , i = t.String || c.String
                      , a = t.Object || c.Object
                      , u = t.Date || c.Date
                      , l = t.SyntaxError || c.SyntaxError
                      , f = t.TypeError || c.TypeError
                      , p = t.Math || c.Math
                      , h = t.JSON || c.JSON;
                    "object" == typeof h && h && (e.stringify = h.stringify,
                    e.parse = h.parse);
                    var d, y, g, m = a.prototype, v = m.toString, b = new u(-0xc782b5b800cec);
                    try {
                        b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                    } catch (t) {}
                    if (!n("json")) {
                        var w = "[object Function]"
                          , k = "[object Date]"
                          , x = "[object Number]"
                          , A = "[object String]"
                          , S = "[object Array]"
                          , T = "[object Boolean]"
                          , C = n("bug-string-char-index");
                        if (!b)
                            var E = p.floor
                              , B = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                              , O = function(t, e) {
                                return B[e] + 365 * (t - 1970) + E((t - 1969 + (e = +(e > 1))) / 4) - E((t - 1901 + e) / 100) + E((t - 1601 + e) / 400)
                            };
                        if ((d = m.hasOwnProperty) || (d = function(t) {
                            var e, n = {};
                            return (n.__proto__ = null,
                            n.__proto__ = {
                                toString: 1
                            },
                            n).toString != v ? d = function(t) {
                                var e = this.__proto__
                                  , n = t in (this.__proto__ = null,
                                this);
                                return this.__proto__ = e,
                                n
                            }
                            : (e = n.constructor,
                            d = function(t) {
                                var n = (this.constructor || e).prototype;
                                return t in this && !(t in n && this[t] === n[t])
                            }
                            ),
                            n = null,
                            d.call(this, t)
                        }
                        ),
                        y = function(t, e) {
                            var n, r, o, i = 0;
                            (n = function() {
                                this.valueOf = 0
                            }
                            ).prototype.valueOf = 0,
                            r = new n;
                            for (o in r)
                                d.call(r, o) && i++;
                            return n = r = null,
                            i ? y = 2 == i ? function(t, e) {
                                var n, r = {}, o = v.call(t) == w;
                                for (n in t)
                                    o && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(t, n) || e(n)
                            }
                            : function(t, e) {
                                var n, r, o = v.call(t) == w;
                                for (n in t)
                                    o && "prototype" == n || !d.call(t, n) || (r = "constructor" === n) || e(n);
                                (r || d.call(t, n = "constructor")) && e(n)
                            }
                            : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                            y = function(t, e) {
                                var n, o, i = v.call(t) == w, a = !i && "function" != typeof t.constructor && s[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                                for (n in t)
                                    i && "prototype" == n || !a.call(t, n) || e(n);
                                for (o = r.length; n = r[--o]; a.call(t, n) && e(n))
                                    ;
                            }
                            ),
                            y(t, e)
                        }
                        ,
                        !n("json-stringify")) {
                            var N = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            }
                              , j = "000000"
                              , _ = function(t, e) {
                                return (j + (e || 0)).slice(-t)
                            }
                              , P = "\\u00"
                              , R = function(t) {
                                for (var e = '"', n = 0, r = t.length, o = !C || r > 10, i = o && (C ? t.split("") : t); n < r; n++) {
                                    var s = t.charCodeAt(n);
                                    switch (s) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        e += N[s];
                                        break;
                                    default:
                                        if (s < 32) {
                                            e += P + _(2, s.toString(16));
                                            break
                                        }
                                        e += o ? i[n] : t.charAt(n)
                                    }
                                }
                                return e + '"'
                            }
                              , D = function(t, e, n, r, o, i, s) {
                                var a, c, u, l, p, h, m, b, w, C, B, N, j, P, M, L;
                                try {
                                    a = e[t]
                                } catch (t) {}
                                if ("object" == typeof a && a)
                                    if (c = v.call(a),
                                    c != k || d.call(a, "toJSON"))
                                        "function" == typeof a.toJSON && (c != x && c != A && c != S || d.call(a, "toJSON")) && (a = a.toJSON(t));
                                    else if (a > -1 / 0 && a < 1 / 0) {
                                        if (O) {
                                            for (p = E(a / 864e5),
                                            u = E(p / 365.2425) + 1970 - 1; O(u + 1, 0) <= p; u++)
                                                ;
                                            for (l = E((p - O(u, 0)) / 30.42); O(u, l + 1) <= p; l++)
                                                ;
                                            p = 1 + p - O(u, l),
                                            h = (a % 864e5 + 864e5) % 864e5,
                                            m = E(h / 36e5) % 24,
                                            b = E(h / 6e4) % 60,
                                            w = E(h / 1e3) % 60,
                                            C = h % 1e3
                                        } else
                                            u = a.getUTCFullYear(),
                                            l = a.getUTCMonth(),
                                            p = a.getUTCDate(),
                                            m = a.getUTCHours(),
                                            b = a.getUTCMinutes(),
                                            w = a.getUTCSeconds(),
                                            C = a.getUTCMilliseconds();
                                        a = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + _(6, u < 0 ? -u : u) : _(4, u)) + "-" + _(2, l + 1) + "-" + _(2, p) + "T" + _(2, m) + ":" + _(2, b) + ":" + _(2, w) + "." + _(3, C) + "Z"
                                    } else
                                        a = null;
                                if (n && (a = n.call(e, t, a)),
                                null === a)
                                    return "null";
                                if (c = v.call(a),
                                c == T)
                                    return "" + a;
                                if (c == x)
                                    return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                if (c == A)
                                    return R("" + a);
                                if ("object" == typeof a) {
                                    for (P = s.length; P--; )
                                        if (s[P] === a)
                                            throw f();
                                    if (s.push(a),
                                    B = [],
                                    M = i,
                                    i += o,
                                    c == S) {
                                        for (j = 0,
                                        P = a.length; j < P; j++)
                                            N = D(j, a, n, r, o, i, s),
                                            B.push(N === g ? "null" : N);
                                        L = B.length ? o ? "[\n" + i + B.join(",\n" + i) + "\n" + M + "]" : "[" + B.join(",") + "]" : "[]"
                                    } else
                                        y(r || a, function(t) {
                                            var e = D(t, a, n, r, o, i, s);
                                            e !== g && B.push(R(t) + ":" + (o ? " " : "") + e)
                                        }),
                                        L = B.length ? o ? "{\n" + i + B.join(",\n" + i) + "\n" + M + "}" : "{" + B.join(",") + "}" : "{}";
                                    return s.pop(),
                                    L
                                }
                            };
                            e.stringify = function(t, e, n) {
                                var r, o, i, a;
                                if (s[typeof e] && e)
                                    if ((a = v.call(e)) == w)
                                        o = e;
                                    else if (a == S) {
                                        i = {};
                                        for (var c, u = 0, l = e.length; u < l; c = e[u++],
                                        a = v.call(c),
                                        (a == A || a == x) && (i[c] = 1))
                                            ;
                                    }
                                if (n)
                                    if ((a = v.call(n)) == x) {
                                        if ((n -= n % 1) > 0)
                                            for (r = "",
                                            n > 10 && (n = 10); r.length < n; r += " ")
                                                ;
                                    } else
                                        a == A && (r = n.length <= 10 ? n : n.slice(0, 10));
                                return D("", (c = {},
                                c[""] = t,
                                c), o, i, r, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var M, L, I = i.fromCharCode, U = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            }, q = function() {
                                throw M = L = null,
                                l()
                            }, F = function() {
                                for (var t, e, n, r, o, i = L, s = i.length; M < s; )
                                    switch (o = i.charCodeAt(M)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        M++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return t = C ? i.charAt(M) : i[M],
                                        M++,
                                        t;
                                    case 34:
                                        for (t = "@",
                                        M++; M < s; )
                                            if (o = i.charCodeAt(M),
                                            o < 32)
                                                q();
                                            else if (92 == o)
                                                switch (o = i.charCodeAt(++M)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    t += U[o],
                                                    M++;
                                                    break;
                                                case 117:
                                                    for (e = ++M,
                                                    n = M + 4; M < n; M++)
                                                        o = i.charCodeAt(M),
                                                        o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || q();
                                                    t += I("0x" + i.slice(e, M));
                                                    break;
                                                default:
                                                    q()
                                                }
                                            else {
                                                if (34 == o)
                                                    break;
                                                for (o = i.charCodeAt(M),
                                                e = M; o >= 32 && 92 != o && 34 != o; )
                                                    o = i.charCodeAt(++M);
                                                t += i.slice(e, M)
                                            }
                                        if (34 == i.charCodeAt(M))
                                            return M++,
                                            t;
                                        q();
                                    default:
                                        if (e = M,
                                        45 == o && (r = !0,
                                        o = i.charCodeAt(++M)),
                                        o >= 48 && o <= 57) {
                                            for (48 == o && (o = i.charCodeAt(M + 1),
                                            o >= 48 && o <= 57) && q(),
                                            r = !1; M < s && (o = i.charCodeAt(M),
                                            o >= 48 && o <= 57); M++)
                                                ;
                                            if (46 == i.charCodeAt(M)) {
                                                for (n = ++M; n < s && (o = i.charCodeAt(n),
                                                o >= 48 && o <= 57); n++)
                                                    ;
                                                n == M && q(),
                                                M = n
                                            }
                                            if (o = i.charCodeAt(M),
                                            101 == o || 69 == o) {
                                                for (o = i.charCodeAt(++M),
                                                43 != o && 45 != o || M++,
                                                n = M; n < s && (o = i.charCodeAt(n),
                                                o >= 48 && o <= 57); n++)
                                                    ;
                                                n == M && q(),
                                                M = n
                                            }
                                            return +i.slice(e, M)
                                        }
                                        if (r && q(),
                                        "true" == i.slice(M, M + 4))
                                            return M += 4,
                                            !0;
                                        if ("false" == i.slice(M, M + 5))
                                            return M += 5,
                                            !1;
                                        if ("null" == i.slice(M, M + 4))
                                            return M += 4,
                                            null;
                                        q()
                                    }
                                return "$"
                            }, z = function(t) {
                                var e, n;
                                if ("$" == t && q(),
                                "string" == typeof t) {
                                    if ("@" == (C ? t.charAt(0) : t[0]))
                                        return t.slice(1);
                                    if ("[" == t) {
                                        for (e = []; t = F(),
                                        "]" != t; n || (n = !0))
                                            n && ("," == t ? (t = F(),
                                            "]" == t && q()) : q()),
                                            "," == t && q(),
                                            e.push(z(t));
                                        return e
                                    }
                                    if ("{" == t) {
                                        for (e = {}; t = F(),
                                        "}" != t; n || (n = !0))
                                            n && ("," == t ? (t = F(),
                                            "}" == t && q()) : q()),
                                            "," != t && "string" == typeof t && "@" == (C ? t.charAt(0) : t[0]) && ":" == F() || q(),
                                            e[t.slice(1)] = z(F());
                                        return e
                                    }
                                    q()
                                }
                                return t
                            }, H = function(t, e, n) {
                                var r = $(t, e, n);
                                r === g ? delete t[e] : t[e] = r
                            }, $ = function(t, e, n) {
                                var r, o = t[e];
                                if ("object" == typeof o && o)
                                    if (v.call(o) == S)
                                        for (r = o.length; r--; )
                                            H(o, r, n);
                                    else
                                        y(o, function(t) {
                                            H(o, t, n)
                                        });
                                return n.call(t, e, o)
                            };
                            e.parse = function(t, e) {
                                var n, r;
                                return M = 0,
                                L = "" + t,
                                n = z(F()),
                                "$" != F() && q(),
                                M = L = null,
                                e && v.call(e) == w ? $((r = {},
                                r[""] = n,
                                r), "", e) : n
                            }
                        }
                    }
                    return e.runInContext = o,
                    e
                }
                var i = "function" == typeof r && r.amd
                  , s = {
                    function: !0,
                    object: !0
                }
                  , a = s[typeof e] && e && !e.nodeType && e
                  , c = s[typeof window] && window || this
                  , u = a && s[typeof t] && t && !t.nodeType && "object" == typeof n && n;
                if (!u || u.global !== u && u.window !== u && u.self !== u || (c = u),
                a && !i)
                    o(c, a);
                else {
                    var l = c.JSON
                      , f = c.JSON3
                      , p = !1
                      , h = o(c, c.JSON3 = {
                        noConflict: function() {
                            return p || (p = !0,
                            c.JSON = l,
                            c.JSON3 = f,
                            l = f = null),
                            h
                        }
                    });
                    c.JSON = {
                        parse: h.parse,
                        stringify: h.stringify
                    }
                }
                i && r(function() {
                    return h
                })
            }
            ).call(this)
        }
        ).call(e, n(12)(t), function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}
            ,
            t.paths = [],
            t.children = [],
            t.webpackPolyfill = 1),
            t
        }
    }
    , function(t, e) {
        function n(t) {
            if (t)
                return r(t)
        }
        function r(t) {
            for (var e in n.prototype)
                t[e] = n.prototype[e];
            return t
        }
        t.exports = n,
        n.prototype.on = n.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks[t] = this._callbacks[t] || []).push(e),
            this
        }
        ,
        n.prototype.once = function(t, e) {
            function n() {
                r.off(t, n),
                e.apply(this, arguments)
            }
            var r = this;
            return this._callbacks = this._callbacks || {},
            n.fn = e,
            this.on(t, n),
            this
        }
        ,
        n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks[t];
            if (!n)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[t],
                this;
            for (var r, o = 0; o < n.length; o++)
                if (r = n[o],
                r === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }
        ,
        n.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks[t];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r)
                    n[r].apply(this, e)
            }
            return this
        }
        ,
        n.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks[t] || []
        }
        ,
        n.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }
    , function(t, e, n) {
        (function(t) {
            var r = n(15)
              , o = n(16);
            e.deconstructPacket = function(t) {
                function e(t) {
                    if (!t)
                        return t;
                    if (o(t)) {
                        var i = {
                            _placeholder: !0,
                            num: n.length
                        };
                        return n.push(t),
                        i
                    }
                    if (r(t)) {
                        for (var s = new Array(t.length), a = 0; a < t.length; a++)
                            s[a] = e(t[a]);
                        return s
                    }
                    if ("object" == typeof t && !(t instanceof Date)) {
                        var s = {};
                        for (var c in t)
                            s[c] = e(t[c]);
                        return s
                    }
                    return t
                }
                var n = []
                  , i = t.data
                  , s = t;
                return s.data = e(i),
                s.attachments = n.length,
                {
                    packet: s,
                    buffers: n
                }
            }
            ,
            e.reconstructPacket = function(t, e) {
                function n(t) {
                    if (t && t._placeholder) {
                        var o = e[t.num];
                        return o
                    }
                    if (r(t)) {
                        for (var i = 0; i < t.length; i++)
                            t[i] = n(t[i]);
                        return t
                    }
                    if (t && "object" == typeof t) {
                        for (var s in t)
                            t[s] = n(t[s]);
                        return t
                    }
                    return t
                }
                return t.data = n(t.data),
                t.attachments = void 0,
                t
            }
            ,
            e.removeBlobs = function(e, n) {
                function i(e, c, u) {
                    if (!e)
                        return e;
                    if (t.Blob && e instanceof Blob || t.File && e instanceof File) {
                        s++;
                        var l = new FileReader;
                        l.onload = function() {
                            u ? u[c] = this.result : a = this.result,
                            --s || n(a)
                        }
                        ,
                        l.readAsArrayBuffer(e)
                    } else if (r(e))
                        for (var f = 0; f < e.length; f++)
                            i(e[f], f, e);
                    else if (e && "object" == typeof e && !o(e))
                        for (var p in e)
                            i(e[p], p, e)
                }
                var s = 0
                  , a = e;
                i(a),
                s || n(a)
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    }
    , function(t, e) {
        (function(e) {
            function n(t) {
                return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
            }
            t.exports = n
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            return this instanceof r ? (t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t,
            t = void 0),
            e = e || {},
            e.path = e.path || "/socket.io",
            this.nsps = {},
            this.subs = [],
            this.opts = e,
            this.reconnection(e.reconnection !== !1),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(e.randomizationFactor || .5),
            this.backoff = new h({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            this.readyState = "closed",
            this.uri = t,
            this.connecting = [],
            this.lastPing = null,
            this.encoding = !1,
            this.packetBuffer = [],
            this.encoder = new c.Encoder,
            this.decoder = new c.Decoder,
            this.autoConnect = e.autoConnect !== !1,
            void (this.autoConnect && this.open())) : new r(t,e)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = n(18)
          , s = n(44)
          , a = n(35)
          , c = n(7)
          , u = n(46)
          , l = n(47)
          , f = n(3)("socket.io-client:manager")
          , p = n(42)
          , h = n(48)
          , d = Object.prototype.hasOwnProperty;
        t.exports = r,
        r.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var t in this.nsps)
                d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
        }
        ,
        r.prototype.updateSocketIds = function() {
            for (var t in this.nsps)
                d.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
        }
        ,
        a(r.prototype),
        r.prototype.reconnection = function(t) {
            return arguments.length ? (this._reconnection = !!t,
            this) : this._reconnection
        }
        ,
        r.prototype.reconnectionAttempts = function(t) {
            return arguments.length ? (this._reconnectionAttempts = t,
            this) : this._reconnectionAttempts
        }
        ,
        r.prototype.reconnectionDelay = function(t) {
            return arguments.length ? (this._reconnectionDelay = t,
            this.backoff && this.backoff.setMin(t),
            this) : this._reconnectionDelay
        }
        ,
        r.prototype.randomizationFactor = function(t) {
            return arguments.length ? (this._randomizationFactor = t,
            this.backoff && this.backoff.setJitter(t),
            this) : this._randomizationFactor
        }
        ,
        r.prototype.reconnectionDelayMax = function(t) {
            return arguments.length ? (this._reconnectionDelayMax = t,
            this.backoff && this.backoff.setMax(t),
            this) : this._reconnectionDelayMax
        }
        ,
        r.prototype.timeout = function(t) {
            return arguments.length ? (this._timeout = t,
            this) : this._timeout
        }
        ,
        r.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        ,
        r.prototype.open = r.prototype.connect = function(t, e) {
            if (f("readyState %s", this.readyState),
            ~this.readyState.indexOf("open"))
                return this;
            f("opening %s", this.uri),
            this.engine = i(this.uri, this.opts);
            var n = this.engine
              , r = this;
            this.readyState = "opening",
            this.skipReconnect = !1;
            var o = u(n, "open", function() {
                r.onopen(),
                t && t()
            })
              , s = u(n, "error", function(e) {
                if (f("connect_error"),
                r.cleanup(),
                r.readyState = "closed",
                r.emitAll("connect_error", e),
                t) {
                    var n = new Error("Connection error");
                    n.data = e,
                    t(n)
                } else
                    r.maybeReconnectOnOpen()
            });
            if (!1 !== this._timeout) {
                var a = this._timeout;
                f("connect attempt will timeout after %d", a);
                var c = setTimeout(function() {
                    f("connect attempt timed out after %d", a),
                    o.destroy(),
                    n.close(),
                    n.emit("error", "timeout"),
                    r.emitAll("connect_timeout", a)
                }, a);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(c)
                    }
                })
            }
            return this.subs.push(o),
            this.subs.push(s),
            this
        }
        ,
        r.prototype.onopen = function() {
            f("open"),
            this.cleanup(),
            this.readyState = "open",
            this.emit("open");
            var t = this.engine;
            this.subs.push(u(t, "data", l(this, "ondata"))),
            this.subs.push(u(t, "ping", l(this, "onping"))),
            this.subs.push(u(t, "pong", l(this, "onpong"))),
            this.subs.push(u(t, "error", l(this, "onerror"))),
            this.subs.push(u(t, "close", l(this, "onclose"))),
            this.subs.push(u(this.decoder, "decoded", l(this, "ondecoded")))
        }
        ,
        r.prototype.onping = function() {
            this.lastPing = new Date,
            this.emitAll("ping")
        }
        ,
        r.prototype.onpong = function() {
            this.emitAll("pong", new Date - this.lastPing)
        }
        ,
        r.prototype.ondata = function(t) {
            this.decoder.add(t)
        }
        ,
        r.prototype.ondecoded = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onerror = function(t) {
            f("error", t),
            this.emitAll("error", t)
        }
        ,
        r.prototype.socket = function(t, e) {
            function n() {
                ~p(o.connecting, r) || o.connecting.push(r)
            }
            var r = this.nsps[t];
            if (!r) {
                r = new s(this,t,e),
                this.nsps[t] = r;
                var o = this;
                r.on("connecting", n),
                r.on("connect", function() {
                    r.id = o.engine.id
                }),
                this.autoConnect && n()
            }
            return r
        }
        ,
        r.prototype.destroy = function(t) {
            var e = p(this.connecting, t);
            ~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close()
        }
        ,
        r.prototype.packet = function(t) {
            f("writing packet %j", t);
            var e = this;
            t.query && 0 === t.type && (t.nsp += "?" + t.query),
            e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
            this.encoder.encode(t, function(n) {
                for (var r = 0; r < n.length; r++)
                    e.engine.write(n[r], t.options);
                e.encoding = !1,
                e.processPacketQueue()
            }))
        }
        ,
        r.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var t = this.packetBuffer.shift();
                this.packet(t)
            }
        }
        ,
        r.prototype.cleanup = function() {
            f("cleanup");
            for (var t = this.subs.length, e = 0; e < t; e++) {
                var n = this.subs.shift();
                n.destroy()
            }
            this.packetBuffer = [],
            this.encoding = !1,
            this.lastPing = null,
            this.decoder.destroy()
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            f("disconnect"),
            this.skipReconnect = !0,
            this.reconnecting = !1,
            "opening" === this.readyState && this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.engine && this.engine.close()
        }
        ,
        r.prototype.onclose = function(t) {
            f("onclose"),
            this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.emit("close", t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        ,
        r.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
                return this;
            var t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
                f("reconnect failed"),
                this.backoff.reset(),
                this.emitAll("reconnect_failed"),
                this.reconnecting = !1;
            else {
                var e = this.backoff.duration();
                f("will wait %dms before reconnect attempt", e),
                this.reconnecting = !0;
                var n = setTimeout(function() {
                    t.skipReconnect || (f("attempting reconnect"),
                    t.emitAll("reconnect_attempt", t.backoff.attempts),
                    t.emitAll("reconnecting", t.backoff.attempts),
                    t.skipReconnect || t.open(function(e) {
                        e ? (f("reconnect attempt error"),
                        t.reconnecting = !1,
                        t.reconnect(),
                        t.emitAll("reconnect_error", e.data)) : (f("reconnect success"),
                        t.onreconnect())
                    }))
                }, e);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(n)
                    }
                })
            }
        }
        ,
        r.prototype.onreconnect = function() {
            var t = this.backoff.attempts;
            this.reconnecting = !1,
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll("reconnect", t)
        }
    }
    , function(t, e, n) {
        t.exports = n(19)
    }
    , function(t, e, n) {
        t.exports = n(20),
        t.exports.parser = n(27)
    }
    , function(t, e, n) {
        (function(e) {
            function r(t, n) {
                if (!(this instanceof r))
                    return new r(t,n);
                n = n || {},
                t && "object" == typeof t && (n = t,
                t = null),
                t ? (t = l(t),
                n.hostname = t.host,
                n.secure = "https" === t.protocol || "wss" === t.protocol,
                n.port = t.port,
                t.query && (n.query = t.query)) : n.host && (n.hostname = l(n.host).host),
                this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol,
                n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
                this.agent = n.agent || !1,
                this.hostname = n.hostname || (e.location ? location.hostname : "localhost"),
                this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80),
                this.query = n.query || {},
                "string" == typeof this.query && (this.query = p.decode(this.query)),
                this.upgrade = !1 !== n.upgrade,
                this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/",
                this.forceJSONP = !!n.forceJSONP,
                this.jsonp = !1 !== n.jsonp,
                this.forceBase64 = !!n.forceBase64,
                this.enablesXDR = !!n.enablesXDR,
                this.timestampParam = n.timestampParam || "t",
                this.timestampRequests = n.timestampRequests,
                this.transports = n.transports || ["polling", "websocket"],
                this.readyState = "",
                this.writeBuffer = [],
                this.prevBufferLen = 0,
                this.policyPort = n.policyPort || 843,
                this.rememberUpgrade = n.rememberUpgrade || !1,
                this.binaryType = null,
                this.onlyBinaryUpgrades = n.onlyBinaryUpgrades,
                this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}),
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                this.pfx = n.pfx || null,
                this.key = n.key || null,
                this.passphrase = n.passphrase || null,
                this.cert = n.cert || null,
                this.ca = n.ca || null,
                this.ciphers = n.ciphers || null,
                this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized,
                this.forceNode = !!n.forceNode;
                var o = "object" == typeof e && e;
                o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders),
                n.localAddress && (this.localAddress = n.localAddress)),
                this.id = null,
                this.upgrades = null,
                this.pingInterval = null,
                this.pingTimeout = null,
                this.pingIntervalTimer = null,
                this.pingTimeoutTimer = null,
                this.open()
            }
            function o(t) {
                var e = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            var i = n(21)
              , s = n(35)
              , a = n(3)("engine.io-client:socket")
              , c = n(42)
              , u = n(27)
              , l = n(2)
              , f = n(43)
              , p = n(36);
            t.exports = r,
            r.priorWebsocketSuccess = !1,
            s(r.prototype),
            r.protocol = u.protocol,
            r.Socket = r,
            r.Transport = n(26),
            r.transports = n(21),
            r.parser = n(27),
            r.prototype.createTransport = function(t) {
                a('creating transport "%s"', t);
                var e = o(this.query);
                e.EIO = u.protocol,
                e.transport = t,
                this.id && (e.sid = this.id);
                var n = new i[t]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: e,
                    forceJSONP: this.forceJSONP,
                    jsonp: this.jsonp,
                    forceBase64: this.forceBase64,
                    enablesXDR: this.enablesXDR,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this,
                    pfx: this.pfx,
                    key: this.key,
                    passphrase: this.passphrase,
                    cert: this.cert,
                    ca: this.ca,
                    ciphers: this.ciphers,
                    rejectUnauthorized: this.rejectUnauthorized,
                    perMessageDeflate: this.perMessageDeflate,
                    extraHeaders: this.extraHeaders,
                    forceNode: this.forceNode,
                    localAddress: this.localAddress
                });
                return n
            }
            ,
            r.prototype.open = function() {
                var t;
                if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
                    t = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var e = this;
                        return void setTimeout(function() {
                            e.emit("error", "No transports available")
                        }, 0)
                    }
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (t) {
                    return this.transports.shift(),
                    void this.open()
                }
                t.open(),
                this.setTransport(t)
            }
            ,
            r.prototype.setTransport = function(t) {
                a("setting transport %s", t.name);
                var e = this;
                this.transport && (a("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
                this.transport = t,
                t.on("drain", function() {
                    e.onDrain()
                }).on("packet", function(t) {
                    e.onPacket(t)
                }).on("error", function(t) {
                    e.onError(t)
                }).on("close", function() {
                    e.onClose("transport close")
                })
            }
            ,
            r.prototype.probe = function(t) {
                function e() {
                    if (p.onlyBinaryUpgrades) {
                        var e = !this.supportsBinary && p.transport.supportsBinary;
                        f = f || e
                    }
                    f || (a('probe transport "%s" opened', t),
                    l.send([{
                        type: "ping",
                        data: "probe"
                    }]),
                    l.once("packet", function(e) {
                        if (!f)
                            if ("pong" === e.type && "probe" === e.data) {
                                if (a('probe transport "%s" pong', t),
                                p.upgrading = !0,
                                p.emit("upgrading", l),
                                !l)
                                    return;
                                r.priorWebsocketSuccess = "websocket" === l.name,
                                a('pausing current transport "%s"', p.transport.name),
                                p.transport.pause(function() {
                                    f || "closed" !== p.readyState && (a("changing transport and sending upgrade packet"),
                                    u(),
                                    p.setTransport(l),
                                    l.send([{
                                        type: "upgrade"
                                    }]),
                                    p.emit("upgrade", l),
                                    l = null,
                                    p.upgrading = !1,
                                    p.flush())
                                })
                            } else {
                                a('probe transport "%s" failed', t);
                                var n = new Error("probe error");
                                n.transport = l.name,
                                p.emit("upgradeError", n)
                            }
                    }))
                }
                function n() {
                    f || (f = !0,
                    u(),
                    l.close(),
                    l = null)
                }
                function o(e) {
                    var r = new Error("probe error: " + e);
                    r.transport = l.name,
                    n(),
                    a('probe transport "%s" failed because of error: %s', t, e),
                    p.emit("upgradeError", r)
                }
                function i() {
                    o("transport closed")
                }
                function s() {
                    o("socket closed")
                }
                function c(t) {
                    l && t.name !== l.name && (a('"%s" works - aborting "%s"', t.name, l.name),
                    n())
                }
                function u() {
                    l.removeListener("open", e),
                    l.removeListener("error", o),
                    l.removeListener("close", i),
                    p.removeListener("close", s),
                    p.removeListener("upgrading", c)
                }
                a('probing transport "%s"', t);
                var l = this.createTransport(t, {
                    probe: 1
                })
                  , f = !1
                  , p = this;
                r.priorWebsocketSuccess = !1,
                l.once("open", e),
                l.once("error", o),
                l.once("close", i),
                this.once("close", s),
                this.once("upgrading", c),
                l.open()
            }
            ,
            r.prototype.onOpen = function() {
                if (a("socket open"),
                this.readyState = "open",
                r.priorWebsocketSuccess = "websocket" === this.transport.name,
                this.emit("open"),
                this.flush(),
                "open" === this.readyState && this.upgrade && this.transport.pause) {
                    a("starting upgrade probes");
                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                        this.probe(this.upgrades[t])
                }
            }
            ,
            r.prototype.onPacket = function(t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                    switch (a('socket receive: type "%s", data "%s"', t.type, t.data),
                    this.emit("packet", t),
                    this.emit("heartbeat"),
                    t.type) {
                    case "open":
                        this.onHandshake(f(t.data));
                        break;
                    case "pong":
                        this.setPing(),
                        this.emit("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data,
                        this.onError(e);
                        break;
                    case "message":
                        this.emit("data", t.data),
                        this.emit("message", t.data)
                    }
                else
                    a('packet received with socket readyState "%s"', this.readyState)
            }
            ,
            r.prototype.onHandshake = function(t) {
                this.emit("handshake", t),
                this.id = t.sid,
                this.transport.query.sid = t.sid,
                this.upgrades = this.filterUpgrades(t.upgrades),
                this.pingInterval = t.pingInterval,
                this.pingTimeout = t.pingTimeout,
                this.onOpen(),
                "closed" !== this.readyState && (this.setPing(),
                this.removeListener("heartbeat", this.onHeartbeat),
                this.on("heartbeat", this.onHeartbeat))
            }
            ,
            r.prototype.onHeartbeat = function(t) {
                clearTimeout(this.pingTimeoutTimer);
                var e = this;
                e.pingTimeoutTimer = setTimeout(function() {
                    "closed" !== e.readyState && e.onClose("ping timeout")
                }, t || e.pingInterval + e.pingTimeout)
            }
            ,
            r.prototype.setPing = function() {
                var t = this;
                clearTimeout(t.pingIntervalTimer),
                t.pingIntervalTimer = setTimeout(function() {
                    a("writing ping packet - expecting pong within %sms", t.pingTimeout),
                    t.ping(),
                    t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval)
            }
            ,
            r.prototype.ping = function() {
                var t = this;
                this.sendPacket("ping", function() {
                    t.emit("ping")
                })
            }
            ,
            r.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen),
                this.prevBufferLen = 0,
                0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }
            ,
            r.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length),
                this.transport.send(this.writeBuffer),
                this.prevBufferLen = this.writeBuffer.length,
                this.emit("flush"))
            }
            ,
            r.prototype.write = r.prototype.send = function(t, e, n) {
                return this.sendPacket("message", t, e, n),
                this
            }
            ,
            r.prototype.sendPacket = function(t, e, n, r) {
                if ("function" == typeof e && (r = e,
                e = void 0),
                "function" == typeof n && (r = n,
                n = null),
                "closing" !== this.readyState && "closed" !== this.readyState) {
                    n = n || {},
                    n.compress = !1 !== n.compress;
                    var o = {
                        type: t,
                        data: e,
                        options: n
                    };
                    this.emit("packetCreate", o),
                    this.writeBuffer.push(o),
                    r && this.once("flush", r),
                    this.flush()
                }
            }
            ,
            r.prototype.close = function() {
                function t() {
                    r.onClose("forced close"),
                    a("socket closing - telling transport to close"),
                    r.transport.close()
                }
                function e() {
                    r.removeListener("upgrade", e),
                    r.removeListener("upgradeError", e),
                    t()
                }
                function n() {
                    r.once("upgrade", e),
                    r.once("upgradeError", e)
                }
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var r = this;
                    this.writeBuffer.length ? this.once("drain", function() {
                        this.upgrading ? n() : t()
                    }) : this.upgrading ? n() : t()
                }
                return this
            }
            ,
            r.prototype.onError = function(t) {
                a("socket error %j", t),
                r.priorWebsocketSuccess = !1,
                this.emit("error", t),
                this.onClose("transport error", t)
            }
            ,
            r.prototype.onClose = function(t, e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    a('socket close with reason: "%s"', t);
                    var n = this;
                    clearTimeout(this.pingIntervalTimer),
                    clearTimeout(this.pingTimeoutTimer),
                    this.transport.removeAllListeners("close"),
                    this.transport.close(),
                    this.transport.removeAllListeners(),
                    this.readyState = "closed",
                    this.id = null,
                    this.emit("close", t, e),
                    n.writeBuffer = [],
                    n.prevBufferLen = 0
                }
            }
            ,
            r.prototype.filterUpgrades = function(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++)
                    ~c(this.transports, t[n]) && e.push(t[n]);
                return e
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        (function(t) {
            function r(e) {
                var n, r = !1, a = !1, c = !1 !== e.jsonp;
                if (t.location) {
                    var u = "https:" === location.protocol
                      , l = location.port;
                    l || (l = u ? 443 : 80),
                    r = e.hostname !== location.hostname || l !== e.port,
                    a = e.secure !== u
                }
                if (e.xdomain = r,
                e.xscheme = a,
                n = new o(e),
                "open"in n && !e.forceJSONP)
                    return new i(e);
                if (!c)
                    throw new Error("JSONP disabled");
                return new s(e)
            }
            var o = n(22)
              , i = n(24)
              , s = n(39)
              , a = n(40);
            e.polling = r,
            e.websocket = a
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        (function(e) {
            var r = n(23);
            t.exports = function(t) {
                var n = t.xdomain
                  , o = t.xscheme
                  , i = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!n || r))
                        return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !o && i)
                        return new XDomainRequest
                } catch (t) {}
                if (!n)
                    try {
                        return new (e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (t) {}
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
        } catch (e) {
            t.exports = !1
        }
    }
    , function(t, e, n) {
        (function(e) {
            function r() {}
            function o(t) {
                if (c.call(this, t),
                this.requestTimeout = t.requestTimeout,
                e.location) {
                    var n = "https:" === location.protocol
                      , r = location.port;
                    r || (r = n ? 443 : 80),
                    this.xd = t.hostname !== e.location.hostname || r !== t.port,
                    this.xs = t.secure !== n
                } else
                    this.extraHeaders = t.extraHeaders
            }
            function i(t) {
                this.method = t.method || "GET",
                this.uri = t.uri,
                this.xd = !!t.xd,
                this.xs = !!t.xs,
                this.async = !1 !== t.async,
                this.data = void 0 !== t.data ? t.data : null,
                this.agent = t.agent,
                this.isBinary = t.isBinary,
                this.supportsBinary = t.supportsBinary,
                this.enablesXDR = t.enablesXDR,
                this.requestTimeout = t.requestTimeout,
                this.pfx = t.pfx,
                this.key = t.key,
                this.passphrase = t.passphrase,
                this.cert = t.cert,
                this.ca = t.ca,
                this.ciphers = t.ciphers,
                this.rejectUnauthorized = t.rejectUnauthorized,
                this.extraHeaders = t.extraHeaders,
                this.create()
            }
            function s() {
                for (var t in i.requests)
                    i.requests.hasOwnProperty(t) && i.requests[t].abort()
            }
            var a = n(22)
              , c = n(25)
              , u = n(35)
              , l = n(37)
              , f = n(3)("engine.io-client:polling-xhr");
            t.exports = o,
            t.exports.Request = i,
            l(o, c),
            o.prototype.supportsBinary = !0,
            o.prototype.request = function(t) {
                return t = t || {},
                t.uri = this.uri(),
                t.xd = this.xd,
                t.xs = this.xs,
                t.agent = this.agent || !1,
                t.supportsBinary = this.supportsBinary,
                t.enablesXDR = this.enablesXDR,
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized,
                t.requestTimeout = this.requestTimeout,
                t.extraHeaders = this.extraHeaders,
                new i(t)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                var n = "string" != typeof t && void 0 !== t
                  , r = this.request({
                    method: "POST",
                    data: t,
                    isBinary: n
                })
                  , o = this;
                r.on("success", e),
                r.on("error", function(t) {
                    o.onError("xhr post error", t)
                }),
                this.sendXhr = r
            }
            ,
            o.prototype.doPoll = function() {
                f("xhr poll");
                var t = this.request()
                  , e = this;
                t.on("data", function(t) {
                    e.onData(t)
                }),
                t.on("error", function(t) {
                    e.onError("xhr poll error", t)
                }),
                this.pollXhr = t
            }
            ,
            u(i.prototype),
            i.prototype.create = function() {
                var t = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized;
                var n = this.xhr = new a(t)
                  , r = this;
                try {
                    f("xhr open %s: %s", this.method, this.uri),
                    n.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            n.setDisableHeaderCheck(!0);
                            for (var o in this.extraHeaders)
                                this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
                        }
                    } catch (t) {}
                    if (this.supportsBinary && (n.responseType = "arraybuffer"),
                    "POST" === this.method)
                        try {
                            this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                    try {
                        n.setRequestHeader("Accept", "*/*")
                    } catch (t) {}
                    "withCredentials"in n && (n.withCredentials = !0),
                    this.requestTimeout && (n.timeout = this.requestTimeout),
                    this.hasXDR() ? (n.onload = function() {
                        r.onLoad()
                    }
                    ,
                    n.onerror = function() {
                        r.onError(n.responseText)
                    }
                    ) : n.onreadystatechange = function() {
                        4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() {
                            r.onError(n.status)
                        }, 0))
                    }
                    ,
                    f("xhr data %s", this.data),
                    n.send(this.data)
                } catch (t) {
                    return void setTimeout(function() {
                        r.onError(t)
                    }, 0)
                }
                e.document && (this.index = i.requestsCount++,
                i.requests[this.index] = this)
            }
            ,
            i.prototype.onSuccess = function() {
                this.emit("success"),
                this.cleanup()
            }
            ,
            i.prototype.onData = function(t) {
                this.emit("data", t),
                this.onSuccess()
            }
            ,
            i.prototype.onError = function(t) {
                this.emit("error", t),
                this.cleanup(!0)
            }
            ,
            i.prototype.cleanup = function(t) {
                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r,
                    t)
                        try {
                            this.xhr.abort()
                        } catch (t) {}
                    e.document && delete i.requests[this.index],
                    this.xhr = null
                }
            }
            ,
            i.prototype.onLoad = function() {
                var t;
                try {
                    var e;
                    try {
                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                    } catch (t) {}
                    if ("application/octet-stream" === e)
                        t = this.xhr.response || this.xhr.responseText;
                    else if (this.supportsBinary)
                        try {
                            t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                        } catch (e) {
                            for (var n = new Uint8Array(this.xhr.response), r = [], o = 0, i = n.length; o < i; o++)
                                r.push(n[o]);
                            t = String.fromCharCode.apply(null, r)
                        }
                    else
                        t = this.xhr.responseText
                } catch (t) {
                    this.onError(t)
                }
                null != t && this.onData(t)
            }
            ,
            i.prototype.hasXDR = function() {
                return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
            }
            ,
            i.prototype.abort = function() {
                this.cleanup()
            }
            ,
            i.requestsCount = 0,
            i.requests = {},
            e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        function r(t) {
            var e = t && t.forceBase64;
            l && !e || (this.supportsBinary = !1),
            o.call(this, t)
        }
        var o = n(26)
          , i = n(36)
          , s = n(27)
          , a = n(37)
          , c = n(38)
          , u = n(3)("engine.io-client:polling");
        t.exports = r;
        var l = function() {
            var t = n(22)
              , e = new t({
                xdomain: !1
            });
            return null != e.responseType
        }();
        a(r, o),
        r.prototype.name = "polling",
        r.prototype.doOpen = function() {
            this.poll()
        }
        ,
        r.prototype.pause = function(t) {
            function e() {
                u("paused"),
                n.readyState = "paused",
                t()
            }
            var n = this;
            if (this.readyState = "pausing",
            this.polling || !this.writable) {
                var r = 0;
                this.polling && (u("we are currently polling - waiting to pause"),
                r++,
                this.once("pollComplete", function() {
                    u("pre-pause polling complete"),
                    --r || e()
                })),
                this.writable || (u("we are currently writing - waiting to pause"),
                r++,
                this.once("drain", function() {
                    u("pre-pause writing complete"),
                    --r || e()
                }))
            } else
                e()
        }
        ,
        r.prototype.poll = function() {
            u("polling"),
            this.polling = !0,
            this.doPoll(),
            this.emit("poll")
        }
        ,
        r.prototype.onData = function(t) {
            var e = this;
            u("polling got data %s", t);
            var n = function(t, n, r) {
                return "opening" === e.readyState && e.onOpen(),
                "close" === t.type ? (e.onClose(),
                !1) : void e.onPacket(t)
            };
            s.decodePayload(t, this.socket.binaryType, n),
            "closed" !== this.readyState && (this.polling = !1,
            this.emit("pollComplete"),
            "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
        }
        ,
        r.prototype.doClose = function() {
            function t() {
                u("writing close packet"),
                e.write([{
                    type: "close"
                }])
            }
            var e = this;
            "open" === this.readyState ? (u("transport open - closing"),
            t()) : (u("transport not open - deferring close"),
            this.once("open", t))
        }
        ,
        r.prototype.write = function(t) {
            var e = this;
            this.writable = !1;
            var n = function() {
                e.writable = !0,
                e.emit("drain")
            };
            s.encodePayload(t, this.supportsBinary, function(t) {
                e.doWrite(t, n)
            })
        }
        ,
        r.prototype.uri = function() {
            var t = this.query || {}
              , e = this.secure ? "https" : "http"
              , n = "";
            !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            t = i.encode(t),
            this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
            t.length && (t = "?" + t);
            var r = this.hostname.indexOf(":") !== -1;
            return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }
    }
    , function(t, e, n) {
        function r(t) {
            this.path = t.path,
            this.hostname = t.hostname,
            this.port = t.port,
            this.secure = t.secure,
            this.query = t.query,
            this.timestampParam = t.timestampParam,
            this.timestampRequests = t.timestampRequests,
            this.readyState = "",
            this.agent = t.agent || !1,
            this.socket = t.socket,
            this.enablesXDR = t.enablesXDR,
            this.pfx = t.pfx,
            this.key = t.key,
            this.passphrase = t.passphrase,
            this.cert = t.cert,
            this.ca = t.ca,
            this.ciphers = t.ciphers,
            this.rejectUnauthorized = t.rejectUnauthorized,
            this.forceNode = t.forceNode,
            this.extraHeaders = t.extraHeaders,
            this.localAddress = t.localAddress
        }
        var o = n(27)
          , i = n(35);
        t.exports = r,
        i(r.prototype),
        r.prototype.onError = function(t, e) {
            var n = new Error(t);
            return n.type = "TransportError",
            n.description = e,
            this.emit("error", n),
            this
        }
        ,
        r.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
            this.doOpen()),
            this
        }
        ,
        r.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
            this.onClose()),
            this
        }
        ,
        r.prototype.send = function(t) {
            if ("open" !== this.readyState)
                throw new Error("Transport not open");
            this.write(t)
        }
        ,
        r.prototype.onOpen = function() {
            this.readyState = "open",
            this.writable = !0,
            this.emit("open")
        }
        ,
        r.prototype.onData = function(t) {
            var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e)
        }
        ,
        r.prototype.onPacket = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onClose = function() {
            this.readyState = "closed",
            this.emit("close")
        }
    }
    , function(t, e, n) {
        (function(t) {
            function r(t, n) {
                var r = "b" + e.packets[t.type] + t.data.data;
                return n(r)
            }
            function o(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                var o = t.data
                  , i = new Uint8Array(o)
                  , s = new Uint8Array(1 + o.byteLength);
                s[0] = v[t.type];
                for (var a = 0; a < i.length; a++)
                    s[a + 1] = i[a];
                return r(s.buffer)
            }
            function i(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                var o = new FileReader;
                return o.onload = function() {
                    t.data = o.result,
                    e.encodePacket(t, n, !0, r)
                }
                ,
                o.readAsArrayBuffer(t.data)
            }
            function s(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                if (m)
                    return i(t, n, r);
                var o = new Uint8Array(1);
                o[0] = v[t.type];
                var s = new k([o.buffer, t.data]);
                return r(s)
            }
            function a(t) {
                try {
                    t = d.decode(t)
                } catch (t) {
                    return !1
                }
                return t
            }
            function c(t, e, n) {
                for (var r = new Array(t.length), o = h(t.length, n), i = function(t, n, o) {
                    e(n, function(e, n) {
                        r[t] = n,
                        o(e, r)
                    })
                }, s = 0; s < t.length; s++)
                    i(s, t[s], o)
            }
            var u, l = n(28), f = n(29), p = n(30), h = n(31), d = n(32);
            t && t.ArrayBuffer && (u = n(33));
            var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
              , g = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent)
              , m = y || g;
            e.protocol = 3;
            var v = e.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }
              , b = l(v)
              , w = {
                type: "error",
                data: "parser error"
            }
              , k = n(34);
            e.encodePacket = function(e, n, i, a) {
                "function" == typeof n && (a = n,
                n = !1),
                "function" == typeof i && (a = i,
                i = null);
                var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                if (t.ArrayBuffer && c instanceof ArrayBuffer)
                    return o(e, n, a);
                if (k && c instanceof t.Blob)
                    return s(e, n, a);
                if (c && c.base64)
                    return r(e, a);
                var u = v[e.type];
                return void 0 !== e.data && (u += i ? d.encode(String(e.data)) : String(e.data)),
                a("" + u)
            }
            ,
            e.encodeBase64Packet = function(n, r) {
                var o = "b" + e.packets[n.type];
                if (k && n.data instanceof t.Blob) {
                    var i = new FileReader;
                    return i.onload = function() {
                        var t = i.result.split(",")[1];
                        r(o + t)
                    }
                    ,
                    i.readAsDataURL(n.data)
                }
                var s;
                try {
                    s = String.fromCharCode.apply(null, new Uint8Array(n.data))
                } catch (t) {
                    for (var a = new Uint8Array(n.data), c = new Array(a.length), u = 0; u < a.length; u++)
                        c[u] = a[u];
                    s = String.fromCharCode.apply(null, c)
                }
                return o += t.btoa(s),
                r(o)
            }
            ,
            e.decodePacket = function(t, n, r) {
                if (void 0 === t)
                    return w;
                if ("string" == typeof t) {
                    if ("b" == t.charAt(0))
                        return e.decodeBase64Packet(t.substr(1), n);
                    if (r && (t = a(t),
                    t === !1))
                        return w;
                    var o = t.charAt(0);
                    return Number(o) == o && b[o] ? t.length > 1 ? {
                        type: b[o],
                        data: t.substring(1)
                    } : {
                        type: b[o]
                    } : w
                }
                var i = new Uint8Array(t)
                  , o = i[0]
                  , s = p(t, 1);
                return k && "blob" === n && (s = new k([s])),
                {
                    type: b[o],
                    data: s
                }
            }
            ,
            e.decodeBase64Packet = function(t, e) {
                var n = b[t.charAt(0)];
                if (!u)
                    return {
                        type: n,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                var r = u.decode(t.substr(1));
                return "blob" === e && k && (r = new k([r])),
                {
                    type: n,
                    data: r
                }
            }
            ,
            e.encodePayload = function(t, n, r) {
                function o(t) {
                    return t.length + ":" + t
                }
                function i(t, r) {
                    e.encodePacket(t, !!s && n, !0, function(t) {
                        r(null, o(t))
                    })
                }
                "function" == typeof n && (r = n,
                n = null);
                var s = f(t);
                return n && s ? k && !m ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function(t, e) {
                    return r(e.join(""))
                }) : r("0:")
            }
            ,
            e.decodePayload = function(t, n, r) {
                if ("string" != typeof t)
                    return e.decodePayloadAsBinary(t, n, r);
                "function" == typeof n && (r = n,
                n = null);
                var o;
                if ("" == t)
                    return r(w, 0, 1);
                for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
                    var l = t.charAt(c);
                    if (":" != l)
                        a += l;
                    else {
                        if ("" == a || a != (i = Number(a)))
                            return r(w, 0, 1);
                        if (s = t.substr(c + 1, i),
                        a != s.length)
                            return r(w, 0, 1);
                        if (s.length) {
                            if (o = e.decodePacket(s, n, !0),
                            w.type == o.type && w.data == o.data)
                                return r(w, 0, 1);
                            var f = r(o, c + i, u);
                            if (!1 === f)
                                return
                        }
                        c += i,
                        a = ""
                    }
                }
                return "" != a ? r(w, 0, 1) : void 0
            }
            ,
            e.encodePayloadAsArrayBuffer = function(t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function(t) {
                        return n(null, t)
                    })
                }
                return t.length ? void c(t, r, function(t, e) {
                    var r = e.reduce(function(t, e) {
                        var n;
                        return n = "string" == typeof e ? e.length : e.byteLength,
                        t + n.toString().length + n + 2
                    }, 0)
                      , o = new Uint8Array(r)
                      , i = 0;
                    return e.forEach(function(t) {
                        var e = "string" == typeof t
                          , n = t;
                        if (e) {
                            for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++)
                                r[s] = t.charCodeAt(s);
                            n = r.buffer
                        }
                        e ? o[i++] = 0 : o[i++] = 1;
                        for (var a = n.byteLength.toString(), s = 0; s < a.length; s++)
                            o[i++] = parseInt(a[s]);
                        o[i++] = 255;
                        for (var r = new Uint8Array(n), s = 0; s < r.length; s++)
                            o[i++] = r[s]
                    }),
                    n(o.buffer)
                }) : n(new ArrayBuffer(0))
            }
            ,
            e.encodePayloadAsBlob = function(t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function(t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1,
                        "string" == typeof t) {
                            for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                                r[o] = t.charCodeAt(o);
                            t = r.buffer,
                            e[0] = 0
                        }
                        for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++)
                            a[o] = parseInt(s[o]);
                        if (a[s.length] = 255,
                        k) {
                            var c = new k([e.buffer, a.buffer, t]);
                            n(null, c)
                        }
                    })
                }
                c(t, r, function(t, e) {
                    return n(new k(e))
                })
            }
            ,
            e.decodePayloadAsBinary = function(t, n, r) {
                "function" == typeof n && (r = n,
                n = null);
                for (var o = t, i = [], s = !1; o.byteLength > 0; ) {
                    for (var a = new Uint8Array(o), c = 0 === a[0], u = "", l = 1; 255 != a[l]; l++) {
                        if (u.length > 310) {
                            s = !0;
                            break
                        }
                        u += a[l]
                    }
                    if (s)
                        return r(w, 0, 1);
                    o = p(o, 2 + u.length),
                    u = parseInt(u);
                    var f = p(o, 0, u);
                    if (c)
                        try {
                            f = String.fromCharCode.apply(null, new Uint8Array(f))
                        } catch (t) {
                            var h = new Uint8Array(f);
                            f = "";
                            for (var l = 0; l < h.length; l++)
                                f += String.fromCharCode(h[l])
                        }
                    i.push(f),
                    o = p(o, u)
                }
                var d = i.length;
                i.forEach(function(t, o) {
                    r(e.decodePacket(t, n, !0), o, d)
                })
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = Object.keys || function(t) {
            var e = []
              , n = Object.prototype.hasOwnProperty;
            for (var r in t)
                n.call(t, r) && e.push(r);
            return e
        }
    }
    , function(t, e, n) {
        (function(e) {
            function r(t) {
                function n(t) {
                    if (!t)
                        return !1;
                    if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File)
                        return !0;
                    if (o(t)) {
                        for (var r = 0; r < t.length; r++)
                            if (n(t[r]))
                                return !0
                    } else if (t && "object" == typeof t) {
                        t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                        for (var i in t)
                            if (Object.prototype.hasOwnProperty.call(t, i) && n(t[i]))
                                return !0
                    }
                    return !1
                }
                return n(t)
            }
            var o = n(15);
            t.exports = r
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            var r = t.byteLength;
            if (e = e || 0,
            n = n || r,
            t.slice)
                return t.slice(e, n);
            if (e < 0 && (e += r),
            n < 0 && (n += r),
            n > r && (n = r),
            e >= r || e >= n || 0 === r)
                return new ArrayBuffer(0);
            for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++,
            a++)
                i[a] = o[s];
            return i.buffer
        }
    }
    , function(t, e) {
        function n(t, e, n) {
            function o(t, r) {
                if (o.count <= 0)
                    throw new Error("after called too many times");
                --o.count,
                t ? (i = !0,
                e(t),
                e = n) : 0 !== o.count || i || e(null, r)
            }
            var i = !1;
            return n = n || r,
            o.count = t,
            0 === t ? e() : o
        }
        function r() {}
        t.exports = n
    }
    , function(t, e, n) {
        var r;
        (function(t, o) {
            !function(i) {
                function s(t) {
                    for (var e, n, r = [], o = 0, i = t.length; o < i; )
                        e = t.charCodeAt(o++),
                        e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++),
                        56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                        o--)) : r.push(e);
                    return r
                }
                function a(t) {
                    for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                        e = t[r],
                        e > 65535 && (e -= 65536,
                        o += b(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        o += b(e);
                    return o
                }
                function c(t, e) {
                    return b(t >> e & 63 | 128)
                }
                function u(t) {
                    if (0 == (4294967168 & t))
                        return b(t);
                    var e = "";
                    return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (e = b(t >> 12 & 15 | 224),
                    e += c(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240),
                    e += c(t, 12),
                    e += c(t, 6)),
                    e += b(63 & t | 128)
                }
                function l(t) {
                    for (var e, n = s(t), r = n.length, o = -1, i = ""; ++o < r; )
                        e = n[o],
                        i += u(e);
                    return i
                }
                function f() {
                    if (v >= m)
                        throw Error("Invalid byte index");
                    var t = 255 & g[v];
                    if (v++,
                    128 == (192 & t))
                        return 63 & t;
                    throw Error("Invalid continuation byte")
                }
                function p() {
                    var t, e, n, r, o;
                    if (v > m)
                        throw Error("Invalid byte index");
                    if (v == m)
                        return !1;
                    if (t = 255 & g[v],
                    v++,
                    0 == (128 & t))
                        return t;
                    if (192 == (224 & t)) {
                        var e = f();
                        if (o = (31 & t) << 6 | e,
                        o >= 128)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & t)) {
                        if (e = f(),
                        n = f(),
                        o = (15 & t) << 12 | e << 6 | n,
                        o >= 2048)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & t) && (e = f(),
                    n = f(),
                    r = f(),
                    o = (15 & t) << 18 | e << 12 | n << 6 | r,
                    o >= 65536 && o <= 1114111))
                        return o;
                    throw Error("Invalid WTF-8 detected")
                }
                function h(t) {
                    g = s(t),
                    m = g.length,
                    v = 0;
                    for (var e, n = []; (e = p()) !== !1; )
                        n.push(e);
                    return a(n)
                }
                var d = "object" == typeof e && e
                  , y = ("object" == typeof t && t && t.exports == d && t,
                "object" == typeof o && o);
                y.global !== y && y.window !== y || (i = y);
                var g, m, v, b = String.fromCharCode, w = {
                    version: "1.0.0",
                    encode: l,
                    decode: h
                };
                r = function() {
                    return w
                }
                .call(e, n, e, t),
                !(void 0 !== r && (t.exports = r))
            }(this)
        }
        ).call(e, n(12)(t), function() {
            return this
        }())
    }
    , function(t, e) {
        !function() {
            "use strict";
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++)
                n[t.charCodeAt(r)] = r;
            e.encode = function(e) {
                var n, r = new Uint8Array(e), o = r.length, i = "";
                for (n = 0; n < o; n += 3)
                    i += t[r[n] >> 2],
                    i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                    i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                    i += t[63 & r[n + 2]];
                return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
                i
            }
            ,
            e.decode = function(t) {
                var e, r, o, i, s, a = .75 * t.length, c = t.length, u = 0;
                "=" === t[t.length - 1] && (a--,
                "=" === t[t.length - 2] && a--);
                var l = new ArrayBuffer(a)
                  , f = new Uint8Array(l);
                for (e = 0; e < c; e += 4)
                    r = n[t.charCodeAt(e)],
                    o = n[t.charCodeAt(e + 1)],
                    i = n[t.charCodeAt(e + 2)],
                    s = n[t.charCodeAt(e + 3)],
                    f[u++] = r << 2 | o >> 4,
                    f[u++] = (15 & o) << 4 | i >> 2,
                    f[u++] = (3 & i) << 6 | 63 & s;
                return l
            }
        }()
    }
    , function(t, e) {
        (function(e) {
            function n(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.buffer instanceof ArrayBuffer) {
                        var r = n.buffer;
                        if (n.byteLength !== r.byteLength) {
                            var o = new Uint8Array(n.byteLength);
                            o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),
                            r = o.buffer
                        }
                        t[e] = r
                    }
                }
            }
            function r(t, e) {
                e = e || {};
                var r = new i;
                n(t);
                for (var o = 0; o < t.length; o++)
                    r.append(t[o]);
                return e.type ? r.getBlob(e.type) : r.getBlob()
            }
            function o(t, e) {
                return n(t),
                new Blob(t,e || {})
            }
            var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder
              , s = function() {
                try {
                    var t = new Blob(["hi"]);
                    return 2 === t.size
                } catch (t) {
                    return !1
                }
            }()
              , a = s && function() {
                try {
                    var t = new Blob([new Uint8Array([1, 2])]);
                    return 2 === t.size
                } catch (t) {
                    return !1
                }
            }()
              , c = i && i.prototype.append && i.prototype.getBlob;
            t.exports = function() {
                return s ? a ? e.Blob : o : c ? r : void 0
            }()
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        function r(t) {
            if (t)
                return o(t)
        }
        function o(t) {
            for (var e in r.prototype)
                t[e] = r.prototype[e];
            return t
        }
        t.exports = r,
        r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
        }
        ,
        r.prototype.once = function(t, e) {
            function n() {
                this.off(t, n),
                e.apply(this, arguments)
            }
            return n.fn = e,
            this.on(t, n),
            this
        }
        ,
        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks["$" + t];
            if (!n)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks["$" + t],
                this;
            for (var r, o = 0; o < n.length; o++)
                if (r = n[o],
                r === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }
        ,
        r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks["$" + t];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r)
                    n[r].apply(this, e)
            }
            return this
        }
        ,
        r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks["$" + t] || []
        }
        ,
        r.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }
    , function(t, e) {
        e.encode = function(t) {
            var e = "";
            for (var n in t)
                t.hasOwnProperty(n) && (e.length && (e += "&"),
                e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e
        }
        ,
        e.decode = function(t) {
            for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return e
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var n = function() {};
            n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t
        }
    }
    , function(t, e) {
        "use strict";
        function n(t) {
            var e = "";
            do
                e = s[t % a] + e,
                t = Math.floor(t / a);
            while (t > 0);return e
        }
        function r(t) {
            var e = 0;
            for (l = 0; l < t.length; l++)
                e = e * a + c[t.charAt(l)];
            return e
        }
        function o() {
            var t = n(+new Date);
            return t !== i ? (u = 0,
            i = t) : t + "." + n(u++)
        }
        for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, l = 0; l < a; l++)
            c[s[l]] = l;
        o.encode = n,
        o.decode = r,
        t.exports = o
    }
    , function(t, e, n) {
        (function(e) {
            function r() {}
            function o(t) {
                i.call(this, t),
                this.query = this.query || {},
                a || (e.___eio || (e.___eio = []),
                a = e.___eio),
                this.index = a.length;
                var n = this;
                a.push(function(t) {
                    n.onData(t)
                }),
                this.query.j = this.index,
                e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
                    n.script && (n.script.onerror = r)
                }, !1)
            }
            var i = n(25)
              , s = n(37);
            t.exports = o;
            var a, c = /\n/g, u = /\\n/g;
            s(o, i),
            o.prototype.supportsBinary = !1,
            o.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                this.form && (this.form.parentNode.removeChild(this.form),
                this.form = null,
                this.iframe = null),
                i.prototype.doClose.call(this)
            }
            ,
            o.prototype.doPoll = function() {
                var t = this
                  , e = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                e.async = !0,
                e.src = this.uri(),
                e.onerror = function(e) {
                    t.onError("jsonp poll error", e)
                }
                ;
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                this.script = e;
                var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                r && setTimeout(function() {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t),
                    document.body.removeChild(t)
                }, 100)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                function n() {
                    r(),
                    e()
                }
                function r() {
                    if (o.iframe)
                        try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                    try {
                        var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(t)
                    } catch (t) {
                        i = document.createElement("iframe"),
                        i.name = o.iframeId,
                        i.src = "javascript:0"
                    }
                    i.id = o.iframeId,
                    o.form.appendChild(i),
                    o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, s = document.createElement("form"), a = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
                    s.className = "socketio",
                    s.style.position = "absolute",
                    s.style.top = "-1000px",
                    s.style.left = "-1000px",
                    s.target = l,
                    s.method = "POST",
                    s.setAttribute("accept-charset", "utf-8"),
                    a.name = "d",
                    s.appendChild(a),
                    document.body.appendChild(s),
                    this.form = s,
                    this.area = a
                }
                this.form.action = this.uri(),
                r(),
                t = t.replace(u, "\\\n"),
                this.area.value = t.replace(c, "\\n");
                try {
                    this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === o.iframe.readyState && n()
                }
                : this.iframe.onload = n
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        (function(e) {
            function r(t) {
                var e = t && t.forceBase64;
                e && (this.supportsBinary = !1),
                this.perMessageDeflate = t.perMessageDeflate,
                this.usingBrowserWebSocket = f && !t.forceNode,
                this.usingBrowserWebSocket || (p = o),
                i.call(this, t)
            }
            var o, i = n(26), s = n(27), a = n(36), c = n(37), u = n(38), l = n(3)("engine.io-client:websocket"), f = e.WebSocket || e.MozWebSocket;
            if ("undefined" == typeof window)
                try {
                    o = n(41)
                } catch (t) {}
            var p = f;
            p || "undefined" != typeof window || (p = o),
            t.exports = r,
            c(r, i),
            r.prototype.name = "websocket",
            r.prototype.supportsBinary = !0,
            r.prototype.doOpen = function() {
                if (this.check()) {
                    var t = this.uri()
                      , e = void 0
                      , n = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                    n.pfx = this.pfx,
                    n.key = this.key,
                    n.passphrase = this.passphrase,
                    n.cert = this.cert,
                    n.ca = this.ca,
                    n.ciphers = this.ciphers,
                    n.rejectUnauthorized = this.rejectUnauthorized,
                    this.extraHeaders && (n.headers = this.extraHeaders),
                    this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? new p(t) : new p(t,e,n)
                    } catch (t) {
                        return this.emit("error", t)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                    this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            r.prototype.addEventListeners = function() {
                var t = this;
                this.ws.onopen = function() {
                    t.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    t.onClose()
                }
                ,
                this.ws.onmessage = function(e) {
                    t.onData(e.data)
                }
                ,
                this.ws.onerror = function(e) {
                    t.onError("websocket error", e)
                }
            }
            ,
            r.prototype.write = function(t) {
                function n() {
                    r.emit("flush"),
                    setTimeout(function() {
                        r.writable = !0,
                        r.emit("drain")
                    }, 0)
                }
                var r = this;
                this.writable = !1;
                for (var o = t.length, i = 0, a = o; i < a; i++)
                    !function(t) {
                        s.encodePacket(t, r.supportsBinary, function(i) {
                            if (!r.usingBrowserWebSocket) {
                                var s = {};
                                if (t.options && (s.compress = t.options.compress),
                                r.perMessageDeflate) {
                                    var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
                                    a < r.perMessageDeflate.threshold && (s.compress = !1)
                                }
                            }
                            try {
                                r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s)
                            } catch (t) {
                                l("websocket closed before onclose event")
                            }
                            --o || n()
                        })
                    }(t[i])
            }
            ,
            r.prototype.onClose = function() {
                i.prototype.onClose.call(this)
            }
            ,
            r.prototype.doClose = function() {
                "undefined" != typeof this.ws && this.ws.close()
            }
            ,
            r.prototype.uri = function() {
                var t = this.query || {}
                  , e = this.secure ? "wss" : "ws"
                  , n = "";
                this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = u()),
                this.supportsBinary || (t.b64 = 1),
                t = a.encode(t),
                t.length && (t = "?" + t);
                var r = this.hostname.indexOf(":") !== -1;
                return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }
            ,
            r.prototype.check = function() {
                return !(!p || "__initialize"in p && this.name === r.prototype.name)
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {}
    , function(t, e) {
        var n = [].indexOf;
        t.exports = function(t, e) {
            if (n)
                return t.indexOf(e);
            for (var r = 0; r < t.length; ++r)
                if (t[r] === e)
                    return r;
            return -1
        }
    }
    , function(t, e) {
        (function(e) {
            var n = /^[\],:{}\s]*$/
              , r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
              , o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
              , i = /(?:^|:|,)(?:\s*\[)+/g
              , s = /^\s+/
              , a = /\s+$/;
            t.exports = function(t) {
                return "string" == typeof t && t ? (t = t.replace(s, "").replace(a, ""),
                e.JSON && JSON.parse ? JSON.parse(t) : n.test(t.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + t)() : void 0) : null
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            this.io = t,
            this.nsp = e,
            this.json = this,
            this.ids = 0,
            this.acks = {},
            this.receiveBuffer = [],
            this.sendBuffer = [],
            this.connected = !1,
            this.disconnected = !0,
            n && n.query && (this.query = n.query),
            this.io.autoConnect && this.open()
        }
        var o = n(7)
          , i = n(35)
          , s = n(45)
          , a = n(46)
          , c = n(47)
          , u = n(3)("socket.io-client:socket")
          , l = n(29);
        t.exports = e = r;
        var f = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }
          , p = i.prototype.emit;
        i(r.prototype),
        r.prototype.subEvents = function() {
            if (!this.subs) {
                var t = this.io;
                this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))]
            }
        }
        ,
        r.prototype.open = r.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(),
            this.io.open(),
            "open" === this.io.readyState && this.onopen(),
            this.emit("connecting"),
            this)
        }
        ,
        r.prototype.send = function() {
            var t = s(arguments);
            return t.unshift("message"),
            this.emit.apply(this, t),
            this
        }
        ,
        r.prototype.emit = function(t) {
            if (f.hasOwnProperty(t))
                return p.apply(this, arguments),
                this;
            var e = s(arguments)
              , n = o.EVENT;
            l(e) && (n = o.BINARY_EVENT);
            var r = {
                type: n,
                data: e
            };
            return r.options = {},
            r.options.compress = !this.flags || !1 !== this.flags.compress,
            "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids),
            this.acks[this.ids] = e.pop(),
            r.id = this.ids++),
            this.connected ? this.packet(r) : this.sendBuffer.push(r),
            delete this.flags,
            this
        }
        ,
        r.prototype.packet = function(t) {
            t.nsp = this.nsp,
            this.io.packet(t)
        }
        ,
        r.prototype.onopen = function() {
            u("transport is open - connecting"),
            "/" !== this.nsp && (this.query ? this.packet({
                type: o.CONNECT,
                query: this.query
            }) : this.packet({
                type: o.CONNECT
            }))
        }
        ,
        r.prototype.onclose = function(t) {
            u("close (%s)", t),
            this.connected = !1,
            this.disconnected = !0,
            delete this.id,
            this.emit("disconnect", t)
        }
        ,
        r.prototype.onpacket = function(t) {
            if (t.nsp === this.nsp)
                switch (t.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                    this.onevent(t);
                    break;
                case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case o.ACK:
                    this.onack(t);
                    break;
                case o.BINARY_ACK:
                    this.onack(t);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR:
                    this.emit("error", t.data)
                }
        }
        ,
        r.prototype.onevent = function(t) {
            var e = t.data || [];
            u("emitting event %j", e),
            null != t.id && (u("attaching ack callback to event"),
            e.push(this.ack(t.id))),
            this.connected ? p.apply(this, e) : this.receiveBuffer.push(e)
        }
        ,
        r.prototype.ack = function(t) {
            var e = this
              , n = !1;
            return function() {
                if (!n) {
                    n = !0;
                    var r = s(arguments);
                    u("sending ack %j", r);
                    var i = l(r) ? o.BINARY_ACK : o.ACK;
                    e.packet({
                        type: i,
                        id: t,
                        data: r
                    })
                }
            }
        }
        ,
        r.prototype.onack = function(t) {
            var e = this.acks[t.id];
            "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data),
            e.apply(this, t.data),
            delete this.acks[t.id]) : u("bad ack %s", t.id)
        }
        ,
        r.prototype.onconnect = function() {
            this.connected = !0,
            this.disconnected = !1,
            this.emit("connect"),
            this.emitBuffered()
        }
        ,
        r.prototype.emitBuffered = function() {
            var t;
            for (t = 0; t < this.receiveBuffer.length; t++)
                p.apply(this, this.receiveBuffer[t]);
            for (this.receiveBuffer = [],
            t = 0; t < this.sendBuffer.length; t++)
                this.packet(this.sendBuffer[t]);
            this.sendBuffer = []
        }
        ,
        r.prototype.ondisconnect = function() {
            u("server disconnect (%s)", this.nsp),
            this.destroy(),
            this.onclose("io server disconnect")
        }
        ,
        r.prototype.destroy = function() {
            if (this.subs) {
                for (var t = 0; t < this.subs.length; t++)
                    this.subs[t].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            return this.connected && (u("performing disconnect (%s)", this.nsp),
            this.packet({
                type: o.DISCONNECT
            })),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        }
        ,
        r.prototype.compress = function(t) {
            return this.flags = this.flags || {},
            this.flags.compress = t,
            this
        }
    }
    , function(t, e) {
        function n(t, e) {
            var n = [];
            e = e || 0;
            for (var r = e || 0; r < t.length; r++)
                n[r - e] = t[r];
            return n
        }
        t.exports = n
    }
    , function(t, e) {
        "use strict";
        function n(t, e, n) {
            return t.on(e, n),
            {
                destroy: function() {
                    t.removeListener(e, n)
                }
            }
        }
        t.exports = n
    }
    , function(t, e) {
        var n = [].slice;
        t.exports = function(t, e) {
            if ("string" == typeof e && (e = t[e]),
            "function" != typeof e)
                throw new Error("bind() requires a function");
            var r = n.call(arguments, 2);
            return function() {
                return e.apply(t, r.concat(n.call(arguments)))
            }
        }
    }
    , function(t, e) {
        function n(t) {
            t = t || {},
            this.ms = t.min || 100,
            this.max = t.max || 1e4,
            this.factor = t.factor || 2,
            this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
            this.attempts = 0
        }
        t.exports = n,
        n.prototype.duration = function() {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var e = Math.random()
                  , n = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
            }
            return 0 | Math.min(t, this.max)
        }
        ,
        n.prototype.reset = function() {
            this.attempts = 0
        }
        ,
        n.prototype.setMin = function(t) {
            this.ms = t
        }
        ,
        n.prototype.setMax = function(t) {
            this.max = t
        }
        ,
        n.prototype.setJitter = function(t) {
            this.jitter = t
        }
    }
    ])
}),
!window.console)
    var console = {};
if (!window.logre)
    var logre = {};
if (!window.relog)
    var relog = {};
if (!window.kindOf)
    var kindOf = function(t) {
        function e(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        var n = Object.prototype.toString;
        if ("undefined" == typeof t)
            return "Undefined";
        if (null === t)
            return "Null";
        if (t === !0 || t === !1 || t instanceof Boolean)
            return "Boolean";
        if ("string" == typeof t || t instanceof String)
            return "String";
        if ("number" == typeof t || t instanceof Number)
            return "Number";
        if ("function" == typeof t || t instanceof Function)
            return "Function";
        if ("undefined" != typeof Array.isArray && Array.isArray(t))
            return "Array";
        if (t instanceof RegExp)
            return "Regexp";
        if (t instanceof Date)
            return "Date";
        var r = n.call(t);
        return "[object RegExp]" === r ? "Regexp" : "[object Date]" === r ? "Date" : "[object Arguments]" === r ? "Arguments" : "[object Error]" === r ? "Error" : "undefined" != typeof Buffer && e(t) ? "Buffer" : "[object Set]" === r ? "Set" : "[object WeakSet]" === r ? "Weakset" : "[object Map]" === r ? "Map" : "[object WeakMap]" === r ? "Weakmap" : "[object Symbol]" === r ? "Symbol" : "[object Int8Array]" === r ? "Int8Array" : "[object Uint8Array]" === r ? "Uint8Array" : "[object Uint8ClampedArray]" === r ? "Uint8ClampedArray" : "[object Int16Array]" === r ? "Int16Array" : "[object Uint16Array]" === r ? "Uint16Array" : "[object Int32Array]" === r ? "Int32Array" : "[object Uint32Array]" === r ? "Uint32Array" : "[object Float32Array]" === r ? "Float32Array" : "[object Float64Array]" === r ? "Float64Array" : "Object"
    };
!function(root, console) {
    "use strict";
    function askChannel(t) {
        t = t || "";
        var e = prompt(t + "Enter Channel to using on Console.Re/Your-Channel-Name", "Your-Channel-Name");
        return e && null !== e && "Your-Channel-Name" !== e ? e : askChannel("Please ")
    }
    function getCaller(t) {
        t = t || 7;
        var e, n = printStackTrace(), r = n[t];
        return void 0 !== r ? (e = r.match(/^.*([\/<][^\/>]*>?):(\d*):(\d*)?$/),
        null === e && (e = r.match(/^.*([\/<][^\/>]*>?):(\d*)?$/))) : (e[1] = "",
        e[2] = "0",
        e[3] = "0"),
        {
            file: e ? e[1] : "",
            line: e ? e[2] : "0",
            col: e ? e[3] : "0"
        }
    }
    function getWindowSize() {
        var t = document.width || window.outerWidth || document.documentElement.clientWidth
          , e = document.height || window.outerHeight || document.documentElement.clientHeight;
        return "Window Size: [number]" + t + "px[/number] by [number]" + e + "px[/number]"
    }
    function getOtherTypes(t) {
        var e, o = "";
        try {
            e = eval(t),
            e === !0 ? o = "[booltrue]true[/booltrue]" : e === !1 ? o = "[boolfalse]false[/boolfalse]" : !isNaN(parseFloat(e)) && isFinite(e) ? o = "[number]" + e + "[/number]" : "number" == typeof e ? o = "[number][Number][/number]" : "string" == typeof e ? o = '"String"' : "function" == typeof e ? o = "[Function]" : e.nodeType ? o = "<" + e.nodeName + " Element>" : "object" == typeof e ? (o = "{Object}",
            isArray(e) && (o = "[Array]")) : o = "[color=red]undefined[/color]"
        } catch (t) {
            o = "[color=red]" + t + "[/color]"
        }
        return o
    }
    function getType(t) {
        var e = "";
        if ("string" != typeof t)
            return getOtherTypes(t);
        try {
            var n = JSON.parse(t);
            "object" == typeof n ? (e = "{Object}",
            isArray(n) && (e = "[Array]")) : e = getOtherTypes(t)
        } catch (n) {
            e = getOtherTypes(t)
        }
        return e
    }
    function replaceWithNum(t) {
        var e = "" + t;
        return e.replace(/([0-9]+)(px|em||)/g, "[number]$1$2[/number]")
    }
    function getSize(t) {
        var e, n;
        return t ? (e = getStyle(t, "width"),
        n = getStyle(t, "height"),
        "[number]" + e + "[/number] by [number]" + n + "[/number]") : ""
    }
    function getStyle(t, e) {
        return t && t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? document.defaultView.getComputedStyle(t, null).getPropertyValue(e) : ""
    }
    function stringify(t, e, n) {
        if ("object" != typeof t)
            return t;
        var r, o, i = [], s = [], a = {}, c = "", u = "", l = JSON.stringify(t, function(t, l) {
            if (!l)
                return l;
            if (l.nodeType) {
                if (l.id && (c = l.id),
                l.className && (u = l.className),
                "size" === e)
                    return "[tag]<" + l.nodeName + ">[/tag] " + getSize(l);
                if ("css" === e) {
                    if (isArray(n))
                        return n.forEach(function(t) {
                            a[t] = replaceWithNum(getStyle(l, t))
                        }),
                        a;
                    if (n)
                        return o = " " + n + ":" + getStyle(l, n) + ";",
                        c && (c = " [attr]id=[/attr][string]'" + c + "'[/string]"),
                        u && (u = " [attr]class=[/attr][string]'" + u + "'[/string]"),
                        "[tag]<" + l.nodeName + c + u + ">[/tag]" + replaceWithNum(o)
                } else
                    a.element = l.nodeName,
                    c && (a.id = c),
                    u && (a.class = u),
                    a.visible = VISIBILITY.isVisible(l),
                    a.size = getSize(l),
                    a.html = l.outerHTML;
                return a
            }
            if (l.window && l.window === l.window.window)
                return "{Window Object}";
            if ("function" == typeof l)
                return "[Function]";
            if ("object" == typeof l && null !== l) {
                var f = Array.prototype.slice.call(l);
                if (l.length && f.length === l.length && (l = f),
                r = i.indexOf(l),
                r !== -1)
                    return "[ Circular {" + (s[r] || "root") + "} ]";
                i.push(l),
                s.push(t)
            }
            return l
        });
        return l
    }
    function handleError(t, e, n) {
        if (e || 0 !== t.indexOf("Script error") || 0 !== n) {
            var r = new RegExp(window.location.origin,"g");
            e = e.replace(r, ""),
            console.re.error("[color=red]" + t + "[/color] in [i]" + e + "[/i] Line: [b]" + n + "[/b]")
        }
    }
    var chost = "console.re", version = "1.0.2", deployHash = "66ef1a260e", env = "production", cport = "production" === env ? "http:" === location.protocol ? "80" : "443" : "8088", name = "toServerRe", channel, consoleOptions = window.consolere && window.consolere.options || document.getElementById("consolerescript").getAttribute("data-options") || "", redirectConsoleMethods = consoleOptions.indexOf("enable_redirect_default_console_methods_to_remote") >= 0, duplicateToDefaultConsole = !(consoleOptions.indexOf("disable_default_console_output") >= 0);
    localStorage.debug = "off",
    cport = document.getElementById("consolerescript").getAttribute("data-port") || cport,
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        null == e ? e = 0 : e < 0 && (e = Math.max(0, this.length + e));
        for (var n = e, r = this.length; n < r; n++)
            if (this[n] === t)
                return n;
        return -1
    }
    ),
    Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        var n, r;
        for (n = 0,
        r = this.length; n < r; ++n)
            n in this && t.call(e, this[n], n, this)
    }
    );
    var isArray = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.host),
    channel = void 0 === window.consolere || "YOUR-CHANNEL-NAME" === window.consolere.channel ? document.getElementById("consolerescript").getAttribute("data-channel") || "" : window.consolere.channel || "",
    channel || (channel = askChannel());
    var truncate = function(t, e) {
        if (this.length <= t)
            return this;
        var n = this.substr(0, t - 1);
        return (e ? n.substr(0, n.lastIndexOf(" ")) : n) + "..."
    };
    root[name] = function() {
        function t(t, n, o, i) {
            c = i || getCaller(),
            (n.length && y.indexOf(t) !== -1 || "command" === t) && (d.client && e.apply(null, arguments),
            d.server && r.apply(null, arguments),
            a || d.connect())
        }
        function e(t, e) {
            t = "trace" === t ? "debug" : t,
            e = isArray(e) ? e : [e],
            duplicateToDefaultConsole && "command" !== t && e.forEach(function(e) {
                if ("string" == typeof e && "" !== e) {
                    var r = XBBCODE.process({
                        text: e
                    });
                    r.error || (e = r.html)
                }
                n(e, t)
            })
        }
        function n(t, e) {
            if ("" !== t && "-" !== t) {
                var n = {};
                n = redirectConsoleMethods ? consoleDefault[e] ? consoleDefault[e] : consoleDefault.log : console[e] ? console[e] : console.log;
                try {
                    n("console.re [" + e + "]", t)
                } catch (t) {}
            }
        }
        function r(t, n, r) {
            var o, i, h, d, y, g = "";
            if (r = r || "",
            "css" === r)
                y = n[n.length - 1],
                isArray(y) || "string" == typeof y ? n.pop() : r = "";
            else if ("count" === r)
                i = n.toString(),
                isNaN(l[i]) ? l[i] = 1 : l[i]++,
                n.push(l[i]);
            else if ("time" === r)
                h = n.toString(),
                p[h] = (new Date).getTime(),
                n.push("[white]started[/white]");
            else if ("timeEnd" === r)
                h = n.toString(),
                d = (new Date).getTime() - p[h],
                isNaN(d) ? n.push("[white]not started[/white]") : n.push("[white]ends[/white] in [number]" + d + "[/number] ms");
            else if ("now" === r) {
                var m, v, b = n.toString(), w = perfNow();
                f[b] ? (m = w - f[b],
                v = " [color=gray]from last call[/color]") : (m = w,
                v = " [color=gray]from navigation start[/color]"),
                f[b] = w,
                b = "-" !== b ? v + "[color=gray] at `" + b + "` [/color]" : v,
                n = [],
                n.push("[white]performance now is[/white] [number]" + m.toFixed(2) + "[/number] ms" + b)
            }
            "" !== r && isArray(n) && e(r, n);
            for (var k = 0; k < n.length; k++)
                n[k] = stringify(n[k], r, y);
            "object" != typeof n || n.length ? ("command" === t && (g = r),
            o = {
                command: g,
                channel: channel,
                browser: browser,
                level: t,
                args: n,
                caller: c
            }) : o = n,
            a ? (u.length && s(u),
            a.emit(name, o)) : u.push([t, o])
        }
        function o(t) {
            return function() {
                d._dispatch(t, [].slice.call(arguments))
            }
        }
        function i() {
            a && a.emit("channel", channel),
            s(u)
        }
        function s(t) {
            var e = t.shift();
            for (d._dispatch("command", "", "autoclear"),
            d._dispatch("command", "", "automark"); e; )
                r.apply(null, e),
                e = t.shift()
        }
        var a, c = [], u = [], l = [], f = {}, p = [], h = !1, d = {
            client: !0,
            server: !0,
            loaded: !1
        }, y = ["trace", "debug", "info", "log", "warn", "error", "size", "test", "assert", "count", "css", "media", "time", "timeEnd", "now", "type", "mark", "command"];
        redirectConsoleMethods && (window.consoleDefault = {},
        ["log", "info", "warn", "error", "debug", "time", "timeEnd"].forEach(function(t) {
            window.consoleDefault[t] = console[t],
            console[t] = o(t)
        }));
        for (var g, m = 0; m < y.length; m++)
            g = y[m],
            d[g] = o(g);
        return d.connect = function(t) {
            root.io ? ("console.re" === chost && (cport = "443"),
            "443" !== cport && "https" !== cport || (chost = "https://" + chost),
            a = root.io.connect(chost + ("undefined" != typeof cport ? ":" + cport : "")),
            a.on("connect", i)) : t || d.connect(!0)
        }
        ,
        d.size = function(t) {
            t && "undefined" != typeof t && "window" !== t ? d._dispatch("size", [].slice.call(arguments), "size") : d._dispatch("size", [getWindowSize()])
        }
        ,
        d.count = d.c = function() {
            d._dispatch("count", [].slice.call(arguments), "count")
        }
        ,
        d.time = d.ti = function() {
            d._dispatch("time", [].slice.call(arguments), "time")
        }
        ,
        d.timeEnd = d.te = function() {
            d._dispatch("time", [].slice.call(arguments), "timeEnd")
        }
        ,
        d.trace = d.tr = function() {
            var t = printStackTrace()
              , e = []
              , n = [].slice.call(arguments);
            for (m = 0; t.length > m; m++)
                /console.re.js/gi.test(t[m]) || e.push(t[m]);
            d._dispatch("trace", [n.toString(), e])
        }
        ,
        d.error = d.e = function() {
            var t = [].slice.call(arguments)
              , e = ""
              , n = [];
            t.forEach(function(t) {
                e = "[color=red]" + t + "[/color]",
                n.push(e)
            }),
            d._dispatch("error", n)
        }
        ,
        d.css = d.c = function() {
            d._dispatch("css", [].slice.call(arguments), "css")
        }
        ,
        d.test = d.ts = function() {
            var t = [].slice.call(arguments)
              , e = ""
              , n = [];
            t.forEach(function(t) {
                var r;
                e = kindOf(t),
                /|Function|Object|Array|Element|/gi.test(e) && (e = "[color=#BBB519]" + e + "[/color]");
                try {
                    r = truncate.apply(t.toString(), [30, !1])
                } catch (e) {
                    r = t
                }
                n.push("[color=#BC9044]" + r + "[/color][color=gray] is [/color]" + e)
            }),
            d._dispatch("test", n)
        }
        ,
        d.type = d.t = function() {
            var t = [].slice.call(arguments)
              , e = ""
              , n = [];
            t.forEach(function(t) {
                e = "[color=#BBB519]" + kindOf(t) + "[/color]",
                n.push("type is " + e)
            }),
            d._dispatch("type", n)
        }
        ,
        d.assert = d.a = function() {
            var t = [].slice.call(arguments)
              , e = [];
            t.forEach(function(n, r) {
                "string" != typeof n && (n || ("string" == typeof t[r + 1] ? e.push("[color=red]" + t[r + 1] + "[/color]") : e.push("[color=red]Assertion Failure[/color]")))
            }),
            e.length && d._dispatch("assert", e)
        }
        ,
        d._dispatch = function(e, n, r, o) {
            t(e, n, r, o)
        }
        ,
        d.media = d.mq = function(t, e) {
            function n(t) {
                window.matchMedia && (clearTimeout(m),
                m = setTimeout(function() {
                    d.media("w", t)
                }, 500))
            }
            function r(t) {
                for (var e = c.length - 1; e >= 0; e--)
                    if (c[e].media === t)
                        return !0;
                return !1
            }
            function o() {
                var t, e = i();
                if (p)
                    for (t = e.length - 1; t >= 0; t--)
                        r(e[t]) || c.push(window.matchMedia(e[t]));
                if (f) {
                    var n = document.getElementsByTagName("link");
                    for (t = n.length - 1; t >= 0; t--)
                        n[t].media && c.push(window.matchMedia(n[t].media))
                }
            }
            function i() {
                var t, e, n, r = document.styleSheets, o = [];
                for (e = r.length - 1; e >= 0; e--)
                    try {
                        if (t = r[e].cssRules)
                            for (n = 0; n < t.length; n++)
                                t[n].type === CSSRule.MEDIA_RULE && o.push(t[n].media.mediaText)
                    } catch (t) {
                        console.error(t)
                    }
                return o
            }
            function s() {
                var t = [];
                for (var e in c)
                    c[e].matches && t.push(replaceWithNum(c[e].media));
                return t
            }
            var a, c = [], u = [], l = [], f = !1, p = !0, y = "landscape", g = window.orientation || 0;
            if ("type" === t ? (f = !0,
            p = !1) : "all-types" !== t && "all" !== t || (p = f = !0),
            "watch" === t) {
                var m;
                a = getCaller(5),
                window.addEventListener && (window.addEventListener("resize", function() {
                    n(a)
                }, !1),
                window.addEventListener("orientationchange", function() {
                    g !== window.orientation && (h = !0),
                    n(a)
                }, !1))
            }
            o(),
            l = s(),
            l.length ? 1 === l.length ? u.push(s()[0]) : u.push(s()) : u.push("[yellow]No Media Query Rules[/yellow]"),
            "w" === t ? (u.push(getWindowSize()),
            h && (90 !== Math.abs(window.orientation) && (y = "portrait"),
            u.push("Orientation: [yellow]" + y + "[/yellow]")),
            d._dispatch("media", u, "", e)) : d._dispatch("media", u)
        }
        ,
        d.now = d.n = function(t) {
            "undefined" == typeof t && (t = "-"),
            d._dispatch("now", t, "now")
        }
        ,
        d.clear = d.cl = function() {
            d._dispatch("command", "", "clear")
        }
        ,
        d.mark = d.m = function() {
            var t = [].slice.call(arguments)
              , e = 0 === t.length ? "" : t;
            d._dispatch("command", e, "mark")
        }
        ,
        d.l = d.log,
        d.i = d.info,
        d.d = d.debug,
        d
    }(),
    console.re = root[name],
    logre = console.re,
    relog = console.re;
    var perfNow = function() {
        var t, e, n, r, o, i;
        return "undefined" != typeof performance && null !== performance && performance.now ? performance.now() : "undefined" != typeof process && null !== process && process.hrtime ? (e = process.hrtime,
        t = function() {
            var t;
            return t = e(),
            1e9 * t[0] + t[1]
        }
        ,
        r = t(),
        i = 1e9 * process.uptime(),
        o = r - i,
        (t() - o) / 1e6) : Date.now ? (n = Date.now(),
        Date.now() - n) : (n = (new Date).getTime(),
        (new Date).getTime() - n)
    }
      , BrowserDetect = {
        searchString: function(t) {
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t[n].str
                  , o = t[n].prop;
                if (this.versionSearchString = t[n].vsearch || t[n].name,
                r && r.indexOf(t[n].substr) !== -1) {
                    e = t[n].name;
                    break
                }
                if (o) {
                    e = t[n].name;
                    break
                }
            }
            return e
        },
        searchVersion: function(t) {
            var e = t.indexOf(this.versionSearchString);
            return e !== -1 && parseFloat(t.substr(e + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            str: navigator.userAgent,
            substr: "OPR",
            vsearch: "OPR",
            name: {
                f: "Opera",
                s: "OP"
            }
        }, {
            str: navigator.userAgent,
            substr: "Chrome",
            vsearch: "Chrome",
            name: {
                f: "Chrome",
                s: "CR"
            }
        }, {
            str: navigator.userAgent,
            substr: "OmniWeb",
            vsearch: "OmniWeb",
            name: {
                f: "OmniWeb",
                s: "OW"
            }
        }, {
            str: navigator.vendor,
            substr: "Apple",
            name: {
                f: "Safari",
                s: "SF"
            },
            vsearch: "Version"
        }, {
            prop: window.opera,
            name: {
                f: "Opera",
                s: "OP"
            },
            vsearch: "Version"
        }, {
            str: navigator.vendor,
            substr: "iCab",
            name: {
                f: "iCab",
                s: "iC"
            }
        }, {
            str: navigator.vendor,
            substr: "KDE",
            name: {
                f: "Konqueror",
                s: "KDE"
            }
        }, {
            str: navigator.userAgent,
            substr: "Firefox",
            name: {
                f: "Firefox",
                s: "FF"
            },
            vsearch: "Firefox"
        }, {
            str: navigator.vendor,
            substr: "Camino",
            name: {
                f: "Camino",
                s: "CM"
            }
        }, {
            str: navigator.userAgent,
            substr: "Netscape",
            name: {
                f: "Netscape",
                s: "NS"
            }
        }, {
            str: navigator.userAgent,
            substr: "MSIE",
            name: {
                f: "Explorer",
                s: "IE"
            },
            vsearch: "MSIE"
        }, {
            str: navigator.userAgent,
            substr: "Trident",
            name: {
                f: "Explorer",
                s: "IE"
            },
            vsearch: "rv"
        }, {
            str: navigator.userAgent,
            substr: "Mozilla",
            name: {
                f: "Netscape",
                s: "NS"
            },
            vsearch: "Mozilla"
        }],
        dataOS: [{
            str: navigator.platform,
            substr: "Win",
            name: "Win"
        }, {
            str: navigator.platform,
            substr: "Mac",
            name: "Mac"
        }, {
            str: navigator.userAgent,
            substr: "iPhone",
            name: "iOS"
        }, {
            str: navigator.userAgent,
            substr: "iPad",
            name: "iOS"
        }, {
            str: navigator.userAgent,
            substr: "Android",
            name: "Android"
        }, {
            str: navigator.platform,
            substr: "Linux",
            name: "Linux"
        }],
        init: function() {
            return {
                browser: this.searchString(this.dataBrowser) || "An unknown browser",
                version: this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "",
                OS: this.searchString(this.dataOS) || "an unknown OS"
            }
        }
    }
      , browser = BrowserDetect.init();
    window.onerror = handleError,
    window.ConsoleRe = !0,
    window.ConsoleReConnectorHash = deployHash,
    window.ConsoleReConnectorVersion = version
}(this, console),
window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var t = window.styleMedia || window.media;
    if (!t) {
        var e = document.createElement("style")
          , n = document.getElementsByTagName("script")[0]
          , r = null;
        e.type = "text/css",
        e.id = "matchmediajs-test",
        n.parentNode.insertBefore(e, n),
        r = "getComputedStyle"in window && window.getComputedStyle(e, null) || e.currentStyle,
        t = {
            matchMedium: function(t) {
                var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                return e.styleSheet ? e.styleSheet.cssText = n : e.textContent = n,
                "1px" === r.width
            }
        }
    }
    return function(e) {
        return {
            matches: t.matchMedium(e || "all"),
            media: e || "all"
        }
    }
}());
var VISIBILITY = function() {
    function t(r, o, i, s, a, c, u) {
        var l = r.parentNode
          , f = 2;
        return !!n(r) && (9 === l.nodeType || "0" !== e(r, "opacity") && "none" !== e(r, "display") && "hidden" !== e(r, "visibility") && ("undefined" != typeof o && "undefined" != typeof i && "undefined" != typeof s && "undefined" != typeof a && "undefined" != typeof c && "undefined" != typeof u || (o = r.offsetTop,
        a = r.offsetLeft,
        s = o + r.offsetHeight,
        i = a + r.offsetWidth,
        c = r.offsetWidth,
        u = r.offsetHeight),
        !l || ("hidden" !== e(l, "overflow") && "scroll" !== e(l, "overflow") || !(a + f > l.offsetWidth + l.scrollLeft || a + c - f < l.scrollLeft || o + f > l.offsetHeight + l.scrollTop || o + u - f < l.scrollTop)) && (r.offsetParent === l && (a += l.offsetLeft,
        o += l.offsetTop),
        t(l, o, i, s, a, c, u))))
    }
    function e(t, e) {
        return window.getComputedStyle ? document.defaultView.getComputedStyle(t, null)[e] : t.currentStyle ? t.currentStyle[e] : void 0
    }
    function n(t) {
        for (; t = t.parentNode; )
            if (t == document)
                return !0;
        return !1
    }
    return {
        getStyle: e,
        isVisible: t
    }
}();
!function(t, e) {
    t.printStackTrace = e()
}(this, function() {
    function t(e) {
        e = e || {
            guess: !0
        };
        var n = e.e || null
          , r = !!e.guess
          , o = new t.implementation
          , i = o.run(n);
        return r ? o.guessAnonymousFunctions(i) : i
    }
    return t.implementation = function() {}
    ,
    t.implementation.prototype = {
        run: function(t, e) {
            return t = t || this.createException(),
            e = e || this.mode(t),
            "other" === e ? this.other(arguments.callee) : this[e](t)
        },
        createException: function() {
            try {
                this.undef()
            } catch (t) {
                return t
            }
        },
        mode: function(t) {
            return t.arguments && t.stack ? "chrome" : t.stack && t.sourceURL ? "safari" : t.stack && t.number ? "ie" : t.stack && t.fileName ? "firefox" : t.message && t["opera#sourceloc"] ? t.stacktrace ? t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? "opera9" : "opera10a" : "opera9" : t.message && t.stack && t.stacktrace ? t.stacktrace.indexOf("called from line") < 0 ? "opera10b" : "opera11" : t.stack && !t.fileName ? "chrome" : "other"
        },
        instrumentFunction: function(e, n, r) {
            e = e || window;
            var o = e[n];
            e[n] = function() {
                return r.call(this, t().slice(4)),
                e[n]._instrumented.apply(this, arguments)
            }
            ,
            e[n]._instrumented = o
        },
        deinstrumentFunction: function(t, e) {
            t[e].constructor === Function && t[e]._instrumented && t[e]._instrumented.constructor === Function && (t[e] = t[e]._instrumented)
        },
        chrome: function(t) {
            return (t.stack + "\n").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}() ($1)$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}() ($1)").replace(/^(.+) \((.+)\)$/gm, "$1@$2").split("\n").slice(1, -1)
        },
        safari: function(t) {
            return t.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n")
        },
        ie: function(t) {
            return t.stack.replace(/^\s*at\s+(.*)$/gm, "$1").replace(/^Anonymous function\s+/gm, "{anonymous}() ").replace(/^(.+)\s+\((.+)\)$/gm, "$1@$2").split("\n").slice(1)
        },
        firefox: function(t) {
            return t.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^(?:\((\S*)\))?@/gm, "{anonymous}($1)@").split("\n")
        },
        opera11: function(t) {
            for (var e = "{anonymous}", n = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/, r = t.stacktrace.split("\n"), o = [], i = 0, s = r.length; i < s; i += 2) {
                var a = n.exec(r[i]);
                if (a) {
                    var c = a[4] + ":" + a[1] + ":" + a[2]
                      , u = a[3] || "global code";
                    u = u.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, e),
                    o.push(u + "@" + c + " -- " + r[i + 1].replace(/^\s+/, ""))
                }
            }
            return o
        },
        opera10b: function(t) {
            for (var e = /^(.*)@(.+):(\d+)$/, n = t.stacktrace.split("\n"), r = [], o = 0, i = n.length; o < i; o++) {
                var s = e.exec(n[o]);
                if (s) {
                    var a = s[1] ? s[1] + "()" : "global code";
                    r.push(a + "@" + s[2] + ":" + s[3])
                }
            }
            return r
        },
        opera10a: function(t) {
            for (var e = "{anonymous}", n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, s = r.length; i < s; i += 2) {
                var a = n.exec(r[i]);
                if (a) {
                    var c = a[3] || e;
                    o.push(c + "()@" + a[2] + ":" + a[1] + " -- " + r[i + 1].replace(/^\s+/, ""))
                }
            }
            return o
        },
        opera9: function(t) {
            for (var e = "{anonymous}", n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, s = r.length; i < s; i += 2) {
                var a = n.exec(r[i]);
                a && o.push(e + "()@" + a[2] + ":" + a[1] + " -- " + r[i + 1].replace(/^\s+/, ""))
            }
            return o
        },
        other: function(t) {
            var e, n, r = "{anonymous}", o = /function\s*([\w\-$]+)?\s*\(/i, i = [], s = 10;
            try {
                for (; t && t.arguments && i.length < s; )
                    e = o.test(t.toString()) ? RegExp.$1 || r : r,
                    n = Array.prototype.slice.call(t.arguments || []),
                    i[i.length] = e + "(" + this.stringifyArguments(n) + ")",
                    t = t.caller;
                return i
            } catch (t) {
                return ""
            }
        },
        stringifyArguments: function(t) {
            for (var e = [], n = Array.prototype.slice, r = 0; r < t.length; ++r) {
                var o = t[r];
                void 0 === o ? e[r] = "undefined" : null === o ? e[r] = "null" : o.constructor && (o.constructor === Array ? o.length < 3 ? e[r] = "[" + this.stringifyArguments(o) + "]" : e[r] = "[" + this.stringifyArguments(n.call(o, 0, 1)) + "..." + this.stringifyArguments(n.call(o, -1)) + "]" : o.constructor === Object ? e[r] = "#object" : o.constructor === Function ? e[r] = "#function" : o.constructor === String ? e[r] = '"' + o + '"' : o.constructor === Number && (e[r] = o))
            }
            return e.join(",")
        },
        sourceCache: {},
        ajax: function(t) {
            return ""
        },
        createXMLHTTPObject: function() {
            for (var t, e = [function() {
                return new XMLHttpRequest
            }
            , function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }
            , function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }
            , function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
            ], n = 0; n < e.length; n++)
                try {
                    return t = e[n](),
                    this.createXMLHTTPObject = e[n],
                    t
                } catch (t) {}
        },
        isSameDomain: function(t) {
            return "undefined" != typeof location && t.indexOf(location.hostname) !== -1
        },
        getSource: function(t) {
            return t in this.sourceCache || (this.sourceCache[t] = this.ajax(t).split("\n")),
            this.sourceCache[t]
        },
        guessAnonymousFunctions: function(t) {
            for (var e = 0; e < t.length; ++e) {
                var n = /\{anonymous\}\(.*\)@(.*)/
                  , r = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/
                  , o = t[e]
                  , i = n.exec(o);
                if (i) {
                    var s = r.exec(i[1]);
                    if (s) {
                        var a = s[1]
                          , c = s[2]
                          , u = s[3] || 0;
                        if (a && this.isSameDomain(a) && c) {
                            var l = this.guessAnonymousFunction(a, c, u);
                            t[e] = o.replace("{anonymous}", l)
                        }
                    }
                }
            }
            return t
        },
        guessAnonymousFunction: function(t, e, n) {
            var r;
            try {
                r = this.findFunctionName(this.getSource(t), e)
            } catch (e) {
                r = "getSource failed with url: " + t + ", exception: " + e.toString()
            }
            return r
        },
        findFunctionName: function(t, e) {
            for (var n, r, o, i = /function\s+([^(]*?)\s*\(([^)]*)\)/, s = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, a = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, c = "", u = Math.min(e, 20), l = 0; l < u; ++l)
                if (n = t[e - l - 1],
                o = n.indexOf("//"),
                o >= 0 && (n = n.substr(0, o)),
                n) {
                    if (c = n + c,
                    r = s.exec(c),
                    r && r[1])
                        return r[1];
                    if (r = i.exec(c),
                    r && r[1])
                        return r[1];
                    if (r = a.exec(c),
                    r && r[1])
                        return r[1]
                }
            return "(?)"
        }
    },
    t
});
var XBBCODE = function() {
    function t(e, n, r, o, i, u, l) {
        l = l || [],
        r++;
        var f, p, h, d, y = new RegExp("(<bbcl=" + r + " )(" + a.join("|") + ")([ =>])","gi"), g = new RegExp("(<bbcl=" + r + " )(" + a.join("|") + ")([ =>])","i"), m = u.match(y) || [], v = s[e] || {};
        for (y.lastIndex = 0,
        m || (u = ""),
        h = 0; h < m.length; h++)
            g.lastIndex = 0,
            d = m[h].match(g)[2].toLowerCase(),
            v.restrictChildrenTo.length > 0 && (v.validChildLookup[d] || (p = 'The tag "' + d + '" is not allowed as a child of the tag "' + e + '".',
            l.push(p))),
            f = s[d] || {},
            f.restrictParentsTo.length > 0 && (f.validParentLookup[e] || (p = 'The tag "' + e + '" is not allowed as a parent of the tag "' + d + '".',
            l.push(p)));
        return u = u.replace(c, function(e, n, r, o, i) {
            return l = t(r, e, n, r, o, i, l),
            e
        }),
        l
    }
    function e(t) {
        return t = t.replace(/\<([^\>][^\>]*?)\>/gi, function(t, e) {
            var n = e.match(/^bbcl=([0-9]+) /);
            return null === n ? "<bbcl=0 " + e + ">" : "<" + e.replace(/^(bbcl=)([0-9]+)/, function(t, e, n) {
                return e + (parseInt(n, 10) + 1)
            }) + ">"
        })
    }
    function n(t) {
        return t.replace(/<bbcl=[0-9]+ \/\*>/gi, "").replace(/<bbcl=[0-9]+ /gi, "&#91;").replace(/>/gi, "&#93;")
    }
    function r(t) {
        var e = t.text;
        return e = e.replace(c, v)
    }
    function o(t) {
        for (t = t.replace(/\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/gi, "<"),
        t = t.replace(/\[(?=list([ =][^\]]*)?\]|\/list[\]])/gi, ">"); t !== (t = t.replace(/>list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi, function(t, e, n) {
            for (var r = t; r !== (r = r.replace(/\[\*\]([^\[]*?)(\[\*\]|>\/list])/i, function(t, e, n) {
                n = ">/list]" === n ? "</*]</list]" : "</*][*]";
                var r = "<*]" + e + n;
                return r
            })); )
                ;
            return r = r.replace(/>/g, "<")
        })); )
            ;
        return t = t.replace(/</g, "[")
    }
    function i(t) {
        for (; t !== (t = t.replace(u, function(t, n, r, o) {
            return t = t.replace(/\[/g, "<"),
            t = t.replace(/\]/g, ">"),
            e(t)
        })); )
            ;
        return t
    }
    var s, a, c, u, l, f, p, h = {}, d = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:@#%&()~_?\+=\/\\\.]*$/, y = /^(?:red|green|blue|orange|yellow|black|white|brown|gray|silver|purple|maroon|fushsia|lime|olive|navy|teal|aqua)$/, g = /^#?[a-fA-F0-9]{6}$/, m = [];
    s = {
        b: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        string: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        attr: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        booltrue: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        boolfalse: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        bbcode: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        color: {
            openTag: function(t, e) {
                var n = t.substr(1) || "#FFF";
                return g.lastIndex = 0,
                y.test(n) || (g.test(n) ? "#" !== n.substr(0, 1) && (n = "#" + n) : n = "black"),
                ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        noparse: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            },
            noParse: !0
        },
        i: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        tag: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        number: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        img: {
            openTag: function(t, e) {
                var n = e;
                return d.lastIndex = 0,
                d.test(n) || (n = ""),
                ""
            },
            closeTag: function(t, e) {
                return ""
            },
            displayContent: !1
        },
        s: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        size: {
            openTag: function(t, e) {
                var n = parseInt(t.substr(1), 10) || 0;
                return (n < 1 || n > 20) && (n = 1),
                ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        u: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        url: {
            openTag: function(t, e) {
                var n;
                return n = t ? t.substr(1) : e.replace(/<.*?>/g, ""),
                d.lastIndex = 0,
                d.test(n) || (n = "#"),
                ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        red: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        blue: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        green: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        yellow: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        orange: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        white:
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        black: {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        },
        "*": {
            openTag: function(t, e) {
                return ""
            },
            closeTag: function(t, e) {
                return ""
            }
        }
    },
    a = [],
    function() {
        var t, e, n;
        for (t in s)
            if (s.hasOwnProperty(t)) {
                for ("*" === t ? a.push("\\" + t) : (a.push(t),
                s[t].noParse && m.push(t)),
                s[t].validChildLookup = {},
                s[t].validParentLookup = {},
                s[t].restrictParentsTo = s[t].restrictParentsTo || [],
                s[t].restrictChildrenTo = s[t].restrictChildrenTo || [],
                n = s[t].restrictChildrenTo.length,
                e = 0; e < n; e++)
                    s[t].validChildLookup[s[t].restrictChildrenTo[e]] = !0;
                for (n = s[t].restrictParentsTo.length,
                e = 0; e < n; e++)
                    s[t].validParentLookup[s[t].restrictParentsTo[e]] = !0
            }
    }(),
    c = new RegExp("<bbcl=([0-9]+) (" + a.join("|") + ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>","gi"),
    u = new RegExp("\\[(" + a.join("|") + ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]","gi"),
    l = new RegExp("\\[(" + m.join("|") + ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]","gi"),
    function() {
        for (var t = [], e = 0; e < a.length; e++)
            "\\*" !== a[e] && t.push("/" + a[e]);
        f = new RegExp("(\\[)((?:" + a.join("|") + ")(?:[ =][^\\]]*?)?)(\\])","gi"),
        p = new RegExp("(\\[)(" + t.join("|") + ")(\\])","gi")
    }();
    var v = function(t, e, r, o, i) {
        r = r.toLowerCase();
        var a = s[r].noParse ? n(i) : i.replace(c, v)
          , u = s[r].openTag(o, a)
          , l = s[r].closeTag(o, a);
        return s[r].displayContent === !1 && (a = ""),
        u + a + l
    };
    return h.process = function(e) {
        var n = {
            html: "",
            error: !1
        }
          , s = [];
        for (e.text = e.text.replace(/</g, "<"),
        e.text = e.text.replace(/>/g, ">"),
        e.text = e.text.replace(f, function(t, e, n, r) {
            return "<" + n + ">"
        }),
        e.text = e.text.replace(p, function(t, e, n, r) {
            return "<" + n + ">"
        }),
        e.text = e.text.replace(/\[/g, "&#91;"),
        e.text = e.text.replace(/\]/g, "&#93;"),
        e.text = e.text.replace(/</g, "["),
        e.text = e.text.replace(/>/g, "]"); e.text !== (e.text = e.text.replace(l, function(t, e, n, r) {
            return r = r.replace(/\[/g, "&#91;"),
            r = r.replace(/\]/g, "&#93;"),
            n = n || "",
            r = r || "",
            "[" + e + n + "]" + r + "[/" + e + "]"
        })); )
            ;
        return e.text = o(e.text),
        e.text = i(e.text),
        s = t("bbcode", e.text, -1, "", "", e.text),
        n.html = r(e),
        n.html.indexOf("[") === -1 && n.html.indexOf("]") === -1 || s.push("Some tags appear to be misaligned."),
        e.removeMisalignedTags && (n.html = n.html.replace(/\[.*?\]/g, "")),
        e.addInLineBreaks && (n.html = n.html.replace(/\r\n/g, "\n"),
        n.html = n.html.replace(/(\r|\n)/g, "$1<br/>")),
        n.html = n.html.replace("&#91;", "["),
        n.html = n.html.replace("&#93;", "]"),
        n.error = 0 !== s.length,
        n.errorQueue = s,
        n
    }
    ,
    h
}();
c
