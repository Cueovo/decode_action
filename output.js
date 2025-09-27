//Sat Sep 27 2025 15:02:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let e = [];
let o = "/compass_api/shop/video/video_rank/bring_good_flow_hot_v2";
let t = "/compass_api/shop/product/product_rank/video_bring_good";
function n() {
  const _0x4bf71a = XMLHttpRequest.prototype.open;
  const _0x5e6d04 = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (_0x1257b2, _0x158cd5, ..._0x2d53ce) {
    {
      this._url = _0x158cd5;
      return _0x4bf71a.apply(this, [_0x1257b2, _0x158cd5, ..._0x2d53ce]);
    }
  };
  XMLHttpRequest.prototype.send = function (..._0x11045a) {
    {
      let _0x338b90 = this._url;
      if (this._url && (this._url.includes(o) || this._url.includes(t))) {
        {
          const _0x5d9d64 = this.onload;
          this.onload = function () {
            try {
              const _0x178c10 = JSON.parse(this.responseText);
              console.log("拦截到目标响应", _0x178c10);
              _0x178c10 && _0x178c10.data && (_0x338b90.includes(o) ? e = _0x178c10.data.module_data.video_bring_goods_rank.compass_general_table_value.data.map(_0x137732 => {
                const _0x231495 = _0x137732.cell_info.video.video;
                const _0x2e634a = {
                  id: _0x231495.author.author_id,
                  name: _0x231495.author.nick_name || "",
                  rank: _0x137732.cell_info.rank.index_values.value.unit || "",
                  aweme: _0x231495.author.short_id,
                  imgUrl: _0x231495.video_cover,
                  checked: false,
                  videos: [{
                    video_id: _0x231495.video_id,
                    video_play_url: _0x231495.play_url || "",
                    video_name: _0x231495.video_title || "",
                    video_img: _0x231495.video_cover || _0x231495.video_image
                  }]
                };
                return _0x2e634a;
              }) : _0x338b90.includes(t) && (e = _0x178c10.data.data_result.map(_0xbad79 => {
                {
                  const _0x24a4e1 = _0xbad79.product_info;
                  const _0x2873ac = _0xbad79.video_list;
                  return {
                    name: _0x24a4e1.name,
                    id: _0x24a4e1.id,
                    imgUrl: _0x24a4e1.image_url,
                    rank: _0x24a4e1.rank,
                    checked: false,
                    videos: _0x2873ac.map(_0x20d671 => ({
                      author_img: _0x20d671.author_img,
                      video_img: _0x20d671.video_img,
                      video_id: _0x20d671.video_id,
                      video_play_url: _0x20d671.video_play_url,
                      video_name: _0x20d671.video_name
                    }))
                  };
                }
              })));
            } catch (_0x4c80b4) {
              console.error("❌ 解析API响应失败:", _0x4c80b4);
            }
            _0x5d9d64 && _0x5d9d64.call(this);
          };
          const _0x396924 = this.onerror;
          this.onerror = function () {
            console.error("❌ XHR请求失败");
            _0x396924 && _0x396924.call(this);
          };
        }
      }
      return _0x5e6d04.apply(this, _0x11045a);
    }
  };
  console.log("✅ XHR拦截设置完成");
}
function l() {
  window.location.href.includes("/shop/chance/video-talent-rank") || window.location.href.includes("/talent/product-rank") ? document.body.addEventListener("click", function (_0x268ed6) {
    let _0x5dbaf4 = false;
    let _0x2cd100 = null;
    if ("IMG" === _0x268ed6.target.tagName && (_0x5dbaf4 = true, _0x2cd100 = _0x268ed6.target), !_0x5dbaf4 && _0x268ed6.target) {
      {
        let _0x48798a = _0x268ed6.target.querySelector(":scope > img");
        if (_0x48798a) {
          _0x5dbaf4 = true;
          _0x2cd100 = _0x48798a;
        } else {
          {
            let _0x48fc26 = _0x268ed6.target.children;
            for (let _0x16f6ba of _0x48fc26) {
              let _0x2c5354 = _0x16f6ba.querySelector(":scope > img");
              if (_0x2c5354) {
                {
                  _0x5dbaf4 = true;
                  _0x2cd100 = _0x2c5354;
                  break;
                }
              }
            }
          }
        }
      }
    }
    if (_0x5dbaf4 && _0x2cd100) {
      {
        let _0x5ed0ae = _0x2cd100.src;
        console.log("点击的图片src:", _0x5ed0ae);
        let _0x4e7a76 = null;
        for (let _0x805504 of e) {
          if (_0x805504.videos && _0x805504.videos.length) {
            for (let _0x272bfe of _0x805504.videos) if (_0x272bfe.video_img === _0x5ed0ae) {
              _0x4e7a76 = _0x272bfe;
              break;
            }
          } else {
            if (_0x805504.video_img === _0x5ed0ae) {
              _0x4e7a76 = _0x805504;
              break;
            }
          }
          if (_0x4e7a76) {
            break;
          }
        }
        if (!_0x4e7a76 && _0x2cd100 && _0x2cd100.parentElement) {
          {
            let _0x562778 = _0x2cd100.parentElement.querySelectorAll("img");
            for (let _0x372586 of _0x562778) if (_0x372586 !== _0x2cd100) {
              let _0xe3dfbe = _0x372586.src;
              console.log("尝试上级元素中的其他图片src:", _0xe3dfbe);
              for (let _0x340bd0 of e) {
                if (_0x340bd0.videos && _0x340bd0.videos.length) {
                  {
                    for (let _0x2fa9c1 of _0x340bd0.videos) if (_0x2fa9c1.video_img === _0xe3dfbe) {
                      _0x4e7a76 = _0x2fa9c1;
                      break;
                    }
                  }
                } else {
                  if (_0x340bd0.video_img === _0xe3dfbe) {
                    {
                      _0x4e7a76 = _0x340bd0;
                      break;
                    }
                  }
                }
                if (_0x4e7a76) {
                  break;
                }
              }
              if (_0x4e7a76) {
                console.log("✅ 在上级元素中找到匹配的视频");
                break;
              }
            }
          }
        }
        let _0x556c4b = null;
        _0x4e7a76 && (_0x556c4b = _0x4e7a76.video_id || _0x4e7a76.videoId || null);
        _0x556c4b ? (console.log("✅ 找到匹配的视频，准备跳转:", _0x556c4b), window.open("https://www.douyin.com/video/" + _0x556c4b, "_blank")) : d("未找到对应的抖音视频链接");
      }
    }
  }) : document.body.addEventListener("click", function (_0x109649) {
    {
      let _0x2ec928 = false;
      let _0x4711d7 = _0x109649.target.className || "";
      let _0x331b70 = null;
      try {
        _0x4711d7 && -1 !== _0x4711d7.indexOf("cover-") && (_0x2ec928 = true, _0x331b70 = _0x109649.target);
      } catch (_0x3266f0) {}
      if (!_0x2ec928) {
        let _0x1956af = ["[class*='cover-']", "[class*='videoWrapper']", "[class*='videoIcon-']"];
        for (let _0x1eef1e of _0x1956af) {
          {
            let _0x3a4131 = _0x109649.target.closest(_0x1eef1e);
            if (_0x3a4131) {
              {
                _0x2ec928 = true;
                _0x331b70 = _0x3a4131;
                break;
              }
            }
          }
        }
      }
      if (_0x2ec928) {
        try {
          let _0x2019c8 = a(_0x109649.target);
          _0x2019c8 || (_0x2019c8 = r(_0x331b70));
          let _0x21b617 = null;
          _0x2019c8 && (_0x21b617 = _0x2019c8.video_id || _0x2019c8.videoId || null);
          _0x21b617 ? (console.log("✅ 找到匹配的视频，准备跳转:", _0x21b617), window.open("https://www.douyin.com/video/" + _0x21b617, "_blank")) : d("未找到对应的抖音视频链接");
        } catch (_0x34e7c3) {
          console.error("❌ 处理点击事件时出错:", _0x34e7c3);
        }
      }
    }
  });
}
function r(_0x30c092) {
  if (null == _0x30c092) {
    return null;
  }
  let _0x4c6110 = _0x30c092;
  "IMG" == _0x4c6110.tagName && (_0x4c6110 = _0x30c092.parentElement.parentElement);
  let _0xbce5ae = _0x4c6110.querySelectorAll("img");
  let _0x57fa51 = Array.from(_0xbce5ae).map(_0x1c2b51 => _0x1c2b51.src);
  for (let _0x52e788 of _0x57fa51) for (let _0x1b425 of e) if (_0x1b425.videos && _0x1b425.videos.length) {
    for (let _0x4fd9e9 of _0x1b425.videos) if (_0x4fd9e9.video_img === _0x52e788) {
      return _0x4fd9e9;
    }
  } else {
    if (_0x1b425.video_img === _0x52e788) {
      return _0x1b425;
    }
  }
  return null;
}
function a(_0x414516) {
  let _0x3f4cdc = _0x414516.closest("td");
  if (!_0x3f4cdc) {
    return;
  }
  let _0x4df308 = _0x3f4cdc.querySelector("div[class*='authorName']");
  let _0x17a40e = _0x3f4cdc.querySelector("div[class*='videoName']");
  let _0x4737fa = _0x3f4cdc.querySelector("span[class*='aweme']");
  if (!_0x4df308 || !_0x17a40e || !_0x4737fa) {
    console.log("authorNameElement:", _0x4df308);
    console.log("videoNameElement:", _0x17a40e);
    return void console.log("awemeElement:", _0x4737fa);
  }
  let _0x255196 = _0x4df308.innerText.trim();
  let _0x19ebc9 = _0x17a40e.innerText.trim();
  let _0x325217 = _0x4737fa.innerText.trim();
  return e.find(_0xcfef0d => _0xcfef0d.author_name == _0x255196 && (_0xcfef0d.video_name == _0x19ebc9 || _0xcfef0d.video_name.includes(_0x19ebc9.substring(0, _0x19ebc9.length - 4))) && _0xcfef0d.aweme == _0x325217);
}
function d(_0x243d85) {
  let _0x1fcb8f = document.createElement("div");
  _0x1fcb8f.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        background: #ff4757;\n        color: white;\n        padding: 10px 20px;\n        border-radius: 5px;\n        z-index: 10000;\n        font-size: 14px;\n        box-shadow: 0 2px 10px rgba(0,0,0,0.3);\n    ";
  _0x1fcb8f.textContent = _0x243d85;
  document.body.appendChild(_0x1fcb8f);
  setTimeout(() => {
    _0x1fcb8f.parentNode && _0x1fcb8f.parentNode.removeChild(_0x1fcb8f);
  }, 3000);
}
n();
let s = setInterval(function () {
  document.body && (clearInterval(s), l());
}, 1000);
let c = setInterval(function () {
  document.body && clearInterval(c);
}, 1000);