 class utils {
   /**
       * 深拷贝
       * @param {Object} obj
       */
      static deepCopy(obj) { //深拷贝
        var result = arguments[1] || (obj instanceof Array ? [] : {});
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) { //只对本身属性和方法进行copy
                continue;
            }
            if (obj[i] && typeof obj[i] === 'object') { //Object or Array except null
                result[i] = (obj[i].constructor === Array) ? [] : {};
                this.deepCopy(obj[i], result[i]);
            } else {
                result[i] = obj[i];
            }
        }
        return result;
    }
 }