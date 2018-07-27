export default {
  buildArrayAlias : function(arr, indexL, indexR) {
    if (typeof indexL == "undefined") {
      indexL = 0;
    }
    if (typeof indexR == "undefined") {
      indexR = arr.length;
    }
    var len = indexR - indexL;
    var alias = {
      isAlias : true,
      get : function(i) {
        if (arr.isAlias) {
          return arr.get(indexL + i);
        }
        return arr[indexL + i];
      },
      set : function(i, val) {
        if (arr.isAlias) {
          arr.set(indexL + i, val);
        }
        arr[indexL + i] = val;
      },
      length : len,
      getRawArray : function() {
        return arr;
      },
      buildRawArray : function() {
        var rawArray = [];
        for (let i = 0; i < len; i++) {
          rawArray.push(this.get(i));
        }
        return rawArray;
      }
    };
    return alias;
  }
}
