/**
 * =============================================================================
 * ************   检测支持的特性   ************
 * =============================================================================
 */

(function () {
  mdui.support = {
    touch: !!('ontouchstart' in window),
  };
})();