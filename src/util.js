

var Util = {
  merge: function() {
    var merged = {};
    var argsLen = arguments.length;
    for (var i = 0; i < argsLen; i++) {
      var obj = arguments[i]
      for (var key in obj) {
        merged[key] = obj[key];
      }
    }
    return merged;
  },
    /** 
     *  判断一个点是否在圆的内部 
     *  @param point  测试点坐标 
     *  @param circle 圆心坐标 
     *  @param r 圆半径 
     *  返回true为真，false为假 
     *  */  
   pointInsideCircle:function(point, circle, r) {  
    if (r===0) return false  
    var dx = circle[0] - point[0]  
    var dy = circle[1] - point[1]  
    return dx * dx + dy * dy <= r * r  
  }
};