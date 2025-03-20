//Thu Mar 20 2025 13:47:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
async function _0x237a6e() {
  await _0x5e3688("[class*=\"elli_outerWrapper\"]", "");
  var _0x4cb39c = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
    _0x502b1c = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    };
  try {
    var _0xf9238f = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
        "method": "POST",
        "headers": _0x502b1c,
        "body": {},
        "credentials": "include"
      }),
      _0x218c36 = await _0xf9238f.json(),
      _0x2c0d9e = _0x218c36.result.companyList[0].malInfoList.find(function (_0x267704) {
        return _0x4cb39c === _0x267704.mallName;
      });
    return _0x2c0d9e ? _0x2c0d9e.mallId : null;
  } catch (_0x201407) {
    throw _0x201407;
  }
}
async function _0x5e3688(_0x15eabb, _0x5590dc) {
  let _0x5b97f7 = 0;
  const _0x2d8dc6 = 30000;
  while (_0x5b97f7 < _0x2d8dc6) {
    let _0x35993e = document.querySelector(_0x15eabb);
    if (_0x35993e && _0x35993e.textContent.includes(_0x5590dc)) return;
    await new Promise(_0x5a443a => setTimeout(_0x5a443a, 1000));
    _0x5b97f7 += 1000;
  }
}
function _0x415eda(_0x42c939) {
  if (_0x42c939.includes("www.temu.com")) return 0;
  history.pushState({
    "page": 1
  }, "title 1", _0x42c939);
  history.back();
}
chrome.storage.local.get("codePhone", function (_0x3ce966) {
  const _0x86641a = _0x3ce966.codePhone;
  _0x86641a && window.location.href.includes("https://seller.kuajingmaihuo.com") && _0x237a6e().then(_0x4b1634 => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x86641a,
      "mallid": _0x4b1634,
      "model": "全局",
      "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
    }, _0x3f1d30 => {
      _0x3f1d30.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x820889) {
        window.location.href.includes("https://seller.kuajingmaihuo.com") && (fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x5ace78 => _0x5ace78.arrayBuffer()).then(_0x13b6cb => {
          crypto.subtle.digest("SHA-256", _0x13b6cb).then(_0x4cb370 => {
            const _0x35cf0c = Array.from(new Uint8Array(_0x4cb370)),
              _0x5decaa = _0x35cf0c.map(_0x5a8417 => _0x5a8417.toString(16).padStart(2, "0")).join("");
            _0x5decaa == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
              "codePhone": ["", ""]
            });
          });
        }), !function () {
          if (!document.getElementById("new-console-button")) {
            const _0x129c9c = document.createElement("div");
            _0x129c9c.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
            _0x129c9c.style.fontFamily = "auto";
            _0x129c9c.style.fontSize = "18px";
            _0x129c9c.style.fontWeight = "600";
            _0x129c9c.style.color = "#fff";
            _0x129c9c.style.textAlign = "center";
            _0x129c9c.style.marginTop = "10px";
            _0x129c9c.style.marginBottom = "8px";
            _0x129c9c.style.cursor = "pointer";
            _0x129c9c.style.whiteSpace = "nowrap";
            _0x129c9c.style.padding = "1px";
            _0x129c9c.style.border = "none";
            _0x129c9c.style.transition = "all 0.3s ease";
            _0x129c9c.style.display = "flex";
            _0x129c9c.style.alignItems = "center";
            _0x129c9c.style.justifyContent = "center";
            _0x129c9c.style.gap = "8px";
            _0x129c9c.id = "new-console-button";
            const _0x20dcb2 = document.createElement("img");
            _0x20dcb2.src = chrome.runtime.getURL("web/img/control.png");
            _0x20dcb2.style.width = "45px";
            _0x20dcb2.style.height = "45px";
            _0x20dcb2.style.objectFit = "contain";
            _0x129c9c.appendChild(_0x20dcb2);
            const _0x582a9d = document.createTextNode("咕噜噜插件控制台");
            _0x129c9c.appendChild(_0x582a9d);
            function _0x34a365() {
              setTimeout(() => {
                {
                  const _0x730199 = _0x1d30d0 ? _0x1d30d0.offsetWidth : 0;
                  _0x730199 < 200 ? _0x582a9d.textContent = "" : _0x582a9d.textContent = "咕噜噜插件控制台";
                }
              }, 150);
            }
            var _0x1d30d0 = document.querySelector("[class*=\"index-module__sidebarBox\"][class*=\"bg-shell-theme-mms-sidebarBox\"]");
            if (_0x1d30d0) {
              const _0xb3e23 = new ResizeObserver(() => {
                _0x34a365();
              });
              _0xb3e23.observe(_0x1d30d0);
              _0x34a365();
              _0x1d30d0.appendChild(_0x129c9c);
            }
            _0x129c9c.addEventListener("click", () => {
              var _0x2b6874 = document.getElementById("page-container-box"),
                _0x5cb047 = document.getElementById("overlay-box");
              if (_0x2b6874) setTimeout(() => {
                _0x2b6874.style.transform = "translateY(0)";
                _0x5cb047.style.display = "block";
              }, 100);else {
                const _0x53eb82 = document.createElement("div");
                _0x53eb82.style.position = "fixed";
                _0x53eb82.style.top = "0";
                _0x53eb82.style.left = "0";
                _0x53eb82.style.right = "0";
                _0x53eb82.style.bottom = "0";
                _0x53eb82.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                _0x53eb82.style.zIndex = "999";
                _0x53eb82.style.display = "none";
                _0x53eb82.id = "overlay-box";
                const _0x544d6c = document.createElement("div");
                _0x544d6c.style.position = "fixed";
                _0x544d6c.style.left = "0";
                _0x544d6c.style.right = "0";
                _0x544d6c.style.bottom = "0";
                _0x544d6c.style.top = "35px";
                _0x544d6c.style.backgroundColor = "white";
                _0x544d6c.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
                _0x544d6c.style.transition = "transform 0.3s ease-in-out";
                _0x544d6c.style.transform = "translateY(100%)";
                _0x544d6c.style.zIndex = "1000";
                _0x544d6c.style.fontFamily = "auto";
                _0x544d6c.id = "page-container-box";
                const _0x5d373e = document.createElement("div");
                _0x5d373e.innerHTML = "&times;";
                _0x5d373e.style.position = "absolute";
                _0x5d373e.style.top = "10px";
                _0x5d373e.style.right = "30px";
                _0x5d373e.style.fontSize = "28px";
                _0x5d373e.style.cursor = "pointer";
                _0x5d373e.style.color = "#333";
                _0x5d373e.addEventListener("click", () => {
                  _0x544d6c.style.transform = "translateY(100%)";
                  _0x53eb82.style.display = "none";
                });
                _0x544d6c.appendChild(_0x5d373e);
                const _0x3d7272 = document.createElement("div");
                _0x3d7272.style.display = "flex";
                _0x3d7272.style.alignItems = "center";
                const _0x5ada07 = document.createElement("span");
                _0x5ada07.id = "guluPluginConsole";
                _0x5ada07.textContent = "咕噜噜插件控制台";
                _0x5ada07.style.fontSize = "18px";
                _0x5ada07.style.fontWeight = "bold";
                _0x5ada07.style.margin = "15px 10px 8px 45px";
                const _0x1726b8 = document.createElement("button");
                _0x1726b8.id = "guluBackendCenter";
                _0x1726b8.textContent = "前往咕噜噜后台中心";
                _0x1726b8.style.fontSize = "16px";
                _0x1726b8.style.backgroundColor = "#ff7f50";
                _0x1726b8.style.color = "white";
                _0x1726b8.style.border = "none";
                _0x1726b8.style.borderRadius = "4px";
                _0x1726b8.style.cursor = "pointer";
                _0x1726b8.style.height = "28px";
                _0x1726b8.style.margin = "17px 0px 8px 0px";
                _0x3d7272.appendChild(_0x5ada07);
                _0x3d7272.appendChild(_0x1726b8);
                _0x1726b8.addEventListener("click", () => {
                  chrome.runtime.sendMessage({
                    "action": "open_static_page"
                  });
                });
                _0x544d6c.appendChild(_0x3d7272);
                const _0x54c417 = document.createElement("hr");
                _0x54c417.style.border = "none";
                _0x54c417.style.borderTop = "1px solid #dddddd7d";
                _0x54c417.style.margin = "10px 0";
                _0x544d6c.appendChild(_0x54c417);
                const _0xe9a191 = ["功能面板", "便捷访问", "快速核价助手", "数据导出工具箱", "一键爆单工具箱", "功能说明书"],
                  _0x3550bd = document.createElement("div");
                _0x3550bd.style.display = "flex";
                _0x3550bd.style.justifyContent = "flex-start";
                _0x3550bd.style.padding = "0";
                _0x3550bd.style.margin = "0";
                _0x3550bd.style.borderBottom = "1px solid rgba(221, 221, 221, 0.49)";
                const _0x554c5e = document.createElement("div");
                _0x554c5e.style.position = "absolute";
                _0x554c5e.style.height = "2px";
                _0x554c5e.style.backgroundColor = "#fb7701";
                _0x554c5e.style.bottom = "0";
                _0x554c5e.style.width = "0";
                _0x554c5e.style.left = "0";
                _0xe9a191.forEach((_0x255f49, _0x290804) => {
                  {
                    const _0x249cc8 = document.createElement("div");
                    _0x249cc8.style.fontSize = "14px";
                    _0x249cc8.style.padding = "10px 15px";
                    _0x249cc8.style.cursor = "pointer";
                    _0x249cc8.style.transition = "background-color 0.3s";
                    _0x249cc8.style.flexShrink = "0";
                    const _0xb6f8ae = document.createElement("span");
                    _0xb6f8ae.textContent = _0x255f49;
                    _0x249cc8.appendChild(_0xb6f8ae);
                    _0x249cc8.style.color = "#333";
                    _0x249cc8.addEventListener("mouseenter", () => {
                      _0x249cc8.style.backgroundColor = "#f0f0f0";
                    });
                    _0x249cc8.addEventListener("mouseleave", () => {
                      _0x249cc8.style.backgroundColor = "transparent";
                    });
                    _0x249cc8.addEventListener("click", () => {
                      _0x3550bd.querySelectorAll("div").forEach(_0x32ef4a => {
                        _0x32ef4a.style.color = "#333";
                      });
                      _0x249cc8.style.color = "#fb7701";
                      const _0x10ef8a = _0xb6f8ae.getBoundingClientRect().width;
                      _0x554c5e.style.width = _0x10ef8a + "px";
                      _0x554c5e.style.left = _0x249cc8.offsetLeft + (_0x249cc8.offsetWidth - _0x10ef8a) / 2 + "px";
                      _0x3bbc24(_0x290804);
                    });
                    _0x3550bd.appendChild(_0x249cc8);
                  }
                });
                _0x3550bd.style.position = "relative";
                _0x3550bd.appendChild(_0x554c5e);
                _0x544d6c.appendChild(_0x3550bd);
                document.body.appendChild(_0x544d6c);
                document.body.appendChild(_0x53eb82);
                _0x53eb82.addEventListener("click", () => {
                  _0x544d6c.style.transform = "translateY(100%)";
                  _0x53eb82.style.display = "none";
                });
                setTimeout(() => {
                  _0x544d6c.style.transform = "translateY(0)";
                  _0x53eb82.style.display = "block";
                }, 100);
                const _0xa28e8f = _0x3550bd.querySelector("div");
                if (_0xa28e8f) {
                  _0xa28e8f.style.color = "#fb7701";
                  const _0x16782c = _0xa28e8f.querySelector("span"),
                    _0x31d5a9 = _0x16782c.getBoundingClientRect().width;
                  _0x554c5e.style.width = _0x31d5a9 + "px";
                  _0x554c5e.style.left = _0xa28e8f.offsetLeft + (_0xa28e8f.offsetWidth - _0x31d5a9) / 2 + "px";
                  _0x3bbc24(0);
                }
                function _0x3bbc24(_0x46fb67) {
                  {
                    const _0x4b5e78 = _0x544d6c.querySelector(".page-content");
                    _0x4b5e78 && _0x544d6c.removeChild(_0x4b5e78);
                    "咕噜噜插件控制台".replace(/\\u([\d\w]{4})/gi, (_0xa1ff83, _0x10504a) => String.fromCharCode(parseInt(_0x10504a, 16))) == document.querySelector("#guluPluginConsole").innerText ? "" : !function () {
                      chrome.storage.local.set({
                        "codePhone": ["", ""]
                      });
                      window.location.reload();
                    }();
                    const _0x5bddb5 = document.createElement("iframe");
                    _0x5bddb5.classList.add("page-content");
                    _0x5bddb5.setAttribute("allow", "fullscreen");
                    _0x5bddb5.id = "gululu-iframe-box";
                    _0x5bddb5.style.width = "100%";
                    _0x5bddb5.style.height = "calc(100% - 110px)";
                    _0x5bddb5.style.border = "none";
                    _0x544d6c.appendChild(_0x5bddb5);
                    try {
                      switch (_0x46fb67) {
                        case 0:
                          _0x237a6e().then(function (_0x449f44) {
                            chrome.storage.local.set({
                              "mallId": _0x449f44,
                              "shopname": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
                            });
                            _0x33a352(_0x5bddb5);
                          });
                          break;
                        case 1:
                          _0x32813b(_0x5bddb5);
                          break;
                        case 2:
                          _0x539fc1(_0x5bddb5);
                          break;
                        case 3:
                          _0x4ef374(_0x5bddb5);
                          break;
                        case 4:
                          _0x4d4814(_0x5bddb5);
                          break;
                        case 5:
                          _0x5bddb5.src = "https://cyfc04r33n.feishu.cn/docx/ACsJdwh5ioScPYxFPWicuR5Rnpf?from=from_copylink";
                          break;
                        default:
                      }
                    } catch (_0x48252a) {
                      console.log(_0x48252a);
                    }
                    "前往咕噜噜后台中心".replace(/\\u([\d\w]{4})/gi, (_0x2e3698, _0x53302e) => String.fromCharCode(parseInt(_0x53302e, 16))) == document.querySelector("#guluBackendCenter").innerText ? "" : !function () {
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
      }), _0x415eda(window.location.href));
    });
  });
});
function _0x33a352(_0x5029cb) {
  const _0x44df8d = _0x5029cb.contentWindow.document,
    _0x428ff3 = _0x44df8d.implementation.createHTMLDocument();
  _0x428ff3.documentElement.lang = "zh-CN";
  const _0x36d7ef = _0x428ff3.createElement("head"),
    _0x525056 = _0x428ff3.createElement("meta");
  _0x525056.setAttribute("charset", "UTF-8");
  const _0x199999 = _0x428ff3.createElement("meta");
  _0x199999.setAttribute("name", "viewport");
  _0x199999.setAttribute("content", "width=device-width, initial-scale=1.0");
  const _0x369bb8 = _0x428ff3.createElement("title");
  _0x369bb8.textContent = "功能面板";
  const _0x472104 = _0x428ff3.createElement("link");
  _0x472104.setAttribute("rel", "stylesheet");
  _0x472104.setAttribute("href", chrome.runtime.getURL("web/css/gongn.css"));
  _0x36d7ef.appendChild(_0x525056);
  _0x36d7ef.appendChild(_0x199999);
  _0x36d7ef.appendChild(_0x369bb8);
  _0x36d7ef.appendChild(_0x472104);
  const _0x3c5432 = _0x428ff3.createElement("body"),
    _0x4619fb = _0x428ff3.createElement("div");
  _0x4619fb.classList.add("container");
  const _0x2139e6 = _0x428ff3.createElement("div");
  _0x2139e6.classList.add("column-1");
  const _0x515fbb = _0x428ff3.createElement("h1");
  _0x515fbb.textContent = "我的店铺";
  const _0x22f441 = _0x428ff3.createElement("div");
  _0x22f441.style.cssText = "display: flex; flex-direction: row; align-items: center; justify-content: space-between;";
  const _0x5c5540 = _0x428ff3.createElement("h2");
  _0x5c5540.id = "shopName";
  const _0x3e636c = _0x428ff3.createElement("span");
  _0x3e636c.id = "openShop";
  _0x3e636c.style.cssText = "color:#fb7701; cursor: pointer; font-size: 13px;";
  _0x3e636c.setAttribute("data-url", "");
  _0x3e636c.textContent = "访问店铺";
  _0x22f441.appendChild(_0x5c5540);
  _0x22f441.appendChild(_0x3e636c);
  _0x2139e6.appendChild(_0x515fbb);
  _0x2139e6.appendChild(_0x22f441);
  const _0x27e6fb = _0x428ff3.createElement("div");
  _0x27e6fb.classList.add("column-2");
  const _0x3dd49d = [{
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
  _0x3dd49d.forEach(_0x151365 => {
    {
      const _0x2e7609 = _0x428ff3.createElement("div");
      _0x2e7609.classList.add("card");
      const _0x5eea3e = _0x428ff3.createElement("h2");
      _0x5eea3e.textContent = _0x151365.title;
      const _0x579ce5 = _0x428ff3.createElement("p");
      _0x579ce5.classList.add("description");
      _0x579ce5.textContent = _0x151365.description;
      const _0x3c9066 = _0x428ff3.createElement("label");
      _0x3c9066.classList.add("toggle-switch");
      const _0x25019c = _0x428ff3.createElement("input");
      _0x25019c.type = "checkbox";
      _0x25019c.id = _0x151365.id;
      const _0x57e4f6 = _0x428ff3.createElement("span");
      _0x57e4f6.classList.add("toggle-slider");
      _0x57e4f6.id = _0x151365.id + "Slider";
      _0x3c9066.appendChild(_0x25019c);
      _0x3c9066.appendChild(_0x57e4f6);
      _0x2e7609.appendChild(_0x5eea3e);
      _0x2e7609.appendChild(_0x579ce5);
      _0x2e7609.appendChild(_0x3c9066);
      _0x27e6fb.appendChild(_0x2e7609);
    }
  });
  const _0x44b3c4 = _0x428ff3.createElement("div");
  _0x44b3c4.classList.add("column-3");
  const _0x235c2d = _0x428ff3.createElement("div");
  _0x235c2d.style.cssText = "width: 100%; box-shadow: 1px 1px 5px #11191f; border-radius: 10px;";
  const _0x2c497d = _0x428ff3.createElement("div");
  _0x2c497d.style.cssText = "padding: 10px; font-size: 15px;";
  _0x2c497d.textContent = "如有使用问题，请联系小助理";
  const _0x1d2c53 = _0x428ff3.createElement("img");
  _0x1d2c53.id = "codeimg";
  _0x1d2c53.alt = "产品图片";
  _0x1d2c53.src = chrome.runtime.getURL("web/img/code.jpg");
  _0x1d2c53.style.cssText = "padding: 10px; width: 85%; height: 100px;";
  _0x235c2d.appendChild(_0x2c497d);
  _0x235c2d.appendChild(_0x1d2c53);
  _0x44b3c4.appendChild(_0x235c2d);
  _0x4619fb.appendChild(_0x2139e6);
  _0x4619fb.appendChild(_0x27e6fb);
  _0x4619fb.appendChild(_0x44b3c4);
  _0x3c5432.appendChild(_0x4619fb);
  _0x428ff3.documentElement.appendChild(_0x36d7ef);
  _0x428ff3.documentElement.appendChild(_0x3c5432);
  _0x44df8d.open();
  _0x44df8d.write(_0x428ff3.documentElement.outerHTML);
  _0x44df8d.close();
  _0x5029cb.onload = function () {
    const _0x15278a = _0x5029cb.contentWindow.document.querySelector("#openShop"),
      _0x432ebb = _0x5029cb.contentWindow.document.getElementById("toggleSwitch"),
      _0x9d491c = _0x5029cb.contentWindow.document.getElementById("toggleSwitch1"),
      _0x40fd17 = _0x5029cb.contentWindow.document.getElementById("temuClearSwitch"),
      _0x9217ac = _0x5029cb.contentWindow.document.getElementById("noticeSwitch"),
      _0x2727a1 = _0x5029cb.contentWindow.document.getElementById("removeWatermarkSwitch"),
      _0x4b7ad7 = _0x5029cb.contentWindow.document.getElementById("salerManageSwitch");
    _0x15278a.addEventListener("click", function () {
      {
        var _0x2928b3 = this.getAttribute("data-url");
        window.open(_0x2928b3);
      }
    });
    chrome.storage.local.get(["toggleState", "toggleState1", "temuClearSwitch", "noticeSwitch", "removeWatermarkSwitch", "salerManageSwitch"], function (_0x5b8274) {
      _0x432ebb.checked = _0x5b8274.toggleState || false;
      _0x9d491c.checked = _0x5b8274.toggleState1 || false;
      _0x40fd17.checked = _0x5b8274.temuClearSwitch || false;
      _0x9217ac.checked = _0x5b8274.noticeSwitch || false;
      _0x2727a1.checked = _0x5b8274.removeWatermarkSwitch || false;
      _0x4b7ad7.checked = _0x5b8274.salerManageSwitch || false;
    });
    function _0x25f696() {
      chrome.storage.local.set({
        "toggleState": _0x432ebb.checked,
        "toggleState1": _0x9d491c.checked,
        "temuClearSwitch": _0x40fd17.checked,
        "noticeSwitch": _0x9217ac.checked,
        "removeWatermarkSwitch": _0x2727a1.checked,
        "salerManageSwitch": _0x4b7ad7.checked
      });
    }
    _0x432ebb.addEventListener("change", _0x25f696);
    _0x9d491c.addEventListener("change", _0x25f696);
    _0x40fd17.addEventListener("change", _0x25f696);
    _0x9217ac.addEventListener("change", _0x25f696);
    _0x2727a1.addEventListener("change", _0x25f696);
    _0x4b7ad7.addEventListener("change", _0x25f696);
    chrome.storage.local.get(["mallId", "shopname"], function (_0x11f8a4) {
      {
        const _0x53f6cd = _0x11f8a4.mallId,
          _0x55f4f5 = _0x11f8a4.shopname,
          _0x323039 = _0x5029cb.contentWindow.document.querySelector("#openShop"),
          _0x31a44e = _0x5029cb.contentWindow.document.querySelector("#shopName");
        _0x31a44e.innerHTML = _0x55f4f5;
        _0x323039.setAttribute("data-url", "https://www.temu.com/mall.html?mall_id=" + _0x53f6cd);
      }
    });
  };
}
function _0x32813b(_0x18ca31) {
  const _0x1e3e59 = _0x18ca31.contentWindow.document,
    _0xeb3a08 = document.implementation.createHTMLDocument("便捷访问"),
    _0x4cadc9 = _0xeb3a08.createElement("head"),
    _0x393e67 = _0xeb3a08.createElement("body"),
    _0xa20f0d = _0xeb3a08.createElement("meta");
  _0xa20f0d.setAttribute("charset", "UTF-8");
  _0x4cadc9.appendChild(_0xa20f0d);
  const _0x498b77 = _0xeb3a08.createElement("meta");
  _0x498b77.setAttribute("name", "viewport");
  _0x498b77.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x4cadc9.appendChild(_0x498b77);
  const _0x5e8dea = _0xeb3a08.createElement("title");
  _0x5e8dea.textContent = "便捷访问";
  _0x4cadc9.appendChild(_0x5e8dea);
  const _0x389d35 = _0xeb3a08.createElement("link");
  _0x389d35.setAttribute("rel", "stylesheet");
  _0x389d35.setAttribute("href", chrome.runtime.getURL("web/css/quickAccess.css"));
  _0x4cadc9.appendChild(_0x389d35);
  _0xeb3a08.documentElement.appendChild(_0x4cadc9);
  const _0x3b8812 = _0xeb3a08.createElement("div");
  _0x3b8812.classList.add("container");
  _0x3b8812.id = "buttons";
  _0x393e67.appendChild(_0x3b8812);
  _0xeb3a08.documentElement.appendChild(_0x393e67);
  _0x1e3e59.open();
  _0x1e3e59.write(_0xeb3a08.documentElement.outerHTML);
  _0x1e3e59.close();
  _0x18ca31.onload = function () {
    const _0x1c7cf8 = {
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
      _0x4fd435 = _0x18ca31.contentWindow.document.getElementById("buttons");
    for (const [_0x54bb26, [_0x42d516, _0x54aec1]] of Object.entries(_0x1c7cf8)) {
      const _0x4d990b = _0x18ca31.contentWindow.document.createElement("div");
      _0x4d990b.classList.add("button-container");
      const _0x28479c = _0x18ca31.contentWindow.document.createElement("a");
      _0x28479c.href = _0x42d516;
      _0x28479c.target = "_blank";
      const _0x290bb9 = _0x18ca31.contentWindow.document.createElement("img");
      _0x290bb9.src = _0x54aec1;
      _0x290bb9.alt = _0x54bb26;
      _0x28479c.appendChild(_0x290bb9);
      _0x28479c.appendChild(_0x18ca31.contentWindow.document.createTextNode(_0x54bb26));
      _0x4d990b.appendChild(_0x28479c);
      _0x4fd435.appendChild(_0x4d990b);
    }
  };
}
function _0x539fc1(_0x3b0ed1) {
  const _0x4253d1 = _0x3b0ed1.contentWindow.document,
    _0x5e4b1a = document.implementation.createHTMLDocument("原价申报"),
    _0x268800 = _0x5e4b1a.createElement("head"),
    _0x1f9c2f = _0x5e4b1a.createElement("meta");
  _0x1f9c2f.setAttribute("charset", "UTF-8");
  _0x268800.appendChild(_0x1f9c2f);
  const _0x215ac9 = _0x5e4b1a.createElement("meta");
  _0x215ac9.setAttribute("name", "viewport");
  _0x215ac9.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x268800.appendChild(_0x215ac9);
  const _0x2ba973 = _0x5e4b1a.createElement("title");
  _0x2ba973.textContent = "原价申报";
  _0x268800.appendChild(_0x2ba973);
  const _0x4ae304 = _0x5e4b1a.createElement("link");
  _0x4ae304.setAttribute("rel", "stylesheet");
  _0x4ae304.setAttribute("href", chrome.runtime.getURL("web/css/fastPricing.css"));
  _0x268800.appendChild(_0x4ae304);
  _0x5e4b1a.documentElement.appendChild(_0x268800);
  const _0x230dbd = _0x5e4b1a.createElement("body");
  _0x230dbd.setAttribute("style", "background: white;");
  const _0x1de351 = _0x5e4b1a.createElement("div");
  _0x1de351.classList.add("button-container");
  _0x1de351.innerHTML = "\n        <button id=\"refreshButton\">刷新核价数据</button>\n        <button id=\"executeButton\">批量原价申报</button>\n        <button id=\"giveupExecuteButton\">批量放弃调整报价</button>\n        <button class=\"fullscreen-btn\" id=\"fullscreenButton\">放大全屏</button>\n        <span style=\"font-size: 18px;margin-left: 50px;color: cadetblue;\" id=\"gululutip2\">\n            咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。\n        </span>\n    ";
  _0x230dbd.appendChild(_0x1de351);
  const _0x5e5ace = _0x5e4b1a.createElement("div");
  _0x5e5ace.classList.add("table-container");
  _0x5e5ace.innerHTML = "\n        <table class=\"product-table\">\n            <thead>\n                <tr class=\"product-header\">\n                    <th class=\"select-all-cell\">\n                        <input type=\"checkbox\" id=\"selectAllCheckbox\" style=\"width: 18px; height: 18px;\">\n                    </th>\n                    <th>商品图片</th>\n                    <th>商品SKC</th>\n                    <th>商品属性</th>\n                    <th>原申报价格</th>\n                    <th>参考申报价格</th>\n                </tr>\n            </thead>\n            <tbody id=\"products-container\">\n                <!-- 商品数据将动态加载在这里 -->\n            </tbody>\n        </table>\n    ";
  _0x230dbd.appendChild(_0x5e5ace);
  const _0x797c8a = _0x5e4b1a.createElement("div");
  _0x797c8a.classList.add("pagination-container");
  _0x797c8a.innerHTML = "\n        <div class=\"page-info\" id=\"page-info\">第1页/共1页</div>\n        <div>\n            <select id=\"items-per-page\" style=\"margin-left: 10px;\">\n                <option value=\"20\">每页20条</option>\n                <option value=\"50\" selected>每页50条</option>\n                <option value=\"100\">每页100条</option>\n            </select>\n            <button id=\"prevPageBtn\" style=\"margin-left: 10px;\">上一页</button>\n            <button id=\"nextPageBtn\" style=\"margin-left: 10px;\">下一页</button>\n        </div>\n    ";
  _0x230dbd.appendChild(_0x797c8a);
  _0x5e4b1a.documentElement.appendChild(_0x230dbd);
  _0x4253d1.open();
  _0x4253d1.write(_0x5e4b1a.documentElement.outerHTML);
  _0x4253d1.close();
  _0x3b0ed1.onload = function () {
    let _0x350293 = [],
      _0x194abf = 0;
    const _0xc381d6 = _0x3b0ed1.contentWindow.document.getElementById("products-container"),
      _0x5ae14c = _0x3b0ed1.contentWindow.document.getElementById("selectAllCheckbox"),
      _0x313179 = _0x3b0ed1.contentWindow.document.getElementById("executeButton"),
      _0x214108 = _0x3b0ed1.contentWindow.document.getElementById("giveupExecuteButton"),
      _0x5e0dde = _0x3b0ed1.contentWindow.document.getElementById("refreshButton"),
      _0x19a279 = _0x3b0ed1.contentWindow.document.getElementById("prevPageBtn"),
      _0x41e887 = _0x3b0ed1.contentWindow.document.getElementById("nextPageBtn"),
      _0x277249 = _0x3b0ed1.contentWindow.document.getElementById("page-info"),
      _0x24958f = _0x3b0ed1.contentWindow.document.getElementById("items-per-page");
    let _0x59a854 = 1,
      _0x42ebd3 = parseInt(_0x24958f.value);
    "咕噜噜提示：商品核价后，官方状态更新存在约5-10秒的延迟。".replace(/\\u([\d\w]{4})/gi, (_0x1fcdd0, _0x4a41a5) => String.fromCharCode(parseInt(_0x4a41a5, 16))) == _0x3b0ed1.contentWindow.document.querySelector("#gululutip2").innerText ? "" : !function () {
      chrome.storage.local.set({
        "codePhone": ["", ""]
      });
      window.location.reload();
    }();
    async function _0x487884(_0x2c7631 = 1) {
      try {
        chrome.storage.local.get(["mallId"], async function (_0x180320) {
          var _0x5602af = _0x180320.mallId;
          _0x192ed4();
          var _0x29408c = await _0x421e7d(_0x5602af, _0x59a854, _0x42ebd3);
          _0x350293 = await _0x205157(_0x5602af, _0x29408c);
          _0xd9bf4f();
          _0x2c7631 != 1 && _0x1a6593(_0x2c7631);
          var _0x402714 = _0x29408c.result;
          _0x194abf = _0x402714.total;
          _0xc381d6.innerHTML = "";
          const _0xe26c71 = 0,
            _0x37ba7b = _0xe26c71 + _0x42ebd3,
            _0x389ca5 = _0x350293.slice(_0xe26c71, _0x37ba7b);
          _0x389ca5.forEach(_0xd85f1 => {
            _0xd85f1.attributes.forEach((_0x3640ec, _0x2a4e8b) => {
              const _0x58b3ae = _0x3b0ed1.contentWindow.document.createElement("tr");
              if (_0x2a4e8b === 0) {
                const _0x513703 = _0x3b0ed1.contentWindow.document.createElement("td");
                _0x513703.classList.add("checkbox-cell");
                const _0x5d353f = _0x3b0ed1.contentWindow.document.createElement("input");
                _0x5d353f.type = "checkbox";
                _0x5d353f.name = "product-select";
                _0x5d353f.setAttribute("data-skc", _0xd85f1.skc);
                _0x513703.appendChild(_0x5d353f);
                _0x513703.rowSpan = _0xd85f1.attributes.length;
                _0x58b3ae.appendChild(_0x513703);
              }
              if (_0x2a4e8b === 0) {
                {
                  const _0x47ddab = _0x3b0ed1.contentWindow.document.createElement("td"),
                    _0x199118 = _0x3b0ed1.contentWindow.document.createElement("img");
                  _0x199118.src = _0xd85f1.image;
                  _0x199118.alt = "商品图片";
                  _0x47ddab.rowSpan = _0xd85f1.attributes.length;
                  _0x47ddab.appendChild(_0x199118);
                  _0x58b3ae.appendChild(_0x47ddab);
                  const _0x47c5d7 = _0x3b0ed1.contentWindow.document.createElement("td");
                  _0x47c5d7.innerHTML = _0xd85f1.skc;
                  _0x47c5d7.rowSpan = _0xd85f1.attributes.length;
                  _0x58b3ae.appendChild(_0x47c5d7);
                }
              }
              const _0x4d14ba = _0x3b0ed1.contentWindow.document.createElement("td");
              _0x4d14ba.textContent = _0x3640ec[0];
              _0x58b3ae.appendChild(_0x4d14ba);
              const _0x27878a = _0x3b0ed1.contentWindow.document.createElement("td");
              _0x27878a.textContent = _0x3640ec[1];
              _0x58b3ae.appendChild(_0x27878a);
              const _0x334881 = _0x3b0ed1.contentWindow.document.createElement("td");
              _0x334881.textContent = _0x3640ec[2];
              _0x58b3ae.appendChild(_0x334881);
              _0xc381d6.appendChild(_0x58b3ae);
            });
          });
          const _0x3a477d = Math.ceil(_0x194abf / _0x42ebd3);
          _0x277249.textContent = "第 " + _0x59a854 + " 页 / 共 " + _0x3a477d + " 页";
          _0x19a279.disabled = _0x59a854 === 1;
          _0x41e887.disabled = _0x59a854 === _0x3a477d;
          _0x59a854 === _0x3a477d ? (_0x41e887.classList.add("disabled"), _0x41e887.style.backgroundColor = "#c0c0c0", _0x41e887.style.cursor = "not-allowed") : (_0x41e887.classList.remove("disabled"), _0x41e887.style.backgroundColor = "#1e88e5", _0x41e887.style.cursor = "pointer");
          _0x59a854 === 1 ? (_0x19a279.classList.add("disabled"), _0x19a279.style.backgroundColor = "#c0c0c0", _0x19a279.style.cursor = "not-allowed") : (_0x19a279.classList.remove("disabled"), _0x19a279.style.backgroundColor = "#1e88e5", _0x19a279.style.cursor = "pointer");
        });
      } catch (_0x57de4a) {
        console.log(_0x57de4a);
      }
    }
    _0x5ae14c.addEventListener("change", () => {
      {
        const _0x29d16c = _0x3b0ed1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
        _0x29d16c.forEach(_0x385b89 => {
          _0x385b89.checked = _0x5ae14c.checked;
        });
      }
    });
    _0x313179.addEventListener("click", () => {
      var _0x12efa4 = {};
      const _0x2fe139 = _0x3b0ed1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x2fe139.forEach(_0x4aa768 => {
        {
          const _0x263625 = _0x4aa768.getAttribute("data-skc"),
            _0x28468b = _0x350293.find(_0x3f4f82 => parseInt(_0x3f4f82.skc) === parseInt(_0x263625));
          _0x28468b.attributes.forEach(_0x592337 => {
            {
              const _0x50fec8 = _0x592337[4];
              !_0x12efa4[_0x50fec8] && (_0x12efa4[_0x50fec8] = []);
              _0x12efa4[_0x50fec8].push({
                "productSkuId": _0x592337[3],
                "price": parseInt(parseFloat(_0x592337[1]) * 100)
              });
            }
          });
        }
      });
      _0xe627b0(mallid = 1, _0x12efa4);
    });
    _0x214108.addEventListener("click", () => {
      var _0x443afd = {};
      const _0x654381 = _0x3b0ed1.contentWindow.document.querySelectorAll("input[type=\"checkbox\"]:checked:not(#selectAllCheckbox)");
      _0x654381.forEach(_0x32ae87 => {
        const _0x39d2a9 = _0x32ae87.getAttribute("data-skc"),
          _0xab4881 = _0x350293.find(_0x2bb060 => parseInt(_0x2bb060.skc) === parseInt(_0x39d2a9));
        _0xab4881.attributes.forEach(_0x244226 => {
          const _0x3033e0 = _0x244226[4];
          !_0x443afd[_0x3033e0] && (_0x443afd[_0x3033e0] = []);
          _0x443afd[_0x3033e0].push({
            "productSkuId": _0x244226[3],
            "price": parseInt(parseFloat(_0x244226[1]) * 100)
          });
        });
      });
      _0xe627b0(mallid = 1, _0x443afd, 2);
    });
    _0x5e0dde.addEventListener("click", () => {
      _0x59a854 = 1;
      _0x487884();
      _0x5ae14c.checked = false;
    });
    _0x24958f.addEventListener("change", () => {
      _0x42ebd3 = parseInt(_0x24958f.value);
      _0x59a854 = 1;
      _0x487884();
    });
    _0x19a279.addEventListener("click", () => {
      if (_0x59a854 > 1) {
        _0x59a854--;
        _0x487884();
      }
    });
    _0x41e887.addEventListener("click", () => {
      try {
        const _0x199780 = Math.ceil(_0x194abf / _0x42ebd3);
        _0x59a854 < _0x199780 && (_0x59a854++, _0x487884());
      } catch (_0x5a109f) {
        console.log(_0x5a109f);
      }
    });
    _0x487884();
    async function _0x421e7d(_0x3a791f, _0x4c4633, _0x18c65c) {
      const _0x338d13 = new Headers();
      _0x338d13.append("accept", "*/*");
      _0x338d13.append("accept-language", "zh-CN,zh;q=0.9");
      _0x338d13.append("cache-control", "no-cache");
      _0x338d13.append("content-type", "application/json");
      _0x338d13.append("mallid", _0x3a791f);
      const _0x3d63a3 = JSON.stringify({
          "pageSize": _0x18c65c,
          "pageNum": _0x4c4633,
          "priceReviewStatusList": [1],
          "secondarySelectStatusList": [7],
          "supplierTodoTypeList": []
        }),
        _0x2a2f6d = {
          "method": "POST",
          "headers": _0x338d13,
          "body": _0x3d63a3,
          "redirect": "follow"
        };
      var _0x136705 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x2a2f6d),
        _0x4c2e73 = await _0x136705.json();
      return _0x4c2e73;
    }
    let _0x508d6d = {};
    async function _0x205157(_0x4a72f6, _0x3231c7) {
      {
        var _0x950688 = _0x3231c7.result,
          _0x535b9f = _0x950688.dataList,
          _0x432514 = [],
          _0x11e099 = [];
        _0x508d6d = await new Promise(_0x10c7bf => {
          localforage.getItem(_0x4a72f6 + "price", function (_0x1e2152, _0x304de8) {
            if (_0x304de8) {
              const {
                priceCaches: _0x338c73
              } = _0x304de8;
              _0x338c73 ? _0x10c7bf(_0x338c73) : _0x10c7bf({});
            } else _0x10c7bf({});
          });
        });
        for (var _0x4af4ce = 0; _0x4af4ce < _0x535b9f.length; _0x4af4ce++) {
          {
            var _0xa1bba1 = _0x535b9f[_0x4af4ce].skcList;
            for (var _0x2c3217 of _0xa1bba1) {
              var _0x5c32e3 = [],
                _0x5862e5 = _0x2c3217.skcId,
                _0x4578a5 = _0x2c3217.extCode,
                _0x576faa = _0x2c3217.previewImgUrlList[0],
                _0x7092f5 = _0x2c3217.supplierPriceReviewInfoList;
              for (var _0x2f73e2 of _0x7092f5) {
                var _0x40cdee = _0x2f73e2.priceOrderId,
                  _0x1d7ebf = _0x2f73e2.productSkuList,
                  _0x2b1f6f = _0x2f73e2.status;
                parseInt(_0x2b1f6f) == 1 && _0x11e099.push({
                  "mallid": _0x4a72f6,
                  "priceOrderId": _0x40cdee,
                  "productSkuList": _0x1d7ebf,
                  "previewImgUrlList": _0x576faa,
                  "skcId": _0x5862e5,
                  "extCode": _0x4578a5,
                  "attributes": _0x5c32e3,
                  "priceCache": _0x508d6d
                });
              }
            }
          }
        }
        await _0x72cd1c(_0x11e099, 20);
        for (let _0x5309c4 of _0x11e099) {
          _0x432514.push({
            "attributes": _0x5309c4.attributes,
            "image": _0x5309c4.previewImgUrlList,
            "skc": _0x5309c4.skcId + "<hr>货号：" + _0x5309c4.extCode
          });
        }
        const _0x1c2b8c = _0x432514.filter((_0x16d775, _0x3711d8, _0x4bc9d9) => _0x4bc9d9.findIndex(_0x230b9b => _0x230b9b.skc === _0x16d775.skc) === _0x3711d8);
        await localforage.setItem(_0x4a72f6 + "price", {
          "priceCaches": _0x508d6d
        });
        return _0x1c2b8c;
      }
    }
    async function _0x2e2806(_0x762731, _0x18129e, _0x365e9b) {
      try {
        if (_0x365e9b[_0x18129e]) {
          return _0x365e9b[_0x18129e];
        }
        const _0x2d032e = new Headers();
        _0x2d032e.append("accept", "*/*");
        _0x2d032e.append("accept-language", "zh-CN,zh;q=0.9");
        _0x2d032e.append("cache-control", "no-cache");
        _0x2d032e.append("content-type", "application/json");
        _0x2d032e.append("mallid", _0x762731);
        const _0x22dc1a = JSON.stringify({
            "orderId": _0x18129e
          }),
          _0xdb0f72 = {
            "method": "POST",
            "headers": _0x2d032e,
            "body": _0x22dc1a,
            "redirect": "follow"
          };
        var _0x4a661d = await fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/reject-remark", _0xdb0f72),
          _0x59ec5b = await _0x4a661d.json(),
          _0x43ea2c = _0x59ec5b.result;
        if (_0x43ea2c.suggestSupplyPrice) {
          var _0x1fbd57 = (parseInt(_0x43ea2c.suggestSupplyPrice) / 100).toFixed(2) + "元",
            _0x48df91 = (parseInt(_0x43ea2c.supplyPrice) / 100).toFixed(2) + "元";
          _0x365e9b[_0x18129e] = [_0x48df91, _0x1fbd57];
        } else {
          var _0x1fbd57 = _0x43ea2c.rejectRemark,
            _0x48df91 = (parseInt(_0x43ea2c.supplyPrice) / 100).toFixed(2) + "元";
          _0x365e9b[_0x18129e] = [_0x48df91, _0x1fbd57];
        }
      } catch (_0x194597) {
        console.log(_0x194597);
      }
      return [_0x48df91, _0x1fbd57];
    }
    async function _0x72cd1c(_0x443956, _0x579e64) {
      try {
        let _0x58e7ba = [],
          _0x53edad = 0;
        const _0x509c8a = async () => {
            if (_0x53edad < _0x443956.length) {
              const _0x517dfa = _0x443956[_0x53edad++],
                _0x5b33d4 = await _0x2e2806(_0x517dfa.mallid, _0x517dfa.priceOrderId, _0x517dfa.priceCache);
              var _0x37b860 = _0x517dfa.productSkuList.map(_0x39984d => [_0x39984d.productPropertyList.map(_0x22c834 => _0x22c834.value).join("-"), _0x5b33d4[0], _0x5b33d4[1], _0x39984d.skuId, _0x517dfa.priceOrderId]);
              _0x517dfa.attributes.push(..._0x37b860);
            }
          },
          _0x351171 = [];
        for (let _0x15afab = 0; _0x15afab < _0x579e64 && _0x15afab < _0x443956.length; _0x15afab++) {
          _0x351171.push(_0x509c8a());
        }
        await Promise.all(_0x351171);
        while (_0x53edad < _0x443956.length) {
          await _0x509c8a();
        }
        await Promise.all(_0x58e7ba);
      } catch (_0x5199a8) {
        console.log(_0x5199a8);
      }
    }
    async function _0xe627b0(_0x1c7fbe, _0x45e289, _0x40189f = 1) {
      _0x192ed4();
      chrome.storage.local.get(["mallId"], async function (_0x548280) {
        var _0x1d1cb8 = _0x548280.mallId;
        localforage.getItem(_0x1d1cb8 + "price", async function (_0x9b8017, _0x141122) {
          {
            if (_0x141122) {
              const {
                priceCaches: _0x442f93
              } = _0x141122;
              if (_0x442f93) {
                for (let _0x6aa902 in _0x45e289) {
                  delete _0x442f93[_0x6aa902];
                }
                await localforage.setItem(_0x1d1cb8 + "price", {
                  "priceCaches": _0x508d6d
                });
              }
            }
          }
        });
        const _0x49af89 = new Headers();
        _0x49af89.append("accept", "*/*");
        _0x49af89.append("accept-language", "zh-CN,zh;q=0.9");
        _0x49af89.append("cache-control", "no-cache");
        _0x49af89.append("content-type", "application/json");
        _0x49af89.append("mallid", _0x1d1cb8);
        const _0x559f54 = Object.entries(_0x45e289);
        if (_0x40189f == 1) var _0x53782e = async _0x4ed8b3 => {
          {
            const _0x323136 = _0x4ed8b3.map(([_0x4a67f3, _0x250431]) => {
              {
                const _0x3530e7 = JSON.stringify({
                    "supplierResult": 2,
                    "priceOrderId": parseInt(_0x4a67f3),
                    "items": _0x250431,
                    "bargainReasonList": []
                  }),
                  _0x552be6 = {
                    "method": "POST",
                    "headers": _0x49af89,
                    "body": _0x3530e7,
                    "redirect": "follow"
                  };
                return fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price/bargain-no-bom", _0x552be6);
              }
            });
            return Promise.all(_0x323136);
          }
        };else var _0x53782e = async _0x33e78d => {
          const _0x55c96d = _0x33e78d.map(([_0x97da2, _0x86c79e]) => {
            {
              const _0x4c95bd = JSON.stringify({
                  "priceOrderId": parseInt(_0x97da2)
                }),
                _0x1decc8 = {
                  "method": "POST",
                  "headers": _0x49af89,
                  "body": _0x4c95bd,
                  "redirect": "follow"
                };
              return fetch("https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price-review-order/no-bom/review", _0x1decc8);
            }
          });
          return Promise.all(_0x55c96d);
        };
        const _0x57f54f = 10;
        for (let _0x3f0642 = 0; _0x3f0642 < _0x559f54.length; _0x3f0642 += _0x57f54f) {
          {
            const _0x3c3e5a = _0x559f54.slice(_0x3f0642, _0x3f0642 + _0x57f54f);
            await _0x53782e(_0x3c3e5a);
          }
        }
        _0xd9bf4f();
        _0x487884("操作已完成！");
      });
    }
    const _0x4196cd = _0x3b0ed1.contentWindow.document.getElementById("fullscreenButton");
    _0x4196cd.addEventListener("click", () => {
      if (!_0x3b0ed1.contentWindow.document.fullscreenElement) {
        _0x4196cd.innerText = "退出全屏";
        if (_0x3b0ed1.contentWindow.document.documentElement.requestFullscreen) {
          _0x3b0ed1.contentWindow.document.documentElement.requestFullscreen();
        } else {
          if (_0x3b0ed1.contentWindow.document.documentElement.mozRequestFullScreen) _0x3b0ed1.contentWindow.document.documentElement.mozRequestFullScreen();else {
            if (_0x3b0ed1.contentWindow.document.documentElement.webkitRequestFullscreen) _0x3b0ed1.contentWindow.document.documentElement.webkitRequestFullscreen();else _0x3b0ed1.contentWindow.document.documentElement.msRequestFullscreen && _0x3b0ed1.contentWindow.document.documentElement.msRequestFullscreen();
          }
        }
      } else {
        {
          _0x4196cd.innerText = "放大全屏";
          if (_0x3b0ed1.contentWindow.document.exitFullscreen) _0x3b0ed1.contentWindow.document.exitFullscreen();else {
            if (_0x3b0ed1.contentWindow.document.mozCancelFullScreen) _0x3b0ed1.contentWindow.document.mozCancelFullScreen();else {
              if (_0x3b0ed1.contentWindow.document.webkitExitFullscreen) _0x3b0ed1.contentWindow.document.webkitExitFullscreen();else _0x3b0ed1.contentWindow.document.msExitFullscreen && _0x3b0ed1.contentWindow.document.msExitFullscreen();
            }
          }
        }
      }
    });
    function _0x56d1a6() {
      const _0x19a459 = _0x3b0ed1.contentWindow.innerHeight,
        _0x5993a7 = _0x3b0ed1.contentWindow.document.querySelector(".table-container");
      _0x5993a7.style.maxHeight = _0x19a459 - 180 + "px";
    }
    _0x56d1a6();
    window.addEventListener("resize", _0x56d1a6);
    function _0x192ed4(_0x4f596c = 1) {
      {
        var _0x2b9baf = _0x3b0ed1.contentWindow.document.createElement("div");
        _0x2b9baf.id = "loader";
        _0x2b9baf.style.position = "fixed";
        _0x2b9baf.style.top = "0";
        _0x2b9baf.style.left = "0";
        _0x2b9baf.style.width = "100%";
        _0x2b9baf.style.height = "100%";
        _0x2b9baf.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        _0x2b9baf.style.display = "flex";
        _0x2b9baf.style.flexDirection = "column";
        _0x2b9baf.style.justifyContent = "center";
        _0x2b9baf.style.alignItems = "center";
        _0x2b9baf.style.zIndex = "9999";
        var _0x4dee61 = _0x3b0ed1.contentWindow.document.createElement("div");
        _0x4dee61.style.position = "relative";
        _0x4dee61.style.width = "128px";
        _0x4dee61.style.height = "128px";
        for (let _0x2eab6d = 0; _0x2eab6d < 3; _0x2eab6d++) {
          {
            let _0x19a5a7 = _0x3b0ed1.contentWindow.document.createElement("div");
            _0x19a5a7.style.position = "absolute";
            _0x19a5a7.style.width = "128px";
            _0x19a5a7.style.height = "128px";
            _0x19a5a7.style.border = "8px solid transparent";
            _0x19a5a7.style.borderTop = "8px solid #ffffff";
            _0x19a5a7.style.borderRadius = "50%";
            _0x19a5a7.style.animation = "spin 1.2s linear infinite";
            _0x19a5a7.style.animationDelay = _0x2eab6d * 0.4 + "s";
            _0x4dee61.appendChild(_0x19a5a7);
          }
        }
        if (_0x4f596c != 1) {
          var _0x54f538 = _0x3b0ed1.contentWindow.document.createElement("button");
          _0x54f538.textContent = "0";
          _0x54f538.style.position = "absolute";
          _0x54f538.style.top = "50%";
          _0x54f538.style.left = "50%";
          _0x54f538.style.transform = "translate(-50%, -50%)";
          _0x54f538.style.padding = "10px 20px";
          _0x54f538.style.backgroundColor = "rgb(255 255 255 / 0%)";
          _0x54f538.style.border = "none";
          _0x54f538.style.borderRadius = "5px";
          _0x54f538.style.cursor = "pointer";
          _0x54f538.style.height = "70px";
          _0x54f538.style.width = "70px";
          _0x54f538.style.fontSize = "20px";
          _0x54f538.style.color = "#fff";
          var _0x59ab2e = 0,
            _0x154efb = setInterval(function () {
              if (!_0x54f538.isConnected) {
                clearInterval(_0x154efb);
                return;
              }
              _0x59ab2e++;
              _0x54f538.textContent = _0x59ab2e;
            }, 1000);
          _0x4dee61.appendChild(_0x54f538);
        }
        _0x2b9baf.appendChild(_0x4dee61);
        var _0x320278 = _0x3b0ed1.contentWindow.document.createElement("div");
        _0x320278.id = "loader-message";
        _0x320278.style.marginTop = "20px";
        _0x320278.style.color = "#ffffff";
        _0x320278.style.fontSize = "18px";
        _0x320278.innerHTML = "处理中，请等待一会...";
        _0x2b9baf.appendChild(_0x320278);
        _0x3b0ed1.contentWindow.document.body.appendChild(_0x2b9baf);
        var _0x4e9c1a = _0x3b0ed1.contentWindow.document.createElement("style");
        _0x4e9c1a.type = "text/css";
        var _0x4c0364 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
        _0x4e9c1a.innerHTML = _0x4c0364;
        _0x3b0ed1.contentWindow.document.getElementsByTagName("head")[0].appendChild(_0x4e9c1a);
      }
    }
    function _0xd9bf4f() {
      {
        var _0x14e843 = _0x3b0ed1.contentWindow.document.getElementById("loader");
        _0x14e843 && _0x3b0ed1.contentWindow.document.body.removeChild(_0x14e843);
      }
    }
    async function _0x1a6593(_0x47d5ec, _0x3fbea1 = "常规消息", _0x493f55 = 1, _0x24314f = 1, _0x4482d8 = "") {
      if (_0x493f55 == 1 && _0x3fbea1 != "常规消息") var _0x493f55 = await _0x237a6e();
      var _0x8c5a08 = _0x3b0ed1.contentWindow.document.createElement("div");
      _0x8c5a08.classList.add("custom-alert");
      _0x8c5a08.style.position = "fixed";
      _0x8c5a08.style.zIndex = "9999";
      _0x8c5a08.style.top = "50%";
      _0x8c5a08.style.left = "50%";
      _0x8c5a08.style.transform = "translate(-50%, -50%)";
      _0x8c5a08.style.display = "flex";
      _0x8c5a08.style.justifyContent = "center";
      _0x8c5a08.style.alignItems = "center";
      _0x8c5a08.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      _0x8c5a08.style.width = "100%";
      _0x8c5a08.style.height = "100%";
      var _0x4b3687 = _0x3b0ed1.contentWindow.document.createElement("div");
      _0x4b3687.classList.add("custom-alert-content");
      _0x4b3687.style.backgroundColor = "#fff";
      _0x4b3687.style.padding = "20px";
      _0x4b3687.style.borderRadius = "8px";
      _0x4b3687.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
      _0x4b3687.style.maxWidth = "80%";
      _0x4b3687.style.fontSize = "23px";
      _0x4b3687.style.textAlign = "center";
      var _0x56b4f0 = _0x3b0ed1.contentWindow.document.createElement("p");
      _0x56b4f0.innerHTML = _0x47d5ec;
      var _0x13c593 = _0x3b0ed1.contentWindow.document.createElement("button");
      _0x13c593.textContent = "关闭";
      _0x13c593.classList.add("custom-alert-button");
      _0x13c593.style.padding = "10px 20px";
      _0x13c593.style.backgroundColor = "rgb(245 58 58)";
      _0x13c593.style.color = "#fff";
      _0x13c593.style.border = "none";
      _0x13c593.style.cursor = "pointer";
      _0x13c593.style.borderRadius = "4px";
      _0x13c593.style.fontSize = "16px";
      _0x13c593.addEventListener("click", function () {
        _0x8c5a08.remove();
      });
      _0x13c593.addEventListener("mouseenter", function () {
        _0x13c593.style.backgroundColor = "rgb(203 49 49)";
      });
      _0x13c593.addEventListener("mouseleave", function () {
        _0x13c593.style.backgroundColor = "rgb(245 58 58)";
      });
      _0x4b3687.appendChild(_0x56b4f0);
      if (_0x3fbea1 == "常规帮助") {
        var _0x210ef6 = _0x3b0ed1.contentWindow.document.createElement("img");
        _0x210ef6.src = chrome.runtime.getURL("img/code.jpg");
        _0x210ef6.alt = "Alert Image";
        _0x210ef6.style.width = "100px";
        _0x210ef6.style.height = "auto";
        _0x210ef6.style.marginBottom = "15px";
        _0x4b3687.appendChild(_0x210ef6);
        _0x4b3687.appendChild(_0x3b0ed1.contentWindow.document.createElement("hr"));
      } else {
        if (_0x3fbea1 == "可绑定帮助") {
          var _0x32695f = _0x3b0ed1.contentWindow.document.createElement("button");
          _0x32695f.textContent = "确定";
          _0x32695f.classList.add("custom-alert-button");
          _0x32695f.style.padding = "10px 20px";
          _0x32695f.style.backgroundColor = "rgb(67 179 82)";
          _0x32695f.style.color = "#fff";
          _0x32695f.style.border = "none";
          _0x32695f.style.cursor = "pointer";
          _0x32695f.style.borderRadius = "4px";
          _0x32695f.style.fontSize = "16px";
          _0x32695f.style.marginRight = "30px";
          _0x32695f.addEventListener("click", function () {
            _0x8c5a08.style.display = "none";
            _0x192ed4();
            updateShop(_0x493f55, _0x24314f, _0x4482d8).then(_0x3a29cd => {
              _0xd9bf4f();
              location.reload();
            }).catch(_0x369b13 => {
              _0xd9bf4f();
              _0x1a6593("绑定失败，请重试");
              console.log(_0x369b13);
            });
          });
          _0x32695f.addEventListener("mouseenter", function () {
            _0x32695f.style.backgroundColor = "rgb(51 138 62)";
          });
          _0x32695f.addEventListener("mouseleave", function () {
            _0x32695f.style.backgroundColor = "rgb(67 179 82)";
          });
          _0x4b3687.appendChild(_0x3b0ed1.contentWindow.document.createElement("hr"));
          _0x4b3687.appendChild(_0x32695f);
        }
      }
      _0x4b3687.appendChild(_0x13c593);
      _0x8c5a08.appendChild(_0x4b3687);
      _0x3b0ed1.contentWindow.document.body.appendChild(_0x8c5a08);
    }
  };
}
function _0x4ef374(_0x4239f6) {
  const _0x51f0ec = _0x4239f6.contentWindow.document,
    _0x3f0b11 = document.implementation.createHTMLDocument("电商控制台"),
    _0x5c17f9 = _0x3f0b11.createElement("head"),
    _0x308bc8 = _0x3f0b11.createElement("meta");
  _0x308bc8.setAttribute("charset", "UTF-8");
  _0x5c17f9.appendChild(_0x308bc8);
  const _0x562fc9 = _0x3f0b11.createElement("meta");
  _0x562fc9.setAttribute("name", "viewport");
  _0x562fc9.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x5c17f9.appendChild(_0x562fc9);
  const _0x583515 = _0x3f0b11.createElement("title");
  _0x583515.textContent = "电商控制台";
  _0x5c17f9.appendChild(_0x583515);
  const _0x22c7a8 = _0x3f0b11.createElement("link");
  _0x22c7a8.setAttribute("rel", "stylesheet");
  _0x22c7a8.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x5c17f9.appendChild(_0x22c7a8);
  const _0xb4aa07 = _0x3f0b11.createElement("link");
  _0xb4aa07.setAttribute("rel", "stylesheet");
  _0xb4aa07.setAttribute("href", chrome.runtime.getURL("web/css/flatpickr.min.css"));
  _0x5c17f9.appendChild(_0xb4aa07);
  _0x3f0b11.documentElement.appendChild(_0x5c17f9);
  const _0x54b587 = _0x3f0b11.createElement("body"),
    _0x2870ec = _0x3f0b11.createElement("div");
  _0x2870ec.classList.add("content");
  const _0xcc76b2 = [{
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
  _0xcc76b2.forEach(_0x466a9a => {
    const _0x40575a = _0x3f0b11.createElement("div");
    _0x40575a.classList.add("card");
    _0x40575a.innerHTML = "\n            <h2>" + _0x466a9a.title + "</h2>\n            <p>" + _0x466a9a.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x466a9a.id + "\">使用功能</a>\n        ";
    _0x2870ec.appendChild(_0x40575a);
  });
  _0x54b587.appendChild(_0x2870ec);
  const _0x4194da = _0x3f0b11.createElement("div");
  _0x4194da.id = "modalContainer";
  const _0x28d3e2 = _0x3f0b11.createElement("div");
  _0x28d3e2.id = "overlay";
  _0x4194da.appendChild(_0x28d3e2);
  const _0x5833b4 = _0x3f0b11.createElement("div");
  _0x5833b4.id = "modal";
  _0x5833b4.innerHTML = "\n        <h2 style=\"margin: 20px;\">请选择导出日期</h2>\n        <div class=\"func-btn-container\">\n            <input autocomplete=\"off\" id=\"dateInput\" placeholder=\"请选择日期\" \n                style=\"height: 50px; display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin: 10px; width: 95%;\">\n        </div>\n        <button id=\"closeModal\" class=\"btn\">关闭</button>\n    ";
  _0x4194da.appendChild(_0x5833b4);
  _0x54b587.appendChild(_0x4194da);
  _0x3f0b11.documentElement.appendChild(_0x54b587);
  _0x51f0ec.open();
  _0x51f0ec.write(_0x3f0b11.documentElement.outerHTML);
  _0x51f0ec.close();
  _0x4239f6.onload = function () {
    _0x4239f6.contentWindow.document.querySelector("#exportShippedToday").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "exportShippedToday"
      }, _0x31e173 => {});
    });
    _0x4239f6.contentWindow.document.querySelector("#exportShippedHistory").addEventListener("click", function () {
      _0x4239f6.contentWindow.document.querySelector("#dateInput") ? _0x4239f6.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x5d2954 = _0x4239f6.contentWindow.document.getElementById("modalContainer");
      const _0x3f9a98 = _0x4239f6.contentWindow.document.getElementById("closeModal"),
        _0x3adcb3 = _0x4239f6.contentWindow.document.getElementById("modal"),
        _0x50b88d = _0x4239f6.contentWindow.document.getElementById("overlay");
      _0x3adcb3.style.display = "block";
      _0x50b88d.style.display = "block";
      _0x5d2954.style.display = "block";
      var _0x47ab54 = _0x4239f6.contentWindow.document.querySelector("#dateInput");
      _0x4239f6.contentWindow.document.querySelector(".date-picker-popup") ? _0x4239f6.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0xd1b1e9(_0x47ab54, _0x4239f6.contentWindow.document, _0x2f0abb);
      }, 200);
      _0x47ab54.style.display = "block";
      _0x3f9a98.addEventListener("click", () => {
        _0x3adcb3.style.display = "none";
        _0x50b88d.style.display = "none";
        _0x5d2954.style.display = "none";
      });
      _0x50b88d.addEventListener("click", () => {
        _0x3adcb3.style.display = "none";
        _0x50b88d.style.display = "none";
        _0x5d2954.style.display = "none";
      });
    });
    _0x4239f6.contentWindow.document.querySelector("#exportSalesHistoryAll").addEventListener("click", function () {
      {
        _0x4239f6.contentWindow.document.querySelector("#dateInput") ? _0x4239f6.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x218a4c = _0x4239f6.contentWindow.document.getElementById("modalContainer");
        const _0x301b4d = _0x4239f6.contentWindow.document.getElementById("closeModal"),
          _0x236c3f = _0x4239f6.contentWindow.document.getElementById("modal"),
          _0x15dd9f = _0x4239f6.contentWindow.document.getElementById("overlay");
        _0x236c3f.style.display = "block";
        _0x15dd9f.style.display = "block";
        _0x218a4c.style.display = "block";
        var _0x1fd715 = _0x4239f6.contentWindow.document.querySelector("#dateInput");
        try {
          _0x4239f6.contentWindow.document.querySelector(".date-picker-popup") ? _0x4239f6.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
          setTimeout(() => {
            new _0xd1b1e9(_0x1fd715, _0x4239f6.contentWindow.document, _0x598d2e, "twoMonth");
          }, 200);
          _0x1fd715.style.display = "block";
        } catch (_0x1ff721) {
          console.log(_0x1ff721);
        }
        _0x301b4d.addEventListener("click", () => {
          _0x236c3f.style.display = "none";
          _0x15dd9f.style.display = "none";
          _0x218a4c.style.display = "none";
        });
        _0x15dd9f.addEventListener("click", () => {
          _0x236c3f.style.display = "none";
          _0x15dd9f.style.display = "none";
          _0x218a4c.style.display = "none";
        });
      }
    });
    _0x4239f6.contentWindow.document.querySelector("#exportReturnDetail").addEventListener("click", function () {
      _0x4239f6.contentWindow.document.querySelector("#dateInput") ? _0x4239f6.contentWindow.document.querySelector("#dateInput").value = "" : "";
      var _0x24c9c8 = _0x4239f6.contentWindow.document.getElementById("modalContainer");
      const _0x3544d9 = _0x4239f6.contentWindow.document.getElementById("closeModal"),
        _0x3da7b9 = _0x4239f6.contentWindow.document.getElementById("modal"),
        _0x12ecbe = _0x4239f6.contentWindow.document.getElementById("overlay");
      _0x3da7b9.style.display = "block";
      _0x12ecbe.style.display = "block";
      _0x24c9c8.style.display = "block";
      var _0x309c8a = _0x4239f6.contentWindow.document.querySelector("#dateInput");
      _0x4239f6.contentWindow.document.querySelector(".date-picker-popup") ? _0x4239f6.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
      setTimeout(() => {
        new _0xd1b1e9(_0x309c8a, _0x4239f6.contentWindow.document, _0x38f62c);
      }, 200);
      _0x309c8a.style.display = "block";
      _0x3544d9.addEventListener("click", () => {
        _0x3da7b9.style.display = "none";
        _0x12ecbe.style.display = "none";
        _0x24c9c8.style.display = "none";
      });
      _0x12ecbe.addEventListener("click", () => {
        _0x3da7b9.style.display = "none";
        _0x12ecbe.style.display = "none";
        _0x24c9c8.style.display = "none";
      });
    });
    _0x4239f6.contentWindow.document.querySelector("#exportConsumerAfterSalesIssues").addEventListener("click", function () {
      {
        _0x4239f6.contentWindow.document.querySelector("#dateInput") ? _0x4239f6.contentWindow.document.querySelector("#dateInput").value = "" : "";
        var _0x58ae40 = _0x4239f6.contentWindow.document.getElementById("modalContainer");
        const _0x4e1199 = _0x4239f6.contentWindow.document.getElementById("closeModal"),
          _0xcc2265 = _0x4239f6.contentWindow.document.getElementById("modal"),
          _0x4ba9ec = _0x4239f6.contentWindow.document.getElementById("overlay");
        _0xcc2265.style.display = "block";
        _0x4ba9ec.style.display = "block";
        _0x58ae40.style.display = "block";
        var _0x4ca369 = _0x4239f6.contentWindow.document.querySelector("#dateInput"),
          _0x292ecf = flatpickr(_0x4ca369, {
            "locale": "zh",
            "mode": "range",
            "dateFormat": "Y-m-d",
            "closeOnSelect": false,
            "appendTo": _0x58ae40,
            "maxDate": new Date(),
            "onChange": function (_0x55b058) {
              if (_0x55b058.length == 1) {
                const _0x45e4fd = _0x55b058[0],
                  _0x3b60df = new Date(_0x45e4fd.getTime() + 2678400000),
                  _0x59d4a8 = new Date(_0x45e4fd.getTime() - 2678400000);
                this.set("minDate", _0x59d4a8);
                if (_0x3b60df > new Date()) this.set("maxDate", new Date());else {
                  this.set("maxDate", _0x3b60df);
                }
              } else {
                if (_0x55b058.length == 2) {
                  this.set("maxDate", new Date());
                  this.set("minDate", null);
                }
              }
            },
            "onReady": (_0xd60e92, _0x304bcd, _0x1b4f30) => {
              const _0x523746 = _0x4239f6.contentWindow.document.createElement("button");
              _0x523746.textContent = "确定";
              _0x523746.style.margin = "10px";
              _0x523746.style.padding = "5px 10px";
              _0x523746.style.backgroundColor = "#007BFF";
              _0x523746.style.color = "white";
              _0x523746.style.border = "none";
              _0x523746.style.borderRadius = "5px";
              _0x523746.style.cursor = "pointer";
              _0x523746.style.fontSize = "14px";
              _0x523746.style.transition = "background-color 0.3s";
              _0x523746.onmouseover = () => _0x523746.style.backgroundColor = "#0056b3";
              _0x523746.onmouseout = () => _0x523746.style.backgroundColor = "#007BFF";
              _0x523746.onclick = function () {
                {
                  const _0x5134d1 = _0x1b4f30.selectedDates;
                  if (_0x5134d1.length === 2) {
                    {
                      var [_0x12dd99, _0x2ef0ef] = _0x5134d1;
                      _0x12dd99 = flatpickr.formatDate(_0x12dd99, "Y-m-d") + " 00:00:00";
                      _0x2ef0ef = flatpickr.formatDate(_0x2ef0ef, "Y-m-d") + " 23:59:59";
                      var _0x343e41 = new Date(_0x12dd99).getTime(),
                        _0x1abc7a = new Date(_0x2ef0ef).getTime();
                      _0x1b4f30.close();
                      _0xcc2265.style.display = "none";
                      _0x4ba9ec.style.display = "none";
                      _0x58ae40.style.display = "none";
                      chrome.runtime.sendMessage({
                        "type": "exportConsumerAfterSalesIssues",
                        "startDate": _0x343e41,
                        "endDate": _0x1abc7a
                      }, _0xcce74f => {});
                    }
                  }
                }
              };
              _0x1b4f30.calendarContainer.appendChild(_0x523746);
            }
          });
        _0x4239f6.contentWindow.document.querySelector(".date-picker-popup") ? _0x4239f6.contentWindow.document.querySelector(".date-picker-popup").remove() : "";
        setTimeout(() => {
          new _0xd1b1e9(_0x4ca369, _0x4239f6.contentWindow.document, _0x1c4f31, "oneMonth");
        }, 200);
        _0x4ca369.style.display = "block";
        _0x4e1199.addEventListener("click", () => {
          _0xcc2265.style.display = "none";
          _0x4ba9ec.style.display = "none";
          _0x58ae40.style.display = "none";
        });
        _0x4ba9ec.addEventListener("click", () => {
          _0xcc2265.style.display = "none";
          _0x4ba9ec.style.display = "none";
          _0x58ae40.style.display = "none";
        });
      }
    });
  };
}
function _0x4d4814(_0x1b2249) {
  const _0x38d4be = _0x1b2249.contentWindow.document,
    _0x264b59 = document.implementation.createHTMLDocument("爆单控制台"),
    _0x55dae3 = _0x264b59.createElement("head"),
    _0x9a07d1 = _0x264b59.createElement("meta");
  _0x9a07d1.setAttribute("charset", "UTF-8");
  _0x55dae3.appendChild(_0x9a07d1);
  const _0x261d80 = _0x264b59.createElement("meta");
  _0x261d80.setAttribute("name", "viewport");
  _0x261d80.setAttribute("content", "width=device-width, initial-scale=1.0");
  _0x55dae3.appendChild(_0x261d80);
  const _0x30adb3 = _0x264b59.createElement("title");
  _0x30adb3.textContent = "电商控制台";
  _0x55dae3.appendChild(_0x30adb3);
  const _0x50ee58 = _0x264b59.createElement("link");
  _0x50ee58.setAttribute("rel", "stylesheet");
  _0x50ee58.setAttribute("href", chrome.runtime.getURL("web/css/dataOutputBox.css"));
  _0x55dae3.appendChild(_0x50ee58);
  _0x264b59.documentElement.appendChild(_0x55dae3);
  const _0x76cf14 = _0x264b59.createElement("body"),
    _0x5c65f9 = _0x264b59.createElement("div");
  _0x5c65f9.classList.add("content");
  const _0x29ccee = [{
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
  _0x29ccee.forEach(_0x3f0d34 => {
    const _0x39f784 = _0x264b59.createElement("div");
    _0x39f784.classList.add("card");
    _0x39f784.innerHTML = "\n            <h2>" + _0x3f0d34.title + "</h2>\n            <p>" + _0x3f0d34.description + "</p>\n            <a href=\"#\" class=\"btn\" id=\"" + _0x3f0d34.id + "\">使用功能</a>\n        ";
    _0x5c65f9.appendChild(_0x39f784);
  });
  _0x76cf14.appendChild(_0x5c65f9);
  _0x264b59.documentElement.appendChild(_0x76cf14);
  _0x38d4be.open();
  _0x38d4be.write(_0x264b59.documentElement.outerHTML);
  _0x38d4be.close();
  _0x1b2249.onload = function () {
    _0x1b2249.contentWindow.document.querySelector("#addSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "baodanBoxaddSite"
      }, _0x42aa71 => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#addPhotoSite").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "addPhotoSite"
      }, _0x382ed8 => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#cancelAllStockList").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "cancelAllStockList"
      }, _0x235fea => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#applyPriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "applyPriceSync"
      }, _0xe541e2 => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#urgePriceSync").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "urgePriceSync"
      }, _0x5dfe94 => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#refusePriceSyncAll").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncAll"
      }, _0x34bd97 => {});
    });
    _0x1b2249.contentWindow.document.querySelector("#refusePriceSyncDaily").addEventListener("click", function () {
      chrome.runtime.sendMessage({
        "type": "refusePriceSyncDaily"
      }, _0x2c8297 => {});
    });
  };
}
class _0xd1b1e9 {
  constructor(_0x54d7f2, _0xfcbfa7 = document, _0x121e47 = () => {}, _0x190a7d = "now") {
    this.inputElement = _0x54d7f2;
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.currentDate = new Date();
    this.displayedMonth = this.currentDate.getMonth();
    this.displayedYear = this.currentDate.getFullYear();
    this.today = new Date();
    this.datePopup = null;
    this.isSelectingStartDate = true;
    this.document = _0xfcbfa7;
    this.backFunction = _0x121e47;
    this.model = _0x190a7d;
    this.inputElement.addEventListener("click", this.togglePopup.bind(this));
    this.document.addEventListener("click", this.closePopup.bind(this));
    this.createDatePopup();
    this.addStyles();
  }
  ["addStyles"]() {
    const _0x2b6c2b = {
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
      _0x4093c5 = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "12px"
      },
      _0x140344 = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "8px"
      },
      _0x5a71a2 = {
        "backgroundColor": "#ffffff00",
        "color": "#141e26",
        "border": "none",
        "padding": "6px 10px",
        "fontSize": "28px",
        "cursor": "pointer",
        "borderRadius": "6px",
        "transition": "all 0.3s ease-in-out"
      },
      _0x22a817 = {
        "fontSize": "14px",
        "padding": "6px",
        "border": "1px solid rgb(162, 175, 185)",
        "borderRadius": "6px",
        "backgroundColor": "#fff",
        "color": "#333",
        "cursor": "pointer",
        "transition": "border-color 0.3s ease, background-color 0.3s ease"
      },
      _0x4bf62d = {
        "display": "grid",
        "gridTemplateColumns": "repeat(7, 1fr)",
        "gap": "6px"
      };
    this.applyStyleToElement(this.datePopup, _0x2b6c2b);
    const _0xbd1a82 = this.datePopup.querySelector(".header");
    this.applyStyleToElement(_0xbd1a82, _0x4093c5);
    const _0x3ecda5 = this.datePopup.querySelector(".month-year-select");
    this.applyStyleToElement(_0x3ecda5, _0x140344);
    const _0x1b11ef = _0x3ecda5.querySelectorAll("button");
    _0x1b11ef.forEach(_0x120870 => this.applyStyleToElement(_0x120870, _0x5a71a2));
    const _0x46b5be = _0x3ecda5.querySelectorAll("select");
    _0x46b5be.forEach(_0x2b1066 => this.applyStyleToElement(_0x2b1066, _0x22a817));
    const _0x407543 = this.datePopup.querySelector(".calendar");
    this.applyStyleToElement(_0x407543, _0x4bf62d);
  }
  ["applyStyleToElement"](_0x1b4fda, _0x2aba83) {
    for (const _0x44f46e in _0x2aba83) {
      {
        if (_0x2aba83.hasOwnProperty(_0x44f46e)) {
          _0x1b4fda.style[_0x44f46e] = _0x2aba83[_0x44f46e];
        }
      }
    }
  }
  ["createDatePopup"]() {
    if (this.datePopup) return;
    const _0x17ced8 = this.document.createElement("div");
    _0x17ced8.classList.add("date-picker-popup");
    const _0x57e341 = this.document.createElement("div");
    _0x57e341.classList.add("header");
    const _0x3429a3 = this.createMonthYearSelect();
    _0x57e341.appendChild(_0x3429a3);
    const _0x434f4a = this.document.createElement("div");
    _0x434f4a.classList.add("calendar");
    _0x17ced8.appendChild(_0x57e341);
    _0x17ced8.appendChild(_0x434f4a);
    this.document.body.appendChild(_0x17ced8);
    this.datePopup = _0x17ced8;
    this.updateCalendar();
    const _0x50b843 = this.inputElement.getBoundingClientRect();
    _0x17ced8.style.position = "absolute";
    _0x17ced8.style.top = _0x50b843.bottom + window.scrollY + "px";
    _0x17ced8.style.left = _0x50b843.left + window.scrollX + "px";
  }
  ["createMonthYearSelect"]() {
    const _0x1a7e59 = this.document.createElement("div");
    _0x1a7e59.classList.add("month-year-select");
    const _0x2fb99a = this.document.createElement("button");
    _0x2fb99a.id = "prev-month-btn";
    _0x2fb99a.innerText = "<";
    _0x2fb99a.addEventListener("click", this.changeMonth.bind(this, -1));
    _0x1a7e59.appendChild(_0x2fb99a);
    const _0x508e3d = this.document.createElement("select");
    _0x508e3d.id = "month-select";
    for (let _0x41e8a6 = 0; _0x41e8a6 < 12; _0x41e8a6++) {
      const _0x5de5cc = this.document.createElement("option");
      _0x5de5cc.value = _0x41e8a6;
      _0x5de5cc.innerText = this.getMonthName(_0x41e8a6);
      if (_0x41e8a6 === this.displayedMonth) _0x5de5cc.selected = true;
      _0x508e3d.appendChild(_0x5de5cc);
    }
    _0x508e3d.addEventListener("change", _0xfb2470 => this.changeMonth(parseInt(_0xfb2470.target.value) - this.displayedMonth));
    _0x1a7e59.appendChild(_0x508e3d);
    const _0xa1756c = this.document.createElement("select");
    _0xa1756c.id = "year-select";
    const _0x3a9c0b = this.today.getFullYear();
    for (let _0x4a4344 = _0x3a9c0b - 10; _0x4a4344 <= _0x3a9c0b; _0x4a4344++) {
      const _0x4dddad = this.document.createElement("option");
      _0x4dddad.value = _0x4a4344;
      _0x4dddad.innerText = _0x4a4344;
      if (_0x4a4344 === this.displayedYear) _0x4dddad.selected = true;
      _0xa1756c.appendChild(_0x4dddad);
    }
    _0xa1756c.addEventListener("change", _0x4f0328 => this.changeYear(parseInt(_0x4f0328.target.value)));
    _0x1a7e59.appendChild(_0xa1756c);
    const _0x7dd0b3 = this.document.createElement("button");
    _0x7dd0b3.id = "next-month-btn";
    _0x7dd0b3.innerText = ">";
    _0x7dd0b3.addEventListener("click", this.changeMonth.bind(this, 1));
    _0x1a7e59.appendChild(_0x7dd0b3);
    const _0x58dd5b = this.document.createElement("button");
    _0x58dd5b.id = "dateOK-btn";
    _0x58dd5b.innerText = "确认";
    _0x58dd5b.addEventListener("click", this.backFunction.bind(this, this));
    _0x1a7e59.appendChild(_0x58dd5b);
    return _0x1a7e59;
  }
  ["getMonthName"](_0x16f7ce) {
    const _0x4868c5 = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return _0x4868c5[_0x16f7ce];
  }
  ["isTodayOrAfter"](_0x2e1706) {
    const _0x258a1b = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()),
      _0x494d21 = new Date(_0x2e1706.getFullYear(), _0x2e1706.getMonth(), _0x2e1706.getDate());
    return _0x494d21 >= _0x258a1b;
  }
  ["updateCalendar"]() {
    if (!this.datePopup) return;
    const _0x40527d = this.datePopup.querySelector(".calendar");
    if (!_0x40527d) return;
    _0x40527d.innerHTML = "";
    const _0xc62cd6 = new Date(this.displayedYear, this.displayedMonth, 1),
      _0x12ac53 = new Date(this.displayedYear, this.displayedMonth + 1, 0),
      _0x4cf6e4 = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    _0x4cf6e4.forEach(_0x1337b1 => {
      const _0x188b18 = document.createElement("button");
      _0x188b18.innerText = _0x1337b1;
      _0x188b18.classList.add("weekdays");
      _0x188b18.style.border = "none";
      _0x188b18.style.padding = "10px";
      _0x188b18.style.transition = "all 0.3s ease";
      _0x188b18.style.textAlign = "center";
      _0x188b18.style.fontSize = "14px";
      _0x188b18.style.fontWeight = "bold";
      _0x188b18.style.color = "#333";
      _0x188b18.disabled = true;
      _0x188b18.style.backgroundColor = "#ffffff00";
      _0x188b18.style.cursor = "not-allowed";
      _0x40527d.appendChild(_0x188b18);
    });
    const _0x2604e6 = _0xc62cd6.getDay();
    for (let _0x3c77ad = 0; _0x3c77ad < _0x2604e6; _0x3c77ad++) {
      const _0xd77d90 = document.createElement("button");
      _0xd77d90.classList.add("empty");
      _0xd77d90.style.border = "none";
      _0xd77d90.style.padding = "10px";
      _0xd77d90.style.transition = "all 0.3s ease";
      _0xd77d90.style.textAlign = "center";
      _0xd77d90.style.fontSize = "14px";
      _0xd77d90.style.fontWeight = "bold";
      _0xd77d90.style.color = "#333";
      _0xd77d90.style.backgroundColor = "#ffffff00";
      _0xd77d90.style.cursor = "not-allowed";
      _0x40527d.appendChild(_0xd77d90);
    }
    const _0x16662b = _0x12ac53.getDate();
    for (let _0x1e8193 = 1; _0x1e8193 <= _0x16662b; _0x1e8193++) {
      {
        const _0x29a0c6 = document.createElement("button");
        _0x29a0c6.innerText = _0x1e8193;
        _0x29a0c6.classList.add("bt-d");
        _0x29a0c6.style.border = "none";
        _0x29a0c6.style.padding = "10px";
        _0x29a0c6.style.transition = "all 0.3s ease";
        _0x29a0c6.style.textAlign = "center";
        _0x29a0c6.style.fontSize = "14px";
        _0x29a0c6.style.fontWeight = "bold";
        _0x29a0c6.style.color = "#333";
        _0x29a0c6.style.backgroundColor = "#ffffff00";
        _0x29a0c6.style.cursor = "pointer";
        const _0x34d4fd = new Date(this.displayedYear, this.displayedMonth, _0x1e8193);
        if (this.model == "twoMonth") (this.isTodayOrAfter(_0x34d4fd) || new Date(_0x34d4fd) < new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getMonth() - 2))) && (_0x29a0c6.disabled = true, _0x29a0c6.style.color = "#b7b7b7", _0x29a0c6.style.cursor = "not-allowed");else {
          if (this.isTodayOrAfter(_0x34d4fd)) {
            _0x29a0c6.disabled = true;
            _0x29a0c6.style.color = "#b7b7b7";
            _0x29a0c6.style.cursor = "not-allowed";
          }
        }
        this.selectedStartDate && this.selectedStartDate.getDate() === _0x1e8193 && this.selectedStartDate.getMonth() === this.displayedMonth && this.selectedStartDate.getFullYear() === this.displayedYear && (_0x29a0c6.classList.add("range-start"), _0x29a0c6.style.backgroundColor = "rgb(86, 159, 247)", _0x29a0c6.style.color = "#ffffff", _0x29a0c6.style.fontWeight = "bold", _0x29a0c6.style.borderRadius = "50px 0px 0px 50px");
        if (this.selectedEndDate && this.selectedEndDate.getDate() === _0x1e8193 && this.selectedEndDate.getMonth() === this.displayedMonth && this.selectedEndDate.getFullYear() === this.displayedYear) {
          _0x29a0c6.classList.add("range-end");
          _0x29a0c6.style.backgroundColor = "rgb(86, 159, 247)";
          _0x29a0c6.style.color = "#ffffff";
          _0x29a0c6.style.fontWeight = "bold";
          this.selectedStartDate.toLocaleDateString() == this.selectedEndDate.toLocaleDateString() ? _0x29a0c6.style.borderRadius = "50px 50px 50px 50px" : _0x29a0c6.style.borderRadius = "0px 50px 50px 0px";
        }
        this.selectedStartDate && this.selectedEndDate && this.selectedStartDate < _0x34d4fd && _0x34d4fd < this.selectedEndDate && (_0x29a0c6.classList.add("range-between"), _0x29a0c6.style.backgroundColor = "hsl(205deg, 20%, 94%)", _0x29a0c6.style.color = "#000000", _0x29a0c6.style.borderRadius = "8px");
        _0x29a0c6.addEventListener("click", this.selectDate.bind(this, _0x1e8193));
        _0x40527d.appendChild(_0x29a0c6);
      }
    }
  }
  ["isToday"](_0x2ef5df) {
    return _0x2ef5df.getDate() === this.today.getDate() && _0x2ef5df.getMonth() === this.today.getMonth() && _0x2ef5df.getFullYear() === this.today.getFullYear();
  }
  ["changeMonth"](_0x3dc5ed) {
    const _0x237ffb = new Date(),
      _0x3da6ce = _0x237ffb.getFullYear(),
      _0x4650ad = _0x237ffb.getMonth(),
      _0x3db882 = this.datePopup.querySelector("#prev-month-btn"),
      _0x7f52d = this.datePopup.querySelector("#next-month-btn");
    this.displayedMonth += _0x3dc5ed;
    if (this.displayedMonth < 0) this.displayedMonth = 11, this.displayedYear -= 1;else this.displayedMonth > 11 && (this.displayedMonth = 0, this.displayedYear += 1);
    if (this.displayedYear > _0x3da6ce || this.displayedYear === _0x3da6ce && this.displayedMonth > _0x4650ad) {
      this.displayedYear = _0x3da6ce;
      this.displayedMonth = _0x4650ad;
    }
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x305469 = this.datePopup.querySelector("#month-select"),
      _0x34fd01 = this.datePopup.querySelector("#year-select");
    if (_0x305469) {
      _0x305469.value = this.displayedMonth;
    }
    _0x34fd01 && (_0x34fd01.value = this.displayedYear);
    if (_0x3db882 && _0x7f52d) {
      this.displayedYear === _0x3da6ce && this.displayedMonth === _0x4650ad ? (_0x7f52d.disabled = true, _0x7f52d.style.opacity = 0.5, _0x7f52d.style.cursor = "not-allowed") : (_0x7f52d.disabled = false, _0x7f52d.style.opacity = 1, _0x7f52d.style.cursor = "pointer");
      _0x3db882.disabled = false;
    }
  }
  ["changeYear"](_0x490665) {
    const _0xf4ac87 = new Date(),
      _0x61e30e = _0xf4ac87.getFullYear(),
      _0x12866b = _0xf4ac87.getMonth();
    _0x490665 > _0x61e30e ? this.displayedYear = _0x61e30e : this.displayedYear = _0x490665;
    if (this.displayedYear === _0x61e30e) {
      if (this.displayedMonth > _0x12866b) {
        this.displayedMonth = _0x12866b;
      }
    }
    this.updateCalendar();
    this.updateMonthYearLabel();
    const _0x517ee8 = this.datePopup.querySelector("#month-select"),
      _0x316b0b = this.datePopup.querySelector("#year-select");
    _0x517ee8 && (_0x517ee8.value = this.displayedMonth);
    if (_0x316b0b) {
      _0x316b0b.value = this.displayedYear;
    }
    const _0x1fb8c3 = this.datePopup.querySelector("#prev-month-btn"),
      _0x236749 = this.datePopup.querySelector("#next-month-btn");
    _0x1fb8c3 && _0x236749 && (this.displayedYear === _0x61e30e && _0x12866b === this.displayedMonth ? (_0x236749.disabled = true, _0x236749.style.opacity = 0.5, _0x236749.style.cursor = "not-allowed") : (_0x236749.disabled = false, _0x236749.style.opacity = 1, _0x236749.style.cursor = "pointer"));
  }
  ["updateMonthYearLabel"]() {
    if (!this.datePopup) return;
    const _0x1d1e2d = this.datePopup.querySelector(".month-year-select span");
    if (!_0x1d1e2d) return;
    _0x1d1e2d.innerText = this.getMonthName(this.displayedMonth) + " " + this.displayedYear;
  }
  ["togglePopup"](_0x2dbb77) {
    _0x2dbb77.stopPropagation();
    if (!this.datePopup) return;
    if (this.datePopup.style.display === "none" || !this.datePopup.style.display) {
      const _0x37ba89 = this.inputElement.getBoundingClientRect();
      this.datePopup.style.position = "absolute";
      this.datePopup.style.top = _0x37ba89.bottom + window.scrollY + "px";
      this.datePopup.style.left = _0x37ba89.left + window.scrollX + "px";
      this.datePopup.style.display = "block";
    } else {
      this.datePopup.style.display = "none";
    }
  }
  ["closePopup"](_0x4e52a9) {
    !this.datePopup.contains(_0x4e52a9.target) && !this.inputElement.contains(_0x4e52a9.target) && !_0x4e52a9.target.classList.contains("bt-d") && (this.datePopup.style.display = "none");
  }
  ["selectDate"](_0x32ced9) {
    if (this.model == "oneMonth") {
      const _0x196ba9 = new Date(this.displayedYear, this.displayedMonth, _0x32ced9),
        _0x2b38a3 = new Date(this.displayedYear, this.displayedMonth, 1),
        _0xc1ac60 = new Date(this.displayedYear, this.displayedMonth + 1, 0);
      if (_0x196ba9 < _0x2b38a3 || _0x196ba9 > _0xc1ac60) {
        return;
      }
      if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0x196ba9, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
        this.selectedEndDate = _0x196ba9;
        this.isSelectingStartDate = true;
        if (this.selectedStartDate > this.selectedEndDate) {
          const _0x52fed5 = this.selectedStartDate;
          this.selectedStartDate = this.selectedEndDate;
          this.selectedEndDate = _0x52fed5;
        }
        const _0x6a1fff = this.selectedStartDate.getMonth(),
          _0x1ff73c = this.selectedEndDate.getMonth();
        _0x6a1fff !== _0x1ff73c && (this.selectedStartDate = _0x196ba9, this.selectedEndDate = null);
      }
      this.selectedStartDate && (this.selectedStartDate.getMonth() !== this.displayedMonth || this.selectedStartDate.getFullYear() !== this.displayedYear) && (this.selectedStartDate = null);
      this.selectedEndDate && (this.selectedEndDate.getMonth() !== this.displayedMonth || this.selectedEndDate.getFullYear() !== this.displayedYear) && (this.selectedEndDate = null);
      this.updateCalendar();
      this.updateInputField();
    } else {
      const _0x5746e5 = new Date(this.displayedYear, this.displayedMonth, _0x32ced9);
      if (!this.selectedStartDate || this.selectedStartDate && this.selectedEndDate) this.selectedStartDate = _0x5746e5, this.selectedEndDate = null, this.isSelectingStartDate = false;else {
        this.selectedEndDate = _0x5746e5;
        this.isSelectingStartDate = true;
        if (this.selectedStartDate > this.selectedEndDate) {
          const _0x571ec1 = this.selectedStartDate;
          this.selectedStartDate = this.selectedEndDate;
          this.selectedEndDate = _0x571ec1;
        }
      }
      this.updateCalendar();
      this.updateInputField();
    }
  }
  ["updateInputField"]() {
    if (this.selectedStartDate && this.selectedEndDate) {
      const _0xd8d8a3 = {
          "timeZone": "Asia/Shanghai",
          "year": "numeric",
          "month": "2-digit",
          "day": "2-digit"
        },
        _0x428515 = this.selectedStartDate.toLocaleDateString("zh-CN", _0xd8d8a3).replace(/\//g, "-"),
        _0x50a26c = this.selectedEndDate.toLocaleDateString("zh-CN", _0xd8d8a3).replace(/\//g, "-");
      this.inputElement.value = _0x428515 + " ~ " + _0x50a26c;
    }
  }
}
function _0x598d2e(_0x31a5b5) {
  const _0x5881cc = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x221ddf = _0x31a5b5.selectedStartDate ? _0x31a5b5.selectedStartDate.toLocaleDateString("zh-CN", _0x5881cc).replace(/\//g, "-") : "",
    _0xe75b51 = _0x31a5b5.selectedEndDate ? _0x31a5b5.selectedEndDate.toLocaleDateString("zh-CN", _0x5881cc).replace(/\//g, "-") : "";
  if (_0x221ddf && _0xe75b51) {
    _0x31a5b5.datePopup.style.display = "none";
    chrome.runtime.sendMessage({
      "type": "exportSalesHistoryAll",
      "startDate": _0x221ddf,
      "endDate": _0xe75b51
    }, _0xbb2e53 => {});
  }
}
function _0x2f0abb(_0x2de415) {
  const _0x369f71 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x463353 = _0x2de415.selectedStartDate ? _0x2de415.selectedStartDate.toLocaleDateString("zh-CN", _0x369f71).replace(/\//g, "-") + " 00:00:00" : "",
    _0x517b4b = _0x2de415.selectedEndDate ? _0x2de415.selectedEndDate.toLocaleDateString("zh-CN", _0x369f71).replace(/\//g, "-") + " 23:59:59" : "";
  _0x463353 && _0x517b4b && (_0x2de415.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportShippedHistory",
    "startDate": _0x463353,
    "endDate": _0x517b4b
  }, _0x2b4309 => {}));
}
function _0x38f62c(_0xd83d84) {
  const _0x17a310 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x1cfa85 = _0xd83d84.selectedStartDate ? _0xd83d84.selectedStartDate.toLocaleDateString("zh-CN", _0x17a310).replace(/\//g, "-") + " 00:00:00" : "",
    _0x1165f0 = _0xd83d84.selectedEndDate ? _0xd83d84.selectedEndDate.toLocaleDateString("zh-CN", _0x17a310).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x36cf2c = new Date(_0x1cfa85).getTime(),
    _0x6f4ef7 = new Date(_0x1165f0).getTime();
  if (_0x1cfa85 && _0x1165f0) {
    _0xd83d84.datePopup.style.display = "none";
    chrome.runtime.sendMessage({
      "type": "exportReturnDetail",
      "startDate": _0x36cf2c,
      "endDate": _0x6f4ef7
    }, _0x42c942 => {});
  }
}
function _0x1c4f31(_0xaffcec) {
  const _0xa6118 = {
      "timeZone": "Asia/Shanghai",
      "year": "numeric",
      "month": "2-digit",
      "day": "2-digit"
    },
    _0x1894c2 = _0xaffcec.selectedStartDate ? _0xaffcec.selectedStartDate.toLocaleDateString("zh-CN", _0xa6118).replace(/\//g, "-") + " 00:00:00" : "",
    _0xbafb3 = _0xaffcec.selectedEndDate ? _0xaffcec.selectedEndDate.toLocaleDateString("zh-CN", _0xa6118).replace(/\//g, "-") + " 23:59:59" : "";
  var _0x2e17c0 = new Date(_0x1894c2).getTime(),
    _0x3f55d2 = new Date(_0xbafb3).getTime();
  _0x1894c2 && _0xbafb3 && (_0xaffcec.datePopup.style.display = "none", chrome.runtime.sendMessage({
    "type": "exportConsumerAfterSalesIssues",
    "startDate": _0x2e17c0,
    "endDate": _0x3f55d2
  }, _0xe530fc => {}));
}
try {
  fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x78ad10 => _0x78ad10.arrayBuffer()).then(_0x54cfcd => {
    crypto.subtle.digest("SHA-256", _0x54cfcd).then(_0x291077 => {
      const _0x435ab2 = Array.from(new Uint8Array(_0x291077)),
        _0x54cb01 = _0x435ab2.map(_0x579ff2 => _0x579ff2.toString(16).padStart(2, "0")).join("");
      _0x54cb01 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
        "codePhone": ["", ""]
      });
    });
  });
} catch (_0x2bf719) {}
try {
  fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x5dfb6d => _0x5dfb6d.arrayBuffer()).then(_0xb6e80 => {
    crypto.subtle.digest("SHA-256", _0xb6e80).then(_0x378ec => {
      const _0x2dd0cd = Array.from(new Uint8Array(_0x378ec)),
        _0x408a95 = _0x2dd0cd.map(_0x13d011 => _0x13d011.toString(16).padStart(2, "0")).join("");
      _0x408a95 == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : !function () {
        chrome.storage.local.set({
          "codePhone": ["", ""]
        });
        window.close();
      }();
    });
  });
} catch (_0x318dd3) {}
try {
  fetch(chrome.runtime.getURL("web/img/logo.png")).then(_0x4f9197 => _0x4f9197.arrayBuffer()).then(_0x31ef3a => {
    crypto.subtle.digest("SHA-256", _0x31ef3a).then(_0x138131 => {
      {
        const _0xe2cd5a = Array.from(new Uint8Array(_0x138131)),
          _0x31e7ec = _0xe2cd5a.map(_0x59c008 => _0x59c008.toString(16).padStart(2, "0")).join("");
        _0x31e7ec == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage.local.set({
          "codePhone": ["", ""]
        });
      }
    });
  });
} catch (_0x5be3c2) {}
"use strict";
(function () {
  var _0x1e5ff2 = function (_0x5b31d0, _0x315edc, _0x21e595) {
      (function () {})();
      for (var _0x3bb676 = _0x315edc.length, _0x43fe37 = _0x3bb676 - _0x21e595, _0x11bb84 = [], _0x2d1757 = 0; _0x2d1757 < _0x5b31d0.length;) for (var _0x567d6d = 0, _0x42df68 = 1, _0x9c2880;;) {
        _0x9c2880 = _0x315edc.indexOf(_0x5b31d0[_0x2d1757++]);
        if (_0x567d6d += _0x42df68 * (_0x9c2880 % _0x21e595), _0x9c2880 < _0x21e595) {
          _0x11bb84.push(_0x567d6d | 0);
          break;
        }
        _0x567d6d += _0x21e595 * _0x42df68;
        _0x42df68 *= _0x43fe37;
      }
      return _0x11bb84;
    },
    _0x234f6b = "xf=9yMgW>1gW-I->GxLyf=9i2gMf=KuM9bk9b=8hy9bi1gvRx=7dJqisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXsI1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXs>1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeRbGxb6gWp>oxgWGxbf=KuMq1kq1=8hyq1w9nkq1=oyigMY9ngMq1Rx9xgWEIgWMIgWkgW=GMngWE>gWRx=tbOq1i29n4=DMh=jVWgMsx9nXgMXT0x2=xxgMsx9n1gMkq1=gVygMY9ngMq1Rx9xgWM>q1AgWq1gWtxTVgWRx=xxq1Rxq1gWeDOX|gXX=xxqyqxqygMbgM9nRx9ngWGxoaf=9i2gMf=KuM9bk9b=8hy9bi1gvRx=G2uqisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXsTX1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXsRX1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeNaGxb6gWp>oxgWGxbGxDef=9i2gMf=KuM9bk9b=8hy9bi1gvRx=mh3qisxgvXqik9b=suMqiYgvqi9bRx9xqyOgMqy9ni1gMXzLW1=xxqysxgMXqyk9n=wnqyYgMqy9nRx9xq1i19nXzKW1=xxgMsx9nXgMkq1=wngMY9ngMq1Rx9xgWeTIGxb6gWp>oxgWGxbSx>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXLr1=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXzDx1=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=SW9xgMMRWqyAgMqygMtxFRxgMRx=xxqyRxqygMeNCxf=KuMgvkgv=qMygvkgv=x2gvi1qi19ui2ghRx=xxqHsxghXqHRx=xxqHsxgh1qHsx9u=K2lghsxqiX9ukgv=9219uYqi9ugvRx9x9bRx9bgMl>NWq1MNW9bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMl>F1q1>o19nf=0dM9bi1gvf=jbb9uMo1ghRx+qHH9ughqHqisxgvXqik9b=VuqiYgvqi9bRx9xqyPqylf=KuMgMkgM=qMygMkgM=x2gMi1qy19bi2gvRx=xxqisxgvXqiRx=xxqisxgv1qisx9b=K2lgvsxqyX9bkgM=9219bYqy9bgMRx9x9nM1gMwqykgM=9329bYqy9bgMRx9x9nl>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXLDX1=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXsGW1=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=49xgMMRWqyAgMqygMtxFFWgMRx=xxqyRxqygMe|GWXNRWX=xxqiqxqigvbgv9bRx9bgMl>|nq1M|n9bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMlf=KuMgMkgM=qMygMkgM=x2gMi1qy19bi2gvRx=xxqisxgvXqiRx=xxqisxgv1qisx9b=K2lgvsxqyX9bkgM=9219bYqy9bgMRx9x9nM1gMwqykgM=9329bYqy9bgMRx9x9nl>LXq1MLXqyw9bkqy=NiigvY9bgvqyRx9xgMPgMl>zWq1f=LHM9bk9b=2M9bi2gvRx=+yqisxgvXqiMzWqisxgv1qik9b=iMqiYgvqi9bRx9xqyi19bXF711=xxgvsx9bXgvkqy=wngvY9bgvqyRx9xgMl>oWq1-TW-RWf=qu2qyi19bf=z3vgvi1qiMoW9usxqiX9ucgvqigvsx9bXgvkqy=VngvY9bgvqyRx9xgMETWgMMTW9bi1gvXR811=xxqisxgvXqik9b=s31qiYgvqi9bRx9xqyi19bRx=xxgvsx9bXgvkqy=R3ngvY9bgvqyRx9xgMERWgMRx=gl9xgMMRWqyAgMqygMtxsS1gMRx=xxqyRxqygMeT81f=KuMgvkgv=qMygvkgv=x2gvi1qi19ui2ghRx=xxqHsxghXqHRx=xxqHsxgh1qHsx9u=K2lghsxqiX9ukgv=9219uYqi9ugvRx9x9bRx9bgMl>L2q1ML29bi1gvRx+qisxgvXqik9b=RHbqiYgvqi9bRx9xqyi29bRx2gvsx9bXgvRx=FXXgvsx9b1gvkqy=7HbgvY9bgvqyRx9xgMPgMl=TV0W71oWz10WsXKxtXSW0W|XG1DWLx|XsXSWBWt171FXNx9Xz1t1Nx71G1|XSW9X|XmWNWg1DXiCx15BWt171FXoWG1c7xtXG1|X7xz14BWBWbtXtXk1bbG11G1b4bcoWkz11oW31oWbG1BWk7x5tXtX|X|XtXG1CxCx5G15kk1Cxz1>>1c>>7xbb>5cc|X3c>7xc7xBW7xbb4BWbG1>7xcbz14ktX41Cx4|X5tX7xBWtXtXCxkCx3cG1bCxCx1CxCxcoW|Xz1|X|X57x3k3|XoWDWFXLxRxoW71G1|XEjXqXLxsX|XSWoW71G1|X9W9X71mW|XmWz1FX|XsXSW71t1z1Lx|X0x0xKx~sW0xG10xLWKXoX4F1zxLx|XSW|Wz1mWDWBW|XsXSWLWDWmWG171LWqXz1t1sX|XTXmWSWKSpGteGteiGX|XFXKxR|IBgp|qCxgDegzmxGDmxq88xqgAKC>LmE151z15G1k>|X5|XBWtXbG1Cx|XG1>>|Xbk>G1CxoWbk|Xbz151z1G1c>btXz15z1|XBWz13|XoWtXk4boWcCxBW>tX>41|X4BW|XSWoW9Xz1t1t1z1zWCWKxBWBW|Xt1DXt1t1z1zWLx|XSWFWjWSXoW9Xt171FX|XLW|XtXRxDWFXLxRxoW71mWSWt1710WEqXmWLxNWSWt1DWmWLxLW|XtXRxDWFXLxRx0W71Lx71EqXmWLxt1KxmWSWDWFX|XqXz1G1NWSWz1t1SWSW71NWSWt1DWmWLxoWt1zWqXSW71FWDWmWSWbDXt1t1z1zWjX71DWmWFXz1qXoW0W71sX|X3LxDWt1|XqX0Wz1oW|XCqn",
    _0x2e5872 = "length",
    _0x18d5a6 = _0x1e5ff2(_0x234f6b, "xXW1n2MyblviudhH3VOJ6cZY~-5aQwfk=+EpeI^><UPA4rjzg7mFGotTqRB|SsCD9L8K0N", 46),
    _0xd62701 = _0x18d5a6[_0x2e5872];
  function _0x523322(_0x1c4980) {
    return _0x1c4980.c[1];
  }
  for (var _0xbc8995 = "", _0xf3ea3e = _0xd62701 + (_0xbc8995 + true)[_0x2e5872], _0x36cbb8 = {
      "h": ""
    }, _0x37afe1 = 0; _0x37afe1 < 28; _0x37afe1++) _0xbc8995 += String.fromCharCode(97 + Math.floor(26 * Math.random()));
  var _0x26071a = window,
    _0x1d2ae7 = _0x26071a.Promise;
  function _0x5a5c37(_0x2c5929) {
    return _0x18d5a6[_0x2c5929.c[0]++] >> 5;
  }
  function _0x26b3e6() {
    {
      var _0x5b4520 = [1, {
        "b": _0x26071a,
        "l": null,
        "k": [],
        "c": [0],
        "f": undefined
      }, undefined];
      return {
        "c": _0x5b4520,
        "d": undefined
      };
    }
  }
  function _0x1c356a(_0x4d6d48, _0x800030) {
    for (;;) {
      var _0x375e66 = _0x4d6d48.c[1];
      if (!_0x375e66) throw _0x800030;
      if (_0x375e66.j) {
        {
          _0x4d6d48.d = {
            "e": _0x800030
          };
          _0x4d6d48.c[0] = _0x375e66.j;
          return;
        }
      }
      _0x4d6d48.c = _0x375e66.c;
    }
  }
  var _0x40a03b = _0x26b3e6();
  function _0xad850c(_0x1bd8ee, _0x39eb70) {
    _0x1bd8ee.c[_0x5a5c37(_0x1bd8ee)] = _0x39eb70;
  }
  var _0x131c56 = function (_0x4dce21, _0x463325, _0x4778d8, _0x137d48) {
      var _0x56b955 = _0x4dce21[_0x463325[0]++];
      if (_0x56b955 & 1) return _0x56b955 >> 1;
      if (_0x56b955 === _0x4778d8[3]) {
        {
          if (_0x137d48 != null && _0x137d48.i) return _0x137d48.i(_0x4dce21[_0x463325[0]++], _0x4dce21[_0x463325[0]++]);
          for (var _0x50141d = "", _0x2d4ef8 = _0x4dce21[_0x463325[0]++], _0x359375 = 0, _0x5a4632; _0x359375 < _0x2d4ef8; _0x359375++) {
            _0x5a4632 = _0x4dce21[_0x463325[0]++];
            _0x50141d += String.fromCharCode(_0x5a4632 & 4294967232 | _0x5a4632 * 39 & 63);
          }
          return _0x50141d;
        }
      }
      if (_0x56b955 === _0x4778d8[1]) return true;
      if (_0x56b955 !== _0x4778d8[4]) {
        if (_0x56b955 === _0x4778d8[2]) {
          {
            var _0x38243f = _0x4dce21[_0x463325[0]++],
              _0x2171ab = _0x4dce21[_0x463325[0]++],
              _0x55e738 = _0x38243f & 2147483648 ? -1 : 1,
              _0x230b6c = (_0x38243f & 2146435072) >> 20,
              _0x2f7c23 = (_0x38243f & 1048575) * Math.pow(2, 32) + (_0x2171ab < 0 ? _0x2171ab + Math.pow(2, 32) : _0x2171ab);
            return _0x230b6c == 2047 ? _0x2f7c23 ? NaN : _0x55e738 * Infinity : (_0x230b6c !== 0 ? _0x2f7c23 += Math.pow(2, 52) : _0x230b6c++, _0x55e738 * _0x2f7c23 * Math.pow(2, _0x230b6c - 1075));
          }
        }
        if (_0x56b955 === _0x4778d8[0]) return null;
        if (_0x56b955 === _0x4778d8[5]) return false;
        return _0x463325[_0x56b955 >> 5];
      }
    },
    _0x3d4677 = [8, 14, 24, 32, 40, 22];
  {
    {
      _0x36cbb8.i = function (_0x1eae3b, _0x49769c) {
        return "".slice(_0x1eae3b, _0x1eae3b + _0x49769c);
      };
      var _0x5c6c6f = _0x18d5a6[_0xd62701 + _0xbc8995.indexOf(".")] ^ _0xf3ea3e,
        _0x2cbee2 = _0x18d5a6.splice(_0x5c6c6f, _0x18d5a6[_0x5c6c6f + _0x40a03b.c[0]] + 2);
      _0x36cbb8.h = _0x131c56(_0x2cbee2, _0x40a03b.c[1].c, _0x3d4677);
    }
  }
  function _0xe7285(_0x57c562) {
    return _0x131c56(_0x18d5a6, _0x57c562.c, _0x3d4677, _0x36cbb8);
  }
  function _0x6aeac0(_0x4b4692, _0x372301) {
    var _0x3df8ef = _0x523322(_0x4b4692);
    _0x3df8ef.g = {
      "e": _0x372301
    };
    return _0x3df8ef.a ? _0x4b4692.c[0] = _0x3df8ef.a : _0x3df8ef.c.length == 1 ? (_0x4b4692.c[2] = _0x372301, null) : (_0x4b4692.c = _0x3df8ef.c, _0x4b4692.c[2] = _0x372301, undefined);
  }
  var _0x43fd5c = [function (_0x36a2a3, _0x7a0eee, _0x973ed9) {
    _0x973ed9(_0x36a2a3, undefined);
  }, function (_0x15d640, _0x5b1d73, _0x2e16fa, _0x2e0470, _0x52bffd, _0xe8e661) {
    var _0x53f42d = _0x5b1d73(_0x15d640),
      _0x5a9e3f = _0x5b1d73(_0x15d640),
      _0x57bc87 = _0x5b1d73(_0x15d640),
      _0x20e4ef = _0x2e0470(_0x15d640),
      _0x4bb447 = _0xe8e661[2],
      _0x1fb154 = _0xe8e661[3],
      _0x158457 = _0xe8e661[4],
      _0x2b2f11 = function () {
        var _0x172b1f = _0x4bb447();
        _0x172b1f.c[3] = arguments;
        for (var _0x195b5a = 0; _0x195b5a < arguments.length; _0x195b5a++) _0x172b1f.c[_0x195b5a + 4] = arguments[_0x195b5a];
        _0x172b1f.c[1] = {
          "b": this,
          "c": [0],
          "k": [],
          "f": _0x20e4ef,
          "l": _0x2b2f11
        };
        _0x172b1f.c[0] = _0x53f42d;
        _0x1fb154(_0x172b1f);
        return _0x172b1f.c[2];
      };
    try {
      Object.defineProperty(_0x2b2f11, "length", {
        "value": _0x5a9e3f
      });
      Object.defineProperty(_0x2b2f11, "name", {
        "value": _0x57bc87
      });
    } catch (_0x8cbac3) {
      {
        for (var _0x1e9141 = false, _0x3f463d = "", _0x5d4344 = 0; _0x5d4344 < _0x5a9e3f; _0x5d4344++) _0x1e9141 ? _0x3f463d += ",a".concat(_0x5d4344) : (_0x3f463d += "a".concat(_0x5d4344), _0x1e9141 = true);
        _0x2b2f11 = new Function("fn", "return function ".concat(_0x57bc87, "(").concat(_0x3f463d, "){return fn.apply(this, arguments)}"))(_0x2b2f11);
      }
    }
    _0x2b2f11[_0x158457] = {
      "n": _0x53f42d,
      "f": _0x20e4ef,
      "o": _0x2b2f11
    };
    _0x2e16fa(_0x15d640, _0x2b2f11);
  }, function (_0x1e47f0, _0x5bc248, _0x3cb016, _0x29b70f, _0x4c007e, _0x1a8115) {
    {
      var _0x4cc1e9 = _0x4c007e[1];
      _0x3cb016(_0x1e47f0, _0x4cc1e9[0]);
    }
  }, function (_0x3aabfa, _0x5e1afb, _0xa7608a) {
    _0xa7608a(_0x3aabfa, {});
  }, function (_0x2faf0b, _0x543d8c, _0x47fcc0, _0x15e5f7, _0x55270, _0x1b80e4) {
    {
      var _0xeb360f = _0x1b80e4[0],
        _0x527a88 = _0x1b80e4[1];
      if (_0x2faf0b.d) _0x527a88(_0x2faf0b, _0x2faf0b.d.e);else {
        {
          var _0x5348d6 = _0x15e5f7(_0x2faf0b);
          return _0x5348d6 != null && _0x5348d6.g && _0xeb360f(_0x2faf0b, _0x5348d6.g.e);
        }
      }
    }
  }, function (_0x26d379, _0x36417d, _0x171b4d) {
    var _0x23e365 = _0x36417d(_0x26d379),
      _0x3a9302 = [];
    for (var _0x5ae091 in _0x23e365) _0x3a9302.push(_0x5ae091);
    _0x171b4d(_0x26d379, _0x3a9302);
  }, function (_0x31207d, _0x2bc54e, _0x1ec11c, _0x9b12db) {
    for (var _0x2add9b = _0x2bc54e(_0x31207d), _0x23a25a = _0x9b12db(_0x31207d); _0x23a25a; _0x23a25a = _0x23a25a.f) if (_0x2add9b in _0x23a25a.k) {
      _0x1ec11c(_0x31207d, _0x23a25a.k[_0x2add9b]);
      return;
    }
    throw "ball";
  }, function (_0x5716cf, _0x20de43) {
    var _0x4b251b = _0x20de43(_0x5716cf);
    _0x5716cf.c[1].a = _0x4b251b;
  }, function (_0x55eb60, _0x5547db, _0x561d27) {
    _0x561d27(_0x55eb60, !_0x5547db(_0x55eb60));
  }, function (_0x58b452, _0x30374, _0x4c6cda, _0xff6d6e, _0x943a93, _0x34b8f2) {
    {
      var _0x21a434 = _0x34b8f2[0];
      return _0x21a434(_0x58b452, undefined);
    }
  }, function (_0x2091a3, _0x4d5205, _0x4b5db0, _0x174aa2, _0x497fc4, _0x4fcbd2) {
    {
      var _0x2e9148 = _0x4fcbd2[1],
        _0x4da5ea = _0x4d5205(_0x2091a3);
      _0x2e9148(_0x2091a3, _0x4da5ea);
    }
  }, function (_0x31eb4a, _0x272e1e, _0x3aa134) {
    _0x3aa134(_0x31eb4a, Array(_0x272e1e(_0x31eb4a)));
  }, function (_0x22ce6d, _0x2dc88a, _0xc5efa7) {
    _0xc5efa7(_0x22ce6d, _0x2dc88a(_0x22ce6d) < _0x2dc88a(_0x22ce6d));
  }, function (_0x4d556a, _0x425674, _0x22c9c2) {
    _0x22c9c2(_0x4d556a, _0x425674(_0x4d556a) === _0x425674(_0x4d556a));
  }, function (_0x47d540, _0x53539b, _0x45ab75) {
    _0x45ab75(_0x47d540, _0x53539b(_0x47d540) + _0x53539b(_0x47d540));
  }, function (_0x30e1b8, _0x513064, _0x31d9bf) {
    {
      var _0x51525b = _0x513064(_0x30e1b8),
        _0x29da08 = _0x513064(_0x30e1b8),
        _0x40b406 = _0x513064(_0x30e1b8);
      _0x31d9bf(_0x30e1b8, _0x51525b(_0x29da08, _0x40b406));
    }
  }, function (_0x46d9d4, _0x4ddc72, _0x4eb19f) {
    _0x4eb19f(_0x46d9d4, _0x4ddc72(_0x46d9d4) >>> _0x4ddc72(_0x46d9d4));
  }, function (_0x5a6ca2, _0x27a36b, _0x1b1bf3) {
    _0x1b1bf3(_0x5a6ca2, _0x27a36b(_0x5a6ca2) != _0x27a36b(_0x5a6ca2));
  }, function (_0x595214, _0x3cdfaf, _0xf1f4b4) {
    var _0x1e107f = _0x3cdfaf(_0x595214),
      _0x210807 = _0x3cdfaf(_0x595214);
    _0xf1f4b4(_0x595214, _0x1e107f(_0x210807));
  }, function (_0x15a497, _0x39c5dc, _0x15d930, _0xd5f931, _0xb8a6ff, _0x28cab1) {
    {
      var _0x30470a = _0xb8a6ff[1];
      _0x15d930(_0x15a497, _0x30470a[1]);
    }
  }, function (_0x5da60b, _0x1e879d, _0x1a1e7d) {
    _0x1a1e7d(_0x5da60b, _0x5da60b.d && _0x5da60b.d.e);
  }, function (_0x465ad5, _0x39c172, _0x3f0841) {
    var _0x4529e4 = _0x39c172(_0x465ad5),
      _0x1f3bbc = _0x39c172(_0x465ad5).slice();
    _0x1f3bbc.unshift(undefined);
    _0x3f0841(_0x465ad5, new (Function.bind.apply(_0x4529e4, _0x1f3bbc))());
  }, function (_0x27ea2e, _0x1a86e4, _0x5c3659) {
    _0x5c3659(_0x27ea2e, _0x1a86e4(_0x27ea2e) > _0x1a86e4(_0x27ea2e));
  }, function (_0x378b18, _0x54fd2e, _0xa289ae, _0x51cc4c, _0x2a6ab1, _0x3b2b00) {
    var _0x59ecc4 = _0x54fd2e(_0x378b18),
      _0xf66412 = _0x54fd2e(_0x378b18),
      _0x473f89 = _0x54fd2e(_0x378b18),
      _0x3d0f98 = _0x3b2b00[4];
    if (_0xf66412[_0x3d0f98] && _0xf66412[_0x3d0f98].o === _0xf66412) {
      _0x378b18.c = [_0xf66412[_0x3d0f98].n, {
        "b": _0x473f89,
        "l": _0xf66412,
        "c": _0x378b18.c,
        "k": [],
        "f": _0xf66412[_0x3d0f98].f
      }, undefined, function () {
        return arguments;
      }.apply(undefined, _0x59ecc4)];
      for (var _0x4006c3 = 0; _0x4006c3 < _0x59ecc4.length; _0x4006c3++) _0x378b18.c.push(_0x59ecc4[_0x4006c3]);
    } else _0x378b18.c[2] = _0xf66412.apply(_0x473f89, _0x59ecc4);
  }, function (_0x28fe32, _0xa33a5a, _0x148b33) {
    _0x148b33(_0x28fe32, _0xa33a5a(_0x28fe32) | _0xa33a5a(_0x28fe32));
  }, function (_0x515506, _0x39cec8, _0x151334, _0x5f028d) {
    _0x5f028d(_0x515506).k[_0x39cec8(_0x515506)] = undefined;
  }, function (_0xc805b4, _0x42a7d1, _0x5d2575) {
    _0x5d2575(_0xc805b4, ~_0x42a7d1(_0xc805b4));
  }, function (_0x51009f, _0x1f649f, _0x4ebb4a) {
    _0x4ebb4a(_0x51009f, _0x1f649f(_0x51009f) % _0x1f649f(_0x51009f));
  }, function (_0x2ae602, _0x4c113c, _0x34dde7) {
    _0x34dde7(_0x2ae602, _0x4c113c(_0x2ae602) - _0x4c113c(_0x2ae602));
  }, function (_0x192ce6, _0x39f200, _0x45dd55) {
    _0x45dd55(_0x192ce6, []);
  }, function (_0x5952ec, _0x1aac75, _0x52ab18, _0x177b68, _0x5ef6b3, _0x565734) {
    {
      var _0x38d44d = _0x5ef6b3[0];
      _0x52ab18(_0x5952ec, _0x38d44d[_0x1aac75(_0x5952ec)]);
    }
  }, function (_0x2e2645, _0x460c2e, _0x10459f) {
    _0x10459f(_0x2e2645, _0x460c2e(_0x2e2645)[_0x460c2e(_0x2e2645)]);
  }, function (_0x46c473, _0x51765b, _0x3b52dd) {
    _0x3b52dd(_0x46c473, _0x51765b(_0x46c473) * _0x51765b(_0x46c473));
  }, function (_0x5cef05, _0x3c897e, _0x1bbb7c) {
    _0x1bbb7c(_0x5cef05, typeof _0x3c897e(_0x5cef05));
  }, function (_0x3b2a31, _0x487f87, _0x4df4f6, _0x4fe152) {
    {
      for (var _0x38c05c = _0x487f87(_0x3b2a31), _0x47b0a2 = _0x487f87(_0x3b2a31), _0x564b92 = _0x4fe152(_0x3b2a31); _0x564b92; _0x564b92 = _0x564b92.f) if (_0x38c05c in _0x564b92.k) {
        {
          _0x564b92.k[_0x38c05c] = _0x47b0a2;
          return;
        }
      }
      throw "ball";
    }
  }, function (_0x4ab532) {
    _0x4ab532.d = undefined;
  }, function (_0x33b41d, _0x3ee60a) {
    _0x33b41d.c[0] = _0x3ee60a(_0x33b41d);
  }, function (_0x268c2f, _0x7f4a3d, _0x14293e) {
    _0x14293e(_0x268c2f, _0x7f4a3d(_0x268c2f) << _0x7f4a3d(_0x268c2f));
  }, function (_0x4bc3d0, _0x269ff5, _0x411f9c) {
    _0x411f9c(_0x4bc3d0, _0x269ff5(_0x4bc3d0) instanceof _0x269ff5(_0x4bc3d0));
  }, function (_0x19c2f2, _0x5e479f, _0x459ed0, _0x586182) {
    _0x586182(_0x19c2f2).k[_0x5e479f(_0x19c2f2)] = _0x5e479f(_0x19c2f2);
  }, function (_0x5e4388, _0x547bf0, _0x14eacb, _0x2891fe) {
    var _0x2d86c4 = _0x547bf0(_0x5e4388),
      _0x47cc9b = _0x2891fe(_0x5e4388),
      _0x1ba247 = _0x5e4388.l;
    _0x47cc9b.k[_0x2d86c4] = _0x1ba247;
  }, function (_0x22aebd, _0x38793b, _0x407192) {
    _0x407192(_0x22aebd, _0x38793b(_0x22aebd) <= _0x38793b(_0x22aebd));
  }, function (_0x9ba73e, _0x3d3a46, _0x179bd6, _0x2fe57a, _0x53d97f, _0x550846) {
    {
      var _0x9ff3eb = _0x550846[0],
        _0x2eea11 = _0x3d3a46(_0x9ba73e);
      return _0x9ff3eb(_0x9ba73e, _0x2eea11);
    }
  }, function (_0x3159a0, _0x5679de, _0x11abcf) {
    _0x11abcf(_0x3159a0, _0x5679de(_0x3159a0) == _0x5679de(_0x3159a0));
  }, function (_0x27462a, _0x4e02f8, _0x36ef93) {
    _0x36ef93(_0x27462a, new RegExp(_0x4e02f8(_0x27462a), _0x4e02f8(_0x27462a)));
  }, function (_0x495a81, _0x4b0acf) {
    var _0x5939dc = _0x4b0acf(_0x495a81);
    _0x4b0acf(_0x495a81) ? _0x495a81.c[0] = _0x5939dc : _0x5939dc;
  }, function (_0x2dce1b, _0x5e5159, _0x419648) {
    _0x419648(_0x2dce1b, _0x5e5159(_0x2dce1b) !== _0x5e5159(_0x2dce1b));
  }, function (_0x28099c, _0x5bceb4, _0x3520d5) {
    _0x3520d5(_0x28099c, _0x5bceb4(_0x28099c) ^ _0x5bceb4(_0x28099c));
  }, function (_0x128ad2, _0x4821a4, _0x531576) {
    _0x531576(_0x128ad2, _0x128ad2.c[1].b);
  }, function (_0x3b1a63, _0x2a7126, _0x55d271) {
    _0x55d271(_0x3b1a63, _0x2a7126(_0x3b1a63) >> _0x2a7126(_0x3b1a63));
  }, function (_0x4767ad, _0x20ccef, _0x5cf36e) {
    var _0x305d8e = _0x20ccef(_0x4767ad),
      _0x3dd971 = _0x20ccef(_0x4767ad);
    _0x5cf36e(_0x4767ad, delete _0x305d8e[_0x3dd971]);
  }, function (_0xdabb17, _0x1e0cf1, _0x183fcd) {
    _0x183fcd(_0xdabb17, _0x1e0cf1(_0xdabb17) / _0x1e0cf1(_0xdabb17));
  }, function (_0x4e6d1d, _0x3a6d3f) {
    var _0x32d041 = _0x3a6d3f(_0x4e6d1d);
    _0x4e6d1d.c[1].j = _0x32d041;
  }, function (_0x400511, _0x3d7daa, _0x2dcb3a) {
    _0x2dcb3a(_0x400511, _0x3d7daa(_0x400511) & _0x3d7daa(_0x400511));
  }, function (_0x4f088d, _0x30ae43) {
    var _0x3089e8 = _0x30ae43(_0x4f088d);
    _0x30ae43(_0x4f088d) ? _0x3089e8 : _0x4f088d.c[0] = _0x3089e8;
  }, function (_0x26e537, _0x1967f9, _0x4afc1d) {
    _0x4afc1d(_0x26e537, _0x1967f9(_0x26e537) >= _0x1967f9(_0x26e537));
  }, function (_0x31dc42, _0x448209, _0x12dcb4) {
    {
      var _0x51d199 = _0x448209(_0x31dc42);
      _0x12dcb4(_0x31dc42, _0x51d199());
    }
  }, function (_0x21e24b, _0x5815f0, _0xc7b540) {
    _0xc7b540(_0x21e24b, _0x5815f0(_0x21e24b));
  }, function (_0x4c6449, _0x38e43e, _0x38e168) {
    _0x38e168(_0x4c6449, _0x38e43e(_0x4c6449) in _0x38e43e(_0x4c6449));
  }, function (_0x3d8bc2, _0x129a39, _0x1e2c55) {
    var _0x59df23 = _0x129a39(_0x3d8bc2),
      _0x71181d = _0x129a39(_0x3d8bc2),
      _0x306f00 = _0x129a39(_0x3d8bc2),
      _0x404b30 = _0x129a39(_0x3d8bc2);
    _0x1e2c55(_0x3d8bc2, _0x59df23(_0x71181d, _0x306f00, _0x404b30));
  }, function () {
    return null;
  }, function (_0x495bec, _0xe4be42, _0x48da79) {
    _0xe4be42(_0x495bec)[_0xe4be42(_0x495bec)] = _0xe4be42(_0x495bec);
  }];
  function _0x5db401(_0x868602) {
    return _0x868602.c[_0x18d5a6[_0x868602.c[0]++] >> 5];
  }
  var _0x1d950d = function () {
    'use strict';

    var _0x9a4c30,
      _0x454cf5 = {},
      _0x26fad9 = Object.prototype,
      _0x37b7a5 = _0x26fad9.hasOwnProperty,
      _0x44f4c3 = "function" == typeof Symbol ? Symbol : {},
      _0x2387e0 = _0x44f4c3.iterator || "@@iterator",
      _0x1620aa = _0x44f4c3.asyncIterator || "@@asyncIterator",
      _0x1bfd50 = _0x44f4c3.toStringTag || "@@toStringTag";
    function _0xdfb944(_0x4a979d, _0x1b8d97, _0x27291b) {
      Object.defineProperty(_0x4a979d, _0x1b8d97, {
        "value": _0x27291b,
        "enumerable": true,
        "configurable": true,
        "writable": true
      });
      return _0x4a979d[_0x1b8d97];
    }
    try {
      _0xdfb944({}, "");
    } catch (_0x21c255) {
      _0xdfb944 = function (_0x20ed5f, _0x2cb517, _0x1b5979) {
        return _0x20ed5f[_0x2cb517] = _0x1b5979;
      };
    }
    function _0x23a06c(_0x185eb6, _0xc96a09, _0x42902d, _0x389b24) {
      var _0x23f124 = _0xc96a09 && _0xc96a09.prototype instanceof _0x1bbc08 ? _0xc96a09 : _0x1bbc08,
        _0x1d2116 = Object.create(_0x23f124.prototype),
        _0x2bc2c5 = new _0x3b9523(_0x389b24 || []);
      _0x1d2116._invoke = function (_0x2d37ad, _0x305cec, _0x27fb22) {
        var _0x1c4c38 = _0x5b6ea3;
        return function (_0x5a8f6f, _0xa6a4c2) {
          if (_0x1c4c38 === _0x26e354) throw new Error("Generator is already running");
          if (_0x1c4c38 === _0x268c07) {
            {
              if ("throw" === _0x5a8f6f) throw _0xa6a4c2;
              return _0x405c68();
            }
          }
          for (_0x27fb22.method = _0x5a8f6f, _0x27fb22.arg = _0xa6a4c2;;) {
            var _0x4d05d6 = _0x27fb22.delegate;
            if (_0x4d05d6) {
              var _0x579ab8 = _0xcaf0d1(_0x4d05d6, _0x27fb22);
              if (_0x579ab8) {
                if (_0x579ab8 === _0xb2b605) continue;
                return _0x579ab8;
              }
            }
            if ("next" === _0x27fb22.method) _0x27fb22.sent = _0x27fb22._sent = _0x27fb22.arg;else {
              if ("throw" === _0x27fb22.method) {
                if (_0x1c4c38 === _0x5b6ea3) throw _0x1c4c38 = _0x268c07, _0x27fb22.arg;
                _0x27fb22.dispatchException(_0x27fb22.arg);
              } else "return" === _0x27fb22.method && _0x27fb22.abrupt("return", _0x27fb22.arg);
            }
            _0x1c4c38 = _0x26e354;
            var _0x4293b9 = _0x3a2e70(_0x2d37ad, _0x305cec, _0x27fb22);
            if ("normal" === _0x4293b9.type) {
              {
                if (_0x1c4c38 = _0x27fb22.done ? _0x268c07 : _0x24e12e, _0x4293b9.arg === _0xb2b605) continue;
                return {
                  "value": _0x4293b9.arg,
                  "done": _0x27fb22.done
                };
              }
            }
            "throw" === _0x4293b9.type && (_0x1c4c38 = _0x268c07, _0x27fb22.method = "throw", _0x27fb22.arg = _0x4293b9.arg);
          }
        };
      }(_0x185eb6, _0x42902d, _0x2bc2c5);
      return _0x1d2116;
    }
    function _0x3a2e70(_0x92440a, _0x4f8cec, _0x4641d4) {
      try {
        return {
          "type": "normal",
          "arg": _0x92440a.call(_0x4f8cec, _0x4641d4)
        };
      } catch (_0x6f2baa) {
        return {
          "type": "throw",
          "arg": _0x6f2baa
        };
      }
    }
    _0x454cf5.wrap = _0x23a06c;
    var _0x5b6ea3 = "suspendedStart",
      _0x24e12e = "suspendedYield",
      _0x26e354 = "executing",
      _0x268c07 = "completed",
      _0xb2b605 = {};
    function _0x1bbc08() {}
    function _0x362879() {}
    function _0x1f18a3() {}
    var _0x57a4f6 = {};
    _0x57a4f6[_0x2387e0] = function () {
      return this;
    };
    var _0x443442 = Object.getPrototypeOf,
      _0x4f4063 = _0x443442 && _0x443442(_0x443442(_0x50f2d2([])));
    _0x4f4063 && _0x4f4063 !== _0x26fad9 && _0x37b7a5.call(_0x4f4063, _0x2387e0) && (_0x57a4f6 = _0x4f4063);
    var _0x534748 = _0x1f18a3.prototype = _0x1bbc08.prototype = Object.create(_0x57a4f6);
    function _0x23c5de(_0x159939) {
      ["next", "throw", "return"].forEach(function (_0x13ccfd) {
        _0xdfb944(_0x159939, _0x13ccfd, function (_0x232fca) {
          return this._invoke(_0x13ccfd, _0x232fca);
        });
      });
    }
    function _0x4a522c(_0x4501d5, _0x976d14) {
      {
        var _0x26b343;
        this._invoke = function (_0x416023, _0x3d1b82) {
          function _0x226c60() {
            return new _0x976d14(function (_0x44503b, _0x37440c) {
              !function _0x48ca6d(_0x14b3ec, _0x41d045, _0xab8e43, _0x1e7e91) {
                var _0x42a73e = _0x3a2e70(_0x4501d5[_0x14b3ec], _0x4501d5, _0x41d045);
                if ("throw" !== _0x42a73e.type) {
                  var _0x2a99dc = _0x42a73e.arg,
                    _0x3b89f8 = _0x2a99dc.value;
                  return _0x3b89f8 && "object" == typeof _0x3b89f8 && _0x37b7a5.call(_0x3b89f8, "__await") ? _0x976d14.resolve(_0x3b89f8.__await).then(function (_0x3847e9) {
                    _0x48ca6d("next", _0x3847e9, _0xab8e43, _0x1e7e91);
                  }, function (_0x150557) {
                    _0x48ca6d("throw", _0x150557, _0xab8e43, _0x1e7e91);
                  }) : _0x976d14.resolve(_0x3b89f8).then(function (_0x262606) {
                    _0x2a99dc.value = _0x262606;
                    _0xab8e43(_0x2a99dc);
                  }, function (_0x4a8514) {
                    return _0x48ca6d("throw", _0x4a8514, _0xab8e43, _0x1e7e91);
                  });
                }
                _0x1e7e91(_0x42a73e.arg);
              }(_0x416023, _0x3d1b82, _0x44503b, _0x37440c);
            });
          }
          return _0x26b343 = _0x26b343 ? _0x26b343.then(_0x226c60, _0x226c60) : _0x226c60();
        };
      }
    }
    function _0xcaf0d1(_0xab165b, _0x50630b) {
      {
        var _0x252f35 = _0xab165b.iterator[_0x50630b.method];
        if (_0x252f35 === _0x9a4c30) {
          if (_0x50630b.delegate = null, "throw" === _0x50630b.method) {
            if (_0xab165b.iterator.return && (_0x50630b.method = "return", _0x50630b.arg = _0x9a4c30, _0xcaf0d1(_0xab165b, _0x50630b), "throw" === _0x50630b.method)) return _0xb2b605;
            _0x50630b.method = "throw";
            _0x50630b.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return _0xb2b605;
        }
        var _0x359772 = _0x3a2e70(_0x252f35, _0xab165b.iterator, _0x50630b.arg);
        if ("throw" === _0x359772.type) return _0x50630b.method = "throw", _0x50630b.arg = _0x359772.arg, _0x50630b.delegate = null, _0xb2b605;
        var _0x1a92fe = _0x359772.arg;
        return _0x1a92fe ? _0x1a92fe.done ? (_0x50630b[_0xab165b.resultName] = _0x1a92fe.value, _0x50630b.next = _0xab165b.nextLoc, "return" !== _0x50630b.method && (_0x50630b.method = "next", _0x50630b.arg = _0x9a4c30), _0x50630b.delegate = null, _0xb2b605) : _0x1a92fe : (_0x50630b.method = "throw", _0x50630b.arg = new TypeError("iterator result is not an object"), _0x50630b.delegate = null, _0xb2b605);
      }
    }
    function _0x2526bc(_0x562027) {
      var _0x59679d = {
        "tryLoc": _0x562027[0]
      };
      1 in _0x562027 && (_0x59679d.catchLoc = _0x562027[1]);
      2 in _0x562027 && (_0x59679d.finallyLoc = _0x562027[2], _0x59679d.afterLoc = _0x562027[3]);
      this.tryEntries.push(_0x59679d);
    }
    function _0x27f932(_0x5a532d) {
      {
        var _0x185ae3 = _0x5a532d.completion || {};
        _0x185ae3.type = "normal";
        delete _0x185ae3.arg;
        _0x5a532d.completion = _0x185ae3;
      }
    }
    function _0x3b9523(_0x9fbb6b) {
      this.tryEntries = [{
        "tryLoc": "root"
      }];
      _0x9fbb6b.forEach(_0x2526bc, this);
      this.reset(true);
    }
    function _0x50f2d2(_0x50f026) {
      if (_0x50f026) {
        {
          var _0x360917 = _0x50f026[_0x2387e0];
          if (_0x360917) return _0x360917.call(_0x50f026);
          if ("function" == typeof _0x50f026.next) return _0x50f026;
          if (!isNaN(_0x50f026.length)) {
            {
              var _0x2c4ede = -1,
                _0x2823f5 = function _0x5ad1b2() {
                  for (; ++_0x2c4ede < _0x50f026.length;) if (_0x37b7a5.call(_0x50f026, _0x2c4ede)) return _0x5ad1b2.value = _0x50f026[_0x2c4ede], _0x5ad1b2.done = false, _0x5ad1b2;
                  _0x5ad1b2.value = _0x9a4c30;
                  _0x5ad1b2.done = true;
                  return _0x5ad1b2;
                };
              return _0x2823f5.next = _0x2823f5;
            }
          }
        }
      }
      return {
        "next": _0x405c68
      };
    }
    function _0x405c68() {
      return {
        "value": _0x9a4c30,
        "done": true
      };
    }
    _0x362879.prototype = _0x534748.constructor = _0x1f18a3;
    _0x1f18a3.constructor = _0x362879;
    _0x362879.displayName = _0xdfb944(_0x1f18a3, _0x1bfd50, "GeneratorFunction");
    _0x454cf5.isGeneratorFunction = function (_0x43c16a) {
      var _0x5c179a = "function" == typeof _0x43c16a && _0x43c16a.constructor;
      return !!_0x5c179a && (_0x5c179a === _0x362879 || "GeneratorFunction" === (_0x5c179a.displayName || _0x5c179a.name));
    };
    _0x454cf5.mark = function (_0x5e0025) {
      Object.setPrototypeOf ? Object.setPrototypeOf(_0x5e0025, _0x1f18a3) : (_0x5e0025.__proto__ = _0x1f18a3, _0xdfb944(_0x5e0025, _0x1bfd50, "GeneratorFunction"));
      _0x5e0025.prototype = Object.create(_0x534748);
      return _0x5e0025;
    };
    _0x454cf5.awrap = function (_0x152426) {
      return {
        "__await": _0x152426
      };
    };
    _0x23c5de(_0x4a522c.prototype);
    _0x4a522c.prototype[_0x1620aa] = function () {
      return this;
    };
    _0x454cf5.AsyncIterator = _0x4a522c;
    _0x454cf5.async = function (_0x390cb9, _0x50f858, _0x36a944, _0x5ba162, _0x2bf15e) {
      undefined === _0x2bf15e && (_0x2bf15e = Promise);
      var _0x32e60f = new _0x4a522c(_0x23a06c(_0x390cb9, _0x50f858, _0x36a944, _0x5ba162), _0x2bf15e);
      return _0x454cf5.isGeneratorFunction(_0x50f858) ? _0x32e60f : _0x32e60f.next().then(function (_0x32eb52) {
        return _0x32eb52.done ? _0x32eb52.value : _0x32e60f.next();
      });
    };
    _0x23c5de(_0x534748);
    _0xdfb944(_0x534748, _0x1bfd50, "Generator");
    _0x534748[_0x2387e0] = function () {
      return this;
    };
    _0x534748.toString = function () {
      return "[object Generator]";
    };
    _0x454cf5.keys = function (_0x12b87f) {
      {
        var _0x28177a = [];
        for (var _0x2fc6f6 in _0x12b87f) _0x28177a.push(_0x2fc6f6);
        _0x28177a.reverse();
        return function _0x184b94() {
          {
            for (; _0x28177a.length;) {
              var _0xca8212 = _0x28177a.pop();
              if (_0xca8212 in _0x12b87f) return _0x184b94.value = _0xca8212, _0x184b94.done = false, _0x184b94;
            }
            _0x184b94.done = true;
            return _0x184b94;
          }
        };
      }
    };
    _0x454cf5.values = _0x50f2d2;
    _0x3b9523.prototype = {
      "constructor": _0x3b9523,
      "reset": function (_0x1bc93e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x9a4c30, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x9a4c30, this.tryEntries.forEach(_0x27f932), !_0x1bc93e) {
          for (var _0x280b8e in this) "t" === _0x280b8e.charAt(0) && _0x37b7a5.call(this, _0x280b8e) && !isNaN(+_0x280b8e.slice(1)) && (this[_0x280b8e] = _0x9a4c30);
        }
      },
      "stop": function () {
        this.done = true;
        var _0x24275a = this.tryEntries[0].completion;
        if ("throw" === _0x24275a.type) throw _0x24275a.arg;
        return this.rval;
      },
      "dispatchException": function (_0x1a2ace) {
        if (this.done) throw _0x1a2ace;
        var _0x2091be = this;
        function _0x7202d7(_0x306020, _0x5ee77f) {
          _0x4e7ff2.type = "throw";
          _0x4e7ff2.arg = _0x1a2ace;
          _0x2091be.next = _0x306020;
          _0x5ee77f && (_0x2091be.method = "next", _0x2091be.arg = _0x9a4c30);
          return !!_0x5ee77f;
        }
        for (var _0x4895ef = this.tryEntries.length - 1; _0x4895ef >= 0; --_0x4895ef) {
          var _0x519f84 = this.tryEntries[_0x4895ef],
            _0x4e7ff2 = _0x519f84.completion;
          if ("root" === _0x519f84.tryLoc) return _0x7202d7("end");
          if (_0x519f84.tryLoc <= this.prev) {
            {
              var _0x1e55ea = _0x37b7a5.call(_0x519f84, "catchLoc"),
                _0x1e4f92 = _0x37b7a5.call(_0x519f84, "finallyLoc");
              if (_0x1e55ea && _0x1e4f92) {
                {
                  if (this.prev < _0x519f84.catchLoc) return _0x7202d7(_0x519f84.catchLoc, true);
                  if (this.prev < _0x519f84.finallyLoc) return _0x7202d7(_0x519f84.finallyLoc);
                }
              } else {
                if (_0x1e55ea) {
                  if (this.prev < _0x519f84.catchLoc) return _0x7202d7(_0x519f84.catchLoc, true);
                } else {
                  if (!_0x1e4f92) throw new Error("try statement without catch or finally");
                  if (this.prev < _0x519f84.finallyLoc) return _0x7202d7(_0x519f84.finallyLoc);
                }
              }
            }
          }
        }
      },
      "abrupt": function (_0x50e52c, _0x21340d) {
        for (var _0x23678a = this.tryEntries.length - 1, _0x4f0159; _0x23678a >= 0; --_0x23678a) {
          _0x4f0159 = this.tryEntries[_0x23678a];
          if (_0x4f0159.tryLoc <= this.prev && _0x37b7a5.call(_0x4f0159, "finallyLoc") && this.prev < _0x4f0159.finallyLoc) {
            var _0x1fc57f = _0x4f0159;
            break;
          }
        }
        _0x1fc57f && ("break" === _0x50e52c || "continue" === _0x50e52c) && _0x1fc57f.tryLoc <= _0x21340d && _0x21340d <= _0x1fc57f.finallyLoc && (_0x1fc57f = null);
        var _0x3b456b = _0x1fc57f ? _0x1fc57f.completion : {};
        _0x3b456b.type = _0x50e52c;
        _0x3b456b.arg = _0x21340d;
        return _0x1fc57f ? (this.method = "next", this.next = _0x1fc57f.finallyLoc, _0xb2b605) : this.complete(_0x3b456b);
      },
      "complete": function (_0x539562, _0x2b6976) {
        {
          if ("throw" === _0x539562.type) throw _0x539562.arg;
          "break" === _0x539562.type || "continue" === _0x539562.type ? this.next = _0x539562.arg : "return" === _0x539562.type ? (this.rval = this.arg = _0x539562.arg, this.method = "return", this.next = "end") : "normal" === _0x539562.type && _0x2b6976 && (this.next = _0x2b6976);
          return _0xb2b605;
        }
      },
      "finish": function (_0x1fe989) {
        for (var _0x88bcef = this.tryEntries.length - 1, _0x79b328; _0x88bcef >= 0; --_0x88bcef) {
          _0x79b328 = this.tryEntries[_0x88bcef];
          if (_0x79b328.finallyLoc === _0x1fe989) return this.complete(_0x79b328.completion, _0x79b328.afterLoc), _0x27f932(_0x79b328), _0xb2b605;
        }
      },
      "catch": function (_0x1b9c3a) {
        for (var _0xf01df6 = this.tryEntries.length - 1, _0x4a4ca4; _0xf01df6 >= 0; --_0xf01df6) {
          {
            _0x4a4ca4 = this.tryEntries[_0xf01df6];
            if (_0x4a4ca4.tryLoc === _0x1b9c3a) {
              {
                var _0x5d354a = _0x4a4ca4.completion;
                if ("throw" === _0x5d354a.type) {
                  {
                    var _0xc7e6f8 = _0x5d354a.arg;
                    _0x27f932(_0x4a4ca4);
                  }
                }
                return _0xc7e6f8;
              }
            }
          }
        }
        throw new Error("illegal catch attempt");
      },
      "delegateYield": function (_0x3c6e5e, _0x4009b6, _0xe2f36a) {
        this.delegate = {
          "iterator": _0x50f2d2(_0x3c6e5e),
          "resultName": _0x4009b6,
          "nextLoc": _0xe2f36a
        };
        "next" === this.method && (this.arg = _0x9a4c30);
        return _0xb2b605;
      }
    };
    return _0x454cf5;
  }();
  function _0x1a7f5c(_0x2e9e5f) {
    for (var _0x18a9b0 = [_0x26071a, [_0x1d2ae7, _0x1d950d], _0x18d5a6], _0x25a299 = [_0x6aeac0, _0x1c356a, _0x26b3e6, _0x1a7f5c, _0xbc8995, _0x5db401], _0x1cd34e;;) {
      _0x1cd34e = _0x43fd5c[_0x18d5a6[_0x2e9e5f.c[0]++]];
      try {
        var _0x485cf8 = _0x1cd34e(_0x2e9e5f, _0xe7285, _0xad850c, _0x523322, _0x18a9b0, _0x25a299);
        if (_0x485cf8 === null) break;
      } catch (_0x2ee489) {
        _0x1c356a(_0x2e9e5f, _0x2ee489);
      }
    }
  }
  _0x1a7f5c(_0x40a03b);
})();