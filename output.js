//Thu Mar 20 2025 13:50:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
async function _0x8ac2e3() {
  await _0x2e207d("[class*=\"elli_outerWrapper\"]", "");
  var _0x42fa9a = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
    _0x38727b = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    };
  try {
    var _0x4143c8 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
        "method": "POST",
        "headers": _0x38727b,
        "body": {},
        "credentials": "include"
      }),
      _0x13db2c = await _0x4143c8.json(),
      _0x51090a = _0x13db2c.result.companyList[0].malInfoList.find(function (_0x50c807) {
        return _0x42fa9a === _0x50c807.mallName;
      });
    if (_0x51090a) return _0x51090a.mallId;else {
      return null;
    }
  } catch (_0x34e7d4) {
    throw _0x34e7d4;
  }
}
async function _0x2e207d(_0x485bed, _0x281046) {
  let _0x1a8b3c = 0;
  const _0x705207 = 30000;
  while (_0x1a8b3c < _0x705207) {
    let _0x4a5d95 = document.querySelector(_0x485bed);
    if (_0x4a5d95 && _0x4a5d95.textContent.includes(_0x281046)) return;
    await new Promise(_0x195b97 => setTimeout(_0x195b97, 1000));
    _0x1a8b3c += 1000;
  }
}
function _0xfffeb8(_0x24011f) {
  if (_0x24011f.includes("www.temu.com")) return 0;
  history.pushState({
    "page": 1
  }, "title 1", _0x24011f);
  history.back();
}
chrome.storage.local.get("codePhone", function (_0x406992) {
  const _0x1416e2 = _0x406992.codePhone;
  _0x1416e2 && window.location.href.includes("https://seller.kuajingmaihuo.com") && _0x8ac2e3().then(_0x40d99d => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x1416e2,
      "mallid": _0x40d99d,
      "model": "全局",
      "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
    }, _0x40c98e => {
      _0x40c98e.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x5bfb77) {
        window.location.href.includes("https://seller.kuajingmaihuo.com") && (fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x44c4a0 => _0x44c4a0.arrayBuffer()).then(_0x2749d5 => {
          crypto.subtle.digest("SHA-256", _0x2749d5).then(_0xd04119 => {
            const _0x25b07d = Array.from(new Uint8Array(_0xd04119)),
              _0x447d01 = _0x25b07d.map(_0x2fc0fa => _0x2fc0fa.toString(16).padStart(2, "0")).join("");
            _0x447d01 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
              "codePhone": ["", ""]
            });
          });
        }), !function () {
          if (!document.getElementById("new-console-button")) {
            const _0x287470 = document.createElement("div");
            _0x287470.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
            _0x287470.style.fontFamily = "auto";
            _0x287470.style.fontSize = "18px";
            _0x287470.style.fontWeight = "600";
            _0x287470.style.color = "#fff";
            _0x287470.style.textAlign = "center";
            _0x287470.style.marginTop = "10px";
            _0x287470.style.marginBottom = "8px";
            _0x287470.style.cursor = "pointer";
            _0x287470.style.whiteSpace = "nowrap";
            _0x287470.style.padding = "1px";
            _0x287470.style.border = "none";
            _0x287470.style.transition = "all 0.3s ease";
            _0x287470.style.display = "flex";
            _0x287470.style.alignItems = "center";
            _0x287470.style.justifyContent = "center";
            _0x287470.style.gap = "8px";
            _0x287470.id = "new-console-button";
            const _0x1ecfe7 = document.createElement("img");
            _0x1ecfe7.src = chrome.runtime.getURL("web/img/control.png");
            _0x1ecfe7.style.width = "45px";
            _0x1ecfe7.style.height = "45px";
            _0x1ecfe7.style.objectFit = "contain";
            _0x287470.appendChild(_0x1ecfe7);
            const _0x2fe921 = document.createTextNode("咕噜噜插件控制台");
            _0x287470.appendChild(_0x2fe921);
            function _0xaa3714() {
              setTimeout(() => {
                const _0x28d896 = _0x4c4297 ? _0x4c4297.offsetWidth : 0;
                _0x28d896 < 200 ? _0x2fe921.textContent = "" : _0x2fe921.textContent = "咕噜噜插件控制台";
              }, 150);
            }
            var _0x4c4297 = document.querySelector("[class*=\"index-module__sidebarBox\"][class*=\"bg-shell-theme-mms-sidebarBox\"]");
            if (_0x4c4297) {
              const _0x13785e = new ResizeObserver(() => {
                _0xaa3714();
              });
              _0x13785e.observe(_0x4c4297);
              _0xaa3714();
              _0x4c4297.appendChild(_0x287470);
            }
            _0x287470.addEventListener("click", () => {
              var _0x1216e4 = document.getElementById("page-container-box"),
                _0x1b7eed = document.getElementById("overlay-box");
              if (_0x1216e4) setTimeout(() => {
                _0x1216e4.style.transform = "translateY(0)";
                _0x1b7eed.style.display = "block";
              }, 100);else {
                const _0x381acd = document.createElement("div");
                _0x381acd.style.position = "fixed";
                _0x381acd.style.top = "0";
                _0x381acd.style.left = "0";
                _0x381acd.style.right = "0";
                _0x381acd.style.bottom = "0";
                _0x381acd.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                _0x381acd.style.zIndex = "999";
                _0x381acd.style.display = "none";
                _0x381acd.id = "overlay-box";
                const _0x2a2e7d = document.createElement("div");
                _0x2a2e7d.style.position = "fixed";
                _0x2a2e7d.style.left = "0";
                _0x2a2e7d.style.right = "0";
                _0x2a2e7d.style.bottom = "0";
                _0x2a2e7d.style.top = "35px";
                _0x2a2e7d.style.backgroundColor = "white";
                _0x2a2e7d.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
                _0x2a2e7d.style.transition = "transform 0.3s ease-in-out";
                _0x2a2e7d.style.transform = "translateY(100%)";
                _0x2a2e7d.style.zIndex = "1000";
                _0x2a2e7d.style.fontFamily = "auto";
                _0x2a2e7d.id = "page-container-box";
                const _0x273cdb = document.createElement("div");
                _0x273cdb.innerHTML = "&times;";
                _0x273cdb.style.position = "absolute";
                _0x273cdb.style.top = "10px";
                _0x273cdb.style.right = "30px";
                _0x273cdb.style.fontSize = "28px";
                _0x273cdb.style.cursor = "pointer";
                _0x273cdb.style.color = "#333";
                _0x273cdb.addEventListener("click", () => {
                  _0x2a2e7d.style.transform = "translateY(100%)";
                  _0x381acd.style.display = "none";
                });
                _0x2a2e7d.appendChild(_0x273cdb);
                const _0x5b32a1 = document.createElement("div");
                _0x5b32a1.style.display = "flex";
                _0x5b32a1.style.alignItems = "center";
                const _0x594fba = document.createElement("span");
                _0x594fba.id = "guluPluginConsole";
                _0x594fba.textContent = "咕噜噜插件控制台";
                _0x594fba.style.fontSize = "18px";
                _0x594fba.style.fontWeight = "bold";
                _0x594fba.style.margin = "15px 10px 8px 45px";
                const _0x39d928 = document.createElement("button");
                _0x39d928.id = "guluBackendCenter";
                _0x39d928.textContent = "前往咕噜噜后台中心";
                _0x39d928.style.fontSize = "16px";
                _0x39d928.style.backgroundColor = "#ff7f50";
                _0x39d928.style.color = "white";
                _0x39d928.style.border = "none";
                _0x39d928.style.borderRadius = "4px";
                _0x39d928.style.cursor = "pointer";
                _0x39d928.style.height = "28px";
                _0x39d928.style.margin = "17px 0px 8px 0px";
                _0x5b32a1.appendChild(_0x594fba);
                _0x5b32a1.appendChild(_0x39d928);
                _0x39d928.addEventListener("click", () => {
                  chrome.runtime.sendMessage({
                    "action": "open_static_page"
                  });
                });
                _0x2a2e7d.appendChild(_0x5b32a1);
                const _0x2e2190 = document.createElement("hr");
                _0x2e2190.style.border = "none";
                _0x2e2190.style.borderTop = "1px solid #dddddd7d";
                _0x2e2190.style.margin = "10px 0";
                _0x2a2e7d.appendChild(_0x2e2190);
                const _0x4bada1 = ["功能面板", "便捷访问", "快速核价助手", "数据导出工具箱", "一键爆单工具箱", "功能说明书"],
                  _0x1f5bc6 = document.createElement("div");
                _0x1f5bc6.style.display = "flex";
                _0x1f5bc6.style.justifyContent = "flex-start";
                _0x1f5bc6.style.padding = "0";
                _0x1f5bc6.style.margin = "0";
                _0x1f5bc6.style.borderBottom = "1px solid rgba(221, 221, 221, 0.49)";
                const _0x4b3554 = document.createElement("div");
                _0x4b3554.style.position = "absolute";
                _0x4b3554.style.height = "2px";
                _0x4b3554.style.backgroundColor = "#fb7701";
                _0x4b3554.style.bottom = "0";
                _0x4b3554.style.width = "0";
                _0x4b3554.style.left = "0";
                _0x4bada1.forEach((_0x211604, _0x20e71d) => {
                  const _0xbce3f2 = document.createElement("div");
                  _0xbce3f2.style.fontSize = "14px";
                  _0xbce3f2.style.padding = "10px 15px";
                  _0xbce3f2.style.cursor = "pointer";
                  _0xbce3f2.style.transition = "background-color 0.3s";
                  _0xbce3f2.style.flexShrink = "0";
                  const _0x3885db = document.createElement("span");
                  _0x3885db.textContent = _0x211604;
                  _0xbce3f2.appendChild(_0x3885db);
                  _0xbce3f2.style.color = "#333";
                  _0xbce3f2.addEventListener("mouseenter", () => {
                    _0xbce3f2.style.backgroundColor = "#f0f0f0";
                  });
                  _0xbce3f2.addEventListener("mouseleave", () => {
                    _0xbce3f2.style.backgroundColor = "transparent";
                  });
                  _0xbce3f2.addEventListener("click", () => {
                    {
                      _0x1f5bc6.querySelectorAll("div").forEach(_0x3f1e54 => {
                        _0x3f1e54.style.color = "#333";
                      });
                      _0xbce3f2.style.color = "#fb7701";
                      const _0x8d6b1f = _0x3885db.getBoundingClientRect().width;
                      _0x4b3554.style.width = _0x8d6b1f + "px";
                      _0x4b3554.style.left = _0xbce3f2.offsetLeft + (_0xbce3f2.offsetWidth - _0x8d6b1f) / 2 + "px";
                      _0x53d983(_0x20e71d);
                    }
                  });
                  _0x1f5bc6.appendChild(_0xbce3f2);
                });
                _0x1f5bc6.style.position = "relative";
                _0x1f5bc6.appendChild(_0x4b3554);
                _0x2a2e7d.appendChild(_0x1f5bc6);
                document.body.appendChild(_0x2a2e7d);
                document.body.appendChild(_0x381acd);
                _0x381acd.addEventListener("click", () => {
                  _0x2a2e7d.style.transform = "translateY(100%)";
                  _0x381acd.style.display = "none";
                });
                setTimeout(() => {
                  _0x2a2e7d.style.transform = "translateY(0)";
                  _0x381acd.style.display = "block";
                }, 100);
                const _0x5d4e9a = _0x1f5bc6.querySelector("div");
                if (_0x5d4e9a) {
                  {
                    _0x5d4e9a.style.color = "#fb7701";
                    const _0x348035 = _0x5d4e9a.querySelector("span"),
                      _0x58b901 = _0x348035.getBoundingClientRect().width;
                    _0x4b3554.style.width = _0x58b901 + "px";
                    _0x4b3554.style.left = _0x5d4e9a.offsetLeft + (_0x5d4e9a.offsetWidth - _0x58b901) / 2 + "px";
                    _0x53d983(0);
                  }
                }
                function _0x53d983(_0x3cde8a) {
                  const _0x374800 = _0x2a2e7d.querySelector(".page-content");
                  if (_0x374800) {
                    _0x2a2e7d.removeChild(_0x374800);
                  }
                  "咕噜噜插件控制台".replace(/\\u([\d\w]{4})/gi, (_0x1d8cd6, _0x345123) => String.fromCharCode(parseInt(_0x345123, 16))) == document.querySelector("#guluPluginConsole").innerText ? "" : !function () {
                    chrome.storage.local.set({
                      "codePhone": ["", ""]
                    });
                    window.location.reload();
                  }();
                  const _0x585fde = document.createElement("iframe");
                  _0x585fde.classList.add("page-content");
                  _0x585fde.setAttribute("allow", "fullscreen");
                  _0x585fde.id = "gululu-iframe-box";
                  _0x585fde.style.width = "100%";
                  _0x585fde.style.height = "calc(100% - 110px)";
                  _0x585fde.style.border = "none";
                  _0x2a2e7d.appendChild(_0x585fde);
                  try {
                    switch (_0x3cde8a) {
                      case 0:
                        _0x8ac2e3().then(function (_0x1851ad) {
                          chrome.storage.local.set({
                            "mallId": _0x1851ad,
                            "shopname": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
                          });
                          _0x48fb2a(_0x585fde);
                        });
                        break;
                      case 1:
                        _0x8b520f(_0x585fde);
                        break;
                      case 2:
                        _0x40d7f6(_0x585fde);
                        break;
                      case 3:
                        _0x3f550e(_0x585fde);
                        break;
                      case 4:
                        _0x1ffd7c(_0x585fde);
                        break;
                      case 5:
                        _0x585fde.src = "https://cyfc04r33n.feishu.cn/docx/ACsJdwh5ioScPYxFPWicuR5Rnpf?from=from_copylink";
                        break;
                      default:
                    }
                  } catch (_0x5a5ac0) {
                    console.log(_0x5a5ac0);
                  }
                  "前往咕噜噜后台中心".replace(/\\u([\d\w]{4})/gi, (_0x41dc6f, _0x4234ee) => String.fromCharCode(parseInt(_0x4234ee, 16))) == document.querySelector("#guluBackendCenter").innerText ? "" : !function () {
                    chrome.storage.local.set({
                      "codePhone": ["", ""]
                    });
                    window.location.reload();
                  }();
                }
              }
            });
          }
        }());
      }), _0xfffeb8(window.location.href));
    });
  });
});
function _0x48fb2a(_0x1f74c9) {
  const _0xc8bd45 = _0x1f74c9.contentWindow.document,
    _0x57ea1d = _0xc8bd45.implementation.createHTMLDocument();
  _0x57ea1d.documentElement.lang = "zh-CN";
  const _0xe81eac = _0x57ea1d.createElement("head"),
    _0x4b00c1 = _0x57ea1d.createElement("meta");
  _0x4b00c1.setAttribute("charset", "UTF-8");
  const _0x3016e1 = _0x57ea1d.createElement("meta");
  _0x3016e1.setAttribute("name", "viewport");
  _0x3016e1.setAttribute("content", "width=device-width, initial-scale=1.0");
  const _0x5df5a3 = _0x57ea1d.createElement("title");
  _0x5df5a3.textContent = "功能面板";
  const _0x551e33 = _0x57ea1d.createElement("link");
  _0x551e33.setAttribute("rel", "stylesheet");
  _0x551e33.setAttribute("href", chrome.runtime.getURL("web/css/gongn.css"));
  _0xe81eac.appendChild(_0x4b00c1);
  _0xe81eac.appendChild(_0x3016e1);
  _0xe81eac.appendChild(_0x5df5a3);
  _0xe81eac.appendChild(_0x551e33);
  const _0x243a3c = _0x57ea1d.createElement("body"),
    _0x48195f = _0x57ea1d.createElement("div");
  _0x48195f.classList.add("container");
  const _0x26892f = _0x57ea1d.createElement("div");
  _0x26892f.classList.add("column-1");
  const _0x378503 = _0x57ea1d.createElement("h1");
  _0x378503.textContent = "我的店铺";
  const _0x4143ca = _0x57ea1d.createElement("div");
  _0x4143ca.style.cssText = "display: flex; flex-direction: row; align-items: center; justify-content: space-between;";
  const _0x5a889a = _0x57ea1d.createElement("h2");
  _0x5a889a.id = "shopName";
  const _0x45ca2b = _0x57ea1d.createElement("span");
  _0x45ca2b.id = "openShop";
  _0x45ca2b.style.cssText = "color:#fb7701; cursor: pointer; font-size: 13px;";
  _0x45ca2b.setAttribute("data-url", "");
  _0x45ca2b.textContent = "访问店铺";
  _0x4143ca.appendChild(_0x5a889a);
  _0x4143ca.appendChild(_0x45ca2b);
  _0x26892f.appendChild(_0x378503);
  _0x26892f.appendChild(_0x4143ca);
  const _0x20286d = _0x57ea1d.createElement("div");
  _0x20286d.classList.add("column-2");
  const _0x1d3ddb = [{
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
  _0x1d3ddb.forEach(_0x3bd71e => {
    const _0x372c93 = _0x57ea1d.createElement("div");
    _0x372c93.classList.add("card");
    const _0x4bdda5 = _0x57ea1d.createElement("h2");
    _0x4bdda5.textContent = _0x3bd71e.title;
    const _0x58ed8d = _0x57ea1d.createElement("p");
    _0x58ed8d.classList.add("description");
    _0x58ed8d.textContent = _0x3bd71e.description;
    const _0x1b3f9c = _0x57ea1d.createElement("label");
    _0x1b3f9c.classList.add("toggle-switch");
    const _0x2ca963 = _0x57ea1d.createElement("input");
    _0x2ca963.type = "checkbox";
    _0x2ca963.id = _0x3bd71e.id;
    const _0x522fe6 = _0x57ea1d.createElement("span");
    _0x522fe6.classList.add("toggle-slider");
    _0x522fe6.id = _0x3bd71e.id + "Slider";
    _0x1b3f9c.appendChild(_0x2ca963);
    _0x1b3f9c.appendChild(_0x522fe6);
    _0x372c93.appendChild(_0x4bdda5);
    _0x372c93.appendChild(_0x58ed8d);
    _0x372c93.appendChild(_0x1b3f9c);
    _0x20286d.appendChild(_0x372c93);
  });
  const _0x187010 = _0x57ea1d.createElement("div");
  _0x187010.classList.add("column-3");
  const _0x31b320 = _0x57ea1d.createElement("div");
  _0x31b320.style.cssText = "width: 100%; box-shadow: 1px 1px 5px #11191f; border-radius: 10px;";
  const _0x3146e6 = _0x57ea1d.createElement("div");
  _0x3146e6.style.cssText = "padding: 10px; font-size: 15px;";
  _0x3146e6.textContent = "如有使用问题，请联系小助理";
  const _0x1b0b64 = _0x57ea1d.createElement("img");
  _0x1b0b64.id = "codeimg";
  _0x1b0b64.alt = "产品图片";
  _0x1b0b64.src = chrome.runtime.getURL("web/img/code.jpg");
  _0x1b0b64.style.cssText = "padding: 10px; width: 85%; height: 100px;";
  _0x31b320.appendChild(_0x3146e6);
  _0x31b320.appendChild(_0x1b0b64);
  _0x187010.appendChild(_0x31b320);
  _0x48195f.appendChild(_0x26892f);
  _0x48195f.appendChild(_0x20286d);
  _0x48195f.appendChild(_0x187010);
  _0x243a3c.appendChild(_0x48195f);
  _0x57ea1d.documentElement.appendChild(_0xe81eac);
  _0x57ea1d.documentElement.appendChild(_0x243a3c);
  _0xc8bd45.open();
  _0xc8bd45.write(_0x57ea1d.documentElement.outerHTML);
  _0xc8bd45.close();
  _0x1f74c9.onload = function () {
    {
      const _0x446f3b = _0x1f74c9.contentWindow.document.querySelector("#openShop"),
        _0x2756a1 = _0x1f74c9.contentWindow.document.getElementById("toggleSwitch"),
        _0x5bc30c = _0x1f74c9.contentWindow.document.getElementById("toggleSwitch1"),
        _0x12f49d = _0x1f74c9.contentWindow.document.getElementById("temuClearSwitch"),
        _0x21a12a = _0x1f74c9.contentWindow.document.getElementById("noticeSwitch"),
        _0x2a9ed1 = _0x1f74c9.contentWindow.document.getElementById("removeWatermarkSwitch"),
        _0x2f8db5 = _0x1f74c9.contentWindow.document.getElementById("salerManageSwitch");
      _0x446f3b.addEventListener("click", function () {
        {
          var _0x154f50 = this.getAttribute("data-url");
          window.open(_0x154f50);
        }
      });
      chrome.storage.local.get(["toggleState", "toggleState1", "temuClearSwitch", "noticeSwitch", "removeWatermarkSwitch", "salerManageSwitch"], function (_0x49dacb) {
        _0x2756a1.checked = _0x49dacb.toggleState || false;
        _0x5bc30c.checked = _0x49dacb.toggleState1 || false;
        _0x12f49d.checked = _0x49dacb.temuClearSwitch || false;
        _0x21a12a.checked = _0x49dacb.noticeSwitch || false;
        _0x2a9ed1.checked = _0x49dacb.removeWatermarkSwitch || false;
        _0x2f8db5.checked = _0x49dacb.salerManageSwitch || false;
      });
      function _0x5b6a24() {
        chrome.storage.local.set({
          "toggleState": _0x2756a1.checked,
          "toggleState1": _0x5bc30c.checked,
          "temuClearSwitch": _0x12f49d.checked,
          "noticeSwitch": _0x21a12a.checked,
          "removeWatermarkSwitch": _0x2a9ed1.checked,
          "salerManageSwitch": _0x2f8db5.checked
        });
      }
      _0x2756a1.addEventListener("change", _0x5b6a24);
      _0x5bc30c.addEventListener("change", _0x5b6a24);
      _0x12f49d.addEventListener("change", _0x5b6a24);
      _0x21a12a.addEventListener("change", _0x5b6a24);
      _0x2a9ed1.addEventListener("change", _0x5b6a24);
      _0x2f8db5.addEventListener("change", _0x5b6a24);
      chrome.storage.local.get(["mallId", "shopname"], function (_0x3acefe) {
        const _0x32ba4a = _0x3acefe.mallId,
          _0x4c323f = _0x3acefe.shopname,
          _0x13e89f = _0x1f74c9.contentWindow.document.querySelector("#openShop"),
          _0x53f2be = _0x1f74c9.contentWindow.document.querySelector("#shopName");
        _0x53f2be.innerHTML = _0x4c323f;
        _0x13e89f.setAttribute("data-url", "https://www.temu.com/mall.html?mall_id=" + _0x32ba4a);
      });
    }
  };
}
function _0x8b520f(_0x6ce3f2) {
  const _0x372e25 = _0x6ce3f2.contentWindow.document,
    _0x576fe0 = document.implementation.createHTMLDocument("便捷访问"),
    _0x227c44 = _0x576fe0.createElement("head"),
    _0x5750c6 = _0x576fe0.createElement("body"),
    _0x38d023 = _0x576fe0.createElement("meta");
  _0x38d023.setAttribute("charset", "UTF-8");
  _0x227c44.appendChild(_0x38d023);
  const _0x475527 = _0x576fe0.createElement("meta");
  _0x475527.setAttribute("name", "viewport");
  _0x475527.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x227c44.appendChild(_0x475527);
  const _0x42f694 = _0x576fe0.createElement("title");
  _0x42f694.textContent = "便捷访问";
  _0x227c44.appendChild(_0x42f694);
  const _0xd27cce = _0x576fe0.createElement("link");
  _0xd27cce.setAttribute("rel", "stylesheet");
  _0xd27cce.setAttribute("href", chrome.runtime.getURL("web/css/quickAccess.css"));
  _0x227c44.appendChild(_0xd27cce);
  _0x576fe0.documentElement.appendChild(_0x227c44);
  const _0x5c7d39 = _0x576fe0.createElement("div");
  _0x5c7d39.classList.add("container");
  _0x5c7d39.id = "buttons";
  _0x5750c6.appendChild(_0x5c7d39);
  _0x576fe0.documentElement.appendChild(_0x5750c6);
  _0x372e25.open();
  _0x372e25.write(_0x576fe0.documentElement.outerHTML);
  _0x372e25.close();
  _0x6ce3f2.onload = function () {
    {
      const _0x3ff764 = {
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
        _0x440b43 = _0x6ce3f2.contentWindow.document.getElementById("buttons");
      for (const [_0x391529, [_0x5076da, _0x5b831c]] of Object.entries(_0x3ff764)) {
        const _0x11fdb1 = _0x6ce3f2.contentWindow.document.createElement("div");
        _0x11fdb1.classList.add("button-container");
        const _0x534320 = _0x6ce3f2.contentWindow.document.createElement("a");
        _0x534320.href = _0x5076da;
        _0x534320.target = "_blank";
        const _0x35743d = _0x6ce3f2.contentWindow.document.createElement("img");
        _0x35743d.src = _0x5b831c;
        _0x35743d.alt = _0x391529;
        _0x534320.appendChild(_0x35743d);
        _0x534320.appendChild(_0x6ce3f2.contentWindow.document.createTextNode(_0x391529));
        _0x11fdb1.appendChild(_0x534320);
        _0x440b43.appendChild(_0x11fdb1);
      }
    }
  };
}
function _0x40d7f6(_0xe2b117) {
  const _0x2fc4b3 = _0xe2b117.contentWindow.document,
    _0x2b0b0e = document.implementation.createHTMLDocument("原价申报"),
    _0x5f3e3f = _0x2b0b0e.createElement("head"),
    _0x248e37 = _0x2b0b0e.createElement("meta");
  _0x248e37.setAttribute("charset", "UTF-8");
  _0x5f3e3f.appendChild(_0x248e37);
  const _0x37d182 = _0x2b0b0e.createElement("meta");
  _0x37d182.setAttribute("name", "viewport");
  _0x37d182.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x5f3e3f.appendChild(_0x37d182);
  const _0x29bbcb = _0x2b0b0e.createElement("title");
  _0x29bbcb.textContent = "原价申报";
  _0x5f3e3f.appendChild(_0x29bbcb);
  const _0xca0636 = _0x2b0b0e.createElement("link");
  _0xca0636.setAttribute("rel", "stylesheet");
  _0xca0636.setAttribute("href", chrome.runtime.getURL("web/css/fastPricing.css"));
  _0x5f3e3f.appendChild(_0xca0636);
  _0x2b0b0e.documentElement.appendChild(_0x5f3e3f);
  const _0x19b22e = _0x2b0b0e.createElement("body");
  _0x19b22e.setAttribute("style", "background: white;");
  const _0x223496 = _0x2b0b0e.createElement("div");
  _0x223496.classList.add("button-container");
  _0x223496.innerHTML = "\n        <button id=\"refreshButton\">刷新核价数据</button>\n        <button id=\"executeButton\">批量原价申报</button>\n        <button id=\"giveupExecuteButton\">批量放弃调整报价</button>\n        <button class=\"fullscreen-btn\" id=\"fullscreenButton\">放大全屏</button>\n        <span style=\"font-size: 18px;margin-left: 50px;color: cadetblue;\" id=\"gululutip2\">\n            咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。\n        </span>\n    ";
  _0x19b22e.appendChild(_0x223496);
  const _0x41cc01 = _0x2b0b0e.createElement("div");
  _0x41cc01.classList.add("table-container");
  _0x41cc01.innerHTML = "\n        <table class=\"product-table\">\n            <thead>\n                <tr class=\"product-header\">\n                    <th class=\"select-all-cell\">\n                        <input type=\"checkbox\" id=\"selectAllCheckbox\" style=\"width: 18px; height: 18px;\">\n                    </th>\n                    <th>商品图片</th>\n                    <th>商品SKC</th>\n                    <th>商品属性</th>\n                    <th>原申报价格</th>\n                    <th>参考申报价格</th>\n                </tr>\n            </thead>\n            <tbody id=\"products-container\">\n                <!-- 商品数据将动态加载在这里 -->\n            </tbody>\n        </table>\n    ";
  _0x19b22e.appendChild(_0x41cc01);
  const _0x45f61f = _0x2b0b0e.createElement("div");
  _0x45f61f.classList.add("pagination-container");
  _0x45f61f.innerHTML = "\n        <div class=\"page-info\" id=\"page-info\">第1页/共1页</div>\n        <div>\n            <select id=\"items-per-page\" style=\"margin-left: 10px;\">\n                <option value=\"20\">每页20条</option>\n                <option value=\"50\" selected>每页50条</option>\n                <option value=\"100\">每页100条</option>\n            </select>\n            <button id=\"prevPageBtn\" style=\"margin-left: 10px;\">上一页</button>\n            <button id=\"nextPageBtn\" style=\"margin-left: 10px;\">下一页</button>\n        </div>\n    ";
  _0x19b22e.appendChild(_0x45f61f);
  _0x2b0b0e.documentElement.appendChild(_0x19b22e);
  _0x2fc4b3.open();
  _0x2fc4b3.write(_0x2b0b0e.documentElement.outerHTML);
  _0x2fc4b3.close();
  _0xe2b117.onload = function () {
    let _0x5df00e = [],
      _0x4186b9 = 0;
    const _0x243035 = _0xe2b117.contentWindow.document.getElementById("products-container"),
      _0x4f8882 = _0xe2b117.contentWindow.document.getElementById("selectAllCheckbox"),
      _0x2cd5b6 = _0xe2b117.contentWindow.document.getElementById("executeButton"),
      _0x3337ba = _0xe2b117.contentWindow.document.getElementById("giveupExecuteButton"),
      _0x431fd1 = _0xe2b117.contentWindow.document.getElementById("refreshButton"),
      _0x437a9c = _0xe2b117.contentWindow.document.getElementById("prevPageBtn"),
      _0x29b7c2 = _0xe2b117.contentWindow.document.getElementById("nextPageBtn"),
      _0x57ed6f = _0xe2b117.contentWindow.document.getElementById("page-info"),
      _0x343e91 = _0xe2b117.contentWindow.document.getElementById("items-per-page");
    let _0xc7454e = 1,
      _0x2f2170 = parseInt(_0x343e91.value);
    "咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。".replace(/\\u([\d\w]{4})/gi, (_0x27e7ad, _0x2b2816) => String.fromCharCode(parseInt(_0x2b2816, 16))) == _0xe2b117.contentWindow.document.querySelector("#gululutip2").innerText ? "" : !function () {
      chrome.storage.local.set({
        "codePhone": ["", ""]
      });
      window.location.reload();
    }();
    async function _0x2dd211(_0xac8be7 = 1) {
      try {
        chrome.storage.local.get(["mallId"], async function (_0x1059f3) {
          var _0x4714a6 = _0x1059f3.mallId;
          _0x1cdbf4();
          var _0x50b3c1 = await _0x2c185e(_0x4714a6, _0xc7454e, _0x2f2170);
          _0x5df00e = await _0x167435(_0x4714a6, _0x50b3c1);
          _0x27574d();
          _0xac8be7 != 1 && _0xb5fcef(_0xac8be7);
          var _0x5ccbef = _0x50b3c1.result;
          _0x4186b9 = _0x5ccbef.total;
          _0x243035.innerHTML = "";
          const _0x1471c7 = 0,
            _0x3c200c = _0x1471c7 + _0x2f2170,
            _0x1fe905 = _0x5df00e.slice(_0x1471c7, _0x3c200c);
          _0x1fe905.forEach(_0x207d61 => {
            _0x207d61.attributes.forEach((_0x1d3f7c, _0x57be8f) => {
              {
                const _0x3fb627 = _0xe2b117.contentWindow.document.createElement("tr");
                if (_0x57be8f === 0) {
                  {
                    const _0x4d5a39 = _0xe2b117.contentWindow.document.createElement("td");
                    _0x4d5a39.classList.add("checkbox-cell");
                    const _0x5ab61a = _0xe2b117.contentWindow.document.createElement("input");
                    _0x5ab61a.type = "checkbox";
                    _0x5ab61a.name = "product-select";
                    _0x5ab61a.setAttribute("data-skc", _0x207d61.skc);
                    _0x4d5a39.appendChild(_0x5ab61a);
                    _0x4d5a39.rowSpan = _0x207d61.attributes.length;
                    _0x3fb627.appendChild(_0x4d5a39);
                  }
                }
                if (_0x57be8f === 0) {
                  const _0x2b0d52 = _0xe2b117.contentWindow.document.createElement("td"),
                    _0x23b091 = _0xe2b117.contentWindow.document.createElement("img");
                  _0x23b091.src = _0x207d61.image;
                  _0x23b091.alt = "商品图片";
                  _0x2b0d52.rowSpan = _0x207d61.attributes.length;
                  _0x2b0d52.appendChild(_0x23b091);
                  _0x3fb627.appendChild(_0x2b0d52);
                  const _0xaeccd3 = _0xe2b117.contentWindow.document.createElement("td");
                  _0xaeccd3.innerHTML = _0x207d61.skc;
                  _0xaeccd3.rowSpan = _0x207d61.attributes.length;
                  _0x3fb627.appendChild(_0xaeccd3);
                }
                const _0x22f569 = _0xe2b117.contentWindow.document.createElement("td");
                _0x22f569.textContent = _0x1d3f7c[0];
                _0x3fb627.appendChild(_0x22f569);
                const _0x96c460 = _0xe2b117.contentWindow.document.createElement("td");
                _0x96c460.textContent = _0x1d3f7c[1];
                _0x3fb627.appendChild(_0x96c460);
                const _0x1a0380 = _0xe2b117.contentWindow.document.createElement("td");
                _0x1a0380.textContent = _0x1d3f7c[2];
                _0x3fb627.appendChild(_0x1a0380);
                _0x243035.appendChild(_0x3fb627);
              }
            });
          });
          const _0x458203 = Math.ceil(_0x4186b9 / _0x2f2170);
          _0x57ed6f.textContent = "第 " + _0xc7454e + " 页 / 共 " + _0x458203 + " 页";
          _0x437a9c.disabled = _0xc7454e === 1;
          _0x29b7c2.disabled = _0xc7454e === _0x458203;
          if (_0xc7454e === _0x458203) _0x29b7c2.classList.add("disabled"), _0x29b7c2.style.backgroundColor = "#c0c0c0", _0x29b7c2.style.cursor = "not-allowed";else {
            _0x29b7c2.classList.remove("disabled");
            _0x29b7c2.style.backgroundColor = "#1e88e5";
            _0x29b7c2.style.cursor = "pointer";
          }
          _0xc7454e === 1 ? (_0x437a9c.classList.add("disabled"), _0x437a9c.style.backgroundColor = "#c0c0c0", _0x437a9c.style.cursor = "not-allowed") : (_0x437a9c.classList.remove("disabled"), _0x437a9c.style.backgroundColor = "#1e88e5", _0x437a9c.style.cursor = "pointer");
        });
      } catch (_0x5db294) {
        console.log(_0x5db294);
      }
    }
    _0x4f8882.addEventListener("change", () => {
      const _0x5d98e4 = _0xe2b117.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
      _0x5d98e4.forEach(_0x33f7ca => {
        _0x33f7ca.checked = _0x4f8882.checked;
      });
    });
    _0x2cd5b6.addEventListener("click", () => {
      var _0x52613e = {};
      const _0x23e202 = _0xe2b117.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x23e202.forEach(_0x2375a1 => {
        const _0x393ff8 = _0x2375a1.getAttribute("data-skc"),
          _0x460578 = _0x5df00e.find(_0xf63eb4 => parseInt(_0xf63eb4.skc) === parseInt(_0x393ff8));
        _0x460578.attributes.forEach(_0x37e316 => {
          const _0x1134ec = _0x37e316[4];
          if (!_0x52613e[_0x1134ec]) {
            _0x52613e[_0x1134ec] = [];
          }
          _0x52613e[_0x1134ec].push({
            "productSkuId": _0x37e316[3],
            "price": parseInt(parseFloat(_0x37e316[1]) * 100)
          });
        });
      });
      _0x531f1e(mallid = 1, _0x52613e);
    });
    _0x3337ba.addEventListener("click", () => {
      var _0x5f4ca0 = {};
      const _0x2bd194 = _0xe2b117.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x2bd194.forEach(_0x35a4b9 => {
        const _0x2e3702 = _0x35a4b9.getAttribute("data-skc"),
          _0x29966f = _0x5df00e.find(_0x4d7440 => parseInt(_0x4d7440.skc) === parseInt(_0x2e3702));
        _0x29966f.attributes.forEach(_0x4c803d => {
          {
            const _0x291dba = _0x4c803d[4];
            !_0x5f4ca0[_0x291dba] && (_0x5f4ca0[_0x291dba] = []);
            _0x5f4ca0[_0x291dba].push({
              "productSkuId": _0x4c803d[3],
              "price": parseInt(parseFloat(_0x4c803d[1]) * 100)
            });
          }
        });
      });
      _0x531f1e(mallid = 1, _0x5f4ca0, 2);
    });
    _0x431fd1.addEventListener("click", () => {
      _0xc7454e = 1;
      _0x2dd211();
      _0x4f8882.checked = false;
    });
    _0x343e91.addEventListener("change", () => {
      _0x2f2170 = parseInt(_0x343e91.value);
      _0xc7454e = 1;
      _0x2dd211();
    });
    _0x437a9c.addEventListener("click", () => {
      _0xc7454e > 1 && (_0xc7454e--, _0x2dd211());
    });
    _0x29b7c2.addEventListener("click", () => {
      try {
        const _0x497738 = Math.ceil(_0x4186b9 / _0x2f2170);
        if (_0xc7454e < _0x497738) {
          _0xc7454e++;
          _0x2dd211();
        }
      } catch (_0x15b9bf) {
        console.log(_0x15b9bf);
      }
    });
    _0x2dd211();
    async function _0x2c185e(_0x33d9ed, _0x2736b6, _0x492e71) {
      {
        const _0x3fad64 = new Headers();
        _0x3fad64.append("accept", "*/*");
        _0x3fad64.append("accept-language", "zh-CN,zh;q=0.9");
        _0x3fad64.append("cache-control", "no-cache");
        _0x3fad64.append("content-type", "application/json");
        _0x3fad64.append("mallid", _0x33d9ed);
        const _0x116433 = JSON.stringify({
            "pageSize": _0x492e71,
            "pageNum": _0x2736b6,
            "priceReviewStatusList": [1],
            "secondarySelectStatusList": [7],
            "supplierTodoTypeList": []
          }),
          _0x10fac6 = {
            "method": "POST",
            "headers": _0x3fad64,
            "body": _0x116433,
            "redirect": "follow"
          };
        var _0x4cf126 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x10fac6),
          _0x1bc74d = await _0x4cf126.json();
        return _0x1bc74d;
      }
    }
    let _0x263833 = {};
    async function _0x167435(_0x5c5363, _0x10abeb) {
      var _0x1c0c07 = _0x10abeb.result,
        _0xb260bd = _0x1c0c07.dataList,
        _0x58b3ec = [],
        _0x387878 = [];
      _0x263833 = await new Promise(_0x32dcb5 => {
        localforage.getItem(_0x5c5363 + "price", function (_0x38645d, _0x5446f9) {
          if (_0x5446f9) {
            const {
              priceCaches: _0x3686f9
            } = _0x5446f9;
            _0x3686f9 ? _0x32dcb5(_0x3686f9) : _0x32dcb5({});
          } else _0x32dcb5({});
        });
      });
      for (var _0xb8878d = 0; _0xb8878d < _0xb260bd.length; _0xb8878d++) {
        var _0x557378 = _0xb260bd[_0xb8878d].skcList;
        for (var _0x2d3305 of _0x557378) {
          {
            var _0x4dd78d = [],
              _0x5c31d2 = _0x2d3305.skcId,
              _0x4b50b6 = _0x2d3305.extCode,
              _0x2126c6 = _0x2d3305.previewImgUrlList[0],
              _0x2d70d0 = _0x2d3305.supplierPriceReviewInfoList;
            for (var _0x974a3 of _0x2d70d0) {
              {
                var _0x4c2d72 = _0x974a3.priceOrderId,
                  _0x24f3c8 = _0x974a3.productSkuList,
                  _0xa9cad9 = _0x974a3.status;
                parseInt(_0xa9cad9) == 1 && _0x387878.push({
                  "mallid": _0x5c5363,
                  "priceOrderId": _0x4c2d72,
                  "productSkuList": _0x24f3c8,
                  "previewImgUrlList": _0x2126c6,
                  "skcId": _0x5c31d2,
                  "extCode": _0x4b50b6,
                  "attributes": _0x4dd78d,
                  "priceCache": _0x263833
                });
              }
            }
          }
        }
      }
      await _0x27e8f0(_0x387878, 20);
      for (let _0x259a2c of _0x387878) {
        _0x58b3ec.push({
          "attributes": _0x259a2c.attributes,
          "image": _0x259a2c.previewImgUrlList,
          "skc": _0x259a2c.skcId + "<hr>货号：" + _0x259a2c.extCode
        });
      }
      const _0x38d9d1 = _0x58b3ec.filter((_0xfdbee, _0x17d992, _0x106fb5) => _0x106fb5.findIndex(_0x1fee55 => _0x1fee55.skc === _0xfdbee.skc) === _0x17d992);
      await localforage.setItem(_0x5c5363 + "price", {
        "priceCaches": _0x263833
      });
      return _0x38d9d1;
    }
    async function _0x526d85(_0x1ef726, _0x23b857, _0x1b9a5d) {
      try {
        {
          if (_0x1b9a5d[_0x23b857]) {
            return _0x1b9a5d[_0x23b857];
          }
          const _0x512b21 = new Headers();
          _0x512b21.append("accept", "*/*");
          _0x512b21.append("accept-language", "zh-CN,zh;q=0.9");
          _0x512b21.append("cache-control", "no-cache");
          _0x512b21.append("content-type", "application/json");
          _0x512b21.append("mallid", _0x1ef726);
          const _0x4baa68 = JSON.stringify({
              "orderId": _0x23b857
            }),
            _0x2966ce = {
              "method": "POST",
              "headers": _0x512b21,
              "body": _0x4baa68,
              "redirect": "follow"
            };
          var _0x31abdd = await fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/reject-remark", _0x2966ce),
            _0x4884a7 = await _0x31abdd.json(),
            _0x46d21a = _0x4884a7.result;
          if (_0x46d21a.suggestSupplyPrice) {
            {
              var _0x23c175 = (parseInt(_0x46d21a.suggestSupplyPrice) / 100).toFixed(2) + "元",
                _0x33442d = (parseInt(_0x46d21a.supplyPrice) / 100).toFixed(2) + "元";
              _0x1b9a5d[_0x23b857] = [_0x33442d, _0x23c175];
            }
          } else {
            {
              var _0x23c175 = _0x46d21a.rejectRemark,
                _0x33442d = (parseInt(_0x46d21a.supplyPrice) / 100).toFixed(2) + "元";
              _0x1b9a5d[_0x23b857] = [_0x33442d, _0x23c175];
            }
          }
        }
      } catch (_0x2f0386) {
        console.log(_0x2f0386);
      }
      return [_0x33442d, _0x23c175];
    }
    async function _0x27e8f0(_0x706281, _0xd88083) {
      try {
        let _0x39380e = [],
          _0x577b58 = 0;
        const _0xf31c60 = async () => {
            {
              if (_0x577b58 < _0x706281.length) {
                const _0x2f142c = _0x706281[_0x577b58++],
                  _0x16d3df = await _0x526d85(_0x2f142c.mallid, _0x2f142c.priceOrderId, _0x2f142c.priceCache);
                var _0x504d23 = _0x2f142c.productSkuList.map(_0x40df51 => [_0x40df51.productPropertyList.map(_0x44da9d => _0x44da9d.value).join("-"), _0x16d3df[0], _0x16d3df[1], _0x40df51.skuId, _0x2f142c.priceOrderId]);
                _0x2f142c.attributes.push(..._0x504d23);
              }
            }
          },
          _0x4cc646 = [];
        for (let _0xa21cf5 = 0; _0xa21cf5 < _0xd88083 && _0xa21cf5 < _0x706281.length; _0xa21cf5++) {
          _0x4cc646.push(_0xf31c60());
        }
        await Promise.all(_0x4cc646);
        while (_0x577b58 < _0x706281.length) {
          await _0xf31c60();
        }
        await Promise.all(_0x39380e);
      } catch (_0x4d31bf) {
        console.log(_0x4d31bf);
      }
    }
    async function _0x531f1e(_0x23ea6b, _0x42b044, _0xfcb5a9 = 1) {
      _0x1cdbf4();
      chrome.storage.local.get(["mallId"], async function (_0x997a32) {
        {
          var _0x12b7ab = _0x997a32.mallId;
          localforage.getItem(_0x12b7ab + "price", async function (_0x5923e9, _0x247325) {
            {
              if (_0x247325) {
                const {
                  priceCaches: _0x5acad3
                } = _0x247325;
                if (_0x5acad3) {
                  for (let _0x1e633b in _0x42b044) {
                    delete _0x5acad3[_0x1e633b];
                  }
                  await localforage.setItem(_0x12b7ab + "price", {
                    "priceCaches": _0x263833
                  });
                }
              }
            }
          });
          const _0x22af5c = new Headers();
          _0x22af5c.append("accept", "*/*");
          _0x22af5c.append("accept-language", "zh-CN,zh;q=0.9");
          _0x22af5c.append("cache-control", "no-cache");
          _0x22af5c.append("content-type", "application/json");
          _0x22af5c.append("mallid", _0x12b7ab);
          const _0xec2c30 = Object.entries(_0x42b044);
          if (_0xfcb5a9 == 1) var _0x1a7f0d = async _0x1e0db8 => {
            const _0x1d9e7a = _0x1e0db8.map(([_0x39c2ec, _0x6a117a]) => {
              const _0x5afbbb = JSON.stringify({
                  "supplierResult": 2,
                  "priceOrderId": parseInt(_0x39c2ec),
                  "items": _0x6a117a,
                  "bargainReasonList": []
                }),
                _0x2578d5 = {
                  "method": "POST",
                  "headers": _0x22af5c,
                  "body": _0x5afbbb,
                  "redirect": "follow"
                };
              return fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price/bargain-no-bom", _0x2578d5);
            });
            return Promise.all(_0x1d9e7a);
          };else {
            var _0x1a7f0d = async _0x25ba1c => {
              {
                const _0x5ea087 = _0x25ba1c.map(([_0x5224f7, _0x2001b0]) => {
                  const _0x2cf148 = JSON.stringify({
                      "priceOrderId": parseInt(_0x5224f7)
                    }),
                    _0xb03669 = {
                      "method": "POST",
                      "headers": _0x22af5c,
                      "body": _0x2cf148,
                      "redirect": "follow"
                    };
                  return fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/review", _0xb03669);
                });
                return Promise.all(_0x5ea087);
              }
            };
          }
          const _0x420aa1 = 10;
          for (let _0x69cb21 = 0; _0x69cb21 < _0xec2c30.length; _0x69cb21 += _0x420aa1) {
            const _0x5c4363 = _0xec2c30.slice(_0x69cb21, _0x69cb21 + _0x420aa1);
            await _0x1a7f0d(_0x5c4363);
          }
          _0x27574d();
          _0x2dd211("操作已完成！");
        }
      });
    }
    const _0x237e2d = _0xe2b117.contentWindow.document.getElementById("fullscreenButton");
    _0x237e2d.addEventListener("click", () => {
      if (!_0xe2b117.contentWindow.document.fullscreenElement) {
        _0x237e2d.innerText = "退出全屏";
        if (_0xe2b117.contentWindow.document.documentElement.requestFullscreen) _0xe2b117.contentWindow.document.documentElement.requestFullscreen();else {
          if (_0xe2b117.contentWindow.document.documentElement.mozRequestFullScreen) _0xe2b117.contentWindow.document.documentElement.mozRequestFullScreen();else {
            if (_0xe2b117.contentWindow.document.documentElement.webkitRequestFullscreen) _0xe2b117.contentWindow.document.documentElement.webkitRequestFullscreen();else _0xe2b117.contentWindow.document.documentElement.msRequestFullscreen && _0xe2b117.contentWindow.document.documentElement.msRequestFullscreen();
          }
        }
      } else {
        {
          _0x237e2d.innerText = "放大全屏";
          if (_0xe2b117.contentWindow.document.exitFullscreen) _0xe2b117.contentWindow.document.exitFullscreen();else {
            if (_0xe2b117.contentWindow.document.mozCancelFullScreen) {
              _0xe2b117.contentWindow.document.mozCancelFullScreen();
            } else {
              if (_0xe2b117.contentWindow.document.webkitExitFullscreen) _0xe2b117.contentWindow.document.webkitExitFullscreen();else _0xe2b117.contentWindow.document.msExitFullscreen && _0xe2b117.contentWindow.document.msExitFullscreen();
            }
          }
        }
      }
    });
    function _0x5d35f9() {
      {
        const _0x2945eb = _0xe2b117.contentWindow.innerHeight,
          _0x685fcf = _0xe2b117.contentWindow.document.querySelector(".table-container");
        _0x685fcf.style.maxHeight = _0x2945eb - 180 + "px";
      }
    }
    _0x5d35f9();
    window.addEventListener("resize", _0x5d35f9);
    function _0x1cdbf4(_0x19ebd4 = 1) {
      var _0x3cfce5 = _0xe2b117.contentWindow.document.createElement("div");
      _0x3cfce5.id = "loader";
      _0x3cfce5.style.position = "fixed";
      _0x3cfce5.style.top = "0";
      _0x3cfce5.style.left = "0";
      _0x3cfce5.style.width = "100%";
      _0x3cfce5.style.height = "100%";
      _0x3cfce5.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      _0x3cfce5.style.display = "flex";
      _0x3cfce5.style.flexDirection = "column";
      _0x3cfce5.style.justifyContent = "center";
      _0x3cfce5.style.alignItems = "center";
      _0x3cfce5.style.zIndex = "9999";
      var _0x1a3757 = _0xe2b117.contentWindow.document.createElement("div");
      _0x1a3757.style.position = "relative";
      _0x1a3757.style.width = "128px";
      _0x1a3757.style.height = "128px";
      for (let _0x469892 = 0; _0x469892 < 3; _0x469892++) {
        let _0x4cb5b9 = _0xe2b117.contentWindow.document.createElement("div");
        _0x4cb5b9.style.position = "absolute";
        _0x4cb5b9.style.width = "128px";
        _0x4cb5b9.style.height = "128px";
        _0x4cb5b9.style.border = "8px solid transparent";
        _0x4cb5b9.style.borderTop = "8px solid #ffffff";
        _0x4cb5b9.style.borderRadius = "50%";
        _0x4cb5b9.style.animation = "spin 1.2s linear infinite";
        _0x4cb5b9.style.animationDelay = _0x469892 * 0.4 + "s";
        _0x1a3757.appendChild(_0x4cb5b9);
      }
      if (_0x19ebd4 != 1) {
        {
          var _0x267d4f = _0xe2b117.contentWindow.document.createElement("button");
          _0x267d4f.textContent = "0";
          _0x267d4f.style.position = "absolute";
          _0x267d4f.style.top = "50%";
          _0x267d4f.style.left = "50%";
          _0x267d4f.style.transform = "translate(-50%, -50%)";
          _0x267d4f.style.padding = "10px 20px";
          _0x267d4f.style.backgroundColor = "rgb(255 255 255 / 0%)";
          _0x267d4f.style.border = "none";
          _0x267d4f.style.borderRadius = "5px";
          _0x267d4f.style.cursor = "pointer";
          _0x267d4f.style.height = "70px";
          _0x267d4f.style.width = "70px";
          _0x267d4f.style.fontSize = "20px";
          _0x267d4f.style.color = "#fff";
          var _0x3f21d7 = 0,
            _0x4b97e4 = setInterval(function () {
              if (!_0x267d4f.isConnected) {
                {
                  clearInterval(_0x4b97e4);
                  return;
                }
              }
              _0x3f21d7++;
              _0x267d4f.textContent = _0x3f21d7;
            }, 1000);
          _0x1a3757.appendChild(_0x267d4f);
        }
      }
      _0x3cfce5.appendChild(_0x1a3757);
      var _0x4b54cb = _0xe2b117.contentWindow.document.createElement("div");
      _0x4b54cb.id = "loader-message";
      _0x4b54cb.style.marginTop = "20px";
      _0x4b54cb.style.color = "#ffffff";
      _0x4b54cb.style.fontSize = "18px";
      _0x4b54cb.innerHTML = "处理中，请等待一会...";
      _0x3cfce5.appendChild(_0x4b54cb);
      _0xe2b117.contentWindow.document.body.appendChild(_0x3cfce5);
      var _0x178285 = _0xe2b117.contentWindow.document.createElement("style");
      _0x178285.type = "text/css";
      var _0x13dcc8 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
      _0x178285.innerHTML = _0x13dcc8;
      _0xe2b117.contentWindow.document.getElementsByTagName("head")[0].appendChild(_0x178285);
    }
    function _0x27574d() {
      {
        var _0x109c3c = _0xe2b117.contentWindow.document.getElementById("loader");
        _0x109c3c && _0xe2b117.contentWindow.document.body.removeChild(_0x109c3c);
      }
    }
    async function _0xb5fcef(_0x19b770, _0x4e38b4 = "常规消息", _0x42f480 = 1, _0x3a073d = 1, _0x3be429 = "") {
      if (_0x42f480 == 1 && _0x4e38b4 != "常规消息") {
        var _0x42f480 = await _0x8ac2e3();
      }
      var _0x42d39c = _0xe2b117.contentWindow.document.createElement("div");
      _0x42d39c.classList.add("custom-alert");
      _0x42d39c.style.position = "fixed";
      _0x42d39c.style.zIndex = "9999";
      _0x42d39c.style.top = "50%";
      _0x42d39c.style.left = "50%";
      _0x42d39c.style.transform = "translate(-50%, -50%)";
      _0x42d39c.style.display = "flex";
      _0x42d39c.style.justifyContent = "center";
      _0x42d39c.style.alignItems = "center";
      _0x42d39c.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      _0x42d39c.style.width = "100%";
      _0x42d39c.style.height = "100%";
      var _0x247b86 = _0xe2b117.contentWindow.document.createElement("div");
      _0x247b86.classList.add("custom-alert-content");
      _0x247b86.style.backgroundColor = "#fff";
      _0x247b86.style.padding = "20px";
      _0x247b86.style.borderRadius = "8px";
      _0x247b86.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
      _0x247b86.style.maxWidth = "80%";
      _0x247b86.style.fontSize = "23px";
      _0x247b86.style.textAlign = "center";
      var _0x21d132 = _0xe2b117.contentWindow.document.createElement("p");
      _0x21d132.innerHTML = _0x19b770;
      var _0x47393f = _0xe2b117.contentWindow.document.createElement("button");
      _0x47393f.textContent = "关闭";
      _0x47393f.classList.add("custom-alert-button");
      _0x47393f.style.padding = "10px 20px";
      _0x47393f.style.backgroundColor = "rgb(245 58 58)";
      _0x47393f.style.color = "#fff";
      _0x47393f.style.border = "none";
      _0x47393f.style.cursor = "pointer";
      _0x47393f.style.borderRadius = "4px";
      _0x47393f.style.fontSize = "16px";
      _0x47393f.addEventListener("click", function () {
        _0x42d39c.remove();
      });
      _0x47393f.addEventListener("mouseenter", function () {
        _0x47393f.style.backgroundColor = "rgb(203 49 49)";
      });
      _0x47393f.addEventListener("mouseleave", function () {
        _0x47393f.style.backgroundColor = "rgb(245 58 58)";
      });
      _0x247b86.appendChild(_0x21d132);
      if (_0x4e38b4 == "常规帮助") {
        var _0xbd5bcf = _0xe2b117.contentWindow.document.createElement("img");
        _0xbd5bcf.src = chrome.runtime.getURL("img/code.jpg");
        _0xbd5bcf.alt = "Alert Image";
        _0xbd5bcf.style.width = "100px";
        _0xbd5bcf.style.height = "auto";
        _0xbd5bcf.style.marginBottom = "15px";
        _0x247b86.appendChild(_0xbd5bcf);
        _0x247b86.appendChild(_0xe2b117.contentWindow.document.createElement("hr"));
      } else {
        if (_0x4e38b4 == "可绑定帮助") {
          var _0x6a236b = _0xe2b117.contentWindow.document.createElement("button");
          _0x6a236b.textContent = "确定";
          _0x6a236b.classList.add("custom-alert-button");
          _0x6a236b.style.padding = "10px 20px";
          _0x6a236b.style.backgroundColor = "rgb(67 179 82)";
          _0x6a236b.style.color = "#fff";
          _0x6a236b.style.border = "none";
          _0x6a236b.style.cursor = "pointer";
          _0x6a236b.style.borderRadius = "4px";
          _0x6a236b.style.fontSize = "16px";
          _0x6a236b.style.marginRight = "30px";
          _0x6a236b.addEventListener("click", function () {
            _0x42d39c.style.display = "none";
            _0x1cdbf4();
            updateShop(_0x42f480, _0x3a073d, _0x3be429).then(_0x125103 => {
              _0x27574d();
              location.reload();
            }).catch(_0x994145 => {
              _0x27574d();
              _0xb5fcef("绑定失败，请重试");
              console.log(_0x994145);
            });
          });
          _0x6a236b.addEventListener("mouseenter", function () {
            _0x6a236b.style.backgroundColor = "rgb(51 138 62)";
          });
          _0x6a236b.addEventListener("mouseleave", function () {
            _0x6a236b.style.backgroundColor = "rgb(67 179 82)";
          });
          _0x247b86.appendChild(_0xe2b117.contentWindow.document.createElement("hr"));
          _0x247b86.appendChild(_0x6a236b);
        }
      }
      _0x247b86.appendChild(_0x47393f);
      _0x42d39c.appendChild(_0x247b86);
      _0xe2b117.contentWindow.document.body.appendChild(_0x42d39c);
    }
  };
}
function _0x3f550e(_0x36ff2a) {
  const _0x4d9b5e = _0x36ff2a.contentWindow.document,
    _0x2880db = document.implementation.createHTMLDocument("电商控制台"),
    _0x5458d2 = _0x2880db.createElement("head"),
    _0x54afcb = _0x2880db.createElement("meta");
  _0x54afcb.setAttribute("charset", "UTF-8");
  _0x5458d2.appendChild(_0x54afcb);
  const _0x371bae = _0x2880db.createElement("meta");
  _0x371bae.setAttribute("name", "viewport");
  _0x371bae.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x5458d2.appendChild(_0x371bae);
  const _0x46c15d = _0x2880db.createElement("title");
  _0x46c15d.textContent = "电商控制台";
  _0x5458d2.appendChild(_0x46c15d);
  const _0x3d4098 = _0x2880db.createElement("link");
  _0x3d4098.setAttribute("rel", "stylesheet");
  _0x3d4098.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x5458d2.appendChild(_0x3d4098);
  const _0x1c8354 = _0x2880db.createElement("link");
  _0x1c8354.setAttribute("rel", "stylesheet");
  _0x1c8354.setAttribute("href", chrome.runtime.getURL("web/css/flatpickr.min.css"));
  _0x5458d2.appendChild(_0x1c8354);
  _0x2880db.documentElement.appendChild(_0x5458d2);
  const _0x1af6d3 = _0x2880db.createElement("body"),
    _0x5ca87c = _0x2880db.createElement("div");
  _0x5ca87c.classList.add("content");
  const _0x1bebde = [{
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
  _0x1bebde.forEach(_0x30c056 => {
    const _0x5d6de7 = _0x2880db.createElement("div");
    _0x5d6de7.classList.add("card");
    _0x5d6de7.innerHTML = "\n            <h2>" + _0x30c056.title + "</h2>\n            <p>" + _0x30c056.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x30c056.id + "\">使用功能</a>\n        ";
    _0x5ca87c.appendChild(_0x5d6de7);
  });
  _0x1af6d3.appendChild(_0x5ca87c);
  const _0x2a934b = _0x2880db.createElement("div");
  _0x2a934b.id = "modalContainer";
  const _0x4d7696 = _0x2880db.createElement("div");
  _0x4d7696.id = "overlay";
  _0x2a934b.appendChild(_0x4d7696);
  const _0x16d2b8 = _0x2880db.createElement("div");
  _0x16d2b8.id = "modal";
  _0x16d2b8.innerHTML = "\n        <h2 style=\"margin: 20px;\">请选择导出日期</h2>\n        <div class=\"func-btn-container\">\n            <input autocomplete=\"off\" id=\"dateInput\" placeholder=\"请选择日期\" \n                style=\"height: 50px; display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin: 10px; width: 95%;\">\n        </div>\n        <button id=\"closeModal\" class=\"btn\">关闭</button>\n    ";
  _0x2a934b.appendChild(_0x16d2b8);
  _0x1af6d3.appendChild(_0x2a934b);
  _0x2880db.documentElement.appendChild(_0x1af6d3);
  _0x4d9b5e.open();
  _0x4d9b5e.write(_0x2880db.documentElement.outerHTML);
  _0x4d9b5e.close();
  _0x36ff2a.onload = function () {
    _0x36ff2a.contentWindow.document.querySelector("#exportShippedToday").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "exportShippedToday"
      }, _0x5e0700 => {});
    });
    _0x36ff2a.contentWindow.document.querySelector("#exportShippedHistory").addEventListener("click", function () {
      _0x36ff2a.contentWindow.document.querySelector("#dateInput") ? _0x36ff2a.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x22c642 = _0x36ff2a.contentWindow.document.getElementById("modalContainer");
      const _0x54b9e5 = _0x36ff2a.contentWindow.document.getElementById("closeModal"),
        _0x39e372 = _0x36ff2a.contentWindow.document.getElementById("modal"),
        _0x310349 = _0x36ff2a.contentWindow.document.getElementById("overlay");
      _0x39e372.style.display = "block";
      _0x310349.style.display = "block";
      _0x22c642.style.display = "block";
      var _0x2b07b6 = _0x36ff2a.contentWindow.document.querySelector("#dateInput");
      _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup") ? _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x3d06c1(_0x2b07b6, _0x36ff2a.contentWindow.document, _0x48dc79);
      }, 200);
      _0x2b07b6.style.display = "block";
      _0x54b9e5.addEventListener("click", () => {
        _0x39e372.style.display = "none";
        _0x310349.style.display = "none";
        _0x22c642.style.display = "none";
      });
      _0x310349.addEventListener("click", () => {
        _0x39e372.style.display = "none";
        _0x310349.style.display = "none";
        _0x22c642.style.display = "none";
      });
    });
    _0x36ff2a.contentWindow.document.querySelector("#exportSalesHistoryAll").addEventListener("click", function () {
      {
        _0x36ff2a.contentWindow.document.querySelector("#dateInput") ? _0x36ff2a.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x3f8012 = _0x36ff2a.contentWindow.document.getElementById("modalContainer");
        const _0x30df11 = _0x36ff2a.contentWindow.document.getElementById("closeModal"),
          _0x10e0f2 = _0x36ff2a.contentWindow.document.getElementById("modal"),
          _0xea8312 = _0x36ff2a.contentWindow.document.getElementById("overlay");
        _0x10e0f2.style.display = "block";
        _0xea8312.style.display = "block";
        _0x3f8012.style.display = "block";
        var _0x4a9b92 = _0x36ff2a.contentWindow.document.querySelector("#dateInput");
        try {
          _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup") ? _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
          setTimeout(() => {
            new _0x3d06c1(_0x4a9b92, _0x36ff2a.contentWindow.document, _0x29ef52, "twoMonth");
          }, 200);
          _0x4a9b92.style.display = "block";
        } catch (_0x202a43) {
          console.log(_0x202a43);
        }
        _0x30df11.addEventListener("click", () => {
          _0x10e0f2.style.display = "none";
          _0xea8312.style.display = "none";
          _0x3f8012.style.display = "none";
        });
        _0xea8312.addEventListener("click", () => {
          _0x10e0f2.style.display = "none";
          _0xea8312.style.display = "none";
          _0x3f8012.style.display = "none";
        });
      }
    });
    _0x36ff2a.contentWindow.document.querySelector("#exportReturnDetail").addEventListener("click", function () {
      _0x36ff2a.contentWindow.document.querySelector("#dateInput") ? _0x36ff2a.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x481edc = _0x36ff2a.contentWindow.document.getElementById("modalContainer");
      const _0x68caf7 = _0x36ff2a.contentWindow.document.getElementById("closeModal"),
        _0x1ad0d7 = _0x36ff2a.contentWindow.document.getElementById("modal"),
        _0x40e1ec = _0x36ff2a.contentWindow.document.getElementById("overlay");
      _0x1ad0d7.style.display = "block";
      _0x40e1ec.style.display = "block";
      _0x481edc.style.display = "block";
      var _0x38e8b7 = _0x36ff2a.contentWindow.document.querySelector("#dateInput");
      _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup") ? _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x3d06c1(_0x38e8b7, _0x36ff2a.contentWindow.document, _0x50a2fa);
      }, 200);
      _0x38e8b7.style.display = "block";
      _0x68caf7.addEventListener("click", () => {
        _0x1ad0d7.style.display = "none";
        _0x40e1ec.style.display = "none";
        _0x481edc.style.display = "none";
      });
      _0x40e1ec.addEventListener("click", () => {
        _0x1ad0d7.style.display = "none";
        _0x40e1ec.style.display = "none";
        _0x481edc.style.display = "none";
      });
    });
    _0x36ff2a.contentWindow.document.querySelector("#exportConsumerAfterSalesIssues").addEventListener("click", function () {
      _0x36ff2a.contentWindow.document.querySelector("#dateInput") ? _0x36ff2a.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x3869c9 = _0x36ff2a.contentWindow.document.getElementById("modalContainer");
      const _0x486f13 = _0x36ff2a.contentWindow.document.getElementById("closeModal"),
        _0x5526b8 = _0x36ff2a.contentWindow.document.getElementById("modal"),
        _0x627f45 = _0x36ff2a.contentWindow.document.getElementById("overlay");
      _0x5526b8.style.display = "block";
      _0x627f45.style.display = "block";
      _0x3869c9.style.display = "block";
      var _0x224ddc = _0x36ff2a.contentWindow.document.querySelector("#dateInput"),
        _0x5ac574 = flatpickr(_0x224ddc, {
          "locale": "zh",
          "mode": "range",
          "dateFormat": "Y-m-d",
          "closeOnSelect": false,
          "appendTo": _0x3869c9,
          "maxDate": new Date(),
          "onChange": function (_0xe8c5ef) {
            if (_0xe8c5ef.length == 1) {
              {
                const _0x30a5fd = _0xe8c5ef[0],
                  _0x235309 = new Date(_0x30a5fd.getTime() + 2678400000),
                  _0xe6bc78 = new Date(_0x30a5fd.getTime() - 2678400000);
                this.set("minDate", _0xe6bc78);
                if (_0x235309 > new Date()) {
                  this.set("maxDate", new Date());
                } else {
                  this.set("maxDate", _0x235309);
                }
              }
            } else _0xe8c5ef.length == 2 && (this.set("maxDate", new Date()), this.set("minDate", null));
          },
          "onReady": (_0x1b68c7, _0x23eb1b, _0x43fe71) => {
            {
              const _0x23f24b = _0x36ff2a.contentWindow.document.createElement("button");
              _0x23f24b.textContent = "确定";
              _0x23f24b.style.margin = "10px";
              _0x23f24b.style.padding = "5px 10px";
              _0x23f24b.style.backgroundColor = "#007BFF";
              _0x23f24b.style.color = "white";
              _0x23f24b.style.border = "none";
              _0x23f24b.style.borderRadius = "5px";
              _0x23f24b.style.cursor = "pointer";
              _0x23f24b.style.fontSize = "14px";
              _0x23f24b.style.transition = "background-color 0.3s";
              _0x23f24b.onmouseover = () => _0x23f24b.style.backgroundColor = "#0056b3";
              _0x23f24b.onmouseout = () => _0x23f24b.style.backgroundColor = "#007BFF";
              _0x23f24b.onclick = function () {
                const _0x4d0304 = _0x43fe71.selectedDates;
                if (_0x4d0304.length === 2) {
                  var [_0x4dbed5, _0x3495cc] = _0x4d0304;
                  _0x4dbed5 = flatpickr.formatDate(_0x4dbed5, "Y-m-d") + " 00:00:00";
                  _0x3495cc = flatpickr.formatDate(_0x3495cc, "Y-m-d") + " 23:59:59";
                  var _0x507012 = new Date(_0x4dbed5).getTime(),
                    _0x5475e8 = new Date(_0x3495cc).getTime();
                  _0x43fe71.close();
                  _0x5526b8.style.display = "none";
                  _0x627f45.style.display = "none";
                  _0x3869c9.style.display = "none";
                  chrome.runtime.sendMessage({
                    "type": "exportConsumerAfterSalesIssues",
                    "startDate": _0x507012,
                    "endDate": _0x5475e8
                  }, _0x216449 => {});
                }
              };
              _0x43fe71.calendarContainer.appendChild(_0x23f24b);
            }
          }
        });
      _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup") ? _0x36ff2a.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0x3d06c1(_0x224ddc, _0x36ff2a.contentWindow.document, _0x2fc484, "oneMonth");
      }, 200);
      _0x224ddc.style.display = "block";
      _0x486f13.addEventListener("click", () => {
        _0x5526b8.style.display = "none";
        _0x627f45.style.display = "none";
        _0x3869c9.style.display = "none";
      });
      _0x627f45.addEventListener("click", () => {
        _0x5526b8.style.display = "none";
        _0x627f45.style.display = "none";
        _0x3869c9.style.display = "none";
      });
    });
  };
}
function _0x1ffd7c(_0x42f32c) {
  const _0xbc3459 = _0x42f32c.contentWindow.document,
    _0x393243 = document.implementation.createHTMLDocument("爆单控制台"),
    _0x1ae863 = _0x393243.createElement("head"),
    _0x29d7d4 = _0x393243.createElement("meta");
  _0x29d7d4.setAttribute("charset", "UTF-8");
  _0x1ae863.appendChild(_0x29d7d4);
  const _0x3fce5f = _0x393243.createElement("meta");
  _0x3fce5f.setAttribute("name", "viewport");
  _0x3fce5f.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x1ae863.appendChild(_0x3fce5f);
  const _0x7c2356 = _0x393243.createElement("title");
  _0x7c2356.textContent = "电商控制台";
  _0x1ae863.appendChild(_0x7c2356);
  const _0x2cebb3 = _0x393243.createElement("link");
  _0x2cebb3.setAttribute("rel", "stylesheet");
  _0x2cebb3.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x1ae863.appendChild(_0x2cebb3);
  _0x393243.documentElement.appendChild(_0x1ae863);
  const _0x2044ac = _0x393243.createElement("body"),
    _0x59fbe9 = _0x393243.createElement("div");
  _0x59fbe9.classList.add("content");
  const _0x2aa4f2 = [{
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
  _0x2aa4f2.forEach(_0x4ebe17 => {
    const _0x54cebc = _0x393243.createElement("div");
    _0x54cebc.classList.add("card");
    _0x54cebc.innerHTML = "\n            <h2>" + _0x4ebe17.title + "</h2>\n            <p>" + _0x4ebe17.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x4ebe17.id + "\">使用功能</a>\n        ";
    _0x59fbe9.appendChild(_0x54cebc);
  });
  _0x2044ac.appendChild(_0x59fbe9);
  _0x393243.documentElement.appendChild(_0x2044ac);
  _0xbc3459.open();
  _0xbc3459.write(_0x393243.documentElement.outerHTML);
  _0xbc3459.close();
  _0x42f32c.onload = function () {
    _0x42f32c.contentWindow.document.querySelector("#addSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "baodanBoxaddSite"
      }, _0x110d09 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#addPhotoSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "addPhotoSite"
      }, _0x326eb1 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#cancelAllStockList").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "cancelAllStockList"
      }, _0x4f4310 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#applyPriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "applyPriceSync"
      }, _0x361b70 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#urgePriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "urgePriceSync"
      }, _0x265875 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#refusePriceSyncAll").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncAll"
      }, _0x2f34f9 => {});
    });
    _0x42f32c.contentWindow.document.querySelector("#refusePriceSyncDaily").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncDaily"
      }, _0x379863 => {});
    });
  };
}
class _0x3d06c1 {
  constructor(_0x580b11, _0x2b6b67 = document, _0x46c6bd = () => {}, _0x571de8 = "now") {
    this.inputElement = _0x580b11;
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.currentDate = new Date();
    this.displayedMonth = this.currentDate.getMonth();
    this.displayedYear = this.currentDate.getFullYear();
    this.today = new Date();
    this.datePopup = null;
    this.isSelectingStartDate = true;
    this.document = _0x2b6b67;
    this.backFunction = _0x46c6bd;
    this.model = _0x571de8;
    this.inputElement.addEventListener("click", this.togglePopup.bind(this));
    this.document.addEventListener("click", this.closePopup.bind(this));
    this.createDatePopup();
    this.addStyles();
  }
  ["addStyles"]() {
    const _0x2e0867 = {
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
      _0x1ed34c = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "12px"
      },
      _0x2c3cf6 = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "8px"
      },
      _0x226b08 = {
        "backgroundColor": "#ffffff00",
        "color": "#141e26",
        "border": "none",
        "padding": "6px 10px",
        "fontSize": "28px",
        "cursor": "pointer",
        "borderRadius": "6px",
        "transition": "all 0.3s ease-in-out"
      },
      _0x4608e4 = {
        "fontSize": "14px",
        "padding": "6px",
        "border": "1px solid rgb(162, 175, 185)",
        "borderRadius": "6px",
        "backgroundColor": "#fff",
        "color": "#333",
        "cursor": "pointer",
        "transition": "border-color 0.3s ease, background-color 0.3s ease"
      },
      _0x357ea3 = {
        "display": "grid",
        "gridTemplateColumns": "repeat(7, 1fr)",
        "gap": "6px"
      };
    this.applyStyleToElement(this.datePopup, _0x2e0867);
    const _0x5d09f6 = this.datePopup.querySelector(".header");
    this.applyStyleToElement(_0x5d09f6, _0x1ed34c);
    const _0x7989ff = this.datePopup.querySelector(".month-year-select");
    this.applyStyleToElement(_0x7989ff, _0x2c3cf6);
    const _0x2b0df8 = _0x7989ff.querySelectorAll("button");
    _0x2b0df8.forEach(_0x276695 => this.applyStyleToElement(_0x276695, _0x226b08));
    const _0x4bdd51 = _0x7989ff.querySelectorAll("select");
    _0x4bdd51.forEach(_0x4bc644 => this.applyStyleToElement(_0x4bc644, _0x4608e4));
    const _0x3e2bd9 = this.datePopup.querySelector(".calendar");
    this.applyStyleToElement(_0x3e2bd9, _0x357ea3);
  }
  ["applyStyleToElement"](_0x884d8b, _0x5e4510) {
    for (const _0x348fff in _0x5e4510) {
      _0x5e4510.hasOwnProperty(_0x348fff) && (_0x884d8b.style[_0x348fff] = _0x5e4510[_0x348fff]);
    }
  }
  ["createDatePopup"]() {
    if (this.datePopup) return;
    const _0xd79dea = this.document.createElement("div");
    _0xd79dea.classList.add("date-picker-popup");
    const _0x4ddfbd = this.document.createElement("div");
    _0x4ddfbd.classList.add("header");
    const _0x4d5e7c = this.createMonthYearSelect();
    _0x4ddfbd.appendChild(_0x4d5e7c);
    const _0x5097a0 = this.document.createElement("div");
    _0x5097a0.classList.add("calendar");
    _0xd79dea.appendChild(_0x4ddfbd);
    _0xd79dea.appendChild(_0x5097a0);
    this.document.body.appendChild(_0xd79dea);
    this.datePopup = _0xd79dea;
    this.updateCalendar();
    const _0x150a2f = this.inputElement.getBoundingClientRect();
    _0xd79dea.style.position = "absolute";
    _0xd79dea.style.top = _0x150a2f.bottom + window.scrollY + "px";
    _0xd79dea.style.left = _0x150a2f.left + window.scrollX + "px";
  }
  ["createMonthYearSelect"]() {
    const _0x545f4c = this.document.createElement("div");
    _0x545f4c.classList.add("month-year-select");
    const _0x32789c = this.document.createElement("button");
    _0x32789c.id = "prev-month-btn";
    _0x32789c.innerText = "<";
    _0x32789c.addEventListener("click", this.changeMonth.bind(this, -1));
    _0x545f4c.appendChild(_0x32789c);
    const _0x3a0a24 = this.document.createElement("select");
    _0x3a0a24.id = "month-select";
    for (let _0x4ad812 = 0; _0x4ad812 < 12; _0x4ad812++) {
      {
        const _0x5d5e6b = this.document.createElement("option");
        _0x5d5e6b.value = _0x4ad812;
        _0x5d5e6b.innerText = this.getMonthName(_0x4ad812);
        if (_0x4ad812 === this.displayedMonth) _0x5d5e6b.selected = true;
        _0x3a0a24.appendChild(_0x5d5e6b);
      }
    }
    _0x3a0a24.addEventListener("change", _0x2ce683 => this.changeMonth(parseInt(_0x2ce683.target.value) - this.displayedMonth));
    _0x545f4c.appendChild(_0x3a0a24);
    const _0x5e879a = this.document.createElement("select");
    _0x5e879a.id = "year-select";
    const _0x400e96 = this.today.getFullYear();
    for (let _0xf7b0d = _0x400e96 - 10; _0xf7b0d <= _0x400e96; _0xf7b0d++) {
      {
        const _0x39aff8 = this.document.createElement("option");
        _0x39aff8.value = _0xf7b0d;
        _0x39aff8.innerText = _0xf7b0d;
        if (_0xf7b0d === this.displayedYear) _0x39aff8.selected = true;
        _0x5e879a.appendChild(_0x39aff8);
      }
    }
    _0x5e879a.addEventListener("change", _0x39fb42 => this.changeYear(parseInt(_0x39fb42.target.value)));
    _0x545f4c.appendChild(_0x5e879a);
    const _0x2be3de = this.document.createElement("button");
    _0x2be3de.id = "next-month-btn";
    _0x2be3de.innerText = ">";
    _0x2be3de.addEventListener("click", this.changeMonth.bind(this, 1));
    _0x545f4c.appendChild(_0x2be3de);
    const _0x862b59 = this.document.createElement("button");
    _0x862b59.id = "dateOK-btn";
    _0x862b59.innerText = "确认";
    _0x862b59.addEventListener("click", this.backFunction.bind(this, this));
    _0x545f4c.appendChild(_0x862b59);
    return _0x545f4c;
  }
  ["getMonthName"](_0xfe8520) {
    const _0x243894 = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return _0x243894[_0xfe8520];
  }
  ["isTodayOrAfter"](_0x2b647b) {
    const _0x5b1da5 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),
      _0x30be18 = new Date(_0x2b647b.getFullYear(), _0x2b647b.getMonth(), _0x2b647b.getDate());
    return _0x30be18 >= _0x5b1da5;
  }
  ["updateCalendar"]() {
    if (!this.datePopup) return;
    const _0x2c92c8 = this.datePopup.querySelector(".calendar");
    if (!_0x2c92c8) return;
    _0x2c92c8.innerHTML = "";
    const _0x364f61 = new Date(this.displayedYear, this.displayedMonth, 1),
      _0x5b68bc = new Date(this.displayedYear, this.displayedMonth + 1, 0),
      _0x1c5789 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    _0x1c5789.forEach(_0x564030 => {
      {
        const _0x45eefc = document.createElement("button");
        _0x45eefc.innerText = _0x564030;
        _0x45eefc.classList.add("weekdays");
        _0x45eefc.style.border = "none";
        _0x45eefc.style.padding = "10px";
        _0x45eefc.style.transition = "all 0.3s ease";
        _0x45eefc.style.textAlign = "center";
        _0x45eefc.style.fontSize = "14px";
        _0x45eefc.style.fontWeight = "bold";
        _0x45eefc.style.color = "#333";
        _0x45eefc.disabled = true;
        _0x45eefc.style.backgroundColor = "#ffffff00";
        _0x45eefc.style.cursor = "not-allowed";
        _0x2c92c8.appendChild(_0x45eefc);
      }
    });
    const _0x44f916 = _0x364f61.getDay();
    for (let _0x5e93c8 = 0; _0x5e93c8 < _0x44f916; _0x5e93c8++) {
      {
        const _0x46cc8c = document.createElement("button");
        _0x46cc8c.classList.add("empty");
        _0x46cc8c.style.border = "none";
        _0x46cc8c.style.padding = "10px";
        _0x46cc8c.style.transition = "all 0.3s ease";
        _0x46cc8c.style.textAlign = "center";
        _0x46cc8c.style.fontSize = "14px";
        _0x46cc8c.style.fontWeight = "bold";
        _0x46cc8c.style.color = "#333";
        _0x46cc8c.style.backgroundColor = "#ffffff00";
        _0x46cc8c.style.cursor = "not-allowed";
        _0x2c92c8.appendChild(_0x46cc8c);
      }
    }
    const _0x2397f5 = _0x5b68bc.getDate();
    for (let _0x96b239 = 1; _0x96b239 <= _0x2397f5; _0x96b239++) {
      const _0x2a1772 = document.createElement("button");
      _0x2a1772.innerText = _0x96b239;
      _0x2a1772.classList.add("bt-d");
      _0x2a1772.style.border = "none";
      _0x2a1772.style.padding = "10px";
      _0x2a1772.style.transition = "all 0.3s ease";
      _0x2a1772.style.textAlign = "center";
      _0x2a1772.style.fontSize = "14px";
      _0x2a1772.style.fontWeight = "bold";
      _0x2a1772.style.color = "#333";
      _0x2a1772.style.backgroundColor = "#ffffff00";
      _0x2a1772.style.cursor = "pointer";
      const _0x387791 = new Date(this.displayedYear, this.displayedMonth, _0x96b239);
      if (this.model == "twoMonth") (this.isTodayOrAfter(_0x387791) || new Date(_0x387791) < new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getMonth() - 2))) && (_0x2a1772.disabled = true, _0x2a1772.style.color = "#b7b7b7", _0x2a1772.style.cursor = "not-allowed");else {
        this.isTodayOrAfter(_0x387791) && (_0x2a1772.disabled = true, _0x2a1772.style.color = "#b7b7b7", _0x2a1772.style.cursor = "not-allowed");
      }
      this.selectedStartDate && this.selectedStartDate.getDate() === _0x96b239 && this.selectedStartDate.getMonth() === this.displayedMonth && this.selectedStartDate.getFullYear() === this.displayedYear && (_0x2a1772.classList.add("range-start"), _0x2a1772.style.backgroundColor = "rgb(86, 159, 247)", _0x2a1772.style.color = "#ffffff", _0x2a1772.style.fontWeight = "bold", _0x2a1772.style.borderRadius = "50px 0px 0px 50px");
      this.selectedEndDate && this.selectedEndDate.getDate() === _0x96b239 && this.selectedEndDate.getMonth() === this.displayedMonth && this.selectedEndDate.getFullYear() === this.displayedYear && (_0x2a1772.classList.add("range-end"), _0x2a1772.style.backgroundColor = "rgb(86, 159, 247)", _0x2a1772.style.color = "#ffffff", _0x2a1772.style.fontWeight = "bold", this.selectedStartDate.toLocaleDateString() == this.selectedEndDate.toLocaleDateString() ? _0x2a1772.style.borderRadius = "50px 50px 50px 50px" : _0x2a1772.style.borderRadius = "0px 50px 50px 0px");
      this.selectedStartDate && this.selectedEndDate && this.selectedStartDate < _0x387791 && _0x387791 < this.selectedEndDate && (_0x2a1772.classList.add("range-between"), _0x2a1772.style.backgroundColor = "hsl(205deg, 20%, 94%)", _0x2a1772.style.color = "#000000", _0x2a1772.style.borderRadius = "8px");
      _0x2a1772.addEventListener("click", this.selectDate.bind(this, _0x96b239));
      _0x2c92c8.appendChild(_0x2a1772);
    }
  }
  ["isToday"](_0x3336cc) {
    return _0x3336cc.getDate() === this.today.getDate() && _0x3336cc.getMonth() === this.today.getMonth() && _0x3336cc.getFullYear() === this.today.getFullYear();
  }
  ["changeMonth"](_0x5e0741) {
    const _0x50ca2c = new Date(),
      _0x37bf34 = _0x50ca2c.getFullYear(),
      _0x2f3624 = _0x50ca2c.getMonth(),
      _0x5aa387 = this.datePopup.querySelector("#prev-month-btn"),
      _0x205506 = this.datePopup.querySelector("#next-month-btn");
    this.displayedMonth += _0x5e0741;
    if (this.displayedMonth < 0) this.displayedMonth = 11, this.displayedYear -= 1;else {
      if (this.displayedMonth > 11) {
        this.displayedMonth = 0;
        this.displayedYear += 1;
      }
    }
    (this.displayedYear > _0x37bf34 || this.displayedYear === _0x37bf34 && this.displayedMonth > _0x2f3624) && (this.displayedYear = _0x37bf34, this.displayedMonth = _0x2f3624);
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x2783f8 = this.datePopup.querySelector("#month-select"),
      _0x5535ea = this.datePopup.querySelector("#year-select");
    _0x2783f8 && (_0x2783f8.value = this.displayedMonth);
    _0x5535ea && (_0x5535ea.value = this.displayedYear);
    if (_0x5aa387 && _0x205506) {
      if (this.displayedYear === _0x37bf34 && this.displayedMonth === _0x2f3624) _0x205506.disabled = true, _0x205506.style.opacity = 0.5, _0x205506.style.cursor = "not-allowed";else {
        _0x205506.disabled = false;
        _0x205506.style.opacity = 1;
        _0x205506.style.cursor = "pointer";
      }
      _0x5aa387.disabled = false;
    }
  }
  ["changeYear"](_0x2f6ac2) {
    const _0x520f1c = new Date(),
      _0x36e4fa = _0x520f1c.getFullYear(),
      _0x2c1691 = _0x520f1c.getMonth();
    _0x2f6ac2 > _0x36e4fa ? this.displayedYear = _0x36e4fa : this.displayedYear = _0x2f6ac2;
    this.displayedYear === _0x36e4fa && this.displayedMonth > _0x2c1691 && (this.displayedMonth = _0x2c1691);
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x5d8dc4 = this.datePopup.querySelector("#month-select"),
      _0x1761d4 = this.datePopup.querySelector("#year-select");
    _0x5d8dc4 && (_0x5d8dc4.value = this.displayedMonth);
    _0x1761d4 && (_0x1761d4.value = this.displayedYear);
    const _0x143f4b = this.datePopup.querySelector("#prev-month-btn"),
      _0xef7a29 = this.datePopup.querySelector("#next-month-btn");
    _0x143f4b && _0xef7a29 && (this.displayedYear === _0x36e4fa && _0x2c1691 === this.displayedMonth ? (_0xef7a29.disabled = true, _0xef7a29.style.opacity = 0.5, _0xef7a29.style.cursor = "not-allowed") : (_0xef7a29.disabled = false, _0xef7a29.style.opacity = 1, _0xef7a29.style.cursor = "pointer"));
  }
  ["updateMonthYearLabel"]() {
    if (!this.datePopup) return;
    const _0x5a076b = this.datePopup.querySelector(".month-year-select span");
    if (!_0x5a076b) return;
    _0x5a076b.innerText = this.getMonthName(this.displayedMonth) + " " + this.displayedYear;
  }
  ["togglePopup"](_0x168e8f) {
    _0x168e8f.stopPropagation();
    if (!this.datePopup) return;
    if (this.datePopup.style.display === "none" || !this.datePopup.style.display) {
      {
        const _0x49778c = this.inputElement.getBoundingClientRect();
        this.datePopup.style.position = "absolute";
        this.datePopup.style.top = _0x49778c.bottom + window.scrollY + "px";
        this.datePopup.style.left = _0x49778c.left + window.scrollX + "px";
        this.datePopup.style.display = "block";
      }
    } else {
      this.datePopup.style.display = "none";
    }
  }
  ["closePopup"](_0x3e49d5) {
    if (!this.datePopup.contains(_0x3e49d5.target) && !this.inputElement.contains(_0x3e49d5.target) && !_0x3e49d5.target.classList.contains("bt-d")) {
      this.datePopup.style.display = "none";
    }
  }
  ["selectDate"](_0x368b50) {
    if (this.model == "oneMonth") {
      {
        const _0xa84537 = new Date(this.displayedYear, this.displayedMonth, _0x368b50),
          _0x3a1d0f = new Date(this.displayedYear, this.displayedMonth, 1),
          _0x3ba790 = new Date(this.displayedYear, this.displayedMonth + 1, 0);
        if (_0xa84537 < _0x3a1d0f || _0xa84537 > _0x3ba790) return;
        if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0xa84537, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
          {
            this.selectedEndDate = _0xa84537;
            this.isSelectingStartDate = true;
            if (this.selectedStartDate > this.selectedEndDate) {
              const _0x338981 = this.selectedStartDate;
              this.selectedStartDate = this.selectedEndDate;
              this.selectedEndDate = _0x338981;
            }
            const _0x3c00ac = this.selectedStartDate.getMonth(),
              _0x4bb5b1 = this.selectedEndDate.getMonth();
            _0x3c00ac !== _0x4bb5b1 && (this.selectedStartDate = _0xa84537, this.selectedEndDate = null);
          }
        }
        if (this.selectedStartDate && (this.selectedStartDate.getMonth() !== this.displayedMonth || this.selectedStartDate.getFullYear() !== this.displayedYear)) {
          this.selectedStartDate = null;
        }
        if (this.selectedEndDate && (this.selectedEndDate.getMonth() !== this.displayedMonth || this.selectedEndDate.getFullYear() !== this.displayedYear)) {
          this.selectedEndDate = null;
        }
        this.updateCalendar();
        this.updateInputField();
      }
    } else {
      {
        const _0x40412c = new Date(this.displayedYear, this.displayedMonth, _0x368b50);
        if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0x40412c, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
          {
            this.selectedEndDate = _0x40412c;
            this.isSelectingStartDate = true;
            if (this.selectedStartDate > this.selectedEndDate) {
              {
                const _0x465676 = this.selectedStartDate;
                this.selectedStartDate = this.selectedEndDate;
                this.selectedEndDate = _0x465676;
              }
            }
          }
        }
        this.updateCalendar();
        this.updateInputField();
      }
    }
  }
  ["updateInputField"]() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const _0x4a5aeb = {
          "timeZone": "Asia/Shanghai",
          "year": "numeric",
          "month": "2-digit",
          "day": "2-digit"
        },
        _0x5e88e4 = this.selectedStartDate.toLocaleDateString("zh-CN", _0x4a5aeb).replace(/\//g, "-"),
        _0x5ecc04 = this.selectedEndDate.toLocaleDateString("zh-CN", _0x4a5aeb).replace(/\//g, "-");
      this.inputElement.value = _0x5e88e4 + " ~ " + _0x5ecc04;
    }
  }
}
function _0x29ef52(_0x2a20c0) {
  const _0x5b93da = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x37d893 = _0x2a20c0.selectedStartDate ? _0x2a20c0.selectedStartDate.toLocaleDateString("zh-CN", _0x5b93da).replace(/\//g, "-") : "",
    _0x3439d0 = _0x2a20c0.selectedEndDate ? _0x2a20c0.selectedEndDate.toLocaleDateString("zh-CN", _0x5b93da).replace(/\//g, "-") : "";
  _0x37d893 && _0x3439d0 && (_0x2a20c0.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportSalesHistoryAll",
    "startDate": _0x37d893,
    "endDate": _0x3439d0
  }, _0x56ca62 => {}));
}
function _0x48dc79(_0x200d97) {
  const _0x5d0ea4 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x180ce1 = _0x200d97.selectedStartDate ? _0x200d97.selectedStartDate.toLocaleDateString("zh-CN", _0x5d0ea4).replace(/\//g, "-") + " 00:00:00" : "",
    _0x5e36e5 = _0x200d97.selectedEndDate ? _0x200d97.selectedEndDate.toLocaleDateString("zh-CN", _0x5d0ea4).replace(/\//g, "-") + " 23:59:59" : "";
  _0x180ce1 && _0x5e36e5 && (_0x200d97.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportShippedHistory",
    "startDate": _0x180ce1,
    "endDate": _0x5e36e5
  }, _0x560e71 => {}));
}
function _0x50a2fa(_0x40455d) {
  const _0x5c2130 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x571f02 = _0x40455d.selectedStartDate ? _0x40455d.selectedStartDate.toLocaleDateString("zh-CN", _0x5c2130).replace(/\//g, "-") + " 00:00:00" : "",
    _0x2ebaad = _0x40455d.selectedEndDate ? _0x40455d.selectedEndDate.toLocaleDateString("zh-CN", _0x5c2130).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x3df171 = new Date(_0x571f02).getTime(),
    _0x52aa80 = new Date(_0x2ebaad).getTime();
  if (_0x571f02 && _0x2ebaad) {
    _0x40455d.datePopup.style.display = "none";
    chrome.runtime.sendMessage({
      "type": "exportReturnDetail",
      "startDate": _0x3df171,
      "endDate": _0x52aa80
    }, _0x93d620 => {});
  }
}
function _0x2fc484(_0x2b2f99) {
  const _0x40b1f1 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x45b297 = _0x2b2f99.selectedStartDate ? _0x2b2f99.selectedStartDate.toLocaleDateString("zh-CN", _0x40b1f1).replace(/\//g, "-") + " 00:00:00" : "",
    _0x29c367 = _0x2b2f99.selectedEndDate ? _0x2b2f99.selectedEndDate.toLocaleDateString("zh-CN", _0x40b1f1).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x7de7d2 = new Date(_0x45b297).getTime(),
    _0x39f6d6 = new Date(_0x29c367).getTime();
  if (_0x45b297 && _0x29c367) {
    _0x2b2f99.datePopup.style.display = "none";
    chrome.runtime.sendMessage({
      "type": "exportConsumerAfterSalesIssues",
      "startDate": _0x7de7d2,
      "endDate": _0x39f6d6
    }, _0x5e60cb => {});
  }
}
try {
  fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x2ccea1 => _0x2ccea1.arrayBuffer()).then(_0x13aaef => {
    crypto.subtle.digest("SHA-256", _0x13aaef).then(_0x1eff1c => {
      const _0x443257 = Array.from(new Uint8Array(_0x1eff1c)),
        _0x22db17 = _0x443257.map(_0x195e76 => _0x195e76.toString(16).padStart(2, "0")).join("");
      _0x22db17 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
        "codePhone": ["", ""]
      });
    });
  });
} catch (_0x528a25) {}
try {
  fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x51bdb6 => _0x51bdb6.arrayBuffer()).then(_0x288b30 => {
    crypto.subtle.digest("SHA-256", _0x288b30).then(_0x25ddef => {
      const _0x3f8621 = Array.from(new Uint8Array(_0x25ddef)),
        _0xb7dc20 = _0x3f8621.map(_0x7dcda8 => _0x7dcda8.toString(16).padStart(2, "0")).join("");
      _0xb7dc20 == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : !function () {
        chrome.storage.local.set({
          "codePhone": ["", ""]
        });
        window.close();
      }();
    });
  });
} catch (_0x84c693) {}
try {
  fetch(chrome.runtime.getURL("web/img/logo.png")).then(_0x113b40 => _0x113b40.arrayBuffer()).then(_0x6b4323 => {
    crypto.subtle.digest("SHA-256", _0x6b4323).then(_0x38a352 => {
      const _0x11f336 = Array.from(new Uint8Array(_0x38a352)),
        _0x5ecad4 = _0x11f336.map(_0x202c0e => _0x202c0e.toString(16).padStart(2, "0")).join("");
      _0x5ecad4 == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage.local.set({
        "codePhone": ["", ""]
      });
    });
  });
} catch (_0x10a796) {}
"use strict";
(function () {
  var _0x15c89a = function (_0x4038c1, _0x37748b, _0x73cc73) {
      {
        (function () {})();
        for (var _0xe2e850 = _0x37748b.length, _0x478311 = _0xe2e850 - _0x73cc73, _0x57312f = [], _0x304306 = 0; _0x304306 < _0x4038c1.length;) for (var _0xeb1154 = 0, _0x4ae450 = 1, _0x1482b5;;) {
          _0x1482b5 = _0x37748b.indexOf(_0x4038c1[_0x304306++]);
          if (_0xeb1154 += _0x4ae450 * (_0x1482b5 % _0x73cc73), _0x1482b5 < _0x73cc73) {
            _0x57312f.push(_0xeb1154 | 0);
            break;
          }
          _0xeb1154 += _0x73cc73 * _0x4ae450;
          _0x4ae450 *= _0x478311;
        }
        return _0x57312f;
      }
    },
    _0x1419a7 = "xf=9yMgW>1gW-I->GxLyf=9i2gMf=KuM9bk9b=8hy9bi1gvRx=7dJqisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXsI1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXs>1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeRbGxb6gWp>oxgWGxbf=KuMq1kq1=8hyq1w9nkq1=oyigMY9ngMq1Rx9xgWEIgWMIgWkgW=GMngWE>gWRx=tbOq1i29n4=DMh=jVWgMsx9nXgMXT0x2=xxgMsx9n1gMkq1=gVygMY9ngMq1Rx9xgWM>q1AgWq1gWtxTVgWRx=xxq1Rxq1gWeDOX|gXX=xxqyqxqygMbgM9nRx9ngWGxoaf=9i2gMf=KuM9bk9b=8hy9bi1gvRx=G2uqisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXsTX1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXsRX1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeNaGxb6gWp>oxgWGxbGxDef=9i2gMf=KuM9bk9b=8hy9bi1gvRx=mh3qisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXzLW1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXzKW1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeTIGxb6gWp>oxgWGxbSx>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXLr1=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXzDx1=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=SW9xgMMRWqyAgMqygMtxFRxgMRx=xxqyRxqygMeNCxf=KuMgvkgv=qMygvkgv=x2gvi1qi19ui2ghRx=xxqHsxghXqHRx=xxqHsxgh1qHsx9u=K2lghsxqiX9ukgv=9219uYqi9ugvRx9x9bRx9bgMl>NWq1MNW9bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMl>F1q1>o19nf=0dM9bi1gvf=jbb9uMo1ghRx+qHH9ughqHqisxgvXqik9b=VuqiYgvqi9bRx9xqyPqylf=KuMgMkgM=qMygMkgM=x2gMi1qy19bi2gvRx=xxqisxgvXqiRx=xxqisxgv1qisx9b=K2lgvsxqyX9bkgM=9219bYqy9bgMRx9x9nM1gMwqykgM=9329bYqy9bgMRx9x9nl>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXLDX1=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXsGW1=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=49xgMMRWqyAgMqygMtxFFWgMRx=xxqyRxqygMe|GWXNRWX=xxqiqxqigvbgv9bRx9bgMl>|nq1M|n9bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMlf=KuMgMkgM=qMygMkgM=x2gMi1qy19bi2gvRx=xxqisxgvXqiRx=xxqisxgv1qisx9b=K2lgvsxqyX9bkgM=9219bYqy9bgMRx9x9nM1gMwqykgM=9329bYqy9bgMRx9x9nl>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXF711=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXR811=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=gl9xgMMRWqyAgMqygMtxsS1gMRx=xxqyRxqygMeT81f=KuMgvkgv=qMygvkgv=x2gvi1qi19ui2ghRx=xxqHsxghXqHRx=xxqHsxgh1qHsx9u=K2lghsxqiX9ukgv=9219uYqi9ugvRx9x9bRx9bgMl>L2q1ML29bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMl=TV0W71oWz10WsXKxtXSW0W|XG1DWLx|XsXSWBWt171FXNx9Xz1t1Nx71G1|XSW9X|XmWNWg1DXiCx15BWt171FXoWG1c7xtXG1|X7xz14BWBWbtXtXk1bbG11G1b4bcoWkz11oW31oWbG1BWk7x5tXtX|X|XtXG1CxCx5G15kk1Cxz1>>1c>>7xbb>5cc|X3c>7xc7xBW7xbb4BWbG1>7xcbz14ktX41Cx4|X5tX7xBWtXtXCxkCx3cG1bCxCx1CxCxcoW|Xz1|X|X57x3k3|XoWDWFXLxRxoW71G1|XEjXqXLxsX|XSWoW71G1|X9W9X71mW|XmWz1FX|XsXSW71t1z1Lx|X0x0xKx~sW0xG10xLWKXoX4F1zxLx|XSW|Wz1mWDWBW|XsXSWLWDWmWG171LWqXz1t1sX|XTXmWSWKSpGteGteiGX|XFXKxR|IBgp|qCxgDegzmxGDmxq88xqgAKC>LmE151z15G1k>|X5|XBWtXbG1Cx|XG1>>|Xbk>G1CxoWbk|Xbz151z1G1c>btXz15z1|XBWz13|XoWtXk4boWcCxBW>tX>41|X4BW|XSWoW9Xz1t1t1z1zWCWKxBWBW|Xt1DXt1t1z1zWLx|XSWFWjWSXoW9Xt171FX|XLW|XtXRxDWFXLxRxoW71mWSWt1710WEqXmWLxNWSWt1DWmWLxLW|XtXRxDWFXLxRx0W71Lx71EqXmWLxt1KxmWSWDWFX|XqXz1G1NWSWz1t1SWSW71NWSWt1DWmWLxoWt1zWqXSW71FWDWmWSWbDXt1t1z1zWjX71DWmWFXz1qXoW0W71sX|X3LxDWt1|XqX0Wz1oW|XCqn",
    _0x51d8df = "length",
    _0x3afce1 = _0x15c89a(_0x1419a7, "xXW1n2MyblviudhH3VOJ6cZY~-5aQwfk=+EpeI^><UPA4rjzg7mFGotTqRB|SsCD9L8K0N", 46),
    _0x53de41 = _0x3afce1[_0x51d8df];
  function _0x2b72a6(_0x7f3968) {
    return _0x7f3968.c[1];
  }
  for (var _0x1bd98d = "", _0x176d49 = _0x53de41 + (_0x1bd98d + true)[_0x51d8df], _0x25aaf8 = {
      "h": ""
    }, _0x36eb8b = 0; _0x36eb8b < 28; _0x36eb8b++) _0x1bd98d += String.fromCharCode(97 + Math.floor(26 * Math.random()));
  var _0x5214db = window,
    _0x46e49d = _0x5214db.Promise;
  function _0x47ef31(_0x39fc3d) {
    return _0x3afce1[_0x39fc3d.c[0]++] >> 5;
  }
  function _0x4dfa99() {
    var _0x5749ff = [1, {
      "b": _0x5214db,
      "l": null,
      "k": [],
      "c": [0],
      "f": undefined
    }, undefined];
    return {
      "c": _0x5749ff,
      "d": undefined
    };
  }
  function _0x374d5e(_0x35569d, _0x1fa1f5) {
    for (;;) {
      var _0x4b1f91 = _0x35569d.c[1];
      if (!_0x4b1f91) throw _0x1fa1f5;
      if (_0x4b1f91.j) {
        _0x35569d.d = {
          "e": _0x1fa1f5
        };
        _0x35569d.c[0] = _0x4b1f91.j;
        return;
      }
      _0x35569d.c = _0x4b1f91.c;
    }
  }
  var _0x426a24 = _0x4dfa99();
  function _0xed651(_0x24f60c, _0x1edf50) {
    _0x24f60c.c[_0x47ef31(_0x24f60c)] = _0x1edf50;
  }
  var _0x541a88 = function (_0xdb86e9, _0x5ef49e, _0x5b7ea1, _0x23fbd6) {
      var _0x56f645 = _0xdb86e9[_0x5ef49e[0]++];
      if (_0x56f645 & 1) return _0x56f645 >> 1;
      if (_0x56f645 === _0x5b7ea1[3]) {
        {
          if (_0x23fbd6 != null && _0x23fbd6.i) return _0x23fbd6.i(_0xdb86e9[_0x5ef49e[0]++], _0xdb86e9[_0x5ef49e[0]++]);
          for (var _0x4889de = "", _0x53ddbe = _0xdb86e9[_0x5ef49e[0]++], _0x3b43cb = 0, _0x3fee82; _0x3b43cb < _0x53ddbe; _0x3b43cb++) {
            _0x3fee82 = _0xdb86e9[_0x5ef49e[0]++];
            _0x4889de += String.fromCharCode(_0x3fee82 & 4294967232 | _0x3fee82 * 39 & 63);
          }
          return _0x4889de;
        }
      }
      if (_0x56f645 === _0x5b7ea1[1]) return true;
      if (_0x56f645 !== _0x5b7ea1[4]) {
        if (_0x56f645 === _0x5b7ea1[2]) {
          var _0x386562 = _0xdb86e9[_0x5ef49e[0]++],
            _0x1e9ccd = _0xdb86e9[_0x5ef49e[0]++],
            _0x528b8c = _0x386562 & 2147483648 ? -1 : 1,
            _0xbc94f2 = (_0x386562 & 2146435072) >> 20,
            _0x301342 = (_0x386562 & 1048575) * Math.pow(2, 32) + (_0x1e9ccd < 0 ? _0x1e9ccd + Math.pow(2, 32) : _0x1e9ccd);
          return _0xbc94f2 == 2047 ? _0x301342 ? NaN : _0x528b8c * Infinity : (_0xbc94f2 !== 0 ? _0x301342 += Math.pow(2, 52) : _0xbc94f2++, _0x528b8c * _0x301342 * Math.pow(2, _0xbc94f2 - 1075));
        }
        if (_0x56f645 === _0x5b7ea1[0]) return null;
        if (_0x56f645 === _0x5b7ea1[5]) return false;
        return _0x5ef49e[_0x56f645 >> 5];
      }
    },
    _0x22446d = [8, 14, 24, 32, 40, 22];
  {
    _0x25aaf8.i = function (_0x353e74, _0x2fc010) {
      return "".slice(_0x353e74, _0x353e74 + _0x2fc010);
    };
    var _0x4c830f = _0x3afce1[_0x53de41 + _0x1bd98d.indexOf(".")] ^ _0x176d49,
      _0x575b13 = _0x3afce1.splice(_0x4c830f, _0x3afce1[_0x4c830f + _0x426a24.c[0]] + 2);
    _0x25aaf8.h = _0x541a88(_0x575b13, _0x426a24.c[1].c, _0x22446d);
  }
  function _0x3c9583(_0x1b63a5) {
    return _0x541a88(_0x3afce1, _0x1b63a5.c, _0x22446d, _0x25aaf8);
  }
  function _0x59aad1(_0x5a59ab, _0x2ac654) {
    var _0x12bdd9 = _0x2b72a6(_0x5a59ab);
    _0x12bdd9.g = {
      "e": _0x2ac654
    };
    return _0x12bdd9.a ? _0x5a59ab.c[0] = _0x12bdd9.a : _0x12bdd9.c.length == 1 ? (_0x5a59ab.c[2] = _0x2ac654, null) : (_0x5a59ab.c = _0x12bdd9.c, _0x5a59ab.c[2] = _0x2ac654, undefined);
  }
  var _0x5ea98b = [function (_0x1df2f1, _0x1b7239, _0x214287) {
    _0x214287(_0x1df2f1, undefined);
  }, function (_0x33e1ae, _0x16cf99, _0x422a7b, _0x9d86d4, _0x2db446, _0x38c3a7) {
    {
      var _0x583070 = _0x16cf99(_0x33e1ae),
        _0x321690 = _0x16cf99(_0x33e1ae),
        _0xcca306 = _0x16cf99(_0x33e1ae),
        _0x2f6691 = _0x9d86d4(_0x33e1ae),
        _0x5ad468 = _0x38c3a7[2],
        _0x3e66b8 = _0x38c3a7[3],
        _0x39d4ca = _0x38c3a7[4],
        _0x14fb60 = function () {
          var _0x4eddd3 = _0x5ad468();
          _0x4eddd3.c[3] = arguments;
          for (var _0x3d4634 = 0; _0x3d4634 < arguments.length; _0x3d4634++) _0x4eddd3.c[_0x3d4634 + 4] = arguments[_0x3d4634];
          _0x4eddd3.c[1] = {
            "b": this,
            "c": [0],
            "k": [],
            "f": _0x2f6691,
            "l": _0x14fb60
          };
          _0x4eddd3.c[0] = _0x583070;
          _0x3e66b8(_0x4eddd3);
          return _0x4eddd3.c[2];
        };
      try {
        Object.defineProperty(_0x14fb60, "length", {
          "value": _0x321690
        });
        Object.defineProperty(_0x14fb60, "name", {
          "value": _0xcca306
        });
      } catch (_0x1da1b8) {
        for (var _0x4bda55 = false, _0x473735 = "", _0x19a2c1 = 0; _0x19a2c1 < _0x321690; _0x19a2c1++) _0x4bda55 ? _0x473735 += ",a".concat(_0x19a2c1) : (_0x473735 += "a".concat(_0x19a2c1), _0x4bda55 = true);
        _0x14fb60 = new Function("fn", "return function ".concat(_0xcca306, "(").concat(_0x473735, "){return fn.apply(this, arguments)}"))(_0x14fb60);
      }
      _0x14fb60[_0x39d4ca] = {
        "n": _0x583070,
        "f": _0x2f6691,
        "o": _0x14fb60
      };
      _0x422a7b(_0x33e1ae, _0x14fb60);
    }
  }, function (_0x33d0fc, _0xb05bf, _0x1b740b, _0x2a8082, _0xa2fb55, _0x2595e4) {
    var _0x14150f = _0xa2fb55[1];
    _0x1b740b(_0x33d0fc, _0x14150f[0]);
  }, function (_0x1c9697, _0x17909b, _0x4e78dc) {
    _0x4e78dc(_0x1c9697, {});
  }, function (_0x54938e, _0x29d116, _0x449c46, _0x18e777, _0xf74242, _0x43831b) {
    var _0x474414 = _0x43831b[0],
      _0x4701fc = _0x43831b[1];
    if (_0x54938e.d) _0x4701fc(_0x54938e, _0x54938e.d.e);else {
      {
        var _0x22ea18 = _0x18e777(_0x54938e);
        return _0x22ea18 != null && _0x22ea18.g && _0x474414(_0x54938e, _0x22ea18.g.e);
      }
    }
  }, function (_0x1034dd, _0x3dbbfa, _0x22b13a) {
    var _0x9997be = _0x3dbbfa(_0x1034dd),
      _0x488ced = [];
    for (var _0x26668d in _0x9997be) _0x488ced.push(_0x26668d);
    _0x22b13a(_0x1034dd, _0x488ced);
  }, function (_0x116233, _0x82fa37, _0x71c608, _0x18ccaf) {
    {
      for (var _0x32e73d = _0x82fa37(_0x116233), _0x33d5de = _0x18ccaf(_0x116233); _0x33d5de; _0x33d5de = _0x33d5de.f) if (_0x32e73d in _0x33d5de.k) {
        {
          _0x71c608(_0x116233, _0x33d5de.k[_0x32e73d]);
          return;
        }
      }
      throw "ball";
    }
  }, function (_0x28e74f, _0x152fa5) {
    var _0x45db45 = _0x152fa5(_0x28e74f);
    _0x28e74f.c[1].a = _0x45db45;
  }, function (_0x13aa18, _0x4fd6a9, _0x3125fc) {
    _0x3125fc(_0x13aa18, !_0x4fd6a9(_0x13aa18));
  }, function (_0x3b1629, _0x1bd348, _0x27e035, _0x3bda8e, _0x31b4f0, _0x5e8be2) {
    var _0x50ae32 = _0x5e8be2[0];
    return _0x50ae32(_0x3b1629, undefined);
  }, function (_0xa6c5b8, _0x3bd82c, _0xd47a0e, _0x37352f, _0x2db683, _0x135b5d) {
    {
      var _0x1a1ecd = _0x135b5d[1],
        _0x4690b6 = _0x3bd82c(_0xa6c5b8);
      _0x1a1ecd(_0xa6c5b8, _0x4690b6);
    }
  }, function (_0x2a2124, _0x460eef, _0x308075) {
    _0x308075(_0x2a2124, Array(_0x460eef(_0x2a2124)));
  }, function (_0x3c16c7, _0x2f14ec, _0x1057cf) {
    _0x1057cf(_0x3c16c7, _0x2f14ec(_0x3c16c7) < _0x2f14ec(_0x3c16c7));
  }, function (_0x24f433, _0x2922a2, _0x3f6a6a) {
    _0x3f6a6a(_0x24f433, _0x2922a2(_0x24f433) === _0x2922a2(_0x24f433));
  }, function (_0x16c9a8, _0x3553b8, _0x838b94) {
    _0x838b94(_0x16c9a8, _0x3553b8(_0x16c9a8) + _0x3553b8(_0x16c9a8));
  }, function (_0x130b53, _0x3d2545, _0x3b1ce4) {
    {
      var _0x25d61f = _0x3d2545(_0x130b53),
        _0x438c4f = _0x3d2545(_0x130b53),
        _0x739376 = _0x3d2545(_0x130b53);
      _0x3b1ce4(_0x130b53, _0x25d61f(_0x438c4f, _0x739376));
    }
  }, function (_0x189069, _0x26bd39, _0x2b6c2c) {
    _0x2b6c2c(_0x189069, _0x26bd39(_0x189069) >>> _0x26bd39(_0x189069));
  }, function (_0x1f9f04, _0x572482, _0x2dd116) {
    _0x2dd116(_0x1f9f04, _0x572482(_0x1f9f04) != _0x572482(_0x1f9f04));
  }, function (_0x356e70, _0x2c2a7e, _0x26d48a) {
    {
      var _0x2474c1 = _0x2c2a7e(_0x356e70),
        _0x2c4fcd = _0x2c2a7e(_0x356e70);
      _0x26d48a(_0x356e70, _0x2474c1(_0x2c4fcd));
    }
  }, function (_0x1bb990, _0x449073, _0x44c202, _0xbdf3eb, _0xe4afa6, _0x54a04f) {
    var _0x34e5cd = _0xe4afa6[1];
    _0x44c202(_0x1bb990, _0x34e5cd[1]);
  }, function (_0x2b5e3c, _0x4949b3, _0x126ab0) {
    _0x126ab0(_0x2b5e3c, _0x2b5e3c.d && _0x2b5e3c.d.e);
  }, function (_0x576129, _0x1e6a7c, _0x16b0b4) {
    var _0x3bc198 = _0x1e6a7c(_0x576129),
      _0x586450 = _0x1e6a7c(_0x576129).slice();
    _0x586450.unshift(undefined);
    _0x16b0b4(_0x576129, new (Function.bind.apply(_0x3bc198, _0x586450))());
  }, function (_0x520f36, _0x333c84, _0x235133) {
    _0x235133(_0x520f36, _0x333c84(_0x520f36) > _0x333c84(_0x520f36));
  }, function (_0x20d814, _0x470549, _0x2983f0, _0x2a62e2, _0x340091, _0x33ddfe) {
    var _0x244ed8 = _0x470549(_0x20d814),
      _0x3e9c91 = _0x470549(_0x20d814),
      _0x280379 = _0x470549(_0x20d814),
      _0x59bf8e = _0x33ddfe[4];
    if (_0x3e9c91[_0x59bf8e] && _0x3e9c91[_0x59bf8e].o === _0x3e9c91) {
      _0x20d814.c = [_0x3e9c91[_0x59bf8e].n, {
        "b": _0x280379,
        "l": _0x3e9c91,
        "c": _0x20d814.c,
        "k": [],
        "f": _0x3e9c91[_0x59bf8e].f
      }, undefined, function () {
        return arguments;
      }.apply(undefined, _0x244ed8)];
      for (var _0x308b22 = 0; _0x308b22 < _0x244ed8.length; _0x308b22++) _0x20d814.c.push(_0x244ed8[_0x308b22]);
    } else _0x20d814.c[2] = _0x3e9c91.apply(_0x280379, _0x244ed8);
  }, function (_0x52e6bc, _0x5a9dd8, _0x37a0f5) {
    _0x37a0f5(_0x52e6bc, _0x5a9dd8(_0x52e6bc) | _0x5a9dd8(_0x52e6bc));
  }, function (_0x3f44fe, _0x2fadef, _0x15d06b, _0x23f524) {
    _0x23f524(_0x3f44fe).k[_0x2fadef(_0x3f44fe)] = undefined;
  }, function (_0x20681c, _0x157b8e, _0xf92c30) {
    _0xf92c30(_0x20681c, ~_0x157b8e(_0x20681c));
  }, function (_0x2147d5, _0x164312, _0x5885a3) {
    _0x5885a3(_0x2147d5, _0x164312(_0x2147d5) % _0x164312(_0x2147d5));
  }, function (_0xeee579, _0xcbbda4, _0x44ff84) {
    _0x44ff84(_0xeee579, _0xcbbda4(_0xeee579) - _0xcbbda4(_0xeee579));
  }, function (_0x5a8daf, _0x572188, _0x39bb4e) {
    _0x39bb4e(_0x5a8daf, []);
  }, function (_0x4a8eab, _0x4b303a, _0x5b7ce1, _0x1ea1eb, _0x32cd81, _0x430cdb) {
    {
      var _0xa0a65c = _0x32cd81[0];
      _0x5b7ce1(_0x4a8eab, _0xa0a65c[_0x4b303a(_0x4a8eab)]);
    }
  }, function (_0x46bcad, _0x2c1592, _0xe11f5) {
    _0xe11f5(_0x46bcad, _0x2c1592(_0x46bcad)[_0x2c1592(_0x46bcad)]);
  }, function (_0x4fab75, _0xe20425, _0x4e6a29) {
    _0x4e6a29(_0x4fab75, _0xe20425(_0x4fab75) * _0xe20425(_0x4fab75));
  }, function (_0x1f43a3, _0x390041, _0x5538e5) {
    _0x5538e5(_0x1f43a3, typeof _0x390041(_0x1f43a3));
  }, function (_0x5b1181, _0x1ca936, _0x29478d, _0x50c814) {
    for (var _0x59b5a5 = _0x1ca936(_0x5b1181), _0x5e65c = _0x1ca936(_0x5b1181), _0x408205 = _0x50c814(_0x5b1181); _0x408205; _0x408205 = _0x408205.f) if (_0x59b5a5 in _0x408205.k) {
      _0x408205.k[_0x59b5a5] = _0x5e65c;
      return;
    }
    throw "ball";
  }, function (_0x5f1734) {
    _0x5f1734.d = undefined;
  }, function (_0x503d9e, _0x4a04d4) {
    _0x503d9e.c[0] = _0x4a04d4(_0x503d9e);
  }, function (_0x24ea59, _0x8ffa5e, _0x205dff) {
    _0x205dff(_0x24ea59, _0x8ffa5e(_0x24ea59) << _0x8ffa5e(_0x24ea59));
  }, function (_0x4ecd19, _0x21b881, _0x283a15) {
    _0x283a15(_0x4ecd19, _0x21b881(_0x4ecd19) instanceof _0x21b881(_0x4ecd19));
  }, function (_0x33a29b, _0x1f87dd, _0x3d9e0d, _0x45aee) {
    _0x45aee(_0x33a29b).k[_0x1f87dd(_0x33a29b)] = _0x1f87dd(_0x33a29b);
  }, function (_0x116d0a, _0x240b0c, _0x168f1d, _0x9b3bb8) {
    var _0x5eab07 = _0x240b0c(_0x116d0a),
      _0xd0908c = _0x9b3bb8(_0x116d0a),
      _0x22830a = _0x116d0a.l;
    _0xd0908c.k[_0x5eab07] = _0x22830a;
  }, function (_0x4e8315, _0x105b5d, _0x5f02af) {
    _0x5f02af(_0x4e8315, _0x105b5d(_0x4e8315) <= _0x105b5d(_0x4e8315));
  }, function (_0x441ea2, _0x270c13, _0x3f7b7e, _0x390405, _0x59e4fe, _0x10a3df) {
    var _0x21a3c0 = _0x10a3df[0],
      _0x52dbab = _0x270c13(_0x441ea2);
    return _0x21a3c0(_0x441ea2, _0x52dbab);
  }, function (_0x3e15d4, _0x1b19de, _0x639737) {
    _0x639737(_0x3e15d4, _0x1b19de(_0x3e15d4) == _0x1b19de(_0x3e15d4));
  }, function (_0x1370e6, _0x5daad2, _0x58981b) {
    _0x58981b(_0x1370e6, new RegExp(_0x5daad2(_0x1370e6), _0x5daad2(_0x1370e6)));
  }, function (_0x5cfb7b, _0x133904) {
    var _0x3c5d4b = _0x133904(_0x5cfb7b);
    _0x133904(_0x5cfb7b) ? _0x5cfb7b.c[0] = _0x3c5d4b : _0x3c5d4b;
  }, function (_0x30012a, _0x45fdd1, _0x46bbc6) {
    _0x46bbc6(_0x30012a, _0x45fdd1(_0x30012a) !== _0x45fdd1(_0x30012a));
  }, function (_0x20dcd8, _0x5890b3, _0x2d6667) {
    _0x2d6667(_0x20dcd8, _0x5890b3(_0x20dcd8) ^ _0x5890b3(_0x20dcd8));
  }, function (_0x22aa8e, _0x467636, _0x5cc3fd) {
    _0x5cc3fd(_0x22aa8e, _0x22aa8e.c[1].b);
  }, function (_0x14820c, _0x28b500, _0x1a0340) {
    _0x1a0340(_0x14820c, _0x28b500(_0x14820c) >> _0x28b500(_0x14820c));
  }, function (_0x2503e6, _0x1603c2, _0x107683) {
    {
      var _0x214736 = _0x1603c2(_0x2503e6),
        _0xbf4b41 = _0x1603c2(_0x2503e6);
      _0x107683(_0x2503e6, delete _0x214736[_0xbf4b41]);
    }
  }, function (_0x13d6f5, _0x27c242, _0x2afdd3) {
    _0x2afdd3(_0x13d6f5, _0x27c242(_0x13d6f5) / _0x27c242(_0x13d6f5));
  }, function (_0x1b7f25, _0x1e8438) {
    {
      var _0x301f73 = _0x1e8438(_0x1b7f25);
      _0x1b7f25.c[1].j = _0x301f73;
    }
  }, function (_0xdcfe74, _0x411fd9, _0x430a6c) {
    _0x430a6c(_0xdcfe74, _0x411fd9(_0xdcfe74) & _0x411fd9(_0xdcfe74));
  }, function (_0x38e6e7, _0x332283) {
    var _0x596728 = _0x332283(_0x38e6e7);
    _0x332283(_0x38e6e7) ? _0x596728 : _0x38e6e7.c[0] = _0x596728;
  }, function (_0x1ffd4d, _0x1c487a, _0x397a63) {
    _0x397a63(_0x1ffd4d, _0x1c487a(_0x1ffd4d) >= _0x1c487a(_0x1ffd4d));
  }, function (_0x3f0ed6, _0x354d6b, _0x405a9e) {
    {
      var _0x465b22 = _0x354d6b(_0x3f0ed6);
      _0x405a9e(_0x3f0ed6, _0x465b22());
    }
  }, function (_0x99145d, _0x5666f0, _0x3dec42) {
    _0x3dec42(_0x99145d, _0x5666f0(_0x99145d));
  }, function (_0x3d7b2a, _0x4b1400, _0x13eebd) {
    _0x13eebd(_0x3d7b2a, _0x4b1400(_0x3d7b2a) in _0x4b1400(_0x3d7b2a));
  }, function (_0x24b378, _0x8f3910, _0x58264b) {
    {
      var _0x3a579c = _0x8f3910(_0x24b378),
        _0x131815 = _0x8f3910(_0x24b378),
        _0x239420 = _0x8f3910(_0x24b378),
        _0x278499 = _0x8f3910(_0x24b378);
      _0x58264b(_0x24b378, _0x3a579c(_0x131815, _0x239420, _0x278499));
    }
  }, function () {
    return null;
  }, function (_0x415ff3, _0x4e2b0d, _0x26c315) {
    _0x4e2b0d(_0x415ff3)[_0x4e2b0d(_0x415ff3)] = _0x4e2b0d(_0x415ff3);
  }];
  function _0x3204bf(_0x5e06eb) {
    return _0x5e06eb.c[_0x3afce1[_0x5e06eb.c[0]++] >> 5];
  }
  var _0x1d02aa = function () {
    'use strict';

    var _0x2bd99f,
      _0x450672 = {},
      _0x3700d2 = Object.prototype,
      _0x1ce98b = _0x3700d2.hasOwnProperty,
      _0xc14679 = "function" == typeof Symbol ? Symbol : {},
      _0x357c71 = _0xc14679.iterator || "@@iterator",
      _0x546ab8 = _0xc14679.asyncIterator || "@@asyncIterator",
      _0x440e02 = _0xc14679.toStringTag || "@@toStringTag";
    function _0x5729d9(_0x18c74b, _0x16e638, _0x921c09) {
      Object.defineProperty(_0x18c74b, _0x16e638, {
        "value": _0x921c09,
        "enumerable": true,
        "configurable": true,
        "writable": true
      });
      return _0x18c74b[_0x16e638];
    }
    try {
      _0x5729d9({}, "");
    } catch (_0x523fee) {
      _0x5729d9 = function (_0x600fc, _0x27f966, _0x2eaa62) {
        return _0x600fc[_0x27f966] = _0x2eaa62;
      };
    }
    function _0x1f54bc(_0x28c771, _0x1a8c8d, _0x26892b, _0x234a50) {
      var _0x2cd744 = _0x1a8c8d && _0x1a8c8d.prototype instanceof _0x317659 ? _0x1a8c8d : _0x317659,
        _0x54f186 = Object.create(_0x2cd744.prototype),
        _0x348442 = new _0x5ca54e(_0x234a50 || []);
      _0x54f186._invoke = function (_0x5ecb27, _0xd74f2d, _0x2bec5d) {
        {
          var _0x2b24a8 = _0x44d983;
          return function (_0x5b2932, _0x4b6ddb) {
            if (_0x2b24a8 === _0x5c84f5) throw new Error("Generator is already running");
            if (_0x2b24a8 === _0x284462) {
              if ("throw" === _0x5b2932) throw _0x4b6ddb;
              return _0x59a6e1();
            }
            for (_0x2bec5d.method = _0x5b2932, _0x2bec5d.arg = _0x4b6ddb;;) {
              {
                var _0xefa102 = _0x2bec5d.delegate;
                if (_0xefa102) {
                  var _0x35f464 = _0x305356(_0xefa102, _0x2bec5d);
                  if (_0x35f464) {
                    if (_0x35f464 === _0x1ca684) continue;
                    return _0x35f464;
                  }
                }
                if ("next" === _0x2bec5d.method) _0x2bec5d.sent = _0x2bec5d._sent = _0x2bec5d.arg;else {
                  if ("throw" === _0x2bec5d.method) {
                    if (_0x2b24a8 === _0x44d983) throw _0x2b24a8 = _0x284462, _0x2bec5d.arg;
                    _0x2bec5d.dispatchException(_0x2bec5d.arg);
                  } else "return" === _0x2bec5d.method && _0x2bec5d.abrupt("return", _0x2bec5d.arg);
                }
                _0x2b24a8 = _0x5c84f5;
                var _0xe3ea6a = _0x1a39b8(_0x5ecb27, _0xd74f2d, _0x2bec5d);
                if ("normal" === _0xe3ea6a.type) {
                  if (_0x2b24a8 = _0x2bec5d.done ? _0x284462 : _0x3c5afd, _0xe3ea6a.arg === _0x1ca684) continue;
                  return {
                    "value": _0xe3ea6a.arg,
                    "done": _0x2bec5d.done
                  };
                }
                "throw" === _0xe3ea6a.type && (_0x2b24a8 = _0x284462, _0x2bec5d.method = "throw", _0x2bec5d.arg = _0xe3ea6a.arg);
              }
            }
          };
        }
      }(_0x28c771, _0x26892b, _0x348442);
      return _0x54f186;
    }
    function _0x1a39b8(_0xfa9415, _0x64b535, _0x187bb9) {
      try {
        return {
          "type": "normal",
          "arg": _0xfa9415.call(_0x64b535, _0x187bb9)
        };
      } catch (_0x1b6fdd) {
        return {
          "type": "throw",
          "arg": _0x1b6fdd
        };
      }
    }
    _0x450672.wrap = _0x1f54bc;
    var _0x44d983 = "suspendedStart",
      _0x3c5afd = "suspendedYield",
      _0x5c84f5 = "executing",
      _0x284462 = "completed",
      _0x1ca684 = {};
    function _0x317659() {}
    function _0x4d3436() {}
    function _0x12a880() {}
    var _0x407cd2 = {};
    _0x407cd2[_0x357c71] = function () {
      return this;
    };
    var _0x52106d = Object.getPrototypeOf,
      _0x49240d = _0x52106d && _0x52106d(_0x52106d(_0xa5f60d([])));
    _0x49240d && _0x49240d !== _0x3700d2 && _0x1ce98b.call(_0x49240d, _0x357c71) && (_0x407cd2 = _0x49240d);
    var _0x516cf4 = _0x12a880.prototype = _0x317659.prototype = Object.create(_0x407cd2);
    function _0x1f6262(_0x581be4) {
      ["next", "throw", "return"].forEach(function (_0x56b424) {
        _0x5729d9(_0x581be4, _0x56b424, function (_0x180ec7) {
          return this._invoke(_0x56b424, _0x180ec7);
        });
      });
    }
    function _0x34a49a(_0x6f963f, _0x2a92df) {
      var _0x435458;
      this._invoke = function (_0x329622, _0x2438fc) {
        {
          function _0xfde863() {
            return new _0x2a92df(function (_0x9f1aa3, _0x313fb8) {
              !function _0x5ce5bd(_0x2d219e, _0x3ed03b, _0x1d6053, _0x189847) {
                var _0x20ff7d = _0x1a39b8(_0x6f963f[_0x2d219e], _0x6f963f, _0x3ed03b);
                if ("throw" !== _0x20ff7d.type) {
                  var _0x39636e = _0x20ff7d.arg,
                    _0x3ced00 = _0x39636e.value;
                  return _0x3ced00 && "object" == typeof _0x3ced00 && _0x1ce98b.call(_0x3ced00, "__await") ? _0x2a92df.resolve(_0x3ced00.__await).then(function (_0x15fe09) {
                    _0x5ce5bd("next", _0x15fe09, _0x1d6053, _0x189847);
                  }, function (_0x35869) {
                    _0x5ce5bd("throw", _0x35869, _0x1d6053, _0x189847);
                  }) : _0x2a92df.resolve(_0x3ced00).then(function (_0x15fdb5) {
                    _0x39636e.value = _0x15fdb5;
                    _0x1d6053(_0x39636e);
                  }, function (_0x346e33) {
                    return _0x5ce5bd("throw", _0x346e33, _0x1d6053, _0x189847);
                  });
                }
                _0x189847(_0x20ff7d.arg);
              }(_0x329622, _0x2438fc, _0x9f1aa3, _0x313fb8);
            });
          }
          return _0x435458 = _0x435458 ? _0x435458.then(_0xfde863, _0xfde863) : _0xfde863();
        }
      };
    }
    function _0x305356(_0xa4cd81, _0x15200e) {
      var _0x1b8cd1 = _0xa4cd81.iterator[_0x15200e.method];
      if (_0x1b8cd1 === _0x2bd99f) {
        if (_0x15200e.delegate = null, "throw" === _0x15200e.method) {
          if (_0xa4cd81.iterator.return && (_0x15200e.method = "return", _0x15200e.arg = _0x2bd99f, _0x305356(_0xa4cd81, _0x15200e), "throw" === _0x15200e.method)) return _0x1ca684;
          _0x15200e.method = "throw";
          _0x15200e.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return _0x1ca684;
      }
      var _0x131d69 = _0x1a39b8(_0x1b8cd1, _0xa4cd81.iterator, _0x15200e.arg);
      if ("throw" === _0x131d69.type) return _0x15200e.method = "throw", _0x15200e.arg = _0x131d69.arg, _0x15200e.delegate = null, _0x1ca684;
      var _0x21d850 = _0x131d69.arg;
      return _0x21d850 ? _0x21d850.done ? (_0x15200e[_0xa4cd81.resultName] = _0x21d850.value, _0x15200e.next = _0xa4cd81.nextLoc, "return" !== _0x15200e.method && (_0x15200e.method = "next", _0x15200e.arg = _0x2bd99f), _0x15200e.delegate = null, _0x1ca684) : _0x21d850 : (_0x15200e.method = "throw", _0x15200e.arg = new TypeError("iterator result is not an object"), _0x15200e.delegate = null, _0x1ca684);
    }
    function _0x478199(_0x33a8fb) {
      var _0xaf9bac = {
        "tryLoc": _0x33a8fb[0]
      };
      1 in _0x33a8fb && (_0xaf9bac.catchLoc = _0x33a8fb[1]);
      2 in _0x33a8fb && (_0xaf9bac.finallyLoc = _0x33a8fb[2], _0xaf9bac.afterLoc = _0x33a8fb[3]);
      this.tryEntries.push(_0xaf9bac);
    }
    function _0x175b72(_0xd59832) {
      {
        var _0x3f1932 = _0xd59832.completion || {};
        _0x3f1932.type = "normal";
        delete _0x3f1932.arg;
        _0xd59832.completion = _0x3f1932;
      }
    }
    function _0x5ca54e(_0xab5632) {
      this.tryEntries = [{
        "tryLoc": "root"
      }];
      _0xab5632.forEach(_0x478199, this);
      this.reset(true);
    }
    function _0xa5f60d(_0xc8f73a) {
      if (_0xc8f73a) {
        {
          var _0x195288 = _0xc8f73a[_0x357c71];
          if (_0x195288) return _0x195288.call(_0xc8f73a);
          if ("function" == typeof _0xc8f73a.next) return _0xc8f73a;
          if (!isNaN(_0xc8f73a.length)) {
            {
              var _0x51c408 = -1,
                _0x36dc39 = function _0xbda8f8() {
                  {
                    for (; ++_0x51c408 < _0xc8f73a.length;) if (_0x1ce98b.call(_0xc8f73a, _0x51c408)) return _0xbda8f8.value = _0xc8f73a[_0x51c408], _0xbda8f8.done = false, _0xbda8f8;
                    _0xbda8f8.value = _0x2bd99f;
                    _0xbda8f8.done = true;
                    return _0xbda8f8;
                  }
                };
              return _0x36dc39.next = _0x36dc39;
            }
          }
        }
      }
      return {
        "next": _0x59a6e1
      };
    }
    function _0x59a6e1() {
      return {
        "value": _0x2bd99f,
        "done": true
      };
    }
    _0x4d3436.prototype = _0x516cf4.constructor = _0x12a880;
    _0x12a880.constructor = _0x4d3436;
    _0x4d3436.displayName = _0x5729d9(_0x12a880, _0x440e02, "GeneratorFunction");
    _0x450672.isGeneratorFunction = function (_0x3fb93a) {
      var _0x530f6f = "function" == typeof _0x3fb93a && _0x3fb93a.constructor;
      return !!_0x530f6f && (_0x530f6f === _0x4d3436 || "GeneratorFunction" === (_0x530f6f.displayName || _0x530f6f.name));
    };
    _0x450672.mark = function (_0x1ab1c5) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x1ab1c5, _0x12a880) : (_0x1ab1c5.__proto__ = _0x12a880, _0x5729d9(_0x1ab1c5, _0x440e02, "GeneratorFunction"));
      _0x1ab1c5.prototype = Object.create(_0x516cf4);
      return _0x1ab1c5;
    };
    _0x450672.awrap = function (_0x4030f1) {
      return {
        "__await": _0x4030f1
      };
    };
    _0x1f6262(_0x34a49a.prototype);
    _0x34a49a.prototype[_0x546ab8] = function () {
      return this;
    };
    _0x450672.AsyncIterator = _0x34a49a;
    _0x450672.async = function (_0x57a95, _0x2c13fd, _0x25b544, _0x19098a, _0x55cf27) {
      {
        undefined === _0x55cf27 && (_0x55cf27 = Promise);
        var _0x4847e8 = new _0x34a49a(_0x1f54bc(_0x57a95, _0x2c13fd, _0x25b544, _0x19098a), _0x55cf27);
        return _0x450672.isGeneratorFunction(_0x2c13fd) ? _0x4847e8 : _0x4847e8.next().then(function (_0x10715d) {
          return _0x10715d.done ? _0x10715d.value : _0x4847e8.next();
        });
      }
    };
    _0x1f6262(_0x516cf4);
    _0x5729d9(_0x516cf4, _0x440e02, "Generator");
    _0x516cf4[_0x357c71] = function () {
      return this;
    };
    _0x516cf4.toString = function () {
      return "[object Generator]";
    };
    _0x450672.keys = function (_0x5a6faf) {
      var _0x1fa195 = [];
      for (var _0x1aa050 in _0x5a6faf) _0x1fa195.push(_0x1aa050);
      _0x1fa195.reverse();
      return function _0x5c63ec() {
        for (; _0x1fa195.length;) {
          {
            var _0x240dec = _0x1fa195.pop();
            if (_0x240dec in _0x5a6faf) return _0x5c63ec.value = _0x240dec, _0x5c63ec.done = false, _0x5c63ec;
          }
        }
        _0x5c63ec.done = true;
        return _0x5c63ec;
      };
    };
    _0x450672.values = _0xa5f60d;
    _0x5ca54e.prototype = {
      "constructor": _0x5ca54e,
      "reset": function (_0x2425a0) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x2bd99f, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x2bd99f, this.tryEntries.forEach(_0x175b72), !_0x2425a0) {
          for (var _0xe85fde in this) "t" === _0xe85fde.charAt(0) && _0x1ce98b.call(this, _0xe85fde) && !isNaN(+_0xe85fde.slice(1)) && (this[_0xe85fde] = _0x2bd99f);
        }
      },
      "stop": function () {
        {
          this.done = true;
          var _0x25dc2b = this.tryEntries[0].completion;
          if ("throw" === _0x25dc2b.type) throw _0x25dc2b.arg;
          return this.rval;
        }
      },
      "dispatchException": function (_0xfec9e4) {
        if (this.done) throw _0xfec9e4;
        var _0x23071e = this;
        function _0x1e4890(_0x1ca093, _0x23776b) {
          _0x3ad5bb.type = "throw";
          _0x3ad5bb.arg = _0xfec9e4;
          _0x23071e.next = _0x1ca093;
          _0x23776b && (_0x23071e.method = "next", _0x23071e.arg = _0x2bd99f);
          return !!_0x23776b;
        }
        for (var _0x376b51 = this.tryEntries.length - 1; _0x376b51 >= 0; --_0x376b51) {
          var _0x1556ad = this.tryEntries[_0x376b51],
            _0x3ad5bb = _0x1556ad.completion;
          if ("root" === _0x1556ad.tryLoc) return _0x1e4890("end");
          if (_0x1556ad.tryLoc <= this.prev) {
            {
              var _0x413225 = _0x1ce98b.call(_0x1556ad, "catchLoc"),
                _0xdb4e9 = _0x1ce98b.call(_0x1556ad, "finallyLoc");
              if (_0x413225 && _0xdb4e9) {
                if (this.prev < _0x1556ad.catchLoc) return _0x1e4890(_0x1556ad.catchLoc, true);
                if (this.prev < _0x1556ad.finallyLoc) return _0x1e4890(_0x1556ad.finallyLoc);
              } else {
                if (_0x413225) {
                  if (this.prev < _0x1556ad.catchLoc) return _0x1e4890(_0x1556ad.catchLoc, true);
                } else {
                  {
                    if (!_0xdb4e9) throw new Error("try statement without catch or finally");
                    if (this.prev < _0x1556ad.finallyLoc) return _0x1e4890(_0x1556ad.finallyLoc);
                  }
                }
              }
            }
          }
        }
      },
      "abrupt": function (_0x18a38b, _0x365ac5) {
        {
          for (var _0x39dcac = this.tryEntries.length - 1, _0x33e7fa; _0x39dcac >= 0; --_0x39dcac) {
            _0x33e7fa = this.tryEntries[_0x39dcac];
            if (_0x33e7fa.tryLoc <= this.prev && _0x1ce98b.call(_0x33e7fa, "finallyLoc") && this.prev < _0x33e7fa.finallyLoc) {
              {
                var _0x11666f = _0x33e7fa;
                break;
              }
            }
          }
          _0x11666f && ("break" === _0x18a38b || "continue" === _0x18a38b) && _0x11666f.tryLoc <= _0x365ac5 && _0x365ac5 <= _0x11666f.finallyLoc && (_0x11666f = null);
          var _0x1931f1 = _0x11666f ? _0x11666f.completion : {};
          _0x1931f1.type = _0x18a38b;
          _0x1931f1.arg = _0x365ac5;
          return _0x11666f ? (this.method = "next", this.next = _0x11666f.finallyLoc, _0x1ca684) : this.complete(_0x1931f1);
        }
      },
      "complete": function (_0xa18198, _0x26bad6) {
        {
          if ("throw" === _0xa18198.type) throw _0xa18198.arg;
          "break" === _0xa18198.type || "continue" === _0xa18198.type ? this.next = _0xa18198.arg : "return" === _0xa18198.type ? (this.rval = this.arg = _0xa18198.arg, this.method = "return", this.next = "end") : "normal" === _0xa18198.type && _0x26bad6 && (this.next = _0x26bad6);
          return _0x1ca684;
        }
      },
      "finish": function (_0x1481b6) {
        for (var _0x441749 = this.tryEntries.length - 1, _0x5b5c3b; _0x441749 >= 0; --_0x441749) {
          _0x5b5c3b = this.tryEntries[_0x441749];
          if (_0x5b5c3b.finallyLoc === _0x1481b6) return this.complete(_0x5b5c3b.completion, _0x5b5c3b.afterLoc), _0x175b72(_0x5b5c3b), _0x1ca684;
        }
      },
      "catch": function (_0x2fa159) {
        {
          for (var _0x529745 = this.tryEntries.length - 1, _0x1ece88; _0x529745 >= 0; --_0x529745) {
            {
              _0x1ece88 = this.tryEntries[_0x529745];
              if (_0x1ece88.tryLoc === _0x2fa159) {
                var _0x10efb1 = _0x1ece88.completion;
                if ("throw" === _0x10efb1.type) {
                  var _0x1c33b2 = _0x10efb1.arg;
                  _0x175b72(_0x1ece88);
                }
                return _0x1c33b2;
              }
            }
          }
          throw new Error("illegal catch attempt");
        }
      },
      "delegateYield": function (_0x49baf5, _0x1b0c10, _0x1a8063) {
        this.delegate = {
          "iterator": _0xa5f60d(_0x49baf5),
          "resultName": _0x1b0c10,
          "nextLoc": _0x1a8063
        };
        "next" === this.method && (this.arg = _0x2bd99f);
        return _0x1ca684;
      }
    };
    return _0x450672;
  }();
  function _0x31988b(_0x19e368) {
    for (var _0x184441 = [_0x5214db, [_0x46e49d, _0x1d02aa], _0x3afce1], _0x27af46 = [_0x59aad1, _0x374d5e, _0x4dfa99, _0x31988b, _0x1bd98d, _0x3204bf], _0x281ad5;;) {
      {
        _0x281ad5 = _0x5ea98b[_0x3afce1[_0x19e368.c[0]++]];
        try {
          {
            var _0x873cc5 = _0x281ad5(_0x19e368, _0x3c9583, _0xed651, _0x2b72a6, _0x184441, _0x27af46);
            if (_0x873cc5 === null) break;
          }
        } catch (_0x4a36d1) {
          _0x374d5e(_0x19e368, _0x4a36d1);
        }
      }
    }
  }
  _0x31988b(_0x426a24);
})();