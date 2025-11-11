(() => {
  "use strict";

  // 用于将 e 数组合并到 t 数组（浅拷贝）
  function concatArray(t, e, a) {
    let c;
    if (a || arguments.length === 2) {
      for (let s = 0, o = e.length; s < o; s++) {
        if ((!c && s in e) || (c || (c = Array.prototype.slice.call(e, 0, s)), (c[s] = e[s])));
      }
    }
    return t.concat(c || Array.prototype.slice.call(e));
  }

  const discordSites = ["https://discord.com/"];

  // 鼠标事件模拟器
  class MouseMoveSimulator {
    constructor() {
      this.isActive = false;
      this.allEl = [document.body];
      // 如果当前页面是 Discord，激活模拟器
      if (discordSites.findIndex((site) => location.href.match(site)) !== -1) {
        this.isActive = true;
        this.startMouseMoveSimulate();
      }
      // 定时查找 Discord 层元素和主 mount
      const c = setInterval(() => {
        const s = Array.from(document.querySelectorAll("div[class^=layerContainer]"));
        const o = document.getElementById("app-mount");
        if (s.length && o) {
          this.allEl.push(...concatArray(concatArray([], s, false), [o], false));
          clearInterval(c);
        }
      }, 2000);
    }

    // 每3秒对所有目标元素 dispatch 一个 mousemove 事件
    startMouseMoveSimulate() {
      if (this.timer) this.endMouseMoveSimulate();
      if (this.isActive) {
        this.timer = setInterval(() => {
          this.allEl.forEach((el) => {
            el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
          });
          console.log("dispatchEvent", this.allEl);
        }, 3000);
      }
    }

    endMouseMoveSimulate() {
      clearInterval(this.timer);
    }

    // 派发事件到指定元素
    dispatchEventToTargetEl(selector, eventName) {
      const el = document.querySelector(selector);
      if (el) el.dispatchEvent(new MouseEvent(eventName, { bubbles: true }));
    }
  }
  new MouseMoveSimulator();

  // yesCaptcha控制对象
  (function () {
    const self = this;
    this.yesCaptchaObj = {
      hcaptchaStart: function (cb) {
        console.log("hcaptchaStart");
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "hcaptcha", target: "checkbox", action: "startObserve" } });
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "hcaptcha", target: "sudoku", action: "startObserve" } });
        window.addEventListener("message", function (e) {
          const a = e.data;
          if (a.crx === "yesCaptcha" && a.type === "isHcaptchaSuccessForJsControl" && a.crx === "yesCaptcha" && a.result === true) cb();
        });
      },
      hcaptchaStop: function () {
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "hcaptcha", target: "checkbox", action: "stopObserve" } });
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "hcaptcha", target: "sudoku", action: "stopObserve" } });
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "hcaptcha", target: "sudoku", action: "stop" } });
      },
      recaptchaStart: function (cb) {
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "recaptcha", target: "checkbox", action: "startObserve" } });
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "recaptcha", target: "sudoku", action: "startObserve" } });
        window.addEventListener("message", function (e) {
          const a = e.data;
          if (a.crx === "yesCaptcha" && a.type === "isRecaptchaSuccessForJsControl" && a.crx === "yesCaptcha" && a.result === true) cb();
        });
      },
      recaptchaStop: function () {
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "recaptcha", target: "checkbox", action: "closeObserve" } });
        window.postMessage({ crx: "yesCaptcha", type: "jsControl", data: { captchaType: "recaptcha", target: "sudoku", action: "closeObserve" } });
      },
    };

    // 注入 yesCaptchaObj 到 window
    window.addEventListener("message", function (e) {
      const a = e.data;
      if (a.crx === "yesCaptcha" && a.type === "queryJsControlFlagAnswer" && a.result) {
        const o = a.result;
        if (window) window[o] = self.yesCaptchaObj;
      }
    });

    window.postMessage({ crx: "yesCaptcha", type: "queryJsControlFlag" });
  })();
})();
