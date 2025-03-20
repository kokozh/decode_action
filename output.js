//Thu Mar 20 2025 14:17:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
async function _0x30cdd6() {
  await _0x48c740("[class*=\"elli_outerWrapper\"]", "");
  var _0x2fb252 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
    _0x4f5b8f = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    };
  try {
    var _0x23c3ff = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
        "method": "POST",
        "headers": _0x4f5b8f,
        "body": {},
        "credentials": "include"
      }),
      _0x1aae37 = await _0x23c3ff.json(),
      _0x59b8c8 = _0x1aae37.result.companyList[0].malInfoList.find(function (_0x50ca66) {
        return _0x2fb252 === _0x50ca66.mallName;
      });
    if (_0x59b8c8) {
      return _0x59b8c8.mallId;
    } else return null;
  } catch (_0x18dd83) {
    throw _0x18dd83;
  }
}
async function _0x48c740(_0x426635, _0x3471b3) {
  let _0x4b3034 = 0;
  const _0x50a6de = 30000;
  while (_0x4b3034 < _0x50a6de) {
    {
      let _0x5ac031 = document.querySelector(_0x426635);
      if (_0x5ac031 && _0x5ac031.textContent.includes(_0x3471b3)) {
        return;
      }
      await new Promise(_0x5108ce => setTimeout(_0x5108ce, 1000));
      _0x4b3034 += 1000;
    }
  }
}
function _0x2a9c78(_0x3febc3) {
  if (_0x3febc3.includes("www.temu.com")) return 0;
  history.pushState({
    "page": 1
  }, "title 1", _0x3febc3);
  history.back();
}
chrome.storage.local.get("codePhone", function (_0x293028) {
  const _0x46a47d = _0x293028.codePhone;
  _0x46a47d && window.location.href.includes("https://seller.kuajingmaihuo.com") && _0x30cdd6().then(_0x4f8627 => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x46a47d,
      "mallid": _0x4f8627,
      "model": "全局",
      "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
    }, _0x42bbab => {
      _0x42bbab.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x1e1570) {
        window.location.href.includes("https://seller.kuajingmaihuo.com") && (fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x41648a => _0x41648a.arrayBuffer()).then(_0x4cb082 => {
          crypto.subtle.digest("SHA-256", _0x4cb082).then(_0x3908d3 => {
            {
              const _0x55d6cc = Array.from(new Uint8Array(_0x3908d3)),
                _0x75398f = _0x55d6cc.map(_0x23af22 => _0x23af22.toString(16).padStart(2, "0")).join("");
              _0x75398f == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                "codePhone": ["", ""]
              });
            }
          });
        }), !function () {
          if (!document.getElementById("new-console-button")) {
            const _0x3383a2 = document.createElement("div");
            _0x3383a2.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
            _0x3383a2.style.fontFamily = "auto";
            _0x3383a2.style.fontSize = "18px";
            _0x3383a2.style.fontWeight = "600";
            _0x3383a2.style.color = "#fff";
            _0x3383a2.style.textAlign = "center";
            _0x3383a2.style.marginTop = "10px";
            _0x3383a2.style.marginBottom = "8px";
            _0x3383a2.style.cursor = "pointer";
            _0x3383a2.style.whiteSpace = "nowrap";
            _0x3383a2.style.padding = "1px";
            _0x3383a2.style.border = "none";
            _0x3383a2.style.transition = "all 0.3s ease";
            _0x3383a2.style.display = "flex";
            _0x3383a2.style.alignItems = "center";
            _0x3383a2.style.justifyContent = "center";
            _0x3383a2.style.gap = "8px";
            _0x3383a2.id = "new-console-button";
            const _0x1a21ed = document.createElement("img");
            _0x1a21ed.src = chrome.runtime.getURL("web/img/control.png");
            _0x1a21ed.style.width = "45px";
            _0x1a21ed.style.height = "45px";
            _0x1a21ed.style.objectFit = "contain";
            _0x3383a2.appendChild(_0x1a21ed);
            const _0x5e2a0f = document.createTextNode("咕噜噜插件控制台");
            _0x3383a2.appendChild(_0x5e2a0f);
            function _0x29a61f() {
              setTimeout(() => {
                const _0x21aceb = _0x60f1d1 ? _0x60f1d1.offsetWidth : 0;
                if (_0x21aceb < 200) _0x5e2a0f.textContent = "";else {
                  _0x5e2a0f.textContent = "咕噜噜插件控制台";
                }
              }, 150);
            }
            var _0x60f1d1 = document.querySelector("[class*=\"index-module__sidebarBox\"][class*=\"bg-shell-theme-mms-sidebarBox\"]");
            if (_0x60f1d1) {
              const _0xafcb58 = new ResizeObserver(() => {
                _0x29a61f();
              });
              _0xafcb58.observe(_0x60f1d1);
              _0x29a61f();
              _0x60f1d1.appendChild(_0x3383a2);
            }
            _0x3383a2.addEventListener("click", () => {
              var _0x9f7837 = document.getElementById("page-container-box"),
                _0x158c95 = document.getElementById("overlay-box");
              if (_0x9f7837) setTimeout(() => {
                _0x9f7837.style.transform = "translateY(0)";
                _0x158c95.style.display = "block";
              }, 100);else {
                const _0x1cc359 = document.createElement("div");
                _0x1cc359.style.position = "fixed";
                _0x1cc359.style.top = "0";
                _0x1cc359.style.left = "0";
                _0x1cc359.style.right = "0";
                _0x1cc359.style.bottom = "0";
                _0x1cc359.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                _0x1cc359.style.zIndex = "999";
                _0x1cc359.style.display = "none";
                _0x1cc359.id = "overlay-box";
                const _0x142c17 = document.createElement("div");
                _0x142c17.style.position = "fixed";
                _0x142c17.style.left = "0";
                _0x142c17.style.right = "0";
                _0x142c17.style.bottom = "0";
                _0x142c17.style.top = "35px";
                _0x142c17.style.backgroundColor = "white";
                _0x142c17.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
                _0x142c17.style.transition = "transform 0.3s ease-in-out";
                _0x142c17.style.transform = "translateY(100%)";
                _0x142c17.style.zIndex = "1000";
                _0x142c17.style.fontFamily = "auto";
                _0x142c17.id = "page-container-box";
                const _0x1b7b09 = document.createElement("div");
                _0x1b7b09.innerHTML = "&times;";
                _0x1b7b09.style.position = "absolute";
                _0x1b7b09.style.top = "10px";
                _0x1b7b09.style.right = "30px";
                _0x1b7b09.style.fontSize = "28px";
                _0x1b7b09.style.cursor = "pointer";
                _0x1b7b09.style.color = "#333";
                _0x1b7b09.addEventListener("click", () => {
                  _0x142c17.style.transform = "translateY(100%)";
                  _0x1cc359.style.display = "none";
                });
                _0x142c17.appendChild(_0x1b7b09);
                const _0x35e110 = document.createElement("div");
                _0x35e110.style.display = "flex";
                _0x35e110.style.alignItems = "center";
                const _0x1f15f0 = document.createElement("span");
                _0x1f15f0.id = "guluPluginConsole";
                _0x1f15f0.textContent = "咕噜噜插件控制台";
                _0x1f15f0.style.fontSize = "18px";
                _0x1f15f0.style.fontWeight = "bold";
                _0x1f15f0.style.margin = "15px 10px 8px 45px";
                const _0x38deca = document.createElement("button");
                _0x38deca.id = "guluBackendCenter";
                _0x38deca.textContent = "前往咕噜噜后台中心";
                _0x38deca.style.fontSize = "16px";
                _0x38deca.style.backgroundColor = "#ff7f50";
                _0x38deca.style.color = "white";
                _0x38deca.style.border = "none";
                _0x38deca.style.borderRadius = "4px";
                _0x38deca.style.cursor = "pointer";
                _0x38deca.style.height = "28px";
                _0x38deca.style.margin = "17px 0px 8px 0px";
                _0x35e110.appendChild(_0x1f15f0);
                _0x35e110.appendChild(_0x38deca);
                _0x38deca.addEventListener("click", () => {
                  chrome.runtime.sendMessage({
                    "action": "open_static_page"
                  });
                });
                _0x142c17.appendChild(_0x35e110);
                const _0x54b1b3 = document.createElement("hr");
                _0x54b1b3.style.border = "none";
                _0x54b1b3.style.borderTop = "1px solid #dddddd7d";
                _0x54b1b3.style.margin = "10px 0";
                _0x142c17.appendChild(_0x54b1b3);
                const _0x123544 = ["功能面板", "便捷访问", "快速核价助手", "数据导出工具箱", "一键爆单工具箱", "功能说明书"],
                  _0x3f9fb8 = document.createElement("div");
                _0x3f9fb8.style.display = "flex";
                _0x3f9fb8.style.justifyContent = "flex-start";
                _0x3f9fb8.style.padding = "0";
                _0x3f9fb8.style.margin = "0";
                _0x3f9fb8.style.borderBottom = "1px solid rgba(221, 221, 221, 0.49)";
                const _0x213743 = document.createElement("div");
                _0x213743.style.position = "absolute";
                _0x213743.style.height = "2px";
                _0x213743.style.backgroundColor = "#fb7701";
                _0x213743.style.bottom = "0";
                _0x213743.style.width = "0";
                _0x213743.style.left = "0";
                _0x123544.forEach((_0x5ea16a, _0x27f9dd) => {
                  const _0x340a9f = document.createElement("div");
                  _0x340a9f.style.fontSize = "14px";
                  _0x340a9f.style.padding = "10px 15px";
                  _0x340a9f.style.cursor = "pointer";
                  _0x340a9f.style.transition = "background-color 0.3s";
                  _0x340a9f.style.flexShrink = "0";
                  const _0x3ea046 = document.createElement("span");
                  _0x3ea046.textContent = _0x5ea16a;
                  _0x340a9f.appendChild(_0x3ea046);
                  _0x340a9f.style.color = "#333";
                  _0x340a9f.addEventListener("mouseenter", () => {
                    _0x340a9f.style.backgroundColor = "#f0f0f0";
                  });
                  _0x340a9f.addEventListener("mouseleave", () => {
                    _0x340a9f.style.backgroundColor = "transparent";
                  });
                  _0x340a9f.addEventListener("click", () => {
                    _0x3f9fb8.querySelectorAll("div").forEach(_0x2d10f2 => {
                      _0x2d10f2.style.color = "#333";
                    });
                    _0x340a9f.style.color = "#fb7701";
                    const _0x1cfa47 = _0x3ea046.getBoundingClientRect().width;
                    _0x213743.style.width = _0x1cfa47 + "px";
                    _0x213743.style.left = _0x340a9f.offsetLeft + (_0x340a9f.offsetWidth - _0x1cfa47) / 2 + "px";
                    _0x3a5b24(_0x27f9dd);
                  });
                  _0x3f9fb8.appendChild(_0x340a9f);
                });
                _0x3f9fb8.style.position = "relative";
                _0x3f9fb8.appendChild(_0x213743);
                _0x142c17.appendChild(_0x3f9fb8);
                document.body.appendChild(_0x142c17);
                document.body.appendChild(_0x1cc359);
                _0x1cc359.addEventListener("click", () => {
                  _0x142c17.style.transform = "translateY(100%)";
                  _0x1cc359.style.display = "none";
                });
                setTimeout(() => {
                  _0x142c17.style.transform = "translateY(0)";
                  _0x1cc359.style.display = "block";
                }, 100);
                const _0x44bd01 = _0x3f9fb8.querySelector("div");
                if (_0x44bd01) {
                  _0x44bd01.style.color = "#fb7701";
                  const _0x48775b = _0x44bd01.querySelector("span"),
                    _0x6f3872 = _0x48775b.getBoundingClientRect().width;
                  _0x213743.style.width = _0x6f3872 + "px";
                  _0x213743.style.left = _0x44bd01.offsetLeft + (_0x44bd01.offsetWidth - _0x6f3872) / 2 + "px";
                  _0x3a5b24(0);
                }
                function _0x3a5b24(_0x3e65ee) {
                  {
                    const _0x1c607b = _0x142c17.querySelector(".page-content");
                    if (_0x1c607b) {
                      _0x142c17.removeChild(_0x1c607b);
                    }
                    "咕噜噜插件控制台".replace(/\\u([\d\w]{4})/gi, (_0x55dc55, _0x1958f6) => String.fromCharCode(parseInt(_0x1958f6, 16))) == document.querySelector("#guluPluginConsole").innerText ? "" : !function () {
                      chrome.storage.local.set({
                        "codePhone": ["", ""]
                      });
                      window.location.reload();
                    }();
                    const _0x5ceca0 = document.createElement("iframe");
                    _0x5ceca0.classList.add("page-content");
                    _0x5ceca0.setAttribute("allow", "fullscreen");
                    _0x5ceca0.id = "gululu-iframe-box";
                    _0x5ceca0.style.width = "100%";
                    _0x5ceca0.style.height = "calc(100% - 110px)";
                    _0x5ceca0.style.border = "none";
                    _0x142c17.appendChild(_0x5ceca0);
                    try {
                      switch (_0x3e65ee) {
                        case 0:
                          _0x30cdd6().then(function (_0x456003) {
                            chrome.storage.local.set({
                              "mallId": _0x456003,
                              "shopname": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
                            });
                            _0x13f2be(_0x5ceca0);
                          });
                          break;
                        case 1:
                          _0x4de05e(_0x5ceca0);
                          break;
                        case 2:
                          _0x439587(_0x5ceca0);
                          break;
                        case 3:
                          _0x24fafc(_0x5ceca0);
                          break;
                        case 4:
                          _0x40c784(_0x5ceca0);
                          break;
                        case 5:
                          _0x5ceca0.src = "https://cyfc04r33n.feishu.cn/docx/ACsJdwh5ioScPYxFPWicuR5Rnpf?from=from_copylink";
                          break;
                        default:
                      }
                    } catch (_0x544e9f) {
                      console.log(_0x544e9f);
                    }
                    "前往咕噜噜后台中心".replace(/\\u([\d\w]{4})/gi, (_0x45b445, _0xfeadc) => String.fromCharCode(parseInt(_0xfeadc, 16))) == document.querySelector("#guluBackendCenter").innerText ? "" : !function () {
                      chrome.storage.local.set({
                        "codePhone": ["", ""]
                      });
                      window.location.reload();
                    }();
                  }
                }
              }
            });
          }
        }());
      }), _0x2a9c78(window.location.href));
    });
  });
});
function _0x13f2be(_0x4b9aac) {
  (function () {
    var _0x10b901 = function (_0x34562b, _0xe25cfb, _0x335c82) {
        for (var _0x141972 = _0xe25cfb.length, _0x5553a9 = _0x141972 - _0x335c82, _0x3c8aa4 = [], _0xf8ce77 = 0; _0xf8ce77 < _0x34562b.length;) for (var _0x347594 = 0, _0x15c80a = 1, _0x1e72b8;;) {
          _0x1e72b8 = _0xe25cfb.indexOf(_0x34562b[_0xf8ce77++]);
          if (_0x347594 += _0x15c80a * (_0x1e72b8 % _0x335c82), _0x1e72b8 < _0x335c82) {
            _0x3c8aa4.push(_0x347594 | 0);
            break;
          }
          _0x347594 += _0x335c82 * _0x15c80a;
          _0x15c80a *= _0x5553a9;
        }
        return _0x3c8aa4;
      },
      _0x2f3f11 = "0>S75Xc520kc5>Sd5OaR80e05S007k0yyR|3saR7k|3c5Ht0bT0SwRr7k>SWr2X5kwJ0Sx0D8rV0wJ58r<2XS0W8rlwJ8r2X0h0|3<|3SFg|3M7k|37ke0es7k0S00|30|37kE0+XpkwJ<wJSHrwJԵ8r<wJS~Xogl8rogwJ0h02X02X7k0So5g7k>SWr2X5kwJ0S20D8rV0wJ58r<2XS0W8rlwJ8r2X0h0|3<|3SFg|3M7k|37ke0VP7k0S00|30|37kE04TpkwJ<wJSHrwJԵ8r<wJS~Xogl8rogwJ0h02X02X7kE0mTt0R97kA20K7kt0RKS^RERѩ0L5cRm5iRL5-RL5y58ReRcRhReRy5ѩ045L5a58RVRa5a5L5cRw5L5|58RcRL5-ReRdRhR-ReRy5dR8RVReRa5Um0ѩ0-Rѩ0oRdRy5z5L5a5hRj0L5a58RL5cRUm0ѩ0-Rѩ0tR-Rѩ0m0VRa5j0eRa5+5eR-RL5jyFQzqѩnuh2Ih2I-+ucLudhfѩmq+5L58Rb5a58RL5cRn5dR-RLRVRa5hReRLRѩnuh2Ih2Ic76-yfzѩ68jFcLueO",
      _0x229119 = "length",
      _0x1bfbcd = _0x10b901(_0x2f3f11, "05Rks3XJrgPOTWAC19D<fFuIvq6lSp~ZBN>KHUMԵ=Y|E24wG8boVtL^+-iQdnexzhmcѩaj7y", 42),
      _0x5a6a59 = _0x1bfbcd[_0x229119];
    function _0x2a4be7(_0x3f33b4) {
      return _0x3f33b4.c[1];
    }
    for (var _0x245920 = "", _0x11f3ec = _0x5a6a59 + (_0x245920 + true)[_0x229119], _0x4ee082 = {
        "h": ""
      }, _0x1cddb2 = 0; _0x1cddb2 < 28; _0x1cddb2++) _0x245920 += String.fromCharCode(97 + Math.floor(26 * Math.random()));
    var _0x366bc8 = window,
      _0x44265b = _0x366bc8.Promise;
    function _0x4133c6(_0x2b42d3) {
      return _0x1bfbcd[_0x2b42d3.c[0]++] >> 5;
    }
    function _0xd11e30() {
      {
        var _0x5c5cd7 = [1, {
          "b": _0x366bc8,
          "l": null,
          "k": [],
          "c": [0],
          "f": undefined
        }, undefined];
        return {
          "c": _0x5c5cd7,
          "d": undefined
        };
      }
    }
    function _0xd398eb(_0x54edc2, _0x11a101) {
      for (;;) {
        {
          var _0x391267 = _0x54edc2.c[1];
          if (!_0x391267) throw _0x11a101;
          if (_0x391267.j) {
            _0x54edc2.d = {
              "e": _0x11a101
            };
            _0x54edc2.c[0] = _0x391267.j;
            return;
          }
          _0x54edc2.c = _0x391267.c;
        }
      }
    }
    var _0x5506e5 = _0xd11e30();
    function _0x47e23e(_0x2703fd, _0x5c6403) {
      _0x2703fd.c[_0x4133c6(_0x2703fd)] = _0x5c6403;
    }
    var _0x613f50 = function (_0x4c33f9, _0x177f17, _0x399c03, _0x33e8cf) {
        {
          var _0x324413 = _0x4c33f9[_0x177f17[0]++];
          if (_0x324413 & 1) return _0x324413 >> 1;
          if (_0x324413 === _0x399c03[0]) return null;
          if (_0x324413 === _0x399c03[5]) return true;
          if (_0x324413 === _0x399c03[4]) return false;
          if (_0x324413 === _0x399c03[1]) {
            if (_0x33e8cf != null && _0x33e8cf.i) return _0x33e8cf.i(_0x4c33f9[_0x177f17[0]++], _0x4c33f9[_0x177f17[0]++]);
            for (var _0x3fecb7 = "", _0x65797e = _0x4c33f9[_0x177f17[0]++], _0x22a5d3 = 0, _0x3b88ce; _0x22a5d3 < _0x65797e; _0x22a5d3++) {
              _0x3b88ce = _0x4c33f9[_0x177f17[0]++];
              _0x3fecb7 += String.fromCharCode(_0x3b88ce & 4294967232 | _0x3b88ce * 39 & 63);
            }
            return _0x3fecb7;
          }
          if (_0x324413 === _0x399c03[3]) {
            var _0x5d6bcf = _0x4c33f9[_0x177f17[0]++],
              _0x56857d = _0x4c33f9[_0x177f17[0]++],
              _0x52328e = _0x5d6bcf & 2147483648 ? -1 : 1,
              _0x94e7e4 = (_0x5d6bcf & 2146435072) >> 20,
              _0x1b34a7 = (_0x5d6bcf & 1048575) * Math.pow(2, 32) + (_0x56857d < 0 ? _0x56857d + Math.pow(2, 32) : _0x56857d);
            return _0x94e7e4 == 2047 ? _0x1b34a7 ? NaN : _0x52328e * Infinity : (_0x94e7e4 !== 0 ? _0x1b34a7 += Math.pow(2, 52) : _0x94e7e4++, _0x52328e * _0x1b34a7 * Math.pow(2, _0x94e7e4 - 1075));
          }
          if (_0x324413 !== _0x399c03[2]) return _0x177f17[_0x324413 >> 5];
        }
      },
      _0x3158cc = [2, 28, 36, 24, 16, 8];
    {
      _0x4ee082.i = function (_0x17ebc0, _0x324afc) {
        return "".slice(_0x17ebc0, _0x17ebc0 + _0x324afc);
      };
      var _0x449bae = _0x1bfbcd[_0x5a6a59 + _0x245920.indexOf(".")] ^ _0x11f3ec,
        _0x28d950 = _0x1bfbcd.splice(_0x449bae, _0x1bfbcd[_0x449bae + _0x5506e5.c[0]] + 2);
      _0x4ee082.h = _0x613f50(_0x28d950, _0x5506e5.c[1].c, _0x3158cc);
    }
    function _0x35ad3e(_0x453812) {
      return _0x613f50(_0x1bfbcd, _0x453812.c, _0x3158cc, _0x4ee082);
    }
    function _0x45f1ac(_0x3b7504, _0x5a2d49) {
      {
        var _0x6304d8 = _0x2a4be7(_0x3b7504);
        _0x6304d8.g = {
          "e": _0x5a2d49
        };
        return _0x6304d8.a ? _0x3b7504.c[0] = _0x6304d8.a : _0x6304d8.c.length == 1 ? (_0x3b7504.c[2] = _0x5a2d49, null) : (_0x3b7504.c = _0x6304d8.c, _0x3b7504.c[2] = _0x5a2d49, undefined);
      }
    }
    var _0x523d30 = [function (_0x48111d, _0x3b38bb, _0x3feabb) {
      _0x3feabb(_0x48111d, _0x3b38bb(_0x48111d));
    }, function (_0x4dee04, _0x24133b, _0x1a8ca8) {
      _0x1a8ca8(_0x4dee04, Array(_0x24133b(_0x4dee04)));
    }, function (_0x509f88, _0x570e47, _0x3ec745, _0x52cd91, _0x3f3c80, _0x349e80) {
      var _0x2084bf = _0x349e80[0],
        _0x522649 = _0x349e80[1];
      if (_0x509f88.d) _0x522649(_0x509f88, _0x509f88.d.e);else {
        {
          var _0x566059 = _0x52cd91(_0x509f88);
          return _0x566059 != null && _0x566059.g && _0x2084bf(_0x509f88, _0x566059.g.e);
        }
      }
    }, function (_0x55b284, _0x11dd2d, _0x4e5b48, _0x5af4f6) {
      _0x5af4f6(_0x55b284).k[_0x11dd2d(_0x55b284)] = undefined;
    }, function (_0xc626b9, _0x5a4fcb, _0x5920d0) {
      {
        var _0x3da138 = _0x5a4fcb(_0xc626b9),
          _0x34758f = _0x5a4fcb(_0xc626b9),
          _0x13b397 = _0x5a4fcb(_0xc626b9);
        _0x5920d0(_0xc626b9, _0x3da138(_0x34758f, _0x13b397));
      }
    }, function (_0x2c653e, _0x1888d4, _0x2aa54e) {
      _0x2aa54e(_0x2c653e, _0x1888d4(_0x2c653e) % _0x1888d4(_0x2c653e));
    }, function (_0x579d1d, _0x22bb91, _0x45e570) {
      _0x45e570(_0x579d1d, _0x22bb91(_0x579d1d) / _0x22bb91(_0x579d1d));
    }, function (_0x20ab36, _0x5ba5f4, _0x40ba08, _0x21993e, _0x108541, _0x509c72) {
      var _0x1ae80d = _0x509c72[0],
        _0x84463d = _0x5ba5f4(_0x20ab36);
      return _0x1ae80d(_0x20ab36, _0x84463d);
    }, function (_0x54b319, _0x2e9cc0, _0x1282c3, _0x598d5e, _0x9beb82, _0x3b1bf3) {
      var _0x1f09e1 = _0x3b1bf3[1],
        _0x5bbb9c = _0x2e9cc0(_0x54b319);
      _0x1f09e1(_0x54b319, _0x5bbb9c);
    }, function (_0x31e644, _0x6318ea, _0x21b13b) {
      _0x21b13b(_0x31e644, _0x6318ea(_0x31e644) & _0x6318ea(_0x31e644));
    }, function (_0x982a7, _0x1969b2, _0x197b3c) {
      _0x197b3c(_0x982a7, _0x1969b2(_0x982a7) instanceof _0x1969b2(_0x982a7));
    }, function (_0x48b38c, _0xc10801, _0x4f4004) {
      _0x4f4004(_0x48b38c, _0xc10801(_0x48b38c) + _0xc10801(_0x48b38c));
    }, function (_0xce2c24, _0x54fec7, _0x1f2e76) {
      _0x1f2e76(_0xce2c24, _0x54fec7(_0xce2c24) << _0x54fec7(_0xce2c24));
    }, function (_0x11c8dc, _0x3d6ed0, _0x18be4d) {
      var _0x5c025f = _0x3d6ed0(_0x11c8dc),
        _0x101569 = _0x3d6ed0(_0x11c8dc).slice();
      _0x101569.unshift(undefined);
      _0x18be4d(_0x11c8dc, new (Function.bind.apply(_0x5c025f, _0x101569))());
    }, function (_0x4bbe97) {
      _0x4bbe97.d = undefined;
    }, function (_0x2c1535, _0x1560c0, _0x454789) {
      _0x454789(_0x2c1535, _0x1560c0(_0x2c1535) in _0x1560c0(_0x2c1535));
    }, function (_0x50d846, _0x454376, _0x191bfc) {
      _0x191bfc(_0x50d846, _0x454376(_0x50d846) ^ _0x454376(_0x50d846));
    }, function (_0x2fb99b, _0x40a881, _0xa3c020) {
      _0xa3c020(_0x2fb99b, _0x2fb99b.d && _0x2fb99b.d.e);
    }, function (_0x5934a5, _0x48e689, _0x4cad64) {
      _0x4cad64(_0x5934a5, {});
    }, function (_0x29561c, _0x9df884, _0x439b5e) {
      _0x439b5e(_0x29561c, _0x9df884(_0x29561c)[_0x9df884(_0x29561c)]);
    }, function (_0x27fd6e, _0x338248, _0x5164a6) {
      _0x5164a6(_0x27fd6e, _0x338248(_0x27fd6e) >>> _0x338248(_0x27fd6e));
    }, function (_0x29e65b, _0x46062f, _0x347f28) {
      var _0x1ac634 = _0x46062f(_0x29e65b),
        _0x455dc3 = [];
      for (var _0x5ca2fa in _0x1ac634) _0x455dc3.push(_0x5ca2fa);
      _0x347f28(_0x29e65b, _0x455dc3);
    }, function (_0x56ea2d, _0x2bca73, _0xa55a61) {
      _0xa55a61(_0x56ea2d, _0x2bca73(_0x56ea2d) === _0x2bca73(_0x56ea2d));
    }, function (_0x1db3aa, _0x430a6d, _0x188d5f) {
      _0x188d5f(_0x1db3aa, _0x430a6d(_0x1db3aa) * _0x430a6d(_0x1db3aa));
    }, function (_0x439eb6, _0x3d16e0, _0x1d8d5b, _0x43e51a) {
      {
        for (var _0x26720f = _0x3d16e0(_0x439eb6), _0x46b874 = _0x3d16e0(_0x439eb6), _0x3c32cf = _0x43e51a(_0x439eb6); _0x3c32cf; _0x3c32cf = _0x3c32cf.f) if (_0x26720f in _0x3c32cf.k) {
          _0x3c32cf.k[_0x26720f] = _0x46b874;
          return;
        }
        throw "ball";
      }
    }, function (_0x5cdee6, _0x573022, _0x32143e) {
      _0x32143e(_0x5cdee6, typeof _0x573022(_0x5cdee6));
    }, function (_0x199947, _0xf4a0a4, _0x3069dc) {
      _0x3069dc(_0x199947, _0xf4a0a4(_0x199947) | _0xf4a0a4(_0x199947));
    }, function (_0x3beaff, _0x2effda, _0x40444d, _0x45b4ce, _0x3f92b3, _0x208d2e) {
      var _0xf4afc7 = _0x2effda(_0x3beaff),
        _0x40d15b = _0x2effda(_0x3beaff),
        _0x13908c = _0x2effda(_0x3beaff),
        _0x20bdc6 = _0x208d2e[4];
      if (_0x40d15b[_0x20bdc6] && _0x40d15b[_0x20bdc6].o === _0x40d15b) {
        _0x3beaff.c = [_0x40d15b[_0x20bdc6].n, {
          "b": _0x13908c,
          "l": _0x40d15b,
          "c": _0x3beaff.c,
          "k": [],
          "f": _0x40d15b[_0x20bdc6].f
        }, undefined, function () {
          return arguments;
        }.apply(undefined, _0xf4afc7)];
        for (var _0x5c7a65 = 0; _0x5c7a65 < _0xf4afc7.length; _0x5c7a65++) _0x3beaff.c.push(_0xf4afc7[_0x5c7a65]);
      } else _0x3beaff.c[2] = _0x40d15b.apply(_0x13908c, _0xf4afc7);
    }, function (_0x4c9ed4, _0x362d69, _0x444bfa) {
      var _0x566c02 = _0x362d69(_0x4c9ed4),
        _0x36be30 = _0x362d69(_0x4c9ed4);
      _0x444bfa(_0x4c9ed4, _0x566c02(_0x36be30));
    }, function (_0x581224, _0x1f16ec, _0x380156, _0x5b0b1b) {
      for (var _0x5acb52 = _0x1f16ec(_0x581224), _0x18bb41 = _0x5b0b1b(_0x581224); _0x18bb41; _0x18bb41 = _0x18bb41.f) if (_0x5acb52 in _0x18bb41.k) {
        _0x380156(_0x581224, _0x18bb41.k[_0x5acb52]);
        return;
      }
      throw "ball";
    }, function (_0x3e03f7, _0x512ae3) {
      var _0x26b7a9 = _0x512ae3(_0x3e03f7);
      _0x3e03f7.c[1].a = _0x26b7a9;
    }, function (_0x53c66a, _0x90e66a, _0x3c1e6b, _0x215463, _0x3552f0, _0x3666ac) {
      var _0x16f105 = _0x3552f0[1];
      _0x3c1e6b(_0x53c66a, _0x16f105[0]);
    }, function (_0x46581d, _0x325c64, _0x58607c) {
      _0x58607c(_0x46581d, _0x325c64(_0x46581d) >= _0x325c64(_0x46581d));
    }, function (_0x31d63a, _0x59fac0, _0x5725be) {
      _0x5725be(_0x31d63a, undefined);
    }, function (_0x456537, _0x5038fd, _0x365073, _0x2a096f, _0xe396b0, _0x115f41) {
      var _0x3f9a3e = _0xe396b0[0];
      _0x365073(_0x456537, _0x3f9a3e[_0x5038fd(_0x456537)]);
    }, function (_0x3652c4, _0x253dab, _0x127c5d, _0x16a7eb, _0x5e9cc0, _0x4da3ae) {
      var _0x1a4053 = _0x4da3ae[0];
      return _0x1a4053(_0x3652c4, undefined);
    }, function () {
      return null;
    }, function (_0x4f5ac8, _0x4988b7, _0x7cd1e2) {
      _0x7cd1e2(_0x4f5ac8, !_0x4988b7(_0x4f5ac8));
    }, function (_0x10f3e9, _0x50d012, _0x477f97) {
      _0x477f97(_0x10f3e9, _0x50d012(_0x10f3e9) == _0x50d012(_0x10f3e9));
    }, function (_0x593528, _0x489a3f, _0x10b456) {
      _0x10b456(_0x593528, []);
    }, function (_0x4ca8de, _0x394404, _0x4156f0) {
      _0x4156f0(_0x4ca8de, _0x394404(_0x4ca8de) <= _0x394404(_0x4ca8de));
    }, function (_0x51233c, _0x3b40ae, _0x5278e4) {
      var _0x770c9b = _0x3b40ae(_0x51233c),
        _0x241104 = _0x3b40ae(_0x51233c),
        _0x2fd56f = _0x3b40ae(_0x51233c),
        _0xa9bc4d = _0x3b40ae(_0x51233c);
      _0x5278e4(_0x51233c, _0x770c9b(_0x241104, _0x2fd56f, _0xa9bc4d));
    }, function (_0x50dc56, _0x45bc3f, _0x3a4829) {
      var _0x175d5b = _0x45bc3f(_0x50dc56),
        _0x116cee = _0x45bc3f(_0x50dc56);
      _0x3a4829(_0x50dc56, delete _0x175d5b[_0x116cee]);
    }, function (_0x5c4090, _0x2ded3b) {
      _0x5c4090.c[0] = _0x2ded3b(_0x5c4090);
    }, function (_0x38d922, _0x39c74e, _0x3fc54b, _0x7736f0) {
      _0x7736f0(_0x38d922).k[_0x39c74e(_0x38d922)] = _0x39c74e(_0x38d922);
    }, function (_0x28ffad, _0x163374, _0x464dc2) {
      _0x464dc2(_0x28ffad, _0x163374(_0x28ffad) < _0x163374(_0x28ffad));
    }, function (_0x32f7ee, _0x1a9d02, _0x32e145) {
      _0x32e145(_0x32f7ee, _0x1a9d02(_0x32f7ee) > _0x1a9d02(_0x32f7ee));
    }, function (_0x3c3ad1, _0x51537c, _0xe3807d) {
      _0xe3807d(_0x3c3ad1, _0x51537c(_0x3c3ad1) >> _0x51537c(_0x3c3ad1));
    }, function (_0x337687, _0x53a2c8, _0x49a958, _0x43eaa0, _0x4ae7bd, _0x6bb861) {
      {
        var _0x44a03e = _0x53a2c8(_0x337687),
          _0x1c15c6 = _0x53a2c8(_0x337687),
          _0x52fa70 = _0x53a2c8(_0x337687),
          _0x228c2f = _0x43eaa0(_0x337687),
          _0x126b35 = _0x6bb861[2],
          _0x3c5d0c = _0x6bb861[3],
          _0xf0e8ae = _0x6bb861[4],
          _0x8f1beb = function () {
            var _0x74d447 = _0x126b35();
            _0x74d447.c[3] = arguments;
            for (var _0x5581d5 = 0; _0x5581d5 < arguments.length; _0x5581d5++) _0x74d447.c[_0x5581d5 + 4] = arguments[_0x5581d5];
            _0x74d447.c[1] = {
              "b": this,
              "c": [0],
              "k": [],
              "f": _0x228c2f,
              "l": _0x8f1beb
            };
            _0x74d447.c[0] = _0x44a03e;
            _0x3c5d0c(_0x74d447);
            return _0x74d447.c[2];
          };
        try {
          Object.defineProperty(_0x8f1beb, "length", {
            "value": _0x1c15c6
          });
          Object.defineProperty(_0x8f1beb, "name", {
            "value": _0x52fa70
          });
        } catch (_0x45eb1c) {
          {
            for (var _0x495ce3 = false, _0x4651c1 = "", _0x1bec1e = 0; _0x1bec1e < _0x1c15c6; _0x1bec1e++) _0x495ce3 ? _0x4651c1 += ",a".concat(_0x1bec1e) : (_0x4651c1 += "a".concat(_0x1bec1e), _0x495ce3 = true);
            _0x8f1beb = new Function("fn", "return function ".concat(_0x52fa70, "(").concat(_0x4651c1, "){return fn.apply(this, arguments)}"))(_0x8f1beb);
          }
        }
        _0x8f1beb[_0xf0e8ae] = {
          "n": _0x44a03e,
          "f": _0x228c2f,
          "o": _0x8f1beb
        };
        _0x49a958(_0x337687, _0x8f1beb);
      }
    }, function (_0xc1ce5, _0x5360bc) {
      var _0x1fa72e = _0x5360bc(_0xc1ce5);
      _0x5360bc(_0xc1ce5) ? _0xc1ce5.c[0] = _0x1fa72e : _0x1fa72e;
    }, function (_0x383937, _0x49f321, _0x97df0b) {
      _0x97df0b(_0x383937, _0x383937.c[1].b);
    }, function (_0x4e9327, _0x30dd82, _0x5ddcf7) {
      _0x30dd82(_0x4e9327)[_0x30dd82(_0x4e9327)] = _0x30dd82(_0x4e9327);
    }, function (_0x17d3a7, _0x51d2f9) {
      var _0x4c5c1a = _0x51d2f9(_0x17d3a7);
      _0x17d3a7.c[1].j = _0x4c5c1a;
    }, function (_0x2e8a76, _0x3879c3, _0x30b490) {
      _0x30b490(_0x2e8a76, new RegExp(_0x3879c3(_0x2e8a76), _0x3879c3(_0x2e8a76)));
    }, function (_0x5913a8, _0x1b7208, _0x5d4470, _0x1459e7, _0x399ac0, _0x14f9b2) {
      {
        var _0x9157a3 = _0x399ac0[1];
        _0x5d4470(_0x5913a8, _0x9157a3[1]);
      }
    }, function (_0x1f1fe3, _0x277a07, _0x1dc6ac, _0x44d9fd) {
      var _0x184474 = _0x277a07(_0x1f1fe3),
        _0x12a94b = _0x44d9fd(_0x1f1fe3),
        _0x19c102 = _0x1f1fe3.l;
      _0x12a94b.k[_0x184474] = _0x19c102;
    }, function (_0x23140c, _0x416246, _0x248082) {
      _0x248082(_0x23140c, ~_0x416246(_0x23140c));
    }, function (_0x24e8b6, _0x181f0b, _0x4a5979) {
      _0x4a5979(_0x24e8b6, _0x181f0b(_0x24e8b6) != _0x181f0b(_0x24e8b6));
    }, function (_0x357f80, _0x5a77d3, _0xcfc5c6) {
      _0xcfc5c6(_0x357f80, _0x5a77d3(_0x357f80) - _0x5a77d3(_0x357f80));
    }, function (_0x4b20e7, _0x16036a, _0x5441c0) {
      var _0x20c37b = _0x16036a(_0x4b20e7);
      _0x5441c0(_0x4b20e7, _0x20c37b());
    }, function (_0x14a9f4, _0x307911, _0x2500ba) {
      _0x2500ba(_0x14a9f4, _0x307911(_0x14a9f4) !== _0x307911(_0x14a9f4));
    }, function (_0x1c8570, _0x3f5f8f) {
      var _0x19ba2a = _0x3f5f8f(_0x1c8570);
      _0x3f5f8f(_0x1c8570) ? _0x19ba2a : _0x1c8570.c[0] = _0x19ba2a;
    }];
    function _0x2cde5a(_0x183a5b) {
      return _0x183a5b.c[_0x1bfbcd[_0x183a5b.c[0]++] >> 5];
    }
    var _0x52cfc0 = function () {
      'use strict';

      var _0x1a2464,
        _0x3a322e = {},
        _0x32162c = Object.prototype,
        _0x1aa2cc = _0x32162c.hasOwnProperty,
        _0x142a60 = "function" == typeof Symbol ? Symbol : {},
        _0x5f2959 = _0x142a60.iterator || "@@iterator",
        _0x57b702 = _0x142a60.asyncIterator || "@@asyncIterator",
        _0x3a78b0 = _0x142a60.toStringTag || "@@toStringTag";
      function _0x310a8a(_0x33b613, _0x2066cf, _0x25b1e4) {
        Object.defineProperty(_0x33b613, _0x2066cf, {
          "value": _0x25b1e4,
          "enumerable": true,
          "configurable": true,
          "writable": true
        });
        return _0x33b613[_0x2066cf];
      }
      try {
        _0x310a8a({}, "");
      } catch (_0xd33149) {
        _0x310a8a = function (_0x1ccb7f, _0xa90d8f, _0x35e963) {
          return _0x1ccb7f[_0xa90d8f] = _0x35e963;
        };
      }
      function _0x160f82(_0x32d9ba, _0x55f9f8, _0x21115d, _0x389450) {
        {
          var _0x54dc14 = _0x55f9f8 && _0x55f9f8.prototype instanceof _0x35e499 ? _0x55f9f8 : _0x35e499,
            _0x27553d = Object.create(_0x54dc14.prototype),
            _0x164432 = new _0x19cf30(_0x389450 || []);
          _0x27553d._invoke = function (_0x253e1d, _0x453814, _0x4a07c0) {
            {
              var _0x26b02c = _0x44a912;
              return function (_0x52cafc, _0xbf2754) {
                {
                  if (_0x26b02c === _0x1e4b04) throw new Error("Generator is already running");
                  if (_0x26b02c === _0x9c5d8e) {
                    if ("throw" === _0x52cafc) throw _0xbf2754;
                    return _0x52570d();
                  }
                  for (_0x4a07c0.method = _0x52cafc, _0x4a07c0.arg = _0xbf2754;;) {
                    var _0x14858e = _0x4a07c0.delegate;
                    if (_0x14858e) {
                      var _0x4014bd = _0x4ec648(_0x14858e, _0x4a07c0);
                      if (_0x4014bd) {
                        if (_0x4014bd === _0x32d15a) continue;
                        return _0x4014bd;
                      }
                    }
                    if ("next" === _0x4a07c0.method) _0x4a07c0.sent = _0x4a07c0._sent = _0x4a07c0.arg;else {
                      if ("throw" === _0x4a07c0.method) {
                        if (_0x26b02c === _0x44a912) throw _0x26b02c = _0x9c5d8e, _0x4a07c0.arg;
                        _0x4a07c0.dispatchException(_0x4a07c0.arg);
                      } else "return" === _0x4a07c0.method && _0x4a07c0.abrupt("return", _0x4a07c0.arg);
                    }
                    _0x26b02c = _0x1e4b04;
                    var _0x27e50b = _0x3d3875(_0x253e1d, _0x453814, _0x4a07c0);
                    if ("normal" === _0x27e50b.type) {
                      {
                        if (_0x26b02c = _0x4a07c0.done ? _0x9c5d8e : _0x36927b, _0x27e50b.arg === _0x32d15a) continue;
                        return {
                          "value": _0x27e50b.arg,
                          "done": _0x4a07c0.done
                        };
                      }
                    }
                    "throw" === _0x27e50b.type && (_0x26b02c = _0x9c5d8e, _0x4a07c0.method = "throw", _0x4a07c0.arg = _0x27e50b.arg);
                  }
                }
              };
            }
          }(_0x32d9ba, _0x21115d, _0x164432);
          return _0x27553d;
        }
      }
      function _0x3d3875(_0x25817f, _0x461669, _0x3be3fe) {
        try {
          return {
            "type": "normal",
            "arg": _0x25817f.call(_0x461669, _0x3be3fe)
          };
        } catch (_0x1a3731) {
          return {
            "type": "throw",
            "arg": _0x1a3731
          };
        }
      }
      _0x3a322e.wrap = _0x160f82;
      var _0x44a912 = "suspendedStart",
        _0x36927b = "suspendedYield",
        _0x1e4b04 = "executing",
        _0x9c5d8e = "completed",
        _0x32d15a = {};
      function _0x35e499() {}
      function _0x4017f3() {}
      function _0x1c9fe9() {}
      var _0x4aca1d = {};
      _0x4aca1d[_0x5f2959] = function () {
        return this;
      };
      var _0x343400 = Object.getPrototypeOf,
        _0xe7f4f7 = _0x343400 && _0x343400(_0x343400(_0x53bd78([])));
      _0xe7f4f7 && _0xe7f4f7 !== _0x32162c && _0x1aa2cc.call(_0xe7f4f7, _0x5f2959) && (_0x4aca1d = _0xe7f4f7);
      var _0x25fa4c = _0x1c9fe9.prototype = _0x35e499.prototype = Object.create(_0x4aca1d);
      function _0xd1f246(_0x50e9ce) {
        ["next", "throw", "return"].forEach(function (_0x4ca603) {
          _0x310a8a(_0x50e9ce, _0x4ca603, function (_0x37bb3c) {
            return this._invoke(_0x4ca603, _0x37bb3c);
          });
        });
      }
      function _0x8d9997(_0x418e5b, _0x345d06) {
        {
          var _0x1f7515;
          this._invoke = function (_0x60f02d, _0x367b51) {
            {
              function _0x359425() {
                return new _0x345d06(function (_0x52b83b, _0x2b5b8c) {
                  !function _0x12c4c4(_0x217c24, _0x337ffc, _0x1f8ed3, _0x1a12e7) {
                    {
                      var _0x1c1a1a = _0x3d3875(_0x418e5b[_0x217c24], _0x418e5b, _0x337ffc);
                      if ("throw" !== _0x1c1a1a.type) {
                        var _0x451c65 = _0x1c1a1a.arg,
                          _0xd0eedf = _0x451c65.value;
                        return _0xd0eedf && "object" == typeof _0xd0eedf && _0x1aa2cc.call(_0xd0eedf, "__await") ? _0x345d06.resolve(_0xd0eedf.__await).then(function (_0x471427) {
                          _0x12c4c4("next", _0x471427, _0x1f8ed3, _0x1a12e7);
                        }, function (_0x8eead) {
                          _0x12c4c4("throw", _0x8eead, _0x1f8ed3, _0x1a12e7);
                        }) : _0x345d06.resolve(_0xd0eedf).then(function (_0x22f0a4) {
                          _0x451c65.value = _0x22f0a4;
                          _0x1f8ed3(_0x451c65);
                        }, function (_0x140904) {
                          return _0x12c4c4("throw", _0x140904, _0x1f8ed3, _0x1a12e7);
                        });
                      }
                      _0x1a12e7(_0x1c1a1a.arg);
                    }
                  }(_0x60f02d, _0x367b51, _0x52b83b, _0x2b5b8c);
                });
              }
              return _0x1f7515 = _0x1f7515 ? _0x1f7515.then(_0x359425, _0x359425) : _0x359425();
            }
          };
        }
      }
      function _0x4ec648(_0x3c0b42, _0x31087f) {
        {
          var _0x36967e = _0x3c0b42.iterator[_0x31087f.method];
          if (_0x36967e === _0x1a2464) {
            {
              if (_0x31087f.delegate = null, "throw" === _0x31087f.method) {
                {
                  if (_0x3c0b42.iterator.return && (_0x31087f.method = "return", _0x31087f.arg = _0x1a2464, _0x4ec648(_0x3c0b42, _0x31087f), "throw" === _0x31087f.method)) return _0x32d15a;
                  _0x31087f.method = "throw";
                  _0x31087f.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
              }
              return _0x32d15a;
            }
          }
          var _0x45384b = _0x3d3875(_0x36967e, _0x3c0b42.iterator, _0x31087f.arg);
          if ("throw" === _0x45384b.type) return _0x31087f.method = "throw", _0x31087f.arg = _0x45384b.arg, _0x31087f.delegate = null, _0x32d15a;
          var _0x12a94a = _0x45384b.arg;
          return _0x12a94a ? _0x12a94a.done ? (_0x31087f[_0x3c0b42.resultName] = _0x12a94a.value, _0x31087f.next = _0x3c0b42.nextLoc, "return" !== _0x31087f.method && (_0x31087f.method = "next", _0x31087f.arg = _0x1a2464), _0x31087f.delegate = null, _0x32d15a) : _0x12a94a : (_0x31087f.method = "throw", _0x31087f.arg = new TypeError("iterator result is not an object"), _0x31087f.delegate = null, _0x32d15a);
        }
      }
      function _0x57de63(_0x23e099) {
        {
          var _0x25506f = {
            "tryLoc": _0x23e099[0]
          };
          1 in _0x23e099 && (_0x25506f.catchLoc = _0x23e099[1]);
          2 in _0x23e099 && (_0x25506f.finallyLoc = _0x23e099[2], _0x25506f.afterLoc = _0x23e099[3]);
          this.tryEntries.push(_0x25506f);
        }
      }
      function _0x4497ca(_0x52fbe5) {
        var _0x3912c4 = _0x52fbe5.completion || {};
        _0x3912c4.type = "normal";
        delete _0x3912c4.arg;
        _0x52fbe5.completion = _0x3912c4;
      }
      function _0x19cf30(_0x2e4f4c) {
        this.tryEntries = [{
          "tryLoc": "root"
        }];
        _0x2e4f4c.forEach(_0x57de63, this);
        this.reset(true);
      }
      function _0x53bd78(_0x37c799) {
        if (_0x37c799) {
          var _0x277669 = _0x37c799[_0x5f2959];
          if (_0x277669) return _0x277669.call(_0x37c799);
          if ("function" == typeof _0x37c799.next) return _0x37c799;
          if (!isNaN(_0x37c799.length)) {
            {
              var _0x250bc5 = -1,
                _0x507718 = function _0x412292() {
                  for (; ++_0x250bc5 < _0x37c799.length;) if (_0x1aa2cc.call(_0x37c799, _0x250bc5)) return _0x412292.value = _0x37c799[_0x250bc5], _0x412292.done = false, _0x412292;
                  _0x412292.value = _0x1a2464;
                  _0x412292.done = true;
                  return _0x412292;
                };
              return _0x507718.next = _0x507718;
            }
          }
        }
        return {
          "next": _0x52570d
        };
      }
      function _0x52570d() {
        return {
          "value": _0x1a2464,
          "done": true
        };
      }
      _0x4017f3.prototype = _0x25fa4c.constructor = _0x1c9fe9;
      _0x1c9fe9.constructor = _0x4017f3;
      _0x4017f3.displayName = _0x310a8a(_0x1c9fe9, _0x3a78b0, "GeneratorFunction");
      _0x3a322e.isGeneratorFunction = function (_0x220997) {
        {
          var _0x1a1cdf = "function" == typeof _0x220997 && _0x220997.constructor;
          return !!_0x1a1cdf && (_0x1a1cdf === _0x4017f3 || "GeneratorFunction" === (_0x1a1cdf.displayName || _0x1a1cdf.name));
        }
      };
      _0x3a322e.mark = function (_0x844bf1) {
        Object.setPrototypeOf ? Object.setPrototypeOf(_0x844bf1, _0x1c9fe9) : (_0x844bf1.__proto__ = _0x1c9fe9, _0x310a8a(_0x844bf1, _0x3a78b0, "GeneratorFunction"));
        _0x844bf1.prototype = Object.create(_0x25fa4c);
        return _0x844bf1;
      };
      _0x3a322e.awrap = function (_0x4bfcea) {
        return {
          "__await": _0x4bfcea
        };
      };
      _0xd1f246(_0x8d9997.prototype);
      _0x8d9997.prototype[_0x57b702] = function () {
        return this;
      };
      _0x3a322e.AsyncIterator = _0x8d9997;
      _0x3a322e.async = function (_0x45c203, _0x5be8a8, _0x1875af, _0x1923af, _0x859f80) {
        {
          undefined === _0x859f80 && (_0x859f80 = Promise);
          var _0x2de8cf = new _0x8d9997(_0x160f82(_0x45c203, _0x5be8a8, _0x1875af, _0x1923af), _0x859f80);
          return _0x3a322e.isGeneratorFunction(_0x5be8a8) ? _0x2de8cf : _0x2de8cf.next().then(function (_0x585540) {
            return _0x585540.done ? _0x585540.value : _0x2de8cf.next();
          });
        }
      };
      _0xd1f246(_0x25fa4c);
      _0x310a8a(_0x25fa4c, _0x3a78b0, "Generator");
      _0x25fa4c[_0x5f2959] = function () {
        return this;
      };
      _0x25fa4c.toString = function () {
        return "[object Generator]";
      };
      _0x3a322e.keys = function (_0x5e265f) {
        {
          var _0xd90573 = [];
          for (var _0x4ae9c4 in _0x5e265f) _0xd90573.push(_0x4ae9c4);
          _0xd90573.reverse();
          return function _0x18ea6d() {
            for (; _0xd90573.length;) {
              var _0x125f3a = _0xd90573.pop();
              if (_0x125f3a in _0x5e265f) return _0x18ea6d.value = _0x125f3a, _0x18ea6d.done = false, _0x18ea6d;
            }
            _0x18ea6d.done = true;
            return _0x18ea6d;
          };
        }
      };
      _0x3a322e.values = _0x53bd78;
      _0x19cf30.prototype = {
        "constructor": _0x19cf30,
        "reset": function (_0x5c3cf7) {
          {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x1a2464, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x1a2464, this.tryEntries.forEach(_0x4497ca), !_0x5c3cf7) {
              for (var _0x158adb in this) "t" === _0x158adb.charAt(0) && _0x1aa2cc.call(this, _0x158adb) && !isNaN(+_0x158adb.slice(1)) && (this[_0x158adb] = _0x1a2464);
            }
          }
        },
        "stop": function () {
          {
            this.done = true;
            var _0x46df81 = this.tryEntries[0].completion;
            if ("throw" === _0x46df81.type) throw _0x46df81.arg;
            return this.rval;
          }
        },
        "dispatchException": function (_0x110df9) {
          {
            if (this.done) throw _0x110df9;
            var _0x1900b4 = this;
            function _0x216e3d(_0x5030fe, _0x4caaf0) {
              _0x4b246a.type = "throw";
              _0x4b246a.arg = _0x110df9;
              _0x1900b4.next = _0x5030fe;
              _0x4caaf0 && (_0x1900b4.method = "next", _0x1900b4.arg = _0x1a2464);
              return !!_0x4caaf0;
            }
            for (var _0x2e321b = this.tryEntries.length - 1; _0x2e321b >= 0; --_0x2e321b) {
              {
                var _0x1c1758 = this.tryEntries[_0x2e321b],
                  _0x4b246a = _0x1c1758.completion;
                if ("root" === _0x1c1758.tryLoc) return _0x216e3d("end");
                if (_0x1c1758.tryLoc <= this.prev) {
                  var _0x38e319 = _0x1aa2cc.call(_0x1c1758, "catchLoc"),
                    _0x212858 = _0x1aa2cc.call(_0x1c1758, "finallyLoc");
                  if (_0x38e319 && _0x212858) {
                    if (this.prev < _0x1c1758.catchLoc) return _0x216e3d(_0x1c1758.catchLoc, true);
                    if (this.prev < _0x1c1758.finallyLoc) return _0x216e3d(_0x1c1758.finallyLoc);
                  } else {
                    if (_0x38e319) {
                      if (this.prev < _0x1c1758.catchLoc) return _0x216e3d(_0x1c1758.catchLoc, true);
                    } else {
                      {
                        if (!_0x212858) throw new Error("try statement without catch or finally");
                        if (this.prev < _0x1c1758.finallyLoc) return _0x216e3d(_0x1c1758.finallyLoc);
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "abrupt": function (_0x51e0b0, _0x12a439) {
          {
            for (var _0x483a9a = this.tryEntries.length - 1, _0x52c577; _0x483a9a >= 0; --_0x483a9a) {
              _0x52c577 = this.tryEntries[_0x483a9a];
              if (_0x52c577.tryLoc <= this.prev && _0x1aa2cc.call(_0x52c577, "finallyLoc") && this.prev < _0x52c577.finallyLoc) {
                {
                  var _0x9863d1 = _0x52c577;
                  break;
                }
              }
            }
            _0x9863d1 && ("break" === _0x51e0b0 || "continue" === _0x51e0b0) && _0x9863d1.tryLoc <= _0x12a439 && _0x12a439 <= _0x9863d1.finallyLoc && (_0x9863d1 = null);
            var _0x5d0ac9 = _0x9863d1 ? _0x9863d1.completion : {};
            _0x5d0ac9.type = _0x51e0b0;
            _0x5d0ac9.arg = _0x12a439;
            return _0x9863d1 ? (this.method = "next", this.next = _0x9863d1.finallyLoc, _0x32d15a) : this.complete(_0x5d0ac9);
          }
        },
        "complete": function (_0x19354e, _0x10fab8) {
          {
            if ("throw" === _0x19354e.type) throw _0x19354e.arg;
            "break" === _0x19354e.type || "continue" === _0x19354e.type ? this.next = _0x19354e.arg : "return" === _0x19354e.type ? (this.rval = this.arg = _0x19354e.arg, this.method = "return", this.next = "end") : "normal" === _0x19354e.type && _0x10fab8 && (this.next = _0x10fab8);
            return _0x32d15a;
          }
        },
        "finish": function (_0x347b82) {
          for (var _0x465d00 = this.tryEntries.length - 1, _0x48cd4f; _0x465d00 >= 0; --_0x465d00) {
            _0x48cd4f = this.tryEntries[_0x465d00];
            if (_0x48cd4f.finallyLoc === _0x347b82) return this.complete(_0x48cd4f.completion, _0x48cd4f.afterLoc), _0x4497ca(_0x48cd4f), _0x32d15a;
          }
        },
        "catch": function (_0x2caf8d) {
          for (var _0x57cb9a = this.tryEntries.length - 1, _0x33dc55; _0x57cb9a >= 0; --_0x57cb9a) {
            {
              _0x33dc55 = this.tryEntries[_0x57cb9a];
              if (_0x33dc55.tryLoc === _0x2caf8d) {
                {
                  var _0x357cf1 = _0x33dc55.completion;
                  if ("throw" === _0x357cf1.type) {
                    {
                      var _0x36fc8f = _0x357cf1.arg;
                      _0x4497ca(_0x33dc55);
                    }
                  }
                  return _0x36fc8f;
                }
              }
            }
          }
          throw new Error("illegal catch attempt");
        },
        "delegateYield": function (_0x268731, _0x3ee8a1, _0xbcd50b) {
          this.delegate = {
            "iterator": _0x53bd78(_0x268731),
            "resultName": _0x3ee8a1,
            "nextLoc": _0xbcd50b
          };
          "next" === this.method && (this.arg = _0x1a2464);
          return _0x32d15a;
        }
      };
      return _0x3a322e;
    }();
    function _0x4370ad(_0x4c7b08) {
      for (var _0x346b50 = [_0x366bc8, [_0x44265b, _0x52cfc0], _0x1bfbcd], _0x5bbbc0 = [_0x45f1ac, _0xd398eb, _0xd11e30, _0x4370ad, _0x245920, _0x2cde5a], _0x2408cc;;) {
        _0x2408cc = _0x523d30[_0x1bfbcd[_0x4c7b08.c[0]++]];
        try {
          {
            var _0x20780c = _0x2408cc(_0x4c7b08, _0x35ad3e, _0x47e23e, _0x2a4be7, _0x346b50, _0x5bbbc0);
            if (_0x20780c === null) break;
          }
        } catch (_0x1cc86b) {
          _0xd398eb(_0x4c7b08, _0x1cc86b);
        }
      }
    }
    _0x4370ad(_0x5506e5);
  })();
  const _0x4cc751 = _0x4b9aac.contentWindow.document,
    _0x317f93 = _0x4cc751.implementation.createHTMLDocument();
  _0x317f93.documentElement.lang = "zh-CN";
  const _0x31e3e4 = _0x317f93.createElement("head"),
    _0x4ad9a8 = _0x317f93.createElement("meta");
  _0x4ad9a8.setAttribute("charset", "UTF-8");
  const _0x210a8c = _0x317f93.createElement("meta");
  _0x210a8c.setAttribute("name", "viewport");
  _0x210a8c.setAttribute("content", "width=device-width, initial-scale=1.0");
  const _0x150ebc = _0x317f93.createElement("title");
  _0x150ebc.textContent = "功能面板";
  const _0x2377f7 = _0x317f93.createElement("link");
  _0x2377f7.setAttribute("rel", "stylesheet");
  _0x2377f7.setAttribute("href", chrome.runtime.getURL("web/css/gongn.css"));
  _0x31e3e4.appendChild(_0x4ad9a8);
  _0x31e3e4.appendChild(_0x210a8c);
  _0x31e3e4.appendChild(_0x150ebc);
  _0x31e3e4.appendChild(_0x2377f7);
  const _0x318f10 = _0x317f93.createElement("body"),
    _0xc8d4fe = _0x317f93.createElement("div");
  _0xc8d4fe.classList.add("container");
  const _0x2939fb = _0x317f93.createElement("div");
  _0x2939fb.classList.add("column-1");
  const _0x406992 = _0x317f93.createElement("h1");
  _0x406992.textContent = "我的店铺";
  const _0x30290e = _0x317f93.createElement("div");
  _0x30290e.style.cssText = "display: flex; flex-direction: row; align-items: center; justify-content: space-between;";
  const _0x320caf = _0x317f93.createElement("h2");
  _0x320caf.id = "shopName";
  const _0x1614fb = _0x317f93.createElement("span");
  _0x1614fb.id = "openShop";
  _0x1614fb.style.cssText = "color:#fb7701; cursor: pointer; font-size: 13px;";
  _0x1614fb.setAttribute("data-url", "");
  _0x1614fb.textContent = "访问店铺";
  _0x30290e.appendChild(_0x320caf);
  _0x30290e.appendChild(_0x1614fb);
  _0x2939fb.appendChild(_0x406992);
  _0x2939fb.appendChild(_0x30290e);
  const _0x13a8ee = _0x317f93.createElement("div");
  _0x13a8ee.classList.add("column-2");
  const _0x3138b7 = [{
    "id": "toggleSwitch",
    "title": "一键拒绝降价",
    "description": "自动修改降价弹窗的内容为拒绝降价"
  }, {
    "id": "toggleSwitch1",
    "title": "一键原价申报",
    "description": "修改申报弹窗内的商品价格为原申报价"
  }, {
    "id": "temuClearSwitch",
    "title": "TEMU消除半托商品",
    "description": "删除TEMU搜索结果为半托管的商品"
  }, {
    "id": "noticeSwitch",
    "title": "自动阅读公告",
    "description": "自动阅读公告信息"
  }, {
    "id": "removeWatermarkSwitch",
    "title": "一键去水印",
    "description": "去除卖家后台的水印"
  }, {
    "id": "salerManageSwitch",
    "title": "增强销售数据分析",
    "description": "产品买手ID,同步平台标签及站点销售情况和活动情况显示"
  }];
  _0x3138b7.forEach(_0x598914 => {
    const _0x19f73a = _0x317f93.createElement("div");
    _0x19f73a.classList.add("card");
    const _0x10af03 = _0x317f93.createElement("h2");
    _0x10af03.textContent = _0x598914.title;
    const _0xc020c2 = _0x317f93.createElement("p");
    _0xc020c2.classList.add("description");
    _0xc020c2.textContent = _0x598914.description;
    const _0x43af09 = _0x317f93.createElement("label");
    _0x43af09.classList.add("toggle-switch");
    const _0x435b89 = _0x317f93.createElement("input");
    _0x435b89.type = "checkbox";
    _0x435b89.id = _0x598914.id;
    const _0x53bd06 = _0x317f93.createElement("span");
    _0x53bd06.classList.add("toggle-slider");
    _0x53bd06.id = _0x598914.id + "Slider";
    _0x43af09.appendChild(_0x435b89);
    _0x43af09.appendChild(_0x53bd06);
    _0x19f73a.appendChild(_0x10af03);
    _0x19f73a.appendChild(_0xc020c2);
    _0x19f73a.appendChild(_0x43af09);
    _0x13a8ee.appendChild(_0x19f73a);
  });
  const _0x218fd1 = _0x317f93.createElement("div");
  _0x218fd1.classList.add("column-3");
  const _0x6f2125 = _0x317f93.createElement("div");
  _0x6f2125.style.cssText = "width: 100%; box-shadow: 1px 1px 5px #11191f; border-radius: 10px;";
  const _0x568a22 = _0x317f93.createElement("div");
  _0x568a22.style.cssText = "padding: 10px; font-size: 15px;";
  _0x568a22.textContent = "如有使用问题，请联系小助理";
  const _0x3074a2 = _0x317f93.createElement("img");
  _0x3074a2.id = "codeimg";
  _0x3074a2.alt = "产品图片";
  _0x3074a2.src = chrome.runtime.getURL("web/img/code.jpg");
  _0x3074a2.style.cssText = "padding: 10px; width: 85%; height: 100px;";
  _0x6f2125.appendChild(_0x568a22);
  _0x6f2125.appendChild(_0x3074a2);
  _0x218fd1.appendChild(_0x6f2125);
  _0xc8d4fe.appendChild(_0x2939fb);
  _0xc8d4fe.appendChild(_0x13a8ee);
  _0xc8d4fe.appendChild(_0x218fd1);
  _0x318f10.appendChild(_0xc8d4fe);
  _0x317f93.documentElement.appendChild(_0x31e3e4);
  _0x317f93.documentElement.appendChild(_0x318f10);
  _0x4cc751.open();
  _0x4cc751.write(_0x317f93.documentElement.outerHTML);
  _0x4cc751.close();
  _0x4b9aac.onload = function () {
    {
      const _0xf62a2 = _0x4b9aac.contentWindow.document.querySelector("#openShop"),
        _0x22fb1b = _0x4b9aac.contentWindow.document.getElementById("toggleSwitch"),
        _0x17ff65 = _0x4b9aac.contentWindow.document.getElementById("toggleSwitch1"),
        _0x30af3e = _0x4b9aac.contentWindow.document.getElementById("temuClearSwitch"),
        _0xac278a = _0x4b9aac.contentWindow.document.getElementById("noticeSwitch"),
        _0x28249e = _0x4b9aac.contentWindow.document.getElementById("removeWatermarkSwitch"),
        _0x1c0fe9 = _0x4b9aac.contentWindow.document.getElementById("salerManageSwitch");
      _0xf62a2.addEventListener("click", function () {
        var _0x447bab = this.getAttribute("data-url");
        window.open(_0x447bab);
      });
      chrome.storage.local.get(["toggleState", "toggleState1", "temuClearSwitch", "noticeSwitch", "removeWatermarkSwitch", "salerManageSwitch"], function (_0x312304) {
        _0x22fb1b.checked = _0x312304.toggleState || false;
        _0x17ff65.checked = _0x312304.toggleState1 || false;
        _0x30af3e.checked = _0x312304.temuClearSwitch || false;
        _0xac278a.checked = _0x312304.noticeSwitch || false;
        _0x28249e.checked = _0x312304.removeWatermarkSwitch || false;
        _0x1c0fe9.checked = _0x312304.salerManageSwitch || false;
      });
      function _0x2fa4fa() {
        chrome.storage.local.set({
          "toggleState": _0x22fb1b.checked,
          "toggleState1": _0x17ff65.checked,
          "temuClearSwitch": _0x30af3e.checked,
          "noticeSwitch": _0xac278a.checked,
          "removeWatermarkSwitch": _0x28249e.checked,
          "salerManageSwitch": _0x1c0fe9.checked
        });
      }
      _0x22fb1b.addEventListener("change", _0x2fa4fa);
      _0x17ff65.addEventListener("change", _0x2fa4fa);
      _0x30af3e.addEventListener("change", _0x2fa4fa);
      _0xac278a.addEventListener("change", _0x2fa4fa);
      _0x28249e.addEventListener("change", _0x2fa4fa);
      _0x1c0fe9.addEventListener("change", _0x2fa4fa);
      chrome.storage.local.get(["mallId", "shopname"], function (_0x15d4d0) {
        const _0x133915 = _0x15d4d0.mallId,
          _0x11647f = _0x15d4d0.shopname,
          _0x12a89e = _0x4b9aac.contentWindow.document.querySelector("#openShop"),
          _0x5f0774 = _0x4b9aac.contentWindow.document.querySelector("#shopName");
        _0x5f0774.innerHTML = _0x11647f;
        _0x12a89e.setAttribute("data-url", "https://www.temu.com/mall.html?mall_id=" + _0x133915);
      });
    }
  };
}
function _0x4de05e(_0x10bc34) {
  const _0x23075f = _0x10bc34.contentWindow.document,
    _0x59a26a = document.implementation.createHTMLDocument("便捷访问"),
    _0x1e4129 = _0x59a26a.createElement("head"),
    _0x2054aa = _0x59a26a.createElement("body"),
    _0x499107 = _0x59a26a.createElement("meta");
  _0x499107.setAttribute("charset", "UTF-8");
  _0x1e4129.appendChild(_0x499107);
  const _0x121c9f = _0x59a26a.createElement("meta");
  _0x121c9f.setAttribute("name", "viewport");
  _0x121c9f.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x1e4129.appendChild(_0x121c9f);
  const _0x4fd282 = _0x59a26a.createElement("title");
  _0x4fd282.textContent = "便捷访问";
  _0x1e4129.appendChild(_0x4fd282);
  const _0x223cd8 = _0x59a26a.createElement("link");
  _0x223cd8.setAttribute("rel", "stylesheet");
  _0x223cd8.setAttribute("href", chrome.runtime.getURL("web/css/quickAccess.css"));
  _0x1e4129.appendChild(_0x223cd8);
  _0x59a26a.documentElement.appendChild(_0x1e4129);
  const _0x464145 = _0x59a26a.createElement("div");
  _0x464145.classList.add("container");
  _0x464145.id = "buttons";
  _0x2054aa.appendChild(_0x464145);
  _0x59a26a.documentElement.appendChild(_0x2054aa);
  _0x23075f.open();
  _0x23075f.write(_0x59a26a.documentElement.outerHTML);
  _0x23075f.close();
  _0x10bc34.onload = function () {
    {
      const _0x5a761a = {
          "TEMU": ["https://www.temu.com/", chrome.runtime.getURL("web/img/temulogo.png")],
          "日本乐天": ["https://www.rakuten.co.jp/?l-id=pc_header_logo", chrome.runtime.getURL("web/img/lelogo.png")],
          "SHEIN": ["https://us.shein.com/", chrome.runtime.getURL("web/img/sheinlogo.png")],
          "Allegro": ["https://allegro.pl", chrome.runtime.getURL("web/img/allegrologo.png")],
          "OTTO": ["https://www.otto.de/", chrome.runtime.getURL("web/img/ottologo.jpeg")],
          "Cdiscount": ["https://www.cdiscount.com/", chrome.runtime.getURL("web/img/clogo.png")],
          "BOL": ["https://www.bol.com/", chrome.runtime.getURL("web/img/bollogo.png")],
          "Noon": ["https://www.noon.com/uae-en/", chrome.runtime.getURL("web/img/noonlogo.png")],
          "日本煤炉": ["https://jp.mercari.com/", chrome.runtime.getURL("web/img/yalulogo.png")],
          "雅虎购物": ["https://shopping.yahoo.co.jp/", chrome.runtime.getURL("web/img/yahulogo.png")],
          "Qoo10日本": ["https://www.qoo10.jp/", chrome.runtime.getURL("web/img/qlogo.png")],
          "Trendyol": ["https://www.trendyol.com/", chrome.runtime.getURL("web/img/trendylogo.jpg")],
          "Fordeal": ["https://www.fordeal.com/en-AE/", chrome.runtime.getURL("web/img/flogo.png")],
          "Shopee": ["https://shopee.ph/", chrome.runtime.getURL("web/img/shopeelogo.png")],
          "速卖通": ["https://best.aliexpress.com/", chrome.runtime.getURL("web/img/smtlogo.png")]
        },
        _0x11071c = _0x10bc34.contentWindow.document.getElementById("buttons");
      for (const [_0x3d346a, [_0x19fc4e, _0xab5c7e]] of Object.entries(_0x5a761a)) {
        {
          const _0x30b91a = _0x10bc34.contentWindow.document.createElement("div");
          _0x30b91a.classList.add("button-container");
          const _0x3bde99 = _0x10bc34.contentWindow.document.createElement("a");
          _0x3bde99.href = _0x19fc4e;
          _0x3bde99.target = "_blank";
          const _0x488349 = _0x10bc34.contentWindow.document.createElement("img");
          _0x488349.src = _0xab5c7e;
          _0x488349.alt = _0x3d346a;
          _0x3bde99.appendChild(_0x488349);
          _0x3bde99.appendChild(_0x10bc34.contentWindow.document.createTextNode(_0x3d346a));
          _0x30b91a.appendChild(_0x3bde99);
          _0x11071c.appendChild(_0x30b91a);
        }
      }
    }
  };
}
function _0x439587(_0x2299a6) {
  const _0x326079 = _0x2299a6.contentWindow.document,
    _0x4fd7ac = document.implementation.createHTMLDocument("原价申报"),
    _0xdb3241 = _0x4fd7ac.createElement("head"),
    _0x355f95 = _0x4fd7ac.createElement("meta");
  _0x355f95.setAttribute("charset", "UTF-8");
  _0xdb3241.appendChild(_0x355f95);
  const _0x216141 = _0x4fd7ac.createElement("meta");
  _0x216141.setAttribute("name", "viewport");
  _0x216141.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0xdb3241.appendChild(_0x216141);
  const _0x562a32 = _0x4fd7ac.createElement("title");
  _0x562a32.textContent = "原价申报";
  _0xdb3241.appendChild(_0x562a32);
  const _0x41e8e1 = _0x4fd7ac.createElement("link");
  _0x41e8e1.setAttribute("rel", "stylesheet");
  _0x41e8e1.setAttribute("href", chrome.runtime.getURL("web/css/fastPricing.css"));
  _0xdb3241.appendChild(_0x41e8e1);
  _0x4fd7ac.documentElement.appendChild(_0xdb3241);
  const _0xdb2f48 = _0x4fd7ac.createElement("body");
  _0xdb2f48.setAttribute("style", "background: white;");
  const _0x12a6a5 = _0x4fd7ac.createElement("div");
  _0x12a6a5.classList.add("button-container");
  _0x12a6a5.innerHTML = "\n        <button id=\"refreshButton\">刷新核价数据</button>\n        <button id=\"executeButton\">批量原价申报</button>\n        <button id=\"giveupExecuteButton\">批量放弃调整报价</button>\n        <button class=\"fullscreen-btn\" id=\"fullscreenButton\">放大全屏</button>\n        <span style=\"font-size: 18px;margin-left: 50px;color: cadetblue;\" id=\"gululutip2\">\n            咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。\n        </span>\n    ";
  _0xdb2f48.appendChild(_0x12a6a5);
  const _0x2a8739 = _0x4fd7ac.createElement("div");
  _0x2a8739.classList.add("table-container");
  _0x2a8739.innerHTML = "\n        <table class=\"product-table\">\n            <thead>\n                <tr class=\"product-header\">\n                    <th class=\"select-all-cell\">\n                        <input type=\"checkbox\" id=\"selectAllCheckbox\" style=\"width: 18px; height: 18px;\">\n                    </th>\n                    <th>商品图片</th>\n                    <th>商品SKC</th>\n                    <th>商品属性</th>\n                    <th>原申报价格</th>\n                    <th>参考申报价格</th>\n                </tr>\n            </thead>\n            <tbody id=\"products-container\">\n                <!-- 商品数据将动态加载在这里 -->\n            </tbody>\n        </table>\n    ";
  _0xdb2f48.appendChild(_0x2a8739);
  const _0x3970f2 = _0x4fd7ac.createElement("div");
  _0x3970f2.classList.add("pagination-container");
  _0x3970f2.innerHTML = "\n        <div class=\"page-info\" id=\"page-info\">第1页/共1页</div>\n        <div>\n            <select id=\"items-per-page\" style=\"margin-left: 10px;\">\n                <option value=\"20\">每页20条</option>\n                <option value=\"50\" selected>每页50条</option>\n                <option value=\"100\">每页100条</option>\n            </select>\n            <button id=\"prevPageBtn\" style=\"margin-left: 10px;\">上一页</button>\n            <button id=\"nextPageBtn\" style=\"margin-left: 10px;\">下一页</button>\n        </div>\n    ";
  _0xdb2f48.appendChild(_0x3970f2);
  _0x4fd7ac.documentElement.appendChild(_0xdb2f48);
  _0x326079.open();
  _0x326079.write(_0x4fd7ac.documentElement.outerHTML);
  _0x326079.close();
  _0x2299a6.onload = function () {
    let _0x4b9a26 = [],
      _0x259a8f = 0;
    const _0x105631 = _0x2299a6.contentWindow.document.getElementById("products-container"),
      _0x489956 = _0x2299a6.contentWindow.document.getElementById("selectAllCheckbox"),
      _0x51889f = _0x2299a6.contentWindow.document.getElementById("executeButton"),
      _0x2d8d4f = _0x2299a6.contentWindow.document.getElementById("giveupExecuteButton"),
      _0x56cc87 = _0x2299a6.contentWindow.document.getElementById("refreshButton"),
      _0x193bc6 = _0x2299a6.contentWindow.document.getElementById("prevPageBtn"),
      _0x341131 = _0x2299a6.contentWindow.document.getElementById("nextPageBtn"),
      _0x367e51 = _0x2299a6.contentWindow.document.getElementById("page-info"),
      _0x70931f = _0x2299a6.contentWindow.document.getElementById("items-per-page");
    let _0x172d9f = 1,
      _0x22cd0e = parseInt(_0x70931f.value);
    "咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。".replace(/\\u([\d\w]{4})/gi, (_0x27ea75, _0x16a77a) => String.fromCharCode(parseInt(_0x16a77a, 16))) == _0x2299a6.contentWindow.document.querySelector("#gululutip2").innerText ? "" : !function () {
      chrome.storage.local.set({
        "codePhone": ["", ""]
      });
      window.location.reload();
    }();
    async function _0x3b9525(_0x44d035 = 1) {
      try {
        chrome.storage.local.get(["mallId"], async function (_0x41ae42) {
          {
            var _0x15f15f = _0x41ae42.mallId;
            _0x210e6e();
            var _0x22ffda = await _0x48de88(_0x15f15f, _0x172d9f, _0x22cd0e);
            _0x4b9a26 = await _0x47eb14(_0x15f15f, _0x22ffda);
            _0x2c1171();
            _0x44d035 != 1 && _0x348ac9(_0x44d035);
            var _0x409c8c = _0x22ffda.result;
            _0x259a8f = _0x409c8c.total;
            _0x105631.innerHTML = "";
            const _0x2adcd8 = 0,
              _0x2348c8 = _0x2adcd8 + _0x22cd0e,
              _0xc40d27 = _0x4b9a26.slice(_0x2adcd8, _0x2348c8);
            _0xc40d27.forEach(_0xa9fa24 => {
              _0xa9fa24.attributes.forEach((_0x2b85df, _0x4cc222) => {
                {
                  const _0x16f1dd = _0x2299a6.contentWindow.document.createElement("tr");
                  if (_0x4cc222 === 0) {
                    {
                      const _0x89ebdb = _0x2299a6.contentWindow.document.createElement("td");
                      _0x89ebdb.classList.add("checkbox-cell");
                      const _0x355840 = _0x2299a6.contentWindow.document.createElement("input");
                      _0x355840.type = "checkbox";
                      _0x355840.name = "product-select";
                      _0x355840.setAttribute("data-skc", _0xa9fa24.skc);
                      _0x89ebdb.appendChild(_0x355840);
                      _0x89ebdb.rowSpan = _0xa9fa24.attributes.length;
                      _0x16f1dd.appendChild(_0x89ebdb);
                    }
                  }
                  if (_0x4cc222 === 0) {
                    {
                      const _0xb2f30 = _0x2299a6.contentWindow.document.createElement("td"),
                        _0x272e04 = _0x2299a6.contentWindow.document.createElement("img");
                      _0x272e04.src = _0xa9fa24.image;
                      _0x272e04.alt = "商品图片";
                      _0xb2f30.rowSpan = _0xa9fa24.attributes.length;
                      _0xb2f30.appendChild(_0x272e04);
                      _0x16f1dd.appendChild(_0xb2f30);
                      const _0x4883ca = _0x2299a6.contentWindow.document.createElement("td");
                      _0x4883ca.innerHTML = _0xa9fa24.skc;
                      _0x4883ca.rowSpan = _0xa9fa24.attributes.length;
                      _0x16f1dd.appendChild(_0x4883ca);
                    }
                  }
                  const _0x5dcc0b = _0x2299a6.contentWindow.document.createElement("td");
                  _0x5dcc0b.textContent = _0x2b85df[0];
                  _0x16f1dd.appendChild(_0x5dcc0b);
                  const _0x471b48 = _0x2299a6.contentWindow.document.createElement("td");
                  _0x471b48.textContent = _0x2b85df[1];
                  _0x16f1dd.appendChild(_0x471b48);
                  const _0x42385b = _0x2299a6.contentWindow.document.createElement("td");
                  _0x42385b.textContent = _0x2b85df[2];
                  _0x16f1dd.appendChild(_0x42385b);
                  _0x105631.appendChild(_0x16f1dd);
                }
              });
            });
            const _0x254dd8 = Math.ceil(_0x259a8f / _0x22cd0e);
            _0x367e51.textContent = "第 " + _0x172d9f + " 页 / 共 " + _0x254dd8 + " 页";
            _0x193bc6.disabled = _0x172d9f === 1;
            _0x341131.disabled = _0x172d9f === _0x254dd8;
            _0x172d9f === _0x254dd8 ? (_0x341131.classList.add("disabled"), _0x341131.style.backgroundColor = "#c0c0c0", _0x341131.style.cursor = "not-allowed") : (_0x341131.classList.remove("disabled"), _0x341131.style.backgroundColor = "#1e88e5", _0x341131.style.cursor = "pointer");
            _0x172d9f === 1 ? (_0x193bc6.classList.add("disabled"), _0x193bc6.style.backgroundColor = "#c0c0c0", _0x193bc6.style.cursor = "not-allowed") : (_0x193bc6.classList.remove("disabled"), _0x193bc6.style.backgroundColor = "#1e88e5", _0x193bc6.style.cursor = "pointer");
          }
        });
      } catch (_0x424727) {
        console.log(_0x424727);
      }
    }
    _0x489956.addEventListener("change", () => {
      const _0x4f06b6 = _0x2299a6.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
      _0x4f06b6.forEach(_0xb01137 => {
        _0xb01137.checked = _0x489956.checked;
      });
    });
    _0x51889f.addEventListener("click", () => {
      var _0x17c2d8 = {};
      const _0x19eea1 = _0x2299a6.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x19eea1.forEach(_0x45ff7d => {
        const _0xaa6134 = _0x45ff7d.getAttribute("data-skc"),
          _0x1f5fcc = _0x4b9a26.find(_0x135d2d => parseInt(_0x135d2d.skc) === parseInt(_0xaa6134));
        _0x1f5fcc.attributes.forEach(_0x45bd15 => {
          {
            const _0x9773de = _0x45bd15[4];
            if (!_0x17c2d8[_0x9773de]) {
              _0x17c2d8[_0x9773de] = [];
            }
            _0x17c2d8[_0x9773de].push({
              "productSkuId": _0x45bd15[3],
              "price": parseInt(parseFloat(_0x45bd15[1]) * 100)
            });
          }
        });
      });
      _0x2d36e0(mallid = 1, _0x17c2d8);
    });
    _0x2d8d4f.addEventListener("click", () => {
      var _0x47ada8 = {};
      const _0x4febc8 = _0x2299a6.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x4febc8.forEach(_0x4c497c => {
        const _0x23f5a1 = _0x4c497c.getAttribute("data-skc"),
          _0x9e1bcc = _0x4b9a26.find(_0x29427b => parseInt(_0x29427b.skc) === parseInt(_0x23f5a1));
        _0x9e1bcc.attributes.forEach(_0x44b148 => {
          const _0x57bf97 = _0x44b148[4];
          !_0x47ada8[_0x57bf97] && (_0x47ada8[_0x57bf97] = []);
          _0x47ada8[_0x57bf97].push({
            "productSkuId": _0x44b148[3],
            "price": parseInt(parseFloat(_0x44b148[1]) * 100)
          });
        });
      });
      _0x2d36e0(mallid = 1, _0x47ada8, 2);
    });
    _0x56cc87.addEventListener("click", () => {
      _0x172d9f = 1;
      _0x3b9525();
      _0x489956.checked = false;
    });
    _0x70931f.addEventListener("change", () => {
      _0x22cd0e = parseInt(_0x70931f.value);
      _0x172d9f = 1;
      _0x3b9525();
    });
    _0x193bc6.addEventListener("click", () => {
      _0x172d9f > 1 && (_0x172d9f--, _0x3b9525());
    });
    _0x341131.addEventListener("click", () => {
      try {
        const _0x50ee50 = Math.ceil(_0x259a8f / _0x22cd0e);
        _0x172d9f < _0x50ee50 && (_0x172d9f++, _0x3b9525());
      } catch (_0x53482f) {
        console.log(_0x53482f);
      }
    });
    _0x3b9525();
    async function _0x48de88(_0x404b9f, _0x1d5868, _0x3996fc) {
      const _0x444210 = new Headers();
      _0x444210.append("accept", "*/*");
      _0x444210.append("accept-language", "zh-CN,zh;q=0.9");
      _0x444210.append("cache-control", "no-cache");
      _0x444210.append("content-type", "application/json");
      _0x444210.append("mallid", _0x404b9f);
      const _0x455123 = JSON.stringify({
          "pageSize": _0x3996fc,
          "pageNum": _0x1d5868,
          "priceReviewStatusList": [1],
          "secondarySelectStatusList": [7],
          "supplierTodoTypeList": []
        }),
        _0x833c7b = {
          "method": "POST",
          "headers": _0x444210,
          "body": _0x455123,
          "redirect": "follow"
        };
      var _0x35bcad = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x833c7b),
        _0x1b787d = await _0x35bcad.json();
      return _0x1b787d;
    }
    let _0x5207ca = {};
    async function _0x47eb14(_0x258776, _0x4b9668) {
      {
        var _0x5e652c = _0x4b9668.result,
          _0x3b1a91 = _0x5e652c.dataList,
          _0x31b055 = [],
          _0x3c75b2 = [];
        _0x5207ca = await new Promise(_0x1c167e => {
          localforage.getItem(_0x258776 + "price", function (_0x30ab79, _0x2181c2) {
            {
              if (_0x2181c2) {
                const {
                  priceCaches: _0x7ed645
                } = _0x2181c2;
                _0x7ed645 ? _0x1c167e(_0x7ed645) : _0x1c167e({});
              } else _0x1c167e({});
            }
          });
        });
        for (var _0xbb7175 = 0; _0xbb7175 < _0x3b1a91.length; _0xbb7175++) {
          var _0x3261fe = _0x3b1a91[_0xbb7175].skcList;
          for (var _0x116a0a of _0x3261fe) {
            {
              var _0x1b0cbe = [],
                _0x30bd4d = _0x116a0a.skcId,
                _0x573a36 = _0x116a0a.extCode,
                _0x44541b = _0x116a0a.previewImgUrlList[0],
                _0x47d3cf = _0x116a0a.supplierPriceReviewInfoList;
              for (var _0x2b71ff of _0x47d3cf) {
                var _0x77ea33 = _0x2b71ff.priceOrderId,
                  _0x67efc3 = _0x2b71ff.productSkuList,
                  _0x5af718 = _0x2b71ff.status;
                parseInt(_0x5af718) == 1 && _0x3c75b2.push({
                  "mallid": _0x258776,
                  "priceOrderId": _0x77ea33,
                  "productSkuList": _0x67efc3,
                  "previewImgUrlList": _0x44541b,
                  "skcId": _0x30bd4d,
                  "extCode": _0x573a36,
                  "attributes": _0x1b0cbe,
                  "priceCache": _0x5207ca
                });
              }
            }
          }
        }
        await _0x11a90f(_0x3c75b2, 20);
        for (let _0xc171ad of _0x3c75b2) {
          _0x31b055.push({
            "attributes": _0xc171ad.attributes,
            "image": _0xc171ad.previewImgUrlList,
            "skc": _0xc171ad.skcId + "<hr>货号：" + _0xc171ad.extCode
          });
        }
        const _0x32475e = _0x31b055.filter((_0x35ce1b, _0x57d395, _0x49fd60) => _0x49fd60.findIndex(_0x426603 => _0x426603.skc === _0x35ce1b.skc) === _0x57d395);
        await localforage.setItem(_0x258776 + "price", {
          "priceCaches": _0x5207ca
        });
        return _0x32475e;
      }
    }
    async function _0x1c3b93(_0x11413c, _0x176370, _0x790f5) {
      {
        try {
          if (_0x790f5[_0x176370]) return _0x790f5[_0x176370];
          const _0x5241ac = new Headers();
          _0x5241ac.append("accept", "*/*");
          _0x5241ac.append("accept-language", "zh-CN,zh;q=0.9");
          _0x5241ac.append("cache-control", "no-cache");
          _0x5241ac.append("content-type", "application/json");
          _0x5241ac.append("mallid", _0x11413c);
          const _0x5236e7 = JSON.stringify({
              "orderId": _0x176370
            }),
            _0xd4b554 = {
              "method": "POST",
              "headers": _0x5241ac,
              "body": _0x5236e7,
              "redirect": "follow"
            };
          var _0x1dfa72 = await fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/reject-remark", _0xd4b554),
            _0x41ee14 = await _0x1dfa72.json(),
            _0x15e594 = _0x41ee14.result;
          if (_0x15e594.suggestSupplyPrice) {
            {
              var _0xf289e9 = (parseInt(_0x15e594.suggestSupplyPrice) / 100).toFixed(2) + "元",
                _0x266302 = (parseInt(_0x15e594.supplyPrice) / 100).toFixed(2) + "元";
              _0x790f5[_0x176370] = [_0x266302, _0xf289e9];
            }
          } else {
            {
              var _0xf289e9 = _0x15e594.rejectRemark,
                _0x266302 = (parseInt(_0x15e594.supplyPrice) / 100).toFixed(2) + "元";
              _0x790f5[_0x176370] = [_0x266302, _0xf289e9];
            }
          }
        } catch (_0x1004ac) {
          console.log(_0x1004ac);
        }
        return [_0x266302, _0xf289e9];
      }
    }
    async function _0x11a90f(_0x586003, _0xc9ea13) {
      try {
        let _0x4fb7b2 = [],
          _0x5109dc = 0;
        const _0x409226 = async () => {
            if (_0x5109dc < _0x586003.length) {
              {
                const _0x2d3d59 = _0x586003[_0x5109dc++],
                  _0x4ee3b0 = await _0x1c3b93(_0x2d3d59.mallid, _0x2d3d59.priceOrderId, _0x2d3d59.priceCache);
                var _0x1c88a3 = _0x2d3d59.productSkuList.map(_0x41cfe6 => [_0x41cfe6.productPropertyList.map(_0x36d624 => _0x36d624.value).join("-"), _0x4ee3b0[0], _0x4ee3b0[1], _0x41cfe6.skuId, _0x2d3d59.priceOrderId]);
                _0x2d3d59.attributes.push(..._0x1c88a3);
              }
            }
          },
          _0x5ea99a = [];
        for (let _0x12fc2d = 0; _0x12fc2d < _0xc9ea13 && _0x12fc2d < _0x586003.length; _0x12fc2d++) {
          _0x5ea99a.push(_0x409226());
        }
        await Promise.all(_0x5ea99a);
        while (_0x5109dc < _0x586003.length) {
          await _0x409226();
        }
        await Promise.all(_0x4fb7b2);
      } catch (_0x163e9e) {
        console.log(_0x163e9e);
      }
    }
    async function _0x2d36e0(_0x2c491f, _0x506d4c, _0x1dfbb7 = 1) {
      _0x210e6e();
      chrome.storage.local.get(["mallId"], async function (_0x17e1f4) {
        var _0x161336 = _0x17e1f4.mallId;
        localforage.getItem(_0x161336 + "price", async function (_0x5b64a8, _0x568887) {
          if (_0x568887) {
            const {
              priceCaches: _0x4e6a7e
            } = _0x568887;
            if (_0x4e6a7e) {
              {
                for (let _0x1cc87b in _0x506d4c) {
                  delete _0x4e6a7e[_0x1cc87b];
                }
                await localforage.setItem(_0x161336 + "price", {
                  "priceCaches": _0x5207ca
                });
              }
            }
          }
        });
        const _0x505db2 = new Headers();
        _0x505db2.append("accept", "*/*");
        _0x505db2.append("accept-language", "zh-CN,zh;q=0.9");
        _0x505db2.append("cache-control", "no-cache");
        _0x505db2.append("content-type", "application/json");
        _0x505db2.append("mallid", _0x161336);
        const _0x4e9bc6 = Object.entries(_0x506d4c);
        if (_0x1dfbb7 == 1) {
          var _0x4f9423 = async _0x1db98d => {
            {
              const _0x5102d1 = _0x1db98d.map(([_0x1c46a2, _0x234ffa]) => {
                const _0x49779a = JSON.stringify({
                    "supplierResult": 2,
                    "priceOrderId": parseInt(_0x1c46a2),
                    "items": _0x234ffa,
                    "bargainReasonList": []
                  }),
                  _0x4fbaf4 = {
                    "method": "POST",
                    "headers": _0x505db2,
                    "body": _0x49779a,
                    "redirect": "follow"
                  };
                return fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price/bargain-no-bom", _0x4fbaf4);
              });
              return Promise.all(_0x5102d1);
            }
          };
        } else {
          var _0x4f9423 = async _0xb27694 => {
            const _0x277c2c = _0xb27694.map(([_0x97318a, _0x130bb8]) => {
              {
                const _0x1e12e1 = JSON.stringify({
                    "priceOrderId": parseInt(_0x97318a)
                  }),
                  _0x204adb = {
                    "method": "POST",
                    "headers": _0x505db2,
                    "body": _0x1e12e1,
                    "redirect": "follow"
                  };
                return fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/review", _0x204adb);
              }
            });
            return Promise.all(_0x277c2c);
          };
        }
        const _0x1bfdd7 = 10;
        for (let _0x2f7ec5 = 0; _0x2f7ec5 < _0x4e9bc6.length; _0x2f7ec5 += _0x1bfdd7) {
          const _0x4a5e62 = _0x4e9bc6.slice(_0x2f7ec5, _0x2f7ec5 + _0x1bfdd7);
          await _0x4f9423(_0x4a5e62);
        }
        _0x2c1171();
        _0x3b9525("操作已完成！");
      });
    }
    const _0x58e45b = _0x2299a6.contentWindow.document.getElementById("fullscreenButton");
    _0x58e45b.addEventListener("click", () => {
      {
        if (!_0x2299a6.contentWindow.document.fullscreenElement) {
          _0x58e45b.innerText = "退出全屏";
          if (_0x2299a6.contentWindow.document.documentElement.requestFullscreen) _0x2299a6.contentWindow.document.documentElement.requestFullscreen();else {
            if (_0x2299a6.contentWindow.document.documentElement.mozRequestFullScreen) {
              _0x2299a6.contentWindow.document.documentElement.mozRequestFullScreen();
            } else {
              if (_0x2299a6.contentWindow.document.documentElement.webkitRequestFullscreen) _0x2299a6.contentWindow.document.documentElement.webkitRequestFullscreen();else {
                if (_0x2299a6.contentWindow.document.documentElement.msRequestFullscreen) {
                  _0x2299a6.contentWindow.document.documentElement.msRequestFullscreen();
                }
              }
            }
          }
        } else {
          {
            _0x58e45b.innerText = "放大全屏";
            if (_0x2299a6.contentWindow.document.exitFullscreen) {
              _0x2299a6.contentWindow.document.exitFullscreen();
            } else {
              if (_0x2299a6.contentWindow.document.mozCancelFullScreen) _0x2299a6.contentWindow.document.mozCancelFullScreen();else {
                if (_0x2299a6.contentWindow.document.webkitExitFullscreen) _0x2299a6.contentWindow.document.webkitExitFullscreen();else _0x2299a6.contentWindow.document.msExitFullscreen && _0x2299a6.contentWindow.document.msExitFullscreen();
              }
            }
          }
        }
      }
    });
    function _0x1d5990() {
      const _0x56490a = _0x2299a6.contentWindow.innerHeight,
        _0x31d9ce = _0x2299a6.contentWindow.document.querySelector(".table-container");
      _0x31d9ce.style.maxHeight = _0x56490a - 180 + "px";
    }
    _0x1d5990();
    window.addEventListener("resize", _0x1d5990);
    function _0x210e6e(_0x2ad130 = 1) {
      {
        var _0x143e5d = _0x2299a6.contentWindow.document.createElement("div");
        _0x143e5d.id = "loader";
        _0x143e5d.style.position = "fixed";
        _0x143e5d.style.top = "0";
        _0x143e5d.style.left = "0";
        _0x143e5d.style.width = "100%";
        _0x143e5d.style.height = "100%";
        _0x143e5d.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        _0x143e5d.style.display = "flex";
        _0x143e5d.style.flexDirection = "column";
        _0x143e5d.style.justifyContent = "center";
        _0x143e5d.style.alignItems = "center";
        _0x143e5d.style.zIndex = "9999";
        var _0x3bc0a8 = _0x2299a6.contentWindow.document.createElement("div");
        _0x3bc0a8.style.position = "relative";
        _0x3bc0a8.style.width = "128px";
        _0x3bc0a8.style.height = "128px";
        for (let _0x5ab144 = 0; _0x5ab144 < 3; _0x5ab144++) {
          {
            let _0x30479a = _0x2299a6.contentWindow.document.createElement("div");
            _0x30479a.style.position = "absolute";
            _0x30479a.style.width = "128px";
            _0x30479a.style.height = "128px";
            _0x30479a.style.border = "8px solid transparent";
            _0x30479a.style.borderTop = "8px solid #ffffff";
            _0x30479a.style.borderRadius = "50%";
            _0x30479a.style.animation = "spin 1.2s linear infinite";
            _0x30479a.style.animationDelay = _0x5ab144 * 0.4 + "s";
            _0x3bc0a8.appendChild(_0x30479a);
          }
        }
        if (_0x2ad130 != 1) {
          var _0xf72d11 = _0x2299a6.contentWindow.document.createElement("button");
          _0xf72d11.textContent = "0";
          _0xf72d11.style.position = "absolute";
          _0xf72d11.style.top = "50%";
          _0xf72d11.style.left = "50%";
          _0xf72d11.style.transform = "translate(-50%, -50%)";
          _0xf72d11.style.padding = "10px 20px";
          _0xf72d11.style.backgroundColor = "rgb(255 255 255 / 0%)";
          _0xf72d11.style.border = "none";
          _0xf72d11.style.borderRadius = "5px";
          _0xf72d11.style.cursor = "pointer";
          _0xf72d11.style.height = "70px";
          _0xf72d11.style.width = "70px";
          _0xf72d11.style.fontSize = "20px";
          _0xf72d11.style.color = "#fff";
          var _0x2bdcc9 = 0,
            _0x46ea0b = setInterval(function () {
              {
                if (!_0xf72d11.isConnected) {
                  {
                    clearInterval(_0x46ea0b);
                    return;
                  }
                }
                _0x2bdcc9++;
                _0xf72d11.textContent = _0x2bdcc9;
              }
            }, 1000);
          _0x3bc0a8.appendChild(_0xf72d11);
        }
        _0x143e5d.appendChild(_0x3bc0a8);
        var _0xe0a384 = _0x2299a6.contentWindow.document.createElement("div");
        _0xe0a384.id = "loader-message";
        _0xe0a384.style.marginTop = "20px";
        _0xe0a384.style.color = "#ffffff";
        _0xe0a384.style.fontSize = "18px";
        _0xe0a384.innerHTML = "处理中，请等待一会...";
        _0x143e5d.appendChild(_0xe0a384);
        _0x2299a6.contentWindow.document.body.appendChild(_0x143e5d);
        var _0x4f2bbe = _0x2299a6.contentWindow.document.createElement("style");
        _0x4f2bbe.type = "text/css";
        var _0x225b13 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
        _0x4f2bbe.innerHTML = _0x225b13;
        _0x2299a6.contentWindow.document.getElementsByTagName("head")[0].appendChild(_0x4f2bbe);
      }
    }
    function _0x2c1171() {
      var _0x65a34a = _0x2299a6.contentWindow.document.getElementById("loader");
      _0x65a34a && _0x2299a6.contentWindow.document.body.removeChild(_0x65a34a);
    }
    async function _0x348ac9(_0x44c820, _0xa4bf8a = "常规消息", _0x34ed40 = 1, _0x110586 = 1, _0x31c4c5 = "") {
      {
        if (_0x34ed40 == 1 && _0xa4bf8a != "常规消息") var _0x34ed40 = await _0x30cdd6();
        var _0x69e85b = _0x2299a6.contentWindow.document.createElement("div");
        _0x69e85b.classList.add("custom-alert");
        _0x69e85b.style.position = "fixed";
        _0x69e85b.style.zIndex = "9999";
        _0x69e85b.style.top = "50%";
        _0x69e85b.style.left = "50%";
        _0x69e85b.style.transform = "translate(-50%, -50%)";
        _0x69e85b.style.display = "flex";
        _0x69e85b.style.justifyContent = "center";
        _0x69e85b.style.alignItems = "center";
        _0x69e85b.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        _0x69e85b.style.width = "100%";
        _0x69e85b.style.height = "100%";
        var _0xd7911f = _0x2299a6.contentWindow.document.createElement("div");
        _0xd7911f.classList.add("custom-alert-content");
        _0xd7911f.style.backgroundColor = "#fff";
        _0xd7911f.style.padding = "20px";
        _0xd7911f.style.borderRadius = "8px";
        _0xd7911f.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
        _0xd7911f.style.maxWidth = "80%";
        _0xd7911f.style.fontSize = "23px";
        _0xd7911f.style.textAlign = "center";
        var _0xafe24 = _0x2299a6.contentWindow.document.createElement("p");
        _0xafe24.innerHTML = _0x44c820;
        var _0x5ba29c = _0x2299a6.contentWindow.document.createElement("button");
        _0x5ba29c.textContent = "关闭";
        _0x5ba29c.classList.add("custom-alert-button");
        _0x5ba29c.style.padding = "10px 20px";
        _0x5ba29c.style.backgroundColor = "rgb(245 58 58)";
        _0x5ba29c.style.color = "#fff";
        _0x5ba29c.style.border = "none";
        _0x5ba29c.style.cursor = "pointer";
        _0x5ba29c.style.borderRadius = "4px";
        _0x5ba29c.style.fontSize = "16px";
        _0x5ba29c.addEventListener("click", function () {
          _0x69e85b.remove();
        });
        _0x5ba29c.addEventListener("mouseenter", function () {
          _0x5ba29c.style.backgroundColor = "rgb(203 49 49)";
        });
        _0x5ba29c.addEventListener("mouseleave", function () {
          _0x5ba29c.style.backgroundColor = "rgb(245 58 58)";
        });
        _0xd7911f.appendChild(_0xafe24);
        if (_0xa4bf8a == "常规帮助") {
          var _0x4f5598 = _0x2299a6.contentWindow.document.createElement("img");
          _0x4f5598.src = chrome.runtime.getURL("img/code.jpg");
          _0x4f5598.alt = "Alert Image";
          _0x4f5598.style.width = "100px";
          _0x4f5598.style.height = "auto";
          _0x4f5598.style.marginBottom = "15px";
          _0xd7911f.appendChild(_0x4f5598);
          _0xd7911f.appendChild(_0x2299a6.contentWindow.document.createElement("hr"));
        } else {
          if (_0xa4bf8a == "可绑定帮助") {
            {
              var _0x1c698d = _0x2299a6.contentWindow.document.createElement("button");
              _0x1c698d.textContent = "确定";
              _0x1c698d.classList.add("custom-alert-button");
              _0x1c698d.style.padding = "10px 20px";
              _0x1c698d.style.backgroundColor = "rgb(67 179 82)";
              _0x1c698d.style.color = "#fff";
              _0x1c698d.style.border = "none";
              _0x1c698d.style.cursor = "pointer";
              _0x1c698d.style.borderRadius = "4px";
              _0x1c698d.style.fontSize = "16px";
              _0x1c698d.style.marginRight = "30px";
              _0x1c698d.addEventListener("click", function () {
                _0x69e85b.style.display = "none";
                _0x210e6e();
                updateShop(_0x34ed40, _0x110586, _0x31c4c5).then(_0xc80ad7 => {
                  _0x2c1171();
                  location.reload();
                }).catch(_0x116689 => {
                  _0x2c1171();
                  _0x348ac9("绑定失败，请重试");
                  console.log(_0x116689);
                });
              });
              _0x1c698d.addEventListener("mouseenter", function () {
                _0x1c698d.style.backgroundColor = "rgb(51 138 62)";
              });
              _0x1c698d.addEventListener("mouseleave", function () {
                _0x1c698d.style.backgroundColor = "rgb(67 179 82)";
              });
              _0xd7911f.appendChild(_0x2299a6.contentWindow.document.createElement("hr"));
              _0xd7911f.appendChild(_0x1c698d);
            }
          }
        }
        _0xd7911f.appendChild(_0x5ba29c);
        _0x69e85b.appendChild(_0xd7911f);
        _0x2299a6.contentWindow.document.body.appendChild(_0x69e85b);
      }
    }
  };
}
function _0x24fafc(_0x15688a) {
  const _0x1ed875 = _0x15688a.contentWindow.document,
    _0x32dce1 = document.implementation.createHTMLDocument("电商控制台"),
    _0x398f8c = _0x32dce1.createElement("head"),
    _0x14c9df = _0x32dce1.createElement("meta");
  _0x14c9df.setAttribute("charset", "UTF-8");
  _0x398f8c.appendChild(_0x14c9df);
  const _0x37c0cd = _0x32dce1.createElement("meta");
  _0x37c0cd.setAttribute("name", "viewport");
  _0x37c0cd.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x398f8c.appendChild(_0x37c0cd);
  const _0x460e7e = _0x32dce1.createElement("title");
  _0x460e7e.textContent = "电商控制台";
  _0x398f8c.appendChild(_0x460e7e);
  const _0x55046d = _0x32dce1.createElement("link");
  _0x55046d.setAttribute("rel", "stylesheet");
  _0x55046d.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x398f8c.appendChild(_0x55046d);
  const _0x3fd880 = _0x32dce1.createElement("link");
  _0x3fd880.setAttribute("rel", "stylesheet");
  _0x3fd880.setAttribute("href", chrome.runtime.getURL("web/css/flatpickr.min.css"));
  _0x398f8c.appendChild(_0x3fd880);
  _0x32dce1.documentElement.appendChild(_0x398f8c);
  const _0x4d2f13 = _0x32dce1.createElement("body"),
    _0x410ed9 = _0x32dce1.createElement("div");
  _0x410ed9.classList.add("content");
  const _0x3110d9 = [{
    "title": "导出今日已发货",
    "description": "导出今日已经完成发货的数据。",
    "id": "exportShippedToday"
  }, {
    "title": "导出历史已入库的发货数据",
    "description": "导出历史已经完成发货并已经入库的(备货单)数据。导出的表格带商品图片，请耐心等待。",
    "id": "exportShippedHistory"
  }, {
    "title": "导出历史销售数据",
    "description": "导出历史的销售数据，可选月份为本月及之前的两个月数据。",
    "id": "exportSalesHistoryAll"
  }, {
    "title": "导出退货明细",
    "description": "根据选择的时间区间，导出退货的商品明细数据。导出的表格带商品图片，请耐心等待。",
    "id": "exportReturnDetail"
  }, {
    "title": "导出消费者及履约保障-售后问题",
    "description": "请注意！该数据只允许主账号查看，请确保当前登录TEMU卖家后台的账号为主账号。（表格较多，请耐心等待。）",
    "id": "exportConsumerAfterSalesIssues"
  }];
  _0x3110d9.forEach(_0x384b2c => {
    {
      const _0x25075c = _0x32dce1.createElement("div");
      _0x25075c.classList.add("card");
      _0x25075c.innerHTML = "\n            <h2>" + _0x384b2c.title + "</h2>\n            <p>" + _0x384b2c.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x384b2c.id + "\">使用功能</a>\n        ";
      _0x410ed9.appendChild(_0x25075c);
    }
  });
  _0x4d2f13.appendChild(_0x410ed9);
  const _0x54d5b3 = _0x32dce1.createElement("div");
  _0x54d5b3.id = "modalContainer";
  const _0x1894b6 = _0x32dce1.createElement("div");
  _0x1894b6.id = "overlay";
  _0x54d5b3.appendChild(_0x1894b6);
  const _0x4d3592 = _0x32dce1.createElement("div");
  _0x4d3592.id = "modal";
  _0x4d3592.innerHTML = "\n        <h2 style=\"margin: 20px;\">请选择导出日期</h2>\n        <div class=\"func-btn-container\">\n            <input autocomplete=\"off\" id=\"dateInput\" placeholder=\"请选择日期\" \n                style=\"height: 50px; display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin: 10px; width: 95%;\">\n        </div>\n        <button id=\"closeModal\" class=\"btn\">关闭</button>\n    ";
  _0x54d5b3.appendChild(_0x4d3592);
  _0x4d2f13.appendChild(_0x54d5b3);
  _0x32dce1.documentElement.appendChild(_0x4d2f13);
  _0x1ed875.open();
  _0x1ed875.write(_0x32dce1.documentElement.outerHTML);
  _0x1ed875.close();
  _0x15688a.onload = function () {
    _0x15688a.contentWindow.document.querySelector("#exportShippedToday").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "exportShippedToday"
      }, _0x53aea7 => {});
    });
    _0x15688a.contentWindow.document.querySelector("#exportShippedHistory").addEventListener("click", function () {
      {
        _0x15688a.contentWindow.document.querySelector("#dateInput") ? _0x15688a.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x5f1d21 = _0x15688a.contentWindow.document.getElementById("modalContainer");
        const _0x4f7d2c = _0x15688a.contentWindow.document.getElementById("closeModal"),
          _0x817675 = _0x15688a.contentWindow.document.getElementById("modal"),
          _0x124881 = _0x15688a.contentWindow.document.getElementById("overlay");
        _0x817675.style.display = "block";
        _0x124881.style.display = "block";
        _0x5f1d21.style.display = "block";
        var _0x3b463c = _0x15688a.contentWindow.document.querySelector("#dateInput");
        _0x15688a.contentWindow.document.querySelector(".date-picker-popup") ? _0x15688a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
        setTimeout(() => {
          new _0x4b6149(_0x3b463c, _0x15688a.contentWindow.document, _0x1a2e50);
        }, 200);
        _0x3b463c.style.display = "block";
        _0x4f7d2c.addEventListener("click", () => {
          _0x817675.style.display = "none";
          _0x124881.style.display = "none";
          _0x5f1d21.style.display = "none";
        });
        _0x124881.addEventListener("click", () => {
          _0x817675.style.display = "none";
          _0x124881.style.display = "none";
          _0x5f1d21.style.display = "none";
        });
      }
    });
    _0x15688a.contentWindow.document.querySelector("#exportSalesHistoryAll").addEventListener("click", function () {
      {
        _0x15688a.contentWindow.document.querySelector("#dateInput") ? _0x15688a.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x54ad2a = _0x15688a.contentWindow.document.getElementById("modalContainer");
        const _0x436d13 = _0x15688a.contentWindow.document.getElementById("closeModal"),
          _0x129eff = _0x15688a.contentWindow.document.getElementById("modal"),
          _0x41b91b = _0x15688a.contentWindow.document.getElementById("overlay");
        _0x129eff.style.display = "block";
        _0x41b91b.style.display = "block";
        _0x54ad2a.style.display = "block";
        var _0x32d81c = _0x15688a.contentWindow.document.querySelector("#dateInput");
        try {
          _0x15688a.contentWindow.document.querySelector(".date-picker-popup") ? _0x15688a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
          setTimeout(() => {
            new _0x4b6149(_0x32d81c, _0x15688a.contentWindow.document, _0x5e08d9, "twoMonth");
          }, 200);
          _0x32d81c.style.display = "block";
        } catch (_0x177078) {
          console.log(_0x177078);
        }
        _0x436d13.addEventListener("click", () => {
          _0x129eff.style.display = "none";
          _0x41b91b.style.display = "none";
          _0x54ad2a.style.display = "none";
        });
        _0x41b91b.addEventListener("click", () => {
          _0x129eff.style.display = "none";
          _0x41b91b.style.display = "none";
          _0x54ad2a.style.display = "none";
        });
      }
    });
    _0x15688a.contentWindow.document.querySelector("#exportReturnDetail").addEventListener("click", function () {
      _0x15688a.contentWindow.document.querySelector("#dateInput") ? _0x15688a.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0xe0599d = _0x15688a.contentWindow.document.getElementById("modalContainer");
      const _0x551b60 = _0x15688a.contentWindow.document.getElementById("closeModal"),
        _0x4a7dad = _0x15688a.contentWindow.document.getElementById("modal"),
        _0x788ad7 = _0x15688a.contentWindow.document.getElementById("overlay");
      _0x4a7dad.style.display = "block";
      _0x788ad7.style.display = "block";
      _0xe0599d.style.display = "block";
      var _0x34a87b = _0x15688a.contentWindow.document.querySelector("#dateInput");
      _0x15688a.contentWindow.document.querySelector(".date-picker-popup") ? _0x15688a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x4b6149(_0x34a87b, _0x15688a.contentWindow.document, _0x101d72);
      }, 200);
      _0x34a87b.style.display = "block";
      _0x551b60.addEventListener("click", () => {
        _0x4a7dad.style.display = "none";
        _0x788ad7.style.display = "none";
        _0xe0599d.style.display = "none";
      });
      _0x788ad7.addEventListener("click", () => {
        _0x4a7dad.style.display = "none";
        _0x788ad7.style.display = "none";
        _0xe0599d.style.display = "none";
      });
    });
    _0x15688a.contentWindow.document.querySelector("#exportConsumerAfterSalesIssues").addEventListener("click", function () {
      {
        _0x15688a.contentWindow.document.querySelector("#dateInput") ? _0x15688a.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x1f31ff = _0x15688a.contentWindow.document.getElementById("modalContainer");
        const _0x4c0b87 = _0x15688a.contentWindow.document.getElementById("closeModal"),
          _0x47ba11 = _0x15688a.contentWindow.document.getElementById("modal"),
          _0x304a7f = _0x15688a.contentWindow.document.getElementById("overlay");
        _0x47ba11.style.display = "block";
        _0x304a7f.style.display = "block";
        _0x1f31ff.style.display = "block";
        var _0x3e06e2 = _0x15688a.contentWindow.document.querySelector("#dateInput"),
          _0x291aca = flatpickr(_0x3e06e2, {
            "locale": "zh",
            "mode": "range",
            "dateFormat": "Y-m-d",
            "closeOnSelect": false,
            "appendTo": _0x1f31ff,
            "maxDate": new Date(),
            "onChange": function (_0xecf0a8) {
              if (_0xecf0a8.length == 1) {
                const _0x1fdc51 = _0xecf0a8[0],
                  _0x5c8726 = new Date(_0x1fdc51.getTime() + 2678400000),
                  _0x1c2537 = new Date(_0x1fdc51.getTime() - 2678400000);
                this.set("minDate", _0x1c2537);
                if (_0x5c8726 > new Date()) {
                  this.set("maxDate", new Date());
                } else this.set("maxDate", _0x5c8726);
              } else _0xecf0a8.length == 2 && (this.set("maxDate", new Date()), this.set("minDate", null));
            },
            "onReady": (_0x15fe96, _0x155fed, _0x3f3444) => {
              const _0x214721 = _0x15688a.contentWindow.document.createElement("button");
              _0x214721.textContent = "确定";
              _0x214721.style.margin = "10px";
              _0x214721.style.padding = "5px 10px";
              _0x214721.style.backgroundColor = "#007BFF";
              _0x214721.style.color = "white";
              _0x214721.style.border = "none";
              _0x214721.style.borderRadius = "5px";
              _0x214721.style.cursor = "pointer";
              _0x214721.style.fontSize = "14px";
              _0x214721.style.transition = "background-color 0.3s";
              _0x214721.onmouseover = () => _0x214721.style.backgroundColor = "#0056b3";
              _0x214721.onmouseout = () => _0x214721.style.backgroundColor = "#007BFF";
              _0x214721.onclick = function () {
                {
                  const _0x7450b7 = _0x3f3444.selectedDates;
                  if (_0x7450b7.length === 2) {
                    var [_0x13d24f, _0x593e02] = _0x7450b7;
                    _0x13d24f = flatpickr.formatDate(_0x13d24f, "Y-m-d") + " 00:00:00";
                    _0x593e02 = flatpickr.formatDate(_0x593e02, "Y-m-d") + " 23:59:59";
                    var _0x338845 = new Date(_0x13d24f).getTime(),
                      _0x3687f9 = new Date(_0x593e02).getTime();
                    _0x3f3444.close();
                    _0x47ba11.style.display = "none";
                    _0x304a7f.style.display = "none";
                    _0x1f31ff.style.display = "none";
                    chrome.runtime.sendMessage({
                      "type": "exportConsumerAfterSalesIssues",
                      "startDate": _0x338845,
                      "endDate": _0x3687f9
                    }, _0x4822e4 => {});
                  }
                }
              };
              _0x3f3444.calendarContainer.appendChild(_0x214721);
            }
          });
        _0x15688a.contentWindow.document.querySelector(".date-picker-popup") ? _0x15688a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
        setTimeout(() => {
          new _0x4b6149(_0x3e06e2, _0x15688a.contentWindow.document, _0x3e3721, "oneMonth");
        }, 200);
        _0x3e06e2.style.display = "block";
        _0x4c0b87.addEventListener("click", () => {
          _0x47ba11.style.display = "none";
          _0x304a7f.style.display = "none";
          _0x1f31ff.style.display = "none";
        });
        _0x304a7f.addEventListener("click", () => {
          _0x47ba11.style.display = "none";
          _0x304a7f.style.display = "none";
          _0x1f31ff.style.display = "none";
        });
      }
    });
  };
}
function _0x40c784(_0x1ce69c) {
  const _0x33d751 = _0x1ce69c.contentWindow.document,
    _0x29b8a6 = document.implementation.createHTMLDocument("爆单控制台"),
    _0x71a22c = _0x29b8a6.createElement("head"),
    _0x30631f = _0x29b8a6.createElement("meta");
  _0x30631f.setAttribute("charset", "UTF-8");
  _0x71a22c.appendChild(_0x30631f);
  const _0x13de26 = _0x29b8a6.createElement("meta");
  _0x13de26.setAttribute("name", "viewport");
  _0x13de26.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x71a22c.appendChild(_0x13de26);
  const _0x159082 = _0x29b8a6.createElement("title");
  _0x159082.textContent = "电商控制台";
  _0x71a22c.appendChild(_0x159082);
  const _0x5c7976 = _0x29b8a6.createElement("link");
  _0x5c7976.setAttribute("rel", "stylesheet");
  _0x5c7976.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x71a22c.appendChild(_0x5c7976);
  _0x29b8a6.documentElement.appendChild(_0x71a22c);
  const _0x10795c = _0x29b8a6.createElement("body"),
    _0x188321 = _0x29b8a6.createElement("div");
  _0x188321.classList.add("content");
  const _0x39783c = [{
    "title": "入库商品催加站点",
    "description": "将当前未加入站点且仓库有可用库存的商品SKC进行批量填工单问卷催审加站。",
    "id": "addSite"
  }, {
    "title": "商品催图审",
    "description": "将所有图审未完成的商品进行批量填工单问卷。",
    "id": "addPhotoSite"
  }, {
    "title": "取消普货所有待创建备货单",
    "description": "点击后会一键取消系统待创建的所有备货单。",
    "id": "cancelAllStockList"
  }, {
    "title": "申请调价同步",
    "description": "点击执行后可将当日调价或做活动降价促销的产品一键催工单调整前端售价。确保降价后前端及时更新。",
    "id": "applyPriceSync"
  }, {
    "title": "催审价格申报商品",
    "description": "点击执行后会将当前状态为价格申报中的产品进行工单申报催审，高效处理核价。",
    "id": "urgePriceSync"
  }, {
    "title": "一键拒绝全部调价",
    "description": "点击执行后，会自动拒绝申报类型为“日常价格”和“活动价格”的调价商品。",
    "id": "refusePriceSyncAll"
  }, {
    "title": "一键拒绝日常调价",
    "description": "点击执行后，会自动拒绝申报类型为“日常价格”的调价商品。请注意，部分商品不可只拒绝日常调价。",
    "id": "refusePriceSyncDaily"
  }];
  _0x39783c.forEach(_0x36fd68 => {
    {
      const _0x5603f8 = _0x29b8a6.createElement("div");
      _0x5603f8.classList.add("card");
      _0x5603f8.innerHTML = "\n            <h2>" + _0x36fd68.title + "</h2>\n            <p>" + _0x36fd68.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x36fd68.id + "\">使用功能</a>\n        ";
      _0x188321.appendChild(_0x5603f8);
    }
  });
  _0x10795c.appendChild(_0x188321);
  _0x29b8a6.documentElement.appendChild(_0x10795c);
  _0x33d751.open();
  _0x33d751.write(_0x29b8a6.documentElement.outerHTML);
  _0x33d751.close();
  _0x1ce69c.onload = function () {
    _0x1ce69c.contentWindow.document.querySelector("#addSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "baodanBoxaddSite"
      }, _0x182477 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#addPhotoSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "addPhotoSite"
      }, _0x59bd36 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#cancelAllStockList").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "cancelAllStockList"
      }, _0x53f9c1 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#applyPriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "applyPriceSync"
      }, _0x4d2052 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#urgePriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "urgePriceSync"
      }, _0x2e4945 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#refusePriceSyncAll").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncAll"
      }, _0x3cd530 => {});
    });
    _0x1ce69c.contentWindow.document.querySelector("#refusePriceSyncDaily").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncDaily"
      }, _0x549ee3 => {});
    });
  };
}
class _0x4b6149 {
  constructor(_0x22ea5b, _0x27cb4d = document, _0x6a3fe3 = () => {}, _0x519e31 = "now") {
    this.inputElement = _0x22ea5b;
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.currentDate = new Date();
    this.displayedMonth = this.currentDate.getMonth();
    this.displayedYear = this.currentDate.getFullYear();
    this.today = new Date();
    this.datePopup = null;
    this.isSelectingStartDate = true;
    this.document = _0x27cb4d;
    this.backFunction = _0x6a3fe3;
    this.model = _0x519e31;
    this.inputElement.addEventListener("click", this.togglePopup.bind(this));
    this.document.addEventListener("click", this.closePopup.bind(this));
    this.createDatePopup();
    this.addStyles();
  }
  ["addStyles"]() {
    const _0x52e422 = {
        "position": "absolute",
        "background": "#ffffff",
        "borderRadius": "10px",
        "boxShadow": "0 4px 10px rgba(0, 0, 0, 0.2)",
        "padding": "15px",
        "zIndex": "1000",
        "display": "none",
        "fontFamily": "Arial, sans-serif",
        "minWidth": "280px",
        "maxWidth": "380px"
      },
      _0x5f3918 = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "12px"
      },
      _0x5611a4 = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "8px"
      },
      _0x3d128d = {
        "backgroundColor": "#ffffff00",
        "color": "#141e26",
        "border": "none",
        "padding": "6px 10px",
        "fontSize": "28px",
        "cursor": "pointer",
        "borderRadius": "6px",
        "transition": "all 0.3s ease-in-out"
      },
      _0x429a59 = {
        "fontSize": "14px",
        "padding": "6px",
        "border": "1px solid rgb(162, 175, 185)",
        "borderRadius": "6px",
        "backgroundColor": "#fff",
        "color": "#333",
        "cursor": "pointer",
        "transition": "border-color 0.3s ease, background-color 0.3s ease"
      },
      _0x3da6a3 = {
        "display": "grid",
        "gridTemplateColumns": "repeat(7, 1fr)",
        "gap": "6px"
      };
    this.applyStyleToElement(this.datePopup, _0x52e422);
    const _0x4f1138 = this.datePopup.querySelector(".header");
    this.applyStyleToElement(_0x4f1138, _0x5f3918);
    const _0x37e68d = this.datePopup.querySelector(".month-year-select");
    this.applyStyleToElement(_0x37e68d, _0x5611a4);
    const _0x19a8b6 = _0x37e68d.querySelectorAll("button");
    _0x19a8b6.forEach(_0x4b8293 => this.applyStyleToElement(_0x4b8293, _0x3d128d));
    const _0xb628fc = _0x37e68d.querySelectorAll("select");
    _0xb628fc.forEach(_0x78b4e6 => this.applyStyleToElement(_0x78b4e6, _0x429a59));
    const _0x110591 = this.datePopup.querySelector(".calendar");
    this.applyStyleToElement(_0x110591, _0x3da6a3);
  }
  ["applyStyleToElement"](_0x3f08e7, _0x2336fc) {
    for (const _0x4984c7 in _0x2336fc) {
      _0x2336fc.hasOwnProperty(_0x4984c7) && (_0x3f08e7.style[_0x4984c7] = _0x2336fc[_0x4984c7]);
    }
  }
  ["createDatePopup"]() {
    if (this.datePopup) return;
    const _0x2e832c = this.document.createElement("div");
    _0x2e832c.classList.add("date-picker-popup");
    const _0x58da0a = this.document.createElement("div");
    _0x58da0a.classList.add("header");
    const _0xde59e9 = this.createMonthYearSelect();
    _0x58da0a.appendChild(_0xde59e9);
    const _0x411f33 = this.document.createElement("div");
    _0x411f33.classList.add("calendar");
    _0x2e832c.appendChild(_0x58da0a);
    _0x2e832c.appendChild(_0x411f33);
    this.document.body.appendChild(_0x2e832c);
    this.datePopup = _0x2e832c;
    this.updateCalendar();
    const _0x51cb19 = this.inputElement.getBoundingClientRect();
    _0x2e832c.style.position = "absolute";
    _0x2e832c.style.top = _0x51cb19.bottom + window.scrollY + "px";
    _0x2e832c.style.left = _0x51cb19.left + window.scrollX + "px";
  }
  ["createMonthYearSelect"]() {
    const _0x2222e8 = this.document.createElement("div");
    _0x2222e8.classList.add("month-year-select");
    const _0xb25b5c = this.document.createElement("button");
    _0xb25b5c.id = "prev-month-btn";
    _0xb25b5c.innerText = "<";
    _0xb25b5c.addEventListener("click", this.changeMonth.bind(this, -1));
    _0x2222e8.appendChild(_0xb25b5c);
    const _0x5b038c = this.document.createElement("select");
    _0x5b038c.id = "month-select";
    for (let _0x55f60a = 0; _0x55f60a < 12; _0x55f60a++) {
      const _0x2e93e9 = this.document.createElement("option");
      _0x2e93e9.value = _0x55f60a;
      _0x2e93e9.innerText = this.getMonthName(_0x55f60a);
      if (_0x55f60a === this.displayedMonth) _0x2e93e9.selected = true;
      _0x5b038c.appendChild(_0x2e93e9);
    }
    _0x5b038c.addEventListener("change", _0x55ce83 => this.changeMonth(parseInt(_0x55ce83.target.value) - this.displayedMonth));
    _0x2222e8.appendChild(_0x5b038c);
    const _0x421cdd = this.document.createElement("select");
    _0x421cdd.id = "year-select";
    const _0x515f26 = this.today.getFullYear();
    for (let _0x427600 = _0x515f26 - 10; _0x427600 <= _0x515f26; _0x427600++) {
      const _0x3123c1 = this.document.createElement("option");
      _0x3123c1.value = _0x427600;
      _0x3123c1.innerText = _0x427600;
      if (_0x427600 === this.displayedYear) _0x3123c1.selected = true;
      _0x421cdd.appendChild(_0x3123c1);
    }
    _0x421cdd.addEventListener("change", _0x205fd0 => this.changeYear(parseInt(_0x205fd0.target.value)));
    _0x2222e8.appendChild(_0x421cdd);
    const _0x4d31ad = this.document.createElement("button");
    _0x4d31ad.id = "next-month-btn";
    _0x4d31ad.innerText = ">";
    _0x4d31ad.addEventListener("click", this.changeMonth.bind(this, 1));
    _0x2222e8.appendChild(_0x4d31ad);
    const _0xfc7002 = this.document.createElement("button");
    _0xfc7002.id = "dateOK-btn";
    _0xfc7002.innerText = "确认";
    _0xfc7002.addEventListener("click", this.backFunction.bind(this, this));
    _0x2222e8.appendChild(_0xfc7002);
    return _0x2222e8;
  }
  ["getMonthName"](_0x28c11e) {
    const _0x519772 = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return _0x519772[_0x28c11e];
  }
  ["isTodayOrAfter"](_0x585b6c) {
    const _0xf7b45f = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),
      _0x4b9e60 = new Date(_0x585b6c.getFullYear(), _0x585b6c.getMonth(), _0x585b6c.getDate());
    return _0x4b9e60 >= _0xf7b45f;
  }
  ["updateCalendar"]() {
    if (!this.datePopup) return;
    const _0x47bd98 = this.datePopup.querySelector(".calendar");
    if (!_0x47bd98) return;
    _0x47bd98.innerHTML = "";
    const _0x1fa999 = new Date(this.displayedYear, this.displayedMonth, 1),
      _0xa0615f = new Date(this.displayedYear, this.displayedMonth + 1, 0),
      _0x334b74 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    _0x334b74.forEach(_0x1bd400 => {
      {
        const _0x5746cc = document.createElement("button");
        _0x5746cc.innerText = _0x1bd400;
        _0x5746cc.classList.add("weekdays");
        _0x5746cc.style.border = "none";
        _0x5746cc.style.padding = "10px";
        _0x5746cc.style.transition = "all 0.3s ease";
        _0x5746cc.style.textAlign = "center";
        _0x5746cc.style.fontSize = "14px";
        _0x5746cc.style.fontWeight = "bold";
        _0x5746cc.style.color = "#333";
        _0x5746cc.disabled = true;
        _0x5746cc.style.backgroundColor = "#ffffff00";
        _0x5746cc.style.cursor = "not-allowed";
        _0x47bd98.appendChild(_0x5746cc);
      }
    });
    const _0x9c1dcb = _0x1fa999.getDay();
    for (let _0x511f66 = 0; _0x511f66 < _0x9c1dcb; _0x511f66++) {
      {
        const _0x1d0dd1 = document.createElement("button");
        _0x1d0dd1.classList.add("empty");
        _0x1d0dd1.style.border = "none";
        _0x1d0dd1.style.padding = "10px";
        _0x1d0dd1.style.transition = "all 0.3s ease";
        _0x1d0dd1.style.textAlign = "center";
        _0x1d0dd1.style.fontSize = "14px";
        _0x1d0dd1.style.fontWeight = "bold";
        _0x1d0dd1.style.color = "#333";
        _0x1d0dd1.style.backgroundColor = "#ffffff00";
        _0x1d0dd1.style.cursor = "not-allowed";
        _0x47bd98.appendChild(_0x1d0dd1);
      }
    }
    const _0x5262f4 = _0xa0615f.getDate();
    for (let _0x5ea9e6 = 1; _0x5ea9e6 <= _0x5262f4; _0x5ea9e6++) {
      const _0x2ba939 = document.createElement("button");
      _0x2ba939.innerText = _0x5ea9e6;
      _0x2ba939.classList.add("bt-d");
      _0x2ba939.style.border = "none";
      _0x2ba939.style.padding = "10px";
      _0x2ba939.style.transition = "all 0.3s ease";
      _0x2ba939.style.textAlign = "center";
      _0x2ba939.style.fontSize = "14px";
      _0x2ba939.style.fontWeight = "bold";
      _0x2ba939.style.color = "#333";
      _0x2ba939.style.backgroundColor = "#ffffff00";
      _0x2ba939.style.cursor = "pointer";
      const _0x3910ad = new Date(this.displayedYear, this.displayedMonth, _0x5ea9e6);
      if (this.model == "twoMonth") {
        {
          if (this.isTodayOrAfter(_0x3910ad) || new Date(_0x3910ad) < new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getMonth() - 2))) {
            _0x2ba939.disabled = true;
            _0x2ba939.style.color = "#b7b7b7";
            _0x2ba939.style.cursor = "not-allowed";
          }
        }
      } else this.isTodayOrAfter(_0x3910ad) && (_0x2ba939.disabled = true, _0x2ba939.style.color = "#b7b7b7", _0x2ba939.style.cursor = "not-allowed");
      this.selectedStartDate && this.selectedStartDate.getDate() === _0x5ea9e6 && this.selectedStartDate.getMonth() === this.displayedMonth && this.selectedStartDate.getFullYear() === this.displayedYear && (_0x2ba939.classList.add("range-start"), _0x2ba939.style.backgroundColor = "rgb(86, 159, 247)", _0x2ba939.style.color = "#ffffff", _0x2ba939.style.fontWeight = "bold", _0x2ba939.style.borderRadius = "50px 0px 0px 50px");
      this.selectedEndDate && this.selectedEndDate.getDate() === _0x5ea9e6 && this.selectedEndDate.getMonth() === this.displayedMonth && this.selectedEndDate.getFullYear() === this.displayedYear && (_0x2ba939.classList.add("range-end"), _0x2ba939.style.backgroundColor = "rgb(86, 159, 247)", _0x2ba939.style.color = "#ffffff", _0x2ba939.style.fontWeight = "bold", this.selectedStartDate.toLocaleDateString() == this.selectedEndDate.toLocaleDateString() ? _0x2ba939.style.borderRadius = "50px 50px 50px 50px" : _0x2ba939.style.borderRadius = "0px 50px 50px 0px");
      this.selectedStartDate && this.selectedEndDate && this.selectedStartDate < _0x3910ad && _0x3910ad < this.selectedEndDate && (_0x2ba939.classList.add("range-between"), _0x2ba939.style.backgroundColor = "hsl(205deg, 20%, 94%)", _0x2ba939.style.color = "#000000", _0x2ba939.style.borderRadius = "8px");
      _0x2ba939.addEventListener("click", this.selectDate.bind(this, _0x5ea9e6));
      _0x47bd98.appendChild(_0x2ba939);
    }
  }
  ["isToday"](_0x5ba159) {
    return _0x5ba159.getDate() === this.today.getDate() && _0x5ba159.getMonth() === this.today.getMonth() && _0x5ba159.getFullYear() === this.today.getFullYear();
  }
  ["changeMonth"](_0x39ffb0) {
    const _0x3592a2 = new Date(),
      _0x8fb6ee = _0x3592a2.getFullYear(),
      _0x341987 = _0x3592a2.getMonth(),
      _0x11bb36 = this.datePopup.querySelector("#prev-month-btn"),
      _0xf9bf30 = this.datePopup.querySelector("#next-month-btn");
    this.displayedMonth += _0x39ffb0;
    if (this.displayedMonth < 0) this.displayedMonth = 11, this.displayedYear -= 1;else this.displayedMonth > 11 && (this.displayedMonth = 0, this.displayedYear += 1);
    if (this.displayedYear > _0x8fb6ee || this.displayedYear === _0x8fb6ee && this.displayedMonth > _0x341987) {
      this.displayedYear = _0x8fb6ee;
      this.displayedMonth = _0x341987;
    }
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x4dddfe = this.datePopup.querySelector("#month-select"),
      _0x598e07 = this.datePopup.querySelector("#year-select");
    _0x4dddfe && (_0x4dddfe.value = this.displayedMonth);
    _0x598e07 && (_0x598e07.value = this.displayedYear);
    _0x11bb36 && _0xf9bf30 && (this.displayedYear === _0x8fb6ee && this.displayedMonth === _0x341987 ? (_0xf9bf30.disabled = true, _0xf9bf30.style.opacity = 0.5, _0xf9bf30.style.cursor = "not-allowed") : (_0xf9bf30.disabled = false, _0xf9bf30.style.opacity = 1, _0xf9bf30.style.cursor = "pointer"), _0x11bb36.disabled = false);
  }
  ["changeYear"](_0x261ff8) {
    const _0x38faeb = new Date(),
      _0x5806b7 = _0x38faeb.getFullYear(),
      _0x19eab9 = _0x38faeb.getMonth();
    _0x261ff8 > _0x5806b7 ? this.displayedYear = _0x5806b7 : this.displayedYear = _0x261ff8;
    if (this.displayedYear === _0x5806b7) {
      {
        if (this.displayedMonth > _0x19eab9) {
          this.displayedMonth = _0x19eab9;
        }
      }
    }
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x30d52b = this.datePopup.querySelector("#month-select"),
      _0x9619ab = this.datePopup.querySelector("#year-select");
    _0x30d52b && (_0x30d52b.value = this.displayedMonth);
    _0x9619ab && (_0x9619ab.value = this.displayedYear);
    const _0x507fb8 = this.datePopup.querySelector("#prev-month-btn"),
      _0x24ea93 = this.datePopup.querySelector("#next-month-btn");
    if (_0x507fb8 && _0x24ea93) {
      if (this.displayedYear === _0x5806b7 && _0x19eab9 === this.displayedMonth) _0x24ea93.disabled = true, _0x24ea93.style.opacity = 0.5, _0x24ea93.style.cursor = "not-allowed";else {
        _0x24ea93.disabled = false;
        _0x24ea93.style.opacity = 1;
        _0x24ea93.style.cursor = "pointer";
      }
    }
  }
  ["updateMonthYearLabel"]() {
    if (!this.datePopup) return;
    const _0x45ae2e = this.datePopup.querySelector(".month-year-select span");
    if (!_0x45ae2e) return;
    _0x45ae2e.innerText = this.getMonthName(this.displayedMonth) + " " + this.displayedYear;
  }
  ["togglePopup"](_0x411483) {
    _0x411483.stopPropagation();
    if (!this.datePopup) return;
    if (this.datePopup.style.display === "none" || !this.datePopup.style.display) {
      const _0x4f69a2 = this.inputElement.getBoundingClientRect();
      this.datePopup.style.position = "absolute";
      this.datePopup.style.top = _0x4f69a2.bottom + window.scrollY + "px";
      this.datePopup.style.left = _0x4f69a2.left + window.scrollX + "px";
      this.datePopup.style.display = "block";
    } else this.datePopup.style.display = "none";
  }
  ["closePopup"](_0x1ba087) {
    !this.datePopup.contains(_0x1ba087.target) && !this.inputElement.contains(_0x1ba087.target) && !_0x1ba087.target.classList.contains("bt-d") && (this.datePopup.style.display = "none");
  }
  ["selectDate"](_0x28ce2c) {
    if (this.model == "oneMonth") {
      {
        const _0xaa42d7 = new Date(this.displayedYear, this.displayedMonth, _0x28ce2c),
          _0x11ff26 = new Date(this.displayedYear, this.displayedMonth, 1),
          _0x424f83 = new Date(this.displayedYear, this.displayedMonth + 1, 0);
        if (_0xaa42d7 < _0x11ff26 || _0xaa42d7 > _0x424f83) return;
        if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0xaa42d7, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
          {
            this.selectedEndDate = _0xaa42d7;
            this.isSelectingStartDate = true;
            if (this.selectedStartDate > this.selectedEndDate) {
              {
                const _0x53a61e = this.selectedStartDate;
                this.selectedStartDate = this.selectedEndDate;
                this.selectedEndDate = _0x53a61e;
              }
            }
            const _0x5b3f81 = this.selectedStartDate.getMonth(),
              _0x259c15 = this.selectedEndDate.getMonth();
            if (_0x5b3f81 !== _0x259c15) {
              this.selectedStartDate = _0xaa42d7;
              this.selectedEndDate = null;
            }
          }
        }
        this.selectedStartDate && (this.selectedStartDate.getMonth() !== this.displayedMonth || this.selectedStartDate.getFullYear() !== this.displayedYear) && (this.selectedStartDate = null);
        if (this.selectedEndDate && (this.selectedEndDate.getMonth() !== this.displayedMonth || this.selectedEndDate.getFullYear() !== this.displayedYear)) {
          this.selectedEndDate = null;
        }
        this.updateCalendar();
        this.updateInputField();
      }
    } else {
      const _0x30228a = new Date(this.displayedYear, this.displayedMonth, _0x28ce2c);
      if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) {
        this.selectedStartDate = _0x30228a;
        this.selectedEndDate = null;
        this.isSelectingStartDate = false;
      } else {
        this.selectedEndDate = _0x30228a;
        this.isSelectingStartDate = true;
        if (this.selectedStartDate > this.selectedEndDate) {
          {
            const _0x1192e3 = this.selectedStartDate;
            this.selectedStartDate = this.selectedEndDate;
            this.selectedEndDate = _0x1192e3;
          }
        }
      }
      this.updateCalendar();
      this.updateInputField();
    }
  }
  ["updateInputField"]() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const _0x10fb4e = {
          "timeZone": "Asia/Shanghai",
          "year": "numeric",
          "month": "2-digit",
          "day": "2-digit"
        },
        _0x2796ae = this.selectedStartDate.toLocaleDateString("zh-CN", _0x10fb4e).replace(/\//g, "-"),
        _0x191dc2 = this.selectedEndDate.toLocaleDateString("zh-CN", _0x10fb4e).replace(/\//g, "-");
      this.inputElement.value = _0x2796ae + " ~ " + _0x191dc2;
    }
  }
}
function _0x5e08d9(_0x5f4b5e) {
  const _0x1a0a25 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x1ba21d = _0x5f4b5e.selectedStartDate ? _0x5f4b5e.selectedStartDate.toLocaleDateString("zh-CN", _0x1a0a25).replace(/\//g, "-") : "",
    _0x2d525a = _0x5f4b5e.selectedEndDate ? _0x5f4b5e.selectedEndDate.toLocaleDateString("zh-CN", _0x1a0a25).replace(/\//g, "-") : "";
  if (_0x1ba21d && _0x2d525a) {
    _0x5f4b5e.datePopup.style.display = "none";
    chrome.runtime.sendMessage({
      "type": "exportSalesHistoryAll",
      "startDate": _0x1ba21d,
      "endDate": _0x2d525a
    }, _0x23ffe3 => {});
  }
}
function _0x1a2e50(_0x519a5f) {
  const _0x2e84c3 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x1e578a = _0x519a5f.selectedStartDate ? _0x519a5f.selectedStartDate.toLocaleDateString("zh-CN", _0x2e84c3).replace(/\//g, "-") + " 00:00:00" : "",
    _0x2187ac = _0x519a5f.selectedEndDate ? _0x519a5f.selectedEndDate.toLocaleDateString("zh-CN", _0x2e84c3).replace(/\//g, "-") + " 23:59:59" : "";
  _0x1e578a && _0x2187ac && (_0x519a5f.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportShippedHistory",
    "startDate": _0x1e578a,
    "endDate": _0x2187ac
  }, _0xdf9dd2 => {}));
}
function _0x101d72(_0x49f0d5) {
  const _0x6046a4 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x38d508 = _0x49f0d5.selectedStartDate ? _0x49f0d5.selectedStartDate.toLocaleDateString("zh-CN", _0x6046a4).replace(/\//g, "-") + " 00:00:00" : "",
    _0xbcd16a = _0x49f0d5.selectedEndDate ? _0x49f0d5.selectedEndDate.toLocaleDateString("zh-CN", _0x6046a4).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x4c9afb = new Date(_0x38d508).getTime(),
    _0x5646c1 = new Date(_0xbcd16a).getTime();
  _0x38d508 && _0xbcd16a && (_0x49f0d5.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportReturnDetail",
    "startDate": _0x4c9afb,
    "endDate": _0x5646c1
  }, _0x266441 => {}));
}
function _0x3e3721(_0x2dcf4a) {
  const _0x4da3bb = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x3b3fe1 = _0x2dcf4a.selectedStartDate ? _0x2dcf4a.selectedStartDate.toLocaleDateString("zh-CN", _0x4da3bb).replace(/\//g, "-") + " 00:00:00" : "",
    _0x4a5bd3 = _0x2dcf4a.selectedEndDate ? _0x2dcf4a.selectedEndDate.toLocaleDateString("zh-CN", _0x4da3bb).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x228ae3 = new Date(_0x3b3fe1).getTime(),
    _0x2b5fe6 = new Date(_0x4a5bd3).getTime();
  _0x3b3fe1 && _0x4a5bd3 && (_0x2dcf4a.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportConsumerAfterSalesIssues",
    "startDate": _0x228ae3,
    "endDate": _0x2b5fe6
  }, _0x31a543 => {}));
}
try {
  fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x2de08b => _0x2de08b.arrayBuffer()).then(_0x3b6f4e => {
    crypto.subtle.digest("SHA-256", _0x3b6f4e).then(_0x45de62 => {
      {
        const _0x2c2bce = Array.from(new Uint8Array(_0x45de62)),
          _0x411e9d = _0x2c2bce.map(_0x5eb988 => _0x5eb988.toString(16).padStart(2, "0")).join("");
        _0x411e9d == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
          "codePhone": ["", ""]
        });
      }
    });
  });
} catch (_0x33d176) {}
try {
  fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x4cc898 => _0x4cc898.arrayBuffer()).then(_0x884eee => {
    crypto.subtle.digest("SHA-256", _0x884eee).then(_0x452c52 => {
      const _0x5696c3 = Array.from(new Uint8Array(_0x452c52)),
        _0x2d8db6 = _0x5696c3.map(_0x3f75e1 => _0x3f75e1.toString(16).padStart(2, "0")).join("");
      _0x2d8db6 == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : !function () {
        chrome.storage.local.set({
          "codePhone": ["", ""]
        });
        window.close();
      }();
    });
  });
} catch (_0x5e4aca) {}
try {
  fetch(chrome.runtime.getURL("web/img/logo.png")).then(_0x12cea0 => _0x12cea0.arrayBuffer()).then(_0x5a1c6f => {
    crypto.subtle.digest("SHA-256", _0x5a1c6f).then(_0x46819e => {
      {
        const _0x1c68b5 = Array.from(new Uint8Array(_0x46819e)),
          _0x19117b = _0x1c68b5.map(_0x2fdd1d => _0x2fdd1d.toString(16).padStart(2, "0")).join("");
        _0x19117b == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage.local.set({
          "codePhone": ["", ""]
        });
      }
    });
  });
} catch (_0x48327e) {}