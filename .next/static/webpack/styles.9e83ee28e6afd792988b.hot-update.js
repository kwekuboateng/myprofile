webpackHotUpdate("styles",{

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"_next":"_next___38_3l","contPage":"contPage___3FgS8","red":"red___dmB02","white":"white___3x2yU","blue":"blue___aqQSv","contentCard":"contentCard___eyPHh","page":"page___P58RD","contentRow":"contentRow___SPYXB","contentColumn":"contentColumn___2dUsd","siteWrapper":"siteWrapper___1rSch"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578316792274");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9e83ee28e6afd792988b.hot-update.js.map