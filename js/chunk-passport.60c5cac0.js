(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-passport"], {
    "24ae": function(e, t, n) {
        !function(t, n) {
            e.exports = n()
        }(window, function() {
            return function(e) {
                var t = {};
                function n(o) {
                    if (t[o])
                        return t[o].exports;
                    var i = t[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, o) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var o = Object.create(null);
                    if (n.r(o),
                    Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var i in e)
                            n.d(o, i, function(t) {
                                return e[t]
                            }
                            .bind(null, i));
                    return o
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "/lib/",
                n(n.s = 25)
            }([function(e, t, n) {
                "use strict";
                var o = n(15)
                  , i = n(47)
                  , r = Object.prototype.toString;
                function a(e) {
                    return "[object Array]" === r.call(e)
                }
                function s(e) {
                    return null !== e && "object" == typeof e
                }
                function c(e) {
                    return "[object Function]" === r.call(e)
                }
                function l(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]),
                        a(e))
                            for (var n = 0, o = e.length; n < o; n++)
                                t.call(null, e[n], n, e);
                        else
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
                }
                e.exports = {
                    isArray: a,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === r.call(e)
                    },
                    isBuffer: i,
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: s,
                    isUndefined: function(e) {
                        return void 0 === e
                    },
                    isDate: function(e) {
                        return "[object Date]" === r.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === r.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === r.call(e)
                    },
                    isFunction: c,
                    isStream: function(e) {
                        return s(e) && c(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                    },
                    forEach: l,
                    merge: function e() {
                        var t = {};
                        function n(n, o) {
                            "object" == typeof t[o] && "object" == typeof n ? t[o] = e(t[o], n) : t[o] = n
                        }
                        for (var o = 0, i = arguments.length; o < i; o++)
                            l(arguments[o], n);
                        return t
                    },
                    deepMerge: function e() {
                        var t = {};
                        function n(n, o) {
                            "object" == typeof t[o] && "object" == typeof n ? t[o] = e(t[o], n) : t[o] = "object" == typeof n ? e({}, n) : n
                        }
                        for (var o = 0, i = arguments.length; o < i; o++)
                            l(arguments[o], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return l(t, function(t, i) {
                            e[i] = n && "function" == typeof t ? o(t, n) : t
                        }),
                        e
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.loadScript = function(e) {
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.src = e,
                    document.getElementsByTagName("head")[0].appendChild(t)
                }
                ,
                t.showDom = function(e, t) {
                    void 0 === t && (t = "block"),
                    e && (e.style.display = t)
                }
                ,
                t.hideDom = function(e) {
                    e && (e.style.display = "none")
                }
                ,
                t.isValidEmail = function(e) {
                    return void 0 === e && (e = ""),
                    /^[a-z0-9]+([._\-+]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]*\.){1,63}[a-z0-9]+$/.test(e.toLowerCase())
                }
                ,
                t.isValidMobile = function(e) {
                    return void 0 === e && (e = ""),
                    /^[0-9]{3,14}$/.test(e.trim())
                }
                ,
                t.updateDomVisible = function(e, n) {
                    Object.keys(e).forEach(function(o) {
                        var i = n[o];
                        i && (e[o] ? t.showDom(i) : t.hideDom(i))
                    })
                }
                ,
                t.updateDomInputValue = function(e, t) {
                    Object.keys(e).forEach(function(n) {
                        var o = t[n]
                          , i = e[n] || "";
                        o && ("INPUT" === o.tagName ? o.value = i : o.innerHTML = i)
                    })
                }
                ,
                t.firstToUpperCase = function(e) {
                    return void 0 === e && (e = ""),
                    e.replace(/^\S/, function(e) {
                        return e.toLocaleUpperCase()
                    })
                }
                ,
                t.isContainerDom = function(e, t) {
                    var n = e.target;
                    return !(t != n && !t.contains(n))
                }
                ;
                var o = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }
                  , i = /[&<>"']/g
                  , r = RegExp(i.source);
                t.escapeHtml = function(e) {
                    return e && r.test(e) ? e.replace(i, function(e) {
                        return o[e]
                    }) : e || ""
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(1);
                t.updateFormItemClass = function(e, t) {
                    var n = e.classList.contains("form-item-validation") ? "form-item-validation-error" : "form-validation-error";
                    t ? e.classList.remove(n) : e.classList.add(n)
                }
                ;
                var i = function(e, n, i) {
                    var r = o.isValidEmail(e)
                      , a = n.querySelector(".error-msg");
                    return i.accountTypes.length > 1 && a && (a.innerText = e ? i.locale.input_error_msg_email : i.locale.input_placeholder_account),
                    t.updateFormItemClass(n, r),
                    r
                }
                  , r = function(e, n, i) {
                    var r = o.isValidMobile(e)
                      , a = n.querySelector(".error-msg");
                    return i.accountTypes.length > 1 && a && (a.innerText = e ? i.locale.input_error_msg_mobile : i.locale.input_placeholder_account),
                    t.updateFormItemClass(n, r),
                    r
                }
                  , a = function(e, n, o) {
                    var i = o && o.min || 1
                      , r = o && o.max || void 0
                      , a = e.length
                      , s = a >= i;
                    return void 0 !== r && (s = a <= r && a >= i),
                    t.updateFormItemClass(n, s),
                    s
                }
                  , s = function(e, t) {
                    return a(e, t, {
                        min: 6,
                        max: 20
                    })
                }
                  , c = {
                    loginForm: {
                        loginEmailInput: {
                            dom: "loginEmailFormItem",
                            validator: i
                        },
                        loginMobileInput: {
                            dom: "loginMobileFormItem",
                            validator: r
                        },
                        loginPwdInput: {
                            dom: "loginPwdFormItem",
                            validator: s
                        }
                    },
                    loginVerifyCodeForm: {
                        loginVerifyCodeInput: {
                            dom: "loginVerifyCodeFormItem",
                            validator: a
                        }
                    },
                    fPwdEmailForm: {
                        fPwdEmailInput: {
                            dom: "fPwdEmailFormItem",
                            validator: i
                        },
                        fPwdMobileInput: {
                            dom: "fPwdMobileFormItem",
                            validator: r
                        }
                    },
                    fPwdForm: {
                        fPwdResendEmailInput: {
                            dom: "fPwdResendEmailFormItem",
                            validator: i
                        },
                        fPwdResendMobileInput: {
                            dom: "fPwdResendMobileFormItem",
                            validator: r
                        },
                        fPwdCodeInput: {
                            dom: "fPwdCodeFormItem",
                            validator: a
                        },
                        fPwdPasswordInput: {
                            dom: "fPwdPasswordFormItem",
                            similarWith: "fPwdPrePasswordInput",
                            validator: s
                        },
                        fPwdPrePasswordInput: {
                            dom: "fPwdPrePasswordForItem",
                            similarWith: "fPwdPasswordInput",
                            validator: function(e, n, o) {
                                var i = e === o;
                                return t.updateFormItemClass(n, i),
                                i
                            }
                        }
                    }
                };
                t.default = function(e, t, n, o) {
                    var i = e.domState
                      , r = Object.keys(i).find(function(e) {
                        return i[e]
                    });
                    if (r && c[r]) {
                        var a = c[r];
                        Object.keys(a).forEach(function(i) {
                            var r = a[i]
                              , s = r.dom
                              , c = r.validator
                              , l = r.similarWith
                              , d = n[i]
                              , u = o && o[i]
                              , m = e.domState.loginForm ? "login" : e.domState.fPwdForm ? "fPwdResend" : "fPwd";
                            if (!(d === u || "email" === e.accountType && i === m + "MobileInput" || "mobile" === e.accountType && i === m + "EmailInput"))
                                if (l) {
                                    var f = n[l]
                                      , p = a[l]
                                      , _ = p.dom
                                      , h = p.validator;
                                    e.domValidState[s] = c(d, t[s], f),
                                    e.domValidState[_] = h(f, t[_], d)
                                } else
                                    e.domValidState[s] = c(d, t[s], e)
                        })
                    }
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                    this.ssoContainer = document.getElementById("TiktokAds_SSO_Login"),
                    this.loginForm = document.getElementById("TikTok_Ads_SSO_Login_Form"),
                    this.loginFormContent = document.getElementById("TikTok_Ads_SSO_Login_Form_Content"),
                    this.loginFormError = document.getElementById("TikTok_Ads_SSO_Login_Form_Error"),
                    this.loginNoticeFormError = document.getElementById("TikTok_Ads_SSO_Login_Form_Notice"),
                    this.loginBtn = document.getElementById("TikTok_Ads_SSO_Login_Btn"),
                    this.loginLarkBtn = document.getElementById("TikTok_Ads_SSO_Login_Lark_Btn"),
                    this.loginEmailInput = document.getElementById("TikTok_Ads_SSO_Login_Email_Input"),
                    this.loginEmailFormItem = document.getElementById("TikTok_Ads_SSO_Login_Email_FormItem"),
                    this.loginMobileInput = document.getElementById("TikTok_Ads_SSO_Login_Mobile_Input"),
                    this.loginMobileFormItem = document.getElementById("TikTok_Ads_SSO_Login_Mobile_FormItem"),
                    this.loginPwdInput = document.getElementById("TikTok_Ads_SSO_Login_Pwd_Input"),
                    this.loginPwdIcon = document.getElementById("TikTok_Ads_SSO_Login_Pwd_Icon"),
                    this.loginPwdFormItem = document.getElementById("TikTok_Ads_SSO_Login_Pwd_FormItem"),
                    this.loginSignUpBtn = document.getElementById("TikTok_Ads_SSO_Login_Sign_Up_Btn"),
                    this.loginFPwdBtn = document.getElementById("TikTok_Ads_SSO_Login_FPwd_Btn"),
                    this.loginVerifyCodeForm = document.getElementById("TikTok_Ads_SSO_Login_Verify_Form"),
                    this.loginVerifyCodeContent = document.getElementById("TikTok_Ads_SSO_Login_Code_Content"),
                    this.loginVerifyCodeFormError = document.getElementById("TikTok_Ads_SSO_Login_Code_Form_Error"),
                    this.loginVerifyCodeResendBtn = document.getElementById("TikTok_Ads_SSO_Login_Code_Resend_Email_Btn"),
                    this.loginVerifyCodeTimer = document.getElementById("TikTok_Ads_SSO_Login_Code_Resend_Email_Timer"),
                    this.loginVerifyCodeInput = document.getElementById("TikTok_Ads_SSO_Login_Code_Input"),
                    this.loginVerifyCodeFormItem = document.getElementById("TikTok_Ads_SSO_Login_Code_FormItem"),
                    this.loginVerifyCodeBtn = document.getElementById("TikTok_Ads_SSO_Login_Code_Btn"),
                    this.loginVerifyCodeFPwdBtn = document.getElementById("TikTok_Ads_SSO_Login_Code_FPwd_Btn"),
                    this.loginVerifyCodeAccount = document.getElementById("TikTok_Ads_SSO_Login_Code_Email"),
                    this.loginVerifyCodeBack = document.getElementById("TikTok_Ads_SSO_Login_Code_Back"),
                    this.fPwdEmailForm = document.getElementById("TikTok_Ads_SSO_FPwd_Email_Form"),
                    this.fPwdEmailFormContent = document.getElementById("TikTok_Ads_SSO_FPwd_Email_Form_Content"),
                    this.fPwdEmailFormError = document.getElementById("TikTok_Ads_SSO_FPwd_Code_Form_Error"),
                    this.fPwdEmailInput = document.getElementById("TikTok_Ads_SSO_FPwd_Email_Input"),
                    this.fPwdEmailFormItem = document.getElementById("TikTok_Ads_SSO_FPwd_Email_FormItem"),
                    this.fPwdMobileInput = document.getElementById("TikTok_Ads_SSO_FPwd_Mobile_Input"),
                    this.fPwdMobileFormItem = document.getElementById("TikTok_Ads_SSO_FPwd_Mobile_FormItem"),
                    this.sendEmailBtn = document.getElementById("TikTok_Ads_SSO_FPwd_Send_Email_Btn"),
                    this.fPwdEmailLoginBtn = document.getElementById("TikTok_Ads_SSO_FPwd_Email_Login_Btn"),
                    this.fPwdForm = document.getElementById("TikTok_Ads_SSO_FPwd_Form"),
                    this.fPwdFormContent = document.getElementById("TikTok_Ads_SSO_FPwd_Form_Content"),
                    this.fPwdFormError = document.getElementById("TikTok_Ads_SSO_FPwd_Form_Error"),
                    this.fPwdResendBtn = document.getElementById("TikTok_Ads_SSO_FPwd_Resend_Email_Btn"),
                    this.fPwdResendTimer = document.getElementById("TikTok_Ads_SSO_FPwd_Resend_Email_Timer"),
                    this.fPwdResendEmailInput = document.getElementById("TikTok_Ads_SSO_FPwd_Resend_Email_Input"),
                    this.fPwdResendEmailFormItem = document.getElementById("TikTok_Ads_SSO_FPwd_Resend_Email_FormItem"),
                    this.fPwdResendMobileInput = document.getElementById("TikTok_Ads_SSO_FPwdResend_Mobile_Input"),
                    this.fPwdResendMobileFormItem = document.getElementById("TikTok_Ads_SSO_FPwdResend_Mobile_FormItem"),
                    this.fPwdCodeInput = document.getElementById("TikTok_Ads_SSO_FPwd_Code_Input"),
                    this.fPwdCodeFormItem = document.getElementById("TikTok_Ads_SSO_FPwd_Code_FormItem"),
                    this.fPwdPasswordInput = document.getElementById("TikTok_Ads_SSO_FPwd_Password_Input"),
                    this.fPwdPasswordIcon = document.getElementById("TikTok_Ads_SSO_FPwd_Password_Icon"),
                    this.fPwdPasswordFormItem = document.getElementById("TikTok_Ads_SSO_FPwd_Password_FormItem"),
                    this.fPwdPrePasswordInput = document.getElementById("TikTok_Ads_SSO_FPwd_Pre_Password_Input"),
                    this.fPwdPrePasswordIcon = document.getElementById("TikTok_Ads_SSO_FPwd_Pre_Password_Icon"),
                    this.fPwdPrePasswordForItem = document.getElementById("TikTok_Ads_SSO_FPwd_Pre_Password_FormItem"),
                    this.fPwdLoginBtn = document.getElementById("TikTok_Ads_SSO_FPwd_Login_Btn"),
                    this.fPwdResetBtn = document.getElementById("TikTok_Ads_SSO_FPwd_Reset_Btn"),
                    this.sliderVarifyContainer = document.getElementById("TikTok_Ads_SSO_Slider_Varify_Container"),
                    this.areaLoginContainer = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Container"),
                    this.areaLoginSelect = document.getElementById("TikTok_Ads_SSO_Login_Area_Select"),
                    this.areaLoginIcon = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Icon"),
                    this.areaLoginValue = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Value"),
                    this.areaLoginSelectInput = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Input"),
                    this.areaLoginSelectInputClear = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Input_Clear"),
                    this.areaLoginSelectUL = document.getElementById("TikTok_Ads_SSO_Login_Area_Select_Ul"),
                    this.areaFPwdContainer = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Container"),
                    this.areaFPwdSelect = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select"),
                    this.areaFPwdIcon = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Icon"),
                    this.areaFPwdValue = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Value"),
                    this.areaFPwdSelectInput = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Input"),
                    this.areaFPwdSelectInputClear = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Input_Clear"),
                    this.areaFPwdSelectUL = document.getElementById("TikTok_Ads_SSO_FPwd_Area_Select_Ul"),
                    this.areaFPwdResendContainer = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Container"),
                    this.areaFPwdResendSelect = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select"),
                    this.areaFPwdResendIcon = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Icon"),
                    this.areaFPwdResendValue = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Value"),
                    this.areaFPwdResendSelectInput = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Input"),
                    this.areaFPwdResendSelectInputClear = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Input_Clear"),
                    this.areaFPwdResendSelectUL = document.getElementById("TikTok_Ads_SSO_FPwdResend_Area_Select_Ul")
                };
                t.default = o
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map(function(t) {
                            var n = function(e, t) {
                                var n, o, i, r = e[1] || "", a = e[3];
                                if (!a)
                                    return r;
                                if (t && "function" == typeof btoa) {
                                    var s = (n = a,
                                    o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                                    i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),
                                    "/*# ".concat(i, " */"))
                                      , c = a.sources.map(function(e) {
                                        return "/*# sourceURL=".concat(a.sourceRoot).concat(e, " */")
                                    });
                                    return [r].concat(c).concat([s]).join("\n")
                                }
                                return [r].join("\n")
                            }(t, e);
                            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
                        }).join("")
                    }
                    ,
                    t.i = function(e, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var o = {}, i = 0; i < this.length; i++) {
                            var r = this[i][0];
                            null != r && (o[r] = !0)
                        }
                        for (var a = 0; a < e.length; a++) {
                            var s = e[a];
                            null != s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")),
                            t.push(s))
                        }
                    }
                    ,
                    t
                }
            }
            , function(e, t, n) {
                var o, i, r = {}, a = (o = function() {
                    return window && document && document.all && !window.atob
                }
                ,
                function() {
                    return void 0 === i && (i = o.apply(this, arguments)),
                    i
                }
                ), s = function(e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }, c = function(e) {
                    var t = {};
                    return function(e, n) {
                        if ("function" == typeof e)
                            return e();
                        if (void 0 === t[e]) {
                            var o = s.call(this, e, n);
                            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                                try {
                                    o = o.contentDocument.head
                                } catch (e) {
                                    o = null
                                }
                            t[e] = o
                        }
                        return t[e]
                    }
                }(), l = null, d = 0, u = [], m = n(34);
                function f(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n]
                          , i = r[o.id];
                        if (i) {
                            i.refs++;
                            for (var a = 0; a < i.parts.length; a++)
                                i.parts[a](o.parts[a]);
                            for (; a < o.parts.length; a++)
                                i.parts.push(k(o.parts[a], t))
                        } else {
                            var s = [];
                            for (a = 0; a < o.parts.length; a++)
                                s.push(k(o.parts[a], t));
                            r[o.id] = {
                                id: o.id,
                                refs: 1,
                                parts: s
                            }
                        }
                    }
                }
                function p(e, t) {
                    for (var n = [], o = {}, i = 0; i < e.length; i++) {
                        var r = e[i]
                          , a = t.base ? r[0] + t.base : r[0]
                          , s = {
                            css: r[1],
                            media: r[2],
                            sourceMap: r[3]
                        };
                        o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                            id: a,
                            parts: [s]
                        })
                    }
                    return n
                }
                function _(e, t) {
                    var n = c(e.insertInto);
                    if (!n)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var o = u[u.length - 1];
                    if ("top" === e.insertAt)
                        o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                        u.push(t);
                    else if ("bottom" === e.insertAt)
                        n.appendChild(t);
                    else {
                        if ("object" != typeof e.insertAt || !e.insertAt.before)
                            throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                        var i = c(e.insertAt.before, n);
                        n.insertBefore(t, i)
                    }
                }
                function h(e) {
                    if (null === e.parentNode)
                        return !1;
                    e.parentNode.removeChild(e);
                    var t = u.indexOf(e);
                    t >= 0 && u.splice(t, 1)
                }
                function A(e) {
                    var t = document.createElement("style");
                    if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                    void 0 === e.attrs.nonce) {
                        var o = function() {
                            return n.nc
                        }();
                        o && (e.attrs.nonce = o)
                    }
                    return g(t, e.attrs),
                    _(e, t),
                    t
                }
                function g(e, t) {
                    Object.keys(t).forEach(function(n) {
                        e.setAttribute(n, t[n])
                    })
                }
                function k(e, t) {
                    var n, o, i, r;
                    if (t.transform && e.css) {
                        if (!(r = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css)))
                            return function() {}
                            ;
                        e.css = r
                    }
                    if (t.singleton) {
                        var a = d++;
                        n = l || (l = A(t)),
                        o = y.bind(null, n, a, !1),
                        i = y.bind(null, n, a, !0)
                    } else
                        e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                            var t = document.createElement("link");
                            return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                            e.attrs.rel = "stylesheet",
                            g(t, e.attrs),
                            _(e, t),
                            t
                        }(t),
                        o = C.bind(null, n, t),
                        i = function() {
                            h(n),
                            n.href && URL.revokeObjectURL(n.href)
                        }
                        ) : (n = A(t),
                        o = w.bind(null, n),
                        i = function() {
                            h(n)
                        }
                        );
                    return o(e),
                    function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                                return;
                            o(e = t)
                        } else
                            i()
                    }
                }
                e.exports = function(e, t) {
                    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                        throw new Error("The style-loader cannot be used in a non-browser environment");
                    (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
                    t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
                    t.insertInto || (t.insertInto = "head"),
                    t.insertAt || (t.insertAt = "bottom");
                    var n = p(e, t);
                    return f(n, t),
                    function(e) {
                        for (var o = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            (s = r[a.id]).refs--,
                            o.push(s)
                        }
                        for (e && f(p(e, t), t),
                        i = 0; i < o.length; i++) {
                            var s;
                            if (0 === (s = o[i]).refs) {
                                for (var c = 0; c < s.parts.length; c++)
                                    s.parts[c]();
                                delete r[s.id]
                            }
                        }
                    }
                }
                ;
                var b, v = (b = [],
                function(e, t) {
                    return b[e] = t,
                    b.filter(Boolean).join("\n")
                }
                );
                function y(e, t, n, o) {
                    var i = n ? "" : o.css;
                    if (e.styleSheet)
                        e.styleSheet.cssText = v(t, i);
                    else {
                        var r = document.createTextNode(i)
                          , a = e.childNodes;
                        a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
                    }
                }
                function w(e, t) {
                    var n = t.css
                      , o = t.media;
                    if (o && e.setAttribute("media", o),
                    e.styleSheet)
                        e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
                function C(e, t, n) {
                    var o = n.css
                      , i = n.sourceMap
                      , r = void 0 === t.convertToAbsoluteUrls && i;
                    (t.convertToAbsoluteUrls || r) && (o = m(o)),
                    i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                    var a = new Blob([o],{
                        type: "text/css"
                    })
                      , s = e.href;
                    e.href = URL.createObjectURL(a),
                    s && URL.revokeObjectURL(s)
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.ECT_UNKNOWN = 0] = "ECT_UNKNOWN",
                    e[e.ECT_REGISTER = 1] = "ECT_REGISTER",
                    e[e.ECT_REGISTER_RETRY = 2] = "ECT_REGISTER_RETRY",
                    e[e.ECT_FORGET_PASSWORD = 4] = "ECT_FORGET_PASSWORD",
                    e[e.ECT_MODIFY_PASSWORD = 11] = "ECT_MODIFY_PASSWORD",
                    e[e.ECT_CODE_LOGIN = 13] = "ECT_CODE_LOGIN",
                    e[e.ECT_MOBILE_CODE_LOGIN = 24] = "ECT_MOBILE_CODE_LOGIN"
                }(t.EctType || (t.EctType = {})),
                function(e) {
                    e[e.SUCCESS = 0] = "SUCCESS",
                    e[e.NOT_SAFE_BLOCK_LOGIN = 7] = "NOT_SAFE_BLOCK_LOGIN",
                    e[e.NEED_FINGER_PRINT = 1104] = "NEED_FINGER_PRINT",
                    e[e.WRONG_FINGER_PRINT = 1105] = "WRONG_FINGER_PRINT",
                    e[e.NOT_SAFE = 2013] = "NOT_SAFE",
                    e[e.SAFETY_VERIFY = 1039] = "SAFETY_VERIFY",
                    e[e.EMAIL_VERIFY = 1350] = "EMAIL_VERIFY"
                }(t.ResCode || (t.ResCode = {}))
            }
            , function(e, t, n) {
                var o, i;
                /*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
                !function(r) {
                    void 0 === (i = "function" == typeof (o = r) ? o.call(t, n, t, e) : o) || (e.exports = i),
                    e.exports = r()
                }(function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var o in n)
                                t[o] = n[o]
                        }
                        return t
                    }
                    return function t(n) {
                        function o(t, i, r) {
                            var a;
                            if ("undefined" != typeof document) {
                                if (arguments.length > 1) {
                                    if ("number" == typeof (r = e({
                                        path: "/"
                                    }, o.defaults, r)).expires) {
                                        var s = new Date;
                                        s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires),
                                        r.expires = s
                                    }
                                    r.expires = r.expires ? r.expires.toUTCString() : "";
                                    try {
                                        a = JSON.stringify(i),
                                        /^[\{\[]/.test(a) && (i = a)
                                    } catch (e) {}
                                    i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                                    t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                                    var c = "";
                                    for (var l in r)
                                        r[l] && (c += "; " + l,
                                        !0 !== r[l] && (c += "=" + r[l]));
                                    return document.cookie = t + "=" + i + c
                                }
                                t || (a = {});
                                for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, m = 0; m < d.length; m++) {
                                    var f = d[m].split("=")
                                      , p = f.slice(1).join("=");
                                    this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                                    try {
                                        var _ = f[0].replace(u, decodeURIComponent);
                                        if (p = n.read ? n.read(p, _) : n(p, _) || p.replace(u, decodeURIComponent),
                                        this.json)
                                            try {
                                                p = JSON.parse(p)
                                            } catch (e) {}
                                        if (t === _) {
                                            a = p;
                                            break
                                        }
                                        t || (a[_] = p)
                                    } catch (e) {}
                                }
                                return a
                            }
                        }
                        return o.set = o,
                        o.get = function(e) {
                            return o.call(o, e)
                        }
                        ,
                        o.getJSON = function() {
                            return o.apply({
                                json: !0
                            }, [].slice.call(arguments))
                        }
                        ,
                        o.defaults = {},
                        o.remove = function(t, n) {
                            o(t, "", e(n, {
                                expires: -1
                            }))
                        }
                        ,
                        o.withConverter = t,
                        o
                    }(function() {})
                })
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(1)
                  , r = n(3)
                  , a = n(12);
                n(35);
                var s = function() {
                    function e(e, t) {
                        this.style = {
                            titleColor: "#333",
                            closeIconColor: "#999",
                            slideBgColor: "#fff",
                            slideIconColor: "#999",
                            slideBorderColor: "#dadfe3",
                            slidingSlotBgColor: "#bad0e8",
                            slideSlotBgColor: "#f3f6fa",
                            slideSlotDescColor: "#999",
                            verifyMsgBgColor: "rgba(0, 0, 0, 0.6)",
                            refreshFontColor: "#3f71c3",
                            refreshIconColor: "#3f71c3",
                            sureBtnBgColor: "#f85959",
                            sureBtnBgOpacity: .5,
                            sureBtnFontColor: "#fff",
                            sureBtnBorderRadius: "4px"
                        },
                        this.config = a.SLIDER_HOST,
                        this.options = e,
                        this.domNode = new r.default,
                        this.init(e, t)
                    }
                    return e.prototype.init = function(e, t) {
                        var n = t.successCb
                          , r = void 0 === n ? function() {}
                        : n
                          , a = t.errorCb
                          , s = void 0 === a ? function() {}
                        : a
                          , c = t.closeCb
                          , l = void 0 === c ? function() {}
                        : c
                          , d = e.captchaStyle
                          , u = void 0 === d ? {} : d
                          , m = e.zone
                          , f = void 0 === m ? "VA" : m
                          , p = this.config[f] || {}
                          , _ = p.host
                          , h = void 0 === _ ? "//verification-va.byteoversea.com/" : _
                          , A = p.channel
                          , g = void 0 === A ? "va" : A
                          , k = {
                            aid: this.options.appId,
                            iid: "0",
                            did: "0",
                            lang: this.options.lang,
                            app_name: "TikTokAds_SSO",
                            challenge_code: "1105",
                            tea_channel: g,
                            host: h,
                            showMode: "mask",
                            ele: "TikTok_Ads_SSO_Slider_Varify",
                            successCb: function() {
                                r && "function" == typeof r && r()
                            },
                            errorCb: function() {
                                s && "function" == typeof s && s()
                            },
                            closeCb: function() {
                                l && "function" == typeof l && l()
                            }
                        };
                        this.sliderOpts = k,
                        u && (this.style = o({}, this.style, u)),
                        i.hideDom(this.domNode.sliderVarifyContainer)
                    }
                    ,
                    e.prototype.sliderShow = function(e) {
                        this.sliderOpts || this.init(e || this.options),
                        window.renderCaptcha(o({}, this.sliderOpts, this.style)),
                        i.showDom(this.domNode.sliderVarifyContainer)
                    }
                    ,
                    e
                }();
                t.default = s
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(31);
                t.AreaSelect = o.default
            }
            , function(e, t, n) {
                var o = {
                    "./ar.json": 74,
                    "./de.json": 75,
                    "./en.json": 24,
                    "./es.json": 76,
                    "./fr.json": 77,
                    "./hi-IN.json": 78,
                    "./id.json": 79,
                    "./it.json": 80,
                    "./ja.json": 81,
                    "./ko.json": 82,
                    "./ms.json": 83,
                    "./ru.json": 84,
                    "./th.json": 85,
                    "./tr.json": 86,
                    "./vi.json": 87,
                    "./zh-CN.json": 88,
                    "./zh-TW.json": 89,
                    "./zh.json": 90
                };
                function i(e) {
                    var t = r(e);
                    return n(t)
                }
                function r(e) {
                    if (!n.o(o, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND",
                        t
                    }
                    return o[e]
                }
                i.keys = function() {
                    return Object.keys(o)
                }
                ,
                i.resolve = r,
                e.exports = i,
                i.id = 10
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.default = [{
                    name: "Abkhazia",
                    shortName: "AB",
                    area: "+7840"
                }, {
                    name: "Abkhazia",
                    shortName: "AB",
                    area: "+7940"
                }, {
                    name: "Abkhazia",
                    shortName: "AB",
                    area: "+99544"
                }, {
                    name: "Afghanistan",
                    shortName: "AF",
                    area: "+93"
                }, {
                    name: "脜land Islands",
                    shortName: "AX",
                    area: "+35818"
                }, {
                    name: "Albania",
                    shortName: "AL",
                    area: "+355"
                }, {
                    name: "Algeria",
                    shortName: "DZ",
                    area: "+213"
                }, {
                    name: "American Samoa",
                    shortName: "AS",
                    area: "+1684"
                }, {
                    name: "Andorra",
                    shortName: "AD",
                    area: "+376"
                }, {
                    name: "Angola",
                    shortName: "AO",
                    area: "+244"
                }, {
                    name: "Anguilla",
                    shortName: "AI",
                    area: "+1264"
                }, {
                    name: "Antigua and Barbuda",
                    shortName: "AG",
                    area: "+1268"
                }, {
                    name: "Argentina",
                    shortName: "AR",
                    area: "+54"
                }, {
                    name: "Armenia",
                    shortName: "AM",
                    area: "+374"
                }, {
                    name: "Aruba",
                    shortName: "AW",
                    area: "+297"
                }, {
                    name: "Saint Helena, Ascension and Tristan da Cunha",
                    shortName: "SH",
                    area: "+247"
                }, {
                    name: "Australia",
                    shortName: "AU",
                    area: "+61"
                }, {
                    name: "Australia",
                    shortName: "AU",
                    area: "+672"
                }, {
                    name: "Austria",
                    shortName: "AT",
                    area: "+43"
                }, {
                    name: "Azerbaijan",
                    shortName: "AZ",
                    area: "+994"
                }, {
                    name: "Bahamas",
                    shortName: "BS",
                    area: "+1242"
                }, {
                    name: "Bahrain",
                    shortName: "BH",
                    area: "+973"
                }, {
                    name: "Bangladesh",
                    shortName: "BD",
                    area: "+880"
                }, {
                    name: "Barbados",
                    shortName: "BB",
                    area: "+1246"
                }, {
                    name: "Antigua and Barbuda",
                    shortName: "AG",
                    area: "+1268"
                }, {
                    name: "Belarus",
                    shortName: "BY",
                    area: "+375"
                }, {
                    name: "Belgium",
                    shortName: "BE",
                    area: "+32"
                }, {
                    name: "Belize",
                    shortName: "BZ",
                    area: "+501"
                }, {
                    name: "Benin",
                    shortName: "BJ",
                    area: "+229"
                }, {
                    name: "Bermuda",
                    shortName: "BM",
                    area: "+1441"
                }, {
                    name: "Bhutan",
                    shortName: "BT",
                    area: "+975"
                }, {
                    name: "Bolivia, Plurinational State of",
                    shortName: "BO",
                    area: "+591"
                }, {
                    name: "Bosnia and Herzegovina",
                    shortName: "BA",
                    area: "+387"
                }, {
                    name: "Botswana",
                    shortName: "BW",
                    area: "+267"
                }, {
                    name: "Brazil",
                    shortName: "BR",
                    area: "+55"
                }, {
                    name: "British Indian Ocean Territory",
                    shortName: "IO",
                    area: "+246"
                }, {
                    name: "Virgin Islands, British",
                    shortName: "VG",
                    area: "+1284"
                }, {
                    name: "Brunei Darussalam",
                    shortName: "BN",
                    area: "+673"
                }, {
                    name: "Bulgaria",
                    shortName: "BG",
                    area: "+359"
                }, {
                    name: "Burkina Faso",
                    shortName: "BF",
                    area: "+226"
                }, {
                    name: "Burundi",
                    shortName: "BI",
                    area: "+257"
                }, {
                    name: "Cambodia",
                    shortName: "KH",
                    area: "+855"
                }, {
                    name: "Cameroon",
                    shortName: "CM",
                    area: "+237"
                }, {
                    name: "Canada",
                    shortName: "CA",
                    area: "+1"
                }, {
                    name: "Cape Verde",
                    shortName: "CV",
                    area: "+238"
                }, {
                    name: "Bonaire, Sint Eustatius and Saba",
                    shortName: "BQ",
                    area: "+5997"
                }, {
                    name: "Cayman Islands",
                    shortName: "KY",
                    area: "+1345"
                }, {
                    name: "Central African Republic",
                    shortName: "CF",
                    area: "+236"
                }, {
                    name: "Chad",
                    shortName: "TD",
                    area: "+235"
                }, {
                    name: "Chile",
                    shortName: "CL",
                    area: "+56"
                }, {
                    name: "China",
                    shortName: "CN",
                    area: "+86"
                }, {
                    name: "Christmas Island",
                    shortName: "CX",
                    area: "+61"
                }, {
                    name: "Cocos (Keeling) Islands",
                    shortName: "CC",
                    area: "+61"
                }, {
                    name: "Colombia",
                    shortName: "CO",
                    area: "+57"
                }, {
                    name: "Comoros",
                    shortName: "KM",
                    area: "+269"
                }, {
                    name: "Congo",
                    shortName: "CG",
                    area: "+242"
                }, {
                    name: "Congo, the Democratic Republic of the",
                    shortName: "CD",
                    area: "+243"
                }, {
                    name: "Cook Islands",
                    shortName: "CK",
                    area: "+682"
                }, {
                    name: "Costa Rica",
                    shortName: "CR",
                    area: "+506"
                }, {
                    name: "Croatia",
                    shortName: "HR",
                    area: "+385"
                }, {
                    name: "Cuba",
                    shortName: "CU",
                    area: "+53"
                }, {
                    name: "Cura莽ao",
                    shortName: "CW",
                    area: "+5999"
                }, {
                    name: "Cyprus",
                    shortName: "CY",
                    area: "+357"
                }, {
                    name: "Czech Republic",
                    shortName: "CZ",
                    area: "+420"
                }, {
                    name: "C么te d'Ivoire",
                    shortName: "CI",
                    area: "+225"
                }, {
                    name: "Denmark",
                    shortName: "DK",
                    area: "+45"
                }, {
                    name: "Diego Garcia",
                    shortName: "DG",
                    area: "+246"
                }, {
                    name: "Djibouti",
                    shortName: "DJ",
                    area: "+253"
                }, {
                    name: "Dominica",
                    shortName: "DM",
                    area: "+1767"
                }, {
                    name: "Dominican Republic",
                    shortName: "DO",
                    area: "+1809"
                }, {
                    name: "Dominican Republic",
                    shortName: "DO",
                    area: "+1829"
                }, {
                    name: "Dominican Republic",
                    shortName: "DO",
                    area: "+1849"
                }, {
                    name: "Russian Federation",
                    shortName: "RU",
                    area: "+7"
                }, {
                    name: "Ecuador",
                    shortName: "EC",
                    area: "+593"
                }, {
                    name: "Egypt",
                    shortName: "EG",
                    area: "+20"
                }, {
                    name: "El Salvador",
                    shortName: "SV",
                    area: "+503"
                }, {
                    name: "Equatorial Guinea",
                    shortName: "GQ",
                    area: "+240"
                }, {
                    name: "Eritrea",
                    shortName: "ER",
                    area: "+291"
                }, {
                    name: "Estonia",
                    shortName: "EE",
                    area: "+372"
                }, {
                    name: "Ethiopia",
                    shortName: "ET",
                    area: "+251"
                }, {
                    name: "Falkland Islands (Malvinas)",
                    shortName: "FK",
                    area: "+500"
                }, {
                    name: "Faroe Islands",
                    shortName: "FO",
                    area: "+298"
                }, {
                    name: "Fiji",
                    shortName: "FJ",
                    area: "+679"
                }, {
                    name: "Finland",
                    shortName: "FI",
                    area: "+358"
                }, {
                    name: "France",
                    shortName: "FR",
                    area: "+33"
                }, {
                    name: "French Guiana",
                    shortName: "GF",
                    area: "+594"
                }, {
                    name: "French Polynesia",
                    shortName: "PF",
                    area: "+689"
                }, {
                    name: "Gabon",
                    shortName: "GA",
                    area: "+241"
                }, {
                    name: "Gambia",
                    shortName: "GM",
                    area: "+220"
                }, {
                    name: "Georgia",
                    shortName: "GE",
                    area: "+995"
                }, {
                    name: "Germany",
                    shortName: "DE",
                    area: "+49"
                }, {
                    name: "Ghana",
                    shortName: "GH",
                    area: "+233"
                }, {
                    name: "Gibraltar",
                    shortName: "GI",
                    area: "+350"
                }, {
                    name: "Greece",
                    shortName: "GR",
                    area: "+30"
                }, {
                    name: "Greenland",
                    shortName: "GL",
                    area: "+299"
                }, {
                    name: "Grenada",
                    shortName: "GD",
                    area: "+1473"
                }, {
                    name: "Guadeloupe",
                    shortName: "GP",
                    area: "+590"
                }, {
                    name: "Guam",
                    shortName: "GU",
                    area: "+1671"
                }, {
                    name: "Guatemala",
                    shortName: "GT",
                    area: "+502"
                }, {
                    name: "Guernsey",
                    shortName: "GG",
                    area: "+44"
                }, {
                    name: "Guinea",
                    shortName: "GN",
                    area: "+224"
                }, {
                    name: "Guinea-Bissau",
                    shortName: "GW",
                    area: "+245"
                }, {
                    name: "Guyana",
                    shortName: "GY",
                    area: "+592"
                }, {
                    name: "Haiti",
                    shortName: "HT",
                    area: "+509"
                }, {
                    name: "Honduras",
                    shortName: "HN",
                    area: "+504"
                }, {
                    name: "Hong Kong",
                    shortName: "HK",
                    area: "+852"
                }, {
                    name: "Hungary",
                    shortName: "HU",
                    area: "+36"
                }, {
                    name: "Iceland",
                    shortName: "IS",
                    area: "+354"
                }, {
                    name: "India",
                    shortName: "IN",
                    area: "+91"
                }, {
                    name: "Indonesia",
                    shortName: "ID",
                    area: "+62"
                }, {
                    name: "Iran, Islamic Republic of",
                    shortName: "IR",
                    area: "+98"
                }, {
                    name: "Iraq",
                    shortName: "IQ",
                    area: "+964"
                }, {
                    name: "Ireland",
                    shortName: "IE",
                    area: "+353"
                }, {
                    name: "Israel",
                    shortName: "IL",
                    area: "+972"
                }, {
                    name: "Italy",
                    shortName: "IT",
                    area: "+39"
                }, {
                    name: "Jamaica",
                    shortName: "JM",
                    area: "+1876"
                }, {
                    name: "Japan",
                    shortName: "JP",
                    area: "+81"
                }, {
                    name: "Jersey",
                    shortName: "JE",
                    area: "+44"
                }, {
                    name: "Jordan",
                    shortName: "JO",
                    area: "+962"
                }, {
                    name: "Kazakhstan",
                    shortName: "KZ",
                    area: "+76"
                }, {
                    name: "Kazakhstan",
                    shortName: "KZ",
                    area: "+77"
                }, {
                    name: "Kenya",
                    shortName: "KE",
                    area: "+254"
                }, {
                    name: "Kiribati",
                    shortName: "KI",
                    area: "+686"
                }, {
                    name: "Kuwait",
                    shortName: "KW",
                    area: "+965"
                }, {
                    name: "Kyrgyzstan",
                    shortName: "KG",
                    area: "+996"
                }, {
                    name: "Lao People's Democratic Republic",
                    shortName: "LA",
                    area: "+856"
                }, {
                    name: "Latvia",
                    shortName: "LV",
                    area: "+371"
                }, {
                    name: "Lebanon",
                    shortName: "LB",
                    area: "+961"
                }, {
                    name: "Lesotho",
                    shortName: "LS",
                    area: "+266"
                }, {
                    name: "Liberia",
                    shortName: "LR",
                    area: "+231"
                }, {
                    name: "Libya",
                    shortName: "LY",
                    area: "+218"
                }, {
                    name: "Liechtenstein",
                    shortName: "LI",
                    area: "+423"
                }, {
                    name: "Lithuania",
                    shortName: "LT",
                    area: "+370"
                }, {
                    name: "Luxembourg",
                    shortName: "LU",
                    area: "+352"
                }, {
                    name: "Macao",
                    shortName: "MO",
                    area: "+853"
                }, {
                    name: "Macedonia, the Former Yugoslav Republic of",
                    shortName: "MK",
                    area: "+389"
                }, {
                    name: "Madagascar",
                    shortName: "MG",
                    area: "+261"
                }, {
                    name: "Malawi",
                    shortName: "MW",
                    area: "+265"
                }, {
                    name: "Malaysia",
                    shortName: "MY",
                    area: "+60"
                }, {
                    name: "Maldives",
                    shortName: "MV",
                    area: "+960"
                }, {
                    name: "Mali",
                    shortName: "ML",
                    area: "+223"
                }, {
                    name: "Malta",
                    shortName: "MT",
                    area: "+356"
                }, {
                    name: "Marshall Islands",
                    shortName: "MH",
                    area: "+692"
                }, {
                    name: "Martinique",
                    shortName: "MQ",
                    area: "+596"
                }, {
                    name: "Mauritania",
                    shortName: "MR",
                    area: "+222"
                }, {
                    name: "Mauritius",
                    shortName: "MU",
                    area: "+230"
                }, {
                    name: "Mayotte",
                    shortName: "YT",
                    area: "+262"
                }, {
                    name: "Mexico",
                    shortName: "MX",
                    area: "+52"
                }, {
                    name: "Micronesia, Federated States of",
                    shortName: "FM",
                    area: "+691"
                }, {
                    name: "Moldova, Republic of",
                    shortName: "MD",
                    area: "+373"
                }, {
                    name: "Monaco",
                    shortName: "MC",
                    area: "+377"
                }, {
                    name: "Mongolia",
                    shortName: "MN",
                    area: "+976"
                }, {
                    name: "Montenegro",
                    shortName: "ME",
                    area: "+382"
                }, {
                    name: "Montserrat",
                    shortName: "MS",
                    area: "+1664"
                }, {
                    name: "Morocco",
                    shortName: "MA",
                    area: "+212"
                }, {
                    name: "Mozambique",
                    shortName: "MZ",
                    area: "+258"
                }, {
                    name: "Myanmar",
                    shortName: "MM",
                    area: "+95"
                }, {
                    name: "Namibia",
                    shortName: "NA",
                    area: "+264"
                }, {
                    name: "Nauru",
                    shortName: "NR",
                    area: "+674"
                }, {
                    name: "Nepal",
                    shortName: "NP",
                    area: "+977"
                }, {
                    name: "Netherlands",
                    shortName: "NL",
                    area: "+31"
                }, {
                    name: "New Caledonia",
                    shortName: "NC",
                    area: "+687"
                }, {
                    name: "New Zealand",
                    shortName: "NZ",
                    area: "+64"
                }, {
                    name: "Nicaragua",
                    shortName: "NI",
                    area: "+505"
                }, {
                    name: "Niger",
                    shortName: "NE",
                    area: "+227"
                }, {
                    name: "Nigeria",
                    shortName: "NG",
                    area: "+234"
                }, {
                    name: "Niue",
                    shortName: "NU",
                    area: "+683"
                }, {
                    name: "Norfolk Island",
                    shortName: "NF",
                    area: "+672"
                }, {
                    name: "Korea, Democratic People's Republic of",
                    shortName: "KP",
                    area: "+850"
                }, {
                    name: "Northern Mariana Islands",
                    shortName: "MP",
                    area: "+1670"
                }, {
                    name: "Norway",
                    shortName: "NO",
                    area: "+47"
                }, {
                    name: "Oman",
                    shortName: "OM",
                    area: "+968"
                }, {
                    name: "Pakistan",
                    shortName: "PK",
                    area: "+92"
                }, {
                    name: "Palau",
                    shortName: "PW",
                    area: "+680"
                }, {
                    name: "Palestine, State of",
                    shortName: "PS",
                    area: "+970"
                }, {
                    name: "Panama",
                    shortName: "PA",
                    area: "+507"
                }, {
                    name: "Papua New Guinea",
                    shortName: "PG",
                    area: "+675"
                }, {
                    name: "Paraguay",
                    shortName: "PY",
                    area: "+595"
                }, {
                    name: "Peru",
                    shortName: "PE",
                    area: "+51"
                }, {
                    name: "Philippines",
                    shortName: "PH",
                    area: "+63"
                }, {
                    name: "Pitcairn",
                    shortName: "PN",
                    area: "+64"
                }, {
                    name: "Poland",
                    shortName: "PL",
                    area: "+48"
                }, {
                    name: "Portugal",
                    shortName: "PT",
                    area: "+351"
                }, {
                    name: "Puerto Rico",
                    shortName: "PR",
                    area: "+1787"
                }, {
                    name: "Puerto Rico",
                    shortName: "PR",
                    area: "+1939"
                }, {
                    name: "Qatar",
                    shortName: "QA",
                    area: "+974"
                }, {
                    name: "Romania",
                    shortName: "RO",
                    area: "+40"
                }, {
                    name: "Russian Federation",
                    shortName: "RU",
                    area: "+7"
                }, {
                    name: "Rwanda",
                    shortName: "RW",
                    area: "+250"
                }, {
                    name: "Reunion Island",
                    shortName: "SURVEY",
                    area: "+262"
                }, {
                    name: "Samoa",
                    shortName: "WS",
                    area: "+685"
                }, {
                    name: "San Marino",
                    shortName: "SM",
                    area: "+378"
                }, {
                    name: "Saudi Arabia",
                    shortName: "SA",
                    area: "+966"
                }, {
                    name: "Senegal",
                    shortName: "SN",
                    area: "+221"
                }, {
                    name: "Serbia",
                    shortName: "RS",
                    area: "+381"
                }, {
                    name: "Seychelles",
                    shortName: "SC",
                    area: "+248"
                }, {
                    name: "Sierra Leone",
                    shortName: "SL",
                    area: "+232"
                }, {
                    name: "Singapore",
                    shortName: "SG",
                    area: "+65"
                }, {
                    name: "Bonaire, Sint Eustatius and Saba",
                    shortName: "BQ",
                    area: "+5993"
                }, {
                    name: "Sint Maarten (Dutch part)",
                    shortName: "SX",
                    area: "+1721"
                }, {
                    name: "Slovakia",
                    shortName: "SK",
                    area: "+421"
                }, {
                    name: "Slovenia",
                    shortName: "SI",
                    area: "+386"
                }, {
                    name: "Solomon Islands",
                    shortName: "SB",
                    area: "+677"
                }, {
                    name: "Somalia",
                    shortName: "SO",
                    area: "+252"
                }, {
                    name: "South Africa",
                    shortName: "ZA",
                    area: "+27"
                }, {
                    name: "South Georgia and the South Sandwich Islands",
                    shortName: "GS",
                    area: "+500"
                }, {
                    name: "Korea, Republic of",
                    shortName: "KR",
                    area: "+82"
                }, {
                    name: "Singapore",
                    shortName: "SG",
                    area: "+99534"
                }, {
                    name: "South Sudan",
                    shortName: "SS",
                    area: "+211"
                }, {
                    name: "Spain",
                    shortName: "ES",
                    area: "+34"
                }, {
                    name: "Sri Lanka",
                    shortName: "LK",
                    area: "+94"
                }, {
                    name: "Saint Barth茅lemy",
                    shortName: "BL",
                    area: "+590"
                }, {
                    name: "Saint Helena, Ascension and Tristan da Cunha",
                    shortName: "SH",
                    area: "+290"
                }, {
                    name: "Saint Kitts and Nevis",
                    shortName: "KN",
                    area: "+1869"
                }, {
                    name: "Saint Lucia",
                    shortName: "LC",
                    area: "+1758"
                }, {
                    name: "Saint Martin (French part)",
                    shortName: "MF",
                    area: "+590"
                }, {
                    name: "Saint Pierre and Miquelon",
                    shortName: "PM",
                    area: "+508"
                }, {
                    name: "Saint Vincent and the Grenadines",
                    shortName: "VC",
                    area: "+1784"
                }, {
                    name: "Sudan",
                    shortName: "SD",
                    area: "+249"
                }, {
                    name: "Suriname",
                    shortName: "SR",
                    area: "+597"
                }, {
                    name: "Svalbard and Jan Mayen",
                    shortName: "SJ",
                    area: "+4779"
                }, {
                    name: "Svalbard and Jan Mayen",
                    shortName: "SJ",
                    area: "+4779"
                }, {
                    name: "Swaziland",
                    shortName: "SZ",
                    area: "+268"
                }, {
                    name: "Sweden",
                    shortName: "SE",
                    area: "+46"
                }, {
                    name: "Switzerland",
                    shortName: "CH",
                    area: "+41"
                }, {
                    name: "Syrian Arab Republic",
                    shortName: "SY",
                    area: "+963"
                }, {
                    name: "Sao Tome and Principe",
                    shortName: "ST",
                    area: "+239"
                }, {
                    name: "Taiwan",
                    shortName: "TW",
                    area: "+886"
                }, {
                    name: "Tajikistan",
                    shortName: "TJ",
                    area: "+992"
                }, {
                    name: "Tanzania, United Republic of",
                    shortName: "TZ",
                    area: "+255"
                }, {
                    name: "Thailand",
                    shortName: "TH",
                    area: "+66"
                }, {
                    name: "Timor-Leste",
                    shortName: "TL",
                    area: "+670"
                }, {
                    name: "Togo",
                    shortName: "TG",
                    area: "+228"
                }, {
                    name: "Tokelau",
                    shortName: "TK",
                    area: "+690"
                }, {
                    name: "Tonga",
                    shortName: "TO",
                    area: "+676"
                }, {
                    name: "Trinidad and Tobago",
                    shortName: "TT",
                    area: "+1868"
                }, {
                    name: "Tunisia",
                    shortName: "TN",
                    area: "+216"
                }, {
                    name: "Turkey",
                    shortName: "TR",
                    area: "+90"
                }, {
                    name: "Turkmenistan",
                    shortName: "TM",
                    area: "+993"
                }, {
                    name: "Turks and Caicos Islands",
                    shortName: "TC",
                    area: "+1649"
                }, {
                    name: "Tuvalu",
                    shortName: "TV",
                    area: "+688"
                }, {
                    name: "Virgin Islands, U.S.",
                    shortName: "VI",
                    area: "+1340"
                }, {
                    name: "Uganda",
                    shortName: "UG",
                    area: "+256"
                }, {
                    name: "Ukraine",
                    shortName: "UA",
                    area: "+380"
                }, {
                    name: "United Arab Emirates",
                    shortName: "AE",
                    area: "+971"
                }, {
                    name: "United Kingdom",
                    shortName: "UK",
                    area: "+44"
                }, {
                    name: "United States",
                    shortName: "US",
                    area: "+1"
                }, {
                    name: "Uruguay",
                    shortName: "UY",
                    area: "+598"
                }, {
                    name: "Uzbekistan",
                    shortName: "UZ",
                    area: "+998"
                }, {
                    name: "Vanuatu",
                    shortName: "VU",
                    area: "+678"
                }, {
                    name: "Holy See (Vatican City State)",
                    shortName: "VA",
                    area: "+3906698"
                }, {
                    name: "Holy See (Vatican City State)",
                    shortName: "VA",
                    area: "+379"
                }, {
                    name: "Venezuela, Bolivarian Republic of",
                    shortName: "VE",
                    area: "+58"
                }, {
                    name: "Viet Nam",
                    shortName: "VN",
                    area: "+84"
                }, {
                    name: "Wallis and Futuna",
                    shortName: "WF",
                    area: "+681"
                }, {
                    name: "Yemen",
                    shortName: "YE",
                    area: "+967"
                }, {
                    name: "Zambia",
                    shortName: "ZM",
                    area: "+260"
                }, {
                    name: "Zanzibar",
                    shortName: "TZ",
                    area: "+255"
                }, {
                    name: "Zimbabwe",
                    shortName: "ZW",
                    area: "+263"
                }]
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.SLIDER_HOST = {
                    VA: {
                        host: "//verification-va.byteoversea.com",
                        channel: "va"
                    },
                    SG: {
                        host: "//verify-sg.byteoversea.com",
                        channel: "sg"
                    },
                    BOE: {
                        host: "//boe-verify.snssdk.com",
                        channel: "cn"
                    },
                    CN: {
                        host: "//verify.snssdk.com",
                        channel: "cn"
                    },
                    IN: {
                        region: "in",
                        host: "//verification-va-useast2a.byteoversea.com"
                    }
                }
            }
            , function(e, t, n) {
                var o = n(37);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                var o = n(41);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), o = 0; o < n.length; o++)
                            n[o] = arguments[o];
                        return e.apply(t, n)
                    }
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                function i(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t)
                        return e;
                    var r;
                    if (n)
                        r = n(t);
                    else if (o.isURLSearchParams(t))
                        r = t.toString();
                    else {
                        var a = [];
                        o.forEach(t, function(e, t) {
                            null != e && (o.isArray(e) ? t += "[]" : e = [e],
                            o.forEach(e, function(e) {
                                o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                                a.push(i(t) + "=" + i(e))
                            }))
                        }),
                        r = a.join("&")
                    }
                    if (r) {
                        var s = e.indexOf("#");
                        -1 !== s && (e = e.slice(0, s)),
                        e += (-1 === e.indexOf("?") ? "?" : "&") + r
                    }
                    return e
                }
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            }
            , function(e, t, n) {
                "use strict";
                (function(t) {
                    var o = n(0)
                      , i = n(53)
                      , r = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                    function a(e, t) {
                        !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                    }
                    var s, c = {
                        adapter: ((void 0 !== t && "[object process]" === Object.prototype.toString.call(t) || "undefined" != typeof XMLHttpRequest) && (s = n(19)),
                        s),
                        transformRequest: [function(e, t) {
                            return i(t, "Accept"),
                            i(t, "Content-Type"),
                            o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                            e.toString()) : o.isObject(e) ? (a(t, "application/json;charset=utf-8"),
                            JSON.stringify(e)) : e
                        }
                        ],
                        transformResponse: [function(e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(e)
                                } catch (e) {}
                            return e
                        }
                        ],
                        timeout: 0,
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        maxContentLength: -1,
                        validateStatus: function(e) {
                            return e >= 200 && e < 300
                        },
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            }
                        }
                    };
                    o.forEach(["delete", "get", "head"], function(e) {
                        c.headers[e] = {}
                    }),
                    o.forEach(["post", "put", "patch"], function(e) {
                        c.headers[e] = o.merge(r)
                    }),
                    e.exports = c
                }
                ).call(this, n(52))
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0)
                  , i = n(54)
                  , r = n(16)
                  , a = n(56)
                  , s = n(57)
                  , c = n(20);
                e.exports = function(e) {
                    return new Promise(function(t, l) {
                        var d = e.data
                          , u = e.headers;
                        o.isFormData(d) && delete u["Content-Type"];
                        var m = new XMLHttpRequest;
                        if (e.auth) {
                            var f = e.auth.username || ""
                              , p = e.auth.password || "";
                            u.Authorization = "Basic " + btoa(f + ":" + p)
                        }
                        if (m.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0),
                        m.timeout = e.timeout,
                        m.onreadystatechange = function() {
                            if (m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
                                var n = "getAllResponseHeaders"in m ? a(m.getAllResponseHeaders()) : null
                                  , o = {
                                    data: e.responseType && "text" !== e.responseType ? m.response : m.responseText,
                                    status: m.status,
                                    statusText: m.statusText,
                                    headers: n,
                                    config: e,
                                    request: m
                                };
                                i(t, l, o),
                                m = null
                            }
                        }
                        ,
                        m.onabort = function() {
                            m && (l(c("Request aborted", e, "ECONNABORTED", m)),
                            m = null)
                        }
                        ,
                        m.onerror = function() {
                            l(c("Network Error", e, null, m)),
                            m = null
                        }
                        ,
                        m.ontimeout = function() {
                            l(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)),
                            m = null
                        }
                        ,
                        o.isStandardBrowserEnv()) {
                            var _ = n(58)
                              , h = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                            h && (u[e.xsrfHeaderName] = h)
                        }
                        if ("setRequestHeader"in m && o.forEach(u, function(e, t) {
                            void 0 === d && "content-type" === t.toLowerCase() ? delete u[t] : m.setRequestHeader(t, e)
                        }),
                        e.withCredentials && (m.withCredentials = !0),
                        e.responseType)
                            try {
                                m.responseType = e.responseType
                            } catch (t) {
                                if ("json" !== e.responseType)
                                    throw t
                            }
                        "function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress),
                        "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress),
                        e.cancelToken && e.cancelToken.promise.then(function(e) {
                            m && (m.abort(),
                            l(e),
                            m = null)
                        }),
                        void 0 === d && (d = null),
                        m.send(d)
                    }
                    )
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(55);
                e.exports = function(e, t, n, i, r) {
                    var a = new Error(e);
                    return o(a, t, n, i, r)
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {};
                    return o.forEach(["url", "method", "params", "data"], function(e) {
                        void 0 !== t[e] && (n[e] = t[e])
                    }),
                    o.forEach(["headers", "auth", "proxy"], function(i) {
                        o.isObject(t[i]) ? n[i] = o.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : o.isObject(e[i]) ? n[i] = o.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i])
                    }),
                    o.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(o) {
                        void 0 !== t[o] ? n[o] = t[o] : void 0 !== e[o] && (n[o] = e[o])
                    }),
                    n
                }
            }
            , function(e, t, n) {
                "use strict";
                function o(e) {
                    this.message = e
                }
                o.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }
                ,
                o.prototype.__CANCEL__ = !0,
                e.exports = o
            }
            , function(e, t, n) {
                e.exports = n.p + "assets/images/iconfont.52fb658e84137e492c27125ae5f9205f.eot"
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Please read and agree to the User Agreement and Privacy Policy.",
                    account_check_email_hint: "The email address you entered does not meet our requirements. Please try again.",
                    account_fetch_verify_code: "Get Verification Code",
                    account_forget_password: "Forgot Password",
                    account_login: "Log In",
                    account_login_email: "Log In",
                    account_network_error_hint: "Network error. Please try again later.",
                    account_password_hint: "Enter a password between 6-20 digits.",
                    account_password_recomfirm_hint: "The passwords entered do not match. Please check and try again.",
                    account_register: "Sign Up",
                    account_resend_email: "Resend Email",
                    account_resend_mobile: "Send Code",
                    account_reset_password: "Reset Password",
                    account_reset_password_success_hint: "Password has been reset. Please log in again.",
                    account_send_email: "Send an email",
                    account_send_mobile: "Send Code",
                    account_send_success_check_hint: "The verification code has been sent successfully. Please check your email.",
                    account_verification_code: "Verification Code",
                    account_verification_code_error_hint: "Incorrect verification code",
                    account_verify_tips: "For security reasons, a verification code has been sent to",
                    email_code_self_help: '1. Please check if your email address is correct.</br>\r\n\r\n2. Please search "TikTok" in your inbox. We\'ll send the email from "TikTok For Business".</br>\r\n\r\n3. Please check if it is in your  Spam, Junk, Trash, Deleted Items, or Archive folder.</br>\r\n\r\n4. If nothing works, please try with a different email. Some email providers might block our email.',
                    home_enter: "Manage Ads",
                    input_error_msg_code: "Please enter an email verification code.",
                    input_error_msg_email: "The email address you entered does not meet our requirements. Please try again.",
                    input_error_msg_mobile: "Phone number format is invalid.",
                    input_error_msg_mobile_code: "Please input 4-digit verification code.",
                    input_placeholder_account: "Please input email or phone.",
                    input_placeholder_email: "Email Address",
                    input_placeholder_email_code: "Verification Code",
                    input_placeholder_mobile: "Enter your phone number",
                    input_placeholder_password: "Password",
                    item_label_account: "Email or Phone",
                    item_label_confirm_pwd: "Confirm Password",
                    item_label_email: "Email Address",
                    item_label_mobile: "Phone Number",
                    item_label_pwd: "Password",
                    item_label_verify_code: "Verification Code",
                    menu_email_code_login_back: "Go back to change email address",
                    menu_mobile_code_login_back: "Go back to change phone number",
                    menu_next: "Next",
                    mobile_code_self_help: "1. Please wait for a few seconds to receive the 4-digit code before trying again.</br>\r\n\r\n2. Check if your phone number is correct.</br>\r\n\r\n3. If nothing works, please try with a different phone number. ",
                    notice_not_receive_code: "Didn't receive the code?",
                    official_disclaimer: "Terms",
                    official_legal_statements: "Legal Statement",
                    official_privacy_title: "Privacy Policy",
                    see_more: "See more",
                    shark_security_7: "Your current network environment poses a high security risk. Please check your network, and try again in 24 hours.",
                    text_lark_login_tips: "Employee Login"
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(26);
                t.default = o.default
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                  , i = this && this.__awaiter || function(e, t, n, o) {
                    return new (n || (n = Promise))(function(i, r) {
                        function a(e) {
                            try {
                                c(o.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function s(e) {
                            try {
                                c(o.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function c(e) {
                            e.done ? i(e.value) : new n(function(t) {
                                t(e.value)
                            }
                            ).then(a, s)
                        }
                        c((o = o.apply(e, t || [])).next())
                    }
                    )
                }
                  , r = this && this.__generator || function(e, t) {
                    var n, o, i, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0])
                                throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    r;
                    function s(r) {
                        return function(s) {
                            return function(r) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; a; )
                                    try {
                                        if (n = 1,
                                        o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o),
                                        0) : o.next) && !(i = i.call(o, r[1])).done)
                                            return i;
                                        switch (o = 0,
                                        i && (r = [2 & r[0], i.value]),
                                        r[0]) {
                                        case 0:
                                        case 1:
                                            i = r;
                                            break;
                                        case 4:
                                            return a.label++,
                                            {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++,
                                            o = r[1],
                                            r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(),
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (i = a.trys,
                                            !((i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < i[1]) {
                                                a.label = i[1],
                                                i = r;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2],
                                                a.ops.push(r);
                                                break
                                            }
                                            i[2] && a.ops.pop(),
                                            a.trys.pop();
                                            continue
                                        }
                                        r = t.call(e, a)
                                    } catch (e) {
                                        r = [6, e],
                                        o = 0
                                    } finally {
                                        n = i = 0
                                    }
                                if (5 & r[0])
                                    throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, s])
                        }
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = n(1)
                  , s = n(27)
                  , c = n(28)
                  , l = n(3)
                  , d = n(29)
                  , u = n(39)
                  , m = n(43)
                  , f = n(2)
                  , p = n(44)
                  , _ = n(12);
                n(65),
                n(72);
                var h = n(11)
                  , A = function() {
                    function e(e) {
                        this.defaultLanguage = "en",
                        this.defaultZone = "VA",
                        this.defaultShowLabel = !0,
                        this.defaultSecurityUrl = "https://ads.tiktok.com/help/article?aid=144746111208386133",
                        e.lang = e.lang || this.defaultLanguage,
                        e.zone = (e.zone || this.defaultZone).toUpperCase(),
                        e.securityUrl = e.securityUrl || this.defaultSecurityUrl,
                        e.showLabel = void 0 === e.showLabel ? this.defaultShowLabel : e.showLabel,
                        e.accountTypes = Array.isArray(e.accountTypes) ? e.accountTypes : [];
                        var t = e.accountTypes.filter(function(e) {
                            return m.accountTypes.includes(e)
                        });
                        e.accountTypes = t.length ? t : m.accountTypes,
                        e.account = a.escapeHtml(e.account || ""),
                        this.options = e,
                        this.starlingInit({
                            lang: this.options.lang,
                            zone: this.options.zone
                        });
                        var n = s.default || window.initCaptchaSDK;
                        try {
                            "function" == typeof n && n((_.SLIDER_HOST[e.zone] || {}).host || _.SLIDER_HOST.VA.host)
                        } catch (e) {
                            console.log("init slider err")
                        }
                    }
                    return e.prototype.starlingInit = function(e, t) {
                        var i = this
                          , r = e.lang || this.options.lang || this.defaultLanguage
                          , s = "en-US" === r ? "en" : r
                          , l = n(10)("./" + s + ".json")
                          , d = n(10)("./" + this.defaultLanguage + ".json")
                          , u = o({}, d, l);
                        this.ctx ? (this.options.lang = s,
                        this.ctx.locale = u,
                        this.request = new p.default(this.options,u),
                        this.ctx.request = this.request) : (this.request = new p.default(this.options,u),
                        this.ctx = new c.default({
                            data: {
                                options: this.options,
                                request: this.request,
                                locale: u,
                                state: m.formState,
                                area: {
                                    area: "",
                                    shortName: ""
                                },
                                accountTypes: this.options.accountTypes,
                                accountType: this.options.accountTypes[0],
                                acTypeMobile: this.options.accountTypes.length > 1 ? "account" : m.accountTypes[0],
                                acTypeEmail: this.options.accountTypes.length > 1 ? "account" : m.accountTypes[1],
                                panelType: this.getPanelType(m.domState),
                                domState: m.domState,
                                domValidState: m.domValidState,
                                width: 320,
                                isLoading: !1
                            },
                            watch: {
                                isLoading: function(e) {
                                    i.updateLoading(e)
                                },
                                area: function(e) {
                                    i.setFormatAreaLabel(e),
                                    i.ctx.domState.loginForm && (i.ctx.state = o({}, i.ctx.state, {
                                        loginVerifyCodeAccount: e.area + i.ctx.state.loginMobileInput
                                    }))
                                },
                                accountType: function(e) {
                                    i.initAccountInput(e)
                                },
                                state: function(e, t) {
                                    a.updateDomInputValue(e, i.domNode),
                                    f.default(i.ctx, i.domNode, e, t)
                                },
                                domState: function(e) {
                                    i.ctx.panelType = i.getPanelType(e),
                                    a.updateDomVisible(e, i.domNode),
                                    e.loginVerifyCodeForm && i.loginVerifyCodeForm.init(),
                                    e.loginForm && (i.loginForm.init(),
                                    i.loginVerifyCodeForm.destroy(),
                                    i.fPwdEmailForm.destroy(),
                                    i.fPwdForm.destroy()),
                                    e.fPwdEmailForm && (i.fPwdEmailForm.init(),
                                    i.initAccountInput(i.ctx.accountType, i.ctx.panelType),
                                    i.loginForm.destroy()),
                                    e.fPwdForm && (i.fPwdForm.init(),
                                    i.initAccountInput(i.ctx.accountType, i.ctx.panelType))
                                }
                            }
                        })),
                        t && "function" == typeof t && t()
                    }
                    ,
                    e.prototype.getPanelType = function(e) {
                        return e.loginForm ? "login" : e.fPwdForm ? "fPwdResend" : "fPwd"
                    }
                    ,
                    e.prototype.initAccountInput = function(e, t) {
                        void 0 === t && (t = "");
                        var n = this.ctx.panelType;
                        "mobile" === e ? (a.showDom(this.domNode[n + "MobileFormItem"]),
                        a.hideDom(this.domNode[n + "EmailFormItem"]),
                        this.ctx.state[n + "MobileInput"] = this.domNode[n + "EmailInput"].value,
                        -1 === ["fPwdResend", "fPwd"].indexOf(t) && this.domNode[n + "MobileInput"].focus()) : (a.showDom(this.domNode[n + "EmailFormItem"]),
                        a.hideDom(this.domNode[n + "MobileFormItem"]),
                        this.ctx.state[n + "EmailInput"] = this.domNode[n + "MobileInput"].value,
                        -1 === ["fPwdResend", "fPwd"].indexOf(t) && this.domNode[n + "EmailInput"].focus())
                    }
                    ,
                    e.prototype.setFormatAreaLabel = function(e) {
                        var t = e || {}
                          , n = t.area
                          , o = void 0 === n ? "" : n
                          , i = t.shortName
                          , r = void 0 === i ? "" : i
                          , s = "area" + a.firstToUpperCase(this.ctx.panelType) + "Value";
                        this.domNode[s].innerHTML = r + " " + o
                    }
                    ,
                    e.prototype.setEmail = function(e) {
                        void 0 === e && (e = "");
                        var t = e || this.options.email || "";
                        t && (this.ctx.state = o({}, this.ctx.state, {
                            loginEmailInput: t,
                            loginVerifyCodeAccount: t
                        }))
                    }
                    ,
                    e.prototype.setAccount = function(e) {
                        void 0 === e && (e = "");
                        var t = e || this.options.account || ""
                          , n = t.indexOf("@") > -1 ? "email" : "mobile";
                        this.ctx.accountTypes.includes(n) && t && (this.ctx.accountType = n,
                        this.ctx.state = o({}, this.ctx.state, {
                            loginEmailInput: t,
                            loginMobileInput: t,
                            loginVerifyCodeAccount: "email" === n ? t : this.ctx.area.area + t
                        }))
                    }
                    ,
                    e.prototype.domInit = function() {
                        var e = this.options.root;
                        e && (e.innerHTML = this.renderView(this.ctx),
                        this.domNode = new l.default,
                        this.loginForm = new d.AccountLogin(this.ctx,{
                            dom: this.domNode.loginForm
                        }),
                        this.loginVerifyCodeForm = new d.EmailCodeLogin(this.ctx,{
                            dom: this.domNode.loginVerifyCodeForm
                        }),
                        this.fPwdEmailForm = new u.PwdSendEmail(this.ctx,{
                            dom: this.domNode.fPwdEmailForm
                        }),
                        this.fPwdForm = new u.InputPwd(this.ctx,{
                            dom: this.domNode.fPwdForm
                        }),
                        this.domNode = new l.default,
                        this.bindEvents(),
                        a.updateDomVisible(this.ctx.domState, this.domNode),
                        a.updateDomInputValue(this.ctx.state, this.domNode),
                        this.setAccount(),
                        this.setEmail())
                    }
                    ,
                    e.prototype.updateLoading = function(e) {
                        var t = "text-disabled";
                        e ? (this.domNode.loginBtn.classList.add("is-disabled"),
                        this.domNode.loginVerifyCodeBtn.classList.add("is-disabled"),
                        this.domNode.sendEmailBtn.classList.add("is-disabled"),
                        this.domNode.fPwdResetBtn.classList.add("is-disabled"),
                        this.domNode.loginFPwdBtn.classList.add(t),
                        this.domNode.loginSignUpBtn && this.domNode.loginSignUpBtn.classList.add(t),
                        this.domNode.loginVerifyCodeBack.classList.add(t),
                        this.domNode.fPwdLoginBtn.classList.add(t),
                        this.domNode.fPwdEmailLoginBtn.classList.add(t)) : (this.domNode.loginBtn.classList.remove("is-disabled"),
                        this.domNode.loginVerifyCodeBtn.classList.remove("is-disabled"),
                        this.domNode.sendEmailBtn.classList.remove("is-disabled"),
                        this.domNode.fPwdResetBtn.classList.remove("is-disabled"),
                        this.domNode.loginFPwdBtn.classList.remove(t),
                        this.domNode.loginSignUpBtn && this.domNode.loginSignUpBtn.classList.remove(t),
                        this.domNode.loginVerifyCodeBack.classList.remove(t),
                        this.domNode.fPwdLoginBtn.classList.remove(t),
                        this.domNode.fPwdEmailLoginBtn.classList.remove(t)),
                        this.domNode.loginBtn.disabled = e,
                        this.domNode.loginVerifyCodeBtn.disabled = e,
                        this.domNode.sendEmailBtn.disabled = e,
                        this.domNode.fPwdResetBtn.disabled = e
                    }
                    ,
                    e.prototype.bindEvents = function() {}
                    ,
                    e.prototype.renderView = function(e) {
                        return '\n<section\n  id="TikTok_Ads_SSO_Login_Container"\n  class="tiktokads-common-login ' + (e.options.showLabel ? "" : "hide-label") + " " + (e.options.className ? e.options.className : "") + '"\n  >\n  <div id="TikTok_Ads_SSO_Login_Form"></div>\n  <div id="TikTok_Ads_SSO_FPwd_Email_Form"></div>\n  <div id="TikTok_Ads_SSO_FPwd_Form"></div>\n  <div id="TikTok_Ads_SSO_Login_Verify_Form"></div>\n  <div id="TikTok_Ads_SSO_Slider_Varify_Container">\n    <div id="TikTok_Ads_SSO_Slider_Varify" class="tiktokads-common-login-slider"></div>\n  </div>\n</section>\n    '
                    }
                    ,
                    e.prototype.requestInit = function(e) {
                        var t = {
                            appId: this.options.appId,
                            service: e || this.options.service,
                            lang: this.options.lang || this.defaultLanguage,
                            host: this.options.host || ""
                        }
                          , i = n(10)("./" + t.lang + ".json")
                          , r = n(24)
                          , a = o({}, r, i);
                        return {
                            request: new p.default(t,a),
                            options: t
                        }
                    }
                    ,
                    e.prototype.getCountryCodeByIp = function() {
                        return i(this, void 0, void 0, function() {
                            var e, t, n, i, a, s, c;
                            return r(this, function(r) {
                                switch (r.label) {
                                case 0:
                                    if (e = {
                                        code: "",
                                        area: "",
                                        time: 0
                                    },
                                    t = this.options,
                                    n = t.defaultArea,
                                    i = t.defaultCountry,
                                    -1 === this.ctx.accountTypes.indexOf("mobile"))
                                        return [2];
                                    if ((n || i) && (a = h.default.find(function(e) {
                                        return n ? n === e.area : ("" + i).toLocaleUpperCase() === e.shortName
                                    })))
                                        return this.ctx.area = a,
                                        [2];
                                    try {
                                        e = JSON.parse(window.localStorage.getItem("AC_AREA_CODE") || JSON.stringify({}))
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    return e.code ? [3, 2] : [4, this.request.getCountryCodeByIp().catch(console.info)];
                                case 1:
                                    (s = r.sent() || {}).country_code && (e.code = s.country_code,
                                    e.area = s.country_calling_code,
                                    window.localStorage.setItem("AC_AREA_CODE", JSON.stringify(o({}, e, {
                                        time: +new Date
                                    })))),
                                    r.label = 2;
                                case 2:
                                    return c = h.default.find(function(t) {
                                        return t.shortName === e.code && (!e.area || t.area === e.area)
                                    }) || h.default[0],
                                    this.ctx.area = c,
                                    this.setAccount(),
                                    [2, c]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.checkLogin = function(e) {
                        var t = this.requestInit(e)
                          , n = t.request
                          , o = t.options;
                        return n.checkLogin(o)
                    }
                    ,
                    e.prototype.render = function(e) {
                        var t = this
                          , n = e || this.options.lang || this.defaultLanguage;
                        e && (this.options.lang = e),
                        this.starlingInit({
                            lang: n
                        }, function() {
                            t.domInit(),
                            f.default(t.ctx, t.domNode, t.ctx.state);
                            var e = document.querySelector(".form-validation");
                            e && (t.ctx.width = e.offsetWidth)
                        })
                    }
                    ,
                    e.prototype.init = function(e) {
                        var t = this
                          , n = e || this.options.lang || this.defaultLanguage;
                        e && (this.options.lang = e),
                        this.starlingInit({
                            lang: n
                        }, function() {
                            t.domInit(),
                            t.getCountryCodeByIp()
                        })
                    }
                    ,
                    e
                }();
                t.default = A
            }
            , function(e, t, n) {
                window,
                e.exports = function(e) {
                    var t = {};
                    function n(o) {
                        if (t[o])
                            return t[o].exports;
                        var i = t[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return e[o].call(i.exports, i, i.exports, n),
                        i.l = !0,
                        i.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.d = function(e, t, o) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: o
                        })
                    }
                    ,
                    n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    n.t = function(e, t) {
                        if (1 & t && (e = n(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var o = Object.create(null);
                        if (n.r(o),
                        Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var i in e)
                                n.d(o, i, function(t) {
                                    return e[t]
                                }
                                .bind(null, i));
                        return o
                    }
                    ,
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, "a", t),
                        t
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n.p = "",
                    n(n.s = 63)
                }([function(e, t, n) {
                    (function(t) {
                        var n = function(e) {
                            return e && e.Math == Math && e
                        };
                        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
                    }
                    ).call(this, n(68))
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(39)
                      , r = n(2)
                      , a = n(43)
                      , s = n(44)
                      , c = n(69)
                      , l = i("wks")
                      , d = o.Symbol
                      , u = c ? d : d && d.withoutSetter || a;
                    e.exports = function(e) {
                        return r(l, e) || (s && r(d, e) ? l[e] = d[e] : l[e] = u("Symbol." + e)),
                        l[e]
                    }
                }
                , function(e, t) {
                    var n = {}.hasOwnProperty;
                    e.exports = function(e, t) {
                        return n.call(e, t)
                    }
                }
                , function(e, t, n) {
                    var o = n(8);
                    e.exports = function(e) {
                        if (!o(e))
                            throw TypeError(String(e) + " is not an object");
                        return e
                    }
                }
                , function(e, t, n) {
                    var o = n(7)
                      , i = n(6)
                      , r = n(19);
                    e.exports = o ? function(e, t, n) {
                        return i.f(e, t, r(1, n))
                    }
                    : function(e, t, n) {
                        return e[t] = n,
                        e
                    }
                }
                , function(e, t) {
                    e.exports = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    }
                }
                , function(e, t, n) {
                    var o = n(7)
                      , i = n(41)
                      , r = n(3)
                      , a = n(42)
                      , s = Object.defineProperty;
                    t.f = o ? s : function(e, t, n) {
                        if (r(e),
                        t = a(t, !0),
                        r(n),
                        i)
                            try {
                                return s(e, t, n)
                            } catch (e) {}
                        if ("get"in n || "set"in n)
                            throw TypeError("Accessors not supported");
                        return "value"in n && (e[t] = n.value),
                        e
                    }
                }
                , function(e, t, n) {
                    var o = n(5);
                    e.exports = !o(function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    })
                }
                , function(e, t) {
                    e.exports = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(33).f
                      , r = n(4)
                      , a = n(11)
                      , s = n(25)
                      , c = n(80)
                      , l = n(50);
                    e.exports = function(e, t) {
                        var n, d, u, m, f, p = e.target, _ = e.global, h = e.stat;
                        if (n = _ ? o : h ? o[p] || s(p, {}) : (o[p] || {}).prototype)
                            for (d in t) {
                                if (m = t[d],
                                u = e.noTargetGet ? (f = i(n, d)) && f.value : n[d],
                                !l(_ ? d : p + (h ? "." : "#") + d, e.forced) && void 0 !== u) {
                                    if (typeof m == typeof u)
                                        continue;
                                    c(m, u)
                                }
                                (e.sham || u && u.sham) && r(m, "sham", !0),
                                a(n, d, m, e)
                            }
                    }
                }
                , function(e, t, n) {
                    var o = n(24)
                      , i = n(0)
                      , r = function(e) {
                        return "function" == typeof e ? e : void 0
                    };
                    e.exports = function(e, t) {
                        return arguments.length < 2 ? r(o[e]) || r(i[e]) : o[e] && o[e][t] || i[e] && i[e][t]
                    }
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(4)
                      , r = n(2)
                      , a = n(25)
                      , s = n(28)
                      , c = n(14)
                      , l = c.get
                      , d = c.enforce
                      , u = String(String).split("String");
                    (e.exports = function(e, t, n, s) {
                        var c = !!s && !!s.unsafe
                          , l = !!s && !!s.enumerable
                          , m = !!s && !!s.noTargetGet;
                        "function" == typeof n && ("string" != typeof t || r(n, "name") || i(n, "name", t),
                        d(n).source = u.join("string" == typeof t ? t : "")),
                        e !== o ? (c ? !m && e[t] && (l = !0) : delete e[t],
                        l ? e[t] = n : i(e, t, n)) : l ? e[t] = n : a(t, n)
                    }
                    )(Function.prototype, "toString", function() {
                        return "function" == typeof this && l(this).source || s(this)
                    })
                }
                , function(e, t) {
                    e.exports = function(e) {
                        if ("function" != typeof e)
                            throw TypeError(String(e) + " is not a function");
                        return e
                    }
                }
                , function(e, t) {
                    e.exports = !1
                }
                , function(e, t, n) {
                    var o, i, r, a = n(70), s = n(0), c = n(8), l = n(4), d = n(2), u = n(29), m = n(30), f = s.WeakMap;
                    if (a) {
                        var p = new f
                          , _ = p.get
                          , h = p.has
                          , A = p.set;
                        o = function(e, t) {
                            return A.call(p, e, t),
                            t
                        }
                        ,
                        i = function(e) {
                            return _.call(p, e) || {}
                        }
                        ,
                        r = function(e) {
                            return h.call(p, e)
                        }
                    } else {
                        var g = u("state");
                        m[g] = !0,
                        o = function(e, t) {
                            return l(e, g, t),
                            t
                        }
                        ,
                        i = function(e) {
                            return d(e, g) ? e[g] : {}
                        }
                        ,
                        r = function(e) {
                            return d(e, g)
                        }
                    }
                    e.exports = {
                        set: o,
                        get: i,
                        has: r,
                        enforce: function(e) {
                            return r(e) ? i(e) : o(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var n;
                                if (!c(t) || (n = i(t)).type !== e)
                                    throw TypeError("Incompatible receiver, " + e + " required");
                                return n
                            }
                        }
                    }
                }
                , function(e, t) {
                    var n = {}.toString;
                    e.exports = function(e) {
                        return n.call(e).slice(8, -1)
                    }
                }
                , function(e, t, n) {
                    var o = n(6).f
                      , i = n(2)
                      , r = n(1)("toStringTag");
                    e.exports = function(e, t, n) {
                        e && !i(e = n ? e : e.prototype, r) && o(e, r, {
                            configurable: !0,
                            value: t
                        })
                    }
                }
                , function(e, t) {
                    e.exports = {}
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(12)
                      , i = function(e) {
                        var t, n;
                        this.promise = new e(function(e, o) {
                            if (void 0 !== t || void 0 !== n)
                                throw TypeError("Bad Promise constructor");
                            t = e,
                            n = o
                        }
                        ),
                        this.resolve = o(t),
                        this.reject = o(n)
                    };
                    e.exports.f = function(e) {
                        return new i(e)
                    }
                }
                , function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                }
                , function(e, t, n) {
                    var o = n(79)
                      , i = n(32);
                    e.exports = function(e) {
                        return o(i(e))
                    }
                }
                , function(e, t, n) {
                    var o = n(3)
                      , i = n(100)
                      , r = n(49)
                      , a = n(55)
                      , s = n(101)
                      , c = n(102)
                      , l = function(e, t) {
                        this.stopped = e,
                        this.result = t
                    };
                    (e.exports = function(e, t, n, d, u) {
                        var m, f, p, _, h, A, g, k = a(t, n, d ? 2 : 1);
                        if (u)
                            m = e;
                        else {
                            if ("function" != typeof (f = s(e)))
                                throw TypeError("Target is not iterable");
                            if (i(f)) {
                                for (p = 0,
                                _ = r(e.length); _ > p; p++)
                                    if ((h = d ? k(o(g = e[p])[0], g[1]) : k(e[p])) && h instanceof l)
                                        return h;
                                return new l(!1)
                            }
                            m = f.call(e)
                        }
                        for (A = m.next; !(g = A.call(m)).done; )
                            if ("object" == typeof (h = c(m, k, g.value, d)) && h && h instanceof l)
                                return h;
                        return new l(!1)
                    }
                    ).stop = function(e) {
                        return new l(!0,e)
                    }
                }
                , function(e, t) {
                    e.exports = function(e) {
                        try {
                            return {
                                error: !1,
                                value: e()
                            }
                        } catch (e) {
                            return {
                                error: !0,
                                value: e
                            }
                        }
                    }
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        function t(e) {
                            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            )(e)
                        }
                        Object.prototype.toString;
                        var n, o, i = function(e) {
                            switch (Object.prototype.toString.call(e)) {
                            case "[object Function]":
                                return "function";
                            case "[object Array]":
                                return "array";
                            case "[object String]":
                                return "string"
                            }
                            return void 0 === e ? "undefined" : e === Object(e) ? "object" : t(e)
                        }, r = (window.document,
                        /^(?:text|application)\/javascript/i), a = /^(?:text|application)\/xml/i, s = /^\s*$/, c = e.exports = function(e) {
                            var t = p({}, e || {});
                            for (n in c.settings)
                                void 0 === t[n] && (t[n] = c.settings[n]);
                            !function(e) {
                                e.global && 0 == c.active++ && l(e)
                            }(t),
                            t.crossDomain || (t.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(t.url) && RegExp.$2 != window.location.host);
                            var _ = t.dataType;
                            /=\?/.test(t.url),
                            t.url || (t.url = window.location.toString()),
                            function(e) {
                                var t, n;
                                "object" === i(e.data) && (e.data = (t = e.data,
                                (n = []).add = function(e, t) {
                                    this.push(f(e) + "=" + f(t))
                                }
                                ,
                                function e(t, n, o, r) {
                                    var a = "array" === i(n);
                                    for (var s in n) {
                                        var c = n[s];
                                        r && (s = o ? r : r + "[" + (a ? "" : s) + "]"),
                                        !r && a ? t.add(c.name, c.value) : (o ? "array" === i(c) : "object" === i(c)) ? e(t, c, o, s) : t.add(s, c)
                                    }
                                }(n, t, void 0),
                                n.join("&").replace("%20", "+"))),
                                !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = (e.url + "&" + e.data).replace(/[&?]{1,2}/, "?"))
                            }(t);
                            var h, A = t.accepts[_], g = {}, k = /^([\w-]+:)\/\//.test(t.url) ? RegExp.$1 : window.location.protocol, b = c.settings.xhr();
                            t.crossDomain || (g["X-Requested-With"] = "XMLHttpRequest"),
                            A && (g.Accept = A,
                            A.indexOf(",") > -1 && (A = A.split(",", 2)[0]),
                            b.overrideMimeType && b.overrideMimeType(A)),
                            (t.contentType || t.data && "GET" != t.type.toUpperCase()) && (g["Content-Type"] = t.contentType || "application/x-www-form-urlencoded"),
                            t.headers = p(g, t.headers || {}),
                            b.onreadystatechange = function() {
                                if (4 == b.readyState) {
                                    clearTimeout(h);
                                    var e, n = !1;
                                    if (b.status >= 200 && b.status < 300 || 304 == b.status || 0 == b.status && "file:" == k) {
                                        _ = _ || function(e) {
                                            return e && ("text/html" == e ? "html" : "application/json" == e ? "json" : r.test(e) ? "script" : a.test(e) && "xml") || "text"
                                        }(b.getResponseHeader("content-type")),
                                        e = b.responseText;
                                        try {
                                            "script" == _ ? (0,
                                            eval)(e) : "xml" == _ ? e = b.responseXML : "json" == _ && (e = s.test(e) ? null : JSON.parse(e))
                                        } catch (e) {
                                            n = e
                                        }
                                        n ? d(n, "parsererror", b, t) : function(e, t, n) {
                                            var o = n.context;
                                            n.success.call(o, e, "success", t),
                                            l(n),
                                            u("success", t, n)
                                        }(e, b, t)
                                    } else
                                        d(null, "error", b, t)
                                }
                            }
                            ;
                            var v = !("async"in t) || t.async;
                            for (o in b.open(t.type, t.url, v),
                            t.headers)
                                b.setRequestHeader(o, t.headers[o]);
                            return !1 === function(e, t) {
                                var n = t.context;
                                if (!1 === t.beforeSend.call(n, e, t) || !1 === l(t))
                                    return !1;
                                l(t)
                            }(b, t) ? (b.abort(),
                            !1) : (t.timeout > 0 && (h = setTimeout(function() {
                                b.onreadystatechange = m,
                                b.abort(),
                                d(null, "timeout", b, t)
                            }, t.timeout)),
                            b.send(t.data ? t.data : null),
                            b)
                        }
                        ;
                        function l(e, t, n, o) {
                            if (e.global)
                                return !0
                        }
                        function d(e, t, n, o) {
                            var i = o.context;
                            o.error.call(i, n, t, e),
                            l(o),
                            u(t, n, o)
                        }
                        function u(e, t, n) {
                            var o = n.context;
                            n.complete.call(o, t, e),
                            l(n),
                            function(e) {
                                e.global && !--c.active && l(e)
                            }(n)
                        }
                        function m() {}
                        c.active = 0,
                        c.settings = {
                            type: "GET",
                            beforeSend: m,
                            success: m,
                            error: m,
                            complete: m,
                            context: null,
                            global: !0,
                            xhr: function() {
                                return new window.XMLHttpRequest
                            },
                            accepts: {
                                script: "text/javascript, application/javascript",
                                json: "application/json",
                                xml: "application/xml, text/xml",
                                html: "text/html",
                                text: "text/plain"
                            },
                            crossDomain: !1,
                            timeout: 0
                        },
                        c.get = function(e, t) {
                            return c({
                                url: e,
                                success: t
                            })
                        }
                        ,
                        c.post = function(e, t, n, o) {
                            return "function" === i(t) && (o = o || n,
                            n = t,
                            t = null),
                            c({
                                type: "POST",
                                url: e,
                                data: t,
                                success: n,
                                dataType: o
                            })
                        }
                        ;
                        var f = encodeURIComponent;
                        function p(e) {
                            for (var t = Array.prototype.slice, o = t.call(arguments, 1), i = 0; i < o.length; i++) {
                                var r = o[i];
                                for (n in r)
                                    void 0 !== r[n] && (e[n] = r[n])
                            }
                            return e
                        }
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o = n(0);
                    e.exports = o
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(4);
                    e.exports = function(e, t) {
                        try {
                            i(o, e, t)
                        } catch (n) {
                            o[e] = t
                        }
                        return t
                    }
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(8)
                      , r = o.document
                      , a = i(r) && i(r.createElement);
                    e.exports = function(e) {
                        return a ? r.createElement(e) : {}
                    }
                }
                , function(e, t, n) {
                    var o = {};
                    o[n(1)("toStringTag")] = "z",
                    e.exports = "[object z]" === String(o)
                }
                , function(e, t, n) {
                    var o = n(40)
                      , i = Function.toString;
                    "function" != typeof o.inspectSource && (o.inspectSource = function(e) {
                        return i.call(e)
                    }
                    ),
                    e.exports = o.inspectSource
                }
                , function(e, t, n) {
                    var o = n(39)
                      , i = n(43)
                      , r = o("keys");
                    e.exports = function(e) {
                        return r[e] || (r[e] = i(e))
                    }
                }
                , function(e, t) {
                    e.exports = {}
                }
                , function(e, t) {
                    var n = Math.ceil
                      , o = Math.floor;
                    e.exports = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
                    }
                }
                , function(e, t) {
                    e.exports = function(e) {
                        if (null == e)
                            throw TypeError("Can't call method on " + e);
                        return e
                    }
                }
                , function(e, t, n) {
                    var o = n(7)
                      , i = n(78)
                      , r = n(19)
                      , a = n(20)
                      , s = n(42)
                      , c = n(2)
                      , l = n(41)
                      , d = Object.getOwnPropertyDescriptor;
                    t.f = o ? d : function(e, t) {
                        if (e = a(e),
                        t = s(t, !0),
                        l)
                            try {
                                return d(e, t)
                            } catch (e) {}
                        if (c(e, t))
                            return r(!i.f.call(e, t), e[t])
                    }
                }
                , function(e, t) {
                    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                }
                , function(e, t, n) {
                    var o = n(2)
                      , i = n(87)
                      , r = n(29)
                      , a = n(88)
                      , s = r("IE_PROTO")
                      , c = Object.prototype;
                    e.exports = a ? Object.getPrototypeOf : function(e) {
                        return e = i(e),
                        o(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
                    }
                }
                , function(e, t, n) {
                    var o, i = n(3), r = n(89), a = n(34), s = n(30), c = n(52), l = n(26), d = n(29)("IE_PROTO"), u = function() {}, m = function(e) {
                        return "<script>" + e + "<\/script>"
                    }, f = function() {
                        try {
                            o = document.domain && new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, t;
                        f = o ? function(e) {
                            e.write(m("")),
                            e.close();
                            var t = e.parentWindow.Object;
                            return e = null,
                            t
                        }(o) : ((t = l("iframe")).style.display = "none",
                        c.appendChild(t),
                        t.src = String("javascript:"),
                        (e = t.contentWindow.document).open(),
                        e.write(m("document.F=Object")),
                        e.close(),
                        e.F);
                        for (var n = a.length; n--; )
                            delete f.prototype[a[n]];
                        return f()
                    };
                    s[d] = !0,
                    e.exports = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (u.prototype = i(e),
                        n = new u,
                        u.prototype = null,
                        n[d] = e) : n = f(),
                        void 0 === t ? n : r(n, t)
                    }
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        e.exports = function(e, t) {
                            var n = {
                                type: "loadJSSDK",
                                start_time: (new Date).getTime(),
                                extra: e
                            }
                              , o = document.getElementsByTagName("head")[0]
                              , i = document.createElement("script");
                            i.setAttribute("src", e),
                            o.appendChild(i);
                            var r = setTimeout(function() {
                                t(new Error("LoadJSSDKMoreTan4000ms"), n)
                            }, 4e3);
                            i.onload = function() {
                                clearTimeout(r),
                                r = null,
                                t(null, n)
                            }
                            ,
                            i.onerror = function(e) {
                                clearTimeout(r),
                                r = null,
                                n.extra = e.type,
                                t(new Error("Failed to load SDK!"), n)
                            }
                        }
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o = n(1);
                    t.f = o
                }
                , function(e, t, n) {
                    var o = n(13)
                      , i = n(40);
                    (e.exports = function(e, t) {
                        return i[e] || (i[e] = void 0 !== t ? t : {})
                    }
                    )("versions", []).push({
                        version: "3.6.4",
                        mode: o ? "pure" : "global",
                        copyright: "漏 2020 Denis Pushkarev (zloirock.ru)"
                    })
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(25)
                      , r = o["__core-js_shared__"] || i("__core-js_shared__", {});
                    e.exports = r
                }
                , function(e, t, n) {
                    var o = n(7)
                      , i = n(5)
                      , r = n(26);
                    e.exports = !o && !i(function() {
                        return 7 != Object.defineProperty(r("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })
                }
                , function(e, t, n) {
                    var o = n(8);
                    e.exports = function(e, t) {
                        if (!o(e))
                            return e;
                        var n, i;
                        if (t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
                            return i;
                        if ("function" == typeof (n = e.valueOf) && !o(i = n.call(e)))
                            return i;
                        if (!t && "function" == typeof (n = e.toString) && !o(i = n.call(e)))
                            return i;
                        throw TypeError("Can't convert object to primitive value")
                    }
                }
                , function(e, t) {
                    var n = 0
                      , o = Math.random();
                    e.exports = function(e) {
                        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + o).toString(36)
                    }
                }
                , function(e, t, n) {
                    var o = n(5);
                    e.exports = !!Object.getOwnPropertySymbols && !o(function() {
                        return !String(Symbol())
                    })
                }
                , function(e, t, n) {
                    var o = n(27)
                      , i = n(11)
                      , r = n(71);
                    o || i(Object.prototype, "toString", r, {
                        unsafe: !0
                    })
                }
                , function(e, t, n) {
                    var o = n(27)
                      , i = n(15)
                      , r = n(1)("toStringTag")
                      , a = "Arguments" == i(function() {
                        return arguments
                    }());
                    e.exports = o ? i : function(e) {
                        var t, n, o;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = Object(e), r)) ? n : a ? i(t) : "Object" == (o = i(t)) && "function" == typeof t.callee ? "Arguments" : o
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(86)
                      , r = n(35)
                      , a = n(53)
                      , s = n(16)
                      , c = n(4)
                      , l = n(11)
                      , d = n(1)
                      , u = n(13)
                      , m = n(17)
                      , f = n(51)
                      , p = f.IteratorPrototype
                      , _ = f.BUGGY_SAFARI_ITERATORS
                      , h = d("iterator")
                      , A = function() {
                        return this
                    };
                    e.exports = function(e, t, n, d, f, g, k) {
                        i(n, t, d);
                        var b, v, y, w = function(e) {
                            if (e === f && S)
                                return S;
                            if (!_ && e in E)
                                return E[e];
                            switch (e) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function() {
                                    return new n(this,e)
                                }
                            }
                            return function() {
                                return new n(this)
                            }
                        }, C = t + " Iterator", B = !1, E = e.prototype, x = E[h] || E["@@iterator"] || f && E[f], S = !_ && x || w(f), T = "Array" == t && E.entries || x;
                        if (T && (b = r(T.call(new e)),
                        p !== Object.prototype && b.next && (u || r(b) === p || (a ? a(b, p) : "function" != typeof b[h] && c(b, h, A)),
                        s(b, C, !0, !0),
                        u && (m[C] = A))),
                        "values" == f && x && "values" !== x.name && (B = !0,
                        S = function() {
                            return x.call(this)
                        }
                        ),
                        u && !k || E[h] === S || c(E, h, S),
                        m[t] = S,
                        f)
                            if (v = {
                                values: w("values"),
                                keys: g ? S : w("keys"),
                                entries: w("entries")
                            },
                            k)
                                for (y in v)
                                    !_ && !B && y in E || l(E, y, v[y]);
                            else
                                o({
                                    target: t,
                                    proto: !0,
                                    forced: _ || B
                                }, v);
                        return v
                    }
                }
                , function(e, t, n) {
                    var o = n(2)
                      , i = n(20)
                      , r = n(83).indexOf
                      , a = n(30);
                    e.exports = function(e, t) {
                        var n, s = i(e), c = 0, l = [];
                        for (n in s)
                            !o(a, n) && o(s, n) && l.push(n);
                        for (; t.length > c; )
                            o(s, n = t[c++]) && (~r(l, n) || l.push(n));
                        return l
                    }
                }
                , function(e, t, n) {
                    var o = n(31)
                      , i = Math.min;
                    e.exports = function(e) {
                        return e > 0 ? i(o(e), 9007199254740991) : 0
                    }
                }
                , function(e, t, n) {
                    var o = n(5)
                      , i = /#|\.prototype\./
                      , r = function(e, t) {
                        var n = s[a(e)];
                        return n == l || n != c && ("function" == typeof t ? o(t) : !!t)
                    }
                      , a = r.normalize = function(e) {
                        return String(e).replace(i, ".").toLowerCase()
                    }
                      , s = r.data = {}
                      , c = r.NATIVE = "N"
                      , l = r.POLYFILL = "P";
                    e.exports = r
                }
                , function(e, t, n) {
                    "use strict";
                    var o, i, r, a = n(35), s = n(4), c = n(2), l = n(1), d = n(13), u = l("iterator"), m = !1;
                    [].keys && ("next"in (r = [].keys()) ? (i = a(a(r))) !== Object.prototype && (o = i) : m = !0),
                    null == o && (o = {}),
                    d || c(o, u) || s(o, u, function() {
                        return this
                    }),
                    e.exports = {
                        IteratorPrototype: o,
                        BUGGY_SAFARI_ITERATORS: m
                    }
                }
                , function(e, t, n) {
                    var o = n(10);
                    e.exports = o("document", "documentElement")
                }
                , function(e, t, n) {
                    var o = n(3)
                      , i = n(91);
                    e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                        var e, t = !1, n = {};
                        try {
                            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                            t = n instanceof Array
                        } catch (e) {}
                        return function(n, r) {
                            return o(n),
                            i(r),
                            t ? e.call(n, r) : n.__proto__ = r,
                            n
                        }
                    }() : void 0)
                }
                , function(e, t, n) {
                    var o = n(0);
                    e.exports = o.Promise
                }
                , function(e, t, n) {
                    var o = n(12);
                    e.exports = function(e, t, n) {
                        if (o(e),
                        void 0 === t)
                            return e;
                        switch (n) {
                        case 0:
                            return function() {
                                return e.call(t)
                            }
                            ;
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            }
                            ;
                        case 2:
                            return function(n, o) {
                                return e.call(t, n, o)
                            }
                            ;
                        case 3:
                            return function(n, o, i) {
                                return e.call(t, n, o, i)
                            }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                }
                , function(e, t, n) {
                    var o = n(3)
                      , i = n(12)
                      , r = n(1)("species");
                    e.exports = function(e, t) {
                        var n, a = o(e).constructor;
                        return void 0 === a || null == (n = o(a)[r]) ? t : i(n)
                    }
                }
                , function(e, t, n) {
                    var o, i, r, a = n(0), s = n(5), c = n(15), l = n(55), d = n(52), u = n(26), m = n(58), f = a.location, p = a.setImmediate, _ = a.clearImmediate, h = a.process, A = a.MessageChannel, g = a.Dispatch, k = 0, b = {}, v = function(e) {
                        if (b.hasOwnProperty(e)) {
                            var t = b[e];
                            delete b[e],
                            t()
                        }
                    }, y = function(e) {
                        return function() {
                            v(e)
                        }
                    }, w = function(e) {
                        v(e.data)
                    }, C = function(e) {
                        a.postMessage(e + "", f.protocol + "//" + f.host)
                    };
                    p && _ || (p = function(e) {
                        for (var t = [], n = 1; arguments.length > n; )
                            t.push(arguments[n++]);
                        return b[++k] = function() {
                            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
                        }
                        ,
                        o(k),
                        k
                    }
                    ,
                    _ = function(e) {
                        delete b[e]
                    }
                    ,
                    "process" == c(h) ? o = function(e) {
                        h.nextTick(y(e))
                    }
                    : g && g.now ? o = function(e) {
                        g.now(y(e))
                    }
                    : A && !m ? (r = (i = new A).port2,
                    i.port1.onmessage = w,
                    o = l(r.postMessage, r, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || s(C) ? o = "onreadystatechange"in u("script") ? function(e) {
                        d.appendChild(u("script")).onreadystatechange = function() {
                            d.removeChild(this),
                            v(e)
                        }
                    }
                    : function(e) {
                        setTimeout(y(e), 0)
                    }
                    : (o = C,
                    a.addEventListener("message", w, !1))),
                    e.exports = {
                        set: p,
                        clear: _
                    }
                }
                , function(e, t, n) {
                    var o = n(59);
                    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o)
                }
                , function(e, t, n) {
                    var o = n(10);
                    e.exports = o("navigator", "userAgent") || ""
                }
                , function(e, t, n) {
                    var o = n(3)
                      , i = n(8)
                      , r = n(18);
                    e.exports = function(e, t) {
                        if (o(e),
                        i(t) && t.constructor === e)
                            return t;
                        var n = r.f(e);
                        return (0,
                        n.resolve)(t),
                        n.promise
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(12)
                      , r = n(18)
                      , a = n(22)
                      , s = n(21);
                    o({
                        target: "Promise",
                        stat: !0
                    }, {
                        allSettled: function(e) {
                            var t = this
                              , n = r.f(t)
                              , o = n.resolve
                              , c = n.reject
                              , l = a(function() {
                                var n = i(t.resolve)
                                  , r = []
                                  , a = 0
                                  , c = 1;
                                s(e, function(e) {
                                    var i = a++
                                      , s = !1;
                                    r.push(void 0),
                                    c++,
                                    n.call(t, e).then(function(e) {
                                        s || (s = !0,
                                        r[i] = {
                                            status: "fulfilled",
                                            value: e
                                        },
                                        --c || o(r))
                                    }, function(e) {
                                        s || (s = !0,
                                        r[i] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        --c || o(r))
                                    })
                                }),
                                --c || o(r)
                            });
                            return l.error && c(l.value),
                            n.promise
                        }
                    })
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        function t(e) {
                            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            )(e)
                        }
                        var o = n(23)
                          , i = n(112)
                          , r = (new Date).getTime()
                          , a = i(r);
                        e.exports = function(e) {
                            if ("object" === t(e)) {
                                var n = (new Date).getTime();
                                e.process_id = a,
                                e.product_host = window.location.host,
                                e.product_path = window.location.pathname,
                                e.product_query = window.location.search,
                                e.product_fullpath = e.product_host + e.product_path,
                                e.host = window.captchaHost || "unknow",
                                e.full_time = n - r,
                                e.period = e.start_time ? n - e.start_time : 0,
                                e.extra = e.extra || "",
                                e.isSuccess = 0 === e.isSuccess ? 0 : 1,
                                o({
                                    url: (window.captchaHost || "//verification-va.byteoversea.com") + "/captcha/reportError",
                                    data: JSON.stringify(e),
                                    dataType: "json",
                                    type: "POST",
                                    contentType: "application/json;charset=UTF-8"
                                })
                            }
                        }
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        function t(e) {
                            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            )(e)
                        }
                        n(64),
                        n(74);
                        var o = n(23)
                          , i = n(62)
                          , r = n(37)
                          , a = n(113)
                          , s = {
                            va: "https://verification-va.byteoversea.com",
                            in: "https://verification-va-useast2a.byteoversea.com",
                            sg: "https://verify-sg.byteoversea.com"
                        };
                        function c(e, n) {
                            "object" === t(e) ? (window.captchaHost = e.host || s[e.region || "va"],
                            window.captchaRegion = e.region || "va") : window.captchaHost = e || s.va,
                            window.mountCaptchaCallback = "function" == typeof n ? n : function() {}
                            ,
                            a(),
                            function e() {
                                if (!e.done) {
                                    e.done = !0;
                                    var t = {
                                        type: "getSetting",
                                        start_time: (new Date).getTime(),
                                        path: window.captchaHost + "/captcha/setting"
                                    };
                                    o.get(t.path, function(e) {
                                        try {
                                            var n, o = JSON.parse(e);
                                            i({
                                                type: "getSetting",
                                                start_time: t.start_time
                                            }),
                                            n = "sg" === window.captchaRegion || /\bsg\b/.test(window.captchaHost) ? "captcha_cdn_sg" : "va" === window.captchaRegion || /\bva\b\./.test(window.captchaHost) ? "captcha_cdn_va" : "in" === window.captchaRegion || /\bva\b-useast2a\./.test(window.captchaHost) ? "captcha_cdn_in" : "captcha_cdn_va",
                                            r(o[n], l)
                                        } catch (e) {
                                            l(e)
                                        }
                                    })
                                }
                            }()
                        }
                        function l(e, n) {
                            e ? (window.mountCaptchaCallback(e),
                            console.error(e),
                            n && "object" === t(n) && i({
                                type: n.type,
                                isSuccess: 0,
                                start_time: n.start_time,
                                error: e.message,
                                extra: n.extra
                            })) : n && "object" === t(n) && i({
                                type: n.type,
                                start_time: n.start_time
                            })
                        }
                        window.renderCaptcha = function(e) {
                            var t = (new Date).getTime();
                            i({
                                type: "AdvanceCallRenderCaptcha",
                                extra: "start"
                            }),
                            window.renderCaptcha.trigger = function(n) {
                                i({
                                    type: "AdvanceCallRenderCaptcha",
                                    start_time: t,
                                    extra: "end"
                                });
                                try {
                                    n(e)
                                } catch (e) {
                                    i({
                                        type: "AdvanceCallRenderCaptcha",
                                        isSuccess: 0,
                                        error: e.message,
                                        extra: "renderCaptchaError"
                                    })
                                }
                            }
                        }
                        ,
                        window.initCaptchaSDK = c,
                        window.getCaptchaWebId = a,
                        e.exports = c
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o = n(65);
                    e.exports = o
                }
                , function(e, t, n) {
                    n(66),
                    n(45),
                    n(72),
                    n(73);
                    var o = n(38);
                    e.exports = o.f("toStringTag")
                }
                , function(e, t, n) {
                    n(67)("toStringTag")
                }
                , function(e, t, n) {
                    var o = n(24)
                      , i = n(2)
                      , r = n(38)
                      , a = n(6).f;
                    e.exports = function(e) {
                        var t = o.Symbol || (o.Symbol = {});
                        i(t, e) || a(t, e, {
                            value: r.f(e)
                        })
                    }
                }
                , function(e, t) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || new Function("return this")()
                    } catch (e) {
                        "object" == typeof window && (n = window)
                    }
                    e.exports = n
                }
                , function(e, t, n) {
                    var o = n(44);
                    e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(28)
                      , r = o.WeakMap;
                    e.exports = "function" == typeof r && /native code/.test(i(r))
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(27)
                      , i = n(46);
                    e.exports = o ? {}.toString : function() {
                        return "[object " + i(this) + "]"
                    }
                }
                , function(e, t, n) {
                    n(16)(Math, "Math", !0)
                }
                , function(e, t, n) {
                    var o = n(0);
                    n(16)(o.JSON, "JSON", !0)
                }
                , function(e, t, n) {
                    var o = n(75);
                    n(108),
                    n(109),
                    n(110),
                    n(111),
                    e.exports = o
                }
                , function(e, t, n) {
                    n(45),
                    n(76),
                    n(92),
                    n(96),
                    n(61),
                    n(107);
                    var o = n(24);
                    e.exports = o.Promise
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(77).charAt
                      , i = n(14)
                      , r = n(47)
                      , a = i.set
                      , s = i.getterFor("String Iterator");
                    r(String, "String", function(e) {
                        a(this, {
                            type: "String Iterator",
                            string: String(e),
                            index: 0
                        })
                    }, function() {
                        var e, t = s(this), n = t.string, i = t.index;
                        return i >= n.length ? {
                            value: void 0,
                            done: !0
                        } : (e = o(n, i),
                        t.index += e.length,
                        {
                            value: e,
                            done: !1
                        })
                    })
                }
                , function(e, t, n) {
                    var o = n(31)
                      , i = n(32)
                      , r = function(e) {
                        return function(t, n) {
                            var r, a, s = String(i(t)), c = o(n), l = s.length;
                            return c < 0 || c >= l ? e ? "" : void 0 : (r = s.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : r : e ? s.slice(c, c + 2) : a - 56320 + (r - 55296 << 10) + 65536
                        }
                    };
                    e.exports = {
                        codeAt: r(!1),
                        charAt: r(!0)
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o = {}.propertyIsEnumerable
                      , i = Object.getOwnPropertyDescriptor
                      , r = i && !o.call({
                        1: 2
                    }, 1);
                    t.f = r ? function(e) {
                        var t = i(this, e);
                        return !!t && t.enumerable
                    }
                    : o
                }
                , function(e, t, n) {
                    var o = n(5)
                      , i = n(15)
                      , r = "".split;
                    e.exports = o(function() {
                        return !Object("z").propertyIsEnumerable(0)
                    }) ? function(e) {
                        return "String" == i(e) ? r.call(e, "") : Object(e)
                    }
                    : Object
                }
                , function(e, t, n) {
                    var o = n(2)
                      , i = n(81)
                      , r = n(33)
                      , a = n(6);
                    e.exports = function(e, t) {
                        for (var n = i(t), s = a.f, c = r.f, l = 0; l < n.length; l++) {
                            var d = n[l];
                            o(e, d) || s(e, d, c(t, d))
                        }
                    }
                }
                , function(e, t, n) {
                    var o = n(10)
                      , i = n(82)
                      , r = n(85)
                      , a = n(3);
                    e.exports = o("Reflect", "ownKeys") || function(e) {
                        var t = i.f(a(e))
                          , n = r.f;
                        return n ? t.concat(n(e)) : t
                    }
                }
                , function(e, t, n) {
                    var o = n(48)
                      , i = n(34).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) {
                        return o(e, i)
                    }
                }
                , function(e, t, n) {
                    var o = n(20)
                      , i = n(49)
                      , r = n(84)
                      , a = function(e) {
                        return function(t, n, a) {
                            var s, c = o(t), l = i(c.length), d = r(a, l);
                            if (e && n != n) {
                                for (; l > d; )
                                    if ((s = c[d++]) != s)
                                        return !0
                            } else
                                for (; l > d; d++)
                                    if ((e || d in c) && c[d] === n)
                                        return e || d || 0;
                            return !e && -1
                        }
                    };
                    e.exports = {
                        includes: a(!0),
                        indexOf: a(!1)
                    }
                }
                , function(e, t, n) {
                    var o = n(31)
                      , i = Math.max
                      , r = Math.min;
                    e.exports = function(e, t) {
                        var n = o(e);
                        return n < 0 ? i(n + t, 0) : r(n, t)
                    }
                }
                , function(e, t) {
                    t.f = Object.getOwnPropertySymbols
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(51).IteratorPrototype
                      , i = n(36)
                      , r = n(19)
                      , a = n(16)
                      , s = n(17)
                      , c = function() {
                        return this
                    };
                    e.exports = function(e, t, n) {
                        var l = t + " Iterator";
                        return e.prototype = i(o, {
                            next: r(1, n)
                        }),
                        a(e, l, !1, !0),
                        s[l] = c,
                        e
                    }
                }
                , function(e, t, n) {
                    var o = n(32);
                    e.exports = function(e) {
                        return Object(o(e))
                    }
                }
                , function(e, t, n) {
                    var o = n(5);
                    e.exports = !o(function() {
                        function e() {}
                        return e.prototype.constructor = null,
                        Object.getPrototypeOf(new e) !== e.prototype
                    })
                }
                , function(e, t, n) {
                    var o = n(7)
                      , i = n(6)
                      , r = n(3)
                      , a = n(90);
                    e.exports = o ? Object.defineProperties : function(e, t) {
                        r(e);
                        for (var n, o = a(t), s = o.length, c = 0; s > c; )
                            i.f(e, n = o[c++], t[n]);
                        return e
                    }
                }
                , function(e, t, n) {
                    var o = n(48)
                      , i = n(34);
                    e.exports = Object.keys || function(e) {
                        return o(e, i)
                    }
                }
                , function(e, t, n) {
                    var o = n(8);
                    e.exports = function(e) {
                        if (!o(e) && null !== e)
                            throw TypeError("Can't set " + String(e) + " as a prototype");
                        return e
                    }
                }
                , function(e, t, n) {
                    var o = n(0)
                      , i = n(93)
                      , r = n(94)
                      , a = n(4)
                      , s = n(1)
                      , c = s("iterator")
                      , l = s("toStringTag")
                      , d = r.values;
                    for (var u in i) {
                        var m = o[u]
                          , f = m && m.prototype;
                        if (f) {
                            if (f[c] !== d)
                                try {
                                    a(f, c, d)
                                } catch (e) {
                                    f[c] = d
                                }
                            if (f[l] || a(f, l, u),
                            i[u])
                                for (var p in r)
                                    if (f[p] !== r[p])
                                        try {
                                            a(f, p, r[p])
                                        } catch (e) {
                                            f[p] = r[p]
                                        }
                        }
                    }
                }
                , function(e, t) {
                    e.exports = {
                        CSSRuleList: 0,
                        CSSStyleDeclaration: 0,
                        CSSValueList: 0,
                        ClientRectList: 0,
                        DOMRectList: 0,
                        DOMStringList: 0,
                        DOMTokenList: 1,
                        DataTransferItemList: 0,
                        FileList: 0,
                        HTMLAllCollection: 0,
                        HTMLCollection: 0,
                        HTMLFormElement: 0,
                        HTMLSelectElement: 0,
                        MediaList: 0,
                        MimeTypeArray: 0,
                        NamedNodeMap: 0,
                        NodeList: 1,
                        PaintRequestList: 0,
                        Plugin: 0,
                        PluginArray: 0,
                        SVGLengthList: 0,
                        SVGNumberList: 0,
                        SVGPathSegList: 0,
                        SVGPointList: 0,
                        SVGStringList: 0,
                        SVGTransformList: 0,
                        SourceBufferList: 0,
                        StyleSheetList: 0,
                        TextTrackCueList: 0,
                        TextTrackList: 0,
                        TouchList: 0
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(20)
                      , i = n(95)
                      , r = n(17)
                      , a = n(14)
                      , s = n(47)
                      , c = a.set
                      , l = a.getterFor("Array Iterator");
                    e.exports = s(Array, "Array", function(e, t) {
                        c(this, {
                            type: "Array Iterator",
                            target: o(e),
                            index: 0,
                            kind: t
                        })
                    }, function() {
                        var e = l(this)
                          , t = e.target
                          , n = e.kind
                          , o = e.index++;
                        return !t || o >= t.length ? (e.target = void 0,
                        {
                            value: void 0,
                            done: !0
                        }) : "keys" == n ? {
                            value: o,
                            done: !1
                        } : "values" == n ? {
                            value: t[o],
                            done: !1
                        } : {
                            value: [o, t[o]],
                            done: !1
                        }
                    }, "values"),
                    r.Arguments = r.Array,
                    i("keys"),
                    i("values"),
                    i("entries")
                }
                , function(e, t, n) {
                    var o = n(1)
                      , i = n(36)
                      , r = n(6)
                      , a = o("unscopables")
                      , s = Array.prototype;
                    null == s[a] && r.f(s, a, {
                        configurable: !0,
                        value: i(null)
                    }),
                    e.exports = function(e) {
                        s[a][e] = !0
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o, i, r, a, s = n(9), c = n(13), l = n(0), d = n(10), u = n(54), m = n(11), f = n(97), p = n(16), _ = n(98), h = n(8), A = n(12), g = n(99), k = n(15), b = n(28), v = n(21), y = n(103), w = n(56), C = n(57).set, B = n(104), E = n(60), x = n(105), S = n(18), T = n(22), I = n(14), P = n(50), N = n(1), L = n(106), F = N("species"), O = "Promise", M = I.get, R = I.set, j = I.getterFor(O), V = u, z = l.TypeError, D = l.document, U = l.process, G = d("fetch"), W = S.f, q = W, H = "process" == k(U), K = !!(D && D.createEvent && l.dispatchEvent), Y = P(O, function() {
                        if (b(V) === String(V)) {
                            if (66 === L)
                                return !0;
                            if (!H && "function" != typeof PromiseRejectionEvent)
                                return !0
                        }
                        if (c && !V.prototype.finally)
                            return !0;
                        if (L >= 51 && /native code/.test(V))
                            return !1;
                        var e = V.resolve(1)
                          , t = function(e) {
                            e(function() {}, function() {})
                        };
                        return (e.constructor = {})[F] = t,
                        !(e.then(function() {})instanceof t)
                    }), X = Y || !y(function(e) {
                        V.all(e).catch(function() {})
                    }), Z = function(e) {
                        var t;
                        return !(!h(e) || "function" != typeof (t = e.then)) && t
                    }, Q = function(e, t, n) {
                        if (!t.notified) {
                            t.notified = !0;
                            var o = t.reactions;
                            B(function() {
                                for (var i = t.value, r = 1 == t.state, a = 0; o.length > a; ) {
                                    var s, c, l, d = o[a++], u = r ? d.ok : d.fail, m = d.resolve, f = d.reject, p = d.domain;
                                    try {
                                        u ? (r || (2 === t.rejection && te(e, t),
                                        t.rejection = 1),
                                        !0 === u ? s = i : (p && p.enter(),
                                        s = u(i),
                                        p && (p.exit(),
                                        l = !0)),
                                        s === d.promise ? f(z("Promise-chain cycle")) : (c = Z(s)) ? c.call(s, m, f) : m(s)) : f(i)
                                    } catch (e) {
                                        p && !l && p.exit(),
                                        f(e)
                                    }
                                }
                                t.reactions = [],
                                t.notified = !1,
                                n && !t.rejection && $(e, t)
                            })
                        }
                    }, J = function(e, t, n) {
                        var o, i;
                        K ? ((o = D.createEvent("Event")).promise = t,
                        o.reason = n,
                        o.initEvent(e, !1, !0),
                        l.dispatchEvent(o)) : o = {
                            promise: t,
                            reason: n
                        },
                        (i = l["on" + e]) ? i(o) : "unhandledrejection" === e && x("Unhandled promise rejection", n)
                    }, $ = function(e, t) {
                        C.call(l, function() {
                            var n, o = t.value;
                            if (ee(t) && (n = T(function() {
                                H ? U.emit("unhandledRejection", o, e) : J("unhandledrejection", e, o)
                            }),
                            t.rejection = H || ee(t) ? 2 : 1,
                            n.error))
                                throw n.value
                        })
                    }, ee = function(e) {
                        return 1 !== e.rejection && !e.parent
                    }, te = function(e, t) {
                        C.call(l, function() {
                            H ? U.emit("rejectionHandled", e) : J("rejectionhandled", e, t.value)
                        })
                    }, ne = function(e, t, n, o) {
                        return function(i) {
                            e(t, n, i, o)
                        }
                    }, oe = function(e, t, n, o) {
                        t.done || (t.done = !0,
                        o && (t = o),
                        t.value = n,
                        t.state = 2,
                        Q(e, t, !0))
                    }, ie = function(e, t, n, o) {
                        if (!t.done) {
                            t.done = !0,
                            o && (t = o);
                            try {
                                if (e === n)
                                    throw z("Promise can't be resolved itself");
                                var i = Z(n);
                                i ? B(function() {
                                    var o = {
                                        done: !1
                                    };
                                    try {
                                        i.call(n, ne(ie, e, o, t), ne(oe, e, o, t))
                                    } catch (n) {
                                        oe(e, o, n, t)
                                    }
                                }) : (t.value = n,
                                t.state = 1,
                                Q(e, t, !1))
                            } catch (n) {
                                oe(e, {
                                    done: !1
                                }, n, t)
                            }
                        }
                    };
                    Y && (V = function(e) {
                        g(this, V, O),
                        A(e),
                        o.call(this);
                        var t = M(this);
                        try {
                            e(ne(ie, this, t), ne(oe, this, t))
                        } catch (e) {
                            oe(this, t, e)
                        }
                    }
                    ,
                    (o = function(e) {
                        R(this, {
                            type: O,
                            done: !1,
                            notified: !1,
                            parent: !1,
                            reactions: [],
                            rejection: !1,
                            state: 0,
                            value: void 0
                        })
                    }
                    ).prototype = f(V.prototype, {
                        then: function(e, t) {
                            var n = j(this)
                              , o = W(w(this, V));
                            return o.ok = "function" != typeof e || e,
                            o.fail = "function" == typeof t && t,
                            o.domain = H ? U.domain : void 0,
                            n.parent = !0,
                            n.reactions.push(o),
                            0 != n.state && Q(this, n, !1),
                            o.promise
                        },
                        catch: function(e) {
                            return this.then(void 0, e)
                        }
                    }),
                    i = function() {
                        var e = new o
                          , t = M(e);
                        this.promise = e,
                        this.resolve = ne(ie, e, t),
                        this.reject = ne(oe, e, t)
                    }
                    ,
                    S.f = W = function(e) {
                        return e === V || e === r ? new i(e) : q(e)
                    }
                    ,
                    c || "function" != typeof u || (a = u.prototype.then,
                    m(u.prototype, "then", function(e, t) {
                        var n = this;
                        return new V(function(e, t) {
                            a.call(n, e, t)
                        }
                        ).then(e, t)
                    }, {
                        unsafe: !0
                    }),
                    "function" == typeof G && s({
                        global: !0,
                        enumerable: !0,
                        forced: !0
                    }, {
                        fetch: function(e) {
                            return E(V, G.apply(l, arguments))
                        }
                    }))),
                    s({
                        global: !0,
                        wrap: !0,
                        forced: Y
                    }, {
                        Promise: V
                    }),
                    p(V, O, !1, !0),
                    _(O),
                    r = d(O),
                    s({
                        target: O,
                        stat: !0,
                        forced: Y
                    }, {
                        reject: function(e) {
                            var t = W(this);
                            return t.reject.call(void 0, e),
                            t.promise
                        }
                    }),
                    s({
                        target: O,
                        stat: !0,
                        forced: c || Y
                    }, {
                        resolve: function(e) {
                            return E(c && this === r ? V : this, e)
                        }
                    }),
                    s({
                        target: O,
                        stat: !0,
                        forced: X
                    }, {
                        all: function(e) {
                            var t = this
                              , n = W(t)
                              , o = n.resolve
                              , i = n.reject
                              , r = T(function() {
                                var n = A(t.resolve)
                                  , r = []
                                  , a = 0
                                  , s = 1;
                                v(e, function(e) {
                                    var c = a++
                                      , l = !1;
                                    r.push(void 0),
                                    s++,
                                    n.call(t, e).then(function(e) {
                                        l || (l = !0,
                                        r[c] = e,
                                        --s || o(r))
                                    }, i)
                                }),
                                --s || o(r)
                            });
                            return r.error && i(r.value),
                            n.promise
                        },
                        race: function(e) {
                            var t = this
                              , n = W(t)
                              , o = n.reject
                              , i = T(function() {
                                var i = A(t.resolve);
                                v(e, function(e) {
                                    i.call(t, e).then(n.resolve, o)
                                })
                            });
                            return i.error && o(i.value),
                            n.promise
                        }
                    })
                }
                , function(e, t, n) {
                    var o = n(11);
                    e.exports = function(e, t, n) {
                        for (var i in t)
                            o(e, i, t[i], n);
                        return e
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(10)
                      , i = n(6)
                      , r = n(1)
                      , a = n(7)
                      , s = r("species");
                    e.exports = function(e) {
                        var t = o(e)
                          , n = i.f;
                        a && t && !t[s] && n(t, s, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                }
                , function(e, t) {
                    e.exports = function(e, t, n) {
                        if (!(e instanceof t))
                            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                        return e
                    }
                }
                , function(e, t, n) {
                    var o = n(1)
                      , i = n(17)
                      , r = o("iterator")
                      , a = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (i.Array === e || a[r] === e)
                    }
                }
                , function(e, t, n) {
                    var o = n(46)
                      , i = n(17)
                      , r = n(1)("iterator");
                    e.exports = function(e) {
                        if (null != e)
                            return e[r] || e["@@iterator"] || i[o(e)]
                    }
                }
                , function(e, t, n) {
                    var o = n(3);
                    e.exports = function(e, t, n, i) {
                        try {
                            return i ? t(o(n)[0], n[1]) : t(n)
                        } catch (t) {
                            var r = e.return;
                            throw void 0 !== r && o(r.call(e)),
                            t
                        }
                    }
                }
                , function(e, t, n) {
                    var o = n(1)("iterator")
                      , i = !1;
                    try {
                        var r = 0
                          , a = {
                            next: function() {
                                return {
                                    done: !!r++
                                }
                            },
                            return: function() {
                                i = !0
                            }
                        };
                        a[o] = function() {
                            return this
                        }
                        ,
                        Array.from(a, function() {
                            throw 2
                        })
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !i)
                            return !1;
                        var n = !1;
                        try {
                            var r = {};
                            r[o] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: n = !0
                                        }
                                    }
                                }
                            }
                            ,
                            e(r)
                        } catch (e) {}
                        return n
                    }
                }
                , function(e, t, n) {
                    var o, i, r, a, s, c, l, d, u = n(0), m = n(33).f, f = n(15), p = n(57).set, _ = n(58), h = u.MutationObserver || u.WebKitMutationObserver, A = u.process, g = u.Promise, k = "process" == f(A), b = m(u, "queueMicrotask"), v = b && b.value;
                    v || (o = function() {
                        var e, t;
                        for (k && (e = A.domain) && e.exit(); i; ) {
                            t = i.fn,
                            i = i.next;
                            try {
                                t()
                            } catch (e) {
                                throw i ? a() : r = void 0,
                                e
                            }
                        }
                        r = void 0,
                        e && e.enter()
                    }
                    ,
                    k ? a = function() {
                        A.nextTick(o)
                    }
                    : h && !_ ? (s = !0,
                    c = document.createTextNode(""),
                    new h(o).observe(c, {
                        characterData: !0
                    }),
                    a = function() {
                        c.data = s = !s
                    }
                    ) : g && g.resolve ? (l = g.resolve(void 0),
                    d = l.then,
                    a = function() {
                        d.call(l, o)
                    }
                    ) : a = function() {
                        p.call(u, o)
                    }
                    ),
                    e.exports = v || function(e) {
                        var t = {
                            fn: e,
                            next: void 0
                        };
                        r && (r.next = t),
                        i || (i = t,
                        a()),
                        r = t
                    }
                }
                , function(e, t, n) {
                    var o = n(0);
                    e.exports = function(e, t) {
                        var n = o.console;
                        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
                    }
                }
                , function(e, t, n) {
                    var o, i, r = n(0), a = n(59), s = r.process, c = s && s.versions, l = c && c.v8;
                    l ? i = (o = l.split("."))[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (i = o[1]),
                    e.exports = i && +i
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(13)
                      , r = n(54)
                      , a = n(5)
                      , s = n(10)
                      , c = n(56)
                      , l = n(60)
                      , d = n(11);
                    o({
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced: !!r && a(function() {
                            r.prototype.finally.call({
                                then: function() {}
                            }, function() {})
                        })
                    }, {
                        finally: function(e) {
                            var t = c(this, s("Promise"))
                              , n = "function" == typeof e;
                            return this.then(n ? function(n) {
                                return l(t, e()).then(function() {
                                    return n
                                })
                            }
                            : e, n ? function(n) {
                                return l(t, e()).then(function() {
                                    throw n
                                })
                            }
                            : e)
                        }
                    }),
                    i || "function" != typeof r || r.prototype.finally || d(r.prototype, "finally", s("Promise").prototype.finally)
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(7)
                      , r = n(35)
                      , a = n(53)
                      , s = n(36)
                      , c = n(6)
                      , l = n(19)
                      , d = n(21)
                      , u = n(4)
                      , m = n(14)
                      , f = m.set
                      , p = m.getterFor("AggregateError")
                      , _ = function(e, t) {
                        var n = this;
                        if (!(n instanceof _))
                            return new _(e,t);
                        a && (n = a(new Error(t), r(n)));
                        var o = [];
                        return d(e, o.push, o),
                        i ? f(n, {
                            errors: o,
                            type: "AggregateError"
                        }) : n.errors = o,
                        void 0 !== t && u(n, "message", String(t)),
                        n
                    };
                    _.prototype = s(Error.prototype, {
                        constructor: l(5, _),
                        message: l(5, ""),
                        name: l(5, "AggregateError")
                    }),
                    i && c.f(_.prototype, "errors", {
                        get: function() {
                            return p(this).errors
                        },
                        configurable: !0
                    }),
                    o({
                        global: !0
                    }, {
                        AggregateError: _
                    })
                }
                , function(e, t, n) {
                    n(61)
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(18)
                      , r = n(22);
                    o({
                        target: "Promise",
                        stat: !0
                    }, {
                        try: function(e) {
                            var t = i.f(this)
                              , n = r(e);
                            return (n.error ? t.reject : t.resolve)(n.value),
                            t.promise
                        }
                    })
                }
                , function(e, t, n) {
                    "use strict";
                    var o = n(9)
                      , i = n(12)
                      , r = n(10)
                      , a = n(18)
                      , s = n(22)
                      , c = n(21);
                    o({
                        target: "Promise",
                        stat: !0
                    }, {
                        any: function(e) {
                            var t = this
                              , n = a.f(t)
                              , o = n.resolve
                              , l = n.reject
                              , d = s(function() {
                                var n = i(t.resolve)
                                  , a = []
                                  , s = 0
                                  , d = 1
                                  , u = !1;
                                c(e, function(e) {
                                    var i = s++
                                      , c = !1;
                                    a.push(void 0),
                                    d++,
                                    n.call(t, e).then(function(e) {
                                        c || u || (u = !0,
                                        o(e))
                                    }, function(e) {
                                        c || u || (c = !0,
                                        a[i] = e,
                                        --d || l(new (r("AggregateError"))(a,"No one promise resolved")))
                                    })
                                }),
                                --d || l(new (r("AggregateError"))(a,"No one promise resolved"))
                            });
                            return d.error && l(d.value),
                            n.promise
                        }
                    })
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        e.exports = function(e) {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                                var n = (e + 16 * Math.random()) % 16 | 0;
                                return e = Math.floor(e / 16),
                                ("x" == t ? n : 3 & n | 8).toString(16)
                            })
                        }
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o, i;
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                    void 0 === (i = "function" == typeof (o = function() {
                        "use strict";
                        function t(e) {
                            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            )(e)
                        }
                        var o = n(114)
                          , i = n(62);
                        e.exports = function() {
                            var e = o.get("s_v_web_id");
                            return e && 0 === e.indexOf("verify_") ? i({
                                type: "getFp",
                                extra: "getByCookie"
                            }) : e = function() {
                                var e = (new Date).getTime()
                                  , n = function() {
                                    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
                                      , t = e.length
                                      , n = (new Date).getTime().toString(36)
                                      , o = [];
                                    o[8] = o[13] = o[18] = o[23] = "_",
                                    o[14] = "4";
                                    for (var i, r = 0; r < 36; r++)
                                        o[r] || (i = 0 | Math.random() * t,
                                        o[r] = e[19 == r ? 3 & i | 8 : i]);
                                    return "verify_" + n + "_" + o.join("")
                                }()
                                  , r = {
                                    path: "/"
                                }
                                  , a = "object" === t(window.fpCookieOption) ? window.fpCookieOption : {};
                                a.domain && /^([a-z0-9-]+)?(\.[a-z0-9-]+)+$/.test(a.domain) && (r.domain = a.domain),
                                o.set("s_v_web_id", n, r);
                                var s = !!n && !!o.get("s_v_web_id");
                                return i({
                                    type: "getFp",
                                    isSuccess: s ? 1 : 0,
                                    error: s ? "" : n ? "set cookie failed" : "generate fp failed",
                                    start_time: e,
                                    extra: "getByGenerate"
                                }),
                                n
                            }(),
                            Promise.resolve(e)
                        }
                    }
                    ) ? o.apply(t, []) : o) || (e.exports = i)
                }
                , function(e, t, n) {
                    var o, i, r;
                    /*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
                    r = function() {
                        function e() {
                            for (var e = 0, t = {}; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var o in n)
                                    t[o] = n[o]
                            }
                            return t
                        }
                        function t(e) {
                            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                        }
                        return function n(o) {
                            function i() {}
                            function r(t, n, r) {
                                if ("undefined" != typeof document) {
                                    "number" == typeof (r = e({
                                        path: "/"
                                    }, i.defaults, r)).expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)),
                                    r.expires = r.expires ? r.expires.toUTCString() : "";
                                    try {
                                        var a = JSON.stringify(n);
                                        /^[\{\[]/.test(a) && (n = a)
                                    } catch (e) {}
                                    n = o.write ? o.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                                    t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                    var s = "";
                                    for (var c in r)
                                        r[c] && (s += "; " + c,
                                        !0 !== r[c] && (s += "=" + r[c].split(";")[0]));
                                    return document.cookie = t + "=" + n + s
                                }
                            }
                            function a(e, n) {
                                if ("undefined" != typeof document) {
                                    for (var i = {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0; a < r.length; a++) {
                                        var s = r[a].split("=")
                                          , c = s.slice(1).join("=");
                                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                        try {
                                            var l = t(s[0]);
                                            if (c = (o.read || o)(c, l) || t(c),
                                            n)
                                                try {
                                                    c = JSON.parse(c)
                                                } catch (e) {}
                                            if (i[l] = c,
                                            e === l)
                                                break
                                        } catch (e) {}
                                    }
                                    return e ? i[e] : i
                                }
                            }
                            return i.set = r,
                            i.get = function(e) {
                                return a(e, !1)
                            }
                            ,
                            i.getJSON = function(e) {
                                return a(e, !0)
                            }
                            ,
                            i.remove = function(t, n) {
                                r(t, "", e(n, {
                                    expires: -1
                                }))
                            }
                            ,
                            i.defaults = {},
                            i.withConverter = n,
                            i
                        }(function() {})
                    }
                    ,
                    void 0 === (i = "function" == typeof (o = r) ? o.call(t, n, t, e) : o) || (e.exports = i),
                    e.exports = r()
                }
                ])
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {
                    function e(e) {
                        for (var t in this.$data = "Object" === this.getBaseType(e.data) ? e.data : {},
                        this.$watch = "Object" === this.getBaseType(e.watch) ? e.watch : {},
                        e.data)
                            this.setData(t)
                    }
                    return e.prototype.getBaseType = function(e) {
                        return Object.prototype.toString.apply(e).slice(8, -1)
                    }
                    ,
                    e.prototype.setData = function(e) {
                        Object.defineProperty(this, e, {
                            get: function() {
                                return this.$data[e]
                            },
                            set: function(t) {
                                var n = this.$data[e];
                                return n === t || (this.$data[e] = t,
                                this.$watch[e] && "function" == typeof this.$watch[e] && this.$watch[e].call(this, t, n)),
                                t
                            }
                        })
                    }
                    ,
                    e
                }();
                t.default = o
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(30);
                t.AccountLogin = o.default;
                var i = n(38);
                t.EmailCodeLogin = i.default
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(7)
                  , r = n(3)
                  , a = n(6)
                  , s = n(2)
                  , c = n(9)
                  , l = n(8)
                  , d = n(1);
                n(13);
                var u = function() {
                    function e(e, t) {
                        var n = t.dom;
                        this.ctx = e,
                        this.options = e.options,
                        this.request = e.request,
                        n.innerHTML = this.renderView(e),
                        this.domNode = new r.default,
                        this.init(),
                        this.bindEvents()
                    }
                    return e.prototype.resetFormValidate = function(e, t) {
                        void 0 === t && (t = "");
                        var n = this.domNode.loginFormContent;
                        s.updateFormItemClass(n, e),
                        this.domNode.loginFormError.innerHTML = t
                    }
                    ,
                    e.prototype.accountLogin = function() {
                        var e = this;
                        this.ctx.isLoading = !0;
                        var t = this.ctx.accountType;
                        return this.request.accountLogin({
                            account: "email" === t ? this.ctx.state.loginEmailInput : this.ctx.area.area + this.ctx.state.loginMobileInput,
                            password: this.ctx.state.loginPwdInput,
                            fp: i.get("s_v_web_id")
                        }).then(function(t) {
                            var n = t.error_code
                              , i = t.description
                              , r = t.redirect_url
                              , s = void 0 === r ? "" : r;
                            if (e.ctx.isLoading = !1,
                            n === a.ResCode.SUCCESS) {
                                var c = s || e.options.service || "";
                                e.options.loginSuccess && "function" == typeof e.options.loginSuccess ? e.options.loginSuccess(t) : c && (window.location.href = c)
                            } else if (n === a.ResCode.WRONG_FINGER_PRINT)
                                e.slider = new l.default(e.options,{
                                    successCb: function() {
                                        e.accountLogin()
                                    }
                                }),
                                e.slider.sliderShow();
                            else if ([a.ResCode.NOT_SAFE, a.ResCode.SAFETY_VERIFY, a.ResCode.EMAIL_VERIFY].indexOf(n) > 0)
                                e.ctx.domState = o({}, e.ctx.domState, {
                                    loginVerifyCodeForm: !0,
                                    loginForm: !1
                                });
                            else if (n === a.ResCode.NOT_SAFE_BLOCK_LOGIN || i) {
                                if (n === a.ResCode.NOT_SAFE_BLOCK_LOGIN) {
                                    var d = e.ctx.locale
                                      , u = d.see_more
                                      , m = void 0 === u ? "" : u
                                      , f = d.shark_security_7
                                      , p = ((void 0 === f ? "" : f) + ' <a target="_blank" href="' + e.ctx.options.securityUrl + '">' + m + "</a>").trim();
                                    e.resetFormValidate(!1, p || i)
                                } else
                                    e.resetFormValidate(!1, i);
                                e.options.loginFail && "function" == typeof e.options.loginFail && e.options.loginFail(t)
                            }
                        }).catch(function() {
                            e.ctx.isLoading = !1,
                            e.resetFormValidate(!1, e.ctx.locale.account_network_error_hint),
                            e.options.loginFail && "function" == typeof e.options.loginFail && e.options.loginFail()
                        })
                    }
                    ,
                    e.prototype.accountLoginInLark = function() {
                        var e = this;
                        return this.request.loginInLark({
                            domain: this.options.loginInLarkDomain || ""
                        }).then(function(t) {
                            void 0 === t && (t = {});
                            var n = (t.data || {}).lark_login_url
                              , o = void 0 === n ? "" : n;
                            if (o) {
                                var i = o + encodeURIComponent(encodeURIComponent(e.options.service));
                                window.location.href = i
                            }
                        })
                    }
                    ,
                    e.prototype.init = function() {
                        new c.AreaSelect(this.ctx,{
                            dom: this.domNode.areaLoginContainer,
                            panelType: "Login"
                        })
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.ctx.state = o({}, this.ctx.state, {
                            loginEmailInput: "",
                            loginVerifyCodeAccount: "",
                            loginPwdInput: ""
                        }),
                        this.resetFormValidate(!0)
                    }
                    ,
                    e.prototype.accountTypeChange = function(e) {
                        if (void 0 === e && (e = ""),
                        1 !== this.ctx.accountTypes.length) {
                            var t = e.trim();
                            /[a-zA-Z@]/.test(t) ? this.ctx.accountType = "email" : this.ctx.accountType = "mobile"
                        }
                    }
                    ,
                    e.prototype.acPlaceholder = function(e) {
                        return this.ctx.accountTypes.length > 1 ? "item_label_account" : "input_placeholder_" + e
                    }
                    ,
                    e.prototype.checkValidate = function() {
                        var e = this;
                        return ["login" + d.firstToUpperCase(this.ctx.accountType) + "FormItem", "loginPwdFormItem"].every(function(t) {
                            return e.ctx.domValidState[t]
                        })
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this;
                        this.domNode.loginEmailInput.onkeyup = function(t) {
                            e.accountTypeChange(t.target.value)
                        }
                        ,
                        this.domNode.loginMobileInput.onkeyup = function(t) {
                            e.accountTypeChange(t.target.value)
                        }
                        ,
                        this.domNode.loginEmailInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n),
                            e.ctx.state = o({}, e.ctx.state, {
                                loginEmailInput: n,
                                loginMobileInput: n.trim(),
                                loginVerifyCodeAccount: n
                            }),
                            e.resetFormValidate(!0)
                        }
                        ,
                        this.domNode.loginMobileInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n);
                            var i = "" + ("mobile" === e.ctx.accountType ? e.ctx.area.area : "") + n;
                            e.ctx.state = o({}, e.ctx.state, {
                                loginMobileInput: n,
                                loginEmailInput: n.trim(),
                                loginVerifyCodeAccount: i
                            }),
                            e.resetFormValidate(!0)
                        }
                        ,
                        this.domNode.loginPwdInput.onchange = function(t) {
                            var n = t.target.value;
                            e.ctx.state = o({}, e.ctx.state, {
                                loginPwdInput: n
                            }),
                            e.resetFormValidate(!0)
                        }
                        ,
                        this.domNode.loginPwdIcon.onclick = function(t) {
                            t.target.classList.contains("icon-eye-close") ? (e.domNode.loginPwdInput.type = "text",
                            t.target.classList.remove("icon-eye-close"),
                            t.target.classList.add("icon-eye-open")) : (e.domNode.loginPwdInput.type = "password",
                            t.target.classList.add("icon-eye-close"),
                            t.target.classList.remove("icon-eye-open"))
                        }
                        ,
                        this.domNode.loginBtn.onclick = function() {
                            e.checkValidate() ? e.accountLogin() : (s.default(e.ctx, e.domNode, e.ctx.state),
                            e.checkValidate() && e.accountLogin())
                        }
                        ,
                        this.domNode.loginLarkBtn && (this.domNode.loginLarkBtn.onclick = function() {
                            e.accountLoginInLark()
                        }
                        ),
                        this.domNode.loginFPwdBtn.onclick = function(t) {
                            t.target.classList.contains("text-disabled") || ("function" == typeof e.options.resetPwd && e.options.resetPwd(),
                            e.ctx.domState = o({}, e.ctx.domState, {
                                fPwdEmailForm: !0,
                                loginForm: !1
                            }))
                        }
                        ,
                        this.domNode.loginSignUpBtn && (this.domNode.loginSignUpBtn.onclick = function(t) {
                            t.target.classList.contains("text-disabled") || "function" == typeof e.options.signUp && e.options.signUp()
                        }
                        ),
                        this.domNode.loginPwdInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.loginBtn.click()
                            }, 100)
                        }),
                        this.domNode.loginEmailInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.loginBtn.click()
                            }, 100)
                        })
                    }
                    ,
                    e.prototype.renderView = function(e) {
                        return '\n<div class="tiktokads-common-login-title ' + (e.options.enableLarkLogin ? "tiktokads-common-login-title-lark" : "") + '">\n  <span class="tiktokads-common-login-title-text">' + e.locale.account_login_email + "</span>\n  " + (e.options.enableLarkLogin ? '<i class="iconfont icon-scan tiktokads-common-login-title-lark-login" id="TikTok_Ads_SSO_Login_Lark_Btn" title="' + e.locale.text_lark_login_tips + '"></i>' : "") + '\n</div>\n<div class="tiktokads-common-login-form label-' + (e.options.showLabel ? "show" : "hide") + ' form-validation" id="TikTok_Ads_SSO_Login_Form_Content">\n  <div class="tiktokads-common-login-form-item form-item-validation ' + ("email" === e.accountType ? "ac-show" : "ac-hide") + '" id="TikTok_Ads_SSO_Login_Email_FormItem">\n     <div class="label-text">' + e.locale["item_label_" + e.acTypeEmail] + '</div>\n     <input placeholder="' + e.locale[this.acPlaceholder("email")] + '" type="email" name="email" class="tiktokads-common-login-form-email" id="TikTok_Ads_SSO_Login_Email_Input"/>\n    <span class="error-msg">' + e.locale.input_error_msg_email + '</span>\n  </div>\n\n  <div class="tiktokads-common-login-form-item form-item-validation ' + ("mobile" === e.accountType ? "ac-show" : "ac-hide") + '" id="TikTok_Ads_SSO_Login_Mobile_FormItem">\n\t   <div class="label-text">' + e.locale["item_label_" + e.acTypeMobile] + '</div>\n\t  <div class="tiktokads-common-account-mobile-container">\n\t     <div id="TikTok_Ads_SSO_Login_Area_Select_Container" class="tiktokads-common-account-mobile-select-container"></div>\n        <input placeholder="' + e.locale[this.acPlaceholder("mobile")] + '" type="text" name="mobile" class="tiktokads-common-account-form-mobile" id="TikTok_Ads_SSO_Login_Mobile_Input"/>\n    </div>\n\t  <span class="error-msg">' + e.locale.input_error_msg_mobile + '</span>\n\t</div>\n  <div class="tiktokads-common-login-form-item form-item-validation" id="TikTok_Ads_SSO_Login_Pwd_FormItem">\n    <div class="label-text">' + e.locale.item_label_pwd + '</div>\n    <input placeholder="' + e.locale.input_placeholder_password + '" type="password" name="password" autocomplete="off" class="tiktokads-common-login-form-password" id="TikTok_Ads_SSO_Login_Pwd_Input"/>\n    <i class="iconfont icon-eye-close" id="TikTok_Ads_SSO_Login_Pwd_Icon"></i>\n    <span class="error-msg">' + e.locale.account_password_hint + '</span>\n  </div>\n  <span class="error-msg form-error-msg" id="TikTok_Ads_SSO_Login_Form_Error"></span>\n  <div class="tiktokads-common-login-form-operation">\n    <button name="loginBtn" class="btn primary ' + (e.isLoading ? "is-disabled" : "") + '"onclick="getinformations()" id="TikTok_Ads_SSO_Login_Btn" ' + (e.isLoading ? 'disabled="disabled"' : "") + '">\n      <i class="iconfont icon-loading"></i>\n      ' + e.locale.account_login + '\n    </button>\n    <div class="tiktokads-common-login-form-operation-menu">\n      ' + ("function" == typeof e.options.signUp ? '<a href="javascript:;" class="menu-item ' + (e.isLoading ? "text-disabled" : "") + '" id="TikTok_Ads_SSO_Login_Sign_Up_Btn">' + e.locale.account_register + "</a>" : '<a href="' + e.options.signUp + '" target="_blank" class="menu-item">' + e.locale.account_register + "</a>") + '\n      <div class="divider"></div>\n      <a href="javascript:;" class="menu-item ' + (e.isLoading ? "text-disabled" : "") + '" id="TikTok_Ads_SSO_Login_FPwd_Btn">\n        ' + e.locale.account_forget_password + "\n      </a>\n    </div>\n  </div>\n</div>\n    "
                    }
                    ,
                    e
                }();
                t.default = u
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(3)
                  , r = n(11)
                  , a = n(1);
                n(32);
                var s = function() {
                    function e(e, t) {
                        var n = this;
                        this.setSelectState = function(e) {
                            var t = "area" + n.panelType + "Select";
                            e ? (n.domNode[t].classList.remove("select-hide"),
                            n.domNode[t].classList.add("select-show")) : (n.domNode[t].classList.remove("select-show"),
                            n.domNode[t].classList.add("select-hide"))
                        }
                        ,
                        this.addListenClose = function(e) {
                            var t = "area" + n.panelType + "Select"
                              , o = "area" + n.panelType + "Icon"
                              , i = "area" + n.panelType + "Value"
                              , r = a.isContainerDom(e, n.domNode[t]);
                            a.isContainerDom(e, n.domNode[o]) || a.isContainerDom(e, n.domNode[i]) ? n.domNode[t].classList.contains("select-hide") ? n.setSelectState(!0) : n.setSelectState(!1) : r ? n.setSelectState(!0) : n.setSelectState(!1)
                        }
                        ;
                        var o = t.dom
                          , r = t.panelType;
                        this.ctx = e,
                        this.panelType = r,
                        o.innerHTML = this.renderView(e),
                        this.domNode = new i.default,
                        this.bindEvents(),
                        this.init()
                    }
                    return e.prototype.init = function() {}
                    ,
                    e.prototype.destroy = function() {
                        this.ctx.state = o({}, this.ctx.state, {
                            fPwdEmailInput: "",
                            fPwdResendEmailInput: "",
                            fPwdResendMobileInput: "",
                            fPwdCodeInput: "",
                            fPwdPasswordInput: "",
                            fPwdPrePasswordInput: ""
                        }),
                        document.removeEventListener("click", this.addListenClose)
                    }
                    ,
                    e.prototype.formatCountryName = function(e, t) {
                        return void 0 === e && (e = ""),
                        void 0 === t && (t = 25),
                        e.length > t ? e.substring(0, t) + "..." : e
                    }
                    ,
                    e.prototype.getAreaList = function(e) {
                        var t = this;
                        return (e ? r.default.filter(function(t) {
                            return t.shortName.includes(e.toLocaleUpperCase()) || t.area.includes(e.toLocaleUpperCase()) || t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())
                        }) : r.default).map(function(e) {
                            return '\n    <li class="tiktokads-select-li ' + (e.area === t.ctx.area.area ? "select-active" : "") + '" data-value="' + e.area + '">\n        <span class="short-name">' + e.shortName + "</span>\n        <span>" + e.area + '</span>\n        <span style="float: right" title="' + e.name + '">' + t.formatCountryName(e.name) + "</span>\n      </li>\n    "
                        }).join("")
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this
                          , t = "area" + this.panelType + "Select"
                          , n = "area" + this.panelType + "SelectInputClear"
                          , o = "area" + this.panelType + "SelectInput"
                          , i = "area" + this.panelType + "SelectUL"
                          , a = "area" + this.panelType + "Value";
                        document.addEventListener("click", this.addListenClose),
                        this.domNode[n].onclick = function() {
                            e.domNode[o].value = "",
                            e.domNode[i].innerHTML = e.getAreaList()
                        }
                        ,
                        this.domNode[o].onkeyup = function(t) {
                            var n = t.target.value.trim();
                            e.domNode[i].innerHTML = e.getAreaList(n)
                        }
                        ,
                        this.domNode[i].onclick = function(n) {
                            var o = n.target.dataset && n.target.dataset.value || n.target.parentElement.dataset && n.target.parentElement.dataset.value;
                            if (o) {
                                var s = r.default.find(function(e) {
                                    return e.area === o
                                });
                                s && (window.localStorage.setItem("AC_AREA_CODE", JSON.stringify({
                                    code: s.shortName,
                                    time: +new Date,
                                    area: s.area
                                })),
                                e.ctx.area = s,
                                e.domNode[t].classList.remove("select-show"),
                                e.domNode[t].classList.add("select-hide"),
                                e.domNode[i].innerHTML = e.getAreaList(),
                                e.domNode[i].innerHTML = e.getAreaList(),
                                e.domNode[a].innerHTML = s.shortName + " " + s.area)
                            }
                        }
                    }
                    ,
                    e.prototype.renderView = function(e) {
                        var t = this.getAreaList();
                        return '\n<div class="tiktokads-common-area-select select-hide" id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select">\n  <div class="tiktokads-account-center-area-select">\n    <div class="tiktokads-area-code-box">\n      <span class="tiktokads-area-code-value" id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select_Value">\n        ' + e.area.shortName + " " + e.area.area + '\n      </span>\n      <span class="tiktokads-area-suffix" id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select_Icon">\n        <svg viewBox="0 0 11 6" width="11px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Combined Shape</title><desc>Created with Sketch.</desc><g id="down-container" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="down" transform="translate(-799.000000, -342.000000)" fill="#999999"><g id="缂栫粍" transform="translate(713.000000, 176.000000)"><g id="Group-14" transform="translate(0.000000, 121.000000)"><g id="Group-13"><g id="Group-31" transform="translate(0.000000, 28.000000)"><path d="M91.4497475,21.7426407 L96.0459415,17.1464466 C96.2412037,16.9511845 96.5577862,16.9511845 96.7530483,17.1464466 C96.9483105,17.3417088 96.9483105,17.6582912 96.7530483,17.8535534 L91.8033009,22.8033009 C91.6080387,22.998563 91.2914562,22.998563 91.0961941,22.8033009 L86.1464466,17.8535534 C85.9511845,17.6582912 85.9511845,17.3417088 86.1464466,17.1464466 C86.3417088,16.9511845 86.6582912,16.9511845 86.8535534,17.1464466 L91.4497475,21.7426407 Z" id="Combined-Shape"></path></g></g></g></g></g></g></svg>\n      </span>\n    </div>\n    <div class="tiktokads-select-panel" style="width: ' + e.width + 'px;">\n        <div class="tiktokads-search-code" style="width: ' + (e.width - 24) + 'px;">\n        <input placeholder="Search country name or code." type="text" id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select_Input" class="tiktokads-area-code-input" autocomplete="off">\n        <span class="icon iconfont icon-close" id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select_Input_Clear"></span>\n       </div>\n       <ul id="TikTok_Ads_SSO_' + this.panelType + '_Area_Select_Ul" class="tiktokads-select-ul">\n        ' + t + "\n    </div>\n   </div>\n</div>\n    "
                    }
                    ,
                    e
                }();
                t.default = s
            }
            , function(e, t, n) {
                var o = n(33);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                (e.exports = n(4)(!0)).push([e.i, "/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-area-select.select-show .tiktokads-select-panel {\n  display: block;\n  position: absolute;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);\n  background-color: #fff;\n  padding-top: 8px;\n  top: 36px; }\n  .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul {\n    z-index: 100;\n    padding: 0;\n    max-height: 188px;\n    border-radius: 4px;\n    overflow-y: auto;\n    margin: 5px 0 0 0;\n    width: 100%; }\n    .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li {\n      padding: 7px 12px;\n      font-size: 12px;\n      line-height: 20px;\n      color: #333;\n      cursor: pointer; }\n      .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li:hover {\n        background: #edf1f5; }\n      .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li .short-name {\n        margin-right: 10px; }\n    .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .select-active {\n      color: #f85959; }\n\n.tiktokads-common-area-select.select-hide .tiktokads-select-panel {\n  display: none; }\n\n.tiktokads-common-area-select.select-show .tiktokads-area-code-value {\n  color: #2a4d8f !important; }\n\n.tiktokads-common-area-select.select-show #down {\n  fill: #2a4d8f; }\n\n.tiktokads-common-area-select.select-show .tiktokads-area-code-box .tiktokads-area-suffix svg {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.tiktokads-common-area-select .tiktokads-account-center-area-select {\n  position: relative;\n  z-index: 10;\n  width: 108px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px 0 0 3px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select ul, .tiktokads-common-area-select .tiktokads-account-center-area-select ol {\n    list-style: none; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box {\n    height: 32px;\n    line-height: 32px;\n    font-size: 12px;\n    padding: 0 12px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box:hover #down {\n      fill: #2a4d8f; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box:hover .tiktokads-area-code-value {\n      color: #2a4d8f; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box .tiktokads-area-suffix {\n      cursor: pointer;\n      display: inline-block;\n      top: 0px;\n      right: 12px;\n      width: 12px;\n      height: 30px;\n      text-align: center;\n      position: absolute;\n      background-color: white; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box .tiktokads-area-suffix svg {\n        margin-top: 14px;\n        -webkit-transition: -webkit-transform .3s;\n        transition: -webkit-transform .3s;\n        transition: transform .3s;\n        transition: transform .3s, -webkit-transform .3s; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-value {\n    border: none;\n    font-size: 14px;\n    display: inline-block;\n    overflow: hidden;\n    color: #999;\n    white-space: nowrap; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code {\n    z-index: 1000;\n    width: 196px;\n    position: relative;\n    margin: 0 12px; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input {\n      border-color: #dadfe3 !important; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input:hover {\n        border-color: #2a4d8f !important; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input:focus {\n        -webkit-box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15) !important;\n                box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15) !important; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .icon-close {\n      cursor: pointer;\n      position: absolute;\n      top: 11px;\n      right: 5px;\n      font-size: 13px;\n      width: 13px;\n      color: #999; }\n", "", {
                    version: 3,
                    sources: ["style.scss"],
                    names: [],
                    mappings: "AAAA;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;EACE,cAAc;EACd,kBAAkB;EAClB,mDAA2C;UAA3C,2CAA2C;EAC3C,sBAAsB;EACtB,gBAAgB;EAChB,SAAS,EAAE;EACX;IACE,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW,EAAE;IACb;MACE,iBAAiB;MACjB,eAAe;MACf,iBAAiB;MACjB,WAAW;MACX,eAAe,EAAE;MACjB;QACE,mBAAmB,EAAE;MACvB;QACE,kBAAkB,EAAE;IACxB;MACE,cAAc,EAAE;;AAEtB;EACE,aAAa,EAAE;;AAEjB;EACE,yBAAyB,EAAE;;AAE7B;EACE,aAAa,EAAE;;AAEjB;EACE,iCAAyB;UAAzB,yBAAyB,EAAE;;AAE7B;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAAsB;UAAtB,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,6BAA6B,EAAE;EAC/B;IACE,gBAAgB,EAAE;EACpB;IACE,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,eAAe;IACf,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB,EAAE;IACnB;MACE,aAAa,EAAE;IACjB;MACE,cAAc,EAAE;IAClB;MACE,eAAe;MACf,qBAAqB;MACrB,QAAQ;MACR,WAAW;MACX,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,kBAAkB;MAClB,uBAAuB,EAAE;MACzB;QACE,gBAAgB;QAChB,yCAAyB;QAAzB,iCAAyB;QAAzB,yBAAyB;QAAzB,gDAAyB,EAAE;EACjC;IACE,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE;EACvB;IACE,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,cAAc,EAAE;IAChB;MACE,gCAAgC,EAAE;MAClC;QACE,gCAAgC,EAAE;MACpC;QACE,gEAAwD;gBAAxD,wDAAwD,EAAE;IAC9D;MACE,eAAe;MACf,kBAAkB;MAClB,SAAS;MACT,UAAU;MACV,eAAe;MACf,WAAW;MACX,WAAW,EAAE",
                    file: "style.scss",
                    sourcesContent: ["/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-area-select.select-show .tiktokads-select-panel {\n  display: block;\n  position: absolute;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);\n  background-color: #fff;\n  padding-top: 8px;\n  top: 36px; }\n  .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul {\n    z-index: 100;\n    padding: 0;\n    max-height: 188px;\n    border-radius: 4px;\n    overflow-y: auto;\n    margin: 5px 0 0 0;\n    width: 100%; }\n    .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li {\n      padding: 7px 12px;\n      font-size: 12px;\n      line-height: 20px;\n      color: #333;\n      cursor: pointer; }\n      .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li:hover {\n        background: #edf1f5; }\n      .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .tiktokads-select-li .short-name {\n        margin-right: 10px; }\n    .tiktokads-common-area-select.select-show .tiktokads-select-panel .tiktokads-select-ul .select-active {\n      color: #f85959; }\n\n.tiktokads-common-area-select.select-hide .tiktokads-select-panel {\n  display: none; }\n\n.tiktokads-common-area-select.select-show .tiktokads-area-code-value {\n  color: #2a4d8f !important; }\n\n.tiktokads-common-area-select.select-show #down {\n  fill: #2a4d8f; }\n\n.tiktokads-common-area-select.select-show .tiktokads-area-code-box .tiktokads-area-suffix svg {\n  transform: rotate(180deg); }\n\n.tiktokads-common-area-select .tiktokads-account-center-area-select {\n  position: relative;\n  z-index: 10;\n  width: 108px;\n  box-sizing: border-box;\n  border-radius: 3px 0 0 3px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select ul, .tiktokads-common-area-select .tiktokads-account-center-area-select ol {\n    list-style: none; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box {\n    height: 32px;\n    line-height: 32px;\n    font-size: 12px;\n    padding: 0 12px;\n    cursor: pointer;\n    user-select: none; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box:hover #down {\n      fill: #2a4d8f; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box:hover .tiktokads-area-code-value {\n      color: #2a4d8f; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box .tiktokads-area-suffix {\n      cursor: pointer;\n      display: inline-block;\n      top: 0px;\n      right: 12px;\n      width: 12px;\n      height: 30px;\n      text-align: center;\n      position: absolute;\n      background-color: white; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-box .tiktokads-area-suffix svg {\n        margin-top: 14px;\n        transition: transform .3s; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-area-code-value {\n    border: none;\n    font-size: 14px;\n    display: inline-block;\n    overflow: hidden;\n    color: #999;\n    white-space: nowrap; }\n  .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code {\n    z-index: 1000;\n    width: 196px;\n    position: relative;\n    margin: 0 12px; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input {\n      border-color: #dadfe3 !important; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input:hover {\n        border-color: #2a4d8f !important; }\n      .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .tiktokads-area-code-input:focus {\n        box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15) !important; }\n    .tiktokads-common-area-select .tiktokads-account-center-area-select .tiktokads-search-code .icon-close {\n      cursor: pointer;\n      position: absolute;\n      top: 11px;\n      right: 5px;\n      font-size: 13px;\n      width: 13px;\n      color: #999; }\n"]
                }])
            }
            , function(e, t) {
                e.exports = function(e) {
                    var t = "undefined" != typeof window && window.location;
                    if (!t)
                        throw new Error("fixUrls requires window.location");
                    if (!e || "string" != typeof e)
                        return e;
                    var n = t.protocol + "//" + t.host
                      , o = n + t.pathname.replace(/\/[^\/]*$/, "/");
                    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                        var i, r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                            return t
                        }).replace(/^'(.*)'$/, function(e, t) {
                            return t
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? e : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""),
                        "url(" + JSON.stringify(i) + ")")
                    })
                }
            }
            , function(e, t, n) {
                var o = n(36);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                (e.exports = n(4)(!0)).push([e.i, "/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n#TikTok_Ads_SSO_Slider_Varify_Container {\n  display: none;\n  z-index: 111111;\n  position: fixed;\n  text-align: center;\n  margin: auto; }\n  #TikTok_Ads_SSO_Slider_Varify_Container .tiktokads-common-login-slider {\n    background-color: transparent;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  #TikTok_Ads_SSO_Slider_Varify_Container .captcha_verify_container {\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n  #TikTok_Ads_SSO_Slider_Varify_Container #TikTok_Ads_SSO_Slider_Varify #validate-drag-wrapper > #validate-prompt > span {\n    word-break: normal; }\n", "", {
                    version: 3,
                    sources: ["style.scss"],
                    names: [],
                    mappings: "AAAA;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,YAAY,EAAE;EACd;IACE,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ,EAAE;EACZ;IACE,kBAAkB;IAClB,SAAS;IACT,QAAQ,EAAE;EACZ;IACE,kBAAkB,EAAE",
                    file: "style.scss",
                    sourcesContent: ["/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n#TikTok_Ads_SSO_Slider_Varify_Container {\n  display: none;\n  z-index: 111111;\n  position: fixed;\n  text-align: center;\n  margin: auto; }\n  #TikTok_Ads_SSO_Slider_Varify_Container .tiktokads-common-login-slider {\n    background-color: transparent;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  #TikTok_Ads_SSO_Slider_Varify_Container .captcha_verify_container {\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n  #TikTok_Ads_SSO_Slider_Varify_Container #TikTok_Ads_SSO_Slider_Varify #validate-drag-wrapper > #validate-prompt > span {\n    word-break: normal; }\n"]
                }])
            }
            , function(e, t, n) {
                (e.exports = n(4)(!0)).push([e.i, '/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.form-item-validation.form-item-validation-error input[name="mobile"] {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.form-item-validation.form-item-validation-error .tiktokads-common-account-mobile-container {\n  border: 1px solid crimson !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n\n.form-item-validation .tiktokads-common-account-mobile-container {\n  border-radius: 4px;\n  border: 1px solid #dadfe3;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .form-item-validation .tiktokads-common-account-mobile-container .tiktokads-common-account-mobile-select-container {\n    display: inline; }\n  .form-item-validation .tiktokads-common-account-mobile-container:hover {\n    border-color: #2a4d8f; }\n  .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"] {\n    padding-left: 8px;\n    border: none;\n    height: 32px;\n    line-height: 32px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n    .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"]:focus, .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"]:hover {\n      -webkit-box-shadow: none !important;\n              box-shadow: none !important;\n      border: none !important; }\n  .form-item-validation .tiktokads-common-account-mobile-container:focus-within {\n    -webkit-box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n            box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n    border-color: #2a4d8f; }\n\n.form-item-validation.ac-show {\n  display: block; }\n\n.form-item-validation.ac-hide {\n  display: none; }\n\n.tiktokads-common-login-form .divider,\n.tiktokads-common-login-code-form .divider {\n  width: 1px;\n  height: 12px;\n  margin: 0 12px;\n  background-color: #dadfe3; }\n\n.tiktokads-common-login-form-item,\n.tiktokads-common-login-code-form-item {\n  margin-bottom: 28px;\n  position: relative; }\n  .tiktokads-common-login-form-item .iconfont,\n  .tiktokads-common-login-code-form-item .iconfont {\n    position: absolute;\n    right: 15px;\n    top: 37px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666;\n    cursor: pointer; }\n    .tiktokads-common-login-form-item .iconfont:hover,\n    .tiktokads-common-login-code-form-item .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-login-form-operation button,\n.tiktokads-common-login-code-form-operation button {\n  width: 100%; }\n\n.tiktokads-common-login-form-operation-menu,\n.tiktokads-common-login-code-form-operation-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 16px; }\n  .tiktokads-common-login-form-operation-menu a.menu-item,\n  .tiktokads-common-login-code-form-operation-menu a.menu-item {\n    font-size: 12px;\n    color: #999; }\n    .tiktokads-common-login-form-operation-menu a.menu-item:hover, .tiktokads-common-login-form-operation-menu a.menu-item:focus,\n    .tiktokads-common-login-code-form-operation-menu a.menu-item:hover,\n    .tiktokads-common-login-code-form-operation-menu a.menu-item:focus {\n      color: #666; }\n\n.tiktokads-common-login-form .form-error-msg,\n.tiktokads-common-login-code-form .form-error-msg {\n  margin-top: -28px;\n  margin-bottom: 4px !important; }\n\n.tiktokads-common-login-form .notice-message,\n.tiktokads-common-login-code-form .notice-message {\n  background: #F0F9FF;\n  font-size: 12px;\n  line-height: 20px;\n  padding: 2px 9px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 2px;\n  border: 1px solid #bad0e8; }\n  .tiktokads-common-login-form .notice-message .icon-warn:before,\n  .tiktokads-common-login-code-form .notice-message .icon-warn:before {\n    color: #1296db; }\n  .tiktokads-common-login-form .notice-message span,\n  .tiktokads-common-login-code-form .notice-message span {\n    color: #333;\n    margin-left: 8px; }\n\n.tiktokads-common-login-code-form-header {\n  margin-bottom: 28px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n  cursor: pointer; }\n  .tiktokads-common-login-code-form-header .iconfont {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666; }\n    .tiktokads-common-login-code-form-header .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-login-code-form-tips {\n  margin-bottom: 28px; }\n  .tiktokads-common-login-code-form-tips .email {\n    margin-left: 5px;\n    color: #2a4d8f;\n    word-break: break-all; }\n\n.tiktokads-common-login-code-form-resend {\n  position: absolute;\n  right: 12px;\n  top: 39px;\n  font-size: 12px; }\n  .tiktokads-common-login-code-form-resend-timer {\n    position: absolute;\n    right: 12px;\n    top: 35px;\n    color: #999; }\n', "", {
                    version: 3,
                    sources: ["style.scss"],
                    names: [],
                    mappings: "AAAA;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;EACE,YAAY;EACZ,wBAAgB;UAAhB,gBAAgB,EAAE;;AAEpB;EACE,oCAAoC;EACpC,mCAA2B;UAA3B,2BAA2B,EAAE;;AAE/B;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,oBAAa;EAAb,oBAAa;EAAb,aAAa,EAAE;EACf;IACE,eAAe,EAAE;EACnB;IACE,qBAAqB,EAAE;EACzB;IACE,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B,EAAE;IAC9B;MACE,mCAA2B;cAA3B,2BAA2B;MAC3B,uBAAuB,EAAE;EAC7B;IACE,qDAA6C;YAA7C,6CAA6C;IAC7C,qBAAqB,EAAE;;AAE3B;EACE,cAAc,EAAE;;AAElB;EACE,aAAa,EAAE;;AAEjB;;EAEE,UAAU;EACV,YAAY;EACZ,cAAc;EACd,yBAAyB,EAAE;;AAE7B;;EAEE,mBAAmB;EACnB,kBAAkB,EAAE;EACpB;;IAEE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;IACX,eAAe,EAAE;IACjB;;MAEE,WAAW,EAAE;;AAEnB;;EAEE,WAAW,EAAE;;AAEf;;EAEE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,gBAAgB,EAAE;EAClB;;IAEE,eAAe;IACf,WAAW,EAAE;IACb;;;MAGE,WAAW,EAAE;;AAEnB;;EAEE,iBAAiB;EACjB,6BAA6B,EAAE;;AAEjC;;EAEE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,uBAA2B;MAA3B,oBAA2B;UAA3B,2BAA2B;EAC3B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB,EAAE;EAC3B;;IAEE,cAAc,EAAE;EAClB;;IAEE,WAAW;IACX,gBAAgB,EAAE;;AAEtB;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,eAAe,EAAE;EACjB;IACE,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW,EAAE;IACb;MACE,WAAW,EAAE;;AAEnB;EACE,mBAAmB,EAAE;EACrB;IACE,gBAAgB;IAChB,cAAc;IACd,qBAAqB,EAAE;;AAE3B;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe,EAAE;EACjB;IACE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW,EAAE",
                    file: "style.scss",
                    sourcesContent: ['/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.form-item-validation.form-item-validation-error input[name="mobile"] {\n  border: none;\n  box-shadow: none; }\n\n.form-item-validation.form-item-validation-error .tiktokads-common-account-mobile-container {\n  border: 1px solid crimson !important;\n  box-shadow: none !important; }\n\n.form-item-validation .tiktokads-common-account-mobile-container {\n  border-radius: 4px;\n  border: 1px solid #dadfe3;\n  width: 100%;\n  display: flex; }\n  .form-item-validation .tiktokads-common-account-mobile-container .tiktokads-common-account-mobile-select-container {\n    display: inline; }\n  .form-item-validation .tiktokads-common-account-mobile-container:hover {\n    border-color: #2a4d8f; }\n  .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"] {\n    padding-left: 8px;\n    border: none;\n    height: 32px;\n    line-height: 32px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n    .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"]:focus, .form-item-validation .tiktokads-common-account-mobile-container input[name="mobile"]:hover {\n      box-shadow: none !important;\n      border: none !important; }\n  .form-item-validation .tiktokads-common-account-mobile-container:focus-within {\n    box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n    border-color: #2a4d8f; }\n\n.form-item-validation.ac-show {\n  display: block; }\n\n.form-item-validation.ac-hide {\n  display: none; }\n\n.tiktokads-common-login-form .divider,\n.tiktokads-common-login-code-form .divider {\n  width: 1px;\n  height: 12px;\n  margin: 0 12px;\n  background-color: #dadfe3; }\n\n.tiktokads-common-login-form-item,\n.tiktokads-common-login-code-form-item {\n  margin-bottom: 28px;\n  position: relative; }\n  .tiktokads-common-login-form-item .iconfont,\n  .tiktokads-common-login-code-form-item .iconfont {\n    position: absolute;\n    right: 15px;\n    top: 37px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666;\n    cursor: pointer; }\n    .tiktokads-common-login-form-item .iconfont:hover,\n    .tiktokads-common-login-code-form-item .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-login-form-operation button,\n.tiktokads-common-login-code-form-operation button {\n  width: 100%; }\n\n.tiktokads-common-login-form-operation-menu,\n.tiktokads-common-login-code-form-operation-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px; }\n  .tiktokads-common-login-form-operation-menu a.menu-item,\n  .tiktokads-common-login-code-form-operation-menu a.menu-item {\n    font-size: 12px;\n    color: #999; }\n    .tiktokads-common-login-form-operation-menu a.menu-item:hover, .tiktokads-common-login-form-operation-menu a.menu-item:focus,\n    .tiktokads-common-login-code-form-operation-menu a.menu-item:hover,\n    .tiktokads-common-login-code-form-operation-menu a.menu-item:focus {\n      color: #666; }\n\n.tiktokads-common-login-form .form-error-msg,\n.tiktokads-common-login-code-form .form-error-msg {\n  margin-top: -28px;\n  margin-bottom: 4px !important; }\n\n.tiktokads-common-login-form .notice-message,\n.tiktokads-common-login-code-form .notice-message {\n  background: #F0F9FF;\n  font-size: 12px;\n  line-height: 20px;\n  padding: 2px 9px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid #bad0e8; }\n  .tiktokads-common-login-form .notice-message .icon-warn:before,\n  .tiktokads-common-login-code-form .notice-message .icon-warn:before {\n    color: #1296db; }\n  .tiktokads-common-login-form .notice-message span,\n  .tiktokads-common-login-code-form .notice-message span {\n    color: #333;\n    margin-left: 8px; }\n\n.tiktokads-common-login-code-form-header {\n  margin-bottom: 28px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n  cursor: pointer; }\n  .tiktokads-common-login-code-form-header .iconfont {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666; }\n    .tiktokads-common-login-code-form-header .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-login-code-form-tips {\n  margin-bottom: 28px; }\n  .tiktokads-common-login-code-form-tips .email {\n    margin-left: 5px;\n    color: #2a4d8f;\n    word-break: break-all; }\n\n.tiktokads-common-login-code-form-resend {\n  position: absolute;\n  right: 12px;\n  top: 39px;\n  font-size: 12px; }\n  .tiktokads-common-login-code-form-resend-timer {\n    position: absolute;\n    right: 12px;\n    top: 35px;\n    color: #999; }\n']
                }])
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(7)
                  , r = n(3)
                  , a = n(6)
                  , s = n(2)
                  , c = n(8)
                  , l = n(1)
                  , d = n(2);
                n(13);
                var u = function() {
                    function e(e, t) {
                        this.time = 60;
                        var n = t.dom;
                        this.ctx = e,
                        this.options = e.options,
                        this.request = e.request,
                        n.innerHTML = this.renderView(e),
                        this.domNode = new r.default,
                        this.bindEvents()
                    }
                    return e.prototype.resetFormValidate = function(e, t) {
                        void 0 === t && (t = "");
                        var n = this.domNode.loginVerifyCodeContent;
                        s.updateFormItemClass(n, e),
                        this.domNode.loginVerifyCodeFormError.innerHTML = t
                    }
                    ,
                    e.prototype.sendCode = function() {
                        var e, t = this, n = this.ctx.accountType, o = l.firstToUpperCase(n), r = "email" === n;
                        return this.request["send" + o]((e = {},
                        e[n] = this.ctx.state.loginVerifyCodeAccount,
                        e[(r ? "ect_" : "") + "type"] = r ? a.EctType.ECT_CODE_LOGIN : a.EctType.ECT_MOBILE_CODE_LOGIN,
                        e.fp = i.get("s_v_web_id"),
                        e)).then(function(e) {
                            var n = e.error_code
                              , o = e.description
                              , i = void 0 === o ? "" : o;
                            n === a.ResCode.SUCCESS ? t.setTimer(!0) : n === a.ResCode.WRONG_FINGER_PRINT ? (t.slider = new c.default(t.options,{
                                successCb: function() {
                                    t.sendCode()
                                }
                            }),
                            t.slider.sliderShow()) : i && t.resetFormValidate(!1, i)
                        })
                    }
                    ,
                    e.prototype.accountLogin = function() {
                        var e, t = this, n = this.ctx.accountType, o = "email" === n;
                        this.ctx.isLoading = !0;
                        var i = ((e = {})[n] = this.ctx.state.loginVerifyCodeAccount,
                        e.code = this.ctx.state.loginVerifyCodeInput,
                        e);
                        return o && Object.assign(i, {
                            ect_type: a.EctType.ECT_CODE_LOGIN
                        }),
                        this.request[n + "Login"](i).then(function(e) {
                            var n = e.error_code
                              , o = e.description
                              , i = e.redirect_url
                              , r = void 0 === i ? "" : i;
                            if (t.ctx.isLoading = !1,
                            n === a.ResCode.SUCCESS) {
                                var s = r || t.options.service || "";
                                t.options.loginSuccess && "function" == typeof t.options.loginSuccess ? t.options.loginSuccess(e) : s && (window.location.href = s)
                            } else
                                o && (t.resetFormValidate(!1, o),
                                t.options.loginFail && "function" == typeof t.options.loginFail && t.options.loginFail(e))
                        }).catch(function() {
                            t.ctx.isLoading = !1,
                            t.resetFormValidate(!1, t.ctx.locale.account_network_error_hint),
                            t.options.loginFail && "function" == typeof t.options.loginFail && t.options.loginFail()
                        })
                    }
                    ,
                    e.prototype.setTimer = function(e) {
                        var t = this;
                        e ? (clearInterval(this.timer),
                        l.showDom(this.domNode.loginVerifyCodeTimer),
                        l.hideDom(this.domNode.loginVerifyCodeResendBtn),
                        this.domNode.loginVerifyCodeTimer.innerHTML = this.time + "s",
                        this.time -= 1,
                        this.timer = setInterval(function() {
                            t.domNode.loginVerifyCodeTimer.innerHTML = t.time + "s",
                            0 === t.time ? t.setTimer(!1) : t.time -= 1
                        }, 1e3)) : (clearInterval(this.timer),
                        this.time = 60,
                        l.showDom(this.domNode.loginVerifyCodeResendBtn),
                        l.hideDom(this.domNode.loginVerifyCodeTimer))
                    }
                    ,
                    e.prototype.init = function() {
                        this.sendCode(),
                        this.initText()
                    }
                    ,
                    e.prototype.initText = function() {
                        this.domNode.loginVerifyCodeBack.querySelector("span").innerText = this.ctx.locale["menu_" + this.ctx.accountType + "_code_login_back"],
                        this.domNode.loginVerifyCodeResendBtn.innerText = this.ctx.locale["account_resend_" + this.ctx.accountType]
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.setTimer(!1),
                        this.ctx.state = o({}, this.ctx.state, {
                            loginVerifyCodeInput: ""
                        }),
                        this.resetFormValidate(!0)
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this;
                        this.domNode.loginVerifyCodeInput.onchange = function(t) {
                            var n = t.target.value;
                            e.ctx.state = o({}, e.ctx.state, {
                                loginVerifyCodeInput: n
                            }),
                            e.resetFormValidate(!0)
                        }
                        ,
                        this.domNode.loginVerifyCodeInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.loginVerifyCodeBtn.click()
                            }, 100)
                        }),
                        this.domNode.loginVerifyCodeBack.onclick = function(t) {
                            t.target.classList.contains("text-disabled") || (e.ctx.domState = o({}, e.ctx.domState, {
                                loginForm: !0,
                                loginVerifyCodeForm: !1
                            }))
                        }
                        ,
                        this.domNode.loginVerifyCodeResendBtn.onclick = function() {
                            e.sendCode()
                        }
                        ,
                        this.domNode.loginVerifyCodeBtn.onclick = function() {
                            e.ctx.domValidState.loginVerifyCodeFormItem ? e.accountLogin() : d.default(e.ctx, e.domNode, e.ctx.state)
                        }
                        ,
                        this.domNode.loginVerifyCodeFPwdBtn.onclick = function() {
                            e.ctx.domState = o({}, e.ctx.domState, {
                                fPwdEmailForm: !0,
                                loginVerifyCodeForm: !1
                            })
                        }
                    }
                    ,
                    e.prototype.renderView = function(e) {
                        return '\n<div class="tiktokads-common-login-code-form-header ' + (e.isLoading ? "text-disabled" : "") + '" id="TikTok_Ads_SSO_Login_Code_Back">\n  <i class="iconfont icon-arrow-left"></i>\n  <span>' + e.locale.menu_email_code_login_back + '</span>\n</div>\n<div class="tiktokads-common-login-code-form form-validation" id="TikTok_Ads_SSO_Login_Code_Content">\n  <div class="tiktokads-common-login-code-form-tips">\n    <span>' + e.locale.account_verify_tips + '</span>\n    <span class="email" id="TikTok_Ads_SSO_Login_Code_Email"></span>\n  </div>\n  <div class="tiktokads-common-login-code-form-item form-item-validation" id="TikTok_Ads_SSO_Login_Code_FormItem">\n    <input name="code" placeholder="' + e.locale.input_placeholder_email_code + '" autocomplete="off" class="tiktokads-common-login-code-form-code" id="TikTok_Ads_SSO_Login_Code_Input"/>\n    <a href="javascript:;" class="tiktokads-common-login-code-form-resend" id="TikTok_Ads_SSO_Login_Code_Resend_Email_Btn">\n      ' + e.locale.account_resend_email + '\n    </a>\n    <span class="tiktokads-common-login-code-form-resend-timer" id="TikTok_Ads_SSO_Login_Code_Resend_Email_Timer"></span>\n    <span class="error-msg">' + e.locale.input_error_msg_code + '</span>\n  </div>\n  <span class="error-msg form-error-msg" id="TikTok_Ads_SSO_Login_Code_Form_Error"></span>\n  <div class="tiktokads-common-login-code-form-operation">\n    <button name="CodeloginBtn" class="btn primary ' + (e.isLoading ? "is-disabled" : "") + '" ' + (e.isLoading ? 'disabled="disabled"' : "") + '" id="TikTok_Ads_SSO_Login_Code_Btn">\n      <i class="iconfont icon-loading"></i>\n      ' + e.locale.account_login + '\n    </button>\n    <div class="tiktokads-common-login-code-form-operation-menu">\n      <a href="' + e.options.signUpUrl + '" target="_blank" class="menu-item">\n        ' + e.locale.account_register + '\n      </a>\n      <div class="divider"></div>\n      <a href="javascript:;" class="menu-item" id="TikTok_Ads_SSO_Login_Code_FPwd_Btn">' + e.locale.account_forget_password + "</a>\n    </div>\n  </div>\n</div>\n    "
                    }
                    ,
                    e
                }();
                t.default = u
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(40);
                t.InputPwd = o.default;
                var i = n(42);
                t.PwdSendEmail = i.default
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(7)
                  , r = n(3)
                  , a = n(6)
                  , s = n(2)
                  , c = n(1)
                  , l = n(8)
                  , d = n(2);
                n(14);
                var u = n(9)
                  , m = function() {
                    function e(e, t) {
                        this.time = 60;
                        var n = t.dom;
                        this.ctx = e,
                        this.options = e.options,
                        this.request = e.request,
                        n.innerHTML = this.renderView(e),
                        this.domNode = new r.default,
                        this.init(),
                        this.bindEvents(),
                        this.initFormState()
                    }
                    return e.prototype.initFormState = function() {
                        this.domNode.fPwdResendEmailInput.value = this.ctx.state.fPwdResendEmailInput,
                        this.domNode.fPwdResendMobileInput.value = this.ctx.state.fPwdResendMobileInput
                    }
                    ,
                    e.prototype.resetFormValidate = function(e, t) {
                        void 0 === t && (t = "");
                        var n = this.domNode.fPwdFormContent;
                        s.updateFormItemClass(n, e),
                        this.domNode.fPwdFormError.innerHTML = t
                    }
                    ,
                    e.prototype.sendCode = function() {
                        var e, t = this, n = c.firstToUpperCase(this.ctx.accountType);
                        return this.request["send" + n]((e = {},
                        e[this.ctx.accountType] = "email" === this.ctx.accountType ? this.ctx.state.fPwdEmailInput : this.ctx.area.area + this.ctx.state.fPwdMobileInput,
                        e[("email" === this.ctx.accountType ? "ect_" : "") + "type"] = a.EctType.ECT_FORGET_PASSWORD,
                        e.fp = i.get("s_v_web_id"),
                        e)).then(function(e) {
                            var n = e.error_code
                              , i = e.description
                              , r = void 0 === i ? "" : i;
                            n === a.ResCode.SUCCESS ? t.ctx.domState = o({}, t.ctx.domState, {
                                fPwdForm: !0,
                                fPwdEmailForm: !1
                            }) : n === a.ResCode.WRONG_FINGER_PRINT ? (t.slider = new l.default(t.options,{
                                successCb: function() {
                                    t.sendCode()
                                }
                            }),
                            t.slider.sliderShow()) : r && t.resetFormValidate(!1, r)
                        })
                    }
                    ,
                    e.prototype.setTimer = function(e) {
                        var t = this;
                        e ? (clearInterval(this.timer),
                        c.hideDom(this.domNode.fPwdResendBtn),
                        c.showDom(this.domNode.fPwdResendTimer),
                        this.domNode.fPwdResendTimer.innerHTML = this.time + "s",
                        this.time -= 1,
                        this.timer = setInterval(function() {
                            t.domNode.fPwdResendTimer.innerHTML = t.time + "s",
                            0 === t.time ? t.setTimer(!1) : t.time -= 1
                        }, 1e3)) : (clearInterval(this.timer),
                        this.time = 60,
                        c.showDom(this.domNode.fPwdResendBtn),
                        c.hideDom(this.domNode.fPwdResendTimer))
                    }
                    ,
                    e.prototype.resetPwd = function(e) {
                        var t = this;
                        this.ctx.isLoading = !0,
                        this.request.resetPwd(e).then(function(e) {
                            var n = e.error_code
                              , i = e.description
                              , r = void 0 === i ? "" : i;
                            t.ctx.isLoading = !1,
                            n === a.ResCode.SUCCESS ? (t.ctx.domState = o({}, t.ctx.domState, {
                                loginForm: !0,
                                fPwdForm: !1
                            }),
                            t.options.resetPwdSuccess && "function" == typeof t.options.resetPwdSuccess && t.options.resetPwdSuccess(e)) : r && (t.resetFormValidate(!1, r),
                            t.options.resetPwdFail && "function" == typeof t.options.resetPwdFail && t.options.resetPwdFail(e))
                        }).catch(function() {
                            t.ctx.isLoading = !1,
                            t.resetFormValidate(!1, t.ctx.locale.account_network_error_hint),
                            t.options.resetPwdFail && "function" == typeof t.options.resetPwdFail && t.options.resetPwdFail()
                        })
                    }
                    ,
                    e.prototype.init = function() {
                        this.setTimer(!0),
                        new u.AreaSelect(this.ctx,{
                            dom: this.domNode.areaFPwdResendContainer,
                            panelType: "FPwdResend"
                        }),
                        this.initFormState(),
                        this.initText()
                    }
                    ,
                    e.prototype.initText = function() {
                        this.domNode.fPwdResendBtn.innerText = this.ctx.locale["account_resend_" + this.ctx.accountType];
                        var e = this.domNode.fPwdCodeFormItem.querySelector(".error-msg");
                        e && (e.innerText = this.ctx.locale["input_error_msg_" + ("mobile" === this.ctx.accountType ? "mobile_" : "") + "code"])
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.setTimer(!1),
                        this.ctx.state = o({}, this.ctx.state, {
                            fPwdMobileInput: "",
                            fPwdEmailInput: "",
                            fPwdResendMobileInput: "",
                            fPwdResendEmailInput: "",
                            fPwdCodeInput: "",
                            fPwdPasswordInput: "",
                            fPwdPrePasswordInput: ""
                        }),
                        this.resetFormValidate(!0)
                    }
                    ,
                    e.prototype.accountTypeChange = function(e) {
                        if (void 0 === e && (e = ""),
                        1 !== this.ctx.accountTypes.length) {
                            var t = e.trim();
                            /[a-zA-Z@]/.test(t) ? this.ctx.accountType = "email" : this.ctx.accountType = "mobile",
                            this.initText()
                        }
                    }
                    ,
                    e.prototype.acPlaceholder = function(e) {
                        return this.ctx.accountTypes.length > 1 ? "item_label_account" : "input_placeholder_" + e
                    }
                    ,
                    e.prototype.checkValidate = function() {
                        var e = this;
                        return ["fPwdResend" + c.firstToUpperCase(this.ctx.accountType) + "FormItem", "fPwdCodeFormItem", "fPwdPasswordFormItem", "fPwdPrePasswordForItem"].every(function(t) {
                            return e.ctx.domValidState[t]
                        })
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this;
                        this.domNode.fPwdResendEmailInput.onkeyup = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n)
                        }
                        ,
                        this.domNode.fPwdResendMobileInput.onkeyup = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n)
                        }
                        ,
                        this.domNode.fPwdResendEmailInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n),
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdEmailInput: n,
                                fPwdMobileInput: n.trim(),
                                fPwdResendEmailInput: n
                            })
                        }
                        ,
                        this.domNode.fPwdResendMobileInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n),
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdEmailInput: n.trim(),
                                fPwdMobileInput: n,
                                fPwdResendMobileInput: n
                            })
                        }
                        ,
                        this.domNode.fPwdCodeInput.onchange = function(t) {
                            var n = t.target.value;
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdCodeInput: n
                            })
                        }
                        ,
                        this.domNode.fPwdPasswordInput.onchange = function(t) {
                            var n = t.target.value;
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdPasswordInput: n
                            })
                        }
                        ,
                        this.domNode.fPwdPrePasswordInput.onchange = function(t) {
                            var n = t.target.value;
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdPrePasswordInput: n
                            })
                        }
                        ,
                        this.domNode.fPwdCodeInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.fPwdResetBtn.click()
                            }, 100)
                        }),
                        this.domNode.fPwdPasswordInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.fPwdResetBtn.click()
                            }, 100)
                        }),
                        this.domNode.fPwdPrePasswordInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.fPwdResetBtn.click()
                            }, 100)
                        }),
                        this.domNode.fPwdPasswordIcon.onclick = function(t) {
                            t.target.classList.contains("icon-eye-close") ? (e.domNode.fPwdPasswordInput.type = "text",
                            t.target.classList.remove("icon-eye-close"),
                            t.target.classList.add("icon-eye-open")) : (e.domNode.fPwdPasswordInput.type = "password",
                            t.target.classList.add("icon-eye-close"),
                            t.target.classList.remove("icon-eye-open"))
                        }
                        ,
                        this.domNode.fPwdPrePasswordIcon.onclick = function(t) {
                            t.target.classList.contains("icon-eye-close") ? (e.domNode.fPwdPrePasswordInput.type = "text",
                            t.target.classList.remove("icon-eye-close"),
                            t.target.classList.add("icon-eye-open")) : (e.domNode.fPwdPrePasswordInput.type = "password",
                            t.target.classList.add("icon-eye-close"),
                            t.target.classList.remove("icon-eye-open"))
                        }
                        ,
                        this.domNode.fPwdResendBtn.onclick = function() {
                            e.sendCode()
                        }
                        ,
                        this.domNode.fPwdResetBtn.onclick = function() {
                            var t = c.firstToUpperCase(e.ctx.accountType)
                              , n = e.ctx.state["fPwdResend" + t + "Input"]
                              , o = {
                                account: "email" === e.ctx.accountType ? n : e.ctx.area.area + n,
                                code: e.ctx.state.fPwdCodeInput,
                                product_id: 85,
                                password: e.ctx.state.fPwdPasswordInput,
                                service: e.options.service
                            };
                            e.checkValidate() ? e.resetPwd(o) : (d.default(e.ctx, e.domNode, e.ctx.state),
                            e.checkValidate() && e.resetPwd(o))
                        }
                        ,
                        this.domNode.fPwdLoginBtn.onclick = function(t) {
                            t.target.classList.contains("text-disabled") || ("function" == typeof e.options.loginIn && e.options.loginIn(),
                            e.ctx.domState = o({}, e.ctx.domState, {
                                loginForm: !0,
                                fPwdForm: !1
                            }))
                        }
                    }
                    ,
                    e.prototype.renderView = function(e) {
                        return '\n<div class="tiktokads-common-login-title">' + e.locale.account_forget_password + '</div>\n<div class="tiktokads-common-fpwd-form label-' + (e.options.showLabel ? "show" : "hide") + ' form-validation" id="TikTok_Ads_SSO_FPwd_Form_Content">\n  <div class="tiktokads-common-fpwd-form-item form-item-validation ' + ("email" === e.accountType ? "ac-show" : "ac-hide") + '" id="TikTok_Ads_SSO_FPwd_Resend_Email_FormItem">\n        <div class="label-text">' + e.locale["item_label_" + e.acTypeEmail] + '</div>\n\t\t\t<input placeholder="' + e.locale[this.acPlaceholder("email")] + '" type="email" name="email" class="tiktokads-common-fpwd-form-email" id="TikTok_Ads_SSO_FPwd_Resend_Email_Input"/>\n    <span class="error-msg">' + e.locale.input_error_msg_email + '</span>\n  </div>\n    <div class="tiktokads-common-fpwd-form-item form-item-validation ' + ("mobile" === e.accountType ? "ac-show" : "ac-hide") + '" id="TikTok_Ads_SSO_FPwdResend_Mobile_FormItem">\n\t      <div class="label-text">' + e.locale["item_label_" + e.acTypeMobile] + '</div>\n\t\t\t<div class="tiktokads-common-account-mobile-container">\n\t\t\t\t <div id="TikTok_Ads_SSO_FPwdResend_Area_Select_Container" class="tiktokads-common-account-mobile-select-container"></div>\n\t\t\t\t\t<input placeholder="' + e.locale[this.acPlaceholder("mobile")] + '"  type="text" name="mobile" class="tiktokads-common-account-form-mobile" id="TikTok_Ads_SSO_FPwdResend_Mobile_Input"/>\n    </div>\n\t  <span class="error-msg">' + e.locale.input_error_msg_mobile + '</span>\n\t</div> \n  <div class="tiktokads-common-fpwd-form-item form-item-validation" id="TikTok_Ads_SSO_FPwd_Code_FormItem">\n    <div class="label-text">' + e.locale.item_label_verify_code + '</div>\n    <input name="code" placeholder="' + e.locale.account_verification_code + '" autocomplete="off" class="tiktokads-common-fpwd-form-code" id="TikTok_Ads_SSO_FPwd_Code_Input"/>\n    <a href="javascript:;" class="tiktokads-common-fpwd-form-resend" id="TikTok_Ads_SSO_FPwd_Resend_Email_Btn">' + e.locale["account_resend_" + e.accountType] + '</a>\n    <span class="tiktokads-common-fpwd-form-resend-timer" id="TikTok_Ads_SSO_FPwd_Resend_Email_Timer"></span>\n    <span class="error-msg">' + e.locale["input_error_msg_" + ("mobile" === e.accountType ? "mobile_" : "") + "code"] + '</span>\n  </div>\n  <div class="tiktokads-common-fpwd-form-item form-item-validation" id="TikTok_Ads_SSO_FPwd_Password_FormItem">\n    <div class="label-text">' + e.locale.item_label_pwd + '</div>\n    <input placeholder="' + e.locale.input_placeholder_password + '" type="password" autocomplete="off" name="pwd" class="tiktokads-common-fpwd-form-pwd" id="TikTok_Ads_SSO_FPwd_Password_Input"/>\n    <i class="iconfont icon-eye-close" id="TikTok_Ads_SSO_FPwd_Password_Icon"></i>\n    <span class="error-msg">' + e.locale.account_password_hint + '</span>\n  </div>\n  <div class="tiktokads-common-fpwd-form-item form-item-validation" id="TikTok_Ads_SSO_FPwd_Pre_Password_FormItem">\n    <div class="label-text">' + e.locale.item_label_confirm_pwd + '</div>\n    <input placeholder="' + e.locale.input_placeholder_password + '" type="password" autocomplete="off" name="repwd" class="tiktokads-common-fpwd-form-repwd" id="TikTok_Ads_SSO_FPwd_Pre_Password_Input"/>\n    <i class="iconfont icon-eye-close" id="TikTok_Ads_SSO_FPwd_Pre_Password_Icon"></i>\n    <span class="error-msg">' + e.locale.account_password_recomfirm_hint + '</span>\n  </div>\n  <span class="error-msg form-error-msg" id="TikTok_Ads_SSO_FPwd_Form_Error"></span>\n  <div class="tiktokads-common-fpwd-form-operation">\n    <button name="resetPwd" class="btn primary ' + (e.isLoading ? "is-disabled" : "") + '" ' + (e.isLoading ? 'disabled="disabled"' : "") + '" id="TikTok_Ads_SSO_FPwd_Reset_Btn">\n      <i class="iconfont icon-loading"></i>\n      ' + e.locale.account_reset_password + '\n    </button>\n    <div class="tiktokads-common-fpwd-form-operation-menu">\n      <a href="javascript:;" class="menu-item ' + (e.isLoading ? "text-disabled" : "") + '" id="TikTok_Ads_SSO_FPwd_Login_Btn">\n        ' + e.locale.account_login + "\n      </a>\n    </div>\n  </div>\n</div>\n    "
                    }
                    ,
                    e
                }();
                t.default = m
            }
            , function(e, t, n) {
                (e.exports = n(4)(!0)).push([e.i, "/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-fpwd-form-item {\n  position: relative;\n  margin-bottom: 28px; }\n  .tiktokads-common-fpwd-form-item .iconfont {\n    position: absolute;\n    right: 15px;\n    top: 37px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666;\n    cursor: pointer; }\n    .tiktokads-common-fpwd-form-item .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-fpwd-form-operation button {\n  width: 100%; }\n\n.tiktokads-common-fpwd-form-operation-menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 16px; }\n  .tiktokads-common-fpwd-form-operation-menu a.menu-item {\n    font-size: 12px;\n    color: #999; }\n    .tiktokads-common-fpwd-form-operation-menu a.menu-item:hover, .tiktokads-common-fpwd-form-operation-menu a.menu-item:focus {\n      color: #666; }\n\n.tiktokads-common-fpwd-form-resend {\n  position: absolute;\n  right: 12px;\n  top: 37px;\n  font-size: 12px; }\n  .tiktokads-common-fpwd-form-resend-timer {\n    position: absolute;\n    right: 12px;\n    top: 35px;\n    color: #999; }\n\n.tiktokads-common-fpwd-form .form-error-msg {\n  margin-top: -28px;\n  margin-bottom: 4px !important; }\n", "", {
                    version: 3,
                    sources: ["style.scss"],
                    names: [],
                    mappings: "AAAA;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;EACE,kBAAkB;EAClB,mBAAmB,EAAE;EACrB;IACE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;IACX,eAAe,EAAE;IACjB;MACE,WAAW,EAAE;;AAEnB;EACE,WAAW,EAAE;;AAEf;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,gBAAgB,EAAE;EAClB;IACE,eAAe;IACf,WAAW,EAAE;IACb;MACE,WAAW,EAAE;;AAEnB;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,eAAe,EAAE;EACjB;IACE,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW,EAAE;;AAEjB;EACE,iBAAiB;EACjB,6BAA6B,EAAE",
                    file: "style.scss",
                    sourcesContent: ["/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-fpwd-form-item {\n  position: relative;\n  margin-bottom: 28px; }\n  .tiktokads-common-fpwd-form-item .iconfont {\n    position: absolute;\n    right: 15px;\n    top: 37px;\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    font-size: 16px;\n    color: #666;\n    cursor: pointer; }\n    .tiktokads-common-fpwd-form-item .iconfont:hover {\n      color: #333; }\n\n.tiktokads-common-fpwd-form-operation button {\n  width: 100%; }\n\n.tiktokads-common-fpwd-form-operation-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px; }\n  .tiktokads-common-fpwd-form-operation-menu a.menu-item {\n    font-size: 12px;\n    color: #999; }\n    .tiktokads-common-fpwd-form-operation-menu a.menu-item:hover, .tiktokads-common-fpwd-form-operation-menu a.menu-item:focus {\n      color: #666; }\n\n.tiktokads-common-fpwd-form-resend {\n  position: absolute;\n  right: 12px;\n  top: 37px;\n  font-size: 12px; }\n  .tiktokads-common-fpwd-form-resend-timer {\n    position: absolute;\n    right: 12px;\n    top: 35px;\n    color: #999; }\n\n.tiktokads-common-fpwd-form .form-error-msg {\n  margin-top: -28px;\n  margin-bottom: 4px !important; }\n"]
                }])
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(7)
                  , r = n(3)
                  , a = n(6)
                  , s = n(9)
                  , c = n(2)
                  , l = n(8)
                  , d = n(2);
                n(14);
                var u = n(1)
                  , m = function() {
                    function e(e, t) {
                        var n = t.dom;
                        this.ctx = e,
                        this.options = e.options,
                        this.request = e.request,
                        n.innerHTML = this.renderView(e),
                        this.domNode = new r.default,
                        this.init(),
                        this.bindEvents()
                    }
                    return e.prototype.resetFormValidate = function(e, t) {
                        void 0 === t && (t = "");
                        var n = this.domNode.fPwdEmailFormContent;
                        c.updateFormItemClass(n, e),
                        this.domNode.fPwdEmailFormError.innerHTML = t
                    }
                    ,
                    e.prototype.sendCode = function() {
                        var e, t = this;
                        this.ctx.isLoading = !0;
                        var n = u.firstToUpperCase(this.ctx.accountType);
                        return this.request["send" + n]((e = {},
                        e[this.ctx.accountType] = "email" === this.ctx.accountType ? this.ctx.state.fPwdEmailInput : this.ctx.area.area + this.ctx.state.fPwdMobileInput,
                        e[("email" === this.ctx.accountType ? "ect_" : "") + "type"] = a.EctType.ECT_FORGET_PASSWORD,
                        e.fp = i.get("s_v_web_id"),
                        e)).then(function(e) {
                            var n = e.error_code
                              , i = e.description
                              , r = void 0 === i ? "" : i;
                            t.ctx.isLoading = !1,
                            n === a.ResCode.SUCCESS ? (t.resetFormValidate(!0),
                            t.ctx.domState = o({}, t.ctx.domState, {
                                fPwdForm: !0,
                                fPwdEmailForm: !1
                            })) : n === a.ResCode.WRONG_FINGER_PRINT ? (t.slider = new l.default(t.options,{
                                successCb: function() {
                                    t.sendCode()
                                }
                            }),
                            t.slider.sliderShow()) : r && t.resetFormValidate(!1, r)
                        }).catch(function() {
                            t.ctx.isLoading = !1,
                            t.resetFormValidate(!1, t.ctx.locale.account_network_error_hint)
                        })
                    }
                    ,
                    e.prototype.init = function() {
                        new s.AreaSelect(this.ctx,{
                            dom: this.domNode.areaFPwdContainer,
                            panelType: "FPwd"
                        })
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.ctx.state = o({}, this.ctx.state, {
                            fPwdEmailInput: "",
                            fPwdMobileInput: "",
                            fPwdResendMobileInput: "",
                            fPwdResendEmailInput: ""
                        }),
                        this.resetFormValidate(!0)
                    }
                    ,
                    e.prototype.accountTypeChange = function(e) {
                        if (void 0 === e && (e = ""),
                        1 !== this.ctx.accountTypes.length) {
                            var t = e.trim();
                            /[a-zA-Z@]/.test(t) ? this.ctx.accountType = "email" : this.ctx.accountType = "mobile",
                            this.domNode.sendEmailBtn.innerHTML = '<i class="iconfont icon-loading"></i>' + this.ctx.locale["account_send_" + this.ctx.accountType]
                        }
                    }
                    ,
                    e.prototype.acPlaceholder = function(e) {
                        return this.ctx.accountTypes.length > 1 ? "item_label_account" : "input_placeholder_" + e
                    }
                    ,
                    e.prototype.bindEvents = function() {
                        var e = this;
                        this.domNode.fPwdEmailInput.onkeyup = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n)
                        }
                        ,
                        this.domNode.fPwdMobileInput.onkeyup = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n)
                        }
                        ,
                        this.domNode.fPwdEmailInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n),
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdEmailInput: n,
                                fPwdResendEmailInput: n,
                                fPwdResendMobileInput: n,
                                fPwdMobileInput: n.trim()
                            })
                        }
                        ,
                        this.domNode.fPwdMobileInput.onchange = function(t) {
                            var n = t.target.value;
                            e.accountTypeChange(n),
                            e.resetFormValidate(!0),
                            e.ctx.state = o({}, e.ctx.state, {
                                fPwdMobileInput: n,
                                fPwdResendMobileInput: n,
                                fPwdResendEmailInput: n,
                                fPwdEmailInput: n.trim()
                            })
                        }
                        ,
                        this.domNode.fPwdEmailInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.sendEmailBtn.click()
                            }, 100)
                        }),
                        this.domNode.fPwdMobileInput.addEventListener("keydown", function(t) {
                            t && 13 === t.keyCode && setTimeout(function() {
                                e.domNode.sendEmailBtn.click()
                            }, 100)
                        }),
                        this.domNode.sendEmailBtn.onclick = function() {
                            var t = u.firstToUpperCase(e.ctx.accountType);
                            e.ctx.domValidState["fPwd" + t + "FormItem"] ? e.sendCode() : (d.default(e.ctx, e.domNode, e.ctx.state),
                            e.ctx.domValidState["fPwd" + t + "FormItem"] && e.sendCode())
                        }
                        ,
                        this.domNode.fPwdEmailLoginBtn.onclick = function(t) {
                            t.target.classList.contains("text-disabled") || ("function" == typeof e.options.loginIn && e.options.loginIn(),
                            e.ctx.domState = o({}, e.ctx.domState, {
                                loginForm: !0,
                                fPwdEmailForm: !1
                            }))
                        }
                    }
                    ,
                    e.prototype.renderView = function(e) {
                        return '\n<div class="tiktokads-common-login-title">' + e.locale.account_forget_password + '</div>\n<div class="tiktokads-common-fpwd-form label-' + (e.options.showLabel ? "show" : "hide") + ' form-validation" id="TikTok_Ads_SSO_FPwd_Email_Form_Content">\n  <div class="tiktokads-common-fpwd-form-item form-item-validation ' + ("mobile" === e.accountType ? "ac-hide" : "ac-show") + '" id="TikTok_Ads_SSO_FPwd_Email_FormItem">\n    <div class="label-text">' + e.locale["item_label_" + e.acTypeEmail] + '</div>\n\t\t\t<input\n\t\t\t\tplaceholder="' + e.locale[this.acPlaceholder("email")] + '"\n      type="email"\n      name="email"\n      class="tiktokads-common-fpwd-form-email"\n      id="TikTok_Ads_SSO_FPwd_Email_Input"\n      />\n    <span class="error-msg">' + e.locale.input_error_msg_email + '</span>\n  </div>\n   <div class="tiktokads-common-fpwd-form-item form-item-validation ' + ("mobile" === e.accountType ? "ac-show" : "ac-hide") + '" id="TikTok_Ads_SSO_FPwd_Mobile_FormItem">\n\t    <div class="label-text">' + e.locale["item_label_" + e.acTypeMobile] + '</div>\n\t\t\t<div class="tiktokads-common-account-mobile-container">\n\t\t\t\t <div id="TikTok_Ads_SSO_FPwd_Area_Select_Container" class="tiktokads-common-account-mobile-select-container"></div>\n\t\t\t\t\t<input placeholder="' + e.locale[this.acPlaceholder("mobile")] + '" type="text" name="mobile" class="tiktokads-common-account-form-mobile" id="TikTok_Ads_SSO_FPwd_Mobile_Input"/>\n    </div>\n\t  <span class="error-msg">' + e.locale.input_error_msg_mobile + '</span>\n\t</div> \n  <span class="error-msg form-error-msg" id="TikTok_Ads_SSO_FPwd_Code_Form_Error"></span>\n  <div class="tiktokads-common-fpwd-form-operation">\n    <button name="sendEmailBtn" class="btn primary ' + (e.isLoading ? "is-disabled" : "") + '" ' + (e.isLoading ? 'disabled="disabled"' : "") + '" id="TikTok_Ads_SSO_FPwd_Send_Email_Btn">\n      <i class="iconfont icon-loading"></i>\n      ' + e.locale["account_send_" + e.accountType] + '\n    </button>\n    <div class="tiktokads-common-fpwd-form-operation-menu">\n      <a href="javascript:;" class="menu-item ' + (e.isLoading ? "text-disabled" : "") + '" id="TikTok_Ads_SSO_FPwd_Email_Login_Btn">\n        ' + e.locale.account_login + "\n      </a>\n    </div>\n  </div>\n</div>\n    "
                    }
                    ,
                    e
                }();
                t.default = m
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.formState = {
                    loginEmailInput: "",
                    loginMobileInput: "",
                    loginPwdInput: "",
                    loginVerifyCodeInput: "",
                    loginVerifyCodeAccount: "",
                    fPwdEmailInput: "",
                    fPwdMobileInput: "",
                    fPwdResendEmailInput: "",
                    fPwdResendMobileInput: "",
                    fPwdCodeInput: "",
                    fPwdPasswordInput: "",
                    fPwdPrePasswordInput: ""
                },
                t.domState = {
                    loginForm: !0,
                    fPwdEmailForm: !1,
                    fPwdForm: !1,
                    loginVerifyCodeForm: !1
                },
                t.domValidState = {
                    loginEmailFormItem: !1,
                    loginMobileFormItem: !1,
                    loginPwdFormItem: !1,
                    loginVerifyCodeFormItem: !1,
                    fPwdEmailFormItem: !1,
                    fPwdMobileFormItem: !1,
                    fPwdResendEmailFormItem: !1,
                    fPwdResendMobileFormItem: !1,
                    fPwdCodeFormItem: !1,
                    fPwdPasswordFormItem: !1,
                    fPwdPrePasswordForItem: !1
                },
                t.accountTypes = ["mobile", "email"]
            }
            , function(e, t, n) {
                "use strict";
                var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ).apply(this, arguments)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(45)
                  , r = n(63)
                  , a = n(64)
                  , s = n(6)
                  , c = function() {
                    function e(t, n) {
                        e.locale = n,
                        this.host = t.host || r.default.SSO_DOMAIN,
                        this.commonParams = {
                            aid: t.appId,
                            service: t.service,
                            language: t.lang
                        }
                    }
                    return e.prototype.handleErrorResponse = function(t) {
                        var n = t.status
                          , o = t.data
                          , i = void 0 === o ? {} : o;
                        switch (n) {
                        case 200:
                            return i;
                        default:
                            return {
                                data: i,
                                error_code: n,
                                description: e.locale.account_network_error_hint
                            }
                        }
                    }
                    ,
                    e.prototype.handleSuccessResponse = function(e) {
                        var t = e.data;
                        return 200 === e.status ? t.error_code === s.ResCode.SUCCESS ? t : "success" === t.message && t.data ? t.data : t : t
                    }
                    ,
                    e.prototype.get = function(t) {
                        var n = t.url
                          , r = t.params
                          , a = void 0 === r ? {} : r
                          , s = o({
                            url: "" + this.host + n,
                            params: a,
                            method: "get"
                        }, e.defaultAxiosConfig);
                        return i.default(s).then(this.handleSuccessResponse).catch(this.handleErrorResponse)
                    }
                    ,
                    e.prototype.post = function(t) {
                        var n = t.url
                          , r = t.params
                          , a = void 0 === r ? {} : r
                          , s = new FormData;
                        Object.keys(a).forEach(function(e) {
                            s.append(e, a[e])
                        });
                        var c = o({
                            url: "" + this.host + n,
                            data: s,
                            method: "post"
                        }, e.defaultAxiosConfig);
                        return i.default(c).then(this.handleSuccessResponse).catch(this.handleErrorResponse)
                    }
                    ,
                    e.prototype.checkLogin = function(e) {
                        return this.get({
                            params: o({}, this.commonParams, e),
                            url: r.default.CHECK_LOGIN
                        })
                    }
                    ,
                    e.prototype.accountLogin = function(e) {
                        var t = o({}, e, {
                            account: e.account.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["password", "account"]),
                            url: r.default.ACCOUNT_LOGIN_URL
                        })
                    }
                    ,
                    e.prototype.emailLogin = function(e) {
                        var t = o({}, e, {
                            code: e.code.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["email", "code"]),
                            url: r.default.EMAIL_CODE_LOGIN_URL
                        })
                    }
                    ,
                    e.prototype.mobileLogin = function(e) {
                        var t = o({}, e, {
                            code: e.code.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["mobile", "code"]),
                            url: r.default.MOBILE_CODE_LOGIN_URL
                        })
                    }
                    ,
                    e.prototype.sendEmail = function(e) {
                        var t = o({}, e, {
                            email: e.email.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["email"]),
                            url: r.default.SEND_EMAIL
                        })
                    }
                    ,
                    e.prototype.sendMobile = function(e) {
                        var t = o({}, e, {
                            mobile: e.mobile.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["mobile", "type"]),
                            url: r.default.SEND_MOBILE_CODE
                        })
                    }
                    ,
                    e.prototype.resetPwd = function(e) {
                        var t = o({}, e, {
                            account: e.account.trim(),
                            code: e.code.trim()
                        });
                        return this.post({
                            params: a.default.encryptParams(o({}, this.commonParams, t), ["account", "code", "password"]),
                            url: r.default.RESET_PWD
                        })
                    }
                    ,
                    e.prototype.loginInLark = function(t) {
                        var n = t.domain
                          , a = "" + (void 0 === n ? "" : n).replace(/\/*$/g, "") + r.default.LOGIN_IN_LARK
                          , s = o({
                            url: a,
                            method: "get"
                        }, e.defaultAxiosConfig);
                        return i.default(s).then(this.handleSuccessResponse).catch(this.handleErrorResponse)
                    }
                    ,
                    e.prototype.getCountryCodeByIp = function() {
                        var e = {
                            url: r.default.GET_COUNTY_CODE_BY_IP,
                            method: "get"
                        };
                        return i.default(e).then(this.handleSuccessResponse).catch(this.handleErrorResponse)
                    }
                    ,
                    e.defaultAxiosConfig = {
                        withCredentials: !0,
                        headers: {
                            "content-type": "application/x-www-form-urlencoded",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    },
                    e
                }();
                t.default = c
            }
            , function(e, t, n) {
                e.exports = n(46)
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0)
                  , i = n(15)
                  , r = n(48)
                  , a = n(21);
                function s(e) {
                    var t = new r(e)
                      , n = i(r.prototype.request, t);
                    return o.extend(n, r.prototype, t),
                    o.extend(n, t),
                    n
                }
                var c = s(n(18));
                c.Axios = r,
                c.create = function(e) {
                    return s(a(c.defaults, e))
                }
                ,
                c.Cancel = n(22),
                c.CancelToken = n(61),
                c.isCancel = n(17),
                c.all = function(e) {
                    return Promise.all(e)
                }
                ,
                c.spread = n(62),
                e.exports = c,
                e.exports.default = c
            }
            , function(e, t) {
                /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
                e.exports = function(e) {
                    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0)
                  , i = n(16)
                  , r = n(49)
                  , a = n(50)
                  , s = n(21);
                function c(e) {
                    this.defaults = e,
                    this.interceptors = {
                        request: new r,
                        response: new r
                    }
                }
                c.prototype.request = function(e) {
                    "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
                    (e = s(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
                    var t = [a, void 0]
                      , n = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }),
                    this.interceptors.response.forEach(function(e) {
                        t.push(e.fulfilled, e.rejected)
                    }); t.length; )
                        n = n.then(t.shift(), t.shift());
                    return n
                }
                ,
                c.prototype.getUri = function(e) {
                    return e = s(this.defaults, e),
                    i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
                }
                ,
                o.forEach(["delete", "get", "head", "options"], function(e) {
                    c.prototype[e] = function(t, n) {
                        return this.request(o.merge(n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                }),
                o.forEach(["post", "put", "patch"], function(e) {
                    c.prototype[e] = function(t, n, i) {
                        return this.request(o.merge(i || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                }),
                e.exports = c
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                function i() {
                    this.handlers = []
                }
                i.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }),
                    this.handlers.length - 1
                }
                ,
                i.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }
                ,
                i.prototype.forEach = function(e) {
                    o.forEach(this.handlers, function(t) {
                        null !== t && e(t)
                    })
                }
                ,
                e.exports = i
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0)
                  , i = n(51)
                  , r = n(17)
                  , a = n(18)
                  , s = n(59)
                  , c = n(60);
                function l(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(e) {
                    return l(e),
                    e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
                    e.headers = e.headers || {},
                    e.data = i(e.data, e.headers, e.transformRequest),
                    e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
                    o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                        delete e.headers[t]
                    }),
                    (e.adapter || a.adapter)(e).then(function(t) {
                        return l(e),
                        t.data = i(t.data, t.headers, e.transformResponse),
                        t
                    }, function(t) {
                        return r(t) || (l(e),
                        t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))),
                        Promise.reject(t)
                    })
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                e.exports = function(e, t, n) {
                    return o.forEach(n, function(n) {
                        e = n(e, t)
                    }),
                    e
                }
            }
            , function(e, t) {
                var n, o, i = e.exports = {};
                function r() {
                    throw new Error("setTimeout has not been defined")
                }
                function a() {
                    throw new Error("clearTimeout has not been defined")
                }
                function s(e) {
                    if (n === setTimeout)
                        return setTimeout(e, 0);
                    if ((n === r || !n) && setTimeout)
                        return n = setTimeout,
                        setTimeout(e, 0);
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
                !function() {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : r
                    } catch (e) {
                        n = r
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        o = a
                    }
                }();
                var c, l = [], d = !1, u = -1;
                function m() {
                    d && c && (d = !1,
                    c.length ? l = c.concat(l) : u = -1,
                    l.length && f())
                }
                function f() {
                    if (!d) {
                        var e = s(m);
                        d = !0;
                        for (var t = l.length; t; ) {
                            for (c = l,
                            l = []; ++u < t; )
                                c && c[u].run();
                            u = -1,
                            t = l.length
                        }
                        c = null,
                        d = !1,
                        function(e) {
                            if (o === clearTimeout)
                                return clearTimeout(e);
                            if ((o === a || !o) && clearTimeout)
                                return o = clearTimeout,
                                clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(e)
                    }
                }
                function p(e, t) {
                    this.fun = e,
                    this.array = t
                }
                function _() {}
                i.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                    l.push(new p(e,t)),
                    1 !== l.length || d || s(f)
                }
                ,
                p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                i.title = "browser",
                i.browser = !0,
                i.env = {},
                i.argv = [],
                i.version = "",
                i.versions = {},
                i.on = _,
                i.addListener = _,
                i.once = _,
                i.off = _,
                i.removeListener = _,
                i.removeAllListeners = _,
                i.emit = _,
                i.prependListener = _,
                i.prependOnceListener = _,
                i.listeners = function(e) {
                    return []
                }
                ,
                i.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                i.cwd = function() {
                    return "/"
                }
                ,
                i.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                i.umask = function() {
                    return 0
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                e.exports = function(e, t) {
                    o.forEach(e, function(n, o) {
                        o !== t && o.toUpperCase() === t.toUpperCase() && (e[t] = n,
                        delete e[o])
                    })
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(20);
                e.exports = function(e, t, n) {
                    var i = n.config.validateStatus;
                    !i || i(n.status) ? e(n) : t(o("Request failed with status code " + n.status, n.config, null, n.request, n))
                }
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e, t, n, o, i) {
                    return e.config = t,
                    n && (e.code = n),
                    e.request = o,
                    e.response = i,
                    e.isAxiosError = !0,
                    e.toJSON = function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code
                        }
                    }
                    ,
                    e
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0)
                  , i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, r, a = {};
                    return e ? (o.forEach(e.split("\n"), function(e) {
                        if (r = e.indexOf(":"),
                        t = o.trim(e.substr(0, r)).toLowerCase(),
                        n = o.trim(e.substr(r + 1)),
                        t) {
                            if (a[t] && i.indexOf(t) >= 0)
                                return;
                            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                        }
                    }),
                    a) : a
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                e.exports = o.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
                    function i(e) {
                        var o = e;
                        return t && (n.setAttribute("href", o),
                        o = n.href),
                        n.setAttribute("href", o),
                        {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = i(window.location.href),
                    function(t) {
                        var n = o.isString(t) ? i(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
                }() : function() {
                    return !0
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(0);
                e.exports = o.isStandardBrowserEnv() ? {
                    write: function(e, t, n, i, r, a) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)),
                        o.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                        o.isString(i) && s.push("path=" + i),
                        o.isString(r) && s.push("domain=" + r),
                        !0 === a && s.push("secure"),
                        document.cookie = s.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            }
            , function(e, t, n) {
                "use strict";
                var o = n(22);
                function i(e) {
                    if ("function" != typeof e)
                        throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise(function(e) {
                        t = e
                    }
                    );
                    var n = this;
                    e(function(e) {
                        n.reason || (n.reason = new o(e),
                        t(n.reason))
                    })
                }
                i.prototype.throwIfRequested = function() {
                    if (this.reason)
                        throw this.reason
                }
                ,
                i.source = function() {
                    var e;
                    return {
                        token: new i(function(t) {
                            e = t
                        }
                        ),
                        cancel: e
                    }
                }
                ,
                e.exports = i
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.default = {
                    SSO_DOMAIN: "https://business-sso.tiktok.com/",
                    ACCOUNT_LOGIN_URL: "account_login/v3/",
                    EMAIL_CODE_LOGIN_URL: "activate_email/code_login/",
                    MOBILE_CODE_LOGIN_URL: "quick_login/v2/",
                    SEND_EMAIL: "send_email_activate_code/v2/",
                    SEND_MOBILE_CODE: "send_activation_code/v2/",
                    RESET_PWD: "reset_password/",
                    CHECK_LOGIN: "check_login/",
                    LOGOUT: "logout/",
                    LOGIN_IN_LARK: "/staff_login_url/",
                    GET_COUNTY_CODE_BY_IP: "https://ipapi.co/json/"
                }
            }
            , function(e, t) {
                e.exports = function(e) {
                    var t = {};
                    function n(o) {
                        if (t[o])
                            return t[o].exports;
                        var i = t[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return e[o].call(i.exports, i, i.exports, n),
                        i.l = !0,
                        i.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.d = function(e, t, o) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: o
                        })
                    }
                    ,
                    n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    n.t = function(e, t) {
                        if (1 & t && (e = n(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule)
                            return e;
                        var o = Object.create(null);
                        if (n.r(o),
                        Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var i in e)
                                n.d(o, i, function(t) {
                                    return e[t]
                                }
                                .bind(null, i));
                        return o
                    }
                    ,
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, "a", t),
                        t
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n.p = "",
                    n(n.s = 0)
                }([function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = n(1)
                      , i = n(2)
                      , r = {
                        encryptParams: o.encryptParams,
                        encrypt: o.encrypt,
                        logEncrypt: i.logEncrypt
                    };
                    t.default = r
                }
                , function(e, t, n) {
                    "use strict";
                    var o = this && this.__assign || Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.encrypt = function(e) {
                        var t, n = [];
                        if (void 0 === e)
                            return "";
                        t = function(e) {
                            for (var t, n = e.toString(), o = [], i = 0; i < n.length; i++)
                                0 <= (t = n.charCodeAt(i)) && t <= 127 ? o.push(t) : 128 <= t && t <= 2047 ? (o.push(192 | 31 & t >> 6),
                                o.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (o.push(224 | 15 & t >> 12),
                                o.push(128 | 63 & t >> 6),
                                o.push(128 | 63 & t));
                            for (var r = 0; r < o.length; r++)
                                o[r] &= 255;
                            return o
                        }(e);
                        for (var o = 0, i = t.length; o < i; ++o)
                            n.push((5 ^ t[o]).toString(16));
                        return n.join("")
                    }
                    ,
                    t.encryptParams = function(e, n) {
                        var i, r = 0;
                        if ("object" != typeof e)
                            return e;
                        if (!n || n.length <= 0)
                            return e;
                        for (var a = o({
                            mix_mode: r
                        }, e), s = 0, c = n.length; s < c; ++s)
                            void 0 !== (i = a[n[s]]) && (r |= 1,
                            a[n[s]] = t.encrypt(i));
                        return a.mix_mode = r,
                        a
                    }
                    ,
                    t.default = {
                        encrypt: t.encrypt,
                        encryptParams: t.encryptParams
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = n(3)
                      , i = n(8)
                      , r = n(9);
                    function a(e) {
                        return new Uint8Array([e])[0]
                    }
                    function s(e) {
                        return new Uint8Array([e])[0]
                    }
                    function c(e) {
                        return new Uint32Array([e])[0]
                    }
                    function l(e, t, n) {
                        var o = c(n[0] << 24 | n[1] << 16 | n[2] << 8 | n[3])
                          , i = c(n[4] << 24 | n[5] << 16 | n[6] << 8 | n[7])
                          , r = c(n[8] << 24 | n[9] << 16 | n[10] << 8 | n[11])
                          , s = c(n[12] << 24 | n[13] << 16 | n[14] << 8 | n[15]);
                        return o = c(o ^ e[0]),
                        i = c(i ^ e[1]),
                        r = c(r ^ e[2]),
                        s = c(s ^ e[3]),
                        [a(o >>> 24), a(o >>> 16), a(o >>> 8), a(o), a(i >>> 24), a(i >>> 16), a(i >>> 8), a(i), a(r >>> 24), a(r >>> 16), a(r >>> 8), a(r), a(s >>> 24), a(s >>> 16), a(s >>> 8), a(s)]
                    }
                    t.logEncrypt = function(e, t) {
                        e.stdKey = function(e) {
                            if (void 0 === e)
                                return console.error("key can not be null"),
                                "";
                            var t = [];
                            t.length = 16,
                            t.fill(0);
                            var n, o = 16;
                            n = i.writeUTF(e);
                            var a = e.length;
                            a < 16 && (o = a);
                            for (var s = 0; s < o; s++)
                                t[s] = n[s];
                            for (s = o; s < 16; s++)
                                t[s] = r.sbox1[t[s - o]];
                            for (s = 0; s < 16; s++)
                                t[s] = r.sbox0[t[s]];
                            var l = c(t[0]) << 24 | c(t[1]) << 16 | c(t[2]) << 8 | c(t[3])
                              , d = c(t[4]) << 24 | c(t[5]) << 16 | c(t[6]) << 8 | c(t[7])
                              , u = c(t[8]) << 24 | c(t[9]) << 16 | c(t[10]) << 8 | c(t[11])
                              , m = c(t[12]) << 24 | c(t[13]) << 16 | c(t[14]) << 8 | c(t[15]);
                            return [c(l), c(d), c(u), c(m)]
                        }(e.key);
                        var n = [s(e.magic_number >>> 8), s(255 & e.magic_number), s(e.version), 0, s(e.sub_version >>> 8), s(255 & e.sub_version)]
                          , d = o.zip(i.writeUTF(t))
                          , u = function(e, t) {
                            var n = [];
                            e && "string" == typeof e ? n = i.writeUTF(e) : e && Array.isArray(e) && (n = e);
                            var o = r.blockSize - n.length % r.blockSize;
                            if (o == r.blockSize)
                                return t[3] = s(0),
                                n;
                            t[3] = s(o);
                            for (var a = 0; a < o; a++) {
                                var c = s(o);
                                n.push(c)
                            }
                            return n
                        }(d, n);
                        u = function(e) {
                            for (var t = 0; t < e.length; t++)
                                e[t] = r.sbox0[s(e[t])];
                            return e
                        }(u);
                        for (var m, f, p, _, h, A = d.length / r.blockSize, g = [], k = 0; k < A; k++) {
                            var b = u.slice(k * r.blockSize, (k + 1) * r.blockSize);
                            f = void 0,
                            p = void 0,
                            _ = void 0,
                            h = void 0,
                            f = c((m = b)[0] << 24 | m[1] << 16 | m[2] << 8 | m[3]),
                            p = c(m[4] << 24 | m[5] << 16 | m[6] << 8 | m[7]),
                            _ = c(m[8] << 24 | m[9] << 16 | m[10] << 8 | m[11]),
                            h = c(m[12] << 24 | m[13] << 16 | m[14] << 8 | m[15]),
                            f = c(f),
                            p = c(c(p << 8) | c(p >>> 24)),
                            _ = c(_ << 16 | _ >>> 16),
                            h = c(h << 24 | h >>> 8),
                            b = [a(f >>> 24), a(f >>> 16), a(f >>> 8), a(f), a(p >>> 24), a(p >>> 16), a(p >>> 8), a(p), a(_ >>> 24), a(_ >>> 16), a(_ >>> 8), a(_), a(h >>> 24), a(h >>> 16), a(h >>> 8), a(h)],
                            b = l(e.stdKey, 0, b),
                            g = g.concat(b)
                        }
                        var v = n.concat(g);
                        return new Uint8Array(v).buffer
                    }
                    ,
                    t.default = {
                        logEncrypt: t.logEncrypt
                    }
                }
                , function(e, t, n) {
                    !function() {
                        "use strict";
                        var t = n(4)
                          , o = n(5)
                          , i = {
                            deflate: 8
                        }
                          , r = 1
                          , a = 2
                          , s = 4
                          , c = 8
                          , l = 16
                          , d = {
                            fat: 0,
                            amiga: 1,
                            vmz: 2,
                            unix: 3,
                            "vm/cms": 4,
                            atari: 5,
                            hpfs: 6,
                            macintosh: 7,
                            "z-system": 8,
                            cplm: 9,
                            "tops-20": 10,
                            ntfs: 11,
                            qdos: 12,
                            acorn: 13,
                            vfat: 14,
                            vms: 15,
                            beos: 16,
                            tandem: 17,
                            theos: 18
                        };
                        function u(e, t) {
                            t.push(255 & e)
                        }
                        function m(e, t) {
                            t.push(255 & e),
                            t.push(e >>> 8)
                        }
                        function f(e, t) {
                            m(65535 & e, t),
                            m(e >>> 16, t)
                        }
                        function p(e) {
                            return e.shift()
                        }
                        function _(e) {
                            return e.shift() | e.shift() << 8
                        }
                        function h(e) {
                            var t = _(e)
                              , n = _(e);
                            return n > 32768 ? ((n -= 32768) << 16 | t) + 32768 * Math.pow(2, 16) : n << 16 | t
                        }
                        function A(e) {
                            for (var t = []; 0 !== e[0]; )
                                t.push(String.fromCharCode(e.shift()));
                            return e.shift(),
                            t.join("")
                        }
                        e.exports = {
                            zip: function(e, n) {
                                var r, a = 0, s = [];
                                if (n || (n = {}),
                                r = n.level || 6,
                                "string" == typeof e) {
                                    for (var l, m = e.toString(), p = [], _ = 0; _ < m.length; _++)
                                        0 <= (l = m.charCodeAt(_)) && l <= 127 ? p.push(l) : 128 <= l && l <= 2047 ? (p.push(192 | 31 & l >> 6),
                                        p.push(128 | 63 & l)) : (2048 <= l && l <= 55295 || 57344 <= l && l <= 65535) && (p.push(224 | 15 & l >> 12),
                                        p.push(128 | 63 & l >> 6),
                                        p.push(128 | 63 & l));
                                    for (var h = 0; h < p.length; h++)
                                        p[h] &= 255;
                                    e = p
                                }
                                return u(31, s),
                                u(139, s),
                                u(i.deflate, s),
                                n.name && (a |= c),
                                u(a, s),
                                f(n.timestamp || parseInt(Date.now() / 1e3, 10), s),
                                u(1 === r ? 4 : 9 === r ? 2 : 0, s),
                                u(d.unix, s),
                                n.name && (function(e, t) {
                                    var n, o = e.length;
                                    for (n = 0; n < o; n += 1)
                                        u(e.charCodeAt(n), t)
                                }(n.name.substring(n.name.lastIndexOf("/") + 1), s),
                                u(0, s)),
                                o.deflate(e, r).forEach(function(e) {
                                    u(e, s)
                                }),
                                f(parseInt(t(e), 16), s),
                                f(e.length, s),
                                s
                            },
                            unzip: function(e, n) {
                                var u, m, f, g, k = Array.prototype.slice.call(e, 0);
                                if (31 !== p(k) || 139 !== p(k))
                                    throw "Not a GZIP file";
                                if (u = p(k),
                                !(u = Object.keys(i).some(function(e) {
                                    return m = e,
                                    i[e] === u
                                })))
                                    throw "Unsupported compression method";
                                if (f = p(k),
                                h(k),
                                p(k),
                                u = p(k),
                                Object.keys(d).some(function(e) {
                                    if (d[e] === u)
                                        return !0
                                }),
                                f & s && function(e, t) {
                                    var n, o = [];
                                    for (n = 0; n < t; n += 1)
                                        o.push(e.shift())
                                }(k, u = _(k)),
                                f & c && A(k),
                                f & l && A(k),
                                f & a && _(k),
                                "deflate" === m && (g = o.inflate(k.splice(0, k.length - 8))),
                                f & r && (g = Array.prototype.map.call(g, function(e) {
                                    return String.fromCharCode(e)
                                }).join("")),
                                h(k) !== parseInt(t(g), 16))
                                    throw "Checksum does not match";
                                if (h(k) !== g.length)
                                    throw "Size of decompressed file not correct";
                                return g
                            },
                            get DEFAULT_LEVEL() {
                                return 6
                            }
                        }
                    }()
                }
                , function(e, t) {
                    !function() {
                        "use strict";
                        var t = []
                          , n = 3988292384;
                        function o(e) {
                            var t, o, i, r, a = -1;
                            for (t = 0,
                            i = e.length; t < i; t += 1) {
                                for (r = 255 & (a ^ e[t]),
                                o = 0; o < 8; o += 1)
                                    1 == (1 & r) ? r = r >>> 1 ^ n : r >>>= 1;
                                a = a >>> 8 ^ r
                            }
                            return -1 ^ a
                        }
                        function i(e, n) {
                            var o, r, a;
                            if (void 0 !== i.crc && n && e || (i.crc = -1,
                            e)) {
                                for (o = i.crc,
                                r = 0,
                                a = e.length; r < a; r += 1)
                                    o = o >>> 8 ^ t[255 & (o ^ e[r])];
                                return i.crc = o,
                                -1 ^ o
                            }
                        }
                        !function() {
                            var e, o, i;
                            for (o = 0; o < 256; o += 1) {
                                for (e = o,
                                i = 0; i < 8; i += 1)
                                    1 & e ? e = n ^ e >>> 1 : e >>>= 1;
                                t[o] = e >>> 0
                            }
                        }(),
                        e.exports = function(e, t) {
                            var n;
                            return e = "string" == typeof e ? (n = e,
                            Array.prototype.map.call(n, function(e) {
                                return e.charCodeAt(0)
                            })) : e,
                            ((t ? o(e) : i(e)) >>> 0).toString(16)
                        }
                        ,
                        e.exports.direct = o,
                        e.exports.table = i
                    }()
                }
                , function(e, t, n) {
                    !function() {
                        "use strict";
                        e.exports = {
                            inflate: n(6),
                            deflate: n(7)
                        }
                    }()
                }
                , function(e, t) {
                    !function() {
                        var t, n, o, i, r, a, s, c, l, d, u, m, f, p, _, h, A, g = 32768, k = null, b = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], v = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], w = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                        function E() {
                            this.next = null,
                            this.list = null
                        }
                        function x() {
                            this.e = 0,
                            this.b = 0,
                            this.n = 0,
                            this.t = null
                        }
                        function S(e, t, n, o, i, r) {
                            var a;
                            this.BMAX = 16,
                            this.N_MAX = 288,
                            this.status = 0,
                            this.root = null,
                            this.m = 0;
                            var s, c, l, d, u, m, f, p, _, h, A, g, k, b, v, y, w = [], C = [], B = new x, S = [], T = [], I = [];
                            for (y = this.root = null,
                            u = 0; u < this.BMAX + 1; u++)
                                w[u] = 0;
                            for (u = 0; u < this.BMAX + 1; u++)
                                C[u] = 0;
                            for (u = 0; u < this.BMAX; u++)
                                S[u] = null;
                            for (u = 0; u < this.N_MAX; u++)
                                T[u] = 0;
                            for (u = 0; u < this.BMAX + 1; u++)
                                I[u] = 0;
                            s = t > 256 ? e[256] : this.BMAX,
                            p = e,
                            _ = 0,
                            u = t;
                            do {
                                w[p[_]]++,
                                _++
                            } while (--u > 0);if (w[0] === t)
                                return this.root = null,
                                this.m = 0,
                                void (this.status = 0);
                            for (m = 1; m <= this.BMAX && 0 === w[m]; m++)
                                ;
                            for (f = m,
                            r < m && (r = m),
                            u = this.BMAX; 0 !== u && 0 === w[u]; u--)
                                ;
                            for (l = u,
                            r > u && (r = u),
                            k = 1 << m; m < u; m++,
                            k <<= 1)
                                if ((k -= w[m]) < 0)
                                    return this.status = 2,
                                    void (this.m = r);
                            if ((k -= w[u]) < 0)
                                return this.status = 2,
                                void (this.m = r);
                            for (w[u] += k,
                            I[1] = m = 0,
                            p = w,
                            _ = 1,
                            g = 2; --u > 0; )
                                I[g++] = m += p[_++];
                            p = e,
                            _ = 0,
                            u = 0;
                            do {
                                0 !== (m = p[_++]) && (T[I[m]++] = u)
                            } while (++u < t);for (t = I[l],
                            I[0] = u = 0,
                            p = T,
                            _ = 0,
                            d = -1,
                            A = C[0] = 0,
                            h = null,
                            b = 0; f <= l; f++)
                                for (a = w[f]; a-- > 0; ) {
                                    for (; f > A + C[1 + d]; ) {
                                        if (A += C[1 + d],
                                        d++,
                                        b = (b = l - A) > r ? r : b,
                                        (c = 1 << (m = f - A)) > a + 1)
                                            for (c -= a + 1,
                                            g = f; ++m < b && !((c <<= 1) <= w[++g]); )
                                                c -= w[g];
                                        for (A + m > s && A < s && (m = s - A),
                                        b = 1 << m,
                                        C[1 + d] = m,
                                        h = [],
                                        v = 0; v < b; v++)
                                            h[v] = new x;
                                        (y = y ? y.next = new E : this.root = new E).next = null,
                                        y.list = h,
                                        S[d] = h,
                                        d > 0 && (I[d] = u,
                                        B.b = C[d],
                                        B.e = 16 + m,
                                        B.t = h,
                                        m = (u & (1 << A) - 1) >> A - C[d],
                                        S[d - 1][m].e = B.e,
                                        S[d - 1][m].b = B.b,
                                        S[d - 1][m].n = B.n,
                                        S[d - 1][m].t = B.t)
                                    }
                                    for (B.b = f - A,
                                    _ >= t ? B.e = 99 : p[_] < n ? (B.e = p[_] < 256 ? 16 : 15,
                                    B.n = p[_++]) : (B.e = i[p[_] - n],
                                    B.n = o[p[_++] - n]),
                                    c = 1 << f - A,
                                    m = u >> A; m < b; m += c)
                                        h[m].e = B.e,
                                        h[m].b = B.b,
                                        h[m].n = B.n,
                                        h[m].t = B.t;
                                    for (m = 1 << f - 1; 0 != (u & m); m >>= 1)
                                        u ^= m;
                                    for (u ^= m; (u & (1 << A) - 1) !== I[d]; )
                                        A -= C[d],
                                        d--
                                }
                            this.m = C[1],
                            this.status = 0 !== k && 1 !== l ? 1 : 0
                        }
                        function T(e) {
                            for (; s < e; )
                                a |= (h.length === A ? -1 : 255 & h[A++]) << s,
                                s += 8
                        }
                        function I(e) {
                            return a & b[e]
                        }
                        function P(e) {
                            a >>= e,
                            s -= e
                        }
                        function N(e, o, i) {
                            var r, a, s;
                            if (0 === i)
                                return 0;
                            for (s = 0; ; ) {
                                for (T(p),
                                r = (a = m.list[I(p)]).e; r > 16; ) {
                                    if (99 === r)
                                        return -1;
                                    P(a.b),
                                    T(r -= 16),
                                    r = (a = a.t[I(r)]).e
                                }
                                if (P(a.b),
                                16 !== r) {
                                    if (15 === r)
                                        break;
                                    for (T(r),
                                    d = a.n + I(r),
                                    P(r),
                                    T(_),
                                    r = (a = f.list[I(_)]).e; r > 16; ) {
                                        if (99 === r)
                                            return -1;
                                        P(a.b),
                                        T(r -= 16),
                                        r = (a = a.t[I(r)]).e
                                    }
                                    for (P(a.b),
                                    T(r),
                                    u = n - a.n - I(r),
                                    P(r); d > 0 && s < i; )
                                        d--,
                                        u &= g - 1,
                                        n &= g - 1,
                                        e[o + s++] = t[n++] = t[u++];
                                    if (s === i)
                                        return i
                                } else if (n &= g - 1,
                                e[o + s++] = t[n++] = a.n,
                                s === i)
                                    return i
                            }
                            return c = -1,
                            s
                        }
                        function L(e, o, i) {
                            var r;
                            if (P(r = 7 & s),
                            T(16),
                            r = I(16),
                            P(16),
                            T(16),
                            r !== (65535 & ~a))
                                return -1;
                            for (P(16),
                            d = r,
                            r = 0; d > 0 && r < i; )
                                d--,
                                n &= g - 1,
                                T(8),
                                e[o + r++] = t[n++] = I(8),
                                P(8);
                            return 0 === d && (c = -1),
                            r
                        }
                        function F(e, t, n) {
                            if (!k) {
                                var a, s, c = [];
                                for (a = 0; a < 144; a++)
                                    c[a] = 8;
                                for (; a < 256; a++)
                                    c[a] = 9;
                                for (; a < 280; a++)
                                    c[a] = 7;
                                for (; a < 288; a++)
                                    c[a] = 8;
                                if (0 !== (s = new S(c,288,257,v,y,i = 7)).status)
                                    return console.error("HufBuild error: " + s.status),
                                    -1;
                                for (k = s.root,
                                i = s.m,
                                a = 0; a < 30; a++)
                                    c[a] = 5;
                                if ((s = new S(c,30,0,w,C,r = 5)).status > 1)
                                    return k = null,
                                    console.error("HufBuild error: " + s.status),
                                    -1;
                                o = s.root,
                                r = s.m
                            }
                            return m = k,
                            f = o,
                            p = i,
                            _ = r,
                            N(e, t, n)
                        }
                        function O(e, t, n) {
                            var o, i, r, a, s, c, l, d, u, h = [];
                            for (o = 0; o < 316; o++)
                                h[o] = 0;
                            if (T(5),
                            l = 257 + I(5),
                            P(5),
                            T(5),
                            d = 1 + I(5),
                            P(5),
                            T(4),
                            c = 4 + I(4),
                            P(4),
                            l > 286 || d > 30)
                                return -1;
                            for (i = 0; i < c; i++)
                                T(3),
                                h[B[i]] = I(3),
                                P(3);
                            for (; i < 19; i++)
                                h[B[i]] = 0;
                            if (0 !== (u = new S(h,19,19,null,null,p = 7)).status)
                                return -1;
                            for (m = u.root,
                            p = u.m,
                            a = l + d,
                            o = r = 0; o < a; )
                                if (T(p),
                                P(i = (s = m.list[I(p)]).b),
                                (i = s.n) < 16)
                                    h[o++] = r = i;
                                else if (16 === i) {
                                    if (T(2),
                                    i = 3 + I(2),
                                    P(2),
                                    o + i > a)
                                        return -1;
                                    for (; i-- > 0; )
                                        h[o++] = r
                                } else if (17 === i) {
                                    if (T(3),
                                    i = 3 + I(3),
                                    P(3),
                                    o + i > a)
                                        return -1;
                                    for (; i-- > 0; )
                                        h[o++] = 0;
                                    r = 0
                                } else {
                                    if (T(7),
                                    i = 11 + I(7),
                                    P(7),
                                    o + i > a)
                                        return -1;
                                    for (; i-- > 0; )
                                        h[o++] = 0;
                                    r = 0
                                }
                            if (u = new S(h,l,257,v,y,p = 9),
                            0 === p && (u.status = 1),
                            0 !== u.status && 1 !== u.status)
                                return -1;
                            for (m = u.root,
                            p = u.m,
                            o = 0; o < d; o++)
                                h[o] = h[o + l];
                            return u = new S(h,d,0,w,C,_ = 6),
                            f = u.root,
                            0 === (_ = u.m) && l > 257 || 0 !== u.status ? -1 : N(e, t, n)
                        }
                        function M(e, o, i) {
                            var r, a;
                            for (r = 0; r < i; ) {
                                if (l && -1 === c)
                                    return r;
                                if (d > 0) {
                                    if (0 !== c)
                                        for (; d > 0 && r < i; )
                                            d--,
                                            u &= g - 1,
                                            n &= g - 1,
                                            e[o + r++] = t[n++] = t[u++];
                                    else {
                                        for (; d > 0 && r < i; )
                                            d--,
                                            n &= g - 1,
                                            T(8),
                                            e[o + r++] = t[n++] = I(8),
                                            P(8);
                                        0 === d && (c = -1)
                                    }
                                    if (r === i)
                                        return r
                                }
                                if (-1 === c) {
                                    if (l)
                                        break;
                                    T(1),
                                    0 !== I(1) && (l = !0),
                                    P(1),
                                    T(2),
                                    c = I(2),
                                    P(2),
                                    m = null,
                                    d = 0
                                }
                                switch (c) {
                                case 0:
                                    a = L(e, o + r, i - r);
                                    break;
                                case 1:
                                    a = m ? N(e, o + r, i - r) : F(e, o + r, i - r);
                                    break;
                                case 2:
                                    a = m ? N(e, o + r, i - r) : O(e, o + r, i - r);
                                    break;
                                default:
                                    a = -1
                                }
                                if (-1 === a)
                                    return l ? 0 : -1;
                                r += a
                            }
                            return r
                        }
                        e.exports = function(e) {
                            var o, i = [];
                            t || (t = []),
                            n = 0,
                            a = 0,
                            s = 0,
                            c = -1,
                            l = !1,
                            d = u = 0,
                            m = null,
                            h = e,
                            A = 0;
                            do {
                                o = M(i, i.length, 1024)
                            } while (o > 0);return h = null,
                            i
                        }
                    }()
                }
                , function(e, t) {
                    !function() {
                        var t, n, o, i, r, a, s, c, l, d, u, m, f, p, _, h, A, g, k, b, v, y, w, C, B, E, x, S, T, I, P, N, L, F, O, M, R, j, V, z, D, U, G, W, q, H, K, Y, X, Z, Q, J, $, ee, te, ne, oe = 32768, ie = 32506, re = parseInt(17 / 3, 10), ae = null;
                        function se() {
                            this.fc = 0,
                            this.dl = 0
                        }
                        function ce() {
                            this.dyn_tree = null,
                            this.static_tree = null,
                            this.extra_bits = null,
                            this.extra_base = 0,
                            this.elems = 0,
                            this.max_length = 0,
                            this.max_code = 0
                        }
                        function le(e, t, n, o) {
                            this.good_length = e,
                            this.max_lazy = t,
                            this.nice_length = n,
                            this.max_chain = o
                        }
                        function de() {
                            this.next = null,
                            this.len = 0,
                            this.ptr = [],
                            this.off = 0
                        }
                        var ue = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
                          , me = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
                          , fe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
                          , pe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                          , _e = [new le(0,0,0,0), new le(4,4,8,4), new le(4,5,16,8), new le(4,6,32,32), new le(4,4,16,16), new le(8,16,32,32), new le(8,16,128,128), new le(8,32,128,256), new le(32,128,258,1024), new le(32,258,258,4096)];
                        function he(e) {
                            e.next = t,
                            t = e
                        }
                        function Ae(e) {
                            return u[oe + e]
                        }
                        function ge(e, t) {
                            return u[oe + e] = t
                        }
                        function ke(e) {
                            ae[a + r++] = e,
                            a + r === 8192 && function() {
                                var e, i, s;
                                if (0 !== r) {
                                    for (null !== t ? (s = t,
                                    t = t.next) : s = new de,
                                    s.next = null,
                                    s.len = s.off = 0,
                                    e = s,
                                    null === n ? n = o = e : o = o.next = e,
                                    e.len = r - a,
                                    i = 0; i < e.len; i++)
                                        e.ptr[i] = ae[a + i];
                                    r = a = 0
                                }
                            }()
                        }
                        function be(e) {
                            e &= 65535,
                            a + r < 8190 ? (ae[a + r++] = 255 & e,
                            ae[a + r++] = e >>> 8) : (ke(255 & e),
                            ke(e >>> 8))
                        }
                        function ve() {
                            _ = 32767 & (_ << re ^ 255 & c[v + 3 - 1]),
                            h = Ae(_),
                            u[32767 & v] = h,
                            ge(_, v)
                        }
                        function ye(e, t) {
                            ze(t[e].fc, t[e].dl)
                        }
                        function we(e) {
                            return 255 & (e < 256 ? W[e] : W[256 + (e >> 7)])
                        }
                        function Ce(e, t, n) {
                            return e[t].fc < e[n].fc || e[t].fc === e[n].fc && U[t] <= U[n]
                        }
                        function Be(e, t, n) {
                            var o;
                            for (o = 0; o < n && ne < te.length; o++)
                                e[t + o] = 255 & te[ne++];
                            return o
                        }
                        function Ee(e) {
                            var t, n, o, i, r = B, a = v, s = b, l = v > ie ? v - ie : 0, d = v + 258, m = c[a + s - 1], f = c[a + s];
                            b >= S && (r >>= 2);
                            do {
                                if (c[(t = e) + s] === f && c[t + s - 1] === m && c[t] === c[a] && c[++t] === c[a + 1]) {
                                    for (a += 2,
                                    t++; a < d; ) {
                                        for (i = !1,
                                        o = 0; o < 8; o += 1)
                                            if (t += 1,
                                            c[a += 1] !== c[t]) {
                                                i = !0;
                                                break
                                            }
                                        if (i)
                                            break
                                    }
                                    if (n = 258 - (d - a),
                                    a = d - 258,
                                    n > s) {
                                        if (y = e,
                                        s = n,
                                        n >= T)
                                            break;
                                        m = c[a + s - 1],
                                        f = c[a + s]
                                    }
                                }
                            } while ((e = u[32767 & e]) > l && 0 != --r);return s
                        }
                        function xe() {
                            var e, t, n = 65536 - C - v;
                            if (-1 === n)
                                n--;
                            else if (v >= 65274) {
                                for (e = 0; e < oe; e++)
                                    c[e] = c[e + oe];
                                for (y -= oe,
                                v -= oe,
                                p -= oe,
                                e = 0; e < 32768; e++)
                                    ge(e, (t = Ae(e)) >= oe ? t - oe : 0);
                                for (e = 0; e < oe; e++)
                                    t = u[e],
                                    u[e] = t >= oe ? t - oe : 0;
                                n += oe
                            }
                            w || ((e = Be(c, v + C, n)) <= 0 ? w = !0 : C += e)
                        }
                        function Se() {
                            w || (m = 0,
                            f = 0,
                            function() {
                                var e, t, n, o, i;
                                if (0 === L[0].dl) {
                                    for (O.dyn_tree = I,
                                    O.static_tree = N,
                                    O.extra_bits = ue,
                                    O.extra_base = 257,
                                    O.elems = 286,
                                    O.max_length = 15,
                                    O.max_code = 0,
                                    M.dyn_tree = P,
                                    M.static_tree = L,
                                    M.extra_bits = me,
                                    M.extra_base = 0,
                                    M.elems = 30,
                                    M.max_length = 15,
                                    M.max_code = 0,
                                    R.dyn_tree = F,
                                    R.static_tree = null,
                                    R.extra_bits = fe,
                                    R.extra_base = 0,
                                    R.elems = 19,
                                    R.max_length = 7,
                                    R.max_code = 0,
                                    n = 0,
                                    o = 0; o < 28; o++)
                                        for (q[o] = n,
                                        e = 0; e < 1 << ue[o]; e++)
                                            G[n++] = o;
                                    for (G[n - 1] = o,
                                    i = 0,
                                    o = 0; o < 16; o++)
                                        for (H[o] = i,
                                        e = 0; e < 1 << me[o]; e++)
                                            W[i++] = o;
                                    for (i >>= 7; o < 30; o++)
                                        for (H[o] = i << 7,
                                        e = 0; e < 1 << me[o] - 7; e++)
                                            W[256 + i++] = o;
                                    for (t = 0; t <= 15; t++)
                                        j[t] = 0;
                                    for (e = 0; e <= 143; )
                                        N[e++].dl = 8,
                                        j[8]++;
                                    for (; e <= 255; )
                                        N[e++].dl = 9,
                                        j[9]++;
                                    for (; e <= 279; )
                                        N[e++].dl = 7,
                                        j[7]++;
                                    for (; e <= 287; )
                                        N[e++].dl = 8,
                                        j[8]++;
                                    for (Le(N, 287),
                                    e = 0; e < 30; e++)
                                        L[e].dl = 5,
                                        L[e].fc = De(e, 5);
                                    Pe()
                                }
                            }(),
                            function() {
                                var e;
                                for (e = 0; e < 32768; e++)
                                    u[oe + e] = 0;
                                if (E = _e[x].max_lazy,
                                S = _e[x].good_length,
                                T = _e[x].nice_length,
                                B = _e[x].max_chain,
                                v = 0,
                                p = 0,
                                (C = Be(c, 0, 2 * oe)) <= 0)
                                    return w = !0,
                                    void (C = 0);
                                for (w = !1; C < 262 && !w; )
                                    xe();
                                for (_ = 0,
                                e = 0; e < 2; e++)
                                    _ = 32767 & (_ << re ^ 255 & c[e])
                            }(),
                            n = null,
                            r = 0,
                            a = 0,
                            x <= 3 ? (b = 2,
                            k = 0) : (k = 2,
                            g = !1),
                            s = !1)
                        }
                        function Te(e, t, o) {
                            var r;
                            return i || (Se(),
                            i = !0,
                            0 !== C) ? (r = Ie(e, t, o)) === o ? o : s ? r : (x <= 3 ? function() {
                                for (; 0 !== C && null === n; ) {
                                    var e;
                                    if (ve(),
                                    0 !== h && v - h <= ie && (k = Ee(h)) > C && (k = C),
                                    k >= 3)
                                        if (e = je(v - y, k - 3),
                                        C -= k,
                                        k <= E) {
                                            k--;
                                            do {
                                                v++,
                                                ve()
                                            } while (0 != --k);v++
                                        } else
                                            v += k,
                                            k = 0,
                                            _ = 32767 & ((_ = 255 & c[v]) << re ^ 255 & c[v + 1]);
                                    else
                                        e = je(0, 255 & c[v]),
                                        C--,
                                        v++;
                                    for (e && (Re(0),
                                    p = v); C < 262 && !w; )
                                        xe()
                                }
                            }() : function() {
                                for (; 0 !== C && null === n; ) {
                                    if (ve(),
                                    b = k,
                                    A = y,
                                    k = 2,
                                    0 !== h && b < E && v - h <= ie && ((k = Ee(h)) > C && (k = C),
                                    3 === k && v - y > 4096 && k--),
                                    b >= 3 && k <= b) {
                                        var e;
                                        e = je(v - 1 - A, b - 3),
                                        C -= b - 1,
                                        b -= 2;
                                        do {
                                            v++,
                                            ve()
                                        } while (0 != --b);g = !1,
                                        k = 2,
                                        v++,
                                        e && (Re(0),
                                        p = v)
                                    } else
                                        g ? (je(0, 255 & c[v - 1]) && (Re(0),
                                        p = v),
                                        v++,
                                        C--) : (g = !0,
                                        v++,
                                        C--);
                                    for (; C < 262 && !w; )
                                        xe()
                                }
                            }(),
                            0 === C && (g && je(0, 255 & c[v - 1]),
                            Re(1),
                            s = !0),
                            r + Ie(e, r + t, o - r)) : (s = !0,
                            0)
                        }
                        function Ie(e, t, o) {
                            var i, s, c;
                            for (i = 0; null !== n && i < o; ) {
                                for ((s = o - i) > n.len && (s = n.len),
                                c = 0; c < s; c++)
                                    e[t + i + c] = n.ptr[n.off + c];
                                var l;
                                n.off += s,
                                n.len -= s,
                                i += s,
                                0 === n.len && (l = n,
                                n = n.next,
                                he(l))
                            }
                            if (i === o)
                                return i;
                            if (a < r) {
                                for ((s = o - i) > r - a && (s = r - a),
                                c = 0; c < s; c++)
                                    e[t + i + c] = ae[a + c];
                                i += s,
                                r === (a += s) && (r = a = 0)
                            }
                            return i
                        }
                        function Pe() {
                            var e;
                            for (e = 0; e < 286; e++)
                                I[e].fc = 0;
                            for (e = 0; e < 30; e++)
                                P[e].fc = 0;
                            for (e = 0; e < 19; e++)
                                F[e].fc = 0;
                            I[256].fc = 1,
                            $ = ee = 0,
                            Y = X = Z = 0,
                            Q = 0,
                            J = 1
                        }
                        function Ne(e, t) {
                            for (var n = V[t], o = t << 1; o <= z && (o < z && Ce(e, V[o + 1], V[o]) && o++,
                            !Ce(e, n, V[o])); )
                                V[t] = V[o],
                                t = o,
                                o <<= 1;
                            V[t] = n
                        }
                        function Le(e, t) {
                            var n, o, i = [], r = 0;
                            for (n = 1; n <= 15; n++)
                                r = r + j[n - 1] << 1,
                                i[n] = r;
                            for (o = 0; o <= t; o++) {
                                var a = e[o].dl;
                                0 !== a && (e[o].fc = De(i[a]++, a))
                            }
                        }
                        function Fe(e) {
                            var t, n, o = e.dyn_tree, i = e.static_tree, r = e.elems, a = -1, s = r;
                            for (z = 0,
                            D = 573,
                            t = 0; t < r; t++)
                                0 !== o[t].fc ? (V[++z] = a = t,
                                U[t] = 0) : o[t].dl = 0;
                            for (; z < 2; ) {
                                var c = V[++z] = a < 2 ? ++a : 0;
                                o[c].fc = 1,
                                U[c] = 0,
                                $--,
                                null !== i && (ee -= i[c].dl)
                            }
                            for (e.max_code = a,
                            t = z >> 1; t >= 1; t--)
                                Ne(o, t);
                            do {
                                t = V[1],
                                V[1] = V[z--],
                                Ne(o, 1),
                                n = V[1],
                                V[--D] = t,
                                V[--D] = n,
                                o[s].fc = o[t].fc + o[n].fc,
                                U[t] > U[n] + 1 ? U[s] = U[t] : U[s] = U[n] + 1,
                                o[t].dl = o[n].dl = s,
                                V[1] = s++,
                                Ne(o, 1)
                            } while (z >= 2);V[--D] = V[1],
                            function(e) {
                                var t, n, o, i, r, a, s = e.dyn_tree, c = e.extra_bits, l = e.extra_base, d = e.max_code, u = e.max_length, m = e.static_tree, f = 0;
                                for (i = 0; i <= 15; i++)
                                    j[i] = 0;
                                for (s[V[D]].dl = 0,
                                t = D + 1; t < 573; t++)
                                    (i = s[s[n = V[t]].dl].dl + 1) > u && (i = u,
                                    f++),
                                    s[n].dl = i,
                                    n > d || (j[i]++,
                                    r = 0,
                                    n >= l && (r = c[n - l]),
                                    a = s[n].fc,
                                    $ += a * (i + r),
                                    null !== m && (ee += a * (m[n].dl + r)));
                                if (0 !== f) {
                                    do {
                                        for (i = u - 1; 0 === j[i]; )
                                            i--;
                                        j[i]--,
                                        j[i + 1] += 2,
                                        j[u]--,
                                        f -= 2
                                    } while (f > 0);for (i = u; 0 !== i; i--)
                                        for (n = j[i]; 0 !== n; )
                                            (o = V[--t]) > d || (s[o].dl !== i && ($ += (i - s[o].dl) * s[o].fc,
                                            s[o].fc = i),
                                            n--)
                                }
                            }(e),
                            Le(o, a)
                        }
                        function Oe(e, t) {
                            var n, o, i = -1, r = e[0].dl, a = 0, s = 7, c = 4;
                            for (0 === r && (s = 138,
                            c = 3),
                            e[t + 1].dl = 65535,
                            n = 0; n <= t; n++)
                                o = r,
                                r = e[n + 1].dl,
                                ++a < s && o === r || (a < c ? F[o].fc += a : 0 !== o ? (o !== i && F[o].fc++,
                                F[16].fc++) : a <= 10 ? F[17].fc++ : F[18].fc++,
                                a = 0,
                                i = o,
                                0 === r ? (s = 138,
                                c = 3) : o === r ? (s = 6,
                                c = 3) : (s = 7,
                                c = 4))
                        }
                        function Me(e, t) {
                            var n, o, i = -1, r = e[0].dl, a = 0, s = 7, c = 4;
                            for (0 === r && (s = 138,
                            c = 3),
                            n = 0; n <= t; n++)
                                if (o = r,
                                r = e[n + 1].dl,
                                !(++a < s && o === r)) {
                                    if (a < c)
                                        do {
                                            ye(o, F)
                                        } while (0 != --a);
                                    else
                                        0 !== o ? (o !== i && (ye(o, F),
                                        a--),
                                        ye(16, F),
                                        ze(a - 3, 2)) : a <= 10 ? (ye(17, F),
                                        ze(a - 3, 3)) : (ye(18, F),
                                        ze(a - 11, 7));
                                    a = 0,
                                    i = o,
                                    0 === r ? (s = 138,
                                    c = 3) : o === r ? (s = 6,
                                    c = 3) : (s = 7,
                                    c = 4)
                                }
                        }
                        function Re(e) {
                            var t, n, o, i, r;
                            if (i = v - p,
                            K[Z] = Q,
                            Fe(O),
                            Fe(M),
                            o = function() {
                                var e;
                                for (Oe(I, O.max_code),
                                Oe(P, M.max_code),
                                Fe(R),
                                e = 18; e >= 3 && 0 === F[pe[e]].dl; e--)
                                    ;
                                return $ += 3 * (e + 1) + 5 + 5 + 4,
                                e
                            }(),
                            (n = ee + 3 + 7 >> 3) <= (t = $ + 3 + 7 >> 3) && (t = n),
                            i + 4 <= t && p >= 0)
                                for (ze(0 + e, 3),
                                Ue(),
                                be(i),
                                be(~i),
                                r = 0; r < i; r++)
                                    ke(c[p + r]);
                            else
                                n === t ? (ze(2 + e, 3),
                                Ve(N, L)) : (ze(4 + e, 3),
                                function(e, t, n) {
                                    var o;
                                    for (ze(e - 257, 5),
                                    ze(t - 1, 5),
                                    ze(n - 4, 4),
                                    o = 0; o < n; o++)
                                        ze(F[pe[o]].dl, 3);
                                    Me(I, e - 1),
                                    Me(P, t - 1)
                                }(O.max_code + 1, M.max_code + 1, o + 1),
                                Ve(I, P));
                            Pe(),
                            0 !== e && Ue()
                        }
                        function je(e, t) {
                            if (d[Y++] = t,
                            0 === e ? I[t].fc++ : (e--,
                            I[G[t] + 256 + 1].fc++,
                            P[we(e)].fc++,
                            l[X++] = e,
                            Q |= J),
                            J <<= 1,
                            0 == (7 & Y) && (K[Z++] = Q,
                            Q = 0,
                            J = 1),
                            x > 2 && 0 == (4095 & Y)) {
                                var n, o = 8 * Y, i = v - p;
                                for (n = 0; n < 30; n++)
                                    o += P[n].fc * (5 + me[n]);
                                if (o >>= 3,
                                X < parseInt(Y / 2, 10) && o < parseInt(i / 2, 10))
                                    return !0
                            }
                            return 8191 === Y || 8192 === X
                        }
                        function Ve(e, t) {
                            var n, o, i, r, a = 0, s = 0, c = 0, u = 0;
                            if (0 !== Y)
                                do {
                                    0 == (7 & a) && (u = K[c++]),
                                    o = 255 & d[a++],
                                    0 == (1 & u) ? ye(o, e) : (ye((i = G[o]) + 256 + 1, e),
                                    0 !== (r = ue[i]) && ze(o -= q[i], r),
                                    ye(i = we(n = l[s++]), t),
                                    0 !== (r = me[i]) && ze(n -= H[i], r)),
                                    u >>= 1
                                } while (a < Y);ye(256, e)
                        }
                        function ze(e, t) {
                            f > 16 - t ? (be(m |= e << f),
                            m = e >> 16 - f,
                            f += t - 16) : (m |= e << f,
                            f += t)
                        }
                        function De(e, t) {
                            var n = 0;
                            do {
                                n |= 1 & e,
                                e >>= 1,
                                n <<= 1
                            } while (--t > 0);return n >> 1
                        }
                        function Ue() {
                            f > 8 ? be(m) : f > 0 && ke(m),
                            m = 0,
                            f = 0
                        }
                        e.exports = function(e, r) {
                            var a, s;
                            te = e,
                            ne = 0,
                            void 0 === r && (r = 6),
                            function(e) {
                                var r;
                                if (e ? e < 1 ? e = 1 : e > 9 && (e = 9) : e = 6,
                                x = e,
                                i = !1,
                                w = !1,
                                null === ae) {
                                    for (t = n = o = null,
                                    ae = [],
                                    c = [],
                                    l = [],
                                    d = [],
                                    u = [],
                                    I = [],
                                    r = 0; r < 573; r++)
                                        I[r] = new se;
                                    for (P = [],
                                    r = 0; r < 61; r++)
                                        P[r] = new se;
                                    for (N = [],
                                    r = 0; r < 288; r++)
                                        N[r] = new se;
                                    for (L = [],
                                    r = 0; r < 30; r++)
                                        L[r] = new se;
                                    for (F = [],
                                    r = 0; r < 39; r++)
                                        F[r] = new se;
                                    O = new ce,
                                    M = new ce,
                                    R = new ce,
                                    j = [],
                                    V = [],
                                    U = [],
                                    G = [],
                                    W = [],
                                    q = [],
                                    H = [],
                                    K = []
                                }
                            }(r),
                            s = [];
                            do {
                                a = Te(s, s.length, 1024)
                            } while (a > 0);return te = null,
                            s
                        }
                        ,
                        e.exports.DEFAULT_LEVEL = 6
                    }()
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.writeUTF = function(e) {
                        for (var t, n = e.toString(), o = [], i = 0; i < n.length; i++)
                            0 <= (t = n.charCodeAt(i)) && t <= 127 ? o.push(t) : 128 <= t && t <= 2047 ? (o.push(192 | 31 & t >> 6),
                            o.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (o.push(224 | 15 & t >> 12),
                            o.push(128 | 63 & t >> 6),
                            o.push(128 | 63 & t));
                        for (var r = 0; r < o.length; r++)
                            o[r] &= 255;
                        return o
                    }
                }
                , function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.blockSize = 16,
                    t.sbox0 = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                    t.sbox1 = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                    t.default = {}
                }
                ])
            }
            , function(e, t, n) {
                var o = n(66);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                (t = e.exports = n(4)(!0)).i(n(67), ""),
                t.push([e.i, '@charset "UTF-8";\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-login {\n  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "寰杞闆呴粦", HelveticaNeue, Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n  /* 灞炴т粎鍦 Mac OS X/macOS 涓嬬敓鏁堬紝浣垮瓧浣撴樉绀烘洿骞虫粦 */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .tiktokads-common-login * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .tiktokads-common-login ul, .tiktokads-common-login ol {\n    margin: 0;\n    padding: 0; }\n  .tiktokads-common-login li {\n    list-style: none;\n    margin: 0; }\n  .tiktokads-common-login a {\n    text-decoration: none;\n    color: #3f71c3;\n    cursor: pointer; }\n    .tiktokads-common-login a:hover, .tiktokads-common-login a:focus {\n      color: #6390cf;\n      text-decoration: none; }\n    .tiktokads-common-login a:active {\n      color: #3f71c3; }\n  .tiktokads-common-login input {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 34px;\n    padding: 0 12px;\n    line-height: 34px;\n    border-radius: 4px;\n    border: 1px solid #dadfe3;\n    color: #333;\n    font-size: 14px;\n    background-color: #fff;\n    background-image: none;\n    outline: none;\n    -webkit-appearance: none;\n    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .tiktokads-common-login input::-webkit-input-placeholder {\n      color: #c1c1c1 !important; }\n    .tiktokads-common-login input:-ms-input-placeholder {\n      color: #c1c1c1 !important; }\n    .tiktokads-common-login input::-ms-input-placeholder {\n      color: #c1c1c1 !important; }\n    .tiktokads-common-login input::placeholder {\n      color: #c1c1c1 !important; }\n    .tiktokads-common-login input:hover {\n      outline: none;\n      border-color: #2a4d8f; }\n    .tiktokads-common-login input:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n              box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n      border-color: #2a4d8f; }\n  .tiktokads-common-login button, .tiktokads-common-login .btn {\n    display: inline-block;\n    line-height: 1;\n    margin: 0;\n    white-space: nowrap;\n    background: #f8f9fa;\n    border: 1px solid #dadfe3;\n    border-color: #dadfe3;\n    border-radius: 4px;\n    color: #333;\n    text-align: center;\n    outline: none;\n    -webkit-transition: .1s;\n    transition: .1s;\n    font-weight: 400;\n    -webkit-appearance: none;\n    cursor: pointer;\n    height: 38px;\n    padding: 8px 16px;\n    font-size: 14px; }\n    .tiktokads-common-login button.is-round, .tiktokads-common-login .btn.is-round {\n      padding: 8px 16px; }\n    .tiktokads-common-login button:hover, .tiktokads-common-login button:focus, .tiktokads-common-login .btn:hover, .tiktokads-common-login .btn:focus {\n      background-color: #f8f9fa;\n      color: #2a4d8f;\n      border-color: #2a4d8f; }\n    .tiktokads-common-login button:active, .tiktokads-common-login .btn:active {\n      color: #2a4d8f;\n      border-color: #2a4d8f;\n      background-color: #f0f9ff;\n      outline: none; }\n    .tiktokads-common-login button.primary, .tiktokads-common-login .btn.primary {\n      color: #fff;\n      background-color: #2a4d8f;\n      border-color: #2a4d8f; }\n      .tiktokads-common-login button.primary:hover, .tiktokads-common-login button.primary:focus, .tiktokads-common-login .btn.primary:hover, .tiktokads-common-login .btn.primary:focus {\n        background: #3960aa;\n        border-color: #3960aa;\n        color: #fff; }\n      .tiktokads-common-login button.primary:active, .tiktokads-common-login .btn.primary:active {\n        background: #3960aa;\n        border-color: #3960aa;\n        outline: none;\n        color: #fff; }\n      .tiktokads-common-login button.primary.is-active, .tiktokads-common-login .btn.primary.is-active {\n        background: #3960aa;\n        border-color: #3960aa;\n        color: #fff; }\n      .tiktokads-common-login button.primary.is-disabled, .tiktokads-common-login button.primary.is-disabled:hover, .tiktokads-common-login button.primary.is-disabled:focus, .tiktokads-common-login button.primary.is-disabled:active, .tiktokads-common-login .btn.primary.is-disabled, .tiktokads-common-login .btn.primary.is-disabled:hover, .tiktokads-common-login .btn.primary.is-disabled:focus, .tiktokads-common-login .btn.primary.is-disabled:active {\n        color: #f0f9ff;\n        background-color: #bad0e8;\n        border-color: #bad0e8; }\n    .tiktokads-common-login button .icon-loading, .tiktokads-common-login .btn .icon-loading {\n      display: none;\n      margin-right: 5px;\n      font-size: 16px; }\n    .tiktokads-common-login button.is-disabled, .tiktokads-common-login .btn.is-disabled {\n      color: #f0f9ff;\n      background-color: #bad0e8;\n      border-color: #bad0e8;\n      cursor: not-allowed; }\n      .tiktokads-common-login button.is-disabled:hover, .tiktokads-common-login button.is-disabled:focus, .tiktokads-common-login .btn.is-disabled:hover, .tiktokads-common-login .btn.is-disabled:focus {\n        color: #f0f9ff;\n        background-color: #bad0e8;\n        border-color: #bad0e8; }\n      .tiktokads-common-login button.is-disabled .icon-loading, .tiktokads-common-login .btn.is-disabled .icon-loading {\n        display: inline-block;\n        -webkit-animation: rotating 2s linear infinite;\n                animation: rotating 2s linear infinite; }\n', "", {
                    version: 3,
                    sources: ["base.scss"],
                    names: [],
                    mappings: "AAAA,gBAAgB;AAChB;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAE5B;EACE,sHAAsH;EACtH,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,WAAW;EACX,qCAAqC;EACrC,mCAAmC;EACnC,kCAAkC,EAAE;EACpC;IACE,8BAAsB;YAAtB,sBAAsB,EAAE;EAC1B;IACE,SAAS;IACT,UAAU,EAAE;EACd;IACE,gBAAgB;IAChB,SAAS,EAAE;EACb;IACE,qBAAqB;IACrB,cAAc;IACd,eAAe,EAAE;IACjB;MACE,cAAc;MACd,qBAAqB,EAAE;IACzB;MACE,cAAc,EAAE;EACpB;IACE,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,wBAAwB;IACxB,0EAAkE;IAAlE,kEAAkE,EAAE;IACpE;MACE,yBAAyB,EAAE;IAD7B;MACE,yBAAyB,EAAE;IAD7B;MACE,yBAAyB,EAAE;IAD7B;MACE,yBAAyB,EAAE;IAC7B;MACE,aAAa;MACb,qBAAqB,EAAE;IACzB;MACE,aAAa;MACb,qDAA6C;cAA7C,6CAA6C;MAC7C,qBAAqB,EAAE;EAC3B;IACE,qBAAqB;IACrB,cAAc;IACd,SAAS;IACT,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAe;IAAf,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,eAAe,EAAE;IACjB;MACE,iBAAiB,EAAE;IACrB;MACE,yBAAyB;MACzB,cAAc;MACd,qBAAqB,EAAE;IACzB;MACE,cAAc;MACd,qBAAqB;MACrB,yBAAyB;MACzB,aAAa,EAAE;IACjB;MACE,WAAW;MACX,yBAAyB;MACzB,qBAAqB,EAAE;MACvB;QACE,mBAAmB;QACnB,qBAAqB;QACrB,WAAW,EAAE;MACf;QACE,mBAAmB;QACnB,qBAAqB;QACrB,aAAa;QACb,WAAW,EAAE;MACf;QACE,mBAAmB;QACnB,qBAAqB;QACrB,WAAW,EAAE;MACf;QACE,cAAc;QACd,yBAAyB;QACzB,qBAAqB,EAAE;IAC3B;MACE,aAAa;MACb,iBAAiB;MACjB,eAAe,EAAE;IACnB;MACE,cAAc;MACd,yBAAyB;MACzB,qBAAqB;MACrB,mBAAmB,EAAE;MACrB;QACE,cAAc;QACd,yBAAyB;QACzB,qBAAqB,EAAE;MACzB;QACE,qBAAqB;QACrB,8CAAsC;gBAAtC,sCAAsC,EAAE",
                    file: "base.scss",
                    sourcesContent: ['@charset "UTF-8";\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n@import url(~assets/iconfont/iconfont.css);\n.tiktokads-common-login {\n  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "寰杞闆呴粦", HelveticaNeue, Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n  /* 灞炴т粎鍦 Mac OS X/macOS 涓嬬敓鏁堬紝浣垮瓧浣撴樉绀烘洿骞虫粦 */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .tiktokads-common-login * {\n    box-sizing: border-box; }\n  .tiktokads-common-login ul, .tiktokads-common-login ol {\n    margin: 0;\n    padding: 0; }\n  .tiktokads-common-login li {\n    list-style: none;\n    margin: 0; }\n  .tiktokads-common-login a {\n    text-decoration: none;\n    color: #3f71c3;\n    cursor: pointer; }\n    .tiktokads-common-login a:hover, .tiktokads-common-login a:focus {\n      color: #6390cf;\n      text-decoration: none; }\n    .tiktokads-common-login a:active {\n      color: #3f71c3; }\n  .tiktokads-common-login input {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 34px;\n    padding: 0 12px;\n    line-height: 34px;\n    border-radius: 4px;\n    border: 1px solid #dadfe3;\n    color: #333;\n    font-size: 14px;\n    background-color: #fff;\n    background-image: none;\n    outline: none;\n    -webkit-appearance: none;\n    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }\n    .tiktokads-common-login input::placeholder {\n      color: #c1c1c1 !important; }\n    .tiktokads-common-login input:hover {\n      outline: none;\n      border-color: #2a4d8f; }\n    .tiktokads-common-login input:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px rgba(42, 77, 143, 0.15);\n      border-color: #2a4d8f; }\n  .tiktokads-common-login button, .tiktokads-common-login .btn {\n    display: inline-block;\n    line-height: 1;\n    margin: 0;\n    white-space: nowrap;\n    background: #f8f9fa;\n    border: 1px solid #dadfe3;\n    border-color: #dadfe3;\n    border-radius: 4px;\n    color: #333;\n    text-align: center;\n    outline: none;\n    transition: .1s;\n    font-weight: 400;\n    -webkit-appearance: none;\n    cursor: pointer;\n    height: 38px;\n    padding: 8px 16px;\n    font-size: 14px; }\n    .tiktokads-common-login button.is-round, .tiktokads-common-login .btn.is-round {\n      padding: 8px 16px; }\n    .tiktokads-common-login button:hover, .tiktokads-common-login button:focus, .tiktokads-common-login .btn:hover, .tiktokads-common-login .btn:focus {\n      background-color: #f8f9fa;\n      color: #2a4d8f;\n      border-color: #2a4d8f; }\n    .tiktokads-common-login button:active, .tiktokads-common-login .btn:active {\n      color: #2a4d8f;\n      border-color: #2a4d8f;\n      background-color: #f0f9ff;\n      outline: none; }\n    .tiktokads-common-login button.primary, .tiktokads-common-login .btn.primary {\n      color: #fff;\n      background-color: #2a4d8f;\n      border-color: #2a4d8f; }\n      .tiktokads-common-login button.primary:hover, .tiktokads-common-login button.primary:focus, .tiktokads-common-login .btn.primary:hover, .tiktokads-common-login .btn.primary:focus {\n        background: #3960aa;\n        border-color: #3960aa;\n        color: #fff; }\n      .tiktokads-common-login button.primary:active, .tiktokads-common-login .btn.primary:active {\n        background: #3960aa;\n        border-color: #3960aa;\n        outline: none;\n        color: #fff; }\n      .tiktokads-common-login button.primary.is-active, .tiktokads-common-login .btn.primary.is-active {\n        background: #3960aa;\n        border-color: #3960aa;\n        color: #fff; }\n      .tiktokads-common-login button.primary.is-disabled, .tiktokads-common-login button.primary.is-disabled:hover, .tiktokads-common-login button.primary.is-disabled:focus, .tiktokads-common-login button.primary.is-disabled:active, .tiktokads-common-login .btn.primary.is-disabled, .tiktokads-common-login .btn.primary.is-disabled:hover, .tiktokads-common-login .btn.primary.is-disabled:focus, .tiktokads-common-login .btn.primary.is-disabled:active {\n        color: #f0f9ff;\n        background-color: #bad0e8;\n        border-color: #bad0e8; }\n    .tiktokads-common-login button .icon-loading, .tiktokads-common-login .btn .icon-loading {\n      display: none;\n      margin-right: 5px;\n      font-size: 16px; }\n    .tiktokads-common-login button.is-disabled, .tiktokads-common-login .btn.is-disabled {\n      color: #f0f9ff;\n      background-color: #bad0e8;\n      border-color: #bad0e8;\n      cursor: not-allowed; }\n      .tiktokads-common-login button.is-disabled:hover, .tiktokads-common-login button.is-disabled:focus, .tiktokads-common-login .btn.is-disabled:hover, .tiktokads-common-login .btn.is-disabled:focus {\n        color: #f0f9ff;\n        background-color: #bad0e8;\n        border-color: #bad0e8; }\n      .tiktokads-common-login button.is-disabled .icon-loading, .tiktokads-common-login .btn.is-disabled .icon-loading {\n        display: inline-block;\n        animation: rotating 2s linear infinite; }\n']
                }])
            }
            , function(e, t, n) {
                t = e.exports = n(4)(!0);
                var o = n(68)
                  , i = o(n(23))
                  , r = o(n(23) + "#iefix")
                  , a = o(n(69))
                  , s = o(n(70))
                  , c = o(n(71) + "#iconfont");
                t.push([e.i, '@font-face {font-family: "iconfont";\n  src: url(' + i + "); /* IE9 */\n  src: url(" + r + ") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAaoAAsAAAAADNwAAAZaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEGAqLQIkrATYCJAMoCxYABCAFhG0HgQAb6QpRVG+qZD8kSQKCgghREeTBoakuARBBFSgAgCIiiAdof9Sbmf+9ByKxSRFih+ul23RpQzww38ZjZRNC1B/+N7VH60g10joz9YSK0vAgTkaYOGxO7jx6ppGJyFdFF5npiWj3/yeMvlpTHRqfiYrDde/izd8D7V2YC8SurrJVEbpCAbAjNAaEqpG6FuJVJ+fnpgIvJqAx0VDImvlLdSBDhoyAQWdNHA0yHFFZhD2oAkXAgdl25BW5Kt6Ibbip/X74bUGoiPKELrXx+DwGzPyW/MXrJHWSvUlyvbg0noeRMB+QEfoCs7dAMvT5GjZBIzOnAUPl3P42fkufFZ/Vnw39bNpnc7/X/mjvwmutmY0WB0M5qip2R0H9Ly9XKFWEAsMe2C6313xLkkGjBcIiaI2wADoUYlK6FGEZ6Bpw5Hzfw1HwfS9HyY/XY1SgUQ4YDhgLhNfEDYDYGq1vEkT5Ej1FkAlH4rmZuXiJSq1W4fl57B7z87PT0vDMPHzWlthzffSZLv4Zlfi8Sgmqhs5LkkKuT7VD0BpvmPooaDtfRA5v4XyukKRi3IqG9coRl5qOjRUpd6+u8MlhRaWjvEpQUut17v9TaSv0njORdzVbUG9YjmCY700tkmWXkBr0dQlKGEHevTkBy2+NoApVggBIwWyfvBxGk6ZPdZeijUFP95RlaQNACqljRzk80iCsqAXJEEDC6xF3sNYTUcuF9qlXNB4N1eCReg/iCfjdUHGi+qbLLwI9q7ZRH2jD+rJK5/YHPDWIjKJKM1pcqCcE8rUQ1YhWwf5I2AiMUrxvvKmVU4ZPvZ3l4fg1LLeacbIrIbPKEI9TiURFLKaPRqmTF6VLrivy5cr4Z0VeWfvmoN1doUdS+Z8J12L6RGLO9TgVjW7xvRH+SOWO6uJxjfeTj/xqT/c0nTugkoZlQrFxZgrz+R47nnJN0Hs+xlxa35sa6kxiyINMD2+sdOUmmSzdTiHJlNucV4isWqd/WJH/wzu3X4I5c3s9OLRkEr47e676o5X3h9277XwfTNn4u9F4oXxDeWTPnvPl55keYTtcAN8sak7FsZSWlGYcN7QWaDh2SWnBsX1xyHT0u9j/W4Zav+1/of8DvfuD/q39vmEgP903My+kdICR/aodXbnFuVk7rv7QXsu69SR2aMcILVkeR9pYR0uXhIMeGFv+yTdKsZ1S45z01tttUuNcHUtCxt6XspBixDLzWbT+LG1LL9A1yFQFiNcT7OMmECIXf5foTbxOAOWlEMJt3+GajggAP2fcX9S7aL9RHQbYKWu/6rpD/I3kDoBAYZ9CP7h/i+tF/7WS8HPcAeSAd8GgGbn37solwIDcn8vkVb0rb9H3Fq9nIYtPon8d6sWC/Zzx7sCdFx2OABCXtOLUrXXhQnBshyzZhoH/owuQxkYE2oIHwTSr+u/IbiFfaVrwh9yYs7VKU7VV5c3prxGvzc6MXQhnhpVgpvH2YPLHP05PGLlrU138+Dt4AL93ou6ApMaIgk19x95YselAwf7Kwv36yuiCGdtI+9BTN/ben7mTbNRKirQW4k0+5fqp+cJ5ts/v+3zNjv2FvQs2LV/1yzgz+gGdPD+cZAWgO51akgMA0umkB3RXE588CwDiw9isHdohS/ENpCdx6Hm5kdst39CQPfXXCrtUGz88633FDkwn5U3JEiqRxNJZGCl1hSXzw78KxZrsO6fcqs0uZVIH8snOevdMjI66BmdfcagHRbMRiaXTnY2wICpNgKQy3ZTZ5kOutQgKleXQmGfB4a1hBMlCVmOuPQIEgx2BaKCnkAzWbsps9yE30rdQGBwSNLaH/BO2ZoZT6BwB0iJkyKZNpMnA21kxIaL64NWQW2elBbuiuSgoOE2N5KjhI92dC6AdCkXs4lzPjRZFlmQF3kbOFy4HrVaedAi8GRrE4UZRdEweMYINeqThBt4GUKsJIJoIYpCabEIyMeDZscrSItTz86tBnHWsaELErD/+FEjgZFo+aZThRiYwLUB7olmbMtJpPc5oIkuzSGmigGdDms/SkJW38UiO4PXMIAPRcMYMLQ6TjWDzsUlxePXMNreVi3sO+uomxJBCFvJQhDJUoQ5NaGXnaMGewvAb7KkGK++EKU4DbU+38jRjsnMoLQj8hmFWyIqYuZdg4oxiBtwEh/EOaM/UxTQRAAAA') format('woff2'),\n  url(" + a + ") format('woff'),\n  url(" + s + ") format('truetype'), \n  url(" + c + ') format(\'svg\'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-warn:before {\n  content: "\\e609";\n}\n\n.icon-down:before {\n  content: "\\e606";\n}\n\n.icon-close:before {\n  content: "\\e603";\n}\n\n.icon-scan:before {\n  content: "\\e63d";\n}\n\n.icon-loading:before {\n  content: "\\e644";\n}\n\n.icon-arrow-left:before {\n  content: "\\e75b";\n}\n\n.icon-arrow-right:before {\n  content: "\\e75c";\n}\n\n.icon-eye-open:before {\n  content: "\\e8cd";\n}\n\n.icon-eye-close:before {\n  content: "\\e612";\n}\n\n', "", {
                    version: 3,
                    sources: ["iconfont.css"],
                    names: [],
                    mappings: "AAAA,YAAY,uBAAuB;EACjC,kCAAwC,EAAE,QAAQ;EAClD;;;;6CAI0D,EAAE,aAAa;AAC3E;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB",
                    file: "iconfont.css",
                    sourcesContent: ["@font-face {font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1587703756926'); /* IE9 */\n  src: url('iconfont.eot?t=1587703756926#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAaoAAsAAAAADNwAAAZaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEGAqLQIkrATYCJAMoCxYABCAFhG0HgQAb6QpRVG+qZD8kSQKCgghREeTBoakuARBBFSgAgCIiiAdof9Sbmf+9ByKxSRFih+ul23RpQzww38ZjZRNC1B/+N7VH60g10joz9YSK0vAgTkaYOGxO7jx6ppGJyFdFF5npiWj3/yeMvlpTHRqfiYrDde/izd8D7V2YC8SurrJVEbpCAbAjNAaEqpG6FuJVJ+fnpgIvJqAx0VDImvlLdSBDhoyAQWdNHA0yHFFZhD2oAkXAgdl25BW5Kt6Ibbip/X74bUGoiPKELrXx+DwGzPyW/MXrJHWSvUlyvbg0noeRMB+QEfoCs7dAMvT5GjZBIzOnAUPl3P42fkufFZ/Vnw39bNpnc7/X/mjvwmutmY0WB0M5qip2R0H9Ly9XKFWEAsMe2C6313xLkkGjBcIiaI2wADoUYlK6FGEZ6Bpw5Hzfw1HwfS9HyY/XY1SgUQ4YDhgLhNfEDYDYGq1vEkT5Ej1FkAlH4rmZuXiJSq1W4fl57B7z87PT0vDMPHzWlthzffSZLv4Zlfi8Sgmqhs5LkkKuT7VD0BpvmPooaDtfRA5v4XyukKRi3IqG9coRl5qOjRUpd6+u8MlhRaWjvEpQUut17v9TaSv0njORdzVbUG9YjmCY700tkmWXkBr0dQlKGEHevTkBy2+NoApVggBIwWyfvBxGk6ZPdZeijUFP95RlaQNACqljRzk80iCsqAXJEEDC6xF3sNYTUcuF9qlXNB4N1eCReg/iCfjdUHGi+qbLLwI9q7ZRH2jD+rJK5/YHPDWIjKJKM1pcqCcE8rUQ1YhWwf5I2AiMUrxvvKmVU4ZPvZ3l4fg1LLeacbIrIbPKEI9TiURFLKaPRqmTF6VLrivy5cr4Z0VeWfvmoN1doUdS+Z8J12L6RGLO9TgVjW7xvRH+SOWO6uJxjfeTj/xqT/c0nTugkoZlQrFxZgrz+R47nnJN0Hs+xlxa35sa6kxiyINMD2+sdOUmmSzdTiHJlNucV4isWqd/WJH/wzu3X4I5c3s9OLRkEr47e676o5X3h9277XwfTNn4u9F4oXxDeWTPnvPl55keYTtcAN8sak7FsZSWlGYcN7QWaDh2SWnBsX1xyHT0u9j/W4Zav+1/of8DvfuD/q39vmEgP903My+kdICR/aodXbnFuVk7rv7QXsu69SR2aMcILVkeR9pYR0uXhIMeGFv+yTdKsZ1S45z01tttUuNcHUtCxt6XspBixDLzWbT+LG1LL9A1yFQFiNcT7OMmECIXf5foTbxOAOWlEMJt3+GajggAP2fcX9S7aL9RHQbYKWu/6rpD/I3kDoBAYZ9CP7h/i+tF/7WS8HPcAeSAd8GgGbn37solwIDcn8vkVb0rb9H3Fq9nIYtPon8d6sWC/Zzx7sCdFx2OABCXtOLUrXXhQnBshyzZhoH/owuQxkYE2oIHwTSr+u/IbiFfaVrwh9yYs7VKU7VV5c3prxGvzc6MXQhnhpVgpvH2YPLHP05PGLlrU138+Dt4AL93ou6ApMaIgk19x95YselAwf7Kwv36yuiCGdtI+9BTN/ben7mTbNRKirQW4k0+5fqp+cJ5ts/v+3zNjv2FvQs2LV/1yzgz+gGdPD+cZAWgO51akgMA0umkB3RXE588CwDiw9isHdohS/ENpCdx6Hm5kdst39CQPfXXCrtUGz88633FDkwn5U3JEiqRxNJZGCl1hSXzw78KxZrsO6fcqs0uZVIH8snOevdMjI66BmdfcagHRbMRiaXTnY2wICpNgKQy3ZTZ5kOutQgKleXQmGfB4a1hBMlCVmOuPQIEgx2BaKCnkAzWbsps9yE30rdQGBwSNLaH/BO2ZoZT6BwB0iJkyKZNpMnA21kxIaL64NWQW2elBbuiuSgoOE2N5KjhI92dC6AdCkXs4lzPjRZFlmQF3kbOFy4HrVaedAi8GRrE4UZRdEweMYINeqThBt4GUKsJIJoIYpCabEIyMeDZscrSItTz86tBnHWsaELErD/+FEjgZFo+aZThRiYwLUB7olmbMtJpPc5oIkuzSGmigGdDms/SkJW38UiO4PXMIAPRcMYMLQ6TjWDzsUlxePXMNreVi3sO+uomxJBCFvJQhDJUoQ5NaGXnaMGewvAb7KkGK++EKU4DbU+38jRjsnMoLQj8hmFWyIqYuZdg4oxiBtwEh/EOaM/UxTQRAAAA') format('woff2'),\n  url('iconfont.woff?t=1587703756926') format('woff'),\n  url('iconfont.ttf?t=1587703756926') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('iconfont.svg?t=1587703756926#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-warn:before {\n  content: \"\\e609\";\n}\n\n.icon-down:before {\n  content: \"\\e606\";\n}\n\n.icon-close:before {\n  content: \"\\e603\";\n}\n\n.icon-scan:before {\n  content: \"\\e63d\";\n}\n\n.icon-loading:before {\n  content: \"\\e644\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\e75b\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\e75c\";\n}\n\n.icon-eye-open:before {\n  content: \"\\e8cd\";\n}\n\n.icon-eye-close:before {\n  content: \"\\e612\";\n}\n\n"]
                }])
            }
            , function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                    /["'() \t\n]/.test(e) || t ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
                }
            }
            , function(e, t, n) {
                e.exports = n.p + "assets/images/iconfont.801bb51027768b14c02f6dc1a98ca8a5.woff"
            }
            , function(e, t, n) {
                e.exports = n.p + "assets/images/iconfont.0e7c08612d3defc759c10cb2a784b6fa.ttf"
            }
            , function(e, t, n) {
                e.exports = n.p + "assets/images/iconfont.4946d140a836dfabc341aa5d74df62bc.svg"
            }
            , function(e, t, n) {
                var o = n(73);
                "string" == typeof o && (o = [[e.i, o, ""]]);
                var i = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                n(5)(o, i),
                o.locals && (e.exports = o.locals)
            }
            , function(e, t, n) {
                (e.exports = n(4)(!0)).push([e.i, "/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-login {\n  width: 320px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-resend,\n  .tiktokads-common-login.hide-label .tiktokads-common-login-code-form-resend {\n    top: 9px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-login-form-item .iconfont,\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-item .iconfont {\n    top: 10px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-login-code-form-resend-timer,\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-resend-timer {\n    top: 7px; }\n  .tiktokads-common-login input:-webkit-autofill {\n    background-color: white !important;\n    -webkit-box-shadow: inset 0 0 0 1000px white !important; }\n  .tiktokads-common-login .tiktokads-common-login-title {\n    padding: 32px 0;\n    font-size: 18px;\n    font-weight: 500;\n    text-align: center; }\n    .tiktokads-common-login .tiktokads-common-login-title-lark {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .tiktokads-common-login .tiktokads-common-login-title-lark-login {\n        font-size: 24px;\n        color: #999;\n        cursor: pointer; }\n  .tiktokads-common-login .form-validation,\n  .tiktokads-common-login .form-item-validation {\n    position: relative; }\n    .tiktokads-common-login .form-validation.label-show .label-text,\n    .tiktokads-common-login .form-item-validation.label-show .label-text {\n      display: block; }\n    .tiktokads-common-login .form-validation .label-text,\n    .tiktokads-common-login .form-item-validation .label-text {\n      margin-bottom: 8px;\n      font-size: 14px;\n      color: #333;\n      height: 20px;\n      font-weight: 400;\n      line-height: 20px;\n      display: none; }\n    .tiktokads-common-login .form-validation > .error-msg,\n    .tiktokads-common-login .form-item-validation > .error-msg {\n      display: none;\n      margin-bottom: -24px;\n      padding-top: 4px;\n      line-height: 20px;\n      color: #f45858;\n      font-size: 12px; }\n    .tiktokads-common-login .form-validation-error > .error-msg,\n    .tiktokads-common-login .form-item-validation-error > .error-msg {\n      display: block; }\n  .tiktokads-common-login .form-item-validation-error input {\n    border-color: #f45858; }\n    .tiktokads-common-login .form-item-validation-error input:hover, .tiktokads-common-login .form-item-validation-error input:focus {\n      border-color: #f45858;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n  .tiktokads-common-login .text-disabled {\n    cursor: not-allowed !important; }\n", "", {
                    version: 3,
                    sources: ["style.scss"],
                    names: [],
                    mappings: "AAAA;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;4BAC4B;AAC5B;EACE,YAAY,EAAE;EACd;;IAEE,QAAQ,EAAE;EACZ;;IAEE,SAAS,EAAE;EACb;;IAEE,QAAQ,EAAE;EACZ;IACE,kCAAkC;IAClC,uDAAuD,EAAE;EAC3D;IACE,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,kBAAkB,EAAE;IACpB;MACE,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACb,yBAA8B;UAA9B,sBAA8B;cAA9B,8BAA8B,EAAE;MAChC;QACE,eAAe;QACf,WAAW;QACX,eAAe,EAAE;EACvB;;IAEE,kBAAkB,EAAE;IACpB;;MAEE,cAAc,EAAE;IAClB;;MAEE,kBAAkB;MAClB,eAAe;MACf,WAAW;MACX,YAAY;MACZ,gBAAgB;MAChB,iBAAiB;MACjB,aAAa,EAAE;IACjB;;MAEE,aAAa;MACb,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB;MACjB,cAAc;MACd,eAAe,EAAE;IACnB;;MAEE,cAAc,EAAE;EACpB;IACE,qBAAqB,EAAE;IACvB;MACE,qBAAqB;MACrB,wBAAgB;cAAhB,gBAAgB,EAAE;EACtB;IACE,8BAA8B,EAAE",
                    file: "style.scss",
                    sourcesContent: ["/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n/* Font\n-------------------------- */\n/* Colors\n-------------------------- */\n/* Text\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Input\n-------------------------- */\n/* Button\n-------------------------- */\n.tiktokads-common-login {\n  width: 320px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-resend,\n  .tiktokads-common-login.hide-label .tiktokads-common-login-code-form-resend {\n    top: 9px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-login-form-item .iconfont,\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-item .iconfont {\n    top: 10px; }\n  .tiktokads-common-login.hide-label .tiktokads-common-login-code-form-resend-timer,\n  .tiktokads-common-login.hide-label .tiktokads-common-fpwd-form-resend-timer {\n    top: 7px; }\n  .tiktokads-common-login input:-webkit-autofill {\n    background-color: white !important;\n    -webkit-box-shadow: inset 0 0 0 1000px white !important; }\n  .tiktokads-common-login .tiktokads-common-login-title {\n    padding: 32px 0;\n    font-size: 18px;\n    font-weight: 500;\n    text-align: center; }\n    .tiktokads-common-login .tiktokads-common-login-title-lark {\n      display: flex;\n      justify-content: space-between; }\n      .tiktokads-common-login .tiktokads-common-login-title-lark-login {\n        font-size: 24px;\n        color: #999;\n        cursor: pointer; }\n  .tiktokads-common-login .form-validation,\n  .tiktokads-common-login .form-item-validation {\n    position: relative; }\n    .tiktokads-common-login .form-validation.label-show .label-text,\n    .tiktokads-common-login .form-item-validation.label-show .label-text {\n      display: block; }\n    .tiktokads-common-login .form-validation .label-text,\n    .tiktokads-common-login .form-item-validation .label-text {\n      margin-bottom: 8px;\n      font-size: 14px;\n      color: #333;\n      height: 20px;\n      font-weight: 400;\n      line-height: 20px;\n      display: none; }\n    .tiktokads-common-login .form-validation > .error-msg,\n    .tiktokads-common-login .form-item-validation > .error-msg {\n      display: none;\n      margin-bottom: -24px;\n      padding-top: 4px;\n      line-height: 20px;\n      color: #f45858;\n      font-size: 12px; }\n    .tiktokads-common-login .form-validation-error > .error-msg,\n    .tiktokads-common-login .form-item-validation-error > .error-msg {\n      display: block; }\n  .tiktokads-common-login .form-item-validation-error input {\n    border-color: #f45858; }\n    .tiktokads-common-login .form-item-validation-error input:hover, .tiktokads-common-login .form-item-validation-error input:focus {\n      border-color: #f45858;\n      box-shadow: none; }\n  .tiktokads-common-login .text-disabled {\n    cursor: not-allowed !important; }\n"]
                }])
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "賷乇噩賶 賯乇丕亍丞 丕鬲賮丕賯賷丞 丕賱賲爻鬲禺丿賲 賵爻賷丕爻丞 丕賱禺氐賵氐賷丞 賵丕賱賲賵丕賮賯丞 毓賱賷賴丕.",
                    account_check_email_hint: "毓賳賵丕賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 睾賷乇 氐丕賱丨.",
                    account_fetch_verify_code: "丕賱丨氐賵賱 毓賱賶 乇賲夭 丕賱鬲丨賯賯",
                    account_forget_password: "賳爻賷鬲 賰賱賲丞 丕賱賲乇賵乇",
                    account_login: "鬲爻噩賷賱 丕賱丿禺賵賱",
                    account_login_email: "鬲爻噩賷賱 丕賱丿禺賵賱",
                    account_network_error_hint: "禺胤兀 賮賷 丕賱卮亘賰丞. 賷乇噩賶 丕賱賲丨丕賵賱丞 賲乇丞 兀禺乇賶 賱丕丨賯賸丕.",
                    account_password_hint: "兀丿禺賱 賰賱賲丞 賲乇賵乇 賲賳 6 廿賱賶 20 乇賯賲賸丕.",
                    account_password_recomfirm_hint: "賰賱賲丕鬲 丕賱賲乇賵乇 丕賱賲丿禺賱丞 睾賷乇 賲鬲胤丕亘賯丞. 賷乇噩賶 丕賱鬲丨賯賯 賵丕賱賲丨丕賵賱丞 賲乇丞 兀禺乇賶.",
                    account_register: "廿賳卮丕亍 丨爻丕亘",
                    account_resend_email: "廿毓丕丿丞 廿乇爻丕賱 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
                    account_resend_mobile: "廿乇爻丕賱 丕賱乇賲夭",
                    account_reset_password: "廿毓丕丿丞 鬲毓賷賷賳 賰賱賲丞 丕賱賲乇賵乇",
                    account_reset_password_success_hint: "鬲賲鬲 廿毓丕丿丞 鬲毓賷賷賳 賰賱賲丞 丕賱賲乇賵乇. 賷乇噩賶 鬲爻噩賷賱 丕賱丿禺賵賱 賲乇丞 兀禺乇賶.",
                    account_send_email: "廿乇爻丕賱 亘乇賷丿 廿賱賰鬲乇賵賳賷",
                    account_send_mobile: "廿乇爻丕賱 丕賱乇賲夭",
                    account_send_success_check_hint: "鬲賲 廿乇爻丕賱 乇賲夭 丕賱鬲丨賯賯 亘賳噩丕丨. 賷乇噩賶 丕賱鬲丨賯賯 賲賳 亘乇賷丿賰 丕賱廿賱賰鬲乇賵賳賷.",
                    account_verification_code: "乇賲夭 丕賱鬲丨賯賯",
                    account_verification_code_error_hint: "乇賲夭 丕賱鬲丨賯賯 睾賷乇 氐丨賷丨",
                    account_verify_tips: "賱兀爻亘丕亘 兀賲賳賷丞貙 鬲賲 廿乇爻丕賱 乇賲夭 丕賱鬲丨賯賯 廿賱賶",
                    action_send_code: "廿乇爻丕賱 丕賱乇賲夭",
                    code_pattern_valid: "賷噩亘 兀賳 賷鬲兀賱賮 乇賲夭 丕賱鬲丨賯賯 賲賳 6 兀丨乇賮.",
                    code_self_help: '1. 賷乇噩賶 丕賱鬲丨賯賯 賲賳 氐丨丞 毓賳賵丕賳 亘乇賷丿賰 丕賱廿賱賰鬲乇賵賳賷.</br>\r\n\r\n2. 賷乇噩賶 丕賱亘丨孬 毓賳 "TikTok" 賮賷 毓賱亘丞 丕賱賵丕乇丿. 爻賳乇爻賱 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 賲賳 "TikTok For Business".</br>\r\n\r\n3. 賷乇噩賶 丕賱鬲丨賯賯 賲賲丕 廿匕丕 賰丕賳鬲 丕賱乇爻丕賱丞 賮賷 賲噩賱丿 丕賱亘乇賷丿 丕賱毓卮賵丕卅賷 兀賵 睾賷乇 丕賱賴丕賲 兀賵 丕賱賲賴賲賱丕鬲 兀賵 丕賱毓賳丕氐乇 丕賱賲丨匕賵賮丞 兀賵 丕賱兀乇卮賷賮.</br>\r\n\r\n4. 廿匕丕 賱賲 賷賳噩丨 兀賷 卮賷亍貙 賷乇噩賶 賲丨丕賵賱丞 廿乇爻丕賱 亘乇賷丿 廿賱賰鬲乇賵賳賷 賲禺鬲賱賮. 賯丿 賷賯賵賲 亘毓囟 賲賵賮乇賷 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 亘丨馗乇 亘乇賷丿賳丕 丕賱廿賱賰鬲乇賵賳賷.',
                    email_code_self_help: '1. 賷乇噩賶 丕賱鬲丨賯賯 賲賳 氐丨丞 毓賳賵丕賳 亘乇賷丿賰 丕賱廿賱賰鬲乇賵賳賷.</br>\r\n\r\n2. 賷乇噩賶 丕賱亘丨孬 毓賳 "TikTok" 賮賷 毓賱亘丞 丕賱賵丕乇丿. 爻賳乇爻賱 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 賲賳 "TikTok For Business".</br>\r\n\r\n3. 賷乇噩賶 丕賱鬲丨賯賯 賲賲丕 廿匕丕 賰丕賳鬲 丕賱乇爻丕賱丞 賮賷 賲噩賱丿 丕賱亘乇賷丿 丕賱毓卮賵丕卅賷 兀賵 睾賷乇 丕賱賴丕賲 兀賵 丕賱賲賴賲賱丕鬲 兀賵 丕賱毓賳丕氐乇 丕賱賲丨匕賵賮丞 兀賵 丕賱兀乇卮賷賮.</br>\r\n\r\n4. 廿匕丕 賱賲 賷賳噩丨 兀賷 卮賷亍貙 賷乇噩賶 賲丨丕賵賱丞 廿乇爻丕賱 亘乇賷丿 廿賱賰鬲乇賵賳賷 賲禺鬲賱賮. 賯丿 賷賯賵賲 亘毓囟 賲賵賮乇賷 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 亘丨馗乇 亘乇賷丿賳丕 丕賱廿賱賰鬲乇賵賳賷.',
                    home_enter: "廿丿丕乇丞 丕賱廿毓賱丕賳丕鬲",
                    input_error_msg_code: "賷乇噩賶 廿丿禺丕賱 乇賲夭 丕賱鬲丨賯賯 賲賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷.",
                    input_error_msg_email: "毓賳賵丕賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 睾賷乇 氐丕賱丨.",
                    input_error_msg_mobile: "鬲賳爻賷賯 乇賯賲 丕賱賴丕鬲賮 睾賷乇 氐丕賱丨.",
                    input_error_msg_mobile_code: "賷乇噩賶 廿丿禺丕賱 乇賲夭 丕賱鬲丨賯賯 丕賱賲丐賱賮 賲賳 4 兀乇賯丕賲.",
                    input_placeholder_account: "賷乇噩賶 廿丿禺丕賱 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 兀賵 丕賱賴丕鬲賮.",
                    input_placeholder_confirm_pwd: "賷乇噩賶 廿丿禺丕賱 賰賱賲丞 丕賱賲乇賵乇 丕賱禺丕氐丞 亘賰.",
                    input_placeholder_email: "毓賳賵丕賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
                    input_placeholder_email_code: "乇賲夭 丕賱鬲丨賯賯",
                    input_placeholder_mobile: "兀丿禺賱 乇賯賲 賴丕鬲賮賰",
                    input_placeholder_password: "賰賱賲丞 丕賱賲乇賵乇",
                    input_placeholder_pwd: "賷噩亘 兀賳 鬲鬲兀賱賮 賰賱賲丞 丕賱賲乇賵乇 賲賳 6 廿賱賶 20 丨乇賮賸丕",
                    input_placeholder_verify_code: "兀丿禺賱 乇賲夭 丕賱鬲丨賯賯",
                    item_label_account: "丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷 兀賵 丕賱賴丕鬲賮",
                    item_label_confirm_pwd: "鬲兀賰賷丿 賰賱賲丞 丕賱賲乇賵乇",
                    item_label_email: "毓賳賵丕賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
                    item_label_mobile: "乇賯賲 丕賱賴丕鬲賮",
                    item_label_pwd: "賰賱賲丞 丕賱賲乇賵乇",
                    item_label_verify_code: "乇賲夭 丕賱鬲丨賯賯",
                    menu_email_code_login_back: "賯賲 亘丕賱乇噩賵毓 賱鬲睾賷賷乇 毓賳賵丕賳 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷",
                    menu_mobile_code_login_back: "賯賲 亘丕賱乇噩賵毓 賱鬲睾賷賷乇 乇賯賲 丕賱賴丕鬲賮",
                    menu_next: "丕賱鬲丕賱賷",
                    mobile_code_pattern_valid: "賷乇噩賶 廿丿禺丕賱 乇賲夭 丕賱鬲丨賯賯 丕賱賲丐賱賮 賲賳 4 兀乇賯丕賲.",
                    mobile_code_self_help: "1. 賷乇噩賶 丕賱丕賳鬲馗丕乇 賱亘囟毓 孬賵丕賳賺 賱丕爻鬲賱丕賲 丕賱兀乇賯丕賲 丕賱兀乇亘毓丞 丕賱乇賲夭 賯亘賱 丕賱賲丨丕賵賱丞 賲乇丞 兀禺乇賶.</br>\r\n\r\n2. 鬲丨賯賯 賲賳 氐丨丞 乇賯賲 賴丕鬲賮賰.</br>\r\n\r\n3. 廿匕丕 賱賲 賷賳噩丨 兀賷 卮賷亍貙 賷乇噩賶 丕賱賲丨丕賵賱丞 亘乇賯賲 賴丕鬲賮 丌禺乇. ",
                    notice_not_receive_code: "兀賱賲 鬲鬲賱賯賶 丕賱乇賲夭責",
                    official_disclaimer: "丕賱卮乇賵胤",
                    official_legal_statements: "亘賷丕賳 賯丕賳賵賳賷",
                    official_privacy_title: "爻賷丕爻丞 丕賱禺氐賵氐賷丞",
                    password_pattern_valid: "賷噩亘 兀賳 鬲鬲兀賱賮 賰賱賲丞 丕賱賲乇賵乇 賲賳 6 廿賱賶 20 丨乇賮賸丕.",
                    password_required: "賷乇噩賶 廿丿禺丕賱 賰賱賲丞 丕賱賲乇賵乇 丕賱禺丕氐丞 亘賰.",
                    protocol_and_guideline: '丕賳賯乇 賴賳丕 賱賱賲賵丕賮賯丞 毓賱賶 <a  href="/i18n/official/policy/disclaimer" target="_blank">TikTok For Business 丕賱兀丨賰丕賲 賵丕賱卮乇賵胤</a> 賵鬲兀賰丿 賲賳 兀賳賰 賯乇兀鬲 <a href="/i18n/official/policy/privacy" target="_blank">爻賷丕爻丞 丕賱禺氐賵氐賷丞</a>.',
                    register: "廿賳卮丕亍 丨爻丕亘",
                    repeatPwd_required: "賷乇噩賶 鬲兀賰賷丿 賰賱賲丞 丕賱賲乇賵乇.",
                    search_area_code_placeholder: "丕賱亘丨孬 毓賳 丕爻賲 丕賱亘賱丿 兀賵 乇賲夭賴丕.",
                    see_more: "毓乇囟 丕賱賲夭賷丿",
                    shark_security_7: "鬲卮賰賱 亘賷卅丞 丕賱卮亘賰丞 丕賱丨丕賱賷丞 禺胤乇賸丕 兀賲賳賷賸丕 賰亘賷乇賸丕. 賷乇噩賶 丕賱鬲丨賯賯 賲賳 卮亘賰鬲賰 賵丕賱賲丨丕賵賱丞 賲噩丿丿賸丕 賮賷 睾囟賵賳 24 爻丕毓丞.",
                    text_lark_login_tips: "鬲爻噩賷賱 丿禺賵賱 丕賱賲賵馗賮賷賳"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Bitte lesen Sie die Nutzungsvereinbarung und Datenschutzrichtlinie durch und akzeptieren Sie diese.",
                    account_check_email_hint: "Die eingegebene Email-Adresse entspricht nicht den Anforderungen, bitte pr眉fen Sie sie erneut",
                    account_fetch_verify_code: "Verifizierungscode anfordern",
                    account_forget_password: "Passwort vergessen",
                    account_login: "Log In",
                    account_login_email: "Log In",
                    account_network_error_hint: "Netzwerkfehler, bitte versuchen Sie es sp盲ter erneut",
                    account_password_hint: "Geben Sie ein Passwort mit 6 bis 20 Zeichen ein.",
                    account_password_recomfirm_hint: "Das eingegebene Passwort stimmt nicht 眉berrein.",
                    account_register: "Registrieren",
                    account_resend_email: "Email erneut senden",
                    account_resend_mobile: "Code senden",
                    account_reset_password: "Passwort zur眉cksetzen",
                    account_reset_password_success_hint: "Passwort erfolgreich zur眉ckgesetzt, bitte loggen Sie sich erneut ein.",
                    account_send_email: "Email senden",
                    account_send_mobile: "Code senden",
                    account_send_success_check_hint: "Der Verifizierungscode wurde erfolgreich versendet. Bitte pr眉fen Sie Ihre Emails.",
                    account_verification_code: "Verifizierungscode",
                    account_verification_code_error_hint: "Falscher Verifizierungscode",
                    account_verify_tips: "Aus Sicherheitsgr眉nden wurde ein Verifizierungscode an folgende Nummer gesendet",
                    email_code_self_help: "1. Bitte 眉berpr眉fe,  ob deine E-Mail Adresse stimmt.</br>\r\n    2. Bitte suche in deinem Posteingang nach 鈥濼ikTok鈥. Wir versenden die  E-Mail via 鈥濼ikTok Ads鈥.</br>\r\n    3. Bitte schau nach, ob die E-Mail als Spam oder Werbung abgefangen wurde  oder im Papierkorb, bei den gel枚schten Elementen oder im Archivordner  gelandet ist.</br>\r\n    4. Wenn die E-Mail nicht zu finden ist, versuche es mit einer anderen  E-Mail-Adresse. Es kann vorkommen, dass unsere E-Mails von manchen  E-Mail-Anbietern blockiert werden.",
                    home_enter: "Werbeanzeigen verwalten",
                    input_error_msg_code: "Der E-Mail-Sicherheitscode kann nicht leer bleiben",
                    input_error_msg_email: "Die eingegebene Email-Adresse entspricht nicht den Anforderungen, bitte pr眉fen Sie sie erneut",
                    input_error_msg_mobile: "Das Rufnummernformat  ist ung眉ltig.",
                    input_error_msg_mobile_code: "Bitte den  vierstelligen Pr眉fcode eingeben.",
                    input_placeholder_account: "Bitte E-Mail oder  Rufnummer eingeben.",
                    input_placeholder_email: "Email-Adresse eingeben",
                    input_placeholder_email_code: "Geben Sie den Verifizierungscode ein",
                    input_placeholder_mobile: "Bitte Rufnummer  eingeben",
                    input_placeholder_password: "Passwort eingeben",
                    item_label_account: "E-Mail oder Rufnummer",
                    item_label_confirm_pwd: "Passwort best盲tigen",
                    item_label_email: "E-Mail-Adresse",
                    item_label_mobile: "Rufnummer",
                    item_label_pwd: "Passwort",
                    item_label_verify_code: "Pr眉fcode",
                    menu_email_code_login_back: "Gehe zur眉ck, um die E-Mail-Adresse zu 盲ndern",
                    menu_mobile_code_login_back: "Zur眉ck zur 脛nderung der Telefonnummer",
                    menu_next: "Weiter",
                    mobile_code_self_help: "1. Bitte warte ein  paar Sekunden auf den 4-stelligen Code, bevor du es erneut versuchst. </br>\r\n2. 脺berpr眉fe, ob deine Rufnummer stimmt.</br>\r\n3. Wenn du immer noch keinen Code erh盲ltst, versuche es mit einer anderen  Rufnummer. ",
                    notice_not_receive_code: "Du hast keinen Code  erhalten?",
                    official_disclaimer: "Nutzungsbedingungen",
                    official_legal_statements: "Rechtliche Hinweise",
                    official_privacy_title: "Datenschutzrichtlinie",
                    see_more: "Mehr anzeigen",
                    shark_security_7: "Ihre aktuelle Netzwerkumgebung ist hochgradig unsicher. Bitte 眉berpr眉fen Sie Ihr Netzwerk, und versuchen Sie es in 24 Stunden erneut."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Lea y acepte el Acuerdo de usuario y la Pol铆tica de privacidad.",
                    account_check_email_hint: "La direcci贸n de correo electr贸nico introducida no cumple con los requisitos, compru茅bela",
                    account_fetch_verify_code: "Obtener el c贸digo de verificaci贸n",
                    account_forget_password: "驴Olvid贸 la contrase帽a",
                    account_login: "Iniciar sesi贸n",
                    account_login_email: "Iniciar sesi贸n",
                    account_network_error_hint: "Error de red, vuelva a intentarlo m谩s tarde.",
                    account_password_hint: "Introduzca una contrase帽a de 6 a 20 caracteres.",
                    account_password_recomfirm_hint: "Las contrase帽as introducidas no coinciden, vuelva a comprobarlas.",
                    account_register: "Registrarse",
                    account_resend_email: "Volver a enviar correo electr贸nico",
                    account_resend_mobile: "Enviar c贸digo",
                    account_reset_password: "Restablecer contrase帽a",
                    account_reset_password_success_hint: "La contrase帽a se ha restablecido correctamente, vuelva a iniciar sesi贸n.",
                    account_send_email: "Enviar correo electr贸nico",
                    account_send_mobile: "Enviar c贸digo",
                    account_send_success_check_hint: "El c贸digo de verificaci贸n se ha enviado correctamente. Compru茅belo en su direcci贸n de correo electr贸nico.",
                    account_verification_code: "C贸digo de verificaci贸n",
                    account_verification_code_error_hint: "C贸digo de verificaci贸n incorrecto",
                    account_verify_tips: "Por razones de seguridad, se ha enviado un c贸digo de verificaci贸n a",
                    email_code_self_help: '1. Comprueba si tu  direcci贸n de correo electr贸nico es correcta.</br>\r\n    2. Busca "TikTok" en tu buz贸n de entrada. Enviaremos el mensaje  de correo electr贸nico desde "TikTok Ads".</br>\r\n    3. Comprueba si est谩 en tus carpetas de correo electr贸nico no deseado,  papelera, elementos eliminados o archivo.</br>\r\n    4. Si no hay forma de encontrarlo, prueba con una direcci贸n de correo  electr贸nico diferente. Es posible que algunos proveedores de correo  electr贸nico bloqueen nuestros mensajes.',
                    home_enter: "Gestionar anuncios",
                    input_error_msg_email: "La direcci贸n de correo electr贸nico introducida no cumple con los requisitos, compru茅bela",
                    input_error_msg_mobile: "El formato del n煤mero  de tel茅fono no es v谩lido.",
                    input_error_msg_mobile_code: "Introduce el c贸digo  de verificaci贸n de 4 d铆gitos.",
                    input_placeholder_account: "Introduce tu  direcci贸n de correo electr贸nico o n煤mero de tel茅fono.",
                    input_placeholder_email: "Introducir direcci贸n de correo electr贸nico",
                    input_placeholder_mobile: "Introduce tu n煤mero  de tel茅fono",
                    input_placeholder_password: "Introducir contrase帽a",
                    item_label_account: "Direcci贸n de correo  electr贸nico o tel茅fono",
                    item_label_confirm_pwd: "Confirmar contrase帽a",
                    item_label_email: "Direcci贸n de correo  electr贸nico",
                    item_label_mobile: "N煤mero de tel茅fono",
                    item_label_pwd: "Contrase帽a",
                    item_label_verify_code: "C贸digo de  verificaci贸n",
                    menu_email_code_login_back: "Volver",
                    menu_mobile_code_login_back: "Regresa para cambiar tu n煤mero de tel茅fono",
                    menu_next: "Siguiente",
                    mobile_code_self_help: "1. Espera unos  segundos para recibir el c贸digo de 4 d铆gitos antes de intentarlo de nuevo. </br> \r\n2. Comprueba si tu n煤mero de tel茅fono es correcto.</br>\r\n3. Si ninguno de estos m茅todos funciona, prueba con un n煤mero de tel茅fono  diferente. ",
                    notice_not_receive_code: "驴No has recibido el  c贸digo?",
                    official_disclaimer: "T茅rminos",
                    official_legal_statements: "Aviso legal",
                    official_privacy_title: "Pol铆tica de privacidad",
                    see_more: "M谩s informaci贸n",
                    shark_security_7: "Tu entorno de red actual implica un riesgo de seguridad alto. Comprueba tu red y vuelve a intentarlo dentro de 24 horas."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Veuillez lire le Contrat utilisateur et la Politique de confidentialit茅, puis les accepter.",
                    account_check_email_hint: "L'adresse e-mail saisie ne respecte pas les crit猫res demand茅s. Veuillez v茅rifier.",
                    account_fetch_verify_code: "Recevoir un code de v茅rification",
                    account_forget_password: "Mot de passe oubli茅",
                    account_login: "Connexion",
                    account_login_email: "Connexion",
                    account_network_error_hint: "Erreur r茅seau, veuillez r茅essayer plus tard.",
                    account_password_hint: "Saisissez un mot de passe comprenant entre 6 et 20聽caract猫res.",
                    account_password_recomfirm_hint: "Les mots de passe que vous avez saisis ne sont pas identiques. Veuillez v茅rifier de nouveau.",
                    account_register: "S'inscrire",
                    account_resend_email: "Envoyer de nouveau l'e-mail",
                    account_resend_mobile: "Envoyer le code",
                    account_reset_password: "R茅initialiser le mot de passe",
                    account_reset_password_success_hint: "Le mot de passe a 茅t茅 r茅initialis茅. Veuillez vous connecter 脿 nouveau.",
                    account_send_email: "Envoyer l'e-mail",
                    account_send_mobile: "Envoyer le code",
                    account_send_success_check_hint: "Le code de v茅rification a 茅t茅 envoy茅. Consultez votre bo卯te de r茅ception.",
                    account_verification_code: "Code de v茅rification",
                    account_verification_code_error_hint: "Code de v茅rification incorrect",
                    account_verify_tips: "Pour des raisons de s茅curit茅, un code de v茅rification a 茅t茅 envoy茅 脿 l'adresse",
                    email_code_self_help: "1. Veuillez v茅rifier  si votre adresse e-mail est correcte.</br>\r\n    2. Veuillez rechercher 芦 TikTok 禄 dans votre bo卯te de r茅ception.  Nous enverrons l'e-mail 脿 partir de 芦 TikTok  Ads 禄.</br>\r\n    3. Veuillez v茅rifier si l'e-mail se trouve dans votre dossier Courrier  ind茅sirable, Corbeille, 脡l茅ments supprim茅s ou Archive.</br>\r\n    4. Si aucune de ces m茅thodes ne fonctionne, veuillez essayer avec une  adresse e-mail diff茅rente. Certains fournisseurs peuvent bloquer notre  e-mail.",
                    home_enter: "G茅rer les publicit茅s",
                    input_error_msg_email: "L'adresse e-mail saisie ne respecte pas les crit猫res demand茅s. Veuillez v茅rifier.",
                    input_error_msg_mobile: "Le format du num茅ro  de t茅l茅phone n'est pas valide.",
                    input_error_msg_mobile_code: "Veuillez entrer votre  code de v茅rification 脿 4 chiffres.",
                    input_placeholder_account: "Veuillez entrer votre  adresse e-mail ou votre num茅ro de t茅l茅phone.",
                    input_placeholder_email: "Saisir l'adresse e-mail",
                    input_placeholder_mobile: "Veuillez entrer votre  num茅ro de t茅l茅phone",
                    input_placeholder_password: "Saisir le mot de passe",
                    item_label_account: "E-mail ou num茅ro de  t茅l茅phone",
                    item_label_confirm_pwd: "Confirmer le mot de  passe",
                    item_label_email: "Adresse e-mail",
                    item_label_mobile: "Num茅ro de t茅l茅phone",
                    item_label_pwd: "Mot de passe",
                    item_label_verify_code: "Code de v茅rification",
                    menu_email_code_login_back: "Retour",
                    menu_mobile_code_login_back: "Revenir 脿 la modification du num茅ro de t茅l茅phone",
                    menu_next: "Suivant",
                    mobile_code_self_help: "1. Veuillez patienter  quelques secondes pour recevoir votre code 脿 4 chiffres avant de  r茅essayer. </br>\r\n2. V茅rifiez si votre num茅ro de t茅l茅phone est correct.</br>\r\n3. Si aucune de ces m茅thodes ne fonctionne, essayez avec un num茅ro de  t茅l茅phone diff茅rent. ",
                    notice_not_receive_code: "Vous n'avez pas re莽u  de code ?",
                    official_disclaimer: "Conditions d'utilisation",
                    official_legal_statements: "Mentions l茅gales",
                    official_privacy_title: "Politique de confidentialit茅",
                    see_more: "Voir plus",
                    shark_security_7: "Votre environnement r茅seau actuel pose un risque majeur pour la s茅curit茅. Veuillez v茅rifier votre r茅seau et r茅essayer dans 24 heures."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "啶曕冟お啶啶 啶夃お啶啷嬥椸曕ぐ啷嵿い啶 啶呧え啷佮が啶傕ぇ 啶斷ぐ 啶椸嬥お啶ㄠ啶啶むぞ 啶ㄠ啶むた 啶曕 啶啶⑧ぜ啶曕ぐ 啶呧お啶ㄠ 啶膏す啶啶むた 啶︵囙傕イ",
                    account_check_email_hint: "啶︵ぐ啷嵿 啶灌佮 啶堗ぎ啷囙げ 啶啶む 啶啷囙 啶曕佮 啶曕ぎ啷 啶灌, 啶曕冟お啶啶 啶啶苦ぐ 啶膏 啶溹ぞ啶傕氞囙",
                    account_fetch_verify_code: "啶溹ぞ啶傕 啶曕嬥ぁ 啶啶距忇",
                    account_forget_password: "啶啶距じ啶掂ぐ啷嵿ぁ 啶啷傕げ 啶椸",
                    account_login: "啶侧夃 啶囙え 啶曕ぐ啷囙",
                    account_login_email: "啶侧夃 啶囙え 啶曕ぐ啷囙",
                    account_network_error_hint: "啶ㄠ囙熰さ啶班嵿 啶む嵿ぐ啷佮熰た, 啶曕冟お啶啶 啶啶距う 啶啷囙 啶啶苦ぐ 啶膏 啶啷嵿ぐ啶啶距じ 啶曕ぐ啷囙傕イ",
                    account_password_hint: "6-20 啶掂ぐ啷嵿ぃ啷嬥 啶曕ぞ 啶啶距じ啶掂ぐ啷嵿ぁ 啶︵ぐ啷嵿 啶曕ぐ啷囙傕イ",
                    account_password_recomfirm_hint: "啶︵ぐ啷嵿 啶曕た啶 啶椸 啶啶距じ啶掂ぐ啷嵿ぁ 啶膏ぎ啶距え 啶ㄠす啷啶 啶灌堗, 啶曕冟お啶啶 啶啶苦ぐ 啶膏 啶溹ぞ啶傕氞囙傕イ",
                    account_register: "啶啶傕溹啶曕ぐ啶 啶曕ぐ啷囙",
                    account_resend_email: "啶堗ぎ啷囙げ 啶曕 啶啶苦ぐ 啶膏 啶啷囙溹囙",
                    account_reset_password: "啶啶距じ啶掂ぐ啷嵿ぁ 啶班啶膏囙 啶曕ぐ啷囙",
                    account_reset_password_success_hint: "啶啶距じ啶掂ぐ啷嵿ぁ 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶 啶班啶膏囙 啶灌佮, 啶曕冟お啶啶 啶啶苦ぐ 啶膏 啶侧夃 啶囙え 啶曕ぐ啷囙傕イ",
                    account_send_email: "啶堗ぎ啷囙げ 啶啷囙溹囙",
                    account_send_success_check_hint: "啶膏い啷嵿く啶距お啶 啶曕嬥ぁ 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶 啶啷囙 啶︵た啶啶 啶椸く啶 啶灌堗イ 啶曕冟お啶啶 啶呧お啶ㄠ 啶堗ぎ啷囙げ 啶溹ぞ啶傕氞囙傕イ",
                    account_verification_code: "啶膏い啷嵿く啶距お啶 啶曕嬥ぁ",
                    account_verification_code_error_hint: "啶膏い啷嵿く啶距お啶 啶曕嬥ぁ 啶椸げ啶 啶灌",
                    account_verify_tips: "啶膏佮ぐ啶曕嵿し啶 啶曕ぞ啶班ぃ啷嬥 啶膏, 啶溹ぞ啶傕 啶曕嬥ぁ 啶囙じ 啶啶む 啶啶 啶啷囙溹ぞ 啶椸く啶 啶灌",
                    email_code_self_help: '1. 啶曕冟お啶啶 啶溹ぞ啶傕氞囙 啶曕た 啶曕嵿く啶 啶嗋お啶曕ぞ 啶-啶啷囙げ 啶啶むぞ 啶膏す啷 啶灌堗イ</br> \r\n2. 啶曕冟お啶啶 啶呧お啶ㄠ 啶囙え啶啷夃曕嵿じ 啶啷囙 "TikTok" 啶栢嬥溹囙傕イ 啶灌ぎ "TikTok Ads" 啶曕 啶撪ぐ 啶膏 啶-啶啷囙げ 啶啷囙溹囙傕椸囙イ</br> \r\n3. 啶曕冟お啶啶 啶溹ぞ啶傕氞囙 啶曕た 啶曕嵿く啶 啶啶 啶嗋お啶曕 啶膏嵿お啷堗ぎ, 啶溹傕, 啶熰嵿ぐ啷堗ざ, 啶灌熰ぞ啶 啶椸 啶嗋囙熰ぎ 啶啶 啶嗋ぐ啷嵿曕ぞ啶囙さ 啶啶监嬥げ啷嵿ぁ啶 啶啷囙 啶灌堗イ</br> \r\n4. 啶呧椸ぐ 啶曕嬥 啶啷 啶夃お啶距く 啶曕ぞ啶 啶ㄠす啷啶 啶嗋い啶 啶灌, 啶む 啶曕冟お啶啶 啶曕嬥 啶︵傕じ啶班ぞ 啶啷囙げ 啶嗋溹ぜ啶啶距忇傕イ 啶曕佮 啶-啶啷囙げ 啶啷嵿ぐ啶︵ぞ啶むぞ 啶灌ぎ啶距ぐ啷 啶-啶啷囙げ 啶曕 啶啷嵿げ啷夃 啶曕ぐ 啶膏曕い啷 啶灌堗傕イ',
                    home_enter: "啶掂た啶溹嵿炧ぞ啶啶ㄠ嬥 啶曕 啶掂嵿く啶掂じ啷嵿ぅ啶苦い 啶曕ぐ啷囙",
                    input_error_msg_code: "啶堗ぎ啷囙げ 啶膏い啷嵿く啶距お啶 啶曕嬥ぁ 啶栢ぞ啶侧 啶ㄠす啷啶 啶灌",
                    input_error_msg_email: "啶︵ぐ啷嵿 啶灌佮 啶堗ぎ啷囙げ 啶啶む 啶啷囙 啶曕佮 啶曕ぎ啷 啶灌, 啶曕冟お啶啶 啶啶苦ぐ 啶膏 啶溹ぞ啶傕氞囙",
                    input_placeholder_email: "啶堗ぎ啷囙げ 啶啶むぞ 啶︵ぐ啷嵿 啶曕ぐ啷囙",
                    input_placeholder_email_code: "啶曕冟お啶啶 啶堗ぎ啷囙げ 啶膏い啷嵿く啶距お啶 啶曕嬥ぁ 啶︵ぐ啷嵿 啶曕ぐ啷囙",
                    input_placeholder_password: "啶啶距じ啶掂ぐ啷嵿ぁ 啶︵ぐ啷嵿 啶曕ぐ啷囙",
                    menu_email_code_login_back: "啶堗ぎ啷囙げ 啶啶む 啶曕 啶膏傕ざ啷嬥ぇ啶苦い 啶曕ぐ啶ㄠ 啶曕 啶侧た啶 啶掂ぞ啶啶 啶侧屶熰囙",
                    menu_mobile_code_login_back: "啷炧嬥え 啶ㄠ傕が啶 啶啶︵げ啶ㄠ 啶曕 啶侧た啶 啶掂ぞ啶啶 啶溹ぞ啶忇",
                    menu_next: "啶嗋椸 啶啶⑧ぜ啷囙",
                    mobile_code_self_help: "1. 4 啶呧傕曕嬥 啶曕ぞ 啶曕嬥ぁ 啶啶距え啷 啶曕 啶侧た啶 啶啶苦ぐ 啶膏 啶曕嬥ざ啶苦ざ 啶曕ぐ啶ㄠ 啶膏 啶啶灌げ啷 啶曕冟お啶啶 啶曕佮 啶膏囙曕傕ぁ 啶啷嵿ぐ啶む啶曕嵿し啶 啶曕ぐ啷囙.</br> \r\n2. 啶溹ぞ啶佮氞囙 啶曕た 啶嗋お啶曕ぞ 啶啶监嬥え 啶ㄠ傕が啶 啶膏す啷 啶灌 啶曕た 啶ㄠす啷啶.</br>\r\n3. 啶呧椸ぐ 啶曕た啶膏 啶膏 啶啷 啶曕ぞ啶 啶ㄠす啷啶 啶啶ㄠい啶 啶灌, 啶む 啶︵傕じ啶班 啶啶监嬥え 啶ㄠ傕が啶 啶膏 啶曕嬥ざ啶苦ざ 啶曕ぐ啶曕 啶︵囙栢囙. ",
                    notice_not_receive_code: "啶曕嵿く啶 啶嗋お啶曕 啶曕嬥ぁ 啶ㄠす啷啶 啶啶苦げ啶?",
                    official_disclaimer: "啶多ぐ啷嵿い啷囙",
                    official_legal_statements: "啶曕ぞ啶ㄠ傕え啷 啶掂曕嵿い啶掂嵿く",
                    official_privacy_title: "啶椸嬥お啶ㄠ啶啶むぞ 啶ㄠ啶むた",
                    see_more: "啶呧ぇ啶苦 啶︵囙栢囙",
                    shark_security_7: "啶嗋お啶曕 啶啷屶溹傕う啶 啶ㄠ囙熰さ啶班嵿 啶啶班た啶掂囙ざ 啶曕 啶膏佮ぐ啶曕嵿し啶 啶曕 啶啶灌佮い 啶栢い啶班ぞ 啶灌堗イ 啶曕冟お啶啶 啶呧お啶ㄠぞ 啶ㄠ囙熰さ啶班嵿 啶溹ぞ啶傕氞囙 啶斷ぐ 24 啶樴傕熰 啶啷囙 啶啶苦ぐ 啶膏 啶曕嬥ざ啶苦ざ 啶曕ぐ啷囙傕イ"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Silakan baca dan setujui Perjanjian Pengguna serta Kebijakan Privasi terlebih dahulu.",
                    account_check_email_hint: "Email tidak sesuai persyaratan. Silakan periksa lagi.",
                    account_fetch_verify_code: "Peroleh kode verifikasi",
                    account_forget_password: "Lupa kata sandi",
                    account_login: "Log masuk",
                    account_login_email: "Log masuk",
                    account_network_error_hint: "Jaringan gagal. Silakan coba beberapa saat lagi.",
                    account_password_hint: "Kata sandi harus terdiri dari 6-20 karakter.",
                    account_password_recomfirm_hint: "Kata sandi yang dimasukkan berbeda. Silakan periksa lagi.",
                    account_register: "Daftar",
                    account_resend_email: "Kirim email lagi",
                    account_resend_mobile: "Kirim Kode",
                    account_reset_password: "Set ulang kata sandi",
                    account_reset_password_success_hint: "Kata sandi berhasil diset ulang. Silakan log masuk lagi.",
                    account_send_email: "Kirim email",
                    account_send_mobile: "Kirim Kode",
                    account_send_success_check_hint: "Pengiriman berhasil. Silakan periksa kode verifikasi di email.",
                    account_verification_code: "Kode verifikasi",
                    account_verification_code_error_hint: "Kode verifikasi salah",
                    account_verify_tips: "Karena alasan keamanan, sebuah kode verifikasi telah dikirim ke",
                    email_code_self_help: '1. Harap periksa  apakah alamat email Anda benar.</br>\r\n    2. Silakan cari "TikTok" di kotak masuk Anda. Kami akan  mengirimkan email dari "TikTok Ads".</br>\r\n    3. Harap periksa apakah email itu ada di folder Spam, Junk, Sampah, Item  Dihapus, atau Arsip.</br>\r\n    4. Jika tidak ada yang berhasil, silakan coba dengan email lain. Beberapa  penyedia email mungkin memblokir email kami.',
                    home_enter: "Kelola iklan",
                    input_error_msg_email: "Email tidak sesuai persyaratan. Silakan periksa lagi.",
                    input_error_msg_mobile: "Format nomor telepon  tidak valid.",
                    input_error_msg_mobile_code: "Masukkan 4 digit kode  verifikasi.",
                    input_placeholder_account: "Silakan masukkan  email atau nomor telepon Anda.",
                    input_placeholder_email: "Masukkan email",
                    input_placeholder_mobile: "Silakan masukkan  nomor telepon Anda",
                    input_placeholder_password: "Masukkan kata sandi",
                    item_label_account: "Email atau Telepon",
                    item_label_confirm_pwd: "Konfirmasi Kata Sandi",
                    item_label_email: "Alamat Email",
                    item_label_mobile: "Nomor Telepon",
                    item_label_pwd: "Kata Sandi",
                    item_label_verify_code: "Kode Verifikasi",
                    menu_email_code_login_back: "Kembali",
                    menu_mobile_code_login_back: "Kembali untuk mengubah nomor telepon",
                    menu_next: "Lanjut",
                    mobile_code_self_help: "1. Sila tunggu  beberapa detik untuk menerima kode 4 digit sebelum mencoba kembali. </br>\r\n2. Periksa apakah nomor telepon Anda benar.</br>\r\n3. Jika tidak ada yang berhasil, silakan coba dengan nomor telepon  lain. ",
                    notice_not_receive_code: "Belum menerima kode?",
                    official_disclaimer: "Ketentuan",
                    official_legal_statements: "Pernyataan Hukum",
                    official_privacy_title: "Kebijakan Privasi",
                    see_more: "Lihat selengkapnya",
                    shark_security_7: "Lingkungan jaringan Anda saat ini memiliki keamanan yang sangat berisiko. Silakan periksa jaringan Anda, dan coba lagi dalam 24 jam."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Leggere e accettare l'Accordo dell'utente e l'Informativa sulla privacy.",
                    account_check_email_hint: "L'indirizzo e-mail immesso non soddisfa i requisiti, ricontrollare.",
                    account_fetch_verify_code: "Ottieni codice di verifica",
                    account_forget_password: "Password dimenticata",
                    account_login: "Accedi",
                    account_login_email: "Accedi",
                    account_network_error_hint: "Errore di rete, riprovare pi霉 tardi.",
                    account_password_hint: "Immetti una password di 6-20 cifre.",
                    account_password_recomfirm_hint: "Le password immesse non corrispondono, ricontrollare.",
                    account_register: "Registra",
                    account_resend_email: "Invia di nuovo e-mail",
                    account_resend_mobile: "Invia codice",
                    account_reset_password: "Reimposta password",
                    account_reset_password_success_hint: "Password reimpostata correttamente, eseguire di nuovo l'accesso.",
                    account_send_email: "Invia e-mail",
                    account_send_mobile: "Invia codice",
                    account_send_success_check_hint: "Il codice di verifica 猫 stato inviato correttamente. Controllare l'e-mail.",
                    account_verification_code: "Codice di verifica",
                    account_verification_code_error_hint: "Codice di verifica non corretto",
                    account_verify_tips: "Per motivi di sicurezza, 猫 stato inviato un codice di verifica a",
                    email_code_self_help: '1. Controlla che il  tuo indirizzo e-mail sia corretto.</br>\r\n    2. Cerca "TikTok" nella casella della posta in arrivo. Invieremo  l\'e-mail da "TikTok Ads".</br>\r\n    3. Controlla se il messaggio 猫 stato collocato nella cartella di spam,  posta indesiderata, cestino, posta eliminata o archivio.</br>\r\n    4. Se il problema persiste, prova con un\'altra e-mail. Alcuni fornitori di  e-mail potrebbero bloccare le nostre e-mail.',
                    home_enter: "Gestisci annunci",
                    input_error_msg_email: "L'indirizzo e-mail immesso non soddisfa i requisiti, ricontrollare.",
                    input_error_msg_mobile: "Il formato del numero  di telefono non 猫 valido.",
                    input_error_msg_mobile_code: "Inserisci il codice  di verifica a 4 cifre.",
                    input_placeholder_account: "Inserisci la tua  e-mail o il tuo numero di telefono.",
                    input_placeholder_email: "Immetti indirizzo e-mail",
                    input_placeholder_mobile: "Inserisci il tuo  numero di telefono",
                    input_placeholder_password: "Immetti password",
                    item_label_account: "E-mail o telefono",
                    item_label_confirm_pwd: "Conferma password",
                    item_label_email: "Indirizzo e-mail",
                    item_label_mobile: "Numero di telefono",
                    item_label_pwd: "Password",
                    item_label_verify_code: "Codice di verifica",
                    menu_email_code_login_back: "Ritorna",
                    menu_mobile_code_login_back: "Torna indietro per modificare il numero di telefono",
                    menu_next: "Avanti",
                    mobile_code_self_help: "1. Attendi alcuni  secondi per ricevere il codice a 4 cifre prima di ritentare. </br>\r\n2. Controlla che il tuo numero di telefono sia corretto.</br>\r\n3. Se il problema persiste, prova con un altro numero di telefono. ",
                    notice_not_receive_code: "Non hai ricevuto il  codice?",
                    official_disclaimer: "Termini",
                    official_legal_statements: "Informativa legale",
                    official_privacy_title: "Informativa sulla privacy",
                    see_more: "Visualizza altro",
                    shark_security_7: "脠 stato rilevato un rischio elevato per la sicurezza nel tuo ambiente di rete attuale. Verifica la tua rete e riprova fra 24 ore."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "銉︺兗銈躲兗瑕忕磩銉汇儣銉┿偆銉愩偡銉笺儩銉銈枫兗銈掋仈纰鸿獚銇涓娿佸悓鎰忋仐銇︺亸銇犮仌銇勩",
                    account_check_email_hint: "鍏ュ姏銇曘倢銇熴儭銉笺儷銈銉夈儸銈广亴瑕佷欢銈掓簚銇熴仐銇︺亜銇俱仜銈撱傚啀搴︺仈纰鸿獚銇涓娿佸啀瑭﹁屻仐銇︺亸銇犮仌銇勩",
                    account_fetch_verify_code: "瑾嶈笺偝銉笺儔銈掑彇寰",
                    account_forget_password: "銉戙偣銉銉笺儔銈掑繕銈屻仧鍫村悎",
                    account_login: "銉銈般偆銉",
                    account_login_email: "銉銈般偆銉",
                    account_network_error_hint: "銉嶃儍銉堛儻銉笺偗銇銈ㄣ儵銉笺亴鐧虹敓銇椼伨銇椼仧銆傘仐銇般倝銇忋仐銇︺亱銈夊啀瑭﹁屻仐銇︺亸銇犮仌銇勩",
                    account_password_hint: "6-20鏂囧瓧銇銉戙偣銉銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    account_password_recomfirm_hint: "鍏ュ姏銇曘倢銇熴儜銈广儻銉笺儔銇屼竴鑷淬仐銇︺亜銇俱仜銈撱傘儜銈广儻銉笺儔銈掋仈纰鸿獚銇忋仩銇曘亜銆",
                    account_register: "鐧婚尣",
                    account_resend_email: "銉°兗銉鍐嶉佷俊",
                    account_resend_mobile: "瑾嶈笺偝銉笺儔銈掗佷俊",
                    account_reset_password: "銉戙偣銉銉笺儔鍐嶈ō瀹",
                    account_reset_password_success_hint: "銉戙偣銉銉笺儔銇鍐嶈ō瀹氥亴瀹屼簡銇椼伨銇椼仧銆傚啀搴︺儹銈般偆銉炽仐銇︺亸銇犮仌銇勩",
                    account_send_email: "銉°兗銉銈掗佷俊",
                    account_send_mobile: "瑾嶈笺偝銉笺儔銈掗併倠",
                    account_send_success_check_hint: "瑾嶈笺偝銉笺儔銇閫佷俊銇椼伨銇椼仧銆傘儭銉笺儷銉溿儍銈銈广倰銇旂⒑瑾嶃亸銇犮仌銇勩",
                    account_verification_code: "瑾嶈笺偝銉笺儔",
                    account_verification_code_error_hint: "瑾嶈笺偝銉笺儔銇屾ｃ仐銇忋亗銈娿伨銇涖倱",
                    account_verify_tips: "銈汇偔銉ャ儶銉嗐偅淇濊枫伄銇熴倎銆佽獚瑷笺偝銉笺儔銈掗佷俊銇椼伨銇椼仧",
                    action_send_code: "瑾嶈笺偝銉笺儔銈掗併倠",
                    code_pattern_valid: "瑾嶈笺偝銉笺儔銇锛栨併仹銇欍",
                    code_self_help: "1.銉°兗銉銈銉夈儸銈广亴姝ｃ仐銇勩亱銇┿亞銇嬨仈纰鸿獚銇忋仩銇曘亜銆</br>\r\n\r\n2.鍙椾俊銉溿儍銈銈广仹銆孴ikTok銆嶃倰妞滅储銇椼仸銇忋仩銇曘亜銆傜櫤淇¤呭悕銆孴ikTok Ads銆嶃仹銉°兗銉銈掋亰閫併倞銇椼伨銇欍</br>\r\n\r\n3.杩锋儜銉°兗銉銆併偞銉熺便佸墛闄ゆ笀銇裤偄銈ゃ儐銉犮併伨銇熴伅銈銉笺偒銈ゃ儢銉曘偐銉銉銈傘仈纰鸿獚銇忋仩銇曘亜銆</br>\r\n\r\n4.涓婅樸伄鏂规硶銇у晱椤屻亴瑙ｆ焙銇椼仾銇勫牬鍚堛佸垾銇銉°兗銉銇у啀瑭﹁屻仐銇︺亸銇犮仌銇勩備竴閮ㄣ伄銉°兗銉銉椼儹銉愩偆銉銇с伅寮婄ぞ銇岄佷俊銇欍倠銉°兗銉銇屻儢銉銉冦偗銇曘倢銇︺仐銇俱亞鍫村悎銇屻仈銇栥亜銇俱仚銆",
                    email_code_self_help: "1.銉°兗銉銈銉夈儸銈广亴姝ｃ仐銇勩亱銇┿亞銇嬨仈纰鸿獚銇忋仩銇曘亜銆</br>\r\n\r\n2.鍙椾俊銉溿儍銈銈广仹銆孴ikTok銆嶃倰妞滅储銇椼仸銇忋仩銇曘亜銆傜櫤淇¤呭悕銆孴ikTok Ads銆嶃仹銉°兗銉銈掋亰閫併倞銇椼伨銇欍</br>\r\n\r\n3.杩锋儜銉°兗銉銆併偞銉熺便佸墛闄ゆ笀銇裤偄銈ゃ儐銉犮併伨銇熴伅銈銉笺偒銈ゃ儢銉曘偐銉銉銇銇傘倠銇嬨仼銇嗐亱銇旂⒑瑾嶃亸銇犮仌銇勩</br>\r\n\r\n4.銆涓婅樸伄鏂规硶銇у晱椤屻亴瑙ｆ焙銇椼仾銇勫牬鍚堛佸垾銇銉°兗銉銈銉夈儸銈广仹鍐嶈│琛屻仐銇︺亸銇犮仌銇勩備竴閮ㄣ伄銉°兗銉銉椼儹銉愩偆銉銇с伅銆佸紛绀俱亴閫佷俊銇欍倠銉°兗銉銇屻儢銉銉冦偗銇曘倢銈嬪牬鍚堛亴銇斻仏銇勩伨銇欍",
                    home_enter: "搴冨憡绠＄悊",
                    input_error_msg_code: "銉°兗銉銇瑾嶈笺偝銉笺儔銈掋仈鍏ュ姏銇忋仩銇曘亜",
                    input_error_msg_email: "鍏ュ姏銇曘倢銇熴儭銉笺儷銈銉夈儸銈广亴瑕佷欢銈掓簚銇熴仐銇︺亜銇俱仜銈撱傘仈纰鸿獚銇忋仩銇曘亜銆",
                    input_error_msg_mobile: "鍏ュ姏銇曘倢銇熼浕瑭辩暘鍙枫伄褰㈠紡銇岀劇鍔广仹銇欍",
                    input_error_msg_mobile_code: "4妗併伄瑾嶈笺偝銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    input_placeholder_account: "銉°兗銉銈銉夈儸銈广伨銇熴伅闆昏┍鐣鍙枫倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆",
                    input_placeholder_confirm_pwd: "銉戙偣銉銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    input_placeholder_email: "銉°兗銉銈銉夈儸銈广倰鍏ュ姏銇椼仸銇忋仩銇曘亜",
                    input_placeholder_email_code: "瑾嶈笺偝銉笺儔銈掑叆鍔",
                    input_placeholder_mobile: "鎼哄腐闆昏┍鐣鍙枫倰鍏ュ姏銇椼仸銇忋仩銇曘亜銆",
                    input_placeholder_password: "銉戙偣銉銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇",
                    input_placeholder_pwd: "銉戙偣銉銉笺儔銇6锝20瀛楁暟銇цō瀹氥仐銇︺亸銇犮仌銇勩",
                    input_placeholder_verify_code: "瑾嶈笺偝銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    item_label_account: "銉°兗銉銈銉夈儸銈广伨銇熴伅闆昏┍鐣鍙",
                    item_label_confirm_pwd: "銉戙偣銉銉笺儔銇纰鸿獚",
                    item_label_email: "銉°兗銉銈銉夈儸銈",
                    item_label_mobile: "鎼哄腐闆昏┍鐣鍙",
                    item_label_pwd: "銉戙偣銉銉笺儔",
                    item_label_verify_code: "瑾嶈笺偝銉笺儔",
                    menu_email_code_login_back: "鐧婚尣銇曘倢銇熴儭銉笺儷銈銉夈儸銈广伄澶夋洿銇鎴汇倠",
                    menu_mobile_code_login_back: "鎼哄腐闆昏┍鐣鍙枫伄澶夋洿銇鎴汇倠",
                    menu_next: "娆°伕",
                    mobile_code_pattern_valid: "锛旀併伄瑾嶈笺偝銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    mobile_code_self_help: "1.4妗併伄銈炽兗銉夈倰鍙椾俊銇欍倠銇俱仹鏁扮掑緟銇ｃ仸銇嬨倝銆佸啀瑭﹁屻仐銇︺亸銇犮仌銇勩 </br>\r\n\r\n2.闆昏┍鐣鍙枫亴姝ｃ仐銇勩亾銇ㄣ倰銇旂⒑瑾嶃亸銇犮仌銇勩</br>\r\n\r\n3.涓婅樸伄鏂规硶銇у晱椤屻亴瑙ｆ焙銇椼仾銇勫牬鍚堛佸垾銇闆昏┍鐣鍙枫仹鍐嶈│琛屻仐銇︺亸銇犮仌銇勩",
                    notice_not_receive_code: "瑾嶈笺偝銉笺儔銈掑彈銇戝彇銇ｃ仸銇勩伨銇涖倱銇嬶紵",
                    official_disclaimer: "瑕忕磩",
                    official_legal_statements: "娉曠殑澹版槑",
                    official_privacy_title: "銉椼儵銈ゃ儛銈枫兗銉濄儶銈枫兗",
                    password_pattern_valid: "銉戙偣銉銉笺儔銇6锝20瀛楁暟銇цō瀹氥仐銇︺亸銇犮仌銇勩",
                    password_required: "銉戙偣銉銉笺儔銈掑叆鍔涖仐銇︺亸銇犮仌銇勩",
                    protocol_and_guideline: '<a href="/i18n/official/policy/disclaimer" target="_blank">TikTok Ads銇鍒╃敤瑕忕磩</a>銇鍚屾剰銇勩仧銇犮亼銈嬪牬鍚堛伅銇撱仭銈夈倰銈銉銉冦偗銇椼佸紛绀<a href="/i18n/official/policy/privacy" target="_blank">銉椼儵銈ゃ儛銈枫兗銉濄儶銈枫兗</a>銈掋仈纰鸿獚銇忋仩銇曘亜銆',
                    register: "鐧婚尣",
                    repeatPwd_required: "銉戙偣銉銉笺儔銈掔⒑瑾嶃仐銇︺亸銇犮仌銇勩",
                    search_area_code_placeholder: "鍥藉悕銇俱仧銇鍥藉垾銈炽兗銉夈倰妞滅储",
                    see_more: "銈傘仯銇ㄨ嬨倠",
                    shark_security_7: "銇婂㈡樸伄鐝惧湪銇銉嶃儍銉堛儻銉笺偗鐠板冦伀銇澶с亶銇銈汇偔銉ャ儶銉嗐偅銉銈广偗銇屽瓨鍦ㄣ仐銇俱仚銆傘儘銉冦儓銉銉笺偗鐠板冦倰銇旂⒑瑾嶃伄涓娿24鏅傞枔浠ュ唴銇鍐嶈│琛屻仐銇︺亸銇犮仌銇勩",
                    text_lark_login_tips: "绀惧摗銉銈般偆銉冲皞鐢"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "鞚挫毄鞎疥磤瓿 臧滌澑鞝曤炒 觳橂Μ氚╈龚鞚 頇曥澑 頃橃嫚 頉 霃欖潣頃橃嫮鞁滌槫",
                    account_check_email_hint: "鞚措旍澕 欤检唽臧 臁瓣贝鞐 毵烄 鞎婌姷雼堧嫟.雼れ嫓 頇曥澑頃橃嫓旮 氚旊瀺雼堧嫟.",
                    account_fetch_verify_code: "鞚胳濎綌霌 氚涥赴",
                    account_forget_password: "牍勲皜氩堩樃 攵勳嫟",
                    account_login: "搿滉犯鞚",
                    account_login_email: "搿滉犯鞚",
                    account_network_error_hint: "雱ろ姼鞗岉伂 鞓る, 鞛犾嫓 頉 雼れ嫓 鞁滊弰頃橃嫮鞁滌槫",
                    account_password_hint: "牍勲皜氩堩樃電 6-20旮鞛 鞚措偞鞐鞎 頃╇媹雼",
                    account_password_recomfirm_hint: "鞛呺牓頃 牍勲皜氩堩樃臧 鞚检箻頃橃 鞎婌姷雼堧嫟. 雼れ嫓 頇曥澑頃橃嫓旮 氚旊瀺雼堧嫟.",
                    account_register: "霌彪",
                    account_resend_email: "鞚措旍澕 鞛氚滌啞",
                    account_resend_mobile: "旖旊摐 氚滌啞",
                    account_reset_password: "牍勲皜氩堩樃 鞛靹れ爼",
                    account_reset_password_success_hint: "牍勲皜氩堩樃毳 鞛靹れ爼頃橃榾鞀惦媹雼, 雼れ嫓 搿滉犯鞚疙晿鞁鞁滌槫.",
                    account_send_email: "鞚措旍澕 氚滌啞",
                    account_send_mobile: "旖旊摐 氚滌啞",
                    account_send_success_check_hint: "鞚胳濎綌霌滉皜 鞝勳啞霅橃棃鞀惦媹雼. 鞚措旍澕鞚 頇曥澑頃橃嫓旮 氚旊瀺雼堧嫟.",
                    account_verification_code: "鞚胳濎綌霌",
                    account_verification_code_error_hint: "鞚胳濍矆順戈皜 鞝曧檿頃橃 鞎婌姷雼堧嫟",
                    account_verify_tips: "氤挫晥靸侅潣 鞚挫湢搿 鞚胳濎綌霌滊ゼ ____(鞙)搿 氚滌啞頃╇媹雼",
                    email_code_self_help: '1. 鞚措旍澕 欤检唽臧 鞓氚旊ジ歆  頇曥澑頃橃嫮鞁滌槫.</br>\r\n    2. 氅旍澕 靾橃嫚頃鞐愳劀 "TikTok"鞙茧 瓴靸夗晿鞁鞁滌槫. 氚滌嫚鞛 "TikTok Ads"搿 鞚措旍澕鞚  氤措偞霌滊诫媹雼.</br>\r\n    3. 鞀ろ尭, 鞝曧伂, 頊挫韱, 歆鞖 韼胳頃, 氤搓磤 韽措崝鞐 鞛堧姅歆 頇曥澑頃橃嫮鞁滌槫.</br>\r\n    4. 彀眷潉 靾 鞐嗠姅 瓴届毎, 雼るジ 鞚措旍澕搿 鞁滊弰頃橃嫮鞁滌槫. 鞚措旍澕 靹滊箘鞀 鞝滉车鞛愱皜 雼轨偓鞚 鞚措旍澕鞚 彀雼頄堨潉 靾 鞛堨姷雼堧嫟.',
                    home_enter: "甏戧碃 甏毽",
                    input_error_msg_code: "鞚措旍澕 鞚胳濍矆順鸽姅 牍勳泴霊 靾 鞐嗢姷雼堧嫟",
                    input_error_msg_email: "鞚措旍澕 欤检唽臧 臁瓣贝鞐 毵烄 鞎婌姷雼堧嫟.雼れ嫓 頇曥澑頃橃嫓旮 氚旊瀺雼堧嫟.",
                    input_error_msg_mobile: "鞛橂浑悳 鞝勴檾氩堩樃 順曥嫕鞛呺媹雼.",
                    input_error_msg_mobile_code: "4鞛愲Μ 鞚胳 旖旊摐毳 鞛呺牓頃橃劯鞖.",
                    input_placeholder_account: "鞚措旍澕 霕愲姅 鞝勴檾氩堩樃毳 鞛呺牓頃橃劯鞖.",
                    input_placeholder_email: "鞚措旍澕 欤检唽毳 鞛呺牓頃橃嫮鞁滌槫",
                    input_placeholder_email_code: "鞚措旍澕 鞚胳濍矆順鸽ゼ 鞛呺牓頃 欤检劯鞖",
                    input_placeholder_mobile: "鞝勴檾氩堩樃毳 鞛呺牓頃橃劯鞖.",
                    input_placeholder_password: "牍勲皜氩堩樃毳 鞛呺牓頃橃嫮鞁滌槫",
                    item_label_account: "鞚措旍澕 霕愲姅 鞝勴檾氩堩樃",
                    item_label_confirm_pwd: "牍勲皜氩堩樃 頇曥澑",
                    item_label_email: "鞚措旍澕 欤检唽",
                    item_label_mobile: "鞝勴檾氩堩樃",
                    item_label_pwd: "牍勲皜氩堩樃",
                    item_label_verify_code: "鞚胳 旖旊摐",
                    menu_email_code_login_back: "鞚措旍澕 欤检唽 靾橃爼鞙茧 霃岇晞臧旮",
                    menu_mobile_code_login_back: "鞝勴檾 氩堩樃 氤瓴届溂搿 霃岇晞臧旮",
                    menu_next: "雼れ潓 雼瓿",
                    mobile_code_self_help: "1. 雼れ嫓 鞁滊弰頃橁赴 鞝勳棎 氇 齑堧  旮半嫟毽氅 4鞛愲Μ 旖旊摐毳 氚涭潉 靾 鞛堨姷雼堧嫟. </br>\r\n2. 鞝勴檾氩堩樃臧 毵炿姅歆 頇曥澑頃橃劯鞖.</br>\r\n3. 氚涭潉 靾 鞐嗠姅 瓴届毎, 雼るジ 鞝勴檾氩堩樃搿 鞁滊弰頃橃嫮鞁滌槫. ",
                    notice_not_receive_code: "旖旊摐毳 氇 氚涭溂靺雮橃殧?",
                    official_disclaimer: "臁绊暛",
                    official_legal_statements: "氩曥爜 瓿犾靷頃",
                    official_privacy_title: "臧滌澑鞝曤炒 觳橂Μ氚╈龚",
                    see_more: "鞛愳劯頌 鞎岇晞氤搓赴",
                    shark_security_7: "順勳灛 雱ろ姼鞗岉伂 頇橁步鞚 雴掛潃 氤挫晥 鞙勴棙鞐 雲胳稖霅橃柎 鞛堨姷雼堧嫟. 雱ろ姼鞗岉伂毳 頇曥澑頃 雼れ潓 24鞁滉皠 雮挫棎 雼れ嫓 鞁滊弰頃橃嫮鞁滌槫."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Sila baca dan bersetuju dengan Perjanjian Pengguna dan Dasar Privasi.",
                    account_check_email_hint: "Alamat e-mel yang dimasukkan tidak memenuhi keperluan, sila periksa semula",
                    account_fetch_verify_code: "Dapatkan Kod Pengesahan",
                    account_forget_password: "Lupa Kata Laluan",
                    account_login: "Log Masuk",
                    account_login_email: "Log Masuk",
                    account_network_error_hint: "Ralat rangkaian, sila cuba lagi kemudian.",
                    account_password_hint: "Masukkan kata laluan antara 6-20 aksara.",
                    account_password_recomfirm_hint: "Kata laluan yang dimasukkan tidak sepadan, sila periksa semula.",
                    account_register: "Daftar",
                    account_resend_email: "Hantar Semula E-mel",
                    account_resend_mobile: "Hantar Kod",
                    account_reset_password: "Tetapkan Semula Kata Laluan",
                    account_reset_password_success_hint: "Kata laluan berjaya ditetapkan semula, sila log masuk semula.",
                    account_send_email: "Hantar E-mel",
                    account_send_mobile: "Hantar Kod",
                    account_send_success_check_hint: "Kod pengesahan berjaya dihantar. Sila periksa e-mel anda.",
                    account_verification_code: "Kod Pengesahan",
                    account_verification_code_error_hint: "Kod pengesahan tidak betul",
                    account_verify_tips: "Atas sebab keselamatan, kod pengesahan telah dihantar kepada",
                    email_code_self_help: '1. Sila pastikan  bahawa alamat e-mel anda adalah betul.</br>\r\n    2. Sila cari "TikTok" dalam peti masuk anda. Kami akan menghantar  e-mel daripada "TikTok Ads".</br>\r\n    3. Sila periksa sekiranya ia berada dalam folder Spam, Remeh, Tong Sampah,  Item Dipadamkan atau Arkib anda.</br>\r\n    4. Sekiranya tiada yang berhasil, sila cuba dengan e-mel yang berlainan.  Beberapa penyedia e-mel mungkin menyekat e-mel kami.',
                    home_enter: "Urus Iklan",
                    input_error_msg_email: "Alamat e-mel yang dimasukkan tidak memenuhi keperluan, sila periksa semula",
                    input_error_msg_mobile: "Format nombor telefon  tidak sah.",
                    input_error_msg_mobile_code: "Sila masukkan kod  pengesahan 4 digit.",
                    input_placeholder_account: "Sila masukkan e-mel  atau nombor telefon anda.",
                    input_placeholder_email: "Masukkan Alamat E-mel",
                    input_placeholder_mobile: "Sila masukkan nombor  telefon anda.",
                    input_placeholder_password: "Masukkan Kata Laluan",
                    item_label_account: "E-mel atau Telefon",
                    item_label_confirm_pwd: "Sahkan Kata Laluan",
                    item_label_email: "Alamat E-mel",
                    item_label_mobile: "Nombor Telefon",
                    item_label_pwd: "Kata laluan",
                    item_label_verify_code: "Kod Pengesahan",
                    menu_email_code_login_back: "Kembali",
                    menu_mobile_code_login_back: "Kembali untuk mengubah nombor telefon",
                    menu_next: "Seterusnya",
                    mobile_code_self_help: "1. Sila tunggu  beberapa minit untuk menerima kod 4 digit sebelum mencuba sekali lagi.</br> \r\n2. Sila pastikan bahawa nombor telefon anda adalah betul.</br>\r\n3. Sekiranya tiada yang berhasil, sila cuba dengan nombor telefon yang  berlainan. ",
                    notice_not_receive_code: "Tidak menerima kod?",
                    official_disclaimer: "Syarat",
                    official_legal_statements: "Kenyataan Perundangan",
                    official_privacy_title: "Dasar Privasi",
                    see_more: "Lihat selanjutnya",
                    shark_security_7: "Persekitaran rangkaian semasa anda mempunyai risiko keselamatan yang tinggi. Sila periksa rangkaian anda, dan cuba lagi dalam masa 24 jam."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "袨蟹薪邪泻芯屑褜褌械褋褜 褋 袩芯谢褜蟹芯胁邪褌械谢褜褋泻懈屑 褋芯谐谢邪褕械薪懈械屑 懈 袩芯谢懈褌懈泻芯泄 泻芯薪褎懈写械薪褑懈邪谢褜薪芯褋褌懈 懈 锌芯写褌胁械褉写懈褌械 褋胁芯械 褋芯谐谢邪褋懈械 褋 褍褋谢芯胁懈褟屑懈.",
                    account_check_email_hint: "校泻邪蟹邪薪薪褘泄 邪写褉械褋 褝谢.聽锌芯褔褌褘 薪械 褋芯芯褌胁械褌褋褌胁褍械褌 褌褉械斜芯胁邪薪懈褟屑. 袩褉芯胁械褉褜褌械 写邪薪薪褘械.",
                    account_fetch_verify_code: "袩芯谢褍褔懈褌褜 泻芯写 锌芯写褌胁械褉卸写械薪懈褟",
                    account_forget_password: "袟邪斜褘谢懈 锌邪褉芯谢褜",
                    account_login: "袙褏芯写",
                    account_login_email: "袙褏芯写",
                    account_network_error_hint: "袨褕懈斜泻邪 褋械褌懈. 袩芯胁褌芯褉懈褌械 锌芯锌褘褌泻褍 锌芯蟹卸械.",
                    account_password_hint: "袙胁械写懈褌械 锌邪褉芯谢褜. 袩邪褉芯谢褜 写芯谢卸械薪 褋芯写械褉卸邪褌褜 芯褌 6 写芯 20聽褋懈屑胁芯谢芯胁.",
                    account_password_recomfirm_hint: "袙胁械写械薪薪褘械 锌邪褉芯谢懈 薪械 褋芯胁锌邪写邪褞褌. 袩褉芯胁械褉褜褌械 写邪薪薪褘械.",
                    account_register: "袪械谐懈褋褌褉邪褑懈褟",
                    account_resend_email: "袨褌锌褉邪胁懈褌褜 褝谢械泻褌褉芯薪薪芯械 褋芯芯斜褖械薪懈械 锌芯胁褌芯褉薪芯",
                    account_resend_mobile: "袨褌锌褉邪胁懈褌褜 泻芯写",
                    account_reset_password: "小斜褉芯褋懈褌褜 锌邪褉芯谢褜",
                    account_reset_password_success_hint: "袩邪褉芯谢褜 褍褋锌械褕薪芯 褋斜褉芯褕械薪. 袙褘锌芯谢薪懈褌械 胁褏芯写 械褖械 褉邪蟹.",
                    account_send_email: "袨褌锌褉邪胁懈褌褜 褝谢械泻褌褉芯薪薪芯械 褋芯芯斜褖械薪懈械",
                    account_send_mobile: "袨褌锌褉邪胁懈褌褜 泻芯写",
                    account_send_success_check_hint: "袣芯写 锌芯写褌胁械褉卸写械薪懈褟 芯褌锌褉邪胁谢械薪. 袩褉芯胁械褉褜褌械 褝谢械泻褌褉芯薪薪褍褞 锌芯褔褌褍.",
                    account_verification_code: "袣芯写 锌芯写褌胁械褉卸写械薪懈褟",
                    account_verification_code_error_hint: "袧械胁械褉薪褘泄 泻芯写 锌芯写褌胁械褉卸写械薪懈褟",
                    account_verify_tips: "袙 褑械谢褟褏 斜械蟹芯锌邪褋薪芯褋褌懈 泻芯写 锌芯写褌胁械褉卸写械薪懈褟 芯褌锌褉邪胁谢械薪:",
                    email_code_self_help: "1. 校斜械写懈褌械褋褜, 褔褌芯  褍泻邪蟹邪薪 锌褉邪胁懈谢褜薪褘泄 邪写褉械褋 褝谢械泻褌褉芯薪薪芯泄 锌芯褔褌褘.</br>\r\n    2. 袧邪泄写懈褌械 锌懈褋褜屑芯 锌芯 泻谢褞褔械胁芯屑褍 褋谢芯胁褍 芦TikTok禄 胁 锌邪锌泻械 芦袙褏芯写褟褖懈械禄. 袦褘  芯褌锌褉邪胁懈屑 锌懈褋褜屑芯 褋 锌芯褔褌芯胁芯谐芯 褟褖懈泻邪 芦TikTok Ads禄.</br>\r\n    3. 袩褉芯胁械褉褜褌械 锌邪锌泻懈 芦小锌邪屑禄, 芦袧械卸械谢邪褌械谢褜薪邪褟 锌芯褔褌邪禄, 芦袣芯褉蟹懈薪邪禄, 芦校写邪谢械薪薪褘械禄 懈  芦袗褉褏懈胁禄.</br>\r\n    4. 袝褋谢懈 锌懈褋褜屑芯 薪械 锌褉懈褏芯写懈褌, 锌芯锌褉芯斜褍泄褌械 懈褋锌芯谢褜蟹芯胁邪褌褜 写褉褍谐芯泄 邪写褉械褋  褝谢械泻褌褉芯薪薪芯泄 锌芯褔褌褘. 袧械泻芯褌芯褉褘械 锌芯褋褌邪胁褖懈泻懈 褍褋谢褍谐 褝谢械泻褌褉芯薪薪芯泄 锌芯褔褌褘 屑芯谐褍褌  斜谢芯泻懈褉芯胁邪褌褜 薪邪褕懈 锌懈褋褜屑邪.",
                    home_enter: "校锌褉邪胁谢械薪懈械 褉械泻谢邪屑芯泄",
                    input_error_msg_email: "校泻邪蟹邪薪薪褘泄 邪写褉械褋 褝谢.聽锌芯褔褌褘 薪械 褋芯芯褌胁械褌褋褌胁褍械褌 褌褉械斜芯胁邪薪懈褟屑. 袩褉芯胁械褉褜褌械 写邪薪薪褘械.",
                    input_error_msg_mobile: "袧械写芯锌褍褋褌懈屑褘泄 褎芯褉屑邪褌  薪芯屑械褉邪 褌械谢械褎芯薪邪.",
                    input_error_msg_mobile_code: "袙胁械写懈褌械 4-蟹薪邪褔薪褘泄  锌褉芯胁械褉芯褔薪褘泄 泻芯写.",
                    input_placeholder_account: "袙胁械写懈褌械 邪写褉械褋  褝谢械泻褌褉芯薪薪芯泄 锌芯褔褌褘 懈谢懈 薪芯屑械褉 褌械谢械褎芯薪邪.",
                    input_placeholder_email: "袙胁械写懈褌械 邪写褉械褋 褝谢.聽锌芯褔褌褘",
                    input_placeholder_mobile: "袙胁械写懈褌械 薪芯屑械褉  褌械谢械褎芯薪邪",
                    input_placeholder_password: "袙胁械写懈褌械 锌邪褉芯谢褜",
                    item_label_account: "袗写褉械褋 褝谢械泻褌褉芯薪薪芯泄  锌芯褔褌褘 懈谢懈 褌械谢械褎芯薪",
                    item_label_confirm_pwd: "袩芯写褌胁械褉写懈褌械 锌邪褉芯谢褜",
                    item_label_email: "袗写褉械褋 褝谢械泻褌褉芯薪薪芯泄  锌芯褔褌褘",
                    item_label_mobile: "袧芯屑械褉 褌械谢械褎芯薪邪",
                    item_label_pwd: "袩邪褉芯谢褜",
                    item_label_verify_code: "袩褉芯胁械褉芯褔薪褘泄 泻芯写",
                    menu_email_code_login_back: "袧邪蟹邪写",
                    menu_mobile_code_login_back: "袙械褉薪懈褌械褋褜 薪邪蟹邪写, 褔褌芯斜褘 懈蟹屑械薪懈褌褜 薪芯屑械褉 褌械谢械褎芯薪邪",
                    menu_next: "袛邪谢械械",
                    mobile_code_self_help: "1. 效械褉械蟹 薪械褋泻芯谢褜泻芯  褋械泻褍薪写 胁褘 锌芯谢褍褔懈褌械 4-蟹薪邪褔薪褘泄 泻芯写. 袝褋谢懈 泻芯写 薪械 锌褉懈褏芯写懈褌, 锌芯胁褌芯褉懈褌械 锌芯锌褘褌泻褍. </br>\r\n2. 校斜械写懈褌械褋褜, 褔褌芯 褍泻邪蟹邪薪 锌褉邪胁懈谢褜薪褘泄 薪芯屑械褉 褌械谢械褎芯薪邪.</br>\r\n3. 袝褋谢懈 泻芯写 薪械 锌褉懈褏芯写懈褌, 锌芯锌褉芯斜褍泄褌械 懈褋锌芯谢褜蟹芯胁邪褌褜 写褉褍谐芯泄 薪芯屑械褉 褌械谢械褎芯薪邪. ",
                    notice_not_receive_code: "袧械 锌芯谢褍褔懈谢懈 泻芯写?",
                    official_disclaimer: "校褋谢芯胁懈褟",
                    official_legal_statements: "袟邪褟胁谢械薪懈械",
                    official_privacy_title: "袩芯谢懈褌懈泻邪 泻芯薪褎懈写械薪褑懈邪谢褜薪芯褋褌懈",
                    see_more: "袪邪蟹胁械褉薪褍褌褜",
                    shark_security_7: "袙邪褕械 褌械泻褍褖械械 褋械褌械胁芯械 芯泻褉褍卸械薪懈械 薪械斜械蟹芯锌邪褋薪芯. 袩褉芯胁械褉褜褌械 锌芯写泻谢褞褔械薪懈械 泻 褋械褌懈 懈 锌芯胁褌芯褉懈褌械 锌芯锌褘褌泻褍 褔械褉械蟹 24 褔邪褋邪."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "喔佮福喔膏笓喔侧腑喙堗覆喔權箒喔ム赴喔⑧复喔權涪喔喔∴競喙夃腑喔曕竵喔ム竾喔溹腹喙夃箖喔娻箟喔囙覆喔權箒喔ム赴喙喔囙阜喙堗腑喔權箘喔傕竸喔о覆喔∴箑喔涏箛喔權釜喙堗抚喔權笗喔编抚",
                    account_check_email_hint: "喔喔掂箑喔∴弗喙屶箘喔∴箞喔栢腹喔佮笗喙夃腑喔 喔佮福喔膏笓喔侧笗喔｀抚喔堗釜喔喔",
                    account_fetch_verify_code: "喔｀副喔氞福喔喔编釜喔⑧阜喔權涪喔编笝",
                    account_forget_password: "喔ム阜喔∴福喔喔编釜喔溹箞喔侧笝",
                    account_login: "喙喔傕箟喔侧釜喔灌箞喔｀赴喔氞笟",
                    account_login_email: "喙喔傕箟喔侧釜喔灌箞喔｀赴喔氞笟",
                    account_network_error_hint: "喙喔勦福喔粪腑喔傕箞喔侧涪喔溹复喔斷笡喔佮笗喔 喔佮福喔膏笓喔侧弗喔喔囙箖喔喔∴箞喔喔掂竵喔勦福喔编箟喔",
                    account_password_hint: "喔｀斧喔编釜喔溹箞喔侧笝喔勦抚喔｀浮喔 6-20 喔曕副喔о腑喔编竵喔┼福",
                    account_password_recomfirm_hint: "喙冟釜喙堗福喔喔编釜喔溹箞喔侧笝喔喔喔囙竸喔｀副喙夃竾喙勦浮喙堗笗喔｀竾喔佮副喔 喔佮福喔膏笓喔侧笗喔｀抚喔堗釜喔喔",﻿
                    account_register: "喔ム竾喔椸赴喙喔氞傅喔⑧笝",
                    account_resend_email: "喔喙堗竾喔喔掂箑喔∴弗喙屶腑喔掂竵喔勦福喔编箟喔",
                    account_resend_mobile: "喔喙堗竾喔｀斧喔编釜",
                    account_reset_password: "喔曕副喙夃竾喔｀斧喔编釜喔溹箞喔侧笝喙冟斧喔∴箞",
                    account_reset_password_success_hint: "喔曕副喙夃竾喔｀斧喔编釜喔溹箞喔侧笝喙冟斧喔∴箞喔喔赤箑喔｀箛喔 喔佮福喔膏笓喔侧箑喔傕箟喔侧釜喔灌箞喔｀赴喔氞笟喔喔掂竵喔勦福喔编箟喔",
                    account_send_email: "喔喙堗竾喔喔掂箑喔∴弗喙",
                    account_send_mobile: "喔喙堗竾喔｀斧喔编釜",
                    account_send_success_check_hint: "喔喙堗竾喙勦笡喙佮弗喙夃抚 喔佮福喔膏笓喔侧笗喔｀抚喔堗釜喔喔氞腑喔掂箑喔∴弗喙屶競喔喔囙竸喔膏笓",
                    account_verification_code: "喔｀斧喔编釜喔⑧阜喔權涪喔编笝",
                    account_verification_code_error_hint: "喔｀斧喔编釜喔⑧阜喔權涪喔编笝喙勦浮喙堗笘喔灌竵喔曕箟喔喔",
                    account_verify_tips: "喙喔炧阜喙堗腑喔勦抚喔侧浮喔涏弗喔喔斷笭喔编涪 喔｀赴喔氞笟喔堗付喔囙釜喙堗竾喔｀斧喔编釜喔⑧阜喔權涪喔编笝喙勦笡喔⑧副喔",
                    email_code_self_help: '1.  喙傕笡喔｀笖喔曕福喔о笀喔喔喔氞抚喙堗覆喔椸傅喙堗腑喔⑧腹喙堗腑喔掂箑喔∴弗喔傕腑喔囙竸喔膏笓喔栢腹喔佮笗喙夃腑喔</br>\r\n    2. 喙傕笡喔｀笖喔勦箟喔權斧喔侧竸喔赤抚喙堗覆 "TikTok" 喙冟笝喔佮弗喙堗腑喔囙笀喔斷斧喔∴覆喔⑧競喔喔囙竸喔膏笓 喔椸覆喔 鈥淭ikTok Ads鈥  喔堗赴喔斷赋喙喔權复喔權竵喔侧福喔喙堗竾喔喔掂箑喔∴弗喙勦笡喙冟斧喙</br>\r\n    3. 喙傕笡喔｀笖喔曕福喔о笀喔喔喔氞笀喔斷斧喔∴覆喔⑧箖喔權箓喔熰弗喙喔斷腑喔｀箤喔喙佮笡喔 喔栢副喔囙競喔⑧赴 喔｀覆喔⑧竵喔侧福喔椸傅喙堗笘喔灌竵喔ム笟  喔喔｀阜喔喙喔佮箛喔氞笘喔侧抚喔</br>\r\n    4. 喔喔侧竵喔⑧副喔囙箘喔∴箞喙勦笖喙夃笢喔 喙傕笡喔｀笖喔ム腑喔囙腑喔掂箑喔∴弗喔喔粪箞喔  喔溹腹喙夃箖喔喙夃笟喔｀复喔佮覆喔｀腑喔掂箑喔∴弗喔氞覆喔囙釜喙堗抚喔權腑喔侧笀喔氞弗喙囙腑喔佮腑喔掂箑喔∴弗喔傕腑喔囙箑喔｀覆',
                    home_enter: "喔堗副喔斷竵喔侧福喙傕竼喔┼笓喔",
                    input_error_msg_email: "喔喔掂箑喔∴弗喙屶箘喔∴箞喔栢腹喔佮笗喙夃腑喔 喔佮福喔膏笓喔侧笗喔｀抚喔堗釜喔喔",
                    input_error_msg_mobile: "喔｀腹喔涏箒喔氞笟喔喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤喙勦浮喙堗笘喔灌竵喔曕箟喔喔",
                    input_error_msg_mobile_code: "喙傕笡喔｀笖喙冟釜喙堗福喔喔编釜喔⑧阜喔權涪喔编笝 4  喔喔ム副喔",
                    input_placeholder_account: "喙傕笡喔｀笖喙冟釜喙堗腑喔掂箑喔∴弗喔喔｀阜喔喔喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤喔傕腑喔囙竸喔膏笓",
                    input_placeholder_email: "喔佮福喔膏笓喔侧箖喔喙堗腑喔掂箑喔∴弗喙",
                    input_placeholder_mobile: "喙傕笡喔｀笖喙冟釜喙堗斧喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤喔傕腑喔囙竸喔膏笓",
                    input_placeholder_password: "喔佮福喔膏笓喔侧箖喔喙堗福喔喔编釜喔溹箞喔侧笝",
                    item_label_account: "喔喔掂箑喔∴弗喔喔｀阜喔喙傕笚喔｀辅喔编笧喔椸箤",
                    item_label_confirm_pwd: "喔⑧阜喔權涪喔编笝喔｀斧喔编釜喔溹箞喔侧笝",
                    item_label_email: "喔椸傅喙堗腑喔⑧腹喙堗腑喔掂箑喔∴弗",
                    item_label_mobile: "喔喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤",
                    item_label_pwd: "喔｀斧喔编釜喔溹箞喔侧笝",
                    item_label_verify_code: "喔｀斧喔编釜喔⑧阜喔權涪喔编笝",
                    menu_email_code_login_back: "喔⑧箟喔喔權竵喔ム副喔",
                    menu_mobile_code_login_back: "喔⑧箟喔喔權竵喔ム副喔氞箑喔炧阜喙堗腑喙喔涏弗喔掂箞喔⑧笝喔喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤",
                    menu_next: "喔曕箞喔喙勦笡",
                    mobile_code_self_help: "1.  喙傕笡喔｀笖喔｀腑喔喔编竵喔勦福喔灌箞喙喔炧阜喙堗腑喔｀副喔氞福喔喔编釜 4 喔喔ム副喔佮竵喙堗腑喔權弗喔喔囙腑喔掂竵喔勦福喔编箟喔 </br>\r\n2. 喔曕福喔о笀喔喔喔氞抚喙堗覆喔喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤喔傕腑喔囙竸喔膏笓喔栢腹喔佮笗喙夃腑喔 </br>\r\n3. 喔喔侧竵喔⑧副喔囙箘喔∴箞喙勦笖喙夃笢喔 喙傕笡喔｀笖喔ム腑喔囙斧喔∴覆喔⑧箑喔ム競喙傕笚喔｀辅喔编笧喔椸箤喔喔粪箞喔 </br>",
                    notice_not_receive_code: "喙勦浮喙堗箘喔斷箟喔｀副喔氞福喔喔编釜喙冟笂喙堗斧喔｀阜喔喙勦浮喙?",
                    official_disclaimer: "喙喔囙阜喙堗腑喔權箘喔",
                    official_legal_statements: "喔傕箟喔喔佮赋喔喔權笖喔椸覆喔囙竵喔庎斧喔∴覆喔",
                    official_privacy_title: "喔權箓喔⑧笟喔侧涪喔勦抚喔侧浮喙喔涏箛喔權釜喙堗抚喔權笗喔编抚",
                    see_more: "喔斷腹喙喔炧复喙堗浮喙喔曕复喔",
                    shark_security_7: "喔喔犩覆喔炧箒喔о笖喔ム箟喔喔∴箑喔勦福喔粪腑喔傕箞喔侧涪喔涏副喔堗笀喔膏笟喔编笝喔傕腑喔囙竸喔膏笓喔∴傅喔勦抚喔侧浮喙喔喔掂箞喔⑧竾喔斷箟喔侧笝喔勦抚喔侧浮喔涏弗喔喔斷笭喔编涪喔喔灌竾 喙傕笡喔｀笖喔曕福喔о笀喔喔喔氞箑喔勦福喔粪腑喔傕箞喔侧涪喔傕腑喔囙竸喔膏笓 喙佮弗喙夃抚喔ム腑喔囙腑喔掂竵喔勦福喔编箟喔囙箖喔 24 喔娻副喙堗抚喙傕浮喔"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "L眉tfen Kullan谋c谋 S枚zle艧mesi ve Gizlilik Politikas谋n谋 okuyun ve kabul edin.",
                    account_check_email_hint: "E-posta adresi gereksinimleri kar艧谋lam谋yor, l眉tfen tekrar deneyin",
                    account_fetch_verify_code: "Do臒rulama Kodu Al",
                    account_forget_password: "Parolam谋 Unuttum",
                    account_login: "Giri艧 Yap",
                    account_login_email: "Giri艧 Yap",
                    account_network_error_hint: "A臒 hatas谋, l眉tfen tekrar deneyin.",
                    account_password_hint: "6 ila 20 karakterli bir parola girin",
                    account_password_recomfirm_hint: "Girilen parolalar e艧le艧miyor, l眉tfen tekrar kontrol edin.",
                    account_register: "Kaydol",
                    account_resend_email: "E-Postay谋 Tekrar G枚nder",
                    account_resend_mobile: "Kodu G枚nder",
                    account_reset_password: "Parolay谋 S谋f谋rla",
                    account_reset_password_success_hint: "Parola s谋f谋rlama ba艧ar谋l谋, l眉tfen tekrar giri艧 yap谋n.",
                    account_send_email: "E-Posta G枚nder",
                    account_send_mobile: "Kodu G枚nder",
                    account_send_success_check_hint: "Do臒rulama kodu ba艧ar谋yla g枚nderildi. L眉tfen e-postan谋z谋 kontrol edin.",
                    account_verification_code: "Do臒rulama Kodu",
                    account_verification_code_error_hint: "Hatal谋 do臒rulama kodu",
                    account_verify_tips: "G眉venlik gerek莽esiyle, 艧u adrese bir do臒rulama kodu g枚nderildi:",
                    email_code_self_help: "1. L眉tfen e-posta  adresinizi do臒ru girdi臒inizden emin olun.</br>\r\n    2. L眉tfen gelen kutunuzda 鈥淭ikTok鈥漸 aray谋n. E-postay谋 鈥淭ikTok Ads鈥漝en  g枚nderece臒iz.</br>\r\n    3. L眉tfen e-postan谋n 脰nemsiz, Gereksiz, 脟枚p Kutusu, Silinmi艧 脰geler veya Ar艧iv  klas枚r眉nde olup olmad谋臒谋n谋 kontrol edin. </br>\r\n    4. Hi莽biri i艧e yaramazsa l眉tfen fakl谋 bir e-posta ile deneyin. Baz谋 e-posta  sa臒lay谋c谋lar谋 e-postalar谋m谋z谋 engelleyebilir.",
                    home_enter: "Reklamlar谋 Y枚net",
                    input_error_msg_email: "E-posta adresi gereksinimleri kar艧谋lam谋yor, l眉tfen tekrar deneyin",
                    input_error_msg_mobile: "Telefon numaras谋  format谋 ge莽ersiz.",
                    input_error_msg_mobile_code: "L眉tfen 4 basamakl谋  do臒rulama kodunu girin.",
                    input_placeholder_account: "L眉tfen e-posta  adresinizi veya telefon numaran谋z谋 girin.",
                    input_placeholder_email: "E-Posta Adresi Gir",
                    input_placeholder_mobile: "L眉tfen telefon  numaran谋z谋 girin",
                    input_placeholder_password: "Parola Gir",
                    item_label_account: "E-Posta veya Telefon",
                    item_label_confirm_pwd: "Parolay谋 Onayla",
                    item_label_email: "E-Posta Adresi",
                    item_label_mobile: "Telefon Numaras谋",
                    item_label_pwd: "Parola",
                    item_label_verify_code: "Do臒rulama Kodu",
                    menu_email_code_login_back: "Geri D枚n",
                    menu_mobile_code_login_back: "Telefon numaras谋n谋 de臒i艧tirmek i莽in geri d枚n眉n",
                    menu_next: "Sonraki",
                    mobile_code_self_help: "1. Tekrar denemeden  枚nce 4 basamakl谋 kodu almak i莽in l眉tfen birka莽 saniye bekleyin. </br>\r\n2. Telefon numaran谋z谋n do臒ru oldu臒undan emin olun.</br>\r\n3. Hi莽biri i艧e yaramazsa l眉tfen fakl谋 bir telefon numaras谋 ile deneyin. ",
                    notice_not_receive_code: "Kod gelmedi mi?",
                    official_disclaimer: "H眉k眉mler",
                    official_legal_statements: "Yasal Duyuru",
                    official_privacy_title: "Gizlilik Politikas谋",
                    see_more: "Daha fazla g枚r",
                    shark_security_7: "Mevcut a臒 ortam谋n谋z y眉ksek g眉venlik riski getiriyor. L眉tfen a臒谋n谋z谋 kontrol edin ve 24 saat i莽inde yeniden deneyin."
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "Vui l貌ng 膽峄峜 v脿 膽峄搉g 媒 v峄沬 Th峄廰 thu岷璶 Ng瓢峄漣 d霉ng v脿 Ch铆nh s谩ch Quy峄乶 ri锚ng t瓢",
                    account_check_email_hint: "H峄檖 th瓢 kh么ng 膽煤ng y锚u c岷u, vui l貌ng ki峄僲 tra",
                    account_fetch_verify_code: "Nh岷璶 m茫 x谩c minh",
                    account_forget_password: "Qu锚n m岷璽 kh岷﹗",
                    account_login: "膼膬ng nh岷璸",
                    account_login_email: "膼膬ng nh岷璸",
                    account_network_error_hint: "M岷ng b岷t th瓢峄漬g, vui l貌ng th峄 l岷i sau",
                    account_password_hint: "M岷璽 kh岷﹗ ph岷i t峄 6-20 ch峄 c谩i",
                    account_password_recomfirm_hint: "M岷璽 kh岷﹗ kh么ng nh岷t qu谩n, vui l貌ng ki峄僲 tra l岷i",
                    account_register: "膼膬ng k媒",
                    account_resend_email: "G峄璱 l岷i email",
                    account_resend_mobile: "G峄璱 M茫 x谩c minh ",
                    account_reset_password: "膼岷穞 l岷i m岷璽 kh岷﹗",
                    account_reset_password_success_hint: "膼岷穞 l岷i m岷璽 kh岷﹗ th脿nh c么ng, vui l貌ng 膽膬ng nh岷璸 l岷i",
                    account_send_email: "G峄璱 email",
                    account_send_mobile: "G峄璱 M茫 x谩c minh ",
                    account_send_success_check_hint: "膼茫 g峄璱 th脿nh c么ng, vui l貌ng ki峄僲 tra m茫 x谩c minh trong h峄檖 th瓢",
                    account_verification_code: "M茫 x谩c minh",
                    account_verification_code_error_hint: "M茫 x谩c minh kh么ng ch铆nh x谩c",
                    account_verify_tips: "V矛 l媒 do b岷o m岷璽, m茫 x谩c minh 膽茫 膽瓢峄c g峄璱 t峄沬",
                    email_code_self_help: "1. Vui l貌ng ki峄僲 tra  xem 膽峄媋 ch峄 email c峄a b岷n 膽茫 ch铆nh x谩c ch瓢a.</br>\r\n    2. Vui l貌ng t矛m 鈥淭ikTok鈥 trong h峄檖 th瓢 膽岷縩 c峄a b岷n. Ch煤ng t么i s岷 g峄璱 email  t峄 鈥淭ikTok Ads鈥.</br>\r\n    3. Vui l貌ng ki峄僲 tra xem n贸 c贸 trong m峄c th瓢 r谩c, t峄噋 膽茫 x贸a v脿 th瓢 m峄c l瓢u  tr峄 c峄a b岷n hay kh么ng. </br>\r\n    4. N岷縰 kh么ng t矛m th岷y, vui l貌ng th峄 b岷眓g m峄檛 email kh谩c. M峄檛 s峄 nh脿 cung  c岷p email c贸 th峄 ch岷穘 email c峄a ch煤ng t么i.",
                    home_enter: "Qu岷n l媒 qu岷ng c谩o",
                    input_error_msg_email: "H峄檖 th瓢 kh么ng 膽煤ng y锚u c岷u, vui l貌ng ki峄僲 tra",
                    input_error_msg_mobile: "膼峄媙h d岷ng s峄 膽i峄噉  tho岷i kh么ng h峄p l峄.",
                    input_error_msg_mobile_code: "Vui l貌ng nh岷璸 m茫 x谩c  minh g峄搈 4 ch峄 s峄.",
                    input_placeholder_account: "Vui l貌ng nh岷璸 email  ho岷穋 s峄 膽i峄噉 tho岷i c峄a b岷n.",
                    input_placeholder_email: "Vui l貌ng nh岷璸 膽峄媋 ch峄 email",
                    input_placeholder_mobile: "Vui l貌ng nh岷璸 s峄 膽i峄噉  tho岷i c峄a b岷n",
                    input_placeholder_password: "Vui l貌ng nh岷璸 m岷璽 kh岷﹗",
                    item_label_account: "Email ho岷穋 S峄 膽i峄噉  tho岷i",
                    item_label_confirm_pwd: "X谩c nh岷璶 M岷璽 kh岷﹗",
                    item_label_email: "膼峄媋 ch峄 Email",
                    item_label_mobile: "S峄 膼i峄噉 Tho岷i",
                    item_label_pwd: "M岷璽 kh岷﹗",
                    item_label_verify_code: "M茫 x谩c minh",
                    menu_email_code_login_back: "Quay l岷i",
                    menu_mobile_code_login_back: "Quay l岷i 膽峄 thay 膽峄昳 s峄 膽i峄噉 tho岷i",
                    menu_next: "膼i ti岷縫",
                    mobile_code_self_help: "1. Vui l貌ng 膽峄i trong  gi芒y l谩t 膽峄 nh岷璶 m茫 x谩c minh g峄搈 4 ch峄 s峄 tr瓢峄沜 khi th峄 l岷i.</br> \r\n2. Ki峄僲 tra xem s峄 膽i峄噉 tho岷i c峄a b岷n 膽茫 ch铆nh x谩c hay ch瓢a.</br>\r\n3. N岷縰 kh么ng nh岷璶 膽瓢峄c, vui l貌ng th峄 b岷眓g m峄檛 email kh谩c. ",
                    notice_not_receive_code: "B岷n ch瓢a nh岷璶 膽瓢峄c m茫  x谩c minh?",
                    official_disclaimer: "膼i峄乽 kho岷n",
                    official_legal_statements: "Tuy锚n b峄 Ph谩p l媒",
                    official_privacy_title: "Ch铆nh s谩ch B岷o m岷璽",
                    see_more: "Xem th锚m",
                    shark_security_7: "M么i tr瓢峄漬g m岷ng hi峄噉 t岷i c峄a b岷n c贸 r峄i ro b岷o m岷璽 cao. Vui l貌ng ki峄僲 tra m岷ng c峄a b岷n v脿 th峄 l岷i sau 24 gi峄 n峄痑."
                }
            }
            , function(e) {
                e.exports = {
                    action_send_code: "鍙戦侀獙璇佺爜",
                    code_pattern_valid: "楠岃瘉鐮佸簲涓6浣嶅瓧绗",
                    code_self_help: "楠岃瘉鐮佽嚜鏌ュ府鍔",
                    input_placeholder_confirm_pwd: "璇疯緭鍏ユ偍鐨勫瘑鐮",
                    input_placeholder_pwd: "璇疯緭鍏6-20浣嶅瘑鐮",
                    input_placeholder_verify_code: "璇疯緭鍏ラ獙璇佺爜",
                    mobile_code_pattern_valid: "璇疯緭鍏ュ洓浣嶉獙璇佺爜",
                    password_pattern_valid: "瀵嗙爜搴斾负6-20浣嶅瓧绗",
                    password_required: "瀵嗙爜涓嶈兘涓虹┖",
                    protocol_and_guideline: "鏈嶅姟鍗忚鍜屽紩瀵",
                    register: "娉ㄥ唽",
                    repeatPwd_required: "纭璁ゅ瘑鐮佷笉鑳戒负绌",
                    search_area_code_placeholder: "鎼滅储鍥藉跺尯鍙",
                    notice_not_receive_code: "娌℃湁鏀跺埌",
                    email_code_self_help: "楠岃瘉鐮佽嚜鏌ュ府鍔",
                    mobile_code_self_help: "鎵嬫満楠岃瘉鐮佸府鍔",
                    see_more: "鏌ョ湅鏇村",
                    shark_security_7: "鎮ㄥ綋鍓嶆墍鍦ㄧ綉缁滅幆澧冨瓨鍦ㄨ緝澶у畨鍏ㄩ庨櫓锛岃锋鏌ユ偍鐨勭綉缁滄儏鍐碉紝24 灏忔椂鍚庡啀娆″皾璇曟搷浣",
                    menu_mobile_code_login_back: "杩斿洖淇鏀规墜鏈哄彿鐮",
                    text_lark_login_tips: "Employee Login",
                    item_label_account: "鎵嬫満鍙风爜/閭绠卞湴鍧",
                    item_label_confirm_pwd: "瀵嗙爜纭璁",
                    item_label_email: "閭绠",
                    item_label_mobile: "鎵嬫満鍙风爜",
                    item_label_pwd: "瀵嗙爜",
                    item_label_verify_code: "楠岃瘉鐮",
                    input_placeholder_account: "璇疯緭鍏ラ偖绠辨垨鑰呮墜鏈哄彿鐮",
                    account_send_mobile: "鍙戦侀獙璇佺爜",
                    input_error_msg_mobile_code: "璇疯緭鍏ュ洓浣嶉獙璇佺爜",
                    account_resend_mobile: "鍙戦侀獙璇佺爜",
                    input_error_msg_mobile: "鎵嬫満鍙风爜鏍煎紡涓嶆ｇ‘",
                    input_placeholder_mobile: "璇疯緭鍏ユ墜鏈哄彿鐮",
                    input_placeholder_email_code: "璇疯緭鍏ラ偖绠遍獙璇佺爜",
                    menu_email_code_login_back: "杩斿洖淇鏀归偖绠卞湴鍧",
                    input_error_msg_code: "閭绠遍獙璇佺爜涓嶄负绌",
                    input_error_msg_email: "閭绠变笉绗﹀悎瑕佹眰锛岃锋鏌",
                    account_login_email: "鐧诲綍",
                    menu_next: "涓嬩竴姝",
                    input_placeholder_password: "璇疯緭鍏ュ瘑鐮",
                    input_placeholder_email: "璇疯緭鍏ラ偖绠",
                    account_send_email: "鍙戦侀偖浠",
                    account_resend_email: "閲嶆柊鍙戦侀偖浠",
                    account_verify_tips: "Wording: Because of security reason a verify code has been send to",
                    account_agreement_policy_hint: "璇峰厛闃呰诲苟鍚屾剰鐢ㄦ埛鍗忚鍜岄殣绉佹潯娆",
                    account_check_email_hint: "閭绠变笉绗﹀悎瑕佹眰锛岃锋鏌",
                    account_fetch_verify_code: "鑾峰彇楠岃瘉鐮",
                    account_forget_password: "蹇樿板瘑鐮",
                    account_login: "鐧诲綍",
                    account_network_error_hint: "缃戠粶寮傚父锛岃风◢鍚庨噸璇",
                    account_password_hint: "瀵嗙爜搴斾负8-20浣",
                    account_password_recomfirm_hint: "涓ゆ¤緭鍏ョ殑瀵嗙爜涓嶄竴鑷达紝璇锋鏌",
                    account_register: "娉ㄥ唽",
                    account_reset_password: "閲嶇疆瀵嗙爜",
                    account_reset_password_success_hint: "瀵嗙爜閲嶇疆鎴愬姛锛岃烽噸鏂扮櫥褰",
                    account_send_success_check_hint: "鍙戦佹垚鍔燂紝璇峰湪閭绠变腑鏌ョ湅楠岃瘉鐮",
                    account_verification_code: "楠岃瘉鐮",
                    account_verification_code_error_hint: "楠岃瘉鐮佷笉姝ｇ‘",
                    home_enter: "绠＄悊骞垮憡",
                    official_disclaimer: "鏉℃",
                    official_legal_statements: "娉曞緥澹版槑",
                    official_privacy_title: "闅愮佹斂绛"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "璜嬪厛闁辫畝涓﹀悓鎰忕敤鎴跺崝璀板拰闅辩佹濇",
                    account_check_email_hint: "闆诲瓙閮典欢鍦板潃涓嶇﹁佹眰锛岃珛妾㈡煡",
                    account_fetch_verify_code: "鍙栧緱椹楄瓑纰",
                    account_forget_password: "蹇樿樺瘑纰",
                    account_login: "鐧婚寗",
                    account_login_email: "鐧婚寗",
                    account_network_error_hint: "缍茶矾鐣板父锛岃珛绋嶅緦閲嶈│",
                    account_password_hint: "瀵嗙⒓鎳夌偤 6-20 瀛",
                    account_password_recomfirm_hint: "鍏╂¤几鍏ョ殑瀵嗙⒓涓嶄竴鑷达紝璜嬫㈡煡",
                    account_register: "瑷诲唺",
                    account_resend_email: "閲嶆柊鐧奸侀兊浠",
                    account_reset_password: "閲嶈ō瀵嗙⒓",
                    account_reset_password_success_hint: "瀵嗙⒓閲嶈ō鎴愬姛锛岃珛閲嶆柊鐧婚寗",
                    account_send_email: "鐧奸侀兊浠",
                    account_send_success_check_hint: "鐧奸佹垚鍔燂紝璜嬭嚦闆诲瓙閮典欢淇＄辨煡鐪嬮楄瓑纰",
                    account_verification_code: "椹楄瓑纰",
                    account_verification_code_error_hint: "椹楄瓑纰间笉姝ｇ⒑",
                    account_verify_tips: "鍩烘柤瀹夊叏锛屽凡灏囬楄瓑纰肩櫦閫佽嚦",
                    email_code_self_help: "1.  璜嬫㈡煡鎮ㄧ殑闆诲瓙閮典欢鍦板潃鏄鍚︽ｇ⒑銆</br>\r\n    2. 璜嬪湪鎮ㄧ殑鏀朵欢鍖ｄ腑鎼滃皨銆孴ikTok銆嶃傞楄瓑纰奸兊浠剁殑瀵勪欢浜烘槸銆孴ikTok Ads銆嶃</br>\r\n    3. 璜嬬⒑瑾嶅湪鎮ㄧ殑鍨冨溇閮典欢璩囨枡澶俱佸凡鍒闄ら兊浠惰硣鏂欏ぞ鍜屾告獢閮典欢璩囨枡澶句腑锛屾槸鍚︽湁鎴戝戠殑椹楄瓑纰奸浕瀛愰兊浠躲</br>\r\n    4. 濡傛灉浠嶆壘涓嶅埌鎴戝戠殑椹楄瓑纰奸浕瀛愰兊浠讹紝璜嬪槜瑭︿娇鐢ㄥ叾浠栫殑闆诲瓙閮典欢鍦板潃銆傞儴鍒嗛兊浠舵湇鍕欏晢鏈冨皝閹栨垜鍊戠殑闆诲瓙閮典欢銆",
                    home_enter: "绠＄悊寤ｅ憡",
                    input_error_msg_code: "閮电遍楄瓑纰间笉鐖茬┖",
                    input_error_msg_email: "闆诲瓙閮典欢鍦板潃涓嶇﹁佹眰锛岃珛妾㈡煡",
                    input_placeholder_email: "璜嬭几鍏ラ浕瀛愰兊浠跺湴鍧",
                    input_placeholder_email_code: "璜嬭几鍏ラ兊绠遍楄瓑纰",
                    input_placeholder_password: "璜嬭几鍏ュ瘑纰",
                    menu_email_code_login_back: "杩斿洖淇鏀归兊绠卞湴鍧",
                    menu_next: "涓嬩竴姝",
                    mobile_code_self_help: "1.  璜嬬◢绛夌墖鍒伙紝鎮ㄦ渻鏀跺埌4浣嶇啊瑷婇楄瓑纰</br>\r\n    2. 妾㈡煡杓稿叆鐨勬墜姗熻櫉纰兼槸鍚︽ｇ⒑</br>\r\n    3. 鍢楄│浣跨敤鍙︿竴鍊嬫墜姗熻櫉纰兼敞鍐",
                    notice_not_receive_code: "娌掓湁鏀跺埌椹楄瓑纰硷紵",
                    official_disclaimer: "姊濇",
                    official_legal_statements: "娉曞緥鑱叉槑",
                    official_privacy_title: "闅辩佹斂绛"
                }
            }
            , function(e) {
                e.exports = {
                    account_agreement_policy_hint: "璇峰厛闃呰诲苟鍚屾剰鐢ㄦ埛鍗忚鍜岄殣绉佹潯娆",
                    account_check_email_hint: "閭绠变笉绗﹀悎瑕佹眰锛岃锋鏌",
                    account_fetch_verify_code: "鑾峰彇楠岃瘉鐮",
                    account_forget_password: "蹇樿板瘑鐮",
                    account_login: "鐧诲綍",
                    account_login_email: "鐧诲綍",
                    account_network_error_hint: "缃戠粶寮傚父锛岃风◢鍚庨噸璇",
                    account_password_hint: "瀵嗙爜搴斾负6-20浣",
                    account_password_recomfirm_hint: "涓ゆ¤緭鍏ョ殑瀵嗙爜涓嶄竴鑷达紝璇锋鏌",
                    account_register: "娉ㄥ唽",
                    account_resend_email: " 閲嶆柊鍙戦侀偖浠",
                    account_resend_mobile: "鍙戦侀獙璇佺爜",
                    account_reset_password: "閲嶇疆瀵嗙爜",
                    account_reset_password_success_hint: "瀵嗙爜閲嶇疆鎴愬姛锛岃烽噸鏂扮櫥褰",
                    account_send_email: " 鍙戦侀偖浠",
                    account_send_mobile: "鍙戦侀獙璇佺爜",
                    account_send_success_check_hint: "鍙戦佹垚鍔燂紝璇峰湪閭绠变腑鏌ョ湅楠岃瘉鐮",
                    account_verification_code: "楠岃瘉鐮",
                    account_verification_code_error_hint: "楠岃瘉鐮佷笉姝ｇ‘",
                    account_verify_tips: "璇锋敞鎰忥細涓轰簡鎮ㄧ殑璐﹀彿瀹夊叏锛岄獙璇佺爜宸插彂閫佽嚦閭绠",
                    email_code_self_help: "1. 璇锋鏌ユ偍鐨勯偖绠卞湴鍧鏄鍚︽ｇ‘銆</br>\r\n2. 璇峰湪鎮ㄧ殑鏀朵欢绠变腑鎼滅储鈥淭ikTok鈥濄傞獙璇佺爜閭浠剁殑鍙戜欢浜烘槸鈥淭ikTok Ads鈥濄</br>\r\n3. 璇风‘璁ゆ垜浠鐨勯獙璇佺爜閭绠辨槸鍚﹀湪鎮ㄧ殑鍨冨溇閭绠便佸凡鍒犻櫎鏂囦欢澶瑰拰褰掓。閭浠朵腑銆</br>\r\n4. 濡傛灉浠嶆棤娉曟壘鍒版垜浠鐨勯獙璇佺爜閭浠讹紝璇峰皾璇曞叾浠栫殑閭绠便傞儴鍒嗛偖浠舵湇鍔″晢灞忚斀浜嗘垜浠鐨勯偖浠躲",
                    home_enter: "绠＄悊骞垮憡",
                    input_error_msg_code: "閭绠遍獙璇佺爜涓嶄负绌",
                    input_error_msg_email: "閭绠变笉绗﹀悎瑕佹眰锛岃锋鏌",
                    input_error_msg_mobile: "璇锋鏌ヨ緭鍏ョ殑鎵嬫満鍙锋牸寮",
                    input_error_msg_mobile_code: "璇疯緭鍏4浣嶉獙璇佺爜",
                    input_placeholder_account: "杈撳叆Email鎴栨墜鏈哄彿",
                    input_placeholder_email: "璇疯緭鍏ラ偖绠",
                    input_placeholder_email_code: "璇疯緭鍏ラ偖绠遍獙璇佺爜",
                    input_placeholder_mobile: "璇疯緭鍏ヤ綘鐨勬墜鏈哄彿",
                    input_placeholder_password: " 璇疯緭鍏ュ瘑鐮",
                    item_label_account: "Email 鎴栨墜鏈哄彿",
                    item_label_confirm_pwd: "瀵嗙爜纭璁",
                    item_label_email: "閭绠",
                    item_label_mobile: "鎵嬫満鍙",
                    item_label_pwd: "瀵嗙爜",
                    item_label_verify_code: "楠岃瘉鐮",
                    menu_email_code_login_back: " 杩斿洖淇鏀归偖绠卞湴鍧",
                    menu_mobile_code_login_back: "杩斿洖淇鏀规墜鏈哄彿鐮",
                    menu_next: " 涓嬩竴姝",
                    mobile_code_self_help: "1. 璇风◢绛夌墖鍒伙紝浣犲皢鏀跺埌4浣嶇煭淇￠獙璇佺爜</br>\r\n2. 妫鏌ヨ緭鍏ョ殑鎵嬫満鍙锋槸鍚︽ｇ‘</br>\r\n3. 灏濊瘯浣跨敤鍙︿竴涓鎵嬫満鍙锋敞鍐",
                    notice_not_receive_code: "娌℃湁鏀跺埌楠岃瘉鐮侊紵",
                    official_disclaimer: "鏉℃",
                    official_legal_statements: "娉曞緥澹版槑",
                    official_privacy_title: "闅愮佹斂绛",
                    see_more: "鏌ョ湅鏇村",
                    shark_security_7: "鎮ㄥ綋鍓嶆墍鍦ㄧ綉缁滅幆澧冨瓨鍦ㄨ緝澶у畨鍏ㄩ庨櫓锛岃锋鏌ユ偍鐨勭綉缁滄儏鍐碉紝24 灏忔椂鍚庡啀娆″皾璇曟搷浣",
                    text_lark_login_tips: "鍛樺伐鐧诲綍"
                }
            }
            ]).default
        })
    },
    c2ed: function(e, t) {
        e.exports = function(e) {
            var t = {};
            function n(o) {
                if (t[o])
                    return t[o].exports;
                var i = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var o = Object.create(null);
                if (n.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var i in e)
                        n.d(o, i, function(t) {
                            return e[t]
                        }
                        .bind(null, i));
                return o
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 0)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(1)
              , i = n(2)
              , r = {
                encryptParams: o.encryptParams,
                encrypt: o.encrypt,
                logEncrypt: i.logEncrypt
            };
            t.default = r
        }
        , function(e, t, n) {
            "use strict";
            var o = this && this.__assign || Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.encrypt = function(e) {
                var t, n = [];
                if (void 0 === e)
                    return "";
                t = function(e) {
                    for (var t, n = e.toString(), o = [], i = 0; i < n.length; i++)
                        0 <= (t = n.charCodeAt(i)) && t <= 127 ? o.push(t) : 128 <= t && t <= 2047 ? (o.push(192 | 31 & t >> 6),
                        o.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (o.push(224 | 15 & t >> 12),
                        o.push(128 | 63 & t >> 6),
                        o.push(128 | 63 & t));
                    for (var r = 0; r < o.length; r++)
                        o[r] &= 255;
                    return o
                }(e);
                for (var o = 0, i = t.length; o < i; ++o)
                    n.push((5 ^ t[o]).toString(16));
                return n.join("")
            }
            ,
            t.encryptParams = function(e, n) {
                var i, r = 0;
                if ("object" != typeof e)
                    return e;
                if (!n || n.length <= 0)
                    return e;
                for (var a = o({
                    mix_mode: r
                }, e), s = 0, c = n.length; s < c; ++s)
                    void 0 !== (i = a[n[s]]) && (r |= 1,
                    a[n[s]] = t.encrypt(i));
                return a.mix_mode = r,
                a
            }
            ,
            t.default = {
                encrypt: t.encrypt,
                encryptParams: t.encryptParams
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(3)
              , i = n(8)
              , r = n(9);
            function a(e) {
                return new Uint8Array([e])[0]
            }
            function s(e) {
                return new Uint8Array([e])[0]
            }
            function c(e) {
                return new Uint32Array([e])[0]
            }
            function l(e, t, n) {
                var o = c(n[0] << 24 | n[1] << 16 | n[2] << 8 | n[3])
                  , i = c(n[4] << 24 | n[5] << 16 | n[6] << 8 | n[7])
                  , r = c(n[8] << 24 | n[9] << 16 | n[10] << 8 | n[11])
                  , s = c(n[12] << 24 | n[13] << 16 | n[14] << 8 | n[15]);
                return o = c(o ^ e[0]),
                i = c(i ^ e[1]),
                r = c(r ^ e[2]),
                s = c(s ^ e[3]),
                [a(o >>> 24), a(o >>> 16), a(o >>> 8), a(o), a(i >>> 24), a(i >>> 16), a(i >>> 8), a(i), a(r >>> 24), a(r >>> 16), a(r >>> 8), a(r), a(s >>> 24), a(s >>> 16), a(s >>> 8), a(s)]
            }
            t.logEncrypt = function(e, t) {
                e.stdKey = function(e) {
                    if (void 0 === e)
                        return console.error("key can not be null"),
                        "";
                    var t = [];
                    t.length = 16,
                    t.fill(0);
                    var n, o = 16;
                    n = i.writeUTF(e);
                    var a = e.length;
                    a < 16 && (o = a);
                    for (var s = 0; s < o; s++)
                        t[s] = n[s];
                    for (s = o; s < 16; s++)
                        t[s] = r.sbox1[t[s - o]];
                    for (s = 0; s < 16; s++)
                        t[s] = r.sbox0[t[s]];
                    var l = c(t[0]) << 24 | c(t[1]) << 16 | c(t[2]) << 8 | c(t[3])
                      , d = c(t[4]) << 24 | c(t[5]) << 16 | c(t[6]) << 8 | c(t[7])
                      , u = c(t[8]) << 24 | c(t[9]) << 16 | c(t[10]) << 8 | c(t[11])
                      , m = c(t[12]) << 24 | c(t[13]) << 16 | c(t[14]) << 8 | c(t[15]);
                    return [c(l), c(d), c(u), c(m)]
                }(e.key);
                var n = [s(e.magic_number >>> 8), s(255 & e.magic_number), s(e.version), 0, s(e.sub_version >>> 8), s(255 & e.sub_version)]
                  , d = o.zip(i.writeUTF(t))
                  , u = function(e, t) {
                    var n = [];
                    e && "string" == typeof e ? n = i.writeUTF(e) : e && Array.isArray(e) && (n = e);
                    var o = r.blockSize - n.length % r.blockSize;
                    if (o == r.blockSize)
                        return t[3] = s(0),
                        n;
                    t[3] = s(o);
                    for (var a = 0; a < o; a++) {
                        var c = s(o);
                        n.push(c)
                    }
                    return n
                }(d, n);
                u = function(e) {
                    for (var t = 0; t < e.length; t++)
                        e[t] = r.sbox0[s(e[t])];
                    return e
                }(u);
                for (var m, f, p, _, h, A = d.length / r.blockSize, g = [], k = 0; k < A; k++) {
                    var b = u.slice(k * r.blockSize, (k + 1) * r.blockSize);
                    f = void 0,
                    p = void 0,
                    _ = void 0,
                    h = void 0,
                    f = c((m = b)[0] << 24 | m[1] << 16 | m[2] << 8 | m[3]),
                    p = c(m[4] << 24 | m[5] << 16 | m[6] << 8 | m[7]),
                    _ = c(m[8] << 24 | m[9] << 16 | m[10] << 8 | m[11]),
                    h = c(m[12] << 24 | m[13] << 16 | m[14] << 8 | m[15]),
                    f = c(f),
                    p = c(c(p << 8) | c(p >>> 24)),
                    _ = c(_ << 16 | _ >>> 16),
                    h = c(h << 24 | h >>> 8),
                    b = [a(f >>> 24), a(f >>> 16), a(f >>> 8), a(f), a(p >>> 24), a(p >>> 16), a(p >>> 8), a(p), a(_ >>> 24), a(_ >>> 16), a(_ >>> 8), a(_), a(h >>> 24), a(h >>> 16), a(h >>> 8), a(h)],
                    b = l(e.stdKey, 0, b),
                    g = g.concat(b)
                }
                var v = n.concat(g);
                return new Uint8Array(v).buffer
            }
            ,
            t.default = {
                logEncrypt: t.logEncrypt
            }
        }
        , function(e, t, n) {
            !function() {
                "use strict";
                var t = n(4)
                  , o = n(5)
                  , i = 31
                  , r = 139
                  , a = {
                    deflate: 8
                }
                  , s = {
                    FTEXT: 1,
                    FHCRC: 2,
                    FEXTRA: 4,
                    FNAME: 8,
                    FCOMMENT: 16
                }
                  , c = {
                    fat: 0,
                    amiga: 1,
                    vmz: 2,
                    unix: 3,
                    "vm/cms": 4,
                    atari: 5,
                    hpfs: 6,
                    macintosh: 7,
                    "z-system": 8,
                    cplm: 9,
                    "tops-20": 10,
                    ntfs: 11,
                    qdos: 12,
                    acorn: 13,
                    vfat: 14,
                    vms: 15,
                    beos: 16,
                    tandem: 17,
                    theos: 18
                }
                  , l = "unix"
                  , d = 6;
                function u(e, t) {
                    t.push(255 & e)
                }
                function m(e, t) {
                    t.push(255 & e),
                    t.push(e >>> 8)
                }
                function f(e, t) {
                    m(65535 & e, t),
                    m(e >>> 16, t)
                }
                function p(e) {
                    return e.shift()
                }
                function _(e) {
                    return e.shift() | e.shift() << 8
                }
                function h(e) {
                    var t = _(e)
                      , n = _(e);
                    return n > 32768 ? ((n -= 32768) << 16 | t) + 32768 * Math.pow(2, 16) : n << 16 | t
                }
                function A(e) {
                    for (var t = []; 0 !== e[0]; )
                        t.push(String.fromCharCode(e.shift()));
                    return e.shift(),
                    t.join("")
                }
                e.exports = {
                    zip: function(e, n) {
                        var m, p = 0, _ = [];
                        if (n || (n = {}),
                        m = n.level || d,
                        "string" == typeof e) {
                            for (var h, A = e.toString(), g = [], k = 0; k < A.length; k++)
                                0 <= (h = A.charCodeAt(k)) && h <= 127 ? g.push(h) : 128 <= h && h <= 2047 ? (g.push(192 | 31 & h >> 6),
                                g.push(128 | 63 & h)) : (2048 <= h && h <= 55295 || 57344 <= h && h <= 65535) && (g.push(224 | 15 & h >> 12),
                                g.push(128 | 63 & h >> 6),
                                g.push(128 | 63 & h));
                            for (var b = 0; b < g.length; b++)
                                g[b] &= 255;
                            e = g
                        }
                        return u(i, _),
                        u(r, _),
                        u(a.deflate, _),
                        n.name && (p |= s.FNAME),
                        u(p, _),
                        f(n.timestamp || parseInt(Date.now() / 1e3, 10), _),
                        u(1 === m ? 4 : 9 === m ? 2 : 0, _),
                        u(c[l], _),
                        n.name && (function(e, t) {
                            var n, o = e.length;
                            for (n = 0; n < o; n += 1)
                                u(e.charCodeAt(n), t)
                        }(n.name.substring(n.name.lastIndexOf("/") + 1), _),
                        u(0, _)),
                        o.deflate(e, m).forEach(function(e) {
                            u(e, _)
                        }),
                        f(parseInt(t(e), 16), _),
                        f(e.length, _),
                        _
                    },
                    unzip: function(e, n) {
                        var l, d, u, m, f = Array.prototype.slice.call(e, 0);
                        if (p(f) !== i || p(f) !== r)
                            throw "Not a GZIP file";
                        if (l = p(f),
                        !(l = Object.keys(a).some(function(e) {
                            return d = e,
                            a[e] === l
                        })))
                            throw "Unsupported compression method";
                        if (u = p(f),
                        h(f),
                        p(f),
                        l = p(f),
                        Object.keys(c).some(function(e) {
                            if (c[e] === l)
                                return !0
                        }),
                        u & s.FEXTRA && function(e, t) {
                            var n, o = [];
                            for (n = 0; n < t; n += 1)
                                o.push(e.shift())
                        }(f, l = _(f)),
                        u & s.FNAME && A(f),
                        u & s.FCOMMENT && A(f),
                        u & s.FHCRC && _(f),
                        "deflate" === d && (m = o.inflate(f.splice(0, f.length - 8))),
                        u & s.FTEXT && (m = Array.prototype.map.call(m, function(e) {
                            return String.fromCharCode(e)
                        }).join("")),
                        h(f) !== parseInt(t(m), 16))
                            throw "Checksum does not match";
                        if (h(f) !== m.length)
                            throw "Size of decompressed file not correct";
                        return m
                    },
                    get DEFAULT_LEVEL() {
                        return d
                    }
                }
            }()
        }
        , function(e, t) {
            !function() {
                "use strict";
                var t = []
                  , n = 3988292384;
                function o(e) {
                    var t, o, i, r, a = -1;
                    for (t = 0,
                    i = e.length; t < i; t += 1) {
                        for (r = 255 & (a ^ e[t]),
                        o = 0; o < 8; o += 1)
                            1 == (1 & r) ? r = r >>> 1 ^ n : r >>>= 1;
                        a = a >>> 8 ^ r
                    }
                    return -1 ^ a
                }
                function i(e, n) {
                    var o, r, a;
                    if (void 0 !== i.crc && n && e || (i.crc = -1,
                    e)) {
                        for (o = i.crc,
                        r = 0,
                        a = e.length; r < a; r += 1)
                            o = o >>> 8 ^ t[255 & (o ^ e[r])];
                        return i.crc = o,
                        -1 ^ o
                    }
                }
                !function() {
                    var e, o, i;
                    for (o = 0; o < 256; o += 1) {
                        for (e = o,
                        i = 0; i < 8; i += 1)
                            1 & e ? e = n ^ e >>> 1 : e >>>= 1;
                        t[o] = e >>> 0
                    }
                }(),
                e.exports = function(e, t) {
                    var n;
                    return e = "string" == typeof e ? (n = e,
                    Array.prototype.map.call(n, function(e) {
                        return e.charCodeAt(0)
                    })) : e,
                    ((t ? o(e) : i(e)) >>> 0).toString(16)
                }
                ,
                e.exports.direct = o,
                e.exports.table = i
            }()
        }
        , function(e, t, n) {
            !function() {
                "use strict";
                e.exports = {
                    inflate: n(6),
                    deflate: n(7)
                }
            }()
        }
        , function(e, t) {
            !function() {
                var t, n, o, i, r, a, s, c, l, d, u, m, f, p, _, h, A, g = 32768, k = 0, b = 1, v = 2, y = 9, w = 6, C = null, B = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], E = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], S = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], T = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                function P() {
                    this.next = null,
                    this.list = null
                }
                function N() {
                    this.e = 0,
                    this.b = 0,
                    this.n = 0,
                    this.t = null
                }
                function L(e, t, n, o, i, r) {
                    var a;
                    this.BMAX = 16,
                    this.N_MAX = 288,
                    this.status = 0,
                    this.root = null,
                    this.m = 0;
                    var s, c, l, d, u, m, f, p, _, h, A, g, k, b, v, y, w = [], C = [], B = new N, E = [], x = [], S = [];
                    for (y = this.root = null,
                    u = 0; u < this.BMAX + 1; u++)
                        w[u] = 0;
                    for (u = 0; u < this.BMAX + 1; u++)
                        C[u] = 0;
                    for (u = 0; u < this.BMAX; u++)
                        E[u] = null;
                    for (u = 0; u < this.N_MAX; u++)
                        x[u] = 0;
                    for (u = 0; u < this.BMAX + 1; u++)
                        S[u] = 0;
                    s = t > 256 ? e[256] : this.BMAX,
                    p = e,
                    _ = 0,
                    u = t;
                    do {
                        w[p[_]]++,
                        _++
                    } while (--u > 0);if (w[0] === t)
                        return this.root = null,
                        this.m = 0,
                        void (this.status = 0);
                    for (m = 1; m <= this.BMAX && 0 === w[m]; m++)
                        ;
                    for (f = m,
                    r < m && (r = m),
                    u = this.BMAX; 0 !== u && 0 === w[u]; u--)
                        ;
                    for (l = u,
                    r > u && (r = u),
                    k = 1 << m; m < u; m++,
                    k <<= 1)
                        if ((k -= w[m]) < 0)
                            return this.status = 2,
                            void (this.m = r);
                    if ((k -= w[u]) < 0)
                        return this.status = 2,
                        void (this.m = r);
                    for (w[u] += k,
                    S[1] = m = 0,
                    p = w,
                    _ = 1,
                    g = 2; --u > 0; )
                        S[g++] = m += p[_++];
                    p = e,
                    _ = 0,
                    u = 0;
                    do {
                        0 !== (m = p[_++]) && (x[S[m]++] = u)
                    } while (++u < t);for (t = S[l],
                    S[0] = u = 0,
                    p = x,
                    _ = 0,
                    d = -1,
                    A = C[0] = 0,
                    h = null,
                    b = 0; f <= l; f++)
                        for (a = w[f]; a-- > 0; ) {
                            for (; f > A + C[1 + d]; ) {
                                if (A += C[1 + d],
                                d++,
                                b = (b = l - A) > r ? r : b,
                                (c = 1 << (m = f - A)) > a + 1)
                                    for (c -= a + 1,
                                    g = f; ++m < b && !((c <<= 1) <= w[++g]); )
                                        c -= w[g];
                                for (A + m > s && A < s && (m = s - A),
                                b = 1 << m,
                                C[1 + d] = m,
                                h = [],
                                v = 0; v < b; v++)
                                    h[v] = new N;
                                (y = y ? y.next = new P : this.root = new P).next = null,
                                y.list = h,
                                E[d] = h,
                                d > 0 && (S[d] = u,
                                B.b = C[d],
                                B.e = 16 + m,
                                B.t = h,
                                m = (u & (1 << A) - 1) >> A - C[d],
                                E[d - 1][m].e = B.e,
                                E[d - 1][m].b = B.b,
                                E[d - 1][m].n = B.n,
                                E[d - 1][m].t = B.t)
                            }
                            for (B.b = f - A,
                            _ >= t ? B.e = 99 : p[_] < n ? (B.e = p[_] < 256 ? 16 : 15,
                            B.n = p[_++]) : (B.e = i[p[_] - n],
                            B.n = o[p[_++] - n]),
                            c = 1 << f - A,
                            m = u >> A; m < b; m += c)
                                h[m].e = B.e,
                                h[m].b = B.b,
                                h[m].n = B.n,
                                h[m].t = B.t;
                            for (m = 1 << f - 1; 0 != (u & m); m >>= 1)
                                u ^= m;
                            for (u ^= m; (u & (1 << A) - 1) !== S[d]; )
                                A -= C[d],
                                d--
                        }
                    this.m = C[1],
                    this.status = 0 !== k && 1 !== l ? 1 : 0
                }
                function F(e) {
                    for (; s < e; )
                        a |= (h.length === A ? -1 : 255 & h[A++]) << s,
                        s += 8
                }
                function O(e) {
                    return a & B[e]
                }
                function M(e) {
                    a >>= e,
                    s -= e
                }
                function R(e, o, i) {
                    var r, a, s;
                    if (0 === i)
                        return 0;
                    for (s = 0; ; ) {
                        for (F(p),
                        r = (a = m.list[O(p)]).e; r > 16; ) {
                            if (99 === r)
                                return -1;
                            M(a.b),
                            F(r -= 16),
                            r = (a = a.t[O(r)]).e
                        }
                        if (M(a.b),
                        16 !== r) {
                            if (15 === r)
                                break;
                            for (F(r),
                            d = a.n + O(r),
                            M(r),
                            F(_),
                            r = (a = f.list[O(_)]).e; r > 16; ) {
                                if (99 === r)
                                    return -1;
                                M(a.b),
                                F(r -= 16),
                                r = (a = a.t[O(r)]).e
                            }
                            for (M(a.b),
                            F(r),
                            u = n - a.n - O(r),
                            M(r); d > 0 && s < i; )
                                d--,
                                u &= g - 1,
                                n &= g - 1,
                                e[o + s++] = t[n++] = t[u++];
                            if (s === i)
                                return i
                        } else if (n &= g - 1,
                        e[o + s++] = t[n++] = a.n,
                        s === i)
                            return i
                    }
                    return c = -1,
                    s
                }
                function j(e, o, i) {
                    var r;
                    if (M(r = 7 & s),
                    F(16),
                    r = O(16),
                    M(16),
                    F(16),
                    r !== (65535 & ~a))
                        return -1;
                    for (M(16),
                    d = r,
                    r = 0; d > 0 && r < i; )
                        d--,
                        n &= g - 1,
                        F(8),
                        e[o + r++] = t[n++] = O(8),
                        M(8);
                    return 0 === d && (c = -1),
                    r
                }
                function V(e, t, n) {
                    if (!C) {
                        var a, s, c = [];
                        for (a = 0; a < 144; a++)
                            c[a] = 8;
                        for (; a < 256; a++)
                            c[a] = 9;
                        for (; a < 280; a++)
                            c[a] = 7;
                        for (; a < 288; a++)
                            c[a] = 8;
                        if (0 !== (s = new L(c,288,257,E,x,i = 7)).status)
                            return console.error("HufBuild error: " + s.status),
                            -1;
                        for (C = s.root,
                        i = s.m,
                        a = 0; a < 30; a++)
                            c[a] = 5;
                        if ((s = new L(c,30,0,S,T,r = 5)).status > 1)
                            return C = null,
                            console.error("HufBuild error: " + s.status),
                            -1;
                        o = s.root,
                        r = s.m
                    }
                    return m = C,
                    f = o,
                    p = i,
                    _ = r,
                    R(e, t, n)
                }
                function z(e, t, n) {
                    var o, i, r, a, s, c, l, d, u, h = [];
                    for (o = 0; o < 316; o++)
                        h[o] = 0;
                    if (F(5),
                    l = 257 + O(5),
                    M(5),
                    F(5),
                    d = 1 + O(5),
                    M(5),
                    F(4),
                    c = 4 + O(4),
                    M(4),
                    l > 286 || d > 30)
                        return -1;
                    for (i = 0; i < c; i++)
                        F(3),
                        h[I[i]] = O(3),
                        M(3);
                    for (; i < 19; i++)
                        h[I[i]] = 0;
                    if (0 !== (u = new L(h,19,19,null,null,p = 7)).status)
                        return -1;
                    for (m = u.root,
                    p = u.m,
                    a = l + d,
                    o = r = 0; o < a; )
                        if (F(p),
                        M(i = (s = m.list[O(p)]).b),
                        (i = s.n) < 16)
                            h[o++] = r = i;
                        else if (16 === i) {
                            if (F(2),
                            i = 3 + O(2),
                            M(2),
                            o + i > a)
                                return -1;
                            for (; i-- > 0; )
                                h[o++] = r
                        } else if (17 === i) {
                            if (F(3),
                            i = 3 + O(3),
                            M(3),
                            o + i > a)
                                return -1;
                            for (; i-- > 0; )
                                h[o++] = 0;
                            r = 0
                        } else {
                            if (F(7),
                            i = 11 + O(7),
                            M(7),
                            o + i > a)
                                return -1;
                            for (; i-- > 0; )
                                h[o++] = 0;
                            r = 0
                        }
                    if (u = new L(h,l,257,E,x,p = y),
                    0 === p && (u.status = 1),
                    0 !== u.status && 1 !== u.status)
                        return -1;
                    for (m = u.root,
                    p = u.m,
                    o = 0; o < d; o++)
                        h[o] = h[o + l];
                    return u = new L(h,d,0,S,T,_ = w),
                    f = u.root,
                    0 === (_ = u.m) && l > 257 ? -1 : 0 !== u.status ? -1 : R(e, t, n)
                }
                function D(e, o, i) {
                    var r, a;
                    for (r = 0; r < i; ) {
                        if (l && -1 === c)
                            return r;
                        if (d > 0) {
                            if (c !== k)
                                for (; d > 0 && r < i; )
                                    d--,
                                    u &= g - 1,
                                    n &= g - 1,
                                    e[o + r++] = t[n++] = t[u++];
                            else {
                                for (; d > 0 && r < i; )
                                    d--,
                                    n &= g - 1,
                                    F(8),
                                    e[o + r++] = t[n++] = O(8),
                                    M(8);
                                0 === d && (c = -1)
                            }
                            if (r === i)
                                return r
                        }
                        if (-1 === c) {
                            if (l)
                                break;
                            F(1),
                            0 !== O(1) && (l = !0),
                            M(1),
                            F(2),
                            c = O(2),
                            M(2),
                            m = null,
                            d = 0
                        }
                        switch (c) {
                        case k:
                            a = j(e, o + r, i - r);
                            break;
                        case b:
                            a = m ? R(e, o + r, i - r) : V(e, o + r, i - r);
                            break;
                        case v:
                            a = m ? R(e, o + r, i - r) : z(e, o + r, i - r);
                            break;
                        default:
                            a = -1
                        }
                        if (-1 === a)
                            return l ? 0 : -1;
                        r += a
                    }
                    return r
                }
                e.exports = function(e) {
                    var o, i = [];
                    t || (t = []),
                    n = 0,
                    a = 0,
                    s = 0,
                    c = -1,
                    l = !1,
                    d = u = 0,
                    m = null,
                    h = e,
                    A = 0;
                    do {
                        o = D(i, i.length, 1024)
                    } while (o > 0);return h = null,
                    i
                }
            }()
        }
        , function(e, t) {
            !function() {
                var t, n, o, i, r, a, s, c, l, d, u, m, f, p, _, h, A, g, k, b, v, y, w, C, B, E, x, S, T, I, P, N, L, F, O, M, R, j, V, z, D, U, G, W, q, H, K, Y, X, Z, Q, J, $, ee, te, ne, oe = 32768, ie = 0, re = 1, ae = 2, se = 6, ce = !1, le = 8192, de = 2 * oe, ue = 3, me = 258, fe = 8192, pe = fe, _e = 32768, he = _e - 1, Ae = oe - 1, ge = 0, ke = 4096, be = me + ue + 1, ve = oe - be, ye = 1, we = 15, Ce = 7, Be = 29, Ee = 256, xe = 256, Se = Ee + 1 + Be, Te = 30, Ie = 19, Pe = 16, Ne = 17, Le = 18, Fe = 2 * Se + 1, Oe = parseInt((15 + ue - 1) / ue, 10), Me = null;
                function Re() {
                    this.fc = 0,
                    this.dl = 0
                }
                function je() {
                    this.dyn_tree = null,
                    this.static_tree = null,
                    this.extra_bits = null,
                    this.extra_base = 0,
                    this.elems = 0,
                    this.max_length = 0,
                    this.max_code = 0
                }
                function Ve(e, t, n, o) {
                    this.good_length = e,
                    this.max_lazy = t,
                    this.nice_length = n,
                    this.max_chain = o
                }
                function ze() {
                    this.next = null,
                    this.len = 0,
                    this.ptr = [],
                    this.off = 0
                }
                fe > 32768 && console.error("error: INBUFSIZ is too small"),
                oe << 1 > 65536 && console.error("error: WSIZE is too large"),
                258 !== me && console.error("error: Code too clever");
                var De = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
                  , Ue = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
                  , Ge = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
                  , We = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                  , qe = [new Ve(0,0,0,0), new Ve(4,4,8,4), new Ve(4,5,16,8), new Ve(4,6,32,32), new Ve(4,4,16,16), new Ve(8,16,32,32), new Ve(8,16,128,128), new Ve(8,32,128,256), new Ve(32,128,258,1024), new Ve(32,258,258,4096)];
                function He(e) {
                    e.next = t,
                    t = e
                }
                function Ke(e) {
                    return u[oe + e]
                }
                function Ye(e, t) {
                    return u[oe + e] = t
                }
                function Xe(e) {
                    Me[a + r++] = e,
                    a + r === le && function() {
                        var e, i, s;
                        if (0 !== r) {
                            for (null !== t ? (s = t,
                            t = t.next) : s = new ze,
                            s.next = null,
                            s.len = s.off = 0,
                            e = s,
                            null === n ? n = o = e : o = o.next = e,
                            e.len = r - a,
                            i = 0; i < e.len; i++)
                                e.ptr[i] = Me[a + i];
                            r = a = 0
                        }
                    }()
                }
                function Ze(e) {
                    e &= 65535,
                    a + r < le - 2 ? (Me[a + r++] = 255 & e,
                    Me[a + r++] = e >>> 8) : (Xe(255 & e),
                    Xe(e >>> 8))
                }
                function Qe() {
                    _ = (_ << Oe ^ 255 & c[v + ue - 1]) & he,
                    h = Ke(_),
                    u[v & Ae] = h,
                    Ye(_, v)
                }
                function Je(e, t) {
                    At(t[e].fc, t[e].dl)
                }
                function $e(e) {
                    return 255 & (e < 256 ? W[e] : W[256 + (e >> 7)])
                }
                function et(e, t, n) {
                    return e[t].fc < e[n].fc || e[t].fc === e[n].fc && U[t] <= U[n]
                }
                function tt(e, t, n) {
                    var o;
                    for (o = 0; o < n && ne < te.length; o++)
                        e[t + o] = 255 & te[ne++];
                    return o
                }
                function nt(e) {
                    var t, n, o, i, r = B, a = v, s = b, l = v > ve ? v - ve : ge, d = v + me, m = c[a + s - 1], f = c[a + s];
                    b >= S && (r >>= 2);
                    do {
                        if (c[(t = e) + s] === f && c[t + s - 1] === m && c[t] === c[a] && c[++t] === c[a + 1]) {
                            for (a += 2,
                            t++; a < d; ) {
                                for (i = !1,
                                o = 0; o < 8; o += 1)
                                    if (t += 1,
                                    c[a += 1] !== c[t]) {
                                        i = !0;
                                        break
                                    }
                                if (i)
                                    break
                            }
                            if (n = me - (d - a),
                            a = d - me,
                            n > s) {
                                if (y = e,
                                s = n,
                                ce) {
                                    if (n >= me)
                                        break
                                } else if (n >= T)
                                    break;
                                m = c[a + s - 1],
                                f = c[a + s]
                            }
                        }
                    } while ((e = u[e & Ae]) > l && 0 != --r);return s
                }
                function ot() {
                    var e, t, n = de - C - v;
                    if (-1 === n)
                        n--;
                    else if (v >= oe + ve) {
                        for (e = 0; e < oe; e++)
                            c[e] = c[e + oe];
                        for (y -= oe,
                        v -= oe,
                        p -= oe,
                        e = 0; e < _e; e++)
                            Ye(e, (t = Ke(e)) >= oe ? t - oe : ge);
                        for (e = 0; e < oe; e++)
                            t = u[e],
                            u[e] = t >= oe ? t - oe : ge;
                        n += oe
                    }
                    w || ((e = tt(c, v + C, n)) <= 0 ? w = !0 : C += e)
                }
                function it() {
                    w || (m = 0,
                    f = 0,
                    function() {
                        var e, t, n, o, i;
                        if (0 === L[0].dl) {
                            for (O.dyn_tree = I,
                            O.static_tree = N,
                            O.extra_bits = De,
                            O.extra_base = Ee + 1,
                            O.elems = Se,
                            O.max_length = we,
                            O.max_code = 0,
                            M.dyn_tree = P,
                            M.static_tree = L,
                            M.extra_bits = Ue,
                            M.extra_base = 0,
                            M.elems = Te,
                            M.max_length = we,
                            M.max_code = 0,
                            R.dyn_tree = F,
                            R.static_tree = null,
                            R.extra_bits = Ge,
                            R.extra_base = 0,
                            R.elems = Ie,
                            R.max_length = Ce,
                            R.max_code = 0,
                            n = 0,
                            o = 0; o < Be - 1; o++)
                                for (q[o] = n,
                                e = 0; e < 1 << De[o]; e++)
                                    G[n++] = o;
                            for (G[n - 1] = o,
                            i = 0,
                            o = 0; o < 16; o++)
                                for (H[o] = i,
                                e = 0; e < 1 << Ue[o]; e++)
                                    W[i++] = o;
                            for (i >>= 7; o < Te; o++)
                                for (H[o] = i << 7,
                                e = 0; e < 1 << Ue[o] - 7; e++)
                                    W[256 + i++] = o;
                            for (t = 0; t <= we; t++)
                                j[t] = 0;
                            for (e = 0; e <= 143; )
                                N[e++].dl = 8,
                                j[8]++;
                            for (; e <= 255; )
                                N[e++].dl = 9,
                                j[9]++;
                            for (; e <= 279; )
                                N[e++].dl = 7,
                                j[7]++;
                            for (; e <= 287; )
                                N[e++].dl = 8,
                                j[8]++;
                            for (lt(N, Se + 1),
                            e = 0; e < Te; e++)
                                L[e].dl = 5,
                                L[e].fc = gt(e, 5);
                            st()
                        }
                    }(),
                    function() {
                        var e;
                        for (e = 0; e < _e; e++)
                            u[oe + e] = 0;
                        if (E = qe[x].max_lazy,
                        S = qe[x].good_length,
                        ce || (T = qe[x].nice_length),
                        B = qe[x].max_chain,
                        v = 0,
                        p = 0,
                        (C = tt(c, 0, 2 * oe)) <= 0)
                            return w = !0,
                            void (C = 0);
                        for (w = !1; C < be && !w; )
                            ot();
                        for (_ = 0,
                        e = 0; e < ue - 1; e++)
                            _ = (_ << Oe ^ 255 & c[e]) & he
                    }(),
                    n = null,
                    r = 0,
                    a = 0,
                    x <= 3 ? (b = ue - 1,
                    k = 0) : (k = ue - 1,
                    g = !1),
                    s = !1)
                }
                function rt(e, t, o) {
                    var r;
                    return i || (it(),
                    i = !0,
                    0 !== C) ? (r = at(e, t, o)) === o ? o : s ? r : (x <= 3 ? function() {
                        for (; 0 !== C && null === n; ) {
                            var e;
                            if (Qe(),
                            h !== ge && v - h <= ve && (k = nt(h)) > C && (k = C),
                            k >= ue)
                                if (e = pt(v - y, k - ue),
                                C -= k,
                                k <= E) {
                                    k--;
                                    do {
                                        v++,
                                        Qe()
                                    } while (0 != --k);v++
                                } else
                                    v += k,
                                    k = 0,
                                    _ = ((_ = 255 & c[v]) << Oe ^ 255 & c[v + 1]) & he;
                            else
                                e = pt(0, 255 & c[v]),
                                C--,
                                v++;
                            for (e && (ft(0),
                            p = v); C < be && !w; )
                                ot()
                        }
                    }() : function() {
                        for (; 0 !== C && null === n; ) {
                            if (Qe(),
                            b = k,
                            A = y,
                            k = ue - 1,
                            h !== ge && b < E && v - h <= ve && ((k = nt(h)) > C && (k = C),
                            k === ue && v - y > ke && k--),
                            b >= ue && k <= b) {
                                var e;
                                e = pt(v - 1 - A, b - ue),
                                C -= b - 1,
                                b -= 2;
                                do {
                                    v++,
                                    Qe()
                                } while (0 != --b);g = !1,
                                k = ue - 1,
                                v++,
                                e && (ft(0),
                                p = v)
                            } else
                                g ? (pt(0, 255 & c[v - 1]) && (ft(0),
                                p = v),
                                v++,
                                C--) : (g = !0,
                                v++,
                                C--);
                            for (; C < be && !w; )
                                ot()
                        }
                    }(),
                    0 === C && (g && pt(0, 255 & c[v - 1]),
                    ft(1),
                    s = !0),
                    r + at(e, r + t, o - r)) : (s = !0,
                    0)
                }
                function at(e, t, o) {
                    var i, s, c;
                    for (i = 0; null !== n && i < o; ) {
                        for ((s = o - i) > n.len && (s = n.len),
                        c = 0; c < s; c++)
                            e[t + i + c] = n.ptr[n.off + c];
                        var l;
                        n.off += s,
                        n.len -= s,
                        i += s,
                        0 === n.len && (l = n,
                        n = n.next,
                        He(l))
                    }
                    if (i === o)
                        return i;
                    if (a < r) {
                        for ((s = o - i) > r - a && (s = r - a),
                        c = 0; c < s; c++)
                            e[t + i + c] = Me[a + c];
                        i += s,
                        r === (a += s) && (r = a = 0)
                    }
                    return i
                }
                function st() {
                    var e;
                    for (e = 0; e < Se; e++)
                        I[e].fc = 0;
                    for (e = 0; e < Te; e++)
                        P[e].fc = 0;
                    for (e = 0; e < Ie; e++)
                        F[e].fc = 0;
                    I[xe].fc = 1,
                    $ = ee = 0,
                    Y = X = Z = 0,
                    Q = 0,
                    J = 1
                }
                function ct(e, t) {
                    for (var n = V[t], o = t << 1; o <= z && (o < z && et(e, V[o + 1], V[o]) && o++,
                    !et(e, n, V[o])); )
                        V[t] = V[o],
                        t = o,
                        o <<= 1;
                    V[t] = n
                }
                function lt(e, t) {
                    var n, o, i = [], r = 0;
                    for (n = 1; n <= we; n++)
                        r = r + j[n - 1] << 1,
                        i[n] = r;
                    for (o = 0; o <= t; o++) {
                        var a = e[o].dl;
                        0 !== a && (e[o].fc = gt(i[a]++, a))
                    }
                }
                function dt(e) {
                    var t, n, o = e.dyn_tree, i = e.static_tree, r = e.elems, a = -1, s = r;
                    for (z = 0,
                    D = Fe,
                    t = 0; t < r; t++)
                        0 !== o[t].fc ? (V[++z] = a = t,
                        U[t] = 0) : o[t].dl = 0;
                    for (; z < 2; ) {
                        var c = V[++z] = a < 2 ? ++a : 0;
                        o[c].fc = 1,
                        U[c] = 0,
                        $--,
                        null !== i && (ee -= i[c].dl)
                    }
                    for (e.max_code = a,
                    t = z >> 1; t >= 1; t--)
                        ct(o, t);
                    do {
                        t = V[ye],
                        V[ye] = V[z--],
                        ct(o, ye),
                        n = V[ye],
                        V[--D] = t,
                        V[--D] = n,
                        o[s].fc = o[t].fc + o[n].fc,
                        U[t] > U[n] + 1 ? U[s] = U[t] : U[s] = U[n] + 1,
                        o[t].dl = o[n].dl = s,
                        V[ye] = s++,
                        ct(o, ye)
                    } while (z >= 2);V[--D] = V[ye],
                    function(e) {
                        var t, n, o, i, r, a, s = e.dyn_tree, c = e.extra_bits, l = e.extra_base, d = e.max_code, u = e.max_length, m = e.static_tree, f = 0;
                        for (i = 0; i <= we; i++)
                            j[i] = 0;
                        for (s[V[D]].dl = 0,
                        t = D + 1; t < Fe; t++)
                            (i = s[s[n = V[t]].dl].dl + 1) > u && (i = u,
                            f++),
                            s[n].dl = i,
                            n > d || (j[i]++,
                            r = 0,
                            n >= l && (r = c[n - l]),
                            a = s[n].fc,
                            $ += a * (i + r),
                            null !== m && (ee += a * (m[n].dl + r)));
                        if (0 !== f) {
                            do {
                                for (i = u - 1; 0 === j[i]; )
                                    i--;
                                j[i]--,
                                j[i + 1] += 2,
                                j[u]--,
                                f -= 2
                            } while (f > 0);for (i = u; 0 !== i; i--)
                                for (n = j[i]; 0 !== n; )
                                    (o = V[--t]) > d || (s[o].dl !== i && ($ += (i - s[o].dl) * s[o].fc,
                                    s[o].fc = i),
                                    n--)
                        }
                    }(e),
                    lt(o, a)
                }
                function ut(e, t) {
                    var n, o, i = -1, r = e[0].dl, a = 0, s = 7, c = 4;
                    for (0 === r && (s = 138,
                    c = 3),
                    e[t + 1].dl = 65535,
                    n = 0; n <= t; n++)
                        o = r,
                        r = e[n + 1].dl,
                        ++a < s && o === r || (a < c ? F[o].fc += a : 0 !== o ? (o !== i && F[o].fc++,
                        F[Pe].fc++) : a <= 10 ? F[Ne].fc++ : F[Le].fc++,
                        a = 0,
                        i = o,
                        0 === r ? (s = 138,
                        c = 3) : o === r ? (s = 6,
                        c = 3) : (s = 7,
                        c = 4))
                }
                function mt(e, t) {
                    var n, o, i = -1, r = e[0].dl, a = 0, s = 7, c = 4;
                    for (0 === r && (s = 138,
                    c = 3),
                    n = 0; n <= t; n++)
                        if (o = r,
                        r = e[n + 1].dl,
                        !(++a < s && o === r)) {
                            if (a < c)
                                do {
                                    Je(o, F)
                                } while (0 != --a);
                            else
                                0 !== o ? (o !== i && (Je(o, F),
                                a--),
                                Je(Pe, F),
                                At(a - 3, 2)) : a <= 10 ? (Je(Ne, F),
                                At(a - 3, 3)) : (Je(Le, F),
                                At(a - 11, 7));
                            a = 0,
                            i = o,
                            0 === r ? (s = 138,
                            c = 3) : o === r ? (s = 6,
                            c = 3) : (s = 7,
                            c = 4)
                        }
                }
                function ft(e) {
                    var t, n, o, i, r;
                    if (i = v - p,
                    K[Z] = Q,
                    dt(O),
                    dt(M),
                    o = function() {
                        var e;
                        for (ut(I, O.max_code),
                        ut(P, M.max_code),
                        dt(R),
                        e = Ie - 1; e >= 3 && 0 === F[We[e]].dl; e--)
                            ;
                        return $ += 3 * (e + 1) + 5 + 5 + 4,
                        e
                    }(),
                    (n = ee + 3 + 7 >> 3) <= (t = $ + 3 + 7 >> 3) && (t = n),
                    i + 4 <= t && p >= 0)
                        for (At((ie << 1) + e, 3),
                        kt(),
                        Ze(i),
                        Ze(~i),
                        r = 0; r < i; r++)
                            Xe(c[p + r]);
                    else
                        n === t ? (At((re << 1) + e, 3),
                        _t(N, L)) : (At((ae << 1) + e, 3),
                        function(e, t, n) {
                            var o;
                            for (At(e - 257, 5),
                            At(t - 1, 5),
                            At(n - 4, 4),
                            o = 0; o < n; o++)
                                At(F[We[o]].dl, 3);
                            mt(I, e - 1),
                            mt(P, t - 1)
                        }(O.max_code + 1, M.max_code + 1, o + 1),
                        _t(I, P));
                    st(),
                    0 !== e && kt()
                }
                function pt(e, t) {
                    if (d[Y++] = t,
                    0 === e ? I[t].fc++ : (e--,
                    I[G[t] + Ee + 1].fc++,
                    P[$e(e)].fc++,
                    l[X++] = e,
                    Q |= J),
                    J <<= 1,
                    0 == (7 & Y) && (K[Z++] = Q,
                    Q = 0,
                    J = 1),
                    x > 2 && 0 == (4095 & Y)) {
                        var n, o = 8 * Y, i = v - p;
                        for (n = 0; n < Te; n++)
                            o += P[n].fc * (5 + Ue[n]);
                        if (o >>= 3,
                        X < parseInt(Y / 2, 10) && o < parseInt(i / 2, 10))
                            return !0
                    }
                    return Y === fe - 1 || X === pe
                }
                function _t(e, t) {
                    var n, o, i, r, a = 0, s = 0, c = 0, u = 0;
                    if (0 !== Y)
                        do {
                            0 == (7 & a) && (u = K[c++]),
                            o = 255 & d[a++],
                            0 == (1 & u) ? Je(o, e) : (Je((i = G[o]) + Ee + 1, e),
                            0 !== (r = De[i]) && At(o -= q[i], r),
                            Je(i = $e(n = l[s++]), t),
                            0 !== (r = Ue[i]) && At(n -= H[i], r)),
                            u >>= 1
                        } while (a < Y);Je(xe, e)
                }
                var ht = 16;
                function At(e, t) {
                    f > ht - t ? (Ze(m |= e << f),
                    m = e >> ht - f,
                    f += t - ht) : (m |= e << f,
                    f += t)
                }
                function gt(e, t) {
                    var n = 0;
                    do {
                        n |= 1 & e,
                        e >>= 1,
                        n <<= 1
                    } while (--t > 0);return n >> 1
                }
                function kt() {
                    f > 8 ? Ze(m) : f > 0 && Xe(m),
                    m = 0,
                    f = 0
                }
                e.exports = function(e, r) {
                    var a, s;
                    te = e,
                    ne = 0,
                    void 0 === r && (r = se),
                    function(e) {
                        var r;
                        if (e ? e < 1 ? e = 1 : e > 9 && (e = 9) : e = se,
                        x = e,
                        i = !1,
                        w = !1,
                        null === Me) {
                            for (t = n = o = null,
                            Me = [],
                            c = [],
                            l = [],
                            d = [],
                            u = [],
                            I = [],
                            r = 0; r < Fe; r++)
                                I[r] = new Re;
                            for (P = [],
                            r = 0; r < 2 * Te + 1; r++)
                                P[r] = new Re;
                            for (N = [],
                            r = 0; r < Se + 2; r++)
                                N[r] = new Re;
                            for (L = [],
                            r = 0; r < Te; r++)
                                L[r] = new Re;
                            for (F = [],
                            r = 0; r < 2 * Ie + 1; r++)
                                F[r] = new Re;
                            O = new je,
                            M = new je,
                            R = new je,
                            j = [],
                            V = [],
                            U = [],
                            G = [],
                            W = [],
                            q = [],
                            H = [],
                            K = []
                        }
                    }(r),
                    s = [];
                    do {
                        a = rt(s, s.length, 1024)
                    } while (a > 0);return te = null,
                    s
                }
                ,
                e.exports.DEFAULT_LEVEL = se
            }()
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.writeUTF = function(e) {
                for (var t, n = e.toString(), o = [], i = 0; i < n.length; i++)
                    0 <= (t = n.charCodeAt(i)) && t <= 127 ? o.push(t) : 128 <= t && t <= 2047 ? (o.push(192 | 31 & t >> 6),
                    o.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (o.push(224 | 15 & t >> 12),
                    o.push(128 | 63 & t >> 6),
                    o.push(128 | 63 & t));
                for (var r = 0; r < o.length; r++)
                    o[r] &= 255;
                return o
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.blockSize = 16,
            t.sbox0 = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
            t.sbox1 = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
            t.default = {}
        }
        ])
    }
}]);
