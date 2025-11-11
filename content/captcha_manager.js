(() => {
  var e = {
      2493: (e, t, n) => {
        "use strict";
        t.getClickTime =
          t.waitforbackgroundWithTimeout =
          t.waitforbackground =
          t.waitFor =
          t.notneedcontinue =
          t.div2base64 =
          t.delay =
          t.message =
            undefined;
        var r = i(n(46593)),
          a = i(n(94942)),
          o = i(n(36803));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.post = s),
          (t.get = function (e) {
            return new r.default(function (t, n) {
              u.runtime.sendMessage({ action: "get", url: e }, function (e) {
                t(e);
              });
            });
          }),
          (t.getconfig = d),
          (t.getParentUrl = function () {
            var e = null;
            if (parent !== window)
              try {
                e = window.top.location.href;
              } catch (t) {
                e = document.referrer;
              }
            return e;
          });
        var l,
          u = window.chrome;
        (t.message = function (e) {
          var t = e.text,
            n = undefined === t ? "" : t,
            r = e.color,
            a = undefined === r ? "red" : r,
            o = document.getElementById("mymessage");
          o
            ? (o.innerText = n)
            : ((o = document.createElement("div")),
              (o.id = "mymessage"),
              (o.style.position = "fixed"),
              (o.style.top = "0px"),
              (o.style.left = "0px"),
              (o.style.zIndex = "99999999"),
              (o.innerText = n),
              document.body.appendChild(o)),
            (o.className = "green" === a ? "fankui" : "fankui2"),
            (o.style.display = "block");
        }),
          (l = (0, o.default)(
            a.default.mark(function e() {
              var t, n, r, o, i;
              return a.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d();
                      case 2:
                        return (
                          (t = e.sent), (n = t.times), (e.next = 6), c(10 * n)
                        );
                      case 6:
                        (r = null),
                          (o = [
                            {
                              title: "imageclassification",
                              url_keyword: "recaptcha",
                              div: "#recaptcha-anchor-label",
                              imagediv: "#recaptcha-token",
                            },
                            {
                              title: "hcaptcha",
                              url_keyword: "hcaptcha.com",
                              div: "#anchor-state",
                              imagediv: ".challenge-container",
                            },
                            {
                              title: "hcaptcha",
                              url_keyword:
                                "hcaptcha-assets.ecosec.on.epicgames.com",
                              div: "#anchor-state",
                              imagediv: ".challenge-container",
                            },
                            {
                              title: "rainbow",
                              url_keyword: "queue-it.net",
                              div: "#enqueue-error > a:nth-child(3) > div > strong",
                            },
                            {
                              title: "imagetotext",
                              url_keyword: "queue",
                              div: "#lbHeaderP",
                            },
                          ]),
                          (i = 0);
                      case 9:
                        if (!(i < o.length)) {
                          e.next = 16;
                          break;
                        }
                        if (
                          !(
                            window.location.href.indexOf(o[i].url_keyword) >
                              -1 &&
                            (document.querySelector(o[i].div) ||
                              (o[i].imagediv &&
                                document.querySelector(o[i].imagediv)))
                          )
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (r = o[i]), e.abrupt("break", 16);
                      case 13:
                        i++, (e.next = 9);
                        break;
                      case 16:
                        return e.abrupt("return", r);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                undefined
              );
            })
          ));
        function s(e, t) {
          var n =
              arguments.length > 2 && undefined !== arguments[2]
                ? arguments[2]
                : 0,
            a =
              arguments.length > 3 && undefined !== arguments[3]
                ? arguments[3]
                : 1;
          return new r.default(function (r, o) {
            u.runtime.sendMessage(
              { action: "post", url: e, data: t, delay: n, tries: a },
              function (e) {
                "fail" === e && o("fail"), r(e);
              }
            );
          });
        }
        var c = (t.delay = function (e) {
          return new r.default(function (t) {
            setTimeout(t, e);
          });
        });
        function d() {
          return new r.default(function (e, t) {
            u.runtime.sendMessage({ action: "getconfig" }, function (t) {
              (t.times = t.times || 100), e(t);
            });
          });
        }
        t.div2base64 = function (e) {
          var t =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : 128,
            n =
              arguments.length > 2 && undefined !== arguments[2]
                ? arguments[2]
                : 128;
          return new r.default(function (r, a) {
            e || r(null);
            var o = new Image();
            o.setAttribute("crossOrigin", "Anonymous"),
              (o.src = e),
              (o.width = t),
              (o.height = n);
            var i = document.createElement("canvas"),
              l = i.getContext("2d");
            (i.width = o.width),
              (i.height = o.height),
              (o.onload = function () {
                l.drawImage(o, 0, 0, t, n);
                var e = i.toDataURL().replace("data:image/png;base64,", "");
                r(e);
              });
          });
        };
        (t.notneedcontinue = function (e) {
          return (
            e &&
            "ERROR_REQUIRED_FIELDS\n  ERROR_KEY_DOES_NOT_EXIST\n  ERROR_ZERO_BALANCE\n  ERROR_ZERO_CAPTCHA_FILESIZE\n  ERROR_DOMAIN_NOT_ALLOWED\n  ERROR_TOO_BIG_CAPTCHA_FILESIZE\n  ERROR_ILLEGAL_IMAGE\n  ERROR_IP_BANNED\n  ERROR_IP_BLOCKED_5MIN\n  ERROR_CLIENTKEY_UNAUTHORIZED".includes(
              e
            )
          );
        }),
          (t.waitFor = function (e) {
            var t =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : 10;
            return new r.default(function (n, r) {
              var a = setInterval(function () {
                document.querySelector(e) && (clearInterval(a), n(!0));
              }, 100);
              setTimeout(function () {
                clearInterval(a), n(!0);
              }, 1e3 * t);
            });
          }),
          (t.waitforbackground = function (e) {
            return new r.default(function (t, n) {
              var r = setInterval(function () {
                e.style && e.style.background && (clearInterval(r), t(!0));
              }, 100);
            });
          }),
          (t.waitforbackgroundWithTimeout = function (e) {
            return new r.default(function (t, n) {
              var r = setInterval(function () {
                  e.style.background && (clearInterval(r), t(!0));
                }, 100),
                a = setTimeout(function () {
                  clearInterval(r), clearTimeout(a), t(!1);
                }, 3e3);
            });
          });
        var f;
        (t.getClickTime = function () {
          var e =
              arguments.length > 0 && undefined !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : 0.1,
            n = e * t,
            r = 2 * Math.random() * n - n;
          return Math.ceil(r) + e;
        }),
          (f = (0, o.default)(
            a.default.mark(function e(t) {
              var n, o, i, l, s;
              return a.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = function (e, t) {
                            return (
                              e.findIndex(function (e) {
                                return t.indexOf(e) > -1;
                              }) > -1
                            );
                          }),
                          (o = function (e, t) {
                            try {
                              var r = e.blackListConfig.isOpen;
                              return e.whiteListConfig.isOpen
                                ? n(e.whiteListConfig.urlList || [], t)
                                  ? "inWhiteList"
                                  : "notInWhiteList"
                                : r
                                ? n(e.blackListConfig.urlList || [], t)
                                  ? "inBlackList"
                                  : "notInBlackList"
                                : "normal";
                            } catch (e) {
                              return "normal";
                            }
                          }),
                          (i = function () {
                            return new r.default(function (e) {
                              u.runtime.sendMessage(
                                { action: "queryCurrentUrl" },
                                function (t) {
                                  e(t);
                                }
                              );
                            });
                          }),
                          (e.next = 5),
                          i()
                        );
                      case 5:
                        (l = e.sent),
                          (s = o(t, l)),
                          (e.t0 = s),
                          (e.next =
                            "inWhiteList" === e.t0
                              ? 10
                              : "notInWhiteList" === e.t0
                              ? 11
                              : "inBlackList" === e.t0
                              ? 12
                              : "notInBlackList" === e.t0
                              ? 13
                              : "normal" === e.t0
                              ? 14
                              : 15);
                        break;
                      case 10:
                      case 13:
                      case 14:
                        return e.abrupt("return", !0);
                      case 11:
                      case 12:
                        return e.abrupt("return", !1);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                undefined
              );
            })
          ));
      },
      77562: (e, t, n) => {
        "use strict";
        var r,
          a = n(85315),
          o = (r = a) && r.__esModule ? r : { default: r };
        (t.y4 = function (e) {
          var t = function e(t, n) {
            return t
              ? e(t.previousElementSibling, n || t.localName) +
                  (t.localName == n)
              : 1;
          };
          return (function e(n) {
            return n && 1 === n.nodeType
              ? n.id && document.getElementById(n.id) === n
                ? ['id("' + n.id + '")']
                : [].concat((0, o.default)(e(n.parentNode)), [
                    n.localName.toLowerCase() + "[" + t(n) + "]",
                  ])
              : [""];
          })(e).join("/");
        }),
          (t.Mc = function (e) {
            return new XPathEvaluator().evaluate(
              e,
              document.documentElement,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            ).singleNodeValue;
          });
      },
      351: (e, t, n) => {
        "use strict";
        t.jsonall = undefined;
        var r,
          a,
          o,
          i = n(88106),
          l = (r = i) && r.__esModule ? r : { default: r };
        (a = {
          airplane: "飞机",
          seaplane: "飞机",
          motorbus: "巴士",
          bus: "巴士",
          boat: "船",
        }),
          (0, l.default)(a, "bus", "公交车"),
          (0, l.default)(a, "train", "火车"),
          (0, l.default)(a, "truck", "卡车"),
          (0, l.default)(a, "motorcycle", "摩托车"),
          (0, l.default)(a, "bicycle", "自行车"),
          (t.jsonall =
            ((o = {
              горыабопагоркі: "/m/09d_r",
              знакіпрыпынку: "/m/02pv19",
              вулічныязнакі: "/m/01mqdt",
              расліны: "/m/05s2s",
              дрэвы: "/m/07j7r",
              трава: "/m/08t9c_",
              хмызнякоў: "/m/0gqbt",
              кактус: "/m/025_v",
              пальмы: "/m/0cdl1",
              прыроды: "/m/05h0n",
              вадаспады: "/m/0j2kx",
              горы: "/m/09d_r",
              пагоркі: "/m/09d_r",
              вадаёмы: "/m/03ktm1",
              рэкі: "/m/06cnp",
              пляжы: "/m/0b3yr",
              Сонца: "/m/06m_p",
              Месяц: "/m/04wv_",
              неба: "/m/01bqvp",
              транспартныхсродкаў: "/m/0k4j",
              машыны: "/m/0k4j",
              веласіпеды: "/m/0199g",
              матацыклы: "/m/04_sv",
              пікапы: "/m/0cvq3",
              камерцыйныягрузавікі: "/m/0fkwjg",
              лодкі: "/m/019jd",
              лімузіны: "/m/01lcw4",
              таксі: "/m/0pg52",
              школьныаўтобус: "/m/02yvhj",
              аўтобус: "/m/01bjv",
              будаўнічаямашына: "/m/02gx17",
              статуі: "/m/013_1c",
              фантаны: "/m/0h8lhkg",
              мост: "/m/015kr",
              прыстань: "/m/01phq4",
              хмарачос: "/m/079cl",
              слупыабокалоны: "/m/01_m7",
              вітражы: "/m/011y23",
              дом: "/m/03jm5",
              жылыдом: "/m/01nblt",
              светлавыдом: "/m/04h7h",
              чыгуначнаястанцыя: "/m/0py27",
              попелам: "/m/01n6fd",
              вогнегадрант: "/m/01pns0",
              рэкламнышчыт: "/m/01knjb",
              дарогі: "/m/06gfj",
              пешаходныяпераходы: "/m/014xcs",
              святлафор: "/m/015qff",
              гаражныядзверы: "/m/08l941",
              аўтобусныяпрыпынкі: "/m/01jw_1",
              трафіку: "/m/03sy7v",
              паркоматары: "/m/015qbp",
              лесвіцы: "/m/01lynh",
              коміны: "/m/01jk_4",
              трактары: "/m/013xlm",
              ภูเขาหรือเนินเขา: "/m/09d_r",
              ป้ายหยุด: "/m/02pv19",
              ป้ายถนน: "/m/01mqdt",
              พืช: "/m/05s2s",
              ต้นไม้: "/m/07j7r",
              หญ้า: "/m/08t9c_",
              พุ่มไม้: "/m/0gqbt",
              กระบองเพชร: "/m/025_v",
              ต้นปาล์ม: "/m/0cdl1",
              ธรรมชาติ: "/m/05h0n",
              น้ำตก: "/m/0j2kx",
              ภูเขา: "/m/09d_r",
              เนินเขา: "/m/09d_r",
              แหล่งน้ำ: "/m/03ktm1",
              แม่น้ำ: "/m/06cnp",
              ชายหาด: "/m/0b3yr",
              ดวงอาทิตย์: "/m/06m_p",
              ดวงจันทร์: "/m/04wv_",
              ท้องฟ้า: "/m/01bqvp",
              ยานพาหนะ: "/m/0k4j",
              รถ: "/m/0k4j",
              จักรยาน: "/m/0199g",
              รถจักรยานยนต์: "/m/04_sv",
              รถปิคอัพ: "/m/0cvq3",
              รถบรรทุกเชิงพาณิชย์: "/m/0fkwjg",
              เรือ: "/m/019jd",
              รถลีมูซีน: "/m/01lcw4",
              แท็กซี่: "/m/0pg52",
              รถโรงเรียน: "/m/02yvhj",
              รสบัส: "/m/01bjv",
              รถก่อสร้าง: "/m/02gx17",
              รูปปั้น: "/m/013_1c",
              น้ำพุ: "/m/0h8lhkg",
              สะพาน: "/m/015kr",
              ท่าเรือ: "/m/01phq4",
              ตึกระฟ้า: "/m/079cl",
              เสาเสา: "/m/01_m7",
              กระจกสี: "/m/011y23",
              บ้าน: "/m/03jm5",
              ตึกอพาร์ตเมนท์: "/m/01nblt",
              ประภาคาร: "/m/04h7h",
              สถานีรถไฟ: "/m/0py27",
              เถ้าถ่าน: "/m/01n6fd",
              ดับเพลิง: "/m/01pns0",
              ป้ายบิลบอร์ด: "/m/01knjb",
              ถนน: "/m/06gfj",
              ทางม้าลาย: "/m/014xcs",
              ไฟจราจร: "/m/015qff",
              ประตูโรงรถ: "/m/08l941",
              ป้ายรถเมล์: "/m/01jw_1",
              กรวยจราจร: "/m/03sy7v",
              เมตรที่จอดรถ: "/m/015qbp",
              บันได: "/m/01lynh",
              ปล่องไฟ: "/m/01jk_4",
              รถแทรกเตอร์: "/m/013xlm",
              รถบัส: "/m/01bjv",
              รถจักรยาน: "/m/0199g",
              หัวก๊อกน้ำดับเพลิง: "/m/01pns0",
              รถยนต์: "/m/0k4j",
              dağlarveyatepeler: "/m/09d_r",
              'dur"işaretleri': "/m/02pv19",
              sokakişaretleri: "/m/01mqdt",
              bitkiler: "/m/05s2s",
              ağaçlar: "/m/07j7r",
              Çimen: "/m/08t9c_",
              çalılar: "/m/0gqbt",
              kaktüs: "/m/025_v",
              Palmiyeağaçları: "/m/0cdl1",
              Doğa: "/m/05h0n",
              şelaleler: "/m/0j2kx",
              dağlar: "/m/09d_r",
              tepeler: "/m/09d_r",
              suyunbedenleri: "/m/03ktm1",
              nehirler: "/m/06cnp",
              Sahiller: "/m/0b3yr",
              Güneş: "/m/06m_p",
              Ay: "/m/04wv_",
              gökyüzü: "/m/01bqvp",
              Araçlar: "/m/0k4j",
              arabalar: "/m/0k4j",
              bisikletler: "/m/0199g",
              motosikletler: "/m/04_sv",
              kamyonetler: "/m/0cvq3",
              ticarikamyonlar: "/m/0fkwjg",
              tekneler: "/m/019jd",
              limuzinler: "/m/01lcw4",
              taksiler: "/m/0pg52",
              okulotobüsü: "/m/02yvhj",
              otobüs: "/m/01bjv",
              inşaataracı: "/m/02gx17",
              heykeller: "/m/013_1c",
              çeşmeler: "/m/0h8lhkg",
              köprü: "/m/015kr",
              iskele: "/m/01phq4",
              gökdelen: "/m/079cl",
              sütunsütunları: "/m/01_m7",
              vitray: "/m/011y23",
              ev: "/m/03jm5",
              apartmanbinası: "/m/01nblt",
              hafifev: "/m/04h7h",
              trenistasyonu: "/m/0py27",
              kül: "/m/01n6fd",
              yangınmusluğu: "/m/01pns0",
              reklampanosu: "/m/01knjb",
              yollar: "/m/06gfj",
              yayageçitleri: "/m/014xcs",
              trafikışıkları: "/m/015qff",
              garajkapıları: "/m/08l941",
              otobüsdurakları: "/m/01jw_1",
              trafikKonileri: "/m/03sy7v",
              Parksayacı: "/m/015qbp",
              merdivenler: "/m/01lynh",
              bacalar: "/m/01jk_4",
              traktörler: "/m/013xlm",
              Yangınmusluğu: "/m/01pns0",
              Traktör: "/m/013xlm",
              Trafiklambası: "/m/015qff",
              Motosikletin: "/m/04_sv",
              Baca: "/m/01jk_4",
              Merdiven: "/m/01lynh",
              Dağveyatepe: "/m/09d_r",
              Palmiyeağacı: "/m/0cdl1",
              Yayageçidi: "/m/014xcs",
              Köprü: "/m/015kr",
              Taksi: "/m/0pg52",
              Tekne: "/m/019jd",
              Otobüs: "/m/01bjv",
              Bisiklet: "/m/0199g",
              Motosiklet: "/m/04_sv",
              Taşıt: "/m/0k4j",
              Araba: "/m/0k4j",
              ストップサイン: "/m/02pv19",
              道路標識: "/m/01mqdt",
              植物: "/m/05s2s",
              木: "/m/07j7r",
              草: "/m/08t9c_",
              低木: "/m/0gqbt",
              カクタス: "/m/025_v",
              ヤシの木: "/m/0cdl1",
              自然: "/m/05h0n",
              滝: "/m/0j2kx",
              山: "/m/09d_r",
              丘: "/m/09d_r",
              水域: "/m/03ktm1",
              河川: "/m/06cnp",
              ビーチ: "/m/0b3yr",
              太陽: "/m/06m_p",
              月: "/m/04wv_",
              空: "/m/01bqvp",
              車両: "/m/0k4j",
              自動車: "/m/0k4j",
              車: "/m/0k4j",
              自転車: "/m/0199g",
              オートバイ: "/m/04_sv",
              ピックアップトラック: "/m/0cvq3",
              コマーシャルトラック: "/m/0fkwjg",
              ボート: "/m/019jd",
              リムジン: "/m/01lcw4",
              タクシー: "/m/0pg52",
              スクールバス: "/m/02yvhj",
              バス: "/m/01bjv",
              建設車両: "/m/02gx17",
              彫像: "/m/013_1c",
              噴水: "/m/0h8lhkg",
              橋: "/m/015kr",
              橋脚: "/m/01phq4",
              超高層ビル: "/m/079cl",
              柱または柱: "/m/01_m7",
              ステンドグラス: "/m/011y23",
              家: "/m/03jm5",
              アナパートメントビル: "/m/01nblt",
              灯台: "/m/04h7h",
              でんしゃのりば: "/m/0py27",
              小屋: "/m/01n6fd",
              消火剤: "/m/01pns0",
              アビルボード: "/m/01knjb",
              道路: "/m/06gfj",
              横断歩道: "/m/014xcs",
              信号機: "/m/015qff",
              交通灯: "/m/015qff",
              ガレージドア: "/m/08l941",
              バス停: "/m/01jw_1",
              トラフィックコーン: "/m/03sy7v",
              パーキングメーター: "/m/015qbp",
              階段: "/m/01lynh",
              煙突: "/m/01jk_4",
              トラクター: "/m/013xlm",
              山や丘: "/m/09d_r",
              停車標誌: "/m/02pv19",
              路牌: "/m/01mqdt",
              樹木: "/m/07j7r",
              灌木: "/m/0gqbt",
              仙人掌: "/m/025_v",
              棕櫚樹: "/m/0cdl1",
              瀑布: "/m/0j2kx",
              高山或山丘: "/m/09d_r",
              丘陵: "/m/09d_r",
              水體: "/m/03ktm1",
              河流: "/m/06cnp",
              海灘: "/m/0b3yr",
              月亮: "/m/04wv_",
              天空: "/m/01bqvp",
              車輛: "/m/0k4j",
              汽車: "/m/0k4j",
              腳踏車: "/m/0199g",
              自行車: "/m/0199g",
              機車: "/m/04_sv",
              摩托車: "/m/04_sv",
              皮卡車: "/m/0cvq3",
              商用卡車: "/m/0fkwjg",
              船: "/m/019jd",
              豪華轎車: "/m/01lcw4",
              出租車: "/m/0pg52",
              校車: "/m/02yvhj",
              公車: "/m/01bjv",
              公共汽車: "/m/01bjv",
              施工車輛: "/m/02gx17",
              雕像: "/m/013_1c",
              噴泉: "/m/0h8lhkg",
              橋梁: "/m/015kr",
              碼頭: "/m/01phq4",
              摩天大樓: "/m/079cl",
              柱子或柱子: "/m/01_m7",
              彩色玻璃: "/m/011y23",
              房子: "/m/03jm5",
              公寓樓: "/m/01nblt",
              燈塔: "/m/04h7h",
              火車站: "/m/0py27",
              一棚: "/m/01n6fd",
              消防栓: "/m/01pns0",
              廣告牌: "/m/01knjb",
              行人穿越道: "/m/014xcs",
              人行橫道: "/m/014xcs",
              紅綠燈: "/m/015qff",
              車庫門: "/m/08l941",
              巴士站: "/m/01jw_1",
              交通錐: "/m/03sy7v",
              停車場計價表: "/m/015qbp",
              樓梯: "/m/01lynh",
              煙囪: "/m/01jk_4",
              拖拉機: "/m/013xlm",
              電單車: "/m/04_sv",
              單車: "/m/0199g",
              巴士: "/m/01bjv",
              十字路口: "/m/014xcs",
              交通燈: "/m/015qff",
              斑馬線: "/m/014xcs",
              計程車: "/m/0pg52",
              的士: "/m/0pg52",
              船隻: "/m/019jd",
              山峰或山: "/m/09d_r",
              橋樑: "/m/015kr",
              "стоп-сигналы": "/m/02pv19",
              "дорожные знаки": "/m/01mqdt",
              растения: "/m/05s2s",
              деревья: "/m/07j7r",
              кустарники: "/m/0gqbt",
              "пальмовые деревья": "/m/0cdl1",
              природа: "/m/05h0n",
              водопады: "/m/0j2kx",
              холмы: "/m/09d_r",
              водоемы: "/m/03ktm1",
              реки: "/m/06cnp",
              пляжи: "/m/0b3yr",
              солнце: "/m/06m_p",
              Луна: "/m/04wv_",
              небо: "/m/01bqvp",
              "транспортные средства": "/m/0k4j",
              машины: "/m/0k4j",
              велосипеды: "/m/0199g",
              мотоциклы: "/m/04_sv",
              пикапы: "/m/0cvq3",
              "коммерческие грузовики": "/m/0fkwjg",
              лодки: "/m/019jd",
              лимузины: "/m/01lcw4",
              Таксис: "/m/0pg52",
              "школьный автобус": "/m/02yvhj",
              автобус: "/m/01bjv",
              "строительная машина": "/m/02gx17",
              статуи: "/m/013_1c",
              фонтаны: "/m/0h8lhkg",
              пирс: "/m/01phq4",
              небоскреб: "/m/079cl",
              "столбыили колонны": "/m/01_m7",
              витраж: "/m/011y23",
              "многоквартирный дом": "/m/01nblt",
              "светлый дом": "/m/04h7h",
              "железнодорожная станция": "/m/0py27",
              пепельный: "/m/01n6fd",
              "пожарный гидрант": "/m/01pns0",
              "рекламный щит": "/m/01knjb",
              дороги: "/m/06gfj",
              "пешеходные переходы": "/m/014xcs",
              светофор: "/m/015qff",
              "гаражные ворота": "/m/08l941",
              "автобусные остановки": "/m/01jw_1",
              конусы: "/m/03sy7v",
              "парковочные счетчики": "/m/015qbp",
              лестница: "/m/01lynh",
              дымоходы: "/m/01jk_4",
              тракторы: "/m/013xlm",
              автомобили: "/m/0k4j",
              горыилихолмы: "/m/09d_r",
              светофоры: "/m/015qff",
              транспортныесредства: "/m/0k4j",
              пешеходныепереходы: "/m/014xcs",
              пожарныегидранты: "/m/01pns0",
              лестницы: "/m/01lynh",
              гидрантами: "/m/01pns0",
              автобусы: "/m/01bjv",
              дымовыетрубы: "/m/01jk_4",
              трактора: "/m/013xlm",
              такси: "/m/0pg52",
              мостами: "/m/015kr",
              горичипагорби: "/m/09d_r",
              знакизупинки: "/m/02pv19",
              дорожнізнаки: "/m/01mqdt",
              рослини: "/m/05s2s",
              дерева: "/m/07j7r",
              чагарники: "/m/0gqbt",
              пальмовідерева: "/m/0cdl1",
              водоспади: "/m/0j2kx",
              гори: "/m/09d_r",
              пагорби: "/m/09d_r",
              водойми: "/m/03ktm1",
              річки: "/m/06cnp",
              пляжі: "/m/0b3yr",
              сонце: "/m/06m_p",
              Місяць: "/m/04wv_",
            }),
            (0, l.default)(o, "небо", "/m/01bqvp"),
            (0, l.default)(o, "транспортнізасоби", "/m/0k4j"),
            (0, l.default)(o, "автомобілів", "/m/0k4j"),
            (0, l.default)(o, "велосипеди", "/m/0199g"),
            (0, l.default)(o, "мотоцикли", "/m/04_sv"),
            (0, l.default)(o, "пікапи", "/m/0cvq3"),
            (0, l.default)(o, "комерційнівантажівки", "/m/0fkwjg"),
            (0, l.default)(o, "човни", "/m/019jd"),
            (0, l.default)(o, "лімузини", "/m/01lcw4"),
            (0, l.default)(o, "таксі", "/m/0pg52"),
            (0, l.default)(o, "шкільнийавтобус", "/m/02yvhj"),
            (0, l.default)(o, "автобус", "/m/01bjv"),
            (0, l.default)(o, "будівельнийавтомобіль", "/m/02gx17"),
            (0, l.default)(o, "статуї", "/m/013_1c"),
            (0, l.default)(o, "фонтани", "/m/0h8lhkg"),
            (0, l.default)(o, "міст", "/m/015kr"),
            (0, l.default)(o, "пристань", "/m/01phq4"),
            (0, l.default)(o, "хмарочос", "/m/079cl"),
            (0, l.default)(o, "стовпиабоколони", "/m/01_m7"),
            (0, l.default)(o, "вітражнескло", "/m/011y23"),
            (0, l.default)(o, "будинок", "/m/03jm5"),
            (0, l.default)(o, "багатоквартирнийбудинок", "/m/01nblt"),
            (0, l.default)(o, "світлийбудинок", "/m/04h7h"),
            (0, l.default)(o, "залізничнастанція", "/m/0py27"),
            (0, l.default)(o, "попіл", "/m/01n6fd"),
            (0, l.default)(o, "вогнегідрант", "/m/01pns0"),
            (0, l.default)(o, "білборд", "/m/01knjb"),
            (0, l.default)(o, "дороги", "/m/06gfj"),
            (0, l.default)(o, "пішохідніпереходи", "/m/014xcs"),
            (0, l.default)(o, "світлофор", "/m/015qff"),
            (0, l.default)(o, "гаражнідвері", "/m/08l941"),
            (0, l.default)(o, "автобуснізупинки", "/m/01jw_1"),
            (0, l.default)(o, "транспортніконуси", "/m/03sy7v"),
            (0, l.default)(o, "паркомати", "/m/015qbp"),
            (0, l.default)(o, "сходи", "/m/01lynh"),
            (0, l.default)(o, "димарі", "/m/01jk_4"),
            (0, l.default)(o, "трактори", "/m/013xlm"),
            (0, l.default)(o, "автомобілі", "/m/0k4j"),
            (0, l.default)(o, "горичипагорби", "/m/09d_r"),
            (0, l.default)(o, "транспортнізасоби", "/m/0k4j"),
            (0, l.default)(o, "комини", "/m/01jk_4"),
            (0, l.default)(o, "пішохідніпереходи", "/m/014xcs"),
            (0, l.default)(o, "світлофори", "/m/015qff"),
            (0, l.default)(o, "мости", "/m/015kr"),
            (0, l.default)(o, "пожежнийгідрант", "/m/01pns0"),
            (0, l.default)(o, "пальми", "/m/0cdl1"),
            (0, l.default)(o, "автобуси", "/m/01bjv"),
            (0, l.default)(o, "судна", "/m/019jd"),
            (0, l.default)(o, "пожежнігідранти", "/m/01pns0"),
            (0, l.default)(o, "montañasocolinas", "/m/09d_r"),
            (0, l.default)(o, "señalesdealto", "/m/02pv19"),
            (0, l.default)(o, "Señalesdetransito", "/m/01mqdt"),
            (0, l.default)(o, "plantas", "/m/05s2s"),
            (0, l.default)(o, "árboles", "/m/07j7r"),
            (0, l.default)(o, "césped", "/m/08t9c_"),
            (0, l.default)(o, "arbustos", "/m/0gqbt"),
            (0, l.default)(o, "cactus", "/m/025_v"),
            (0, l.default)(o, "palmeras", "/m/0cdl1"),
            (0, l.default)(o, "naturaleza", "/m/05h0n"),
            (0, l.default)(o, "cascadas", "/m/0j2kx"),
            (0, l.default)(o, "montañas", "/m/09d_r"),
            (0, l.default)(o, "sierras", "/m/09d_r"),
            (0, l.default)(o, "cuerposdeagua", "/m/03ktm1"),
            (0, l.default)(o, "ríos", "/m/06cnp"),
            (0, l.default)(o, "playas", "/m/0b3yr"),
            (0, l.default)(o, "sol", "/m/06m_p"),
            (0, l.default)(o, "Luna", "/m/04wv_"),
            (0, l.default)(o, "cielo", "/m/01bqvp"),
            (0, l.default)(o, "vehículos", "/m/0k4j"),
            (0, l.default)(o, "coches", "/m/0k4j"),
            (0, l.default)(o, "bicicletas", "/m/0199g"),
            (0, l.default)(o, "motocicletas", "/m/04_sv"),
            (0, l.default)(o, "camionetas", "/m/0cvq3"),
            (0, l.default)(o, "camionescomerciales", "/m/0fkwjg"),
            (0, l.default)(o, "barcos", "/m/019jd"),
            (0, l.default)(o, "limusinas", "/m/01lcw4"),
            (0, l.default)(o, "Taxis", "/m/0pg52"),
            (0, l.default)(o, "autobúsescolar", "/m/02yvhj"),
            (0, l.default)(o, "autobús", "/m/01bjv"),
            (0, l.default)(o, "vehículodeconstrucción", "/m/02gx17"),
            (0, l.default)(o, "estatuas", "/m/013_1c"),
            (0, l.default)(o, "fuentes", "/m/0h8lhkg"),
            (0, l.default)(o, "puente", "/m/015kr"),
            (0, l.default)(o, "muelle", "/m/01phq4"),
            (0, l.default)(o, "rascacielos", "/m/079cl"),
            (0, l.default)(o, "pilaresocolumnas", "/m/01_m7"),
            (0, l.default)(o, "Vitral", "/m/011y23"),
            (0, l.default)(o, "casa", "/m/03jm5"),
            (0, l.default)(o, "Unedificiodeapartamentos", "/m/01nblt"),
            (0, l.default)(o, "casaligera", "/m/04h7h"),
            (0, l.default)(o, "estacióndetren", "/m/0py27"),
            (0, l.default)(o, "cenizas", "/m/01n6fd"),
            (0, l.default)(o, "unabocadeincendios", "/m/01pns0"),
            (0, l.default)(o, "cartelera", "/m/01knjb"),
            (0, l.default)(o, "carreteras", "/m/06gfj"),
            (0, l.default)(o, "crucesdepeatones", "/m/014xcs"),
            (0, l.default)(o, "semáforos", "/m/015qff"),
            (0, l.default)(o, "puertasdegaraje", "/m/08l941"),
            (0, l.default)(o, "paradasdeautobus", "/m/01jw_1"),
            (0, l.default)(o, "conosdetráfico", "/m/03sy7v"),
            (0, l.default)(o, "parquímetros", "/m/015qbp"),
            (0, l.default)(o, "escalera", "/m/01lynh"),
            (0, l.default)(o, "chimeneas", "/m/01jk_4"),
            (0, l.default)(o, "tractores", "/m/013xlm"),
            (0, l.default)(o, "pasosdepeatones", "/m/014xcs"),
            (0, l.default)(o, "autobuses", "/m/01bjv"),
            (0, l.default)(o, "puentes", "/m/015kr"),
            (0, l.default)(o, "escaleras", "/m/01lynh"),
            (0, l.default)(o, "bocasdeincendios", "/m/01pns0"),
            (0, l.default)(o, "montagnesoucollines", "/m/09d_r"),
            (0, l.default)(o, "panneauxd'arrêt", "/m/02pv19"),
            (0, l.default)(o, "panneauxdesignalisation", "/m/01mqdt"),
            (0, l.default)(o, "lesplantes", "/m/05s2s"),
            (0, l.default)(o, "desarbres", "/m/07j7r"),
            (0, l.default)(o, "gazon", "/m/08t9c_"),
            (0, l.default)(o, "arbustes", "/m/0gqbt"),
            (0, l.default)(o, "cactus", "/m/025_v"),
            (0, l.default)(o, "palmiers", "/m/0cdl1"),
            (0, l.default)(o, "lanature", "/m/05h0n"),
            (0, l.default)(o, "cascades", "/m/0j2kx"),
            (0, l.default)(o, "montagnes", "/m/09d_r"),
            (0, l.default)(o, "collines", "/m/09d_r"),
            (0, l.default)(o, "corpsd'eau", "/m/03ktm1"),
            (0, l.default)(o, "rivières", "/m/06cnp"),
            (0, l.default)(o, "desplages", "/m/0b3yr"),
            (0, l.default)(o, "soleil", "/m/06m_p"),
            (0, l.default)(o, "Lune", "/m/04wv_"),
            (0, l.default)(o, "ciel", "/m/01bqvp"),
            (0, l.default)(o, "Véhicules", "/m/0k4j"),
            (0, l.default)(o, "voitures", "/m/0k4j"),
            (0, l.default)(o, "Vélos", "/m/0199g"),
            (0, l.default)(o, "motocyclettes", "/m/04_sv"),
            (0, l.default)(o, "camionnettes", "/m/0cvq3"),
            (0, l.default)(o, "camionscommerciaux", "/m/0fkwjg"),
            (0, l.default)(o, "bateaux", "/m/019jd"),
            (0, l.default)(o, "limousines", "/m/01lcw4"),
            (0, l.default)(o, "Taxis", "/m/0pg52"),
            (0, l.default)(o, "busscolaire", "/m/02yvhj"),
            (0, l.default)(o, "bus", "/m/01bjv"),
            (0, l.default)(o, "véhiculedeconstruction", "/m/02gx17"),
            (0, l.default)(o, "statues", "/m/013_1c"),
            (0, l.default)(o, "fontaines", "/m/0h8lhkg"),
            (0, l.default)(o, "pont", "/m/015kr"),
            (0, l.default)(o, "jetée", "/m/01phq4"),
            (0, l.default)(o, "gratte-ciel", "/m/079cl"),
            (0, l.default)(o, "piliersoucolonnes", "/m/01_m7"),
            (0, l.default)(o, "vitrail", "/m/011y23"),
            (0, l.default)(o, "loger", "/m/03jm5"),
            (0, l.default)(o, "unimmeuble", "/m/01nblt"),
            (0, l.default)(o, "maisonlumineuse", "/m/04h7h"),
            (0, l.default)(o, "gare", "/m/0py27"),
            (0, l.default)(o, "encendres", "/m/01n6fd"),
            (0, l.default)(o, "unebouched'incendie", "/m/01pns0"),
            (0, l.default)(o, "unpanneaud'affichage", "/m/01knjb"),
            (0, l.default)(o, "routes", "/m/06gfj"),
            (0, l.default)(o, "passagespourpiétons", "/m/014xcs"),
            (0, l.default)(o, "feuxdecirculation", "/m/015qff"),
            (0, l.default)(o, "portesdegarage", "/m/08l941"),
            (0, l.default)(o, "arrêtsd'autobus", "/m/01jw_1"),
            (0, l.default)(o, "cônesdesignalisation", "/m/03sy7v"),
            (0, l.default)(o, "parcomètres", "/m/015qbp"),
            (0, l.default)(o, "escaliers", "/m/01lynh"),
            (0, l.default)(o, "cheminées", "/m/01jk_4"),
            (0, l.default)(o, "tracteurs", "/m/013xlm"),
            (0, l.default)(o, "véhicules", "/m/0k4j"),
            (0, l.default)(o, "bouchesd'incendie", "/m/01pns0"),
            (0, l.default)(o, "vélos", "/m/0199g"),
            (0, l.default)(o, "ponts", "/m/015kr"),
            (0, l.default)(o, "borned'incendie", "/m/01pns0"),
            (0, l.default)(o, "motos", "/m/04_sv"),
            (0, l.default)(o, "BergeoderHügel", "/m/09d_r"),
            (0, l.default)(o, "StoppSchilder", "/m/02pv19"),
            (0, l.default)(o, "Straßenschilder", "/m/01mqdt"),
            (0, l.default)(o, "Pflanzen", "/m/05s2s"),
            (0, l.default)(o, "Bäume", "/m/07j7r"),
            (0, l.default)(o, "Gras", "/m/08t9c_"),
            (0, l.default)(o, "Sträucher", "/m/0gqbt"),
            (0, l.default)(o, "Kaktus", "/m/025_v"),
            (0, l.default)(o, "Palmen", "/m/0cdl1"),
            (0, l.default)(o, "Natur", "/m/05h0n"),
            (0, l.default)(o, "Wasserfälle", "/m/0j2kx"),
            (0, l.default)(o, "Berge", "/m/09d_r"),
            (0, l.default)(o, "Hügel", "/m/09d_r"),
            (0, l.default)(o, "Wasserkörper", "/m/03ktm1"),
            (0, l.default)(o, "Flüsse", "/m/06cnp"),
            (0, l.default)(o, "Strände", "/m/0b3yr"),
            (0, l.default)(o, "Sonne", "/m/06m_p"),
            (0, l.default)(o, "Mond", "/m/04wv_"),
            (0, l.default)(o, "Himmel", "/m/01bqvp"),
            (0, l.default)(o, "Fahrzeuge", "/m/0k4j"),
            (0, l.default)(o, "Autos", "/m/0k4j"),
            (0, l.default)(o, "Fahrräder", "/m/0199g"),
            (0, l.default)(o, "Motorräder", "/m/04_sv"),
            (0, l.default)(o, "Pickups", "/m/0cvq3"),
            (0, l.default)(o, "Nutzfahrzeuge", "/m/0fkwjg"),
            (0, l.default)(o, "Boote", "/m/019jd"),
            (0, l.default)(o, "Limousinen", "/m/01lcw4"),
            (0, l.default)(o, "Taxen", "/m/0pg52"),
            (0, l.default)(o, "Schulbus", "/m/02yvhj"),
            (0, l.default)(o, "Bus", "/m/01bjv"),
            (0, l.default)(o, "Baufahrzeug", "/m/02gx17"),
            (0, l.default)(o, "Statuen", "/m/013_1c"),
            (0, l.default)(o, "Brunnen", "/m/0h8lhkg"),
            (0, l.default)(o, "Brücke", "/m/015kr"),
            (0, l.default)(o, "Seebrücke", "/m/01phq4"),
            (0, l.default)(o, "Wolkenkratzer", "/m/079cl"),
            (0, l.default)(o, "SäulenoderSäulen", "/m/01_m7"),
            (0, l.default)(o, "Buntglas", "/m/011y23"),
            (0, l.default)(o, "Haus", "/m/03jm5"),
            (0, l.default)(o, "einWohnhaus", "/m/01nblt"),
            (0, l.default)(o, "Leuchtturm", "/m/04h7h"),
            (0, l.default)(o, "Bahnhof", "/m/0py27"),
            (0, l.default)(o, "einSchuppen", "/m/01n6fd"),
            (0, l.default)(o, "einHydrant", "/m/01pns0"),
            (0, l.default)(o, "eineWerbetafel", "/m/01knjb"),
            (0, l.default)(o, "Straßen", "/m/06gfj"),
            (0, l.default)(o, "Zebrastreifen", "/m/014xcs"),
            (0, l.default)(o, "Ampeln", "/m/015qff"),
            (0, l.default)(o, "Garagentore", "/m/08l941"),
            (0, l.default)(o, "Bushaltestellen", "/m/01jw_1"),
            (0, l.default)(o, "Leitkegel", "/m/03sy7v"),
            (0, l.default)(o, "Parkuhren", "/m/015qbp"),
            (0, l.default)(o, "Treppe", "/m/01lynh"),
            (0, l.default)(o, "Schornsteine", "/m/01jk_4"),
            (0, l.default)(o, "Traktoren", "/m/013xlm"),
            (0, l.default)(o, "Treppen(stufen)", "/m/01lynh"),
            (0, l.default)(o, "BergenoderHügeln", "/m/09d_r"),
            (0, l.default)(o, "Fahrzeugen", "/m/0k4j"),
            (0, l.default)(o, "Hydranten", "/m/01pns0"),
            (0, l.default)(o, "Zweirädern", "/m/04_sv"),
            (0, l.default)(o, "Fahrrädern", "/m/0199g"),
            (0, l.default)(o, "Fußgängerüberwegen", "/m/014xcs"),
            (0, l.default)(o, "Pkws", "/m/0k4j"),
            (0, l.default)(o, "Schornsteinen", "/m/01jk_4"),
            (0, l.default)(o, "Motorrädern", "/m/04_sv"),
            (0, l.default)(o, "Bussen", "/m/01bjv"),
            (0, l.default)(o, "Brücken", "/m/015kr"),
            (0, l.default)(o, "Booten", "/m/019jd"),
            (0, l.default)(o, "Feuerhydranten", "/m/01pns0"),
            (0, l.default)(o, "الجبالأوالتلال", "/m/09d_r"),
            (0, l.default)(o, "علاماتالتوقف", "/m/02pv19"),
            (0, l.default)(o, "لافتاتالشوارع", "/m/01mqdt"),
            (0, l.default)(o, "النباتات", "/m/05s2s"),
            (0, l.default)(o, "الأشجار", "/m/07j7r"),
            (0, l.default)(o, "عشب", "/m/08t9c_"),
            (0, l.default)(o, "الشجيرات", "/m/0gqbt"),
            (0, l.default)(o, "صبار", "/m/025_v"),
            (0, l.default)(o, "أشجارالنخيل", "/m/0cdl1"),
            (0, l.default)(o, "طبيعةسجية", "/m/05h0n"),
            (0, l.default)(o, "الشلالات", "/m/0j2kx"),
            (0, l.default)(o, "الجبال", "/m/09d_r"),
            (0, l.default)(o, "التلال", "/m/09d_r"),
            (0, l.default)(o, "المسطحاتالمائية", "/m/03ktm1"),
            (0, l.default)(o, "الأنهار", "/m/06cnp"),
            (0, l.default)(o, "الشواطئ", "/m/0b3yr"),
            (0, l.default)(o, "الشمس", "/m/06m_p"),
            (0, l.default)(o, "القمر", "/m/04wv_"),
            (0, l.default)(o, "سماء", "/m/01bqvp"),
            (0, l.default)(o, "مركبات", "/m/0k4j"),
            (0, l.default)(o, "سيارات", "/m/0k4j"),
            (0, l.default)(o, "دراجات", "/m/0199g"),
            (0, l.default)(o, "دراجاتنارية", "/m/04_sv"),
            (0, l.default)(o, "شاحناتصغيرة", "/m/0cvq3"),
            (0, l.default)(o, "شاحناتتجارية", "/m/0fkwjg"),
            (0, l.default)(o, "القوارب", "/m/019jd"),
            (0, l.default)(o, "سياراتالليموزين", "/m/01lcw4"),
            (0, l.default)(o, "سياراتالأجرة", "/m/0pg52"),
            (0, l.default)(o, "باصالمدرسة", "/m/02yvhj"),
            (0, l.default)(o, "أوتوبيس", "/m/01bjv"),
            (0, l.default)(o, "مركبةالبناء", "/m/02gx17"),
            (0, l.default)(o, "تماثيل", "/m/013_1c"),
            (0, l.default)(o, "نوافير", "/m/0h8lhkg"),
            (0, l.default)(o, "كوبري", "/m/015kr"),
            (0, l.default)(o, "رصيفبحري", "/m/01phq4"),
            (0, l.default)(o, "ناطحةسحاب", "/m/079cl"),
            (0, l.default)(o, "أعمدةالأعمدة", "/m/01_m7"),
            (0, l.default)(o, "زجاجملون", "/m/011y23"),
            (0, l.default)(o, "بيت", "/m/03jm5"),
            (0, l.default)(o, "مبنىسكني", "/m/01nblt"),
            (0, l.default)(o, "منارة", "/m/04h7h"),
            (0, l.default)(o, "محطةالقطار", "/m/0py27"),
            (0, l.default)(o, "أشيد", "/m/01n6fd"),
            (0, l.default)(o, "طفايةحريق", "/m/01pns0"),
            (0, l.default)(o, "abillboard", "/m/01knjb"),
            (0, l.default)(o, "الطرق", "/m/06gfj"),
            (0, l.default)(o, "ممراتالمشاة", "/m/014xcs"),
            (0, l.default)(o, "إشاراتالمرور", "/m/015qff"),
            (0, l.default)(o, "مرآب", "/m/08l941"),
            (0, l.default)(o, "محطاتالحافلات", "/m/01jw_1"),
            (0, l.default)(o, "الأقماعالمرورية", "/m/03sy7v"),
            (0, l.default)(o, "عداداتمواقفالسيارات", "/m/015qbp"),
            (0, l.default)(o, "درج", "/m/01lynh"),
            (0, l.default)(o, "مداخن", "/m/01jk_4"),
            (0, l.default)(o, "الجرارات", "/m/013xlm"),
            (0, l.default)(o, "صنابيرإطفاءحرائق", "/m/01pns0"),
            (0, l.default)(o, "إشاراتمرور", "/m/015qff"),
            (0, l.default)(o, "حافلة", "/m/01bjv"),
            (0, l.default)(o, "درّاجا", "/m/0199g"),
            (0, l.default)(o, "درّاجات", "/m/015kr"),
            (0, l.default)(o, "سياراتأجرة", "/m/0pg52"),
            (0, l.default)(o, "جسور", "/m/015kr"),
            (0, l.default)(o, "دَرَج", "/m/01lynh"),
            (0, l.default)(o, "مداخِن", "/m/01jk_4"),
            (0, l.default)(o, "دراجاتهوائية", "/m/0199g"),
            (0, l.default)(o, "ممرّاتللمشاة", "/m/014xcs"),
            (0, l.default)(o, "محبسإطفاءحريق", "/m/01pns0"),
            (0, l.default)(o, "سيارةأجرة", "/m/0pg52"),
            (0, l.default)(o, "قوارب", "/m/019jd"),
            (0, l.default)(o, "جبالأوتلال", "/m/09d_r"),
            (0, l.default)(o, "جرارات", "/m/013xlm"),
            (0, l.default)(o, "أشجارنخيل", "/m/0cdl1"),
            (0, l.default)(o, "مناطقعبورمشاة", "/m/014xcs"),
            (0, l.default)(o, "حافلات", "/m/01bjv"),
            (0, l.default)(o, "درّاجاتبخارية", "/m/04_sv"),
            (0, l.default)(o, "جرّارات", "/m/013xlm"),
            (0, l.default)(o, "पहाड़यापहाड़ियाँ", "/m/09d_r"),
            (0, l.default)(o, "स्टॉपसाइन्स", "/m/02pv19"),
            (0, l.default)(o, "सड़ककेसंकेत", "/m/01mqdt"),
            (0, l.default)(o, "पौधों", "/m/05s2s"),
            (0, l.default)(o, "पेड़", "/m/07j7r"),
            (0, l.default)(o, "घास", "/m/08t9c_"),
            (0, l.default)(o, "झाड़ियां", "/m/0gqbt"),
            (0, l.default)(o, "कैक्टस", "/m/025_v"),
            (0, l.default)(o, "खजूरकेपेड़", "/m/0cdl1"),
            (0, l.default)(o, "प्रकृति", "/m/05h0n"),
            (0, l.default)(o, "झरने", "/m/0j2kx"),
            (0, l.default)(o, "पहाड़ों", "/m/09d_r"),
            (0, l.default)(o, "हिल्स", "/m/09d_r"),
            (0, l.default)(o, "जलनिकायों", "/m/03ktm1"),
            (0, l.default)(o, "नदियों", "/m/06cnp"),
            (0, l.default)(o, "समुद्रतटों", "/m/0b3yr"),
            (0, l.default)(o, "रवि", "/m/06m_p"),
            (0, l.default)(o, "चंद्रमा", "/m/04wv_"),
            (0, l.default)(o, "आकाश", "/m/01bqvp"),
            (0, l.default)(o, "वाहनों", "/m/0k4j"),
            (0, l.default)(o, "कारों", "/m/0k4j"),
            (0, l.default)(o, "साइकिलें", "/m/0199g"),
            (0, l.default)(o, "मोटरसाइकिलें", "/m/04_sv"),
            (0, l.default)(o, "ढोनेवालेट्रकों", "/m/0cvq3"),
            (0, l.default)(o, "वाणिज्यिकट्रक", "/m/0fkwjg"),
            (0, l.default)(o, "नौकाओं", "/m/019jd"),
            (0, l.default)(o, "limousines", "/m/01lcw4"),
            (0, l.default)(o, "टैक्सी", "/m/0pg52"),
            (0, l.default)(o, "स्कूलबस", "/m/02yvhj"),
            (0, l.default)(o, "बस", "/m/01bjv"),
            (0, l.default)(o, "निर्माणवाहन", "/m/02gx17"),
            (0, l.default)(o, "मूर्तियों", "/m/013_1c"),
            (0, l.default)(o, "फव्वारे", "/m/0h8lhkg"),
            (0, l.default)(o, "पुल", "/m/015kr"),
            (0, l.default)(o, "घाट", "/m/01phq4"),
            (0, l.default)(o, "गगनचुंबीइमारत", "/m/079cl"),
            (0, l.default)(o, "स्तंभयास्तंभ", "/m/01_m7"),
            (0, l.default)(o, "रंगीनकांच", "/m/011y23"),
            (0, l.default)(o, "मकान", "/m/03jm5"),
            (0, l.default)(o, "अपार्टमेंटइमारत", "/m/01nblt"),
            (0, l.default)(o, "लाइटहाउस", "/m/04h7h"),
            (0, l.default)(o, "रेलवेस्टेशन", "/m/0py27"),
            (0, l.default)(o, "एकछप्पर", "/m/01n6fd"),
            (0, l.default)(o, "अग्निहाइड्रेंट", "/m/01pns0"),
            (0, l.default)(o, "बिलबोर्ड", "/m/01knjb"),
            (0, l.default)(o, "सड़कें", "/m/06gfj"),
            (0, l.default)(o, "क्रॉसवॉक", "/m/014xcs"),
            (0, l.default)(o, "यातायातबत्तिया", "/m/015qff"),
            (0, l.default)(o, "गैरेजकेदरवाजे", "/m/08l941"),
            (0, l.default)(o, "बसरूकनेकीजगह", "/m/01jw_1"),
            (0, l.default)(o, "ट्रैफिककोनस", "/m/03sy7v"),
            (0, l.default)(o, "पार्किंगमीटर", "/m/015qbp"),
            (0, l.default)(o, "सीढ़ियां", "/m/01lynh"),
            (0, l.default)(o, "चिमनियां", "/m/01jk_4"),
            (0, l.default)(o, "ट्रैक्टर", "/m/013xlm"),
            (0, l.default)(o, "अग्निशामकहाईड्रेंट", "/m/01pns0"),
            (0, l.default)(o, "पैदलपारपथ", "/m/014xcs"),
            (0, l.default)(o, "ट्रैफ़िकलाइट", "/m/014xcs"),
            (0, l.default)(o, "पुलों", "/m/015kr"),
            (0, l.default)(o, "सीढ़ियों", "/m/01lynh"),
            (0, l.default)(o, "पहाड़यापहाड़ी", "/m/09d_r"),
            (0, l.default)(o, "वाहन", "/m/0k4j"),
            (0, l.default)(o, "मोटरसाइकल", "/m/04_sv"),
            (0, l.default)(o, "साइकल", "/m/0199g"),
            (0, l.default)(o, "चिमनी", "/m/01jk_4"),
            (0, l.default)(o, "साइकलों", "/m/0199g"),
            (0, l.default)(o, "bergenofheuvels", "/m/09d_r"),
            (0, l.default)(o, "stoptekens", "/m/02pv19"),
            (0, l.default)(o, "verkeersborden", "/m/01mqdt"),
            (0, l.default)(o, "planten", "/m/05s2s"),
            (0, l.default)(o, "bomen", "/m/07j7r"),
            (0, l.default)(o, "gras", "/m/08t9c_"),
            (0, l.default)(o, "struiken", "/m/0gqbt"),
            (0, l.default)(o, "cactus", "/m/025_v"),
            (0, l.default)(o, "palmbomen", "/m/0cdl1"),
            (0, l.default)(o, "natuur", "/m/05h0n"),
            (0, l.default)(o, "watervallen", "/m/0j2kx"),
            (0, l.default)(o, "bergen", "/m/09d_r"),
            (0, l.default)(o, "heuvels", "/m/09d_r"),
            (0, l.default)(o, "waterlichamen", "/m/03ktm1"),
            (0, l.default)(o, "rivieren", "/m/06cnp"),
            (0, l.default)(o, "stranden", "/m/0b3yr"),
            (0, l.default)(o, "zon", "/m/06m_p"),
            (0, l.default)(o, "Maan", "/m/04wv_"),
            (0, l.default)(o, "lucht", "/m/01bqvp"),
            (0, l.default)(o, "voertuigen", "/m/0k4j"),
            (0, l.default)(o, "auto's", "/m/0k4j"),
            (0, l.default)(o, "fietsen", "/m/0199g"),
            (0, l.default)(o, "motorfietsen", "/m/04_sv"),
            (0, l.default)(o, "pick-uptrucks", "/m/0cvq3"),
            (0, l.default)(o, "commerciëlevrachtwagens", "/m/0fkwjg"),
            (0, l.default)(o, "boten", "/m/019jd"),
            (0, l.default)(o, "limousines", "/m/01lcw4"),
            (0, l.default)(o, "taxi's", "/m/0pg52"),
            (0, l.default)(o, "schoolbus", "/m/02yvhj"),
            (0, l.default)(o, "bus", "/m/01bjv"),
            (0, l.default)(o, "bouwvoertuig", "/m/02gx17"),
            (0, l.default)(o, "standbeelden", "/m/013_1c"),
            (0, l.default)(o, "fonteinen", "/m/0h8lhkg"),
            (0, l.default)(o, "brug", "/m/015kr"),
            (0, l.default)(o, "pier", "/m/01phq4"),
            (0, l.default)(o, "wolkenkrabber", "/m/079cl"),
            (0, l.default)(o, "pijlersofkolommen", "/m/01_m7"),
            (0, l.default)(o, "glas-in-lood", "/m/011y23"),
            (0, l.default)(o, "huis", "/m/03jm5"),
            (0, l.default)(o, "eenappartementsgebouw", "/m/01nblt"),
            (0, l.default)(o, "vuurtoren", "/m/04h7h"),
            (0, l.default)(o, "treinstation", "/m/0py27"),
            (0, l.default)(o, "indeasgelegd", "/m/01n6fd"),
            (0, l.default)(o, "brandkraan", "/m/01pns0"),
            (0, l.default)(o, "prikbord", "/m/01knjb"),
            (0, l.default)(o, "wegen", "/m/06gfj"),
            (0, l.default)(o, "zebrapaden", "/m/014xcs"),
            (0, l.default)(o, "verkeerslichten", "/m/015qff"),
            (0, l.default)(o, "garagedeuren", "/m/08l941"),
            (0, l.default)(o, "busstopt", "/m/01jw_1"),
            (0, l.default)(o, "verkeerskegels", "/m/03sy7v"),
            (0, l.default)(o, "parkeermeters", "/m/015qbp"),
            (0, l.default)(o, "trap", "/m/01lynh"),
            (0, l.default)(o, "schoorstenen", "/m/01jk_4"),
            (0, l.default)(o, "tractoren", "/m/013xlm"),
            (0, l.default)(o, "eenbrandkraan", "/m/01pns0"),
            (0, l.default)(o, "trappen", "/m/01lynh"),
            (0, l.default)(o, "eenbrandkraan", "/m/01pns0"),
            (0, l.default)(o, "oversteekplaatsen", "/m/014xcs"),
            (0, l.default)(o, "bussen", "/m/01bjv"),
            (0, l.default)(o, "bussen", "/m/01bjv"),
            (0, l.default)(o, "bruggen", "/m/015kr"),
            (0, l.default)(o, "gunungataubukit", "/m/09d_r"),
            (0, l.default)(o, "tandaberhenti", "/m/02pv19"),
            (0, l.default)(o, "rambujalan", "/m/01mqdt"),
            (0, l.default)(o, "tanaman", "/m/05s2s"),
            (0, l.default)(o, "pohon", "/m/07j7r"),
            (0, l.default)(o, "rumput", "/m/08t9c_"),
            (0, l.default)(o, "semakbelukar", "/m/0gqbt"),
            (0, l.default)(o, "kaktus", "/m/025_v"),
            (0, l.default)(o, "pohon-pohonpalem", "/m/0cdl1"),
            (0, l.default)(o, "alam", "/m/05h0n"),
            (0, l.default)(o, "airterjun", "/m/0j2kx"),
            (0, l.default)(o, "pegunungan", "/m/09d_r"),
            (0, l.default)(o, "bukit", "/m/09d_r"),
            (0, l.default)(o, "badanair", "/m/03ktm1"),
            (0, l.default)(o, "sungai", "/m/06cnp"),
            (0, l.default)(o, "pantai", "/m/0b3yr"),
            (0, l.default)(o, "matahari", "/m/06m_p"),
            (0, l.default)(o, "Bulan", "/m/04wv_"),
            (0, l.default)(o, "langit", "/m/01bqvp"),
            (0, l.default)(o, "kendaraan", "/m/0k4j"),
            (0, l.default)(o, "mobil", "/m/0k4j"),
            (0, l.default)(o, "sepeda", "/m/0199g"),
            (0, l.default)(o, "sepedamotor", "/m/04_sv"),
            (0, l.default)(o, "trukpickup", "/m/0cvq3"),
            (0, l.default)(o, "trukkomersial", "/m/0fkwjg"),
            (0, l.default)(o, "perahu", "/m/019jd"),
            (0, l.default)(o, "limusin", "/m/01lcw4"),
            (0, l.default)(o, "taksi", "/m/0pg52"),
            (0, l.default)(o, "bussekolah", "/m/02yvhj"),
            (0, l.default)(o, "bis", "/m/01bjv"),
            (0, l.default)(o, "kendaraankonstruksi", "/m/02gx17"),
            (0, l.default)(o, "patung", "/m/013_1c"),
            (0, l.default)(o, "airmancur", "/m/0h8lhkg"),
            (0, l.default)(o, "menjembatani", "/m/015kr"),
            (0, l.default)(o, "dermaga", "/m/01phq4"),
            (0, l.default)(o, "gedungpencakarlangit", "/m/079cl"),
            (0, l.default)(o, "pilarataukolom", "/m/01_m7"),
            (0, l.default)(o, "kacaberwarna", "/m/011y23"),
            (0, l.default)(o, "rumah", "/m/03jm5"),
            (0, l.default)(o, "sebuahgedungapartemen", "/m/01nblt"),
            (0, l.default)(o, "rumahcahaya", "/m/04h7h"),
            (0, l.default)(o, "Stasiunkereta", "/m/0py27"),
            (0, l.default)(o, "pucat", "/m/01n6fd"),
            (0, l.default)(o, "pemadamkebakaran", "/m/01pns0"),
            (0, l.default)(o, "papanreklame", "/m/01knjb"),
            (0, l.default)(o, "jalan", "/m/06gfj"),
            (0, l.default)(o, "penyeberangan", "/m/014xcs"),
            (0, l.default)(o, "lampulalulintas", "/m/015qff"),
            (0, l.default)(o, "pintugarasi", "/m/08l941"),
            (0, l.default)(o, "haltebus", "/m/01jw_1"),
            (0, l.default)(o, "kerucutlalulintas", "/m/03sy7v"),
            (0, l.default)(o, "meteranparkir", "/m/015qbp"),
            (0, l.default)(o, "tangga", "/m/01lynh"),
            (0, l.default)(o, "cerobong", "/m/01jk_4"),
            (0, l.default)(o, "traktor", "/m/013xlm"),
            (0, l.default)(o, "hidrankebakaran", "/m/01pns0"),
            (0, l.default)(o, "jembatan", "/m/015kr"),
            (0, l.default)(o, "zebracross", "/m/014xcs"),
            (0, l.default)(o, "motor", "/m/04_sv"),
            (0, l.default)(o, "cerobongasap", "/m/01jk_4"),
            (0, l.default)(o, "pohonpalem", "/m/0cdl1"),
            (0, l.default)(o, "montanhasoucolinas", "/m/09d_r"),
            (0, l.default)(o, "sinaisdeparada", "/m/02pv19"),
            (0, l.default)(o, "Sinaisdetransito", "/m/01mqdt"),
            (0, l.default)(o, "plantas", "/m/05s2s"),
            (0, l.default)(o, "árvores", "/m/07j7r"),
            (0, l.default)(o, "Relva", "/m/08t9c_"),
            (0, l.default)(o, "arbustos", "/m/0gqbt"),
            (0, l.default)(o, "cacto", "/m/025_v"),
            (0, l.default)(o, "Palmeiras", "/m/0cdl1"),
            (0, l.default)(o, "natureza", "/m/05h0n"),
            (0, l.default)(o, "cachoeiras", "/m/0j2kx"),
            (0, l.default)(o, "montanhas", "/m/09d_r"),
            (0, l.default)(o, "Colinas", "/m/09d_r"),
            (0, l.default)(o, "corposdeágua", "/m/03ktm1"),
            (0, l.default)(o, "rios", "/m/06cnp"),
            (0, l.default)(o, "praias", "/m/0b3yr"),
            (0, l.default)(o, "sol", "/m/06m_p"),
            (0, l.default)(o, "Lua", "/m/04wv_"),
            (0, l.default)(o, "céu", "/m/01bqvp"),
            (0, l.default)(o, "veículos", "/m/0k4j"),
            (0, l.default)(o, "carros", "/m/0k4j"),
            (0, l.default)(o, "bicicletas", "/m/0199g"),
            (0, l.default)(o, "motocicletas", "/m/04_sv"),
            (0, l.default)(o, "Caminhões", "/m/0cvq3"),
            (0, l.default)(o, "caminhõescomerciais", "/m/0fkwjg"),
            (0, l.default)(o, "barcos", "/m/019jd"),
            (0, l.default)(o, "limusines", "/m/01lcw4"),
            (0, l.default)(o, "Táxis", "/m/0pg52"),
            (0, l.default)(o, "ônibusescolar", "/m/02yvhj"),
            (0, l.default)(o, "ônibus", "/m/01bjv"),
            (0, l.default)(o, "veículodeconstrução", "/m/02gx17"),
            (0, l.default)(o, "estátuas", "/m/013_1c"),
            (0, l.default)(o, "fontes", "/m/0h8lhkg"),
            (0, l.default)(o, "Ponte", "/m/015kr"),
            (0, l.default)(o, "cais", "/m/01phq4"),
            (0, l.default)(o, "arranha-céu", "/m/079cl"),
            (0, l.default)(o, "pilaresoucolunas", "/m/01_m7"),
            (0, l.default)(o, "vitrais", "/m/011y23"),
            (0, l.default)(o, "lar", "/m/03jm5"),
            (0, l.default)(o, "umprédiodeapartamentos", "/m/01nblt"),
            (0, l.default)(o, "casadeluz", "/m/04h7h"),
            (0, l.default)(o, "estaçãodetrem", "/m/0py27"),
            (0, l.default)(o, "cinza", "/m/01n6fd"),
            (0, l.default)(o, "hidrante", "/m/01pns0"),
            (0, l.default)(o, "quadrodeavisos", "/m/01knjb"),
            (0, l.default)(o, "estradas", "/m/06gfj"),
            (0, l.default)(o, "faixasdepedestres", "/m/014xcs"),
            (0, l.default)(o, "luzesdetrânsito", "/m/015qff"),
            (0, l.default)(o, "portasdegaragem", "/m/08l941"),
            (0, l.default)(o, "pontodeônibus", "/m/01jw_1"),
            (0, l.default)(o, "Conesdetráfego", "/m/03sy7v"),
            (0, l.default)(o, "parquímetros", "/m/015qbp"),
            (0, l.default)(o, "escadaria", "/m/01lynh"),
            (0, l.default)(o, "chaminés", "/m/01jk_4"),
            (0, l.default)(o, "tratores", "/m/013xlm"),
            (0, l.default)(o, "escadas", "/m/01lynh"),
            (0, l.default)(o, "faixasdepedestre", "/m/014xcs"),
            (0, l.default)(o, "palmeiras", "/m/0cdl1"),
            (0, l.default)(o, "umhidrante", "/m/01pns0"),
            (0, l.default)(o, "pontes", "/m/015kr"),
            (0, l.default)(o, "táxis", "/m/0pg52"),
            (0, l.default)(o, "hidrantes", "/m/01pns0"),
            (0, l.default)(o, "hidrantes", "/m/01pns0"),
            (0, l.default)(o, "núihoặcđồi", "/m/09d_r"),
            (0, l.default)(o, "điểmdừng", "/m/02pv19"),
            (0, l.default)(o, "đườngphố", "/m/01mqdt"),
            (0, l.default)(o, "cây", "/m/07j7r"),
            (0, l.default)(o, "bãicỏ", "/m/08t9c_"),
            (0, l.default)(o, "câybụi", "/m/0gqbt"),
            (0, l.default)(o, "câyxươngrồng", "/m/025_v"),
            (0, l.default)(o, "câycọ", "/m/0cdl1"),
            (0, l.default)(o, "Thiênnhiên", "/m/05h0n"),
            (0, l.default)(o, "thácnước", "/m/0j2kx"),
            (0, l.default)(o, "núinon", "/m/09d_r"),
            (0, l.default)(o, "đồinúi", "/m/09d_r"),
            (0, l.default)(o, "nguồnnước", "/m/03ktm1"),
            (0, l.default)(o, "sông", "/m/06cnp"),
            (0, l.default)(o, "bãibiển", "/m/0b3yr"),
            (0, l.default)(o, "mặttrời", "/m/06m_p"),
            (0, l.default)(o, "Mặttrăng", "/m/04wv_"),
            (0, l.default)(o, "bầutrời", "/m/01bqvp"),
            (0, l.default)(o, "xecộ", "/m/0k4j"),
            (0, l.default)(o, "ôtô", "/m/0k4j"),
            (0, l.default)(o, "xeđạp", "/m/0199g"),
            (0, l.default)(o, "xemáy", "/m/04_sv"),
            (0, l.default)(o, "xebántải", "/m/0cvq3"),
            (0, l.default)(o, "xetảithươngmại", "/m/0fkwjg"),
            (0, l.default)(o, "thuyền", "/m/019jd"),
            (0, l.default)(o, "xelimousine", "/m/01lcw4"),
            (0, l.default)(o, "taxi", "/m/0pg52"),
            (0, l.default)(o, "xebuýtcủatrường", "/m/02yvhj"),
            (0, l.default)(o, "xebuýt", "/m/01bjv"),
            (0, l.default)(o, "xexâydựng", "/m/02gx17"),
            (0, l.default)(o, "nhữngbứctượng", "/m/013_1c"),
            (0, l.default)(o, "đàiphunnước", "/m/0h8lhkg"),
            (0, l.default)(o, "cầu", "/m/015kr"),
            (0, l.default)(o, "đê", "/m/01phq4"),
            (0, l.default)(o, "tòanhàchọctrời", "/m/079cl"),
            (0, l.default)(o, "cộttrụ", "/m/01_m7"),
            (0, l.default)(o, "kínhmàu", "/m/011y23"),
            (0, l.default)(o, "nhàở", "/m/03jm5"),
            (0, l.default)(o, "tòanhàchungcư", "/m/01nblt"),
            (0, l.default)(o, "ngôinhàánhsáng", "/m/04h7h"),
            (0, l.default)(o, "gaxelửa", "/m/0py27"),
            (0, l.default)(o, "trotàn", "/m/01n6fd"),
            (0, l.default)(o, "afirehydrant", "/m/01pns0"),
            (0, l.default)(o, "abillboard", "/m/01knjb"),
            (0, l.default)(o, "nhữngconđường", "/m/06gfj"),
            (0, l.default)(o, "băngquađường", "/m/014xcs"),
            (0, l.default)(o, "đèngiaothông", "/m/015qff"),
            (0, l.default)(o, "nhàđểxe", "/m/08l941"),
            (0, l.default)(o, "trạmdừngxebuýt", "/m/01jw_1"),
            (0, l.default)(o, "giaothông", "/m/03sy7v"),
            (0, l.default)(o, "đồnghồđỗxe", "/m/015qbp"),
            (0, l.default)(o, "cầuthang", "/m/01lynh"),
            (0, l.default)(o, "ốngkhói", "/m/01jk_4"),
            (0, l.default)(o, "máykéo", "/m/013xlm"),
            (0, l.default)(o, "vạchquađường", "/m/014xcs"),
            (0, l.default)(o, "xehơi", "/m/0k4j"),
            (0, l.default)(o, "trụcấpnướcchữacháy", "/m/01pns0"),
            (0, l.default)(o, "vòilấynướcchữacháy", "/m/01pns0"),
            (0, l.default)(o, "xegắnmáy", "/m/04_sv"),
            (0, l.default)(o, "bundokoburol", "/m/09d_r"),
            (0, l.default)(o, "stopsigns", "/m/02pv19"),
            (0, l.default)(o, "Tandangmgakalye", "/m/01mqdt"),
            (0, l.default)(o, "halaman", "/m/05s2s"),
            (0, l.default)(o, "mgapuno", "/m/07j7r"),
            (0, l.default)(o, "damo", "/m/08t9c_"),
            (0, l.default)(o, "mgapalumpong", "/m/0gqbt"),
            (0, l.default)(o, "cactus", "/m/025_v"),
            (0, l.default)(o, "mgapunongpalma", "/m/0cdl1"),
            (0, l.default)(o, "kalikasan", "/m/05h0n"),
            (0, l.default)(o, "talon", "/m/0j2kx"),
            (0, l.default)(o, "mgabundok", "/m/09d_r"),
            (0, l.default)(o, "mgaburol", "/m/09d_r"),
            (0, l.default)(o, "anyongtubig", "/m/03ktm1"),
            (0, l.default)(o, "mgailog", "/m/06cnp"),
            (0, l.default)(o, "mgabeach", "/m/0b3yr"),
            (0, l.default)(o, "Araw", "/m/06m_p"),
            (0, l.default)(o, "Buwan", "/m/04wv_"),
            (0, l.default)(o, "langit", "/m/01bqvp"),
            (0, l.default)(o, "mgasasakyan", "/m/0k4j"),
            (0, l.default)(o, "mgabisikleta", "/m/0199g"),
            (0, l.default)(o, "mgamotorsiklo", "/m/04_sv"),
            (0, l.default)(o, "mgapickuptruck", "/m/0cvq3"),
            (0, l.default)(o, "mgakomersyalnatrak", "/m/0fkwjg"),
            (0, l.default)(o, "mgabangka", "/m/019jd"),
            (0, l.default)(o, "mgalimousine", "/m/01lcw4"),
            (0, l.default)(o, "mgataxi", "/m/0pg52"),
            (0, l.default)(o, "busngeskwelahan", "/m/02yvhj"),
            (0, l.default)(o, "bus", "/m/01bjv"),
            (0, l.default)(o, "sasakyangpang-konstruksyon", "/m/02gx17"),
            (0, l.default)(o, "mgaestatwa", "/m/013_1c"),
            (0, l.default)(o, "mgafountain", "/m/0h8lhkg"),
            (0, l.default)(o, "tulay", "/m/015kr"),
            (0, l.default)(o, "pier", "/m/01phq4"),
            (0, l.default)(o, "napakataasnagusali", "/m/079cl"),
            (0, l.default)(o, "mgahaligiohaligi", "/m/01_m7"),
            (0, l.default)(o, "minantsahangsalamin", "/m/011y23"),
            (0, l.default)(o, "bahay", "/m/03jm5"),
            (0, l.default)(o, "gusalingisangapartment", "/m/01nblt"),
            (0, l.default)(o, "ilawnabahay", "/m/04h7h"),
            (0, l.default)(o, "istasyonngtren", "/m/0py27"),
            (0, l.default)(o, "abo", "/m/01n6fd"),
            (0, l.default)(o, "afirehydrant", "/m/01pns0"),
            (0, l.default)(o, "abillboard", "/m/01knjb"),
            (0, l.default)(o, "mgakalsada", "/m/06gfj"),
            (0, l.default)(o, "mgatawiran", "/m/014xcs"),
            (0, l.default)(o, "ilawtrapiko", "/m/015qff"),
            (0, l.default)(o, "mgagarageddoor", "/m/08l941"),
            (0, l.default)(o, "hintuanngbus", "/m/01jw_1"),
            (0, l.default)(o, "mgatrafficcone", "/m/03sy7v"),
            (0, l.default)(o, "metrongparadahan", "/m/015qbp"),
            (0, l.default)(o, "hagdan", "/m/01lynh"),
            (0, l.default)(o, "mgatsimenea", "/m/01jk_4"),
            (0, l.default)(o, "mgatraktora", "/m/013xlm"),
            (0, l.default)(o, "mgacrosswalk", "/m/014xcs"),
            (0, l.default)(o, "mgailaw-trapiko", "/m/015qff"),
            (0, l.default)(o, "firehydrant", "/m/01pns0"),
            (0, l.default)(o, "mgakotse", "/m/0k4j"),
            (0, l.default)(o, "mgachimney", "/m/01jk_4"),
            (0, l.default)(o, "mgapalmtree", "/m/0cdl1"),
            (0, l.default)(o, "mgahagdan", "/m/01lynh"),
            (0, l.default)(o, "mgabus", "/m/01bjv"),
            (0, l.default)(o, "mgafirehydrant", "/m/01pns0"),
            (0, l.default)(o, "mgatulay", "/m/015kr"),
            (0, l.default)(o, "ພູເຂົາຫຼືເນີນພູ", "/m/09d_r"),
            (0, l.default)(o, "ປ້າຍຢຸດ", "/m/02pv19"),
            (0, l.default)(o, "ປ້າຍຖະໜົນ", "/m/01mqdt"),
            (0, l.default)(o, "ພືດ", "/m/05s2s"),
            (0, l.default)(o, "ຕົ້ນໄມ້", "/m/07j7r"),
            (0, l.default)(o, "ຫຍ້າ", "/m/08t9c_"),
            (0, l.default)(o, "ໄມ້ພຸ່ມ", "/m/0gqbt"),
            (0, l.default)(o, "ກະທຽມ", "/m/025_v"),
            (0, l.default)(o, "ໄມ້​ຢືນ​ຕົ້ນ​ປາມ", "/m/0cdl1"),
            (0, l.default)(o, "ທໍາມະຊາດ", "/m/05h0n"),
            (0, l.default)(o, "ນ້ຳຕົກຕາດ", "/m/0j2kx"),
            (0, l.default)(o, "ພູເຂົາ", "/m/09d_r"),
            (0, l.default)(o, "ເນີນ​ພູ", "/m/09d_r"),
            (0, l.default)(o, "ຮ່າງກາຍຂອງນ້ໍາ", "/m/03ktm1"),
            (0, l.default)(o, "ແມ່ນ້ຳ", "/m/06cnp"),
            (0, l.default)(o, "ຫາດຊາຍ", "/m/0b3yr"),
            (0, l.default)(o, "ຕາເວັນ", "/m/06m_p"),
            (0, l.default)(o, "ດວງຈັນ", "/m/04wv_"),
            (0, l.default)(o, "ທອງຟ້າ", "/m/01bqvp"),
            (0, l.default)(o, "ພາຫະນະ", "/m/0k4j"),
            (0, l.default)(o, "ລົດ", "/m/0k4j"),
            (0, l.default)(o, "ລົດຖີບ", "/m/0199g"),
            (0, l.default)(o, "ລົດຈັກ", "/m/04_sv"),
            (0, l.default)(o, "ລົດກະບະ", "/m/0cvq3"),
            (0, l.default)(o, "ລົດບັນທຸກການຄ້າ", "/m/0fkwjg"),
            (0, l.default)(o, "ເຮືອ", "/m/019jd"),
            (0, l.default)(o, "ລົດລີມູຊີນ", "/m/01lcw4"),
            (0, l.default)(o, "ແທັກຊີ", "/m/0pg52"),
            (0, l.default)(o, "ລົດ​ເມ​ໂຮງ​ຮຽນ", "/m/02yvhj"),
            (0, l.default)(o, "ລົດເມ", "/m/01bjv"),
            (0, l.default)(o, "ພາຫະນະກໍ່ສ້າງ", "/m/02gx17"),
            (0, l.default)(o, "ຮູບປັ້ນ", "/m/013_1c"),
            (0, l.default)(o, "ນ້ຳພຸ", "/m/0h8lhkg"),
            (0, l.default)(o, "ຂົວ", "/m/015kr"),
            (0, l.default)(o, "ທ່າເຮືອ", "/m/01phq4"),
            (0, l.default)(o, "ຕຶກສູງ", "/m/079cl"),
            (0, l.default)(o, "ຖັນເສົາ", "/m/01_m7"),
            (0, l.default)(o, "ແກ້ວສີ", "/m/011y23"),
            (0, l.default)(o, "ເຮືອນ", "/m/03jm5"),
            (0, l.default)(o, "ຕຶກອາພາດເມັນ", "/m/01nblt"),
            (0, l.default)(o, "ເຮືອນແສງສະຫວ່າງ", "/m/04h7h"),
            (0, l.default)(o, "ສະຖານີລົດໄຟ", "/m/0py27"),
            (0, l.default)(o, "ຂີ້ເທົ່າ", "/m/01n6fd"),
            (0, l.default)(o, "ນໍ້າດັບເພີງ", "/m/01pns0"),
            (0, l.default)(o, "ປ້າຍໂຄສະນາ", "/m/01knjb"),
            (0, l.default)(o, "ຖະໜົນຫົນທາງ", "/m/06gfj"),
            (0, l.default)(o, "ທາງຂ້າມ", "/m/014xcs"),
            (0, l.default)(o, "ໄຟ​ອໍາ​ນາດ", "/m/015qff"),
            (0, l.default)(o, "garagedoors", "/m/08l941"),
            (0, l.default)(o, "ປ້າຍລົດເມ", "/m/01jw_1"),
            (0, l.default)(o, "ໂຄນການຈະລາຈອນ", "/m/03sy7v"),
            (0, l.default)(o, "ແມັດບ່ອນຈອດລົດ", "/m/015qbp"),
            (0, l.default)(o, "ຂັ້ນໄດ", "/m/01lynh"),
            (0, l.default)(o, "ທໍ່ໄຟ", "/m/01jk_4"),
            (0, l.default)(o, "ລົດໄຖນາ", "/m/013xlm"),
            (0, l.default)(o, "ລົດໃຫຍ່", "/m/0k4j"),
            (0, l.default)(o, "ພູຫຼືຜາ", "/m/09d_r"),
            (0, l.default)(o, "ລົດໃຫຍ່", "/m/0k4j"),
            (0, l.default)(o, "ໄຟຈະລາຈອນ", "/m/015qff"),
            (0, l.default)(o, "ບ່ອນຂ້າມທາງ", "/m/014xcs"),
            (0, l.default)(o, "ຫົວ​ສີດ​ນ້ຳ​ດັບ​ເພີງ", "/m/01pns0"),
            (0, l.default)(o, "ທາງມ້າລາຍ", "/m/014xcs"),
            (0, l.default)(o, "ຕົ້ນປາມ", "/m/0cdl1"),
            (0, l.default)(o, "ປ່ອງຄວັນໄຟ", "/m/01jk_4"),
            (0, l.default)(o, "ລົດແທຣັກເຕີ", "/m/013xlm"),
            (0, l.default)(o, "ຫົວດັບເພີງ", "/m/01pns0"),
            (0, l.default)(o, "ຫົວດັບເພີງ", "/m/01pns0"),
            (0, l.default)(o, "တောင်များသို့မဟုတ်တောင်များ", "/m/09d_r"),
            (0, l.default)(o, "မှတ်တိုင်များ", "/m/02pv19"),
            (0, l.default)(o, "လမ်းဆိုင်းဘုတ်များ", "/m/01mqdt"),
            (0, l.default)(o, "အပင်များ", "/m/05s2s"),
            (0, l.default)(o, "သစ်ပင်များ", "/m/07j7r"),
            (0, l.default)(o, "မြက်", "/m/08t9c_"),
            (0, l.default)(o, "ပေါက်ပင်များ", "/m/0gqbt"),
            (0, l.default)(o, "ရှားစောင်း", "/m/025_v"),
            (0, l.default)(o, "ထန်းပင်များ", "/m/0cdl1"),
            (0, l.default)(o, "သဘာဝ", "/m/05h0n"),
            (0, l.default)(o, "ရေတံခွန်များ", "/m/0j2kx"),
            (0, l.default)(o, "တောင်များ", "/m/09d_r"),
            (0, l.default)(o, "တောင်တွေ", "/m/09d_r"),
            (0, l.default)(o, "ရေတွင်း", "/m/03ktm1"),
            (0, l.default)(o, "မြစ်များ", "/m/06cnp"),
            (0, l.default)(o, "ကမ်းခြေများ", "/m/0b3yr"),
            (0, l.default)(o, "နေမင်း", "/m/06m_p"),
            (0, l.default)(o, "မွန်း", "/m/04wv_"),
            (0, l.default)(o, "ကောင်းကင်", "/m/01bqvp"),
            (0, l.default)(o, "ယာဉ်များ", "/m/0k4j"),
            (0, l.default)(o, "ကားများ", "/m/0k4j"),
            (0, l.default)(o, "စက်ဘီး", "/m/0199g"),
            (0, l.default)(o, "ဆိုင်ကယ်များ", "/m/04_sv"),
            (0, l.default)(o, "ပစ်ကပ်ကားများ", "/m/0cvq3"),
            (0, l.default)(o, "ကုန်တင်ကားများ", "/m/0fkwjg"),
            (0, l.default)(o, "လှေများ", "/m/019jd"),
            (0, l.default)(o, "ဇိမ်ခံကားများ", "/m/01lcw4"),
            (0, l.default)(o, "အငှားယာဉ်များ", "/m/0pg52"),
            (0, l.default)(o, "ကျောင်းကား", "/m/02yvhj"),
            (0, l.default)(o, "ဘတ်စ်ကား", "/m/01bjv"),
            (0, l.default)(o, "ဆောက်လုပ်ရေးယာဉ်", "/m/02gx17"),
            (0, l.default)(o, "ရုပ်ပွားတော်များ", "/m/013_1c"),
            (0, l.default)(o, "စမ်းရေ", "/m/0h8lhkg"),
            (0, l.default)(o, "တံတား", "/m/015kr"),
            (0, l.default)(o, "ဆိပ်ခံ", "/m/01phq4"),
            (0, l.default)(o, "မိုးမျှော်တိုက်", "/m/079cl"),
            (0, l.default)(o, "တိုင်များ", "/m/01_m7"),
            (0, l.default)(o, "ရောင်စုံမှန်", "/m/011y23"),
            (0, l.default)(o, "အိမ်", "/m/03jm5"),
            (0, l.default)(o, "တိုက်ခန်းအဆောက်အဦ", "/m/01nblt"),
            (0, l.default)(o, "မီးအိမ်", "/m/04h7h"),
            (0, l.default)(o, "ဘူတာရုံ", "/m/0py27"),
            (0, l.default)(o, "ပြာ", "/m/01n6fd"),
            (0, l.default)(o, "မီးသတ်ဆေးဘူး", "/m/01pns0"),
            (0, l.default)(o, "ကြော်ငြာဘုတ်", "/m/01knjb"),
            (0, l.default)(o, "လမ်းများ", "/m/06gfj"),
            (0, l.default)(o, "လူကူးမျဉ်းကြားများ", "/m/014xcs"),
            (0, l.default)(o, "မီးပွိုင့်", "/m/015qff"),
            (0, l.default)(o, "ကားဂိုဒေါင်များ", "/m/08l941"),
            (0, l.default)(o, "ဘတ်စ်ကားမှတ်တိုင်များ", "/m/01jw_1"),
            (0, l.default)(o, "trafficcones", "/m/03sy7v"),
            (0, l.default)(o, "ကားပါကင်မီတာ", "/m/015qbp"),
            (0, l.default)(o, "လှေကား", "/m/01lynh"),
            (0, l.default)(o, "မီးခိုးခေါင်းတိုင်များ", "/m/01jk_4"),
            (0, l.default)(o, "ထွန်စက်များ", "/m/013xlm"),
            (0, l.default)(o, "firehydrants", "/m/01pns0"),
            (0, l.default)(o, "buses", "/m/01bjv"),
            (0, l.default)(o, "tàuthuyền", "/m/019jd"),
            (0, l.default)(o, "gunungataubukit", "/m/09d_r"),
            (0, l.default)(o, "tandaberhenti", "/m/02pv19"),
            (0, l.default)(o, "tandajalan", "/m/01mqdt"),
            (0, l.default)(o, "tumbuhan", "/m/05s2s"),
            (0, l.default)(o, "pokok", "/m/07j7r"),
            (0, l.default)(o, "rumput", "/m/08t9c_"),
            (0, l.default)(o, "pokokrenek", "/m/0gqbt"),
            (0, l.default)(o, "kaktus", "/m/025_v"),
            (0, l.default)(o, "pokokpalma", "/m/0cdl1"),
            (0, l.default)(o, "alamsemulajadi", "/m/05h0n"),
            (0, l.default)(o, "airterjun", "/m/0j2kx"),
            (0, l.default)(o, "pergunungan", "/m/09d_r"),
            (0, l.default)(o, "bukitbukau", "/m/09d_r"),
            (0, l.default)(o, "badanair", "/m/03ktm1"),
            (0, l.default)(o, "sungai-sungai", "/m/06cnp"),
            (0, l.default)(o, "pantai", "/m/0b3yr"),
            (0, l.default)(o, "matahari", "/m/06m_p"),
            (0, l.default)(o, "Bulan", "/m/04wv_"),
            (0, l.default)(o, "langit", "/m/01bqvp"),
            (0, l.default)(o, "kenderaan", "/m/0k4j"),
            (0, l.default)(o, "kereta", "/m/0k4j"),
            (0, l.default)(o, "basikal", "/m/0199g"),
            (0, l.default)(o, "motosikal", "/m/04_sv"),
            (0, l.default)(o, "trakpikap", "/m/0cvq3"),
            (0, l.default)(o, "trakkomersial", "/m/0fkwjg"),
            (0, l.default)(o, "bot", "/m/019jd"),
            (0, l.default)(o, "limosin", "/m/01lcw4"),
            (0, l.default)(o, "teksi", "/m/0pg52"),
            (0, l.default)(o, "bassekolah", "/m/02yvhj"),
            (0, l.default)(o, "bas", "/m/01bjv"),
            (0, l.default)(o, "kenderaanpembinaan", "/m/02gx17"),
            (0, l.default)(o, "patung-patung", "/m/013_1c"),
            (0, l.default)(o, "airpancut", "/m/0h8lhkg"),
            (0, l.default)(o, "jambatan", "/m/015kr"),
            (0, l.default)(o, "jeti", "/m/01phq4"),
            (0, l.default)(o, "bangunanpencakarlangit", "/m/079cl"),
            (0, l.default)(o, "tiangatautiang", "/m/01_m7"),
            (0, l.default)(o, "kacaberwarna", "/m/011y23"),
            (0, l.default)(o, "rumah", "/m/03jm5"),
            (0, l.default)(o, "bangunananapartmen", "/m/01nblt"),
            (0, l.default)(o, "rumahcahaya", "/m/04h7h"),
            (0, l.default)(o, "stesenKeretapi", "/m/0py27"),
            (0, l.default)(o, "abu", "/m/01n6fd"),
            (0, l.default)(o, "afirehydrant", "/m/01pns0"),
            (0, l.default)(o, "papaniklan", "/m/01knjb"),
            (0, l.default)(o, "jalanraya", "/m/06gfj"),
            (0, l.default)(o, "lintasanpejalankaki", "/m/014xcs"),
            (0, l.default)(o, "lampuisyarat", "/m/015qff"),
            (0, l.default)(o, "pintugaraged", "/m/08l941"),
            (0, l.default)(o, "perhentianbas", "/m/01jw_1"),
            (0, l.default)(o, "Kontrafik", "/m/03sy7v"),
            (0, l.default)(o, "metertempatletakkereta", "/m/015qbp"),
            (0, l.default)(o, "tangga", "/m/01lynh"),
            (0, l.default)(o, "cerobongasap", "/m/01jk_4"),
            (0, l.default)(o, "traktor", "/m/013xlm"),
            (0, l.default)(o, "pilibomba", "/m/01pns0"),
            (0, l.default)(o, "serombongasap", "/m/01jk_4"),
            (0, l.default)(o, "stopsigns", "/m/02pv19"),
            (0, l.default)(o, "streetsigns", "/m/01mqdt"),
            (0, l.default)(o, "plants", "/m/05s2s"),
            (0, l.default)(o, "trees", "/m/07j7r"),
            (0, l.default)(o, "grass", "/m/08t9c_"),
            (0, l.default)(o, "shrubs", "/m/0gqbt"),
            (0, l.default)(o, "cactus", "/m/025_v"),
            (0, l.default)(o, "palmtrees", "/m/0cdl1"),
            (0, l.default)(o, "nature", "/m/05h0n"),
            (0, l.default)(o, "waterfalls", "/m/0j2kx"),
            (0, l.default)(o, "mountainsorhills", "/m/09d_r"),
            (0, l.default)(o, "bodiesofwater", "/m/03ktm1"),
            (0, l.default)(o, "rivers", "/m/06cnp"),
            (0, l.default)(o, "beaches", "/m/0b3yr"),
            (0, l.default)(o, "theSun", "/m/06m_p"),
            (0, l.default)(o, "theMoon", "/m/04wv_"),
            (0, l.default)(o, "thesky", "/m/01bqvp"),
            (0, l.default)(o, "vehicles", "/m/0k4j"),
            (0, l.default)(o, "cars", "/m/0k4j"),
            (0, l.default)(o, "bicycles", "/m/0199g"),
            (0, l.default)(o, "motorcycles", "/m/04_sv"),
            (0, l.default)(o, "pickuptrucks", "/m/0cvq3"),
            (0, l.default)(o, "commercialtrucks", "/m/0fkwjg"),
            (0, l.default)(o, "boats", "/m/019jd"),
            (0, l.default)(o, "limousines", "/m/01lcw4"),
            (0, l.default)(o, "taxis", "/m/0pg52"),
            (0, l.default)(o, "schoolbus", "/m/02yvhj"),
            (0, l.default)(o, "bus", "/m/01bjv"),
            (0, l.default)(o, "constructionvehicle", "/m/02gx17"),
            (0, l.default)(o, "statues", "/m/013_1c"),
            (0, l.default)(o, "fountains", "/m/0h8lhkg"),
            (0, l.default)(o, "bridges", "/m/015kr"),
            (0, l.default)(o, "pier", "/m/01phq4"),
            (0, l.default)(o, "skyscraper", "/m/079cl"),
            (0, l.default)(o, "pillarsorcolumns", "/m/01_m7"),
            (0, l.default)(o, "stainedglass", "/m/011y23"),
            (0, l.default)(o, "ahouse", "/m/03jm5"),
            (0, l.default)(o, "anapartmentbuilding", "/m/01nblt"),
            (0, l.default)(o, "alighthouse", "/m/04h7h"),
            (0, l.default)(o, "atrainstation", "/m/0py27"),
            (0, l.default)(o, "ashed", "/m/01n6fd"),
            (0, l.default)(o, "afirehydrant", "/m/01pns0"),
            (0, l.default)(o, "abillboard", "/m/01knjb"),
            (0, l.default)(o, "roads", "/m/06gfj"),
            (0, l.default)(o, "crosswalks", "/m/014xcs"),
            (0, l.default)(o, "trafficlights", "/m/015qff"),
            (0, l.default)(o, "garagedoors", "/m/08l941"),
            (0, l.default)(o, "busstops", "/m/01jw_1"),
            (0, l.default)(o, "trafficcones", "/m/03sy7v"),
            (0, l.default)(o, "parkingmeters", "/m/015qbp"),
            (0, l.default)(o, "stairs", "/m/01lynh"),
            (0, l.default)(o, "chimneys", "/m/01jk_4"),
            (0, l.default)(o, "tractors", "/m/013xlm"),
            (0, l.default)(o, "路标", "/m/01mqdt"),
            (0, l.default)(o, "花", "/m/0c9ph5"),
            (0, l.default)(o, "树木", "/m/07j7r"),
            (0, l.default)(o, "棕榈树", "/m/0cdl1"),
            (0, l.default)(o, "瀑布", "/m/0j2kx"),
            (0, l.default)(o, "山", "/m/09d_r"),
            (0, l.default)(o, "水域", "/m/03ktm1"),
            (0, l.default)(o, "河流", "/m/06cnp"),
            (0, l.default)(o, "海滩", "/m/0b3yr"),
            (0, l.default)(o, "太阳", "/m/06m_p"),
            (0, l.default)(o, "月亮", "/m/04wv_"),
            (0, l.default)(o, "天空", "/m/01bqvp"),
            (0, l.default)(o, "交通工具", "/m/0k4j"),
            (0, l.default)(o, "小轿车", "/m/0k4j"),
            (0, l.default)(o, "机动车", "/m/0k4j"),
            (0, l.default)(o, "自行车", "/m/0199g"),
            (0, l.default)(o, "摩托车", "/m/04_sv"),
            (0, l.default)(o, "皮卡车", "/m/0cvq3"),
            (0, l.default)(o, "商用卡车", "/m/0fkwjg"),
            (0, l.default)(o, "船", "/m/019jd"),
            (0, l.default)(o, "豪华轿车", "/m/01lcw4"),
            (0, l.default)(o, "出租车", "/m/0pg52"),
            (0, l.default)(o, "校车", "/m/02yvhj"),
            (0, l.default)(o, "公交车", "/m/01bjv"),
            (0, l.default)(o, "火车", "/m/07jdr"),
            (0, l.default)(o, "施工车辆", "/m/02gx17"),
            (0, l.default)(o, "雕像", "/m/013_1c"),
            (0, l.default)(o, "喷泉", "/m/0h8lhkg"),
            (0, l.default)(o, "桥", "/m/015kr"),
            (0, l.default)(o, "码头", "/m/01phq4"),
            (0, l.default)(o, "摩天大楼", "/m/079cl"),
            (0, l.default)(o, "柱子", "/m/01_m7"),
            (0, l.default)(o, "彩色玻璃", "/m/011y23"),
            (0, l.default)(o, "房屋", "/m/03jm5"),
            (0, l.default)(o, "公寓楼", "/m/01nblt"),
            (0, l.default)(o, "灯塔", "/m/04h7h"),
            (0, l.default)(o, "火车站", "/m/0py27"),
            (0, l.default)(o, "遮棚", "/m/01n6fd"),
            (0, l.default)(o, "消防栓", "/m/01pns0"),
            (0, l.default)(o, "消火栓", "/m/01pns0"),
            (0, l.default)(o, "广告牌", "/m/01knjb"),
            (0, l.default)(o, "道路", "/m/06gfj"),
            (0, l.default)(o, "人行横道", "/m/014xcs"),
            (0, l.default)(o, "过街人行道", "/m/014xcs"),
            (0, l.default)(o, "红绿灯", "/m/015qff"),
            (0, l.default)(o, "车库门", "/m/08l941"),
            (0, l.default)(o, "公交站", "/m/01jw_1"),
            (0, l.default)(o, "锥形交通路标", "/m/03sy7v"),
            (0, l.default)(o, "停车计时器", "/m/015qbp"),
            (0, l.default)(o, "停车计价表", "/m/015qbp"),
            (0, l.default)(o, "楼梯", "/m/01lynh"),
            (0, l.default)(o, "烟囱", "/m/01jk_4"),
            (0, l.default)(o, "拖拉机", "/m/013xlm"),
            (0, l.default)(o, "停车标志", "/m/02pv19"),
            (0, l.default)(o, "路牌", "/m/01mqdt"),
            (0, l.default)(o, "植物", "/m/05s2s"),
            (0, l.default)(o, "树", "/m/07j7r"),
            (0, l.default)(o, "草", "/m/08t9c_"),
            (0, l.default)(o, "棕榈树", "/m/0cdl1"),
            (0, l.default)(o, "自然", "/m/05h0n"),
            (0, l.default)(o, "丘陵", "/m/09d_r"),
            (0, l.default)(o, "水体", "/m/03ktm1"),
            (0, l.default)(o, "海滩", "/m/0b3yr"),
            (0, l.default)(o, "天空", "/m/01bqvp"),
            (0, l.default)(o, "车辆", "/m/0k4j"),
            (0, l.default)(o, "汽车", "/m/0k4j"),
            (0, l.default)(o, "摩托车", "/m/04_sv"),
            (0, l.default)(o, "商业卡车", "/m/0fkwjg"),
            (0, l.default)(o, "豪华轿车", "/m/01lcw4"),
            (0, l.default)(o, "公共汽车", "/m/01bjv"),
            (0, l.default)(o, "建筑车辆", "/m/02gx17"),
            (0, l.default)(o, "雕像", "/m/013_1c"),
            (0, l.default)(o, "支柱柱", "/m/01_m7"),
            (0, l.default)(o, "彩色玻璃", "/m/011y23"),
            (0, l.default)(o, "房子", "/m/03jm5"),
            (0, l.default)(o, "灰烬", "/m/01n6fd"),
            (0, l.default)(o, "消火栓", "/m/01pns0"),
            (0, l.default)(o, "道路", "/m/06gfj"),
            (0, l.default)(o, "人行横道", "/m/014xcs"),
            (0, l.default)(o, "交通灯", "/m/015qff"),
            (0, l.default)(o, "车库门", "/m/08l941"),
            (0, l.default)(o, "巴士站", "/m/01jw_1"),
            (0, l.default)(o, "交通锥", "/m/03sy7v"),
            (0, l.default)(o, "停车咪表", "/m/015qbp"),
            (0, l.default)(o, "楼梯", "/m/01lynh"),
            (0, l.default)(o, "烟囱", "/m/01jk_4"),
            (0, l.default)(o, "횡단보도", "/m/014xcs"),
            (0, l.default)(o, "자동차", "/m/0k4j"),
            (0, l.default)(o, "자전거", "/m/0199g"),
            (0, l.default)(o, "버스", "/m/01bjv"),
            (0, l.default)(o, "신호등", "/m/015qff"),
            (0, l.default)(o, "계단", "/m/01lynh"),
            (0, l.default)(o, "소화전", "/m/01pns0"),
            (0, l.default)(o, "굴뚝", "/m/01jk_4"),
            (0, l.default)(o, "오토바이", "/m/04_sv"),
            (0, l.default)(o, "차량", "/m/0k4j"),
            (0, l.default)(o, "교각", "/m/01phq4"),
            o));
      },
      24043: (e, t, n) => {
        e.exports = { default: n(47185), __esModule: !0 };
      },
      32242: (e, t, n) => {
        e.exports = { default: n(33391), __esModule: !0 };
      },
      46593: (e, t, n) => {
        e.exports = { default: n(80112), __esModule: !0 };
      },
      36803: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          a = n(46593),
          o = (r = a) && r.__esModule ? r : { default: r };
        t.default = function (e) {
          return function () {
            var t = e.apply(this, arguments);
            return new o.default(function (e, n) {
              return (function r(a, i) {
                try {
                  var l = t[a](i),
                    u = l.value;
                } catch (e) {
                  return void n(e);
                }
                if (!l.done)
                  return o.default.resolve(u).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                e(u);
              })("next");
            });
          };
        };
      },
      88106: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          a = n(32242),
          o = (r = a) && r.__esModule ? r : { default: r };
        t.default = function (e, t, n) {
          return (
            t in e
              ? (0, o.default)(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        };
      },
      85315: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          a = n(24043),
          o = (r = a) && r.__esModule ? r : { default: r };
        t.default = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return (0, o.default)(e);
        };
      },
      94942: (e, t, n) => {
        e.exports = n(20205);
      },
      47185: (e, t, n) => {
        n(91867), n(2586), (e.exports = n(34579).Array.from);
      },
      33391: (e, t, n) => {
        n(31477);
        var r = n(34579).Object;
        e.exports = function (e, t, n) {
          return r.defineProperty(e, t, n);
        };
      },
      80112: (e, t, n) => {
        n(94058),
          n(91867),
          n(73871),
          n(32878),
          n(95971),
          n(22526),
          (e.exports = n(34579).Promise);
      },
      85663: (e) => {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e;
        };
      },
      79003: (e) => {
        e.exports = function () {};
      },
      29142: (e) => {
        e.exports = function (e, t, n, r) {
          if (!(e instanceof t) || (undefined !== r && r in e))
            throw TypeError(n + ": incorrect invocation!");
          return e;
        };
      },
      12159: (e, t, n) => {
        var r = n(36727);
        e.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      57428: (e, t, n) => {
        var r = n(7932),
          a = n(78728),
          o = n(16531);
        e.exports = function (e) {
          return function (t, n, i) {
            var l,
              u = r(t),
              s = a(u.length),
              c = o(i, s);
            if (e && n != n) {
              for (; s > c; ) if ((l = u[c++]) != l) return !0;
            } else
              for (; s > c; c++)
                if ((e || c in u) && u[c] === n) return e || c || 0;
            return !e && -1;
          };
        };
      },
      14677: (e, t, n) => {
        var r = n(32894),
          a = n(22939)("toStringTag"),
          o =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        e.exports = function (e) {
          var t, n, i;
          return undefined === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), a))
            ? n
            : o
            ? r(t)
            : "Object" == (i = r(t)) && "function" == typeof t.callee
            ? "Arguments"
            : i;
        };
      },
      32894: (e) => {
        var t = {}.toString;
        e.exports = function (e) {
          return t.call(e).slice(8, -1);
        };
      },
      34579: (e) => {
        var t = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = t);
      },
      52445: (e, t, n) => {
        "use strict";
        var r = n(4743),
          a = n(83101);
        e.exports = function (e, t, n) {
          t in e ? r.f(e, t, a(0, n)) : (e[t] = n);
        };
      },
      19216: (e, t, n) => {
        var r = n(85663);
        e.exports = function (e, t, n) {
          if ((r(e), undefined === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };
            case 3:
              return function (n, r, a) {
                return e.call(t, n, r, a);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      8333: (e) => {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      89666: (e, t, n) => {
        e.exports = !n(7929)(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      97467: (e, t, n) => {
        var r = n(36727),
          a = n(33938).document,
          o = r(a) && r(a.createElement);
        e.exports = function (e) {
          return o ? a.createElement(e) : {};
        };
      },
      73338: (e) => {
        e.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      83856: (e, t, n) => {
        var r = n(33938),
          a = n(34579),
          o = n(19216),
          i = n(41818),
          l = n(27069),
          u = function (e, t, n) {
            var s,
              c,
              d,
              f = e & u.F,
              m = e & u.G,
              h = e & u.S,
              v = e & u.P,
              p = e & u.B,
              g = e & u.W,
              y = m ? a : a[t] || (a[t] = {}),
              b = y.prototype,
              k = m ? r : h ? r[t] : (r[t] || {}).prototype;
            for (s in (m && (n = t), n))
              ((c = !f && k && undefined !== k[s]) && l(y, s)) ||
                ((d = c ? k[s] : n[s]),
                (y[s] =
                  m && "function" != typeof k[s]
                    ? n[s]
                    : p && c
                    ? o(d, r)
                    : g && k[s] == d
                    ? (function (e) {
                        var t = function (t, n, r) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, r);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(d)
                    : v && "function" == typeof d
                    ? o(Function.call, d)
                    : d),
                v &&
                  (((y.virtual || (y.virtual = {}))[s] = d),
                  e & u.R && b && !b[s] && i(b, s, d)));
          };
        (u.F = 1),
          (u.G = 2),
          (u.S = 4),
          (u.P = 8),
          (u.B = 16),
          (u.W = 32),
          (u.U = 64),
          (u.R = 128),
          (e.exports = u);
      },
      7929: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      45576: (e, t, n) => {
        var r = n(19216),
          a = n(95602),
          o = n(45991),
          i = n(12159),
          l = n(78728),
          u = n(83728),
          s = {},
          c = {},
          d = (e.exports = function (e, t, n, d, f) {
            var m,
              h,
              v,
              p,
              g = f
                ? function () {
                    return e;
                  }
                : u(e),
              y = r(n, d, t ? 2 : 1),
              b = 0;
            if ("function" != typeof g)
              throw TypeError(e + " is not iterable!");
            if (o(g)) {
              for (m = l(e.length); m > b; b++)
                if (
                  (p = t ? y(i((h = e[b]))[0], h[1]) : y(e[b])) === s ||
                  p === c
                )
                  return p;
            } else
              for (v = g.call(e); !(h = v.next()).done; )
                if ((p = a(v, y, h.value, t)) === s || p === c) return p;
          });
        (d.BREAK = s), (d.RETURN = c);
      },
      33938: (e) => {
        var t = (e.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = t);
      },
      27069: (e) => {
        var t = {}.hasOwnProperty;
        e.exports = function (e, n) {
          return t.call(e, n);
        };
      },
      41818: (e, t, n) => {
        var r = n(4743),
          a = n(83101);
        e.exports = n(89666)
          ? function (e, t, n) {
              return r.f(e, t, a(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      54881: (e, t, n) => {
        var r = n(33938).document;
        e.exports = r && r.documentElement;
      },
      33758: (e, t, n) => {
        e.exports =
          !n(89666) &&
          !n(7929)(function () {
            return (
              7 !=
              Object.defineProperty(n(97467)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      46778: (e) => {
        e.exports = function (e, t, n) {
          var r = undefined === n;
          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);
            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return r
                ? e(t[0], t[1], t[2], t[3])
                : e.call(n, t[0], t[1], t[2], t[3]);
          }
          return e.apply(n, t);
        };
      },
      50799: (e, t, n) => {
        var r = n(32894);
        e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == r(e) ? e.split("") : Object(e);
            };
      },
      45991: (e, t, n) => {
        var r = n(15449),
          a = n(22939)("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return undefined !== e && (r.Array === e || o[a] === e);
        };
      },
      36727: (e) => {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      95602: (e, t, n) => {
        var r = n(12159);
        e.exports = function (e, t, n, a) {
          try {
            return a ? t(r(n)[0], n[1]) : t(n);
          } catch (t) {
            var o = e.return;
            throw (undefined !== o && r(o.call(e)), t);
          }
        };
      },
      33945: (e, t, n) => {
        "use strict";
        var r = n(98989),
          a = n(83101),
          o = n(25378),
          i = {};
        n(41818)(i, n(22939)("iterator"), function () {
          return this;
        }),
          (e.exports = function (e, t, n) {
            (e.prototype = r(i, { next: a(1, n) })), o(e, t + " Iterator");
          });
      },
      45700: (e, t, n) => {
        "use strict";
        var r = n(16227),
          a = n(83856),
          o = n(57470),
          i = n(41818),
          l = n(15449),
          u = n(33945),
          s = n(25378),
          c = n(95089),
          d = n(22939)("iterator"),
          f = !([].keys && "next" in [].keys()),
          m = "keys",
          h = "values",
          v = function () {
            return this;
          };
        e.exports = function (e, t, n, p, g, y, b) {
          u(n, t, p);
          var k,
            w,
            x,
            _ = function (e) {
              if (!f && e in T) return T[e];
              switch (e) {
                case m:
                case h:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            S = t + " Iterator",
            j = g == h,
            C = !1,
            T = e.prototype,
            I = T[d] || T["@@iterator"] || (g && T[g]),
            E = I || _(g),
            R = g ? (j ? _("entries") : E) : undefined,
            q = ("Array" == t && T.entries) || I;
          if (
            (q &&
              (x = c(q.call(new e()))) !== Object.prototype &&
              x.next &&
              (s(x, S, !0), r || "function" == typeof x[d] || i(x, d, v)),
            j &&
              I &&
              I.name !== h &&
              ((C = !0),
              (E = function () {
                return I.call(this);
              })),
            (r && !b) || (!f && !C && T[d]) || i(T, d, E),
            (l[t] = E),
            (l[S] = v),
            g)
          )
            if (
              ((k = { values: j ? E : _(h), keys: y ? E : _(m), entries: R }),
              b)
            )
              for (w in k) w in T || o(T, w, k[w]);
            else a(a.P + a.F * (f || C), t, k);
          return k;
        };
      },
      96630: (e, t, n) => {
        var r = n(22939)("iterator"),
          a = !1;
        try {
          var o = [7][r]();
          (o.return = function () {
            a = !0;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !a) return !1;
          var n = !1;
          try {
            var o = [7],
              i = o[r]();
            (i.next = function () {
              return { done: (n = !0) };
            }),
              (o[r] = function () {
                return i;
              }),
              e(o);
          } catch (e) {}
          return n;
        };
      },
      85084: (e) => {
        e.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      15449: (e) => {
        e.exports = {};
      },
      16227: (e) => {
        e.exports = !0;
      },
      81601: (e, t, n) => {
        var r = n(33938),
          a = n(62569).set,
          o = r.MutationObserver || r.WebKitMutationObserver,
          i = r.process,
          l = r.Promise,
          u = "process" == n(32894)(i);
        e.exports = function () {
          var e,
            t,
            n,
            s = function () {
              var r, a;
              for (u && (r = i.domain) && r.exit(); e; ) {
                (a = e.fn), (e = e.next);
                try {
                  a();
                } catch (r) {
                  throw (e ? n() : (t = undefined), r);
                }
              }
              (t = undefined), r && r.enter();
            };
          if (u)
            n = function () {
              i.nextTick(s);
            };
          else if (!o || (r.navigator && r.navigator.standalone))
            if (l && l.resolve) {
              var c = l.resolve(undefined);
              n = function () {
                c.then(s);
              };
            } else
              n = function () {
                a.call(r, s);
              };
          else {
            var d = !0,
              f = document.createTextNode("");
            new o(s).observe(f, { characterData: !0 }),
              (n = function () {
                f.data = d = !d;
              });
          }
          return function (r) {
            var a = { fn: r, next: undefined };
            t && (t.next = a), e || ((e = a), n()), (t = a);
          };
        };
      },
      59304: (e, t, n) => {
        "use strict";
        var r = n(85663);
        function a(e) {
          var t, n;
          (this.promise = new e(function (e, r) {
            if (undefined !== t || undefined !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        }
        e.exports.f = function (e) {
          return new a(e);
        };
      },
      98989: (e, t, n) => {
        var r = n(12159),
          a = n(57856),
          o = n(73338),
          i = n(58989)("IE_PROTO"),
          l = function () {},
          u = function () {
            var e,
              t = n(97467)("iframe"),
              r = o.length;
            for (
              t.style.display = "none",
                n(54881).appendChild(t),
                t.src = "javascript:",
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                u = e.F;
              r--;

            )
              delete u.prototype[o[r]];
            return u();
          };
        e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((l.prototype = r(e)),
                  (n = new l()),
                  (l.prototype = null),
                  (n[i] = e))
                : (n = u()),
              undefined === t ? n : a(n, t)
            );
          };
      },
      4743: (e, t, n) => {
        var r = n(12159),
          a = n(33758),
          o = n(33206),
          i = Object.defineProperty;
        t.f = n(89666)
          ? Object.defineProperty
          : function (e, t, n) {
              if ((r(e), (t = o(t, !0)), r(n), a))
                try {
                  return i(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      57856: (e, t, n) => {
        var r = n(4743),
          a = n(12159),
          o = n(46162);
        e.exports = n(89666)
          ? Object.defineProperties
          : function (e, t) {
              a(e);
              for (var n, i = o(t), l = i.length, u = 0; l > u; )
                r.f(e, (n = i[u++]), t[n]);
              return e;
            };
      },
      95089: (e, t, n) => {
        var r = n(27069),
          a = n(66530),
          o = n(58989)("IE_PROTO"),
          i = Object.prototype;
        e.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = a(e)),
              r(e, o)
                ? e[o]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? i
                : null
            );
          };
      },
      12963: (e, t, n) => {
        var r = n(27069),
          a = n(7932),
          o = n(57428)(!1),
          i = n(58989)("IE_PROTO");
        e.exports = function (e, t) {
          var n,
            l = a(e),
            u = 0,
            s = [];
          for (n in l) n != i && r(l, n) && s.push(n);
          for (; t.length > u; ) r(l, (n = t[u++])) && (~o(s, n) || s.push(n));
          return s;
        };
      },
      46162: (e, t, n) => {
        var r = n(12963),
          a = n(73338);
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, a);
          };
      },
      10931: (e) => {
        e.exports = function (e) {
          try {
            return { e: !1, v: e() };
          } catch (e) {
            return { e: !0, v: e };
          }
        };
      },
      87790: (e, t, n) => {
        var r = n(12159),
          a = n(36727),
          o = n(59304);
        e.exports = function (e, t) {
          if ((r(e), a(t) && t.constructor === e)) return t;
          var n = o.f(e);
          return (0, n.resolve)(t), n.promise;
        };
      },
      83101: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      48144: (e, t, n) => {
        var r = n(41818);
        e.exports = function (e, t, n) {
          for (var a in t) n && e[a] ? (e[a] = t[a]) : r(e, a, t[a]);
          return e;
        };
      },
      57470: (e, t, n) => {
        e.exports = n(41818);
      },
      39967: (e, t, n) => {
        "use strict";
        var r = n(33938),
          a = n(34579),
          o = n(4743),
          i = n(89666),
          l = n(22939)("species");
        e.exports = function (e) {
          var t = "function" == typeof a[e] ? a[e] : r[e];
          i &&
            t &&
            !t[l] &&
            o.f(t, l, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      25378: (e, t, n) => {
        var r = n(4743).f,
          a = n(27069),
          o = n(22939)("toStringTag");
        e.exports = function (e, t, n) {
          e &&
            !a((e = n ? e : e.prototype), o) &&
            r(e, o, { configurable: !0, value: t });
        };
      },
      58989: (e, t, n) => {
        var r = n(20250)("keys"),
          a = n(65730);
        e.exports = function (e) {
          return r[e] || (r[e] = a(e));
        };
      },
      20250: (e, t, n) => {
        var r = n(34579),
          a = n(33938),
          o = "__core-js_shared__",
          i = a[o] || (a[o] = {});
        (e.exports = function (e, t) {
          return i[e] || (i[e] = undefined !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: n(16227) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      },
      32707: (e, t, n) => {
        var r = n(12159),
          a = n(85663),
          o = n(22939)("species");
        e.exports = function (e, t) {
          var n,
            i = r(e).constructor;
          return undefined === i || null == (n = r(i)[o]) ? t : a(n);
        };
      },
      90510: (e, t, n) => {
        var r = n(11052),
          a = n(8333);
        e.exports = function (e) {
          return function (t, n) {
            var o,
              i,
              l = String(a(t)),
              u = r(n),
              s = l.length;
            return u < 0 || u >= s
              ? e
                ? ""
                : undefined
              : (o = l.charCodeAt(u)) < 55296 ||
                o > 56319 ||
                u + 1 === s ||
                (i = l.charCodeAt(u + 1)) < 56320 ||
                i > 57343
              ? e
                ? l.charAt(u)
                : o
              : e
              ? l.slice(u, u + 2)
              : i - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      },
      62569: (e, t, n) => {
        var r,
          a,
          o,
          i = n(19216),
          l = n(46778),
          u = n(54881),
          s = n(97467),
          c = n(33938),
          d = c.process,
          f = c.setImmediate,
          m = c.clearImmediate,
          h = c.MessageChannel,
          v = c.Dispatch,
          p = 0,
          g = {},
          y = "onreadystatechange",
          b = function () {
            var e = +this;
            if (g.hasOwnProperty(e)) {
              var t = g[e];
              delete g[e], t();
            }
          },
          k = function (e) {
            b.call(e.data);
          };
        (f && m) ||
          ((f = function (e) {
            for (var t = [], n = 1; arguments.length > n; )
              t.push(arguments[n++]);
            return (
              (g[++p] = function () {
                l("function" == typeof e ? e : Function(e), t);
              }),
              r(p),
              p
            );
          }),
          (m = function (e) {
            delete g[e];
          }),
          "process" == n(32894)(d)
            ? (r = function (e) {
                d.nextTick(i(b, e, 1));
              })
            : v && v.now
            ? (r = function (e) {
                v.now(i(b, e, 1));
              })
            : h
            ? ((o = (a = new h()).port2),
              (a.port1.onmessage = k),
              (r = i(o.postMessage, o, 1)))
            : c.addEventListener &&
              "function" == typeof postMessage &&
              !c.importScripts
            ? ((r = function (e) {
                c.postMessage(e + "", "*");
              }),
              c.addEventListener("message", k, !1))
            : (r =
                y in s("script")
                  ? function (e) {
                      u.appendChild(s("script")).onreadystatechange =
                        function () {
                          u.removeChild(this), b.call(e);
                        };
                    }
                  : function (e) {
                      setTimeout(i(b, e, 1), 0);
                    })),
          (e.exports = { set: f, clear: m });
      },
      16531: (e, t, n) => {
        var r = n(11052),
          a = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          return (e = r(e)) < 0 ? a(e + t, 0) : o(e, t);
        };
      },
      11052: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
        };
      },
      7932: (e, t, n) => {
        var r = n(50799),
          a = n(8333);
        e.exports = function (e) {
          return r(a(e));
        };
      },
      78728: (e, t, n) => {
        var r = n(11052),
          a = Math.min;
        e.exports = function (e) {
          return e > 0 ? a(r(e), 9007199254740991) : 0;
        };
      },
      66530: (e, t, n) => {
        var r = n(8333);
        e.exports = function (e) {
          return Object(r(e));
        };
      },
      33206: (e, t, n) => {
        var r = n(36727);
        e.exports = function (e, t) {
          if (!r(e)) return e;
          var n, a;
          if (t && "function" == typeof (n = e.toString) && !r((a = n.call(e))))
            return a;
          if ("function" == typeof (n = e.valueOf) && !r((a = n.call(e))))
            return a;
          if (
            !t &&
            "function" == typeof (n = e.toString) &&
            !r((a = n.call(e)))
          )
            return a;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      65730: (e) => {
        var t = 0,
          n = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(
            undefined === e ? "" : e,
            ")_",
            (++t + n).toString(36)
          );
        };
      },
      26640: (e, t, n) => {
        var r = n(33938).navigator;
        e.exports = (r && r.userAgent) || "";
      },
      22939: (e, t, n) => {
        var r = n(20250)("wks"),
          a = n(65730),
          o = n(33938).Symbol,
          i = "function" == typeof o;
        (e.exports = function (e) {
          return r[e] || (r[e] = (i && o[e]) || (i ? o : a)("Symbol." + e));
        }).store = r;
      },
      83728: (e, t, n) => {
        var r = n(14677),
          a = n(22939)("iterator"),
          o = n(15449);
        e.exports = n(34579).getIteratorMethod = function (e) {
          if (null != e) return e[a] || e["@@iterator"] || o[r(e)];
        };
      },
      2586: (e, t, n) => {
        "use strict";
        var r = n(19216),
          a = n(83856),
          o = n(66530),
          i = n(95602),
          l = n(45991),
          u = n(78728),
          s = n(52445),
          c = n(83728);
        a(
          a.S +
            a.F *
              !n(96630)(function (e) {
                Array.from(e);
              }),
          "Array",
          {
            from: function (e) {
              var t,
                n,
                a,
                d,
                f = o(e),
                m = "function" == typeof this ? this : Array,
                h = arguments.length,
                v = h > 1 ? arguments[1] : undefined,
                p = undefined !== v,
                g = 0,
                y = c(f);
              if (
                (p && (v = r(v, h > 2 ? arguments[2] : undefined, 2)),
                null == y || (m == Array && l(y)))
              )
                for (n = new m((t = u(f.length))); t > g; g++)
                  s(n, g, p ? v(f[g], g) : f[g]);
              else
                for (d = y.call(f), n = new m(); !(a = d.next()).done; g++)
                  s(n, g, p ? i(d, v, [a.value, g], !0) : a.value);
              return (n.length = g), n;
            },
          }
        );
      },
      3882: (e, t, n) => {
        "use strict";
        var r = n(79003),
          a = n(85084),
          o = n(15449),
          i = n(7932);
        (e.exports = n(45700)(
          Array,
          "Array",
          function (e, t) {
            (this._t = i(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length
              ? ((this._t = undefined), a(1))
              : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (o.Arguments = o.Array),
          r("keys"),
          r("values"),
          r("entries");
      },
      31477: (e, t, n) => {
        var r = n(83856);
        r(r.S + r.F * !n(89666), "Object", { defineProperty: n(4743).f });
      },
      94058: () => {},
      32878: (e, t, n) => {
        "use strict";
        var r,
          a,
          o,
          i,
          l = n(16227),
          u = n(33938),
          s = n(19216),
          c = n(14677),
          d = n(83856),
          f = n(36727),
          m = n(85663),
          h = n(29142),
          v = n(45576),
          p = n(32707),
          g = n(62569).set,
          y = n(81601)(),
          b = n(59304),
          k = n(10931),
          w = n(26640),
          x = n(87790),
          _ = "Promise",
          S = u.TypeError,
          j = u.process,
          C = j && j.versions,
          T = (C && C.v8) || "",
          I = u.Promise,
          E = "process" == c(j),
          R = function () {},
          q = (a = b.f),
          N = !!(function () {
            try {
              var e = I.resolve(1),
                t = ((e.constructor = {})[n(22939)("species")] = function (e) {
                  e(R, R);
                });
              return (
                (E || "function" == typeof PromiseRejectionEvent) &&
                e.then(R) instanceof t &&
                0 !== T.indexOf("6.6") &&
                -1 === w.indexOf("Chrome/66")
              );
            } catch (e) {}
          })(),
          O = function (e) {
            var t;
            return !(!f(e) || "function" != typeof (t = e.then)) && t;
          },
          L = function (e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              y(function () {
                for (
                  var r = e._v,
                    a = 1 == e._s,
                    o = 0,
                    i = function (t) {
                      var n,
                        o,
                        i,
                        l = a ? t.ok : t.fail,
                        u = t.resolve,
                        s = t.reject,
                        c = t.domain;
                      try {
                        l
                          ? (a || (2 == e._h && M(e), (e._h = 1)),
                            !0 === l
                              ? (n = r)
                              : (c && c.enter(),
                                (n = l(r)),
                                c && (c.exit(), (i = !0))),
                            n === t.promise
                              ? s(S("Promise-chain cycle"))
                              : (o = O(n))
                              ? o.call(n, u, s)
                              : u(n))
                          : s(r);
                      } catch (e) {
                        c && !i && c.exit(), s(e);
                      }
                    };
                  n.length > o;

                )
                  i(n[o++]);
                (e._c = []), (e._n = !1), t && !e._h && A(e);
              });
            }
          },
          A = function (e) {
            g.call(u, function () {
              var t,
                n,
                r,
                a = e._v,
                o = P(e);
              if (
                (o &&
                  ((t = k(function () {
                    E
                      ? j.emit("unhandledRejection", a, e)
                      : (n = u.onunhandledrejection)
                      ? n({ promise: e, reason: a })
                      : (r = u.console) &&
                        r.error &&
                        r.error("Unhandled promise rejection", a);
                  })),
                  (e._h = E || P(e) ? 2 : 1)),
                (e._a = undefined),
                o && t.e)
              )
                throw t.v;
            });
          },
          P = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length;
          },
          M = function (e) {
            g.call(u, function () {
              var t;
              E
                ? j.emit("rejectionHandled", e)
                : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
            });
          },
          F = function (e) {
            var t = this;
            t._d ||
              ((t._d = !0),
              ((t = t._w || t)._v = e),
              (t._s = 2),
              t._a || (t._a = t._c.slice()),
              L(t, !0));
          },
          B = function (e) {
            var t,
              n = this;
            if (!n._d) {
              (n._d = !0), (n = n._w || n);
              try {
                if (n === e) throw S("Promise can't be resolved itself");
                (t = O(e))
                  ? y(function () {
                      var r = { _w: n, _d: !1 };
                      try {
                        t.call(e, s(B, r, 1), s(F, r, 1));
                      } catch (e) {
                        F.call(r, e);
                      }
                    })
                  : ((n._v = e), (n._s = 1), L(n, !1));
              } catch (e) {
                F.call({ _w: n, _d: !1 }, e);
              }
            }
          };
        N ||
          ((I = function (e) {
            h(this, I, _, "_h"), m(e), r.call(this);
            try {
              e(s(B, this, 1), s(F, this, 1));
            } catch (e) {
              F.call(this, e);
            }
          }),
          ((r = function (e) {
            (this._c = []),
              (this._a = undefined),
              (this._s = 0),
              (this._d = !1),
              (this._v = undefined),
              (this._h = 0),
              (this._n = !1);
          }).prototype = n(48144)(I.prototype, {
            then: function (e, t) {
              var n = q(p(this, I));
              return (
                (n.ok = "function" != typeof e || e),
                (n.fail = "function" == typeof t && t),
                (n.domain = E ? j.domain : undefined),
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && L(this, !1),
                n.promise
              );
            },
            catch: function (e) {
              return this.then(undefined, e);
            },
          })),
          (o = function () {
            var e = new r();
            (this.promise = e),
              (this.resolve = s(B, e, 1)),
              (this.reject = s(F, e, 1));
          }),
          (b.f = q =
            function (e) {
              return e === I || e === i ? new o(e) : a(e);
            })),
          d(d.G + d.W + d.F * !N, { Promise: I }),
          n(25378)(I, _),
          n(39967)(_),
          (i = n(34579).Promise),
          d(d.S + d.F * !N, _, {
            reject: function (e) {
              var t = q(this);
              return (0, t.reject)(e), t.promise;
            },
          }),
          d(d.S + d.F * (l || !N), _, {
            resolve: function (e) {
              return x(l && this === i ? I : this, e);
            },
          }),
          d(
            d.S +
              d.F *
                !(
                  N &&
                  n(96630)(function (e) {
                    I.all(e).catch(R);
                  })
                ),
            _,
            {
              all: function (e) {
                var t = this,
                  n = q(t),
                  r = n.resolve,
                  a = n.reject,
                  o = k(function () {
                    var n = [],
                      o = 0,
                      i = 1;
                    v(e, !1, function (e) {
                      var l = o++,
                        u = !1;
                      n.push(undefined),
                        i++,
                        t.resolve(e).then(function (e) {
                          u || ((u = !0), (n[l] = e), --i || r(n));
                        }, a);
                    }),
                      --i || r(n);
                  });
                return o.e && a(o.v), n.promise;
              },
              race: function (e) {
                var t = this,
                  n = q(t),
                  r = n.reject,
                  a = k(function () {
                    v(e, !1, function (e) {
                      t.resolve(e).then(n.resolve, r);
                    });
                  });
                return a.e && r(a.v), n.promise;
              },
            }
          );
      },
      91867: (e, t, n) => {
        "use strict";
        var r = n(90510)(!0);
        n(45700)(
          String,
          "String",
          function (e) {
            (this._t = String(e)), (this._i = 0);
          },
          function () {
            var e,
              t = this._t,
              n = this._i;
            return n >= t.length
              ? { value: undefined, done: !0 }
              : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
          }
        );
      },
      95971: (e, t, n) => {
        "use strict";
        var r = n(83856),
          a = n(34579),
          o = n(33938),
          i = n(32707),
          l = n(87790);
        r(r.P + r.R, "Promise", {
          finally: function (e) {
            var t = i(this, a.Promise || o.Promise),
              n = "function" == typeof e;
            return this.then(
              n
                ? function (n) {
                    return l(t, e()).then(function () {
                      return n;
                    });
                  }
                : e,
              n
                ? function (n) {
                    return l(t, e()).then(function () {
                      throw n;
                    });
                  }
                : e
            );
          },
        });
      },
      22526: (e, t, n) => {
        "use strict";
        var r = n(83856),
          a = n(59304),
          o = n(10931);
        r(r.S, "Promise", {
          try: function (e) {
            var t = a.f(this),
              n = o(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise;
          },
        });
      },
      73871: (e, t, n) => {
        n(3882);
        for (
          var r = n(33938),
            a = n(41818),
            o = n(15449),
            i = n(22939)("toStringTag"),
            l =
              "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                ","
              ),
            u = 0;
          u < l.length;
          u++
        ) {
          var s = l[u],
            c = r[s],
            d = c && c.prototype;
          d && !d[i] && a(d, i, s), (o[s] = o.Array);
        }
      },
      20205: (e, t, n) => {
        var r =
            (function () {
              return this;
            })() || Function("return this")(),
          a =
            r.regeneratorRuntime &&
            Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
          o = a && r.regeneratorRuntime;
        if (((r.regeneratorRuntime = undefined), (e.exports = n(35666)), a))
          r.regeneratorRuntime = o;
        else
          try {
            delete r.regeneratorRuntime;
          } catch (e) {
            r.regeneratorRuntime = undefined;
          }
      },
      35666: (e) => {
        !(function (t) {
          "use strict";
          var n,
            r = Object.prototype,
            a = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            l = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag",
            s = t.regeneratorRuntime;
          if (s) e.exports = s;
          else {
            (s = t.regeneratorRuntime = e.exports).wrap = b;
            var c = "suspendedStart",
              d = "suspendedYield",
              f = "executing",
              m = "completed",
              h = {},
              v = {};
            v[i] = function () {
              return this;
            };
            var p = Object.getPrototypeOf,
              g = p && p(p(R([])));
            g && g !== r && a.call(g, i) && (v = g);
            var y = (_.prototype = w.prototype = Object.create(v));
            (x.prototype = y.constructor = _),
              (_.constructor = x),
              (_[u] = x.displayName = "GeneratorFunction"),
              (s.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === x || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (s.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, _)
                    : ((e.__proto__ = _),
                      u in e || (e[u] = "GeneratorFunction")),
                  (e.prototype = Object.create(y)),
                  e
                );
              }),
              (s.awrap = function (e) {
                return { __await: e };
              }),
              S(j.prototype),
              (j.prototype[l] = function () {
                return this;
              }),
              (s.AsyncIterator = j),
              (s.async = function (e, t, n, r) {
                var a = new j(b(e, t, n, r));
                return s.isGeneratorFunction(t)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              S(y),
              (y[u] = "Generator"),
              (y[i] = function () {
                return this;
              }),
              (y.toString = function () {
                return "[object Generator]";
              }),
              (s.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                  t.reverse(),
                  function n() {
                    for (; t.length; ) {
                      var r = t.pop();
                      if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                  }
                );
              }),
              (s.values = R),
              (E.prototype = {
                constructor: E,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(I),
                    !e)
                  )
                    for (var t in this)
                      "t" === t.charAt(0) &&
                        a.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = n);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function r(r, a) {
                    return (
                      (l.type = "throw"),
                      (l.arg = e),
                      (t.next = r),
                      a && ((t.method = "next"), (t.arg = n)),
                      !!a
                    );
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                      l = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                      var u = a.call(i, "catchLoc"),
                        s = a.call(i, "finallyLoc");
                      if (u && s) {
                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                      } else if (u) {
                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      } else {
                        if (!s)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      a.call(r, "finallyLoc") &&
                      this.prev < r.finallyLoc
                    ) {
                      var o = r;
                      break;
                    }
                  }
                  o &&
                    ("break" === e || "continue" === e) &&
                    o.tryLoc <= t &&
                    t <= o.finallyLoc &&
                    (o = null);
                  var i = o ? o.completion : {};
                  return (
                    (i.type = e),
                    (i.arg = t),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                      : this.complete(i)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    h
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), I(n), h;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var a = r.arg;
                        I(n);
                      }
                      return a;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, r) {
                  return (
                    (this.delegate = {
                      iterator: R(e),
                      resultName: t,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = n),
                    h
                  );
                },
              });
          }
          function b(e, t, n, r) {
            var a = t && t.prototype instanceof w ? t : w,
              o = Object.create(a.prototype),
              i = new E(r || []);
            return (
              (o._invoke = (function (e, t, n) {
                var r = c;
                return function (a, o) {
                  if (r === f) throw new Error("Generator is already running");
                  if (r === m) {
                    if ("throw" === a) throw o;
                    return q();
                  }
                  for (n.method = a, n.arg = o; ; ) {
                    var i = n.delegate;
                    if (i) {
                      var l = C(i, n);
                      if (l) {
                        if (l === h) continue;
                        return l;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === c) throw ((r = m), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = f;
                    var u = k(e, t, n);
                    if ("normal" === u.type) {
                      if (((r = n.done ? m : d), u.arg === h)) continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = m), (n.method = "throw"), (n.arg = u.arg));
                  }
                };
              })(e, n, i)),
              o
            );
          }
          function k(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          function w() {}
          function x() {}
          function _() {}
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function j(e) {
            function t(n, r, o, i) {
              var l = k(e[n], e, r);
              if ("throw" !== l.type) {
                var u = l.arg,
                  s = u.value;
                return s && "object" == typeof s && a.call(s, "__await")
                  ? Promise.resolve(s.__await).then(
                      function (e) {
                        t("next", e, o, i);
                      },
                      function (e) {
                        t("throw", e, o, i);
                      }
                    )
                  : Promise.resolve(s).then(function (e) {
                      (u.value = e), o(u);
                    }, i);
              }
              i(l.arg);
            }
            var n;
            this._invoke = function (e, r) {
              function a() {
                return new Promise(function (n, a) {
                  t(e, r, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            };
          }
          function C(e, t) {
            var r = e.iterator[t.method];
            if (r === n) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = n),
                  C(e, t),
                  "throw" === t.method)
                )
                  return h;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return h;
            }
            var a = k(r, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), h
              );
            var o = a.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = n)),
                  (t.delegate = null),
                  h)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                h);
          }
          function T(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function I(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(T, this),
              this.reset(!0);
          }
          function R(e) {
            if (e) {
              var t = e[i];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  o = function t() {
                    for (; ++r < e.length; )
                      if (a.call(e, r))
                        return (t.value = e[r]), (t.done = !1), t;
                    return (t.value = n), (t.done = !0), t;
                  };
                return (o.next = o);
              }
            }
            return { next: q };
          }
          function q() {
            return { value: n, done: !0 };
          }
        })(
          (function () {
            return this;
          })() || Function("return this")()
        );
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (undefined !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    "use strict";
    var e,
      t = n(2493),
      r = n(77562),
      a = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      o = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      i = "https://plugin-api.yescaptcha.com/",
      l = [
        /^127\.0\.0\.1/,
        /(www\.)?google\.com/,
        /.*\.doubleclick\.net/,
        /.*\.instagram\.com/,
        /.*\.hcaptcha\.com/,
        /.*\.recaptcha\.net/,
        /.*\.taboola\.com/,
        /.*\.arkoselabs\.com/,
        /.*\.cloudflare\.com/,
        /(www\.)?twitter\.com/,
        /x\.com/,
        /(www\.)?facebook\.com/,
        /.*\.online-metrix\.net/,
        /drfdisvc\.walmart\.com/,
      ],
      u =
        null === (e = location.href) || undefined === e
          ? undefined
          : e.substring(0, 128),
      s = (function () {
        function e() {
          this.elementStore = { href: u };
        }
        return (
          (e.prototype.fetchHrefStore = function (e) {
            var n = e.isForceUpdate;
            return a(this, undefined, undefined, function () {
              var e,
                r,
                a,
                u,
                s,
                c,
                d,
                f,
                m,
                h,
                v = this;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = location.host),
                      l.find(function (t) {
                        return t.test(e);
                      })
                        ? [2]
                        : ((r = "hostStore"), [4, chrome.storage.local.get(r)])
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      (u = null == a ? undefined : a[r]) ||
                        (chrome.storage.local.set((((m = {})[r] = {}), m)),
                        (u = {})),
                      (s = null == u ? undefined : u[e]) && !n
                        ? [3, 3]
                        : ((c = function (e, t) {
                            var n;
                            return (
                              undefined === t && (t = 1e3),
                              function () {
                                for (
                                  var r = [], a = 0;
                                  a < arguments.length;
                                  a++
                                )
                                  r[a] = arguments[a];
                                if (!n) return e.apply(undefined, r);
                                n = setTimeout(function () {
                                  clearTimeout(n);
                                }, t);
                              }
                            );
                          }),
                          [
                            4,
                            c(
                              t.get,
                              3e3
                            )(
                              new URL("fetchHostData2?host=".concat(e), i).href
                            ),
                          ])
                    );
                  case 2:
                    (d = o.sent()),
                      (s =
                        "fail" !== (null == d ? undefined : d.status) &&
                        (null == d ? undefined : d.length)
                          ? d
                          : []),
                      (u[e] = s),
                      chrome.storage.local.set((((h = {})[r] = u), h)),
                      (o.label = 3);
                  case 3:
                    return (
                      (f =
                        null == s
                          ? undefined
                          : s.find(function (e) {
                              var t = v.getImageElementFromStore(e),
                                n = v.getInputElementFromStore(e);
                              return !(!t || !n);
                            })) && (this.elementStore = f),
                      [2, f]
                    );
                }
              });
            });
          }),
          (e.prototype.storeImageElement = function (e) {
            var t = e.id,
              n = e.className,
              a = (0, r.y4)(e);
            a && (this.elementStore.imageTagXpath = a),
              t &&
                this.elementStore.imageTagId !== t &&
                (this.elementStore.imageTagId = t),
              n &&
                this.elementStore.imageTagClass !== n &&
                ("https://mysignins.microsoft.com/security-info" ===
                location.href
                  ? (this.elementStore.imageTagClass = n.replace(
                      / image-\d{3}/,
                      ""
                    ))
                  : (this.elementStore.imageTagClass = n));
          }),
          (e.prototype.storeInputElement = function (e) {
            var t = e.id,
              n = e.className,
              a = (0, r.y4)(e);
            a && (this.elementStore.inputTagXpath = a),
              t &&
                this.elementStore.inputTagId !== t &&
                (this.elementStore.inputTagId = t),
              n &&
                this.elementStore.inputTagClass !== n &&
                ("https://mysignins.microsoft.com/security-info" ===
                location.href
                  ? (this.elementStore.inputTagClass = n.replace(
                      / field-\d{3}/,
                      ""
                    ))
                  : (this.elementStore.inputTagClass = n));
          }),
          (e.prototype.sendStoreDataToRemote = function () {
            return a(this, undefined, undefined, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      (0, t.post)(
                        new URL("updateHostData", i).href,
                        this.elementStore
                      ),
                    ];
                  case 1:
                    return (
                      e.sent(), [4, this.fetchHrefStore({ isForceUpdate: !0 })]
                    );
                  case 2:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (e.prototype.getImageElement = function () {
            if (this.elementStore)
              return this.getImageElementFromStore(this.elementStore);
          }),
          (e.prototype.getImageElementFromStore = function (e) {
            var t;
            if (e) {
              var n,
                a = e.imageTagXpath,
                o = e.imageTagId,
                i = e.imageTagClass;
              if (a)
                if (
                  (n = (0, r.Mc)(a)) &&
                  ["CANVAS", "IMG", "DIV"].includes(n.tagName)
                )
                  return n;
              if (o)
                if (
                  (n = document.getElementById(o)) &&
                  ["CANVAS", "IMG", "DIV"].includes(n.tagName)
                )
                  return n;
              if (i)
                if (
                  (n =
                    null === (t = document.getElementsByClassName(i)) ||
                    undefined === t
                      ? undefined
                      : t[0]) &&
                  ["CANVAS", "IMG", "DIV"].includes(n.tagName)
                )
                  return n;
            }
          }),
          (e.prototype.getInputElement = function () {
            if (this.elementStore)
              return this.getInputElementFromStore(this.elementStore);
          }),
          (e.prototype.getInputElementFromStore = function (e) {
            var t;
            if (e) {
              var n,
                a = e.inputTagXpath,
                o = e.inputTagId,
                i = e.inputTagClass;
              if (a) if ((n = (0, r.Mc)(a)) && "INPUT" === n.tagName) return n;
              if (o)
                if ((n = document.getElementById(o)) && "INPUT" === n.tagName)
                  return n;
              if (i)
                if (
                  (n =
                    null === (t = document.getElementsByClassName(i)) ||
                    undefined === t
                      ? undefined
                      : t[0]) &&
                  "INPUT" === (null == n ? undefined : n.tagName)
                )
                  return n;
            }
          }),
          e
        );
      })();
    function c(e) {
      return (
        null != e &&
        "object" == typeof e &&
        !0 === e["@@functional/placeholder"]
      );
    }
    function d(e) {
      return function t(n) {
        return 0 === arguments.length || c(n) ? t : e.apply(this, arguments);
      };
    }
    function f(e) {
      return function t(n, r) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return c(n)
              ? t
              : d(function (t) {
                  return e(n, t);
                });
          default:
            return c(n) && c(r)
              ? t
              : c(n)
              ? d(function (t) {
                  return e(t, r);
                })
              : c(r)
              ? d(function (t) {
                  return e(n, t);
                })
              : e(n, r);
        }
      };
    }
    const m =
      Array.isArray ||
      function (e) {
        return (
          null != e &&
          e.length >= 0 &&
          "[object Array]" === Object.prototype.toString.call(e)
        );
      };
    function h(e) {
      return null != e && "function" == typeof e["@@transducer/step"];
    }
    function v(e, t, n) {
      return function () {
        if (0 === arguments.length) return n();
        var r = arguments[arguments.length - 1];
        if (!m(r)) {
          for (var a = 0; a < e.length; ) {
            if ("function" == typeof r[e[a]])
              return r[e[a]].apply(
                r,
                Array.prototype.slice.call(arguments, 0, -1)
              );
            a += 1;
          }
          if (h(r)) {
            var o = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
            return o(r);
          }
        }
        return n.apply(this, arguments);
      };
    }
    const p = {
      init: function () {
        return this.xf["@@transducer/init"]();
      },
      result: function (e) {
        return this.xf["@@transducer/result"](e);
      },
    };
    function g(e, t) {
      for (var n = 0, r = t.length, a = Array(r); n < r; )
        (a[n] = e(t[n])), (n += 1);
      return a;
    }
    function y(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    const b = d(function (e) {
      return (
        !!m(e) ||
        (!!e &&
          "object" == typeof e &&
          !y(e) &&
          (0 === e.length ||
            (e.length > 0 &&
              e.hasOwnProperty(0) &&
              e.hasOwnProperty(e.length - 1))))
      );
    });
    var k = (function () {
      function e(e) {
        this.f = e;
      }
      return (
        (e.prototype["@@transducer/init"] = function () {
          throw new Error("init not implemented on XWrap");
        }),
        (e.prototype["@@transducer/result"] = function (e) {
          return e;
        }),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(e, t);
        }),
        e
      );
    })();
    function w(e, t) {
      switch (e) {
        case 0:
          return function () {
            return t.apply(this, arguments);
          };
        case 1:
          return function (e) {
            return t.apply(this, arguments);
          };
        case 2:
          return function (e, n) {
            return t.apply(this, arguments);
          };
        case 3:
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        case 4:
          return function (e, n, r, a) {
            return t.apply(this, arguments);
          };
        case 5:
          return function (e, n, r, a, o) {
            return t.apply(this, arguments);
          };
        case 6:
          return function (e, n, r, a, o, i) {
            return t.apply(this, arguments);
          };
        case 7:
          return function (e, n, r, a, o, i, l) {
            return t.apply(this, arguments);
          };
        case 8:
          return function (e, n, r, a, o, i, l, u) {
            return t.apply(this, arguments);
          };
        case 9:
          return function (e, n, r, a, o, i, l, u, s) {
            return t.apply(this, arguments);
          };
        case 10:
          return function (e, n, r, a, o, i, l, u, s, c) {
            return t.apply(this, arguments);
          };
        default:
          throw new Error(
            "First argument to _arity must be a non-negative integer no greater than ten"
          );
      }
    }
    const x = f(function (e, t) {
      return w(e.length, function () {
        return e.apply(t, arguments);
      });
    });
    function _(e, t, n) {
      for (var r = n.next(); !r.done; ) {
        if (
          (t = e["@@transducer/step"](t, r.value)) &&
          t["@@transducer/reduced"]
        ) {
          t = t["@@transducer/value"];
          break;
        }
        r = n.next();
      }
      return e["@@transducer/result"](t);
    }
    function S(e, t, n, r) {
      return e["@@transducer/result"](n[r](x(e["@@transducer/step"], e), t));
    }
    var j = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
    function C(e, t, n) {
      if (
        ("function" == typeof e &&
          (e = (function (e) {
            return new k(e);
          })(e)),
        b(n))
      )
        return (function (e, t, n) {
          for (var r = 0, a = n.length; r < a; ) {
            if (
              (t = e["@@transducer/step"](t, n[r])) &&
              t["@@transducer/reduced"]
            ) {
              t = t["@@transducer/value"];
              break;
            }
            r += 1;
          }
          return e["@@transducer/result"](t);
        })(e, t, n);
      if ("function" == typeof n["fantasy-land/reduce"])
        return S(e, t, n, "fantasy-land/reduce");
      if (null != n[j]) return _(e, t, n[j]());
      if ("function" == typeof n.next) return _(e, t, n);
      if ("function" == typeof n.reduce) return S(e, t, n, "reduce");
      throw new TypeError("reduce: list must be array or iterable");
    }
    function T(e, t) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    var I = Object.prototype.toString;
    const E = (function () {
      return "[object Arguments]" === I.call(arguments)
        ? function (e) {
            return "[object Arguments]" === I.call(e);
          }
        : function (e) {
            return T("callee", e);
          };
    })();
    var R = !{ toString: null }.propertyIsEnumerable("toString"),
      q = [
        "constructor",
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ],
      N = (function () {
        return arguments.propertyIsEnumerable("length");
      })(),
      O = function (e, t) {
        for (var n = 0; n < e.length; ) {
          if (e[n] === t) return !0;
          n += 1;
        }
        return !1;
      };
    const L =
      "function" != typeof Object.keys || N
        ? d(function (e) {
            if (Object(e) !== e) return [];
            var t,
              n,
              r = [],
              a = N && E(e);
            for (t in e) !T(t, e) || (a && "length" === t) || (r[r.length] = t);
            if (R)
              for (n = q.length - 1; n >= 0; )
                T((t = q[n]), e) && !O(r, t) && (r[r.length] = t), (n -= 1);
            return r;
          })
        : d(function (e) {
            return Object(e) !== e ? [] : Object.keys(e);
          });
    Number.isInteger;
    function A(e) {
      return function t(n, r, a) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return c(n)
              ? t
              : f(function (t, r) {
                  return e(n, t, r);
                });
          case 2:
            return c(n) && c(r)
              ? t
              : c(n)
              ? f(function (t, n) {
                  return e(t, r, n);
                })
              : c(r)
              ? f(function (t, r) {
                  return e(n, t, r);
                })
              : d(function (t) {
                  return e(n, r, t);
                });
          default:
            return c(n) && c(r) && c(a)
              ? t
              : c(n) && c(r)
              ? f(function (t, n) {
                  return e(t, n, a);
                })
              : c(n) && c(a)
              ? f(function (t, n) {
                  return e(t, r, n);
                })
              : c(r) && c(a)
              ? f(function (t, r) {
                  return e(n, t, r);
                })
              : c(n)
              ? d(function (t) {
                  return e(t, r, a);
                })
              : c(r)
              ? d(function (t) {
                  return e(n, t, a);
                })
              : c(a)
              ? d(function (t) {
                  return e(n, r, t);
                })
              : e(n, r, a);
        }
      };
    }
    const P = A(C);
    function M(e, t) {
      return function () {
        return t.call(this, e.apply(this, arguments));
      };
    }
    function F(e, t) {
      return function () {
        var n = arguments.length;
        if (0 === n) return t();
        var r = arguments[n - 1];
        return m(r) || "function" != typeof r[e]
          ? t.apply(this, arguments)
          : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    }
    const B = A(
      F("slice", function (e, t, n) {
        return Array.prototype.slice.call(n, e, t);
      })
    );
    const D = d(F("tail", B(1, 1 / 0)));
    function G() {
      if (0 === arguments.length)
        throw new Error("pipe requires at least one argument");
      return w(arguments[0].length, P(M, arguments[0], D(arguments)));
    }
    function U(e) {
      for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
      return n;
    }
    function V(e, t, n) {
      for (var r = 0, a = n.length; r < a; ) {
        if (e(t, n[r])) return !0;
        r += 1;
      }
      return !1;
    }
    const H =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          };
    const W = d(function (e) {
      return null === e
        ? "Null"
        : undefined === e
        ? "Undefined"
        : Object.prototype.toString.call(e).slice(8, -1);
    });
    function z(e, t, n, r) {
      var a = U(e);
      function o(e, t) {
        return K(e, t, n.slice(), r.slice());
      }
      return !V(
        function (e, t) {
          return !V(o, t, e);
        },
        U(t),
        a
      );
    }
    function K(e, t, n, r) {
      if (H(e, t)) return !0;
      var a,
        o,
        i = W(e);
      if (i !== W(t)) return !1;
      if (
        "function" == typeof e["fantasy-land/equals"] ||
        "function" == typeof t["fantasy-land/equals"]
      )
        return (
          "function" == typeof e["fantasy-land/equals"] &&
          e["fantasy-land/equals"](t) &&
          "function" == typeof t["fantasy-land/equals"] &&
          t["fantasy-land/equals"](e)
        );
      if ("function" == typeof e.equals || "function" == typeof t.equals)
        return (
          "function" == typeof e.equals &&
          e.equals(t) &&
          "function" == typeof t.equals &&
          t.equals(e)
        );
      switch (i) {
        case "Arguments":
        case "Array":
        case "Object":
          if (
            "function" == typeof e.constructor &&
            "Promise" ===
              ((a = e.constructor),
              null == (o = String(a).match(/^function (\w*)/)) ? "" : o[1])
          )
            return e === t;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof e != typeof t || !H(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Date":
          if (!H(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Error":
          return e.name === t.name && e.message === t.message;
        case "RegExp":
          if (
            e.source !== t.source ||
            e.global !== t.global ||
            e.ignoreCase !== t.ignoreCase ||
            e.multiline !== t.multiline ||
            e.sticky !== t.sticky ||
            e.unicode !== t.unicode
          )
            return !1;
      }
      for (var l = n.length - 1; l >= 0; ) {
        if (n[l] === e) return r[l] === t;
        l -= 1;
      }
      switch (i) {
        case "Map":
          return (
            e.size === t.size &&
            z(e.entries(), t.entries(), n.concat([e]), r.concat([t]))
          );
        case "Set":
          return (
            e.size === t.size &&
            z(e.values(), t.values(), n.concat([e]), r.concat([t]))
          );
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
          break;
        default:
          return !1;
      }
      var u = L(e);
      if (u.length !== L(t).length) return !1;
      var s = n.concat([e]),
        c = r.concat([t]);
      for (l = u.length - 1; l >= 0; ) {
        var d = u[l];
        if (!T(d, t) || !K(t[d], e[d], s, c)) return !1;
        l -= 1;
      }
      return !0;
    }
    const J = f(function (e, t) {
      return K(e, t, [], []);
    });
    function X(e, t) {
      return (
        (function (e, t, n) {
          var r, a;
          if ("function" == typeof e.indexOf)
            switch (typeof t) {
              case "number":
                if (0 === t) {
                  for (r = 1 / t; n < e.length; ) {
                    if (0 === (a = e[n]) && 1 / a === r) return n;
                    n += 1;
                  }
                  return -1;
                }
                if (t != t) {
                  for (; n < e.length; ) {
                    if ("number" == typeof (a = e[n]) && a != a) return n;
                    n += 1;
                  }
                  return -1;
                }
                return e.indexOf(t, n);
              case "string":
              case "boolean":
              case "function":
              case "undefined":
                return e.indexOf(t, n);
              case "object":
                if (null === t) return e.indexOf(t, n);
            }
          for (; n < e.length; ) {
            if (J(e[n], t)) return n;
            n += 1;
          }
          return -1;
        })(t, e, 0) >= 0
      );
    }
    function Y(e) {
      return (
        '"' +
        e
          .replace(/\\/g, "\\\\")
          .replace(/[\b]/g, "\\b")
          .replace(/\f/g, "\\f")
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\t/g, "\\t")
          .replace(/\v/g, "\\v")
          .replace(/\0/g, "\\0")
          .replace(/"/g, '\\"') +
        '"'
      );
    }
    var Z = function (e) {
      return (e < 10 ? "0" : "") + e;
    };
    const $ =
      "function" == typeof Date.prototype.toISOString
        ? function (e) {
            return e.toISOString();
          }
        : function (e) {
            return (
              e.getUTCFullYear() +
              "-" +
              Z(e.getUTCMonth() + 1) +
              "-" +
              Z(e.getUTCDate()) +
              "T" +
              Z(e.getUTCHours()) +
              ":" +
              Z(e.getUTCMinutes()) +
              ":" +
              Z(e.getUTCSeconds()) +
              "." +
              (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
              "Z"
            );
          };
    var Q = (function () {
      function e(e, t) {
        (this.xf = t), (this.f = e);
      }
      return (
        (e.prototype["@@transducer/init"] = p.init),
        (e.prototype["@@transducer/result"] = p.result),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
        }),
        e
      );
    })();
    const ee = f(
      v(
        ["fantasy-land/filter", "filter"],
        f(function (e, t) {
          return new Q(e, t);
        }),
        function (e, t) {
          return (
            (n = t),
            "[object Object]" === Object.prototype.toString.call(n)
              ? C(
                  function (n, r) {
                    return e(t[r]) && (n[r] = t[r]), n;
                  },
                  {},
                  L(t)
                )
              : (function (e, t) {
                  for (var n = 0, r = t.length, a = []; n < r; )
                    e(t[n]) && (a[a.length] = t[n]), (n += 1);
                  return a;
                })(e, t)
          );
          var n;
        }
      )
    );
    const te = f(function (e, t) {
      return ee(
        ((n = e),
        function () {
          return !n.apply(this, arguments);
        }),
        t
      );
      var n;
    });
    function ne(e, t) {
      var n = function (n) {
          var r = t.concat([e]);
          return X(n, r) ? "<Circular>" : ne(n, r);
        },
        r = function (e, t) {
          return g(function (t) {
            return Y(t) + ": " + n(e[t]);
          }, t.slice().sort());
        };
      switch (Object.prototype.toString.call(e)) {
        case "[object Arguments]":
          return (
            "(function() { return arguments; }(" + g(n, e).join(", ") + "))"
          );
        case "[object Array]":
          return (
            "[" +
            g(n, e)
              .concat(
                r(
                  e,
                  te(function (e) {
                    return /^\d+$/.test(e);
                  }, L(e))
                )
              )
              .join(", ") +
            "]"
          );
        case "[object Boolean]":
          return "object" == typeof e
            ? "new Boolean(" + n(e.valueOf()) + ")"
            : e.toString();
        case "[object Date]":
          return "new Date(" + (isNaN(e.valueOf()) ? n(NaN) : Y($(e))) + ")";
        case "[object Null]":
          return "null";
        case "[object Number]":
          return "object" == typeof e
            ? "new Number(" + n(e.valueOf()) + ")"
            : 1 / e == -1 / 0
            ? "-0"
            : e.toString(10);
        case "[object String]":
          return "object" == typeof e
            ? "new String(" + n(e.valueOf()) + ")"
            : Y(e);
        case "[object Undefined]":
          return "undefined";
        default:
          if ("function" == typeof e.toString) {
            var a = e.toString();
            if ("[object Object]" !== a) return a;
          }
          return "{" + r(e, L(e)).join(", ") + "}";
      }
    }
    "function" == typeof Object.assign && Object.assign;
    const re = d(function (e) {
      return null == e;
    });
    function ae(e, t) {
      if (
        null == t ||
        !(function (e) {
          var t = Object.prototype.toString.call(e);
          return (
            "[object Function]" === t ||
            "[object AsyncFunction]" === t ||
            "[object GeneratorFunction]" === t ||
            "[object AsyncGeneratorFunction]" === t
          );
        })(t.then)
      )
        throw new TypeError(
          "`" + e + "` expected a Promise, received " + ne(t, [])
        );
    }
    const oe = f(function (e, t) {
      return ae("andThen", t), t.then(e);
    });
    var ie = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    String.prototype.trim;
    var le = (function () {
        function e() {}
        return (
          (e.prototype.setImageElement = function (e) {
            this.ImageElement = e;
          }),
          (e.prototype.attachToImage = function (e) {
            if ((this.setImageElement(e), this.ImageElement)) {
              var t;
              ((t = this.ImageElement) &&
                (t.offsetWidth ||
                  t.offsetHeight ||
                  t.getClientRects().length)) ||
                this.ImageElement.remove();
              var n = this.ImageElement.getBoundingClientRect();
              this.insertElement ||
                (this.insertElement = document.createElement("div")),
                this.insertElement.remove(),
                (this.insertElement.style.background = "#03b73bd1"),
                (this.insertElement.style.width = "6px"),
                (this.insertElement.style.height = "6px"),
                (this.insertElement.style.zIndex = "999"),
                (this.insertElement.style.top = "".concat(
                  n.top + window.scrollY,
                  "px"
                )),
                (this.insertElement.style.left = "".concat(
                  n.left + window.scrollX,
                  "px"
                )),
                (this.insertElement.style.position = "absolute"),
                document.body.appendChild(this.insertElement);
            }
          }),
          (e.prototype.removeNotice = function () {
            var e;
            null === (e = this.insertElement) || undefined === e || e.remove();
          }),
          e
        );
      })(),
      ue = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      se = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      ce = function (e, n) {
        return function (r, a) {
          return (
            undefined === a && (a = 3),
            ue(undefined, undefined, undefined, function () {
              var o, i;
              return se(this, function (l) {
                switch (l.label) {
                  case 0:
                    (o = 0), (l.label = 1);
                  case 1:
                    return o < a ? [4, e(r)] : [3, 5];
                  case 2:
                    return (null == (i = l.sent()) ? undefined : i.length) > n
                      ? [2, i]
                      : (console.log(
                          "imageLengthThresholdLimit:"
                            .concat(1e4, ">")
                            .concat(null == i ? undefined : i.length)
                        ),
                        [4, (0, t.delay)(1500)]);
                  case 3:
                    l.sent(), (l.label = 4);
                  case 4:
                    return o++, [3, 1];
                  case 5:
                    return [2];
                }
              });
            })
          );
        };
      },
      de = ce(function (e) {
        return ue(undefined, undefined, undefined, function () {
          return se(this, function (t) {
            return [
              2,
              new Promise(function (t) {
                var n = setTimeout(function () {
                  clearTimeout(n),
                    t(null == e ? undefined : e.toDataURL("image/jpeg", 0.3));
                }, 1e3);
              }),
            ];
          });
        });
      }, 1e4),
      fe = ce(function (e) {
        return ue(undefined, undefined, undefined, function () {
          var n, r, a, o;
          return se(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, (0, t.waitforbackground)(e)];
              case 1:
                return (
                  i.sent(),
                  (n =
                    null ===
                      (o =
                        null ===
                          (a =
                            null === (r = null == e ? undefined : e.style) ||
                            undefined === r
                              ? undefined
                              : r.background) || undefined === a
                          ? undefined
                          : a.split('"')) || undefined === o
                      ? undefined
                      : o[1]),
                  [
                    4,
                    (0, t.div2base64)(
                      n,
                      null == e ? undefined : e.offsetWidth,
                      null == e ? undefined : e.offsetHeight
                    ),
                  ]
                );
              case 2:
                return [2, i.sent()];
            }
          });
        });
      }, 5e3),
      me = ce(function (e) {
        return ue(undefined, undefined, undefined, function () {
          var n, r, a, o;
          return se(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, (0, t.waitforbackgroundWithTimeout)(e)];
              case 1:
                return (
                  i.sent(),
                  (n =
                    null ===
                      (o =
                        null ===
                          (a =
                            null === (r = null == e ? undefined : e.style) ||
                            undefined === r
                              ? undefined
                              : r.background) || undefined === a
                          ? undefined
                          : a.split('"')) || undefined === o
                      ? undefined
                      : o[1])
                    ? [
                        2,
                        (0, t.div2base64)(
                          n,
                          null == e ? undefined : e.offsetWidth,
                          null == e ? undefined : e.offsetHeight
                        ),
                      ]
                    : [2]
                );
            }
          });
        });
      }, 3e3),
      he = function (e, t, n) {
        return (
          undefined === n &&
            (n = { titleColor: "#00cc00", contentColor: "#1475B2" }),
          console.log(
            "%c".concat(e, "%c").concat(t),
            "background: ".concat(
              n.titleColor,
              "; color: #fff; border-radius: 3px 0 0 3px;padding:2px 5px"
            ),
            "background: ".concat(
              n.contentColor,
              "; color: #fff; border-radius: 0 3px 3px 0;padding:2px 5px"
            )
          )
        );
      },
      ve = function () {
        return ue(undefined, undefined, undefined, function () {
          var e;
          return se(this, function (t) {
            return (
              (e = new Promise(function (e) {
                var t = function (n) {
                  "responseHcaptchaChallengeIframeRect2" ===
                    (null == n ? undefined : n.type) &&
                    (null == n ? undefined : n.receiverHref) ===
                      location.href &&
                    (e(n.result), window.removeEventListener("message", t));
                };
                chrome.runtime.onMessage.addListener(t);
                var n = setTimeout(function () {
                  e(!1), clearTimeout(n);
                }, 1e3);
              })),
              je({
                type: "queryHcaptchaChallengeIframeRect2",
                data: { href: location.href },
              }),
              [2, e]
            );
          });
        });
      },
      pe = function (e, n, r) {
        return ue(undefined, undefined, undefined, function () {
          var a, o, i, l;
          return se(this, function (u) {
            switch (u.label) {
              case 0:
                const mv = new MouseEvent("mousedown", {
                  clientX: n.x,
                  clientY: n.y,
                });
                console.log("drag_to", e, n, window.location.href, mv);
                return (
                  he(
                    "drag_to",
                    ""
                      .concat(JSON.stringify(n), ", ")
                      .concat(JSON.stringify(r)),
                    { titleColor: "red", contentColor: "green" }
                  ),
                  e.dispatchEvent(mv),
                  [4, (0, t.delay)(1500)]
                );
              case 1:
                u.sent(),
                  (a = { x: n.x, y: n.y }),
                  (o = 50),
                  (i = { x: (r.x - n.x) / o, y: (r.y - n.y) / o }),
                  (l = 0),
                  (u.label = 2);
              case 2:
                return l < o
                  ? ((a.x = a.x + i.x),
                    (a.y = a.y + i.y),
                    e.dispatchEvent(
                      new MouseEvent("mousemove", {
                        clientX: a.x,
                        clientY: a.y,
                      })
                    ),
                    [4, (0, t.delay)(10)])
                  : [3, 5];
              case 3:
                u.sent(), (u.label = 4);
              case 4:
                return l++, [3, 2];
              case 5:
                return (
                  e.dispatchEvent(
                    new MouseEvent("mouseup", { clientX: a.x, clientY: a.y })
                  ),
                  [2]
                );
            }
          });
        });
      },
      ge = function (e, t, n) {
        var r = e.getBoundingClientRect(),
          a = t.DOMRect;
        return new Promise(function (e, o) {
          chrome.runtime.sendMessage({ action: "screenshot" }, function (o) {
            return ue(undefined, undefined, undefined, function () {
              var i, l;
              return se(this, function (u) {
                switch (u.label) {
                  case 0:
                    return [
                      4,
                      ((s = o),
                      new Promise(function (e) {
                        var t = new Image();
                        (t.onload = function () {
                          return e({ width: t.width, height: t.height });
                        }),
                          (t.src = s);
                      })),
                    ];
                  case 1:
                    return (
                      (i = u.sent()),
                      ((l = new Image()).onload = function () {
                        var o,
                          u,
                          s = document.createElement("canvas"),
                          c = s.getContext("2d"),
                          d = i.width / t.topClientWidth;
                        (s.width = r.width * d),
                          (s.height = r.height * d),
                          null == c ||
                            c.drawImage(
                              l,
                              (r.x +
                                (null !== (o = null == a ? undefined : a.x) &&
                                undefined !== o
                                  ? o
                                  : 0)) *
                                d,
                              (r.y +
                                (null !== (u = null == a ? undefined : a.y) &&
                                undefined !== u
                                  ? u
                                  : 0)) *
                                d,
                              r.width * d,
                              r.height * d,
                              0,
                              0,
                              r.width * d,
                              r.height * d
                            ),
                          e(n ? s.toDataURL(n.type, n.rate) : s.toDataURL());
                      }),
                      (l.src = o),
                      [2]
                    );
                }
                var s;
              });
            });
          });
          var i = setTimeout(function () {
            e("timeout"), clearTimeout(i);
          }, 5e3);
        });
      };
    var ye,
      be = function () {
        return (
          (be =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          be.apply(this, arguments)
        );
      },
      ke = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      we = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      xe = function (e) {
        return "funcaptcha" === e
          ? "top"
          : "awsCaptcha" === e
          ? "self"
          : "parent";
      },
      _e = function (e, t, n) {
        undefined === n && (n = ""),
          e.allowJsInject &&
            Ce({
              config: e,
              target: xe(n),
              type: "workStatusChange",
              data: { result: t },
            });
      },
      Se = function (e, t) {
        if ((undefined === t && (t = ""), e.allowJsInject)) {
          var n = null == e ? undefined : e.workStatusFlag;
          n &&
            Ce({
              config: e,
              type: "initWorkStatus",
              target: xe(t),
              data: { result: n },
            });
        }
      },
      je = function (e) {
        var t = e.type,
          n = e.data,
          r = be({ action: "contentMsg", type: t }, n);
        chrome.runtime.sendMessage(r);
      },
      Ce = function (e) {
        var t,
          n,
          r,
          a = e.config,
          o = e.target,
          i = e.type,
          l = e.data,
          u = e.targetFrames,
          s = a.postMassageKeyObj,
          c = [
            "workStatusChange",
            "initWorkStatus",
            "queryJsControlFlagAnswer",
            "queryJsControlFlag",
            "jsControl",
            "isHcaptchaSuccessForJsControl",
            "isRecaptchaSuccessForJsControl",
          ];
        if (a.allowJsInject || !c.includes(i)) {
          var d = c.includes(i) ? "crx" : s.crx,
            f = c.includes(i) ? "type" : s.type,
            m = be((((t = {})[d] = "yesCaptcha"), (t[f] = i), t), l);
          if (null == u ? undefined : u.length)
            for (var h = 0; h < u.length; h++)
              u[h].contentWindow.postMessage(m, "*");
          else {
            if ("child" === o) {
              var v = document.getElementsByTagName("IFRAME");
              for (h = 0; h < v.length; h++)
                v[h].contentWindow.postMessage(m, "*");
            }
            "parent" === o &&
              (null ===
                (n =
                  null === window || undefined === window
                    ? undefined
                    : window.parent) ||
                undefined === n ||
                n.postMessage(m, "*")),
              "top" === o &&
                (null ===
                  (r =
                    null === window || undefined === window
                      ? undefined
                      : window.top) ||
                  undefined === r ||
                  r.postMessage(m, "*")),
              "self" === o && window.postMessage(m);
          }
        }
      },
      Te = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ie = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Ee = function (e, n) {
        return Te(undefined, undefined, undefined, function () {
          var n, r;
          return Ie(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, (0, t.delay)(2e3)];
              case 1:
                return (
                  a.sent(),
                  window.self !== window.top
                    ? [
                        4,
                        Te(undefined, undefined, undefined, function () {
                          var e;
                          return Ie(this, function (t) {
                            return (
                              (e = new Promise(function (e) {
                                var t = function (r) {
                                  var a,
                                    o = null == r ? undefined : r.type;
                                  if (
                                    (console.log("type", o),
                                    "responseTextCaptchaChallengeIframeRect" ===
                                      o)
                                  ) {
                                    var i = null == r ? undefined : r.result,
                                      l =
                                        null ===
                                          (a =
                                            null == i
                                              ? undefined
                                              : i.find(function (e) {
                                                  return (
                                                    e.src === location.href
                                                  );
                                                })) || undefined === a
                                          ? undefined
                                          : a.result;
                                    l &&
                                      (e(l),
                                      clearTimeout(n),
                                      chrome.runtime.onMessage.removeListener(
                                        t
                                      ));
                                  }
                                };
                                chrome.runtime.onMessage.addListener(t);
                                var n = setTimeout(function () {
                                  e(!1),
                                    clearTimeout(n),
                                    chrome.runtime.onMessage.removeListener(t);
                                }, 2e3);
                              })),
                              je({
                                type: "queryTextCaptchaChallengeIframeRect",
                              }),
                              [2, e]
                            );
                          });
                        }),
                      ]
                    : [3, 3]
                );
              case 2:
                (n = a.sent()), (a.label = 3);
              case 3:
                return (
                  (r = e.getBoundingClientRect()),
                  [
                    2,
                    new Promise(function (e, t) {
                      chrome.runtime.sendMessage(
                        { action: "screenshot" },
                        function (t) {
                          var a = new Image();
                          (a.onload = function () {
                            var t,
                              o,
                              i,
                              l,
                              u = document.createElement("canvas"),
                              s = u.getContext("2d");
                            (u.width = r.width * devicePixelRatio),
                              (u.height = r.height * devicePixelRatio),
                              null == s ||
                                s.drawImage(
                                  a,
                                  (r.x +
                                    (null !==
                                      (o =
                                        null ===
                                          (t =
                                            null == n
                                              ? undefined
                                              : n.DOMRect) || undefined === t
                                          ? undefined
                                          : t.x) && undefined !== o
                                      ? o
                                      : 0)) *
                                    devicePixelRatio,
                                  (r.y +
                                    (null !==
                                      (l =
                                        null ===
                                          (i =
                                            null == n
                                              ? undefined
                                              : n.DOMRect) || undefined === i
                                          ? undefined
                                          : i.y) && undefined !== l
                                      ? l
                                      : 0)) *
                                    devicePixelRatio,
                                  r.width * devicePixelRatio,
                                  r.height * devicePixelRatio,
                                  0,
                                  0,
                                  r.width * devicePixelRatio,
                                  r.height * devicePixelRatio
                                ),
                              e(u.toDataURL("image/jpeg", 0.3));
                          }),
                            (a.src = t);
                        }
                      );
                      var a = setTimeout(function () {
                        e("timeout"), clearTimeout(a);
                      }, 5e3);
                    }),
                  ]
                );
            }
          });
        });
      },
      Re = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      qe = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      };
    !(function (e) {
      (e.SUCCESS = "success"), (e.FAIL = "fail");
    })(ye || (ye = {}));
    var Ne = (function () {
        function e(e) {
          var t = this;
          (this.verifyResult = ""),
            (this.hostStoreManager = new s()),
            (this.noticeManager = new le()),
            document.addEventListener(
              "contextmenu",
              function (e) {
                t.clickedEl = e.target;
              },
              !0
            ),
            chrome.runtime.onMessage.addListener(function (e) {
              var n;
              return "getClickedEl" == e.type &&
                (null === (n = null == e ? undefined : e.info) ||
                undefined === n
                  ? undefined
                  : n.editable)
                ? t.verifyProcess({
                    isSkipSelectImage: !0,
                    isSkipVerifyImage: !0,
                  })
                : "getClickedEl" == e.type
                ? t.verifyProcess({ isSkipSelectInput: !0 })
                : undefined;
            }),
            (this.config = e);
          var n = setInterval(function () {
            return Re(t, undefined, undefined, function () {
              return qe(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.autoVerifyProcess()];
                  case 1:
                    return e.sent() && clearInterval(n), [2];
                }
              });
            });
          }, 4e3);
        }
        return (
          (e.prototype.verifyProcess = function (e) {
            return (
              undefined === e && (e = {}),
              Re(this, undefined, undefined, function () {
                var t,
                  n,
                  r,
                  a,
                  o,
                  i,
                  l = this;
                return qe(this, function (u) {
                  return (
                    (t = e.isSkipSelectImage),
                    (n = e.isSkipSelectInput),
                    (r = e.isSkipVerifyImage),
                    (a = e.isSkipWriteVerifyResult),
                    (o = e.isSkipStoreHostData),
                    (i = function (e) {
                      return e === ye.SUCCESS;
                    }),
                    this.selectedImageEl &&
                      this.noticeManager.attachToImage(this.selectedImageEl),
                    G(
                      function () {
                        return t ? ye.SUCCESS : l.selectImage.apply(l);
                      },
                      function (e) {
                        return i(e)
                          ? n
                            ? ye.SUCCESS
                            : l.selectInput.apply(l)
                          : ye.FAIL;
                      },
                      function (e) {
                        return i(e)
                          ? r
                            ? Promise.resolve(ye.SUCCESS)
                            : l.verifyImage.apply(l)
                          : Promise.resolve(ye.FAIL);
                      },
                      oe(function (e) {
                        return i(e)
                          ? a
                            ? Promise.resolve(ye.SUCCESS)
                            : l.writeVerifyResult.apply(l)
                          : Promise.resolve(ye.FAIL);
                      }),
                      oe(function (e) {
                        return i(e)
                          ? o
                            ? Promise.resolve(ye.SUCCESS)
                            : l.storeHostData.apply(l)
                          : Promise.resolve(ye.FAIL);
                      })
                    )(),
                    [2]
                  );
                });
              })
            );
          }),
          (e.prototype.autoVerifyProcess = function () {
            var e, t, n, r, a, o;
            return Re(this, undefined, undefined, function () {
              var i,
                l,
                u,
                s = this;
              return qe(this, function (c) {
                switch (c.label) {
                  case 0:
                    return [
                      4,
                      this.hostStoreManager.fetchHrefStore({
                        isForceUpdate: !1,
                      }),
                    ];
                  case 1:
                    return c.sent()
                      ? [4, this.hostStoreManager.getImageElement()]
                      : [2];
                  case 2:
                    return (
                      (i = c.sent()),
                      [4, this.hostStoreManager.getInputElement()]
                    );
                  case 3:
                    return (
                      (l = c.sent()),
                      i && l
                        ? ((this.selectedImageEl = i),
                          (this.selectedInputEl = l),
                          /service\.mtcaptcha\.com(.*?)client\/iframe\.html/.test(
                            location.href
                          ) &&
                          "DIV" ===
                            (null === (e = this.selectedImageEl) ||
                            undefined === e
                              ? undefined
                              : e.tagName)
                            ? (this.verifyProcess({
                                isSkipSelectImage: !0,
                                isSkipSelectInput: !0,
                                isSkipStoreHostData: !0,
                              }),
                              clearInterval(this.mtCaptchaTimer),
                              (u =
                                null !==
                                  (r =
                                    null ===
                                      (n =
                                        null === (t = this.selectedImageEl) ||
                                        undefined === t
                                          ? undefined
                                          : t.style) || undefined === n
                                      ? undefined
                                      : n.backgroundImage) && undefined !== r
                                  ? r
                                  : ""),
                              (this.mtCaptchaTimer = setInterval(function () {
                                var e,
                                  t,
                                  n,
                                  r =
                                    null !==
                                      (n =
                                        null ===
                                          (t =
                                            null === (e = s.selectedImageEl) ||
                                            undefined === e
                                              ? undefined
                                              : e.style) || undefined === t
                                          ? undefined
                                          : t.backgroundImage) &&
                                    undefined !== n
                                      ? n
                                      : "";
                                u !== r &&
                                  (console.log("mt reprocess"),
                                  (u = r),
                                  s.verifyProcess({
                                    isSkipSelectImage: !0,
                                    isSkipSelectInput: !0,
                                    isSkipStoreHostData: !0,
                                  }));
                              }, 2e3)),
                              [2, !0])
                            : ("CANVAS" ===
                                (null === (a = this.selectedImageEl) ||
                                undefined === a
                                  ? undefined
                                  : a.tagName) &&
                                this.selectedImageEl.addEventListener(
                                  "click",
                                  function () {
                                    s.verifyProcess({
                                      isSkipSelectImage: !0,
                                      isSkipStoreHostData: !0,
                                    });
                                  }
                                ),
                              "IMG" ===
                                (null === (o = this.selectedImageEl) ||
                                undefined === o
                                  ? undefined
                                  : o.tagName) &&
                                (i.onload = function () {
                                  s.verifyProcess({
                                    isSkipSelectImage: !0,
                                    isSkipStoreHostData: !0,
                                  });
                                }),
                              (null == (d = i) ? undefined : d.offsetWidth) ||
                              (null == d ? undefined : d.offsetHeight) ||
                              (null == d
                                ? undefined
                                : d.getClientRects().length)
                                ? this.verifyProcess({
                                    isSkipSelectImage: !0,
                                    isSkipSelectInput: !0,
                                    isSkipStoreHostData: !0,
                                  })
                                : new IntersectionObserver(function (e) {
                                    e[0].intersectionRatio > 0
                                      ? s.verifyProcess({
                                          isSkipSelectImage: !0,
                                          isSkipSelectInput: !0,
                                          isSkipStoreHostData: !0,
                                        })
                                      : s.noticeManager.removeNotice();
                                  }).observe(i),
                              [2, !0]))
                        : [2]
                    );
                }
                var d;
              });
            });
          }),
          (e.prototype.selectImage = function () {
            var e, t, n, r, a, o;
            return "IMG" ===
              (null === (e = this.clickedEl) || undefined === e
                ? undefined
                : e.tagName) ||
              "CANVAS" ===
                (null === (t = this.clickedEl) || undefined === t
                  ? undefined
                  : t.tagName)
              ? ((this.selectedImageEl = this.clickedEl), ye.SUCCESS)
              : "mask ant-tooltip-open" === this.clickedEl.className
              ? ((this.selectedImageEl =
                  null === (n = this.clickedEl) || undefined === n
                    ? undefined
                    : n.previousSibling),
                ye.SUCCESS)
              : "ValidCode disabled-select" === this.clickedEl.className ||
                ("DIV" ===
                  (null === (r = this.clickedEl) || undefined === r
                    ? undefined
                    : r.tagName) &&
                  (null ===
                    (o =
                      null === (a = this.clickedEl) || undefined === a
                        ? undefined
                        : a.style) || undefined === o
                    ? undefined
                    : o.backgroundImage))
              ? ((this.selectedImageEl = this.clickedEl), ye.SUCCESS)
              : this.selectedImageEl
              ? ye.SUCCESS
              : ye.FAIL;
          }),
          (e.prototype.selectInput = function () {
            var e;
            return "INPUT" ===
              (null === (e = this.clickedEl) || undefined === e
                ? undefined
                : e.tagName)
              ? ((this.selectedInputEl = this.clickedEl), ye.SUCCESS)
              : this.selectedInputEl
              ? ye.SUCCESS
              : ye.FAIL;
          }),
          (e.prototype.verifyImage = function () {
            var e, n, r, a;
            return Re(this, undefined, undefined, function () {
              var o, i, l, u, s, c;
              return qe(this, function (d) {
                switch (d.label) {
                  case 0:
                    return this.selectedImageEl
                      ? ((o = 500),
                        [
                          4,
                          ((f = this.selectedImageEl),
                          this.config,
                          Te(undefined, undefined, undefined, function () {
                            var e, t, n, r, a, o, i, l;
                            return Ie(this, function (u) {
                              switch (u.label) {
                                case 0:
                                  return (
                                    u.trys.push([0, 3, , 5]),
                                    /service\.mtcaptcha\.com(.*?)client\/iframe\.html/.test(
                                      location.href
                                    ) && "DIV" == f.tagName
                                      ? [
                                          2,
                                          null !==
                                            (l =
                                              null ===
                                                (i =
                                                  null ===
                                                    (o =
                                                      null ===
                                                        (a =
                                                          null ===
                                                            (r = f.style) ||
                                                          undefined === r
                                                            ? undefined
                                                            : r.backgroundImage) ||
                                                      undefined === a
                                                        ? undefined
                                                        : a.match(
                                                            /\"(.*)\"/
                                                          )) || undefined === o
                                                    ? undefined
                                                    : o[0]) || undefined === i
                                                ? undefined
                                                : i.replaceAll('"', "")) &&
                                          undefined !== l
                                            ? l
                                            : "",
                                        ]
                                      : "DIV" != f.tagName
                                      ? [3, 2]
                                      : [4, Ee(f)]
                                  );
                                case 1:
                                  return [2, u.sent()];
                                case 2:
                                  return (
                                    (t = document.createElement("canvas")),
                                    (n = t.getContext("2d")),
                                    (t.width = f.width),
                                    (t.height = f.height),
                                    null == n ||
                                      n.drawImage(f, 0, 0, f.width, f.height),
                                    (e = t.toDataURL()),
                                    [3, 5]
                                  );
                                case 3:
                                  return u.sent(), [4, Ee(f)];
                                case 4:
                                  return (e = u.sent()), [3, 5];
                                case 5:
                                  return [2, e];
                              }
                            });
                          })),
                        ])
                      : [2, ye.FAIL];
                  case 1:
                    if ((null == (i = d.sent()) ? undefined : i.length) < o)
                      return [2, ye.FAIL];
                    (l = {
                      clientKey: this.config.clientKey,
                      callurl: (0, t.getParentUrl)(),
                      task: { type: "ImageToTextTaskTest", body: i },
                    }),
                      (d.label = 2);
                  case 2:
                    return (
                      d.trys.push([2, 4, , 5]),
                      [
                        4,
                        (0, t.post)(
                          new URL("createTask", this.config.host).href,
                          l
                        ),
                      ]
                    );
                  case 3:
                    return (
                      (null == (u = d.sent())
                        ? undefined
                        : u.errorDescription) &&
                        (0, t.message)({
                          text: null == u ? undefined : u.errorDescription,
                          color: "red",
                        }),
                      u.solution && u.solution.text
                        ? ((s = !!(null ===
                            (n =
                              null === (e = this.config) || undefined === e
                                ? undefined
                                : e.textCaptchaConfig) || undefined === n
                            ? undefined
                            : n.isTransToUppercase)),
                          (this.verifyResult = s
                            ? null ===
                                (a =
                                  null === (r = u.solution) || undefined === r
                                    ? undefined
                                    : r.text) || undefined === a
                              ? undefined
                              : a.toUpperCase()
                            : u.solution.text),
                          [2, ye.SUCCESS])
                        : [3, 5]
                    );
                  case 4:
                    return (c = d.sent()), console.error(c), [2, ye.FAIL];
                  case 5:
                    return [2, ye.FAIL];
                }
                var f;
              });
            });
          }),
          (e.prototype.writeVerifyResult = function () {
            var e = this;
            return this.verifyResult && this.selectedInputEl
              ? (this.selectedInputEl.focus(),
                (this.selectedInputEl.value = ""),
                this.verifyResult.split("").forEach(function (t) {
                  return (
                    (n = t),
                    void (
                      (r = e.selectedInputEl) &&
                      (r.dispatchEvent(new KeyboardEvent("keydown")),
                      (r.value += n),
                      r.dispatchEvent(new KeyboardEvent("keypress")),
                      r.dispatchEvent(new InputEvent("input")),
                      r.dispatchEvent(new KeyboardEvent("keyup")),
                      r.dispatchEvent(
                        new Event("input", { bubbles: !0, cancelable: !0 })
                      ))
                    )
                  );
                  var n, r;
                }),
                ye.SUCCESS)
              : ye.FAIL;
          }),
          (e.prototype.storeHostData = function () {
            return Re(this, undefined, undefined, function () {
              return qe(this, function (e) {
                switch (e.label) {
                  case 0:
                    return this.selectedInputEl &&
                      this.selectedImageEl &&
                      this.selectedInputEl.value === this.verifyResult
                      ? (this.hostStoreManager.storeImageElement(
                          this.selectedImageEl
                        ),
                        this.hostStoreManager.storeInputElement(
                          this.selectedInputEl
                        ),
                        [4, this.hostStoreManager.sendStoreDataToRemote()])
                      : [3, 2];
                  case 1:
                    return e.sent(), [2, ye.SUCCESS];
                  case 2:
                    return [2, ye.FAIL];
                }
              });
            });
          }),
          e
        );
      })(),
      Oe = function (e) {
        return chrome.i18n.getMessage(e);
      },
      Le = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ae = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Pe = /hcaptcha\S*\.com(.*?)frame=(checkbox|checkbox-invisible)/.test(
        location.href
      ),
      Me = /hcaptcha\S*\.com(.*?)frame=checkbox-invisible/.test(location.href),
      Fe = [
        /faucet\.dev\.gblend\.xyz/,
        /^https?:\/\/(www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?$/i,
      ],
      Be = function (e) {
        var n = this;
        if (
          ((this.hasSentSuccessReport = !1),
          (this.stopCheckBoxObserver = function () {
            var e = n.checkBoxTimer;
            (n.checkBoxTimer = undefined), clearInterval(e);
          }),
          (this.startCheckBoxObserver = function () {
            return Le(n, undefined, undefined, function () {
              return Ae(this, function (e) {
                return (
                  this.checkBoxTimer ||
                    (this.checkBoxTimer = setInterval(
                      this.resolveCheckBox,
                      2e3
                    )),
                  [2]
                );
              });
            });
          }),
          (this.resolveCheckBox = function () {
            return Le(n, undefined, undefined, function () {
              var e;
              return Ae(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (null === visualViewport ||
                    undefined === visualViewport
                      ? undefined
                      : visualViewport.width) || Me
                      ? ((e = document.querySelector("#checkbox")) &&
                        "false" ===
                          (null == e
                            ? undefined
                            : e.getAttribute("aria-checked"))
                          ? (_e(this.config, "unknown"),
                            (this.hasSentSuccessReport = !1),
                            this.config.isAutoClickCheckBox && e.click(),
                            (0, t.message)({
                              text: Oe("content_message_3"),
                              color: "green",
                            }))
                          : e &&
                            "true" ===
                              (null == e
                                ? undefined
                                : e.getAttribute("aria-checked")) &&
                            (_e(this.config, "hcaptchaSuccess"),
                            this.hasSentSuccessReport ||
                              (je({
                                type: "queryIsHcaptchaSuccessForReport",
                                data: { result: !0 },
                              }),
                              (this.hasSentSuccessReport = !0)),
                            (0, t.message)({
                              text: Oe("content_message_4"),
                              color: "green",
                            })),
                        Me &&
                        Fe.some(function (e) {
                          return e.test((0, t.getParentUrl)() || "");
                        })
                          ? [
                              4,
                              ue(undefined, undefined, undefined, function () {
                                var e;
                                return se(this, function (t) {
                                  return (
                                    (e = new Promise(function (e) {
                                      var t = function (r) {
                                        "responseIsHcaptchaInvisibleSuccess" ===
                                          (null == r ? undefined : r.type) &&
                                          (e(r.result),
                                          clearTimeout(n),
                                          chrome.runtime.onMessage.removeListener(
                                            t
                                          ));
                                      };
                                      chrome.runtime.onMessage.addListener(t);
                                      var n = setTimeout(function () {
                                        e(!1),
                                          clearTimeout(n),
                                          chrome.runtime.onMessage.removeListener(
                                            t
                                          );
                                      }, 2e3);
                                    })),
                                    je({
                                      type: "queryIsHcaptchaInvisibleSuccess",
                                    }),
                                    [2, e]
                                  );
                                });
                              }),
                            ]
                          : [3, 2])
                      : [2];
                  case 1:
                    n.sent() &&
                      !this.hasSentSuccessReport &&
                      (je({
                        type: "queryIsHcaptchaSuccessForReport",
                        data: { result: !0 },
                      }),
                      (this.hasSentSuccessReport = !0)),
                      (n.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (this.config = e),
          Pe)
        ) {
          Se(e);
          var r = e.hcaptcha,
            a = (e.isAutoClickCheckBox, e.checkBoxClickDelayTime);
          Pe &&
            r &&
            setTimeout(function () {
              n.startCheckBoxObserver();
            }, Number(a)),
            chrome.runtime.onMessage.addListener(function (t) {
              if ("queryIsHcaptchaSuccess" === t.type) {
                var n = document.querySelector("#checkbox");
                n &&
                  "true" ===
                    (null == n ? undefined : n.getAttribute("aria-checked")) &&
                  e.allowJsInject &&
                  Ce({
                    config: e,
                    target: "parent",
                    type: "isHcaptchaSuccessForJsControl",
                    data: { result: !0 },
                  });
              }
            });
        }
      };
    var De = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ge = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Ue = function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      Ve = (function () {
        function e(e) {
          var n,
            r,
            a,
            o = this;
          ((this.isSendFailedRecResult = !1),
          (this.isResolving = !1),
          (this.verifyTimes = 0),
          (this.stopSudokuObserver = function () {
            var e;
            return null === (e = o.sudokuObserver) || undefined === e
              ? undefined
              : e.disconnect();
          }),
          (this.stopSudokuProcessing = function () {
            return (o.isResolving = !1);
          }),
          (this.startSudokuObserver = function () {
            var e,
              t = document.body;
            o.sudokuObserver || o.getSudokuObserver(),
              null === (e = o.sudokuObserver) ||
                undefined === e ||
                e.observe(t, { childList: !0, subtree: !0, attributes: !0 });
          }),
          (this.getSudokuObserver = function () {
            o.sudokuObserver = new MutationObserver(function (e) {
              var t = (function (e) {
                var t,
                  n,
                  r = e.filter(function (e) {
                    return "childList" === e.type;
                  }),
                  a = (function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      l,
                      u,
                      s,
                      c,
                      d,
                      f,
                      m = e.filter(function (e) {
                        return "challenge-view" === e.target.className;
                      }),
                      h = m.find(function (e) {
                        var t, n;
                        return (
                          "task-grid" ===
                          (null ===
                            (n =
                              null ===
                                (t = null == e ? undefined : e.addedNodes) ||
                              undefined === t
                                ? undefined
                                : t[0]) || undefined === n
                            ? undefined
                            : n.className)
                        );
                      });
                    if (h) return "sudokuChange";
                    var v = e.filter(function (e) {
                        return "task-answers" === e.target.className;
                      }),
                      p = v.length;
                    return "challenge-answer" ===
                      (null ===
                        (r =
                          null ===
                            (n =
                              null === (t = null == v ? undefined : v[p - 1]) ||
                              undefined === t
                                ? undefined
                                : t.addedNodes) || undefined === n
                            ? undefined
                            : n[0]) || undefined === r
                        ? undefined
                        : r.className)
                      ? "oneForThreeChange"
                      : "challenge-answer" ===
                        (null ===
                          (i =
                            null ===
                              (o =
                                null ===
                                  (a = null == v ? undefined : v[p - 1]) ||
                                undefined === a
                                  ? undefined
                                  : a.removedNodes) || undefined === o
                              ? undefined
                              : o[0]) || undefined === i
                          ? undefined
                          : i.className)
                      ? "oneForThreeClose"
                      : "task-grid" ===
                          (null ===
                            (s =
                              null ===
                                (u =
                                  null === (l = null == m ? undefined : m[0]) ||
                                  undefined === l
                                    ? undefined
                                    : l.removedNodes) || undefined === u
                                ? undefined
                                : u[0]) || undefined === s
                            ? undefined
                            : s.className) ||
                        "task-grid" ===
                          (null ===
                            (f =
                              null ===
                                (d =
                                  null === (c = null == m ? undefined : m[1]) ||
                                  undefined === c
                                    ? undefined
                                    : c.removedNodes) || undefined === d
                                ? undefined
                                : d[0]) || undefined === f
                            ? undefined
                            : f.className)
                      ? "sudokuClose"
                      : undefined;
                  })(r);
                if (a) return a;
                var o = e.filter(function (e) {
                  var t;
                  return (
                    "CANVAS" ===
                    (null === (t = e.target) || undefined === t
                      ? undefined
                      : t.tagName)
                  );
                });
                if (2 === o.length) {
                  var i = o[0],
                    l = o[1];
                  if (
                    "CANVAS" ===
                      (null === (t = i.target) || undefined === t
                        ? undefined
                        : t.tagName) &&
                    "width" === (null == i ? undefined : i.attributeName) &&
                    "CANVAS" ===
                      (null === (n = l.target) || undefined === n
                        ? undefined
                        : n.tagName) &&
                    "height" === (null == l ? undefined : l.attributeName)
                  )
                    return "canvasChange";
                }
                var u = r.filter(function (e) {
                  var t, n, r;
                  return (
                    "challenge-container" ===
                      (null === (t = null == e ? undefined : e.target) ||
                      undefined === t
                        ? undefined
                        : t.className) &&
                    "challenge" ===
                      (null ===
                        (r =
                          null === (n = e.removedNodes) || undefined === n
                            ? undefined
                            : n[0]) || undefined === r
                        ? undefined
                        : r.className)
                  );
                });
                return u.length ? "challengeClose" : "unknown";
              })(e);
              switch (
                ("unknown" !== t &&
                  (he("节点变化", t),
                  (o.isResolving = !1),
                  (o.resolvingType = "")),
                t)
              ) {
                case "sudokuChange":
                  setTimeout(o.doChallenge, 20);
                  break;
                case "oneForThreeChange":
                case "canvasChange":
                  setTimeout(o.debounceDoChallenge, 20);
                  break;
                case "oneForThreeClose":
                case "sudokuClose":
                case "challengeClose":
                  je({ type: "queryIsHcaptchaSuccess" });
              }
            });
          }),
          (this.stoppable = function (e, t) {
            return (
              undefined === t && (t = !1),
              function (n) {
                return new Promise(function (r) {
                  return De(o, undefined, undefined, function () {
                    var a,
                      o,
                      i = this;
                    return Ge(this, function (l) {
                      switch (l.label) {
                        case 0:
                          return (
                            (a = setInterval(function () {
                              i.isResolving ||
                                (clearInterval(a),
                                he("Abort!!!!!!", "", {
                                  titleColor: "black",
                                  contentColor: "black",
                                }),
                                r({ isSuccess: !1, isNeedRefresh: t }));
                            }, 10)),
                            [4, e(n)]
                          );
                        case 1:
                          return (o = l.sent()), clearInterval(a), r(o), [2];
                      }
                    });
                  });
                });
              }
            );
          }),
          (this.doChallenge = function () {
            return De(o, undefined, undefined, function () {
              var e,
                n,
                r,
                a,
                o,
                i,
                l,
                u,
                s,
                c = this;
              return Ge(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (
                      d.trys.push([0, 11, , 12]),
                      [
                        4,
                        ((f = new Promise(function (e) {
                          var t = function (r) {
                            "responseIsHcaptchaChallengeFrameInContent" ===
                              (null == r ? undefined : r.type) &&
                              (e(r.result),
                              clearTimeout(n),
                              chrome.runtime.onMessage.removeListener(t));
                          };
                          chrome.runtime.onMessage.addListener(t);
                          var n = setTimeout(function () {
                            e(!0),
                              clearTimeout(n),
                              chrome.runtime.onMessage.removeListener(t);
                          }, 2e3);
                        })),
                        je({ type: "queryIsHcaptchaChallengeFrameInContent" }),
                        f),
                      ]
                    );
                  case 1:
                    return d.sent()
                      ? this.isResolving
                        ? [3, 9]
                        : (_e(this.config, "working"),
                          (0, t.message)({
                            text: Oe("content_message_2"),
                            color: "green",
                          }),
                          (e = this.config.isOpenEndTimes),
                          (n = Number(
                            null !==
                              (i =
                                null === (o = this.config) || undefined === o
                                  ? undefined
                                  : o.endTimes) && undefined !== i
                              ? i
                              : 99
                          )),
                          e && this.verifyTimes >= n
                            ? ((0, t.message)({
                                text:
                                  null === (l = Oe("content_message_11")) ||
                                  undefined === l
                                    ? undefined
                                    : l.replace(
                                        "xxx",
                                        null === (u = this.config) ||
                                          undefined === u
                                          ? undefined
                                          : u.endTimes
                                      ),
                                color: "red",
                              }),
                              [2])
                            : ((r = setTimeout(function () {
                                (c.isResolving = !1), c.refreshSudoku();
                              }, 3e4)),
                              (this.isResolving = !0),
                              (a = undefined),
                              this.isDragToChallenge()
                                ? (
                                    null === (s = this.config.hcaptchaConfig) ||
                                    undefined === s
                                      ? undefined
                                      : s.isPassDragChallenge
                                  )
                                  ? [4, (0, t.delay)(2e3)]
                                  : [3, 3]
                                : [3, 6]))
                      : [2];
                  case 2:
                    return d.sent(), [2, this.refreshSudoku()];
                  case 3:
                    return (
                      (this.resolvingType = "dragTo"),
                      [
                        4,
                        this.stoppable(this.resolveDragCanvas)({
                          isSuccess: !0,
                        }),
                      ]
                    );
                  case 4:
                    (a = d.sent()), (this.resolvingType = ""), (d.label = 5);
                  case 5:
                    return [3, 8];
                  case 6:
                    return [4, this.resolveSudoku_Canvas_OneForThree()];
                  case 7:
                    (a = d.sent()), (d.label = 8);
                  case 8:
                    return (
                      (this.isResolving = !1),
                      this.verifyTimes++,
                      console.log("processResult", a),
                      clearTimeout(r),
                      (null == a ? undefined : a.isNeedRefresh) &&
                        (he("refresh", "refresh", {
                          titleColor: "black",
                          contentColor: "black",
                        }),
                        this.refreshSudoku()),
                      _e(this.config, "done"),
                      [3, 10]
                    );
                  case 9:
                    he("存在重复操作", "存在重复操作", {
                      titleColor: "red",
                      contentColor: "red",
                    }),
                      (d.label = 10);
                  case 10:
                    return [3, 12];
                  case 11:
                    return (
                      d.sent(),
                      (this.isResolving = !1),
                      this.refreshSudoku(),
                      [3, 12]
                    );
                  case 12:
                    return [2];
                }
                var f;
              });
            });
          }),
          (this.resolveSudoku_Canvas_OneForThree = function () {
            return De(o, undefined, undefined, function () {
              var e,
                n,
                r,
                a,
                o = this;
              return Ge(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (e = function (e) {
                        var n = e.isSuccess,
                          r = e.isOneForThree,
                          a = e.isTouchNose,
                          i = e.isNeedRefresh;
                        return De(o, undefined, undefined, function () {
                          var e, o, l, u, s, c, d, f, m, h, v;
                          return Ge(this, function (p) {
                            switch (p.label) {
                              case 0:
                                return (
                                  he("process", "getQueryData", {
                                    titleColor: "red",
                                    contentColor: "green",
                                  }),
                                  n
                                    ? [4, (0, t.delay)(20)]
                                    : [2, { isSuccess: !1, isNeedRefresh: i }]
                                );
                              case 1:
                                return (
                                  p.sent(),
                                  r
                                    ? ((e = Array.from(
                                        document.querySelectorAll(
                                          ".answer-example .image-wrapper .image"
                                        )
                                      )),
                                      (l = Array.from(
                                        document.querySelectorAll(
                                          ".task-image .image-wrapper .image"
                                        )
                                      )),
                                      (e = Ue(Ue([], l, !0), e, !0)),
                                      [3, 5])
                                    : [3, 2]
                                );
                              case 2:
                                return a ? [4, (0, t.delay)(1e3)] : [3, 4];
                              case 3:
                                return (
                                  p.sent(),
                                  (e = [
                                    document.getElementsByTagName("canvas")[0],
                                  ]),
                                  (o = Array.from(
                                    document.querySelectorAll(
                                      ".bounding-box-example .example-wrapper .example-image .image"
                                    )
                                  )),
                                  [3, 5]
                                );
                              case 4:
                                (e = Array.from(
                                  document.querySelectorAll(
                                    ".task-image .wrapper .image"
                                  )
                                )),
                                  (o = Array.from(
                                    document.querySelectorAll(
                                      "div.challenge-header > div.challenge-prompt div.examples div.image > div.image"
                                    )
                                  )),
                                  (p.label = 5);
                              case 5:
                                return (
                                  (u = e.map(function (e) {
                                    return "CANVAS" === e.tagName
                                      ? de(e, 5)
                                      : fe(e, 3);
                                  })),
                                  [4, Promise.all(u)]
                                );
                              case 6:
                                return (s = p.sent()).length &&
                                  (null == s ? undefined : s[0])
                                  ? (a &&
                                      console.log(
                                        "touch canvas base64 length:".concat(
                                          null ===
                                            (f =
                                              null == s ? undefined : s[0]) ||
                                            undefined === f
                                            ? undefined
                                            : f.length
                                        )
                                      ),
                                    (c =
                                      null !==
                                        (m =
                                          null == o
                                            ? undefined
                                            : o.map(function (e) {
                                                return me(e, 1);
                                              })) && undefined !== m
                                        ? m
                                        : []),
                                    [4, Promise.all(c)])
                                  : ((0, t.message)({
                                      text: "get canvas image failed",
                                      color: "red",
                                    }),
                                    [2, { isSuccess: !1, isNeedRefresh: !0 }]);
                              case 7:
                                return (
                                  (d = p.sent().filter(function (e) {
                                    return !!e;
                                  })),
                                  (null !==
                                    (h = null == d ? undefined : d.length) &&
                                  undefined !== h
                                    ? h
                                    : 0) !==
                                  (null !==
                                    (v = null == o ? undefined : o.length) &&
                                  undefined !== v
                                    ? v
                                    : 0)
                                    ? [2, { isSuccess: !1, isNeedRefresh: !0 }]
                                    : [
                                        2,
                                        {
                                          isSuccess: !0,
                                          base64List: s,
                                          imageList: e,
                                          isOneForThree: r,
                                          isTouchNose: a,
                                          anchors: d,
                                        },
                                      ]
                                );
                            }
                          });
                        });
                      }),
                      (n = function (e) {
                        var n = e.isSuccess,
                          r = e.base64List,
                          a = e.imageList,
                          i = e.isOneForThree,
                          l = e.isTouchNose,
                          u = e.anchors,
                          s = e.isNeedRefresh;
                        return De(o, undefined, undefined, function () {
                          var e, o, c, d, f, m, h, v, p, g, y, b, k, w, x, _, S;
                          return Ge(this, function (j) {
                            switch (j.label) {
                              case 0:
                                if (
                                  (he("process", "getResponse", {
                                    titleColor: "red",
                                    contentColor: "green",
                                  }),
                                  !n)
                                )
                                  return [
                                    2,
                                    { isSuccess: !1, isNeedRefresh: s },
                                  ];
                                (0, t.message)({
                                  text: Oe("content_message_5"),
                                  color: "green",
                                }),
                                  (e = document.querySelector(".prompt-text")
                                    ? null ===
                                        (p =
                                          document.querySelector(
                                            ".prompt-text"
                                          )) || undefined === p
                                      ? undefined
                                      : p.innerText
                                    : ""),
                                  (o = {
                                    clientKey:
                                      null === (g = this.config) ||
                                      undefined === g
                                        ? undefined
                                        : g.clientKey,
                                    task: {
                                      type: "HCaptchaClassification",
                                      queries: r,
                                      question: e,
                                      anchors: u,
                                    },
                                    callurl: (0, t.getParentUrl)(),
                                  }),
                                  (j.label = 1);
                              case 1:
                                return (
                                  j.trys.push([1, 3, , 4]),
                                  (c =
                                    null === (y = this.config) ||
                                    undefined === y
                                      ? undefined
                                      : y.network),
                                  (d = c.hcaptchaVerifyFailDelay),
                                  (f = undefined === d ? 1e3 : d),
                                  (m = c.hcaptchaVerifyTry),
                                  (h = undefined === m ? 1 : m),
                                  l && (f = 1e4),
                                  [4, this.createTask(o, f, h)]
                                );
                              case 2:
                                return 0 === (v = j.sent()).errorId
                                  ? (i &&
                                      (v.solution.objects =
                                        null ===
                                          (k =
                                            null ===
                                              (b =
                                                null == v
                                                  ? undefined
                                                  : v.solution) ||
                                            undefined === b
                                              ? undefined
                                              : b.labels) || undefined === k
                                          ? undefined
                                          : k.map(function (e, t, n) {
                                              var r;
                                              if (0 === t) return !1;
                                              n[0];
                                              return (
                                                (null == e
                                                  ? undefined
                                                  : e[0]) ===
                                                (null ===
                                                  (r =
                                                    null == n
                                                      ? undefined
                                                      : n[0]) || undefined === r
                                                  ? undefined
                                                  : r[0])
                                              );
                                            })),
                                    [
                                      2,
                                      {
                                        isSuccess: !0,
                                        verifyResponse: v,
                                        imageList: a,
                                        isOneForThree: i,
                                        isTouchNose: l,
                                      },
                                    ])
                                  : ((0, t.message)({
                                      text:
                                        null == v
                                          ? undefined
                                          : v.errorDescription,
                                      color: "green",
                                    }),
                                    (0, t.notneedcontinue)(v.errorCode)
                                      ? ((null == v
                                          ? undefined
                                          : v.errorDescription) &&
                                          (0, t.message)({
                                            text:
                                              null == v
                                                ? undefined
                                                : v.errorDescription,
                                            color: "red",
                                          }),
                                        [
                                          2,
                                          { isSuccess: !1, isNeedRefresh: !1 },
                                        ])
                                      : [
                                          2,
                                          {
                                            isSuccess: !1,
                                            isNeedRefresh:
                                              (null ===
                                                (x =
                                                  null === (w = this.config) ||
                                                  undefined === w
                                                    ? undefined
                                                    : w.hcaptchaConfig) ||
                                              undefined === x
                                                ? undefined
                                                : x.isAutoRefresh) && !0,
                                          },
                                        ]);
                              case 3:
                                return (
                                  j.sent(),
                                  (0, t.message)({
                                    text: Oe("content_message_9"),
                                    color: "red",
                                  }),
                                  [
                                    2,
                                    {
                                      isSuccess: !1,
                                      isNeedRefresh:
                                        (null ===
                                          (S =
                                            null === (_ = this.config) ||
                                            undefined === _
                                              ? undefined
                                              : _.hcaptchaConfig) ||
                                        undefined === S
                                          ? undefined
                                          : S.isAutoRefresh) && !0,
                                    },
                                  ]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        });
                      }),
                      (r = function (e) {
                        var n = e.isSuccess,
                          r = e.verifyResponse,
                          a = e.imageList,
                          i = e.isOneForThree,
                          l = e.isNeedRefresh,
                          u = e.isTouchNose;
                        return De(o, undefined, undefined, function () {
                          var e,
                            o,
                            s,
                            c,
                            d,
                            f,
                            m,
                            h,
                            v,
                            p,
                            g,
                            y,
                            b,
                            k,
                            w,
                            x,
                            _,
                            S,
                            j,
                            C,
                            T,
                            I,
                            E,
                            R = this;
                          return Ge(this, function (q) {
                            switch (q.label) {
                              case 0:
                                if (
                                  (he("process", "selectImage", {
                                    titleColor: "red",
                                    contentColor: "green",
                                  }),
                                  !n)
                                )
                                  return [
                                    2,
                                    { isSuccess: !1, isNeedRefresh: l },
                                  ];
                                if (!a)
                                  return [
                                    2,
                                    { isSuccess: !1, isNeedRefresh: l },
                                  ];
                                if (
                                  ((0, t.message)({
                                    text: Oe("content_message_6"),
                                    color: "green",
                                  }),
                                  !u)
                                )
                                  return [3, 6];
                                if (
                                  ((e = function (e, n, r) {
                                    return De(
                                      R,
                                      undefined,
                                      undefined,
                                      function () {
                                        var a, o, i, l, u, s;
                                        return Ge(this, function (c) {
                                          switch (c.label) {
                                            case 0:
                                              return (
                                                (a = Number(r.width)),
                                                (o = Number(r.height)),
                                                (i = Number(
                                                  r.style.width.replace(
                                                    "px",
                                                    ""
                                                  )
                                                )),
                                                (l = Number(
                                                  r.style.height.replace(
                                                    "px",
                                                    ""
                                                  )
                                                )),
                                                (u = Number(e) * (i / a) + 10),
                                                (s = Number(n) * (l / o) + 10),
                                                u &&
                                                  s &&
                                                  r.dispatchEvent(
                                                    new MouseEvent(
                                                      "mousedown",
                                                      { clientX: u, clientY: s }
                                                    )
                                                  ),
                                                r.dispatchEvent(
                                                  new TouchEvent("touchstart", {
                                                    bubbles: !0,
                                                    touches: [
                                                      new Touch({
                                                        target: r,
                                                        identifier: Date.now(),
                                                        pageX: u,
                                                        pageY: s,
                                                      }),
                                                    ],
                                                  })
                                                ),
                                                [4, (0, t.delay)(100)]
                                              );
                                            case 1:
                                              return (
                                                c.sent(),
                                                u &&
                                                  s &&
                                                  r.dispatchEvent(
                                                    new MouseEvent("mouseup", {
                                                      clientX: u,
                                                      clientY: s,
                                                    })
                                                  ),
                                                r.dispatchEvent(
                                                  new TouchEvent("touchend", {
                                                    bubbles: !0,
                                                    touches: [
                                                      new Touch({
                                                        target: r,
                                                        identifier: Date.now(),
                                                        pageX: u,
                                                        pageY: s,
                                                      }),
                                                    ],
                                                  })
                                                ),
                                                [2]
                                              );
                                          }
                                        });
                                      }
                                    );
                                  }),
                                  (o =
                                    null !==
                                      (p =
                                        null ===
                                          (v =
                                            null == r
                                              ? undefined
                                              : r.solution) || undefined === v
                                          ? undefined
                                          : v.box) && undefined !== p
                                      ? p
                                      : []),
                                  (s = a[0]),
                                  !(null == o ? undefined : o[0]) ||
                                    !(null == o ? undefined : o[1]))
                                )
                                  return [
                                    2,
                                    {
                                      isSuccess: !1,
                                      isNeedRefresh:
                                        (null ===
                                          (y =
                                            null === (g = this.config) ||
                                            undefined === g
                                              ? undefined
                                              : g.hcaptchaConfig) ||
                                        undefined === y
                                          ? undefined
                                          : y.isAutoRefresh) && !0,
                                    },
                                  ];
                                (f = 0), (q.label = 1);
                              case 1:
                                return f < o.length
                                  ? [4, e(o[f], o[f + 1], s)]
                                  : [3, 5];
                              case 2:
                                return (
                                  q.sent(),
                                  [
                                    4,
                                    (0, t.delay)(
                                      Number(
                                        null !==
                                          (k =
                                            null === (b = this.config) ||
                                            undefined === b
                                              ? undefined
                                              : b.times) && undefined !== k
                                          ? k
                                          : 0
                                      ) + 500
                                    ),
                                  ]
                                );
                              case 3:
                                q.sent(), (q.label = 4);
                              case 4:
                                return (f += 2), [3, 1];
                              case 5:
                                return [
                                  2,
                                  {
                                    isSuccess: !0,
                                    isOneForThree: i,
                                    isNeedRefresh: l,
                                  },
                                ];
                              case 6:
                                (c =
                                  null !==
                                    (x =
                                      null === (w = this.config) ||
                                      undefined === w
                                        ? undefined
                                        : w.times) && undefined !== x
                                    ? x
                                    : 100),
                                  (d =
                                    null !==
                                      (S =
                                        null ===
                                          (_ =
                                            null == r
                                              ? undefined
                                              : r.solution) || undefined === _
                                          ? undefined
                                          : _.objects) && undefined !== S
                                      ? S
                                      : []),
                                  console.log(d),
                                  null ===
                                    (j =
                                      document.querySelector(
                                        ".display-error"
                                      )) ||
                                    undefined === j ||
                                    j.dispatchEvent(
                                      new MouseEvent("mousedown", {
                                        bubbles: !0,
                                      })
                                    ),
                                  (f = 0),
                                  (q.label = 7);
                              case 7:
                                return f < d.length
                                  ? ((m = d[f]),
                                    this.isResolving
                                      ? !m || i
                                        ? [3, 9]
                                        : (null ===
                                            (C =
                                              null == a ? undefined : a[f]) ||
                                            undefined === C ||
                                            C.click(),
                                          [
                                            4,
                                            (0, t.delay)(
                                              (0, t.getClickTime)(Number(c))
                                            ),
                                          ])
                                      : [
                                          2,
                                          { isSuccess: !1, isNeedRefresh: l },
                                        ])
                                  : [3, 11];
                              case 8:
                                q.sent(), (q.label = 9);
                              case 9:
                                i &&
                                  m &&
                                  (h =
                                    null ===
                                      (E =
                                        null ===
                                          (I =
                                            null ===
                                              (T =
                                                null == a ? undefined : a[f]) ||
                                            undefined === T
                                              ? undefined
                                              : T.parentElement) ||
                                        undefined === I
                                          ? undefined
                                          : I.parentElement) || undefined === E
                                      ? undefined
                                      : E.parentElement) &&
                                  h.dispatchEvent(new MouseEvent("mouseup")),
                                  (q.label = 10);
                              case 10:
                                return f++, [3, 7];
                              case 11:
                                return [
                                  2,
                                  {
                                    isSuccess: !0,
                                    isOneForThree: i,
                                    isNeedRefresh: l,
                                  },
                                ];
                            }
                          });
                        });
                      }),
                      (a = function (e) {
                        var n = e.isSuccess,
                          r = e.isOneForThree,
                          a = e.isNeedRefresh;
                        return De(o, undefined, undefined, function () {
                          var e, o, i, l, u;
                          return Ge(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  he("process", "submit", {
                                    titleColor: "red",
                                    contentColor: "green",
                                  }),
                                  n
                                    ? this.config
                                      ? (
                                          null === (l = this.config) ||
                                          undefined === l
                                            ? undefined
                                            : l.isAutoSubmit
                                        )
                                        ? ((e = Number(
                                            (null === (u = this.config) ||
                                            undefined === u
                                              ? undefined
                                              : u.times) || 100
                                          )),
                                          (o = 10 * e >= 500 ? 10 * e : 500),
                                          [4, (0, t.waitFor)(".button-submit")])
                                        : [
                                            2,
                                            { isSuccess: !0, isNeedRefresh: a },
                                          ]
                                      : [2, { isSuccess: !1, isNeedRefresh: a }]
                                    : [2, { isSuccess: !1, isNeedRefresh: a }]
                                );
                              case 1:
                                return s.sent(), [4, (0, t.delay)(o)];
                              case 2:
                                return (
                                  s.sent(),
                                  (0, t.message)({
                                    text: Oe("content_message_7"),
                                    color: "green",
                                  }),
                                  null ==
                                    (i =
                                      document.querySelector(
                                        ".button-submit"
                                      )) || i.click(),
                                  [
                                    2,
                                    {
                                      isSuccess: !0,
                                      isOneForThree: r,
                                      isNeedRefresh: a,
                                    },
                                  ]
                                );
                            }
                          });
                        });
                      }),
                      [
                        4,
                        G(
                          function () {
                            if (
                              (he("process", "neededParamValidation", {
                                titleColor: "red",
                                contentColor: "green",
                              }),
                              !document.querySelector(".prompt-text"))
                            )
                              return { isSuccess: !1 };
                            if (!document.querySelector(".button-submit"))
                              return { isSuccess: !1 };
                            var e =
                              null === document || undefined === document
                                ? undefined
                                : document.querySelector(".display-error");
                            null == e ||
                              e.dispatchEvent(
                                new MouseEvent("mousedown", { bubbles: !0 })
                              );
                            var t = o.isOneForThreeChallenge(),
                              n = o.isTouchNoseChallenge();
                            return n && t
                              ? { isSuccess: !1 }
                              : {
                                  isSuccess: !0,
                                  isOneForThree: t,
                                  isTouchNose: n,
                                };
                          },
                          this.stoppable(e),
                          oe(this.stoppable(n)),
                          oe(this.stoppable(r)),
                          oe(this.stoppable(a))
                        )(),
                      ]
                    );
                  case 1:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (this.resolveDragCanvas = function () {
            return De(o, undefined, undefined, function () {
              var e,
                n,
                r,
                a,
                o,
                i,
                l,
                u,
                s,
                c,
                d,
                f,
                m,
                h,
                v,
                p,
                g,
                y,
                b,
                k,
                w,
                x,
                _,
                S,
                j,
                C,
                T,
                I,
                E,
                R,
                q,
                N,
                O;
              return Ge(this, function (L) {
                switch (L.label) {
                  case 0:
                    (e = 1e3), (L.label = 1);
                  case 1:
                    return (
                      L.trys.push([1, 16, , 17]),
                      (0, t.message)({
                        text: Oe("content_message_2"),
                        color: "green",
                      }),
                      null === (w = document.querySelector(".display-error")) ||
                        undefined === w ||
                        w.dispatchEvent(
                          new MouseEvent("mousedown", { bubbles: !0 })
                        ),
                      [
                        4,
                        (0, t.delay)(
                          Number(
                            null !==
                              (_ =
                                null === (x = this.config) || undefined === x
                                  ? undefined
                                  : x.times) && undefined !== _
                              ? _
                              : 0
                          ) + 2e3
                        ),
                      ]
                    );
                  case 2:
                    return (
                      L.sent(),
                      (n = document.getElementsByTagName("canvas")[0]),
                      (
                        null ==
                        (r = document.querySelector(".prompt-text")
                          ? null ===
                              (S = document.querySelector(".prompt-text")) ||
                            undefined === S
                            ? undefined
                            : S.innerText
                          : "")
                          ? undefined
                          : r.length
                      )
                        ? [
                            4,
                            ue(undefined, undefined, undefined, function () {
                              var e;
                              return se(this, function (t) {
                                return (
                                  (e = new Promise(function (e) {
                                    var t = function (r) {
                                      if (
                                        "responseHcaptchaChallengeIframeRect" ===
                                        (null == r ? undefined : r.type)
                                      ) {
                                        var a = r.resultList.find(function (e) {
                                          return (
                                            (null == e ? undefined : e.src) ===
                                            location.href
                                          );
                                        });
                                        a && e(a.result),
                                          clearTimeout(n),
                                          chrome.runtime.onMessage.removeListener(
                                            t
                                          );
                                      }
                                    };
                                    chrome.runtime.onMessage.addListener(t);
                                    var n = setTimeout(function () {
                                      e(!1),
                                        clearTimeout(n),
                                        chrome.runtime.onMessage.removeListener(
                                          t
                                        );
                                    }, 1e3);
                                  })),
                                  je({
                                    type: "queryHcaptchaChallengeIframeRect",
                                  }),
                                  [2, e]
                                );
                              });
                            }),
                          ]
                        : (console.log("no title"),
                          [2, { isSuccess: !1, isNeedRefresh: !1 }])
                    );
                  case 3:
                    return (a = L.sent()) ? [3, 5] : [4, ve()];
                  case 4:
                    (a = L.sent()), (L.label = 5);
                  case 5:
                    return a
                      ? [4, ge(n, a, { type: "image/jpeg", rate: 0.3 })]
                      : ((0, t.message)({
                          text: "get image failed please check your browser",
                          color: "red",
                        }),
                        [2, { isSuccess: !1, isNeedRefresh: !1 }]);
                  case 6:
                    return (
                      (o = L.sent()),
                      he(
                        "get imageBase64",
                        "length: ".concat(null == o ? undefined : o.length),
                        { titleColor: "red", contentColor: "green" }
                      ),
                      (null == o ? undefined : o.length) && "timeout" !== o
                        ? (null == o ? undefined : o.length) < e
                          ? (console.log("imageBase64", o),
                            (0, t.message)({
                              text: "get image failed please check your browser",
                              color: "red",
                            }),
                            [2, { isSuccess: !1, isNeedRefresh: !1 }])
                          : ((i = {
                              clientKey:
                                null === (j = this.config) || undefined === j
                                  ? undefined
                                  : j.clientKey,
                              task: {
                                type: "HCaptchaClassification",
                                queries: o,
                                question: r,
                              },
                              callurl: (0, t.getParentUrl)(),
                            }),
                            (l =
                              null === (C = this.config) || undefined === C
                                ? undefined
                                : C.network),
                            (u = l.hcaptchaVerifyFailDelay),
                            undefined === u ? 1e3 : u,
                            (s = l.hcaptchaVerifyTry),
                            (c = undefined === s ? 1 : s),
                            this.isResolving && "dragTo" === this.resolvingType
                              ? ((0, t.message)({
                                  text: Oe("content_message_5"),
                                  color: "green",
                                }),
                                [4, this.createTask(i, 1e4, c)])
                              : (he("Abort!!!!!!", "", {
                                  titleColor: "black",
                                  contentColor: "black",
                                }),
                                [2, { isSuccess: !1, isNeedRefresh: !1 }]))
                        : [2, { isSuccess: !1, isNeedRefresh: !0 }]
                    );
                  case 7:
                    return (
                      (d = L.sent()),
                      he(
                        "get response",
                        "errorCode: ".concat(
                          null == d ? undefined : d.errorCode
                        ),
                        { titleColor: "red", contentColor: "green" }
                      ),
                      d.errorCode
                        ? (0, t.notneedcontinue)(d.errorCode)
                          ? ((null == d ? undefined : d.errorDescription) &&
                              (0, t.message)({
                                text:
                                  null == d ? undefined : d.errorDescription,
                                color: "red",
                              }),
                            [2, { isSuccess: !1, isNeedRefresh: !1 }])
                          : [2, { isSuccess: !1, isNeedRefresh: !0 }]
                        : ((f = Number(n.style.width.replace("px", ""))),
                          (m =
                            null !==
                              (I =
                                null ===
                                  (T = null == d ? undefined : d.solution) ||
                                undefined === T
                                  ? undefined
                                  : T.box) && undefined !== I
                              ? I
                              : []),
                          [
                            4,
                            ((A = o),
                            new Promise(function (e, t) {
                              var n = new Image();
                              (n.onload = function () {
                                e({
                                  width: n.naturalWidth,
                                  height: n.naturalHeight,
                                });
                              }),
                                (n.onerror = t),
                                (n.src = A);
                            })),
                          ])
                    );
                  case 8:
                    (h = L.sent()),
                      console.log(m, h),
                      (v = f / (null == h ? undefined : h.width)),
                      (0, t.message)({
                        text: Oe("content_message_6"),
                        color: "green",
                      }),
                      (p = 0),
                      (L.label = 9);
                  case 9:
                    return p < m.length
                      ? ((g = m[p]),
                        (y = { x: g.start[0] * v, y: g.start[1] * v }),
                        (b = { x: g.end[0] * v, y: g.end[1] * v }),
                        [4, (0, t.delay)(600)])
                      : [3, 14];
                  case 10:
                    return L.sent(), [4, pe(n, y, b)];
                  case 11:
                    return (
                      L.sent(),
                      [
                        4,
                        (0, t.delay)(
                          Number(
                            null !==
                              (R =
                                null === (E = this.config) || undefined === E
                                  ? undefined
                                  : E.times) && undefined !== R
                              ? R
                              : 0
                          ) + 500
                        ),
                      ]
                    );
                  case 12:
                    L.sent(), (L.label = 13);
                  case 13:
                    return p++, [3, 9];
                  case 14:
                    return [4, (0, t.delay)(1e3)];
                  case 15:
                    return (
                      L.sent(),
                      (k = document.querySelector(".button-submit")),
                      "rgb(85, 85, 85)" ===
                        (null === (q = null == k ? undefined : k.style) ||
                        undefined === q
                          ? undefined
                          : q.backgroundColor) &&
                        je({
                          type: "queryIsHcaptchaSuccessForReport",
                          data: { result: !1 },
                        }),
                      null === (N = document.querySelector(".display-error")) ||
                        undefined === N ||
                        N.dispatchEvent(
                          new MouseEvent("mousedown", { bubbles: !0 })
                        ),
                      (null === (O = this.config) || undefined === O
                        ? undefined
                        : O.isAutoSubmit) &&
                        (null == k || k.click()),
                      [2, { isSuccess: !0 }]
                    );
                  case 16:
                    return L.sent(), [2, { isSuccess: !1, isNeedRefresh: !0 }];
                  case 17:
                    return [2];
                }
                var A;
              });
            });
          }),
          (this.debounceDoChallenge =
            ((n = this.doChallenge),
            undefined === (r = 200) && (r = 300),
            function () {
              for (var e = this, t = [], o = 0; o < arguments.length; o++)
                t[o] = arguments[o];
              clearTimeout(a),
                (a = setTimeout(function () {
                  return n.apply(e, t);
                }, r));
            })),
          (this.refreshSudoku = function () {
            var e,
              t = document.querySelector(".button-submit");
            if (t) null == t || t.click();
            else {
              var n =
                null ===
                  (e = document.getElementsByClassName("refresh button")) ||
                undefined === e
                  ? undefined
                  : e[0];
              n && (null == n || n.click());
            }
          }),
          (this.config = e),
          He(location.href)) &&
            (e.hcaptcha && this.startSudokuObserver(),
            setInterval(function () {
              var e,
                t,
                n =
                  null === document || undefined === document
                    ? undefined
                    : document.querySelector(".display-error");
              "1" !==
                (null === (e = null == n ? undefined : n.style) ||
                undefined === e
                  ? undefined
                  : e.opacity) || o.isSendFailedRecResult
                ? "0" ===
                    (null === (t = null == n ? undefined : n.style) ||
                    undefined === t
                      ? undefined
                      : t.opacity) && (o.isSendFailedRecResult = !1)
                : (je({
                    type: "queryIsHcaptchaSuccessForReport",
                    data: { result: !1 },
                  }),
                  (o.isSendFailedRecResult = !0));
            }, 200));
        }
        return (
          (e.prototype.isOneForThreeChallenge = function () {
            var e = document.querySelector(
                ".challenge-view .challenge-prompt .prompt-text"
              ),
              t = document.querySelector(
                ".challenge-view .task-wrapper .task-image"
              ),
              n = document.querySelector(
                ".challenge-view .task-wrapper .task-answers"
              );
            return !!(e && n && t);
          }),
          (e.prototype.isTouchNoseChallenge = function () {
            var e,
              t = document.querySelector(
                ".challenge-view .challenge-prompt .prompt-text"
              ),
              n = document.querySelector(
                ".bounding-box-example .example-wrapper"
              ),
              r =
                null === (e = document.getElementsByTagName("canvas")) ||
                undefined === e
                  ? undefined
                  : e[0];
            return !!(t && n && r);
          }),
          (e.prototype.isDragToChallenge = function () {
            var e,
              t = document.querySelector(
                ".challenge-view .challenge-prompt .prompt-text"
              ),
              n = document.querySelector(
                ".bounding-box-example .example-wrapper"
              ),
              r =
                null === (e = document.getElementsByTagName("canvas")) ||
                undefined === e
                  ? undefined
                  : e[0];
            return !(!t || n || !r);
          }),
          (e.prototype.createTask = function (e, n, r) {
            return De(this, undefined, undefined, function () {
              var a, o, i;
              return Ge(this, function (l) {
                switch (l.label) {
                  case 0:
                    if (!this.config) return [2];
                    (o = 0), (l.label = 1);
                  case 1:
                    return o < 3
                      ? [
                          4,
                          (0, t.post)(
                            new URL("createTask", this.config.host).href,
                            e,
                            n,
                            r
                          ),
                        ]
                      : [3, 5];
                  case 2:
                    return (
                      (a = l.sent()),
                      (i = null == a ? undefined : a.taskId) &&
                        je({
                          type: "queryInsertHcaptchaResolvedTaskId",
                          data: { taskId: i },
                        }),
                      ["ERROR_SERVICE_UNAVALIABLE"].includes(
                        null == a ? undefined : a.errorCode
                      )
                        ? [4, (0, t.delay)(n)]
                        : [2, a]
                    );
                  case 3:
                    l.sent(), (l.label = 4);
                  case 4:
                    return o++, [3, 1];
                  case 5:
                    return [2, a];
                }
              });
            });
          }),
          e
        );
      })(),
      He = function (e) {
        return (
          /hcaptcha\S*\.com(.*?)frame=challenge/.test(e) ||
          /paycomonline\.net(.*?)hcaptcha(.*?)frame=challenge/.test(e) ||
          /hcaptcha\S*frame=challenge/.test(e)
        );
      },
      We = /hcaptcha\S*\.com(.*?)frame=checkbox/.test(location.href),
      ze = function (e) {
        var t = this;
        e &&
          ((this.config = e),
          He(location.href) && (this.sudokuResolver = new Ve(e)),
          We && (this.checkBoxResolver = new Be(e)),
          He(location.href) &&
            window.addEventListener("message", function (e) {
              var n,
                r,
                a,
                o,
                i = e.data,
                l = i.crx,
                u = i.data,
                s = i.type;
              if ("yesCaptcha" === l && "jsControl" === s && u) {
                var c = u.captchaType,
                  d = u.target,
                  f = u.action;
                if ("hcaptcha" === c && "sudoku" === d)
                  switch (f) {
                    case "closeObserve":
                      return void (
                        null === (n = t.sudokuResolver) ||
                        undefined === n ||
                        n.stopSudokuObserver()
                      );
                    case "startObserve":
                      return void (
                        null === (r = t.sudokuResolver) ||
                        undefined === r ||
                        r.startSudokuObserver()
                      );
                    case "start":
                      return void (
                        null === (a = t.sudokuResolver) ||
                        undefined === a ||
                        a.doChallenge()
                      );
                    case "stop":
                      return void (
                        null === (o = t.sudokuResolver) ||
                        undefined === o ||
                        o.stopSudokuProcessing()
                      );
                  }
              }
            }),
          We &&
            window.addEventListener("message", function (e) {
              var n,
                r,
                a,
                o = e.data,
                i = o.crx,
                l = o.data;
              if ("yesCaptcha" === i && l) {
                var u = l.captchaType,
                  s = l.target,
                  c = l.action;
                if ("hcaptcha" === u && "checkbox" === s)
                  switch (c) {
                    case "closeObserve":
                      return void (
                        null === (n = t.checkBoxResolver) ||
                        undefined === n ||
                        n.stopCheckBoxObserver()
                      );
                    case "startObserve":
                      return void (
                        null === (r = t.checkBoxResolver) ||
                        undefined === r ||
                        r.startCheckBoxObserver()
                      );
                    case "start":
                      return void (
                        null === (a = t.checkBoxResolver) ||
                        undefined === a ||
                        a.resolveCheckBox()
                      );
                  }
              }
            }));
      };
    function Ke(e) {
      var t = document.createElement("script");
      t.setAttribute("type", "text/javascript"),
        (t.src = chrome.runtime.getURL(e)),
        document.head.appendChild(t);
    }
    var Je = (function () {
        function e(e) {
          (this.shadowBody = undefined),
            e &&
              ((this.config = e),
              location.href.match(
                "challenges.cloudflare.com/cdn-cgi/challenge-platform/"
              ) && (console.log("match cloudflare"), this.mountCheckboxEvent()),
              (this.shadowBody =
                null === chrome || undefined === chrome
                  ? undefined
                  : chrome.dom.openOrClosedShadowRoot(document.body)));
        }
        return (
          (e.prototype.mountCheckboxEvent = function () {
            var e = this;
            setInterval(function () {
              var t,
                n = document.getElementById("success");
              if (
                !(
                  "visible" ===
                  (null === (t = null == n ? undefined : n.style) ||
                  undefined === t
                    ? undefined
                    : t.visibility)
                )
              ) {
                var r = e.shadowBody.querySelectorAll(
                  "#content > div > div > label"
                );
                console.log(r),
                  r.forEach(function (e) {
                    null == e || e.click();
                  });
              }
            }, 2e3);
          }),
          e
        );
      })(),
      Xe = function (e) {
        return fetch(e)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            return new Promise(function (t, n) {
              var r = new FileReader();
              (r.onloadend = function () {
                var e = r.result;
                return e && ("string" != typeof e || /data:image/.test(e))
                  ? t(r.result)
                  : n();
              }),
                (r.onerror = n),
                r.readAsDataURL(e);
            });
          });
      },
      Ye = function (e) {
        return (
          !!e &&
          !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        );
      },
      Ze = function (e) {
        return new Promise(function (t) {
          e || t(!1);
          var n = setInterval(function () {
            Ye(e) && (t(!0), clearInterval(n));
          }, 500);
          setTimeout(function () {
            clearInterval(n), t(!1);
          }, 6e5);
        });
      },
      $e = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = 0; n < e.length; n++) {
          var r = document.querySelector(e[n]);
          if (r) return r;
        }
      },
      Qe = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      et = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      tt = (function () {
        function e(e) {
          var n = this;
          (this.isResolvingSudokuGame = !1),
            (this.isResolvingMatchGame = !1),
            (this.resolvedTaskIdList = []),
            (this.sudokuGamestart = function () {
              return Qe(n, undefined, undefined, function () {
                var e,
                  n,
                  r,
                  a,
                  o,
                  i = this;
                return et(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        l.trys.push([0, 2, , 3]),
                        console.log(
                          "sudokuGamestart",
                          "this.isResolvingSudokuGame",
                          this.isResolvingSudokuGame
                        ),
                        this.isResolvingSudokuGame
                          ? [2]
                          : ((this.isResolvingSudokuGame = !0),
                            (e = function () {
                              return Qe(i, undefined, undefined, function () {
                                var e, t, n, r, a, o, i, l, u, s, c, d, f, m;
                                return et(this, function (h) {
                                  switch (h.label) {
                                    case 0:
                                      return (
                                        (e = (function () {
                                          for (
                                            var e = [], t = 0;
                                            t < arguments.length;
                                            t++
                                          )
                                            e[t] = arguments[t];
                                          for (var n = 0; n < e.length; n++) {
                                            var r = document.querySelectorAll(
                                              e[n]
                                            );
                                            if (r.length) return r;
                                          }
                                        })(
                                          "#game_children_challenge a",
                                          ".tile.box",
                                          "input[type*='image']",
                                          "[id^='image']",
                                          "input[type='image']"
                                        )),
                                        (null == e ? undefined : e.length)
                                          ? [
                                              4,
                                              Ze(null == e ? undefined : e[0]),
                                            ]
                                          : [2, { isSuccess: !1 }]
                                      );
                                    case 1:
                                      return h.sent()
                                        ? (t =
                                            null ===
                                              (i = document.querySelector(
                                                "#game_challengeItem_image"
                                              )) || undefined === i
                                              ? undefined
                                              : i.src)
                                          ? [3, 3]
                                          : ((r =
                                              (null ===
                                                (u =
                                                  null ===
                                                    (l =
                                                      null == e
                                                        ? undefined
                                                        : e[0]) ||
                                                  undefined === l
                                                    ? undefined
                                                    : l.style) ||
                                              undefined === u
                                                ? undefined
                                                : u.backgroundImage) || ""),
                                            (n =
                                              null !==
                                                (d =
                                                  null ===
                                                    (c =
                                                      null ===
                                                        (s =
                                                          r.match(
                                                            /\"(.*)\"/
                                                          )) || undefined === s
                                                        ? undefined
                                                        : s[0]) ||
                                                  undefined === c
                                                    ? undefined
                                                    : c.replaceAll('"', "")) &&
                                              undefined !== d
                                                ? d
                                                : "")
                                              ? [4, Xe(n)]
                                              : [3, 3])
                                        : [2, { isSuccess: !1 }];
                                    case 2:
                                      (t = h.sent()), (h.label = 3);
                                    case 3:
                                      return t
                                        ? [3, 5]
                                        : (r =
                                            null ===
                                              (f =
                                                document.querySelector(
                                                  "#challenge-image"
                                                )) || undefined === f
                                              ? undefined
                                              : f.src)
                                        ? [4, Xe(r)]
                                        : [3, 5];
                                    case 4:
                                      (t = h.sent()), (h.label = 5);
                                    case 5:
                                      return (a = $e(
                                        "#game_children_text h2",
                                        ".box.challenge-instructions-container h2",
                                        "#game-header"
                                      ))
                                        ? ((o =
                                            null !==
                                              (m =
                                                null == a
                                                  ? undefined
                                                  : a.innerHTML) &&
                                            undefined !== m
                                              ? m
                                              : ""),
                                          e.length && t && o
                                            ? [
                                                2,
                                                {
                                                  isSuccess: !0,
                                                  imageStr: t,
                                                  clickElList: e,
                                                  titleStr: o,
                                                },
                                              ]
                                            : [2, { isSuccess: !1 }])
                                        : [2, { isSuccess: !1 }];
                                  }
                                });
                              });
                            }),
                            (n = function (e) {
                              return Qe(i, undefined, undefined, function () {
                                var n, r, a, o, i, l;
                                return et(this, function (u) {
                                  switch (u.label) {
                                    case 0:
                                      return (
                                        (n = e.isSuccess),
                                        (r = e.imageStr),
                                        (a = e.titleStr),
                                        n
                                          ? ((0, t.message)({
                                              text: Oe("content_message_5"),
                                              color: "green",
                                            }),
                                            (o = {
                                              clientKey:
                                                null === (l = this.config) ||
                                                undefined === l
                                                  ? undefined
                                                  : l.clientKey,
                                              callurl: (0, t.getParentUrl)(),
                                              task: {
                                                type: "FunCaptchaClassification",
                                                image: r,
                                                question: a,
                                              },
                                            }),
                                            [4, this.createTask(o)])
                                          : [2, e]
                                      );
                                    case 1:
                                      return 0 === (i = u.sent()).errorId
                                        ? [
                                            2,
                                            Object.assign({}, e, {
                                              response: i,
                                            }),
                                          ]
                                        : (i.errorDescription &&
                                            (0, t.message)({
                                              text: i.errorDescription,
                                              color: "red",
                                            }),
                                          [
                                            2,
                                            Object.assign(
                                              {},
                                              { isSuccess: !1 }
                                            ),
                                          ]);
                                  }
                                });
                              });
                            }),
                            (r = function (e) {
                              return Qe(i, undefined, undefined, function () {
                                var n, r, a, o, i, l, u, s, c, d, f, m;
                                return et(this, function (h) {
                                  switch (h.label) {
                                    case 0:
                                      if (
                                        ((n = e.response),
                                        (r = e.isSuccess),
                                        (a = e.clickElList),
                                        (o = this.config.times),
                                        !r)
                                      )
                                        return [2, e];
                                      (0, t.message)({
                                        text: Oe("content_message_6"),
                                        color: "green",
                                      }),
                                        (i =
                                          null !==
                                            (d =
                                              null ===
                                                (c =
                                                  null == n
                                                    ? undefined
                                                    : n.solution) ||
                                              undefined === c
                                                ? undefined
                                                : c.objects) && undefined !== d
                                            ? d
                                            : []).length ||
                                          ((l =
                                            null !==
                                              (m =
                                                null ===
                                                  (f =
                                                    null == n
                                                      ? undefined
                                                      : n.solution) ||
                                                undefined === f
                                                  ? undefined
                                                  : f.confidences) &&
                                            undefined !== m
                                              ? m
                                              : []),
                                          (u = l.indexOf(
                                            Math.max.apply(Math, l)
                                          )),
                                          i.push(u > 0 ? u : 0)),
                                        (s = 0),
                                        (h.label = 1);
                                    case 1:
                                      return s < i.length
                                        ? (null == a ? undefined : a[i[s]])
                                          ? [
                                              4,
                                              (0, t.delay)(
                                                (0, t.getClickTime)(Number(o))
                                              ),
                                            ]
                                          : [3, 3]
                                        : [3, 4];
                                    case 2:
                                      h.sent(),
                                        null == a || a[i[s]].click(),
                                        null == a ||
                                          a[i[s]].dispatchEvent(
                                            new TouchEvent("click", {
                                              bubbles: !0,
                                            })
                                          ),
                                        (h.label = 3);
                                    case 3:
                                      return s++, [3, 1];
                                    case 4:
                                      return [2, e];
                                  }
                                });
                              });
                            }),
                            (a = function (e) {
                              return Qe(i, undefined, undefined, function () {
                                var t, n;
                                return et(this, function (r) {
                                  return (
                                    (t = e.response),
                                    e.isSuccess
                                      ? ((n = null == t ? undefined : t.taskId),
                                        this.resolvedTaskIdList.push(n),
                                        console.log(this.resolvedTaskIdList),
                                        [2, e])
                                      : [2, e]
                                  );
                                });
                              });
                            }),
                            console.log("start"),
                            (0, t.message)({
                              text: Oe("content_message_3"),
                              color: "green",
                            }),
                            [
                              4,
                              G(
                                e,
                                oe(n),
                                oe(r),
                                oe(a),
                                oe(function (e) {
                                  var n = e.clickElList,
                                    r = e.imageStr,
                                    a = e.titleStr;
                                  if (
                                    !(
                                      e.isSuccess ||
                                      ((null == n ? undefined : n.length) &&
                                        r &&
                                        a)
                                    )
                                  )
                                    return i.matchGameStart();
                                  (0,
                                  t.message)({ text: Oe("content_message_4"), color: "green" });
                                })
                              )(),
                            ])
                      );
                    case 1:
                      return (
                        l.sent(), (this.isResolvingSudokuGame = !1), [3, 3]
                      );
                    case 2:
                      return (
                        (o = l.sent()),
                        console.log("runtime error", o),
                        (this.isResolvingSudokuGame = !1),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (this.matchGameStart = function () {
              return Qe(n, undefined, undefined, function () {
                var e,
                  n,
                  r,
                  a,
                  o,
                  i,
                  l,
                  u,
                  s,
                  c,
                  d,
                  f,
                  m,
                  h,
                  v,
                  p,
                  g,
                  y,
                  b,
                  k,
                  w,
                  x,
                  _,
                  S,
                  j,
                  C,
                  T,
                  I,
                  E,
                  R,
                  q,
                  N,
                  O,
                  L,
                  A,
                  P = this;
                return et(this, function (M) {
                  switch (M.label) {
                    case 0:
                      return (
                        M.trys.push([0, 10, , 11]),
                        console.log(
                          "matchGameStart",
                          "this.isResolvingMatchGame",
                          this.isResolvingMatchGame
                        ),
                        this.isResolvingMatchGame
                          ? [2]
                          : ((this.isResolvingMatchGame = !0),
                            (0, t.message)({
                              text: Oe("content_message_3"),
                              color: "green",
                            }),
                            (e = this.config.times),
                            (n = $e(
                              ".challenge-container .answer-frame .box img",
                              "#game_answerFrame_children_challengeImage"
                            )) &&
                            (r =
                              (null == n ? undefined : n.src) ||
                              (null === (k = null == n ? undefined : n.style) ||
                              undefined === k
                                ? undefined
                                : k.backgroundImage) ||
                              (null ===
                                (w =
                                  null === window || undefined === window
                                    ? undefined
                                    : window.getComputedStyle(n)) ||
                              undefined === w
                                ? undefined
                                : w.backgroundImage) ||
                              "") &&
                            "none" !== r
                              ? ((a =
                                  null !==
                                    (S =
                                      null ===
                                        (_ =
                                          null === (x = r.match(/\"(.*)\"/)) ||
                                          undefined === x
                                            ? undefined
                                            : x[0]) || undefined === _
                                        ? undefined
                                        : _.replaceAll('"', "")) &&
                                  undefined !== S
                                    ? S
                                    : ""),
                                [4, Xe(a)])
                              : [2])
                      );
                    case 1:
                      return (
                        (o = M.sent()),
                        /data:image/.test(o)
                          ? (i = $e(
                              'h2 span[role="text"]',
                              "#game_children_text h1"
                            ))
                            ? ((l =
                                null !==
                                  (j = null == i ? undefined : i.innerText) &&
                                undefined !== j
                                  ? j
                                  : ""),
                              (0, t.message)({
                                text: Oe("content_message_5"),
                                color: "green",
                              }),
                              (u = {
                                clientKey:
                                  null === (C = this.config) || undefined === C
                                    ? undefined
                                    : C.clientKey,
                                callurl: (0, t.getParentUrl)(),
                                task: {
                                  type: "FunCaptchaClassification",
                                  image: o,
                                  question: l,
                                },
                              }),
                              [4, this.createTask(u)])
                            : [2]
                          : [2]
                      );
                    case 2:
                      if (0 != (s = M.sent()).errorId)
                        return (
                          s.errorDescription &&
                            (0, t.message)({
                              text: s.errorDescription,
                              color: "red",
                            }),
                          (c =
                            null !==
                              (I =
                                null === (T = this.config.funcaptchaConfig) ||
                                undefined === T
                                  ? undefined
                                  : T.actionAfterOneRecFail) && undefined !== I
                              ? I
                              : "nothing"),
                          (d =
                            null !==
                              (R =
                                null === (E = this.config.funcaptchaConfig) ||
                                undefined === E
                                  ? undefined
                                  : E.actionDelay) && undefined !== R
                              ? R
                              : 3e3),
                          (f = setTimeout(function () {
                            "submit" !== c
                              ? "restart" !== c
                                ? clearTimeout(f)
                                : P.restart()
                              : P.submit();
                          }, d)),
                          [2]
                        );
                      if (
                        ((0, t.message)({
                          text: Oe("content_message_6"),
                          color: "green",
                        }),
                        (m =
                          null ===
                            (N =
                              null ===
                                (q = null == s ? undefined : s.solution) ||
                              undefined === q
                                ? undefined
                                : q.objects) || undefined === N
                            ? undefined
                            : N[0]),
                        re(m))
                      )
                        return [2];
                      (h = $e(
                        'a[class*="right-arrow"]',
                        "#game_answerFrame_children_arrowRightContainer"
                      )),
                        (v = 0),
                        (M.label = 3);
                    case 3:
                      return v < m
                        ? (null == h || h.click(),
                          [4, (0, t.delay)((0, t.getClickTime)(Number(e)))])
                        : [3, 6];
                    case 4:
                      M.sent(), (M.label = 5);
                    case 5:
                      return v++, [3, 3];
                    case 6:
                      return (
                        (p = null == s ? undefined : s.taskId),
                        this.resolvedTaskIdList.push(p),
                        console.log(this.resolvedTaskIdList),
                        (0, t.message)({
                          text: Oe("content_message_4"),
                          color: "green",
                        }),
                        [4, (0, t.delay)(e)]
                      );
                    case 7:
                      return (
                        M.sent(),
                        (g = $e(
                          'button[class*="button"]',
                          "#game_children_button"
                        )),
                        (
                          null === (O = this.config) || undefined === O
                            ? undefined
                            : O.isAutoSubmit
                        )
                          ? ((y =
                              null !==
                                (A =
                                  null === (L = this.config) || undefined === L
                                    ? undefined
                                    : L.autoSubmitDelayTime) && undefined !== A
                                ? A
                                : 0),
                            [4, (0, t.delay)(y)])
                          : [3, 9]
                      );
                    case 8:
                      M.sent(), null == g || g.click(), (M.label = 9);
                    case 9:
                      return (
                        (0, t.message)({ text: "", color: "green" }),
                        (this.isResolvingMatchGame = !1),
                        [3, 11]
                      );
                    case 10:
                      return (
                        (b = M.sent()),
                        (this.isResolvingMatchGame = !1),
                        console.log("runtime error", b),
                        this.restart(),
                        [3, 11]
                      );
                    case 11:
                      return [2];
                  }
                });
              });
            }),
            (this.config = e);
        }
        return (
          (e.prototype.resetResolvedTaskIdList = function () {
            this.resolvedTaskIdList = [];
          }),
          (e.prototype.sendTasksResult = function (e) {
            return Qe(this, undefined, undefined, function () {
              var n, r;
              return et(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (n = { id: this.resolvedTaskIdList, isSuccess: e }),
                      [
                        4,
                        (0, t.post)(
                          new URL("report", this.config.host).href,
                          n
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (r = a.sent()), console.log("sendTasksResult", r), [2, r]
                    );
                }
              });
            });
          }),
          (e.prototype.createTask = function (e) {
            var n;
            return Qe(this, undefined, undefined, function () {
              var r, a, o, i, l, u, s;
              return et(this, function (c) {
                switch (c.label) {
                  case 0:
                    (r =
                      null === (n = this.config) || undefined === n
                        ? undefined
                        : n.network),
                      (a = r.funcaptchaVerifyFailDelay),
                      (o = undefined === a ? 100 : a),
                      (i = r.funcaptchaVerifyTry),
                      (l = undefined === i ? 2 : i),
                      (s = 0),
                      (c.label = 1);
                  case 1:
                    return s < 3
                      ? [
                          4,
                          (0, t.post)(
                            new URL("createTask", this.config.host).href,
                            e,
                            o,
                            l
                          ),
                        ]
                      : [3, 5];
                  case 2:
                    return (
                      (u = c.sent()).errorDescription &&
                        (0, t.message)({
                          text: u.errorDescription,
                          color: "red",
                        }),
                      ["ERROR_SERVICE_UNAVALIABLE"].includes(
                        null == u ? undefined : u.errorCode
                      )
                        ? [4, (0, t.delay)(o)]
                        : [2, u]
                    );
                  case 3:
                    c.sent(), (c.label = 4);
                  case 4:
                    return s++, [3, 1];
                  case 5:
                    return [2, u];
                }
              });
            });
          }),
          (e.prototype.prePageClick = function () {
            var e = $e(
              "#home_children_button",
              '[data-theme="home.verifyButton"]',
              "#verifyButton",
              ".home.box.screen > button"
            );
            null == e || e.click();
          }),
          (e.prototype.refresh = function () {
            console.log("ACTION:refresh!!!"), window.location.reload();
          }),
          (e.prototype.tryAgain = function () {
            console.log("ACTION:tryAgain!!!");
            var e = $e(
              ".match-game-fail button",
              "#wrong_children_button",
              "#wrongTimeout_children_button",
              ".tile-game-fail.box.screen > button",
              ".match-game-fail.box.screen > button"
            );
            null == e || e.click();
          }),
          (e.prototype.restart = function () {
            console.log("ACTION:restart!!!");
            var e = $e(
              ".navigation.box .restart-button",
              ".meta_buttons .reloadBtn",
              ".restart-button.icon-button"
            );
            null == e || e.click();
          }),
          (e.prototype.submit = function () {
            console.log("ACTION:submit");
            var e = document.querySelector(".match-game.box.screen button");
            e && e.click();
          }),
          e
        );
      })(),
      nt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      rt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      };
    var at = function (e, t) {
        var n;
        return (
          undefined === t && (t = 1e3),
          function () {
            for (var r = [], a = 0; a < arguments.length; a++)
              r[a] = arguments[a];
            clearTimeout(n),
              (n = setTimeout(function () {
                return e();
              }, t));
          }
        );
      },
      ot = (function () {
        function e(e) {
          var n,
            r = this;
          (this.isInferIframe = !1),
            (this.isTileGameLiteMode = /tile-game-lite-mode/.test(
              location.href
            )),
            (this.getObserver = function () {
              if (r.isInferIframe) {
                var e = at(r.challengeResolver.matchGameStart),
                  n = at(r.challengeResolver.sudokuGamestart);
                at(r.challengeResolver.prePageClick);
                r.observer = new MutationObserver(function (a) {
                  var o = (function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      l,
                      u,
                      s,
                      c = e.filter(function (e) {
                        var t, n, r;
                        return (
                          "app" ===
                            (null === (t = e.target) || undefined === t
                              ? undefined
                              : t.id) &&
                          "game" ===
                            (null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.id)
                        );
                      }),
                      d = e.filter(function (e) {
                        return "game" === e.target.id;
                      }),
                      f = e.filter(function (e) {
                        var t, n;
                        return (
                          /tile box/.test(
                            null === (t = e.target) || undefined === t
                              ? undefined
                              : t.className
                          ) &&
                          /box/.test(
                            null ===
                              (n = null == e ? undefined : e.removedNodes[0]) ||
                              undefined === n
                              ? undefined
                              : n.className
                          )
                        );
                      }),
                      m = e.find(function (e) {
                        var t, n;
                        return (
                          "home_children_button" ===
                            (null ===
                              (t = null == e ? undefined : e.addedNodes[0]) ||
                            undefined === t
                              ? undefined
                              : t.id) &&
                          "home" ===
                            (null === (n = null == e ? undefined : e.target) ||
                            undefined === n
                              ? undefined
                              : n.id)
                        );
                      }),
                      h = e.find(function (e) {
                        var t, n, r;
                        return (
                          /home box screen/.test(
                            null ===
                              (n =
                                null ===
                                  (t = null == e ? undefined : e.addedNodes) ||
                                undefined === t
                                  ? undefined
                                  : t[0]) || undefined === n
                              ? undefined
                              : n.className
                          ) &&
                          /box container/.test(
                            null === (r = null == e ? undefined : e.target) ||
                              undefined === r
                              ? undefined
                              : r.className
                          )
                        );
                      }),
                      v = e.find(function (e) {
                        var t, n;
                        return (
                          "home_children_buttonContainer" ===
                            (null ===
                              (t = null == e ? undefined : e.addedNodes[0]) ||
                            undefined === t
                              ? undefined
                              : t.id) &&
                          "home" ===
                            (null === (n = null == e ? undefined : e.target) ||
                            undefined === n
                              ? undefined
                              : n.id)
                        );
                      }),
                      p = e
                        .filter(function (e) {
                          return /(right|left)-arrow/.test(e.target.className);
                        })
                        .filter(function (e) {
                          return e.addedNodes.length;
                        }),
                      g = e.filter(function (e) {
                        var t, n, r;
                        return (
                          "app" ===
                            (null === (t = e.target) || undefined === t
                              ? undefined
                              : t.id) &&
                          "victory" ===
                            (null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.id)
                        );
                      }),
                      y = e.filter(function (e) {
                        var t, n, r;
                        return (
                          /box container/.test(
                            null === (t = e.target) || undefined === t
                              ? undefined
                              : t.className
                          ) &&
                          /victory box screen/.test(
                            null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.className
                          )
                        );
                      }),
                      b = e.filter(function (e) {
                        var t, n, r;
                        return (
                          /box container/.test(
                            null === (t = e.target) || undefined === t
                              ? undefined
                              : t.className
                          ) &&
                          /match-game-fail box screen/.test(
                            null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.className
                          )
                        );
                      }),
                      k = e.filter(function (e) {
                        var t, n, r;
                        return (
                          "wrong" ===
                            (null === (t = e.target) || undefined === t
                              ? undefined
                              : t.id) &&
                          "wrong_children_buttonContainer" ===
                            (null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.id)
                        );
                      }),
                      w = e.filter(function (e) {
                        var t, n, r;
                        return (
                          /box container/.test(
                            null === (t = e.target) || undefined === t
                              ? undefined
                              : t.className
                          ) &&
                          /alert box/.test(
                            null ===
                              (r =
                                null === (n = e.addedNodes) || undefined === n
                                  ? undefined
                                  : n[0]) || undefined === r
                              ? undefined
                              : r.className
                          )
                        );
                      });
                    if (null == c ? undefined : c.length)
                      return "sudokuGameChange";
                    if (
                      1 === d.length &&
                      0 ===
                        (null === (t = null == d ? undefined : d[0]) ||
                        undefined === t
                          ? undefined
                          : t.addedNodes.length)
                    )
                      return "sudokuGameChange";
                    if (6 === f.length) return "sudokuGameChange";
                    if (2 === p.length) return "matchGameChange";
                    if (m || h || v) return "prePage";
                    if (g.length || y.length) return "victory";
                    if (2 === e.length) {
                      var x = e[0],
                        _ = e[1];
                      if (
                        "app" ===
                          (null === (n = x.target) || undefined === n
                            ? undefined
                            : n.id) &&
                        "game" ===
                          (null ===
                            (a =
                              null === (r = x.removedNodes) || undefined === r
                                ? undefined
                                : r[0]) || undefined === a
                            ? undefined
                            : a.id) &&
                        "app" ===
                          (null === (o = _.target) || undefined === o
                            ? undefined
                            : o.id) &&
                        "checking" ===
                          (null ===
                            (l =
                              null === (i = _.addedNodes) || undefined === i
                                ? undefined
                                : i[0]) || undefined === l
                            ? undefined
                            : l.id)
                      )
                        return "victory";
                    }
                    if (b.length || k.length || w.length) return "fail";
                    if (3 === e.length) {
                      (x = e[0]), (_ = e[1]);
                      var S = e[2];
                      if (
                        /error box screen/.test(
                          null ===
                            (s =
                              null === (u = S.addedNodes) || undefined === u
                                ? undefined
                                : u[0]) || undefined === s
                            ? undefined
                            : s.className
                        )
                      )
                        return "captchaCollapse";
                    }
                    return "unknown";
                  })(a);
                  switch ((console.log(o), o)) {
                    case "sudokuGameChange":
                      _e(r.config, "working", "funcaptcha"), n();
                      break;
                    case "prePage":
                    case "unknown":
                      break;
                    case "matchGameChange":
                      _e(r.config, "working", "funcaptcha"), e();
                      break;
                    case "victory":
                      _e(r.config, "funcaptchaSuccess", "funcaptcha"),
                        nt(r, undefined, undefined, function () {
                          var e,
                            t,
                            n,
                            r,
                            a,
                            o,
                            i,
                            l,
                            u = this;
                          return rt(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  (e =
                                    null !==
                                      (o =
                                        null ===
                                          (a =
                                            null === (r = this.config) ||
                                            undefined === r
                                              ? undefined
                                              : r.funcaptchaConfig) ||
                                        undefined === a
                                          ? undefined
                                          : a.actionAfterRecSuccess) &&
                                    undefined !== o
                                      ? o
                                      : "nothing"),
                                  (t =
                                    null !==
                                      (l =
                                        null ===
                                          (i = this.config.funcaptchaConfig) ||
                                        undefined === i
                                          ? undefined
                                          : i.actionDelay) && undefined !== l
                                      ? l
                                      : 3e3),
                                  [
                                    4,
                                    this.challengeResolver.sendTasksResult(!0),
                                  ]
                                );
                              case 1:
                                return (
                                  s.sent(),
                                  this.challengeResolver.resetResolvedTaskIdList(),
                                  "refresh" === e
                                    ? ((n = setTimeout(function () {
                                        clearTimeout(n),
                                          u.challengeResolver.refresh();
                                      }, t)),
                                      [2])
                                    : [2]
                                );
                            }
                          });
                        });
                      break;
                    case "fail":
                      _e(r.config, "funcaptchaFail", "funcaptcha"),
                        nt(r, undefined, undefined, function () {
                          var e,
                            t,
                            n,
                            r,
                            a,
                            o,
                            i,
                            l,
                            u = this;
                          return rt(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (
                                  (e =
                                    null !==
                                      (o =
                                        null ===
                                          (a = this.config.funcaptchaConfig) ||
                                        undefined === a
                                          ? undefined
                                          : a.actionAfterRecFail) &&
                                    undefined !== o
                                      ? o
                                      : "nothing"),
                                  (t =
                                    null !==
                                      (l =
                                        null ===
                                          (i = this.config.funcaptchaConfig) ||
                                        undefined === i
                                          ? undefined
                                          : i.actionDelay) && undefined !== l
                                      ? l
                                      : 3e3),
                                  [
                                    4,
                                    this.challengeResolver.sendTasksResult(!1),
                                  ]
                                );
                              case 1:
                                return (
                                  s.sent(),
                                  this.challengeResolver.resetResolvedTaskIdList(),
                                  "tryAgain" === e
                                    ? ((n = setTimeout(function () {
                                        clearTimeout(n),
                                          u.challengeResolver.tryAgain();
                                      }, t)),
                                      [2])
                                    : "restart" === e
                                    ? ((r = setTimeout(function () {
                                        clearTimeout(r),
                                          u.challengeResolver.restart();
                                      }, t)),
                                      [2])
                                    : [2]
                                );
                            }
                          });
                        });
                      break;
                    case "captchaCollapse":
                      nt(r, undefined, undefined, function () {
                        var e;
                        return rt(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return [4, (0, t.delay)(1e3)];
                            case 1:
                              return (
                                n.sent(),
                                null ==
                                  (e = document.querySelector(
                                    ".error.box.screen > button"
                                  )) || e.click(),
                                [2]
                              );
                          }
                        });
                      });
                  }
                });
              }
            }),
            (this.resolveTileGameLiteMode = function () {
              return nt(r, undefined, undefined, function () {
                var e, n;
                return rt(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        (0, t.delay)(
                          Number(
                            null !==
                              (n =
                                null === (e = this.config) || undefined === e
                                  ? undefined
                                  : e.checkBoxClickDelayTime) && undefined !== n
                              ? n
                              : 0
                          )
                        ),
                      ];
                    case 1:
                      return (
                        r.sent(),
                        this.checkForVerifybtn(),
                        [
                          4,
                          Ye(
                            document.querySelector("#game_children_challenge a")
                          ),
                        ]
                      );
                    case 2:
                      return (
                        r.sent(), this.challengeResolver.sudokuGamestart(), [2]
                      );
                  }
                });
              });
            }),
            (this.checkForVerifybtn = function () {
              return nt(r, undefined, undefined, function () {
                var e, n, r, a, o, i;
                return rt(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return (
                        (e = document.querySelector("#home_children_button")),
                        (n = document.querySelector(
                          '[data-theme="home.verifyButton"]'
                        )),
                        (r = document.querySelector("#verifyButton")),
                        (a = document.querySelector(
                          ".home.box.screen > button"
                        )),
                        e || n || r || a
                          ? [
                              4,
                              (0, t.delay)(
                                Number(
                                  null !==
                                    (i =
                                      null === (o = this.config) ||
                                      undefined === o
                                        ? undefined
                                        : o.checkBoxClickDelayTime) &&
                                    undefined !== i
                                    ? i
                                    : 0
                                )
                              ),
                            ]
                          : [3, 2]
                      );
                    case 1:
                      return (
                        l.sent(), this.challengeResolver.prePageClick(), [2]
                      );
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (this.config = e),
            (this.challengeResolver = new tt(e));
          var a = document.getElementsByTagName("iframe");
          Se(e, "funcaptcha"),
            (null === (n = this.config) || undefined === n
              ? undefined
              : n.isAutoClickCheckBox) &&
              setInterval(function () {
                r.checkForVerifybtn();
              }, 500),
            a.length || ((this.isInferIframe = !0), this.startObserve());
        }
        return (
          (e.prototype.startObserve = function () {
            var e,
              t = document.body;
            this.observer || this.getObserver(),
              null === (e = this.observer) ||
                undefined === e ||
                e.observe(t, { childList: !0, subtree: !0 });
          }),
          (e.prototype.stopObserve = function () {
            var e;
            null === (e = this.observer) || undefined === e || e.disconnect();
          }),
          (e.prototype.isRecEnd = function () {
            var e = this.config;
            e.endTimes, e.isOpenEndTimes;
            return !1;
          }),
          e
        );
      })(),
      it = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      lt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      };
    function ut() {
      return it(this, undefined, undefined, function () {
        var e;
        return lt(this, function (t) {
          return (
            (e = new Promise(function (e) {
              var t = function (r) {
                "responseIsMoreThenEndTime" ===
                  (null == r ? undefined : r.type) &&
                  (e(null == r ? undefined : r.result),
                  clearTimeout(n),
                  chrome.runtime.onMessage.removeListener(t));
              };
              chrome.runtime.onMessage.addListener(t);
              var n = setTimeout(function () {
                e(!1),
                  clearTimeout(n),
                  chrome.runtime.onMessage.removeListener(t);
              }, 2e3);
            })),
            je({ type: "queryIsMoreThenEndTime" }),
            [2, e]
          );
        });
      });
    }
    var st = n(351),
      ct = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      dt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      };
    var ft = function (e) {
        return fetch(e)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            return new Promise(function (t, n) {
              var r = new FileReader();
              (r.onloadend = function () {
                var e = r.result;
                t(e ? e.replace("data:image/jpeg;base64,", "") : "");
              }),
                (r.onerror = n),
                r.readAsDataURL(e);
            });
          });
      },
      mt = function (e, t) {
        return ct(undefined, undefined, undefined, function () {
          var n, r, a;
          return dt(this, function (o) {
            switch (o.label) {
              case 0:
                (n = 3), (r = 0), (o.label = 1);
              case 1:
                return r < n
                  ? (console.log("retryTimes", r), [4, ft(e)])
                  : [3, 4];
              case 2:
                if (((a = o.sent()), "game11" === t && a.length > 1500))
                  return (
                    console.log(
                      "get 1x1 image,length: ".concat(
                        null == a ? undefined : a.length
                      )
                    ),
                    [2, a]
                  );
                if (("game33" === t || "game44" === t) && a.length > 1e4)
                  return (
                    console.log(
                      "get nxn image,length: ".concat(
                        null == a ? undefined : a.length
                      )
                    ),
                    [2, a]
                  );
                o.label = 3;
              case 3:
                return r++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      },
      ht = function () {
        return ct(undefined, undefined, undefined, function () {
          return dt(this, function (e) {
            return [
              2,
              new Promise(function (e, t) {
                var n = function (t) {
                  if (
                    "responseIsRecaptchaGameFrameVisible" ===
                    (null == t ? undefined : t.type)
                  ) {
                    var a = null == t ? undefined : t.result,
                      o = a.find(function (e) {
                        return (
                          (null == e ? undefined : e.src) === location.href &&
                          !0 === e.result
                        );
                      });
                    (null == o ? undefined : o.result) &&
                      (clearInterval(r),
                      chrome.runtime.onMessage.removeListener(n),
                      e(a));
                  }
                };
                chrome.runtime.onMessage.addListener(n);
                var r = setInterval(function () {
                  je({ type: "queryIsRecaptchaGameFrameVisible" });
                }, 1e3);
              }),
            ];
          });
        });
      },
      vt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      pt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      gt = (function () {
        function e(e) {
          var n = this;
          (this.game11Num = 0),
            (this.isResolving = !1),
            (this.query = function (e, r) {
              return vt(n, undefined, undefined, function () {
                var n, a, o, i, l, u, s, c;
                return pt(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [4, mt(e, r)];
                    case 1:
                      (n = d.sent()),
                        (a =
                          null !==
                            (s =
                              null === (u = document.querySelector("strong")) ||
                              undefined === u
                                ? undefined
                                : u.innerText.replace(/\s/g, "")) &&
                          undefined !== s
                            ? s
                            : ""),
                        (o = {
                          clientKey: this.config.clientKey,
                          callurl: (0, t.getParentUrl)(),
                          task: {
                            type: "ReCaptchaV2Classification",
                            image: n,
                            question:
                              null !==
                                (c =
                                  null === st.jsonall ||
                                  undefined === st.jsonall
                                    ? undefined
                                    : st.jsonall[a]) && undefined !== c
                                ? c
                                : a,
                          },
                        }),
                        (d.label = 2);
                    case 2:
                      return (
                        d.trys.push([2, 4, , 5]),
                        (0, t.message)({
                          text: Oe("content_message_5"),
                          color: "green",
                        }),
                        [4, this.createTask(o)]
                      );
                    case 3:
                      return (
                        (null == (i = d.sent())
                          ? undefined
                          : i.errorDescription) &&
                          (0, t.message)({
                            text: null == i ? undefined : i.errorDescription,
                            color: "red",
                          }),
                        (l = i.taskId),
                        je({
                          type: "queryInsertRecaptchaResolvedTaskId",
                          data: { taskId: l },
                        }),
                        [3, 5]
                      );
                    case 4:
                      return (
                        d.sent(),
                        (0, t.message)({
                          text: Oe("content_message_9"),
                          color: "red",
                        }),
                        [2]
                      );
                    case 5:
                      return [2, i];
                  }
                });
              });
            }),
            (this.gameStart = function (e) {
              return vt(n, undefined, undefined, function () {
                var n, r, a, o, i, l, u, s, c, d, f, m, h, v;
                return pt(this, function (p) {
                  switch (p.label) {
                    case 0:
                      return (
                        p.trys.push([0, 10, , 11]),
                        this.isResolving
                          ? [2]
                          : ((this.isResolving = !0),
                            _e(this.config, "working"),
                            (this.gameType = e),
                            this.config.clientKey
                              ? ((n = undefined),
                                (n =
                                  "game44" === e
                                    ? (0, t.getClickTime)(
                                        Number(this.config.times) / 2
                                      )
                                    : (0, t.getClickTime)(
                                        Number(this.config.times)
                                      )),
                                this.resetGame11Num(),
                                (r = Array.from(
                                  document.querySelectorAll(
                                    ".rc-image-tile-wrapper img"
                                  )
                                )),
                                [4, Ze(r[0])])
                              : ((this.isResolving = !1), [2]))
                      );
                    case 1:
                      return (
                        p.sent(),
                        (a = r.find(function (e) {
                          return !!(null == e ? undefined : e.src);
                        })),
                        [
                          4,
                          this.query(
                            null !== (s = null == a ? undefined : a.src) &&
                              undefined !== s
                              ? s
                              : "",
                            e
                          ),
                        ]
                      );
                    case 2:
                      if (
                        ((o = p.sent()),
                        !(null === (c = null == o ? undefined : o.solution) ||
                        undefined === c
                          ? undefined
                          : c.objects))
                      )
                        return (this.isResolving = !1), [2];
                      (i =
                        null !==
                          (f =
                            null === (d = null == o ? undefined : o.solution) ||
                            undefined === d
                              ? undefined
                              : d.objects) && undefined !== f
                          ? f
                          : []),
                        (0, t.message)({
                          text: Oe("content_message_6"),
                          color: "green",
                        }),
                        (l = 0),
                        (p.label = 3);
                    case 3:
                      return l < (null == i ? undefined : i.length)
                        ? [4, (0, t.delay)(n)]
                        : [3, 6];
                    case 4:
                      p.sent(),
                        null === (m = null == r ? undefined : r[i[l]]) ||
                          undefined === m ||
                          m.click(),
                        (p.label = 5);
                    case 5:
                      return l++, [3, 3];
                    case 6:
                      return (
                        (0, t.message)({
                          text: Oe("content_message_7"),
                          color: "green",
                        }),
                        [4, (0, t.delay)(n)]
                      );
                    case 7:
                      return (
                        p.sent(),
                        "game33" !== e
                          ? [3, 9]
                          : ((u =
                              null !==
                                (v =
                                  null === (h = this.config.recaptchaConfig) ||
                                  undefined === h
                                    ? undefined
                                    : h.delayFor1X1) && undefined !== v
                                ? v
                                : 3e3),
                            [4, (0, t.delay)(u)])
                      );
                    case 8:
                      if ((p.sent(), "game11" === this.gameType))
                        return (this.isResolving = !1), [2];
                      p.label = 9;
                    case 9:
                      return this.next(), (this.isResolving = !1), [3, 11];
                    case 10:
                      return (
                        p.sent(),
                        console.log("game catch error"),
                        (this.isResolving = !1),
                        this.refresh(),
                        [3, 11]
                      );
                    case 11:
                      return [2];
                  }
                });
              });
            }),
            (this.game11Start = function (e) {
              return vt(n, undefined, undefined, function () {
                var n, r, a, o, i, l, u, s;
                return pt(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        c.trys.push([0, 6, , 7]),
                        (null == e ? undefined : e.src) ? [4, Ze(e)] : [2]
                      );
                    case 1:
                      return (
                        c.sent(),
                        (this.gameType = "game11"),
                        this.increaseGame11Num(),
                        console.log("game11start", this.game11Num),
                        [4, this.query(e.src, "game11")]
                      );
                    case 2:
                      return (
                        (n = c.sent()),
                        (r =
                          null !==
                            (l =
                              null ===
                                (i = null == n ? undefined : n.solution) ||
                              undefined === i
                                ? undefined
                                : i.hasObject) &&
                          undefined !== l &&
                          l),
                        (a = (0, t.getClickTime)(Number(this.config.times))),
                        r ? [4, (0, t.delay)(a)] : [3, 4]
                      );
                    case 3:
                      c.sent(), e.click(), (c.label = 4);
                    case 4:
                      return (
                        this.decreaseGame11Num(),
                        console.log("game11end", this.game11Num),
                        (o =
                          null !==
                            (s =
                              null === (u = this.config.recaptchaConfig) ||
                              undefined === u
                                ? undefined
                                : u.delayFor1X1) && undefined !== s
                            ? s
                            : 3e3),
                        [4, (0, t.delay)(o)]
                      );
                    case 5:
                      return c.sent(), this.checkForGame11ClickNext(), [3, 7];
                    case 6:
                      return (
                        c.sent(),
                        console.log("game11 catch error"),
                        this.refresh(),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (this.checkForGame11ClickNext = function () {
              n.game11Num > 0 ||
                ("game11" === n.gameType &&
                  (console.log("checkForGame11ClickNext", n.game11Num),
                  n.next()));
            }),
            (this.increaseGame11Num = function () {
              n.game11Num = n.game11Num + 1;
            }),
            (this.decreaseGame11Num = function () {
              n.game11Num = n.game11Num - 1;
            }),
            (this.resetGame11Num = function () {
              n.game11Num = 0;
            }),
            (this.refresh = function () {
              var e;
              null === (e = document.querySelector(".rc-button-reload")) ||
                undefined === e ||
                e.click();
            }),
            (this.next = function () {
              return vt(n, undefined, undefined, function () {
                var e, n, r, a;
                return pt(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        console.log("click next start"),
                        this.config.isAutoSubmit
                          ? (null ===
                              (e = document.querySelectorAll(
                                ".rc-imageselect-dynamic-selected"
                              )) || undefined === e
                              ? undefined
                              : e.length) && "game11" === this.gameType
                            ? (console.log("1*1存在未处理"), [2])
                            : [
                                4,
                                (0, t.delay)(
                                  (0, t.getClickTime)(
                                    null === (n = this.config) ||
                                      undefined === n
                                      ? undefined
                                      : n.autoSubmitDelayTime,
                                    null === (r = this.config) ||
                                      undefined === r
                                      ? undefined
                                      : r.autoSubmitDelayFloatRate
                                  )
                                ),
                              ]
                          : [3, 2]
                      );
                    case 1:
                      o.sent(),
                        null ===
                          (a = document.querySelector(
                            "#recaptcha-verify-button"
                          )) ||
                          undefined === a ||
                          a.click(),
                        console.log("click next"),
                        (o.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (this.config = e);
        }
        return (
          (e.prototype.createTask = function (e) {
            var n;
            return vt(this, undefined, undefined, function () {
              var r, a, o, i, l, u, s;
              return pt(this, function (c) {
                switch (c.label) {
                  case 0:
                    (r =
                      null === (n = this.config) || undefined === n
                        ? undefined
                        : n.network),
                      (a = r.recaptchaVerifyFailDelay),
                      (o = undefined === a ? 100 : a),
                      (i = r.recaptchaVerifyTry),
                      (l = undefined === i ? 2 : i),
                      (s = 0),
                      (c.label = 1);
                  case 1:
                    return s < 3
                      ? [
                          4,
                          (0, t.post)(
                            new URL("createTask", this.config.host).href,
                            e,
                            o,
                            l
                          ),
                        ]
                      : [3, 5];
                  case 2:
                    return (
                      (u = c.sent()),
                      ["ERROR_SERVICE_UNAVALIABLE"].includes(
                        null == u ? undefined : u.errorCode
                      )
                        ? [4, (0, t.delay)(o)]
                        : [2, u]
                    );
                  case 3:
                    c.sent(), (c.label = 4);
                  case 4:
                    return s++, [3, 1];
                  case 5:
                    return [2, u];
                }
              });
            });
          }),
          e
        );
      })(),
      yt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      bt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      kt = (function () {
        function e(e) {
          var n,
            r,
            a = this;
          (this.isSendFailedRecResult = !1),
            (this.isNexonPage = !1),
            (this.getObserver = function () {
              a.observer = new MutationObserver(function (e) {
                return yt(a, undefined, undefined, function () {
                  var n, r, a, o, i, l, u, s, c;
                  return bt(this, function (d) {
                    switch (d.label) {
                      case 0:
                        return [4, ut()];
                      case 1:
                        if (d.sent())
                          return (
                            (0, t.message)({
                              text:
                                null === (o = Oe("content_message_11")) ||
                                undefined === o
                                  ? undefined
                                  : o.replace(
                                      "xxx",
                                      null === (i = this.config) ||
                                        undefined === i
                                        ? undefined
                                        : i.endTimes
                                    ),
                              color: "green",
                            }),
                            [2]
                          );
                        switch (
                          ((n = (function (e) {
                            var t = e.filter(function (e) {
                                var t, n;
                                return (
                                  "rc-imageselect-target" ===
                                    (null === (t = e.target) || undefined === t
                                      ? undefined
                                      : t.className) &&
                                  "rc-imageselect-table-33" ===
                                    (null ===
                                      (n =
                                        null == e
                                          ? undefined
                                          : e.addedNodes[0]) || undefined === n
                                      ? undefined
                                      : n.className)
                                );
                              }),
                              n = e.filter(function (e) {
                                var t, n;
                                return (
                                  "rc-imageselect-tile" ===
                                    (null === (t = e.target) || undefined === t
                                      ? undefined
                                      : t.className) &&
                                  "rc-image-tile-target" ===
                                    (null ===
                                      (n =
                                        null == e
                                          ? undefined
                                          : e.addedNodes[0]) || undefined === n
                                      ? undefined
                                      : n.className)
                                );
                              }),
                              r = e.filter(function (e) {
                                var t, n;
                                return (
                                  "rc-imageselect-target" ===
                                    (null === (t = e.target) || undefined === t
                                      ? undefined
                                      : t.className) &&
                                  "rc-imageselect-table-44" ===
                                    (null ===
                                      (n =
                                        null == e
                                          ? undefined
                                          : e.addedNodes[0]) || undefined === n
                                      ? undefined
                                      : n.className)
                                );
                              });
                            if (t.length) return "game33";
                            if (n.length) return "game11";
                            if (r.length) return "game44";
                            if (1 === e.length) {
                              var a = e.filter(function (e) {
                                var t, n, r, a;
                                return (
                                  "rc-imageselect-target" ===
                                    (null === (t = e.target) || undefined === t
                                      ? undefined
                                      : t.className) &&
                                  "rc-imageselect-table-44" ===
                                    (null ===
                                      (n =
                                        null == e
                                          ? undefined
                                          : e.nextSibling) || undefined === n
                                      ? undefined
                                      : n.className) &&
                                  "rc-imageselect-table-44 rc-imageselect-carousel-offscreen-left" ===
                                    (null ===
                                      (a =
                                        null ===
                                          (r =
                                            null == e
                                              ? undefined
                                              : e.removedNodes) ||
                                        undefined === r
                                          ? undefined
                                          : r[0]) || undefined === a
                                      ? undefined
                                      : a.className)
                                );
                              });
                              if (a.length) return "game44";
                            }
                            return "unknown";
                          })(e)),
                          (r = "game11" === n ? e[0].target : undefined),
                          (a =
                            null ===
                              (u =
                                null ===
                                  (l =
                                    null == r ? undefined : r.childNodes[0]) ||
                                undefined === l
                                  ? undefined
                                  : l.childNodes[0]) || undefined === u
                              ? undefined
                              : u.childNodes[0]),
                          console.log(n),
                          n)
                        ) {
                          case "game33":
                            return [3, 2];
                          case "game11":
                            return [3, 5];
                          case "game44":
                            return [3, 6];
                          case "unknown":
                            return [3, 9];
                        }
                        return [3, 10];
                      case 2:
                        return (
                          (this.isSendFailedRecResult = !1),
                          this.isNexonPage ||
                          (null === (s = this.config.recaptchaConfig) ||
                          undefined === s
                            ? undefined
                            : s.isAdaptInvisible)
                            ? [4, ht()]
                            : [3, 4]
                        );
                      case 3:
                        d.sent(), (d.label = 4);
                      case 4:
                        return this.gameResolver.gameStart("game33"), [3, 10];
                      case 5:
                        return (
                          (this.isSendFailedRecResult = !1),
                          this.gameResolver.game11Start(a),
                          [3, 10]
                        );
                      case 6:
                        return (
                          (this.isSendFailedRecResult = !1),
                          this.isNexonPage ||
                          (null === (c = this.config.recaptchaConfig) ||
                          undefined === c
                            ? undefined
                            : c.isAdaptInvisible)
                            ? [4, ht()]
                            : [3, 8]
                        );
                      case 7:
                        d.sent(), (d.label = 8);
                      case 8:
                        return this.gameResolver.gameStart("game44"), [3, 10];
                      case 9:
                        return [3, 10];
                      case 10:
                        return [2];
                    }
                  });
                });
              });
            }),
            (this.config = e),
            (this.gameResolver = new gt(e)),
            window.addEventListener("message", function (e) {
              var t = e.data,
                n = t.crx,
                r = t.data;
              if ("yesCaptcha" === n && r) {
                var o = r.captchaType,
                  i = r.target,
                  l = r.action;
                if ("recaptcha" === o && "sudoku" === i)
                  switch (l) {
                    case "closeObserve":
                      return void a.stopObserve();
                    case "startObserve":
                      return void a.startObserve();
                  }
              }
            }),
            chrome.runtime.onMessage.addListener(function (e) {
              "responseIsRecaptchaInNexonPage" ===
                (null == e ? undefined : e.type) &&
                (null == e ? undefined : e.result) &&
                (a.isNexonPage = !0);
            }),
            (null === (n = this.config.recaptchaConfig) || undefined === n
              ? undefined
              : n.isOpen) &&
              (null === (r = this.config.recaptchaConfig) || undefined === r
                ? undefined
                : r.isUseNewScript) &&
              (this.startObserve(),
              setInterval(function () {
                var t = document.querySelector(
                  ".rc-imageselect-incorrect-response"
                );
                Ye(t) &&
                  !a.isSendFailedRecResult &&
                  (e.allowJsInject &&
                    Ce({
                      config: a.config,
                      type: "isRecaptchaSuccessForJsControl",
                      target: "parent",
                      data: { result: !1 },
                    }),
                  je({
                    type: "queryIsRecaptchaSuccessForReport",
                    data: { result: !1 },
                  }),
                  (a.isSendFailedRecResult = !0));
              }, 500),
              je({ type: "queryIsRecaptchaInNexonPage" }));
        }
        return (
          (e.prototype.startObserve = function () {
            var e,
              t = document.body;
            this.observer || this.getObserver(),
              null === (e = this.observer) ||
                undefined === e ||
                e.observe(t, { childList: !0, subtree: !0 });
          }),
          (e.prototype.stopObserve = function () {
            var e;
            null === (e = this.observer) || undefined === e || e.disconnect();
          }),
          e
        );
      })();
    var wt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      xt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      _t = function () {
        return /\/recaptcha\/(.*?)\/anchor\?/.test(location.href);
      },
      St = function (e) {
        var n,
          r,
          a,
          o = this;
        if (
          ((this.isSendSuccessMessage = !1),
          (this.isCheckBoxResolving = !1),
          (this.isSendWorkStatusSuccess = !1),
          (this.stopCheckBoxObserver = function () {
            var e = o.checkBoxTimer;
            (o.checkBoxTimer = undefined), clearInterval(e);
          }),
          (this.startCheckBoxObserver = function () {
            o.checkBoxTimer ||
              (o.checkBoxTimer = setInterval(o.resolveCheckBox, 2e3));
          }),
          (this.startWorkStateFlag = function () {
            o.checkBoxTimer ||
              (o.WorkStateFlagTimer = setInterval(o.resolveWorkStateFlag, 2e3));
          }),
          (this.resolveCheckBox = function () {
            return wt(o, undefined, undefined, function () {
              var e, n, r, a, o;
              return xt(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, ut()];
                  case 1:
                    return (e = i.sent()), [4, this.isCheckBoxVisible()];
                  case 2:
                    return i.sent()
                      ? e
                        ? ((0, t.message)({
                            text:
                              null === (r = Oe("content_message_11")) ||
                              undefined === r
                                ? undefined
                                : r.replace(
                                    "xxx",
                                    null === (a = this.config) ||
                                      undefined === a
                                      ? undefined
                                      : a.endTimes
                                  ),
                            color: "green",
                          }),
                          [2])
                        : ("false" ===
                          (null ==
                          (n = document.querySelector("#recaptcha-anchor"))
                            ? undefined
                            : n.getAttribute("aria-checked"))
                            ? ((this.isCheckBoxResolving = !0),
                              n.click(),
                              (0, t.message)({
                                text: Oe("content_message_3"),
                                color: "green",
                              }),
                              (this.isSendSuccessMessage = !1))
                            : "true" ===
                                (null == n
                                  ? undefined
                                  : n.getAttribute("aria-checked")) &&
                              (this.isCheckBoxResolving &&
                                je({ type: "queryEndTimePlus" }),
                              (this.isCheckBoxResolving = !1),
                              (0, t.message)({
                                text: Oe("content_message_4"),
                                color: "green",
                              }),
                              this.isSendSuccessMessage ||
                                ((null === (o = this.config) || undefined === o
                                  ? undefined
                                  : o.allowJsInject) &&
                                  Ce({
                                    config: this.config,
                                    type: "isRecaptchaSuccessForJsControl",
                                    target: "parent",
                                    data: { result: !0 },
                                  }),
                                je({
                                  type: "queryIsRecaptchaSuccessForReport",
                                  data: { result: !0 },
                                }),
                                (this.isSendSuccessMessage = !0))),
                          [2])
                      : [2];
                }
              });
            });
          }),
          (this.resolveWorkStateFlag = function () {
            return wt(o, undefined, undefined, function () {
              var e;
              return xt(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.isCheckBoxVisible()];
                  case 1:
                    return t.sent()
                      ? ("false" ===
                        (null ==
                        (e = document.querySelector("#recaptcha-anchor"))
                          ? undefined
                          : e.getAttribute("aria-checked"))
                          ? this.isSendWorkStatusSuccess &&
                            (_e(this.config, "unknown"),
                            (this.isSendWorkStatusSuccess = !1))
                          : "true" ===
                              (null == e
                                ? undefined
                                : e.getAttribute("aria-checked")) &&
                            (_e(this.config, "recaptchaSuccess"),
                            (this.isSendWorkStatusSuccess = !0)),
                        [2])
                      : [2];
                }
              });
            });
          }),
          (this.isCheckBoxVisible = function () {
            return new Promise(function (e) {
              var t = setTimeout(function () {
                  e(!0), clearTimeout(t);
                }, 2e3),
                n = function (r) {
                  var a, o;
                  if (
                    "responseIsRecaptchaCheckboxVisible" ===
                    (null == r ? undefined : r.type)
                  ) {
                    var i =
                      null !== (a = null == r ? undefined : r.result) &&
                      undefined !== a
                        ? a
                        : [];
                    if (!0 === i)
                      return (
                        e(!0),
                        clearTimeout(t),
                        void chrome.runtime.onMessage.removeListener(n)
                      );
                    var l =
                      null ===
                        (o =
                          null == i
                            ? undefined
                            : i.find(function (e) {
                                return e.src === location.href;
                              })) || undefined === o
                        ? undefined
                        : o.result;
                    e(l),
                      clearTimeout(t),
                      chrome.runtime.onMessage.removeListener(n);
                  }
                };
              chrome.runtime.onMessage.addListener(n),
                je({ type: "queryIsRecaptchaCheckboxVisible" });
            });
          }),
          (this.config = e),
          Se(e),
          window.addEventListener("message", function (e) {
            var t = e.data,
              n = t.crx,
              r = t.data;
            if ("jsControl" === t.type && "yesCaptcha" === n && r) {
              var a = r.captchaType,
                i = r.target,
                l = r.action;
              if ("recaptcha" === a && "checkbox" === i)
                switch (l) {
                  case "closeObserve":
                    return void o.stopCheckBoxObserver();
                  case "startObserve":
                    return void o.startCheckBoxObserver();
                  case "start":
                    return void o.resolveCheckBox();
                }
            }
          }),
          this.startWorkStateFlag(),
          (null === (n = this.config.recaptchaConfig) || undefined === n
            ? undefined
            : n.isOpen) &&
            (null === (r = this.config.recaptchaConfig) || undefined === r
              ? undefined
              : r.isUseNewScript) &&
            _t())
        ) {
          var i =
              null === (a = this.config.recaptchaConfig) || undefined === a
                ? undefined
                : a.isOpen,
            l = e.isAutoClickCheckBox,
            u = e.checkBoxClickDelayTime;
          l &&
            i &&
            setTimeout(function () {
              o.startCheckBoxObserver();
            }, Number(u));
        }
      },
      jt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ct = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Tt = function (e, t) {
        return (
          e.findIndex(function (e) {
            return /^\/.+\/$/.test(e)
              ? new RegExp(e.slice(1, -1)).test(t)
              : t.indexOf(e) > -1;
          }) > -1
        );
      },
      It = function (e) {
        return jt(undefined, undefined, undefined, function () {
          var t, n;
          return Ct(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  (function () {
                    return new Promise(function (e) {
                      chrome.runtime.sendMessage(
                        { action: "queryCurrentUrl" },
                        function (t) {
                          e(t);
                        }
                      );
                    });
                  })(),
                ];
              case 1:
                switch (
                  ((t = r.sent()),
                  (n = (function (e, t) {
                    var n,
                      r,
                      a,
                      o,
                      i,
                      l,
                      u =
                        null === (n = e.blackListConfig) || undefined === n
                          ? undefined
                          : n.isOpen;
                    return (
                      null === (r = e.whiteListConfig) || undefined === r
                        ? undefined
                        : r.isOpen
                    )
                      ? Tt(
                          null !==
                            (o =
                              null === (a = e.whiteListConfig) ||
                              undefined === a
                                ? undefined
                                : a.urlList) && undefined !== o
                            ? o
                            : [],
                          t
                        )
                        ? "inWhiteList"
                        : "notInWhiteList"
                      : u
                      ? Tt(
                          null !==
                            (l =
                              null === (i = e.blackListConfig) ||
                              undefined === i
                                ? undefined
                                : i.urlList) && undefined !== l
                            ? l
                            : [],
                          t
                        )
                        ? "inBlackList"
                        : "notInBlackList"
                      : "normal";
                  })(e, t)),
                  n)
                ) {
                  case "inWhiteList":
                  case "notInBlackList":
                  case "normal":
                    return [2, !0];
                  case "notInWhiteList":
                  case "inBlackList":
                    return [2, !1];
                }
                return [2];
            }
          });
        });
      },
      Et = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Rt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      qt = [
        "不正确",
        "إجابة غير صحيحة. يرجى المحاولة مرة أخرى.",
        "Nesprávně",
        "Forkert.",
        "Falsch",
        "Incorrect",
        "Incorrecto",
        "Incorrect",
        "Sbagliato",
        "正しくありません",
        "Onjuist",
        "Niepoprawna odpowiedź",
        "Incorreto",
        "Fel svar",
        "Yanlış",
      ],
      Nt = function (e, t, n) {
        return (
          undefined === n &&
            (n = { titleColor: "#00cc00", contentColor: "#1475B2" }),
          console.log(
            "%c".concat(e, "%c").concat(t),
            "background: ".concat(
              n.titleColor,
              "; color: #fff; border-radius: 3px 0 0 3px;padding:2px 5px"
            ),
            "background: ".concat(
              n.contentColor,
              "; color: #fff; border-radius: 0 3px 3px 0;padding:2px 5px"
            )
          )
        );
      },
      Ot = function (e) {
        var t;
        t = setInterval(function () {
          var e = document.querySelector("#amzn-captcha-verify-button");
          e && (null == e || e.click(), clearInterval(t));
        }, 1e3);
      },
      Lt = function (e, n) {
        return Et(undefined, undefined, undefined, function () {
          var r, a, o, i, l, u, s;
          return Rt(this, function (c) {
            switch (c.label) {
              case 0:
                (r = null == n ? undefined : n.network),
                  (a = r.recaptchaVerifyFailDelay),
                  (o = undefined === a ? 100 : a),
                  (i = r.recaptchaVerifyTry),
                  (l = undefined === i ? 2 : i),
                  (s = 0),
                  (c.label = 1);
              case 1:
                return s < 3
                  ? [
                      4,
                      (0, t.post)(new URL("createTask", n.host).href, e, o, l),
                    ]
                  : [3, 5];
              case 2:
                return (
                  (u = c.sent()),
                  ["ERROR_SERVICE_UNAVALIABLE"].includes(
                    null == u ? undefined : u.errorCode
                  )
                    ? [4, (0, t.delay)(o)]
                    : [2, u]
                );
              case 3:
                c.sent(), (c.label = 4);
              case 4:
                return s++, [3, 1];
              case 5:
                return [2, u];
            }
          });
        });
      },
      At = (function () {
        function e(e) {
          (this.resolvedTaskIdList = []), (this.config = e);
        }
        return (
          (e.prototype.resetResolvedTaskIdList = function () {
            this.resolvedTaskIdList = [];
          }),
          (e.prototype.sendTasksResult = function (e) {
            return Et(this, undefined, undefined, function () {
              var n, r;
              return Rt(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      console.log(
                        "sendTasksResult",
                        this.resolvedTaskIdList,
                        "isSuccess: ".concat(e)
                      ),
                      (n = { id: this.resolvedTaskIdList, isSuccess: e }),
                      [
                        4,
                        (0, t.post)(
                          new URL("report", this.config.host).href,
                          n
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (r = a.sent()),
                      console.log("sendTasksResult", r),
                      this.resetResolvedTaskIdList(),
                      [2, r]
                    );
                }
              });
            });
          }),
          (e.prototype.insertTaskId = function (e) {
            this.resolvedTaskIdList.push(e);
          }),
          e
        );
      })(),
      Pt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Mt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Ft = (function () {
        function e(e) {
          var t = this;
          (this.regTime = 0),
            (this.isExceed = !1),
            (this.getObserver = function () {
              t.observer = new MutationObserver(function (e) {
                return Pt(t, undefined, undefined, function () {
                  var t;
                  return Mt(this, function (n) {
                    switch (
                      ((t = (function (e) {
                        var t, n, r, a, o, i, l, u, s, c, d, f, m, h, v;
                        if (1 === e.length) {
                          if (
                            "P" ===
                              (null ===
                                (t = (p = null == e ? undefined : e[0])
                                  .target) || undefined === t
                                ? undefined
                                : t.tagName) &&
                            "alert" ===
                              (null === (n = p.target.parentNode) ||
                              undefined === n
                                ? undefined
                                : n.getAttribute("role")) &&
                            "#text" ===
                              (null ===
                                (a =
                                  null === (r = p.addedNodes) || undefined === r
                                    ? undefined
                                    : r[0]) || undefined === a
                                ? undefined
                                : a.nodeName)
                          )
                            return "incorrectNotice";
                          if (
                            "captcha-container" === p.target.id &&
                            "root" ===
                              (null ===
                                (i =
                                  null === (o = p.addedNodes) || undefined === o
                                    ? undefined
                                    : o[0]) || undefined === i
                                ? undefined
                                : i.id)
                          )
                            return document.querySelector("canvas")
                              ? "challengeChange"
                              : "prepageChange";
                        }
                        if (3 === e.length) {
                          var p = null == e ? undefined : e[0],
                            g = null == e ? undefined : e[1],
                            y = null == e ? undefined : e[2];
                          if (
                            ("root" ===
                              (null === (l = p.target) || undefined === l
                                ? undefined
                                : l.id)) &
                              ("root" ===
                                (null === (u = g.target) || undefined === u
                                  ? undefined
                                  : u.id)) &&
                            "root" ===
                              (null === (s = y.target) || undefined === s
                                ? undefined
                                : s.id) &&
                            "amzn-captcha-modal" ===
                              (null === (c = y.addedNodes) || undefined === c
                                ? undefined
                                : c[0].className)
                          )
                            return "challengeChange";
                        }
                        if (4 === e.length) {
                          (p = null == e ? undefined : e[0]),
                            (g = null == e ? undefined : e[1]),
                            (y = null == e ? undefined : e[2]);
                          var b = null == e ? undefined : e[3];
                          if (
                            "amzn-captcha-modal" ===
                              (null === (d = p.target.parentNode) ||
                              undefined === d
                                ? undefined
                                : d.parentNode.className) &&
                            "amzn-help-container" === b.target.parentNode.id
                          )
                            return "challengeChange";
                          if (
                            "root" ===
                              (null === (f = b.target) || undefined === f
                                ? undefined
                                : f.id) &&
                            b.addedNodes.length &&
                            "root" ===
                              (null === (m = y.target) || undefined === m
                                ? undefined
                                : m.id) &&
                            "amzn-captcha-modal" ===
                              (null ===
                                (v =
                                  null === (h = y.removedNodes) ||
                                  undefined === h
                                    ? undefined
                                    : h[0]) || undefined === v
                                ? undefined
                                : v.className)
                          )
                            return "success";
                        }
                      })(e)),
                      t && Nt("节点变化", t),
                      t)
                    ) {
                      case "challengeChange":
                        return this.doChallenge(), [2];
                      case "prepageChange":
                        return (
                          this.config.isAutoClickCheckBox && Ot(this.config),
                          [2]
                        );
                      case "success":
                        return (
                          _e(this.config, "awsSuccess", "awsCaptcha"),
                          this.resultSender.sendTasksResult(!0),
                          [2]
                        );
                      case "incorrectNotice":
                        return (
                          _e(this.config, "awsFailed", "awsCaptcha"),
                          this.reportFailed(),
                          [2]
                        );
                    }
                    return [2];
                  });
                });
              });
            }),
            (this.config = e),
            (this.resultSender = new At(e)),
            this.startObserve(),
            setTimeout(function () {
              Se(e);
            }, 0);
        }
        return (
          (e.prototype.startObserve = function () {
            var e,
              n = document.body;
            (0, t.message)({ text: Oe("content_message_2"), color: "green" }),
              this.observer || this.getObserver(),
              null === (e = this.observer) ||
                undefined === e ||
                e.observe(n, { childList: !0, subtree: !0 }),
              this.config.isAutoClickCheckBox && Ot(this.config);
          }),
          (e.prototype.refreshChallenge = function () {
            var e = document.querySelector("#amzn-btn-refresh-internal");
            null == e || e.click();
          }),
          (e.prototype.doChallenge = function () {
            var e, n, r, a, o, i, l, u, s, c, d;
            return Pt(this, undefined, undefined, function () {
              var f, m, h, v, p, g, y, b, k, w, x, _, S;
              return Mt(this, function (j) {
                switch (j.label) {
                  case 0:
                    return (
                      j.trys.push([0, 6, , 7]),
                      this.isExceed
                        ? ((0, t.message)({ text: "exceeded", color: "red" }),
                          [2])
                        : ((0, t.message)({
                            text: Oe("content_message_3"),
                            color: "green",
                          }),
                          (f = document.querySelector("#root canvas")),
                          (m =
                            null ===
                              (n =
                                null ===
                                  (e =
                                    null == f ? undefined : f.parentElement) ||
                                undefined === e
                                  ? undefined
                                  : e.parentElement) || undefined === n
                              ? undefined
                              : n.firstChild),
                          (h =
                            document.querySelector(
                              ".amzn-captcha-modal-title"
                            ) ||
                            document.querySelector("#aacb-captcha-header")),
                          (v = document.querySelector(
                            "#amzn-btn-verify-internal"
                          )),
                          (p = document.querySelector(
                            "#amzn-btn-refresh-internal"
                          )),
                          f && h && m && v && p
                            ? this.regTime >=
                                Number(
                                  null === (r = this.config) || undefined === r
                                    ? undefined
                                    : r.endTimes
                                ) &&
                              (null === (a = this.config) || undefined === a
                                ? undefined
                                : a.isOpenEndTimes)
                              ? [
                                  2,
                                  (0, t.message)({
                                    text:
                                      null === (o = Oe("content_message_11")) ||
                                      undefined === o
                                        ? undefined
                                        : o.replace(
                                            "xxx",
                                            null === (i = this.config) ||
                                              undefined === i
                                              ? undefined
                                              : i.endTimes
                                          ),
                                    color: "green",
                                  }),
                                ]
                              : (_e(this.config, "working", "awsCaptcha"),
                                (this.regTime = this.regTime + 1),
                                (g = m.innerText),
                                (y = f.toDataURL("image/jpeg", 0.3)),
                                (b = {
                                  clientKey: this.config.clientKey,
                                  callurl:
                                    (0, t.getParentUrl)() || document.referrer,
                                  task: {
                                    type: "AwsClassification",
                                    queries: y,
                                    question: g,
                                  },
                                }),
                                (0, t.message)({
                                  text: Oe("content_message_5"),
                                  color: "green",
                                }),
                                [4, Lt(b, this.config)])
                            : [2])
                    );
                  case 1:
                    if (0 != (k = j.sent()).errorCode)
                      return (
                        (0, t.message)({
                          text: null == k ? undefined : k.errorDescription,
                          color: "green",
                        }),
                        (0, t.notneedcontinue)(k.errorCode)
                          ? ((null == k ? undefined : k.errorDescription) &&
                              (0, t.message)({
                                text:
                                  null == k ? undefined : k.errorDescription,
                                color: "red",
                              }),
                            [2])
                          : [2, this.refreshChallenge()]
                      );
                    if (
                      ((w = null == k ? undefined : k.taskId) &&
                        this.resultSender.insertTaskId(w),
                      !(null ==
                      (x =
                        null === (l = null == k ? undefined : k.solution) ||
                        undefined === l
                          ? undefined
                          : l.objects)
                        ? undefined
                        : x.length))
                    )
                      return [2, this.refreshChallenge()];
                    (0, t.message)({
                      text: Oe("content_message_6"),
                      color: "green",
                    }),
                      (_ = 0),
                      (j.label = 2);
                  case 2:
                    return _ < x.length
                      ? ((S =
                          null === (u = f.children) || undefined === u
                            ? undefined
                            : u[_]),
                        x[_]
                          ? (null == S || S.click(),
                            [
                              4,
                              (0, t.delay)(
                                Number(
                                  null !==
                                    (c =
                                      null === (s = this.config) ||
                                      undefined === s
                                        ? undefined
                                        : s.times) && undefined !== c
                                    ? c
                                    : 0
                                ) + 500
                              ),
                            ])
                          : [3, 4])
                      : [3, 5];
                  case 3:
                    j.sent(), (j.label = 4);
                  case 4:
                    return (_ += 1), [3, 2];
                  case 5:
                    return (
                      (0, t.message)({
                        text: Oe("content_message_7"),
                        color: "green",
                      }),
                      (null === (d = this.config) || undefined === d
                        ? undefined
                        : d.isAutoSubmit) && v.click(),
                      [3, 7]
                    );
                  case 6:
                    return j.sent(), this.refreshChallenge(), [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.reportFailed = function () {
            var e;
            return Pt(this, undefined, undefined, function () {
              var t, n;
              return Mt(this, function (r) {
                return (
                  (t =
                    null ===
                      (e = Array.from(
                        document.querySelectorAll('[role="alert"]')
                      )) || undefined === e
                      ? undefined
                      : e.find(function (e) {
                          return (
                            (null == e ? undefined : e.offsetHeight) &&
                            (null == e ? undefined : e.offsetWidth)
                          );
                        })),
                  (n = null == t ? undefined : t.innerText),
                  qt.some(function (e) {
                    return n.includes(e);
                  })
                    ? this.resultSender.sendTasksResult(!1)
                    : (this.isExceed = !0),
                  [2]
                );
              });
            });
          }),
          e
        );
      })(),
      Bt = function (e) {
        var t = e.text,
          n = undefined === t ? "" : t,
          r = e.color,
          a = undefined === r ? "red" : r,
          o = e.targetEl,
          i = undefined === o ? document.body : o,
          l = document.getElementById("mymessage");
        l
          ? (l.innerText = n)
          : (((l = document.createElement("div")).id = "mymessage"),
            (l.className = "green" === a ? "fankui" : "fankui2"),
            (l.innerText = n),
            i.appendChild(l));
      },
      Dt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Gt = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      },
      Ut = (function () {
        function e(e) {
          var t = this;
          (this.regTime = 0),
            (this.getObserver = function () {
              t.observer = new MutationObserver(function (e) {
                return Dt(t, undefined, undefined, function () {
                  var t;
                  return Gt(this, function (n) {
                    switch (
                      ((t = (function (e) {
                        var t, n, r, a, o;
                        if ((console.log(e), 1 === e.length)) {
                          if (
                            "bcap-error-message-text" ===
                            (i = null == e ? undefined : e[0]).target.className
                          )
                            return "incorrectNotice";
                          if (
                            "bcap-success-message-text" === i.target.className
                          )
                            return "success";
                        }
                        if (2 === e.length)
                          var i = null == e ? undefined : e[0],
                            l = null == e ? undefined : e[1];
                        if (3 === e.length) {
                          (i = null == e ? undefined : e[0]),
                            (l = null == e ? undefined : e[1]);
                          var u = null == e ? undefined : e[2];
                          if (
                            "tagLabel" ===
                              (null === (t = i.target) || undefined === t
                                ? undefined
                                : t.id) &&
                            (null ===
                              (r =
                                null === (n = l.target) || undefined === n
                                  ? undefined
                                  : n.className) || undefined === r
                              ? undefined
                              : r.includes("bcap-image-table-container")) &&
                            3 ===
                              (null ===
                                (a = null == l ? undefined : l.addedNodes) ||
                              undefined === a
                                ? undefined
                                : a.length) &&
                            "bcap-verify-button" ===
                              (null ===
                                (o = null == u ? undefined : u.target) ||
                              undefined === o
                                ? undefined
                                : o.className)
                          )
                            return "challengeChange";
                        }
                        4 === e.length &&
                          ((i = null == e ? undefined : e[0]),
                          (l = null == e ? undefined : e[1]),
                          (u = null == e ? undefined : e[2]),
                          null == e || e[3]);
                      })(e)),
                      console.log(t, t),
                      t && Nt("节点变化", t),
                      t)
                    ) {
                      case "challengeChange":
                        return this.doChallenge(), [2];
                      case "success":
                        return this.resultSender.sendTasksResult(!0), [2];
                      case "incorrectNotice":
                        return this.resultSender.sendTasksResult(!1), [2];
                    }
                    return [2];
                  });
                });
              });
            }),
            (this.config = e),
            this.startObserve(),
            (this.resultSender = new At(e)),
            this.doChallenge();
        }
        return (
          (e.prototype.startObserve = function () {
            var e,
              t =
                document.querySelector(".bcapc-popup") ||
                document.querySelector(".bcap-popup");
            t &&
              (this.observer || this.getObserver(),
              null === (e = this.observer) ||
                undefined === e ||
                e.observe(t, { childList: !0, subtree: !0 }));
          }),
          (e.prototype.refreshChallenge = function () {
            var e = document.querySelector(".bcap-icon-refresh");
            e && e.dispatchEvent(new MouseEvent("click", { bubbles: !0 }));
          }),
          (e.prototype.doChallenge = function () {
            var e, n, r, a, o, i, l, u, s, c, d, f;
            return Dt(this, undefined, undefined, function () {
              var m, h, v, p, g, y, b, k, w, x, _, S, j, C;
              return Gt(this, function (T) {
                switch (T.label) {
                  case 0:
                    return (
                      T.trys.push([0, 7, , 8]),
                      (m = document.querySelector(
                        ".bcap-text-message-container"
                      )),
                      (h = Array.from(
                        document.querySelectorAll(".bcap-image-cell-image")
                      )),
                      (v =
                        null ===
                          (r =
                            null ===
                              (n =
                                null ===
                                  (e = h.find(function (e) {
                                    return !!e.style.backgroundImage;
                                  })) || undefined === e
                                  ? undefined
                                  : e.style) || undefined === n
                              ? undefined
                              : n.backgroundImage) || undefined === r
                          ? undefined
                          : r.replace(/^url\(["']?|["']?\)$/g, "")),
                      (p = document.querySelector(".bcap-verify-button")),
                      (g = document.querySelector(".bcap-modal")),
                      m && v && p && g
                        ? this.regTime >=
                            Number(
                              null === (a = this.config) || undefined === a
                                ? undefined
                                : a.endTimes
                            ) &&
                          (null === (o = this.config) || undefined === o
                            ? undefined
                            : o.isOpenEndTimes)
                          ? [
                              2,
                              Bt({
                                text:
                                  null === (i = Oe("content_message_11")) ||
                                  undefined === i
                                    ? undefined
                                    : i.replace(
                                        "xxx",
                                        null === (l = this.config) ||
                                          undefined === l
                                          ? undefined
                                          : l.endTimes
                                      ),
                                color: "green",
                                targetEl: g,
                              }),
                            ]
                          : ((this.regTime = this.regTime + 1),
                            [
                              4,
                              chrome.runtime.sendMessage({
                                action: "convertImageToBase64",
                                url: v,
                              }),
                            ])
                        : [2]
                    );
                  case 1:
                    return (
                      (y = T.sent()),
                      (b = null == y ? undefined : y.base64),
                      (k =
                        null === (u = null == m ? undefined : m.innerText) ||
                        undefined === u
                          ? undefined
                          : u.replace(/[\t\n\r\f\v]/g, " ")),
                      (w = {
                        clientKey: this.config.clientKey,
                        callurl: location.href,
                        task: {
                          type: "AwsClassification",
                          queries: b,
                          question: k,
                        },
                      }),
                      Bt({
                        text: Oe("content_message_5"),
                        color: "green",
                        targetEl: g,
                      }),
                      [4, Lt(w, this.config)]
                    );
                  case 2:
                    if (0 != (x = T.sent()).errorCode)
                      return (
                        Bt({
                          text: null == x ? undefined : x.errorDescription,
                          color: "green",
                          targetEl: g,
                        }),
                        (0, t.notneedcontinue)(x.errorCode)
                          ? ((null == x ? undefined : x.errorDescription) &&
                              Bt({
                                text:
                                  null == x ? undefined : x.errorDescription,
                                color: "red",
                                targetEl: g,
                              }),
                            [2])
                          : [2, this.refreshChallenge()]
                      );
                    if (
                      ((_ = null == x ? undefined : x.taskId) &&
                        this.resultSender.insertTaskId(_),
                      !(null ==
                      (S =
                        null === (s = null == x ? undefined : x.solution) ||
                        undefined === s
                          ? undefined
                          : s.objects)
                        ? undefined
                        : S.length))
                    )
                      return [2, this.refreshChallenge()];
                    Bt({
                      text: Oe("content_message_6"),
                      color: "green",
                      targetEl: g,
                    }),
                      (j = 0),
                      (T.label = 3);
                  case 3:
                    return j < S.length
                      ? ((C = null == h ? undefined : h[j]),
                        S[j]
                          ? (null == C || C.click(),
                            [
                              4,
                              (0, t.delay)(
                                Number(
                                  null !==
                                    (d =
                                      null === (c = this.config) ||
                                      undefined === c
                                        ? undefined
                                        : c.times) && undefined !== d
                                    ? d
                                    : 0
                                ) + 500
                              ),
                            ])
                          : [3, 5])
                      : [3, 6];
                  case 4:
                    T.sent(), (T.label = 5);
                  case 5:
                    return (j += 1), [3, 3];
                  case 6:
                    return (
                      Bt({
                        text: Oe("content_message_7"),
                        color: "green",
                        targetEl: g,
                      }),
                      (null === (f = this.config) || undefined === f
                        ? undefined
                        : f.isAutoSubmit) && p.click(),
                      [3, 8]
                    );
                  case 7:
                    return T.sent(), this.refreshChallenge(), [3, 8];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          e
        );
      })(),
      Vt = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Ht = function (e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : undefined, done: !0 };
            })([o, l]);
          };
        }
      };
    (0, t.getconfig)().then(function (e) {
      return Vt(undefined, undefined, undefined, function () {
        var n, r, a, o, i;
        return Ht(this, function (l) {
          switch (l.label) {
            case 0:
              return (null == e ? undefined : e.autorun)
                ? (null == e ? undefined : e.isInstallConflict)
                  ? [2, console.log("yesCaptcha CRX installed conflict")]
                  : [4, It(e)]
                : [2];
            case 1:
              return l.sent()
                ? ((null == e ? undefined : e.isTextCaptcha) && new Ne(e),
                  ((null == e ? undefined : e.hcaptcha) ||
                    (null == e ? undefined : e.allowJsInject)) &&
                    (chrome.runtime.onMessage.addListener(function (e) {
                      return ke(undefined, undefined, undefined, function () {
                        var t, n, r, a, o, i, l;
                        return we(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return "queryHcaptchaChallengeIframeRect2" !==
                                (null == e ? undefined : e.type)
                                ? [3, 3]
                                : ((t = window.self === window.top),
                                  (n = null == e ? undefined : e.href),
                                  (r = Array.from(
                                    document.getElementsByTagName("Iframe")
                                  ).find(function (e) {
                                    return e.src === n;
                                  }))
                                    ? t
                                      ? ((l = {
                                          result: {
                                            DOMRect:
                                              null == r
                                                ? undefined
                                                : r.getBoundingClientRect(),
                                            topClientWidth:
                                              window.document.documentElement
                                                .clientWidth,
                                          },
                                          receiverHref: n,
                                        }),
                                        je({
                                          type: "responseHcaptchaChallengeIframeRect2",
                                          data: l,
                                        }),
                                        [3, 3])
                                      : [3, 1]
                                    : [2]);
                            case 1:
                              return [4, ve()];
                            case 2:
                              (a = u.sent()),
                                (o =
                                  null == r
                                    ? undefined
                                    : r.getBoundingClientRect()),
                                (i = null == a ? undefined : a.DOMRect),
                                (o.x = o.x + i.x - 4),
                                (o.y = o.y + i.y - 3),
                                (l = {
                                  result: {
                                    DOMRect: o,
                                    topClientWidth:
                                      null == a ? undefined : a.topClientWidth,
                                  },
                                  receiverHref: n,
                                }),
                                je({
                                  type: "responseHcaptchaChallengeIframeRect2",
                                  data: l,
                                }),
                                (u.label = 3);
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }),
                    new ze(e)),
                  e.isOpenCloudflare && new Je(e),
                  (/api\.funcaptcha\.com/.test(location.href) ||
                    /(client-api|api)\.arkoselabs\.com(.*?)(game-core|\/fc)/.test(
                      location.href
                    ) ||
                    /openai\.com(.*?)(game-core)/.test(location.href) ||
                    /tile-game-lite-mode/.test(location.href) ||
                    /ec-game-core\/game-core/.test(location.href)) &&
                    (null ===
                      (n = null == e ? undefined : e.funcaptchaConfig) ||
                    undefined === n
                      ? undefined
                      : n.isOpen) &&
                    new ot(e),
                  ((null === (r = null == e ? undefined : e.recaptchaConfig) ||
                  undefined === r
                    ? undefined
                    : r.isOpen) ||
                    (null == e ? undefined : e.allowJsInject)) &&
                    /\/recaptcha\/(.*?)\/bframe\?/.test(location.href) &&
                    new kt(e),
                  ((null === (a = null == e ? undefined : e.recaptchaConfig) ||
                  undefined === a
                    ? undefined
                    : a.isOpen) ||
                    (null == e ? undefined : e.allowJsInject)) &&
                    _t() &&
                    new St(e),
                  (null == e ? undefined : e.allowJsInject) &&
                    (Ke("content/workStatus.js"), Ke("content/injected.js")),
                  (null === (o = e.awsCaptchaConfig) || undefined === o
                    ? undefined
                    : o.isOpen) &&
                    (function () {
                      if (/amazon\.\w+\/ap\/cvf\/request/.test(location.href))
                        return !0;
                      var e = Array.from(
                          document.getElementsByTagName("SCRIPT")
                        ),
                        t = document.getElementById("captcha-container");
                      return (
                        !!e.find(function (e) {
                          return /captcha\.awswaf\.com(.*?)captcha\.js/.test(
                            e.src
                          );
                        }) && !!t
                      );
                    })() &&
                    new Ft(e),
                  (null === (i = e.awsCaptchaConfig) || undefined === i
                    ? undefined
                    : i.isOpen) &&
                    (function (e) {
                      var t = setInterval(function () {
                        document.querySelector(".bcap-image-cell-image") &&
                          (new Ut(e), clearInterval(t));
                      }, 3e3);
                    })(e),
                  e.clientKey ||
                    (0, t.message)({
                      text: Oe("content_message_0"),
                      color: "red",
                    }),
                  [2])
                : [2];
          }
        });
      });
    });
  })();
})();
