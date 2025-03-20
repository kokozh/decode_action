//Thu Mar 20 2025 14:06:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
async function _0x287380() {
  await _0x1a12d1("[class*=\"elli_outerWrapper\"]", "");
  var _0x1cecf5 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
    _0x37c55e = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    };
  try {
    var _0x496723 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
        "method": "POST",
        "headers": _0x37c55e,
        "body": {},
        "credentials": "include"
      }),
      _0x59b02a = await _0x496723.json(),
      _0x1c8f65 = _0x59b02a.result.companyList[0].malInfoList.find(function (_0x6fc70e) {
        return _0x1cecf5 === _0x6fc70e.mallName;
      });
    return _0x1c8f65 ? _0x1c8f65.mallId : null;
  } catch (_0x4719e8) {
    throw _0x4719e8;
  }
}
async function _0x1a12d1(_0x598204, _0x4423fb) {
  let _0x157dc9 = 0;
  const _0xde2436 = 30000;
  while (_0x157dc9 < _0xde2436) {
    {
      let _0x5b8357 = document.querySelector(_0x598204);
      if (_0x5b8357 && _0x5b8357.textContent.includes(_0x4423fb)) {
        return;
      }
      await new Promise(_0xc2b7c8 => setTimeout(_0xc2b7c8, 1000));
      _0x157dc9 += 1000;
    }
  }
}
function _0x162f9e(_0x485cf6) {
  if (_0x485cf6.includes("www.temu.com")) return 0;
  history.pushState({
    "page": 1
  }, "title 1", _0x485cf6);
  history.back();
}
chrome.storage.local.get("codePhone", function (_0x222b3f) {
  const _0x4aabbf = _0x222b3f.codePhone;
  _0x4aabbf && window.location.href.includes("https://seller.kuajingmaihuo.com") && _0x287380().then(_0x29828a => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x4aabbf,
      "mallid": _0x29828a,
      "model": "全局",
      "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
    }, _0x49a455 => {
      _0x49a455.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x225d7a) {
        window.location.href.includes("https://seller.kuajingmaihuo.com") && (fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x5772f9 => _0x5772f9.arrayBuffer()).then(_0x480078 => {
          crypto.subtle.digest("SHA-256", _0x480078).then(_0x24d3ee => {
            {
              const _0x4ceb1d = Array.from(new Uint8Array(_0x24d3ee)),
                _0x3dfab1 = _0x4ceb1d.map(_0x466750 => _0x466750.toString(16).padStart(2, "0")).join("");
              _0x3dfab1 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                "codePhone": ["", ""]
              });
            }
          });
        }), !function () {
          if (!document.getElementById("new-console-button")) {
            const _0x554bee = document.createElement("div");
            _0x554bee.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
            _0x554bee.style.fontFamily = "auto";
            _0x554bee.style.fontSize = "18px";
            _0x554bee.style.fontWeight = "600";
            _0x554bee.style.color = "#fff";
            _0x554bee.style.textAlign = "center";
            _0x554bee.style.marginTop = "10px";
            _0x554bee.style.marginBottom = "8px";
            _0x554bee.style.cursor = "pointer";
            _0x554bee.style.whiteSpace = "nowrap";
            _0x554bee.style.padding = "1px";
            _0x554bee.style.border = "none";
            _0x554bee.style.transition = "all 0.3s ease";
            _0x554bee.style.display = "flex";
            _0x554bee.style.alignItems = "center";
            _0x554bee.style.justifyContent = "center";
            _0x554bee.style.gap = "8px";
            _0x554bee.id = "new-console-button";
            const _0x5862ae = document.createElement("img");
            _0x5862ae.src = chrome.runtime.getURL("web/img/control.png");
            _0x5862ae.style.width = "45px";
            _0x5862ae.style.height = "45px";
            _0x5862ae.style.objectFit = "contain";
            _0x554bee.appendChild(_0x5862ae);
            const _0x2d9143 = document.createTextNode("咕噜噜插件控制台");
            _0x554bee.appendChild(_0x2d9143);
            function _0x426337() {
              setTimeout(() => {
                const _0x1525cb = _0x233ff1 ? _0x233ff1.offsetWidth : 0;
                if (_0x1525cb < 200) _0x2d9143.textContent = "";else {
                  _0x2d9143.textContent = "咕噜噜插件控制台";
                }
              }, 150);
            }
            var _0x233ff1 = document.querySelector("[class*=\"index-module__sidebarBox\"][class*=\"bg-shell-theme-mms-sidebarBox\"]");
            if (_0x233ff1) {
              const _0x194d87 = new ResizeObserver(() => {
                _0x426337();
              });
              _0x194d87.observe(_0x233ff1);
              _0x426337();
              _0x233ff1.appendChild(_0x554bee);
            }
            _0x554bee.addEventListener("click", () => {
              var _0x31017c = document.getElementById("page-container-box"),
                _0x7817a5 = document.getElementById("overlay-box");
              if (_0x31017c) setTimeout(() => {
                _0x31017c.style.transform = "translateY(0)";
                _0x7817a5.style.display = "block";
              }, 100);else {
                const _0x180870 = document.createElement("div");
                _0x180870.style.position = "fixed";
                _0x180870.style.top = "0";
                _0x180870.style.left = "0";
                _0x180870.style.right = "0";
                _0x180870.style.bottom = "0";
                _0x180870.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                _0x180870.style.zIndex = "999";
                _0x180870.style.display = "none";
                _0x180870.id = "overlay-box";
                const _0x4fae56 = document.createElement("div");
                _0x4fae56.style.position = "fixed";
                _0x4fae56.style.left = "0";
                _0x4fae56.style.right = "0";
                _0x4fae56.style.bottom = "0";
                _0x4fae56.style.top = "35px";
                _0x4fae56.style.backgroundColor = "white";
                _0x4fae56.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
                _0x4fae56.style.transition = "transform 0.3s ease-in-out";
                _0x4fae56.style.transform = "translateY(100%)";
                _0x4fae56.style.zIndex = "1000";
                _0x4fae56.style.fontFamily = "auto";
                _0x4fae56.id = "page-container-box";
                const _0x5d4703 = document.createElement("div");
                _0x5d4703.innerHTML = "&times;";
                _0x5d4703.style.position = "absolute";
                _0x5d4703.style.top = "10px";
                _0x5d4703.style.right = "30px";
                _0x5d4703.style.fontSize = "28px";
                _0x5d4703.style.cursor = "pointer";
                _0x5d4703.style.color = "#333";
                _0x5d4703.addEventListener("click", () => {
                  _0x4fae56.style.transform = "translateY(100%)";
                  _0x180870.style.display = "none";
                });
                _0x4fae56.appendChild(_0x5d4703);
                const _0xb118e3 = document.createElement("div");
                _0xb118e3.style.display = "flex";
                _0xb118e3.style.alignItems = "center";
                const _0x58db3c = document.createElement("span");
                _0x58db3c.id = "guluPluginConsole";
                _0x58db3c.textContent = "咕噜噜插件控制台";
                _0x58db3c.style.fontSize = "18px";
                _0x58db3c.style.fontWeight = "bold";
                _0x58db3c.style.margin = "15px 10px 8px 45px";
                const _0x3c64c9 = document.createElement("button");
                _0x3c64c9.id = "guluBackendCenter";
                _0x3c64c9.textContent = "前往咕噜噜后台中心";
                _0x3c64c9.style.fontSize = "16px";
                _0x3c64c9.style.backgroundColor = "#ff7f50";
                _0x3c64c9.style.color = "white";
                _0x3c64c9.style.border = "none";
                _0x3c64c9.style.borderRadius = "4px";
                _0x3c64c9.style.cursor = "pointer";
                _0x3c64c9.style.height = "28px";
                _0x3c64c9.style.margin = "17px 0px 8px 0px";
                _0xb118e3.appendChild(_0x58db3c);
                _0xb118e3.appendChild(_0x3c64c9);
                _0x3c64c9.addEventListener("click", () => {
                  chrome.runtime.sendMessage({
                    "action": "open_static_page"
                  });
                });
                _0x4fae56.appendChild(_0xb118e3);
                const _0x35a5d0 = document.createElement("hr");
                _0x35a5d0.style.border = "none";
                _0x35a5d0.style.borderTop = "1px solid #dddddd7d";
                _0x35a5d0.style.margin = "10px 0";
                _0x4fae56.appendChild(_0x35a5d0);
                const _0x5aa466 = ["功能面板", "便捷访问", "快速核价助手", "数据导出工具箱", "一键爆单工具箱", "功能说明书"],
                  _0x52ab1c = document.createElement("div");
                _0x52ab1c.style.display = "flex";
                _0x52ab1c.style.justifyContent = "flex-start";
                _0x52ab1c.style.padding = "0";
                _0x52ab1c.style.margin = "0";
                _0x52ab1c.style.borderBottom = "1px solid rgba(221, 221, 221, 0.49)";
                const _0x3503e9 = document.createElement("div");
                _0x3503e9.style.position = "absolute";
                _0x3503e9.style.height = "2px";
                _0x3503e9.style.backgroundColor = "#fb7701";
                _0x3503e9.style.bottom = "0";
                _0x3503e9.style.width = "0";
                _0x3503e9.style.left = "0";
                _0x5aa466.forEach((_0x1fab6b, _0x4e6b6c) => {
                  const _0x2dcc69 = document.createElement("div");
                  _0x2dcc69.style.fontSize = "14px";
                  _0x2dcc69.style.padding = "10px 15px";
                  _0x2dcc69.style.cursor = "pointer";
                  _0x2dcc69.style.transition = "background-color 0.3s";
                  _0x2dcc69.style.flexShrink = "0";
                  const _0x302f91 = document.createElement("span");
                  _0x302f91.textContent = _0x1fab6b;
                  _0x2dcc69.appendChild(_0x302f91);
                  _0x2dcc69.style.color = "#333";
                  _0x2dcc69.addEventListener("mouseenter", () => {
                    _0x2dcc69.style.backgroundColor = "#f0f0f0";
                  });
                  _0x2dcc69.addEventListener("mouseleave", () => {
                    _0x2dcc69.style.backgroundColor = "transparent";
                  });
                  _0x2dcc69.addEventListener("click", () => {
                    {
                      _0x52ab1c.querySelectorAll("div").forEach(_0x369cc3 => {
                        _0x369cc3.style.color = "#333";
                      });
                      _0x2dcc69.style.color = "#fb7701";
                      const _0x502e62 = _0x302f91.getBoundingClientRect().width;
                      _0x3503e9.style.width = _0x502e62 + "px";
                      _0x3503e9.style.left = _0x2dcc69.offsetLeft + (_0x2dcc69.offsetWidth - _0x502e62) / 2 + "px";
                      _0x4ff4f6(_0x4e6b6c);
                    }
                  });
                  _0x52ab1c.appendChild(_0x2dcc69);
                });
                _0x52ab1c.style.position = "relative";
                _0x52ab1c.appendChild(_0x3503e9);
                _0x4fae56.appendChild(_0x52ab1c);
                document.body.appendChild(_0x4fae56);
                document.body.appendChild(_0x180870);
                _0x180870.addEventListener("click", () => {
                  _0x4fae56.style.transform = "translateY(100%)";
                  _0x180870.style.display = "none";
                });
                setTimeout(() => {
                  _0x4fae56.style.transform = "translateY(0)";
                  _0x180870.style.display = "block";
                }, 100);
                const _0xb76dad = _0x52ab1c.querySelector("div");
                if (_0xb76dad) {
                  _0xb76dad.style.color = "#fb7701";
                  const _0x5693f6 = _0xb76dad.querySelector("span"),
                    _0x5c392b = _0x5693f6.getBoundingClientRect().width;
                  _0x3503e9.style.width = _0x5c392b + "px";
                  _0x3503e9.style.left = _0xb76dad.offsetLeft + (_0xb76dad.offsetWidth - _0x5c392b) / 2 + "px";
                  _0x4ff4f6(0);
                }
                function _0x4ff4f6(_0x3cdbef) {
                  {
                    const _0x5c1ba1 = _0x4fae56.querySelector(".page-content");
                    _0x5c1ba1 && _0x4fae56.removeChild(_0x5c1ba1);
                    "咕噜噜插件控制台".replace(/\\u([\d\w]{4})/gi, (_0x58a91f, _0x3eee05) => String.fromCharCode(parseInt(_0x3eee05, 16))) == document.querySelector("#guluPluginConsole").innerText ? "" : !function () {
                      chrome.storage.local.set({
                        "codePhone": ["", ""]
                      });
                      window.location.reload();
                    }();
                    const _0x37bd12 = document.createElement("iframe");
                    _0x37bd12.classList.add("page-content");
                    _0x37bd12.setAttribute("allow", "fullscreen");
                    _0x37bd12.id = "gululu-iframe-box";
                    _0x37bd12.style.width = "100%";
                    _0x37bd12.style.height = "calc(100% - 110px)";
                    _0x37bd12.style.border = "none";
                    _0x4fae56.appendChild(_0x37bd12);
                    try {
                      switch (_0x3cdbef) {
                        case 0:
                          _0x287380().then(function (_0x28f2ea) {
                            chrome.storage.local.set({
                              "mallId": _0x28f2ea,
                              "shopname": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
                            });
                            _0x17e784(_0x37bd12);
                          });
                          break;
                        case 1:
                          _0x4844cd(_0x37bd12);
                          break;
                        case 2:
                          _0xd968f9(_0x37bd12);
                          break;
                        case 3:
                          _0x52cb22(_0x37bd12);
                          break;
                        case 4:
                          _0x7f8980(_0x37bd12);
                          break;
                        case 5:
                          _0x37bd12.src = "https://cyfc04r33n.feishu.cn/docx/ACsJdwh5ioScPYxFPWicuR5Rnpf?from=from_copylink";
                          break;
                        default:
                      }
                    } catch (_0x1f3153) {
                      console.log(_0x1f3153);
                    }
                    "前往咕噜噜后台中心".replace(/\\u([\d\w]{4})/gi, (_0x2e09f8, _0x127c76) => String.fromCharCode(parseInt(_0x127c76, 16))) == document.querySelector("#guluBackendCenter").innerText ? "" : !function () {
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
      }), _0x162f9e(window.location.href));
    });
  });
});
function _0x17e784(_0x3d0a68) {
  (function () {
    var _0x274ab6 = function (_0x5a56f3, _0x30d1b0, _0x578273) {
        for (var _0x1d15a = _0x30d1b0.length, _0x1a44cd = _0x1d15a - _0x578273, _0x5d05f9 = [], _0x7fea57 = 0; _0x7fea57 < _0x5a56f3.length;) for (var _0x54b2f4 = 0, _0x49ee06 = 1, _0x43716b;;) {
          _0x43716b = _0x30d1b0.indexOf(_0x5a56f3[_0x7fea57++]);
          if (_0x54b2f4 += _0x49ee06 * (_0x43716b % _0x578273), _0x43716b < _0x578273) {
            _0x5d05f9.push(_0x54b2f4 | 0);
            break;
          }
          _0x54b2f4 += _0x578273 * _0x49ee06;
          _0x49ee06 *= _0x1a44cd;
        }
        return _0x5d05f9;
      },
      _0x32dd20 = "0>S75Xc520kc5>Sd5OaR80e05S007k0yyR|3saR7k|3c5Ht0bT0SwRr7k>SWr2X5kwJ0Sx0D8rV0wJ58r<2XS0W8rlwJ8r2X0h0|3<|3SFg|3M7k|37ke0es7k0S00|30|37kE0+XpkwJ<wJSHrwJԵ8r<wJS~Xogl8rogwJ0h02X02X7k0So5g7k>SWr2X5kwJ0S20D8rV0wJ58r<2XS0W8rlwJ8r2X0h0|3<|3SFg|3M7k|37ke0VP7k0S00|30|37kE04TpkwJ<wJSHrwJԵ8r<wJS~Xogl8rogwJ0h02X02X7kE0mTt0R97kA20K7kt0RKS^RERѩ0L5cRm5iRL5-RL5y58ReRcRhReRy5ѩ045L5a58RVRa5a5L5cRw5L5|58RcRL5-ReRdRhR-ReRy5dR8RVReRa5Um0ѩ0-Rѩ0oRdRy5z5L5a5hRj0L5a58RL5cRUm0ѩ0-Rѩ0tR-Rѩ0m0VRa5j0eRa5+5eR-RL5jyFQzqѩnuh2Ih2I-+ucLudhfѩmq+5L58Rb5a58RL5cRn5dR-RLRVRa5hReRLRѩnuh2Ih2Ic76-yfzѩ68jFcLueO",
      _0xe33926 = "length",
      _0x19c945 = _0x274ab6(_0x32dd20, "05Rks3XJrgPOTWAC19D<fFuIvq6lSp~ZBN>KHUMԵ=Y|E24wG8boVtL^+-iQdnexzhmcѩaj7y", 42),
      _0x510de1 = _0x19c945[_0xe33926];
    function _0x46a421(_0x1a95ea) {
      return _0x1a95ea.c[1];
    }
    for (var _0x4392ac = "", _0xd1e444 = _0x510de1 + (_0x4392ac + true)[_0xe33926], _0x51008a = {
        "h": ""
      }, _0x181d30 = 0; _0x181d30 < 28; _0x181d30++) _0x4392ac += String.fromCharCode(97 + Math.floor(26 * Math.random()));
    var _0x564bea = window,
      _0x2d96a3 = _0x564bea.Promise;
    function _0xd3dc37(_0x29841e) {
      return _0x19c945[_0x29841e.c[0]++] >> 5;
    }
    function _0xc9b4e() {
      var _0x28a62b = [1, {
        "b": _0x564bea,
        "l": null,
        "k": [],
        "c": [0],
        "f": undefined
      }, undefined];
      return {
        "c": _0x28a62b,
        "d": undefined
      };
    }
    function _0x4244d3(_0x1acde2, _0x43311b) {
      for (;;) {
        {
          var _0xdb603a = _0x1acde2.c[1];
          if (!_0xdb603a) throw _0x43311b;
          if (_0xdb603a.j) {
            {
              _0x1acde2.d = {
                "e": _0x43311b
              };
              _0x1acde2.c[0] = _0xdb603a.j;
              return;
            }
          }
          _0x1acde2.c = _0xdb603a.c;
        }
      }
    }
    var _0x360ce6 = _0xc9b4e();
    function _0xe236f(_0x4549aa, _0x59a359) {
      _0x4549aa.c[_0xd3dc37(_0x4549aa)] = _0x59a359;
    }
    var _0x4bc7ce = function (_0x5f0ad9, _0x20646f, _0x5def69, _0x3ef895) {
        var _0x394e2b = _0x5f0ad9[_0x20646f[0]++];
        if (_0x394e2b & 1) return _0x394e2b >> 1;
        if (_0x394e2b === _0x5def69[0]) return null;
        if (_0x394e2b === _0x5def69[5]) return true;
        if (_0x394e2b === _0x5def69[4]) return false;
        if (_0x394e2b === _0x5def69[1]) {
          {
            if (_0x3ef895 != null && _0x3ef895.i) return _0x3ef895.i(_0x5f0ad9[_0x20646f[0]++], _0x5f0ad9[_0x20646f[0]++]);
            for (var _0xf57aaf = "", _0x1d130a = _0x5f0ad9[_0x20646f[0]++], _0x53467d = 0, _0x4ac7de; _0x53467d < _0x1d130a; _0x53467d++) {
              _0x4ac7de = _0x5f0ad9[_0x20646f[0]++];
              _0xf57aaf += String.fromCharCode(_0x4ac7de & 4294967232 | _0x4ac7de * 39 & 63);
            }
            return _0xf57aaf;
          }
        }
        if (_0x394e2b === _0x5def69[3]) {
          var _0x40be9b = _0x5f0ad9[_0x20646f[0]++],
            _0x40bba4 = _0x5f0ad9[_0x20646f[0]++],
            _0x1954b5 = _0x40be9b & 2147483648 ? -1 : 1,
            _0x71d706 = (_0x40be9b & 2146435072) >> 20,
            _0x4bb0c0 = (_0x40be9b & 1048575) * Math.pow(2, 32) + (_0x40bba4 < 0 ? _0x40bba4 + Math.pow(2, 32) : _0x40bba4);
          return _0x71d706 == 2047 ? _0x4bb0c0 ? NaN : _0x1954b5 * Infinity : (_0x71d706 !== 0 ? _0x4bb0c0 += Math.pow(2, 52) : _0x71d706++, _0x1954b5 * _0x4bb0c0 * Math.pow(2, _0x71d706 - 1075));
        }
        if (_0x394e2b !== _0x5def69[2]) return _0x20646f[_0x394e2b >> 5];
      },
      _0xaf1d77 = [2, 28, 36, 24, 16, 8];
    {
      _0x51008a.i = function (_0x41fb3e, _0x4a3922) {
        return "".slice(_0x41fb3e, _0x41fb3e + _0x4a3922);
      };
      var _0x269ab3 = _0x19c945[_0x510de1 + _0x4392ac.indexOf(".")] ^ _0xd1e444,
        _0x2ed1fe = _0x19c945.splice(_0x269ab3, _0x19c945[_0x269ab3 + _0x360ce6.c[0]] + 2);
      _0x51008a.h = _0x4bc7ce(_0x2ed1fe, _0x360ce6.c[1].c, _0xaf1d77);
    }
    function _0x4dcee0(_0x3d0f7b) {
      return _0x4bc7ce(_0x19c945, _0x3d0f7b.c, _0xaf1d77, _0x51008a);
    }
    function _0x1fdb65(_0x34f059, _0x2baa5d) {
      {
        var _0x337763 = _0x46a421(_0x34f059);
        _0x337763.g = {
          "e": _0x2baa5d
        };
        return _0x337763.a ? _0x34f059.c[0] = _0x337763.a : _0x337763.c.length == 1 ? (_0x34f059.c[2] = _0x2baa5d, null) : (_0x34f059.c = _0x337763.c, _0x34f059.c[2] = _0x2baa5d, undefined);
      }
    }
    var _0x2d9e06 = [function (_0x2dc22f, _0x109108, _0x309017) {
      _0x309017(_0x2dc22f, _0x109108(_0x2dc22f));
    }, function (_0x3010cb, _0x2eaf06, _0x53da1e) {
      _0x53da1e(_0x3010cb, Array(_0x2eaf06(_0x3010cb)));
    }, function (_0x431d4b, _0x35220e, _0x29b6e2, _0x97e3b6, _0x3c3978, _0x3b7003) {
      var _0x447181 = _0x3b7003[0],
        _0x5902ce = _0x3b7003[1];
      if (_0x431d4b.d) _0x5902ce(_0x431d4b, _0x431d4b.d.e);else {
        {
          var _0xee858c = _0x97e3b6(_0x431d4b);
          return _0xee858c != null && _0xee858c.g && _0x447181(_0x431d4b, _0xee858c.g.e);
        }
      }
    }, function (_0x240d84, _0x42a10a, _0x466208, _0x20def5) {
      _0x20def5(_0x240d84).k[_0x42a10a(_0x240d84)] = undefined;
    }, function (_0x19cc77, _0xaa9a52, _0xc8efb0) {
      var _0x314967 = _0xaa9a52(_0x19cc77),
        _0x44ac2a = _0xaa9a52(_0x19cc77),
        _0x936e2e = _0xaa9a52(_0x19cc77);
      _0xc8efb0(_0x19cc77, _0x314967(_0x44ac2a, _0x936e2e));
    }, function (_0x282a54, _0x2dc9d3, _0x165a3a) {
      _0x165a3a(_0x282a54, _0x2dc9d3(_0x282a54) % _0x2dc9d3(_0x282a54));
    }, function (_0x309033, _0x3c372a, _0x393321) {
      _0x393321(_0x309033, _0x3c372a(_0x309033) / _0x3c372a(_0x309033));
    }, function (_0xa8d757, _0xc4e908, _0x1c14bd, _0x45be48, _0x2e64c5, _0x1e7a81) {
      {
        var _0x184ff1 = _0x1e7a81[0],
          _0x5873fe = _0xc4e908(_0xa8d757);
        return _0x184ff1(_0xa8d757, _0x5873fe);
      }
    }, function (_0x540b40, _0x26b390, _0x5c6c5e, _0x285f60, _0x1f434c, _0x556f21) {
      var _0x33175d = _0x556f21[1],
        _0x3bc6ae = _0x26b390(_0x540b40);
      _0x33175d(_0x540b40, _0x3bc6ae);
    }, function (_0xa7d82, _0x1b8a6b, _0x4f347c) {
      _0x4f347c(_0xa7d82, _0x1b8a6b(_0xa7d82) & _0x1b8a6b(_0xa7d82));
    }, function (_0x254a35, _0x5bb2cb, _0x72d259) {
      _0x72d259(_0x254a35, _0x5bb2cb(_0x254a35) instanceof _0x5bb2cb(_0x254a35));
    }, function (_0x31c5da, _0x4e454d, _0x730826) {
      _0x730826(_0x31c5da, _0x4e454d(_0x31c5da) + _0x4e454d(_0x31c5da));
    }, function (_0x1eeeed, _0x1962d9, _0x4e0617) {
      _0x4e0617(_0x1eeeed, _0x1962d9(_0x1eeeed) << _0x1962d9(_0x1eeeed));
    }, function (_0x5b74be, _0x8efb30, _0x40a8e1) {
      {
        var _0x21dcfb = _0x8efb30(_0x5b74be),
          _0x42b851 = _0x8efb30(_0x5b74be).slice();
        _0x42b851.unshift(undefined);
        _0x40a8e1(_0x5b74be, new (Function.bind.apply(_0x21dcfb, _0x42b851))());
      }
    }, function (_0x663bba) {
      _0x663bba.d = undefined;
    }, function (_0x5abcc3, _0x120bda, _0x43e0f5) {
      _0x43e0f5(_0x5abcc3, _0x120bda(_0x5abcc3) in _0x120bda(_0x5abcc3));
    }, function (_0x13edd8, _0x3988ed, _0x2870d3) {
      _0x2870d3(_0x13edd8, _0x3988ed(_0x13edd8) ^ _0x3988ed(_0x13edd8));
    }, function (_0x5a22cc, _0x2bba91, _0x19a4a9) {
      _0x19a4a9(_0x5a22cc, _0x5a22cc.d && _0x5a22cc.d.e);
    }, function (_0x4cee1f, _0x1918e8, _0x5a865b) {
      _0x5a865b(_0x4cee1f, {});
    }, function (_0x7dbc59, _0xa9f548, _0x2d0a28) {
      _0x2d0a28(_0x7dbc59, _0xa9f548(_0x7dbc59)[_0xa9f548(_0x7dbc59)]);
    }, function (_0x34cb58, _0x57d737, _0x223d74) {
      _0x223d74(_0x34cb58, _0x57d737(_0x34cb58) >>> _0x57d737(_0x34cb58));
    }, function (_0x141568, _0x2d6083, _0x1d3b8a) {
      {
        var _0x2bb943 = _0x2d6083(_0x141568),
          _0x50c4e9 = [];
        for (var _0x533eb1 in _0x2bb943) _0x50c4e9.push(_0x533eb1);
        _0x1d3b8a(_0x141568, _0x50c4e9);
      }
    }, function (_0x347900, _0x22a54b, _0x327ed6) {
      _0x327ed6(_0x347900, _0x22a54b(_0x347900) === _0x22a54b(_0x347900));
    }, function (_0x37adaa, _0x202f7e, _0x22cd9a) {
      _0x22cd9a(_0x37adaa, _0x202f7e(_0x37adaa) * _0x202f7e(_0x37adaa));
    }, function (_0x2dbd70, _0x3428ab, _0x3ea0f0, _0x29ce03) {
      for (var _0x2da3b5 = _0x3428ab(_0x2dbd70), _0x5d813f = _0x3428ab(_0x2dbd70), _0x3aca6e = _0x29ce03(_0x2dbd70); _0x3aca6e; _0x3aca6e = _0x3aca6e.f) if (_0x2da3b5 in _0x3aca6e.k) {
        _0x3aca6e.k[_0x2da3b5] = _0x5d813f;
        return;
      }
      throw "ball";
    }, function (_0x387588, _0x191d44, _0x1d8089) {
      _0x1d8089(_0x387588, typeof _0x191d44(_0x387588));
    }, function (_0x596a64, _0x4778b6, _0x2c30de) {
      _0x2c30de(_0x596a64, _0x4778b6(_0x596a64) | _0x4778b6(_0x596a64));
    }, function (_0x3d451e, _0x4fe148, _0x317eaa, _0x504deb, _0x372eed, _0x24290f) {
      var _0xcd9906 = _0x4fe148(_0x3d451e),
        _0x268291 = _0x4fe148(_0x3d451e),
        _0x5e14fa = _0x4fe148(_0x3d451e),
        _0x3b3596 = _0x24290f[4];
      if (_0x268291[_0x3b3596] && _0x268291[_0x3b3596].o === _0x268291) {
        {
          _0x3d451e.c = [_0x268291[_0x3b3596].n, {
            "b": _0x5e14fa,
            "l": _0x268291,
            "c": _0x3d451e.c,
            "k": [],
            "f": _0x268291[_0x3b3596].f
          }, undefined, function () {
            return arguments;
          }.apply(undefined, _0xcd9906)];
          for (var _0x5b98b2 = 0; _0x5b98b2 < _0xcd9906.length; _0x5b98b2++) _0x3d451e.c.push(_0xcd9906[_0x5b98b2]);
        }
      } else _0x3d451e.c[2] = _0x268291.apply(_0x5e14fa, _0xcd9906);
    }, function (_0x565dfa, _0x3d3fac, _0x1908f3) {
      {
        var _0x4dd3e6 = _0x3d3fac(_0x565dfa),
          _0x5ad9a1 = _0x3d3fac(_0x565dfa);
        _0x1908f3(_0x565dfa, _0x4dd3e6(_0x5ad9a1));
      }
    }, function (_0x2b92f7, _0x3f5462, _0x55de24, _0x47e735) {
      for (var _0x548532 = _0x3f5462(_0x2b92f7), _0x40b13e = _0x47e735(_0x2b92f7); _0x40b13e; _0x40b13e = _0x40b13e.f) if (_0x548532 in _0x40b13e.k) {
        {
          _0x55de24(_0x2b92f7, _0x40b13e.k[_0x548532]);
          return;
        }
      }
      throw "ball";
    }, function (_0x21683a, _0x7a33f4) {
      {
        var _0x4da8d2 = _0x7a33f4(_0x21683a);
        _0x21683a.c[1].a = _0x4da8d2;
      }
    }, function (_0x4dedb4, _0x55c913, _0x57089f, _0x1d9df6, _0x3d530a, _0x572eb2) {
      var _0x1abf0a = _0x3d530a[1];
      _0x57089f(_0x4dedb4, _0x1abf0a[0]);
    }, function (_0x4bf15b, _0x12cf20, _0x51b4c5) {
      _0x51b4c5(_0x4bf15b, _0x12cf20(_0x4bf15b) >= _0x12cf20(_0x4bf15b));
    }, function (_0x117eff, _0x49e15f, _0x5572ca) {
      _0x5572ca(_0x117eff, undefined);
    }, function (_0x346f34, _0x4ebd65, _0x44d788, _0x6f3f32, _0x5b6522, _0x301de8) {
      {
        var _0x4c329f = _0x5b6522[0];
        _0x44d788(_0x346f34, _0x4c329f[_0x4ebd65(_0x346f34)]);
      }
    }, function (_0x200f67, _0x4f034f, _0x2abe29, _0xdbff42, _0x5b1343, _0x1f0ecd) {
      {
        var _0x74d4cd = _0x1f0ecd[0];
        return _0x74d4cd(_0x200f67, undefined);
      }
    }, function () {
      return null;
    }, function (_0x573d74, _0x110685, _0x34f3b8) {
      _0x34f3b8(_0x573d74, !_0x110685(_0x573d74));
    }, function (_0x50b069, _0x4f02cd, _0x32c549) {
      _0x32c549(_0x50b069, _0x4f02cd(_0x50b069) == _0x4f02cd(_0x50b069));
    }, function (_0x475d14, _0x2ccbdd, _0x5b18da) {
      _0x5b18da(_0x475d14, []);
    }, function (_0x489970, _0x2c9bea, _0xa37843) {
      _0xa37843(_0x489970, _0x2c9bea(_0x489970) <= _0x2c9bea(_0x489970));
    }, function (_0x1d507e, _0x5293e0, _0x4dffa6) {
      var _0x5adb38 = _0x5293e0(_0x1d507e),
        _0x544199 = _0x5293e0(_0x1d507e),
        _0xead9b6 = _0x5293e0(_0x1d507e),
        _0xca2a8d = _0x5293e0(_0x1d507e);
      _0x4dffa6(_0x1d507e, _0x5adb38(_0x544199, _0xead9b6, _0xca2a8d));
    }, function (_0x36e8ea, _0x226d75, _0x2de5f2) {
      {
        var _0x1985ee = _0x226d75(_0x36e8ea),
          _0x3570d8 = _0x226d75(_0x36e8ea);
        _0x2de5f2(_0x36e8ea, delete _0x1985ee[_0x3570d8]);
      }
    }, function (_0xdb61a5, _0x39b4f4) {
      _0xdb61a5.c[0] = _0x39b4f4(_0xdb61a5);
    }, function (_0x4161df, _0x5e678f, _0x3f68a3, _0x2be6fd) {
      _0x2be6fd(_0x4161df).k[_0x5e678f(_0x4161df)] = _0x5e678f(_0x4161df);
    }, function (_0x33541a, _0x414ed5, _0x58dcb9) {
      _0x58dcb9(_0x33541a, _0x414ed5(_0x33541a) < _0x414ed5(_0x33541a));
    }, function (_0x3f8a2b, _0x529235, _0x233bf0) {
      _0x233bf0(_0x3f8a2b, _0x529235(_0x3f8a2b) > _0x529235(_0x3f8a2b));
    }, function (_0x40bb21, _0x3a27c6, _0x2d163e) {
      _0x2d163e(_0x40bb21, _0x3a27c6(_0x40bb21) >> _0x3a27c6(_0x40bb21));
    }, function (_0x4d5117, _0x24b816, _0x115f40, _0x3f0d98, _0x2f7c6a, _0x509138) {
      var _0x48caf8 = _0x24b816(_0x4d5117),
        _0x4c88d5 = _0x24b816(_0x4d5117),
        _0x3f7e7b = _0x24b816(_0x4d5117),
        _0x427e0d = _0x3f0d98(_0x4d5117),
        _0x61e21a = _0x509138[2],
        _0x5758c2 = _0x509138[3],
        _0x4667a3 = _0x509138[4],
        _0x419b18 = function () {
          {
            var _0x11cf7f = _0x61e21a();
            _0x11cf7f.c[3] = arguments;
            for (var _0x3c160f = 0; _0x3c160f < arguments.length; _0x3c160f++) _0x11cf7f.c[_0x3c160f + 4] = arguments[_0x3c160f];
            _0x11cf7f.c[1] = {
              "b": this,
              "c": [0],
              "k": [],
              "f": _0x427e0d,
              "l": _0x419b18
            };
            _0x11cf7f.c[0] = _0x48caf8;
            _0x5758c2(_0x11cf7f);
            return _0x11cf7f.c[2];
          }
        };
      try {
        Object.defineProperty(_0x419b18, "length", {
          "value": _0x4c88d5
        });
        Object.defineProperty(_0x419b18, "name", {
          "value": _0x3f7e7b
        });
      } catch (_0x2a384d) {
        for (var _0x413045 = false, _0x168d51 = "", _0x3b7f8e = 0; _0x3b7f8e < _0x4c88d5; _0x3b7f8e++) _0x413045 ? _0x168d51 += ",a".concat(_0x3b7f8e) : (_0x168d51 += "a".concat(_0x3b7f8e), _0x413045 = true);
        _0x419b18 = new Function("fn", "return function ".concat(_0x3f7e7b, "(").concat(_0x168d51, "){return fn.apply(this, arguments)}"))(_0x419b18);
      }
      _0x419b18[_0x4667a3] = {
        "n": _0x48caf8,
        "f": _0x427e0d,
        "o": _0x419b18
      };
      _0x115f40(_0x4d5117, _0x419b18);
    }, function (_0x10ae5f, _0xc002be) {
      {
        var _0x3a700e = _0xc002be(_0x10ae5f);
        _0xc002be(_0x10ae5f) ? _0x10ae5f.c[0] = _0x3a700e : _0x3a700e;
      }
    }, function (_0x17fbcf, _0x3ba9f1, _0xd63295) {
      _0xd63295(_0x17fbcf, _0x17fbcf.c[1].b);
    }, function (_0x238e15, _0x1be3c6, _0x68aa2) {
      _0x1be3c6(_0x238e15)[_0x1be3c6(_0x238e15)] = _0x1be3c6(_0x238e15);
    }, function (_0xb014d4, _0xb6b268) {
      var _0x242729 = _0xb6b268(_0xb014d4);
      _0xb014d4.c[1].j = _0x242729;
    }, function (_0x29fe35, _0x5ad60d, _0x3da868) {
      _0x3da868(_0x29fe35, new RegExp(_0x5ad60d(_0x29fe35), _0x5ad60d(_0x29fe35)));
    }, function (_0x355d4f, _0x58410a, _0xa345a7, _0x5cfbe4, _0x455947, _0x37b7b7) {
      var _0x34067c = _0x455947[1];
      _0xa345a7(_0x355d4f, _0x34067c[1]);
    }, function (_0x471aa3, _0x47da21, _0x138d56, _0x1c9be4) {
      var _0x57787a = _0x47da21(_0x471aa3),
        _0x4c9bdf = _0x1c9be4(_0x471aa3),
        _0x56e6b3 = _0x471aa3.l;
      _0x4c9bdf.k[_0x57787a] = _0x56e6b3;
    }, function (_0x26210d, _0x5e5909, _0x2f5566) {
      _0x2f5566(_0x26210d, ~_0x5e5909(_0x26210d));
    }, function (_0x33cf5e, _0x3b6a09, _0x2604d9) {
      _0x2604d9(_0x33cf5e, _0x3b6a09(_0x33cf5e) != _0x3b6a09(_0x33cf5e));
    }, function (_0x5804da, _0x15b1e3, _0x51c93b) {
      _0x51c93b(_0x5804da, _0x15b1e3(_0x5804da) - _0x15b1e3(_0x5804da));
    }, function (_0x55c807, _0x2906f0, _0x5da004) {
      {
        var _0xebb587 = _0x2906f0(_0x55c807);
        _0x5da004(_0x55c807, _0xebb587());
      }
    }, function (_0x463554, _0x2c590f, _0x337f39) {
      _0x337f39(_0x463554, _0x2c590f(_0x463554) !== _0x2c590f(_0x463554));
    }, function (_0x15f8ee, _0x5d19b9) {
      {
        var _0x2bba9a = _0x5d19b9(_0x15f8ee);
        _0x5d19b9(_0x15f8ee) ? _0x2bba9a : _0x15f8ee.c[0] = _0x2bba9a;
      }
    }];
    function _0x1f07b0(_0x27f035) {
      return _0x27f035.c[_0x19c945[_0x27f035.c[0]++] >> 5];
    }
    var _0x7ae5dd = function () {
      'use strict';

      var _0x2ddd8d,
        _0xe6e084 = {},
        _0x4f65e2 = Object.prototype,
        _0x285950 = _0x4f65e2.hasOwnProperty,
        _0x3e4b97 = "function" == typeof Symbol ? Symbol : {},
        _0x4c9041 = _0x3e4b97.iterator || "@@iterator",
        _0x50cd6f = _0x3e4b97.asyncIterator || "@@asyncIterator",
        _0x2e61ad = _0x3e4b97.toStringTag || "@@toStringTag";
      function _0x3a37fa(_0x3fcd84, _0x2ea8c1, _0x3cfc98) {
        Object.defineProperty(_0x3fcd84, _0x2ea8c1, {
          "value": _0x3cfc98,
          "enumerable": true,
          "configurable": true,
          "writable": true
        });
        return _0x3fcd84[_0x2ea8c1];
      }
      try {
        _0x3a37fa({}, "");
      } catch (_0x4824ea) {
        _0x3a37fa = function (_0x4beb82, _0x5341ec, _0x41102a) {
          return _0x4beb82[_0x5341ec] = _0x41102a;
        };
      }
      function _0x2aba4e(_0x5cf949, _0x533191, _0x36c6af, _0x31a6cb) {
        {
          var _0x15299b = _0x533191 && _0x533191.prototype instanceof _0x9b6c7e ? _0x533191 : _0x9b6c7e,
            _0x33ea9a = Object.create(_0x15299b.prototype),
            _0x2c010c = new _0x57565e(_0x31a6cb || []);
          _0x33ea9a._invoke = function (_0x4c9825, _0x57825d, _0x25ad0a) {
            var _0x3dbd58 = _0xccb32f;
            return function (_0x520358, _0x18ea50) {
              if (_0x3dbd58 === _0x571da1) throw new Error("Generator is already running");
              if (_0x3dbd58 === _0x3d7dfc) {
                if ("throw" === _0x520358) throw _0x18ea50;
                return _0x328314();
              }
              for (_0x25ad0a.method = _0x520358, _0x25ad0a.arg = _0x18ea50;;) {
                var _0x1863f6 = _0x25ad0a.delegate;
                if (_0x1863f6) {
                  var _0x170f15 = _0x241b28(_0x1863f6, _0x25ad0a);
                  if (_0x170f15) {
                    if (_0x170f15 === _0x577576) continue;
                    return _0x170f15;
                  }
                }
                if ("next" === _0x25ad0a.method) _0x25ad0a.sent = _0x25ad0a._sent = _0x25ad0a.arg;else {
                  if ("throw" === _0x25ad0a.method) {
                    if (_0x3dbd58 === _0xccb32f) throw _0x3dbd58 = _0x3d7dfc, _0x25ad0a.arg;
                    _0x25ad0a.dispatchException(_0x25ad0a.arg);
                  } else "return" === _0x25ad0a.method && _0x25ad0a.abrupt("return", _0x25ad0a.arg);
                }
                _0x3dbd58 = _0x571da1;
                var _0x2f3469 = _0x4db55(_0x4c9825, _0x57825d, _0x25ad0a);
                if ("normal" === _0x2f3469.type) {
                  {
                    if (_0x3dbd58 = _0x25ad0a.done ? _0x3d7dfc : _0x2f0182, _0x2f3469.arg === _0x577576) continue;
                    return {
                      "value": _0x2f3469.arg,
                      "done": _0x25ad0a.done
                    };
                  }
                }
                "throw" === _0x2f3469.type && (_0x3dbd58 = _0x3d7dfc, _0x25ad0a.method = "throw", _0x25ad0a.arg = _0x2f3469.arg);
              }
            };
          }(_0x5cf949, _0x36c6af, _0x2c010c);
          return _0x33ea9a;
        }
      }
      function _0x4db55(_0x4eee69, _0x35dfad, _0x91720a) {
        try {
          return {
            "type": "normal",
            "arg": _0x4eee69.call(_0x35dfad, _0x91720a)
          };
        } catch (_0x4c331b) {
          return {
            "type": "throw",
            "arg": _0x4c331b
          };
        }
      }
      _0xe6e084.wrap = _0x2aba4e;
      var _0xccb32f = "suspendedStart",
        _0x2f0182 = "suspendedYield",
        _0x571da1 = "executing",
        _0x3d7dfc = "completed",
        _0x577576 = {};
      function _0x9b6c7e() {}
      function _0x225e99() {}
      function _0x47af4e() {}
      var _0xa6494f = {};
      _0xa6494f[_0x4c9041] = function () {
        return this;
      };
      var _0x544556 = Object.getPrototypeOf,
        _0x2b70a4 = _0x544556 && _0x544556(_0x544556(_0x1f67f4([])));
      _0x2b70a4 && _0x2b70a4 !== _0x4f65e2 && _0x285950.call(_0x2b70a4, _0x4c9041) && (_0xa6494f = _0x2b70a4);
      var _0x2cde54 = _0x47af4e.prototype = _0x9b6c7e.prototype = Object.create(_0xa6494f);
      function _0x513ff8(_0x1d3649) {
        ["next", "throw", "return"].forEach(function (_0x857a52) {
          _0x3a37fa(_0x1d3649, _0x857a52, function (_0x524bc7) {
            return this._invoke(_0x857a52, _0x524bc7);
          });
        });
      }
      function _0x3f7e63(_0x4a4861, _0xb4e903) {
        var _0x254e78;
        this._invoke = function (_0x3ce743, _0x537ee6) {
          function _0x5c30d3() {
            return new _0xb4e903(function (_0x193f57, _0x500463) {
              !function _0x3cc74a(_0x2f155e, _0x3223d0, _0x12d6c8, _0x3c1275) {
                {
                  var _0x4c4e24 = _0x4db55(_0x4a4861[_0x2f155e], _0x4a4861, _0x3223d0);
                  if ("throw" !== _0x4c4e24.type) {
                    var _0x43a263 = _0x4c4e24.arg,
                      _0x169a0e = _0x43a263.value;
                    return _0x169a0e && "object" == typeof _0x169a0e && _0x285950.call(_0x169a0e, "__await") ? _0xb4e903.resolve(_0x169a0e.__await).then(function (_0x57fd37) {
                      _0x3cc74a("next", _0x57fd37, _0x12d6c8, _0x3c1275);
                    }, function (_0x56609c) {
                      _0x3cc74a("throw", _0x56609c, _0x12d6c8, _0x3c1275);
                    }) : _0xb4e903.resolve(_0x169a0e).then(function (_0x1ef81a) {
                      _0x43a263.value = _0x1ef81a;
                      _0x12d6c8(_0x43a263);
                    }, function (_0x2dda5c) {
                      return _0x3cc74a("throw", _0x2dda5c, _0x12d6c8, _0x3c1275);
                    });
                  }
                  _0x3c1275(_0x4c4e24.arg);
                }
              }(_0x3ce743, _0x537ee6, _0x193f57, _0x500463);
            });
          }
          return _0x254e78 = _0x254e78 ? _0x254e78.then(_0x5c30d3, _0x5c30d3) : _0x5c30d3();
        };
      }
      function _0x241b28(_0x5d58e3, _0x25832a) {
        {
          var _0x457dc7 = _0x5d58e3.iterator[_0x25832a.method];
          if (_0x457dc7 === _0x2ddd8d) {
            {
              if (_0x25832a.delegate = null, "throw" === _0x25832a.method) {
                {
                  if (_0x5d58e3.iterator.return && (_0x25832a.method = "return", _0x25832a.arg = _0x2ddd8d, _0x241b28(_0x5d58e3, _0x25832a), "throw" === _0x25832a.method)) return _0x577576;
                  _0x25832a.method = "throw";
                  _0x25832a.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
              }
              return _0x577576;
            }
          }
          var _0x1cdd4a = _0x4db55(_0x457dc7, _0x5d58e3.iterator, _0x25832a.arg);
          if ("throw" === _0x1cdd4a.type) return _0x25832a.method = "throw", _0x25832a.arg = _0x1cdd4a.arg, _0x25832a.delegate = null, _0x577576;
          var _0x2de52b = _0x1cdd4a.arg;
          return _0x2de52b ? _0x2de52b.done ? (_0x25832a[_0x5d58e3.resultName] = _0x2de52b.value, _0x25832a.next = _0x5d58e3.nextLoc, "return" !== _0x25832a.method && (_0x25832a.method = "next", _0x25832a.arg = _0x2ddd8d), _0x25832a.delegate = null, _0x577576) : _0x2de52b : (_0x25832a.method = "throw", _0x25832a.arg = new TypeError("iterator result is not an object"), _0x25832a.delegate = null, _0x577576);
        }
      }
      function _0x288488(_0xc1945d) {
        var _0x483e7c = {
          "tryLoc": _0xc1945d[0]
        };
        1 in _0xc1945d && (_0x483e7c.catchLoc = _0xc1945d[1]);
        2 in _0xc1945d && (_0x483e7c.finallyLoc = _0xc1945d[2], _0x483e7c.afterLoc = _0xc1945d[3]);
        this.tryEntries.push(_0x483e7c);
      }
      function _0xff1f59(_0xc12bda) {
        var _0x1b4373 = _0xc12bda.completion || {};
        _0x1b4373.type = "normal";
        delete _0x1b4373.arg;
        _0xc12bda.completion = _0x1b4373;
      }
      function _0x57565e(_0x23533e) {
        this.tryEntries = [{
          "tryLoc": "root"
        }];
        _0x23533e.forEach(_0x288488, this);
        this.reset(true);
      }
      function _0x1f67f4(_0x2aad92) {
        {
          if (_0x2aad92) {
            var _0x3172bb = _0x2aad92[_0x4c9041];
            if (_0x3172bb) return _0x3172bb.call(_0x2aad92);
            if ("function" == typeof _0x2aad92.next) return _0x2aad92;
            if (!isNaN(_0x2aad92.length)) {
              var _0x5648ed = -1,
                _0x10b403 = function _0x370d14() {
                  {
                    for (; ++_0x5648ed < _0x2aad92.length;) if (_0x285950.call(_0x2aad92, _0x5648ed)) return _0x370d14.value = _0x2aad92[_0x5648ed], _0x370d14.done = false, _0x370d14;
                    _0x370d14.value = _0x2ddd8d;
                    _0x370d14.done = true;
                    return _0x370d14;
                  }
                };
              return _0x10b403.next = _0x10b403;
            }
          }
          return {
            "next": _0x328314
          };
        }
      }
      function _0x328314() {
        return {
          "value": _0x2ddd8d,
          "done": true
        };
      }
      _0x225e99.prototype = _0x2cde54.constructor = _0x47af4e;
      _0x47af4e.constructor = _0x225e99;
      _0x225e99.displayName = _0x3a37fa(_0x47af4e, _0x2e61ad, "GeneratorFunction");
      _0xe6e084.isGeneratorFunction = function (_0x25dc0b) {
        {
          var _0x3fbc15 = "function" == typeof _0x25dc0b && _0x25dc0b.constructor;
          return !!_0x3fbc15 && (_0x3fbc15 === _0x225e99 || "GeneratorFunction" === (_0x3fbc15.displayName || _0x3fbc15.name));
        }
      };
      _0xe6e084.mark = function (_0x36082e) {
        Object.setPrototypeOf ? Object.setPrototypeOf(_0x36082e, _0x47af4e) : (_0x36082e.__proto__ = _0x47af4e, _0x3a37fa(_0x36082e, _0x2e61ad, "GeneratorFunction"));
        _0x36082e.prototype = Object.create(_0x2cde54);
        return _0x36082e;
      };
      _0xe6e084.awrap = function (_0xe7e1f2) {
        return {
          "__await": _0xe7e1f2
        };
      };
      _0x513ff8(_0x3f7e63.prototype);
      _0x3f7e63.prototype[_0x50cd6f] = function () {
        return this;
      };
      _0xe6e084.AsyncIterator = _0x3f7e63;
      _0xe6e084.async = function (_0x35ab6b, _0xd03ea7, _0x578047, _0x427c20, _0x29a9a1) {
        {
          undefined === _0x29a9a1 && (_0x29a9a1 = Promise);
          var _0x1d8fdd = new _0x3f7e63(_0x2aba4e(_0x35ab6b, _0xd03ea7, _0x578047, _0x427c20), _0x29a9a1);
          return _0xe6e084.isGeneratorFunction(_0xd03ea7) ? _0x1d8fdd : _0x1d8fdd.next().then(function (_0x250e87) {
            return _0x250e87.done ? _0x250e87.value : _0x1d8fdd.next();
          });
        }
      };
      _0x513ff8(_0x2cde54);
      _0x3a37fa(_0x2cde54, _0x2e61ad, "Generator");
      _0x2cde54[_0x4c9041] = function () {
        return this;
      };
      _0x2cde54.toString = function () {
        return "[object Generator]";
      };
      _0xe6e084.keys = function (_0x5310d3) {
        var _0x2c19f4 = [];
        for (var _0xd77a60 in _0x5310d3) _0x2c19f4.push(_0xd77a60);
        _0x2c19f4.reverse();
        return function _0x305a8d() {
          for (; _0x2c19f4.length;) {
            var _0x4cfd0f = _0x2c19f4.pop();
            if (_0x4cfd0f in _0x5310d3) return _0x305a8d.value = _0x4cfd0f, _0x305a8d.done = false, _0x305a8d;
          }
          _0x305a8d.done = true;
          return _0x305a8d;
        };
      };
      _0xe6e084.values = _0x1f67f4;
      _0x57565e.prototype = {
        "constructor": _0x57565e,
        "reset": function (_0x3e43b7) {
          {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x2ddd8d, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x2ddd8d, this.tryEntries.forEach(_0xff1f59), !_0x3e43b7) {
              for (var _0x30fbc9 in this) "t" === _0x30fbc9.charAt(0) && _0x285950.call(this, _0x30fbc9) && !isNaN(+_0x30fbc9.slice(1)) && (this[_0x30fbc9] = _0x2ddd8d);
            }
          }
        },
        "stop": function () {
          {
            this.done = true;
            var _0xef0700 = this.tryEntries[0].completion;
            if ("throw" === _0xef0700.type) throw _0xef0700.arg;
            return this.rval;
          }
        },
        "dispatchException": function (_0x1bcdd0) {
          if (this.done) throw _0x1bcdd0;
          var _0x1af73a = this;
          function _0x3b0989(_0x2a00e2, _0x2653e3) {
            _0x20b906.type = "throw";
            _0x20b906.arg = _0x1bcdd0;
            _0x1af73a.next = _0x2a00e2;
            _0x2653e3 && (_0x1af73a.method = "next", _0x1af73a.arg = _0x2ddd8d);
            return !!_0x2653e3;
          }
          for (var _0x180c7a = this.tryEntries.length - 1; _0x180c7a >= 0; --_0x180c7a) {
            {
              var _0x3394f3 = this.tryEntries[_0x180c7a],
                _0x20b906 = _0x3394f3.completion;
              if ("root" === _0x3394f3.tryLoc) return _0x3b0989("end");
              if (_0x3394f3.tryLoc <= this.prev) {
                {
                  var _0x75a791 = _0x285950.call(_0x3394f3, "catchLoc"),
                    _0x528df4 = _0x285950.call(_0x3394f3, "finallyLoc");
                  if (_0x75a791 && _0x528df4) {
                    if (this.prev < _0x3394f3.catchLoc) return _0x3b0989(_0x3394f3.catchLoc, true);
                    if (this.prev < _0x3394f3.finallyLoc) return _0x3b0989(_0x3394f3.finallyLoc);
                  } else {
                    if (_0x75a791) {
                      if (this.prev < _0x3394f3.catchLoc) return _0x3b0989(_0x3394f3.catchLoc, true);
                    } else {
                      if (!_0x528df4) throw new Error("try statement without catch or finally");
                      if (this.prev < _0x3394f3.finallyLoc) return _0x3b0989(_0x3394f3.finallyLoc);
                    }
                  }
                }
              }
            }
          }
        },
        "abrupt": function (_0x2d800c, _0x1c6331) {
          for (var _0x3193f5 = this.tryEntries.length - 1, _0x5a3b79; _0x3193f5 >= 0; --_0x3193f5) {
            {
              _0x5a3b79 = this.tryEntries[_0x3193f5];
              if (_0x5a3b79.tryLoc <= this.prev && _0x285950.call(_0x5a3b79, "finallyLoc") && this.prev < _0x5a3b79.finallyLoc) {
                var _0x439699 = _0x5a3b79;
                break;
              }
            }
          }
          _0x439699 && ("break" === _0x2d800c || "continue" === _0x2d800c) && _0x439699.tryLoc <= _0x1c6331 && _0x1c6331 <= _0x439699.finallyLoc && (_0x439699 = null);
          var _0x5ebc41 = _0x439699 ? _0x439699.completion : {};
          _0x5ebc41.type = _0x2d800c;
          _0x5ebc41.arg = _0x1c6331;
          return _0x439699 ? (this.method = "next", this.next = _0x439699.finallyLoc, _0x577576) : this.complete(_0x5ebc41);
        },
        "complete": function (_0x4cadac, _0x5d5124) {
          if ("throw" === _0x4cadac.type) throw _0x4cadac.arg;
          "break" === _0x4cadac.type || "continue" === _0x4cadac.type ? this.next = _0x4cadac.arg : "return" === _0x4cadac.type ? (this.rval = this.arg = _0x4cadac.arg, this.method = "return", this.next = "end") : "normal" === _0x4cadac.type && _0x5d5124 && (this.next = _0x5d5124);
          return _0x577576;
        },
        "finish": function (_0x5f11cc) {
          for (var _0x2f6c60 = this.tryEntries.length - 1, _0x1bd9ff; _0x2f6c60 >= 0; --_0x2f6c60) {
            _0x1bd9ff = this.tryEntries[_0x2f6c60];
            if (_0x1bd9ff.finallyLoc === _0x5f11cc) return this.complete(_0x1bd9ff.completion, _0x1bd9ff.afterLoc), _0xff1f59(_0x1bd9ff), _0x577576;
          }
        },
        "catch": function (_0x537896) {
          {
            for (var _0x4fba78 = this.tryEntries.length - 1, _0xbd9ef9; _0x4fba78 >= 0; --_0x4fba78) {
              _0xbd9ef9 = this.tryEntries[_0x4fba78];
              if (_0xbd9ef9.tryLoc === _0x537896) {
                var _0x315a8d = _0xbd9ef9.completion;
                if ("throw" === _0x315a8d.type) {
                  var _0x472daf = _0x315a8d.arg;
                  _0xff1f59(_0xbd9ef9);
                }
                return _0x472daf;
              }
            }
            throw new Error("illegal catch attempt");
          }
        },
        "delegateYield": function (_0x26e1d9, _0x5ddba6, _0x2798da) {
          this.delegate = {
            "iterator": _0x1f67f4(_0x26e1d9),
            "resultName": _0x5ddba6,
            "nextLoc": _0x2798da
          };
          "next" === this.method && (this.arg = _0x2ddd8d);
          return _0x577576;
        }
      };
      return _0xe6e084;
    }();
    function _0x1485cc(_0x1cef59) {
      for (var _0x587109 = [_0x564bea, [_0x2d96a3, _0x7ae5dd], _0x19c945], _0x3c70d4 = [_0x1fdb65, _0x4244d3, _0xc9b4e, _0x1485cc, _0x4392ac, _0x1f07b0], _0x3b8b0a;;) {
        {
          _0x3b8b0a = _0x2d9e06[_0x19c945[_0x1cef59.c[0]++]];
          try {
            var _0x2fce7d = _0x3b8b0a(_0x1cef59, _0x4dcee0, _0xe236f, _0x46a421, _0x587109, _0x3c70d4);
            if (_0x2fce7d === null) break;
          } catch (_0x509de8) {
            _0x4244d3(_0x1cef59, _0x509de8);
          }
        }
      }
    }
    _0x1485cc(_0x360ce6);
  })();
  const _0x1c8a32 = _0x3d0a68.contentWindow.document,
    _0x48a4de = _0x1c8a32.implementation.createHTMLDocument();
  _0x48a4de.documentElement.lang = "zh-CN";
  const _0x596d31 = _0x48a4de.createElement("head"),
    _0x19e27d = _0x48a4de.createElement("meta");
  _0x19e27d.setAttribute("charset", "UTF-8");
  const _0x1b2d12 = _0x48a4de.createElement("meta");
  _0x1b2d12.setAttribute("name", "viewport");
  _0x1b2d12.setAttribute("content", "width=device-width, initial-scale=1.0");
  const _0x3ad566 = _0x48a4de.createElement("title");
  _0x3ad566.textContent = "功能面板";
  const _0x66573f = _0x48a4de.createElement("link");
  _0x66573f.setAttribute("rel", "stylesheet");
  _0x66573f.setAttribute("href", chrome.runtime.getURL("web/css/gongn.css"));
  _0x596d31.appendChild(_0x19e27d);
  _0x596d31.appendChild(_0x1b2d12);
  _0x596d31.appendChild(_0x3ad566);
  _0x596d31.appendChild(_0x66573f);
  const _0x43af73 = _0x48a4de.createElement("body"),
    _0x3a1418 = _0x48a4de.createElement("div");
  _0x3a1418.classList.add("container");
  const _0x14af32 = _0x48a4de.createElement("div");
  _0x14af32.classList.add("column-1");
  const _0x34541c = _0x48a4de.createElement("h1");
  _0x34541c.textContent = "我的店铺";
  const _0x39fd4e = _0x48a4de.createElement("div");
  _0x39fd4e.style.cssText = "display: flex; flex-direction: row; align-items: center; justify-content: space-between;";
  const _0x4001ca = _0x48a4de.createElement("h2");
  _0x4001ca.id = "shopName";
  const _0xda5aba = _0x48a4de.createElement("span");
  _0xda5aba.id = "openShop";
  _0xda5aba.style.cssText = "color:#fb7701; cursor: pointer; font-size: 13px;";
  _0xda5aba.setAttribute("data-url", "");
  _0xda5aba.textContent = "访问店铺";
  _0x39fd4e.appendChild(_0x4001ca);
  _0x39fd4e.appendChild(_0xda5aba);
  _0x14af32.appendChild(_0x34541c);
  _0x14af32.appendChild(_0x39fd4e);
  const _0x4bc601 = _0x48a4de.createElement("div");
  _0x4bc601.classList.add("column-2");
  const _0xb1f02e = [{
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
  _0xb1f02e.forEach(_0x162a08 => {
    const _0x50e10a = _0x48a4de.createElement("div");
    _0x50e10a.classList.add("card");
    const _0x25069e = _0x48a4de.createElement("h2");
    _0x25069e.textContent = _0x162a08.title;
    const _0x4b59d5 = _0x48a4de.createElement("p");
    _0x4b59d5.classList.add("description");
    _0x4b59d5.textContent = _0x162a08.description;
    const _0x43cc50 = _0x48a4de.createElement("label");
    _0x43cc50.classList.add("toggle-switch");
    const _0x369ea2 = _0x48a4de.createElement("input");
    _0x369ea2.type = "checkbox";
    _0x369ea2.id = _0x162a08.id;
    const _0x2a5ec6 = _0x48a4de.createElement("span");
    _0x2a5ec6.classList.add("toggle-slider");
    _0x2a5ec6.id = _0x162a08.id + "Slider";
    _0x43cc50.appendChild(_0x369ea2);
    _0x43cc50.appendChild(_0x2a5ec6);
    _0x50e10a.appendChild(_0x25069e);
    _0x50e10a.appendChild(_0x4b59d5);
    _0x50e10a.appendChild(_0x43cc50);
    _0x4bc601.appendChild(_0x50e10a);
  });
  const _0x16ac53 = _0x48a4de.createElement("div");
  _0x16ac53.classList.add("column-3");
  const _0x24276c = _0x48a4de.createElement("div");
  _0x24276c.style.cssText = "width: 100%; box-shadow: 1px 1px 5px #11191f; border-radius: 10px;";
  const _0x19818f = _0x48a4de.createElement("div");
  _0x19818f.style.cssText = "padding: 10px; font-size: 15px;";
  _0x19818f.textContent = "如有使用问题，请联系小助理";
  const _0x2e574b = _0x48a4de.createElement("img");
  _0x2e574b.id = "codeimg";
  _0x2e574b.alt = "产品图片";
  _0x2e574b.src = chrome.runtime.getURL("web/img/code.jpg");
  _0x2e574b.style.cssText = "padding: 10px; width: 85%; height: 100px;";
  _0x24276c.appendChild(_0x19818f);
  _0x24276c.appendChild(_0x2e574b);
  _0x16ac53.appendChild(_0x24276c);
  _0x3a1418.appendChild(_0x14af32);
  _0x3a1418.appendChild(_0x4bc601);
  _0x3a1418.appendChild(_0x16ac53);
  _0x43af73.appendChild(_0x3a1418);
  _0x48a4de.documentElement.appendChild(_0x596d31);
  _0x48a4de.documentElement.appendChild(_0x43af73);
  _0x1c8a32.open();
  _0x1c8a32.write(_0x48a4de.documentElement.outerHTML);
  _0x1c8a32.close();
  _0x3d0a68.onload = function () {
    {
      const _0x3ea643 = _0x3d0a68.contentWindow.document.querySelector("#openShop"),
        _0x147d68 = _0x3d0a68.contentWindow.document.getElementById("toggleSwitch"),
        _0x39b535 = _0x3d0a68.contentWindow.document.getElementById("toggleSwitch1"),
        _0x325c0d = _0x3d0a68.contentWindow.document.getElementById("temuClearSwitch"),
        _0x179339 = _0x3d0a68.contentWindow.document.getElementById("noticeSwitch"),
        _0x185e20 = _0x3d0a68.contentWindow.document.getElementById("removeWatermarkSwitch"),
        _0x2b8825 = _0x3d0a68.contentWindow.document.getElementById("salerManageSwitch");
      _0x3ea643.addEventListener("click", function () {
        var _0x33d359 = this.getAttribute("data-url");
        window.open(_0x33d359);
      });
      chrome.storage.local.get(["toggleState", "toggleState1", "temuClearSwitch", "noticeSwitch", "removeWatermarkSwitch", "salerManageSwitch"], function (_0x1895c4) {
        _0x147d68.checked = _0x1895c4.toggleState || false;
        _0x39b535.checked = _0x1895c4.toggleState1 || false;
        _0x325c0d.checked = _0x1895c4.temuClearSwitch || false;
        _0x179339.checked = _0x1895c4.noticeSwitch || false;
        _0x185e20.checked = _0x1895c4.removeWatermarkSwitch || false;
        _0x2b8825.checked = _0x1895c4.salerManageSwitch || false;
      });
      function _0x1c097e() {
        chrome.storage.local.set({
          "toggleState": _0x147d68.checked,
          "toggleState1": _0x39b535.checked,
          "temuClearSwitch": _0x325c0d.checked,
          "noticeSwitch": _0x179339.checked,
          "removeWatermarkSwitch": _0x185e20.checked,
          "salerManageSwitch": _0x2b8825.checked
        });
      }
      _0x147d68.addEventListener("change", _0x1c097e);
      _0x39b535.addEventListener("change", _0x1c097e);
      _0x325c0d.addEventListener("change", _0x1c097e);
      _0x179339.addEventListener("change", _0x1c097e);
      _0x185e20.addEventListener("change", _0x1c097e);
      _0x2b8825.addEventListener("change", _0x1c097e);
      chrome.storage.local.get(["mallId", "shopname"], function (_0x3dc37b) {
        const _0x421ac7 = _0x3dc37b.mallId,
          _0x464b70 = _0x3dc37b.shopname,
          _0x387c0c = _0x3d0a68.contentWindow.document.querySelector("#openShop"),
          _0x2f368d = _0x3d0a68.contentWindow.document.querySelector("#shopName");
        _0x2f368d.innerHTML = _0x464b70;
        _0x387c0c.setAttribute("data-url", "https://www.temu.com/mall.html?mall_id=" + _0x421ac7);
      });
    }
  };
}
function _0x4844cd(_0x141774) {
  const _0x3d8575 = _0x141774.contentWindow.document,
    _0x54f54b = document.implementation.createHTMLDocument("便捷访问"),
    _0x3bf070 = _0x54f54b.createElement("head"),
    _0x353bef = _0x54f54b.createElement("body"),
    _0x412e02 = _0x54f54b.createElement("meta");
  _0x412e02.setAttribute("charset", "UTF-8");
  _0x3bf070.appendChild(_0x412e02);
  const _0x5087dc = _0x54f54b.createElement("meta");
  _0x5087dc.setAttribute("name", "viewport");
  _0x5087dc.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x3bf070.appendChild(_0x5087dc);
  const _0x4e81d5 = _0x54f54b.createElement("title");
  _0x4e81d5.textContent = "便捷访问";
  _0x3bf070.appendChild(_0x4e81d5);
  const _0x4f5688 = _0x54f54b.createElement("link");
  _0x4f5688.setAttribute("rel", "stylesheet");
  _0x4f5688.setAttribute("href", chrome.runtime.getURL("web/css/quickAccess.css"));
  _0x3bf070.appendChild(_0x4f5688);
  _0x54f54b.documentElement.appendChild(_0x3bf070);
  const _0x19cfc1 = _0x54f54b.createElement("div");
  _0x19cfc1.classList.add("container");
  _0x19cfc1.id = "buttons";
  _0x353bef.appendChild(_0x19cfc1);
  _0x54f54b.documentElement.appendChild(_0x353bef);
  _0x3d8575.open();
  _0x3d8575.write(_0x54f54b.documentElement.outerHTML);
  _0x3d8575.close();
  _0x141774.onload = function () {
    const _0x56f3e4 = {
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
      _0x31d241 = _0x141774.contentWindow.document.getElementById("buttons");
    for (const [_0x874242, [_0x2bb376, _0x25f5fa]] of Object.entries(_0x56f3e4)) {
      {
        const _0x10c6d0 = _0x141774.contentWindow.document.createElement("div");
        _0x10c6d0.classList.add("button-container");
        const _0x6f1936 = _0x141774.contentWindow.document.createElement("a");
        _0x6f1936.href = _0x2bb376;
        _0x6f1936.target = "_blank";
        const _0x234b7a = _0x141774.contentWindow.document.createElement("img");
        _0x234b7a.src = _0x25f5fa;
        _0x234b7a.alt = _0x874242;
        _0x6f1936.appendChild(_0x234b7a);
        _0x6f1936.appendChild(_0x141774.contentWindow.document.createTextNode(_0x874242));
        _0x10c6d0.appendChild(_0x6f1936);
        _0x31d241.appendChild(_0x10c6d0);
      }
    }
  };
}
function _0xd968f9(_0x1bc2b1) {
  const _0x4be8dc = _0x1bc2b1.contentWindow.document,
    _0x1cc233 = document.implementation.createHTMLDocument("原价申报"),
    _0x38a25a = _0x1cc233.createElement("head"),
    _0x5e720c = _0x1cc233.createElement("meta");
  _0x5e720c.setAttribute("charset", "UTF-8");
  _0x38a25a.appendChild(_0x5e720c);
  const _0x507ab6 = _0x1cc233.createElement("meta");
  _0x507ab6.setAttribute("name", "viewport");
  _0x507ab6.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x38a25a.appendChild(_0x507ab6);
  const _0x4628df = _0x1cc233.createElement("title");
  _0x4628df.textContent = "原价申报";
  _0x38a25a.appendChild(_0x4628df);
  const _0x357b68 = _0x1cc233.createElement("link");
  _0x357b68.setAttribute("rel", "stylesheet");
  _0x357b68.setAttribute("href", chrome.runtime.getURL("web/css/fastPricing.css"));
  _0x38a25a.appendChild(_0x357b68);
  _0x1cc233.documentElement.appendChild(_0x38a25a);
  const _0x3b0ed2 = _0x1cc233.createElement("body");
  _0x3b0ed2.setAttribute("style", "background: white;");
  const _0x512b77 = _0x1cc233.createElement("div");
  _0x512b77.classList.add("button-container");
  _0x512b77.innerHTML = "\n        <button id=\"refreshButton\">刷新核价数据</button>\n        <button id=\"executeButton\">批量原价申报</button>\n        <button id=\"giveupExecuteButton\">批量放弃调整报价</button>\n        <button class=\"fullscreen-btn\" id=\"fullscreenButton\">放大全屏</button>\n        <span style=\"font-size: 18px;margin-left: 50px;color: cadetblue;\" id=\"gululutip2\">\n            咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。\n        </span>\n    ";
  _0x3b0ed2.appendChild(_0x512b77);
  const _0x477518 = _0x1cc233.createElement("div");
  _0x477518.classList.add("table-container");
  _0x477518.innerHTML = "\n        <table class=\"product-table\">\n            <thead>\n                <tr class=\"product-header\">\n                    <th class=\"select-all-cell\">\n                        <input type=\"checkbox\" id=\"selectAllCheckbox\" style=\"width: 18px; height: 18px;\">\n                    </th>\n                    <th>商品图片</th>\n                    <th>商品SKC</th>\n                    <th>商品属性</th>\n                    <th>原申报价格</th>\n                    <th>参考申报价格</th>\n                </tr>\n            </thead>\n            <tbody id=\"products-container\">\n                <!-- 商品数据将动态加载在这里 -->\n            </tbody>\n        </table>\n    ";
  _0x3b0ed2.appendChild(_0x477518);
  const _0x3d8a33 = _0x1cc233.createElement("div");
  _0x3d8a33.classList.add("pagination-container");
  _0x3d8a33.innerHTML = "\n        <div class=\"page-info\" id=\"page-info\">第1页/共1页</div>\n        <div>\n            <select id=\"items-per-page\" style=\"margin-left: 10px;\">\n                <option value=\"20\">每页20条</option>\n                <option value=\"50\" selected>每页50条</option>\n                <option value=\"100\">每页100条</option>\n            </select>\n            <button id=\"prevPageBtn\" style=\"margin-left: 10px;\">上一页</button>\n            <button id=\"nextPageBtn\" style=\"margin-left: 10px;\">下一页</button>\n        </div>\n    ";
  _0x3b0ed2.appendChild(_0x3d8a33);
  _0x1cc233.documentElement.appendChild(_0x3b0ed2);
  _0x4be8dc.open();
  _0x4be8dc.write(_0x1cc233.documentElement.outerHTML);
  _0x4be8dc.close();
  _0x1bc2b1.onload = function () {
    let _0x38ea69 = [],
      _0x1437ff = 0;
    const _0x2018c2 = _0x1bc2b1.contentWindow.document.getElementById("products-container"),
      _0x52030a = _0x1bc2b1.contentWindow.document.getElementById("selectAllCheckbox"),
      _0x163176 = _0x1bc2b1.contentWindow.document.getElementById("executeButton"),
      _0x380cbb = _0x1bc2b1.contentWindow.document.getElementById("giveupExecuteButton"),
      _0x172ac7 = _0x1bc2b1.contentWindow.document.getElementById("refreshButton"),
      _0x1b12a8 = _0x1bc2b1.contentWindow.document.getElementById("prevPageBtn"),
      _0x77f8f2 = _0x1bc2b1.contentWindow.document.getElementById("nextPageBtn"),
      _0x2c1ea8 = _0x1bc2b1.contentWindow.document.getElementById("page-info"),
      _0x149226 = _0x1bc2b1.contentWindow.document.getElementById("items-per-page");
    let _0x25b17d = 1,
      _0x316876 = parseInt(_0x149226.value);
    "咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。".replace(/\\u([\d\w]{4})/gi, (_0x467e7, _0xcff5e9) => String.fromCharCode(parseInt(_0xcff5e9, 16))) == _0x1bc2b1.contentWindow.document.querySelector("#gululutip2").innerText ? "" : !function () {
      chrome.storage.local.set({
        "codePhone": ["", ""]
      });
      window.location.reload();
    }();
    async function _0x17fc48(_0x4ea03e = 1) {
      try {
        chrome.storage.local.get(["mallId"], async function (_0x4d0b79) {
          {
            var _0x1a92de = _0x4d0b79.mallId;
            _0x597ec5();
            var _0x3f74c2 = await _0x5cbf22(_0x1a92de, _0x25b17d, _0x316876);
            _0x38ea69 = await _0x4eb66c(_0x1a92de, _0x3f74c2);
            _0x384be1();
            _0x4ea03e != 1 && _0x3671b1(_0x4ea03e);
            var _0x524ef9 = _0x3f74c2.result;
            _0x1437ff = _0x524ef9.total;
            _0x2018c2.innerHTML = "";
            const _0xdf0aa6 = 0,
              _0x59f224 = _0xdf0aa6 + _0x316876,
              _0x3da07c = _0x38ea69.slice(_0xdf0aa6, _0x59f224);
            _0x3da07c.forEach(_0x34dfce => {
              _0x34dfce.attributes.forEach((_0x492c0f, _0x5e58d2) => {
                {
                  const _0xdb9b49 = _0x1bc2b1.contentWindow.document.createElement("tr");
                  if (_0x5e58d2 === 0) {
                    {
                      const _0x345a09 = _0x1bc2b1.contentWindow.document.createElement("td");
                      _0x345a09.classList.add("checkbox-cell");
                      const _0x60c215 = _0x1bc2b1.contentWindow.document.createElement("input");
                      _0x60c215.type = "checkbox";
                      _0x60c215.name = "product-select";
                      _0x60c215.setAttribute("data-skc", _0x34dfce.skc);
                      _0x345a09.appendChild(_0x60c215);
                      _0x345a09.rowSpan = _0x34dfce.attributes.length;
                      _0xdb9b49.appendChild(_0x345a09);
                    }
                  }
                  if (_0x5e58d2 === 0) {
                    const _0x5c4e57 = _0x1bc2b1.contentWindow.document.createElement("td"),
                      _0x2180bb = _0x1bc2b1.contentWindow.document.createElement("img");
                    _0x2180bb.src = _0x34dfce.image;
                    _0x2180bb.alt = "商品图片";
                    _0x5c4e57.rowSpan = _0x34dfce.attributes.length;
                    _0x5c4e57.appendChild(_0x2180bb);
                    _0xdb9b49.appendChild(_0x5c4e57);
                    const _0x8858a3 = _0x1bc2b1.contentWindow.document.createElement("td");
                    _0x8858a3.innerHTML = _0x34dfce.skc;
                    _0x8858a3.rowSpan = _0x34dfce.attributes.length;
                    _0xdb9b49.appendChild(_0x8858a3);
                  }
                  const _0x5053d9 = _0x1bc2b1.contentWindow.document.createElement("td");
                  _0x5053d9.textContent = _0x492c0f[0];
                  _0xdb9b49.appendChild(_0x5053d9);
                  const _0x191c88 = _0x1bc2b1.contentWindow.document.createElement("td");
                  _0x191c88.textContent = _0x492c0f[1];
                  _0xdb9b49.appendChild(_0x191c88);
                  const _0x29e546 = _0x1bc2b1.contentWindow.document.createElement("td");
                  _0x29e546.textContent = _0x492c0f[2];
                  _0xdb9b49.appendChild(_0x29e546);
                  _0x2018c2.appendChild(_0xdb9b49);
                }
              });
            });
            const _0x5c875b = Math.ceil(_0x1437ff / _0x316876);
            _0x2c1ea8.textContent = "第 " + _0x25b17d + " 页 / 共 " + _0x5c875b + " 页";
            _0x1b12a8.disabled = _0x25b17d === 1;
            _0x77f8f2.disabled = _0x25b17d === _0x5c875b;
            if (_0x25b17d === _0x5c875b) {
              _0x77f8f2.classList.add("disabled");
              _0x77f8f2.style.backgroundColor = "#c0c0c0";
              _0x77f8f2.style.cursor = "not-allowed";
            } else {
              _0x77f8f2.classList.remove("disabled");
              _0x77f8f2.style.backgroundColor = "#1e88e5";
              _0x77f8f2.style.cursor = "pointer";
            }
            _0x25b17d === 1 ? (_0x1b12a8.classList.add("disabled"), _0x1b12a8.style.backgroundColor = "#c0c0c0", _0x1b12a8.style.cursor = "not-allowed") : (_0x1b12a8.classList.remove("disabled"), _0x1b12a8.style.backgroundColor = "#1e88e5", _0x1b12a8.style.cursor = "pointer");
          }
        });
      } catch (_0x4296fe) {
        console.log(_0x4296fe);
      }
    }
    _0x52030a.addEventListener("change", () => {
      {
        const _0x5c0385 = _0x1bc2b1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
        _0x5c0385.forEach(_0x51b457 => {
          _0x51b457.checked = _0x52030a.checked;
        });
      }
    });
    _0x163176.addEventListener("click", () => {
      {
        var _0x428de8 = {};
        const _0x5bffe1 = _0x1bc2b1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
        _0x5bffe1.forEach(_0x72200f => {
          {
            const _0x259efb = _0x72200f.getAttribute("data-skc"),
              _0x4369b6 = _0x38ea69.find(_0x2eed63 => parseInt(_0x2eed63.skc) === parseInt(_0x259efb));
            _0x4369b6.attributes.forEach(_0x1279ba => {
              const _0x4845b2 = _0x1279ba[4];
              !_0x428de8[_0x4845b2] && (_0x428de8[_0x4845b2] = []);
              _0x428de8[_0x4845b2].push({
                "productSkuId": _0x1279ba[3],
                "price": parseInt(parseFloat(_0x1279ba[1]) * 100)
              });
            });
          }
        });
        _0x3c6caa(mallid = 1, _0x428de8);
      }
    });
    _0x380cbb.addEventListener("click", () => {
      {
        var _0x1e0f17 = {};
        const _0x4c0a4d = _0x1bc2b1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
        _0x4c0a4d.forEach(_0x592fb0 => {
          {
            const _0x408ce9 = _0x592fb0.getAttribute("data-skc"),
              _0x16187b = _0x38ea69.find(_0x31af69 => parseInt(_0x31af69.skc) === parseInt(_0x408ce9));
            _0x16187b.attributes.forEach(_0x1decf4 => {
              const _0xfe2ef4 = _0x1decf4[4];
              !_0x1e0f17[_0xfe2ef4] && (_0x1e0f17[_0xfe2ef4] = []);
              _0x1e0f17[_0xfe2ef4].push({
                "productSkuId": _0x1decf4[3],
                "price": parseInt(parseFloat(_0x1decf4[1]) * 100)
              });
            });
          }
        });
        _0x3c6caa(mallid = 1, _0x1e0f17, 2);
      }
    });
    _0x172ac7.addEventListener("click", () => {
      _0x25b17d = 1;
      _0x17fc48();
      _0x52030a.checked = false;
    });
    _0x149226.addEventListener("change", () => {
      _0x316876 = parseInt(_0x149226.value);
      _0x25b17d = 1;
      _0x17fc48();
    });
    _0x1b12a8.addEventListener("click", () => {
      if (_0x25b17d > 1) {
        _0x25b17d--;
        _0x17fc48();
      }
    });
    _0x77f8f2.addEventListener("click", () => {
      try {
        const _0x1136e0 = Math.ceil(_0x1437ff / _0x316876);
        _0x25b17d < _0x1136e0 && (_0x25b17d++, _0x17fc48());
      } catch (_0x548358) {
        console.log(_0x548358);
      }
    });
    _0x17fc48();
    async function _0x5cbf22(_0x18dfa9, _0x17df84, _0x516c41) {
      const _0x4b1624 = new Headers();
      _0x4b1624.append("accept", "*/*");
      _0x4b1624.append("accept-language", "zh-CN,zh;q=0.9");
      _0x4b1624.append("cache-control", "no-cache");
      _0x4b1624.append("content-type", "application/json");
      _0x4b1624.append("mallid", _0x18dfa9);
      const _0x1a700a = JSON.stringify({
          "pageSize": _0x516c41,
          "pageNum": _0x17df84,
          "priceReviewStatusList": [1],
          "secondarySelectStatusList": [7],
          "supplierTodoTypeList": []
        }),
        _0x3ff4cd = {
          "method": "POST",
          "headers": _0x4b1624,
          "body": _0x1a700a,
          "redirect": "follow"
        };
      var _0x427bf2 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x3ff4cd),
        _0x4ee8d2 = await _0x427bf2.json();
      return _0x4ee8d2;
    }
    let _0x1e6dc2 = {};
    async function _0x4eb66c(_0x5747c9, _0x235f45) {
      {
        var _0x3c2a48 = _0x235f45.result,
          _0x260443 = _0x3c2a48.dataList,
          _0x25038f = [],
          _0x905888 = [];
        _0x1e6dc2 = await new Promise(_0x2593fb => {
          localforage.getItem(_0x5747c9 + "price", function (_0x2f9a67, _0x5a46a0) {
            if (_0x5a46a0) {
              const {
                priceCaches: _0xe338f4
              } = _0x5a46a0;
              _0xe338f4 ? _0x2593fb(_0xe338f4) : _0x2593fb({});
            } else _0x2593fb({});
          });
        });
        for (var _0x43a1fc = 0; _0x43a1fc < _0x260443.length; _0x43a1fc++) {
          var _0x1b9a0e = _0x260443[_0x43a1fc].skcList;
          for (var _0x2824c5 of _0x1b9a0e) {
            var _0x43f0ba = [],
              _0x558dc5 = _0x2824c5.skcId,
              _0x51899f = _0x2824c5.extCode,
              _0x5dd4e6 = _0x2824c5.previewImgUrlList[0],
              _0x5d1b71 = _0x2824c5.supplierPriceReviewInfoList;
            for (var _0x4b4d88 of _0x5d1b71) {
              var _0x1c7a41 = _0x4b4d88.priceOrderId,
                _0x249849 = _0x4b4d88.productSkuList,
                _0x398984 = _0x4b4d88.status;
              if (parseInt(_0x398984) == 1) {
                _0x905888.push({
                  "mallid": _0x5747c9,
                  "priceOrderId": _0x1c7a41,
                  "productSkuList": _0x249849,
                  "previewImgUrlList": _0x5dd4e6,
                  "skcId": _0x558dc5,
                  "extCode": _0x51899f,
                  "attributes": _0x43f0ba,
                  "priceCache": _0x1e6dc2
                });
              }
            }
          }
        }
        await _0x5bef84(_0x905888, 20);
        for (let _0x68be84 of _0x905888) {
          _0x25038f.push({
            "attributes": _0x68be84.attributes,
            "image": _0x68be84.previewImgUrlList,
            "skc": _0x68be84.skcId + "<hr>货号：" + _0x68be84.extCode
          });
        }
        const _0x5f5cf3 = _0x25038f.filter((_0x19e409, _0xa594e7, _0x428cd3) => _0x428cd3.findIndex(_0x3db2ee => _0x3db2ee.skc === _0x19e409.skc) === _0xa594e7);
        await localforage.setItem(_0x5747c9 + "price", {
          "priceCaches": _0x1e6dc2
        });
        return _0x5f5cf3;
      }
    }
    async function _0x173590(_0x381813, _0x34130c, _0x5e15b6) {
      {
        try {
          {
            if (_0x5e15b6[_0x34130c]) {
              return _0x5e15b6[_0x34130c];
            }
            const _0x4af775 = new Headers();
            _0x4af775.append("accept", "*/*");
            _0x4af775.append("accept-language", "zh-CN,zh;q=0.9");
            _0x4af775.append("cache-control", "no-cache");
            _0x4af775.append("content-type", "application/json");
            _0x4af775.append("mallid", _0x381813);
            const _0x2125d4 = JSON.stringify({
                "orderId": _0x34130c
              }),
              _0x14fded = {
                "method": "POST",
                "headers": _0x4af775,
                "body": _0x2125d4,
                "redirect": "follow"
              };
            var _0xe2bd49 = await fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/reject-remark", _0x14fded),
              _0x35f139 = await _0xe2bd49.json(),
              _0xe19ce0 = _0x35f139.result;
            if (_0xe19ce0.suggestSupplyPrice) {
              {
                var _0x160254 = (parseInt(_0xe19ce0.suggestSupplyPrice) / 100).toFixed(2) + "元",
                  _0x3e4915 = (parseInt(_0xe19ce0.supplyPrice) / 100).toFixed(2) + "元";
                _0x5e15b6[_0x34130c] = [_0x3e4915, _0x160254];
              }
            } else {
              {
                var _0x160254 = _0xe19ce0.rejectRemark,
                  _0x3e4915 = (parseInt(_0xe19ce0.supplyPrice) / 100).toFixed(2) + "元";
                _0x5e15b6[_0x34130c] = [_0x3e4915, _0x160254];
              }
            }
          }
        } catch (_0x492619) {
          console.log(_0x492619);
        }
        return [_0x3e4915, _0x160254];
      }
    }
    async function _0x5bef84(_0x46191c, _0x572c8c) {
      try {
        let _0x3574ab = [],
          _0x54499d = 0;
        const _0x1beb61 = async () => {
            {
              if (_0x54499d < _0x46191c.length) {
                const _0x20a593 = _0x46191c[_0x54499d++],
                  _0x4bc27a = await _0x173590(_0x20a593.mallid, _0x20a593.priceOrderId, _0x20a593.priceCache);
                var _0x4e60fa = _0x20a593.productSkuList.map(_0x19d5e1 => [_0x19d5e1.productPropertyList.map(_0x548286 => _0x548286.value).join("-"), _0x4bc27a[0], _0x4bc27a[1], _0x19d5e1.skuId, _0x20a593.priceOrderId]);
                _0x20a593.attributes.push(..._0x4e60fa);
              }
            }
          },
          _0x4dda8e = [];
        for (let _0x42ed14 = 0; _0x42ed14 < _0x572c8c && _0x42ed14 < _0x46191c.length; _0x42ed14++) {
          _0x4dda8e.push(_0x1beb61());
        }
        await Promise.all(_0x4dda8e);
        while (_0x54499d < _0x46191c.length) {
          await _0x1beb61();
        }
        await Promise.all(_0x3574ab);
      } catch (_0x1b836f) {
        console.log(_0x1b836f);
      }
    }
    async function _0x3c6caa(_0x2f8240, _0xab43a6, _0x595927 = 1) {
      _0x597ec5();
      chrome.storage.local.get(["mallId"], async function (_0x400483) {
        var _0x5e96b1 = _0x400483.mallId;
        localforage.getItem(_0x5e96b1 + "price", async function (_0xdd549a, _0x5d2c84) {
          {
            if (_0x5d2c84) {
              {
                const {
                  priceCaches: _0x5964be
                } = _0x5d2c84;
                if (_0x5964be) {
                  for (let _0x279235 in _0xab43a6) {
                    delete _0x5964be[_0x279235];
                  }
                  await localforage.setItem(_0x5e96b1 + "price", {
                    "priceCaches": _0x1e6dc2
                  });
                }
              }
            }
          }
        });
        const _0x1d3e0f = new Headers();
        _0x1d3e0f.append("accept", "*/*");
        _0x1d3e0f.append("accept-language", "zh-CN,zh;q=0.9");
        _0x1d3e0f.append("cache-control", "no-cache");
        _0x1d3e0f.append("content-type", "application/json");
        _0x1d3e0f.append("mallid", _0x5e96b1);
        const _0x27fc99 = Object.entries(_0xab43a6);
        if (_0x595927 == 1) var _0x1fc529 = async _0x43a19f => {
          {
            const _0x35003b = _0x43a19f.map(([_0x4cf7fd, _0x21c857]) => {
              {
                const _0x16817d = JSON.stringify({
                    "supplierResult": 2,
                    "priceOrderId": parseInt(_0x4cf7fd),
                    "items": _0x21c857,
                    "bargainReasonList": []
                  }),
                  _0x8d0ade = {
                    "method": "POST",
                    "headers": _0x1d3e0f,
                    "body": _0x16817d,
                    "redirect": "follow"
                  };
                return fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price/bargain-no-bom", _0x8d0ade);
              }
            });
            return Promise.all(_0x35003b);
          }
        };else var _0x1fc529 = async _0x42091d => {
          {
            const _0x42aa96 = _0x42091d.map(([_0x5f3b38, _0x253ef0]) => {
              {
                const _0x536a15 = JSON.stringify({
                    "priceOrderId": parseInt(_0x5f3b38)
                  }),
                  _0x3cb5ed = {
                    "method": "POST",
                    "headers": _0x1d3e0f,
                    "body": _0x536a15,
                    "redirect": "follow"
                  };
                return fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/review", _0x3cb5ed);
              }
            });
            return Promise.all(_0x42aa96);
          }
        };
        const _0x3e8299 = 10;
        for (let _0x39bfc3 = 0; _0x39bfc3 < _0x27fc99.length; _0x39bfc3 += _0x3e8299) {
          {
            const _0x44f01c = _0x27fc99.slice(_0x39bfc3, _0x39bfc3 + _0x3e8299);
            await _0x1fc529(_0x44f01c);
          }
        }
        _0x384be1();
        _0x17fc48("操作已完成！");
      });
    }
    const _0x57dafd = _0x1bc2b1.contentWindow.document.getElementById("fullscreenButton");
    _0x57dafd.addEventListener("click", () => {
      if (!_0x1bc2b1.contentWindow.document.fullscreenElement) {
        {
          _0x57dafd.innerText = "退出全屏";
          if (_0x1bc2b1.contentWindow.document.documentElement.requestFullscreen) _0x1bc2b1.contentWindow.document.documentElement.requestFullscreen();else {
            if (_0x1bc2b1.contentWindow.document.documentElement.mozRequestFullScreen) _0x1bc2b1.contentWindow.document.documentElement.mozRequestFullScreen();else {
              if (_0x1bc2b1.contentWindow.document.documentElement.webkitRequestFullscreen) {
                _0x1bc2b1.contentWindow.document.documentElement.webkitRequestFullscreen();
              } else {
                if (_0x1bc2b1.contentWindow.document.documentElement.msRequestFullscreen) {
                  _0x1bc2b1.contentWindow.document.documentElement.msRequestFullscreen();
                }
              }
            }
          }
        }
      } else {
        _0x57dafd.innerText = "放大全屏";
        if (_0x1bc2b1.contentWindow.document.exitFullscreen) {
          _0x1bc2b1.contentWindow.document.exitFullscreen();
        } else {
          if (_0x1bc2b1.contentWindow.document.mozCancelFullScreen) _0x1bc2b1.contentWindow.document.mozCancelFullScreen();else {
            if (_0x1bc2b1.contentWindow.document.webkitExitFullscreen) {
              _0x1bc2b1.contentWindow.document.webkitExitFullscreen();
            } else {
              if (_0x1bc2b1.contentWindow.document.msExitFullscreen) {
                _0x1bc2b1.contentWindow.document.msExitFullscreen();
              }
            }
          }
        }
      }
    });
    function _0xec916f() {
      const _0x2e10fb = _0x1bc2b1.contentWindow.innerHeight,
        _0x748e6 = _0x1bc2b1.contentWindow.document.querySelector(".table-container");
      _0x748e6.style.maxHeight = _0x2e10fb - 180 + "px";
    }
    _0xec916f();
    window.addEventListener("resize", _0xec916f);
    function _0x597ec5(_0x5a1307 = 1) {
      var _0x18e2f0 = _0x1bc2b1.contentWindow.document.createElement("div");
      _0x18e2f0.id = "loader";
      _0x18e2f0.style.position = "fixed";
      _0x18e2f0.style.top = "0";
      _0x18e2f0.style.left = "0";
      _0x18e2f0.style.width = "100%";
      _0x18e2f0.style.height = "100%";
      _0x18e2f0.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      _0x18e2f0.style.display = "flex";
      _0x18e2f0.style.flexDirection = "column";
      _0x18e2f0.style.justifyContent = "center";
      _0x18e2f0.style.alignItems = "center";
      _0x18e2f0.style.zIndex = "9999";
      var _0x56ff82 = _0x1bc2b1.contentWindow.document.createElement("div");
      _0x56ff82.style.position = "relative";
      _0x56ff82.style.width = "128px";
      _0x56ff82.style.height = "128px";
      for (let _0x116619 = 0; _0x116619 < 3; _0x116619++) {
        let _0x1ab238 = _0x1bc2b1.contentWindow.document.createElement("div");
        _0x1ab238.style.position = "absolute";
        _0x1ab238.style.width = "128px";
        _0x1ab238.style.height = "128px";
        _0x1ab238.style.border = "8px solid transparent";
        _0x1ab238.style.borderTop = "8px solid #ffffff";
        _0x1ab238.style.borderRadius = "50%";
        _0x1ab238.style.animation = "spin 1.2s linear infinite";
        _0x1ab238.style.animationDelay = _0x116619 * 0.4 + "s";
        _0x56ff82.appendChild(_0x1ab238);
      }
      if (_0x5a1307 != 1) {
        {
          var _0x4b4da7 = _0x1bc2b1.contentWindow.document.createElement("button");
          _0x4b4da7.textContent = "0";
          _0x4b4da7.style.position = "absolute";
          _0x4b4da7.style.top = "50%";
          _0x4b4da7.style.left = "50%";
          _0x4b4da7.style.transform = "translate(-50%, -50%)";
          _0x4b4da7.style.padding = "10px 20px";
          _0x4b4da7.style.backgroundColor = "rgb(255 255 255 / 0%)";
          _0x4b4da7.style.border = "none";
          _0x4b4da7.style.borderRadius = "5px";
          _0x4b4da7.style.cursor = "pointer";
          _0x4b4da7.style.height = "70px";
          _0x4b4da7.style.width = "70px";
          _0x4b4da7.style.fontSize = "20px";
          _0x4b4da7.style.color = "#fff";
          var _0xc9c8c6 = 0,
            _0x44d2be = setInterval(function () {
              if (!_0x4b4da7.isConnected) {
                {
                  clearInterval(_0x44d2be);
                  return;
                }
              }
              _0xc9c8c6++;
              _0x4b4da7.textContent = _0xc9c8c6;
            }, 1000);
          _0x56ff82.appendChild(_0x4b4da7);
        }
      }
      _0x18e2f0.appendChild(_0x56ff82);
      var _0x2ec61c = _0x1bc2b1.contentWindow.document.createElement("div");
      _0x2ec61c.id = "loader-message";
      _0x2ec61c.style.marginTop = "20px";
      _0x2ec61c.style.color = "#ffffff";
      _0x2ec61c.style.fontSize = "18px";
      _0x2ec61c.innerHTML = "处理中，请等待一会...";
      _0x18e2f0.appendChild(_0x2ec61c);
      _0x1bc2b1.contentWindow.document.body.appendChild(_0x18e2f0);
      var _0x24d8c8 = _0x1bc2b1.contentWindow.document.createElement("style");
      _0x24d8c8.type = "text/css";
      var _0x2fba64 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
      _0x24d8c8.innerHTML = _0x2fba64;
      _0x1bc2b1.contentWindow.document.getElementsByTagName("head")[0].appendChild(_0x24d8c8);
    }
    function _0x384be1() {
      var _0x11175f = _0x1bc2b1.contentWindow.document.getElementById("loader");
      _0x11175f && _0x1bc2b1.contentWindow.document.body.removeChild(_0x11175f);
    }
    async function _0x3671b1(_0x522d89, _0x35030b = "常规消息", _0x55c57a = 1, _0x42ba03 = 1, _0x4770a6 = "") {
      if (_0x55c57a == 1 && _0x35030b != "常规消息") var _0x55c57a = await _0x287380();
      var _0x26310a = _0x1bc2b1.contentWindow.document.createElement("div");
      _0x26310a.classList.add("custom-alert");
      _0x26310a.style.position = "fixed";
      _0x26310a.style.zIndex = "9999";
      _0x26310a.style.top = "50%";
      _0x26310a.style.left = "50%";
      _0x26310a.style.transform = "translate(-50%, -50%)";
      _0x26310a.style.display = "flex";
      _0x26310a.style.justifyContent = "center";
      _0x26310a.style.alignItems = "center";
      _0x26310a.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      _0x26310a.style.width = "100%";
      _0x26310a.style.height = "100%";
      var _0x5ba5ff = _0x1bc2b1.contentWindow.document.createElement("div");
      _0x5ba5ff.classList.add("custom-alert-content");
      _0x5ba5ff.style.backgroundColor = "#fff";
      _0x5ba5ff.style.padding = "20px";
      _0x5ba5ff.style.borderRadius = "8px";
      _0x5ba5ff.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
      _0x5ba5ff.style.maxWidth = "80%";
      _0x5ba5ff.style.fontSize = "23px";
      _0x5ba5ff.style.textAlign = "center";
      var _0x5596c9 = _0x1bc2b1.contentWindow.document.createElement("p");
      _0x5596c9.innerHTML = _0x522d89;
      var _0x5850de = _0x1bc2b1.contentWindow.document.createElement("button");
      _0x5850de.textContent = "关闭";
      _0x5850de.classList.add("custom-alert-button");
      _0x5850de.style.padding = "10px 20px";
      _0x5850de.style.backgroundColor = "rgb(245 58 58)";
      _0x5850de.style.color = "#fff";
      _0x5850de.style.border = "none";
      _0x5850de.style.cursor = "pointer";
      _0x5850de.style.borderRadius = "4px";
      _0x5850de.style.fontSize = "16px";
      _0x5850de.addEventListener("click", function () {
        _0x26310a.remove();
      });
      _0x5850de.addEventListener("mouseenter", function () {
        _0x5850de.style.backgroundColor = "rgb(203 49 49)";
      });
      _0x5850de.addEventListener("mouseleave", function () {
        _0x5850de.style.backgroundColor = "rgb(245 58 58)";
      });
      _0x5ba5ff.appendChild(_0x5596c9);
      if (_0x35030b == "常规帮助") {
        {
          var _0x4274cc = _0x1bc2b1.contentWindow.document.createElement("img");
          _0x4274cc.src = chrome.runtime.getURL("img/code.jpg");
          _0x4274cc.alt = "Alert Image";
          _0x4274cc.style.width = "100px";
          _0x4274cc.style.height = "auto";
          _0x4274cc.style.marginBottom = "15px";
          _0x5ba5ff.appendChild(_0x4274cc);
          _0x5ba5ff.appendChild(_0x1bc2b1.contentWindow.document.createElement("hr"));
        }
      } else {
        if (_0x35030b == "可绑定帮助") {
          {
            var _0x4ccf1c = _0x1bc2b1.contentWindow.document.createElement("button");
            _0x4ccf1c.textContent = "确定";
            _0x4ccf1c.classList.add("custom-alert-button");
            _0x4ccf1c.style.padding = "10px 20px";
            _0x4ccf1c.style.backgroundColor = "rgb(67 179 82)";
            _0x4ccf1c.style.color = "#fff";
            _0x4ccf1c.style.border = "none";
            _0x4ccf1c.style.cursor = "pointer";
            _0x4ccf1c.style.borderRadius = "4px";
            _0x4ccf1c.style.fontSize = "16px";
            _0x4ccf1c.style.marginRight = "30px";
            _0x4ccf1c.addEventListener("click", function () {
              _0x26310a.style.display = "none";
              _0x597ec5();
              updateShop(_0x55c57a, _0x42ba03, _0x4770a6).then(_0x3abe29 => {
                _0x384be1();
                location.reload();
              }).catch(_0x5857b1 => {
                _0x384be1();
                _0x3671b1("绑定失败，请重试");
                console.log(_0x5857b1);
              });
            });
            _0x4ccf1c.addEventListener("mouseenter", function () {
              _0x4ccf1c.style.backgroundColor = "rgb(51 138 62)";
            });
            _0x4ccf1c.addEventListener("mouseleave", function () {
              _0x4ccf1c.style.backgroundColor = "rgb(67 179 82)";
            });
            _0x5ba5ff.appendChild(_0x1bc2b1.contentWindow.document.createElement("hr"));
            _0x5ba5ff.appendChild(_0x4ccf1c);
          }
        }
      }
      _0x5ba5ff.appendChild(_0x5850de);
      _0x26310a.appendChild(_0x5ba5ff);
      _0x1bc2b1.contentWindow.document.body.appendChild(_0x26310a);
    }
  };
}
function _0x52cb22(_0x51e08c) {
  const _0x319e60 = _0x51e08c.contentWindow.document,
    _0x4e0377 = document.implementation.createHTMLDocument("电商控制台"),
    _0x10d158 = _0x4e0377.createElement("head"),
    _0x14b5e0 = _0x4e0377.createElement("meta");
  _0x14b5e0.setAttribute("charset", "UTF-8");
  _0x10d158.appendChild(_0x14b5e0);
  const _0x47d39f = _0x4e0377.createElement("meta");
  _0x47d39f.setAttribute("name", "viewport");
  _0x47d39f.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x10d158.appendChild(_0x47d39f);
  const _0x465d0a = _0x4e0377.createElement("title");
  _0x465d0a.textContent = "电商控制台";
  _0x10d158.appendChild(_0x465d0a);
  const _0x208496 = _0x4e0377.createElement("link");
  _0x208496.setAttribute("rel", "stylesheet");
  _0x208496.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x10d158.appendChild(_0x208496);
  const _0x542f1a = _0x4e0377.createElement("link");
  _0x542f1a.setAttribute("rel", "stylesheet");
  _0x542f1a.setAttribute("href", chrome.runtime.getURL("web/css/flatpickr.min.css"));
  _0x10d158.appendChild(_0x542f1a);
  _0x4e0377.documentElement.appendChild(_0x10d158);
  const _0x55a3a7 = _0x4e0377.createElement("body"),
    _0x500a06 = _0x4e0377.createElement("div");
  _0x500a06.classList.add("content");
  const _0x429ec9 = [{
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
  _0x429ec9.forEach(_0x201d07 => {
    const _0x39f29a = _0x4e0377.createElement("div");
    _0x39f29a.classList.add("card");
    _0x39f29a.innerHTML = "\n            <h2>" + _0x201d07.title + "</h2>\n            <p>" + _0x201d07.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x201d07.id + "\">使用功能</a>\n        ";
    _0x500a06.appendChild(_0x39f29a);
  });
  _0x55a3a7.appendChild(_0x500a06);
  const _0x28419a = _0x4e0377.createElement("div");
  _0x28419a.id = "modalContainer";
  const _0x585263 = _0x4e0377.createElement("div");
  _0x585263.id = "overlay";
  _0x28419a.appendChild(_0x585263);
  const _0x49bbf2 = _0x4e0377.createElement("div");
  _0x49bbf2.id = "modal";
  _0x49bbf2.innerHTML = "\n        <h2 style=\"margin: 20px;\">请选择导出日期</h2>\n        <div class=\"func-btn-container\">\n            <input autocomplete=\"off\" id=\"dateInput\" placeholder=\"请选择日期\" \n                style=\"height: 50px; display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin: 10px; width: 95%;\">\n        </div>\n        <button id=\"closeModal\" class=\"btn\">关闭</button>\n    ";
  _0x28419a.appendChild(_0x49bbf2);
  _0x55a3a7.appendChild(_0x28419a);
  _0x4e0377.documentElement.appendChild(_0x55a3a7);
  _0x319e60.open();
  _0x319e60.write(_0x4e0377.documentElement.outerHTML);
  _0x319e60.close();
  _0x51e08c.onload = function () {
    _0x51e08c.contentWindow.document.querySelector("#exportShippedToday").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "exportShippedToday"
      }, _0xbd593c => {});
    });
    _0x51e08c.contentWindow.document.querySelector("#exportShippedHistory").addEventListener("click", function () {
      {
        _0x51e08c.contentWindow.document.querySelector("#dateInput") ? _0x51e08c.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x34b362 = _0x51e08c.contentWindow.document.getElementById("modalContainer");
        const _0x338fd7 = _0x51e08c.contentWindow.document.getElementById("closeModal"),
          _0xd2589f = _0x51e08c.contentWindow.document.getElementById("modal"),
          _0x259d36 = _0x51e08c.contentWindow.document.getElementById("overlay");
        _0xd2589f.style.display = "block";
        _0x259d36.style.display = "block";
        _0x34b362.style.display = "block";
        var _0x15c3be = _0x51e08c.contentWindow.document.querySelector("#dateInput");
        _0x51e08c.contentWindow.document.querySelector(".date-picker-popup") ? _0x51e08c.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
        setTimeout(() => {
          new _0x4f6e6a(_0x15c3be, _0x51e08c.contentWindow.document, _0x38f2f6);
        }, 200);
        _0x15c3be.style.display = "block";
        _0x338fd7.addEventListener("click", () => {
          _0xd2589f.style.display = "none";
          _0x259d36.style.display = "none";
          _0x34b362.style.display = "none";
        });
        _0x259d36.addEventListener("click", () => {
          _0xd2589f.style.display = "none";
          _0x259d36.style.display = "none";
          _0x34b362.style.display = "none";
        });
      }
    });
    _0x51e08c.contentWindow.document.querySelector("#exportSalesHistoryAll").addEventListener("click", function () {
      _0x51e08c.contentWindow.document.querySelector("#dateInput") ? _0x51e08c.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x8cd4ae = _0x51e08c.contentWindow.document.getElementById("modalContainer");
      const _0x48dc8c = _0x51e08c.contentWindow.document.getElementById("closeModal"),
        _0x5d2714 = _0x51e08c.contentWindow.document.getElementById("modal"),
        _0x4236c2 = _0x51e08c.contentWindow.document.getElementById("overlay");
      _0x5d2714.style.display = "block";
      _0x4236c2.style.display = "block";
      _0x8cd4ae.style.display = "block";
      var _0x3bdb66 = _0x51e08c.contentWindow.document.querySelector("#dateInput");
      try {
        _0x51e08c.contentWindow.document.querySelector(".date-picker-popup") ? _0x51e08c.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
        setTimeout(() => {
          new _0x4f6e6a(_0x3bdb66, _0x51e08c.contentWindow.document, _0x53246f, "twoMonth");
        }, 200);
        _0x3bdb66.style.display = "block";
      } catch (_0x3ae24a) {
        console.log(_0x3ae24a);
      }
      _0x48dc8c.addEventListener("click", () => {
        _0x5d2714.style.display = "none";
        _0x4236c2.style.display = "none";
        _0x8cd4ae.style.display = "none";
      });
      _0x4236c2.addEventListener("click", () => {
        _0x5d2714.style.display = "none";
        _0x4236c2.style.display = "none";
        _0x8cd4ae.style.display = "none";
      });
    });
    _0x51e08c.contentWindow.document.querySelector("#exportReturnDetail").addEventListener("click", function () {
      _0x51e08c.contentWindow.document.querySelector("#dateInput") ? _0x51e08c.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x5a899c = _0x51e08c.contentWindow.document.getElementById("modalContainer");
      const _0x374606 = _0x51e08c.contentWindow.document.getElementById("closeModal"),
        _0x3da7ad = _0x51e08c.contentWindow.document.getElementById("modal"),
        _0xece9fb = _0x51e08c.contentWindow.document.getElementById("overlay");
      _0x3da7ad.style.display = "block";
      _0xece9fb.style.display = "block";
      _0x5a899c.style.display = "block";
      var _0xf9391e = _0x51e08c.contentWindow.document.querySelector("#dateInput");
      _0x51e08c.contentWindow.document.querySelector(".date-picker-popup") ? _0x51e08c.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x4f6e6a(_0xf9391e, _0x51e08c.contentWindow.document, _0x2ba3b0);
      }, 200);
      _0xf9391e.style.display = "block";
      _0x374606.addEventListener("click", () => {
        _0x3da7ad.style.display = "none";
        _0xece9fb.style.display = "none";
        _0x5a899c.style.display = "none";
      });
      _0xece9fb.addEventListener("click", () => {
        _0x3da7ad.style.display = "none";
        _0xece9fb.style.display = "none";
        _0x5a899c.style.display = "none";
      });
    });
    _0x51e08c.contentWindow.document.querySelector("#exportConsumerAfterSalesIssues").addEventListener("click", function () {
      _0x51e08c.contentWindow.document.querySelector("#dateInput") ? _0x51e08c.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x578612 = _0x51e08c.contentWindow.document.getElementById("modalContainer");
      const _0x3553e4 = _0x51e08c.contentWindow.document.getElementById("closeModal"),
        _0x44a9f9 = _0x51e08c.contentWindow.document.getElementById("modal"),
        _0x307f92 = _0x51e08c.contentWindow.document.getElementById("overlay");
      _0x44a9f9.style.display = "block";
      _0x307f92.style.display = "block";
      _0x578612.style.display = "block";
      var _0x2cc763 = _0x51e08c.contentWindow.document.querySelector("#dateInput"),
        _0x3042eb = flatpickr(_0x2cc763, {
          "locale": "zh",
          "mode": "range",
          "dateFormat": "Y-m-d",
          "closeOnSelect": false,
          "appendTo": _0x578612,
          "maxDate": new Date(),
          "onChange": function (_0x1f07ff) {
            if (_0x1f07ff.length == 1) {
              {
                const _0x11e40d = _0x1f07ff[0],
                  _0x382d6e = new Date(_0x11e40d.getTime() + 2678400000),
                  _0x2e77c1 = new Date(_0x11e40d.getTime() - 2678400000);
                this.set("minDate", _0x2e77c1);
                _0x382d6e > new Date() ? this.set("maxDate", new Date()) : this.set("maxDate", _0x382d6e);
              }
            } else _0x1f07ff.length == 2 && (this.set("maxDate", new Date()), this.set("minDate", null));
          },
          "onReady": (_0x3cd90d, _0x13e687, _0x12ebc3) => {
            const _0x58aa2b = _0x51e08c.contentWindow.document.createElement("button");
            _0x58aa2b.textContent = "确定";
            _0x58aa2b.style.margin = "10px";
            _0x58aa2b.style.padding = "5px 10px";
            _0x58aa2b.style.backgroundColor = "#007BFF";
            _0x58aa2b.style.color = "white";
            _0x58aa2b.style.border = "none";
            _0x58aa2b.style.borderRadius = "5px";
            _0x58aa2b.style.cursor = "pointer";
            _0x58aa2b.style.fontSize = "14px";
            _0x58aa2b.style.transition = "background-color 0.3s";
            _0x58aa2b.onmouseover = () => _0x58aa2b.style.backgroundColor = "#0056b3";
            _0x58aa2b.onmouseout = () => _0x58aa2b.style.backgroundColor = "#007BFF";
            _0x58aa2b.onclick = function () {
              const _0x5711be = _0x12ebc3.selectedDates;
              if (_0x5711be.length === 2) {
                {
                  var [_0x5b23ec, _0x2eb1b2] = _0x5711be;
                  _0x5b23ec = flatpickr.formatDate(_0x5b23ec, "Y-m-d") + " 00:00:00";
                  _0x2eb1b2 = flatpickr.formatDate(_0x2eb1b2, "Y-m-d") + " 23:59:59";
                  var _0x525a67 = new Date(_0x5b23ec).getTime(),
                    _0x211481 = new Date(_0x2eb1b2).getTime();
                  _0x12ebc3.close();
                  _0x44a9f9.style.display = "none";
                  _0x307f92.style.display = "none";
                  _0x578612.style.display = "none";
                  chrome.runtime.sendMessage({
                    "type": "exportConsumerAfterSalesIssues",
                    "startDate": _0x525a67,
                    "endDate": _0x211481
                  }, _0x578f9a => {});
                }
              }
            };
            _0x12ebc3.calendarContainer.appendChild(_0x58aa2b);
          }
        });
      _0x51e08c.contentWindow.document.querySelector(".date-picker-popup") ? _0x51e08c.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x4f6e6a(_0x2cc763, _0x51e08c.contentWindow.document, _0x460cff, "oneMonth");
      }, 200);
      _0x2cc763.style.display = "block";
      _0x3553e4.addEventListener("click", () => {
        _0x44a9f9.style.display = "none";
        _0x307f92.style.display = "none";
        _0x578612.style.display = "none";
      });
      _0x307f92.addEventListener("click", () => {
        _0x44a9f9.style.display = "none";
        _0x307f92.style.display = "none";
        _0x578612.style.display = "none";
      });
    });
  };
}
function _0x7f8980(_0x3814e7) {
  const _0x6a931d = _0x3814e7.contentWindow.document,
    _0x44fd3d = document.implementation.createHTMLDocument("爆单控制台"),
    _0x2dc6c2 = _0x44fd3d.createElement("head"),
    _0x294e3b = _0x44fd3d.createElement("meta");
  _0x294e3b.setAttribute("charset", "UTF-8");
  _0x2dc6c2.appendChild(_0x294e3b);
  const _0x6f0a20 = _0x44fd3d.createElement("meta");
  _0x6f0a20.setAttribute("name", "viewport");
  _0x6f0a20.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x2dc6c2.appendChild(_0x6f0a20);
  const _0xfe467d = _0x44fd3d.createElement("title");
  _0xfe467d.textContent = "电商控制台";
  _0x2dc6c2.appendChild(_0xfe467d);
  const _0x75ec7b = _0x44fd3d.createElement("link");
  _0x75ec7b.setAttribute("rel", "stylesheet");
  _0x75ec7b.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x2dc6c2.appendChild(_0x75ec7b);
  _0x44fd3d.documentElement.appendChild(_0x2dc6c2);
  const _0x4250c3 = _0x44fd3d.createElement("body"),
    _0x165edc = _0x44fd3d.createElement("div");
  _0x165edc.classList.add("content");
  const _0x3d9520 = [{
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
  _0x3d9520.forEach(_0x1dff06 => {
    {
      const _0x5a5de0 = _0x44fd3d.createElement("div");
      _0x5a5de0.classList.add("card");
      _0x5a5de0.innerHTML = "\n            <h2>" + _0x1dff06.title + "</h2>\n            <p>" + _0x1dff06.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x1dff06.id + "\">使用功能</a>\n        ";
      _0x165edc.appendChild(_0x5a5de0);
    }
  });
  _0x4250c3.appendChild(_0x165edc);
  _0x44fd3d.documentElement.appendChild(_0x4250c3);
  _0x6a931d.open();
  _0x6a931d.write(_0x44fd3d.documentElement.outerHTML);
  _0x6a931d.close();
  _0x3814e7.onload = function () {
    _0x3814e7.contentWindow.document.querySelector("#addSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "baodanBoxaddSite"
      }, _0x45cad1 => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#addPhotoSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "addPhotoSite"
      }, _0x1f8c1f => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#cancelAllStockList").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "cancelAllStockList"
      }, _0x11b86a => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#applyPriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "applyPriceSync"
      }, _0x1456a8 => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#urgePriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "urgePriceSync"
      }, _0x45addb => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#refusePriceSyncAll").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncAll"
      }, _0x1bb688 => {});
    });
    _0x3814e7.contentWindow.document.querySelector("#refusePriceSyncDaily").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncDaily"
      }, _0x1ebdb8 => {});
    });
  };
}
class _0x4f6e6a {
  constructor(_0x1ab995, _0x591337 = document, _0x4fd0ec = () => {}, _0x338e5a = "now") {
    this.inputElement = _0x1ab995;
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.currentDate = new Date();
    this.displayedMonth = this.currentDate.getMonth();
    this.displayedYear = this.currentDate.getFullYear();
    this.today = new Date();
    this.datePopup = null;
    this.isSelectingStartDate = true;
    this.document = _0x591337;
    this.backFunction = _0x4fd0ec;
    this.model = _0x338e5a;
    this.inputElement.addEventListener("click", this.togglePopup.bind(this));
    this.document.addEventListener("click", this.closePopup.bind(this));
    this.createDatePopup();
    this.addStyles();
  }
  ["addStyles"]() {
    const _0x16ede7 = {
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
      _0x2de120 = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "12px"
      },
      _0x837622 = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "8px"
      },
      _0x2a72cc = {
        "backgroundColor": "#ffffff00",
        "color": "#141e26",
        "border": "none",
        "padding": "6px 10px",
        "fontSize": "28px",
        "cursor": "pointer",
        "borderRadius": "6px",
        "transition": "all 0.3s ease-in-out"
      },
      _0x4894d2 = {
        "fontSize": "14px",
        "padding": "6px",
        "border": "1px solid rgb(162, 175, 185)",
        "borderRadius": "6px",
        "backgroundColor": "#fff",
        "color": "#333",
        "cursor": "pointer",
        "transition": "border-color 0.3s ease, background-color 0.3s ease"
      },
      _0x58354a = {
        "display": "grid",
        "gridTemplateColumns": "repeat(7, 1fr)",
        "gap": "6px"
      };
    this.applyStyleToElement(this.datePopup, _0x16ede7);
    const _0x4c5614 = this.datePopup.querySelector(".header");
    this.applyStyleToElement(_0x4c5614, _0x2de120);
    const _0x2db96f = this.datePopup.querySelector(".month-year-select");
    this.applyStyleToElement(_0x2db96f, _0x837622);
    const _0x26ed18 = _0x2db96f.querySelectorAll("button");
    _0x26ed18.forEach(_0x21933e => this.applyStyleToElement(_0x21933e, _0x2a72cc));
    const _0x318880 = _0x2db96f.querySelectorAll("select");
    _0x318880.forEach(_0x5d24ea => this.applyStyleToElement(_0x5d24ea, _0x4894d2));
    const _0x2bc85b = this.datePopup.querySelector(".calendar");
    this.applyStyleToElement(_0x2bc85b, _0x58354a);
  }
  ["applyStyleToElement"](_0x1c94d3, _0x3f4caa) {
    for (const _0x3cce0d in _0x3f4caa) {
      if (_0x3f4caa.hasOwnProperty(_0x3cce0d)) {
        _0x1c94d3.style[_0x3cce0d] = _0x3f4caa[_0x3cce0d];
      }
    }
  }
  ["createDatePopup"]() {
    if (this.datePopup) return;
    const _0x2b638d = this.document.createElement("div");
    _0x2b638d.classList.add("date-picker-popup");
    const _0x565cb3 = this.document.createElement("div");
    _0x565cb3.classList.add("header");
    const _0x1895cf = this.createMonthYearSelect();
    _0x565cb3.appendChild(_0x1895cf);
    const _0x3fcbd3 = this.document.createElement("div");
    _0x3fcbd3.classList.add("calendar");
    _0x2b638d.appendChild(_0x565cb3);
    _0x2b638d.appendChild(_0x3fcbd3);
    this.document.body.appendChild(_0x2b638d);
    this.datePopup = _0x2b638d;
    this.updateCalendar();
    const _0x3c13fa = this.inputElement.getBoundingClientRect();
    _0x2b638d.style.position = "absolute";
    _0x2b638d.style.top = _0x3c13fa.bottom + window.scrollY + "px";
    _0x2b638d.style.left = _0x3c13fa.left + window.scrollX + "px";
  }
  ["createMonthYearSelect"]() {
    const _0x2da2f6 = this.document.createElement("div");
    _0x2da2f6.classList.add("month-year-select");
    const _0x15b470 = this.document.createElement("button");
    _0x15b470.id = "prev-month-btn";
    _0x15b470.innerText = "<";
    _0x15b470.addEventListener("click", this.changeMonth.bind(this, -1));
    _0x2da2f6.appendChild(_0x15b470);
    const _0x4af98c = this.document.createElement("select");
    _0x4af98c.id = "month-select";
    for (let _0x304e25 = 0; _0x304e25 < 12; _0x304e25++) {
      const _0x289b7e = this.document.createElement("option");
      _0x289b7e.value = _0x304e25;
      _0x289b7e.innerText = this.getMonthName(_0x304e25);
      if (_0x304e25 === this.displayedMonth) _0x289b7e.selected = true;
      _0x4af98c.appendChild(_0x289b7e);
    }
    _0x4af98c.addEventListener("change", _0x13df5b => this.changeMonth(parseInt(_0x13df5b.target.value) - this.displayedMonth));
    _0x2da2f6.appendChild(_0x4af98c);
    const _0x3375a8 = this.document.createElement("select");
    _0x3375a8.id = "year-select";
    const _0x5d0862 = this.today.getFullYear();
    for (let _0x179f85 = _0x5d0862 - 10; _0x179f85 <= _0x5d0862; _0x179f85++) {
      const _0x2e5c08 = this.document.createElement("option");
      _0x2e5c08.value = _0x179f85;
      _0x2e5c08.innerText = _0x179f85;
      if (_0x179f85 === this.displayedYear) _0x2e5c08.selected = true;
      _0x3375a8.appendChild(_0x2e5c08);
    }
    _0x3375a8.addEventListener("change", _0x577d69 => this.changeYear(parseInt(_0x577d69.target.value)));
    _0x2da2f6.appendChild(_0x3375a8);
    const _0x3eda92 = this.document.createElement("button");
    _0x3eda92.id = "next-month-btn";
    _0x3eda92.innerText = ">";
    _0x3eda92.addEventListener("click", this.changeMonth.bind(this, 1));
    _0x2da2f6.appendChild(_0x3eda92);
    const _0x3d3bf1 = this.document.createElement("button");
    _0x3d3bf1.id = "dateOK-btn";
    _0x3d3bf1.innerText = "确认";
    _0x3d3bf1.addEventListener("click", this.backFunction.bind(this, this));
    _0x2da2f6.appendChild(_0x3d3bf1);
    return _0x2da2f6;
  }
  ["getMonthName"](_0x34148b) {
    const _0x1483ec = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return _0x1483ec[_0x34148b];
  }
  ["isTodayOrAfter"](_0x5f4381) {
    const _0x163dbf = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),
      _0x56585c = new Date(_0x5f4381.getFullYear(), _0x5f4381.getMonth(), _0x5f4381.getDate());
    return _0x56585c >= _0x163dbf;
  }
  ["updateCalendar"]() {
    if (!this.datePopup) return;
    const _0x251ec7 = this.datePopup.querySelector(".calendar");
    if (!_0x251ec7) return;
    _0x251ec7.innerHTML = "";
    const _0x1ea685 = new Date(this.displayedYear, this.displayedMonth, 1),
      _0x4ead20 = new Date(this.displayedYear, this.displayedMonth + 1, 0),
      _0x466d2b = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    _0x466d2b.forEach(_0x382a63 => {
      const _0x217634 = document.createElement("button");
      _0x217634.innerText = _0x382a63;
      _0x217634.classList.add("weekdays");
      _0x217634.style.border = "none";
      _0x217634.style.padding = "10px";
      _0x217634.style.transition = "all 0.3s ease";
      _0x217634.style.textAlign = "center";
      _0x217634.style.fontSize = "14px";
      _0x217634.style.fontWeight = "bold";
      _0x217634.style.color = "#333";
      _0x217634.disabled = true;
      _0x217634.style.backgroundColor = "#ffffff00";
      _0x217634.style.cursor = "not-allowed";
      _0x251ec7.appendChild(_0x217634);
    });
    const _0x4eb215 = _0x1ea685.getDay();
    for (let _0x13a9c9 = 0; _0x13a9c9 < _0x4eb215; _0x13a9c9++) {
      {
        const _0x410658 = document.createElement("button");
        _0x410658.classList.add("empty");
        _0x410658.style.border = "none";
        _0x410658.style.padding = "10px";
        _0x410658.style.transition = "all 0.3s ease";
        _0x410658.style.textAlign = "center";
        _0x410658.style.fontSize = "14px";
        _0x410658.style.fontWeight = "bold";
        _0x410658.style.color = "#333";
        _0x410658.style.backgroundColor = "#ffffff00";
        _0x410658.style.cursor = "not-allowed";
        _0x251ec7.appendChild(_0x410658);
      }
    }
    const _0x41ae4b = _0x4ead20.getDate();
    for (let _0x5b40df = 1; _0x5b40df <= _0x41ae4b; _0x5b40df++) {
      {
        const _0x14bb32 = document.createElement("button");
        _0x14bb32.innerText = _0x5b40df;
        _0x14bb32.classList.add("bt-d");
        _0x14bb32.style.border = "none";
        _0x14bb32.style.padding = "10px";
        _0x14bb32.style.transition = "all 0.3s ease";
        _0x14bb32.style.textAlign = "center";
        _0x14bb32.style.fontSize = "14px";
        _0x14bb32.style.fontWeight = "bold";
        _0x14bb32.style.color = "#333";
        _0x14bb32.style.backgroundColor = "#ffffff00";
        _0x14bb32.style.cursor = "pointer";
        const _0x319fd3 = new Date(this.displayedYear, this.displayedMonth, _0x5b40df);
        if (this.model == "twoMonth") (this.isTodayOrAfter(_0x319fd3) || new Date(_0x319fd3) < new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getMonth() - 2))) && (_0x14bb32.disabled = true, _0x14bb32.style.color = "#b7b7b7", _0x14bb32.style.cursor = "not-allowed");else {
          this.isTodayOrAfter(_0x319fd3) && (_0x14bb32.disabled = true, _0x14bb32.style.color = "#b7b7b7", _0x14bb32.style.cursor = "not-allowed");
        }
        this.selectedStartDate && this.selectedStartDate.getDate() === _0x5b40df && this.selectedStartDate.getMonth() === this.displayedMonth && this.selectedStartDate.getFullYear() === this.displayedYear && (_0x14bb32.classList.add("range-start"), _0x14bb32.style.backgroundColor = "rgb(86, 159, 247)", _0x14bb32.style.color = "#ffffff", _0x14bb32.style.fontWeight = "bold", _0x14bb32.style.borderRadius = "50px 0px 0px 50px");
        this.selectedEndDate && this.selectedEndDate.getDate() === _0x5b40df && this.selectedEndDate.getMonth() === this.displayedMonth && this.selectedEndDate.getFullYear() === this.displayedYear && (_0x14bb32.classList.add("range-end"), _0x14bb32.style.backgroundColor = "rgb(86, 159, 247)", _0x14bb32.style.color = "#ffffff", _0x14bb32.style.fontWeight = "bold", this.selectedStartDate.toLocaleDateString() == this.selectedEndDate.toLocaleDateString() ? _0x14bb32.style.borderRadius = "50px 50px 50px 50px" : _0x14bb32.style.borderRadius = "0px 50px 50px 0px");
        this.selectedStartDate && this.selectedEndDate && this.selectedStartDate < _0x319fd3 && _0x319fd3 < this.selectedEndDate && (_0x14bb32.classList.add("range-between"), _0x14bb32.style.backgroundColor = "hsl(205deg, 20%, 94%)", _0x14bb32.style.color = "#000000", _0x14bb32.style.borderRadius = "8px");
        _0x14bb32.addEventListener("click", this.selectDate.bind(this, _0x5b40df));
        _0x251ec7.appendChild(_0x14bb32);
      }
    }
  }
  ["isToday"](_0x11eb24) {
    return _0x11eb24.getDate() === this.today.getDate() && _0x11eb24.getMonth() === this.today.getMonth() && _0x11eb24.getFullYear() === this.today.getFullYear();
  }
  ["changeMonth"](_0xe32fe3) {
    const _0xd7994c = new Date(),
      _0x47292d = _0xd7994c.getFullYear(),
      _0x11fa15 = _0xd7994c.getMonth(),
      _0x4df4c3 = this.datePopup.querySelector("#prev-month-btn"),
      _0x483dc7 = this.datePopup.querySelector("#next-month-btn");
    this.displayedMonth += _0xe32fe3;
    if (this.displayedMonth < 0) this.displayedMonth = 11, this.displayedYear -= 1;else this.displayedMonth > 11 && (this.displayedMonth = 0, this.displayedYear += 1);
    (this.displayedYear > _0x47292d || this.displayedYear === _0x47292d && this.displayedMonth > _0x11fa15) && (this.displayedYear = _0x47292d, this.displayedMonth = _0x11fa15);
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x7871a5 = this.datePopup.querySelector("#month-select"),
      _0x5028f6 = this.datePopup.querySelector("#year-select");
    if (_0x7871a5) {
      _0x7871a5.value = this.displayedMonth;
    }
    if (_0x5028f6) {
      _0x5028f6.value = this.displayedYear;
    }
    _0x4df4c3 && _0x483dc7 && (this.displayedYear === _0x47292d && this.displayedMonth === _0x11fa15 ? (_0x483dc7.disabled = true, _0x483dc7.style.opacity = 0.5, _0x483dc7.style.cursor = "not-allowed") : (_0x483dc7.disabled = false, _0x483dc7.style.opacity = 1, _0x483dc7.style.cursor = "pointer"), _0x4df4c3.disabled = false);
  }
  ["changeYear"](_0x3317c3) {
    const _0x52d3e6 = new Date(),
      _0x143b40 = _0x52d3e6.getFullYear(),
      _0x19c5d9 = _0x52d3e6.getMonth();
    _0x3317c3 > _0x143b40 ? this.displayedYear = _0x143b40 : this.displayedYear = _0x3317c3;
    this.displayedYear === _0x143b40 && this.displayedMonth > _0x19c5d9 && (this.displayedMonth = _0x19c5d9);
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x2f4fcf = this.datePopup.querySelector("#month-select"),
      _0x54e74b = this.datePopup.querySelector("#year-select");
    _0x2f4fcf && (_0x2f4fcf.value = this.displayedMonth);
    _0x54e74b && (_0x54e74b.value = this.displayedYear);
    const _0x502af3 = this.datePopup.querySelector("#prev-month-btn"),
      _0x1eeb75 = this.datePopup.querySelector("#next-month-btn");
    _0x502af3 && _0x1eeb75 && (this.displayedYear === _0x143b40 && _0x19c5d9 === this.displayedMonth ? (_0x1eeb75.disabled = true, _0x1eeb75.style.opacity = 0.5, _0x1eeb75.style.cursor = "not-allowed") : (_0x1eeb75.disabled = false, _0x1eeb75.style.opacity = 1, _0x1eeb75.style.cursor = "pointer"));
  }
  ["updateMonthYearLabel"]() {
    if (!this.datePopup) return;
    const _0x5c5a08 = this.datePopup.querySelector(".month-year-select span");
    if (!_0x5c5a08) return;
    _0x5c5a08.innerText = this.getMonthName(this.displayedMonth) + " " + this.displayedYear;
  }
  ["togglePopup"](_0x51462a) {
    _0x51462a.stopPropagation();
    if (!this.datePopup) return;
    if (this.datePopup.style.display === "none" || !this.datePopup.style.display) {
      {
        const _0x4f2738 = this.inputElement.getBoundingClientRect();
        this.datePopup.style.position = "absolute";
        this.datePopup.style.top = _0x4f2738.bottom + window.scrollY + "px";
        this.datePopup.style.left = _0x4f2738.left + window.scrollX + "px";
        this.datePopup.style.display = "block";
      }
    } else this.datePopup.style.display = "none";
  }
  ["closePopup"](_0x321688) {
    !this.datePopup.contains(_0x321688.target) && !this.inputElement.contains(_0x321688.target) && !_0x321688.target.classList.contains("bt-d") && (this.datePopup.style.display = "none");
  }
  ["selectDate"](_0x155e17) {
    if (this.model == "oneMonth") {
      const _0x5a313a = new Date(this.displayedYear, this.displayedMonth, _0x155e17),
        _0x35f1f6 = new Date(this.displayedYear, this.displayedMonth, 1),
        _0x1d4fbd = new Date(this.displayedYear, this.displayedMonth + 1, 0);
      if (_0x5a313a < _0x35f1f6 || _0x5a313a > _0x1d4fbd) {
        return;
      }
      if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0x5a313a, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
        this.selectedEndDate = _0x5a313a;
        this.isSelectingStartDate = true;
        if (this.selectedStartDate > this.selectedEndDate) {
          {
            const _0x2aa101 = this.selectedStartDate;
            this.selectedStartDate = this.selectedEndDate;
            this.selectedEndDate = _0x2aa101;
          }
        }
        const _0x117961 = this.selectedStartDate.getMonth(),
          _0x5cedf0 = this.selectedEndDate.getMonth();
        _0x117961 !== _0x5cedf0 && (this.selectedStartDate = _0x5a313a, this.selectedEndDate = null);
      }
      this.selectedStartDate && (this.selectedStartDate.getMonth() !== this.displayedMonth || this.selectedStartDate.getFullYear() !== this.displayedYear) && (this.selectedStartDate = null);
      this.selectedEndDate && (this.selectedEndDate.getMonth() !== this.displayedMonth || this.selectedEndDate.getFullYear() !== this.displayedYear) && (this.selectedEndDate = null);
      this.updateCalendar();
      this.updateInputField();
    } else {
      {
        const _0x44e26e = new Date(this.displayedYear, this.displayedMonth, _0x155e17);
        if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0x44e26e, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
          this.selectedEndDate = _0x44e26e;
          this.isSelectingStartDate = true;
          if (this.selectedStartDate > this.selectedEndDate) {
            const _0x1c127b = this.selectedStartDate;
            this.selectedStartDate = this.selectedEndDate;
            this.selectedEndDate = _0x1c127b;
          }
        }
        this.updateCalendar();
        this.updateInputField();
      }
    }
  }
  ["updateInputField"]() {
    if (this.selectedStartDate && this.selectedEndDate) {
      {
        const _0x9adce6 = {
            "timeZone": "Asia/Shanghai",
            "year": "numeric",
            "month": "2-digit",
            "day": "2-digit"
          },
          _0x65c139 = this.selectedStartDate.toLocaleDateString("zh-CN", _0x9adce6).replace(/\//g, "-"),
          _0x12f40a = this.selectedEndDate.toLocaleDateString("zh-CN", _0x9adce6).replace(/\//g, "-");
        this.inputElement.value = _0x65c139 + " ~ " + _0x12f40a;
      }
    }
  }
}
function _0x53246f(_0x711ad1) {
  const _0x31d80e = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x2b09a7 = _0x711ad1.selectedStartDate ? _0x711ad1.selectedStartDate.toLocaleDateString("zh-CN", _0x31d80e).replace(/\//g, "-") : "",
    _0x40ed3c = _0x711ad1.selectedEndDate ? _0x711ad1.selectedEndDate.toLocaleDateString("zh-CN", _0x31d80e).replace(/\//g, "-") : "";
  _0x2b09a7 && _0x40ed3c && (_0x711ad1.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportSalesHistoryAll",
    "startDate": _0x2b09a7,
    "endDate": _0x40ed3c
  }, _0x4cbe69 => {}));
}
function _0x38f2f6(_0x4cfdf0) {
  const _0x19bb27 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x5af880 = _0x4cfdf0.selectedStartDate ? _0x4cfdf0.selectedStartDate.toLocaleDateString("zh-CN", _0x19bb27).replace(/\//g, "-") + " 00:00:00" : "",
    _0x287f7a = _0x4cfdf0.selectedEndDate ? _0x4cfdf0.selectedEndDate.toLocaleDateString("zh-CN", _0x19bb27).replace(/\//g, "-") + " 23:59:59" : "";
  _0x5af880 && _0x287f7a && (_0x4cfdf0.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportShippedHistory",
    "startDate": _0x5af880,
    "endDate": _0x287f7a
  }, _0x50dccf => {}));
}
function _0x2ba3b0(_0x72ffcb) {
  const _0x2386c9 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x4f5775 = _0x72ffcb.selectedStartDate ? _0x72ffcb.selectedStartDate.toLocaleDateString("zh-CN", _0x2386c9).replace(/\//g, "-") + " 00:00:00" : "",
    _0x432c9a = _0x72ffcb.selectedEndDate ? _0x72ffcb.selectedEndDate.toLocaleDateString("zh-CN", _0x2386c9).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x3ae8bf = new Date(_0x4f5775).getTime(),
    _0x183ae4 = new Date(_0x432c9a).getTime();
  _0x4f5775 && _0x432c9a && (_0x72ffcb.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportReturnDetail",
    "startDate": _0x3ae8bf,
    "endDate": _0x183ae4
  }, _0x41d49f => {}));
}
function _0x460cff(_0x5437e3) {
  const _0x424829 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x15d9cd = _0x5437e3.selectedStartDate ? _0x5437e3.selectedStartDate.toLocaleDateString("zh-CN", _0x424829).replace(/\//g, "-") + " 00:00:00" : "",
    _0x1a5156 = _0x5437e3.selectedEndDate ? _0x5437e3.selectedEndDate.toLocaleDateString("zh-CN", _0x424829).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x42f305 = new Date(_0x15d9cd).getTime(),
    _0xe8ec49 = new Date(_0x1a5156).getTime();
  _0x15d9cd && _0x1a5156 && (_0x5437e3.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportConsumerAfterSalesIssues",
    "startDate": _0x42f305,
    "endDate": _0xe8ec49
  }, _0x45072e => {}));
}
try {
  fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x1f9b08 => _0x1f9b08.arrayBuffer()).then(_0x449031 => {
    crypto.subtle.digest("SHA-256", _0x449031).then(_0x51d960 => {
      const _0xe5391d = Array.from(new Uint8Array(_0x51d960)),
        _0x4521c7 = _0xe5391d.map(_0xeda3b4 => _0xeda3b4.toString(16).padStart(2, "0")).join("");
      _0x4521c7 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
        "codePhone": ["", ""]
      });
    });
  });
} catch (_0x5841a4) {}
try {
  fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x4a4dc3 => _0x4a4dc3.arrayBuffer()).then(_0x33476b => {
    crypto.subtle.digest("SHA-256", _0x33476b).then(_0x5ccd8a => {
      const _0x1b4c77 = Array.from(new Uint8Array(_0x5ccd8a)),
        _0x59210b = _0x1b4c77.map(_0x49d038 => _0x49d038.toString(16).padStart(2, "0")).join("");
      _0x59210b == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : !function () {
        chrome.storage.local.set({
          "codePhone": ["", ""]
        });
        window.close();
      }();
    });
  });
} catch (_0x245a8d) {}
try {
  fetch(chrome.runtime.getURL("web/img/logo.png")).then(_0x101760 => _0x101760.arrayBuffer()).then(_0x4a7296 => {
    crypto.subtle.digest("SHA-256", _0x4a7296).then(_0x2bcc50 => {
      {
        const _0x336cc0 = Array.from(new Uint8Array(_0x2bcc50)),
          _0x50d547 = _0x336cc0.map(_0x254b36 => _0x254b36.toString(16).padStart(2, "0")).join("");
        _0x50d547 == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage.local.set({
          "codePhone": ["", ""]
        });
      }
    });
  });
} catch (_0x5bc5d5) {}