//Wed Mar 19 2025 09:22:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
let _0x44afbc = [],
  _0x264bd5 = [],
  _0x4d6aa5 = {};
var _0x57dc19 = "",
  _0x56c091 = "",
  _0x179a7d = [],
  _0x45729d = "",
  _0x24238d = {
    "ok": 0
  };
let _0x39411c = {},
  _0xf6ea4 = true,
  _0x20cb88 = [],
  _0x22e302 = {};
chrome.runtime.sendMessage({
  "type": "cloudInit"
}, _0x7daaf6 => {
  _0x179a7d = _0x7daaf6.data[0];
  _0x45729d = _0x7daaf6.data[1];
});
window.addEventListener("sentListWarehouseData", function (_0x18c3cb) {
  var _0x187e7b = _0x18c3cb.detail;
  if (_0x187e7b.type === "listWarehouseData") {
    var _0x1f449d = typeof _0x187e7b.data === "string" ? JSON.parse(_0x187e7b.data) : _0x187e7b.data;
    Object.keys(_0x1f449d).length != 0 && (_0x4d6aa5 = _0x1f449d);
  }
});
function _0x5004de(_0x3728ee) {
  const _0x54be75 = XLSX.utils.book_new(),
    _0x1c2c7a = [["备货单号", "SKC", "产品名称", "产品SKU", "SKU名称", "发货件数", "供货价", "合计"]],
    _0x53700e = [];
  let _0x1d2af6 = 1;
  _0x3728ee.forEach(_0x1f1c4d => {
    const _0xce341 = _0x1d2af6;
    _0x1f1c4d[3].forEach(_0x126bde => {
      _0x1c2c7a.push([_0x1f1c4d[0], _0x1f1c4d[1], _0x1f1c4d[2], _0x126bde[0], _0x126bde[1], _0x126bde[2], _0x126bde[3], _0x126bde[4]]);
      _0x1d2af6++;
    });
    const _0x27fb34 = _0x1d2af6 - 1;
    if (_0xce341 !== _0x27fb34) {
      _0x53700e.push({
        "s": {
          "r": _0xce341,
          "c": 0
        },
        "e": {
          "r": _0x27fb34,
          "c": 0
        }
      });
      _0x53700e.push({
        "s": {
          "r": _0xce341,
          "c": 1
        },
        "e": {
          "r": _0x27fb34,
          "c": 1
        }
      });
      _0x53700e.push({
        "s": {
          "r": _0xce341,
          "c": 2
        },
        "e": {
          "r": _0x27fb34,
          "c": 2
        }
      });
    }
  });
  const _0x49c2d0 = XLSX.utils.aoa_to_sheet(_0x1c2c7a);
  _0x49c2d0["!merges"] = _0x53700e;
  _0x49c2d0["!cols"] = [{
    "wch": 20
  }, {
    "wch": 15
  }, {
    "wch": 50
  }, {
    "wch": 15
  }, {
    "wch": 20
  }, {
    "wch": 10
  }, {
    "wch": 10
  }, {
    "wch": 10
  }];
  const _0x175fef = {
      "font": {
        "bold": true,
        "color": {
          "rgb": "FFFFFF"
        }
      },
      "fill": {
        "fgColor": {
          "rgb": "4F81BD"
        }
      },
      "alignment": {
        "horizontal": "center",
        "vertical": "center"
      }
    },
    _0x2670af = {
      "alignment": {
        "horizontal": "left",
        "vertical": "center"
      }
    };
  for (let _0x3b6c40 = 0; _0x3b6c40 < _0x1c2c7a[0].length; _0x3b6c40++) {
    {
      const _0x331ce2 = XLSX.utils.encode_cell({
        "r": 0,
        "c": _0x3b6c40
      });
      if (!_0x49c2d0[_0x331ce2]) _0x49c2d0[_0x331ce2] = {};
      _0x49c2d0[_0x331ce2].s = _0x175fef;
    }
  }
  for (let _0x41407e = 1; _0x41407e < _0x1c2c7a.length; _0x41407e++) {
    for (let _0x142606 = 0; _0x142606 < _0x1c2c7a[_0x41407e].length; _0x142606++) {
      const _0x26291d = XLSX.utils.encode_cell({
        "r": _0x41407e,
        "c": _0x142606
      });
      if (!_0x49c2d0[_0x26291d]) _0x49c2d0[_0x26291d] = {};
      _0x49c2d0[_0x26291d].s = _0x2670af;
    }
  }
  XLSX.utils.book_append_sheet(_0x54be75, _0x49c2d0, "今日发货数据");
  XLSX.writeFile(_0x54be75, "今日发货数据.xlsx");
}
async function _0x4068cf(_0x53ec02) {
  try {
    const _0x1daadd = await new Promise((_0x1a12f3, _0xb1b924) => {
      chrome.runtime.sendMessage({
        "type": "getTodySendgoods",
        "mallid": _0x53ec02
      }, _0xf5ff6d => {
        if (chrome.runtime.lastError) {
          _0xb1b924(chrome.runtime.lastError);
        } else {
          _0x1a12f3(_0xf5ff6d);
        }
      });
    });
    return _0x1daadd;
  } catch (_0x28faa8) {
    throw _0x28faa8;
  }
}
async function _0x27e929(_0x2ad4fa) {
  if (_0x2ad4fa === "") {
    return 0;
  }
  const _0x2da412 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse",
    _0x29e4cf = {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x2ad4fa,
      "Content-Type": "application/json"
    },
    _0x5bfa3f = async (_0x123f7d, _0x3278ed) => {
      const _0x3c9805 = JSON.stringify({
          "pageNo": _0x123f7d,
          "pageSize": _0x3278ed,
          "isLack": 0,
          "selectStatusList": [10, 11],
          "priceAdjustRecentDays": 7,
          "onSalesDurationOfflineGte": 0,
          "onSalesDurationOfflineLte": 0,
          "maxRemanentInventoryNum": 1
        }),
        _0x1aad99 = {
          "method": "POST",
          "headers": _0x29e4cf,
          "body": _0x3c9805,
          "redirect": "follow"
        };
      while (true) {
        try {
          {
            const _0x1ad166 = await fetch(_0x2da412, _0x1aad99),
              _0x1afd5c = await _0x1ad166.json();
            if (_0x1afd5c.success === false || _0x1afd5c.errorCode === 4000004) await new Promise(_0x2c7ee4 => setTimeout(_0x2c7ee4, 1500));else {
              return _0x1afd5c.result;
            }
          }
        } catch (_0x4a6236) {
          throw _0x4a6236;
        }
      }
    };
  try {
    const _0x4b71c3 = await _0x5bfa3f(1, 10);
    if (_0x4b71c3.subOrderList.length === 0) return 0;
    const _0x30b3d0 = _0x4b71c3.total,
      _0x5a946d = Math.ceil(_0x30b3d0 / 20),
      _0x56cc7c = [];
    for (let _0x31b69b = 1; _0x31b69b <= _0x5a946d; _0x31b69b++) {
      _0x56cc7c.push(_0x5bfa3f(_0x31b69b, 20));
    }
    const _0x953866 = await Promise.all(_0x56cc7c),
      _0x25ac55 = _0x953866.flatMap(_0xf6ec15 => _0xf6ec15.subOrderList);
    for (var _0x5d0973 of _0x25ac55) {
      {
        if (parseFloat(_0x5d0973.skuQuantityTotalInfo.inventoryNumInfo.warehouseInventoryNum) !== 0) {
          _0x3530ca(_0x2ad4fa, _0x5d0973.productSkcId);
        }
      }
    }
  } catch (_0x2ebb7b) {
    return 0;
  }
}
async function _0x3530ca(_0x3f173a, _0x1afcd4) {
  const _0x2f73f7 = new Headers({
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x3f173a,
      "Content-Type": "application/json"
    }),
    _0x1db56a = JSON.stringify({
      "batchFeedbackDimension": 2,
      "feedbackDimension": 2,
      "remark": "商品已入库多天，麻烦尽快加站开售",
      "feedbackType": 1,
      "productSkcIdList": [_0x1afcd4],
      "feedbackProblemType": 26
    }),
    _0x26098c = {
      "method": "POST",
      "headers": _0x2f73f7,
      "body": _0x1db56a,
      "redirect": "follow"
    };
  try {
    const _0x417c46 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x26098c),
      _0x13be36 = await _0x417c46.text();
  } catch (_0x38ca91) {}
}
async function _0xd42524(_0xc33cac, _0x519944) {
  const _0x12f037 = new Headers();
  _0x12f037.append("accept", "*/*");
  _0x12f037.append("mallid", _0xc33cac);
  _0x12f037.append("Content-Type", "application/json");
  const _0x2661bb = JSON.stringify({
      "batchFeedbackDimension": 2,
      "feedbackType": 1,
      "productSkcIdList": [_0x519944],
      "feedbackProblemType": 29,
      "remark": "上新好久了，因图审还没过。麻烦尽快催一下图片审核，加速上新"
    }),
    _0x21829c = {
      "method": "POST",
      "headers": _0x12f037,
      "body": _0x2661bb,
      "redirect": "follow"
    };
  try {
    const _0x366367 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x21829c);
    await new Promise(_0x4b0f72 => setTimeout(_0x4b0f72, 500));
  } catch (_0x5a270e) {}
}
async function _0x1d3b7f(_0x43fc49) {
  if (_0x43fc49 === "") {
    return 0;
  }
  const _0x8b68cf = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse",
    _0x535f0d = {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x43fc49,
      "Content-Type": "application/json"
    },
    _0x26bf8d = async (_0x14b7eb, _0x1c5f9f) => {
      {
        const _0x2b32f4 = JSON.stringify({
            "pageNo": _0x14b7eb,
            "pageSize": _0x1c5f9f,
            "isLack": 0,
            "pictureAuditStatusList": [1],
            "priceAdjustRecentDays": 7
          }),
          _0x319c0b = {
            "method": "POST",
            "headers": _0x535f0d,
            "body": _0x2b32f4,
            "redirect": "follow"
          };
        while (true) {
          try {
            const _0x2fef17 = await fetch(_0x8b68cf, _0x319c0b),
              _0x421b59 = await _0x2fef17.json();
            if (_0x421b59.success === false) await new Promise(_0x1372f4 => setTimeout(_0x1372f4, 1000));else {
              await new Promise(_0x579a34 => setTimeout(_0x579a34, 500));
              return _0x421b59.result;
            }
          } catch (_0x5aba22) {
            throw _0x5aba22;
          }
        }
      }
    };
  try {
    {
      const _0x256e1e = await _0x26bf8d(1, 1);
      if (_0x256e1e.subOrderList.length === 0) return 0;
      const _0x657e05 = _0x256e1e.total,
        _0x18b9fc = Math.ceil(_0x657e05 / 20),
        _0x2efd87 = [];
      for (let _0x4f4a9f = 1; _0x4f4a9f <= _0x18b9fc; _0x4f4a9f++) {
        _0x2efd87.push(_0x26bf8d(_0x4f4a9f, 20));
      }
      const _0x3f5c6b = await Promise.all(_0x2efd87),
        _0x1ee512 = _0x3f5c6b.flatMap(_0x54781d => _0x54781d.subOrderList);
      for (var _0x59c038 of _0x1ee512) {
        _0xd42524(_0x43fc49, _0x59c038.productSkcId);
      }
    }
  } catch (_0x14b019) {
    return 0;
  }
}
async function _0x393121(_0xc859a9, _0x4c153b, _0x14944b = 0) {
  const _0x4da255 = new Headers();
  _0x4da255.append("accept", "*/*");
  _0x4da255.append("mallid", _0xc859a9);
  _0x4da255.append("Content-Type", "application/json");
  let _0x458c07;
  if (_0x4c153b.length == 1) _0x458c07 = JSON.stringify({
    "adjustId": _0x4c153b[0],
    "result": 2,
    "reason": "做不了"
  });else {
    if (_0x4c153b.length > 1) {
      const _0x3c52a9 = Object.fromEntries(_0x4c153b.map(_0x2824e7 => [_0x2824e7, 2]));
      _0x458c07 = JSON.stringify({
        "adjustResultMap": _0x3c52a9,
        "adjustId": _0x4c153b[0],
        "result": 2
      });
    }
  }
  const _0x130f94 = {
      "method": "POST",
      "headers": _0x4da255,
      "body": _0x458c07,
      "redirect": "follow"
    },
    _0x4ee030 = 3;
  let _0xe241f5 = 0;
  if (_0x14944b == 0) {
    var _0x1e604c = "https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price/purchase-adjust/review";
  } else var _0x1e604c = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price/purchase-adjust/review";
  while (_0xe241f5 < _0x4ee030) {
    try {
      {
        const _0x1ad45b = await fetch(_0x1e604c, _0x130f94),
          _0x49419e = await _0x1ad45b.json();
        if (_0x49419e.success == false) {
          if (_0x49419e.errorMsg != "核价单状态已变更, 请刷新页面重试") throw new Error("请求失败");
        }
        return;
      }
    } catch (_0x2fc5e2) {
      {
        _0xe241f5++;
        if (_0xe241f5 < _0x4ee030) {
          await new Promise(_0x574025 => setTimeout(_0x574025, 1500));
        }
      }
    }
  }
}
async function _0xe1f64c(_0x440c05, _0x1fd508 = 1) {
  if (_0x440c05 === "") {
    return 0;
  }
  var _0x43a1dc = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query";
  const _0x4da46d = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "mallid": _0x440c05,
    "Content-Type": "application/json"
  };
  var _0x2c6730 = 0;
  const _0x500bee = async (_0x9eb3b4, _0x58d736) => {
    {
      if (_0x1fd508 == 1) var _0x10e6ec = JSON.stringify({
        "pageInfo": {
          "pageSize": _0x58d736,
          "pageNo": _0x9eb3b4
        },
        "status": 1
      });else var _0x10e6ec = JSON.stringify({
        "pageInfo": {
          "pageSize": _0x58d736,
          "pageNo": _0x9eb3b4
        },
        "priceType": 0,
        "status": 1
      });
      const _0x393a3f = {
        "method": "POST",
        "headers": _0x4da46d,
        "body": _0x10e6ec,
        "redirect": "follow"
      };
      var _0x9b962a = 10,
        _0x584131 = 0;
      while (_0x9b962a > _0x584131) {
        try {
          {
            const _0x3fc9e8 = await fetch(_0x43a1dc, _0x393a3f),
              _0xbf88d = await _0x3fc9e8.json();
            if (_0xbf88d.success === false) {
              _0xbf88d.errorMsg.includes("半托管") && (_0x43a1dc = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price-adjust/page-query", _0x2c6730 = 1);
              _0x584131 = _0x584131 + 1;
              await new Promise(_0x5c7737 => setTimeout(_0x5c7737, 1000));
            } else {
              {
                if (_0xbf88d.result.list) return _0xbf88d.result;else {
                  _0xbf88d.result.list = [];
                  return _0xbf88d.result;
                }
              }
            }
          }
        } catch (_0x29a8fa) {
          throw _0x29a8fa;
        }
      }
    }
  };
  try {
    {
      const _0x231773 = await _0x500bee(1, 1);
      if (_0x231773.list.length === 0) {
        return 0;
      }
      const _0x11a998 = _0x231773.total,
        _0x63f939 = Math.ceil(_0x11a998 / 40) + 1;
      var _0x2c95c0 = [];
      const _0x3f8700 = 1;
      for (let _0x1a41f7 = 1; _0x1a41f7 <= _0x63f939; _0x1a41f7++) {
        {
          _0x2c95c0 = [];
          const _0x3ba7f7 = _0x500bee(1, 40).then(_0x23f63f => _0x2c95c0.push(_0x23f63f));
          if (_0x2c95c0.length % _0x3f8700 === 0 || _0x1a41f7 === _0x63f939) {
            {
              await _0x3ba7f7;
              const _0x41f3f3 = _0x2c95c0.flatMap(_0xdd1ca9 => _0xdd1ca9.list),
                _0x531b48 = _0x41f3f3.reduce((_0x71c314, _0x30e9da) => {
                  _0x30e9da && (!_0x71c314[_0x30e9da.skcId] && (_0x71c314[_0x30e9da.skcId] = []), _0x71c314[_0x30e9da.skcId].push([..._0x30e9da.skuInfoItemList.map(_0x7e20d0 => _0x7e20d0.spec).sort(), _0x30e9da.id]));
                  return _0x71c314;
                }, {});
              for (var _0x344ab8 of Object.values(_0x531b48)) {
                {
                  const _0x8f3442 = _0x565d80(_0x344ab8);
                  for (var _0xbbbc60 of _0x8f3442) {
                    const _0x381b02 = _0xbbbc60.map(_0x3ea124 => _0x3ea124[_0x3ea124.length - 1]).filter(_0x1777bc => typeof _0x1777bc === "number");
                    await _0x393121(_0x440c05, _0x381b02, _0x2c6730);
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x35461f) {
    console.log(_0x35461f);
    return 0;
  }
}
async function _0x439d7a(_0x293ef1, _0x180188) {
  const _0x39f364 = new Headers();
  _0x39f364.append("accept", "*/*");
  _0x39f364.append("mallid", _0x293ef1);
  _0x39f364.append("Content-Type", "application/json");
  const _0x3a476e = JSON.stringify({
      "subPurchaseOrderSnList": [_0x180188]
    }),
    _0x5e78eb = {
      "method": "POST",
      "headers": _0x39f364,
      "body": _0x3a476e,
      "redirect": "follow"
    };
  try {
    {
      const _0xa30923 = await fetch("https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/batchCancelSubPurchaseOrder", _0x5e78eb);
    }
  } catch (_0x22a4e2) {}
}
async function _0x34def9(_0x3879b6) {
  if (_0x3879b6 === "") {
    return 0;
  }
  const _0xd31c69 = "https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/querySubOrderList",
    _0x57bfc9 = {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x3879b6,
      "Content-Type": "application/json"
    },
    _0x548e07 = async (_0x2bde69, _0x25463a) => {
      {
        const _0x9d48ce = JSON.stringify({
            "pageNo": _0x2bde69,
            "pageSize": _0x25463a,
            "urgencyType": 0,
            "isCustomGoods": false,
            "statusList": [0],
            "oneDimensionSort": {
              "firstOrderByParam": "expectLatestDeliverTime",
              "firstOrderByDesc": 0
            }
          }),
          _0x3c2575 = {
            "method": "POST",
            "headers": _0x57bfc9,
            "body": _0x9d48ce,
            "redirect": "follow"
          };
        while (true) {
          try {
            const _0x57874d = await fetch(_0xd31c69, _0x3c2575),
              _0xa9fe18 = await _0x57874d.json();
            if (_0xa9fe18.success === false || _0xa9fe18.errorCode === 4000004) await new Promise(_0x33bf49 => setTimeout(_0x33bf49, 1500));else {
              return _0xa9fe18.result;
            }
          } catch (_0x21d416) {
            throw _0x21d416;
          }
        }
      }
    };
  try {
    const _0x121c10 = await _0x548e07(1, 1);
    if (_0x121c10.subOrderForSupplierList.length === 0) {
      return 0;
    }
    const _0x56ddc7 = _0x121c10.total,
      _0x465918 = Math.ceil(_0x56ddc7 / 20),
      _0x52e7b4 = [];
    for (let _0x207eb5 = 1; _0x207eb5 <= _0x465918; _0x207eb5++) {
      _0x52e7b4.push(_0x548e07(_0x207eb5, 20));
    }
    const _0xc85b5f = await Promise.all(_0x52e7b4);
    var _0x1c8273 = _0xc85b5f.flatMap(_0x47567a => _0x47567a.subOrderForSupplierList);
    for (var _0x4a7891 of _0x1c8273) {
      _0x439d7a(_0x3879b6, _0x4a7891.subPurchaseOrderSn);
    }
  } catch (_0x905aac) {
    return 0;
  }
}
async function _0x180fa3(_0x337d4e, _0x581adf) {
  const _0x193970 = new Headers();
  _0x193970.append("accept", "*/*");
  _0x193970.append("mallid", _0x337d4e);
  _0x193970.append("Content-Type", "application/json");
  const _0xbb6827 = JSON.stringify({
      "feedbackType": 2,
      "feedbackDimension": 2,
      "productSkcId": _0x581adf,
      "feedbackProblemType": 42,
      "remark": "该产品已经降价，前端售价异常，麻烦前端同步一下价格"
    }),
    _0x1054b5 = {
      "method": "POST",
      "headers": _0x193970,
      "body": _0xbb6827,
      "redirect": "follow"
    };
  try {
    const _0x4ab0c6 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0x1054b5),
      _0x134e86 = await _0x4ab0c6.text();
  } catch (_0x579f71) {
    console.error(_0x579f71);
  }
}
async function _0xac07b(_0x255029) {
  if (_0x255029 === "") {
    return 0;
  }
  const _0x36dfda = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query",
    _0x5caabb = {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x255029,
      "Content-Type": "application/json"
    },
    _0x57d53f = async (_0x13fdcb, _0x5bb1b1) => {
      const _0x2a8a5c = JSON.stringify({
          "pageInfo": {
            "pageSize": _0x5bb1b1,
            "pageNo": _0x13fdcb
          },
          "status": 2,
          "createdAtBegin": new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
          "createdAtEnd": new Date(new Date().setHours(23, 59, 59, 999)).getTime()
        }),
        _0x5a9465 = {
          "method": "POST",
          "headers": _0x5caabb,
          "body": _0x2a8a5c,
          "redirect": "follow"
        };
      while (true) {
        try {
          const _0xac2188 = await fetch(_0x36dfda, _0x5a9465),
            _0x56b6c3 = await _0xac2188.json();
          if (_0x56b6c3.success === false) await new Promise(_0x26458a => setTimeout(_0x26458a, 500));else return _0x56b6c3.result;
        } catch (_0x77f29d) {
          throw _0x77f29d;
        }
      }
    };
  try {
    {
      const _0x15e8ed = await _0x57d53f(1, 1);
      if (_0x15e8ed.list.length === 0) return 0;
      const _0xcc57e7 = _0x15e8ed.total,
        _0x4bbb47 = Math.ceil(_0xcc57e7 / 20),
        _0x2cd217 = [];
      for (let _0x180233 = 1; _0x180233 <= _0x4bbb47; _0x180233++) {
        _0x2cd217.push(_0x57d53f(_0x180233, 20));
      }
      const _0xb3c09b = await Promise.all(_0x2cd217),
        _0x4e8ab4 = _0xb3c09b.flatMap(_0x3937bc => _0x3937bc.list),
        _0x4c46d5 = _0x4e8ab4.map(_0x34c6a2 => _0x34c6a2.skcId),
        _0x28882e = [...new Set(_0x4c46d5)];
      for (const _0x5280df of _0x28882e) {
        _0x180fa3(_0x255029, _0x5280df);
      }
    }
  } catch (_0xb18c7f) {
    return 0;
  }
}
async function _0x384869(_0x56acb0, _0x2c3f6d) {
  const _0x3a3fad = new Headers();
  _0x3a3fad.append("accept", "*/*");
  _0x3a3fad.append("mallid", _0x56acb0);
  _0x3a3fad.append("Content-Type", "application/json");
  const _0x88d006 = JSON.stringify({
      "feedbackType": 2,
      "productSkuId": _0x2c3f6d,
      "feedbackProblemType": 34,
      "remark": "上新很久了，价格一直申报中，麻烦处理一下！"
    }),
    _0xace48 = {
      "method": "POST",
      "headers": _0x3a3fad,
      "body": _0x88d006,
      "redirect": "follow"
    };
  try {
    {
      const _0x532a5c = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0xace48),
        _0x1c754b = await _0x532a5c.text();
    }
  } catch (_0x57af94) {
    console.error(_0x57af94);
  }
}
async function _0x479069(_0x2777e6) {
  if (_0x2777e6 === "") return 0;
  const _0x46ded1 = "https://seller.kuajingmaihuo.com/marvel-supplier/api/xmen/select/search",
    _0x1801f4 = {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "mallid": _0x2777e6,
      "Content-Type": "application/json"
    },
    _0x4d1732 = async (_0x23a768, _0x5d344a) => {
      {
        const _0x5612f6 = JSON.stringify({
            "pageSize": _0x5d344a,
            "pageNum": _0x23a768,
            "priceReviewStatusList": [0],
            "secondarySelectStatusList": [7],
            "supplierTodoTypeList": []
          }),
          _0x2075f8 = {
            "method": "POST",
            "headers": _0x1801f4,
            "body": _0x5612f6,
            "redirect": "follow"
          };
        while (true) {
          try {
            {
              const _0x499eb9 = await fetch(_0x46ded1, _0x2075f8),
                _0x305e6a = await _0x499eb9.json();
              if (_0x305e6a.success === false) await new Promise(_0x1f76b9 => setTimeout(_0x1f76b9, 500));else return _0x305e6a.result;
            }
          } catch (_0x16f48d) {
            throw _0x16f48d;
          }
        }
      }
    };
  try {
    {
      const _0x1429d9 = await _0x4d1732(1, 1);
      if (_0x1429d9.dataList.length === 0) return 0;
      const _0xcf7eb1 = _0x1429d9.total,
        _0x543832 = Math.ceil(_0xcf7eb1 / 20),
        _0x4061c4 = [];
      for (let _0x74977c = 1; _0x74977c <= _0x543832; _0x74977c++) {
        _0x4061c4.push(_0x4d1732(_0x74977c, 20));
      }
      const _0x1c4584 = await Promise.all(_0x4061c4),
        _0x5e3b9f = _0x1c4584.flatMap(_0x5c57ab => _0x5c57ab.dataList),
        _0x512eba = _0x5e3b9f.map(_0x5934c6 => _0x5934c6.skcList[0].skuList[0].skuId),
        _0x51e126 = [...new Set(_0x512eba)];
      for (const _0x59ec89 of _0x51e126) {
        _0x384869(_0x2777e6, _0x59ec89);
      }
    }
  } catch (_0x5e7366) {
    return 0;
  }
}
var _0x3cf257 = chrome.runtime.getURL("web/css/flatpickr.min.css"),
  _0x2de8ef = document.querySelector("link[href=\"" + _0x3cf257 + "\"]");
if (!_0x2de8ef) {
  const _0x4508bf = document.createElement("link");
  _0x4508bf.rel = "stylesheet";
  _0x4508bf.href = _0x3cf257;
  document.head.appendChild(_0x4508bf);
}
var _0x56944e = document.createElement("div");
_0x56944e.id = "pluginId";
_0x56944e.setAttribute("data-id", chrome.runtime.id);
document.body.appendChild(_0x56944e);
function _0x2b3bf5(_0x3a84ef) {
  _0x3a84ef.forEach(_0x47e823 => {
    const _0x1e866a = document.createElement("script");
    _0x1e866a.setAttribute("src", chrome.runtime.getURL(_0x47e823));
    document.head.appendChild(_0x1e866a);
  });
}
_0x2b3bf5(["web/js/hxk.js"]);
_0x2b3bf5(["web/js/exceljs.min.js"]);
_0x2b3bf5(["web/js/exexportPhotoDataToExcel.js"]);
chrome.runtime.onMessage.addListener(function (_0x28cbd5, _0xcf96bc, _0x4b4e1b) {
  if (_0x28cbd5.type === "webData") {
    _0x56c091 = typeof _0x28cbd5.data === "string" ? JSON.parse(_0x28cbd5.data) : _0x28cbd5.data;
    _0x4b4e1b({
      "status": "success"
    });
    return true;
  } else {
    if (_0x28cbd5.type === "baodanBoxaddSiteBg") {
      _0x5f2905();
      _0x3130b9().then(_0x298fe2 => {
        _0x27e929(_0x298fe2).then(() => {
          _0x4eec58();
          _0x4b4e1b({
            "status": "success"
          });
          _0x19c80f("入库商品已完成加站点反馈。");
        });
      });
      return true;
    } else {
      if (_0x28cbd5.type === "addPhotoSiteBg") return _0x5f2905(), _0x3130b9().then(_0x44871d => {
        _0x1d3b7f(_0x44871d).then(() => {
          _0x4eec58();
          _0x4b4e1b({
            "status": "success"
          });
          _0x19c80f("商品已完成图审申请。");
        });
      }), true;else {
        if (_0x28cbd5.type === "cancelAllStockListBg") return _0x5f2905(), _0x3130b9().then(_0x1e9626 => {
          _0x34def9(_0x1e9626).then(() => {
            _0x4eec58();
            _0x4b4e1b({
              "status": "success"
            });
            _0x19c80f("已完成，请点击查询或刷新页面查看！");
          });
        }), true;else {
          if (_0x28cbd5.type === "applyPriceSyncBg") {
            _0x5f2905();
            _0x3130b9().then(_0x331828 => {
              _0xac07b(_0x331828).then(() => {
                _0x4eec58();
                _0x4b4e1b({
                  "status": "success"
                });
                _0x19c80f("当天调价商品已完成同步调价申请");
              });
            });
            return true;
          } else {
            if (_0x28cbd5.type === "urgePriceSyncBg") {
              _0x5f2905();
              _0x3130b9().then(_0x32410a => {
                _0x479069(_0x32410a).then(() => {
                  _0x4eec58();
                  _0x4b4e1b({
                    "status": "success"
                  });
                  _0x19c80f("价格申报中的商品已经成功反馈！");
                });
              });
              return true;
            } else {
              if (_0x28cbd5.type === "refusePriceSyncAllBg") {
                _0x5f2905();
                _0x3130b9().then(_0x4d55e9 => {
                  _0xe1f64c(_0x4d55e9).then(() => {
                    _0x4eec58();
                    _0x4b4e1b({
                      "status": "success"
                    });
                    _0x19c80f("所有待确认调价的商品，已全部拒绝！");
                  });
                });
                return true;
              } else {
                if (_0x28cbd5.type === "refusePriceSyncDailyBg") return _0x5f2905(), _0x3130b9().then(_0x18d4ee => {
                  _0xe1f64c(_0x18d4ee, 2).then(() => {
                    _0x4eec58();
                    _0x4b4e1b({
                      "status": "success"
                    });
                    _0x19c80f("日常待确认调价的商品，已全部拒绝！");
                  });
                }), true;else {
                  if (_0x28cbd5.type === "exportShippedTodayBg") return _0x5f2905(), _0x3130b9().then(_0x3b6555 => {
                    _0x4068cf(_0x3b6555).then(_0x4d5d9f => {
                      var _0x1eff22 = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0)),
                        _0x12f280 = [];
                      for (var _0x46409a = 0; _0x46409a < _0x4d5d9f.length; _0x46409a++) {
                        {
                          var _0x1f50e5 = [],
                            _0x340c32 = _0x4d5d9f[_0x46409a];
                          if (parseInt(_0x340c32.deliverInfo.deliverTime) >= _0x1eff22) {
                            var _0x15d264 = _0x340c32.subPurchaseOrderSn,
                              _0x2d5986 = _0x340c32.productSkcId,
                              _0x328e9b = _0x340c32.productName;
                            for (var _0x19bd1d = 0; _0x19bd1d < _0x340c32.skuQuantityDetailList.length; _0x19bd1d++) {
                              {
                                var _0x4baea1 = _0x340c32.skuQuantityDetailList[_0x19bd1d].productSkuId,
                                  _0x2606fc = _0x340c32.skuQuantityDetailList[_0x19bd1d].className,
                                  _0x80da06 = parseInt(_0x340c32.skuQuantityDetailList[_0x19bd1d].deliverQuantity) ? parseFloat(_0x340c32.skuQuantityDetailList[_0x19bd1d].deliverQuantity) : 0,
                                  _0x5339ad = parseFloat(_0x340c32.skuQuantityDetailList[_0x19bd1d].supplierPrice) ? parseFloat(_0x340c32.skuQuantityDetailList[_0x19bd1d].supplierPrice) / 100 : 0,
                                  _0x29ffe9 = _0x80da06 * _0x5339ad;
                                _0x1f50e5.push([_0x4baea1, _0x2606fc, _0x80da06, _0x5339ad.toFixed(2), _0x29ffe9.toFixed(2)]);
                              }
                            }
                            _0x12f280.push([_0x15d264, _0x2d5986, _0x328e9b, _0x1f50e5]);
                          }
                        }
                      }
                      _0x4b4e1b({
                        "status": "success"
                      });
                      _0x4eec58();
                      _0x5004de(_0x12f280);
                    }).catch(_0x3056b9 => {
                      _0x4eec58();
                      _0x4b4e1b({
                        "status": "no"
                      });
                      _0x19c80f("导出数据不完整，请检查网络后重新尝试");
                    });
                  }), true;else {
                    if (_0x28cbd5.type === "exportShippedHistoryBg") {
                      {
                        var _0x2e9167 = _0x28cbd5.startDate,
                          _0xf8b8d2 = _0x28cbd5.endDate;
                        _0x5f2905();
                        _0xb52f9().then(_0x993aab => {
                          chrome.runtime.sendMessage({
                            "type": "exportStockListHistory",
                            "mallId": _0x993aab,
                            "startDate": _0x2e9167,
                            "endDate": _0xf8b8d2
                          }).then(_0x247289 => {
                            if (_0x247289) {
                              {
                                var _0x431381 = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                                _0x3de897(_0x247289, _0x431381, 1, _0x2e9167 + "至" + _0xf8b8d2 + "已发货备货单数据.xlsx");
                                _0x4b4e1b({
                                  "status": "success"
                                });
                              }
                            } else _0x4eec58(), _0x4b4e1b({
                              "status": "no"
                            });
                          });
                        });
                        return true;
                      }
                    } else {
                      if (_0x28cbd5.type === "exportSalesHistoryAllBg") {
                        {
                          var _0x2e9167 = _0x28cbd5.startDate,
                            _0xf8b8d2 = _0x28cbd5.endDate;
                          _0x5f2905();
                          _0xb52f9().then(_0x4e6fc3 => {
                            chrome.runtime.sendMessage({
                              "type": "exportSalesHistory",
                              "mallId": _0x4e6fc3,
                              "startDate": _0x2e9167,
                              "endDate": _0xf8b8d2
                            }).then(_0x3ea41e => {
                              var _0x4a1179 = _0x3ea41e.saveSaleExcel;
                              if (_0x4a1179) _0x4eec58(), _0x4a1179.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x2e9167 + "至" + _0xf8b8d2 + "销量", "当前仓内可用库存"]), _0x1b0ca0(_0x3ea41e.saveSaleExcel, _0x2e9167 + "至" + _0xf8b8d2 + "销售数据.xlsx"), _0x4b4e1b({
                                "status": "success"
                              });else {
                                _0x4eec58();
                                _0x4b4e1b({
                                  "status": "no"
                                });
                              }
                            });
                          });
                          return true;
                        }
                      } else {
                        if (_0x28cbd5.type === "exportReturnDetailBg") {
                          {
                            var _0x2e9167 = _0x28cbd5.startDate,
                              _0xf8b8d2 = _0x28cbd5.endDate;
                            _0x5f2905();
                            _0xb52f9().then(_0x4adfca => {
                              chrome.runtime.sendMessage({
                                "type": "exportTuihuoDetail",
                                "mallId": _0x4adfca,
                                "startDate": _0x2e9167,
                                "endDate": _0xf8b8d2
                              }).then(_0x2cb9b1 => {
                                {
                                  var _0x1beed8 = new Date(parseInt(_0x2e9167)).toISOString().slice(0, 19).replace("T", " "),
                                    _0x271239 = new Date(parseInt(_0xf8b8d2)).toISOString().slice(0, 19).replace("T", " ");
                                  if (_0x2cb9b1) {
                                    var _0x549053 = ["SPU", "SKU", "商品图片", "sku属性信息", "备货单号", "退货原因", "退货包裹号", "SKU件数", "出库时间"];
                                    _0x3de897(_0x2cb9b1, _0x549053, 2, _0x1beed8 + "至" + _0x271239 + "退货明细数据.xlsx");
                                    _0x4b4e1b({
                                      "status": "success"
                                    });
                                  } else _0x4eec58(), _0x4b4e1b({
                                    "status": "no"
                                  });
                                }
                              });
                            });
                            return true;
                          }
                        } else {
                          if (_0x28cbd5.type === "exportConsumerAfterSalesIssuesBg") {
                            {
                              var _0x2e9167 = _0x28cbd5.startDate,
                                _0xf8b8d2 = _0x28cbd5.endDate;
                              _0x5f2905();
                              _0xb52f9().then(_0x36147c => {
                                chrome.runtime.sendMessage({
                                  "type": "exportConsumerAfterSales",
                                  "mallId": _0x36147c,
                                  "startDate": _0x2e9167,
                                  "endDate": _0xf8b8d2
                                }).then(_0x1a0936 => {
                                  var _0x5eeb09 = new Date(parseInt(_0x2e9167)).toISOString().slice(0, 19).replace("T", " "),
                                    _0x46413a = new Date(parseInt(_0xf8b8d2)).toISOString().slice(0, 19).replace("T", " ");
                                  if (_0x1a0936.length > 0) {
                                    _0x4eec58();
                                    var _0x38b788 = Object.values(_0x1a0936.reduce((_0xf3a2cb, [_0x389282, _0x4dc58b, _0x30685d, _0x2542f3, _0x802ef2, _0xdc01f, _0x5eed54]) => {
                                      if (!_0xf3a2cb[_0x4dc58b]) _0xf3a2cb[_0x4dc58b] = [_0x389282, _0x4dc58b, _0x30685d, _0x2542f3, 0, _0xdc01f, _0x5eed54];
                                      _0xf3a2cb[_0x4dc58b][4] += parseFloat(_0x802ef2);
                                      return _0xf3a2cb;
                                    }, {}));
                                    _0x1a0936.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                    _0x38b788.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                    _0x1b0ca0(_0x1a0936, _0x5eeb09 + "至" + _0x46413a + "消费者及履约保障-售后问题.xlsx", _0x38b788);
                                    _0x4b4e1b({
                                      "status": "success"
                                    });
                                  } else _0x4eec58(), _0x4b4e1b({
                                    "status": "no"
                                  }), _0x19c80f("无数据/非TEMU主账号，导出失败");
                                });
                              });
                              return true;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
function _0xb97083(_0x1a02f3) {
  return new Promise(_0x4bf733 => {
    chrome.storage.local.get(_0x1a02f3, function (_0x39629d) {
      _0x4bf733(_0x39629d[_0x1a02f3] ? JSON.parse(_0x39629d[_0x1a02f3]) : false);
    });
  });
}
function _0x377710(_0x2e6378) {
  const _0x4c3c97 = document.createElement("div");
  _0x4c3c97.classList.add("popup");
  _0x4c3c97.style.position = "fixed";
  _0x4c3c97.style.top = "0";
  _0x4c3c97.style.left = "0";
  _0x4c3c97.style.width = "100%";
  _0x4c3c97.style.height = "100%";
  _0x4c3c97.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  _0x4c3c97.style.display = "flex";
  _0x4c3c97.style.justifyContent = "center";
  _0x4c3c97.style.alignItems = "center";
  _0x4c3c97.style.zIndex = "1000";
  const _0x383afb = document.createElement("div");
  _0x383afb.classList.add("popup-content");
  _0x383afb.style.backgroundColor = "#ffffff";
  _0x383afb.style.padding = "20px";
  _0x383afb.style.borderRadius = "8px";
  _0x383afb.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
  _0x383afb.style.maxWidth = "90%";
  _0x383afb.style.maxHeight = "80%";
  _0x383afb.style.overflowY = "auto";
  _0x383afb.style.position = "relative";
  _0x383afb.style.animation = "slideIn 0.3s ease-in-out";
  const _0x3149e6 = document.createElement("button");
  _0x3149e6.classList.add("close-btn");
  _0x3149e6.innerText = "关闭";
  _0x3149e6.style.position = "absolute";
  _0x3149e6.style.top = "5px";
  _0x3149e6.style.right = "15px";
  _0x3149e6.style.backgroundColor = "#ff4d4d";
  _0x3149e6.style.color = "white";
  _0x3149e6.style.border = "none";
  _0x3149e6.style.cursor = "pointer";
  _0x3149e6.style.borderRadius = "5px";
  _0x3149e6.style.transition = "background-color 0.3s ease";
  _0x3149e6.addEventListener("click", function () {
    _0x4c3c97.remove();
  });
  _0x3149e6.addEventListener("mouseover", function () {
    _0x3149e6.style.backgroundColor = "#e03e3e";
  });
  _0x3149e6.addEventListener("mouseout", function () {
    _0x3149e6.style.backgroundColor = "#ff4d4d";
  });
  _0x383afb.appendChild(_0x3149e6);
  const _0x537f56 = document.createElement("div");
  _0x537f56.style.display = "flex";
  _0x537f56.style.justifyContent = "center";
  _0x537f56.style.marginBottom = "20px";
  const _0x4a785f = ["全部", "进行中", "未开始"];
  _0x4a785f.forEach(_0x37ec5f => {
    {
      const _0x1c78c5 = document.createElement("button");
      _0x1c78c5.innerText = _0x37ec5f;
      _0x1c78c5.style.backgroundColor = "transparent";
      _0x1c78c5.style.color = "#333";
      _0x1c78c5.style.border = "1px solid #ccc";
      _0x1c78c5.style.padding = "8px 16px";
      _0x1c78c5.style.margin = "0 10px";
      _0x1c78c5.style.cursor = "pointer";
      _0x1c78c5.style.borderRadius = "5px";
      _0x1c78c5.style.transition = "all 0.3s ease";
      _0x1c78c5.addEventListener("click", function () {
        _0x427c05(_0x37ec5f);
      });
      _0x1c78c5.addEventListener("mouseover", function () {
        _0x1c78c5.style.backgroundColor = "#f1f1f1";
      });
      _0x1c78c5.addEventListener("mouseout", function () {
        _0x1c78c5.style.backgroundColor = "transparent";
      });
      _0x537f56.appendChild(_0x1c78c5);
    }
  });
  _0x383afb.appendChild(_0x537f56);
  const _0x56d14d = document.createElement("div");
  _0x56d14d.id = "coupon-container";
  _0x383afb.appendChild(_0x56d14d);
  const _0x25b655 = document.createElement("table");
  _0x25b655.style.width = "100%";
  _0x25b655.style.borderCollapse = "collapse";
  _0x25b655.style.tableLayout = "fixed";
  _0x25b655.style.marginTop = "20px";
  const _0x292607 = document.createElement("thead"),
    _0x4e3784 = document.createElement("tr"),
    _0x3a41b3 = ["SKU属性集", "日常申报价", "活动申报价", "报名时间", "活动类型", "报名场次", "提报数量", "剩余数量", "活动状态"];
  _0x3a41b3.forEach(_0x12fe97 => {
    const _0x24f542 = document.createElement("th");
    _0x24f542.innerText = _0x12fe97;
    _0x24f542.style.padding = "12px";
    _0x24f542.style.textAlign = "left";
    _0x24f542.style.borderBottom = "1px solid #e0e0e0";
    _0x24f542.style.backgroundColor = "#f8f9fa";
    _0x24f542.style.color = "#333";
    _0x24f542.style.fontWeight = "bold";
    _0x24f542.style.position = "sticky";
    _0x24f542.style.top = "0";
    _0x4e3784.appendChild(_0x24f542);
  });
  _0x292607.appendChild(_0x4e3784);
  _0x25b655.appendChild(_0x292607);
  const _0x4d4744 = document.createElement("tbody"),
    _0xf39b0a = [..._0x2e6378];
  function _0x427c05(_0x511357) {
    {
      let _0x1913ac;
      if (_0x511357 === "全部") _0x1913ac = _0xf39b0a;else {
        if (_0x511357 === "进行中") _0x1913ac = _0xf39b0a.filter(_0xf269b9 => _0xf269b9[8] === "进行中");else _0x511357 === "未开始" && (_0x1913ac = _0xf39b0a.filter(_0x5a2abe => _0x5a2abe[8] === "未开始"));
      }
      _0x4d4744.innerHTML = "";
      _0x1913ac.forEach(_0x293a78 => {
        const _0x43d17c = document.createElement("tr");
        let _0x15cce2 = _0x293a78[5].slice(0, 3),
          _0x20f234 = "<span class=\"moreActivate\" style=\"color: rgb(0, 123, 255); cursor: pointer; text-decoration: underline;\">更多</span>";
        _0x43d17c.innerHTML = "\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[0] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[1] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[2] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[3] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[4] + "</td>\n                <td style=\"font-size: 13px; padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">\n                    " + _0x15cce2.join("<br>") + "<br>" + _0x20f234 + "\n                </td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[6] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[7] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x293a78[8] + "</td>\n            ";
        _0x4d4744.appendChild(_0x43d17c);
        _0x43d17c.querySelector(".moreActivate").addEventListener("click", function () {
          _0x24efe4(this, _0x293a78[5].join("<br>"));
        });
      });
    }
  }
  _0x25b655.appendChild(_0x4d4744);
  _0x383afb.appendChild(_0x25b655);
  _0x4c3c97.appendChild(_0x383afb);
  document.body.appendChild(_0x4c3c97);
  _0x427c05("全部");
  _0x25b655.style.maxHeight = "500px";
  _0x25b655.style.overflowY = "auto";
  _0x25b655.style.display = "block";
  _0x25b655.style.scrollbarWidth = "thin";
  _0x25b655.style.scrollbarColor = "#007bff #f1f1f1";
  _0x25b655.style.webkitOverflowScrolling = "touch";
  const _0x76102a = _0x25b655.querySelector("::-webkit-scrollbar-thumb");
  _0x76102a && (_0x76102a.style.backgroundColor = "#007bff", _0x76102a.style.borderRadius = "5px");
  const _0x4bf2ec = _0x25b655.querySelector("::-webkit-scrollbar-track");
  _0x4bf2ec && (_0x4bf2ec.style.backgroundColor = "#f1f1f1", _0x4bf2ec.style.borderRadius = "5px");
  const _0x4c9d15 = _0x383afb.querySelectorAll(".more");
  _0x4c9d15.forEach(_0x307eb3 => {
    _0x307eb3.style.color = "#007bff";
    _0x307eb3.style.cursor = "pointer";
    _0x307eb3.style.textDecoration = "underline";
  });
}
function _0x507c5f(_0x31d90a) {
  if (_0x31d90a.length === 0) {
    const _0x4c8975 = document.createElement("div");
    _0x4c8975.style.cssText = "font-family: Arial, sans-serif; color: #777; text-align: center; font-size: 14px; padding: 20px;";
    _0x4c8975.textContent = "暂无可显示的券信息";
    document.getElementById("coupon-container").appendChild(_0x4c8975);
    return;
  }
  const _0x22843d = document.createElement("div");
  _0x22843d.style.cssText = "font-family: Arial, sans-serif; max-width: 100%; margin: 10px auto; padding: 8px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between; font-size: 15px;";
  const [_0x5d3350, _0x4967fd, _0x5e8aee, _0x1d6d47, _0xcc5103, _0x34aa9e] = _0x31d90a[0],
    _0x56ce61 = document.createElement("span");
  _0x56ce61.style.cssText = "font-weight: bold; color: #333; flex-basis: 100%; text-align: center; font-size: 14px;";
  _0x56ce61.textContent = "【" + _0x5d3350 + "】";
  _0x22843d.appendChild(_0x56ce61);
  const _0x11af72 = document.createElement("div");
  _0x11af72.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap; justify-content: space-around; width: 100%; text-align: center;";
  const _0x54f41a = [{
    "label": "券金额",
    "value": "CNY " + _0x4967fd,
    "color": "#f56c6c"
  }, {
    "label": "发行数量",
    "value": _0x5e8aee,
    "color": "#2d8cf0"
  }, {
    "label": "领券数量",
    "value": _0x1d6d47,
    "color": "#2d8cf0"
  }, {
    "label": "用券数量",
    "value": _0xcc5103,
    "color": "#2d8cf0"
  }];
  _0x54f41a.forEach(_0x364081 => {
    const _0x2b6ed2 = document.createElement("span");
    _0x2b6ed2.style.color = "#555";
    _0x2b6ed2.innerHTML = _0x364081.label + " <strong style=\"color: " + _0x364081.color + "; font-size: 22px;\">" + _0x364081.value + "</strong>";
    _0x11af72.appendChild(_0x2b6ed2);
  });
  _0x22843d.appendChild(_0x11af72);
  const _0x56df3f = document.createElement("div");
  _0x56df3f.style.cssText = "width: 100%; text-align: center; color: #555; font-size: 13px;";
  _0x56df3f.innerHTML = "发券时间 <strong style=\"color: #999;\">" + _0x34aa9e + "</strong>";
  _0x22843d.appendChild(_0x56df3f);
  document.getElementById("coupon-container").appendChild(_0x22843d);
}
async function _0x13851a(_0x34efe6, _0x557150) {
  const _0x2a9b0a = new Headers();
  _0x2a9b0a.append("accept", "*/*");
  _0x2a9b0a.append("accept-language", "zh-CN,zh;q=0.9");
  _0x2a9b0a.append("cache-control", "no-cache");
  _0x2a9b0a.append("content-type", "application/json");
  _0x2a9b0a.append("mallid", _0x557150);
  const _0x52a804 = JSON.stringify({
      "pageNo": 1,
      "pageSize": 10,
      "productSkuIds": [_0x34efe6],
      "state": 1
    }),
    _0x2c78f9 = {
      "method": "POST",
      "headers": _0x2a9b0a,
      "body": _0x52a804,
      "redirect": "follow"
    };
  let _0x5c1b90 = 0,
    _0x4ce591,
    _0x11acc9;
  while (_0x5c1b90 < 3) {
    try {
      _0x4ce591 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/coupon/page/query", _0x2c78f9);
      if (!_0x4ce591.ok) {
        throw new Error("请求失败，状态码: " + _0x4ce591.status);
      }
      _0x11acc9 = await _0x4ce591.json();
      break;
    } catch (_0x4b3147) {
      {
        _0x5c1b90++;
        console.error("第 " + _0x5c1b90 + " 次请求失败:", _0x4b3147);
        if (_0x5c1b90 >= 3) {
          _0x11acc9 = {
            "result": {
              "goodsCoupons": []
            }
          };
          break;
        }
      }
    }
  }
  var _0x234ed1 = _0x11acc9.result.goodsCoupons;
  if (_0x234ed1.length == 0) return [];
  var _0x2b4d4a = [];
  for (let _0xf9e46f = 0; _0xf9e46f < _0x234ed1.length; _0xf9e46f++) {
    {
      var _0x33ab07 = (parseFloat(_0x234ed1[_0xf9e46f].couponAmount) / 100).toFixed(2),
        _0x53860d = _0x234ed1[_0xf9e46f].punishCount,
        _0x13e555 = _0x234ed1[_0xf9e46f].claimedCount,
        _0xee8484 = _0x234ed1[_0xf9e46f].useCount,
        _0x1f37de = new Date(parseInt(_0x234ed1[_0xf9e46f].beginTime)).toISOString().slice(0, 10) + " 00:00:00" + " ～ " + new Date(parseInt(_0x234ed1[_0xf9e46f].endTime)).toISOString().slice(0, 10) + " 23:59:59",
        _0x209397 = [_0x234ed1[_0xf9e46f].title, _0x33ab07, _0x53860d, _0x13e555, _0xee8484, _0x1f37de];
      _0x2b4d4a.push(_0x209397);
    }
  }
  return _0x2b4d4a;
}
function _0x24efe4(_0x1f0ffb, _0x59df61) {
  try {
    const _0x534ac2 = document.createElement("div");
    _0x534ac2.style.zIndex = "9999";
    _0x534ac2.style.width = "activateFit-content";
    _0x534ac2.style.maxHeight = "250px";
    _0x534ac2.style.display = "block";
    _0x534ac2.style.position = "fixed";
    _0x534ac2.style.backgroundColor = "#fff";
    _0x534ac2.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    _0x534ac2.style.borderRadius = "5px";
    _0x534ac2.style.fontSize = "13px";
    const _0x3f94bd = document.createElement("div");
    _0x3f94bd.style.maxHeight = "200px";
    _0x3f94bd.style.overflowY = "auto";
    _0x3f94bd.style.scrollbarWidth = "thin";
    _0x3f94bd.style.scrollbarColor = "hsl(205deg, 16%, 77%) rgb(241, 241, 241);";
    _0x3f94bd.style.padding = "10px";
    _0x3f94bd.style.whiteSpace = "pre-wrap";
    _0x3f94bd.style.wordWrap = "break-word";
    _0x3f94bd.innerHTML = _0x59df61;
    _0x534ac2.appendChild(_0x3f94bd);
    const _0x48fdc4 = document.createElement("span");
    _0x48fdc4.innerHTML = "&#10006;";
    _0x48fdc4.style.position = "absolute";
    _0x48fdc4.style.top = "5px";
    _0x48fdc4.style.right = "20px";
    _0x48fdc4.style.fontSize = "20px";
    _0x48fdc4.style.cursor = "pointer";
    _0x48fdc4.style.color = "#999";
    _0x48fdc4.style.transition = "color 0.3s";
    _0x48fdc4.addEventListener("click", function () {
      _0x534ac2.remove();
    });
    _0x48fdc4.addEventListener("mouseover", function () {
      _0x48fdc4.style.color = "#ff4d4d";
    });
    _0x48fdc4.addEventListener("mouseout", function () {
      _0x48fdc4.style.color = "#999";
    });
    const _0x3864a0 = _0x1f0ffb.getBoundingClientRect();
    _0x534ac2.style.left = _0x3864a0.left + window.scrollX + "px";
    _0x534ac2.style.top = _0x3864a0.top + window.scrollY - _0x534ac2.offsetHeight - 5 + "px";
    _0x534ac2.appendChild(_0x48fdc4);
    document.body.appendChild(_0x534ac2);
  } catch (_0x2c2b8f) {
    console.log(_0x2c2b8f);
  }
}
function _0x2e65a4(_0x3ea3e2, _0x5865f3) {
  const _0xafd378 = document.createElement("div");
  _0xafd378.textContent = _0x3ea3e2;
  _0xafd378.style.position = "fixed";
  _0xafd378.style.top = "40%";
  _0xafd378.style.left = "40%";
  _0xafd378.style.transform = "translate(-50%, -50%)";
  _0xafd378.style.backgroundColor = "#e8f5e9";
  _0xafd378.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0xafd378.style.color = "#1b5e20";
  _0xafd378.style.padding = "20px 30px";
  _0xafd378.style.borderRadius = "12px";
  _0xafd378.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0xafd378.style.fontSize = "18px";
  _0xafd378.style.fontFamily = "Arial, sans-serif";
  _0xafd378.style.textAlign = "center";
  _0xafd378.style.maxWidth = "80%";
  _0xafd378.style.wordWrap = "break-word";
  _0xafd378.style.zIndex = "1000";
  _0xafd378.style.display = "none";
  _0xafd378.style.opacity = "0";
  _0xafd378.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0xafd378);
  setTimeout(() => {
    _0xafd378.style.display = "block";
    _0xafd378.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0xafd378.style.opacity = "0";
    setTimeout(() => {
      _0xafd378.style.display = "none";
      document.body.removeChild(_0xafd378);
    }, 500);
  }, _0x5865f3);
}
function _0x5f2905(_0x3a1785 = 1) {
  var _0x7c7cd3 = document.createElement("div");
  _0x7c7cd3.id = "loader";
  _0x7c7cd3.style.position = "fixed";
  _0x7c7cd3.style.top = "0";
  _0x7c7cd3.style.left = "0";
  _0x7c7cd3.style.width = "100%";
  _0x7c7cd3.style.height = "100%";
  _0x7c7cd3.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  _0x7c7cd3.style.display = "flex";
  _0x7c7cd3.style.flexDirection = "column";
  _0x7c7cd3.style.justifyContent = "center";
  _0x7c7cd3.style.alignItems = "center";
  _0x7c7cd3.style.zIndex = "9999";
  var _0x520049 = document.createElement("div");
  _0x520049.style.position = "relative";
  _0x520049.style.width = "128px";
  _0x520049.style.height = "128px";
  for (let _0x12a998 = 0; _0x12a998 < 3; _0x12a998++) {
    let _0x29cecb = document.createElement("div");
    _0x29cecb.style.position = "absolute";
    _0x29cecb.style.width = "128px";
    _0x29cecb.style.height = "128px";
    _0x29cecb.style.border = "8px solid transparent";
    _0x29cecb.style.borderTop = "8px solid #ffffff";
    _0x29cecb.style.borderRadius = "50%";
    _0x29cecb.style.animation = "spin 1.2s linear infinite";
    _0x29cecb.style.animationDelay = _0x12a998 * 0.4 + "s";
    _0x520049.appendChild(_0x29cecb);
  }
  if (_0x3a1785 != 1) {
    var _0x367212 = document.createElement("button");
    _0x367212.textContent = "0";
    _0x367212.style.position = "absolute";
    _0x367212.style.top = "50%";
    _0x367212.style.left = "50%";
    _0x367212.style.transform = "translate(-50%, -50%)";
    _0x367212.style.padding = "10px 20px";
    _0x367212.style.backgroundColor = "rgb(255 255 255 / 0%)";
    _0x367212.style.border = "none";
    _0x367212.style.borderRadius = "5px";
    _0x367212.style.cursor = "pointer";
    _0x367212.style.height = "70px";
    _0x367212.style.width = "70px";
    _0x367212.style.fontSize = "20px";
    _0x367212.style.color = "#fff";
    var _0x5917ba = 0,
      _0x2dba13 = setInterval(function () {
        if (!_0x367212.isConnected) {
          clearInterval(_0x2dba13);
          return;
        }
        _0x5917ba++;
        _0x367212.textContent = _0x5917ba;
      }, 1000);
    _0x520049.appendChild(_0x367212);
  }
  _0x7c7cd3.appendChild(_0x520049);
  var _0x5abfd2 = document.createElement("div");
  _0x5abfd2.id = "loader-message";
  _0x5abfd2.style.marginTop = "20px";
  _0x5abfd2.style.color = "#ffffff";
  _0x5abfd2.style.fontSize = "18px";
  _0x5abfd2.innerHTML = "处理中，请等待一会...";
  _0x7c7cd3.appendChild(_0x5abfd2);
  document.body.appendChild(_0x7c7cd3);
  var _0x38639c = document.createElement("style");
  _0x38639c.type = "text/css";
  var _0x14015c = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
  _0x38639c.innerHTML = _0x14015c;
  document.getElementsByTagName("head")[0].appendChild(_0x38639c);
}
function _0xd41141(_0x8e0709) {
  var _0x287b9c = document.getElementById("loader-message");
  _0x287b9c && (_0x287b9c.innerHTML = _0x8e0709);
}
function _0x4eec58() {
  var _0x4367fb = document.getElementById("loader");
  if (_0x4367fb) {
    document.body.removeChild(_0x4367fb);
  }
}
async function _0x2ec1e4() {
  function _0x227aaa() {
    var _0x199101 = [];
    _0x199101.push(navigator.userAgent);
    _0x199101.push(navigator.platform);
    _0x199101.push(screen.width + "x" + screen.height);
    _0x199101.push(navigator.language);
    _0x199101.push(new Date().getTimezoneOffset());
    var _0x2f3bb1 = document.createElement("canvas"),
      _0x3f8c3e = _0x2f3bb1.getContext("2d");
    _0x3f8c3e.textBaseline = "top";
    _0x3f8c3e.font = "14px Arial";
    _0x3f8c3e.textBaseline = "alphabetic";
    _0x3f8c3e.fillStyle = "#f60";
    _0x3f8c3e.fillRect(125, 1, 62, 20);
    _0x3f8c3e.fillStyle = "#069";
    _0x3f8c3e.fillText("Hello, world!", 2, 15);
    _0x3f8c3e.fillStyle = "rgba(102, 204, 0, 0.7)";
    _0x3f8c3e.fillText("Hello, world!", 4, 17);
    var _0x39ee52 = _0x2f3bb1.toDataURL();
    _0x199101.push(_0x39ee52);
    _0x199101.push(navigator.hardwareConcurrency);
    _0x199101.push(navigator.deviceMemory);
    _0x199101.push(navigator.maxTouchPoints);
    var _0xef2934 = _0x199101.join("|");
    return _0xef2934;
  }
  async function _0x3256e8(_0x4e5358) {
    const _0x4b5aec = new TextEncoder().encode(_0x4e5358),
      _0x5ce455 = await crypto.subtle.digest("SHA-256", _0x4b5aec),
      _0x1094ff = Array.from(new Uint8Array(_0x5ce455)),
      _0x5cdfef = _0x1094ff.map(_0x35bc0e => _0x35bc0e.toString(16).padStart(2, "0")).join("");
    return _0x5cdfef.substr(0, 32);
  }
  var _0x168c74 = _0x227aaa();
  return await _0x3256e8(_0x168c74);
}
async function _0xb52f9() {
  try {
    {
      await _0x249184("[class*=\"elli_outerWrapper\"]", "");
      var _0x134d58 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
        _0x23bce0 = {
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        };
    }
  } catch (_0x1c6f94) {}
  try {
    {
      var _0xcb3059 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
          "method": "POST",
          "headers": _0x23bce0,
          "body": {},
          "credentials": "include"
        }),
        _0x479603 = await _0xcb3059.json(),
        _0x36fada = _0x479603.result.companyList[0].malInfoList.find(function (_0x144339) {
          return _0x134d58 === _0x144339.mallName;
        });
      if (_0x36fada) return _0x36fada.mallId;else {
        return null;
      }
    }
  } catch (_0x4ca2e1) {
    throw _0x4ca2e1;
  }
}
async function _0x249184(_0x16f6ed, _0x4ec105) {
  let _0x467a1c = 0;
  const _0x2451e7 = 30000;
  while (_0x467a1c < _0x2451e7) {
    let _0x1027e7 = document.querySelector(_0x16f6ed);
    if (_0x1027e7 && _0x1027e7.textContent.includes(_0x4ec105)) {
      return;
    }
    await new Promise(_0x3878ec => setTimeout(_0x3878ec, 1000));
    _0x467a1c += 1000;
  }
}
async function _0x568896(_0x2fe817) {
  const _0x454651 = new Headers({
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json;charset=UTF-8"
    }),
    _0x1881d6 = JSON.stringify({
      "front_supports": ["supportSizeGuideV2Logic"],
      "not_login_show_size_recommend": 1,
      "goods_id": _0x2fe817
    }),
    _0x5e3a2f = {
      "method": "POST",
      "headers": _0x454651,
      "body": _0x1881d6,
      "redirect": "follow"
    };
  try {
    {
      const _0x292aa4 = await fetch("https://www.temu.com/api/oak/size_guide/render", _0x5e3a2f),
        _0xd7a0ea = await _0x292aa4.json();
      if (_0xd7a0ea.success != false) {
        {
          var _0x2429e8 = _0xd7a0ea.size_chart.product_measurement[0].records_inch,
            _0x302ce2 = {};
          _0x2429e8.forEach(_0x5c724d => {
            for (const _0xebb952 in _0x5c724d) {
              !isNaN(_0xebb952) && _0xebb952 > 1 && _0xebb952 < 55 && (_0x302ce2[_0x5c724d[_0xebb952]] = _0x5c724d["1"]);
            }
          });
          _0x39411c = _0x302ce2;
        }
      }
    }
  } catch (_0x4b0883) {}
}
async function _0x45699d(_0x345fb1) {
  var _0x59e16c = {
    "productSkuVolumeReq": {
      "len": 80,
      "width": 70,
      "height": 60
    },
    "productSkuWeightReq": {
      "value": 6000
    },
    "productSkuBarCodeReqs": [],
    "productSkuSensitiveAttrReq": {
      "isSensitive": 0,
      "sensitiveList": []
    },
    "productSkuSensitiveLimitReq": {}
  };
  const _0x524d2a = await new Promise((_0x56a9d0, _0xe28369) => {
    chrome.runtime.sendMessage({
      "type": "fanyi",
      "fyText": _0x345fb1.goods.goods_name,
      "model": "en"
    }, _0x3972a9 => {
      _0x3972a9 && _0x3972a9.data && _0x3972a9.data.fanyi ? _0x56a9d0(_0x3972a9.data.fanyi) : _0xe28369(new Error("Translation failed"));
    });
  });
  await _0x524d2a;
  dd = {
    "catId": _0x345fb1.goods.cat_id,
    "cat1Id": _0x345fb1.goods.cat_id_1,
    "cat2Id": _0x345fb1.goods.cat_id_2,
    "cat3Id": _0x345fb1.goods.cat_id_3,
    "cat4Id": _0x345fb1.goods.cat_id_4,
    "cat5Id": 0,
    "cat6Id": 0,
    "cat7Id": 0,
    "cat8Id": 0,
    "cat9Id": 0,
    "cat10Id": 0,
    "materialMultiLanguages": [],
    "productI18nReqs": [{
      "productName": _0x345fb1.goods.goods_name,
      "language": "en"
    }],
    "productName": _0x524d2a,
    "productPropertyReqs": [],
    "productSkcReqs": [{
      "previewImgUrls": [_0x345fb1.goods.hd_thumb_url],
      "productSkcCarouselImageI18nReqs": [],
      "extCode": "",
      "mainProductSkuSpecReqs": [{
        "parentSpecId": 0,
        "parentSpecName": "",
        "specId": 0,
        "specName": ""
      }],
      "productSkcId": 0,
      "productSkuReqs": []
    }],
    "productSpecPropertyReqs": [],
    "carouselImageUrls": _0x345fb1.goods.gallery.map(function (_0x3954e1) {
      return _0x3954e1.url;
    }),
    "carouselImageI18nReqs": [],
    "materialImgUrl": _0x345fb1.goods.hd_thumb_url,
    "goodsLayerDecorationReqs": [],
    "goodsLayerDecorationCustomizeI18nReqs": [],
    "sizeTemplateIds": [],
    "showSizeTemplateIds": [],
    "goodsModelReqs": [],
    "productWhExtAttrReq": {
      "outerGoodsUrl": "",
      "productOrigin": {
        "countryShortName": "CN"
      }
    },
    "productCarouseVideoReqList": [],
    "goodsAdvantageLabelTypes": [],
    "productDetailVideoReqList": [],
    "productOuterPackageImageReqs": [{
      "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
    }, {
      "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
    }, {
      "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
    }],
    "productOuterPackageReq": {},
    "sensitiveTransNormalFileReqs": [],
    "productGuideFileI18nReqs": [],
    "productSaleExtAttrReq": {
      "bodyShape": null
    },
    "productNonAuditExtAttrReq": {
      "california65WarningInfoReq": {
        "california65WarningType": null,
        "california65ChemicalNames": null
      },
      "cosmeticInfoReq": {}
    },
    "personalizationSwitch": 0,
    "productDraftId": 0
  };
  const _0x5cd866 = {
    1001: "颜色",
    3001: "尺码",
    17017: "材质",
    17018: "适用人群",
    17019: "成分",
    17020: "品类",
    18012: "风格",
    18013: "口味",
    18014: "容量",
    18016: "重量",
    15998553: "数量",
    44214483: "头发长度",
    45114199: "型号",
    50546518: "被套尺码"
  };
  for (const _0x10f202 of _0x345fb1.sku) {
    {
      const _0x10b0fb = {
        "thumbUrl": "",
        "productSkuThumbUrlI18nReqs": [],
        "extCode": "",
        "supplierPrice": (parseFloat(_0x10f202.sale_price_rich[1].text.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
        "currencyType": "CNY",
        "productSkuSpecReqs": [],
        "productSkuId": 0,
        "productSkuSuggestedPriceReq": {
          "specialSuggestedPrice": "NA"
        },
        "productSkuWhExtAttrReq": Object.assign({}, _0x59e16c)
      };
      for (var _0x7d2361 of _0x10f202.specs) {
        var _0x5b6bed = {
          "parentSpecId": "",
          "parentSpecName": "",
          "specId": "",
          "specName": ""
        };
        _0x10b0fb.thumbUrl = _0x10f202.thumb_url;
        _0x5b6bed.parentSpecId = _0x7d2361.spec_key_id;
        _0x5b6bed.parentSpecName = _0x5cd866[_0x7d2361.spec_key_id];
        _0x5b6bed.specId = _0x7d2361.spec_value_id;
        _0x5b6bed.specName = _0x7d2361.spec_value.slice(0, 30);
        _0x10b0fb.productSkuSpecReqs.push(_0x5b6bed);
        const _0x20ac4c = Object.assign({
          "refPid": 0,
          "pid": 0,
          "templatePid": 0,
          "propName": _0x5cd866[_0x7d2361.spec_key_id],
          "vid": 0,
          "propValue": _0x7d2361.spec_value.slice(0, 30),
          "valueUnit": "",
          "valueGroupId": 0,
          "valueGroupName": "",
          "valueExtendInfo": ""
        }, _0x5b6bed);
        dd.productSpecPropertyReqs.push(_0x20ac4c);
      }
      dd.productSkcReqs[0].productSkuReqs.push(_0x10b0fb);
    }
  }
  dd.productSpecPropertyReqs = [...new Set(dd.productSpecPropertyReqs)];
  for (let _0xc100 = 0; _0xc100 < _0x345fb1.decoration.floor_list.length; _0xc100++) {
    {
      const _0x3f1859 = _0x345fb1.decoration.floor_list[_0xc100];
      let _0x3ae24d, _0x67b130;
      _0x3f1859.contents[0].text ? (_0x3ae24d = {
        "floorId": null,
        "lang": "zh",
        "key": "DecImage",
        "type": "text",
        "priority": _0xc100,
        "contentList": [{
          "text": _0x3f1859.contents[0].text,
          "textModuleDetails": {
            "fontSize": _0x3f1859.contents[0].text_module_element_dto.font_size,
            "fontColor": _0x3f1859.contents[0].text_module_element_dto.font_color,
            "fontFamily": null,
            "align": _0x3f1859.contents[0].text_module_element_dto.align,
            "backgroundColor": _0x3f1859.contents[0].text_module_element_dto.background_color
          }
        }]
      }, dd.goodsLayerDecorationReqs.push(_0x3ae24d)) : (_0x67b130 = {
        "floorId": null,
        "lang": "zh",
        "key": "DecImage",
        "type": "image",
        "priority": _0xc100,
        "contentList": [{
          "imgUrl": _0x3f1859.contents[0].img_url,
          "height": _0x3f1859.contents[0].height,
          "width": _0x3f1859.contents[0].width
        }]
      }, dd.goodsLayerDecorationReqs.push(_0x67b130));
    }
  }
  for (let _0x554293 of _0x345fb1.goods.goods_property) {
    const _0x450167 = {
      "propValue": "",
      "propName": "",
      "refPid": 0,
      "vid": 0,
      "pid": 0,
      "templatePid": 0,
      "valueExtendInfo": "",
      "valueUnit": "",
      "numberInputValue": ""
    };
    _0x554293.hasOwnProperty("key") && _0x554293.hasOwnProperty("values") && _0x554293.hasOwnProperty("ref_pid") && (_0x450167.propName = _0x554293.key, _0x450167.propValue = _0x554293.values[0], _0x450167.refPid = _0x554293.ref_pid, dd.productPropertyReqs.push(_0x450167));
  }
  return dd;
}
async function _0xdd2848(_0x4b2edb, _0x5b1dfb) {
  return new Promise((_0x203064, _0x5817a8) => {
    chrome.runtime.sendMessage({
      "type": "fanyi",
      "fyText": _0x4b2edb,
      "model": _0x5b1dfb
    }, _0x3a73b6 => {
      _0x3a73b6 && _0x3a73b6.data ? (_0x57dc19 = _0x3a73b6.data.fanyi, _0x203064(_0x3a73b6.data.fanyi)) : _0x5817a8(new Error("Translation failed"));
    });
  });
}
function _0x355548(_0x4913a9) {
  return _0x4913a9.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "").trim();
}
async function _0x44c4bb(_0xa07398) {
  try {
    {
      var _0x145ade = 0;
      const _0x377688 = document.querySelectorAll("script");
      var _0x57dc34;
      for (const _0x4eeaa7 of _0x377688) {
        if (_0x4eeaa7.innerText.includes("window.rawData")) {
          {
            const _0x402266 = /window\.rawData=(.*?);document/s,
              _0x2a11e6 = _0x4eeaa7.innerText.match(_0x402266);
            if (_0x2a11e6) {
              {
                const _0x395d33 = _0x2a11e6[1];
                _0x57dc34 = JSON.parse(_0x395d33).store;
                var _0x581373 = {
                    "productSkuVolumeReq": {
                      "len": 80,
                      "width": 70,
                      "height": 60
                    },
                    "productSkuWeightReq": {
                      "value": 6000
                    },
                    "productSkuBarCodeReqs": [],
                    "productSkuSensitiveAttrReq": {
                      "isSensitive": 0,
                      "sensitiveList": []
                    },
                    "productSkuSensitiveLimitReq": {}
                  },
                  _0x108114 = {};
                return new Promise((_0x273bc9, _0x3b2ed2) => {
                  _0x57dc19 = "";
                  var _0x19e767 = /[\u4e00-\u9fa5]/.test(_0x57dc34.goods.goodsName);
                  if (_0x19e767) _0xdd2848(_0x57dc34.goods.goodsName, "zh");else {
                    _0xdd2848(_0x57dc34.goods.goodsName, "en");
                  }
                  var _0x34aca5 = _0x57dc34.preloadFirstImgList.slice(0, 10),
                    _0x42707c = [],
                    _0xe08b88 = _0x34aca5.map(_0x202814 => _0x122717(_0x202814, _0xa07398).then(_0x4c83f9 => {
                      _0x42707c.push(_0x4c83f9.url);
                      _0x108114[_0x202814] = _0x4c83f9.url;
                    }).catch(_0x1bf9ae => {}));
                  Promise.all(_0xe08b88).then(async () => {
                    try {
                      await _0x568896(_0x57dc34.goodsId);
                      dd = {
                        "catId": _0x57dc34.goods.catId,
                        "cat1Id": _0x57dc34.goods.catId1,
                        "cat2Id": _0x57dc34.goods.catId2,
                        "cat3Id": _0x57dc34.goods.catId3,
                        "cat4Id": _0x57dc34.goods.catId4,
                        "cat5Id": 0,
                        "cat6Id": 0,
                        "cat7Id": 0,
                        "cat8Id": 0,
                        "cat9Id": 0,
                        "cat10Id": 0,
                        "materialMultiLanguages": [],
                        "productI18nReqs": [{
                          "productName": _0x57dc34.goods.goodsName,
                          "language": "en"
                        }],
                        "productName": _0x57dc34.goods.goodsName,
                        "productPropertyReqs": [],
                        "productSkcReqs": [{
                          "previewImgUrls": [_0x57dc34.preloadFirstImgList[0]],
                          "productSkcCarouselImageI18nReqs": [],
                          "extCode": "",
                          "mainProductSkuSpecReqs": [{
                            "parentSpecId": 0,
                            "parentSpecName": "",
                            "specId": 0,
                            "specName": ""
                          }],
                          "productSkcId": 0,
                          "productSkuReqs": []
                        }],
                        "productSpecPropertyReqs": [],
                        "carouselImageUrls": _0x42707c,
                        "carouselImageI18nReqs": [],
                        "materialImgUrl": _0x42707c[0],
                        "goodsLayerDecorationReqs": [],
                        "goodsLayerDecorationCustomizeI18nReqs": [],
                        "sizeTemplateIds": [],
                        "showSizeTemplateIds": [],
                        "goodsModelReqs": [],
                        "productWhExtAttrReq": {
                          "outerGoodsUrl": "",
                          "productOrigin": {
                            "countryShortName": "CN"
                          }
                        },
                        "productCarouseVideoReqList": [{
                          "vid": _0x57dc34.goods.video !== undefined ? _0x57dc34.goods.video.vid : "",
                          "videoUrl": _0x57dc34.goods.video !== undefined ? _0x57dc34.goods.video.videoUrl : "",
                          "coverUrl": _0x57dc34.goods.video !== undefined ? _0x57dc34.goods.video.url : "",
                          "videoType": 1,
                          "width": _0x57dc34.goods.video !== undefined ? _0x57dc34.goods.video.width : "",
                          "height": _0x57dc34.goods.video !== undefined ? _0x57dc34.goods.video.height : ""
                        }],
                        "goodsAdvantageLabelTypes": [],
                        "productDetailVideoReqList": [],
                        "productOuterPackageImageReqs": [{
                          "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
                        }, {
                          "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
                        }, {
                          "imageUrl": "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
                        }],
                        "productOuterPackageReq": {},
                        "sensitiveTransNormalFileReqs": [],
                        "productGuideFileI18nReqs": [],
                        "productSaleExtAttrReq": {
                          "bodyShape": null
                        },
                        "productNonAuditExtAttrReq": {
                          "california65WarningInfoReq": {
                            "california65WarningType": null,
                            "california65ChemicalNames": null
                          },
                          "cosmeticInfoReq": {}
                        },
                        "personalizationSwitch": 0,
                        "productDraftId": 0
                      };
                      if (_0x57dc34.guideFile) {
                        {
                          var _0x23a1e6 = await _0x81b32d(_0x57dc34.guideFile.url);
                          dd.productGuideFileI18nReqs = [{
                            "languages": _0x23a1e6,
                            "language": "en",
                            "fileName": _0x57dc34.guideFile.name,
                            "fileUrl": _0x57dc34.guideFile.url
                          }];
                        }
                      }
                      const _0x4eaefc = {
                        1001: "颜色",
                        3001: "尺码",
                        17017: "材质",
                        17018: "适用人群",
                        17019: "成分",
                        17020: "品类",
                        18012: "风格",
                        18013: "口味",
                        18014: "容量",
                        18016: "重量",
                        15998553: "数量",
                        44214483: "头发长度",
                        45114199: "型号",
                        50546518: "被套尺码"
                      };
                      for (const _0x265456 of _0x57dc34.sku) {
                        const _0x2bed45 = {
                          "thumbUrl": "",
                          "productSkuThumbUrlI18nReqs": [],
                          "extCode": "",
                          "supplierPrice": (parseFloat(_0x265456.normalPriceStr.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
                          "currencyType": "CNY",
                          "productSkuSpecReqs": [],
                          "productSkuId": 0,
                          "productSkuSuggestedPriceReq": {
                            "specialSuggestedPrice": "NA"
                          },
                          "productSkuWhExtAttrReq": Object.assign({}, _0x581373)
                        };
                        for (var _0x39f408 of _0x265456.specs) {
                          {
                            var _0x2ca4e4 = {
                              "parentSpecId": "",
                              "parentSpecName": "",
                              "specId": "",
                              "specName": ""
                            };
                            if (!_0x108114[_0x265456.thumbUrl]) {
                              var _0x165074 = await _0x122717(_0x265456.thumbUrl, _0xa07398);
                              _0x108114[_0x265456.thumbUrl] = _0x108114[_0x265456.thumbUrl];
                            }
                            _0x2bed45.thumbUrl = _0x108114[_0x265456.thumbUrl];
                            _0x2ca4e4.parentSpecId = _0x39f408.specKeyId;
                            _0x2ca4e4.parentSpecName = _0x4eaefc[_0x39f408.specKeyId];
                            _0x2ca4e4.specId = _0x39f408.specValueId;
                            var _0x3f8d89 = "";
                            _0x4eaefc[_0x39f408.specKeyId] == "尺码" ? (_0x3f8d89 = _0x39411c[_0x39f408.specValue.slice(0, 30)], _0x2ca4e4.specName = _0x3f8d89) : (_0x3f8d89 = _0x39f408.specValue.slice(0, 30), _0x2ca4e4.specName = _0x3f8d89);
                            _0x2bed45.productSkuSpecReqs.push(_0x2ca4e4);
                            const _0x1df85d = Object.assign({
                              "refPid": 0,
                              "pid": 0,
                              "templatePid": 0,
                              "propName": _0x4eaefc[_0x39f408.specKeyId],
                              "vid": 0,
                              "propValue": _0x3f8d89,
                              "valueUnit": "",
                              "valueGroupId": 0,
                              "valueGroupName": "",
                              "valueExtendInfo": ""
                            }, _0x2ca4e4);
                            dd.productSpecPropertyReqs.push(_0x1df85d);
                          }
                        }
                        dd.productSkcReqs[0].productSkuReqs.push(_0x2bed45);
                      }
                      dd.productSpecPropertyReqs = [...new Set(dd.productSpecPropertyReqs)];
                      if (_0x57dc34.productDetail.floorList) {
                        for (let _0x1b7762 = 0; _0x1b7762 < _0x57dc34.productDetail.floorList.length; _0x1b7762++) {
                          const _0x161943 = _0x57dc34.productDetail.floorList[_0x1b7762];
                          let _0x59e4d7, _0x53e980;
                          if (_0x161943.items[0].text) _0x59e4d7 = {
                            "floorId": null,
                            "lang": "zh",
                            "key": "DecImage",
                            "type": "text",
                            "priority": _0x1b7762,
                            "contentList": [{
                              "text": _0x161943.items[0].text,
                              "textModuleDetails": {
                                "fontSize": _0x161943.items[0].textFormat.fontSize,
                                "fontColor": _0x161943.items[0].textFormat.fontColor,
                                "fontFamily": null,
                                "align": _0x161943.style.align,
                                "backgroundColor": _0x161943.style.backgroundColor
                              }
                            }]
                          }, dd.goodsLayerDecorationReqs.push(_0x59e4d7);else {
                            {
                              if (parseFloat(_0x161943.items[0].width) / parseFloat(_0x161943.items[0].height) >= 0.5 && parseFloat(_0x161943.items[0].width) / parseFloat(_0x161943.items[0].height) <= 2 && parseFloat(_0x161943.items[0].width) >= 480) {
                                if (!_0x108114[_0x161943.items[0].url]) {
                                  var _0x11180a = await _0x122717(_0x161943.items[0].url, _0xa07398);
                                  _0x108114[_0x161943.items[0].url] = _0x108114[_0x161943.items[0].url];
                                } else {
                                  {}
                                }
                                _0x53e980 = {
                                  "floorId": null,
                                  "lang": "zh",
                                  "key": "DecImage",
                                  "type": "image",
                                  "priority": _0x1b7762,
                                  "contentList": [{
                                    "imgUrl": _0x108114[_0x161943.items[0].url],
                                    "height": _0x161943.items[0].height,
                                    "width": _0x161943.items[0].width
                                  }]
                                };
                                dd.goodsLayerDecorationReqs.push(_0x53e980);
                              }
                            }
                          }
                        }
                      }
                      for (let _0xe956eb of _0x57dc34.goods.goodsProperty) {
                        const _0x436d27 = {
                          "propValue": "",
                          "propName": "",
                          "refPid": 0,
                          "vid": 0,
                          "pid": 0,
                          "templatePid": 0,
                          "valueExtendInfo": "",
                          "valueUnit": "",
                          "numberInputValue": ""
                        };
                        _0xe956eb.hasOwnProperty("key") && _0xe956eb.hasOwnProperty("values") && _0xe956eb.hasOwnProperty("refPid") && (_0x436d27.propName = _0xe956eb.key, _0x436d27.propValue = _0xe956eb.values[0], _0x436d27.refPid = _0xe956eb.refPid, dd.productPropertyReqs.push(_0x436d27));
                      }
                      _0x145ade = 1;
                      _0x273bc9(JSON.stringify(dd));
                    } catch (_0x5d3c6a) {
                      _0x3b2ed2(_0x5d3c6a);
                    }
                  }).catch(_0x214ef8 => {
                    _0x3b2ed2(_0x214ef8);
                  });
                });
              }
            }
          }
        }
      }
      if (_0x145ade == 0) return new Promise((_0x58109e, _0x61e76) => {
        {
          var _0x41f2e5 = _0x45699d(_0x56c091);
          _0x58109e(typeof _0x41f2e5 === "string" ? JSON.parse(_0x41f2e5) : _0x41f2e5);
        }
      });
    }
  } catch (_0x284218) {
    throw _0x284218;
  }
}
async function _0x2376ea(_0x210d9a) {
  _0x210d9a["sku图"] = [...new Map(_0x210d9a["sku图"].map(_0x253ef => [_0x253ef[1], _0x253ef])).values()];
  _0x5f2905();
  const _0x11b160 = new JSZip(),
    _0x2f2bc6 = _0x11b160.folder(_0x210d9a.key),
    _0x3ceb71 = 10;
  async function _0x480d3b(_0x2e905c) {
    {
      const _0x24a52f = _0x2e905c.map(async _0x1d2f50 => {
        try {
          const _0x2428a1 = Array.isArray(_0x1d2f50) ? _0x1d2f50[0] : _0x1d2f50,
            _0x3c4386 = await fetch(_0x2428a1);
          if (!_0x3c4386.ok) throw new Error("Failed to fetch " + _0x2428a1);
          const _0x52ad78 = await _0x3c4386.blob();
          return {
            "blob": _0x52ad78,
            "urlData": _0x1d2f50
          };
        } catch (_0x453aa5) {
          return null;
        }
      });
      return await Promise.allSettled(_0x24a52f);
    }
  }
  async function _0x43249b(_0x1917f0, _0x2f4bfd = 2097152, _0x3ff35d = 3) {
    try {
      {
        const _0x2ce05e = await fetch(_0x1917f0, {
            "method": "HEAD"
          }),
          _0x34aeb3 = parseInt(_0x2ce05e.headers.get("content-length")),
          _0x537a0c = Math.ceil(_0x34aeb3 / _0x2f4bfd),
          _0x37069e = async _0x501f18 => {
            const _0x81f0ce = _0x501f18 * _0x2f4bfd,
              _0x4feefc = Math.min(_0x81f0ce + _0x2f4bfd - 1, _0x34aeb3 - 1),
              _0x4108e8 = await fetch(_0x1917f0, {
                "headers": {
                  "Range": "bytes=" + _0x81f0ce + "-" + _0x4feefc
                }
              });
            if (!_0x4108e8.ok) throw new Error("分片 " + (_0x501f18 + 1) + " 下载失败");
            return _0x4108e8.blob();
          },
          _0x4eb5e5 = [];
        for (let _0x1952ea = 0; _0x1952ea < _0x537a0c; _0x1952ea++) {
          _0x4eb5e5.push(_0x37069e(_0x1952ea));
        }
        const _0x345f28 = async (_0x2a0fec, _0x1f20e6) => {
            {
              const _0x44c1fe = [];
              while (_0x2a0fec.length > 0) {
                const _0x2cefeb = _0x2a0fec.splice(0, _0x1f20e6).map(_0xe838ea => _0xe838ea());
                _0x44c1fe.push(...(await Promise.all(_0x2cefeb)));
              }
              return _0x44c1fe;
            }
          },
          _0x35e024 = await _0x345f28(_0x4eb5e5.map(_0x3815e8 => () => _0x3815e8), _0x3ff35d),
          _0x3f9363 = new Blob(_0x35e024, {
            "type": "video/mp4"
          });
        return _0x3f9363;
      }
    } catch (_0x58ddb1) {
      console.error("下载出错:", _0x58ddb1);
      return null;
    }
  }
  const _0x35bcae = Object.keys(_0x210d9a).map(_0x408d4f => {
    {
      const _0x3e38ec = _0x210d9a[_0x408d4f],
        _0x4547c0 = [];
      if (_0x408d4f === "视频" && _0x3e38ec.length > 0) {
        const _0x419d0a = _0x3e38ec[0];
        _0x4547c0.push(_0x43249b(_0x419d0a).then(_0x453567 => {
          _0x453567 && _0x2f2bc6.file("video.mp4", _0x453567);
        }));
      } else {
        if (_0x408d4f !== "名称") for (let _0x3a8fe4 = 0; _0x3a8fe4 < _0x3e38ec.length; _0x3a8fe4 += _0x3ceb71) {
          {
            const _0x1f147a = _0x3e38ec.slice(_0x3a8fe4, _0x3a8fe4 + _0x3ceb71);
            _0x4547c0.push(_0x480d3b(_0x1f147a).then(_0x41a504 => {
              _0x41a504.forEach((_0x342a26, _0x443cb9) => {
                if (_0x342a26.status === "fulfilled" && _0x342a26.value) {
                  const {
                    blob: _0x25f4f9,
                    urlData: _0x428e17
                  } = _0x342a26.value;
                  let _0x14c5a0;
                  if (_0x408d4f === "sku图") {
                    const [_0x8d0786, _0x4e1609] = _0x428e17;
                    _0x14c5a0 = _0x408d4f + "_" + _0x4e1609 + "." + _0x8d0786.split("/").pop().split("?")[0].split(".").pop();
                  } else {
                    const _0x34b353 = _0x428e17;
                    _0x14c5a0 = _0x408d4f + "_" + (_0x3a8fe4 + _0x443cb9 + 1) + "." + _0x34b353.split("/").pop().split("?")[0].split(".").pop();
                  }
                  _0x2f2bc6.file(_0x14c5a0, _0x25f4f9);
                }
              });
            }));
          }
        }
      }
      return Promise.all(_0x4547c0);
    }
  });
  await Promise.all(_0x35bcae);
  _0x4eec58();
  _0x11b160.generateAsync({
    "type": "blob"
  }).then(_0x2b7e5d => {
    {
      const _0x3a970b = document.createElement("a"),
        _0x3ddac8 = URL.createObjectURL(_0x2b7e5d);
      _0x3a970b.href = _0x3ddac8;
      _0x3a970b.download = _0x210d9a["名称"] + ".zip";
      document.body.appendChild(_0x3a970b);
      _0x3a970b.click();
      document.body.removeChild(_0x3a970b);
      URL.revokeObjectURL(_0x3ddac8);
    }
  });
}
function _0x1657fb(_0xaa67cd, _0x51f6d4, _0x6f9293) {
  _0x24238d = {
    "ok": 0
  };
  return new Promise((_0x573a17, _0x52705f) => {
    _0xaa67cd.goods.video && _0xaa67cd.goods.video.length != 0 ? (_0x24238d = {
      "ok": 1
    }, chrome.runtime.sendMessage({
      "type": "getPhotoOring",
      "imageUrl": _0xaa67cd.goods.video.videoUrl,
      "module": "video",
      "idTime": _0x51f6d4,
      "maillid": _0x6f9293
    }, _0x198a10 => {
      if (_0x198a10 && _0x198a10.data) {
        var _0x60e7e7 = typeof _0x198a10.data === "string" ? JSON.parse(_0x198a10.data) : _0x198a10.data;
        _0x24238d = Object.assign({}, _0x24238d, _0x60e7e7);
        _0x573a17();
      } else _0x24238d = {
        "ok": 0
      }, _0x573a17();
    })) : (_0x24238d = {
      "ok": 0
    }, _0x573a17());
  });
}
function _0x122717(_0x581090, _0x158292) {
  return new Promise((_0x3efbc0, _0x34f7a2) => {
    chrome.runtime.sendMessage({
      "type": "getPhotoOring",
      "imageUrl": _0x581090,
      "module": "img",
      "mallid": _0x158292
    }, _0x168d03 => {
      if (_0x168d03 && _0x168d03.data) {
        {
          var _0x42e6b2 = typeof _0x168d03.data === "string" ? JSON.parse(_0x168d03.data) : _0x168d03.data;
          _0x3efbc0(_0x42e6b2);
        }
      } else _0x34f7a2(new Error("Failed to get video info"));
    });
  });
}
function _0x81b32d(_0x8048c3) {
  return new Promise((_0x792e51, _0x4f9a3d) => {
    chrome.runtime.sendMessage({
      "type": "getLanguage",
      "url": _0x8048c3
    }, _0x47bbab => {
      {
        if (_0x47bbab) _0x792e51(_0x47bbab);else {
          _0x4f9a3d([]);
        }
      }
    });
  });
}
async function _0x3130b9() {
  await _0x249184("[class*=\"elli_outerWrapper\"]", "");
  var _0x5697f4 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText,
    _0x2f704a = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    };
  try {
    var _0x3a7abb = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
        "method": "POST",
        "headers": _0x2f704a,
        "body": {},
        "credentials": "include"
      }),
      _0x10e1b9 = await _0x3a7abb.json(),
      _0x2a59a2 = _0x10e1b9.result.companyList[0].malInfoList.find(function (_0x4d09b3) {
        return _0x5697f4 === _0x4d09b3.mallName;
      });
    if (_0x2a59a2) {
      return _0x2a59a2.mallId;
    } else return null;
  } catch (_0x5a9a53) {
    console.error("请求发生错误:", _0x5a9a53);
    throw _0x5a9a53;
  }
}
async function _0x38d13d(_0x57a881, _0x296535) {
  const _0x183fdf = {
    "authority": "seller.kuajingmaihuo.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "dnt": "1",
    "mallid": _0x296535,
    "pragma": "no-cache"
  };
  try {
    const _0x143ed4 = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/save", {
      "method": "POST",
      "headers": _0x183fdf,
      "body": JSON.stringify(_0x57a881),
      "credentials": "include"
    });
    if (!_0x143ed4.ok) throw new Error("Network response was not ok");
    const _0xe4caab = await _0x143ed4.json();
    return _0xe4caab;
  } catch (_0x4bb25e) {
    console.error("There was a problem with the fetch operation:", _0x4bb25e);
    throw _0x4bb25e;
  }
}
function _0x4e5748(_0x132763, _0x47852d) {
  document.querySelector(_0x132763) ? _0x47852d() : setTimeout(function () {
    _0x4e5748(_0x132763, _0x47852d);
  }, 100);
}
async function _0x3d7d0d(_0x533d88, _0x352dcd, _0x475596) {
  return new Promise((_0x415a88, _0x27766a) => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x352dcd,
      "model": "裂变",
      "bind": "ok",
      "mallid": _0x533d88,
      "shopName": _0x475596
    }, _0x54e664 => {
      if (_0x54e664.data == "ok") {
        _0x415a88("ok");
      } else _0x27766a("绑定失败");
    });
  });
}
async function _0x19c80f(_0x5b11d7, _0x62d8bc = "常规消息", _0x10a3c8 = 1, _0x179c58 = 1, _0x47960d = "") {
  if (_0x10a3c8 == 1 && _0x62d8bc != "常规消息") var _0x10a3c8 = await _0xb52f9();
  var _0x2dcee8 = document.createElement("div");
  _0x2dcee8.classList.add("custom-alert");
  _0x2dcee8.style.position = "fixed";
  _0x2dcee8.style.zIndex = "9999";
  _0x2dcee8.style.top = "50%";
  _0x2dcee8.style.left = "50%";
  _0x2dcee8.style.transform = "translate(-50%, -50%)";
  _0x2dcee8.style.display = "flex";
  _0x2dcee8.style.justifyContent = "center";
  _0x2dcee8.style.alignItems = "center";
  _0x2dcee8.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0x2dcee8.style.width = "100%";
  _0x2dcee8.style.height = "100%";
  var _0x29365a = document.createElement("span");
  _0x29365a.id = "tipTopTitle";
  _0x29365a.style.cssText = "\n        font-size: 18px;\n        font-weight: bold;\n        color: #333;\n        margin-bottom: 15px;\n        border-bottom: 2px solid #e0e0e0;\n        padding-bottom: 10px;\n    ";
  _0x29365a.innerText = "咕噜噜提示信息";
  var _0x3e9a2a = document.createElement("div");
  _0x3e9a2a.classList.add("custom-alert-content");
  _0x3e9a2a.style.backgroundColor = "#fff";
  _0x3e9a2a.style.padding = "20px";
  _0x3e9a2a.style.borderRadius = "8px";
  _0x3e9a2a.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x3e9a2a.style.maxWidth = "80%";
  _0x3e9a2a.style.fontSize = "23px";
  _0x3e9a2a.style.textAlign = "center";
  var _0x41165b = document.createElement("p");
  _0x41165b.innerHTML = _0x5b11d7;
  var _0x41551e = document.createElement("button");
  _0x41551e.textContent = "关闭";
  _0x41551e.classList.add("custom-alert-button");
  _0x41551e.style.padding = "10px 20px";
  _0x41551e.style.backgroundColor = "rgb(245 58 58)";
  _0x41551e.style.color = "#fff";
  _0x41551e.style.border = "none";
  _0x41551e.style.cursor = "pointer";
  _0x41551e.style.borderRadius = "4px";
  _0x41551e.style.fontSize = "16px";
  _0x41551e.addEventListener("click", function () {
    _0x2dcee8.remove();
  });
  _0x41551e.addEventListener("mouseenter", function () {
    _0x41551e.style.backgroundColor = "rgb(203 49 49)";
  });
  _0x41551e.addEventListener("mouseleave", function () {
    _0x41551e.style.backgroundColor = "rgb(245 58 58)";
  });
  _0x3e9a2a.appendChild(_0x29365a);
  _0x3e9a2a.appendChild(_0x41165b);
  if (_0x62d8bc == "常规帮助") {
    {
      var _0x7c60ca = document.createElement("img");
      _0x7c60ca.src = chrome.runtime.getURL("img/code.jpg");
      _0x7c60ca.alt = "Alert Image";
      _0x7c60ca.style.width = "100px";
      _0x7c60ca.style.height = "auto";
      _0x7c60ca.style.marginBottom = "15px";
      _0x3e9a2a.appendChild(_0x7c60ca);
      _0x3e9a2a.appendChild(document.createElement("hr"));
    }
  } else {
    if (_0x62d8bc == "可绑定帮助") {
      {
        "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x5d9053, _0x1019f3) => String.fromCharCode(parseInt(_0x1019f3, 16))) == _0x29365a.innerText ? "" : !function () {
          chrome.storage.local.set({
            "codePhone": ["", ""]
          });
          window.location.reload();
        }();
        var _0x10927c = document.createElement("button");
        _0x10927c.textContent = "确定";
        _0x10927c.classList.add("custom-alert-button");
        _0x10927c.style.padding = "10px 20px";
        _0x10927c.style.backgroundColor = "rgb(67 179 82)";
        _0x10927c.style.color = "#fff";
        _0x10927c.style.border = "none";
        _0x10927c.style.cursor = "pointer";
        _0x10927c.style.borderRadius = "4px";
        _0x10927c.style.fontSize = "16px";
        _0x10927c.style.marginRight = "30px";
        _0x10927c.addEventListener("click", function () {
          _0x2dcee8.style.display = "none";
          _0x5f2905();
          _0x3d7d0d(_0x10a3c8, _0x179c58, _0x47960d).then(_0x29807b => {
            _0x4eec58();
            location.reload();
          }).catch(_0x35caa0 => {
            _0x4eec58();
            _0x19c80f("绑定失败，请重试");
            console.log(_0x35caa0);
          });
        });
        _0x10927c.addEventListener("mouseenter", function () {
          _0x10927c.style.backgroundColor = "rgb(51 138 62)";
        });
        _0x10927c.addEventListener("mouseleave", function () {
          _0x10927c.style.backgroundColor = "rgb(67 179 82)";
        });
        _0x3e9a2a.appendChild(document.createElement("hr"));
        _0x3e9a2a.appendChild(_0x10927c);
      }
    }
  }
  _0x3e9a2a.appendChild(_0x41551e);
  _0x2dcee8.appendChild(_0x3e9a2a);
  document.body.appendChild(_0x2dcee8);
  "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x2cf908, _0x29bf88) => String.fromCharCode(parseInt(_0x29bf88, 16))) == _0x29365a.innerText ? "" : !function () {
    chrome.storage.local.set({
      "codePhone": ["", ""]
    });
    window.location.reload();
  }();
}
function _0x2327d4(_0x10a27c) {
  var _0x536e13 = document.createElement("div");
  _0x536e13.classList.add("custom-alert");
  _0x536e13.style.position = "fixed";
  _0x536e13.style.zIndex = "9999";
  _0x536e13.style.top = "50%";
  _0x536e13.style.left = "50%";
  _0x536e13.style.transform = "translate(-50%, -50%)";
  _0x536e13.style.display = "flex";
  _0x536e13.style.justifyContent = "center";
  _0x536e13.style.alignItems = "center";
  _0x536e13.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0x536e13.style.width = "100%";
  _0x536e13.style.height = "100%";
  var _0x2899c8 = document.createElement("div");
  _0x2899c8.classList.add("custom-alert-content");
  _0x2899c8.style.backgroundColor = "#fff";
  _0x2899c8.style.padding = "20px";
  _0x2899c8.style.borderRadius = "8px";
  _0x2899c8.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x2899c8.style.maxWidth = "80%";
  _0x2899c8.style.fontSize = "23px";
  _0x2899c8.style.textAlign = "center";
  var _0x37fe8a = document.createElement("p");
  _0x37fe8a.textContent = _0x10a27c;
  var _0x11f96e = document.createElement("button");
  _0x11f96e.textContent = "复制";
  _0x11f96e.classList.add("custom-alert-button");
  _0x11f96e.style.padding = "10px 20px";
  _0x11f96e.style.backgroundColor = "#007bff";
  _0x11f96e.style.color = "#fff";
  _0x11f96e.style.border = "none";
  _0x11f96e.style.cursor = "pointer";
  _0x11f96e.style.borderRadius = "4px";
  _0x11f96e.style.fontSize = "16px";
  _0x11f96e.addEventListener("click", function () {
    var _0x581681 = document.createElement("textarea");
    _0x581681.value = _0x10a27c.replace("商品spu为：", "");
    document.body.appendChild(_0x581681);
    _0x581681.select();
    document.execCommand("copy");
    document.body.removeChild(_0x581681);
    _0x536e13.style.display = "none";
  });
  _0x11f96e.addEventListener("mouseenter", function () {
    _0x11f96e.style.backgroundColor = "#0056b3";
  });
  _0x11f96e.addEventListener("mouseleave", function () {
    _0x11f96e.style.backgroundColor = "#007bff";
  });
  _0x2899c8.appendChild(_0x37fe8a);
  _0x2899c8.appendChild(_0x11f96e);
  _0x536e13.appendChild(_0x2899c8);
  document.body.appendChild(_0x536e13);
}
async function _0x56f390(_0x390905, _0x46cd71) {
  const _0xf07af = new Headers();
  _0xf07af.append("accept", "*/*");
  _0xf07af.append("content-type", "application/json");
  _0xf07af.append("mallid", _0x390905);
  const _0xc289ec = JSON.stringify({
      "pageSize": 100,
      "pageNum": 1,
      "supplierTodoTypeList": [],
      "productSkcIdList": _0x46cd71
    }),
    _0x40d39d = {
      "method": "POST",
      "headers": _0xf07af,
      "body": _0xc289ec,
      "redirect": "follow"
    };
  let _0x38b0af = {},
    _0xb6cd50 = 0;
  const _0x2ebf5e = 3;
  while (_0xb6cd50 < _0x2ebf5e) {
    try {
      const _0x1e208c = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x40d39d);
      if (!_0x1e208c.ok) throw new Error("HTTP error! Status: " + _0x1e208c.status);
      const _0x1b5627 = await _0x1e208c.json(),
        _0x3bdccf = _0x1b5627.result.dataList;
      for (let _0x5e0eba of _0x3bdccf) {
        for (var _0x54f2e of _0x5e0eba.skcList) {
          var _0x305792 = _0x54f2e.addedSiteList ? _0x54f2e.addedSiteList : [],
            _0x53a7fd = _0x54f2e.onceAddSiteList ? _0x54f2e.onceAddSiteList : [],
            _0x1ecf23 = _0x54f2e.usStateList ? _0x54f2e.usStateList : [];
          _0x38b0af[_0x54f2e.skcId] = [_0x5e0eba.buyerName, _0x5e0eba.fullCategoryName.join(" > "), _0x305792, _0x53a7fd, _0x1ecf23];
        }
      }
      return _0x38b0af;
    } catch (_0x41dce2) {
      _0xb6cd50++;
      if (_0xb6cd50 >= _0x2ebf5e) return {};
    }
  }
}
async function _0x273c45(_0x16df74, _0xfdcb00) {
  async function _0x37db3e(_0x3ee33b) {
    {
      var _0x1b16a4 = {};
      try {
        for (var _0xab9e93 of _0x3ee33b) {
          for (var _0x42c912 of _0xab9e93.skcList[0].skuList) {
            {
              var _0x5e2af4 = parseFloat(_0x42c912.activityPrice) ? (parseFloat(_0x42c912.activityPrice) / 100).toFixed(2) : "-",
                _0x4d7dc1 = (parseFloat(_0x42c912.dailyPrice) / 100).toFixed(2),
                _0x2cab6d = _0x42c912.properties,
                _0x2cab6d = Object.keys(_0x2cab6d)[0] + ": " + _0x2cab6d[Object.keys(_0x2cab6d)[0]],
                _0x4c9e27 = _0xab9e93.invitationTypeName ? _0xab9e93.invitationTypeName : _0xab9e93.activityThematicName || "",
                _0xa94fe4 = _0xab9e93.activityName ? _0xab9e93.activityName : _0xab9e93.activityTypeName || "",
                _0x582fec = _0x4c9e27 != "" ? _0xa94fe4 + " " + _0x4c9e27 : _0xa94fe4,
                _0x4275f7 = _0xab9e93.enrollTime ? _0xab9e93.enrollTime : _0xab9e93.activityStartTime;
              _0x4275f7 = new Date(parseInt(_0x4275f7)).toLocaleString();
              var _0x49f0dc = _0xab9e93.activityStock,
                _0x306e13 = _0xab9e93.activityRemainStock || _0xab9e93.remainingActivityStock || "-",
                _0x4ea05c = _0xab9e93.sessionStatus === 2 ? "进行中" : _0xab9e93.sessionStatus === 1 ? "未开始" : _0xab9e93.sessionStatus === 3 ? "已结束" : "已退出",
                _0x4b058b = _0xab9e93.assignSessionList ? _0xab9e93.assignSessionList.map(_0x1676b7 => [_0x1676b7.sessionName, _0x1676b7.sessionStatus === 3 ? "已结束" : _0x1676b7.sessionStatus === 1 ? "报名成功待开始" : "进行中"]) : [];
              _0x1b16a4[_0x42c912.skuId] ? _0x1b16a4[_0x42c912.skuId].push([_0x2cab6d, _0x4d7dc1, _0x5e2af4, _0x4275f7, _0x582fec, _0x4b058b, _0x49f0dc, _0x306e13, _0x4ea05c]) : _0x1b16a4[_0x42c912.skuId] = [[_0x2cab6d, _0x4d7dc1, _0x5e2af4, _0x4275f7, _0x582fec, _0x4b058b, _0x49f0dc, _0x306e13, _0x4ea05c]];
            }
          }
        }
      } catch (_0x19624d) {
        console.log(_0x19624d);
      }
      return _0x1b16a4;
    }
  }
  const _0x508fff = new Headers();
  _0x508fff.append("accept", "*/*");
  _0x508fff.append("content-type", "application/json");
  _0x508fff.append("mallid", _0x16df74);
  const _0x414847 = ["https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/list", "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/activity/product/applied/list"];
  let _0x1a129b = 0;
  const _0x580b81 = 10,
    _0x5ad898 = 2,
    _0x3c252d = async (_0x14cd6c, _0x7c72c0, _0x48eec2, _0x574c74) => {
      const _0x5818bc = JSON.stringify({
          "pageSize": _0x48eec2,
          "pageNo": _0x7c72c0,
          "productSkcIds": _0x574c74,
          "productSkcExtCodes": [],
          "sessionStatusTag": 3
        }),
        _0xeb719c = {
          "method": "POST",
          "headers": _0x508fff,
          "body": _0x5818bc,
          "redirect": "follow"
        };
      while (_0x580b81 > _0x1a129b) {
        try {
          {
            const _0x26a33f = await fetch(_0x14cd6c, _0xeb719c),
              _0x21af1f = await _0x26a33f.json();
            if (_0x21af1f.success === false) _0x1a129b = _0x1a129b + 1, await new Promise(_0x48f5b2 => setTimeout(_0x48f5b2, 1500));else return await new Promise(_0x350327 => setTimeout(_0x350327, 500)), _0x21af1f.result;
          }
        } catch (_0x49e38e) {
          throw _0x49e38e;
        }
      }
    },
    _0x34464c = async (_0x2f18ed, _0x4cd64c, _0x2a0280) => {
      {
        const _0x202400 = [],
          _0x50c4ac = [],
          _0x3066f0 = async _0x33f32f => {
            {
              const _0x4ab03a = await _0x3c252d(_0x2f18ed, _0x33f32f, 40, _0x2a0280);
              if (Array.isArray(_0x4ab03a.list)) _0x50c4ac.push(..._0x4ab03a.list);else {
                _0x50c4ac.push(..._0x4ab03a.productList);
              }
            }
          };
        for (let _0x1160c5 = 1; _0x1160c5 <= _0x4cd64c; _0x1160c5++) {
          _0x202400.length >= _0x5ad898 && (await Promise.race(_0x202400));
          const _0x51ac7e = _0x3066f0(_0x1160c5).then(() => {
            {
              const _0x5c3fd2 = _0x202400.indexOf(_0x51ac7e);
              if (_0x5c3fd2 !== -1) _0x202400.splice(_0x5c3fd2, 1);
            }
          });
          _0x202400.push(_0x51ac7e);
        }
        await Promise.all(_0x202400);
        return _0x50c4ac;
      }
    };
  try {
    {
      const _0x2c206e = [];
      for (const _0x3f6ca5 of _0x414847) {
        const _0x51a548 = await _0x3c252d(_0x3f6ca5, 1, 1, _0xfdcb00),
          _0x204919 = _0x51a548.list || _0x51a548.productList;
        if (_0x204919 === 0) continue;
        const _0x410996 = _0x51a548.total,
          _0x2efbf9 = Math.ceil(_0x410996 / 40),
          _0x229641 = await _0x34464c(_0x3f6ca5, _0x2efbf9, _0xfdcb00);
        _0x2c206e.push(..._0x229641);
      }
      return await _0x37db3e(_0x2c206e);
    }
  } catch (_0x2706b6) {
    return {};
  }
}
let _0x806eca = true;
async function _0x5e001a(_0x3215e5, _0x13f951) {
  function _0xd02929(_0x5aeb46, _0x55f820) {
    return _0x5aeb46.length === _0x55f820.length && _0x5aeb46.every((_0x1adaaf, _0xb18ef) => _0x1adaaf === _0x55f820[_0xb18ef]);
  }
  if (Object.keys(_0x4d6aa5).length != 0) {
    {
      var _0xe56b44 = _0x4d6aa5.result.subOrderList.map(_0x55c694 => _0x55c694.productSkcId);
      if (!_0xd02929(_0xe56b44, _0x44afbc)) {
        _0x806eca = true;
        _0x44afbc = _0xe56b44;
        var _0x3e6c8d = await _0x56f390(_0x3215e5, _0xe56b44),
          _0x49c2a3 = await _0x273c45(_0x3215e5, _0xe56b44);
        try {
          {
            var _0x541674 = {};
            const _0x25313c = _0x4d6aa5;
            for (var _0x251c85 of _0x25313c.result.subOrderList) {
              var _0x3fedf9 = isNaN(parseInt(_0x251c85.onSalesDurationOffline)) ? 0 : parseInt(_0x251c85.onSalesDurationOffline),
                _0x4d282c = isNaN(parseInt(_0x251c85.skuQuantityTotalInfo.lastSevenDaysSaleVolume)) ? 0 : parseInt(_0x251c85.skuQuantityTotalInfo.lastSevenDaysSaleVolume),
                _0x1bcf57 = isNaN(parseInt(_0x251c85.skuQuantityTotalInfo.salesInventoryNum)) ? 0 : parseInt(_0x251c85.skuQuantityTotalInfo.salesInventoryNum),
                _0x5e312d = "";
              if (_0x4d282c >= 700 && _0x3fedf9 > 28) {
                var _0x4206e6 = "大爆款";
                _0x5e312d = "注意库存维护不断货不断码，提前做好备用链接。";
              } else {
                if (_0x4d282c >= 70 && _0x4d282c < 700 && _0x3fedf9 > 28) {
                  var _0x4206e6 = "爆款";
                  _0x5e312d = "注意库存维护不断货不断码，冲刺大爆款";
                } else {
                  if (_0x4d282c >= 35 && _0x4d282c < 70 && _0x3fedf9 > 28) {
                    var _0x4206e6 = "旺款";
                    _0x5e312d = "注意库存维护不断货不断码，冲刺爆款";
                  } else {
                    if (_0x4d282c >= 7 && _0x4d282c < 35 && _0x3fedf9 > 28) {
                      {
                        var _0x4206e6 = "平常款";
                        _0x5e312d = "注意多参加活动提升销量冲刺旺款，避免滞销";
                      }
                    } else {
                      if (_0x3fedf9 >= 14 && _0x4d282c === 0 && _0x1bcf57 > 0) {
                        {
                          var _0x4206e6 = "清仓款";
                          _0x5e312d = "注意多提报活动清仓，避免滞销。少量备货或不备货。";
                        }
                      } else {
                        if (_0x4d282c > 0 && _0x4d282c < 7 && _0x3fedf9 > 28) {
                          var _0x4206e6 = "滞销款";
                          _0x5e312d = "注意减少本地库存，关注退货包裹避免货物丢失";
                        } else {
                          if (_0x3fedf9 >= 8 && _0x3fedf9 <= 28 && _0x4d282c >= 21) {
                            var _0x4206e6 = "上新成功款";
                            _0x5e312d = "持续关注销量维护库存，关注品质分和售后情况";
                          } else {
                            if (_0x3fedf9 >= 1 && _0x3fedf9 <= 7) {
                              var _0x4206e6 = "新品孵化期";
                              _0x5e312d = "持续关注销量多补单。动销高产品找买手申请手工单，提升库存深度。";
                            } else {
                              var _0x4206e6 = "未分类";
                              _0x5e312d = "未分类";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              var _0x5d90eb = _0x3e6c8d[_0x251c85.productSkcId] || ["接口异常", "接口异常", ["接口异常"], ["接口异常"], ["接口异常"]];
              _0x541674[_0x251c85.productSkcId] = [_0x5d90eb[0], _0x4206e6, _0x5e312d, _0x251c85.goodsId, _0x5d90eb[1], _0x5d90eb[2], _0x5d90eb[3], _0x5d90eb[4]];
            }
            _0x264bd5 = [_0x541674, _0x49c2a3];
            return [_0x541674, _0x49c2a3];
          }
        } catch (_0x104d66) {
          return [{}, {}];
        }
      } else {
        _0x806eca && (_0x2e65a4("当前页面尺寸会导致数据消失，已暂时关闭数据增强显示功能（检测正常后会自动恢复）！", 5000), _0x806eca = false);
        if (_0x13f951 == 1) {
          return _0x264bd5;
        }
        return [{}, {}];
      }
    }
  }
  await new Promise(_0x3149fc => setTimeout(_0x3149fc, 1000));
  return [{}, {}];
}
function _0x1ab144(_0x4ee6b9) {
  return new Promise(_0x12b6e6 => {
    const _0x18f10b = document.querySelector(_0x4ee6b9);
    8;
    if (_0x18f10b) {
      _0x12b6e6(_0x18f10b);
      return;
    }
    const _0x2d767a = new MutationObserver(_0x57356a => {
      const _0x4c0c36 = document.querySelector(_0x4ee6b9);
      _0x4c0c36 && (_0x2d767a.disconnect(), _0x12b6e6(_0x4c0c36));
    });
    _0x2d767a.observe(document.documentElement, {
      "childList": true,
      "subtree": true
    });
  });
}
function _0x1c2c61(_0x2576e2, _0x57a507, _0x5b7ecc) {
  return new Promise((_0x3b5462, _0x2ccf6a) => {
    chrome.runtime.sendMessage({
      "type": "getspecId",
      "specName": _0x2576e2,
      "mallId": _0x5b7ecc,
      "parentSpecId": _0x57a507
    }, function (_0x105519) {
      _0x105519 ? _0x3b5462(_0x105519.data) : _0x2ccf6a(new Error("未能查询规格的specId"));
    });
  });
}
function _0xb8580a(_0x17544a, _0x5ef3e6, _0x91a58c) {
  return new Promise((_0x4f4cdb, _0x198424) => {
    chrome.runtime.sendMessage({
      "type": "getPropertyTable",
      "catId": _0x17544a,
      "mallId": _0x5ef3e6,
      "property": _0x91a58c
    }, function (_0x2125af) {
      _0x2125af ? _0x4f4cdb(_0x2125af.data) : _0x198424(new Error("未能获取属性表并转换"));
    });
  });
}
function _0x2b3cd5(_0x953a6d, _0x18415b) {
  return _0x953a6d.some(_0x1b515d => _0x18415b.includes(_0x1b515d));
}
function _0x565d80(_0x22c886) {
  const _0x42e73f = [],
    _0x10bab3 = Array(_0x22c886.length).fill(false);
  for (let _0x3bd982 = 0; _0x3bd982 < _0x22c886.length; _0x3bd982++) {
    if (_0x10bab3[_0x3bd982]) continue;
    const _0x267f69 = [_0x22c886[_0x3bd982]];
    _0x10bab3[_0x3bd982] = true;
    for (let _0xd5f6e2 = 0; _0xd5f6e2 < _0x22c886.length; _0xd5f6e2++) {
      {
        if (_0x3bd982 !== _0xd5f6e2 && !_0x10bab3[_0xd5f6e2]) {
          {
            const _0x56bae8 = _0x22c886[_0x3bd982].slice(0, -1),
              _0x1b0840 = _0x22c886[_0xd5f6e2].slice(0, -1);
            _0x2b3cd5(_0x56bae8, _0x1b0840) && (_0x267f69.push(_0x22c886[_0xd5f6e2]), _0x10bab3[_0xd5f6e2] = true);
          }
        }
      }
    }
    let _0x1a746c = true;
    while (_0x1a746c) {
      _0x1a746c = false;
      for (let _0x36d600 = 0; _0x36d600 < _0x267f69.length; _0x36d600++) {
        for (let _0x120e43 = 0; _0x120e43 < _0x22c886.length; _0x120e43++) {
          {
            if (_0x10bab3[_0x120e43] || _0x267f69.includes(_0x22c886[_0x120e43])) continue;
            const _0x70f23f = _0x267f69.flatMap(_0x1a56dc => _0x1a56dc.slice(0, -1)),
              _0x11c8e1 = _0x22c886[_0x120e43].slice(0, -1);
            _0x2b3cd5(_0x70f23f, _0x11c8e1) && (_0x267f69.push(_0x22c886[_0x120e43]), _0x10bab3[_0x120e43] = true, _0x1a746c = true);
          }
        }
      }
    }
    _0x42e73f.push(_0x267f69);
  }
  return _0x42e73f;
}
function _0x1b0ca0(_0x1d11b6, _0x35d367, _0x456ee5 = []) {
  _0x4eec58();
  const _0x19bb55 = XLSX.utils.book_new(),
    _0x3c8100 = XLSX.utils.aoa_to_sheet(_0x1d11b6);
  XLSX.utils.book_append_sheet(_0x19bb55, _0x3c8100, "Sheet1");
  if (_0x456ee5.length > 0) {
    const _0x383d38 = XLSX.utils.aoa_to_sheet(_0x456ee5);
    XLSX.utils.book_append_sheet(_0x19bb55, _0x383d38, "汇总数据");
  }
  const _0x1ca93e = XLSX.write(_0x19bb55, {
      "bookType": "xlsx",
      "type": "array"
    }),
    _0x1af079 = new Blob([_0x1ca93e], {
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;"
    }),
    _0x12c62b = document.createElement("a"),
    _0x6e9e6d = URL.createObjectURL(_0x1af079);
  _0x12c62b.setAttribute("href", _0x6e9e6d);
  _0x12c62b.setAttribute("download", _0x35d367);
  document.body.appendChild(_0x12c62b);
  _0x12c62b.click();
  URL.revokeObjectURL(_0x6e9e6d);
  document.body.removeChild(_0x12c62b);
}
async function _0x3de897(_0x5dbc91, _0x2023ca, _0x3870d3, _0x5c2c8e) {
  return new Promise((_0x3eace4, _0x5626c9) => {
    chrome.runtime.sendMessage({
      "type": "exportPhotoDataToExcel",
      "data": _0x5dbc91,
      "photoIdx": _0x3870d3,
      "titleList": _0x2023ca,
      "fileName": _0x5c2c8e
    }, _0x32c78e => {
      _0x32c78e ? _0x3eace4(_0x32c78e) : _0x5626c9([]);
    });
  });
}
var _0x9ef51c = window.location.href;
if (_0x9ef51c.includes("refer_page_sn") || _0x9ef51c.includes("goods.html") || _0x9ef51c.includes("www.temu.com//g") || /g-\d+\.html/.test(_0x9ef51c)) _0x1ab144("#rightContent").then(function (_0x542761) {
  var _0x23e5c8 = document.querySelector("#rightContent").querySelectorAll("[role=\"button\"][aria-label]");
  function _0x8d49d1(_0x5b59cf) {
    var _0x1719f6 = document.createElement("div");
    _0x1719f6.style.position = "fixed";
    _0x1719f6.style.top = "50%";
    _0x1719f6.style.left = "50%";
    _0x1719f6.style.backgroundColor = "#fff";
    _0x1719f6.style.transform = "translate(-50%, -50%)";
    _0x1719f6.style.padding = "40px";
    _0x1719f6.style.border = "2px solid #000";
    _0x1719f6.style.borderBottom = "5px solid #000";
    _0x1719f6.style.borderRadius = "8px";
    _0x1719f6.style.fontSize = "18px";
    _0x1719f6.style.textAlign = "center";
    _0x1719f6.style.zIndex = "9999";
    var _0x212859 = document.createElement("p");
    _0x212859.innerHTML = _0x5b59cf;
    _0x1719f6.appendChild(_0x212859);
    var _0x80af60 = document.createElement("button");
    _0x80af60.textContent = "确定";
    _0x80af60.style.marginRight = "20px";
    _0x80af60.style.marginTop = "20px";
    _0x80af60.style.padding = "8px 20px";
    _0x80af60.style.border = "none";
    _0x80af60.style.borderRadius = "5px";
    _0x80af60.style.backgroundColor = "#4CAF50";
    _0x80af60.style.color = "white";
    _0x80af60.style.cursor = "pointer";
    _0x80af60.onclick = function () {
      window.open("https://seller.kuajingmaihuo.com/login");
      document.body.removeChild(_0x1719f6);
    };
    _0x1719f6.appendChild(_0x80af60);
    var _0x537c17 = document.createElement("button");
    _0x537c17.textContent = "取消";
    _0x537c17.style.padding = "8px 20px";
    _0x537c17.style.border = "none";
    _0x537c17.style.borderRadius = "5px";
    _0x537c17.style.backgroundColor = "#f44336";
    _0x537c17.style.color = "white";
    _0x537c17.style.cursor = "pointer";
    _0x537c17.onclick = function () {
      document.body.removeChild(_0x1719f6);
    };
    _0x1719f6.appendChild(_0x537c17);
    document.body.appendChild(_0x1719f6);
    return _0x1719f6;
  }
  function _0x26301f(_0x293d65, _0x4204b6) {
    return new Promise((_0x4a54fe, _0x1c5c40) => {
      chrome.runtime.sendMessage({
        "type": "getCategoryList",
        "data": _0x293d65,
        "mallId": _0x4204b6
      }, function (_0x536b2e) {
        _0x536b2e ? _0x4a54fe(_0x536b2e.data) : _0x1c5c40(new Error("未能获取类目数据"));
      });
    });
  }
  (function () {
    'use strict';

    function _0x2c8d7c() {
      {
        var _0x121f87 = document.querySelector("#myniubiBotton");
        if (_0x121f87 == null) {
          {
            var _0x393105 = document.createElement("article");
            _0x393105.style.position = "relative";
            _0x393105.id = "divButton";
            var _0x3491a1 = document.createElement("button");
            _0x3491a1.style.padding = "5px 5px";
            _0x3491a1.style.border = "none";
            _0x3491a1.style.borderRadius = "5px";
            _0x3491a1.style.backgroundColor = "rgb(255 148 0)";
            _0x3491a1.style.color = "#fff";
            _0x3491a1.style.fontFamily = "system-ui";
            _0x3491a1.style.fontSize = "15px";
            _0x3491a1.style.cursor = "pointer";
            _0x3491a1.style.zIndex = "999999";
            _0x3491a1.style.height = "35px";
            _0x3491a1.style.width = "126px";
            _0x3491a1.style.marginBottom = "10px";
            _0x3491a1.textContent = "咕噜噜商品采集";
            _0x3491a1.id = "myniubiBotton";
            var _0x91d531 = document.createElement("button");
            _0x91d531.style.padding = "5px 5px";
            _0x91d531.style.border = "none";
            _0x91d531.style.borderRadius = "5px";
            _0x91d531.style.backgroundColor = "rgb(255 148 0)";
            _0x91d531.style.color = "#fff";
            _0x91d531.style.fontFamily = "system-ui";
            _0x91d531.style.fontSize = "15px";
            _0x91d531.style.cursor = "pointer";
            _0x91d531.style.zIndex = "999999";
            _0x91d531.style.height = "35px";
            _0x91d531.style.width = "156px";
            _0x91d531.style.marginBottom = "10px";
            _0x91d531.style.marginLeft = "12px";
            _0x91d531.textContent = "添加进咕噜噜选品箱";
            _0x91d531.id = "myniubiCBotton";
            var _0x270ae0 = document.createElement("button");
            _0x270ae0.style.padding = "5px 5px";
            _0x270ae0.style.border = "none";
            _0x270ae0.style.borderRadius = "5px";
            _0x270ae0.style.backgroundColor = "rgb(255 148 0)";
            _0x270ae0.style.color = "#fff";
            _0x270ae0.style.fontFamily = "system-ui";
            _0x270ae0.style.fontSize = "15px";
            _0x270ae0.style.cursor = "pointer";
            _0x270ae0.style.zIndex = "999999";
            _0x270ae0.style.height = "35px";
            _0x270ae0.style.width = "186px";
            _0x270ae0.style.marginBottom = "10px";
            _0x270ae0.style.marginLeft = "12px";
            _0x270ae0.textContent = "视频+图片打包下载";
            _0x270ae0.id = "myniubiDBotton";
            _0x393105.appendChild(_0x3491a1);
            _0x393105.appendChild(_0x270ae0);
            _0x3491a1.addEventListener("click", function () {
              "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0x37f72b, _0x33f898) => String.fromCharCode(parseInt(_0x33f898, 16))) == document.querySelector("#myniubiBotton").innerText ? "" : !function () {
                chrome.storage.local.set({
                  "codePhone": ["", ""]
                });
                window.location.reload();
              }();
              _0x2d070c();
            });
            _0x270ae0.addEventListener("click", function () {
              _0x2376ea(_0x20cb88);
            });
            var _0x121f87 = document.querySelector("#myniubiBotton");
            "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0x318e8a, _0x3fb336) => String.fromCharCode(parseInt(_0x3fb336, 16))) == _0x3491a1.textContent ? "" : !function () {
              chrome.storage.local.set({
                "codePhone": ["", ""]
              });
              window.location.reload();
            }();
            setTimeout(() => {
              requestAnimationFrame(() => {
                {
                  var _0x4bc7f5 = document.querySelector("#rightContent"),
                    _0x112323 = document.querySelector("#myniubiBotton");
                  _0x4bc7f5 && _0x112323 == null && _0x4bc7f5.insertBefore(_0x393105, _0x4bc7f5.firstChild);
                }
              });
            }, 1000);
          }
        }
      }
    }
    function _0x2d070c() {
      chrome.storage.local.get("codePhone", function (_0x1a75a1) {
        const _0x586de5 = _0x1a75a1.codePhone;
        _0x586de5 ? (chrome.runtime.sendMessage({
          "type": "usageFunctionRecord",
          "phone": _0x586de5,
          "name": "商品采集"
        }), chrome.runtime.sendMessage({
          "type": "checkTime",
          "upShop": 1,
          "password": _0x586de5,
          "model": "采集"
        }, _0x55f2c1 => {
          if (_0x55f2c1.data.type == "fcmsl" && _0x55f2c1.data.up == "ok") chrome.runtime.sendMessage({
            "type": "getMyUserInfo"
          }, function (_0x1e8b47) {
            var _0x4f23e3 = "",
              _0x2a9ef5 = "",
              _0x4576b0 = "",
              _0x18551c = [];
            if (_0x1e8b47.data.length == 0) _0x8d49d1("TEMU卖家后台未登录，是否登录");else {
              const _0xb261eb = document.createElement("div");
              _0xb261eb.classList.add("custom-popup");
              _0xb261eb.style.position = "fixed";
              _0xb261eb.style.top = "42%";
              _0xb261eb.style.left = "50%";
              _0xb261eb.style.transform = "translate(-50%, -50%) scale(0)";
              _0xb261eb.style.background = "#fff";
              _0xb261eb.style.padding = "30px";
              _0xb261eb.style.borderRadius = "10px";
              _0xb261eb.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
              _0xb261eb.style.zIndex = "9999";
              _0xb261eb.style.width = "600px";
              _0xb261eb.style.height = "350px";
              _0xb261eb.style.fontFamily = "Arial, sans-serif";
              _0xb261eb.style.transition = "transform 0.3s ease-in-out";
              const _0x466ca7 = document.createElement("div");
              _0x466ca7.textContent = "店铺";
              _0x466ca7.style.fontWeight = "bold";
              _0x466ca7.style.marginBottom = "10px";
              _0x466ca7.style.fontSize = "18px";
              _0xb261eb.appendChild(_0x466ca7);
              const _0x26db88 = document.createElement("select");
              _0x26db88.style.width = "100%";
              _0x26db88.style.fontSize = "16px";
              _0x26db88.style.padding = "10px";
              _0x26db88.style.border = "1px solid #ccc";
              _0x26db88.style.borderRadius = "5px";
              _0x26db88.style.marginBottom = "20px";
              _0x1e8b47.data.forEach(_0x5985df => {
                const _0x79f5ca = document.createElement("option");
                _0x79f5ca.value = _0x5985df.value;
                _0x79f5ca.textContent = _0x5985df.name;
                _0x26db88.appendChild(_0x79f5ca);
              });
              for (var _0x539e39 = 0; _0x539e39 < _0x1e8b47.data.length; _0x539e39++) {
                {
                  if (!_0x1e8b47.data[_0x539e39].isSemiManagedMall) {
                    {
                      _0x2a9ef5 = _0x1e8b47.data[_0x539e39].value;
                      _0x4576b0 = _0x1e8b47.data[_0x539e39].name;
                      break;
                    }
                  }
                }
              }
              _0x26db88.addEventListener("change", function () {
                _0x2a9ef5 = this.value;
                _0x4576b0 = this.options[this.selectedIndex].text;
              });
              _0xb261eb.appendChild(_0x26db88);
              const _0x2131f1 = document.createElement("div");
              _0x2131f1.textContent = "类目（变更请直接修改类目";
              _0x2131f1.style.fontWeight = "bold";
              _0x2131f1.style.marginBottom = "10px";
              _0x2131f1.style.fontSize = "16px";
              _0xb261eb.appendChild(_0x2131f1);
              const _0x5cffd5 = document.createElement("textarea");
              _0x5cffd5.placeholder = "正在加速采集...";
              _0x5cffd5.style.display = "flex";
              _0x5cffd5.style.position = "relative";
              _0x5cffd5.style.padding = "10px";
              _0x5cffd5.style.border = "1px solid rgba(255, 255, 255, 0)";
              _0x5cffd5.style.borderRadius = "5px";
              _0x5cffd5.style.fontSize = "13px";
              _0x5cffd5.style.width = "inherit";
              _0x5cffd5.style.width = "100%";
              _0x5cffd5.style.zIndex = "999";
              _0x5cffd5.id = "reCategory";
              _0x5cffd5.style.resize = "none";
              _0xb261eb.appendChild(_0x5cffd5);
              const _0x5864ee = document.createElement("div");
              _0x5864ee.style.position = "fixed";
              _0x5864ee.style.backgroundColor = "rgb(255, 255, 255)";
              _0x5864ee.style.border = "1px solid rgb(245, 190, 113)";
              _0x5864ee.style.borderRadius = "5px";
              _0x5864ee.style.padding = "10px";
              _0x5864ee.style.maxHeight = "200px";
              _0x5864ee.style.overflow = "auto";
              _0x5864ee.style.display = "none";
              _0x5864ee.style.width = "85%";
              _0x5864ee.style.zIndex = "999999";
              _0xb261eb.appendChild(_0x5864ee);
              const _0x3b0452 = document.createElement("div");
              _0x3b0452.style.display = "flex";
              _0x3b0452.style.justifyContent = "flex-end";
              _0x3b0452.style.gap = "10px";
              _0xb261eb.appendChild(_0x3b0452);
              const _0x8dbf89 = document.createElement("div");
              _0x8dbf89.style.marginTop = "10px";
              const _0x2e92a3 = document.createElement("label");
              _0x2e92a3.style.display = "inline-flex";
              _0x2e92a3.style.alignItems = "center";
              _0x2e92a3.style.cursor = "pointer";
              _0x2e92a3.style.marginRight = "20px";
              _0x2e92a3.style.fontWeight = "bold";
              _0x2e92a3.style.color = "#1e90ff";
              _0x2e92a3.style.opacity = "1";
              _0x2e92a3.style.fontSize = "15px";
              _0x2e92a3.id = "nbmaleLabel";
              _0x2e92a3.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"nbmale\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            快速采集并打开上新页面（需手动处理视频）\n                                        ";
              const _0x336847 = document.createElement("label");
              _0x336847.style.display = "inline-flex";
              _0x336847.style.alignItems = "center";
              _0x336847.style.cursor = "pointer";
              _0x336847.style.marginRight = "20px";
              _0x336847.style.fontWeight = "bold";
              _0x336847.style.color = "#f46200";
              _0x336847.style.opacity = "0.4";
              _0x336847.style.fontSize = "15px";
              _0x336847.style.marginTop = "8px";
              _0x336847.id = "maleLabel";
              _0x336847.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"male\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            等待素材加载并自动打开上新页面\n                                        ";
              const _0x435db4 = document.createElement("label");
              _0x435db4.style.display = "inline-flex";
              _0x435db4.style.alignItems = "center";
              _0x435db4.style.cursor = "pointer";
              _0x435db4.style.fontWeight = "bold";
              _0x435db4.style.color = "#0a8800";
              _0x435db4.style.opacity = "0.4";
              _0x435db4.style.fontSize = "15px";
              _0x435db4.style.marginTop = "8px";
              _0x435db4.id = "femaleLabel";
              _0x435db4.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"female\" style=\"margin-right: 8px; accent-color: #0a8800;\">\n                                            后台采集模式(不自动打开上新页面)\n                                        ";
              _0x8dbf89.appendChild(_0x2e92a3);
              _0x8dbf89.appendChild(_0x336847);
              _0x8dbf89.appendChild(_0x435db4);
              _0x3b0452.appendChild(_0x8dbf89);
              const _0x555cad = _0x336847.querySelector("input"),
                _0x3effb8 = _0x435db4.querySelector("input"),
                _0x4a88a6 = _0x2e92a3.querySelector("input");
              chrome.storage.local.get("checkValue", function (_0x507266) {
                if (_0x507266.checkValue == "male") _0x555cad.checked = true;else {
                  if (_0x507266.checkValue == "female") _0x3effb8.checked = true;else {
                    _0x4a88a6.checked = true;
                  }
                }
                _0x2de21a();
              });
              _0x555cad.addEventListener("change", _0x2de21a);
              _0x3effb8.addEventListener("change", _0x2de21a);
              _0x4a88a6.addEventListener("change", _0x2de21a);
              function _0x2de21a() {
                {
                  _0x336847.style.opacity = _0x555cad.checked ? "1" : "0.4";
                  _0x435db4.style.opacity = _0x3effb8.checked ? "1" : "0.4";
                  _0x2e92a3.style.opacity = _0x4a88a6.checked ? "1" : "0.4";
                  const _0x523408 = document.querySelector("input[name=\"gender\"]:checked").value;
                  chrome.storage.local.set({
                    "checkValue": _0x523408
                  });
                }
              }
              const _0x9ed446 = document.createElement("button");
              _0x9ed446.textContent = "取消";
              _0x9ed446.style.padding = "10px 18px";
              _0x9ed446.style.border = "none";
              _0x9ed446.style.borderRadius = "5px";
              _0x9ed446.style.background = "#ececec";
              _0x9ed446.style.color = "#000";
              _0x9ed446.style.fontFamily = "Arial, sans-serif";
              _0x9ed446.style.cursor = "pointer";
              _0x9ed446.style.marginTop = "12px";
              _0x9ed446.style.fontSize = "13px";
              _0x9ed446.style.width = "82px";
              _0x9ed446.addEventListener("click", _0x31f55f);
              _0x3b0452.appendChild(_0x9ed446);
              const _0x343700 = document.createElement("button");
              _0x343700.textContent = "商品采集中";
              _0x343700.style.padding = "10px 30px";
              _0x343700.style.border = "none";
              _0x343700.style.borderRadius = "5px";
              _0x343700.style.background = "#fb7701f7";
              _0x343700.style.color = "#fff";
              _0x343700.style.fontFamily = "Arial, sans-serif";
              _0x343700.style.cursor = "pointer";
              _0x343700.style.marginTop = "12px";
              _0x343700.style.fontSize = "13px";
              _0x343700.style.width = "150px";
              _0x343700.disabled = true;
              _0x343700.addEventListener("click", function () {
                chrome.runtime.sendMessage({
                  "type": "checkTime",
                  "upShop": 1,
                  "password": _0x586de5,
                  "model": "采集",
                  "mallid": _0x2a9ef5,
                  "shopName": _0x4576b0
                }, _0x1640e3 => {
                  {
                    if (_0x1640e3.data.shopState == "正常") {
                      {
                        var _0x27f54f = document.querySelector("input[name=\"gender\"]:checked").value;
                        chrome.storage.local.set({
                          "checkValue": _0x27f54f
                        });
                        _0xb5c960(_0x18551c, _0x27f54f);
                        _0x31f55f();
                      }
                    } else {
                      if (_0x1640e3.data.shopState == "可绑") {
                        _0x19c80f("是否绑定当前店铺使用<br>" + _0x4576b0, "可绑定帮助", _0x2a9ef5, _0x586de5, _0x4576b0);
                      } else {
                        if (_0x1640e3.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x1640e3.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                      }
                    }
                  }
                });
              });
              _0x3b0452.appendChild(_0x343700);
              document.body.appendChild(_0xb261eb);
              setTimeout(() => {
                _0xb261eb.style.transform = "translate(-50%, -50%) scale(1)";
              }, 50);
              function _0x31f55f() {
                const _0x1556d2 = document.querySelector(".custom-popup");
                _0x1556d2 && (_0x1556d2.style.transform = "translate(-50%, -50%) scale(0)", setTimeout(() => {
                  _0x1556d2.remove();
                }, 300));
              }
              var _0x2b7aca = [],
                _0x3ea51b = "";
              let _0x1aead0 = false;
              _0x44c4bb(_0x2a9ef5).then(_0xe8c349 => {
                {
                  _0x5cffd5.placeholder = "补全类目中...";
                  var _0xe8c349 = typeof _0xe8c349 === "string" ? JSON.parse(_0xe8c349) : _0xe8c349,
                    _0x2e9bb8 = ["", _0xe8c349.cat1Id, _0xe8c349.cat2Id, _0xe8c349.cat3Id, _0xe8c349.cat4Id];
                  async function _0x3cacc3() {
                    {
                      await _0xb8580a(_0xe8c349.catId, _0x2a9ef5, {});
                      for (let _0x1f5cad = 0; _0x1f5cad < _0x2e9bb8.length; _0x1f5cad++) {
                        {
                          var _0x474c4e = [],
                            _0x30e185 = false;
                          if (_0x2e9bb8[_0x1f5cad].toString() == "0") {
                            continue;
                          }
                          const _0x597504 = _0x2e9bb8[_0x1f5cad],
                            _0xc687d0 = _0x1f5cad === _0x2e9bb8.length - 1 ? _0xe8c349.catId : _0x2e9bb8[_0x1f5cad + 1];
                          try {
                            const _0x1b2a55 = await _0x26301f({
                              "parentCatId": _0x597504
                            }, _0x2a9ef5);
                            for (let _0x522f8f = 0; _0x522f8f < _0x1b2a55.result.categoryNodeVOS.length; _0x522f8f++) {
                              const _0x60c2f9 = _0x1b2a55.result.categoryNodeVOS[_0x522f8f];
                              _0x60c2f9.isLeaf == false && _0x474c4e.push(_0x60c2f9);
                              if (_0x60c2f9.catId == _0xc687d0) {
                                _0x2b7aca.push(_0x60c2f9.catName);
                                _0x18551c.push(_0xc687d0);
                                _0x30e185 = true;
                                break;
                              }
                            }
                            if (_0x30e185 == false && _0x18551c[_0x18551c.length - 1] != _0xe8c349.catId) {
                              if (_0x18551c[_0x18551c.length - 1] == _0xe8c349.cat4Id) {
                                let _0x47062e = 0,
                                  _0x9ba730 = false;
                                const _0x510e2e = new Set();
                                async function _0x733597(_0x323d73) {
                                  {
                                    if (_0x47062e >= 50) return _0x9ba730 = true, _0x1aead0 = true, null;
                                    _0x47062e++;
                                    if (!_0x9ba730) {
                                      {
                                        for (let _0x2c339f = 0; _0x2c339f < _0x323d73.length; _0x2c339f++) {
                                          if (_0x510e2e.has(_0x323d73[_0x2c339f].catId)) continue;
                                          _0x510e2e.add(_0x323d73[_0x2c339f].catId);
                                          if (_0x323d73[_0x2c339f].catId == _0xe8c349.catId) return _0x474c4e.push(_0x323d73[_0x2c339f]), _0x323d73[_0x2c339f].catId;else {
                                            if (_0x323d73[_0x2c339f].isLeaf == false) {
                                              {
                                                _0x474c4e.push(_0x323d73[_0x2c339f]);
                                                const _0x56ce53 = await _0x26301f({
                                                    "parentCatId": _0x323d73[_0x2c339f].catId
                                                  }, _0x2a9ef5),
                                                  _0x3d101d = await _0x733597(_0x56ce53.result.categoryNodeVOS);
                                                if (_0x3d101d) return _0x3d101d;
                                              }
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                await (async () => {
                                  let _0x4362e4 = _0xe8c349.catId;
                                  const _0x33a13e = [],
                                    _0x36e8cd = [];
                                  var _0x4212f1 = await _0x733597(_0x474c4e);
                                  _0x4212f1 != _0xe8c349.catId && (_0x1aead0 = true);
                                  function _0x57f8fe(_0x3b82fa) {
                                    for (const _0x4591bd of _0x474c4e) {
                                      {
                                        if (_0x4591bd.catId == _0x4362e4) return _0x33a13e.push(_0x4591bd.parentCatId), _0x36e8cd.push(_0x4591bd.catName), _0x4362e4 = _0x4591bd.parentCatId, _0x57f8fe(_0x4591bd.parentCatId);
                                      }
                                    }
                                  }
                                  _0x57f8fe(_0x4362e4);
                                  _0x33a13e.reverse();
                                  _0x33a13e.push(_0xe8c349.catId);
                                  const _0x15ec9a = Array.from(new Set(_0x33a13e));
                                  _0x36e8cd.reverse();
                                  _0x18551c = _0x18551c.concat(_0x15ec9a);
                                  for (const _0x183547 of _0x36e8cd) {
                                    _0x2b7aca.push(_0x183547);
                                  }
                                })();
                              } else _0x1aead0 = true;
                            }
                          } catch (_0x4d5844) {
                            console.error("请求失败:", _0x4d5844);
                          }
                        }
                      }
                      for (var _0x1fdbe1 = 1; _0x1fdbe1 < _0x18551c.length + 1; _0x1fdbe1++) {
                        _0xe8c349["cat" + _0x1fdbe1 + "Id"] = _0x18551c[_0x1fdbe1 - 1];
                      }
                    }
                  }
                  _0x3cacc3().then(() => {
                    _0x3ea51b = _0x2b7aca.join(">");
                    if (_0x1aead0) {
                      _0x546e43(_0x3ea51b);
                      _0x5cffd5.value = _0x3ea51b + "（类目不完整）";
                    } else _0x5cffd5.value = _0x3ea51b;
                  }).then(async () => {
                    const _0x4cb052 = await Promise.all(_0xe8c349.productPropertyReqs.map(async _0x33bf68 => {
                      try {
                        const _0x225638 = await _0xb8580a(_0xe8c349.catId, _0x2a9ef5, _0x33bf68);
                        return _0x225638;
                      } catch (_0x4c0b10) {
                        console.error("Error saving property data:", _0x4c0b10.message);
                        throw _0x4c0b10;
                      }
                    }));
                    _0xe8c349.productPropertyReqs = _0x4cb052;
                    delete _0xe8c349.catId;
                    _0xe8c349.productPropertyReqs = _0xe8c349.productPropertyReqs.filter(_0x56bb7a => _0x56bb7a !== null && _0x56bb7a !== undefined);
                    const _0x5dd2a4 = _0xe8c349.productSpecPropertyReqs.map(async _0x326a88 => {
                      try {
                        {
                          if (_0x326a88.propValue) {
                            var _0x4732ad = await _0x1c2c61(_0x326a88.propValue, _0x326a88.parentSpecId, _0x2a9ef5);
                            _0xe8c349.productSkcReqs.forEach(_0x51348f => {
                              _0x51348f.productSkuReqs.forEach(_0x299fc3 => {
                                _0x299fc3.productSkuSpecReqs = _0x299fc3.productSkuSpecReqs.map(_0x118d72 => {
                                  if (_0x118d72.parentSpecId === _0x326a88.parentSpecId && _0x118d72.specName === _0x326a88.propValue) {
                                    _0x118d72.specId = _0x4732ad;
                                    for (var _0x510200 = 0; _0x510200 < _0xe8c349.productSpecPropertyReqs.length; _0x510200++) {
                                      {
                                        if (_0xe8c349.productSpecPropertyReqs[_0x510200].propValue == _0x326a88.propValue) {
                                          _0xe8c349.productSpecPropertyReqs[_0x510200].specId = _0x4732ad;
                                          _0xe8c349.productSpecPropertyReqs[_0x510200].propValue = _0x326a88.propValue;
                                          _0xe8c349.productSpecPropertyReqs[_0x510200].specName = _0x326a88.propValue;
                                          break;
                                        }
                                      }
                                    }
                                  }
                                  return _0x118d72;
                                });
                              });
                            });
                          }
                        }
                      } catch (_0x19d524) {
                        console.error("Error retrieving spec ID:", _0x19d524.message);
                      }
                    });
                    await Promise.all(_0x5dd2a4);
                    _0x4f23e3 = typeof _0xe8c349 === "string" ? JSON.parse(_0xe8c349) : _0xe8c349;
                    _0x343700.textContent = "上新";
                    _0x343700.disabled = false;
                  });
                }
              }).catch(_0x46e105 => {
                _0x31f55f();
                _0x19c80f("采集失败，请保持网络畅通，或联系小助手");
              });
              let _0x4da079;
              document.getElementById("reCategory").addEventListener("input", function (_0x1c1b83) {
                clearTimeout(_0x4da079);
                _0x4da079 = setTimeout(async function () {
                  {
                    const _0x318c2b = _0x1c1b83.target.value.trim();
                    _0x5cffd5.style.border = "1px solid #ccc";
                    if (_0x318c2b === "") {
                      {
                        _0x5864ee.innerHTML = "";
                        return;
                      }
                    }
                    try {
                      await _0x546e43(_0x318c2b);
                    } catch (_0x31651a) {
                      console.error("获取数据时发生错误:", _0x31651a);
                    }
                  }
                }, 500);
              });
              document.getElementById("reCategory").addEventListener("click", function (_0x31d1cd) {
                _0x5cffd5.style.border = "1px solid #ccc";
              });
              async function _0x546e43(_0x54b4bf) {
                try {
                  chrome.runtime.sendMessage({
                    "type": "getMyCategory",
                    "mallId": _0x2a9ef5,
                    "text": _0x54b4bf
                  }, _0x1767e5 => {
                    _0x21908d(_0x1767e5.data);
                  });
                } catch (_0x89b9fa) {
                  {
                    console.error("发生错误:", _0x89b9fa);
                    throw _0x89b9fa;
                  }
                }
              }
              function _0x21908d(_0x274408) {
                _0x5864ee.innerHTML = "";
                _0x274408.forEach(_0x2bce62 => {
                  {
                    const _0x31993c = document.createElement("div");
                    _0x31993c.textContent = _0x2bce62.name;
                    _0x31993c.setAttribute("data-value", _0x2bce62.value);
                    _0x31993c.style.padding = "5px";
                    _0x31993c.style.fontSize = "12px";
                    _0x31993c.style.cursor = "pointer";
                    _0x31993c.addEventListener("mouseenter", function () {
                      this.classList.add("hover-effect");
                    });
                    _0x31993c.addEventListener("mouseleave", function () {
                      this.classList.remove("hover-effect");
                    });
                    _0x31993c.addEventListener("click", function () {
                      _0x5cffd5.value = _0x2bce62.name;
                      _0x18551c = _0x2bce62.value.split(" ");
                      _0x5864ee.style.display = "none";
                    });
                    _0x5864ee.appendChild(_0x31993c);
                  }
                });
                _0x5864ee.style.display = "block";
              }
              document.addEventListener("click", function (_0x25da7d) {
                const _0x29285f = _0x25da7d.target;
                _0x29285f !== _0x5cffd5 && !_0x5864ee.contains(_0x29285f) && (_0x5864ee.style.display = "none", _0x5cffd5.style.border = "1px solid rgba(255, 255, 255, 0)");
              });
              async function _0xb5c960(_0x257e53, _0xb97d2a) {
                var _0x1657f5 = "dd" + Date.now();
                _0x4f23e3.idTime = _0x1657f5;
                try {
                  {
                    if (_0x257e53.length == 0) {
                      throw new Error("类目为空");
                    } else chrome.runtime.sendMessage({
                      "type": "addProductDraft",
                      "catId": _0x257e53[_0x257e53.length - 1],
                      "mallId": _0x2a9ef5
                    }, function (_0x5f4d98) {
                      for (var _0x3bd835 = 1; _0x3bd835 < 11; _0x3bd835++) {
                        _0x4f23e3["cat" + _0x3bd835 + "Id"] = 0;
                      }
                      _0x257e53 = [...new Set(_0x257e53)];
                      for (let _0x4c9942 = 1; _0x4c9942 < _0x257e53.length + 1; _0x4c9942++) {
                        _0x4f23e3["cat" + _0x4c9942 + "Id"] = _0x257e53[_0x4c9942 - 1];
                      }
                      _0x4f23e3.productDraftId = _0x5f4d98.data;
                      var _0x2f0d32 = "0";
                      _0x5f2905(2);
                      let _0xb2e2cf = setInterval(function () {
                          _0x57dc19 !== "" && (/[\u4e00-\u9fa5]/.test(_0x57dc19) ? _0x4f23e3.productName = _0x57dc19 : _0x4f23e3.productI18nReqs[0].productName = _0x57dc19, _0x2f0d32 = "1", clearInterval(_0xb2e2cf));
                        }, 200),
                        _0x41d151 = setInterval(function () {
                          {
                            if (_0x2f0d32 == "1") {
                              {
                                if (_0xb97d2a == "male") _0x1657fb({
                                  "goods": {
                                    "video": {
                                      "videoUrl": _0x4f23e3.productCarouseVideoReqList[0].videoUrl
                                    }
                                  }
                                }, _0x1657f5, _0x2a9ef5), clearInterval(_0x41d151), _0xd41141("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长"), chrome.runtime.sendMessage({
                                  "type": "postDataSave",
                                  "data": _0x4f23e3,
                                  "mallId": _0x2a9ef5,
                                  "ok": _0x24238d.ok
                                }, function (_0x374b7d) {
                                  window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x5f4d98.data);
                                  _0x4eec58();
                                });else {
                                  if (_0xb97d2a == "female") _0x1657fb({
                                    "goods": {
                                      "video": {
                                        "videoUrl": _0x4f23e3.productCarouseVideoReqList[0].videoUrl
                                      }
                                    }
                                  }, _0x1657f5, _0x2a9ef5), _0x4eec58(), _0x19c80f("数据正在采集，请稍后进入草稿箱查看！<br><br>"), clearInterval(_0x41d151), chrome.runtime.sendMessage({
                                    "type": "postDataSave",
                                    "data": _0x4f23e3,
                                    "mallId": _0x2a9ef5,
                                    "ok": _0x24238d.ok
                                  }, function (_0x2f0b20) {});else (_0xb97d2a = "nbmale") && (clearInterval(_0x41d151), _0xd41141("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长"), chrome.runtime.sendMessage({
                                    "type": "postDataSave",
                                    "data": _0x4f23e3,
                                    "mallId": _0x2a9ef5,
                                    "ok": 2
                                  }, function (_0x106b8e) {
                                    window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x5f4d98.data);
                                    _0x4eec58();
                                  }));
                                }
                              }
                            }
                          }
                        }, 250);
                    });
                  }
                } catch (_0x11eb45) {
                  throw _0x11eb45;
                }
              }
            }
          });else {
            if (_0x55f2c1.data.type == "mal") _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");else {
              if (_0x55f2c1.data.type == "fcmsl" && _0x55f2c1.data.up == "no") _0x19c80f("超出最大上新次数，请联系工作人员", "常规帮助");else _0x55f2c1.data.type == "malout" ? _0x19c80f("超出最大绑定数量，请联系工作人员", "常规帮助") : _0x19c80f("未授权，请联系工作人员", "常规帮助");
            }
          }
        })) : _0x19c80f("请联系工作人员授权后使用", "常规帮助");
      });
    }
    var _0x38ced0 = setInterval(_0x2c8d7c, 1200);
    setTimeout(function () {
      clearInterval(_0x38ced0);
    }, 20000);
  })();
  function _0x30b103() {
    const _0x1dcac7 = document.querySelectorAll("script");
    var _0x3c8797 = "";
    _0x1dcac7.forEach(_0x41e380 => {
      {
        if (_0x41e380.innerText.includes("window.rawData")) {
          {
            const _0x43affa = /window\.rawData=(.*?);document/s,
              _0xca90d2 = _0x41e380.innerText.match(_0x43affa);
            if (_0xca90d2) {
              const _0x32ab00 = _0xca90d2[1];
              _0x3c8797 = JSON.parse(_0x32ab00).store;
            }
          }
        }
      }
    });
    _0x3c8797 == "" && (_0x3c8797 = _0x56c091);
    var _0x4e0ca3 = {
        "主图": [],
        "描述图": [],
        "视频": [],
        "sku图": [],
        "名称": ""
      },
      _0x2c44c5 = _0x3c8797.goods;
    _0x4e0ca3["名称"] = _0x355548(_0x2c44c5.goodsName).slice(0, 210);
    _0x2c44c5.video && _0x4e0ca3["视频"].push(_0x2c44c5.video.videoUrl);
    _0x4e0ca3["主图"] = _0x2c44c5.bannerList.map(_0x2047c0 => _0x2047c0.url);
    _0x3c8797.productDetail.floorList && (_0x4e0ca3["描述图"] = _0x3c8797.productDetail.floorList.filter(_0x5e692c => !_0x5e692c.items[0].text).map(_0x16f3d4 => _0x16f3d4.items[0].url));
    var _0x242aaa = _0x2c44c5.gallery.filter(_0xa43696 => _0xa43696.showTextSpecs).map(_0x310e27 => [_0x310e27.url, _0x355548(_0x310e27.showTextSpecs[0].specValue)]);
    _0x4e0ca3["sku图"] = _0x242aaa;
    _0x20cb88 = _0x4e0ca3;
    var _0x5a380a = document.createElement("div");
    _0x5a380a.id = "card-popup";
    _0x5a380a.style.bottom = "0";
    _0x5a380a.style.left = "0";
    _0x5a380a.style.width = "100%";
    _0x5a380a.style.background = "#fff";
    _0x5a380a.style.border = "1px solid #ccc";
    _0x5a380a.style.borderTop = "none";
    _0x5a380a.style.borderRadius = "5px";
    _0x5a380a.style.padding = "8px";
    _0x5a380a.style.boxShadow = "rgba(236, 167, 18, 0.3) 0px 0px 10px";
    _0x5a380a.style.textAlign = "left";
    _0x5a380a.style.zIndex = "9999";
    var _0x24f80d = setInterval(function () {
      {
        var _0x1b3e36 = document.querySelector("[data-id=\"module\"]"),
          _0x1e2acf = document.querySelector("#card-popup");
        _0x1b3e36 && _0x1e2acf == null && (_0x1b3e36.insertBefore(_0x5a380a, _0x1b3e36.firstChild), _0x35100d());
      }
    }, 1000);
    setTimeout(function () {
      clearInterval(_0x24f80d);
    }, 20000);
    function _0x35100d() {
      _0x5a380a.innerHTML = "";
      var _0x25818e = document.createElement("table");
      _0x25818e.style.width = "100%";
      var _0x2ad277 = document.createElement("thead"),
        _0x26c372 = document.createElement("tr"),
        _0x13ec54 = ["商品", "价格", "预估供货价", "库存"];
      _0x13ec54.forEach(function (_0x467818) {
        var _0x317ecf = document.createElement("th");
        _0x317ecf.textContent = _0x467818;
        _0x26c372.appendChild(_0x317ecf);
      });
      _0x2ad277.appendChild(_0x26c372);
      _0x25818e.appendChild(_0x2ad277);
      var _0x584010 = document.getElementById("rightContent"),
        _0x59edf8 = /Local warehouse/,
        _0x23667d = document.createElement("tbody"),
        _0x3e8cb8 = _0x3c8797.localInfo.currency.toLowerCase();
      chrome.runtime.sendMessage({
        "type": "exchangeRate",
        "rate": _0x3e8cb8
      }, _0x45bc32 => {
        if (_0x3c8797.sku) {
          _0x3c8797.sku.forEach(function (_0x1e0241) {
            var _0x177708 = "";
            _0x1e0241.specs.forEach(function (_0xdbbf76) {
              {
                _0x177708 += _0xdbbf76.specValue !== "undefined" ? _0xdbbf76.specValue + " " : _0xdbbf76.spec_value + " ";
              }
            });
            var _0x12f1f2 = parseFloat((_0x1e0241.normalPriceStr !== "undefined" ? _0x1e0241.normalPriceStr : _0x1e0241.normal_price_str).replace(/[^\d.]/g, "")) * parseFloat(_0x45bc32),
              _0x55e295;
            _0x59edf8.test(_0x584010.innerHTML) ? _0x55e295 = _0x12f1f2.toFixed(2) : _0x55e295 = (_0x12f1f2 / 2 * 0.8).toFixed(2);
            var _0x1842e1 = document.createElement("tr"),
              _0x466d03 = document.createElement("td");
            _0x466d03.textContent = _0x177708;
            _0x1842e1.appendChild(_0x466d03);
            var _0x1c7ad6 = document.createElement("td");
            _0x1c7ad6.textContent = _0x1e0241.normalPriceStr !== "undefined" ? _0x1e0241.normalPriceStr : _0x1e0241.normal_price_str;
            _0x1842e1.appendChild(_0x1c7ad6);
            var _0x40ebc7 = document.createElement("td");
            _0x40ebc7.textContent = _0x55e295;
            _0x1842e1.appendChild(_0x40ebc7);
            var _0x19c970 = document.createElement("td");
            _0x19c970.textContent = _0x1e0241.stockQuantity !== "undefined" ? _0x1e0241.stockQuantity : _0x1e0241.stock_quantity;
            _0x1842e1.appendChild(_0x19c970);
            _0x23667d.appendChild(_0x1842e1);
          });
        }
        _0x25818e.appendChild(_0x23667d);
        _0x5a380a.appendChild(_0x25818e);
      });
    }
  }
  _0x30b103();
});else _0x9ef51c.includes("product-create") && _0x9ef51c.includes("product-edit") && chrome.storage.local.get("codePhone", function (_0x2d5434) {
  const _0x5df543 = _0x2d5434.codePhone;
  _0xb52f9().then(_0x37fff2 => {
    chrome.runtime.sendMessage({
      "type": "checkTime",
      "password": _0x5df543,
      "model": "裂变",
      "mallid": _0x37fff2,
      "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
    }, _0x432f18 => {
      _0x432f18.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x1a7ac7) {
        (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) && (async () => {
          window.addEventListener("popstate", function (_0x43dbd6) {
            if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) {
              var _0x2b96da = document.querySelector("#reCategory");
              !_0x2b96da && !function () {
                'use strict';

                const _0x270d98 = document.createElement("style");
                _0x270d98.textContent = "\n                                                .hover-effect {\n                                            \n                                                    background-color: #fff6e6;\n                                                }\n                                        ";
                document.head.append(_0x270d98);
                const _0x556dbd = document.createElement("input");
                _0x556dbd.placeholder = "如需修改类目，请在这里输入类目";
                _0x556dbd.style.display = "flex";
                _0x556dbd.style.position = "relative";
                _0x556dbd.style.padding = "10px";
                _0x556dbd.style.border = "1px solid rgba(255, 255, 255, 0)";
                _0x556dbd.style.borderRadius = "5px";
                _0x556dbd.style.zIndex = "999";
                _0x556dbd.style.width = "inherit";
                _0x556dbd.id = "reCategory";
                !document.querySelector("#reCategory") && document.body.appendChild(_0x556dbd);
                const _0x587e66 = document.createElement("div");
                _0x587e66.style.position = "fixed";
                _0x587e66.style.backgroundColor = "rgb(255, 255, 255)";
                _0x587e66.style.border = "1px solid rgb(245, 190, 113)";
                _0x587e66.style.borderRadius = "5px";
                _0x587e66.style.padding = "10px";
                _0x587e66.style.maxHeight = "250px";
                _0x587e66.style.overflow = "auto";
                _0x587e66.style.display = "none";
                _0x587e66.style.width = "inherit";
                _0x587e66.style.zIndex = "999999";
                _0x1ab144("[class*=\"product-create_productPublishContainer\"]").then(_0x4c5063 => {
                  var _0x1025f9 = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
                  if (_0x1025f9) _0x1025f9.children.length >= 3 ? !document.querySelector("#reCategory") && (_0x1025f9.insertBefore(_0x556dbd, _0x1025f9.children[2]), _0x1025f9.insertBefore(_0x587e66, _0x1025f9.children[3])) : !document.querySelector("#reCategory") && (_0x1025f9.insertBefore(_0x556dbd, _0x1025f9.children[1]), _0x1025f9.insertBefore(_0x587e66, _0x1025f9.children[2]));else {}
                });
                let _0x379b90;
                document.getElementById("reCategory").addEventListener("input", function (_0x178315) {
                  clearTimeout(_0x379b90);
                  _0x379b90 = setTimeout(async function () {
                    const _0x5026ed = _0x178315.target.value.trim();
                    _0x556dbd.style.border = "1px solid #ccc";
                    if (_0x5026ed === "") {
                      {
                        _0x587e66.innerHTML = "";
                        return;
                      }
                    }
                    try {
                      {
                        const _0xede80f = await _0x2e0e75(_0x5026ed);
                        _0x4a7260(_0xede80f);
                      }
                    } catch (_0x3443af) {
                      console.error("获取数据时发生错误:", _0x3443af);
                    }
                  }, 500);
                });
                async function _0x2e0e75(_0x17afa3) {
                  try {
                    {
                      const _0x5dbfe3 = await _0x3130b9(),
                        _0x1b1c38 = await _0x60188b(_0x5dbfe3, _0x17afa3);
                      return _0x1b1c38;
                    }
                  } catch (_0x5b5869) {
                    console.error("发生错误:", _0x5b5869);
                    throw _0x5b5869;
                  }
                }
                function _0x4a7260(_0x528fc1) {
                  _0x587e66.innerHTML = "";
                  _0x528fc1.forEach(_0x24f5e1 => {
                    {
                      const _0x4a136a = document.createElement("div");
                      _0x4a136a.textContent = _0x24f5e1.name;
                      _0x4a136a.setAttribute("data-value", _0x24f5e1.value);
                      _0x4a136a.style.padding = "5px";
                      _0x4a136a.style.fontSize = "12px";
                      _0x4a136a.style.cursor = "pointer";
                      _0x4a136a.addEventListener("mouseenter", function () {
                        this.classList.add("hover-effect");
                      });
                      _0x4a136a.addEventListener("mouseleave", function () {
                        this.classList.remove("hover-effect");
                      });
                      _0x4a136a.addEventListener("click", function () {
                        _0x556dbd.value = _0x24f5e1.name;
                        _0x146a22("是否确定修改类目<br><br>" + _0x24f5e1.name, _0x24f5e1.value.split(" "));
                        _0x587e66.style.display = "none";
                      });
                      _0x587e66.appendChild(_0x4a136a);
                    }
                  });
                  _0x587e66.style.display = "block";
                }
                document.addEventListener("click", function (_0x2c3dca) {
                  const _0x2165d0 = _0x2c3dca.target;
                  _0x2165d0 !== _0x556dbd && !_0x587e66.contains(_0x2165d0) && (_0x587e66.style.display = "none", _0x556dbd.style.border = "1px solid rgba(255, 255, 255, 0)");
                });
              }();
            }
          });
          async function _0x60188b(_0x150d11, _0x1c3502) {
            const _0x33a474 = new Headers({
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                "mallid": _0x150d11
              }),
              _0x3c7fc9 = JSON.stringify({
                "searchText": _0x1c3502
              }),
              _0x42d9cb = {
                "method": "POST",
                "headers": _0x33a474,
                "body": _0x3c7fc9,
                "redirect": "follow"
              };
            try {
              {
                const _0x2fcf69 = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x42d9cb),
                  _0x197648 = await _0x2fcf69.json();
                lin = [];
                for (var _0x1da708 of _0x197648.result.categoryPaths) {
                  {
                    var _0x574e1e = [],
                      _0x390d9e = [];
                    for (var _0x38cb1f in _0x1da708) {
                      _0x38cb1f.startsWith("cat") && _0x1da708[_0x38cb1f] && _0x1da708[_0x38cb1f].catName !== undefined && (_0x574e1e.push(_0x1da708[_0x38cb1f].catName), _0x390d9e.push(_0x1da708[_0x38cb1f].catId));
                    }
                    var _0x4eaad3 = _0x390d9e.join(" "),
                      _0x112f2c = _0x574e1e.join(" > ");
                    lin.push({
                      "name": _0x112f2c,
                      "value": _0x4eaad3
                    });
                  }
                }
                return lin;
              }
            } catch (_0x755491) {}
          }
          function _0x146a22(_0x18df18, _0x4743db) {
            var _0x2b4582 = document.createElement("div");
            _0x2b4582.style.position = "fixed";
            _0x2b4582.style.top = "50%";
            _0x2b4582.style.left = "50%";
            _0x2b4582.style.transform = "translate(-50%, -50%)";
            _0x2b4582.style.backgroundColor = "#fff";
            _0x2b4582.style.padding = "20px";
            _0x2b4582.style.border = "2px solid #fb7701";
            _0x2b4582.style.borderBottom = "5px solid #fb7701e3";
            _0x2b4582.style.borderRadius = "8px";
            _0x2b4582.style.color = "rgba(0,0,0,.8)";
            _0x2b4582.style.fontSize = "18px";
            _0x2b4582.style.textAlign = "center";
            _0x2b4582.style.zIndex = "9999";
            var _0xf1965f = document.createElement("p");
            _0xf1965f.innerHTML = _0x18df18;
            _0x2b4582.appendChild(_0xf1965f);
            var _0x444c74 = document.createElement("button");
            _0x444c74.textContent = "确定";
            _0x444c74.style.marginRight = "10px";
            _0x444c74.style.padding = "8px 20px";
            _0x444c74.style.border = "none";
            _0x444c74.style.borderRadius = "5px";
            _0x444c74.style.backgroundColor = "#4CAF50";
            _0x444c74.style.color = "white";
            _0x444c74.style.cursor = "pointer";
            _0x444c74.onclick = function () {
              chrome.runtime.sendMessage({
                "type": "usageFunctionRecord",
                "phone": _0x5df543,
                "name": "商品裂变"
              });
              document.body.removeChild(_0x2b4582);
              _0x5f2905();
              _0x4ed751(_0x4743db).then(_0x2768f3 => {}).catch(_0x2dfb84 => {
                console.error("Operation failed:", _0x2dfb84);
              });
            };
            _0x2b4582.appendChild(_0x444c74);
            var _0xcf6cbc = document.createElement("button");
            _0xcf6cbc.textContent = "取消";
            _0xcf6cbc.style.padding = "8px 20px";
            _0xcf6cbc.style.border = "none";
            _0xcf6cbc.style.borderRadius = "5px";
            _0xcf6cbc.style.backgroundColor = "#f44336";
            _0xcf6cbc.style.color = "white";
            _0xcf6cbc.style.cursor = "pointer";
            _0xcf6cbc.onclick = function () {
              document.body.removeChild(_0x2b4582);
            };
            _0x2b4582.appendChild(_0xcf6cbc);
            document.body.appendChild(_0x2b4582);
          }
          async function _0x4b2e15(_0x1d648e, _0x2eba3e) {
            {
              const _0x5768f4 = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add",
                _0x4bdd97 = new Headers({
                  "accept": "*/*",
                  "accept-language": "zh-CN,zh;q=0.9",
                  "content-type": "application/json",
                  "mallid": _0x2eba3e
                }),
                _0x4248ba = JSON.stringify({
                  "catId": _0x1d648e
                }),
                _0x3d6e7b = {
                  "method": "POST",
                  "headers": _0x4bdd97,
                  "body": _0x4248ba,
                  "redirect": "follow"
                };
              try {
                const _0x471319 = await fetch(_0x5768f4, _0x3d6e7b),
                  _0x1273b8 = await _0x471319.json();
                return _0x1273b8.result.productDraftId;
              } catch (_0x1bcdb7) {
                console.error("error", _0x1bcdb7);
                throw _0x1bcdb7;
              }
            }
          }
          async function _0x28906b(_0x14ec5a, _0x51963d, _0x5e62a7, _0x344c86) {
            {
              const _0x3dfac1 = new Headers({
                  "accept": "*/*",
                  "accept-language": "zh-CN,zh;q=0.9",
                  "content-type": "application/json",
                  "mallid": _0x14ec5a
                }),
                _0x125011 = JSON.stringify(_0x5e62a7),
                _0x25c154 = {
                  "method": "POST",
                  "headers": _0x3dfac1,
                  "body": _0x125011,
                  "redirect": "follow"
                };
              try {
                const _0x50520a = await fetch(_0x344c86, _0x25c154);
                var _0x3a1199 = await _0x50520a.json();
                _0x3a1199 = _0x3a1199.result;
                _0x3a1199.carouseVideoVOList.length != 0 && _0x1657fb({
                  "goods": {
                    "video": {
                      "videoUrl": _0x3a1199.carouseVideoVOList[0].videoUrl
                    }
                  }
                }, _0x14ec5a);
                shopData = {
                  "cat1Id": 0,
                  "cat2Id": 0,
                  "cat3Id": 0,
                  "cat4Id": 0,
                  "cat5Id": 0,
                  "cat6Id": 0,
                  "cat7Id": 0,
                  "cat8Id": 0,
                  "cat9Id": 0,
                  "cat10Id": 0,
                  "materialMultiLanguages": [],
                  "productName": _0x3a1199.productName,
                  "productI18nReqs": _0x3a1199.productI18nList,
                  "productPropertyReqs": _0x3a1199.productPropertyList,
                  "productSkcReqs": [{
                    "previewImgUrls": [],
                    "productSkcCarouselImageI18nReqs": [],
                    "extCode": "",
                    "mainProductSkuSpecReqs": [{
                      "parentSpecId": 0,
                      "parentSpecName": "",
                      "specId": 0,
                      "specName": ""
                    }],
                    "productSkuReqs": [],
                    "productSkcId": 0
                  }],
                  "productSpecPropertyReqs": [],
                  "carouselImageUrls": _0x3a1199.carouselImageUrls,
                  "carouselImageI18nReqs": [],
                  "materialImgUrl": _0x3a1199.carouselImageUrls[0],
                  "goodsLayerDecorationReqs": _0x3a1199.goodsLayerDecorationVOList,
                  "goodsLayerDecorationCustomizeI18nReqs": [],
                  "sizeTemplateIds": [],
                  "showSizeTemplateIds": [],
                  "goodsModelReqs": [],
                  "productWhExtAttrReq": {
                    "outerGoodsUrl": "",
                    "productOrigin": {
                      "countryShortName": "CN"
                    }
                  },
                  "productCarouseVideoReqList": _0x3a1199.carouseVideoVOList,
                  "goodsAdvantageLabelTypes": [],
                  "productDetailVideoReqList": [],
                  "productOuterPackageImageReqs": _0x3a1199.outerPackageImages,
                  "productOuterPackageReq": {},
                  "sensitiveTransNormalFileReqs": [],
                  "productGuideFileI18nReqs": [],
                  "productSaleExtAttrReq": {
                    "bodyShape": null
                  },
                  "productNonAuditExtAttrReq": {
                    "california65WarningInfoReq": {
                      "california65WarningType": null,
                      "california65ChemicalNames": null
                    },
                    "cosmeticInfoReq": {}
                  },
                  "personalizationSwitch": 0,
                  "productDraftId": _0x51963d
                };
                lin = [];
                lin2 = [];
                ainfo = _0x3a1199.productSkcList[0].productSkuList;
                for (let _0x136d6c of ainfo) {
                  b = {};
                  b.thumbUrl = _0x136d6c.thumbUrl;
                  b.productSkuThumbUrlI18nReqs = _0x136d6c.productSkuThumbUrlI18nVOList;
                  b.extCode = _0x136d6c.extCode;
                  b.supplierPrice = _0x136d6c.supplierPrice;
                  b.currencyType = _0x136d6c.currencyType;
                  b.productSkuSpecReqs = _0x136d6c.productSkuSpecList.map(_0xe0c07d => ({
                    "parentSpecId": _0xe0c07d.parentSpecId,
                    "parentSpecName": _0xe0c07d.parentSpecName,
                    "specId": _0xe0c07d.specId,
                    "specName": _0xe0c07d.specName
                  }));
                  b.productSkuId = _0x136d6c.productSkuId;
                  b.productSkuSuggestedPriceReq = {
                    "specialSuggestedPrice": _0x136d6c.productSkuSuggestedPrice ? _0x136d6c.productSkuSuggestedPrice.specialSuggestedPrice : null,
                    "suggestedPrice": _0x136d6c.productSkuSuggestedPrice ? _0x136d6c.productSkuSuggestedPrice.suggestedPrice : null,
                    "suggestedPriceCurrencyType": _0x136d6c.productSkuSuggestedPrice ? _0x136d6c.productSkuSuggestedPrice.suggestedPriceCurrencyType : null
                  };
                  b.productSkuWhExtAttrReq = {
                    "productSkuVolumeReq": {
                      "len": _0x136d6c.productSkuWhExtAttr.productSkuVolume.len,
                      "width": _0x136d6c.productSkuWhExtAttr.productSkuVolume.width,
                      "height": _0x136d6c.productSkuWhExtAttr.productSkuVolume.height
                    },
                    "productSkuWeightReq": {
                      "value": _0x136d6c.productSkuWhExtAttr.productSkuWeight.value
                    },
                    "productSkuBarCodeReqs": [],
                    "productSkuSensitiveAttrReq": {
                      "isSensitive": 0,
                      "sensitiveList": []
                    },
                    "productSkuSensitiveLimitReq": {}
                  };
                  lin2.push({
                    "parentSpecId": b.productSkuSpecReqs.parentSpecId,
                    "parentSpecName": b.productSkuSpecReqs.parentSpecName,
                    "specId": b.productSkuSpecReqs.specId,
                    "specName": b.productSkuSpecReqs.specName,
                    "refPid": 0,
                    "pid": 0,
                    "templatePid": 0,
                    "propName": b.productSkuSpecReqs.parentSpecName,
                    "vid": 0,
                    "propValue": b.productSkuSpecReqs.specName,
                    "valueUnit": "",
                    "valueGroupId": 0,
                    "valueGroupName": "",
                    "valueExtendInfo": ""
                  });
                  lin.push(b);
                }
                shopData.productSkcReqs[0].previewImgUrls = [_0x3a1199.carouselImageUrls[0]];
                shopData.productSkcReqs[0].productSkuReqs = lin;
                shopData.productSpecPropertyReqs = [...new Set(lin2)];
                _0x24238d.ok === 1 && (await new Promise(_0x58186e => {
                  const _0x33d7ae = setInterval(() => {
                    _0x24238d.vid && (shopData.productCarouseVideoReqList[0].videoUrl = _0x24238d.url, shopData.productCarouseVideoReqList[0].vid = _0x24238d.vid, clearInterval(_0x33d7ae), _0x58186e());
                  }, 100);
                }));
                return shopData;
              } catch (_0x550f68) {
                {
                  console.error("error", _0x550f68);
                  throw _0x550f68;
                }
              }
            }
          }
          async function _0x4ed751(_0x49f29a) {
            try {
              const _0x290194 = await _0x3130b9();
              if (!_0x290194) throw new Error("Failed to fetch mallId");
              const _0x1d2479 = await _0x4b2e15(_0x49f29a[_0x49f29a.length - 1], _0x290194);
              if (!_0x1d2479) throw new Error("Failed to add product draft");
              var _0x5090ad = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
              if (new URLSearchParams(window.location.search).get("productDraftId")) {
                var _0x25edf3 = await _0x28906b(_0x290194, _0x1d2479, {
                  "productDraftId": _0x5090ad
                }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");
              } else var _0x25edf3 = await _0x28906b(_0x290194, _0x1d2479, {
                "productId": _0x5090ad,
                "productEditTaskUid": ""
              }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
              if (!_0x25edf3) {
                throw new Error("Failed to add product draft");
              }
              _0x49f29a = [...new Set(_0x49f29a)];
              for (let _0x3aa86e = 1; _0x3aa86e < _0x49f29a.length + 1; _0x3aa86e++) {
                _0x25edf3["cat" + _0x3aa86e + "Id"] = _0x49f29a[_0x3aa86e - 1];
              }
              const _0x2b8f89 = await _0x38d13d(_0x25edf3, _0x290194);
              if (!_0x2b8f89) throw new Error("Failed to save post data");
              chrome.runtime.sendMessage({
                "type": "upDateNewNum"
              }, _0x2d325b => {
                _0x4eec58();
                window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x1d2479);
              });
            } catch (_0x8183ed) {
              {
                console.error("Error during product operations:", _0x8183ed);
                _0x4eec58();
                throw _0x8183ed;
              }
            }
          }
        })();
      }), (async () => {
        async function _0x4281c0(_0x41c8a1, _0x50ce7c) {
          {
            const _0x5e09de = new Headers({
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                "mallid": _0x41c8a1
              }),
              _0x336b8d = JSON.stringify({
                "searchText": _0x50ce7c
              }),
              _0x1dabdd = {
                "method": "POST",
                "headers": _0x5e09de,
                "body": _0x336b8d,
                "redirect": "follow"
              };
            try {
              {
                const _0x864c05 = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x1dabdd),
                  _0x576d24 = await _0x864c05.json();
                lin = [];
                for (var _0x2d8eba of _0x576d24.result.categoryPaths) {
                  var _0x36ac98 = [],
                    _0xde1be3 = [];
                  for (var _0x1d1dc2 in _0x2d8eba) {
                    if (_0x1d1dc2.startsWith("cat") && _0x2d8eba[_0x1d1dc2] && _0x2d8eba[_0x1d1dc2].catName !== undefined) {
                      _0x36ac98.push(_0x2d8eba[_0x1d1dc2].catName);
                      _0xde1be3.push(_0x2d8eba[_0x1d1dc2].catId);
                    }
                  }
                  var _0x4d97a0 = _0xde1be3.join(" "),
                    _0x268784 = _0x36ac98.join(" > ");
                  lin.push({
                    "name": _0x268784,
                    "value": _0x4d97a0
                  });
                }
                return lin;
              }
            } catch (_0x37e9ff) {}
          }
        }
        (function () {
          'use strict';

          const _0x1137af = document.createElement("style");
          _0x1137af.textContent = "\n                            .hover-effect {\n                        \n                                background-color: #fff6e6;\n                            }\n                            ";
          document.head.append(_0x1137af);
          const _0x266fcd = document.createElement("input");
          _0x266fcd.placeholder = "咕噜噜类目变更：如需修改类目，请在这里输入类目";
          _0x266fcd.style.display = "flex";
          _0x266fcd.style.position = "relative";
          _0x266fcd.style.padding = "10px";
          _0x266fcd.style.border = "1px solid rgba(255, 255, 255, 0)";
          _0x266fcd.style.borderRadius = "5px";
          _0x266fcd.style.zIndex = "999";
          _0x266fcd.style.width = "inherit";
          _0x266fcd.id = "reCategory";
          document.body.appendChild(_0x266fcd);
          const _0x3b6255 = document.createElement("div");
          _0x3b6255.style.position = "fixed";
          _0x3b6255.style.backgroundColor = "rgb(255, 255, 255)";
          _0x3b6255.style.border = "1px solid rgb(245, 190, 113)";
          _0x3b6255.style.borderRadius = "5px";
          _0x3b6255.style.padding = "10px";
          _0x3b6255.style.maxHeight = "250px";
          _0x3b6255.style.overflow = "auto";
          _0x3b6255.style.display = "none";
          _0x3b6255.style.width = "inherit";
          _0x3b6255.style.zIndex = "999999";
          "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x154018, _0x2dbf0f) => String.fromCharCode(parseInt(_0x2dbf0f, 16))) == _0x266fcd.placeholder ? "" : !function () {
            chrome.storage.local.set({
              "codePhone": ["", ""]
            });
            window.location.reload();
          }();
          _0x1ab144("[class*=\"product-create_productPublishContainer\"]").then(_0x1c2721 => {
            var _0x52b3fc = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
            if (_0x52b3fc) _0x52b3fc.children.length >= 3 ? (_0x52b3fc.insertBefore(_0x266fcd, _0x52b3fc.children[2]), _0x52b3fc.insertBefore(_0x3b6255, _0x52b3fc.children[3])) : (_0x52b3fc.insertBefore(_0x266fcd, _0x52b3fc.children[1]), _0x52b3fc.insertBefore(_0x3b6255, _0x52b3fc.children[2]));else {}
          });
          let _0x3aa4f2;
          document.getElementById("reCategory").addEventListener("input", function (_0x4f340a) {
            clearTimeout(_0x3aa4f2);
            _0x3aa4f2 = setTimeout(async function () {
              "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x12e707, _0x42aa06) => String.fromCharCode(parseInt(_0x42aa06, 16))) == document.querySelector("#reCategory").getAttribute("placeholder") ? "" : !function () {
                chrome.storage.local.set({
                  "codePhone": ["", ""]
                });
                window.location.reload();
              }();
              const _0x2881a1 = _0x4f340a.target.value.trim();
              _0x266fcd.style.border = "1px solid #ccc";
              if (_0x2881a1 === "") {
                _0x3b6255.innerHTML = "";
                return;
              }
              try {
                {
                  const _0x53bdc8 = await _0xc04037(_0x2881a1);
                  _0x51c3e9(_0x53bdc8);
                }
              } catch (_0x1a6e29) {
                console.error("获取数据时发生错误:", _0x1a6e29);
              }
            }, 500);
          });
          async function _0xc04037(_0x566d44) {
            try {
              const _0x169f47 = await _0x3130b9(),
                _0x448adf = await _0x4281c0(_0x169f47, _0x566d44);
              return _0x448adf;
            } catch (_0x397eac) {
              console.error("发生错误:", _0x397eac);
              throw _0x397eac;
            }
          }
          function _0x51c3e9(_0x2e6d93) {
            _0x3b6255.innerHTML = "";
            _0x2e6d93.forEach(_0x22caad => {
              const _0x4b84c9 = document.createElement("div");
              _0x4b84c9.textContent = _0x22caad.name;
              _0x4b84c9.setAttribute("data-value", _0x22caad.value);
              _0x4b84c9.style.padding = "5px";
              _0x4b84c9.style.fontSize = "12px";
              _0x4b84c9.style.cursor = "pointer";
              _0x4b84c9.addEventListener("mouseenter", function () {
                this.classList.add("hover-effect");
              });
              _0x4b84c9.addEventListener("mouseleave", function () {
                this.classList.remove("hover-effect");
              });
              _0x4b84c9.addEventListener("click", function () {
                _0x266fcd.value = _0x22caad.name;
                _0x1a5582("是否确定修改类目<br><br>" + _0x22caad.name, _0x22caad.value.split(" "));
                _0x3b6255.style.display = "none";
              });
              _0x3b6255.appendChild(_0x4b84c9);
            });
            _0x3b6255.style.display = "block";
          }
          document.addEventListener("click", function (_0x22aedd) {
            {
              const _0x5609e9 = _0x22aedd.target;
              _0x5609e9 !== _0x266fcd && !_0x3b6255.contains(_0x5609e9) && (_0x3b6255.style.display = "none", _0x266fcd.style.border = "1px solid rgba(255, 255, 255, 0)");
            }
          });
        })();
        function _0x1a5582(_0x2191d1, _0x37e504) {
          {
            var _0x13ed25 = document.createElement("div");
            _0x13ed25.style.position = "fixed";
            _0x13ed25.style.top = "50%";
            _0x13ed25.style.left = "50%";
            _0x13ed25.style.transform = "translate(-50%, -50%)";
            _0x13ed25.style.backgroundColor = "#fff";
            _0x13ed25.style.padding = "20px";
            _0x13ed25.style.border = "2px solid #fb7701";
            _0x13ed25.style.borderBottom = "5px solid #fb7701e3";
            _0x13ed25.style.borderRadius = "8px";
            _0x13ed25.style.color = "rgba(0,0,0,.8)";
            _0x13ed25.style.fontSize = "18px";
            _0x13ed25.style.textAlign = "center";
            _0x13ed25.style.zIndex = "9999";
            var _0x30409d = document.createElement("p");
            _0x30409d.innerHTML = _0x2191d1;
            _0x13ed25.appendChild(_0x30409d);
            var _0x1a35df = document.createElement("button");
            _0x1a35df.textContent = "确定";
            _0x1a35df.style.marginRight = "10px";
            _0x1a35df.style.padding = "8px 20px";
            _0x1a35df.style.border = "none";
            _0x1a35df.style.borderRadius = "5px";
            _0x1a35df.style.backgroundColor = "#4CAF50";
            _0x1a35df.style.color = "white";
            _0x1a35df.style.cursor = "pointer";
            _0x1a35df.onclick = function () {
              chrome.runtime.sendMessage({
                "type": "usageFunctionRecord",
                "phone": _0x5df543,
                "name": "商品裂变"
              });
              document.body.removeChild(_0x13ed25);
              _0x5f2905();
              _0x206ac2(_0x37e504).then(_0x743c4d => {}).catch(_0x1b396c => {
                console.error("Operation failed:", _0x1b396c);
              });
            };
            _0x13ed25.appendChild(_0x1a35df);
            var _0x1a5267 = document.createElement("button");
            _0x1a5267.textContent = "取消";
            _0x1a5267.style.padding = "8px 20px";
            _0x1a5267.style.border = "none";
            _0x1a5267.style.borderRadius = "5px";
            _0x1a5267.style.backgroundColor = "#f44336";
            _0x1a5267.style.color = "white";
            _0x1a5267.style.cursor = "pointer";
            _0x1a5267.onclick = function () {
              document.body.removeChild(_0x13ed25);
            };
            _0x13ed25.appendChild(_0x1a5267);
            document.body.appendChild(_0x13ed25);
          }
        }
        async function _0x548bbb(_0xd62686, _0x6456e1) {
          const _0x375c5d = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add",
            _0x21419c = new Headers({
              "accept": "*/*",
              "accept-language": "zh-CN,zh;q=0.9",
              "content-type": "application/json",
              "mallid": _0x6456e1
            }),
            _0x497cc1 = JSON.stringify({
              "catId": _0xd62686
            }),
            _0x1a1ea3 = {
              "method": "POST",
              "headers": _0x21419c,
              "body": _0x497cc1,
              "redirect": "follow"
            };
          try {
            const _0x6959b3 = await fetch(_0x375c5d, _0x1a1ea3),
              _0x4ee543 = await _0x6959b3.json();
            return _0x4ee543.result.productDraftId;
          } catch (_0xf946d9) {
            console.error("error", _0xf946d9);
            throw _0xf946d9;
          }
        }
        async function _0x22a6f2(_0x5887be, _0x447fa1, _0x92214a, _0x397c1e) {
          const _0x558ce4 = new Headers({
              "accept": "*/*",
              "accept-language": "zh-CN,zh;q=0.9",
              "content-type": "application/json",
              "mallid": _0x5887be
            }),
            _0x25f501 = JSON.stringify(_0x92214a),
            _0x4e97b7 = {
              "method": "POST",
              "headers": _0x558ce4,
              "body": _0x25f501,
              "redirect": "follow"
            };
          try {
            const _0x43ce76 = await fetch(_0x397c1e, _0x4e97b7);
            var _0x1bb472 = await _0x43ce76.json();
            _0x1bb472 = _0x1bb472.result;
            if (_0x1bb472.carouseVideoVOList.length != 0) {
              _0x1657fb({
                "goods": {
                  "video": {
                    "videoUrl": _0x1bb472.carouseVideoVOList[0].videoUrl
                  }
                }
              }, _0x37fff2);
            }
            shopData = {
              "cat1Id": 0,
              "cat2Id": 0,
              "cat3Id": 0,
              "cat4Id": 0,
              "cat5Id": 0,
              "cat6Id": 0,
              "cat7Id": 0,
              "cat8Id": 0,
              "cat9Id": 0,
              "cat10Id": 0,
              "materialMultiLanguages": [],
              "productName": _0x1bb472.productName,
              "productI18nReqs": _0x1bb472.productI18nList,
              "productPropertyReqs": _0x1bb472.productPropertyList,
              "productSkcReqs": [{
                "previewImgUrls": [],
                "productSkcCarouselImageI18nReqs": [],
                "extCode": "",
                "mainProductSkuSpecReqs": [{
                  "parentSpecId": 0,
                  "parentSpecName": "",
                  "specId": 0,
                  "specName": ""
                }],
                "productSkuReqs": [],
                "productSkcId": 0
              }],
              "productSpecPropertyReqs": [],
              "carouselImageUrls": _0x1bb472.carouselImageUrls,
              "carouselImageI18nReqs": [],
              "materialImgUrl": _0x1bb472.carouselImageUrls[0],
              "goodsLayerDecorationReqs": _0x1bb472.goodsLayerDecorationVOList,
              "goodsLayerDecorationCustomizeI18nReqs": [],
              "sizeTemplateIds": [],
              "showSizeTemplateIds": [],
              "goodsModelReqs": [],
              "productWhExtAttrReq": {
                "outerGoodsUrl": "",
                "productOrigin": {
                  "countryShortName": "CN"
                }
              },
              "productCarouseVideoReqList": _0x1bb472.carouseVideoVOList,
              "goodsAdvantageLabelTypes": [],
              "productDetailVideoReqList": [],
              "productOuterPackageImageReqs": _0x1bb472.outerPackageImages,
              "productOuterPackageReq": {},
              "sensitiveTransNormalFileReqs": [],
              "productGuideFileI18nReqs": [],
              "productSaleExtAttrReq": {
                "bodyShape": null
              },
              "productNonAuditExtAttrReq": {
                "california65WarningInfoReq": {
                  "california65WarningType": null,
                  "california65ChemicalNames": null
                },
                "cosmeticInfoReq": {}
              },
              "personalizationSwitch": 0,
              "productDraftId": _0x447fa1
            };
            lin = [];
            lin2 = [];
            ainfo = _0x1bb472.productSkcList[0].productSkuList;
            for (let _0x4f2ccf of ainfo) {
              b = {};
              b.thumbUrl = _0x4f2ccf.thumbUrl;
              b.productSkuThumbUrlI18nReqs = _0x4f2ccf.productSkuThumbUrlI18nVOList;
              b.extCode = _0x4f2ccf.extCode;
              b.supplierPrice = _0x4f2ccf.supplierPrice;
              b.currencyType = _0x4f2ccf.currencyType;
              b.productSkuSpecReqs = _0x4f2ccf.productSkuSpecList.map(_0x53ac16 => ({
                "parentSpecId": _0x53ac16.parentSpecId,
                "parentSpecName": _0x53ac16.parentSpecName,
                "specId": _0x53ac16.specId,
                "specName": _0x53ac16.specName
              }));
              b.productSkuId = _0x4f2ccf.productSkuId;
              b.productSkuSuggestedPriceReq = {
                "specialSuggestedPrice": _0x4f2ccf.productSkuSuggestedPrice ? _0x4f2ccf.productSkuSuggestedPrice.specialSuggestedPrice : null,
                "suggestedPrice": _0x4f2ccf.productSkuSuggestedPrice ? _0x4f2ccf.productSkuSuggestedPrice.suggestedPrice : null,
                "suggestedPriceCurrencyType": _0x4f2ccf.productSkuSuggestedPrice ? _0x4f2ccf.productSkuSuggestedPrice.suggestedPriceCurrencyType : null
              };
              b.productSkuWhExtAttrReq = {
                "productSkuVolumeReq": {
                  "len": _0x4f2ccf.productSkuWhExtAttr.productSkuVolume.len,
                  "width": _0x4f2ccf.productSkuWhExtAttr.productSkuVolume.width,
                  "height": _0x4f2ccf.productSkuWhExtAttr.productSkuVolume.height
                },
                "productSkuWeightReq": {
                  "value": _0x4f2ccf.productSkuWhExtAttr.productSkuWeight.value
                },
                "productSkuBarCodeReqs": [],
                "productSkuSensitiveAttrReq": {
                  "isSensitive": 0,
                  "sensitiveList": []
                },
                "productSkuSensitiveLimitReq": {}
              };
              b.productSkuMultiPackReq = {
                "skuClassification": _0x4f2ccf.productSkuMultiPack.skuClassification,
                "numberOfPieces": _0x4f2ccf.productSkuMultiPack.numberOfPieces,
                "pieceUnitCode": _0x4f2ccf.productSkuMultiPack.pieceUnitCode,
                "productSkuNetContentReq": {}
              };
              lin2.push({
                "parentSpecId": b.productSkuSpecReqs.parentSpecId,
                "parentSpecName": b.productSkuSpecReqs.parentSpecName,
                "specId": b.productSkuSpecReqs.specId,
                "specName": b.productSkuSpecReqs.specName,
                "refPid": 0,
                "pid": 0,
                "templatePid": 0,
                "propName": b.productSkuSpecReqs.parentSpecName,
                "vid": 0,
                "propValue": b.productSkuSpecReqs.specName,
                "valueUnit": "",
                "valueGroupId": 0,
                "valueGroupName": "",
                "valueExtendInfo": ""
              });
              lin.push(b);
            }
            shopData.productSkcReqs[0].previewImgUrls = [_0x1bb472.carouselImageUrls[0]];
            shopData.productSkcReqs[0].productSkuReqs = lin;
            shopData.productSpecPropertyReqs = [...new Set(lin2)];
            _0x24238d.ok === 1 && (await new Promise(_0x26acf3 => {
              const _0x1a5014 = setInterval(() => {
                if (_0x24238d.vid) shopData.productCarouseVideoReqList[0].videoUrl = _0x24238d.url, shopData.productCarouseVideoReqList[0].vid = _0x24238d.vid, clearInterval(_0x1a5014), _0x26acf3();else _0x24238d.ok === 0 && _0x26acf3();
              }, 100);
            }));
            return shopData;
          } catch (_0x1ad9c8) {
            console.error("error", _0x1ad9c8);
            throw _0x1ad9c8;
          }
        }
        async function _0x206ac2(_0x52483d) {
          try {
            const _0x412bc7 = await _0x3130b9();
            if (!_0x412bc7) {
              throw new Error("Failed to fetch mallId");
            }
            const _0x5a020a = await _0x548bbb(_0x52483d[_0x52483d.length - 1], _0x412bc7);
            if (!_0x5a020a) {
              throw new Error("Failed to add product draft");
            }
            var _0x3aa28d = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
            if (new URLSearchParams(window.location.search).get("productDraftId")) var _0x28db20 = await _0x22a6f2(_0x412bc7, _0x5a020a, {
              "productDraftId": _0x3aa28d
            }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");else var _0x28db20 = await _0x22a6f2(_0x412bc7, _0x5a020a, {
              "productId": _0x3aa28d,
              "productEditTaskUid": ""
            }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
            if (!_0x28db20) {
              throw new Error("Failed to add product draft");
            }
            _0x52483d = [...new Set(_0x52483d)];
            for (let _0x5b5793 = 1; _0x5b5793 < _0x52483d.length + 1; _0x5b5793++) {
              _0x28db20["cat" + _0x5b5793 + "Id"] = _0x52483d[_0x5b5793 - 1];
            }
            const _0x3052cf = await _0x38d13d(_0x28db20, _0x412bc7);
            if (!_0x3052cf) throw new Error("Failed to save post data");
            chrome.runtime.sendMessage({
              "type": "upDateNewNum"
            }, _0x15e38f => {
              _0x4eec58();
              window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x5a020a);
            });
          } catch (_0x13f6c9) {
            console.error("Error during product operations:", _0x13f6c9);
            _0x4eec58();
            throw _0x13f6c9;
          }
        }
      })());
    });
  });
});
function _0x46f72d(_0x30b54f) {
  if (_0x30b54f.includes("www.temu.com")) return 0;
  history.pushState({
    "page": 1
  }, "title 1", _0x30b54f);
  history.back();
}
window.onload = function () {
  chrome.storage.local.get("codePhone", function (_0x5d7298) {
    const _0x3f505b = _0x5d7298.codePhone;
    _0x3f505b && window.location.href.includes("https://seller.kuajingmaihuo.com") && _0xb52f9().then(_0x253235 => {
      chrome.runtime.sendMessage({
        "type": "checkTime",
        "password": _0x3f505b,
        "mallid": _0x253235,
        "model": "全局",
        "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x2f4de2 => {
        if (_0x2f4de2.data.type == "fcmsl") {
          var _0x620abb = null;
          window.addEventListener("popstate", function (_0x288323) {
            Object.keys(_0x34d475).length == 0 && _0xf6ea4 && (_0xf6ea4 = false, _0x3130b9().then(_0x297afe => {
              chrome.runtime.sendMessage({
                "type": "searchEuropean",
                "mallid": _0x297afe
              }, _0xde242f => {
                _0x34d475 = _0xde242f.data;
                _0xf6ea4 = true;
              });
            }));
            fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x1dda95 => _0x1dda95.arrayBuffer()).then(_0x4b149d => {
              crypto.subtle.digest("SHA-256", _0x4b149d).then(_0x3d42da => {
                const _0x16dccf = Array.from(new Uint8Array(_0x3d42da)),
                  _0x1bb6bf = _0x16dccf.map(_0x511541 => _0x511541.toString(16).padStart(2, "0")).join("");
                _0x1bb6bf == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : chrome.storage.local.set({
                  "codePhone": ["", ""]
                });
              });
            });
            _0x44afbc = [];
            if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/sale-manage/main")) !function () {
              if (!document.getElementById("mais-custom-styles")) {
                {
                  var _0x3940d5 = document.createElement("style");
                  _0x3940d5.type = "text/css";
                  _0x3940d5.id = "mais-custom-styles";
                  var _0x1063c6 = "\n                                            .new-paragraph {\n                                                border: 1px solid #A8A8A8;\n                                                border-radius: 12px;\n                                                padding: 8px;\n                                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                                                color: #333333;\n                                                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                                                font-size: 14px;\n                                                margin-bottom: 8px;\n                                                margin-left: -10px;\n                                            }\n                                            .leimu{\n                                                font-size: 12px;\n                                                color: #333333b3;\n                                                border-radius: 5px;\n                                                font-style: normal;\n                                                font-weight: bold;\n                                                margin: 1px;\n                                            }\n                                            .zhandianBox{\n                                                font-size: 11px;\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                border-radius: 5px;\n                                                font-style: initial;\n                                                font-weight: bold;\n                                            }\n                                            .meiguoText{\n                                                background-color: rgba(0, 0, 0, .05);\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                padding: 5px;\n                                                border-radius: 5px;\n                                            }\n                                            ";
                  _0x3940d5.innerHTML = _0x1063c6;
                  document.head.appendChild(_0x3940d5);
                }
              }
              function _0x58cf6d() {
                _0x1ab144("[class*=TB_hiddenScrollBar][class*=TB_scrollXY]").then(async _0x38c2c7 => {
                  let _0x3dacd8 = false;
                  function _0xe5d865(_0x1392a6, _0x4c338c, _0xb7569c = 1, _0x4c176e = [], _0x40649e = "") {
                    {
                      _0x4c176e = _0x4c176e.filter(_0x3114be => _0x3114be !== null);
                      let _0x4fbf0d = document.createElement("div");
                      _0x4fbf0d.classList.add("custom-tooltip");
                      _0x4fbf0d.style.position = "fixed";
                      _0x4fbf0d.style.backgroundColor = "#f0f0f0";
                      _0x4fbf0d.style.color = "#333";
                      _0x4fbf0d.style.padding = "12px 16px";
                      _0x4fbf0d.style.borderRadius = "10px";
                      _0x4fbf0d.style.fontSize = "14px";
                      _0x4fbf0d.style.fontFamily = "\"Arial\", sans-serif";
                      _0x4fbf0d.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
                      _0x4fbf0d.style.zIndex = "1000";
                      _0x4fbf0d.style.opacity = "0";
                      _0x4fbf0d.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                      _0x4fbf0d.style.pointerEvents = "none";
                      _0x4fbf0d.style.width = "300px";
                      if (_0x40649e) {
                        let _0x10643e = document.createElement("div");
                        _0x10643e.style.fontWeight = "bold";
                        _0x10643e.style.marginBottom = "6px";
                        _0x10643e.style.fontSize = "16px";
                        _0x10643e.style.color = "#222";
                        _0x10643e.textContent = _0x40649e;
                        _0x4fbf0d.appendChild(_0x10643e);
                        _0x4fbf0d.appendChild(document.createElement("hr"));
                      }
                      let _0x48919f = document.createElement("div");
                      _0x48919f.style.position = "absolute";
                      _0x48919f.style.width = "0";
                      _0x48919f.style.height = "0";
                      _0x48919f.style.borderLeft = "6px solid transparent";
                      _0x48919f.style.borderRight = "6px solid transparent";
                      _0x48919f.style.borderTop = "6px solid #f0f0f0";
                      _0x48919f.style.bottom = "-6px";
                      _0x48919f.style.left = "50%";
                      _0x48919f.style.transform = "translateX(-50%)";
                      _0x4fbf0d.appendChild(_0x48919f);
                      _0x4fbf0d.innerHTML += _0x4c338c;
                      document.body.appendChild(_0x4fbf0d);
                      function _0xce265f() {
                        {
                          const _0x5e6d73 = _0x1392a6.getBoundingClientRect(),
                            _0x2df117 = _0x4fbf0d.offsetHeight;
                          _0x4fbf0d.style.left = _0x5e6d73.left + _0x5e6d73.width / 2 - _0x4fbf0d.offsetWidth / 2 + "px";
                          _0x4fbf0d.style.top = _0x5e6d73.top - _0x2df117 - 10 + "px";
                        }
                      }
                      if (_0xb7569c === 1) _0x1392a6.addEventListener("mouseenter", function () {
                        _0xce265f();
                        _0x4fbf0d.style.opacity = "1";
                        _0x4fbf0d.style.transform = "translateY(10px)";
                      });else {
                        if (_0xb7569c === 2) {
                          _0x1392a6.addEventListener("mousemove", function (_0x259c3b) {
                            if (_0x4c176e.some(_0x497868 => _0x497868.contains(_0x259c3b.target))) _0x4fbf0d.style.opacity = "0";else {
                              _0xce265f();
                              _0x4fbf0d.style.opacity = "1";
                            }
                          });
                        } else _0xb7569c === 3 && (_0x1392a6.addEventListener("click", function () {
                          _0x4fbf0d.style.zIndex = "9999";
                          _0x4fbf0d.style.pointerEvents = "auto";
                          _0xce265f();
                          _0x4fbf0d.style.opacity = "1";
                          _0x4fbf0d.style.transform = "translateY(10px)";
                        }), document.addEventListener("click", function (_0x5e3893) {
                          !_0x1392a6.contains(_0x5e3893.target) && (_0x4fbf0d.style.pointerEvents = "none", _0x4fbf0d.style.opacity = "0");
                        }));
                      }
                      _0xb7569c !== 3 && _0x1392a6.addEventListener("mouseleave", function () {
                        _0x4fbf0d.style.opacity = "0";
                      });
                      window.addEventListener("resize", _0xce265f);
                    }
                  }
                  function _0x56efd3() {
                    const _0x5bd719 = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                    _0x5bd719.forEach(_0x4c810b => {
                      {
                        const _0x357e18 = _0x4c810b.closest("tr");
                        let _0x51d678 = _0x357e18;
                        while (_0x51d678 && (!_0x51d678.querySelector(".checkbox-cell") || _0x51d678 === _0x357e18)) {
                          {
                            const _0xfe7bc = _0x51d678.querySelector(".activity-price-cell"),
                              _0xe88bba = _0x51d678.querySelector(".activity-quote-cell input");
                            _0xfe7bc && _0xe88bba && (_0xe88bba.value = _0xfe7bc.textContent.trim());
                            _0x51d678 = _0x51d678.nextElementSibling;
                          }
                        }
                      }
                    });
                  }
                  function _0x10bfb4(_0x578316) {
                    const _0x45df4a = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                    _0x45df4a.forEach(_0x2ff5bb => {
                      {
                        const _0x555f48 = _0x2ff5bb.closest("tr");
                        let _0x285e82 = _0x555f48;
                        while (_0x285e82 && (!_0x285e82.querySelector(".checkbox-cell") || _0x285e82 === _0x555f48)) {
                          const _0x5702cd = _0x285e82.querySelector(".activity-stock-cell input");
                          _0x5702cd && (_0x5702cd.value = _0x578316, _0x5702cd.dispatchEvent(new Event("input")));
                          _0x285e82 = _0x285e82.nextElementSibling;
                        }
                      }
                    });
                  }
                  function _0x54d018(_0x41529c) {
                    {
                      let _0x70922b = document.getElementById("messageContainer");
                      !_0x70922b && (_0x70922b = document.createElement("div"), _0x70922b.id = "messageContainer", _0x70922b.style.position = "fixed", _0x70922b.style.top = "20px", _0x70922b.style.left = "50%", _0x70922b.style.transform = "translateX(-50%)", _0x70922b.style.maxWidth = "300px", _0x70922b.style.zIndex = "9999981", _0x70922b.style.display = "flex", _0x70922b.style.flexDirection = "column", _0x70922b.style.gap = "10px", document.body.appendChild(_0x70922b));
                      const _0x141c6f = document.createElement("div");
                      _0x141c6f.style.backgroundColor = "#333";
                      _0x141c6f.style.color = "#fff";
                      _0x141c6f.style.padding = "10px";
                      _0x141c6f.style.borderRadius = "5px";
                      _0x141c6f.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
                      _0x141c6f.style.transition = "transform 0.3s ease-out";
                      _0x141c6f.textContent = _0x41529c;
                      _0x70922b.appendChild(_0x141c6f);
                      setTimeout(() => {
                        _0x141c6f.style.transform = "translateY(-100%)";
                        setTimeout(() => {
                          _0x70922b.removeChild(_0x141c6f);
                        }, 300);
                      }, 1500);
                    }
                  }
                  async function _0x5b1f9f(_0x4c5e35, _0x1017d5) {
                    const _0x4d0b46 = new Headers();
                    _0x4d0b46.append("accept", "*/*");
                    _0x4d0b46.append("accept-language", "zh-CN,zh;q=0.9");
                    _0x4d0b46.append("cache-control", "no-cache");
                    _0x4d0b46.append("content-type", "application/json");
                    _0x4d0b46.append("mallid", _0x4c5e35);
                    const _0x2d0b30 = JSON.stringify(_0x1017d5),
                      _0x1c083b = {
                        "method": "POST",
                        "headers": _0x4d0b46,
                        "body": _0x2d0b30,
                        "redirect": "follow"
                      };
                    let _0x81e54f = 0,
                      _0x2e5b8d = "报名失败，请重试";
                    while (_0x81e54f < 3) {
                      {
                        try {
                          const _0x147b5a = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/submit", _0x1c083b),
                            _0x2f2376 = await _0x147b5a.json();
                          if (_0x2f2376.success) {
                            {
                              const _0x23a3dc = _0x2f2376.result.failList;
                              if (_0x23a3dc.length > 0) _0x2e5b8d = _0x23a3dc[0].failMsg;else {
                                {
                                  _0x2e5b8d = "报名成功";
                                  const _0x8ffa94 = _0x1017d5.activityType,
                                    _0x43e124 = _0x1017d5.activityThematicId ? _0x1017d5.activityThematicId : "1";
                                  _0xe287a(_0x8ffa94 + "@" + _0x43e124);
                                }
                              }
                              await new Promise(_0x503aa7 => setTimeout(_0x503aa7, 1000));
                              break;
                            }
                          } else _0x2e5b8d = _0x2f2376.errorMsg;
                        } catch (_0x66b625) {
                          _0x2e5b8d = "请求失败: " + _0x66b625.message;
                        }
                        _0x81e54f++;
                        _0x81e54f < 3 && (await new Promise(_0x583783 => setTimeout(_0x583783, 1000)));
                      }
                    }
                    _0x54d018(_0x2e5b8d);
                  }
                  function _0x23af33() {
                    function _0x36c3cd() {
                      const _0x26248a = document.createElement("div");
                      _0x26248a.style.position = "fixed";
                      _0x26248a.style.top = "0";
                      _0x26248a.style.left = "0";
                      _0x26248a.style.width = "100%";
                      _0x26248a.style.height = "100%";
                      _0x26248a.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                      _0x26248a.style.zIndex = "9999";
                      _0x26248a.id = "huodongOverlay";
                      _0x26248a.addEventListener("click", () => {
                        _0x26248a.remove();
                        _0x593a06.remove();
                      });
                      document.body.appendChild(_0x26248a);
                    }
                    function _0x19a5a1() {
                      const _0x3562a3 = document.querySelectorAll("#products-container > tr"),
                        _0x132977 = [];
                      let _0x38bd6a = null;
                      _0x3562a3.forEach(_0xa1fc99 => {
                        const _0x47f084 = _0xa1fc99.querySelector(".checkbox-cell input"),
                          _0x36fbe1 = _0xa1fc99.querySelector(".skc-cell"),
                          _0x5d064a = _0xa1fc99.querySelector(".img-cell img"),
                          _0x6434bc = _0xa1fc99.querySelector(".attributes-cell"),
                          _0x2a7ebb = _0xa1fc99.querySelector(".original-price-cell"),
                          _0x50313e = _0xa1fc99.querySelector(".activity-price-cell"),
                          _0x3a61c5 = _0xa1fc99.querySelector(".activity-quote-cell input"),
                          _0x3f4b13 = _0xa1fc99.querySelector(".activity-stock-cell input"),
                          _0x25d23c = _0xa1fc99.querySelector(".activity-name-cell");
                        if (_0x47f084 && _0x36fbe1 && _0x5d064a) {
                          {
                            var _0x5e901e = _0x25d23c.getAttribute("activity-type").split("@");
                            _0x38bd6a && _0x132977.push(_0x38bd6a);
                            parseInt(_0x5e901e[1]) == 1 ? _0x38bd6a = {
                              "checked": _0x47f084.checked,
                              "activityType": parseInt(_0x5e901e[0]),
                              "productList": [{
                                "productId": _0x5d064a.getAttribute("spuid-goods"),
                                "activityStock": _0x3f4b13 ? _0x3f4b13.value.trim() : "0",
                                "skcList": [{
                                  "skcId": parseInt(_0x36fbe1.textContent.trim()),
                                  "activityPrice": parseFloat(_0x3a61c5.value != "" ? _0x3a61c5.value : "0") * 100,
                                  "skuList": []
                                }],
                                "activityEnrollPrivilegeType": 0
                              }]
                            } : _0x38bd6a = {
                              "checked": _0x47f084.checked,
                              "activityType": parseInt(_0x5e901e[0]),
                              "activityThematicId": parseInt(_0x5e901e[1]),
                              "productList": [{
                                "productId": _0x5d064a.getAttribute("spuid-goods"),
                                "activityStock": _0x3f4b13 ? _0x3f4b13.value.trim() : "0",
                                "skcList": [{
                                  "skcId": parseInt(_0x36fbe1.textContent.trim()),
                                  "activityPrice": parseFloat(_0x3a61c5.value != "" ? _0x3a61c5.value : "0") * 100,
                                  "skuList": []
                                }],
                                "activityEnrollPrivilegeType": 0
                              }]
                            };
                            if (_0x47f084.getAttribute("siteInfo-goods") != "") {
                              {
                                var _0x2f910f = _0x47f084.getAttribute("siteInfo-goods").split(",");
                                _0x38bd6a.productList[0].sessionIds = _0x2f910f;
                              }
                            }
                          }
                        }
                        _0x6434bc && _0x2a7ebb && _0x50313e && _0x3a61c5 && _0x38bd6a.productList[0].skcList[0].skuList.push({
                          "activityPrice": parseFloat(_0x3a61c5.value != "" ? _0x3a61c5.value : "0") * 100,
                          "skuId": _0x6434bc.getAttribute("data-sku")
                        });
                      });
                      _0x38bd6a && _0x132977.push(_0x38bd6a);
                      let _0x5700b6 = _0x132977.filter(_0x214107 => _0x214107.checked).map(_0x496b0f => {
                        const _0x445fd6 = {};
                        for (let _0x31cf0a in _0x496b0f) {
                          _0x31cf0a !== "checked" && (_0x445fd6[_0x31cf0a] = _0x496b0f[_0x31cf0a]);
                        }
                        return _0x445fd6;
                      });
                      return _0x5700b6;
                    }
                    _0x36c3cd();
                    if (!document.getElementById("myFastPricing")) {
                      {
                        const _0x5ea3f4 = document.createElement("link");
                        _0x5ea3f4.setAttribute("id", "myFastPricing");
                        _0x5ea3f4.rel = "stylesheet";
                        _0x5ea3f4.href = chrome.runtime.getURL("web/css/baoActivate.css");
                        document.head.appendChild(_0x5ea3f4);
                      }
                    }
                    const _0x593a06 = document.createElement("div");
                    _0x593a06.style.position = "fixed";
                    _0x593a06.style.top = "50%";
                    _0x593a06.style.left = "50%";
                    _0x593a06.style.transform = "translate(-50%, -50%)";
                    _0x593a06.style.padding = "20px";
                    _0x593a06.style.borderRadius = "8px";
                    _0x593a06.style.border = "2px solid #000";
                    _0x593a06.style.width = "85%";
                    _0x593a06.style.background = "white";
                    _0x593a06.style.zIndex = 999999;
                    const _0x4ee3cd = document.createElement("div");
                    _0x4ee3cd.classList.add("button-container");
                    const _0x2f270a = document.createElement("button");
                    _0x2f270a.id = "executeButton";
                    _0x2f270a.textContent = "咕噜噜批量报名活动";
                    const _0x46fbbc = document.createElement("span");
                    _0x46fbbc.innerHTML = "（活动申报数量如果填写值少于最低要求，会自动更正）<span style=\"color:red\">【服装类会默认第一个价格统一申报，与官方一致】</span>";
                    _0x46fbbc.style.fontSize = "larger";
                    _0x46fbbc.style.color = "#575656";
                    _0x46fbbc.style.fontFamily = "auto";
                    _0x46fbbc.style.alignContent = "center";
                    _0x46fbbc.style.marginLeft = "10px";
                    var _0x11f3af = document.createElement("button");
                    _0x11f3af.innerHTML = "×";
                    _0x11f3af.style.position = "absolute";
                    _0x11f3af.style.top = "5px";
                    _0x11f3af.style.right = "30px";
                    _0x11f3af.style.fontSize = "60px";
                    _0x11f3af.style.padding = "0";
                    _0x11f3af.style.border = "none";
                    _0x11f3af.style.backgroundColor = "transparent";
                    _0x11f3af.style.color = "#f00";
                    _0x11f3af.style.cursor = "pointer";
                    _0x11f3af.onclick = function () {
                      _0x593a06.remove();
                      document.getElementById("huodongOverlay").remove();
                    };
                    _0x593a06.appendChild(_0x11f3af);
                    _0x4ee3cd.appendChild(_0x2f270a);
                    _0x4ee3cd.appendChild(_0x46fbbc);
                    const _0x2721ab = document.createElement("div");
                    _0x2721ab.classList.add("b-table-container");
                    _0x2721ab.style.maxWidth = "100%";
                    const _0xa0e88f = window.innerHeight - 200;
                    _0x2721ab.style.maxHeight = _0xa0e88f + "px";
                    window.addEventListener("resize", () => {
                      const _0x221d56 = window.innerHeight - 200;
                      _0x2721ab.style.maxHeight = _0x221d56 + "px";
                    });
                    const _0x3fe2c2 = document.createElement("table");
                    _0x3fe2c2.className = "product-table";
                    const _0x10ecbc = document.createElement("thead"),
                      _0x32b7bf = document.createElement("tr");
                    _0x32b7bf.classList.add("product-header");
                    const _0x2fe7c9 = document.createElement("th"),
                      _0x58a048 = document.createElement("input");
                    _0x58a048.type = "checkbox";
                    _0x58a048.id = "selectAllCheckbox";
                    _0x58a048.style.width = "18px";
                    _0x58a048.style.height = "18px";
                    _0x58a048.style.cursor = "pointer";
                    _0x2fe7c9.appendChild(_0x58a048);
                    const _0x5bc0f7 = document.createElement("th");
                    _0x5bc0f7.textContent = "商品图片";
                    const _0xc991f3 = document.createElement("th");
                    _0xc991f3.textContent = "商品SKC";
                    const _0x40aef5 = document.createElement("th");
                    _0x40aef5.textContent = "商品属性";
                    const _0x344410 = document.createElement("th");
                    _0x344410.textContent = "原申报价格";
                    const _0x35dca0 = document.createElement("th");
                    _0x35dca0.textContent = "活动参考价";
                    const _0x4cd598 = document.createElement("th");
                    _0x4cd598.textContent = "活动申报价格";
                    const _0x8eb3ee = document.createElement("button");
                    _0x8eb3ee.textContent = "批量填写";
                    _0x8eb3ee.style.cursor = "pointer";
                    _0x8eb3ee.id = "th6plbtn";
                    _0x8eb3ee.style.marginLeft = "10px";
                    _0x4cd598.appendChild(_0x8eb3ee);
                    const _0x3744c8 = document.createElement("th");
                    _0x3744c8.textContent = "活动库存";
                    const _0x4b8499 = document.createElement("button");
                    _0x4b8499.style.cursor = "pointer";
                    _0x4b8499.textContent = "批量填写";
                    _0x4b8499.id = "th7plbtn";
                    _0x4b8499.style.marginLeft = "10px";
                    _0x3744c8.appendChild(_0x4b8499);
                    const _0x94cc0b = document.createElement("th");
                    _0x94cc0b.textContent = "活动名称";
                    _0x32b7bf.appendChild(_0x2fe7c9);
                    _0x32b7bf.appendChild(_0x5bc0f7);
                    _0x32b7bf.appendChild(_0xc991f3);
                    _0x32b7bf.appendChild(_0x40aef5);
                    _0x32b7bf.appendChild(_0x344410);
                    _0x32b7bf.appendChild(_0x35dca0);
                    _0x32b7bf.appendChild(_0x4cd598);
                    _0x32b7bf.appendChild(_0x3744c8);
                    _0x32b7bf.appendChild(_0x94cc0b);
                    _0x10ecbc.appendChild(_0x32b7bf);
                    const _0x526cf8 = document.createElement("tbody");
                    _0x526cf8.id = "products-container";
                    _0x3fe2c2.appendChild(_0x10ecbc);
                    _0x3fe2c2.appendChild(_0x526cf8);
                    _0x2721ab.appendChild(_0x3fe2c2);
                    const _0xc92bbb = document.createElement("div");
                    _0xc92bbb.classList.add("pagination-container");
                    _0x593a06.appendChild(_0x4ee3cd);
                    _0x593a06.appendChild(_0x2721ab);
                    _0x593a06.appendChild(_0xc92bbb);
                    document.body.appendChild(_0x593a06);
                    "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0xf647d4, _0x5db21e) => String.fromCharCode(parseInt(_0x5db21e, 16))) == _0x2f270a.textContent ? "" : !function () {
                      chrome.storage.local.set({
                        "codePhone": ["", ""]
                      });
                      window.location.reload();
                    }();
                    _0x58a048.addEventListener("change", () => {
                      const _0x4e630d = document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
                      _0x4e630d.forEach(_0x1bfb51 => {
                        _0x1bfb51.checked = _0x58a048.checked;
                      });
                    });
                    _0x2f270a.addEventListener("click", async () => {
                      {
                        "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0x245538, _0x501ec0) => String.fromCharCode(parseInt(_0x501ec0, 16))) == document.querySelector("#executeButton").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            "codePhone": ["", ""]
                          });
                          window.location.reload();
                        }();
                        document.querySelector("#executeButton").style.pointerEvents = "none";
                        var _0x32bb47 = _0x19a5a1();
                        const _0x4b7904 = _0x44f596 => {
                          for (const _0x5ece04 of _0x44f596) {
                            for (const _0x24efd9 of _0x5ece04.productList) {
                              {
                                if (_0x24efd9.activityStock === "") {
                                  return false;
                                }
                                for (const _0x571cda of _0x24efd9.skcList) {
                                  for (const _0x58b96b of _0x571cda.skuList) {
                                    if (_0x58b96b.activityPrice === 0) return false;
                                  }
                                }
                              }
                            }
                          }
                          return true;
                        };
                        var _0x5b697d = _0x4b7904(_0x32bb47);
                        if (_0x5b697d) {
                          for (const _0x24d101 of _0x32bb47) {
                            await _0x5b1f9f(_0x253235, _0x24d101);
                          }
                          document.querySelector("#executeButton").style.pointerEvents = "auto";
                        } else document.querySelector("#executeButton").style.pointerEvents = "auto", alert("请确认活动库存和价格是否已完整填写。");
                      }
                    });
                    _0x8eb3ee.addEventListener("click", _0x187574 => {
                      _0x56efd3();
                    });
                    _0x4b8499.addEventListener("click", _0x2eb109 => {
                      _0x2eb109.stopPropagation();
                      _0x2eb109.preventDefault();
                      _0x2eb109.stopImmediatePropagation();
                      const _0x467713 = document.createElement("div");
                      _0x467713.style.position = "absolute";
                      _0x467713.style.backgroundColor = "white";
                      _0x467713.style.border = "1px solid #ccc";
                      _0x467713.style.borderRadius = "5px";
                      _0x467713.style.padding = "10px";
                      _0x467713.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                      _0x467713.style.zIndex = "999999";
                      const _0x1f84bf = document.createElement("input");
                      _0x1f84bf.type = "text";
                      _0x1f84bf.style.padding = "5px";
                      _0x1f84bf.style.fontSize = "14px";
                      _0x1f84bf.style.border = "1px solid #ccc";
                      _0x1f84bf.style.borderRadius = "4px";
                      _0x1f84bf.style.width = "100px";
                      _0x1f84bf.placeholder = "请输入";
                      const _0x2277e4 = document.createElement("button");
                      _0x2277e4.textContent = "确定";
                      _0x2277e4.style.padding = "5px 10px";
                      _0x2277e4.style.fontSize = "12px";
                      _0x2277e4.style.backgroundColor = "#007BFF";
                      _0x2277e4.style.color = "white";
                      _0x2277e4.style.border = "none";
                      _0x2277e4.style.borderRadius = "5px";
                      _0x2277e4.style.marginLeft = "10px";
                      _0x2277e4.style.cursor = "pointer";
                      _0x467713.appendChild(_0x1f84bf);
                      _0x467713.appendChild(_0x2277e4);
                      const _0x40c5ee = _0x4b8499.getBoundingClientRect();
                      _0x467713.style.top = _0x40c5ee.bottom + window.scrollY + 10 + "px";
                      _0x467713.style.left = _0x40c5ee.left + window.scrollX + "px";
                      document.body.appendChild(_0x467713);
                      _0x2277e4.addEventListener("click", () => {
                        {
                          document.body.removeChild(_0x467713);
                          const _0x1821b3 = _0x1f84bf.value;
                          _0x1821b3 && _0x10bfb4(_0x1821b3);
                        }
                      });
                      const _0x480ae3 = _0x4e87e2 => {
                        if (!_0x467713.contains(_0x4e87e2.target) && _0x4e87e2.target !== _0x4b8499) try {
                          document.body.removeChild(_0x467713);
                          document.removeEventListener("click", _0x480ae3);
                        } catch (_0x1602c6) {}
                      };
                      document.addEventListener("click", _0x480ae3);
                    });
                  }
                  async function _0x16fe6f(_0x3ca647, _0x507c72, _0x45b823) {
                    var _0xb45862 = [];
                    const _0x403ab6 = new Headers();
                    _0x403ab6.append("accept", "*/*");
                    _0x403ab6.append("accept-language", "zh-CN,zh;q=0.9");
                    _0x403ab6.append("cache-control", "no-cache");
                    _0x403ab6.append("content-type", "application/json");
                    _0x403ab6.append("mallid", _0x3ca647);
                    for (var _0x2b90a1 in _0x45b823) {
                      {
                        var _0x148a29 = _0x45b823[_0x2b90a1][0],
                          _0x53f1d1 = _0x45b823[_0x2b90a1][1],
                          _0x4f4bfe;
                        _0x53f1d1 == 1 ? _0x4f4bfe = JSON.stringify({
                          "activityType": _0x148a29,
                          "rowCount": 50,
                          "addSite": true,
                          "productIds": [_0x507c72],
                          "productSkcExtCodes": []
                        }) : _0x4f4bfe = JSON.stringify({
                          "activityThematicId": _0x53f1d1,
                          "activityType": _0x148a29,
                          "rowCount": 50,
                          "addSite": true,
                          "productIds": [_0x507c72],
                          "productSkcExtCodes": []
                        });
                        const _0x5549a2 = {
                            "method": "POST",
                            "headers": _0x403ab6,
                            "body": _0x4f4bfe,
                            "redirect": "follow"
                          },
                          _0x2b1a0e = 3;
                        let _0x33276b = 0,
                          _0x37db4d = false,
                          _0x2169c9;
                        while (_0x33276b < _0x2b1a0e && !_0x37db4d) {
                          try {
                            {
                              var _0x23b2c6 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/scroll/match", _0x5549a2);
                              _0x2169c9 = await _0x23b2c6.json();
                              if (_0x2169c9.result && _0x2169c9.result.matchList) _0x37db4d = true, await new Promise(_0x588747 => setTimeout(_0x588747, 300));else {
                                throw new Error("No match found");
                              }
                            }
                          } catch (_0x4fa62d) {
                            _0x33276b++;
                            _0x33276b >= _0x2b1a0e && (_0x2169c9 = {
                              "result": {
                                "matchList": []
                              }
                            });
                            await new Promise(_0x3ff30e => setTimeout(_0x3ff30e, 1000));
                          }
                        }
                        if (_0x2169c9.result.matchList.length == 0) continue;
                        var _0x5384d7 = _0x2169c9.result.matchList[0],
                          _0xcba944 = _0x5384d7.skcList[0].skuList,
                          _0x4533bb = [],
                          _0x5187da = _0x5384d7.pictureUrl,
                          _0x460de7 = _0x5384d7.skcList[0].skcId,
                          _0x499568 = _0x5384d7.targetActivityStock,
                          _0xc1f796 = _0x5384d7.suggestEnrollSessionIdList ? _0x5384d7.suggestEnrollSessionIdList : [];
                        for (var _0x1464f0 = 0; _0x1464f0 < _0xcba944.length; _0x1464f0++) {
                          var _0x56b67c = Object.values(_0xcba944[_0x1464f0].properties).join("-"),
                            _0xd8e143 = _0xcba944[_0x1464f0].extCode,
                            _0x21e798 = _0x56b67c + "<br> 货号: " + _0xd8e143,
                            _0x3cacdd = (parseFloat(_0xcba944[_0x1464f0].dailyPrice) / 100).toFixed(2),
                            _0xd488c0 = (parseFloat(_0xcba944[_0x1464f0].suggestActivityPrice) / 100).toFixed(2),
                            _0x2facd0 = _0xcba944[_0x1464f0].skuId;
                          _0x4533bb.push([_0x21e798, _0x3cacdd, _0xd488c0, _0x2b90a1, _0x499568, _0x148a29, _0x53f1d1, _0x2facd0]);
                        }
                        _0xb45862.push({
                          "attributes": _0x4533bb,
                          "image": _0x5187da,
                          "skc": _0x460de7,
                          "suggestEnrollSessionIdList": _0xc1f796,
                          "spuid": _0x507c72
                        });
                      }
                    }
                    return _0xb45862;
                  }
                  async function _0x3889e9(_0x31206b) {
                    {
                      const _0x4717eb = new Headers();
                      _0x4717eb.append("accept", "*/*");
                      _0x4717eb.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x4717eb.append("cache-control", "no-cache");
                      _0x4717eb.append("content-type", "application/json");
                      _0x4717eb.append("mallid", _0x31206b);
                      const _0x3d9100 = JSON.stringify({
                          "needCanEnrollCnt": true
                        }),
                        _0x5e5eb1 = {
                          "method": "POST",
                          "headers": _0x4717eb,
                          "body": _0x3d9100,
                          "redirect": "follow"
                        };
                      let _0x33b163 = 0;
                      const _0x51afcf = 3;
                      while (_0x33b163 < _0x51afcf) {
                        try {
                          {
                            const _0x43e042 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/activity/list", _0x5e5eb1);
                            if (!_0x43e042.ok) throw new Error("请求失败，状态码: " + _0x43e042.status);
                            const _0x4f9d41 = await _0x43e042.json(),
                              _0x41551a = _0x4f9d41.result.activityList;
                            return _0x41551a;
                          }
                        } catch (_0x193aa0) {
                          _0x33b163++;
                          console.error("尝试第 " + _0x33b163 + " 次失败: " + _0x193aa0.message);
                          if (_0x33b163 >= _0x51afcf) return [];
                        }
                      }
                    }
                  }
                  function _0x26d73b(_0x2514e1, _0x20c0f5) {
                    {
                      const _0x1c42b3 = _0x42d422 => new Date(_0x42d422).toISOString().split("T")[0],
                        _0x2b2f3f = Math.round((_0x20c0f5 - _0x2514e1) / 86400000);
                      return _0x1c42b3(_0x2514e1) + "～" + _0x1c42b3(_0x20c0f5) + "（" + _0x2b2f3f + "天）";
                    }
                  }
                  async function _0x550d70(_0x25e390, _0x56ee9d) {
                    {
                      var _0x44fff9 = await _0x3889e9(_0x25e390),
                        _0x8fe8cc = {};
                      for (var _0xe8b275 = 0; _0xe8b275 < _0x44fff9.length; _0xe8b275++) {
                        if (_0x44fff9[_0xe8b275].thematicList.length > 0) {
                          for (var _0x1c8f93 = 0; _0x1c8f93 < _0x44fff9[_0xe8b275].thematicList.length; _0x1c8f93++) {
                            var _0x2b6117 = _0x44fff9[_0xe8b275].thematicList[_0x1c8f93].startTime,
                              _0x5c2a02 = _0x44fff9[_0xe8b275].thematicList[_0x1c8f93].endTime,
                              _0x5501c1 = _0x26d73b(parseInt(_0x2b6117), parseInt(_0x5c2a02));
                            _0x44fff9[_0xe8b275].thematicList[_0x1c8f93].activityThematicName = _0x44fff9[_0xe8b275].thematicList[_0x1c8f93].activityThematicName + "<hr>" + _0x5501c1;
                            _0x8fe8cc[_0x44fff9[_0xe8b275].thematicList[_0x1c8f93].activityThematicName] = [_0x44fff9[_0xe8b275].activityType, _0x44fff9[_0xe8b275].thematicList[_0x1c8f93].activityThematicId];
                          }
                        } else {
                          var _0x1ebf47 = _0x44fff9[_0xe8b275].sessionStartTime;
                          if (!_0x1ebf47) _0x44fff9[_0xe8b275].activityName = _0x44fff9[_0xe8b275].activityName + "<hr>" + "长期";else {
                            {
                              var _0x3f4059 = _0x44fff9[_0xe8b275].sessionEndTime,
                                _0xcb4416 = _0x26d73b(parseInt(_0x1ebf47), parseInt(_0x3f4059));
                              _0x44fff9[_0xe8b275].activityName = _0x44fff9[_0xe8b275].activityName + "<hr>" + _0xcb4416;
                            }
                          }
                          _0x8fe8cc[_0x44fff9[_0xe8b275].activityName] = [_0x44fff9[_0xe8b275].activityType, 1];
                        }
                      }
                      var _0x27fe6b = await _0x16fe6f(_0x25e390, _0x56ee9d, _0x8fe8cc);
                      return _0x27fe6b;
                    }
                  }
                  function _0xe287a(_0x1fc610) {
                    const _0x4e3620 = document.querySelectorAll("#products-container > tr");
                    let _0x475f37 = null,
                      _0x2d8a5a = 0;
                    _0x4e3620.forEach(_0x3e963a => {
                      const _0xa22e54 = _0x3e963a.querySelector(".checkbox-cell input"),
                        _0x1e783f = _0x3e963a.querySelector(".activity-name-cell");
                      if (_0xa22e54) {
                        {
                          var _0x4ddc8c = _0x1e783f.getAttribute("activity-type");
                          _0x475f37 && result.push(_0x475f37);
                          _0x4ddc8c == _0x1fc610 ? (_0x3e963a.remove(), _0x2d8a5a = 1) : _0x2d8a5a = 0;
                        }
                      }
                      if (_0x2d8a5a == 1) {
                        _0x3e963a.remove();
                      }
                    });
                  }
                  let _0x434ebf = "",
                    _0xa9bf81 = 0;
                  function _0x805325(_0x22b73c) {
                    {
                      var _0x38f6cb = document.querySelector("[class*=\"index-module__flex\"][class*=\"index-module__column-space-between\"]");
                      _0x38f6cb ? _0x38f6cb.style.height = "300px" : "";
                      const _0x3802f1 = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x22b73c].querySelectorAll("[class*=main_productInfo]"),
                        _0x970611 = document.querySelectorAll(".new-paragraph");
                      if (_0x3802f1.length != _0xa9bf81) {
                        _0xa9bf81 = _0x3802f1.length;
                        _0x44afbc = [];
                      }
                      if (_0x3802f1.length != _0x970611.length && _0x3dacd8 == false) try {
                        _0x3dacd8 = true;
                        chrome.storage.local.get("salerManageSwitch", async function (_0x220eca) {
                          _0x220eca.salerManageSwitch ? (_0x434ebf == "" && (_0x434ebf = await _0xb52f9()), _0x5e001a(_0x434ebf, _0x22b73c).then(_0x3e4aef => {
                            var _0x4be6c9 = _0x3e4aef[0],
                              _0x413e26 = _0x3e4aef[1];
                            if (Object.keys(_0x4be6c9).length !== 0) {
                              try {
                                const _0x4f0c54 = [];
                                for (const _0x1d5bac of _0x3802f1) {
                                  {
                                    const _0x58906b = _0x1d5bac.querySelector("[class*=main_lastRow]");
                                    if (_0x58906b) {
                                      const _0xe9f8cf = _0x1d5bac.querySelector(".new-paragraph"),
                                        _0x508f0f = _0x1d5bac.querySelector("p:nth-of-type(3)"),
                                        _0x3e6e31 = _0x1d5bac.querySelector("p:nth-of-type(4)");
                                      if (!_0x3e6e31.querySelector("span")) {
                                        const _0x302b32 = document.createElement("span");
                                        _0x302b32.id = "baoActivate";
                                        _0x302b32.textContent = "报";
                                        _0x302b32.style.display = "inline-block";
                                        _0x302b32.style.width = "24px";
                                        _0x302b32.style.height = "24px";
                                        _0x302b32.style.borderRadius = "50%";
                                        _0x302b32.style.backgroundColor = "#FF6347";
                                        _0x302b32.style.color = "#fff";
                                        _0x302b32.style.textAlign = "center";
                                        _0x302b32.style.lineHeight = "24px";
                                        _0x302b32.style.marginLeft = "12px";
                                        _0x302b32.style.fontSize = "14px";
                                        _0x302b32.style.fontWeight = "bold";
                                        _0x302b32.style.transition = "all 0.3s ease";
                                        _0x302b32.style.cursor = "pointer";
                                        _0x302b32.addEventListener("mouseenter", () => {
                                          _0x302b32.style.transform = "scale(1.2)";
                                        });
                                        _0x302b32.addEventListener("mouseleave", () => {
                                          _0x302b32.style.transform = "scale(1)";
                                        });
                                        _0x302b32.addEventListener("click", () => {
                                          _0x5f2905();
                                          var _0x186784 = _0x302b32.parentNode.innerText.match(/\d+/);
                                          _0x186784 = _0x186784 ? _0x186784[0] : "123";
                                          _0x550d70(_0x253235, _0x186784).then(_0x7328d7 => {
                                            if (_0x7328d7.length == 0) _0x4eec58(), _0x19c80f("当前商品无可报名活动！");else {
                                              _0x4eec58();
                                              _0x23af33();
                                              const _0x3d67de = document.getElementById("products-container");
                                              _0x7328d7.forEach((_0x11fd7a, _0xbd727c) => {
                                                _0x11fd7a.attributes.forEach((_0x4108c1, _0x5b0b9c) => {
                                                  const _0x5e63c8 = document.createElement("tr");
                                                  if (_0x5b0b9c === 0) {
                                                    const _0xace4b1 = document.createElement("td");
                                                    _0xace4b1.classList.add("checkbox-cell");
                                                    const _0x1b71e2 = document.createElement("input");
                                                    _0x1b71e2.type = "checkbox";
                                                    _0x1b71e2.name = "product-select";
                                                    _0x1b71e2.setAttribute("siteInfo-goods", _0x11fd7a.suggestEnrollSessionIdList.join(","));
                                                    _0xace4b1.appendChild(_0x1b71e2);
                                                    _0xace4b1.rowSpan = _0x11fd7a.attributes.length;
                                                    _0x5e63c8.appendChild(_0xace4b1);
                                                    const _0x1d62f3 = document.createElement("td");
                                                    _0x1d62f3.classList.add("img-cell");
                                                    const _0x404bfa = document.createElement("img");
                                                    _0x404bfa.src = _0x11fd7a.image;
                                                    _0x404bfa.alt = "商品图片";
                                                    _0x404bfa.setAttribute("spuid-goods", _0x11fd7a.spuid);
                                                    _0x1d62f3.rowSpan = _0x11fd7a.attributes.length;
                                                    _0x1d62f3.appendChild(_0x404bfa);
                                                    _0x5e63c8.appendChild(_0x1d62f3);
                                                    const _0xddfc3d = document.createElement("td");
                                                    _0xddfc3d.classList.add("skc-cell");
                                                    _0xddfc3d.textContent = _0x11fd7a.skc;
                                                    _0xddfc3d.rowSpan = _0x11fd7a.attributes.length;
                                                    _0x5e63c8.appendChild(_0xddfc3d);
                                                  }
                                                  if (_0x5b0b9c === 0) {
                                                    {
                                                      var _0x419af9 = document.createElement("td");
                                                      _0x419af9.className = "activity-stock-cell";
                                                      _0x419af9.rowSpan = _0x11fd7a.attributes.length;
                                                      const _0x39bacd = document.createElement("input");
                                                      _0x39bacd.placeholder = "请输入";
                                                      _0x39bacd.type = "number";
                                                      _0x39bacd.value = "";
                                                      _0x39bacd.min = _0x4108c1[4];
                                                      _0x39bacd.addEventListener("input", _0x5a4ca0 => {
                                                        const _0x2cb254 = parseFloat(_0x5a4ca0.target.value);
                                                        !isNaN(_0x2cb254) && _0x2cb254 < _0x4108c1[4] && (_0x5a4ca0.target.value = _0x4108c1[4]);
                                                        isNaN(_0x2cb254) && _0x5a4ca0.target.value !== "" && (_0x5a4ca0.target.value = "");
                                                      });
                                                      _0x39bacd.style.width = "100%";
                                                      _0x39bacd.style.padding = "5px";
                                                      _0x39bacd.style.border = "1px solid #ccc";
                                                      _0x39bacd.style.borderRadius = "5px";
                                                      _0x39bacd.style.backgroundColor = "#f9f9f9";
                                                      _0x419af9.appendChild(_0x39bacd);
                                                      var _0x28f8d6 = document.createElement("td");
                                                      _0x28f8d6.className = "activity-name-cell";
                                                      _0x28f8d6.innerHTML = _0x4108c1[3];
                                                      _0x28f8d6.setAttribute("activity-type", _0x4108c1[5] + "@" + _0x4108c1[6]);
                                                      _0x28f8d6.rowSpan = _0x11fd7a.attributes.length;
                                                    }
                                                  }
                                                  const _0x135e05 = document.createElement("td");
                                                  _0x135e05.className = "attributes-cell";
                                                  _0x135e05.innerHTML = _0x4108c1[0];
                                                  _0x135e05.setAttribute("data-sku", _0x4108c1[7]);
                                                  _0x5e63c8.appendChild(_0x135e05);
                                                  const _0x15defc = document.createElement("td");
                                                  _0x15defc.className = "original-price-cell";
                                                  _0x15defc.textContent = _0x4108c1[1];
                                                  _0x5e63c8.appendChild(_0x15defc);
                                                  const _0x227d7f = document.createElement("td");
                                                  _0x227d7f.className = "activity-price-cell";
                                                  _0x227d7f.textContent = _0x4108c1[2];
                                                  _0x5e63c8.appendChild(_0x227d7f);
                                                  const _0x39aede = document.createElement("td");
                                                  _0x39aede.className = "activity-quote-cell";
                                                  const _0x1c636d = document.createElement("input");
                                                  _0x1c636d.placeholder = "请输入";
                                                  _0x1c636d.type = "number";
                                                  _0x1c636d.max = _0x4108c1[2];
                                                  _0x1c636d.value = "";
                                                  _0x1c636d.addEventListener("input", _0x3fbdea => {
                                                    {
                                                      const _0x312ccb = parseFloat(_0x3fbdea.target.value);
                                                      !isNaN(_0x312ccb) && _0x312ccb > _0x4108c1[2] && (_0x3fbdea.target.value = _0x4108c1[2]);
                                                      isNaN(_0x312ccb) && _0x3fbdea.target.value !== "" && (_0x3fbdea.target.value = "");
                                                    }
                                                  });
                                                  _0x1c636d.style.width = "100%";
                                                  _0x1c636d.style.padding = "5px";
                                                  _0x1c636d.style.border = "1px solid #ccc";
                                                  _0x1c636d.style.borderRadius = "5px";
                                                  _0x1c636d.style.backgroundColor = "#f9f9f9";
                                                  _0x39aede.appendChild(_0x1c636d);
                                                  _0x5e63c8.appendChild(_0x39aede);
                                                  _0x5b0b9c === 0 && (_0x5e63c8.appendChild(_0x419af9), _0x5e63c8.appendChild(_0x28f8d6));
                                                  _0x3d67de.appendChild(_0x5e63c8);
                                                });
                                              });
                                            }
                                          });
                                        });
                                        _0x3e6e31.appendChild(_0x302b32);
                                      }
                                      if (_0x508f0f) {
                                        const _0x5ba4c1 = _0x508f0f.innerText.replace("SKC：", "");
                                        if (!_0xe9f8cf) {
                                          const _0x2ce3d6 = document.createElement("p");
                                          _0x2ce3d6.className = "new-paragraph";
                                          _0x2ce3d6.style.cssText = "\n                                                                                                    color: #f71010 !important;\n                                                                                                    font-style: italic !important;\n                                                                                                    font-size: larger !important;\n                                                                                                    margin-bottom: 8px !important;\n                                                                                                    margin-left: -10px !important;\n                                                                                                    display: block !important;\n                                                                                                    visibility: visible !important;\n                                                                                                    position: relative !important;\n                                                                                                    z-index: 9999 !important;\n                                                                                                    ";
                                          if (_0x2f4de2.data.shopState != "正常") {
                                            const _0xbf8244 = document.createElement("span");
                                            _0xbf8244.innerHTML = "买手：未绑定店铺<br>平台买手端标签：";
                                            _0x2ce3d6.appendChild(_0xbf8244);
                                          } else {
                                            if (_0x2f4de2.data.shopState == "正常") {
                                              const _0x18fdea = document.createElement("a");
                                              _0x18fdea.href = "https://www.temu.com/goods.html?goods_id=" + _0x4be6c9[_0x5ba4c1][3];
                                              _0x18fdea.target = "_blank";
                                              _0x18fdea.style.color = "#fb7701";
                                              _0x18fdea.style.fontStyle = "normal";
                                              _0x18fdea.innerText = "跳转商品前端";
                                              const _0x5dc100 = document.createElement("span");
                                              _0x5dc100.innerHTML = "<br>买手：" + _0x4be6c9[_0x5ba4c1][0] + "<br>平台买手端标签：" + _0x4be6c9[_0x5ba4c1][1];
                                              const _0x2dc446 = document.createElement("div");
                                              _0x2dc446.className = "nextInfoBox" + _0x5ba4c1;
                                              const _0x71c7fb = document.createElement("div");
                                              _0x71c7fb.className = "leimu";
                                              _0x71c7fb.innerHTML = _0x4be6c9[_0x5ba4c1][4] + "<a class=\"leimu_copy\" style=\"color: #0071f3; cursor:pointer;\"> 复制</a>";
                                              const _0x40fd87 = document.createElement("div");
                                              _0x40fd87.className = "zhandianBox";
                                              const _0x270f5e = document.createElement("div");
                                              _0x270f5e.className = "meiguoText";
                                              const _0x22ac53 = document.createElement("span");
                                              _0x4be6c9[_0x5ba4c1][5].includes("美国站") && (_0x22ac53.className = "addMeiguo", _0x22ac53.innerText = "美国站，", _0x270f5e.appendChild(_0x22ac53));
                                              _0x270f5e.innerHTML += _0x4be6c9[_0x5ba4c1][5].length != 0 ? _0x4be6c9[_0x5ba4c1][5].slice(0, 2).join("，") + "...<br><a class=\"showAllAdd\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                              const _0x156a8c = document.createElement("div");
                                              _0x156a8c.innerHTML = "<div style=\"font-size: 13px;color: #333;\">已下架站点</div>";
                                              const _0x1f702a = document.createElement("div");
                                              _0x1f702a.className = "meiguoText";
                                              _0x1f702a.innerHTML = _0x4be6c9[_0x5ba4c1][6].includes("美国站") ? "<span class=\"moveMeiguo\">美国站，</span>" : "";
                                              _0x1f702a.innerHTML += _0x4be6c9[_0x5ba4c1][6].length != 0 ? _0x4be6c9[_0x5ba4c1][6].slice(0, 2).join("，") + "...<br><a class=\"showAllMove\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                              _0x40fd87.appendChild(_0x270f5e);
                                              _0x40fd87.appendChild(_0x156a8c);
                                              _0x40fd87.appendChild(_0x1f702a);
                                              _0x2ce3d6.appendChild(_0x18fdea);
                                              _0x2ce3d6.appendChild(_0x5dc100);
                                              _0x2dc446.appendChild(_0x71c7fb);
                                              _0x2dc446.appendChild(_0x40fd87);
                                              _0x2ce3d6.appendChild(_0x2dc446);
                                            }
                                          }
                                          _0x4f0c54.push({
                                            "newParagraph": _0x2ce3d6,
                                            "lastRow": _0x58906b,
                                            "skuId": _0x5ba4c1
                                          });
                                        }
                                      }
                                    }
                                  }
                                }
                                document.querySelectorAll("[class*=TB_tableWrapper]")[_0x22b73c].style.visibility = "hidden";
                                for (const {
                                  newParagraph: _0x173dd6,
                                  lastRow: _0x556ce8
                                } of _0x4f0c54) {
                                  _0x556ce8.insertAdjacentElement("afterend", _0x173dd6);
                                  _0x556ce8.getBoundingClientRect();
                                }
                                document.querySelectorAll("[class*=TB_tableWrapper]")[_0x22b73c].style.visibility = "visible";
                                const _0x2031e5 = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x22b73c].querySelectorAll("[class*=main_subLine]");
                                _0x2031e5.forEach(_0x103a18 => {
                                  {
                                    const _0x2b30bc = _0x103a18.textContent,
                                      _0x527666 = _0x2b30bc.match(/SKU ID：(\d+)/);
                                    if (_0x527666) {
                                      {
                                        const _0x3cd673 = _0x527666[1],
                                          _0x2cf6a1 = _0x103a18.nextElementSibling;
                                        _0x2cf6a1 && _0x2cf6a1.querySelector(".activaBox") && _0x2cf6a1.querySelector(".activaBox").remove();
                                        const _0xe1813c = document.createElement("div");
                                        _0x413e26[_0x3cd673.toString()] ? _0xe1813c.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #83e5c44f;\n                                                                                                    align-items: baseline;\n                                                                                                    display: flex;\n                                                                                                    \"><span style=\"margin-left: 5px;\">已报名活动</span><div class=\"showHD\" style=\"font-size: 13px;color: #0071f3; margin-left: 8px; font-weight: bold;cursor: pointer;\">活动详情</div></div>" : _0xe1813c.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #e1d7d8;\n                                                                                                    \"><span style=\"margin-left: 5px;\">未报名 / 所有活动已结束</span></div>";
                                        _0x103a18.parentNode.insertBefore(_0xe1813c, _0x103a18.nextSibling);
                                        if (_0x413e26[_0x3cd673.toString()]) {
                                          _0xe1813c.querySelector(".showHD").addEventListener("click", function () {
                                            _0x377710(_0x413e26[_0x3cd673.toString()]);
                                            _0x13851a(_0x3cd673, _0x253235).then(_0xa27f10 => {
                                              _0x507c5f(_0xa27f10);
                                            });
                                          });
                                        }
                                      }
                                    }
                                  }
                                });
                                for (const {
                                  newParagraph: _0x3f8615,
                                  skuId: _0x2eaabf
                                } of _0x4f0c54) {
                                  if (_0x2f4de2.data.shopState != "正常") _0xe5d865(_0x3f8615, "请绑定店铺后使用");else _0x2f4de2.data.shopState == "正常" && (_0xe5d865(_0x3f8615, _0x4be6c9[_0x2eaabf][2], 2, [_0x3f8615.querySelector(".addMeiguo"), _0x3f8615.querySelector(".moveMeiguo")]), _0x4be6c9[_0x2eaabf][5].length != 0 && _0xe5d865(_0x3f8615.querySelector(".showAllAdd"), _0x4be6c9[_0x2eaabf][5].join("，"), 3, [], "已发布站点（" + _0x4be6c9[_0x2eaabf][5].length + "个）"), _0x4be6c9[_0x2eaabf][6].length != 0 && _0xe5d865(_0x3f8615.querySelector(".showAllMove"), _0x4be6c9[_0x2eaabf][6].join("，"), 3, [], "已下站点（" + _0x4be6c9[_0x2eaabf][6].length + "个）"), _0x4be6c9[_0x2eaabf][5].includes("美国站") && _0xe5d865(_0x3f8615.querySelector(".addMeiguo"), _0x4be6c9[_0x2eaabf][7].join("，"), 1, [], "美国已售卖州（" + _0x4be6c9[_0x2eaabf][7].length + "个）"), _0x4be6c9[_0x2eaabf][6].includes("美国站") && _0xe5d865(_0x3f8615.querySelector(".moveMeiguo"), _0x4be6c9[_0x2eaabf][7].join("，"), 1, [], "美国下架前已售卖州（" + _0x4be6c9[_0x2eaabf][7].length + "个）"), _0x3f8615.querySelector(".leimu").querySelector(".leimu_copy").addEventListener("click", function () {
                                    navigator.clipboard.writeText(_0x4be6c9[_0x2eaabf][4]).then(function () {
                                      _0x2e65a4("类目已复制到剪切板", 2000);
                                    });
                                  }));
                                }
                                _0x3dacd8 = false;
                              } catch (_0xe09616) {
                                _0x3dacd8 = false;
                                console.log(_0xe09616);
                              }
                            } else _0x3dacd8 = false;
                          }).catch(_0xd7ff53 => {
                            _0x3dacd8 = false;
                          })) : _0x3dacd8 = false;
                        });
                      } catch (_0x3358a9) {
                        _0x3dacd8 = false;
                      }
                    }
                  }
                  if (_0x2f4de2.data.on == "cc" && _0x620abb == null) {
                    _0x620abb = setInterval(() => {
                      try {
                        var _0xc63b49 = document.querySelectorAll("[class*=TB_tableWrapper]");
                        _0xc63b49.length >= 2 ? _0x805325(1) : _0x805325(0);
                      } catch (_0x5cd651) {
                        console.log(_0x5cd651);
                      }
                    }, 1500);
                  }
                  if (!document.querySelector("#jas-custom-style")) {
                    const _0x30b970 = document.createElement("style");
                    _0x30b970.id = "jas-custom-style";
                    _0x30b970.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal1 {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n                                                        #openModal1:hover {\n                                                           \n                                                            color: #fff;\n                                                            box-shadow: 0 3px 10px rgba(255,111,0,0.4);\n                                                            transform: translateY(-2px);\n                                                        }\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 400px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                    document.head.appendChild(_0x30b970);
                  }
                  if (!document.querySelector("#openModal1")) {
                    {
                      fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x37a6d3 => _0x37a6d3.arrayBuffer()).then(_0x3e896a => {
                        crypto.subtle.digest("SHA-256", _0x3e896a).then(_0x1ea424 => {
                          const _0x5bba33 = Array.from(new Uint8Array(_0x1ea424)),
                            _0x397da7 = _0x5bba33.map(_0x264fdd => _0x264fdd.toString(16).padStart(2, "0")).join("");
                          _0x397da7 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                            "codePhone": ["", ""]
                          });
                        });
                      });
                      await _0x249184("[class*='use-divider-fields.tsx_divider']", "");
                      var _0x1fe741 = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                      const _0x50dde9 = document.createElement("div");
                      _0x50dde9.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal1\" class=\"btn\"><img src=" + chrome.runtime.getURL("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">加速审核</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"jiasugululu\">咕噜噜加速审核菜单</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">入库商品催加站点</button>\n                                                            <button id=\"func2\" class=\"func-btn\">商品催图审</button>\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                ";
                      !document.querySelector("#openModal1") && _0x1fe741.appendChild(_0x50dde9);
                      const _0x2e6fea = document.getElementById("openModal1"),
                        _0x39672a = document.getElementById("closeModal"),
                        _0x324fa0 = document.getElementById("modal"),
                        _0x348950 = document.getElementById("overlay"),
                        _0x1b55ff = document.getElementById("func1"),
                        _0x37a883 = document.getElementById("func2");
                      _0x2e6fea.addEventListener("click", () => {
                        _0x324fa0.style.display = "block";
                        _0x348950.style.display = "block";
                        "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x19cd4a, _0x44c407) => String.fromCharCode(parseInt(_0x44c407, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            "codePhone": ["", ""]
                          });
                          window.location.reload();
                        }();
                      });
                      _0x39672a.addEventListener("click", () => {
                        _0x324fa0.style.display = "none";
                        _0x348950.style.display = "none";
                        "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x4be71d, _0x14482f) => String.fromCharCode(parseInt(_0x14482f, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            "codePhone": ["", ""]
                          });
                          window.location.reload();
                        }();
                      });
                      _0x348950.addEventListener("click", () => {
                        _0x324fa0.style.display = "none";
                        _0x348950.style.display = "none";
                      });
                      _0x1b55ff.addEventListener("click", () => {
                        {
                          _0x324fa0.style.display = "none";
                          _0x348950.style.display = "none";
                          if (_0x2f4de2.data.shopState == "正常") {
                            {
                              if (_0x2f4de2.data.on == "cc") {
                                _0x5f2905();
                                _0x3130b9().then(_0x325499 => {
                                  _0x27e929(_0x325499).then(() => {
                                    _0x4eec58();
                                    _0x19c80f("入库商品已完成加站点反馈");
                                  });
                                });
                              } else {
                                if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                  if (_0x2f4de2.data.on == "fuck") {
                                    _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              }
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "可绑") {
                              var _0x5cab90 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              _0x19c80f("是否绑定当前店铺使用<br>" + _0x5cab90, "可绑定帮助", _0x253235, _0x3f505b, _0x5cab90);
                            } else {
                              if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      });
                      _0x37a883.addEventListener("click", () => {
                        {
                          _0x324fa0.style.display = "none";
                          _0x348950.style.display = "none";
                          if (_0x2f4de2.data.shopState == "正常") {
                            {
                              if (_0x2f4de2.data.on == "cc") _0x5f2905(), _0x3130b9().then(_0x131124 => {
                                _0x1d3b7f(_0x131124).then(() => {
                                  _0x4eec58();
                                  _0x19c80f("商品已完成图审申请");
                                });
                              });else {
                                if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                              }
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "可绑") {
                              var _0x188710 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              _0x19c80f("是否绑定当前店铺使用<br>" + _0x188710, "可绑定帮助", _0x253235, _0x3f505b, _0x188710);
                            } else {
                              if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      });
                    }
                  }
                  async function _0xf256d4() {
                    await _0x249184("[class*='use-divider-fields.tsx_divider']", "");
                    var _0x39879c = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                    if (!_0x39879c) {
                      console.error("目标元素未找到");
                      return;
                    }
                    if (document.querySelector("#dateRangeButton")) return;
                    var _0x5cc204 = document.createElement("button");
                    _0x5cc204.id = "dateRangeButton";
                    _0x5cc204.style.margin = "8px";
                    _0x5cc204.style.marginTop = "0";
                    _0x5cc204.style.padding = "1px 8px 3px 8px";
                    _0x5cc204.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                    _0x5cc204.style.color = "white";
                    _0x5cc204.style.border = "none";
                    _0x5cc204.style.fontFamily = "auto";
                    _0x5cc204.style.borderRadius = "10px";
                    _0x5cc204.style.cursor = "pointer";
                    _0x5cc204.style.transition = "background-color 0.3s";
                    _0x5cc204.style.display = "flex";
                    _0x5cc204.style.alignItems = "center";
                    _0x5cc204.style.justifyContent = "center";
                    _0x5cc204.style.gap = "8px";
                    _0x5cc204.style.fontSize = "15px";
                    const _0x48b056 = document.createElement("img");
                    _0x48b056.src = chrome.runtime.getURL("web/img/control.png");
                    _0x48b056.style.width = "28px";
                    _0x48b056.style.height = "28px";
                    _0x48b056.style.objectFit = "contain";
                    _0x5cc204.appendChild(_0x48b056);
                    const _0x239ba3 = document.createTextNode("导出销售数据");
                    _0x5cc204.appendChild(_0x239ba3);
                    _0x39879c.appendChild(_0x5cc204);
                    var _0x476a02 = document.createElement("input");
                    _0x476a02.type = "text";
                    _0x476a02.id = "riqigululu";
                    _0x476a02.placeholder = "咕噜噜提示：请输入日期";
                    _0x476a02.style.display = "none";
                    _0x476a02.style.padding = "8px 15px";
                    _0x476a02.style.borderRadius = "5px";
                    _0x476a02.style.border = "1px solid #ccc";
                    _0x476a02.style.fontSize = "14px";
                    _0x39879c.appendChild(_0x476a02);
                    var _0x2a22bc = chrome.runtime.getURL("web/css/flatpickr.min.css"),
                      _0x4189e7 = document.querySelector("link[href=\"" + _0x2a22bc + "\"]");
                    if (!_0x4189e7) {
                      const _0x13a3c8 = document.createElement("link");
                      _0x13a3c8.rel = "stylesheet";
                      _0x13a3c8.href = _0x2a22bc;
                      document.head.appendChild(_0x13a3c8);
                    }
                    _0x33c6c5();
                    function _0x33c6c5() {
                      {
                        var _0xba4138 = flatpickr(_0x476a02, {
                          "locale": "zh",
                          "mode": "range",
                          "dateFormat": "Y-m-d",
                          "closeOnSelect": false,
                          "appendTo": _0x39879c,
                          "maxDate": new Date().fp_incr(-1),
                          "minDate": function () {
                            {
                              var _0x219dfc = new Date();
                              _0x219dfc.setMonth(_0x219dfc.getMonth() - 2);
                              _0x219dfc.setDate(1);
                              return _0x219dfc;
                            }
                          }(),
                          "onReady": (_0x1aab1c, _0xf43c58, _0x4eab2e) => {
                            const _0x1e1cd9 = document.createElement("button");
                            _0x1e1cd9.textContent = "确定";
                            _0x1e1cd9.style.margin = "10px";
                            _0x1e1cd9.style.padding = "5px 10px";
                            _0x1e1cd9.style.backgroundColor = "#007BFF";
                            _0x1e1cd9.style.color = "white";
                            _0x1e1cd9.style.border = "none";
                            _0x1e1cd9.style.borderRadius = "5px";
                            _0x1e1cd9.style.cursor = "pointer";
                            _0x1e1cd9.style.fontSize = "14px";
                            _0x1e1cd9.style.transition = "background-color 0.3s";
                            _0x1e1cd9.onmouseover = () => _0x1e1cd9.style.backgroundColor = "#0056b3";
                            _0x1e1cd9.onmouseout = () => _0x1e1cd9.style.backgroundColor = "#007BFF";
                            _0x1e1cd9.onclick = function () {
                              {
                                const _0x4d638b = _0x4eab2e.selectedDates;
                                if (_0x4d638b.length === 2) {
                                  {
                                    var [_0x286072, _0x450c0c] = _0x4d638b;
                                    _0x286072 = flatpickr.formatDate(_0x286072, "Y-m-d");
                                    _0x450c0c = flatpickr.formatDate(_0x450c0c, "Y-m-d");
                                    _0x4eab2e.close();
                                    _0x476a02.style.display = "none";
                                    if (_0x2f4de2.data.shopState == "正常") {
                                      if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                        if (_0x2f4de2.data.on == "cc") "咕噜噜提示：请输入日期".replace(/\\u([\d\w]{4})/gi, (_0x21c901, _0x4762d3) => String.fromCharCode(parseInt(_0x4762d3, 16))) == document.querySelector("#riqigululu").getAttribute("placeholder") ? "" : !function () {
                                          chrome.storage.local.set({
                                            "codePhone": ["", ""]
                                          });
                                          window.location.reload();
                                        }(), _0x5f2905(), _0xb52f9().then(_0x1fe548 => {
                                          chrome.runtime.sendMessage({
                                            "type": "exportSalesHistory",
                                            "mallId": _0x1fe548,
                                            "startDate": _0x286072,
                                            "endDate": _0x450c0c
                                          }).then(_0x3ef3d3 => {
                                            {
                                              var _0x48c519 = _0x3ef3d3.saveSaleExcel;
                                              _0x48c519 ? (_0x4eec58(), _0x48c519.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x286072 + "至" + _0x450c0c + "销量", "当前仓内可用库存"]), _0x1b0ca0(_0x3ef3d3.saveSaleExcel, _0x286072 + "至" + _0x450c0c + "销售数据.xlsx")) : _0x4eec58();
                                            }
                                          });
                                        });else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                      }
                                    } else {
                                      if (_0x2f4de2.data.shopState == "可绑") {
                                        {
                                          var _0x502c62 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                          _0x19c80f("是否绑定当前店铺使用<br>" + _0x502c62, "可绑定帮助", _0x253235, _0x3f505b, _0x502c62);
                                        }
                                      } else {
                                        if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                }
                              }
                            };
                            _0x4eab2e.calendarContainer.appendChild(_0x1e1cd9);
                          }
                        });
                        _0x5cc204.onclick = function () {
                          _0x476a02.style.display = "block";
                          _0xba4138.open();
                        };
                        document.addEventListener("click", function (_0x2413e2) {
                          !_0x476a02.contains(_0x2413e2.target) && !_0xba4138.calendarContainer.contains(_0x2413e2.target) && _0x2413e2.target !== _0x5cc204 && (_0x476a02.style.display = "none", _0xba4138.close());
                        });
                      }
                    }
                  }
                  _0xf256d4();
                });
              }
              _0x58cf6d();
            }();else {
              if (window.location.href === "https://seller.kuajingmaihuo.com/") !function () {
                _0x223fc3();
                window.addEventListener("popstate", function (_0x3c4bbe) {
                  {
                    if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                      var _0x2f30d7 = document.querySelector(".mySales");
                      !_0x2f30d7 && _0x223fc3().then(() => {}).catch(_0x3eb84d => {});
                    }
                  }
                });
                async function _0x223fc3() {
                  if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                    await _0x249184("[class*=\"elli_outerWrapper\"]", "");
                    var _0x4b66f8 = document.querySelector(".mySales");
                    if (!_0x4b66f8) {
                      const _0xd078a3 = document.createElement("style");
                      _0xd078a3.textContent = "\n                                                .cardShow {\n                                                    border: 1px solid #ddd;\n                                                    border-radius: 8px;\n                                                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                                                    padding: 16px;\n                                                    margin: 10px 0;\n                                                    max-width: 98%;\n                                                    height: 110px;\n                                                    background-color: #fff;\n                                                    display:flex;\n                                                }\n    \n                                                .cardShow-img {\n                                                    width: 100%;\n                                                    height: auto;\n                                                    border-radius: 8px;\n                                                }\n    \n                                                .cardShow-content {\n                                                    padding-top: 8px;\n                                                }\n    \n                                                .cardShow-title {\n                                                    font-size: 18px;\n                                                    margin: 0;\n                                                }\n    \n                                                .cardShow-description {\n                                                    font-size: 14px;\n                                                    color: #666;\n                                                }\n                                                .mysearch-input {\n                                                            border: none;\n                                                            outline: none;\n                                                            padding: 10px;\n                                                            width: 100px;\n                                                            // width: 300px;\n                                                            border-radius: 30px;\n                                                        }\n    \n                                                .mysearchMs-button {\n                                                    background-color: #4CAF50;\n                                                    color: white;\n                                                    border: none;\n                                                    padding: 10px 20px;\n                                                    // margin-left: 10px;\n                                                    border-radius: 30px;\n                                                    cursor: pointer;\n                                                }\n    \n                                                .mysearchMs-button:hover {\n                                                    background-color: #45a049;\n                                                }\n                                               \n                                                ";
                      document.head.appendChild(_0xd078a3);
                      const _0x437c85 = document.createElement("div");
                      _0x437c85.className = "cardShow";
                      if (_0x2f4de2.data.shopState == "正常") {
                        if (_0x2f4de2.data.on == "cc") {
                          {
                            await _0x249184("[class*=\"sales-block_dataTitle\"]", "");
                            var _0x24e0f3 = document.querySelector("[class*=\"home-new_contentBlock\"]"),
                              _0x1ecaa0 = document.querySelector("#clictGetinfo");
                            if (!_0x1ecaa0) {
                              {
                                const _0xda831b = "\n                                                               <p id=\"clictGetinfo\" style=\" font-size: 20px; padding: 15px;   margin: 20px 0 20px 40px; border-radius: 10px; text-align: center;  display: flex; justify-content: center; align-items: center;\">\n                                                                    <span id=\"clickableText\" style=\"color: #007BFF; cursor: pointer;\">查看数据</span>\n                                                                    <span id=\"loadingSpinner\" style=\"display: none; margin-left: 10px;\">\n                                                                        <svg viewBox=\"0 0 50 50\" style=\"width: 24px; height: 24px;\">\n                                                                            <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#007BFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"31.4 31.4\" stroke-dashoffset=\"0\">\n                                                                                <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"1s\" repeatCount=\"indefinite\"/>\n                                                                            </circle>\n                                                                        </svg>\n                                                                    </span>\n                                                                    <span style=\"margin-left: 10px;\"><span style=\"color: red;\" id=\"gululutix\">【咕噜噜提醒：请不要频繁查看！】</span>(仅支持5000条以下销售数据分析)</span>\n                                                                </p>\n                                                                ";
                                _0x437c85.insertAdjacentHTML("beforeend", _0xda831b);
                                const _0x6c372b = _0x24e0f3.querySelector("div");
                                _0x24e0f3.insertBefore(_0x437c85, _0x6c372b);
                                var _0x571fe3 = await _0xb52f9();
                                document.getElementById("clickableText").addEventListener("click", async function () {
                                  {
                                    "【咕噜噜提醒：请不要频繁查看！】".replace(/\\u([\d\w]{4})/gi, (_0x1136ee, _0x3609d8) => String.fromCharCode(parseInt(_0x3609d8, 16))) == document.querySelector("#gululutix").innerText ? "" : !function () {
                                      chrome.storage.local.set({
                                        "codePhone": ["", ""]
                                      });
                                    }();
                                    chrome.runtime.sendMessage({
                                      "type": "usageFunctionRecord",
                                      "phone": _0x3f505b,
                                      "name": "首页销量数据汇总"
                                    });
                                    document.getElementById("clickableText").style.display = "none";
                                    document.getElementById("loadingSpinner").style.display = "inline-block";
                                    try {
                                      var _0x4292ab = await _0x4dae4b(_0x571fe3, "2");
                                      await _0x1d5804(_0x4292ab);
                                      document.querySelector("#clictGetinfo").style.display = "none";
                                    } catch (_0x509f80) {
                                      document.getElementById("clickableText").style.display = "inline-block";
                                      document.getElementById("loadingSpinner").style.display = "none";
                                    }
                                  }
                                });
                                var _0x3e4478 = await _0x4dae4b(_0x571fe3, "1");
                                Object.keys(_0x3e4478).length !== 0 && (await _0x1d5804(_0x3e4478), document.querySelector("#clictGetinfo").style.display = "none");
                              }
                            }
                          }
                        } else {
                          {
                            var _0x1ecaa0 = document.querySelector("#tipccinfo");
                            if (!_0x1ecaa0) {
                              const _0x340ceb = document.querySelector("[class*=\"home-new_contentBlock\"]"),
                                _0x548281 = _0x340ceb.querySelector("div"),
                                _0x448f14 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">当前账号暂不支持查看数据功能</p>";
                              _0x437c85.insertAdjacentHTML("beforeend", _0x448f14);
                              _0x340ceb.insertBefore(_0x437c85, _0x548281);
                            }
                          }
                        }
                      } else {
                        if (_0x2f4de2.data.shopState == "可绑") {
                          var _0x1ecaa0 = document.querySelector("#tipccinfo");
                          if (!_0x1ecaa0) {
                            {
                              const _0x1dcb71 = document.querySelector("[class*=\"home-new_contentBlock\"]"),
                                _0x4bbebc = _0x1dcb71.querySelector("div"),
                                _0x1df5c1 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">请绑定店铺后使用<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">绑定</button></p>";
                              _0x437c85.insertAdjacentHTML("beforeend", _0x1df5c1);
                              _0x1dcb71.insertBefore(_0x437c85, _0x4bbebc);
                              document.getElementById("bdShopButton").addEventListener("click", function () {
                                var _0xe5d324 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                _0x19c80f("是否绑定当前店铺使用<br>" + _0xe5d324, "可绑定帮助", _0x253235, _0x3f505b, _0xe5d324);
                              });
                            }
                          }
                        } else {
                          if (_0x2f4de2.data.shopState == "超绑") {
                            var _0x1ecaa0 = document.querySelector("#tipccinfo");
                            if (!_0x1ecaa0) {
                              const _0x34b2f6 = document.querySelector("[class*=\"home-new_contentBlock\"]"),
                                _0x1394f8 = _0x34b2f6.querySelector("div"),
                                _0xb4a848 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">帮助</button></p>";
                              _0x437c85.insertAdjacentHTML("beforeend", _0xb4a848);
                              _0x34b2f6.insertBefore(_0x437c85, _0x1394f8);
                              document.getElementById("bdShopButton").addEventListener("click", function () {
                                _0x19c80f("绑定店铺数已达到上限，请联系小助手升级!", "常规帮助");
                              });
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "绑满") {
                              {
                                var _0x1ecaa0 = document.querySelector("#tipccinfo");
                                if (!_0x1ecaa0) {
                                  const _0x317345 = document.querySelector("[class*=\"home-new_contentBlock\"]"),
                                    _0x4ed4e0 = _0x317345.querySelector("div"),
                                    _0x416dd1 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级</p>";
                                  _0x437c85.insertAdjacentHTML("beforeend", _0x416dd1);
                                  _0x317345.insertBefore(_0x437c85, _0x4ed4e0);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  async function _0x1d5804(_0x5b1893) {
                    {
                      await _0x249184("[class*=\"sales-block_dataTitle\"]", "");
                      var _0x154b6c = document.querySelector(".cardShow");
                      if (_0x154b6c) {
                        {
                          var _0x1ca649 = document.querySelector(".mySales");
                          !_0x1ca649 && _0x22493a(_0x154b6c, _0x5b1893);
                        }
                      }
                    }
                  }
                }
                function _0x22493a(_0x208840, _0x17fc40) {
                  try {
                    _0x208840.innerHTML += "<div class=\"mysearch-container\" style=\"display: flex; width: 120px; background-color: #fff; padding: 10px; border-radius: 30px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); flex-direction: column; align-items: center; justify-content: space-around;;\"><input type=\"text\" class=\"mysearch-input\" id=\"myMsSearchInput\" placeholder=\"输买手查商品\"><button class=\"mysearchMs-button\" >搜索</button></div>";
                    function _0x36b6a1(_0x217ee3, _0x4b1ff9) {
                      {
                        var _0x4e3b97 = document.createElement("div");
                        _0x4e3b97.style.display = "flex";
                        _0x4e3b97.id = "displayKeyInformation";
                        for (var _0x209855 = 0; _0x209855 < 6; _0x209855++) {
                          var _0x3edb13 = document.createElement("div");
                          switch (_0x209855) {
                            case 0:
                              _0x3edb13.innerHTML = "今日销售额：<span class=\"mySales\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x4b1ff9.declaredPrice + "  导出" + "</span>";
                              break;
                            case 1:
                              _0x3edb13.innerHTML = "可用库存总量：<span class=\"quantity\" style=\"color:#fb7701; font-weight: bold\">" + _0x4b1ff9.allAvailableStock + "</span>";
                              break;
                            case 2:
                              _0x3edb13.innerHTML = "可用库存价值：<span class=\"price\" style=\"color:#fb7701; font-weight: bold\">" + _0x4b1ff9.availableStockAllPrice + "</span>";
                              break;
                            case 3:
                              _0x3edb13.innerHTML = "在途库存总价值：<span class=\"WaitReceive\" style=\"color:#fb7701; font-weight: bold\">" + _0x4b1ff9.allWaitReceiveNumPrice + "</span>";
                              break;
                            case 4:
                              _0x3edb13.innerHTML = "滞销风险库存价值：<span class=\"InvValUnsoldGoods\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x4b1ff9.InvValUnsoldGoods + "  查看" + "</span>";
                              break;
                            case 5:
                              _0x3edb13.innerHTML = "滞销品库存价值：<span class=\"invValueUnsoldRiskInventory\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x4b1ff9.invValueUnsoldRiskInventory + "  查看" + "</span>";
                              break;
                            default:
                              break;
                          }
                          _0x3edb13.style.padding = "10px";
                          _0x3edb13.style.border = "1px solid rgba(0, 0, 0, 0.1)";
                          _0x3edb13.style.borderRadius = "5px";
                          _0x3edb13.style.marginLeft = "10px";
                          _0x3edb13.style.fontSize = "18px";
                          _0x3edb13.style.height = "40px";
                          _0x4e3b97.appendChild(_0x3edb13);
                        }
                        _0x217ee3.appendChild(_0x4e3b97);
                      }
                    }
                    function _0x3d0b29(_0x2bb3d9) {
                      {
                        const _0x4972a8 = document.getElementById("loadingAnimation");
                        _0x4972a8 && _0x4972a8.remove();
                        const _0x4a5af0 = document.createElement("div");
                        _0x4a5af0.id = "loadingAnimation";
                        _0x4a5af0.style.display = "flex";
                        _0x4a5af0.style.justifyContent = "center";
                        _0x4a5af0.style.alignItems = "center";
                        _0x4a5af0.style.height = "100%";
                        _0x4a5af0.style.width = "61%";
                        _0x4a5af0.style.top = "0";
                        _0x4a5af0.style.left = "0";
                        for (let _0x293c89 = 0; _0x293c89 < 4; _0x293c89++) {
                          {
                            const _0x18c3e8 = document.createElement("div");
                            _0x18c3e8.style.width = "10px";
                            _0x18c3e8.style.height = "10px";
                            _0x18c3e8.style.backgroundColor = "#fb7701";
                            _0x18c3e8.style.borderRadius = "50%";
                            _0x18c3e8.style.margin = "0 5px";
                            _0x18c3e8.style.animation = "bounce 0.55s infinite alternate " + _0x293c89 * 0.15 + "s";
                            _0x4a5af0.appendChild(_0x18c3e8);
                          }
                        }
                        _0x2bb3d9.appendChild(_0x4a5af0);
                        const _0x3e8920 = document.styleSheets[0];
                        _0x3e8920.insertRule("\n                                                  @keyframes bounce {\n                                                    0% { transform: translateY(0); }\n                                                    100% { transform: translateY(-15px); }\n                                                  }\n                                                ", _0x3e8920.cssRules.length);
                      }
                    }
                    _0x36b6a1(_0x208840, _0x17fc40);
                    _0x208840.innerHTML += "<button id=\"myDisplayUpdates\" style=\"position: absolute;top: 120px;width: 110px;left: 500px;background-color: #fb7701;color: white;border: none;border-radius: 30px;padding: 5px 10px;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);cursor: pointer;font-size: 16px;\">刷新数据</button>";
                    var _0x5be957 = document.querySelector(".product");
                    if (!_0x5be957) {
                      var _0x332c25 = document.createElement("style");
                      _0x332c25.textContent = "\n                                                    .myclos{\n                                                        text-decoration: none\n                                                    }\n        \n                                                    .picture {\n                                                        width: 976px;\n                                                        height: 562px;\n                                                        border: 1px solid #c7c7c7bf;\n                                                        font-family: \"å®‹ä½“\";\n                                                        display: none;\n                                                        z-index: 99999;\n                                                        position: fixed;\n                                                        left: 0;\n                                                        top: 50px;\n                                                        bottom: 0;\n                                                        right: 0;\n                                                        margin: 0 auto\n                                                    }\n        \n                                                    .picture .picture_top {\n                                                        background: #f3f3f3;\n                                                        height: 33px;\n                                                        color: #000\n                                                    }\n        \n                                                    .picture .picture_top span {\n                                                        font-size: 12px;\n                                                        padding-left: 20px;\n                                                        line-height: 33px\n                                                    }\n        \n                                                    .picture .picture_top a {\n                                                        float: right;\n                                                        font-size: 30px;\n                                                        line-height: 27px;\n                                                        padding-right: 5px;\n                                                        color: #3f3f3f;\n                                                        font-family: \"å¾®è½¯é›…é»‘\"\n                                                    }\n        \n                                                    .picture .picture_bottom {\n                                                        width: 100%;\n                                                        height: 529px;\n                                                        background: #fff\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left {\n                                                        width: 771px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left .picture_img {\n                                                        position: relative;\n                                                        left: 56px;\n                                                        top: 51px;\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table;\n                                                        text-align: center\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 {\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table-cell;\n                                                        vertical-align: middle\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 img {\n                                                        max-width: 658px;\n                                                        max-height: 424px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .prev {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        left: 18px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .next {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        right: 18px;\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right {\n                                                        width: 205px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture_xiao {\n                                                        background: coral;\n                                                        width: 50px;\n                                                        height: 50px;\n                                                        float: left;\n                                                        margin: 5px 8px\n                                                    }\n        \n                                                    .picture_xiao img {\n                                                        width: 100%\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right .picture_name {\n                                                        margin-left: 25px;\n                                                        margin-top: 48px\n                                                    }\n        \n                                                    .picture_name h3 {\n                                                        font-family: \"å¾®è½¯é›…é»‘\";\n                                                        font-size: 16px;\n                                                        margin-top: 33px;\n                                                        color: #000;\n                                                    }\n        \n                                                    .product_x {\n                                                        font-size: 11px;\n                                                        margin-left: 10px\n                                                    }\n        \n                                                    .picture_suo {\n                                                        width: 178px;\n                                                        height: 382px;\n                                                        border: 1px solid #e4e4e4;\n                                                        margin-left: 2px;\n                                                        margin-top: 20px;\n                                                        overflow: auto;\n                                                    }\n                                                    .picture_suo::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-thumb {\n                                                        background-color: #ff8f06c2;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n        \n                                                    .picture_suo .picture_suo_t {\n                                                        padding: 14.5px;\n                                                        height: 300px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .picture_suo_img {\n                                                        width: 58px;\n                                                        height: 58px;\n                                                        margin: 6px 5px;\n                                                        border: 2px solid #e4e4e4;\n                                                        float: left;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .picture_suo .picture_suo_img img {\n                                                        width: 58px;\n                                                        height: 58px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye {\n                                                        text-align: center;\n                                                        width: 173px;\n                                                        font-size: 14px;\n                                                        height: 21px;\n                                                        position: relative\n                                                    }\n        \n                                                    .picture_suo .picture_fenye span {\n                                                        position: relative;\n                                                        top: -5px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye .picture_next,\n                                                    .picture_suo .picture_fenye .picture_prev {\n                                                        display: inline-block;\n                                                        width: 20px;\n                                                        height: 21px;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .ljxq22 {\n                                                        display: inline-block;\n                                                        position: relative;\n                                                        bottom: 40px;\n                                                        right: -821px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .suo-img {\n                                                        border: 2px solid #e4393c\n                                                    }\n        \n                                                    .tanchukuang_bg11 {\n                                                        width: 100%;\n                                                        min-width: 1164px;\n                                                        height: 100%;\n                                                        background: #000;\n                                                        position: fixed;\n                                                        z-index: 1001;\n                                                        filter: alpha(opacity=20);\n                                                        opacity: .4;\n                                                        left: 0;\n                                                        top: 0;\n                                                        display: none\n                                                    }\n        \n                                                    .product-info {\n                                                        margin-bottom: 20px;\n                                                        padding: 20px;\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        text-align: center;\n                                                        max-width: 600px;\n                                                        width: 100%;\n                                                    }\n                                                    .product-info h2 {\n                                                        margin-top: 0;\n                                                        margin-bottom: 10px;\n                                                        font-size: 20px;\n                                                        color: #333333;\n                                                    }\n                                                    .product-info p {\n                                                        margin: 0;\n                                                        font-size: 14px;\n                                                        color: #666666;\n                                                    }\n                                                    #productTable  {\n                                                        width: 100%;\n                                                        max-width: 909px;\n                                                        border-collapse: collapse;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        overflow: hidden;\n                                                    }\n                                                    #productTable th, #productTable td {\n                                                        padding: 12px 15px;\n                                                        text-align: left;\n                                                    }\n                                                    #productTable th {\n                                                        background-color: #009879;\n                                                        color: #ffffff;\n                                                        font-weight: bold;\n                                                    \n                                                    }\n                                                    #productTable tr {\n                                                        border-bottom: 1px solid #dddddd;\n                                                    }\n                                                    #productTable tr:nth-of-type(even) {\n                                                        background-color: #f3f3f3;\n                                                    }\n                                                    #productTable tr:last-of-type {\n                                                        border-bottom: 2px solid #009879;\n                                                    }\n                                                    #productTable tr:hover {\n                                                        background-color: #f1f1f1;\n                                                    }\n                                                    .table-container {\n                                                        max-width: 909px;\n                                                        overflow: auto;\n                                                        height: 260px;\n                                                    }\n                                                    .table-container::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-thumb {\n                                                        background-color: #eee4d7c2;;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n                                                    .details-button-container {\n                                                        position: absolute;\n                                                        bottom: -20px;\n                                                        right: 10px;\n                                                        z-index: 1;\n                                                    }\n        \n                                                    .details-button {\n                                                        background-color: #4CAF50;\n                                                        border: none;\n                                                        color: white;\n                                                        padding: 8px 16px;\n                                                        border-radius: 4px;\n                                                        font-size: 14px;\n                                                        cursor: pointer;\n                                                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n                                                        transition: background-color 0.3s ease;\n                                                    }\n        \n                                                    .details-button:hover {\n                                                        background-color: #2E8B57;\n                                                    }\n        \n                                                    ";
                      document.head.appendChild(_0x332c25);
                      const _0x5ce269 = document.createElement("div");
                      _0x5ce269.classList.add("product");
                      const _0x4e8f82 = document.createElement("div");
                      _0x4e8f82.classList.add("productcen_content");
                      _0x5ce269.appendChild(_0x4e8f82);
                      const _0x221050 = document.createElement("div");
                      _0x221050.classList.add("tanchukuang_bg11");
                      const _0x3e2ca7 = document.createElement("div");
                      _0x3e2ca7.classList.add("picture");
                      const _0x2875e0 = document.createElement("div");
                      _0x2875e0.classList.add("picture_top");
                      const _0x49733c = document.createElement("span");
                      _0x49733c.textContent = "滞销风险商品详情";
                      const _0x57beba = document.createElement("a");
                      _0x57beba.classList.add("myclos");
                      _0x57beba.textContent = "×";
                      _0x2875e0.appendChild(_0x49733c);
                      _0x2875e0.appendChild(_0x57beba);
                      const _0x15e7ad = document.createElement("div");
                      _0x15e7ad.classList.add("picture_bottom");
                      const _0x3085c8 = document.createElement("div");
                      _0x3085c8.classList.add("picture_left");
                      const _0x505924 = document.createElement("div");
                      _0x505924.classList.add("picture_img");
                      const _0x3cfa2d = document.createElement("div");
                      _0x3cfa2d.classList.add("product-info");
                      const _0x5b504b = document.createElement("h2");
                      _0x5b504b.setAttribute("id", "productName");
                      const _0x47a439 = document.createElement("p"),
                        _0x4037ae = document.createElement("strong");
                      _0x4037ae.textContent = "加入站点天数：";
                      const _0x393df2 = document.createElement("span");
                      _0x393df2.setAttribute("id", "daysOnSite");
                      const _0x35dc87 = document.createElement("hr"),
                        _0x1bc87d = document.createElement("strong");
                      _0x1bc87d.textContent = "SKC：";
                      const _0x4dcaa3 = document.createElement("span");
                      _0x4dcaa3.setAttribute("id", "skcNumber");
                      _0x47a439.appendChild(_0x4037ae);
                      _0x47a439.appendChild(_0x393df2);
                      _0x47a439.appendChild(_0x35dc87);
                      _0x47a439.appendChild(_0x1bc87d);
                      _0x47a439.appendChild(_0x4dcaa3);
                      _0x3cfa2d.appendChild(_0x5b504b);
                      _0x3cfa2d.appendChild(_0x47a439);
                      const _0x4e433c = document.createElement("div");
                      _0x4e433c.classList.add("table-container");
                      const _0x57c8d9 = document.createElement("table");
                      _0x57c8d9.setAttribute("id", "productTable");
                      const _0x26646f = document.createElement("thead"),
                        _0x614fdb = document.createElement("tr"),
                        _0x158244 = document.createElement("th");
                      _0x158244.textContent = "商品SKU";
                      const _0xbc1ef1 = document.createElement("th");
                      _0xbc1ef1.textContent = "申报价格";
                      const _0x351cad = document.createElement("th");
                      _0x351cad.textContent = "可用库存数";
                      const _0x5d50e8 = document.createElement("th");
                      _0x5d50e8.id = "myBuyerSkuId";
                      _0x5d50e8.textContent = "SKU";
                      const _0x214bac = document.createElement("th");
                      _0x214bac.id = "myBuyertodaySaler";
                      _0x214bac.textContent = "今日销量";
                      const _0x4f3e17 = document.createElement("th");
                      _0x4f3e17.id = "myBuyerqitianSaler";
                      _0x4f3e17.textContent = "近7天销量";
                      const _0x4ab92a = document.createElement("th");
                      _0x4ab92a.id = "myBuyersanshiSaler";
                      _0x4ab92a.textContent = "近30天销量";
                      _0x614fdb.appendChild(_0x158244);
                      _0x614fdb.appendChild(_0xbc1ef1);
                      _0x614fdb.appendChild(_0x351cad);
                      _0x614fdb.appendChild(_0x5d50e8);
                      _0x614fdb.appendChild(_0x214bac);
                      _0x614fdb.appendChild(_0x4f3e17);
                      _0x614fdb.appendChild(_0x4ab92a);
                      _0x26646f.appendChild(_0x614fdb);
                      const _0x1fd698 = document.createElement("tbody"),
                        _0x5eb8b9 = document.createElement("div");
                      _0x5eb8b9.classList.add("details-button-container");
                      const _0x97d6a8 = document.createElement("button");
                      _0x97d6a8.classList.add("details-button");
                      _0x97d6a8.textContent = "跳转商品详情";
                      _0x5eb8b9.appendChild(_0x97d6a8);
                      _0x57c8d9.appendChild(_0x26646f);
                      _0x57c8d9.appendChild(_0x1fd698);
                      _0x57c8d9.appendChild(_0x5eb8b9);
                      _0x4e433c.appendChild(_0x57c8d9);
                      _0x505924.appendChild(_0x3cfa2d);
                      _0x505924.appendChild(_0x4e433c);
                      _0x3085c8.appendChild(_0x505924);
                      const _0x52493b = document.createElement("div");
                      _0x52493b.classList.add("picture_right");
                      const _0x30f6bc = document.createElement("div");
                      _0x30f6bc.classList.add("picture_name");
                      const _0x2524ce = document.createElement("h3");
                      _0x2524ce.textContent = "滞销风险商品";
                      _0x30f6bc.appendChild(_0x2524ce);
                      const _0x4cc311 = document.createElement("div");
                      _0x4cc311.classList.add("picture_suo");
                      const _0xd93ddd = document.createElement("div");
                      _0xd93ddd.classList.add("picture_suo_t");
                      _0xd93ddd.style.display = "block";
                      _0x4cc311.appendChild(_0xd93ddd);
                      _0x52493b.appendChild(_0x30f6bc);
                      _0x52493b.appendChild(_0x4cc311);
                      _0x15e7ad.appendChild(_0x3085c8);
                      _0x15e7ad.appendChild(_0x52493b);
                      _0x3e2ca7.appendChild(_0x2875e0);
                      _0x3e2ca7.appendChild(_0x15e7ad);
                      _0x5ce269.appendChild(_0x221050);
                      _0x5ce269.appendChild(_0x3e2ca7);
                      document.body.appendChild(_0x5ce269);
                      document.querySelector(".picture").style.display = "none";
                      document.querySelector(".tanchukuang_bg11").style.display = "none";
                      document.querySelector(".myclos").addEventListener("click", function () {
                        document.querySelector(".picture").style.display = "none";
                        document.querySelector(".tanchukuang_bg11").style.display = "none";
                      });
                      document.querySelector(".details-button").addEventListener("click", function () {
                        var _0x6c3357 = document.getElementById("productName").getAttribute("data-value"),
                          _0x2395ac = window.open("https://seller.kuajingmaihuo.com/main/sale-manage/main?=" + _0x6c3357);
                      });
                    }
                    function _0x5c2ccf() {
                      document.querySelectorAll(".InvValUnsoldGoods").forEach(function (_0x461187) {
                        _0x461187.addEventListener("click", function () {
                          ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x3522f0 => document.getElementById(_0x3522f0).style.display = "none");
                          var _0x1e8776 = _0x17fc40.InvValUnsoldGoodsDist;
                          if (Object.keys(_0x1e8776).length !== 0) {
                            document.querySelector(".picture_suo_t").innerHTML = "";
                            for (var _0x4be113 in _0x1e8776) {
                              const _0x4c4054 = document.createElement("div");
                              _0x4c4054.className = "picture_suo_img";
                              const _0x1343de = document.createElement("img");
                              _0x1343de.className = "lazy";
                              _0x1343de.src = _0x1e8776[_0x4be113].shopPhotoUrl;
                              _0x1343de.setAttribute("data-value", _0x4be113);
                              _0x4c4054.appendChild(_0x1343de);
                              document.querySelector(".picture_suo_t").appendChild(_0x4c4054);
                            }
                            document.querySelector(".picture").style.display = "block";
                            document.querySelector(".tanchukuang_bg11").style.display = "block";
                            document.querySelectorAll(".picture_suo_img").forEach(function (_0x1544a6) {
                              _0x1544a6.addEventListener("click", function () {
                                document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x3f2775) {
                                  _0x3f2775.classList.remove("suo-img");
                                });
                                this.classList.add("suo-img");
                                var _0x19339a = _0x1544a6.querySelector("img").getAttribute("data-value");
                                const _0x1125c3 = _0x1e8776[_0x19339a].productName,
                                  _0x81f452 = _0x1e8776[_0x19339a].daysOnSite,
                                  _0x212c34 = _0x1e8776[_0x19339a].skus,
                                  _0x244248 = _0x1e8776[_0x19339a].skcNumber;
                                document.getElementById("productName").textContent = "" + _0x1125c3;
                                document.getElementById("productName").setAttribute("data-value", _0x19339a);
                                document.getElementById("daysOnSite").textContent = _0x81f452 + "天";
                                document.getElementById("skcNumber").textContent = "" + _0x244248;
                                const _0xb3a047 = document.getElementById("productTable").querySelector("tbody");
                                _0xb3a047.innerHTML = "";
                                _0x212c34.forEach(_0x75fa31 => {
                                  const _0x3fc7a5 = document.createElement("tr"),
                                    _0x5f5b73 = document.createElement("td");
                                  _0x5f5b73.textContent = _0x75fa31.sku;
                                  _0x3fc7a5.appendChild(_0x5f5b73);
                                  const _0x2e4b96 = document.createElement("td");
                                  _0x2e4b96.textContent = parseFloat(_0x75fa31.price).toFixed(2);
                                  _0x3fc7a5.appendChild(_0x2e4b96);
                                  const _0x1a175c = document.createElement("td");
                                  _0x1a175c.textContent = _0x75fa31.stock;
                                  _0x3fc7a5.appendChild(_0x1a175c);
                                  _0xb3a047.appendChild(_0x3fc7a5);
                                });
                              });
                            });
                            document.querySelector(".picture_suo_img").click();
                            document.querySelector(".picture_top").querySelector("span").innerText = "滞销风险商品详情";
                            document.querySelector(".picture_name").querySelector("H3").innerText = "滞销风险商品(" + Object.keys(_0x1e8776).length + ")";
                          }
                        });
                      });
                      document.querySelectorAll(".invValueUnsoldRiskInventory").forEach(function (_0x2ba28e) {
                        _0x2ba28e.addEventListener("click", function () {
                          ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x1f5bfb => document.getElementById(_0x1f5bfb).style.display = "none");
                          var _0x116c42 = _0x17fc40.invValueUnsoldRiskInventoryDict;
                          if (Object.keys(_0x116c42).length !== 0) {
                            document.querySelector(".picture_suo_t").innerHTML = "";
                            for (var _0x2a9c77 in _0x116c42) {
                              const _0x1b1ed9 = document.createElement("div");
                              _0x1b1ed9.className = "picture_suo_img";
                              const _0x41cd9d = document.createElement("img");
                              _0x41cd9d.className = "lazy";
                              _0x41cd9d.src = _0x116c42[_0x2a9c77].shopPhotoUrl;
                              _0x41cd9d.setAttribute("data-value", _0x2a9c77);
                              _0x1b1ed9.appendChild(_0x41cd9d);
                              document.querySelector(".picture_suo_t").appendChild(_0x1b1ed9);
                            }
                            document.querySelector(".picture").style.display = "block";
                            document.querySelector(".tanchukuang_bg11").style.display = "block";
                            document.querySelectorAll(".picture_suo_img").forEach(function (_0x45becb) {
                              _0x45becb.addEventListener("click", function () {
                                document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x107900) {
                                  _0x107900.classList.remove("suo-img");
                                });
                                this.classList.add("suo-img");
                                var _0x29baab = _0x45becb.querySelector("img").getAttribute("data-value");
                                const _0x447565 = _0x116c42[_0x29baab].productName,
                                  _0xbbbfd6 = _0x116c42[_0x29baab].daysOnSite,
                                  _0x66d115 = _0x116c42[_0x29baab].skus,
                                  _0x466774 = _0x116c42[_0x29baab].skcNumber;
                                document.getElementById("productName").textContent = "" + _0x447565;
                                document.getElementById("productName").setAttribute("data-value", _0x29baab);
                                document.getElementById("daysOnSite").textContent = _0xbbbfd6 + "天";
                                document.getElementById("skcNumber").textContent = "" + _0x466774;
                                const _0x351ae9 = document.getElementById("productTable").querySelector("tbody");
                                _0x351ae9.innerHTML = "";
                                _0x66d115.forEach(_0x4de964 => {
                                  {
                                    const _0x3f0d26 = document.createElement("tr"),
                                      _0x9194f5 = document.createElement("td");
                                    _0x9194f5.textContent = _0x4de964.sku;
                                    _0x3f0d26.appendChild(_0x9194f5);
                                    const _0x222bdb = document.createElement("td");
                                    _0x222bdb.textContent = _0x4de964.price.toFixed(2);
                                    _0x3f0d26.appendChild(_0x222bdb);
                                    const _0x427d78 = document.createElement("td");
                                    _0x427d78.textContent = _0x4de964.stock;
                                    _0x3f0d26.appendChild(_0x427d78);
                                    _0x351ae9.appendChild(_0x3f0d26);
                                  }
                                });
                              });
                            });
                            document.querySelector(".picture_suo_img").click();
                            document.querySelector(".picture_top").querySelector("span").innerText = "滞销商品详情";
                            document.querySelector(".picture_name").querySelector("H3").innerText = "滞销商品(" + Object.keys(_0x116c42).length + ")";
                          }
                        });
                      });
                      document.querySelector(".mySales").addEventListener("click", function () {
                        _0x1b0ca0(_0x17fc40.saveSaleExcel, "今日销售数据.xlsx");
                      });
                    }
                    _0x5c2ccf();
                    document.querySelector("#myDisplayUpdates").addEventListener("click", async function () {
                      {
                        document.querySelector("#myDisplayUpdates").style.display = "none";
                        document.getElementById("displayKeyInformation").remove();
                        _0x3d0b29(_0x208840);
                        var _0x3a370c = await _0xb52f9(),
                          _0x7fb99b = await _0x4dae4b(_0x3a370c, "2");
                        document.getElementById("loadingAnimation").remove();
                        _0x36b6a1(_0x208840, _0x7fb99b);
                        document.querySelector("#myDisplayUpdates").style.display = "block";
                        _0x5c2ccf();
                      }
                    });
                    document.querySelector(".mysearchMs-button").addEventListener("click", async function () {
                      ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x36241b => document.getElementById(_0x36241b).style.display = "");
                      _0x5f2905();
                      var _0x18c450 = document.querySelector("#myMsSearchInput").value.toLowerCase(),
                        _0x4410df = await _0xb52f9();
                      const _0x46980c = await new Promise((_0x47a995, _0x202e85) => {
                        chrome.runtime.sendMessage({
                          "type": "getMsCorrespondingProducts",
                          "msInput": _0x18c450,
                          "maillid": _0x4410df
                        }, _0x3a98f7 => {
                          chrome.runtime.lastError ? _0x202e85(chrome.runtime.lastError) : _0x47a995(_0x3a98f7);
                        });
                      });
                      var _0x457bb7 = _0x46980c.data ? _0x46980c.data : {};
                      _0x4eec58();
                      if (Object.keys(_0x457bb7).length !== 0) {
                        {
                          document.querySelector(".picture_suo_t").innerHTML = "";
                          for (var _0x9ec891 in _0x457bb7) {
                            {
                              const _0x2b19bf = document.createElement("div");
                              _0x2b19bf.className = "picture_suo_img";
                              const _0x214f43 = document.createElement("img");
                              _0x214f43.className = "lazy";
                              _0x214f43.src = _0x457bb7[_0x9ec891].shopPhotoUrl;
                              _0x214f43.setAttribute("data-value", _0x9ec891);
                              _0x2b19bf.appendChild(_0x214f43);
                              document.querySelector(".picture_suo_t").appendChild(_0x2b19bf);
                            }
                          }
                          document.querySelector(".picture").style.display = "block";
                          document.querySelector(".tanchukuang_bg11").style.display = "block";
                          document.querySelectorAll(".picture_suo_img").forEach(function (_0x317812) {
                            _0x317812.addEventListener("click", function () {
                              document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x2e072d) {
                                _0x2e072d.classList.remove("suo-img");
                              });
                              this.classList.add("suo-img");
                              var _0x4593ac = _0x317812.querySelector("img").getAttribute("data-value");
                              const _0x5e1133 = _0x457bb7[_0x4593ac].productName,
                                _0x321c61 = _0x457bb7[_0x4593ac].daysOnSite,
                                _0x10d0ba = _0x457bb7[_0x4593ac].skus,
                                _0x4e5134 = _0x457bb7[_0x4593ac].skcID;
                              document.getElementById("productName").textContent = "" + _0x5e1133;
                              document.getElementById("productName").setAttribute("data-value", _0x4593ac);
                              document.getElementById("daysOnSite").textContent = _0x321c61 + "天";
                              document.getElementById("skcNumber").textContent = "" + _0x4e5134;
                              const _0x187b16 = document.getElementById("productTable").querySelector("tbody");
                              _0x187b16.innerHTML = "";
                              _0x10d0ba.forEach(_0x401d51 => {
                                {
                                  const _0x429e81 = document.createElement("tr"),
                                    _0x597921 = document.createElement("td");
                                  _0x597921.textContent = _0x401d51.sku;
                                  _0x429e81.appendChild(_0x597921);
                                  const _0x8d0d11 = document.createElement("td");
                                  _0x8d0d11.textContent = parseFloat(_0x401d51.price).toFixed(2);
                                  _0x429e81.appendChild(_0x8d0d11);
                                  const _0x587fbf = document.createElement("td");
                                  _0x587fbf.textContent = _0x401d51.stock;
                                  _0x429e81.appendChild(_0x587fbf);
                                  const _0x1d8fbd = document.createElement("td");
                                  _0x1d8fbd.textContent = _0x401d51.skuID;
                                  _0x429e81.appendChild(_0x1d8fbd);
                                  const _0xc46516 = document.createElement("td");
                                  _0xc46516.textContent = _0x401d51.todaySaler;
                                  _0x429e81.appendChild(_0xc46516);
                                  const _0x4a89ea = document.createElement("td");
                                  _0x4a89ea.textContent = _0x401d51.qitianSaler;
                                  _0x429e81.appendChild(_0x4a89ea);
                                  const _0x339dea = document.createElement("td");
                                  _0x339dea.textContent = _0x401d51.sanshiSaler;
                                  _0x429e81.appendChild(_0x339dea);
                                  _0x187b16.appendChild(_0x429e81);
                                }
                              });
                            });
                          });
                          document.querySelector(".picture_suo_img").click();
                          document.querySelector(".picture_top").querySelector("span").innerText = "买手名称：" + _0x18c450;
                          document.querySelector(".picture_name").querySelector("H3").innerText = "管理商品（" + Object.keys(_0x457bb7).length + "）";
                        }
                      } else _0x19c80f("查无商品！");
                      chrome.runtime.sendMessage({
                        "type": "usageFunctionRecord",
                        "phone": _0x3f505b,
                        "name": "买手查商品"
                      });
                    });
                  } catch (_0x1e8772) {}
                }
                async function _0x4dae4b(_0x104543, _0x17c8aa) {
                  if (_0x104543 === "") {
                    return _0x5edbb9();
                  }
                  try {
                    const _0x4ebb6f = await new Promise((_0xd0c149, _0x53e59a) => {
                      chrome.runtime.sendMessage({
                        "type": "getSalesManagementList",
                        "mallid": _0x104543,
                        "model": _0x17c8aa
                      }, _0x1083a7 => {
                        if (chrome.runtime.lastError) {
                          _0x53e59a(chrome.runtime.lastError);
                        } else _0xd0c149(_0x1083a7);
                      });
                    });
                    return _0x4ebb6f.data;
                  } catch (_0x24bdfe) {
                    return _0x5edbb9();
                  }
                }
                function _0x5edbb9() {
                  return {
                    "todaySales": 0,
                    "declaredPrice": 0,
                    "availableStockAllPrice": 0,
                    "allAvailableStock": 0,
                    "allWaitReceiveNumPrice": 0,
                    "InvValUnsoldGoods": 0,
                    "invValueUnsoldRiskInventory": 0,
                    "InvValUnsoldGoodsDist": {},
                    "invValueUnsoldRiskInventoryDict": {},
                    "saveSaleExcel": []
                  };
                }
              }();else {
                if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage")) !function () {
                  window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x2f322a();
                  window.addEventListener("popstate", function (_0x9fdff2) {
                    window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x2f322a();
                  });
                  async function _0x2f322a() {
                    setInterval(function () {
                      try {
                        var _0x6eb3f0 = document.querySelector("[class*=order-manage_leftCnt]"),
                          _0x347e87 = document.querySelector("#openModal");
                        if (_0x6eb3f0 && !_0x347e87) {
                          const _0x1a0006 = document.createElement("style");
                          _0x1a0006.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            margin-top: 0;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 410px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                          fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x13f433 => _0x13f433.arrayBuffer()).then(_0x113c90 => {
                            crypto.subtle.digest("SHA-256", _0x113c90).then(_0x55effa => {
                              {
                                const _0xfe3b93 = Array.from(new Uint8Array(_0x55effa)),
                                  _0x12e5c3 = _0xfe3b93.map(_0x351ebc => _0x351ebc.toString(16).padStart(2, "0")).join("");
                                _0x12e5c3 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                                  "codePhone": ["", ""]
                                });
                              }
                            });
                          });
                          const _0x17223b = document.createElement("div");
                          _0x17223b.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal\" class=\"btn\"><img src=" + chrome.runtime.getURL("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">备货单处理</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"gululubhd\">咕噜噜备货单处理</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">导出今日已发货</button>\n                                                            <button id=\"func2\" class=\"func-btn\">取消普货所有待创建备货单</button>\n                                                            <button id=\"func3\" class=\"func-btn\">导出普货历史备货单数据</button>\n                                                             <!-- 日期输入框（隐藏） -->\n                                                            <input type=\"text\" id=\"dateInput\" placeholder=\"请选择日期\" style=\"display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin-top: 10px; width: 180px;\">\n\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                                                                   \n                                                    ";
                          document.head.appendChild(_0x1a0006);
                          _0x6eb3f0.appendChild(_0x17223b);
                          const _0x559d43 = document.getElementById("openModal"),
                            _0x491c59 = document.getElementById("closeModal"),
                            _0x5da4ad = document.getElementById("modal"),
                            _0xfb5129 = document.getElementById("overlay"),
                            _0x1e39ad = document.getElementById("func1"),
                            _0x154084 = document.getElementById("func2"),
                            _0xe6f99 = document.getElementById("func3");
                          _0x559d43.addEventListener("click", () => {
                            "咕噜噜备货单处理".replace(/\\u([\d\w]{4})/gi, (_0x5a2986, _0x2d9a1c) => String.fromCharCode(parseInt(_0x2d9a1c, 16))) == document.querySelector("#gululubhd").innerText ? "" : !function () {
                              chrome.storage.local.set({
                                "codePhone": ["", ""]
                              });
                              window.location.reload();
                            }();
                            _0x5da4ad.style.display = "block";
                            _0xfb5129.style.display = "block";
                          });
                          _0x491c59.addEventListener("click", () => {
                            _0x5da4ad.style.display = "none";
                            _0xfb5129.style.display = "none";
                          });
                          _0xfb5129.addEventListener("click", () => {
                            _0x5da4ad.style.display = "none";
                            _0xfb5129.style.display = "none";
                          });
                          _0x1e39ad.addEventListener("click", async () => {
                            {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "导出今日发货数据"
                              });
                              _0x5da4ad.style.display = "none";
                              _0xfb5129.style.display = "none";
                              if (_0x2f4de2.data.shopState == "正常") {
                                var _0x8bfc6c = await _0xb52f9();
                                if (_0x2f4de2.data.on == "yb") {
                                  _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0x2f4de2.data.on = "cc") _0x5f2905(), _0x4068cf(_0x8bfc6c).then(_0x3a78ca => {
                                    var _0x20c42c = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0)),
                                      _0xb6ea8e = [];
                                    for (var _0x5c3186 = 0; _0x5c3186 < _0x3a78ca.length; _0x5c3186++) {
                                      var _0x5000c9 = [],
                                        _0x2d96ed = _0x3a78ca[_0x5c3186];
                                      if (parseInt(_0x2d96ed.deliverInfo.deliverTime) >= _0x20c42c) {
                                        {
                                          var _0x47d1ed = _0x2d96ed.subPurchaseOrderSn,
                                            _0x89b6ba = _0x2d96ed.productSkcId,
                                            _0x5491f5 = _0x2d96ed.productName;
                                          for (var _0x50df42 = 0; _0x50df42 < _0x2d96ed.skuQuantityDetailList.length; _0x50df42++) {
                                            {
                                              var _0xab0dcb = _0x2d96ed.skuQuantityDetailList[_0x50df42].productSkuId,
                                                _0xe4c69f = _0x2d96ed.skuQuantityDetailList[_0x50df42].className,
                                                _0x15ccd1 = parseInt(_0x2d96ed.skuQuantityDetailList[_0x50df42].deliverQuantity) ? parseFloat(_0x2d96ed.skuQuantityDetailList[_0x50df42].deliverQuantity) : 0,
                                                _0x4bfae9 = parseFloat(_0x2d96ed.skuQuantityDetailList[_0x50df42].supplierPrice) ? parseFloat(_0x2d96ed.skuQuantityDetailList[_0x50df42].supplierPrice) / 100 : 0,
                                                _0x4c1456 = _0x15ccd1 * _0x4bfae9;
                                              _0x5000c9.push([_0xab0dcb, _0xe4c69f, _0x15ccd1, _0x4bfae9.toFixed(2), _0x4c1456.toFixed(2)]);
                                            }
                                          }
                                          _0xb6ea8e.push([_0x47d1ed, _0x89b6ba, _0x5491f5, _0x5000c9]);
                                        }
                                      }
                                    }
                                    _0x4eec58();
                                    _0x5004de(_0xb6ea8e);
                                  }).catch(_0x4959b4 => {
                                    _0x4eec58();
                                    _0x19c80f("导出数据不完整，请检查网络后重新尝试");
                                  });else (_0x2f4de2.data.on = "fuck") && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  var _0x29b074 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  _0x19c80f("是否绑定当前店铺使用<br>" + _0x29b074, "可绑定帮助", _0x8bfc6c, _0x3f505b, _0x29b074);
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else {
                                    if (_0x2f4de2.data.shopState == "绑满") {
                                      _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              }
                            }
                          });
                          _0x154084.addEventListener("click", () => {
                            {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "取消待创建备货单"
                              });
                              _0x5da4ad.style.display = "none";
                              _0xfb5129.style.display = "none";
                              if (_0x2f4de2.data.shopState == "正常") {
                                {
                                  if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                    if (_0x2f4de2.data.on == "cc") _0x3130b9().then(_0x4cfc7a => {
                                      _0x34def9(_0x4cfc7a).then(() => {
                                        _0x19c80f("已完成，请点击查询或刷新页面查看！");
                                      });
                                    });else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  {
                                    var _0x52d459 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    _0x19c80f("是否绑定当前店铺使用<br>" + _0x52d459, "可绑定帮助", _0x253235, _0x3f505b, _0x52d459);
                                  }
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") {
                                    _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          });
                          _0x4961f2(_0x1e39ad, _0x154084, _0xe6f99, _0x17223b);
                        }
                      } catch (_0x389188) {}
                    }, 1500);
                  }
                  function _0x4961f2(_0x4e7adf, _0x39cc7f, _0x3c762e, _0x39c764) {
                    var _0x4b7730 = document.querySelector("#dateInput"),
                      _0x46c286 = flatpickr(_0x4b7730, {
                        "locale": "zh",
                        "mode": "range",
                        "dateFormat": "Y-m-d",
                        "closeOnSelect": false,
                        "appendTo": _0x39c764,
                        "maxDate": new Date().fp_incr(-1),
                        "onReady": (_0xedb334, _0x1c9f8a, _0x47bbc3) => {
                          const _0x57f5f9 = document.createElement("button");
                          _0x57f5f9.textContent = "确定";
                          _0x57f5f9.style.margin = "10px";
                          _0x57f5f9.style.padding = "5px 10px";
                          _0x57f5f9.style.backgroundColor = "#007BFF";
                          _0x57f5f9.style.color = "white";
                          _0x57f5f9.style.border = "none";
                          _0x57f5f9.style.borderRadius = "5px";
                          _0x57f5f9.style.cursor = "pointer";
                          _0x57f5f9.style.fontSize = "14px";
                          _0x57f5f9.style.transition = "background-color 0.3s";
                          _0x57f5f9.onmouseover = () => _0x57f5f9.style.backgroundColor = "#0056b3";
                          _0x57f5f9.onmouseout = () => _0x57f5f9.style.backgroundColor = "#007BFF";
                          _0x57f5f9.onclick = function () {
                            {
                              const _0x41b327 = _0x47bbc3.selectedDates;
                              if (_0x41b327.length === 2) {
                                {
                                  var [_0xe39a04, _0x3846f6] = _0x41b327;
                                  _0xe39a04 = flatpickr.formatDate(_0xe39a04, "Y-m-d") + " 00:00:00";
                                  _0x3846f6 = flatpickr.formatDate(_0x3846f6, "Y-m-d") + " 23:59:59";
                                  _0x47bbc3.close();
                                  _0x4b7730.style.display = "none";
                                  _0x4e7adf.style.display = "block";
                                  _0x39cc7f.style.display = "block";
                                  _0x5f2905();
                                  _0xb52f9().then(_0x47a4a5 => {
                                    chrome.runtime.sendMessage({
                                      "type": "exportStockListHistory",
                                      "mallId": _0x47a4a5,
                                      "startDate": _0xe39a04,
                                      "endDate": _0x3846f6
                                    }).then(_0xa3ffdc => {
                                      if (_0xa3ffdc) {
                                        if (_0xa3ffdc.length > 3000) {
                                          _0xa3ffdc.unshift(["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"]);
                                          _0x1b0ca0(_0xa3ffdc, _0xe39a04 + "至" + _0x3846f6 + "已发货备货单数据.xlsx");
                                        } else {
                                          {
                                            var _0x2e245a = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                                            _0x3de897(_0xa3ffdc, _0x2e245a, 1, _0xe39a04 + "至" + _0x3846f6 + "已发货备货单数据.xlsx");
                                          }
                                        }
                                      } else {
                                        _0x4eec58();
                                      }
                                    });
                                  });
                                }
                              }
                            }
                          };
                          _0x47bbc3.calendarContainer.appendChild(_0x57f5f9);
                        }
                      });
                    try {
                      _0x3c762e.addEventListener("click", () => {
                        {
                          chrome.runtime.sendMessage({
                            "type": "usageFunctionRecord",
                            "phone": _0x3f505b,
                            "name": "导出历史备货单"
                          });
                          if (_0x2f4de2.data.shopState == "正常") {
                            {
                              if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                if (_0x2f4de2.data.on == "cc") _0x4e7adf.style.display = "none", _0x39cc7f.style.display = "none", _0x4b7730.style.display = "block", _0x46c286.open();else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                              }
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "可绑") {
                              var _0x47b165 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              _0x19c80f("是否绑定当前店铺使用<br>" + _0x47b165, "可绑定帮助", _0x253235, _0x3f505b, _0x47b165);
                            } else {
                              if (_0x2f4de2.data.shopState == "超绑") {
                                _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              } else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      });
                    } catch (_0x127b4c) {
                      console.log(_0x127b4c);
                    }
                    document.addEventListener("click", function (_0xf12e90) {
                      !_0x4b7730.contains(_0xf12e90.target) && !_0x46c286.calendarContainer.contains(_0xf12e90.target) && _0xf12e90.target !== _0x3c762e && (_0x4b7730.style.display = "none", _0x4e7adf.style.display = "block", _0x39cc7f.style.display = "block", _0x46c286.close());
                    });
                  }
                }(), !function () {
                  let _0x24f3db = null,
                    _0xc22644 = null;
                  function _0x2d109c() {
                    var _0xbc03b6 = document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
                    let _0x37d7f3 = document.querySelector("#modifyInformationMy");
                    _0xbc03b6.forEach(function (_0x387af3) {
                      var _0x749f5f = _0x387af3.querySelectorAll("td");
                      if (_0x749f5f.length > 1) {
                        var _0x5665c2 = _0x749f5f[_0x749f5f.length - 2],
                          _0x41810b = _0x749f5f[_0x749f5f.length - 1],
                          _0xb4cfa5 = document.createElement("button");
                        _0xb4cfa5.textContent = "去隐私打印打包标签";
                        _0xb4cfa5.style.display = "inline-block";
                        _0xb4cfa5.style.padding = "4px 0px";
                        _0xb4cfa5.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                        _0xb4cfa5.style.borderRadius = "5px";
                        _0xb4cfa5.style.backgroundColor = "#009688";
                        _0xb4cfa5.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                        _0xb4cfa5.style.fontFamily = "Arial, sans-serif";
                        _0xb4cfa5.style.fontSize = "12px";
                        _0xb4cfa5.style.color = "#fff";
                        _0xb4cfa5.style.textAlign = "center";
                        _0xb4cfa5.style.cursor = "pointer";
                        _0xb4cfa5.style.transition = "transform 0.3s, box-shadow 0.3s";
                        _0xb4cfa5.style.marginTop = "3px";
                        _0xb4cfa5.style.height = "35px";
                        _0xb4cfa5.onmouseover = function () {
                          _0xb4cfa5.style.transform = "scale(1.1)";
                        };
                        _0xb4cfa5.onmouseleave = function () {
                          _0xb4cfa5.style.transform = "scale(1)";
                          _0xb4cfa5.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                        };
                        _0x5665c2.innerText === "打印商品打包标签\n打印商品条码" && !_0x5665c2.querySelector("button") && (_0xb4cfa5.addEventListener("click", function () {
                          chrome.runtime.sendMessage({
                            "type": "usageFunctionRecord",
                            "phone": _0x3f505b,
                            "name": "单次隐私打印"
                          });
                          if (_0x2f4de2.data.shopState == "正常") {
                            {
                              if (_0x2f4de2.data.on == "cc") {
                                var _0x213a3e = Array.from(_0x5665c2.querySelectorAll("span")).find(_0x3db83a => _0x3db83a.innerText.trim() === "打印商品打包标签");
                                if (_0x213a3e) {
                                  if (!_0x37d7f3) {
                                    let _0x30eefb = document.createElement("div");
                                    _0x30eefb.id = "modifyInformationMy";
                                    _0x30eefb.style.display = "none";
                                    document.body.appendChild(_0x30eefb);
                                  }
                                  _0x213a3e.click();
                                  setTimeout(() => {
                                    var _0x1f0a5d = document.querySelectorAll("#modifyInformationMy");
                                    for (var _0x414ae0 of _0x1f0a5d) {
                                      _0x414ae0.remove();
                                    }
                                  }, 4500);
                                }
                              } else _0x2f4de2.data.on == "yb" && _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "可绑") {
                              var _0x58c354 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              _0x19c80f("是否绑定当前店铺使用<br>" + _0x58c354, "可绑定帮助", _0x253235, _0x3f505b, _0x58c354);
                            } else {
                              if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }), _0x5665c2.appendChild(_0xb4cfa5));
                        if (_0x41810b.innerText === "打印商品打包标签\n打印商品条码" || _0x41810b.innerText === "打印商品打包标签\n打印商品条码\n调整包裹信息\n取消发货单") {
                          !_0x41810b.querySelector("button") && (_0xb4cfa5.addEventListener("click", function () {
                            {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "单次隐私打印"
                              });
                              if (_0x2f4de2.data.shopState == "正常") {
                                if (_0x2f4de2.data.on == "cc") {
                                  var _0x45d7fb = Array.from(_0x41810b.querySelectorAll("span")).find(_0x1d4561 => _0x1d4561.innerText.trim() === "打印商品打包标签");
                                  if (_0x45d7fb) {
                                    if (!_0x37d7f3) {
                                      {
                                        let _0x3559cf = document.createElement("div");
                                        _0x3559cf.id = "modifyInformationMy";
                                        _0x3559cf.style.display = "none";
                                        document.body.appendChild(_0x3559cf);
                                      }
                                    }
                                    _0x45d7fb.click();
                                    setTimeout(() => {
                                      var _0x2599f2 = document.querySelectorAll("#modifyInformationMy");
                                      for (var _0x52037c of _0x2599f2) {
                                        _0x52037c.remove();
                                      }
                                    }, 4500);
                                  }
                                } else {
                                  if (_0x2f4de2.data.on == "yb") {
                                    _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  var _0x49d943 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  _0x19c80f("是否绑定当前店铺使用<br>" + _0x49d943, "可绑定帮助", _0x253235, _0x3f505b, _0x49d943);
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          }), _0x41810b.appendChild(_0xb4cfa5));
                        }
                      }
                    });
                  }
                  function _0x2c0270() {
                    {
                      const _0x54e4d4 = document.querySelector("[class*=\"shipping-list_dividerGroup\"]"),
                        _0x44cfb6 = _0x54e4d4.querySelector("[data-testid=\"beast-core-button\"]");
                      let _0x408eb5 = document.querySelector("#modifyInformationMy");
                      const _0x442aef = "new-button-id",
                        _0x254e04 = document.getElementById(_0x442aef);
                      if (!_0x44cfb6.disabled) {
                        if (!_0x254e04) {
                          const _0x4b0be0 = document.createElement("button");
                          _0x4b0be0.id = _0x442aef;
                          _0x4b0be0.innerText = "咕噜噜批量隐私打印";
                          _0x4b0be0.type = "button";
                          _0x4b0be0.style.display = "inline-block";
                          _0x4b0be0.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                          _0x4b0be0.style.borderRadius = "5px";
                          _0x4b0be0.style.backgroundColor = "#009688";
                          _0x4b0be0.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          _0x4b0be0.style.fontFamily = "auto";
                          _0x4b0be0.style.fontSize = "14px";
                          _0x4b0be0.style.color = "#fff";
                          _0x4b0be0.style.textAlign = "center";
                          _0x4b0be0.style.cursor = "pointer";
                          _0x4b0be0.style.transition = "transform 0.3s, box-shadow 0.3s";
                          _0x4b0be0.style.marginRight = "8px";
                          _0x4b0be0.style.height = "30px";
                          _0x4b0be0.onmouseover = function () {
                            _0x4b0be0.style.transform = "scale(1.1)";
                          };
                          _0x4b0be0.onmouseleave = function () {
                            _0x4b0be0.style.transform = "scale(1)";
                            _0x4b0be0.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          };
                          _0x44cfb6.insertAdjacentElement("afterend", _0x4b0be0);
                          _0x4b0be0.addEventListener("click", function () {
                            {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "批量隐私打印"
                              });
                              if (_0x2f4de2.data.shopState == "正常") {
                                {
                                  if (_0x2f4de2.data.on == "cc") {
                                    var _0x20d2fd = Array.from(_0x54e4d4.querySelectorAll("button")).find(_0x1bc3db => _0x1bc3db.innerText.trim() === "批量打印商品打包标签");
                                    if (_0x20d2fd) {
                                      if (!_0x408eb5) {
                                        let _0x4feeba = document.createElement("div");
                                        _0x4feeba.id = "modifyInformationMy";
                                        _0x4feeba.style.display = "none";
                                        document.body.appendChild(_0x4feeba);
                                      }
                                      _0x20d2fd.click();
                                      setTimeout(() => {
                                        var _0x40d654 = document.querySelectorAll("#modifyInformationMy");
                                        for (var _0xed2b69 of _0x40d654) {
                                          _0xed2b69.remove();
                                        }
                                      }, 4500);
                                    }
                                  } else _0x2f4de2.data.on == "yb" && _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  {
                                    var _0x69379 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    _0x19c80f("是否绑定当前店铺使用<br>" + _0x69379, "可绑定帮助", _0x253235, _0x3f505b, _0x69379);
                                  }
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          });
                        }
                      } else {
                        _0x254e04 && _0x254e04.remove();
                      }
                    }
                  }
                  if (_0x24f3db === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                    _0x24f3db = new MutationObserver(_0x2d109c);
                    _0x24f3db.observe(document.body, {
                      "childList": true,
                      "subtree": true
                    });
                  }
                  if (_0xc22644 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                    _0xc22644 = new MutationObserver(_0x2c0270);
                    _0xc22644.observe(document.body, {
                      "childList": true,
                      "subtree": true
                    });
                  }
                }(), !function () {
                  let _0x1b2a50 = null;
                  async function _0xaa590e() {
                    async function _0x472d03(_0x12b8e7, _0x359b59) {
                      var _0x1ce469 = _0x12b8e7.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                      if (_0x1ce469) {
                        _0x54b22e(_0x1ce469, _0x359b59);
                        _0x1a1b92(_0x1ce469, "input");
                        _0x1a1b92(_0x1ce469, "change");
                        _0x1a1b92(_0x12b8e7, "input");
                        _0x1a1b92(_0x12b8e7, "change");
                      }
                    }
                    function _0x1a1b92(_0xdb08cf, _0x4784b0) {
                      {
                        var _0x474690 = new Event(_0x4784b0, {
                          "bubbles": true
                        });
                        _0xdb08cf.dispatchEvent(_0x474690);
                      }
                    }
                    function _0x54b22e(_0x239473, _0x5b539b) {
                      {
                        var _0x57050f = _0x239473.valueTracker && _0x239473.valueTracker.getValue;
                        _0x57050f && (_0x239473.valueTracker.getValue = () => "");
                        _0x239473.value = _0x5b539b;
                        var _0x2e5ec7 = new InputEvent("input", {
                          "bubbles": true,
                          "cancelable": true
                        });
                        _0x239473.dispatchEvent(_0x2e5ec7);
                        _0x57050f && (_0x239473.valueTracker.getValue = _0x57050f);
                      }
                    }
                    const _0x954429 = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]"),
                      _0x5821a3 = Array.from(_0x954429.querySelectorAll("tr")),
                      _0x2970dc = [];
                    let _0x177a64 = [],
                      _0x30072f = 0;
                    _0x5821a3.forEach(_0x50b720 => {
                      {
                        const _0x3bf219 = _0x50b720.querySelector("td");
                        if (_0x3bf219) {
                          const _0x389d17 = parseInt(_0x3bf219.getAttribute("rowspan"), 10);
                          if (_0x389d17 > 1) {
                            _0x177a64.length > 0 && (_0x2970dc.push(_0x177a64), _0x177a64 = []);
                            _0x30072f = _0x389d17;
                          }
                        }
                        _0x177a64.push(_0x50b720);
                        _0x30072f--;
                        _0x30072f <= 0 && (_0x2970dc.push(_0x177a64), _0x177a64 = []);
                      }
                    });
                    if (_0x177a64.length > 0) {
                      _0x2970dc.push(_0x177a64);
                    }
                    async function _0x5c8383(_0x121806) {
                      try {
                        {
                          const _0xec2a84 = _0x121806.querySelectorAll("span");
                          _0xec2a84.length > 2 ? _0xec2a84[1].click() : _0xec2a84[0].click();
                        }
                      } catch (_0x23ed2c) {
                        console.error("Error in clickAndSetValue:", _0x23ed2c);
                      }
                    }
                    async function _0x3a96eb(_0x2f5c04) {
                      for (const [_0x4185a8, _0x4e5f0b] of _0x2f5c04.entries()) {
                        {
                          if (_0x4e5f0b.length > 0) {
                            const _0x123599 = _0x4e5f0b[0],
                              _0x516352 = _0x123599.querySelector("td");
                            if (_0x516352) {
                              const _0x5dce0a = _0x516352.querySelector("label");
                              if (_0x5dce0a) {
                                {
                                  const _0x108c33 = _0x5dce0a.getAttribute("data-checked");
                                  if (_0x108c33 === "true") {
                                    {
                                      var _0xcebfb0 = _0x4e5f0b[_0x4e5f0b.length - 1].querySelectorAll("td");
                                      if (_0xcebfb0.length < 2) {
                                        _0xcebfb0[0].querySelector("a").click();
                                        await _0x249184("[data-testid=\"beast-core-drawer-content\"]", "");
                                        const _0x336a04 = _0x35c2c6 => new Promise(_0x245760 => setTimeout(_0x245760, _0x35c2c6));
                                        _0x336a04(500);
                                        while (1) {
                                          {
                                            const _0x12aabc = Array.from(document.querySelectorAll("[data-testid=\"beast-core-table-middle-tbody\"]")).pop(),
                                              _0x4fc84a = Array.from(_0x12aabc.querySelectorAll("tr")).map(_0x18d38a => _0x18d38a.querySelectorAll("td")[2]);
                                            for (var _0x10ea45 of _0x4fc84a) {
                                              await _0x5c8383(_0x10ea45);
                                              await Promise.all(Array.from(document.querySelectorAll("[data-testid=\"beast-core-portal\"]")).map(async _0x57763d => {
                                                if (_0x57763d) {
                                                  {
                                                    var _0x50600a = _0x57763d.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x7a485e => _0x7a485e >= "0" && _0x7a485e <= "9").join("");
                                                    _0x472d03(_0x57763d, _0x50600a);
                                                    await new Promise(_0x2b341b => setTimeout(_0x2b341b, 50));
                                                    _0x57763d.querySelector("[data-testid=\"beast-core-button\"]").click();
                                                    _0x57763d.style.display = "none";
                                                  }
                                                }
                                              }));
                                            }
                                            var _0x1c3f88 = document.querySelector("[data-testid=\"beast-core-pagination-next\"]");
                                            if (_0x1c3f88) {
                                              {
                                                if (_0x1c3f88.className.includes("disabled")) {
                                                  var _0x307a37 = new MouseEvent("click", {
                                                    "bubbles": true,
                                                    "cancelable": true,
                                                    "view": window
                                                  });
                                                  document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0x307a37);
                                                  break;
                                                }
                                                _0x1c3f88.click();
                                                _0x336a04(500);
                                              }
                                            } else {
                                              {
                                                var _0x307a37 = new MouseEvent("click", {
                                                  "bubbles": true,
                                                  "cancelable": true,
                                                  "view": window
                                                });
                                                document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0x307a37);
                                                break;
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        {
                                          const _0x134c79 = _0x123599.querySelectorAll("td")[5];
                                          if (_0x134c79) {
                                            await _0x5c8383(_0x134c79);
                                          }
                                          for (const _0x40b95b of _0x4e5f0b.slice(1)) {
                                            var _0x1d13f3 = _0x40b95b.querySelectorAll("td");
                                            const _0x1ff468 = _0x1d13f3[2];
                                            _0x1ff468 && (await _0x5c8383(_0x1ff468));
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    async function _0x56bb25() {
                      document.querySelectorAll("[data-testid=\"beast-core-portal\"]").forEach(_0x1fff20 => {
                        {
                          if (_0x1fff20) {
                            var _0xd4f6a0 = _0x1fff20.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x33c054 => _0x33c054 >= "0" && _0x33c054 <= "9").join("");
                            _0x472d03(_0x1fff20, _0xd4f6a0);
                            setTimeout(() => {
                              _0x1fff20.querySelector("[data-testid=\"beast-core-button\"]").click();
                              _0x1fff20.style.display = "none";
                            }, 500);
                          }
                        }
                      });
                    }
                    await _0x3a96eb(_0x2970dc);
                    await _0x56bb25();
                    setTimeout(() => {
                      _0x5021ce("已将勾选商品的实际发货数量调整至允许的最大值。", 3000);
                    }, 2000);
                  }
                  function _0x41444e() {
                    const _0x2c644f = document.querySelector("[class*=\"shipping-desk_divider\"]");
                    var _0x26a986 = _0x2c644f.querySelector("[data-testid=\"beast-core-button\"]"),
                      _0x177171 = document.querySelector("#unique-button-id");
                    if (!_0x26a986.disabled) {
                      var _0x216ca2 = _0x2c644f.querySelector("div");
                      if (_0x2c644f && !_0x177171) {
                        const _0x2f5760 = document.createElement("button");
                        _0x2f5760.textContent = "勾选商品设置为最大发货数量";
                        _0x2f5760.style.backgroundColor = "#009688";
                        _0x2f5760.style.color = "white";
                        _0x2f5760.style.fontSize = "15px";
                        _0x2f5760.style.border = "none";
                        _0x2f5760.style.borderRadius = "5px";
                        _0x2f5760.style.cursor = "pointer";
                        _0x2f5760.style.marginRight = "10px";
                        _0x2f5760.style.height = "28px";
                        _0x2f5760.id = "unique-button-id";
                        _0x2f5760.addEventListener("click", () => {
                          chrome.runtime.sendMessage({
                            "type": "usageFunctionRecord",
                            "phone": _0x3f505b,
                            "name": "勾选商品设置最大发货数量"
                          });
                          if (_0x2f4de2.data.shopState == "正常") {
                            {
                              if (_0x2f4de2.data.on == "cc") _0xaa590e();else _0x2f4de2.data.on == "yb" && _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                            }
                          } else {
                            if (_0x2f4de2.data.shopState == "可绑") {
                              var _0x38ac36 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              _0x19c80f("是否绑定当前店铺使用<br>" + _0x38ac36, "可绑定帮助", _0x253235, _0x3f505b, _0x38ac36);
                            } else {
                              if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        });
                        _0x216ca2 && _0x216ca2.insertBefore(_0x2f5760, _0x216ca2.firstChild);
                      }
                    } else _0x177171 && _0x177171.remove();
                  }
                  _0x1b2a50 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-desk") && (_0x1b2a50 = setInterval(_0x41444e, 800));
                }(), !function () {
                  var _0x2b5c20 = null;
                  if (_0x2b5c20 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                    {
                      let _0x30e111 = document.querySelectorAll("#gudingDataMy");
                      for (var _0x550877 of _0x30e111) {
                        _0x550877.remove();
                      }
                      _0x2b5c20 = setInterval(_0x40b24f, 1500);
                    }
                  }
                  function _0x40b24f() {
                    let _0x1d9b12 = document.querySelector("[class*=\"index-module__col-query-btn-wrapper\"]");
                    var _0xfd0cea = document.querySelector("#gudingBut");
                    if (_0x1d9b12 && !_0xfd0cea) {
                      let _0x24d3a8 = document.createElement("button");
                      _0x24d3a8.id = "gudingBut";
                      _0x24d3a8.textContent = "开启咕噜噜数据定格";
                      _0x24d3a8.style.backgroundColor = "#009688";
                      _0x24d3a8.style.height = "28px";
                      _0x24d3a8.style.color = "white";
                      _0x24d3a8.style.fontSize = "15px";
                      _0x24d3a8.style.border = "none";
                      _0x24d3a8.style.borderRadius = "5px";
                      _0x24d3a8.style.cursor = "pointer";
                      _0x24d3a8.style.marginRight = "10px";
                      _0x24d3a8.style.display = "flex";
                      _0x24d3a8.style.alignItems = "center";
                      _0x24d3a8.style.justifyContent = "center";
                      _0x24d3a8.addEventListener("click", function () {
                        chrome.runtime.sendMessage({
                          "type": "usageFunctionRecord",
                          "phone": _0x3f505b,
                          "name": "咕噜噜数据定格"
                        });
                        if (_0x2f4de2.data.shopState == "正常") {
                          if (_0x2f4de2.data.on == "cc") {
                            if (_0x24d3a8.textContent === "开启咕噜噜数据定格") {
                              {
                                let _0x4b7863 = document.createElement("div");
                                _0x4b7863.id = "gudingDataMy";
                                _0x4b7863.style.display = "none";
                                document.body.appendChild(_0x4b7863);
                                _0x24d3a8.style.backgroundColor = "rgb(224 35 31)";
                                _0x24d3a8.textContent = "关闭咕噜噜数据定格";
                              }
                            } else {
                              let _0x1fa86b = document.querySelectorAll("#gudingDataMy");
                              for (var _0x581107 of _0x1fa86b) {
                                _0x581107.remove();
                              }
                              _0x24d3a8.style.backgroundColor = "#009688";
                              _0x24d3a8.textContent = "开启咕噜噜数据定格";
                            }
                          } else {
                            if (_0x2f4de2.data.on == "yb") {
                              _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                            }
                          }
                        } else {
                          if (_0x2f4de2.data.shopState == "可绑") {
                            var _0x140817 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                            _0x19c80f("是否绑定当前店铺使用<br>" + _0x140817, "可绑定帮助", _0x253235, _0x3f505b, _0x140817);
                          } else {
                            if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                          }
                        }
                      });
                      _0x1d9b12.insertBefore(_0x24d3a8, _0x1d9b12.firstChild);
                      clearTimeout(_0x2b5c20);
                    }
                  }
                }(), !function () {
                  var _0x2222a5 = "",
                    _0x1c481c = "",
                    _0x2222a5 = "";
                  chrome.runtime.onMessage.addListener((_0xd78ead, _0x3aeca3, _0x4aaeae) => {
                    {
                      if (_0xd78ead.action === "updateContent") return _0x2222a5(_0xd78ead.text), _0x4aaeae({
                        "code": "ok"
                      }), true;else {
                        if (_0xd78ead.action === "updateNumContent") return _0x1c481c(_0xd78ead.text), _0x4aaeae({
                          "code": "ok"
                        }), true;
                      }
                    }
                  });
                  var _0x33142e = null;
                  function _0x23c4bb() {
                    chrome.runtime.onMessage.addListener((_0x4a9c9e, _0x55a9dd, _0x267f53) => {
                      {
                        if (_0x4a9c9e.action === "updateContent") return addMessage(_0x4a9c9e.text), _0x267f53({
                          "code": "ok"
                        }), true;
                      }
                    });
                    if (!document.querySelector("#my-shopinfo-box")) {
                      const _0x47a879 = document.createElement("div");
                      _0x47a879.id = "my-shopinfo-box";
                      const _0x2e2fa9 = document.createElement("div");
                      _0x2e2fa9.id = "info-content";
                      const _0x28f51d = document.createElement("div");
                      _0x28f51d.id = "action-container";
                      const _0x3a47d2 = document.createElement("label");
                      _0x3a47d2.textContent = "同时创建发货单";
                      _0x3a47d2.className = "checkbox-label";
                      const _0x516e37 = document.createElement("input");
                      _0x516e37.type = "checkbox";
                      _0x516e37.id = "create-shipment-checkbox";
                      _0x516e37.className = "custom-checkbox";
                      _0x516e37.checked = true;
                      _0x3a47d2.prepend(_0x516e37);
                      const _0x239adf = document.createElement("label");
                      _0x239adf.textContent = "最大发货数量";
                      _0x239adf.className = "checkbox-label";
                      const _0x5663f4 = document.createElement("input");
                      _0x5663f4.type = "checkbox";
                      _0x5663f4.id = "create-maxFa-checkbox";
                      _0x5663f4.className = "custom-checkbox";
                      _0x5663f4.checked = true;
                      _0x239adf.prepend(_0x5663f4);
                      let _0xc05341 = document.createElement("button");
                      _0xc05341.id = "start-stop-btn";
                      _0xc05341.textContent = "启动咕噜噜加发货台";
                      _0xc05341.onclick = _0x368538;
                      const _0x12a60e = document.createElement("button");
                      _0x12a60e.id = "minimize-btn";
                      _0x12a60e.title = "点击最小化显示框";
                      _0x12a60e.textContent = "—";
                      _0x12a60e.onclick = () => {
                        _0x47a879.classList.add("minimized");
                        _0x2e2fa9.style.display = "none";
                        _0x28f51d.style.display = "none";
                        const _0x3f8b8b = document.createElement("button");
                        _0x3f8b8b.id = "maximize-btn";
                        _0x3f8b8b.textContent = "+";
                        _0x3f8b8b.onclick = () => {
                          _0x47a879.classList.remove("minimized");
                          _0x2e2fa9.style.display = "flex";
                          _0x28f51d.style.display = "flex";
                          _0x3f8b8b.remove();
                        };
                        _0x47a879.appendChild(_0x3f8b8b);
                        _0x3f8b8b.style.position = "absolute";
                      };
                      const _0xf5134a = document.createElement("div");
                      _0xf5134a.id = "footer-text";
                      _0xf5134a.textContent = "0";
                      const _0xabb1e9 = 80;
                      "启动咕噜噜加发货台".replace(/\\u([\d\w]{4})/gi, (_0x29eed1, _0x480a73) => String.fromCharCode(parseInt(_0x480a73, 16))) == _0xc05341.textContent ? "" : !function () {
                        chrome.storage.local.set({
                          "codePhone": ["", ""]
                        });
                        window.location.reload();
                      }();
                      function _0x146e5f(_0x546f2c) {
                        const _0x4df431 = document.createElement("p");
                        _0x4df431.textContent = _0x546f2c;
                        _0x2e2fa9.appendChild(_0x4df431);
                        if (_0x2e2fa9.children.length > _0xabb1e9) {
                          _0x2e2fa9.removeChild(_0x2e2fa9.firstChild);
                        }
                        _0x42dce8();
                      }
                      _0x2222a5 = _0x146e5f;
                      function _0x42dce8() {
                        const _0x1b8d77 = _0x2e2fa9.scrollHeight,
                          _0xee540c = _0x47a879.offsetHeight - _0x28f51d.offsetHeight,
                          _0x15c32b = _0x1b8d77 - _0xee540c;
                        _0xf39072(_0x15c32b);
                      }
                      function _0xf39072(_0x4b0632) {
                        {
                          const _0x461eda = 100;
                          let _0x38d5e3 = performance.now(),
                            _0x44fe8f = _0x2e2fa9.scrollTop;
                          function _0x38a9e5(_0x46d9f2) {
                            const _0x265a7a = _0x46d9f2 - _0x38d5e3,
                              _0x6381d = _0x265a7a / 1000 * _0x461eda,
                              _0x4a4bf4 = _0x44fe8f + _0x6381d;
                            _0x2e2fa9.scrollTop = Math.min(_0x4a4bf4, _0x4b0632);
                            _0x2e2fa9.scrollTop >= _0x4b0632 ? cancelAnimationFrame(_0x38a9e5) : requestAnimationFrame(_0x38a9e5);
                          }
                          requestAnimationFrame(_0x38a9e5);
                        }
                      }
                      _0x1c481c = function (_0x4f2103) {
                        _0xf5134a.textContent = "当前实际需要加发货台任务数：" + _0x4f2103;
                      };
                      _0x47a879.appendChild(_0x2e2fa9);
                      _0x47a879.appendChild(_0xf5134a);
                      _0x47a879.appendChild(_0x28f51d);
                      document.body.appendChild(_0x47a879);
                      function _0x5ebb39() {
                        const _0x1af4e5 = "initial-style";
                        let _0x3579e3 = document.getElementById(_0x1af4e5);
                        if (!_0x3579e3) {
                          _0x3579e3 = document.createElement("style");
                          _0x3579e3.id = _0x1af4e5;
                          document.head.appendChild(_0x3579e3);
                        }
                        _0x3579e3.textContent = "\n                                            /* 添加工具提示样式 */\n                                            #minimize-btn::before {\n                                              content: attr(title);\n                                              position: absolute;\n                                              bottom: 100%; /* 工具提示显示在按钮下方 */\n                                              left: 50%; /* 水平居中 */\n                                              transform: translateX(-50%);\n                                              visibility: hidden;\n                                              opacity: 0;\n                                              white-space: nowrap;\n                                              padding: 5px 10px;\n                                              background-color: #333;\n                                              color: #fff;\n                                              border-radius: 4px;\n                                              transition: visibility 0.2s, opacity 0.2s;\n                                              z-index: 1001; /* 确保工具提示位于显示框上方 */\n                                            }\n\n                                            #minimize-btn:hover::before {\n                                              visibility: visible;\n                                              opacity: 1;\n                                            }\n                                            #my-shopinfo-box {\n                                              position: fixed;\n                                              top: 20px;\n                                              right: 20px;\n                                              width: 400px;\n                                              height: 400px;\n                                              background: #f4f4f9;\n                                              border-radius: 12px;\n                                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                                              display: flex;\n                                              flex-direction: column;\n                                              z-index: 1000;\n                                              overflow: hidden; /* 隐藏所有溢出内容 */\n                                              transition: width 0.3s, height 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            #my-shopinfo-box.minimized {\n                                              width: 280px;\n                                              height: 40px;\n                                            }\n\n                                            #info-content {\n                                              flex: 1;\n                                              overflow-y: auto; /* 只显示竖直滚动条 */\n                                              background: #ffffff;\n                                              padding: 20px;\n                                              border-bottom: 1px solid #e0e0e0;\n                                              display: flex;\n                                              flex-direction: column;\n                                              gap: 10px;\n                                              scrollbar-width: none; /* Firefox 隐藏滚动条 */\n                                            }\n\n                                            #info-content::-webkit-scrollbar {\n                                              display: none; /* Chrome, Safari, and Opera 隐藏滚动条 */\n                                            }\n\n                                            #action-container {\n                                              display: flex;\n                                              justify-content: space-between;\n                                              align-items: center;\n                                              background: #ffffff;\n                                              border-top: 1px solid #e0e0e0;\n                                              padding: 10px 20px;\n                                            }\n\n                                            #action-container label {\n                                              font-size: 14px;\n                                              color: #333;\n                                            }\n\n                                            #action-container .custom-checkbox {\n                                            /* 勾选框的基本样式 */\n                                            width: 20px;\n                                            height: 20px;\n                                            margin-right: 10px;\n                                            accent-color: #007bff; /* 为勾选框添加颜色 */\n                                            border: 2px solid #e22929; /* 未选中时的边框颜色 */\n                                            border-radius: 3px;\n                                            outline: none;\n                                            cursor: pointer;\n                                            transition: border-color 0.3s;\n                                          }\n\n                                          #action-container .custom-checkbox:checked {\n                                            /* 选中状态的边框颜色 */\n                                            border-color: #007bff;\n                                          }\n\n                                          #action-container .checkbox-label {\n                                            display: inline-flex; /* 确保勾选框和文本在同一行 */\n                                            align-items: center; /* 垂直居中文本 */\n                                            user-select: none; /* 防止选中文本 */\n                                          }\n\n                                            #start-stop-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              cursor: pointer;\n                                              width: 180px;\n                                              font-size: 12px;\n                                              font-family: auto;\n                                              color: #fff;\n                                              margin-left: 5px;\n                                              padding: 8px 16px;\n                                              border-radius: 8px;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #start-stop-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #start-stop-btn.stop {\n                                              background: #dc3545;\n                                            }\n\n                                            #start-stop-btn.stop:hover {\n                                              background: #c82333;\n                                            }\n\n                                            #minimize-btn, #maximize-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              color: #fff;\n                                              font-size: 16px;\n                                              padding: 8px 12px;\n                                              margin-left: 10px;\n                                              border-radius: 50%;\n                                              cursor: pointer;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #minimize-btn:hover, #maximize-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #footer-text {\n                                              background: #f1f1f1;\n                                              padding: 15px;\n                                              font-size: 14px;\n                                              color: #666;\n                                              border-top: 1px solid #ddd;\n                                              text-align: center; /* 默认居中对齐 */\n                                              border-radius: 0 0 12px 12px;\n                                              transition: text-align 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            /* 当显示框最小化时，底部文本变为左对齐 */\n                                            #my-shopinfo-box.minimized #footer-text {\n                                              text-align: left;\n                                            }\n\n                                            /* 适应最大化按钮的位置 */\n                                            #maximize-btn {\n                                              position: relative;\n                                              top: 4px;\n                                              right: 0px;\n                                            }\n                                            ";
                      }
                      _0x5ebb39();
                      _0x28f51d.appendChild(_0x3a47d2);
                      _0x28f51d.appendChild(_0x239adf);
                      _0x28f51d.appendChild(_0xc05341);
                      _0x28f51d.appendChild(_0x12a60e);
                      _0x146e5f("正在加载随机拟人算法");
                      _0x146e5f("开始任务");
                      _0x8c707f(_0x47a879);
                      function _0x8c707f(_0x3affe0) {
                        let _0x36e605 = 0,
                          _0x25f49a = 0,
                          _0x172a21 = 0,
                          _0xb3436f = 0;
                        document.getElementById(_0x3affe0.id + "-header") ? document.getElementById(_0x3affe0.id + "-header").onmousedown = _0x12b742 : _0x3affe0.onmousedown = _0x12b742;
                        function _0x12b742(_0x5adb79) {
                          _0x5adb79 = _0x5adb79 || window.event;
                          _0x5adb79.preventDefault();
                          _0x172a21 = _0x5adb79.clientX;
                          _0xb3436f = _0x5adb79.clientY;
                          document.onmouseup = _0x378819;
                          document.onmousemove = _0x1916ce;
                        }
                        function _0x1916ce(_0x3407d8) {
                          _0x3407d8 = _0x3407d8 || window.event;
                          _0x3407d8.preventDefault();
                          _0x36e605 = _0x172a21 - _0x3407d8.clientX;
                          _0x25f49a = _0xb3436f - _0x3407d8.clientY;
                          _0x172a21 = _0x3407d8.clientX;
                          _0xb3436f = _0x3407d8.clientY;
                          _0x3affe0.style.top = _0x3affe0.offsetTop - _0x25f49a + "px";
                          _0x3affe0.style.left = _0x3affe0.offsetLeft - _0x36e605 + "px";
                        }
                        function _0x378819() {
                          document.onmouseup = null;
                          document.onmousemove = null;
                        }
                      }
                      function _0x368538() {
                        {
                          if (_0xc05341.textContent === "启动咕噜噜加发货台") {
                            _0xc05341.textContent = "停止任务";
                            _0xc05341.classList.add("stop");
                            _0x146e5f("任务已启动...");
                            const _0x2bc017 = _0x516e37.checked,
                              _0x4bef5e = _0x5663f4.checked,
                              _0x17bbcd = _0x5647d4();
                            if (_0x17bbcd.length === 0) {
                              _0x146e5f("没有可执行的任务");
                            } else _0x3130b9().then(_0x4fd33b => {
                              chrome.runtime.sendMessage({
                                "type": "addShipment",
                                "mallId": _0x4fd33b,
                                "wbCodeList": _0x17bbcd,
                                "joinDeliveryDesk": _0x2bc017,
                                "maxFa": _0x4bef5e
                              }, _0x11f812 => {
                                if (chrome.runtime.lastError) {} else _0x146e5f("任务执行成功");
                              });
                            }).catch(_0x32760d => {});
                          } else _0xc05341.textContent = "启动咕噜噜加发货台", _0xc05341.classList.remove("stop"), _0x146e5f("任务已停止..."), chrome.runtime.sendMessage({
                            "type": "clearWbCodeList"
                          }, _0x188f58 => {
                            if (chrome.runtime.lastError) {} else _0x47a879.remove();
                          });
                        }
                      }
                    }
                  }
                  function _0x5647d4() {
                    {
                      var _0x5f4d99 = [];
                      const _0x34354b = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]"),
                        _0x5c3783 = Array.from(_0x34354b.querySelectorAll("tr")),
                        _0x34a97f = [];
                      let _0x3bc409 = [],
                        _0x403bfb = 0;
                      while (_0x403bfb < _0x5c3783.length) {
                        {
                          const _0x220ef0 = _0x5c3783[_0x403bfb],
                            _0x4651b1 = _0x220ef0.querySelector("td");
                          if (_0x4651b1) {
                            const _0x5ab201 = parseInt(_0x4651b1.getAttribute("rowspan"), 10);
                            if (_0x5ab201 > 1) {
                              {
                                _0x3bc409.length > 0 && (_0x34a97f.push(_0x3bc409), _0x3bc409 = []);
                                for (let _0x2713e7 = 0; _0x2713e7 < _0x5ab201; _0x2713e7++) {
                                  _0x403bfb < _0x5c3783.length && (_0x3bc409.push(_0x5c3783[_0x403bfb]), _0x403bfb++);
                                }
                                continue;
                              }
                            }
                          }
                          _0x3bc409.push(_0x220ef0);
                          _0x403bfb++;
                        }
                      }
                      _0x3bc409.length > 0 && _0x34a97f.push(_0x3bc409);
                      for (const [_0x50c6c6, _0x52f494] of _0x34a97f.entries()) {
                        if (_0x52f494.length > 0) {
                          {
                            const _0x139720 = _0x52f494[0],
                              _0x10ceb6 = _0x139720.querySelectorAll("td");
                            if (_0x10ceb6[0]) {
                              {
                                const _0x48ebb3 = _0x10ceb6[0].querySelector("label");
                                if (_0x48ebb3) {
                                  const _0x507ee6 = _0x48ebb3.getAttribute("data-checked");
                                  if (_0x507ee6 === "true") for (var _0x4d0565 of _0x52f494) {
                                    {
                                      var _0x1a6bc7 = _0x4d0565.querySelectorAll("td"),
                                        _0x3bb6f1 = _0x1a6bc7[_0x1a6bc7.length - 1];
                                      if (_0x1a6bc7.length > 12) {
                                        if (_0x3bb6f1.innerText.includes("修改数量")) {
                                          var _0x184d8a = _0x3bb6f1.querySelectorAll("a")[2];
                                          if (!_0x184d8a.className.includes("disabled")) {
                                            {
                                              var _0x46a2db = _0x1a6bc7[1].innerText.split("\n")[0];
                                              _0x5f4d99.push(_0x46a2db);
                                            }
                                          }
                                        } else {
                                          var _0x184d8a = _0x3bb6f1.querySelectorAll("a")[1];
                                          if (!_0x184d8a.className.includes("disabled")) {
                                            {
                                              var _0x46a2db = _0x1a6bc7[1].innerText.split("\n")[0];
                                              _0x5f4d99.push(_0x46a2db);
                                            }
                                          }
                                        }
                                      } else {
                                        if (_0x1a6bc7.length > 6 && _0x1a6bc7.length < 12) {
                                          if (_0x3bb6f1.innerText.includes("修改数量")) {
                                            var _0x184d8a = _0x3bb6f1.querySelectorAll("a")[2];
                                            if (!_0x184d8a.className.includes("disabled")) {
                                              var _0x46a2db = _0x1a6bc7[0].innerText.split("\n")[0];
                                              _0x5f4d99.push(_0x46a2db);
                                            }
                                          } else {
                                            var _0x184d8a = _0x3bb6f1.querySelectorAll("a")[1];
                                            if (!_0x184d8a.className.includes("disabled")) {
                                              {
                                                var _0x46a2db = _0x1a6bc7[0].innerText.split("\n")[0];
                                                _0x5f4d99.push(_0x46a2db);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      return _0x5f4d99;
                    }
                  }
                  window.addEventListener("popstate", function (_0x4821c3) {
                    var _0x206ed2 = window.location.href;
                    if (_0x206ed2 = "https://seller.kuajingmaihuo.com/main/order-manage", _0x206ed2 = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x206ed2 = "https://seller.kuajingmaihuo.com/main/order-manage-custom") {
                      if (_0x33142e == null) {
                        _0x33142e = setInterval(_0x472f35, 1000);
                      }
                    }
                  });
                  function _0x4161cd() {
                    var _0x3ebac7 = window.location.href;
                    if (_0x3ebac7 = "https://seller.kuajingmaihuo.com/main/order-manage", _0x3ebac7 = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x3ebac7 = "https://seller.kuajingmaihuo.com/main/order-manage-custom") try {
                      var _0x1aec7b = document.querySelector("[class*=order-manage_leftCnt]");
                      if (!_0x1aec7b) return;
                      var _0x1e0edc = document.querySelector("[class*=\"CBX_outerWrapper\"][class*=\"CBX_checkbox\"][class*=\"CBX_medium\"]"),
                        _0x34323c = _0x1e0edc.getAttribute("data-checked"),
                        _0x16f870 = _0x1e0edc.getAttribute("data-indeterminate");
                      if (_0x34323c == "true" || _0x16f870 == "true") {
                        {
                          var _0x1dddc5 = document.createElement("button");
                          _0x1dddc5.textContent = "批量抢加发货台";
                          _0x1dddc5.id = "myBatchAddButton";
                          _0x1dddc5.style.backgroundColor = "#e91616";
                          _0x1dddc5.style.color = "white";
                          _0x1dddc5.style.border = "none";
                          _0x1dddc5.style.borderRadius = "5px";
                          _0x1dddc5.style.fontSize = "15px";
                          _0x1dddc5.style.cursor = "pointer";
                          _0x1dddc5.style.transition = "background-color 0.3s";
                          _0x1dddc5.style.height = "27px";
                          _0x1dddc5.style.margin = "0px 12px 0px 5px";
                          _0x1dddc5.style.fontWeight = "bold";
                          _0x1dddc5.style.display = "flex";
                          _0x1dddc5.style.alignItems = "center";
                          _0x1dddc5.onmouseover = function () {
                            this.style.backgroundColor = "rgb(213 70 70)";
                          };
                          _0x1dddc5.onmouseout = function () {
                            this.style.backgroundColor = "#e91616";
                          };
                          _0x1dddc5.addEventListener("click", async function () {
                            chrome.runtime.sendMessage({
                              "type": "usageFunctionRecord",
                              "phone": _0x3f505b,
                              "name": "批量抢发货台"
                            });
                            !document.querySelector("#my-shopinfo-box") && _0x23c4bb();
                          });
                          !document.querySelector("#myBatchAddButton") && _0x1aec7b.insertBefore(_0x1dddc5, _0x1aec7b.firstChild);
                        }
                      } else {
                        const _0x58623b = document.querySelector("#myBatchAddButton");
                        _0x58623b && _0x58623b.remove();
                      }
                    } catch (_0x1d20d7) {}
                  }
                  function _0x472f35() {
                    _0x4161cd();
                  }
                  _0x33142e == null && (_0x33142e = setInterval(_0x472f35, 500));
                }();else {
                  if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) !function () {
                    window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment") && setInterval(function () {
                      _0x2b906a();
                    }, 1500);
                    window.addEventListener("popstate", function (_0x476756) {
                      if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) {
                        setInterval(function () {
                          _0x2b906a();
                        }, 1500);
                      }
                    });
                    function _0x2b906a() {
                      {
                        if (!document.querySelector("#priceAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) try {
                          var _0x539fe0 = document.createElement("button");
                          _0x539fe0.style.margin = "8px";
                          _0x539fe0.style.marginTop = "0";
                          _0x539fe0.style.padding = "1px 8px 3px 8px";
                          _0x539fe0.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                          _0x539fe0.style.color = "white";
                          _0x539fe0.style.border = "none";
                          _0x539fe0.style.fontFamily = "auto";
                          _0x539fe0.style.borderRadius = "10px";
                          _0x539fe0.style.cursor = "pointer";
                          _0x539fe0.style.transition = "background-color 0.3s";
                          _0x539fe0.style.display = "flex";
                          _0x539fe0.style.alignItems = "center";
                          _0x539fe0.style.justifyContent = "center";
                          _0x539fe0.style.gap = "8px";
                          _0x539fe0.style.fontSize = "15px";
                          _0x539fe0.id = "priceAdjustment";
                          const _0x4549d1 = document.createElement("img");
                          _0x4549d1.src = chrome.runtime.getURL("web/img/control.png");
                          _0x4549d1.style.width = "28px";
                          _0x4549d1.style.height = "28px";
                          _0x4549d1.style.objectFit = "contain";
                          _0x539fe0.appendChild(_0x4549d1);
                          const _0x3b4c21 = document.createTextNode("申请调价同步");
                          _0x539fe0.appendChild(_0x3b4c21);
                          var _0x2a47b5 = document.createElement("button");
                          _0x2a47b5.style.margin = "0 0 8px";
                          _0x2a47b5.style.marginTop = "0";
                          _0x2a47b5.style.padding = "1px 8px 3px 8px";
                          _0x2a47b5.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                          _0x2a47b5.style.color = "white";
                          _0x2a47b5.style.border = "none";
                          _0x2a47b5.style.fontFamily = "auto";
                          _0x2a47b5.style.borderRadius = "10px";
                          _0x2a47b5.style.cursor = "pointer";
                          _0x2a47b5.style.transition = "background-color 0.3s";
                          _0x2a47b5.style.display = "flex";
                          _0x2a47b5.style.alignItems = "center";
                          _0x2a47b5.style.justifyContent = "center";
                          _0x2a47b5.style.gap = "8px";
                          _0x2a47b5.style.fontSize = "15px";
                          _0x2a47b5.id = "priceAdjustmentNo";
                          _0x2a47b5.appendChild(_0x4549d1.cloneNode(true));
                          _0x2a47b5.appendChild(document.createTextNode("一键拒绝全部调价"));
                          _0x539fe0.onmouseover = function () {
                            _0x539fe0.style.backgroundColor = "#45a049";
                          };
                          _0x539fe0.onmouseout = function () {
                            _0x539fe0.style.backgroundColor = "#4CAF50";
                          };
                          _0x2a47b5.onmouseover = function () {
                            _0x2a47b5.style.backgroundColor = "#f03e3e";
                          };
                          _0x2a47b5.onmouseout = function () {
                            _0x2a47b5.style.backgroundColor = "#d03636";
                          };
                          var _0x288700 = document.querySelector("[class*=\"TAB_tabContentInnerContainer\"]");
                          _0x288700 && (_0x288700.appendChild(_0x539fe0), _0x288700.appendChild(_0x2a47b5));
                          _0x539fe0.addEventListener("click", () => {
                            chrome.runtime.sendMessage({
                              "type": "usageFunctionRecord",
                              "phone": _0x3f505b,
                              "name": "商品降价前端同步"
                            });
                            if (_0x2f4de2.data.shopState == "正常") {
                              {
                                if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                  if (_0x2f4de2.data.on == "cc") {
                                    _0x5f2905();
                                    _0x3130b9().then(_0xbdaf20 => {
                                      _0xac07b(_0xbdaf20).then(() => {
                                        _0x4eec58();
                                        _0x19c80f("当天调价商品已完成同步调价申请");
                                      });
                                    });
                                  } else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                }
                              }
                            } else {
                              if (_0x2f4de2.data.shopState == "可绑") {
                                {
                                  var _0x3af16f = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  _0x19c80f("是否绑定当前店铺使用<br>" + _0x3af16f, "可绑定帮助", _0x253235, _0x3f505b, _0x3af16f);
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          });
                          _0x2a47b5.addEventListener("click", () => {
                            chrome.runtime.sendMessage({
                              "type": "usageFunctionRecord",
                              "phone": _0x3f505b,
                              "name": "拒绝商品调价"
                            });
                            if (_0x2f4de2.data.shopState == "正常") {
                              if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                if (_0x2f4de2.data.on == "cc") _0x5f2905(), _0x3130b9().then(_0x161703 => {
                                  _0xe1f64c(_0x161703).then(() => {
                                    _0x4eec58();
                                    _0x19c80f("待确认调价的商品，已全部拒绝！");
                                  });
                                });else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                              }
                            } else {
                              if (_0x2f4de2.data.shopState == "可绑") {
                                var _0x5b38fc = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                _0x19c80f("是否绑定当前店铺使用<br>" + _0x5b38fc, "可绑定帮助", _0x253235, _0x3f505b, _0x5b38fc);
                              } else {
                                if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          });
                        } catch (_0x44cced) {}
                      }
                    }
                  }();else {
                    if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) !function () {
                      window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                        _0x3a4ab9();
                      }, 1500);
                      window.addEventListener("popstate", function (_0x14636a) {
                        window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                          _0x3a4ab9();
                        }, 1500);
                      });
                      function _0x3a4ab9() {
                        {
                          if (!document.querySelector("#jgsbAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) try {
                            var _0x4068d9 = document.createElement("button");
                            _0x4068d9.style.margin = "8px";
                            _0x4068d9.style.marginTop = "0";
                            _0x4068d9.style.padding = "1px 8px 3px 8px";
                            _0x4068d9.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                            _0x4068d9.style.color = "white";
                            _0x4068d9.style.border = "none";
                            _0x4068d9.style.fontFamily = "auto";
                            _0x4068d9.style.borderRadius = "10px";
                            _0x4068d9.style.cursor = "pointer";
                            _0x4068d9.style.transition = "background-color 0.3s";
                            _0x4068d9.style.display = "flex";
                            _0x4068d9.style.alignItems = "center";
                            _0x4068d9.style.justifyContent = "center";
                            _0x4068d9.style.gap = "8px";
                            _0x4068d9.style.fontSize = "15px";
                            _0x4068d9.id = "jgsbAdjustment";
                            const _0x6c1f5a = document.createElement("img");
                            _0x6c1f5a.src = chrome.runtime.getURL("web/img/control.png");
                            _0x6c1f5a.style.width = "28px";
                            _0x6c1f5a.style.height = "28px";
                            _0x6c1f5a.style.objectFit = "contain";
                            _0x4068d9.appendChild(_0x6c1f5a);
                            const _0x465d0b = document.createTextNode("催审价格申报商品");
                            _0x4068d9.appendChild(_0x465d0b);
                            _0x4068d9.onmouseover = function () {
                              _0x4068d9.style.backgroundColor = "#45a049";
                            };
                            _0x4068d9.onmouseout = function () {
                              _0x4068d9.style.backgroundColor = "#4CAF50";
                            };
                            var _0x1b47f2 = document.querySelector("[class*=TAB_tabContentInnerContainer]");
                            _0x1b47f2 && _0x1b47f2.appendChild(_0x4068d9);
                            _0x4068d9.addEventListener("click", () => {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "催审-价格申报商品"
                              });
                              if (_0x2f4de2.data.shopState == "正常") {
                                {
                                  if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                    if (_0x2f4de2.data.on == "cc") _0x5f2905(), _0x3130b9().then(_0x58683c => {
                                      _0x479069(_0x58683c).then(() => {
                                        _0x4eec58();
                                        _0x19c80f("价格申报中的商品已经成功反馈！");
                                      });
                                    });else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  var _0x528290 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  _0x19c80f("是否绑定当前店铺使用<br>" + _0x528290, "可绑定帮助", _0x253235, _0x3f505b, _0x528290);
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            });
                          } catch (_0x262472) {
                            _0x4eec58();
                          }
                        }
                      }
                    }();else {
                      if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) !function () {
                        async function _0x40894c(_0x385e2c) {
                          {
                            if (_0x385e2c === "") {
                              return 0;
                            }
                            const _0x38ffaa = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/skc/pageQuery",
                              _0x106150 = {
                                "accept": "*/*",
                                "accept-language": "zh-CN,zh;q=0.9",
                                "mallid": _0x385e2c,
                                "Content-Type": "application/json"
                              },
                              _0x10b008 = async (_0x4d9d31, _0x1291b8) => {
                                {
                                  const _0x146cce = JSON.stringify({
                                      "skcSiteStatus": 1,
                                      "page": _0x4d9d31,
                                      "pageSize": _0x1291b8
                                    }),
                                    _0x47d36a = {
                                      "method": "POST",
                                      "headers": _0x106150,
                                      "body": _0x146cce,
                                      "redirect": "follow"
                                    };
                                  while (true) {
                                    try {
                                      const _0x3f75f0 = await fetch(_0x38ffaa, _0x47d36a),
                                        _0x1737e5 = await _0x3f75f0.json();
                                      if (_0x1737e5.success === false) await new Promise(_0x399c63 => setTimeout(_0x399c63, 500));else return _0x1737e5.result;
                                    } catch (_0xc639ad) {
                                      throw _0xc639ad;
                                    }
                                  }
                                }
                              };
                            try {
                              const _0x4a9e5b = await _0x10b008(1, 1);
                              if (_0x4a9e5b.pageItems.length === 0) return 0;
                              const _0x499589 = _0x4a9e5b.total,
                                _0x302b51 = Math.ceil(_0x499589 / 20),
                                _0x3aa8bd = [];
                              for (let _0x12adb5 = 1; _0x12adb5 <= _0x302b51; _0x12adb5++) {
                                _0x3aa8bd.push(_0x10b008(_0x12adb5, 20));
                              }
                              const _0x32ec40 = await Promise.all(_0x3aa8bd),
                                _0x424552 = _0x32ec40.flatMap(_0x4113fd => _0x4113fd.pageItems);
                              for (var _0x5edf83 of _0x424552) {
                                _0x38bf03(_0x385e2c, _0x5edf83.productId, _0x5edf83.productSkuSummaries, _0x5edf83.inProcessEditTasks);
                              }
                            } catch (_0x328170) {
                              return 0;
                            }
                          }
                        }
                        async function _0x38bf03(_0x49285d, _0x246645, _0x56bb08, _0x47d61b) {
                          var _0x177f4c = await _0x1fdbe4(_0x246645, _0x56bb08);
                          if (Object.keys(_0x177f4c).length !== 0) {
                            if (_0x47d61b == null) {
                              {
                                const _0x1d3e13 = new Headers();
                                _0x1d3e13.append("accept", "*/*");
                                _0x1d3e13.append("mallid", _0x49285d);
                                _0x1d3e13.append("Content-Type", "application/json");
                                const _0x2f96a3 = JSON.stringify({
                                    "bizIdType": 1,
                                    "bizIds": [_0x246645],
                                    "productEditItems": [{
                                      "editItem": 4,
                                      "editAdvice": "有误差需修正"
                                    }]
                                  }),
                                  _0x1aebe7 = {
                                    "method": "POST",
                                    "headers": _0x1d3e13,
                                    "body": _0x2f96a3,
                                    "redirect": "follow"
                                  };
                                try {
                                  const _0x1a0a8c = await fetch("https://seller.kuajingmaihuo.com/bg-lich-mms/audit/edit/task/product/batchAdd", _0x1aebe7),
                                    _0x605f50 = await _0x1a0a8c.json();
                                  var _0x44db53 = _0x605f50.result.successBizId2TaskUidMap[_0x246645 + ""];
                                  _0x177f4c.taskUid = _0x44db53;
                                  _0x24a715(_0x49285d, _0x177f4c);
                                } catch (_0x1a0958) {
                                  console.error(_0x1a0958);
                                }
                              }
                            } else _0x177f4c.taskUid = _0x47d61b[0].taskUid, _0x24a715(_0x49285d, _0x177f4c);
                          }
                        }
                        async function _0x24a715(_0x21b33f, _0x15e888) {
                          const _0x415fed = new Headers();
                          _0x415fed.append("accept", "*/*");
                          _0x415fed.append("mallid", _0x21b33f);
                          _0x415fed.append("Content-Type", "application/json");
                          const _0x18d3a8 = JSON.stringify(_0x15e888),
                            _0x4b8196 = {
                              "method": "POST",
                              "headers": _0x415fed,
                              "body": _0x18d3a8,
                              "redirect": "follow"
                            };
                          try {
                            const _0x17561b = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/edit/task/reply", _0x4b8196),
                              _0x430284 = await _0x17561b.json();
                          } catch (_0x229fe8) {
                            console.error(_0x229fe8);
                          }
                        }
                        async function _0x1fdbe4(_0x33ca32, _0x4733ac) {
                          {
                            const _0x152e19 = {
                              "productId": _0x33ca32,
                              "taskUid": "",
                              "taskVersion": 0,
                              "productSkcReqs": [{
                                "mainProductSkuSpecReqs": [{
                                  "parentSpecId": 0,
                                  "parentSpecName": "",
                                  "specId": 0,
                                  "specName": ""
                                }],
                                "productSkuReqs": []
                              }]
                            };
                            var _0x42ff78 = 0;
                            for (let _0x24219d = 0; _0x24219d < _0x4733ac.length; _0x24219d++) {
                              const _0x1002c7 = _0x4733ac[_0x24219d],
                                _0x5dd58a = [];
                              for (let _0x56ce54 = 0; _0x56ce54 < _0x1002c7.productSkuSpecList.length; _0x56ce54++) {
                                {
                                  const _0x3b4a8a = _0x1002c7.productSkuSpecList[_0x56ce54];
                                  _0x5dd58a.push({
                                    "parentSpecId": _0x3b4a8a.parentSpecId,
                                    "parentSpecName": _0x3b4a8a.parentSpecName,
                                    "specId": _0x3b4a8a.specId,
                                    "specName": _0x3b4a8a.specName
                                  });
                                }
                              }
                              var _0x134577 = _0x1002c7.productSkuWhExtAttr;
                              if (_0x134577.productSkuWmsWeight == null) _0x42ff78 = _0x42ff78 + 1;else _0x134577.productSkuWmsWeight.value == _0x134577.productSkuWeight.value && _0x134577.productSkuWmsVolume.len == _0x134577.productSkuVolume.len && _0x134577.productSkuWmsVolume.width == _0x134577.productSkuVolume.width && _0x134577.productSkuWmsVolume.height == _0x134577.productSkuVolume.height && (_0x42ff78 = _0x42ff78 + 1);
                              const _0x394248 = _0x134577.productSkuWmsVolume,
                                _0x2f6bd3 = _0x134577.productSkuVolume;
                              _0x152e19.productSkcReqs[0].productSkuReqs.push({
                                "productSkuSpecReqs": _0x5dd58a,
                                "productSkuWhExtAttrReq": {
                                  "productSkuWeightReq": {
                                    "value": _0x134577.productSkuWmsWeight && _0x134577.productSkuWmsWeight.value || _0x134577.productSkuWeight && _0x134577.productSkuWeight.value
                                  },
                                  "productSkuVolumeReq": {
                                    "len": _0x394248 && _0x394248.len || _0x2f6bd3 && _0x2f6bd3.len,
                                    "width": _0x394248 && _0x394248.width || _0x2f6bd3 && _0x2f6bd3.width,
                                    "height": _0x394248 && _0x394248.height || _0x2f6bd3 && _0x2f6bd3.height
                                  }
                                }
                              });
                            }
                            if (_0x42ff78 == _0x4733ac.length) {
                              return {};
                            }
                            return _0x152e19;
                          }
                        }
                        function _0x58ceed() {
                          if (!document.querySelector("#tbgfccxxButton") && window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) try {
                            var _0x488e5b = document.createElement("button");
                            _0x488e5b.style.margin = "8px";
                            _0x488e5b.style.marginTop = "0";
                            _0x488e5b.style.padding = "1px 8px 3px 8px";
                            _0x488e5b.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                            _0x488e5b.style.color = "white";
                            _0x488e5b.style.border = "none";
                            _0x488e5b.style.fontFamily = "auto";
                            _0x488e5b.style.borderRadius = "10px";
                            _0x488e5b.style.cursor = "pointer";
                            _0x488e5b.style.transition = "background-color 0.3s";
                            _0x488e5b.style.display = "flex";
                            _0x488e5b.style.alignItems = "center";
                            _0x488e5b.style.justifyContent = "center";
                            _0x488e5b.style.gap = "8px";
                            _0x488e5b.style.fontSize = "15px";
                            _0x488e5b.id = "tbgfccxxButton";
                            const _0x4a77d3 = document.createElement("img");
                            _0x4a77d3.src = chrome.runtime.getURL("web/img/control.png");
                            _0x4a77d3.style.width = "28px";
                            _0x4a77d3.style.height = "28px";
                            _0x4a77d3.style.objectFit = "contain";
                            _0x488e5b.appendChild(_0x4a77d3);
                            const _0x3bb7b3 = document.createTextNode("同步官方尺寸信息");
                            _0x488e5b.appendChild(_0x3bb7b3);
                            _0x488e5b.onmouseover = function () {
                              _0x488e5b.style.backgroundColor = "#45a049";
                            };
                            _0x488e5b.onmouseout = function () {
                              _0x488e5b.style.backgroundColor = "#4CAF50";
                            };
                            var _0x2390d5 = document.querySelector("[class*=\"hooks_dividerFieldContainer\"]");
                            _0x2390d5 && _0x2390d5.appendChild(_0x488e5b);
                            _0x488e5b.addEventListener("click", () => {
                              chrome.runtime.sendMessage({
                                "type": "usageFunctionRecord",
                                "phone": _0x3f505b,
                                "name": "同步官方尺寸"
                              });
                              if (_0x2f4de2.data.shopState == "正常") {
                                if (_0x2f4de2.data.on == "yb") _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");else {
                                  if (_0x2f4de2.data.on == "cc") _0x5f2905(), _0x3130b9().then(_0x3db5ed => {
                                    _0x40894c(_0x3db5ed).then(() => {
                                      _0x4eec58();
                                      _0x19c80f("在售商品的尺寸和重量信息已经更新为官方测量的标准数据。");
                                    });
                                  });else _0x2f4de2.data.on == "fuck" && _0x19c80f("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                }
                              } else {
                                if (_0x2f4de2.data.shopState == "可绑") {
                                  var _0x563882 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  _0x19c80f("是否绑定当前店铺使用<br>" + _0x563882, "可绑定帮助", _0x253235, _0x3f505b, _0x563882);
                                } else {
                                  if (_0x2f4de2.data.shopState == "超绑") {
                                    _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else _0x2f4de2.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            });
                          } catch (_0x114659) {
                            _0x4eec58();
                          }
                        }
                        window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                          _0x58ceed();
                        }, 1500);
                        window.addEventListener("popstate", function (_0x343d8e) {
                          window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                            _0x58ceed();
                          }, 1500);
                        });
                      }();else {
                        if (window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-activity/")) !function () {
                          function _0x49ed5d() {
                            function _0x55d585(_0x31490a) {
                              {
                                if (_0x31490a.querySelector(".show-button")) return;
                                const _0x13a5e1 = document.createElement("button");
                                _0x13a5e1.className = "show-button";
                                _0x13a5e1.type = "button";
                                _0x13a5e1.textContent = "显";
                                const _0x16ddb0 = _0x31490a.innerText.match(/\d+/g),
                                  _0x5e5cd4 = _0x16ddb0 ? _0x16ddb0.join("") : "";
                                _0x13a5e1.setAttribute("data-value", _0x5e5cd4);
                                _0x31490a.appendChild(_0x13a5e1);
                                _0x13a5e1.addEventListener("click", function () {
                                  _0x3cfd4d(_0x13a5e1.getAttribute("data-value"));
                                  _0x485d0b.classList.add("show");
                                });
                              }
                            }
                            const _0x344634 = document.querySelectorAll("[class*=\"goods-info_spu\"]");
                            _0x344634.forEach(_0x55d585);
                            const _0x485d0b = document.createElement("div");
                            _0x485d0b.id = "card-table-container";
                            _0x485d0b.className = "card-table-container";
                            const _0x290420 = document.createElement("button");
                            _0x290420.className = "close-button";
                            _0x290420.id = "close-button";
                            _0x290420.innerHTML = "&times;";
                            const _0x26607e = document.createElement("div");
                            _0x26607e.className = "card-table-wrapper";
                            const _0x1fd88c = document.createElement("table");
                            _0x1fd88c.className = "card-table";
                            const _0x3ffd6e = document.createElement("thead"),
                              _0x2cc64d = document.createElement("tr");
                            ["SKU属性", "今日销量", "近7天销量", "近30天销量", "仓内可用库存"].forEach(_0x2d2d53 => {
                              {
                                const _0x4cae5c = document.createElement("th");
                                _0x4cae5c.textContent = _0x2d2d53;
                                _0x2cc64d.appendChild(_0x4cae5c);
                              }
                            });
                            _0x3ffd6e.appendChild(_0x2cc64d);
                            const _0x2748b2 = document.createElement("tbody");
                            _0x2748b2.id = "card-table-body";
                            _0x1fd88c.appendChild(_0x3ffd6e);
                            _0x1fd88c.appendChild(_0x2748b2);
                            _0x26607e.appendChild(_0x1fd88c);
                            _0x485d0b.appendChild(_0x290420);
                            _0x485d0b.appendChild(_0x26607e);
                            document.body.appendChild(_0x485d0b);
                            const _0x437123 = document.createElement("style");
                            _0x437123.textContent = "\n                                            .show-button {\n                                                font-size: 15px;\n                                                height: 22px;\n                                                color: #fff;\n                                                background-color: #00796b;\n                                                border: none;\n                                                border-radius: 8px;\n                                                cursor: pointer;\n                                                margin-left: 10px;\n                                            }\n                                            .show-button:hover {\n                                                background-color: #004d40;\n                                                transform: scale(1.05);\n                                            }\n                                            .card-table-container {\n                                                display: none;\n                                                position: fixed;\n                                                top: 50%;\n                                                left: 50%;\n                                                transform: translate(-50%, -50%);\n                                                max-width: 90%;\n                                                max-height: 60vh;\n                                                padding: 25px 5px 5px 5px;\n                                                border-radius: 12px;\n                                                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                background-color: #ffffff;\n                                                z-index: 1000;\n                                                border: 1px solid #b2dfdb;\n                                                overflow: hidden;\n                                                transition: opacity 0.3s ease;\n                                            }\n                                            .card-table-container.show {\n                                                display: block;\n                                                opacity: 1;\n                                            }\n                                            .card-table-wrapper {\n                                                max-height: 50vh;\n                                                overflow-y: auto;\n                                            }\n                                            .card-table {\n                                                width: 100%;\n                                                border-collapse: collapse;\n                                                font-size: 16px;\n                                                text-align: left;\n                                                table-layout: fixed;\n                                            }\n                                            .card-table thead th, .card-table tbody td {\n                                                padding: 12px;\n                                                border: 1px solid #b2dfdb;\n                                                box-sizing: border-box;\n                                            }\n                                            .card-table thead th {\n                                                background-color: #004d40;\n                                                color: #ffffff;\n                                                position: sticky;\n                                                top: 0;\n                                                z-index: 1;\n                                                box-shadow: 0 4px 2px -2px #b2dfdb;\n                                            }\n                                            .close-button {\n                                                position: absolute;\n                                                top: 0;\n                                                right: 15px;\n                                                font-size: 24px;\n                                                background: none;\n                                                border: none;\n                                                cursor: pointer;\n                                                color: #00796b;\n                                                transition: color 0.3s ease;\n                                                z-index: 1001;\n                                            }\n                                            .close-button:hover {\n                                                color: #004d40;\n                                            }\n                                            .close-button:focus {\n                                                outline: none;\n                                            }\n                                        ";
                            document.head.appendChild(_0x437123);
                            const _0x3816bd = {};
                            function _0x3cfd4d(_0x56e551) {
                              _0x3816bd[_0x56e551] ? _0x5c70c6(_0x3816bd[_0x56e551]) : _0xb52f9().then(_0x132941 => {
                                _0x33c649(_0x132941, _0x56e551).then(_0x3579da => {
                                  _0x3579da.length != 0 && (_0x3816bd[_0x56e551] = _0x3579da);
                                  _0x5c70c6(_0x3579da);
                                });
                              });
                            }
                            function _0x5c70c6(_0xe1eee2) {
                              _0x2748b2.innerHTML = "";
                              _0xe1eee2.forEach(_0x1c48bb => {
                                const _0x3d8a35 = document.createElement("tr");
                                _0x3d8a35.innerHTML = "\n                                                    <td>" + _0x1c48bb.sku + "</td>\n                                                    <td>" + _0x1c48bb.todaySales + "</td>\n                                                    <td>" + _0x1c48bb.weekSales + "</td>\n                                                    <td>" + _0x1c48bb.monthSales + "</td>\n                                                    <td>" + _0x1c48bb.stock + "</td>\n                                                ";
                                _0x2748b2.appendChild(_0x3d8a35);
                              });
                            }
                            _0x290420.addEventListener("click", function () {
                              _0x485d0b.classList.remove("show");
                            });
                            async function _0x33c649(_0x7e1a82, _0x528da3) {
                              const _0x14ce69 = new Headers();
                              _0x14ce69.append("accept", "*/*");
                              _0x14ce69.append("mallid", _0x7e1a82);
                              _0x14ce69.append("Content-Type", "application/json");
                              const _0x4b391a = JSON.stringify({
                                  "pageNo": 1,
                                  "pageSize": 1,
                                  "isLack": 0,
                                  "productIdList": [_0x528da3],
                                  "priceAdjustRecentDays": 7
                                }),
                                _0x69d69d = {
                                  "method": "POST",
                                  "headers": _0x14ce69,
                                  "body": _0x4b391a,
                                  "redirect": "follow"
                                },
                                _0x368b9c = 5;
                              let _0x2cea4c = 0;
                              while (_0x2cea4c < _0x368b9c) {
                                try {
                                  const _0xb4297a = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse", _0x69d69d);
                                  if (!_0xb4297a.ok) throw new Error("HTTP error! Status: " + _0xb4297a.status);
                                  const _0x3d2242 = await _0xb4297a.json();
                                  if (_0x3d2242.success != true) {
                                    throw new Error("HTTP error! Status: " + _0xb4297a.status);
                                  }
                                  const _0xbc7c52 = _0x3d2242.result.subOrderList.flatMap(_0x57dcf3 => _0x57dcf3.skuQuantityDetailList.map(_0x53916b => ({
                                    "sku": _0x53916b.className,
                                    "todaySales": _0x53916b.todaySaleVolume,
                                    "weekSales": _0x53916b.lastSevenDaysSaleVolume,
                                    "monthSales": _0x53916b.lastThirtyDaysSaleVolume,
                                    "stock": _0x53916b.warehouseInfoList[0].inventoryNumInfo.warehouseInventoryNum
                                  })));
                                  return _0xbc7c52;
                                } catch (_0xf8fbea) {
                                  _0x2cea4c++;
                                  if (_0x2cea4c >= _0x368b9c) {
                                    return [];
                                  }
                                  await new Promise(_0x5909df => setTimeout(_0x5909df, 800));
                                }
                              }
                            }
                            const _0x2a101b = new MutationObserver(_0x154984 => {
                                _0x154984.forEach(_0x25d436 => {
                                  _0x25d436.addedNodes.forEach(_0x185aac => {
                                    if (_0x185aac.nodeType === Node.ELEMENT_NODE) {
                                      _0x185aac = _0x185aac.querySelector("[class*=\"goods-info_spu\"]");
                                      _0x185aac && _0x55d585(_0x185aac);
                                    }
                                  });
                                });
                              }),
                              _0x3204ab = {
                                "childList": true,
                                "subtree": true
                              };
                            _0x2a101b.observe(document.body, _0x3204ab);
                          }
                          _0x249184("[class*=\"goods-info_spu\"]", "").then(_0xc905b2 => {
                            _0x49ed5d();
                          });
                        }();else window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-tools/create-coupon") && !function () {
                          _0x1ab144("[class*=\"create-coupon_batchOperation\"]").then(_0x4ee0ff => {
                            _0x2b3bf5(["web/js/fillInActivityCoupons.js"]);
                          });
                        }();
                      }
                    }
                  }
                }
              }
            }
          });
          _0x46f72d(window.location.href);
          window.location.href.includes("seller.kuajingmaihuo.com") && (Promise.all([_0xb97083("toggleState"), _0xb97083("toggleState1"), _0xb97083("noticeSwitch"), _0xb97083("removeWatermarkSwitch")]).then(([_0x45967b, _0x5a54af, _0x5ae477, _0x4dcb42]) => {
            true && function () {
              'use strict';

              const _0x8a6b60 = new MutationObserver(_0x3aaad6 => {
                _0xb97083("toggleState").then(_0x246d21 => {
                  {
                    if (_0x246d21) {
                      var _0x4e6556 = document.querySelectorAll("[data-testid=\"beast-core-radio\"]");
                      _0x4e6556.forEach(function (_0x5e644a) {
                        _0x5e644a.getAttribute("data-checked") == "false" && _0x5e644a.textContent.trim() === "我不接受" && !_0x5e644a.getAttribute("gululu-bb") && (_0x5e644a.setAttribute("gululu-bb", "ok"), _0x5e644a.click());
                        var _0xe0f8cb = document.querySelector("[data-testid=\"beast-core-portal-main\"]");
                        if (_0xe0f8cb) {
                          {
                            if (_0xe0f8cb.innerText.includes("我已知晓风险")) {
                              _0xe0f8cb.querySelector("[data-testid=\"beast-core-checkbox\"]").click();
                              _0xe0f8cb.querySelector("[data-testid=\"beast-core-button\"]").click();
                            }
                          }
                        }
                      });
                      var _0x564be2 = document.querySelectorAll("body :not(script):not(style)");
                      _0x564be2.forEach(function (_0xddc9fa) {
                        (_0xddc9fa.textContent.trim() === "放弃" || _0xddc9fa.textContent.trim() === "拒绝接受价格调整建议" || _0xddc9fa.textContent.trim() === "放弃活动" || _0xddc9fa.textContent.trim().includes("不参与活动")) && !_0xddc9fa.getAttribute("gululu-aa") && (_0xddc9fa.setAttribute("gululu-aa", "ok"), _0xddc9fa.click());
                      });
                    }
                  }
                }).catch(_0xeacdfe => {});
                _0xb97083("toggleState1").then(_0x4e0983 => {
                  if (localStorage.getItem("monitoringState") === "false" && _0x4e0983) document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x5e7ff9) {
                    _0x5e7ff9.innerText.includes("改价意愿") && !function () {
                      var _0x122e54 = document.querySelectorAll("[placeholder=\"请选择\"]");
                      if (Array.from(_0x122e54).map(_0x80e65c => _0x80e65c.value).join("").includes("申报价格")) {
                        _0x122e54.forEach(function (_0x5a88e8) {
                          (_0x5a88e8.value.includes("调整为参考申报价格") || _0x5a88e8.value === "同意建议申报价格" || _0x5a88e8.value === "同意参考申报价格") && _0x5a88e8.click();
                        });
                        var _0x9e351b = document.querySelectorAll("[role=\"listbox\"]");
                        _0x9e351b.forEach(function (_0x322a09) {
                          _0x322a09.querySelectorAll("span")[1].click();
                        });
                      } else setTimeout(function () {
                        document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x1c1899 => {
                          var _0x14bdf4 = _0x1c1899.querySelectorAll("td");
                          if (_0x14bdf4.length >= 8) {
                            var _0x20f7dd = parseFloat(_0x14bdf4[4].textContent.trim().replace("¥", "")),
                              _0x259230 = parseFloat(_0x14bdf4[5].textContent.trim().replace("¥", "")),
                              _0x179a25 = Math.max(_0x20f7dd, _0x259230);
                            _0x3c7886(_0x14bdf4[7], _0x179a25);
                          } else {
                            if (_0x14bdf4.length >= 5) {
                              var _0x20f7dd = parseFloat(_0x14bdf4[1].textContent.trim().replace("¥", "")),
                                _0x259230 = parseFloat(_0x14bdf4[2].textContent.trim().replace("¥", "")),
                                _0x179a25 = Math.max(_0x20f7dd, _0x259230);
                              _0x3c7886(_0x14bdf4[4], _0x179a25);
                            } else {
                              if (_0x14bdf4.length >= 4) {
                                {
                                  var _0x133227 = parseFloat(_0x14bdf4[1].textContent.trim().replace("¥", "")),
                                    _0x260494 = parseFloat(_0x14bdf4[2].textContent.trim().replace("¥", "")),
                                    _0x179a25 = Math.max(_0x133227, _0x260494);
                                  _0x3c7886(_0x14bdf4[3], _0x179a25);
                                }
                              }
                            }
                          }
                        });
                        function _0x3c7886(_0x39db23, _0x39ee74) {
                          var _0x29e4ba = _0x39db23.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                          _0x29e4ba && (_0x3d44bb(_0x29e4ba, _0x39ee74), _0x2e99f6(_0x29e4ba, "input"), _0x2e99f6(_0x29e4ba, "change"), _0x2e99f6(_0x39db23, "input"), _0x2e99f6(_0x39db23, "change"));
                        }
                        function _0x2e99f6(_0x33be1e, _0x53d3e4) {
                          {
                            var _0xd284d = new Event(_0x53d3e4, {
                              "bubbles": true
                            });
                            _0x33be1e.dispatchEvent(_0xd284d);
                          }
                        }
                        function _0x3d44bb(_0xe17db7, _0x136acd) {
                          var _0x426d8c = _0xe17db7.valueTracker && _0xe17db7.valueTracker.getValue;
                          if (_0x426d8c) {
                            _0xe17db7.valueTracker.getValue = () => "";
                          }
                          _0xe17db7.value = _0x136acd;
                          var _0x2db3fa = new InputEvent("input", {
                            "bubbles": true,
                            "cancelable": true
                          });
                          _0xe17db7.dispatchEvent(_0x2db3fa);
                          if (_0x426d8c) {
                            _0xe17db7.valueTracker.getValue = _0x426d8c;
                          }
                        }
                      }, 100);
                    }();
                  });else {
                    if (_0x4e0983) {
                      var _0x488be3 = window.location.href;
                      _0x488be3 == "https://seller.kuajingmaihuo.com/main/product/seller-select" && document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x426cab) {
                        _0x426cab.innerText === "改价意愿" && !function () {
                          var _0x44cd1e = document.querySelectorAll("[placeholder=\"请选择\"]");
                          if (Array.from(_0x44cd1e).map(_0x28f51e => _0x28f51e.value).join("").includes("申报价格")) {
                            _0x44cd1e.forEach(function (_0x505a1f) {
                              {
                                if (_0x505a1f.value.includes("调整为参考申报价格") || _0x505a1f.value === "同意建议申报价格" || _0x505a1f.value === "同意参考申报价格") {
                                  _0x505a1f.click();
                                }
                              }
                            });
                            var _0xc1b8fb = document.querySelectorAll("[role=\"listbox\"]");
                            _0xc1b8fb.forEach(function (_0x45ff4a) {
                              _0x45ff4a.querySelectorAll("span")[1].click();
                            });
                          } else setTimeout(function () {
                            document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x34161d => {
                              var _0x374503 = _0x34161d.querySelectorAll("td");
                              if (_0x374503.length >= 8) {
                                var _0x450d31 = parseFloat(_0x374503[4].textContent.trim().replace("¥", "")),
                                  _0x7d453d = parseFloat(_0x374503[5].textContent.trim().replace("¥", "")),
                                  _0x715db5 = Math.max(_0x450d31, _0x7d453d);
                                _0x40bced(_0x374503[7], _0x715db5);
                              } else {
                                if (_0x374503.length >= 5) {
                                  var _0x450d31 = parseFloat(_0x374503[1].textContent.trim().replace("¥", "")),
                                    _0x7d453d = parseFloat(_0x374503[2].textContent.trim().replace("¥", "")),
                                    _0x715db5 = Math.max(_0x450d31, _0x7d453d);
                                  _0x40bced(_0x374503[4], _0x715db5);
                                } else {
                                  if (_0x374503.length >= 4) {
                                    {
                                      var _0x1b903a = parseFloat(_0x374503[1].textContent.trim().replace("¥", "")),
                                        _0x117b25 = parseFloat(_0x374503[2].textContent.trim().replace("¥", "")),
                                        _0x715db5 = Math.max(_0x1b903a, _0x117b25);
                                      _0x40bced(_0x374503[3], _0x715db5);
                                    }
                                  }
                                }
                              }
                            });
                            function _0x40bced(_0xd18820, _0x22d9b6) {
                              var _0x4ba1e2 = _0xd18820.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                              _0x4ba1e2 && (_0x53860f(_0x4ba1e2, _0x22d9b6), _0x35236d(_0x4ba1e2, "input"), _0x35236d(_0x4ba1e2, "change"), _0x35236d(_0xd18820, "input"), _0x35236d(_0xd18820, "change"));
                            }
                            function _0x35236d(_0x493a5f, _0x4ecaa2) {
                              var _0x1fd2ca = new Event(_0x4ecaa2, {
                                "bubbles": true
                              });
                              _0x493a5f.dispatchEvent(_0x1fd2ca);
                            }
                            function _0x53860f(_0x470ff4, _0x189dad) {
                              {
                                var _0x534a77 = _0x470ff4.valueTracker && _0x470ff4.valueTracker.getValue;
                                _0x534a77 && (_0x470ff4.valueTracker.getValue = () => "");
                                _0x470ff4.value = _0x189dad;
                                var _0x7c5ed2 = new InputEvent("input", {
                                  "bubbles": true,
                                  "cancelable": true
                                });
                                _0x470ff4.dispatchEvent(_0x7c5ed2);
                                _0x534a77 && (_0x470ff4.valueTracker.getValue = _0x534a77);
                              }
                            }
                          }, 100);
                        }();
                      });
                    }
                  }
                });
              });
              _0x8a6b60.observe(document.body, {
                "childList": true,
                "subtree": true
              });
            }();
            _0x5ae477 && function () {
              async function _0x5addae(_0x450f11) {
                {
                  const _0x52910a = new Headers();
                  _0x52910a.append("accept", "*/*");
                  _0x52910a.append("mallid", _0x450f11);
                  _0x52910a.append("Content-Type", "text/plain");
                  const _0x2e72bd = "{}",
                    _0x2b8a37 = {
                      "method": "POST",
                      "headers": _0x52910a,
                      "body": _0x2e72bd,
                      "redirect": "follow"
                    };
                  try {
                    const _0x557e29 = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/unreadMsgDetail", _0x2b8a37),
                      _0x4e16eb = await _0x557e29.json();
                    return _0x4e16eb.result.unreadPopMsg;
                  } catch (_0x172604) {
                    console.error(_0x172604);
                  }
                }
              }
              async function _0xf16ef0(_0x484fb4, _0x310296) {
                {
                  const _0x48d44d = new Headers();
                  _0x48d44d.append("accept", "*/*");
                  _0x48d44d.append("mallid", _0x484fb4);
                  _0x48d44d.append("Content-Type", "application/json");
                  const _0x471479 = JSON.stringify({
                      "msgId": _0x310296
                    }),
                    _0x3c61e2 = {
                      "method": "POST",
                      "headers": _0x48d44d,
                      "body": _0x471479,
                      "redirect": "follow"
                    };
                  try {
                    {
                      const _0x5e5ac3 = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/read", _0x3c61e2),
                        _0x400e25 = await _0x5e5ac3.json();
                      return _0x400e25.result;
                    }
                  } catch (_0x41fb06) {
                    console.error(_0x41fb06);
                  }
                }
              }
              _0xb97083("noticeSwitch").then(_0x45c820 => {
                _0x45c820 && _0xb52f9().then(_0x429f52 => {
                  _0x5addae(_0x429f52).then(_0x1e9d18 => {
                    {
                      if (_0x1e9d18 && _0x1e9d18.length > 0) for (const _0x5bc4c4 of _0x1e9d18) {
                        _0xf16ef0(_0x429f52, _0x5bc4c4.id).then(_0x121d7e => {});
                      }
                    }
                  });
                });
              });
            }();
            let _0x5a8323 = false;
            const _0x2f2202 = new MutationObserver(_0x576961 => {
                _0x576961.forEach(_0x39d5f3 => {
                  _0x39d5f3.type === "childList" && _0xb97083("removeWatermarkSwitch").then(_0x27105b => {
                    if (_0x27105b) {
                      {
                        let _0x19af31 = document.querySelectorAll("div[style*=\"z-index: 2147483647\"][class=\"\"][id]:not([id=\"\"])");
                        if (_0x19af31.length > 0) {
                          {
                            let _0x21e81e = _0x19af31[0];
                            !_0x5a8323 ? (_0x19af31.forEach(_0x4c9e29 => {
                              {
                                let _0x2c08c0 = _0x4c9e29.cloneNode(true);
                                document.head.appendChild(_0x2c08c0);
                                _0x4c9e29.parentNode.removeChild(_0x4c9e29);
                              }
                            }), _0x5a8323 = true) : _0x19af31.forEach(_0x3de5a2 => {
                              if (_0x3de5a2.parentNode.tagName === "BODY" || _0x3de5a2.parentNode.tagName === "DIV") {
                                let _0x4d2e79 = _0x3de5a2.cloneNode(true);
                                document.head.appendChild(_0x4d2e79);
                                _0x3de5a2.parentNode.removeChild(_0x3de5a2);
                              }
                            });
                          }
                        }
                      }
                    }
                  });
                });
              }),
              _0x4e4fc3 = {
                "childList": true,
                "subtree": true
              };
            _0x2f2202.observe(document.body, _0x4e4fc3);
          }), function () {
            'use strict';

            var _0x5a5553 = false,
              _0x67c189 = false,
              _0x1311e3,
              _0x34361f,
              _0x4a5618 = document.createElement("style");
            _0x4a5618.innerHTML = "\n                                    .switch-container {\n                                        position: fixed;\n                                        bottom: 80px;\n                                        right: 12px;\n                                        z-index: 9999999;\n                                        transition: right 0.5s ease;\n                                        width: 60px; /* 调整按钮容器的宽度 */\n                                    }\n    \n                                    .switch-container:hover {\n                                        right: 0;\n                                        width: 60px; /* 鼠标移入时扩展按钮容器的宽度 */\n                                    }\n    \n                                    .switch {\n                                        position: relative;\n                                        display: inline-block;\n                                        width: 100%;\n                                        height: 34px;\n                                    }\n    \n                                    .switch input {\n                                        opacity: 0;\n                                        width: 0;\n                                        height: 0;\n                                    }\n    \n                                    .slider {\n                                        position: absolute;\n                                        cursor: pointer;\n                                        top: 0;\n                                        left: 0;\n                                        right: 0;\n                                        bottom: 0;\n                                        background-color: #ccc;\n                                        transition: .4s;\n                                    }\n    \n                                    .slider:before {\n                                        position: absolute;\n                                        content: \"\";\n                                        height: 26px;\n                                        width: 26px;\n                                        left: 4px;\n                                        bottom: 4px;\n                                        background-color: white;\n                                        transition: .4s;\n                                    }\n    \n                                    input:checked + .slider {\n                                        background-color: #2196F3;\n                                    }\n    \n                                    input:focus + .slider {\n                                        box-shadow: 0 0 1px #2196F3;\n                                    }\n    \n                                    input:checked + .slider:before {\n                                        transform: translateX(26px);\n                                    }\n    \n                                    .slider.round {\n                                        border-radius: 34px;\n                                    }\n    \n                                    .slider.round:before {\n                                        border-radius: 50%;\n                                    }\n                                ";
            document.head.appendChild(_0x4a5618);
            var _0x2d938b = document.createElement("div");
            _0x2d938b.classList.add("switch-container");
            var _0x5e1066 = document.createElement("label");
            _0x5e1066.classList.add("switch");
            var _0x465b85 = document.createElement("input");
            _0x465b85.type = "checkbox";
            _0x465b85.checked = localStorage.getItem("monitoringState") === "true";
            _0x5e1066.appendChild(_0x465b85);
            var _0x1f3dce = document.createElement("span");
            _0x1f3dce.classList.add("slider", "round");
            _0x5e1066.appendChild(_0x1f3dce);
            _0x2d938b.appendChild(_0x5e1066);
            document.body.appendChild(_0x2d938b);
            var _0x4c409b = document.createElement("div");
            _0x4c409b.style.zIndex = 999999;
            _0x4c409b.style.position = "fixed";
            _0x4c409b.style.bottom = "80px";
            _0x4c409b.style.right = "83px";
            _0x4c409b.style.padding = "10px";
            _0x4c409b.style.borderRadius = "5px";
            _0x4c409b.style.backgroundColor = "#f0f0f0";
            _0x4c409b.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            _0x4c409b.style.transition = "opacity 0.3s ease";
            _0x4c409b.style.opacity = "0";
            document.body.appendChild(_0x2d938b);
            document.body.appendChild(_0x4c409b);
            var _0x2beec6 = [];
            function _0x1e2c0f(_0x30b8d6) {
              _0x465b85.checked ? _0x254145() : _0x39d912();
              _0x1311e3 = setTimeout(function () {
                _0x2d938b.style.transition = "right 0.5s ease";
                _0x2d938b.style.right = "-35px";
              }, 2000);
              var _0x3a5851 = false;
              if (_0x30b8d6) {
                {
                  var _0x462bb0 = document.querySelectorAll("*[style=\"z-index: 9996;\"], *[data-testid=\"beast-core-modal-mask\"], *[data-testid=\"beast-core-modal\"], *[data-testid=\"beast-core-modal-container\"],div[data-testid=\"\"]");
                  _0x462bb0.forEach(function (_0x13f129) {
                    for (const _0x1c1bd8 of _0x179a7d) {
                      if (_0x13f129.textContent.length == 0) continue;
                      _0x45729d = new RegExp(typeof _0x45729d === "string" ? _0x45729d.slice(1, -1) : _0x45729d);
                      if ((_0x13f129.textContent.startsWith(_0x1c1bd8) || _0x45729d.test(_0x13f129.textContent)) && !_0x13f129.textContent.startsWith("以下待办")) {
                        _0x3a5851 = true;
                        if (_0x13f129.textContent.includes("1/5加入发货台")) _0x3a5851 = false;else return;
                      }
                    }
                  });
                  !_0x3a5851 && _0x462bb0.forEach(function (_0x5c03f0) {
                    _0x2beec6.push({
                      "target": _0x5c03f0.parentNode,
                      "removedNodes": [_0x5c03f0]
                    });
                    _0x5c03f0.style.display = "none";
                  });
                  _0x16c014.observe(document.body, {
                    "childList": true,
                    "subtree": true
                  });
                  localStorage.setItem("monitoringState", "true");
                }
              } else _0x16c014.disconnect(), _0x54f1b6(), localStorage.setItem("monitoringState", "false");
            }
            function _0x54f1b6() {
              _0x2beec6 = Array.from(new Set(_0x2beec6));
              _0x2beec6.forEach(function (_0x3d08c7) {
                _0x3d08c7.removedNodes.forEach(function (_0x4bfc67) {
                  _0x4bfc67.style.display = "flex";
                });
              });
              _0x2beec6 = [];
            }
            var _0x16c014 = new MutationObserver(function (_0x1e45ff) {
              var _0x1fa357 = localStorage.getItem("monitoringState") === "true";
              if (!_0x1fa357) return;
              var _0x31184a = false;
              _0x1e45ff.forEach(function (_0x4ba1c1) {
                {
                  var _0x30c608 = _0x4ba1c1.addedNodes;
                  _0x30c608.forEach(function (_0x4817fe) {
                    {
                      if (_0x4817fe.nodeType === 1 && (_0x4817fe.style.zIndex === "1033" || _0x4817fe.style.zIndex === "9996" || _0x4817fe.dataset.testid === "beast-core-modal-mask" || _0x4817fe.dataset.testid == "" || _0x4817fe.dataset.testid === "beast-core-modal" || _0x4817fe.dataset.testid === "beast-core-modal-container")) {
                        for (const _0x312003 of _0x179a7d) {
                          {
                            _0x45729d = new RegExp(typeof _0x45729d === "string" ? _0x45729d.slice(1, -1) : _0x45729d);
                            if (_0x4817fe.textContent.length == 0) continue;
                            if ((_0x4817fe.textContent.startsWith(_0x312003) || _0x45729d.test(_0x4817fe.textContent)) && !_0x4817fe.textContent.startsWith("以下待办")) {
                              {
                                _0x31184a = true;
                                if (_0x4817fe.textContent.includes("1/5加入发货台")) _0x31184a = false;else return;
                              }
                            }
                          }
                        }
                      }
                    }
                  });
                }
              });
              !_0x31184a && _0x1e45ff.forEach(function (_0x4342f3) {
                {
                  var _0x52492f = _0x4342f3.addedNodes;
                  _0x52492f.forEach(function (_0x2cb760) {
                    _0x2cb760.nodeType === 1 && (_0x2cb760.style.zIndex === "1033" || _0x2cb760.style.zIndex === "9996" || _0x2cb760.dataset.testid == "" || _0x2cb760.dataset.testid === "beast-core-modal-mask" || _0x2cb760.dataset.testid === "beast-core-modal" || _0x2cb760.dataset.testid === "beast-core-modal-container") && (_0x2beec6.push({
                      "target": _0x2cb760.parentNode,
                      "removedNodes": [_0x2cb760]
                    }), _0x2cb760.style.display = "none");
                  });
                }
              });
            });
            _0x2d938b.addEventListener("mousedown", function (_0x27d724) {
              _0x34361f = setTimeout(function () {
                _0x2d938b.style.display = "none";
              }, 1000);
            });
            _0x2d938b.addEventListener("mouseup", function (_0x31ff7f) {
              clearTimeout(_0x34361f);
            });
            _0x2d938b.addEventListener("click", function () {
              _0x254145();
              _0x465b85.checked = !_0x465b85.checked;
              _0x1e2c0f(_0x465b85.checked);
              clearTimeout(_0x34361f);
              _0x465b85.checked ? _0x254145() : _0x39d912();
            });
            _0x2d938b.addEventListener("mouseenter", function () {
              _0x2d938b.style.transition = "right 0.5s ease";
              _0x2d938b.style.right = "12px";
              _0x11e57e();
            });
            _0x2d938b.addEventListener("mouseleave", function () {
              _0x2d938b.style.transition = "right 0.5s ease";
              _0x2d938b.style.right = "-35px";
              _0x3a276a();
            });
            _0x2d938b.addEventListener("click", function () {});
            _0x4c409b.addEventListener("mouseleave", function () {
              _0x465b85.checked && _0x3a276a();
            });
            _0x1e2c0f(_0x465b85.checked);
            function _0x254145() {
              _0x2d938b.style.opacity = "1";
              _0x2d938b.style.cursor = "pointer";
              _0x5a5553 = true;
              _0x4c409b.innerText = "咕噜噜去弹窗已禁用";
              _0x11e57e();
              _0x1311e3 = setTimeout(function () {
                _0x3a276a();
              }, 2000);
            }
            function _0x39d912() {
              _0x4c409b.style.display = "block";
              _0x2d938b.style.opacity = "1";
              _0x2d938b.style.cursor = "pointer";
              _0x5a5553 = false;
              _0x4c409b.innerText = "咕噜噜去弹窗已恢复";
              _0x11e57e();
              _0x1311e3 = setTimeout(function () {
                _0x3a276a();
              }, 2000);
            }
            function _0x3a276a() {
              _0x4c409b.style.opacity = "0";
              _0x67c189 = false;
              _0x4c409b.style.display = "none";
            }
            function _0x11e57e() {
              _0x4c409b.style.opacity = "1";
              _0x4c409b.style.display = "block";
              _0x67c189 = true;
            }
          }());
        }
      });
    });
  });
};
var _0x3d98e3 = window.location.href;
if (_0x3d98e3.includes("https://seller.kuajingmaihuo.com/main/sale-manage/main")) {
  var _0xcaa68e = _0x3d98e3.split("?=");
  _0xcaa68e.length == 2 && setTimeout(function () {
    _0x2327d4("商品spu为：" + _0xcaa68e[1]);
  }, 2000);
}
if (_0x3d98e3.includes("https://www.temu.com/bgn_no_access.htm")) {
  function _0x13ca70() {
    const _0x4c86a3 = document.createElement("div");
    _0x4c86a3.style.position = "fixed";
    _0x4c86a3.style.bottom = "0";
    _0x4c86a3.style.left = "0";
    _0x4c86a3.style.width = "100%";
    _0x4c86a3.style.backgroundColor = "#ffffff";
    _0x4c86a3.style.color = "#333";
    _0x4c86a3.style.padding = "20px 40px";
    _0x4c86a3.style.display = "flex";
    _0x4c86a3.style.justifyContent = "center";
    _0x4c86a3.style.alignItems = "center";
    _0x4c86a3.style.boxShadow = "0 -4px 15px rgba(0, 0, 0, 0.1)";
    _0x4c86a3.style.borderTop = "4px solid #3498db";
    _0x4c86a3.style.zIndex = "9999";
    _0x4c86a3.style.borderRadius = "12px 12px 0 0";
    _0x4c86a3.style.fontFamily = "Arial, sans-serif";
    const _0x53ec1e = document.createElement("span");
    _0x53ec1e.textContent = "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？";
    _0x53ec1e.style.fontSize = "18px";
    _0x53ec1e.style.fontWeight = "600";
    _0x53ec1e.style.lineHeight = "1.5";
    _0x53ec1e.style.textAlign = "center";
    _0x53ec1e.style.flexGrow = "1";
    _0x53ec1e.style.marginRight = "20px";
    _0x4c86a3.appendChild(_0x53ec1e);
    const _0x1fe1dc = document.createElement("div");
    _0x1fe1dc.style.display = "flex";
    _0x1fe1dc.style.alignItems = "center";
    _0x1fe1dc.style.gap = "15px";
    _0x4c86a3.appendChild(_0x1fe1dc);
    const _0x3857e3 = document.createElement("button");
    _0x3857e3.textContent = "清空缓存";
    _0x3857e3.style.backgroundColor = "#3498db";
    _0x3857e3.style.color = "#fff";
    _0x3857e3.style.border = "none";
    _0x3857e3.style.padding = "10px 20px";
    _0x3857e3.style.borderRadius = "6px";
    _0x3857e3.style.cursor = "pointer";
    _0x3857e3.style.fontSize = "14px";
    _0x3857e3.style.transition = "all 0.3s ease";
    _0x3857e3.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x3857e3.onmouseover = () => {
      _0x3857e3.style.backgroundColor = "#2980b9";
      _0x3857e3.style.transform = "scale(1.05)";
    };
    _0x3857e3.onmouseout = () => {
      _0x3857e3.style.backgroundColor = "#3498db";
      _0x3857e3.style.transform = "scale(1)";
    };
    _0x3857e3.onclick = () => {
      chrome.runtime.sendMessage({
        "type": "clearTemuData"
      }).then(() => {
        window.open("https://www.temu.com/", "_self");
        document.body.removeChild(_0x4c86a3);
      });
    };
    "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？".replace(/\\u([\d\w]{4})/gi, (_0x51e11f, _0x4db9a7) => String.fromCharCode(parseInt(_0x4db9a7, 16))) == _0x53ec1e.textContent ? "" : !function () {
      chrome.storage.local.set({
        "codePhone": ["", ""]
      });
      window.location.reload();
    }();
    const _0x7342a5 = document.createElement("button");
    _0x7342a5.textContent = "取消";
    _0x7342a5.style.backgroundColor = "#e74c3c";
    _0x7342a5.style.color = "#fff";
    _0x7342a5.style.border = "none";
    _0x7342a5.style.padding = "10px 20px";
    _0x7342a5.style.borderRadius = "6px";
    _0x7342a5.style.cursor = "pointer";
    _0x7342a5.style.fontSize = "14px";
    _0x7342a5.style.transition = "all 0.3s ease";
    _0x7342a5.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x7342a5.onmouseover = () => {
      _0x7342a5.style.backgroundColor = "#c0392b";
      _0x7342a5.style.transform = "scale(1.05)";
    };
    _0x7342a5.onmouseout = () => {
      _0x7342a5.style.backgroundColor = "#e74c3c";
      _0x7342a5.style.transform = "scale(1)";
    };
    _0x7342a5.onclick = () => {
      document.body.removeChild(_0x4c86a3);
    };
    _0x1fe1dc.appendChild(_0x3857e3);
    _0x1fe1dc.appendChild(_0x7342a5);
    document.body.appendChild(_0x4c86a3);
  }
  _0x13ca70();
}
let _0x46188c = {},
  _0x34d475 = {},
  _0x47ada0 = [],
  _0x34e843 = {},
  _0xee18b7 = "",
  _0x59955d = {},
  _0x20778a = {};
window.addEventListener("sentPrintData", function (_0x228994) {
  var _0x4cf4fa = _0x228994.detail;
  _0x4cf4fa.type === "printData" && (_0x46188c = _0x4cf4fa.data);
});
async function _0xe99d7e(_0x3b41b8, _0x126921, _0x3e84fe = 1) {
  return new Promise(async (_0x3e831c, _0x4b63f8) => {
    var _0x3a2097 = await _0xb52f9();
    chrome.runtime.sendMessage({
      "type": "getEnglishName",
      "text": _0x3b41b8,
      "labelCode": _0x126921,
      "mallid": _0x3a2097,
      "mode": _0x3e84fe
    }, _0x2418db => {
      _0x2418db ? _0x3e831c(_0x2418db) : _0x4b63f8(_0x3b41b8);
    });
  });
}
function _0x354586(_0x38bf1e, _0x47e8d8) {
  for (let _0x136ca7 of _0x38bf1e) {
    if (_0x136ca7[3] === _0x47e8d8) {
      {
        return _0x136ca7.filter(_0x45b4d2 => _0x45b4d2 !== null && _0x45b4d2 !== undefined);
      }
    }
  }
  return [];
}
function _0x3d83e0() {
  const _0x17fed0 = document.createElement("style");
  _0x17fed0.innerHTML = "\n    .loader-container-p {\n      position: fixed;\n      top: 50%;\n      left: 75%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      z-index: 99000; /* 确保动画在页面的最顶层 */\n    }\n  \n    .loader {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n  \n    .loader div {\n      width: 16px;\n      height: 16px;\n      background: #3498db;\n      border-radius: 50%;\n      animation: bounce 1.2s infinite ease-in-out;\n      margin: 0 6px;\n    }\n  \n    .loader div:nth-child(1) {\n      animation-delay: -0.24s;\n    }\n  \n    .loader div:nth-child(2) {\n      animation-delay: -0.12s;\n    }\n  \n    .loader div:nth-child(3) {\n      animation-delay: 0s;\n    }\n  \n    @keyframes bounce {\n      0%, 20%, 50%, 80%, 100% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-20px);\n      }\n      60% {\n        transform: translateY(-10px);\n      }\n    }\n  \n    .loader-text {\n      font-family: Arial, sans-serif;\n      color: #333;\n      font-size: 16px;\n      text-align: center;\n      margin-top: 8px;\n    }\n  ";
  document.head.appendChild(_0x17fed0);
  const _0x32da81 = document.createElement("div");
  _0x32da81.className = "loader-container-p";
  const _0x20d654 = document.createElement("div");
  _0x20d654.className = "loader";
  for (let _0x3c08a5 = 0; _0x3c08a5 < 3; _0x3c08a5++) {
    {
      const _0x19400b = document.createElement("div");
      _0x20d654.appendChild(_0x19400b);
    }
  }
  const _0x393455 = document.createElement("div");
  _0x393455.className = "loader-text";
  _0x393455.textContent = "打印数据加载中...";
  _0x32da81.appendChild(_0x20d654);
  _0x32da81.appendChild(_0x393455);
  document.body.appendChild(_0x32da81);
}
function _0x5021ce(_0x54a57a, _0x18ce8e) {
  const _0x263ef3 = document.createElement("div");
  _0x263ef3.textContent = _0x54a57a;
  _0x263ef3.style.position = "fixed";
  _0x263ef3.style.top = "40%";
  _0x263ef3.style.left = "70%";
  _0x263ef3.style.transform = "translate(-50%, -50%)";
  _0x263ef3.style.backgroundColor = "#e8f5e9";
  _0x263ef3.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0x263ef3.style.color = "#1b5e20";
  _0x263ef3.style.padding = "20px 30px";
  _0x263ef3.style.borderRadius = "12px";
  _0x263ef3.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0x263ef3.style.fontSize = "16px";
  _0x263ef3.style.fontFamily = "Arial, sans-serif";
  _0x263ef3.style.textAlign = "center";
  _0x263ef3.style.maxWidth = "80%";
  _0x263ef3.style.wordWrap = "break-word";
  _0x263ef3.style.zIndex = "1000";
  _0x263ef3.style.display = "none";
  _0x263ef3.style.opacity = "0";
  _0x263ef3.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0x263ef3);
  setTimeout(() => {
    _0x263ef3.style.display = "block";
    _0x263ef3.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0x263ef3.style.opacity = "0";
    setTimeout(() => {
      _0x263ef3.style.display = "none";
      document.body.removeChild(_0x263ef3);
    }, 500);
  }, _0x18ce8e);
}
function _0xa9dcd2() {
  const _0x2479bb = document.querySelector(".loader-container-p");
  if (_0x2479bb) {
    _0x2479bb.remove();
  }
}
window.onerror = function (_0x3e412c, _0x5cc4de, _0x1889c6, _0x2f5d65, _0x47739e) {
  return true;
};
window.onunhandledrejection = function (_0x59decb) {
  _0x59decb.preventDefault();
};
async function _0x3a6280(_0x53ab33, _0x361d24, _0x222ae7) {
  return new Promise((_0x11fa71, _0x633d99) => {
    chrome.runtime.sendMessage({
      "type": "getCurrentPageInfo",
      "spu_id": _0x361d24,
      "mallid": _0x53ab33,
      "skc": _0x222ae7
    }, _0x3bfe47 => {
      {
        if (_0x3bfe47) _0x11fa71(_0x3bfe47);else {
          _0x633d99([]);
        }
      }
    });
  });
}
async function _0x19c64(_0x5ae356) {
  try {
    {
      const _0x140880 = await fetch(_0x5ae356),
        _0x140550 = await _0x140880.blob(),
        _0x159884 = new Image();
      _0x159884.src = URL.createObjectURL(_0x140550);
      return new Promise((_0x1acce6, _0x3959ea) => {
        _0x159884.onload = () => {
          const _0x44da71 = document.createElement("canvas"),
            _0x5055d7 = _0x44da71.getContext("2d");
          _0x44da71.width = _0x159884.width;
          _0x44da71.height = _0x159884.height;
          _0x5055d7.drawImage(_0x159884, 0, 0);
          const _0x382a4c = _0x5055d7.getImageData(0, 0, _0x44da71.width, _0x44da71.height),
            _0x22f53d = _0x382a4c.data,
            _0x52cdca = _0x44da71.toDataURL("image/jpeg");
          URL.revokeObjectURL(_0x159884.src);
          _0x1acce6(_0x52cdca);
        };
        _0x159884.onerror = () => {
          _0x3959ea(new Error("Failed to load image."));
        };
      });
    }
  } catch (_0x4413ce) {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVI4if/7f//vg38CAIDdCCn32H/7b/9tU47tb/7Nv3n2pV/6pWff//3ff/Yf/sN/EFjuuH7jf/SP/tG58u///b9/8F+ByX/6T//p7F/9q391rnT+/J//838ePIK7pLbvn/yTf3L2Pd/zPQ+V7/3e7938O+BqQso9VaP45V/+5WdPecpTzr7u677u7Ed+5EeOElh6jmc+85lnb/RGb3T283/+zz/7oA/6oLMv/uIvPvu+7/u+B49gFP/lv/yXsx/4gR846Hf/n//zf559/ud//tnP+Tk/56HyVm/1VmfPfvazHzxiP//7f//vs7/zd/7O2d/+239bB46T6dgvJMzLf/7P//kkx1zH9Od8zuecvdu7vdu58vSnP12oP6F//a//9SYY/K//9b8e/JvrU/34KZ/yKWdv8iZv8lD5eT/v55197ud+7oNHAJcRUu6pf/tv/+3Ze7/3e5/9mB/zY85+5s/8mWfv/M7vfPYH/+Af3MyCHDLz8UM/9ENnv+pX/aqzN3iDN3io/PSf/tPPXvSiFz14BCP47//9v5+97GUvO3und3qns+c///mbEd19fvf/8T/+x9lnfMZnnPu9f+JP/Ilnf+AP/IEHj9jdf/2v//XsO77jOzYduEc+8pFn3/3d3y2o7KHfs9+57/Muljr9h+j7aaCmgZR5+UN/6A+d/Zt/828ePOp4er+Pf/zjz50rlQ/8wA/c1Mcc33/8j//x7BnPeMbZr/21v/bsT/7JP7k5bq5T9ePv/b2/99zv/RN+wk/YtLU3oXq04/C2ld73If0Sbq97EVI6uO9i2Vd/+5f+0l/azHbMK8+f9JN+0mbWY9/n7u/+2B/7Y2c/9af+1HPP+w7v8A5DzKQ0kvYP/sE/2Mwe3Jbygz/4g2f/7t/9uwef4Diq8F/3utedvcVbvMXm9+n3euxjH3v2t/7W39o5DBw7pPRZv+RLvuTsF//iX7x5rh/7Y3/s2W/7bb9tE57ZTR20T/u0Tzv7yI/8yDtX6ux/53d+54NPup/qq4//+I8/d+xWOt7++T//5w8edTx1toSU69Ms2Rd+4Rc+1B696Zu+6dkXfMEXbM6L6zJSSOl4r47/lm/5lrNXvepVt6q8+tWvdo7cU3c+pFRRNWL8mZ/5mXemtJTmla985YNPuLuWMzz5yU8+V3FWmk05ZK1sSyU+4AM+4NxzViE/7WlPe/CIm1XHo5mDn/yTf/KtKTWsjfYeU+uif+Wv/JXnfqdm1N7mbd7m7Cu/8it3WnpyrJBSOOrY+5iP+ZhNWJ4/X0GlWZUaWLbXMpdGkOff5V0pDbB8zdd8zYNPuh8h5e6qXqreXA6YVbc89alPvbZrQkYKKQ3StbTwDd/wDc+9n9tQfsEv+AVnf/Wv/tUHn2R3tWkNUN728g//4T+89tnAm3bnQ0oH5+/4Hb/j7Mf/+B9/Z8obv/Ebnz3pSU968Al316h0sxvzSqBGv2U/h6zb/St/5a+cvfmbv/m5533EIx5x9l3f9V0PHnGz6nj8il/xK869v9FLQeXYS+UKKXXEOpaWr/czfsbPOHviE5+4OUbqVF3lGCGlSvdP/+k/ffZbf+tv3TTg8+eq1Ki+5Vu+5dlXfMVX7DzTc58JKZe7TyGl5Wt//a//9TtRtvltGohr2d4ypFRqPz/0Qz90Uw+euj4RUo5TDgkp03WT9U1ue2kg8c/9uT/34JPdD/cipLzf+73f6oF/W0udy0/4hE948Al3U0XVzlvzDmqj6L/sl/2yzcXz+2rG6hM/8RPPftyP+3EPPW+VYSPjLeGpojhm2adxEVJ+VN/d3/27f/fscY973OZ6pH7/+Wt2bNS5/fqv//rNxfWXOSSk1En8p//0n26WYPySX/JLzj3H/Ll+42/8jTeynvy2E1Iud19CSnX+H/2jf/Tsrd/6rW99ebu3e7uzP/7H//iDT3a52p3P/uzP3mzmsazjCgq/4Tf8hrM/+2f/7KY9ORUh5Tjl0JDSCpS1571tpet7G9C7T4SUW1jqRO47k9I093u+53uee75GljqJ9zWtdZ2ucZhKHcyP+qiP2szQ/JE/8kceKl338oIXvGBTuv6g0PTCF75w6/LiF794r6U/ayGlxqtg1Xc6Qmlp0/z9nSKkTFqb/bznPW8zS7FsxCvtRNM1Df/4H//jB3/xcPuGlBrMfsMP+ZAPedjyrqn8tJ/20zZBql2+2N1aSKmD1PU+hcLbUho9bBRx/jmElO3VSXvuc5/7sNe9jaW6ovp/W9VPtS/LtqlSnfdLf+kv3VyjcaqgMnpI6Tuovv4pP+WnDFNq85btoJDyo0VIuYPWQkonwM/+2T/7YVNpo5af9bN+1rmKpc7sPiGlRrklM/Mp8CqpX//rf/1mveO+mlr/pE/6pIee89SlDkpBZ1drIaWO+B/+w3/47CUveckQ5TGPecy593fKkJI6To0mvtd7vde5WbCp9F03GnmRfUJKjUYzI4Wj+d9NpfOzzulLX/rSze5U7GctpPS9thlDM2T7lGbg/syf+TNn/+yf/bPV/36KUpiuozn/HELK9u5zSEmd87bZL+yuPWdb5TdYVjt2bKOHlOralvd+4zd+4zCla4iXv5WQ8qNFSLmD1kJKB/zLX/7ys7/xN/7GrSh1Xjs4p/e/b0j5l//yX27W/c+/i0ar6/Dvuza3hr6dwn7RL/pF5573lKUOSrMwu1oLKb/wF/7CzU0nR9E66vn7O3VISb/93//7f//sIz7iI87NatSYPfrRjz774R/+4QePfLh9QkqdtW/7tm/bdA7mf1dpVq9tYNu5qUaV/a2FlLd927e9dGbsMoWFlm+2fOZ3/s7fuen4da3Dqdf1d7y0XGn+OYSU7d33kJLqqW/91m/dzJyszRo3aPn7f//vP/sX/+JfPPiL4xg9pNSX2GfA75T6DZbt9CEhpfPum77pm1Z3CbxtpUB53zaQuZchpbWtXYB3WzTS3QXN0/uvYml3rl3UIH/t137tubBTZd29UtoxYk1/c5XuoNy1KPOK79TlkJCy3NVKSPlR/dZdH1KnreDaCFtrtts6+rLjYJ+Qkq4v6VqUQkl/0/HTTc5aXtYd6zncMUNKM1ptL97x2PNUd3Q9Uw1ngx+nJKQcps5pM5e/6Tf9pr3L/OaTU1neD6tS21Qdu/YcxyjN+Dbavo/CWoMjbRqz1l5VF3Xjxeq0YxFSdnfskJI+ezNld6FUj9wn9zKktCZ7lB2ntnGMkNL30C5n81Gkln215ezaSGgNeIm9ZWBV7mt6zGtf+9qHzaL0Go221hgcUt7+7d9+M8I1f+5KHZSWf+yqym/ZsN7VkNJvU0er6zn6fN25vVLo6He9qPyFv/AXNteJvNmbvdlmaeDyv/f303P13O0CttzOukb4CU94wuZ1L3vtv/yX//Kms9Pf9Du3tXYzh/PHzMv02j1nr12pI866Y4WUjqW/9tf+2uacnD9XywPrgDVQcUpCyuHqLHfD1mOW2qXlZ2n57Gte85rVxx+rtARwX7V13Si2IDXvrNdmtay6+6rM27uOkQZU9i21u9WF8++o+vFTP/VTVx+/S9l1Kex9DincXkLKLbAWUn7f7/t9D/7r1WocG32qYZ+eo0q56x/6fta05vxd3uVdNgHkKU95ymbbu+6DUqU9qWFt2cc8+FTqvHTBfJXiIXoPzfTMn7vSuvo607u6TyGl775jpN+8mY2OmWZHaqCWv9cupb/tOfqNe96ev+dePqaGeHrdHttrH/K6lf6+5+k5W/bRaz/nOc958IlZOlZIaaDiUY961Lnn6Rho17VTdOaXhJTx9N39xb/4Fx/2WZoN/Xt/7+89eNSYCiqvf/3rNzPFU53U/ajapnbZZrXKoGWwLUHdp/TbtnJj/h1Vh7Wb5trjdynPfOYzH7zL7Qgp3EZCyi1waEhp+cwjH/nIc99BlXJ3cZ2Hjkmjbl/2ZV+2qUx7bP/b4wseLQlKFf1Xf/VXn1s+Ni/NpHRX87Xn30ZbGn/6p3/6uWskKu3+8Tmf8zmbBn9XVX6/+lf/6nPPd5dDSttUHxoMRi9tesC6Y4SUrjnpOFqehy31+rzP+7xNZ68Zse6RVKkj0azLvqUZs+XMrZAynur/lk4tP0ubYVTPjq7fouOtTWM6llt+tXYn+u/93u9dvdfKCKWQtYuLQko7bvZ7jlIanBRSmNzLkNLsQBXUIZpyrgJrqcM+HeY1Nc5N4S479mshpdmNbfSc3Xl3Wvs//f3v+l2/68Lp4h/4gR/YVN7T4ytVbM28TMtr2sr4Xd/1XS/sBPf4D/uwD9ur8e37bKakimn+nL3W+77v+154Dc1Vajx/za/5NeeeU0i53UVIudihIaU6riV4awMRzZJ1fnb+TKV6dSoNBO1TqmMKRnNCynj6LG2csPwsLQm8LZ+lDnGDlc2gXHRd1V0PKc1y/57f83vOvuqrvmqY0k5rb/VWb3Xuswop99e9DSnTAV9D1WN2GV3sb5rqbpu8poLbKayOc5XAvnrOblJVJ7WKs/c0hZVDQkpT71Vmy8/fLMeaZlFal9tynfnfNJPS1qO9p8JNoy/TTMtU+pt5p7jOTde87PK99Pxda7Dchazyc3/uz93s0DJ9L7uqIXqnd3qnc89Z56rrHHrOEUojevP3d+yQ0m9UYL2NpeN+/lkqQsrFDgkpzWR2ofxFM6WnKi0hmwZCJkLKeBr8Wv4m1TVd3N6y4LviroeU21KElPvr3oaUliZ0R9ruqt1663d+53feelehLlprC+Dp+Trpu8j7kCVkNVLv8R7vsXm+KsX3eZ/32XQS6izsG1IKHO0PPl+q0Qho9zRZLqmYdHHy8rqN/ubjPu7jNv+9hr3lHct9zFuG1RK0Lrie//se1/vfVlO9zfIsO9d11tsN6pAguBZS6oS1rWq7UY1Q6qTN398xQ0qhspsjtsvbbSt/4k/8ic3M3LKBFVIutm9IqX5rcKGBifnfXkf5zb/5Nwspt0BtS8tu55+juqZrFA+5sH00DZg1+97WxfuUzrcuyF9+Ty2HXnv8LuVDP/RDH7zL7Qgp3Eb3MqQ0et6+2V181nrUKo06cJ3ANdBX6YZmv/yX//KHnq+/L6S088g+mnbuwvR5mOg566y3nGwtpDz1qU998NfrpjDRRebT31UKIK37XlPD00h+oWR6fO+jnVDaxSkt8/rgD/7gcxVd76fvsmUabeE4//u+1xr9bS6m7Ld62tOetgk8099XGv2vg9p/P0QhpTA6f+5Kn6X3OULp+56/t7WQUmPT73uZtZDS79Td/2+jPs9nfdZnbb6j+fcjpFxsn5DSFpftnLe8h03nSHXJckvYZSlktwy05aK/7tf9us35Vieva8GqR1prXgdrXp/NX6Od5ZYj8ULKeBo8++RP/uRzn6Pfr+9z112nTqHftuPo0DajeqfzaLnD2Lal9rKBofn3VHtWO7n2+F1Kg6y7EFK4je5tSPmWb/mWs3d/93c/14l7i7d4i83dPC/rANbQNKo7Xw5Vp7wbQU2qwNtKtVGYqzqTaeSp0DE9X6XOaXvb9/fLkNJrXxVSqqA//MM//FynriUzl81G9J6XoabA0I3A+psan+c973nnpr/7/t7u7d5uc0PHtHSqjsr8e+37abbisoa4ixbrhC47L73/ZpguCla7KKQsO22jl2VI6Tfo2P3mb/7mzaxTM2Jrx1i/l5Byv+0aUhqgaRlnOzTN/6bS915nuuu3mnG+qPzIj/zIZulrpZuAtjPYD/3QD21uFtpARX/fa7R0c/n87XhUPdKgzdx1h5R2FOw9L+9PcGipTm79//L1ug6n32Ttb7YtDTBdp9qs7pEz/xx1frtn0kXty3Xpd+1Y7LetDuwYXB5T16XfZeT7pNQ+dC1YO3mOUlrtsByoFFLur3sZUrooq1mGlnrNlzR08r7/+7//pbuTrDU07WjShd5VhDXSdeobLWzGYZsRssJMDfT0fFUcjThOI4qFlGZ8pv9eJdcNFC9SZfTKV77y3Inec3ZPios6KHV+W0LWhXTzv3nP93zPTWejir/P2FK56b9XCixN+08NUx2KZqmWHZ06FV2Eu7YUoIDSdTBra38LQO1rfwyFlEZ3l68xclmGlI7njtF+236bL/qiL9oEw+UMYL/HNiGl37XjdsQyD199HiFlN7uElDq6L3zhC8/VM8vSIEeP2XekvN+0a/mWO/d0jFZfdr3ZmusOKbUJXRPXMuBjl9qK5esV2Jq9WXv8NqX6oKXB16l2rSXJ889R/dImLTetGf1meVqZUHtW+99KhYuWOJ/S6CGl36w6tBmfUUrXAS3vySSk3F/3OqTUYa4CmXd86hTWYa5BXdOd6h/xiEc89PhO+Nbh1klsFqZRgKkS6Lle/OIXbxrZi1RxVLFXWUzPWWdgfv+HtZDSdSUX+cEf/MHNkovp8ZUa9WZRWqrWfy8YtYSr62gavWxXjeWNE/v/0919G7X/Lb/lt5zr9PbP3SByGer6Xgsu889U6fqPRlHnN3+rsXvWs561ucv5/LGVgs43fMM3XPr97aIp8kZq5q/Rd1kQainKCKW1yvP3twwpy6DVb1AFvrwL87YhpUD5sR/7sUOW3mufI0LK7rYJKXXUm/VomeVykKDv+s3f/M3Pfed1qLvJ59pgw2XqrDXYUBhZjuTWIXnVq1714JEPd8qQ0jkyf97bWKrDup7tOjU7sTy2qt8vCprXpbD9aZ/2aZs2dHpfUx35ghe8YOfj9lC3IaS4Twoju7chpf39U+iYXyhehXbRRfCd5C13ml870vKkOvj5nu/5nk0jPP23SuuxGxm4SB3n5ft7x3d8x80F7JNdQkoNbx3W5X0N+ly91+4IPJVCSBf19dzL6dU6JnUUCxR97u6JMr/WpNI08Z//83/+3Ij3pM/VjNPybxqlLJQUTuoc1UlY7iDUe+0C/Je85CVHXcawFlL6DG2i0OjbCKXOxvz9LUNKy96Ws1l9V+28Ntdvtk1IqUGfP9copYa00eXp9xdSdndVSKnzXz3423/7b9/UKfPHNWjQ+fud3/mdm/pp+t47ngoqn/3Zn73VLHF1QzPCncvL47bfuPqx8HLZQISQcnm5iZBSW7dcGtyg0iGbxxyq37PlhLXB83pvKrVzbXjT0sOLBiGPTUjZnZDC3L0MKU25T9dQVIk0uj8feenEbb3tsoPcbEK7z8yfq20AW7+cHl9Hah4QqpBaRrU2glOl+qf+1J86tz67167hrEKZrIWUprMvUkOx7BDsUqrg68x0jUrvsdLsS7MmU+jo++qzLr+jub6Xlk0sO5Z9lj5jyxSWIabXbvT2cz/3c49+AWYhZXn/l2ZR+myjaI/4QupUuvC4a5MmXYtSwJx/hmbvlhsTdPw84xnP2BzrVfCVjonlcozbFFKa4WyAYfo8ldEa2JFcFlI6t5q9qDMwPz+n86+7WXe+dO5XD7S0Z9656RyuXuvmrhd1+Pr3nVvVVcsZwpbhdDF9gxxXzZSeMqTMd2m8reUmQkqDIst6qBUGFy0nvi4d110z2sDjst2p9F09+tGP3rT/17H8q/pLSNnNISGluqJVLfetdNxXn91F9z6kpHWQdYjmj2l0v0Z83gC3Fep8SUQneJ28eaCoY77sCHeCrV1X0dT0E57whHOVRo35a17zmgeP+FGvfe1rdwopjcg3Ojo9ftfSrEojpUuNQE3BootLrxpJ7aSpE9IyprXXWSs1fL32Kabl63Qt7xlTEOhzjaL32DUmU2lZXr9n+j673qnff3r/dSrbWW35ffXYgkvH+bwsOxFrIaXn7Ji8ztJrzt9D/24eUvo8zbxd9Xn4/10WUroOrM7T/Bq0SgGlO8lXN02qAxs5b/eu+e9U/dd1d90Yd9nha/OQrgN4r/d6r4e9RgHjkY985GbJ7TZOGVKe/OQnP+zY67nbRKVAfBtK4aABo+vS99bqgc7R+fdWMJi3hTel46XrJ1ue3DE6f4+V3nfvtTDTcXpKQsru9g0p1VOtjPnoj/7ozSzwfSrdkLQ6/S4SUv6fDu4u6Fxek1HYmDpBNdpdpDj/723T2VKhuSrIbso4DzNVCl0jUgd0rop0PsJYY9ne58utBQsp873WrwopVYx1ZquAChwFnJZZ9Vp99taAd11DS5+W90LovfY5l+910sholW7f1zb6bgsq8y2bLyq9l9YNNzJwCn2m5bU6ddq6w/5tUBBpW+r5+2/W7pAlT8uQUgBtu+euX7rOsty0oeNwHlLY3VXLvRpk+KiP+qhNp7zvu45As3ZrI8x1TDv3+03mM8XVWXWSWwbbYE+/VzMvbeyxHGmvVBfVUVpex3aZ6w4p7SbYbHTXXdyW0rVqk36/OiynKtWjy2WpHT/Nmre0b9uy9tz7lJYkzwcT02/byoc2RmjJ7Py9TqUljd08eZtli/u6DSGlvkLfwSil62bnGwlVtg0pXRO1FkzveqnPVn1/F93LkNIB31rruUZUarDmB3gdtiqxOs11ypcX45XY5xeBT2ow6uhNj63UsJd2p05Xr9e2vPMp6a4ZmbYdnlsLKfMtj5emDkVLprqWpCVlhbJG5lue0cFcZVB4aDvm6Xkr/f9v+7Zve/BMD9dz11mu47CtfoPljb+Wpe+nirtG51T6zO2INX/drufYdkT3pjXjs7zmqY7g8nqUXSxDSqG2DmG/83WWzsf50j8h5XBXhZRUH1SP1TFv44/Lzut+p/62ezwsA0h1Y+dWF+C3hHLZUaie6xqGrq/a9Rw/ZUjpBrTLkFJ7cdEgzW1QW/W7f/fv3mzosizNuk6lWbB9SrPpy+XEfYe1HR/wAR+w2ap6m7L2/vYp3YekXTXXNOBXG768yfBUOm5b2t21fh0PxzZ6SOm8bDVBs06jlJbUL29FIKRcXoSUW2zbkJLv/u7vflgn8K3f+q031wEsK5pCQ0u41iq2TpZmSZZ3mq2D0LKJ/nv/O684q+Q7QdduIrZrSNlGIanRsGUoa4ZmvtTjEFWKzVJ86qd+6mZZwvQ6a6VR9K6t6E7XjcjuEoK21ehd9ySYv26NVKPAp3i9YyoMF/T67efvv9m+7gmwr7WQ0kXO160QLaQc1zYhpfqr861lqtt20ur4tfX18oaP1WHzDtBUGsmuEW351z7LgU4ZUprBW4aUrr27zQ3+K17xioe1PXe51I5ONxteUx+gGfra8uVvXakNKMic4hqV0UPKbSlCyuVFSLnF1kJK643XlitVSbW2d95ZaqSh9ZHzGYdO8gLFZcuSupDp4z7u484tYem52jGrIFIYmP59pYqyve470ZZe97rXnVuKdmhIqXFuSUYn/vScVd51aKZNAA7R89epbvvgbuy4S6XRFHxBohsWdi3G2vexrxqMtU7JdAFvv1mv1/sfofReOiYbJWxzh+XodcdhI8GHrKsWUu6ubULKPjouW0rTMsP5TPBaqf7rfG5ZbL9lx/WurjukNBvQrOttJaQ8XHV7Hdh27pz/3h2/7/u+77u59u8UhJTjlG1Dyqtf/erNRkQtHb/OsnaPt+q+zsO1xx+7PPaxj33o2tW7RkhZaH3vcgevZWldddedXKUp5CrF+d/W0WwGYz6zMAWE5bUok2OHlLXlaH2mr/u6rzs4FBRO2o3sIz7iIzYd3vlrTKVKspO311x2EKbS8q+CYPdkaKbgWKNcdWzWtjzuRG/av45XS1LqFN1k+bIv+7LNe2ljhULyWtDrWDr0RpdCyt11zJBSh75lnq0XLzD32xQU5s99UakjWD34+Mc//uzlL3/5pkPYe6vjuI1ThpSnPvWpD6uDWgp1UV18Gwgp6/q96+g2+9wxWR1TW3/KaxKFlOOUbUJKv28d9VbJ1L+7zlJ/bPmeWxJZfbf2+GOXbllxipnAEdzLkNIyhZZjrelEftnLXraajCs1aK29nl+oeJEOmnbKmV+419/XGZs3jM0eNB19kWOGlCrNOqHzjnrvpwto9+0QVjm0RKzZiDoiXaC/VhH2mfusrSNu/Xt3/O/i/XnndPn4Os11tD790z998/x1HvZZMjJpVqLfb/79z1+vMFAH6KZLIa33svY+K/231mIfugvaMqR0rLaUp+P7OkvXQXVcT+9DSDncoSGl86zzraWphYSOt+4r1LG5dlz2+1WvzH/HeelvOr6qf9/93d99cw1gW2JXF9RRbPai47l6szplct0hpc1LWhp6W3WD1jpIres/dqn+XtbtfX+tBFh7/HWUt3mbt9lcb7mNfvM2RWj2pF0n25lufqylY7CBsdqKQ0s7LDZgN/++Oj/aWGLt8fuWbZb6rIWU/rmNdKbrQUYoBcflQOI2IeUmfemXfum591vpWp/lrQHYnZCyoqUMy2sXplKnuZHEbTUzs7xYe16q4BvZaXvVixwrpFQZd91NN1Cbv37bMbZ1366adalj0Vrz3k9L4tbCSaWpz673aSen1sBPf99sU52VRsMu+ttKf9/OZF1w2UxHHad+22WH5ip1eFqG1nMtOye3pRTq2tq1hnmXz75mGVL6Dfpu5nfBv45SR2P+e/Q+hJTD7BJSOo46l5oJbYOGNmNoa9IulO63uWhWtBHpOoq9TjPEjeK3lLXdA/v3ly0H6/cubLQ8o4vt2x2q5VfVEW333ixhN8LtPV1nSGkHvV7ztqp+LfR3LeUxSqFnKs3wLnfBLKD027dE95SlWwKslY6TXTZjqN1pRrDZ27X6s41m2qp+ulfVIaUAsJzV6nirvVt7/L6lc+6qkfS1kNJgV1v+1+e5qLS5xg//8A+f202u/kr/fu3x81KAmv9dz9PxufbYqTQr1meaf2e3NaSMdHuD2+pehpTujNuo/EXqyLa2scp3/neVbq63y83/eq7l/VXmpZHF5zznOQ8eva4QML8eYd+Q0nfR8qH50qE6Et2FfJdlXlM4qXFoF5mWz03PtyxVyC3rakeYpmH7PpZqYFo+V8emzsfa88xLn7+OUx2oF7/4xZtKbZflGY2U1cFpW+TlrNaopfdYh69j94lPfOJmevcYliFllCKkHO6ykFLnrHOxc68ORx2Awn9LHtvAovrmovOif18d0oxpI9JdS1cHZKpD+t86I+0s2PUdjepXl+5ynvX7N2rfjEujkacKKWtbEPcdHDpDeRf1fRVC5ysDKtVJI3cgd1V7XZs1/4yjlw/5kA+5sq4spLSEuEGo2uxKA4stqb5MdUQ7hdbnmEoDCc2AX6bQ1KqU+d99xmd8xpUbvbSzXjMq03us1O9qYHJUF4WUY1zje98JKRdoJG3thoh1jHvOXdSh74Y7y+eq1Im46kA+RkipgqpDP29g6gjscsFVGwW0nrzRtG7Gthbi5qX/XmXTsq6rGv0awCq97irezE6fce05l6UORg1KYWmXoNLrNcrTaHHLz1oz32hNs2wjlTp4zXz1Hhvxarvkq0bMdiGk3F0XhZTqm2YT23ShurF/Nx+4uKgUkrt2q5nhdpprqUz1ymUKLA3qvPSlL910/juem5XZJrB0DPQe6ySdIqT03hq0mT9vRUhZ1wYdLflb/nYF1as6rLfJXQ0ptXnNYjTANS9Xbbfd7EaDgvPXa0Dxqn5L/YX6S/O/62axrZ64THVKdcb8PdbvONU52et9//d//2ZmqO9oH2shpXu9bBtSet3q69u8Ycep3NuQUsf/Ih0wnRgl+PnfVerINvW8ixrDppaXFV+NcNO0VzX0h4aURkxf//rXb9aTz1+/jnkjYJedmP23Tt7uzvv4xz9+8xx1EC7qZPTvCyeNfHzJl3zJ5qZt0wjrNvouWp/ehYV1nlr/vvY689JsyCd8wiesztJcpb/pepqCWpVxo8qNAo9Qei81/lVcvcd9Pt9VliGl369OZEs6ti3LkdVKv9vaYy8qrUGeH1NCyuEuCimdX0960pPO7Ty4Vvo9+h1bjlUwecYznrHZDr3j8ao6a6l6pE5Gr93dynv97mDfspeL6pP+W/VTx/0pQkphv0Ayf95K1+ed6oayt1mzZd3rZv5dFVy7XnDX42FkpwwpHefVbcvSv9+2rD3vNiGl86hz97L2fs11h5Sl3m8DFYfsYnmZAlC7kHavqOqU+oy7fkcXhZTOmavUttenLOy3SkLdc969DCk1upeFlGZRWmM7/5upVCm3hGGXUfs66b1eyxfmz1WF00WaV81kHBJSOtmaMWgkfv7adSy7tuaqxqWKrxOwDsP875elzzKFk2c961mbkYlDOtXt/NP0bp3olp9cNvratS7HWm7Q79ruZG1XOZV2zzhmxdH3Umetdf9T6TWr0HatHA+1DCn9ht3XphmbbUpL+FrXP3+OOr8db2uPv6jUCZ3PntVwCymHuSiktNyii4eX94Sq9Nt1DHRPifd5n/fZLA/pmrj+pnO6jknnSOdDv80uAxBznd8tO+u47zW61qwZwwJrwahjoUa7IHGqkNJnaCev+fNWuk9KM+1rx+mpyy534r9O/QbNvi2DbZ355aBdv2vXr7Rb5FT6nW9L56s6rfA6v/HkLqUlih2f8++p0mBaKwu6kH5ePvzDP3xzHVSllQ2Vdt+s1D+oFEIqdfqnm3FWx06v2Y2iL2vL2wii36HnqO3ZpZ256ZDS7E8znoXhriU6ZiCuful5p817Op773muTdwlFayGl5eQNNl6kc6q+WQOyDX7Xv6mP2GYi2+58eB/c25BSw7umk7dZh/l9UZalA7mbDm6r0fBlSJhKnf/uMn+ZGsyWWUx/s0tIqUNRp3M+I1HQqiG+agebvos6IVVG7/3e7/3Q389LJ1bP3ahB61arAA8JJ0u9fs/ZGtjCStf2zMNKjWajD8fqzLaEpc5bIa5Sh62L1KeL/Y+hyq+KaT6T0HHQZzzmd7eNKuiOh6lUSV61Rnmu99v7nh8TLR3qHkG76JyrYZ/eR79rSwqFlP1ddk1KjWDrwwuDfd9dm9ZxXwep5ZydB/NlrR3/XVfWOVh4+ZiP+ZizboJaB7V7LhWwWzZSx6Rjorpjl45Q76d6puvcqkeqL9u+Mz3fKUJKo7MdY/PnrTQgUqehtfvXWWpzWsM/otqROtHz76l6uO3Rm2mfW5uJ6EL0tQ0bbkLtXu/lFHVL7VWDf8vZ5c6zQvhlndZT6b5s3ayyPkTn+kd/9EfvtDzvJkNK5/70fdauVP80E3vVErVtVD818LK80XTHdTuMXbaZ0dI+IaWBn8Jmv8n871qt0uYN+w4A3TVCykKPr4M1f3wH7bxj3D93A8C1u8Mvlfrr9C0rralUebWUYlnRz+0bUppGbFZjuTNPy7zmu3lVEdRxrvJuJK+Ts5uvdeFrWyi3I1idltaTT8/Rd9ASnUaNuq7j1A1QFUqdrq5vaTlGDXqVVp3717zmNQ8edbhGM+swzL+vPuM2v/W2+q6f9rSnnXuNOuWt8++3uE7NQNUpnUrbU+9yY7Pe7zFCSsddI0jT++gi7maxrvv7uEsuCymdT637bla4mYwaxctG8TvHLqrDGoWsbmjJRKOQzUL3GxY42t2mc6e6Zd8R0I6BU4SUZrB7z/PnvclSW1BnZzQdKx0f89n8SnVWA2DLa+RGDykvfOELN+GqneSq/wqruwTqy9Rx7xybf/ZKnfMpdF+nwmUd4fksdedO1zduG9JuMqRURzWrO3+O2pf6AIcGlfpHLROf9+0q1XNdG7tLSLgopFwWdFr++uxnP/vcbzOV6u0uOeCehpR2pWlt9VIV1Td+4zduQsz02A7gtsdsm9T5c3RgNeJ31UXMdfiqoOd/uyyFiOc+97kXVpT7hJQ6Bb2/Rkjnr9XfNiJWAOneLHWMW/LTDacaKW20p2t2+rtmEQoBTX32OXuPBZNGHnqOLoZt551GZWrwr6s0qtvWpFW0zUj0746la4caRZ1/Z4XIY14YOlJIOdSxQgrHd1lISY1wS1uvOuamWZf581xWGhlsdrVZz+qPOoTVLYWXGv8GGpod3dapQkqdr7aInT/vTZZRQ0ptaJ3CZWeudqLBrKW1kPKu7/quR52N3lcdw+m+JR2ntastp3rlK1958BKbOuUd49Xl889efdhypatWLpxCHfE2lVm+pwb5tr15802FlMJjQbLzYv4c9ZfaEfWQZV997vo19QXnz90x3iqTXZdd7hNSUt+l42/5+9RPa2le3/19J6TMdEA86lGPOlcZV9l2ADbCvJyWK7xcdqfbKr2mWaf1jpWeoxBUAJj+Xa/XUouLbvzTPV1q7KfHXxVSOnlrwJfXwFQ64du3/bKbrs1L39U069JsT52MOvJNY378x3/8pgN/3aU1uIWUKpoanWONgmUtpLTUrQ7fsQgpXIerQsq2ep6uD6nOqi6rDlt2WLctHefVKQ2gbOtUIaUORB3t+fNW+mzXUZavO2JIqW7tZpvL2eWOgTpza6PxayGlGavLVgtcl37zRzziEefeW997u28esvyrtqglq8vvqdJWtMe6ZnIfvXaDrPNjrn9u6VTLna5yEyGlPkz3+unx87/vt2r299BjqUHHtR1Xe72un9q1T7FvSEnX3nYt77JOaEan0Ft/4T67lyFlOhDnqmRaojBf0jCdEB3QTS12Ys4PpBrcLhruZFzT0qHljloFlJa1tK57/u/r2LV7ztoBuU9I6TqX+fPvW+rUrC3/6fu4qaUSbc172c04D9GsVc8/f71uMnfMrQFvIqR0TBQsu/DwmKUbSnbcLj9Ly37WHn+Mcsyld3fZsUJK9VvnW6Hgmc985uZ6kZ6356o+a8Cj+qv6cq3zvSxdg/Xt3/7tD579aqcKKXXQ5gNIlY7drq9r5H9ZmhG/rHRT3svKu7zLuzxU6jQul8+NGFIa/e8i8uUAXQNg3R9nzVpIebd3e7cbHxWujW/GZD5AWOl3OPR7r5/xsR/7seeet9JrdU3FVSsuTqm6v0HWtVUVj3/846+c4bmJkNKAbdeCzv+2uqW2uY2EDhmYrD6pf1Q9NH/+6oLum7RPG3xISOn12pRivpx+Kg0o99/6De8rIeWBLvxsZmT+uBrgpgQnNYo1yPPHtE1xa6+XmmZt14555V4D+Imf+ImbJRb9zbKBbAR/rfO9a0jpBK4iqCGfP/9VpedtKrUTo8/elHCVzFqn5q6GlH6X5ehNx88x92i/iZBSQ9NuWa0rP3ZZ3qi0xqTlPmuPPbS0PGOb67E4XkhZU4ev52+WtYvnuwdTAaZBnUaOO4c6Lup4z1+/Uod9lwuITxFSev9dZzN/zkrHVyPip1a4Xy41Gy2k9L13k92187sZ7YuWb40aUgoKbX29PCbbVrnfY1+1t+1mVv00f97a/kc/+tFbL0fu/dWpPUWHtEG2Vj4sP3vnUasjLptFuu6QUt+pga/lSo/C5Gd91mcd3EZ2nUszF/Pn7pju322zZfCaQ0JK+u17jmWArlRnt/LnkGB2mwkp/08jCZ/0SZ907gTun/t3885plU2N8Hy0sIqo9dbzkfYqmVe96lUPq9y72H6alSioLJ+r1yzYLCu1XUNKqlhaCz79Ta9TKOpEb0Sl56sz0WhF15cUnlq20/1QOiF6n80g9d3UoC+NGlI6kfvNet/7lK7VWTawLWvoN1l7/D6l9a5r2/a27r/jaO1vripXTQl3PDQaPH/N21g637rBH1c7ZUhZ6ryroa2DUd3Qcsw6qy137XqG7onSedu51bG/y9KaU4SU3msz5/PnrDQw07agp3YbQkpBsmsU521UpRHo6smLOk2jhpRC1fJ86LO17KfrH/bV5hBtLTz/nvrnLvjump2rOpe1r3X4u4i6GbZXv/rVq23uIXoPXQe27JxXCiC95kXv8zpDSu+h2a7ltSK1j/XjDp1Fbwl+S6iWA8QNTrzsZS+78re6yKEhJdXXzcYtZy07lhoUaBXBfXTvQ0oNYGsfmzmYHxSdlMvRlQ7gwsf8sZUq7Q7wSZVBjfL8MYWDdhWZj5K05KH3Mn9cozHLBmCfkFKntZ0runt711QURBqd6AaLjfq0W1cjCq3trJO76+jNWkhp9Lyt+7pT/7FKlf9yhOqykNLnbnp92le+Mu01v01p2UZLV+av1wzX/PkOLe22spy165grxK49/qpSsG3E8zJ3KaTUyeVq+4SUBk8K0f1v51L1wr4Nd/rbgkuv2VbF1Z+7rs8/RUjpszUwM3/OSnXatiPfhxg9pNRutqHKssPUe6zOuWwjkS7IPmVIqfNb2eW47LHd72o5cNhx1FKofY/xjqOCeM8zf94GArvu6qp2tQG12uNmuWs/awdq807RIe29FCCX7Wm/acvPL5pFuM6QUjCu79R7mv9dr9+1UYco+DVLurwOrQDU5gKHnPfHCCkdg32ny8sKKh0bBZhjLju/Le59SKnxbEp2/t+bcqviWdPztY5z/vhOqDoD/bca9yr3eUe3/17Fsxyt6bGPe9zjzjUEPXZ5X44q13mY2SakpBOkINI2hMcemVkLKY1+dBFYFe+xSr9PWwDPX+eykNJ32j7w88ff9VIF1izMZdZCSsdaa8vrUBxSlmvrK41UrT1211LjP6+wO1ea4eRq+4SUOv4NajzmMY/ZdOK7fq4lr20QUiemhrzRyOqTyr6du12cIqT0OZbXBXac1VkpVJ3ayCGl77slfMvBuErt0FXXE73iFa/YLBme/90xQ0q/e+1f7WJhqfd71XHYMdtW2/P3VGmnyn0DQcd/58bye6qOqk9x1Q5R/X3Li1syPv/72vfOvVMchwWHBi+XS6nq8zSIubbD2XWFlNr7duvsPJj/Te1LO3muvbdddKw0QLgMAF033IY5hzhGSEnHcTNJy2OiUvDddWvku+Beh5SWHLTGcT4K0gHcbMBl2yU2hbvcAaqTvAsJu8hpHigqHXDN1qzp5FjuNtJJ2fUJk31DyimthZQq613usbGNOhNNdc5fR0g5X/YNKVV6ze51D4R9S8d121fPn3eaml97/K6lTuO80eq5b/rYvy12DSl1ApY37KtUJ1a/1VHpXGzmriUT07FTh7sZ2Ub5dh3h3sYpQkqDKWu7PDX63eud2sghpeuM6oTO31ulc6/R3GYPLtMW06cKKXXQujdLz1m91/M+/elP39wl/rLjrtdetiMd182ed8zuo/Noucyr0iz5tp3eBhC7oeiyY97yo67zOkWHtOVp9XHmr1dphqVZsOX3eB0hpXOu2z8sj5u+25bF77ol8FJ1W8s7l9d8dAzV8W/55yGOFVJSv7T3tNydte+ivmTH1rHr2JHd25DSCEi7RCx33yp8FDQuOwg6+Rp16KBpxqQTuIqyazmqNOeVVidBa+gvqth7rumu3/P3UQM6bUkspAgpl5V9Q0pLCLt24BA1LqfcgvgzP/Mzz50bdZTqIB9L53kjeNO1PdUXUzm04bppu4aU7oC8vPvyRaXfpOOu5TMtd20L9Tps3Ym+EevuCl19WCNdeGlUeNclpZNjh5Ser+W5y2WdbRrS0pvrMGpIqV6vY7lsj3pvbVl70Tb5c6cMKZ2Ttafz5+699p4vC09r98Sow9pxtU8QqM7oGpLl99T50DVY1VvbqP5pR8nOn/nz1IfoXO1GysfukHb8d+1pQWj5mv3Gy5mlU4eUPl8ztR0j88f2ftrUoNB8yHfQ39axXy6x7rd7j/d4j4MDUI4ZUtJ76lqp5fHVd9J7boXMfXFvQ0pb0NWozkcw6vx386A6upfpoJ+uO6nC7PqOXqcdm+bTqB1QXeNQg3SZTtq2vZz+rlJn7FM+5VM2J7qQsn1IqaF6/vOfv5lu37W01fBypKXvut957fH7lu45sRzF7Vh5+7d/+82xuvY3l5W2hO14vsxtDSnNdHYuzJ+7AYFjqfPcrGVbJrfWvu+ykbsaiK6huM12CSl11Lp4tmV6HYvzv9m11LA2Cth5Wke8erbj4Yu+6Is2Sxk6dxvNLRRWv9XxvKwTcuyQ0uh1v/f8+SqNUm7TCT+GEUNK7V7nW2Ft/r4q1e3z6y4v02+83N71WCGl+r0gPH/ujtdu0HjRMdTIdMuFlrMVbfl6Vdu8pnOlGeTllrHVTb2Plnv3/7fVKP/nf/7nP2zkvOdrpqe29tgaOGgGfPmddO62C1j9mcmpQ0rP3zbX83q+0nLf6ozO/0N0sX0zxMsOf/VT18gdw7FDSsdybfPajGZ19Cd/8idv6s/74F6GlJa5LP9dpQZ92zshd+J0ANbAVmm1fKyTav58jSZ95Vd+5ZUnWZVoldSywmhUs3utFFLmo0DXFVI6UfpsVTZ1bOYnxaghJY3Y9p3uUmooum/C8qLCPtN3fdd3rf7NvqXvsd9v/jpV0HUQ+q7X/uaqctVo4G0NKXUuer75c7fV7bG0TGm+C95U2sTgtt+PZZeQ0u9YHdYsZEtBGjSpE9b5UCCoga9+OjTAVHd14Wq7RrXMpQ7Ri170os3yq4s6mb23Y4aURlWXM0Z9ti5evqquPpbRQkphveuPahvn76nSd1191ezBNk4ZUnqfddznz90xddnsatci9NvO/6bjuQGefWZL65wvn6/zot0y9x3YaOS8gLM8vxo0a1nlsWd1O9eapWmmYv56ldqF+aDXKUNKbXWDRMvBwer5gsUhu66l87nvbxkAe706+lctXdzWsUNK+m5afrfc7KHSb9T5elW7fxfcy5DSAbrc4aGDuANinx+9HSmWF3fX4DTis+3Fb1UEbT84fz+d4E11tt72ukJKHd6CQRVQa0Rb1tb76N4GjbRORg4p+6jS/uZv/uaHXQTelo2HVDRrqhhv4j4ptzGkPOc5z3lYSGlN+rEsz63pNTp3b7t9LpyfdIw2q9CSrTos/cbNMjcLWOe676wO7XIrz31KHcY6nhctBztmSKmz19LI5ahtz9c68OsyUkgpfLRef7lEa3pPhcld6sDajeVgz7FCSrNgyw0Pas87Pi/SMbxs76vn2+lyVw0wPfGJT9y0wfPn63y4ajb7MrU/tfXLMFBpK+Pu6XNsnW9f/MVfvFm2Ob1Wv3ed65a8T04ZUnpMy91ri6bHFNRadlaIOsQUxJYDEj1/mxMdc6vxU4SUNHhaX2H+G1X6DNXlu+6UeBvdy5DSdSdd5N5FuZ00NVAt77iokbxKazh7jelA6gBq/eO2szIpHHWhXB39KuGXv/zlm8ajE+1UIaXP2xR/mwTU6e/12961wNXrVZFPU6T9/5a1Te5aSClMtmtblfT8tR772Meem/o+BiFle5/3eZ93rkPQc7ec4lhqpDv/5++/znejwbfdISFlqfqpAYzqi573+77v+zY7QLXddyOSLZXrTup1BhtgqS5cjgpfVLpB7mWB45ghpfdd52H+XJVGlA/tFO1ilJBSJ7GAMm9f5u+nzmgdodqhba3d2PBYIaVZkeW9PhppvuhY6Njp+pD5QEela0CavdtF31V13XIgq2OxHQe3HZC8SO1xo/7LWYV+hwYHumbs2DqX2+q/1+hzfeAHfuCmTZi3Q6cMKelxhaKOkX6n6pCuazp0lqBZ8pZ1LuuhQksbfuxyTF/lVCElham1zRXqM7RE/bLtwO+CexlSumFXO3TV4La2tA7/IevPO9hr+BsRaNSjC9Lq/Oyqjn/hZNmJODSk9P4aQSz0VOHUGNfBaOSw5R1VOK3HXlaO81KwaznU5C6FlCrDnm+5Y1sdrSqfY1ZmEVK20/felpTztcQd+/27Y6hT0Hacy0asUby7cGHiMUPKZfoeG+GuMW1pZCPKzVbUQajjUQenpbCdT/Pfcirdy+mybWCPFVIKWV3PtBwF79xrqU2jltdlhJBS+9dsQvXp/H1M76WOfEsAd+0sNiO9vCj7WCGlAbXlZjfNAF0009A50IXG88f32br2bJelRNXZ3YuqNm75XHXyr+qwb6t2tZsHLzukXSfUDHLH8DFVx9YHqp7otgtrHd5Th5R0jNW/qN3ofRwa+Pr72tPlDEQzv/XTem/HVLhctiPHCil9N90jprp7/vyV6rKWiW+7FPM2utch5dhqrKssW0d/zIuaWkM9rxyvCilVPDW4ramvMayhKTQ1W9RF4FU4a+scLytv+ZZveW5m6C6FlDpt7//+73/uNSodJ2sV6qGElO107nYR+/y5a3S6fusYunh0edPVOgct9Tr2GvCbcF0h5SIdG9OgSBeodnx3n4KuAWpAoJHbjvuuS7ms83WMkFKd2A5Cax3yrp/oJnfX6aZDSvVqs5Rr16BUqu+7qfA++q3ny3cqzX5cdLPAXRRml8vSGmDrt13qN2+Ab/n4BuN2WdpXh7aR/WVHvdJxXJvfax1Dz9Oy6r7/U7/WpHOvGcbapTXXEVImvYcGPA5RfdEg7Np1Z9X3x9jNa6mwf6qQkr6X5z73uQ8LXZVmnlpieejM06juZUjpgtDbtJZvl5BSBdbjGxnsOpIa4G2XXayVKvRmcZpWnE8335WQ0vM3Vb88+etot7vasUeuct9DSqNcjbrXWPT9T1vUNhpUw9YIZ9d5FfaXS7FaStT2mcfQDlPLTlrPf8ja8pHcdEi5SL9zncquAazhvepcPkZIaelHS9Lmz1GpbmwpzXVvknBTIaX2oeO+83N5bk2lWZAXvOAFewf1OtLLGYdWGDTLdoje+7d+67c+bLlVm1ysBaAGDZt1rW6dP77Bp22X9tVhrh5aWw7XMsVG0Heps/sMtSnVdz13dWDnY/VdAazbIrSL2tp9TDpW2y30us/f6wwpx9DzL5cEVgp+BcBjh7zOk2Z/lq93zJCS+lzLTSMq9V1aqn5Xd/u6lyGl6eL59RWje93rXndut5SrZlLaE36509g2pcq8Tlonc9uGtta8a3daCtcJME/qtz2k9FmqQFrus9xys8agDsRlS1AOcd9DStd71FFoo4h+2+5w3tKgrhF73OMet5k96b+tXZTdaOKua8nX9Pu3dr73On/+toE+xojvCEYNKXMdP1eNAB4aUgpFhaG1Tnn1ZKH02B2Xq9xESGl2vVn1zrnlkrdK9V6jz12beMhym9rWzu/5c9eh7zc8RO+/ayaXSwYf9ahHrS5TKngu26hK9UvtymV6re5f0mDfMhRVqjfqMBZ+e+3CRq9X2GhWokHQ2u2WUhXGX/rSl25WMzzrWc86e/KTn7zZuaprT1ta2ndV+96x2AqHBgaX9dJU+t3a3bCletflNoWUXrMO+zKY1sZ3bdIp2teOpa7lmb9epfB8zLq2OqpwPS137DyoPewGtB17112HXZd7G1IOHdW5Lp1Ujaws1+VftuVio9SNuMw/87LUINUJrPFo7XEVZvd8aZS6jmsHfSNRF1kLKVW0/X0zOccqXeBWhTh/nUNDSg1Qy/3agnJt+rRRszoLp5o+ve8hpe9+ua58m1Inrrudd04fqtGvfoOec/4au+zIN7q1kNLSgI7tOua3pRRGutP5/HNsG1I6Prsod9lprlQH1jbcxIWn1xlSqsfqTD/vec/bzGj0ueevW6l9KcB2TWT10yFqf7rOaP78fbbaiwaG9qnjek8FrLXfsft9LN9zn7mQsVzWXNvZ93BV3d5gW9fRrH1XldrOli22WUQj5m3Z3RbEbZjTPbAKe7VT1bEtN+t99DcXPd8upcHAyy4sr91utuZYpd9zeV+v6pUG8dYeP5UGNrv2Z/53hZQ62muP37dUl08d9P75JS95yebcmvpM/W9tfZ/jKj1PQac+Qs/Vsdr3vBYA+veFxTaeWF6DVam9PfbsRu+ne8dUj1d3NSDde73L7mVIqaJuu7+b0MHegTYd/NMJsFZ6TFPznWDz919ld9kdbTvJlo16lWMd4Za3NCrSDl6NyDSqXUd1147fWkipMqiDX7o/Vmm98XIka9+Q0ndd+GqKfu3eGJVGXFrmdcqO6n0PKXUKl1t2X1Xq5HTe9rt3bhyqxmN5XhVYu6/RXbEWUu5K2TakNGrbste152gHqpYPVS9ct+sKKXW0Guxp5P6ijVF63WYuW8d/jO+ic6vBhOXrFBC6v0jr57tIusDSEuKLSp3KRuubOa1jVhhYPmfn7NpWwrWBtW/Lx9dJ7t5jV+kzdOf45d+PUPq9mg1b29yjgNLsTXXysUp9jWUnvBDWLotrj59Ks5fLsNpKjQZY1x6/b+mcmc9Y1Ca1bK5lnNUTvdc689to6XHtfxfX97yF9i5a79qmZggLWLWZDXJ37VUrWjqm5p+x0m/UjN0p6pbq9Ve84hWbNv0+EFKuWSdTlWfXQXThYjfkabSwHVG+/du/fbOet2niGoxOwILAcmq+xqbRgotUUTXSUmex2Y2212w6suerUa7yP/TkWQsp11V2DSlVWoWTr/qqr9rsj762jKjS9/qkJz3p5COr9z2kFAD77/O/uagUrmvYWhJWY3GsSr+R0uWNzFrmeMw1xDftvoeU6to6xfNZ6KlUB3TB/k0ElJw6pHRetvSoXdaWFxDPS+dq1z90w+Bj6bVr09buXF/pcxYQW1pZ8LioNDtRW93AWn+z9lzNyK5t9d89flpuM39sdUmfdZulUh0X1TdrM+3HLtMAYsd0My4t+6pubrS8325t6XZ9gpYqN5Mw19LGls4uH3+Xy0W7u7UMq+uJWma3/J4uUn+xpe5rr9PvVF1S3bHsky1LfYlem8MJKdesaffWoVbpdqBXCXZAN1tQpV6pour/9987MebvvVLFfNXuZHVK6zwWeOp0V3kds0EePaQ02t4F2I18tBtUjVONwNrzVWoIC4517E7tJkJKn6tOWSNwU2mk59CtdvcJKY3uFhjbGrTfpdI/z0udy95fv0k7L3UMH2MGZdLSkd7n9J5rfNrhrfd2V9znkNI1Am2vvta5rU6t7rrJbaZPFVKq4xuEqmPWXf3nx/i89B3Uuesaj2brjx3W2iq4e0xdFC6OUVqqXN2+PGf7LB0byxn46tgupL9sGfNcbdxFHdaLSp+316ld7/UbYOl7brS9drvgVP3WNsMf+ZEfuRkUa2vhZh1e9KIXbeq6OtyN1DeL1HvomFjbha3ZjcLg/LcTUs7r2Ng2oKT2rN9krd+1belvC9iHDgDyo4SUa9Y08toODduWUvwTnvCETWV0k9ZCSidn768K+lil51s2dNuElCqm1h63lvaycFKD0mMKCLsuedvXTYSUnrffrJA8lWaXDu2U7xNSChuNZtaRWSvTe2sk7BShoefsJoTz99wx0jLAYwahm7YWUjqX6jw1EHJbSgM31QXzz3FVSOn4qRO4NovS7o5dzHzsjvkuThVSal8KZ3WO5889L9U1zWI8//nPP9kF2J1HfcY6+f12h3T6lqXvqWXFLRtaq7P7Drrgffl3dWZbrbCt6raWknWsVafVFjWg2PHYc7UUuWtQumaymd7HPOYxm80/Cn4tkWqHtEJEHej6G83etilH9VvnZoNotVNX1TkF7namW36H/f9ee77Rh5ByuLanXtY3u5RWrzRIcIq26z4SUq5ZFzlVgc3fz7alirKtgNf2hL9uayGlDsVTnvKUzc2FjlUaZVouy9l2JqVZpLULLStV8HXWakRruHYZbTnUTYSUU9knpNy0OgfLhryO603VCaeyFlLqWDWL1TF/W0pLX+v4zT/HVSGl87+R6OrLzq3p76qjnvOc59z4xaanCinNErSLVkuF5s89lTrZ3Xyw+nPbGYVDNEvTuv1CUbMBhcZ9SnVKv13XKbbJS/dwuShgtRtlbcayU9+F7XX4d9GSueqKNtRo6Vw7n7WUuqVgXetTW9wS0QZUTtWGdCz3est7p/T5WgrW0u+p3ehanDYS6Pe/L6XzaJfl31dpAGNt5uqy0m9RPVP92m5b1zXgeR8IKdes0btpvW6d5EoNR43usvTvq5hbv9uJ+IxnPGOY7VHXQspoWxBXcdchqyKb/30jYl0o2q4cfY7rJqTcrJbDtORyer81MHV87touKWsh5W0H24J4Gx1j+25B3LUJBZUCQJ3dZhm6OPamnfKalI7jZgrnsyl99oJ4F6Bf925mtXl15LsestmFOnFtxdtg3VWlx01LobrgvgByVRjotfr8j3zkIzfLrKqPql+bWbutajNaqtYx0u9ZG9ZF6d0iYH7n/L7rgmEXed+X0sYK8+/gUG0f3Y6nzdBUmhmp1A+b/rl/X0BsyV39kXZ5a2lywfWqmTF2c+dDStOfVYqtj51KW+1etcf3KbWkpQa20aBKe6g3GtJF9PPyFV/xFZtU384SNSwjTR9OIaUO3lQKA6cKKfPX2TakpJGlpm9bv1wwrDLpeCjs3VQgqMF5+tOfvmk4p1Kj0/sSUk6vUcn5zdkaDGgTi7umc6dlKDWmU+kmZy03uU06xhpsmH+OBkSqG69Sh6Hr91oW02DVKJ+97VvbdWz+mer8XLYhyi6qn7tfxBv+v05tF2H3z13ncNP1S79H72GXUsd7145ff9NMS9cFdG43G9J9kW6z2qyOmZaYPfvZzz7KBjg8XO3z61//+s1KjKnU32hziba1fu1rX7vZLazS47q2rcHw61yNcZ/c+ZBS5dZuQq1TnUqpu8qP/fUddpfVefhrmrkAdkw1NFXI89fpAvBdwlABr/faKF4V/XUsc7hMYbMOVhfoTaXg3D1hbluj0/ttOU5rpqfSdqeH3rjtlPrum1FoK+7+t4Z/m21Jb5uOs0b25kun2pqzRvg2qQ4vXMw/R3eO3nYLzs73BnpOfafrXTR41nuaf6ZKHc9j6DvrpoLdTK+Lsbu7+X3Vd9HsWQNWt1l9lu/4ju/YzB7oEHNf3PmQAhFKmTTK3HLPac/77tlw2zswsFSd12DSrrMQAKMQUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  }
}
async function _0x315949(_0x37d0d9, _0x2b3795 = 5, _0x477cc1 = 100) {
  const _0x432178 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAU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AACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  return new Promise((_0x4a0a80, _0x5d4d38) => {
    const _0x51a5e6 = _0x19bcbb => {
      const _0x5a5832 = new Image();
      _0x5a5832.onload = () => {
        {
          const _0x170c81 = document.createElement("canvas"),
            _0x44e5ee = _0x170c81.getContext("2d");
          _0x170c81.width = _0x5a5832.width;
          _0x170c81.height = _0x5a5832.height;
          _0x44e5ee.drawImage(_0x5a5832, 0, 0);
          const _0x4fd999 = _0x170c81.toDataURL("image/jpeg");
          _0x4a0a80(_0x4fd999);
        }
      };
      _0x5a5832.onerror = () => {
        _0x19bcbb > 0 ? setTimeout(() => _0x51a5e6(_0x19bcbb - 1), _0x477cc1) : (console.log("图片加载失败，使用默认图片"), _0x4a0a80(_0x432178));
      };
      _0x5a5832.src = _0x37d0d9;
    };
    _0x51a5e6(_0x2b3795);
  });
}
function _0x539ac3(_0x54823b) {
  return new Promise((_0x44d314, _0x3a79d7) => {
    fetch(_0x54823b).then(_0x447b31 => _0x447b31.blob()).then(_0x2e5b74 => {
      {
        const _0x59bb40 = new FileReader();
        _0x59bb40.onloadend = function () {
          _0x44d314(_0x59bb40.result);
        };
        _0x59bb40.onerror = function () {
          _0x3a79d7(new Error("Failed to read the image file"));
        };
        _0x59bb40.readAsDataURL(_0x2e5b74);
      }
    }).catch(_0x3e836d => {
      _0x3a79d7(_0x3e836d);
    });
  });
}
function _0x215cda(_0x348bfa, _0x42c190, _0x12e059 = 1) {
  chrome.storage.local.get("codePhone", function (_0x212769) {
    const _0x41fb05 = _0x212769.codePhone;
    _0x41fb05 ? _0xb52f9().then(_0x41bb20 => {
      chrome.runtime.sendMessage({
        "type": "checkTime",
        "password": _0x41fb05,
        "model": "打印",
        "mallid": _0x41bb20,
        "shopName": document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x15fb86 => {
        _0x15fb86.data.type == "fcmsl" ? function (_0x501d61, _0x4e5159, _0x2891be) {
          let _0x3df708 = jspdf.jsPDF;
          const _0x1dd3bf = "data:image/image/png;base64,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4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMs1n8AkXhJW8bmPEwAAAAASUVORK5CYII=",
            _0x3a1282 = document.createElement("div");
          _0x3a1282.id = "modal";
          _0x3a1282.style.display = "none";
          _0x3a1282.style.position = "fixed";
          _0x3a1282.style.zIndex = "1000";
          _0x3a1282.style.left = "50%";
          _0x3a1282.style.top = "40%";
          _0x3a1282.style.transform = "translate(-50%, -50%)";
          _0x3a1282.style.backgroundColor = "#fff";
          _0x3a1282.style.padding = "20px";
          _0x3a1282.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
          _0x3a1282.style.borderRadius = "10px";
          _0x3a1282.style.width = "800px";
          _0x3a1282.style.maxWidth = "90%";
          document.body.appendChild(_0x3a1282);
          const _0x3dc6e2 = document.createElement("h2");
          _0x3dc6e2.id = "dayingululuset";
          _0x3dc6e2.textContent = "咕噜噜打印设置（模板内支持选择西班牙标签）";
          _0x3dc6e2.style.marginBottom = "20px";
          _0x3a1282.appendChild(_0x3dc6e2);
          const _0x391624 = document.createElement("input");
          _0x391624.type = "text";
          _0x391624.placeholder = "搜索标签...";
          _0x391624.style.padding = "10px";
          _0x391624.style.width = "95%";
          _0x391624.style.marginBottom = "20px";
          _0x391624.style.borderColor = "black";
          _0x391624.style.borderRadius = "5px";
          _0x391624.autocomplete = "on";
          _0x391624.name = "searchQuery";
          _0x391624.id = "searchInput";
          const _0x526877 = document.createElement("form");
          _0x526877.appendChild(_0x391624);
          _0x3a1282.appendChild(_0x526877);
          const _0x4349b3 = document.createElement("div");
          _0x4349b3.style.display = "flex";
          _0x4349b3.style.gap = "10px";
          _0x4349b3.style.marginBottom = "20px";
          _0x3a1282.insertBefore(_0x4349b3, _0x526877);
          const _0x29c6ab = ["70*20", "70*40", "70*60", "70*70", "100*100", "独立标签", "条码融合"];
          _0x29c6ab.forEach(_0x1f5119 => {
            {
              const _0x37b82c = document.createElement("button");
              _0x37b82c.textContent = _0x1f5119;
              _0x37b82c.style.padding = "5px 10px";
              _0x37b82c.style.border = "1px solid #ccc";
              _0x37b82c.style.borderRadius = "5px";
              _0x37b82c.style.cursor = "pointer";
              _0x37b82c.style.backgroundColor = "#f9f9f9";
              _0x37b82c.style.color = "#333";
              _0x37b82c.addEventListener("click", () => {
                const _0x473725 = _0x273987.filter(_0x1fbcc4 => _0x1fbcc4.text.includes(_0x1f5119));
                _0x2fb1e6(_0x473725);
              });
              _0x4349b3.appendChild(_0x37b82c);
            }
          });
          const _0x196e9b = document.createElement("div");
          _0x196e9b.style.display = "grid";
          _0x196e9b.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
          _0x196e9b.style.gap = "15px";
          _0x196e9b.style.overflowY = "auto";
          _0x196e9b.style.maxHeight = "400px";
          _0x3a1282.appendChild(_0x196e9b);
          const _0x794819 = document.createElement("div");
          _0x794819.className = "tooltipprint";
          document.body.appendChild(_0x794819);
          const _0x4f0d56 = document.createElement("style");
          _0x4f0d56.textContent = "\n                                .tooltipprint {\n                                    position: absolute;\n                                    background-color: #fff;\n                                    border: 1px solid #ccc;\n                                    border-radius: 4px;\n                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n                                    padding: 10px;\n                                    display: none;\n                                    z-index: 1000;\n                                    max-width: 200px;\n                                    opacity: 0;\n                                    transition: opacity 0.3s ease-in-out;\n                                }\n\n                                .tooltipprint.show {\n                                    opacity: 1;\n                                }\n\n                                .tooltipprint img {\n                                    max-width: 100%;\n                                    height: auto;\n                                }\n\n                                label {\n                                    display: flex;\n                                    align-items: center;\n                                    font-size: 15px;\n                                    color: #333;\n                                    cursor: pointer;\n                                    font-family: sans-serif;\n                                    margin-left: 10px;\n                                }\n\n                                input[type=\"radio\"] {\n                                    accent-color: #4CAF50;\n                                    transform: scale(1.2);\n                                    margin-right: 10px;\n                                }\n\n                                /* 自定义滚动条 */\n                                #barcode-option-container::-webkit-scrollbar {\n                                    width: 8px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-thumb {\n                                    background-color: rgba(0, 0, 0, 0.3);\n                                    border-radius: 10px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-track {\n                                    background-color: #f1f1f1;\n                                }\n\n                                \n\n                                #close-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #f44336;\n                                }\n\n                                #print-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #4CAF50;\n                                }\n\n                                #print-btn #close-btn:hover {\n                                    opacity: 0.8;\n                                }\n                                ";
          document.head.appendChild(_0x4f0d56);
          const _0xbcb5b1 = [{
              "id": "myjtm72",
              "text": "独立条码 70*20",
              "imageUrl": "web/printImg/tm.png"
            }, {
              "id": "myod72",
              "text": "独立标签 欧代 70*20",
              "imageUrl": "web/printImg/od72.png"
            }, {
              "id": "mygys72",
              "text": "独立标签 制造商信息 70*20",
              "imageUrl": "web/printImg/gys72.png"
            }, {
              "id": "myodp74",
              "text": "独立标签 欧代+防窒息+环保（环保标长度小于56mm） 70*40",
              "imageUrl": "web/printImg/od76.png"
            }, {
              "id": "myodps74",
              "text": "独立标签 欧代+防窒息+食品+环保（环保标长度小于56mm） 70*40",
              "imageUrl": "web/printImg/spb76.png"
            }, {
              "id": "myHbzx",
              "text": "条码融合 防窒息+环保（环保标长度大于56mm） 70*40",
              "imageUrl": "web/printImg/hbzx.png"
            }, {
              "id": "myod74",
              "text": "条码融合 欧代 70*40",
              "imageUrl": "web/printImg/myod74.png"
            }, {
              "id": "mySpb",
              "text": "条码融合 欧代+食品+防窒息+环保（环保标长度小于56mm） 70*60",
              "imageUrl": "web/printImg/spb76.png"
            }, {
              "id": "myodp76",
              "text": "条码融合 欧代+防窒息+环保 （环保标长度小于56mm）70*60",
              "imageUrl": "web/printImg/od76.png"
            }, {
              "id": "myodp",
              "text": "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 70*70",
              "imageUrl": "web/printImg/odp.png"
            }, {
              "id": "myodps77",
              "text": "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 70*70",
              "imageUrl": "web/printImg/odps77.png"
            }, {
              "id": "myodfz77",
              "text": "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 70*70",
              "imageUrl": "web/printImg/odfz77.png"
            }, {
              "id": "myodp100",
              "text": "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 100*100",
              "imageUrl": "web/printImg/odp.png"
            }, {
              "id": "myodps100",
              "text": "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 100*100",
              "imageUrl": "web/printImg/odps77.png"
            }, {
              "id": "myodfz100",
              "text": "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 100*100",
              "imageUrl": "web/printImg/odfz77.png"
            }, {
              "id": "myodfzcz100",
              "text": "条码融合 欧代+防窒息+材质+纺织+环保（环保标长度小于56mm） 100*100",
              "imageUrl": "web/printImg/odfzcz100.png"
            }],
            _0x273987 = [..._0xbcb5b1];
          function _0x95b605(_0x5c6d07) {
            {
              const _0xa12583 = document.createElement("input");
              _0xa12583.type = "radio";
              _0xa12583.name = "radio-option";
              _0xa12583.id = _0x5c6d07.id;
              _0xa12583.value = _0x5c6d07.text;
              _0xa12583.setAttribute("data-custom-value", _0x5c6d07.imageUrl);
              const _0x47c41f = document.createElement("label");
              _0x47c41f.htmlFor = _0x5c6d07.id;
              _0x47c41f.style.textAlign = "center";
              _0x47c41f.style.display = "flex";
              _0x47c41f.style.flexDirection = "column";
              _0x47c41f.style.alignItems = "center";
              _0x47c41f.style.justifyContent = "center";
              _0x47c41f.style.width = "150px";
              _0x47c41f.style.padding = "10px";
              _0x47c41f.style.boxSizing = "border-box";
              const _0x4cacc5 = document.createElement("img");
              _0x4cacc5.src = chrome.runtime.getURL(_0x5c6d07.imageUrl);
              _0x4cacc5.alt = _0x5c6d07.text;
              _0x4cacc5.style.width = "180px";
              _0x4cacc5.style.height = "180px";
              _0x4cacc5.style.objectFit = "contain";
              const _0x5a8d0a = document.createElement("div");
              _0x5a8d0a.textContent = _0x5c6d07.text;
              _0x5a8d0a.style.textAlign = "center";
              _0x5a8d0a.style.whiteSpace = "normal";
              _0x5a8d0a.style.wordBreak = "break-word";
              _0x5a8d0a.style.width = "100%";
              _0x47c41f.appendChild(_0x4cacc5);
              _0x47c41f.appendChild(_0x5a8d0a);
              const _0x45f763 = document.createElement("div");
              _0x45f763.style.display = "flex";
              _0x45f763.style.flexDirection = "column";
              _0x45f763.style.alignItems = "center";
              _0x45f763.style.justifyContent = "center";
              _0x45f763.style.border = "1px solid #ccc";
              _0x45f763.style.borderRadius = "5px";
              _0x45f763.style.padding = "10px";
              _0x45f763.style.backgroundColor = "#f9f9f9";
              _0x45f763.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
              function _0xc743bd(_0x45b8ab, _0x394909) {
                {
                  _0x794819.innerHTML = "<img src=\"" + chrome.runtime.getURL(_0x394909.imageUrl) + "\" alt=\"" + _0x394909.text + "\" style=\"max-width: 100%; height: auto;\">";
                  _0x794819.style.display = "block";
                  _0x794819.classList.add("show");
                  const _0x5ec739 = window.innerWidth,
                    _0x598388 = window.innerHeight,
                    _0x21955d = _0x794819.offsetWidth,
                    _0x3d460f = _0x794819.offsetHeight;
                  let _0x412243 = _0x45b8ab.pageX + 10,
                    _0x8a942b = _0x45b8ab.pageY + 10;
                  if (_0x412243 + _0x21955d > _0x5ec739) {
                    _0x412243 = _0x45b8ab.pageX - _0x21955d - 10;
                  }
                  if (_0x8a942b + _0x3d460f > _0x598388) {
                    _0x8a942b = _0x45b8ab.pageY - _0x3d460f - 10;
                  }
                  _0x794819.style.left = _0x412243 + "px";
                  _0x794819.style.top = _0x8a942b + "px";
                }
              }
              function _0x42ee23() {
                _0x794819.style.display = "none";
                _0x794819.classList.remove("show");
              }
              _0x47c41f.addEventListener("mouseover", _0x15cd3e => _0xc743bd(_0x15cd3e, _0x5c6d07));
              _0x47c41f.addEventListener("mouseout", _0x42ee23);
              _0x45f763.appendChild(_0xa12583);
              _0x45f763.appendChild(_0x47c41f);
              _0x196e9b.appendChild(_0x45f763);
            }
          }
          function _0x2fb1e6(_0x450687) {
            _0x2445f5();
            _0x450687.forEach(_0x95b605);
          }
          function _0x2445f5() {
            while (_0x196e9b.firstChild) {
              _0x196e9b.removeChild(_0x196e9b.firstChild);
            }
          }
          _0x391624.addEventListener("input", function () {
            const _0x3a6915 = _0x391624.value.toLowerCase(),
              _0xae42f8 = _0x273987.filter(_0x11538f => _0x11538f.text.toLowerCase().includes(_0x3a6915));
            _0x2fb1e6(_0xae42f8);
          });
          _0x2fb1e6(_0x273987);
          const _0x599105 = document.createElement("div");
          _0x599105.style.display = "flex";
          _0x599105.style.justifyContent = "space-between";
          _0x599105.style.marginTop = "20px";
          _0x3a1282.appendChild(_0x599105);
          const _0x3b1732 = document.createElement("button");
          _0x3b1732.id = "print-btn";
          _0x3b1732.textContent = "打印";
          _0x599105.appendChild(_0x3b1732);
          const _0x4f69c6 = document.createElement("button");
          _0x4f69c6.id = "close-btn";
          _0x4f69c6.textContent = "关闭";
          _0x599105.appendChild(_0x4f69c6);
          _0x3a1282.style.display = "block";
          _0x4f69c6.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
            _0x2445f5();
            _0x3a1282.remove();
          });
          _0x3b1732.addEventListener("mouseover", () => {
            var _0x4bd887 = document.querySelectorAll(".tooltip");
            if (_0x4bd887.length > 0) {
              for (var _0x37ffaa = 0; _0x37ffaa < _0x4bd887.length; _0x37ffaa++) {
                _0x4bd887[_0x37ffaa].style.display = "none";
              }
            }
          });
          _0x3b1732.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelectorAll("[class=\"printTooltip show\"]").forEach(_0x466683 => _0x466683.remove());
            chrome.runtime.sendMessage({
              "type": "usageFunctionRecord",
              "phone": _0x41fb05,
              "name": "咕噜噜打印"
            });
            var _0x3ecbac = document.querySelector("input[name=\"radio-option\"]:checked");
            chrome.storage.local.set({
              "printCodeClickMod": _0x3ecbac.id
            });
            var _0x470f5e = "";
            _0x2445f5();
            _0x3a1282.style.display = "none";
            let _0x1f01fc;
            const _0x3d65e2 = 66.2,
              _0x1a5823 = 16.2;
            let _0x3c6f56 = (70 - _0x3d65e2) / 2,
              _0x490287 = (20 - _0x1a5823 - 2) / 2;
            async function _0x4f76ed(_0x36bd82, _0xd8c27b, _0x54e914) {
              if (_0x15fb86.data.shopState == "正常") {
                {
                  if (_0x15fb86.data.on == "cc") {
                    try {
                      {
                        _0x3d83e0();
                        try {
                          chrome.storage.local.get("codePhone", function (_0x4b1dbe) {
                            {
                              const _0x1cd37b = _0x4b1dbe.codePhone;
                              _0x1cd37b && chrome.runtime.sendMessage({
                                "type": "getPrintInfo",
                                "password": _0x1cd37b,
                                "model": "2",
                                "newPrintInfo": _0x34e843
                              }, _0x362751 => {});
                            }
                          });
                        } catch (_0x4a5462) {}
                        let _0x520740, _0xdcc43;
                        if (_0x54e914.length == 1) {
                          _0x520740 = await _0x315949(chrome.runtime.getURL(_0x54e914[0]));
                        } else _0x54e914.length == 2 && (_0x520740 = await _0x315949(chrome.runtime.getURL(_0x54e914[0])), _0xdcc43 = await _0x315949(chrome.runtime.getURL(_0x54e914[1])));
                        let _0x18c79d = null;
                        if (_0x470f5e == "myHbzx" || _0x470f5e == "myodp74" || _0x470f5e == "myod74" || _0x470f5e == "myodps74") _0x1f01fc = new _0x3df708({
                          "orientation": "landscape",
                          "unit": "mm",
                          "format": [70, 40]
                        });else {
                          if (_0x470f5e == "mySpb" || _0x470f5e == "myodp76") _0x1f01fc = new _0x3df708({
                            "orientation": "landscape",
                            "unit": "mm",
                            "format": [70, 60]
                          });else {
                            if (_0x470f5e == "myodp" || _0x470f5e == "myodps77" || _0x470f5e == "myodfz77") _0x1f01fc = new _0x3df708({
                              "orientation": "landscape",
                              "unit": "mm",
                              "format": [70, 70]
                            });else {
                              if (_0x470f5e == "myodp100" || _0x470f5e == "myodps100" || _0x470f5e == "myodfz100" || _0x470f5e == "myodfzcz100") {
                                _0x1f01fc = new _0x3df708({
                                  "orientation": "landscape",
                                  "unit": "mm",
                                  "format": [100, 100]
                                });
                              } else _0x1f01fc = new _0x3df708({
                                "orientation": "landscape",
                                "unit": "mm",
                                "format": [70, 20]
                              });
                            }
                          }
                        }
                        _0x1f01fc.setFont("notosans", "bold");
                        function _0x2751f2(_0x2dd991, _0x194f63, _0x1707e9, _0x2c0089, _0x1061d2, _0x4db6d0, _0x3d605f = "默认") {
                          function _0x55e485(_0x2592c1, _0x5a2e08) {
                            _0x4db6d0.setFontSize(_0x2592c1);
                            const _0x47039e = _0x4db6d0.getTextWidth("A"),
                              _0x17b42a = Math.floor(_0x5a2e08 / _0x47039e);
                            return _0x17b42a;
                          }
                          function _0x5dcde3(_0x3c1cdd, _0x4fbc13) {
                            if (_0x3d605f == "属性") var _0x98befb = _0x3c1cdd.split(/(  )/);else {
                              var _0x98befb = _0x3c1cdd.split(/(\s+|,|\.)/);
                            }
                            const _0x2aeab0 = [];
                            let _0x43e577 = "";
                            _0x98befb.forEach(_0x735ab6 => {
                              let _0x27b48f = _0x43e577 + _0x735ab6;
                              const _0x30ce3c = _0x4db6d0.getTextWidth(_0x27b48f);
                              _0x30ce3c > _0x4fbc13 && _0x43e577 ? (_0x2aeab0.push(_0x43e577), _0x43e577 = _0x735ab6) : _0x43e577 = _0x27b48f;
                            });
                            if (_0x43e577.length > 0) {
                              _0x2aeab0.push(_0x43e577);
                            }
                            return _0x2aeab0;
                          }
                          let _0x612465 = _0x1061d2,
                            _0x15a0bd = [];
                          while (_0x612465 > 1) {
                            const _0x54d95c = _0x55e485(_0x612465, _0x194f63);
                            _0x15a0bd = _0x5dcde3(_0x2dd991, _0x194f63);
                            if (_0x15a0bd.length === 1 && _0x4db6d0.getTextWidth(_0x15a0bd[0]) > _0x194f63) {
                              _0x612465 -= 0.3;
                              continue;
                            }
                            const _0x1543c2 = _0x15a0bd.slice(1).join(""),
                              _0x54877f = _0x5dcde3(_0x1543c2, _0x1707e9);
                            _0x15a0bd = [_0x15a0bd[0]].concat(_0x54877f);
                            if (_0x15a0bd.length <= _0x2c0089) break;else _0x612465 -= 0.3;
                          }
                          _0x15a0bd.length > _0x2c0089 && (_0x15a0bd = _0x15a0bd.slice(0, _0x2c0089), _0x15a0bd[_0x2c0089 - 1] += "...");
                          return _0x15a0bd.map(_0x2eb711 => ({
                            "text": _0x2eb711,
                            "fontSize": _0x612465
                          }));
                        }
                        for (let _0x200c94 = 0; _0x200c94 < _0x4e5159.length; _0x200c94++) {
                          let _0x3b01fa = _0x200c94 === _0x4e5159.length - 1,
                            _0x55d194 = _0x354586(_0x36bd82, _0x4e5159[_0x200c94][0]);
                          if (_0x55d194.length == 0) {
                            _0x107ae1();
                            break;
                          }
                          var _0x4afb5f = _0x55d194[0],
                            _0x304e50 = _0x55d194[1],
                            _0x22d1e4 = _0x55d194[2].slice(0, 30),
                            _0x32430e = _0x55d194[3],
                            _0x125bdd = _0x55d194[5],
                            _0x199b62 = parseInt(_0x4e5159[_0x200c94][1]),
                            _0x38c3ad = _0x55d194[8];
                          if (_0xd8c27b != "") var _0x361064 = _0xd8c27b;else {
                            var _0x361064 = _0x55d194[6];
                          }
                          let _0x38d456 = await _0x19c64(_0x125bdd);
                          if (_0x470f5e == "myHbzx" || _0x470f5e == "myodp74" || _0x470f5e == "myod74" || _0x470f5e == "myodps74") _0x1f01fc.addImage(_0x1dd3bf, "png", 1, 2, 18, 35), _0x1f01fc.addImage(_0x38d456, "png", 16, 6, 26, 26), _0x1f01fc.setFontSize(6), _0x1f01fc.text("此为产品信息页 无需粘贴!!!", 43, 5), _0x1f01fc.setFontSize(9), _0x1f01fc.text(_0x38c3ad, 43, 18), _0x1f01fc.setFontSize(10), _0x1f01fc.text("数量: " + _0x199b62, 43, 23), _0x1f01fc.setFontSize(7), _0x1f01fc.text("咕噜噜打印", 53, 36), _0x1f01fc.addPage([70, 40]);else {
                            if (_0x470f5e == "mySpb" || _0x470f5e == "myodp76") _0x1f01fc.addImage(_0x1dd3bf, "png", 1, 10, 12, 45), _0x1f01fc.addImage(_0x38d456, "png", 12, 15, 30, 30), _0x1f01fc.setFontSize(7), _0x1f01fc.text("此为产品信息页 ���需粘贴!!!", 35, 5), _0x1f01fc.setFontSize(9), _0x1f01fc.text(_0x38c3ad, 43, 28), _0x1f01fc.setFontSize(10), _0x1f01fc.text("数量: " + _0x199b62, 43, 38), _0x1f01fc.setFontSize(7), _0x1f01fc.text("咕噜噜打印", 53, 46), _0x1f01fc.addPage([70, 60]);else {
                              if (_0x470f5e == "myodp" || _0x470f5e == "myodps77" || _0x470f5e == "myodfz77") _0x1f01fc.addImage(_0x1dd3bf, "png", 1, 10, 12, 45), _0x1f01fc.addImage(_0x38d456, "png", 12, 15, 30, 30), _0x1f01fc.setFontSize(7), _0x1f01fc.text("此为产品信息页 无需粘贴!!!", 35, 5), _0x1f01fc.setFontSize(9), _0x1f01fc.text(_0x38c3ad, 43, 28), _0x1f01fc.setFontSize(10), _0x1f01fc.text("数量: " + _0x199b62, 43, 38), _0x1f01fc.setFontSize(7), _0x1f01fc.text("咕噜噜打印", 53, 46), _0x1f01fc.addPage([70, 70]);else {
                                if (_0x470f5e == "myodp100" || _0x470f5e == "myodps100" || _0x470f5e == "myodfz100" || _0x470f5e == "myodfzcz100") {
                                  _0x1f01fc.addImage(_0x1dd3bf, "png", 1, 10, 18, 35);
                                  _0x1f01fc.addImage(_0x38d456, "png", 16, 12, 26, 26);
                                  _0x1f01fc.setFontSize(10);
                                  _0x1f01fc.text("此为产品信息页 无需粘贴!!!", 43, 5);
                                  _0x1f01fc.setFontSize(13);
                                  _0x1f01fc.text(_0x38c3ad, 43, 28);
                                  _0x1f01fc.setFontSize(10);
                                  _0x1f01fc.text("数量: " + _0x199b62, 43, 38);
                                  _0x1f01fc.setFontSize(7);
                                  _0x1f01fc.text("咕噜噜打印", 53, 46);
                                  _0x1f01fc.addPage([100, 100]);
                                } else _0x1f01fc.addImage(_0x1dd3bf, "png", 4, 2, 10, 15), _0x1f01fc.addImage(_0x38d456, "png", 15, 2, 18, 16), _0x1f01fc.setFontSize(6), _0x1f01fc.text("此为产品信息页 无需粘贴!!!", 34, 3), _0x1f01fc.setFontSize(11), _0x1f01fc.text(_0x38c3ad, 34, 8), _0x1f01fc.setFontSize(11), _0x1f01fc.text("数量: " + _0x199b62, 35, 12.5), _0x1f01fc.setFontSize(7), _0x1f01fc.text("咕噜噜打印", 53, 18), _0x1f01fc.addPage([70, 20]);
                              }
                            }
                          }
                          for (let _0x4b1021 = 0; _0x4b1021 < _0x199b62; _0x4b1021++) {
                            {
                              if (_0x4b1021 > 0) {
                                {
                                  if (_0x470f5e == "myHbzx" || _0x470f5e == "myodp74" || _0x470f5e == "myod74" || _0x470f5e == "myodps74") _0x1f01fc.addPage([70, 40]);else {
                                    if (_0x470f5e == "mySpb" || _0x470f5e == "myodp76") {
                                      _0x1f01fc.addPage([70, 60]);
                                    } else {
                                      if (_0x470f5e == "myodp" || _0x470f5e == "myodps77" || _0x470f5e == "myodfz77") {
                                        _0x1f01fc.addPage([70, 70]);
                                      } else _0x470f5e == "myodp100" || _0x470f5e == "myodps100" || _0x470f5e == "myodfz100" || _0x470f5e == "myodfzcz100" ? _0x1f01fc.addPage([100, 100]) : _0x1f01fc.addPage([70, 20]);
                                    }
                                  }
                                }
                              }
                              if (_0x470f5e == "myHbzx") _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 + 16.5, _0x3d65e2 + 3, _0x1a5823 + 6);else {
                                if (_0x470f5e == "mySpb" || _0x470f5e == "myodp76") {
                                  _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 + 15.1, _0x3d65e2 + 3, _0x1a5823 + 28.5);
                                  var _0x35b438 = _0x361064,
                                    _0x386f0a = _0x47ada0[0],
                                    _0x2c524a = _0x47ada0[1],
                                    _0x26e59b = _0x47ada0[2],
                                    _0x2f2a0a = _0x34d475.repNameOd,
                                    _0x421a61 = _0x34d475.showAddressOd,
                                    _0x105778 = _0x34d475.repMailOd;
                                  _0x1f01fc.setFontSize(6);
                                  const _0x309d96 = _0x2751f2(_0x35b438, 12, 16, 1, 5.5, _0x1f01fc);
                                  let _0x45afc3 = 30.4;
                                  _0x309d96.forEach(_0x2e32cd => {
                                    {
                                      if (_0x2e32cd.text === "") return;
                                      _0x1f01fc.setFontSize(_0x2e32cd.fontSize);
                                      _0x1f01fc.text(_0x2e32cd.text, 54.2, _0x45afc3 + parseInt(_0x2e32cd.fontSize) / 5 - 1.9);
                                      _0x45afc3 += 1.4;
                                    }
                                  });
                                  _0x1f01fc.setFontSize(6);
                                  const _0x5a928f = _0x2751f2(_0x386f0a, 50, 50, 1, 5.5, _0x1f01fc);
                                  let _0x52183b = 21.1;
                                  _0x5a928f.forEach(_0x2d3631 => {
                                    _0x1f01fc.setFontSize(_0x2d3631.fontSize);
                                    _0x1f01fc.text(_0x2d3631.text, 17.5, _0x52183b + parseInt(_0x2d3631.fontSize) / 5 - 1.9);
                                    _0x52183b += 1.4;
                                  });
                                  _0x1f01fc.setFontSize(6);
                                  const _0x4e4c5b = _0x2751f2(_0x2c524a, 49, 49, 3, 5, _0x1f01fc);
                                  let _0x54697a = 24;
                                  _0x4e4c5b.forEach(_0x248404 => {
                                    _0x1f01fc.setFontSize(_0x248404.fontSize);
                                    _0x1f01fc.text(_0x248404.text, 17.5, _0x54697a + parseInt(_0x248404.fontSize) / 5 - 2.1);
                                    _0x54697a += 1.95;
                                  });
                                  _0x1f01fc.setFontSize(5);
                                  const _0x1f1a0e = _0x2751f2(_0x26e59b, 36, 35, 1, 4.5, _0x1f01fc);
                                  let _0x580f56 = 30.4;
                                  _0x1f1a0e.forEach(_0x7d8646 => {
                                    _0x1f01fc.setFontSize(_0x7d8646.fontSize);
                                    _0x1f01fc.text(_0x7d8646.text, 17.5, _0x580f56 + parseInt(_0x7d8646.fontSize) / 5 - 1.9);
                                    _0x580f56 += 1.4;
                                  });
                                  _0x1f01fc.setFontSize(5);
                                  const _0x51ab85 = _0x2751f2(_0x2f2a0a, 45, 40, 1, 5, _0x1f01fc);
                                  let _0x164e98 = 33.9;
                                  _0x51ab85.forEach(_0x2bb8a9 => {
                                    _0x1f01fc.setFontSize(_0x2bb8a9.fontSize);
                                    _0x1f01fc.text(_0x2bb8a9.text, 26.5, _0x164e98 + parseInt(_0x2bb8a9.fontSize) / 5 - 1.9);
                                    _0x164e98 += 1.4;
                                  });
                                  _0x1f01fc.setFontSize(6);
                                  const _0x1db70d = _0x2751f2(_0x421a61, 41.3, 41.3, 3, 4.8, _0x1f01fc);
                                  let _0xc30290 = 37.5;
                                  _0x1db70d.forEach(_0x55d801 => {
                                    _0x1f01fc.setFontSize(_0x55d801.fontSize);
                                    _0x1f01fc.text(_0x55d801.text, 26.5, _0xc30290 + parseInt(_0x55d801.fontSize) / 5 - 2.15);
                                    _0xc30290 += 1.9;
                                  });
                                  _0x1f01fc.setFontSize(5);
                                  const _0x416765 = _0x2751f2(_0x105778, 45, 40, 1, 5, _0x1f01fc);
                                  let _0x17de5f = 43.1;
                                  _0x416765.forEach(_0x372d66 => {
                                    _0x1f01fc.setFontSize(_0x372d66.fontSize);
                                    _0x1f01fc.text(_0x372d66.text, 26.5, _0x17de5f + parseInt(_0x372d66.fontSize) / 5 - 1.9);
                                    _0x17de5f += 1.4;
                                  });
                                } else {
                                  if (_0x470f5e == "myodp" || _0x470f5e == "myodps77") {
                                    _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 + 14.5, _0x3d65e2 + 2.5, _0x1a5823 + 39);
                                    var _0x35b438 = _0x361064,
                                      _0x386f0a = _0x47ada0[0],
                                      _0x2c524a = _0x47ada0[1],
                                      _0x26e59b = _0x47ada0[2],
                                      _0x2f2a0a = _0x34d475.repNameOd,
                                      _0x421a61 = _0x34d475.showAddressOd,
                                      _0x105778 = _0x34d475.repMailOd;
                                    _0x1f01fc.setFontSize(6);
                                    const _0x5a7dd1 = _0x2751f2(_0x35b438, 12, 16, 1, 6, _0x1f01fc);
                                    let _0x42dae5 = 20.5;
                                    _0x5a7dd1.forEach(_0x11752f => {
                                      if (_0x11752f.text === "") return;
                                      _0x1f01fc.setFontSize(_0x11752f.fontSize);
                                      _0x1f01fc.text(_0x11752f.text, 33, _0x42dae5 + parseInt(_0x11752f.fontSize) / 5 - 1.9);
                                      _0x42dae5 += 1.4;
                                    });
                                    _0x1f01fc.setFontSize(6);
                                    const _0x2efa90 = _0x2751f2(_0x386f0a, 51, 51, 1, 5, _0x1f01fc);
                                    let _0x223bbf = 23.8;
                                    _0x2efa90.forEach(_0xe4fbb9 => {
                                      _0x1f01fc.setFontSize(_0xe4fbb9.fontSize);
                                      _0x1f01fc.text(_0xe4fbb9.text, 16.5, _0x223bbf + parseInt(_0xe4fbb9.fontSize) / 5 - 1.9);
                                      _0x223bbf += 1.4;
                                    });
                                    _0x1f01fc.setFontSize(6);
                                    const _0x52077c = _0x2751f2(_0x2c524a, 43, 43, 3, 4.8, _0x1f01fc);
                                    let _0x1bb0b9 = 26.9;
                                    _0x52077c.forEach(_0x4ee867 => {
                                      _0x1f01fc.setFontSize(_0x4ee867.fontSize);
                                      _0x1f01fc.text(_0x4ee867.text, 24.5, _0x1bb0b9 + parseInt(_0x4ee867.fontSize) / 5 - 2.2);
                                      _0x1bb0b9 += 1.88;
                                    });
                                    _0x1f01fc.setFontSize(5);
                                    const _0x5cf0bf = _0x2751f2(_0x26e59b, 45, 40, 1, 5, _0x1f01fc);
                                    let _0x1e26e7 = 32.8;
                                    _0x5cf0bf.forEach(_0x29cc83 => {
                                      _0x1f01fc.setFontSize(_0x29cc83.fontSize);
                                      _0x1f01fc.text(_0x29cc83.text, 23.5, _0x1e26e7 + parseInt(_0x29cc83.fontSize) / 5 - 1.9);
                                      _0x1e26e7 += 1.4;
                                    });
                                    _0x1f01fc.setFontSize(5);
                                    const _0xb4fe47 = _0x2751f2(_0x2f2a0a, 45, 40, 1, 5, _0x1f01fc);
                                    let _0x554731 = 35.6;
                                    _0xb4fe47.forEach(_0x500154 => {
                                      _0x1f01fc.setFontSize(_0x500154.fontSize);
                                      _0x1f01fc.text(_0x500154.text, 18.5, _0x554731 + parseInt(_0x500154.fontSize) / 5 - 1.9);
                                      _0x554731 += 1.4;
                                    });
                                    _0x1f01fc.setFontSize(6);
                                    const _0x53607a = _0x2751f2(_0x421a61, 43, 43, 3, 4.8, _0x1f01fc);
                                    let _0x3a9925 = 38.1;
                                    _0x53607a.forEach(_0x306c50 => {
                                      _0x1f01fc.setFontSize(_0x306c50.fontSize);
                                      _0x1f01fc.text(_0x306c50.text, 20.5, _0x3a9925 + parseInt(_0x306c50.fontSize) / 5 - 1.9);
                                      _0x3a9925 += 1.7;
                                    });
                                    _0x1f01fc.setFontSize(5);
                                    const _0x3bf9d6 = _0x2751f2(_0x105778, 45, 40, 1, 5, _0x1f01fc);
                                    let _0x4486fe = 44;
                                    _0x3bf9d6.forEach(_0x430eea => {
                                      _0x1f01fc.setFontSize(_0x430eea.fontSize);
                                      _0x1f01fc.text(_0x430eea.text, 18.5, _0x4486fe + parseInt(_0x430eea.fontSize) / 5 - 1.9);
                                      _0x4486fe += 1.4;
                                    });
                                  } else {
                                    if (_0x470f5e == "myodfz77") {
                                      {
                                        _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 + 12, _0x3d65e2 + 2.5, _0x1a5823 + 40.5);
                                        var _0x35b438 = _0x361064,
                                          _0x386f0a = _0x47ada0[0],
                                          _0x2c524a = _0x47ada0[1],
                                          _0x26e59b = _0x47ada0[2],
                                          _0x2f2a0a = _0x34d475.repNameOd,
                                          _0x421a61 = _0x34d475.showAddressOd,
                                          _0x105778 = _0x34d475.repMailOd;
                                        _0x1f01fc.setFontSize(6);
                                        const _0x4745e1 = _0x2751f2(_0x35b438, 12, 16, 1, 5.5, _0x1f01fc);
                                        let _0x430d54 = 27.8;
                                        _0x4745e1.forEach(_0x2a74b0 => {
                                          {
                                            if (_0x2a74b0.text === "") return;
                                            _0x1f01fc.setFontSize(_0x2a74b0.fontSize);
                                            _0x1f01fc.text(_0x2a74b0.text, 54.2, _0x430d54 + parseInt(_0x2a74b0.fontSize) / 5 - 1.9);
                                            _0x430d54 += 1.4;
                                          }
                                        });
                                        _0x1f01fc.setFontSize(6);
                                        const _0x3f1600 = _0x2751f2(_0x386f0a, 50, 50, 1, 5.5, _0x1f01fc);
                                        let _0x157f5c = 18.2;
                                        _0x3f1600.forEach(_0x16d0c8 => {
                                          _0x1f01fc.setFontSize(_0x16d0c8.fontSize);
                                          _0x1f01fc.text(_0x16d0c8.text, 17.5, _0x157f5c + parseInt(_0x16d0c8.fontSize) / 5 - 1.9);
                                          _0x157f5c += 1.4;
                                        });
                                        _0x1f01fc.setFontSize(6);
                                        const _0x34745f = _0x2751f2(_0x2c524a, 49, 49, 3, 5, _0x1f01fc);
                                        let _0x56d64e = 20.9;
                                        _0x34745f.forEach(_0x527f2 => {
                                          _0x1f01fc.setFontSize(_0x527f2.fontSize);
                                          _0x1f01fc.text(_0x527f2.text, 17.5, _0x56d64e + parseInt(_0x527f2.fontSize) / 5 - 2.1);
                                          _0x56d64e += 2;
                                        });
                                        _0x1f01fc.setFontSize(5);
                                        const _0x1c44d8 = _0x2751f2(_0x26e59b, 36, 35, 1, 4.5, _0x1f01fc);
                                        let _0x608f7b = 27.8;
                                        _0x1c44d8.forEach(_0x8ff750 => {
                                          _0x1f01fc.setFontSize(_0x8ff750.fontSize);
                                          _0x1f01fc.text(_0x8ff750.text, 17.5, _0x608f7b + parseInt(_0x8ff750.fontSize) / 5 - 1.9);
                                          _0x608f7b += 1.4;
                                        });
                                        _0x1f01fc.setFontSize(5);
                                        const _0x52f54a = _0x2751f2(_0x2f2a0a, 45, 40, 1, 4.9, _0x1f01fc);
                                        let _0x5a252f = 31.3;
                                        _0x52f54a.forEach(_0x507ee4 => {
                                          _0x1f01fc.setFontSize(_0x507ee4.fontSize);
                                          _0x1f01fc.text(_0x507ee4.text, 26.5, _0x5a252f + parseInt(_0x507ee4.fontSize) / 5 - 1.9);
                                          _0x5a252f += 1.4;
                                        });
                                        _0x1f01fc.setFontSize(6);
                                        const _0x1175ce = _0x2751f2(_0x421a61, 42, 42, 3, 4.9, _0x1f01fc);
                                        let _0x21d6d6 = 34.3;
                                        _0x1175ce.forEach(_0x56bc37 => {
                                          _0x1f01fc.setFontSize(_0x56bc37.fontSize);
                                          _0x1f01fc.text(_0x56bc37.text, 26.5, _0x21d6d6 + parseInt(_0x56bc37.fontSize) / 5 - 2.1);
                                          _0x21d6d6 += 1.9;
                                        });
                                        _0x1f01fc.setFontSize(5);
                                        const _0x51453d = _0x2751f2(_0x105778, 45, 40, 1, 5, _0x1f01fc);
                                        let _0x35834f = 40.8;
                                        _0x51453d.forEach(_0x22b49d => {
                                          _0x1f01fc.setFontSize(_0x22b49d.fontSize);
                                          _0x1f01fc.text(_0x22b49d.text, 26.5, _0x35834f + parseInt(_0x22b49d.fontSize) / 5 - 1.9);
                                          _0x35834f += 1.4;
                                        });
                                      }
                                    } else {
                                      if (_0x470f5e == "myodp74" || _0x470f5e == "myodps74") {
                                        {
                                          _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 - 2, _0x3d65e2 + 2.5, _0x1a5823 + 25.5);
                                          var _0x35b438 = _0x361064,
                                            _0x386f0a = _0x47ada0[0],
                                            _0x2c524a = _0x47ada0[1],
                                            _0x26e59b = _0x47ada0[2],
                                            _0x2f2a0a = _0x34d475.repNameOd,
                                            _0x421a61 = _0x34d475.showAddressOd,
                                            _0x105778 = _0x34d475.repMailOd;
                                          _0x1f01fc.setFontSize(6);
                                          const _0x2af804 = _0x2751f2(_0x35b438, 12, 16, 1, 5, _0x1f01fc);
                                          let _0xd0a4de = 12.5;
                                          _0x2af804.forEach(_0x4c9e13 => {
                                            {
                                              if (_0x4c9e13.text === "") return;
                                              _0x1f01fc.setFontSize(_0x4c9e13.fontSize);
                                              _0x1f01fc.text(_0x4c9e13.text, 54.2, _0xd0a4de + parseInt(_0x4c9e13.fontSize) / 5 - 1.9);
                                              _0xd0a4de += 1.4;
                                            }
                                          });
                                          _0x1f01fc.setFontSize(6);
                                          const _0x53b11a = _0x2751f2(_0x386f0a, 50, 50, 1, 5, _0x1f01fc);
                                          let _0x2e4de4 = 3.5;
                                          _0x53b11a.forEach(_0x4e982d => {
                                            _0x1f01fc.setFontSize(_0x4e982d.fontSize);
                                            _0x1f01fc.text(_0x4e982d.text, 17.5, _0x2e4de4 + parseInt(_0x4e982d.fontSize) / 5 - 1.9);
                                            _0x2e4de4 += 1.4;
                                          });
                                          _0x1f01fc.setFontSize(6);
                                          const _0x37040 = _0x2751f2(_0x2c524a, 49, 49, 3, 4.9, _0x1f01fc);
                                          let _0x4ec7a8 = 6.9;
                                          _0x37040.forEach(_0x5cfcb8 => {
                                            _0x1f01fc.setFontSize(_0x5cfcb8.fontSize);
                                            _0x1f01fc.text(_0x5cfcb8.text, 17.5, _0x4ec7a8 + parseInt(_0x5cfcb8.fontSize) / 5 - 2.15);
                                            _0x4ec7a8 += 1.65;
                                          });
                                          _0x1f01fc.setFontSize(5);
                                          const _0x6bee4f = _0x2751f2(_0x26e59b, 36, 35, 1, 4.5, _0x1f01fc);
                                          let _0x420cc3 = 12.5;
                                          _0x6bee4f.forEach(_0x5f2472 => {
                                            _0x1f01fc.setFontSize(_0x5f2472.fontSize);
                                            _0x1f01fc.text(_0x5f2472.text, 17.5, _0x420cc3 + parseInt(_0x5f2472.fontSize) / 5 - 1.9);
                                            _0x420cc3 += 1.4;
                                          });
                                          _0x1f01fc.setFontSize(5);
                                          const _0x4be714 = _0x2751f2(_0x2f2a0a, 45, 40, 1, 5, _0x1f01fc);
                                          let _0x3f22ea = 15.5;
                                          _0x4be714.forEach(_0x38c885 => {
                                            _0x1f01fc.setFontSize(_0x38c885.fontSize);
                                            _0x1f01fc.text(_0x38c885.text, 26.5, _0x3f22ea + parseInt(_0x38c885.fontSize) / 5 - 1.9);
                                            _0x3f22ea += 1.4;
                                          });
                                          _0x1f01fc.setFontSize(6);
                                          const _0x43cba1 = _0x2751f2(_0x421a61, 43, 43, 3, 4.8, _0x1f01fc);
                                          let _0x44a306 = 19.3;
                                          _0x43cba1.forEach(_0xf368eb => {
                                            _0x1f01fc.setFontSize(_0xf368eb.fontSize);
                                            _0x1f01fc.text(_0xf368eb.text, 26.5, _0x44a306 + parseInt(_0xf368eb.fontSize) / 5 - 2.15);
                                            _0x44a306 += 1.5;
                                          });
                                          _0x1f01fc.setFontSize(5);
                                          const _0x364de5 = _0x2751f2(_0x105778, 43, 43, 1, 5, _0x1f01fc);
                                          let _0x49a3f2 = 24.5;
                                          _0x364de5.forEach(_0x178cac => {
                                            _0x1f01fc.setFontSize(_0x178cac.fontSize);
                                            _0x1f01fc.text(_0x178cac.text, 26.5, _0x49a3f2 + parseInt(_0x178cac.fontSize) / 5 - 1.9);
                                            _0x49a3f2 += 1.4;
                                          });
                                        }
                                      } else {
                                        if (_0x470f5e == "myod74") {
                                          {
                                            _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 + 12.1, _0x3d65e2 + 2.5, _0x1a5823 + 11.1);
                                            var _0x35b438 = _0x361064,
                                              _0x386f0a = _0x47ada0[0],
                                              _0x2c524a = _0x47ada0[1],
                                              _0x26e59b = _0x47ada0[2],
                                              _0x2f2a0a = _0x34d475.repNameOd,
                                              _0x421a61 = _0x34d475.showAddressOd,
                                              _0x105778 = _0x34d475.repMailOd;
                                            _0x1f01fc.setFontSize(6);
                                            const _0xcf00b6 = _0x2751f2(_0x35b438, 12, 16, 1, 5, _0x1f01fc);
                                            let _0x58395d = 27;
                                            _0xcf00b6.forEach(_0x38ee1f => {
                                              if (_0x38ee1f.text === "") return;
                                              _0x1f01fc.setFontSize(_0x38ee1f.fontSize);
                                              _0x1f01fc.text(_0x38ee1f.text, 54.2, _0x58395d + parseInt(_0x38ee1f.fontSize) / 5 - 1.9);
                                              _0x58395d += 1.4;
                                            });
                                            _0x1f01fc.setFontSize(6);
                                            const _0x298b4d = _0x2751f2(_0x386f0a, 48, 48, 1, 5, _0x1f01fc);
                                            let _0x49c1d0 = 17.8;
                                            _0x298b4d.forEach(_0x210cd7 => {
                                              _0x1f01fc.setFontSize(_0x210cd7.fontSize);
                                              _0x1f01fc.text(_0x210cd7.text, 17.5, _0x49c1d0 + parseInt(_0x210cd7.fontSize) / 5 - 1.9);
                                              _0x49c1d0 += 1.4;
                                            });
                                            _0x1f01fc.setFontSize(6);
                                            const _0x55766d = _0x2751f2(_0x2c524a, 47, 47, 3, 4.9, _0x1f01fc);
                                            let _0x52144a = 20.8;
                                            _0x55766d.forEach(_0x20219c => {
                                              _0x1f01fc.setFontSize(_0x20219c.fontSize);
                                              _0x1f01fc.text(_0x20219c.text, 17.5, _0x52144a + parseInt(_0x20219c.fontSize) / 5 - 2.1);
                                              _0x52144a += 1.85;
                                            });
                                            _0x1f01fc.setFontSize(5);
                                            const _0x6bf22c = _0x2751f2(_0x26e59b, 36, 35, 1, 5, _0x1f01fc);
                                            let _0x418f3b = 26.7;
                                            _0x6bf22c.forEach(_0x2dbb0a => {
                                              _0x1f01fc.setFontSize(_0x2dbb0a.fontSize);
                                              _0x1f01fc.text(_0x2dbb0a.text, 17.5, _0x418f3b + parseInt(_0x2dbb0a.fontSize) / 5 - 1.9);
                                              _0x418f3b += 1.4;
                                            });
                                            _0x1f01fc.setFontSize(5);
                                            const _0x30a845 = _0x2751f2(_0x2f2a0a, 45, 40, 1, 5, _0x1f01fc);
                                            let _0x2005f5 = 30.3;
                                            _0x30a845.forEach(_0x469b4e => {
                                              _0x1f01fc.setFontSize(_0x469b4e.fontSize);
                                              _0x1f01fc.text(_0x469b4e.text, 26.5, _0x2005f5 + parseInt(_0x469b4e.fontSize) / 5 - 1.9);
                                              _0x2005f5 += 1.4;
                                            });
                                            _0x1f01fc.setFontSize(6);
                                            const _0x5e8065 = _0x2751f2(_0x421a61, 43, 43, 3, 4.9, _0x1f01fc);
                                            let _0x1080c6 = 33.5;
                                            _0x5e8065.forEach(_0x520d82 => {
                                              _0x1f01fc.setFontSize(_0x520d82.fontSize);
                                              _0x1f01fc.text(_0x520d82.text, 26.5, _0x1080c6 + parseInt(_0x520d82.fontSize) / 5 - 2.15);
                                              _0x1080c6 += 1.78;
                                            });
                                            _0x1f01fc.setFontSize(5);
                                            const _0x553054 = _0x2751f2(_0x105778, 43, 43, 1, 5, _0x1f01fc);
                                            let _0x23c7b2 = 39.4;
                                            _0x553054.forEach(_0x37d552 => {
                                              _0x1f01fc.setFontSize(_0x37d552.fontSize);
                                              _0x1f01fc.text(_0x37d552.text, 26.5, _0x23c7b2 + parseInt(_0x37d552.fontSize) / 5 - 1.9);
                                              _0x23c7b2 += 1.4;
                                            });
                                          }
                                        } else {
                                          if (_0x470f5e == "mygys72") {
                                            _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 - 1.8, _0x3d65e2 + 2.5, _0x1a5823 + 4.5);
                                            var _0x386f0a = _0x47ada0[0],
                                              _0x2c524a = _0x47ada0[1],
                                              _0x26e59b = _0x47ada0[2];
                                            _0x1f01fc.setFontSize(6);
                                            const _0x190021 = _0x2751f2(_0x386f0a, 48, 48, 1, 5, _0x1f01fc);
                                            let _0x3ff985 = 4.8;
                                            _0x190021.forEach(_0x9a8d4b => {
                                              _0x1f01fc.setFontSize(_0x9a8d4b.fontSize);
                                              _0x1f01fc.text(_0x9a8d4b.text, 17.5, _0x3ff985 + parseInt(_0x9a8d4b.fontSize) / 5 - 1.9);
                                              _0x3ff985 += 1.4;
                                            });
                                            _0x1f01fc.setFontSize(6);
                                            const _0x1e01a1 = _0x2751f2(_0x2c524a, 47, 47, 3, 5.5, _0x1f01fc);
                                            let _0x3fb701 = 9.2;
                                            _0x1e01a1.forEach(_0x8cb6d7 => {
                                              _0x1f01fc.setFontSize(_0x8cb6d7.fontSize);
                                              _0x1f01fc.text(_0x8cb6d7.text, 17.5, _0x3fb701 + parseInt(_0x8cb6d7.fontSize) / 5 - 2.1);
                                              _0x3fb701 += 2;
                                            });
                                            _0x1f01fc.setFontSize(5);
                                            const _0x1212ca = _0x2751f2(_0x26e59b, 46, 45, 1, 5, _0x1f01fc);
                                            let _0x4db5a9 = 17.5;
                                            _0x1212ca.forEach(_0x168dd4 => {
                                              _0x1f01fc.setFontSize(_0x168dd4.fontSize);
                                              _0x1f01fc.text(_0x168dd4.text, 17.5, _0x4db5a9 + parseInt(_0x168dd4.fontSize) / 5 - 1.9);
                                              _0x4db5a9 += 1.4;
                                            });
                                          } else {
                                            if (_0x470f5e == "myod72") {
                                              {
                                                var _0x35b438 = _0x361064,
                                                  _0x2f2a0a = _0x34d475.repNameOd,
                                                  _0x421a61 = _0x34d475.showAddressOd,
                                                  _0x105778 = _0x34d475.repMailOd;
                                                _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 1, _0x490287 - 0.5, _0x3d65e2 + 2.5, _0x1a5823 + 3);
                                                _0x1f01fc.setFontSize(6);
                                                const _0xcb029d = _0x2751f2(_0x35b438, 12, 16, 1, 5, _0x1f01fc);
                                                let _0x5664c9 = 4.5;
                                                _0xcb029d.forEach(_0x2ad175 => {
                                                  {
                                                    if (_0x2ad175.text === "") return;
                                                    _0x1f01fc.setFontSize(_0x2ad175.fontSize);
                                                    _0x1f01fc.text(_0x2ad175.text, 20.2, _0x5664c9 + parseInt(_0x2ad175.fontSize) / 5 - 1.9);
                                                    _0x5664c9 += 1.4;
                                                  }
                                                });
                                                _0x1f01fc.setFontSize(5);
                                                const _0x55c531 = _0x2751f2(_0x2f2a0a, 45, 40, 1, 5, _0x1f01fc);
                                                let _0x56310f = 7.8;
                                                _0x55c531.forEach(_0x367555 => {
                                                  _0x1f01fc.setFontSize(_0x367555.fontSize);
                                                  _0x1f01fc.text(_0x367555.text, 26.5, _0x56310f + parseInt(_0x367555.fontSize) / 5 - 1.9);
                                                  _0x56310f += 1.4;
                                                });
                                                _0x1f01fc.setFontSize(6);
                                                const _0xbf097 = _0x2751f2(_0x421a61, 45, 45, 3, 5, _0x1f01fc);
                                                let _0x42a6e4 = 12;
                                                _0xbf097.forEach(_0x4b434f => {
                                                  _0x1f01fc.setFontSize(_0x4b434f.fontSize);
                                                  _0x1f01fc.text(_0x4b434f.text, 26.5, _0x42a6e4 + parseInt(_0x4b434f.fontSize) / 5 - 2.15);
                                                  _0x42a6e4 += 1.9;
                                                });
                                                _0x1f01fc.setFontSize(5);
                                                const _0x4294c3 = _0x2751f2(_0x105778, 43, 43, 1, 5, _0x1f01fc);
                                                let _0x58c440 = 18.5;
                                                _0x4294c3.forEach(_0x3c0d41 => {
                                                  _0x1f01fc.setFontSize(_0x3c0d41.fontSize);
                                                  _0x1f01fc.text(_0x3c0d41.text, 26.5, _0x58c440 + parseInt(_0x3c0d41.fontSize) / 5 - 1.9);
                                                  _0x58c440 += 1.4;
                                                });
                                              }
                                            } else {
                                              if (_0x470f5e == "myodp100" || _0x470f5e == "myodps100") {
                                                {
                                                  _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 2, _0x490287 + 12, _0x3d65e2 + 34, _0x1a5823 + 70.5);
                                                  var _0x35b438 = _0x361064,
                                                    _0x386f0a = _0x47ada0[0],
                                                    _0x2c524a = _0x47ada0[1],
                                                    _0x26e59b = _0x47ada0[2],
                                                    _0x2f2a0a = _0x34d475.repNameOd,
                                                    _0x421a61 = _0x34d475.showAddressOd,
                                                    _0x105778 = _0x34d475.repMailOd;
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x2a8d01 = _0x2751f2(_0x35b438, 20, 16, 1, 9, _0x1f01fc);
                                                  let _0x572e14 = 19.5;
                                                  _0x2a8d01.forEach(_0x3ab8e6 => {
                                                    if (_0x3ab8e6.text === "") return;
                                                    _0x1f01fc.setFontSize(_0x3ab8e6.fontSize);
                                                    _0x1f01fc.text(_0x3ab8e6.text, 45, _0x572e14 + parseInt(_0x3ab8e6.fontSize) / 5 - 1.9);
                                                    _0x572e14 += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x44ec2d = _0x2751f2(_0x386f0a, 75, 75, 1, 9, _0x1f01fc);
                                                  let _0x3440aa = 24.8;
                                                  _0x44ec2d.forEach(_0x333f27 => {
                                                    _0x1f01fc.setFontSize(_0x333f27.fontSize);
                                                    _0x1f01fc.text(_0x333f27.text, 23, _0x3440aa + parseInt(_0x333f27.fontSize) / 5 - 1.9);
                                                    _0x3440aa += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x18ca4a = _0x2751f2(_0x2c524a, 60, 90, 3, 7, _0x1f01fc);
                                                  let _0x3a1a1a = 30;
                                                  _0x18ca4a.forEach((_0x22930f, _0x3b6e4c) => {
                                                    _0x3b6e4c === 0 ? (_0x1f01fc.setFontSize(_0x22930f.fontSize), _0x1f01fc.text(_0x22930f.text, 33, _0x3a1a1a + parseInt(_0x22930f.fontSize) / 5 - 2.2), _0x3a1a1a += 2.75) : (_0x1f01fc.setFontSize(_0x22930f.fontSize), _0x1f01fc.text(_0x22930f.text, 3, _0x3a1a1a + parseInt(_0x22930f.fontSize) / 5 - 2.2), _0x3a1a1a += 2.75);
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x498a0e = _0x2751f2(_0x26e59b, 70, 40, 1, 8, _0x1f01fc);
                                                  let _0x12934e = 39.2;
                                                  _0x498a0e.forEach(_0xfe400c => {
                                                    _0x1f01fc.setFontSize(_0xfe400c.fontSize);
                                                    _0x1f01fc.text(_0xfe400c.text, 33, _0x12934e + parseInt(_0xfe400c.fontSize) / 5 - 1.9);
                                                    _0x12934e += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x47dce1 = _0x2751f2(_0x2f2a0a, 70, 40, 1, 8, _0x1f01fc);
                                                  let _0x389a58 = 44.5;
                                                  _0x47dce1.forEach(_0x2bb345 => {
                                                    _0x1f01fc.setFontSize(_0x2bb345.fontSize);
                                                    _0x1f01fc.text(_0x2bb345.text, 24.5, _0x389a58 + parseInt(_0x2bb345.fontSize) / 5 - 1.9);
                                                    _0x389a58 += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x3e94b7 = _0x2751f2(_0x421a61, 66, 66, 3, 7, _0x1f01fc);
                                                  let _0x3d7e32 = 48.1;
                                                  _0x3e94b7.forEach(_0x34f9ba => {
                                                    _0x1f01fc.setFontSize(_0x34f9ba.fontSize);
                                                    _0x1f01fc.text(_0x34f9ba.text, 27.8, _0x3d7e32 + parseInt(_0x34f9ba.fontSize) / 5 - 1.9);
                                                    _0x3d7e32 += 2.75;
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x1e0335 = _0x2751f2(_0x105778, 70, 70, 1, 8, _0x1f01fc);
                                                  let _0x5f4008 = 57.1;
                                                  _0x1e0335.forEach(_0x1653b1 => {
                                                    _0x1f01fc.setFontSize(_0x1653b1.fontSize);
                                                    _0x1f01fc.text(_0x1653b1.text, 27.5, _0x5f4008 + parseInt(_0x1653b1.fontSize) / 5 - 1.9);
                                                    _0x5f4008 += 1.4;
                                                  });
                                                }
                                              } else {
                                                if (_0x470f5e == "myodfz100") {
                                                  _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 2, _0x490287 + 12, _0x3d65e2 + 34, _0x1a5823 + 70.5);
                                                  var _0x35b438 = _0x361064,
                                                    _0x386f0a = _0x47ada0[0],
                                                    _0x2c524a = _0x47ada0[1],
                                                    _0x26e59b = _0x47ada0[2],
                                                    _0x2f2a0a = _0x34d475.repNameOd,
                                                    _0x421a61 = _0x34d475.showAddressOd,
                                                    _0x105778 = _0x34d475.repMailOd;
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x93a2d4 = _0x2751f2(_0x35b438, 20, 16, 1, 8, _0x1f01fc);
                                                  let _0x195690 = 34.5;
                                                  _0x93a2d4.forEach(_0x55b791 => {
                                                    if (_0x55b791.text === "") return;
                                                    _0x1f01fc.setFontSize(_0x55b791.fontSize);
                                                    _0x1f01fc.text(_0x55b791.text, 77, _0x195690 + parseInt(_0x55b791.fontSize) / 5 - 1.9);
                                                    _0x195690 += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x1b822e = _0x2751f2(_0x386f0a, 73, 50, 1, 8, _0x1f01fc);
                                                  let _0x384c7b = 20.2;
                                                  _0x1b822e.forEach(_0x30233b => {
                                                    _0x1f01fc.setFontSize(_0x30233b.fontSize);
                                                    _0x1f01fc.text(_0x30233b.text, 23.5, _0x384c7b + parseInt(_0x30233b.fontSize) / 5 - 1.9);
                                                    _0x384c7b += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x559572 = _0x2751f2(_0x2c524a, 73, 73, 3, 7, _0x1f01fc);
                                                  let _0x4556a7 = 24.2;
                                                  _0x559572.forEach(_0x46e31e => {
                                                    _0x1f01fc.setFontSize(_0x46e31e.fontSize);
                                                    _0x1f01fc.text(_0x46e31e.text, 23.5, _0x4556a7 + parseInt(_0x46e31e.fontSize) / 5 - 2.1);
                                                    _0x4556a7 += 2.8;
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x587559 = _0x2751f2(_0x26e59b, 40, 35, 1, 7, _0x1f01fc);
                                                  let _0x302b46 = 33.8;
                                                  _0x587559.forEach(_0x114cdd => {
                                                    _0x1f01fc.setFontSize(_0x114cdd.fontSize);
                                                    _0x1f01fc.text(_0x114cdd.text, 23.5, _0x302b46 + parseInt(_0x114cdd.fontSize) / 5 - 1.9);
                                                    _0x302b46 += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x3842e6 = _0x2751f2(_0x2f2a0a, 55, 40, 1, 7, _0x1f01fc);
                                                  let _0x51e1ca = 40;
                                                  _0x3842e6.forEach(_0x1e91cd => {
                                                    _0x1f01fc.setFontSize(_0x1e91cd.fontSize);
                                                    _0x1f01fc.text(_0x1e91cd.text, 36.8, _0x51e1ca + parseInt(_0x1e91cd.fontSize) / 5 - 1.9);
                                                    _0x51e1ca += 1.4;
                                                  });
                                                  _0x1f01fc.setFontSize(6);
                                                  const _0x8166e = _0x2751f2(_0x421a61, 55, 55, 3, 7, _0x1f01fc);
                                                  let _0x29ad11 = 44.85;
                                                  _0x8166e.forEach(_0x2289c1 => {
                                                    _0x1f01fc.setFontSize(_0x2289c1.fontSize);
                                                    _0x1f01fc.text(_0x2289c1.text, 37, _0x29ad11 + parseInt(_0x2289c1.fontSize) / 5 - 2.1);
                                                    _0x29ad11 += 2.8;
                                                  });
                                                  _0x1f01fc.setFontSize(5);
                                                  const _0x16efb2 = _0x2751f2(_0x105778, 55, 40, 1, 9, _0x1f01fc);
                                                  let _0x18f049 = 53.8;
                                                  _0x16efb2.forEach(_0x52223d => {
                                                    _0x1f01fc.setFontSize(_0x52223d.fontSize);
                                                    _0x1f01fc.text(_0x52223d.text, 36.8, _0x18f049 + parseInt(_0x52223d.fontSize) / 5 - 1.9);
                                                    _0x18f049 += 1.4;
                                                  });
                                                } else {
                                                  if (_0x470f5e == "myodfzcz100") {
                                                    {
                                                      function _0x3ea9ac(_0x3cec42) {
                                                        try {
                                                          {
                                                            _0x1f01fc.addImage(_0xee18b7, "JPEG", _0x3c6f56 - 2, _0x490287, _0x3d65e2 + 34, _0x1a5823 + 82.5);
                                                            var _0x37458d = _0x361064,
                                                              _0x20e396 = _0x47ada0[0],
                                                              _0x2b396d = _0x47ada0[1],
                                                              _0x1aed33 = _0x47ada0[2],
                                                              _0x7eeaa0 = _0x34d475.repNameOd,
                                                              _0x263f44 = _0x34d475.showAddressOd,
                                                              _0x29cfbf = _0x34d475.repMailOd;
                                                            _0x3cec42.length < 5 && (_0x3cec42 = "无材质属性/跨店");
                                                            _0x1f01fc.setFontSize(6);
                                                            const _0x4812c6 = _0x2751f2(_0x3cec42, 25, 40, 3, 6.5, _0x1f01fc, "属性");
                                                            let _0x1e7510 = 4.2;
                                                            _0x4812c6.forEach((_0x2da979, _0x2abb9d) => {
                                                              if (_0x2da979.text === "") return;
                                                              _0x2abb9d === 0 ? (_0x1f01fc.setFontSize(_0x2da979.fontSize), _0x1f01fc.text(_0x2da979.text, 68, _0x1e7510 + parseInt(_0x2da979.fontSize) / 5 - 1.5), _0x1e7510 += 2.5) : (_0x1f01fc.setFontSize(_0x2da979.fontSize), _0x1f01fc.text(_0x2da979.text, 52.5, _0x1e7510 + parseInt(_0x2da979.fontSize) / 5 - 1.5), _0x1e7510 += 2.5);
                                                            });
                                                            _0x1f01fc.setFontSize(6);
                                                            const _0x5053de = _0x2751f2(_0x37458d, 20, 16, 1, 8, _0x1f01fc);
                                                            let _0x5c1ead = 34.5;
                                                            _0x5053de.forEach(_0x42739f => {
                                                              if (_0x42739f.text === "") return;
                                                              _0x1f01fc.setFontSize(_0x42739f.fontSize);
                                                              _0x1f01fc.text(_0x42739f.text, 77, _0x5c1ead + parseInt(_0x42739f.fontSize) / 5 - 1.9);
                                                              _0x5c1ead += 1.4;
                                                            });
                                                            _0x1f01fc.setFontSize(6);
                                                            const _0x2f1a4d = _0x2751f2(_0x20e396, 73, 50, 1, 8, _0x1f01fc);
                                                            let _0x1005a0 = 20;
                                                            _0x2f1a4d.forEach(_0x444c55 => {
                                                              _0x1f01fc.setFontSize(_0x444c55.fontSize);
                                                              _0x1f01fc.text(_0x444c55.text, 23.5, _0x1005a0 + parseInt(_0x444c55.fontSize) / 5 - 1.9);
                                                              _0x1005a0 += 1.4;
                                                            });
                                                            _0x1f01fc.setFontSize(6);
                                                            const _0x15abc0 = _0x2751f2(_0x2b396d, 73, 73, 3, 7, _0x1f01fc);
                                                            let _0x1d365b = 24.55;
                                                            _0x15abc0.forEach(_0x39075e => {
                                                              _0x1f01fc.setFontSize(_0x39075e.fontSize);
                                                              _0x1f01fc.text(_0x39075e.text, 23.5, _0x1d365b + parseInt(_0x39075e.fontSize) / 5 - 2.1);
                                                              _0x1d365b += 2.9;
                                                            });
                                                            _0x1f01fc.setFontSize(5);
                                                            const _0x5e4e25 = _0x2751f2(_0x1aed33, 40, 35, 1, 7, _0x1f01fc);
                                                            let _0x379553 = 34.5;
                                                            _0x5e4e25.forEach(_0x1c5b44 => {
                                                              _0x1f01fc.setFontSize(_0x1c5b44.fontSize);
                                                              _0x1f01fc.text(_0x1c5b44.text, 23.5, _0x379553 + parseInt(_0x1c5b44.fontSize) / 5 - 1.9);
                                                              _0x379553 += 1.4;
                                                            });
                                                            _0x1f01fc.setFontSize(5);
                                                            const _0x13d547 = _0x2751f2(_0x7eeaa0, 55, 40, 1, 7, _0x1f01fc);
                                                            let _0x503510 = 40;
                                                            _0x13d547.forEach(_0x2352cc => {
                                                              _0x1f01fc.setFontSize(_0x2352cc.fontSize);
                                                              _0x1f01fc.text(_0x2352cc.text, 37, _0x503510 + parseInt(_0x2352cc.fontSize) / 5 - 1.9);
                                                              _0x503510 += 1.4;
                                                            });
                                                            _0x1f01fc.setFontSize(6);
                                                            const _0x1f9b57 = _0x2751f2(_0x263f44, 55, 55, 3, 7, _0x1f01fc);
                                                            let _0xc8769b = 44.85;
                                                            _0x1f9b57.forEach(_0x5b971a => {
                                                              _0x1f01fc.setFontSize(_0x5b971a.fontSize);
                                                              _0x1f01fc.text(_0x5b971a.text, 37, _0xc8769b + parseInt(_0x5b971a.fontSize) / 5 - 2.1);
                                                              _0xc8769b += 2.8;
                                                            });
                                                            _0x1f01fc.setFontSize(5);
                                                            const _0x2f6d3c = _0x2751f2(_0x29cfbf, 55, 40, 1, 9, _0x1f01fc);
                                                            let _0x3be020 = 54.2;
                                                            _0x2f6d3c.forEach(_0x53475d => {
                                                              _0x1f01fc.setFontSize(_0x53475d.fontSize);
                                                              _0x1f01fc.text(_0x53475d.text, 37, _0x3be020 + parseInt(_0x53475d.fontSize) / 5 - 1.9);
                                                              _0x3be020 += 1.4;
                                                            });
                                                          }
                                                        } catch (_0x59af03) {
                                                          console.log(_0x59af03);
                                                        }
                                                      }
                                                      _0x18c79d = new Promise(_0x49339a => {
                                                        if (Array.isArray(_0x59955d[_0x55d194[6]])) {
                                                          var _0x2bd40e = _0x59955d[_0x55d194[6] + ""].map(_0x1a31fa => _0x1a31fa.join(" ")).join("  ");
                                                          _0x3ea9ac(_0x2bd40e);
                                                          _0x49339a();
                                                        } else chrome.runtime.sendMessage({
                                                          "type": "getAllSkcInfo",
                                                          "mallid": _0x41bb20,
                                                          "skcList": [_0x55d194[6]]
                                                        }, async _0x427c58 => {
                                                          _0x59955d = Object.assign(_0x59955d, _0x427c58.data);
                                                          var _0x191b81 = _0x427c58.data[_0x55d194[6]] ? _0x427c58.data[_0x55d194[6]].map(_0x2d13b5 => _0x2d13b5.join(" ")).join("  ") : "";
                                                          _0x3ea9ac(_0x191b81);
                                                          _0x49339a();
                                                        });
                                                      });
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              _0x18c79d && (await _0x18c79d);
                              if (_0x470f5e == "myod74" || _0x470f5e == "myodfz77") {
                                const _0x15085e = document.createElement("canvas");
                                _0x15085e.width = _0x3d65e2;
                                _0x15085e.height = _0x1a5823;
                                JsBarcode(_0x15085e, _0x4afb5f, {
                                  "format": "CODE128",
                                  "lineColor": "#000",
                                  "width": 1,
                                  "height": 20,
                                  "displayValue": false
                                });
                                const _0x3ea1ce = _0x15085e.toDataURL("image/png");
                                if (_0x54e914.length == 0) _0x1f01fc.addImage(_0x3ea1ce, "PNG", _0x3c6f56, _0x490287 - 0.5, _0x3d65e2, _0x1a5823 - 2.8), _0x1f01fc.rect(_0x3c6f56, _0x490287 - 0.5, _0x3d65e2, _0x1a5823 - 2.5), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2), _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4), _0x490287 + 2), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 4), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China"), _0x490287 + _0x1a5823 - 4);else {
                                  if (_0x54e914.length == 1) _0x1f01fc.addImage(_0x3ea1ce, "PNG", _0x3c6f56, _0x490287 - 0.5, _0x3d65e2 - 16.5, _0x1a5823 - 2.8), _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 50, _0x490287 - 0.5, 13.5, 13.5), _0x1f01fc.rect(_0x3c6f56, _0x490287 - 0.5, _0x3d65e2 - 16.5, _0x1a5823 - 2.5), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2), _0x22d1e4.length > 20 ? _0x1f01fc.setFontSize(4.5) : _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4) - 16.5, _0x490287 + 2), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 4), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China") - 16.5, _0x490287 + _0x1a5823 - 4);else _0x54e914.length == 2 && (_0x1f01fc.addImage(_0x3ea1ce, "PNG", _0x3c6f56, _0x490287 - 0.5, _0x3d65e2 - 26, _0x1a5823 - 2.8), _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 41, _0x490287 - 0.4, 13, 13), _0x1f01fc.addImage(_0xdcc43, "PNG", _0x3c6f56 + 54, _0x490287 - 0.55, 13, 13), _0x1f01fc.rect(_0x3c6f56, _0x490287 - 0.5, _0x3d65e2 - 26, _0x1a5823 - 2.5), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2), _0x22d1e4.length > 20 ? _0x1f01fc.setFontSize(4) : _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4) - 26, _0x490287 + 2), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 4), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China") - 26, _0x490287 + _0x1a5823 - 4));
                                }
                              } else {
                                if (_0x470f5e == "myodfzcz100") {
                                  {
                                    const _0x279f49 = document.createElement("canvas");
                                    _0x279f49.width = _0x3d65e2;
                                    _0x279f49.height = _0x1a5823;
                                    JsBarcode(_0x279f49, _0x4afb5f, {
                                      "format": "CODE128",
                                      "lineColor": "#000",
                                      "width": 1,
                                      "height": 20,
                                      "displayValue": false
                                    });
                                    const _0x272283 = _0x279f49.toDataURL("image/png");
                                    _0x1f01fc.addImage(_0x272283, "PNG", _0x3c6f56, _0x490287, _0x3d65e2 - 19, _0x1a5823 - 2.8);
                                    _0x1f01fc.rect(_0x3c6f56, _0x490287, _0x3d65e2 - 19, _0x1a5823 - 2);
                                    _0x1f01fc.setFontSize(5);
                                    _0x1f01fc.text(_0x304e50, _0x3c6f56 + 2, _0x490287 + 2.3);
                                    _0x1f01fc.setFontSize(5);
                                    _0x1f01fc.text(_0x22d1e4, 45.5 - _0x1f01fc.getTextWidth(_0x22d1e4), _0x490287 + 2.3);
                                    _0x1f01fc.setFontSize(5.5);
                                    _0x1f01fc.text(_0x32430e, _0x3c6f56 + 2, _0x490287 + _0x1a5823 - 3.5);
                                    _0x1f01fc.setFontSize(5.5);
                                    _0x1f01fc.text("Made In China", 45.1 - _0x1f01fc.getTextWidth("Made In China"), _0x490287 + _0x1a5823 - 3.5);
                                    if (_0x54e914.length == 1) _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 3, _0x490287 + 56.2, 14, 14);else _0x54e914.length == 2 && (_0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 0.2, _0x490287 + 57.5, 11, 11), _0x1f01fc.addImage(_0xdcc43, "PNG", _0x3c6f56 + 11.1, _0x490287 + 57.5, 11, 11));
                                  }
                                } else {
                                  if (_0x470f5e == "myodfz100" || _0x470f5e == "myodp100" || _0x470f5e == "myodps100") {
                                    {
                                      const _0x5b00cc = document.createElement("canvas");
                                      _0x5b00cc.width = _0x3d65e2;
                                      _0x5b00cc.height = _0x1a5823;
                                      JsBarcode(_0x5b00cc, _0x4afb5f, {
                                        "format": "CODE128",
                                        "lineColor": "#000",
                                        "width": 1,
                                        "height": 20,
                                        "displayValue": false
                                      });
                                      const _0x2ccfb9 = _0x5b00cc.toDataURL("image/png");
                                      if (_0x54e914.length == 0) _0x1f01fc.addImage(_0x2ccfb9, "PNG", _0x3c6f56 + 10, _0x490287, _0x3d65e2 + 10, _0x1a5823 - 2.8), _0x1f01fc.rect(_0x3c6f56 + 10, _0x490287, _0x3d65e2 + 10, _0x1a5823 - 2), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 13, _0x490287 + 2.3), _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 85.5 - _0x1f01fc.getTextWidth(_0x22d1e4), _0x490287 + 2.3), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 13, _0x490287 + _0x1a5823 - 3.5), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 85.1 - _0x1f01fc.getTextWidth("Made In China"), _0x490287 + _0x1a5823 - 3.5);else {
                                        if (_0x54e914.length == 1) _0x1f01fc.addImage(_0x2ccfb9, "PNG", _0x3c6f56 + 1, _0x490287, _0x3d65e2 + 10, _0x1a5823 - 2.8), _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 80, _0x490287, 14, 14), _0x1f01fc.rect(_0x3c6f56 + 1, _0x490287, _0x3d65e2 + 10, _0x1a5823 - 2), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2.3), _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 75.5 - _0x1f01fc.getTextWidth(_0x22d1e4), _0x490287 + 2.3), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 3.5), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 75.1 - _0x1f01fc.getTextWidth("Made In China"), _0x490287 + _0x1a5823 - 3.5);else _0x54e914.length == 2 && (_0x1f01fc.addImage(_0x2ccfb9, "PNG", _0x3c6f56 + 1, _0x490287, _0x3d65e2 + 1, _0x1a5823 - 2.8), _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 68.5, _0x490287, 14, 14), _0x1f01fc.addImage(_0xdcc43, "PNG", _0x3c6f56 + 83, _0x490287, 14, 14), _0x1f01fc.rect(_0x3c6f56 + 1, _0x490287, _0x3d65e2 + 1, _0x1a5823 - 2), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2.3), _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 75.5 - _0x1f01fc.getTextWidth(_0x22d1e4) - 9, _0x490287 + 2.3), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 3.5), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 75.1 - _0x1f01fc.getTextWidth("Made In China") - 9, _0x490287 + _0x1a5823 - 3.5));
                                      }
                                    }
                                  } else {
                                    if (_0x470f5e != "myodp74" && _0x470f5e != "myodps74" && _0x470f5e != "myod72" && _0x470f5e != "mygys72") {
                                      {
                                        const _0x3d4d92 = document.createElement("canvas");
                                        _0x3d4d92.width = _0x3d65e2;
                                        _0x3d4d92.height = _0x1a5823;
                                        JsBarcode(_0x3d4d92, _0x4afb5f, {
                                          "format": "CODE128",
                                          "lineColor": "#000",
                                          "width": 1,
                                          "height": 20,
                                          "displayValue": false
                                        });
                                        const _0x4f5003 = _0x3d4d92.toDataURL("image/png");
                                        if (_0x54e914.length == 0) _0x1f01fc.addImage(_0x4f5003, "PNG", _0x3c6f56, _0x490287, _0x3d65e2, _0x1a5823), _0x1f01fc.rect(_0x3c6f56, _0x490287, _0x3d65e2, _0x1a5823), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2.5), _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4), _0x490287 + 2.5), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 1.2), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China"), _0x490287 + _0x1a5823 - 1.2);else {
                                          if (_0x54e914.length == 1) {
                                            _0x1f01fc.addImage(_0x4f5003, "PNG", _0x3c6f56, _0x490287, _0x3d65e2 - 16.5, _0x1a5823);
                                            _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 50, _0x490287, 15, 15);
                                            _0x1f01fc.rect(_0x3c6f56, _0x490287, _0x3d65e2 - 16.5, _0x1a5823);
                                            _0x1f01fc.setFontSize(5);
                                            _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2.5);
                                            _0x22d1e4.length > 20 ? _0x1f01fc.setFontSize(4.5) : _0x1f01fc.setFontSize(5.5);
                                            _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4) - 16.5, _0x490287 + 2.5);
                                            _0x1f01fc.setFontSize(6);
                                            _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 1.2);
                                            _0x1f01fc.setFontSize(6);
                                            _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China") - 16.5, _0x490287 + _0x1a5823 - 1.2);
                                          } else _0x54e914.length == 2 && (_0x1f01fc.addImage(_0x4f5003, "PNG", _0x3c6f56, _0x490287, _0x3d65e2 - 26, _0x1a5823), _0x1f01fc.addImage(_0x520740, "PNG", _0x3c6f56 + 40.5, _0x490287 + 0.6, 13.5, 13.5), _0x1f01fc.addImage(_0xdcc43, "PNG", _0x3c6f56 + 53.8, _0x490287 + 0.8, 13.5, 13.5), _0x1f01fc.rect(_0x3c6f56, _0x490287, _0x3d65e2 - 26, _0x1a5823), _0x1f01fc.setFontSize(5), _0x1f01fc.text(_0x304e50, _0x3c6f56 + 3, _0x490287 + 2.5), _0x22d1e4.length > 20 ? _0x1f01fc.setFontSize(4) : _0x1f01fc.setFontSize(5.5), _0x1f01fc.text(_0x22d1e4, 64.5 - _0x1f01fc.getTextWidth(_0x22d1e4) - 26, _0x490287 + 2.5), _0x1f01fc.setFontSize(6), _0x1f01fc.text(_0x32430e, _0x3c6f56 + 3, _0x490287 + _0x1a5823 - 1.2), _0x1f01fc.setFontSize(6), _0x1f01fc.text("Made In China", 64.1 - _0x1f01fc.getTextWidth("Made In China") - 26, _0x490287 + _0x1a5823 - 1.2));
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              if (_0x4b1021 === _0x199b62 - 1 && !_0x3b01fa) {
                                if (_0x470f5e == "myHbzx" || _0x470f5e == "myodp74" || _0x470f5e == "myod74" || _0x470f5e == "myodps74") _0x1f01fc.addPage([70, 40]);else {
                                  if (_0x470f5e == "mySpb" || _0x470f5e == "myodp76") _0x1f01fc.addPage([70, 60]);else {
                                    if (_0x470f5e == "myodp" || _0x470f5e == "myodps77" || _0x470f5e == "myodfz77") _0x1f01fc.addPage([70, 70]);else _0x470f5e == "myodp100" || _0x470f5e == "myodps100" || _0x470f5e == "myodfz100" || _0x470f5e == "myodfzcz100" ? _0x1f01fc.addPage([100, 100]) : _0x1f01fc.addPage([70, 20]);
                                  }
                                }
                              }
                            }
                          }
                        }
                        _0x1f01fc.setProperties({
                          "title": "自定义文件名"
                        });
                        _0x1f01fc.autoPrint();
                        const _0x891181 = _0x1f01fc.output("blob"),
                          _0x3b74ac = document.createElement("iframe");
                        _0x3b74ac.style.position = "absolute";
                        _0x3b74ac.style.width = "0px";
                        _0x3b74ac.style.height = "0px";
                        _0x3b74ac.style.border = "none";
                        _0x3b74ac.className = "print-iframe";
                        document.body.appendChild(_0x3b74ac);
                        const _0x125a84 = URL.createObjectURL(_0x891181);
                        _0x3b74ac.src = _0x125a84;
                        _0x3b74ac.onload = function () {
                          setTimeout(function () {
                            _0x3b74ac.contentWindow.focus();
                            _0x3b74ac.contentWindow.print();
                            document.querySelector(".tooltipprint") ? document.querySelector(".tooltipprint").remove() : "";
                            document.querySelector("#modal") ? document.querySelector("#modal").remove() : "";
                            document.querySelectorAll(".print-iframe").length > 1 ? document.querySelector(".print-iframe").remove() : "";
                            URL.revokeObjectURL(_0x125a84);
                          }, 1000);
                        };
                        _0xa9dcd2();
                      }
                    } catch (_0x1e324f) {
                      console.log(_0x1e324f);
                    }
                  } else _0x15fb86.data.on == "yb" && _0x19c80f("当前为初创版，请联系小助理升级！", "常规帮助");
                }
              } else {
                if (_0x15fb86.data.shopState == "可绑") {
                  {
                    var _0x24f4b2 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                    _0x19c80f("是否绑定当前店铺使用<br>" + _0x24f4b2, "可绑定帮助", _0x41bb20, _0x41fb05, _0x24f4b2);
                  }
                } else {
                  if (_0x15fb86.data.shopState == "超绑") _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");else _0x15fb86.data.shopState == "绑满" && _0x19c80f("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                }
              }
            }
            function _0x2b97f9(_0x3e4a2b, _0x42cabf, _0x1c4751) {
              var _0x4366b9 = _0x42cabf.odgysAll,
                _0xfc3fff = _0x42cabf.odsAll,
                _0x6bb8b2 = _0x501d61[0][7],
                _0x315601 = _0x501d61[0][6];
              const _0x74fe9e = document.querySelectorAll("[class=\"printTooltip show\"]");
              _0x74fe9e.forEach(_0x3dc902 => {
                _0x3dc902.style.display = "none";
                _0x3dc902.remove();
              });
              _0x47ada0 = ["请选择", "请选择", "请选择"];
              const _0x3d1664 = document.createElement("div");
              _0x3d1664.id = "print-photo-modal";
              _0x3d1664.className = "print-photo-modal";
              const _0x16eabb = document.createElement("div");
              _0x16eabb.className = "print-photo-modal-content";
              const _0x214a73 = document.createElement("span");
              _0x214a73.id = "print-photo-closeModal";
              _0x214a73.className = "print-photo-close";
              _0x214a73.innerHTML = "&times;";
              _0x214a73.onclick = _0x107ae1;
              const _0x14220e = document.createElement("div");
              _0x14220e.className = "print-photo-modal-header";
              const _0x15a45c = document.createElement("h2");
              _0x15a45c.innerText = _0x3e4a2b;
              _0x14220e.appendChild(_0x15a45c);
              const _0x7955f5 = document.createElement("div");
              _0x7955f5.className = "print-photo-modal-body";
              const _0x258f0e = document.createElement("div");
              _0x258f0e.className = "print-photo-left-panel";
              const _0x3d2ff2 = document.createElement("img");
              _0x3d2ff2.src = _0xee18b7;
              _0x3d2ff2.alt = "图片";
              _0x3d2ff2.style.maxWidth = "100%";
              _0x258f0e.appendChild(_0x3d2ff2);
              const _0x47b5a5 = document.createElement("form");
              _0x47b5a5.className = "print-photo-right-panel";
              const _0x551ea5 = document.createElement("div");
              _0x551ea5.id = "print-photo-inputContainer";
              _0x47b5a5.appendChild(_0x551ea5);
              if (_0x1c4751 != "myod72") {
                _0x4366b9.forEach(_0x496350 => {
                  {
                    const _0x1a1396 = document.createElement("div");
                    _0x1a1396.className = "print-photo-input-wrapper";
                    const _0x16b038 = document.createElement("label");
                    _0x16b038.innerText = _0x496350[0];
                    _0x16b038.className = "print-photo-input-label";
                    const _0x272738 = document.createElement("div");
                    _0x272738.className = "print-photo-custom-select";
                    const _0x4653b3 = document.createElement("div");
                    _0x4653b3.className = "print-photo-selected-option";
                    _0x4653b3.innerText = "请选择";
                    const _0x383de0 = document.createElement("div");
                    _0x383de0.className = "print-photo-options-wrapper";
                    const _0x2f111c = _0x496350[1];
                    _0x2f111c.forEach(_0x4f7e6d => {
                      {
                        var _0x559766 = _0x4f7e6d[0] + "\n" + _0x4f7e6d[1];
                        const _0x37a290 = document.createElement("div");
                        _0x37a290.className = "print-photo-option";
                        _0x37a290.innerText = _0x559766;
                        chrome.storage.local.get("printCodeInfoText", function (_0x4140af) {
                          _0x4140af.printCodeInfoText && _0x559766 === _0x4140af.printCodeInfoText && (_0x4653b3.innerText = _0x559766, _0x47ada0 = _0x4f7e6d);
                        });
                        _0x37a290.addEventListener("click", () => {
                          _0x4653b3.innerText = _0x559766;
                          _0x47ada0 = _0x4f7e6d;
                          chrome.storage.local.set({
                            "printCodeInfoText": _0x559766
                          });
                          _0x383de0.style.display = "none";
                        });
                        _0x383de0.appendChild(_0x37a290);
                      }
                    });
                    _0x272738.appendChild(_0x4653b3);
                    _0x272738.appendChild(_0x383de0);
                    _0x1a1396.appendChild(_0x16b038);
                    _0x1a1396.appendChild(_0x272738);
                    _0x551ea5.appendChild(_0x1a1396);
                    _0x4653b3.addEventListener("click", () => {
                      _0x383de0.style.display = _0x383de0.style.display === "block" ? "none" : "block";
                    });
                    document.addEventListener("click", _0x4764cf => {
                      !_0x272738.contains(_0x4764cf.target) && (_0x383de0.style.display = "none");
                    });
                  }
                });
                _0xfc3fff[0][1].length > 1 && _0xfc3fff.forEach(_0x3a96ec => {
                  const _0x1d4cf2 = document.createElement("div");
                  _0x1d4cf2.className = "print-photo-input-wrapper";
                  const _0x53fddc = document.createElement("label");
                  _0x53fddc.innerText = _0x3a96ec[0];
                  _0x53fddc.className = "print-photo-input-label";
                  const _0x50d655 = document.createElement("div");
                  _0x50d655.className = "print-photo-custom-select";
                  const _0x53039b = document.createElement("div");
                  _0x53039b.className = "print-photo-selected-option";
                  _0x53039b.innerText = "请选择";
                  const _0x2a698f = document.createElement("div");
                  _0x2a698f.className = "print-photo-options-wrapper";
                  const _0x23c2f8 = _0x3a96ec[1];
                  _0x23c2f8.forEach(_0x35e44a => {
                    {
                      var _0x158d9b = _0x35e44a[0] + "\n" + _0x35e44a[1];
                      const _0x5ad352 = document.createElement("div");
                      _0x5ad352.className = "print-photo-option";
                      _0x5ad352.innerText = _0x158d9b;
                      _0x5ad352.addEventListener("click", () => {
                        _0x53039b.innerText = _0x158d9b;
                        _0x34d475.repMailOd = _0x35e44a[2];
                        _0x34d475.repNameOd = _0x35e44a[0];
                        _0x34d475.showAddressOd = _0x35e44a[1];
                        _0x2a698f.style.display = "none";
                      });
                      _0x2a698f.appendChild(_0x5ad352);
                    }
                  });
                  _0x50d655.appendChild(_0x53039b);
                  _0x50d655.appendChild(_0x2a698f);
                  _0x1d4cf2.appendChild(_0x53fddc);
                  _0x1d4cf2.appendChild(_0x50d655);
                  _0x551ea5.appendChild(_0x1d4cf2);
                  _0x53039b.addEventListener("click", () => {
                    _0x2a698f.style.display = _0x2a698f.style.display === "block" ? "none" : "block";
                  });
                  document.addEventListener("click", _0x5e66ef => {
                    !_0x50d655.contains(_0x5e66ef.target) && (_0x2a698f.style.display = "none");
                  });
                });
              }
              var _0x40a76f = ["识别码"];
              _0x20778a[_0x6bb8b2] ? _0x40a76f = _0x40a76f.concat(_0x20778a[_0x6bb8b2]) : _0x3a6280(_0x41bb20, _0x6bb8b2, _0x315601).then(_0x37739a => {
                _0x40a76f = _0x40a76f.concat(_0x37739a);
                _0x20778a[_0x6bb8b2] = _0x37739a;
              });
              if (_0x1c4751 != "mygys72") {
                const _0x4e5dc0 = document.createElement("div");
                _0x4e5dc0.className = "print-photo-radio-container";
                _0x4e5dc0.style.display = "flex";
                _0x4e5dc0.style.padding = "8px";
                _0x4e5dc0.style.marginLeft = "5px";
                const _0x4eb7ea = document.createElement("input");
                _0x4eb7ea.type = "radio";
                _0x4eb7ea.name = "options";
                _0x4eb7ea.id = "option1";
                _0x4eb7ea.value = "option1";
                _0x4eb7ea.checked = true;
                _0x4eb7ea.style.marginRight = "0px";
                const _0x45c4dd = document.createElement("label");
                _0x45c4dd.htmlFor = "option1";
                _0x45c4dd.innerText = "SKC";
                const _0x54a032 = document.createElement("input");
                _0x54a032.type = "radio";
                _0x54a032.name = "options";
                _0x54a032.id = "option2";
                _0x54a032.value = "option2";
                _0x54a032.style.marginRight = "0px";
                _0x54a032.style.marginLeft = "10px";
                const _0x34ceef = document.createElement("label");
                _0x34ceef.htmlFor = "option2";
                _0x34ceef.style.marginRight = "10px";
                _0x34ceef.innerText = "自定义";
                const _0x4f44cf = document.createElement("input");
                _0x4f44cf.type = "text";
                _0x4f44cf.placeholder = "请输入自定义识别码";
                _0x4f44cf.style.display = "none";
                _0x4f44cf.className = "print-photo-input-field";
                _0x4f44cf.autocomplete = "on";
                _0x4f44cf.name = "custom-code";
                let _0xde9981 = null;
                const _0x8f5a8d = () => {
                  _0xde9981 && (_0xde9981.innerHTML = "", _0x40a76f.forEach(_0x3d0e24 => {
                    {
                      const _0x337644 = document.createElement("option");
                      _0x337644.value = _0x3d0e24;
                      _0x337644.innerText = _0x3d0e24;
                      _0xde9981.appendChild(_0x337644);
                    }
                  }));
                };
                _0x54a032.addEventListener("click", () => {
                  {
                    _0x4f44cf.style.display = "block";
                    if (!_0xde9981) _0xde9981 = document.createElement("select"), _0xde9981.style.display = "block", _0xde9981.style.width = "20px", _0xde9981.style.flex = "1", _0xde9981.style.border = "1px solid #ddd", _0xde9981.style.borderRadius = "4px", _0xde9981.style.boxSizing = "border-box", _0xde9981.className = "print-photo-select-field", _0x8f5a8d(), _0xde9981.addEventListener("change", _0x2d8a0a => {
                      _0x4f44cf.value = _0x2d8a0a.target.value;
                    }), _0x4e5dc0.appendChild(_0xde9981);else {
                      _0xde9981.style.display = "block";
                      _0x8f5a8d();
                    }
                  }
                });
                _0x4eb7ea.addEventListener("click", () => {
                  _0x4f44cf.style.display = "none";
                  _0xde9981 && (_0xde9981.style.display = "none");
                });
                _0x4e5dc0.appendChild(_0x4eb7ea);
                _0x4e5dc0.appendChild(_0x45c4dd);
                _0x4e5dc0.appendChild(_0x54a032);
                _0x4e5dc0.appendChild(_0x34ceef);
                _0x4e5dc0.appendChild(_0x4f44cf);
                _0x551ea5.appendChild(_0x4e5dc0);
              }
              if (_0x1c4751 != "myodp74" && _0x1c4751 != "myodps74" && _0x1c4751 != "myod72" && _0x1c4751 != "mygys72") {
                const _0x564eb9 = document.createElement("div");
                _0x564eb9.style.display = "flex";
                _0x564eb9.style.flexWrap = "nowrap";
                _0x564eb9.style.marginTop = "25px";
                _0x564eb9.style.alignItems = "center";
                document.body.appendChild(_0x564eb9);
                const _0x18d4cf = [{
                  "value": "web/printImg/yellow.png",
                  "text": "家用塑料、金属或硬纸盒",
                  "img": chrome.runtime.getURL("web/printImg/y.jpg")
                }, {
                  "value": "web/printImg/lan.png",
                  "text": "家用纸板、瓦楞纸",
                  "img": chrome.runtime.getURL("web/printImg/l.jpg")
                }, {
                  "value": "web/printImg/zongs.png",
                  "text": "家用可降解包装",
                  "img": chrome.runtime.getURL("web/printImg/z.jpg")
                }, {
                  "value": "web/printImg/lvs.png",
                  "text": "家用玻璃",
                  "img": chrome.runtime.getURL("web/printImg/lv.jpg")
                }];
                _0x18d4cf.forEach((_0x249315, _0xa3b56b) => {
                  const _0x58c1a8 = document.createElement("div");
                  _0x58c1a8.style.position = "relative";
                  const _0x187656 = document.createElement("input");
                  _0x187656.type = "checkbox";
                  _0x187656.style.display = "none";
                  _0x187656.id = "option-" + _0xa3b56b;
                  _0x187656.className = "custom-checkbox";
                  _0x187656.value = _0x249315.value;
                  const _0x5bb44a = document.createElement("label");
                  _0x5bb44a.htmlFor = _0x187656.id;
                  _0x5bb44a.style.display = "inline-flex";
                  _0x5bb44a.style.alignItems = "center";
                  _0x5bb44a.style.padding = "0 8px";
                  _0x5bb44a.style.gap = "8px";
                  _0x5bb44a.style.cursor = "pointer";
                  const _0x1956ab = document.createElement("div");
                  _0x1956ab.style.width = "16px";
                  _0x1956ab.style.height = "16px";
                  _0x1956ab.style.border = "2px solid #ddd";
                  _0x1956ab.style.borderRadius = "50%";
                  _0x1956ab.style.flexShrink = "0";
                  const _0x31fffb = document.createElement("span");
                  _0x31fffb.textContent = _0x249315.text;
                  const _0x11bcad = document.createElement("img");
                  _0x11bcad.src = _0x249315.img;
                  _0x11bcad.alt = "分类示意图";
                  _0x11bcad.style.position = "absolute";
                  _0x11bcad.style.left = "100%";
                  _0x11bcad.style.top = "50%";
                  _0x11bcad.style.transform = "translateY(-50%)";
                  _0x11bcad.style.marginLeft = "15px";
                  _0x11bcad.style.width = "250px";
                  _0x11bcad.style.display = "none";
                  _0x11bcad.style.zIndex = "99";
                  _0x11bcad.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                  _0x11bcad.style.borderRadius = "4px";
                  _0x11bcad.style.pointerEvents = "none";
                  _0x5bb44a.appendChild(_0x1956ab);
                  _0x5bb44a.appendChild(_0x31fffb);
                  _0x58c1a8.appendChild(_0x187656);
                  _0x58c1a8.appendChild(_0x5bb44a);
                  _0x58c1a8.appendChild(_0x11bcad);
                  _0x564eb9.appendChild(_0x58c1a8);
                  _0x5bb44a.addEventListener("mouseenter", () => {
                    _0x11bcad.style.display = "block";
                    new Image().src = _0x249315.img;
                  });
                  _0x5bb44a.addEventListener("mouseleave", () => {
                    _0x11bcad.style.display = "none";
                  });
                  _0x187656.addEventListener("change", function () {
                    const _0x3c83ff = document.querySelectorAll(".custom-checkbox:checked");
                    _0x1956ab.style.background = this.checked ? "#2196F3" : "transparent";
                    _0x1956ab.style.borderColor = this.checked ? "#2196F3" : "#ddd";
                    if (_0x3c83ff.length > 2) {
                      {
                        this.checked = false;
                        _0x1956ab.style.background = "transparent";
                        _0x1956ab.style.borderColor = "#ddd";
                        return;
                      }
                    }
                    document.querySelectorAll(".custom-checkbox").forEach(_0x39a064 => {
                      const _0x326239 = _0x3c83ff.length >= 2 && !_0x39a064.checked;
                      _0x39a064.disabled = _0x326239;
                      const _0x6ecddf = _0x39a064.nextElementSibling;
                      _0x6ecddf && (_0x6ecddf.style.opacity = _0x326239 ? "0.5" : "1", _0x6ecddf.style.cursor = _0x326239 ? "not-allowed" : "pointer");
                    });
                  });
                });
                _0x551ea5.appendChild(_0x564eb9);
              }
              _0x7955f5.appendChild(_0x258f0e);
              _0x7955f5.appendChild(_0x47b5a5);
              const _0x2878e4 = document.createElement("div");
              _0x2878e4.className = "print-photo-modal-footer";
              const _0xb6bcae = document.createElement("button");
              _0xb6bcae.id = "print-photo-confirmBtn";
              _0xb6bcae.innerText = "确定";
              _0xb6bcae.onclick = () => {
                if (_0x1c4751 != "mygys72") {
                  var _0x5884e4 = (checkedInput = document.querySelector(".print-photo-radio-container").querySelector("input[name=\"options\"]:checked")) ? checkedInput.value : null;
                  if (_0x5884e4 != "option1") var _0x1d5d7d = document.querySelector(".print-photo-input-field").value;else {
                    var _0x1d5d7d = "";
                  }
                  var _0x11fa74 = Array.from(document.querySelectorAll(".custom-checkbox:checked")).map(_0x2f7983 => _0x2f7983.value);
                  _0x107ae1();
                  _0x4f76ed(_0x501d61, _0x1d5d7d, _0x11fa74);
                } else {
                  _0x107ae1();
                  _0x4f76ed(_0x501d61, "", []);
                }
              };
              const _0x322343 = document.createElement("button");
              _0x322343.id = "print-photo-cancelBtn";
              _0x322343.innerText = "取消";
              _0x322343.onclick = _0x107ae1;
              _0x2878e4.appendChild(_0xb6bcae);
              _0x2878e4.appendChild(_0x322343);
              _0x16eabb.appendChild(_0x214a73);
              _0x16eabb.appendChild(_0x14220e);
              _0x16eabb.appendChild(_0x7955f5);
              _0x16eabb.appendChild(_0x2878e4);
              _0x3d1664.appendChild(_0x16eabb);
              document.body.appendChild(_0x3d1664);
            }
            function _0x107ae1() {
              document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
              document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
              document.getElementById("modal") ? document.getElementById("modal").remove() : "";
              const _0x43c675 = document.getElementById("print-photo-modal");
              _0x43c675 && _0x43c675.remove();
            }
            function _0x27ae05() {
              if (document.getElementById("printPhotoStyles")) return;
              const _0x27885d = document.createElement("style");
              _0x27885d.id = "printPhotoStyles";
              _0x27885d.innerHTML = "\n                      .print-photo-modal {\n                          display: flex;\n                          position: fixed;\n                          z-index: 9999;\n                          top: 0;\n                          left: 0;\n                          width: 100%;\n                          height: 100%;\n                          background-color: rgba(0,0,0,0.6);\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-modal-content {\n                          background-color: #ffffff;\n                          border-radius: 8px;\n                          padding: 20px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n                          width: 95%;\n                          max-width: 1100px;\n                          display: flex;\n                          flex-direction: column;\n                          position: relative;\n                      }\n                      .print-photo-modal-header {\n                          text-align: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-modal-header h2 {\n                          margin: 0;\n                          font-size: 24px;\n                          color: #333;\n                      }\n                      .print-photo-close {\n                          color: #888;\n                          font-size: 24px;\n                          font-weight: bold;\n                          position: absolute;\n                          top: 10px;\n                          right: 10px;\n                          cursor: pointer;\n                      }\n                      .print-photo-close:hover {\n                          color: #000;\n                      }\n                      .print-photo-modal-body {\n                          display: flex;\n                          width: 100%;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel img {\n                          max-width: 100%;\n                          height: auto;\n                          border-radius: 8px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                      }\n                      .print-photo-right-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          flex-direction: column;\n                      }\n                      .print-photo-input-wrapper {\n                          display: flex;\n                          align-items: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-input-label {\n                          flex: 0 0 50px;\n                          font-size: 16px;\n                          margin-right: 10px;\n                          color: #555;\n                      }\n                      .print-photo-custom-select {\n                        position: relative;\n                        width: 360px; /* 宽度 */\n                        border: 1px solid #ccc; /* 边框 */\n                        border-radius: 5px; /* 圆角 */\n                        background: white; /* 背景颜色 */\n                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影效果 */\n                        transition: box-shadow 0.3s; /* 阴影过渡效果 */\n                      }\n              \n                      .print-photo-selected-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer;\n                        background-color: #f0f8ff; /* 选项背景颜色 */\n                        color: #333; /* 字体颜色 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                    \n                        display: flex; /* 使用弹性布局 */\n                        justify-content: space-between; /* 选项内容两边对齐 */\n                        align-items: center; /* 垂直居中对齐 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                      }\n              \n                      .print-photo-selected-option:hover {\n                        background-color: #e0f7fa; /* 鼠标悬停背景颜色 */\n                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 鼠标悬停时的阴影效果 */\n                      }\n              \n                      .print-photo-options-wrapper {\n                        display: none; /* 默认隐藏 */\n                        position: absolute;\n                        top: calc(100% + 2px); /* 向下移动2px */\n                        left: 0;\n                        right: 0;\n                      \n                        border-top: none; /* 去掉顶部边框 */\n                        background: #fafafa; /* 背景颜色 */\n                        z-index: 1000;\n                        max-height: 200px; /* 可选项最大高度 */\n                        overflow-y: auto; /* 允许滚动 */\n                        border-radius: 0 0 5px 5px; /* 圆角 */\n                        \n                        /* 隐藏滚动条 */\n                        scrollbar-width: thin; /* Firefox */\n                        scrollbar-color: #6eaea8 #db2f2f00;; /* Firefox */\n                      }\n              \n                      .print-photo-options-wrapper::-webkit-scrollbar {\n                        width: 0; /* 隐藏滚动条宽度 */\n                        background: transparent; /* 背景透明 */\n                      }\n              \n                      .print-photo-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer; /* 鼠标样式 */\n                        white-space: pre-wrap; /* 允许换行 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                        background-color: #fff;\n                      }\n              \n                      .print-photo-option:hover {\n                        background: #e0f7fa; /* 鼠标悬停效果 */\n                      }\n              \n                      /* 最后一项去掉底部边框 */\n                      .print-photo-option:last-child {\n                        margin-bottom: 0; /* 去掉最后一项的间隔 */\n                      }\n              \n                      /* 增加箭头指示 */\n                      .print-photo-arrow {\n                        border: solid #333; /* 箭头颜色 */\n                        border-width: 0 1px 1px 0; /* 箭头形状 */\n                        display: inline-block;\n                        padding: 3px;\n                        margin-left: 10px; /* 箭头与选项的间距 */\n                        transform: rotate(45deg); /* 旋转箭头 */\n                      }\n              \n                      .print-photo-input-field {\n                          flex: 1;\n                          padding: 10px;\n                          border: 1px solid #ddd;\n                          border-radius: 4px;\n                          box-sizing: border-box;\n                      }\n                      .print-photo-modal-footer {\n                          display: flex;\n                          justify-content: flex-end;\n                          gap: 10px;\n                          margin-top: 20px;\n                      }\n                      .print-photo-modal-footer button {\n                          padding: 10px 20px;\n                          border: none;\n                          border-radius: 4px;\n                          cursor: pointer;\n                          font-size: 16px;\n                          transition: background-color 0.3s;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn {\n                          background-color: #4CAF50;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn:hover {\n                          background-color: #45a049;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn {\n                          background-color: #f44336;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn:hover {\n                          background-color: #e53935;\n                      }\n                  ";
              document.head.appendChild(_0x27885d);
            }
            function _0x323f60(_0x1e11c4, _0x1ba3de, _0x4451a6) {
              _0x27ae05();
              if (_0x4451a6 != "myjtm72") _0x2b97f9(_0x1e11c4, _0x1ba3de, _0x4451a6);else {
                _0x4f76ed(_0x501d61, "", []);
              }
              document.getElementById("print-photo-modal").style.display = "flex";
            }
            if (_0x3ecbac) {
              _0x470f5e = _0x3ecbac.id;
              _0x539ac3(chrome.runtime.getURL(_0x3ecbac.getAttribute("data-custom-value"))).then(_0x5cd6b1 => {
                {
                  _0xee18b7 = _0x5cd6b1;
                  if (_0x3ecbac.id == "myHbzx") _0x4f76ed(_0x501d61, "", []);else {
                    if (Object.keys(_0x34d475).length > 4) {
                      _0x323f60(_0x3ecbac.value, _0x34d475, _0x3ecbac.id);
                    } else {
                      _0x5021ce("欧代和制造商信息不完整，如您确定已经填写了欧代和制造商信息，请刷新页面后再尝试使用！", 5000);
                    }
                  }
                }
              }).catch(_0x40536d => {
                console.log(_0x40536d);
              });
            } else _0x4f76ed(_0x501d61, "", []);
          });
          _0x2891be != 1 && (document.querySelector("[for='" + _0x2891be + "']").click(), "咕噜噜打印设置（模板内支持选择西班牙标签）".replace(/\\u([\d\w]{4})/gi, (_0x1ae648, _0x1f3b26) => String.fromCharCode(parseInt(_0x1f3b26, 16))) == document.querySelector("#dayingululuset").innerText ? "" : !function () {
            chrome.storage.local.set({
              "codePhone": ["", ""]
            });
            window.location.reload();
          }());
        }(_0x348bfa, _0x42c190, _0x12e059) : _0x5021ce("请授权后使用功能,如已授权请检查网络是否正常！", 4000);
      });
    }) : _0x5021ce("请授权后使用功能！", 4000);
  });
}
async function _0x1957c1(_0x3e3116) {
  var _0x4ee047 = [],
    _0x3b737d = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]"),
    _0x116f96 = {};
  _0x3b737d.forEach(_0x432e3d => {
    var _0x3b66e1 = _0x432e3d.querySelectorAll("td");
    if (/^-?\d+(\.\d+)?$/.test(_0x3b66e1[1].innerText)) {
      _0x116f96[_0x3b66e1[1].innerText] = parseInt(_0x3b66e1[5].innerText);
    } else _0x116f96[_0x3b66e1[2].innerText] = parseInt(_0x3b66e1[6].querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value);
  });
  if (_0x3e3116.result.list) for (const _0x88279 of _0x3e3116.result.list) {
    {
      if (_0x88279.productSkuSpecI18nMap.en.length != 0 && _0x88279.productSkuSpecI18nMap.en.length == _0x88279.productSkuSpecList.length) var _0x3159a9 = _0x88279.productSkuSpecI18nMap.en.map(_0x496654 => _0x496654.specName ? _0x496654.specName : "").join("-");else {
        var _0x3159a9 = _0x88279.productSkuSpecList.map(_0x3e5cc1 => _0x3e5cc1.specName ? _0x3e5cc1.specName : "").join("-");
        if (/[\u4e00-\u9fa5]/.test(_0x3159a9)) var _0x3159a9 = await _0xe99d7e(_0x3159a9, _0x88279.labelCodeVO.labelCode);
      }
      var _0x4e89cd = _0x88279.productSkuSpecList.map(_0xc9f862 => _0xc9f862.specName ? _0xc9f862.specName : "").join("-");
      if (!/[\u4e00-\u9fa5]/.test(_0x4e89cd)) var _0x4e89cd = await _0xe99d7e(_0x4e89cd, _0x88279.labelCodeVO.labelCode, 2);
      if (_0x88279.labelCodeVO.skuExtCode == "") var _0x3cbe7a = String(_0x88279.labelCodeVO.productSkcId);else var _0x3cbe7a = String(_0x88279.labelCodeVO.skuExtCode);
      _0x4ee047.push([String(_0x88279.labelCodeVO.labelCode), _0x3cbe7a, _0x3159a9, String(_0x88279.labelCodeVO.productSkuId), _0x116f96[String(_0x88279.labelCodeVO.productSkuId)], _0x88279.displayImage, String(_0x88279.labelCodeVO.productSkcId), _0x88279.productId, _0x4e89cd]);
    }
  } else {
    if (_0x3e3116.result.pageItems) for (const _0x4128be of _0x3e3116.result.pageItems) {
      if (_0x4128be.productSkuSpecI18nMap.en.length != 0 && _0x4128be.productSkuSpecI18nMap.en.length == _0x4128be.productSkuSpecList.length) var _0x3159a9 = _0x4128be.productSkuSpecI18nMap.en.map(_0x170dfb => _0x170dfb.specName ? _0x170dfb.specName : "").join("-");else {
        {
          var _0x3159a9 = _0x4128be.productSkuSpecList.map(_0x13ceac => _0x13ceac.specName ? _0x13ceac.specName : "").join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x3159a9)) var _0x3159a9 = await _0xe99d7e(_0x3159a9, _0x4128be.labelCodeVO.labelCode);
        }
      }
      var _0x4e89cd = _0x4128be.productSkuSpecList.map(_0x5015b5 => _0x5015b5.specName ? _0x5015b5.specName : "").join("-");
      if (_0x4128be.labelCodeVO.skuExtCode == "") {
        var _0x3cbe7a = String(_0x4128be.labelCodeVO.productSkcId);
      } else {
        var _0x3cbe7a = String(_0x4128be.labelCodeVO.skuExtCode);
      }
      _0x4ee047.push([String(_0x4128be.labelCodeVO.labelCode), _0x3cbe7a, _0x3159a9, String(_0x4128be.labelCodeVO.productSkuId), _0x116f96[String(_0x4128be.labelCodeVO.productSkuId)], _0x4128be.displayImage, String(_0x4128be.labelCodeVO.productSkcId), _0x4128be.productId, _0x4e89cd]);
    } else for (const _0x408b1f of _0x3e3116.result) {
      if (_0x408b1f.englishSecondarySpecVOList.length != 0 && _0x408b1f.englishSecondarySpecVOList.length == _0x408b1f.secondarySpecVOList.length) var _0x3159a9 = _0x408b1f.englishSecondarySpecVOList.map(_0x247939 => _0x247939.specName).join("-");else {
        {
          var _0x3159a9 = _0x408b1f.secondarySpecVOList.map(_0x50b9aa => _0x50b9aa.specName).join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x3159a9)) var _0x3159a9 = await _0xe99d7e(_0x3159a9, _0x408b1f.labelCode);
        }
      }
      var _0x4e89cd = _0x408b1f.secondarySpecVOList.map(_0x512ded => _0x512ded.specName).join("-");
      if (!/[\u4e00-\u9fa5]/.test(_0x4e89cd)) var _0x4e89cd = await _0xe99d7e(_0x4e89cd, _0x408b1f.labelCode, 2);
      if (_0x408b1f.skuExtCode == "") {
        var _0x3cbe7a = String(_0x408b1f.productSkcId);
      } else {
        var _0x3cbe7a = String(_0x408b1f.skuExtCode);
      }
      _0x4ee047.push([String(_0x408b1f.labelCode), _0x3cbe7a, _0x3159a9, String(_0x408b1f.productSkuId), _0x116f96[String(_0x408b1f.productSkuId)], _0x408b1f.thumbUrl, String(_0x408b1f.productSkcId), 0, _0x4e89cd]);
    }
  }
  return _0x4ee047;
}
async function _0x21de03(_0x30c4fe, _0x31d84a) {
  const _0x4b047a = new Headers();
  _0x4b047a.append("accept", "*/*");
  _0x4b047a.append("accept-language", "zh-CN,zh;q=0.9");
  _0x4b047a.append("mallid", _0x30c4fe);
  _0x4b047a.append("Content-Type", "application/json");
  let _0x324481;
  try {
    if (_0x31d84a.slice(0, 2) === "WB") {
      const _0x294cba = async (_0x47c437, _0x4a9171, _0x2fb868 = 5) => {
          try {
            {
              const _0x3d565a = await fetch(_0x47c437, _0x4a9171),
                _0x41db7c = await _0x3d565a.json();
              if (!_0x41db7c.success) {
                throw new Error("HTTP error! Status: " + _0x3d565a.status);
              }
              return _0x41db7c;
            }
          } catch (_0x99e149) {
            {
              if (_0x2fb868 > 0) return _0x294cba(_0x47c437, _0x4a9171, _0x2fb868 - 1);else {}
            }
          }
        },
        _0x57d18e = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/purchase/order/printProductSkuLabelForPurchaseOrder";
      _0x324481 = JSON.stringify({
        "subPurchaseOrderSnList": [_0x31d84a]
      });
      const _0x13fab4 = {
          "method": "POST",
          "headers": _0x4b047a,
          "body": _0x324481,
          "redirect": "follow"
        },
        _0x278b97 = await _0x294cba(_0x57d18e, _0x13fab4);
      await _0x278b97;
      const _0x43fb58 = [],
        _0x27b969 = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]"),
        _0x333411 = {};
      _0x27b969.forEach(_0x24a3fb => {
        const _0x8cf19e = _0x24a3fb.querySelectorAll("td");
        _0x333411[_0x8cf19e[1].innerText] = parseInt(_0x8cf19e[5].innerText);
      });
      for (const _0xac7b0b of _0x278b97.result.list) {
        const _0x5b5ded = _0xac7b0b.productSkuSpecI18nMap.en.map(_0x43a875 => _0x43a875.specName).join("-");
        if (_0xac7b0b.labelCodeVO.skuExtCode == "") {
          var _0x470b02 = String(_0xac7b0b.labelCodeVO.productSkcId);
        } else var _0x470b02 = String(_0xac7b0b.labelCodeVO.skuExtCode);
        _0x43fb58.push([String(_0xac7b0b.labelCodeVO.labelCode), _0x470b02, _0x5b5ded, String(_0xac7b0b.labelCodeVO.productSkuId), _0x333411[String(_0xac7b0b.labelCodeVO.productSkuId)], _0xac7b0b.displayImage]);
      }
      return _0x43fb58;
    }
  } catch (_0x319f3b) {
    return [];
  }
}
let _0x299e27 = false,
  _0x20f101 = false,
  _0x2afebc = false;
setInterval(() => {
  const _0x2791dc = window.location.href;
  if (_0x2791dc.includes("https://seller.kuajingmaihuo.com/main/order-manage") || _0x2791dc.includes("https://seller.kuajingmaihuo.com/main/product/label")) {
    {
      if (!_0x299e27) {
        {
          const _0x23e33c = document.querySelector("[class*=\"order-manage_handleCnt\"]"),
            _0x67bd43 = document.querySelector("[class*=\"shipping-list_flexAndColo\"]"),
            _0x2f6fcb = document.querySelector("[class*=\"product-label_dividerFieldContainer\"]");
          if (_0x23e33c) {
            const _0x28a1ca = _0x23e33c.querySelectorAll("button");
            for (let _0x237a4c of _0x28a1ca) {
              _0x237a4c.innerText === "批量打印商品条码" && (_0x299e27 = true, _0x237a4c.addEventListener("click", function () {
                _0x2afebc = true;
              }, {
                "once": true
              }));
            }
          } else {
            if (_0x67bd43) {
              {
                const _0x2f9cc0 = _0x67bd43.querySelectorAll("button");
                for (let _0x5e3a42 of _0x2f9cc0) {
                  _0x5e3a42.innerText === "批量打印商品条码" && (_0x299e27 = true, _0x5e3a42.addEventListener("click", function () {
                    _0x2afebc = true;
                  }, {
                    "once": true
                  }));
                }
              }
            } else {
              if (_0x2f6fcb) {
                const _0x22e2a2 = _0x2f6fcb.querySelectorAll("button");
                for (let _0x23129b of _0x22e2a2) {
                  _0x23129b.innerText === "批量打印条码" && (_0x299e27 = true, _0x23129b.addEventListener("click", function () {
                    _0x2afebc = true;
                  }, {
                    "once": true
                  }));
                }
              }
            }
          }
          Object.keys(_0x34d475).length == 0 && _0xf6ea4 && (_0xf6ea4 = false, _0x3130b9().then(_0x5b7442 => {
            chrome.runtime.sendMessage({
              "type": "searchEuropean",
              "mallid": _0x5b7442
            }, _0x2a8c1e => {
              _0x34d475 = _0x2a8c1e.data;
              _0xf6ea4 = true;
            });
          }));
        }
      }
      !_0x20f101 && (_0x20f101 = true, document.body.addEventListener("click", function (_0x8428ab) {
        {
          const _0x1411e8 = _0x8428ab.target;
          var _0x3cd3c2 = ["打印商品条码", "批量打印商品条码", "批量打印条码"];
          if ((_0x1411e8.matches("span") || _0x1411e8.matches("button")) && _0x3cd3c2.includes(_0x1411e8.textContent)) {
            {
              _0x299e27 = false;
              !_0x1411e8.classList.contains("barcode-click-listener-added") && _0x1411e8.classList.add("barcode-click-listener-added");
              let _0xdd1590 = [];
              _0x184858(_0x1411e8, _0xdd1590);
              if (_0xdd1590.length === 0) {
                if (!_0x2afebc) {
                  {
                    _0x2afebc = false;
                    return;
                  }
                }
              } else {
                _0x2afebc = false;
              }
              var _0x33db3e = setInterval(() => {
                try {
                  {
                    _0x184858(_0x1411e8, _0xdd1590);
                    var _0x382649 = document.createElement("style");
                    _0x382649.innerHTML = "\n                                .pspinner {\n                                    display: inline-block;\n                                    width: 16px;\n                                    height: 16px;\n                                    border: 2px solid rgba(255, 255, 255, 0.3);\n                                    border-radius: 50%;\n                                    border-top-color: #fff;\n                                    animation: spin 1s linear infinite;\n                                    vertical-align: middle;\n                                }\n                                @keyframes spin {\n                                    to { transform: rotate(360deg); }\n                                }\n                            ";
                    document.head.appendChild(_0x382649);
                    var _0x457b00 = document.querySelector("[class*=index-module__footer]"),
                      _0x203abe = document.querySelector("#gululuPrint");
                    if (_0x457b00 && !_0x203abe) {
                      {
                        fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x468244 => _0x468244.arrayBuffer()).then(_0xfbef3f => {
                          crypto.subtle.digest("SHA-256", _0xfbef3f).then(_0x1ffc8f => {
                            const _0x56b2c4 = Array.from(new Uint8Array(_0x1ffc8f)),
                              _0x16601b = _0x56b2c4.map(_0x206148 => _0x206148.toString(16).padStart(2, "0")).join("");
                            _0x16601b == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                              "codePhone": ["", ""]
                            });
                          });
                        });
                        const _0x14d307 = !window.location.href.includes("shipping-desk"),
                          _0x4cbb2d = !document.querySelector("#gululuPrint"),
                          _0xb4d5db = document.querySelector("[data-testid=\"beast-core-drawer-content\"] tbody tr").querySelectorAll("td"),
                          _0x51d9d0 = _0xb4d5db.length > 7;
                        if (_0x14d307 && _0x4cbb2d && _0x51d9d0) {
                          {
                            const _0x2a17b9 = document.createElement("button");
                            _0x2a17b9.textContent = "咕噜噜打印";
                            _0x2a17b9.style = "\n                                        padding: 5px 20px;\n                                        background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                        color: white;\n                                        border: none;\n                                        border-radius: 5px;\n                                        cursor: pointer;\n                                        font-size: 16px;\n                                        margin-left: 10px;\n                                    ";
                            _0x2a17b9.id = "gululuPrint";
                            _0x457b00.appendChild(_0x2a17b9);
                            "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x4c08a3, _0x54b4e8) => String.fromCharCode(parseInt(_0x54b4e8, 16))) == _0x2a17b9.textContent ? "" : !function () {
                              chrome.storage.local.set({
                                "codePhone": ["", ""]
                              });
                              window.location.reload();
                            }();
                            _0x2a17b9.addEventListener("click", function () {
                              _0x2a17b9.innerHTML = "<span class=\"pspinner\"></span> 咕噜噜打印";
                              _0x2a17b9.classList.add("loading");
                              chrome.storage.local.get("codePhone", function (_0x596180) {
                                {
                                  const _0x4ff96a = _0x596180.codePhone;
                                  if (_0x4ff96a) {
                                    {
                                      _0x2a17b9.innerHTML = "咕噜噜打印";
                                      let _0x151dec,
                                        _0x58baa0 = [];
                                      for (let _0x5fdf37 of document.querySelectorAll("[class*=\"TB_tableWrapper\"]")) {
                                        if (_0x5fdf37.innerText.includes("商品名称\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t发货数\t打印数量\t操作")) _0x151dec = _0x5fdf37.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr"), _0x151dec.forEach(_0x43e337 => {
                                          {
                                            let _0x5472fe = _0x43e337.querySelectorAll("td"),
                                              _0x1f4049 = _0x43e337.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value,
                                              _0x46d09c = _0x5472fe[1].innerText;
                                            _0x58baa0.push([_0x46d09c, _0x1f4049]);
                                          }
                                        });else {
                                          if (_0x5fdf37.innerText.includes("商品名称\t贴标签要求\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t打印数量\t操作")) {
                                            _0x151dec = _0x5fdf37.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr");
                                            _0x151dec.forEach(_0x444bd9 => {
                                              let _0x4e4368 = _0x444bd9.querySelectorAll("td"),
                                                _0x1df99c = _0x444bd9.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value,
                                                _0x48096c = _0x4e4368[2].innerText;
                                              _0x58baa0.push([_0x48096c, _0x1df99c]);
                                            });
                                          }
                                        }
                                      }
                                      "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x345aa5, _0x47b889) => String.fromCharCode(parseInt(_0x47b889, 16))) == document.querySelector("#gululuPrint").innerText ? "" : !function () {
                                        chrome.storage.local.set({
                                          "codePhone": ["", ""]
                                        });
                                        window.location.reload();
                                      }();
                                      _0x2afebc ? _0x1957c1(typeof _0x46188c === "string" ? JSON.parse(_0x46188c) : _0x46188c).then(_0x2503c9 => {
                                        chrome.storage.local.get("printCodeClickMod", function (_0x3ba20d) {
                                          _0x3ba20d.printCodeClickMod ? _0x215cda(_0x2503c9, _0x58baa0, _0x3ba20d.printCodeClickMod) : _0x215cda(_0x2503c9, _0x58baa0);
                                        });
                                      }) : (_0x2afebc = false, _0x1957c1(typeof _0x46188c === "string" ? JSON.parse(_0x46188c) : _0x46188c).then(_0x1aa70 => {
                                        chrome.storage.local.get("printCodeClickMod", function (_0x824b8a) {
                                          _0x824b8a.printCodeClickMod ? (_0x2a17b9.classList.remove("loading"), _0x215cda(_0x1aa70, _0x58baa0, _0x824b8a.printCodeClickMod)) : (_0x2a17b9.classList.remove("loading"), _0x215cda(_0x1aa70, _0x58baa0));
                                        });
                                      }));
                                    }
                                  } else _0x2a17b9.classList.remove("loading"), _0x5021ce("请授权后使用功能！", 4000);
                                }
                              });
                            });
                            clearInterval(_0x33db3e);
                          }
                        }
                      }
                    }
                  }
                } catch (_0x257376) {
                  console.log(_0x257376);
                }
              }, 1000);
            }
          }
        }
      }));
    }
  }
}, 1000);
function _0x184858(_0x3bd069, _0x296a9a) {
  const _0xe384b8 = _0x3bd069.closest("tr");
  if (_0xe384b8) {
    let _0x3ae2c6 = _0xe384b8.children[0].innerText.split("\n");
    _0x3ae2c6.length > 3 && _0x3ae2c6[0].slice(0, 2) !== "WB" ? (_0x3ae2c6 = _0xe384b8.children[2].innerText.split("\n"), _0x3ae2c6 = [_0x3ae2c6[0].replace("备货单号：", "")], _0x3ae2c6[0].slice(0, 2) !== "WB" && (_0x3ae2c6 = _0xe384b8.children[4].innerText.split("\n"), _0x3ae2c6 = [_0x3ae2c6[0].replace("备货单号：", "")])) : (_0x3ae2c6 = _0xe384b8.children[1].innerText.split("\n"), _0x3ae2c6[0].slice(0, 2) !== "WB" && (_0x3ae2c6 = _0xe384b8.children[2].innerText.split("\n"), _0x3ae2c6 = [_0x3ae2c6[0].replace("备货单号：", "")], _0x3ae2c6[0].slice(0, 2) !== "WB" && (_0x3ae2c6 = _0xe384b8.children[4].innerText.split("\n"), _0x3ae2c6 = [_0x3ae2c6[0].replace("备货单号：", "")])));
    _0x296a9a.splice(0, _0x296a9a.length, ..._0x3ae2c6);
  }
}
(function _0x3703f9(_0x516d83, _0x50a63d, _0x350cc2, _0x271810, _0x2682b4, _0x53e8bd = {}, _0x43f35b) {
  let _0x330842 = {};
  _0x330842[_0x271810[0]] = _0x53e8bd.t || this;
  _0x330842[_0x271810[1]] = _0x43f35b;
  if (_0x53e8bd.n) _0x330842[_0x53e8bd.n] = _0x516d83[_0x53e8bd.f];
  _0x330842.__proto__ = _0x516d83;
  function _0x4c49b8(_0x5bc464, _0x5ea669) {
    if (!_0x5bc464 || _0x5ea669 == _0x271810[2]) return null;
    if (_0x5bc464.hasOwnProperty(_0x5ea669)) return _0x5bc464;
    return _0x4c49b8(Object.getPrototypeOf(_0x5bc464), _0x5ea669);
  }
  _0x53e8bd.e && (_0x330842[_0x271810[_0x2682b4[_0x50a63d + 1]]] = _0x53e8bd.e);
  while (_0x50a63d < _0x2682b4.length) {
    {
      let _0x1474a0,
        _0x9ad68f,
        _0x1e464e,
        _0x18d2e0,
        _0x16bbb9,
        _0xe97d14,
        _0x582f6a = _0x2682b4[_0x50a63d++];
      if (_0x582f6a == 22) {
        _0x1474a0 = _0x2682b4[_0x50a63d++];
        _0x1e464e = "";
        for (_0x9ad68f = 0; _0x9ad68f < _0x1474a0; _0x9ad68f++) {
          _0x1e464e += _0x350cc2.pop();
        }
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x1e464e);
      }
      if (_0x582f6a == undefined) throw new Error("当前指令不存在，请检查指令集!");
      if (_0x582f6a == 57) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = ~_0x1474a0;
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
      }
      if (33 < _0x582f6a && _0x582f6a < 57) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x9ad68f = _0x350cc2.pop();
          _0x582f6a == 41 && (_0x1e464e = _0x9ad68f & _0x1474a0);
          _0x582f6a == 34 && (_0x1e464e = _0x9ad68f instanceof _0x1474a0);
          _0x582f6a == 54 && (_0x1e464e = _0x9ad68f / _0x1474a0);
          if (_0x582f6a == 39) {
            _0x1e464e = _0x9ad68f | _0x1474a0;
          }
          _0x582f6a == 43 && (_0x1e464e = _0x9ad68f >= _0x1474a0);
          _0x582f6a == 51 && (_0x1e464e = _0x9ad68f + _0x1474a0);
          _0x582f6a == 56 && (_0x1e464e = _0x9ad68f ^ _0x1474a0);
          _0x582f6a == 48 && (_0x1e464e = _0x9ad68f !== _0x1474a0);
          _0x582f6a == 37 && (_0x1e464e = _0x9ad68f >> _0x1474a0);
          _0x582f6a == 53 && (_0x1e464e = _0x9ad68f * _0x1474a0);
          _0x582f6a == 44 && (_0x1e464e = _0x9ad68f <= _0x1474a0);
          _0x582f6a == 52 && (_0x1e464e = _0x9ad68f - _0x1474a0);
          _0x582f6a == 47 && (_0x1e464e = _0x9ad68f === _0x1474a0);
          _0x582f6a == 46 && (_0x1e464e = _0x9ad68f != _0x1474a0);
          _0x582f6a == 36 && (_0x1e464e = _0x9ad68f >>> _0x1474a0);
          _0x582f6a == 50 && (_0x1e464e = _0x9ad68f > _0x1474a0);
          _0x582f6a == 42 && (_0x1e464e = _0x9ad68f && _0x1474a0);
          _0x582f6a == 45 && (_0x1e464e = _0x9ad68f == _0x1474a0);
          _0x582f6a == 49 && (_0x1e464e = _0x9ad68f < _0x1474a0);
          _0x582f6a == 40 && (_0x1e464e = _0x9ad68f || _0x1474a0);
          _0x582f6a == 38 && (_0x1e464e = _0x9ad68f << _0x1474a0);
          _0x582f6a == 55 && (_0x1e464e = _0x9ad68f % _0x1474a0);
          if (_0x582f6a == 35) {
            _0x1e464e = _0x9ad68f in _0x1474a0;
          }
          _0x18d2e0 = _0x2682b4[_0x50a63d++];
          if (_0x18d2e0) _0x350cc2.push(_0x1e464e);
        }
      }
      if (_0x582f6a == 32) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x9ad68f = void _0x1474a0;
          _0xe97d14 = _0x2682b4[_0x50a63d++];
          if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
        }
      }
      if (_0x582f6a == 14) {
        _0x1474a0 = _0x2682b4[_0x50a63d++];
        _0x9ad68f = _0x3703f9(_0x330842, _0x50a63d, _0x350cc2, _0x271810, _0x2682b4, {
          "t": _0x330842[_0x271810[0]]
        });
        if (_0x9ad68f === undefined) _0x50a63d = _0x1474a0;else {
          {
            if (_0x53e8bd.r) return _0x350cc2.pop();
            return _0x9ad68f;
          }
        }
      }
      if (_0x582f6a == 58) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = !_0x1474a0;
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
      }
      _0x582f6a == 21 && _0x350cc2.push("" + _0x350cc2.pop());
      if (_0x582f6a == 17) {
        {
          _0x1474a0 = _0x2682b4[_0x50a63d++];
          _0x9ad68f = _0x350cc2.pop();
          for (_0x1e464e = 0; _0x1e464e < _0x1474a0; _0x1e464e++) _0x350cc2.pop();
          _0xe97d14 = _0x2682b4[_0x50a63d++];
          if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
        }
      }
      if (_0x582f6a == 1) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = _0x350cc2.pop();
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x9ad68f[_0x1474a0]);
      }
      if (_0x582f6a == 19) {
        _0x1e464e = _0x2682b4[_0x50a63d++];
        _0x18d2e0 = _0x2682b4[_0x50a63d++];
        _0x16bbb9 = _0x2682b4[_0x50a63d++];
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        try {
          _0x9ad68f = _0x3703f9(_0x330842, _0x18d2e0, _0x350cc2, _0x271810, _0x2682b4, {
            "t": _0x330842[_0x271810[0]]
          });
          if (_0x9ad68f > 0) {
            {
              if (_0x53e8bd.r) return _0x350cc2.pop();
              return _0x9ad68f;
            }
          }
        } catch (_0x1bf501) {
          _0x9ad68f = _0x3703f9(_0x330842, _0x16bbb9, _0x350cc2, _0x271810, _0x2682b4, {
            "t": _0x330842[_0x271810[0]],
            "e": _0x1bf501
          });
          if (_0x9ad68f > 0) {
            {
              if (_0x53e8bd.r) return _0x350cc2.pop();
              return _0x9ad68f;
            }
          }
        } finally {
          {
            _0x9ad68f = _0x3703f9(_0x330842, _0xe97d14, _0x350cc2, _0x271810, _0x2682b4, {
              "t": _0x330842[_0x271810[0]]
            });
            if (_0x9ad68f > 0) {
              {
                if (_0x53e8bd.r) return _0x350cc2.pop();
                return _0x9ad68f;
              }
            }
          }
        }
        _0x50a63d = _0x1e464e;
      }
      _0x582f6a == 23 && (_0x1474a0 = _0x350cc2.pop(), _0x9ad68f = _0x350cc2.pop(), _0x18d2e0 = new RegExp(_0x9ad68f, _0x1474a0), _0x350cc2.push(_0x18d2e0));
      _0x582f6a == 13 && _0x350cc2.push(window);
      if (_0x582f6a == 31) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = _0x350cc2.pop();
        _0x1e464e = _0x2682b4[_0x50a63d++];
        _0x43f35b = [];
        for (_0x18d2e0 = 0; _0x18d2e0 < _0x1e464e; _0x18d2e0++) _0x43f35b.unshift(_0x350cc2.pop());
        _0x16bbb9 = new _0x9ad68f[_0x1474a0](..._0x43f35b);
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x16bbb9);
      }
      if (_0x582f6a == 30) {
        {
          _0x1474a0 = _0x2682b4[_0x50a63d++];
          _0x9ad68f = [];
          for (_0x1e464e = 0; _0x1e464e < _0x1474a0; _0x1e464e++) {
            _0x18d2e0 = _0x350cc2.pop();
            _0x9ad68f.unshift(_0x18d2e0);
          }
          _0xe97d14 = _0x2682b4[_0x50a63d++];
          if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
        }
      }
      if (_0x582f6a == 25) {
        {
          _0x1474a0 = _0x2682b4[_0x50a63d++];
          _0x9ad68f = _0x350cc2.pop();
          _0x1e464e = _0x350cc2.pop();
          _0x18d2e0 = _0x4c49b8(_0x1e464e, _0x9ad68f) || _0x1e464e;
          _0x16bbb9 = !_0x1474a0 ? _0x18d2e0[_0x9ad68f]++ : ++_0x18d2e0[_0x9ad68f];
          _0xe97d14 = _0x2682b4[_0x50a63d++];
          if (_0xe97d14) _0x350cc2.push(_0x16bbb9);
        }
      }
      if (_0x582f6a == 24) debugger;
      if (_0x582f6a == 26) {
        _0x1474a0 = _0x2682b4[_0x50a63d++];
        _0x9ad68f = _0x350cc2.pop();
        _0x1e464e = _0x350cc2.pop();
        _0x18d2e0 = _0x4c49b8(_0x1e464e, _0x9ad68f) || _0x1e464e;
        _0x16bbb9 = !_0x1474a0 ? _0x18d2e0[_0x9ad68f]-- : --_0x18d2e0[_0x9ad68f];
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x16bbb9);
      }
      if (_0x582f6a == 33) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = _0x350cc2.pop();
        _0x1e464e = delete _0x9ad68f[_0x1474a0];
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x1e464e);
      }
      if (_0x582f6a == 10) {
        {
          _0x1474a0 = _0x2682b4[_0x50a63d++];
          if (!_0x43f35b) _0x43f35b = [].concat(_0x350cc2);
          for (_0x9ad68f = _0x1474a0; _0x9ad68f >= 0; _0x9ad68f--) {
            _0x1e464e = _0x350cc2.pop();
            _0x330842[_0x1e464e] = _0x43f35b[_0x9ad68f];
          }
        }
      }
      _0x582f6a == 28 && _0x350cc2.push({});
      if (_0x582f6a == 18) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x1474a0 = Number(_0x1474a0);
          if (_0x1474a0 == NaN) _0x1474a0 = -1;
          _0x350cc2.push(_0x1474a0);
        }
      }
      _0x582f6a == 4 && (_0x1474a0 = _0x2682b4[_0x50a63d++], _0x350cc2.push(_0x271810[_0x1474a0]));
      _0x582f6a == 3 && (_0x1474a0 = _0x2682b4[_0x50a63d++], _0x9ad68f = _0x271810[_0x1474a0], _0x330842[_0x9ad68f] = undefined);
      if (_0x582f6a == 27) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = typeof _0x1474a0;
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x9ad68f);
      }
      _0x582f6a == 12 && _0x350cc2.push(_0x330842);
      _0x582f6a == 6 && (_0x1474a0 = _0x2682b4[_0x50a63d++], _0x50a63d = _0x1474a0);
      if (_0x582f6a == 2) {
        {
          _0x1474a0 = _0x2682b4[_0x50a63d++];
          _0x9ad68f = _0x350cc2.pop();
          _0x1e464e = _0x350cc2.pop();
          _0x43f35b = [];
          for (_0x18d2e0 = 0; _0x18d2e0 < _0x1474a0; _0x18d2e0++) _0x43f35b.unshift(_0x350cc2.pop());
          if (_0x1e464e === 0) _0x16bbb9 = _0x9ad68f.apply(_0x330842, _0x43f35b);else {
            _0x16bbb9 = _0x1e464e[_0x9ad68f].apply(_0x1e464e, _0x43f35b);
          }
          _0xe97d14 = _0x2682b4[_0x50a63d++];
          if (_0xe97d14) _0x350cc2.push(_0x16bbb9);
        }
      }
      _0x582f6a == 9 && (_0x1474a0 = _0x350cc2.pop(), _0x9ad68f = _0x2682b4[_0x50a63d++], _0x1e464e = _0x2682b4[_0x50a63d++], _0x18d2e0 = _0x350cc2[_0x350cc2.length - 1], _0x16bbb9 = function () {
        return _0x3703f9(_0x330842, _0x9ad68f, _0x350cc2, _0x271810, _0x2682b4, {
          "t": this,
          "n": _0x1474a0,
          "f": _0x1474a0 || _0x18d2e0,
          "r": 1
        }, arguments);
      }, _0x1e464e ? _0x350cc2.push(_0x16bbb9) : _0x330842[_0x1474a0] = _0x16bbb9);
      if (_0x582f6a == 7) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x9ad68f = _0x2682b4[_0x50a63d++];
          if (!_0x1474a0) _0x50a63d = _0x9ad68f;
        }
      }
      if (_0x582f6a == 11) {
        if (_0x53e8bd.r) {
          return _0x350cc2.pop();
        }
        return _0x2682b4[_0x50a63d++];
      }
      if (_0x582f6a == 29) {
        _0x1474a0 = _0x350cc2.pop();
        _0x9ad68f = _0x350cc2.pop();
        _0x1e464e = _0x350cc2.pop();
        _0x1e464e[_0x9ad68f] = _0x1474a0;
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x1e464e);
      }
      if (_0x582f6a == 20) throw _0x350cc2.pop();
      if (_0x582f6a == 8) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x9ad68f = _0x350cc2.pop();
          _0x1e464e = _0x2682b4[_0x50a63d++];
          if (_0x9ad68f == -1) _0x9ad68f = _0x1e464e;
          _0x9ad68f = _0x1474a0[_0x9ad68f];
          _0x50a63d = _0x9ad68f;
        }
      }
      if (_0x582f6a == 5) {
        _0x1474a0 = _0x271810[_0x2682b4[_0x50a63d++]];
        _0x9ad68f = _0x330842;
        _0x1e464e = _0x9ad68f[_0x1474a0];
        _0xe97d14 = _0x2682b4[_0x50a63d++];
        if (_0xe97d14) _0x350cc2.push(_0x1e464e);
      }
      if (_0x582f6a == 16) {
        return;
      }
      if (_0x582f6a == 15) {
        _0x1474a0 = _0x2682b4[_0x50a63d++];
        _0x9ad68f = _0x3703f9(_0x330842, _0x50a63d, _0x350cc2, _0x271810, _0x2682b4, {
          "t": _0x330842[_0x271810[0]]
        });
        if (!_0x9ad68f) _0x50a63d = _0x1474a0;else {
          {
            if (_0x9ad68f === 1) return;else {
              if (_0x53e8bd.r) {
                return _0x350cc2.pop();
              }
              return _0x9ad68f;
            }
          }
        }
      }
      if (_0x582f6a == 0) {
        {
          _0x1474a0 = _0x350cc2.pop();
          _0x9ad68f = _0x350cc2.pop();
          _0x1e464e = _0x350cc2.pop();
          _0x16bbb9 = _0x2682b4[_0x50a63d++];
          _0x18d2e0 = _0x4c49b8(_0x9ad68f, _0x1474a0) || _0x9ad68f;
          _0x18d2e0[_0x1474a0] = _0x1e464e;
          if (_0x16bbb9) _0x350cc2.push(_0x1e464e);
        }
      }
    }
  }
})(typeof window !== "undefined" ? window : (window = global, window), 0, [], ["@faceless", "arguments", "__proto__", 0, "arrayBuffer", "hashBuffer", "hashArray", "Uint8Array", "Array", "from", "hashHex", "", "byte", 2, "0", 16, "toString", "padStart", "map", "join", "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178", "codePhone", "chrome", "storage", "local", "set", "SHA-256", "crypto", "subtle", "digest", "then", "response", "img/code.jpg", "runtime", "getURL", "fetch", "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4", "web/img/logo.png"], [4, 3, 9, 7, 1, 6, 176, 4, 4, 10, 0, 4, 3, 9, 18, 1, 6, 151, 4, 5, 10, 0, 3, 6, 5, 5, 1, 12, 4, 7, 31, 1, 1, 12, 4, 8, 1, 1, 4, 9, 2, 1, 1, 12, 4, 6, 0, 0, 3, 10, 4, 11, 4, 3, 9, 59, 1, 6, 87, 4, 12, 10, 0, 4, 13, 4, 14, 4, 15, 12, 4, 12, 1, 1, 4, 16, 2, 1, 1, 4, 17, 2, 2, 1, 11, 2, 16, 12, 4, 6, 1, 1, 4, 18, 2, 1, 1, 4, 19, 2, 1, 1, 12, 4, 10, 0, 0, 5, 10, 1, 4, 20, 45, 1, 7, 120, 4, 11, 6, 150, 28, 4, 21, 4, 11, 4, 11, 30, 2, 1, 29, 1, 12, 4, 22, 1, 1, 4, 23, 1, 1, 4, 24, 1, 1, 4, 25, 2, 1, 1, 16, 4, 26, 5, 4, 1, 12, 4, 27, 1, 1, 4, 28, 1, 1, 4, 29, 2, 2, 1, 4, 30, 2, 1, 0, 16, 4, 3, 9, 183, 1, 6, 200, 4, 31, 10, 0, 12, 4, 31, 1, 1, 4, 4, 2, 0, 1, 11, 2, 16, 4, 32, 12, 4, 22, 1, 1, 4, 33, 1, 1, 4, 34, 2, 1, 1, 12, 4, 35, 2, 1, 1, 4, 30, 2, 1, 1, 4, 30, 2, 1, 0, 4, 3, 9, 239, 1, 6, 408, 4, 4, 10, 0, 4, 3, 9, 250, 1, 6, 383, 4, 5, 10, 0, 3, 6, 5, 5, 1, 12, 4, 7, 31, 1, 1, 12, 4, 8, 1, 1, 4, 9, 2, 1, 1, 12, 4, 6, 0, 0, 3, 10, 4, 11, 4, 3, 9, 291, 1, 6, 319, 4, 12, 10, 0, 4, 13, 4, 14, 4, 15, 12, 4, 12, 1, 1, 4, 16, 2, 1, 1, 4, 17, 2, 2, 1, 11, 2, 16, 12, 4, 6, 1, 1, 4, 18, 2, 1, 1, 4, 19, 2, 1, 1, 12, 4, 10, 0, 0, 5, 10, 1, 4, 36, 45, 1, 7, 352, 4, 11, 6, 382, 28, 4, 21, 4, 11, 4, 11, 30, 2, 1, 29, 1, 12, 4, 22, 1, 1, 4, 23, 1, 1, 4, 24, 1, 1, 4, 25, 2, 1, 1, 16, 4, 26, 5, 4, 1, 12, 4, 27, 1, 1, 4, 28, 1, 1, 4, 29, 2, 2, 1, 4, 30, 2, 1, 0, 16, 4, 3, 9, 415, 1, 6, 432, 4, 31, 10, 0, 12, 4, 31, 1, 1, 4, 4, 2, 0, 1, 11, 2, 16, 4, 37, 12, 4, 22, 1, 1, 4, 33, 1, 1, 4, 34, 2, 1, 1, 12, 4, 35, 2, 1, 1, 4, 30, 2, 1, 1, 4, 30, 2, 1, 0]);