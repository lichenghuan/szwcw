! function(e, n, t) {
    function r(e, n) {
        return "string" == typeof e ? n.indexOf(e) + 1 : e.test(n)
    }

    function o(e) {
        return (e || "").toLowerCase()
    }

    function s(e) {
        var n = 1,
            t = arguments;
        return e.replace(/%s/g, function() {
            return t[n++]
        })
    }

    function a(e) {
        var n = {};
        if (e)
            for (var t, r = e.split("&"), i = r.length; i--;) {
                t = r[i].split("=");
                n[o(t[0])] = decodeURIComponent(t[1])
            }
        return n
    }

    function c() {
        for (var e, t, i = C.getElementsByTagName("script"), s = i.length, a = o(n); s--;) {
            w = i[s];
            t = i[s].src;
            e = r(a, o(t));
            if (e) return t.substr(e - 1 + a.length)
        }
    }

    function l(e, n) {
        var t, i, o, s = y.plugins.length;
        for (t = 0; t < s; t++) {
            i = y.plugins[t];
            o = e && r(e, i.name);
            e && !o || !n || (o = r(n, i.description));
            if (o) return i
        }
    }

    function u() {
        var n;
        if (e.ActiveXObject) {
            try {
                n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                return
            }
            if (n) return parseFloat(n.GetVariable("$version").substr(4))
        } else {
            n = l(null, /^Shockwave Flash \d/);
            if (n) return parseFloat(n.description.substr(16))
        }
    }

    function f() {
        return Object.prototype.hasOwnProperty && (!F || b || r("webkit/5", j)) ? 1 : 0
    }

    function p() {
        var e, n, t = A;
        if (r(/\(ip(hone|ad|od);/, j)) return "ios";
        if (r(/iemobile|wpdesktop/, j)) return "winphone";
        if (F) {
            t = j;
            n = "blackberry android"
        } else n = "linux mac win";
        n = n.split(" ");
        e = n.length;
        for (; e--;)
            if (r(n[e], t)) return n[e]
    }

    function h() {
        var n = k.width || 0,
            t = k.height || 0;
        if ("number" == typeof e.orientation && n < t) {
            t = n;
            n = k.height
        }
        return r(/android 2\.[23]/, j) ? 4 : n < 320 || t < 240 ? 0 : n < 640 || t < 480 ? 1 : n < 1024 || t < 768 ? 2 : 3
    }

    function d(e, n, t, o) {
        var s = e + "/msg;_=" + +new Date + ";T=" + n;
        o && (s += ";d=" + o);
        for (i = t.length; i--;) r(/^[od]/, t[i]) && (s += ";t=" + encodeURIComponent(t[i]));
        return s + ";r=" + location.hostname + location.pathname
    }

    function g(n, t, r, i) {
        r = C.createElement("script");
        r.type = "text/javascript";
        r.async = !0;
        r.src = n.length < 2048 ? n : n.substr(0, 2048);
        if (t) {
            for (0; !i || i in e || C.getElementById(i); i = Math.random().toString(36).replace(/[\d.]+/, ""));
            r.src += "&F=" + i;
            e[i] = function() {
                t();
                delete e[i];
                r.parentNode.removeChild(r)
            }
        }
        w.parentNode.insertBefore(r, w)
    }

    function m(e, n, t) {
        t = t.split(" ");
        n = "number" == typeof n ? t[n] : n;
        for (var r = t.length; r--;)(t[r] == n ? S : _).push(e + "-" + t[r])
    }

    function v() {
        var e, n, r = a(c()),
            i = "dd-",
            l = r.baseurl || "http://content.clicklifter.com/acknowledgements/",
            u = r.commip,
            f = "FPSessionID",
            p = r[o(f)],
            h = r.operatorwebsitelogic,
            m = "&IDName=" + i,
            v = u && p,
            b = "&a=" + i,
            w = "&A=" + i,
            y = +new Date,
            k = r.localsubid,
            j = function() {
                if (u && h) {
                    n = d(u, o(h.charAt(0)), S, k);
                    g("http://" + n)
                }
            };
        if (r.legacy) {
            if (v) {
                n = s("http://%s/Mapping/?%s=%s&Action=", u, f, p);
                t("%sAdd%s%s", n, m, S.join(m));
                t("%sRemove%s%s", n, m, _.join(m))
            } else {
                e = S.length;
                for (; e--;) t("%s%s%s/?%s", l, i, S[e], y)
            }
            j()
        } else if (r.groups && v) {
            n = s("http://%s/SubscriberChange?_=%s&f=%s%s%s%s%s", u, y, p, b, S.join(b), w, _.join(w));
            g(n, j)
        } else j()
    }
    try {
        var b, w, y = e.navigator,
            k = e.screen,
            j = o(y.userAgent),
            A = o(y.platform),
            F = r(/android|mobi|phone/, j) || r(/webos/, A),
            I = [],
            S = [],
            _ = [],
            C = e.document;
        t = t || function() {
            var n = s.apply(e, arguments),
                t = new Image;
            t.src = n;
            I.push(t)
        };
        m("os", b = p() || 0, "unknown ios android blackberry win mac linux winphone");
        m("js", f(), "limited full");
        m("display", h(), "0_0 320_240 640_480 1024_768 unknown");
        m("flash", u() ? 1 : 0, "false true");
        v()
    } catch (e) {}
}(this, "/device/learn.js?");
//# sourceMappingURL=http://192.168.10.15/_source_maps/57b772a5/st0x5ZMnsD12MEuqRZjWiA.map