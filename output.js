//Wed Mar 19 2025 07:53:44 GMT+0000 (Coordinated Universal Time)
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
chrome.runtime.sendMessage({
  type: "cloudInit"
}, _0x3aa2da => {
  excludeInformation = _0x3aa2da.data[0];
  windowRegex = _0x3aa2da.data[1];
});
window.addEventListener("sentListWarehouseData", function (_0x523805) {
  var _0x90d6c3 = _0x523805.detail;
  if (_0x90d6c3.type === "listWarehouseData") {
    var _0x38d857 = typeof _0x90d6c3.data === "string" ? JSON.parse(_0x90d6c3.data) : _0x90d6c3.data;
    Object.keys(_0x38d857).length != 0 && (getListWarehouseData = _0x38d857);
  }
});
function exportToExcelToday(_0x547365) {
  const _0x5561bc = XLSX.utils.book_new();
  const _0xa65bf1 = [["备货单号", "SKC", "产品名称", "产品SKU", "SKU名称", "发货件数", "供货价", "合计"]];
  const _0x3aac55 = [];
  let _0x69fec4 = 1;
  _0x547365.forEach(_0x47e88e => {
    const _0x357aea = _0x69fec4;
    _0x47e88e[3].forEach(_0x638d89 => {
      _0xa65bf1.push([_0x47e88e[0], _0x47e88e[1], _0x47e88e[2], _0x638d89[0], _0x638d89[1], _0x638d89[2], _0x638d89[3], _0x638d89[4]]);
      _0x69fec4++;
    });
    const _0x5bc078 = _0x69fec4 - 1;
    _0x357aea !== _0x5bc078 && (_0x3aac55.push({
      s: {
        r: _0x357aea,
        c: 0
      },
      e: {
        r: _0x5bc078,
        c: 0
      }
    }), _0x3aac55.push({
      s: {
        r: _0x357aea,
        c: 1
      },
      e: {
        r: _0x5bc078,
        c: 1
      }
    }), _0x3aac55.push({
      s: {
        r: _0x357aea,
        c: 2
      },
      e: {
        r: _0x5bc078,
        c: 2
      }
    }));
  });
  const _0x4b8715 = XLSX.utils.aoa_to_sheet(_0xa65bf1);
  _0x4b8715["!merges"] = _0x3aac55;
  _0x4b8715["!cols"] = [{
    wch: 20
  }, {
    wch: 15
  }, {
    wch: 50
  }, {
    wch: 15
  }, {
    wch: 20
  }, {
    wch: 10
  }, {
    wch: 10
  }, {
    wch: 10
  }];
  const _0xfd160b = {
    font: {
      bold: true,
      color: {
        rgb: "FFFFFF"
      }
    },
    fill: {
      fgColor: {
        rgb: "4F81BD"
      }
    },
    alignment: {
      horizontal: "center",
      vertical: "center"
    }
  };
  const _0x4b68f0 = {
    alignment: {
      horizontal: "left",
      vertical: "center"
    }
  };
  for (let _0x8cb34e = 0; _0x8cb34e < _0xa65bf1[0].length; _0x8cb34e++) {
    const _0x5db7bb = XLSX.utils.encode_cell({
      r: 0,
      c: _0x8cb34e
    });
    if (!_0x4b8715[_0x5db7bb]) {
      _0x4b8715[_0x5db7bb] = {};
    }
    _0x4b8715[_0x5db7bb].s = _0xfd160b;
  }
  for (let _0x419823 = 1; _0x419823 < _0xa65bf1.length; _0x419823++) {
    for (let _0x45c1fe = 0; _0x45c1fe < _0xa65bf1[_0x419823].length; _0x45c1fe++) {
      const _0xfca87 = XLSX.utils.encode_cell({
        r: _0x419823,
        c: _0x45c1fe
      });
      if (!_0x4b8715[_0xfca87]) {
        _0x4b8715[_0xfca87] = {};
      }
      _0x4b8715[_0xfca87].s = _0x4b68f0;
    }
  }
  XLSX.utils.book_append_sheet(_0x5561bc, _0x4b8715, "今日发货数据");
  XLSX.writeFile(_0x5561bc, "今日发货数据.xlsx");
}
async function fetchDataTodyOut(_0x4526bf) {
  try {
    const _0x6ffa9d = await new Promise((_0x1ffcbb, _0x39665f) => {
      chrome.runtime.sendMessage({
        type: "getTodySendgoods",
        mallid: _0x4526bf
      }, _0x3a068e => {
        chrome.runtime.lastError ? _0x39665f(chrome.runtime.lastError) : _0x1ffcbb(_0x3a068e);
      });
    });
    return _0x6ffa9d;
  } catch (_0x4db47b) {
    throw _0x4db47b;
  }
}
async function fetchSalesManagementList(_0x24a5a2) {
  if (_0x24a5a2 === "") {
    return 0;
  }
  const _0x492c9f = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse";
  const _0x4904d7 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x24a5a2,
    "Content-Type": "application/json"
  };
  const _0x4d3981 = async (_0x1beab, _0x474e58) => {
    const _0x1083b0 = JSON.stringify({
      pageNo: _0x1beab,
      pageSize: _0x474e58,
      isLack: 0,
      selectStatusList: [10, 11],
      priceAdjustRecentDays: 7,
      onSalesDurationOfflineGte: 0,
      onSalesDurationOfflineLte: 0,
      maxRemanentInventoryNum: 1
    });
    const _0x258b65 = {
      method: "POST",
      headers: _0x4904d7,
      body: _0x1083b0,
      redirect: "follow"
    };
    while (true) {
      try {
        const _0x2f349f = await fetch(_0x492c9f, _0x258b65);
        const _0x2345e2 = await _0x2f349f.json();
        if (_0x2345e2.success === false || _0x2345e2.errorCode === 4000004) {
          await new Promise(_0x53690d => setTimeout(_0x53690d, 1500));
        } else {
          return _0x2345e2.result;
        }
      } catch (_0x167eee) {
        throw _0x167eee;
      }
    }
  };
  try {
    const _0xa4163f = await _0x4d3981(1, 10);
    if (_0xa4163f.subOrderList.length === 0) {
      return 0;
    }
    const _0x24c043 = _0xa4163f.total;
    const _0x5f52d0 = Math.ceil(_0x24c043 / 20);
    const _0x139f02 = [];
    for (let _0x5082d1 = 1; _0x5082d1 <= _0x5f52d0; _0x5082d1++) {
      _0x139f02.push(_0x4d3981(_0x5082d1, 20));
    }
    const _0x29131f = await Promise.all(_0x139f02);
    const _0x310d8b = _0x29131f.flatMap(_0x565d89 => _0x565d89.subOrderList);
    for (var _0x41f293 of _0x310d8b) {
      parseFloat(_0x41f293.skuQuantityTotalInfo.inventoryNumInfo.warehouseInventoryNum) !== 0 && submitFeedback(_0x24a5a2, _0x41f293.productSkcId);
    }
  } catch (_0x500db2) {
    return 0;
  }
}
async function submitFeedback(_0x3248c6, _0x2eb0c7) {
  const _0x49c772 = new Headers({
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x3248c6,
    "Content-Type": "application/json"
  });
  const _0x5e3141 = JSON.stringify({
    batchFeedbackDimension: 2,
    feedbackDimension: 2,
    remark: "商品已入库多天，麻烦尽快加站开售",
    feedbackType: 1,
    productSkcIdList: [_0x2eb0c7],
    feedbackProblemType: 26
  });
  const _0x3d0bce = {
    method: "POST",
    headers: _0x49c772,
    body: _0x5e3141,
    redirect: "follow"
  };
  try {
    const _0x2196b0 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x3d0bce);
    const _0x3498ed = await _0x2196b0.text();
  } catch (_0x11fb43) {}
}
async function postImageReview(_0xed4740, _0x3a2c6c) {
  const _0x592b18 = new Headers();
  _0x592b18.append("accept", "*/*");
  _0x592b18.append("mallid", _0xed4740);
  _0x592b18.append("Content-Type", "application/json");
  const _0x4e97b9 = JSON.stringify({
    batchFeedbackDimension: 2,
    feedbackType: 1,
    productSkcIdList: [_0x3a2c6c],
    feedbackProblemType: 29,
    remark: "上新好久了，因图审还没过。麻烦尽快催一下图片审核，加速上新"
  });
  const _0x15c35d = {
    method: "POST",
    headers: _0x592b18,
    body: _0x4e97b9,
    redirect: "follow"
  };
  try {
    const _0x33aa0d = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/batchSubmitFeedback", _0x15c35d);
    await new Promise(_0x17dbe1 => setTimeout(_0x17dbe1, 500));
  } catch (_0x410b87) {}
}
async function fetchPhotoOldList(_0x3a1e87) {
  if (_0x3a1e87 === "") {
    return 0;
  }
  const _0x1c1218 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse";
  const _0x2ce843 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x3a1e87,
    "Content-Type": "application/json"
  };
  const _0x58254b = async (_0x77d026, _0x1ef3ea) => {
    const _0x46f811 = JSON.stringify({
      pageNo: _0x77d026,
      pageSize: _0x1ef3ea,
      isLack: 0,
      pictureAuditStatusList: [1],
      priceAdjustRecentDays: 7
    });
    const _0x41e5a9 = {
      method: "POST",
      headers: _0x2ce843,
      body: _0x46f811,
      redirect: "follow"
    };
    while (true) {
      try {
        const _0x4d6f0d = await fetch(_0x1c1218, _0x41e5a9);
        const _0x12b5c4 = await _0x4d6f0d.json();
        if (_0x12b5c4.success === false) {
          await new Promise(_0x34275d => setTimeout(_0x34275d, 1000));
        } else {
          await new Promise(_0xf371f4 => setTimeout(_0xf371f4, 500));
          return _0x12b5c4.result;
        }
      } catch (_0x138aa3) {
        throw _0x138aa3;
      }
    }
  };
  try {
    const _0x154154 = await _0x58254b(1, 1);
    if (_0x154154.subOrderList.length === 0) {
      return 0;
    }
    const _0x975a6d = _0x154154.total;
    const _0xf9baed = Math.ceil(_0x975a6d / 20);
    const _0xa54085 = [];
    for (let _0x19298e = 1; _0x19298e <= _0xf9baed; _0x19298e++) {
      _0xa54085.push(_0x58254b(_0x19298e, 20));
    }
    const _0xf1642c = await Promise.all(_0xa54085);
    const _0x9893b1 = _0xf1642c.flatMap(_0xc7ccee => _0xc7ccee.subOrderList);
    for (var _0x1302db of _0x9893b1) {
      postImageReview(_0x3a1e87, _0x1302db.productSkcId);
    }
  } catch (_0x11f96e) {
    return 0;
  }
}
async function refPriceAdj(_0x37eaba, _0x39994a, _0x2a2320 = 0) {
  const _0x3182ff = new Headers();
  _0x3182ff.append("accept", "*/*");
  _0x3182ff.append("mallid", _0x37eaba);
  _0x3182ff.append("Content-Type", "application/json");
  let _0x32098a;
  if (_0x39994a.length == 1) {
    _0x32098a = JSON.stringify({
      adjustId: _0x39994a[0],
      result: 2,
      reason: "做不了"
    });
  } else {
    if (_0x39994a.length > 1) {
      const _0x3ce040 = Object.fromEntries(_0x39994a.map(_0x539f10 => [_0x539f10, 2]));
      _0x32098a = JSON.stringify({
        adjustResultMap: _0x3ce040,
        adjustId: _0x39994a[0],
        result: 2
      });
    }
  }
  const _0x27545e = {
    method: "POST",
    headers: _0x3182ff,
    body: _0x32098a,
    redirect: "follow"
  };
  const _0x44132e = 3;
  let _0x1bac8a = 0;
  if (_0x2a2320 == 0) {
    var _0xcedc30 = "https://seller.kuajingmaihuo.com/gmp/bg/magneto/api/price/purchase-adjust/review";
  } else {
    var _0xcedc30 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price/purchase-adjust/review";
  }
  while (_0x1bac8a < _0x44132e) {
    try {
      const _0x57a412 = await fetch(_0xcedc30, _0x27545e);
      const _0x318787 = await _0x57a412.json();
      if (_0x318787.success == false) {
        if (_0x318787.errorMsg != "核价单状态已变更, 请刷新页面重试") {
          throw new Error("请求失败");
        }
      }
      return;
    } catch (_0x8181f) {
      _0x1bac8a++;
      _0x1bac8a < _0x44132e && (await new Promise(_0x352b9c => setTimeout(_0x352b9c, 1500)));
    }
  }
}
async function queryRefPriceAdj(_0x1cc59e, _0x34b046 = 1) {
  if (_0x1cc59e === "") {
    return 0;
  }
  var _0x361e14 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query";
  const _0x867531 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x1cc59e,
    "Content-Type": "application/json"
  };
  var _0x37b7ef = 0;
  const _0x277570 = async (_0x4f59cd, _0x51ef6e) => {
    if (_0x34b046 == 1) {
      var _0x1c24cc = JSON.stringify({
        pageInfo: {
          pageSize: _0x51ef6e,
          pageNo: _0x4f59cd
        },
        status: 1
      });
    } else {
      var _0x1c24cc = JSON.stringify({
        pageInfo: {
          pageSize: _0x51ef6e,
          pageNo: _0x4f59cd
        },
        priceType: 0,
        status: 1
      });
    }
    const _0x494a59 = {
      method: "POST",
      headers: _0x867531,
      body: _0x1c24cc,
      redirect: "follow"
    };
    var _0x447fbb = 10;
    var _0x672a8a = 0;
    while (_0x447fbb > _0x672a8a) {
      try {
        const _0x439891 = await fetch(_0x361e14, _0x494a59);
        const _0x307be7 = await _0x439891.json();
        if (_0x307be7.success === false) {
          _0x307be7.errorMsg.includes("半托管") && (_0x361e14 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magnus/price-adjust/page-query", _0x37b7ef = 1);
          _0x672a8a = _0x672a8a + 1;
          await new Promise(_0xb3b354 => setTimeout(_0xb3b354, 1000));
        } else {
          return _0x307be7.result.list ? _0x307be7.result : (_0x307be7.result.list = [], _0x307be7.result);
        }
      } catch (_0x5762f6) {
        throw _0x5762f6;
      }
    }
  };
  try {
    const _0x486638 = await _0x277570(1, 1);
    if (_0x486638.list.length === 0) {
      return 0;
    }
    const _0x597a97 = _0x486638.total;
    const _0x374377 = Math.ceil(_0x597a97 / 40) + 1;
    var _0x29e48c = [];
    const _0x2046ef = 1;
    for (let _0x4fbb30 = 1; _0x4fbb30 <= _0x374377; _0x4fbb30++) {
      _0x29e48c = [];
      const _0x50aa68 = _0x277570(1, 40).then(_0x4ef513 => _0x29e48c.push(_0x4ef513));
      if (_0x29e48c.length % _0x2046ef === 0 || _0x4fbb30 === _0x374377) {
        await _0x50aa68;
        const _0x435b1b = _0x29e48c.flatMap(_0x130f4b => _0x130f4b.list);
        const _0x4e2053 = _0x435b1b.reduce((_0x11869b, _0x3c25bb) => {
          _0x3c25bb && (!_0x11869b[_0x3c25bb.skcId] && (_0x11869b[_0x3c25bb.skcId] = []), _0x11869b[_0x3c25bb.skcId].push([..._0x3c25bb.skuInfoItemList.map(_0x55a4bb => _0x55a4bb.spec).sort(), _0x3c25bb.id]));
          return _0x11869b;
        }, {});
        for (var _0x201e54 of Object.values(_0x4e2053)) {
          const _0x26456f = groupValues(_0x201e54);
          for (var _0x1f8cb4 of _0x26456f) {
            const _0x219b0a = _0x1f8cb4.map(_0x20c607 => _0x20c607[_0x20c607.length - 1]).filter(_0x3dd811 => typeof _0x3dd811 === "number");
            await refPriceAdj(_0x1cc59e, _0x219b0a, _0x37b7ef);
          }
        }
      }
    }
  } catch (_0x16ec22) {
    console.log(_0x16ec22);
    return 0;
  }
}
async function cancelCreation(_0x351a50, _0x1f458b) {
  const _0x151422 = new Headers();
  _0x151422.append("accept", "*/*");
  _0x151422.append("mallid", _0x351a50);
  _0x151422.append("Content-Type", "application/json");
  const _0x1d470a = JSON.stringify({
    subPurchaseOrderSnList: [_0x1f458b]
  });
  const _0x4557c5 = {
    method: "POST",
    headers: _0x151422,
    body: _0x1d470a,
    redirect: "follow"
  };
  try {
    const _0x274ff1 = await fetch("https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/batchCancelSubPurchaseOrder", _0x4557c5);
  } catch (_0x55b66f) {}
}
async function queryStockList(_0x142083) {
  if (_0x142083 === "") {
    return 0;
  }
  const _0x1434ac = "https://seller.kuajingmaihuo.com/oms/bg/venom/api/supplier/purchase/manager/querySubOrderList";
  const _0xcfd6e2 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x142083,
    "Content-Type": "application/json"
  };
  const _0x472c78 = async (_0x54ab8d, _0x2de4c6) => {
    const _0x2e8606 = JSON.stringify({
      pageNo: _0x54ab8d,
      pageSize: _0x2de4c6,
      urgencyType: 0,
      isCustomGoods: false,
      statusList: [0],
      oneDimensionSort: {
        firstOrderByParam: "expectLatestDeliverTime",
        firstOrderByDesc: 0
      }
    });
    const _0x5c35fa = {
      method: "POST",
      headers: _0xcfd6e2,
      body: _0x2e8606,
      redirect: "follow"
    };
    while (true) {
      try {
        const _0x4c6823 = await fetch(_0x1434ac, _0x5c35fa);
        const _0x4abc25 = await _0x4c6823.json();
        if (_0x4abc25.success === false || _0x4abc25.errorCode === 4000004) {
          await new Promise(_0x4f7279 => setTimeout(_0x4f7279, 1500));
        } else {
          return _0x4abc25.result;
        }
      } catch (_0x5823ed) {
        throw _0x5823ed;
      }
    }
  };
  try {
    const _0x407110 = await _0x472c78(1, 1);
    if (_0x407110.subOrderForSupplierList.length === 0) {
      return 0;
    }
    const _0x1d37e9 = _0x407110.total;
    const _0x40b009 = Math.ceil(_0x1d37e9 / 20);
    const _0x18439a = [];
    for (let _0x53b2c3 = 1; _0x53b2c3 <= _0x40b009; _0x53b2c3++) {
      _0x18439a.push(_0x472c78(_0x53b2c3, 20));
    }
    const _0x4f421d = await Promise.all(_0x18439a);
    var _0x27296d = _0x4f421d.flatMap(_0x402c47 => _0x402c47.subOrderForSupplierList);
    for (var _0x27535e of _0x27296d) {
      cancelCreation(_0x142083, _0x27535e.subPurchaseOrderSn);
    }
  } catch (_0x2cd82c) {
    return 0;
  }
}
async function submitFeedbackP(_0x3b5559, _0x28aaf3) {
  const _0xc9dbb0 = new Headers();
  _0xc9dbb0.append("accept", "*/*");
  _0xc9dbb0.append("mallid", _0x3b5559);
  _0xc9dbb0.append("Content-Type", "application/json");
  const _0x2718f2 = JSON.stringify({
    feedbackType: 2,
    feedbackDimension: 2,
    productSkcId: _0x28aaf3,
    feedbackProblemType: 42,
    remark: "该产品已经降价，前端售价异常，麻烦前端同步一下价格"
  });
  const _0x57f422 = {
    method: "POST",
    headers: _0xc9dbb0,
    body: _0x2718f2,
    redirect: "follow"
  };
  try {
    const _0xdb65ad = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0x57f422);
    const _0x28a2f2 = await _0xdb65ad.text();
  } catch (_0x225824) {
    console.error(_0x225824);
  }
}
async function syncPriceList(_0x53737a) {
  if (_0x53737a === "") {
    return 0;
  }
  const _0x4b27c5 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/magneto/price-adjust/page-query";
  const _0x307877 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x53737a,
    "Content-Type": "application/json"
  };
  const _0x15ad01 = async (_0xd9c1b9, _0x46486d) => {
    const _0x4b0326 = JSON.stringify({
      pageInfo: {
        pageSize: _0x46486d,
        pageNo: _0xd9c1b9
      },
      status: 2,
      createdAtBegin: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
      createdAtEnd: new Date(new Date().setHours(23, 59, 59, 999)).getTime()
    });
    const _0x1bee95 = {
      method: "POST",
      headers: _0x307877,
      body: _0x4b0326,
      redirect: "follow"
    };
    while (true) {
      try {
        const _0x32e75e = await fetch(_0x4b27c5, _0x1bee95);
        const _0x2ed214 = await _0x32e75e.json();
        if (_0x2ed214.success === false) {
          await new Promise(_0x2d765a => setTimeout(_0x2d765a, 500));
        } else {
          return _0x2ed214.result;
        }
      } catch (_0x3c22e6) {
        throw _0x3c22e6;
      }
    }
  };
  try {
    const _0x22cb04 = await _0x15ad01(1, 1);
    if (_0x22cb04.list.length === 0) {
      return 0;
    }
    const _0x27bdc6 = _0x22cb04.total;
    const _0x2e1014 = Math.ceil(_0x27bdc6 / 20);
    const _0x470a1d = [];
    for (let _0x11f5a8 = 1; _0x11f5a8 <= _0x2e1014; _0x11f5a8++) {
      _0x470a1d.push(_0x15ad01(_0x11f5a8, 20));
    }
    const _0x247780 = await Promise.all(_0x470a1d);
    const _0x12e588 = _0x247780.flatMap(_0x1a5fe9 => _0x1a5fe9.list);
    const _0x15d7b3 = _0x12e588.map(_0x5a2f16 => _0x5a2f16.skcId);
    const _0x161eaf = [...new Set(_0x15d7b3)];
    for (const _0x84d6c4 of _0x161eaf) {
      submitFeedbackP(_0x53737a, _0x84d6c4);
    }
  } catch (_0x4d00c6) {
    return 0;
  }
}
async function submitJGSB(_0x1a619a, _0x4a23e5) {
  const _0x27be8b = new Headers();
  _0x27be8b.append("accept", "*/*");
  _0x27be8b.append("mallid", _0x1a619a);
  _0x27be8b.append("Content-Type", "application/json");
  const _0x5b1a8d = JSON.stringify({
    feedbackType: 2,
    productSkuId: _0x4a23e5,
    feedbackProblemType: 34,
    remark: "上新很久了，价格一直申报中，麻烦处理一下！"
  });
  const _0x3d7465 = {
    method: "POST",
    headers: _0x27be8b,
    body: _0x5b1a8d,
    redirect: "follow"
  };
  try {
    const _0x1bd79d = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/ultraman/FeedbackMmsExecuteRpcService/submitFeedback", _0x3d7465);
    const _0x17cb11 = await _0x1bd79d.text();
  } catch (_0xe4d7e1) {
    console.error(_0xe4d7e1);
  }
}
async function synchjPriceList(_0x107581) {
  if (_0x107581 === "") {
    return 0;
  }
  const _0x23af3 = "https://seller.kuajingmaihuo.com/marvel-supplier/api/xmen/select/search";
  const _0x3b9555 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    mallid: _0x107581,
    "Content-Type": "application/json"
  };
  const _0xb6e166 = async (_0xc536c5, _0xb9aa29) => {
    const _0x13bcf2 = JSON.stringify({
      pageSize: _0xb9aa29,
      pageNum: _0xc536c5,
      priceReviewStatusList: [0],
      secondarySelectStatusList: [7],
      supplierTodoTypeList: []
    });
    const _0x51f370 = {
      method: "POST",
      headers: _0x3b9555,
      body: _0x13bcf2,
      redirect: "follow"
    };
    while (true) {
      try {
        const _0x21a5f1 = await fetch(_0x23af3, _0x51f370);
        const _0x23c745 = await _0x21a5f1.json();
        if (_0x23c745.success === false) {
          await new Promise(_0x1a4de9 => setTimeout(_0x1a4de9, 500));
        } else {
          return _0x23c745.result;
        }
      } catch (_0x1972b5) {
        throw _0x1972b5;
      }
    }
  };
  try {
    const _0x1cc5e7 = await _0xb6e166(1, 1);
    if (_0x1cc5e7.dataList.length === 0) {
      return 0;
    }
    const _0x4d2023 = _0x1cc5e7.total;
    const _0x5de083 = Math.ceil(_0x4d2023 / 20);
    const _0x33c665 = [];
    for (let _0x56a66b = 1; _0x56a66b <= _0x5de083; _0x56a66b++) {
      _0x33c665.push(_0xb6e166(_0x56a66b, 20));
    }
    const _0x47e375 = await Promise.all(_0x33c665);
    const _0x1f2d3b = _0x47e375.flatMap(_0x16a233 => _0x16a233.dataList);
    const _0x38ab43 = _0x1f2d3b.map(_0x1a2fe9 => _0x1a2fe9.skcList[0].skuList[0].skuId);
    const _0x20b6be = [...new Set(_0x38ab43)];
    for (const _0x108bd9 of _0x20b6be) {
      submitJGSB(_0x107581, _0x108bd9);
    }
  } catch (_0x1dcc18) {
    return 0;
  }
}
var cssUrl = chrome.runtime.getURL("web/css/flatpickr.min.css");
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
function loadScripts(_0x414f4c) {
  _0x414f4c.forEach(_0x5d3c13 => {
    const _0x5113eb = document.createElement("script");
    _0x5113eb.setAttribute("src", chrome.runtime.getURL(_0x5d3c13));
    document.head.appendChild(_0x5113eb);
  });
}
loadScripts(["web/js/hxk.js"]);
loadScripts(["web/js/exceljs.min.js"]);
loadScripts(["web/js/exexportPhotoDataToExcel.js"]);
chrome.runtime.onMessage.addListener(function (_0x13a8cf, _0x6347a8, _0xf8bd9e) {
  if (_0x13a8cf.type === "webData") {
    myMessage = typeof _0x13a8cf.data === "string" ? JSON.parse(_0x13a8cf.data) : _0x13a8cf.data;
    _0xf8bd9e({
      status: "success"
    });
    return true;
  } else {
    if (_0x13a8cf.type === "baodanBoxaddSiteBg") {
      createLoader();
      fetchData().then(_0x3f18fa => {
        fetchSalesManagementList(_0x3f18fa).then(() => {
          removeLoader();
          _0xf8bd9e({
            status: "success"
          });
          showCustomAlert("入库商品已完成加站点反馈。");
        });
      });
      return true;
    } else {
      if (_0x13a8cf.type === "addPhotoSiteBg") {
        createLoader();
        fetchData().then(_0xdd08b8 => {
          fetchPhotoOldList(_0xdd08b8).then(() => {
            removeLoader();
            _0xf8bd9e({
              status: "success"
            });
            showCustomAlert("商品已完成图审申请。");
          });
        });
        return true;
      } else {
        if (_0x13a8cf.type === "cancelAllStockListBg") {
          createLoader();
          fetchData().then(_0xf0f545 => {
            queryStockList(_0xf0f545).then(() => {
              removeLoader();
              _0xf8bd9e({
                status: "success"
              });
              showCustomAlert("已完成，请点击查询或刷新页面查看！");
            });
          });
          return true;
        } else {
          if (_0x13a8cf.type === "applyPriceSyncBg") {
            createLoader();
            fetchData().then(_0x187c4f => {
              syncPriceList(_0x187c4f).then(() => {
                removeLoader();
                _0xf8bd9e({
                  status: "success"
                });
                showCustomAlert("当天调价商品已完成同步调价申请");
              });
            });
            return true;
          } else {
            if (_0x13a8cf.type === "urgePriceSyncBg") {
              createLoader();
              fetchData().then(_0x3e18b7 => {
                synchjPriceList(_0x3e18b7).then(() => {
                  removeLoader();
                  _0xf8bd9e({
                    status: "success"
                  });
                  showCustomAlert("价格申报中的商品已经成功反馈！");
                });
              });
              return true;
            } else {
              if (_0x13a8cf.type === "refusePriceSyncAllBg") {
                createLoader();
                fetchData().then(_0x4cff87 => {
                  queryRefPriceAdj(_0x4cff87).then(() => {
                    removeLoader();
                    _0xf8bd9e({
                      status: "success"
                    });
                    showCustomAlert("所有待确认调价的商品，已全部拒绝！");
                  });
                });
                return true;
              } else {
                if (_0x13a8cf.type === "refusePriceSyncDailyBg") {
                  createLoader();
                  fetchData().then(_0x48f366 => {
                    queryRefPriceAdj(_0x48f366, 2).then(() => {
                      removeLoader();
                      _0xf8bd9e({
                        status: "success"
                      });
                      showCustomAlert("日常待确认调价的商品，已全部拒绝！");
                    });
                  });
                  return true;
                } else {
                  if (_0x13a8cf.type === "exportShippedTodayBg") {
                    createLoader();
                    fetchData().then(_0x7e759d => {
                      fetchDataTodyOut(_0x7e759d).then(_0x228590 => {
                        var _0x460d9c = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0));
                        var _0x225f37 = [];
                        for (var _0x22545e = 0; _0x22545e < _0x228590.length; _0x22545e++) {
                          var _0x5c7611 = [];
                          var _0x10eaa2 = _0x228590[_0x22545e];
                          if (parseInt(_0x10eaa2.deliverInfo.deliverTime) >= _0x460d9c) {
                            var _0x40e230 = _0x10eaa2.subPurchaseOrderSn;
                            var _0x12f795 = _0x10eaa2.productSkcId;
                            var _0x30612f = _0x10eaa2.productName;
                            for (var _0x294436 = 0; _0x294436 < _0x10eaa2.skuQuantityDetailList.length; _0x294436++) {
                              var _0x2c3371 = _0x10eaa2.skuQuantityDetailList[_0x294436].productSkuId;
                              var _0x4868b3 = _0x10eaa2.skuQuantityDetailList[_0x294436].className;
                              var _0x3f887c = parseInt(_0x10eaa2.skuQuantityDetailList[_0x294436].deliverQuantity) ? parseFloat(_0x10eaa2.skuQuantityDetailList[_0x294436].deliverQuantity) : 0;
                              var _0x57c50c = parseFloat(_0x10eaa2.skuQuantityDetailList[_0x294436].supplierPrice) ? parseFloat(_0x10eaa2.skuQuantityDetailList[_0x294436].supplierPrice) / 100 : 0;
                              var _0x1b0eb2 = _0x3f887c * _0x57c50c;
                              _0x5c7611.push([_0x2c3371, _0x4868b3, _0x3f887c, _0x57c50c.toFixed(2), _0x1b0eb2.toFixed(2)]);
                            }
                            _0x225f37.push([_0x40e230, _0x12f795, _0x30612f, _0x5c7611]);
                          }
                        }
                        _0xf8bd9e({
                          status: "success"
                        });
                        removeLoader();
                        exportToExcelToday(_0x225f37);
                      }).catch(_0x5ea516 => {
                        removeLoader();
                        _0xf8bd9e({
                          status: "no"
                        });
                        showCustomAlert("导出数据不完整，请检查网络后重新尝试");
                      });
                    });
                    return true;
                  } else {
                    if (_0x13a8cf.type === "exportShippedHistoryBg") {
                      var _0x5ce2ba = _0x13a8cf.startDate;
                      var _0x754b94 = _0x13a8cf.endDate;
                      createLoader();
                      getMallId().then(_0x5632d4 => {
                        chrome.runtime.sendMessage({
                          type: "exportStockListHistory",
                          mallId: _0x5632d4,
                          startDate: _0x5ce2ba,
                          endDate: _0x754b94
                        }).then(_0x1dc303 => {
                          if (_0x1dc303) {
                            var _0x4b43d5 = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                            exportPhotoDataToExcel(_0x1dc303, _0x4b43d5, 1, _0x5ce2ba + "至" + _0x754b94 + "已发货备货单数据.xlsx");
                            _0xf8bd9e({
                              status: "success"
                            });
                          } else {
                            removeLoader();
                            _0xf8bd9e({
                              status: "no"
                            });
                          }
                        });
                      });
                      return true;
                    } else {
                      if (_0x13a8cf.type === "exportSalesHistoryAllBg") {
                        var _0x5ce2ba = _0x13a8cf.startDate;
                        var _0x754b94 = _0x13a8cf.endDate;
                        createLoader();
                        getMallId().then(_0x28590f => {
                          chrome.runtime.sendMessage({
                            type: "exportSalesHistory",
                            mallId: _0x28590f,
                            startDate: _0x5ce2ba,
                            endDate: _0x754b94
                          }).then(_0x4723d1 => {
                            var _0x5d4f8e = _0x4723d1.saveSaleExcel;
                            _0x5d4f8e ? (removeLoader(), _0x5d4f8e.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x5ce2ba + "至" + _0x754b94 + "销量", "当前仓内可用库存"]), exportToExcel(_0x4723d1.saveSaleExcel, _0x5ce2ba + "至" + _0x754b94 + "销售数据.xlsx"), _0xf8bd9e({
                              status: "success"
                            })) : (removeLoader(), _0xf8bd9e({
                              status: "no"
                            }));
                          });
                        });
                        return true;
                      } else {
                        if (_0x13a8cf.type === "exportReturnDetailBg") {
                          var _0x5ce2ba = _0x13a8cf.startDate;
                          var _0x754b94 = _0x13a8cf.endDate;
                          createLoader();
                          getMallId().then(_0x3699a0 => {
                            chrome.runtime.sendMessage({
                              type: "exportTuihuoDetail",
                              mallId: _0x3699a0,
                              startDate: _0x5ce2ba,
                              endDate: _0x754b94
                            }).then(_0x5bff88 => {
                              var _0x56c4ab = new Date(parseInt(_0x5ce2ba)).toISOString().slice(0, 19).replace("T", " ");
                              var _0x27b3ba = new Date(parseInt(_0x754b94)).toISOString().slice(0, 19).replace("T", " ");
                              if (_0x5bff88) {
                                var _0x13a5d3 = ["SPU", "SKU", "商品图片", "sku属性信息", "备货单号", "退货原因", "退货包裹号", "SKU件数", "出库时间"];
                                exportPhotoDataToExcel(_0x5bff88, _0x13a5d3, 2, _0x56c4ab + "至" + _0x27b3ba + "退货明细数据.xlsx");
                                _0xf8bd9e({
                                  status: "success"
                                });
                              } else {
                                removeLoader();
                                _0xf8bd9e({
                                  status: "no"
                                });
                              }
                            });
                          });
                          return true;
                        } else {
                          if (_0x13a8cf.type === "exportConsumerAfterSalesIssuesBg") {
                            var _0x5ce2ba = _0x13a8cf.startDate;
                            var _0x754b94 = _0x13a8cf.endDate;
                            createLoader();
                            getMallId().then(_0x2a8f5b => {
                              chrome.runtime.sendMessage({
                                type: "exportConsumerAfterSales",
                                mallId: _0x2a8f5b,
                                startDate: _0x5ce2ba,
                                endDate: _0x754b94
                              }).then(_0x2fcee0 => {
                                var _0x5c394d = new Date(parseInt(_0x5ce2ba)).toISOString().slice(0, 19).replace("T", " ");
                                var _0x4e367b = new Date(parseInt(_0x754b94)).toISOString().slice(0, 19).replace("T", " ");
                                if (_0x2fcee0.length > 0) {
                                  removeLoader();
                                  var _0x1813c1 = Object.values(_0x2fcee0.reduce((_0x493a00, [_0x509520, _0x4549bd, _0x1d6403, _0x370637, _0x4ba36b, _0xb544dd, _0x5e1799]) => {
                                    if (!_0x493a00[_0x4549bd]) {
                                      _0x493a00[_0x4549bd] = [_0x509520, _0x4549bd, _0x1d6403, _0x370637, 0, _0xb544dd, _0x5e1799];
                                    }
                                    _0x493a00[_0x4549bd][4] += parseFloat(_0x4ba36b);
                                    return _0x493a00;
                                  }, {}));
                                  _0x2fcee0.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                  _0x1813c1.unshift(["违规ID", "SKU ID", "商品名称", "SKU货号", "赔付金额", "币种", "到账时间"]);
                                  exportToExcel(_0x2fcee0, _0x5c394d + "至" + _0x4e367b + "消费者及履约保障-售后问题.xlsx", _0x1813c1);
                                  _0xf8bd9e({
                                    status: "success"
                                  });
                                } else {
                                  removeLoader();
                                  _0xf8bd9e({
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
function getToggleState(_0x500793) {
  return new Promise(_0x4a292d => {
    chrome.storage.local.get(_0x500793, function (_0x233553) {
      _0x4a292d(_0x233553[_0x500793] ? JSON.parse(_0x233553[_0x500793]) : false);
    });
  });
}
function showPopup(_0x2af7de) {
  const _0x18f6c7 = document.createElement("div");
  _0x18f6c7.classList.add("popup");
  _0x18f6c7.style.position = "fixed";
  _0x18f6c7.style.top = "0";
  _0x18f6c7.style.left = "0";
  _0x18f6c7.style.width = "100%";
  _0x18f6c7.style.height = "100%";
  _0x18f6c7.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  _0x18f6c7.style.display = "flex";
  _0x18f6c7.style.justifyContent = "center";
  _0x18f6c7.style.alignItems = "center";
  _0x18f6c7.style.zIndex = "1000";
  const _0x3d3c1c = document.createElement("div");
  _0x3d3c1c.classList.add("popup-content");
  _0x3d3c1c.style.backgroundColor = "#ffffff";
  _0x3d3c1c.style.padding = "20px";
  _0x3d3c1c.style.borderRadius = "8px";
  _0x3d3c1c.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
  _0x3d3c1c.style.maxWidth = "90%";
  _0x3d3c1c.style.maxHeight = "80%";
  _0x3d3c1c.style.overflowY = "auto";
  _0x3d3c1c.style.position = "relative";
  _0x3d3c1c.style.animation = "slideIn 0.3s ease-in-out";
  const _0x5f0b8e = document.createElement("button");
  _0x5f0b8e.classList.add("close-btn");
  _0x5f0b8e.innerText = "关闭";
  _0x5f0b8e.style.position = "absolute";
  _0x5f0b8e.style.top = "5px";
  _0x5f0b8e.style.right = "15px";
  _0x5f0b8e.style.backgroundColor = "#ff4d4d";
  _0x5f0b8e.style.color = "white";
  _0x5f0b8e.style.border = "none";
  _0x5f0b8e.style.cursor = "pointer";
  _0x5f0b8e.style.borderRadius = "5px";
  _0x5f0b8e.style.transition = "background-color 0.3s ease";
  _0x5f0b8e.addEventListener("click", function () {
    _0x18f6c7.remove();
  });
  _0x5f0b8e.addEventListener("mouseover", function () {
    _0x5f0b8e.style.backgroundColor = "#e03e3e";
  });
  _0x5f0b8e.addEventListener("mouseout", function () {
    _0x5f0b8e.style.backgroundColor = "#ff4d4d";
  });
  _0x3d3c1c.appendChild(_0x5f0b8e);
  const _0xa438b2 = document.createElement("div");
  _0xa438b2.style.display = "flex";
  _0xa438b2.style.justifyContent = "center";
  _0xa438b2.style.marginBottom = "20px";
  const _0xb186bd = ["全部", "进行中", "未开始"];
  _0xb186bd.forEach(_0x31675e => {
    const _0x324481 = document.createElement("button");
    _0x324481.innerText = _0x31675e;
    _0x324481.style.backgroundColor = "transparent";
    _0x324481.style.color = "#333";
    _0x324481.style.border = "1px solid #ccc";
    _0x324481.style.padding = "8px 16px";
    _0x324481.style.margin = "0 10px";
    _0x324481.style.cursor = "pointer";
    _0x324481.style.borderRadius = "5px";
    _0x324481.style.transition = "all 0.3s ease";
    _0x324481.addEventListener("click", function () {
      _0x1814df(_0x31675e);
    });
    _0x324481.addEventListener("mouseover", function () {
      _0x324481.style.backgroundColor = "#f1f1f1";
    });
    _0x324481.addEventListener("mouseout", function () {
      _0x324481.style.backgroundColor = "transparent";
    });
    _0xa438b2.appendChild(_0x324481);
  });
  _0x3d3c1c.appendChild(_0xa438b2);
  const _0xcef773 = document.createElement("div");
  _0xcef773.id = "coupon-container";
  _0x3d3c1c.appendChild(_0xcef773);
  const _0x2596a9 = document.createElement("table");
  _0x2596a9.style.width = "100%";
  _0x2596a9.style.borderCollapse = "collapse";
  _0x2596a9.style.tableLayout = "fixed";
  _0x2596a9.style.marginTop = "20px";
  const _0x22a42d = document.createElement("thead");
  const _0x3de8ce = document.createElement("tr");
  const _0x5f32b5 = ["SKU属性集", "日常申报价", "活动申报价", "报名时间", "活动类型", "报名场次", "提报数量", "剩余数量", "活动状态"];
  _0x5f32b5.forEach(_0x26a633 => {
    const _0x901e26 = document.createElement("th");
    _0x901e26.innerText = _0x26a633;
    _0x901e26.style.padding = "12px";
    _0x901e26.style.textAlign = "left";
    _0x901e26.style.borderBottom = "1px solid #e0e0e0";
    _0x901e26.style.backgroundColor = "#f8f9fa";
    _0x901e26.style.color = "#333";
    _0x901e26.style.fontWeight = "bold";
    _0x901e26.style.position = "sticky";
    _0x901e26.style.top = "0";
    _0x3de8ce.appendChild(_0x901e26);
  });
  _0x22a42d.appendChild(_0x3de8ce);
  _0x2596a9.appendChild(_0x22a42d);
  const _0x521dd8 = document.createElement("tbody");
  const _0x3a426e = [..._0x2af7de];
  function _0x1814df(_0x2000d7) {
    let _0x416a8f;
    if (_0x2000d7 === "全部") {
      _0x416a8f = _0x3a426e;
    } else {
      if (_0x2000d7 === "进行中") {
        _0x416a8f = _0x3a426e.filter(_0x5099c6 => _0x5099c6[8] === "进行中");
      } else {
        _0x2000d7 === "未开始" && (_0x416a8f = _0x3a426e.filter(_0x1c5dc5 => _0x1c5dc5[8] === "未开始"));
      }
    }
    _0x521dd8.innerHTML = "";
    _0x416a8f.forEach(_0x5f5625 => {
      const _0x347176 = document.createElement("tr");
      let _0x35d47e = _0x5f5625[5].slice(0, 3);
      let _0x16b385 = "<span class=\"moreActivate\" style=\"color: rgb(0, 123, 255); cursor: pointer; text-decoration: underline;\">更多</span>";
      _0x347176.innerHTML = "\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[0] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[1] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[2] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[3] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[4] + "</td>\n                <td style=\"font-size: 13px; padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">\n                    " + _0x35d47e.join("<br>") + "<br>" + _0x16b385 + "\n                </td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[6] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[7] + "</td>\n                <td style=\"padding: 12px; text-align: left; border-bottom: 1px solid #e0e0e0;\">" + _0x5f5625[8] + "</td>\n            ";
      _0x521dd8.appendChild(_0x347176);
      _0x347176.querySelector(".moreActivate").addEventListener("click", function () {
        toggleMorePopup(this, _0x5f5625[5].join("<br>"));
      });
    });
  }
  _0x2596a9.appendChild(_0x521dd8);
  _0x3d3c1c.appendChild(_0x2596a9);
  _0x18f6c7.appendChild(_0x3d3c1c);
  document.body.appendChild(_0x18f6c7);
  _0x1814df("全部");
  _0x2596a9.style.maxHeight = "500px";
  _0x2596a9.style.overflowY = "auto";
  _0x2596a9.style.display = "block";
  _0x2596a9.style.scrollbarWidth = "thin";
  _0x2596a9.style.scrollbarColor = "#007bff #f1f1f1";
  _0x2596a9.style.webkitOverflowScrolling = "touch";
  const _0x4f597f = _0x2596a9.querySelector("::-webkit-scrollbar-thumb");
  _0x4f597f && (_0x4f597f.style.backgroundColor = "#007bff", _0x4f597f.style.borderRadius = "5px");
  const _0x253fd8 = _0x2596a9.querySelector("::-webkit-scrollbar-track");
  _0x253fd8 && (_0x253fd8.style.backgroundColor = "#f1f1f1", _0x253fd8.style.borderRadius = "5px");
  const _0x2f29d5 = _0x3d3c1c.querySelectorAll(".more");
  _0x2f29d5.forEach(_0x21f91e => {
    _0x21f91e.style.color = "#007bff";
    _0x21f91e.style.cursor = "pointer";
    _0x21f91e.style.textDecoration = "underline";
  });
}
function generateCouponHTML(_0x5b4dee) {
  if (_0x5b4dee.length === 0) {
    const _0x2be88b = document.createElement("div");
    _0x2be88b.style.cssText = "font-family: Arial, sans-serif; color: #777; text-align: center; font-size: 14px; padding: 20px;";
    _0x2be88b.textContent = "暂无可显示的券信息";
    document.getElementById("coupon-container").appendChild(_0x2be88b);
    return;
  }
  const _0xc3b14b = document.createElement("div");
  _0xc3b14b.style.cssText = "font-family: Arial, sans-serif; max-width: 100%; margin: 10px auto; padding: 8px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between; font-size: 15px;";
  const [_0x10bc77, _0x2c125b, _0x14e79b, _0x3aaab8, _0x486655, _0x23a60a] = _0x5b4dee[0];
  const _0x38c73f = document.createElement("span");
  _0x38c73f.style.cssText = "font-weight: bold; color: #333; flex-basis: 100%; text-align: center; font-size: 14px;";
  _0x38c73f.textContent = "【" + _0x10bc77 + "】";
  _0xc3b14b.appendChild(_0x38c73f);
  const _0x40b4ed = document.createElement("div");
  _0x40b4ed.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap; justify-content: space-around; width: 100%; text-align: center;";
  const _0x31b615 = [{
    label: "券金额",
    value: "CNY " + _0x2c125b,
    color: "#f56c6c"
  }, {
    label: "发行数量",
    value: _0x14e79b,
    color: "#2d8cf0"
  }, {
    label: "领券数量",
    value: _0x3aaab8,
    color: "#2d8cf0"
  }, {
    label: "用券数量",
    value: _0x486655,
    color: "#2d8cf0"
  }];
  _0x31b615.forEach(_0x7b0398 => {
    const _0x555640 = document.createElement("span");
    _0x555640.style.color = "#555";
    _0x555640.innerHTML = _0x7b0398.label + " <strong style=\"color: " + _0x7b0398.color + "; font-size: 22px;\">" + _0x7b0398.value + "</strong>";
    _0x40b4ed.appendChild(_0x555640);
  });
  _0xc3b14b.appendChild(_0x40b4ed);
  const _0x15dbb2 = document.createElement("div");
  _0x15dbb2.style.cssText = "width: 100%; text-align: center; color: #555; font-size: 13px;";
  _0x15dbb2.innerHTML = "发券时间 <strong style=\"color: #999;\">" + _0x23a60a + "</strong>";
  _0xc3b14b.appendChild(_0x15dbb2);
  document.getElementById("coupon-container").appendChild(_0xc3b14b);
}
async function getSkuCoupon(_0x2cf4a8, _0x5e07bb) {
  const _0x30e0e3 = new Headers();
  _0x30e0e3.append("accept", "*/*");
  _0x30e0e3.append("accept-language", "zh-CN,zh;q=0.9");
  _0x30e0e3.append("cache-control", "no-cache");
  _0x30e0e3.append("content-type", "application/json");
  _0x30e0e3.append("mallid", _0x5e07bb);
  const _0x1d659e = JSON.stringify({
    pageNo: 1,
    pageSize: 10,
    productSkuIds: [_0x2cf4a8],
    state: 1
  });
  const _0x5a78c3 = {
    method: "POST",
    headers: _0x30e0e3,
    body: _0x1d659e,
    redirect: "follow"
  };
  let _0x51e69f = 0;
  let _0x1e847f;
  let _0x550beb;
  while (_0x51e69f < 3) {
    try {
      _0x1e847f = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/coupon/page/query", _0x5a78c3);
      if (!_0x1e847f.ok) {
        throw new Error("请求失败，状态码: " + _0x1e847f.status);
      }
      _0x550beb = await _0x1e847f.json();
      break;
    } catch (_0x2dbf20) {
      _0x51e69f++;
      console.error("第 " + _0x51e69f + " 次请求失败:", _0x2dbf20);
      if (_0x51e69f >= 3) {
        _0x550beb = {
          result: {
            goodsCoupons: []
          }
        };
        break;
      }
    }
  }
  var _0x1395c6 = _0x550beb.result.goodsCoupons;
  if (_0x1395c6.length == 0) {
    return [];
  }
  var _0x1d5b61 = [];
  for (let _0x5d40b6 = 0; _0x5d40b6 < _0x1395c6.length; _0x5d40b6++) {
    var _0x1ea67d = (parseFloat(_0x1395c6[_0x5d40b6].couponAmount) / 100).toFixed(2);
    var _0x51f996 = _0x1395c6[_0x5d40b6].punishCount;
    var _0xbc5710 = _0x1395c6[_0x5d40b6].claimedCount;
    var _0x1db1b9 = _0x1395c6[_0x5d40b6].useCount;
    var _0x5d25ff = new Date(parseInt(_0x1395c6[_0x5d40b6].beginTime)).toISOString().slice(0, 10) + " 00:00:00" + " ～ " + new Date(parseInt(_0x1395c6[_0x5d40b6].endTime)).toISOString().slice(0, 10) + " 23:59:59";
    var _0x4a10ff = [_0x1395c6[_0x5d40b6].title, _0x1ea67d, _0x51f996, _0xbc5710, _0x1db1b9, _0x5d25ff];
    _0x1d5b61.push(_0x4a10ff);
  }
  return _0x1d5b61;
}
function toggleMorePopup(_0x2c0343, _0x51bbc5) {
  try {
    const _0x6937cd = document.createElement("div");
    _0x6937cd.style.zIndex = "9999";
    _0x6937cd.style.width = "activateFit-content";
    _0x6937cd.style.maxHeight = "250px";
    _0x6937cd.style.display = "block";
    _0x6937cd.style.position = "fixed";
    _0x6937cd.style.backgroundColor = "#fff";
    _0x6937cd.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    _0x6937cd.style.borderRadius = "5px";
    _0x6937cd.style.fontSize = "13px";
    const _0x11a486 = document.createElement("div");
    _0x11a486.style.maxHeight = "200px";
    _0x11a486.style.overflowY = "auto";
    _0x11a486.style.scrollbarWidth = "thin";
    _0x11a486.style.scrollbarColor = "hsl(205deg, 16%, 77%) rgb(241, 241, 241);";
    _0x11a486.style.padding = "10px";
    _0x11a486.style.whiteSpace = "pre-wrap";
    _0x11a486.style.wordWrap = "break-word";
    _0x11a486.innerHTML = _0x51bbc5;
    _0x6937cd.appendChild(_0x11a486);
    const _0x18ef1e = document.createElement("span");
    _0x18ef1e.innerHTML = "&#10006;";
    _0x18ef1e.style.position = "absolute";
    _0x18ef1e.style.top = "5px";
    _0x18ef1e.style.right = "20px";
    _0x18ef1e.style.fontSize = "20px";
    _0x18ef1e.style.cursor = "pointer";
    _0x18ef1e.style.color = "#999";
    _0x18ef1e.style.transition = "color 0.3s";
    _0x18ef1e.addEventListener("click", function () {
      _0x6937cd.remove();
    });
    _0x18ef1e.addEventListener("mouseover", function () {
      _0x18ef1e.style.color = "#ff4d4d";
    });
    _0x18ef1e.addEventListener("mouseout", function () {
      _0x18ef1e.style.color = "#999";
    });
    const _0x1ab03d = _0x2c0343.getBoundingClientRect();
    _0x6937cd.style.left = _0x1ab03d.left + window.scrollX + "px";
    _0x6937cd.style.top = _0x1ab03d.top + window.scrollY - _0x6937cd.offsetHeight - 5 + "px";
    _0x6937cd.appendChild(_0x18ef1e);
    document.body.appendChild(_0x6937cd);
  } catch (_0x3cb02b) {
    console.log(_0x3cb02b);
  }
}
function tipBoxShowBu(_0x246b61, _0x2d8718) {
  const _0x12825f = document.createElement("div");
  _0x12825f.textContent = _0x246b61;
  _0x12825f.style.position = "fixed";
  _0x12825f.style.top = "40%";
  _0x12825f.style.left = "40%";
  _0x12825f.style.transform = "translate(-50%, -50%)";
  _0x12825f.style.backgroundColor = "#e8f5e9";
  _0x12825f.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0x12825f.style.color = "#1b5e20";
  _0x12825f.style.padding = "20px 30px";
  _0x12825f.style.borderRadius = "12px";
  _0x12825f.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0x12825f.style.fontSize = "18px";
  _0x12825f.style.fontFamily = "Arial, sans-serif";
  _0x12825f.style.textAlign = "center";
  _0x12825f.style.maxWidth = "80%";
  _0x12825f.style.wordWrap = "break-word";
  _0x12825f.style.zIndex = "1000";
  _0x12825f.style.display = "none";
  _0x12825f.style.opacity = "0";
  _0x12825f.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0x12825f);
  setTimeout(() => {
    _0x12825f.style.display = "block";
    _0x12825f.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0x12825f.style.opacity = "0";
    setTimeout(() => {
      _0x12825f.style.display = "none";
      document.body.removeChild(_0x12825f);
    }, 500);
  }, _0x2d8718);
}
function createLoader(_0x453e33 = 1) {
  var _0x3aa99e = document.createElement("div");
  _0x3aa99e.id = "loader";
  _0x3aa99e.style.position = "fixed";
  _0x3aa99e.style.top = "0";
  _0x3aa99e.style.left = "0";
  _0x3aa99e.style.width = "100%";
  _0x3aa99e.style.height = "100%";
  _0x3aa99e.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  _0x3aa99e.style.display = "flex";
  _0x3aa99e.style.flexDirection = "column";
  _0x3aa99e.style.justifyContent = "center";
  _0x3aa99e.style.alignItems = "center";
  _0x3aa99e.style.zIndex = "9999";
  var _0x17497b = document.createElement("div");
  _0x17497b.style.position = "relative";
  _0x17497b.style.width = "128px";
  _0x17497b.style.height = "128px";
  for (let _0x24dccc = 0; _0x24dccc < 3; _0x24dccc++) {
    let _0x6a8e4c = document.createElement("div");
    _0x6a8e4c.style.position = "absolute";
    _0x6a8e4c.style.width = "128px";
    _0x6a8e4c.style.height = "128px";
    _0x6a8e4c.style.border = "8px solid transparent";
    _0x6a8e4c.style.borderTop = "8px solid #ffffff";
    _0x6a8e4c.style.borderRadius = "50%";
    _0x6a8e4c.style.animation = "spin 1.2s linear infinite";
    _0x6a8e4c.style.animationDelay = _0x24dccc * 0.4 + "s";
    _0x17497b.appendChild(_0x6a8e4c);
  }
  if (_0x453e33 != 1) {
    var _0x45cb7d = document.createElement("button");
    _0x45cb7d.textContent = "0";
    _0x45cb7d.style.position = "absolute";
    _0x45cb7d.style.top = "50%";
    _0x45cb7d.style.left = "50%";
    _0x45cb7d.style.transform = "translate(-50%, -50%)";
    _0x45cb7d.style.padding = "10px 20px";
    _0x45cb7d.style.backgroundColor = "rgb(255 255 255 / 0%)";
    _0x45cb7d.style.border = "none";
    _0x45cb7d.style.borderRadius = "5px";
    _0x45cb7d.style.cursor = "pointer";
    _0x45cb7d.style.height = "70px";
    _0x45cb7d.style.width = "70px";
    _0x45cb7d.style.fontSize = "20px";
    _0x45cb7d.style.color = "#fff";
    var _0x37c4c1 = 0;
    var _0x53e8b7 = setInterval(function () {
      if (!_0x45cb7d.isConnected) {
        clearInterval(_0x53e8b7);
        return;
      }
      _0x37c4c1++;
      _0x45cb7d.textContent = _0x37c4c1;
    }, 1000);
    _0x17497b.appendChild(_0x45cb7d);
  }
  _0x3aa99e.appendChild(_0x17497b);
  var _0x406623 = document.createElement("div");
  _0x406623.id = "loader-message";
  _0x406623.style.marginTop = "20px";
  _0x406623.style.color = "#ffffff";
  _0x406623.style.fontSize = "18px";
  _0x406623.innerHTML = "处理中，请等待一会...";
  _0x3aa99e.appendChild(_0x406623);
  document.body.appendChild(_0x3aa99e);
  var _0x594b09 = document.createElement("style");
  _0x594b09.type = "text/css";
  var _0x999b85 = "\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n    ";
  _0x594b09.innerHTML = _0x999b85;
  document.getElementsByTagName("head")[0].appendChild(_0x594b09);
}
function updateLoaderMessage(_0x4321a1) {
  var _0x1b9097 = document.getElementById("loader-message");
  _0x1b9097 && (_0x1b9097.innerHTML = _0x4321a1);
}
function removeLoader() {
  var _0x161d75 = document.getElementById("loader");
  _0x161d75 && document.body.removeChild(_0x161d75);
}
async function generateDeviceFingerprint() {
  function _0x4878bd() {
    var _0x538bd5 = [];
    _0x538bd5.push(navigator.userAgent);
    _0x538bd5.push(navigator.platform);
    _0x538bd5.push(screen.width + "x" + screen.height);
    _0x538bd5.push(navigator.language);
    _0x538bd5.push(new Date().getTimezoneOffset());
    var _0x5137a6 = document.createElement("canvas");
    var _0x351093 = _0x5137a6.getContext("2d");
    _0x351093.textBaseline = "top";
    _0x351093.font = "14px Arial";
    _0x351093.textBaseline = "alphabetic";
    _0x351093.fillStyle = "#f60";
    _0x351093.fillRect(125, 1, 62, 20);
    _0x351093.fillStyle = "#069";
    _0x351093.fillText("Hello, world!", 2, 15);
    _0x351093.fillStyle = "rgba(102, 204, 0, 0.7)";
    _0x351093.fillText("Hello, world!", 4, 17);
    var _0x2f74a5 = _0x5137a6.toDataURL();
    _0x538bd5.push(_0x2f74a5);
    _0x538bd5.push(navigator.hardwareConcurrency);
    _0x538bd5.push(navigator.deviceMemory);
    _0x538bd5.push(navigator.maxTouchPoints);
    var _0x5a5b97 = _0x538bd5.join("|");
    return _0x5a5b97;
  }
  async function _0x5b3cf3(_0x57f5f5) {
    const _0x28600b = new TextEncoder().encode(_0x57f5f5);
    const _0x1fdad9 = await crypto.subtle.digest("SHA-256", _0x28600b);
    const _0x96248e = Array.from(new Uint8Array(_0x1fdad9));
    const _0x5d79fd = _0x96248e.map(_0x228773 => _0x228773.toString(16).padStart(2, "0")).join("");
    return _0x5d79fd.substr(0, 32);
  }
  var _0x95769b = _0x4878bd();
  return await _0x5b3cf3(_0x95769b);
}
async function getMallId() {
  try {
    await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
    var _0x3a3658 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
    var _0x478ad6 = {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    };
  } catch (_0x1c096d) {}
  try {
    var _0x3a3035 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
      method: "POST",
      headers: _0x478ad6,
      body: {},
      credentials: "include"
    });
    var _0x3096c7 = await _0x3a3035.json();
    var _0x46af13 = _0x3096c7.result.companyList[0].malInfoList.find(function (_0x2d4ce1) {
      return _0x3a3658 === _0x2d4ce1.mallName;
    });
    return _0x46af13 ? _0x46af13.mallId : null;
  } catch (_0xf34a8) {
    throw _0xf34a8;
  }
}
async function waitForConsumerConsultation(_0x34670b, _0x28aa8d) {
  let _0x499034 = 0;
  const _0xc7b26c = 30000;
  while (_0x499034 < _0xc7b26c) {
    let _0x3eb1a7 = document.querySelector(_0x34670b);
    if (_0x3eb1a7 && _0x3eb1a7.textContent.includes(_0x28aa8d)) {
      return;
    }
    await new Promise(_0x39d2e7 => setTimeout(_0x39d2e7, 1000));
    _0x499034 += 1000;
  }
}
async function fetchSizeGuide(_0xb7ffd2) {
  const _0x1dd8c4 = new Headers({
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8"
  });
  const _0x7d0486 = JSON.stringify({
    front_supports: ["supportSizeGuideV2Logic"],
    not_login_show_size_recommend: 1,
    goods_id: _0xb7ffd2
  });
  const _0x46e43f = {
    method: "POST",
    headers: _0x1dd8c4,
    body: _0x7d0486,
    redirect: "follow"
  };
  try {
    const _0x831063 = await fetch("https://www.temu.com/api/oak/size_guide/render", _0x46e43f);
    const _0x16035b = await _0x831063.json();
    if (_0x16035b.success != false) {
      var _0x112e90 = _0x16035b.size_chart.product_measurement[0].records_inch;
      var _0x52adcd = {};
      _0x112e90.forEach(_0x5e4b12 => {
        for (const _0x242e48 in _0x5e4b12) {
          !isNaN(_0x242e48) && _0x242e48 > 1 && _0x242e48 < 55 && (_0x52adcd[_0x5e4b12[_0x242e48]] = _0x5e4b12["1"]);
        }
      });
      sizeGuide = _0x52adcd;
    }
  } catch (_0x1c7192) {}
}
async function dataMy(_0x512d4c) {
  var _0xe3c39d = {
    productSkuVolumeReq: {
      len: 80,
      width: 70,
      height: 60
    },
    productSkuWeightReq: {
      value: 6000
    },
    productSkuBarCodeReqs: [],
    productSkuSensitiveAttrReq: {
      isSensitive: 0,
      sensitiveList: []
    },
    productSkuSensitiveLimitReq: {}
  };
  const _0x455c32 = await new Promise((_0x300994, _0x26e9ac) => {
    chrome.runtime.sendMessage({
      type: "fanyi",
      fyText: _0x512d4c.goods.goods_name,
      model: "en"
    }, _0x5a8c29 => {
      _0x5a8c29 && _0x5a8c29.data && _0x5a8c29.data.fanyi ? _0x300994(_0x5a8c29.data.fanyi) : _0x26e9ac(new Error("Translation failed"));
    });
  });
  await _0x455c32;
  dd = {
    catId: _0x512d4c.goods.cat_id,
    cat1Id: _0x512d4c.goods.cat_id_1,
    cat2Id: _0x512d4c.goods.cat_id_2,
    cat3Id: _0x512d4c.goods.cat_id_3,
    cat4Id: _0x512d4c.goods.cat_id_4,
    cat5Id: 0,
    cat6Id: 0,
    cat7Id: 0,
    cat8Id: 0,
    cat9Id: 0,
    cat10Id: 0,
    materialMultiLanguages: [],
    productI18nReqs: [{
      productName: _0x512d4c.goods.goods_name,
      language: "en"
    }],
    productName: _0x455c32,
    productPropertyReqs: [],
    productSkcReqs: [{
      previewImgUrls: [_0x512d4c.goods.hd_thumb_url],
      productSkcCarouselImageI18nReqs: [],
      extCode: "",
      mainProductSkuSpecReqs: [{
        parentSpecId: 0,
        parentSpecName: "",
        specId: 0,
        specName: ""
      }],
      productSkcId: 0,
      productSkuReqs: []
    }],
    productSpecPropertyReqs: [],
    carouselImageUrls: _0x512d4c.goods.gallery.map(function (_0x2cecc9) {
      return _0x2cecc9.url;
    }),
    carouselImageI18nReqs: [],
    materialImgUrl: _0x512d4c.goods.hd_thumb_url,
    goodsLayerDecorationReqs: [],
    goodsLayerDecorationCustomizeI18nReqs: [],
    sizeTemplateIds: [],
    showSizeTemplateIds: [],
    goodsModelReqs: [],
    productWhExtAttrReq: {
      outerGoodsUrl: "",
      productOrigin: {
        countryShortName: "CN"
      }
    },
    productCarouseVideoReqList: [],
    goodsAdvantageLabelTypes: [],
    productDetailVideoReqList: [],
    productOuterPackageImageReqs: [{
      imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
    }, {
      imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
    }, {
      imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
    }],
    productOuterPackageReq: {},
    sensitiveTransNormalFileReqs: [],
    productGuideFileI18nReqs: [],
    productSaleExtAttrReq: {
      bodyShape: null
    },
    productNonAuditExtAttrReq: {
      california65WarningInfoReq: {
        california65WarningType: null,
        california65ChemicalNames: null
      },
      cosmeticInfoReq: {}
    },
    personalizationSwitch: 0,
    productDraftId: 0
  };
  const _0x3a9830 = {
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
  for (const _0x4226ac of _0x512d4c.sku) {
    const _0x3f6480 = {
      thumbUrl: "",
      productSkuThumbUrlI18nReqs: [],
      extCode: "",
      supplierPrice: (parseFloat(_0x4226ac.sale_price_rich[1].text.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
      currencyType: "CNY",
      productSkuSpecReqs: [],
      productSkuId: 0,
      productSkuSuggestedPriceReq: {
        specialSuggestedPrice: "NA"
      },
      productSkuWhExtAttrReq: Object.assign({}, _0xe3c39d)
    };
    for (var _0x43b1cd of _0x4226ac.specs) {
      var _0x191752 = {
        parentSpecId: "",
        parentSpecName: "",
        specId: "",
        specName: ""
      };
      _0x3f6480.thumbUrl = _0x4226ac.thumb_url;
      _0x191752.parentSpecId = _0x43b1cd.spec_key_id;
      _0x191752.parentSpecName = _0x3a9830[_0x43b1cd.spec_key_id];
      _0x191752.specId = _0x43b1cd.spec_value_id;
      _0x191752.specName = _0x43b1cd.spec_value.slice(0, 30);
      _0x3f6480.productSkuSpecReqs.push(_0x191752);
      const _0x2c56ba = Object.assign({
        refPid: 0,
        pid: 0,
        templatePid: 0,
        propName: _0x3a9830[_0x43b1cd.spec_key_id],
        vid: 0,
        propValue: _0x43b1cd.spec_value.slice(0, 30),
        valueUnit: "",
        valueGroupId: 0,
        valueGroupName: "",
        valueExtendInfo: ""
      }, _0x191752);
      dd.productSpecPropertyReqs.push(_0x2c56ba);
    }
    dd.productSkcReqs[0].productSkuReqs.push(_0x3f6480);
  }
  dd.productSpecPropertyReqs = [...new Set(dd.productSpecPropertyReqs)];
  for (let _0x5cd801 = 0; _0x5cd801 < _0x512d4c.decoration.floor_list.length; _0x5cd801++) {
    const _0x102d9f = _0x512d4c.decoration.floor_list[_0x5cd801];
    let _0xb21080;
    let _0x1a24c6;
    _0x102d9f.contents[0].text ? (_0xb21080 = {
      floorId: null,
      lang: "zh",
      key: "DecImage",
      type: "text",
      priority: _0x5cd801,
      contentList: [{
        text: _0x102d9f.contents[0].text,
        textModuleDetails: {
          fontSize: _0x102d9f.contents[0].text_module_element_dto.font_size,
          fontColor: _0x102d9f.contents[0].text_module_element_dto.font_color,
          fontFamily: null,
          align: _0x102d9f.contents[0].text_module_element_dto.align,
          backgroundColor: _0x102d9f.contents[0].text_module_element_dto.background_color
        }
      }]
    }, dd.goodsLayerDecorationReqs.push(_0xb21080)) : (_0x1a24c6 = {
      floorId: null,
      lang: "zh",
      key: "DecImage",
      type: "image",
      priority: _0x5cd801,
      contentList: [{
        imgUrl: _0x102d9f.contents[0].img_url,
        height: _0x102d9f.contents[0].height,
        width: _0x102d9f.contents[0].width
      }]
    }, dd.goodsLayerDecorationReqs.push(_0x1a24c6));
  }
  for (let _0x4575a6 of _0x512d4c.goods.goods_property) {
    const _0x124da2 = {
      propValue: "",
      propName: "",
      refPid: 0,
      vid: 0,
      pid: 0,
      templatePid: 0,
      valueExtendInfo: "",
      valueUnit: "",
      numberInputValue: ""
    };
    _0x4575a6.hasOwnProperty("key") && _0x4575a6.hasOwnProperty("values") && _0x4575a6.hasOwnProperty("ref_pid") && (_0x124da2.propName = _0x4575a6.key, _0x124da2.propValue = _0x4575a6.values[0], _0x124da2.refPid = _0x4575a6.ref_pid, dd.productPropertyReqs.push(_0x124da2));
  }
  return dd;
}
async function quickTranslation(_0x253a01, _0x34539a) {
  return new Promise((_0x356005, _0x367904) => {
    chrome.runtime.sendMessage({
      type: "fanyi",
      fyText: _0x253a01,
      model: _0x34539a
    }, _0x1a3478 => {
      _0x1a3478 && _0x1a3478.data ? (fanyi = _0x1a3478.data.fanyi, _0x356005(_0x1a3478.data.fanyi)) : _0x367904(new Error("Translation failed"));
    });
  });
}
function sanitizeFileName(_0x21ff86) {
  return _0x21ff86.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "").trim();
}
async function generateProductData(_0x29b27f) {
  try {
    var _0xc6f24e = 0;
    const _0x27439f = document.querySelectorAll("script");
    var _0x509092;
    for (const _0x3468fb of _0x27439f) {
      if (_0x3468fb.innerText.includes("window.rawData")) {
        const _0x158797 = /window\.rawData=(.*?);document/s;
        const _0x3ce150 = _0x3468fb.innerText.match(_0x158797);
        if (_0x3ce150) {
          const _0xd6cea9 = _0x3ce150[1];
          _0x509092 = JSON.parse(_0xd6cea9).store;
          var _0x1ce58d = {
            productSkuVolumeReq: {
              len: 80,
              width: 70,
              height: 60
            },
            productSkuWeightReq: {
              value: 6000
            },
            productSkuBarCodeReqs: [],
            productSkuSensitiveAttrReq: {
              isSensitive: 0,
              sensitiveList: []
            },
            productSkuSensitiveLimitReq: {}
          };
          var _0x308847 = {};
          return new Promise((_0x42ebd7, _0x5dbbe3) => {
            fanyi = "";
            var _0x498674 = /[\u4e00-\u9fa5]/.test(_0x509092.goods.goodsName);
            _0x498674 ? quickTranslation(_0x509092.goods.goodsName, "zh") : quickTranslation(_0x509092.goods.goodsName, "en");
            var _0x1adfa7 = _0x509092.preloadFirstImgList.slice(0, 10);
            var _0x46a362 = [];
            var _0x1fa8e0 = _0x1adfa7.map(_0x2dbb91 => generatePhotoNewUrl(_0x2dbb91, _0x29b27f).then(_0x154cb0 => {
              _0x46a362.push(_0x154cb0.url);
              _0x308847[_0x2dbb91] = _0x154cb0.url;
            }).catch(_0x42cdc0 => {}));
            Promise.all(_0x1fa8e0).then(async () => {
              try {
                await fetchSizeGuide(_0x509092.goodsId);
                dd = {
                  catId: _0x509092.goods.catId,
                  cat1Id: _0x509092.goods.catId1,
                  cat2Id: _0x509092.goods.catId2,
                  cat3Id: _0x509092.goods.catId3,
                  cat4Id: _0x509092.goods.catId4,
                  cat5Id: 0,
                  cat6Id: 0,
                  cat7Id: 0,
                  cat8Id: 0,
                  cat9Id: 0,
                  cat10Id: 0,
                  materialMultiLanguages: [],
                  productI18nReqs: [{
                    productName: _0x509092.goods.goodsName,
                    language: "en"
                  }],
                  productName: _0x509092.goods.goodsName,
                  productPropertyReqs: [],
                  productSkcReqs: [{
                    previewImgUrls: [_0x509092.preloadFirstImgList[0]],
                    productSkcCarouselImageI18nReqs: [],
                    extCode: "",
                    mainProductSkuSpecReqs: [{
                      parentSpecId: 0,
                      parentSpecName: "",
                      specId: 0,
                      specName: ""
                    }],
                    productSkcId: 0,
                    productSkuReqs: []
                  }],
                  productSpecPropertyReqs: [],
                  carouselImageUrls: _0x46a362,
                  carouselImageI18nReqs: [],
                  materialImgUrl: _0x46a362[0],
                  goodsLayerDecorationReqs: [],
                  goodsLayerDecorationCustomizeI18nReqs: [],
                  sizeTemplateIds: [],
                  showSizeTemplateIds: [],
                  goodsModelReqs: [],
                  productWhExtAttrReq: {
                    outerGoodsUrl: "",
                    productOrigin: {
                      countryShortName: "CN"
                    }
                  },
                  productCarouseVideoReqList: [{
                    vid: _0x509092.goods.video !== undefined ? _0x509092.goods.video.vid : "",
                    videoUrl: _0x509092.goods.video !== undefined ? _0x509092.goods.video.videoUrl : "",
                    coverUrl: _0x509092.goods.video !== undefined ? _0x509092.goods.video.url : "",
                    videoType: 1,
                    width: _0x509092.goods.video !== undefined ? _0x509092.goods.video.width : "",
                    height: _0x509092.goods.video !== undefined ? _0x509092.goods.video.height : ""
                  }],
                  goodsAdvantageLabelTypes: [],
                  productDetailVideoReqList: [],
                  productOuterPackageImageReqs: [{
                    imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/9ad55ad0-9fa5-43c4-99b4-120c6aa1858c_4624x3472.jpeg"
                  }, {
                    imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/c342fa2a-0701-4c91-a667-55cfe453037b_4624x3472.jpeg"
                  }, {
                    imageUrl: "https://kjpfs-cn.kuajingmaihuo.com/product-material-private-tag/1f135082178/85619823-1ea7-4ef6-8a24-9a27de8b648c_4624x3472.jpeg"
                  }],
                  productOuterPackageReq: {},
                  sensitiveTransNormalFileReqs: [],
                  productGuideFileI18nReqs: [],
                  productSaleExtAttrReq: {
                    bodyShape: null
                  },
                  productNonAuditExtAttrReq: {
                    california65WarningInfoReq: {
                      california65WarningType: null,
                      california65ChemicalNames: null
                    },
                    cosmeticInfoReq: {}
                  },
                  personalizationSwitch: 0,
                  productDraftId: 0
                };
                if (_0x509092.guideFile) {
                  var _0xe25013 = await getLanguage(_0x509092.guideFile.url);
                  dd.productGuideFileI18nReqs = [{
                    languages: _0xe25013,
                    language: "en",
                    fileName: _0x509092.guideFile.name,
                    fileUrl: _0x509092.guideFile.url
                  }];
                }
                const _0x1fab5c = {
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
                for (const _0x4b2a91 of _0x509092.sku) {
                  const _0x1c324b = {
                    thumbUrl: "",
                    productSkuThumbUrlI18nReqs: [],
                    extCode: "",
                    supplierPrice: (parseFloat(_0x4b2a91.normalPriceStr.replace(/[^\d.]/g, "")) * 7 / 2 * 0.8).toFixed(2) * 200,
                    currencyType: "CNY",
                    productSkuSpecReqs: [],
                    productSkuId: 0,
                    productSkuSuggestedPriceReq: {
                      specialSuggestedPrice: "NA"
                    },
                    productSkuWhExtAttrReq: Object.assign({}, _0x1ce58d)
                  };
                  for (var _0x5023d4 of _0x4b2a91.specs) {
                    var _0x1314c5 = {
                      parentSpecId: "",
                      parentSpecName: "",
                      specId: "",
                      specName: ""
                    };
                    if (!_0x308847[_0x4b2a91.thumbUrl]) {
                      var _0x287f9d = await generatePhotoNewUrl(_0x4b2a91.thumbUrl, _0x29b27f);
                      _0x308847[_0x4b2a91.thumbUrl] = _0x308847[_0x4b2a91.thumbUrl];
                    }
                    _0x1c324b.thumbUrl = _0x308847[_0x4b2a91.thumbUrl];
                    _0x1314c5.parentSpecId = _0x5023d4.specKeyId;
                    _0x1314c5.parentSpecName = _0x1fab5c[_0x5023d4.specKeyId];
                    _0x1314c5.specId = _0x5023d4.specValueId;
                    var _0x5045d7 = "";
                    _0x1fab5c[_0x5023d4.specKeyId] == "尺码" ? (_0x5045d7 = sizeGuide[_0x5023d4.specValue.slice(0, 30)], _0x1314c5.specName = _0x5045d7) : (_0x5045d7 = _0x5023d4.specValue.slice(0, 30), _0x1314c5.specName = _0x5045d7);
                    _0x1c324b.productSkuSpecReqs.push(_0x1314c5);
                    const _0x34bf7a = Object.assign({
                      refPid: 0,
                      pid: 0,
                      templatePid: 0,
                      propName: _0x1fab5c[_0x5023d4.specKeyId],
                      vid: 0,
                      propValue: _0x5045d7,
                      valueUnit: "",
                      valueGroupId: 0,
                      valueGroupName: "",
                      valueExtendInfo: ""
                    }, _0x1314c5);
                    dd.productSpecPropertyReqs.push(_0x34bf7a);
                  }
                  dd.productSkcReqs[0].productSkuReqs.push(_0x1c324b);
                }
                dd.productSpecPropertyReqs = [...new Set(dd.productSpecPropertyReqs)];
                if (_0x509092.productDetail.floorList) {
                  for (let _0x341572 = 0; _0x341572 < _0x509092.productDetail.floorList.length; _0x341572++) {
                    const _0x88d987 = _0x509092.productDetail.floorList[_0x341572];
                    let _0x2f4814;
                    let _0x5482f7;
                    if (_0x88d987.items[0].text) {
                      _0x2f4814 = {
                        floorId: null,
                        lang: "zh",
                        key: "DecImage",
                        type: "text",
                        priority: _0x341572,
                        contentList: [{
                          text: _0x88d987.items[0].text,
                          textModuleDetails: {
                            fontSize: _0x88d987.items[0].textFormat.fontSize,
                            fontColor: _0x88d987.items[0].textFormat.fontColor,
                            fontFamily: null,
                            align: _0x88d987.style.align,
                            backgroundColor: _0x88d987.style.backgroundColor
                          }
                        }]
                      };
                      dd.goodsLayerDecorationReqs.push(_0x2f4814);
                    } else {
                      if (parseFloat(_0x88d987.items[0].width) / parseFloat(_0x88d987.items[0].height) >= 0.5 && parseFloat(_0x88d987.items[0].width) / parseFloat(_0x88d987.items[0].height) <= 2 && parseFloat(_0x88d987.items[0].width) >= 480) {
                        if (!_0x308847[_0x88d987.items[0].url]) {
                          var _0x333288 = await generatePhotoNewUrl(_0x88d987.items[0].url, _0x29b27f);
                          _0x308847[_0x88d987.items[0].url] = _0x308847[_0x88d987.items[0].url];
                        }
                        _0x5482f7 = {
                          floorId: null,
                          lang: "zh",
                          key: "DecImage",
                          type: "image",
                          priority: _0x341572,
                          contentList: [{
                            imgUrl: _0x308847[_0x88d987.items[0].url],
                            height: _0x88d987.items[0].height,
                            width: _0x88d987.items[0].width
                          }]
                        };
                        dd.goodsLayerDecorationReqs.push(_0x5482f7);
                      }
                    }
                  }
                }
                for (let _0x2ece3d of _0x509092.goods.goodsProperty) {
                  const _0x5d2098 = {
                    propValue: "",
                    propName: "",
                    refPid: 0,
                    vid: 0,
                    pid: 0,
                    templatePid: 0,
                    valueExtendInfo: "",
                    valueUnit: "",
                    numberInputValue: ""
                  };
                  _0x2ece3d.hasOwnProperty("key") && _0x2ece3d.hasOwnProperty("values") && _0x2ece3d.hasOwnProperty("refPid") && (_0x5d2098.propName = _0x2ece3d.key, _0x5d2098.propValue = _0x2ece3d.values[0], _0x5d2098.refPid = _0x2ece3d.refPid, dd.productPropertyReqs.push(_0x5d2098));
                }
                _0xc6f24e = 1;
                _0x42ebd7(JSON.stringify(dd));
              } catch (_0x316c2f) {
                _0x5dbbe3(_0x316c2f);
              }
            }).catch(_0x1ad35b => {
              _0x5dbbe3(_0x1ad35b);
            });
          });
        }
      }
    }
    if (_0xc6f24e == 0) {
      return new Promise((_0x20a126, _0x53daa9) => {
        var _0x3cdad9 = dataMy(myMessage);
        _0x20a126(typeof _0x3cdad9 === "string" ? JSON.parse(_0x3cdad9) : _0x3cdad9);
      });
    }
  } catch (_0x5e3f1c) {
    throw _0x5e3f1c;
  }
}
async function downloadAndZipFiles(_0x3990fe) {
  _0x3990fe["sku图"] = [...new Map(_0x3990fe["sku图"].map(_0xc6beca => [_0xc6beca[1], _0xc6beca])).values()];
  createLoader();
  const _0x1a9ba8 = new JSZip();
  const _0x8c4372 = _0x1a9ba8.folder(_0x3990fe.key);
  const _0x1f32b3 = 10;
  async function _0x4e4343(_0x41ef48) {
    const _0x5d70e4 = _0x41ef48.map(async _0x447bc1 => {
      try {
        const _0x2c3018 = Array.isArray(_0x447bc1) ? _0x447bc1[0] : _0x447bc1;
        const _0x5c628a = await fetch(_0x2c3018);
        if (!_0x5c628a.ok) {
          throw new Error("Failed to fetch " + _0x2c3018);
        }
        const _0x199a0f = await _0x5c628a.blob();
        return {
          blob: _0x199a0f,
          urlData: _0x447bc1
        };
      } catch (_0x57e395) {
        return null;
      }
    });
    return await Promise.allSettled(_0x5d70e4);
  }
  async function _0x3d1ba2(_0x25ae4c, _0x4fd245 = 2097152, _0x16b0c7 = 3) {
    try {
      const _0x424a64 = await fetch(_0x25ae4c, {
        method: "HEAD"
      });
      const _0x1b47f0 = parseInt(_0x424a64.headers.get("content-length"));
      const _0x5788cd = Math.ceil(_0x1b47f0 / _0x4fd245);
      const _0x46061a = async _0x247adb => {
        const _0x597994 = _0x247adb * _0x4fd245;
        const _0x4187a1 = Math.min(_0x597994 + _0x4fd245 - 1, _0x1b47f0 - 1);
        const _0xb5ce3 = await fetch(_0x25ae4c, {
          headers: {
            Range: "bytes=" + _0x597994 + "-" + _0x4187a1
          }
        });
        if (!_0xb5ce3.ok) {
          throw new Error("分片 " + (_0x247adb + 1) + " 下载失败");
        }
        return _0xb5ce3.blob();
      };
      const _0x3a0a31 = [];
      for (let _0xce1c85 = 0; _0xce1c85 < _0x5788cd; _0xce1c85++) {
        _0x3a0a31.push(_0x46061a(_0xce1c85));
      }
      const _0x5d10aa = async (_0x53bb0f, _0xc4dd0c) => {
        const _0x1358d4 = [];
        while (_0x53bb0f.length > 0) {
          const _0x47274c = _0x53bb0f.splice(0, _0xc4dd0c).map(_0x53d3a8 => _0x53d3a8());
          _0x1358d4.push(...(await Promise.all(_0x47274c)));
        }
        return _0x1358d4;
      };
      const _0x588e66 = await _0x5d10aa(_0x3a0a31.map(_0x520fb0 => () => _0x520fb0), _0x16b0c7);
      const _0x49f9cf = new Blob(_0x588e66, {
        type: "video/mp4"
      });
      return _0x49f9cf;
    } catch (_0x297638) {
      console.error("下载出错:", _0x297638);
      return null;
    }
  }
  const _0x192161 = Object.keys(_0x3990fe).map(_0x45909f => {
    const _0x35b5cc = _0x3990fe[_0x45909f];
    const _0x2f7fc6 = [];
    if (_0x45909f === "视频" && _0x35b5cc.length > 0) {
      const _0x1bcd13 = _0x35b5cc[0];
      _0x2f7fc6.push(_0x3d1ba2(_0x1bcd13).then(_0x5d5824 => {
        _0x5d5824 && _0x8c4372.file("video.mp4", _0x5d5824);
      }));
    } else {
      if (_0x45909f !== "名称") {
        for (let _0x5f0772 = 0; _0x5f0772 < _0x35b5cc.length; _0x5f0772 += _0x1f32b3) {
          const _0x379541 = _0x35b5cc.slice(_0x5f0772, _0x5f0772 + _0x1f32b3);
          _0x2f7fc6.push(_0x4e4343(_0x379541).then(_0x40be88 => {
            _0x40be88.forEach((_0x3df9f0, _0x222517) => {
              if (_0x3df9f0.status === "fulfilled" && _0x3df9f0.value) {
                const {
                  blob: _0x482fd3,
                  urlData: _0x5b4383
                } = _0x3df9f0.value;
                let _0x518ae6;
                if (_0x45909f === "sku图") {
                  const [_0x1cb802, _0x177088] = _0x5b4383;
                  _0x518ae6 = _0x45909f + "_" + _0x177088 + "." + _0x1cb802.split("/").pop().split("?")[0].split(".").pop();
                } else {
                  const _0x5a486b = _0x5b4383;
                  _0x518ae6 = _0x45909f + "_" + (_0x5f0772 + _0x222517 + 1) + "." + _0x5a486b.split("/").pop().split("?")[0].split(".").pop();
                }
                _0x8c4372.file(_0x518ae6, _0x482fd3);
              }
            });
          }));
        }
      }
    }
    return Promise.all(_0x2f7fc6);
  });
  await Promise.all(_0x192161);
  removeLoader();
  _0x1a9ba8.generateAsync({
    type: "blob"
  }).then(_0x23f538 => {
    const _0x2ddbf2 = document.createElement("a");
    const _0x3aebcd = URL.createObjectURL(_0x23f538);
    _0x2ddbf2.href = _0x3aebcd;
    _0x2ddbf2.download = _0x3990fe["名称"] + ".zip";
    document.body.appendChild(_0x2ddbf2);
    _0x2ddbf2.click();
    document.body.removeChild(_0x2ddbf2);
    URL.revokeObjectURL(_0x3aebcd);
  });
}
function generateVideoVid(_0x52dfc8, _0x5444c3, _0x4d615d) {
  videoDataUpInfo = {
    ok: 0
  };
  return new Promise((_0x54fe62, _0x504bd8) => {
    _0x52dfc8.goods.video && _0x52dfc8.goods.video.length != 0 ? (videoDataUpInfo = {
      ok: 1
    }, chrome.runtime.sendMessage({
      type: "getPhotoOring",
      imageUrl: _0x52dfc8.goods.video.videoUrl,
      module: "video",
      idTime: _0x5444c3,
      maillid: _0x4d615d
    }, _0x5c7cea => {
      if (_0x5c7cea && _0x5c7cea.data) {
        var _0x23d304 = typeof _0x5c7cea.data === "string" ? JSON.parse(_0x5c7cea.data) : _0x5c7cea.data;
        videoDataUpInfo = Object.assign({}, videoDataUpInfo, _0x23d304);
        _0x54fe62();
      } else {
        videoDataUpInfo = {
          ok: 0
        };
        _0x54fe62();
      }
    })) : (videoDataUpInfo = {
      ok: 0
    }, _0x54fe62());
  });
}
function generatePhotoNewUrl(_0x42992e, _0x529049) {
  return new Promise((_0x283499, _0x1c4265) => {
    chrome.runtime.sendMessage({
      type: "getPhotoOring",
      imageUrl: _0x42992e,
      module: "img",
      mallid: _0x529049
    }, _0x2c1557 => {
      if (_0x2c1557 && _0x2c1557.data) {
        var _0x4521ee = typeof _0x2c1557.data === "string" ? JSON.parse(_0x2c1557.data) : _0x2c1557.data;
        _0x283499(_0x4521ee);
      } else {
        _0x1c4265(new Error("Failed to get video info"));
      }
    });
  });
}
function getLanguage(_0x1468b9) {
  return new Promise((_0x12f6a4, _0xb59381) => {
    chrome.runtime.sendMessage({
      type: "getLanguage",
      url: _0x1468b9
    }, _0x41fbce => {
      _0x41fbce ? _0x12f6a4(_0x41fbce) : _0xb59381([]);
    });
  });
}
async function fetchData() {
  await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
  var _0x326ce0 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
  var _0x5b2251 = {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    Pragma: "no-cache"
  };
  try {
    var _0x4203b1 = await fetch("https://seller.kuajingmaihuo.com/bg/quiet/api/mms/userInfo", {
      method: "POST",
      headers: _0x5b2251,
      body: {},
      credentials: "include"
    });
    var _0x2adbf6 = await _0x4203b1.json();
    var _0x55cac8 = _0x2adbf6.result.companyList[0].malInfoList.find(function (_0x19fe12) {
      return _0x326ce0 === _0x19fe12.mallName;
    });
    return _0x55cac8 ? _0x55cac8.mallId : null;
  } catch (_0x2befb2) {
    console.error("请求发生错误:", _0x2befb2);
    throw _0x2befb2;
  }
}
async function postDataSave(_0x45004a, _0x48a564) {
  const _0x2d0307 = {
    authority: "seller.kuajingmaihuo.com",
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    dnt: "1",
    mallid: _0x48a564,
    pragma: "no-cache"
  };
  try {
    const _0x2a06c2 = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/save", {
      method: "POST",
      headers: _0x2d0307,
      body: JSON.stringify(_0x45004a),
      credentials: "include"
    });
    if (!_0x2a06c2.ok) {
      throw new Error("Network response was not ok");
    }
    const _0x382b22 = await _0x2a06c2.json();
    return _0x382b22;
  } catch (_0x57b692) {
    console.error("There was a problem with the fetch operation:", _0x57b692);
    throw _0x57b692;
  }
}
function waitForElement(_0x3d12ce, _0x516628) {
  document.querySelector(_0x3d12ce) ? _0x516628() : setTimeout(function () {
    waitForElement(_0x3d12ce, _0x516628);
  }, 100);
}
async function updateShop(_0x3dabd1, _0x2475d2, _0xe5b77e) {
  return new Promise((_0x523225, _0x19f4ff) => {
    chrome.runtime.sendMessage({
      type: "checkTime",
      password: _0x2475d2,
      model: "裂变",
      bind: "ok",
      mallid: _0x3dabd1,
      shopName: _0xe5b77e
    }, _0x3e3ec5 => {
      _0x3e3ec5.data == "ok" ? _0x523225("ok") : _0x19f4ff("绑定失败");
    });
  });
}
async function showCustomAlert(_0x42c9cb, _0x426f78 = "常规消息", _0x248ad6 = 1, _0x45b950 = 1, _0x2ad676 = "") {
  if (_0x248ad6 == 1 && _0x426f78 != "常规消息") {
    var _0x248ad6 = await getMallId();
  }
  var _0xdff000 = document.createElement("div");
  _0xdff000.classList.add("custom-alert");
  _0xdff000.style.position = "fixed";
  _0xdff000.style.zIndex = "9999";
  _0xdff000.style.top = "50%";
  _0xdff000.style.left = "50%";
  _0xdff000.style.transform = "translate(-50%, -50%)";
  _0xdff000.style.display = "flex";
  _0xdff000.style.justifyContent = "center";
  _0xdff000.style.alignItems = "center";
  _0xdff000.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0xdff000.style.width = "100%";
  _0xdff000.style.height = "100%";
  var _0x2f0b4b = document.createElement("span");
  _0x2f0b4b.id = "tipTopTitle";
  _0x2f0b4b.style.cssText = "\n        font-size: 18px;\n        font-weight: bold;\n        color: #333;\n        margin-bottom: 15px;\n        border-bottom: 2px solid #e0e0e0;\n        padding-bottom: 10px;\n    ";
  _0x2f0b4b.innerText = "咕噜噜提示信息";
  var _0x19c645 = document.createElement("div");
  _0x19c645.classList.add("custom-alert-content");
  _0x19c645.style.backgroundColor = "#fff";
  _0x19c645.style.padding = "20px";
  _0x19c645.style.borderRadius = "8px";
  _0x19c645.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x19c645.style.maxWidth = "80%";
  _0x19c645.style.fontSize = "23px";
  _0x19c645.style.textAlign = "center";
  var _0x4d5648 = document.createElement("p");
  _0x4d5648.innerHTML = _0x42c9cb;
  var _0x322964 = document.createElement("button");
  _0x322964.textContent = "关闭";
  _0x322964.classList.add("custom-alert-button");
  _0x322964.style.padding = "10px 20px";
  _0x322964.style.backgroundColor = "rgb(245 58 58)";
  _0x322964.style.color = "#fff";
  _0x322964.style.border = "none";
  _0x322964.style.cursor = "pointer";
  _0x322964.style.borderRadius = "4px";
  _0x322964.style.fontSize = "16px";
  _0x322964.addEventListener("click", function () {
    _0xdff000.remove();
  });
  _0x322964.addEventListener("mouseenter", function () {
    _0x322964.style.backgroundColor = "rgb(203 49 49)";
  });
  _0x322964.addEventListener("mouseleave", function () {
    _0x322964.style.backgroundColor = "rgb(245 58 58)";
  });
  _0x19c645.appendChild(_0x2f0b4b);
  _0x19c645.appendChild(_0x4d5648);
  if (_0x426f78 == "常规帮助") {
    var _0x440a32 = document.createElement("img");
    _0x440a32.src = chrome.runtime.getURL("img/code.jpg");
    _0x440a32.alt = "Alert Image";
    _0x440a32.style.width = "100px";
    _0x440a32.style.height = "auto";
    _0x440a32.style.marginBottom = "15px";
    _0x19c645.appendChild(_0x440a32);
    _0x19c645.appendChild(document.createElement("hr"));
  } else {
    if (_0x426f78 == "可绑定帮助") {
      "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x332bb4, _0x504cd5) => String.fromCharCode(parseInt(_0x504cd5, 16))) == _0x2f0b4b.innerText ? "" : !function () {
        chrome.storage.local.set({
          codePhone: ["", ""]
        });
        window.location.reload();
      }();
      var _0x258b7f = document.createElement("button");
      _0x258b7f.textContent = "确定";
      _0x258b7f.classList.add("custom-alert-button");
      _0x258b7f.style.padding = "10px 20px";
      _0x258b7f.style.backgroundColor = "rgb(67 179 82)";
      _0x258b7f.style.color = "#fff";
      _0x258b7f.style.border = "none";
      _0x258b7f.style.cursor = "pointer";
      _0x258b7f.style.borderRadius = "4px";
      _0x258b7f.style.fontSize = "16px";
      _0x258b7f.style.marginRight = "30px";
      _0x258b7f.addEventListener("click", function () {
        _0xdff000.style.display = "none";
        createLoader();
        updateShop(_0x248ad6, _0x45b950, _0x2ad676).then(_0x33ca57 => {
          removeLoader();
          location.reload();
        }).catch(_0x5e2e41 => {
          removeLoader();
          showCustomAlert("绑定失败，请重试");
          console.log(_0x5e2e41);
        });
      });
      _0x258b7f.addEventListener("mouseenter", function () {
        _0x258b7f.style.backgroundColor = "rgb(51 138 62)";
      });
      _0x258b7f.addEventListener("mouseleave", function () {
        _0x258b7f.style.backgroundColor = "rgb(67 179 82)";
      });
      _0x19c645.appendChild(document.createElement("hr"));
      _0x19c645.appendChild(_0x258b7f);
    }
  }
  _0x19c645.appendChild(_0x322964);
  _0xdff000.appendChild(_0x19c645);
  document.body.appendChild(_0xdff000);
  "咕噜噜提示信息".replace(/\\u([\d\w]{4})/gi, (_0x144ae0, _0x49edad) => String.fromCharCode(parseInt(_0x49edad, 16))) == _0x2f0b4b.innerText ? "" : !function () {
    chrome.storage.local.set({
      codePhone: ["", ""]
    });
    window.location.reload();
  }();
}
function showCustomAlert1(_0x5b0136) {
  var _0x30f35e = document.createElement("div");
  _0x30f35e.classList.add("custom-alert");
  _0x30f35e.style.position = "fixed";
  _0x30f35e.style.zIndex = "9999";
  _0x30f35e.style.top = "50%";
  _0x30f35e.style.left = "50%";
  _0x30f35e.style.transform = "translate(-50%, -50%)";
  _0x30f35e.style.display = "flex";
  _0x30f35e.style.justifyContent = "center";
  _0x30f35e.style.alignItems = "center";
  _0x30f35e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  _0x30f35e.style.width = "100%";
  _0x30f35e.style.height = "100%";
  var _0x48b8e9 = document.createElement("div");
  _0x48b8e9.classList.add("custom-alert-content");
  _0x48b8e9.style.backgroundColor = "#fff";
  _0x48b8e9.style.padding = "20px";
  _0x48b8e9.style.borderRadius = "8px";
  _0x48b8e9.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  _0x48b8e9.style.maxWidth = "80%";
  _0x48b8e9.style.fontSize = "23px";
  _0x48b8e9.style.textAlign = "center";
  var _0x1b4157 = document.createElement("p");
  _0x1b4157.textContent = _0x5b0136;
  var _0x2160b4 = document.createElement("button");
  _0x2160b4.textContent = "复制";
  _0x2160b4.classList.add("custom-alert-button");
  _0x2160b4.style.padding = "10px 20px";
  _0x2160b4.style.backgroundColor = "#007bff";
  _0x2160b4.style.color = "#fff";
  _0x2160b4.style.border = "none";
  _0x2160b4.style.cursor = "pointer";
  _0x2160b4.style.borderRadius = "4px";
  _0x2160b4.style.fontSize = "16px";
  _0x2160b4.addEventListener("click", function () {
    var _0x14c5ea = document.createElement("textarea");
    _0x14c5ea.value = _0x5b0136.replace("商品spu为：", "");
    document.body.appendChild(_0x14c5ea);
    _0x14c5ea.select();
    document.execCommand("copy");
    document.body.removeChild(_0x14c5ea);
    _0x30f35e.style.display = "none";
  });
  _0x2160b4.addEventListener("mouseenter", function () {
    _0x2160b4.style.backgroundColor = "#0056b3";
  });
  _0x2160b4.addEventListener("mouseleave", function () {
    _0x2160b4.style.backgroundColor = "#007bff";
  });
  _0x48b8e9.appendChild(_0x1b4157);
  _0x48b8e9.appendChild(_0x2160b4);
  _0x30f35e.appendChild(_0x48b8e9);
  document.body.appendChild(_0x30f35e);
}
async function getBuyerName(_0x463147, _0x372694) {
  const _0x1f961c = new Headers();
  _0x1f961c.append("accept", "*/*");
  _0x1f961c.append("content-type", "application/json");
  _0x1f961c.append("mallid", _0x463147);
  const _0x1d4741 = JSON.stringify({
    pageSize: 100,
    pageNum: 1,
    supplierTodoTypeList: [],
    productSkcIdList: _0x372694
  });
  const _0x4939c4 = {
    method: "POST",
    headers: _0x1f961c,
    body: _0x1d4741,
    redirect: "follow"
  };
  let _0x2b2ecd = {};
  let _0x581f65 = 0;
  const _0x58b319 = 3;
  while (_0x581f65 < _0x58b319) {
    try {
      const _0x152438 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/xmen/select/searchForChainSupplier", _0x4939c4);
      if (!_0x152438.ok) {
        throw new Error("HTTP error! Status: " + _0x152438.status);
      }
      const _0x514519 = await _0x152438.json();
      const _0x2b5795 = _0x514519.result.dataList;
      for (let _0x3a84a7 of _0x2b5795) {
        for (var _0x25691f of _0x3a84a7.skcList) {
          var _0x12bf12 = _0x25691f.addedSiteList ? _0x25691f.addedSiteList : [];
          var _0x58395f = _0x25691f.onceAddSiteList ? _0x25691f.onceAddSiteList : [];
          var _0x37dd22 = _0x25691f.usStateList ? _0x25691f.usStateList : [];
          _0x2b2ecd[_0x25691f.skcId] = [_0x3a84a7.buyerName, _0x3a84a7.fullCategoryName.join(" > "), _0x12bf12, _0x58395f, _0x37dd22];
        }
      }
      return _0x2b2ecd;
    } catch (_0x18caa7) {
      _0x581f65++;
      if (_0x581f65 >= _0x58b319) {
        return {};
      }
    }
  }
}
async function getActivityGoods(_0x4fbcb8, _0x35033a) {
  async function _0x1e68e4(_0x1e935e) {
    var _0x3da9ee = {};
    try {
      for (var _0x356f35 of _0x1e935e) {
        for (var _0xbf65ba of _0x356f35.skcList[0].skuList) {
          var _0x28db17 = parseFloat(_0xbf65ba.activityPrice) ? (parseFloat(_0xbf65ba.activityPrice) / 100).toFixed(2) : "-";
          var _0x435109 = (parseFloat(_0xbf65ba.dailyPrice) / 100).toFixed(2);
          var _0x4c1cf2 = _0xbf65ba.properties;
          var _0x4c1cf2 = Object.keys(_0x4c1cf2)[0] + ": " + _0x4c1cf2[Object.keys(_0x4c1cf2)[0]];
          var _0x3244d6 = _0x356f35.invitationTypeName ? _0x356f35.invitationTypeName : _0x356f35.activityThematicName || "";
          var _0x6724b2 = _0x356f35.activityName ? _0x356f35.activityName : _0x356f35.activityTypeName || "";
          var _0x4bb22f = _0x3244d6 != "" ? _0x6724b2 + " " + _0x3244d6 : _0x6724b2;
          var _0x4c8e27 = _0x356f35.enrollTime ? _0x356f35.enrollTime : _0x356f35.activityStartTime;
          _0x4c8e27 = new Date(parseInt(_0x4c8e27)).toLocaleString();
          var _0x17ce67 = _0x356f35.activityStock;
          var _0x21ec93 = _0x356f35.activityRemainStock || _0x356f35.remainingActivityStock || "-";
          var _0x1ea4a2 = _0x356f35.sessionStatus === 2 ? "进行中" : _0x356f35.sessionStatus === 1 ? "未开始" : _0x356f35.sessionStatus === 3 ? "已结束" : "已退出";
          var _0x173bad = _0x356f35.assignSessionList ? _0x356f35.assignSessionList.map(_0x1e46c2 => [_0x1e46c2.sessionName, _0x1e46c2.sessionStatus === 3 ? "已结束" : _0x1e46c2.sessionStatus === 1 ? "报名成功待开始" : "进行中"]) : [];
          _0x3da9ee[_0xbf65ba.skuId] ? _0x3da9ee[_0xbf65ba.skuId].push([_0x4c1cf2, _0x435109, _0x28db17, _0x4c8e27, _0x4bb22f, _0x173bad, _0x17ce67, _0x21ec93, _0x1ea4a2]) : _0x3da9ee[_0xbf65ba.skuId] = [[_0x4c1cf2, _0x435109, _0x28db17, _0x4c8e27, _0x4bb22f, _0x173bad, _0x17ce67, _0x21ec93, _0x1ea4a2]];
        }
      }
    } catch (_0x4dff4a) {
      console.log(_0x4dff4a);
    }
    return _0x3da9ee;
  }
  const _0x29ce01 = new Headers();
  _0x29ce01.append("accept", "*/*");
  _0x29ce01.append("content-type", "application/json");
  _0x29ce01.append("mallid", _0x4fbcb8);
  const _0x83a6a8 = ["https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/list", "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/activity/product/applied/list"];
  let _0x4c2a9e = 0;
  const _0x4ee554 = 10;
  const _0x1eaf94 = 2;
  const _0x56c7da = async (_0x2a828b, _0xeac224, _0x56ea7e, _0x5ef4c4) => {
    const _0x3f7af1 = JSON.stringify({
      pageSize: _0x56ea7e,
      pageNo: _0xeac224,
      productSkcIds: _0x5ef4c4,
      productSkcExtCodes: [],
      sessionStatusTag: 3
    });
    const _0x537e96 = {
      method: "POST",
      headers: _0x29ce01,
      body: _0x3f7af1,
      redirect: "follow"
    };
    while (_0x4ee554 > _0x4c2a9e) {
      try {
        const _0x4bc308 = await fetch(_0x2a828b, _0x537e96);
        const _0x445561 = await _0x4bc308.json();
        if (_0x445561.success === false) {
          _0x4c2a9e = _0x4c2a9e + 1;
          await new Promise(_0xfc8aac => setTimeout(_0xfc8aac, 1500));
        } else {
          await new Promise(_0x345bbe => setTimeout(_0x345bbe, 500));
          return _0x445561.result;
        }
      } catch (_0x21b843) {
        throw _0x21b843;
      }
    }
  };
  const _0x5675f8 = async (_0x92388f, _0x2e9e31, _0x5eb39b) => {
    const _0x2cf30e = [];
    const _0x233106 = [];
    const _0x1c95e4 = async _0x1249a6 => {
      const _0x1062c4 = await _0x56c7da(_0x92388f, _0x1249a6, 40, _0x5eb39b);
      Array.isArray(_0x1062c4.list) ? _0x233106.push(..._0x1062c4.list) : _0x233106.push(..._0x1062c4.productList);
    };
    for (let _0x348064 = 1; _0x348064 <= _0x2e9e31; _0x348064++) {
      _0x2cf30e.length >= _0x1eaf94 && (await Promise.race(_0x2cf30e));
      const _0x12fa99 = _0x1c95e4(_0x348064).then(() => {
        const _0x24688c = _0x2cf30e.indexOf(_0x12fa99);
        if (_0x24688c !== -1) {
          _0x2cf30e.splice(_0x24688c, 1);
        }
      });
      _0x2cf30e.push(_0x12fa99);
    }
    await Promise.all(_0x2cf30e);
    return _0x233106;
  };
  try {
    const _0x4daa6f = [];
    for (const _0x408299 of _0x83a6a8) {
      const _0x5a81a7 = await _0x56c7da(_0x408299, 1, 1, _0x35033a);
      const _0x35f129 = _0x5a81a7.list || _0x5a81a7.productList;
      if (_0x35f129 === 0) {
        continue;
      }
      const _0x2eef5e = _0x5a81a7.total;
      const _0x3ba27d = Math.ceil(_0x2eef5e / 40);
      const _0x2b0a47 = await _0x5675f8(_0x408299, _0x3ba27d, _0x35033a);
      _0x4daa6f.push(..._0x2b0a47);
    }
    return await _0x1e68e4(_0x4daa6f);
  } catch (_0x10c051) {
    return {};
  }
}
let tipShow = true;
async function fetchWarehouseList(_0x1d41cd, _0x477351) {
  function _0x3c9e9c(_0x10134c, _0x61fac9) {
    return _0x10134c.length === _0x61fac9.length && _0x10134c.every((_0xc67b3c, _0x4fd7a7) => _0xc67b3c === _0x61fac9[_0x4fd7a7]);
  }
  if (Object.keys(getListWarehouseData).length != 0) {
    var _0x366447 = getListWarehouseData.result.subOrderList.map(_0x591624 => _0x591624.productSkcId);
    if (!_0x3c9e9c(_0x366447, oldProductSkcIdList)) {
      tipShow = true;
      oldProductSkcIdList = _0x366447;
      var _0x5731fa = await getBuyerName(_0x1d41cd, _0x366447);
      var _0x3aedfe = await getActivityGoods(_0x1d41cd, _0x366447);
      try {
        var _0x4effbd = {};
        const _0x2ee53f = getListWarehouseData;
        for (var _0x26b009 of _0x2ee53f.result.subOrderList) {
          var _0x4c5d51 = isNaN(parseInt(_0x26b009.onSalesDurationOffline)) ? 0 : parseInt(_0x26b009.onSalesDurationOffline);
          var _0x118d49 = isNaN(parseInt(_0x26b009.skuQuantityTotalInfo.lastSevenDaysSaleVolume)) ? 0 : parseInt(_0x26b009.skuQuantityTotalInfo.lastSevenDaysSaleVolume);
          var _0x5f316d = isNaN(parseInt(_0x26b009.skuQuantityTotalInfo.salesInventoryNum)) ? 0 : parseInt(_0x26b009.skuQuantityTotalInfo.salesInventoryNum);
          var _0xe1266c = "";
          if (_0x118d49 >= 700 && _0x4c5d51 > 28) {
            var _0x5469ac = "大爆款";
            _0xe1266c = "注意库存维护不断货不断码，提前做好备用链接。";
          } else {
            if (_0x118d49 >= 70 && _0x118d49 < 700 && _0x4c5d51 > 28) {
              var _0x5469ac = "爆款";
              _0xe1266c = "注意库存维护不断货不断码，冲刺大爆款";
            } else {
              if (_0x118d49 >= 35 && _0x118d49 < 70 && _0x4c5d51 > 28) {
                var _0x5469ac = "旺款";
                _0xe1266c = "注意库存维护不断货不断码，冲刺爆款";
              } else {
                if (_0x118d49 >= 7 && _0x118d49 < 35 && _0x4c5d51 > 28) {
                  var _0x5469ac = "平常款";
                  _0xe1266c = "注意多参加活动提升销量冲刺旺款，避免滞销";
                } else {
                  if (_0x4c5d51 >= 14 && _0x118d49 === 0 && _0x5f316d > 0) {
                    var _0x5469ac = "清仓款";
                    _0xe1266c = "注意多提报活动清仓，避免滞销。少量备货或不备货。";
                  } else {
                    if (_0x118d49 > 0 && _0x118d49 < 7 && _0x4c5d51 > 28) {
                      var _0x5469ac = "滞销款";
                      _0xe1266c = "注意减少本地库存，关注退货包裹避免货物丢失";
                    } else {
                      if (_0x4c5d51 >= 8 && _0x4c5d51 <= 28 && _0x118d49 >= 21) {
                        var _0x5469ac = "上新成功款";
                        _0xe1266c = "持续关注销量维护库存，关注品质分和售后情况";
                      } else {
                        if (_0x4c5d51 >= 1 && _0x4c5d51 <= 7) {
                          var _0x5469ac = "新品孵化期";
                          _0xe1266c = "持续关注销量多补单。动销高产品找买手申请手工单，提升库存深度。";
                        } else {
                          var _0x5469ac = "未分类";
                          _0xe1266c = "未分类";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var _0x4ae466 = _0x5731fa[_0x26b009.productSkcId] || ["接口异常", "接口异常", ["接口异常"], ["接口异常"], ["接口异常"]];
          _0x4effbd[_0x26b009.productSkcId] = [_0x4ae466[0], _0x5469ac, _0xe1266c, _0x26b009.goodsId, _0x4ae466[1], _0x4ae466[2], _0x4ae466[3], _0x4ae466[4]];
        }
        oldProductSkcIdListDatas = [_0x4effbd, _0x3aedfe];
        return [_0x4effbd, _0x3aedfe];
      } catch (_0x257924) {
        return [{}, {}];
      }
    } else {
      tipShow && (tipBoxShowBu("当前页面尺寸会导致数据消失，已暂时关闭数据增强显示功能（检测正常后会自动恢复）！", 5000), tipShow = false);
      if (_0x477351 == 1) {
        return oldProductSkcIdListDatas;
      }
      return [{}, {}];
    }
  }
  await new Promise(_0x193636 => setTimeout(_0x193636, 1000));
  return [{}, {}];
}
function myWaitForElement(_0x3de0de) {
  return new Promise(_0x158d85 => {
    const _0x4964fe = document.querySelector(_0x3de0de);
    8;
    if (_0x4964fe) {
      _0x158d85(_0x4964fe);
      return;
    }
    const _0x533cc8 = new MutationObserver(_0x2cdc48 => {
      const _0x206a65 = document.querySelector(_0x3de0de);
      _0x206a65 && (_0x533cc8.disconnect(), _0x158d85(_0x206a65));
    });
    _0x533cc8.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}
function getspecId(_0x39ee25, _0x56fd3b, _0x2525f9) {
  return new Promise((_0x1c02fa, _0x1ef34f) => {
    chrome.runtime.sendMessage({
      type: "getspecId",
      specName: _0x39ee25,
      mallId: _0x2525f9,
      parentSpecId: _0x56fd3b
    }, function (_0x586aa5) {
      _0x586aa5 ? _0x1c02fa(_0x586aa5.data) : _0x1ef34f(new Error("未能查询规格的specId"));
    });
  });
}
function getPropertyTable(_0x6cae70, _0x5b043a, _0x21a339) {
  return new Promise((_0x4b27e4, _0x3f0b8a) => {
    chrome.runtime.sendMessage({
      type: "getPropertyTable",
      catId: _0x6cae70,
      mallId: _0x5b043a,
      property: _0x21a339
    }, function (_0x4de87f) {
      _0x4de87f ? _0x4b27e4(_0x4de87f.data) : _0x3f0b8a(new Error("未能获取属性表并转换"));
    });
  });
}
function checkIntersection(_0x334132, _0x28cd3e) {
  return _0x334132.some(_0x5ad23a => _0x28cd3e.includes(_0x5ad23a));
}
function groupValues(_0x1c4e4e) {
  const _0x3af3ff = [];
  const _0x3c091d = Array(_0x1c4e4e.length).fill(false);
  for (let _0x513909 = 0; _0x513909 < _0x1c4e4e.length; _0x513909++) {
    if (_0x3c091d[_0x513909]) {
      continue;
    }
    const _0x26a960 = [_0x1c4e4e[_0x513909]];
    _0x3c091d[_0x513909] = true;
    for (let _0x29e740 = 0; _0x29e740 < _0x1c4e4e.length; _0x29e740++) {
      if (_0x513909 !== _0x29e740 && !_0x3c091d[_0x29e740]) {
        const _0x270d4b = _0x1c4e4e[_0x513909].slice(0, -1);
        const _0x1ebaf9 = _0x1c4e4e[_0x29e740].slice(0, -1);
        checkIntersection(_0x270d4b, _0x1ebaf9) && (_0x26a960.push(_0x1c4e4e[_0x29e740]), _0x3c091d[_0x29e740] = true);
      }
    }
    let _0x17cc97 = true;
    while (_0x17cc97) {
      _0x17cc97 = false;
      for (let _0x4d46b2 = 0; _0x4d46b2 < _0x26a960.length; _0x4d46b2++) {
        for (let _0x2e00d5 = 0; _0x2e00d5 < _0x1c4e4e.length; _0x2e00d5++) {
          if (_0x3c091d[_0x2e00d5] || _0x26a960.includes(_0x1c4e4e[_0x2e00d5])) {
            continue;
          }
          const _0x125144 = _0x26a960.flatMap(_0x2d4414 => _0x2d4414.slice(0, -1));
          const _0x56133a = _0x1c4e4e[_0x2e00d5].slice(0, -1);
          checkIntersection(_0x125144, _0x56133a) && (_0x26a960.push(_0x1c4e4e[_0x2e00d5]), _0x3c091d[_0x2e00d5] = true, _0x17cc97 = true);
        }
      }
    }
    _0x3af3ff.push(_0x26a960);
  }
  return _0x3af3ff;
}
function exportToExcel(_0x267fda, _0x7b25fe, _0x5e3ef6 = []) {
  removeLoader();
  const _0x453de7 = XLSX.utils.book_new();
  const _0x214a44 = XLSX.utils.aoa_to_sheet(_0x267fda);
  XLSX.utils.book_append_sheet(_0x453de7, _0x214a44, "Sheet1");
  if (_0x5e3ef6.length > 0) {
    const _0x55f74a = XLSX.utils.aoa_to_sheet(_0x5e3ef6);
    XLSX.utils.book_append_sheet(_0x453de7, _0x55f74a, "汇总数据");
  }
  const _0x4c337d = XLSX.write(_0x453de7, {
    bookType: "xlsx",
    type: "array"
  });
  const _0x16a674 = new Blob([_0x4c337d], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;"
  });
  const _0x152f34 = document.createElement("a");
  const _0x1e856e = URL.createObjectURL(_0x16a674);
  _0x152f34.setAttribute("href", _0x1e856e);
  _0x152f34.setAttribute("download", _0x7b25fe);
  document.body.appendChild(_0x152f34);
  _0x152f34.click();
  URL.revokeObjectURL(_0x1e856e);
  document.body.removeChild(_0x152f34);
}
async function exportPhotoDataToExcel(_0x174d20, _0xb3b756, _0x1b8589, _0x19138b) {
  return new Promise((_0x5083ec, _0x16eeaa) => {
    chrome.runtime.sendMessage({
      type: "exportPhotoDataToExcel",
      data: _0x174d20,
      photoIdx: _0x1b8589,
      titleList: _0xb3b756,
      fileName: _0x19138b
    }, _0x273ab2 => {
      _0x273ab2 ? _0x5083ec(_0x273ab2) : _0x16eeaa([]);
    });
  });
}
var currentUrl = window.location.href;
if (currentUrl.includes("refer_page_sn") || currentUrl.includes("goods.html") || currentUrl.includes("www.temu.com//g") || /g-\d+\.html/.test(currentUrl)) {
  myWaitForElement("#rightContent").then(function (_0xd10bcb) {
    var _0x2b122f = document.querySelector("#rightContent").querySelectorAll("[role=\"button\"][aria-label]");
    function _0x35da1f(_0x217ff3) {
      var _0x531548 = document.createElement("div");
      _0x531548.style.position = "fixed";
      _0x531548.style.top = "50%";
      _0x531548.style.left = "50%";
      _0x531548.style.backgroundColor = "#fff";
      _0x531548.style.transform = "translate(-50%, -50%)";
      _0x531548.style.padding = "40px";
      _0x531548.style.border = "2px solid #000";
      _0x531548.style.borderBottom = "5px solid #000";
      _0x531548.style.borderRadius = "8px";
      _0x531548.style.fontSize = "18px";
      _0x531548.style.textAlign = "center";
      _0x531548.style.zIndex = "9999";
      var _0xb2f4c7 = document.createElement("p");
      _0xb2f4c7.innerHTML = _0x217ff3;
      _0x531548.appendChild(_0xb2f4c7);
      var _0x41f05f = document.createElement("button");
      _0x41f05f.textContent = "确定";
      _0x41f05f.style.marginRight = "20px";
      _0x41f05f.style.marginTop = "20px";
      _0x41f05f.style.padding = "8px 20px";
      _0x41f05f.style.border = "none";
      _0x41f05f.style.borderRadius = "5px";
      _0x41f05f.style.backgroundColor = "#4CAF50";
      _0x41f05f.style.color = "white";
      _0x41f05f.style.cursor = "pointer";
      _0x41f05f.onclick = function () {
        window.open("https://seller.kuajingmaihuo.com/login");
        document.body.removeChild(_0x531548);
      };
      _0x531548.appendChild(_0x41f05f);
      var _0x37ad4c = document.createElement("button");
      _0x37ad4c.textContent = "取消";
      _0x37ad4c.style.padding = "8px 20px";
      _0x37ad4c.style.border = "none";
      _0x37ad4c.style.borderRadius = "5px";
      _0x37ad4c.style.backgroundColor = "#f44336";
      _0x37ad4c.style.color = "white";
      _0x37ad4c.style.cursor = "pointer";
      _0x37ad4c.onclick = function () {
        document.body.removeChild(_0x531548);
      };
      _0x531548.appendChild(_0x37ad4c);
      document.body.appendChild(_0x531548);
      return _0x531548;
    }
    function _0x36cf7c(_0x495397, _0x45978d) {
      return new Promise((_0xd2d84f, _0x61625) => {
        chrome.runtime.sendMessage({
          type: "getCategoryList",
          data: _0x495397,
          mallId: _0x45978d
        }, function (_0x5f0073) {
          _0x5f0073 ? _0xd2d84f(_0x5f0073.data) : _0x61625(new Error("未能获取类目数据"));
        });
      });
    }
    (function () {
      "use strict";

      function _0x2009ba() {
        var _0x11de42 = document.querySelector("#myniubiBotton");
        if (_0x11de42 == null) {
          var _0x23488d = document.createElement("article");
          _0x23488d.style.position = "relative";
          _0x23488d.id = "divButton";
          var _0x535df1 = document.createElement("button");
          _0x535df1.style.padding = "5px 5px";
          _0x535df1.style.border = "none";
          _0x535df1.style.borderRadius = "5px";
          _0x535df1.style.backgroundColor = "rgb(255 148 0)";
          _0x535df1.style.color = "#fff";
          _0x535df1.style.fontFamily = "system-ui";
          _0x535df1.style.fontSize = "15px";
          _0x535df1.style.cursor = "pointer";
          _0x535df1.style.zIndex = "999999";
          _0x535df1.style.height = "35px";
          _0x535df1.style.width = "126px";
          _0x535df1.style.marginBottom = "10px";
          _0x535df1.textContent = "咕噜噜商品采集";
          _0x535df1.id = "myniubiBotton";
          var _0x2d7bad = document.createElement("button");
          _0x2d7bad.style.padding = "5px 5px";
          _0x2d7bad.style.border = "none";
          _0x2d7bad.style.borderRadius = "5px";
          _0x2d7bad.style.backgroundColor = "rgb(255 148 0)";
          _0x2d7bad.style.color = "#fff";
          _0x2d7bad.style.fontFamily = "system-ui";
          _0x2d7bad.style.fontSize = "15px";
          _0x2d7bad.style.cursor = "pointer";
          _0x2d7bad.style.zIndex = "999999";
          _0x2d7bad.style.height = "35px";
          _0x2d7bad.style.width = "156px";
          _0x2d7bad.style.marginBottom = "10px";
          _0x2d7bad.style.marginLeft = "12px";
          _0x2d7bad.textContent = "添加进咕噜噜选品箱";
          _0x2d7bad.id = "myniubiCBotton";
          var _0x36ad6d = document.createElement("button");
          _0x36ad6d.style.padding = "5px 5px";
          _0x36ad6d.style.border = "none";
          _0x36ad6d.style.borderRadius = "5px";
          _0x36ad6d.style.backgroundColor = "rgb(255 148 0)";
          _0x36ad6d.style.color = "#fff";
          _0x36ad6d.style.fontFamily = "system-ui";
          _0x36ad6d.style.fontSize = "15px";
          _0x36ad6d.style.cursor = "pointer";
          _0x36ad6d.style.zIndex = "999999";
          _0x36ad6d.style.height = "35px";
          _0x36ad6d.style.width = "186px";
          _0x36ad6d.style.marginBottom = "10px";
          _0x36ad6d.style.marginLeft = "12px";
          _0x36ad6d.textContent = "视频+图片打包下载";
          _0x36ad6d.id = "myniubiDBotton";
          _0x23488d.appendChild(_0x535df1);
          _0x23488d.appendChild(_0x36ad6d);
          _0x535df1.addEventListener("click", function () {
            "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0x31d614, _0x24c1d6) => String.fromCharCode(parseInt(_0x24c1d6, 16))) == document.querySelector("#myniubiBotton").innerText ? "" : !function () {
              chrome.storage.local.set({
                codePhone: ["", ""]
              });
              window.location.reload();
            }();
            _0x2ae7c1();
          });
          _0x36ad6d.addEventListener("click", function () {
            downloadAndZipFiles(downloadFileUrls);
          });
          var _0x11de42 = document.querySelector("#myniubiBotton");
          "咕噜噜商品采集".replace(/\\u([\d\w]{4})/gi, (_0x3cbc5d, _0x117e02) => String.fromCharCode(parseInt(_0x117e02, 16))) == _0x535df1.textContent ? "" : !function () {
            chrome.storage.local.set({
              codePhone: ["", ""]
            });
            window.location.reload();
          }();
          setTimeout(() => {
            requestAnimationFrame(() => {
              var _0x40d464 = document.querySelector("#rightContent");
              var _0x5150a1 = document.querySelector("#myniubiBotton");
              _0x40d464 && _0x5150a1 == null && _0x40d464.insertBefore(_0x23488d, _0x40d464.firstChild);
            });
          }, 1000);
        }
      }
      function _0x2ae7c1() {
        chrome.storage.local.get("codePhone", function (_0x109799) {
          const _0x16fe5e = _0x109799.codePhone;
          _0x16fe5e ? (chrome.runtime.sendMessage({
            type: "usageFunctionRecord",
            phone: _0x16fe5e,
            name: "商品采集"
          }), chrome.runtime.sendMessage({
            type: "checkTime",
            upShop: 1,
            password: _0x16fe5e,
            model: "采集"
          }, _0x3d1fb8 => {
            if (_0x3d1fb8.data.type == "fcmsl" && _0x3d1fb8.data.up == "ok") {
              chrome.runtime.sendMessage({
                type: "getMyUserInfo"
              }, function (_0x17bb1b) {
                var _0x53b155 = "";
                var _0x44b06a = "";
                var _0x4c40e7 = "";
                var _0xa14d0d = [];
                if (_0x17bb1b.data.length == 0) {
                  _0x35da1f("TEMU卖家后台未登录，是否登录");
                } else {
                  const _0x34223a = document.createElement("div");
                  _0x34223a.classList.add("custom-popup");
                  _0x34223a.style.position = "fixed";
                  _0x34223a.style.top = "42%";
                  _0x34223a.style.left = "50%";
                  _0x34223a.style.transform = "translate(-50%, -50%) scale(0)";
                  _0x34223a.style.background = "#fff";
                  _0x34223a.style.padding = "30px";
                  _0x34223a.style.borderRadius = "10px";
                  _0x34223a.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
                  _0x34223a.style.zIndex = "9999";
                  _0x34223a.style.width = "600px";
                  _0x34223a.style.height = "350px";
                  _0x34223a.style.fontFamily = "Arial, sans-serif";
                  _0x34223a.style.transition = "transform 0.3s ease-in-out";
                  const _0x422154 = document.createElement("div");
                  _0x422154.textContent = "店铺";
                  _0x422154.style.fontWeight = "bold";
                  _0x422154.style.marginBottom = "10px";
                  _0x422154.style.fontSize = "18px";
                  _0x34223a.appendChild(_0x422154);
                  const _0x44af58 = document.createElement("select");
                  _0x44af58.style.width = "100%";
                  _0x44af58.style.fontSize = "16px";
                  _0x44af58.style.padding = "10px";
                  _0x44af58.style.border = "1px solid #ccc";
                  _0x44af58.style.borderRadius = "5px";
                  _0x44af58.style.marginBottom = "20px";
                  _0x17bb1b.data.forEach(_0x2255fd => {
                    const _0x2c8d1b = document.createElement("option");
                    _0x2c8d1b.value = _0x2255fd.value;
                    _0x2c8d1b.textContent = _0x2255fd.name;
                    _0x44af58.appendChild(_0x2c8d1b);
                  });
                  for (var _0x369ba1 = 0; _0x369ba1 < _0x17bb1b.data.length; _0x369ba1++) {
                    if (!_0x17bb1b.data[_0x369ba1].isSemiManagedMall) {
                      _0x44b06a = _0x17bb1b.data[_0x369ba1].value;
                      _0x4c40e7 = _0x17bb1b.data[_0x369ba1].name;
                      break;
                    }
                  }
                  _0x44af58.addEventListener("change", function () {
                    _0x44b06a = this.value;
                    _0x4c40e7 = this.options[this.selectedIndex].text;
                  });
                  _0x34223a.appendChild(_0x44af58);
                  const _0x3a786b = document.createElement("div");
                  _0x3a786b.textContent = "类目（变更请直接修改类目";
                  _0x3a786b.style.fontWeight = "bold";
                  _0x3a786b.style.marginBottom = "10px";
                  _0x3a786b.style.fontSize = "16px";
                  _0x34223a.appendChild(_0x3a786b);
                  const _0x4ecc3a = document.createElement("textarea");
                  _0x4ecc3a.placeholder = "正在加速采集...";
                  _0x4ecc3a.style.display = "flex";
                  _0x4ecc3a.style.position = "relative";
                  _0x4ecc3a.style.padding = "10px";
                  _0x4ecc3a.style.border = "1px solid rgba(255, 255, 255, 0)";
                  _0x4ecc3a.style.borderRadius = "5px";
                  _0x4ecc3a.style.fontSize = "13px";
                  _0x4ecc3a.style.width = "inherit";
                  _0x4ecc3a.style.width = "100%";
                  _0x4ecc3a.style.zIndex = "999";
                  _0x4ecc3a.id = "reCategory";
                  _0x4ecc3a.style.resize = "none";
                  _0x34223a.appendChild(_0x4ecc3a);
                  const _0x2cac0a = document.createElement("div");
                  _0x2cac0a.style.position = "fixed";
                  _0x2cac0a.style.backgroundColor = "rgb(255, 255, 255)";
                  _0x2cac0a.style.border = "1px solid rgb(245, 190, 113)";
                  _0x2cac0a.style.borderRadius = "5px";
                  _0x2cac0a.style.padding = "10px";
                  _0x2cac0a.style.maxHeight = "200px";
                  _0x2cac0a.style.overflow = "auto";
                  _0x2cac0a.style.display = "none";
                  _0x2cac0a.style.width = "85%";
                  _0x2cac0a.style.zIndex = "999999";
                  _0x34223a.appendChild(_0x2cac0a);
                  const _0x40499b = document.createElement("div");
                  _0x40499b.style.display = "flex";
                  _0x40499b.style.justifyContent = "flex-end";
                  _0x40499b.style.gap = "10px";
                  _0x34223a.appendChild(_0x40499b);
                  const _0x2d54bb = document.createElement("div");
                  _0x2d54bb.style.marginTop = "10px";
                  const _0x5d2181 = document.createElement("label");
                  _0x5d2181.style.display = "inline-flex";
                  _0x5d2181.style.alignItems = "center";
                  _0x5d2181.style.cursor = "pointer";
                  _0x5d2181.style.marginRight = "20px";
                  _0x5d2181.style.fontWeight = "bold";
                  _0x5d2181.style.color = "#1e90ff";
                  _0x5d2181.style.opacity = "1";
                  _0x5d2181.style.fontSize = "15px";
                  _0x5d2181.id = "nbmaleLabel";
                  _0x5d2181.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"nbmale\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            快速采集并打开上新页面（需手动处理视频）\n                                        ";
                  const _0x39f1b4 = document.createElement("label");
                  _0x39f1b4.style.display = "inline-flex";
                  _0x39f1b4.style.alignItems = "center";
                  _0x39f1b4.style.cursor = "pointer";
                  _0x39f1b4.style.marginRight = "20px";
                  _0x39f1b4.style.fontWeight = "bold";
                  _0x39f1b4.style.color = "#f46200";
                  _0x39f1b4.style.opacity = "0.4";
                  _0x39f1b4.style.fontSize = "15px";
                  _0x39f1b4.style.marginTop = "8px";
                  _0x39f1b4.id = "maleLabel";
                  _0x39f1b4.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"male\" style=\"margin-right: 8px; accent-color: #f46200;\">\n                                            等待素材加载并自动打开上新页面\n                                        ";
                  const _0x3c1d0a = document.createElement("label");
                  _0x3c1d0a.style.display = "inline-flex";
                  _0x3c1d0a.style.alignItems = "center";
                  _0x3c1d0a.style.cursor = "pointer";
                  _0x3c1d0a.style.fontWeight = "bold";
                  _0x3c1d0a.style.color = "#0a8800";
                  _0x3c1d0a.style.opacity = "0.4";
                  _0x3c1d0a.style.fontSize = "15px";
                  _0x3c1d0a.style.marginTop = "8px";
                  _0x3c1d0a.id = "femaleLabel";
                  _0x3c1d0a.innerHTML = "\n                                            <input type=\"radio\" name=\"gender\" value=\"female\" style=\"margin-right: 8px; accent-color: #0a8800;\">\n                                            后台采集模式(不自动打开上新页面)\n                                        ";
                  _0x2d54bb.appendChild(_0x5d2181);
                  _0x2d54bb.appendChild(_0x39f1b4);
                  _0x2d54bb.appendChild(_0x3c1d0a);
                  _0x40499b.appendChild(_0x2d54bb);
                  const _0x7395f = _0x39f1b4.querySelector("input");
                  const _0x2e8c8a = _0x3c1d0a.querySelector("input");
                  const _0x37bfd7 = _0x5d2181.querySelector("input");
                  chrome.storage.local.get("checkValue", function (_0x3008ac) {
                    if (_0x3008ac.checkValue == "male") {
                      _0x7395f.checked = true;
                    } else {
                      _0x3008ac.checkValue == "female" ? _0x2e8c8a.checked = true : _0x37bfd7.checked = true;
                    }
                    _0x2e640b();
                  });
                  _0x7395f.addEventListener("change", _0x2e640b);
                  _0x2e8c8a.addEventListener("change", _0x2e640b);
                  _0x37bfd7.addEventListener("change", _0x2e640b);
                  function _0x2e640b() {
                    _0x39f1b4.style.opacity = _0x7395f.checked ? "1" : "0.4";
                    _0x3c1d0a.style.opacity = _0x2e8c8a.checked ? "1" : "0.4";
                    _0x5d2181.style.opacity = _0x37bfd7.checked ? "1" : "0.4";
                    const _0x3f0d4f = document.querySelector("input[name=\"gender\"]:checked").value;
                    chrome.storage.local.set({
                      checkValue: _0x3f0d4f
                    });
                  }
                  const _0x5ca09a = document.createElement("button");
                  _0x5ca09a.textContent = "取消";
                  _0x5ca09a.style.padding = "10px 18px";
                  _0x5ca09a.style.border = "none";
                  _0x5ca09a.style.borderRadius = "5px";
                  _0x5ca09a.style.background = "#ececec";
                  _0x5ca09a.style.color = "#000";
                  _0x5ca09a.style.fontFamily = "Arial, sans-serif";
                  _0x5ca09a.style.cursor = "pointer";
                  _0x5ca09a.style.marginTop = "12px";
                  _0x5ca09a.style.fontSize = "13px";
                  _0x5ca09a.style.width = "82px";
                  _0x5ca09a.addEventListener("click", _0x5afb8b);
                  _0x40499b.appendChild(_0x5ca09a);
                  const _0x4ce532 = document.createElement("button");
                  _0x4ce532.textContent = "商品采集中";
                  _0x4ce532.style.padding = "10px 30px";
                  _0x4ce532.style.border = "none";
                  _0x4ce532.style.borderRadius = "5px";
                  _0x4ce532.style.background = "#fb7701f7";
                  _0x4ce532.style.color = "#fff";
                  _0x4ce532.style.fontFamily = "Arial, sans-serif";
                  _0x4ce532.style.cursor = "pointer";
                  _0x4ce532.style.marginTop = "12px";
                  _0x4ce532.style.fontSize = "13px";
                  _0x4ce532.style.width = "150px";
                  _0x4ce532.disabled = true;
                  _0x4ce532.addEventListener("click", function () {
                    chrome.runtime.sendMessage({
                      type: "checkTime",
                      upShop: 1,
                      password: _0x16fe5e,
                      model: "采集",
                      mallid: _0x44b06a,
                      shopName: _0x4c40e7
                    }, _0x1c6f85 => {
                      if (_0x1c6f85.data.shopState == "正常") {
                        var _0x2b1fa0 = document.querySelector("input[name=\"gender\"]:checked").value;
                        chrome.storage.local.set({
                          checkValue: _0x2b1fa0
                        });
                        _0x24b6b5(_0xa14d0d, _0x2b1fa0);
                        _0x5afb8b();
                      } else {
                        if (_0x1c6f85.data.shopState == "可绑") {
                          showCustomAlert("是否绑定当前店铺使用<br>" + _0x4c40e7, "可绑定帮助", _0x44b06a, _0x16fe5e, _0x4c40e7);
                        } else {
                          if (_0x1c6f85.data.shopState == "超绑") {
                            showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                          } else {
                            _0x1c6f85.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                          }
                        }
                      }
                    });
                  });
                  _0x40499b.appendChild(_0x4ce532);
                  document.body.appendChild(_0x34223a);
                  setTimeout(() => {
                    _0x34223a.style.transform = "translate(-50%, -50%) scale(1)";
                  }, 50);
                  function _0x5afb8b() {
                    const _0x886573 = document.querySelector(".custom-popup");
                    _0x886573 && (_0x886573.style.transform = "translate(-50%, -50%) scale(0)", setTimeout(() => {
                      _0x886573.remove();
                    }, 300));
                  }
                  var _0x16e670 = [];
                  var _0x489338 = "";
                  let _0x41617e = false;
                  generateProductData(_0x44b06a).then(_0x29ce2e => {
                    _0x4ecc3a.placeholder = "补全类目中...";
                    var _0x29ce2e = typeof _0x29ce2e === "string" ? JSON.parse(_0x29ce2e) : _0x29ce2e;
                    var _0x274a4c = ["", _0x29ce2e.cat1Id, _0x29ce2e.cat2Id, _0x29ce2e.cat3Id, _0x29ce2e.cat4Id];
                    async function _0x7659ca() {
                      await getPropertyTable(_0x29ce2e.catId, _0x44b06a, {});
                      for (let _0x15ef9e = 0; _0x15ef9e < _0x274a4c.length; _0x15ef9e++) {
                        var _0x577351 = [];
                        var _0x13a4d6 = false;
                        if (_0x274a4c[_0x15ef9e].toString() == "0") {
                          continue;
                        }
                        const _0x267425 = _0x274a4c[_0x15ef9e];
                        const _0x5c3587 = _0x15ef9e === _0x274a4c.length - 1 ? _0x29ce2e.catId : _0x274a4c[_0x15ef9e + 1];
                        try {
                          const _0x13758a = await _0x36cf7c({
                            parentCatId: _0x267425
                          }, _0x44b06a);
                          for (let _0x30754e = 0; _0x30754e < _0x13758a.result.categoryNodeVOS.length; _0x30754e++) {
                            const _0x538f9a = _0x13758a.result.categoryNodeVOS[_0x30754e];
                            _0x538f9a.isLeaf == false && _0x577351.push(_0x538f9a);
                            if (_0x538f9a.catId == _0x5c3587) {
                              _0x16e670.push(_0x538f9a.catName);
                              _0xa14d0d.push(_0x5c3587);
                              _0x13a4d6 = true;
                              break;
                            }
                          }
                          if (_0x13a4d6 == false && _0xa14d0d[_0xa14d0d.length - 1] != _0x29ce2e.catId) {
                            if (_0xa14d0d[_0xa14d0d.length - 1] == _0x29ce2e.cat4Id) {
                              let _0x211f81 = 0;
                              let _0x43136d = false;
                              const _0x2d4d40 = new Set();
                              async function _0x25b4e1(_0x454dd6) {
                                if (_0x211f81 >= 50) {
                                  _0x43136d = true;
                                  _0x41617e = true;
                                  return null;
                                }
                                _0x211f81++;
                                if (!_0x43136d) {
                                  for (let _0xb07d06 = 0; _0xb07d06 < _0x454dd6.length; _0xb07d06++) {
                                    if (_0x2d4d40.has(_0x454dd6[_0xb07d06].catId)) {
                                      continue;
                                    }
                                    _0x2d4d40.add(_0x454dd6[_0xb07d06].catId);
                                    if (_0x454dd6[_0xb07d06].catId == _0x29ce2e.catId) {
                                      _0x577351.push(_0x454dd6[_0xb07d06]);
                                      return _0x454dd6[_0xb07d06].catId;
                                    } else {
                                      if (_0x454dd6[_0xb07d06].isLeaf == false) {
                                        _0x577351.push(_0x454dd6[_0xb07d06]);
                                        const _0x45efb7 = await _0x36cf7c({
                                          parentCatId: _0x454dd6[_0xb07d06].catId
                                        }, _0x44b06a);
                                        const _0x54257f = await _0x25b4e1(_0x45efb7.result.categoryNodeVOS);
                                        if (_0x54257f) {
                                          return _0x54257f;
                                        }
                                      }
                                    }
                                  }
                                  return null;
                                }
                                return null;
                              }
                              await (async () => {
                                let _0xa529f8 = _0x29ce2e.catId;
                                const _0x574890 = [];
                                const _0x3fca39 = [];
                                var _0x7bbf27 = await _0x25b4e1(_0x577351);
                                _0x7bbf27 != _0x29ce2e.catId && (_0x41617e = true);
                                function _0x36cc0d(_0x1b27d4) {
                                  for (const _0xd3de7b of _0x577351) {
                                    if (_0xd3de7b.catId == _0xa529f8) {
                                      _0x574890.push(_0xd3de7b.parentCatId);
                                      _0x3fca39.push(_0xd3de7b.catName);
                                      _0xa529f8 = _0xd3de7b.parentCatId;
                                      return _0x36cc0d(_0xd3de7b.parentCatId);
                                    }
                                  }
                                }
                                _0x36cc0d(_0xa529f8);
                                _0x574890.reverse();
                                _0x574890.push(_0x29ce2e.catId);
                                const _0x4cb80b = Array.from(new Set(_0x574890));
                                _0x3fca39.reverse();
                                _0xa14d0d = _0xa14d0d.concat(_0x4cb80b);
                                for (const _0x250ddc of _0x3fca39) {
                                  _0x16e670.push(_0x250ddc);
                                }
                              })();
                            } else {
                              _0x41617e = true;
                            }
                          }
                        } catch (_0x13316c) {
                          console.error("请求失败:", _0x13316c);
                        }
                      }
                      for (var _0x400016 = 1; _0x400016 < _0xa14d0d.length + 1; _0x400016++) {
                        _0x29ce2e["cat" + _0x400016 + "Id"] = _0xa14d0d[_0x400016 - 1];
                      }
                    }
                    _0x7659ca().then(() => {
                      _0x489338 = _0x16e670.join(">");
                      _0x41617e ? (_0x5c1a2a(_0x489338), _0x4ecc3a.value = _0x489338 + "（类目不完整）") : _0x4ecc3a.value = _0x489338;
                    }).then(async () => {
                      const _0x407a77 = await Promise.all(_0x29ce2e.productPropertyReqs.map(async _0x216b40 => {
                        try {
                          const _0x264812 = await getPropertyTable(_0x29ce2e.catId, _0x44b06a, _0x216b40);
                          return _0x264812;
                        } catch (_0x115c2a) {
                          console.error("Error saving property data:", _0x115c2a.message);
                          throw _0x115c2a;
                        }
                      }));
                      _0x29ce2e.productPropertyReqs = _0x407a77;
                      delete _0x29ce2e.catId;
                      _0x29ce2e.productPropertyReqs = _0x29ce2e.productPropertyReqs.filter(_0x4be02b => _0x4be02b !== null && _0x4be02b !== undefined);
                      const _0x15453f = _0x29ce2e.productSpecPropertyReqs.map(async _0x355b1f => {
                        try {
                          if (_0x355b1f.propValue) {
                            var _0x4534c7 = await getspecId(_0x355b1f.propValue, _0x355b1f.parentSpecId, _0x44b06a);
                            _0x29ce2e.productSkcReqs.forEach(_0x222411 => {
                              _0x222411.productSkuReqs.forEach(_0x44c00d => {
                                _0x44c00d.productSkuSpecReqs = _0x44c00d.productSkuSpecReqs.map(_0x4c563e => {
                                  if (_0x4c563e.parentSpecId === _0x355b1f.parentSpecId && _0x4c563e.specName === _0x355b1f.propValue) {
                                    _0x4c563e.specId = _0x4534c7;
                                    for (var _0x1ed1c8 = 0; _0x1ed1c8 < _0x29ce2e.productSpecPropertyReqs.length; _0x1ed1c8++) {
                                      if (_0x29ce2e.productSpecPropertyReqs[_0x1ed1c8].propValue == _0x355b1f.propValue) {
                                        _0x29ce2e.productSpecPropertyReqs[_0x1ed1c8].specId = _0x4534c7;
                                        _0x29ce2e.productSpecPropertyReqs[_0x1ed1c8].propValue = _0x355b1f.propValue;
                                        _0x29ce2e.productSpecPropertyReqs[_0x1ed1c8].specName = _0x355b1f.propValue;
                                        break;
                                      }
                                    }
                                  }
                                  return _0x4c563e;
                                });
                              });
                            });
                          }
                        } catch (_0x64c189) {
                          console.error("Error retrieving spec ID:", _0x64c189.message);
                        }
                      });
                      await Promise.all(_0x15453f);
                      _0x53b155 = typeof _0x29ce2e === "string" ? JSON.parse(_0x29ce2e) : _0x29ce2e;
                      _0x4ce532.textContent = "上新";
                      _0x4ce532.disabled = false;
                    });
                  }).catch(_0x51da19 => {
                    _0x5afb8b();
                    showCustomAlert("采集失败，请保持网络畅通，或联系小助手");
                  });
                  let _0x470822;
                  document.getElementById("reCategory").addEventListener("input", function (_0x757535) {
                    clearTimeout(_0x470822);
                    _0x470822 = setTimeout(async function () {
                      const _0x23927f = _0x757535.target.value.trim();
                      _0x4ecc3a.style.border = "1px solid #ccc";
                      if (_0x23927f === "") {
                        _0x2cac0a.innerHTML = "";
                        return;
                      }
                      try {
                        await _0x5c1a2a(_0x23927f);
                      } catch (_0xfb546d) {
                        console.error("获取数据时发生错误:", _0xfb546d);
                      }
                    }, 500);
                  });
                  document.getElementById("reCategory").addEventListener("click", function (_0x9cf787) {
                    _0x4ecc3a.style.border = "1px solid #ccc";
                  });
                  async function _0x5c1a2a(_0x3f08ab) {
                    try {
                      chrome.runtime.sendMessage({
                        type: "getMyCategory",
                        mallId: _0x44b06a,
                        text: _0x3f08ab
                      }, _0x4f13d2 => {
                        _0x487f93(_0x4f13d2.data);
                      });
                    } catch (_0x4f7cf8) {
                      console.error("发生错误:", _0x4f7cf8);
                      throw _0x4f7cf8;
                    }
                  }
                  function _0x487f93(_0x4158e3) {
                    _0x2cac0a.innerHTML = "";
                    _0x4158e3.forEach(_0x5048dc => {
                      const _0x29a383 = document.createElement("div");
                      _0x29a383.textContent = _0x5048dc.name;
                      _0x29a383.setAttribute("data-value", _0x5048dc.value);
                      _0x29a383.style.padding = "5px";
                      _0x29a383.style.fontSize = "12px";
                      _0x29a383.style.cursor = "pointer";
                      _0x29a383.addEventListener("mouseenter", function () {
                        this.classList.add("hover-effect");
                      });
                      _0x29a383.addEventListener("mouseleave", function () {
                        this.classList.remove("hover-effect");
                      });
                      _0x29a383.addEventListener("click", function () {
                        _0x4ecc3a.value = _0x5048dc.name;
                        _0xa14d0d = _0x5048dc.value.split(" ");
                        _0x2cac0a.style.display = "none";
                      });
                      _0x2cac0a.appendChild(_0x29a383);
                    });
                    _0x2cac0a.style.display = "block";
                  }
                  document.addEventListener("click", function (_0x88e303) {
                    const _0x1e33f3 = _0x88e303.target;
                    _0x1e33f3 !== _0x4ecc3a && !_0x2cac0a.contains(_0x1e33f3) && (_0x2cac0a.style.display = "none", _0x4ecc3a.style.border = "1px solid rgba(255, 255, 255, 0)");
                  });
                  async function _0x24b6b5(_0x444e29, _0x52e9d7) {
                    var _0x5e78e8 = "dd" + Date.now();
                    _0x53b155.idTime = _0x5e78e8;
                    try {
                      if (_0x444e29.length == 0) {
                        throw new Error("类目为空");
                      } else {
                        chrome.runtime.sendMessage({
                          type: "addProductDraft",
                          catId: _0x444e29[_0x444e29.length - 1],
                          mallId: _0x44b06a
                        }, function (_0x3cd958) {
                          for (var _0x20ad15 = 1; _0x20ad15 < 11; _0x20ad15++) {
                            _0x53b155["cat" + _0x20ad15 + "Id"] = 0;
                          }
                          _0x444e29 = [...new Set(_0x444e29)];
                          for (let _0x3f4ae3 = 1; _0x3f4ae3 < _0x444e29.length + 1; _0x3f4ae3++) {
                            _0x53b155["cat" + _0x3f4ae3 + "Id"] = _0x444e29[_0x3f4ae3 - 1];
                          }
                          _0x53b155.productDraftId = _0x3cd958.data;
                          var _0x5c91ec = "0";
                          createLoader(2);
                          let _0x305bf9 = setInterval(function () {
                            fanyi !== "" && (/[\u4e00-\u9fa5]/.test(fanyi) ? _0x53b155.productName = fanyi : _0x53b155.productI18nReqs[0].productName = fanyi, _0x5c91ec = "1", clearInterval(_0x305bf9));
                          }, 200);
                          let _0x21c2c1 = setInterval(function () {
                            if (_0x5c91ec == "1") {
                              if (_0x52e9d7 == "male") {
                                generateVideoVid({
                                  goods: {
                                    video: {
                                      videoUrl: _0x53b155.productCarouseVideoReqList[0].videoUrl
                                    }
                                  }
                                }, _0x5e78e8, _0x44b06a);
                                clearInterval(_0x21c2c1);
                                updateLoaderMessage("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长");
                                chrome.runtime.sendMessage({
                                  type: "postDataSave",
                                  data: _0x53b155,
                                  mallId: _0x44b06a,
                                  ok: videoDataUpInfo.ok
                                }, function (_0x527adc) {
                                  window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x3cd958.data);
                                  removeLoader();
                                });
                              } else {
                                if (_0x52e9d7 == "female") {
                                  generateVideoVid({
                                    goods: {
                                      video: {
                                        videoUrl: _0x53b155.productCarouseVideoReqList[0].videoUrl
                                      }
                                    }
                                  }, _0x5e78e8, _0x44b06a);
                                  removeLoader();
                                  showCustomAlert("数据正在采集，请稍后进入草稿箱查看！<br><br>");
                                  clearInterval(_0x21c2c1);
                                  chrome.runtime.sendMessage({
                                    type: "postDataSave",
                                    data: _0x53b155,
                                    mallId: _0x44b06a,
                                    ok: videoDataUpInfo.ok
                                  }, function (_0x4ac9d8) {});
                                } else {
                                  (_0x52e9d7 = "nbmale") && (clearInterval(_0x21c2c1), updateLoaderMessage("正在等待TEMU官方审核素材<hr>需要一定时间，请不要离开当前页面<hr>视频越大时间越长"), chrome.runtime.sendMessage({
                                    type: "postDataSave",
                                    data: _0x53b155,
                                    mallId: _0x44b06a,
                                    ok: 2
                                  }, function (_0x1c28f5) {
                                    window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0x3cd958.data);
                                    removeLoader();
                                  }));
                                }
                              }
                            }
                          }, 250);
                        });
                      }
                    } catch (_0x13fe3f) {
                      throw _0x13fe3f;
                    }
                  }
                }
              });
            } else {
              if (_0x3d1fb8.data.type == "mal") {
                showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
              } else {
                if (_0x3d1fb8.data.type == "fcmsl" && _0x3d1fb8.data.up == "no") {
                  showCustomAlert("超出最大上新次数，请联系工作人员", "常规帮助");
                } else {
                  _0x3d1fb8.data.type == "malout" ? showCustomAlert("超出最大绑定数量，请联系工作人员", "常规帮助") : showCustomAlert("未授权，请联系工作人员", "常规帮助");
                }
              }
            }
          })) : showCustomAlert("请联系工作人员授权后使用", "常规帮助");
        });
      }
      var _0x106eda = setInterval(_0x2009ba, 1200);
      setTimeout(function () {
        clearInterval(_0x106eda);
      }, 20000);
    })();
    function _0x3a4492() {
      const _0x112d69 = document.querySelectorAll("script");
      var _0x37ebc4 = "";
      _0x112d69.forEach(_0x5e254d => {
        if (_0x5e254d.innerText.includes("window.rawData")) {
          const _0x270a1e = /window\.rawData=(.*?);document/s;
          const _0x368c57 = _0x5e254d.innerText.match(_0x270a1e);
          if (_0x368c57) {
            const _0x168e9b = _0x368c57[1];
            _0x37ebc4 = JSON.parse(_0x168e9b).store;
          }
        }
      });
      _0x37ebc4 == "" && (_0x37ebc4 = myMessage);
      var _0x3f6c80 = {
        "主图": [],
        "描述图": [],
        "视频": [],
        "sku图": [],
        "名称": ""
      };
      var _0x4aac0c = _0x37ebc4.goods;
      _0x3f6c80["名称"] = sanitizeFileName(_0x4aac0c.goodsName).slice(0, 210);
      _0x4aac0c.video && _0x3f6c80["视频"].push(_0x4aac0c.video.videoUrl);
      _0x3f6c80["主图"] = _0x4aac0c.bannerList.map(_0x236119 => _0x236119.url);
      _0x37ebc4.productDetail.floorList && (_0x3f6c80["描述图"] = _0x37ebc4.productDetail.floorList.filter(_0xfe9675 => !_0xfe9675.items[0].text).map(_0x580212 => _0x580212.items[0].url));
      var _0x25402e = _0x4aac0c.gallery.filter(_0x1e2d68 => _0x1e2d68.showTextSpecs).map(_0x4d46e3 => [_0x4d46e3.url, sanitizeFileName(_0x4d46e3.showTextSpecs[0].specValue)]);
      _0x3f6c80["sku图"] = _0x25402e;
      downloadFileUrls = _0x3f6c80;
      var _0x2a9de3 = document.createElement("div");
      _0x2a9de3.id = "card-popup";
      _0x2a9de3.style.bottom = "0";
      _0x2a9de3.style.left = "0";
      _0x2a9de3.style.width = "100%";
      _0x2a9de3.style.background = "#fff";
      _0x2a9de3.style.border = "1px solid #ccc";
      _0x2a9de3.style.borderTop = "none";
      _0x2a9de3.style.borderRadius = "5px";
      _0x2a9de3.style.padding = "8px";
      _0x2a9de3.style.boxShadow = "rgba(236, 167, 18, 0.3) 0px 0px 10px";
      _0x2a9de3.style.textAlign = "left";
      _0x2a9de3.style.zIndex = "9999";
      var _0xd85b7f = setInterval(function () {
        var _0x145b3d = document.querySelector("[data-id=\"module\"]");
        var _0x311406 = document.querySelector("#card-popup");
        _0x145b3d && _0x311406 == null && (_0x145b3d.insertBefore(_0x2a9de3, _0x145b3d.firstChild), _0x35e1aa());
      }, 1000);
      setTimeout(function () {
        clearInterval(_0xd85b7f);
      }, 20000);
      function _0x35e1aa() {
        _0x2a9de3.innerHTML = "";
        var _0x13f626 = document.createElement("table");
        _0x13f626.style.width = "100%";
        var _0x3a62f2 = document.createElement("thead");
        var _0x4c4b62 = document.createElement("tr");
        var _0x5b1ee9 = ["商品", "价格", "预估供货价", "库存"];
        _0x5b1ee9.forEach(function (_0x46aec1) {
          var _0x2151c6 = document.createElement("th");
          _0x2151c6.textContent = _0x46aec1;
          _0x4c4b62.appendChild(_0x2151c6);
        });
        _0x3a62f2.appendChild(_0x4c4b62);
        _0x13f626.appendChild(_0x3a62f2);
        var _0x3f00e5 = document.getElementById("rightContent");
        var _0x547efe = /Local warehouse/;
        var _0x176be1 = document.createElement("tbody");
        var _0x752e37 = _0x37ebc4.localInfo.currency.toLowerCase();
        chrome.runtime.sendMessage({
          type: "exchangeRate",
          rate: _0x752e37
        }, _0x2dcab3 => {
          _0x37ebc4.sku && _0x37ebc4.sku.forEach(function (_0x43dee3) {
            var _0x17e3ce = "";
            _0x43dee3.specs.forEach(function (_0x1088e6) {
              _0x17e3ce += _0x1088e6.specValue !== "undefined" ? _0x1088e6.specValue + " " : _0x1088e6.spec_value + " ";
            });
            var _0x207b34 = parseFloat((_0x43dee3.normalPriceStr !== "undefined" ? _0x43dee3.normalPriceStr : _0x43dee3.normal_price_str).replace(/[^\d.]/g, "")) * parseFloat(_0x2dcab3);
            var _0x1d07a4;
            _0x547efe.test(_0x3f00e5.innerHTML) ? _0x1d07a4 = _0x207b34.toFixed(2) : _0x1d07a4 = (_0x207b34 / 2 * 0.8).toFixed(2);
            var _0x48f843 = document.createElement("tr");
            var _0x19aa99 = document.createElement("td");
            _0x19aa99.textContent = _0x17e3ce;
            _0x48f843.appendChild(_0x19aa99);
            var _0x2f2577 = document.createElement("td");
            _0x2f2577.textContent = _0x43dee3.normalPriceStr !== "undefined" ? _0x43dee3.normalPriceStr : _0x43dee3.normal_price_str;
            _0x48f843.appendChild(_0x2f2577);
            var _0x508af0 = document.createElement("td");
            _0x508af0.textContent = _0x1d07a4;
            _0x48f843.appendChild(_0x508af0);
            var _0x7b217e = document.createElement("td");
            _0x7b217e.textContent = _0x43dee3.stockQuantity !== "undefined" ? _0x43dee3.stockQuantity : _0x43dee3.stock_quantity;
            _0x48f843.appendChild(_0x7b217e);
            _0x176be1.appendChild(_0x48f843);
          });
          _0x13f626.appendChild(_0x176be1);
          _0x2a9de3.appendChild(_0x13f626);
        });
      }
    }
    _0x3a4492();
  });
} else {
  currentUrl.includes("product-create") && currentUrl.includes("product-edit") && chrome.storage.local.get("codePhone", function (_0x5efea1) {
    const _0x3ce2c1 = _0x5efea1.codePhone;
    getMallId().then(_0x1cd9d4 => {
      chrome.runtime.sendMessage({
        type: "checkTime",
        password: _0x3ce2c1,
        model: "裂变",
        mallid: _0x1cd9d4,
        shopName: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x1cc8f1 => {
        _0x1cc8f1.data.type == "fcmsl" && (window.addEventListener("popstate", function (_0x20f551) {
          (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) && (async () => {
            window.addEventListener("popstate", function (_0x593c82) {
              if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId") || window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?from=productList&productId")) {
                var _0x124ac4 = document.querySelector("#reCategory");
                !_0x124ac4 && !function () {
                  "use strict";

                  const _0x673e2a = document.createElement("style");
                  _0x673e2a.textContent = "\n                                                .hover-effect {\n                                            \n                                                    background-color: #fff6e6;\n                                                }\n                                        ";
                  document.head.append(_0x673e2a);
                  const _0xb78059 = document.createElement("input");
                  _0xb78059.placeholder = "如需修改类目，请在这里输入类目";
                  _0xb78059.style.display = "flex";
                  _0xb78059.style.position = "relative";
                  _0xb78059.style.padding = "10px";
                  _0xb78059.style.border = "1px solid rgba(255, 255, 255, 0)";
                  _0xb78059.style.borderRadius = "5px";
                  _0xb78059.style.zIndex = "999";
                  _0xb78059.style.width = "inherit";
                  _0xb78059.id = "reCategory";
                  !document.querySelector("#reCategory") && document.body.appendChild(_0xb78059);
                  const _0x3eb294 = document.createElement("div");
                  _0x3eb294.style.position = "fixed";
                  _0x3eb294.style.backgroundColor = "rgb(255, 255, 255)";
                  _0x3eb294.style.border = "1px solid rgb(245, 190, 113)";
                  _0x3eb294.style.borderRadius = "5px";
                  _0x3eb294.style.padding = "10px";
                  _0x3eb294.style.maxHeight = "250px";
                  _0x3eb294.style.overflow = "auto";
                  _0x3eb294.style.display = "none";
                  _0x3eb294.style.width = "inherit";
                  _0x3eb294.style.zIndex = "999999";
                  myWaitForElement("[class*=\"product-create_productPublishContainer\"]").then(_0x38a140 => {
                    var _0x53a96f = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
                    if (_0x53a96f) {
                      _0x53a96f.children.length >= 3 ? !document.querySelector("#reCategory") && (_0x53a96f.insertBefore(_0xb78059, _0x53a96f.children[2]), _0x53a96f.insertBefore(_0x3eb294, _0x53a96f.children[3])) : !document.querySelector("#reCategory") && (_0x53a96f.insertBefore(_0xb78059, _0x53a96f.children[1]), _0x53a96f.insertBefore(_0x3eb294, _0x53a96f.children[2]));
                    }
                  });
                  let _0xc792de;
                  document.getElementById("reCategory").addEventListener("input", function (_0x423e5b) {
                    clearTimeout(_0xc792de);
                    _0xc792de = setTimeout(async function () {
                      const _0x1b2dad = _0x423e5b.target.value.trim();
                      _0xb78059.style.border = "1px solid #ccc";
                      if (_0x1b2dad === "") {
                        _0x3eb294.innerHTML = "";
                        return;
                      }
                      try {
                        const _0x11296a = await _0x5bd5e3(_0x1b2dad);
                        _0x18e965(_0x11296a);
                      } catch (_0x3bcba4) {
                        console.error("获取数据时发生错误:", _0x3bcba4);
                      }
                    }, 500);
                  });
                  async function _0x5bd5e3(_0x59870b) {
                    try {
                      const _0x45211e = await fetchData();
                      const _0xe5ba07 = await _0x58656d(_0x45211e, _0x59870b);
                      return _0xe5ba07;
                    } catch (_0x576239) {
                      console.error("发生错误:", _0x576239);
                      throw _0x576239;
                    }
                  }
                  function _0x18e965(_0x3bb257) {
                    _0x3eb294.innerHTML = "";
                    _0x3bb257.forEach(_0x687a4b => {
                      const _0x16675a = document.createElement("div");
                      _0x16675a.textContent = _0x687a4b.name;
                      _0x16675a.setAttribute("data-value", _0x687a4b.value);
                      _0x16675a.style.padding = "5px";
                      _0x16675a.style.fontSize = "12px";
                      _0x16675a.style.cursor = "pointer";
                      _0x16675a.addEventListener("mouseenter", function () {
                        this.classList.add("hover-effect");
                      });
                      _0x16675a.addEventListener("mouseleave", function () {
                        this.classList.remove("hover-effect");
                      });
                      _0x16675a.addEventListener("click", function () {
                        _0xb78059.value = _0x687a4b.name;
                        _0x30cb45("是否确定修改类目<br><br>" + _0x687a4b.name, _0x687a4b.value.split(" "));
                        _0x3eb294.style.display = "none";
                      });
                      _0x3eb294.appendChild(_0x16675a);
                    });
                    _0x3eb294.style.display = "block";
                  }
                  document.addEventListener("click", function (_0x32e31d) {
                    const _0x406777 = _0x32e31d.target;
                    _0x406777 !== _0xb78059 && !_0x3eb294.contains(_0x406777) && (_0x3eb294.style.display = "none", _0xb78059.style.border = "1px solid rgba(255, 255, 255, 0)");
                  });
                }();
              }
            });
            async function _0x58656d(_0x102de3, _0x263a81) {
              const _0x3e94ef = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x102de3
              });
              const _0x5eaa59 = JSON.stringify({
                searchText: _0x263a81
              });
              const _0x490377 = {
                method: "POST",
                headers: _0x3e94ef,
                body: _0x5eaa59,
                redirect: "follow"
              };
              try {
                const _0x50543f = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x490377);
                const _0x29c252 = await _0x50543f.json();
                lin = [];
                for (var _0x5a9d19 of _0x29c252.result.categoryPaths) {
                  var _0x287f7a = [];
                  var _0x4db9fa = [];
                  for (var _0x474b69 in _0x5a9d19) {
                    _0x474b69.startsWith("cat") && _0x5a9d19[_0x474b69] && _0x5a9d19[_0x474b69].catName !== undefined && (_0x287f7a.push(_0x5a9d19[_0x474b69].catName), _0x4db9fa.push(_0x5a9d19[_0x474b69].catId));
                  }
                  var _0x46eac5 = _0x4db9fa.join(" ");
                  var _0x52fe20 = _0x287f7a.join(" > ");
                  lin.push({
                    name: _0x52fe20,
                    value: _0x46eac5
                  });
                }
                return lin;
              } catch (_0x8596) {}
            }
            function _0x30cb45(_0x458eea, _0x10232a) {
              var _0x5030be = document.createElement("div");
              _0x5030be.style.position = "fixed";
              _0x5030be.style.top = "50%";
              _0x5030be.style.left = "50%";
              _0x5030be.style.transform = "translate(-50%, -50%)";
              _0x5030be.style.backgroundColor = "#fff";
              _0x5030be.style.padding = "20px";
              _0x5030be.style.border = "2px solid #fb7701";
              _0x5030be.style.borderBottom = "5px solid #fb7701e3";
              _0x5030be.style.borderRadius = "8px";
              _0x5030be.style.color = "rgba(0,0,0,.8)";
              _0x5030be.style.fontSize = "18px";
              _0x5030be.style.textAlign = "center";
              _0x5030be.style.zIndex = "9999";
              var _0x124c92 = document.createElement("p");
              _0x124c92.innerHTML = _0x458eea;
              _0x5030be.appendChild(_0x124c92);
              var _0x63504a = document.createElement("button");
              _0x63504a.textContent = "确定";
              _0x63504a.style.marginRight = "10px";
              _0x63504a.style.padding = "8px 20px";
              _0x63504a.style.border = "none";
              _0x63504a.style.borderRadius = "5px";
              _0x63504a.style.backgroundColor = "#4CAF50";
              _0x63504a.style.color = "white";
              _0x63504a.style.cursor = "pointer";
              _0x63504a.onclick = function () {
                chrome.runtime.sendMessage({
                  type: "usageFunctionRecord",
                  phone: _0x3ce2c1,
                  name: "商品裂变"
                });
                document.body.removeChild(_0x5030be);
                createLoader();
                _0x3dceb6(_0x10232a).then(_0x52a465 => {}).catch(_0x9bd40f => {
                  console.error("Operation failed:", _0x9bd40f);
                });
              };
              _0x5030be.appendChild(_0x63504a);
              var _0x2ed15d = document.createElement("button");
              _0x2ed15d.textContent = "取消";
              _0x2ed15d.style.padding = "8px 20px";
              _0x2ed15d.style.border = "none";
              _0x2ed15d.style.borderRadius = "5px";
              _0x2ed15d.style.backgroundColor = "#f44336";
              _0x2ed15d.style.color = "white";
              _0x2ed15d.style.cursor = "pointer";
              _0x2ed15d.onclick = function () {
                document.body.removeChild(_0x5030be);
              };
              _0x5030be.appendChild(_0x2ed15d);
              document.body.appendChild(_0x5030be);
            }
            async function _0x1186ed(_0xa1f299, _0x15f831) {
              const _0x577e2a = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add";
              const _0x2b8462 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x15f831
              });
              const _0x51cd08 = JSON.stringify({
                catId: _0xa1f299
              });
              const _0x598a2c = {
                method: "POST",
                headers: _0x2b8462,
                body: _0x51cd08,
                redirect: "follow"
              };
              try {
                const _0x1c146f = await fetch(_0x577e2a, _0x598a2c);
                const _0x272ad6 = await _0x1c146f.json();
                return _0x272ad6.result.productDraftId;
              } catch (_0xb3ac35) {
                console.error("error", _0xb3ac35);
                throw _0xb3ac35;
              }
            }
            async function _0xabd527(_0x25c493, _0x5398a0, _0x23d393, _0x575869) {
              const _0x2ab6a9 = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                mallid: _0x25c493
              });
              const _0x406b57 = JSON.stringify(_0x23d393);
              const _0x120df2 = {
                method: "POST",
                headers: _0x2ab6a9,
                body: _0x406b57,
                redirect: "follow"
              };
              try {
                const _0x3c28d7 = await fetch(_0x575869, _0x120df2);
                var _0x15d133 = await _0x3c28d7.json();
                _0x15d133 = _0x15d133.result;
                _0x15d133.carouseVideoVOList.length != 0 && generateVideoVid({
                  goods: {
                    video: {
                      videoUrl: _0x15d133.carouseVideoVOList[0].videoUrl
                    }
                  }
                }, _0x25c493);
                shopData = {
                  cat1Id: 0,
                  cat2Id: 0,
                  cat3Id: 0,
                  cat4Id: 0,
                  cat5Id: 0,
                  cat6Id: 0,
                  cat7Id: 0,
                  cat8Id: 0,
                  cat9Id: 0,
                  cat10Id: 0,
                  materialMultiLanguages: [],
                  productName: _0x15d133.productName,
                  productI18nReqs: _0x15d133.productI18nList,
                  productPropertyReqs: _0x15d133.productPropertyList,
                  productSkcReqs: [{
                    previewImgUrls: [],
                    productSkcCarouselImageI18nReqs: [],
                    extCode: "",
                    mainProductSkuSpecReqs: [{
                      parentSpecId: 0,
                      parentSpecName: "",
                      specId: 0,
                      specName: ""
                    }],
                    productSkuReqs: [],
                    productSkcId: 0
                  }],
                  productSpecPropertyReqs: [],
                  carouselImageUrls: _0x15d133.carouselImageUrls,
                  carouselImageI18nReqs: [],
                  materialImgUrl: _0x15d133.carouselImageUrls[0],
                  goodsLayerDecorationReqs: _0x15d133.goodsLayerDecorationVOList,
                  goodsLayerDecorationCustomizeI18nReqs: [],
                  sizeTemplateIds: [],
                  showSizeTemplateIds: [],
                  goodsModelReqs: [],
                  productWhExtAttrReq: {
                    outerGoodsUrl: "",
                    productOrigin: {
                      countryShortName: "CN"
                    }
                  },
                  productCarouseVideoReqList: _0x15d133.carouseVideoVOList,
                  goodsAdvantageLabelTypes: [],
                  productDetailVideoReqList: [],
                  productOuterPackageImageReqs: _0x15d133.outerPackageImages,
                  productOuterPackageReq: {},
                  sensitiveTransNormalFileReqs: [],
                  productGuideFileI18nReqs: [],
                  productSaleExtAttrReq: {
                    bodyShape: null
                  },
                  productNonAuditExtAttrReq: {
                    california65WarningInfoReq: {
                      california65WarningType: null,
                      california65ChemicalNames: null
                    },
                    cosmeticInfoReq: {}
                  },
                  personalizationSwitch: 0,
                  productDraftId: _0x5398a0
                };
                lin = [];
                lin2 = [];
                ainfo = _0x15d133.productSkcList[0].productSkuList;
                for (let _0x347d09 of ainfo) {
                  b = {};
                  b.thumbUrl = _0x347d09.thumbUrl;
                  b.productSkuThumbUrlI18nReqs = _0x347d09.productSkuThumbUrlI18nVOList;
                  b.extCode = _0x347d09.extCode;
                  b.supplierPrice = _0x347d09.supplierPrice;
                  b.currencyType = _0x347d09.currencyType;
                  b.productSkuSpecReqs = _0x347d09.productSkuSpecList.map(_0x107f61 => ({
                    parentSpecId: _0x107f61.parentSpecId,
                    parentSpecName: _0x107f61.parentSpecName,
                    specId: _0x107f61.specId,
                    specName: _0x107f61.specName
                  }));
                  b.productSkuId = _0x347d09.productSkuId;
                  b.productSkuSuggestedPriceReq = {
                    specialSuggestedPrice: _0x347d09.productSkuSuggestedPrice ? _0x347d09.productSkuSuggestedPrice.specialSuggestedPrice : null,
                    suggestedPrice: _0x347d09.productSkuSuggestedPrice ? _0x347d09.productSkuSuggestedPrice.suggestedPrice : null,
                    suggestedPriceCurrencyType: _0x347d09.productSkuSuggestedPrice ? _0x347d09.productSkuSuggestedPrice.suggestedPriceCurrencyType : null
                  };
                  b.productSkuWhExtAttrReq = {
                    productSkuVolumeReq: {
                      len: _0x347d09.productSkuWhExtAttr.productSkuVolume.len,
                      width: _0x347d09.productSkuWhExtAttr.productSkuVolume.width,
                      height: _0x347d09.productSkuWhExtAttr.productSkuVolume.height
                    },
                    productSkuWeightReq: {
                      value: _0x347d09.productSkuWhExtAttr.productSkuWeight.value
                    },
                    productSkuBarCodeReqs: [],
                    productSkuSensitiveAttrReq: {
                      isSensitive: 0,
                      sensitiveList: []
                    },
                    productSkuSensitiveLimitReq: {}
                  };
                  lin2.push({
                    parentSpecId: b.productSkuSpecReqs.parentSpecId,
                    parentSpecName: b.productSkuSpecReqs.parentSpecName,
                    specId: b.productSkuSpecReqs.specId,
                    specName: b.productSkuSpecReqs.specName,
                    refPid: 0,
                    pid: 0,
                    templatePid: 0,
                    propName: b.productSkuSpecReqs.parentSpecName,
                    vid: 0,
                    propValue: b.productSkuSpecReqs.specName,
                    valueUnit: "",
                    valueGroupId: 0,
                    valueGroupName: "",
                    valueExtendInfo: ""
                  });
                  lin.push(b);
                }
                shopData.productSkcReqs[0].previewImgUrls = [_0x15d133.carouselImageUrls[0]];
                shopData.productSkcReqs[0].productSkuReqs = lin;
                shopData.productSpecPropertyReqs = [...new Set(lin2)];
                videoDataUpInfo.ok === 1 && (await new Promise(_0x1280e4 => {
                  const _0x3a8c96 = setInterval(() => {
                    videoDataUpInfo.vid && (shopData.productCarouseVideoReqList[0].videoUrl = videoDataUpInfo.url, shopData.productCarouseVideoReqList[0].vid = videoDataUpInfo.vid, clearInterval(_0x3a8c96), _0x1280e4());
                  }, 100);
                }));
                return shopData;
              } catch (_0x1dae03) {
                console.error("error", _0x1dae03);
                throw _0x1dae03;
              }
            }
            async function _0x3dceb6(_0x2a685c) {
              try {
                const _0x274e04 = await fetchData();
                if (!_0x274e04) {
                  throw new Error("Failed to fetch mallId");
                }
                const _0xdcd91f = await _0x1186ed(_0x2a685c[_0x2a685c.length - 1], _0x274e04);
                if (!_0xdcd91f) {
                  throw new Error("Failed to add product draft");
                }
                var _0x328674 = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
                if (new URLSearchParams(window.location.search).get("productDraftId")) {
                  var _0x3a1f3a = await _0xabd527(_0x274e04, _0xdcd91f, {
                    productDraftId: _0x328674
                  }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");
                } else {
                  var _0x3a1f3a = await _0xabd527(_0x274e04, _0xdcd91f, {
                    productId: _0x328674,
                    productEditTaskUid: ""
                  }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
                }
                if (!_0x3a1f3a) {
                  throw new Error("Failed to add product draft");
                }
                _0x2a685c = [...new Set(_0x2a685c)];
                for (let _0x2a7e5d = 1; _0x2a7e5d < _0x2a685c.length + 1; _0x2a7e5d++) {
                  _0x3a1f3a["cat" + _0x2a7e5d + "Id"] = _0x2a685c[_0x2a7e5d - 1];
                }
                const _0x229f9a = await postDataSave(_0x3a1f3a, _0x274e04);
                if (!_0x229f9a) {
                  throw new Error("Failed to save post data");
                }
                chrome.runtime.sendMessage({
                  type: "upDateNewNum"
                }, _0x52e1c9 => {
                  removeLoader();
                  window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0xdcd91f);
                });
              } catch (_0x391b04) {
                console.error("Error during product operations:", _0x391b04);
                removeLoader();
                throw _0x391b04;
              }
            }
          })();
        }), (async () => {
          async function _0x4c75cd(_0x152d7b, _0x5ca17f) {
            const _0x41a484 = new Headers({
              accept: "*/*",
              "accept-language": "zh-CN,zh;q=0.9",
              "content-type": "application/json",
              mallid: _0x152d7b
            });
            const _0x53997a = JSON.stringify({
              searchText: _0x5ca17f
            });
            const _0x28c2f9 = {
              method: "POST",
              headers: _0x41a484,
              body: _0x53997a,
              redirect: "follow"
            };
            try {
              const _0x5e1238 = await fetch("https://seller.kuajingmaihuo.com/bg-anniston-mms/category/search", _0x28c2f9);
              const _0x45ba93 = await _0x5e1238.json();
              lin = [];
              for (var _0x5ef602 of _0x45ba93.result.categoryPaths) {
                var _0x5f3566 = [];
                var _0x5ae5fd = [];
                for (var _0x59d1c6 in _0x5ef602) {
                  _0x59d1c6.startsWith("cat") && _0x5ef602[_0x59d1c6] && _0x5ef602[_0x59d1c6].catName !== undefined && (_0x5f3566.push(_0x5ef602[_0x59d1c6].catName), _0x5ae5fd.push(_0x5ef602[_0x59d1c6].catId));
                }
                var _0x5c3403 = _0x5ae5fd.join(" ");
                var _0x381a2e = _0x5f3566.join(" > ");
                lin.push({
                  name: _0x381a2e,
                  value: _0x5c3403
                });
              }
              return lin;
            } catch (_0x5aec06) {}
          }
          (function () {
            "use strict";

            const _0x509383 = document.createElement("style");
            _0x509383.textContent = "\n                            .hover-effect {\n                        \n                                background-color: #fff6e6;\n                            }\n                            ";
            document.head.append(_0x509383);
            const _0x21a4a9 = document.createElement("input");
            _0x21a4a9.placeholder = "咕噜噜类目变更：如需修改类目，请在这里输入类目";
            _0x21a4a9.style.display = "flex";
            _0x21a4a9.style.position = "relative";
            _0x21a4a9.style.padding = "10px";
            _0x21a4a9.style.border = "1px solid rgba(255, 255, 255, 0)";
            _0x21a4a9.style.borderRadius = "5px";
            _0x21a4a9.style.zIndex = "999";
            _0x21a4a9.style.width = "inherit";
            _0x21a4a9.id = "reCategory";
            document.body.appendChild(_0x21a4a9);
            const _0x6257b7 = document.createElement("div");
            _0x6257b7.style.position = "fixed";
            _0x6257b7.style.backgroundColor = "rgb(255, 255, 255)";
            _0x6257b7.style.border = "1px solid rgb(245, 190, 113)";
            _0x6257b7.style.borderRadius = "5px";
            _0x6257b7.style.padding = "10px";
            _0x6257b7.style.maxHeight = "250px";
            _0x6257b7.style.overflow = "auto";
            _0x6257b7.style.display = "none";
            _0x6257b7.style.width = "inherit";
            _0x6257b7.style.zIndex = "999999";
            "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x4aab79, _0x58669c) => String.fromCharCode(parseInt(_0x58669c, 16))) == _0x21a4a9.placeholder ? "" : !function () {
              chrome.storage.local.set({
                codePhone: ["", ""]
              });
              window.location.reload();
            }();
            myWaitForElement("[class*=\"product-create_productPublishContainer\"]").then(_0x7f9d8e => {
              var _0x390692 = document.querySelector("[class*=\"product-create_productPublishContainer\"]");
              if (_0x390692) {
                _0x390692.children.length >= 3 ? (_0x390692.insertBefore(_0x21a4a9, _0x390692.children[2]), _0x390692.insertBefore(_0x6257b7, _0x390692.children[3])) : (_0x390692.insertBefore(_0x21a4a9, _0x390692.children[1]), _0x390692.insertBefore(_0x6257b7, _0x390692.children[2]));
              }
            });
            let _0x1895d6;
            document.getElementById("reCategory").addEventListener("input", function (_0x3c67ea) {
              clearTimeout(_0x1895d6);
              _0x1895d6 = setTimeout(async function () {
                "咕噜噜类目变更：如需修改类目，请在这里输入类目".replace(/\\u([\d\w]{4})/gi, (_0x4c8630, _0x269b49) => String.fromCharCode(parseInt(_0x269b49, 16))) == document.querySelector("#reCategory").getAttribute("placeholder") ? "" : !function () {
                  chrome.storage.local.set({
                    codePhone: ["", ""]
                  });
                  window.location.reload();
                }();
                const _0x483186 = _0x3c67ea.target.value.trim();
                _0x21a4a9.style.border = "1px solid #ccc";
                if (_0x483186 === "") {
                  _0x6257b7.innerHTML = "";
                  return;
                }
                try {
                  const _0x2529c7 = await _0x22d62a(_0x483186);
                  _0x2dd341(_0x2529c7);
                } catch (_0x59e6df) {
                  console.error("获取数据时发生错误:", _0x59e6df);
                }
              }, 500);
            });
            async function _0x22d62a(_0x38f083) {
              try {
                const _0x2bf276 = await fetchData();
                const _0x410b84 = await _0x4c75cd(_0x2bf276, _0x38f083);
                return _0x410b84;
              } catch (_0x5097a4) {
                console.error("发生错误:", _0x5097a4);
                throw _0x5097a4;
              }
            }
            function _0x2dd341(_0x56b3fa) {
              _0x6257b7.innerHTML = "";
              _0x56b3fa.forEach(_0x14694c => {
                const _0x2b9cd2 = document.createElement("div");
                _0x2b9cd2.textContent = _0x14694c.name;
                _0x2b9cd2.setAttribute("data-value", _0x14694c.value);
                _0x2b9cd2.style.padding = "5px";
                _0x2b9cd2.style.fontSize = "12px";
                _0x2b9cd2.style.cursor = "pointer";
                _0x2b9cd2.addEventListener("mouseenter", function () {
                  this.classList.add("hover-effect");
                });
                _0x2b9cd2.addEventListener("mouseleave", function () {
                  this.classList.remove("hover-effect");
                });
                _0x2b9cd2.addEventListener("click", function () {
                  _0x21a4a9.value = _0x14694c.name;
                  _0x55cec8("是否确定修改类目<br><br>" + _0x14694c.name, _0x14694c.value.split(" "));
                  _0x6257b7.style.display = "none";
                });
                _0x6257b7.appendChild(_0x2b9cd2);
              });
              _0x6257b7.style.display = "block";
            }
            document.addEventListener("click", function (_0x4997a3) {
              const _0x288bd1 = _0x4997a3.target;
              _0x288bd1 !== _0x21a4a9 && !_0x6257b7.contains(_0x288bd1) && (_0x6257b7.style.display = "none", _0x21a4a9.style.border = "1px solid rgba(255, 255, 255, 0)");
            });
          })();
          function _0x55cec8(_0x4e3cd8, _0x111259) {
            var _0x45aa39 = document.createElement("div");
            _0x45aa39.style.position = "fixed";
            _0x45aa39.style.top = "50%";
            _0x45aa39.style.left = "50%";
            _0x45aa39.style.transform = "translate(-50%, -50%)";
            _0x45aa39.style.backgroundColor = "#fff";
            _0x45aa39.style.padding = "20px";
            _0x45aa39.style.border = "2px solid #fb7701";
            _0x45aa39.style.borderBottom = "5px solid #fb7701e3";
            _0x45aa39.style.borderRadius = "8px";
            _0x45aa39.style.color = "rgba(0,0,0,.8)";
            _0x45aa39.style.fontSize = "18px";
            _0x45aa39.style.textAlign = "center";
            _0x45aa39.style.zIndex = "9999";
            var _0x306f50 = document.createElement("p");
            _0x306f50.innerHTML = _0x4e3cd8;
            _0x45aa39.appendChild(_0x306f50);
            var _0x2e4422 = document.createElement("button");
            _0x2e4422.textContent = "确定";
            _0x2e4422.style.marginRight = "10px";
            _0x2e4422.style.padding = "8px 20px";
            _0x2e4422.style.border = "none";
            _0x2e4422.style.borderRadius = "5px";
            _0x2e4422.style.backgroundColor = "#4CAF50";
            _0x2e4422.style.color = "white";
            _0x2e4422.style.cursor = "pointer";
            _0x2e4422.onclick = function () {
              chrome.runtime.sendMessage({
                type: "usageFunctionRecord",
                phone: _0x3ce2c1,
                name: "商品裂变"
              });
              document.body.removeChild(_0x45aa39);
              createLoader();
              _0x2716c5(_0x111259).then(_0x593aae => {}).catch(_0x5ba899 => {
                console.error("Operation failed:", _0x5ba899);
              });
            };
            _0x45aa39.appendChild(_0x2e4422);
            var _0x423454 = document.createElement("button");
            _0x423454.textContent = "取消";
            _0x423454.style.padding = "8px 20px";
            _0x423454.style.border = "none";
            _0x423454.style.borderRadius = "5px";
            _0x423454.style.backgroundColor = "#f44336";
            _0x423454.style.color = "white";
            _0x423454.style.cursor = "pointer";
            _0x423454.onclick = function () {
              document.body.removeChild(_0x45aa39);
            };
            _0x45aa39.appendChild(_0x423454);
            document.body.appendChild(_0x45aa39);
          }
          async function _0xd38000(_0x5e3583, _0x3d80e2) {
            const _0x495361 = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/add";
            const _0x3c0a23 = new Headers({
              accept: "*/*",
              "accept-language": "zh-CN,zh;q=0.9",
              "content-type": "application/json",
              mallid: _0x3d80e2
            });
            const _0x49c83f = JSON.stringify({
              catId: _0x5e3583
            });
            const _0x4c3953 = {
              method: "POST",
              headers: _0x3c0a23,
              body: _0x49c83f,
              redirect: "follow"
            };
            try {
              const _0x396153 = await fetch(_0x495361, _0x4c3953);
              const _0x3a97e7 = await _0x396153.json();
              return _0x3a97e7.result.productDraftId;
            } catch (_0x1539e2) {
              console.error("error", _0x1539e2);
              throw _0x1539e2;
            }
          }
          async function _0x3e145b(_0x55cae7, _0x3c452d, _0x4cd61b, _0x2e3091) {
            const _0x11be7c = new Headers({
              accept: "*/*",
              "accept-language": "zh-CN,zh;q=0.9",
              "content-type": "application/json",
              mallid: _0x55cae7
            });
            const _0x153639 = JSON.stringify(_0x4cd61b);
            const _0xf778e5 = {
              method: "POST",
              headers: _0x11be7c,
              body: _0x153639,
              redirect: "follow"
            };
            try {
              const _0x16e7f6 = await fetch(_0x2e3091, _0xf778e5);
              var _0x2ebecb = await _0x16e7f6.json();
              _0x2ebecb = _0x2ebecb.result;
              _0x2ebecb.carouseVideoVOList.length != 0 && generateVideoVid({
                goods: {
                  video: {
                    videoUrl: _0x2ebecb.carouseVideoVOList[0].videoUrl
                  }
                }
              }, _0x1cd9d4);
              shopData = {
                cat1Id: 0,
                cat2Id: 0,
                cat3Id: 0,
                cat4Id: 0,
                cat5Id: 0,
                cat6Id: 0,
                cat7Id: 0,
                cat8Id: 0,
                cat9Id: 0,
                cat10Id: 0,
                materialMultiLanguages: [],
                productName: _0x2ebecb.productName,
                productI18nReqs: _0x2ebecb.productI18nList,
                productPropertyReqs: _0x2ebecb.productPropertyList,
                productSkcReqs: [{
                  previewImgUrls: [],
                  productSkcCarouselImageI18nReqs: [],
                  extCode: "",
                  mainProductSkuSpecReqs: [{
                    parentSpecId: 0,
                    parentSpecName: "",
                    specId: 0,
                    specName: ""
                  }],
                  productSkuReqs: [],
                  productSkcId: 0
                }],
                productSpecPropertyReqs: [],
                carouselImageUrls: _0x2ebecb.carouselImageUrls,
                carouselImageI18nReqs: [],
                materialImgUrl: _0x2ebecb.carouselImageUrls[0],
                goodsLayerDecorationReqs: _0x2ebecb.goodsLayerDecorationVOList,
                goodsLayerDecorationCustomizeI18nReqs: [],
                sizeTemplateIds: [],
                showSizeTemplateIds: [],
                goodsModelReqs: [],
                productWhExtAttrReq: {
                  outerGoodsUrl: "",
                  productOrigin: {
                    countryShortName: "CN"
                  }
                },
                productCarouseVideoReqList: _0x2ebecb.carouseVideoVOList,
                goodsAdvantageLabelTypes: [],
                productDetailVideoReqList: [],
                productOuterPackageImageReqs: _0x2ebecb.outerPackageImages,
                productOuterPackageReq: {},
                sensitiveTransNormalFileReqs: [],
                productGuideFileI18nReqs: [],
                productSaleExtAttrReq: {
                  bodyShape: null
                },
                productNonAuditExtAttrReq: {
                  california65WarningInfoReq: {
                    california65WarningType: null,
                    california65ChemicalNames: null
                  },
                  cosmeticInfoReq: {}
                },
                personalizationSwitch: 0,
                productDraftId: _0x3c452d
              };
              lin = [];
              lin2 = [];
              ainfo = _0x2ebecb.productSkcList[0].productSkuList;
              for (let _0x23088c of ainfo) {
                b = {};
                b.thumbUrl = _0x23088c.thumbUrl;
                b.productSkuThumbUrlI18nReqs = _0x23088c.productSkuThumbUrlI18nVOList;
                b.extCode = _0x23088c.extCode;
                b.supplierPrice = _0x23088c.supplierPrice;
                b.currencyType = _0x23088c.currencyType;
                b.productSkuSpecReqs = _0x23088c.productSkuSpecList.map(_0xed6161 => ({
                  parentSpecId: _0xed6161.parentSpecId,
                  parentSpecName: _0xed6161.parentSpecName,
                  specId: _0xed6161.specId,
                  specName: _0xed6161.specName
                }));
                b.productSkuId = _0x23088c.productSkuId;
                b.productSkuSuggestedPriceReq = {
                  specialSuggestedPrice: _0x23088c.productSkuSuggestedPrice ? _0x23088c.productSkuSuggestedPrice.specialSuggestedPrice : null,
                  suggestedPrice: _0x23088c.productSkuSuggestedPrice ? _0x23088c.productSkuSuggestedPrice.suggestedPrice : null,
                  suggestedPriceCurrencyType: _0x23088c.productSkuSuggestedPrice ? _0x23088c.productSkuSuggestedPrice.suggestedPriceCurrencyType : null
                };
                b.productSkuWhExtAttrReq = {
                  productSkuVolumeReq: {
                    len: _0x23088c.productSkuWhExtAttr.productSkuVolume.len,
                    width: _0x23088c.productSkuWhExtAttr.productSkuVolume.width,
                    height: _0x23088c.productSkuWhExtAttr.productSkuVolume.height
                  },
                  productSkuWeightReq: {
                    value: _0x23088c.productSkuWhExtAttr.productSkuWeight.value
                  },
                  productSkuBarCodeReqs: [],
                  productSkuSensitiveAttrReq: {
                    isSensitive: 0,
                    sensitiveList: []
                  },
                  productSkuSensitiveLimitReq: {}
                };
                b.productSkuMultiPackReq = {
                  skuClassification: _0x23088c.productSkuMultiPack.skuClassification,
                  numberOfPieces: _0x23088c.productSkuMultiPack.numberOfPieces,
                  pieceUnitCode: _0x23088c.productSkuMultiPack.pieceUnitCode,
                  productSkuNetContentReq: {}
                };
                lin2.push({
                  parentSpecId: b.productSkuSpecReqs.parentSpecId,
                  parentSpecName: b.productSkuSpecReqs.parentSpecName,
                  specId: b.productSkuSpecReqs.specId,
                  specName: b.productSkuSpecReqs.specName,
                  refPid: 0,
                  pid: 0,
                  templatePid: 0,
                  propName: b.productSkuSpecReqs.parentSpecName,
                  vid: 0,
                  propValue: b.productSkuSpecReqs.specName,
                  valueUnit: "",
                  valueGroupId: 0,
                  valueGroupName: "",
                  valueExtendInfo: ""
                });
                lin.push(b);
              }
              shopData.productSkcReqs[0].previewImgUrls = [_0x2ebecb.carouselImageUrls[0]];
              shopData.productSkcReqs[0].productSkuReqs = lin;
              shopData.productSpecPropertyReqs = [...new Set(lin2)];
              videoDataUpInfo.ok === 1 && (await new Promise(_0x3ed1a1 => {
                const _0x14f37f = setInterval(() => {
                  if (videoDataUpInfo.vid) {
                    shopData.productCarouseVideoReqList[0].videoUrl = videoDataUpInfo.url;
                    shopData.productCarouseVideoReqList[0].vid = videoDataUpInfo.vid;
                    clearInterval(_0x14f37f);
                    _0x3ed1a1();
                  } else {
                    videoDataUpInfo.ok === 0 && _0x3ed1a1();
                  }
                }, 100);
              }));
              return shopData;
            } catch (_0x1476c5) {
              console.error("error", _0x1476c5);
              throw _0x1476c5;
            }
          }
          async function _0x2716c5(_0x45a46c) {
            try {
              const _0x3a005a = await fetchData();
              if (!_0x3a005a) {
                throw new Error("Failed to fetch mallId");
              }
              const _0xba7f6b = await _0xd38000(_0x45a46c[_0x45a46c.length - 1], _0x3a005a);
              if (!_0xba7f6b) {
                throw new Error("Failed to add product draft");
              }
              var _0x4c3fe0 = new URLSearchParams(window.location.search).get("productDraftId") || new URLSearchParams(window.location.search).get("productId");
              if (new URLSearchParams(window.location.search).get("productDraftId")) {
                var _0x3266b1 = await _0x3e145b(_0x3a005a, _0xba7f6b, {
                  productDraftId: _0x4c3fe0
                }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/draft/query");
              } else {
                var _0x3266b1 = await _0x3e145b(_0x3a005a, _0xba7f6b, {
                  productId: _0x4c3fe0,
                  productEditTaskUid: ""
                }, "https://seller.kuajingmaihuo.com/bg-visage-mms/product/query");
              }
              if (!_0x3266b1) {
                throw new Error("Failed to add product draft");
              }
              _0x45a46c = [...new Set(_0x45a46c)];
              for (let _0x30f3cb = 1; _0x30f3cb < _0x45a46c.length + 1; _0x30f3cb++) {
                _0x3266b1["cat" + _0x30f3cb + "Id"] = _0x45a46c[_0x30f3cb - 1];
              }
              const _0x49943f = await postDataSave(_0x3266b1, _0x3a005a);
              if (!_0x49943f) {
                throw new Error("Failed to save post data");
              }
              chrome.runtime.sendMessage({
                type: "upDateNewNum"
              }, _0x1b8ad2 => {
                removeLoader();
                window.open("https://seller.kuajingmaihuo.com/goods/product-create/product-edit?productDraftId=" + _0xba7f6b);
              });
            } catch (_0xfcde9a) {
              console.error("Error during product operations:", _0xfcde9a);
              removeLoader();
              throw _0xfcde9a;
            }
          }
        })());
      });
    });
  });
}
function triggerPopstate(_0x4e6cde) {
  if (_0x4e6cde.includes("www.temu.com")) {
    return 0;
  }
  history.pushState({
    page: 1
  }, "title 1", _0x4e6cde);
  history.back();
}
window.onload = function () {
  chrome.storage.local.get("codePhone", function (_0x2f05c5) {
    const _0x46d8b2 = _0x2f05c5.codePhone;
    _0x46d8b2 && window.location.href.includes("https://seller.kuajingmaihuo.com") && getMallId().then(_0x2132d2 => {
      chrome.runtime.sendMessage({
        type: "checkTime",
        password: _0x46d8b2,
        mallid: _0x2132d2,
        model: "全局",
        shopName: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x215348 => {
        if (_0x215348.data.type == "fcmsl") {
          var _0x3c531c = null;
          window.addEventListener("popstate", function (_0x399c00) {
            Object.keys(odInfo).length == 0 && startCheckEuropean && (startCheckEuropean = false, fetchData().then(_0x16c761 => {
              chrome.runtime.sendMessage({
                type: "searchEuropean",
                mallid: _0x16c761
              }, _0x2a943d => {
                odInfo = _0x2a943d.data;
                startCheckEuropean = true;
              });
            }));
            fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x1f74f9 => _0x1f74f9.arrayBuffer()).then(_0x31a44b => {
              crypto.subtle.digest("SHA-256", _0x31a44b).then(_0x1ac357 => {
                const _0x516ba5 = Array.from(new Uint8Array(_0x1ac357));
                const _0x11aaa4 = _0x516ba5.map(_0x1ee99c => _0x1ee99c.toString(16).padStart(2, "0")).join("");
                _0x11aaa4 == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : chrome.storage.local.set({
                  codePhone: ["", ""]
                });
              });
            });
            oldProductSkcIdList = [];
            if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/sale-manage/main")) {
              !function () {
                if (!document.getElementById("mais-custom-styles")) {
                  var _0x3c467d = document.createElement("style");
                  _0x3c467d.type = "text/css";
                  _0x3c467d.id = "mais-custom-styles";
                  var _0x20f01a = "\n                                            .new-paragraph {\n                                                border: 1px solid #A8A8A8;\n                                                border-radius: 12px;\n                                                padding: 8px;\n                                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                                                color: #333333;\n                                                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                                                font-size: 14px;\n                                                margin-bottom: 8px;\n                                                margin-left: -10px;\n                                            }\n                                            .leimu{\n                                                font-size: 12px;\n                                                color: #333333b3;\n                                                border-radius: 5px;\n                                                font-style: normal;\n                                                font-weight: bold;\n                                                margin: 1px;\n                                            }\n                                            .zhandianBox{\n                                                font-size: 11px;\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                border-radius: 5px;\n                                                font-style: initial;\n                                                font-weight: bold;\n                                            }\n                                            .meiguoText{\n                                                background-color: rgba(0, 0, 0, .05);\n                                                color: #333333d6;\n                                                margin-bottom: 8px;\n                                                padding: 5px;\n                                                border-radius: 5px;\n                                            }\n                                            ";
                  _0x3c467d.innerHTML = _0x20f01a;
                  document.head.appendChild(_0x3c467d);
                }
                function _0x13a2ef() {
                  myWaitForElement("[class*=TB_hiddenScrollBar][class*=TB_scrollXY]").then(async _0x312c25 => {
                    let _0x3814f3 = false;
                    function _0x22fb94(_0xd740c9, _0xa142d, _0x454101 = 1, _0x380b37 = [], _0x5a791f = "") {
                      _0x380b37 = _0x380b37.filter(_0x43e2e1 => _0x43e2e1 !== null);
                      let _0x5d401c = document.createElement("div");
                      _0x5d401c.classList.add("custom-tooltip");
                      _0x5d401c.style.position = "fixed";
                      _0x5d401c.style.backgroundColor = "#f0f0f0";
                      _0x5d401c.style.color = "#333";
                      _0x5d401c.style.padding = "12px 16px";
                      _0x5d401c.style.borderRadius = "10px";
                      _0x5d401c.style.fontSize = "14px";
                      _0x5d401c.style.fontFamily = "\"Arial\", sans-serif";
                      _0x5d401c.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
                      _0x5d401c.style.zIndex = "1000";
                      _0x5d401c.style.opacity = "0";
                      _0x5d401c.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                      _0x5d401c.style.pointerEvents = "none";
                      _0x5d401c.style.width = "300px";
                      if (_0x5a791f) {
                        let _0xfbaa73 = document.createElement("div");
                        _0xfbaa73.style.fontWeight = "bold";
                        _0xfbaa73.style.marginBottom = "6px";
                        _0xfbaa73.style.fontSize = "16px";
                        _0xfbaa73.style.color = "#222";
                        _0xfbaa73.textContent = _0x5a791f;
                        _0x5d401c.appendChild(_0xfbaa73);
                        _0x5d401c.appendChild(document.createElement("hr"));
                      }
                      let _0x21150b = document.createElement("div");
                      _0x21150b.style.position = "absolute";
                      _0x21150b.style.width = "0";
                      _0x21150b.style.height = "0";
                      _0x21150b.style.borderLeft = "6px solid transparent";
                      _0x21150b.style.borderRight = "6px solid transparent";
                      _0x21150b.style.borderTop = "6px solid #f0f0f0";
                      _0x21150b.style.bottom = "-6px";
                      _0x21150b.style.left = "50%";
                      _0x21150b.style.transform = "translateX(-50%)";
                      _0x5d401c.appendChild(_0x21150b);
                      _0x5d401c.innerHTML += _0xa142d;
                      document.body.appendChild(_0x5d401c);
                      function _0x3c8013() {
                        const _0x2b8a36 = _0xd740c9.getBoundingClientRect();
                        const _0x57c881 = _0x5d401c.offsetHeight;
                        _0x5d401c.style.left = _0x2b8a36.left + _0x2b8a36.width / 2 - _0x5d401c.offsetWidth / 2 + "px";
                        _0x5d401c.style.top = _0x2b8a36.top - _0x57c881 - 10 + "px";
                      }
                      if (_0x454101 === 1) {
                        _0xd740c9.addEventListener("mouseenter", function () {
                          _0x3c8013();
                          _0x5d401c.style.opacity = "1";
                          _0x5d401c.style.transform = "translateY(10px)";
                        });
                      } else {
                        if (_0x454101 === 2) {
                          _0xd740c9.addEventListener("mousemove", function (_0x26217c) {
                            _0x380b37.some(_0x2d2b49 => _0x2d2b49.contains(_0x26217c.target)) ? _0x5d401c.style.opacity = "0" : (_0x3c8013(), _0x5d401c.style.opacity = "1");
                          });
                        } else {
                          _0x454101 === 3 && (_0xd740c9.addEventListener("click", function () {
                            _0x5d401c.style.zIndex = "9999";
                            _0x5d401c.style.pointerEvents = "auto";
                            _0x3c8013();
                            _0x5d401c.style.opacity = "1";
                            _0x5d401c.style.transform = "translateY(10px)";
                          }), document.addEventListener("click", function (_0x1b5b0f) {
                            !_0xd740c9.contains(_0x1b5b0f.target) && (_0x5d401c.style.pointerEvents = "none", _0x5d401c.style.opacity = "0");
                          }));
                        }
                      }
                      _0x454101 !== 3 && _0xd740c9.addEventListener("mouseleave", function () {
                        _0x5d401c.style.opacity = "0";
                      });
                      window.addEventListener("resize", _0x3c8013);
                    }
                    function _0xfb6626() {
                      const _0x5124c2 = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                      _0x5124c2.forEach(_0x3e355c => {
                        const _0x211564 = _0x3e355c.closest("tr");
                        let _0x188eb3 = _0x211564;
                        while (_0x188eb3 && (!_0x188eb3.querySelector(".checkbox-cell") || _0x188eb3 === _0x211564)) {
                          const _0x32821e = _0x188eb3.querySelector(".activity-price-cell");
                          const _0x2dc8c8 = _0x188eb3.querySelector(".activity-quote-cell input");
                          _0x32821e && _0x2dc8c8 && (_0x2dc8c8.value = _0x32821e.textContent.trim());
                          _0x188eb3 = _0x188eb3.nextElementSibling;
                        }
                      });
                    }
                    function _0x333e54(_0x3d4523) {
                      const _0x3090d3 = document.querySelectorAll(".checkbox-cell input[type=\"checkbox\"]:checked");
                      _0x3090d3.forEach(_0x174f33 => {
                        const _0x1bc85d = _0x174f33.closest("tr");
                        let _0xf312d1 = _0x1bc85d;
                        while (_0xf312d1 && (!_0xf312d1.querySelector(".checkbox-cell") || _0xf312d1 === _0x1bc85d)) {
                          const _0x525f6c = _0xf312d1.querySelector(".activity-stock-cell input");
                          _0x525f6c && (_0x525f6c.value = _0x3d4523, _0x525f6c.dispatchEvent(new Event("input")));
                          _0xf312d1 = _0xf312d1.nextElementSibling;
                        }
                      });
                    }
                    function _0x2c4eff(_0x408785) {
                      let _0x245ce6 = document.getElementById("messageContainer");
                      !_0x245ce6 && (_0x245ce6 = document.createElement("div"), _0x245ce6.id = "messageContainer", _0x245ce6.style.position = "fixed", _0x245ce6.style.top = "20px", _0x245ce6.style.left = "50%", _0x245ce6.style.transform = "translateX(-50%)", _0x245ce6.style.maxWidth = "300px", _0x245ce6.style.zIndex = "9999981", _0x245ce6.style.display = "flex", _0x245ce6.style.flexDirection = "column", _0x245ce6.style.gap = "10px", document.body.appendChild(_0x245ce6));
                      const _0x5ce9ed = document.createElement("div");
                      _0x5ce9ed.style.backgroundColor = "#333";
                      _0x5ce9ed.style.color = "#fff";
                      _0x5ce9ed.style.padding = "10px";
                      _0x5ce9ed.style.borderRadius = "5px";
                      _0x5ce9ed.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
                      _0x5ce9ed.style.transition = "transform 0.3s ease-out";
                      _0x5ce9ed.textContent = _0x408785;
                      _0x245ce6.appendChild(_0x5ce9ed);
                      setTimeout(() => {
                        _0x5ce9ed.style.transform = "translateY(-100%)";
                        setTimeout(() => {
                          _0x245ce6.removeChild(_0x5ce9ed);
                        }, 300);
                      }, 1500);
                    }
                    async function _0x191735(_0xd10310, _0x4ffff4) {
                      const _0x1f8425 = new Headers();
                      _0x1f8425.append("accept", "*/*");
                      _0x1f8425.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x1f8425.append("cache-control", "no-cache");
                      _0x1f8425.append("content-type", "application/json");
                      _0x1f8425.append("mallid", _0xd10310);
                      const _0x5ec9b3 = JSON.stringify(_0x4ffff4);
                      const _0x18e169 = {
                        method: "POST",
                        headers: _0x1f8425,
                        body: _0x5ec9b3,
                        redirect: "follow"
                      };
                      let _0x32fd68 = 0;
                      let _0xb1f062 = "报名失败，请重试";
                      while (_0x32fd68 < 3) {
                        try {
                          const _0x55d4ef = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/submit", _0x18e169);
                          const _0x11cb6d = await _0x55d4ef.json();
                          if (_0x11cb6d.success) {
                            const _0x4decce = _0x11cb6d.result.failList;
                            if (_0x4decce.length > 0) {
                              _0xb1f062 = _0x4decce[0].failMsg;
                            } else {
                              _0xb1f062 = "报名成功";
                              const _0x5a3b25 = _0x4ffff4.activityType;
                              const _0xc39d5b = _0x4ffff4.activityThematicId ? _0x4ffff4.activityThematicId : "1";
                              _0x476344(_0x5a3b25 + "@" + _0xc39d5b);
                            }
                            await new Promise(_0x5a94ab => setTimeout(_0x5a94ab, 1000));
                            break;
                          } else {
                            _0xb1f062 = _0x11cb6d.errorMsg;
                          }
                        } catch (_0xa278a3) {
                          _0xb1f062 = "请求失败: " + _0xa278a3.message;
                        }
                        _0x32fd68++;
                        _0x32fd68 < 3 && (await new Promise(_0x3d1a81 => setTimeout(_0x3d1a81, 1000)));
                      }
                      _0x2c4eff(_0xb1f062);
                    }
                    function _0x369c03() {
                      function _0x573b04() {
                        const _0x47c8ed = document.createElement("div");
                        _0x47c8ed.style.position = "fixed";
                        _0x47c8ed.style.top = "0";
                        _0x47c8ed.style.left = "0";
                        _0x47c8ed.style.width = "100%";
                        _0x47c8ed.style.height = "100%";
                        _0x47c8ed.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                        _0x47c8ed.style.zIndex = "9999";
                        _0x47c8ed.id = "huodongOverlay";
                        _0x47c8ed.addEventListener("click", () => {
                          _0x47c8ed.remove();
                          _0x4c8c14.remove();
                        });
                        document.body.appendChild(_0x47c8ed);
                      }
                      function _0x17b378() {
                        const _0x2c2858 = document.querySelectorAll("#products-container > tr");
                        const _0x469980 = [];
                        let _0x11d2ea = null;
                        _0x2c2858.forEach(_0x56faf5 => {
                          const _0x2ba94b = _0x56faf5.querySelector(".checkbox-cell input");
                          const _0x1fa5da = _0x56faf5.querySelector(".skc-cell");
                          const _0xbc22c6 = _0x56faf5.querySelector(".img-cell img");
                          const _0xc1e67c = _0x56faf5.querySelector(".attributes-cell");
                          const _0x4c2df0 = _0x56faf5.querySelector(".original-price-cell");
                          const _0x414f84 = _0x56faf5.querySelector(".activity-price-cell");
                          const _0x5dfc83 = _0x56faf5.querySelector(".activity-quote-cell input");
                          const _0x3a21a4 = _0x56faf5.querySelector(".activity-stock-cell input");
                          const _0xd0ed67 = _0x56faf5.querySelector(".activity-name-cell");
                          if (_0x2ba94b && _0x1fa5da && _0xbc22c6) {
                            var _0x3ddde6 = _0xd0ed67.getAttribute("activity-type").split("@");
                            _0x11d2ea && _0x469980.push(_0x11d2ea);
                            parseInt(_0x3ddde6[1]) == 1 ? _0x11d2ea = {
                              checked: _0x2ba94b.checked,
                              activityType: parseInt(_0x3ddde6[0]),
                              productList: [{
                                productId: _0xbc22c6.getAttribute("spuid-goods"),
                                activityStock: _0x3a21a4 ? _0x3a21a4.value.trim() : "0",
                                skcList: [{
                                  skcId: parseInt(_0x1fa5da.textContent.trim()),
                                  activityPrice: parseFloat(_0x5dfc83.value != "" ? _0x5dfc83.value : "0") * 100,
                                  skuList: []
                                }],
                                activityEnrollPrivilegeType: 0
                              }]
                            } : _0x11d2ea = {
                              checked: _0x2ba94b.checked,
                              activityType: parseInt(_0x3ddde6[0]),
                              activityThematicId: parseInt(_0x3ddde6[1]),
                              productList: [{
                                productId: _0xbc22c6.getAttribute("spuid-goods"),
                                activityStock: _0x3a21a4 ? _0x3a21a4.value.trim() : "0",
                                skcList: [{
                                  skcId: parseInt(_0x1fa5da.textContent.trim()),
                                  activityPrice: parseFloat(_0x5dfc83.value != "" ? _0x5dfc83.value : "0") * 100,
                                  skuList: []
                                }],
                                activityEnrollPrivilegeType: 0
                              }]
                            };
                            if (_0x2ba94b.getAttribute("siteInfo-goods") != "") {
                              var _0xb710a2 = _0x2ba94b.getAttribute("siteInfo-goods").split(",");
                              _0x11d2ea.productList[0].sessionIds = _0xb710a2;
                            }
                          }
                          _0xc1e67c && _0x4c2df0 && _0x414f84 && _0x5dfc83 && _0x11d2ea.productList[0].skcList[0].skuList.push({
                            activityPrice: parseFloat(_0x5dfc83.value != "" ? _0x5dfc83.value : "0") * 100,
                            skuId: _0xc1e67c.getAttribute("data-sku")
                          });
                        });
                        _0x11d2ea && _0x469980.push(_0x11d2ea);
                        let _0x4eba07 = _0x469980.filter(_0x33d411 => _0x33d411.checked).map(_0x56ccc7 => {
                          const _0x1f2f78 = {};
                          for (let _0x17e8e1 in _0x56ccc7) {
                            _0x17e8e1 !== "checked" && (_0x1f2f78[_0x17e8e1] = _0x56ccc7[_0x17e8e1]);
                          }
                          return _0x1f2f78;
                        });
                        return _0x4eba07;
                      }
                      _0x573b04();
                      if (!document.getElementById("myFastPricing")) {
                        const _0x3d897e = document.createElement("link");
                        _0x3d897e.setAttribute("id", "myFastPricing");
                        _0x3d897e.rel = "stylesheet";
                        _0x3d897e.href = chrome.runtime.getURL("web/css/baoActivate.css");
                        document.head.appendChild(_0x3d897e);
                      }
                      const _0x4c8c14 = document.createElement("div");
                      _0x4c8c14.style.position = "fixed";
                      _0x4c8c14.style.top = "50%";
                      _0x4c8c14.style.left = "50%";
                      _0x4c8c14.style.transform = "translate(-50%, -50%)";
                      _0x4c8c14.style.padding = "20px";
                      _0x4c8c14.style.borderRadius = "8px";
                      _0x4c8c14.style.border = "2px solid #000";
                      _0x4c8c14.style.width = "85%";
                      _0x4c8c14.style.background = "white";
                      _0x4c8c14.style.zIndex = 999999;
                      const _0x44a517 = document.createElement("div");
                      _0x44a517.classList.add("button-container");
                      const _0x1d4025 = document.createElement("button");
                      _0x1d4025.id = "executeButton";
                      _0x1d4025.textContent = "咕噜噜批量报名活动";
                      const _0x312d65 = document.createElement("span");
                      _0x312d65.innerHTML = "（活动申报数量如果填写值少于最低要求，会自动更正）<span style=\"color:red\">【服装类会默认第一个价格统一申报，与官方一致】</span>";
                      _0x312d65.style.fontSize = "larger";
                      _0x312d65.style.color = "#575656";
                      _0x312d65.style.fontFamily = "auto";
                      _0x312d65.style.alignContent = "center";
                      _0x312d65.style.marginLeft = "10px";
                      var _0x2200b5 = document.createElement("button");
                      _0x2200b5.innerHTML = "×";
                      _0x2200b5.style.position = "absolute";
                      _0x2200b5.style.top = "5px";
                      _0x2200b5.style.right = "30px";
                      _0x2200b5.style.fontSize = "60px";
                      _0x2200b5.style.padding = "0";
                      _0x2200b5.style.border = "none";
                      _0x2200b5.style.backgroundColor = "transparent";
                      _0x2200b5.style.color = "#f00";
                      _0x2200b5.style.cursor = "pointer";
                      _0x2200b5.onclick = function () {
                        _0x4c8c14.remove();
                        document.getElementById("huodongOverlay").remove();
                      };
                      _0x4c8c14.appendChild(_0x2200b5);
                      _0x44a517.appendChild(_0x1d4025);
                      _0x44a517.appendChild(_0x312d65);
                      const _0x3374b7 = document.createElement("div");
                      _0x3374b7.classList.add("b-table-container");
                      _0x3374b7.style.maxWidth = "100%";
                      const _0x109f2f = window.innerHeight - 200;
                      _0x3374b7.style.maxHeight = _0x109f2f + "px";
                      window.addEventListener("resize", () => {
                        const _0x5c336c = window.innerHeight - 200;
                        _0x3374b7.style.maxHeight = _0x5c336c + "px";
                      });
                      const _0x2b53ef = document.createElement("table");
                      _0x2b53ef.className = "product-table";
                      const _0x37d8a4 = document.createElement("thead");
                      const _0x8e9433 = document.createElement("tr");
                      _0x8e9433.classList.add("product-header");
                      const _0x41e9c5 = document.createElement("th");
                      const _0x1bcf03 = document.createElement("input");
                      _0x1bcf03.type = "checkbox";
                      _0x1bcf03.id = "selectAllCheckbox";
                      _0x1bcf03.style.width = "18px";
                      _0x1bcf03.style.height = "18px";
                      _0x1bcf03.style.cursor = "pointer";
                      _0x41e9c5.appendChild(_0x1bcf03);
                      const _0x56110d = document.createElement("th");
                      _0x56110d.textContent = "商品图片";
                      const _0x4d24ba = document.createElement("th");
                      _0x4d24ba.textContent = "商品SKC";
                      const _0x455095 = document.createElement("th");
                      _0x455095.textContent = "商品属性";
                      const _0x29dd35 = document.createElement("th");
                      _0x29dd35.textContent = "原申报价格";
                      const _0x2f49b2 = document.createElement("th");
                      _0x2f49b2.textContent = "活动参考价";
                      const _0x51cba6 = document.createElement("th");
                      _0x51cba6.textContent = "活动申报价格";
                      const _0x412165 = document.createElement("button");
                      _0x412165.textContent = "批量填写";
                      _0x412165.style.cursor = "pointer";
                      _0x412165.id = "th6plbtn";
                      _0x412165.style.marginLeft = "10px";
                      _0x51cba6.appendChild(_0x412165);
                      const _0x42f4d8 = document.createElement("th");
                      _0x42f4d8.textContent = "活动库存";
                      const _0xdffa9 = document.createElement("button");
                      _0xdffa9.style.cursor = "pointer";
                      _0xdffa9.textContent = "批量填写";
                      _0xdffa9.id = "th7plbtn";
                      _0xdffa9.style.marginLeft = "10px";
                      _0x42f4d8.appendChild(_0xdffa9);
                      const _0x4573db = document.createElement("th");
                      _0x4573db.textContent = "活动名称";
                      _0x8e9433.appendChild(_0x41e9c5);
                      _0x8e9433.appendChild(_0x56110d);
                      _0x8e9433.appendChild(_0x4d24ba);
                      _0x8e9433.appendChild(_0x455095);
                      _0x8e9433.appendChild(_0x29dd35);
                      _0x8e9433.appendChild(_0x2f49b2);
                      _0x8e9433.appendChild(_0x51cba6);
                      _0x8e9433.appendChild(_0x42f4d8);
                      _0x8e9433.appendChild(_0x4573db);
                      _0x37d8a4.appendChild(_0x8e9433);
                      const _0x3f80e1 = document.createElement("tbody");
                      _0x3f80e1.id = "products-container";
                      _0x2b53ef.appendChild(_0x37d8a4);
                      _0x2b53ef.appendChild(_0x3f80e1);
                      _0x3374b7.appendChild(_0x2b53ef);
                      const _0x48c3d1 = document.createElement("div");
                      _0x48c3d1.classList.add("pagination-container");
                      _0x4c8c14.appendChild(_0x44a517);
                      _0x4c8c14.appendChild(_0x3374b7);
                      _0x4c8c14.appendChild(_0x48c3d1);
                      document.body.appendChild(_0x4c8c14);
                      "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0x55a4e2, _0x2f9e66) => String.fromCharCode(parseInt(_0x2f9e66, 16))) == _0x1d4025.textContent ? "" : !function () {
                        chrome.storage.local.set({
                          codePhone: ["", ""]
                        });
                        window.location.reload();
                      }();
                      _0x1bcf03.addEventListener("change", () => {
                        const _0x187474 = document.querySelectorAll("input[type=\"checkbox\"]:not(#selectAllCheckbox)");
                        _0x187474.forEach(_0x3ff3a4 => {
                          _0x3ff3a4.checked = _0x1bcf03.checked;
                        });
                      });
                      _0x1d4025.addEventListener("click", async () => {
                        "咕噜噜批量报名活动".replace(/\\u([\d\w]{4})/gi, (_0x5236ed, _0xabec48) => String.fromCharCode(parseInt(_0xabec48, 16))) == document.querySelector("#executeButton").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            codePhone: ["", ""]
                          });
                          window.location.reload();
                        }();
                        document.querySelector("#executeButton").style.pointerEvents = "none";
                        var _0x5ae507 = _0x17b378();
                        const _0x1f5a1b = _0x3aa308 => {
                          for (const _0x44f181 of _0x3aa308) {
                            for (const _0x50b50b of _0x44f181.productList) {
                              if (_0x50b50b.activityStock === "") {
                                return false;
                              }
                              for (const _0x3ac284 of _0x50b50b.skcList) {
                                for (const _0x1ab37a of _0x3ac284.skuList) {
                                  if (_0x1ab37a.activityPrice === 0) {
                                    return false;
                                  }
                                }
                              }
                            }
                          }
                          return true;
                        };
                        var _0x5160dd = _0x1f5a1b(_0x5ae507);
                        if (_0x5160dd) {
                          for (const _0x276981 of _0x5ae507) {
                            await _0x191735(_0x2132d2, _0x276981);
                          }
                          document.querySelector("#executeButton").style.pointerEvents = "auto";
                        } else {
                          document.querySelector("#executeButton").style.pointerEvents = "auto";
                          alert("请确认活动库存和价格是否已完整填写。");
                        }
                      });
                      _0x412165.addEventListener("click", _0x40e525 => {
                        _0xfb6626();
                      });
                      _0xdffa9.addEventListener("click", _0x38a713 => {
                        _0x38a713.stopPropagation();
                        _0x38a713.preventDefault();
                        _0x38a713.stopImmediatePropagation();
                        const _0x325387 = document.createElement("div");
                        _0x325387.style.position = "absolute";
                        _0x325387.style.backgroundColor = "white";
                        _0x325387.style.border = "1px solid #ccc";
                        _0x325387.style.borderRadius = "5px";
                        _0x325387.style.padding = "10px";
                        _0x325387.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                        _0x325387.style.zIndex = "999999";
                        const _0x46c495 = document.createElement("input");
                        _0x46c495.type = "text";
                        _0x46c495.style.padding = "5px";
                        _0x46c495.style.fontSize = "14px";
                        _0x46c495.style.border = "1px solid #ccc";
                        _0x46c495.style.borderRadius = "4px";
                        _0x46c495.style.width = "100px";
                        _0x46c495.placeholder = "请输入";
                        const _0x2b778a = document.createElement("button");
                        _0x2b778a.textContent = "确定";
                        _0x2b778a.style.padding = "5px 10px";
                        _0x2b778a.style.fontSize = "12px";
                        _0x2b778a.style.backgroundColor = "#007BFF";
                        _0x2b778a.style.color = "white";
                        _0x2b778a.style.border = "none";
                        _0x2b778a.style.borderRadius = "5px";
                        _0x2b778a.style.marginLeft = "10px";
                        _0x2b778a.style.cursor = "pointer";
                        _0x325387.appendChild(_0x46c495);
                        _0x325387.appendChild(_0x2b778a);
                        const _0x50e59e = _0xdffa9.getBoundingClientRect();
                        _0x325387.style.top = _0x50e59e.bottom + window.scrollY + 10 + "px";
                        _0x325387.style.left = _0x50e59e.left + window.scrollX + "px";
                        document.body.appendChild(_0x325387);
                        _0x2b778a.addEventListener("click", () => {
                          document.body.removeChild(_0x325387);
                          const _0x30c38d = _0x46c495.value;
                          _0x30c38d && _0x333e54(_0x30c38d);
                        });
                        const _0x245c28 = _0x291b6d => {
                          if (!_0x325387.contains(_0x291b6d.target) && _0x291b6d.target !== _0xdffa9) {
                            try {
                              document.body.removeChild(_0x325387);
                              document.removeEventListener("click", _0x245c28);
                            } catch (_0x2cb3f3) {}
                          }
                        };
                        document.addEventListener("click", _0x245c28);
                      });
                    }
                    async function _0x8e6b20(_0x5ab8a5, _0x3c6a05, _0x51e1cb) {
                      var _0x6c0ca5 = [];
                      const _0x4af3e4 = new Headers();
                      _0x4af3e4.append("accept", "*/*");
                      _0x4af3e4.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x4af3e4.append("cache-control", "no-cache");
                      _0x4af3e4.append("content-type", "application/json");
                      _0x4af3e4.append("mallid", _0x5ab8a5);
                      for (var _0x3ab6b9 in _0x51e1cb) {
                        var _0x53f9fc = _0x51e1cb[_0x3ab6b9][0];
                        var _0x6be1d0 = _0x51e1cb[_0x3ab6b9][1];
                        var _0x3ccba9;
                        _0x6be1d0 == 1 ? _0x3ccba9 = JSON.stringify({
                          activityType: _0x53f9fc,
                          rowCount: 50,
                          addSite: true,
                          productIds: [_0x3c6a05],
                          productSkcExtCodes: []
                        }) : _0x3ccba9 = JSON.stringify({
                          activityThematicId: _0x6be1d0,
                          activityType: _0x53f9fc,
                          rowCount: 50,
                          addSite: true,
                          productIds: [_0x3c6a05],
                          productSkcExtCodes: []
                        });
                        const _0x37aabf = {
                          method: "POST",
                          headers: _0x4af3e4,
                          body: _0x3ccba9,
                          redirect: "follow"
                        };
                        const _0x337157 = 3;
                        let _0x437a2d = 0;
                        let _0x4646ad = false;
                        let _0x2a6a50;
                        while (_0x437a2d < _0x337157 && !_0x4646ad) {
                          try {
                            var _0x354b30 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/scroll/match", _0x37aabf);
                            _0x2a6a50 = await _0x354b30.json();
                            if (_0x2a6a50.result && _0x2a6a50.result.matchList) {
                              _0x4646ad = true;
                              await new Promise(_0x2d957f => setTimeout(_0x2d957f, 300));
                            } else {
                              throw new Error("No match found");
                            }
                          } catch (_0x5c557b) {
                            _0x437a2d++;
                            _0x437a2d >= _0x337157 && (_0x2a6a50 = {
                              result: {
                                matchList: []
                              }
                            });
                            await new Promise(_0x58b85b => setTimeout(_0x58b85b, 1000));
                          }
                        }
                        if (_0x2a6a50.result.matchList.length == 0) {
                          continue;
                        }
                        var _0x3d8fa4 = _0x2a6a50.result.matchList[0];
                        var _0x521203 = _0x3d8fa4.skcList[0].skuList;
                        var _0x1014d2 = [];
                        var _0x5832ca = _0x3d8fa4.pictureUrl;
                        var _0x2f708e = _0x3d8fa4.skcList[0].skcId;
                        var _0x254c6b = _0x3d8fa4.targetActivityStock;
                        var _0x4007e0 = _0x3d8fa4.suggestEnrollSessionIdList ? _0x3d8fa4.suggestEnrollSessionIdList : [];
                        for (var _0x2cf235 = 0; _0x2cf235 < _0x521203.length; _0x2cf235++) {
                          var _0x1c3aba = Object.values(_0x521203[_0x2cf235].properties).join("-");
                          var _0x117f1a = _0x521203[_0x2cf235].extCode;
                          var _0x305af6 = _0x1c3aba + "<br> 货号: " + _0x117f1a;
                          var _0x59161b = (parseFloat(_0x521203[_0x2cf235].dailyPrice) / 100).toFixed(2);
                          var _0x2dbecd = (parseFloat(_0x521203[_0x2cf235].suggestActivityPrice) / 100).toFixed(2);
                          var _0x18805e = _0x521203[_0x2cf235].skuId;
                          _0x1014d2.push([_0x305af6, _0x59161b, _0x2dbecd, _0x3ab6b9, _0x254c6b, _0x53f9fc, _0x6be1d0, _0x18805e]);
                        }
                        _0x6c0ca5.push({
                          attributes: _0x1014d2,
                          image: _0x5832ca,
                          skc: _0x2f708e,
                          suggestEnrollSessionIdList: _0x4007e0,
                          spuid: _0x3c6a05
                        });
                      }
                      return _0x6c0ca5;
                    }
                    async function _0x5ccf7e(_0x435dce) {
                      const _0x98ce3c = new Headers();
                      _0x98ce3c.append("accept", "*/*");
                      _0x98ce3c.append("accept-language", "zh-CN,zh;q=0.9");
                      _0x98ce3c.append("cache-control", "no-cache");
                      _0x98ce3c.append("content-type", "application/json");
                      _0x98ce3c.append("mallid", _0x435dce);
                      const _0xe308c5 = JSON.stringify({
                        needCanEnrollCnt: true
                      });
                      const _0x2ee4bd = {
                        method: "POST",
                        headers: _0x98ce3c,
                        body: _0xe308c5,
                        redirect: "follow"
                      };
                      let _0x3124e3 = 0;
                      const _0x3cbdcf = 3;
                      while (_0x3124e3 < _0x3cbdcf) {
                        try {
                          const _0xff499c = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/gambit/marketing/enroll/activity/list", _0x2ee4bd);
                          if (!_0xff499c.ok) {
                            throw new Error("请求失败，状态码: " + _0xff499c.status);
                          }
                          const _0x1c7666 = await _0xff499c.json();
                          const _0x4deba9 = _0x1c7666.result.activityList;
                          return _0x4deba9;
                        } catch (_0x116533) {
                          _0x3124e3++;
                          console.error("尝试第 " + _0x3124e3 + " 次失败: " + _0x116533.message);
                          if (_0x3124e3 >= _0x3cbdcf) {
                            return [];
                          }
                        }
                      }
                    }
                    function _0x51b334(_0x4133a5, _0x26c525) {
                      const _0xab6158 = _0x492cbc => new Date(_0x492cbc).toISOString().split("T")[0];
                      const _0x55bf78 = Math.round((_0x26c525 - _0x4133a5) / 86400000);
                      return _0xab6158(_0x4133a5) + "～" + _0xab6158(_0x26c525) + "（" + _0x55bf78 + "天）";
                    }
                    async function _0x2c9843(_0x3a7c36, _0x39d398) {
                      var _0x3e427e = await _0x5ccf7e(_0x3a7c36);
                      var _0x337faa = {};
                      for (var _0x11baa1 = 0; _0x11baa1 < _0x3e427e.length; _0x11baa1++) {
                        if (_0x3e427e[_0x11baa1].thematicList.length > 0) {
                          for (var _0x118acb = 0; _0x118acb < _0x3e427e[_0x11baa1].thematicList.length; _0x118acb++) {
                            var _0x4ad079 = _0x3e427e[_0x11baa1].thematicList[_0x118acb].startTime;
                            var _0x464571 = _0x3e427e[_0x11baa1].thematicList[_0x118acb].endTime;
                            var _0x509bd7 = _0x51b334(parseInt(_0x4ad079), parseInt(_0x464571));
                            _0x3e427e[_0x11baa1].thematicList[_0x118acb].activityThematicName = _0x3e427e[_0x11baa1].thematicList[_0x118acb].activityThematicName + "<hr>" + _0x509bd7;
                            _0x337faa[_0x3e427e[_0x11baa1].thematicList[_0x118acb].activityThematicName] = [_0x3e427e[_0x11baa1].activityType, _0x3e427e[_0x11baa1].thematicList[_0x118acb].activityThematicId];
                          }
                        } else {
                          var _0x58e30d = _0x3e427e[_0x11baa1].sessionStartTime;
                          if (!_0x58e30d) {
                            _0x3e427e[_0x11baa1].activityName = _0x3e427e[_0x11baa1].activityName + "<hr>" + "长期";
                          } else {
                            var _0x2a91eb = _0x3e427e[_0x11baa1].sessionEndTime;
                            var _0x5889b5 = _0x51b334(parseInt(_0x58e30d), parseInt(_0x2a91eb));
                            _0x3e427e[_0x11baa1].activityName = _0x3e427e[_0x11baa1].activityName + "<hr>" + _0x5889b5;
                          }
                          _0x337faa[_0x3e427e[_0x11baa1].activityName] = [_0x3e427e[_0x11baa1].activityType, 1];
                        }
                      }
                      var _0x4f0e9f = await _0x8e6b20(_0x3a7c36, _0x39d398, _0x337faa);
                      return _0x4f0e9f;
                    }
                    function _0x476344(_0x59631f) {
                      const _0x4cef7d = document.querySelectorAll("#products-container > tr");
                      let _0x1e9336 = null;
                      let _0x1f3f5c = 0;
                      _0x4cef7d.forEach(_0x5d6672 => {
                        const _0x102890 = _0x5d6672.querySelector(".checkbox-cell input");
                        const _0x23b7a7 = _0x5d6672.querySelector(".activity-name-cell");
                        if (_0x102890) {
                          var _0x40f819 = _0x23b7a7.getAttribute("activity-type");
                          _0x1e9336 && result.push(_0x1e9336);
                          _0x40f819 == _0x59631f ? (_0x5d6672.remove(), _0x1f3f5c = 1) : _0x1f3f5c = 0;
                        }
                        _0x1f3f5c == 1 && _0x5d6672.remove();
                      });
                    }
                    let _0x15ba09 = "";
                    let _0xc20a75 = 0;
                    function _0x4bb599(_0x535863) {
                      var _0x42859d = document.querySelector("[class*=\"index-module__flex\"][class*=\"index-module__column-space-between\"]");
                      _0x42859d ? _0x42859d.style.height = "300px" : "";
                      const _0x3485cc = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x535863].querySelectorAll("[class*=main_productInfo]");
                      const _0x5ef48a = document.querySelectorAll(".new-paragraph");
                      _0x3485cc.length != _0xc20a75 && (_0xc20a75 = _0x3485cc.length, oldProductSkcIdList = []);
                      if (_0x3485cc.length != _0x5ef48a.length && _0x3814f3 == false) {
                        try {
                          _0x3814f3 = true;
                          chrome.storage.local.get("salerManageSwitch", async function (_0x28a085) {
                            _0x28a085.salerManageSwitch ? (_0x15ba09 == "" && (_0x15ba09 = await getMallId()), fetchWarehouseList(_0x15ba09, _0x535863).then(_0x50d7c2 => {
                              var _0x23adfa = _0x50d7c2[0];
                              var _0x1b16c6 = _0x50d7c2[1];
                              if (Object.keys(_0x23adfa).length !== 0) {
                                try {
                                  const _0x1a7847 = [];
                                  for (const _0x30c543 of _0x3485cc) {
                                    const _0x19a78a = _0x30c543.querySelector("[class*=main_lastRow]");
                                    if (_0x19a78a) {
                                      const _0x4a3335 = _0x30c543.querySelector(".new-paragraph");
                                      const _0x306c20 = _0x30c543.querySelector("p:nth-of-type(3)");
                                      const _0x2a51f8 = _0x30c543.querySelector("p:nth-of-type(4)");
                                      if (!_0x2a51f8.querySelector("span")) {
                                        const _0x35d410 = document.createElement("span");
                                        _0x35d410.id = "baoActivate";
                                        _0x35d410.textContent = "报";
                                        _0x35d410.style.display = "inline-block";
                                        _0x35d410.style.width = "24px";
                                        _0x35d410.style.height = "24px";
                                        _0x35d410.style.borderRadius = "50%";
                                        _0x35d410.style.backgroundColor = "#FF6347";
                                        _0x35d410.style.color = "#fff";
                                        _0x35d410.style.textAlign = "center";
                                        _0x35d410.style.lineHeight = "24px";
                                        _0x35d410.style.marginLeft = "12px";
                                        _0x35d410.style.fontSize = "14px";
                                        _0x35d410.style.fontWeight = "bold";
                                        _0x35d410.style.transition = "all 0.3s ease";
                                        _0x35d410.style.cursor = "pointer";
                                        _0x35d410.addEventListener("mouseenter", () => {
                                          _0x35d410.style.transform = "scale(1.2)";
                                        });
                                        _0x35d410.addEventListener("mouseleave", () => {
                                          _0x35d410.style.transform = "scale(1)";
                                        });
                                        _0x35d410.addEventListener("click", () => {
                                          createLoader();
                                          var _0x1e1a37 = _0x35d410.parentNode.innerText.match(/\d+/);
                                          _0x1e1a37 = _0x1e1a37 ? _0x1e1a37[0] : "123";
                                          _0x2c9843(_0x2132d2, _0x1e1a37).then(_0x18a1e5 => {
                                            if (_0x18a1e5.length == 0) {
                                              removeLoader();
                                              showCustomAlert("当前商品无可报名活动！");
                                            } else {
                                              removeLoader();
                                              _0x369c03();
                                              const _0x3901f6 = document.getElementById("products-container");
                                              _0x18a1e5.forEach((_0x50770c, _0x4d8a8f) => {
                                                _0x50770c.attributes.forEach((_0xade151, _0x525d66) => {
                                                  const _0x3551cc = document.createElement("tr");
                                                  if (_0x525d66 === 0) {
                                                    const _0x116de9 = document.createElement("td");
                                                    _0x116de9.classList.add("checkbox-cell");
                                                    const _0x3a4da3 = document.createElement("input");
                                                    _0x3a4da3.type = "checkbox";
                                                    _0x3a4da3.name = "product-select";
                                                    _0x3a4da3.setAttribute("siteInfo-goods", _0x50770c.suggestEnrollSessionIdList.join(","));
                                                    _0x116de9.appendChild(_0x3a4da3);
                                                    _0x116de9.rowSpan = _0x50770c.attributes.length;
                                                    _0x3551cc.appendChild(_0x116de9);
                                                    const _0xae6603 = document.createElement("td");
                                                    _0xae6603.classList.add("img-cell");
                                                    const _0x1b4a73 = document.createElement("img");
                                                    _0x1b4a73.src = _0x50770c.image;
                                                    _0x1b4a73.alt = "商品图片";
                                                    _0x1b4a73.setAttribute("spuid-goods", _0x50770c.spuid);
                                                    _0xae6603.rowSpan = _0x50770c.attributes.length;
                                                    _0xae6603.appendChild(_0x1b4a73);
                                                    _0x3551cc.appendChild(_0xae6603);
                                                    const _0x119067 = document.createElement("td");
                                                    _0x119067.classList.add("skc-cell");
                                                    _0x119067.textContent = _0x50770c.skc;
                                                    _0x119067.rowSpan = _0x50770c.attributes.length;
                                                    _0x3551cc.appendChild(_0x119067);
                                                  }
                                                  if (_0x525d66 === 0) {
                                                    var _0x4a4d23 = document.createElement("td");
                                                    _0x4a4d23.className = "activity-stock-cell";
                                                    _0x4a4d23.rowSpan = _0x50770c.attributes.length;
                                                    const _0x4493c3 = document.createElement("input");
                                                    _0x4493c3.placeholder = "请输入";
                                                    _0x4493c3.type = "number";
                                                    _0x4493c3.value = "";
                                                    _0x4493c3.min = _0xade151[4];
                                                    _0x4493c3.addEventListener("input", _0x40b424 => {
                                                      const _0x250852 = parseFloat(_0x40b424.target.value);
                                                      !isNaN(_0x250852) && _0x250852 < _0xade151[4] && (_0x40b424.target.value = _0xade151[4]);
                                                      isNaN(_0x250852) && _0x40b424.target.value !== "" && (_0x40b424.target.value = "");
                                                    });
                                                    _0x4493c3.style.width = "100%";
                                                    _0x4493c3.style.padding = "5px";
                                                    _0x4493c3.style.border = "1px solid #ccc";
                                                    _0x4493c3.style.borderRadius = "5px";
                                                    _0x4493c3.style.backgroundColor = "#f9f9f9";
                                                    _0x4a4d23.appendChild(_0x4493c3);
                                                    var _0x4c4431 = document.createElement("td");
                                                    _0x4c4431.className = "activity-name-cell";
                                                    _0x4c4431.innerHTML = _0xade151[3];
                                                    _0x4c4431.setAttribute("activity-type", _0xade151[5] + "@" + _0xade151[6]);
                                                    _0x4c4431.rowSpan = _0x50770c.attributes.length;
                                                  }
                                                  const _0x425236 = document.createElement("td");
                                                  _0x425236.className = "attributes-cell";
                                                  _0x425236.innerHTML = _0xade151[0];
                                                  _0x425236.setAttribute("data-sku", _0xade151[7]);
                                                  _0x3551cc.appendChild(_0x425236);
                                                  const _0xe830ef = document.createElement("td");
                                                  _0xe830ef.className = "original-price-cell";
                                                  _0xe830ef.textContent = _0xade151[1];
                                                  _0x3551cc.appendChild(_0xe830ef);
                                                  const _0x4271af = document.createElement("td");
                                                  _0x4271af.className = "activity-price-cell";
                                                  _0x4271af.textContent = _0xade151[2];
                                                  _0x3551cc.appendChild(_0x4271af);
                                                  const _0x1e6386 = document.createElement("td");
                                                  _0x1e6386.className = "activity-quote-cell";
                                                  const _0x4b9ade = document.createElement("input");
                                                  _0x4b9ade.placeholder = "请输入";
                                                  _0x4b9ade.type = "number";
                                                  _0x4b9ade.max = _0xade151[2];
                                                  _0x4b9ade.value = "";
                                                  _0x4b9ade.addEventListener("input", _0x5f546b => {
                                                    const _0x52cac1 = parseFloat(_0x5f546b.target.value);
                                                    !isNaN(_0x52cac1) && _0x52cac1 > _0xade151[2] && (_0x5f546b.target.value = _0xade151[2]);
                                                    isNaN(_0x52cac1) && _0x5f546b.target.value !== "" && (_0x5f546b.target.value = "");
                                                  });
                                                  _0x4b9ade.style.width = "100%";
                                                  _0x4b9ade.style.padding = "5px";
                                                  _0x4b9ade.style.border = "1px solid #ccc";
                                                  _0x4b9ade.style.borderRadius = "5px";
                                                  _0x4b9ade.style.backgroundColor = "#f9f9f9";
                                                  _0x1e6386.appendChild(_0x4b9ade);
                                                  _0x3551cc.appendChild(_0x1e6386);
                                                  _0x525d66 === 0 && (_0x3551cc.appendChild(_0x4a4d23), _0x3551cc.appendChild(_0x4c4431));
                                                  _0x3901f6.appendChild(_0x3551cc);
                                                });
                                              });
                                            }
                                          });
                                        });
                                        _0x2a51f8.appendChild(_0x35d410);
                                      }
                                      if (_0x306c20) {
                                        const _0x1517eb = _0x306c20.innerText.replace("SKC：", "");
                                        if (!_0x4a3335) {
                                          const _0x35cfd5 = document.createElement("p");
                                          _0x35cfd5.className = "new-paragraph";
                                          _0x35cfd5.style.cssText = "\n                                                                                                    color: #f71010 !important;\n                                                                                                    font-style: italic !important;\n                                                                                                    font-size: larger !important;\n                                                                                                    margin-bottom: 8px !important;\n                                                                                                    margin-left: -10px !important;\n                                                                                                    display: block !important;\n                                                                                                    visibility: visible !important;\n                                                                                                    position: relative !important;\n                                                                                                    z-index: 9999 !important;\n                                                                                                    ";
                                          if (_0x215348.data.shopState != "正常") {
                                            const _0x2b340f = document.createElement("span");
                                            _0x2b340f.innerHTML = "买手：未绑定店铺<br>平台买手端标签：";
                                            _0x35cfd5.appendChild(_0x2b340f);
                                          } else {
                                            if (_0x215348.data.shopState == "正常") {
                                              const _0x1df9dd = document.createElement("a");
                                              _0x1df9dd.href = "https://www.temu.com/goods.html?goods_id=" + _0x23adfa[_0x1517eb][3];
                                              _0x1df9dd.target = "_blank";
                                              _0x1df9dd.style.color = "#fb7701";
                                              _0x1df9dd.style.fontStyle = "normal";
                                              _0x1df9dd.innerText = "跳转商品前端";
                                              const _0x342414 = document.createElement("span");
                                              _0x342414.innerHTML = "<br>买手：" + _0x23adfa[_0x1517eb][0] + "<br>平台买手端标签：" + _0x23adfa[_0x1517eb][1];
                                              const _0x50a57b = document.createElement("div");
                                              _0x50a57b.className = "nextInfoBox" + _0x1517eb;
                                              const _0x3b5155 = document.createElement("div");
                                              _0x3b5155.className = "leimu";
                                              _0x3b5155.innerHTML = _0x23adfa[_0x1517eb][4] + "<a class=\"leimu_copy\" style=\"color: #0071f3; cursor:pointer;\"> 复制</a>";
                                              const _0x27f9c7 = document.createElement("div");
                                              _0x27f9c7.className = "zhandianBox";
                                              const _0x2e8de9 = document.createElement("div");
                                              _0x2e8de9.className = "meiguoText";
                                              const _0x1f5984 = document.createElement("span");
                                              _0x23adfa[_0x1517eb][5].includes("美国站") && (_0x1f5984.className = "addMeiguo", _0x1f5984.innerText = "美国站，", _0x2e8de9.appendChild(_0x1f5984));
                                              _0x2e8de9.innerHTML += _0x23adfa[_0x1517eb][5].length != 0 ? _0x23adfa[_0x1517eb][5].slice(0, 2).join("，") + "...<br><a class=\"showAllAdd\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                              const _0x5b6942 = document.createElement("div");
                                              _0x5b6942.innerHTML = "<div style=\"font-size: 13px;color: #333;\">已下架站点</div>";
                                              const _0x4fd92b = document.createElement("div");
                                              _0x4fd92b.className = "meiguoText";
                                              _0x4fd92b.innerHTML = _0x23adfa[_0x1517eb][6].includes("美国站") ? "<span class=\"moveMeiguo\">美国站，</span>" : "";
                                              _0x4fd92b.innerHTML += _0x23adfa[_0x1517eb][6].length != 0 ? _0x23adfa[_0x1517eb][6].slice(0, 2).join("，") + "...<br><a class=\"showAllMove\" style=\"font-size: 13px;color: #0071f3;cursor:pointer;\">查看全部</a>" : "-无-";
                                              _0x27f9c7.appendChild(_0x2e8de9);
                                              _0x27f9c7.appendChild(_0x5b6942);
                                              _0x27f9c7.appendChild(_0x4fd92b);
                                              _0x35cfd5.appendChild(_0x1df9dd);
                                              _0x35cfd5.appendChild(_0x342414);
                                              _0x50a57b.appendChild(_0x3b5155);
                                              _0x50a57b.appendChild(_0x27f9c7);
                                              _0x35cfd5.appendChild(_0x50a57b);
                                            }
                                          }
                                          _0x1a7847.push({
                                            newParagraph: _0x35cfd5,
                                            lastRow: _0x19a78a,
                                            skuId: _0x1517eb
                                          });
                                        }
                                      }
                                    }
                                  }
                                  document.querySelectorAll("[class*=TB_tableWrapper]")[_0x535863].style.visibility = "hidden";
                                  for (const {
                                    newParagraph: _0x24f8c4,
                                    lastRow: _0x418d02
                                  } of _0x1a7847) {
                                    _0x418d02.insertAdjacentElement("afterend", _0x24f8c4);
                                    _0x418d02.getBoundingClientRect();
                                  }
                                  document.querySelectorAll("[class*=TB_tableWrapper]")[_0x535863].style.visibility = "visible";
                                  const _0x5e3a34 = document.querySelectorAll("[class*=TB_tableWrapper]")[_0x535863].querySelectorAll("[class*=main_subLine]");
                                  _0x5e3a34.forEach(_0x43801c => {
                                    const _0x46fdd0 = _0x43801c.textContent;
                                    const _0x3b45bb = _0x46fdd0.match(/SKU ID：(\d+)/);
                                    if (_0x3b45bb) {
                                      const _0x451cf6 = _0x3b45bb[1];
                                      const _0x2f7a98 = _0x43801c.nextElementSibling;
                                      _0x2f7a98 && _0x2f7a98.querySelector(".activaBox") && _0x2f7a98.querySelector(".activaBox").remove();
                                      const _0x51f136 = document.createElement("div");
                                      _0x1b16c6[_0x451cf6.toString()] ? _0x51f136.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #83e5c44f;\n                                                                                                    align-items: baseline;\n                                                                                                    display: flex;\n                                                                                                    \"><span style=\"margin-left: 5px;\">已报名活动</span><div class=\"showHD\" style=\"font-size: 13px;color: #0071f3; margin-left: 8px; font-weight: bold;cursor: pointer;\">活动详情</div></div>" : _0x51f136.innerHTML = "<div class=\"activaBox\" style=\"\n                                                                                                    border: 1px solid #A8A8A8;\n                                                                                                    border-radius: 8px;\n                                                                                                    background-color: #e1d7d8;\n                                                                                                    \"><span style=\"margin-left: 5px;\">未报名 / 所有活动已结束</span></div>";
                                      _0x43801c.parentNode.insertBefore(_0x51f136, _0x43801c.nextSibling);
                                      _0x1b16c6[_0x451cf6.toString()] && _0x51f136.querySelector(".showHD").addEventListener("click", function () {
                                        showPopup(_0x1b16c6[_0x451cf6.toString()]);
                                        getSkuCoupon(_0x451cf6, _0x2132d2).then(_0x395c50 => {
                                          generateCouponHTML(_0x395c50);
                                        });
                                      });
                                    }
                                  });
                                  for (const {
                                    newParagraph: _0x5f5ab8,
                                    skuId: _0x3e4e6c
                                  } of _0x1a7847) {
                                    if (_0x215348.data.shopState != "正常") {
                                      _0x22fb94(_0x5f5ab8, "请绑定店铺后使用");
                                    } else {
                                      _0x215348.data.shopState == "正常" && (_0x22fb94(_0x5f5ab8, _0x23adfa[_0x3e4e6c][2], 2, [_0x5f5ab8.querySelector(".addMeiguo"), _0x5f5ab8.querySelector(".moveMeiguo")]), _0x23adfa[_0x3e4e6c][5].length != 0 && _0x22fb94(_0x5f5ab8.querySelector(".showAllAdd"), _0x23adfa[_0x3e4e6c][5].join("，"), 3, [], "已发布站点（" + _0x23adfa[_0x3e4e6c][5].length + "个）"), _0x23adfa[_0x3e4e6c][6].length != 0 && _0x22fb94(_0x5f5ab8.querySelector(".showAllMove"), _0x23adfa[_0x3e4e6c][6].join("，"), 3, [], "已下站点（" + _0x23adfa[_0x3e4e6c][6].length + "个）"), _0x23adfa[_0x3e4e6c][5].includes("美国站") && _0x22fb94(_0x5f5ab8.querySelector(".addMeiguo"), _0x23adfa[_0x3e4e6c][7].join("，"), 1, [], "美国已售卖州（" + _0x23adfa[_0x3e4e6c][7].length + "个）"), _0x23adfa[_0x3e4e6c][6].includes("美国站") && _0x22fb94(_0x5f5ab8.querySelector(".moveMeiguo"), _0x23adfa[_0x3e4e6c][7].join("，"), 1, [], "美国下架前已售卖州（" + _0x23adfa[_0x3e4e6c][7].length + "个）"), _0x5f5ab8.querySelector(".leimu").querySelector(".leimu_copy").addEventListener("click", function () {
                                        navigator.clipboard.writeText(_0x23adfa[_0x3e4e6c][4]).then(function () {
                                          tipBoxShowBu("类目已复制到剪切板", 2000);
                                        });
                                      }));
                                    }
                                  }
                                  _0x3814f3 = false;
                                } catch (_0x318294) {
                                  _0x3814f3 = false;
                                  console.log(_0x318294);
                                }
                              } else {
                                _0x3814f3 = false;
                              }
                            }).catch(_0xdb3204 => {
                              _0x3814f3 = false;
                            })) : _0x3814f3 = false;
                          });
                        } catch (_0x41675) {
                          _0x3814f3 = false;
                        }
                      }
                    }
                    if (_0x215348.data.on == "cc" && _0x3c531c == null) {
                      _0x3c531c = setInterval(() => {
                        try {
                          var _0x45221e = document.querySelectorAll("[class*=TB_tableWrapper]");
                          _0x45221e.length >= 2 ? _0x4bb599(1) : _0x4bb599(0);
                        } catch (_0x99d254) {
                          console.log(_0x99d254);
                        }
                      }, 1500);
                    }
                    if (!document.querySelector("#jas-custom-style")) {
                      const _0x398e63 = document.createElement("style");
                      _0x398e63.id = "jas-custom-style";
                      _0x398e63.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal1 {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n                                                        #openModal1:hover {\n                                                           \n                                                            color: #fff;\n                                                            box-shadow: 0 3px 10px rgba(255,111,0,0.4);\n                                                            transform: translateY(-2px);\n                                                        }\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 400px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                      document.head.appendChild(_0x398e63);
                    }
                    if (!document.querySelector("#openModal1")) {
                      fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x4889e2 => _0x4889e2.arrayBuffer()).then(_0x1a59cf => {
                        crypto.subtle.digest("SHA-256", _0x1a59cf).then(_0x455dc7 => {
                          const _0x27b34c = Array.from(new Uint8Array(_0x455dc7));
                          const _0x269688 = _0x27b34c.map(_0x514635 => _0x514635.toString(16).padStart(2, "0")).join("");
                          _0x269688 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                            codePhone: ["", ""]
                          });
                        });
                      });
                      await waitForConsumerConsultation("[class*='use-divider-fields.tsx_divider']", "");
                      var _0x5b4611 = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                      const _0x5ddd6e = document.createElement("div");
                      _0x5ddd6e.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal1\" class=\"btn\"><img src=" + chrome.runtime.getURL("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">加速审核</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"jiasugululu\">咕噜噜加速审核菜单</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">入库商品催加站点</button>\n                                                            <button id=\"func2\" class=\"func-btn\">商品催图审</button>\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                ";
                      !document.querySelector("#openModal1") && _0x5b4611.appendChild(_0x5ddd6e);
                      const _0x565080 = document.getElementById("openModal1");
                      const _0x59c7bf = document.getElementById("closeModal");
                      const _0x4bfa7e = document.getElementById("modal");
                      const _0x21b4af = document.getElementById("overlay");
                      const _0x32c354 = document.getElementById("func1");
                      const _0x383f34 = document.getElementById("func2");
                      _0x565080.addEventListener("click", () => {
                        _0x4bfa7e.style.display = "block";
                        _0x21b4af.style.display = "block";
                        "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x243a6f, _0x2e94fd) => String.fromCharCode(parseInt(_0x2e94fd, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            codePhone: ["", ""]
                          });
                          window.location.reload();
                        }();
                      });
                      _0x59c7bf.addEventListener("click", () => {
                        _0x4bfa7e.style.display = "none";
                        _0x21b4af.style.display = "none";
                        "咕噜噜加速审核菜单".replace(/\\u([\d\w]{4})/gi, (_0x52a825, _0x5408d4) => String.fromCharCode(parseInt(_0x5408d4, 16))) == document.querySelector("#jiasugululu").innerText ? "" : !function () {
                          chrome.storage.local.set({
                            codePhone: ["", ""]
                          });
                          window.location.reload();
                        }();
                      });
                      _0x21b4af.addEventListener("click", () => {
                        _0x4bfa7e.style.display = "none";
                        _0x21b4af.style.display = "none";
                      });
                      _0x32c354.addEventListener("click", () => {
                        _0x4bfa7e.style.display = "none";
                        _0x21b4af.style.display = "none";
                        if (_0x215348.data.shopState == "正常") {
                          if (_0x215348.data.on == "cc") {
                            createLoader();
                            fetchData().then(_0x1cdbcb => {
                              fetchSalesManagementList(_0x1cdbcb).then(() => {
                                removeLoader();
                                showCustomAlert("入库商品已完成加站点反馈");
                              });
                            });
                          } else {
                            if (_0x215348.data.on == "yb") {
                              showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                            } else {
                              _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                            }
                          }
                        } else {
                          if (_0x215348.data.shopState == "可绑") {
                            var _0x49a0da = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                            showCustomAlert("是否绑定当前店铺使用<br>" + _0x49a0da, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x49a0da);
                          } else {
                            if (_0x215348.data.shopState == "超绑") {
                              showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            } else {
                              _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      });
                      _0x383f34.addEventListener("click", () => {
                        _0x4bfa7e.style.display = "none";
                        _0x21b4af.style.display = "none";
                        if (_0x215348.data.shopState == "正常") {
                          if (_0x215348.data.on == "cc") {
                            createLoader();
                            fetchData().then(_0x3d2526 => {
                              fetchPhotoOldList(_0x3d2526).then(() => {
                                removeLoader();
                                showCustomAlert("商品已完成图审申请");
                              });
                            });
                          } else {
                            if (_0x215348.data.on == "yb") {
                              showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                            } else {
                              _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                            }
                          }
                        } else {
                          if (_0x215348.data.shopState == "可绑") {
                            var _0x3a0769 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                            showCustomAlert("是否绑定当前店铺使用<br>" + _0x3a0769, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x3a0769);
                          } else {
                            if (_0x215348.data.shopState == "超绑") {
                              showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            } else {
                              _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                            }
                          }
                        }
                      });
                    }
                    async function _0xd2eda2() {
                      await waitForConsumerConsultation("[class*='use-divider-fields.tsx_divider']", "");
                      var _0x2b5f5a = document.querySelector("[class*='use-divider-fields.tsx_divider']");
                      if (!_0x2b5f5a) {
                        console.error("目标元素未找到");
                        return;
                      }
                      if (document.querySelector("#dateRangeButton")) {
                        return;
                      }
                      var _0x4694b3 = document.createElement("button");
                      _0x4694b3.id = "dateRangeButton";
                      _0x4694b3.style.margin = "8px";
                      _0x4694b3.style.marginTop = "0";
                      _0x4694b3.style.padding = "1px 8px 3px 8px";
                      _0x4694b3.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                      _0x4694b3.style.color = "white";
                      _0x4694b3.style.border = "none";
                      _0x4694b3.style.fontFamily = "auto";
                      _0x4694b3.style.borderRadius = "10px";
                      _0x4694b3.style.cursor = "pointer";
                      _0x4694b3.style.transition = "background-color 0.3s";
                      _0x4694b3.style.display = "flex";
                      _0x4694b3.style.alignItems = "center";
                      _0x4694b3.style.justifyContent = "center";
                      _0x4694b3.style.gap = "8px";
                      _0x4694b3.style.fontSize = "15px";
                      const _0x574407 = document.createElement("img");
                      _0x574407.src = chrome.runtime.getURL("web/img/control.png");
                      _0x574407.style.width = "28px";
                      _0x574407.style.height = "28px";
                      _0x574407.style.objectFit = "contain";
                      _0x4694b3.appendChild(_0x574407);
                      const _0x48c06e = document.createTextNode("导出销售数据");
                      _0x4694b3.appendChild(_0x48c06e);
                      _0x2b5f5a.appendChild(_0x4694b3);
                      var _0x5d8c8a = document.createElement("input");
                      _0x5d8c8a.type = "text";
                      _0x5d8c8a.id = "riqigululu";
                      _0x5d8c8a.placeholder = "咕噜噜提示：请输入日期";
                      _0x5d8c8a.style.display = "none";
                      _0x5d8c8a.style.padding = "8px 15px";
                      _0x5d8c8a.style.borderRadius = "5px";
                      _0x5d8c8a.style.border = "1px solid #ccc";
                      _0x5d8c8a.style.fontSize = "14px";
                      _0x2b5f5a.appendChild(_0x5d8c8a);
                      var _0x459b55 = chrome.runtime.getURL("web/css/flatpickr.min.css");
                      var _0x1b801b = document.querySelector("link[href=\"" + _0x459b55 + "\"]");
                      if (!_0x1b801b) {
                        const _0x51d664 = document.createElement("link");
                        _0x51d664.rel = "stylesheet";
                        _0x51d664.href = _0x459b55;
                        document.head.appendChild(_0x51d664);
                      }
                      _0x4a7b36();
                      function _0x4a7b36() {
                        var _0x463d03 = flatpickr(_0x5d8c8a, {
                          locale: "zh",
                          mode: "range",
                          dateFormat: "Y-m-d",
                          closeOnSelect: false,
                          appendTo: _0x2b5f5a,
                          maxDate: new Date().fp_incr(-1),
                          minDate: function () {
                            var _0x3bc825 = new Date();
                            _0x3bc825.setMonth(_0x3bc825.getMonth() - 2);
                            _0x3bc825.setDate(1);
                            return _0x3bc825;
                          }(),
                          onReady: (_0x217cc4, _0x47d1fb, _0x55b8b1) => {
                            const _0x2df062 = document.createElement("button");
                            _0x2df062.textContent = "确定";
                            _0x2df062.style.margin = "10px";
                            _0x2df062.style.padding = "5px 10px";
                            _0x2df062.style.backgroundColor = "#007BFF";
                            _0x2df062.style.color = "white";
                            _0x2df062.style.border = "none";
                            _0x2df062.style.borderRadius = "5px";
                            _0x2df062.style.cursor = "pointer";
                            _0x2df062.style.fontSize = "14px";
                            _0x2df062.style.transition = "background-color 0.3s";
                            _0x2df062.onmouseover = () => _0x2df062.style.backgroundColor = "#0056b3";
                            _0x2df062.onmouseout = () => _0x2df062.style.backgroundColor = "#007BFF";
                            _0x2df062.onclick = function () {
                              const _0x2884da = _0x55b8b1.selectedDates;
                              if (_0x2884da.length === 2) {
                                var [_0x381875, _0x2dd271] = _0x2884da;
                                _0x381875 = flatpickr.formatDate(_0x381875, "Y-m-d");
                                _0x2dd271 = flatpickr.formatDate(_0x2dd271, "Y-m-d");
                                _0x55b8b1.close();
                                _0x5d8c8a.style.display = "none";
                                if (_0x215348.data.shopState == "正常") {
                                  if (_0x215348.data.on == "yb") {
                                    showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                  } else {
                                    if (_0x215348.data.on == "cc") {
                                      "咕噜噜提示：请输入日期".replace(/\\u([\d\w]{4})/gi, (_0x3848c4, _0x538f6e) => String.fromCharCode(parseInt(_0x538f6e, 16))) == document.querySelector("#riqigululu").getAttribute("placeholder") ? "" : !function () {
                                        chrome.storage.local.set({
                                          codePhone: ["", ""]
                                        });
                                        window.location.reload();
                                      }();
                                      createLoader();
                                      getMallId().then(_0x2d39b4 => {
                                        chrome.runtime.sendMessage({
                                          type: "exportSalesHistory",
                                          mallId: _0x2d39b4,
                                          startDate: _0x381875,
                                          endDate: _0x2dd271
                                        }).then(_0x125236 => {
                                          var _0x20b300 = _0x125236.saveSaleExcel;
                                          _0x20b300 ? (removeLoader(), _0x20b300.unshift(["产品名称", "产品SKC", "SKU", "SKU货号", "SKU属性名称", "申报价格", _0x381875 + "至" + _0x2dd271 + "销量", "当前仓内可用库存"]), exportToExcel(_0x125236.saveSaleExcel, _0x381875 + "至" + _0x2dd271 + "销售数据.xlsx")) : removeLoader();
                                        });
                                      });
                                    } else {
                                      _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                    }
                                  }
                                } else {
                                  if (_0x215348.data.shopState == "可绑") {
                                    var _0xd383c2 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    showCustomAlert("是否绑定当前店铺使用<br>" + _0xd383c2, "可绑定帮助", _0x2132d2, _0x46d8b2, _0xd383c2);
                                  } else {
                                    if (_0x215348.data.shopState == "超绑") {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    } else {
                                      _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              }
                            };
                            _0x55b8b1.calendarContainer.appendChild(_0x2df062);
                          }
                        });
                        _0x4694b3.onclick = function () {
                          _0x5d8c8a.style.display = "block";
                          _0x463d03.open();
                        };
                        document.addEventListener("click", function (_0x4ae272) {
                          !_0x5d8c8a.contains(_0x4ae272.target) && !_0x463d03.calendarContainer.contains(_0x4ae272.target) && _0x4ae272.target !== _0x4694b3 && (_0x5d8c8a.style.display = "none", _0x463d03.close());
                        });
                      }
                    }
                    _0xd2eda2();
                  });
                }
                _0x13a2ef();
              }();
            } else {
              if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                !function () {
                  _0x196053();
                  window.addEventListener("popstate", function (_0x3843c5) {
                    if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                      var _0x218fe2 = document.querySelector(".mySales");
                      !_0x218fe2 && _0x196053().then(() => {}).catch(_0x5c6ad2 => {});
                    }
                  });
                  async function _0x196053() {
                    if (window.location.href === "https://seller.kuajingmaihuo.com/") {
                      await waitForConsumerConsultation("[class*=\"elli_outerWrapper\"]", "");
                      var _0x1a0e99 = document.querySelector(".mySales");
                      if (!_0x1a0e99) {
                        const _0xb3593a = document.createElement("style");
                        _0xb3593a.textContent = "\n                                                .cardShow {\n                                                    border: 1px solid #ddd;\n                                                    border-radius: 8px;\n                                                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                                                    padding: 16px;\n                                                    margin: 10px 0;\n                                                    max-width: 98%;\n                                                    height: 110px;\n                                                    background-color: #fff;\n                                                    display:flex;\n                                                }\n    \n                                                .cardShow-img {\n                                                    width: 100%;\n                                                    height: auto;\n                                                    border-radius: 8px;\n                                                }\n    \n                                                .cardShow-content {\n                                                    padding-top: 8px;\n                                                }\n    \n                                                .cardShow-title {\n                                                    font-size: 18px;\n                                                    margin: 0;\n                                                }\n    \n                                                .cardShow-description {\n                                                    font-size: 14px;\n                                                    color: #666;\n                                                }\n                                                .mysearch-input {\n                                                            border: none;\n                                                            outline: none;\n                                                            padding: 10px;\n                                                            width: 100px;\n                                                            // width: 300px;\n                                                            border-radius: 30px;\n                                                        }\n    \n                                                .mysearchMs-button {\n                                                    background-color: #4CAF50;\n                                                    color: white;\n                                                    border: none;\n                                                    padding: 10px 20px;\n                                                    // margin-left: 10px;\n                                                    border-radius: 30px;\n                                                    cursor: pointer;\n                                                }\n    \n                                                .mysearchMs-button:hover {\n                                                    background-color: #45a049;\n                                                }\n                                               \n                                                ";
                        document.head.appendChild(_0xb3593a);
                        const _0x219c06 = document.createElement("div");
                        _0x219c06.className = "cardShow";
                        if (_0x215348.data.shopState == "正常") {
                          if (_0x215348.data.on == "cc") {
                            await waitForConsumerConsultation("[class*=\"sales-block_dataTitle\"]", "");
                            var _0x2099b7 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                            var _0x4d73b9 = document.querySelector("#clictGetinfo");
                            if (!_0x4d73b9) {
                              const _0x3fd1ba = "\n                                                               <p id=\"clictGetinfo\" style=\" font-size: 20px; padding: 15px;   margin: 20px 0 20px 40px; border-radius: 10px; text-align: center;  display: flex; justify-content: center; align-items: center;\">\n                                                                    <span id=\"clickableText\" style=\"color: #007BFF; cursor: pointer;\">查看数据</span>\n                                                                    <span id=\"loadingSpinner\" style=\"display: none; margin-left: 10px;\">\n                                                                        <svg viewBox=\"0 0 50 50\" style=\"width: 24px; height: 24px;\">\n                                                                            <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#007BFF\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"31.4 31.4\" stroke-dashoffset=\"0\">\n                                                                                <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"1s\" repeatCount=\"indefinite\"/>\n                                                                            </circle>\n                                                                        </svg>\n                                                                    </span>\n                                                                    <span style=\"margin-left: 10px;\"><span style=\"color: red;\" id=\"gululutix\">【咕噜噜提醒：请不要频繁查看！】</span>(仅支持5000条以下销售数据分析)</span>\n                                                                </p>\n                                                                ";
                              _0x219c06.insertAdjacentHTML("beforeend", _0x3fd1ba);
                              const _0xe5874e = _0x2099b7.querySelector("div");
                              _0x2099b7.insertBefore(_0x219c06, _0xe5874e);
                              var _0x512b0f = await getMallId();
                              document.getElementById("clickableText").addEventListener("click", async function () {
                                "【咕噜噜提醒：请不要频繁查看！】".replace(/\\u([\d\w]{4})/gi, (_0xbd1ef0, _0x5cfa52) => String.fromCharCode(parseInt(_0x5cfa52, 16))) == document.querySelector("#gululutix").innerText ? "" : !function () {
                                  chrome.storage.local.set({
                                    codePhone: ["", ""]
                                  });
                                }();
                                chrome.runtime.sendMessage({
                                  type: "usageFunctionRecord",
                                  phone: _0x46d8b2,
                                  name: "首页销量数据汇总"
                                });
                                document.getElementById("clickableText").style.display = "none";
                                document.getElementById("loadingSpinner").style.display = "inline-block";
                                try {
                                  var _0x5434a7 = await _0x3c7c0a(_0x512b0f, "2");
                                  await _0x1b3aa7(_0x5434a7);
                                  document.querySelector("#clictGetinfo").style.display = "none";
                                } catch (_0x371fca) {
                                  document.getElementById("clickableText").style.display = "inline-block";
                                  document.getElementById("loadingSpinner").style.display = "none";
                                }
                              });
                              var _0x63d65e = await _0x3c7c0a(_0x512b0f, "1");
                              Object.keys(_0x63d65e).length !== 0 && (await _0x1b3aa7(_0x63d65e), document.querySelector("#clictGetinfo").style.display = "none");
                            }
                          } else {
                            var _0x4d73b9 = document.querySelector("#tipccinfo");
                            if (!_0x4d73b9) {
                              const _0x391150 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                              const _0x5b5651 = _0x391150.querySelector("div");
                              const _0x242366 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">当前账号暂不支持查看数据功能</p>";
                              _0x219c06.insertAdjacentHTML("beforeend", _0x242366);
                              _0x391150.insertBefore(_0x219c06, _0x5b5651);
                            }
                          }
                        } else {
                          if (_0x215348.data.shopState == "可绑") {
                            var _0x4d73b9 = document.querySelector("#tipccinfo");
                            if (!_0x4d73b9) {
                              const _0x57243d = document.querySelector("[class*=\"home-new_contentBlock\"]");
                              const _0xc0ad35 = _0x57243d.querySelector("div");
                              const _0x14b5da = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">请绑定店铺后使用<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">绑定</button></p>";
                              _0x219c06.insertAdjacentHTML("beforeend", _0x14b5da);
                              _0x57243d.insertBefore(_0x219c06, _0xc0ad35);
                              document.getElementById("bdShopButton").addEventListener("click", function () {
                                var _0x34399b = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x34399b, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x34399b);
                              });
                            }
                          } else {
                            if (_0x215348.data.shopState == "超绑") {
                              var _0x4d73b9 = document.querySelector("#tipccinfo");
                              if (!_0x4d73b9) {
                                const _0x51e3b7 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                const _0xa8d53 = _0x51e3b7.querySelector("div");
                                const _0x392b26 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级<button id=\"bdShopButton\" style=\"margin-left: 10px; border: 1px solid #4CAF50; border-radius: 5px; background-color: #98ede4; transition: background-color 0.3s;\" onmouseover=\"this.style.backgroundColor='#76d2d0'\" onmouseout=\"this.style.backgroundColor='#98ede4'\">帮助</button></p>";
                                _0x219c06.insertAdjacentHTML("beforeend", _0x392b26);
                                _0x51e3b7.insertBefore(_0x219c06, _0xa8d53);
                                document.getElementById("bdShopButton").addEventListener("click", function () {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级!", "常规帮助");
                                });
                              }
                            } else {
                              if (_0x215348.data.shopState == "绑满") {
                                var _0x4d73b9 = document.querySelector("#tipccinfo");
                                if (!_0x4d73b9) {
                                  const _0x3c92b5 = document.querySelector("[class*=\"home-new_contentBlock\"]");
                                  const _0x15d9b1 = _0x3c92b5.querySelector("div");
                                  const _0x376d26 = "<p id=\"tipccinfo\"; style=\"color: #4CAF50; font-size: 16px; padding: 15px; background-color: #e0ffe0; border: 1px solid #4CAF50; margin: 20px 0 20px 40px; border-radius: 10px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">绑定店铺数已达到上限，请联系小助手升级</p>";
                                  _0x219c06.insertAdjacentHTML("beforeend", _0x376d26);
                                  _0x3c92b5.insertBefore(_0x219c06, _0x15d9b1);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    async function _0x1b3aa7(_0x23fc3e) {
                      await waitForConsumerConsultation("[class*=\"sales-block_dataTitle\"]", "");
                      var _0x18ece4 = document.querySelector(".cardShow");
                      if (_0x18ece4) {
                        var _0x470a12 = document.querySelector(".mySales");
                        !_0x470a12 && _0x10577a(_0x18ece4, _0x23fc3e);
                      }
                    }
                  }
                  function _0x10577a(_0x30f9e5, _0x20fc32) {
                    try {
                      _0x30f9e5.innerHTML += "<div class=\"mysearch-container\" style=\"display: flex; width: 120px; background-color: #fff; padding: 10px; border-radius: 30px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); flex-direction: column; align-items: center; justify-content: space-around;;\"><input type=\"text\" class=\"mysearch-input\" id=\"myMsSearchInput\" placeholder=\"输买手查商品\"><button class=\"mysearchMs-button\" >搜索</button></div>";
                      function _0x4e06fa(_0x4b451f, _0x2d6170) {
                        var _0x1c1466 = document.createElement("div");
                        _0x1c1466.style.display = "flex";
                        _0x1c1466.id = "displayKeyInformation";
                        for (var _0x1547e4 = 0; _0x1547e4 < 6; _0x1547e4++) {
                          var _0x4c41d0 = document.createElement("div");
                          switch (_0x1547e4) {
                            case 0:
                              _0x4c41d0.innerHTML = "今日销售额：<span class=\"mySales\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x2d6170.declaredPrice + "  导出" + "</span>";
                              break;
                            case 1:
                              _0x4c41d0.innerHTML = "可用库存总量：<span class=\"quantity\" style=\"color:#fb7701; font-weight: bold\">" + _0x2d6170.allAvailableStock + "</span>";
                              break;
                            case 2:
                              _0x4c41d0.innerHTML = "可用库存价值：<span class=\"price\" style=\"color:#fb7701; font-weight: bold\">" + _0x2d6170.availableStockAllPrice + "</span>";
                              break;
                            case 3:
                              _0x4c41d0.innerHTML = "在途库存总价值：<span class=\"WaitReceive\" style=\"color:#fb7701; font-weight: bold\">" + _0x2d6170.allWaitReceiveNumPrice + "</span>";
                              break;
                            case 4:
                              _0x4c41d0.innerHTML = "滞销风险库存价值：<span class=\"InvValUnsoldGoods\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x2d6170.InvValUnsoldGoods + "  查看" + "</span>";
                              break;
                            case 5:
                              _0x4c41d0.innerHTML = "滞销品库存价值：<span class=\"invValueUnsoldRiskInventory\" style=\"color:#fb7701; font-weight: bold; cursor:pointer;\" onmouseover=\"this.style.color='#ff0000'\" onmouseout=\"this.style.color='#fb7701'\">" + _0x2d6170.invValueUnsoldRiskInventory + "  查看" + "</span>";
                              break;
                            default:
                              break;
                          }
                          _0x4c41d0.style.padding = "10px";
                          _0x4c41d0.style.border = "1px solid rgba(0, 0, 0, 0.1)";
                          _0x4c41d0.style.borderRadius = "5px";
                          _0x4c41d0.style.marginLeft = "10px";
                          _0x4c41d0.style.fontSize = "18px";
                          _0x4c41d0.style.height = "40px";
                          _0x1c1466.appendChild(_0x4c41d0);
                        }
                        _0x4b451f.appendChild(_0x1c1466);
                      }
                      function _0x504a73(_0x336d22) {
                        const _0x65998 = document.getElementById("loadingAnimation");
                        _0x65998 && _0x65998.remove();
                        const _0x4f85bb = document.createElement("div");
                        _0x4f85bb.id = "loadingAnimation";
                        _0x4f85bb.style.display = "flex";
                        _0x4f85bb.style.justifyContent = "center";
                        _0x4f85bb.style.alignItems = "center";
                        _0x4f85bb.style.height = "100%";
                        _0x4f85bb.style.width = "61%";
                        _0x4f85bb.style.top = "0";
                        _0x4f85bb.style.left = "0";
                        for (let _0x1612a3 = 0; _0x1612a3 < 4; _0x1612a3++) {
                          const _0x15f8f5 = document.createElement("div");
                          _0x15f8f5.style.width = "10px";
                          _0x15f8f5.style.height = "10px";
                          _0x15f8f5.style.backgroundColor = "#fb7701";
                          _0x15f8f5.style.borderRadius = "50%";
                          _0x15f8f5.style.margin = "0 5px";
                          _0x15f8f5.style.animation = "bounce 0.55s infinite alternate " + _0x1612a3 * 0.15 + "s";
                          _0x4f85bb.appendChild(_0x15f8f5);
                        }
                        _0x336d22.appendChild(_0x4f85bb);
                        const _0x34a25b = document.styleSheets[0];
                        _0x34a25b.insertRule("\n                                                  @keyframes bounce {\n                                                    0% { transform: translateY(0); }\n                                                    100% { transform: translateY(-15px); }\n                                                  }\n                                                ", _0x34a25b.cssRules.length);
                      }
                      _0x4e06fa(_0x30f9e5, _0x20fc32);
                      _0x30f9e5.innerHTML += "<button id=\"myDisplayUpdates\" style=\"position: absolute;top: 120px;width: 110px;left: 500px;background-color: #fb7701;color: white;border: none;border-radius: 30px;padding: 5px 10px;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);cursor: pointer;font-size: 16px;\">刷新数据</button>";
                      var _0xc52437 = document.querySelector(".product");
                      if (!_0xc52437) {
                        var _0x3ecb10 = document.createElement("style");
                        _0x3ecb10.textContent = "\n                                                    .myclos{\n                                                        text-decoration: none\n                                                    }\n        \n                                                    .picture {\n                                                        width: 976px;\n                                                        height: 562px;\n                                                        border: 1px solid #c7c7c7bf;\n                                                        font-family: \"å®‹ä½“\";\n                                                        display: none;\n                                                        z-index: 99999;\n                                                        position: fixed;\n                                                        left: 0;\n                                                        top: 50px;\n                                                        bottom: 0;\n                                                        right: 0;\n                                                        margin: 0 auto\n                                                    }\n        \n                                                    .picture .picture_top {\n                                                        background: #f3f3f3;\n                                                        height: 33px;\n                                                        color: #000\n                                                    }\n        \n                                                    .picture .picture_top span {\n                                                        font-size: 12px;\n                                                        padding-left: 20px;\n                                                        line-height: 33px\n                                                    }\n        \n                                                    .picture .picture_top a {\n                                                        float: right;\n                                                        font-size: 30px;\n                                                        line-height: 27px;\n                                                        padding-right: 5px;\n                                                        color: #3f3f3f;\n                                                        font-family: \"å¾®è½¯é›…é»‘\"\n                                                    }\n        \n                                                    .picture .picture_bottom {\n                                                        width: 100%;\n                                                        height: 529px;\n                                                        background: #fff\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left {\n                                                        width: 771px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_left .picture_img {\n                                                        position: relative;\n                                                        left: 56px;\n                                                        top: 51px;\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table;\n                                                        text-align: center\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 {\n                                                        width: 658px;\n                                                        height: 424px;\n                                                        display: table-cell;\n                                                        vertical-align: middle\n                                                    }\n        \n                                                    .picture_bottom .picture_left .picture_img .picture_img2 img {\n                                                        max-width: 658px;\n                                                        max-height: 424px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .prev {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        left: 18px\n                                                    }\n        \n                                                    .picture_bottom .picture_left .next {\n                                                        display: inline-block;\n                                                        width: 17px;\n                                                        height: 33px;\n                                                        position: relative;\n                                                        top: -178px;\n                                                        right: 18px;\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right {\n                                                        width: 205px;\n                                                        height: 100%;\n                                                        float: left\n                                                    }\n        \n                                                    .picture_xiao {\n                                                        background: coral;\n                                                        width: 50px;\n                                                        height: 50px;\n                                                        float: left;\n                                                        margin: 5px 8px\n                                                    }\n        \n                                                    .picture_xiao img {\n                                                        width: 100%\n                                                    }\n        \n                                                    .picture .picture_bottom .picture_right .picture_name {\n                                                        margin-left: 25px;\n                                                        margin-top: 48px\n                                                    }\n        \n                                                    .picture_name h3 {\n                                                        font-family: \"å¾®è½¯é›…é»‘\";\n                                                        font-size: 16px;\n                                                        margin-top: 33px;\n                                                        color: #000;\n                                                    }\n        \n                                                    .product_x {\n                                                        font-size: 11px;\n                                                        margin-left: 10px\n                                                    }\n        \n                                                    .picture_suo {\n                                                        width: 178px;\n                                                        height: 382px;\n                                                        border: 1px solid #e4e4e4;\n                                                        margin-left: 2px;\n                                                        margin-top: 20px;\n                                                        overflow: auto;\n                                                    }\n                                                    .picture_suo::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .picture_suo::-webkit-scrollbar-thumb {\n                                                        background-color: #ff8f06c2;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n        \n                                                    .picture_suo .picture_suo_t {\n                                                        padding: 14.5px;\n                                                        height: 300px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .picture_suo_img {\n                                                        width: 58px;\n                                                        height: 58px;\n                                                        margin: 6px 5px;\n                                                        border: 2px solid #e4e4e4;\n                                                        float: left;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .picture_suo .picture_suo_img img {\n                                                        width: 58px;\n                                                        height: 58px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye {\n                                                        text-align: center;\n                                                        width: 173px;\n                                                        font-size: 14px;\n                                                        height: 21px;\n                                                        position: relative\n                                                    }\n        \n                                                    .picture_suo .picture_fenye span {\n                                                        position: relative;\n                                                        top: -5px\n                                                    }\n        \n                                                    .picture_suo .picture_fenye .picture_next,\n                                                    .picture_suo .picture_fenye .picture_prev {\n                                                        display: inline-block;\n                                                        width: 20px;\n                                                        height: 21px;\n                                                        cursor: pointer\n                                                    }\n        \n                                                    .ljxq22 {\n                                                        display: inline-block;\n                                                        position: relative;\n                                                        bottom: 40px;\n                                                        right: -821px\n                                                    }\n        \n                                                    .picture_suo .picture_suo_t .suo-img {\n                                                        border: 2px solid #e4393c\n                                                    }\n        \n                                                    .tanchukuang_bg11 {\n                                                        width: 100%;\n                                                        min-width: 1164px;\n                                                        height: 100%;\n                                                        background: #000;\n                                                        position: fixed;\n                                                        z-index: 1001;\n                                                        filter: alpha(opacity=20);\n                                                        opacity: .4;\n                                                        left: 0;\n                                                        top: 0;\n                                                        display: none\n                                                    }\n        \n                                                    .product-info {\n                                                        margin-bottom: 20px;\n                                                        padding: 20px;\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        text-align: center;\n                                                        max-width: 600px;\n                                                        width: 100%;\n                                                    }\n                                                    .product-info h2 {\n                                                        margin-top: 0;\n                                                        margin-bottom: 10px;\n                                                        font-size: 20px;\n                                                        color: #333333;\n                                                    }\n                                                    .product-info p {\n                                                        margin: 0;\n                                                        font-size: 14px;\n                                                        color: #666666;\n                                                    }\n                                                    #productTable  {\n                                                        width: 100%;\n                                                        max-width: 909px;\n                                                        border-collapse: collapse;\n                                                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n                                                        background-color: #ffffff;\n                                                        border-radius: 8px;\n                                                        overflow: hidden;\n                                                    }\n                                                    #productTable th, #productTable td {\n                                                        padding: 12px 15px;\n                                                        text-align: left;\n                                                    }\n                                                    #productTable th {\n                                                        background-color: #009879;\n                                                        color: #ffffff;\n                                                        font-weight: bold;\n                                                    \n                                                    }\n                                                    #productTable tr {\n                                                        border-bottom: 1px solid #dddddd;\n                                                    }\n                                                    #productTable tr:nth-of-type(even) {\n                                                        background-color: #f3f3f3;\n                                                    }\n                                                    #productTable tr:last-of-type {\n                                                        border-bottom: 2px solid #009879;\n                                                    }\n                                                    #productTable tr:hover {\n                                                        background-color: #f1f1f1;\n                                                    }\n                                                    .table-container {\n                                                        max-width: 909px;\n                                                        overflow: auto;\n                                                        height: 260px;\n                                                    }\n                                                    .table-container::-webkit-scrollbar {\n                                                        width: 5px;\n                                                        /* 设置滚动条宽度 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-track {\n                                                        background-color: #f1f1f1;\n                                                        /* 设置滚动条轨道背景色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条轨道圆角 */\n                                                    }\n        \n                                                    .table-container::-webkit-scrollbar-thumb {\n                                                        background-color: #eee4d7c2;;\n                                                        /* 设置滚动条滑块颜色 */\n                                                        border-radius: 5px;\n                                                        /* 设置滚动条滑块圆角 */\n                                                    }\n        \n                                                    .details-button-container {\n                                                        position: absolute;\n                                                        bottom: -20px;\n                                                        right: 10px;\n                                                        z-index: 1;\n                                                    }\n        \n                                                    .details-button {\n                                                        background-color: #4CAF50;\n                                                        border: none;\n                                                        color: white;\n                                                        padding: 8px 16px;\n                                                        border-radius: 4px;\n                                                        font-size: 14px;\n                                                        cursor: pointer;\n                                                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n                                                        transition: background-color 0.3s ease;\n                                                    }\n        \n                                                    .details-button:hover {\n                                                        background-color: #2E8B57;\n                                                    }\n        \n                                                    ";
                        document.head.appendChild(_0x3ecb10);
                        const _0x2689b8 = document.createElement("div");
                        _0x2689b8.classList.add("product");
                        const _0xdc9e4b = document.createElement("div");
                        _0xdc9e4b.classList.add("productcen_content");
                        _0x2689b8.appendChild(_0xdc9e4b);
                        const _0x2b2c33 = document.createElement("div");
                        _0x2b2c33.classList.add("tanchukuang_bg11");
                        const _0x3e6a00 = document.createElement("div");
                        _0x3e6a00.classList.add("picture");
                        const _0x4c493f = document.createElement("div");
                        _0x4c493f.classList.add("picture_top");
                        const _0x25ceed = document.createElement("span");
                        _0x25ceed.textContent = "滞销风险商品详情";
                        const _0x2a61aa = document.createElement("a");
                        _0x2a61aa.classList.add("myclos");
                        _0x2a61aa.textContent = "×";
                        _0x4c493f.appendChild(_0x25ceed);
                        _0x4c493f.appendChild(_0x2a61aa);
                        const _0x308205 = document.createElement("div");
                        _0x308205.classList.add("picture_bottom");
                        const _0x2c86ac = document.createElement("div");
                        _0x2c86ac.classList.add("picture_left");
                        const _0x2a4205 = document.createElement("div");
                        _0x2a4205.classList.add("picture_img");
                        const _0x5f6d1a = document.createElement("div");
                        _0x5f6d1a.classList.add("product-info");
                        const _0x371c3f = document.createElement("h2");
                        _0x371c3f.setAttribute("id", "productName");
                        const _0x27d1f3 = document.createElement("p");
                        const _0x5cb2ca = document.createElement("strong");
                        _0x5cb2ca.textContent = "加入站点天数：";
                        const _0x1735c8 = document.createElement("span");
                        _0x1735c8.setAttribute("id", "daysOnSite");
                        const _0x1a2eb5 = document.createElement("hr");
                        const _0x1519c7 = document.createElement("strong");
                        _0x1519c7.textContent = "SKC：";
                        const _0x49dca4 = document.createElement("span");
                        _0x49dca4.setAttribute("id", "skcNumber");
                        _0x27d1f3.appendChild(_0x5cb2ca);
                        _0x27d1f3.appendChild(_0x1735c8);
                        _0x27d1f3.appendChild(_0x1a2eb5);
                        _0x27d1f3.appendChild(_0x1519c7);
                        _0x27d1f3.appendChild(_0x49dca4);
                        _0x5f6d1a.appendChild(_0x371c3f);
                        _0x5f6d1a.appendChild(_0x27d1f3);
                        const _0x3c89e4 = document.createElement("div");
                        _0x3c89e4.classList.add("table-container");
                        const _0x5332bf = document.createElement("table");
                        _0x5332bf.setAttribute("id", "productTable");
                        const _0xce8550 = document.createElement("thead");
                        const _0x255d7b = document.createElement("tr");
                        const _0x5bc4db = document.createElement("th");
                        _0x5bc4db.textContent = "商品SKU";
                        const _0x4dafc0 = document.createElement("th");
                        _0x4dafc0.textContent = "申报价格";
                        const _0x1f2102 = document.createElement("th");
                        _0x1f2102.textContent = "可用库存数";
                        const _0x4482b5 = document.createElement("th");
                        _0x4482b5.id = "myBuyerSkuId";
                        _0x4482b5.textContent = "SKU";
                        const _0xe3dbe8 = document.createElement("th");
                        _0xe3dbe8.id = "myBuyertodaySaler";
                        _0xe3dbe8.textContent = "今日销量";
                        const _0x338503 = document.createElement("th");
                        _0x338503.id = "myBuyerqitianSaler";
                        _0x338503.textContent = "近7天销量";
                        const _0x37d693 = document.createElement("th");
                        _0x37d693.id = "myBuyersanshiSaler";
                        _0x37d693.textContent = "近30天销量";
                        _0x255d7b.appendChild(_0x5bc4db);
                        _0x255d7b.appendChild(_0x4dafc0);
                        _0x255d7b.appendChild(_0x1f2102);
                        _0x255d7b.appendChild(_0x4482b5);
                        _0x255d7b.appendChild(_0xe3dbe8);
                        _0x255d7b.appendChild(_0x338503);
                        _0x255d7b.appendChild(_0x37d693);
                        _0xce8550.appendChild(_0x255d7b);
                        const _0x377d67 = document.createElement("tbody");
                        const _0x436747 = document.createElement("div");
                        _0x436747.classList.add("details-button-container");
                        const _0x58e43a = document.createElement("button");
                        _0x58e43a.classList.add("details-button");
                        _0x58e43a.textContent = "跳转商品详情";
                        _0x436747.appendChild(_0x58e43a);
                        _0x5332bf.appendChild(_0xce8550);
                        _0x5332bf.appendChild(_0x377d67);
                        _0x5332bf.appendChild(_0x436747);
                        _0x3c89e4.appendChild(_0x5332bf);
                        _0x2a4205.appendChild(_0x5f6d1a);
                        _0x2a4205.appendChild(_0x3c89e4);
                        _0x2c86ac.appendChild(_0x2a4205);
                        const _0x471981 = document.createElement("div");
                        _0x471981.classList.add("picture_right");
                        const _0x29aacf = document.createElement("div");
                        _0x29aacf.classList.add("picture_name");
                        const _0xdad582 = document.createElement("h3");
                        _0xdad582.textContent = "滞销风险商品";
                        _0x29aacf.appendChild(_0xdad582);
                        const _0x355000 = document.createElement("div");
                        _0x355000.classList.add("picture_suo");
                        const _0x225320 = document.createElement("div");
                        _0x225320.classList.add("picture_suo_t");
                        _0x225320.style.display = "block";
                        _0x355000.appendChild(_0x225320);
                        _0x471981.appendChild(_0x29aacf);
                        _0x471981.appendChild(_0x355000);
                        _0x308205.appendChild(_0x2c86ac);
                        _0x308205.appendChild(_0x471981);
                        _0x3e6a00.appendChild(_0x4c493f);
                        _0x3e6a00.appendChild(_0x308205);
                        _0x2689b8.appendChild(_0x2b2c33);
                        _0x2689b8.appendChild(_0x3e6a00);
                        document.body.appendChild(_0x2689b8);
                        document.querySelector(".picture").style.display = "none";
                        document.querySelector(".tanchukuang_bg11").style.display = "none";
                        document.querySelector(".myclos").addEventListener("click", function () {
                          document.querySelector(".picture").style.display = "none";
                          document.querySelector(".tanchukuang_bg11").style.display = "none";
                        });
                        document.querySelector(".details-button").addEventListener("click", function () {
                          var _0x2c7bfc = document.getElementById("productName").getAttribute("data-value");
                          var _0x40693f = window.open("https://seller.kuajingmaihuo.com/main/sale-manage/main?=" + _0x2c7bfc);
                        });
                      }
                      function _0x5b8696() {
                        document.querySelectorAll(".InvValUnsoldGoods").forEach(function (_0x59b5cc) {
                          _0x59b5cc.addEventListener("click", function () {
                            ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x237367 => document.getElementById(_0x237367).style.display = "none");
                            var _0x393615 = _0x20fc32.InvValUnsoldGoodsDist;
                            if (Object.keys(_0x393615).length !== 0) {
                              document.querySelector(".picture_suo_t").innerHTML = "";
                              for (var _0x411ff2 in _0x393615) {
                                const _0x2132d4 = document.createElement("div");
                                _0x2132d4.className = "picture_suo_img";
                                const _0x3cfe64 = document.createElement("img");
                                _0x3cfe64.className = "lazy";
                                _0x3cfe64.src = _0x393615[_0x411ff2].shopPhotoUrl;
                                _0x3cfe64.setAttribute("data-value", _0x411ff2);
                                _0x2132d4.appendChild(_0x3cfe64);
                                document.querySelector(".picture_suo_t").appendChild(_0x2132d4);
                              }
                              document.querySelector(".picture").style.display = "block";
                              document.querySelector(".tanchukuang_bg11").style.display = "block";
                              document.querySelectorAll(".picture_suo_img").forEach(function (_0x14b56e) {
                                _0x14b56e.addEventListener("click", function () {
                                  document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x55ad99) {
                                    _0x55ad99.classList.remove("suo-img");
                                  });
                                  this.classList.add("suo-img");
                                  var _0x1e3bd7 = _0x14b56e.querySelector("img").getAttribute("data-value");
                                  const _0x1e6bcd = _0x393615[_0x1e3bd7].productName;
                                  const _0x4aef5b = _0x393615[_0x1e3bd7].daysOnSite;
                                  const _0x83e107 = _0x393615[_0x1e3bd7].skus;
                                  const _0x148d9d = _0x393615[_0x1e3bd7].skcNumber;
                                  document.getElementById("productName").textContent = "" + _0x1e6bcd;
                                  document.getElementById("productName").setAttribute("data-value", _0x1e3bd7);
                                  document.getElementById("daysOnSite").textContent = _0x4aef5b + "天";
                                  document.getElementById("skcNumber").textContent = "" + _0x148d9d;
                                  const _0x20bf63 = document.getElementById("productTable").querySelector("tbody");
                                  _0x20bf63.innerHTML = "";
                                  _0x83e107.forEach(_0x28c1b8 => {
                                    const _0x4dfad7 = document.createElement("tr");
                                    const _0x5e2662 = document.createElement("td");
                                    _0x5e2662.textContent = _0x28c1b8.sku;
                                    _0x4dfad7.appendChild(_0x5e2662);
                                    const _0x88d5f = document.createElement("td");
                                    _0x88d5f.textContent = parseFloat(_0x28c1b8.price).toFixed(2);
                                    _0x4dfad7.appendChild(_0x88d5f);
                                    const _0x128fbe = document.createElement("td");
                                    _0x128fbe.textContent = _0x28c1b8.stock;
                                    _0x4dfad7.appendChild(_0x128fbe);
                                    _0x20bf63.appendChild(_0x4dfad7);
                                  });
                                });
                              });
                              document.querySelector(".picture_suo_img").click();
                              document.querySelector(".picture_top").querySelector("span").innerText = "滞销风险商品详情";
                              document.querySelector(".picture_name").querySelector("H3").innerText = "滞销风险商品(" + Object.keys(_0x393615).length + ")";
                            }
                          });
                        });
                        document.querySelectorAll(".invValueUnsoldRiskInventory").forEach(function (_0x16cdf6) {
                          _0x16cdf6.addEventListener("click", function () {
                            ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0xe86c9 => document.getElementById(_0xe86c9).style.display = "none");
                            var _0x33ddab = _0x20fc32.invValueUnsoldRiskInventoryDict;
                            if (Object.keys(_0x33ddab).length !== 0) {
                              document.querySelector(".picture_suo_t").innerHTML = "";
                              for (var _0x13c803 in _0x33ddab) {
                                const _0x34f123 = document.createElement("div");
                                _0x34f123.className = "picture_suo_img";
                                const _0x19dcaa = document.createElement("img");
                                _0x19dcaa.className = "lazy";
                                _0x19dcaa.src = _0x33ddab[_0x13c803].shopPhotoUrl;
                                _0x19dcaa.setAttribute("data-value", _0x13c803);
                                _0x34f123.appendChild(_0x19dcaa);
                                document.querySelector(".picture_suo_t").appendChild(_0x34f123);
                              }
                              document.querySelector(".picture").style.display = "block";
                              document.querySelector(".tanchukuang_bg11").style.display = "block";
                              document.querySelectorAll(".picture_suo_img").forEach(function (_0x3b0487) {
                                _0x3b0487.addEventListener("click", function () {
                                  document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x1dabe0) {
                                    _0x1dabe0.classList.remove("suo-img");
                                  });
                                  this.classList.add("suo-img");
                                  var _0x34ddf8 = _0x3b0487.querySelector("img").getAttribute("data-value");
                                  const _0x18735a = _0x33ddab[_0x34ddf8].productName;
                                  const _0x1dc29f = _0x33ddab[_0x34ddf8].daysOnSite;
                                  const _0x125be1 = _0x33ddab[_0x34ddf8].skus;
                                  const _0x2e944e = _0x33ddab[_0x34ddf8].skcNumber;
                                  document.getElementById("productName").textContent = "" + _0x18735a;
                                  document.getElementById("productName").setAttribute("data-value", _0x34ddf8);
                                  document.getElementById("daysOnSite").textContent = _0x1dc29f + "天";
                                  document.getElementById("skcNumber").textContent = "" + _0x2e944e;
                                  const _0x3e32cf = document.getElementById("productTable").querySelector("tbody");
                                  _0x3e32cf.innerHTML = "";
                                  _0x125be1.forEach(_0x5425b2 => {
                                    const _0x5d6762 = document.createElement("tr");
                                    const _0x177d00 = document.createElement("td");
                                    _0x177d00.textContent = _0x5425b2.sku;
                                    _0x5d6762.appendChild(_0x177d00);
                                    const _0x37fbc4 = document.createElement("td");
                                    _0x37fbc4.textContent = _0x5425b2.price.toFixed(2);
                                    _0x5d6762.appendChild(_0x37fbc4);
                                    const _0x3af482 = document.createElement("td");
                                    _0x3af482.textContent = _0x5425b2.stock;
                                    _0x5d6762.appendChild(_0x3af482);
                                    _0x3e32cf.appendChild(_0x5d6762);
                                  });
                                });
                              });
                              document.querySelector(".picture_suo_img").click();
                              document.querySelector(".picture_top").querySelector("span").innerText = "滞销商品详情";
                              document.querySelector(".picture_name").querySelector("H3").innerText = "滞销商品(" + Object.keys(_0x33ddab).length + ")";
                            }
                          });
                        });
                        document.querySelector(".mySales").addEventListener("click", function () {
                          exportToExcel(_0x20fc32.saveSaleExcel, "今日销售数据.xlsx");
                        });
                      }
                      _0x5b8696();
                      document.querySelector("#myDisplayUpdates").addEventListener("click", async function () {
                        document.querySelector("#myDisplayUpdates").style.display = "none";
                        document.getElementById("displayKeyInformation").remove();
                        _0x504a73(_0x30f9e5);
                        var _0x3ea5da = await getMallId();
                        var _0x16d2c0 = await _0x3c7c0a(_0x3ea5da, "2");
                        document.getElementById("loadingAnimation").remove();
                        _0x4e06fa(_0x30f9e5, _0x16d2c0);
                        document.querySelector("#myDisplayUpdates").style.display = "block";
                        _0x5b8696();
                      });
                      document.querySelector(".mysearchMs-button").addEventListener("click", async function () {
                        ["myBuyerSkuId", "myBuyertodaySaler", "myBuyerqitianSaler", "myBuyersanshiSaler"].forEach(_0x27cc4e => document.getElementById(_0x27cc4e).style.display = "");
                        createLoader();
                        var _0x43be4e = document.querySelector("#myMsSearchInput").value.toLowerCase();
                        var _0x2338ab = await getMallId();
                        const _0x5786ae = await new Promise((_0x3b54f3, _0x111ef7) => {
                          chrome.runtime.sendMessage({
                            type: "getMsCorrespondingProducts",
                            msInput: _0x43be4e,
                            maillid: _0x2338ab
                          }, _0x4dbe30 => {
                            chrome.runtime.lastError ? _0x111ef7(chrome.runtime.lastError) : _0x3b54f3(_0x4dbe30);
                          });
                        });
                        var _0x3bfd89 = _0x5786ae.data ? _0x5786ae.data : {};
                        removeLoader();
                        if (Object.keys(_0x3bfd89).length !== 0) {
                          document.querySelector(".picture_suo_t").innerHTML = "";
                          for (var _0x213bdf in _0x3bfd89) {
                            const _0x300892 = document.createElement("div");
                            _0x300892.className = "picture_suo_img";
                            const _0x3d7c9a = document.createElement("img");
                            _0x3d7c9a.className = "lazy";
                            _0x3d7c9a.src = _0x3bfd89[_0x213bdf].shopPhotoUrl;
                            _0x3d7c9a.setAttribute("data-value", _0x213bdf);
                            _0x300892.appendChild(_0x3d7c9a);
                            document.querySelector(".picture_suo_t").appendChild(_0x300892);
                          }
                          document.querySelector(".picture").style.display = "block";
                          document.querySelector(".tanchukuang_bg11").style.display = "block";
                          document.querySelectorAll(".picture_suo_img").forEach(function (_0x2fea99) {
                            _0x2fea99.addEventListener("click", function () {
                              document.querySelectorAll(".picture_suo_img.suo-img").forEach(function (_0x27d21b) {
                                _0x27d21b.classList.remove("suo-img");
                              });
                              this.classList.add("suo-img");
                              var _0x29388e = _0x2fea99.querySelector("img").getAttribute("data-value");
                              const _0x1ff385 = _0x3bfd89[_0x29388e].productName;
                              const _0x3d62b9 = _0x3bfd89[_0x29388e].daysOnSite;
                              const _0x3d3348 = _0x3bfd89[_0x29388e].skus;
                              const _0x5e79c7 = _0x3bfd89[_0x29388e].skcID;
                              document.getElementById("productName").textContent = "" + _0x1ff385;
                              document.getElementById("productName").setAttribute("data-value", _0x29388e);
                              document.getElementById("daysOnSite").textContent = _0x3d62b9 + "天";
                              document.getElementById("skcNumber").textContent = "" + _0x5e79c7;
                              const _0x175a29 = document.getElementById("productTable").querySelector("tbody");
                              _0x175a29.innerHTML = "";
                              _0x3d3348.forEach(_0x360595 => {
                                const _0x517642 = document.createElement("tr");
                                const _0x18906b = document.createElement("td");
                                _0x18906b.textContent = _0x360595.sku;
                                _0x517642.appendChild(_0x18906b);
                                const _0x4f1e37 = document.createElement("td");
                                _0x4f1e37.textContent = parseFloat(_0x360595.price).toFixed(2);
                                _0x517642.appendChild(_0x4f1e37);
                                const _0x373da5 = document.createElement("td");
                                _0x373da5.textContent = _0x360595.stock;
                                _0x517642.appendChild(_0x373da5);
                                const _0x5a687e = document.createElement("td");
                                _0x5a687e.textContent = _0x360595.skuID;
                                _0x517642.appendChild(_0x5a687e);
                                const _0x2b119c = document.createElement("td");
                                _0x2b119c.textContent = _0x360595.todaySaler;
                                _0x517642.appendChild(_0x2b119c);
                                const _0x27bfd0 = document.createElement("td");
                                _0x27bfd0.textContent = _0x360595.qitianSaler;
                                _0x517642.appendChild(_0x27bfd0);
                                const _0x5db617 = document.createElement("td");
                                _0x5db617.textContent = _0x360595.sanshiSaler;
                                _0x517642.appendChild(_0x5db617);
                                _0x175a29.appendChild(_0x517642);
                              });
                            });
                          });
                          document.querySelector(".picture_suo_img").click();
                          document.querySelector(".picture_top").querySelector("span").innerText = "买手名称：" + _0x43be4e;
                          document.querySelector(".picture_name").querySelector("H3").innerText = "管理商品（" + Object.keys(_0x3bfd89).length + "）";
                        } else {
                          showCustomAlert("查无商品！");
                        }
                        chrome.runtime.sendMessage({
                          type: "usageFunctionRecord",
                          phone: _0x46d8b2,
                          name: "买手查商品"
                        });
                      });
                    } catch (_0x2feaee) {}
                  }
                  async function _0x3c7c0a(_0x1d8116, _0x47fccd) {
                    if (_0x1d8116 === "") {
                      return _0x18f3dd();
                    }
                    try {
                      const _0x5239fa = await new Promise((_0x4cf4d9, _0x1bc25f) => {
                        chrome.runtime.sendMessage({
                          type: "getSalesManagementList",
                          mallid: _0x1d8116,
                          model: _0x47fccd
                        }, _0x480904 => {
                          chrome.runtime.lastError ? _0x1bc25f(chrome.runtime.lastError) : _0x4cf4d9(_0x480904);
                        });
                      });
                      return _0x5239fa.data;
                    } catch (_0xe13bb6) {
                      return _0x18f3dd();
                    }
                  }
                  function _0x18f3dd() {
                    return {
                      todaySales: 0,
                      declaredPrice: 0,
                      availableStockAllPrice: 0,
                      allAvailableStock: 0,
                      allWaitReceiveNumPrice: 0,
                      InvValUnsoldGoods: 0,
                      invValueUnsoldRiskInventory: 0,
                      InvValUnsoldGoodsDist: {},
                      invValueUnsoldRiskInventoryDict: {},
                      saveSaleExcel: []
                    };
                  }
                }();
              } else {
                if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage")) {
                  !function () {
                    window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x3c17d6();
                    window.addEventListener("popstate", function (_0x147438) {
                      window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manage") && _0x3c17d6();
                    });
                    async function _0x3c17d6() {
                      setInterval(function () {
                        try {
                          var _0x484bb6 = document.querySelector("[class*=order-manage_leftCnt]");
                          var _0x4db35e = document.querySelector("#openModal");
                          if (_0x484bb6 && !_0x4db35e) {
                            const _0x5732a3 = document.createElement("style");
                            _0x5732a3.textContent = "\n                                                        /* 按钮基础样式 */\n                                                        .btn {\n                                                            padding: 7px 14px;\n                                                            margin: 8px;\n                                                            margin-top: 0;\n                                                            cursor: pointer;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 16px;\n                                                        }\n    \n                                                        /* 触发按钮样式 */\n                                                        #openModal {\n                                                            background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                                            font-family: auto;\n                                                            font-size: 15px;\n                                                            font-weight: 600;\n                                                            color: rgb(255, 255, 255);\n                                                            text-align: center;\n                                                            cursor: pointer;\n                                                            white-space: nowrap;\n                                                            padding: 1px 8px 3px 8px;\n                                                            border: none;\n                                                            transition: 0.3s;\n                                                            display: flex;\n                                                            align-items: center;\n                                                            margin-top: 0;\n                                                            justify-content: center;\n                                                            gap: 8px;\n                                                        }\n\n    \n                                                        /* 弹窗样式 */\n                                                        #modal {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 50%;\n                                                            left: 50%;\n                                                            transform: translate(-50%, -50%);\n                                                            background-color: #f8f9fa;\n                                                            color: #333;\n                                                            border-radius: 15px;\n                                                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                            z-index: 1000;\n                                                            text-align: center;\n                                                            width: 80%;\n                                                            max-width: 410px;\n                                                        }\n    \n                                                        /* 背景遮罩样式 */\n                                                        #overlay {\n                                                            display: none;\n                                                            position: fixed;\n                                                            top: 0;\n                                                            left: 0;\n                                                            width: 100%;\n                                                            height: 100%;\n                                                            background: rgba(0, 0, 0, 0.5);\n                                                            z-index: 999;\n                                                        }\n    \n                                                        /* 功能按钮容器样式 */\n                                                        .func-btn-container {\n                                                            display: flex;\n                                                            justify-content: space-evenly;\n                                                            margin: 10px 0;\n                                                        }\n    \n                                                        /* 功能按钮样式 */\n                                                        .func-btn {\n                                                            padding: 12px 20px;\n                                                            background-color: #28a745;\n                                                            color: white;\n                                                            border: none;\n                                                            border-radius: 10px;\n                                                            cursor: pointer;\n                                                            transition: background-color 0.3s ease, transform 0.3s ease;\n                                                            font-size: 14px;\n                                                            flex: 1;\n                                                            max-width: 150px;\n                                                            text-align: center;\n                                                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                                                            margin: 0 8px;\n                                                        }\n                                                        .func-btn:hover {\n                                                            background-color: #218838;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 关闭按钮样式 */\n                                                        #closeModal {\n                                                            background-color: #dc3545;\n                                                            color: white;\n                                                            margin-top: 20px;\n                                                        }\n                                                        #closeModal:hover {\n                                                            background-color: #c82333;\n                                                            transform: scale(1.05);\n                                                        }\n    \n                                                        /* 弹窗标题样式 */\n                                                        #modal h2 {\n                                                            margin-bottom: 20px;\n                                                            font-size: 20px;\n                                                            color: #333;\n                                                        }\n                                                    ";
                            fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x46d10f => _0x46d10f.arrayBuffer()).then(_0x587322 => {
                              crypto.subtle.digest("SHA-256", _0x587322).then(_0x14bd39 => {
                                const _0x2f15bf = Array.from(new Uint8Array(_0x14bd39));
                                const _0x35e4a4 = _0x2f15bf.map(_0x55acdb => _0x55acdb.toString(16).padStart(2, "0")).join("");
                                _0x35e4a4 == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                                  codePhone: ["", ""]
                                });
                              });
                            });
                            const _0x2b82a0 = document.createElement("div");
                            _0x2b82a0.innerHTML = "\n                                                    <!-- 触发弹窗的按钮 -->\n                                                    <button id=\"openModal\" class=\"btn\"><img src=" + chrome.runtime.getURL("web/img/control.png") + " style=\"width: 28px;height: 28px;object-fit: contain;\">备货单处理</button>\n    \n                                                    <!-- 背景遮罩 -->\n                                                    <div id=\"overlay\"></div>\n    \n                                                    <!-- 弹窗内容 -->\n                                                    <div id=\"modal\">\n                                                        <h2 id=\"gululubhd\">咕噜噜备货单处理</h2>\n                                                        <div class=\"func-btn-container\">\n                                                            <button id=\"func1\" class=\"func-btn\">导出今日已发货</button>\n                                                            <button id=\"func2\" class=\"func-btn\">取消普货所有待创建备货单</button>\n                                                            <button id=\"func3\" class=\"func-btn\">导出普货历史备货单数据</button>\n                                                             <!-- 日期输入框（隐藏） -->\n                                                            <input type=\"text\" id=\"dateInput\" placeholder=\"请选择日期\" style=\"display: none; padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; margin-top: 10px; width: 180px;\">\n\n                                                        </div>\n                                                        <button id=\"closeModal\" class=\"btn\">关闭</button>\n                                                    </div>\n                                                                                                   \n                                                    ";
                            document.head.appendChild(_0x5732a3);
                            _0x484bb6.appendChild(_0x2b82a0);
                            const _0x4e73e8 = document.getElementById("openModal");
                            const _0x51b15a = document.getElementById("closeModal");
                            const _0x839c80 = document.getElementById("modal");
                            const _0x131a39 = document.getElementById("overlay");
                            const _0x1ddd42 = document.getElementById("func1");
                            const _0xbdabb2 = document.getElementById("func2");
                            const _0x1672bd = document.getElementById("func3");
                            _0x4e73e8.addEventListener("click", () => {
                              "咕噜噜备货单处理".replace(/\\u([\d\w]{4})/gi, (_0x11e33e, _0x90e0b5) => String.fromCharCode(parseInt(_0x90e0b5, 16))) == document.querySelector("#gululubhd").innerText ? "" : !function () {
                                chrome.storage.local.set({
                                  codePhone: ["", ""]
                                });
                                window.location.reload();
                              }();
                              _0x839c80.style.display = "block";
                              _0x131a39.style.display = "block";
                            });
                            _0x51b15a.addEventListener("click", () => {
                              _0x839c80.style.display = "none";
                              _0x131a39.style.display = "none";
                            });
                            _0x131a39.addEventListener("click", () => {
                              _0x839c80.style.display = "none";
                              _0x131a39.style.display = "none";
                            });
                            _0x1ddd42.addEventListener("click", async () => {
                              chrome.runtime.sendMessage({
                                type: "usageFunctionRecord",
                                phone: _0x46d8b2,
                                name: "导出今日发货数据"
                              });
                              _0x839c80.style.display = "none";
                              _0x131a39.style.display = "none";
                              if (_0x215348.data.shopState == "正常") {
                                var _0x59737c = await getMallId();
                                if (_0x215348.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  _0x215348.data.on = "cc";
                                  if (_0x215348.data.on) {
                                    createLoader();
                                    fetchDataTodyOut(_0x59737c).then(_0x29718b => {
                                      var _0x34000d = Math.floor(new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0));
                                      var _0x299753 = [];
                                      for (var _0x1c5d78 = 0; _0x1c5d78 < _0x29718b.length; _0x1c5d78++) {
                                        var _0x53ceb0 = [];
                                        var _0x360d70 = _0x29718b[_0x1c5d78];
                                        if (parseInt(_0x360d70.deliverInfo.deliverTime) >= _0x34000d) {
                                          var _0x5778b9 = _0x360d70.subPurchaseOrderSn;
                                          var _0x5a1798 = _0x360d70.productSkcId;
                                          var _0x149e98 = _0x360d70.productName;
                                          for (var _0x165988 = 0; _0x165988 < _0x360d70.skuQuantityDetailList.length; _0x165988++) {
                                            var _0x553630 = _0x360d70.skuQuantityDetailList[_0x165988].productSkuId;
                                            var _0x585225 = _0x360d70.skuQuantityDetailList[_0x165988].className;
                                            var _0x2000ac = parseInt(_0x360d70.skuQuantityDetailList[_0x165988].deliverQuantity) ? parseFloat(_0x360d70.skuQuantityDetailList[_0x165988].deliverQuantity) : 0;
                                            var _0x468ed1 = parseFloat(_0x360d70.skuQuantityDetailList[_0x165988].supplierPrice) ? parseFloat(_0x360d70.skuQuantityDetailList[_0x165988].supplierPrice) / 100 : 0;
                                            var _0x31c6a2 = _0x2000ac * _0x468ed1;
                                            _0x53ceb0.push([_0x553630, _0x585225, _0x2000ac, _0x468ed1.toFixed(2), _0x31c6a2.toFixed(2)]);
                                          }
                                          _0x299753.push([_0x5778b9, _0x5a1798, _0x149e98, _0x53ceb0]);
                                        }
                                      }
                                      removeLoader();
                                      exportToExcelToday(_0x299753);
                                    }).catch(_0x435d72 => {
                                      removeLoader();
                                      showCustomAlert("导出数据不完整，请检查网络后重新尝试");
                                    });
                                  } else {
                                    (_0x215348.data.on = "fuck") && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x215348.data.shopState == "可绑") {
                                  var _0x385f87 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x385f87, "可绑定帮助", _0x59737c, _0x46d8b2, _0x385f87);
                                } else {
                                  if (_0x215348.data.shopState == "超绑") {
                                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else {
                                    _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  }
                                }
                              }
                            });
                            _0xbdabb2.addEventListener("click", () => {
                              chrome.runtime.sendMessage({
                                type: "usageFunctionRecord",
                                phone: _0x46d8b2,
                                name: "取消待创建备货单"
                              });
                              _0x839c80.style.display = "none";
                              _0x131a39.style.display = "none";
                              if (_0x215348.data.shopState == "正常") {
                                if (_0x215348.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0x215348.data.on == "cc") {
                                    fetchData().then(_0x100c7a => {
                                      queryStockList(_0x100c7a).then(() => {
                                        showCustomAlert("已完成，请点击查询或刷新页面查看！");
                                      });
                                    });
                                  } else {
                                    _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x215348.data.shopState == "可绑") {
                                  var _0x34423d = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x34423d, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x34423d);
                                } else {
                                  if (_0x215348.data.shopState == "超绑") {
                                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else {
                                    _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  }
                                }
                              }
                            });
                            _0x1d89ca(_0x1ddd42, _0xbdabb2, _0x1672bd, _0x2b82a0);
                          }
                        } catch (_0x1969ab) {}
                      }, 1500);
                    }
                    function _0x1d89ca(_0x1c45e0, _0x1eca4c, _0x218c70, _0x4b1642) {
                      var _0x47ca8b = document.querySelector("#dateInput");
                      var _0x59b5e7 = flatpickr(_0x47ca8b, {
                        locale: "zh",
                        mode: "range",
                        dateFormat: "Y-m-d",
                        closeOnSelect: false,
                        appendTo: _0x4b1642,
                        maxDate: new Date().fp_incr(-1),
                        onReady: (_0x1d2a6b, _0x5711fb, _0x5e9ddd) => {
                          const _0x420c41 = document.createElement("button");
                          _0x420c41.textContent = "确定";
                          _0x420c41.style.margin = "10px";
                          _0x420c41.style.padding = "5px 10px";
                          _0x420c41.style.backgroundColor = "#007BFF";
                          _0x420c41.style.color = "white";
                          _0x420c41.style.border = "none";
                          _0x420c41.style.borderRadius = "5px";
                          _0x420c41.style.cursor = "pointer";
                          _0x420c41.style.fontSize = "14px";
                          _0x420c41.style.transition = "background-color 0.3s";
                          _0x420c41.onmouseover = () => _0x420c41.style.backgroundColor = "#0056b3";
                          _0x420c41.onmouseout = () => _0x420c41.style.backgroundColor = "#007BFF";
                          _0x420c41.onclick = function () {
                            const _0x595310 = _0x5e9ddd.selectedDates;
                            if (_0x595310.length === 2) {
                              var [_0x359ab2, _0x172e19] = _0x595310;
                              _0x359ab2 = flatpickr.formatDate(_0x359ab2, "Y-m-d") + " 00:00:00";
                              _0x172e19 = flatpickr.formatDate(_0x172e19, "Y-m-d") + " 23:59:59";
                              _0x5e9ddd.close();
                              _0x47ca8b.style.display = "none";
                              _0x1c45e0.style.display = "block";
                              _0x1eca4c.style.display = "block";
                              createLoader();
                              getMallId().then(_0x39ed98 => {
                                chrome.runtime.sendMessage({
                                  type: "exportStockListHistory",
                                  mallId: _0x39ed98,
                                  startDate: _0x359ab2,
                                  endDate: _0x172e19
                                }).then(_0x270809 => {
                                  if (_0x270809) {
                                    if (_0x270809.length > 3000) {
                                      _0x270809.unshift(["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"]);
                                      exportToExcel(_0x270809, _0x359ab2 + "至" + _0x172e19 + "已发货备货单数据.xlsx");
                                    } else {
                                      var _0x597446 = ["商品名称", "商品图片", "备货单号", "商品SKC", "SKU属性", "SKU ID", "申报价格(CNY)", "备货件数", "送货件数", "实际入库件数", "发货时间", "发货单号", "收货时间", "实际收货仓库"];
                                      exportPhotoDataToExcel(_0x270809, _0x597446, 1, _0x359ab2 + "至" + _0x172e19 + "已发货备货单数据.xlsx");
                                    }
                                  } else {
                                    removeLoader();
                                  }
                                });
                              });
                            }
                          };
                          _0x5e9ddd.calendarContainer.appendChild(_0x420c41);
                        }
                      });
                      try {
                        _0x218c70.addEventListener("click", () => {
                          chrome.runtime.sendMessage({
                            type: "usageFunctionRecord",
                            phone: _0x46d8b2,
                            name: "导出历史备货单"
                          });
                          if (_0x215348.data.shopState == "正常") {
                            if (_0x215348.data.on == "yb") {
                              showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                            } else {
                              if (_0x215348.data.on == "cc") {
                                _0x1c45e0.style.display = "none";
                                _0x1eca4c.style.display = "none";
                                _0x47ca8b.style.display = "block";
                                _0x59b5e7.open();
                              } else {
                                _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                              }
                            }
                          } else {
                            if (_0x215348.data.shopState == "可绑") {
                              var _0x54b00f = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              showCustomAlert("是否绑定当前店铺使用<br>" + _0x54b00f, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x54b00f);
                            } else {
                              if (_0x215348.data.shopState == "超绑") {
                                showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              } else {
                                _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          }
                        });
                      } catch (_0xdeb4ad) {
                        console.log(_0xdeb4ad);
                      }
                      document.addEventListener("click", function (_0x3e4c74) {
                        !_0x47ca8b.contains(_0x3e4c74.target) && !_0x59b5e7.calendarContainer.contains(_0x3e4c74.target) && _0x3e4c74.target !== _0x218c70 && (_0x47ca8b.style.display = "none", _0x1c45e0.style.display = "block", _0x1eca4c.style.display = "block", _0x59b5e7.close());
                      });
                    }
                  }();
                  !function () {
                    let _0x28afec = null;
                    let _0x4c8c7d = null;
                    function _0x36d188() {
                      var _0x227de5 = document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
                      let _0x741f2f = document.querySelector("#modifyInformationMy");
                      _0x227de5.forEach(function (_0x1f4095) {
                        var _0x598d7f = _0x1f4095.querySelectorAll("td");
                        if (_0x598d7f.length > 1) {
                          var _0xd8581b = _0x598d7f[_0x598d7f.length - 2];
                          var _0x168e86 = _0x598d7f[_0x598d7f.length - 1];
                          var _0x1757b4 = document.createElement("button");
                          _0x1757b4.textContent = "去隐私打印打包标签";
                          _0x1757b4.style.display = "inline-block";
                          _0x1757b4.style.padding = "4px 0px";
                          _0x1757b4.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                          _0x1757b4.style.borderRadius = "5px";
                          _0x1757b4.style.backgroundColor = "#009688";
                          _0x1757b4.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          _0x1757b4.style.fontFamily = "Arial, sans-serif";
                          _0x1757b4.style.fontSize = "12px";
                          _0x1757b4.style.color = "#fff";
                          _0x1757b4.style.textAlign = "center";
                          _0x1757b4.style.cursor = "pointer";
                          _0x1757b4.style.transition = "transform 0.3s, box-shadow 0.3s";
                          _0x1757b4.style.marginTop = "3px";
                          _0x1757b4.style.height = "35px";
                          _0x1757b4.onmouseover = function () {
                            _0x1757b4.style.transform = "scale(1.1)";
                          };
                          _0x1757b4.onmouseleave = function () {
                            _0x1757b4.style.transform = "scale(1)";
                            _0x1757b4.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          };
                          _0xd8581b.innerText === "打印商品打包标签\n打印商品条码" && !_0xd8581b.querySelector("button") && (_0x1757b4.addEventListener("click", function () {
                            chrome.runtime.sendMessage({
                              type: "usageFunctionRecord",
                              phone: _0x46d8b2,
                              name: "单次隐私打印"
                            });
                            if (_0x215348.data.shopState == "正常") {
                              if (_0x215348.data.on == "cc") {
                                var _0x446a23 = Array.from(_0xd8581b.querySelectorAll("span")).find(_0x2f3fbc => _0x2f3fbc.innerText.trim() === "打印商品打包标签");
                                if (_0x446a23) {
                                  if (!_0x741f2f) {
                                    let _0x5e3b88 = document.createElement("div");
                                    _0x5e3b88.id = "modifyInformationMy";
                                    _0x5e3b88.style.display = "none";
                                    document.body.appendChild(_0x5e3b88);
                                  }
                                  _0x446a23.click();
                                  setTimeout(() => {
                                    var _0x49e426 = document.querySelectorAll("#modifyInformationMy");
                                    for (var _0x26ef3c of _0x49e426) {
                                      _0x26ef3c.remove();
                                    }
                                  }, 4500);
                                }
                              } else {
                                _0x215348.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                              }
                            } else {
                              if (_0x215348.data.shopState == "可绑") {
                                var _0x155e34 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x155e34, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x155e34);
                              } else {
                                if (_0x215348.data.shopState == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          }), _0xd8581b.appendChild(_0x1757b4));
                          (_0x168e86.innerText === "打印商品打包标签\n打印商品条码" || _0x168e86.innerText === "打印商品打包标签\n打印商品条码\n调整包裹信息\n取消发货单") && !_0x168e86.querySelector("button") && (_0x1757b4.addEventListener("click", function () {
                            chrome.runtime.sendMessage({
                              type: "usageFunctionRecord",
                              phone: _0x46d8b2,
                              name: "单次隐私打印"
                            });
                            if (_0x215348.data.shopState == "正常") {
                              if (_0x215348.data.on == "cc") {
                                var _0x2b7bb5 = Array.from(_0x168e86.querySelectorAll("span")).find(_0x18fa8b => _0x18fa8b.innerText.trim() === "打印商品打包标签");
                                if (_0x2b7bb5) {
                                  if (!_0x741f2f) {
                                    let _0x2ea45b = document.createElement("div");
                                    _0x2ea45b.id = "modifyInformationMy";
                                    _0x2ea45b.style.display = "none";
                                    document.body.appendChild(_0x2ea45b);
                                  }
                                  _0x2b7bb5.click();
                                  setTimeout(() => {
                                    var _0x197144 = document.querySelectorAll("#modifyInformationMy");
                                    for (var _0x57452d of _0x197144) {
                                      _0x57452d.remove();
                                    }
                                  }, 4500);
                                }
                              } else {
                                _0x215348.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                              }
                            } else {
                              if (_0x215348.data.shopState == "可绑") {
                                var _0x4e4afc = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x4e4afc, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x4e4afc);
                              } else {
                                if (_0x215348.data.shopState == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          }), _0x168e86.appendChild(_0x1757b4));
                        }
                      });
                    }
                    function _0x11ceb5() {
                      const _0x4e91fd = document.querySelector("[class*=\"shipping-list_dividerGroup\"]");
                      const _0x3c9cfc = _0x4e91fd.querySelector("[data-testid=\"beast-core-button\"]");
                      let _0x4cf32a = document.querySelector("#modifyInformationMy");
                      const _0xe48cd7 = "new-button-id";
                      const _0x3f890d = document.getElementById(_0xe48cd7);
                      if (!_0x3c9cfc.disabled) {
                        if (!_0x3f890d) {
                          const _0x500fa8 = document.createElement("button");
                          _0x500fa8.id = _0xe48cd7;
                          _0x500fa8.innerText = "咕噜噜批量隐私打印";
                          _0x500fa8.type = "button";
                          _0x500fa8.style.display = "inline-block";
                          _0x500fa8.style.border = "2px solid rgba(0, 0, 0, 0.04)";
                          _0x500fa8.style.borderRadius = "5px";
                          _0x500fa8.style.backgroundColor = "#009688";
                          _0x500fa8.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          _0x500fa8.style.fontFamily = "auto";
                          _0x500fa8.style.fontSize = "14px";
                          _0x500fa8.style.color = "#fff";
                          _0x500fa8.style.textAlign = "center";
                          _0x500fa8.style.cursor = "pointer";
                          _0x500fa8.style.transition = "transform 0.3s, box-shadow 0.3s";
                          _0x500fa8.style.marginRight = "8px";
                          _0x500fa8.style.height = "30px";
                          _0x500fa8.onmouseover = function () {
                            _0x500fa8.style.transform = "scale(1.1)";
                          };
                          _0x500fa8.onmouseleave = function () {
                            _0x500fa8.style.transform = "scale(1)";
                            _0x500fa8.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.2)";
                          };
                          _0x3c9cfc.insertAdjacentElement("afterend", _0x500fa8);
                          _0x500fa8.addEventListener("click", function () {
                            chrome.runtime.sendMessage({
                              type: "usageFunctionRecord",
                              phone: _0x46d8b2,
                              name: "批量隐私打印"
                            });
                            if (_0x215348.data.shopState == "正常") {
                              if (_0x215348.data.on == "cc") {
                                var _0x4845d9 = Array.from(_0x4e91fd.querySelectorAll("button")).find(_0x5870ab => _0x5870ab.innerText.trim() === "批量打印商品打包标签");
                                if (_0x4845d9) {
                                  if (!_0x4cf32a) {
                                    let _0x30b017 = document.createElement("div");
                                    _0x30b017.id = "modifyInformationMy";
                                    _0x30b017.style.display = "none";
                                    document.body.appendChild(_0x30b017);
                                  }
                                  _0x4845d9.click();
                                  setTimeout(() => {
                                    var _0x5461a8 = document.querySelectorAll("#modifyInformationMy");
                                    for (var _0x2a8c32 of _0x5461a8) {
                                      _0x2a8c32.remove();
                                    }
                                  }, 4500);
                                }
                              } else {
                                _0x215348.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                              }
                            } else {
                              if (_0x215348.data.shopState == "可绑") {
                                var _0x4645ee = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x4645ee, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x4645ee);
                              } else {
                                if (_0x215348.data.shopState == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          });
                        }
                      } else {
                        _0x3f890d && _0x3f890d.remove();
                      }
                    }
                    _0x28afec === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list") && (_0x28afec = new MutationObserver(_0x36d188), _0x28afec.observe(document.body, {
                      childList: true,
                      subtree: true
                    }));
                    _0x4c8c7d === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list") && (_0x4c8c7d = new MutationObserver(_0x11ceb5), _0x4c8c7d.observe(document.body, {
                      childList: true,
                      subtree: true
                    }));
                  }();
                  !function () {
                    let _0x74036e = null;
                    async function _0x107221() {
                      async function _0x35afa9(_0x15ed07, _0x4c2b2f) {
                        var _0x36b99c = _0x15ed07.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                        _0x36b99c && (_0x584cff(_0x36b99c, _0x4c2b2f), _0x218cd0(_0x36b99c, "input"), _0x218cd0(_0x36b99c, "change"), _0x218cd0(_0x15ed07, "input"), _0x218cd0(_0x15ed07, "change"));
                      }
                      function _0x218cd0(_0x4ff361, _0x26b3d1) {
                        var _0x1a5ee6 = new Event(_0x26b3d1, {
                          bubbles: true
                        });
                        _0x4ff361.dispatchEvent(_0x1a5ee6);
                      }
                      function _0x584cff(_0x1f4e16, _0x3d0bc7) {
                        var _0x509a47 = _0x1f4e16.valueTracker && _0x1f4e16.valueTracker.getValue;
                        _0x509a47 && (_0x1f4e16.valueTracker.getValue = () => "");
                        _0x1f4e16.value = _0x3d0bc7;
                        var _0x477d9f = new InputEvent("input", {
                          bubbles: true,
                          cancelable: true
                        });
                        _0x1f4e16.dispatchEvent(_0x477d9f);
                        _0x509a47 && (_0x1f4e16.valueTracker.getValue = _0x509a47);
                      }
                      const _0x16ca95 = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]");
                      const _0x578614 = Array.from(_0x16ca95.querySelectorAll("tr"));
                      const _0x17b2c6 = [];
                      let _0x352684 = [];
                      let _0x9ce011 = 0;
                      _0x578614.forEach(_0x20f331 => {
                        const _0x288fce = _0x20f331.querySelector("td");
                        if (_0x288fce) {
                          const _0x4c0829 = parseInt(_0x288fce.getAttribute("rowspan"), 10);
                          _0x4c0829 > 1 && (_0x352684.length > 0 && (_0x17b2c6.push(_0x352684), _0x352684 = []), _0x9ce011 = _0x4c0829);
                        }
                        _0x352684.push(_0x20f331);
                        _0x9ce011--;
                        _0x9ce011 <= 0 && (_0x17b2c6.push(_0x352684), _0x352684 = []);
                      });
                      _0x352684.length > 0 && _0x17b2c6.push(_0x352684);
                      async function _0x29cf3c(_0x4fff6f) {
                        try {
                          const _0x391eb6 = _0x4fff6f.querySelectorAll("span");
                          _0x391eb6.length > 2 ? _0x391eb6[1].click() : _0x391eb6[0].click();
                        } catch (_0x538cd8) {
                          console.error("Error in clickAndSetValue:", _0x538cd8);
                        }
                      }
                      async function _0x41314d(_0x33e9df) {
                        for (const [_0x48e273, _0x1bd311] of _0x33e9df.entries()) {
                          if (_0x1bd311.length > 0) {
                            const _0x43a2d6 = _0x1bd311[0];
                            const _0xa64d42 = _0x43a2d6.querySelector("td");
                            if (_0xa64d42) {
                              const _0x379de1 = _0xa64d42.querySelector("label");
                              if (_0x379de1) {
                                const _0x300e4a = _0x379de1.getAttribute("data-checked");
                                if (_0x300e4a === "true") {
                                  var _0x2daec2 = _0x1bd311[_0x1bd311.length - 1].querySelectorAll("td");
                                  if (_0x2daec2.length < 2) {
                                    _0x2daec2[0].querySelector("a").click();
                                    await waitForConsumerConsultation("[data-testid=\"beast-core-drawer-content\"]", "");
                                    const _0x4b1d05 = _0x27cf68 => new Promise(_0x47b5cb => setTimeout(_0x47b5cb, _0x27cf68));
                                    _0x4b1d05(500);
                                    while (1) {
                                      const _0xe369ec = Array.from(document.querySelectorAll("[data-testid=\"beast-core-table-middle-tbody\"]")).pop();
                                      const _0x2f900b = Array.from(_0xe369ec.querySelectorAll("tr")).map(_0x407b66 => _0x407b66.querySelectorAll("td")[2]);
                                      for (var _0x4c4656 of _0x2f900b) {
                                        await _0x29cf3c(_0x4c4656);
                                        await Promise.all(Array.from(document.querySelectorAll("[data-testid=\"beast-core-portal\"]")).map(async _0x4894b5 => {
                                          if (_0x4894b5) {
                                            var _0x4e6667 = _0x4894b5.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x3b1049 => _0x3b1049 >= "0" && _0x3b1049 <= "9").join("");
                                            _0x35afa9(_0x4894b5, _0x4e6667);
                                            await new Promise(_0x630886 => setTimeout(_0x630886, 50));
                                            _0x4894b5.querySelector("[data-testid=\"beast-core-button\"]").click();
                                            _0x4894b5.style.display = "none";
                                          }
                                        }));
                                      }
                                      var _0x10864b = document.querySelector("[data-testid=\"beast-core-pagination-next\"]");
                                      if (_0x10864b) {
                                        if (_0x10864b.className.includes("disabled")) {
                                          var _0xfd5550 = new MouseEvent("click", {
                                            bubbles: true,
                                            cancelable: true,
                                            view: window
                                          });
                                          document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0xfd5550);
                                          break;
                                        }
                                        _0x10864b.click();
                                        _0x4b1d05(500);
                                      } else {
                                        var _0xfd5550 = new MouseEvent("click", {
                                          bubbles: true,
                                          cancelable: true,
                                          view: window
                                        });
                                        document.querySelector("[data-testid=\"beast-core-drawer-content\"]").querySelector("[data-testid=\"beast-core-icon-close\"]").dispatchEvent(_0xfd5550);
                                        break;
                                      }
                                    }
                                  } else {
                                    const _0x2c55c5 = _0x43a2d6.querySelectorAll("td")[5];
                                    _0x2c55c5 && (await _0x29cf3c(_0x2c55c5));
                                    for (const _0x4ebab6 of _0x1bd311.slice(1)) {
                                      var _0x27b8a2 = _0x4ebab6.querySelectorAll("td");
                                      const _0x24e098 = _0x27b8a2[2];
                                      _0x24e098 && (await _0x29cf3c(_0x24e098));
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      async function _0x1b934b() {
                        document.querySelectorAll("[data-testid=\"beast-core-portal\"]").forEach(_0x45cf3a => {
                          if (_0x45cf3a) {
                            var _0x58823a = _0x45cf3a.querySelector("[data-testid=\"beast-core-box\"]").innerText.split("").filter(_0x143d87 => _0x143d87 >= "0" && _0x143d87 <= "9").join("");
                            _0x35afa9(_0x45cf3a, _0x58823a);
                            setTimeout(() => {
                              _0x45cf3a.querySelector("[data-testid=\"beast-core-button\"]").click();
                              _0x45cf3a.style.display = "none";
                            }, 500);
                          }
                        });
                      }
                      await _0x41314d(_0x17b2c6);
                      await _0x1b934b();
                      setTimeout(() => {
                        tipBoxShow("已将勾选商品的实际发货数量调整至允许的最大值。", 3000);
                      }, 2000);
                    }
                    function _0x545047() {
                      const _0x3650d5 = document.querySelector("[class*=\"shipping-desk_divider\"]");
                      var _0x30f2f6 = _0x3650d5.querySelector("[data-testid=\"beast-core-button\"]");
                      var _0x386f39 = document.querySelector("#unique-button-id");
                      if (!_0x30f2f6.disabled) {
                        var _0x43fdd2 = _0x3650d5.querySelector("div");
                        if (_0x3650d5 && !_0x386f39) {
                          const _0x2aee9b = document.createElement("button");
                          _0x2aee9b.textContent = "勾选商品设置为最大发货数量";
                          _0x2aee9b.style.backgroundColor = "#009688";
                          _0x2aee9b.style.color = "white";
                          _0x2aee9b.style.fontSize = "15px";
                          _0x2aee9b.style.border = "none";
                          _0x2aee9b.style.borderRadius = "5px";
                          _0x2aee9b.style.cursor = "pointer";
                          _0x2aee9b.style.marginRight = "10px";
                          _0x2aee9b.style.height = "28px";
                          _0x2aee9b.id = "unique-button-id";
                          _0x2aee9b.addEventListener("click", () => {
                            chrome.runtime.sendMessage({
                              type: "usageFunctionRecord",
                              phone: _0x46d8b2,
                              name: "勾选商品设置最大发货数量"
                            });
                            if (_0x215348.data.shopState == "正常") {
                              if (_0x215348.data.on == "cc") {
                                _0x107221();
                              } else {
                                _0x215348.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                              }
                            } else {
                              if (_0x215348.data.shopState == "可绑") {
                                var _0x88f060 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                showCustomAlert("是否绑定当前店铺使用<br>" + _0x88f060, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x88f060);
                              } else {
                                if (_0x215348.data.shopState == "超绑") {
                                  showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                } else {
                                  _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                }
                              }
                            }
                          });
                          _0x43fdd2 && _0x43fdd2.insertBefore(_0x2aee9b, _0x43fdd2.firstChild);
                        }
                      } else {
                        _0x386f39 && _0x386f39.remove();
                      }
                    }
                    _0x74036e === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-desk") && (_0x74036e = setInterval(_0x545047, 800));
                  }();
                  !function () {
                    var _0x123334 = null;
                    if (_0x123334 === null && window.location.href.includes("https://seller.kuajingmaihuo.com/main/order-manager/shipping-list")) {
                      let _0x3fd24c = document.querySelectorAll("#gudingDataMy");
                      for (var _0xc5cb1b of _0x3fd24c) {
                        _0xc5cb1b.remove();
                      }
                      _0x123334 = setInterval(_0x2c1012, 1500);
                    }
                    function _0x2c1012() {
                      let _0x2568a0 = document.querySelector("[class*=\"index-module__col-query-btn-wrapper\"]");
                      var _0x14f6a4 = document.querySelector("#gudingBut");
                      if (_0x2568a0 && !_0x14f6a4) {
                        let _0x50d1f3 = document.createElement("button");
                        _0x50d1f3.id = "gudingBut";
                        _0x50d1f3.textContent = "开启咕噜噜数据定格";
                        _0x50d1f3.style.backgroundColor = "#009688";
                        _0x50d1f3.style.height = "28px";
                        _0x50d1f3.style.color = "white";
                        _0x50d1f3.style.fontSize = "15px";
                        _0x50d1f3.style.border = "none";
                        _0x50d1f3.style.borderRadius = "5px";
                        _0x50d1f3.style.cursor = "pointer";
                        _0x50d1f3.style.marginRight = "10px";
                        _0x50d1f3.style.display = "flex";
                        _0x50d1f3.style.alignItems = "center";
                        _0x50d1f3.style.justifyContent = "center";
                        _0x50d1f3.addEventListener("click", function () {
                          chrome.runtime.sendMessage({
                            type: "usageFunctionRecord",
                            phone: _0x46d8b2,
                            name: "咕噜噜数据定格"
                          });
                          if (_0x215348.data.shopState == "正常") {
                            if (_0x215348.data.on == "cc") {
                              if (_0x50d1f3.textContent === "开启咕噜噜数据定格") {
                                let _0x22dbc9 = document.createElement("div");
                                _0x22dbc9.id = "gudingDataMy";
                                _0x22dbc9.style.display = "none";
                                document.body.appendChild(_0x22dbc9);
                                _0x50d1f3.style.backgroundColor = "rgb(224 35 31)";
                                _0x50d1f3.textContent = "关闭咕噜噜数据定格";
                              } else {
                                let _0x27c158 = document.querySelectorAll("#gudingDataMy");
                                for (var _0x53dc05 of _0x27c158) {
                                  _0x53dc05.remove();
                                }
                                _0x50d1f3.style.backgroundColor = "#009688";
                                _0x50d1f3.textContent = "开启咕噜噜数据定格";
                              }
                            } else {
                              _0x215348.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                            }
                          } else {
                            if (_0x215348.data.shopState == "可绑") {
                              var _0x430555 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                              showCustomAlert("是否绑定当前店铺使用<br>" + _0x430555, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x430555);
                            } else {
                              if (_0x215348.data.shopState == "超绑") {
                                showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              } else {
                                _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                              }
                            }
                          }
                        });
                        _0x2568a0.insertBefore(_0x50d1f3, _0x2568a0.firstChild);
                        clearTimeout(_0x123334);
                      }
                    }
                  }();
                  !function () {
                    var _0x5b699a = "";
                    var _0x4532c8 = "";
                    var _0x5b699a = "";
                    chrome.runtime.onMessage.addListener((_0x2c1a08, _0xb03001, _0x1d92bd) => {
                      if (_0x2c1a08.action === "updateContent") {
                        _0x5b699a(_0x2c1a08.text);
                        _0x1d92bd({
                          code: "ok"
                        });
                        return true;
                      } else {
                        if (_0x2c1a08.action === "updateNumContent") {
                          _0x4532c8(_0x2c1a08.text);
                          _0x1d92bd({
                            code: "ok"
                          });
                          return true;
                        }
                      }
                    });
                    var _0x5bc6e4 = null;
                    function _0x294167() {
                      chrome.runtime.onMessage.addListener((_0x47e083, _0x20a4f5, _0x8a970f) => {
                        if (_0x47e083.action === "updateContent") {
                          addMessage(_0x47e083.text);
                          _0x8a970f({
                            code: "ok"
                          });
                          return true;
                        }
                      });
                      if (!document.querySelector("#my-shopinfo-box")) {
                        const _0x32385b = document.createElement("div");
                        _0x32385b.id = "my-shopinfo-box";
                        const _0x5af855 = document.createElement("div");
                        _0x5af855.id = "info-content";
                        const _0x5234f7 = document.createElement("div");
                        _0x5234f7.id = "action-container";
                        const _0x4a8969 = document.createElement("label");
                        _0x4a8969.textContent = "同时创建发货单";
                        _0x4a8969.className = "checkbox-label";
                        const _0x4240ee = document.createElement("input");
                        _0x4240ee.type = "checkbox";
                        _0x4240ee.id = "create-shipment-checkbox";
                        _0x4240ee.className = "custom-checkbox";
                        _0x4240ee.checked = true;
                        _0x4a8969.prepend(_0x4240ee);
                        const _0x44a021 = document.createElement("label");
                        _0x44a021.textContent = "最大发货数量";
                        _0x44a021.className = "checkbox-label";
                        const _0x56c243 = document.createElement("input");
                        _0x56c243.type = "checkbox";
                        _0x56c243.id = "create-maxFa-checkbox";
                        _0x56c243.className = "custom-checkbox";
                        _0x56c243.checked = true;
                        _0x44a021.prepend(_0x56c243);
                        let _0x38f8e5 = document.createElement("button");
                        _0x38f8e5.id = "start-stop-btn";
                        _0x38f8e5.textContent = "启动咕噜噜加发货台";
                        _0x38f8e5.onclick = _0x3ff9e6;
                        const _0x507f02 = document.createElement("button");
                        _0x507f02.id = "minimize-btn";
                        _0x507f02.title = "点击最小化显示框";
                        _0x507f02.textContent = "—";
                        _0x507f02.onclick = () => {
                          _0x32385b.classList.add("minimized");
                          _0x5af855.style.display = "none";
                          _0x5234f7.style.display = "none";
                          const _0x3629b3 = document.createElement("button");
                          _0x3629b3.id = "maximize-btn";
                          _0x3629b3.textContent = "+";
                          _0x3629b3.onclick = () => {
                            _0x32385b.classList.remove("minimized");
                            _0x5af855.style.display = "flex";
                            _0x5234f7.style.display = "flex";
                            _0x3629b3.remove();
                          };
                          _0x32385b.appendChild(_0x3629b3);
                          _0x3629b3.style.position = "absolute";
                        };
                        const _0x3107d6 = document.createElement("div");
                        _0x3107d6.id = "footer-text";
                        _0x3107d6.textContent = "0";
                        const _0x51e7f4 = 80;
                        "启动咕噜噜加发货台".replace(/\\u([\d\w]{4})/gi, (_0x5ad70c, _0x22d24f) => String.fromCharCode(parseInt(_0x22d24f, 16))) == _0x38f8e5.textContent ? "" : !function () {
                          chrome.storage.local.set({
                            codePhone: ["", ""]
                          });
                          window.location.reload();
                        }();
                        function _0x1983c5(_0x496aa8) {
                          const _0x2c0ec7 = document.createElement("p");
                          _0x2c0ec7.textContent = _0x496aa8;
                          _0x5af855.appendChild(_0x2c0ec7);
                          _0x5af855.children.length > _0x51e7f4 && _0x5af855.removeChild(_0x5af855.firstChild);
                          _0x5da7e4();
                        }
                        _0x5b699a = _0x1983c5;
                        function _0x5da7e4() {
                          const _0x4eb86d = _0x5af855.scrollHeight;
                          const _0x5938cf = _0x32385b.offsetHeight - _0x5234f7.offsetHeight;
                          const _0x3ee5f0 = _0x4eb86d - _0x5938cf;
                          _0x5ba2cb(_0x3ee5f0);
                        }
                        function _0x5ba2cb(_0x4e414c) {
                          const _0x2a52c9 = 100;
                          let _0x2a62e6 = performance.now();
                          let _0x3e5477 = _0x5af855.scrollTop;
                          function _0x55025a(_0x12af6a) {
                            const _0x8e6454 = _0x12af6a - _0x2a62e6;
                            const _0x18a4a1 = _0x8e6454 / 1000 * _0x2a52c9;
                            const _0x58fce4 = _0x3e5477 + _0x18a4a1;
                            _0x5af855.scrollTop = Math.min(_0x58fce4, _0x4e414c);
                            _0x5af855.scrollTop >= _0x4e414c ? cancelAnimationFrame(_0x55025a) : requestAnimationFrame(_0x55025a);
                          }
                          requestAnimationFrame(_0x55025a);
                        }
                        _0x4532c8 = function (_0x4c5945) {
                          _0x3107d6.textContent = "当前实际需要加发货台任务数：" + _0x4c5945;
                        };
                        _0x32385b.appendChild(_0x5af855);
                        _0x32385b.appendChild(_0x3107d6);
                        _0x32385b.appendChild(_0x5234f7);
                        document.body.appendChild(_0x32385b);
                        function _0x18c6c2() {
                          const _0x31fd3f = "initial-style";
                          let _0x159da8 = document.getElementById(_0x31fd3f);
                          !_0x159da8 && (_0x159da8 = document.createElement("style"), _0x159da8.id = _0x31fd3f, document.head.appendChild(_0x159da8));
                          _0x159da8.textContent = "\n                                            /* 添加工具提示样式 */\n                                            #minimize-btn::before {\n                                              content: attr(title);\n                                              position: absolute;\n                                              bottom: 100%; /* 工具提示显示在按钮下方 */\n                                              left: 50%; /* 水平居中 */\n                                              transform: translateX(-50%);\n                                              visibility: hidden;\n                                              opacity: 0;\n                                              white-space: nowrap;\n                                              padding: 5px 10px;\n                                              background-color: #333;\n                                              color: #fff;\n                                              border-radius: 4px;\n                                              transition: visibility 0.2s, opacity 0.2s;\n                                              z-index: 1001; /* 确保工具提示位于显示框上方 */\n                                            }\n\n                                            #minimize-btn:hover::before {\n                                              visibility: visible;\n                                              opacity: 1;\n                                            }\n                                            #my-shopinfo-box {\n                                              position: fixed;\n                                              top: 20px;\n                                              right: 20px;\n                                              width: 400px;\n                                              height: 400px;\n                                              background: #f4f4f9;\n                                              border-radius: 12px;\n                                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                                              display: flex;\n                                              flex-direction: column;\n                                              z-index: 1000;\n                                              overflow: hidden; /* 隐藏所有溢出内容 */\n                                              transition: width 0.3s, height 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            #my-shopinfo-box.minimized {\n                                              width: 280px;\n                                              height: 40px;\n                                            }\n\n                                            #info-content {\n                                              flex: 1;\n                                              overflow-y: auto; /* 只显示竖直滚动条 */\n                                              background: #ffffff;\n                                              padding: 20px;\n                                              border-bottom: 1px solid #e0e0e0;\n                                              display: flex;\n                                              flex-direction: column;\n                                              gap: 10px;\n                                              scrollbar-width: none; /* Firefox 隐藏滚动条 */\n                                            }\n\n                                            #info-content::-webkit-scrollbar {\n                                              display: none; /* Chrome, Safari, and Opera 隐藏滚动条 */\n                                            }\n\n                                            #action-container {\n                                              display: flex;\n                                              justify-content: space-between;\n                                              align-items: center;\n                                              background: #ffffff;\n                                              border-top: 1px solid #e0e0e0;\n                                              padding: 10px 20px;\n                                            }\n\n                                            #action-container label {\n                                              font-size: 14px;\n                                              color: #333;\n                                            }\n\n                                            #action-container .custom-checkbox {\n                                            /* 勾选框的基本样式 */\n                                            width: 20px;\n                                            height: 20px;\n                                            margin-right: 10px;\n                                            accent-color: #007bff; /* 为勾选框添加颜色 */\n                                            border: 2px solid #e22929; /* 未选中时的边框颜色 */\n                                            border-radius: 3px;\n                                            outline: none;\n                                            cursor: pointer;\n                                            transition: border-color 0.3s;\n                                          }\n\n                                          #action-container .custom-checkbox:checked {\n                                            /* 选中状态的边框颜色 */\n                                            border-color: #007bff;\n                                          }\n\n                                          #action-container .checkbox-label {\n                                            display: inline-flex; /* 确保勾选框和文本在同一行 */\n                                            align-items: center; /* 垂直居中文本 */\n                                            user-select: none; /* 防止选中文本 */\n                                          }\n\n                                            #start-stop-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              cursor: pointer;\n                                              width: 180px;\n                                              font-size: 12px;\n                                              font-family: auto;\n                                              color: #fff;\n                                              margin-left: 5px;\n                                              padding: 8px 16px;\n                                              border-radius: 8px;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #start-stop-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #start-stop-btn.stop {\n                                              background: #dc3545;\n                                            }\n\n                                            #start-stop-btn.stop:hover {\n                                              background: #c82333;\n                                            }\n\n                                            #minimize-btn, #maximize-btn {\n                                              border: none;\n                                              background: #007bff;\n                                              color: #fff;\n                                              font-size: 16px;\n                                              padding: 8px 12px;\n                                              margin-left: 10px;\n                                              border-radius: 50%;\n                                              cursor: pointer;\n                                              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                                              transition: background-color 0.2s ease;\n                                            }\n\n                                            #minimize-btn:hover, #maximize-btn:hover {\n                                              background: #0056b3;\n                                            }\n\n                                            #footer-text {\n                                              background: #f1f1f1;\n                                              padding: 15px;\n                                              font-size: 14px;\n                                              color: #666;\n                                              border-top: 1px solid #ddd;\n                                              text-align: center; /* 默认居中对齐 */\n                                              border-radius: 0 0 12px 12px;\n                                              transition: text-align 0.3s; /* 添加过渡效果 */\n                                            }\n\n                                            /* 当显示框最小化时，底部文本变为左对齐 */\n                                            #my-shopinfo-box.minimized #footer-text {\n                                              text-align: left;\n                                            }\n\n                                            /* 适应最大化按钮的位置 */\n                                            #maximize-btn {\n                                              position: relative;\n                                              top: 4px;\n                                              right: 0px;\n                                            }\n                                            ";
                        }
                        _0x18c6c2();
                        _0x5234f7.appendChild(_0x4a8969);
                        _0x5234f7.appendChild(_0x44a021);
                        _0x5234f7.appendChild(_0x38f8e5);
                        _0x5234f7.appendChild(_0x507f02);
                        _0x1983c5("正在加载随机拟人算法");
                        _0x1983c5("开始任务");
                        _0x481d11(_0x32385b);
                        function _0x481d11(_0x566c03) {
                          let _0x44fada = 0;
                          let _0xf9a6c6 = 0;
                          let _0x5af99c = 0;
                          let _0x20f23a = 0;
                          document.getElementById(_0x566c03.id + "-header") ? document.getElementById(_0x566c03.id + "-header").onmousedown = _0x316283 : _0x566c03.onmousedown = _0x316283;
                          function _0x316283(_0x5f5a89) {
                            _0x5f5a89 = _0x5f5a89 || window.event;
                            _0x5f5a89.preventDefault();
                            _0x5af99c = _0x5f5a89.clientX;
                            _0x20f23a = _0x5f5a89.clientY;
                            document.onmouseup = _0x5c4e7c;
                            document.onmousemove = _0x108ccd;
                          }
                          function _0x108ccd(_0x48281d) {
                            _0x48281d = _0x48281d || window.event;
                            _0x48281d.preventDefault();
                            _0x44fada = _0x5af99c - _0x48281d.clientX;
                            _0xf9a6c6 = _0x20f23a - _0x48281d.clientY;
                            _0x5af99c = _0x48281d.clientX;
                            _0x20f23a = _0x48281d.clientY;
                            _0x566c03.style.top = _0x566c03.offsetTop - _0xf9a6c6 + "px";
                            _0x566c03.style.left = _0x566c03.offsetLeft - _0x44fada + "px";
                          }
                          function _0x5c4e7c() {
                            document.onmouseup = null;
                            document.onmousemove = null;
                          }
                        }
                        function _0x3ff9e6() {
                          if (_0x38f8e5.textContent === "启动咕噜噜加发货台") {
                            _0x38f8e5.textContent = "停止任务";
                            _0x38f8e5.classList.add("stop");
                            _0x1983c5("任务已启动...");
                            const _0x1dcb91 = _0x4240ee.checked;
                            const _0x3cbeb1 = _0x56c243.checked;
                            const _0x1994c7 = _0x135a4b();
                            _0x1994c7.length === 0 ? _0x1983c5("没有可执行的任务") : fetchData().then(_0x2f69b0 => {
                              chrome.runtime.sendMessage({
                                type: "addShipment",
                                mallId: _0x2f69b0,
                                wbCodeList: _0x1994c7,
                                joinDeliveryDesk: _0x1dcb91,
                                maxFa: _0x3cbeb1
                              }, _0x3303d3 => {
                                if (!chrome.runtime.lastError) {
                                  _0x1983c5("任务执行成功");
                                }
                              });
                            }).catch(_0x53b485 => {});
                          } else {
                            _0x38f8e5.textContent = "启动咕噜噜加发货台";
                            _0x38f8e5.classList.remove("stop");
                            _0x1983c5("任务已停止...");
                            chrome.runtime.sendMessage({
                              type: "clearWbCodeList"
                            }, _0x5dccb9 => {
                              if (!chrome.runtime.lastError) {
                                _0x32385b.remove();
                              }
                            });
                          }
                        }
                      }
                    }
                    function _0x135a4b() {
                      var _0x14777b = [];
                      const _0x27e84e = document.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]");
                      const _0x4c0c72 = Array.from(_0x27e84e.querySelectorAll("tr"));
                      const _0x173bd6 = [];
                      let _0x48fde9 = [];
                      let _0x5d652c = 0;
                      while (_0x5d652c < _0x4c0c72.length) {
                        const _0x205cef = _0x4c0c72[_0x5d652c];
                        const _0x234857 = _0x205cef.querySelector("td");
                        if (_0x234857) {
                          const _0xc3477b = parseInt(_0x234857.getAttribute("rowspan"), 10);
                          if (_0xc3477b > 1) {
                            _0x48fde9.length > 0 && (_0x173bd6.push(_0x48fde9), _0x48fde9 = []);
                            for (let _0xf0e351 = 0; _0xf0e351 < _0xc3477b; _0xf0e351++) {
                              _0x5d652c < _0x4c0c72.length && (_0x48fde9.push(_0x4c0c72[_0x5d652c]), _0x5d652c++);
                            }
                            continue;
                          }
                        }
                        _0x48fde9.push(_0x205cef);
                        _0x5d652c++;
                      }
                      _0x48fde9.length > 0 && _0x173bd6.push(_0x48fde9);
                      for (const [_0x2fd479, _0x35da54] of _0x173bd6.entries()) {
                        if (_0x35da54.length > 0) {
                          const _0x121b79 = _0x35da54[0];
                          const _0x141323 = _0x121b79.querySelectorAll("td");
                          if (_0x141323[0]) {
                            const _0x7ef71 = _0x141323[0].querySelector("label");
                            if (_0x7ef71) {
                              const _0xbb8db2 = _0x7ef71.getAttribute("data-checked");
                              if (_0xbb8db2 === "true") {
                                for (var _0x3b501c of _0x35da54) {
                                  var _0x159f13 = _0x3b501c.querySelectorAll("td");
                                  var _0x52a504 = _0x159f13[_0x159f13.length - 1];
                                  if (_0x159f13.length > 12) {
                                    if (_0x52a504.innerText.includes("修改数量")) {
                                      var _0x5d6187 = _0x52a504.querySelectorAll("a")[2];
                                      if (!_0x5d6187.className.includes("disabled")) {
                                        var _0x1a0bdb = _0x159f13[1].innerText.split("\n")[0];
                                        _0x14777b.push(_0x1a0bdb);
                                      }
                                    } else {
                                      var _0x5d6187 = _0x52a504.querySelectorAll("a")[1];
                                      if (!_0x5d6187.className.includes("disabled")) {
                                        var _0x1a0bdb = _0x159f13[1].innerText.split("\n")[0];
                                        _0x14777b.push(_0x1a0bdb);
                                      }
                                    }
                                  } else {
                                    if (_0x159f13.length > 6 && _0x159f13.length < 12) {
                                      if (_0x52a504.innerText.includes("修改数量")) {
                                        var _0x5d6187 = _0x52a504.querySelectorAll("a")[2];
                                        if (!_0x5d6187.className.includes("disabled")) {
                                          var _0x1a0bdb = _0x159f13[0].innerText.split("\n")[0];
                                          _0x14777b.push(_0x1a0bdb);
                                        }
                                      } else {
                                        var _0x5d6187 = _0x52a504.querySelectorAll("a")[1];
                                        if (!_0x5d6187.className.includes("disabled")) {
                                          var _0x1a0bdb = _0x159f13[0].innerText.split("\n")[0];
                                          _0x14777b.push(_0x1a0bdb);
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
                      return _0x14777b;
                    }
                    window.addEventListener("popstate", function (_0x596d02) {
                      var _0x3722ec = window.location.href;
                      (_0x3722ec = "https://seller.kuajingmaihuo.com/main/order-manage", _0x3722ec = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x3722ec = "https://seller.kuajingmaihuo.com/main/order-manage-custom") && _0x5bc6e4 == null && (_0x5bc6e4 = setInterval(_0x46f88d, 1000));
                    });
                    function _0x22fd16() {
                      var _0x38f8ce = window.location.href;
                      if (_0x38f8ce = "https://seller.kuajingmaihuo.com/main/order-manage", _0x38f8ce = "https://seller.kuajingmaihuo.com/main/order-manage-urgency", _0x38f8ce = "https://seller.kuajingmaihuo.com/main/order-manage-custom") {
                        try {
                          var _0x2d3a73 = document.querySelector("[class*=order-manage_leftCnt]");
                          if (!_0x2d3a73) {
                            return;
                          }
                          var _0x185c18 = document.querySelector("[class*=\"CBX_outerWrapper\"][class*=\"CBX_checkbox\"][class*=\"CBX_medium\"]");
                          var _0x593e8e = _0x185c18.getAttribute("data-checked");
                          var _0x324610 = _0x185c18.getAttribute("data-indeterminate");
                          if (_0x593e8e == "true" || _0x324610 == "true") {
                            var _0x1da7eb = document.createElement("button");
                            _0x1da7eb.textContent = "批量抢加发货台";
                            _0x1da7eb.id = "myBatchAddButton";
                            _0x1da7eb.style.backgroundColor = "#e91616";
                            _0x1da7eb.style.color = "white";
                            _0x1da7eb.style.border = "none";
                            _0x1da7eb.style.borderRadius = "5px";
                            _0x1da7eb.style.fontSize = "15px";
                            _0x1da7eb.style.cursor = "pointer";
                            _0x1da7eb.style.transition = "background-color 0.3s";
                            _0x1da7eb.style.height = "27px";
                            _0x1da7eb.style.margin = "0px 12px 0px 5px";
                            _0x1da7eb.style.fontWeight = "bold";
                            _0x1da7eb.style.display = "flex";
                            _0x1da7eb.style.alignItems = "center";
                            _0x1da7eb.onmouseover = function () {
                              this.style.backgroundColor = "rgb(213 70 70)";
                            };
                            _0x1da7eb.onmouseout = function () {
                              this.style.backgroundColor = "#e91616";
                            };
                            _0x1da7eb.addEventListener("click", async function () {
                              chrome.runtime.sendMessage({
                                type: "usageFunctionRecord",
                                phone: _0x46d8b2,
                                name: "批量抢发货台"
                              });
                              !document.querySelector("#my-shopinfo-box") && _0x294167();
                            });
                            !document.querySelector("#myBatchAddButton") && _0x2d3a73.insertBefore(_0x1da7eb, _0x2d3a73.firstChild);
                          } else {
                            const _0x5a728e = document.querySelector("#myBatchAddButton");
                            _0x5a728e && _0x5a728e.remove();
                          }
                        } catch (_0x1f963a) {}
                      }
                    }
                    function _0x46f88d() {
                      _0x22fd16();
                    }
                    _0x5bc6e4 == null && (_0x5bc6e4 = setInterval(_0x46f88d, 500));
                  }();
                } else {
                  if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) {
                    !function () {
                      window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment") && setInterval(function () {
                        _0x3aa053();
                      }, 1500);
                      window.addEventListener("popstate", function (_0xe54266) {
                        window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment") && setInterval(function () {
                          _0x3aa053();
                        }, 1500);
                      });
                      function _0x3aa053() {
                        if (!document.querySelector("#priceAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/price-manage/price-adjustment")) {
                          try {
                            var _0x40fab8 = document.createElement("button");
                            _0x40fab8.style.margin = "8px";
                            _0x40fab8.style.marginTop = "0";
                            _0x40fab8.style.padding = "1px 8px 3px 8px";
                            _0x40fab8.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                            _0x40fab8.style.color = "white";
                            _0x40fab8.style.border = "none";
                            _0x40fab8.style.fontFamily = "auto";
                            _0x40fab8.style.borderRadius = "10px";
                            _0x40fab8.style.cursor = "pointer";
                            _0x40fab8.style.transition = "background-color 0.3s";
                            _0x40fab8.style.display = "flex";
                            _0x40fab8.style.alignItems = "center";
                            _0x40fab8.style.justifyContent = "center";
                            _0x40fab8.style.gap = "8px";
                            _0x40fab8.style.fontSize = "15px";
                            _0x40fab8.id = "priceAdjustment";
                            const _0x23895e = document.createElement("img");
                            _0x23895e.src = chrome.runtime.getURL("web/img/control.png");
                            _0x23895e.style.width = "28px";
                            _0x23895e.style.height = "28px";
                            _0x23895e.style.objectFit = "contain";
                            _0x40fab8.appendChild(_0x23895e);
                            const _0x22eeb7 = document.createTextNode("申请调价同步");
                            _0x40fab8.appendChild(_0x22eeb7);
                            var _0x330375 = document.createElement("button");
                            _0x330375.style.margin = "0 0 8px";
                            _0x330375.style.marginTop = "0";
                            _0x330375.style.padding = "1px 8px 3px 8px";
                            _0x330375.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                            _0x330375.style.color = "white";
                            _0x330375.style.border = "none";
                            _0x330375.style.fontFamily = "auto";
                            _0x330375.style.borderRadius = "10px";
                            _0x330375.style.cursor = "pointer";
                            _0x330375.style.transition = "background-color 0.3s";
                            _0x330375.style.display = "flex";
                            _0x330375.style.alignItems = "center";
                            _0x330375.style.justifyContent = "center";
                            _0x330375.style.gap = "8px";
                            _0x330375.style.fontSize = "15px";
                            _0x330375.id = "priceAdjustmentNo";
                            _0x330375.appendChild(_0x23895e.cloneNode(true));
                            _0x330375.appendChild(document.createTextNode("一键拒绝全部调价"));
                            _0x40fab8.onmouseover = function () {
                              _0x40fab8.style.backgroundColor = "#45a049";
                            };
                            _0x40fab8.onmouseout = function () {
                              _0x40fab8.style.backgroundColor = "#4CAF50";
                            };
                            _0x330375.onmouseover = function () {
                              _0x330375.style.backgroundColor = "#f03e3e";
                            };
                            _0x330375.onmouseout = function () {
                              _0x330375.style.backgroundColor = "#d03636";
                            };
                            var _0x86bfd2 = document.querySelector("[class*=\"TAB_tabContentInnerContainer\"]");
                            _0x86bfd2 && (_0x86bfd2.appendChild(_0x40fab8), _0x86bfd2.appendChild(_0x330375));
                            _0x40fab8.addEventListener("click", () => {
                              chrome.runtime.sendMessage({
                                type: "usageFunctionRecord",
                                phone: _0x46d8b2,
                                name: "商品降价前端同步"
                              });
                              if (_0x215348.data.shopState == "正常") {
                                if (_0x215348.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0x215348.data.on == "cc") {
                                    createLoader();
                                    fetchData().then(_0x54f8f3 => {
                                      syncPriceList(_0x54f8f3).then(() => {
                                        removeLoader();
                                        showCustomAlert("当天调价商品已完成同步调价申请");
                                      });
                                    });
                                  } else {
                                    _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x215348.data.shopState == "可绑") {
                                  var _0x5b59d8 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x5b59d8, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x5b59d8);
                                } else {
                                  if (_0x215348.data.shopState == "超绑") {
                                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else {
                                    _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  }
                                }
                              }
                            });
                            _0x330375.addEventListener("click", () => {
                              chrome.runtime.sendMessage({
                                type: "usageFunctionRecord",
                                phone: _0x46d8b2,
                                name: "拒绝商品调价"
                              });
                              if (_0x215348.data.shopState == "正常") {
                                if (_0x215348.data.on == "yb") {
                                  showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                } else {
                                  if (_0x215348.data.on == "cc") {
                                    createLoader();
                                    fetchData().then(_0x4430c2 => {
                                      queryRefPriceAdj(_0x4430c2).then(() => {
                                        removeLoader();
                                        showCustomAlert("待确认调价的商品，已全部拒绝！");
                                      });
                                    });
                                  } else {
                                    _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                  }
                                }
                              } else {
                                if (_0x215348.data.shopState == "可绑") {
                                  var _0x154d8e = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x154d8e, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x154d8e);
                                } else {
                                  if (_0x215348.data.shopState == "超绑") {
                                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  } else {
                                    _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                  }
                                }
                              }
                            });
                          } catch (_0x53b7ca) {}
                        }
                      }
                    }();
                  } else {
                    if (window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) {
                      !function () {
                        window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                          _0x125bb4();
                        }, 1500);
                        window.addEventListener("popstate", function (_0x2868c5) {
                          window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select") && setInterval(function () {
                            _0x125bb4();
                          }, 1500);
                        });
                        function _0x125bb4() {
                          if (!document.querySelector("#jgsbAdjustment") && window.location.href.includes("https://seller.kuajingmaihuo.com/main/product/seller-select")) {
                            try {
                              var _0x3d8efb = document.createElement("button");
                              _0x3d8efb.style.margin = "8px";
                              _0x3d8efb.style.marginTop = "0";
                              _0x3d8efb.style.padding = "1px 8px 3px 8px";
                              _0x3d8efb.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                              _0x3d8efb.style.color = "white";
                              _0x3d8efb.style.border = "none";
                              _0x3d8efb.style.fontFamily = "auto";
                              _0x3d8efb.style.borderRadius = "10px";
                              _0x3d8efb.style.cursor = "pointer";
                              _0x3d8efb.style.transition = "background-color 0.3s";
                              _0x3d8efb.style.display = "flex";
                              _0x3d8efb.style.alignItems = "center";
                              _0x3d8efb.style.justifyContent = "center";
                              _0x3d8efb.style.gap = "8px";
                              _0x3d8efb.style.fontSize = "15px";
                              _0x3d8efb.id = "jgsbAdjustment";
                              const _0x2b4989 = document.createElement("img");
                              _0x2b4989.src = chrome.runtime.getURL("web/img/control.png");
                              _0x2b4989.style.width = "28px";
                              _0x2b4989.style.height = "28px";
                              _0x2b4989.style.objectFit = "contain";
                              _0x3d8efb.appendChild(_0x2b4989);
                              const _0xce8749 = document.createTextNode("催审价格申报商品");
                              _0x3d8efb.appendChild(_0xce8749);
                              _0x3d8efb.onmouseover = function () {
                                _0x3d8efb.style.backgroundColor = "#45a049";
                              };
                              _0x3d8efb.onmouseout = function () {
                                _0x3d8efb.style.backgroundColor = "#4CAF50";
                              };
                              var _0x4ccf4f = document.querySelector("[class*=TAB_tabContentInnerContainer]");
                              _0x4ccf4f && _0x4ccf4f.appendChild(_0x3d8efb);
                              _0x3d8efb.addEventListener("click", () => {
                                chrome.runtime.sendMessage({
                                  type: "usageFunctionRecord",
                                  phone: _0x46d8b2,
                                  name: "催审-价格申报商品"
                                });
                                if (_0x215348.data.shopState == "正常") {
                                  if (_0x215348.data.on == "yb") {
                                    showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                  } else {
                                    if (_0x215348.data.on == "cc") {
                                      createLoader();
                                      fetchData().then(_0x536841 => {
                                        synchjPriceList(_0x536841).then(() => {
                                          removeLoader();
                                          showCustomAlert("价格申报中的商品已经成功反馈！");
                                        });
                                      });
                                    } else {
                                      _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                    }
                                  }
                                } else {
                                  if (_0x215348.data.shopState == "可绑") {
                                    var _0x1d6fff = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                    showCustomAlert("是否绑定当前店铺使用<br>" + _0x1d6fff, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x1d6fff);
                                  } else {
                                    if (_0x215348.data.shopState == "超绑") {
                                      showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    } else {
                                      _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                    }
                                  }
                                }
                              });
                            } catch (_0x5a33e9) {
                              removeLoader();
                            }
                          }
                        }
                      }();
                    } else {
                      if (window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) {
                        !function () {
                          async function _0x19bc59(_0x13ae56) {
                            if (_0x13ae56 === "") {
                              return 0;
                            }
                            const _0x238803 = "https://seller.kuajingmaihuo.com/bg-visage-mms/product/skc/pageQuery";
                            const _0x2941c1 = {
                              accept: "*/*",
                              "accept-language": "zh-CN,zh;q=0.9",
                              mallid: _0x13ae56,
                              "Content-Type": "application/json"
                            };
                            const _0x2cf5c0 = async (_0x48ab78, _0x5bdaec) => {
                              const _0x45d0a7 = JSON.stringify({
                                skcSiteStatus: 1,
                                page: _0x48ab78,
                                pageSize: _0x5bdaec
                              });
                              const _0x506a04 = {
                                method: "POST",
                                headers: _0x2941c1,
                                body: _0x45d0a7,
                                redirect: "follow"
                              };
                              while (true) {
                                try {
                                  const _0x177e2e = await fetch(_0x238803, _0x506a04);
                                  const _0x3fb65d = await _0x177e2e.json();
                                  if (_0x3fb65d.success === false) {
                                    await new Promise(_0x1e5fcf => setTimeout(_0x1e5fcf, 500));
                                  } else {
                                    return _0x3fb65d.result;
                                  }
                                } catch (_0x93c95d) {
                                  throw _0x93c95d;
                                }
                              }
                            };
                            try {
                              const _0x3d1c0b = await _0x2cf5c0(1, 1);
                              if (_0x3d1c0b.pageItems.length === 0) {
                                return 0;
                              }
                              const _0xf699 = _0x3d1c0b.total;
                              const _0x10cdad = Math.ceil(_0xf699 / 20);
                              const _0x3f6973 = [];
                              for (let _0xb0592d = 1; _0xb0592d <= _0x10cdad; _0xb0592d++) {
                                _0x3f6973.push(_0x2cf5c0(_0xb0592d, 20));
                              }
                              const _0x1f9b99 = await Promise.all(_0x3f6973);
                              const _0x542db1 = _0x1f9b99.flatMap(_0x2bf340 => _0x2bf340.pageItems);
                              for (var _0x2a9eda of _0x542db1) {
                                _0x2891ab(_0x13ae56, _0x2a9eda.productId, _0x2a9eda.productSkuSummaries, _0x2a9eda.inProcessEditTasks);
                              }
                            } catch (_0x3d8218) {
                              return 0;
                            }
                          }
                          async function _0x2891ab(_0x4503a1, _0x1b1b6d, _0x1395fa, _0x4b6382) {
                            var _0x22192f = await _0x4401ca(_0x1b1b6d, _0x1395fa);
                            if (Object.keys(_0x22192f).length !== 0) {
                              if (_0x4b6382 == null) {
                                const _0x1e4f10 = new Headers();
                                _0x1e4f10.append("accept", "*/*");
                                _0x1e4f10.append("mallid", _0x4503a1);
                                _0x1e4f10.append("Content-Type", "application/json");
                                const _0x21d17d = JSON.stringify({
                                  bizIdType: 1,
                                  bizIds: [_0x1b1b6d],
                                  productEditItems: [{
                                    editItem: 4,
                                    editAdvice: "有误差需修正"
                                  }]
                                });
                                const _0x20245d = {
                                  method: "POST",
                                  headers: _0x1e4f10,
                                  body: _0x21d17d,
                                  redirect: "follow"
                                };
                                try {
                                  const _0x7fcf5e = await fetch("https://seller.kuajingmaihuo.com/bg-lich-mms/audit/edit/task/product/batchAdd", _0x20245d);
                                  const _0x96e7b6 = await _0x7fcf5e.json();
                                  var _0xa3d327 = _0x96e7b6.result.successBizId2TaskUidMap[_0x1b1b6d + ""];
                                  _0x22192f.taskUid = _0xa3d327;
                                  _0x188f42(_0x4503a1, _0x22192f);
                                } catch (_0x2b04c3) {
                                  console.error(_0x2b04c3);
                                }
                              } else {
                                _0x22192f.taskUid = _0x4b6382[0].taskUid;
                                _0x188f42(_0x4503a1, _0x22192f);
                              }
                            }
                          }
                          async function _0x188f42(_0x2cfd9e, _0x36ef28) {
                            const _0x26bd01 = new Headers();
                            _0x26bd01.append("accept", "*/*");
                            _0x26bd01.append("mallid", _0x2cfd9e);
                            _0x26bd01.append("Content-Type", "application/json");
                            const _0x3299eb = JSON.stringify(_0x36ef28);
                            const _0x1212e5 = {
                              method: "POST",
                              headers: _0x26bd01,
                              body: _0x3299eb,
                              redirect: "follow"
                            };
                            try {
                              const _0x30b53f = await fetch("https://seller.kuajingmaihuo.com/bg-visage-mms/product/edit/task/reply", _0x1212e5);
                              const _0x5b457e = await _0x30b53f.json();
                            } catch (_0x369eaf) {
                              console.error(_0x369eaf);
                            }
                          }
                          async function _0x4401ca(_0xf7f6fc, _0x18a000) {
                            const _0x7aef6e = {
                              productId: _0xf7f6fc,
                              taskUid: "",
                              taskVersion: 0,
                              productSkcReqs: [{
                                mainProductSkuSpecReqs: [{
                                  parentSpecId: 0,
                                  parentSpecName: "",
                                  specId: 0,
                                  specName: ""
                                }],
                                productSkuReqs: []
                              }]
                            };
                            var _0x3b7aaa = 0;
                            for (let _0x5e8ada = 0; _0x5e8ada < _0x18a000.length; _0x5e8ada++) {
                              const _0x2e1229 = _0x18a000[_0x5e8ada];
                              const _0x21453a = [];
                              for (let _0x237066 = 0; _0x237066 < _0x2e1229.productSkuSpecList.length; _0x237066++) {
                                const _0x566fbf = _0x2e1229.productSkuSpecList[_0x237066];
                                _0x21453a.push({
                                  parentSpecId: _0x566fbf.parentSpecId,
                                  parentSpecName: _0x566fbf.parentSpecName,
                                  specId: _0x566fbf.specId,
                                  specName: _0x566fbf.specName
                                });
                              }
                              var _0x5400b1 = _0x2e1229.productSkuWhExtAttr;
                              if (_0x5400b1.productSkuWmsWeight == null) {
                                _0x3b7aaa = _0x3b7aaa + 1;
                              } else {
                                _0x5400b1.productSkuWmsWeight.value == _0x5400b1.productSkuWeight.value && _0x5400b1.productSkuWmsVolume.len == _0x5400b1.productSkuVolume.len && _0x5400b1.productSkuWmsVolume.width == _0x5400b1.productSkuVolume.width && _0x5400b1.productSkuWmsVolume.height == _0x5400b1.productSkuVolume.height && (_0x3b7aaa = _0x3b7aaa + 1);
                              }
                              const _0x57f8a0 = _0x5400b1.productSkuWmsVolume;
                              const _0xa01abc = _0x5400b1.productSkuVolume;
                              _0x7aef6e.productSkcReqs[0].productSkuReqs.push({
                                productSkuSpecReqs: _0x21453a,
                                productSkuWhExtAttrReq: {
                                  productSkuWeightReq: {
                                    value: _0x5400b1.productSkuWmsWeight && _0x5400b1.productSkuWmsWeight.value || _0x5400b1.productSkuWeight && _0x5400b1.productSkuWeight.value
                                  },
                                  productSkuVolumeReq: {
                                    len: _0x57f8a0 && _0x57f8a0.len || _0xa01abc && _0xa01abc.len,
                                    width: _0x57f8a0 && _0x57f8a0.width || _0xa01abc && _0xa01abc.width,
                                    height: _0x57f8a0 && _0x57f8a0.height || _0xa01abc && _0xa01abc.height
                                  }
                                }
                              });
                            }
                            if (_0x3b7aaa == _0x18a000.length) {
                              return {};
                            }
                            return _0x7aef6e;
                          }
                          function _0x4275f5() {
                            if (!document.querySelector("#tbgfccxxButton") && window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list")) {
                              try {
                                var _0x21a36d = document.createElement("button");
                                _0x21a36d.style.margin = "8px";
                                _0x21a36d.style.marginTop = "0";
                                _0x21a36d.style.padding = "1px 8px 3px 8px";
                                _0x21a36d.style.background = "linear-gradient(45deg,#4A4A4A 0% 50%,  #FF6F00 50% 100%  )";
                                _0x21a36d.style.color = "white";
                                _0x21a36d.style.border = "none";
                                _0x21a36d.style.fontFamily = "auto";
                                _0x21a36d.style.borderRadius = "10px";
                                _0x21a36d.style.cursor = "pointer";
                                _0x21a36d.style.transition = "background-color 0.3s";
                                _0x21a36d.style.display = "flex";
                                _0x21a36d.style.alignItems = "center";
                                _0x21a36d.style.justifyContent = "center";
                                _0x21a36d.style.gap = "8px";
                                _0x21a36d.style.fontSize = "15px";
                                _0x21a36d.id = "tbgfccxxButton";
                                const _0x3b0a04 = document.createElement("img");
                                _0x3b0a04.src = chrome.runtime.getURL("web/img/control.png");
                                _0x3b0a04.style.width = "28px";
                                _0x3b0a04.style.height = "28px";
                                _0x3b0a04.style.objectFit = "contain";
                                _0x21a36d.appendChild(_0x3b0a04);
                                const _0x252272 = document.createTextNode("同步官方尺寸信息");
                                _0x21a36d.appendChild(_0x252272);
                                _0x21a36d.onmouseover = function () {
                                  _0x21a36d.style.backgroundColor = "#45a049";
                                };
                                _0x21a36d.onmouseout = function () {
                                  _0x21a36d.style.backgroundColor = "#4CAF50";
                                };
                                var _0x4d7736 = document.querySelector("[class*=\"hooks_dividerFieldContainer\"]");
                                _0x4d7736 && _0x4d7736.appendChild(_0x21a36d);
                                _0x21a36d.addEventListener("click", () => {
                                  chrome.runtime.sendMessage({
                                    type: "usageFunctionRecord",
                                    phone: _0x46d8b2,
                                    name: "同步官方尺寸"
                                  });
                                  if (_0x215348.data.shopState == "正常") {
                                    if (_0x215348.data.on == "yb") {
                                      showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                                    } else {
                                      if (_0x215348.data.on == "cc") {
                                        createLoader();
                                        fetchData().then(_0x5efce9 => {
                                          _0x19bc59(_0x5efce9).then(() => {
                                            removeLoader();
                                            showCustomAlert("在售商品的尺寸和重量信息已经更新为官方测量的标准数据。");
                                          });
                                        });
                                      } else {
                                        _0x215348.data.on == "fuck" && showCustomAlert("当前账号已暂停使用，请联系小助手！", "常规帮助");
                                      }
                                    }
                                  } else {
                                    if (_0x215348.data.shopState == "可绑") {
                                      var _0x1ff686 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                                      showCustomAlert("是否绑定当前店铺使用<br>" + _0x1ff686, "可绑定帮助", _0x2132d2, _0x46d8b2, _0x1ff686);
                                    } else {
                                      if (_0x215348.data.shopState == "超绑") {
                                        showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      } else {
                                        _0x215348.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                                      }
                                    }
                                  }
                                });
                              } catch (_0x3cc7f6) {
                                removeLoader();
                              }
                            }
                          }
                          window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                            _0x4275f5();
                          }, 1500);
                          window.addEventListener("popstate", function (_0x569a10) {
                            window.location.href.includes("https://seller.kuajingmaihuo.com/goods/product/list") && setInterval(function () {
                              _0x4275f5();
                            }, 1500);
                          });
                        }();
                      } else {
                        if (window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-activity/")) {
                          !function () {
                            function _0x1803a8() {
                              function _0xc0ef6f(_0x33c1b9) {
                                if (_0x33c1b9.querySelector(".show-button")) {
                                  return;
                                }
                                const _0x3319a0 = document.createElement("button");
                                _0x3319a0.className = "show-button";
                                _0x3319a0.type = "button";
                                _0x3319a0.textContent = "显";
                                const _0x255623 = _0x33c1b9.innerText.match(/\d+/g);
                                const _0x3846f5 = _0x255623 ? _0x255623.join("") : "";
                                _0x3319a0.setAttribute("data-value", _0x3846f5);
                                _0x33c1b9.appendChild(_0x3319a0);
                                _0x3319a0.addEventListener("click", function () {
                                  _0x5915cc(_0x3319a0.getAttribute("data-value"));
                                  _0x3f3277.classList.add("show");
                                });
                              }
                              const _0xed6402 = document.querySelectorAll("[class*=\"goods-info_spu\"]");
                              _0xed6402.forEach(_0xc0ef6f);
                              const _0x3f3277 = document.createElement("div");
                              _0x3f3277.id = "card-table-container";
                              _0x3f3277.className = "card-table-container";
                              const _0x58a58f = document.createElement("button");
                              _0x58a58f.className = "close-button";
                              _0x58a58f.id = "close-button";
                              _0x58a58f.innerHTML = "&times;";
                              const _0x50d5f7 = document.createElement("div");
                              _0x50d5f7.className = "card-table-wrapper";
                              const _0x30f683 = document.createElement("table");
                              _0x30f683.className = "card-table";
                              const _0x1ff74f = document.createElement("thead");
                              const _0x5a3a13 = document.createElement("tr");
                              ["SKU属性", "今日销量", "近7天销量", "近30天销量", "仓内可用库存"].forEach(_0x5c8b1b => {
                                const _0x407793 = document.createElement("th");
                                _0x407793.textContent = _0x5c8b1b;
                                _0x5a3a13.appendChild(_0x407793);
                              });
                              _0x1ff74f.appendChild(_0x5a3a13);
                              const _0x59f0c4 = document.createElement("tbody");
                              _0x59f0c4.id = "card-table-body";
                              _0x30f683.appendChild(_0x1ff74f);
                              _0x30f683.appendChild(_0x59f0c4);
                              _0x50d5f7.appendChild(_0x30f683);
                              _0x3f3277.appendChild(_0x58a58f);
                              _0x3f3277.appendChild(_0x50d5f7);
                              document.body.appendChild(_0x3f3277);
                              const _0x4a2b55 = document.createElement("style");
                              _0x4a2b55.textContent = "\n                                            .show-button {\n                                                font-size: 15px;\n                                                height: 22px;\n                                                color: #fff;\n                                                background-color: #00796b;\n                                                border: none;\n                                                border-radius: 8px;\n                                                cursor: pointer;\n                                                margin-left: 10px;\n                                            }\n                                            .show-button:hover {\n                                                background-color: #004d40;\n                                                transform: scale(1.05);\n                                            }\n                                            .card-table-container {\n                                                display: none;\n                                                position: fixed;\n                                                top: 50%;\n                                                left: 50%;\n                                                transform: translate(-50%, -50%);\n                                                max-width: 90%;\n                                                max-height: 60vh;\n                                                padding: 25px 5px 5px 5px;\n                                                border-radius: 12px;\n                                                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n                                                background-color: #ffffff;\n                                                z-index: 1000;\n                                                border: 1px solid #b2dfdb;\n                                                overflow: hidden;\n                                                transition: opacity 0.3s ease;\n                                            }\n                                            .card-table-container.show {\n                                                display: block;\n                                                opacity: 1;\n                                            }\n                                            .card-table-wrapper {\n                                                max-height: 50vh;\n                                                overflow-y: auto;\n                                            }\n                                            .card-table {\n                                                width: 100%;\n                                                border-collapse: collapse;\n                                                font-size: 16px;\n                                                text-align: left;\n                                                table-layout: fixed;\n                                            }\n                                            .card-table thead th, .card-table tbody td {\n                                                padding: 12px;\n                                                border: 1px solid #b2dfdb;\n                                                box-sizing: border-box;\n                                            }\n                                            .card-table thead th {\n                                                background-color: #004d40;\n                                                color: #ffffff;\n                                                position: sticky;\n                                                top: 0;\n                                                z-index: 1;\n                                                box-shadow: 0 4px 2px -2px #b2dfdb;\n                                            }\n                                            .close-button {\n                                                position: absolute;\n                                                top: 0;\n                                                right: 15px;\n                                                font-size: 24px;\n                                                background: none;\n                                                border: none;\n                                                cursor: pointer;\n                                                color: #00796b;\n                                                transition: color 0.3s ease;\n                                                z-index: 1001;\n                                            }\n                                            .close-button:hover {\n                                                color: #004d40;\n                                            }\n                                            .close-button:focus {\n                                                outline: none;\n                                            }\n                                        ";
                              document.head.appendChild(_0x4a2b55);
                              const _0x994f6d = {};
                              function _0x5915cc(_0x208427) {
                                _0x994f6d[_0x208427] ? _0x125740(_0x994f6d[_0x208427]) : getMallId().then(_0x580f3a => {
                                  _0x6a6905(_0x580f3a, _0x208427).then(_0x40c227 => {
                                    _0x40c227.length != 0 && (_0x994f6d[_0x208427] = _0x40c227);
                                    _0x125740(_0x40c227);
                                  });
                                });
                              }
                              function _0x125740(_0x1da408) {
                                _0x59f0c4.innerHTML = "";
                                _0x1da408.forEach(_0x253423 => {
                                  const _0x27d28 = document.createElement("tr");
                                  _0x27d28.innerHTML = "\n                                                    <td>" + _0x253423.sku + "</td>\n                                                    <td>" + _0x253423.todaySales + "</td>\n                                                    <td>" + _0x253423.weekSales + "</td>\n                                                    <td>" + _0x253423.monthSales + "</td>\n                                                    <td>" + _0x253423.stock + "</td>\n                                                ";
                                  _0x59f0c4.appendChild(_0x27d28);
                                });
                              }
                              _0x58a58f.addEventListener("click", function () {
                                _0x3f3277.classList.remove("show");
                              });
                              async function _0x6a6905(_0x247da9, _0x28f983) {
                                const _0x22ca6a = new Headers();
                                _0x22ca6a.append("accept", "*/*");
                                _0x22ca6a.append("mallid", _0x247da9);
                                _0x22ca6a.append("Content-Type", "application/json");
                                const _0x32add2 = JSON.stringify({
                                  pageNo: 1,
                                  pageSize: 1,
                                  isLack: 0,
                                  productIdList: [_0x28f983],
                                  priceAdjustRecentDays: 7
                                });
                                const _0x5a9a92 = {
                                  method: "POST",
                                  headers: _0x22ca6a,
                                  body: _0x32add2,
                                  redirect: "follow"
                                };
                                const _0x168eac = 5;
                                let _0x8a94fd = 0;
                                while (_0x8a94fd < _0x168eac) {
                                  try {
                                    const _0x46cfa0 = await fetch("https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/sales/management/listWarehouse", _0x5a9a92);
                                    if (!_0x46cfa0.ok) {
                                      throw new Error("HTTP error! Status: " + _0x46cfa0.status);
                                    }
                                    const _0x8ec13b = await _0x46cfa0.json();
                                    if (_0x8ec13b.success != true) {
                                      throw new Error("HTTP error! Status: " + _0x46cfa0.status);
                                    }
                                    const _0x462199 = _0x8ec13b.result.subOrderList.flatMap(_0x34bbd3 => _0x34bbd3.skuQuantityDetailList.map(_0x8601e7 => ({
                                      sku: _0x8601e7.className,
                                      todaySales: _0x8601e7.todaySaleVolume,
                                      weekSales: _0x8601e7.lastSevenDaysSaleVolume,
                                      monthSales: _0x8601e7.lastThirtyDaysSaleVolume,
                                      stock: _0x8601e7.warehouseInfoList[0].inventoryNumInfo.warehouseInventoryNum
                                    })));
                                    return _0x462199;
                                  } catch (_0x4e7551) {
                                    _0x8a94fd++;
                                    if (_0x8a94fd >= _0x168eac) {
                                      return [];
                                    }
                                    await new Promise(_0x47df67 => setTimeout(_0x47df67, 800));
                                  }
                                }
                              }
                              const _0xe376ad = new MutationObserver(_0x22dc07 => {
                                _0x22dc07.forEach(_0x3f0c72 => {
                                  _0x3f0c72.addedNodes.forEach(_0x27cb66 => {
                                    _0x27cb66.nodeType === Node.ELEMENT_NODE && (_0x27cb66 = _0x27cb66.querySelector("[class*=\"goods-info_spu\"]"), _0x27cb66 && _0xc0ef6f(_0x27cb66));
                                  });
                                });
                              });
                              const _0x2fdcd4 = {
                                childList: true,
                                subtree: true
                              };
                              _0xe376ad.observe(document.body, _0x2fdcd4);
                            }
                            waitForConsumerConsultation("[class*=\"goods-info_spu\"]", "").then(_0x6e581c => {
                              _0x1803a8();
                            });
                          }();
                        } else {
                          window.location.href.includes("https://seller.kuajingmaihuo.com/activity/marketing-tools/create-coupon") && !function () {
                            myWaitForElement("[class*=\"create-coupon_batchOperation\"]").then(_0x6c82a0 => {
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
          window.location.href.includes("seller.kuajingmaihuo.com") && (Promise.all([getToggleState("toggleState"), getToggleState("toggleState1"), getToggleState("noticeSwitch"), getToggleState("removeWatermarkSwitch")]).then(([_0x25c160, _0x2dc825, _0x5a1aef, _0x3f8cc5]) => {
            true && function () {
              "use strict";

              const _0x357f12 = new MutationObserver(_0x31ac2b => {
                getToggleState("toggleState").then(_0x1b3a06 => {
                  if (_0x1b3a06) {
                    var _0x102005 = document.querySelectorAll("[data-testid=\"beast-core-radio\"]");
                    _0x102005.forEach(function (_0xcded03) {
                      _0xcded03.getAttribute("data-checked") == "false" && _0xcded03.textContent.trim() === "我不接受" && !_0xcded03.getAttribute("gululu-bb") && (_0xcded03.setAttribute("gululu-bb", "ok"), _0xcded03.click());
                      var _0x2b6603 = document.querySelector("[data-testid=\"beast-core-portal-main\"]");
                      _0x2b6603 && _0x2b6603.innerText.includes("我已知晓风险") && (_0x2b6603.querySelector("[data-testid=\"beast-core-checkbox\"]").click(), _0x2b6603.querySelector("[data-testid=\"beast-core-button\"]").click());
                    });
                    var _0x27ab21 = document.querySelectorAll("body :not(script):not(style)");
                    _0x27ab21.forEach(function (_0x220a15) {
                      (_0x220a15.textContent.trim() === "放弃" || _0x220a15.textContent.trim() === "拒绝接受价格调整建议" || _0x220a15.textContent.trim() === "放弃活动" || _0x220a15.textContent.trim().includes("不参与活动")) && !_0x220a15.getAttribute("gululu-aa") && (_0x220a15.setAttribute("gululu-aa", "ok"), _0x220a15.click());
                    });
                  }
                }).catch(_0x374737 => {});
                getToggleState("toggleState1").then(_0xc14cce => {
                  if (localStorage.getItem("monitoringState") === "false" && _0xc14cce) {
                    document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x37ff03) {
                      _0x37ff03.innerText.includes("改价意愿") && !function () {
                        var _0x1ddb6e = document.querySelectorAll("[placeholder=\"请选择\"]");
                        if (Array.from(_0x1ddb6e).map(_0x3d8edf => _0x3d8edf.value).join("").includes("申报价格")) {
                          _0x1ddb6e.forEach(function (_0x1073a2) {
                            (_0x1073a2.value.includes("调整为参考申报价格") || _0x1073a2.value === "同意建议申报价格" || _0x1073a2.value === "同意参考申报价格") && _0x1073a2.click();
                          });
                          var _0x5eaed3 = document.querySelectorAll("[role=\"listbox\"]");
                          _0x5eaed3.forEach(function (_0x1ad026) {
                            _0x1ad026.querySelectorAll("span")[1].click();
                          });
                        } else {
                          setTimeout(function () {
                            document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x1e4c67 => {
                              var _0x32bf21 = _0x1e4c67.querySelectorAll("td");
                              if (_0x32bf21.length >= 8) {
                                var _0xe5a95e = parseFloat(_0x32bf21[4].textContent.trim().replace("¥", ""));
                                var _0x15822d = parseFloat(_0x32bf21[5].textContent.trim().replace("¥", ""));
                                var _0x33a39e = Math.max(_0xe5a95e, _0x15822d);
                                _0x4afb09(_0x32bf21[7], _0x33a39e);
                              } else {
                                if (_0x32bf21.length >= 5) {
                                  var _0xe5a95e = parseFloat(_0x32bf21[1].textContent.trim().replace("¥", ""));
                                  var _0x15822d = parseFloat(_0x32bf21[2].textContent.trim().replace("¥", ""));
                                  var _0x33a39e = Math.max(_0xe5a95e, _0x15822d);
                                  _0x4afb09(_0x32bf21[4], _0x33a39e);
                                } else {
                                  if (_0x32bf21.length >= 4) {
                                    var _0x525ccb = parseFloat(_0x32bf21[1].textContent.trim().replace("¥", ""));
                                    var _0x1dc3a1 = parseFloat(_0x32bf21[2].textContent.trim().replace("¥", ""));
                                    var _0x33a39e = Math.max(_0x525ccb, _0x1dc3a1);
                                    _0x4afb09(_0x32bf21[3], _0x33a39e);
                                  }
                                }
                              }
                            });
                            function _0x4afb09(_0x260b41, _0x59e2ea) {
                              var _0x3313d5 = _0x260b41.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                              _0x3313d5 && (_0x45a06c(_0x3313d5, _0x59e2ea), _0x5534d9(_0x3313d5, "input"), _0x5534d9(_0x3313d5, "change"), _0x5534d9(_0x260b41, "input"), _0x5534d9(_0x260b41, "change"));
                            }
                            function _0x5534d9(_0x29b52f, _0x267114) {
                              var _0x5f32ef = new Event(_0x267114, {
                                bubbles: true
                              });
                              _0x29b52f.dispatchEvent(_0x5f32ef);
                            }
                            function _0x45a06c(_0x403c49, _0x9ef5cb) {
                              var _0x51d842 = _0x403c49.valueTracker && _0x403c49.valueTracker.getValue;
                              _0x51d842 && (_0x403c49.valueTracker.getValue = () => "");
                              _0x403c49.value = _0x9ef5cb;
                              var _0x5bdb83 = new InputEvent("input", {
                                bubbles: true,
                                cancelable: true
                              });
                              _0x403c49.dispatchEvent(_0x5bdb83);
                              _0x51d842 && (_0x403c49.valueTracker.getValue = _0x51d842);
                            }
                          }, 100);
                        }
                      }();
                    });
                  } else {
                    if (_0xc14cce) {
                      var _0x44ae43 = window.location.href;
                      _0x44ae43 == "https://seller.kuajingmaihuo.com/main/product/seller-select" && document.querySelectorAll("[data-testid=\"beast-core-table-th\"] > span").forEach(function (_0x29727d) {
                        _0x29727d.innerText === "改价意愿" && !function () {
                          var _0x4aaec5 = document.querySelectorAll("[placeholder=\"请选择\"]");
                          if (Array.from(_0x4aaec5).map(_0x2df890 => _0x2df890.value).join("").includes("申报价格")) {
                            _0x4aaec5.forEach(function (_0x3cd897) {
                              (_0x3cd897.value.includes("调整为参考申报价格") || _0x3cd897.value === "同意建议申报价格" || _0x3cd897.value === "同意参考申报价格") && _0x3cd897.click();
                            });
                            var _0xbd2583 = document.querySelectorAll("[role=\"listbox\"]");
                            _0xbd2583.forEach(function (_0xd36f06) {
                              _0xd36f06.querySelectorAll("span")[1].click();
                            });
                          } else {
                            setTimeout(function () {
                              document.querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]").forEach(_0x1f9da2 => {
                                var _0x570667 = _0x1f9da2.querySelectorAll("td");
                                if (_0x570667.length >= 8) {
                                  var _0x1e6e59 = parseFloat(_0x570667[4].textContent.trim().replace("¥", ""));
                                  var _0x1b0186 = parseFloat(_0x570667[5].textContent.trim().replace("¥", ""));
                                  var _0x3e7963 = Math.max(_0x1e6e59, _0x1b0186);
                                  _0xf3d0f4(_0x570667[7], _0x3e7963);
                                } else {
                                  if (_0x570667.length >= 5) {
                                    var _0x1e6e59 = parseFloat(_0x570667[1].textContent.trim().replace("¥", ""));
                                    var _0x1b0186 = parseFloat(_0x570667[2].textContent.trim().replace("¥", ""));
                                    var _0x3e7963 = Math.max(_0x1e6e59, _0x1b0186);
                                    _0xf3d0f4(_0x570667[4], _0x3e7963);
                                  } else {
                                    if (_0x570667.length >= 4) {
                                      var _0x55f3c0 = parseFloat(_0x570667[1].textContent.trim().replace("¥", ""));
                                      var _0x54186a = parseFloat(_0x570667[2].textContent.trim().replace("¥", ""));
                                      var _0x3e7963 = Math.max(_0x55f3c0, _0x54186a);
                                      _0xf3d0f4(_0x570667[3], _0x3e7963);
                                    }
                                  }
                                }
                              });
                              function _0xf3d0f4(_0x5a81f8, _0x343c5a) {
                                var _0x112ceb = _0x5a81f8.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]");
                                _0x112ceb && (_0x478faf(_0x112ceb, _0x343c5a), _0x2fdcfb(_0x112ceb, "input"), _0x2fdcfb(_0x112ceb, "change"), _0x2fdcfb(_0x5a81f8, "input"), _0x2fdcfb(_0x5a81f8, "change"));
                              }
                              function _0x2fdcfb(_0x214d8a, _0xfe04c9) {
                                var _0x1d2603 = new Event(_0xfe04c9, {
                                  bubbles: true
                                });
                                _0x214d8a.dispatchEvent(_0x1d2603);
                              }
                              function _0x478faf(_0x25cb6d, _0x347ed1) {
                                var _0x2552cf = _0x25cb6d.valueTracker && _0x25cb6d.valueTracker.getValue;
                                _0x2552cf && (_0x25cb6d.valueTracker.getValue = () => "");
                                _0x25cb6d.value = _0x347ed1;
                                var _0x47e50e = new InputEvent("input", {
                                  bubbles: true,
                                  cancelable: true
                                });
                                _0x25cb6d.dispatchEvent(_0x47e50e);
                                _0x2552cf && (_0x25cb6d.valueTracker.getValue = _0x2552cf);
                              }
                            }, 100);
                          }
                        }();
                      });
                    }
                  }
                });
              });
              _0x357f12.observe(document.body, {
                childList: true,
                subtree: true
              });
            }();
            _0x5a1aef && function () {
              async function _0x441ad9(_0x4e705c) {
                const _0x5da938 = new Headers();
                _0x5da938.append("accept", "*/*");
                _0x5da938.append("mallid", _0x4e705c);
                _0x5da938.append("Content-Type", "text/plain");
                const _0x125295 = "{}";
                const _0x50465b = {
                  method: "POST",
                  headers: _0x5da938,
                  body: _0x125295,
                  redirect: "follow"
                };
                try {
                  const _0x3b7ffa = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/unreadMsgDetail", _0x50465b);
                  const _0x399572 = await _0x3b7ffa.json();
                  return _0x399572.result.unreadPopMsg;
                } catch (_0x3f224b) {
                  console.error(_0x3f224b);
                }
              }
              async function _0x11c096(_0x25deef, _0x1018b5) {
                const _0x43cce0 = new Headers();
                _0x43cce0.append("accept", "*/*");
                _0x43cce0.append("mallid", _0x25deef);
                _0x43cce0.append("Content-Type", "application/json");
                const _0x47ef05 = JSON.stringify({
                  msgId: _0x1018b5
                });
                const _0x291834 = {
                  method: "POST",
                  headers: _0x43cce0,
                  body: _0x47ef05,
                  redirect: "follow"
                };
                try {
                  const _0x4cedf2 = await fetch("https://seller.kuajingmaihuo.com/bg/quick/api/merchant/msgBox/read", _0x291834);
                  const _0x132422 = await _0x4cedf2.json();
                  return _0x132422.result;
                } catch (_0x577279) {
                  console.error(_0x577279);
                }
              }
              getToggleState("noticeSwitch").then(_0x416636 => {
                _0x416636 && getMallId().then(_0x1ec283 => {
                  _0x441ad9(_0x1ec283).then(_0x3252c4 => {
                    if (_0x3252c4 && _0x3252c4.length > 0) {
                      for (const _0x303b00 of _0x3252c4) {
                        _0x11c096(_0x1ec283, _0x303b00.id).then(_0x2ea2ec => {});
                      }
                    }
                  });
                });
              });
            }();
            let _0x1f3215 = false;
            const _0x245290 = new MutationObserver(_0x2f61e6 => {
              _0x2f61e6.forEach(_0x53499c => {
                _0x53499c.type === "childList" && getToggleState("removeWatermarkSwitch").then(_0x1c5ff5 => {
                  if (_0x1c5ff5) {
                    let _0x9c8aa0 = document.querySelectorAll("div[style*=\"z-index: 2147483647\"][class=\"\"][id]:not([id=\"\"])");
                    if (_0x9c8aa0.length > 0) {
                      let _0x512196 = _0x9c8aa0[0];
                      !_0x1f3215 ? (_0x9c8aa0.forEach(_0x3f1f9d => {
                        let _0xc2ef1c = _0x3f1f9d.cloneNode(true);
                        document.head.appendChild(_0xc2ef1c);
                        _0x3f1f9d.parentNode.removeChild(_0x3f1f9d);
                      }), _0x1f3215 = true) : _0x9c8aa0.forEach(_0x13ae81 => {
                        if (_0x13ae81.parentNode.tagName === "BODY" || _0x13ae81.parentNode.tagName === "DIV") {
                          let _0x45938c = _0x13ae81.cloneNode(true);
                          document.head.appendChild(_0x45938c);
                          _0x13ae81.parentNode.removeChild(_0x13ae81);
                        }
                      });
                    }
                  }
                });
              });
            });
            const _0x445417 = {
              childList: true,
              subtree: true
            };
            _0x245290.observe(document.body, _0x445417);
          }), function () {
            "use strict";

            var _0x2fbecb = false;
            var _0x14fa72 = false;
            var _0x294307;
            var _0x353e13;
            var _0x8a8212 = document.createElement("style");
            _0x8a8212.innerHTML = "\n                                    .switch-container {\n                                        position: fixed;\n                                        bottom: 80px;\n                                        right: 12px;\n                                        z-index: 9999999;\n                                        transition: right 0.5s ease;\n                                        width: 60px; /* 调整按钮容器的宽度 */\n                                    }\n    \n                                    .switch-container:hover {\n                                        right: 0;\n                                        width: 60px; /* 鼠标移入时扩展按钮容器的宽度 */\n                                    }\n    \n                                    .switch {\n                                        position: relative;\n                                        display: inline-block;\n                                        width: 100%;\n                                        height: 34px;\n                                    }\n    \n                                    .switch input {\n                                        opacity: 0;\n                                        width: 0;\n                                        height: 0;\n                                    }\n    \n                                    .slider {\n                                        position: absolute;\n                                        cursor: pointer;\n                                        top: 0;\n                                        left: 0;\n                                        right: 0;\n                                        bottom: 0;\n                                        background-color: #ccc;\n                                        transition: .4s;\n                                    }\n    \n                                    .slider:before {\n                                        position: absolute;\n                                        content: \"\";\n                                        height: 26px;\n                                        width: 26px;\n                                        left: 4px;\n                                        bottom: 4px;\n                                        background-color: white;\n                                        transition: .4s;\n                                    }\n    \n                                    input:checked + .slider {\n                                        background-color: #2196F3;\n                                    }\n    \n                                    input:focus + .slider {\n                                        box-shadow: 0 0 1px #2196F3;\n                                    }\n    \n                                    input:checked + .slider:before {\n                                        transform: translateX(26px);\n                                    }\n    \n                                    .slider.round {\n                                        border-radius: 34px;\n                                    }\n    \n                                    .slider.round:before {\n                                        border-radius: 50%;\n                                    }\n                                ";
            document.head.appendChild(_0x8a8212);
            var _0x2645d9 = document.createElement("div");
            _0x2645d9.classList.add("switch-container");
            var _0x328005 = document.createElement("label");
            _0x328005.classList.add("switch");
            var _0x3ac0ac = document.createElement("input");
            _0x3ac0ac.type = "checkbox";
            _0x3ac0ac.checked = localStorage.getItem("monitoringState") === "true";
            _0x328005.appendChild(_0x3ac0ac);
            var _0x3976ef = document.createElement("span");
            _0x3976ef.classList.add("slider", "round");
            _0x328005.appendChild(_0x3976ef);
            _0x2645d9.appendChild(_0x328005);
            document.body.appendChild(_0x2645d9);
            var _0x2257c7 = document.createElement("div");
            _0x2257c7.style.zIndex = 999999;
            _0x2257c7.style.position = "fixed";
            _0x2257c7.style.bottom = "80px";
            _0x2257c7.style.right = "83px";
            _0x2257c7.style.padding = "10px";
            _0x2257c7.style.borderRadius = "5px";
            _0x2257c7.style.backgroundColor = "#f0f0f0";
            _0x2257c7.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            _0x2257c7.style.transition = "opacity 0.3s ease";
            _0x2257c7.style.opacity = "0";
            document.body.appendChild(_0x2645d9);
            document.body.appendChild(_0x2257c7);
            var _0x51c3cd = [];
            function _0x2ed21e(_0x38483) {
              _0x3ac0ac.checked ? _0x176012() : _0x5e31fc();
              _0x294307 = setTimeout(function () {
                _0x2645d9.style.transition = "right 0.5s ease";
                _0x2645d9.style.right = "-35px";
              }, 2000);
              var _0x57533f = false;
              if (_0x38483) {
                var _0x44c27b = document.querySelectorAll("*[style=\"z-index: 9996;\"], *[data-testid=\"beast-core-modal-mask\"], *[data-testid=\"beast-core-modal\"], *[data-testid=\"beast-core-modal-container\"],div[data-testid=\"\"]");
                _0x44c27b.forEach(function (_0x177ee7) {
                  for (const _0x375d12 of excludeInformation) {
                    if (_0x177ee7.textContent.length == 0) {
                      continue;
                    }
                    windowRegex = new RegExp(typeof windowRegex === "string" ? windowRegex.slice(1, -1) : windowRegex);
                    if ((_0x177ee7.textContent.startsWith(_0x375d12) || windowRegex.test(_0x177ee7.textContent)) && !_0x177ee7.textContent.startsWith("以下待办")) {
                      _0x57533f = true;
                      if (_0x177ee7.textContent.includes("1/5加入发货台")) {
                        _0x57533f = false;
                      } else {
                        return;
                      }
                    }
                  }
                });
                !_0x57533f && _0x44c27b.forEach(function (_0x362175) {
                  _0x51c3cd.push({
                    target: _0x362175.parentNode,
                    removedNodes: [_0x362175]
                  });
                  _0x362175.style.display = "none";
                });
                _0x5b96e3.observe(document.body, {
                  childList: true,
                  subtree: true
                });
                localStorage.setItem("monitoringState", "true");
              } else {
                _0x5b96e3.disconnect();
                _0x31afe2();
                localStorage.setItem("monitoringState", "false");
              }
            }
            function _0x31afe2() {
              _0x51c3cd = Array.from(new Set(_0x51c3cd));
              _0x51c3cd.forEach(function (_0x3e187b) {
                _0x3e187b.removedNodes.forEach(function (_0x23eaf9) {
                  _0x23eaf9.style.display = "flex";
                });
              });
              _0x51c3cd = [];
            }
            var _0x5b96e3 = new MutationObserver(function (_0x5af086) {
              var _0x21dc0f = localStorage.getItem("monitoringState") === "true";
              if (!_0x21dc0f) {
                return;
              }
              var _0x567d4c = false;
              _0x5af086.forEach(function (_0x44d1d3) {
                var _0x48cc07 = _0x44d1d3.addedNodes;
                _0x48cc07.forEach(function (_0x33484b) {
                  if (_0x33484b.nodeType === 1 && (_0x33484b.style.zIndex === "1033" || _0x33484b.style.zIndex === "9996" || _0x33484b.dataset.testid === "beast-core-modal-mask" || _0x33484b.dataset.testid == "" || _0x33484b.dataset.testid === "beast-core-modal" || _0x33484b.dataset.testid === "beast-core-modal-container")) {
                    for (const _0x5bc422 of excludeInformation) {
                      windowRegex = new RegExp(typeof windowRegex === "string" ? windowRegex.slice(1, -1) : windowRegex);
                      if (_0x33484b.textContent.length == 0) {
                        continue;
                      }
                      if ((_0x33484b.textContent.startsWith(_0x5bc422) || windowRegex.test(_0x33484b.textContent)) && !_0x33484b.textContent.startsWith("以下待办")) {
                        _0x567d4c = true;
                        if (_0x33484b.textContent.includes("1/5加入发货台")) {
                          _0x567d4c = false;
                        } else {
                          return;
                        }
                      }
                    }
                  }
                });
              });
              !_0x567d4c && _0x5af086.forEach(function (_0x51be59) {
                var _0xc5db21 = _0x51be59.addedNodes;
                _0xc5db21.forEach(function (_0x5840e1) {
                  _0x5840e1.nodeType === 1 && (_0x5840e1.style.zIndex === "1033" || _0x5840e1.style.zIndex === "9996" || _0x5840e1.dataset.testid == "" || _0x5840e1.dataset.testid === "beast-core-modal-mask" || _0x5840e1.dataset.testid === "beast-core-modal" || _0x5840e1.dataset.testid === "beast-core-modal-container") && (_0x51c3cd.push({
                    target: _0x5840e1.parentNode,
                    removedNodes: [_0x5840e1]
                  }), _0x5840e1.style.display = "none");
                });
              });
            });
            _0x2645d9.addEventListener("mousedown", function (_0x2cb55a) {
              _0x353e13 = setTimeout(function () {
                _0x2645d9.style.display = "none";
              }, 1000);
            });
            _0x2645d9.addEventListener("mouseup", function (_0x494aaf) {
              clearTimeout(_0x353e13);
            });
            _0x2645d9.addEventListener("click", function () {
              _0x176012();
              _0x3ac0ac.checked = !_0x3ac0ac.checked;
              _0x2ed21e(_0x3ac0ac.checked);
              clearTimeout(_0x353e13);
              _0x3ac0ac.checked ? _0x176012() : _0x5e31fc();
            });
            _0x2645d9.addEventListener("mouseenter", function () {
              _0x2645d9.style.transition = "right 0.5s ease";
              _0x2645d9.style.right = "12px";
              _0x2628c5();
            });
            _0x2645d9.addEventListener("mouseleave", function () {
              _0x2645d9.style.transition = "right 0.5s ease";
              _0x2645d9.style.right = "-35px";
              _0x2879e8();
            });
            _0x2645d9.addEventListener("click", function () {});
            _0x2257c7.addEventListener("mouseleave", function () {
              _0x3ac0ac.checked && _0x2879e8();
            });
            _0x2ed21e(_0x3ac0ac.checked);
            function _0x176012() {
              _0x2645d9.style.opacity = "1";
              _0x2645d9.style.cursor = "pointer";
              _0x2fbecb = true;
              _0x2257c7.innerText = "咕噜噜去弹窗已禁用";
              _0x2628c5();
              _0x294307 = setTimeout(function () {
                _0x2879e8();
              }, 2000);
            }
            function _0x5e31fc() {
              _0x2257c7.style.display = "block";
              _0x2645d9.style.opacity = "1";
              _0x2645d9.style.cursor = "pointer";
              _0x2fbecb = false;
              _0x2257c7.innerText = "咕噜噜去弹窗已恢复";
              _0x2628c5();
              _0x294307 = setTimeout(function () {
                _0x2879e8();
              }, 2000);
            }
            function _0x2879e8() {
              _0x2257c7.style.opacity = "0";
              _0x14fa72 = false;
              _0x2257c7.style.display = "none";
            }
            function _0x2628c5() {
              _0x2257c7.style.opacity = "1";
              _0x2257c7.style.display = "block";
              _0x14fa72 = true;
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
    const _0x30b0da = document.createElement("div");
    _0x30b0da.style.position = "fixed";
    _0x30b0da.style.bottom = "0";
    _0x30b0da.style.left = "0";
    _0x30b0da.style.width = "100%";
    _0x30b0da.style.backgroundColor = "#ffffff";
    _0x30b0da.style.color = "#333";
    _0x30b0da.style.padding = "20px 40px";
    _0x30b0da.style.display = "flex";
    _0x30b0da.style.justifyContent = "center";
    _0x30b0da.style.alignItems = "center";
    _0x30b0da.style.boxShadow = "0 -4px 15px rgba(0, 0, 0, 0.1)";
    _0x30b0da.style.borderTop = "4px solid #3498db";
    _0x30b0da.style.zIndex = "9999";
    _0x30b0da.style.borderRadius = "12px 12px 0 0";
    _0x30b0da.style.fontFamily = "Arial, sans-serif";
    const _0xa392bd = document.createElement("span");
    _0xa392bd.textContent = "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？";
    _0xa392bd.style.fontSize = "18px";
    _0xa392bd.style.fontWeight = "600";
    _0xa392bd.style.lineHeight = "1.5";
    _0xa392bd.style.textAlign = "center";
    _0xa392bd.style.flexGrow = "1";
    _0xa392bd.style.marginRight = "20px";
    _0x30b0da.appendChild(_0xa392bd);
    const _0x81874 = document.createElement("div");
    _0x81874.style.display = "flex";
    _0x81874.style.alignItems = "center";
    _0x81874.style.gap = "15px";
    _0x30b0da.appendChild(_0x81874);
    const _0x56e88e = document.createElement("button");
    _0x56e88e.textContent = "清空缓存";
    _0x56e88e.style.backgroundColor = "#3498db";
    _0x56e88e.style.color = "#fff";
    _0x56e88e.style.border = "none";
    _0x56e88e.style.padding = "10px 20px";
    _0x56e88e.style.borderRadius = "6px";
    _0x56e88e.style.cursor = "pointer";
    _0x56e88e.style.fontSize = "14px";
    _0x56e88e.style.transition = "all 0.3s ease";
    _0x56e88e.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x56e88e.onmouseover = () => {
      _0x56e88e.style.backgroundColor = "#2980b9";
      _0x56e88e.style.transform = "scale(1.05)";
    };
    _0x56e88e.onmouseout = () => {
      _0x56e88e.style.backgroundColor = "#3498db";
      _0x56e88e.style.transform = "scale(1)";
    };
    _0x56e88e.onclick = () => {
      chrome.runtime.sendMessage({
        type: "clearTemuData"
      }).then(() => {
        window.open("https://www.temu.com/", "_self");
        document.body.removeChild(_0x30b0da);
      });
    };
    "咕噜噜提示：检测到网页访问可能存在异常，是否需要清空缓存？".replace(/\\u([\d\w]{4})/gi, (_0xa36139, _0x569818) => String.fromCharCode(parseInt(_0x569818, 16))) == _0xa392bd.textContent ? "" : !function () {
      chrome.storage.local.set({
        codePhone: ["", ""]
      });
      window.location.reload();
    }();
    const _0x3a0f1c = document.createElement("button");
    _0x3a0f1c.textContent = "取消";
    _0x3a0f1c.style.backgroundColor = "#e74c3c";
    _0x3a0f1c.style.color = "#fff";
    _0x3a0f1c.style.border = "none";
    _0x3a0f1c.style.padding = "10px 20px";
    _0x3a0f1c.style.borderRadius = "6px";
    _0x3a0f1c.style.cursor = "pointer";
    _0x3a0f1c.style.fontSize = "14px";
    _0x3a0f1c.style.transition = "all 0.3s ease";
    _0x3a0f1c.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    _0x3a0f1c.onmouseover = () => {
      _0x3a0f1c.style.backgroundColor = "#c0392b";
      _0x3a0f1c.style.transform = "scale(1.05)";
    };
    _0x3a0f1c.onmouseout = () => {
      _0x3a0f1c.style.backgroundColor = "#e74c3c";
      _0x3a0f1c.style.transform = "scale(1)";
    };
    _0x3a0f1c.onclick = () => {
      document.body.removeChild(_0x30b0da);
    };
    _0x81874.appendChild(_0x56e88e);
    _0x81874.appendChild(_0x3a0f1c);
    document.body.appendChild(_0x30b0da);
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
window.addEventListener("sentPrintData", function (_0x49bf2b) {
  var _0x4125b8 = _0x49bf2b.detail;
  _0x4125b8.type === "printData" && (dataInfoToPrint = _0x4125b8.data);
});
async function getEnglishName(_0x5be201, _0x4e98a2, _0x353212 = 1) {
  return new Promise(async (_0x4610dc, _0x3d9f60) => {
    var _0x244ccd = await getMallId();
    chrome.runtime.sendMessage({
      type: "getEnglishName",
      text: _0x5be201,
      labelCode: _0x4e98a2,
      mallid: _0x244ccd,
      mode: _0x353212
    }, _0x5dff8a => {
      _0x5dff8a ? _0x4610dc(_0x5dff8a) : _0x3d9f60(_0x5be201);
    });
  });
}
function findElementByColor(_0x242dcf, _0x31b4b0) {
  for (let _0x43bb84 of _0x242dcf) {
    if (_0x43bb84[3] === _0x31b4b0) {
      return _0x43bb84.filter(_0x5c221d => _0x5c221d !== null && _0x5c221d !== undefined);
    }
  }
  return [];
}
function showPrintBox() {
  const _0x576868 = document.createElement("style");
  _0x576868.innerHTML = "\n    .loader-container-p {\n      position: fixed;\n      top: 50%;\n      left: 75%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      z-index: 99000; /* 确保动画在页面的最顶层 */\n    }\n  \n    .loader {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n  \n    .loader div {\n      width: 16px;\n      height: 16px;\n      background: #3498db;\n      border-radius: 50%;\n      animation: bounce 1.2s infinite ease-in-out;\n      margin: 0 6px;\n    }\n  \n    .loader div:nth-child(1) {\n      animation-delay: -0.24s;\n    }\n  \n    .loader div:nth-child(2) {\n      animation-delay: -0.12s;\n    }\n  \n    .loader div:nth-child(3) {\n      animation-delay: 0s;\n    }\n  \n    @keyframes bounce {\n      0%, 20%, 50%, 80%, 100% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-20px);\n      }\n      60% {\n        transform: translateY(-10px);\n      }\n    }\n  \n    .loader-text {\n      font-family: Arial, sans-serif;\n      color: #333;\n      font-size: 16px;\n      text-align: center;\n      margin-top: 8px;\n    }\n  ";
  document.head.appendChild(_0x576868);
  const _0x53cbee = document.createElement("div");
  _0x53cbee.className = "loader-container-p";
  const _0x592e58 = document.createElement("div");
  _0x592e58.className = "loader";
  for (let _0x49d936 = 0; _0x49d936 < 3; _0x49d936++) {
    const _0xadaf55 = document.createElement("div");
    _0x592e58.appendChild(_0xadaf55);
  }
  const _0xdcbe0e = document.createElement("div");
  _0xdcbe0e.className = "loader-text";
  _0xdcbe0e.textContent = "打印数据加载中...";
  _0x53cbee.appendChild(_0x592e58);
  _0x53cbee.appendChild(_0xdcbe0e);
  document.body.appendChild(_0x53cbee);
}
function tipBoxShow(_0x866cd6, _0x45a4a5) {
  const _0x5e9bb3 = document.createElement("div");
  _0x5e9bb3.textContent = _0x866cd6;
  _0x5e9bb3.style.position = "fixed";
  _0x5e9bb3.style.top = "40%";
  _0x5e9bb3.style.left = "70%";
  _0x5e9bb3.style.transform = "translate(-50%, -50%)";
  _0x5e9bb3.style.backgroundColor = "#e8f5e9";
  _0x5e9bb3.style.backgroundImage = "linear-gradient(135deg, #e8f5e9, #c8e6c9)";
  _0x5e9bb3.style.color = "#1b5e20";
  _0x5e9bb3.style.padding = "20px 30px";
  _0x5e9bb3.style.borderRadius = "12px";
  _0x5e9bb3.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  _0x5e9bb3.style.fontSize = "16px";
  _0x5e9bb3.style.fontFamily = "Arial, sans-serif";
  _0x5e9bb3.style.textAlign = "center";
  _0x5e9bb3.style.maxWidth = "80%";
  _0x5e9bb3.style.wordWrap = "break-word";
  _0x5e9bb3.style.zIndex = "1000";
  _0x5e9bb3.style.display = "none";
  _0x5e9bb3.style.opacity = "0";
  _0x5e9bb3.style.transition = "opacity 0.5s ease";
  document.body.appendChild(_0x5e9bb3);
  setTimeout(() => {
    _0x5e9bb3.style.display = "block";
    _0x5e9bb3.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    _0x5e9bb3.style.opacity = "0";
    setTimeout(() => {
      _0x5e9bb3.style.display = "none";
      document.body.removeChild(_0x5e9bb3);
    }, 500);
  }, _0x45a4a5);
}
function closePrintShowBox() {
  const _0xbff82c = document.querySelector(".loader-container-p");
  _0xbff82c && _0xbff82c.remove();
}
window.onerror = function (_0x587b3f, _0x512a7a, _0x32c7c7, _0xffdbe2, _0x1f833c) {
  return true;
};
window.onunhandledrejection = function (_0x2d6a33) {
  _0x2d6a33.preventDefault();
};
async function currentPageInfo(_0x136d0d, _0x8fc4c6, _0x264443) {
  return new Promise((_0x5cd12a, _0xa9f13d) => {
    chrome.runtime.sendMessage({
      type: "getCurrentPageInfo",
      spu_id: _0x8fc4c6,
      mallid: _0x136d0d,
      skc: _0x264443
    }, _0x18109f => {
      _0x18109f ? _0x5cd12a(_0x18109f) : _0xa9f13d([]);
    });
  });
}
async function dowlonMmageAsBase64(_0x4a3cff) {
  try {
    const _0x10bee3 = await fetch(_0x4a3cff);
    const _0xbfad44 = await _0x10bee3.blob();
    const _0x11f58e = new Image();
    _0x11f58e.src = URL.createObjectURL(_0xbfad44);
    return new Promise((_0x42c069, _0x3e2e9a) => {
      _0x11f58e.onload = () => {
        const _0x3e3893 = document.createElement("canvas");
        const _0x43353c = _0x3e3893.getContext("2d");
        _0x3e3893.width = _0x11f58e.width;
        _0x3e3893.height = _0x11f58e.height;
        _0x43353c.drawImage(_0x11f58e, 0, 0);
        const _0xfd3fd8 = _0x43353c.getImageData(0, 0, _0x3e3893.width, _0x3e3893.height);
        const _0x32876c = _0xfd3fd8.data;
        const _0x50fe00 = _0x3e3893.toDataURL("image/jpeg");
        URL.revokeObjectURL(_0x11f58e.src);
        _0x42c069(_0x50fe00);
      };
      _0x11f58e.onerror = () => {
        _0x3e2e9a(new Error("Failed to load image."));
      };
    });
  } catch (_0x36387c) {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAU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AACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  }
}
async function getImageAsBase64(_0x4fb68c, _0x32fcfe = 5, _0x5c2224 = 100) {
  const _0x50b9b4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAykAAAMkCAYAAAC89G+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAFl7SURBVHhe7d0HnH7LQdd/xAp2pVgQVIJIsYOiiNJUIiEGkBYBJYQEhMQEEFMAhQSBBAJEAiHBIAmgBgIBQpEYTSwYCwIqoqCI2HvvZf9+Hn7n/s+ee3b3qbuzu+/36zWv3Nz77FPPmZnvzJw5b3AGAAAwECEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAU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AACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAMRUgBAACGIqQAAABDEVIAAIChCCkAAMBQhBQAAGAoQgoAADAUIQUAABiKkAIAAAxFSAEAAIYipAAAAEMRUgAAgKEIKQAAwFCEFAAAYChCCgAAMBQhBQAAGIqQAgAADEVIAQAAhiKkAAAAQxFSAACAoQgpAADAUIQUAABgKEIKAAAwFCEFAAAYipACAAAM5Ozs/wOqefnu54zBNQAAAABJRU5ErkJggg==";
  return new Promise((_0x4a4b6b, _0x4a9eb6) => {
    const _0x5cc1a2 = _0x10239b => {
      const _0x41ce27 = new Image();
      _0x41ce27.onload = () => {
        const _0x56769c = document.createElement("canvas");
        const _0x2e4e0d = _0x56769c.getContext("2d");
        _0x56769c.width = _0x41ce27.width;
        _0x56769c.height = _0x41ce27.height;
        _0x2e4e0d.drawImage(_0x41ce27, 0, 0);
        const _0x158b98 = _0x56769c.toDataURL("image/jpeg");
        _0x4a4b6b(_0x158b98);
      };
      _0x41ce27.onerror = () => {
        _0x10239b > 0 ? setTimeout(() => _0x5cc1a2(_0x10239b - 1), _0x5c2224) : (console.log("图片加载失败，使用默认图片"), _0x4a4b6b(_0x50b9b4));
      };
      _0x41ce27.src = _0x4fb68c;
    };
    _0x5cc1a2(_0x32fcfe);
  });
}
function imageToBase64(_0x779304) {
  return new Promise((_0x748aa5, _0x196926) => {
    fetch(_0x779304).then(_0x4a492d => _0x4a492d.blob()).then(_0x372370 => {
      const _0x18867a = new FileReader();
      _0x18867a.onloadend = function () {
        _0x748aa5(_0x18867a.result);
      };
      _0x18867a.onerror = function () {
        _0x196926(new Error("Failed to read the image file"));
      };
      _0x18867a.readAsDataURL(_0x372370);
    }).catch(_0x23dbf8 => {
      _0x196926(_0x23dbf8);
    });
  });
}
function run(_0x2cc132, _0x5f0b3a, _0x300bf6 = 1) {
  chrome.storage.local.get("codePhone", function (_0x240c6e) {
    const _0x26bf4d = _0x240c6e.codePhone;
    _0x26bf4d ? getMallId().then(_0x5585b9 => {
      chrome.runtime.sendMessage({
        type: "checkTime",
        password: _0x26bf4d,
        model: "打印",
        mallid: _0x5585b9,
        shopName: document.querySelector("[class*=\"elli_outerWrapper\"]").innerText
      }, _0x3eb125 => {
        _0x3eb125.data.type == "fcmsl" ? function (_0x2b82fa, _0x2b4f39, _0x33b289) {
          let _0x631516 = jspdf.jsPDF;
          const _0x10e2fa = "data:image/image/png;base64,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4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMslgRAClQCIAXjLJYEQApUAiAF4yyWBEAKVAIgBeMs1n8AkXhJW8bmPEwAAAAASUVORK5CYII=";
          const _0x44f4fc = document.createElement("div");
          _0x44f4fc.id = "modal";
          _0x44f4fc.style.display = "none";
          _0x44f4fc.style.position = "fixed";
          _0x44f4fc.style.zIndex = "1000";
          _0x44f4fc.style.left = "50%";
          _0x44f4fc.style.top = "40%";
          _0x44f4fc.style.transform = "translate(-50%, -50%)";
          _0x44f4fc.style.backgroundColor = "#fff";
          _0x44f4fc.style.padding = "20px";
          _0x44f4fc.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
          _0x44f4fc.style.borderRadius = "10px";
          _0x44f4fc.style.width = "800px";
          _0x44f4fc.style.maxWidth = "90%";
          document.body.appendChild(_0x44f4fc);
          const _0x169010 = document.createElement("h2");
          _0x169010.id = "dayingululuset";
          _0x169010.textContent = "咕噜噜打印设置（模板内支持选择西班牙标签）";
          _0x169010.style.marginBottom = "20px";
          _0x44f4fc.appendChild(_0x169010);
          const _0x4f8258 = document.createElement("input");
          _0x4f8258.type = "text";
          _0x4f8258.placeholder = "搜索标签...";
          _0x4f8258.style.padding = "10px";
          _0x4f8258.style.width = "95%";
          _0x4f8258.style.marginBottom = "20px";
          _0x4f8258.style.borderColor = "black";
          _0x4f8258.style.borderRadius = "5px";
          _0x4f8258.autocomplete = "on";
          _0x4f8258.name = "searchQuery";
          _0x4f8258.id = "searchInput";
          const _0x503200 = document.createElement("form");
          _0x503200.appendChild(_0x4f8258);
          _0x44f4fc.appendChild(_0x503200);
          const _0x3977f4 = document.createElement("div");
          _0x3977f4.style.display = "flex";
          _0x3977f4.style.gap = "10px";
          _0x3977f4.style.marginBottom = "20px";
          _0x44f4fc.insertBefore(_0x3977f4, _0x503200);
          const _0x536270 = ["70*20", "70*40", "70*60", "70*70", "100*100", "独立标签", "条码融合"];
          _0x536270.forEach(_0x201eeb => {
            const _0x5174de = document.createElement("button");
            _0x5174de.textContent = _0x201eeb;
            _0x5174de.style.padding = "5px 10px";
            _0x5174de.style.border = "1px solid #ccc";
            _0x5174de.style.borderRadius = "5px";
            _0x5174de.style.cursor = "pointer";
            _0x5174de.style.backgroundColor = "#f9f9f9";
            _0x5174de.style.color = "#333";
            _0x5174de.addEventListener("click", () => {
              const _0x1e7e5a = _0x1e8ce1.filter(_0x3f61b4 => _0x3f61b4.text.includes(_0x201eeb));
              _0x2e68ce(_0x1e7e5a);
            });
            _0x3977f4.appendChild(_0x5174de);
          });
          const _0x2b171a = document.createElement("div");
          _0x2b171a.style.display = "grid";
          _0x2b171a.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
          _0x2b171a.style.gap = "15px";
          _0x2b171a.style.overflowY = "auto";
          _0x2b171a.style.maxHeight = "400px";
          _0x44f4fc.appendChild(_0x2b171a);
          const _0x24e1e4 = document.createElement("div");
          _0x24e1e4.className = "tooltipprint";
          document.body.appendChild(_0x24e1e4);
          const _0x2a7fea = document.createElement("style");
          _0x2a7fea.textContent = "\n                                .tooltipprint {\n                                    position: absolute;\n                                    background-color: #fff;\n                                    border: 1px solid #ccc;\n                                    border-radius: 4px;\n                                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n                                    padding: 10px;\n                                    display: none;\n                                    z-index: 1000;\n                                    max-width: 200px;\n                                    opacity: 0;\n                                    transition: opacity 0.3s ease-in-out;\n                                }\n\n                                .tooltipprint.show {\n                                    opacity: 1;\n                                }\n\n                                .tooltipprint img {\n                                    max-width: 100%;\n                                    height: auto;\n                                }\n\n                                label {\n                                    display: flex;\n                                    align-items: center;\n                                    font-size: 15px;\n                                    color: #333;\n                                    cursor: pointer;\n                                    font-family: sans-serif;\n                                    margin-left: 10px;\n                                }\n\n                                input[type=\"radio\"] {\n                                    accent-color: #4CAF50;\n                                    transform: scale(1.2);\n                                    margin-right: 10px;\n                                }\n\n                                /* 自定义滚动条 */\n                                #barcode-option-container::-webkit-scrollbar {\n                                    width: 8px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-thumb {\n                                    background-color: rgba(0, 0, 0, 0.3);\n                                    border-radius: 10px;\n                                }\n                                #barcode-option-container::-webkit-scrollbar-track {\n                                    background-color: #f1f1f1;\n                                }\n\n                                \n\n                                #close-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #f44336;\n                                }\n\n                                #print-btn {\n                                    padding: 10px 20px;\n                                    border: none;\n                                    border-radius: 5px;\n                                    cursor: pointer;\n                                    color: #fff;\n                                    background-color: #4CAF50;\n                                }\n\n                                #print-btn #close-btn:hover {\n                                    opacity: 0.8;\n                                }\n                                ";
          document.head.appendChild(_0x2a7fea);
          const _0x36bdb8 = [{
            id: "myjtm72",
            text: "独立条码 70*20",
            imageUrl: "web/printImg/tm.png"
          }, {
            id: "myod72",
            text: "独立标签 欧代 70*20",
            imageUrl: "web/printImg/od72.png"
          }, {
            id: "mygys72",
            text: "独立标签 制造商信息 70*20",
            imageUrl: "web/printImg/gys72.png"
          }, {
            id: "myodp74",
            text: "独立标签 欧代+防窒息+环保（环保标长度小于56mm） 70*40",
            imageUrl: "web/printImg/od76.png"
          }, {
            id: "myodps74",
            text: "独立标签 欧代+防窒息+食品+环保（环保标长度小于56mm） 70*40",
            imageUrl: "web/printImg/spb76.png"
          }, {
            id: "myHbzx",
            text: "条码融合 防窒息+环保（环保标长度大于56mm） 70*40",
            imageUrl: "web/printImg/hbzx.png"
          }, {
            id: "myod74",
            text: "条码融合 欧代 70*40",
            imageUrl: "web/printImg/myod74.png"
          }, {
            id: "mySpb",
            text: "条码融合 欧代+食品+防窒息+环保（环保标长度小于56mm） 70*60",
            imageUrl: "web/printImg/spb76.png"
          }, {
            id: "myodp76",
            text: "条码融合 欧代+防窒息+环保 （环保标长度小于56mm）70*60",
            imageUrl: "web/printImg/od76.png"
          }, {
            id: "myodp",
            text: "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 70*70",
            imageUrl: "web/printImg/odp.png"
          }, {
            id: "myodps77",
            text: "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 70*70",
            imageUrl: "web/printImg/odps77.png"
          }, {
            id: "myodfz77",
            text: "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 70*70",
            imageUrl: "web/printImg/odfz77.png"
          }, {
            id: "myodp100",
            text: "条码融合 欧代+防窒息+环保（环保标长度大于56mm） 100*100",
            imageUrl: "web/printImg/odp.png"
          }, {
            id: "myodps100",
            text: "条码融合 欧代+防窒息+食品+环保（环保标长度大于56mm） 100*100",
            imageUrl: "web/printImg/odps77.png"
          }, {
            id: "myodfz100",
            text: "条码融合 欧代+防窒息+纺织+环保（环保标长度小于56mm） 100*100",
            imageUrl: "web/printImg/odfz77.png"
          }, {
            id: "myodfzcz100",
            text: "条码融合 欧代+防窒息+材质+纺织+环保（环保标长度小于56mm） 100*100",
            imageUrl: "web/printImg/odfzcz100.png"
          }];
          const _0x1e8ce1 = [..._0x36bdb8];
          function _0x1bc9c0(_0x374d72) {
            const _0x54f159 = document.createElement("input");
            _0x54f159.type = "radio";
            _0x54f159.name = "radio-option";
            _0x54f159.id = _0x374d72.id;
            _0x54f159.value = _0x374d72.text;
            _0x54f159.setAttribute("data-custom-value", _0x374d72.imageUrl);
            const _0x2056ef = document.createElement("label");
            _0x2056ef.htmlFor = _0x374d72.id;
            _0x2056ef.style.textAlign = "center";
            _0x2056ef.style.display = "flex";
            _0x2056ef.style.flexDirection = "column";
            _0x2056ef.style.alignItems = "center";
            _0x2056ef.style.justifyContent = "center";
            _0x2056ef.style.width = "150px";
            _0x2056ef.style.padding = "10px";
            _0x2056ef.style.boxSizing = "border-box";
            const _0x4dcd18 = document.createElement("img");
            _0x4dcd18.src = chrome.runtime.getURL(_0x374d72.imageUrl);
            _0x4dcd18.alt = _0x374d72.text;
            _0x4dcd18.style.width = "180px";
            _0x4dcd18.style.height = "180px";
            _0x4dcd18.style.objectFit = "contain";
            const _0x117626 = document.createElement("div");
            _0x117626.textContent = _0x374d72.text;
            _0x117626.style.textAlign = "center";
            _0x117626.style.whiteSpace = "normal";
            _0x117626.style.wordBreak = "break-word";
            _0x117626.style.width = "100%";
            _0x2056ef.appendChild(_0x4dcd18);
            _0x2056ef.appendChild(_0x117626);
            const _0x3db5a2 = document.createElement("div");
            _0x3db5a2.style.display = "flex";
            _0x3db5a2.style.flexDirection = "column";
            _0x3db5a2.style.alignItems = "center";
            _0x3db5a2.style.justifyContent = "center";
            _0x3db5a2.style.border = "1px solid #ccc";
            _0x3db5a2.style.borderRadius = "5px";
            _0x3db5a2.style.padding = "10px";
            _0x3db5a2.style.backgroundColor = "#f9f9f9";
            _0x3db5a2.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            function _0x1ae49(_0x251228, _0x2d5ff4) {
              _0x24e1e4.innerHTML = "<img src=\"" + chrome.runtime.getURL(_0x2d5ff4.imageUrl) + "\" alt=\"" + _0x2d5ff4.text + "\" style=\"max-width: 100%; height: auto;\">";
              _0x24e1e4.style.display = "block";
              _0x24e1e4.classList.add("show");
              const _0x1d3e57 = window.innerWidth;
              const _0x2a37df = window.innerHeight;
              const _0x37f530 = _0x24e1e4.offsetWidth;
              const _0x4fbb50 = _0x24e1e4.offsetHeight;
              let _0x3deb16 = _0x251228.pageX + 10;
              let _0x6db1a6 = _0x251228.pageY + 10;
              _0x3deb16 + _0x37f530 > _0x1d3e57 && (_0x3deb16 = _0x251228.pageX - _0x37f530 - 10);
              _0x6db1a6 + _0x4fbb50 > _0x2a37df && (_0x6db1a6 = _0x251228.pageY - _0x4fbb50 - 10);
              _0x24e1e4.style.left = _0x3deb16 + "px";
              _0x24e1e4.style.top = _0x6db1a6 + "px";
            }
            function _0x4fd127() {
              _0x24e1e4.style.display = "none";
              _0x24e1e4.classList.remove("show");
            }
            _0x2056ef.addEventListener("mouseover", _0x5a0822 => _0x1ae49(_0x5a0822, _0x374d72));
            _0x2056ef.addEventListener("mouseout", _0x4fd127);
            _0x3db5a2.appendChild(_0x54f159);
            _0x3db5a2.appendChild(_0x2056ef);
            _0x2b171a.appendChild(_0x3db5a2);
          }
          function _0x2e68ce(_0x568301) {
            _0xaf1edd();
            _0x568301.forEach(_0x1bc9c0);
          }
          function _0xaf1edd() {
            while (_0x2b171a.firstChild) {
              _0x2b171a.removeChild(_0x2b171a.firstChild);
            }
          }
          _0x4f8258.addEventListener("input", function () {
            const _0x1913bb = _0x4f8258.value.toLowerCase();
            const _0x5cb9fa = _0x1e8ce1.filter(_0x16c5f3 => _0x16c5f3.text.toLowerCase().includes(_0x1913bb));
            _0x2e68ce(_0x5cb9fa);
          });
          _0x2e68ce(_0x1e8ce1);
          const _0x347c74 = document.createElement("div");
          _0x347c74.style.display = "flex";
          _0x347c74.style.justifyContent = "space-between";
          _0x347c74.style.marginTop = "20px";
          _0x44f4fc.appendChild(_0x347c74);
          const _0x17d133 = document.createElement("button");
          _0x17d133.id = "print-btn";
          _0x17d133.textContent = "打印";
          _0x347c74.appendChild(_0x17d133);
          const _0x1ea137 = document.createElement("button");
          _0x1ea137.id = "close-btn";
          _0x1ea137.textContent = "关闭";
          _0x347c74.appendChild(_0x1ea137);
          _0x44f4fc.style.display = "block";
          _0x1ea137.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
            _0xaf1edd();
            _0x44f4fc.remove();
          });
          _0x17d133.addEventListener("mouseover", () => {
            var _0x2db891 = document.querySelectorAll(".tooltip");
            if (_0x2db891.length > 0) {
              for (var _0x10b5a5 = 0; _0x10b5a5 < _0x2db891.length; _0x10b5a5++) {
                _0x2db891[_0x10b5a5].style.display = "none";
              }
            }
          });
          _0x17d133.addEventListener("click", function () {
            document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
            document.querySelectorAll("[class=\"printTooltip show\"]").forEach(_0x133f34 => _0x133f34.remove());
            chrome.runtime.sendMessage({
              type: "usageFunctionRecord",
              phone: _0x26bf4d,
              name: "咕噜噜打印"
            });
            var _0x97faf9 = document.querySelector("input[name=\"radio-option\"]:checked");
            chrome.storage.local.set({
              printCodeClickMod: _0x97faf9.id
            });
            var _0x13b97f = "";
            _0xaf1edd();
            _0x44f4fc.style.display = "none";
            let _0x502ce7;
            const _0x59c04a = 66.2;
            const _0x498936 = 16.2;
            let _0x1c3a75 = (70 - _0x59c04a) / 2;
            let _0x7e0b2a = (20 - _0x498936 - 2) / 2;
            async function _0x53c6b3(_0x488a71, _0x37a31c, _0x4c30e5) {
              if (_0x3eb125.data.shopState == "正常") {
                if (_0x3eb125.data.on == "cc") {
                  try {
                    showPrintBox();
                    try {
                      chrome.storage.local.get("codePhone", function (_0x4a4c6d) {
                        const _0x5f45ca = _0x4a4c6d.codePhone;
                        _0x5f45ca && chrome.runtime.sendMessage({
                          type: "getPrintInfo",
                          password: _0x5f45ca,
                          model: "2",
                          newPrintInfo: printCodeInfoDict
                        }, _0x5309ab => {});
                      });
                    } catch (_0x25743e) {}
                    let _0x1c96c;
                    let _0x3b94b2;
                    if (_0x4c30e5.length == 1) {
                      _0x1c96c = await getImageAsBase64(chrome.runtime.getURL(_0x4c30e5[0]));
                    } else {
                      _0x4c30e5.length == 2 && (_0x1c96c = await getImageAsBase64(chrome.runtime.getURL(_0x4c30e5[0])), _0x3b94b2 = await getImageAsBase64(chrome.runtime.getURL(_0x4c30e5[1])));
                    }
                    let _0x1c1e76 = null;
                    if (_0x13b97f == "myHbzx" || _0x13b97f == "myodp74" || _0x13b97f == "myod74" || _0x13b97f == "myodps74") {
                      _0x502ce7 = new _0x631516({
                        orientation: "landscape",
                        unit: "mm",
                        format: [70, 40]
                      });
                    } else {
                      if (_0x13b97f == "mySpb" || _0x13b97f == "myodp76") {
                        _0x502ce7 = new _0x631516({
                          orientation: "landscape",
                          unit: "mm",
                          format: [70, 60]
                        });
                      } else {
                        if (_0x13b97f == "myodp" || _0x13b97f == "myodps77" || _0x13b97f == "myodfz77") {
                          _0x502ce7 = new _0x631516({
                            orientation: "landscape",
                            unit: "mm",
                            format: [70, 70]
                          });
                        } else {
                          _0x13b97f == "myodp100" || _0x13b97f == "myodps100" || _0x13b97f == "myodfz100" || _0x13b97f == "myodfzcz100" ? _0x502ce7 = new _0x631516({
                            orientation: "landscape",
                            unit: "mm",
                            format: [100, 100]
                          }) : _0x502ce7 = new _0x631516({
                            orientation: "landscape",
                            unit: "mm",
                            format: [70, 20]
                          });
                        }
                      }
                    }
                    _0x502ce7.setFont("notosans", "bold");
                    function _0x418061(_0x53d564, _0x19de95, _0x5aaba8, _0x467c92, _0x536233, _0x4e3b89, _0x594550 = "默认") {
                      function _0x21a362(_0x313425, _0x41f064) {
                        _0x4e3b89.setFontSize(_0x313425);
                        const _0x19b098 = _0x4e3b89.getTextWidth("A");
                        const _0x3191a = Math.floor(_0x41f064 / _0x19b098);
                        return _0x3191a;
                      }
                      function _0x2f4096(_0x1d4f8b, _0x130c05) {
                        if (_0x594550 == "属性") {
                          var _0x954582 = _0x1d4f8b.split(/(  )/);
                        } else {
                          var _0x954582 = _0x1d4f8b.split(/(\s+|,|\.)/);
                        }
                        const _0x1e6424 = [];
                        let _0x5055d6 = "";
                        _0x954582.forEach(_0x18bb9d => {
                          let _0x10a344 = _0x5055d6 + _0x18bb9d;
                          const _0x51d6fc = _0x4e3b89.getTextWidth(_0x10a344);
                          _0x51d6fc > _0x130c05 && _0x5055d6 ? (_0x1e6424.push(_0x5055d6), _0x5055d6 = _0x18bb9d) : _0x5055d6 = _0x10a344;
                        });
                        _0x5055d6.length > 0 && _0x1e6424.push(_0x5055d6);
                        return _0x1e6424;
                      }
                      let _0x58afea = _0x536233;
                      let _0x2350bc = [];
                      while (_0x58afea > 1) {
                        const _0x167848 = _0x21a362(_0x58afea, _0x19de95);
                        _0x2350bc = _0x2f4096(_0x53d564, _0x19de95);
                        if (_0x2350bc.length === 1 && _0x4e3b89.getTextWidth(_0x2350bc[0]) > _0x19de95) {
                          _0x58afea -= 0.3;
                          continue;
                        }
                        const _0x4ee322 = _0x2350bc.slice(1).join("");
                        const _0x223721 = _0x2f4096(_0x4ee322, _0x5aaba8);
                        _0x2350bc = [_0x2350bc[0]].concat(_0x223721);
                        if (_0x2350bc.length <= _0x467c92) {
                          break;
                        } else {
                          _0x58afea -= 0.3;
                        }
                      }
                      _0x2350bc.length > _0x467c92 && (_0x2350bc = _0x2350bc.slice(0, _0x467c92), _0x2350bc[_0x467c92 - 1] += "...");
                      return _0x2350bc.map(_0xb16faa => ({
                        text: _0xb16faa,
                        fontSize: _0x58afea
                      }));
                    }
                    for (let _0x1e9f7c = 0; _0x1e9f7c < _0x2b4f39.length; _0x1e9f7c++) {
                      let _0x1872b3 = _0x1e9f7c === _0x2b4f39.length - 1;
                      let _0x3eb281 = findElementByColor(_0x488a71, _0x2b4f39[_0x1e9f7c][0]);
                      if (_0x3eb281.length == 0) {
                        _0x1390a4();
                        break;
                      }
                      var _0x299626 = _0x3eb281[0];
                      var _0x475ddf = _0x3eb281[1];
                      var _0x173c2b = _0x3eb281[2].slice(0, 30);
                      var _0x5a4473 = _0x3eb281[3];
                      var _0x23ba47 = _0x3eb281[5];
                      var _0x48fb6f = parseInt(_0x2b4f39[_0x1e9f7c][1]);
                      var _0xc62434 = _0x3eb281[8];
                      if (_0x37a31c != "") {
                        var _0x5b7ad8 = _0x37a31c;
                      } else {
                        var _0x5b7ad8 = _0x3eb281[6];
                      }
                      let _0x22c946 = await dowlonMmageAsBase64(_0x23ba47);
                      if (_0x13b97f == "myHbzx" || _0x13b97f == "myodp74" || _0x13b97f == "myod74" || _0x13b97f == "myodps74") {
                        _0x502ce7.addImage(_0x10e2fa, "png", 1, 2, 18, 35);
                        _0x502ce7.addImage(_0x22c946, "png", 16, 6, 26, 26);
                        _0x502ce7.setFontSize(6);
                        _0x502ce7.text("此为产品信息页 无需粘贴!!!", 43, 5);
                        _0x502ce7.setFontSize(9);
                        _0x502ce7.text(_0xc62434, 43, 18);
                        _0x502ce7.setFontSize(10);
                        _0x502ce7.text("数量: " + _0x48fb6f, 43, 23);
                        _0x502ce7.setFontSize(7);
                        _0x502ce7.text("咕噜噜打印", 53, 36);
                        _0x502ce7.addPage([70, 40]);
                      } else {
                        if (_0x13b97f == "mySpb" || _0x13b97f == "myodp76") {
                          _0x502ce7.addImage(_0x10e2fa, "png", 1, 10, 12, 45);
                          _0x502ce7.addImage(_0x22c946, "png", 12, 15, 30, 30);
                          _0x502ce7.setFontSize(7);
                          _0x502ce7.text("此为产品信息页 无需粘贴!!!", 35, 5);
                          _0x502ce7.setFontSize(9);
                          _0x502ce7.text(_0xc62434, 43, 28);
                          _0x502ce7.setFontSize(10);
                          _0x502ce7.text("数量: " + _0x48fb6f, 43, 38);
                          _0x502ce7.setFontSize(7);
                          _0x502ce7.text("咕噜噜打印", 53, 46);
                          _0x502ce7.addPage([70, 60]);
                        } else {
                          if (_0x13b97f == "myodp" || _0x13b97f == "myodps77" || _0x13b97f == "myodfz77") {
                            _0x502ce7.addImage(_0x10e2fa, "png", 1, 10, 12, 45);
                            _0x502ce7.addImage(_0x22c946, "png", 12, 15, 30, 30);
                            _0x502ce7.setFontSize(7);
                            _0x502ce7.text("此为产品信息页 无需粘贴!!!", 35, 5);
                            _0x502ce7.setFontSize(9);
                            _0x502ce7.text(_0xc62434, 43, 28);
                            _0x502ce7.setFontSize(10);
                            _0x502ce7.text("数量: " + _0x48fb6f, 43, 38);
                            _0x502ce7.setFontSize(7);
                            _0x502ce7.text("咕噜噜打印", 53, 46);
                            _0x502ce7.addPage([70, 70]);
                          } else {
                            _0x13b97f == "myodp100" || _0x13b97f == "myodps100" || _0x13b97f == "myodfz100" || _0x13b97f == "myodfzcz100" ? (_0x502ce7.addImage(_0x10e2fa, "png", 1, 10, 18, 35), _0x502ce7.addImage(_0x22c946, "png", 16, 12, 26, 26), _0x502ce7.setFontSize(10), _0x502ce7.text("此为产品信息页 无需粘贴!!!", 43, 5), _0x502ce7.setFontSize(13), _0x502ce7.text(_0xc62434, 43, 28), _0x502ce7.setFontSize(10), _0x502ce7.text("数量: " + _0x48fb6f, 43, 38), _0x502ce7.setFontSize(7), _0x502ce7.text("咕噜噜打印", 53, 46), _0x502ce7.addPage([100, 100])) : (_0x502ce7.addImage(_0x10e2fa, "png", 4, 2, 10, 15), _0x502ce7.addImage(_0x22c946, "png", 15, 2, 18, 16), _0x502ce7.setFontSize(6), _0x502ce7.text("此为产品信息页 无需粘贴!!!", 34, 3), _0x502ce7.setFontSize(11), _0x502ce7.text(_0xc62434, 34, 8), _0x502ce7.setFontSize(11), _0x502ce7.text("数量: " + _0x48fb6f, 35, 12.5), _0x502ce7.setFontSize(7), _0x502ce7.text("咕噜噜打印", 53, 18), _0x502ce7.addPage([70, 20]));
                          }
                        }
                      }
                      for (let _0x548bb7 = 0; _0x548bb7 < _0x48fb6f; _0x548bb7++) {
                        if (_0x548bb7 > 0) {
                          if (_0x13b97f == "myHbzx" || _0x13b97f == "myodp74" || _0x13b97f == "myod74" || _0x13b97f == "myodps74") {
                            _0x502ce7.addPage([70, 40]);
                          } else {
                            if (_0x13b97f == "mySpb" || _0x13b97f == "myodp76") {
                              _0x502ce7.addPage([70, 60]);
                            } else {
                              if (_0x13b97f == "myodp" || _0x13b97f == "myodps77" || _0x13b97f == "myodfz77") {
                                _0x502ce7.addPage([70, 70]);
                              } else {
                                _0x13b97f == "myodp100" || _0x13b97f == "myodps100" || _0x13b97f == "myodfz100" || _0x13b97f == "myodfzcz100" ? _0x502ce7.addPage([100, 100]) : _0x502ce7.addPage([70, 20]);
                              }
                            }
                          }
                        }
                        if (_0x13b97f == "myHbzx") {
                          _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a + 16.5, _0x59c04a + 3, _0x498936 + 6);
                        } else {
                          if (_0x13b97f == "mySpb" || _0x13b97f == "myodp76") {
                            _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a + 15.1, _0x59c04a + 3, _0x498936 + 28.5);
                            var _0x23b826 = _0x5b7ad8;
                            var _0x4880aa = zzsInfo[0];
                            var _0x3bc2f8 = zzsInfo[1];
                            var _0x548d2c = zzsInfo[2];
                            var _0x3dce26 = odInfo.repNameOd;
                            var _0x3d77a5 = odInfo.showAddressOd;
                            var _0x2c4271 = odInfo.repMailOd;
                            _0x502ce7.setFontSize(6);
                            const _0x2bf682 = _0x418061(_0x23b826, 12, 16, 1, 5.5, _0x502ce7);
                            let _0x45983b = 30.4;
                            _0x2bf682.forEach(_0x3f8072 => {
                              if (_0x3f8072.text === "") {
                                return;
                              }
                              _0x502ce7.setFontSize(_0x3f8072.fontSize);
                              _0x502ce7.text(_0x3f8072.text, 54.2, _0x45983b + parseInt(_0x3f8072.fontSize) / 5 - 1.9);
                              _0x45983b += 1.4;
                            });
                            _0x502ce7.setFontSize(6);
                            const _0x445934 = _0x418061(_0x4880aa, 50, 50, 1, 5.5, _0x502ce7);
                            let _0x3c49c6 = 21.1;
                            _0x445934.forEach(_0xab80fe => {
                              _0x502ce7.setFontSize(_0xab80fe.fontSize);
                              _0x502ce7.text(_0xab80fe.text, 17.5, _0x3c49c6 + parseInt(_0xab80fe.fontSize) / 5 - 1.9);
                              _0x3c49c6 += 1.4;
                            });
                            _0x502ce7.setFontSize(6);
                            const _0x4e1ae2 = _0x418061(_0x3bc2f8, 49, 49, 3, 5, _0x502ce7);
                            let _0x592996 = 24;
                            _0x4e1ae2.forEach(_0x3bec00 => {
                              _0x502ce7.setFontSize(_0x3bec00.fontSize);
                              _0x502ce7.text(_0x3bec00.text, 17.5, _0x592996 + parseInt(_0x3bec00.fontSize) / 5 - 2.1);
                              _0x592996 += 1.95;
                            });
                            _0x502ce7.setFontSize(5);
                            const _0xe04f2a = _0x418061(_0x548d2c, 36, 35, 1, 4.5, _0x502ce7);
                            let _0x665b05 = 30.4;
                            _0xe04f2a.forEach(_0x1d12e2 => {
                              _0x502ce7.setFontSize(_0x1d12e2.fontSize);
                              _0x502ce7.text(_0x1d12e2.text, 17.5, _0x665b05 + parseInt(_0x1d12e2.fontSize) / 5 - 1.9);
                              _0x665b05 += 1.4;
                            });
                            _0x502ce7.setFontSize(5);
                            const _0xb1cfac = _0x418061(_0x3dce26, 45, 40, 1, 5, _0x502ce7);
                            let _0x22eaec = 33.9;
                            _0xb1cfac.forEach(_0x943fd5 => {
                              _0x502ce7.setFontSize(_0x943fd5.fontSize);
                              _0x502ce7.text(_0x943fd5.text, 26.5, _0x22eaec + parseInt(_0x943fd5.fontSize) / 5 - 1.9);
                              _0x22eaec += 1.4;
                            });
                            _0x502ce7.setFontSize(6);
                            const _0x318bbc = _0x418061(_0x3d77a5, 41.3, 41.3, 3, 4.8, _0x502ce7);
                            let _0x534357 = 37.5;
                            _0x318bbc.forEach(_0x32c697 => {
                              _0x502ce7.setFontSize(_0x32c697.fontSize);
                              _0x502ce7.text(_0x32c697.text, 26.5, _0x534357 + parseInt(_0x32c697.fontSize) / 5 - 2.15);
                              _0x534357 += 1.9;
                            });
                            _0x502ce7.setFontSize(5);
                            const _0x2187f5 = _0x418061(_0x2c4271, 45, 40, 1, 5, _0x502ce7);
                            let _0x5838f0 = 43.1;
                            _0x2187f5.forEach(_0x3a42d0 => {
                              _0x502ce7.setFontSize(_0x3a42d0.fontSize);
                              _0x502ce7.text(_0x3a42d0.text, 26.5, _0x5838f0 + parseInt(_0x3a42d0.fontSize) / 5 - 1.9);
                              _0x5838f0 += 1.4;
                            });
                          } else {
                            if (_0x13b97f == "myodp" || _0x13b97f == "myodps77") {
                              _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a + 14.5, _0x59c04a + 2.5, _0x498936 + 39);
                              var _0x23b826 = _0x5b7ad8;
                              var _0x4880aa = zzsInfo[0];
                              var _0x3bc2f8 = zzsInfo[1];
                              var _0x548d2c = zzsInfo[2];
                              var _0x3dce26 = odInfo.repNameOd;
                              var _0x3d77a5 = odInfo.showAddressOd;
                              var _0x2c4271 = odInfo.repMailOd;
                              _0x502ce7.setFontSize(6);
                              const _0x3e0bec = _0x418061(_0x23b826, 12, 16, 1, 6, _0x502ce7);
                              let _0x4f3ae2 = 20.5;
                              _0x3e0bec.forEach(_0x24dbfd => {
                                if (_0x24dbfd.text === "") {
                                  return;
                                }
                                _0x502ce7.setFontSize(_0x24dbfd.fontSize);
                                _0x502ce7.text(_0x24dbfd.text, 33, _0x4f3ae2 + parseInt(_0x24dbfd.fontSize) / 5 - 1.9);
                                _0x4f3ae2 += 1.4;
                              });
                              _0x502ce7.setFontSize(6);
                              const _0x241655 = _0x418061(_0x4880aa, 51, 51, 1, 5, _0x502ce7);
                              let _0x443b08 = 23.8;
                              _0x241655.forEach(_0x253df8 => {
                                _0x502ce7.setFontSize(_0x253df8.fontSize);
                                _0x502ce7.text(_0x253df8.text, 16.5, _0x443b08 + parseInt(_0x253df8.fontSize) / 5 - 1.9);
                                _0x443b08 += 1.4;
                              });
                              _0x502ce7.setFontSize(6);
                              const _0x4a982b = _0x418061(_0x3bc2f8, 43, 43, 3, 4.8, _0x502ce7);
                              let _0xf939f1 = 26.9;
                              _0x4a982b.forEach(_0x238b87 => {
                                _0x502ce7.setFontSize(_0x238b87.fontSize);
                                _0x502ce7.text(_0x238b87.text, 24.5, _0xf939f1 + parseInt(_0x238b87.fontSize) / 5 - 2.2);
                                _0xf939f1 += 1.88;
                              });
                              _0x502ce7.setFontSize(5);
                              const _0x13cf37 = _0x418061(_0x548d2c, 45, 40, 1, 5, _0x502ce7);
                              let _0x23f5f4 = 32.8;
                              _0x13cf37.forEach(_0x1482c0 => {
                                _0x502ce7.setFontSize(_0x1482c0.fontSize);
                                _0x502ce7.text(_0x1482c0.text, 23.5, _0x23f5f4 + parseInt(_0x1482c0.fontSize) / 5 - 1.9);
                                _0x23f5f4 += 1.4;
                              });
                              _0x502ce7.setFontSize(5);
                              const _0x453c16 = _0x418061(_0x3dce26, 45, 40, 1, 5, _0x502ce7);
                              let _0x38f129 = 35.6;
                              _0x453c16.forEach(_0x5682e7 => {
                                _0x502ce7.setFontSize(_0x5682e7.fontSize);
                                _0x502ce7.text(_0x5682e7.text, 18.5, _0x38f129 + parseInt(_0x5682e7.fontSize) / 5 - 1.9);
                                _0x38f129 += 1.4;
                              });
                              _0x502ce7.setFontSize(6);
                              const _0x4126cc = _0x418061(_0x3d77a5, 43, 43, 3, 4.8, _0x502ce7);
                              let _0x26c1a0 = 38.1;
                              _0x4126cc.forEach(_0x4792ed => {
                                _0x502ce7.setFontSize(_0x4792ed.fontSize);
                                _0x502ce7.text(_0x4792ed.text, 20.5, _0x26c1a0 + parseInt(_0x4792ed.fontSize) / 5 - 1.9);
                                _0x26c1a0 += 1.7;
                              });
                              _0x502ce7.setFontSize(5);
                              const _0x58c01f = _0x418061(_0x2c4271, 45, 40, 1, 5, _0x502ce7);
                              let _0x4c9a1c = 44;
                              _0x58c01f.forEach(_0xf1469b => {
                                _0x502ce7.setFontSize(_0xf1469b.fontSize);
                                _0x502ce7.text(_0xf1469b.text, 18.5, _0x4c9a1c + parseInt(_0xf1469b.fontSize) / 5 - 1.9);
                                _0x4c9a1c += 1.4;
                              });
                            } else {
                              if (_0x13b97f == "myodfz77") {
                                _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a + 12, _0x59c04a + 2.5, _0x498936 + 40.5);
                                var _0x23b826 = _0x5b7ad8;
                                var _0x4880aa = zzsInfo[0];
                                var _0x3bc2f8 = zzsInfo[1];
                                var _0x548d2c = zzsInfo[2];
                                var _0x3dce26 = odInfo.repNameOd;
                                var _0x3d77a5 = odInfo.showAddressOd;
                                var _0x2c4271 = odInfo.repMailOd;
                                _0x502ce7.setFontSize(6);
                                const _0x4dbc19 = _0x418061(_0x23b826, 12, 16, 1, 5.5, _0x502ce7);
                                let _0x302370 = 27.8;
                                _0x4dbc19.forEach(_0x3ff8c8 => {
                                  if (_0x3ff8c8.text === "") {
                                    return;
                                  }
                                  _0x502ce7.setFontSize(_0x3ff8c8.fontSize);
                                  _0x502ce7.text(_0x3ff8c8.text, 54.2, _0x302370 + parseInt(_0x3ff8c8.fontSize) / 5 - 1.9);
                                  _0x302370 += 1.4;
                                });
                                _0x502ce7.setFontSize(6);
                                const _0xf3ce67 = _0x418061(_0x4880aa, 50, 50, 1, 5.5, _0x502ce7);
                                let _0x39234d = 18.2;
                                _0xf3ce67.forEach(_0x1b61e9 => {
                                  _0x502ce7.setFontSize(_0x1b61e9.fontSize);
                                  _0x502ce7.text(_0x1b61e9.text, 17.5, _0x39234d + parseInt(_0x1b61e9.fontSize) / 5 - 1.9);
                                  _0x39234d += 1.4;
                                });
                                _0x502ce7.setFontSize(6);
                                const _0x3e61c9 = _0x418061(_0x3bc2f8, 49, 49, 3, 5, _0x502ce7);
                                let _0x2c04d = 20.9;
                                _0x3e61c9.forEach(_0x14f157 => {
                                  _0x502ce7.setFontSize(_0x14f157.fontSize);
                                  _0x502ce7.text(_0x14f157.text, 17.5, _0x2c04d + parseInt(_0x14f157.fontSize) / 5 - 2.1);
                                  _0x2c04d += 2;
                                });
                                _0x502ce7.setFontSize(5);
                                const _0x286144 = _0x418061(_0x548d2c, 36, 35, 1, 4.5, _0x502ce7);
                                let _0x4c66cc = 27.8;
                                _0x286144.forEach(_0x3b1c73 => {
                                  _0x502ce7.setFontSize(_0x3b1c73.fontSize);
                                  _0x502ce7.text(_0x3b1c73.text, 17.5, _0x4c66cc + parseInt(_0x3b1c73.fontSize) / 5 - 1.9);
                                  _0x4c66cc += 1.4;
                                });
                                _0x502ce7.setFontSize(5);
                                const _0x26f6db = _0x418061(_0x3dce26, 45, 40, 1, 4.9, _0x502ce7);
                                let _0x3b2b90 = 31.3;
                                _0x26f6db.forEach(_0x3dd7a2 => {
                                  _0x502ce7.setFontSize(_0x3dd7a2.fontSize);
                                  _0x502ce7.text(_0x3dd7a2.text, 26.5, _0x3b2b90 + parseInt(_0x3dd7a2.fontSize) / 5 - 1.9);
                                  _0x3b2b90 += 1.4;
                                });
                                _0x502ce7.setFontSize(6);
                                const _0xf7c5d3 = _0x418061(_0x3d77a5, 42, 42, 3, 4.9, _0x502ce7);
                                let _0x288f4d = 34.3;
                                _0xf7c5d3.forEach(_0x17773a => {
                                  _0x502ce7.setFontSize(_0x17773a.fontSize);
                                  _0x502ce7.text(_0x17773a.text, 26.5, _0x288f4d + parseInt(_0x17773a.fontSize) / 5 - 2.1);
                                  _0x288f4d += 1.9;
                                });
                                _0x502ce7.setFontSize(5);
                                const _0x5b636a = _0x418061(_0x2c4271, 45, 40, 1, 5, _0x502ce7);
                                let _0x476d2a = 40.8;
                                _0x5b636a.forEach(_0x5e93d2 => {
                                  _0x502ce7.setFontSize(_0x5e93d2.fontSize);
                                  _0x502ce7.text(_0x5e93d2.text, 26.5, _0x476d2a + parseInt(_0x5e93d2.fontSize) / 5 - 1.9);
                                  _0x476d2a += 1.4;
                                });
                              } else {
                                if (_0x13b97f == "myodp74" || _0x13b97f == "myodps74") {
                                  _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a - 2, _0x59c04a + 2.5, _0x498936 + 25.5);
                                  var _0x23b826 = _0x5b7ad8;
                                  var _0x4880aa = zzsInfo[0];
                                  var _0x3bc2f8 = zzsInfo[1];
                                  var _0x548d2c = zzsInfo[2];
                                  var _0x3dce26 = odInfo.repNameOd;
                                  var _0x3d77a5 = odInfo.showAddressOd;
                                  var _0x2c4271 = odInfo.repMailOd;
                                  _0x502ce7.setFontSize(6);
                                  const _0x37aa15 = _0x418061(_0x23b826, 12, 16, 1, 5, _0x502ce7);
                                  let _0xe21221 = 12.5;
                                  _0x37aa15.forEach(_0x24af1f => {
                                    if (_0x24af1f.text === "") {
                                      return;
                                    }
                                    _0x502ce7.setFontSize(_0x24af1f.fontSize);
                                    _0x502ce7.text(_0x24af1f.text, 54.2, _0xe21221 + parseInt(_0x24af1f.fontSize) / 5 - 1.9);
                                    _0xe21221 += 1.4;
                                  });
                                  _0x502ce7.setFontSize(6);
                                  const _0x5ebd80 = _0x418061(_0x4880aa, 50, 50, 1, 5, _0x502ce7);
                                  let _0xdc2990 = 3.5;
                                  _0x5ebd80.forEach(_0x513fd3 => {
                                    _0x502ce7.setFontSize(_0x513fd3.fontSize);
                                    _0x502ce7.text(_0x513fd3.text, 17.5, _0xdc2990 + parseInt(_0x513fd3.fontSize) / 5 - 1.9);
                                    _0xdc2990 += 1.4;
                                  });
                                  _0x502ce7.setFontSize(6);
                                  const _0x3b8ec4 = _0x418061(_0x3bc2f8, 49, 49, 3, 4.9, _0x502ce7);
                                  let _0x511eb6 = 6.9;
                                  _0x3b8ec4.forEach(_0x16ba70 => {
                                    _0x502ce7.setFontSize(_0x16ba70.fontSize);
                                    _0x502ce7.text(_0x16ba70.text, 17.5, _0x511eb6 + parseInt(_0x16ba70.fontSize) / 5 - 2.15);
                                    _0x511eb6 += 1.65;
                                  });
                                  _0x502ce7.setFontSize(5);
                                  const _0x3cd5d1 = _0x418061(_0x548d2c, 36, 35, 1, 4.5, _0x502ce7);
                                  let _0x411283 = 12.5;
                                  _0x3cd5d1.forEach(_0x5638a8 => {
                                    _0x502ce7.setFontSize(_0x5638a8.fontSize);
                                    _0x502ce7.text(_0x5638a8.text, 17.5, _0x411283 + parseInt(_0x5638a8.fontSize) / 5 - 1.9);
                                    _0x411283 += 1.4;
                                  });
                                  _0x502ce7.setFontSize(5);
                                  const _0x49c203 = _0x418061(_0x3dce26, 45, 40, 1, 5, _0x502ce7);
                                  let _0x2ab683 = 15.5;
                                  _0x49c203.forEach(_0x3a0c68 => {
                                    _0x502ce7.setFontSize(_0x3a0c68.fontSize);
                                    _0x502ce7.text(_0x3a0c68.text, 26.5, _0x2ab683 + parseInt(_0x3a0c68.fontSize) / 5 - 1.9);
                                    _0x2ab683 += 1.4;
                                  });
                                  _0x502ce7.setFontSize(6);
                                  const _0x511eb5 = _0x418061(_0x3d77a5, 43, 43, 3, 4.8, _0x502ce7);
                                  let _0x1d83e1 = 19.3;
                                  _0x511eb5.forEach(_0x32b73f => {
                                    _0x502ce7.setFontSize(_0x32b73f.fontSize);
                                    _0x502ce7.text(_0x32b73f.text, 26.5, _0x1d83e1 + parseInt(_0x32b73f.fontSize) / 5 - 2.15);
                                    _0x1d83e1 += 1.5;
                                  });
                                  _0x502ce7.setFontSize(5);
                                  const _0x374b5a = _0x418061(_0x2c4271, 43, 43, 1, 5, _0x502ce7);
                                  let _0x23c304 = 24.5;
                                  _0x374b5a.forEach(_0x2a3cac => {
                                    _0x502ce7.setFontSize(_0x2a3cac.fontSize);
                                    _0x502ce7.text(_0x2a3cac.text, 26.5, _0x23c304 + parseInt(_0x2a3cac.fontSize) / 5 - 1.9);
                                    _0x23c304 += 1.4;
                                  });
                                } else {
                                  if (_0x13b97f == "myod74") {
                                    _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a + 12.1, _0x59c04a + 2.5, _0x498936 + 11.1);
                                    var _0x23b826 = _0x5b7ad8;
                                    var _0x4880aa = zzsInfo[0];
                                    var _0x3bc2f8 = zzsInfo[1];
                                    var _0x548d2c = zzsInfo[2];
                                    var _0x3dce26 = odInfo.repNameOd;
                                    var _0x3d77a5 = odInfo.showAddressOd;
                                    var _0x2c4271 = odInfo.repMailOd;
                                    _0x502ce7.setFontSize(6);
                                    const _0x439f28 = _0x418061(_0x23b826, 12, 16, 1, 5, _0x502ce7);
                                    let _0x2c4a69 = 27;
                                    _0x439f28.forEach(_0x3c736a => {
                                      if (_0x3c736a.text === "") {
                                        return;
                                      }
                                      _0x502ce7.setFontSize(_0x3c736a.fontSize);
                                      _0x502ce7.text(_0x3c736a.text, 54.2, _0x2c4a69 + parseInt(_0x3c736a.fontSize) / 5 - 1.9);
                                      _0x2c4a69 += 1.4;
                                    });
                                    _0x502ce7.setFontSize(6);
                                    const _0x5bb35e = _0x418061(_0x4880aa, 48, 48, 1, 5, _0x502ce7);
                                    let _0x21053e = 17.8;
                                    _0x5bb35e.forEach(_0x33a32c => {
                                      _0x502ce7.setFontSize(_0x33a32c.fontSize);
                                      _0x502ce7.text(_0x33a32c.text, 17.5, _0x21053e + parseInt(_0x33a32c.fontSize) / 5 - 1.9);
                                      _0x21053e += 1.4;
                                    });
                                    _0x502ce7.setFontSize(6);
                                    const _0x44f90f = _0x418061(_0x3bc2f8, 47, 47, 3, 4.9, _0x502ce7);
                                    let _0x4b4e20 = 20.8;
                                    _0x44f90f.forEach(_0x136ea4 => {
                                      _0x502ce7.setFontSize(_0x136ea4.fontSize);
                                      _0x502ce7.text(_0x136ea4.text, 17.5, _0x4b4e20 + parseInt(_0x136ea4.fontSize) / 5 - 2.1);
                                      _0x4b4e20 += 1.85;
                                    });
                                    _0x502ce7.setFontSize(5);
                                    const _0x302cd4 = _0x418061(_0x548d2c, 36, 35, 1, 5, _0x502ce7);
                                    let _0x23d938 = 26.7;
                                    _0x302cd4.forEach(_0x38f533 => {
                                      _0x502ce7.setFontSize(_0x38f533.fontSize);
                                      _0x502ce7.text(_0x38f533.text, 17.5, _0x23d938 + parseInt(_0x38f533.fontSize) / 5 - 1.9);
                                      _0x23d938 += 1.4;
                                    });
                                    _0x502ce7.setFontSize(5);
                                    const _0x36dbb3 = _0x418061(_0x3dce26, 45, 40, 1, 5, _0x502ce7);
                                    let _0x12e09d = 30.3;
                                    _0x36dbb3.forEach(_0x37790e => {
                                      _0x502ce7.setFontSize(_0x37790e.fontSize);
                                      _0x502ce7.text(_0x37790e.text, 26.5, _0x12e09d + parseInt(_0x37790e.fontSize) / 5 - 1.9);
                                      _0x12e09d += 1.4;
                                    });
                                    _0x502ce7.setFontSize(6);
                                    const _0x20a60e = _0x418061(_0x3d77a5, 43, 43, 3, 4.9, _0x502ce7);
                                    let _0x334c2c = 33.5;
                                    _0x20a60e.forEach(_0x81b543 => {
                                      _0x502ce7.setFontSize(_0x81b543.fontSize);
                                      _0x502ce7.text(_0x81b543.text, 26.5, _0x334c2c + parseInt(_0x81b543.fontSize) / 5 - 2.15);
                                      _0x334c2c += 1.78;
                                    });
                                    _0x502ce7.setFontSize(5);
                                    const _0x503046 = _0x418061(_0x2c4271, 43, 43, 1, 5, _0x502ce7);
                                    let _0x7ea35e = 39.4;
                                    _0x503046.forEach(_0x592756 => {
                                      _0x502ce7.setFontSize(_0x592756.fontSize);
                                      _0x502ce7.text(_0x592756.text, 26.5, _0x7ea35e + parseInt(_0x592756.fontSize) / 5 - 1.9);
                                      _0x7ea35e += 1.4;
                                    });
                                  } else {
                                    if (_0x13b97f == "mygys72") {
                                      _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a - 1.8, _0x59c04a + 2.5, _0x498936 + 4.5);
                                      var _0x4880aa = zzsInfo[0];
                                      var _0x3bc2f8 = zzsInfo[1];
                                      var _0x548d2c = zzsInfo[2];
                                      _0x502ce7.setFontSize(6);
                                      const _0x2909ac = _0x418061(_0x4880aa, 48, 48, 1, 5, _0x502ce7);
                                      let _0x55e9b3 = 4.8;
                                      _0x2909ac.forEach(_0x3569ea => {
                                        _0x502ce7.setFontSize(_0x3569ea.fontSize);
                                        _0x502ce7.text(_0x3569ea.text, 17.5, _0x55e9b3 + parseInt(_0x3569ea.fontSize) / 5 - 1.9);
                                        _0x55e9b3 += 1.4;
                                      });
                                      _0x502ce7.setFontSize(6);
                                      const _0x1954e3 = _0x418061(_0x3bc2f8, 47, 47, 3, 5.5, _0x502ce7);
                                      let _0x41ef18 = 9.2;
                                      _0x1954e3.forEach(_0xd47583 => {
                                        _0x502ce7.setFontSize(_0xd47583.fontSize);
                                        _0x502ce7.text(_0xd47583.text, 17.5, _0x41ef18 + parseInt(_0xd47583.fontSize) / 5 - 2.1);
                                        _0x41ef18 += 2;
                                      });
                                      _0x502ce7.setFontSize(5);
                                      const _0x4b99ea = _0x418061(_0x548d2c, 46, 45, 1, 5, _0x502ce7);
                                      let _0x13a0ed = 17.5;
                                      _0x4b99ea.forEach(_0x526dde => {
                                        _0x502ce7.setFontSize(_0x526dde.fontSize);
                                        _0x502ce7.text(_0x526dde.text, 17.5, _0x13a0ed + parseInt(_0x526dde.fontSize) / 5 - 1.9);
                                        _0x13a0ed += 1.4;
                                      });
                                    } else {
                                      if (_0x13b97f == "myod72") {
                                        var _0x23b826 = _0x5b7ad8;
                                        var _0x3dce26 = odInfo.repNameOd;
                                        var _0x3d77a5 = odInfo.showAddressOd;
                                        var _0x2c4271 = odInfo.repMailOd;
                                        _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 1, _0x7e0b2a - 0.5, _0x59c04a + 2.5, _0x498936 + 3);
                                        _0x502ce7.setFontSize(6);
                                        const _0x29cd08 = _0x418061(_0x23b826, 12, 16, 1, 5, _0x502ce7);
                                        let _0x3be1d8 = 4.5;
                                        _0x29cd08.forEach(_0x42019b => {
                                          if (_0x42019b.text === "") {
                                            return;
                                          }
                                          _0x502ce7.setFontSize(_0x42019b.fontSize);
                                          _0x502ce7.text(_0x42019b.text, 20.2, _0x3be1d8 + parseInt(_0x42019b.fontSize) / 5 - 1.9);
                                          _0x3be1d8 += 1.4;
                                        });
                                        _0x502ce7.setFontSize(5);
                                        const _0x24c85d = _0x418061(_0x3dce26, 45, 40, 1, 5, _0x502ce7);
                                        let _0x3b571a = 7.8;
                                        _0x24c85d.forEach(_0x4fbbd8 => {
                                          _0x502ce7.setFontSize(_0x4fbbd8.fontSize);
                                          _0x502ce7.text(_0x4fbbd8.text, 26.5, _0x3b571a + parseInt(_0x4fbbd8.fontSize) / 5 - 1.9);
                                          _0x3b571a += 1.4;
                                        });
                                        _0x502ce7.setFontSize(6);
                                        const _0x45a92a = _0x418061(_0x3d77a5, 45, 45, 3, 5, _0x502ce7);
                                        let _0x1061e5 = 12;
                                        _0x45a92a.forEach(_0x508541 => {
                                          _0x502ce7.setFontSize(_0x508541.fontSize);
                                          _0x502ce7.text(_0x508541.text, 26.5, _0x1061e5 + parseInt(_0x508541.fontSize) / 5 - 2.15);
                                          _0x1061e5 += 1.9;
                                        });
                                        _0x502ce7.setFontSize(5);
                                        const _0x4a5972 = _0x418061(_0x2c4271, 43, 43, 1, 5, _0x502ce7);
                                        let _0x24dd7e = 18.5;
                                        _0x4a5972.forEach(_0x15d3dc => {
                                          _0x502ce7.setFontSize(_0x15d3dc.fontSize);
                                          _0x502ce7.text(_0x15d3dc.text, 26.5, _0x24dd7e + parseInt(_0x15d3dc.fontSize) / 5 - 1.9);
                                          _0x24dd7e += 1.4;
                                        });
                                      } else {
                                        if (_0x13b97f == "myodp100" || _0x13b97f == "myodps100") {
                                          _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 2, _0x7e0b2a + 12, _0x59c04a + 34, _0x498936 + 70.5);
                                          var _0x23b826 = _0x5b7ad8;
                                          var _0x4880aa = zzsInfo[0];
                                          var _0x3bc2f8 = zzsInfo[1];
                                          var _0x548d2c = zzsInfo[2];
                                          var _0x3dce26 = odInfo.repNameOd;
                                          var _0x3d77a5 = odInfo.showAddressOd;
                                          var _0x2c4271 = odInfo.repMailOd;
                                          _0x502ce7.setFontSize(6);
                                          const _0x1a4f4d = _0x418061(_0x23b826, 20, 16, 1, 9, _0x502ce7);
                                          let _0x401b24 = 19.5;
                                          _0x1a4f4d.forEach(_0x37d46a => {
                                            if (_0x37d46a.text === "") {
                                              return;
                                            }
                                            _0x502ce7.setFontSize(_0x37d46a.fontSize);
                                            _0x502ce7.text(_0x37d46a.text, 45, _0x401b24 + parseInt(_0x37d46a.fontSize) / 5 - 1.9);
                                            _0x401b24 += 1.4;
                                          });
                                          _0x502ce7.setFontSize(6);
                                          const _0x5d89c2 = _0x418061(_0x4880aa, 75, 75, 1, 9, _0x502ce7);
                                          let _0x24cc55 = 24.8;
                                          _0x5d89c2.forEach(_0x215a4b => {
                                            _0x502ce7.setFontSize(_0x215a4b.fontSize);
                                            _0x502ce7.text(_0x215a4b.text, 23, _0x24cc55 + parseInt(_0x215a4b.fontSize) / 5 - 1.9);
                                            _0x24cc55 += 1.4;
                                          });
                                          _0x502ce7.setFontSize(6);
                                          const _0x3edff1 = _0x418061(_0x3bc2f8, 60, 90, 3, 7, _0x502ce7);
                                          let _0x3f2bfa = 30;
                                          _0x3edff1.forEach((_0x3efb74, _0x301fc1) => {
                                            _0x301fc1 === 0 ? (_0x502ce7.setFontSize(_0x3efb74.fontSize), _0x502ce7.text(_0x3efb74.text, 33, _0x3f2bfa + parseInt(_0x3efb74.fontSize) / 5 - 2.2), _0x3f2bfa += 2.75) : (_0x502ce7.setFontSize(_0x3efb74.fontSize), _0x502ce7.text(_0x3efb74.text, 3, _0x3f2bfa + parseInt(_0x3efb74.fontSize) / 5 - 2.2), _0x3f2bfa += 2.75);
                                          });
                                          _0x502ce7.setFontSize(5);
                                          const _0x333e0f = _0x418061(_0x548d2c, 70, 40, 1, 8, _0x502ce7);
                                          let _0x111150 = 39.2;
                                          _0x333e0f.forEach(_0x4a3611 => {
                                            _0x502ce7.setFontSize(_0x4a3611.fontSize);
                                            _0x502ce7.text(_0x4a3611.text, 33, _0x111150 + parseInt(_0x4a3611.fontSize) / 5 - 1.9);
                                            _0x111150 += 1.4;
                                          });
                                          _0x502ce7.setFontSize(5);
                                          const _0x78659f = _0x418061(_0x3dce26, 70, 40, 1, 8, _0x502ce7);
                                          let _0x539ab0 = 44.5;
                                          _0x78659f.forEach(_0x1d2c20 => {
                                            _0x502ce7.setFontSize(_0x1d2c20.fontSize);
                                            _0x502ce7.text(_0x1d2c20.text, 24.5, _0x539ab0 + parseInt(_0x1d2c20.fontSize) / 5 - 1.9);
                                            _0x539ab0 += 1.4;
                                          });
                                          _0x502ce7.setFontSize(6);
                                          const _0x251ac6 = _0x418061(_0x3d77a5, 66, 66, 3, 7, _0x502ce7);
                                          let _0x4480b5 = 48.1;
                                          _0x251ac6.forEach(_0x392efa => {
                                            _0x502ce7.setFontSize(_0x392efa.fontSize);
                                            _0x502ce7.text(_0x392efa.text, 27.8, _0x4480b5 + parseInt(_0x392efa.fontSize) / 5 - 1.9);
                                            _0x4480b5 += 2.75;
                                          });
                                          _0x502ce7.setFontSize(5);
                                          const _0xd74e30 = _0x418061(_0x2c4271, 70, 70, 1, 8, _0x502ce7);
                                          let _0x308f50 = 57.1;
                                          _0xd74e30.forEach(_0x17dfe0 => {
                                            _0x502ce7.setFontSize(_0x17dfe0.fontSize);
                                            _0x502ce7.text(_0x17dfe0.text, 27.5, _0x308f50 + parseInt(_0x17dfe0.fontSize) / 5 - 1.9);
                                            _0x308f50 += 1.4;
                                          });
                                        } else {
                                          if (_0x13b97f == "myodfz100") {
                                            _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 2, _0x7e0b2a + 12, _0x59c04a + 34, _0x498936 + 70.5);
                                            var _0x23b826 = _0x5b7ad8;
                                            var _0x4880aa = zzsInfo[0];
                                            var _0x3bc2f8 = zzsInfo[1];
                                            var _0x548d2c = zzsInfo[2];
                                            var _0x3dce26 = odInfo.repNameOd;
                                            var _0x3d77a5 = odInfo.showAddressOd;
                                            var _0x2c4271 = odInfo.repMailOd;
                                            _0x502ce7.setFontSize(6);
                                            const _0x346b3f = _0x418061(_0x23b826, 20, 16, 1, 8, _0x502ce7);
                                            let _0x3cd8f8 = 34.5;
                                            _0x346b3f.forEach(_0x32e4c3 => {
                                              if (_0x32e4c3.text === "") {
                                                return;
                                              }
                                              _0x502ce7.setFontSize(_0x32e4c3.fontSize);
                                              _0x502ce7.text(_0x32e4c3.text, 77, _0x3cd8f8 + parseInt(_0x32e4c3.fontSize) / 5 - 1.9);
                                              _0x3cd8f8 += 1.4;
                                            });
                                            _0x502ce7.setFontSize(6);
                                            const _0x16081c = _0x418061(_0x4880aa, 73, 50, 1, 8, _0x502ce7);
                                            let _0x710243 = 20.2;
                                            _0x16081c.forEach(_0x32b23c => {
                                              _0x502ce7.setFontSize(_0x32b23c.fontSize);
                                              _0x502ce7.text(_0x32b23c.text, 23.5, _0x710243 + parseInt(_0x32b23c.fontSize) / 5 - 1.9);
                                              _0x710243 += 1.4;
                                            });
                                            _0x502ce7.setFontSize(6);
                                            const _0x4f2864 = _0x418061(_0x3bc2f8, 73, 73, 3, 7, _0x502ce7);
                                            let _0x5688f5 = 24.2;
                                            _0x4f2864.forEach(_0x2de1a6 => {
                                              _0x502ce7.setFontSize(_0x2de1a6.fontSize);
                                              _0x502ce7.text(_0x2de1a6.text, 23.5, _0x5688f5 + parseInt(_0x2de1a6.fontSize) / 5 - 2.1);
                                              _0x5688f5 += 2.8;
                                            });
                                            _0x502ce7.setFontSize(5);
                                            const _0x16e524 = _0x418061(_0x548d2c, 40, 35, 1, 7, _0x502ce7);
                                            let _0x1a87f8 = 33.8;
                                            _0x16e524.forEach(_0x6eb445 => {
                                              _0x502ce7.setFontSize(_0x6eb445.fontSize);
                                              _0x502ce7.text(_0x6eb445.text, 23.5, _0x1a87f8 + parseInt(_0x6eb445.fontSize) / 5 - 1.9);
                                              _0x1a87f8 += 1.4;
                                            });
                                            _0x502ce7.setFontSize(5);
                                            const _0x1fb714 = _0x418061(_0x3dce26, 55, 40, 1, 7, _0x502ce7);
                                            let _0x25e69d = 40;
                                            _0x1fb714.forEach(_0x1cff40 => {
                                              _0x502ce7.setFontSize(_0x1cff40.fontSize);
                                              _0x502ce7.text(_0x1cff40.text, 36.8, _0x25e69d + parseInt(_0x1cff40.fontSize) / 5 - 1.9);
                                              _0x25e69d += 1.4;
                                            });
                                            _0x502ce7.setFontSize(6);
                                            const _0x122e08 = _0x418061(_0x3d77a5, 55, 55, 3, 7, _0x502ce7);
                                            let _0x388692 = 44.85;
                                            _0x122e08.forEach(_0x5ef3bd => {
                                              _0x502ce7.setFontSize(_0x5ef3bd.fontSize);
                                              _0x502ce7.text(_0x5ef3bd.text, 37, _0x388692 + parseInt(_0x5ef3bd.fontSize) / 5 - 2.1);
                                              _0x388692 += 2.8;
                                            });
                                            _0x502ce7.setFontSize(5);
                                            const _0xe74a7c = _0x418061(_0x2c4271, 55, 40, 1, 9, _0x502ce7);
                                            let _0x37a08d = 53.8;
                                            _0xe74a7c.forEach(_0x33163d => {
                                              _0x502ce7.setFontSize(_0x33163d.fontSize);
                                              _0x502ce7.text(_0x33163d.text, 36.8, _0x37a08d + parseInt(_0x33163d.fontSize) / 5 - 1.9);
                                              _0x37a08d += 1.4;
                                            });
                                          } else {
                                            if (_0x13b97f == "myodfzcz100") {
                                              function _0x59a4df(_0x2f1f09) {
                                                try {
                                                  _0x502ce7.addImage(base64UploadedBarcode, "JPEG", _0x1c3a75 - 2, _0x7e0b2a, _0x59c04a + 34, _0x498936 + 82.5);
                                                  var _0x43f52d = _0x5b7ad8;
                                                  var _0x4d2aab = zzsInfo[0];
                                                  var _0x353a6b = zzsInfo[1];
                                                  var _0xfe35a2 = zzsInfo[2];
                                                  var _0x535c96 = odInfo.repNameOd;
                                                  var _0x2dafc9 = odInfo.showAddressOd;
                                                  var _0x390c8b = odInfo.repMailOd;
                                                  _0x2f1f09.length < 5 && (_0x2f1f09 = "无材质属性/跨店");
                                                  _0x502ce7.setFontSize(6);
                                                  const _0x3f908f = _0x418061(_0x2f1f09, 25, 40, 3, 6.5, _0x502ce7, "属性");
                                                  let _0x426309 = 4.2;
                                                  _0x3f908f.forEach((_0x1e2a2c, _0xbef877) => {
                                                    if (_0x1e2a2c.text === "") {
                                                      return;
                                                    }
                                                    _0xbef877 === 0 ? (_0x502ce7.setFontSize(_0x1e2a2c.fontSize), _0x502ce7.text(_0x1e2a2c.text, 68, _0x426309 + parseInt(_0x1e2a2c.fontSize) / 5 - 1.5), _0x426309 += 2.5) : (_0x502ce7.setFontSize(_0x1e2a2c.fontSize), _0x502ce7.text(_0x1e2a2c.text, 52.5, _0x426309 + parseInt(_0x1e2a2c.fontSize) / 5 - 1.5), _0x426309 += 2.5);
                                                  });
                                                  _0x502ce7.setFontSize(6);
                                                  const _0x2fa637 = _0x418061(_0x43f52d, 20, 16, 1, 8, _0x502ce7);
                                                  let _0x3ea084 = 34.5;
                                                  _0x2fa637.forEach(_0x2dbcf8 => {
                                                    if (_0x2dbcf8.text === "") {
                                                      return;
                                                    }
                                                    _0x502ce7.setFontSize(_0x2dbcf8.fontSize);
                                                    _0x502ce7.text(_0x2dbcf8.text, 77, _0x3ea084 + parseInt(_0x2dbcf8.fontSize) / 5 - 1.9);
                                                    _0x3ea084 += 1.4;
                                                  });
                                                  _0x502ce7.setFontSize(6);
                                                  const _0x551931 = _0x418061(_0x4d2aab, 73, 50, 1, 8, _0x502ce7);
                                                  let _0x250cb0 = 20;
                                                  _0x551931.forEach(_0x2d5258 => {
                                                    _0x502ce7.setFontSize(_0x2d5258.fontSize);
                                                    _0x502ce7.text(_0x2d5258.text, 23.5, _0x250cb0 + parseInt(_0x2d5258.fontSize) / 5 - 1.9);
                                                    _0x250cb0 += 1.4;
                                                  });
                                                  _0x502ce7.setFontSize(6);
                                                  const _0x23d275 = _0x418061(_0x353a6b, 73, 73, 3, 7, _0x502ce7);
                                                  let _0x19c551 = 24.55;
                                                  _0x23d275.forEach(_0x3fa526 => {
                                                    _0x502ce7.setFontSize(_0x3fa526.fontSize);
                                                    _0x502ce7.text(_0x3fa526.text, 23.5, _0x19c551 + parseInt(_0x3fa526.fontSize) / 5 - 2.1);
                                                    _0x19c551 += 2.9;
                                                  });
                                                  _0x502ce7.setFontSize(5);
                                                  const _0x10b63f = _0x418061(_0xfe35a2, 40, 35, 1, 7, _0x502ce7);
                                                  let _0x20782e = 34.5;
                                                  _0x10b63f.forEach(_0x2c2542 => {
                                                    _0x502ce7.setFontSize(_0x2c2542.fontSize);
                                                    _0x502ce7.text(_0x2c2542.text, 23.5, _0x20782e + parseInt(_0x2c2542.fontSize) / 5 - 1.9);
                                                    _0x20782e += 1.4;
                                                  });
                                                  _0x502ce7.setFontSize(5);
                                                  const _0x40b7ac = _0x418061(_0x535c96, 55, 40, 1, 7, _0x502ce7);
                                                  let _0x25af79 = 40;
                                                  _0x40b7ac.forEach(_0x3ebb82 => {
                                                    _0x502ce7.setFontSize(_0x3ebb82.fontSize);
                                                    _0x502ce7.text(_0x3ebb82.text, 37, _0x25af79 + parseInt(_0x3ebb82.fontSize) / 5 - 1.9);
                                                    _0x25af79 += 1.4;
                                                  });
                                                  _0x502ce7.setFontSize(6);
                                                  const _0x5d6b21 = _0x418061(_0x2dafc9, 55, 55, 3, 7, _0x502ce7);
                                                  let _0x4de2c0 = 44.85;
                                                  _0x5d6b21.forEach(_0x530db9 => {
                                                    _0x502ce7.setFontSize(_0x530db9.fontSize);
                                                    _0x502ce7.text(_0x530db9.text, 37, _0x4de2c0 + parseInt(_0x530db9.fontSize) / 5 - 2.1);
                                                    _0x4de2c0 += 2.8;
                                                  });
                                                  _0x502ce7.setFontSize(5);
                                                  const _0x471a8f = _0x418061(_0x390c8b, 55, 40, 1, 9, _0x502ce7);
                                                  let _0x3f39e4 = 54.2;
                                                  _0x471a8f.forEach(_0x17a3c2 => {
                                                    _0x502ce7.setFontSize(_0x17a3c2.fontSize);
                                                    _0x502ce7.text(_0x17a3c2.text, 37, _0x3f39e4 + parseInt(_0x17a3c2.fontSize) / 5 - 1.9);
                                                    _0x3f39e4 += 1.4;
                                                  });
                                                } catch (_0x1354c6) {
                                                  console.log(_0x1354c6);
                                                }
                                              }
                                              _0x1c1e76 = new Promise(_0x3ee9e9 => {
                                                if (Array.isArray(allAttrubutesDict[_0x3eb281[6]])) {
                                                  var _0xfd2cb8 = allAttrubutesDict[_0x3eb281[6] + ""].map(_0x5db5d6 => _0x5db5d6.join(" ")).join("  ");
                                                  _0x59a4df(_0xfd2cb8);
                                                  _0x3ee9e9();
                                                } else {
                                                  chrome.runtime.sendMessage({
                                                    type: "getAllSkcInfo",
                                                    mallid: _0x5585b9,
                                                    skcList: [_0x3eb281[6]]
                                                  }, async _0x1e664d => {
                                                    allAttrubutesDict = Object.assign(allAttrubutesDict, _0x1e664d.data);
                                                    var _0x474877 = _0x1e664d.data[_0x3eb281[6]] ? _0x1e664d.data[_0x3eb281[6]].map(_0x270138 => _0x270138.join(" ")).join("  ") : "";
                                                    _0x59a4df(_0x474877);
                                                    _0x3ee9e9();
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
                        _0x1c1e76 && (await _0x1c1e76);
                        if (_0x13b97f == "myod74" || _0x13b97f == "myodfz77") {
                          const _0x4e0633 = document.createElement("canvas");
                          _0x4e0633.width = _0x59c04a;
                          _0x4e0633.height = _0x498936;
                          JsBarcode(_0x4e0633, _0x299626, {
                            format: "CODE128",
                            lineColor: "#000",
                            width: 1,
                            height: 20,
                            displayValue: false
                          });
                          const _0x33f951 = _0x4e0633.toDataURL("image/png");
                          if (_0x4c30e5.length == 0) {
                            _0x502ce7.addImage(_0x33f951, "PNG", _0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a, _0x498936 - 2.8);
                            _0x502ce7.rect(_0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a, _0x498936 - 2.5);
                            _0x502ce7.setFontSize(5);
                            _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2);
                            _0x502ce7.setFontSize(5.5);
                            _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b), _0x7e0b2a + 2);
                            _0x502ce7.setFontSize(6);
                            _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 4);
                            _0x502ce7.setFontSize(6);
                            _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China"), _0x7e0b2a + _0x498936 - 4);
                          } else {
                            if (_0x4c30e5.length == 1) {
                              _0x502ce7.addImage(_0x33f951, "PNG", _0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a - 16.5, _0x498936 - 2.8);
                              _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 50, _0x7e0b2a - 0.5, 13.5, 13.5);
                              _0x502ce7.rect(_0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a - 16.5, _0x498936 - 2.5);
                              _0x502ce7.setFontSize(5);
                              _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2);
                              _0x173c2b.length > 20 ? _0x502ce7.setFontSize(4.5) : _0x502ce7.setFontSize(5.5);
                              _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b) - 16.5, _0x7e0b2a + 2);
                              _0x502ce7.setFontSize(6);
                              _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 4);
                              _0x502ce7.setFontSize(6);
                              _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China") - 16.5, _0x7e0b2a + _0x498936 - 4);
                            } else {
                              _0x4c30e5.length == 2 && (_0x502ce7.addImage(_0x33f951, "PNG", _0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a - 26, _0x498936 - 2.8), _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 41, _0x7e0b2a - 0.4, 13, 13), _0x502ce7.addImage(_0x3b94b2, "PNG", _0x1c3a75 + 54, _0x7e0b2a - 0.55, 13, 13), _0x502ce7.rect(_0x1c3a75, _0x7e0b2a - 0.5, _0x59c04a - 26, _0x498936 - 2.5), _0x502ce7.setFontSize(5), _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2), _0x173c2b.length > 20 ? _0x502ce7.setFontSize(4) : _0x502ce7.setFontSize(5.5), _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b) - 26, _0x7e0b2a + 2), _0x502ce7.setFontSize(6), _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 4), _0x502ce7.setFontSize(6), _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China") - 26, _0x7e0b2a + _0x498936 - 4));
                            }
                          }
                        } else {
                          if (_0x13b97f == "myodfzcz100") {
                            const _0x401e47 = document.createElement("canvas");
                            _0x401e47.width = _0x59c04a;
                            _0x401e47.height = _0x498936;
                            JsBarcode(_0x401e47, _0x299626, {
                              format: "CODE128",
                              lineColor: "#000",
                              width: 1,
                              height: 20,
                              displayValue: false
                            });
                            const _0x56a3ca = _0x401e47.toDataURL("image/png");
                            _0x502ce7.addImage(_0x56a3ca, "PNG", _0x1c3a75, _0x7e0b2a, _0x59c04a - 19, _0x498936 - 2.8);
                            _0x502ce7.rect(_0x1c3a75, _0x7e0b2a, _0x59c04a - 19, _0x498936 - 2);
                            _0x502ce7.setFontSize(5);
                            _0x502ce7.text(_0x475ddf, _0x1c3a75 + 2, _0x7e0b2a + 2.3);
                            _0x502ce7.setFontSize(5);
                            _0x502ce7.text(_0x173c2b, 45.5 - _0x502ce7.getTextWidth(_0x173c2b), _0x7e0b2a + 2.3);
                            _0x502ce7.setFontSize(5.5);
                            _0x502ce7.text(_0x5a4473, _0x1c3a75 + 2, _0x7e0b2a + _0x498936 - 3.5);
                            _0x502ce7.setFontSize(5.5);
                            _0x502ce7.text("Made In China", 45.1 - _0x502ce7.getTextWidth("Made In China"), _0x7e0b2a + _0x498936 - 3.5);
                            if (_0x4c30e5.length == 1) {
                              _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 3, _0x7e0b2a + 56.2, 14, 14);
                            } else {
                              _0x4c30e5.length == 2 && (_0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 0.2, _0x7e0b2a + 57.5, 11, 11), _0x502ce7.addImage(_0x3b94b2, "PNG", _0x1c3a75 + 11.1, _0x7e0b2a + 57.5, 11, 11));
                            }
                          } else {
                            if (_0x13b97f == "myodfz100" || _0x13b97f == "myodp100" || _0x13b97f == "myodps100") {
                              const _0x5c77a6 = document.createElement("canvas");
                              _0x5c77a6.width = _0x59c04a;
                              _0x5c77a6.height = _0x498936;
                              JsBarcode(_0x5c77a6, _0x299626, {
                                format: "CODE128",
                                lineColor: "#000",
                                width: 1,
                                height: 20,
                                displayValue: false
                              });
                              const _0x33b659 = _0x5c77a6.toDataURL("image/png");
                              if (_0x4c30e5.length == 0) {
                                _0x502ce7.addImage(_0x33b659, "PNG", _0x1c3a75 + 10, _0x7e0b2a, _0x59c04a + 10, _0x498936 - 2.8);
                                _0x502ce7.rect(_0x1c3a75 + 10, _0x7e0b2a, _0x59c04a + 10, _0x498936 - 2);
                                _0x502ce7.setFontSize(5);
                                _0x502ce7.text(_0x475ddf, _0x1c3a75 + 13, _0x7e0b2a + 2.3);
                                _0x502ce7.setFontSize(5.5);
                                _0x502ce7.text(_0x173c2b, 85.5 - _0x502ce7.getTextWidth(_0x173c2b), _0x7e0b2a + 2.3);
                                _0x502ce7.setFontSize(6);
                                _0x502ce7.text(_0x5a4473, _0x1c3a75 + 13, _0x7e0b2a + _0x498936 - 3.5);
                                _0x502ce7.setFontSize(6);
                                _0x502ce7.text("Made In China", 85.1 - _0x502ce7.getTextWidth("Made In China"), _0x7e0b2a + _0x498936 - 3.5);
                              } else {
                                if (_0x4c30e5.length == 1) {
                                  _0x502ce7.addImage(_0x33b659, "PNG", _0x1c3a75 + 1, _0x7e0b2a, _0x59c04a + 10, _0x498936 - 2.8);
                                  _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 80, _0x7e0b2a, 14, 14);
                                  _0x502ce7.rect(_0x1c3a75 + 1, _0x7e0b2a, _0x59c04a + 10, _0x498936 - 2);
                                  _0x502ce7.setFontSize(5);
                                  _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2.3);
                                  _0x502ce7.setFontSize(5.5);
                                  _0x502ce7.text(_0x173c2b, 75.5 - _0x502ce7.getTextWidth(_0x173c2b), _0x7e0b2a + 2.3);
                                  _0x502ce7.setFontSize(6);
                                  _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 3.5);
                                  _0x502ce7.setFontSize(6);
                                  _0x502ce7.text("Made In China", 75.1 - _0x502ce7.getTextWidth("Made In China"), _0x7e0b2a + _0x498936 - 3.5);
                                } else {
                                  _0x4c30e5.length == 2 && (_0x502ce7.addImage(_0x33b659, "PNG", _0x1c3a75 + 1, _0x7e0b2a, _0x59c04a + 1, _0x498936 - 2.8), _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 68.5, _0x7e0b2a, 14, 14), _0x502ce7.addImage(_0x3b94b2, "PNG", _0x1c3a75 + 83, _0x7e0b2a, 14, 14), _0x502ce7.rect(_0x1c3a75 + 1, _0x7e0b2a, _0x59c04a + 1, _0x498936 - 2), _0x502ce7.setFontSize(5), _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2.3), _0x502ce7.setFontSize(5.5), _0x502ce7.text(_0x173c2b, 75.5 - _0x502ce7.getTextWidth(_0x173c2b) - 9, _0x7e0b2a + 2.3), _0x502ce7.setFontSize(6), _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 3.5), _0x502ce7.setFontSize(6), _0x502ce7.text("Made In China", 75.1 - _0x502ce7.getTextWidth("Made In China") - 9, _0x7e0b2a + _0x498936 - 3.5));
                                }
                              }
                            } else {
                              if (_0x13b97f != "myodp74" && _0x13b97f != "myodps74" && _0x13b97f != "myod72" && _0x13b97f != "mygys72") {
                                const _0x5e43c7 = document.createElement("canvas");
                                _0x5e43c7.width = _0x59c04a;
                                _0x5e43c7.height = _0x498936;
                                JsBarcode(_0x5e43c7, _0x299626, {
                                  format: "CODE128",
                                  lineColor: "#000",
                                  width: 1,
                                  height: 20,
                                  displayValue: false
                                });
                                const _0x40be42 = _0x5e43c7.toDataURL("image/png");
                                if (_0x4c30e5.length == 0) {
                                  _0x502ce7.addImage(_0x40be42, "PNG", _0x1c3a75, _0x7e0b2a, _0x59c04a, _0x498936);
                                  _0x502ce7.rect(_0x1c3a75, _0x7e0b2a, _0x59c04a, _0x498936);
                                  _0x502ce7.setFontSize(5);
                                  _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2.5);
                                  _0x502ce7.setFontSize(5.5);
                                  _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b), _0x7e0b2a + 2.5);
                                  _0x502ce7.setFontSize(6);
                                  _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 1.2);
                                  _0x502ce7.setFontSize(6);
                                  _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China"), _0x7e0b2a + _0x498936 - 1.2);
                                } else {
                                  if (_0x4c30e5.length == 1) {
                                    _0x502ce7.addImage(_0x40be42, "PNG", _0x1c3a75, _0x7e0b2a, _0x59c04a - 16.5, _0x498936);
                                    _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 50, _0x7e0b2a, 15, 15);
                                    _0x502ce7.rect(_0x1c3a75, _0x7e0b2a, _0x59c04a - 16.5, _0x498936);
                                    _0x502ce7.setFontSize(5);
                                    _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2.5);
                                    _0x173c2b.length > 20 ? _0x502ce7.setFontSize(4.5) : _0x502ce7.setFontSize(5.5);
                                    _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b) - 16.5, _0x7e0b2a + 2.5);
                                    _0x502ce7.setFontSize(6);
                                    _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 1.2);
                                    _0x502ce7.setFontSize(6);
                                    _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China") - 16.5, _0x7e0b2a + _0x498936 - 1.2);
                                  } else {
                                    _0x4c30e5.length == 2 && (_0x502ce7.addImage(_0x40be42, "PNG", _0x1c3a75, _0x7e0b2a, _0x59c04a - 26, _0x498936), _0x502ce7.addImage(_0x1c96c, "PNG", _0x1c3a75 + 40.5, _0x7e0b2a + 0.6, 13.5, 13.5), _0x502ce7.addImage(_0x3b94b2, "PNG", _0x1c3a75 + 53.8, _0x7e0b2a + 0.8, 13.5, 13.5), _0x502ce7.rect(_0x1c3a75, _0x7e0b2a, _0x59c04a - 26, _0x498936), _0x502ce7.setFontSize(5), _0x502ce7.text(_0x475ddf, _0x1c3a75 + 3, _0x7e0b2a + 2.5), _0x173c2b.length > 20 ? _0x502ce7.setFontSize(4) : _0x502ce7.setFontSize(5.5), _0x502ce7.text(_0x173c2b, 64.5 - _0x502ce7.getTextWidth(_0x173c2b) - 26, _0x7e0b2a + 2.5), _0x502ce7.setFontSize(6), _0x502ce7.text(_0x5a4473, _0x1c3a75 + 3, _0x7e0b2a + _0x498936 - 1.2), _0x502ce7.setFontSize(6), _0x502ce7.text("Made In China", 64.1 - _0x502ce7.getTextWidth("Made In China") - 26, _0x7e0b2a + _0x498936 - 1.2));
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (_0x548bb7 === _0x48fb6f - 1 && !_0x1872b3) {
                          if (_0x13b97f == "myHbzx" || _0x13b97f == "myodp74" || _0x13b97f == "myod74" || _0x13b97f == "myodps74") {
                            _0x502ce7.addPage([70, 40]);
                          } else {
                            if (_0x13b97f == "mySpb" || _0x13b97f == "myodp76") {
                              _0x502ce7.addPage([70, 60]);
                            } else {
                              if (_0x13b97f == "myodp" || _0x13b97f == "myodps77" || _0x13b97f == "myodfz77") {
                                _0x502ce7.addPage([70, 70]);
                              } else {
                                _0x13b97f == "myodp100" || _0x13b97f == "myodps100" || _0x13b97f == "myodfz100" || _0x13b97f == "myodfzcz100" ? _0x502ce7.addPage([100, 100]) : _0x502ce7.addPage([70, 20]);
                              }
                            }
                          }
                        }
                      }
                    }
                    _0x502ce7.setProperties({
                      title: "自定义文件名"
                    });
                    _0x502ce7.autoPrint();
                    const _0x5a689f = _0x502ce7.output("blob");
                    const _0x4831d9 = document.createElement("iframe");
                    _0x4831d9.style.position = "absolute";
                    _0x4831d9.style.width = "0px";
                    _0x4831d9.style.height = "0px";
                    _0x4831d9.style.border = "none";
                    _0x4831d9.className = "print-iframe";
                    document.body.appendChild(_0x4831d9);
                    const _0xa8da85 = URL.createObjectURL(_0x5a689f);
                    _0x4831d9.src = _0xa8da85;
                    _0x4831d9.onload = function () {
                      setTimeout(function () {
                        _0x4831d9.contentWindow.focus();
                        _0x4831d9.contentWindow.print();
                        document.querySelector(".tooltipprint") ? document.querySelector(".tooltipprint").remove() : "";
                        document.querySelector("#modal") ? document.querySelector("#modal").remove() : "";
                        document.querySelectorAll(".print-iframe").length > 1 ? document.querySelector(".print-iframe").remove() : "";
                        URL.revokeObjectURL(_0xa8da85);
                      }, 1000);
                    };
                    closePrintShowBox();
                  } catch (_0x74e2bd) {
                    console.log(_0x74e2bd);
                  }
                } else {
                  _0x3eb125.data.on == "yb" && showCustomAlert("当前为初创版，请联系小助理升级！", "常规帮助");
                }
              } else {
                if (_0x3eb125.data.shopState == "可绑") {
                  var _0x2fd430 = document.querySelector("[class*=\"elli_outerWrapper\"]").innerText;
                  showCustomAlert("是否绑定当前店铺使用<br>" + _0x2fd430, "可绑定帮助", _0x5585b9, _0x26bf4d, _0x2fd430);
                } else {
                  if (_0x3eb125.data.shopState == "超绑") {
                    showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                  } else {
                    _0x3eb125.data.shopState == "绑满" && showCustomAlert("绑定店铺数已达到上限，请联系小助手升级", "常规帮助");
                  }
                }
              }
            }
            function _0x3f9f19(_0x5d3729, _0x54fe73, _0x4d09c1) {
              var _0x24d997 = _0x54fe73.odgysAll;
              var _0x340319 = _0x54fe73.odsAll;
              var _0x286199 = _0x2b82fa[0][7];
              var _0x3173c6 = _0x2b82fa[0][6];
              const _0x5af1d1 = document.querySelectorAll("[class=\"printTooltip show\"]");
              _0x5af1d1.forEach(_0x38fee3 => {
                _0x38fee3.style.display = "none";
                _0x38fee3.remove();
              });
              zzsInfo = ["请选择", "请选择", "请选择"];
              const _0xc71738 = document.createElement("div");
              _0xc71738.id = "print-photo-modal";
              _0xc71738.className = "print-photo-modal";
              const _0x59e9be = document.createElement("div");
              _0x59e9be.className = "print-photo-modal-content";
              const _0x2bd5d6 = document.createElement("span");
              _0x2bd5d6.id = "print-photo-closeModal";
              _0x2bd5d6.className = "print-photo-close";
              _0x2bd5d6.innerHTML = "&times;";
              _0x2bd5d6.onclick = _0x1390a4;
              const _0x2a6cb1 = document.createElement("div");
              _0x2a6cb1.className = "print-photo-modal-header";
              const _0x2a8fe1 = document.createElement("h2");
              _0x2a8fe1.innerText = _0x5d3729;
              _0x2a6cb1.appendChild(_0x2a8fe1);
              const _0x33dd77 = document.createElement("div");
              _0x33dd77.className = "print-photo-modal-body";
              const _0x2be7da = document.createElement("div");
              _0x2be7da.className = "print-photo-left-panel";
              const _0x258776 = document.createElement("img");
              _0x258776.src = base64UploadedBarcode;
              _0x258776.alt = "图片";
              _0x258776.style.maxWidth = "100%";
              _0x2be7da.appendChild(_0x258776);
              const _0x84b5c8 = document.createElement("form");
              _0x84b5c8.className = "print-photo-right-panel";
              const _0xdbaf94 = document.createElement("div");
              _0xdbaf94.id = "print-photo-inputContainer";
              _0x84b5c8.appendChild(_0xdbaf94);
              _0x4d09c1 != "myod72" && (_0x24d997.forEach(_0x2b8184 => {
                const _0x2c2e7d = document.createElement("div");
                _0x2c2e7d.className = "print-photo-input-wrapper";
                const _0xe4355c = document.createElement("label");
                _0xe4355c.innerText = _0x2b8184[0];
                _0xe4355c.className = "print-photo-input-label";
                const _0x5ed740 = document.createElement("div");
                _0x5ed740.className = "print-photo-custom-select";
                const _0x3604ef = document.createElement("div");
                _0x3604ef.className = "print-photo-selected-option";
                _0x3604ef.innerText = "请选择";
                const _0x31ece2 = document.createElement("div");
                _0x31ece2.className = "print-photo-options-wrapper";
                const _0x337e14 = _0x2b8184[1];
                _0x337e14.forEach(_0x422c2b => {
                  var _0x462944 = _0x422c2b[0] + "\n" + _0x422c2b[1];
                  const _0x42af31 = document.createElement("div");
                  _0x42af31.className = "print-photo-option";
                  _0x42af31.innerText = _0x462944;
                  chrome.storage.local.get("printCodeInfoText", function (_0x5732ad) {
                    _0x5732ad.printCodeInfoText && _0x462944 === _0x5732ad.printCodeInfoText && (_0x3604ef.innerText = _0x462944, zzsInfo = _0x422c2b);
                  });
                  _0x42af31.addEventListener("click", () => {
                    _0x3604ef.innerText = _0x462944;
                    zzsInfo = _0x422c2b;
                    chrome.storage.local.set({
                      printCodeInfoText: _0x462944
                    });
                    _0x31ece2.style.display = "none";
                  });
                  _0x31ece2.appendChild(_0x42af31);
                });
                _0x5ed740.appendChild(_0x3604ef);
                _0x5ed740.appendChild(_0x31ece2);
                _0x2c2e7d.appendChild(_0xe4355c);
                _0x2c2e7d.appendChild(_0x5ed740);
                _0xdbaf94.appendChild(_0x2c2e7d);
                _0x3604ef.addEventListener("click", () => {
                  _0x31ece2.style.display = _0x31ece2.style.display === "block" ? "none" : "block";
                });
                document.addEventListener("click", _0x17643 => {
                  !_0x5ed740.contains(_0x17643.target) && (_0x31ece2.style.display = "none");
                });
              }), _0x340319[0][1].length > 1 && _0x340319.forEach(_0x53b29d => {
                const _0x391a79 = document.createElement("div");
                _0x391a79.className = "print-photo-input-wrapper";
                const _0x500399 = document.createElement("label");
                _0x500399.innerText = _0x53b29d[0];
                _0x500399.className = "print-photo-input-label";
                const _0xc474b = document.createElement("div");
                _0xc474b.className = "print-photo-custom-select";
                const _0x440838 = document.createElement("div");
                _0x440838.className = "print-photo-selected-option";
                _0x440838.innerText = "请选择";
                const _0xaef4af = document.createElement("div");
                _0xaef4af.className = "print-photo-options-wrapper";
                const _0x15c776 = _0x53b29d[1];
                _0x15c776.forEach(_0xfe64e2 => {
                  var _0x51bc4f = _0xfe64e2[0] + "\n" + _0xfe64e2[1];
                  const _0x4a2098 = document.createElement("div");
                  _0x4a2098.className = "print-photo-option";
                  _0x4a2098.innerText = _0x51bc4f;
                  _0x4a2098.addEventListener("click", () => {
                    _0x440838.innerText = _0x51bc4f;
                    odInfo.repMailOd = _0xfe64e2[2];
                    odInfo.repNameOd = _0xfe64e2[0];
                    odInfo.showAddressOd = _0xfe64e2[1];
                    _0xaef4af.style.display = "none";
                  });
                  _0xaef4af.appendChild(_0x4a2098);
                });
                _0xc474b.appendChild(_0x440838);
                _0xc474b.appendChild(_0xaef4af);
                _0x391a79.appendChild(_0x500399);
                _0x391a79.appendChild(_0xc474b);
                _0xdbaf94.appendChild(_0x391a79);
                _0x440838.addEventListener("click", () => {
                  _0xaef4af.style.display = _0xaef4af.style.display === "block" ? "none" : "block";
                });
                document.addEventListener("click", _0x277a26 => {
                  !_0xc474b.contains(_0x277a26.target) && (_0xaef4af.style.display = "none");
                });
              }));
              var _0x50a0a6 = ["识别码"];
              shibiemaDict[_0x286199] ? _0x50a0a6 = _0x50a0a6.concat(shibiemaDict[_0x286199]) : currentPageInfo(_0x5585b9, _0x286199, _0x3173c6).then(_0x4018d4 => {
                _0x50a0a6 = _0x50a0a6.concat(_0x4018d4);
                shibiemaDict[_0x286199] = _0x4018d4;
              });
              if (_0x4d09c1 != "mygys72") {
                const _0xc797c0 = document.createElement("div");
                _0xc797c0.className = "print-photo-radio-container";
                _0xc797c0.style.display = "flex";
                _0xc797c0.style.padding = "8px";
                _0xc797c0.style.marginLeft = "5px";
                const _0x162fb3 = document.createElement("input");
                _0x162fb3.type = "radio";
                _0x162fb3.name = "options";
                _0x162fb3.id = "option1";
                _0x162fb3.value = "option1";
                _0x162fb3.checked = true;
                _0x162fb3.style.marginRight = "0px";
                const _0x39498a = document.createElement("label");
                _0x39498a.htmlFor = "option1";
                _0x39498a.innerText = "SKC";
                const _0x2f0895 = document.createElement("input");
                _0x2f0895.type = "radio";
                _0x2f0895.name = "options";
                _0x2f0895.id = "option2";
                _0x2f0895.value = "option2";
                _0x2f0895.style.marginRight = "0px";
                _0x2f0895.style.marginLeft = "10px";
                const _0x1858c5 = document.createElement("label");
                _0x1858c5.htmlFor = "option2";
                _0x1858c5.style.marginRight = "10px";
                _0x1858c5.innerText = "自定义";
                const _0x3d9045 = document.createElement("input");
                _0x3d9045.type = "text";
                _0x3d9045.placeholder = "请输入自定义识别码";
                _0x3d9045.style.display = "none";
                _0x3d9045.className = "print-photo-input-field";
                _0x3d9045.autocomplete = "on";
                _0x3d9045.name = "custom-code";
                let _0x4db120 = null;
                const _0x3db9dc = () => {
                  _0x4db120 && (_0x4db120.innerHTML = "", _0x50a0a6.forEach(_0x5b825b => {
                    const _0x59365a = document.createElement("option");
                    _0x59365a.value = _0x5b825b;
                    _0x59365a.innerText = _0x5b825b;
                    _0x4db120.appendChild(_0x59365a);
                  }));
                };
                _0x2f0895.addEventListener("click", () => {
                  _0x3d9045.style.display = "block";
                  !_0x4db120 ? (_0x4db120 = document.createElement("select"), _0x4db120.style.display = "block", _0x4db120.style.width = "20px", _0x4db120.style.flex = "1", _0x4db120.style.border = "1px solid #ddd", _0x4db120.style.borderRadius = "4px", _0x4db120.style.boxSizing = "border-box", _0x4db120.className = "print-photo-select-field", _0x3db9dc(), _0x4db120.addEventListener("change", _0x5be320 => {
                    _0x3d9045.value = _0x5be320.target.value;
                  }), _0xc797c0.appendChild(_0x4db120)) : (_0x4db120.style.display = "block", _0x3db9dc());
                });
                _0x162fb3.addEventListener("click", () => {
                  _0x3d9045.style.display = "none";
                  _0x4db120 && (_0x4db120.style.display = "none");
                });
                _0xc797c0.appendChild(_0x162fb3);
                _0xc797c0.appendChild(_0x39498a);
                _0xc797c0.appendChild(_0x2f0895);
                _0xc797c0.appendChild(_0x1858c5);
                _0xc797c0.appendChild(_0x3d9045);
                _0xdbaf94.appendChild(_0xc797c0);
              }
              if (_0x4d09c1 != "myodp74" && _0x4d09c1 != "myodps74" && _0x4d09c1 != "myod72" && _0x4d09c1 != "mygys72") {
                const _0x55cdd6 = document.createElement("div");
                _0x55cdd6.style.display = "flex";
                _0x55cdd6.style.flexWrap = "nowrap";
                _0x55cdd6.style.marginTop = "25px";
                _0x55cdd6.style.alignItems = "center";
                document.body.appendChild(_0x55cdd6);
                const _0x125108 = [{
                  value: "web/printImg/yellow.png",
                  text: "家用塑料、金属或硬纸盒",
                  img: chrome.runtime.getURL("web/printImg/y.jpg")
                }, {
                  value: "web/printImg/lan.png",
                  text: "家用纸板、瓦楞纸",
                  img: chrome.runtime.getURL("web/printImg/l.jpg")
                }, {
                  value: "web/printImg/zongs.png",
                  text: "家用可降解包装",
                  img: chrome.runtime.getURL("web/printImg/z.jpg")
                }, {
                  value: "web/printImg/lvs.png",
                  text: "家用玻璃",
                  img: chrome.runtime.getURL("web/printImg/lv.jpg")
                }];
                _0x125108.forEach((_0x3d8546, _0x1e1c6a) => {
                  const _0x163845 = document.createElement("div");
                  _0x163845.style.position = "relative";
                  const _0x1b0a12 = document.createElement("input");
                  _0x1b0a12.type = "checkbox";
                  _0x1b0a12.style.display = "none";
                  _0x1b0a12.id = "option-" + _0x1e1c6a;
                  _0x1b0a12.className = "custom-checkbox";
                  _0x1b0a12.value = _0x3d8546.value;
                  const _0x201289 = document.createElement("label");
                  _0x201289.htmlFor = _0x1b0a12.id;
                  _0x201289.style.display = "inline-flex";
                  _0x201289.style.alignItems = "center";
                  _0x201289.style.padding = "0 8px";
                  _0x201289.style.gap = "8px";
                  _0x201289.style.cursor = "pointer";
                  const _0x1beb18 = document.createElement("div");
                  _0x1beb18.style.width = "16px";
                  _0x1beb18.style.height = "16px";
                  _0x1beb18.style.border = "2px solid #ddd";
                  _0x1beb18.style.borderRadius = "50%";
                  _0x1beb18.style.flexShrink = "0";
                  const _0x4a8e08 = document.createElement("span");
                  _0x4a8e08.textContent = _0x3d8546.text;
                  const _0x3ba901 = document.createElement("img");
                  _0x3ba901.src = _0x3d8546.img;
                  _0x3ba901.alt = "分类示意图";
                  _0x3ba901.style.position = "absolute";
                  _0x3ba901.style.left = "100%";
                  _0x3ba901.style.top = "50%";
                  _0x3ba901.style.transform = "translateY(-50%)";
                  _0x3ba901.style.marginLeft = "15px";
                  _0x3ba901.style.width = "250px";
                  _0x3ba901.style.display = "none";
                  _0x3ba901.style.zIndex = "99";
                  _0x3ba901.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                  _0x3ba901.style.borderRadius = "4px";
                  _0x3ba901.style.pointerEvents = "none";
                  _0x201289.appendChild(_0x1beb18);
                  _0x201289.appendChild(_0x4a8e08);
                  _0x163845.appendChild(_0x1b0a12);
                  _0x163845.appendChild(_0x201289);
                  _0x163845.appendChild(_0x3ba901);
                  _0x55cdd6.appendChild(_0x163845);
                  _0x201289.addEventListener("mouseenter", () => {
                    _0x3ba901.style.display = "block";
                    new Image().src = _0x3d8546.img;
                  });
                  _0x201289.addEventListener("mouseleave", () => {
                    _0x3ba901.style.display = "none";
                  });
                  _0x1b0a12.addEventListener("change", function () {
                    const _0x1e2e8d = document.querySelectorAll(".custom-checkbox:checked");
                    _0x1beb18.style.background = this.checked ? "#2196F3" : "transparent";
                    _0x1beb18.style.borderColor = this.checked ? "#2196F3" : "#ddd";
                    if (_0x1e2e8d.length > 2) {
                      this.checked = false;
                      _0x1beb18.style.background = "transparent";
                      _0x1beb18.style.borderColor = "#ddd";
                      return;
                    }
                    document.querySelectorAll(".custom-checkbox").forEach(_0x2e034d => {
                      const _0x350583 = _0x1e2e8d.length >= 2 && !_0x2e034d.checked;
                      _0x2e034d.disabled = _0x350583;
                      const _0x5d47eb = _0x2e034d.nextElementSibling;
                      _0x5d47eb && (_0x5d47eb.style.opacity = _0x350583 ? "0.5" : "1", _0x5d47eb.style.cursor = _0x350583 ? "not-allowed" : "pointer");
                    });
                  });
                });
                _0xdbaf94.appendChild(_0x55cdd6);
              }
              _0x33dd77.appendChild(_0x2be7da);
              _0x33dd77.appendChild(_0x84b5c8);
              const _0x204608 = document.createElement("div");
              _0x204608.className = "print-photo-modal-footer";
              const _0x17485b = document.createElement("button");
              _0x17485b.id = "print-photo-confirmBtn";
              _0x17485b.innerText = "确定";
              _0x17485b.onclick = () => {
                if (_0x4d09c1 != "mygys72") {
                  var _0x9992b1 = (checkedInput = document.querySelector(".print-photo-radio-container").querySelector("input[name=\"options\"]:checked")) ? checkedInput.value : null;
                  if (_0x9992b1 != "option1") {
                    var _0x4c5042 = document.querySelector(".print-photo-input-field").value;
                  } else {
                    var _0x4c5042 = "";
                  }
                  var _0xad9572 = Array.from(document.querySelectorAll(".custom-checkbox:checked")).map(_0x990746 => _0x990746.value);
                  _0x1390a4();
                  _0x53c6b3(_0x2b82fa, _0x4c5042, _0xad9572);
                } else {
                  _0x1390a4();
                  _0x53c6b3(_0x2b82fa, "", []);
                }
              };
              const _0x1c2b01 = document.createElement("button");
              _0x1c2b01.id = "print-photo-cancelBtn";
              _0x1c2b01.innerText = "取消";
              _0x1c2b01.onclick = _0x1390a4;
              _0x204608.appendChild(_0x17485b);
              _0x204608.appendChild(_0x1c2b01);
              _0x59e9be.appendChild(_0x2bd5d6);
              _0x59e9be.appendChild(_0x2a6cb1);
              _0x59e9be.appendChild(_0x33dd77);
              _0x59e9be.appendChild(_0x204608);
              _0xc71738.appendChild(_0x59e9be);
              document.body.appendChild(_0xc71738);
            }
            function _0x1390a4() {
              document.querySelector("body > div.tooltipprint.show") ? document.querySelector("body > div.tooltipprint.show").remove() : "";
              document.querySelector("body > div.tooltipprint") ? document.querySelector("body > div.tooltipprint").remove() : "";
              document.getElementById("modal") ? document.getElementById("modal").remove() : "";
              const _0x4b948f = document.getElementById("print-photo-modal");
              _0x4b948f && _0x4b948f.remove();
            }
            function _0xb1bf3f() {
              if (document.getElementById("printPhotoStyles")) {
                return;
              }
              const _0x3aa4d1 = document.createElement("style");
              _0x3aa4d1.id = "printPhotoStyles";
              _0x3aa4d1.innerHTML = "\n                      .print-photo-modal {\n                          display: flex;\n                          position: fixed;\n                          z-index: 9999;\n                          top: 0;\n                          left: 0;\n                          width: 100%;\n                          height: 100%;\n                          background-color: rgba(0,0,0,0.6);\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-modal-content {\n                          background-color: #ffffff;\n                          border-radius: 8px;\n                          padding: 20px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n                          width: 95%;\n                          max-width: 1100px;\n                          display: flex;\n                          flex-direction: column;\n                          position: relative;\n                      }\n                      .print-photo-modal-header {\n                          text-align: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-modal-header h2 {\n                          margin: 0;\n                          font-size: 24px;\n                          color: #333;\n                      }\n                      .print-photo-close {\n                          color: #888;\n                          font-size: 24px;\n                          font-weight: bold;\n                          position: absolute;\n                          top: 10px;\n                          right: 10px;\n                          cursor: pointer;\n                      }\n                      .print-photo-close:hover {\n                          color: #000;\n                      }\n                      .print-photo-modal-body {\n                          display: flex;\n                          width: 100%;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          justify-content: center;\n                          align-items: center;\n                      }\n                      .print-photo-left-panel img {\n                          max-width: 100%;\n                          height: auto;\n                          border-radius: 8px;\n                          box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                      }\n                      .print-photo-right-panel {\n                          flex: 1;\n                          padding: 10px;\n                          display: flex;\n                          flex-direction: column;\n                      }\n                      .print-photo-input-wrapper {\n                          display: flex;\n                          align-items: center;\n                          margin-bottom: 20px;\n                      }\n                      .print-photo-input-label {\n                          flex: 0 0 50px;\n                          font-size: 16px;\n                          margin-right: 10px;\n                          color: #555;\n                      }\n                      .print-photo-custom-select {\n                        position: relative;\n                        width: 360px; /* 宽度 */\n                        border: 1px solid #ccc; /* 边框 */\n                        border-radius: 5px; /* 圆角 */\n                        background: white; /* 背景颜色 */\n                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影效果 */\n                        transition: box-shadow 0.3s; /* 阴影过渡效果 */\n                      }\n              \n                      .print-photo-selected-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer;\n                        background-color: #f0f8ff; /* 选项背景颜色 */\n                        color: #333; /* 字体颜色 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                    \n                        display: flex; /* 使用弹性布局 */\n                        justify-content: space-between; /* 选项内容两边对齐 */\n                        align-items: center; /* 垂直居中对齐 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                      }\n              \n                      .print-photo-selected-option:hover {\n                        background-color: #e0f7fa; /* 鼠标悬停背景颜色 */\n                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 鼠标悬停时的阴影效果 */\n                      }\n              \n                      .print-photo-options-wrapper {\n                        display: none; /* 默认隐藏 */\n                        position: absolute;\n                        top: calc(100% + 2px); /* 向下移动2px */\n                        left: 0;\n                        right: 0;\n                      \n                        border-top: none; /* 去掉顶部边框 */\n                        background: #fafafa; /* 背景颜色 */\n                        z-index: 1000;\n                        max-height: 200px; /* 可选项最大高度 */\n                        overflow-y: auto; /* 允许滚动 */\n                        border-radius: 0 0 5px 5px; /* 圆角 */\n                        \n                        /* 隐藏滚动条 */\n                        scrollbar-width: thin; /* Firefox */\n                        scrollbar-color: #6eaea8 #db2f2f00;; /* Firefox */\n                      }\n              \n                      .print-photo-options-wrapper::-webkit-scrollbar {\n                        width: 0; /* 隐藏滚动条宽度 */\n                        background: transparent; /* 背景透明 */\n                      }\n              \n                      .print-photo-option {\n                        padding: 12px 15px; /* 增加内边距 */\n                        cursor: pointer; /* 鼠标样式 */\n                        white-space: pre-wrap; /* 允许换行 */\n                        border: 1px solid #bcdff1; /* 选项边框颜色 */\n                        border-radius: 5px; /* 圆角 */\n                        transition: background-color 0.3s; /* 背景颜色过渡效果 */\n                        background-color: #fff;\n                      }\n              \n                      .print-photo-option:hover {\n                        background: #e0f7fa; /* 鼠标悬停效果 */\n                      }\n              \n                      /* 最后一项去掉底部边框 */\n                      .print-photo-option:last-child {\n                        margin-bottom: 0; /* 去掉最后一项的间隔 */\n                      }\n              \n                      /* 增加箭头指示 */\n                      .print-photo-arrow {\n                        border: solid #333; /* 箭头颜色 */\n                        border-width: 0 1px 1px 0; /* 箭头形状 */\n                        display: inline-block;\n                        padding: 3px;\n                        margin-left: 10px; /* 箭头与选项的间距 */\n                        transform: rotate(45deg); /* 旋转箭头 */\n                      }\n              \n                      .print-photo-input-field {\n                          flex: 1;\n                          padding: 10px;\n                          border: 1px solid #ddd;\n                          border-radius: 4px;\n                          box-sizing: border-box;\n                      }\n                      .print-photo-modal-footer {\n                          display: flex;\n                          justify-content: flex-end;\n                          gap: 10px;\n                          margin-top: 20px;\n                      }\n                      .print-photo-modal-footer button {\n                          padding: 10px 20px;\n                          border: none;\n                          border-radius: 4px;\n                          cursor: pointer;\n                          font-size: 16px;\n                          transition: background-color 0.3s;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn {\n                          background-color: #4CAF50;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-confirmBtn:hover {\n                          background-color: #45a049;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn {\n                          background-color: #f44336;\n                          color: white;\n                      }\n                      .print-photo-modal-footer #print-photo-cancelBtn:hover {\n                          background-color: #e53935;\n                      }\n                  ";
              document.head.appendChild(_0x3aa4d1);
            }
            function _0x2949b1(_0xc3420, _0x1d0317, _0x30453f) {
              _0xb1bf3f();
              _0x30453f != "myjtm72" ? _0x3f9f19(_0xc3420, _0x1d0317, _0x30453f) : _0x53c6b3(_0x2b82fa, "", []);
              document.getElementById("print-photo-modal").style.display = "flex";
            }
            _0x97faf9 ? (_0x13b97f = _0x97faf9.id, imageToBase64(chrome.runtime.getURL(_0x97faf9.getAttribute("data-custom-value"))).then(_0x80dc54 => {
              base64UploadedBarcode = _0x80dc54;
              _0x97faf9.id == "myHbzx" ? _0x53c6b3(_0x2b82fa, "", []) : Object.keys(odInfo).length > 4 ? _0x2949b1(_0x97faf9.value, odInfo, _0x97faf9.id) : tipBoxShow("欧代和制造商信息不完整，如您确定已经填写了欧代和制造商信息，请刷新页面后再尝试使用！", 5000);
            }).catch(_0x149d46 => {
              console.log(_0x149d46);
            })) : _0x53c6b3(_0x2b82fa, "", []);
          });
          _0x33b289 != 1 && (document.querySelector("[for='" + _0x33b289 + "']").click(), "咕噜噜打印设置（模板内支持选择西班牙标签）".replace(/\\u([\d\w]{4})/gi, (_0x5b91d5, _0x418a68) => String.fromCharCode(parseInt(_0x418a68, 16))) == document.querySelector("#dayingululuset").innerText ? "" : !function () {
            chrome.storage.local.set({
              codePhone: ["", ""]
            });
            window.location.reload();
          }());
        }(_0x2cc132, _0x5f0b3a, _0x300bf6) : tipBoxShow("请授权后使用功能,如已授权请检查网络是否正常！", 4000);
      });
    }) : tipBoxShow("请授权后使用功能！", 4000);
  });
}
async function analyzeProductData(_0x40915f) {
  var _0x390548 = [];
  var _0x11e29d = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
  var _0x47b736 = {};
  _0x11e29d.forEach(_0x16bcb4 => {
    var _0x56bf9c = _0x16bcb4.querySelectorAll("td");
    /^-?\d+(\.\d+)?$/.test(_0x56bf9c[1].innerText) ? _0x47b736[_0x56bf9c[1].innerText] = parseInt(_0x56bf9c[5].innerText) : _0x47b736[_0x56bf9c[2].innerText] = parseInt(_0x56bf9c[6].querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value);
  });
  if (_0x40915f.result.list) {
    for (const _0x4fe0e2 of _0x40915f.result.list) {
      if (_0x4fe0e2.productSkuSpecI18nMap.en.length != 0 && _0x4fe0e2.productSkuSpecI18nMap.en.length == _0x4fe0e2.productSkuSpecList.length) {
        var _0x10952d = _0x4fe0e2.productSkuSpecI18nMap.en.map(_0x4c2ba2 => _0x4c2ba2.specName ? _0x4c2ba2.specName : "").join("-");
      } else {
        var _0x10952d = _0x4fe0e2.productSkuSpecList.map(_0x3e99b8 => _0x3e99b8.specName ? _0x3e99b8.specName : "").join("-");
        if (/[\u4e00-\u9fa5]/.test(_0x10952d)) {
          var _0x10952d = await getEnglishName(_0x10952d, _0x4fe0e2.labelCodeVO.labelCode);
        }
      }
      var _0x3faba2 = _0x4fe0e2.productSkuSpecList.map(_0x38d344 => _0x38d344.specName ? _0x38d344.specName : "").join("-");
      if (!/[\u4e00-\u9fa5]/.test(_0x3faba2)) {
        var _0x3faba2 = await getEnglishName(_0x3faba2, _0x4fe0e2.labelCodeVO.labelCode, 2);
      }
      if (_0x4fe0e2.labelCodeVO.skuExtCode == "") {
        var _0x4c47c4 = String(_0x4fe0e2.labelCodeVO.productSkcId);
      } else {
        var _0x4c47c4 = String(_0x4fe0e2.labelCodeVO.skuExtCode);
      }
      _0x390548.push([String(_0x4fe0e2.labelCodeVO.labelCode), _0x4c47c4, _0x10952d, String(_0x4fe0e2.labelCodeVO.productSkuId), _0x47b736[String(_0x4fe0e2.labelCodeVO.productSkuId)], _0x4fe0e2.displayImage, String(_0x4fe0e2.labelCodeVO.productSkcId), _0x4fe0e2.productId, _0x3faba2]);
    }
  } else {
    if (_0x40915f.result.pageItems) {
      for (const _0x42918f of _0x40915f.result.pageItems) {
        if (_0x42918f.productSkuSpecI18nMap.en.length != 0 && _0x42918f.productSkuSpecI18nMap.en.length == _0x42918f.productSkuSpecList.length) {
          var _0x10952d = _0x42918f.productSkuSpecI18nMap.en.map(_0x142fb6 => _0x142fb6.specName ? _0x142fb6.specName : "").join("-");
        } else {
          var _0x10952d = _0x42918f.productSkuSpecList.map(_0x34745a => _0x34745a.specName ? _0x34745a.specName : "").join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x10952d)) {
            var _0x10952d = await getEnglishName(_0x10952d, _0x42918f.labelCodeVO.labelCode);
          }
        }
        var _0x3faba2 = _0x42918f.productSkuSpecList.map(_0x1213b5 => _0x1213b5.specName ? _0x1213b5.specName : "").join("-");
        if (_0x42918f.labelCodeVO.skuExtCode == "") {
          var _0x4c47c4 = String(_0x42918f.labelCodeVO.productSkcId);
        } else {
          var _0x4c47c4 = String(_0x42918f.labelCodeVO.skuExtCode);
        }
        _0x390548.push([String(_0x42918f.labelCodeVO.labelCode), _0x4c47c4, _0x10952d, String(_0x42918f.labelCodeVO.productSkuId), _0x47b736[String(_0x42918f.labelCodeVO.productSkuId)], _0x42918f.displayImage, String(_0x42918f.labelCodeVO.productSkcId), _0x42918f.productId, _0x3faba2]);
      }
    } else {
      for (const _0x49df0c of _0x40915f.result) {
        if (_0x49df0c.englishSecondarySpecVOList.length != 0 && _0x49df0c.englishSecondarySpecVOList.length == _0x49df0c.secondarySpecVOList.length) {
          var _0x10952d = _0x49df0c.englishSecondarySpecVOList.map(_0x3297e1 => _0x3297e1.specName).join("-");
        } else {
          var _0x10952d = _0x49df0c.secondarySpecVOList.map(_0x17dba9 => _0x17dba9.specName).join("-");
          if (/[\u4e00-\u9fa5]/.test(_0x10952d)) {
            var _0x10952d = await getEnglishName(_0x10952d, _0x49df0c.labelCode);
          }
        }
        var _0x3faba2 = _0x49df0c.secondarySpecVOList.map(_0x341fd6 => _0x341fd6.specName).join("-");
        if (!/[\u4e00-\u9fa5]/.test(_0x3faba2)) {
          var _0x3faba2 = await getEnglishName(_0x3faba2, _0x49df0c.labelCode, 2);
        }
        if (_0x49df0c.skuExtCode == "") {
          var _0x4c47c4 = String(_0x49df0c.productSkcId);
        } else {
          var _0x4c47c4 = String(_0x49df0c.skuExtCode);
        }
        _0x390548.push([String(_0x49df0c.labelCode), _0x4c47c4, _0x10952d, String(_0x49df0c.productSkuId), _0x47b736[String(_0x49df0c.productSkuId)], _0x49df0c.thumbUrl, String(_0x49df0c.productSkcId), 0, _0x3faba2]);
      }
    }
  }
  return _0x390548;
}
async function printProductSkuLabel(_0x275cd9, _0x2dba68) {
  const _0x3183bc = new Headers();
  _0x3183bc.append("accept", "*/*");
  _0x3183bc.append("accept-language", "zh-CN,zh;q=0.9");
  _0x3183bc.append("mallid", _0x275cd9);
  _0x3183bc.append("Content-Type", "application/json");
  let _0x3a1af6;
  try {
    if (_0x2dba68.slice(0, 2) === "WB") {
      const _0x46a09d = async (_0x1d7b42, _0x8ac564, _0x4e7ec7 = 5) => {
        try {
          const _0x3974e2 = await fetch(_0x1d7b42, _0x8ac564);
          const _0x313432 = await _0x3974e2.json();
          if (!_0x313432.success) {
            throw new Error("HTTP error! Status: " + _0x3974e2.status);
          }
          return _0x313432;
        } catch (_0x49c430) {
          if (_0x4e7ec7 > 0) {
            return _0x46a09d(_0x1d7b42, _0x8ac564, _0x4e7ec7 - 1);
          }
        }
      };
      const _0x5559f2 = "https://seller.kuajingmaihuo.com/marvel-mms/cn/api/kiana/venom/purchase/order/printProductSkuLabelForPurchaseOrder";
      _0x3a1af6 = JSON.stringify({
        subPurchaseOrderSnList: [_0x2dba68]
      });
      const _0xb064d1 = {
        method: "POST",
        headers: _0x3183bc,
        body: _0x3a1af6,
        redirect: "follow"
      };
      const _0x157d08 = await _0x46a09d(_0x5559f2, _0xb064d1);
      await _0x157d08;
      const _0x29deee = [];
      const _0x1e3ee5 = document.querySelector("[class*=Drawer_content][class*=Drawer_right][class*=Drawer_visible]").querySelectorAll("[data-testid=\"beast-core-table-body-tr\"]");
      const _0x165dd0 = {};
      _0x1e3ee5.forEach(_0x47e9a4 => {
        const _0x12df87 = _0x47e9a4.querySelectorAll("td");
        _0x165dd0[_0x12df87[1].innerText] = parseInt(_0x12df87[5].innerText);
      });
      for (const _0x2cfe86 of _0x157d08.result.list) {
        const _0xf80fe2 = _0x2cfe86.productSkuSpecI18nMap.en.map(_0x31d98f => _0x31d98f.specName).join("-");
        if (_0x2cfe86.labelCodeVO.skuExtCode == "") {
          var _0x59e9d1 = String(_0x2cfe86.labelCodeVO.productSkcId);
        } else {
          var _0x59e9d1 = String(_0x2cfe86.labelCodeVO.skuExtCode);
        }
        _0x29deee.push([String(_0x2cfe86.labelCodeVO.labelCode), _0x59e9d1, _0xf80fe2, String(_0x2cfe86.labelCodeVO.productSkuId), _0x165dd0[String(_0x2cfe86.labelCodeVO.productSkuId)], _0x2cfe86.displayImage]);
      }
      return _0x29deee;
    }
  } catch (_0x49ca2c) {
    return [];
  }
}
let plTargetSpanOk = false;
let oneTargetSpanOk = false;
let plPrintCode = false;
setInterval(() => {
  const _0x3bf0f7 = window.location.href;
  if (_0x3bf0f7.includes("https://seller.kuajingmaihuo.com/main/order-manage") || _0x3bf0f7.includes("https://seller.kuajingmaihuo.com/main/product/label")) {
    if (!plTargetSpanOk) {
      const _0xa0001e = document.querySelector("[class*=\"order-manage_handleCnt\"]");
      const _0x2377b6 = document.querySelector("[class*=\"shipping-list_flexAndColo\"]");
      const _0x2e51f3 = document.querySelector("[class*=\"product-label_dividerFieldContainer\"]");
      if (_0xa0001e) {
        const _0x4f93c0 = _0xa0001e.querySelectorAll("button");
        for (let _0x412aac of _0x4f93c0) {
          _0x412aac.innerText === "批量打印商品条码" && (plTargetSpanOk = true, _0x412aac.addEventListener("click", function () {
            plPrintCode = true;
          }, {
            once: true
          }));
        }
      } else {
        if (_0x2377b6) {
          const _0x476fee = _0x2377b6.querySelectorAll("button");
          for (let _0xed16f of _0x476fee) {
            _0xed16f.innerText === "批量打印商品条码" && (plTargetSpanOk = true, _0xed16f.addEventListener("click", function () {
              plPrintCode = true;
            }, {
              once: true
            }));
          }
        } else {
          if (_0x2e51f3) {
            const _0xbf4b5 = _0x2e51f3.querySelectorAll("button");
            for (let _0x53b9a6 of _0xbf4b5) {
              _0x53b9a6.innerText === "批量打印条码" && (plTargetSpanOk = true, _0x53b9a6.addEventListener("click", function () {
                plPrintCode = true;
              }, {
                once: true
              }));
            }
          }
        }
      }
      Object.keys(odInfo).length == 0 && startCheckEuropean && (startCheckEuropean = false, fetchData().then(_0x52c225 => {
        chrome.runtime.sendMessage({
          type: "searchEuropean",
          mallid: _0x52c225
        }, _0x5ce71a => {
          odInfo = _0x5ce71a.data;
          startCheckEuropean = true;
        });
      }));
    }
    !oneTargetSpanOk && (oneTargetSpanOk = true, document.body.addEventListener("click", function (_0xc81761) {
      const _0x5b2b17 = _0xc81761.target;
      var _0x2b484c = ["打印商品条码", "批量打印商品条码", "批量打印条码"];
      if ((_0x5b2b17.matches("span") || _0x5b2b17.matches("button")) && _0x2b484c.includes(_0x5b2b17.textContent)) {
        plTargetSpanOk = false;
        !_0x5b2b17.classList.contains("barcode-click-listener-added") && _0x5b2b17.classList.add("barcode-click-listener-added");
        let _0x137cb4 = [];
        updateAllInnerText(_0x5b2b17, _0x137cb4);
        if (_0x137cb4.length === 0) {
          if (!plPrintCode) {
            plPrintCode = false;
            return;
          }
        } else {
          plPrintCode = false;
        }
        var _0x4cc3a4 = setInterval(() => {
          try {
            updateAllInnerText(_0x5b2b17, _0x137cb4);
            var _0x242b10 = document.createElement("style");
            _0x242b10.innerHTML = "\n                                .pspinner {\n                                    display: inline-block;\n                                    width: 16px;\n                                    height: 16px;\n                                    border: 2px solid rgba(255, 255, 255, 0.3);\n                                    border-radius: 50%;\n                                    border-top-color: #fff;\n                                    animation: spin 1s linear infinite;\n                                    vertical-align: middle;\n                                }\n                                @keyframes spin {\n                                    to { transform: rotate(360deg); }\n                                }\n                            ";
            document.head.appendChild(_0x242b10);
            var _0x571849 = document.querySelector("[class*=index-module__footer]");
            var _0x48b93a = document.querySelector("#gululuPrint");
            if (_0x571849 && !_0x48b93a) {
              fetch(chrome.runtime.getURL("web/img/control.png")).then(_0x1e4fc7 => _0x1e4fc7.arrayBuffer()).then(_0xef392e => {
                crypto.subtle.digest("SHA-256", _0xef392e).then(_0x5369fd => {
                  const _0x210199 = Array.from(new Uint8Array(_0x5369fd));
                  const _0x43347a = _0x210199.map(_0x542871 => _0x542871.toString(16).padStart(2, "0")).join("");
                  _0x43347a == "81633e031737f7884f8d1738a49b4524e6b7fbb29203d8225223ceaee67090ec" ? "" : chrome.storage.local.set({
                    codePhone: ["", ""]
                  });
                });
              });
              const _0x1edfea = !window.location.href.includes("shipping-desk");
              const _0x57b283 = !document.querySelector("#gululuPrint");
              const _0x4dfb82 = document.querySelector("[data-testid=\"beast-core-drawer-content\"] tbody tr").querySelectorAll("td");
              const _0x8eb481 = _0x4dfb82.length > 7;
              if (_0x1edfea && _0x57b283 && _0x8eb481) {
                const _0x46fbe9 = document.createElement("button");
                _0x46fbe9.textContent = "咕噜噜打印";
                _0x46fbe9.style = "\n                                        padding: 5px 20px;\n                                        background: linear-gradient(45deg, rgb(74, 74, 74) 0%, rgb(74, 74, 74) 50%, rgb(255, 111, 0) 50%, rgb(255, 111, 0) 100%);\n                                        color: white;\n                                        border: none;\n                                        border-radius: 5px;\n                                        cursor: pointer;\n                                        font-size: 16px;\n                                        margin-left: 10px;\n                                    ";
                _0x46fbe9.id = "gululuPrint";
                _0x571849.appendChild(_0x46fbe9);
                "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x273690, _0x344a43) => String.fromCharCode(parseInt(_0x344a43, 16))) == _0x46fbe9.textContent ? "" : !function () {
                  chrome.storage.local.set({
                    codePhone: ["", ""]
                  });
                  window.location.reload();
                }();
                _0x46fbe9.addEventListener("click", function () {
                  _0x46fbe9.innerHTML = "<span class=\"pspinner\"></span> 咕噜噜打印";
                  _0x46fbe9.classList.add("loading");
                  chrome.storage.local.get("codePhone", function (_0x4dfb6b) {
                    const _0x59c433 = _0x4dfb6b.codePhone;
                    if (_0x59c433) {
                      _0x46fbe9.innerHTML = "咕噜噜打印";
                      let _0x3b64eb;
                      let _0x30b49a = [];
                      for (let _0x127e61 of document.querySelectorAll("[class*=\"TB_tableWrapper\"]")) {
                        if (_0x127e61.innerText.includes("商品名称\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t发货数\t打印数量\t操作")) {
                          _0x3b64eb = _0x127e61.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr");
                          _0x3b64eb.forEach(_0x34548b => {
                            let _0x201d1b = _0x34548b.querySelectorAll("td");
                            let _0x33d145 = _0x34548b.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value;
                            let _0x13f94c = _0x201d1b[1].innerText;
                            _0x30b49a.push([_0x13f94c, _0x33d145]);
                          });
                        } else {
                          _0x127e61.innerText.includes("商品名称\t贴标签要求\tSKU ID\tSKU货号\t主销售属性\t次销售属性\t打印数量\t操作") && (_0x3b64eb = _0x127e61.querySelector("[data-testid=\"beast-core-table-middle-tbody\"]").querySelectorAll("tr"), _0x3b64eb.forEach(_0x52967c => {
                            let _0xf87890 = _0x52967c.querySelectorAll("td");
                            let _0x212680 = _0x52967c.querySelector("[data-testid=\"beast-core-inputNumber-htmlInput\"]").value;
                            let _0x77b19e = _0xf87890[2].innerText;
                            _0x30b49a.push([_0x77b19e, _0x212680]);
                          }));
                        }
                      }
                      "咕噜噜打印".replace(/\\u([\d\w]{4})/gi, (_0x1f575b, _0x21ad4b) => String.fromCharCode(parseInt(_0x21ad4b, 16))) == document.querySelector("#gululuPrint").innerText ? "" : !function () {
                        chrome.storage.local.set({
                          codePhone: ["", ""]
                        });
                        window.location.reload();
                      }();
                      plPrintCode ? analyzeProductData(typeof dataInfoToPrint === "string" ? JSON.parse(dataInfoToPrint) : dataInfoToPrint).then(_0x46e48e => {
                        chrome.storage.local.get("printCodeClickMod", function (_0xfc5951) {
                          _0xfc5951.printCodeClickMod ? run(_0x46e48e, _0x30b49a, _0xfc5951.printCodeClickMod) : run(_0x46e48e, _0x30b49a);
                        });
                      }) : (plPrintCode = false, analyzeProductData(typeof dataInfoToPrint === "string" ? JSON.parse(dataInfoToPrint) : dataInfoToPrint).then(_0x3a3515 => {
                        chrome.storage.local.get("printCodeClickMod", function (_0x3807f4) {
                          _0x3807f4.printCodeClickMod ? (_0x46fbe9.classList.remove("loading"), run(_0x3a3515, _0x30b49a, _0x3807f4.printCodeClickMod)) : (_0x46fbe9.classList.remove("loading"), run(_0x3a3515, _0x30b49a));
                        });
                      }));
                    } else {
                      _0x46fbe9.classList.remove("loading");
                      tipBoxShow("请授权后使用功能！", 4000);
                    }
                  });
                });
                clearInterval(_0x4cc3a4);
              }
            }
          } catch (_0xb7d1ee) {
            console.log(_0xb7d1ee);
          }
        }, 1000);
      }
    }));
  }
}, 1000);
function updateAllInnerText(_0x584849, _0x4acec1) {
  const _0x2c5136 = _0x584849.closest("tr");
  if (_0x2c5136) {
    let _0x3140a8 = _0x2c5136.children[0].innerText.split("\n");
    _0x3140a8.length > 3 && _0x3140a8[0].slice(0, 2) !== "WB" ? (_0x3140a8 = _0x2c5136.children[2].innerText.split("\n"), _0x3140a8 = [_0x3140a8[0].replace("备货单号：", "")], _0x3140a8[0].slice(0, 2) !== "WB" && (_0x3140a8 = _0x2c5136.children[4].innerText.split("\n"), _0x3140a8 = [_0x3140a8[0].replace("备货单号：", "")])) : (_0x3140a8 = _0x2c5136.children[1].innerText.split("\n"), _0x3140a8[0].slice(0, 2) !== "WB" && (_0x3140a8 = _0x2c5136.children[2].innerText.split("\n"), _0x3140a8 = [_0x3140a8[0].replace("备货单号：", "")], _0x3140a8[0].slice(0, 2) !== "WB" && (_0x3140a8 = _0x2c5136.children[4].innerText.split("\n"), _0x3140a8 = [_0x3140a8[0].replace("备货单号：", "")])));
    _0x4acec1.splice(0, _0x4acec1.length, ..._0x3140a8);
  }
}
fetch(chrome.runtime.getURL("img/code.jpg")).then(_0x6d4024 => _0x6d4024.arrayBuffer()).then(_0x17044c => {
  crypto.subtle.digest("SHA-256", _0x17044c).then(_0x2f90ad => {
    const _0xd9a6e = Array.from(new Uint8Array(_0x2f90ad));
    const _0x1e9e2b = _0xd9a6e.map(_0xccbc8a => _0xccbc8a.toString(16).padStart(2, "0")).join("");
    _0x1e9e2b == "cd37bde7a4ff8bb9588d5d8483c9a5c05c8df976bbeebd226d69952a11531178" ? "" : chrome.storage.local.set({
      codePhone: ["", ""]
    });
  });
});
fetch(chrome.runtime.getURL("web/img/logo.png")).then(_0x4f8226 => _0x4f8226.arrayBuffer()).then(_0x312b46 => {
  crypto.subtle.digest("SHA-256", _0x312b46).then(_0x2cf1b3 => {
    const _0x22be45 = Array.from(new Uint8Array(_0x2cf1b3));
    const _0x281f9c = _0x22be45.map(_0x1bc439 => _0x1bc439.toString(16).padStart(2, "0")).join("");
    _0x281f9c == "565a6d91e6efb8d2ed11e891d2c89e8a65ad318ba6aefa0ecb948c32f1b145e4" ? "" : chrome.storage.local.set({
      codePhone: ["", ""]
    });
  });
});