// https://gist.github.com/cvan/5fe6c44a8254160d94c5

// extend is used instead of Object.assign
var Extend = (function () {
  if (typeof Object.assign === 'function') return Object.assign;
  return function (target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var output = Object(target);
    for (var i = 1; i < arguments.length; i) {
      var src = arguments[i];
      if (src === undefined || src === null) continue;
      for (var nextKey in src) {
        if (src.hasOwnProperty(nextKey)) {
          output[nextKey] = src[nextKey];
        }
      }
    }
    return output;
  };
};

export default Extend;