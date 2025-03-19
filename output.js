//Wed Mar 19 2025 07:15:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let oldProductSkcIdList = [];
let oldProductSkcIdListDatas = [];
let getListWarehouseData = {};
var fanyi = "";
var myMessage = "";
var excludeInformation = [];
var windowRegex = "";
var videoDataUpInfo = {
  ok: 0
};
let sizeGuide = {};
let startCheckEuropean = true;
let downloadFileUrls = [];
let CollectionShopInfo = {};
chrome.runtime._0x1354f4({
  type: "cloudInit"
}, _0x2fbc23 => {
  excludeInformation = _0x2fbc23.data[0];
  windowRegex = _0x2fbc23.data[1];
});
window.addEventListener("sentListWarehouseData", function (_0x3e36c7) {
  var _0x28e72f = _0x3e36c7.detail;
  if (_0x28e72f.type === "listWarehouseData") {
    {
      var _0x588742 = typeof _0x28e72f.data === "string" ? JSON.parse(_0x28e72f.data) : _0x28e72f.data;
      Object.keys(_0x588742).length != 0 && (getListWarehouseData = _0x588742);
    }
  }
});
function exportToExcelToday(_0x474507) {
  const _0x152d9f = XLSX._0x4fc213._0x3845d1();
  const _0x12a582 = [["备货单号", "SKC", "产品名称", "产品SKU", "SKU名称", "发货件数", "供货价", "合计"]];
  const _0x4a2452 = [];
  let _0x1d2407 = 1;
  _0x474507.forEach(_0x2e724b => {
    const _0x42e39a = _0x1d2407;
    _0x2e724b[3].forEach(_0x3682a3 => {
      _0x12a582.push([_0x2e724b[0], _0x2e724b[1], _0x2e724b[2], _0x3682a3[0], _0x3682a3[1], _0x3682a3[2], _0x3682a3[3], _0x3682a3[4]]);
      _0x1d2407++;
    });
    const _0x26aff5 = _0x1d2407 - 1;
    if (_0x42e39a !== _0x26aff5) {
      {
        _0x4a2452.push({
          s: {
            r: _0x42e39a,
            c: 0
          },
          e: {
            r: _0x26aff5,
            c: 0
          }
        });
        _0x4a2452.push({
          s: {
            r: _0x42e39a,
            c: 1
          },
          e: {
            r: _0x26aff5,
            c: 1
          }
        });
        _0x4a2452.push({
          s: {
            r: _0x42e39a,
            c: 2
          },
          e: {
            r: _0x26aff5,
            c: 2
          }
        });
      }
    }
  });
  const _0x2942b6 = XLSX._0x4fc213._0x58390a(_0x12a582);
  _0x2942b6._0x91aa7d = _0x4a2452;
  _0x2942b6._0xc3dfe8 = [{
    _0x375de4: 20
  }, {
    _0x375de4: 15
  }, {
    _0x375de4: 50
  }, {
    _0x375de4: 15
  }, {
    _0x375de4: 20
  }, {
    _0x375de4: 10
  }, {
    _0x375de4: 10
  }, {
    _0x375de4: 10
  }];
  const _0x141ebb = {
    font: {
      bold: true,
      color: {
        _0x1809b1: "FFFFFF"
      }
    },
    fill: {
      fgColor: {
        _0x1809b1: "4F81BD"
      }
    },
    _0x384c76: {
      _0x31dbd1: "center",
      vertical: "center"
    }
  };
  const _0x3e3575 = {
    _0x384c76: {
      _0x31dbd1: "left",
      vertical: "center"
    }
  };
  for (let _0x4d8538 = 0; _0x4d8538 < _0x12a582[0].length; _0x4d8538++) {
    {
      const _0x428038 = XLSX._0x4fc213._0x4d9e9a({
        r: 0,
        c: _0x4d8538
      });
      if (!_0x2942b6[_0x428038]) {
        _0x2942b6[_0x428038] = {};
      }
      _0x2942b6[_0x428038].s = _0x141ebb;
    }
  }
  for (let _0x1582ae = 1; _0x1582ae < _0x12a582.length; _0x1582ae++) {
    {
      for (let _0x46adff = 0; _0x46adff < _0x12a582[_0x1582ae].length; _0x46adff++) {
        const _0x27af84 = XLSX._0x4fc213._0x4d9e9a({
          r: _0x1582ae,
          c: _0x46adff
        });
        if (!_0x2942b6[_0x27af84]) {
          _0x2942b6[_0x27af84] = {};
        }
        _0x2942b6[_0x27af84].s = _0x3e3575;
      }
    }
  }
  XLSX._0x4fc213._0x494550(_0x152d9f, _0x2942b6, "今日发货数据");
  XLSX._0x537a10(_0x152d9f, "今日发货数据.xlsx");
}
async function fetchDataTodyOut(_0x308db4) {
  try {
    const _0x2a9f11 = await new Promise((_0x347a56, _0x4e5de6) => {
      chrome.runtime._0x1354f4({
        type: "getTodySendgoods",
        mallid: _0x308db4
      }, _0x62cfb4 => {
        if (chrome.runtime._0x2f07b0) {
          {
            _0x4e5de6(chrome.runtime._0x2f07b0);
          }
        } else {
          _0x347a56(_0x62cfb4);
        }
      });
    });
    return _0x2a9f11;
  } catch (_0x205b35) {
    throw _0x205b35;
  }
}
async function fetchSalesManagementList(_0x213d5f) {
  if (_0x213d5f === "") {
    {
      return 0;
    }
  }
  const _0x218514 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse";
  const _0xba9091 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x213d5f,
    "Content-Type": "application/json"
  };
  const _0x59cf9a = async (_0x348305, _0x132adc) => {
    const _0x5f281e = JSON.stringify({
      _0x1bcb8e: _0x348305,
      _0x40a2cd: _0x132adc,
      _0x488b4d: 0,
      _0x48c90d: [10, 11],
      _0x5a4044: 7,
      _0x3036e6: 0,
      _0x3d9d42: 0,
      _0x5a6a56: 1
    });
    const _0x14572 = {
      method: "POST",
      headers: _0xba9091,
      body: _0x5f281e,
      redirect: "follow"
    };
    while (true) {
      try {
        {
          const _0x50934e = await fetch(_0x218514, _0x14572);
          const _0x3f107f = await _0x50934e.json();
          if (_0x3f107f.success === false || _0x3f107f.errorCode === 4000004) {
            await new Promise(_0xd4e989 => setTimeout(_0xd4e989, 1500));
          } else {
            return _0x3f107f.result;
          }
        }
      } catch (_0x332759) {
        {
          throw _0x332759;
        }
      }
    }
  };
  try {
    const _0x29e846 = await _0x59cf9a(1, 10);
    if (_0x29e846._0x3f65c3.length === 0) {
      return 0;
    }
    const _0x457b74 = _0x29e846.total;
    const _0x3388dc = Math.ceil(_0x457b74 / 20);
    const _0x1c80b6 = [];
    for (let _0x433837 = 1; _0x433837 <= _0x3388dc; _0x433837++) {
      _0x1c80b6.push(_0x59cf9a(_0x433837, 20));
    }
    const _0x4dfc9f = await Promise.all(_0x1c80b6);
    const _0x45b75b = _0x4dfc9f.flatMap(_0x297c27 => _0x297c27._0x3f65c3);
    for (var _0x4f513e of _0x45b75b) {
      parseFloat(_0x4f513e._0x47d32b._0x30a18e._0x356864) !== 0 && submitFeedback(_0x213d5f, _0x4f513e._0x73bc4);
    }
  } catch (_0x2603f2) {
    return 0;
  }
}
async function submitFeedback(_0x4cb847, _0x1299d0) {
  const _0x18aa8f = new Headers({
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x4cb847,
    "Content-Type": "application/json"
  });
  const _0xb40c3f = JSON.stringify({
    _0x537261: 2,
    _0x1c01c6: 2,
    _0x195c8d: "商品已入库多天，麻烦尽快加站开售",
    _0x288cda: 1,
    _0x52dfa8: [_0x1299d0],
    _0x44c54b: 26
  });
  const _0x1e91a9 = {
    method: "POST",
    headers: _0x18aa8f,
    body: _0xb40c3f,
    redirect: "follow"
  };
  try {
    const _0x5d9cdb = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x1e91a9);
    const _0x60d76a = await _0x5d9cdb.text();
  } catch (_0x5a9fb3) {}
}
async function postImageReview(_0x2a3af9, _0x150801) {
  const _0x1dc089 = new Headers();
  _0x1dc089.append("accept", "*/*");
  _0x1dc089.append("mallid", _0x2a3af9);
  _0x1dc089.append("Content-Type", "application/json");
  const _0x3b460a = JSON.stringify({
    _0x537261: 2,
    _0x288cda: 1,
    _0x52dfa8: [_0x150801],
    _0x44c54b: 29,
    _0x195c8d: "上新好久了，因图审还没过。麻烦尽快催一下图片审核，加速上新"
  });
  const _0x5de015 = {
    method: "POST",
    headers: _0x1dc089,
    body: _0x3b460a,
    redirect: "follow"
  };
  try {
    {
      const _0x4988bd = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x5de015);
      await new Promise(_0x1cd84c => setTimeout(_0x1cd84c, 500));
    }
  } catch (_0x14e15e) {}
}
async function fetchPhotoOldList(_0x350198) {
  if (_0x350198 === "") {
    {
      return 0;
    }
  }
  const _0x5e5fd5 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse";
  const _0x3ab446 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x350198,
    "Content-Type": "application/json"
  };
  const _0x4f5723 = async (_0x5f1f39, _0x1bfb0e) => {
    {
      const _0x207d9a = JSON.stringify({
        _0x1bcb8e: _0x5f1f39,
        _0x40a2cd: _0x1bfb0e,
        _0x488b4d: 0,
        _0x490f58: [1],
        _0x5a4044: 7
      });
      const _0xe5299d = {
        method: "POST",
        headers: _0x3ab446,
        body: _0x207d9a,
        redirect: "follow"
      };
      while (true) {
        {
          try {
            const _0x583909 = await fetch(_0x5e5fd5, _0xe5299d);
            const _0x4e3adc = await _0x583909.json();
            if (_0x4e3adc.success === false) {
              await new Promise(_0x554f48 => setTimeout(_0x554f48, 1000));
            } else {
              {
                await new Promise(_0x4bc2c4 => setTimeout(_0x4bc2c4, 500));
                return _0x4e3adc.result;
              }
            }
          } catch (_0x115a8d) {
            {
              throw _0x115a8d;
            }
          }
        }
      }
    }
  };
  try {
    const _0x30d090 = await _0x4f5723(1, 1);
    if (_0x30d090._0x3f65c3.length === 0) {
      {
        return 0;
      }
    }
    const _0x4da5ae = _0x30d090.total;
    const _0x2877ec = Math.ceil(_0x4da5ae / 20);
    const _0x47bf7b = [];
    for (let _0x332f93 = 1; _0x332f93 <= _0x2877ec; _0x332f93++) {
      _0x47bf7b.push(_0x4f5723(_0x332f93, 20));
    }
    const _0x1abd4a = await Promise.all(_0x47bf7b);
    const _0x43f5a6 = _0x1abd4a.flatMap(_0x339000 => _0x339000._0x3f65c3);
    for (var _0xab7b4e of _0x43f5a6) {
      postImageReview(_0x350198, _0xab7b4e._0x73bc4);
    }
  } catch (_0x5c3990) {
    return 0;
  }
}
async function refPriceAdj(_0x5dbbe8, _0xd4ef7d, _0x1d58ed = 0) {
  const _0x148fb5 = new Headers();
  _0x148fb5.append("accept", "*/*");
  _0x148fb5.append("mallid", _0x5dbbe8);
  _0x148fb5.append("Content-Type", "application/json");
  let _0x47e07f;
  if (_0xd4ef7d.length == 1) {
    _0x47e07f = JSON.stringify({
      _0x4143f3: _0xd4ef7d[0],
      result: 2,
      reason: "做不了"
    });
  } else {
    if (_0xd4ef7d.length > 1) {
      const _0x1ec035 = Object.fromEntries(_0xd4ef7d.map(_0x29778d => [_0x29778d, 2]));
      _0x47e07f = JSON.stringify({
        _0x821ab7: _0x1ec035,
        _0x4143f3: _0xd4ef7d[0],
        result: 2
      });
    }
  }
  const _0x178238 = {
    method: "POST",
    headers: _0x148fb5,
    body: _0x47e07f,
    redirect: "follow"
  };
  const _0x44e9f1 = 3;
  let _0x2eb102 = 0;
  if (_0x1d58ed == 0) {
    var _0x55e21d = "https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price/purchase-adjust/review";
  } else {
    {
      var _0x55e21d = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price/purchase-adjust/review";
    }
  }
  while (_0x2eb102 < _0x44e9f1) {
    try {
      {
        const _0x4b7263 = await fetch(_0x55e21d, _0x178238);
        const _0x5506bf = await _0x4b7263.json();
        if (_0x5506bf.success == false) {
          {
            if (_0x5506bf._0x552d41 != "核价单状态已变更, 请刷新页面重试") {
              {
                throw new Error("请求失败");
              }
            }
          }
        }
        return;
      }
    } catch (_0xfe4c3e) {
      _0x2eb102++;
      _0x2eb102 < _0x44e9f1 && (await new Promise(_0x452a9a => setTimeout(_0x452a9a, 1500)));
    }
  }
}
async function queryRefPriceAdj(_0x235d8f, _0x22c214 = 1) {
  if (_0x235d8f === "") {
    return 0;
  }
  var _0x33adf7 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query";
  const _0x213a94 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x235d8f,
    "Content-Type": "application/json"
  };
  var _0x92229b = 0;
  const _0x3c08e6 = async (_0x16f803, _0x16293b) => {
    {
      if (_0x22c214 == 1) {
        {
          var _0x419ff7 = JSON.stringify({
            _0x34d1f4: {
              _0x40a2cd: _0x16293b,
              _0x1bcb8e: _0x16f803
            },
            status: 1
          });
        }
      } else {
        {
          var _0x419ff7 = JSON.stringify({
            _0x34d1f4: {
              _0x40a2cd: _0x16293b,
              _0x1bcb8e: _0x16f803
            },
            _0x5358c1: 0,
            status: 1
          });
        }
      }
      const _0xe4a865 = {
        method: "POST",
        headers: _0x213a94,
        body: _0x419ff7,
        redirect: "follow"
      };
      var _0x29eb48 = 10;
      var _0x5f50bb = 0;
      while (_0x29eb48 > _0x5f50bb) {
        try {
          {
            const _0x136407 = await fetch(_0x33adf7, _0xe4a865);
            const _0x1f6694 = await _0x136407.json();
            if (_0x1f6694.success === false) {
              if (_0x1f6694._0x552d41.includes("半托管")) {
                {
                  _0x33adf7 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price-adjust/page-query";
                  _0x92229b = 1;
                }
              }
              _0x5f50bb = _0x5f50bb + 1;
              await new Promise(_0xac2f8a => setTimeout(_0xac2f8a, 1000));
            } else {
              if (_0x1f6694.result.list) {
                return _0x1f6694.result;
              } else {
                {
                  _0x1f6694.result.list = [];
                  return _0x1f6694.result;
                }
              }
            }
          }
        } catch (_0x2add7a) {
          {
            throw _0x2add7a;
          }
        }
      }
    }
  };
  try {
    const _0x348bd7 = await _0x3c08e6(1, 1);
    if (_0x348bd7.list.length === 0) {
      return 0;
    }
    const _0x18d5ab = _0x348bd7.total;
    const _0xcf3d = Math.ceil(_0x18d5ab / 40) + 1;
    var _0x2c7037 = [];
    const _0x2796f0 = 1;
    for (let _0x15d5ac = 1; _0x15d5ac <= _0xcf3d; _0x15d5ac++) {
      _0x2c7037 = [];
      const _0x570948 = _0x3c08e6(1, 40).then(_0x3eaee7 => _0x2c7037.push(_0x3eaee7));
      if (_0x2c7037.length % _0x2796f0 === 0 || _0x15d5ac === _0xcf3d) {
        {
          await _0x570948;
          const _0x210962 = _0x2c7037.flatMap(_0x7e64d1 => _0x7e64d1.list);
          const _0xa84ae2 = _0x210962.reduce((_0x4eedc9, _0x37a7bb) => {
            _0x37a7bb && (!_0x4eedc9[_0x37a7bb._0x332a23] && (_0x4eedc9[_0x37a7bb._0x332a23] = []), _0x4eedc9[_0x37a7bb._0x332a23].push([..._0x37a7bb._0x54cd61.map(_0x1a5c2b => _0x1a5c2b._0x116210).sort(), _0x37a7bb.id]));
            return _0x4eedc9;
          }, {});
          for (var _0x4fb0db of Object.values(_0xa84ae2)) {
            const _0x25bd5d = groupValues(_0x4fb0db);
            for (var _0x33d8a2 of _0x25bd5d) {
              const _0x37e427 = _0x33d8a2.map(_0x499aed => _0x499aed[_0x499aed.length - 1]).filter(_0x2d5985 => typeof _0x2d5985 === "number");
              await refPriceAdj(_0x235d8f, _0x37e427, _0x92229b);
            }
          }
        }
      }
    }
  } catch (_0x302e46) {
    console.log(_0x302e46);
    return 0;
  }
}
async function cancelCreation(_0x286cc5, _0x43be9e) {
  const _0xc35950 = new Headers();
  _0xc35950.append("accept", "*/*");
  _0xc35950.append("mallid", _0x286cc5);
  _0xc35950.append("Content-Type", "application/json");
  const _0x19c351 = JSON.stringify({
    _0x5069de: [_0x43be9e]
  });
  const _0x5b0ffa = {
    method: "POST",
    headers: _0xc35950,
    body: _0x19c351,
    redirect: "follow"
  };
  try {
    const _0x4ac6bf = await fetch("https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/batchCancelSubPurchaseOrder", _0x5b0ffa);
  } catch (_0x519d9f) {}
}
async function queryStockList(_0xedd81) {
  if (_0xedd81 === "") {
    return 0;
  }
  const _0x4ed964 = "https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/querySubOrderList";
  const _0x55cd6a = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0xedd81,
    "Content-Type": "application/json"
  };
  const _0x15826f = async (_0x1185bd, _0x5722aa) => {
    const _0x3f23f2 = JSON.stringify({
      _0x1bcb8e: _0x1185bd,
      _0x40a2cd: _0x5722aa,
      _0x36a59b: 0,
      _0x4b1aa3: false,
      _0x34af8a: [0],
      _0x104685: {
        _0x3c3d9c: "expectLatestDeliverTime",
        _0x276430: 0
      }
    });
    const _0x44a443 = {
      method: "POST",
      headers: _0x55cd6a,
      body: _0x3f23f2,
      redirect: "follow"
    };
    while (true) {
      try {
        {
          const _0x5004ae = await fetch(_0x4ed964, _0x44a443);
          const _0x39e107 = await _0x5004ae.json();
          if (_0x39e107.success === false || _0x39e107.errorCode === 4000004) {
            await new Promise(_0x41736a => setTimeout(_0x41736a, 1500));
          } else {
            return _0x39e107.result;
          }
        }
      } catch (_0x3d099b) {
        throw _0x3d099b;
      }
    }
  };
  try {
    const _0x467585 = await _0x15826f(1, 1);
    if (_0x467585._0x3ed7e9.length === 0) {
      return 0;
    }
    const _0x26b774 = _0x467585.total;
    const _0x53e634 = Math.ceil(_0x26b774 / 20);
    const _0x1da138 = [];
    for (let _0x453c29 = 1; _0x453c29 <= _0x53e634; _0x453c29++) {
      _0x1da138.push(_0x15826f(_0x453c29, 20));
    }
    const _0x86ed04 = await Promise.all(_0x1da138);
    var _0x288dd2 = _0x86ed04.flatMap(_0x33dc64 => _0x33dc64._0x3ed7e9);
    for (var _0x3e1d1f of _0x288dd2) {
      cancelCreation(_0xedd81, _0x3e1d1f._0x3597d9);
    }
  } catch (_0x437038) {
    {
      return 0;
    }
  }
}
async function submitFeedbackP(_0x9ce510, _0x2363ef) {
  const _0xad383 = new Headers();
  _0xad383.append("accept", "*/*");
  _0xad383.append("mallid", _0x9ce510);
  _0xad383.append("Content-Type", "application/json");
  const _0xb3a70e = JSON.stringify({
    _0x288cda: 2,
    _0x1c01c6: 2,
    _0x73bc4: _0x2363ef,
    _0x44c54b: 42,
    _0x195c8d: "该产品已经降价，前端售价异常，麻烦前端同步一下价格"
  });
  const _0x328309 = {
    method: "POST",
    headers: _0xad383,
    body: _0xb3a70e,
    redirect: "follow"
  };
  try {
    {
      const _0x3fdad7 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0x328309);
      const _0x2b1acc = await _0x3fdad7.text();
    }
  } catch (_0x4eb77f) {
    console.error(_0x4eb77f);
  }
}
async function syncPriceList(_0x27279c) {
  if (_0x27279c === "") {
    return 0;
  }
  const _0x4db5c4 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query";
  const _0x41b9cb = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x27279c,
    "Content-Type": "application/json"
  };
  const _0x987e45 = async (_0x59c0d4, _0x426d46) => {
    const _0x6ecac = JSON.stringify({
      _0x34d1f4: {
        _0x40a2cd: _0x426d46,
        _0x1bcb8e: _0x59c0d4
      },
      status: 2,
      _0x2270dc: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
      _0x19a713: new Date(new Date().setHours(23, 59, 59, 999)).getTime()
    });
    const _0x85b76d = {
      method: "POST",
      headers: _0x41b9cb,
      body: _0x6ecac,
      redirect: "follow"
    };
    while (true) {
      {
        try {
          const _0x18e26b = await fetch(_0x4db5c4, _0x85b76d);
          const _0x5684ca = await _0x18e26b.json();
          if (_0x5684ca.success === false) {
            await new Promise(_0x2ff4f8 => setTimeout(_0x2ff4f8, 500));
          } else {
            return _0x5684ca.result;
          }
        } catch (_0x976fe4) {
          throw _0x976fe4;
        }
      }
    }
  };
  try {
    {
      const _0x14b51a = await _0x987e45(1, 1);
      if (_0x14b51a.list.length === 0) {
        {
          return 0;
        }
      }
      const _0x30a799 = _0x14b51a.total;
      const _0x291d22 = Math.ceil(_0x30a799 / 20);
      const _0x27d59e = [];
      for (let _0x18589e = 1; _0x18589e <= _0x291d22; _0x18589e++) {
        _0x27d59e.push(_0x987e45(_0x18589e, 20));
      }
      const _0x5823a5 = await Promise.all(_0x27d59e);
      const _0x49ac9d = _0x5823a5.flatMap(_0x1daa62 => _0x1daa62.list);
      const _0x1e20c0 = _0x49ac9d.map(_0x5dec58 => _0x5dec58._0x332a23);
      const _0x35a90c = [...new Set(_0x1e20c0)];
      for (const _0x5af03a of _0x35a90c) {
        submitFeedbackP(_0x27279c, _0x5af03a);
      }
    }
  } catch (_0x3a676e) {
    {
      return 0;
    }
  }
}
async function submitJGSB(_0x5610fc, _0xc08418) {
  const _0x5a7ec2 = new Headers();
  _0x5a7ec2.append("accept", "*/*");
  _0x5a7ec2.append("mallid", _0x5610fc);
  _0x5a7ec2.append("Content-Type", "application/json");
  const _0xf5368f = JSON.stringify({
    _0x288cda: 2,
    _0x1a8847: _0xc08418,
    _0x44c54b: 34,
    _0x195c8d: "上新很久了，价格一直申报中，麻烦处理一下！"
  });
  const _0x15c55d = {
    method: "POST",
    headers: _0x5a7ec2,
    body: _0xf5368f,
    redirect: "follow"
  };
  try {
    const _0x15543e = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0x15c55d);
    const _0x2dce27 = await _0x15543e.text();
  } catch (_0xec2e54) {
    console.error(_0xec2e54);
  }
}
async function synchjPriceList(_0x14a5a5) {
  if (_0x14a5a5 === "") {
    return 0;
  }
  const _0x4fee96 = "https://seller.kuajingmaihuo.com/marvel-supplier/api/xmen/select/search";
  const _0x31c162 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x14a5a5,
    "Content-Type": "application/json"
  };
  const _0x36c9e9 = async (_0x43d1e5, _0x590cda) => {
    const _0x41d7c5 = JSON.stringify({
      _0x40a2cd: _0x590cda,
      _0x220ec6: _0x43d1e5,
      _0x1deb61: [0],
      _0xa5b61e: [7],
      _0x33b59d: []
    });
    const _0x26ee1 = {
      method: "POST",
      headers: _0x31c162,
      body: _0x41d7c5,
      redirect: "follow"
    };
    while (true) {
      try {
        {
          const _0x322a3f = await fetch(_0x4fee96, _0x26ee1);
          const _0x350214 = await _0x322a3f.json();
          if (_0x350214.success === false) {
            await new Promise(_0x5aabda => setTimeout(_0x5aabda, 500));
          } else {
            return _0x350214.result;
          }
        }
      } catch (_0x327b02) {
        {
          throw _0x327b02;
        }
      }
    }
  };
  try {
    const _0x21470a = await _0x36c9e9(1, 1);
    if (_0x21470a._0x22192f.length === 0) {
      return 0;
    }
    const _0x2a16a4 = _0x21470a.total;
    const _0x3b7d86 = Math.ceil(_0x2a16a4 / 20);
    const _0x5f1f89 = [];
    for (let _0x55071f = 1; _0x55071f <= _0x3b7d86; _0x55071f++) {
      _0x5f1f89.push(_0x36c9e9(_0x55071f, 20));
    }
    const _0x19a327 = await Promise.all(_0x5f1f89);
    const _0x591e73 = _0x19a327.flatMap(_0x522a5c => _0x522a5c._0x22192f);
    const _0x24265f = _0x591e73.map(_0x29b9c9 => _0x29b9c9._0x588d1e[0]._0x3c969b[0]._0x414c1e);
    const _0x36a3dc = [...new Set(_0x24265f)];
    for (const _0x238ca8 of _0x36a3dc) {
      submitJGSB(_0x14a5a5, _0x238ca8);
    }
  } catch (_0x28ee79) {
    {
      return 0;
    }
  }
}
var cssUrl = chrome.runtime._0x55f5ad("web/css/flatpickr.min.css");
var existingLink = document.querySelector("link[href=\"" + cssUrl + "\"]");
if (!existingLink) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssUrl;
  document.head.appendChild(link);
}
var pluginIdNode = document.createElement("div");
pluginIdNode.id = "pluginId";
pluginIdNode.setAttribute("data-id", chrome.runtime.id);
document.body.appendChild(pluginIdNode);
function loadScripts(_0x451906) {
  _0x451906.forEach(_0x23bd7d => {
    const _0x37b18d = document.createElement("script");
    _0x37b18d.setAttribute("src", chrome.runtime._0x55f5ad(_0x23bd7d));
    document.head.appendChild(_0x37b18d);
  });
}
loadScripts(["web/js/hxk.js"]);
loadScripts(["web/js/exceljs.min.js"]);
loadScripts(["web/js/exexportPhotoDataToExcel.js"]);
chrome.runtime._0x56f6dd.addListener(function (_0x552199, _0x26a821, _0x591f3d) {
  if (_0x552199.type === "webData") {
    {
      myMessage = typeof _0x552199.data === "string" ? JSON.parse(_0x552199.data) : _0x552199.data;
      _0x591f3d({
        status: "success"
      });
      return true;
    }
  } else {
    if (_0x552199.type === "baodanBoxaddSiteBg") {
      {
        createLoader();
        fetchData().then(_0x375ce2 => {
          fetchSalesManagementList(_0x375ce2).then(() => {
            removeLoader();
            _0x591f3d({
              status: "success"
            });
            showCustomAlert("入库商品已完成加站点反馈。");
          });
        });
        return true;
      }
    } else {
      if (_0x552199.type === "addPhotoSiteBg") {
        {
          createLoader();
          fetchData().then(_0x32c0cc => {
            fetchPhotoOldList(_0x32c0cc).then(() => {
              removeLoader();
              _0x591f3d({
                status: "success"
              });
              showCustomAlert("商品已完成图审申请。");
            });
          });
          return true;
        }
      } else {
        if (_0x552199.type === "cancelAllStockListBg") {
          createLoader();
          fetchData().then(_0xba8b1f => {
            queryStockList(_0xba8b1f).then(() => {
              removeLoader();
              _0x591f3d({
                status: "success"
              });
              showCustomAlert("已完成，请点击查询或刷新页面查看！");
            });
          });
          return true;
        } else {
          if (_0x552199.type === "applyPriceSyncBg") {
            createLoader();
            fetchData().then(_0x4e4dd6 => {
              syncPriceList(_0x4e4dd6).then(() => {
                removeLoader();
                _0x591f3d({
                  status: "success"
                });
                showCustomAlert("当天调价商品已完成同步调价申请");
              });
            });
            return true;
          } else {
            if (_0x552199.type === "urgePriceSyncBg") {
              {
                createLoader();
                fetchData().then(_0x4fc3b1 => {
                  synchjPriceList(_0x4fc3b1).then(() => {
                    removeLoader();
                    _0x591f3d({
                      status: "success"
                    });
                    showCustomAlert("价格申报中的商品已经成功反馈！");
                  });
                });
                return true;
              }
            } else {
              if (_0x552199.type === "refusePriceSyncAllBg") {
                createLoader();
                fetchData().then(_0x34bb69 => {
                  queryRefPriceAdj(_0x34bb69).then(() => {
                    {
                      removeLoader();
                      _0x591f3d({
                        status: "success"
                      });
                      showCustomAlert("所有待确认调价的商品，已全部拒绝！");
                    }
                  });
                });
                return true;
              } else {
                if (_0x552199.type === "refusePriceSyncDailyBg") {
                  createLoader();
                  fetchData().then(_0x5ebd9d => {
                    queryRefPriceAdj(_0x5ebd9d, 2).then(() => {
                      {
                        removeLoader();
                        _0x591f3d({
                          status: "success"
                        });
                        showCustomAlert("日常待确认调价的商品，已全部拒绝！");
                      }
                    });
                  });
                  return true;
                } else {
                  if (_0x552199.type === "exportShippedTodayBg") {
                    createLoader();
                    fetchData().then(_0x39bdc4 => {
                      fetchDataTodyOut(_0x39bdc4).then(_0x540c4f => {
                        var _0x224f08 = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0));
                        var _0x38cb49 = [];
                        for (var _0x8b7f31 = 0; _0x8b7f31 < _0x540c4f.length; _0x8b7f31++) {
                          var _0x1daa4d = [];
                          var _0x251396 = _0x540c4f[_0x8b7f31];
                          if (parseInt(_0x251396._0x5dd5d6._0x231f2a) >= _0x224f08) {
                            var _0x63b0c9 = _0x251396._0x3597d9;
                            var _0x5a5192 = _0x251396._0x73bc4;
                            var _0x26e3ff = _0x251396.productName;
                            for (var _0x4478f7 = 0; _0x4478f7 < _0x251396._0x312804.length; _0x4478f7++) {
                              var _0x1a8407 = _0x251396._0x312804[_0x4478f7]._0x1a8847;
                              var _0x5221d1 = _0x251396._0x312804[_0x4478f7].className;
                              var _0x20c49b = parseInt(_0x251396._0x312804[_0x4478f7]._0x39db9f) ? parseFloat(_0x251396._0x312804[_0x4478f7]._0x39db9f) : 0;
                              var _0x37ac95 = parseFloat(_0x251396._0x312804[_0x4478f7]._0x4c5756) ? parseFloat(_0x251396._0x312804[_0x4478f7]._0x4c5756) / 100 : 0;
                              var _0x35127d = _0x20c49b * _0x37ac95;
                              _0x1daa4d.push([_0x1a8407, _0x5221d1, _0x20c49b, _0x37ac95.toFixed(2), _0x35127d.toFixed(2)]);
                            }
                            _0x38cb49.push([_0x63b0c9, _0x5a5192, _0x26e3ff, _0x1daa4d]);
                          }
                        }
                        _0x591f3d({
                          status: "success"
                        });
                        removeLoader();
                        exportToExcelToday(_0x38cb49);
                      }).catch(_0x2a9f6d => {
                        removeLoader();
                        _0x591f3d({
                          status: "no"
                        });
                        showCustomAlert("导出数据不完整，请检查网络后重新尝试");
                      });
                    });
                    return true;
                  } else {
                    if (_0x552199.type === "exportShippedHistoryBg") {
                      var _0x2ac6cc = _0x552199._0x290b7d;
                      var _0x255d05 = _0x552199._0x1e2400;
                      createLoader();
                      getMallId().then(_0x42dfcf => {
                        chrome.runtime._0x1354f4({
                          type: "exportStockListHistory",
                          _0x4161b0: _0x42dfcf,
                          _0x290b7d: _0x2ac6cc,
                          _0x1e2400: _0x255d05
                        }).then(_0x4a049b => {
                          {
                            if (_0x4a049b) {
                              {
                                var _0x5b6654 = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                                exportPhotoDataToExcel(_0x4a049b, _0x5b6654, 1, _0x2ac6cc + "至" + _0x255d05 + "已发货备货单数据.xlsx");
                                _0x591f3d({
                                  status: "success"
                                });
                              }
                            } else {
                              removeLoader();
                              _0x591f3d({
                                status: "no"
                              });
                            }
                          }
                        });
                      });
                      return true;
                    } else {
                      if (_0x552199.type === "exportSalesHistoryAllBg") {
                        var _0x2ac6cc = _0x552199._0x290b7d;
                        var _0x255d05 = _0x552199._0x1e2400;
                        createLoader();
                        getMallId().then(_0x497090 => {
                          chrome.runtime._0x1354f4({
                            type: "exportSalesHistory",
                            _0x4161b0: _0x497090,
                            _0x290b7d: _0x2ac6cc,
                            _0x1e2400: _0x255d05
                          }).then(_0xd68f3b => {
                            var _0x2dc6d2 = _0xd68f3b._0x4d402d;
                            _0x2dc6d2 ? (removeLoader(), _0x2dc6d2.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x2ac6cc + "至" + _0x255d05 + "销量", "当前仓内可用库存"]), exportToExcel(_0xd68f3b._0x4d402d, _0x2ac6cc + "至" + _0x255d05 + "销售数据.xlsx"), _0x591f3d({
                              status: "success"
                            })) : (removeLoader(), _0x591f3d({
                              status: "no"
                            }));
                          });
                        });
                        return true;
                      } else {
                        if (_0x552199.type === "exportReturnDetailBg") {
                          var _0x2ac6cc = _0x552199._0x290b7d;
                          var _0x255d05 = _0x552199._0x1e2400;
                          createLoader();
                          getMallId().then(_0x3aa162 => {
                            chrome.runtime._0x1354f4({
                              type: "exportTuihuoDetail",
                              _0x4161b0: _0x3aa162,
                              _0x290b7d: _0x2ac6cc,
                              _0x1e2400: _0x255d05
                            }).then(_0x10d719 => {
                              {
                                var _0xe1d78a = new Date(parseInt(_0x2ac6cc)).toISOString().slice(0, 19).replace("T", " ");
                                var _0x5c81f2 = new Date(parseInt(_0x255d05)).toISOString().slice(0, 19).replace("T", " ");
                                if (_0x10d719) {
                                  var _0x231219 = ["SPU", "SKU", "商品图片", "sku属性信息", "备货单号", "退货原因", "退货包裹号", "SKU件数", "出库时间"];
                                  exportPhotoDataToExcel(_0x10d719, _0x231219, 2, _0xe1d78a + "至" + _0x5c81f2 + "退货明细数据.xlsx");
                                  _0x591f3d({
                                    status: "success"
                                  });
                                } else {
                                  removeLoader();
                                  _0x591f3d({
                                    status: "no"
                                  });
                                }
                              }
                            });
                          });
                          return true;
                        } else {
                          if (_0x552199.type === "exportConsumerAfterSalesIssuesBg") {
                            var _0x2ac6cc = _0x552199._0x290b7d;
                            var _0x255d05 = _0x552199._0x1e2400;
                            createLoader();
                            getMallId().then(_0x1d518c => {
                              chrome.runtime._0x1354f4({
                                type: "exportConsumerAfterSales",
                                _0x4161b0: _0x1d518c,
                                _0x290b7d: _0x2ac6cc,
                                _0x1e2400: _0x255d05
                              }).then(_0x52bdd0 => {
                                var _0x4cdf38 = new Date(parseInt(_0x2ac6cc)).toISOString().slice(0, 19).replace("T", " ");
                                var _0x39ca58 = new Date(parseInt(_0x255d05)).toISOString().slice(0, 19).replace("T", " ");
                                if (_0x52bdd0.length > 0) {
                                  {
                                    removeLoader();
                                    var _0x1fc819 = Object.values(_0x52bdd0.reduce((_0x2d28d0, [_0x46b791, _0x2aa49e, _0x8aae32, _0x4a42e9, _0x2d67d7, _0x3c4a42, _0x3f1592]) => {
                                      {
                                        if (!_0x2d28d0[_0x2aa49e]) {
                                          _0x2d28d0[_0x2aa49e] = [_0x46b791, _0x2aa49e, _0x8aae32, _0x4a42e9, 0, _0x3c4a42, _0x3f1592];
                                        }
                                        _0x2d28d0[_0x2aa49e][4] += parseFloat(_0x2d67d7);
                                        return _0x2d28d0;
                                      }
                                    }, {}));
                                    _0x52bdd0.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                    _0x1fc819.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                    exportToExcel(_0x52bdd0, _0x4cdf38 + "至" + _0x39ca58 + "消费者及履约保障-售后问题.xlsx", _0x1fc819);
                                    _0x591f3d({
                                      status: "success"
                                    });
                                  }
                                } else {
                                  removeLoader();
                                  _0x591f3d({
                                    status: "no"
                                  });
                                  showCustomAlert("无数据/非TEMU主账号，导出失败");
                                }
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
});
function getToggleState(_0x44a08e) {
  return new Promise(_0x5b8c36 => {
    chrome.storage._0x5e599f.get(_0x44a08e, function (_0x44bdd9) {
      _0x5b8c36(_0x44bdd9[_0x44a08e] ? JSON.parse(_0x44bdd9[_0x44a08e]) : false);
    });
  });
}
function showPopup(_0x42f17c) {
  const _0x522d75 = document.createElement("div");
  _0x522d75.classList.add("popup");
  _0x522d75.style.position = "fixed";
  _0x522d75.style.top = "0";
  _0x522d75.style.left = "0";
  _0x522d75.style.width = "100%";
  _0x522d75.style.height = "100%";
  _0x522d75.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  _0x522d75.style.display = "flex";
  _0x522d75.style.justifyContent = "center";
  _0x522d75.style.alignItems = "center";
  _0x522d75.style.zIndex = "1000";
  const _0xa08b4e = document.createElement("div");
  _0xa08b4e.classList.add("popup-content");
  _0xa08b4e.style.backgroundColor = "#ffffff";
  _0xa08b4e.style.padding = "20px";
  _0xa08b4e.style.borderRadius = "8px";
  _0xa08b4e.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
  _0xa08b4e.style.maxWidth = "90%";
  _0xa08b4e.style.maxHeight = "80%";
  _0xa08b4e.style.overflowY = "auto";
  _0xa08b4e.style.position = "relative";
  _0xa08b4e.style.animation = "slideIn 0.3s ease-in-out";
  const _0x1d99f1 = document.createElement("button");
  _0x1d99f1.classList.add("close-btn");
  _0x1d99f1.innerText = "关闭";
  _0x1d99f1.style.position = "absolute";
  _0x1d99f1.style.top = "5px";
  _0x1d99f1.style.right = "15px";
  _0x1d99f1.style.backgroundColor = "#ff4d4d";
  _0x1d99f1.style.color = "white";
  _0x1d99f1.style.border = "none";
  _0x1d99f1.style.cursor = "pointer";
  _0x1d99f1.style.borderRadius = "5px";
  _0x1d99f1.style.transition = "background-color 0.3s ease";
  _0x1d99f1.addEventListener("click", function () {
    {
      _0x522d75.remove();
    }
  });
  _0x1d99f1.addEventListener("mouseover", function () {
    _0x1d99f1.style.backgroundColor = "#e03e3e";
  });
  _0x1d99f1.addEventListener("mouseout", function () {
    {
      _0x1d99f1.style.backgroundColor = "#ff4d4d";
    }
  });
  _0xa08b4e.appendChild(_0x1d99f1);
  const _0x9940a0 = document.createElement("div");
  _0x9940a0.style.display = "flex";
  _0x9940a0.style.justifyContent = "center";
  _0x9940a0.style.marginBottom = "20px";
  const _0x30512d = ["全部", "进行中", "未开始"];
  _0x30512d.forEach(_0x316d63 => {
    {
      const _0x4f3c22 = document.createElement("button");
      _0x4f3c22.innerText = _0x316d63;
      _0x4f3c22.style.backgroundColor = "transparent";
      _0x4f3c22.style.color = "#333";
      _0x4f3c22.style.border = "1px solid #ccc";
      _0x4f3c22.style.padding = "8px 16px";
      _0x4f3c22.style.margin = "0 10px";
      _0x4f3c22.style.cursor = "pointer";
      _0x4f3c22.style.borderRadius = "5px";
      _0x4f3c22.style.transition = "all 0.3s ease";
      _0x4f3c22.addEventListener("click", function () {
        _0x57949c(_0x316d63);
      });
      _0x4f3c22.addEventListener("mouseover", function () {
        _0x4f3c22.style.backgroundColor = "#f1f1f1";
      });
      _0x4f3c22.addEventListener("mouseout", function () {
        _0x4f3c22.style.backgroundColor = "transparent";
      });
      _0x9940a0.appendChild(_0x4f3c22);
    }
  });
  _0xa08b4e.appendChild(_0x9940a0);
  const _0x3b3557 = document.createElement("div");
  _0x3b3557.id = "coupon-container";
  _0xa08b4e.appendChild(_0x3b3557);
  const _0x23ba94 = document.createElement("table");
  _0x23ba94.style.width = "100%";
  _0x23ba94.style.borderCollapse = "collapse";
  _0x23ba94.style.tableLayout = "fixed";
  _0x23ba94.style.marginTop = "20px";
  const _0x5eb8d2 = document.createElement("thead");
  const _0x4f0769 = document.createElement("tr");
  const _0x5a4244 = ["SKU属性集", "日常申报价", "活动申报价", "报名时间", "活动类型", "报名场次", "提报数量", "剩余数量", "活动状态"];
  _0x5a4244.forEach(_0x584a98 => {
    {
      const _0x1a7bf9 = document.createElement("th");
      _0x1a7bf9.innerText = _0x584a98;
      _0x1a7bf9.style.padding = "12px";
      _0x1a7bf9.style.textAlign = "left";
      _0x1a7bf9.style.borderBottom = "1px solid #e0e0e0";
      _0x1a7bf9.style.backgroundColor = "#f8f9fa";
      _0x1a7bf9.style.color = "#333";
      _0x1a7bf9.style.fontWeight = "bold";
      _0x1a7bf9.style.position = "sticky";
      _0x1a7bf9.style.top = "0";
      _0x4f0769.appendChild(_0x1a7bf9);
    }
  });
  _0x5eb8d2.appendChild(_0x4f0769);
  _0x23ba94.appendChild(_0x5eb8d2);
  const _0x38a98f = document.createElement("tbody");
  const _0x3503a4 = [..._0x42f17c];
  function _0x57949c(_0x4ef8e1) {
    {
      let _0x4e5362;
      if (_0x4ef8e1 === "全部") {
        _0x4e5362 = _0x3503a4;
      } else {
        if (_0x4ef8e1 === "进行中") {
          _0x4e5362 = _0x3503a4.filter(_0x1a69f7 => _0x1a69f7[8] === "进行中");
        } else {
          _0x4ef8e1 === "未开始" && (_0x4e5362 = _0x3503a4.filter(_0x33d356 => _0x33d356[8] === "未开始"));
        }
      }
      _0x38a98f.innerHTML = "";
      _0x4e5362.forEach(_0x5b1efe => {
        const _0x1794a7 = document.createElement("tr");
        let _0x1d269e = _0x5b1efe[5].slice(0, 3);
        let _0x1b7de5 = "<span class=\"moreActivate\" style=\"color: rgb(0, 123, 255); cursor: pointer; text-decoration: underline;\">更多</span>";
        _0x1794a7.innerHTML = "\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[0] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[1] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[2] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[3] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[4] + "</td>\n                <td style=\"font-size: 13px; padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">\n                    " + _0x1d269e.join("<br>") + "<br>" + _0x1b7de5 + "\n                </td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[6] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[7] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5b1efe[8] + "</td>\n            ";
        _0x38a98f.appendChild(_0x1794a7);
        _0x1794a7.querySelector(".moreActivate").addEventListener("click", function () {
          toggleMorePopup(this, _0x5b1efe[5].join("<br>"));
        });
      });
    }
  }
  _0x23ba94.appendChild(_0x38a98f);
  _0xa08b4e.appendChild(_0x23ba94);
  _0x522d75.appendChild(_0xa08b4e);
  document.body.appendChild(_0x522d75);
  _0x57949c("全部");
  _0x23ba94.style.maxHeight = "500px";
  _0x23ba94.style.overflowY = "auto";
  _0x23ba94.style.display = "block";
  _0x23ba94.style.scrollbarWidth = "thin";
  _0x23ba94.style.scrollbarColor = "#007bff #f1f1f1";
  _0x23ba94.style._0x1db7f2 = "touch";
  const _0x7139b9 = _0x23ba94.querySelector("::-webkit-scrollbar-thumb");
  _0x7139b9 && (_0x7139b9.style.backgroundColor = "#007bff", _0x7139b9.style.borderRadius = "5px");
  const _0x33aa54 = _0x23ba94.querySelector("::-webkit-scrollbar-track");
  _0x33aa54 && (_0x33aa54.style.backgroundColor = "#f1f1f1", _0x33aa54.style.borderRadius = "5px");
  const _0x55ce25 = _0xa08b4e.querySelectorAll(".more");
  _0x55ce25.forEach(_0x475718 => {
    _0x475718.style.color = "#007bff";
    _0x475718.style.cursor = "pointer";
    _0x475718.style.textDecoration = "underline";
  });
}
function generateCouponHTML(_0xd13ea) {
  if (_0xd13ea.length === 0) {
    {
      const _0x35f88f = document.createElement("div");
      _0x35f88f.style.cssText = "font-family: Arial, sans-serif; color: #777; text-align: center; font-size: 14px; padding: 20px;";
      _0x35f88f.textContent = "暂无可显示的券信息";
      document.getElementById("coupon-container").appendChild(_0x35f88f);
      return;
    }
  }
  const _0x3e82d2 = document.createElement("div");
  _0x3e82d2.style.cssText = "font-family: Arial, sans-serif; max-width: 100%; margin: 10px auto; padding: 8px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between; font-size: 15px;";
  const [_0x27f328, _0x10a521, _0x171df8, _0x5531fb, _0x39b3aa, _0x22f86b] = _0xd13ea[0];
  const _0x541394 = document.createElement("span");
  _0x541394.style.cssText = "font-weight: bold; color: #333; flex-basis: 100%; text-align: center; font-size: 14px;";
  _0x541394.textContent = "【" + _0x27f328 + "】";
  _0x3e82d2.appendChild(_0x541394);
  const _0x1affa0 = document.createElement("div");
  _0x1affa0.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap; justify-content: space-around; width: 100%; text-align: center;";
  const _0x442e3e = [{
    label: "券金额",
    value: "CNY " + _0x10a521,
    color: "#f56c6c"
  }, {
    label: "发行数量",
    value: _0x171df8,
    color: "#2d8cf0"
  }, {
    label: "领券数量",
    value: _0x5531fb,
    color: "#2d8cf0"
  }, {
    label: "用券数量",
    value: _0x39b3aa,
    color: "#2d8cf0"
  }];
  _0x442e3e.forEach(_0x5f6321 => {
    const _0x221654 = document.createElement("span");
    _0x221654.style.color = "#555";
    _0x221654.innerHTML = _0x5f6321.label + " <strong style=\"color: " + _0x5f6321.color + "; font-size: 22px;\">" + _0x5f6321.value + "</strong>";
    _0x1affa0.appendChild(_0x221654);
  });
  _0x3e82d2.appendChild(_0x1affa0);
  const _0x2e81bd = document.createElement("div");
  _0x2e81bd.style.cssText = "width: 100%; text-align: center; color: #555; font-size: 13px;";
  _0x2e81bd.innerHTML = "发券时间 <strong style=\"color: #999;\">" + _0x22f86b + "</strong>";
  _0x3e82d2.appendChild(_0x2e81bd);
  document.getElementById("coupon-container").appendChild(_0x3e82d2);
}
async function getSkuCoupon(_0x2bfaa5, _0x1a183a) {
  const _0x1ab963 = new Headers();
  _0x1ab963.append("accept", "*/*");
  _0x1ab963.append("accept-language", "zh-CN,zh;q=0.9");
  _0x1ab963.append("cache-control", "no-cache");
  _0x1ab963.append("content-type", "application/json");
  _0x1ab963.append("mallid", _0x1a183a);
  const _0x3d47e4 = JSON.stringify({
    _0x1bcb8e: 1,
    _0x40a2cd: 10,
    _0x3bc072: [_0x2bfaa5],
    state: 1
  });
  const _0x15e0e4 = {
    method: "POST",
    headers: _0x1ab963,
    body: _0x3d47e4,
    redirect: "follow"
  };
  let _0x369dc7 = 0;
  let _0x4738c7;
  let _0x43ebea;
  while (_0x369dc7 < 3) {
    try {
      _0x4738c7 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/coupon/page/query", _0x15e0e4);
      if (!_0x4738c7.ok) {
        throw new Error("请求失败，状态码: " + _0x4738c7.status);
      }
      _0x43ebea = await _0x4738c7.json();
      break;
    } catch (_0x3f58f1) {
      _0x369dc7++;
      console.error("第 " + _0x369dc7 + " 次请求失败:", _0x3f58f1);
      if (_0x369dc7 >= 3) {
        {
          _0x43ebea = {
            result: {
              _0x4b3565: []
            }
          };
          break;
        }
      }
    }
  }
  var _0x365742 = _0x43ebea.result._0x4b3565;
  if (_0x365742.length == 0) {
    {
      return [];
    }
  }
  var _0x450310 = [];
  for (let _0x406d32 = 0; _0x406d32 < _0x365742.length; _0x406d32++) {
    var _0x371ea6 = (parseFloat(_0x365742[_0x406d32]._0x13f76a) / 100).toFixed(2);
    var _0x4ee00a = _0x365742[_0x406d32]._0x44510c;
    var _0x16ae09 = _0x365742[_0x406d32]._0x16f0e1;
    var _0x536411 = _0x365742[_0x406d32]._0x54a98d;
    var _0x40ee1a = new Date(parseInt(_0x365742[_0x406d32]._0x36126d)).toISOString().slice(0, 10) + " 00:00:00" + " ～ " + new Date(parseInt(_0x365742[_0x406d32].endTime)).toISOString().slice(0, 10) + " 23:59:59";
    var _0x2744ed = [_0x365742[_0x406d32].title, _0x371ea6, _0x4ee00a, _0x16ae09, _0x536411, _0x40ee1a];
    _0x450310.push(_0x2744ed);
  }
  return _0x450310;
}
function toggleMorePopup(_0x24fad4, _0x3ba9dd) {
  try {
    const _0x40992d = document.createElement("div");
    _0x40992d.style.zIndex = "9999";
    _0x40992d.style.width = "activateFit-content";
    _0x40992d.style.maxHeight = "250px";
    _0x40992d.style.display = "block";
    _0x40992d.style.position = "fixed";
    _0x40992d.style.backgroundColor = "#fff";
    _0x40992d.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    _0x40992d.style.borderRadius = "5px";
    _0x40992d.style.fontSize = "13px";
    const _0x57c36f = document.createElement("div");
    _0x57c36f.style.maxHeight = "200px";
    _0x57c36f.style.overflowY = "auto";
    _0x57c36f.style.scrollbarWidth = "thin";
    _0x57c36f.style.scrollbarColor = "hsl(205deg, 16%, 77%) rgb(241, 241, 241);";
    _0x57c36f.style.padding = "10px";
    _0x57c36f.style.whiteSpace = "pre-wrap";
    _0x57c36f.style.wordWrap = "break-word";
    _0x57c36f.innerHTML = _0x3ba9dd;
    _0x40992d.appendChild(_0x57c36f);
    const _0x5bdfff = document.createElement("span");
    _0x5bdfff.innerHTML = "&#10006;";
    _0x5bdfff.style.position = "absolute";
    _0x5bdfff.style.top = "5px";
    _0x5bdfff.style.right = "20px";
    _0x5bdfff.style.fontSize = "20px";
    _0x5bdfff.style.cursor = "pointer";
    _0x5bdfff.style.color = "#999";
    _0x5bdfff.style.transition = "color 0.3s";
    _0x5bdfff.addEventListener("click", function () {
      _0x40992d.remove();
    });
    _0x5bdfff.addEventListener("mouseover", function () {
      _0x5bdfff.style.color = "#ff4d4d";
    });
    _0x5bdfff.addEventListener("mouseout", function () {
      _0x5bdfff.style.color = "#999";
    });
    const _0xf4736c = _0x24fad4.getBoundingClientRect();
    _0x40992d.style.left = _0xf4736c.left + window.scrollX + "px";
    _0x40992d.style.top = _0xf4736c.top + window.scrollY - _0x40992d.offsetHeight - 5 + "px";
    _0x40992d.appendChild(_0x5bdfff);
    document.body.appendChild(_0x40992d);
  } catch (_0x139737) {
    console.log(_0x139737);
  }
}
function tipBoxShowBu(_0x463609, _0x20c43e) {
  const _0x3eedea = document.createElement("div");
  _0x3eedea.textContent = _0x463609;
  _0x3eedea.style.position = "fixed";
  _0x3eedea.style.top = "40%";
  _0x3eedea.style.left = "40%";
  _0x3eedea.style.transform = "translate(-50%, -50%)";
  _0x3eedea.style.backgroundColor = "#e8f5e9";
  _0x3eedea.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0x3eedea.style.color = "#1b5e20";
  _0x3eedea.style.padding = "20px 30px";
  _0x3eedea.style.borderRadius = "12px";
  _0x3eedea.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0x3eedea.style.fontSize = "18px";
  _0x3eedea.style.fontFamily = "Arial, sans-serif";
  _0x3eedea.style.textAlign = "center";
  _0x3eedea.style.maxWidth = "80%";
  _0x3eedea.style.wordWrap = "break-word";
  _0x3eedea.style.zIndex = "1000";
  _0x3eedea.style.display = "none";
  _0x3eedea.style.opacity = "0";
  _0x3eedea.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0x3eedea);
  setTimeout(() => {
    _0x3eedea.style.display = "block";
    _0x3eedea.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0x3eedea.style.opacity = "0";
    setTimeout(() => {
      _0x3eedea.style.display = "none";
      document.body.removeChild(_0x3eedea);
    }, 500);
  }, _0x20c43e);
}
function createLoader(_0x503a55 = 1) {
  var _0xa8d558 = document.createElement("div");
  _0xa8d558.id = "loader";
  _0xa8d558.style.position = "fixed";
  _0xa8d558.style.top = "0";
  _0xa8d558.style.left = "0";
  _0xa8d558.style.width = "100%";
  _0xa8d558.style.height = "100%";
  _0xa8d558.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  _0xa8d558.style.display = "flex";
  _0xa8d558.style.flexDirection = "column";
  _0xa8d558.style.justifyContent = "center";
  _0xa8d558.style.alignItems = "center";
  _0xa8d558.style.zIndex = "9999";
  var _0xe481e4 = document.createElement("div");
  _0xe481e4.style.position = "relative";
  _0xe481e4.style.width = "128px";
  _0xe481e4.style.height = "128px";
  for (let _0x1b2526 = 0; _0x1b2526 < 3; _0x1b2526++) {
    {
      let _0x431dbe = document.createElement("div");
      _0x431dbe.style.position = "absolute";
      _0x431dbe.style.width = "128px";
      _0x431dbe.style.height = "128px";
      _0x431dbe.style.border = "8px solid transparent";
      _0x431dbe.style.borderTop = "8px solid #ffffff";
      _0x431dbe.style.borderRadius = "50%";
      _0x431dbe.style.animation = "spin 1.2s linear infinite";
      _0x431dbe.style.animationDelay = _0x1b2526 * 0.4 + "s";
      _0xe481e4.appendChild(_0x431dbe);
    }
  }
  if (_0x503a55 != 1) {
    {
      var _0x4cd62b = document.createElement("button");
      _0x4cd62b.textContent = "0";
      _0x4cd62b.style.position = "absolute";
      _0x4cd62b.style.top = "50%";
      _0x4cd62b.style.left = "50%";
      _0x4cd62b.style.transform = "translate(-50%, -50%)";
      _0x4cd62b.style.padding = "10px 20px";
      _0x4cd62b.style.backgroundColor = "rgb(255 255 255 / 0%)";
      _0x4cd62b.style.border = "none";
      _0x4cd62b.style.borderRadius = "5px";
      _0x4cd62b.style.cursor = "pointer";
      _0x4cd62b.style.height = "70px";
      _0x4cd62b.style.width = "70px";
      _0x4cd62b.style.fontSize = "20px";
      _0x4cd62b.style.color = "#fff";
      var _0x528976 = 0;
      var _0x38c07d = setInterval(function () {
        if (!_0x4cd62b.isConnected) {
          clearInterval(_0x38c07d);
          return;
        }
        _0x528976++;
        _0x4cd62b.textContent = _0x528976;
      }, 1000);
      _0xe481e4.appendChild(_0x4cd62b);
    }
  }
  _0xa8d558.appendChild(_0xe481e4);
  var _0x483832 = document.createElement("div");
  _0x483832.id = "loader-message";
  _0x483832.style.marginTop = "20px";
  _0x483832.style.color = "#ffffff";
  _0x483832.style.fontSize = "18px";
  _0x483832.innerHTML = "处理中，请等待一会...";
  _0xa8d558.appendChild(_0x483832);
  document.body.appendChild(_0xa8d558);
  var _0x5d0fc2 = document.createElement("style");
  _0x5d0fc2.type = "text/css";
  var _0x55ddd5 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
  _0x5d0fc2.innerHTML = _0x55ddd5;
  document.getElementsByTagName("head")[0].appendChild(_0x5d0fc2);
}
function updateLoaderMessage(_0x583c01) {
  var _0x5c604a = document.getElementById("loader-message");
  _0x5c604a && (_0x5c604a.innerHTML = _0x583c01);
}
function removeLoader() {
  var _0x14a5d0 = document.getElementById("loader");
  _0x14a5d0 && document.body.removeChild(_0x14a5d0);
}
async function generateDeviceFingerprint() {
  function _0x19c126() {
    var _0x1d1242 = [];
    _0x1d1242.push(navigator.userAgent);
    _0x1d1242.push(navigator.platform);
    _0x1d1242.push(screen.width + "x" + screen.height);
    _0x1d1242.push(navigator.language);
    _0x1d1242.push(new Date().getTimezoneOffset());
    var _0x3cd3b4 = document.createElement("canvas");
    var _0x4bb531 = _0x3cd3b4.getContext("2d");
    _0x4bb531.textBaseline = "top";
    _0x4bb531.font = "14px Arial";
    _0x4bb531.textBaseline = "alphabetic";
    _0x4bb531.fillStyle = "#f60";
    _0x4bb531.fillRect(125, 1, 62, 20);
    _0x4bb531.fillStyle = "#069";
    _0x4bb531.fillText("Hello, world!", 2, 15);
    _0x4bb531.fillStyle = "rgba(102, 204, 0, 0.7)";
    _0x4bb531.fillText("Hello, world!", 4, 17);
    var _0x16cb1a = _0x3cd3b4.toDataURL();
    _0x1d1242.push(_0x16cb1a);
    _0x1d1242.push(navigator.hardwareConcurrency);
    _0x1d1242.push(navigator.deviceMemory);
    _0x1d1242.push(navigator.maxTouchPoints);
    var _0x5c82ab = _0x1d1242.join("|");
    return _0x5c82ab;
  }
  async function _0x198f3a(_0x40d655) {
    const _0x467486 = new TextEncoder().encode(_0x40d655);
    const _0x4bbee5 = await crypto.subtle.digest("SHA-256", _0x467486);
    const _0x3a7d23 = Array.from(new Uint8Array(_0x4bbee5));
    const _0x3a6a0b = _0x3a7d23.map(_0x387015 => _0x387015.toString(16).padStart(2, "0")).join("");
    return _0x3a6a0b.substr(0, 32);
  }
  var _0x4be246 = _0x19c126();
  return await _0x198f3a(_0x4be246);
}
async function getMallId() {
  try {
    {
      await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
      var _0x18248c = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
      var _0x20b02d = {
        "Content-Type": "application/json",
        _0x5bd45d: "*/*",
        _0x2101f9: "zh-CN,zh;q=0.9",
        _0x5529e0: "no-cache",
        _0x3cac57: "no-cache"
      };
    }
  } catch (_0x4a0ba4) {}
  try {
    var _0x32cff2 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
      method: "POST",
      headers: _0x20b02d,
      body: {},
      credentials: "include"
    });
    var _0x242ff8 = await _0x32cff2.json();
    var _0x25307f = _0x242ff8.result._0x4dbcea[0]._0x395bc5.find(function (_0x3b74be) {
      return _0x18248c === _0x3b74be._0x2cfc3d;
    });
    return _0x25307f ? _0x25307f._0x4161b0 : null;
  } catch (_0x111451) {
    {
      throw _0x111451;
    }
  }
}
async function waitForConsumerConsultation(_0x3f24a5, _0x42c4c2) {
  let _0x58a6b0 = 0;
  const _0x3b7e32 = 30000;
  while (_0x58a6b0 < _0x3b7e32) {
    {
      let _0x59cecf = document.querySelector(_0x3f24a5);
      if (_0x59cecf && _0x59cecf.textContent.includes(_0x42c4c2)) {
        return;
      }
      await new Promise(_0x2ee4bc => setTimeout(_0x2ee4bc, 1000));
      _0x58a6b0 += 1000;
    }
  }
}
async function fetchSizeGuide(_0x267a1f) {
  const _0x34f245 = new Headers({
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8"
  });
  const _0x4a07c9 = JSON.stringify({
    _0x59c9d3: ["supportSizeGuideV2Logic"],
    _0x33e937: 1,
    _0x468331: _0x267a1f
  });
  const _0x4e5825 = {
    method: "POST",
    headers: _0x34f245,
    body: _0x4a07c9,
    redirect: "follow"
  };
  try {
    {
      const _0x132093 = await fetch("https://www.temu.com/api/oak/size_guide/render", _0x4e5825);
      const _0x5cec40 = await _0x132093.json();
      if (_0x5cec40.success != false) {
        var _0x462322 = _0x5cec40._0x46adea._0x4c1a9e[0]._0xf73ced;
        var _0x26dfc8 = {};
        _0x462322.forEach(_0x12c3a6 => {
          for (const _0x5b4c9e in _0x12c3a6) {
            !isNaN(_0x5b4c9e) && _0x5b4c9e > 1 && _0x5b4c9e < 55 && (_0x26dfc8[_0x12c3a6[_0x5b4c9e]] = _0x12c3a6["1"]);
          }
        });
        sizeGuide = _0x26dfc8;
      }
    }
  } catch (_0x5f182f) {}
}
async function dataMy(_0x4bf44e) {
  var _0x83cb28 = {
    _0x59896c: {
      _0x5c1eb3: 80,
      width: 70,
      height: 60
    },
    _0x19f8df: {
      value: 6000
    },
    _0x2d4f21: [],
    _0x37d629: {
      _0x10e39b: 0,
      _0x2e5cbf: []
    },
    _0x4b2243: {}
  };
  const _0x11cbe1 = await new Promise((_0x12767a, _0x63ff76) => {
    chrome.runtime._0x1354f4({
      type: "fanyi",
      _0x596799: _0x4bf44e._0x412cb7._0xe932e2,
      _0x5bde25: "en"
    }, _0xdee1d2 => {
      {
        _0xdee1d2 && _0xdee1d2.data && _0xdee1d2.data.fanyi ? _0x12767a(_0xdee1d2.data.fanyi) : _0x63ff76(new Error("Translation failed"));
      }
    });
  });
  await _0x11cbe1;
  dd = {
    _0x37c809: _0x4bf44e._0x412cb7._0x7444af,
    _0x5ecf92: _0x4bf44e._0x412cb7._0x117222,
    _0x3abc38: _0x4bf44e._0x412cb7._0x4dcc86,
    _0x40e3b7: _0x4bf44e._0x412cb7._0x1dc8b0,
    _0x3b9dde: _0x4bf44e._0x412cb7._0x1a7ba2,
    _0x1989df: 0,
    _0x5c19d4: 0,
    _0x32080c: 0,
    _0x5d3182: 0,
    _0x25c754: 0,
    _0x1f77ce: 0,
    _0x1077c7: [],
    _0x368aa8: [{
      productName: _0x4bf44e._0x412cb7._0xe932e2,
      language: "en"
    }],
    productName: _0x11cbe1,
    _0x5d7b39: [],
    _0x4e81d2: [{
      _0x3e9f2a: [_0x4bf44e._0x412cb7._0x586a53],
      _0x1141d7: [],
      _0x37dcdf: "",
      _0x44c69a: [{
        _0x54bd09: 0,
        _0x95e0f2: "",
        _0x290bdd: 0,
        _0x3ab30c: ""
      }],
      _0x73bc4: 0,
      _0x411a9f: []
    }],
    _0x423afb: [],
    _0x24df8e: _0x4bf44e._0x412cb7._0x214693.map(function (_0x215004) {
      return _0x215004.url;
    }),
    _0x2e4bd5: [],
    _0x551a0a: _0x4bf44e._0x412cb7._0x586a53,
    _0x58b9d7: [],
    _0x1a998c: [],
    _0x49d58f: [],
    _0x226f2f: [],
    _0x7225ab: [],
    _0x51f0b6: {
      _0x29ffde: "",
      _0x444387: {
        _0x2207c5: "CN"
      }
    },
    _0xc895d3: [],
    _0x2df0da: [],
    _0x2b53b2: [],
    _0x4ca2ac: [{
      _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
    }, {
      _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
    }, {
      _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
    }],
    _0x22dd44: {},
    _0x4af6c3: [],
    _0x4ab31a: [],
    _0x39f2e8: {
      _0x458e09: null
    },
    _0x261bf8: {
      _0x55145a: {
        _0x4a9f81: null,
        _0x2b01eb: null
      },
      _0x500cac: {}
    },
    _0xac8f65: 0,
    productDraftId: 0
  };
  const _0x1e82ff = {
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
  for (const _0x3989d2 of _0x4bf44e._0x440735) {
    {
      const _0x47d790 = {
        _0x591559: "",
        _0x1e0924: [],
        _0x37dcdf: "",
        _0x4c5756: (parseFloat(_0x3989d2._0xf11799[1].text.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
        _0x40d6e3: "CNY",
        _0x1dafc0: [],
        _0x1a8847: 0,
        _0x22ecff: {
          _0x177427: "NA"
        },
        _0x2cb5c2: Object.assign({}, _0x83cb28)
      };
      for (var _0x1aaf7e of _0x3989d2._0x553287) {
        var _0x3eb36c = {
          _0x54bd09: "",
          _0x95e0f2: "",
          _0x290bdd: "",
          _0x3ab30c: ""
        };
        _0x47d790._0x591559 = _0x3989d2._0x2570ed;
        _0x3eb36c._0x54bd09 = _0x1aaf7e._0x3b7af6;
        _0x3eb36c._0x95e0f2 = _0x1e82ff[_0x1aaf7e._0x3b7af6];
        _0x3eb36c._0x290bdd = _0x1aaf7e._0x349545;
        _0x3eb36c._0x3ab30c = _0x1aaf7e._0x34c49f.slice(0, 30);
        _0x47d790._0x1dafc0.push(_0x3eb36c);
        const _0x58bee6 = Object.assign({
          refPid: 0,
          _0x371794: 0,
          _0x166d8c: 0,
          _0x11dea4: _0x1e82ff[_0x1aaf7e._0x3b7af6],
          _0x13cfa2: 0,
          _0x59a473: _0x1aaf7e._0x34c49f.slice(0, 30),
          _0x18b45e: "",
          _0xe8c89f: 0,
          _0x6fceb9: "",
          _0x1ec863: ""
        }, _0x3eb36c);
        dd._0x423afb.push(_0x58bee6);
      }
      dd._0x4e81d2[0]._0x411a9f.push(_0x47d790);
    }
  }
  dd._0x423afb = [...new Set(dd._0x423afb)];
  for (let _0x5c9ba2 = 0; _0x5c9ba2 < _0x4bf44e._0x46e6b1._0x538c4d.length; _0x5c9ba2++) {
    const _0x3b3d6e = _0x4bf44e._0x46e6b1._0x538c4d[_0x5c9ba2];
    let _0x14af31;
    let _0x18e94b;
    _0x3b3d6e._0x26862b[0].text ? (_0x14af31 = {
      _0x16ef33: null,
      lang: "zh",
      key: "DecImage",
      type: "text",
      priority: _0x5c9ba2,
      _0x22fbf3: [{
        text: _0x3b3d6e._0x26862b[0].text,
        _0x560d0a: {
          fontSize: _0x3b3d6e._0x26862b[0]._0x4f5d86._0x466e6d,
          _0x1b1b81: _0x3b3d6e._0x26862b[0]._0x4f5d86._0x367dc6,
          fontFamily: null,
          align: _0x3b3d6e._0x26862b[0]._0x4f5d86.align,
          backgroundColor: _0x3b3d6e._0x26862b[0]._0x4f5d86._0x30cdcd
        }
      }]
    }, dd._0x58b9d7.push(_0x14af31)) : (_0x18e94b = {
      _0x16ef33: null,
      lang: "zh",
      key: "DecImage",
      type: "image",
      priority: _0x5c9ba2,
      _0x22fbf3: [{
        _0x3b85ba: _0x3b3d6e._0x26862b[0]._0x440204,
        height: _0x3b3d6e._0x26862b[0].height,
        width: _0x3b3d6e._0x26862b[0].width
      }]
    }, dd._0x58b9d7.push(_0x18e94b));
  }
  for (let _0x15f57f of _0x4bf44e._0x412cb7._0x32f94) {
    {
      const _0x4686b8 = {
        _0x59a473: "",
        _0x11dea4: "",
        refPid: 0,
        _0x13cfa2: 0,
        _0x371794: 0,
        _0x166d8c: 0,
        _0x1ec863: "",
        _0x18b45e: "",
        _0x4fb071: ""
      };
      _0x15f57f.hasOwnProperty("key") && _0x15f57f.hasOwnProperty("values") && _0x15f57f.hasOwnProperty("ref_pid") && (_0x4686b8._0x11dea4 = _0x15f57f.key, _0x4686b8._0x59a473 = _0x15f57f.values[0], _0x4686b8.refPid = _0x15f57f.ref_pid, dd._0x5d7b39.push(_0x4686b8));
    }
  }
  return dd;
}
async function quickTranslation(_0x1f7e13, _0x18f6c4) {
  return new Promise((_0x30a608, _0x2f9205) => {
    chrome.runtime._0x1354f4({
      type: "fanyi",
      _0x596799: _0x1f7e13,
      _0x5bde25: _0x18f6c4
    }, _0x5e5389 => {
      _0x5e5389 && _0x5e5389.data ? (fanyi = _0x5e5389.data.fanyi, _0x30a608(_0x5e5389.data.fanyi)) : _0x2f9205(new Error("Translation failed"));
    });
  });
}
function sanitizeFileName(_0x7b6718) {
  return _0x7b6718.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "").trim();
}
async function generateProductData(_0xe4bf97) {
  try {
    var _0x4bc4f4 = 0;
    const _0x1a8ed4 = document.querySelectorAll("script");
    var _0x3866e9;
    for (const _0x39e2f3 of _0x1a8ed4) {
      {
        if (_0x39e2f3.innerText.includes("window.rawData")) {
          {
            const _0x4f4016 = /window\.rawData=(.*?);document/s;
            const _0x1e8bab = _0x39e2f3.innerText.match(_0x4f4016);
            if (_0x1e8bab) {
              {
                const rawDataJSON = _0x1e8bab[1];
                _0x3866e9 = JSON.parse(rawDataJSON).store;
                var _0x184f95 = {
                  _0x59896c: {
                    _0x5c1eb3: 80,
                    width: 70,
                    height: 60
                  },
                  _0x19f8df: {
                    value: 6000
                  },
                  _0x2d4f21: [],
                  _0x37d629: {
                    _0x10e39b: 0,
                    _0x2e5cbf: []
                  },
                  _0x4b2243: {}
                };
                var _0x5cc3a6 = {};
                return new Promise((_0x5f0615, _0x301f65) => {
                  {
                    fanyi = "";
                    var _0x4e7d1b = /[\u4e00-\u9fa5]/.test(_0x3866e9._0x412cb7._0x36a88c);
                    _0x4e7d1b ? quickTranslation(_0x3866e9._0x412cb7._0x36a88c, "zh") : quickTranslation(_0x3866e9._0x412cb7._0x36a88c, "en");
                    var _0x3ce72a = _0x3866e9._0x2ac3a2.slice(0, 10);
                    var _0x257e00 = [];
                    var _0x4f879e = _0x3ce72a.map(_0x3afdaf => generatePhotoNewUrl(_0x3afdaf, _0xe4bf97).then(_0x4ade3e => {
                      _0x257e00.push(_0x4ade3e.url);
                      _0x5cc3a6[_0x3afdaf] = _0x4ade3e.url;
                    }).catch(_0x4a33ee => {}));
                    Promise.all(_0x4f879e).then(async () => {
                      try {
                        await fetchSizeGuide(_0x3866e9._0x37249b);
                        dd = {
                          _0x37c809: _0x3866e9._0x412cb7._0x37c809,
                          _0x5ecf92: _0x3866e9._0x412cb7._0x5669c5,
                          _0x3abc38: _0x3866e9._0x412cb7._0x4db556,
                          _0x40e3b7: _0x3866e9._0x412cb7._0x31fd3c,
                          _0x3b9dde: _0x3866e9._0x412cb7._0x40745c,
                          _0x1989df: 0,
                          _0x5c19d4: 0,
                          _0x32080c: 0,
                          _0x5d3182: 0,
                          _0x25c754: 0,
                          _0x1f77ce: 0,
                          _0x1077c7: [],
                          _0x368aa8: [{
                            productName: _0x3866e9._0x412cb7._0x36a88c,
                            language: "en"
                          }],
                          productName: _0x3866e9._0x412cb7._0x36a88c,
                          _0x5d7b39: [],
                          _0x4e81d2: [{
                            _0x3e9f2a: [_0x3866e9._0x2ac3a2[0]],
                            _0x1141d7: [],
                            _0x37dcdf: "",
                            _0x44c69a: [{
                              _0x54bd09: 0,
                              _0x95e0f2: "",
                              _0x290bdd: 0,
                              _0x3ab30c: ""
                            }],
                            _0x73bc4: 0,
                            _0x411a9f: []
                          }],
                          _0x423afb: [],
                          _0x24df8e: _0x257e00,
                          _0x2e4bd5: [],
                          _0x551a0a: _0x257e00[0],
                          _0x58b9d7: [],
                          _0x1a998c: [],
                          _0x49d58f: [],
                          _0x226f2f: [],
                          _0x7225ab: [],
                          _0x51f0b6: {
                            _0x29ffde: "",
                            _0x444387: {
                              _0x2207c5: "CN"
                            }
                          },
                          _0xc895d3: [{
                            _0x13cfa2: _0x3866e9._0x412cb7.video !== undefined ? _0x3866e9._0x412cb7.video._0x13cfa2 : "",
                            _0x36aac6: _0x3866e9._0x412cb7.video !== undefined ? _0x3866e9._0x412cb7.video._0x36aac6 : "",
                            _0x3af4bf: _0x3866e9._0x412cb7.video !== undefined ? _0x3866e9._0x412cb7.video.url : "",
                            _0x145037: 1,
                            width: _0x3866e9._0x412cb7.video !== undefined ? _0x3866e9._0x412cb7.video.width : "",
                            height: _0x3866e9._0x412cb7.video !== undefined ? _0x3866e9._0x412cb7.video.height : ""
                          }],
                          _0x2df0da: [],
                          _0x2b53b2: [],
                          _0x4ca2ac: [{
                            _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
                          }, {
                            _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
                          }, {
                            _0x15683c: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
                          }],
                          _0x22dd44: {},
                          _0x4af6c3: [],
                          _0x4ab31a: [],
                          _0x39f2e8: {
                            _0x458e09: null
                          },
                          _0x261bf8: {
                            _0x55145a: {
                              _0x4a9f81: null,
                              _0x2b01eb: null
                            },
                            _0x500cac: {}
                          },
                          _0xac8f65: 0,
                          productDraftId: 0
                        };
                        if (_0x3866e9._0x76cf80) {
                          var _0x10dabb = await getLanguage(_0x3866e9._0x76cf80.url);
                          dd._0x4ab31a = [{
                            languages: _0x10dabb,
                            language: "en",
                            fileName: _0x3866e9._0x76cf80.name,
                            _0x2faf85: _0x3866e9._0x76cf80.url
                          }];
                        }
                        const _0x3e8754 = {
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
                        for (const _0x2f3dbf of _0x3866e9._0x440735) {
                          const _0x15c1f4 = {
                            _0x591559: "",
                            _0x1e0924: [],
                            _0x37dcdf: "",
                            _0x4c5756: (parseFloat(_0x2f3dbf._0x1e0a89.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
                            _0x40d6e3: "CNY",
                            _0x1dafc0: [],
                            _0x1a8847: 0,
                            _0x22ecff: {
                              _0x177427: "NA"
                            },
                            _0x2cb5c2: Object.assign({}, _0x184f95)
                          };
                          for (var _0x20d621 of _0x2f3dbf._0x553287) {
                            var _0x3c299f = {
                              _0x54bd09: "",
                              _0x95e0f2: "",
                              _0x290bdd: "",
                              _0x3ab30c: ""
                            };
                            if (!_0x5cc3a6[_0x2f3dbf._0x591559]) {
                              {
                                var _0x1faf55 = await generatePhotoNewUrl(_0x2f3dbf._0x591559, _0xe4bf97);
                                _0x5cc3a6[_0x2f3dbf._0x591559] = _0x5cc3a6[_0x2f3dbf._0x591559];
                              }
                            }
                            _0x15c1f4._0x591559 = _0x5cc3a6[_0x2f3dbf._0x591559];
                            _0x3c299f._0x54bd09 = _0x20d621._0x3398f5;
                            _0x3c299f._0x95e0f2 = _0x3e8754[_0x20d621._0x3398f5];
                            _0x3c299f._0x290bdd = _0x20d621._0x38d4d3;
                            var _0x4e547e = "";
                            _0x3e8754[_0x20d621._0x3398f5] == "尺码" ? (_0x4e547e = sizeGuide[_0x20d621._0x5d5bc9.slice(0, 30)], _0x3c299f._0x3ab30c = _0x4e547e) : (_0x4e547e = _0x20d621._0x5d5bc9.slice(0, 30), _0x3c299f._0x3ab30c = _0x4e547e);
                            _0x15c1f4._0x1dafc0.push(_0x3c299f);
                            const _0x29e297 = Object.assign({
                              refPid: 0,
                              _0x371794: 0,
                              _0x166d8c: 0,
                              _0x11dea4: _0x3e8754[_0x20d621._0x3398f5],
                              _0x13cfa2: 0,
                              _0x59a473: _0x4e547e,
                              _0x18b45e: "",
                              _0xe8c89f: 0,
                              _0x6fceb9: "",
                              _0x1ec863: ""
                            }, _0x3c299f);
                            dd._0x423afb.push(_0x29e297);
                          }
                          dd._0x4e81d2[0]._0x411a9f.push(_0x15c1f4);
                        }
                        dd._0x423afb = [...new Set(dd._0x423afb)];
                        if (_0x3866e9._0x442f8f._0x12bf59) {
                          {
                            for (let _0x89b61e = 0; _0x89b61e < _0x3866e9._0x442f8f._0x12bf59.length; _0x89b61e++) {
                              const _0x512d86 = _0x3866e9._0x442f8f._0x12bf59[_0x89b61e];
                              let _0x98c92;
                              let _0x35a85f;
                              if (_0x512d86.items[0].text) {
                                _0x98c92 = {
                                  _0x16ef33: null,
                                  lang: "zh",
                                  key: "DecImage",
                                  type: "text",
                                  priority: _0x89b61e,
                                  _0x22fbf3: [{
                                    text: _0x512d86.items[0].text,
                                    _0x560d0a: {
                                      fontSize: _0x512d86.items[0]._0x1b76a9.fontSize,
                                      _0x1b1b81: _0x512d86.items[0]._0x1b76a9._0x1b1b81,
                                      fontFamily: null,
                                      align: _0x512d86.style.align,
                                      backgroundColor: _0x512d86.style.backgroundColor
                                    }
                                  }]
                                };
                                dd._0x58b9d7.push(_0x98c92);
                              } else {
                                {
                                  if (parseFloat(_0x512d86.items[0].width) / parseFloat(_0x512d86.items[0].height) >= 0.5 && parseFloat(_0x512d86.items[0].width) / parseFloat(_0x512d86.items[0].height) <= 2 && parseFloat(_0x512d86.items[0].width) >= 480) {
                                    if (!_0x5cc3a6[_0x512d86.items[0].url]) {
                                      var _0x2a61ee = await generatePhotoNewUrl(_0x512d86.items[0].url, _0xe4bf97);
                                      _0x5cc3a6[_0x512d86.items[0].url] = _0x5cc3a6[_0x512d86.items[0].url];
                                    }
                                    _0x35a85f = {
                                      _0x16ef33: null,
                                      lang: "zh",
                                      key: "DecImage",
                                      type: "image",
                                      priority: _0x89b61e,
                                      _0x22fbf3: [{
                                        _0x3b85ba: _0x5cc3a6[_0x512d86.items[0].url],
                                        height: _0x512d86.items[0].height,
                                        width: _0x512d86.items[0].width
                                      }]
                                    };
                                    dd._0x58b9d7.push(_0x35a85f);
                                  }
                                }
                              }
                            }
                          }
                        }
                        for (let _0xe6adb0 of _0x3866e9._0x412cb7._0x4373f0) {
                          const _0x47a030 = {
                            _0x59a473: "",
                            _0x11dea4: "",
                            refPid: 0,
                            _0x13cfa2: 0,
                            _0x371794: 0,
                            _0x166d8c: 0,
                            _0x1ec863: "",
                            _0x18b45e: "",
                            _0x4fb071: ""
                          };
                          _0xe6adb0.hasOwnProperty("key") && _0xe6adb0.hasOwnProperty("values") && _0xe6adb0.hasOwnProperty("refPid") && (_0x47a030._0x11dea4 = _0xe6adb0.key, _0x47a030._0x59a473 = _0xe6adb0.values[0], _0x47a030.refPid = _0xe6adb0.refPid, dd._0x5d7b39.push(_0x47a030));
                        }
                        _0x4bc4f4 = 1;
                        _0x5f0615(JSON.stringify(dd));
                      } catch (_0x30d90a) {
                        {
                          _0x301f65(_0x30d90a);
                        }
                      }
                    }).catch(_0x150900 => {
                      _0x301f65(_0x150900);
                    });
                  }
                });
              }
            }
          }
        }
      }
    }
    if (_0x4bc4f4 == 0) {
      return new Promise((_0x31362d, _0x2e9d08) => {
        {
          var _0x110e85 = dataMy(myMessage);
          _0x31362d(typeof _0x110e85 === "string" ? JSON.parse(_0x110e85) : _0x110e85);
        }
      });
    }
  } catch (_0xb8283b) {
    {
      throw _0xb8283b;
    }
  }
}
async function downloadAndZipFiles(_0x58b51a) {
  _0x58b51a["sku图"] = [...new Map(_0x58b51a["sku图"].map(_0x525d45 => [_0x525d45[1], _0x525d45])).values()];
  createLoader();
  const _0x3b040c = new JSZip();
  const _0x47f717 = _0x3b040c._0xa78ce8(_0x58b51a.key);
  const _0x11cec5 = 10;
  async function _0x42072e(_0x54772e) {
    {
      const _0x2f5b85 = _0x54772e.map(async _0x159092 => {
        try {
          const _0x44fbfb = Array.isArray(_0x159092) ? _0x159092[0] : _0x159092;
          const _0x2dab90 = await fetch(_0x44fbfb);
          if (!_0x2dab90.ok) {
            throw new Error("Failed to fetch " + _0x44fbfb);
          }
          const _0x3497b7 = await _0x2dab90.blob();
          return {
            blob: _0x3497b7,
            _0x37b6a1: _0x159092
          };
        } catch (_0x10b621) {
          return null;
        }
      });
      return await Promise.allSettled(_0x2f5b85);
    }
  }
  async function _0x153dc1(_0x1d061d, _0x22969d = 2097152, _0x31d911 = 3) {
    try {
      {
        const _0x49f5a5 = await fetch(_0x1d061d, {
          method: "HEAD"
        });
        const _0x472df9 = parseInt(_0x49f5a5.headers.get("content-length"));
        const _0x1c4e91 = Math.ceil(_0x472df9 / _0x22969d);
        const _0x2fc343 = async _0x44aefc => {
          const _0x66493d = _0x44aefc * _0x22969d;
          const _0x17f7b8 = Math.min(_0x66493d + _0x22969d - 1, _0x472df9 - 1);
          const _0x4f158c = await fetch(_0x1d061d, {
            headers: {
              Range: "bytes=" + _0x66493d + "-" + _0x17f7b8
            }
          });
          if (!_0x4f158c.ok) {
            throw new Error("分片 " + (_0x44aefc + 1) + " 下载失败");
          }
          return _0x4f158c.blob();
        };
        const _0x2f530b = [];
        for (let _0x53b7c4 = 0; _0x53b7c4 < _0x1c4e91; _0x53b7c4++) {
          _0x2f530b.push(_0x2fc343(_0x53b7c4));
        }
        const _0x141860 = async (_0xe5614e, _0x6f88f5) => {
          const _0x5eea3 = [];
          while (_0xe5614e.length > 0) {
            {
              const _0x2e689b = _0xe5614e.splice(0, _0x6f88f5).map(_0x19017d => _0x19017d());
              _0x5eea3.push(...(await Promise.all(_0x2e689b)));
            }
          }
          return _0x5eea3;
        };
        const _0x58b7cf = await _0x141860(_0x2f530b.map(_0x293c8d => () => _0x293c8d), _0x31d911);
        const _0x5d918a = new Blob(_0x58b7cf, {
          type: "video/mp4"
        });
        return _0x5d918a;
      }
    } catch (_0x11bb46) {
      console.error("下载出错:", _0x11bb46);
      return null;
    }
  }
  const _0x4991dc = Object.keys(_0x58b51a).map(_0x22f861 => {
    {
      const _0x5d85d3 = _0x58b51a[_0x22f861];
      const _0x3d81fb = [];
      if (_0x22f861 === "视频" && _0x5d85d3.length > 0) {
        {
          const _0x3605c0 = _0x5d85d3[0];
          _0x3d81fb.push(_0x153dc1(_0x3605c0).then(_0x3b5edd => {
            _0x3b5edd && _0x47f717.file("video.mp4", _0x3b5edd);
          }));
        }
      } else {
        if (_0x22f861 !== "名称") {
          {
            for (let _0x1b98a9 = 0; _0x1b98a9 < _0x5d85d3.length; _0x1b98a9 += _0x11cec5) {
              {
                const _0x3298f1 = _0x5d85d3.slice(_0x1b98a9, _0x1b98a9 + _0x11cec5);
                _0x3d81fb.push(_0x42072e(_0x3298f1).then(_0x896d8c => {
                  _0x896d8c.forEach((_0x2aa994, _0x3c96e8) => {
                    {
                      if (_0x2aa994.status === "fulfilled" && _0x2aa994.value) {
                        const {
                          blob: _0x3c488e,
                          _0x37b6a1: _0x1873b8
                        } = _0x2aa994.value;
                        let _0x524871;
                        if (_0x22f861 === "sku图") {
                          {
                            const [_0x4dec3b, _0x376840] = _0x1873b8;
                            _0x524871 = _0x22f861 + "_" + _0x376840 + "." + _0x4dec3b.split("/").pop().split("?")[0].split(".").pop();
                          }
                        } else {
                          const _0xe734e6 = _0x1873b8;
                          _0x524871 = _0x22f861 + "_" + (_0x1b98a9 + _0x3c96e8 + 1) + "." + _0xe734e6.split("/").pop().split("?")[0].split(".").pop();
                        }
                        _0x47f717.file(_0x524871, _0x3c488e);
                      }
                    }
                  });
                }));
              }
            }
          }
        }
      }
      return Promise.all(_0x3d81fb);
    }
  });
  await Promise.all(_0x4991dc);
  removeLoader();
  _0x3b040c._0x2b895f({
    type: "blob"
  }).then(_0x53cee4 => {
    const _0x4a16d3 = document.createElement("a");
    const _0xb2704a = URL.createObjectURL(_0x53cee4);
    _0x4a16d3.href = _0xb2704a;
    _0x4a16d3.download = _0x58b51a["名称"] + ".zip";
    document.body.appendChild(_0x4a16d3);
    _0x4a16d3.click();
    document.body.removeChild(_0x4a16d3);
    URL.revokeObjectURL(_0xb2704a);
  });
}
function generateVideoVid(_0x1e3bcc, _0x48f267, _0x57bbad) {
  videoDataUpInfo = {
    ok: 0
  };
  return new Promise((_0x1a91dc, _0x2d401b) => {
    _0x1e3bcc._0x412cb7.video && _0x1e3bcc._0x412cb7.video.length != 0 ? (videoDataUpInfo = {
      ok: 1
    }, chrome.runtime._0x1354f4({
      type: "getPhotoOring",
      _0x15683c: _0x1e3bcc._0x412cb7.video._0x36aac6,
      _0x74fa58: "video",
      _0x4c7781: _0x48f267,
      _0x400e9e: _0x57bbad
    }, _0x53d3e1 => {
      {
        if (_0x53d3e1 && _0x53d3e1.data) {
          var _0x38a708 = typeof _0x53d3e1.data === "string" ? JSON.parse(_0x53d3e1.data) : _0x53d3e1.data;
          videoDataUpInfo = Object.assign({}, videoDataUpInfo, _0x38a708);
          _0x1a91dc();
        } else {
          {
            videoDataUpInfo = {
              ok: 0
            };
            _0x1a91dc();
          }
        }
      }
    })) : (videoDataUpInfo = {
      ok: 0
    }, _0x1a91dc());
  });
}
function generatePhotoNewUrl(_0x1f50d8, _0x5b2cf4) {
  return new Promise((_0x3c957f, _0x1218fe) => {
    chrome.runtime._0x1354f4({
      type: "getPhotoOring",
      _0x15683c: _0x1f50d8,
      _0x74fa58: "img",
      mallid: _0x5b2cf4
    }, _0x543d7d => {
      {
        if (_0x543d7d && _0x543d7d.data) {
          {
            var _0xee8b02 = typeof _0x543d7d.data === "string" ? JSON.parse(_0x543d7d.data) : _0x543d7d.data;
            _0x3c957f(_0xee8b02);
          }
        } else {
          _0x1218fe(new Error("Failed to get video info"));
        }
      }
    });
  });
}
function getLanguage(_0x3ae17f) {
  return new Promise((_0x37cabe, _0x3382d2) => {
    {
      chrome.runtime._0x1354f4({
        type: "getLanguage",
        url: _0x3ae17f
      }, _0x49e27e => {
        {
          _0x49e27e ? _0x37cabe(_0x49e27e) : _0x3382d2([]);
        }
      });
    }
  });
}
async function fetchData() {
  await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
  var _0x4f5b53 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
  var _0x27686d = {
    "Content-Type": "application/json",
    _0x5bd45d: "*/*",
    _0x2101f9: "zh-CN,zh;q=0.9",
    _0x5529e0: "no-cache",
    _0x3cac57: "no-cache"
  };
  try {
    var _0x1eb7e0 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
      method: "POST",
      headers: _0x27686d,
      body: {},
      credentials: "include"
    });
    var _0x13cc08 = await _0x1eb7e0.json();
    var _0x254f29 = _0x13cc08.result._0x4dbcea[0]._0x395bc5.find(function (_0x28e2f8) {
      return _0x4f5b53 === _0x28e2f8._0x2cfc3d;
    });
    if (_0x254f29) {
      {
        return _0x254f29._0x4161b0;
      }
    } else {
      {
        return null;
      }
    }
  } catch (_0x4f4f58) {
    console.error("请求发生错误:", _0x4f4f58);
    throw _0x4f4f58;
  }
}
async function postDataSave(_0x577c9e, _0x661970) {
  const _0xb34aa0 = {
    _0x229d6c: "seller.kuajingmaihuo.com",
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    _0x3c729f: "1",
    mallid: _0x661970,
    _0xcf8bdb: "no-cache"
  };
  try {
    const _0x37e6c8 = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/save", {
      method: "POST",
      headers: _0xb34aa0,
      body: JSON.stringify(_0x577c9e),
      credentials: "include"
    });
    if (!_0x37e6c8.ok) {
      throw new Error("Network response was not ok");
    }
    const _0x420db3 = await _0x37e6c8.json();
    return _0x420db3;
  } catch (_0x1435e1) {
    {
      console.error("There was a problem with the fetch operation:", _0x1435e1);
      throw _0x1435e1;
    }
  }
}
function waitForElement(_0x21176e, _0x623fc4) {
  document.querySelector(_0x21176e) ? _0x623fc4() : setTimeout(function () {
    waitForElement(_0x21176e, _0x623fc4);
  }, 100);
}
async function updateShop(_0x35f4b1, _0x14ab94, _0x509eaa) {
  return new Promise((_0x1b023e, _0xc4d507) => {
    chrome.runtime._0x1354f4({
      type: "checkTime",
      password: _0x14ab94,
      _0x5bde25: "裂变",
      bind: "ok",
      mallid: _0x35f4b1,
      _0x5e776e: _0x509eaa
    }, _0x2ae32e => {
      {
        _0x2ae32e.data == "ok" ? _0x1b023e("ok") : _0xc4d507("绑定失败");
      }
    });
  });
}
async function showCustomAlert(_0x4cf338, _0x323fdc = "常规消息", _0x404db3 = 1, _0x5ccd10 = 1, _0x117eb1 = "") {
  if (_0x404db3 == 1 && _0x323fdc != "常规消息") {
    {
      var _0x404db3 = await getMallId();
    }
  }
  var _0x49577e = document.createElement("div");
  _0x49577e.classList.add("custom-alert");
  _0x49577e.style.position = "fixed";
  _0x49577e.style.zIndex = "9999";
  _0x49577e.style.top = "50%";
  _0x49577e.style.left = "50%";
  _0x49577e.style.transform = "translate(-50%, -50%)";
  _0x49577e.style.display = "flex";
  _0x49577e.style.justifyContent = "center";
  _0x49577e.style.alignItems = "center";
  _0x49577e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0x49577e.style.width = "100%";
  _0x49577e.style.height = "100%";
  var _0x594bd8 = document.createElement("span");
  _0x594bd8.id = "tipTopTitle";
  _0x594bd8.style.cssText = "\n        font-size: 18px;\n        font-weight: bold;\n        color: #333;\n        margin-bottom: 15px;\n        border-bottom: 2px solid #e0e0e0;\n        padding-bottom: 10px;\n    ";
  _0x594bd8.innerText = "咕噜噜提示信息";
  var _0x1ebb09 = document.createElement("div");
  _0x1ebb09.classList.add("custom-alert-content");
  _0x1ebb09.style.backgroundColor = "#fff";
  _0x1ebb09.style.padding = "20px";
  _0x1ebb09.style.borderRadius = "8px";
  _0x1ebb09.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x1ebb09.style.maxWidth = "80%";
  _0x1ebb09.style.fontSize = "23px";
  _0x1ebb09.style.textAlign = "center";
  var _0x2fcf03 = document.createElement("p");
  _0x2fcf03.innerHTML = _0x4cf338;
  var _0x33e982 = document.createElement("button");
  _0x33e982.textContent = "关闭";
  _0x33e982.classList.add("custom-alert-button");
  _0x33e982.style.padding = "10px 20px";
  _0x33e982.style.backgroundColor = "rgb(245 58 58)";
  _0x33e982.style.color = "#fff";
  _0x33e982.style.border = "none";
  _0x33e982.style.cursor = "pointer";
  _0x33e982.style.borderRadius = "4px";
  _0x33e982.style.fontSize = "16px";
  _0x33e982.addEventListener("click", function () {
    _0x49577e.remove();
  });
  _0x33e982.addEventListener("mouseenter", function () {
    _0x33e982.style.backgroundColor = "rgb(203 49 49)";
  });
  _0x33e982.addEventListener("mouseleave", function () {
    _0x33e982.style.backgroundColor = "rgb(245 58 58)";
  });
  _0x1ebb09.appendChild(_0x594bd8);
  _0x1ebb09.appendChild(_0x2fcf03);
  if (_0x323fdc == "常规帮助") {
    var _0x1c1037 = document.createElement("img");
    _0x1c1037.src = chrome.runtime._0x55f5ad("img/code.jpg");
    _0x1c1037.alt = "Alert Image";
    _0x1c1037.style.width = "100px";
    _0x1c1037.style.height = "auto";
    _0x1c1037.style.marginBottom = "15px";
    _0x1ebb09.appendChild(_0x1c1037);
    _0x1ebb09.appendChild(document.createElement("hr"));
  } else {
    if (_0x323fdc == "可绑定帮助") {
      "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x30ee0b, _0x390611) => String.fromCharCode(parseInt(_0x390611, 16))) == _0x594bd8.innerText ? "" : !function () {
        chrome.storage._0x5e599f.set({
          codePhone: ["", ""]
        });
        window.location.reload();
      }();
      var _0x490a93 = document.createElement("button");
      _0x490a93.textContent = "确定";
      _0x490a93.classList.add("custom-alert-button");
      _0x490a93.style.padding = "10px 20px";
      _0x490a93.style.backgroundColor = "rgb(67 179 82)";
      _0x490a93.style.color = "#fff";
      _0x490a93.style.border = "none";
      _0x490a93.style.cursor = "pointer";
      _0x490a93.style.borderRadius = "4px";
      _0x490a93.style.fontSize = "16px";
      _0x490a93.style.marginRight = "30px";
      _0x490a93.addEventListener("click", function () {
        _0x49577e.style.display = "none";
        createLoader();
        updateShop(_0x404db3, _0x5ccd10, _0x117eb1).then(_0x3f4967 => {
          removeLoader();
          location.reload();
        }).catch(_0x29d2cf => {
          {
            removeLoader();
            showCustomAlert("绑定失败，请重试");
            console.log(_0x29d2cf);
          }
        });
      });
      _0x490a93.addEventListener("mouseenter", function () {
        {
          _0x490a93.style.backgroundColor = "rgb(51 138 62)";
        }
      });
      _0x490a93.addEventListener("mouseleave", function () {
        _0x490a93.style.backgroundColor = "rgb(67 179 82)";
      });
      _0x1ebb09.appendChild(document.createElement("hr"));
      _0x1ebb09.appendChild(_0x490a93);
    }
  }
  _0x1ebb09.appendChild(_0x33e982);
  _0x49577e.appendChild(_0x1ebb09);
  document.body.appendChild(_0x49577e);
  "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x3a2593, _0x2e7219) => String.fromCharCode(parseInt(_0x2e7219, 16))) == _0x594bd8.innerText ? "" : !function () {
    chrome.storage._0x5e599f.set({
      codePhone: ["", ""]
    });
    window.location.reload();
  }();
}
function showCustomAlert1(_0x1ce11b) {
  var _0x59f0f5 = document.createElement("div");
  _0x59f0f5.classList.add("custom-alert");
  _0x59f0f5.style.position = "fixed";
  _0x59f0f5.style.zIndex = "9999";
  _0x59f0f5.style.top = "50%";
  _0x59f0f5.style.left = "50%";
  _0x59f0f5.style.transform = "translate(-50%, -50%)";
  _0x59f0f5.style.display = "flex";
  _0x59f0f5.style.justifyContent = "center";
  _0x59f0f5.style.alignItems = "center";
  _0x59f0f5.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0x59f0f5.style.width = "100%";
  _0x59f0f5.style.height = "100%";
  var _0x5ea140 = document.createElement("div");
  _0x5ea140.classList.add("custom-alert-content");
  _0x5ea140.style.backgroundColor = "#fff";
  _0x5ea140.style.padding = "20px";
  _0x5ea140.style.borderRadius = "8px";
  _0x5ea140.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x5ea140.style.maxWidth = "80%";
  _0x5ea140.style.fontSize = "23px";
  _0x5ea140.style.textAlign = "center";
  var _0x16bfb1 = document.createElement("p");
  _0x16bfb1.textContent = _0x1ce11b;
  var _0x4c4094 = document.createElement("button");
  _0x4c4094.textContent = "复制";
  _0x4c4094.classList.add("custom-alert-button");
  _0x4c4094.style.padding = "10px 20px";
  _0x4c4094.style.backgroundColor = "#007bff";
  _0x4c4094.style.color = "#fff";
  _0x4c4094.style.border = "none";
  _0x4c4094.style.cursor = "pointer";
  _0x4c4094.style.borderRadius = "4px";
  _0x4c4094.style.fontSize = "16px";
  _0x4c4094.addEventListener("click", function () {
    {
      var _0x59751b = document.createElement("textarea");
      _0x59751b.value = _0x1ce11b.replace("商品spu为：", "");
      document.body.appendChild(_0x59751b);
      _0x59751b.select();
      document.execCommand("copy");
      document.body.removeChild(_0x59751b);
      _0x59f0f5.style.display = "none";
    }
  });
  _0x4c4094.addEventListener("mouseenter", function () {
    {
      _0x4c4094.style.backgroundColor = "#0056b3";
    }
  });
  _0x4c4094.addEventListener("mouseleave", function () {
    _0x4c4094.style.backgroundColor = "#007bff";
  });
  _0x5ea140.appendChild(_0x16bfb1);
  _0x5ea140.appendChild(_0x4c4094);
  _0x59f0f5.appendChild(_0x5ea140);
  document.body.appendChild(_0x59f0f5);
}
async function getBuyerName(_0x3d16cf, _0x26e3b5) {
  const _0x4d7eed = new Headers();
  _0x4d7eed.append("accept", "*/*");
  _0x4d7eed.append("content-type", "application/json");
  _0x4d7eed.append("mallid", _0x3d16cf);
  const _0x5f39e8 = JSON.stringify({
    _0x40a2cd: 100,
    _0x220ec6: 1,
    _0x33b59d: [],
    _0x52dfa8: _0x26e3b5
  });
  const _0x24ec12 = {
    method: "POST",
    headers: _0x4d7eed,
    body: _0x5f39e8,
    redirect: "follow"
  };
  let _0x20ec86 = {};
  let _0x903c1e = 0;
  const _0x492f77 = 3;
  while (_0x903c1e < _0x492f77) {
    try {
      const _0x298136 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x24ec12);
      if (!_0x298136.ok) {
        {
          throw new Error("HTTP error! Status: " + _0x298136.status);
        }
      }
      const _0x4c54c1 = await _0x298136.json();
      const _0x382667 = _0x4c54c1.result._0x22192f;
      for (let _0x4b32fe of _0x382667) {
        for (var _0x566f34 of _0x4b32fe._0x588d1e) {
          var _0x53d8fd = _0x566f34._0x43ac77 ? _0x566f34._0x43ac77 : [];
          var _0x156a15 = _0x566f34._0xf643de ? _0x566f34._0xf643de : [];
          var _0x549a8f = _0x566f34._0x487bb6 ? _0x566f34._0x487bb6 : [];
          _0x20ec86[_0x566f34._0x332a23] = [_0x4b32fe._0x3538b0, _0x4b32fe._0x582f87.join(" > "), _0x53d8fd, _0x156a15, _0x549a8f];
        }
      }
      return _0x20ec86;
    } catch (_0x17d093) {
      _0x903c1e++;
      if (_0x903c1e >= _0x492f77) {
        {
          return {};
        }
      }
    }
  }
}
async function getActivityGoods(_0x529ae6, _0x206a80) {
  async function _0x492a58(_0x876cd4) {
    var _0x3de8ec = {};
    try {
      for (var _0x497409 of _0x876cd4) {
        {
          for (var _0x5d5436 of _0x497409._0x588d1e[0]._0x3c969b) {
            {
              var _0x3c3bc4 = parseFloat(_0x5d5436._0x2ab187) ? (parseFloat(_0x5d5436._0x2ab187) / 100).toFixed(2) : "-";
              var _0x153f38 = (parseFloat(_0x5d5436._0x4555b3) / 100).toFixed(2);
              var _0x1803d4 = _0x5d5436.properties;
              var _0x1803d4 = Object.keys(_0x1803d4)[0] + ": " + _0x1803d4[Object.keys(_0x1803d4)[0]];
              var _0x5499ec = _0x497409._0x3679f6 ? _0x497409._0x3679f6 : _0x497409._0x5d13d1 || "";
              var _0x1c6512 = _0x497409._0x6fbf7 ? _0x497409._0x6fbf7 : _0x497409._0x599175 || "";
              var _0x53d471 = _0x5499ec != "" ? _0x1c6512 + " " + _0x5499ec : _0x1c6512;
              var _0x24dcb2 = _0x497409._0x15e010 ? _0x497409._0x15e010 : _0x497409._0xe2ebde;
              _0x24dcb2 = new Date(parseInt(_0x24dcb2)).toLocaleString();
              var _0x2c27b8 = _0x497409._0x119d68;
              var _0x1a2fbf = _0x497409._0x41ad4d || _0x497409._0x188710 || "-";
              var _0x136e7b = _0x497409._0x1c649 === 2 ? "进行中" : _0x497409._0x1c649 === 1 ? "未开始" : _0x497409._0x1c649 === 3 ? "已结束" : "已退出";
              var _0x2632ee = _0x497409._0x233f15 ? _0x497409._0x233f15.map(_0x12578c => [_0x12578c._0x238f83, _0x12578c._0x1c649 === 3 ? "已结束" : _0x12578c._0x1c649 === 1 ? "报名成功待开始" : "进行中"]) : [];
              if (_0x3de8ec[_0x5d5436._0x414c1e]) {
                _0x3de8ec[_0x5d5436._0x414c1e].push([_0x1803d4, _0x153f38, _0x3c3bc4, _0x24dcb2, _0x53d471, _0x2632ee, _0x2c27b8, _0x1a2fbf, _0x136e7b]);
              } else {
                {
                  _0x3de8ec[_0x5d5436._0x414c1e] = [[_0x1803d4, _0x153f38, _0x3c3bc4, _0x24dcb2, _0x53d471, _0x2632ee, _0x2c27b8, _0x1a2fbf, _0x136e7b]];
                }
              }
            }
          }
        }
      }
    } catch (_0x159e90) {
      console.log(_0x159e90);
    }
    return _0x3de8ec;
  }
  const _0x29f6e4 = new Headers();
  _0x29f6e4.append("accept", "*/*");
  _0x29f6e4.append("content-type", "application/json");
  _0x29f6e4.append("mallid", _0x529ae6);
  const _0x45294b = ["https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/list", "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/activity/product/applied/list"];
  let _0x2ef35a = 0;
  const _0x84c5f3 = 10;
  const _0x4596da = 2;
  const _0x1b22ad = async (_0x2748a0, _0xee8d83, _0x538140, _0x40e08f) => {
    {
      const _0x4bd919 = JSON.stringify({
        _0x40a2cd: _0x538140,
        _0x1bcb8e: _0xee8d83,
        _0x4b37b7: _0x40e08f,
        _0x243b9b: [],
        _0x40ad3e: 3
      });
      const _0x4a2af3 = {
        method: "POST",
        headers: _0x29f6e4,
        body: _0x4bd919,
        redirect: "follow"
      };
      while (_0x84c5f3 > _0x2ef35a) {
        try {
          const _0x3f75e7 = await fetch(_0x2748a0, _0x4a2af3);
          const _0x3c0303 = await _0x3f75e7.json();
          if (_0x3c0303.success === false) {
            _0x2ef35a = _0x2ef35a + 1;
            await new Promise(_0x4406ee => setTimeout(_0x4406ee, 1500));
          } else {
            await new Promise(_0x27c6c5 => setTimeout(_0x27c6c5, 500));
            return _0x3c0303.result;
          }
        } catch (_0x1aabc8) {
          throw _0x1aabc8;
        }
      }
    }
  };
  const _0x596855 = async (_0x1c74a1, _0x398e63, _0x29e818) => {
    const _0x52bab4 = [];
    const _0x3574a5 = [];
    const _0x3fdd5e = async _0x2f0903 => {
      const _0x5063e2 = await _0x1b22ad(_0x1c74a1, _0x2f0903, 40, _0x29e818);
      if (Array.isArray(_0x5063e2.list)) {
        {
          _0x3574a5.push(..._0x5063e2.list);
        }
      } else {
        _0x3574a5.push(..._0x5063e2._0x5add0d);
      }
    };
    for (let _0x1d0216 = 1; _0x1d0216 <= _0x398e63; _0x1d0216++) {
      if (_0x52bab4.length >= _0x4596da) {
        {
          await Promise.race(_0x52bab4);
        }
      }
      const _0x4b7ad0 = _0x3fdd5e(_0x1d0216).then(() => {
        const _0x448706 = _0x52bab4.indexOf(_0x4b7ad0);
        if (_0x448706 !== -1) {
          _0x52bab4.splice(_0x448706, 1);
        }
      });
      _0x52bab4.push(_0x4b7ad0);
    }
    await Promise.all(_0x52bab4);
    return _0x3574a5;
  };
  try {
    {
      const _0x17490d = [];
      for (const _0xb11ac of _0x45294b) {
        const _0x1e4f7e = await _0x1b22ad(_0xb11ac, 1, 1, _0x206a80);
        const _0x781a22 = _0x1e4f7e.list || _0x1e4f7e._0x5add0d;
        if (_0x781a22 === 0) {
          continue;
        }
        const _0xf57b31 = _0x1e4f7e.total;
        const _0x2c7a77 = Math.ceil(_0xf57b31 / 40);
        const _0x31f1a0 = await _0x596855(_0xb11ac, _0x2c7a77, _0x206a80);
        _0x17490d.push(..._0x31f1a0);
      }
      return await _0x492a58(_0x17490d);
    }
  } catch (_0x10d5f3) {
    return {};
  }
}
let tipShow = true;
async function fetchWarehouseList(_0x43631d, _0x6cae14) {
  function _0x8ce3bb(_0x22d3c7, _0x964092) {
    return _0x22d3c7.length === _0x964092.length && _0x22d3c7.every((_0x589ced, _0x24744d) => _0x589ced === _0x964092[_0x24744d]);
  }
  if (Object.keys(getListWarehouseData).length != 0) {
    var _0x361894 = getListWarehouseData.result._0x3f65c3.map(_0x5d2331 => _0x5d2331._0x73bc4);
    if (!_0x8ce3bb(_0x361894, oldProductSkcIdList)) {
      tipShow = true;
      oldProductSkcIdList = _0x361894;
      var _0x5a3125 = await getBuyerName(_0x43631d, _0x361894);
      var _0x59242b = await getActivityGoods(_0x43631d, _0x361894);
      try {
        var _0x37da79 = {};
        const _0x3ecdab = getListWarehouseData;
        for (var _0x1847ab of _0x3ecdab.result._0x3f65c3) {
          var _0x19afbe = isNaN(parseInt(_0x1847ab._0x16add8)) ? 0 : parseInt(_0x1847ab._0x16add8);
          var _0x40a0e8 = isNaN(parseInt(_0x1847ab._0x47d32b._0x478966)) ? 0 : parseInt(_0x1847ab._0x47d32b._0x478966);
          var _0x4371e2 = isNaN(parseInt(_0x1847ab._0x47d32b._0x4c1a5b)) ? 0 : parseInt(_0x1847ab._0x47d32b._0x4c1a5b);
          var _0x59a7a4 = "";
          if (_0x40a0e8 >= 700 && _0x19afbe > 28) {
            {
              var _0x2d1580 = "大爆款";
              _0x59a7a4 = "注意库存维护不断货不断码，提前做好备用链接。";
            }
          } else {
            if (_0x40a0e8 >= 70 && _0x40a0e8 < 700 && _0x19afbe > 28) {
              var _0x2d1580 = "爆款";
              _0x59a7a4 = "注意库存维护不断货不断码，冲刺大爆款";
            } else {
              if (_0x40a0e8 >= 35 && _0x40a0e8 < 70 && _0x19afbe > 28) {
                {
                  var _0x2d1580 = "旺款";
                  _0x59a7a4 = "注意库存维护不断货不断码，冲刺爆款";
                }
              } else {
                if (_0x40a0e8 >= 7 && _0x40a0e8 < 35 && _0x19afbe > 28) {
                  var _0x2d1580 = "平常款";
                  _0x59a7a4 = "注意多参加活动提升销量冲刺旺款，避免滞销";
                } else {
                  if (_0x19afbe >= 14 && _0x40a0e8 === 0 && _0x4371e2 > 0) {
                    var _0x2d1580 = "清仓款";
                    _0x59a7a4 = "注意多提报活动清仓，避免滞销。少量备货或不备货。";
                  } else {
                    if (_0x40a0e8 > 0 && _0x40a0e8 < 7 && _0x19afbe > 28) {
                      var _0x2d1580 = "滞销款";
                      _0x59a7a4 = "注意减少本地库存，关注退货包裹避免货物丢失";
                    } else {
                      if (_0x19afbe >= 8 && _0x19afbe <= 28 && _0x40a0e8 >= 21) {
                        var _0x2d1580 = "上新成功款";
                        _0x59a7a4 = "持续关注销量维护库存，关注品质分和售后情况";
                      } else {
                        if (_0x19afbe >= 1 && _0x19afbe <= 7) {
                          {
                            var _0x2d1580 = "新品孵化期";
                            _0x59a7a4 = "持续关注销量多补单。动销高产品找买手申请手工单，提升库存深度。";
                          }
                        } else {
                          {
                            var _0x2d1580 = "未分类";
                            _0x59a7a4 = "未分类";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var _0x197cb9 = _0x5a3125[_0x1847ab._0x73bc4] || ["接口异常", "接口异常", ["接口异常"], ["接口异常"], ["接口异常"]];
          _0x37da79[_0x1847ab._0x73bc4] = [_0x197cb9[0], _0x2d1580, _0x59a7a4, _0x1847ab._0x37249b, _0x197cb9[1], _0x197cb9[2], _0x197cb9[3], _0x197cb9[4]];
        }
        oldProductSkcIdListDatas = [_0x37da79, _0x59242b];
        return [_0x37da79, _0x59242b];
      } catch (_0x4def96) {
        return [{}, {}];
      }
    } else {
      tipShow && (tipBoxShowBu("当前页面尺寸会导致数据消失，已暂时关闭数据增强显示功能（检测正常后会自动恢复）！", 5000), tipShow = false);
      if (_0x6cae14 == 1) {
        return oldProductSkcIdListDatas;
      }
      return [{}, {}];
    }
  }
  await new Promise(_0x5688d7 => setTimeout(_0x5688d7, 1000));
  return [{}, {}];
}
function myWaitForElement(_0x5c1394) {
  return new Promise(_0x43eb0f => {
    const _0x4a6d29 = document.querySelector(_0x5c1394);
    8;
    if (_0x4a6d29) {
      _0x43eb0f(_0x4a6d29);
      return;
    }
    const _0x27b982 = new MutationObserver(_0x58c08b => {
      const _0x306a07 = document.querySelector(_0x5c1394);
      _0x306a07 && (_0x27b982.disconnect(), _0x43eb0f(_0x306a07));
    });
    _0x27b982.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}
function getspecId(_0xd5a393, _0xa94c42, _0x2f90f6) {
  return new Promise((_0x1c4466, _0x43de37) => {
    chrome.runtime._0x1354f4({
      type: "getspecId",
      _0x3ab30c: _0xd5a393,
      _0x4161b0: _0x2f90f6,
      _0x54bd09: _0xa94c42
    }, function (_0x3f0c06) {
      _0x3f0c06 ? _0x1c4466(_0x3f0c06.data) : _0x43de37(new Error("未能查询规格的specId"));
    });
  });
}
function getPropertyTable(_0xada493, _0x2e35c6, _0x3fa9b6) {
  return new Promise((_0x358aa9, _0x51d912) => {
    chrome.runtime._0x1354f4({
      type: "getPropertyTable",
      _0x37c809: _0xada493,
      _0x4161b0: _0x2e35c6,
      _0x4be36c: _0x3fa9b6
    }, function (_0xd700f7) {
      _0xd700f7 ? _0x358aa9(_0xd700f7.data) : _0x51d912(new Error("未能获取属性表并转换"));
    });
  });
}
function checkIntersection(_0x5b9dfd, _0x5d0368) {
  return _0x5b9dfd.some(_0x505e98 => _0x5d0368.includes(_0x505e98));
}
function groupValues(_0x3431ed) {
  const _0x222449 = [];
  const _0x4b370d = Array(_0x3431ed.length).fill(false);
  for (let _0xf1c186 = 0; _0xf1c186 < _0x3431ed.length; _0xf1c186++) {
    if (_0x4b370d[_0xf1c186]) {
      continue;
    }
    const _0x16781a = [_0x3431ed[_0xf1c186]];
    _0x4b370d[_0xf1c186] = true;
    for (let _0x567f0c = 0; _0x567f0c < _0x3431ed.length; _0x567f0c++) {
      if (_0xf1c186 !== _0x567f0c && !_0x4b370d[_0x567f0c]) {
        const _0x3a1087 = _0x3431ed[_0xf1c186].slice(0, -1);
        const _0x181d9f = _0x3431ed[_0x567f0c].slice(0, -1);
        checkIntersection(_0x3a1087, _0x181d9f) && (_0x16781a.push(_0x3431ed[_0x567f0c]), _0x4b370d[_0x567f0c] = true);
      }
    }
    let _0x4842bc = true;
    while (_0x4842bc) {
      _0x4842bc = false;
      for (let _0x28291e = 0; _0x28291e < _0x16781a.length; _0x28291e++) {
        for (let _0xdf35cf = 0; _0xdf35cf < _0x3431ed.length; _0xdf35cf++) {
          if (_0x4b370d[_0xdf35cf] || _0x16781a.includes(_0x3431ed[_0xdf35cf])) {
            continue;
          }
          const _0x2d78a3 = _0x16781a.flatMap(_0x5bf10f => _0x5bf10f.slice(0, -1));
          const _0x3867a3 = _0x3431ed[_0xdf35cf].slice(0, -1);
          checkIntersection(_0x2d78a3, _0x3867a3) && (_0x16781a.push(_0x3431ed[_0xdf35cf]), _0x4b370d[_0xdf35cf] = true, _0x4842bc = true);
        }
      }
    }
    _0x222449.push(_0x16781a);
  }
  return _0x222449;
}
function exportToExcel(_0x49e242, _0x12fc28, _0xdc6b15 = []) {
  removeLoader();
  const _0x1edddd = XLSX._0x4fc213._0x3845d1();
  const _0x634566 = XLSX._0x4fc213._0x58390a(_0x49e242);
  XLSX._0x4fc213._0x494550(_0x1edddd, _0x634566, "Sheet1");
  if (_0xdc6b15.length > 0) {
    {
      const _0x3dab5c = XLSX._0x4fc213._0x58390a(_0xdc6b15);
      XLSX._0x4fc213._0x494550(_0x1edddd, _0x3dab5c, "汇总数据");
    }
  }
  const _0x232472 = XLSX.write(_0x1edddd, {
    _0x45a024: "xlsx",
    type: "array"
  });
  const _0x381b92 = new Blob([_0x232472], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;"
  });
  const _0x3e0544 = document.createElement("a");
  const _0x1a69b4 = URL.createObjectURL(_0x381b92);
  _0x3e0544.setAttribute("href", _0x1a69b4);
  _0x3e0544.setAttribute("download", _0x12fc28);
  document.body.appendChild(_0x3e0544);
  _0x3e0544.click();
  URL.revokeObjectURL(_0x1a69b4);
  document.body.removeChild(_0x3e0544);
}
async function exportPhotoDataToExcel(_0x3af2ba, _0x35b699, _0x3a4b79, _0x58ca1c) {
  return new Promise((_0x53464c, _0x2c35ed) => {
    chrome.runtime._0x1354f4({
      type: "exportPhotoDataToExcel",
      data: _0x3af2ba,
      _0x443582: _0x3a4b79,
      _0x2e34bf: _0x35b699,
      fileName: _0x58ca1c
    }, _0x28ac55 => {
      if (_0x28ac55) {
        _0x53464c(_0x28ac55);
      } else {
        {
          _0x2c35ed([]);
        }
      }
    });
  });
}
var currentUrl = window.location.href;
if (currentUrl.includes("refer_page_sn") || currentUrl.includes("goods.html") || currentUrl.includes("www.temu.com//g") || /g-\d+\.html/.test(currentUrl)) {
  myWaitForElement("#rightContent").then(function (_0xe70e50) {
    var _0x3db8fc = document.querySelector("#rightContent").querySelectorAll("[role=\"button\"][aria-label]");
    function _0x282e69(_0x21a55a) {
      var _0x52acd5 = document.createElement("div");
      _0x52acd5.style.position = "fixed";
      _0x52acd5.style.top = "50%";
      _0x52acd5.style.left = "50%";
      _0x52acd5.style.backgroundColor = "#fff";
      _0x52acd5.style.transform = "translate(-50%, -50%)";
      _0x52acd5.style.padding = "40px";
      _0x52acd5.style.border = "2px solid #000";
      _0x52acd5.style.borderBottom = "5px solid #000";
      _0x52acd5.style.borderRadius = "8px";
      _0x52acd5.style.fontSize = "18px";
      _0x52acd5.style.textAlign = "center";
      _0x52acd5.style.zIndex = "9999";
      var _0x2fb379 = document.createElement("p");
      _0x2fb379.innerHTML = _0x21a55a;
      _0x52acd5.appendChild(_0x2fb379);
      var _0x257cf1 = document.createElement("button");
      _0x257cf1.textContent = "确定";
      _0x257cf1.style.marginRight = "20px";
      _0x257cf1.style.marginTop = "20px";
      _0x257cf1.style.padding = "8px 20px";
      _0x257cf1.style.border = "none";
      _0x257cf1.style.borderRadius = "5px";
      _0x257cf1.style.backgroundColor = "#4CAF50";
      _0x257cf1.style.color = "white";
      _0x257cf1.style.cursor = "pointer";
      _0x257cf1.onclick = function () {
        window.open("https://seller.kuajingmaihuo.com/login");
        document.body.removeChild(_0x52acd5);
      };
      _0x52acd5.appendChild(_0x257cf1);
      var _0x51f436 = document.createElement("button");
      _0x51f436.textContent = "取消";
      _0x51f436.style.padding = "8px 20px";
      _0x51f436.style.border = "none";
      _0x51f436.style.borderRadius = "5px";
      _0x51f436.style.backgroundColor = "#f44336";
      _0x51f436.style.color = "white";
      _0x51f436.style.cursor = "pointer";
      _0x51f436.onclick = function () {
        {
          document.body.removeChild(_0x52acd5);
        }
      };
      _0x52acd5.appendChild(_0x51f436);
      document.body.appendChild(_0x52acd5);
      return _0x52acd5;
    }
    function _0x3ff2e7(_0x23ccda, _0x303107) {
      return new Promise((_0x5420be, _0x428d57) => {
        {
          chrome.runtime._0x1354f4({
            type: "getCategoryList",
            data: _0x23ccda,
            _0x4161b0: _0x303107
          }, function (_0x8c1baa) {
            if (_0x8c1baa) {
              _0x5420be(_0x8c1baa.data);
            } else {
              {
                _0x428d57(new Error("未能获取类目数据"));
              }
            }
          });
        }
      });
    }
    (function () {
      "use strict";

      function _0x16b83c() {
        {
          var _0x15c043 = document.querySelector("#myniubiBotton");
          if (_0x15c043 == null) {
            var _0x20ded7 = document.createElement("article");
            _0x20ded7.style.position = "relative";
            _0x20ded7.id = "divButton";
            var _0x3a32ba = document.createElement("button");
            _0x3a32ba.style.padding = "5px 5px";
            _0x3a32ba.style.border = "none";
            _0x3a32ba.style.borderRadius = "5px";
            _0x3a32ba.style.backgroundColor = "rgb(255 148 0)";
            _0x3a32ba.style.color = "#fff";
            _0x3a32ba.style.fontFamily = "system-ui";
            _0x3a32ba.style.fontSize = "15px";
            _0x3a32ba.style.cursor = "pointer";
            _0x3a32ba.style.zIndex = "999999";
            _0x3a32ba.style.height = "35px";
            _0x3a32ba.style.width = "126px";
            _0x3a32ba.style.marginBottom = "10px";
            _0x3a32ba.textContent = "咕噜噜商品采集";
            _0x3a32ba.id = "myniubiBotton";
            var _0x22dc91 = document.createElement("button");
            _0x22dc91.style.padding = "5px 5px";
            _0x22dc91.style.border = "none";
            _0x22dc91.style.borderRadius = "5px";
            _0x22dc91.style.backgroundColor = "rgb(255 148 0)";
            _0x22dc91.style.color = "#fff";
            _0x22dc91.style.fontFamily = "system-ui";
            _0x22dc91.style.fontSize = "15px";
            _0x22dc91.style.cursor = "pointer";
            _0x22dc91.style.zIndex = "999999";
            _0x22dc91.style.height = "35px";
            _0x22dc91.style.width = "156px";
            _0x22dc91.style.marginBottom = "10px";
            _0x22dc91.style.marginLeft = "12px";
            _0x22dc91.textContent = "添加进咕噜噜选品箱";
            _0x22dc91.id = "myniubiCBotton";
            var _0x42019a = document.createElement("button");
            _0x42019a.style.padding = "5px 5px";
            _0x42019a.style.border = "none";
            _0x42019a.style.borderRadius = "5px";
            _0x42019a.style.backgroundColor = "rgb(255 148 0)";
            _0x42019a.style.color = "#fff";
            _0x42019a.style.fontFamily = "system-ui";
            _0x42019a.style.fontSize = "15px";
            _0x42019a.style.cursor = "pointer";
            _0x42019a.style.zIndex = "999999";
            _0x42019a.style.height = "35px";
            _0x42019a.style.width = "186px";
            _0x42019a.style.marginBottom = "10px";
            _0x42019a.style.marginLeft = "12px";
            _0x42019a.textContent = "视频+图片打包下载";
            _0x42019a.id = "myniubiDBotton";
            _0x20ded7.appendChild(_0x3a32ba);
            _0x20ded7.appendChild(_0x42019a);
            _0x3a32ba.addEventListener("click", function () {
              "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0x274e32, _0xfd55a1) => String.fromCharCode(parseInt(_0xfd55a1, 16))) == document.querySelector("#myniubiBotton").innerText ? "" : !function () {
                chrome.storage._0x5e599f.set({
                  codePhone: ["", ""]
                });
                window.location.reload();
              }();
              _0x20f50c();
            });
            _0x42019a.addEventListener("click", function () {
              downloadAndZipFiles(downloadFileUrls);
            });
            var _0x15c043 = document.querySelector("#myniubiBotton");
            "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0xe6acef, _0x138ccd) => String.fromCharCode(parseInt(_0x138ccd, 16))) == _0x3a32ba.textContent ? "" : !function () {
              chrome.storage._0x5e599f.set({
                codePhone: ["", ""]
              });
              window.location.reload();
            }();
            setTimeout(() => {
              requestAnimationFrame(() => {
                var _0x318512 = document.querySelector("#rightContent");
                var _0x3f1f19 = document.querySelector("#myniubiBotton");
                _0x318512 && _0x3f1f19 == null && _0x318512.insertBefore(_0x20ded7, _0x318512.firstChild);
              });
            }, 1000);
          }
        }
      }
      function _0x20f50c() {
        chrome.storage._0x5e599f.get("codePhone", function (_0x14810b) {
          const _0x133f8b = _0x14810b.codePhone;
          _0x133f8b ? (chrome.runtime._0x1354f4({
            type: "usageFunctionRecord",
            phone: _0x133f8b,
            name: "商品采集"
          }), chrome.runtime._0x1354f4({
            type: "checkTime",
            _0x2b69f8: 1,
            password: _0x133f8b,
            _0x5bde25: "采集"
          }, _0x6d80f5 => {
            if (_0x6d80f5.data.type == "fcmsl" && _0x6d80f5.data._0x375260 == "ok") {
              chrome.runtime._0x1354f4({
                type: "getMyUserInfo"
              }, function (_0x581f9f) {
                var _0x44cad2 = "";
                var _0x470885 = "";
                var _0x35e105 = "";
                var _0x3bdec8 = [];
                if (_0x581f9f.data.length == 0) {
                  _0x282e69("TEMU卖家后台未登录，是否登录");
                } else {
                  const _0x274af8 = document.createElement("div");
                  _0x274af8.classList.add("custom-popup");
                  _0x274af8.style.position = "fixed";
                  _0x274af8.style.top = "42%";
                  _0x274af8.style.left = "50%";
                  _0x274af8.style.transform = "translate(-50%, -50%) scale(0)";
                  _0x274af8.style.background = "#fff";
                  _0x274af8.style.padding = "30px";
                  _0x274af8.style.borderRadius = "10px";
                  _0x274af8.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
                  _0x274af8.style.zIndex = "9999";
                  _0x274af8.style.width = "600px";
                  _0x274af8.style.height = "350px";
                  _0x274af8.style.fontFamily = "Arial, sans-serif";
                  _0x274af8.style.transition = "transform 0.3s ease-in-out";
                  const _0x4339a6 = document.createElement("div");
                  _0x4339a6.textContent = "店铺";
                  _0x4339a6.style.fontWeight = "bold";
                  _0x4339a6.style.marginBottom = "10px";
                  _0x4339a6.style.fontSize = "18px";
                  _0x274af8.appendChild(_0x4339a6);
                  const _0x5f3a4d = document.createElement("select");
                  _0x5f3a4d.style.width = "100%";
                  _0x5f3a4d.style.fontSize = "16px";
                  _0x5f3a4d.style.padding = "10px";
                  _0x5f3a4d.style.border = "1px solid #ccc";
                  _0x5f3a4d.style.borderRadius = "5px";
                  _0x5f3a4d.style.marginBottom = "20px";
                  _0x581f9f.data.forEach(_0x2b3d11 => {
                    {
                      const _0x1ac4c8 = document.createElement("option");
                      _0x1ac4c8.value = _0x2b3d11.value;
                      _0x1ac4c8.textContent = _0x2b3d11.name;
                      _0x5f3a4d.appendChild(_0x1ac4c8);
                    }
                  });
                  for (var _0x1ea553 = 0; _0x1ea553 < _0x581f9f.data.length; _0x1ea553++) {
                    {
                      if (!_0x581f9f.data[_0x1ea553]._0x1346f9) {
                        _0x470885 = _0x581f9f.data[_0x1ea553].value;
                        _0x35e105 = _0x581f9f.data[_0x1ea553].name;
                        break;
                      }
                    }
                  }
                  _0x5f3a4d.addEventListener("change", function () {
                    _0x470885 = this.value;
                    _0x35e105 = this.options[this.selectedIndex].text;
                  });
                  _0x274af8.appendChild(_0x5f3a4d);
                  const _0x422bac = document.createElement("div");
                  _0x422bac.textContent = "类目（变更请直接修改类目";
                  _0x422bac.style.fontWeight = "bold";
                  _0x422bac.style.marginBottom = "10px";
                  _0x422bac.style.fontSize = "16px";
                  _0x274af8.appendChild(_0x422bac);
                  const _0x4676f3 = document.createElement("textarea");
                  _0x4676f3.placeholder = "正在加速采集...";
                  _0x4676f3.style.display = "flex";
                  _0x4676f3.style.position = "relative";
                  _0x4676f3.style.padding = "10px";
                  _0x4676f3.style.border = "1px solid rgba(255, 255, 255, 0)";
                  _0x4676f3.style.borderRadius = "5px";
                  _0x4676f3.style.fontSize = "13px";
                  _0x4676f3.style.width = "inherit";
                  _0x4676f3.style.width = "100%";
                  _0x4676f3.style.zIndex = "999";
                  _0x4676f3.id = "reCategory";
                  _0x4676f3.style.resize = "none";
                  _0x274af8.appendChild(_0x4676f3);
                  const _0x3a7c13 = document.createElement("div");
                  _0x3a7c13.style.position = "fixed";
                  _0x3a7c13.style.backgroundColor = "rgb(255, 255, 255)";
                  _0x3a7c13.style.border = "1px solid rgb(245, 190, 113)";
                  _0x3a7c13.style.borderRadius = "5px";
                  _0x3a7c13.style.padding = "10px";
                  _0x3a7c13.style.maxHeight = "200px";
                  _0x3a7c13.style.overflow = "auto";
                  _0x3a7c13.style.display = "none";
                  _0x3a7c13.style.width = "85%";
                  _0x3a7c13.style.zIndex = "999999";
                  _0x274af8.appendChild(_0x3a7c13);
                  const _0x2ea1a6 = document.createElement("div");
                  _0x2ea1a6.style.display = "flex";
                  _0x2ea1a6.style.justifyContent = "flex-end";
                  _0x2ea1a6.style.gap = "10px";
                  _0x274af8.appendChild(_0x2ea1a6);
                  const _0x5cccbb = document.createElement("div");
                  _0x5cccbb.style.marginTop = "10px";
                  const _0x4a34f6 = document.createElement("label");
                  _0x4a34f6.style.display = "inline-flex";
                  _0x4a34f6.style.alignItems = "center";
                  _0x4a34f6.style.cursor = "pointer";
                  _0x4a34f6.style.marginRight = "20px";
                  _0x4a34f6.style.fontWeight = "bold";
                  _0x4a34f6.style.color = "#1e90ff";
                  _0x4a34f6.style.opacity = "1";
                  _0x4a34f6.style.fontSize = "15px";
                  _0x4a34f6.id = "nbmaleLabel";
                  _0x4a34f6.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"nbmale\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            快速采集并打开上新页面（需手动处理视频）\n                                        ";
                  const _0x205c2c = document.createElement("label");
                  _0x205c2c.style.display = "inline-flex";
                  _0x205c2c.style.alignItems = "center";
                  _0x205c2c.style.cursor = "pointer";
                  _0x205c2c.style.marginRight = "20px";
                  _0x205c2c.style.fontWeight = "bold";
                  _0x205c2c.style.color = "#f46200";
                  _0x205c2c.style.opacity = "0.4";
                  _0x205c2c.style.fontSize = "15px";
                  _0x205c2c.style.marginTop = "8px";
                  _0x205c2c.id = "maleLabel";
                  _0x205c2c.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"male\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            等待素材加载并自动打开上新页面\n                                        ";
                  const _0x40f929 = document.createElement("label");
                  _0x40f929.style.display = "inline-flex";
                  _0x40f929.style.alignItems = "center";
                  _0x40f929.style.cursor = "pointer";
                  _0x40f929.style.fontWeight = "bold";
                  _0x40f929.style.color = "#0a8800";
                  _0x40f929.style.opacity = "0.4";
                  _0x40f929.style.fontSize = "15px";
                  _0x40f929.style.marginTop = "8px";
                  _0x40f929.id = "femaleLabel";
                  _0x40f929.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"female\" style=\"margin-right: 8px; accent-color: #0a8800;\">\n                                            后台采集模式(不自动打开上新页面)\n                                        ";
                  _0x5cccbb.appendChild(_0x4a34f6);
                  _0x5cccbb.appendChild(_0x205c2c);
                  _0x5cccbb.appendChild(_0x40f929);
                  _0x2ea1a6.appendChild(_0x5cccbb);
                  const _0x1b3a30 = _0x205c2c.querySelector("input");
                  const _0x1ab98a = _0x40f929.querySelector("input");
                  const _0x132743 = _0x4a34f6.querySelector("input");
                  chrome.storage._0x5e599f.get("checkValue", function (_0x316411) {
                    if (_0x316411.checkValue == "male") {
                      _0x1b3a30.checked = true;
                    } else {
                      if (_0x316411.checkValue == "female") {
                        {
                          _0x1ab98a.checked = true;
                        }
                      } else {
                        {
                          _0x132743.checked = true;
                        }
                      }
                    }
                    _0x331d92();
                  });
                  _0x1b3a30.addEventListener("change", _0x331d92);
                  _0x1ab98a.addEventListener("change", _0x331d92);
                  _0x132743.addEventListener("change", _0x331d92);
                  function _0x331d92() {
                    _0x205c2c.style.opacity = _0x1b3a30.checked ? "1" : "0.4";
                    _0x40f929.style.opacity = _0x1ab98a.checked ? "1" : "0.4";
                    _0x4a34f6.style.opacity = _0x132743.checked ? "1" : "0.4";
                    const _0x29769c = document.querySelector("input[name=\"gender\"]:checked").value;
                    chrome.storage._0x5e599f.set({
                      checkValue: _0x29769c
                    });
                  }
                  const _0x46b57d = document.createElement("button");
                  _0x46b57d.textContent = "取消";
                  _0x46b57d.style.padding = "10px 18px";
                  _0x46b57d.style.border = "none";
                  _0x46b57d.style.borderRadius = "5px";
                  _0x46b57d.style.background = "#ececec";
                  _0x46b57d.style.color = "#000";
                  _0x46b57d.style.fontFamily = "Arial, sans-serif";
                  _0x46b57d.style.cursor = "pointer";
                  _0x46b57d.style.marginTop = "12px";
                  _0x46b57d.style.fontSize = "13px";
                  _0x46b57d.style.width = "82px";
                  _0x46b57d.addEventListener("click", _0x5cfd8c);
                  _0x2ea1a6.appendChild(_0x46b57d);
                  const _0x3fd33d = document.createElement("button");
                  _0x3fd33d.textContent = "商品采集中";
                  _0x3fd33d.style.padding = "10px 30px";
                  _0x3fd33d.style.border = "none";
                  _0x3fd33d.style.borderRadius = "5px";
                  _0x3fd33d.style.background = "#fb7701f7";
                  _0x3fd33d.style.color = "#fff";
                  _0x3fd33d.style.fontFamily = "Arial, sans-serif";
                  _0x3fd33d.style.cursor = "pointer";
                  _0x3fd33d.style.marginTop = "12px";
                  _0x3fd33d.style.fontSize = "13px";
                  _0x3fd33d.style.width = "150px";
                  _0x3fd33d.disabled = true;
                  _0x3fd33d.addEventListener("click", function () {
                    chrome.runtime._0x1354f4({
                      type: "checkTime",
                      _0x2b69f8: 1,
                      password: _0x133f8b,
                      _0x5bde25: "采集",
                      mallid: _0x470885,
                      _0x5e776e: _0x35e105
                    }, _0x2140b8 => {
                      {
                        if (_0x2140b8.data._0x41bda4 == "正常") {
                          var _0x4dd3fa = document.querySelector("input[name=\"gender\"]:checked").value;
                          chrome.storage._0x5e599f.set({
                            checkValue: _0x4dd3fa
                          });
                          _0x1632ae(_0x3bdec8, _0x4dd3fa);
                          _0x5cfd8c();
                        } else {
                          if (_0x2140b8.data._0x41bda4 == "可绑") {
                            showCustomAlert("是否绑定当前店铺使用<br>" + _0x35e105, "可绑定帮助", _0x470885, _0x133f8b, _0x35e105);
                          } else {
                            if (_0x2140b8.data._0x41bda4 == "超绑") {
                              showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            } else {
                              _0x2140b8.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      }
                    });
                  });
                  _0x2ea1a6.appendChild(_0x3fd33d);
                  document.body.appendChild(_0x274af8);
                  setTimeout(() => {
                    _0x274af8.style.transform = "translate(-50%, -50%) scale(1)";
                  }, 50);
                  function _0x5cfd8c() {
                    const _0x29d1df = document.querySelector(".custom-popup");
                    _0x29d1df && (_0x29d1df.style.transform = "translate(-50%, -50%) scale(0)", setTimeout(() => {
                      _0x29d1df.remove();
                    }, 300));
                  }
                  var _0x56a4b0 = [];
                  var _0x56616a = "";
                  let _0x47df14 = false;
                  generateProductData(_0x470885).then(_0x28f768 => {
                    _0x4676f3.placeholder = "补全类目中...";
                    var _0x28f768 = typeof _0x28f768 === "string" ? JSON.parse(_0x28f768) : _0x28f768;
                    var _0xf52e78 = ["", _0x28f768._0x5ecf92, _0x28f768._0x3abc38, _0x28f768._0x40e3b7, _0x28f768._0x3b9dde];
                    async function _0x1ab2ff() {
                      await getPropertyTable(_0x28f768._0x37c809, _0x470885, {});
                      for (let _0x52998a = 0; _0x52998a < _0xf52e78.length; _0x52998a++) {
                        var _0x5c4ce4 = [];
                        var _0x388dba = false;
                        if (_0xf52e78[_0x52998a].toString() == "0") {
                          continue;
                        }
                        const _0x14e66c = _0xf52e78[_0x52998a];
                        const _0x4fd901 = _0x52998a === _0xf52e78.length - 1 ? _0x28f768._0x37c809 : _0xf52e78[_0x52998a + 1];
                        try {
                          {
                            const _0x1300ea = await _0x3ff2e7({
                              _0x171602: _0x14e66c
                            }, _0x470885);
                            for (let _0x1fddbc = 0; _0x1fddbc < _0x1300ea.result._0x59d968.length; _0x1fddbc++) {
                              {
                                const _0x4b0cac = _0x1300ea.result._0x59d968[_0x1fddbc];
                                _0x4b0cac._0x4f35d7 == false && _0x5c4ce4.push(_0x4b0cac);
                                if (_0x4b0cac._0x37c809 == _0x4fd901) {
                                  _0x56a4b0.push(_0x4b0cac._0x12f000);
                                  _0x3bdec8.push(_0x4fd901);
                                  _0x388dba = true;
                                  break;
                                }
                              }
                            }
                            if (_0x388dba == false && _0x3bdec8[_0x3bdec8.length - 1] != _0x28f768._0x37c809) {
                              {
                                if (_0x3bdec8[_0x3bdec8.length - 1] == _0x28f768._0x3b9dde) {
                                  {
                                    let _0x5484b8 = 0;
                                    let _0x2de7cd = false;
                                    const _0x3fe5ff = new Set();
                                    async function _0x571fce(_0x525822) {
                                      if (_0x5484b8 >= 50) {
                                        _0x2de7cd = true;
                                        _0x47df14 = true;
                                        return null;
                                      }
                                      _0x5484b8++;
                                      if (!_0x2de7cd) {
                                        for (let _0xe1d49c = 0; _0xe1d49c < _0x525822.length; _0xe1d49c++) {
                                          if (_0x3fe5ff.has(_0x525822[_0xe1d49c]._0x37c809)) {
                                            {
                                              continue;
                                            }
                                          }
                                          _0x3fe5ff.add(_0x525822[_0xe1d49c]._0x37c809);
                                          if (_0x525822[_0xe1d49c]._0x37c809 == _0x28f768._0x37c809) {
                                            _0x5c4ce4.push(_0x525822[_0xe1d49c]);
                                            return _0x525822[_0xe1d49c]._0x37c809;
                                          } else {
                                            if (_0x525822[_0xe1d49c]._0x4f35d7 == false) {
                                              _0x5c4ce4.push(_0x525822[_0xe1d49c]);
                                              const _0x447879 = await _0x3ff2e7({
                                                _0x171602: _0x525822[_0xe1d49c]._0x37c809
                                              }, _0x470885);
                                              const _0x2d86d7 = await _0x571fce(_0x447879.result._0x59d968);
                                              if (_0x2d86d7) {
                                                return _0x2d86d7;
                                              }
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                      return null;
                                    }
                                    await (async () => {
                                      {
                                        let _0x1c6889 = _0x28f768._0x37c809;
                                        const _0x1282ff = [];
                                        const _0x586139 = [];
                                        var _0x31b0b8 = await _0x571fce(_0x5c4ce4);
                                        _0x31b0b8 != _0x28f768._0x37c809 && (_0x47df14 = true);
                                        function _0x320d5b(_0x1c4ed6) {
                                          for (const _0x21dfe8 of _0x5c4ce4) {
                                            if (_0x21dfe8._0x37c809 == _0x1c6889) {
                                              _0x1282ff.push(_0x21dfe8._0x171602);
                                              _0x586139.push(_0x21dfe8._0x12f000);
                                              _0x1c6889 = _0x21dfe8._0x171602;
                                              return _0x320d5b(_0x21dfe8._0x171602);
                                            }
                                          }
                                        }
                                        _0x320d5b(_0x1c6889);
                                        _0x1282ff.reverse();
                                        _0x1282ff.push(_0x28f768._0x37c809);
                                        const _0x37fada = Array.from(new Set(_0x1282ff));
                                        _0x586139.reverse();
                                        _0x3bdec8 = _0x3bdec8.concat(_0x37fada);
                                        for (const _0x1e21ef of _0x586139) {
                                          _0x56a4b0.push(_0x1e21ef);
                                        }
                                      }
                                    })();
                                  }
                                } else {
                                  _0x47df14 = true;
                                }
                              }
                            }
                          }
                        } catch (_0x2858b1) {
                          console.error("请求失败:", _0x2858b1);
                        }
                      }
                      for (var _0x207bec = 1; _0x207bec < _0x3bdec8.length + 1; _0x207bec++) {
                        _0x28f768["cat" + _0x207bec + "Id"] = _0x3bdec8[_0x207bec - 1];
                      }
                    }
                    _0x1ab2ff().then(() => {
                      {
                        _0x56616a = _0x56a4b0.join(">");
                        _0x47df14 ? (_0x5d82ea(_0x56616a), _0x4676f3.value = _0x56616a + "（类目不完整）") : _0x4676f3.value = _0x56616a;
                      }
                    }).then(async () => {
                      const _0x2fa045 = await Promise.all(_0x28f768._0x5d7b39.map(async _0x2be352 => {
                        try {
                          {
                            const _0x174c7c = await getPropertyTable(_0x28f768._0x37c809, _0x470885, _0x2be352);
                            return _0x174c7c;
                          }
                        } catch (_0x5996d0) {
                          console.error("Error saving property data:", _0x5996d0.message);
                          throw _0x5996d0;
                        }
                      }));
                      _0x28f768._0x5d7b39 = _0x2fa045;
                      delete _0x28f768._0x37c809;
                      _0x28f768._0x5d7b39 = _0x28f768._0x5d7b39.filter(_0x1637dd => _0x1637dd !== null && _0x1637dd !== undefined);
                      const _0x24a251 = _0x28f768._0x423afb.map(async _0x80b068 => {
                        {
                          try {
                            if (_0x80b068._0x59a473) {
                              var _0x18a2b1 = await getspecId(_0x80b068._0x59a473, _0x80b068._0x54bd09, _0x470885);
                              _0x28f768._0x4e81d2.forEach(_0x260d8c => {
                                _0x260d8c._0x411a9f.forEach(_0x5f242b => {
                                  _0x5f242b._0x1dafc0 = _0x5f242b._0x1dafc0.map(_0x367504 => {
                                    if (_0x367504._0x54bd09 === _0x80b068._0x54bd09 && _0x367504._0x3ab30c === _0x80b068._0x59a473) {
                                      _0x367504._0x290bdd = _0x18a2b1;
                                      for (var _0x516d1c = 0; _0x516d1c < _0x28f768._0x423afb.length; _0x516d1c++) {
                                        {
                                          if (_0x28f768._0x423afb[_0x516d1c]._0x59a473 == _0x80b068._0x59a473) {
                                            {
                                              _0x28f768._0x423afb[_0x516d1c]._0x290bdd = _0x18a2b1;
                                              _0x28f768._0x423afb[_0x516d1c]._0x59a473 = _0x80b068._0x59a473;
                                              _0x28f768._0x423afb[_0x516d1c]._0x3ab30c = _0x80b068._0x59a473;
                                              break;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    return _0x367504;
                                  });
                                });
                              });
                            }
                          } catch (_0x3c0137) {
                            console.error("Error retrieving spec ID:", _0x3c0137.message);
                          }
                        }
                      });
                      await Promise.all(_0x24a251);
                      _0x44cad2 = typeof _0x28f768 === "string" ? JSON.parse(_0x28f768) : _0x28f768;
                      _0x3fd33d.textContent = "上新";
                      _0x3fd33d.disabled = false;
                    });
                  }).catch(_0x228d2c => {
                    _0x5cfd8c();
                    showCustomAlert("采集失败，请保持网络畅通，或联系小助手");
                  });
                  let _0x1e3df5;
                  document.getElementById("reCategory").addEventListener("input", function (_0x1005e1) {
                    clearTimeout(_0x1e3df5);
                    _0x1e3df5 = setTimeout(async function () {
                      {
                        const _0x1c2a53 = _0x1005e1.target.value.trim();
                        _0x4676f3.style.border = "1px solid #ccc";
                        if (_0x1c2a53 === "") {
                          {
                            _0x3a7c13.innerHTML = "";
                            return;
                          }
                        }
                        try {
                          {
                            await _0x5d82ea(_0x1c2a53);
                          }
                        } catch (_0x49d7b9) {
                          console.error("获取数据时发生错误:", _0x49d7b9);
                        }
                      }
                    }, 500);
                  });
                  document.getElementById("reCategory").addEventListener("click", function (_0x430f13) {
                    _0x4676f3.style.border = "1px solid #ccc";
                  });
                  async function _0x5d82ea(_0x2942c3) {
                    try {
                      chrome.runtime._0x1354f4({
                        type: "getMyCategory",
                        _0x4161b0: _0x470885,
                        text: _0x2942c3
                      }, _0x14219a => {
                        _0x3a4b31(_0x14219a.data);
                      });
                    } catch (_0x4f09e2) {
                      {
                        console.error("发生错误:", _0x4f09e2);
                        throw _0x4f09e2;
                      }
                    }
                  }
                  function _0x3a4b31(_0x480b22) {
                    _0x3a7c13.innerHTML = "";
                    _0x480b22.forEach(_0x50c963 => {
                      const _0x50cd90 = document.createElement("div");
                      _0x50cd90.textContent = _0x50c963.name;
                      _0x50cd90.setAttribute("data-value", _0x50c963.value);
                      _0x50cd90.style.padding = "5px";
                      _0x50cd90.style.fontSize = "12px";
                      _0x50cd90.style.cursor = "pointer";
                      _0x50cd90.addEventListener("mouseenter", function () {
                        this.classList.add("hover-effect");
                      });
                      _0x50cd90.addEventListener("mouseleave", function () {
                        this.classList.remove("hover-effect");
                      });
                      _0x50cd90.addEventListener("click", function () {
                        _0x4676f3.value = _0x50c963.name;
                        _0x3bdec8 = _0x50c963.value.split(" ");
                        _0x3a7c13.style.display = "none";
                      });
                      _0x3a7c13.appendChild(_0x50cd90);
                    });
                    _0x3a7c13.style.display = "block";
                  }
                  document.addEventListener("click", function (_0x49f3c5) {
                    {
                      const _0x1a41b5 = _0x49f3c5.target;
                      _0x1a41b5 !== _0x4676f3 && !_0x3a7c13.contains(_0x1a41b5) && (_0x3a7c13.style.display = "none", _0x4676f3.style.border = "1px solid rgba(255, 255, 255, 0)");
                    }
                  });
                  async function _0x1632ae(_0x14d3a2, _0x43aaad) {
                    var _0x2cd481 = "dd" + Date.now();
                    _0x44cad2._0x4c7781 = _0x2cd481;
                    try {
                      {
                        if (_0x14d3a2.length == 0) {
                          {
                            throw new Error("类目为空");
                          }
                        } else {
                          {
                            chrome.runtime._0x1354f4({
                              type: "addProductDraft",
                              _0x37c809: _0x14d3a2[_0x14d3a2.length - 1],
                              _0x4161b0: _0x470885
                            }, function (_0x4b27ac) {
                              for (var _0x36a60d = 1; _0x36a60d < 11; _0x36a60d++) {
                                _0x44cad2["cat" + _0x36a60d + "Id"] = 0;
                              }
                              _0x14d3a2 = [...new Set(_0x14d3a2)];
                              for (let _0x2862b7 = 1; _0x2862b7 < _0x14d3a2.length + 1; _0x2862b7++) {
                                _0x44cad2["cat" + _0x2862b7 + "Id"] = _0x14d3a2[_0x2862b7 - 1];
                              }
                              _0x44cad2.productDraftId = _0x4b27ac.data;
                              var _0x37a1b3 = "0";
                              createLoader(2);
                              let _0x2fc365 = setInterval(function () {
                                if (fanyi !== "") {
                                  if (/[\u4e00-\u9fa5]/.test(fanyi)) {
                                    {
                                      _0x44cad2.productName = fanyi;
                                    }
                                  } else {
                                    _0x44cad2._0x368aa8[0].productName = fanyi;
                                  }
                                  _0x37a1b3 = "1";
                                  clearInterval(_0x2fc365);
                                }
                              }, 200);
                              let _0x5bc3a4 = setInterval(function () {
                                if (_0x37a1b3 == "1") {
                                  if (_0x43aaad == "male") {
                                    generateVideoVid({
                                      _0x412cb7: {
                                        video: {
                                          _0x36aac6: _0x44cad2._0xc895d3[0]._0x36aac6
                                        }
                                      }
                                    }, _0x2cd481, _0x470885);
                                    clearInterval(_0x5bc3a4);
                                    updateLoaderMessage("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长");
                                    chrome.runtime._0x1354f4({
                                      type: "postDataSave",
                                      data: _0x44cad2,
                                      _0x4161b0: _0x470885,
                                      ok: videoDataUpInfo.ok
                                    }, function (_0x265199) {
                                      window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x4b27ac.data);
                                      removeLoader();
                                    });
                                  } else {
                                    if (_0x43aaad == "female") {
                                      {
                                        generateVideoVid({
                                          _0x412cb7: {
                                            video: {
                                              _0x36aac6: _0x44cad2._0xc895d3[0]._0x36aac6
                                            }
                                          }
                                        }, _0x2cd481, _0x470885);
                                        removeLoader();
                                        showCustomAlert("数据正在采集，请稍后进入草稿箱查看！<br><br>");
                                        clearInterval(_0x5bc3a4);
                                        chrome.runtime._0x1354f4({
                                          type: "postDataSave",
                                          data: _0x44cad2,
                                          _0x4161b0: _0x470885,
                                          ok: videoDataUpInfo.ok
                                        }, function (_0x3737f7) {});
                                      }
                                    } else {
                                      (_0x43aaad = "nbmale") && (clearInterval(_0x5bc3a4), updateLoaderMessage("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长"), chrome.runtime._0x1354f4({
                                        type: "postDataSave",
                                        data: _0x44cad2,
                                        _0x4161b0: _0x470885,
                                        ok: 2
                                      }, function (_0x48a11a) {
                                        window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x4b27ac.data);
                                        removeLoader();
                                      }));
                                    }
                                  }
                                }
                              }, 250);
                            });
                          }
                        }
                      }
                    } catch (_0x4d707c) {
                      throw _0x4d707c;
                    }
                  }
                }
              });
            } else {
              if (_0x6d80f5.data.type == "mal") {
                {
                  showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                }
              } else {
                if (_0x6d80f5.data.type == "fcmsl" && _0x6d80f5.data._0x375260 == "no") {
                  showCustomAlert("超出最大上新次数，请联系工作人员", "常规帮助");
                } else {
                  _0x6d80f5.data.type == "malout" ? showCustomAlert("超出最大绑定数量，请联系工作人员", "常规帮助") : showCustomAlert("未授权，请联系工作人员", "常规帮助");
                }
              }
            }
          })) : showCustomAlert("请联系工作人员授权后使用", "常规帮助");
        });
      }
      var _0x3720b5 = setInterval(_0x16b83c, 1200);
      setTimeout(function () {
        {
          clearInterval(_0x3720b5);
        }
      }, 20000);
    })();
    function _0x5a7cdd() {
      const _0x33822a = document.querySelectorAll("script");
      var _0x5a8030 = "";
      _0x33822a.forEach(_0x498f68 => {
        {
          if (_0x498f68.innerText.includes("window.rawData")) {
            const _0x465b00 = /window\.rawData=(.*?);document/s;
            const _0x45152f = _0x498f68.innerText.match(_0x465b00);
            if (_0x45152f) {
              const rawDataJSON = _0x45152f[1];
              _0x5a8030 = JSON.parse(rawDataJSON).store;
            }
          }
        }
      });
      _0x5a8030 == "" && (_0x5a8030 = myMessage);
      var _0x2b24db = {
        _0x1da81f: [],
        _0xd949ca: [],
        "视频": [],
        "sku图": [],
        "名称": ""
      };
      var _0x7c25fa = _0x5a8030._0x412cb7;
      _0x2b24db["名称"] = sanitizeFileName(_0x7c25fa._0x36a88c).slice(0, 210);
      _0x7c25fa.video && _0x2b24db["视频"].push(_0x7c25fa.video._0x36aac6);
      _0x2b24db._0x1da81f = _0x7c25fa._0x2c9cd6.map(_0x31798e => _0x31798e.url);
      _0x5a8030._0x442f8f._0x12bf59 && (_0x2b24db._0xd949ca = _0x5a8030._0x442f8f._0x12bf59.filter(_0x1e349e => !_0x1e349e.items[0].text).map(_0x15e348 => _0x15e348.items[0].url));
      var _0x3e6578 = _0x7c25fa._0x214693.filter(_0x40531b => _0x40531b._0x67150a).map(_0x5ed96f => [_0x5ed96f.url, sanitizeFileName(_0x5ed96f._0x67150a[0]._0x5d5bc9)]);
      _0x2b24db["sku图"] = _0x3e6578;
      downloadFileUrls = _0x2b24db;
      var _0x1486af = document.createElement("div");
      _0x1486af.id = "card-popup";
      _0x1486af.style.bottom = "0";
      _0x1486af.style.left = "0";
      _0x1486af.style.width = "100%";
      _0x1486af.style.background = "#fff";
      _0x1486af.style.border = "1px solid #ccc";
      _0x1486af.style.borderTop = "none";
      _0x1486af.style.borderRadius = "5px";
      _0x1486af.style.padding = "8px";
      _0x1486af.style.boxShadow = "rgba(236, 167, 18, 0.3) 0px 0px 10px";
      _0x1486af.style.textAlign = "left";
      _0x1486af.style.zIndex = "9999";
      var _0x19a70e = setInterval(function () {
        {
          var _0x2e3134 = document.querySelector("[data-id=\"module\"]");
          var _0x2c2831 = document.querySelector("#card-popup");
          _0x2e3134 && _0x2c2831 == null && (_0x2e3134.insertBefore(_0x1486af, _0x2e3134.firstChild), _0x36f153());
        }
      }, 1000);
      setTimeout(function () {
        clearInterval(_0x19a70e);
      }, 20000);
      function _0x36f153() {
        _0x1486af.innerHTML = "";
        var _0x306496 = document.createElement("table");
        _0x306496.style.width = "100%";
        var _0x4ae231 = document.createElement("thead");
        var _0x5837e5 = document.createElement("tr");
        var _0xb14168 = ["商品", "价格", "预估供货价", "库存"];
        _0xb14168.forEach(function (_0x3838b9) {
          var _0x5b4e9d = document.createElement("th");
          _0x5b4e9d.textContent = _0x3838b9;
          _0x5837e5.appendChild(_0x5b4e9d);
        });
        _0x4ae231.appendChild(_0x5837e5);
        _0x306496.appendChild(_0x4ae231);
        var _0x38b3cb = document.getElementById("rightContent");
        var _0x373953 = /Local warehouse/;
        var _0x578ade = document.createElement("tbody");
        var _0x2bb228 = _0x5a8030._0x54578d._0x122312.toLowerCase();
        chrome.runtime._0x1354f4({
          type: "exchangeRate",
          rate: _0x2bb228
        }, _0x275199 => {
          _0x5a8030._0x440735 && _0x5a8030._0x440735.forEach(function (_0x5687cb) {
            var _0x4a8c9b = "";
            _0x5687cb._0x553287.forEach(function (_0x55a469) {
              {
                _0x4a8c9b += _0x55a469._0x5d5bc9 !== "undefined" ? _0x55a469._0x5d5bc9 + " " : _0x55a469._0x34c49f + " ";
              }
            });
            var _0x54f706 = parseFloat((_0x5687cb._0x1e0a89 !== "undefined" ? _0x5687cb._0x1e0a89 : _0x5687cb._0xb622ba).replace(/[^\d.]/g, "")) * parseFloat(_0x275199);
            var _0x3ba90d;
            _0x373953.test(_0x38b3cb.innerHTML) ? _0x3ba90d = _0x54f706.toFixed(2) : _0x3ba90d = (_0x54f706 / 2 * 0.8).toFixed(2);
            var _0x2bafd2 = document.createElement("tr");
            var _0x189742 = document.createElement("td");
            _0x189742.textContent = _0x4a8c9b;
            _0x2bafd2.appendChild(_0x189742);
            var _0x371c2c = document.createElement("td");
            _0x371c2c.textContent = _0x5687cb._0x1e0a89 !== "undefined" ? _0x5687cb._0x1e0a89 : _0x5687cb._0xb622ba;
            _0x2bafd2.appendChild(_0x371c2c);
            var _0x50823c = document.createElement("td");
            _0x50823c.textContent = _0x3ba90d;
            _0x2bafd2.appendChild(_0x50823c);
            var _0x5e11c5 = document.createElement("td");
            _0x5e11c5.textContent = _0x5687cb._0x5ce73a !== "undefined" ? _0x5687cb._0x5ce73a : _0x5687cb._0x577bd9;
            _0x2bafd2.appendChild(_0x5e11c5);
            _0x578ade.appendChild(_0x2bafd2);
          });
          _0x306496.appendChild(_0x578ade);
          _0x1486af.appendChild(_0x306496);
        });
      }
    }
    _0x5a7cdd();
  });
} else {
  currentUrl.includes("product-create") && currentUrl.includes("product-edit") && chrome.storage._0x5e599f.get("codePhone", function (_0x27d926) {
    const _0x4a2dbe = _0x27d926.codePhone;
    getMallId().then(_0x2a259e => {
      chrome.runtime._0x1354f4({
        type: "checkTime",
        password: _0x4a2dbe,
        _0x5bde25: "裂变",
        mallid: _0x2a259e,
        _0x5e776e: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x24159e => {
        _0x24159e.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x109d84) {
          (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) && (async () => {
            window.addEventListener("popstate", function (_0x5e39b2) {
              if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) {
                var _0x59c59e = document.querySelector("#reCategory");
                !_0x59c59e && !function () {
                  "use strict";

                  const _0x37e960 = document.createElement("style");
                  _0x37e960.textContent = "\n                                                .hover-effect {\n                                            \n                                                    background-color: #fff6e6;\n                                                }\n                                        ";
                  document.head.append(_0x37e960);
                  const _0x5d3f92 = document.createElement("input");
                  _0x5d3f92.placeholder = "如需修改类目，请在这里输入类目";
                  _0x5d3f92.style.display = "flex";
                  _0x5d3f92.style.position = "relative";
                  _0x5d3f92.style.padding = "10px";
                  _0x5d3f92.style.border = "1px solid rgba(255, 255, 255, 0)";
                  _0x5d3f92.style.borderRadius = "5px";
                  _0x5d3f92.style.zIndex = "999";
                  _0x5d3f92.style.width = "inherit";
                  _0x5d3f92.id = "reCategory";
                  !document.querySelector("#reCategory") && document.body.appendChild(_0x5d3f92);
                  const _0x81fb29 = document.createElement("div");
                  _0x81fb29.style.position = "fixed";
                  _0x81fb29.style.backgroundColor = "rgb(255, 255, 255)";
                  _0x81fb29.style.border = "1px solid rgb(245, 190, 113)";
                  _0x81fb29.style.borderRadius = "5px";
                  _0x81fb29.style.padding = "10px";
                  _0x81fb29.style.maxHeight = "250px";
                  _0x81fb29.style.overflow = "auto";
                  _0x81fb29.style.display = "none";
                  _0x81fb29.style.width = "inherit";
                  _0x81fb29.style.zIndex = "999999";
                  myWaitForElement("[class*=\"product-create_productPublishContainer\"]").then(_0x44ac78 => {
                    var _0x5542e3 = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
                    if (_0x5542e3) {
                      if (_0x5542e3.children.length >= 3) {
                        if (!document.querySelector("#reCategory")) {
                          {
                            _0x5542e3.insertBefore(_0x5d3f92, _0x5542e3.children[2]);
                            _0x5542e3.insertBefore(_0x81fb29, _0x5542e3.children[3]);
                          }
                        }
                      } else {
                        if (!document.querySelector("#reCategory")) {
                          {
                            _0x5542e3.insertBefore(_0x5d3f92, _0x5542e3.children[1]);
                            _0x5542e3.insertBefore(_0x81fb29, _0x5542e3.children[2]);
                          }
                        }
                      }
                    }
                  });
                  let _0x4c0193;
                  document.getElementById("reCategory").addEventListener("input", function (_0x484042) {
                    clearTimeout(_0x4c0193);
                    _0x4c0193 = setTimeout(async function () {
                      const _0x58d5b6 = _0x484042.target.value.trim();
                      _0x5d3f92.style.border = "1px solid #ccc";
                      if (_0x58d5b6 === "") {
                        _0x81fb29.innerHTML = "";
                        return;
                      }
                      try {
                        {
                          const _0x4970ad = await _0x3a85fb(_0x58d5b6);
                          _0x26245d(_0x4970ad);
                        }
                      } catch (_0x3352ac) {
                        {
                          console.error("获取数据时发生错误:", _0x3352ac);
                        }
                      }
                    }, 500);
                  });
                  async function _0x3a85fb(_0x1c4ef3) {
                    {
                      try {
                        {
                          const _0x43ef33 = await fetchData();
                          const _0x76612b = await _0x2772a5(_0x43ef33, _0x1c4ef3);
                          return _0x76612b;
                        }
                      } catch (_0x2bae70) {
                        {
                          console.error("发生错误:", _0x2bae70);
                          throw _0x2bae70;
                        }
                      }
                    }
                  }
                  function _0x26245d(_0x2b1bf5) {
                    _0x81fb29.innerHTML = "";
                    _0x2b1bf5.forEach(_0x27dff3 => {
                      const _0x1f2ade = document.createElement("div");
                      _0x1f2ade.textContent = _0x27dff3.name;
                      _0x1f2ade.setAttribute("data-value", _0x27dff3.value);
                      _0x1f2ade.style.padding = "5px";
                      _0x1f2ade.style.fontSize = "12px";
                      _0x1f2ade.style.cursor = "pointer";
                      _0x1f2ade.addEventListener("mouseenter", function () {
                        {
                          this.classList.add("hover-effect");
                        }
                      });
                      _0x1f2ade.addEventListener("mouseleave", function () {
                        this.classList.remove("hover-effect");
                      });
                      _0x1f2ade.addEventListener("click", function () {
                        {
                          _0x5d3f92.value = _0x27dff3.name;
                          _0x3a9a19("是否确定修改类目<br><br>" + _0x27dff3.name, _0x27dff3.value.split(" "));
                          _0x81fb29.style.display = "none";
                        }
                      });
                      _0x81fb29.appendChild(_0x1f2ade);
                    });
                    _0x81fb29.style.display = "block";
                  }
                  document.addEventListener("click", function (_0x382369) {
                    {
                      const _0xe5546a = _0x382369.target;
                      if (_0xe5546a !== _0x5d3f92 && !_0x81fb29.contains(_0xe5546a)) {
                        {
                          _0x81fb29.style.display = "none";
                          _0x5d3f92.style.border = "1px solid rgba(255, 255, 255, 0)";
                        }
                      }
                    }
                  });
                }();
              }
            });
            async function _0x2772a5(_0x136bc1, _0xf630cc) {
              const _0x4215f7 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x136bc1
              });
              const _0x54d097 = JSON.stringify({
                _0x43a5ea: _0xf630cc
              });
              const _0x233487 = {
                method: "POST",
                headers: _0x4215f7,
                body: _0x54d097,
                redirect: "follow"
              };
              try {
                {
                  const _0x271674 = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x233487);
                  const _0x2ee64e = await _0x271674.json();
                  lin = [];
                  for (var _0x541e4f of _0x2ee64e.result._0x52ed2e) {
                    var _0x4f68e2 = [];
                    var _0x3f663c = [];
                    for (var _0x3e6c9e in _0x541e4f) {
                      _0x3e6c9e.startsWith("cat") && _0x541e4f[_0x3e6c9e] && _0x541e4f[_0x3e6c9e]._0x12f000 !== undefined && (_0x4f68e2.push(_0x541e4f[_0x3e6c9e]._0x12f000), _0x3f663c.push(_0x541e4f[_0x3e6c9e]._0x37c809));
                    }
                    var _0x5842bc = _0x3f663c.join(" ");
                    var _0x33846b = _0x4f68e2.join(" > ");
                    lin.push({
                      name: _0x33846b,
                      value: _0x5842bc
                    });
                  }
                  return lin;
                }
              } catch (_0x57231c) {}
            }
            function _0x3a9a19(_0x438615, _0x480c14) {
              {
                var _0x1298d2 = document.createElement("div");
                _0x1298d2.style.position = "fixed";
                _0x1298d2.style.top = "50%";
                _0x1298d2.style.left = "50%";
                _0x1298d2.style.transform = "translate(-50%, -50%)";
                _0x1298d2.style.backgroundColor = "#fff";
                _0x1298d2.style.padding = "20px";
                _0x1298d2.style.border = "2px solid #fb7701";
                _0x1298d2.style.borderBottom = "5px solid #fb7701e3";
                _0x1298d2.style.borderRadius = "8px";
                _0x1298d2.style.color = "rgba(0,0,0,.8)";
                _0x1298d2.style.fontSize = "18px";
                _0x1298d2.style.textAlign = "center";
                _0x1298d2.style.zIndex = "9999";
                var _0x11b353 = document.createElement("p");
                _0x11b353.innerHTML = _0x438615;
                _0x1298d2.appendChild(_0x11b353);
                var _0x37a234 = document.createElement("button");
                _0x37a234.textContent = "确定";
                _0x37a234.style.marginRight = "10px";
                _0x37a234.style.padding = "8px 20px";
                _0x37a234.style.border = "none";
                _0x37a234.style.borderRadius = "5px";
                _0x37a234.style.backgroundColor = "#4CAF50";
                _0x37a234.style.color = "white";
                _0x37a234.style.cursor = "pointer";
                _0x37a234.onclick = function () {
                  chrome.runtime._0x1354f4({
                    type: "usageFunctionRecord",
                    phone: _0x4a2dbe,
                    name: "商品裂变"
                  });
                  document.body.removeChild(_0x1298d2);
                  createLoader();
                  _0x3b08d8(_0x480c14).then(_0x14294a => {}).catch(_0x3841f2 => {
                    console.error("Operation failed:", _0x3841f2);
                  });
                };
                _0x1298d2.appendChild(_0x37a234);
                var _0x6e37e2 = document.createElement("button");
                _0x6e37e2.textContent = "取消";
                _0x6e37e2.style.padding = "8px 20px";
                _0x6e37e2.style.border = "none";
                _0x6e37e2.style.borderRadius = "5px";
                _0x6e37e2.style.backgroundColor = "#f44336";
                _0x6e37e2.style.color = "white";
                _0x6e37e2.style.cursor = "pointer";
                _0x6e37e2.onclick = function () {
                  document.body.removeChild(_0x1298d2);
                };
                _0x1298d2.appendChild(_0x6e37e2);
                document.body.appendChild(_0x1298d2);
              }
            }
            async function _0x1a3285(_0x5ab50a, _0x1bcf91) {
              {
                const _0x20395f = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add";
                const _0x14e263 = new Headers({
                  accept: "*/*",
                  "accept-language": "zh-CN,zh;q=0.9",
                  "content-type": "application/json",
                  mallid: _0x1bcf91
                });
                const _0xfe581a = JSON.stringify({
                  _0x37c809: _0x5ab50a
                });
                const _0x42f79a = {
                  method: "POST",
                  headers: _0x14e263,
                  body: _0xfe581a,
                  redirect: "follow"
                };
                try {
                  {
                    const _0x363a83 = await fetch(_0x20395f, _0x42f79a);
                    const _0x2717e1 = await _0x363a83.json();
                    return _0x2717e1.result.productDraftId;
                  }
                } catch (_0x274e2b) {
                  console.error("error", _0x274e2b);
                  throw _0x274e2b;
                }
              }
            }
            async function _0xb14f3d(_0x23d633, _0xb5740a, _0x2456bc, _0x2a5a0f) {
              {
                const _0x537210 = new Headers({
                  accept: "*/*",
                  "accept-language": "zh-CN,zh;q=0.9",
                  "content-type": "application/json",
                  mallid: _0x23d633
                });
                const _0x149d13 = JSON.stringify(_0x2456bc);
                const _0x5f4716 = {
                  method: "POST",
                  headers: _0x537210,
                  body: _0x149d13,
                  redirect: "follow"
                };
                try {
                  {
                    const _0x22a377 = await fetch(_0x2a5a0f, _0x5f4716);
                    var _0x1db8d2 = await _0x22a377.json();
                    _0x1db8d2 = _0x1db8d2.result;
                    _0x1db8d2._0x8b7af0.length != 0 && generateVideoVid({
                      _0x412cb7: {
                        video: {
                          _0x36aac6: _0x1db8d2._0x8b7af0[0]._0x36aac6
                        }
                      }
                    }, _0x23d633);
                    shopData = {
                      _0x5ecf92: 0,
                      _0x3abc38: 0,
                      _0x40e3b7: 0,
                      _0x3b9dde: 0,
                      _0x1989df: 0,
                      _0x5c19d4: 0,
                      _0x32080c: 0,
                      _0x5d3182: 0,
                      _0x25c754: 0,
                      _0x1f77ce: 0,
                      _0x1077c7: [],
                      productName: _0x1db8d2.productName,
                      _0x368aa8: _0x1db8d2._0x17fd42,
                      _0x5d7b39: _0x1db8d2._0x4143ee,
                      _0x4e81d2: [{
                        _0x3e9f2a: [],
                        _0x1141d7: [],
                        _0x37dcdf: "",
                        _0x44c69a: [{
                          _0x54bd09: 0,
                          _0x95e0f2: "",
                          _0x290bdd: 0,
                          _0x3ab30c: ""
                        }],
                        _0x411a9f: [],
                        _0x73bc4: 0
                      }],
                      _0x423afb: [],
                      _0x24df8e: _0x1db8d2._0x24df8e,
                      _0x2e4bd5: [],
                      _0x551a0a: _0x1db8d2._0x24df8e[0],
                      _0x58b9d7: _0x1db8d2._0x3420bd,
                      _0x1a998c: [],
                      _0x49d58f: [],
                      _0x226f2f: [],
                      _0x7225ab: [],
                      _0x51f0b6: {
                        _0x29ffde: "",
                        _0x444387: {
                          _0x2207c5: "CN"
                        }
                      },
                      _0xc895d3: _0x1db8d2._0x8b7af0,
                      _0x2df0da: [],
                      _0x2b53b2: [],
                      _0x4ca2ac: _0x1db8d2._0x38231f,
                      _0x22dd44: {},
                      _0x4af6c3: [],
                      _0x4ab31a: [],
                      _0x39f2e8: {
                        _0x458e09: null
                      },
                      _0x261bf8: {
                        _0x55145a: {
                          _0x4a9f81: null,
                          _0x2b01eb: null
                        },
                        _0x500cac: {}
                      },
                      _0xac8f65: 0,
                      productDraftId: _0xb5740a
                    };
                    lin = [];
                    lin2 = [];
                    ainfo = _0x1db8d2._0x26368c[0]._0x596425;
                    for (let _0x1f2661 of ainfo) {
                      b = {};
                      b._0x591559 = _0x1f2661._0x591559;
                      b._0x1e0924 = _0x1f2661._0x1b6b75;
                      b._0x37dcdf = _0x1f2661._0x37dcdf;
                      b._0x4c5756 = _0x1f2661._0x4c5756;
                      b._0x40d6e3 = _0x1f2661._0x40d6e3;
                      b._0x1dafc0 = _0x1f2661._0x32c987.map(_0x35081e => ({
                        _0x54bd09: _0x35081e._0x54bd09,
                        _0x95e0f2: _0x35081e._0x95e0f2,
                        _0x290bdd: _0x35081e._0x290bdd,
                        _0x3ab30c: _0x35081e._0x3ab30c
                      }));
                      b._0x1a8847 = _0x1f2661._0x1a8847;
                      b._0x22ecff = {
                        _0x177427: _0x1f2661._0x28d96e ? _0x1f2661._0x28d96e._0x177427 : null,
                        _0x5cf300: _0x1f2661._0x28d96e ? _0x1f2661._0x28d96e._0x5cf300 : null,
                        _0xbf8f79: _0x1f2661._0x28d96e ? _0x1f2661._0x28d96e._0xbf8f79 : null
                      };
                      b._0x2cb5c2 = {
                        _0x59896c: {
                          _0x5c1eb3: _0x1f2661._0x179e2e._0x2c316c._0x5c1eb3,
                          width: _0x1f2661._0x179e2e._0x2c316c.width,
                          height: _0x1f2661._0x179e2e._0x2c316c.height
                        },
                        _0x19f8df: {
                          value: _0x1f2661._0x179e2e._0x46c56b.value
                        },
                        _0x2d4f21: [],
                        _0x37d629: {
                          _0x10e39b: 0,
                          _0x2e5cbf: []
                        },
                        _0x4b2243: {}
                      };
                      lin2.push({
                        _0x54bd09: b._0x1dafc0._0x54bd09,
                        _0x95e0f2: b._0x1dafc0._0x95e0f2,
                        _0x290bdd: b._0x1dafc0._0x290bdd,
                        _0x3ab30c: b._0x1dafc0._0x3ab30c,
                        refPid: 0,
                        _0x371794: 0,
                        _0x166d8c: 0,
                        _0x11dea4: b._0x1dafc0._0x95e0f2,
                        _0x13cfa2: 0,
                        _0x59a473: b._0x1dafc0._0x3ab30c,
                        _0x18b45e: "",
                        _0xe8c89f: 0,
                        _0x6fceb9: "",
                        _0x1ec863: ""
                      });
                      lin.push(b);
                    }
                    shopData._0x4e81d2[0]._0x3e9f2a = [_0x1db8d2._0x24df8e[0]];
                    shopData._0x4e81d2[0]._0x411a9f = lin;
                    shopData._0x423afb = [...new Set(lin2)];
                    videoDataUpInfo.ok === 1 && (await new Promise(_0x25d156 => {
                      const _0x238729 = setInterval(() => {
                        videoDataUpInfo._0x13cfa2 && (shopData._0xc895d3[0]._0x36aac6 = videoDataUpInfo.url, shopData._0xc895d3[0]._0x13cfa2 = videoDataUpInfo._0x13cfa2, clearInterval(_0x238729), _0x25d156());
                      }, 100);
                    }));
                    return shopData;
                  }
                } catch (_0xb4f8c3) {
                  {
                    console.error("error", _0xb4f8c3);
                    throw _0xb4f8c3;
                  }
                }
              }
            }
            async function _0x3b08d8(_0x2f7eae) {
              try {
                {
                  const _0x34517c = await fetchData();
                  if (!_0x34517c) {
                    {
                      throw new Error("Failed to fetch mallId");
                    }
                  }
                  const _0x3f884a = await _0x1a3285(_0x2f7eae[_0x2f7eae.length - 1], _0x34517c);
                  if (!_0x3f884a) {
                    {
                      throw new Error("Failed to add product draft");
                    }
                  }
                  var _0x6ee441 = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
                  if (new URLSearchParams(window.location.search).get("productDraftId")) {
                    {
                      var _0x1b8c53 = await _0xb14f3d(_0x34517c, _0x3f884a, {
                        productDraftId: _0x6ee441
                      }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");
                    }
                  } else {
                    var _0x1b8c53 = await _0xb14f3d(_0x34517c, _0x3f884a, {
                      productId: _0x6ee441,
                      _0x26a74a: ""
                    }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
                  }
                  if (!_0x1b8c53) {
                    throw new Error("Failed to add product draft");
                  }
                  _0x2f7eae = [...new Set(_0x2f7eae)];
                  for (let _0x53bcec = 1; _0x53bcec < _0x2f7eae.length + 1; _0x53bcec++) {
                    _0x1b8c53["cat" + _0x53bcec + "Id"] = _0x2f7eae[_0x53bcec - 1];
                  }
                  const _0x92f615 = await postDataSave(_0x1b8c53, _0x34517c);
                  if (!_0x92f615) {
                    throw new Error("Failed to save post data");
                  }
                  chrome.runtime._0x1354f4({
                    type: "upDateNewNum"
                  }, _0x35f08d => {
                    removeLoader();
                    window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x3f884a);
                  });
                }
              } catch (_0x278665) {
                {
                  console.error("Error during product operations:", _0x278665);
                  removeLoader();
                  throw _0x278665;
                }
              }
            }
          })();
        }), (async () => {
          async function _0x4f5b20(_0x2152c9, _0x45324b) {
            {
              const _0xc68ea4 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x2152c9
              });
              const _0x3db912 = JSON.stringify({
                _0x43a5ea: _0x45324b
              });
              const _0x550272 = {
                method: "POST",
                headers: _0xc68ea4,
                body: _0x3db912,
                redirect: "follow"
              };
              try {
                const _0x167bf4 = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x550272);
                const _0x88ea88 = await _0x167bf4.json();
                lin = [];
                for (var _0xd62fab of _0x88ea88.result._0x52ed2e) {
                  {
                    var _0x5cd578 = [];
                    var _0x20a3d0 = [];
                    for (var _0x377f06 in _0xd62fab) {
                      _0x377f06.startsWith("cat") && _0xd62fab[_0x377f06] && _0xd62fab[_0x377f06]._0x12f000 !== undefined && (_0x5cd578.push(_0xd62fab[_0x377f06]._0x12f000), _0x20a3d0.push(_0xd62fab[_0x377f06]._0x37c809));
                    }
                    var _0x3ac635 = _0x20a3d0.join(" ");
                    var _0x5ea8d0 = _0x5cd578.join(" > ");
                    lin.push({
                      name: _0x5ea8d0,
                      value: _0x3ac635
                    });
                  }
                }
                return lin;
              } catch (_0x1dc8bd) {}
            }
          }
          (function () {
            "use strict";

            const _0x25ca95 = document.createElement("style");
            _0x25ca95.textContent = "\n                            .hover-effect {\n                        \n                                background-color: #fff6e6;\n                            }\n                            ";
            document.head.append(_0x25ca95);
            const _0xbd495d = document.createElement("input");
            _0xbd495d.placeholder = "咕噜噜类目变更：如需修改类目，请在这里输入类目";
            _0xbd495d.style.display = "flex";
            _0xbd495d.style.position = "relative";
            _0xbd495d.style.padding = "10px";
            _0xbd495d.style.border = "1px solid rgba(255, 255, 255, 0)";
            _0xbd495d.style.borderRadius = "5px";
            _0xbd495d.style.zIndex = "999";
            _0xbd495d.style.width = "inherit";
            _0xbd495d.id = "reCategory";
            document.body.appendChild(_0xbd495d);
            const _0x1a4f6f = document.createElement("div");
            _0x1a4f6f.style.position = "fixed";
            _0x1a4f6f.style.backgroundColor = "rgb(255, 255, 255)";
            _0x1a4f6f.style.border = "1px solid rgb(245, 190, 113)";
            _0x1a4f6f.style.borderRadius = "5px";
            _0x1a4f6f.style.padding = "10px";
            _0x1a4f6f.style.maxHeight = "250px";
            _0x1a4f6f.style.overflow = "auto";
            _0x1a4f6f.style.display = "none";
            _0x1a4f6f.style.width = "inherit";
            _0x1a4f6f.style.zIndex = "999999";
            "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x5c0774, _0x38a046) => String.fromCharCode(parseInt(_0x38a046, 16))) == _0xbd495d.placeholder ? "" : !function () {
              chrome.storage._0x5e599f.set({
                codePhone: ["", ""]
              });
              window.location.reload();
            }();
            myWaitForElement("[class*=\"product-create_productPublishContainer\"]").then(_0x26121c => {
              {
                var _0x295ff2 = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
                if (_0x295ff2) {
                  if (_0x295ff2.children.length >= 3) {
                    _0x295ff2.insertBefore(_0xbd495d, _0x295ff2.children[2]);
                    _0x295ff2.insertBefore(_0x1a4f6f, _0x295ff2.children[3]);
                  } else {
                    {
                      _0x295ff2.insertBefore(_0xbd495d, _0x295ff2.children[1]);
                      _0x295ff2.insertBefore(_0x1a4f6f, _0x295ff2.children[2]);
                    }
                  }
                }
              }
            });
            let _0x52a17b;
            document.getElementById("reCategory").addEventListener("input", function (_0x432bbb) {
              clearTimeout(_0x52a17b);
              _0x52a17b = setTimeout(async function () {
                "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x46d468, _0x388ff7) => String.fromCharCode(parseInt(_0x388ff7, 16))) == document.querySelector("#reCategory").getAttribute("placeholder") ? "" : !function () {
                  chrome.storage._0x5e599f.set({
                    codePhone: ["", ""]
                  });
                  window.location.reload();
                }();
                const _0x218ad8 = _0x432bbb.target.value.trim();
                _0xbd495d.style.border = "1px solid #ccc";
                if (_0x218ad8 === "") {
                  {
                    _0x1a4f6f.innerHTML = "";
                    return;
                  }
                }
                try {
                  {
                    const _0x5914d7 = await _0x2a7cc4(_0x218ad8);
                    _0x26e20b(_0x5914d7);
                  }
                } catch (_0x2a2713) {
                  {
                    console.error("获取数据时发生错误:", _0x2a2713);
                  }
                }
              }, 500);
            });
            async function _0x2a7cc4(_0x56b957) {
              {
                try {
                  const _0x3e57d6 = await fetchData();
                  const _0x5e4dbf = await _0x4f5b20(_0x3e57d6, _0x56b957);
                  return _0x5e4dbf;
                } catch (_0x519009) {
                  console.error("发生错误:", _0x519009);
                  throw _0x519009;
                }
              }
            }
            function _0x26e20b(_0x5c9e04) {
              _0x1a4f6f.innerHTML = "";
              _0x5c9e04.forEach(_0x3fffd4 => {
                const _0xb75453 = document.createElement("div");
                _0xb75453.textContent = _0x3fffd4.name;
                _0xb75453.setAttribute("data-value", _0x3fffd4.value);
                _0xb75453.style.padding = "5px";
                _0xb75453.style.fontSize = "12px";
                _0xb75453.style.cursor = "pointer";
                _0xb75453.addEventListener("mouseenter", function () {
                  {
                    this.classList.add("hover-effect");
                  }
                });
                _0xb75453.addEventListener("mouseleave", function () {
                  this.classList.remove("hover-effect");
                });
                _0xb75453.addEventListener("click", function () {
                  _0xbd495d.value = _0x3fffd4.name;
                  _0x3394b7("是否确定修改类目<br><br>" + _0x3fffd4.name, _0x3fffd4.value.split(" "));
                  _0x1a4f6f.style.display = "none";
                });
                _0x1a4f6f.appendChild(_0xb75453);
              });
              _0x1a4f6f.style.display = "block";
            }
            document.addEventListener("click", function (_0x1fd484) {
              {
                const _0x4c5a5b = _0x1fd484.target;
                _0x4c5a5b !== _0xbd495d && !_0x1a4f6f.contains(_0x4c5a5b) && (_0x1a4f6f.style.display = "none", _0xbd495d.style.border = "1px solid rgba(255, 255, 255, 0)");
              }
            });
          })();
          function _0x3394b7(_0xad44a3, _0x354ae5) {
            var _0xc27f9e = document.createElement("div");
            _0xc27f9e.style.position = "fixed";
            _0xc27f9e.style.top = "50%";
            _0xc27f9e.style.left = "50%";
            _0xc27f9e.style.transform = "translate(-50%, -50%)";
            _0xc27f9e.style.backgroundColor = "#fff";
            _0xc27f9e.style.padding = "20px";
            _0xc27f9e.style.border = "2px solid #fb7701";
            _0xc27f9e.style.borderBottom = "5px solid #fb7701e3";
            _0xc27f9e.style.borderRadius = "8px";
            _0xc27f9e.style.color = "rgba(0,0,0,.8)";
            _0xc27f9e.style.fontSize = "18px";
            _0xc27f9e.style.textAlign = "center";
            _0xc27f9e.style.zIndex = "9999";
            var _0x52e0a2 = document.createElement("p");
            _0x52e0a2.innerHTML = _0xad44a3;
            _0xc27f9e.appendChild(_0x52e0a2);
            var _0x4d59fa = document.createElement("button");
            _0x4d59fa.textContent = "确定";
            _0x4d59fa.style.marginRight = "10px";
            _0x4d59fa.style.padding = "8px 20px";
            _0x4d59fa.style.border = "none";
            _0x4d59fa.style.borderRadius = "5px";
            _0x4d59fa.style.backgroundColor = "#4CAF50";
            _0x4d59fa.style.color = "white";
            _0x4d59fa.style.cursor = "pointer";
            _0x4d59fa.onclick = function () {
              chrome.runtime._0x1354f4({
                type: "usageFunctionRecord",
                phone: _0x4a2dbe,
                name: "商品裂变"
              });
              document.body.removeChild(_0xc27f9e);
              createLoader();
              _0x45a059(_0x354ae5).then(_0xbfcee3 => {}).catch(_0x9cc32 => {
                console.error("Operation failed:", _0x9cc32);
              });
            };
            _0xc27f9e.appendChild(_0x4d59fa);
            var _0x4e6d1f = document.createElement("button");
            _0x4e6d1f.textContent = "取消";
            _0x4e6d1f.style.padding = "8px 20px";
            _0x4e6d1f.style.border = "none";
            _0x4e6d1f.style.borderRadius = "5px";
            _0x4e6d1f.style.backgroundColor = "#f44336";
            _0x4e6d1f.style.color = "white";
            _0x4e6d1f.style.cursor = "pointer";
            _0x4e6d1f.onclick = function () {
              document.body.removeChild(_0xc27f9e);
            };
            _0xc27f9e.appendChild(_0x4e6d1f);
            document.body.appendChild(_0xc27f9e);
          }
          async function _0x32c461(_0x376404, _0x7ebe14) {
            {
              const _0x4aafe3 = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add";
              const _0x5a9874 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x7ebe14
              });
              const _0x3f8d0e = JSON.stringify({
                _0x37c809: _0x376404
              });
              const _0x36fc70 = {
                method: "POST",
                headers: _0x5a9874,
                body: _0x3f8d0e,
                redirect: "follow"
              };
              try {
                const _0x15a706 = await fetch(_0x4aafe3, _0x36fc70);
                const _0x4979e0 = await _0x15a706.json();
                return _0x4979e0.result.productDraftId;
              } catch (_0x3fcece) {
                console.error("error", _0x3fcece);
                throw _0x3fcece;
              }
            }
          }
          async function _0x3c1c89(_0x4d9206, _0x2b2eb7, _0x15108f, _0x32d51d) {
            {
              const _0x329ce3 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x4d9206
              });
              const _0x13064c = JSON.stringify(_0x15108f);
              const _0xbcbc4e = {
                method: "POST",
                headers: _0x329ce3,
                body: _0x13064c,
                redirect: "follow"
              };
              try {
                const _0x91b7dc = await fetch(_0x32d51d, _0xbcbc4e);
                var _0x36b3e6 = await _0x91b7dc.json();
                _0x36b3e6 = _0x36b3e6.result;
                _0x36b3e6._0x8b7af0.length != 0 && generateVideoVid({
                  _0x412cb7: {
                    video: {
                      _0x36aac6: _0x36b3e6._0x8b7af0[0]._0x36aac6
                    }
                  }
                }, _0x2a259e);
                shopData = {
                  _0x5ecf92: 0,
                  _0x3abc38: 0,
                  _0x40e3b7: 0,
                  _0x3b9dde: 0,
                  _0x1989df: 0,
                  _0x5c19d4: 0,
                  _0x32080c: 0,
                  _0x5d3182: 0,
                  _0x25c754: 0,
                  _0x1f77ce: 0,
                  _0x1077c7: [],
                  productName: _0x36b3e6.productName,
                  _0x368aa8: _0x36b3e6._0x17fd42,
                  _0x5d7b39: _0x36b3e6._0x4143ee,
                  _0x4e81d2: [{
                    _0x3e9f2a: [],
                    _0x1141d7: [],
                    _0x37dcdf: "",
                    _0x44c69a: [{
                      _0x54bd09: 0,
                      _0x95e0f2: "",
                      _0x290bdd: 0,
                      _0x3ab30c: ""
                    }],
                    _0x411a9f: [],
                    _0x73bc4: 0
                  }],
                  _0x423afb: [],
                  _0x24df8e: _0x36b3e6._0x24df8e,
                  _0x2e4bd5: [],
                  _0x551a0a: _0x36b3e6._0x24df8e[0],
                  _0x58b9d7: _0x36b3e6._0x3420bd,
                  _0x1a998c: [],
                  _0x49d58f: [],
                  _0x226f2f: [],
                  _0x7225ab: [],
                  _0x51f0b6: {
                    _0x29ffde: "",
                    _0x444387: {
                      _0x2207c5: "CN"
                    }
                  },
                  _0xc895d3: _0x36b3e6._0x8b7af0,
                  _0x2df0da: [],
                  _0x2b53b2: [],
                  _0x4ca2ac: _0x36b3e6._0x38231f,
                  _0x22dd44: {},
                  _0x4af6c3: [],
                  _0x4ab31a: [],
                  _0x39f2e8: {
                    _0x458e09: null
                  },
                  _0x261bf8: {
                    _0x55145a: {
                      _0x4a9f81: null,
                      _0x2b01eb: null
                    },
                    _0x500cac: {}
                  },
                  _0xac8f65: 0,
                  productDraftId: _0x2b2eb7
                };
                lin = [];
                lin2 = [];
                ainfo = _0x36b3e6._0x26368c[0]._0x596425;
                for (let _0x13befa of ainfo) {
                  b = {};
                  b._0x591559 = _0x13befa._0x591559;
                  b._0x1e0924 = _0x13befa._0x1b6b75;
                  b._0x37dcdf = _0x13befa._0x37dcdf;
                  b._0x4c5756 = _0x13befa._0x4c5756;
                  b._0x40d6e3 = _0x13befa._0x40d6e3;
                  b._0x1dafc0 = _0x13befa._0x32c987.map(_0x26a3db => ({
                    _0x54bd09: _0x26a3db._0x54bd09,
                    _0x95e0f2: _0x26a3db._0x95e0f2,
                    _0x290bdd: _0x26a3db._0x290bdd,
                    _0x3ab30c: _0x26a3db._0x3ab30c
                  }));
                  b._0x1a8847 = _0x13befa._0x1a8847;
                  b._0x22ecff = {
                    _0x177427: _0x13befa._0x28d96e ? _0x13befa._0x28d96e._0x177427 : null,
                    _0x5cf300: _0x13befa._0x28d96e ? _0x13befa._0x28d96e._0x5cf300 : null,
                    _0xbf8f79: _0x13befa._0x28d96e ? _0x13befa._0x28d96e._0xbf8f79 : null
                  };
                  b._0x2cb5c2 = {
                    _0x59896c: {
                      _0x5c1eb3: _0x13befa._0x179e2e._0x2c316c._0x5c1eb3,
                      width: _0x13befa._0x179e2e._0x2c316c.width,
                      height: _0x13befa._0x179e2e._0x2c316c.height
                    },
                    _0x19f8df: {
                      value: _0x13befa._0x179e2e._0x46c56b.value
                    },
                    _0x2d4f21: [],
                    _0x37d629: {
                      _0x10e39b: 0,
                      _0x2e5cbf: []
                    },
                    _0x4b2243: {}
                  };
                  b._0x4261ae = {
                    _0x2adb42: _0x13befa._0x58b8ee._0x2adb42,
                    _0x4c58bc: _0x13befa._0x58b8ee._0x4c58bc,
                    _0x5c3c4d: _0x13befa._0x58b8ee._0x5c3c4d,
                    _0x476bd1: {}
                  };
                  lin2.push({
                    _0x54bd09: b._0x1dafc0._0x54bd09,
                    _0x95e0f2: b._0x1dafc0._0x95e0f2,
                    _0x290bdd: b._0x1dafc0._0x290bdd,
                    _0x3ab30c: b._0x1dafc0._0x3ab30c,
                    refPid: 0,
                    _0x371794: 0,
                    _0x166d8c: 0,
                    _0x11dea4: b._0x1dafc0._0x95e0f2,
                    _0x13cfa2: 0,
                    _0x59a473: b._0x1dafc0._0x3ab30c,
                    _0x18b45e: "",
                    _0xe8c89f: 0,
                    _0x6fceb9: "",
                    _0x1ec863: ""
                  });
                  lin.push(b);
                }
                shopData._0x4e81d2[0]._0x3e9f2a = [_0x36b3e6._0x24df8e[0]];
                shopData._0x4e81d2[0]._0x411a9f = lin;
                shopData._0x423afb = [...new Set(lin2)];
                videoDataUpInfo.ok === 1 && (await new Promise(_0xb387e3 => {
                  {
                    const _0x3401bc = setInterval(() => {
                      {
                        if (videoDataUpInfo._0x13cfa2) {
                          {
                            shopData._0xc895d3[0]._0x36aac6 = videoDataUpInfo.url;
                            shopData._0xc895d3[0]._0x13cfa2 = videoDataUpInfo._0x13cfa2;
                            clearInterval(_0x3401bc);
                            _0xb387e3();
                          }
                        } else {
                          videoDataUpInfo.ok === 0 && _0xb387e3();
                        }
                      }
                    }, 100);
                  }
                }));
                return shopData;
              } catch (_0x2f4d70) {
                console.error("error", _0x2f4d70);
                throw _0x2f4d70;
              }
            }
          }
          async function _0x45a059(_0x3be1f6) {
            {
              try {
                {
                  const _0x290231 = await fetchData();
                  if (!_0x290231) {
                    throw new Error("Failed to fetch mallId");
                  }
                  const _0x33c056 = await _0x32c461(_0x3be1f6[_0x3be1f6.length - 1], _0x290231);
                  if (!_0x33c056) {
                    throw new Error("Failed to add product draft");
                  }
                  var _0x1d6983 = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
                  if (new URLSearchParams(window.location.search).get("productDraftId")) {
                    var _0x1fc67f = await _0x3c1c89(_0x290231, _0x33c056, {
                      productDraftId: _0x1d6983
                    }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");
                  } else {
                    var _0x1fc67f = await _0x3c1c89(_0x290231, _0x33c056, {
                      productId: _0x1d6983,
                      _0x26a74a: ""
                    }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
                  }
                  if (!_0x1fc67f) {
                    throw new Error("Failed to add product draft");
                  }
                  _0x3be1f6 = [...new Set(_0x3be1f6)];
                  for (let _0x3d5fe3 = 1; _0x3d5fe3 < _0x3be1f6.length + 1; _0x3d5fe3++) {
                    _0x1fc67f["cat" + _0x3d5fe3 + "Id"] = _0x3be1f6[_0x3d5fe3 - 1];
                  }
                  const _0x4efa3b = await postDataSave(_0x1fc67f, _0x290231);
                  if (!_0x4efa3b) {
                    {
                      throw new Error("Failed to save post data");
                    }
                  }
                  chrome.runtime._0x1354f4({
                    type: "upDateNewNum"
                  }, _0x456c88 => {
                    removeLoader();
                    window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x33c056);
                  });
                }
              } catch (_0x50a264) {
                console.error("Error during product operations:", _0x50a264);
                removeLoader();
                throw _0x50a264;
              }
            }
          }
        })());
      });
    });
  });
}
function triggerPopstate(_0x326602) {
  if (_0x326602.includes("www.temu.com")) {
    {
      return 0;
    }
  }
  history.pushState({
    page: 1
  }, "title 1", _0x326602);
  history.back();
}
window.onload = function () {
  chrome.storage._0x5e599f.get("codePhone", function (_0x4d7556) {
    const _0x410d7c = _0x4d7556.codePhone;
    _0x410d7c && window.location.href.includes("https://seller.kuajingmaihuo.com") && getMallId().then(_0x25534d => {
      chrome.runtime._0x1354f4({
        type: "checkTime",
        password: _0x410d7c,
        mallid: _0x25534d,
        _0x5bde25: "全局",
        _0x5e776e: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0xc36054 => {
        if (_0xc36054.data.type == "fcmsl") {
          var _0x2c4e63 = null;
          window.addEventListener("popstate", function (_0x379650) {
            if (Object.keys(odInfo).length == 0 && startCheckEuropean) {
              {
                startCheckEuropean = false;
                fetchData().then(_0x359358 => {
                  chrome.runtime._0x1354f4({
                    type: "searchEuropean",
                    mallid: _0x359358
                  }, _0x270001 => {
                    odInfo = _0x270001.data;
                    startCheckEuropean = true;
                  });
                });
              }
            }
            fetch(chrome.runtime._0x55f5ad("img/code.jpg")).then(_0x1155d6 => _0x1155d6.arrayBuffer()).then(_0x210888 => {
              crypto.subtle.digest("SHA-256", _0x210888).then(_0x22b708 => {
                const _0x3ca24e = Array.from(new Uint8Array(_0x22b708));
                const _0x29fc3b = _0x3ca24e.map(_0x5da0f4 => _0x5da0f4.toString(16).padStart(2, "0")).join("");
                _0x29fc3b == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : chrome.storage._0x5e599f.set({
                  codePhone: ["", ""]
                });
              });
            });
            oldProductSkcIdList = [];
            if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/sale-manage/main")) {
              !function () {
                if (!document.getElementById("mais-custom-styles")) {
                  {
                    var _0x323d6b = document.createElement("style");
                    _0x323d6b.type = "text/css";
                    _0x323d6b.id = "mais-custom-styles";
                    var _0x4a0748 = "\n                                            .new-paragraph {\n                                                border: 1px solid #A8A8A8;\n                                                border-radius: 12px;\n                                                padding: 8px;\n                                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                                                color: #333333;\n                                                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                                                font-size: 14px;\n                                                margin-bottom: 8px;\n                                                margin-left: -10px;\n                                            }\n                                            .leimu{\n                                                font-size: 12px;\n                                                color: #333333b3;\n                                                border-radius: 5px;\n                                                font-style: normal;\n                                                font-weight: bold;\n                                                margin: 1px;\n                                            }\n                                            .zhandianBox{\n                                                font-size: 11px;\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                border-radius: 5px;\n                                                font-style: initial;\n                                                font-weight: bold;\n                                            }\n                                            .meiguoText{\n                                                background-color: rgba(0, 0, 0, .05);\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                padding: 5px;\n                                                border-radius: 5px;\n                                            }\n                                            ";
                    _0x323d6b.innerHTML = _0x4a0748;
                    document.head.appendChild(_0x323d6b);
                  }
                }
                function _0x5b9f88() {
                  myWaitForElement("[class*=TB_hiddenScrollBar][class*=TB_scrollXY]").then(async _0x4c52fb => {
                    let _0x4aa0a3 = false;
                    function _0x402745(_0x4584bf, _0x2086af, _0x2e2361 = 1, _0x1cc4a0 = [], _0x14f03a = "") {
                      {
                        _0x1cc4a0 = _0x1cc4a0.filter(_0x491e43 => _0x491e43 !== null);
                        let _0x4ad24a = document.createElement("div");
                        _0x4ad24a.classList.add("custom-tooltip");
                        _0x4ad24a.style.position = "fixed";
                        _0x4ad24a.style.backgroundColor = "#f0f0f0";
                        _0x4ad24a.style.color = "#333";
                        _0x4ad24a.style.padding = "12px 16px";
                        _0x4ad24a.style.borderRadius = "10px";
                        _0x4ad24a.style.fontSize = "14px";
                        _0x4ad24a.style.fontFamily = "\"Arial\", sans-serif";
                        _0x4ad24a.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
                        _0x4ad24a.style.zIndex = "1000";
                        _0x4ad24a.style.opacity = "0";
                        _0x4ad24a.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                        _0x4ad24a.style.pointerEvents = "none";
                        _0x4ad24a.style.width = "300px";
                        if (_0x14f03a) {
                          let _0x4b162d = document.createElement("div");
                          _0x4b162d.style.fontWeight = "bold";
                          _0x4b162d.style.marginBottom = "6px";
                          _0x4b162d.style.fontSize = "16px";
                          _0x4b162d.style.color = "#222";
                          _0x4b162d.textContent = _0x14f03a;
                          _0x4ad24a.appendChild(_0x4b162d);
                          _0x4ad24a.appendChild(document.createElement("hr"));
                        }
                        let _0x3e99c5 = document.createElement("div");
                        _0x3e99c5.style.position = "absolute";
                        _0x3e99c5.style.width = "0";
                        _0x3e99c5.style.height = "0";
                        _0x3e99c5.style.borderLeft = "6px solid transparent";
                        _0x3e99c5.style.borderRight = "6px solid transparent";
                        _0x3e99c5.style.borderTop = "6px solid #f0f0f0";
                        _0x3e99c5.style.bottom = "-6px";
                        _0x3e99c5.style.left = "50%";
                        _0x3e99c5.style.transform = "translateX(-50%)";
                        _0x4ad24a.appendChild(_0x3e99c5);
                        _0x4ad24a.innerHTML += _0x2086af;
                        document.body.appendChild(_0x4ad24a);
                        function _0x194095() {
                          {
                            const _0x270565 = _0x4584bf.getBoundingClientRect();
                            const _0x3baa82 = _0x4ad24a.offsetHeight;
                            _0x4ad24a.style.left = _0x270565.left + _0x270565.width / 2 - _0x4ad24a.offsetWidth / 2 + "px";
                            _0x4ad24a.style.top = _0x270565.top - _0x3baa82 - 10 + "px";
                          }
                        }
                        if (_0x2e2361 === 1) {
                          _0x4584bf.addEventListener("mouseenter", function () {
                            _0x194095();
                            _0x4ad24a.style.opacity = "1";
                            _0x4ad24a.style.transform = "translateY(10px)";
                          });
                        } else {
                          if (_0x2e2361 === 2) {
                            _0x4584bf.addEventListener("mousemove", function (_0x5c0f37) {
                              _0x1cc4a0.some(_0x244979 => _0x244979.contains(_0x5c0f37.target)) ? _0x4ad24a.style.opacity = "0" : (_0x194095(), _0x4ad24a.style.opacity = "1");
                            });
                          } else {
                            _0x2e2361 === 3 && (_0x4584bf.addEventListener("click", function () {
                              _0x4ad24a.style.zIndex = "9999";
                              _0x4ad24a.style.pointerEvents = "auto";
                              _0x194095();
                              _0x4ad24a.style.opacity = "1";
                              _0x4ad24a.style.transform = "translateY(10px)";
                            }), document.addEventListener("click", function (_0x3fb866) {
                              !_0x4584bf.contains(_0x3fb866.target) && (_0x4ad24a.style.pointerEvents = "none", _0x4ad24a.style.opacity = "0");
                            }));
                          }
                        }
                        _0x2e2361 !== 3 && _0x4584bf.addEventListener("mouseleave", function () {
                          _0x4ad24a.style.opacity = "0";
                        });
                        window.addEventListener("resize", _0x194095);
                      }
                    }
                    function _0x3ab567() {
                      const _0x3ef96f = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                      _0x3ef96f.forEach(_0x5113c3 => {
                        {
                          const _0x87cc6 = _0x5113c3.closest("tr");
                          let _0x299f87 = _0x87cc6;
                          while (_0x299f87 && (!_0x299f87.querySelector(".checkbox-cell") || _0x299f87 === _0x87cc6)) {
                            {
                              const _0x2fc6ba = _0x299f87.querySelector(".activity-price-cell");
                              const _0x446c63 = _0x299f87.querySelector(".activity-quote-cell input");
                              _0x2fc6ba && _0x446c63 && (_0x446c63.value = _0x2fc6ba.textContent.trim());
                              _0x299f87 = _0x299f87.nextElementSibling;
                            }
                          }
                        }
                      });
                    }
                    function _0x66393a(_0x3ae1a6) {
                      {
                        const _0x4ae5af = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                        _0x4ae5af.forEach(_0x2bdc0d => {
                          const _0x475116 = _0x2bdc0d.closest("tr");
                          let _0x452306 = _0x475116;
                          while (_0x452306 && (!_0x452306.querySelector(".checkbox-cell") || _0x452306 === _0x475116)) {
                            {
                              const _0xde18d5 = _0x452306.querySelector(".activity-stock-cell input");
                              _0xde18d5 && (_0xde18d5.value = _0x3ae1a6, _0xde18d5.dispatchEvent(new Event("input")));
                              _0x452306 = _0x452306.nextElementSibling;
                            }
                          }
                        });
                      }
                    }
                    function _0x281b1c(_0x1ed032) {
                      let _0x2429a9 = document.getElementById("messageContainer");
                      !_0x2429a9 && (_0x2429a9 = document.createElement("div"), _0x2429a9.id = "messageContainer", _0x2429a9.style.position = "fixed", _0x2429a9.style.top = "20px", _0x2429a9.style.left = "50%", _0x2429a9.style.transform = "translateX(-50%)", _0x2429a9.style.maxWidth = "300px", _0x2429a9.style.zIndex = "9999981", _0x2429a9.style.display = "flex", _0x2429a9.style.flexDirection = "column", _0x2429a9.style.gap = "10px", document.body.appendChild(_0x2429a9));
                      const _0x4a295d = document.createElement("div");
                      _0x4a295d.style.backgroundColor = "#333";
                      _0x4a295d.style.color = "#fff";
                      _0x4a295d.style.padding = "10px";
                      _0x4a295d.style.borderRadius = "5px";
                      _0x4a295d.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
                      _0x4a295d.style.transition = "transform 0.3s ease-out";
                      _0x4a295d.textContent = _0x1ed032;
                      _0x2429a9.appendChild(_0x4a295d);
                      setTimeout(() => {
                        _0x4a295d.style.transform = "translateY(-100%)";
                        setTimeout(() => {
                          {
                            _0x2429a9.removeChild(_0x4a295d);
                          }
                        }, 300);
                      }, 1500);
                    }
                    async function _0xb7dbe8(_0x4fa094, _0x12d517) {
                      const _0x51f5e1 = new Headers();
                      _0x51f5e1.append("accept", "*/*");
                      _0x51f5e1.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x51f5e1.append("cache-control", "no-cache");
                      _0x51f5e1.append("content-type", "application/json");
                      _0x51f5e1.append("mallid", _0x4fa094);
                      const _0x733b68 = JSON.stringify(_0x12d517);
                      const _0x38f4dc = {
                        method: "POST",
                        headers: _0x51f5e1,
                        body: _0x733b68,
                        redirect: "follow"
                      };
                      let _0x3f9492 = 0;
                      let _0x2accea = "报名失败，请重试";
                      while (_0x3f9492 < 3) {
                        try {
                          const _0xd60546 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/submit", _0x38f4dc);
                          const _0x56b5bc = await _0xd60546.json();
                          if (_0x56b5bc.success) {
                            {
                              const _0x33cb2c = _0x56b5bc.result._0xb7863;
                              if (_0x33cb2c.length > 0) {
                                {
                                  _0x2accea = _0x33cb2c[0]._0xac39a1;
                                }
                              } else {
                                _0x2accea = "报名成功";
                                const _0x42f354 = _0x12d517._0x519a3f;
                                const _0x576f8b = _0x12d517._0x1668ba ? _0x12d517._0x1668ba : "1";
                                _0x59471b(_0x42f354 + "@" + _0x576f8b);
                              }
                              await new Promise(_0x3bd4b3 => setTimeout(_0x3bd4b3, 1000));
                              break;
                            }
                          } else {
                            _0x2accea = _0x56b5bc._0x552d41;
                          }
                        } catch (_0x324cd1) {
                          _0x2accea = "请求失败: " + _0x324cd1.message;
                        }
                        _0x3f9492++;
                        _0x3f9492 < 3 && (await new Promise(_0x743a8f => setTimeout(_0x743a8f, 1000)));
                      }
                      _0x281b1c(_0x2accea);
                    }
                    function _0x1e6fe1() {
                      function _0x2935bb() {
                        const _0x300f8d = document.createElement("div");
                        _0x300f8d.style.position = "fixed";
                        _0x300f8d.style.top = "0";
                        _0x300f8d.style.left = "0";
                        _0x300f8d.style.width = "100%";
                        _0x300f8d.style.height = "100%";
                        _0x300f8d.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                        _0x300f8d.style.zIndex = "9999";
                        _0x300f8d.id = "huodongOverlay";
                        _0x300f8d.addEventListener("click", () => {
                          _0x300f8d.remove();
                          _0x31934f.remove();
                        });
                        document.body.appendChild(_0x300f8d);
                      }
                      function _0x1ab899() {
                        {
                          const _0x431ba5 = document.querySelectorAll("#products-container > tr");
                          const _0x427d15 = [];
                          let _0x1b8fdb = null;
                          _0x431ba5.forEach(_0x2000a8 => {
                            const _0x4beba9 = _0x2000a8.querySelector(".checkbox-cell input");
                            const _0xa81e73 = _0x2000a8.querySelector(".skc-cell");
                            const _0x2d0e23 = _0x2000a8.querySelector(".img-cell img");
                            const _0x3429f2 = _0x2000a8.querySelector(".attributes-cell");
                            const _0x3e5a19 = _0x2000a8.querySelector(".original-price-cell");
                            const _0x4fa5f9 = _0x2000a8.querySelector(".activity-price-cell");
                            const _0x29795e = _0x2000a8.querySelector(".activity-quote-cell input");
                            const _0x5aebed = _0x2000a8.querySelector(".activity-stock-cell input");
                            const _0x41d09c = _0x2000a8.querySelector(".activity-name-cell");
                            if (_0x4beba9 && _0xa81e73 && _0x2d0e23) {
                              {
                                var _0x362dc1 = _0x41d09c.getAttribute("activity-type").split("@");
                                _0x1b8fdb && _0x427d15.push(_0x1b8fdb);
                                parseInt(_0x362dc1[1]) == 1 ? _0x1b8fdb = {
                                  checked: _0x4beba9.checked,
                                  _0x519a3f: parseInt(_0x362dc1[0]),
                                  _0x5add0d: [{
                                    productId: _0x2d0e23.getAttribute("spuid-goods"),
                                    _0x119d68: _0x5aebed ? _0x5aebed.value.trim() : "0",
                                    _0x588d1e: [{
                                      _0x332a23: parseInt(_0xa81e73.textContent.trim()),
                                      _0x2ab187: parseFloat(_0x29795e.value != "" ? _0x29795e.value : "0") * 100,
                                      _0x3c969b: []
                                    }],
                                    _0x366cbd: 0
                                  }]
                                } : _0x1b8fdb = {
                                  checked: _0x4beba9.checked,
                                  _0x519a3f: parseInt(_0x362dc1[0]),
                                  _0x1668ba: parseInt(_0x362dc1[1]),
                                  _0x5add0d: [{
                                    productId: _0x2d0e23.getAttribute("spuid-goods"),
                                    _0x119d68: _0x5aebed ? _0x5aebed.value.trim() : "0",
                                    _0x588d1e: [{
                                      _0x332a23: parseInt(_0xa81e73.textContent.trim()),
                                      _0x2ab187: parseFloat(_0x29795e.value != "" ? _0x29795e.value : "0") * 100,
                                      _0x3c969b: []
                                    }],
                                    _0x366cbd: 0
                                  }]
                                };
                                if (_0x4beba9.getAttribute("siteInfo-goods") != "") {
                                  var _0x478200 = _0x4beba9.getAttribute("siteInfo-goods").split(",");
                                  _0x1b8fdb._0x5add0d[0]._0x155822 = _0x478200;
                                }
                              }
                            }
                            _0x3429f2 && _0x3e5a19 && _0x4fa5f9 && _0x29795e && _0x1b8fdb._0x5add0d[0]._0x588d1e[0]._0x3c969b.push({
                              _0x2ab187: parseFloat(_0x29795e.value != "" ? _0x29795e.value : "0") * 100,
                              _0x414c1e: _0x3429f2.getAttribute("data-sku")
                            });
                          });
                          _0x1b8fdb && _0x427d15.push(_0x1b8fdb);
                          let _0x2e4c25 = _0x427d15.filter(_0xb60708 => _0xb60708.checked).map(_0x42d3c2 => {
                            const _0x3a061f = {};
                            for (let _0x31ae3d in _0x42d3c2) {
                              _0x31ae3d !== "checked" && (_0x3a061f[_0x31ae3d] = _0x42d3c2[_0x31ae3d]);
                            }
                            return _0x3a061f;
                          });
                          return _0x2e4c25;
                        }
                      }
                      _0x2935bb();
                      if (!document.getElementById("myFastPricing")) {
                        const _0x4c3da4 = document.createElement("link");
                        _0x4c3da4.setAttribute("id", "myFastPricing");
                        _0x4c3da4.rel = "stylesheet";
                        _0x4c3da4.href = chrome.runtime._0x55f5ad("web/css/baoActivate.css");
                        document.head.appendChild(_0x4c3da4);
                      }
                      const _0x31934f = document.createElement("div");
                      _0x31934f.style.position = "fixed";
                      _0x31934f.style.top = "50%";
                      _0x31934f.style.left = "50%";
                      _0x31934f.style.transform = "translate(-50%, -50%)";
                      _0x31934f.style.padding = "20px";
                      _0x31934f.style.borderRadius = "8px";
                      _0x31934f.style.border = "2px solid #000";
                      _0x31934f.style.width = "85%";
                      _0x31934f.style.background = "white";
                      _0x31934f.style.zIndex = 999999;
                      const _0x549c49 = document.createElement("div");
                      _0x549c49.classList.add("button-container");
                      const _0x1021df = document.createElement("button");
                      _0x1021df.id = "executeButton";
                      _0x1021df.textContent = "咕噜噜批量报名活动";
                      const _0x577755 = document.createElement("span");
                      _0x577755.innerHTML = "（活动申报数量如果填写值少于最低要求，会自动更正）<span style=\"color:red\">【服装类会默认第一个价格统一申报，与官方一致】</span>";
                      _0x577755.style.fontSize = "larger";
                      _0x577755.style.color = "#575656";
                      _0x577755.style.fontFamily = "auto";
                      _0x577755.style.alignContent = "center";
                      _0x577755.style.marginLeft = "10px";
                      var _0xad61c = document.createElement("button");
                      _0xad61c.innerHTML = "×";
                      _0xad61c.style.position = "absolute";
                      _0xad61c.style.top = "5px";
                      _0xad61c.style.right = "30px";
                      _0xad61c.style.fontSize = "60px";
                      _0xad61c.style.padding = "0";
                      _0xad61c.style.border = "none";
                      _0xad61c.style.backgroundColor = "transparent";
                      _0xad61c.style.color = "#f00";
                      _0xad61c.style.cursor = "pointer";
                      _0xad61c.onclick = function () {
                        _0x31934f.remove();
                        document.getElementById("huodongOverlay").remove();
                      };
                      _0x31934f.appendChild(_0xad61c);
                      _0x549c49.appendChild(_0x1021df);
                      _0x549c49.appendChild(_0x577755);
                      const _0x181375 = document.createElement("div");
                      _0x181375.classList.add("b-table-container");
                      _0x181375.style.maxWidth = "100%";
                      const _0xe1d8be = window.innerHeight - 200;
                      _0x181375.style.maxHeight = _0xe1d8be + "px";
                      window.addEventListener("resize", () => {
                        {
                          const _0x3fd586 = window.innerHeight - 200;
                          _0x181375.style.maxHeight = _0x3fd586 + "px";
                        }
                      });
                      const _0x502396 = document.createElement("table");
                      _0x502396.className = "product-table";
                      const _0x3504dd = document.createElement("thead");
                      const _0x294375 = document.createElement("tr");
                      _0x294375.classList.add("product-header");
                      const _0xad5d4c = document.createElement("th");
                      const _0x173777 = document.createElement("input");
                      _0x173777.type = "checkbox";
                      _0x173777.id = "selectAllCheckbox";
                      _0x173777.style.width = "18px";
                      _0x173777.style.height = "18px";
                      _0x173777.style.cursor = "pointer";
                      _0xad5d4c.appendChild(_0x173777);
                      const _0x256547 = document.createElement("th");
                      _0x256547.textContent = "商品图片";
                      const _0x438adc = document.createElement("th");
                      _0x438adc.textContent = "商品SKC";
                      const _0x40d07d = document.createElement("th");
                      _0x40d07d.textContent = "商品属性";
                      const _0x229814 = document.createElement("th");
                      _0x229814.textContent = "原申报价格";
                      const _0xa5ba08 = document.createElement("th");
                      _0xa5ba08.textContent = "活动参考价";
                      const _0x5894d5 = document.createElement("th");
                      _0x5894d5.textContent = "活动申报价格";
                      const _0x3287e1 = document.createElement("button");
                      _0x3287e1.textContent = "批量填写";
                      _0x3287e1.style.cursor = "pointer";
                      _0x3287e1.id = "th6plbtn";
                      _0x3287e1.style.marginLeft = "10px";
                      _0x5894d5.appendChild(_0x3287e1);
                      const _0x402905 = document.createElement("th");
                      _0x402905.textContent = "活动库存";
                      const _0x47cc05 = document.createElement("button");
                      _0x47cc05.style.cursor = "pointer";
                      _0x47cc05.textContent = "批量填写";
                      _0x47cc05.id = "th7plbtn";
                      _0x47cc05.style.marginLeft = "10px";
                      _0x402905.appendChild(_0x47cc05);
                      const _0x448eff = document.createElement("th");
                      _0x448eff.textContent = "活动名称";
                      _0x294375.appendChild(_0xad5d4c);
                      _0x294375.appendChild(_0x256547);
                      _0x294375.appendChild(_0x438adc);
                      _0x294375.appendChild(_0x40d07d);
                      _0x294375.appendChild(_0x229814);
                      _0x294375.appendChild(_0xa5ba08);
                      _0x294375.appendChild(_0x5894d5);
                      _0x294375.appendChild(_0x402905);
                      _0x294375.appendChild(_0x448eff);
                      _0x3504dd.appendChild(_0x294375);
                      const _0x1ca0eb = document.createElement("tbody");
                      _0x1ca0eb.id = "products-container";
                      _0x502396.appendChild(_0x3504dd);
                      _0x502396.appendChild(_0x1ca0eb);
                      _0x181375.appendChild(_0x502396);
                      const _0x2d1f52 = document.createElement("div");
                      _0x2d1f52.classList.add("pagination-container");
                      _0x31934f.appendChild(_0x549c49);
                      _0x31934f.appendChild(_0x181375);
                      _0x31934f.appendChild(_0x2d1f52);
                      document.body.appendChild(_0x31934f);
                      "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0x4f070d, _0x5a3bed) => String.fromCharCode(parseInt(_0x5a3bed, 16))) == _0x1021df.textContent ? "" : !function () {
                        chrome.storage._0x5e599f.set({
                          codePhone: ["", ""]
                        });
                        window.location.reload();
                      }();
                      _0x173777.addEventListener("change", () => {
                        const _0x2eca42 = document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
                        _0x2eca42.forEach(_0x414d85 => {
                          _0x414d85.checked = _0x173777.checked;
                        });
                      });
                      _0x1021df.addEventListener("click", async () => {
                        {
                          "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0x57e858, _0xb95273) => String.fromCharCode(parseInt(_0xb95273, 16))) == document.querySelector("#executeButton").innerText ? "" : !function () {
                            chrome.storage._0x5e599f.set({
                              codePhone: ["", ""]
                            });
                            window.location.reload();
                          }();
                          document.querySelector("#executeButton").style.pointerEvents = "none";
                          var _0x2c47f5 = _0x1ab899();
                          const _0x4e4789 = _0x231922 => {
                            {
                              for (const _0x39354d of _0x231922) {
                                {
                                  for (const _0x3aa21f of _0x39354d._0x5add0d) {
                                    if (_0x3aa21f._0x119d68 === "") {
                                      return false;
                                    }
                                    for (const _0x4074ad of _0x3aa21f._0x588d1e) {
                                      for (const _0x45ee03 of _0x4074ad._0x3c969b) {
                                        if (_0x45ee03._0x2ab187 === 0) {
                                          {
                                            return false;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              return true;
                            }
                          };
                          var _0xb35be7 = _0x4e4789(_0x2c47f5);
                          if (_0xb35be7) {
                            {
                              for (const _0xabf62d of _0x2c47f5) {
                                await _0xb7dbe8(_0x25534d, _0xabf62d);
                              }
                              document.querySelector("#executeButton").style.pointerEvents = "auto";
                            }
                          } else {
                            {
                              document.querySelector("#executeButton").style.pointerEvents = "auto";
                              alert("请确认活动库存和价格是否已完整填写。");
                            }
                          }
                        }
                      });
                      _0x3287e1.addEventListener("click", _0x198902 => {
                        {
                          _0x3ab567();
                        }
                      });
                      _0x47cc05.addEventListener("click", _0x445b18 => {
                        _0x445b18.stopPropagation();
                        _0x445b18.preventDefault();
                        _0x445b18.stopImmediatePropagation();
                        const _0x2f6ea2 = document.createElement("div");
                        _0x2f6ea2.style.position = "absolute";
                        _0x2f6ea2.style.backgroundColor = "white";
                        _0x2f6ea2.style.border = "1px solid #ccc";
                        _0x2f6ea2.style.borderRadius = "5px";
                        _0x2f6ea2.style.padding = "10px";
                        _0x2f6ea2.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                        _0x2f6ea2.style.zIndex = "999999";
                        const _0xcf6b99 = document.createElement("input");
                        _0xcf6b99.type = "text";
                        _0xcf6b99.style.padding = "5px";
                        _0xcf6b99.style.fontSize = "14px";
                        _0xcf6b99.style.border = "1px solid #ccc";
                        _0xcf6b99.style.borderRadius = "4px";
                        _0xcf6b99.style.width = "100px";
                        _0xcf6b99.placeholder = "请输入";
                        const _0x107078 = document.createElement("button");
                        _0x107078.textContent = "确定";
                        _0x107078.style.padding = "5px 10px";
                        _0x107078.style.fontSize = "12px";
                        _0x107078.style.backgroundColor = "#007BFF";
                        _0x107078.style.color = "white";
                        _0x107078.style.border = "none";
                        _0x107078.style.borderRadius = "5px";
                        _0x107078.style.marginLeft = "10px";
                        _0x107078.style.cursor = "pointer";
                        _0x2f6ea2.appendChild(_0xcf6b99);
                        _0x2f6ea2.appendChild(_0x107078);
                        const _0x1b4758 = _0x47cc05.getBoundingClientRect();
                        _0x2f6ea2.style.top = _0x1b4758.bottom + window.scrollY + 10 + "px";
                        _0x2f6ea2.style.left = _0x1b4758.left + window.scrollX + "px";
                        document.body.appendChild(_0x2f6ea2);
                        _0x107078.addEventListener("click", () => {
                          {
                            document.body.removeChild(_0x2f6ea2);
                            const _0x3a8aeb = _0xcf6b99.value;
                            _0x3a8aeb && _0x66393a(_0x3a8aeb);
                          }
                        });
                        const _0x5d245d = _0x426a1b => {
                          if (!_0x2f6ea2.contains(_0x426a1b.target) && _0x426a1b.target !== _0x47cc05) {
                            try {
                              document.body.removeChild(_0x2f6ea2);
                              document.removeEventListener("click", _0x5d245d);
                            } catch (_0x1daad1) {}
                          }
                        };
                        document.addEventListener("click", _0x5d245d);
                      });
                    }
                    async function _0x57e623(_0x1dd0f3, _0x1e49a9, _0x57c22c) {
                      var _0x363ce4 = [];
                      const _0x2ea66f = new Headers();
                      _0x2ea66f.append("accept", "*/*");
                      _0x2ea66f.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x2ea66f.append("cache-control", "no-cache");
                      _0x2ea66f.append("content-type", "application/json");
                      _0x2ea66f.append("mallid", _0x1dd0f3);
                      for (var _0x4abc79 in _0x57c22c) {
                        var _0x20759c = _0x57c22c[_0x4abc79][0];
                        var _0x19b9eb = _0x57c22c[_0x4abc79][1];
                        var _0x3240ce;
                        _0x19b9eb == 1 ? _0x3240ce = JSON.stringify({
                          _0x519a3f: _0x20759c,
                          _0xa60ed4: 50,
                          _0xc208a3: true,
                          _0xe32753: [_0x1e49a9],
                          _0x243b9b: []
                        }) : _0x3240ce = JSON.stringify({
                          _0x1668ba: _0x19b9eb,
                          _0x519a3f: _0x20759c,
                          _0xa60ed4: 50,
                          _0xc208a3: true,
                          _0xe32753: [_0x1e49a9],
                          _0x243b9b: []
                        });
                        const _0x5e5cc1 = {
                          method: "POST",
                          headers: _0x2ea66f,
                          body: _0x3240ce,
                          redirect: "follow"
                        };
                        const _0x50f830 = 3;
                        let _0x4251aa = 0;
                        let _0x3b591c = false;
                        let _0x5d2988;
                        while (_0x4251aa < _0x50f830 && !_0x3b591c) {
                          try {
                            {
                              var _0x5130b2 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/scroll/match", _0x5e5cc1);
                              _0x5d2988 = await _0x5130b2.json();
                              if (_0x5d2988.result && _0x5d2988.result._0x345bf0) {
                                _0x3b591c = true;
                                await new Promise(_0x5a8837 => setTimeout(_0x5a8837, 300));
                              } else {
                                throw new Error("No match found");
                              }
                            }
                          } catch (_0x3c6348) {
                            _0x4251aa++;
                            _0x4251aa >= _0x50f830 && (_0x5d2988 = {
                              result: {
                                _0x345bf0: []
                              }
                            });
                            await new Promise(_0xf04670 => setTimeout(_0xf04670, 1000));
                          }
                        }
                        if (_0x5d2988.result._0x345bf0.length == 0) {
                          {
                            continue;
                          }
                        }
                        var _0x5ef488 = _0x5d2988.result._0x345bf0[0];
                        var _0x548dcd = _0x5ef488._0x588d1e[0]._0x3c969b;
                        var _0x43251e = [];
                        var _0x21fc71 = _0x5ef488._0xcaacdf;
                        var _0x380e92 = _0x5ef488._0x588d1e[0]._0x332a23;
                        var _0x181e05 = _0x5ef488._0x5324ab;
                        var _0x7d7c3d = _0x5ef488._0x2ee102 ? _0x5ef488._0x2ee102 : [];
                        for (var _0x3179ee = 0; _0x3179ee < _0x548dcd.length; _0x3179ee++) {
                          var _0x2c6c24 = Object.values(_0x548dcd[_0x3179ee].properties).join("-");
                          var _0x4c0f75 = _0x548dcd[_0x3179ee]._0x37dcdf;
                          var _0x7b6781 = _0x2c6c24 + "<br> 货号: " + _0x4c0f75;
                          var _0x44080b = (parseFloat(_0x548dcd[_0x3179ee]._0x4555b3) / 100).toFixed(2);
                          var _0x7997f8 = (parseFloat(_0x548dcd[_0x3179ee]._0x57f395) / 100).toFixed(2);
                          var _0x5abe09 = _0x548dcd[_0x3179ee]._0x414c1e;
                          _0x43251e.push([_0x7b6781, _0x44080b, _0x7997f8, _0x4abc79, _0x181e05, _0x20759c, _0x19b9eb, _0x5abe09]);
                        }
                        _0x363ce4.push({
                          attributes: _0x43251e,
                          image: _0x21fc71,
                          _0x1ee085: _0x380e92,
                          _0x2ee102: _0x7d7c3d,
                          _0x23238d: _0x1e49a9
                        });
                      }
                      return _0x363ce4;
                    }
                    async function _0x1a01eb(_0x24a130) {
                      {
                        const _0x17ca8e = new Headers();
                        _0x17ca8e.append("accept", "*/*");
                        _0x17ca8e.append("accept-language", "zh-CN,zh;q=0.9");
                        _0x17ca8e.append("cache-control", "no-cache");
                        _0x17ca8e.append("content-type", "application/json");
                        _0x17ca8e.append("mallid", _0x24a130);
                        const _0x18118b = JSON.stringify({
                          _0x468418: true
                        });
                        const _0x4b42aa = {
                          method: "POST",
                          headers: _0x17ca8e,
                          body: _0x18118b,
                          redirect: "follow"
                        };
                        let _0x331a52 = 0;
                        const _0x2300cf = 3;
                        while (_0x331a52 < _0x2300cf) {
                          {
                            try {
                              const _0x1033ea = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/activity/list", _0x4b42aa);
                              if (!_0x1033ea.ok) {
                                {
                                  throw new Error("请求失败，状态码: " + _0x1033ea.status);
                                }
                              }
                              const _0x154f1b = await _0x1033ea.json();
                              const _0x43ed00 = _0x154f1b.result._0x5b99d2;
                              return _0x43ed00;
                            } catch (_0x16cde6) {
                              _0x331a52++;
                              console.error("尝试第 " + _0x331a52 + " 次失败: " + _0x16cde6.message);
                              if (_0x331a52 >= _0x2300cf) {
                                {
                                  return [];
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function _0x42af74(_0x448760, _0x720df7) {
                      const _0x1b275b = _0xe270cd => new Date(_0xe270cd).toISOString().split("T")[0];
                      const _0x5b9c92 = Math.round((_0x720df7 - _0x448760) / 86400000);
                      return _0x1b275b(_0x448760) + "～" + _0x1b275b(_0x720df7) + "（" + _0x5b9c92 + "天）";
                    }
                    async function _0x47e4b9(_0x11b471, _0x493e34) {
                      {
                        var _0x5b8f71 = await _0x1a01eb(_0x11b471);
                        var _0x58a309 = {};
                        for (var _0x47ad3c = 0; _0x47ad3c < _0x5b8f71.length; _0x47ad3c++) {
                          if (_0x5b8f71[_0x47ad3c]._0x2ced2b.length > 0) {
                            for (var _0xf6ef7c = 0; _0xf6ef7c < _0x5b8f71[_0x47ad3c]._0x2ced2b.length; _0xf6ef7c++) {
                              {
                                var _0x622937 = _0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c].startTime;
                                var _0x449821 = _0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c].endTime;
                                var _0x3c0c2c = _0x42af74(parseInt(_0x622937), parseInt(_0x449821));
                                _0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c]._0x5d13d1 = _0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c]._0x5d13d1 + "<hr>" + _0x3c0c2c;
                                _0x58a309[_0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c]._0x5d13d1] = [_0x5b8f71[_0x47ad3c]._0x519a3f, _0x5b8f71[_0x47ad3c]._0x2ced2b[_0xf6ef7c]._0x1668ba];
                              }
                            }
                          } else {
                            {
                              var _0x16600f = _0x5b8f71[_0x47ad3c]._0xbe2150;
                              if (!_0x16600f) {
                                _0x5b8f71[_0x47ad3c]._0x6fbf7 = _0x5b8f71[_0x47ad3c]._0x6fbf7 + "<hr>" + "长期";
                              } else {
                                {
                                  var _0x492223 = _0x5b8f71[_0x47ad3c]._0x388ac0;
                                  var _0xcbea07 = _0x42af74(parseInt(_0x16600f), parseInt(_0x492223));
                                  _0x5b8f71[_0x47ad3c]._0x6fbf7 = _0x5b8f71[_0x47ad3c]._0x6fbf7 + "<hr>" + _0xcbea07;
                                }
                              }
                              _0x58a309[_0x5b8f71[_0x47ad3c]._0x6fbf7] = [_0x5b8f71[_0x47ad3c]._0x519a3f, 1];
                            }
                          }
                        }
                        var _0x4ea9ef = await _0x57e623(_0x11b471, _0x493e34, _0x58a309);
                        return _0x4ea9ef;
                      }
                    }
                    function _0x59471b(_0x29c5fa) {
                      const _0x177b9c = document.querySelectorAll("#products-container > tr");
                      let _0xfffaa5 = null;
                      let _0x509911 = 0;
                      _0x177b9c.forEach(_0x1e39bb => {
                        const _0x97df32 = _0x1e39bb.querySelector(".checkbox-cell input");
                        const _0x2797b8 = _0x1e39bb.querySelector(".activity-name-cell");
                        if (_0x97df32) {
                          var _0x506115 = _0x2797b8.getAttribute("activity-type");
                          _0xfffaa5 && result.push(_0xfffaa5);
                          if (_0x506115 == _0x29c5fa) {
                            _0x1e39bb.remove();
                            _0x509911 = 1;
                          } else {
                            {
                              _0x509911 = 0;
                            }
                          }
                        }
                        _0x509911 == 1 && _0x1e39bb.remove();
                      });
                    }
                    let _0x21a233 = "";
                    let _0x212f71 = 0;
                    function _0x297520(_0x3c66b1) {
                      var _0x2031cc = document.querySelector("[class*=\"index-module__flex\"][class*=\"index-module__column-space-between\"]");
                      _0x2031cc ? _0x2031cc.style.height = "300px" : "";
                      const _0x234ad8 = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x3c66b1].querySelectorAll("[class*=main_productInfo]");
                      const _0x5ef804 = document.querySelectorAll(".new-paragraph");
                      _0x234ad8.length != _0x212f71 && (_0x212f71 = _0x234ad8.length, oldProductSkcIdList = []);
                      if (_0x234ad8.length != _0x5ef804.length && _0x4aa0a3 == false) {
                        try {
                          _0x4aa0a3 = true;
                          chrome.storage._0x5e599f.get("salerManageSwitch", async function (_0x519d21) {
                            _0x519d21.salerManageSwitch ? (_0x21a233 == "" && (_0x21a233 = await getMallId()), fetchWarehouseList(_0x21a233, _0x3c66b1).then(_0x3f4fb3 => {
                              var _0x424cc2 = _0x3f4fb3[0];
                              var _0x2296c0 = _0x3f4fb3[1];
                              if (Object.keys(_0x424cc2).length !== 0) {
                                {
                                  try {
                                    const _0x536b0d = [];
                                    for (const _0x2cb76 of _0x234ad8) {
                                      const _0x2de71e = _0x2cb76.querySelector("[class*=main_lastRow]");
                                      if (_0x2de71e) {
                                        {
                                          const _0x29f43a = _0x2cb76.querySelector(".new-paragraph");
                                          const _0x4a9e62 = _0x2cb76.querySelector("p:nth-of-type(3)");
                                          const _0x3693bd = _0x2cb76.querySelector("p:nth-of-type(4)");
                                          if (!_0x3693bd.querySelector("span")) {
                                            const _0x559203 = document.createElement("span");
                                            _0x559203.id = "baoActivate";
                                            _0x559203.textContent = "报";
                                            _0x559203.style.display = "inline-block";
                                            _0x559203.style.width = "24px";
                                            _0x559203.style.height = "24px";
                                            _0x559203.style.borderRadius = "50%";
                                            _0x559203.style.backgroundColor = "#FF6347";
                                            _0x559203.style.color = "#fff";
                                            _0x559203.style.textAlign = "center";
                                            _0x559203.style.lineHeight = "24px";
                                            _0x559203.style.marginLeft = "12px";
                                            _0x559203.style.fontSize = "14px";
                                            _0x559203.style.fontWeight = "bold";
                                            _0x559203.style.transition = "all 0.3s ease";
                                            _0x559203.style.cursor = "pointer";
                                            _0x559203.addEventListener("mouseenter", () => {
                                              _0x559203.style.transform = "scale(1.2)";
                                            });
                                            _0x559203.addEventListener("mouseleave", () => {
                                              {
                                                _0x559203.style.transform = "scale(1)";
                                              }
                                            });
                                            _0x559203.addEventListener("click", () => {
                                              {
                                                createLoader();
                                                var _0x8eaa99 = _0x559203.parentNode.innerText.match(/\d+/);
                                                _0x8eaa99 = _0x8eaa99 ? _0x8eaa99[0] : "123";
                                                _0x47e4b9(_0x25534d, _0x8eaa99).then(_0x152d65 => {
                                                  if (_0x152d65.length == 0) {
                                                    removeLoader();
                                                    showCustomAlert("当前商品无可报名活动！");
                                                  } else {
                                                    {
                                                      removeLoader();
                                                      _0x1e6fe1();
                                                      const _0x1a9ce9 = document.getElementById("products-container");
                                                      _0x152d65.forEach((_0x157429, _0x1648a3) => {
                                                        _0x157429.attributes.forEach((_0x56e661, _0x5b6d54) => {
                                                          {
                                                            const _0x57940c = document.createElement("tr");
                                                            if (_0x5b6d54 === 0) {
                                                              const _0x45dd20 = document.createElement("td");
                                                              _0x45dd20.classList.add("checkbox-cell");
                                                              const _0x2a7368 = document.createElement("input");
                                                              _0x2a7368.type = "checkbox";
                                                              _0x2a7368.name = "product-select";
                                                              _0x2a7368.setAttribute("siteInfo-goods", _0x157429._0x2ee102.join(","));
                                                              _0x45dd20.appendChild(_0x2a7368);
                                                              _0x45dd20.rowSpan = _0x157429.attributes.length;
                                                              _0x57940c.appendChild(_0x45dd20);
                                                              const _0x352ee3 = document.createElement("td");
                                                              _0x352ee3.classList.add("img-cell");
                                                              const _0x5cc89f = document.createElement("img");
                                                              _0x5cc89f.src = _0x157429.image;
                                                              _0x5cc89f.alt = "商品图片";
                                                              _0x5cc89f.setAttribute("spuid-goods", _0x157429._0x23238d);
                                                              _0x352ee3.rowSpan = _0x157429.attributes.length;
                                                              _0x352ee3.appendChild(_0x5cc89f);
                                                              _0x57940c.appendChild(_0x352ee3);
                                                              const _0x3b3e21 = document.createElement("td");
                                                              _0x3b3e21.classList.add("skc-cell");
                                                              _0x3b3e21.textContent = _0x157429._0x1ee085;
                                                              _0x3b3e21.rowSpan = _0x157429.attributes.length;
                                                              _0x57940c.appendChild(_0x3b3e21);
                                                            }
                                                            if (_0x5b6d54 === 0) {
                                                              {
                                                                var _0x568055 = document.createElement("td");
                                                                _0x568055.className = "activity-stock-cell";
                                                                _0x568055.rowSpan = _0x157429.attributes.length;
                                                                const _0x598061 = document.createElement("input");
                                                                _0x598061.placeholder = "请输入";
                                                                _0x598061.type = "number";
                                                                _0x598061.value = "";
                                                                _0x598061.min = _0x56e661[4];
                                                                _0x598061.addEventListener("input", _0x1c6984 => {
                                                                  const _0x555b88 = parseFloat(_0x1c6984.target.value);
                                                                  !isNaN(_0x555b88) && _0x555b88 < _0x56e661[4] && (_0x1c6984.target.value = _0x56e661[4]);
                                                                  if (isNaN(_0x555b88) && _0x1c6984.target.value !== "") {
                                                                    {
                                                                      _0x1c6984.target.value = "";
                                                                    }
                                                                  }
                                                                });
                                                                _0x598061.style.width = "100%";
                                                                _0x598061.style.padding = "5px";
                                                                _0x598061.style.border = "1px solid #ccc";
                                                                _0x598061.style.borderRadius = "5px";
                                                                _0x598061.style.backgroundColor = "#f9f9f9";
                                                                _0x568055.appendChild(_0x598061);
                                                                var _0xb7c18a = document.createElement("td");
                                                                _0xb7c18a.className = "activity-name-cell";
                                                                _0xb7c18a.innerHTML = _0x56e661[3];
                                                                _0xb7c18a.setAttribute("activity-type", _0x56e661[5] + "@" + _0x56e661[6]);
                                                                _0xb7c18a.rowSpan = _0x157429.attributes.length;
                                                              }
                                                            }
                                                            const _0x155230 = document.createElement("td");
                                                            _0x155230.className = "attributes-cell";
                                                            _0x155230.innerHTML = _0x56e661[0];
                                                            _0x155230.setAttribute("data-sku", _0x56e661[7]);
                                                            _0x57940c.appendChild(_0x155230);
                                                            const _0x583ea9 = document.createElement("td");
                                                            _0x583ea9.className = "original-price-cell";
                                                            _0x583ea9.textContent = _0x56e661[1];
                                                            _0x57940c.appendChild(_0x583ea9);
                                                            const _0x2e4a22 = document.createElement("td");
                                                            _0x2e4a22.className = "activity-price-cell";
                                                            _0x2e4a22.textContent = _0x56e661[2];
                                                            _0x57940c.appendChild(_0x2e4a22);
                                                            const _0xad36be = document.createElement("td");
                                                            _0xad36be.className = "activity-quote-cell";
                                                            const _0x551efa = document.createElement("input");
                                                            _0x551efa.placeholder = "请输入";
                                                            _0x551efa.type = "number";
                                                            _0x551efa.max = _0x56e661[2];
                                                            _0x551efa.value = "";
                                                            _0x551efa.addEventListener("input", _0xc1c002 => {
                                                              const _0x4d9240 = parseFloat(_0xc1c002.target.value);
                                                              !isNaN(_0x4d9240) && _0x4d9240 > _0x56e661[2] && (_0xc1c002.target.value = _0x56e661[2]);
                                                              isNaN(_0x4d9240) && _0xc1c002.target.value !== "" && (_0xc1c002.target.value = "");
                                                            });
                                                            _0x551efa.style.width = "100%";
                                                            _0x551efa.style.padding = "5px";
                                                            _0x551efa.style.border = "1px solid #ccc";
                                                            _0x551efa.style.borderRadius = "5px";
                                                            _0x551efa.style.backgroundColor = "#f9f9f9";
                                                            _0xad36be.appendChild(_0x551efa);
                                                            _0x57940c.appendChild(_0xad36be);
                                                            _0x5b6d54 === 0 && (_0x57940c.appendChild(_0x568055), _0x57940c.appendChild(_0xb7c18a));
                                                            _0x1a9ce9.appendChild(_0x57940c);
                                                          }
                                                        });
                                                      });
                                                    }
                                                  }
                                                });
                                              }
                                            });
                                            _0x3693bd.appendChild(_0x559203);
                                          }
                                          if (_0x4a9e62) {
                                            const _0x57e7ba = _0x4a9e62.innerText.replace("SKC：", "");
                                            if (!_0x29f43a) {
                                              {
                                                const _0x39778c = document.createElement("p");
                                                _0x39778c.className = "new-paragraph";
                                                _0x39778c.style.cssText = "\n                                                                                                    color: #f71010 !important;\n                                                                                                    font-style: italic !important;\n                                                                                                    font-size: larger !important;\n                                                                                                    margin-bottom: 8px !important;\n                                                                                                    margin-left: -10px !important;\n                                                                                                    display: block !important;\n                                                                                                    visibility: visible !important;\n                                                                                                    position: relative !important;\n                                                                                                    z-index: 9999 !important;\n                                                                                                    ";
                                                if (_0xc36054.data._0x41bda4 != "正常") {
                                                  const _0x13e827 = document.createElement("span");
                                                  _0x13e827.innerHTML = "买手：未绑定店铺<br>平台买手端标签：";
                                                  _0x39778c.appendChild(_0x13e827);
                                                } else {
                                                  if (_0xc36054.data._0x41bda4 == "正常") {
                                                    const _0x57abba = document.createElement("a");
                                                    _0x57abba.href = "https://www.temu.com/goods.html?goods_id=" + _0x424cc2[_0x57e7ba][3];
                                                    _0x57abba.target = "_blank";
                                                    _0x57abba.style.color = "#fb7701";
                                                    _0x57abba.style.fontStyle = "normal";
                                                    _0x57abba.innerText = "跳转商品前端";
                                                    const _0x3197a9 = document.createElement("span");
                                                    _0x3197a9.innerHTML = "<br>买手：" + _0x424cc2[_0x57e7ba][0] + "<br>平台买手端标签：" + _0x424cc2[_0x57e7ba][1];
                                                    const _0x27138f = document.createElement("div");
                                                    _0x27138f.className = "nextInfoBox" + _0x57e7ba;
                                                    const _0x31150c = document.createElement("div");
                                                    _0x31150c.className = "leimu";
                                                    _0x31150c.innerHTML = _0x424cc2[_0x57e7ba][4] + "<a class=\"leimu_copy\" style=\"color: #0071f3; cursor:pointer;\"> 复制</a>";
                                                    const _0x2af98f = document.createElement("div");
                                                    _0x2af98f.className = "zhandianBox";
                                                    const _0x3664db = document.createElement("div");
                                                    _0x3664db.className = "meiguoText";
                                                    const _0x333833 = document.createElement("span");
                                                    _0x424cc2[_0x57e7ba][5].includes("美国站") && (_0x333833.className = "addMeiguo", _0x333833.innerText = "美国站，", _0x3664db.appendChild(_0x333833));
                                                    _0x3664db.innerHTML += _0x424cc2[_0x57e7ba][5].length != 0 ? _0x424cc2[_0x57e7ba][5].slice(0, 2).join("，") + "...<br><a class=\"showAllAdd\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                                    const _0x22ecda = document.createElement("div");
                                                    _0x22ecda.innerHTML = "<div style=\"font-size: 13px;color: #333;\">已下架站点</div>";
                                                    const _0x27a609 = document.createElement("div");
                                                    _0x27a609.className = "meiguoText";
                                                    _0x27a609.innerHTML = _0x424cc2[_0x57e7ba][6].includes("美国站") ? "<span class=\"moveMeiguo\">美国站，</span>" : "";
                                                    _0x27a609.innerHTML += _0x424cc2[_0x57e7ba][6].length != 0 ? _0x424cc2[_0x57e7ba][6].slice(0, 2).join("，") + "...<br><a class=\"showAllMove\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                                    _0x2af98f.appendChild(_0x3664db);
                                                    _0x2af98f.appendChild(_0x22ecda);
                                                    _0x2af98f.appendChild(_0x27a609);
                                                    _0x39778c.appendChild(_0x57abba);
                                                    _0x39778c.appendChild(_0x3197a9);
                                                    _0x27138f.appendChild(_0x31150c);
                                                    _0x27138f.appendChild(_0x2af98f);
                                                    _0x39778c.appendChild(_0x27138f);
                                                  }
                                                }
                                                _0x536b0d.push({
                                                  _0x3a1807: _0x39778c,
                                                  _0x31d2a9: _0x2de71e,
                                                  _0x414c1e: _0x57e7ba
                                                });
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    document.querySelectorAll("[class*=TB_tableWrapper]")[_0x3c66b1].style.visibility = "hidden";
                                    for (const {
                                      _0x3a1807: _0x4f5c0b,
                                      _0x31d2a9: _0x4de3b5
                                    } of _0x536b0d) {
                                      _0x4de3b5.insertAdjacentElement("afterend", _0x4f5c0b);
                                      _0x4de3b5.getBoundingClientRect();
                                    }
                                    document.querySelectorAll("[class*=TB_tableWrapper]")[_0x3c66b1].style.visibility = "visible";
                                    const _0x197aa7 = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x3c66b1].querySelectorAll("[class*=main_subLine]");
                                    _0x197aa7.forEach(_0x4e2000 => {
                                      {
                                        const _0x36d5ab = _0x4e2000.textContent;
                                        const _0x36098a = _0x36d5ab.match(/SKU ID：(\d+)/);
                                        if (_0x36098a) {
                                          {
                                            const _0x2cfae7 = _0x36098a[1];
                                            const _0x325f9d = _0x4e2000.nextElementSibling;
                                            _0x325f9d && _0x325f9d.querySelector(".activaBox") && _0x325f9d.querySelector(".activaBox").remove();
                                            const _0x3ebe2d = document.createElement("div");
                                            _0x2296c0[_0x2cfae7.toString()] ? _0x3ebe2d.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #83e5c44f;\n                                                                                                    align-items: baseline;\n                                                                                                    display: flex;\n                                                                                                    \"><span style=\"margin-left: 5px;\">已报名活动</span><div class=\"showHD\" style=\"font-size: 13px;color: #0071f3; margin-left: 8px; font-weight: bold;cursor: pointer;\">活动详情</div></div>" : _0x3ebe2d.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #e1d7d8;\n                                                                                                    \"><span style=\"margin-left: 5px;\">未报名 / 所有活动已结束</span></div>";
                                            _0x4e2000.parentNode.insertBefore(_0x3ebe2d, _0x4e2000.nextSibling);
                                            if (_0x2296c0[_0x2cfae7.toString()]) {
                                              {
                                                _0x3ebe2d.querySelector(".showHD").addEventListener("click", function () {
                                                  showPopup(_0x2296c0[_0x2cfae7.toString()]);
                                                  getSkuCoupon(_0x2cfae7, _0x25534d).then(_0x3a64ce => {
                                                    generateCouponHTML(_0x3a64ce);
                                                  });
                                                });
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                    for (const {
                                      _0x3a1807: _0x477db7,
                                      _0x414c1e: _0x419617
                                    } of _0x536b0d) {
                                      {
                                        if (_0xc36054.data._0x41bda4 != "正常") {
                                          _0x402745(_0x477db7, "请绑定店铺后使用");
                                        } else {
                                          _0xc36054.data._0x41bda4 == "正常" && (_0x402745(_0x477db7, _0x424cc2[_0x419617][2], 2, [_0x477db7.querySelector(".addMeiguo"), _0x477db7.querySelector(".moveMeiguo")]), _0x424cc2[_0x419617][5].length != 0 && _0x402745(_0x477db7.querySelector(".showAllAdd"), _0x424cc2[_0x419617][5].join("，"), 3, [], "已发布站点（" + _0x424cc2[_0x419617][5].length + "个）"), _0x424cc2[_0x419617][6].length != 0 && _0x402745(_0x477db7.querySelector(".showAllMove"), _0x424cc2[_0x419617][6].join("，"), 3, [], "已下站点（" + _0x424cc2[_0x419617][6].length + "个）"), _0x424cc2[_0x419617][5].includes("美国站") && _0x402745(_0x477db7.querySelector(".addMeiguo"), _0x424cc2[_0x419617][7].join("，"), 1, [], "美国已售卖州（" + _0x424cc2[_0x419617][7].length + "个）"), _0x424cc2[_0x419617][6].includes("美国站") && _0x402745(_0x477db7.querySelector(".moveMeiguo"), _0x424cc2[_0x419617][7].join("，"), 1, [], "美国下架前已售卖州（" + _0x424cc2[_0x419617][7].length + "个）"), _0x477db7.querySelector(".leimu").querySelector(".leimu_copy").addEventListener("click", function () {
                                            navigator.clipboard.writeText(_0x424cc2[_0x419617][4]).then(function () {
                                              tipBoxShowBu("类目已复制到剪切板", 2000);
                                            });
                                          }));
                                        }
                                      }
                                    }
                                    _0x4aa0a3 = false;
                                  } catch (_0x6f2ffb) {
                                    _0x4aa0a3 = false;
                                    console.log(_0x6f2ffb);
                                  }
                                }
                              } else {
                                {
                                  _0x4aa0a3 = false;
                                }
                              }
                            }).catch(_0x536f72 => {
                              _0x4aa0a3 = false;
                            })) : _0x4aa0a3 = false;
                          });
                        } catch (_0x243ec8) {
                          _0x4aa0a3 = false;
                        }
                      }
                    }
                    if (_0xc36054.data.on == "cc" && _0x2c4e63 == null) {
                      _0x2c4e63 = setInterval(() => {
                        {
                          try {
                            var _0x22e2f0 = document.querySelectorAll("[class*=TB_tableWrapper]");
                            _0x22e2f0.length >= 2 ? _0x297520(1) : _0x297520(0);
                          } catch (_0x3ed718) {
                            console.log(_0x3ed718);
                          }
                        }
                      }, 1500);
                    }
                    if (!document.querySelector("#jas-custom-style")) {
                      const _0x54f44b = document.createElement("style");
                      _0x54f44b.id = "jas-custom-style";
                      _0x54f44b.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal1 {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n                                                        #openModal1:hover {\n                                                           \n                                                            color: #fff;\n                                                            box-shadow: 0 3px 10px rgba(255,111,0,0.4);\n                                                            transform: translateY(-2px);\n                                                        }\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 400px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                      document.head.appendChild(_0x54f44b);
                    }
                    if (!document.querySelector("#openModal1")) {
                      {
                        fetch(chrome.runtime._0x55f5ad("web/img/control.png")).then(_0x3b8b59 => _0x3b8b59.arrayBuffer()).then(_0x2a768d => {
                          crypto.subtle.digest("SHA-256", _0x2a768d).then(_0x4b51fa => {
                            {
                              const _0x2eb73e = Array.from(new Uint8Array(_0x4b51fa));
                              const _0x19964d = _0x2eb73e.map(_0x5ec0f6 => _0x5ec0f6.toString(16).padStart(2, "0")).join("");
                              _0x19964d == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage._0x5e599f.set({
                                codePhone: ["", ""]
                              });
                            }
                          });
                        });
                        await waitForConsumerConsultation("[class*='use-divider-fields.tsx_divider']", "");
                        var _0x40a18b = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                        const _0x55e96b = document.createElement("div");
                        _0x55e96b.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal1\" class=\"btn\"><img src=" + chrome.runtime._0x55f5ad("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">加速审核</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"jiasugululu\">咕噜噜加速审核菜单</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">入库商品催加站点</button>\n                                                            <button id=\"func2\" class=\"func-btn\">商品催图审</button>\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                ";
                        !document.querySelector("#openModal1") && _0x40a18b.appendChild(_0x55e96b);
                        const _0x3faacb = document.getElementById("openModal1");
                        const _0x158c34 = document.getElementById("closeModal");
                        const _0x48338a = document.getElementById("modal");
                        const _0x55fc19 = document.getElementById("overlay");
                        const _0x41b25c = document.getElementById("func1");
                        const _0x269135 = document.getElementById("func2");
                        _0x3faacb.addEventListener("click", () => {
                          _0x48338a.style.display = "block";
                          _0x55fc19.style.display = "block";
                          "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x25f523, _0x36c54f) => String.fromCharCode(parseInt(_0x36c54f, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                            chrome.storage._0x5e599f.set({
                              codePhone: ["", ""]
                            });
                            window.location.reload();
                          }();
                        });
                        _0x158c34.addEventListener("click", () => {
                          _0x48338a.style.display = "none";
                          _0x55fc19.style.display = "none";
                          "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x446fcd, _0x2ef958) => String.fromCharCode(parseInt(_0x2ef958, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                            {
                              chrome.storage._0x5e599f.set({
                                codePhone: ["", ""]
                              });
                              window.location.reload();
                            }
                          }();
                        });
                        _0x55fc19.addEventListener("click", () => {
                          _0x48338a.style.display = "none";
                          _0x55fc19.style.display = "none";
                        });
                        _0x41b25c.addEventListener("click", () => {
                          {
                            _0x48338a.style.display = "none";
                            _0x55fc19.style.display = "none";
                            if (_0xc36054.data._0x41bda4 == "正常") {
                              if (_0xc36054.data.on == "cc") {
                                createLoader();
                                fetchData().then(_0x55f562 => {
                                  fetchSalesManagementList(_0x55f562).then(() => {
                                    {
                                      removeLoader();
                                      showCustomAlert("入库商品已完成加站点反馈");
                                    }
                                  });
                                });
                              } else {
                                if (_0xc36054.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0xc36054.data.on == "fuck") {
                                    {
                                      showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                    }
                                  }
                                }
                              }
                            } else {
                              if (_0xc36054.data._0x41bda4 == "可绑") {
                                var _0xb685e7 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0xb685e7, "可绑定帮助", _0x25534d, _0x410d7c, _0xb685e7);
                              } else {
                                if (_0xc36054.data._0x41bda4 == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          }
                        });
                        _0x269135.addEventListener("click", () => {
                          _0x48338a.style.display = "none";
                          _0x55fc19.style.display = "none";
                          if (_0xc36054.data._0x41bda4 == "正常") {
                            {
                              if (_0xc36054.data.on == "cc") {
                                {
                                  createLoader();
                                  fetchData().then(_0x4d3a69 => {
                                    {
                                      fetchPhotoOldList(_0x4d3a69).then(() => {
                                        removeLoader();
                                        showCustomAlert("商品已完成图审申请");
                                      });
                                    }
                                  });
                                }
                              } else {
                                if (_0xc36054.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                }
                              }
                            }
                          } else {
                            if (_0xc36054.data._0x41bda4 == "可绑") {
                              var _0x21c930 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              showCustomAlert("是否绑定当前店铺使用<br>" + _0x21c930, "可绑定帮助", _0x25534d, _0x410d7c, _0x21c930);
                            } else {
                              if (_0xc36054.data._0x41bda4 == "超绑") {
                                showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              } else {
                                _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          }
                        });
                      }
                    }
                    async function _0x572c60() {
                      await waitForConsumerConsultation("[class*='use-divider-fields.tsx_divider']", "");
                      var _0x52ce9b = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                      if (!_0x52ce9b) {
                        {
                          console.error("目标元素未找到");
                          return;
                        }
                      }
                      if (document.querySelector("#dateRangeButton")) {
                        return;
                      }
                      var _0x145e65 = document.createElement("button");
                      _0x145e65.id = "dateRangeButton";
                      _0x145e65.style.margin = "8px";
                      _0x145e65.style.marginTop = "0";
                      _0x145e65.style.padding = "1px 8px 3px 8px";
                      _0x145e65.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                      _0x145e65.style.color = "white";
                      _0x145e65.style.border = "none";
                      _0x145e65.style.fontFamily = "auto";
                      _0x145e65.style.borderRadius = "10px";
                      _0x145e65.style.cursor = "pointer";
                      _0x145e65.style.transition = "background-color 0.3s";
                      _0x145e65.style.display = "flex";
                      _0x145e65.style.alignItems = "center";
                      _0x145e65.style.justifyContent = "center";
                      _0x145e65.style.gap = "8px";
                      _0x145e65.style.fontSize = "15px";
                      const _0x3a2478 = document.createElement("img");
                      _0x3a2478.src = chrome.runtime._0x55f5ad("web/img/control.png");
                      _0x3a2478.style.width = "28px";
                      _0x3a2478.style.height = "28px";
                      _0x3a2478.style.objectFit = "contain";
                      _0x145e65.appendChild(_0x3a2478);
                      const _0x1c7b80 = document.createTextNode("导出销售数据");
                      _0x145e65.appendChild(_0x1c7b80);
                      _0x52ce9b.appendChild(_0x145e65);
                      var _0x429164 = document.createElement("input");
                      _0x429164.type = "text";
                      _0x429164.id = "riqigululu";
                      _0x429164.placeholder = "咕噜噜提示：请输入日期";
                      _0x429164.style.display = "none";
                      _0x429164.style.padding = "8px 15px";
                      _0x429164.style.borderRadius = "5px";
                      _0x429164.style.border = "1px solid #ccc";
                      _0x429164.style.fontSize = "14px";
                      _0x52ce9b.appendChild(_0x429164);
                      var _0x142982 = chrome.runtime._0x55f5ad("web/css/flatpickr.min.css");
                      var _0x4c2518 = document.querySelector("link[href=\"" + _0x142982 + "\"]");
                      if (!_0x4c2518) {
                        {
                          const _0x2594dd = document.createElement("link");
                          _0x2594dd.rel = "stylesheet";
                          _0x2594dd.href = _0x142982;
                          document.head.appendChild(_0x2594dd);
                        }
                      }
                      _0x6f85d7();
                      function _0x6f85d7() {
                        {
                          var _0x4606d1 = flatpickr(_0x429164, {
                            locale: "zh",
                            mode: "range",
                            _0x10de1e: "Y-m-d",
                            _0xea983d: false,
                            _0x1ff5b0: _0x52ce9b,
                            _0x4d0b4d: new Date()._0x430f90(-1),
                            _0x143374: function () {
                              var _0x479796 = new Date();
                              _0x479796.setMonth(_0x479796.getMonth() - 2);
                              _0x479796.setDate(1);
                              return _0x479796;
                            }(),
                            _0xf0e913: (_0x1fffb0, _0x2f6829, _0x566b2e) => {
                              const _0x7ee08e = document.createElement("button");
                              _0x7ee08e.textContent = "确定";
                              _0x7ee08e.style.margin = "10px";
                              _0x7ee08e.style.padding = "5px 10px";
                              _0x7ee08e.style.backgroundColor = "#007BFF";
                              _0x7ee08e.style.color = "white";
                              _0x7ee08e.style.border = "none";
                              _0x7ee08e.style.borderRadius = "5px";
                              _0x7ee08e.style.cursor = "pointer";
                              _0x7ee08e.style.fontSize = "14px";
                              _0x7ee08e.style.transition = "background-color 0.3s";
                              _0x7ee08e.onmouseover = () => _0x7ee08e.style.backgroundColor = "#0056b3";
                              _0x7ee08e.onmouseout = () => _0x7ee08e.style.backgroundColor = "#007BFF";
                              _0x7ee08e.onclick = function () {
                                {
                                  const _0xa69aea = _0x566b2e._0xfe87de;
                                  if (_0xa69aea.length === 2) {
                                    {
                                      var [_0x145522, _0x2b1476] = _0xa69aea;
                                      _0x145522 = flatpickr._0x1b8077(_0x145522, "Y-m-d");
                                      _0x2b1476 = flatpickr._0x1b8077(_0x2b1476, "Y-m-d");
                                      _0x566b2e.close();
                                      _0x429164.style.display = "none";
                                      if (_0xc36054.data._0x41bda4 == "正常") {
                                        if (_0xc36054.data.on == "yb") {
                                          showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                        } else {
                                          if (_0xc36054.data.on == "cc") {
                                            "咕噜噜提示：请输入日期".replace(/\\u([\d\w]{4})/gi, (_0x135eb3, _0x2ae287) => String.fromCharCode(parseInt(_0x2ae287, 16))) == document.querySelector("#riqigululu").getAttribute("placeholder") ? "" : !function () {
                                              {
                                                chrome.storage._0x5e599f.set({
                                                  codePhone: ["", ""]
                                                });
                                                window.location.reload();
                                              }
                                            }();
                                            createLoader();
                                            getMallId().then(_0x361454 => {
                                              chrome.runtime._0x1354f4({
                                                type: "exportSalesHistory",
                                                _0x4161b0: _0x361454,
                                                _0x290b7d: _0x145522,
                                                _0x1e2400: _0x2b1476
                                              }).then(_0x4cec86 => {
                                                var _0x4fc8e2 = _0x4cec86._0x4d402d;
                                                _0x4fc8e2 ? (removeLoader(), _0x4fc8e2.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x145522 + "至" + _0x2b1476 + "销量", "当前仓内可用库存"]), exportToExcel(_0x4cec86._0x4d402d, _0x145522 + "至" + _0x2b1476 + "销售数据.xlsx")) : removeLoader();
                                              });
                                            });
                                          } else {
                                            _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                          }
                                        }
                                      } else {
                                        if (_0xc36054.data._0x41bda4 == "可绑") {
                                          {
                                            var _0x49c6c7 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                            showCustomAlert("是否绑定当前店铺使用<br>" + _0x49c6c7, "可绑定帮助", _0x25534d, _0x410d7c, _0x49c6c7);
                                          }
                                        } else {
                                          if (_0xc36054.data._0x41bda4 == "超绑") {
                                            showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                          } else {
                                            _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              };
                              _0x566b2e._0x4ff470.appendChild(_0x7ee08e);
                            }
                          });
                          _0x145e65.onclick = function () {
                            _0x429164.style.display = "block";
                            _0x4606d1.open();
                          };
                          document.addEventListener("click", function (_0x6d094e) {
                            !_0x429164.contains(_0x6d094e.target) && !_0x4606d1._0x4ff470.contains(_0x6d094e.target) && _0x6d094e.target !== _0x145e65 && (_0x429164.style.display = "none", _0x4606d1.close());
                          });
                        }
                      }
                    }
                    _0x572c60();
                  });
                }
                _0x5b9f88();
              }();
            } else {
              if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                !function () {
                  _0x52e0f6();
                  window.addEventListener("popstate", function (_0x3228d1) {
                    if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                      var _0xca13a6 = document.querySelector(".mySales");
                      !_0xca13a6 && _0x52e0f6().then(() => {}).catch(_0x58b6e1 => {});
                    }
                  });
                  async function _0x52e0f6() {
                    if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                      await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
                      var _0x3ecdee = document.querySelector(".mySales");
                      if (!_0x3ecdee) {
                        const _0x106737 = document.createElement("style");
                        _0x106737.textContent = "\n                                                .cardShow {\n                                                    border: 1px solid #ddd;\n                                                    border-radius: 8px;\n                                                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                                                    padding: 16px;\n                                                    margin: 10px 0;\n                                                    max-width: 98%;\n                                                    height: 110px;\n                                                    background-color: #fff;\n                                                    display:flex;\n                                                }\n    \n                                                .cardShow-img {\n                                                    width: 100%;\n                                                    height: auto;\n                                                    border-radius: 8px;\n                                                }\n    \n                                                .cardShow-content {\n                                                    padding-top: 8px;\n                                                }\n    \n                                                .cardShow-title {\n                                                    font-size: 18px;\n                                                    margin: 0;\n                                                }\n    \n                                                .cardShow-description {\n                                                    font-size: 14px;\n                                                    color: #666;\n                                                }\n                                                .mysearch-input {\n                                                            border: none;\n                                                            outline: none;\n                                                            padding: 10px;\n                                                            width: 100px;\n                                                            // width: 300px;\n                                                            border-radius: 30px;\n                                                        }\n    \n                                                .mysearchMs-button {\n                                                    background-color: #4CAF50;\n                                                    color: white;\n                                                    border: none;\n                                                    padding: 10px 20px;\n                                                    // margin-left: 10px;\n                                                    border-radius: 30px;\n                                                    cursor: pointer;\n                                                }\n    \n                                                .mysearchMs-button:hover {\n                                                    background-color: #45a049;\n                                                }\n                                               \n                                                ";
                        document.head.appendChild(_0x106737);
                        const _0x5ed98c = document.createElement("div");
                        _0x5ed98c.className = "cardShow";
                        if (_0xc36054.data._0x41bda4 == "正常") {
                          {
                            if (_0xc36054.data.on == "cc") {
                              {
                                await waitForConsumerConsultation("[class*=\"sales-block_dataTitle\"]", "");
                                var _0x3f8429 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                var _0x1465ba = document.querySelector("#clictGetinfo");
                                if (!_0x1465ba) {
                                  const _0x4691b3 = "\n                                                               <p id=\"clictGetinfo\" style=\" font-size: 20px; padding: 15px;   margin: 20px 0 20px 40px; border-radius: 10px; text-align: center;  display: flex; justify-content: center; align-items: center;\">\n                                                                    <span id=\"clickableText\" style=\"color: #007BFF; cursor: pointer;\">查看数据</span>\n                                                                    <span id=\"loadingSpinner\" style=\"display: none; margin-left: 10px;\">\n                                                                        <svg viewBox=\"0 0 50 50\" style=\"width: 24px; height: 24px;\">\n                                                                            <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#007BFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"31.4 31.4\" stroke-dashoffset=\"0\">\n                                                                                <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"1s\" repeatCount=\"indefinite\"/>\n                                                                            </circle>\n                                                                        </svg>\n                                                                    </span>\n                                                                    <span style=\"margin-left: 10px;\"><span style=\"color: red;\" id=\"gululutix\">【咕噜噜提醒：请不要频繁查看！】</span>(仅支持5000条以下销售数据分析)</span>\n                                                                </p>\n                                                                ";
                                  _0x5ed98c.insertAdjacentHTML("beforeend", _0x4691b3);
                                  const _0xb40424 = _0x3f8429.querySelector("div");
                                  _0x3f8429.insertBefore(_0x5ed98c, _0xb40424);
                                  var _0x381082 = await getMallId();
                                  document.getElementById("clickableText").addEventListener("click", async function () {
                                    {
                                      "【咕噜噜提醒：请不要频繁查看！】".replace(/\\u([\d\w]{4})/gi, (_0x5c4b33, _0x1cc357) => String.fromCharCode(parseInt(_0x1cc357, 16))) == document.querySelector("#gululutix").innerText ? "" : !function () {
                                        chrome.storage._0x5e599f.set({
                                          codePhone: ["", ""]
                                        });
                                      }();
                                      chrome.runtime._0x1354f4({
                                        type: "usageFunctionRecord",
                                        phone: _0x410d7c,
                                        name: "首页销量数据汇总"
                                      });
                                      document.getElementById("clickableText").style.display = "none";
                                      document.getElementById("loadingSpinner").style.display = "inline-block";
                                      try {
                                        var _0x47b1ba = await _0x4283cd(_0x381082, "2");
                                        await _0x256ac7(_0x47b1ba);
                                        document.querySelector("#clictGetinfo").style.display = "none";
                                      } catch (_0x440b15) {
                                        document.getElementById("clickableText").style.display = "inline-block";
                                        document.getElementById("loadingSpinner").style.display = "none";
                                      }
                                    }
                                  });
                                  var _0x314507 = await _0x4283cd(_0x381082, "1");
                                  Object.keys(_0x314507).length !== 0 && (await _0x256ac7(_0x314507), document.querySelector("#clictGetinfo").style.display = "none");
                                }
                              }
                            } else {
                              {
                                var _0x1465ba = document.querySelector("#tipccinfo");
                                if (!_0x1465ba) {
                                  const _0x117195 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                  const _0x1ebb6b = _0x117195.querySelector("div");
                                  const _0x20b15d = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">当前账号暂不支持查看数据功能</p>";
                                  _0x5ed98c.insertAdjacentHTML("beforeend", _0x20b15d);
                                  _0x117195.insertBefore(_0x5ed98c, _0x1ebb6b);
                                }
                              }
                            }
                          }
                        } else {
                          if (_0xc36054.data._0x41bda4 == "可绑") {
                            var _0x1465ba = document.querySelector("#tipccinfo");
                            if (!_0x1465ba) {
                              const _0x318c17 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                              const _0x10e78a = _0x318c17.querySelector("div");
                              const _0x376937 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">请绑定店铺后使用<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">绑定</button></p>";
                              _0x5ed98c.insertAdjacentHTML("beforeend", _0x376937);
                              _0x318c17.insertBefore(_0x5ed98c, _0x10e78a);
                              document.getElementById("bdShopButton").addEventListener("click", function () {
                                var _0x2ddae2 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x2ddae2, "可绑定帮助", _0x25534d, _0x410d7c, _0x2ddae2);
                              });
                            }
                          } else {
                            if (_0xc36054.data._0x41bda4 == "超绑") {
                              {
                                var _0x1465ba = document.querySelector("#tipccinfo");
                                if (!_0x1465ba) {
                                  const _0x1b4b51 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                  const _0x35ef87 = _0x1b4b51.querySelector("div");
                                  const _0x5be9f3 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">帮助</button></p>";
                                  _0x5ed98c.insertAdjacentHTML("beforeend", _0x5be9f3);
                                  _0x1b4b51.insertBefore(_0x5ed98c, _0x35ef87);
                                  document.getElementById("bdShopButton").addEventListener("click", function () {
                                    {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级!", "常规帮助");
                                    }
                                  });
                                }
                              }
                            } else {
                              if (_0xc36054.data._0x41bda4 == "绑满") {
                                {
                                  var _0x1465ba = document.querySelector("#tipccinfo");
                                  if (!_0x1465ba) {
                                    const _0x2fa702 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                    const _0x2ac7ad = _0x2fa702.querySelector("div");
                                    const _0x10b240 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级</p>";
                                    _0x5ed98c.insertAdjacentHTML("beforeend", _0x10b240);
                                    _0x2fa702.insertBefore(_0x5ed98c, _0x2ac7ad);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    async function _0x256ac7(_0x4d0a48) {
                      {
                        await waitForConsumerConsultation("[class*=\"sales-block_dataTitle\"]", "");
                        var _0xf6ede1 = document.querySelector(".cardShow");
                        if (_0xf6ede1) {
                          var _0x37c027 = document.querySelector(".mySales");
                          !_0x37c027 && _0x3c4d55(_0xf6ede1, _0x4d0a48);
                        }
                      }
                    }
                  }
                  function _0x3c4d55(_0x45873a, _0x48c506) {
                    try {
                      _0x45873a.innerHTML += "<div class=\"mysearch-container\" style=\"display: flex; width: 120px; background-color: #fff; padding: 10px; border-radius: 30px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); flex-direction: column; align-items: center; justify-content: space-around;;\"><input type=\"text\" class=\"mysearch-input\" id=\"myMsSearchInput\" placeholder=\"输买手查商品\"><button class=\"mysearchMs-button\" >搜索</button></div>";
                      function _0x2606c0(_0x5df92b, _0x368fc1) {
                        {
                          var _0x970528 = document.createElement("div");
                          _0x970528.style.display = "flex";
                          _0x970528.id = "displayKeyInformation";
                          for (var _0x122e7a = 0; _0x122e7a < 6; _0x122e7a++) {
                            var _0x214236 = document.createElement("div");
                            switch (_0x122e7a) {
                              case 0:
                                _0x214236.innerHTML = "今日销售额：<span class=\"mySales\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x368fc1._0xf64967 + "  导出" + "</span>";
                                break;
                              case 1:
                                _0x214236.innerHTML = "可用库存总量：<span class=\"quantity\" style=\"color:#fb7701; font-weight: bold\">" + _0x368fc1._0x2205f6 + "</span>";
                                break;
                              case 2:
                                _0x214236.innerHTML = "可用库存价值：<span class=\"price\" style=\"color:#fb7701; font-weight: bold\">" + _0x368fc1._0x541ac7 + "</span>";
                                break;
                              case 3:
                                _0x214236.innerHTML = "在途库存总价值：<span class=\"WaitReceive\" style=\"color:#fb7701; font-weight: bold\">" + _0x368fc1._0x302a1b + "</span>";
                                break;
                              case 4:
                                _0x214236.innerHTML = "滞销风险库存价值：<span class=\"InvValUnsoldGoods\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x368fc1._0x270c9b + "  查看" + "</span>";
                                break;
                              case 5:
                                _0x214236.innerHTML = "滞销品库存价值：<span class=\"invValueUnsoldRiskInventory\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x368fc1._0x1b7e02 + "  查看" + "</span>";
                                break;
                              default:
                                break;
                            }
                            _0x214236.style.padding = "10px";
                            _0x214236.style.border = "1px solid rgba(0, 0, 0, 0.1)";
                            _0x214236.style.borderRadius = "5px";
                            _0x214236.style.marginLeft = "10px";
                            _0x214236.style.fontSize = "18px";
                            _0x214236.style.height = "40px";
                            _0x970528.appendChild(_0x214236);
                          }
                          _0x5df92b.appendChild(_0x970528);
                        }
                      }
                      function _0x14685c(_0x547600) {
                        {
                          const _0xd2558a = document.getElementById("loadingAnimation");
                          _0xd2558a && _0xd2558a.remove();
                          const _0xbc9c20 = document.createElement("div");
                          _0xbc9c20.id = "loadingAnimation";
                          _0xbc9c20.style.display = "flex";
                          _0xbc9c20.style.justifyContent = "center";
                          _0xbc9c20.style.alignItems = "center";
                          _0xbc9c20.style.height = "100%";
                          _0xbc9c20.style.width = "61%";
                          _0xbc9c20.style.top = "0";
                          _0xbc9c20.style.left = "0";
                          for (let _0x28ca05 = 0; _0x28ca05 < 4; _0x28ca05++) {
                            const _0x441600 = document.createElement("div");
                            _0x441600.style.width = "10px";
                            _0x441600.style.height = "10px";
                            _0x441600.style.backgroundColor = "#fb7701";
                            _0x441600.style.borderRadius = "50%";
                            _0x441600.style.margin = "0 5px";
                            _0x441600.style.animation = "bounce 0.55s infinite alternate " + _0x28ca05 * 0.15 + "s";
                            _0xbc9c20.appendChild(_0x441600);
                          }
                          _0x547600.appendChild(_0xbc9c20);
                          const _0x5778b1 = document.styleSheets[0];
                          _0x5778b1.insertRule("\n                                                  @keyframes bounce {\n                                                    0% { transform: translateY(0); }\n                                                    100% { transform: translateY(-15px); }\n                                                  }\n                                                ", _0x5778b1.cssRules.length);
                        }
                      }
                      _0x2606c0(_0x45873a, _0x48c506);
                      _0x45873a.innerHTML += "<button id=\"myDisplayUpdates\" style=\"position: absolute;top: 120px;width: 110px;left: 500px;background-color: #fb7701;color: white;border: none;border-radius: 30px;padding: 5px 10px;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);cursor: pointer;font-size: 16px;\">刷新数据</button>";
                      var _0x5ae25e = document.querySelector(".product");
                      if (!_0x5ae25e) {
                        var _0x17b744 = document.createElement("style");
                        _0x17b744.textContent = "\n                                                    .myclos{\n                                                        text-decoration: none\n                                                    }\n        \n                                                    .picture {\n                                                        width: 976px;\n                                                        height: 562px;\n                                                        border: 1px solid #c7c7c7bf;\n                                                        font-family: \"å®‹ä½“\";\n                                                        display: none;\n                                                        z-index: 99999;\n                                                        position: fixed;\n                                                        left: 0;\n                                                        top: 50px;\n                                                        bottom: 0;\n                                                        right: 0;\n                                                        margin: 0 auto\n                                                    }\n        \n                                                    .picture .picture_top {\n                                                        background: #f3f3f3;\n                                                        height: 33px;\n                                                        color: #000\n                                                    }\n        \n                                                    .picture .picture_top span {\n                                                        font-size: 12px;\n                                                        padding-left: 20px;\n                                                        line-height: 33px\n                                                    }\n        \n                                                    .picture .picture_top a {\n                                                        float: right;\n                                                        font-size: 30px;\n                                                        line-height: 27px;\n                                                        padding-right: 5px;\n                                                        color: #3f3f3f;\n                                                        font-family: \"å¾®è½¯é›…é»‘\"\n                                                    }\n        \n                                                    .picture .picture_bottom {\n                                                        width: 100%;\n                                                        height: 529px;\n                                                        background: #fff\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left {\n                                                        width: 771px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left .picture_img {\n                                                        position: relative;\n                                                        left: 56px;\n                                                        top: 51px;\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table;\n                                                        text-align: center\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 {\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table-cell;\n                                                        vertical-align: middle\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 img {\n                                                        max-width: 658px;\n                                                        max-height: 424px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .prev {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        left: 18px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .next {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        right: 18px;\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right {\n                                                        width: 205px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture_xiao {\n                                                        background: coral;\n                                                        width: 50px;\n                                                        height: 50px;\n                                                        float: left;\n                                                        margin: 5px 8px\n                                                    }\n        \n                                                    .picture_xiao img {\n                                                        width: 100%\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right .picture_name {\n                                                        margin-left: 25px;\n                                                        margin-top: 48px\n                                                    }\n        \n                                                    .picture_name h3 {\n                                                        font-family: \"å¾®è½¯é›…é»‘\";\n                                                        font-size: 16px;\n                                                        margin-top: 33px;\n                                                        color: #000;\n                                                    }\n        \n                                                    .product_x {\n                                                        font-size: 11px;\n                                                        margin-left: 10px\n                                                    }\n        \n                                                    .picture_suo {\n                                                        width: 178px;\n                                                        height: 382px;\n                                                        border: 1px solid #e4e4e4;\n                                                        margin-left: 2px;\n                                                        margin-top: 20px;\n                                                        overflow: auto;\n                                                    }\n                                                    .picture_suo::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-thumb {\n                                                        background-color: #ff8f06c2;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n        \n                                                    .picture_suo .picture_suo_t {\n                                                        padding: 14.5px;\n                                                        height: 300px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .picture_suo_img {\n                                                        width: 58px;\n                                                        height: 58px;\n                                                        margin: 6px 5px;\n                                                        border: 2px solid #e4e4e4;\n                                                        float: left;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .picture_suo .picture_suo_img img {\n                                                        width: 58px;\n                                                        height: 58px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye {\n                                                        text-align: center;\n                                                        width: 173px;\n                                                        font-size: 14px;\n                                                        height: 21px;\n                                                        position: relative\n                                                    }\n        \n                                                    .picture_suo .picture_fenye span {\n                                                        position: relative;\n                                                        top: -5px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye .picture_next,\n                                                    .picture_suo .picture_fenye .picture_prev {\n                                                        display: inline-block;\n                                                        width: 20px;\n                                                        height: 21px;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .ljxq22 {\n                                                        display: inline-block;\n                                                        position: relative;\n                                                        bottom: 40px;\n                                                        right: -821px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .suo-img {\n                                                        border: 2px solid #e4393c\n                                                    }\n        \n                                                    .tanchukuang_bg11 {\n                                                        width: 100%;\n                                                        min-width: 1164px;\n                                                        height: 100%;\n                                                        background: #000;\n                                                        position: fixed;\n                                                        z-index: 1001;\n                                                        filter: alpha(opacity=20);\n                                                        opacity: .4;\n                                                        left: 0;\n                                                        top: 0;\n                                                        display: none\n                                                    }\n        \n                                                    .product-info {\n                                                        margin-bottom: 20px;\n                                                        padding: 20px;\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        text-align: center;\n                                                        max-width: 600px;\n                                                        width: 100%;\n                                                    }\n                                                    .product-info h2 {\n                                                        margin-top: 0;\n                                                        margin-bottom: 10px;\n                                                        font-size: 20px;\n                                                        color: #333333;\n                                                    }\n                                                    .product-info p {\n                                                        margin: 0;\n                                                        font-size: 14px;\n                                                        color: #666666;\n                                                    }\n                                                    #productTable  {\n                                                        width: 100%;\n                                                        max-width: 909px;\n                                                        border-collapse: collapse;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        overflow: hidden;\n                                                    }\n                                                    #productTable th, #productTable td {\n                                                        padding: 12px 15px;\n                                                        text-align: left;\n                                                    }\n                                                    #productTable th {\n                                                        background-color: #009879;\n                                                        color: #ffffff;\n                                                        font-weight: bold;\n                                                    \n                                                    }\n                                                    #productTable tr {\n                                                        border-bottom: 1px solid #dddddd;\n                                                    }\n                                                    #productTable tr:nth-of-type(even) {\n                                                        background-color: #f3f3f3;\n                                                    }\n                                                    #productTable tr:last-of-type {\n                                                        border-bottom: 2px solid #009879;\n                                                    }\n                                                    #productTable tr:hover {\n                                                        background-color: #f1f1f1;\n                                                    }\n                                                    .table-container {\n                                                        max-width: 909px;\n                                                        overflow: auto;\n                                                        height: 260px;\n                                                    }\n                                                    .table-container::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-thumb {\n                                                        background-color: #eee4d7c2;;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n                                                    .details-button-container {\n                                                        position: absolute;\n                                                        bottom: -20px;\n                                                        right: 10px;\n                                                        z-index: 1;\n                                                    }\n        \n                                                    .details-button {\n                                                        background-color: #4CAF50;\n                                                        border: none;\n                                                        color: white;\n                                                        padding: 8px 16px;\n                                                        border-radius: 4px;\n                                                        font-size: 14px;\n                                                        cursor: pointer;\n                                                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n                                                        transition: background-color 0.3s ease;\n                                                    }\n        \n                                                    .details-button:hover {\n                                                        background-color: #2E8B57;\n                                                    }\n        \n                                                    ";
                        document.head.appendChild(_0x17b744);
                        const _0x5afdfb = document.createElement("div");
                        _0x5afdfb.classList.add("product");
                        const _0x2dc371 = document.createElement("div");
                        _0x2dc371.classList.add("productcen_content");
                        _0x5afdfb.appendChild(_0x2dc371);
                        const _0x2fc4cc = document.createElement("div");
                        _0x2fc4cc.classList.add("tanchukuang_bg11");
                        const _0x35870e = document.createElement("div");
                        _0x35870e.classList.add("picture");
                        const _0x410bba = document.createElement("div");
                        _0x410bba.classList.add("picture_top");
                        const _0xe98c16 = document.createElement("span");
                        _0xe98c16.textContent = "滞销风险商品详情";
                        const _0x3d1cb0 = document.createElement("a");
                        _0x3d1cb0.classList.add("myclos");
                        _0x3d1cb0.textContent = "×";
                        _0x410bba.appendChild(_0xe98c16);
                        _0x410bba.appendChild(_0x3d1cb0);
                        const _0x2009dd = document.createElement("div");
                        _0x2009dd.classList.add("picture_bottom");
                        const _0x5534ef = document.createElement("div");
                        _0x5534ef.classList.add("picture_left");
                        const _0x374359 = document.createElement("div");
                        _0x374359.classList.add("picture_img");
                        const _0x5bd3a0 = document.createElement("div");
                        _0x5bd3a0.classList.add("product-info");
                        const _0x10938f = document.createElement("h2");
                        _0x10938f.setAttribute("id", "productName");
                        const _0x1e63fe = document.createElement("p");
                        const _0x3632c0 = document.createElement("strong");
                        _0x3632c0.textContent = "加入站点天数：";
                        const _0x95e5d4 = document.createElement("span");
                        _0x95e5d4.setAttribute("id", "daysOnSite");
                        const _0xc50ac2 = document.createElement("hr");
                        const _0x397f77 = document.createElement("strong");
                        _0x397f77.textContent = "SKC：";
                        const _0x569276 = document.createElement("span");
                        _0x569276.setAttribute("id", "skcNumber");
                        _0x1e63fe.appendChild(_0x3632c0);
                        _0x1e63fe.appendChild(_0x95e5d4);
                        _0x1e63fe.appendChild(_0xc50ac2);
                        _0x1e63fe.appendChild(_0x397f77);
                        _0x1e63fe.appendChild(_0x569276);
                        _0x5bd3a0.appendChild(_0x10938f);
                        _0x5bd3a0.appendChild(_0x1e63fe);
                        const _0x17c304 = document.createElement("div");
                        _0x17c304.classList.add("table-container");
                        const _0x2ed21c = document.createElement("table");
                        _0x2ed21c.setAttribute("id", "productTable");
                        const _0x408863 = document.createElement("thead");
                        const _0x2f05b8 = document.createElement("tr");
                        const _0x43e23c = document.createElement("th");
                        _0x43e23c.textContent = "商品SKU";
                        const _0x16005a = document.createElement("th");
                        _0x16005a.textContent = "申报价格";
                        const _0x1a5637 = document.createElement("th");
                        _0x1a5637.textContent = "可用库存数";
                        const _0x3f148f = document.createElement("th");
                        _0x3f148f.id = "myBuyerSkuId";
                        _0x3f148f.textContent = "SKU";
                        const _0x2cdc00 = document.createElement("th");
                        _0x2cdc00.id = "myBuyertodaySaler";
                        _0x2cdc00.textContent = "今日销量";
                        const _0x1ecfe1 = document.createElement("th");
                        _0x1ecfe1.id = "myBuyerqitianSaler";
                        _0x1ecfe1.textContent = "近7天销量";
                        const _0x58270d = document.createElement("th");
                        _0x58270d.id = "myBuyersanshiSaler";
                        _0x58270d.textContent = "近30天销量";
                        _0x2f05b8.appendChild(_0x43e23c);
                        _0x2f05b8.appendChild(_0x16005a);
                        _0x2f05b8.appendChild(_0x1a5637);
                        _0x2f05b8.appendChild(_0x3f148f);
                        _0x2f05b8.appendChild(_0x2cdc00);
                        _0x2f05b8.appendChild(_0x1ecfe1);
                        _0x2f05b8.appendChild(_0x58270d);
                        _0x408863.appendChild(_0x2f05b8);
                        const _0x5aba1f = document.createElement("tbody");
                        const _0x532c39 = document.createElement("div");
                        _0x532c39.classList.add("details-button-container");
                        const _0x148bbd = document.createElement("button");
                        _0x148bbd.classList.add("details-button");
                        _0x148bbd.textContent = "跳转商品详情";
                        _0x532c39.appendChild(_0x148bbd);
                        _0x2ed21c.appendChild(_0x408863);
                        _0x2ed21c.appendChild(_0x5aba1f);
                        _0x2ed21c.appendChild(_0x532c39);
                        _0x17c304.appendChild(_0x2ed21c);
                        _0x374359.appendChild(_0x5bd3a0);
                        _0x374359.appendChild(_0x17c304);
                        _0x5534ef.appendChild(_0x374359);
                        const _0x328b99 = document.createElement("div");
                        _0x328b99.classList.add("picture_right");
                        const _0x512c7c = document.createElement("div");
                        _0x512c7c.classList.add("picture_name");
                        const _0x3d0dba = document.createElement("h3");
                        _0x3d0dba.textContent = "滞销风险商品";
                        _0x512c7c.appendChild(_0x3d0dba);
                        const _0x577044 = document.createElement("div");
                        _0x577044.classList.add("picture_suo");
                        const _0x30d450 = document.createElement("div");
                        _0x30d450.classList.add("picture_suo_t");
                        _0x30d450.style.display = "block";
                        _0x577044.appendChild(_0x30d450);
                        _0x328b99.appendChild(_0x512c7c);
                        _0x328b99.appendChild(_0x577044);
                        _0x2009dd.appendChild(_0x5534ef);
                        _0x2009dd.appendChild(_0x328b99);
                        _0x35870e.appendChild(_0x410bba);
                        _0x35870e.appendChild(_0x2009dd);
                        _0x5afdfb.appendChild(_0x2fc4cc);
                        _0x5afdfb.appendChild(_0x35870e);
                        document.body.appendChild(_0x5afdfb);
                        document.querySelector(".picture").style.display = "none";
                        document.querySelector(".tanchukuang_bg11").style.display = "none";
                        document.querySelector(".myclos").addEventListener("click", function () {
                          document.querySelector(".picture").style.display = "none";
                          document.querySelector(".tanchukuang_bg11").style.display = "none";
                        });
                        document.querySelector(".details-button").addEventListener("click", function () {
                          var _0x559bd3 = document.getElementById("productName").getAttribute("data-value");
                          var _0x379bbf = window.open("https://seller.kuajingmaihuo.com/main/sale-manage/main?=" + _0x559bd3);
                        });
                      }
                      function _0x1fddca() {
                        {
                          document.querySelectorAll(".InvValUnsoldGoods").forEach(function (_0x4e3612) {
                            _0x4e3612.addEventListener("click", function () {
                              ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0xfde553 => document.getElementById(_0xfde553).style.display = "none");
                              var _0x48c7a0 = _0x48c506._0x44d3f2;
                              if (Object.keys(_0x48c7a0).length !== 0) {
                                {
                                  document.querySelector(".picture_suo_t").innerHTML = "";
                                  for (var _0x252200 in _0x48c7a0) {
                                    const _0x22570b = document.createElement("div");
                                    _0x22570b.className = "picture_suo_img";
                                    const _0x335427 = document.createElement("img");
                                    _0x335427.className = "lazy";
                                    _0x335427.src = _0x48c7a0[_0x252200]._0xdae95a;
                                    _0x335427.setAttribute("data-value", _0x252200);
                                    _0x22570b.appendChild(_0x335427);
                                    document.querySelector(".picture_suo_t").appendChild(_0x22570b);
                                  }
                                  document.querySelector(".picture").style.display = "block";
                                  document.querySelector(".tanchukuang_bg11").style.display = "block";
                                  document.querySelectorAll(".picture_suo_img").forEach(function (_0x407d8a) {
                                    _0x407d8a.addEventListener("click", function () {
                                      document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x4f08cd) {
                                        _0x4f08cd.classList.remove("suo-img");
                                      });
                                      this.classList.add("suo-img");
                                      var _0x15fcd1 = _0x407d8a.querySelector("img").getAttribute("data-value");
                                      const _0x24cda = _0x48c7a0[_0x15fcd1].productName;
                                      const _0x306603 = _0x48c7a0[_0x15fcd1].daysOnSite;
                                      const _0x255498 = _0x48c7a0[_0x15fcd1]._0x3b118e;
                                      const _0x4b5e01 = _0x48c7a0[_0x15fcd1].skcNumber;
                                      document.getElementById("productName").textContent = "" + _0x24cda;
                                      document.getElementById("productName").setAttribute("data-value", _0x15fcd1);
                                      document.getElementById("daysOnSite").textContent = _0x306603 + "天";
                                      document.getElementById("skcNumber").textContent = "" + _0x4b5e01;
                                      const _0x1d0c8d = document.getElementById("productTable").querySelector("tbody");
                                      _0x1d0c8d.innerHTML = "";
                                      _0x255498.forEach(_0x3eef80 => {
                                        const _0x3dce77 = document.createElement("tr");
                                        const _0x4be5c6 = document.createElement("td");
                                        _0x4be5c6.textContent = _0x3eef80._0x440735;
                                        _0x3dce77.appendChild(_0x4be5c6);
                                        const _0x59b402 = document.createElement("td");
                                        _0x59b402.textContent = parseFloat(_0x3eef80._0x4fc1c5).toFixed(2);
                                        _0x3dce77.appendChild(_0x59b402);
                                        const _0x4c37c8 = document.createElement("td");
                                        _0x4c37c8.textContent = _0x3eef80._0x46258c;
                                        _0x3dce77.appendChild(_0x4c37c8);
                                        _0x1d0c8d.appendChild(_0x3dce77);
                                      });
                                    });
                                  });
                                  document.querySelector(".picture_suo_img").click();
                                  document.querySelector(".picture_top").querySelector("span").innerText = "滞销风险商品详情";
                                  document.querySelector(".picture_name").querySelector("H3").innerText = "滞销风险商品(" + Object.keys(_0x48c7a0).length + ")";
                                }
                              }
                            });
                          });
                          document.querySelectorAll(".invValueUnsoldRiskInventory").forEach(function (_0x387640) {
                            _0x387640.addEventListener("click", function () {
                              {
                                ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x543ae0 => document.getElementById(_0x543ae0).style.display = "none");
                                var _0x445d76 = _0x48c506._0x38c55a;
                                if (Object.keys(_0x445d76).length !== 0) {
                                  document.querySelector(".picture_suo_t").innerHTML = "";
                                  for (var _0x2dbfc9 in _0x445d76) {
                                    const _0x3cf873 = document.createElement("div");
                                    _0x3cf873.className = "picture_suo_img";
                                    const _0x28d78c = document.createElement("img");
                                    _0x28d78c.className = "lazy";
                                    _0x28d78c.src = _0x445d76[_0x2dbfc9]._0xdae95a;
                                    _0x28d78c.setAttribute("data-value", _0x2dbfc9);
                                    _0x3cf873.appendChild(_0x28d78c);
                                    document.querySelector(".picture_suo_t").appendChild(_0x3cf873);
                                  }
                                  document.querySelector(".picture").style.display = "block";
                                  document.querySelector(".tanchukuang_bg11").style.display = "block";
                                  document.querySelectorAll(".picture_suo_img").forEach(function (_0x17fad3) {
                                    _0x17fad3.addEventListener("click", function () {
                                      document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x25d52a) {
                                        {
                                          _0x25d52a.classList.remove("suo-img");
                                        }
                                      });
                                      this.classList.add("suo-img");
                                      var _0x2c76fc = _0x17fad3.querySelector("img").getAttribute("data-value");
                                      const _0x17fb4f = _0x445d76[_0x2c76fc].productName;
                                      const _0x405b03 = _0x445d76[_0x2c76fc].daysOnSite;
                                      const _0x65c32c = _0x445d76[_0x2c76fc]._0x3b118e;
                                      const _0x3b901c = _0x445d76[_0x2c76fc].skcNumber;
                                      document.getElementById("productName").textContent = "" + _0x17fb4f;
                                      document.getElementById("productName").setAttribute("data-value", _0x2c76fc);
                                      document.getElementById("daysOnSite").textContent = _0x405b03 + "天";
                                      document.getElementById("skcNumber").textContent = "" + _0x3b901c;
                                      const _0x557581 = document.getElementById("productTable").querySelector("tbody");
                                      _0x557581.innerHTML = "";
                                      _0x65c32c.forEach(_0x300561 => {
                                        {
                                          const _0x37998c = document.createElement("tr");
                                          const _0xd0373a = document.createElement("td");
                                          _0xd0373a.textContent = _0x300561._0x440735;
                                          _0x37998c.appendChild(_0xd0373a);
                                          const _0x1e2cde = document.createElement("td");
                                          _0x1e2cde.textContent = _0x300561._0x4fc1c5.toFixed(2);
                                          _0x37998c.appendChild(_0x1e2cde);
                                          const _0x4cd393 = document.createElement("td");
                                          _0x4cd393.textContent = _0x300561._0x46258c;
                                          _0x37998c.appendChild(_0x4cd393);
                                          _0x557581.appendChild(_0x37998c);
                                        }
                                      });
                                    });
                                  });
                                  document.querySelector(".picture_suo_img").click();
                                  document.querySelector(".picture_top").querySelector("span").innerText = "滞销商品详情";
                                  document.querySelector(".picture_name").querySelector("H3").innerText = "滞销商品(" + Object.keys(_0x445d76).length + ")";
                                }
                              }
                            });
                          });
                          document.querySelector(".mySales").addEventListener("click", function () {
                            exportToExcel(_0x48c506._0x4d402d, "今日销售数据.xlsx");
                          });
                        }
                      }
                      _0x1fddca();
                      document.querySelector("#myDisplayUpdates").addEventListener("click", async function () {
                        {
                          document.querySelector("#myDisplayUpdates").style.display = "none";
                          document.getElementById("displayKeyInformation").remove();
                          _0x14685c(_0x45873a);
                          var _0x5989ad = await getMallId();
                          var _0x40d22d = await _0x4283cd(_0x5989ad, "2");
                          document.getElementById("loadingAnimation").remove();
                          _0x2606c0(_0x45873a, _0x40d22d);
                          document.querySelector("#myDisplayUpdates").style.display = "block";
                          _0x1fddca();
                        }
                      });
                      document.querySelector(".mysearchMs-button").addEventListener("click", async function () {
                        ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x3a9429 => document.getElementById(_0x3a9429).style.display = "");
                        createLoader();
                        var _0x426d9f = document.querySelector("#myMsSearchInput").value.toLowerCase();
                        var _0x2f36d8 = await getMallId();
                        const _0x324544 = await new Promise((_0x33f722, _0x3313a4) => {
                          {
                            chrome.runtime._0x1354f4({
                              type: "getMsCorrespondingProducts",
                              _0xbf4a97: _0x426d9f,
                              _0x400e9e: _0x2f36d8
                            }, _0x439bda => {
                              chrome.runtime._0x2f07b0 ? _0x3313a4(chrome.runtime._0x2f07b0) : _0x33f722(_0x439bda);
                            });
                          }
                        });
                        var _0x4bb185 = _0x324544.data ? _0x324544.data : {};
                        removeLoader();
                        if (Object.keys(_0x4bb185).length !== 0) {
                          document.querySelector(".picture_suo_t").innerHTML = "";
                          for (var _0x557ea8 in _0x4bb185) {
                            const _0x2a1232 = document.createElement("div");
                            _0x2a1232.className = "picture_suo_img";
                            const _0x309969 = document.createElement("img");
                            _0x309969.className = "lazy";
                            _0x309969.src = _0x4bb185[_0x557ea8]._0xdae95a;
                            _0x309969.setAttribute("data-value", _0x557ea8);
                            _0x2a1232.appendChild(_0x309969);
                            document.querySelector(".picture_suo_t").appendChild(_0x2a1232);
                          }
                          document.querySelector(".picture").style.display = "block";
                          document.querySelector(".tanchukuang_bg11").style.display = "block";
                          document.querySelectorAll(".picture_suo_img").forEach(function (_0xd9cdd9) {
                            {
                              _0xd9cdd9.addEventListener("click", function () {
                                document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x4a703f) {
                                  _0x4a703f.classList.remove("suo-img");
                                });
                                this.classList.add("suo-img");
                                var _0x35d9a5 = _0xd9cdd9.querySelector("img").getAttribute("data-value");
                                const _0x43835c = _0x4bb185[_0x35d9a5].productName;
                                const _0x360705 = _0x4bb185[_0x35d9a5].daysOnSite;
                                const _0x27bf7a = _0x4bb185[_0x35d9a5]._0x3b118e;
                                const _0x5aded7 = _0x4bb185[_0x35d9a5]._0x687741;
                                document.getElementById("productName").textContent = "" + _0x43835c;
                                document.getElementById("productName").setAttribute("data-value", _0x35d9a5);
                                document.getElementById("daysOnSite").textContent = _0x360705 + "天";
                                document.getElementById("skcNumber").textContent = "" + _0x5aded7;
                                const _0x5ce418 = document.getElementById("productTable").querySelector("tbody");
                                _0x5ce418.innerHTML = "";
                                _0x27bf7a.forEach(_0x4db877 => {
                                  {
                                    const _0x1da316 = document.createElement("tr");
                                    const _0xdde765 = document.createElement("td");
                                    _0xdde765.textContent = _0x4db877._0x440735;
                                    _0x1da316.appendChild(_0xdde765);
                                    const _0x3b8a53 = document.createElement("td");
                                    _0x3b8a53.textContent = parseFloat(_0x4db877._0x4fc1c5).toFixed(2);
                                    _0x1da316.appendChild(_0x3b8a53);
                                    const _0x3e320f = document.createElement("td");
                                    _0x3e320f.textContent = _0x4db877._0x46258c;
                                    _0x1da316.appendChild(_0x3e320f);
                                    const _0x3e6aa0 = document.createElement("td");
                                    _0x3e6aa0.textContent = _0x4db877._0xf10096;
                                    _0x1da316.appendChild(_0x3e6aa0);
                                    const _0x58aea2 = document.createElement("td");
                                    _0x58aea2.textContent = _0x4db877._0xe6bb5;
                                    _0x1da316.appendChild(_0x58aea2);
                                    const _0x28780f = document.createElement("td");
                                    _0x28780f.textContent = _0x4db877._0x33600c;
                                    _0x1da316.appendChild(_0x28780f);
                                    const _0x3b8749 = document.createElement("td");
                                    _0x3b8749.textContent = _0x4db877._0x1e0a49;
                                    _0x1da316.appendChild(_0x3b8749);
                                    _0x5ce418.appendChild(_0x1da316);
                                  }
                                });
                              });
                            }
                          });
                          document.querySelector(".picture_suo_img").click();
                          document.querySelector(".picture_top").querySelector("span").innerText = "买手名称：" + _0x426d9f;
                          document.querySelector(".picture_name").querySelector("H3").innerText = "管理商品（" + Object.keys(_0x4bb185).length + "）";
                        } else {
                          showCustomAlert("查无商品！");
                        }
                        chrome.runtime._0x1354f4({
                          type: "usageFunctionRecord",
                          phone: _0x410d7c,
                          name: "买手查商品"
                        });
                      });
                    } catch (_0x46e965) {}
                  }
                  async function _0x4283cd(_0x4b56c1, _0x56f0b4) {
                    if (_0x4b56c1 === "") {
                      return _0x37f3df();
                    }
                    try {
                      {
                        const _0x5d9f6a = await new Promise((_0x168be3, _0x4d01c9) => {
                          chrome.runtime._0x1354f4({
                            type: "getSalesManagementList",
                            mallid: _0x4b56c1,
                            _0x5bde25: _0x56f0b4
                          }, _0x1763de => {
                            if (chrome.runtime._0x2f07b0) {
                              _0x4d01c9(chrome.runtime._0x2f07b0);
                            } else {
                              {
                                _0x168be3(_0x1763de);
                              }
                            }
                          });
                        });
                        return _0x5d9f6a.data;
                      }
                    } catch (_0x5204ba) {
                      {
                        return _0x37f3df();
                      }
                    }
                  }
                  function _0x37f3df() {
                    return {
                      _0x301a4c: 0,
                      _0xf64967: 0,
                      _0x541ac7: 0,
                      _0x2205f6: 0,
                      _0x302a1b: 0,
                      _0x270c9b: 0,
                      _0x1b7e02: 0,
                      _0x44d3f2: {},
                      _0x38c55a: {},
                      _0x4d402d: []
                    };
                  }
                }();
              } else {
                if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage")) {
                  !function () {
                    window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x50d373();
                    window.addEventListener("popstate", function (_0x2b0986) {
                      window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x50d373();
                    });
                    async function _0x50d373() {
                      setInterval(function () {
                        try {
                          var _0x40f9c9 = document.querySelector("[class*=order-manage_leftCnt]");
                          var _0x4c4a31 = document.querySelector("#openModal");
                          if (_0x40f9c9 && !_0x4c4a31) {
                            {
                              const _0x4b9e4e = document.createElement("style");
                              _0x4b9e4e.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            margin-top: 0;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 410px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                              fetch(chrome.runtime._0x55f5ad("web/img/control.png")).then(_0x4b60c7 => _0x4b60c7.arrayBuffer()).then(_0x251d2f => {
                                {
                                  crypto.subtle.digest("SHA-256", _0x251d2f).then(_0x42f414 => {
                                    const _0x387a30 = Array.from(new Uint8Array(_0x42f414));
                                    const _0x33d2a0 = _0x387a30.map(_0x6ae3c1 => _0x6ae3c1.toString(16).padStart(2, "0")).join("");
                                    _0x33d2a0 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage._0x5e599f.set({
                                      codePhone: ["", ""]
                                    });
                                  });
                                }
                              });
                              const _0x1c2620 = document.createElement("div");
                              _0x1c2620.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal\" class=\"btn\"><img src=" + chrome.runtime._0x55f5ad("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">备货单处理</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"gululubhd\">咕噜噜备货单处理</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">导出今日已发货</button>\n                                                            <button id=\"func2\" class=\"func-btn\">取消普货所有待创建备货单</button>\n                                                            <button id=\"func3\" class=\"func-btn\">导出普货历史备货单数据</button>\n                                                             <!-- 日期输入框（隐藏） -->\n                                                            <input type=\"text\" id=\"dateInput\" placeholder=\"请选择日期\" style=\"display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin-top: 10px; width: 180px;\">\n\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                                                                   \n                                                    ";
                              document.head.appendChild(_0x4b9e4e);
                              _0x40f9c9.appendChild(_0x1c2620);
                              const _0x5061f8 = document.getElementById("openModal");
                              const _0x40a5fd = document.getElementById("closeModal");
                              const _0x9d7a2c = document.getElementById("modal");
                              const _0x1d8692 = document.getElementById("overlay");
                              const _0x58e0cd = document.getElementById("func1");
                              const _0x258072 = document.getElementById("func2");
                              const _0x1e6d1e = document.getElementById("func3");
                              _0x5061f8.addEventListener("click", () => {
                                "咕噜噜备货单处理".replace(/\\u([\d\w]{4})/gi, (_0x51b3ca, _0x300d27) => String.fromCharCode(parseInt(_0x300d27, 16))) == document.querySelector("#gululubhd").innerText ? "" : !function () {
                                  chrome.storage._0x5e599f.set({
                                    codePhone: ["", ""]
                                  });
                                  window.location.reload();
                                }();
                                _0x9d7a2c.style.display = "block";
                                _0x1d8692.style.display = "block";
                              });
                              _0x40a5fd.addEventListener("click", () => {
                                _0x9d7a2c.style.display = "none";
                                _0x1d8692.style.display = "none";
                              });
                              _0x1d8692.addEventListener("click", () => {
                                {
                                  _0x9d7a2c.style.display = "none";
                                  _0x1d8692.style.display = "none";
                                }
                              });
                              _0x58e0cd.addEventListener("click", async () => {
                                chrome.runtime._0x1354f4({
                                  type: "usageFunctionRecord",
                                  phone: _0x410d7c,
                                  name: "导出今日发货数据"
                                });
                                _0x9d7a2c.style.display = "none";
                                _0x1d8692.style.display = "none";
                                if (_0xc36054.data._0x41bda4 == "正常") {
                                  {
                                    var _0x2897be = await getMallId();
                                    if (_0xc36054.data.on == "yb") {
                                      showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                    } else {
                                      _0xc36054.data.on = "cc";
                                      if (_0xc36054.data.on) {
                                        createLoader();
                                        fetchDataTodyOut(_0x2897be).then(_0x100664 => {
                                          var _0x550640 = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0));
                                          var _0x3a2284 = [];
                                          for (var _0x2d9ca9 = 0; _0x2d9ca9 < _0x100664.length; _0x2d9ca9++) {
                                            var _0x137684 = [];
                                            var _0xf9e1dc = _0x100664[_0x2d9ca9];
                                            if (parseInt(_0xf9e1dc._0x5dd5d6._0x231f2a) >= _0x550640) {
                                              var _0x598bce = _0xf9e1dc._0x3597d9;
                                              var _0x55b775 = _0xf9e1dc._0x73bc4;
                                              var _0x253da2 = _0xf9e1dc.productName;
                                              for (var _0x39bb2c = 0; _0x39bb2c < _0xf9e1dc._0x312804.length; _0x39bb2c++) {
                                                {
                                                  var _0x6c9f6f = _0xf9e1dc._0x312804[_0x39bb2c]._0x1a8847;
                                                  var _0x3197a8 = _0xf9e1dc._0x312804[_0x39bb2c].className;
                                                  var _0x5d118f = parseInt(_0xf9e1dc._0x312804[_0x39bb2c]._0x39db9f) ? parseFloat(_0xf9e1dc._0x312804[_0x39bb2c]._0x39db9f) : 0;
                                                  var _0xe7b185 = parseFloat(_0xf9e1dc._0x312804[_0x39bb2c]._0x4c5756) ? parseFloat(_0xf9e1dc._0x312804[_0x39bb2c]._0x4c5756) / 100 : 0;
                                                  var _0x48aaf9 = _0x5d118f * _0xe7b185;
                                                  _0x137684.push([_0x6c9f6f, _0x3197a8, _0x5d118f, _0xe7b185.toFixed(2), _0x48aaf9.toFixed(2)]);
                                                }
                                              }
                                              _0x3a2284.push([_0x598bce, _0x55b775, _0x253da2, _0x137684]);
                                            }
                                          }
                                          removeLoader();
                                          exportToExcelToday(_0x3a2284);
                                        }).catch(_0x22464e => {
                                          {
                                            removeLoader();
                                            showCustomAlert("导出数据不完整，请检查网络后重新尝试");
                                          }
                                        });
                                      } else {
                                        _0xc36054.data.on = "fuck";
                                        if (_0xc36054.data.on) {
                                          {
                                            showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (_0xc36054.data._0x41bda4 == "可绑") {
                                    var _0x3e9528 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    showCustomAlert("是否绑定当前店铺使用<br>" + _0x3e9528, "可绑定帮助", _0x2897be, _0x410d7c, _0x3e9528);
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "超绑") {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    } else {
                                      _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              });
                              _0x258072.addEventListener("click", () => {
                                chrome.runtime._0x1354f4({
                                  type: "usageFunctionRecord",
                                  phone: _0x410d7c,
                                  name: "取消待创建备货单"
                                });
                                _0x9d7a2c.style.display = "none";
                                _0x1d8692.style.display = "none";
                                if (_0xc36054.data._0x41bda4 == "正常") {
                                  if (_0xc36054.data.on == "yb") {
                                    showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                  } else {
                                    if (_0xc36054.data.on == "cc") {
                                      fetchData().then(_0x139d2c => {
                                        queryStockList(_0x139d2c).then(() => {
                                          showCustomAlert("已完成，请点击查询或刷新页面查看！");
                                        });
                                      });
                                    } else {
                                      _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                    }
                                  }
                                } else {
                                  if (_0xc36054.data._0x41bda4 == "可绑") {
                                    var _0x211e15 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    showCustomAlert("是否绑定当前店铺使用<br>" + _0x211e15, "可绑定帮助", _0x25534d, _0x410d7c, _0x211e15);
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "超绑") {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    } else {
                                      _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              });
                              _0x49db2e(_0x58e0cd, _0x258072, _0x1e6d1e, _0x1c2620);
                            }
                          }
                        } catch (_0x11d699) {}
                      }, 1500);
                    }
                    function _0x49db2e(_0x862876, _0x761590, _0x58e57b, _0x20c212) {
                      {
                        var _0x4eb9b0 = document.querySelector("#dateInput");
                        var _0x2e9ca2 = flatpickr(_0x4eb9b0, {
                          locale: "zh",
                          mode: "range",
                          _0x10de1e: "Y-m-d",
                          _0xea983d: false,
                          _0x1ff5b0: _0x20c212,
                          _0x4d0b4d: new Date()._0x430f90(-1),
                          _0xf0e913: (_0x5a4d77, _0x21bd66, _0x3ebb5f) => {
                            {
                              const _0xd62497 = document.createElement("button");
                              _0xd62497.textContent = "确定";
                              _0xd62497.style.margin = "10px";
                              _0xd62497.style.padding = "5px 10px";
                              _0xd62497.style.backgroundColor = "#007BFF";
                              _0xd62497.style.color = "white";
                              _0xd62497.style.border = "none";
                              _0xd62497.style.borderRadius = "5px";
                              _0xd62497.style.cursor = "pointer";
                              _0xd62497.style.fontSize = "14px";
                              _0xd62497.style.transition = "background-color 0.3s";
                              _0xd62497.onmouseover = () => _0xd62497.style.backgroundColor = "#0056b3";
                              _0xd62497.onmouseout = () => _0xd62497.style.backgroundColor = "#007BFF";
                              _0xd62497.onclick = function () {
                                {
                                  const _0x5cecb0 = _0x3ebb5f._0xfe87de;
                                  if (_0x5cecb0.length === 2) {
                                    var [_0x336bb0, _0x2cd032] = _0x5cecb0;
                                    _0x336bb0 = flatpickr._0x1b8077(_0x336bb0, "Y-m-d") + " 00:00:00";
                                    _0x2cd032 = flatpickr._0x1b8077(_0x2cd032, "Y-m-d") + " 23:59:59";
                                    _0x3ebb5f.close();
                                    _0x4eb9b0.style.display = "none";
                                    _0x862876.style.display = "block";
                                    _0x761590.style.display = "block";
                                    createLoader();
                                    getMallId().then(_0x462e19 => {
                                      chrome.runtime._0x1354f4({
                                        type: "exportStockListHistory",
                                        _0x4161b0: _0x462e19,
                                        _0x290b7d: _0x336bb0,
                                        _0x1e2400: _0x2cd032
                                      }).then(_0x43844f => {
                                        if (_0x43844f) {
                                          {
                                            if (_0x43844f.length > 3000) {
                                              _0x43844f.unshift(["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"]);
                                              exportToExcel(_0x43844f, _0x336bb0 + "至" + _0x2cd032 + "已发货备货单数据.xlsx");
                                            } else {
                                              {
                                                var _0x5dc74a = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                                                exportPhotoDataToExcel(_0x43844f, _0x5dc74a, 1, _0x336bb0 + "至" + _0x2cd032 + "已发货备货单数据.xlsx");
                                              }
                                            }
                                          }
                                        } else {
                                          removeLoader();
                                        }
                                      });
                                    });
                                  }
                                }
                              };
                              _0x3ebb5f._0x4ff470.appendChild(_0xd62497);
                            }
                          }
                        });
                        try {
                          _0x58e57b.addEventListener("click", () => {
                            chrome.runtime._0x1354f4({
                              type: "usageFunctionRecord",
                              phone: _0x410d7c,
                              name: "导出历史备货单"
                            });
                            if (_0xc36054.data._0x41bda4 == "正常") {
                              {
                                if (_0xc36054.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0xc36054.data.on == "cc") {
                                    _0x862876.style.display = "none";
                                    _0x761590.style.display = "none";
                                    _0x4eb9b0.style.display = "block";
                                    _0x2e9ca2.open();
                                  } else {
                                    _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              }
                            } else {
                              if (_0xc36054.data._0x41bda4 == "可绑") {
                                var _0x1c4598 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x1c4598, "可绑定帮助", _0x25534d, _0x410d7c, _0x1c4598);
                              } else {
                                if (_0xc36054.data._0x41bda4 == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          });
                        } catch (_0x15aa91) {
                          console.log(_0x15aa91);
                        }
                        document.addEventListener("click", function (_0x5f1cab) {
                          {
                            !_0x4eb9b0.contains(_0x5f1cab.target) && !_0x2e9ca2._0x4ff470.contains(_0x5f1cab.target) && _0x5f1cab.target !== _0x58e57b && (_0x4eb9b0.style.display = "none", _0x862876.style.display = "block", _0x761590.style.display = "block", _0x2e9ca2.close());
                          }
                        });
                      }
                    }
                  }();
                  !function () {
                    {
                      let _0x5cc55f = null;
                      let _0xc44027 = null;
                      function _0x56717d() {
                        var _0x55d21e = document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
                        let _0x5de5dc = document.querySelector("#modifyInformationMy");
                        _0x55d21e.forEach(function (_0x5c10c7) {
                          {
                            var _0xff4083 = _0x5c10c7.querySelectorAll("td");
                            if (_0xff4083.length > 1) {
                              {
                                var _0x428aa9 = _0xff4083[_0xff4083.length - 2];
                                var _0x1db72c = _0xff4083[_0xff4083.length - 1];
                                var _0x947d55 = document.createElement("button");
                                _0x947d55.textContent = "去隐私打印打包标签";
                                _0x947d55.style.display = "inline-block";
                                _0x947d55.style.padding = "4px 0px";
                                _0x947d55.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                                _0x947d55.style.borderRadius = "5px";
                                _0x947d55.style.backgroundColor = "#009688";
                                _0x947d55.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                                _0x947d55.style.fontFamily = "Arial, sans-serif";
                                _0x947d55.style.fontSize = "12px";
                                _0x947d55.style.color = "#fff";
                                _0x947d55.style.textAlign = "center";
                                _0x947d55.style.cursor = "pointer";
                                _0x947d55.style.transition = "transform 0.3s, box-shadow 0.3s";
                                _0x947d55.style.marginTop = "3px";
                                _0x947d55.style.height = "35px";
                                _0x947d55.onmouseover = function () {
                                  _0x947d55.style.transform = "scale(1.1)";
                                };
                                _0x947d55.onmouseleave = function () {
                                  _0x947d55.style.transform = "scale(1)";
                                  _0x947d55.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                                };
                                _0x428aa9.innerText === "打印商品打包标签\n打印商品条码" && !_0x428aa9.querySelector("button") && (_0x947d55.addEventListener("click", function () {
                                  {
                                    chrome.runtime._0x1354f4({
                                      type: "usageFunctionRecord",
                                      phone: _0x410d7c,
                                      name: "单次隐私打印"
                                    });
                                    if (_0xc36054.data._0x41bda4 == "正常") {
                                      if (_0xc36054.data.on == "cc") {
                                        var _0x4a561d = Array.from(_0x428aa9.querySelectorAll("span")).find(_0x4030a6 => _0x4030a6.innerText.trim() === "打印商品打包标签");
                                        if (_0x4a561d) {
                                          if (!_0x5de5dc) {
                                            {
                                              let _0x559c1e = document.createElement("div");
                                              _0x559c1e.id = "modifyInformationMy";
                                              _0x559c1e.style.display = "none";
                                              document.body.appendChild(_0x559c1e);
                                            }
                                          }
                                          _0x4a561d.click();
                                          setTimeout(() => {
                                            var _0x4d5a38 = document.querySelectorAll("#modifyInformationMy");
                                            for (var _0x35fdf3 of _0x4d5a38) {
                                              _0x35fdf3.remove();
                                            }
                                          }, 4500);
                                        }
                                      } else {
                                        _0xc36054.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                      }
                                    } else {
                                      if (_0xc36054.data._0x41bda4 == "可绑") {
                                        {
                                          var _0x11b1d5 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                          showCustomAlert("是否绑定当前店铺使用<br>" + _0x11b1d5, "可绑定帮助", _0x25534d, _0x410d7c, _0x11b1d5);
                                        }
                                      } else {
                                        if (_0xc36054.data._0x41bda4 == "超绑") {
                                          {
                                            showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                          }
                                        } else {
                                          _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                        }
                                      }
                                    }
                                  }
                                }), _0x428aa9.appendChild(_0x947d55));
                                if (_0x1db72c.innerText === "打印商品打包标签\n打印商品条码" || _0x1db72c.innerText === "打印商品打包标签\n打印商品条码\n调整包裹信息\n取消发货单") {
                                  {
                                    !_0x1db72c.querySelector("button") && (_0x947d55.addEventListener("click", function () {
                                      chrome.runtime._0x1354f4({
                                        type: "usageFunctionRecord",
                                        phone: _0x410d7c,
                                        name: "单次隐私打印"
                                      });
                                      if (_0xc36054.data._0x41bda4 == "正常") {
                                        if (_0xc36054.data.on == "cc") {
                                          var _0x1deef8 = Array.from(_0x1db72c.querySelectorAll("span")).find(_0x40deea => _0x40deea.innerText.trim() === "打印商品打包标签");
                                          if (_0x1deef8) {
                                            if (!_0x5de5dc) {
                                              let _0x3d1f26 = document.createElement("div");
                                              _0x3d1f26.id = "modifyInformationMy";
                                              _0x3d1f26.style.display = "none";
                                              document.body.appendChild(_0x3d1f26);
                                            }
                                            _0x1deef8.click();
                                            setTimeout(() => {
                                              var _0x240a8c = document.querySelectorAll("#modifyInformationMy");
                                              for (var _0x30b39e of _0x240a8c) {
                                                {
                                                  _0x30b39e.remove();
                                                }
                                              }
                                            }, 4500);
                                          }
                                        } else {
                                          _0xc36054.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                        }
                                      } else {
                                        if (_0xc36054.data._0x41bda4 == "可绑") {
                                          {
                                            var _0x305094 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                            showCustomAlert("是否绑定当前店铺使用<br>" + _0x305094, "可绑定帮助", _0x25534d, _0x410d7c, _0x305094);
                                          }
                                        } else {
                                          if (_0xc36054.data._0x41bda4 == "超绑") {
                                            showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                          } else {
                                            if (_0xc36054.data._0x41bda4 == "绑满") {
                                              {
                                                showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }), _0x1db72c.appendChild(_0x947d55));
                                  }
                                }
                              }
                            }
                          }
                        });
                      }
                      function _0x5a2c1d() {
                        {
                          const _0x2a4c50 = document.querySelector("[class*=\"shipping-list_dividerGroup\"]");
                          const _0x347ed4 = _0x2a4c50.querySelector("[data-testid=\"beast-core-button\"]");
                          let _0x98e80d = document.querySelector("#modifyInformationMy");
                          const _0x1986b8 = "new-button-id";
                          const _0x39ff0f = document.getElementById(_0x1986b8);
                          if (!_0x347ed4.disabled) {
                            if (!_0x39ff0f) {
                              const _0x5f556d = document.createElement("button");
                              _0x5f556d.id = _0x1986b8;
                              _0x5f556d.innerText = "咕噜噜批量隐私打印";
                              _0x5f556d.type = "button";
                              _0x5f556d.style.display = "inline-block";
                              _0x5f556d.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                              _0x5f556d.style.borderRadius = "5px";
                              _0x5f556d.style.backgroundColor = "#009688";
                              _0x5f556d.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                              _0x5f556d.style.fontFamily = "auto";
                              _0x5f556d.style.fontSize = "14px";
                              _0x5f556d.style.color = "#fff";
                              _0x5f556d.style.textAlign = "center";
                              _0x5f556d.style.cursor = "pointer";
                              _0x5f556d.style.transition = "transform 0.3s, box-shadow 0.3s";
                              _0x5f556d.style.marginRight = "8px";
                              _0x5f556d.style.height = "30px";
                              _0x5f556d.onmouseover = function () {
                                _0x5f556d.style.transform = "scale(1.1)";
                              };
                              _0x5f556d.onmouseleave = function () {
                                _0x5f556d.style.transform = "scale(1)";
                                _0x5f556d.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                              };
                              _0x347ed4.insertAdjacentElement("afterend", _0x5f556d);
                              _0x5f556d.addEventListener("click", function () {
                                {
                                  chrome.runtime._0x1354f4({
                                    type: "usageFunctionRecord",
                                    phone: _0x410d7c,
                                    name: "批量隐私打印"
                                  });
                                  if (_0xc36054.data._0x41bda4 == "正常") {
                                    {
                                      if (_0xc36054.data.on == "cc") {
                                        {
                                          var _0x373d2b = Array.from(_0x2a4c50.querySelectorAll("button")).find(_0x57fdc0 => _0x57fdc0.innerText.trim() === "批量打印商品打包标签");
                                          if (_0x373d2b) {
                                            if (!_0x98e80d) {
                                              {
                                                let _0x4b4f36 = document.createElement("div");
                                                _0x4b4f36.id = "modifyInformationMy";
                                                _0x4b4f36.style.display = "none";
                                                document.body.appendChild(_0x4b4f36);
                                              }
                                            }
                                            _0x373d2b.click();
                                            setTimeout(() => {
                                              {
                                                var _0x30ba01 = document.querySelectorAll("#modifyInformationMy");
                                                for (var _0x8a65a8 of _0x30ba01) {
                                                  _0x8a65a8.remove();
                                                }
                                              }
                                            }, 4500);
                                          }
                                        }
                                      } else {
                                        _0xc36054.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                      }
                                    }
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "可绑") {
                                      {
                                        var _0x13f866 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                        showCustomAlert("是否绑定当前店铺使用<br>" + _0x13f866, "可绑定帮助", _0x25534d, _0x410d7c, _0x13f866);
                                      }
                                    } else {
                                      if (_0xc36054.data._0x41bda4 == "超绑") {
                                        showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      } else {
                                        _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                }
                              });
                            }
                          } else {
                            _0x39ff0f && _0x39ff0f.remove();
                          }
                        }
                      }
                      _0x5cc55f === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list") && (_0x5cc55f = new MutationObserver(_0x56717d), _0x5cc55f.observe(document.body, {
                        childList: true,
                        subtree: true
                      }));
                      if (_0xc44027 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                        {
                          _0xc44027 = new MutationObserver(_0x5a2c1d);
                          _0xc44027.observe(document.body, {
                            childList: true,
                            subtree: true
                          });
                        }
                      }
                    }
                  }();
                  !function () {
                    let _0x5646fe = null;
                    async function _0x27b2d9() {
                      async function _0x1b3d3b(_0x1173ea, _0x331683) {
                        var _0x2383f7 = _0x1173ea.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                        if (_0x2383f7) {
                          _0x2a89ec(_0x2383f7, _0x331683);
                          _0x4836bb(_0x2383f7, "input");
                          _0x4836bb(_0x2383f7, "change");
                          _0x4836bb(_0x1173ea, "input");
                          _0x4836bb(_0x1173ea, "change");
                        }
                      }
                      function _0x4836bb(_0x30eccd, _0x2137c1) {
                        var _0xb071b = new Event(_0x2137c1, {
                          bubbles: true
                        });
                        _0x30eccd.dispatchEvent(_0xb071b);
                      }
                      function _0x2a89ec(_0x2bdfc4, _0x1e3440) {
                        {
                          var _0x40e7cf = _0x2bdfc4._0x5e45bf && _0x2bdfc4._0x5e45bf._0x563847;
                          _0x40e7cf && (_0x2bdfc4._0x5e45bf._0x563847 = () => "");
                          _0x2bdfc4.value = _0x1e3440;
                          var _0x1b0e19 = new InputEvent("input", {
                            bubbles: true,
                            cancelable: true
                          });
                          _0x2bdfc4.dispatchEvent(_0x1b0e19);
                          if (_0x40e7cf) {
                            {
                              _0x2bdfc4._0x5e45bf._0x563847 = _0x40e7cf;
                            }
                          }
                        }
                      }
                      const _0x448a0b = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]");
                      const _0x3300a4 = Array.from(_0x448a0b.querySelectorAll("tr"));
                      const _0x4b2fd3 = [];
                      let _0x440de1 = [];
                      let _0x3bc432 = 0;
                      _0x3300a4.forEach(_0x12f57a => {
                        const _0x1be72a = _0x12f57a.querySelector("td");
                        if (_0x1be72a) {
                          const _0x30637f = parseInt(_0x1be72a.getAttribute("rowspan"), 10);
                          _0x30637f > 1 && (_0x440de1.length > 0 && (_0x4b2fd3.push(_0x440de1), _0x440de1 = []), _0x3bc432 = _0x30637f);
                        }
                        _0x440de1.push(_0x12f57a);
                        _0x3bc432--;
                        _0x3bc432 <= 0 && (_0x4b2fd3.push(_0x440de1), _0x440de1 = []);
                      });
                      if (_0x440de1.length > 0) {
                        {
                          _0x4b2fd3.push(_0x440de1);
                        }
                      }
                      async function _0x1220b7(_0x38e5cf) {
                        {
                          try {
                            const _0x373a0a = _0x38e5cf.querySelectorAll("span");
                            _0x373a0a.length > 2 ? _0x373a0a[1].click() : _0x373a0a[0].click();
                          } catch (_0x54c853) {
                            console.error("Error in clickAndSetValue:", _0x54c853);
                          }
                        }
                      }
                      async function _0x3c48d6(_0x24d5e8) {
                        for (const [_0xa57426, _0x5627c8] of _0x24d5e8.entries()) {
                          if (_0x5627c8.length > 0) {
                            {
                              const _0xea828 = _0x5627c8[0];
                              const _0x5b7de9 = _0xea828.querySelector("td");
                              if (_0x5b7de9) {
                                {
                                  const _0xd71e55 = _0x5b7de9.querySelector("label");
                                  if (_0xd71e55) {
                                    const _0x2a084b = _0xd71e55.getAttribute("data-checked");
                                    if (_0x2a084b === "true") {
                                      var _0x2bcf43 = _0x5627c8[_0x5627c8.length - 1].querySelectorAll("td");
                                      if (_0x2bcf43.length < 2) {
                                        _0x2bcf43[0].querySelector("a").click();
                                        await waitForConsumerConsultation("[data-testid=\"beast-core-drawer-content\"]", "");
                                        const _0x5621c2 = _0x94acbb => new Promise(_0x20feb5 => setTimeout(_0x20feb5, _0x94acbb));
                                        _0x5621c2(500);
                                        while (1) {
                                          const _0xe9d39 = Array.from(document.querySelectorAll("[data-testid=\"beast-core-table-middle-tbody\"]")).pop();
                                          const _0x3301ff = Array.from(_0xe9d39.querySelectorAll("tr")).map(_0x7307f1 => _0x7307f1.querySelectorAll("td")[2]);
                                          for (var _0x21f28a of _0x3301ff) {
                                            await _0x1220b7(_0x21f28a);
                                            await Promise.all(Array.from(document.querySelectorAll("[data-testid=\"beast-core-portal\"]")).map(async _0x909ed6 => {
                                              {
                                                if (_0x909ed6) {
                                                  {
                                                    var _0x36c319 = _0x909ed6.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x8a86a7 => _0x8a86a7 >= "0" && _0x8a86a7 <= "9").join("");
                                                    _0x1b3d3b(_0x909ed6, _0x36c319);
                                                    await new Promise(_0x59f160 => setTimeout(_0x59f160, 50));
                                                    _0x909ed6.querySelector("[data-testid=\"beast-core-button\"]").click();
                                                    _0x909ed6.style.display = "none";
                                                  }
                                                }
                                              }
                                            }));
                                          }
                                          var _0x5cedc7 = document.querySelector("[data-testid=\"beast-core-pagination-next\"]");
                                          if (_0x5cedc7) {
                                            if (_0x5cedc7.className.includes("disabled")) {
                                              var _0x3dfbb2 = new MouseEvent("click", {
                                                bubbles: true,
                                                cancelable: true,
                                                view: window
                                              });
                                              document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0x3dfbb2);
                                              break;
                                            }
                                            _0x5cedc7.click();
                                            _0x5621c2(500);
                                          } else {
                                            var _0x3dfbb2 = new MouseEvent("click", {
                                              bubbles: true,
                                              cancelable: true,
                                              view: window
                                            });
                                            document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0x3dfbb2);
                                            break;
                                          }
                                        }
                                      } else {
                                        const _0x35398d = _0xea828.querySelectorAll("td")[5];
                                        _0x35398d && (await _0x1220b7(_0x35398d));
                                        for (const _0x538198 of _0x5627c8.slice(1)) {
                                          {
                                            var _0x4529c1 = _0x538198.querySelectorAll("td");
                                            const _0x4d277e = _0x4529c1[2];
                                            if (_0x4d277e) {
                                              {
                                                await _0x1220b7(_0x4d277e);
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
                      async function _0x3a9e61() {
                        document.querySelectorAll("[data-testid=\"beast-core-portal\"]").forEach(_0x409755 => {
                          if (_0x409755) {
                            var _0x3b440e = _0x409755.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x400ae8 => _0x400ae8 >= "0" && _0x400ae8 <= "9").join("");
                            _0x1b3d3b(_0x409755, _0x3b440e);
                            setTimeout(() => {
                              {
                                _0x409755.querySelector("[data-testid=\"beast-core-button\"]").click();
                                _0x409755.style.display = "none";
                              }
                            }, 500);
                          }
                        });
                      }
                      await _0x3c48d6(_0x4b2fd3);
                      await _0x3a9e61();
                      setTimeout(() => {
                        tipBoxShow("已将勾选商品的实际发货数量调整至允许的最大值。", 3000);
                      }, 2000);
                    }
                    function _0x3c515a() {
                      const _0x48938e = document.querySelector("[class*=\"shipping-desk_divider\"]");
                      var _0xb631b3 = _0x48938e.querySelector("[data-testid=\"beast-core-button\"]");
                      var _0x4a4d02 = document.querySelector("#unique-button-id");
                      if (!_0xb631b3.disabled) {
                        var _0x1a9e03 = _0x48938e.querySelector("div");
                        if (_0x48938e && !_0x4a4d02) {
                          const _0x2aabfa = document.createElement("button");
                          _0x2aabfa.textContent = "勾选商品设置为最大发货数量";
                          _0x2aabfa.style.backgroundColor = "#009688";
                          _0x2aabfa.style.color = "white";
                          _0x2aabfa.style.fontSize = "15px";
                          _0x2aabfa.style.border = "none";
                          _0x2aabfa.style.borderRadius = "5px";
                          _0x2aabfa.style.cursor = "pointer";
                          _0x2aabfa.style.marginRight = "10px";
                          _0x2aabfa.style.height = "28px";
                          _0x2aabfa.id = "unique-button-id";
                          _0x2aabfa.addEventListener("click", () => {
                            {
                              chrome.runtime._0x1354f4({
                                type: "usageFunctionRecord",
                                phone: _0x410d7c,
                                name: "勾选商品设置最大发货数量"
                              });
                              if (_0xc36054.data._0x41bda4 == "正常") {
                                if (_0xc36054.data.on == "cc") {
                                  _0x27b2d9();
                                } else {
                                  _0xc36054.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                }
                              } else {
                                if (_0xc36054.data._0x41bda4 == "可绑") {
                                  var _0x4dd763 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x4dd763, "可绑定帮助", _0x25534d, _0x410d7c, _0x4dd763);
                                } else {
                                  if (_0xc36054.data._0x41bda4 == "超绑") {
                                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else {
                                    _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  }
                                }
                              }
                            }
                          });
                          _0x1a9e03 && _0x1a9e03.insertBefore(_0x2aabfa, _0x1a9e03.firstChild);
                        }
                      } else {
                        _0x4a4d02 && _0x4a4d02.remove();
                      }
                    }
                    _0x5646fe === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-desk") && (_0x5646fe = setInterval(_0x3c515a, 800));
                  }();
                  !function () {
                    var _0x593733 = null;
                    if (_0x593733 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                      let _0x9cc487 = document.querySelectorAll("#gudingDataMy");
                      for (var _0x2949e3 of _0x9cc487) {
                        _0x2949e3.remove();
                      }
                      _0x593733 = setInterval(_0x439b48, 1500);
                    }
                    function _0x439b48() {
                      let _0x58fb57 = document.querySelector("[class*=\"index-module__col-query-btn-wrapper\"]");
                      var _0x3f5874 = document.querySelector("#gudingBut");
                      if (_0x58fb57 && !_0x3f5874) {
                        let _0x583d0e = document.createElement("button");
                        _0x583d0e.id = "gudingBut";
                        _0x583d0e.textContent = "开启咕噜噜数据定格";
                        _0x583d0e.style.backgroundColor = "#009688";
                        _0x583d0e.style.height = "28px";
                        _0x583d0e.style.color = "white";
                        _0x583d0e.style.fontSize = "15px";
                        _0x583d0e.style.border = "none";
                        _0x583d0e.style.borderRadius = "5px";
                        _0x583d0e.style.cursor = "pointer";
                        _0x583d0e.style.marginRight = "10px";
                        _0x583d0e.style.display = "flex";
                        _0x583d0e.style.alignItems = "center";
                        _0x583d0e.style.justifyContent = "center";
                        _0x583d0e.addEventListener("click", function () {
                          chrome.runtime._0x1354f4({
                            type: "usageFunctionRecord",
                            phone: _0x410d7c,
                            name: "咕噜噜数据定格"
                          });
                          if (_0xc36054.data._0x41bda4 == "正常") {
                            if (_0xc36054.data.on == "cc") {
                              {
                                if (_0x583d0e.textContent === "开启咕噜噜数据定格") {
                                  {
                                    let _0x12ddd8 = document.createElement("div");
                                    _0x12ddd8.id = "gudingDataMy";
                                    _0x12ddd8.style.display = "none";
                                    document.body.appendChild(_0x12ddd8);
                                    _0x583d0e.style.backgroundColor = "rgb(224 35 31)";
                                    _0x583d0e.textContent = "关闭咕噜噜数据定格";
                                  }
                                } else {
                                  {
                                    let _0x49ec42 = document.querySelectorAll("#gudingDataMy");
                                    for (var _0x9ce8e8 of _0x49ec42) {
                                      {
                                        _0x9ce8e8.remove();
                                      }
                                    }
                                    _0x583d0e.style.backgroundColor = "#009688";
                                    _0x583d0e.textContent = "开启咕噜噜数据定格";
                                  }
                                }
                              }
                            } else {
                              if (_0xc36054.data.on == "yb") {
                                {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                }
                              }
                            }
                          } else {
                            if (_0xc36054.data._0x41bda4 == "可绑") {
                              {
                                var _0x50c18e = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x50c18e, "可绑定帮助", _0x25534d, _0x410d7c, _0x50c18e);
                              }
                            } else {
                              if (_0xc36054.data._0x41bda4 == "超绑") {
                                {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              } else {
                                _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          }
                        });
                        _0x58fb57.insertBefore(_0x583d0e, _0x58fb57.firstChild);
                        clearTimeout(_0x593733);
                      }
                    }
                  }();
                  !function () {
                    var _0x19650f = "";
                    var _0x5a3ad3 = "";
                    var _0x19650f = "";
                    chrome.runtime._0x56f6dd.addListener((_0x20974e, _0xbc9747, _0x5cc5b9) => {
                      if (_0x20974e.action === "updateContent") {
                        {
                          _0x19650f(_0x20974e.text);
                          _0x5cc5b9({
                            code: "ok"
                          });
                          return true;
                        }
                      } else {
                        if (_0x20974e.action === "updateNumContent") {
                          _0x5a3ad3(_0x20974e.text);
                          _0x5cc5b9({
                            code: "ok"
                          });
                          return true;
                        }
                      }
                    });
                    var _0x3c8a3a = null;
                    function _0x3b8cea() {
                      chrome.runtime._0x56f6dd.addListener((_0x253685, _0x763714, _0x1e7bb2) => {
                        {
                          if (_0x253685.action === "updateContent") {
                            addMessage(_0x253685.text);
                            _0x1e7bb2({
                              code: "ok"
                            });
                            return true;
                          }
                        }
                      });
                      if (!document.querySelector("#my-shopinfo-box")) {
                        const _0x4cea45 = document.createElement("div");
                        _0x4cea45.id = "my-shopinfo-box";
                        const _0x4996f5 = document.createElement("div");
                        _0x4996f5.id = "info-content";
                        const _0x2508a0 = document.createElement("div");
                        _0x2508a0.id = "action-container";
                        const _0x524841 = document.createElement("label");
                        _0x524841.textContent = "同时创建发货单";
                        _0x524841.className = "checkbox-label";
                        const _0x1919e7 = document.createElement("input");
                        _0x1919e7.type = "checkbox";
                        _0x1919e7.id = "create-shipment-checkbox";
                        _0x1919e7.className = "custom-checkbox";
                        _0x1919e7.checked = true;
                        _0x524841.prepend(_0x1919e7);
                        const _0x308ca4 = document.createElement("label");
                        _0x308ca4.textContent = "最大发货数量";
                        _0x308ca4.className = "checkbox-label";
                        const _0x1e68ab = document.createElement("input");
                        _0x1e68ab.type = "checkbox";
                        _0x1e68ab.id = "create-maxFa-checkbox";
                        _0x1e68ab.className = "custom-checkbox";
                        _0x1e68ab.checked = true;
                        _0x308ca4.prepend(_0x1e68ab);
                        let _0x38035a = document.createElement("button");
                        _0x38035a.id = "start-stop-btn";
                        _0x38035a.textContent = "启动咕噜噜加发货台";
                        _0x38035a.onclick = _0x44774c;
                        const _0x7401dc = document.createElement("button");
                        _0x7401dc.id = "minimize-btn";
                        _0x7401dc.title = "点击最小化显示框";
                        _0x7401dc.textContent = "—";
                        _0x7401dc.onclick = () => {
                          _0x4cea45.classList.add("minimized");
                          _0x4996f5.style.display = "none";
                          _0x2508a0.style.display = "none";
                          const _0x163259 = document.createElement("button");
                          _0x163259.id = "maximize-btn";
                          _0x163259.textContent = "+";
                          _0x163259.onclick = () => {
                            {
                              _0x4cea45.classList.remove("minimized");
                              _0x4996f5.style.display = "flex";
                              _0x2508a0.style.display = "flex";
                              _0x163259.remove();
                            }
                          };
                          _0x4cea45.appendChild(_0x163259);
                          _0x163259.style.position = "absolute";
                        };
                        const _0x3dfc51 = document.createElement("div");
                        _0x3dfc51.id = "footer-text";
                        _0x3dfc51.textContent = "0";
                        const _0x22c773 = 80;
                        "启动咕噜噜加发货台".replace(/\\u([\d\w]{4})/gi, (_0x517cc1, _0x9e9b2f) => String.fromCharCode(parseInt(_0x9e9b2f, 16))) == _0x38035a.textContent ? "" : !function () {
                          chrome.storage._0x5e599f.set({
                            codePhone: ["", ""]
                          });
                          window.location.reload();
                        }();
                        function _0x5419ee(_0x3db3d7) {
                          {
                            const _0x487151 = document.createElement("p");
                            _0x487151.textContent = _0x3db3d7;
                            _0x4996f5.appendChild(_0x487151);
                            _0x4996f5.children.length > _0x22c773 && _0x4996f5.removeChild(_0x4996f5.firstChild);
                            _0x520714();
                          }
                        }
                        _0x19650f = _0x5419ee;
                        function _0x520714() {
                          {
                            const _0x395bdb = _0x4996f5.scrollHeight;
                            const _0x2d3de0 = _0x4cea45.offsetHeight - _0x2508a0.offsetHeight;
                            const _0x14ca22 = _0x395bdb - _0x2d3de0;
                            _0x4942cf(_0x14ca22);
                          }
                        }
                        function _0x4942cf(_0x28a1b2) {
                          const _0x3e7ec3 = 100;
                          let _0x2c5b02 = performance.now();
                          let _0x1fbf1f = _0x4996f5.scrollTop;
                          function _0x378a97(_0xd45135) {
                            const _0x3b6cf0 = _0xd45135 - _0x2c5b02;
                            const _0x39e0e5 = _0x3b6cf0 / 1000 * _0x3e7ec3;
                            const _0x3bc711 = _0x1fbf1f + _0x39e0e5;
                            _0x4996f5.scrollTop = Math.min(_0x3bc711, _0x28a1b2);
                            if (_0x4996f5.scrollTop >= _0x28a1b2) {
                              {
                                cancelAnimationFrame(_0x378a97);
                              }
                            } else {
                              requestAnimationFrame(_0x378a97);
                            }
                          }
                          requestAnimationFrame(_0x378a97);
                        }
                        _0x5a3ad3 = function (_0x28bc38) {
                          {
                            _0x3dfc51.textContent = "当前实际需要加发货台任务数：" + _0x28bc38;
                          }
                        };
                        _0x4cea45.appendChild(_0x4996f5);
                        _0x4cea45.appendChild(_0x3dfc51);
                        _0x4cea45.appendChild(_0x2508a0);
                        document.body.appendChild(_0x4cea45);
                        function _0x45a4ed() {
                          {
                            const _0x7254c1 = "initial-style";
                            let _0x137799 = document.getElementById(_0x7254c1);
                            !_0x137799 && (_0x137799 = document.createElement("style"), _0x137799.id = _0x7254c1, document.head.appendChild(_0x137799));
                            _0x137799.textContent = "\n                                            /* 添加工具提示样式 */\n                                            #minimize-btn::before {\n                                              content: attr(title);\n                                              position: absolute;\n                                              bottom: 100%; /* 工具提示显示在按钮下方 */\n                                              left: 50%; /* 水平居中 */\n                                              transform: translateX(-50%);\n                                              visibility: hidden;\n                                              opacity: 0;\n                                              white-space: nowrap;\n                                              padding: 5px 10px;\n                                              background-color: #333;\n                                              color: #fff;\n                                              border-radius: 4px;\n                                              transition: visibility 0.2s, opacity 0.2s;\n                                              z-index: 1001; /* 确保工具提示位于显示框上方 */\n                                            }\n\n                                            #minimize-btn:hover::before {\n                                              visibility: visible;\n                                              opacity: 1;\n                                            }\n                                            #my-shopinfo-box {\n                                              position: fixed;\n                                              top: 20px;\n                                              right: 20px;\n                                              width: 400px;\n                                              height: 400px;\n                                              background: #f4f4f9;\n                                              border-radius: 12px;\n                                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                                              display: flex;\n                                              flex-direction: column;\n                                              z-index: 1000;\n                                              overflow: hidden; /* 隐藏所有溢出内容 */\n                                              transition: width 0.3s, height 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            #my-shopinfo-box.minimized {\n                                              width: 280px;\n                                              height: 40px;\n                                            }\n\n                                            #info-content {\n                                              flex: 1;\n                                              overflow-y: auto; /* 只显示竖直滚动条 */\n                                              background: #ffffff;\n                                              padding: 20px;\n                                              border-bottom: 1px solid #e0e0e0;\n                                              display: flex;\n                                              flex-direction: column;\n                                              gap: 10px;\n                                              scrollbar-width: none; /* Firefox 隐藏滚动条 */\n                                            }\n\n                                            #info-content::-webkit-scrollbar {\n                                              display: none; /* Chrome, Safari, and Opera 隐藏滚动条 */\n                                            }\n\n                                            #action-container {\n                                              display: flex;\n                                              justify-content: space-between;\n                                              align-items: center;\n                                              background: #ffffff;\n                                              border-top: 1px solid #e0e0e0;\n                                              padding: 10px 20px;\n                                            }\n\n                                            #action-container label {\n                                              font-size: 14px;\n                                              color: #333;\n                                            }\n\n                                            #action-container .custom-checkbox {\n                                            /* 勾选框的基本样式 */\n                                            width: 20px;\n                                            height: 20px;\n                                            margin-right: 10px;\n                                            accent-color: #007bff; /* 为勾选框添加颜色 */\n                                            border: 2px solid #e22929; /* 未选中时的边框颜色 */\n                                            border-radius: 3px;\n                                            outline: none;\n                                            cursor: pointer;\n                                            transition: border-color 0.3s;\n                                          }\n\n                                          #action-container .custom-checkbox:checked {\n                                            /* 选中状态的边框颜色 */\n                                            border-color: #007bff;\n                                          }\n\n                                          #action-container .checkbox-label {\n                                            display: inline-flex; /* 确保勾选框和文本在同一行 */\n                                            align-items: center; /* 垂直居中文本 */\n                                            user-select: none; /* 防止选中文本 */\n                                          }\n\n                                            #start-stop-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              cursor: pointer;\n                                              width: 180px;\n                                              font-size: 12px;\n                                              font-family: auto;\n                                              color: #fff;\n                                              margin-left: 5px;\n                                              padding: 8px 16px;\n                                              border-radius: 8px;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #start-stop-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #start-stop-btn.stop {\n                                              background: #dc3545;\n                                            }\n\n                                            #start-stop-btn.stop:hover {\n                                              background: #c82333;\n                                            }\n\n                                            #minimize-btn, #maximize-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              color: #fff;\n                                              font-size: 16px;\n                                              padding: 8px 12px;\n                                              margin-left: 10px;\n                                              border-radius: 50%;\n                                              cursor: pointer;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #minimize-btn:hover, #maximize-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #footer-text {\n                                              background: #f1f1f1;\n                                              padding: 15px;\n                                              font-size: 14px;\n                                              color: #666;\n                                              border-top: 1px solid #ddd;\n                                              text-align: center; /* 默认居中对齐 */\n                                              border-radius: 0 0 12px 12px;\n                                              transition: text-align 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            /* 当显示框最小化时，底部文本变为左对齐 */\n                                            #my-shopinfo-box.minimized #footer-text {\n                                              text-align: left;\n                                            }\n\n                                            /* 适应最大化按钮的位置 */\n                                            #maximize-btn {\n                                              position: relative;\n                                              top: 4px;\n                                              right: 0px;\n                                            }\n                                            ";
                          }
                        }
                        _0x45a4ed();
                        _0x2508a0.appendChild(_0x524841);
                        _0x2508a0.appendChild(_0x308ca4);
                        _0x2508a0.appendChild(_0x38035a);
                        _0x2508a0.appendChild(_0x7401dc);
                        _0x5419ee("正在加载随机拟人算法");
                        _0x5419ee("开始任务");
                        _0x17cf40(_0x4cea45);
                        function _0x17cf40(_0x1c215d) {
                          let _0x5229dd = 0;
                          let _0x1905fa = 0;
                          let _0xb38145 = 0;
                          let _0x49fb35 = 0;
                          document.getElementById(_0x1c215d.id + "-header") ? document.getElementById(_0x1c215d.id + "-header").onmousedown = _0x195f0a : _0x1c215d.onmousedown = _0x195f0a;
                          function _0x195f0a(_0x4a7aea) {
                            _0x4a7aea = _0x4a7aea || window.event;
                            _0x4a7aea.preventDefault();
                            _0xb38145 = _0x4a7aea.clientX;
                            _0x49fb35 = _0x4a7aea.clientY;
                            document.onmouseup = _0x165a69;
                            document.onmousemove = _0x4f7f4c;
                          }
                          function _0x4f7f4c(_0x30f38d) {
                            {
                              _0x30f38d = _0x30f38d || window.event;
                              _0x30f38d.preventDefault();
                              _0x5229dd = _0xb38145 - _0x30f38d.clientX;
                              _0x1905fa = _0x49fb35 - _0x30f38d.clientY;
                              _0xb38145 = _0x30f38d.clientX;
                              _0x49fb35 = _0x30f38d.clientY;
                              _0x1c215d.style.top = _0x1c215d.offsetTop - _0x1905fa + "px";
                              _0x1c215d.style.left = _0x1c215d.offsetLeft - _0x5229dd + "px";
                            }
                          }
                          function _0x165a69() {
                            document.onmouseup = null;
                            document.onmousemove = null;
                          }
                        }
                        function _0x44774c() {
                          if (_0x38035a.textContent === "启动咕噜噜加发货台") {
                            _0x38035a.textContent = "停止任务";
                            _0x38035a.classList.add("stop");
                            _0x5419ee("任务已启动...");
                            const _0x2d0cbb = _0x1919e7.checked;
                            const _0x195611 = _0x1e68ab.checked;
                            const _0x43235f = _0x2f02df();
                            _0x43235f.length === 0 ? _0x5419ee("没有可执行的任务") : fetchData().then(_0x4943a0 => {
                              chrome.runtime._0x1354f4({
                                type: "addShipment",
                                _0x4161b0: _0x4943a0,
                                _0x5db39c: _0x43235f,
                                _0xd92f83: _0x2d0cbb,
                                _0x20e6c5: _0x195611
                              }, _0x381100 => {
                                if (!chrome.runtime._0x2f07b0) {
                                  _0x5419ee("任务执行成功");
                                }
                              });
                            }).catch(_0x462be3 => {});
                          } else {
                            _0x38035a.textContent = "启动咕噜噜加发货台";
                            _0x38035a.classList.remove("stop");
                            _0x5419ee("任务已停止...");
                            chrome.runtime._0x1354f4({
                              type: "clearWbCodeList"
                            }, _0x42fe40 => {
                              if (!chrome.runtime._0x2f07b0) {
                                _0x4cea45.remove();
                              }
                            });
                          }
                        }
                      }
                    }
                    function _0x2f02df() {
                      var _0x4b9bfb = [];
                      const _0x5edb77 = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]");
                      const _0x12c492 = Array.from(_0x5edb77.querySelectorAll("tr"));
                      const _0x1b6a49 = [];
                      let _0x104ea4 = [];
                      let _0x244bca = 0;
                      while (_0x244bca < _0x12c492.length) {
                        const _0x3bbfd5 = _0x12c492[_0x244bca];
                        const _0x269359 = _0x3bbfd5.querySelector("td");
                        if (_0x269359) {
                          {
                            const _0x12bcbe = parseInt(_0x269359.getAttribute("rowspan"), 10);
                            if (_0x12bcbe > 1) {
                              _0x104ea4.length > 0 && (_0x1b6a49.push(_0x104ea4), _0x104ea4 = []);
                              for (let _0x42e540 = 0; _0x42e540 < _0x12bcbe; _0x42e540++) {
                                {
                                  _0x244bca < _0x12c492.length && (_0x104ea4.push(_0x12c492[_0x244bca]), _0x244bca++);
                                }
                              }
                              continue;
                            }
                          }
                        }
                        _0x104ea4.push(_0x3bbfd5);
                        _0x244bca++;
                      }
                      if (_0x104ea4.length > 0) {
                        {
                          _0x1b6a49.push(_0x104ea4);
                        }
                      }
                      for (const [_0x5579fa, _0xa0ee25] of _0x1b6a49.entries()) {
                        if (_0xa0ee25.length > 0) {
                          {
                            const _0x3b302d = _0xa0ee25[0];
                            const _0x55c301 = _0x3b302d.querySelectorAll("td");
                            if (_0x55c301[0]) {
                              const _0x331742 = _0x55c301[0].querySelector("label");
                              if (_0x331742) {
                                {
                                  const _0x1d4ccc = _0x331742.getAttribute("data-checked");
                                  if (_0x1d4ccc === "true") {
                                    for (var _0x2cbaca of _0xa0ee25) {
                                      var _0x2e710f = _0x2cbaca.querySelectorAll("td");
                                      var _0x2ca3c7 = _0x2e710f[_0x2e710f.length - 1];
                                      if (_0x2e710f.length > 12) {
                                        {
                                          if (_0x2ca3c7.innerText.includes("修改数量")) {
                                            var _0x44c17d = _0x2ca3c7.querySelectorAll("a")[2];
                                            if (!_0x44c17d.className.includes("disabled")) {
                                              {
                                                var _0x473daa = _0x2e710f[1].innerText.split("\n")[0];
                                                _0x4b9bfb.push(_0x473daa);
                                              }
                                            }
                                          } else {
                                            {
                                              var _0x44c17d = _0x2ca3c7.querySelectorAll("a")[1];
                                              if (!_0x44c17d.className.includes("disabled")) {
                                                var _0x473daa = _0x2e710f[1].innerText.split("\n")[0];
                                                _0x4b9bfb.push(_0x473daa);
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (_0x2e710f.length > 6 && _0x2e710f.length < 12) {
                                          {
                                            if (_0x2ca3c7.innerText.includes("修改数量")) {
                                              var _0x44c17d = _0x2ca3c7.querySelectorAll("a")[2];
                                              if (!_0x44c17d.className.includes("disabled")) {
                                                var _0x473daa = _0x2e710f[0].innerText.split("\n")[0];
                                                _0x4b9bfb.push(_0x473daa);
                                              }
                                            } else {
                                              var _0x44c17d = _0x2ca3c7.querySelectorAll("a")[1];
                                              if (!_0x44c17d.className.includes("disabled")) {
                                                {
                                                  var _0x473daa = _0x2e710f[0].innerText.split("\n")[0];
                                                  _0x4b9bfb.push(_0x473daa);
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
                      return _0x4b9bfb;
                    }
                    window.addEventListener("popstate", function (_0x54b254) {
                      var _0x1b713c = window.location.href;
                      if (_0x1b713c = "https://seller.kuajingmaihuo.com/main/order-manage", _0x1b713c = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x1b713c = "https://seller.kuajingmaihuo.com/main/order-manage-custom") {
                        {
                          _0x3c8a3a == null && (_0x3c8a3a = setInterval(_0x3e0e27, 1000));
                        }
                      }
                    });
                    function _0x65365b() {
                      {
                        var _0x18feae = window.location.href;
                        if (_0x18feae = "https://seller.kuajingmaihuo.com/main/order-manage", _0x18feae = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x18feae = "https://seller.kuajingmaihuo.com/main/order-manage-custom") {
                          {
                            try {
                              {
                                var _0x340636 = document.querySelector("[class*=order-manage_leftCnt]");
                                if (!_0x340636) {
                                  return;
                                }
                                var _0x285bf0 = document.querySelector("[class*=\"CBX_outerWrapper\"][class*=\"CBX_checkbox\"][class*=\"CBX_medium\"]");
                                var _0x44ac7f = _0x285bf0.getAttribute("data-checked");
                                var _0x104fa3 = _0x285bf0.getAttribute("data-indeterminate");
                                if (_0x44ac7f == "true" || _0x104fa3 == "true") {
                                  var _0x3066a9 = document.createElement("button");
                                  _0x3066a9.textContent = "批量抢加发货台";
                                  _0x3066a9.id = "myBatchAddButton";
                                  _0x3066a9.style.backgroundColor = "#e91616";
                                  _0x3066a9.style.color = "white";
                                  _0x3066a9.style.border = "none";
                                  _0x3066a9.style.borderRadius = "5px";
                                  _0x3066a9.style.fontSize = "15px";
                                  _0x3066a9.style.cursor = "pointer";
                                  _0x3066a9.style.transition = "background-color 0.3s";
                                  _0x3066a9.style.height = "27px";
                                  _0x3066a9.style.margin = "0px 12px 0px 5px";
                                  _0x3066a9.style.fontWeight = "bold";
                                  _0x3066a9.style.display = "flex";
                                  _0x3066a9.style.alignItems = "center";
                                  _0x3066a9.onmouseover = function () {
                                    this.style.backgroundColor = "rgb(213 70 70)";
                                  };
                                  _0x3066a9.onmouseout = function () {
                                    this.style.backgroundColor = "#e91616";
                                  };
                                  _0x3066a9.addEventListener("click", async function () {
                                    chrome.runtime._0x1354f4({
                                      type: "usageFunctionRecord",
                                      phone: _0x410d7c,
                                      name: "批量抢发货台"
                                    });
                                    !document.querySelector("#my-shopinfo-box") && _0x3b8cea();
                                  });
                                  if (!document.querySelector("#myBatchAddButton")) {
                                    {
                                      _0x340636.insertBefore(_0x3066a9, _0x340636.firstChild);
                                    }
                                  }
                                } else {
                                  const _0x993587 = document.querySelector("#myBatchAddButton");
                                  _0x993587 && _0x993587.remove();
                                }
                              }
                            } catch (_0xfc129c) {}
                          }
                        }
                      }
                    }
                    function _0x3e0e27() {
                      _0x65365b();
                    }
                    _0x3c8a3a == null && (_0x3c8a3a = setInterval(_0x3e0e27, 500));
                  }();
                } else {
                  if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) {
                    !function () {
                      window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment") && setInterval(function () {
                        _0x436689();
                      }, 1500);
                      window.addEventListener("popstate", function (_0x49a6a9) {
                        window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment") && setInterval(function () {
                          _0x436689();
                        }, 1500);
                      });
                      function _0x436689() {
                        {
                          if (!document.querySelector("#priceAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) {
                            try {
                              var _0x133618 = document.createElement("button");
                              _0x133618.style.margin = "8px";
                              _0x133618.style.marginTop = "0";
                              _0x133618.style.padding = "1px 8px 3px 8px";
                              _0x133618.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                              _0x133618.style.color = "white";
                              _0x133618.style.border = "none";
                              _0x133618.style.fontFamily = "auto";
                              _0x133618.style.borderRadius = "10px";
                              _0x133618.style.cursor = "pointer";
                              _0x133618.style.transition = "background-color 0.3s";
                              _0x133618.style.display = "flex";
                              _0x133618.style.alignItems = "center";
                              _0x133618.style.justifyContent = "center";
                              _0x133618.style.gap = "8px";
                              _0x133618.style.fontSize = "15px";
                              _0x133618.id = "priceAdjustment";
                              const _0x37bfd3 = document.createElement("img");
                              _0x37bfd3.src = chrome.runtime._0x55f5ad("web/img/control.png");
                              _0x37bfd3.style.width = "28px";
                              _0x37bfd3.style.height = "28px";
                              _0x37bfd3.style.objectFit = "contain";
                              _0x133618.appendChild(_0x37bfd3);
                              const _0x590e99 = document.createTextNode("申请调价同步");
                              _0x133618.appendChild(_0x590e99);
                              var _0x1a907b = document.createElement("button");
                              _0x1a907b.style.margin = "0 0 8px";
                              _0x1a907b.style.marginTop = "0";
                              _0x1a907b.style.padding = "1px 8px 3px 8px";
                              _0x1a907b.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                              _0x1a907b.style.color = "white";
                              _0x1a907b.style.border = "none";
                              _0x1a907b.style.fontFamily = "auto";
                              _0x1a907b.style.borderRadius = "10px";
                              _0x1a907b.style.cursor = "pointer";
                              _0x1a907b.style.transition = "background-color 0.3s";
                              _0x1a907b.style.display = "flex";
                              _0x1a907b.style.alignItems = "center";
                              _0x1a907b.style.justifyContent = "center";
                              _0x1a907b.style.gap = "8px";
                              _0x1a907b.style.fontSize = "15px";
                              _0x1a907b.id = "priceAdjustmentNo";
                              _0x1a907b.appendChild(_0x37bfd3.cloneNode(true));
                              _0x1a907b.appendChild(document.createTextNode("一键拒绝全部调价"));
                              _0x133618.onmouseover = function () {
                                _0x133618.style.backgroundColor = "#45a049";
                              };
                              _0x133618.onmouseout = function () {
                                _0x133618.style.backgroundColor = "#4CAF50";
                              };
                              _0x1a907b.onmouseover = function () {
                                _0x1a907b.style.backgroundColor = "#f03e3e";
                              };
                              _0x1a907b.onmouseout = function () {
                                _0x1a907b.style.backgroundColor = "#d03636";
                              };
                              var _0x29adc8 = document.querySelector("[class*=\"TAB_tabContentInnerContainer\"]");
                              if (_0x29adc8) {
                                {
                                  _0x29adc8.appendChild(_0x133618);
                                  _0x29adc8.appendChild(_0x1a907b);
                                }
                              }
                              _0x133618.addEventListener("click", () => {
                                {
                                  chrome.runtime._0x1354f4({
                                    type: "usageFunctionRecord",
                                    phone: _0x410d7c,
                                    name: "商品降价前端同步"
                                  });
                                  if (_0xc36054.data._0x41bda4 == "正常") {
                                    if (_0xc36054.data.on == "yb") {
                                      showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                    } else {
                                      if (_0xc36054.data.on == "cc") {
                                        createLoader();
                                        fetchData().then(_0x2d7fa7 => {
                                          syncPriceList(_0x2d7fa7).then(() => {
                                            {
                                              removeLoader();
                                              showCustomAlert("当天调价商品已完成同步调价申请");
                                            }
                                          });
                                        });
                                      } else {
                                        _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                      }
                                    }
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "可绑") {
                                      var _0x107a48 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                      showCustomAlert("是否绑定当前店铺使用<br>" + _0x107a48, "可绑定帮助", _0x25534d, _0x410d7c, _0x107a48);
                                    } else {
                                      if (_0xc36054.data._0x41bda4 == "超绑") {
                                        showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      } else {
                                        _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                }
                              });
                              _0x1a907b.addEventListener("click", () => {
                                chrome.runtime._0x1354f4({
                                  type: "usageFunctionRecord",
                                  phone: _0x410d7c,
                                  name: "拒绝商品调价"
                                });
                                if (_0xc36054.data._0x41bda4 == "正常") {
                                  if (_0xc36054.data.on == "yb") {
                                    showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                  } else {
                                    if (_0xc36054.data.on == "cc") {
                                      createLoader();
                                      fetchData().then(_0x278f73 => {
                                        {
                                          queryRefPriceAdj(_0x278f73).then(() => {
                                            removeLoader();
                                            showCustomAlert("待确认调价的商品，已全部拒绝！");
                                          });
                                        }
                                      });
                                    } else {
                                      _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                    }
                                  }
                                } else {
                                  if (_0xc36054.data._0x41bda4 == "可绑") {
                                    {
                                      var _0x1559ba = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                      showCustomAlert("是否绑定当前店铺使用<br>" + _0x1559ba, "可绑定帮助", _0x25534d, _0x410d7c, _0x1559ba);
                                    }
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "超绑") {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    } else {
                                      _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              });
                            } catch (_0xea6f6a) {}
                          }
                        }
                      }
                    }();
                  } else {
                    if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) {
                      !function () {
                        window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                          _0xc808fc();
                        }, 1500);
                        window.addEventListener("popstate", function (_0x5190ea) {
                          window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                            _0xc808fc();
                          }, 1500);
                        });
                        function _0xc808fc() {
                          if (!document.querySelector("#jgsbAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) {
                            try {
                              {
                                var _0x4ac65b = document.createElement("button");
                                _0x4ac65b.style.margin = "8px";
                                _0x4ac65b.style.marginTop = "0";
                                _0x4ac65b.style.padding = "1px 8px 3px 8px";
                                _0x4ac65b.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                                _0x4ac65b.style.color = "white";
                                _0x4ac65b.style.border = "none";
                                _0x4ac65b.style.fontFamily = "auto";
                                _0x4ac65b.style.borderRadius = "10px";
                                _0x4ac65b.style.cursor = "pointer";
                                _0x4ac65b.style.transition = "background-color 0.3s";
                                _0x4ac65b.style.display = "flex";
                                _0x4ac65b.style.alignItems = "center";
                                _0x4ac65b.style.justifyContent = "center";
                                _0x4ac65b.style.gap = "8px";
                                _0x4ac65b.style.fontSize = "15px";
                                _0x4ac65b.id = "jgsbAdjustment";
                                const _0x2c686f = document.createElement("img");
                                _0x2c686f.src = chrome.runtime._0x55f5ad("web/img/control.png");
                                _0x2c686f.style.width = "28px";
                                _0x2c686f.style.height = "28px";
                                _0x2c686f.style.objectFit = "contain";
                                _0x4ac65b.appendChild(_0x2c686f);
                                const _0x45443c = document.createTextNode("催审价格申报商品");
                                _0x4ac65b.appendChild(_0x45443c);
                                _0x4ac65b.onmouseover = function () {
                                  _0x4ac65b.style.backgroundColor = "#45a049";
                                };
                                _0x4ac65b.onmouseout = function () {
                                  _0x4ac65b.style.backgroundColor = "#4CAF50";
                                };
                                var _0x1a47bb = document.querySelector("[class*=TAB_tabContentInnerContainer]");
                                if (_0x1a47bb) {
                                  {
                                    _0x1a47bb.appendChild(_0x4ac65b);
                                  }
                                }
                                _0x4ac65b.addEventListener("click", () => {
                                  chrome.runtime._0x1354f4({
                                    type: "usageFunctionRecord",
                                    phone: _0x410d7c,
                                    name: "催审-价格申报商品"
                                  });
                                  if (_0xc36054.data._0x41bda4 == "正常") {
                                    if (_0xc36054.data.on == "yb") {
                                      {
                                        showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                      }
                                    } else {
                                      if (_0xc36054.data.on == "cc") {
                                        {
                                          createLoader();
                                          fetchData().then(_0x5515fe => {
                                            synchjPriceList(_0x5515fe).then(() => {
                                              removeLoader();
                                              showCustomAlert("价格申报中的商品已经成功反馈！");
                                            });
                                          });
                                        }
                                      } else {
                                        _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                      }
                                    }
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "可绑") {
                                      {
                                        var _0x42f549 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                        showCustomAlert("是否绑定当前店铺使用<br>" + _0x42f549, "可绑定帮助", _0x25534d, _0x410d7c, _0x42f549);
                                      }
                                    } else {
                                      if (_0xc36054.data._0x41bda4 == "超绑") {
                                        showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      } else {
                                        _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                });
                              }
                            } catch (_0xa6fe8e) {
                              {
                                removeLoader();
                              }
                            }
                          }
                        }
                      }();
                    } else {
                      if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) {
                        !function () {
                          async function _0x285750(_0x53ffab) {
                            if (_0x53ffab === "") {
                              {
                                return 0;
                              }
                            }
                            const _0x13833b = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/skc/pageQuery";
                            const _0xd526c0 = {
                              accept: "*/*",
                              "accept-language": "zh-CN,zh;q=0.9",
                              mallid: _0x53ffab,
                              "Content-Type": "application/json"
                            };
                            const _0x3a64f1 = async (_0x2259b2, _0x2fdce7) => {
                              {
                                const _0x1f32a9 = JSON.stringify({
                                  _0x1f3fc2: 1,
                                  page: _0x2259b2,
                                  _0x40a2cd: _0x2fdce7
                                });
                                const _0x51a371 = {
                                  method: "POST",
                                  headers: _0xd526c0,
                                  body: _0x1f32a9,
                                  redirect: "follow"
                                };
                                while (true) {
                                  {
                                    try {
                                      const _0x4c4d68 = await fetch(_0x13833b, _0x51a371);
                                      const _0xf4edbf = await _0x4c4d68.json();
                                      if (_0xf4edbf.success === false) {
                                        await new Promise(_0x3b0097 => setTimeout(_0x3b0097, 500));
                                      } else {
                                        return _0xf4edbf.result;
                                      }
                                    } catch (_0x52cdbf) {
                                      {
                                        throw _0x52cdbf;
                                      }
                                    }
                                  }
                                }
                              }
                            };
                            try {
                              const _0x35b6d6 = await _0x3a64f1(1, 1);
                              if (_0x35b6d6._0x510d03.length === 0) {
                                {
                                  return 0;
                                }
                              }
                              const _0x42ff08 = _0x35b6d6.total;
                              const _0x5c7cbb = Math.ceil(_0x42ff08 / 20);
                              const _0x116748 = [];
                              for (let _0x2b621c = 1; _0x2b621c <= _0x5c7cbb; _0x2b621c++) {
                                _0x116748.push(_0x3a64f1(_0x2b621c, 20));
                              }
                              const _0x55fee0 = await Promise.all(_0x116748);
                              const _0x3a0d51 = _0x55fee0.flatMap(_0x266a74 => _0x266a74._0x510d03);
                              for (var _0x135aaf of _0x3a0d51) {
                                _0x5ebd27(_0x53ffab, _0x135aaf.productId, _0x135aaf._0x12a9dc, _0x135aaf._0x526978);
                              }
                            } catch (_0x309af4) {
                              return 0;
                            }
                          }
                          async function _0x5ebd27(_0x29c1c2, _0x4a59f1, _0x1c8a42, _0x3759b4) {
                            {
                              var _0x4c47a8 = await _0x4500f4(_0x4a59f1, _0x1c8a42);
                              if (Object.keys(_0x4c47a8).length !== 0) {
                                if (_0x3759b4 == null) {
                                  const _0x123494 = new Headers();
                                  _0x123494.append("accept", "*/*");
                                  _0x123494.append("mallid", _0x29c1c2);
                                  _0x123494.append("Content-Type", "application/json");
                                  const _0x3af45b = JSON.stringify({
                                    _0x16e79b: 1,
                                    _0x38ab20: [_0x4a59f1],
                                    _0x123c7e: [{
                                      _0x372c86: 4,
                                      _0x4d142a: "有误差需修正"
                                    }]
                                  });
                                  const _0x4c0a1e = {
                                    method: "POST",
                                    headers: _0x123494,
                                    body: _0x3af45b,
                                    redirect: "follow"
                                  };
                                  try {
                                    {
                                      const _0x4ebfc9 = await fetch("https://seller.kuajingmaihuo.com/bg-lich-mms/audit/edit/task/product/batchAdd", _0x4c0a1e);
                                      const _0x1e735c = await _0x4ebfc9.json();
                                      var _0x26768d = _0x1e735c.result._0x2846e3[_0x4a59f1 + ""];
                                      _0x4c47a8._0x1e8570 = _0x26768d;
                                      _0x328c2e(_0x29c1c2, _0x4c47a8);
                                    }
                                  } catch (_0x5b4814) {
                                    console.error(_0x5b4814);
                                  }
                                } else {
                                  _0x4c47a8._0x1e8570 = _0x3759b4[0]._0x1e8570;
                                  _0x328c2e(_0x29c1c2, _0x4c47a8);
                                }
                              }
                            }
                          }
                          async function _0x328c2e(_0x54dd2a, _0x11c40f) {
                            {
                              const _0x172889 = new Headers();
                              _0x172889.append("accept", "*/*");
                              _0x172889.append("mallid", _0x54dd2a);
                              _0x172889.append("Content-Type", "application/json");
                              const _0x4fa097 = JSON.stringify(_0x11c40f);
                              const _0xdc7601 = {
                                method: "POST",
                                headers: _0x172889,
                                body: _0x4fa097,
                                redirect: "follow"
                              };
                              try {
                                const _0xbb6576 = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/edit/task/reply", _0xdc7601);
                                const _0x189f89 = await _0xbb6576.json();
                              } catch (_0x5516b1) {
                                console.error(_0x5516b1);
                              }
                            }
                          }
                          async function _0x4500f4(_0x5cfba5, _0x5229b1) {
                            {
                              const _0x411241 = {
                                productId: _0x5cfba5,
                                _0x1e8570: "",
                                _0x588644: 0,
                                _0x4e81d2: [{
                                  _0x44c69a: [{
                                    _0x54bd09: 0,
                                    _0x95e0f2: "",
                                    _0x290bdd: 0,
                                    _0x3ab30c: ""
                                  }],
                                  _0x411a9f: []
                                }]
                              };
                              var _0x2eab98 = 0;
                              for (let _0x4bdc0f = 0; _0x4bdc0f < _0x5229b1.length; _0x4bdc0f++) {
                                const _0x24c703 = _0x5229b1[_0x4bdc0f];
                                const _0x2fdf5e = [];
                                for (let _0x6c8b10 = 0; _0x6c8b10 < _0x24c703._0x32c987.length; _0x6c8b10++) {
                                  const _0x1912cb = _0x24c703._0x32c987[_0x6c8b10];
                                  _0x2fdf5e.push({
                                    _0x54bd09: _0x1912cb._0x54bd09,
                                    _0x95e0f2: _0x1912cb._0x95e0f2,
                                    _0x290bdd: _0x1912cb._0x290bdd,
                                    _0x3ab30c: _0x1912cb._0x3ab30c
                                  });
                                }
                                var _0x365dba = _0x24c703._0x179e2e;
                                if (_0x365dba._0x1d0c58 == null) {
                                  _0x2eab98 = _0x2eab98 + 1;
                                } else {
                                  _0x365dba._0x1d0c58.value == _0x365dba._0x46c56b.value && _0x365dba._0x14035d._0x5c1eb3 == _0x365dba._0x2c316c._0x5c1eb3 && _0x365dba._0x14035d.width == _0x365dba._0x2c316c.width && _0x365dba._0x14035d.height == _0x365dba._0x2c316c.height && (_0x2eab98 = _0x2eab98 + 1);
                                }
                                const _0x31be8b = _0x365dba._0x14035d;
                                const _0x1ae469 = _0x365dba._0x2c316c;
                                _0x411241._0x4e81d2[0]._0x411a9f.push({
                                  _0x1dafc0: _0x2fdf5e,
                                  _0x2cb5c2: {
                                    _0x19f8df: {
                                      value: _0x365dba._0x1d0c58 && _0x365dba._0x1d0c58.value || _0x365dba._0x46c56b && _0x365dba._0x46c56b.value
                                    },
                                    _0x59896c: {
                                      _0x5c1eb3: _0x31be8b && _0x31be8b._0x5c1eb3 || _0x1ae469 && _0x1ae469._0x5c1eb3,
                                      width: _0x31be8b && _0x31be8b.width || _0x1ae469 && _0x1ae469.width,
                                      height: _0x31be8b && _0x31be8b.height || _0x1ae469 && _0x1ae469.height
                                    }
                                  }
                                });
                              }
                              if (_0x2eab98 == _0x5229b1.length) {
                                return {};
                              }
                              return _0x411241;
                            }
                          }
                          function _0x4d2b62() {
                            if (!document.querySelector("#tbgfccxxButton") && window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) {
                              try {
                                var _0x4b3549 = document.createElement("button");
                                _0x4b3549.style.margin = "8px";
                                _0x4b3549.style.marginTop = "0";
                                _0x4b3549.style.padding = "1px 8px 3px 8px";
                                _0x4b3549.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                                _0x4b3549.style.color = "white";
                                _0x4b3549.style.border = "none";
                                _0x4b3549.style.fontFamily = "auto";
                                _0x4b3549.style.borderRadius = "10px";
                                _0x4b3549.style.cursor = "pointer";
                                _0x4b3549.style.transition = "background-color 0.3s";
                                _0x4b3549.style.display = "flex";
                                _0x4b3549.style.alignItems = "center";
                                _0x4b3549.style.justifyContent = "center";
                                _0x4b3549.style.gap = "8px";
                                _0x4b3549.style.fontSize = "15px";
                                _0x4b3549.id = "tbgfccxxButton";
                                const _0x13e038 = document.createElement("img");
                                _0x13e038.src = chrome.runtime._0x55f5ad("web/img/control.png");
                                _0x13e038.style.width = "28px";
                                _0x13e038.style.height = "28px";
                                _0x13e038.style.objectFit = "contain";
                                _0x4b3549.appendChild(_0x13e038);
                                const _0x53d85f = document.createTextNode("同步官方尺寸信息");
                                _0x4b3549.appendChild(_0x53d85f);
                                _0x4b3549.onmouseover = function () {
                                  _0x4b3549.style.backgroundColor = "#45a049";
                                };
                                _0x4b3549.onmouseout = function () {
                                  {
                                    _0x4b3549.style.backgroundColor = "#4CAF50";
                                  }
                                };
                                var _0x112b1b = document.querySelector("[class*=\"hooks_dividerFieldContainer\"]");
                                if (_0x112b1b) {
                                  {
                                    _0x112b1b.appendChild(_0x4b3549);
                                  }
                                }
                                _0x4b3549.addEventListener("click", () => {
                                  chrome.runtime._0x1354f4({
                                    type: "usageFunctionRecord",
                                    phone: _0x410d7c,
                                    name: "同步官方尺寸"
                                  });
                                  if (_0xc36054.data._0x41bda4 == "正常") {
                                    {
                                      if (_0xc36054.data.on == "yb") {
                                        showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                      } else {
                                        if (_0xc36054.data.on == "cc") {
                                          {
                                            createLoader();
                                            fetchData().then(_0x4cc45e => {
                                              _0x285750(_0x4cc45e).then(() => {
                                                removeLoader();
                                                showCustomAlert("在售商品的尺寸和重量信息已经更新为官方测量的标准数据。");
                                              });
                                            });
                                          }
                                        } else {
                                          _0xc36054.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                        }
                                      }
                                    }
                                  } else {
                                    if (_0xc36054.data._0x41bda4 == "可绑") {
                                      var _0x3bb558 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                      showCustomAlert("是否绑定当前店铺使用<br>" + _0x3bb558, "可绑定帮助", _0x25534d, _0x410d7c, _0x3bb558);
                                    } else {
                                      if (_0xc36054.data._0x41bda4 == "超绑") {
                                        showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      } else {
                                        _0xc36054.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                });
                              } catch (_0x5afa34) {
                                {
                                  removeLoader();
                                }
                              }
                            }
                          }
                          window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                            _0x4d2b62();
                          }, 1500);
                          window.addEventListener("popstate", function (_0x36efbf) {
                            window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                              _0x4d2b62();
                            }, 1500);
                          });
                        }();
                      } else {
                        if (window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-activity/")) {
                          !function () {
                            function _0x29219() {
                              function _0x421798(_0x1dffaf) {
                                if (_0x1dffaf.querySelector(".show-button")) {
                                  return;
                                }
                                const _0x7dacd = document.createElement("button");
                                _0x7dacd.className = "show-button";
                                _0x7dacd.type = "button";
                                _0x7dacd.textContent = "显";
                                const _0x46e71b = _0x1dffaf.innerText.match(/\d+/g);
                                const _0x34df40 = _0x46e71b ? _0x46e71b.join("") : "";
                                _0x7dacd.setAttribute("data-value", _0x34df40);
                                _0x1dffaf.appendChild(_0x7dacd);
                                _0x7dacd.addEventListener("click", function () {
                                  _0x421de9(_0x7dacd.getAttribute("data-value"));
                                  _0x5282b1.classList.add("show");
                                });
                              }
                              const _0x487be6 = document.querySelectorAll("[class*=\"goods-info_spu\"]");
                              _0x487be6.forEach(_0x421798);
                              const _0x5282b1 = document.createElement("div");
                              _0x5282b1.id = "card-table-container";
                              _0x5282b1.className = "card-table-container";
                              const _0x2ebf18 = document.createElement("button");
                              _0x2ebf18.className = "close-button";
                              _0x2ebf18.id = "close-button";
                              _0x2ebf18.innerHTML = "&times;";
                              const _0x437cfa = document.createElement("div");
                              _0x437cfa.className = "card-table-wrapper";
                              const _0x46edf7 = document.createElement("table");
                              _0x46edf7.className = "card-table";
                              const _0x45a2ab = document.createElement("thead");
                              const _0x35d111 = document.createElement("tr");
                              ["SKU属性", "今日销量", "近7天销量", "近30天销量", "仓内可用库存"].forEach(_0x14eac8 => {
                                const _0x1275e5 = document.createElement("th");
                                _0x1275e5.textContent = _0x14eac8;
                                _0x35d111.appendChild(_0x1275e5);
                              });
                              _0x45a2ab.appendChild(_0x35d111);
                              const _0x4c60ad = document.createElement("tbody");
                              _0x4c60ad.id = "card-table-body";
                              _0x46edf7.appendChild(_0x45a2ab);
                              _0x46edf7.appendChild(_0x4c60ad);
                              _0x437cfa.appendChild(_0x46edf7);
                              _0x5282b1.appendChild(_0x2ebf18);
                              _0x5282b1.appendChild(_0x437cfa);
                              document.body.appendChild(_0x5282b1);
                              const _0x55b1d6 = document.createElement("style");
                              _0x55b1d6.textContent = "\n                                            .show-button {\n                                                font-size: 15px;\n                                                height: 22px;\n                                                color: #fff;\n                                                background-color: #00796b;\n                                                border: none;\n                                                border-radius: 8px;\n                                                cursor: pointer;\n                                                margin-left: 10px;\n                                            }\n                                            .show-button:hover {\n                                                background-color: #004d40;\n                                                transform: scale(1.05);\n                                            }\n                                            .card-table-container {\n                                                display: none;\n                                                position: fixed;\n                                                top: 50%;\n                                                left: 50%;\n                                                transform: translate(-50%, -50%);\n                                                max-width: 90%;\n                                                max-height: 60vh;\n                                                padding: 25px 5px 5px 5px;\n                                                border-radius: 12px;\n                                                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                background-color: #ffffff;\n                                                z-index: 1000;\n                                                border: 1px solid #b2dfdb;\n                                                overflow: hidden;\n                                                transition: opacity 0.3s ease;\n                                            }\n                                            .card-table-container.show {\n                                                display: block;\n                                                opacity: 1;\n                                            }\n                                            .card-table-wrapper {\n                                                max-height: 50vh;\n                                                overflow-y: auto;\n                                            }\n                                            .card-table {\n                                                width: 100%;\n                                                border-collapse: collapse;\n                                                font-size: 16px;\n                                                text-align: left;\n                                                table-layout: fixed;\n                                            }\n                                            .card-table thead th, .card-table tbody td {\n                                                padding: 12px;\n                                                border: 1px solid #b2dfdb;\n                                                box-sizing: border-box;\n                                            }\n                                            .card-table thead th {\n                                                background-color: #004d40;\n                                                color: #ffffff;\n                                                position: sticky;\n                                                top: 0;\n                                                z-index: 1;\n                                                box-shadow: 0 4px 2px -2px #b2dfdb;\n                                            }\n                                            .close-button {\n                                                position: absolute;\n                                                top: 0;\n                                                right: 15px;\n                                                font-size: 24px;\n                                                background: none;\n                                                border: none;\n                                                cursor: pointer;\n                                                color: #00796b;\n                                                transition: color 0.3s ease;\n                                                z-index: 1001;\n                                            }\n                                            .close-button:hover {\n                                                color: #004d40;\n                                            }\n                                            .close-button:focus {\n                                                outline: none;\n                                            }\n                                        ";
                              document.head.appendChild(_0x55b1d6);
                              const _0x417106 = {};
                              function _0x421de9(_0x2c8d01) {
                                if (_0x417106[_0x2c8d01]) {
                                  {
                                    _0x20426b(_0x417106[_0x2c8d01]);
                                  }
                                } else {
                                  getMallId().then(_0x2578bd => {
                                    _0x44c8de(_0x2578bd, _0x2c8d01).then(_0x2c7fed => {
                                      _0x2c7fed.length != 0 && (_0x417106[_0x2c8d01] = _0x2c7fed);
                                      _0x20426b(_0x2c7fed);
                                    });
                                  });
                                }
                              }
                              function _0x20426b(_0x2bb179) {
                                _0x4c60ad.innerHTML = "";
                                _0x2bb179.forEach(_0x174a37 => {
                                  const _0x46195 = document.createElement("tr");
                                  _0x46195.innerHTML = "\n                                                    <td>" + _0x174a37._0x440735 + "</td>\n                                                    <td>" + _0x174a37._0x301a4c + "</td>\n                                                    <td>" + _0x174a37._0x3b1b90 + "</td>\n                                                    <td>" + _0x174a37._0x4a90b4 + "</td>\n                                                    <td>" + _0x174a37._0x46258c + "</td>\n                                                ";
                                  _0x4c60ad.appendChild(_0x46195);
                                });
                              }
                              _0x2ebf18.addEventListener("click", function () {
                                _0x5282b1.classList.remove("show");
                              });
                              async function _0x44c8de(_0x5968bc, _0x3afeb1) {
                                const _0x3c98e1 = new Headers();
                                _0x3c98e1.append("accept", "*/*");
                                _0x3c98e1.append("mallid", _0x5968bc);
                                _0x3c98e1.append("Content-Type", "application/json");
                                const _0x3f4419 = JSON.stringify({
                                  _0x1bcb8e: 1,
                                  _0x40a2cd: 1,
                                  _0x488b4d: 0,
                                  _0x253220: [_0x3afeb1],
                                  _0x5a4044: 7
                                });
                                const _0x509987 = {
                                  method: "POST",
                                  headers: _0x3c98e1,
                                  body: _0x3f4419,
                                  redirect: "follow"
                                };
                                const _0x106aac = 5;
                                let _0x5437c1 = 0;
                                while (_0x5437c1 < _0x106aac) {
                                  {
                                    try {
                                      const _0x55a026 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse", _0x509987);
                                      if (!_0x55a026.ok) {
                                        throw new Error("HTTP error! Status: " + _0x55a026.status);
                                      }
                                      const _0x5a2d9d = await _0x55a026.json();
                                      if (_0x5a2d9d.success != true) {
                                        throw new Error("HTTP error! Status: " + _0x55a026.status);
                                      }
                                      const _0x2838c8 = _0x5a2d9d.result._0x3f65c3.flatMap(_0x43cc65 => _0x43cc65._0x312804.map(_0x1231d5 => ({
                                        _0x440735: _0x1231d5.className,
                                        _0x301a4c: _0x1231d5._0x4a3389,
                                        _0x3b1b90: _0x1231d5._0x478966,
                                        _0x4a90b4: _0x1231d5._0x2c113a,
                                        _0x46258c: _0x1231d5._0x53715f[0]._0x30a18e._0x356864
                                      })));
                                      return _0x2838c8;
                                    } catch (_0x47b1c0) {
                                      _0x5437c1++;
                                      if (_0x5437c1 >= _0x106aac) {
                                        {
                                          return [];
                                        }
                                      }
                                      await new Promise(_0x1f4942 => setTimeout(_0x1f4942, 800));
                                    }
                                  }
                                }
                              }
                              const _0x36ee0f = new MutationObserver(_0x4767ba => {
                                _0x4767ba.forEach(_0x16ef43 => {
                                  _0x16ef43.addedNodes.forEach(_0x5de915 => {
                                    _0x5de915.nodeType === Node.ELEMENT_NODE && (_0x5de915 = _0x5de915.querySelector("[class*=\"goods-info_spu\"]"), _0x5de915 && _0x421798(_0x5de915));
                                  });
                                });
                              });
                              const _0x13a26b = {
                                childList: true,
                                subtree: true
                              };
                              _0x36ee0f.observe(document.body, _0x13a26b);
                            }
                            waitForConsumerConsultation("[class*=\"goods-info_spu\"]", "").then(_0x4dac79 => {
                              _0x29219();
                            });
                          }();
                        } else {
                          window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-tools/create-coupon") && !function () {
                            myWaitForElement("[class*=\"create-coupon_batchOperation\"]").then(_0x30f9b0 => {
                              loadScripts(["web/js/fillInActivityCoupons.js"]);
                            });
                          }();
                        }
                      }
                    }
                  }
                }
              }
            }
          });
          triggerPopstate(window.location.href);
          window.location.href.includes("seller.kuajingmaihuo.com") && (Promise.all([getToggleState("toggleState"), getToggleState("toggleState1"), getToggleState("noticeSwitch"), getToggleState("removeWatermarkSwitch")]).then(([_0x23ee78, _0x22a9e1, _0x47e89b, _0x1821fb]) => {
            true && function () {
              "use strict";

              const _0x3d64c7 = new MutationObserver(_0x438204 => {
                getToggleState("toggleState").then(_0x58ef73 => {
                  if (_0x58ef73) {
                    var _0x3a1b86 = document.querySelectorAll("[data-testid=\"beast-core-radio\"]");
                    _0x3a1b86.forEach(function (_0x4c4b51) {
                      _0x4c4b51.getAttribute("data-checked") == "false" && _0x4c4b51.textContent.trim() === "我不接受" && !_0x4c4b51.getAttribute("gululu-bb") && (_0x4c4b51.setAttribute("gululu-bb", "ok"), _0x4c4b51.click());
                      var _0x17f2db = document.querySelector("[data-testid=\"beast-core-portal-main\"]");
                      _0x17f2db && _0x17f2db.innerText.includes("我已知晓风险") && (_0x17f2db.querySelector("[data-testid=\"beast-core-checkbox\"]").click(), _0x17f2db.querySelector("[data-testid=\"beast-core-button\"]").click());
                    });
                    var _0x1b7441 = document.querySelectorAll("body :not(script):not(style)");
                    _0x1b7441.forEach(function (_0x14b006) {
                      (_0x14b006.textContent.trim() === "放弃" || _0x14b006.textContent.trim() === "拒绝接受价格调整建议" || _0x14b006.textContent.trim() === "放弃活动" || _0x14b006.textContent.trim().includes("不参与活动")) && !_0x14b006.getAttribute("gululu-aa") && (_0x14b006.setAttribute("gululu-aa", "ok"), _0x14b006.click());
                    });
                  }
                }).catch(_0x476997 => {});
                getToggleState("toggleState1").then(_0x170b89 => {
                  if (localStorage.getItem("monitoringState") === "false" && _0x170b89) {
                    document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x3d291a) {
                      _0x3d291a.innerText.includes("改价意愿") && !function () {
                        var _0x11c2c2 = document.querySelectorAll("[placeholder=\"请选择\"]");
                        if (Array.from(_0x11c2c2).map(_0x584262 => _0x584262.value).join("").includes("申报价格")) {
                          _0x11c2c2.forEach(function (_0x4091b8) {
                            (_0x4091b8.value.includes("调整为参考申报价格") || _0x4091b8.value === "同意建议申报价格" || _0x4091b8.value === "同意参考申报价格") && _0x4091b8.click();
                          });
                          var _0x28bc3d = document.querySelectorAll("[role=\"listbox\"]");
                          _0x28bc3d.forEach(function (_0x2e2d59) {
                            _0x2e2d59.querySelectorAll("span")[1].click();
                          });
                        } else {
                          setTimeout(function () {
                            document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x31eadf => {
                              {
                                var _0x19c553 = _0x31eadf.querySelectorAll("td");
                                if (_0x19c553.length >= 8) {
                                  {
                                    var _0x4438ee = parseFloat(_0x19c553[4].textContent.trim().replace("¥", ""));
                                    var _0x1a8c73 = parseFloat(_0x19c553[5].textContent.trim().replace("¥", ""));
                                    var _0x7ae6b = Math.max(_0x4438ee, _0x1a8c73);
                                    _0x444f94(_0x19c553[7], _0x7ae6b);
                                  }
                                } else {
                                  if (_0x19c553.length >= 5) {
                                    {
                                      var _0x4438ee = parseFloat(_0x19c553[1].textContent.trim().replace("¥", ""));
                                      var _0x1a8c73 = parseFloat(_0x19c553[2].textContent.trim().replace("¥", ""));
                                      var _0x7ae6b = Math.max(_0x4438ee, _0x1a8c73);
                                      _0x444f94(_0x19c553[4], _0x7ae6b);
                                    }
                                  } else {
                                    if (_0x19c553.length >= 4) {
                                      var _0x3b446f = parseFloat(_0x19c553[1].textContent.trim().replace("¥", ""));
                                      var _0x101e60 = parseFloat(_0x19c553[2].textContent.trim().replace("¥", ""));
                                      var _0x7ae6b = Math.max(_0x3b446f, _0x101e60);
                                      _0x444f94(_0x19c553[3], _0x7ae6b);
                                    }
                                  }
                                }
                              }
                            });
                            function _0x444f94(_0x34a4f5, _0x4e246f) {
                              {
                                var _0x41ee90 = _0x34a4f5.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                                _0x41ee90 && (_0x3285c6(_0x41ee90, _0x4e246f), _0x4f725f(_0x41ee90, "input"), _0x4f725f(_0x41ee90, "change"), _0x4f725f(_0x34a4f5, "input"), _0x4f725f(_0x34a4f5, "change"));
                              }
                            }
                            function _0x4f725f(_0x25e24d, _0x5007df) {
                              var _0x2d2a8d = new Event(_0x5007df, {
                                bubbles: true
                              });
                              _0x25e24d.dispatchEvent(_0x2d2a8d);
                            }
                            function _0x3285c6(_0x26dc00, _0x469ba2) {
                              var _0x5d4d90 = _0x26dc00._0x5e45bf && _0x26dc00._0x5e45bf._0x563847;
                              if (_0x5d4d90) {
                                {
                                  _0x26dc00._0x5e45bf._0x563847 = () => "";
                                }
                              }
                              _0x26dc00.value = _0x469ba2;
                              var _0x55ffa0 = new InputEvent("input", {
                                bubbles: true,
                                cancelable: true
                              });
                              _0x26dc00.dispatchEvent(_0x55ffa0);
                              _0x5d4d90 && (_0x26dc00._0x5e45bf._0x563847 = _0x5d4d90);
                            }
                          }, 100);
                        }
                      }();
                    });
                  } else {
                    if (_0x170b89) {
                      var _0x2533cb = window.location.href;
                      _0x2533cb == "https://seller.kuajingmaihuo.com/main/product/seller-select" && document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x26ed7b) {
                        _0x26ed7b.innerText === "改价意愿" && !function () {
                          var _0x298a5d = document.querySelectorAll("[placeholder=\"请选择\"]");
                          if (Array.from(_0x298a5d).map(_0x44ca30 => _0x44ca30.value).join("").includes("申报价格")) {
                            _0x298a5d.forEach(function (_0x2f47d1) {
                              (_0x2f47d1.value.includes("调整为参考申报价格") || _0x2f47d1.value === "同意建议申报价格" || _0x2f47d1.value === "同意参考申报价格") && _0x2f47d1.click();
                            });
                            var _0x4c1427 = document.querySelectorAll("[role=\"listbox\"]");
                            _0x4c1427.forEach(function (_0x2e2407) {
                              _0x2e2407.querySelectorAll("span")[1].click();
                            });
                          } else {
                            setTimeout(function () {
                              document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x5d9037 => {
                                var _0x932f8b = _0x5d9037.querySelectorAll("td");
                                if (_0x932f8b.length >= 8) {
                                  {
                                    var _0x3b7dc2 = parseFloat(_0x932f8b[4].textContent.trim().replace("¥", ""));
                                    var _0x48fe6f = parseFloat(_0x932f8b[5].textContent.trim().replace("¥", ""));
                                    var _0x450d01 = Math.max(_0x3b7dc2, _0x48fe6f);
                                    _0x17a92c(_0x932f8b[7], _0x450d01);
                                  }
                                } else {
                                  if (_0x932f8b.length >= 5) {
                                    {
                                      var _0x3b7dc2 = parseFloat(_0x932f8b[1].textContent.trim().replace("¥", ""));
                                      var _0x48fe6f = parseFloat(_0x932f8b[2].textContent.trim().replace("¥", ""));
                                      var _0x450d01 = Math.max(_0x3b7dc2, _0x48fe6f);
                                      _0x17a92c(_0x932f8b[4], _0x450d01);
                                    }
                                  } else {
                                    if (_0x932f8b.length >= 4) {
                                      var _0x43314a = parseFloat(_0x932f8b[1].textContent.trim().replace("¥", ""));
                                      var _0x120c37 = parseFloat(_0x932f8b[2].textContent.trim().replace("¥", ""));
                                      var _0x450d01 = Math.max(_0x43314a, _0x120c37);
                                      _0x17a92c(_0x932f8b[3], _0x450d01);
                                    }
                                  }
                                }
                              });
                              function _0x17a92c(_0x4dbbb7, _0x5589e2) {
                                {
                                  var _0x4e1c9e = _0x4dbbb7.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                                  _0x4e1c9e && (_0xc793e2(_0x4e1c9e, _0x5589e2), _0x2c1494(_0x4e1c9e, "input"), _0x2c1494(_0x4e1c9e, "change"), _0x2c1494(_0x4dbbb7, "input"), _0x2c1494(_0x4dbbb7, "change"));
                                }
                              }
                              function _0x2c1494(_0x4e78da, _0x53e48a) {
                                var _0x2c860b = new Event(_0x53e48a, {
                                  bubbles: true
                                });
                                _0x4e78da.dispatchEvent(_0x2c860b);
                              }
                              function _0xc793e2(_0x25af58, _0x45842a) {
                                {
                                  var _0x4ef4d8 = _0x25af58._0x5e45bf && _0x25af58._0x5e45bf._0x563847;
                                  _0x4ef4d8 && (_0x25af58._0x5e45bf._0x563847 = () => "");
                                  _0x25af58.value = _0x45842a;
                                  var _0x189e7f = new InputEvent("input", {
                                    bubbles: true,
                                    cancelable: true
                                  });
                                  _0x25af58.dispatchEvent(_0x189e7f);
                                  _0x4ef4d8 && (_0x25af58._0x5e45bf._0x563847 = _0x4ef4d8);
                                }
                              }
                            }, 100);
                          }
                        }();
                      });
                    }
                  }
                });
              });
              _0x3d64c7.observe(document.body, {
                childList: true,
                subtree: true
              });
            }();
            _0x47e89b && function () {
              async function _0x19499a(_0x4affc7) {
                {
                  const _0x52cfe3 = new Headers();
                  _0x52cfe3.append("accept", "*/*");
                  _0x52cfe3.append("mallid", _0x4affc7);
                  _0x52cfe3.append("Content-Type", "text/plain");
                  const _0x35bc63 = "{}";
                  const _0xb23f02 = {
                    method: "POST",
                    headers: _0x52cfe3,
                    body: _0x35bc63,
                    redirect: "follow"
                  };
                  try {
                    {
                      const _0x437c5a = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/unreadMsgDetail", _0xb23f02);
                      const _0x4a0c02 = await _0x437c5a.json();
                      return _0x4a0c02.result._0x567934;
                    }
                  } catch (_0x53bcfc) {
                    console.error(_0x53bcfc);
                  }
                }
              }
              async function _0xf71ba1(_0x12c9af, _0x579b2e) {
                const _0x46e755 = new Headers();
                _0x46e755.append("accept", "*/*");
                _0x46e755.append("mallid", _0x12c9af);
                _0x46e755.append("Content-Type", "application/json");
                const _0x543f49 = JSON.stringify({
                  _0x57a690: _0x579b2e
                });
                const _0x5124f7 = {
                  method: "POST",
                  headers: _0x46e755,
                  body: _0x543f49,
                  redirect: "follow"
                };
                try {
                  const _0x2b58da = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/read", _0x5124f7);
                  const _0x357f91 = await _0x2b58da.json();
                  return _0x357f91.result;
                } catch (_0x21a720) {
                  console.error(_0x21a720);
                }
              }
              getToggleState("noticeSwitch").then(_0x140b0b => {
                if (_0x140b0b) {
                  {
                    getMallId().then(_0x5e0abc => {
                      _0x19499a(_0x5e0abc).then(_0x4ae11b => {
                        if (_0x4ae11b && _0x4ae11b.length > 0) {
                          for (const _0x388a2d of _0x4ae11b) {
                            {
                              _0xf71ba1(_0x5e0abc, _0x388a2d.id).then(_0x37b7c3 => {});
                            }
                          }
                        }
                      });
                    });
                  }
                }
              });
            }();
            let _0x1988da = false;
            const _0x3535f6 = new MutationObserver(_0x2a98ac => {
              _0x2a98ac.forEach(_0x48a535 => {
                _0x48a535.type === "childList" && getToggleState("removeWatermarkSwitch").then(_0x48156e => {
                  if (_0x48156e) {
                    {
                      let _0x122744 = document.querySelectorAll("div[style*=\"z-index: 2147483647\"][class=\"\"][id]:not([id=\"\"])");
                      if (_0x122744.length > 0) {
                        {
                          let _0x472546 = _0x122744[0];
                          !_0x1988da ? (_0x122744.forEach(_0x576d0d => {
                            let _0x50eeab = _0x576d0d.cloneNode(true);
                            document.head.appendChild(_0x50eeab);
                            _0x576d0d.parentNode.removeChild(_0x576d0d);
                          }), _0x1988da = true) : _0x122744.forEach(_0x421f8d => {
                            if (_0x421f8d.parentNode.tagName === "BODY" || _0x421f8d.parentNode.tagName === "DIV") {
                              let _0x1a2c1e = _0x421f8d.cloneNode(true);
                              document.head.appendChild(_0x1a2c1e);
                              _0x421f8d.parentNode.removeChild(_0x421f8d);
                            }
                          });
                        }
                      }
                    }
                  }
                });
              });
            });
            const _0x4c8afb = {
              childList: true,
              subtree: true
            };
            _0x3535f6.observe(document.body, _0x4c8afb);
          }), function () {
            "use strict";

            var _0x5c32b4 = false;
            var _0x526189 = false;
            var _0x39562c;
            var _0x1d42c8;
            var _0x520a65 = document.createElement("style");
            _0x520a65.innerHTML = "\n                                    .switch-container {\n                                        position: fixed;\n                                        bottom: 80px;\n                                        right: 12px;\n                                        z-index: 9999999;\n                                        transition: right 0.5s ease;\n                                        width: 60px; /* 调整按钮容器的宽度 */\n                                    }\n    \n                                    .switch-container:hover {\n                                        right: 0;\n                                        width: 60px; /* 鼠标移入时扩展按钮容器的宽度 */\n                                    }\n    \n                                    .switch {\n                                        position: relative;\n                                        display: inline-block;\n                                        width: 100%;\n                                        height: 34px;\n                                    }\n    \n                                    .switch input {\n                                        opacity: 0;\n                                        width: 0;\n                                        height: 0;\n                                    }\n    \n                                    .slider {\n                                        position: absolute;\n                                        cursor: pointer;\n                                        top: 0;\n                                        left: 0;\n                                        right: 0;\n                                        bottom: 0;\n                                        background-color: #ccc;\n                                        transition: .4s;\n                                    }\n    \n                                    .slider:before {\n                                        position: absolute;\n                                        content: \"\";\n                                        height: 26px;\n                                        width: 26px;\n                                        left: 4px;\n                                        bottom: 4px;\n                                        background-color: white;\n                                        transition: .4s;\n                                    }\n    \n                                    input:checked + .slider {\n                                        background-color: #2196F3;\n                                    }\n    \n                                    input:focus + .slider {\n                                        box-shadow: 0 0 1px #2196F3;\n                                    }\n    \n                                    input:checked + .slider:before {\n                                        transform: translateX(26px);\n                                    }\n    \n                                    .slider.round {\n                                        border-radius: 34px;\n                                    }\n    \n                                    .slider.round:before {\n                                        border-radius: 50%;\n                                    }\n                                ";
            document.head.appendChild(_0x520a65);
            var _0x4cb228 = document.createElement("div");
            _0x4cb228.classList.add("switch-container");
            var _0x1695a8 = document.createElement("label");
            _0x1695a8.classList.add("switch");
            var _0x247359 = document.createElement("input");
            _0x247359.type = "checkbox";
            _0x247359.checked = localStorage.getItem("monitoringState") === "true";
            _0x1695a8.appendChild(_0x247359);
            var _0x358310 = document.createElement("span");
            _0x358310.classList.add("slider", "round");
            _0x1695a8.appendChild(_0x358310);
            _0x4cb228.appendChild(_0x1695a8);
            document.body.appendChild(_0x4cb228);
            var _0x32c47a = document.createElement("div");
            _0x32c47a.style.zIndex = 999999;
            _0x32c47a.style.position = "fixed";
            _0x32c47a.style.bottom = "80px";
            _0x32c47a.style.right = "83px";
            _0x32c47a.style.padding = "10px";
            _0x32c47a.style.borderRadius = "5px";
            _0x32c47a.style.backgroundColor = "#f0f0f0";
            _0x32c47a.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            _0x32c47a.style.transition = "opacity 0.3s ease";
            _0x32c47a.style.opacity = "0";
            document.body.appendChild(_0x4cb228);
            document.body.appendChild(_0x32c47a);
            var _0x19eeca = [];
            function _0x205708(_0x30a5fe) {
              _0x247359.checked ? _0x479d57() : _0x1681c3();
              _0x39562c = setTimeout(function () {
                _0x4cb228.style.transition = "right 0.5s ease";
                _0x4cb228.style.right = "-35px";
              }, 2000);
              var _0x1d31ed = false;
              if (_0x30a5fe) {
                {
                  var _0x43ccf0 = document.querySelectorAll("*[style=\"z-index: 9996;\"], *[data-testid=\"beast-core-modal-mask\"], *[data-testid=\"beast-core-modal\"], *[data-testid=\"beast-core-modal-container\"],div[data-testid=\"\"]");
                  _0x43ccf0.forEach(function (_0x7a1c97) {
                    {
                      for (const _0x3ff9bb of excludeInformation) {
                        if (_0x7a1c97.textContent.length == 0) {
                          continue;
                        }
                        windowRegex = new RegExp(typeof windowRegex === "string" ? windowRegex.slice(1, -1) : windowRegex);
                        if ((_0x7a1c97.textContent.startsWith(_0x3ff9bb) || windowRegex.test(_0x7a1c97.textContent)) && !_0x7a1c97.textContent.startsWith("以下待办")) {
                          _0x1d31ed = true;
                          if (_0x7a1c97.textContent.includes("1/5加入发货台")) {
                            _0x1d31ed = false;
                          } else {
                            return;
                          }
                        }
                      }
                    }
                  });
                  !_0x1d31ed && _0x43ccf0.forEach(function (_0x3a914f) {
                    _0x19eeca.push({
                      target: _0x3a914f.parentNode,
                      removedNodes: [_0x3a914f]
                    });
                    _0x3a914f.style.display = "none";
                  });
                  _0x44a743.observe(document.body, {
                    childList: true,
                    subtree: true
                  });
                  localStorage.setItem("monitoringState", "true");
                }
              } else {
                _0x44a743.disconnect();
                _0x34a626();
                localStorage.setItem("monitoringState", "false");
              }
            }
            function _0x34a626() {
              _0x19eeca = Array.from(new Set(_0x19eeca));
              _0x19eeca.forEach(function (_0x5b95e0) {
                _0x5b95e0.removedNodes.forEach(function (_0x24624c) {
                  _0x24624c.style.display = "flex";
                });
              });
              _0x19eeca = [];
            }
            var _0x44a743 = new MutationObserver(function (_0x15cf15) {
              {
                var _0x1b322f = localStorage.getItem("monitoringState") === "true";
                if (!_0x1b322f) {
                  return;
                }
                var _0x468f99 = false;
                _0x15cf15.forEach(function (_0xf9c644) {
                  {
                    var _0x4122ad = _0xf9c644.addedNodes;
                    _0x4122ad.forEach(function (_0x5482e1) {
                      if (_0x5482e1.nodeType === 1 && (_0x5482e1.style.zIndex === "1033" || _0x5482e1.style.zIndex === "9996" || _0x5482e1.dataset._0x527194 === "beast-core-modal-mask" || _0x5482e1.dataset._0x527194 == "" || _0x5482e1.dataset._0x527194 === "beast-core-modal" || _0x5482e1.dataset._0x527194 === "beast-core-modal-container")) {
                        {
                          for (const _0x2390b1 of excludeInformation) {
                            windowRegex = new RegExp(typeof windowRegex === "string" ? windowRegex.slice(1, -1) : windowRegex);
                            if (_0x5482e1.textContent.length == 0) {
                              continue;
                            }
                            if ((_0x5482e1.textContent.startsWith(_0x2390b1) || windowRegex.test(_0x5482e1.textContent)) && !_0x5482e1.textContent.startsWith("以下待办")) {
                              {
                                _0x468f99 = true;
                                if (_0x5482e1.textContent.includes("1/5加入发货台")) {
                                  _0x468f99 = false;
                                } else {
                                  return;
                                }
                              }
                            }
                          }
                        }
                      }
                    });
                  }
                });
                if (!_0x468f99) {
                  {
                    _0x15cf15.forEach(function (_0x4de88c) {
                      var _0x9ac3a2 = _0x4de88c.addedNodes;
                      _0x9ac3a2.forEach(function (_0x5b2300) {
                        {
                          if (_0x5b2300.nodeType === 1 && (_0x5b2300.style.zIndex === "1033" || _0x5b2300.style.zIndex === "9996" || _0x5b2300.dataset._0x527194 == "" || _0x5b2300.dataset._0x527194 === "beast-core-modal-mask" || _0x5b2300.dataset._0x527194 === "beast-core-modal" || _0x5b2300.dataset._0x527194 === "beast-core-modal-container")) {
                            {
                              _0x19eeca.push({
                                target: _0x5b2300.parentNode,
                                removedNodes: [_0x5b2300]
                              });
                              _0x5b2300.style.display = "none";
                            }
                          }
                        }
                      });
                    });
                  }
                }
              }
            });
            _0x4cb228.addEventListener("mousedown", function (_0x5a591e) {
              {
                _0x1d42c8 = setTimeout(function () {
                  _0x4cb228.style.display = "none";
                }, 1000);
              }
            });
            _0x4cb228.addEventListener("mouseup", function (_0x4bbe7e) {
              clearTimeout(_0x1d42c8);
            });
            _0x4cb228.addEventListener("click", function () {
              _0x479d57();
              _0x247359.checked = !_0x247359.checked;
              _0x205708(_0x247359.checked);
              clearTimeout(_0x1d42c8);
              _0x247359.checked ? _0x479d57() : _0x1681c3();
            });
            _0x4cb228.addEventListener("mouseenter", function () {
              _0x4cb228.style.transition = "right 0.5s ease";
              _0x4cb228.style.right = "12px";
              _0x7abead();
            });
            _0x4cb228.addEventListener("mouseleave", function () {
              _0x4cb228.style.transition = "right 0.5s ease";
              _0x4cb228.style.right = "-35px";
              _0x40162c();
            });
            _0x4cb228.addEventListener("click", function () {});
            _0x32c47a.addEventListener("mouseleave", function () {
              _0x247359.checked && _0x40162c();
            });
            _0x205708(_0x247359.checked);
            function _0x479d57() {
              {
                _0x4cb228.style.opacity = "1";
                _0x4cb228.style.cursor = "pointer";
                _0x5c32b4 = true;
                _0x32c47a.innerText = "咕噜噜去弹窗已禁用";
                _0x7abead();
                _0x39562c = setTimeout(function () {
                  _0x40162c();
                }, 2000);
              }
            }
            function _0x1681c3() {
              _0x32c47a.style.display = "block";
              _0x4cb228.style.opacity = "1";
              _0x4cb228.style.cursor = "pointer";
              _0x5c32b4 = false;
              _0x32c47a.innerText = "咕噜噜去弹窗已恢复";
              _0x7abead();
              _0x39562c = setTimeout(function () {
                _0x40162c();
              }, 2000);
            }
            function _0x40162c() {
              {
                _0x32c47a.style.opacity = "0";
                _0x526189 = false;
                _0x32c47a.style.display = "none";
              }
            }
            function _0x7abead() {
              _0x32c47a.style.opacity = "1";
              _0x32c47a.style.display = "block";
              _0x526189 = true;
            }
          }());
        }
      });
    });
  });
};
var href = window.location.href;
if (href.includes("https://seller.kuajingmaihuo.com/main/sale-manage/main")) {
  var keyText = href.split("?=");
  keyText.length == 2 && setTimeout(function () {
    showCustomAlert1("商品spu为：" + keyText[1]);
  }, 2000);
}
if (href.includes("https://www.temu.com/bgn_no_access.htm")) {
  function createFloatingBar() {
    const _0x4f1db7 = document.createElement("div");
    _0x4f1db7.style.position = "fixed";
    _0x4f1db7.style.bottom = "0";
    _0x4f1db7.style.left = "0";
    _0x4f1db7.style.width = "100%";
    _0x4f1db7.style.backgroundColor = "#ffffff";
    _0x4f1db7.style.color = "#333";
    _0x4f1db7.style.padding = "20px 40px";
    _0x4f1db7.style.display = "flex";
    _0x4f1db7.style.justifyContent = "center";
    _0x4f1db7.style.alignItems = "center";
    _0x4f1db7.style.boxShadow = "0 -4px 15px rgba(0, 0, 0, 0.1)";
    _0x4f1db7.style.borderTop = "4px solid #3498db";
    _0x4f1db7.style.zIndex = "9999";
    _0x4f1db7.style.borderRadius = "12px 12px 0 0";
    _0x4f1db7.style.fontFamily = "Arial, sans-serif";
    const _0x16a31b = document.createElement("span");
    _0x16a31b.textContent = "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？";
    _0x16a31b.style.fontSize = "18px";
    _0x16a31b.style.fontWeight = "600";
    _0x16a31b.style.lineHeight = "1.5";
    _0x16a31b.style.textAlign = "center";
    _0x16a31b.style.flexGrow = "1";
    _0x16a31b.style.marginRight = "20px";
    _0x4f1db7.appendChild(_0x16a31b);
    const _0x11a229 = document.createElement("div");
    _0x11a229.style.display = "flex";
    _0x11a229.style.alignItems = "center";
    _0x11a229.style.gap = "15px";
    _0x4f1db7.appendChild(_0x11a229);
    const _0x4b87f9 = document.createElement("button");
    _0x4b87f9.textContent = "清空缓存";
    _0x4b87f9.style.backgroundColor = "#3498db";
    _0x4b87f9.style.color = "#fff";
    _0x4b87f9.style.border = "none";
    _0x4b87f9.style.padding = "10px 20px";
    _0x4b87f9.style.borderRadius = "6px";
    _0x4b87f9.style.cursor = "pointer";
    _0x4b87f9.style.fontSize = "14px";
    _0x4b87f9.style.transition = "all 0.3s ease";
    _0x4b87f9.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x4b87f9.onmouseover = () => {
      _0x4b87f9.style.backgroundColor = "#2980b9";
      _0x4b87f9.style.transform = "scale(1.05)";
    };
    _0x4b87f9.onmouseout = () => {
      _0x4b87f9.style.backgroundColor = "#3498db";
      _0x4b87f9.style.transform = "scale(1)";
    };
    _0x4b87f9.onclick = () => {
      chrome.runtime._0x1354f4({
        type: "clearTemuData"
      }).then(() => {
        {
          window.open("https://www.temu.com/", "_self");
          document.body.removeChild(_0x4f1db7);
        }
      });
    };
    "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？".replace(/\\u([\d\w]{4})/gi, (_0x2433c5, _0x32b595) => String.fromCharCode(parseInt(_0x32b595, 16))) == _0x16a31b.textContent ? "" : !function () {
      chrome.storage._0x5e599f.set({
        codePhone: ["", ""]
      });
      window.location.reload();
    }();
    const _0x3a4783 = document.createElement("button");
    _0x3a4783.textContent = "取消";
    _0x3a4783.style.backgroundColor = "#e74c3c";
    _0x3a4783.style.color = "#fff";
    _0x3a4783.style.border = "none";
    _0x3a4783.style.padding = "10px 20px";
    _0x3a4783.style.borderRadius = "6px";
    _0x3a4783.style.cursor = "pointer";
    _0x3a4783.style.fontSize = "14px";
    _0x3a4783.style.transition = "all 0.3s ease";
    _0x3a4783.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x3a4783.onmouseover = () => {
      _0x3a4783.style.backgroundColor = "#c0392b";
      _0x3a4783.style.transform = "scale(1.05)";
    };
    _0x3a4783.onmouseout = () => {
      {
        _0x3a4783.style.backgroundColor = "#e74c3c";
        _0x3a4783.style.transform = "scale(1)";
      }
    };
    _0x3a4783.onclick = () => {
      document.body.removeChild(_0x4f1db7);
    };
    _0x11a229.appendChild(_0x4b87f9);
    _0x11a229.appendChild(_0x3a4783);
    document.body.appendChild(_0x4f1db7);
  }
  createFloatingBar();
}
let dataInfoToPrint = {};
let odInfo = {};
let zzsInfo = [];
let printCodeInfoDict = {};
let base64UploadedBarcode = "";
let allAttrubutesDict = {};
let shibiemaDict = {};
window.addEventListener("sentPrintData", function (_0xe4a1d) {
  var _0x2b6d38 = _0xe4a1d.detail;
  _0x2b6d38.type === "printData" && (dataInfoToPrint = _0x2b6d38.data);
});
async function getEnglishName(_0x3b084a, _0x567f53, _0x37f549 = 1) {
  return new Promise(async (_0x18d82f, _0x359e91) => {
    var _0x2dd8a1 = await getMallId();
    chrome.runtime._0x1354f4({
      type: "getEnglishName",
      text: _0x3b084a,
      _0x27c959: _0x567f53,
      mallid: _0x2dd8a1,
      mode: _0x37f549
    }, _0x1c7c39 => {
      if (_0x1c7c39) {
        {
          _0x18d82f(_0x1c7c39);
        }
      } else {
        _0x359e91(_0x3b084a);
      }
    });
  });
}
function findElementByColor(_0x4572ea, _0x4fd3dd) {
  for (let _0x54cc52 of _0x4572ea) {
    if (_0x54cc52[3] === _0x4fd3dd) {
      {
        return _0x54cc52.filter(_0x472402 => _0x472402 !== null && _0x472402 !== undefined);
      }
    }
  }
  return [];
}
function showPrintBox() {
  const _0x28e955 = document.createElement("style");
  _0x28e955.innerHTML = "\n    .loader-container-p {\n      position: fixed;\n      top: 50%;\n      left: 75%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      z-index: 99000; /* 确保动画在页面的最顶层 */\n    }\n  \n    .loader {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n  \n    .loader div {\n      width: 16px;\n      height: 16px;\n      background: #3498db;\n      border-radius: 50%;\n      animation: bounce 1.2s infinite ease-in-out;\n      margin: 0 6px;\n    }\n  \n    .loader div:nth-child(1) {\n      animation-delay: -0.24s;\n    }\n  \n    .loader div:nth-child(2) {\n      animation-delay: -0.12s;\n    }\n  \n    .loader div:nth-child(3) {\n      animation-delay: 0s;\n    }\n  \n    @keyframes bounce {\n      0%, 20%, 50%, 80%, 100% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-20px);\n      }\n      60% {\n        transform: translateY(-10px);\n      }\n    }\n  \n    .loader-text {\n      font-family: Arial, sans-serif;\n      color: #333;\n      font-size: 16px;\n      text-align: center;\n      margin-top: 8px;\n    }\n  ";
  document.head.appendChild(_0x28e955);
  const _0x124c3f = document.createElement("div");
  _0x124c3f.className = "loader-container-p";
  const _0x94405 = document.createElement("div");
  _0x94405.className = "loader";
  for (let _0x2536ac = 0; _0x2536ac < 3; _0x2536ac++) {
    const _0x3ca3cb = document.createElement("div");
    _0x94405.appendChild(_0x3ca3cb);
  }
  const _0xdc8540 = document.createElement("div");
  _0xdc8540.className = "loader-text";
  _0xdc8540.textContent = "打印数据加载中...";
  _0x124c3f.appendChild(_0x94405);
  _0x124c3f.appendChild(_0xdc8540);
  document.body.appendChild(_0x124c3f);
}
function tipBoxShow(_0x5d2934, _0x532ed3) {
  const _0x43fd21 = document.createElement("div");
  _0x43fd21.textContent = _0x5d2934;
  _0x43fd21.style.position = "fixed";
  _0x43fd21.style.top = "40%";
  _0x43fd21.style.left = "70%";
  _0x43fd21.style.transform = "translate(-50%, -50%)";
  _0x43fd21.style.backgroundColor = "#e8f5e9";
  _0x43fd21.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0x43fd21.style.color = "#1b5e20";
  _0x43fd21.style.padding = "20px 30px";
  _0x43fd21.style.borderRadius = "12px";
  _0x43fd21.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0x43fd21.style.fontSize = "16px";
  _0x43fd21.style.fontFamily = "Arial, sans-serif";
  _0x43fd21.style.textAlign = "center";
  _0x43fd21.style.maxWidth = "80%";
  _0x43fd21.style.wordWrap = "break-word";
  _0x43fd21.style.zIndex = "1000";
  _0x43fd21.style.display = "none";
  _0x43fd21.style.opacity = "0";
  _0x43fd21.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0x43fd21);
  setTimeout(() => {
    _0x43fd21.style.display = "block";
    _0x43fd21.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0x43fd21.style.opacity = "0";
    setTimeout(() => {
      {
        _0x43fd21.style.display = "none";
        document.body.removeChild(_0x43fd21);
      }
    }, 500);
  }, _0x532ed3);
}
function closePrintShowBox() {
  const _0x4cdc41 = document.querySelector(".loader-container-p");
  _0x4cdc41 && _0x4cdc41.remove();
}
window.onerror = function (_0x5b3e83, _0x3635a4, _0x48ee17, _0xa0ce98, _0x56896d) {
  return true;
};
window.onunhandledrejection = function (_0x37640d) {
  _0x37640d.preventDefault();
};
async function currentPageInfo(_0x310857, _0x5c3498, _0x1d223e) {
  return new Promise((_0x5a11b1, _0x188c85) => {
    chrome.runtime._0x1354f4({
      type: "getCurrentPageInfo",
      _0x45f32f: _0x5c3498,
      mallid: _0x310857,
      _0x1ee085: _0x1d223e
    }, _0x443add => {
      _0x443add ? _0x5a11b1(_0x443add) : _0x188c85([]);
    });
  });
}
async function dowlonMmageAsBase64(_0x5deaa9) {
  try {
    {
      const _0x54d63d = await fetch(_0x5deaa9);
      const _0x3dbe10 = await _0x54d63d.blob();
      const _0x4247f6 = new Image();
      _0x4247f6.src = URL.createObjectURL(_0x3dbe10);
      return new Promise((_0x5c9b18, _0x5431ba) => {
        _0x4247f6.onload = () => {
          const _0x2e66e3 = document.createElement("canvas");
          const _0x2c6d7c = _0x2e66e3.getContext("2d");
          _0x2e66e3.width = _0x4247f6.width;
          _0x2e66e3.height = _0x4247f6.height;
          _0x2c6d7c.drawImage(_0x4247f6, 0, 0);
          const _0x3c84f7 = _0x2c6d7c.getImageData(0, 0, _0x2e66e3.width, _0x2e66e3.height);
          const _0x215a09 = _0x3c84f7.data;
          const _0x16fe0e = _0x2e66e3.toDataURL("image/jpeg");
          URL.revokeObjectURL(_0x4247f6.src);
          _0x5c9b18(_0x16fe0e);
        };
        _0x4247f6.onerror = () => {
          _0x5431ba(new Error("Failed to load image."));
        };
      });
    }
  } catch (_0x27c578) {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAU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AACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  }
}
async function getImageAsBase64(_0x24df10, _0x499b77 = 5, _0x100aee = 100) {
  const _0x4f2f02 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAU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AACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  return new Promise((_0x12a7e9, _0x4bf647) => {
    {
      const _0x4ed247 = _0x3e2d08 => {
        {
          const _0x978faf = new Image();
          _0x978faf.onload = () => {
            const _0x2a8cd1 = document.createElement("canvas");
            const _0x39ecc3 = _0x2a8cd1.getContext("2d");
            _0x2a8cd1.width = _0x978faf.width;
            _0x2a8cd1.height = _0x978faf.height;
            _0x39ecc3.drawImage(_0x978faf, 0, 0);
            const _0x2ba8b1 = _0x2a8cd1.toDataURL("image/jpeg");
            _0x12a7e9(_0x2ba8b1);
          };
          _0x978faf.onerror = () => {
            _0x3e2d08 > 0 ? setTimeout(() => _0x4ed247(_0x3e2d08 - 1), _0x100aee) : (console.log("图片加载失败，使用默认图片"), _0x12a7e9(_0x4f2f02));
          };
          _0x978faf.src = _0x24df10;
        }
      };
      _0x4ed247(_0x499b77);
    }
  });
}
function imageToBase64(_0x583255) {
  return new Promise((_0x28a6ea, _0x32a3e6) => {
    fetch(_0x583255).then(_0x3c0181 => _0x3c0181.blob()).then(_0x3db923 => {
      {
        const _0x4e451e = new FileReader();
        _0x4e451e.onloadend = function () {
          _0x28a6ea(_0x4e451e.result);
        };
        _0x4e451e.onerror = function () {
          _0x32a3e6(new Error("Failed to read the image file"));
        };
        _0x4e451e.readAsDataURL(_0x3db923);
      }
    }).catch(_0x1ef024 => {
      {
        _0x32a3e6(_0x1ef024);
      }
    });
  });
}
function run(_0x574b9a, _0x4bf6cc, _0x19879c = 1) {
  chrome.storage._0x5e599f.get("codePhone", function (_0x5f35a4) {
    const _0x15390d = _0x5f35a4.codePhone;
    _0x15390d ? getMallId().then(_0x40c00c => {
      chrome.runtime._0x1354f4({
        type: "checkTime",
        password: _0x15390d,
        _0x5bde25: "打印",
        mallid: _0x40c00c,
        _0x5e776e: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x43562e => {
        _0x43562e.data.type == "fcmsl" ? function (_0x47d053, _0x1feb42, _0x19ea46) {
          let _0x4181b1 = jspdf._0x19ed09;
          const _0xb8ea0c = "data:image/image/png;base64,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4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMs1n8AkXhJW8bmPEwAAAAASUVORK5CYII=";
          const _0xe27647 = document.createElement("div");
          _0xe27647.id = "modal";
          _0xe27647.style.display = "none";
          _0xe27647.style.position = "fixed";
          _0xe27647.style.zIndex = "1000";
          _0xe27647.style.left = "50%";
          _0xe27647.style.top = "40%";
          _0xe27647.style.transform = "translate(-50%, -50%)";
          _0xe27647.style.backgroundColor = "#fff";
          _0xe27647.style.padding = "20px";
          _0xe27647.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
          _0xe27647.style.borderRadius = "10px";
          _0xe27647.style.width = "800px";
          _0xe27647.style.maxWidth = "90%";
          document.body.appendChild(_0xe27647);
          const _0x5d5ca7 = document.createElement("h2");
          _0x5d5ca7.id = "dayingululuset";
          _0x5d5ca7.textContent = "咕噜噜打印设置（模板内支持选择西班牙标签）";
          _0x5d5ca7.style.marginBottom = "20px";
          _0xe27647.appendChild(_0x5d5ca7);
          const _0x34d194 = document.createElement("input");
          _0x34d194.type = "text";
          _0x34d194.placeholder = "搜索标签...";
          _0x34d194.style.padding = "10px";
          _0x34d194.style.width = "95%";
          _0x34d194.style.marginBottom = "20px";
          _0x34d194.style.borderColor = "black";
          _0x34d194.style.borderRadius = "5px";
          _0x34d194.autocomplete = "on";
          _0x34d194.name = "searchQuery";
          _0x34d194.id = "searchInput";
          const _0x49da14 = document.createElement("form");
          _0x49da14.appendChild(_0x34d194);
          _0xe27647.appendChild(_0x49da14);
          const _0x37863c = document.createElement("div");
          _0x37863c.style.display = "flex";
          _0x37863c.style.gap = "10px";
          _0x37863c.style.marginBottom = "20px";
          _0xe27647.insertBefore(_0x37863c, _0x49da14);
          const _0x396ede = ["70*20", "70*40", "70*60", "70*70", "100*100", "独立标签", "条码融合"];
          _0x396ede.forEach(_0x4ecd5b => {
            {
              const _0x3da1c7 = document.createElement("button");
              _0x3da1c7.textContent = _0x4ecd5b;
              _0x3da1c7.style.padding = "5px 10px";
              _0x3da1c7.style.border = "1px solid #ccc";
              _0x3da1c7.style.borderRadius = "5px";
              _0x3da1c7.style.cursor = "pointer";
              _0x3da1c7.style.backgroundColor = "#f9f9f9";
              _0x3da1c7.style.color = "#333";
              _0x3da1c7.addEventListener("click", () => {
                {
                  const _0x11ad92 = _0x2f928a.filter(_0x7eeb83 => _0x7eeb83.text.includes(_0x4ecd5b));
                  _0x19f482(_0x11ad92);
                }
              });
              _0x37863c.appendChild(_0x3da1c7);
            }
          });
          const _0x4e8eae = document.createElement("div");
          _0x4e8eae.style.display = "grid";
          _0x4e8eae.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
          _0x4e8eae.style.gap = "15px";
          _0x4e8eae.style.overflowY = "auto";
          _0x4e8eae.style.maxHeight = "400px";
          _0xe27647.appendChild(_0x4e8eae);
          const _0x15aee8 = document.createElement("div");
          _0x15aee8.className = "tooltipprint";
          document.body.appendChild(_0x15aee8);
          const _0x268b2f = document.createElement("style");
          _0x268b2f.textContent = "\n                                .tooltipprint {\n                                    position: absolute;\n                                    background-color: #fff;\n                                    border: 1px solid #ccc;\n                                    border-radius: 4px;\n                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n                                    padding: 10px;\n                                    display: none;\n                                    z-index: 1000;\n                                    max-width: 200px;\n                                    opacity: 0;\n                                    transition: opacity 0.3s ease-in-out;\n                                }\n\n                                .tooltipprint.show {\n                                    opacity: 1;\n                                }\n\n                                .tooltipprint img {\n                                    max-width: 100%;\n                                    height: auto;\n                                }\n\n                                label {\n                                    display: flex;\n                                    align-items: center;\n                                    font-size: 15px;\n                                    color: #333;\n                                    cursor: pointer;\n                                    font-family: sans-serif;\n                                    margin-left: 10px;\n                                }\n\n                                input[type=\"radio\"] {\n                                    accent-color: #4CAF50;\n                                    transform: scale(1.2);\n                                    margin-right: 10px;\n                                }\n\n                                /* 自定义滚动条 */\n                                #barcode-option-container::-webkit-scrollbar {\n                                    width: 8px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-thumb {\n                                    background-color: rgba(0, 0, 0, 0.3);\n                                    border-radius: 10px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-track {\n                                    background-color: #f1f1f1;\n                                }\n\n                                \n\n                                #close-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #f44336;\n                                }\n\n                                #print-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #4CAF50;\n                                }\n\n                                #print-btn #close-btn:hover {\n                                    opacity: 0.8;\n                                }\n                                ";
          document.head.appendChild(_0x268b2f);
          const _0x5d259b = [{
            id: "myjtm72",
            text: "独立条码 70*20",
            _0x15683c: "web/printImg/tm.png"
          }, {
            id: "myod72",
            text: "独立标签 欧代 70*20",
            _0x15683c: "web/printImg/od72.png"
          }, {
            id: "mygys72",
            text: "独立标签 制造商信息 70*20",
            _0x15683c: "web/printImg/gys72.png"
          }, {
            id: "myodp74",
            text: "独立标签 欧代+防窒息+环保（环保标长度小于56mm） 70*40",
            _0x15683c: "web/printImg/od76.png"
          }, {
            id: "myodps74",
            text: "独立标签 欧代+防窒息+食品+环保（环保标长度小于56mm） 70*40",
            _0x15683c: "web/printImg/spb76.png"
          }, {
            id: "myHbzx",
            text: "条码融合 防窒息+环保（环保标长度大于56mm） 70*40",
            _0x15683c: "web/printImg/hbzx.png"
          }, {
            id: "myod74",
            text: "条码融合 欧代 70*40",
            _0x15683c: "web/printImg/myod74.png"
          }, {
            id: "mySpb",
            text: "条码融合 欧代+食品+防窒息+环保（环保标长度小于56mm） 70*60",
            _0x15683c: "web/printImg/spb76.png"
          }, {
            id: "myodp76",
            text: "条码融合 欧代+防窒息+环保 （环保标长度小于56mm）70*60",
            _0x15683c: "web/printImg/od76.png"
          }, {
            id: "myodp",
            text: "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 70*70",
            _0x15683c: "web/printImg/odp.png"
          }, {
            id: "myodps77",
            text: "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 70*70",
            _0x15683c: "web/printImg/odps77.png"
          }, {
            id: "myodfz77",
            text: "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 70*70",
            _0x15683c: "web/printImg/odfz77.png"
          }, {
            id: "myodp100",
            text: "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 100*100",
            _0x15683c: "web/printImg/odp.png"
          }, {
            id: "myodps100",
            text: "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 100*100",
            _0x15683c: "web/printImg/odps77.png"
          }, {
            id: "myodfz100",
            text: "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 100*100",
            _0x15683c: "web/printImg/odfz77.png"
          }, {
            id: "myodfzcz100",
            text: "条码融合 欧代+防窒息+材质+纺织+环保（环保标长度小于56mm） 100*100",
            _0x15683c: "web/printImg/odfzcz100.png"
          }];
          const _0x2f928a = [..._0x5d259b];
          function _0x5bcf02(_0x2b4c5d) {
            const _0x3de813 = document.createElement("input");
            _0x3de813.type = "radio";
            _0x3de813.name = "radio-option";
            _0x3de813.id = _0x2b4c5d.id;
            _0x3de813.value = _0x2b4c5d.text;
            _0x3de813.setAttribute("data-custom-value", _0x2b4c5d._0x15683c);
            const _0x2a9313 = document.createElement("label");
            _0x2a9313.htmlFor = _0x2b4c5d.id;
            _0x2a9313.style.textAlign = "center";
            _0x2a9313.style.display = "flex";
            _0x2a9313.style.flexDirection = "column";
            _0x2a9313.style.alignItems = "center";
            _0x2a9313.style.justifyContent = "center";
            _0x2a9313.style.width = "150px";
            _0x2a9313.style.padding = "10px";
            _0x2a9313.style.boxSizing = "border-box";
            const _0xc21276 = document.createElement("img");
            _0xc21276.src = chrome.runtime._0x55f5ad(_0x2b4c5d._0x15683c);
            _0xc21276.alt = _0x2b4c5d.text;
            _0xc21276.style.width = "180px";
            _0xc21276.style.height = "180px";
            _0xc21276.style.objectFit = "contain";
            const _0x329499 = document.createElement("div");
            _0x329499.textContent = _0x2b4c5d.text;
            _0x329499.style.textAlign = "center";
            _0x329499.style.whiteSpace = "normal";
            _0x329499.style.wordBreak = "break-word";
            _0x329499.style.width = "100%";
            _0x2a9313.appendChild(_0xc21276);
            _0x2a9313.appendChild(_0x329499);
            const _0x43130c = document.createElement("div");
            _0x43130c.style.display = "flex";
            _0x43130c.style.flexDirection = "column";
            _0x43130c.style.alignItems = "center";
            _0x43130c.style.justifyContent = "center";
            _0x43130c.style.border = "1px solid #ccc";
            _0x43130c.style.borderRadius = "5px";
            _0x43130c.style.padding = "10px";
            _0x43130c.style.backgroundColor = "#f9f9f9";
            _0x43130c.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            function _0x21285a(_0x36a5a6, _0x7a6eb4) {
              _0x15aee8.innerHTML = "<img src=\"" + chrome.runtime._0x55f5ad(_0x7a6eb4._0x15683c) + "\" alt=\"" + _0x7a6eb4.text + "\" style=\"max-width: 100%; height: auto;\">";
              _0x15aee8.style.display = "block";
              _0x15aee8.classList.add("show");
              const windowWidth = window.innerWidth;
              const windowHeight = window.innerHeight;
              const _0x4597e0 = _0x15aee8.offsetWidth;
              const _0x242e5c = _0x15aee8.offsetHeight;
              let _0x38395e = _0x36a5a6.pageX + 10;
              let _0x20d6cd = _0x36a5a6.pageY + 10;
              _0x38395e + _0x4597e0 > windowWidth && (_0x38395e = _0x36a5a6.pageX - _0x4597e0 - 10);
              _0x20d6cd + _0x242e5c > windowHeight && (_0x20d6cd = _0x36a5a6.pageY - _0x242e5c - 10);
              _0x15aee8.style.left = _0x38395e + "px";
              _0x15aee8.style.top = _0x20d6cd + "px";
            }
            function _0x2607b3() {
              _0x15aee8.style.display = "none";
              _0x15aee8.classList.remove("show");
            }
            _0x2a9313.addEventListener("mouseover", _0x28e483 => _0x21285a(_0x28e483, _0x2b4c5d));
            _0x2a9313.addEventListener("mouseout", _0x2607b3);
            _0x43130c.appendChild(_0x3de813);
            _0x43130c.appendChild(_0x2a9313);
            _0x4e8eae.appendChild(_0x43130c);
          }
          function _0x19f482(_0x43f935) {
            {
              _0x537bd4();
              _0x43f935.forEach(_0x5bcf02);
            }
          }
          function _0x537bd4() {
            while (_0x4e8eae.firstChild) {
              _0x4e8eae.removeChild(_0x4e8eae.firstChild);
            }
          }
          _0x34d194.addEventListener("input", function () {
            const _0x189485 = _0x34d194.value.toLowerCase();
            const _0x1ff14f = _0x2f928a.filter(_0x323779 => _0x323779.text.toLowerCase().includes(_0x189485));
            _0x19f482(_0x1ff14f);
          });
          _0x19f482(_0x2f928a);
          const _0x5a0921 = document.createElement("div");
          _0x5a0921.style.display = "flex";
          _0x5a0921.style.justifyContent = "space-between";
          _0x5a0921.style.marginTop = "20px";
          _0xe27647.appendChild(_0x5a0921);
          const _0x4b1bbf = document.createElement("button");
          _0x4b1bbf.id = "print-btn";
          _0x4b1bbf.textContent = "打印";
          _0x5a0921.appendChild(_0x4b1bbf);
          const _0x1480cf = document.createElement("button");
          _0x1480cf.id = "close-btn";
          _0x1480cf.textContent = "关闭";
          _0x5a0921.appendChild(_0x1480cf);
          _0xe27647.style.display = "block";
          _0x1480cf.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
            _0x537bd4();
            _0xe27647.remove();
          });
          _0x4b1bbf.addEventListener("mouseover", () => {
            var _0x3dad09 = document.querySelectorAll(".tooltip");
            if (_0x3dad09.length > 0) {
              for (var _0x444ca6 = 0; _0x444ca6 < _0x3dad09.length; _0x444ca6++) {
                {
                  _0x3dad09[_0x444ca6].style.display = "none";
                }
              }
            }
          });
          _0x4b1bbf.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelectorAll("[class=\"printTooltip show\"]").forEach(_0x38f038 => _0x38f038.remove());
            chrome.runtime._0x1354f4({
              type: "usageFunctionRecord",
              phone: _0x15390d,
              name: "咕噜噜打印"
            });
            var _0x34abce = document.querySelector("input[name=\"radio-option\"]:checked");
            chrome.storage._0x5e599f.set({
              printCodeClickMod: _0x34abce.id
            });
            var _0x215b32 = "";
            _0x537bd4();
            _0xe27647.style.display = "none";
            let _0x13123a;
            const _0x46672b = 66.2;
            const _0x362c35 = 16.2;
            let _0x5356e5 = (70 - _0x46672b) / 2;
            let _0x451634 = (20 - _0x362c35 - 2) / 2;
            async function _0x2e7a16(_0x3860f6, _0x38415b, _0xb2bd52) {
              if (_0x43562e.data._0x41bda4 == "正常") {
                if (_0x43562e.data.on == "cc") {
                  {
                    try {
                      showPrintBox();
                      try {
                        chrome.storage._0x5e599f.get("codePhone", function (_0x316100) {
                          {
                            const _0x569145 = _0x316100.codePhone;
                            _0x569145 && chrome.runtime._0x1354f4({
                              type: "getPrintInfo",
                              password: _0x569145,
                              _0x5bde25: "2",
                              _0x2fe2e1: printCodeInfoDict
                            }, _0x4fbb88 => {});
                          }
                        });
                      } catch (_0x319a9e) {}
                      let _0x579b7f;
                      let _0x626c95;
                      if (_0xb2bd52.length == 1) {
                        _0x579b7f = await getImageAsBase64(chrome.runtime._0x55f5ad(_0xb2bd52[0]));
                      } else {
                        _0xb2bd52.length == 2 && (_0x579b7f = await getImageAsBase64(chrome.runtime._0x55f5ad(_0xb2bd52[0])), _0x626c95 = await getImageAsBase64(chrome.runtime._0x55f5ad(_0xb2bd52[1])));
                      }
                      let _0x4bd138 = null;
                      if (_0x215b32 == "myHbzx" || _0x215b32 == "myodp74" || _0x215b32 == "myod74" || _0x215b32 == "myodps74") {
                        _0x13123a = new _0x4181b1({
                          orientation: "landscape",
                          unit: "mm",
                          format: [70, 40]
                        });
                      } else {
                        if (_0x215b32 == "mySpb" || _0x215b32 == "myodp76") {
                          _0x13123a = new _0x4181b1({
                            orientation: "landscape",
                            unit: "mm",
                            format: [70, 60]
                          });
                        } else {
                          if (_0x215b32 == "myodp" || _0x215b32 == "myodps77" || _0x215b32 == "myodfz77") {
                            _0x13123a = new _0x4181b1({
                              orientation: "landscape",
                              unit: "mm",
                              format: [70, 70]
                            });
                          } else {
                            _0x215b32 == "myodp100" || _0x215b32 == "myodps100" || _0x215b32 == "myodfz100" || _0x215b32 == "myodfzcz100" ? _0x13123a = new _0x4181b1({
                              orientation: "landscape",
                              unit: "mm",
                              format: [100, 100]
                            }) : _0x13123a = new _0x4181b1({
                              orientation: "landscape",
                              unit: "mm",
                              format: [70, 20]
                            });
                          }
                        }
                      }
                      _0x13123a._0x3739f3("notosans", "bold");
                      function _0x44f045(_0x55264f, _0x1a49c9, _0x447259, _0x1a0456, _0x5e0489, _0x5a81bd, _0x276e15 = "默认") {
                        function _0x5e0378(_0x40de3d, _0x35d438) {
                          {
                            _0x5a81bd._0x265730(_0x40de3d);
                            const _0x14ea46 = _0x5a81bd._0x299905("A");
                            const _0x47aac1 = Math.floor(_0x35d438 / _0x14ea46);
                            return _0x47aac1;
                          }
                        }
                        function _0x4a0177(_0xad36a0, _0x4e08bb) {
                          {
                            if (_0x276e15 == "属性") {
                              {
                                var _0x3cbcc4 = _0xad36a0.split(/(  )/);
                              }
                            } else {
                              {
                                var _0x3cbcc4 = _0xad36a0.split(/(\s+|,|\.)/);
                              }
                            }
                            const _0x15fed3 = [];
                            let _0x5c9735 = "";
                            _0x3cbcc4.forEach(_0x30b3d8 => {
                              let _0x55c3a2 = _0x5c9735 + _0x30b3d8;
                              const _0x4129c0 = _0x5a81bd._0x299905(_0x55c3a2);
                              if (_0x4129c0 > _0x4e08bb && _0x5c9735) {
                                {
                                  _0x15fed3.push(_0x5c9735);
                                  _0x5c9735 = _0x30b3d8;
                                }
                              } else {
                                _0x5c9735 = _0x55c3a2;
                              }
                            });
                            _0x5c9735.length > 0 && _0x15fed3.push(_0x5c9735);
                            return _0x15fed3;
                          }
                        }
                        let _0x18f9af = _0x5e0489;
                        let _0x45fc27 = [];
                        while (_0x18f9af > 1) {
                          const _0x13fb4d = _0x5e0378(_0x18f9af, _0x1a49c9);
                          _0x45fc27 = _0x4a0177(_0x55264f, _0x1a49c9);
                          if (_0x45fc27.length === 1 && _0x5a81bd._0x299905(_0x45fc27[0]) > _0x1a49c9) {
                            _0x18f9af -= 0.3;
                            continue;
                          }
                          const _0x47cec4 = _0x45fc27.slice(1).join("");
                          const _0x55af03 = _0x4a0177(_0x47cec4, _0x447259);
                          _0x45fc27 = [_0x45fc27[0]].concat(_0x55af03);
                          if (_0x45fc27.length <= _0x1a0456) {
                            {
                              break;
                            }
                          } else {
                            _0x18f9af -= 0.3;
                          }
                        }
                        _0x45fc27.length > _0x1a0456 && (_0x45fc27 = _0x45fc27.slice(0, _0x1a0456), _0x45fc27[_0x1a0456 - 1] += "...");
                        return _0x45fc27.map(_0x4219ff => ({
                          text: _0x4219ff,
                          fontSize: _0x18f9af
                        }));
                      }
                      for (let _0x28d8a2 = 0; _0x28d8a2 < _0x1feb42.length; _0x28d8a2++) {
                        {
                          let _0x2ebe32 = _0x28d8a2 === _0x1feb42.length - 1;
                          let _0x2b3923 = findElementByColor(_0x3860f6, _0x1feb42[_0x28d8a2][0]);
                          if (_0x2b3923.length == 0) {
                            _0x4c1567();
                            break;
                          }
                          var _0x3436fc = _0x2b3923[0];
                          var _0xdb57ba = _0x2b3923[1];
                          var _0x4dcf03 = _0x2b3923[2].slice(0, 30);
                          var _0x2ffcad = _0x2b3923[3];
                          var _0x271f96 = _0x2b3923[5];
                          var _0x497e59 = parseInt(_0x1feb42[_0x28d8a2][1]);
                          var _0x43f0a7 = _0x2b3923[8];
                          if (_0x38415b != "") {
                            {
                              var _0x2fd521 = _0x38415b;
                            }
                          } else {
                            var _0x2fd521 = _0x2b3923[6];
                          }
                          let _0x421b8d = await dowlonMmageAsBase64(_0x271f96);
                          if (_0x215b32 == "myHbzx" || _0x215b32 == "myodp74" || _0x215b32 == "myod74" || _0x215b32 == "myodps74") {
                            _0x13123a._0x1ad268(_0xb8ea0c, "png", 1, 2, 18, 35);
                            _0x13123a._0x1ad268(_0x421b8d, "png", 16, 6, 26, 26);
                            _0x13123a._0x265730(6);
                            _0x13123a.text("此为产品信息页 无需粘贴!!!", 43, 5);
                            _0x13123a._0x265730(9);
                            _0x13123a.text(_0x43f0a7, 43, 18);
                            _0x13123a._0x265730(10);
                            _0x13123a.text("数量: " + _0x497e59, 43, 23);
                            _0x13123a._0x265730(7);
                            _0x13123a.text("咕噜噜打印", 53, 36);
                            _0x13123a._0x597e51([70, 40]);
                          } else {
                            if (_0x215b32 == "mySpb" || _0x215b32 == "myodp76") {
                              {
                                _0x13123a._0x1ad268(_0xb8ea0c, "png", 1, 10, 12, 45);
                                _0x13123a._0x1ad268(_0x421b8d, "png", 12, 15, 30, 30);
                                _0x13123a._0x265730(7);
                                _0x13123a.text("此为产品信息页 无需粘贴!!!", 35, 5);
                                _0x13123a._0x265730(9);
                                _0x13123a.text(_0x43f0a7, 43, 28);
                                _0x13123a._0x265730(10);
                                _0x13123a.text("数量: " + _0x497e59, 43, 38);
                                _0x13123a._0x265730(7);
                                _0x13123a.text("咕噜噜打印", 53, 46);
                                _0x13123a._0x597e51([70, 60]);
                              }
                            } else {
                              if (_0x215b32 == "myodp" || _0x215b32 == "myodps77" || _0x215b32 == "myodfz77") {
                                _0x13123a._0x1ad268(_0xb8ea0c, "png", 1, 10, 12, 45);
                                _0x13123a._0x1ad268(_0x421b8d, "png", 12, 15, 30, 30);
                                _0x13123a._0x265730(7);
                                _0x13123a.text("此为产品信息页 无需粘贴!!!", 35, 5);
                                _0x13123a._0x265730(9);
                                _0x13123a.text(_0x43f0a7, 43, 28);
                                _0x13123a._0x265730(10);
                                _0x13123a.text("数量: " + _0x497e59, 43, 38);
                                _0x13123a._0x265730(7);
                                _0x13123a.text("咕噜噜打印", 53, 46);
                                _0x13123a._0x597e51([70, 70]);
                              } else {
                                if (_0x215b32 == "myodp100" || _0x215b32 == "myodps100" || _0x215b32 == "myodfz100" || _0x215b32 == "myodfzcz100") {
                                  _0x13123a._0x1ad268(_0xb8ea0c, "png", 1, 10, 18, 35);
                                  _0x13123a._0x1ad268(_0x421b8d, "png", 16, 12, 26, 26);
                                  _0x13123a._0x265730(10);
                                  _0x13123a.text("此为产品信息页 无需粘贴!!!", 43, 5);
                                  _0x13123a._0x265730(13);
                                  _0x13123a.text(_0x43f0a7, 43, 28);
                                  _0x13123a._0x265730(10);
                                  _0x13123a.text("数量: " + _0x497e59, 43, 38);
                                  _0x13123a._0x265730(7);
                                  _0x13123a.text("咕噜噜打印", 53, 46);
                                  _0x13123a._0x597e51([100, 100]);
                                } else {
                                  _0x13123a._0x1ad268(_0xb8ea0c, "png", 4, 2, 10, 15);
                                  _0x13123a._0x1ad268(_0x421b8d, "png", 15, 2, 18, 16);
                                  _0x13123a._0x265730(6);
                                  _0x13123a.text("此为产品信息页 无需粘贴!!!", 34, 3);
                                  _0x13123a._0x265730(11);
                                  _0x13123a.text(_0x43f0a7, 34, 8);
                                  _0x13123a._0x265730(11);
                                  _0x13123a.text("数量: " + _0x497e59, 35, 12.5);
                                  _0x13123a._0x265730(7);
                                  _0x13123a.text("咕噜噜打印", 53, 18);
                                  _0x13123a._0x597e51([70, 20]);
                                }
                              }
                            }
                          }
                          for (let _0x1cfbb4 = 0; _0x1cfbb4 < _0x497e59; _0x1cfbb4++) {
                            if (_0x1cfbb4 > 0) {
                              {
                                if (_0x215b32 == "myHbzx" || _0x215b32 == "myodp74" || _0x215b32 == "myod74" || _0x215b32 == "myodps74") {
                                  {
                                    _0x13123a._0x597e51([70, 40]);
                                  }
                                } else {
                                  if (_0x215b32 == "mySpb" || _0x215b32 == "myodp76") {
                                    _0x13123a._0x597e51([70, 60]);
                                  } else {
                                    if (_0x215b32 == "myodp" || _0x215b32 == "myodps77" || _0x215b32 == "myodfz77") {
                                      _0x13123a._0x597e51([70, 70]);
                                    } else {
                                      if (_0x215b32 == "myodp100" || _0x215b32 == "myodps100" || _0x215b32 == "myodfz100" || _0x215b32 == "myodfzcz100") {
                                        {
                                          _0x13123a._0x597e51([100, 100]);
                                        }
                                      } else {
                                        _0x13123a._0x597e51([70, 20]);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (_0x215b32 == "myHbzx") {
                              _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 + 16.5, _0x46672b + 3, _0x362c35 + 6);
                            } else {
                              if (_0x215b32 == "mySpb" || _0x215b32 == "myodp76") {
                                _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 + 15.1, _0x46672b + 3, _0x362c35 + 28.5);
                                var _0x31ccea = _0x2fd521;
                                var _0x23c1e3 = zzsInfo[0];
                                var _0x3587ee = zzsInfo[1];
                                var _0x3eccbb = zzsInfo[2];
                                var _0x59f7fb = odInfo._0x241a74;
                                var _0x54d2e4 = odInfo._0x1fa780;
                                var _0x581e02 = odInfo._0x2bb1a7;
                                _0x13123a._0x265730(6);
                                const _0x23838a = _0x44f045(_0x31ccea, 12, 16, 1, 5.5, _0x13123a);
                                let _0x19c630 = 30.4;
                                _0x23838a.forEach(_0x543e2e => {
                                  {
                                    if (_0x543e2e.text === "") {
                                      return;
                                    }
                                    _0x13123a._0x265730(_0x543e2e.fontSize);
                                    _0x13123a.text(_0x543e2e.text, 54.2, _0x19c630 + parseInt(_0x543e2e.fontSize) / 5 - 1.9);
                                    _0x19c630 += 1.4;
                                  }
                                });
                                _0x13123a._0x265730(6);
                                const _0x104a59 = _0x44f045(_0x23c1e3, 50, 50, 1, 5.5, _0x13123a);
                                let _0x502911 = 21.1;
                                _0x104a59.forEach(_0x4da05e => {
                                  _0x13123a._0x265730(_0x4da05e.fontSize);
                                  _0x13123a.text(_0x4da05e.text, 17.5, _0x502911 + parseInt(_0x4da05e.fontSize) / 5 - 1.9);
                                  _0x502911 += 1.4;
                                });
                                _0x13123a._0x265730(6);
                                const _0x2dc4f5 = _0x44f045(_0x3587ee, 49, 49, 3, 5, _0x13123a);
                                let _0x4d4890 = 24;
                                _0x2dc4f5.forEach(_0x209bd9 => {
                                  _0x13123a._0x265730(_0x209bd9.fontSize);
                                  _0x13123a.text(_0x209bd9.text, 17.5, _0x4d4890 + parseInt(_0x209bd9.fontSize) / 5 - 2.1);
                                  _0x4d4890 += 1.95;
                                });
                                _0x13123a._0x265730(5);
                                const _0x5b7109 = _0x44f045(_0x3eccbb, 36, 35, 1, 4.5, _0x13123a);
                                let _0x1d8429 = 30.4;
                                _0x5b7109.forEach(_0x559e2a => {
                                  {
                                    _0x13123a._0x265730(_0x559e2a.fontSize);
                                    _0x13123a.text(_0x559e2a.text, 17.5, _0x1d8429 + parseInt(_0x559e2a.fontSize) / 5 - 1.9);
                                    _0x1d8429 += 1.4;
                                  }
                                });
                                _0x13123a._0x265730(5);
                                const _0xec4018 = _0x44f045(_0x59f7fb, 45, 40, 1, 5, _0x13123a);
                                let _0x2efb5e = 33.9;
                                _0xec4018.forEach(_0x26c8c7 => {
                                  {
                                    _0x13123a._0x265730(_0x26c8c7.fontSize);
                                    _0x13123a.text(_0x26c8c7.text, 26.5, _0x2efb5e + parseInt(_0x26c8c7.fontSize) / 5 - 1.9);
                                    _0x2efb5e += 1.4;
                                  }
                                });
                                _0x13123a._0x265730(6);
                                const _0x335a7b = _0x44f045(_0x54d2e4, 41.3, 41.3, 3, 4.8, _0x13123a);
                                let _0x377af1 = 37.5;
                                _0x335a7b.forEach(_0x29d96c => {
                                  _0x13123a._0x265730(_0x29d96c.fontSize);
                                  _0x13123a.text(_0x29d96c.text, 26.5, _0x377af1 + parseInt(_0x29d96c.fontSize) / 5 - 2.15);
                                  _0x377af1 += 1.9;
                                });
                                _0x13123a._0x265730(5);
                                const _0x5019a8 = _0x44f045(_0x581e02, 45, 40, 1, 5, _0x13123a);
                                let _0x187666 = 43.1;
                                _0x5019a8.forEach(_0x10b3f8 => {
                                  _0x13123a._0x265730(_0x10b3f8.fontSize);
                                  _0x13123a.text(_0x10b3f8.text, 26.5, _0x187666 + parseInt(_0x10b3f8.fontSize) / 5 - 1.9);
                                  _0x187666 += 1.4;
                                });
                              } else {
                                if (_0x215b32 == "myodp" || _0x215b32 == "myodps77") {
                                  {
                                    _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 + 14.5, _0x46672b + 2.5, _0x362c35 + 39);
                                    var _0x31ccea = _0x2fd521;
                                    var _0x23c1e3 = zzsInfo[0];
                                    var _0x3587ee = zzsInfo[1];
                                    var _0x3eccbb = zzsInfo[2];
                                    var _0x59f7fb = odInfo._0x241a74;
                                    var _0x54d2e4 = odInfo._0x1fa780;
                                    var _0x581e02 = odInfo._0x2bb1a7;
                                    _0x13123a._0x265730(6);
                                    const _0xa5fd2f = _0x44f045(_0x31ccea, 12, 16, 1, 6, _0x13123a);
                                    let _0x2afb43 = 20.5;
                                    _0xa5fd2f.forEach(_0x3b34f2 => {
                                      {
                                        if (_0x3b34f2.text === "") {
                                          return;
                                        }
                                        _0x13123a._0x265730(_0x3b34f2.fontSize);
                                        _0x13123a.text(_0x3b34f2.text, 33, _0x2afb43 + parseInt(_0x3b34f2.fontSize) / 5 - 1.9);
                                        _0x2afb43 += 1.4;
                                      }
                                    });
                                    _0x13123a._0x265730(6);
                                    const _0x10f714 = _0x44f045(_0x23c1e3, 51, 51, 1, 5, _0x13123a);
                                    let _0x3356f0 = 23.8;
                                    _0x10f714.forEach(_0xabaf9d => {
                                      _0x13123a._0x265730(_0xabaf9d.fontSize);
                                      _0x13123a.text(_0xabaf9d.text, 16.5, _0x3356f0 + parseInt(_0xabaf9d.fontSize) / 5 - 1.9);
                                      _0x3356f0 += 1.4;
                                    });
                                    _0x13123a._0x265730(6);
                                    const _0x3c454f = _0x44f045(_0x3587ee, 43, 43, 3, 4.8, _0x13123a);
                                    let _0x273462 = 26.9;
                                    _0x3c454f.forEach(_0x2dcdc5 => {
                                      _0x13123a._0x265730(_0x2dcdc5.fontSize);
                                      _0x13123a.text(_0x2dcdc5.text, 24.5, _0x273462 + parseInt(_0x2dcdc5.fontSize) / 5 - 2.2);
                                      _0x273462 += 1.88;
                                    });
                                    _0x13123a._0x265730(5);
                                    const _0x3d6b89 = _0x44f045(_0x3eccbb, 45, 40, 1, 5, _0x13123a);
                                    let _0x3211d5 = 32.8;
                                    _0x3d6b89.forEach(_0x7bd122 => {
                                      _0x13123a._0x265730(_0x7bd122.fontSize);
                                      _0x13123a.text(_0x7bd122.text, 23.5, _0x3211d5 + parseInt(_0x7bd122.fontSize) / 5 - 1.9);
                                      _0x3211d5 += 1.4;
                                    });
                                    _0x13123a._0x265730(5);
                                    const _0x5f3049 = _0x44f045(_0x59f7fb, 45, 40, 1, 5, _0x13123a);
                                    let _0x331b66 = 35.6;
                                    _0x5f3049.forEach(_0x16b62b => {
                                      _0x13123a._0x265730(_0x16b62b.fontSize);
                                      _0x13123a.text(_0x16b62b.text, 18.5, _0x331b66 + parseInt(_0x16b62b.fontSize) / 5 - 1.9);
                                      _0x331b66 += 1.4;
                                    });
                                    _0x13123a._0x265730(6);
                                    const _0x1a4243 = _0x44f045(_0x54d2e4, 43, 43, 3, 4.8, _0x13123a);
                                    let _0x2c128a = 38.1;
                                    _0x1a4243.forEach(_0x5a597e => {
                                      {
                                        _0x13123a._0x265730(_0x5a597e.fontSize);
                                        _0x13123a.text(_0x5a597e.text, 20.5, _0x2c128a + parseInt(_0x5a597e.fontSize) / 5 - 1.9);
                                        _0x2c128a += 1.7;
                                      }
                                    });
                                    _0x13123a._0x265730(5);
                                    const _0x345d37 = _0x44f045(_0x581e02, 45, 40, 1, 5, _0x13123a);
                                    let _0x2eb1af = 44;
                                    _0x345d37.forEach(_0x1d5b96 => {
                                      _0x13123a._0x265730(_0x1d5b96.fontSize);
                                      _0x13123a.text(_0x1d5b96.text, 18.5, _0x2eb1af + parseInt(_0x1d5b96.fontSize) / 5 - 1.9);
                                      _0x2eb1af += 1.4;
                                    });
                                  }
                                } else {
                                  if (_0x215b32 == "myodfz77") {
                                    {
                                      _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 + 12, _0x46672b + 2.5, _0x362c35 + 40.5);
                                      var _0x31ccea = _0x2fd521;
                                      var _0x23c1e3 = zzsInfo[0];
                                      var _0x3587ee = zzsInfo[1];
                                      var _0x3eccbb = zzsInfo[2];
                                      var _0x59f7fb = odInfo._0x241a74;
                                      var _0x54d2e4 = odInfo._0x1fa780;
                                      var _0x581e02 = odInfo._0x2bb1a7;
                                      _0x13123a._0x265730(6);
                                      const _0xf5aafd = _0x44f045(_0x31ccea, 12, 16, 1, 5.5, _0x13123a);
                                      let _0x4b753c = 27.8;
                                      _0xf5aafd.forEach(_0x2c7ead => {
                                        {
                                          if (_0x2c7ead.text === "") {
                                            return;
                                          }
                                          _0x13123a._0x265730(_0x2c7ead.fontSize);
                                          _0x13123a.text(_0x2c7ead.text, 54.2, _0x4b753c + parseInt(_0x2c7ead.fontSize) / 5 - 1.9);
                                          _0x4b753c += 1.4;
                                        }
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x432b7a = _0x44f045(_0x23c1e3, 50, 50, 1, 5.5, _0x13123a);
                                      let _0x1d355d = 18.2;
                                      _0x432b7a.forEach(_0x5e9884 => {
                                        {
                                          _0x13123a._0x265730(_0x5e9884.fontSize);
                                          _0x13123a.text(_0x5e9884.text, 17.5, _0x1d355d + parseInt(_0x5e9884.fontSize) / 5 - 1.9);
                                          _0x1d355d += 1.4;
                                        }
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x56f376 = _0x44f045(_0x3587ee, 49, 49, 3, 5, _0x13123a);
                                      let _0x305281 = 20.9;
                                      _0x56f376.forEach(_0x7bf6f7 => {
                                        _0x13123a._0x265730(_0x7bf6f7.fontSize);
                                        _0x13123a.text(_0x7bf6f7.text, 17.5, _0x305281 + parseInt(_0x7bf6f7.fontSize) / 5 - 2.1);
                                        _0x305281 += 2;
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x3faadc = _0x44f045(_0x3eccbb, 36, 35, 1, 4.5, _0x13123a);
                                      let _0x229f78 = 27.8;
                                      _0x3faadc.forEach(_0x3f7b61 => {
                                        _0x13123a._0x265730(_0x3f7b61.fontSize);
                                        _0x13123a.text(_0x3f7b61.text, 17.5, _0x229f78 + parseInt(_0x3f7b61.fontSize) / 5 - 1.9);
                                        _0x229f78 += 1.4;
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x517f58 = _0x44f045(_0x59f7fb, 45, 40, 1, 4.9, _0x13123a);
                                      let _0x58c8b2 = 31.3;
                                      _0x517f58.forEach(_0x4355a2 => {
                                        _0x13123a._0x265730(_0x4355a2.fontSize);
                                        _0x13123a.text(_0x4355a2.text, 26.5, _0x58c8b2 + parseInt(_0x4355a2.fontSize) / 5 - 1.9);
                                        _0x58c8b2 += 1.4;
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x51e916 = _0x44f045(_0x54d2e4, 42, 42, 3, 4.9, _0x13123a);
                                      let _0x75a213 = 34.3;
                                      _0x51e916.forEach(_0x5bfe82 => {
                                        _0x13123a._0x265730(_0x5bfe82.fontSize);
                                        _0x13123a.text(_0x5bfe82.text, 26.5, _0x75a213 + parseInt(_0x5bfe82.fontSize) / 5 - 2.1);
                                        _0x75a213 += 1.9;
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x2c128f = _0x44f045(_0x581e02, 45, 40, 1, 5, _0x13123a);
                                      let _0x14236e = 40.8;
                                      _0x2c128f.forEach(_0x40f607 => {
                                        _0x13123a._0x265730(_0x40f607.fontSize);
                                        _0x13123a.text(_0x40f607.text, 26.5, _0x14236e + parseInt(_0x40f607.fontSize) / 5 - 1.9);
                                        _0x14236e += 1.4;
                                      });
                                    }
                                  } else {
                                    if (_0x215b32 == "myodp74" || _0x215b32 == "myodps74") {
                                      _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 - 2, _0x46672b + 2.5, _0x362c35 + 25.5);
                                      var _0x31ccea = _0x2fd521;
                                      var _0x23c1e3 = zzsInfo[0];
                                      var _0x3587ee = zzsInfo[1];
                                      var _0x3eccbb = zzsInfo[2];
                                      var _0x59f7fb = odInfo._0x241a74;
                                      var _0x54d2e4 = odInfo._0x1fa780;
                                      var _0x581e02 = odInfo._0x2bb1a7;
                                      _0x13123a._0x265730(6);
                                      const _0x5360eb = _0x44f045(_0x31ccea, 12, 16, 1, 5, _0x13123a);
                                      let _0x3be854 = 12.5;
                                      _0x5360eb.forEach(_0x313610 => {
                                        if (_0x313610.text === "") {
                                          return;
                                        }
                                        _0x13123a._0x265730(_0x313610.fontSize);
                                        _0x13123a.text(_0x313610.text, 54.2, _0x3be854 + parseInt(_0x313610.fontSize) / 5 - 1.9);
                                        _0x3be854 += 1.4;
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x258f78 = _0x44f045(_0x23c1e3, 50, 50, 1, 5, _0x13123a);
                                      let _0xcc86bd = 3.5;
                                      _0x258f78.forEach(_0x3a57e1 => {
                                        _0x13123a._0x265730(_0x3a57e1.fontSize);
                                        _0x13123a.text(_0x3a57e1.text, 17.5, _0xcc86bd + parseInt(_0x3a57e1.fontSize) / 5 - 1.9);
                                        _0xcc86bd += 1.4;
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x296370 = _0x44f045(_0x3587ee, 49, 49, 3, 4.9, _0x13123a);
                                      let _0x3dd8b1 = 6.9;
                                      _0x296370.forEach(_0x6a255d => {
                                        _0x13123a._0x265730(_0x6a255d.fontSize);
                                        _0x13123a.text(_0x6a255d.text, 17.5, _0x3dd8b1 + parseInt(_0x6a255d.fontSize) / 5 - 2.15);
                                        _0x3dd8b1 += 1.65;
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x28f182 = _0x44f045(_0x3eccbb, 36, 35, 1, 4.5, _0x13123a);
                                      let _0x4e3abd = 12.5;
                                      _0x28f182.forEach(_0x383d93 => {
                                        _0x13123a._0x265730(_0x383d93.fontSize);
                                        _0x13123a.text(_0x383d93.text, 17.5, _0x4e3abd + parseInt(_0x383d93.fontSize) / 5 - 1.9);
                                        _0x4e3abd += 1.4;
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x2529e8 = _0x44f045(_0x59f7fb, 45, 40, 1, 5, _0x13123a);
                                      let _0x141ad2 = 15.5;
                                      _0x2529e8.forEach(_0x2a53ec => {
                                        _0x13123a._0x265730(_0x2a53ec.fontSize);
                                        _0x13123a.text(_0x2a53ec.text, 26.5, _0x141ad2 + parseInt(_0x2a53ec.fontSize) / 5 - 1.9);
                                        _0x141ad2 += 1.4;
                                      });
                                      _0x13123a._0x265730(6);
                                      const _0x2c0630 = _0x44f045(_0x54d2e4, 43, 43, 3, 4.8, _0x13123a);
                                      let _0x3eb587 = 19.3;
                                      _0x2c0630.forEach(_0x117109 => {
                                        {
                                          _0x13123a._0x265730(_0x117109.fontSize);
                                          _0x13123a.text(_0x117109.text, 26.5, _0x3eb587 + parseInt(_0x117109.fontSize) / 5 - 2.15);
                                          _0x3eb587 += 1.5;
                                        }
                                      });
                                      _0x13123a._0x265730(5);
                                      const _0x179ea0 = _0x44f045(_0x581e02, 43, 43, 1, 5, _0x13123a);
                                      let _0x1337ed = 24.5;
                                      _0x179ea0.forEach(_0x38914e => {
                                        _0x13123a._0x265730(_0x38914e.fontSize);
                                        _0x13123a.text(_0x38914e.text, 26.5, _0x1337ed + parseInt(_0x38914e.fontSize) / 5 - 1.9);
                                        _0x1337ed += 1.4;
                                      });
                                    } else {
                                      if (_0x215b32 == "myod74") {
                                        _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 + 12.1, _0x46672b + 2.5, _0x362c35 + 11.1);
                                        var _0x31ccea = _0x2fd521;
                                        var _0x23c1e3 = zzsInfo[0];
                                        var _0x3587ee = zzsInfo[1];
                                        var _0x3eccbb = zzsInfo[2];
                                        var _0x59f7fb = odInfo._0x241a74;
                                        var _0x54d2e4 = odInfo._0x1fa780;
                                        var _0x581e02 = odInfo._0x2bb1a7;
                                        _0x13123a._0x265730(6);
                                        const _0x18bf92 = _0x44f045(_0x31ccea, 12, 16, 1, 5, _0x13123a);
                                        let _0x180b9d = 27;
                                        _0x18bf92.forEach(_0x4766ce => {
                                          if (_0x4766ce.text === "") {
                                            return;
                                          }
                                          _0x13123a._0x265730(_0x4766ce.fontSize);
                                          _0x13123a.text(_0x4766ce.text, 54.2, _0x180b9d + parseInt(_0x4766ce.fontSize) / 5 - 1.9);
                                          _0x180b9d += 1.4;
                                        });
                                        _0x13123a._0x265730(6);
                                        const _0x1c8b27 = _0x44f045(_0x23c1e3, 48, 48, 1, 5, _0x13123a);
                                        let _0x479710 = 17.8;
                                        _0x1c8b27.forEach(_0x5c0fe0 => {
                                          _0x13123a._0x265730(_0x5c0fe0.fontSize);
                                          _0x13123a.text(_0x5c0fe0.text, 17.5, _0x479710 + parseInt(_0x5c0fe0.fontSize) / 5 - 1.9);
                                          _0x479710 += 1.4;
                                        });
                                        _0x13123a._0x265730(6);
                                        const _0x195f3c = _0x44f045(_0x3587ee, 47, 47, 3, 4.9, _0x13123a);
                                        let _0x1e3702 = 20.8;
                                        _0x195f3c.forEach(_0x33ed36 => {
                                          _0x13123a._0x265730(_0x33ed36.fontSize);
                                          _0x13123a.text(_0x33ed36.text, 17.5, _0x1e3702 + parseInt(_0x33ed36.fontSize) / 5 - 2.1);
                                          _0x1e3702 += 1.85;
                                        });
                                        _0x13123a._0x265730(5);
                                        const _0x23d3da = _0x44f045(_0x3eccbb, 36, 35, 1, 5, _0x13123a);
                                        let _0x1d20c1 = 26.7;
                                        _0x23d3da.forEach(_0xab852a => {
                                          _0x13123a._0x265730(_0xab852a.fontSize);
                                          _0x13123a.text(_0xab852a.text, 17.5, _0x1d20c1 + parseInt(_0xab852a.fontSize) / 5 - 1.9);
                                          _0x1d20c1 += 1.4;
                                        });
                                        _0x13123a._0x265730(5);
                                        const _0x84ebea = _0x44f045(_0x59f7fb, 45, 40, 1, 5, _0x13123a);
                                        let _0x4e284d = 30.3;
                                        _0x84ebea.forEach(_0x5b8092 => {
                                          _0x13123a._0x265730(_0x5b8092.fontSize);
                                          _0x13123a.text(_0x5b8092.text, 26.5, _0x4e284d + parseInt(_0x5b8092.fontSize) / 5 - 1.9);
                                          _0x4e284d += 1.4;
                                        });
                                        _0x13123a._0x265730(6);
                                        const _0xdd6748 = _0x44f045(_0x54d2e4, 43, 43, 3, 4.9, _0x13123a);
                                        let _0x1b8b34 = 33.5;
                                        _0xdd6748.forEach(_0x481f9a => {
                                          _0x13123a._0x265730(_0x481f9a.fontSize);
                                          _0x13123a.text(_0x481f9a.text, 26.5, _0x1b8b34 + parseInt(_0x481f9a.fontSize) / 5 - 2.15);
                                          _0x1b8b34 += 1.78;
                                        });
                                        _0x13123a._0x265730(5);
                                        const _0x45867d = _0x44f045(_0x581e02, 43, 43, 1, 5, _0x13123a);
                                        let _0x1eb072 = 39.4;
                                        _0x45867d.forEach(_0x30de0d => {
                                          _0x13123a._0x265730(_0x30de0d.fontSize);
                                          _0x13123a.text(_0x30de0d.text, 26.5, _0x1eb072 + parseInt(_0x30de0d.fontSize) / 5 - 1.9);
                                          _0x1eb072 += 1.4;
                                        });
                                      } else {
                                        if (_0x215b32 == "mygys72") {
                                          _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 - 1.8, _0x46672b + 2.5, _0x362c35 + 4.5);
                                          var _0x23c1e3 = zzsInfo[0];
                                          var _0x3587ee = zzsInfo[1];
                                          var _0x3eccbb = zzsInfo[2];
                                          _0x13123a._0x265730(6);
                                          const _0x4d443f = _0x44f045(_0x23c1e3, 48, 48, 1, 5, _0x13123a);
                                          let _0x27aebd = 4.8;
                                          _0x4d443f.forEach(_0x546863 => {
                                            _0x13123a._0x265730(_0x546863.fontSize);
                                            _0x13123a.text(_0x546863.text, 17.5, _0x27aebd + parseInt(_0x546863.fontSize) / 5 - 1.9);
                                            _0x27aebd += 1.4;
                                          });
                                          _0x13123a._0x265730(6);
                                          const _0x33bdfc = _0x44f045(_0x3587ee, 47, 47, 3, 5.5, _0x13123a);
                                          let _0x7f253f = 9.2;
                                          _0x33bdfc.forEach(_0x1c363b => {
                                            _0x13123a._0x265730(_0x1c363b.fontSize);
                                            _0x13123a.text(_0x1c363b.text, 17.5, _0x7f253f + parseInt(_0x1c363b.fontSize) / 5 - 2.1);
                                            _0x7f253f += 2;
                                          });
                                          _0x13123a._0x265730(5);
                                          const _0x52bde7 = _0x44f045(_0x3eccbb, 46, 45, 1, 5, _0x13123a);
                                          let _0x5549a6 = 17.5;
                                          _0x52bde7.forEach(_0x167d4e => {
                                            {
                                              _0x13123a._0x265730(_0x167d4e.fontSize);
                                              _0x13123a.text(_0x167d4e.text, 17.5, _0x5549a6 + parseInt(_0x167d4e.fontSize) / 5 - 1.9);
                                              _0x5549a6 += 1.4;
                                            }
                                          });
                                        } else {
                                          if (_0x215b32 == "myod72") {
                                            var _0x31ccea = _0x2fd521;
                                            var _0x59f7fb = odInfo._0x241a74;
                                            var _0x54d2e4 = odInfo._0x1fa780;
                                            var _0x581e02 = odInfo._0x2bb1a7;
                                            _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 1, _0x451634 - 0.5, _0x46672b + 2.5, _0x362c35 + 3);
                                            _0x13123a._0x265730(6);
                                            const _0x1234f3 = _0x44f045(_0x31ccea, 12, 16, 1, 5, _0x13123a);
                                            let _0x2cb691 = 4.5;
                                            _0x1234f3.forEach(_0x522106 => {
                                              {
                                                if (_0x522106.text === "") {
                                                  return;
                                                }
                                                _0x13123a._0x265730(_0x522106.fontSize);
                                                _0x13123a.text(_0x522106.text, 20.2, _0x2cb691 + parseInt(_0x522106.fontSize) / 5 - 1.9);
                                                _0x2cb691 += 1.4;
                                              }
                                            });
                                            _0x13123a._0x265730(5);
                                            const _0x4a6b9b = _0x44f045(_0x59f7fb, 45, 40, 1, 5, _0x13123a);
                                            let _0x44d60c = 7.8;
                                            _0x4a6b9b.forEach(_0x155d6e => {
                                              _0x13123a._0x265730(_0x155d6e.fontSize);
                                              _0x13123a.text(_0x155d6e.text, 26.5, _0x44d60c + parseInt(_0x155d6e.fontSize) / 5 - 1.9);
                                              _0x44d60c += 1.4;
                                            });
                                            _0x13123a._0x265730(6);
                                            const _0x1094ce = _0x44f045(_0x54d2e4, 45, 45, 3, 5, _0x13123a);
                                            let _0x579320 = 12;
                                            _0x1094ce.forEach(_0x17977e => {
                                              _0x13123a._0x265730(_0x17977e.fontSize);
                                              _0x13123a.text(_0x17977e.text, 26.5, _0x579320 + parseInt(_0x17977e.fontSize) / 5 - 2.15);
                                              _0x579320 += 1.9;
                                            });
                                            _0x13123a._0x265730(5);
                                            const _0x6f9d48 = _0x44f045(_0x581e02, 43, 43, 1, 5, _0x13123a);
                                            let _0x762db4 = 18.5;
                                            _0x6f9d48.forEach(_0x3f33ee => {
                                              _0x13123a._0x265730(_0x3f33ee.fontSize);
                                              _0x13123a.text(_0x3f33ee.text, 26.5, _0x762db4 + parseInt(_0x3f33ee.fontSize) / 5 - 1.9);
                                              _0x762db4 += 1.4;
                                            });
                                          } else {
                                            if (_0x215b32 == "myodp100" || _0x215b32 == "myodps100") {
                                              _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 2, _0x451634 + 12, _0x46672b + 34, _0x362c35 + 70.5);
                                              var _0x31ccea = _0x2fd521;
                                              var _0x23c1e3 = zzsInfo[0];
                                              var _0x3587ee = zzsInfo[1];
                                              var _0x3eccbb = zzsInfo[2];
                                              var _0x59f7fb = odInfo._0x241a74;
                                              var _0x54d2e4 = odInfo._0x1fa780;
                                              var _0x581e02 = odInfo._0x2bb1a7;
                                              _0x13123a._0x265730(6);
                                              const _0x49b6d8 = _0x44f045(_0x31ccea, 20, 16, 1, 9, _0x13123a);
                                              let _0xa194f3 = 19.5;
                                              _0x49b6d8.forEach(_0x2c8696 => {
                                                {
                                                  if (_0x2c8696.text === "") {
                                                    return;
                                                  }
                                                  _0x13123a._0x265730(_0x2c8696.fontSize);
                                                  _0x13123a.text(_0x2c8696.text, 45, _0xa194f3 + parseInt(_0x2c8696.fontSize) / 5 - 1.9);
                                                  _0xa194f3 += 1.4;
                                                }
                                              });
                                              _0x13123a._0x265730(6);
                                              const _0x57faf0 = _0x44f045(_0x23c1e3, 75, 75, 1, 9, _0x13123a);
                                              let _0x994f24 = 24.8;
                                              _0x57faf0.forEach(_0x30ea20 => {
                                                _0x13123a._0x265730(_0x30ea20.fontSize);
                                                _0x13123a.text(_0x30ea20.text, 23, _0x994f24 + parseInt(_0x30ea20.fontSize) / 5 - 1.9);
                                                _0x994f24 += 1.4;
                                              });
                                              _0x13123a._0x265730(6);
                                              const _0x46d10b = _0x44f045(_0x3587ee, 60, 90, 3, 7, _0x13123a);
                                              let _0x5e0bc1 = 30;
                                              _0x46d10b.forEach((_0x340df6, _0x55fd9c) => {
                                                _0x55fd9c === 0 ? (_0x13123a._0x265730(_0x340df6.fontSize), _0x13123a.text(_0x340df6.text, 33, _0x5e0bc1 + parseInt(_0x340df6.fontSize) / 5 - 2.2), _0x5e0bc1 += 2.75) : (_0x13123a._0x265730(_0x340df6.fontSize), _0x13123a.text(_0x340df6.text, 3, _0x5e0bc1 + parseInt(_0x340df6.fontSize) / 5 - 2.2), _0x5e0bc1 += 2.75);
                                              });
                                              _0x13123a._0x265730(5);
                                              const _0x56ff41 = _0x44f045(_0x3eccbb, 70, 40, 1, 8, _0x13123a);
                                              let _0x30d9ad = 39.2;
                                              _0x56ff41.forEach(_0x22d29f => {
                                                _0x13123a._0x265730(_0x22d29f.fontSize);
                                                _0x13123a.text(_0x22d29f.text, 33, _0x30d9ad + parseInt(_0x22d29f.fontSize) / 5 - 1.9);
                                                _0x30d9ad += 1.4;
                                              });
                                              _0x13123a._0x265730(5);
                                              const _0x1bc754 = _0x44f045(_0x59f7fb, 70, 40, 1, 8, _0x13123a);
                                              let _0x745369 = 44.5;
                                              _0x1bc754.forEach(_0x5da664 => {
                                                _0x13123a._0x265730(_0x5da664.fontSize);
                                                _0x13123a.text(_0x5da664.text, 24.5, _0x745369 + parseInt(_0x5da664.fontSize) / 5 - 1.9);
                                                _0x745369 += 1.4;
                                              });
                                              _0x13123a._0x265730(6);
                                              const _0x39c887 = _0x44f045(_0x54d2e4, 66, 66, 3, 7, _0x13123a);
                                              let _0x8ee38 = 48.1;
                                              _0x39c887.forEach(_0x50f8fe => {
                                                _0x13123a._0x265730(_0x50f8fe.fontSize);
                                                _0x13123a.text(_0x50f8fe.text, 27.8, _0x8ee38 + parseInt(_0x50f8fe.fontSize) / 5 - 1.9);
                                                _0x8ee38 += 2.75;
                                              });
                                              _0x13123a._0x265730(5);
                                              const _0x5dfa78 = _0x44f045(_0x581e02, 70, 70, 1, 8, _0x13123a);
                                              let _0x45ffb8 = 57.1;
                                              _0x5dfa78.forEach(_0x3d35a0 => {
                                                {
                                                  _0x13123a._0x265730(_0x3d35a0.fontSize);
                                                  _0x13123a.text(_0x3d35a0.text, 27.5, _0x45ffb8 + parseInt(_0x3d35a0.fontSize) / 5 - 1.9);
                                                  _0x45ffb8 += 1.4;
                                                }
                                              });
                                            } else {
                                              if (_0x215b32 == "myodfz100") {
                                                _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 2, _0x451634 + 12, _0x46672b + 34, _0x362c35 + 70.5);
                                                var _0x31ccea = _0x2fd521;
                                                var _0x23c1e3 = zzsInfo[0];
                                                var _0x3587ee = zzsInfo[1];
                                                var _0x3eccbb = zzsInfo[2];
                                                var _0x59f7fb = odInfo._0x241a74;
                                                var _0x54d2e4 = odInfo._0x1fa780;
                                                var _0x581e02 = odInfo._0x2bb1a7;
                                                _0x13123a._0x265730(6);
                                                const _0x455d9a = _0x44f045(_0x31ccea, 20, 16, 1, 8, _0x13123a);
                                                let _0x552d00 = 34.5;
                                                _0x455d9a.forEach(_0x47e367 => {
                                                  {
                                                    if (_0x47e367.text === "") {
                                                      return;
                                                    }
                                                    _0x13123a._0x265730(_0x47e367.fontSize);
                                                    _0x13123a.text(_0x47e367.text, 77, _0x552d00 + parseInt(_0x47e367.fontSize) / 5 - 1.9);
                                                    _0x552d00 += 1.4;
                                                  }
                                                });
                                                _0x13123a._0x265730(6);
                                                const _0x5d4cae = _0x44f045(_0x23c1e3, 73, 50, 1, 8, _0x13123a);
                                                let _0x1d6467 = 20.2;
                                                _0x5d4cae.forEach(_0x97681e => {
                                                  _0x13123a._0x265730(_0x97681e.fontSize);
                                                  _0x13123a.text(_0x97681e.text, 23.5, _0x1d6467 + parseInt(_0x97681e.fontSize) / 5 - 1.9);
                                                  _0x1d6467 += 1.4;
                                                });
                                                _0x13123a._0x265730(6);
                                                const _0xedb9c0 = _0x44f045(_0x3587ee, 73, 73, 3, 7, _0x13123a);
                                                let _0x20cee8 = 24.2;
                                                _0xedb9c0.forEach(_0x4082d6 => {
                                                  _0x13123a._0x265730(_0x4082d6.fontSize);
                                                  _0x13123a.text(_0x4082d6.text, 23.5, _0x20cee8 + parseInt(_0x4082d6.fontSize) / 5 - 2.1);
                                                  _0x20cee8 += 2.8;
                                                });
                                                _0x13123a._0x265730(5);
                                                const _0x38dcbd = _0x44f045(_0x3eccbb, 40, 35, 1, 7, _0x13123a);
                                                let _0x3c429a = 33.8;
                                                _0x38dcbd.forEach(_0x135e81 => {
                                                  _0x13123a._0x265730(_0x135e81.fontSize);
                                                  _0x13123a.text(_0x135e81.text, 23.5, _0x3c429a + parseInt(_0x135e81.fontSize) / 5 - 1.9);
                                                  _0x3c429a += 1.4;
                                                });
                                                _0x13123a._0x265730(5);
                                                const _0x3f202b = _0x44f045(_0x59f7fb, 55, 40, 1, 7, _0x13123a);
                                                let _0x477877 = 40;
                                                _0x3f202b.forEach(_0x1c35da => {
                                                  _0x13123a._0x265730(_0x1c35da.fontSize);
                                                  _0x13123a.text(_0x1c35da.text, 36.8, _0x477877 + parseInt(_0x1c35da.fontSize) / 5 - 1.9);
                                                  _0x477877 += 1.4;
                                                });
                                                _0x13123a._0x265730(6);
                                                const _0x67f3da = _0x44f045(_0x54d2e4, 55, 55, 3, 7, _0x13123a);
                                                let _0x673f64 = 44.85;
                                                _0x67f3da.forEach(_0x5e13df => {
                                                  {
                                                    _0x13123a._0x265730(_0x5e13df.fontSize);
                                                    _0x13123a.text(_0x5e13df.text, 37, _0x673f64 + parseInt(_0x5e13df.fontSize) / 5 - 2.1);
                                                    _0x673f64 += 2.8;
                                                  }
                                                });
                                                _0x13123a._0x265730(5);
                                                const _0x1256b9 = _0x44f045(_0x581e02, 55, 40, 1, 9, _0x13123a);
                                                let _0x2c1501 = 53.8;
                                                _0x1256b9.forEach(_0x5e37ff => {
                                                  _0x13123a._0x265730(_0x5e37ff.fontSize);
                                                  _0x13123a.text(_0x5e37ff.text, 36.8, _0x2c1501 + parseInt(_0x5e37ff.fontSize) / 5 - 1.9);
                                                  _0x2c1501 += 1.4;
                                                });
                                              } else {
                                                if (_0x215b32 == "myodfzcz100") {
                                                  function _0x521420(_0x422103) {
                                                    try {
                                                      _0x13123a._0x1ad268(base64UploadedBarcode, "JPEG", _0x5356e5 - 2, _0x451634, _0x46672b + 34, _0x362c35 + 82.5);
                                                      var _0x2c6808 = _0x2fd521;
                                                      var _0x4311d3 = zzsInfo[0];
                                                      var _0x142009 = zzsInfo[1];
                                                      var _0x18ef26 = zzsInfo[2];
                                                      var _0x43e2ff = odInfo._0x241a74;
                                                      var _0x5b1958 = odInfo._0x1fa780;
                                                      var _0x258221 = odInfo._0x2bb1a7;
                                                      _0x422103.length < 5 && (_0x422103 = "无材质属性/跨店");
                                                      _0x13123a._0x265730(6);
                                                      const _0x2ca429 = _0x44f045(_0x422103, 25, 40, 3, 6.5, _0x13123a, "属性");
                                                      let _0x3d6e70 = 4.2;
                                                      _0x2ca429.forEach((_0x1772ef, _0x4c04c4) => {
                                                        if (_0x1772ef.text === "") {
                                                          return;
                                                        }
                                                        _0x4c04c4 === 0 ? (_0x13123a._0x265730(_0x1772ef.fontSize), _0x13123a.text(_0x1772ef.text, 68, _0x3d6e70 + parseInt(_0x1772ef.fontSize) / 5 - 1.5), _0x3d6e70 += 2.5) : (_0x13123a._0x265730(_0x1772ef.fontSize), _0x13123a.text(_0x1772ef.text, 52.5, _0x3d6e70 + parseInt(_0x1772ef.fontSize) / 5 - 1.5), _0x3d6e70 += 2.5);
                                                      });
                                                      _0x13123a._0x265730(6);
                                                      const _0x38761a = _0x44f045(_0x2c6808, 20, 16, 1, 8, _0x13123a);
                                                      let _0x41dec9 = 34.5;
                                                      _0x38761a.forEach(_0x45bace => {
                                                        if (_0x45bace.text === "") {
                                                          return;
                                                        }
                                                        _0x13123a._0x265730(_0x45bace.fontSize);
                                                        _0x13123a.text(_0x45bace.text, 77, _0x41dec9 + parseInt(_0x45bace.fontSize) / 5 - 1.9);
                                                        _0x41dec9 += 1.4;
                                                      });
                                                      _0x13123a._0x265730(6);
                                                      const _0x155e66 = _0x44f045(_0x4311d3, 73, 50, 1, 8, _0x13123a);
                                                      let _0x27eb00 = 20;
                                                      _0x155e66.forEach(_0x57c2fa => {
                                                        _0x13123a._0x265730(_0x57c2fa.fontSize);
                                                        _0x13123a.text(_0x57c2fa.text, 23.5, _0x27eb00 + parseInt(_0x57c2fa.fontSize) / 5 - 1.9);
                                                        _0x27eb00 += 1.4;
                                                      });
                                                      _0x13123a._0x265730(6);
                                                      const _0x3bf03b = _0x44f045(_0x142009, 73, 73, 3, 7, _0x13123a);
                                                      let _0x2c99c9 = 24.55;
                                                      _0x3bf03b.forEach(_0x22d46d => {
                                                        _0x13123a._0x265730(_0x22d46d.fontSize);
                                                        _0x13123a.text(_0x22d46d.text, 23.5, _0x2c99c9 + parseInt(_0x22d46d.fontSize) / 5 - 2.1);
                                                        _0x2c99c9 += 2.9;
                                                      });
                                                      _0x13123a._0x265730(5);
                                                      const _0x3a5ee7 = _0x44f045(_0x18ef26, 40, 35, 1, 7, _0x13123a);
                                                      let _0x554739 = 34.5;
                                                      _0x3a5ee7.forEach(_0x3c80b0 => {
                                                        _0x13123a._0x265730(_0x3c80b0.fontSize);
                                                        _0x13123a.text(_0x3c80b0.text, 23.5, _0x554739 + parseInt(_0x3c80b0.fontSize) / 5 - 1.9);
                                                        _0x554739 += 1.4;
                                                      });
                                                      _0x13123a._0x265730(5);
                                                      const _0x41e7f7 = _0x44f045(_0x43e2ff, 55, 40, 1, 7, _0x13123a);
                                                      let _0x41ed9b = 40;
                                                      _0x41e7f7.forEach(_0x1f4ad1 => {
                                                        _0x13123a._0x265730(_0x1f4ad1.fontSize);
                                                        _0x13123a.text(_0x1f4ad1.text, 37, _0x41ed9b + parseInt(_0x1f4ad1.fontSize) / 5 - 1.9);
                                                        _0x41ed9b += 1.4;
                                                      });
                                                      _0x13123a._0x265730(6);
                                                      const _0x3bf79a = _0x44f045(_0x5b1958, 55, 55, 3, 7, _0x13123a);
                                                      let _0x48002f = 44.85;
                                                      _0x3bf79a.forEach(_0x372492 => {
                                                        _0x13123a._0x265730(_0x372492.fontSize);
                                                        _0x13123a.text(_0x372492.text, 37, _0x48002f + parseInt(_0x372492.fontSize) / 5 - 2.1);
                                                        _0x48002f += 2.8;
                                                      });
                                                      _0x13123a._0x265730(5);
                                                      const _0xf72317 = _0x44f045(_0x258221, 55, 40, 1, 9, _0x13123a);
                                                      let _0x9881fc = 54.2;
                                                      _0xf72317.forEach(_0x43ba64 => {
                                                        _0x13123a._0x265730(_0x43ba64.fontSize);
                                                        _0x13123a.text(_0x43ba64.text, 37, _0x9881fc + parseInt(_0x43ba64.fontSize) / 5 - 1.9);
                                                        _0x9881fc += 1.4;
                                                      });
                                                    } catch (_0x25fa93) {
                                                      console.log(_0x25fa93);
                                                    }
                                                  }
                                                  _0x4bd138 = new Promise(_0x43cbab => {
                                                    if (Array.isArray(allAttrubutesDict[_0x2b3923[6]])) {
                                                      var _0x5498f8 = allAttrubutesDict[_0x2b3923[6] + ""].map(_0x4b6f22 => _0x4b6f22.join(" ")).join("  ");
                                                      _0x521420(_0x5498f8);
                                                      _0x43cbab();
                                                    } else {
                                                      chrome.runtime._0x1354f4({
                                                        type: "getAllSkcInfo",
                                                        mallid: _0x40c00c,
                                                        _0x588d1e: [_0x2b3923[6]]
                                                      }, async _0x17fbe0 => {
                                                        {
                                                          allAttrubutesDict = Object.assign(allAttrubutesDict, _0x17fbe0.data);
                                                          var _0x329b09 = _0x17fbe0.data[_0x2b3923[6]] ? _0x17fbe0.data[_0x2b3923[6]].map(_0x1ac629 => _0x1ac629.join(" ")).join("  ") : "";
                                                          _0x521420(_0x329b09);
                                                          _0x43cbab();
                                                        }
                                                      });
                                                    }
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
                            if (_0x4bd138) {
                              {
                                await _0x4bd138;
                              }
                            }
                            if (_0x215b32 == "myod74" || _0x215b32 == "myodfz77") {
                              const _0x25e5f4 = document.createElement("canvas");
                              _0x25e5f4.width = _0x46672b;
                              _0x25e5f4.height = _0x362c35;
                              JsBarcode(_0x25e5f4, _0x3436fc, {
                                format: "CODE128",
                                _0x414466: "#000",
                                width: 1,
                                height: 20,
                                _0x3ed7ec: false
                              });
                              const _0x55488b = _0x25e5f4.toDataURL("image/png");
                              if (_0xb2bd52.length == 0) {
                                _0x13123a._0x1ad268(_0x55488b, "PNG", _0x5356e5, _0x451634 - 0.5, _0x46672b, _0x362c35 - 2.8);
                                _0x13123a.rect(_0x5356e5, _0x451634 - 0.5, _0x46672b, _0x362c35 - 2.5);
                                _0x13123a._0x265730(5);
                                _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2);
                                _0x13123a._0x265730(5.5);
                                _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03), _0x451634 + 2);
                                _0x13123a._0x265730(6);
                                _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 4);
                                _0x13123a._0x265730(6);
                                _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China"), _0x451634 + _0x362c35 - 4);
                              } else {
                                if (_0xb2bd52.length == 1) {
                                  _0x13123a._0x1ad268(_0x55488b, "PNG", _0x5356e5, _0x451634 - 0.5, _0x46672b - 16.5, _0x362c35 - 2.8);
                                  _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 50, _0x451634 - 0.5, 13.5, 13.5);
                                  _0x13123a.rect(_0x5356e5, _0x451634 - 0.5, _0x46672b - 16.5, _0x362c35 - 2.5);
                                  _0x13123a._0x265730(5);
                                  _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2);
                                  _0x4dcf03.length > 20 ? _0x13123a._0x265730(4.5) : _0x13123a._0x265730(5.5);
                                  _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03) - 16.5, _0x451634 + 2);
                                  _0x13123a._0x265730(6);
                                  _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 4);
                                  _0x13123a._0x265730(6);
                                  _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China") - 16.5, _0x451634 + _0x362c35 - 4);
                                } else {
                                  _0xb2bd52.length == 2 && (_0x13123a._0x1ad268(_0x55488b, "PNG", _0x5356e5, _0x451634 - 0.5, _0x46672b - 26, _0x362c35 - 2.8), _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 41, _0x451634 - 0.4, 13, 13), _0x13123a._0x1ad268(_0x626c95, "PNG", _0x5356e5 + 54, _0x451634 - 0.55, 13, 13), _0x13123a.rect(_0x5356e5, _0x451634 - 0.5, _0x46672b - 26, _0x362c35 - 2.5), _0x13123a._0x265730(5), _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2), _0x4dcf03.length > 20 ? _0x13123a._0x265730(4) : _0x13123a._0x265730(5.5), _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03) - 26, _0x451634 + 2), _0x13123a._0x265730(6), _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 4), _0x13123a._0x265730(6), _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China") - 26, _0x451634 + _0x362c35 - 4));
                                }
                              }
                            } else {
                              if (_0x215b32 == "myodfzcz100") {
                                const _0x125bae = document.createElement("canvas");
                                _0x125bae.width = _0x46672b;
                                _0x125bae.height = _0x362c35;
                                JsBarcode(_0x125bae, _0x3436fc, {
                                  format: "CODE128",
                                  _0x414466: "#000",
                                  width: 1,
                                  height: 20,
                                  _0x3ed7ec: false
                                });
                                const _0x25d033 = _0x125bae.toDataURL("image/png");
                                _0x13123a._0x1ad268(_0x25d033, "PNG", _0x5356e5, _0x451634, _0x46672b - 19, _0x362c35 - 2.8);
                                _0x13123a.rect(_0x5356e5, _0x451634, _0x46672b - 19, _0x362c35 - 2);
                                _0x13123a._0x265730(5);
                                _0x13123a.text(_0xdb57ba, _0x5356e5 + 2, _0x451634 + 2.3);
                                _0x13123a._0x265730(5);
                                _0x13123a.text(_0x4dcf03, 45.5 - _0x13123a._0x299905(_0x4dcf03), _0x451634 + 2.3);
                                _0x13123a._0x265730(5.5);
                                _0x13123a.text(_0x2ffcad, _0x5356e5 + 2, _0x451634 + _0x362c35 - 3.5);
                                _0x13123a._0x265730(5.5);
                                _0x13123a.text("Made In China", 45.1 - _0x13123a._0x299905("Made In China"), _0x451634 + _0x362c35 - 3.5);
                                if (_0xb2bd52.length == 1) {
                                  _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 3, _0x451634 + 56.2, 14, 14);
                                } else {
                                  if (_0xb2bd52.length == 2) {
                                    {
                                      _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 0.2, _0x451634 + 57.5, 11, 11);
                                      _0x13123a._0x1ad268(_0x626c95, "PNG", _0x5356e5 + 11.1, _0x451634 + 57.5, 11, 11);
                                    }
                                  }
                                }
                              } else {
                                if (_0x215b32 == "myodfz100" || _0x215b32 == "myodp100" || _0x215b32 == "myodps100") {
                                  {
                                    const _0x418776 = document.createElement("canvas");
                                    _0x418776.width = _0x46672b;
                                    _0x418776.height = _0x362c35;
                                    JsBarcode(_0x418776, _0x3436fc, {
                                      format: "CODE128",
                                      _0x414466: "#000",
                                      width: 1,
                                      height: 20,
                                      _0x3ed7ec: false
                                    });
                                    const _0x16416e = _0x418776.toDataURL("image/png");
                                    if (_0xb2bd52.length == 0) {
                                      _0x13123a._0x1ad268(_0x16416e, "PNG", _0x5356e5 + 10, _0x451634, _0x46672b + 10, _0x362c35 - 2.8);
                                      _0x13123a.rect(_0x5356e5 + 10, _0x451634, _0x46672b + 10, _0x362c35 - 2);
                                      _0x13123a._0x265730(5);
                                      _0x13123a.text(_0xdb57ba, _0x5356e5 + 13, _0x451634 + 2.3);
                                      _0x13123a._0x265730(5.5);
                                      _0x13123a.text(_0x4dcf03, 85.5 - _0x13123a._0x299905(_0x4dcf03), _0x451634 + 2.3);
                                      _0x13123a._0x265730(6);
                                      _0x13123a.text(_0x2ffcad, _0x5356e5 + 13, _0x451634 + _0x362c35 - 3.5);
                                      _0x13123a._0x265730(6);
                                      _0x13123a.text("Made In China", 85.1 - _0x13123a._0x299905("Made In China"), _0x451634 + _0x362c35 - 3.5);
                                    } else {
                                      if (_0xb2bd52.length == 1) {
                                        {
                                          _0x13123a._0x1ad268(_0x16416e, "PNG", _0x5356e5 + 1, _0x451634, _0x46672b + 10, _0x362c35 - 2.8);
                                          _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 80, _0x451634, 14, 14);
                                          _0x13123a.rect(_0x5356e5 + 1, _0x451634, _0x46672b + 10, _0x362c35 - 2);
                                          _0x13123a._0x265730(5);
                                          _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2.3);
                                          _0x13123a._0x265730(5.5);
                                          _0x13123a.text(_0x4dcf03, 75.5 - _0x13123a._0x299905(_0x4dcf03), _0x451634 + 2.3);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 3.5);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text("Made In China", 75.1 - _0x13123a._0x299905("Made In China"), _0x451634 + _0x362c35 - 3.5);
                                        }
                                      } else {
                                        _0xb2bd52.length == 2 && (_0x13123a._0x1ad268(_0x16416e, "PNG", _0x5356e5 + 1, _0x451634, _0x46672b + 1, _0x362c35 - 2.8), _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 68.5, _0x451634, 14, 14), _0x13123a._0x1ad268(_0x626c95, "PNG", _0x5356e5 + 83, _0x451634, 14, 14), _0x13123a.rect(_0x5356e5 + 1, _0x451634, _0x46672b + 1, _0x362c35 - 2), _0x13123a._0x265730(5), _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2.3), _0x13123a._0x265730(5.5), _0x13123a.text(_0x4dcf03, 75.5 - _0x13123a._0x299905(_0x4dcf03) - 9, _0x451634 + 2.3), _0x13123a._0x265730(6), _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 3.5), _0x13123a._0x265730(6), _0x13123a.text("Made In China", 75.1 - _0x13123a._0x299905("Made In China") - 9, _0x451634 + _0x362c35 - 3.5));
                                      }
                                    }
                                  }
                                } else {
                                  if (_0x215b32 != "myodp74" && _0x215b32 != "myodps74" && _0x215b32 != "myod72" && _0x215b32 != "mygys72") {
                                    const _0x1ee5e4 = document.createElement("canvas");
                                    _0x1ee5e4.width = _0x46672b;
                                    _0x1ee5e4.height = _0x362c35;
                                    JsBarcode(_0x1ee5e4, _0x3436fc, {
                                      format: "CODE128",
                                      _0x414466: "#000",
                                      width: 1,
                                      height: 20,
                                      _0x3ed7ec: false
                                    });
                                    const _0x5bdd54 = _0x1ee5e4.toDataURL("image/png");
                                    if (_0xb2bd52.length == 0) {
                                      {
                                        _0x13123a._0x1ad268(_0x5bdd54, "PNG", _0x5356e5, _0x451634, _0x46672b, _0x362c35);
                                        _0x13123a.rect(_0x5356e5, _0x451634, _0x46672b, _0x362c35);
                                        _0x13123a._0x265730(5);
                                        _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2.5);
                                        _0x13123a._0x265730(5.5);
                                        _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03), _0x451634 + 2.5);
                                        _0x13123a._0x265730(6);
                                        _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 1.2);
                                        _0x13123a._0x265730(6);
                                        _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China"), _0x451634 + _0x362c35 - 1.2);
                                      }
                                    } else {
                                      if (_0xb2bd52.length == 1) {
                                        {
                                          _0x13123a._0x1ad268(_0x5bdd54, "PNG", _0x5356e5, _0x451634, _0x46672b - 16.5, _0x362c35);
                                          _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 50, _0x451634, 15, 15);
                                          _0x13123a.rect(_0x5356e5, _0x451634, _0x46672b - 16.5, _0x362c35);
                                          _0x13123a._0x265730(5);
                                          _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2.5);
                                          if (_0x4dcf03.length > 20) {
                                            {
                                              _0x13123a._0x265730(4.5);
                                            }
                                          } else {
                                            _0x13123a._0x265730(5.5);
                                          }
                                          _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03) - 16.5, _0x451634 + 2.5);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 1.2);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China") - 16.5, _0x451634 + _0x362c35 - 1.2);
                                        }
                                      } else {
                                        if (_0xb2bd52.length == 2) {
                                          _0x13123a._0x1ad268(_0x5bdd54, "PNG", _0x5356e5, _0x451634, _0x46672b - 26, _0x362c35);
                                          _0x13123a._0x1ad268(_0x579b7f, "PNG", _0x5356e5 + 40.5, _0x451634 + 0.6, 13.5, 13.5);
                                          _0x13123a._0x1ad268(_0x626c95, "PNG", _0x5356e5 + 53.8, _0x451634 + 0.8, 13.5, 13.5);
                                          _0x13123a.rect(_0x5356e5, _0x451634, _0x46672b - 26, _0x362c35);
                                          _0x13123a._0x265730(5);
                                          _0x13123a.text(_0xdb57ba, _0x5356e5 + 3, _0x451634 + 2.5);
                                          if (_0x4dcf03.length > 20) {
                                            {
                                              _0x13123a._0x265730(4);
                                            }
                                          } else {
                                            _0x13123a._0x265730(5.5);
                                          }
                                          _0x13123a.text(_0x4dcf03, 64.5 - _0x13123a._0x299905(_0x4dcf03) - 26, _0x451634 + 2.5);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text(_0x2ffcad, _0x5356e5 + 3, _0x451634 + _0x362c35 - 1.2);
                                          _0x13123a._0x265730(6);
                                          _0x13123a.text("Made In China", 64.1 - _0x13123a._0x299905("Made In China") - 26, _0x451634 + _0x362c35 - 1.2);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (_0x1cfbb4 === _0x497e59 - 1 && !_0x2ebe32) {
                              if (_0x215b32 == "myHbzx" || _0x215b32 == "myodp74" || _0x215b32 == "myod74" || _0x215b32 == "myodps74") {
                                _0x13123a._0x597e51([70, 40]);
                              } else {
                                if (_0x215b32 == "mySpb" || _0x215b32 == "myodp76") {
                                  _0x13123a._0x597e51([70, 60]);
                                } else {
                                  if (_0x215b32 == "myodp" || _0x215b32 == "myodps77" || _0x215b32 == "myodfz77") {
                                    _0x13123a._0x597e51([70, 70]);
                                  } else {
                                    _0x215b32 == "myodp100" || _0x215b32 == "myodps100" || _0x215b32 == "myodfz100" || _0x215b32 == "myodfzcz100" ? _0x13123a._0x597e51([100, 100]) : _0x13123a._0x597e51([70, 20]);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      _0x13123a._0x3df3ce({
                        title: "自定义文件名"
                      });
                      _0x13123a._0x1c9591();
                      const _0x26c511 = _0x13123a._0x5e455f("blob");
                      const _0x497108 = document.createElement("iframe");
                      _0x497108.style.position = "absolute";
                      _0x497108.style.width = "0px";
                      _0x497108.style.height = "0px";
                      _0x497108.style.border = "none";
                      _0x497108.className = "print-iframe";
                      document.body.appendChild(_0x497108);
                      const _0x4952c7 = URL.createObjectURL(_0x26c511);
                      _0x497108.src = _0x4952c7;
                      _0x497108.onload = function () {
                        setTimeout(function () {
                          {
                            _0x497108.contentWindow.focus();
                            _0x497108.contentWindow.print();
                            document.querySelector(".tooltipprint") ? document.querySelector(".tooltipprint").remove() : "";
                            document.querySelector("#modal") ? document.querySelector("#modal").remove() : "";
                            document.querySelectorAll(".print-iframe").length > 1 ? document.querySelector(".print-iframe").remove() : "";
                            URL.revokeObjectURL(_0x4952c7);
                          }
                        }, 1000);
                      };
                      closePrintShowBox();
                    } catch (_0x1a5524) {
                      console.log(_0x1a5524);
                    }
                  }
                } else {
                  _0x43562e.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                }
              } else {
                if (_0x43562e.data._0x41bda4 == "可绑") {
                  var _0x448da2 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x448da2, "可绑定帮助", _0x40c00c, _0x15390d, _0x448da2);
                } else {
                  if (_0x43562e.data._0x41bda4 == "超绑") {
                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                  } else {
                    _0x43562e.data._0x41bda4 == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                  }
                }
              }
            }
            function _0x1ca2b9(_0x3038c8, _0x4bab1a, _0x8b34e9) {
              {
                var _0x5e4c2f = _0x4bab1a._0x4d8d20;
                var _0x20fab0 = _0x4bab1a._0x313f8a;
                var _0x28cef1 = _0x47d053[0][7];
                var _0x1d703e = _0x47d053[0][6];
                const _0x861596 = document.querySelectorAll("[class=\"printTooltip show\"]");
                _0x861596.forEach(_0x40bbe0 => {
                  _0x40bbe0.style.display = "none";
                  _0x40bbe0.remove();
                });
                zzsInfo = ["请选择", "请选择", "请选择"];
                const _0x279e13 = document.createElement("div");
                _0x279e13.id = "print-photo-modal";
                _0x279e13.className = "print-photo-modal";
                const _0x48c5b8 = document.createElement("div");
                _0x48c5b8.className = "print-photo-modal-content";
                const _0x3ab8ce = document.createElement("span");
                _0x3ab8ce.id = "print-photo-closeModal";
                _0x3ab8ce.className = "print-photo-close";
                _0x3ab8ce.innerHTML = "&times;";
                _0x3ab8ce.onclick = _0x4c1567;
                const _0x1777f5 = document.createElement("div");
                _0x1777f5.className = "print-photo-modal-header";
                const _0x4304b0 = document.createElement("h2");
                _0x4304b0.innerText = _0x3038c8;
                _0x1777f5.appendChild(_0x4304b0);
                const _0x4ed7fa = document.createElement("div");
                _0x4ed7fa.className = "print-photo-modal-body";
                const _0x152076 = document.createElement("div");
                _0x152076.className = "print-photo-left-panel";
                const _0xb415cf = document.createElement("img");
                _0xb415cf.src = base64UploadedBarcode;
                _0xb415cf.alt = "图片";
                _0xb415cf.style.maxWidth = "100%";
                _0x152076.appendChild(_0xb415cf);
                const _0x2f3ce2 = document.createElement("form");
                _0x2f3ce2.className = "print-photo-right-panel";
                const _0x2029f6 = document.createElement("div");
                _0x2029f6.id = "print-photo-inputContainer";
                _0x2f3ce2.appendChild(_0x2029f6);
                _0x8b34e9 != "myod72" && (_0x5e4c2f.forEach(_0x3571f5 => {
                  const _0xd8f7ae = document.createElement("div");
                  _0xd8f7ae.className = "print-photo-input-wrapper";
                  const _0x4d211d = document.createElement("label");
                  _0x4d211d.innerText = _0x3571f5[0];
                  _0x4d211d.className = "print-photo-input-label";
                  const _0x28a93d = document.createElement("div");
                  _0x28a93d.className = "print-photo-custom-select";
                  const _0x430505 = document.createElement("div");
                  _0x430505.className = "print-photo-selected-option";
                  _0x430505.innerText = "请选择";
                  const _0x17a38c = document.createElement("div");
                  _0x17a38c.className = "print-photo-options-wrapper";
                  const _0x2f6eb7 = _0x3571f5[1];
                  _0x2f6eb7.forEach(_0x39c37a => {
                    var _0x5279f4 = _0x39c37a[0] + "\n" + _0x39c37a[1];
                    const _0x54a8e9 = document.createElement("div");
                    _0x54a8e9.className = "print-photo-option";
                    _0x54a8e9.innerText = _0x5279f4;
                    chrome.storage._0x5e599f.get("printCodeInfoText", function (_0x288e84) {
                      _0x288e84.printCodeInfoText && _0x5279f4 === _0x288e84.printCodeInfoText && (_0x430505.innerText = _0x5279f4, zzsInfo = _0x39c37a);
                    });
                    _0x54a8e9.addEventListener("click", () => {
                      _0x430505.innerText = _0x5279f4;
                      zzsInfo = _0x39c37a;
                      chrome.storage._0x5e599f.set({
                        printCodeInfoText: _0x5279f4
                      });
                      _0x17a38c.style.display = "none";
                    });
                    _0x17a38c.appendChild(_0x54a8e9);
                  });
                  _0x28a93d.appendChild(_0x430505);
                  _0x28a93d.appendChild(_0x17a38c);
                  _0xd8f7ae.appendChild(_0x4d211d);
                  _0xd8f7ae.appendChild(_0x28a93d);
                  _0x2029f6.appendChild(_0xd8f7ae);
                  _0x430505.addEventListener("click", () => {
                    _0x17a38c.style.display = _0x17a38c.style.display === "block" ? "none" : "block";
                  });
                  document.addEventListener("click", _0x9ef4d4 => {
                    if (!_0x28a93d.contains(_0x9ef4d4.target)) {
                      {
                        _0x17a38c.style.display = "none";
                      }
                    }
                  });
                }), _0x20fab0[0][1].length > 1 && _0x20fab0.forEach(_0x21490d => {
                  const _0x233f26 = document.createElement("div");
                  _0x233f26.className = "print-photo-input-wrapper";
                  const _0x16ca02 = document.createElement("label");
                  _0x16ca02.innerText = _0x21490d[0];
                  _0x16ca02.className = "print-photo-input-label";
                  const _0x3dd366 = document.createElement("div");
                  _0x3dd366.className = "print-photo-custom-select";
                  const _0x5bcf89 = document.createElement("div");
                  _0x5bcf89.className = "print-photo-selected-option";
                  _0x5bcf89.innerText = "请选择";
                  const _0x3701ba = document.createElement("div");
                  _0x3701ba.className = "print-photo-options-wrapper";
                  const _0x2d2002 = _0x21490d[1];
                  _0x2d2002.forEach(_0x3605ae => {
                    var _0x526860 = _0x3605ae[0] + "\n" + _0x3605ae[1];
                    const _0x568e97 = document.createElement("div");
                    _0x568e97.className = "print-photo-option";
                    _0x568e97.innerText = _0x526860;
                    _0x568e97.addEventListener("click", () => {
                      {
                        _0x5bcf89.innerText = _0x526860;
                        odInfo._0x2bb1a7 = _0x3605ae[2];
                        odInfo._0x241a74 = _0x3605ae[0];
                        odInfo._0x1fa780 = _0x3605ae[1];
                        _0x3701ba.style.display = "none";
                      }
                    });
                    _0x3701ba.appendChild(_0x568e97);
                  });
                  _0x3dd366.appendChild(_0x5bcf89);
                  _0x3dd366.appendChild(_0x3701ba);
                  _0x233f26.appendChild(_0x16ca02);
                  _0x233f26.appendChild(_0x3dd366);
                  _0x2029f6.appendChild(_0x233f26);
                  _0x5bcf89.addEventListener("click", () => {
                    _0x3701ba.style.display = _0x3701ba.style.display === "block" ? "none" : "block";
                  });
                  document.addEventListener("click", _0x13b2ac => {
                    !_0x3dd366.contains(_0x13b2ac.target) && (_0x3701ba.style.display = "none");
                  });
                }));
                var _0x57f8b4 = ["识别码"];
                if (shibiemaDict[_0x28cef1]) {
                  {
                    _0x57f8b4 = _0x57f8b4.concat(shibiemaDict[_0x28cef1]);
                  }
                } else {
                  currentPageInfo(_0x40c00c, _0x28cef1, _0x1d703e).then(_0x234c7c => {
                    _0x57f8b4 = _0x57f8b4.concat(_0x234c7c);
                    shibiemaDict[_0x28cef1] = _0x234c7c;
                  });
                }
                if (_0x8b34e9 != "mygys72") {
                  {
                    const _0x5aaa02 = document.createElement("div");
                    _0x5aaa02.className = "print-photo-radio-container";
                    _0x5aaa02.style.display = "flex";
                    _0x5aaa02.style.padding = "8px";
                    _0x5aaa02.style.marginLeft = "5px";
                    const _0x2649ae = document.createElement("input");
                    _0x2649ae.type = "radio";
                    _0x2649ae.name = "options";
                    _0x2649ae.id = "option1";
                    _0x2649ae.value = "option1";
                    _0x2649ae.checked = true;
                    _0x2649ae.style.marginRight = "0px";
                    const _0x41d61c = document.createElement("label");
                    _0x41d61c.htmlFor = "option1";
                    _0x41d61c.innerText = "SKC";
                    const _0x1f9d7d = document.createElement("input");
                    _0x1f9d7d.type = "radio";
                    _0x1f9d7d.name = "options";
                    _0x1f9d7d.id = "option2";
                    _0x1f9d7d.value = "option2";
                    _0x1f9d7d.style.marginRight = "0px";
                    _0x1f9d7d.style.marginLeft = "10px";
                    const _0x16e1b8 = document.createElement("label");
                    _0x16e1b8.htmlFor = "option2";
                    _0x16e1b8.style.marginRight = "10px";
                    _0x16e1b8.innerText = "自定义";
                    const _0x21739e = document.createElement("input");
                    _0x21739e.type = "text";
                    _0x21739e.placeholder = "请输入自定义识别码";
                    _0x21739e.style.display = "none";
                    _0x21739e.className = "print-photo-input-field";
                    _0x21739e.autocomplete = "on";
                    _0x21739e.name = "custom-code";
                    let _0x2a0de9 = null;
                    const _0x74311c = () => {
                      _0x2a0de9 && (_0x2a0de9.innerHTML = "", _0x57f8b4.forEach(_0x42b197 => {
                        const _0x104e10 = document.createElement("option");
                        _0x104e10.value = _0x42b197;
                        _0x104e10.innerText = _0x42b197;
                        _0x2a0de9.appendChild(_0x104e10);
                      }));
                    };
                    _0x1f9d7d.addEventListener("click", () => {
                      _0x21739e.style.display = "block";
                      if (!_0x2a0de9) {
                        {
                          _0x2a0de9 = document.createElement("select");
                          _0x2a0de9.style.display = "block";
                          _0x2a0de9.style.width = "20px";
                          _0x2a0de9.style.flex = "1";
                          _0x2a0de9.style.border = "1px solid #ddd";
                          _0x2a0de9.style.borderRadius = "4px";
                          _0x2a0de9.style.boxSizing = "border-box";
                          _0x2a0de9.className = "print-photo-select-field";
                          _0x74311c();
                          _0x2a0de9.addEventListener("change", _0x23e35c => {
                            _0x21739e.value = _0x23e35c.target.value;
                          });
                          _0x5aaa02.appendChild(_0x2a0de9);
                        }
                      } else {
                        _0x2a0de9.style.display = "block";
                        _0x74311c();
                      }
                    });
                    _0x2649ae.addEventListener("click", () => {
                      _0x21739e.style.display = "none";
                      _0x2a0de9 && (_0x2a0de9.style.display = "none");
                    });
                    _0x5aaa02.appendChild(_0x2649ae);
                    _0x5aaa02.appendChild(_0x41d61c);
                    _0x5aaa02.appendChild(_0x1f9d7d);
                    _0x5aaa02.appendChild(_0x16e1b8);
                    _0x5aaa02.appendChild(_0x21739e);
                    _0x2029f6.appendChild(_0x5aaa02);
                  }
                }
                if (_0x8b34e9 != "myodp74" && _0x8b34e9 != "myodps74" && _0x8b34e9 != "myod72" && _0x8b34e9 != "mygys72") {
                  const _0x538313 = document.createElement("div");
                  _0x538313.style.display = "flex";
                  _0x538313.style.flexWrap = "nowrap";
                  _0x538313.style.marginTop = "25px";
                  _0x538313.style.alignItems = "center";
                  document.body.appendChild(_0x538313);
                  const _0x341c6a = [{
                    value: "web/printImg/yellow.png",
                    text: "家用塑料、金属或硬纸盒",
                    img: chrome.runtime._0x55f5ad("web/printImg/y.jpg")
                  }, {
                    value: "web/printImg/lan.png",
                    text: "家用纸板、瓦楞纸",
                    img: chrome.runtime._0x55f5ad("web/printImg/l.jpg")
                  }, {
                    value: "web/printImg/zongs.png",
                    text: "家用可降解包装",
                    img: chrome.runtime._0x55f5ad("web/printImg/z.jpg")
                  }, {
                    value: "web/printImg/lvs.png",
                    text: "家用玻璃",
                    img: chrome.runtime._0x55f5ad("web/printImg/lv.jpg")
                  }];
                  _0x341c6a.forEach((_0x49eada, _0x19e09d) => {
                    const _0x54ac7c = document.createElement("div");
                    _0x54ac7c.style.position = "relative";
                    const _0x3c1651 = document.createElement("input");
                    _0x3c1651.type = "checkbox";
                    _0x3c1651.style.display = "none";
                    _0x3c1651.id = "option-" + _0x19e09d;
                    _0x3c1651.className = "custom-checkbox";
                    _0x3c1651.value = _0x49eada.value;
                    const _0x5ee096 = document.createElement("label");
                    _0x5ee096.htmlFor = _0x3c1651.id;
                    _0x5ee096.style.display = "inline-flex";
                    _0x5ee096.style.alignItems = "center";
                    _0x5ee096.style.padding = "0 8px";
                    _0x5ee096.style.gap = "8px";
                    _0x5ee096.style.cursor = "pointer";
                    const _0x753be8 = document.createElement("div");
                    _0x753be8.style.width = "16px";
                    _0x753be8.style.height = "16px";
                    _0x753be8.style.border = "2px solid #ddd";
                    _0x753be8.style.borderRadius = "50%";
                    _0x753be8.style.flexShrink = "0";
                    const _0x48a4c9 = document.createElement("span");
                    _0x48a4c9.textContent = _0x49eada.text;
                    const _0x5549d2 = document.createElement("img");
                    _0x5549d2.src = _0x49eada.img;
                    _0x5549d2.alt = "分类示意图";
                    _0x5549d2.style.position = "absolute";
                    _0x5549d2.style.left = "100%";
                    _0x5549d2.style.top = "50%";
                    _0x5549d2.style.transform = "translateY(-50%)";
                    _0x5549d2.style.marginLeft = "15px";
                    _0x5549d2.style.width = "250px";
                    _0x5549d2.style.display = "none";
                    _0x5549d2.style.zIndex = "99";
                    _0x5549d2.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                    _0x5549d2.style.borderRadius = "4px";
                    _0x5549d2.style.pointerEvents = "none";
                    _0x5ee096.appendChild(_0x753be8);
                    _0x5ee096.appendChild(_0x48a4c9);
                    _0x54ac7c.appendChild(_0x3c1651);
                    _0x54ac7c.appendChild(_0x5ee096);
                    _0x54ac7c.appendChild(_0x5549d2);
                    _0x538313.appendChild(_0x54ac7c);
                    _0x5ee096.addEventListener("mouseenter", () => {
                      _0x5549d2.style.display = "block";
                      new Image().src = _0x49eada.img;
                    });
                    _0x5ee096.addEventListener("mouseleave", () => {
                      _0x5549d2.style.display = "none";
                    });
                    _0x3c1651.addEventListener("change", function () {
                      {
                        const _0x368843 = document.querySelectorAll(".custom-checkbox:checked");
                        _0x753be8.style.background = this.checked ? "#2196F3" : "transparent";
                        _0x753be8.style.borderColor = this.checked ? "#2196F3" : "#ddd";
                        if (_0x368843.length > 2) {
                          this.checked = false;
                          _0x753be8.style.background = "transparent";
                          _0x753be8.style.borderColor = "#ddd";
                          return;
                        }
                        document.querySelectorAll(".custom-checkbox").forEach(_0x209c8c => {
                          const _0x112237 = _0x368843.length >= 2 && !_0x209c8c.checked;
                          _0x209c8c.disabled = _0x112237;
                          const _0x4a8a5c = _0x209c8c.nextElementSibling;
                          _0x4a8a5c && (_0x4a8a5c.style.opacity = _0x112237 ? "0.5" : "1", _0x4a8a5c.style.cursor = _0x112237 ? "not-allowed" : "pointer");
                        });
                      }
                    });
                  });
                  _0x2029f6.appendChild(_0x538313);
                }
                _0x4ed7fa.appendChild(_0x152076);
                _0x4ed7fa.appendChild(_0x2f3ce2);
                const _0xb6899 = document.createElement("div");
                _0xb6899.className = "print-photo-modal-footer";
                const _0x3ef86d = document.createElement("button");
                _0x3ef86d.id = "print-photo-confirmBtn";
                _0x3ef86d.innerText = "确定";
                _0x3ef86d.onclick = () => {
                  {
                    if (_0x8b34e9 != "mygys72") {
                      var _0xdd7501 = (checkedInput = document.querySelector(".print-photo-radio-container").querySelector("input[name=\"options\"]:checked")) ? checkedInput.value : null;
                      if (_0xdd7501 != "option1") {
                        var _0x5a9859 = document.querySelector(".print-photo-input-field").value;
                      } else {
                        {
                          var _0x5a9859 = "";
                        }
                      }
                      var _0x120c00 = Array.from(document.querySelectorAll(".custom-checkbox:checked")).map(_0xa95d65 => _0xa95d65.value);
                      _0x4c1567();
                      _0x2e7a16(_0x47d053, _0x5a9859, _0x120c00);
                    } else {
                      {
                        _0x4c1567();
                        _0x2e7a16(_0x47d053, "", []);
                      }
                    }
                  }
                };
                const _0x47efb7 = document.createElement("button");
                _0x47efb7.id = "print-photo-cancelBtn";
                _0x47efb7.innerText = "取消";
                _0x47efb7.onclick = _0x4c1567;
                _0xb6899.appendChild(_0x3ef86d);
                _0xb6899.appendChild(_0x47efb7);
                _0x48c5b8.appendChild(_0x3ab8ce);
                _0x48c5b8.appendChild(_0x1777f5);
                _0x48c5b8.appendChild(_0x4ed7fa);
                _0x48c5b8.appendChild(_0xb6899);
                _0x279e13.appendChild(_0x48c5b8);
                document.body.appendChild(_0x279e13);
              }
            }
            function _0x4c1567() {
              document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
              document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
              document.getElementById("modal") ? document.getElementById("modal").remove() : "";
              const _0x422c9b = document.getElementById("print-photo-modal");
              _0x422c9b && _0x422c9b.remove();
            }
            function _0x46f8f5() {
              {
                if (document.getElementById("printPhotoStyles")) {
                  return;
                }
                const _0xaba323 = document.createElement("style");
                _0xaba323.id = "printPhotoStyles";
                _0xaba323.innerHTML = "\n                      .print-photo-modal {\n                          display: flex;\n                          position: fixed;\n                          z-index: 9999;\n                          top: 0;\n                          left: 0;\n                          width: 100%;\n                          height: 100%;\n                          background-color: rgba(0,0,0,0.6);\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-modal-content {\n                          background-color: #ffffff;\n                          border-radius: 8px;\n                          padding: 20px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n                          width: 95%;\n                          max-width: 1100px;\n                          display: flex;\n                          flex-direction: column;\n                          position: relative;\n                      }\n                      .print-photo-modal-header {\n                          text-align: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-modal-header h2 {\n                          margin: 0;\n                          font-size: 24px;\n                          color: #333;\n                      }\n                      .print-photo-close {\n                          color: #888;\n                          font-size: 24px;\n                          font-weight: bold;\n                          position: absolute;\n                          top: 10px;\n                          right: 10px;\n                          cursor: pointer;\n                      }\n                      .print-photo-close:hover {\n                          color: #000;\n                      }\n                      .print-photo-modal-body {\n                          display: flex;\n                          width: 100%;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel img {\n                          max-width: 100%;\n                          height: auto;\n                          border-radius: 8px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                      }\n                      .print-photo-right-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          flex-direction: column;\n                      }\n                      .print-photo-input-wrapper {\n                          display: flex;\n                          align-items: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-input-label {\n                          flex: 0 0 50px;\n                          font-size: 16px;\n                          margin-right: 10px;\n                          color: #555;\n                      }\n                      .print-photo-custom-select {\n                        position: relative;\n                        width: 360px; /* 宽度 */\n                        border: 1px solid #ccc; /* 边框 */\n                        border-radius: 5px; /* 圆角 */\n                        background: white; /* 背景颜色 */\n                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影效果 */\n                        transition: box-shadow 0.3s; /* 阴影过渡效果 */\n                      }\n              \n                      .print-photo-selected-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer;\n                        background-color: #f0f8ff; /* 选项背景颜色 */\n                        color: #333; /* 字体颜色 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                    \n                        display: flex; /* 使用弹性布局 */\n                        justify-content: space-between; /* 选项内容两边对齐 */\n                        align-items: center; /* 垂直居中对齐 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                      }\n              \n                      .print-photo-selected-option:hover {\n                        background-color: #e0f7fa; /* 鼠标悬停背景颜色 */\n                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 鼠标悬停时的阴影效果 */\n                      }\n              \n                      .print-photo-options-wrapper {\n                        display: none; /* 默认隐藏 */\n                        position: absolute;\n                        top: calc(100% + 2px); /* 向下移动2px */\n                        left: 0;\n                        right: 0;\n                      \n                        border-top: none; /* 去掉顶部边框 */\n                        background: #fafafa; /* 背景颜色 */\n                        z-index: 1000;\n                        max-height: 200px; /* 可选项最大高度 */\n                        overflow-y: auto; /* 允许滚动 */\n                        border-radius: 0 0 5px 5px; /* 圆角 */\n                        \n                        /* 隐藏滚动条 */\n                        scrollbar-width: thin; /* Firefox */\n                        scrollbar-color: #6eaea8 #db2f2f00;; /* Firefox */\n                      }\n              \n                      .print-photo-options-wrapper::-webkit-scrollbar {\n                        width: 0; /* 隐藏滚动条宽度 */\n                        background: transparent; /* 背景透明 */\n                      }\n              \n                      .print-photo-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer; /* 鼠标样式 */\n                        white-space: pre-wrap; /* 允许换行 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                        background-color: #fff;\n                      }\n              \n                      .print-photo-option:hover {\n                        background: #e0f7fa; /* 鼠标悬停效果 */\n                      }\n              \n                      /* 最后一项去掉底部边框 */\n                      .print-photo-option:last-child {\n                        margin-bottom: 0; /* 去掉最后一项的间隔 */\n                      }\n              \n                      /* 增加箭头指示 */\n                      .print-photo-arrow {\n                        border: solid #333; /* 箭头颜色 */\n                        border-width: 0 1px 1px 0; /* 箭头形状 */\n                        display: inline-block;\n                        padding: 3px;\n                        margin-left: 10px; /* 箭头与选项的间距 */\n                        transform: rotate(45deg); /* 旋转箭头 */\n                      }\n              \n                      .print-photo-input-field {\n                          flex: 1;\n                          padding: 10px;\n                          border: 1px solid #ddd;\n                          border-radius: 4px;\n                          box-sizing: border-box;\n                      }\n                      .print-photo-modal-footer {\n                          display: flex;\n                          justify-content: flex-end;\n                          gap: 10px;\n                          margin-top: 20px;\n                      }\n                      .print-photo-modal-footer button {\n                          padding: 10px 20px;\n                          border: none;\n                          border-radius: 4px;\n                          cursor: pointer;\n                          font-size: 16px;\n                          transition: background-color 0.3s;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn {\n                          background-color: #4CAF50;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn:hover {\n                          background-color: #45a049;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn {\n                          background-color: #f44336;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn:hover {\n                          background-color: #e53935;\n                      }\n                  ";
                document.head.appendChild(_0xaba323);
              }
            }
            function _0x35fbdf(_0x2d0b15, _0x1461bc, _0x558ea7) {
              _0x46f8f5();
              _0x558ea7 != "myjtm72" ? _0x1ca2b9(_0x2d0b15, _0x1461bc, _0x558ea7) : _0x2e7a16(_0x47d053, "", []);
              document.getElementById("print-photo-modal").style.display = "flex";
            }
            _0x34abce ? (_0x215b32 = _0x34abce.id, imageToBase64(chrome.runtime._0x55f5ad(_0x34abce.getAttribute("data-custom-value"))).then(_0x3bc8cf => {
              base64UploadedBarcode = _0x3bc8cf;
              if (_0x34abce.id == "myHbzx") {
                {
                  _0x2e7a16(_0x47d053, "", []);
                }
              } else {
                Object.keys(odInfo).length > 4 ? _0x35fbdf(_0x34abce.value, odInfo, _0x34abce.id) : tipBoxShow("欧代和制造商信息不完整，如您确定已经填写了欧代和制造商信息，请刷新页面后再尝试使用！", 5000);
              }
            }).catch(_0x1a8f5e => {
              console.log(_0x1a8f5e);
            })) : _0x2e7a16(_0x47d053, "", []);
          });
          _0x19ea46 != 1 && (document.querySelector("[for='" + _0x19ea46 + "']").click(), "咕噜噜打印设置（模板内支持选择西班牙标签）".replace(/\\u([\d\w]{4})/gi, (_0x7bc438, _0x58afb9) => String.fromCharCode(parseInt(_0x58afb9, 16))) == document.querySelector("#dayingululuset").innerText ? "" : !function () {
            chrome.storage._0x5e599f.set({
              codePhone: ["", ""]
            });
            window.location.reload();
          }());
        }(_0x574b9a, _0x4bf6cc, _0x19879c) : tipBoxShow("请授权后使用功能,如已授权请检查网络是否正常！", 4000);
      });
    }) : tipBoxShow("请授权后使用功能！", 4000);
  });
}
async function analyzeProductData(_0x4aae14) {
  var _0x28d536 = [];
  var _0x59dc0b = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
  var _0x3fb9e9 = {};
  _0x59dc0b.forEach(_0x4ea21b => {
    {
      var _0x4b9042 = _0x4ea21b.querySelectorAll("td");
      /^-?\d+(\.\d+)?$/.test(_0x4b9042[1].innerText) ? _0x3fb9e9[_0x4b9042[1].innerText] = parseInt(_0x4b9042[5].innerText) : _0x3fb9e9[_0x4b9042[2].innerText] = parseInt(_0x4b9042[6].querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value);
    }
  });
  if (_0x4aae14.result.list) {
    {
      for (const _0x582ce3 of _0x4aae14.result.list) {
        if (_0x582ce3._0x2de424.en.length != 0 && _0x582ce3._0x2de424.en.length == _0x582ce3._0x32c987.length) {
          var _0x5ede1c = _0x582ce3._0x2de424.en.map(_0xc2323d => _0xc2323d._0x3ab30c ? _0xc2323d._0x3ab30c : "").join("-");
        } else {
          var _0x5ede1c = _0x582ce3._0x32c987.map(_0x5a2366 => _0x5a2366._0x3ab30c ? _0x5a2366._0x3ab30c : "").join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x5ede1c)) {
            var _0x5ede1c = await getEnglishName(_0x5ede1c, _0x582ce3._0x45ab1f._0x27c959);
          }
        }
        var _0x47b7ec = _0x582ce3._0x32c987.map(_0x385526 => _0x385526._0x3ab30c ? _0x385526._0x3ab30c : "").join("-");
        if (!/[\u4e00-\u9fa5]/.test(_0x47b7ec)) {
          {
            var _0x47b7ec = await getEnglishName(_0x47b7ec, _0x582ce3._0x45ab1f._0x27c959, 2);
          }
        }
        if (_0x582ce3._0x45ab1f._0x133ced == "") {
          var _0x324399 = String(_0x582ce3._0x45ab1f._0x73bc4);
        } else {
          {
            var _0x324399 = String(_0x582ce3._0x45ab1f._0x133ced);
          }
        }
        _0x28d536.push([String(_0x582ce3._0x45ab1f._0x27c959), _0x324399, _0x5ede1c, String(_0x582ce3._0x45ab1f._0x1a8847), _0x3fb9e9[String(_0x582ce3._0x45ab1f._0x1a8847)], _0x582ce3._0x45fa67, String(_0x582ce3._0x45ab1f._0x73bc4), _0x582ce3.productId, _0x47b7ec]);
      }
    }
  } else {
    if (_0x4aae14.result._0x510d03) {
      {
        for (const _0x21b088 of _0x4aae14.result._0x510d03) {
          {
            if (_0x21b088._0x2de424.en.length != 0 && _0x21b088._0x2de424.en.length == _0x21b088._0x32c987.length) {
              var _0x5ede1c = _0x21b088._0x2de424.en.map(_0x4eb1bf => _0x4eb1bf._0x3ab30c ? _0x4eb1bf._0x3ab30c : "").join("-");
            } else {
              {
                var _0x5ede1c = _0x21b088._0x32c987.map(_0x316cdd => _0x316cdd._0x3ab30c ? _0x316cdd._0x3ab30c : "").join("-");
                if (/[\u4e00-\u9fa5]/.test(_0x5ede1c)) {
                  var _0x5ede1c = await getEnglishName(_0x5ede1c, _0x21b088._0x45ab1f._0x27c959);
                }
              }
            }
            var _0x47b7ec = _0x21b088._0x32c987.map(_0x418b6a => _0x418b6a._0x3ab30c ? _0x418b6a._0x3ab30c : "").join("-");
            if (_0x21b088._0x45ab1f._0x133ced == "") {
              {
                var _0x324399 = String(_0x21b088._0x45ab1f._0x73bc4);
              }
            } else {
              {
                var _0x324399 = String(_0x21b088._0x45ab1f._0x133ced);
              }
            }
            _0x28d536.push([String(_0x21b088._0x45ab1f._0x27c959), _0x324399, _0x5ede1c, String(_0x21b088._0x45ab1f._0x1a8847), _0x3fb9e9[String(_0x21b088._0x45ab1f._0x1a8847)], _0x21b088._0x45fa67, String(_0x21b088._0x45ab1f._0x73bc4), _0x21b088.productId, _0x47b7ec]);
          }
        }
      }
    } else {
      for (const _0xc6ce9f of _0x4aae14.result) {
        if (_0xc6ce9f._0x44b9c1.length != 0 && _0xc6ce9f._0x44b9c1.length == _0xc6ce9f._0x2a1276.length) {
          {
            var _0x5ede1c = _0xc6ce9f._0x44b9c1.map(_0x24d778 => _0x24d778._0x3ab30c).join("-");
          }
        } else {
          var _0x5ede1c = _0xc6ce9f._0x2a1276.map(_0x3fa90b => _0x3fa90b._0x3ab30c).join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x5ede1c)) {
            var _0x5ede1c = await getEnglishName(_0x5ede1c, _0xc6ce9f._0x27c959);
          }
        }
        var _0x47b7ec = _0xc6ce9f._0x2a1276.map(_0x2427d9 => _0x2427d9._0x3ab30c).join("-");
        if (!/[\u4e00-\u9fa5]/.test(_0x47b7ec)) {
          {
            var _0x47b7ec = await getEnglishName(_0x47b7ec, _0xc6ce9f._0x27c959, 2);
          }
        }
        if (_0xc6ce9f._0x133ced == "") {
          var _0x324399 = String(_0xc6ce9f._0x73bc4);
        } else {
          {
            var _0x324399 = String(_0xc6ce9f._0x133ced);
          }
        }
        _0x28d536.push([String(_0xc6ce9f._0x27c959), _0x324399, _0x5ede1c, String(_0xc6ce9f._0x1a8847), _0x3fb9e9[String(_0xc6ce9f._0x1a8847)], _0xc6ce9f._0x591559, String(_0xc6ce9f._0x73bc4), 0, _0x47b7ec]);
      }
    }
  }
  return _0x28d536;
}
async function printProductSkuLabel(_0x4f3f71, _0x4547be) {
  const _0x3f76c0 = new Headers();
  _0x3f76c0.append("accept", "*/*");
  _0x3f76c0.append("accept-language", "zh-CN,zh;q=0.9");
  _0x3f76c0.append("mallid", _0x4f3f71);
  _0x3f76c0.append("Content-Type", "application/json");
  let _0x21aa98;
  try {
    if (_0x4547be.slice(0, 2) === "WB") {
      const _0x3452ce = async (_0x109f01, _0x2dd807, _0x3cd8b9 = 5) => {
        try {
          const _0x4a57e3 = await fetch(_0x109f01, _0x2dd807);
          const _0x40b123 = await _0x4a57e3.json();
          if (!_0x40b123.success) {
            {
              throw new Error("HTTP error! Status: " + _0x4a57e3.status);
            }
          }
          return _0x40b123;
        } catch (_0xbcdf9b) {
          if (_0x3cd8b9 > 0) {
            {
              return _0x3452ce(_0x109f01, _0x2dd807, _0x3cd8b9 - 1);
            }
          }
        }
      };
      const _0x35b343 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/purchase/order/printProductSkuLabelForPurchaseOrder";
      _0x21aa98 = JSON.stringify({
        _0x5069de: [_0x4547be]
      });
      const _0x1e64ae = {
        method: "POST",
        headers: _0x3f76c0,
        body: _0x21aa98,
        redirect: "follow"
      };
      const _0x50096e = await _0x3452ce(_0x35b343, _0x1e64ae);
      await _0x50096e;
      const _0x5ec7ca = [];
      const _0x20da87 = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
      const _0x18edaf = {};
      _0x20da87.forEach(_0x49c613 => {
        const _0x3fc3ea = _0x49c613.querySelectorAll("td");
        _0x18edaf[_0x3fc3ea[1].innerText] = parseInt(_0x3fc3ea[5].innerText);
      });
      for (const _0x1fe60e of _0x50096e.result.list) {
        const _0x41b0d8 = _0x1fe60e._0x2de424.en.map(_0xbf21e8 => _0xbf21e8._0x3ab30c).join("-");
        if (_0x1fe60e._0x45ab1f._0x133ced == "") {
          var _0x1ecbc8 = String(_0x1fe60e._0x45ab1f._0x73bc4);
        } else {
          var _0x1ecbc8 = String(_0x1fe60e._0x45ab1f._0x133ced);
        }
        _0x5ec7ca.push([String(_0x1fe60e._0x45ab1f._0x27c959), _0x1ecbc8, _0x41b0d8, String(_0x1fe60e._0x45ab1f._0x1a8847), _0x18edaf[String(_0x1fe60e._0x45ab1f._0x1a8847)], _0x1fe60e._0x45fa67]);
      }
      return _0x5ec7ca;
    }
  } catch (_0x4f48a7) {
    return [];
  }
}
let plTargetSpanOk = false;
let oneTargetSpanOk = false;
let plPrintCode = false;
setInterval(() => {
  const _0x32855d = window.location.href;
  if (_0x32855d.includes("https://seller.kuajingmaihuo.com/main/order-manage") || _0x32855d.includes("https://seller.kuajingmaihuo.com/main/product/label")) {
    {
      if (!plTargetSpanOk) {
        {
          const _0x2d13fc = document.querySelector("[class*=\"order-manage_handleCnt\"]");
          const _0x288a1c = document.querySelector("[class*=\"shipping-list_flexAndColo\"]");
          const _0x3b3ffc = document.querySelector("[class*=\"product-label_dividerFieldContainer\"]");
          if (_0x2d13fc) {
            const _0x53e69d = _0x2d13fc.querySelectorAll("button");
            for (let _0x4b7df1 of _0x53e69d) {
              _0x4b7df1.innerText === "批量打印商品条码" && (plTargetSpanOk = true, _0x4b7df1.addEventListener("click", function () {
                {
                  plPrintCode = true;
                }
              }, {
                once: true
              }));
            }
          } else {
            if (_0x288a1c) {
              {
                const _0x2ef409 = _0x288a1c.querySelectorAll("button");
                for (let _0x1561f4 of _0x2ef409) {
                  _0x1561f4.innerText === "批量打印商品条码" && (plTargetSpanOk = true, _0x1561f4.addEventListener("click", function () {
                    plPrintCode = true;
                  }, {
                    once: true
                  }));
                }
              }
            } else {
              if (_0x3b3ffc) {
                {
                  const _0x16573c = _0x3b3ffc.querySelectorAll("button");
                  for (let _0x12001c of _0x16573c) {
                    _0x12001c.innerText === "批量打印条码" && (plTargetSpanOk = true, _0x12001c.addEventListener("click", function () {
                      plPrintCode = true;
                    }, {
                      once: true
                    }));
                  }
                }
              }
            }
          }
          Object.keys(odInfo).length == 0 && startCheckEuropean && (startCheckEuropean = false, fetchData().then(_0x185e6b => {
            chrome.runtime._0x1354f4({
              type: "searchEuropean",
              mallid: _0x185e6b
            }, _0x4a86a5 => {
              odInfo = _0x4a86a5.data;
              startCheckEuropean = true;
            });
          }));
        }
      }
      !oneTargetSpanOk && (oneTargetSpanOk = true, document.body.addEventListener("click", function (_0x38cca5) {
        const _0x4a2727 = _0x38cca5.target;
        var _0x393ac9 = ["打印商品条码", "批量打印商品条码", "批量打印条码"];
        if ((_0x4a2727.matches("span") || _0x4a2727.matches("button")) && _0x393ac9.includes(_0x4a2727.textContent)) {
          {
            plTargetSpanOk = false;
            !_0x4a2727.classList.contains("barcode-click-listener-added") && _0x4a2727.classList.add("barcode-click-listener-added");
            let _0x4e4375 = [];
            updateAllInnerText(_0x4a2727, _0x4e4375);
            if (_0x4e4375.length === 0) {
              {
                if (!plPrintCode) {
                  plPrintCode = false;
                  return;
                }
              }
            } else {
              {
                plPrintCode = false;
              }
            }
            var _0x414074 = setInterval(() => {
              try {
                updateAllInnerText(_0x4a2727, _0x4e4375);
                var _0xcc149f = document.createElement("style");
                _0xcc149f.innerHTML = "\n                                .pspinner {\n                                    display: inline-block;\n                                    width: 16px;\n                                    height: 16px;\n                                    border: 2px solid rgba(255, 255, 255, 0.3);\n                                    border-radius: 50%;\n                                    border-top-color: #fff;\n                                    animation: spin 1s linear infinite;\n                                    vertical-align: middle;\n                                }\n                                @keyframes spin {\n                                    to { transform: rotate(360deg); }\n                                }\n                            ";
                document.head.appendChild(_0xcc149f);
                var _0xf1cbe7 = document.querySelector("[class*=index-module__footer]");
                var _0x46a9b6 = document.querySelector("#gululuPrint");
                if (_0xf1cbe7 && !_0x46a9b6) {
                  {
                    fetch(chrome.runtime._0x55f5ad("web/img/control.png")).then(_0x130bd1 => _0x130bd1.arrayBuffer()).then(_0x3d3979 => {
                      crypto.subtle.digest("SHA-256", _0x3d3979).then(_0x11bcf9 => {
                        const _0xa48aef = Array.from(new Uint8Array(_0x11bcf9));
                        const _0xb1da8d = _0xa48aef.map(_0x2a0f32 => _0x2a0f32.toString(16).padStart(2, "0")).join("");
                        _0xb1da8d == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage._0x5e599f.set({
                          codePhone: ["", ""]
                        });
                      });
                    });
                    const _0x1d9bad = !window.location.href.includes("shipping-desk");
                    const _0x283de3 = !document.querySelector("#gululuPrint");
                    const _0x5bcab5 = document.querySelector("[data-testid=\"beast-core-drawer-content\"] tbody tr").querySelectorAll("td");
                    const _0x9bc35f = _0x5bcab5.length > 7;
                    if (_0x1d9bad && _0x283de3 && _0x9bc35f) {
                      const _0x4dbbbf = document.createElement("button");
                      _0x4dbbbf.textContent = "咕噜噜打印";
                      _0x4dbbbf.style = "\n                                        padding: 5px 20px;\n                                        background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                        color: white;\n                                        border: none;\n                                        border-radius: 5px;\n                                        cursor: pointer;\n                                        font-size: 16px;\n                                        margin-left: 10px;\n                                    ";
                      _0x4dbbbf.id = "gululuPrint";
                      _0xf1cbe7.appendChild(_0x4dbbbf);
                      "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x117390, _0x520137) => String.fromCharCode(parseInt(_0x520137, 16))) == _0x4dbbbf.textContent ? "" : !function () {
                        chrome.storage._0x5e599f.set({
                          codePhone: ["", ""]
                        });
                        window.location.reload();
                      }();
                      _0x4dbbbf.addEventListener("click", function () {
                        _0x4dbbbf.innerHTML = "<span class=\"pspinner\"></span> 咕噜噜打印";
                        _0x4dbbbf.classList.add("loading");
                        chrome.storage._0x5e599f.get("codePhone", function (_0x1be958) {
                          const _0x39ab3e = _0x1be958.codePhone;
                          if (_0x39ab3e) {
                            _0x4dbbbf.innerHTML = "咕噜噜打印";
                            let _0x30aa89;
                            let _0x2e5244 = [];
                            for (let _0x53891a of document.querySelectorAll("[class*=\"TB_tableWrapper\"]")) {
                              if (_0x53891a.innerText.includes("商品名称\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t发货数\t打印数量\t操作")) {
                                _0x30aa89 = _0x53891a.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr");
                                _0x30aa89.forEach(_0x59755a => {
                                  let _0x4bcec8 = _0x59755a.querySelectorAll("td");
                                  let _0x54e164 = _0x59755a.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value;
                                  let _0x2b3bcd = _0x4bcec8[1].innerText;
                                  _0x2e5244.push([_0x2b3bcd, _0x54e164]);
                                });
                              } else {
                                _0x53891a.innerText.includes("商品名称\t贴标签要求\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t打印数量\t操作") && (_0x30aa89 = _0x53891a.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr"), _0x30aa89.forEach(_0x297196 => {
                                  let _0x4fd577 = _0x297196.querySelectorAll("td");
                                  let _0x49cda9 = _0x297196.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value;
                                  let _0x568166 = _0x4fd577[2].innerText;
                                  _0x2e5244.push([_0x568166, _0x49cda9]);
                                }));
                              }
                            }
                            "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x20e937, _0x5700bb) => String.fromCharCode(parseInt(_0x5700bb, 16))) == document.querySelector("#gululuPrint").innerText ? "" : !function () {
                              chrome.storage._0x5e599f.set({
                                codePhone: ["", ""]
                              });
                              window.location.reload();
                            }();
                            plPrintCode ? analyzeProductData(typeof dataInfoToPrint === "string" ? JSON.parse(dataInfoToPrint) : dataInfoToPrint).then(_0x55a40b => {
                              chrome.storage._0x5e599f.get("printCodeClickMod", function (_0x308939) {
                                if (_0x308939.printCodeClickMod) {
                                  run(_0x55a40b, _0x2e5244, _0x308939.printCodeClickMod);
                                } else {
                                  {
                                    run(_0x55a40b, _0x2e5244);
                                  }
                                }
                              });
                            }) : (plPrintCode = false, analyzeProductData(typeof dataInfoToPrint === "string" ? JSON.parse(dataInfoToPrint) : dataInfoToPrint).then(_0x3f0192 => {
                              chrome.storage._0x5e599f.get("printCodeClickMod", function (_0x4cb7d5) {
                                if (_0x4cb7d5.printCodeClickMod) {
                                  {
                                    _0x4dbbbf.classList.remove("loading");
                                    run(_0x3f0192, _0x2e5244, _0x4cb7d5.printCodeClickMod);
                                  }
                                } else {
                                  _0x4dbbbf.classList.remove("loading");
                                  run(_0x3f0192, _0x2e5244);
                                }
                              });
                            }));
                          } else {
                            _0x4dbbbf.classList.remove("loading");
                            tipBoxShow("请授权后使用功能！", 4000);
                          }
                        });
                      });
                      clearInterval(_0x414074);
                    }
                  }
                }
              } catch (_0x1feb6c) {
                console.log(_0x1feb6c);
              }
            }, 1000);
          }
        }
      }));
    }
  }
}, 1000);
function updateAllInnerText(_0x5884e6, _0x5e6eb2) {
  const _0xcce0d6 = _0x5884e6.closest("tr");
  if (_0xcce0d6) {
    {
      let _0x14fe56 = _0xcce0d6.children[0].innerText.split("\n");
      if (_0x14fe56.length > 3 && _0x14fe56[0].slice(0, 2) !== "WB") {
        _0x14fe56 = _0xcce0d6.children[2].innerText.split("\n");
        _0x14fe56 = [_0x14fe56[0].replace("备货单号：", "")];
        _0x14fe56[0].slice(0, 2) !== "WB" && (_0x14fe56 = _0xcce0d6.children[4].innerText.split("\n"), _0x14fe56 = [_0x14fe56[0].replace("备货单号：", "")]);
      } else {
        {
          _0x14fe56 = _0xcce0d6.children[1].innerText.split("\n");
          _0x14fe56[0].slice(0, 2) !== "WB" && (_0x14fe56 = _0xcce0d6.children[2].innerText.split("\n"), _0x14fe56 = [_0x14fe56[0].replace("备货单号：", "")], _0x14fe56[0].slice(0, 2) !== "WB" && (_0x14fe56 = _0xcce0d6.children[4].innerText.split("\n"), _0x14fe56 = [_0x14fe56[0].replace("备货单号：", "")]));
        }
      }
      _0x5e6eb2.splice(0, _0x5e6eb2.length, ..._0x14fe56);
    }
  }
}
fetch(chrome.runtime._0x55f5ad("img/code.jpg")).then(_0x32e01c => _0x32e01c.arrayBuffer()).then(_0x55b4af => {
  crypto.subtle.digest("SHA-256", _0x55b4af).then(_0x1f700f => {
    const _0x744321 = Array.from(new Uint8Array(_0x1f700f));
    const _0x5ac371 = _0x744321.map(_0x55ebea => _0x55ebea.toString(16).padStart(2, "0")).join("");
    _0x5ac371 == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : chrome.storage._0x5e599f.set({
      codePhone: ["", ""]
    });
  });
});
fetch(chrome.runtime._0x55f5ad("web/img/logo.png")).then(_0x3f081b => _0x3f081b.arrayBuffer()).then(_0xc7fb9d => {
  crypto.subtle.digest("SHA-256", _0xc7fb9d).then(_0x3fe682 => {
    const _0x54cfcf = Array.from(new Uint8Array(_0x3fe682));
    const _0x4e40ec = _0x54cfcf.map(_0x265445 => _0x265445.toString(16).padStart(2, "0")).join("");
    _0x4e40ec == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage._0x5e599f.set({
      codePhone: ["", ""]
    });
  });
});