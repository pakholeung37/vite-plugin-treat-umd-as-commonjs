(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define('umd-module', factory);
  } else if (typeof exports === "object") {
    module.export = factory();
  } else {
    root['umd-module'] = factory();
  }
})(this, function () {
  // umd-module
});