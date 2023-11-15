 /**
 * 深拷贝
 * @param {Object} obj
 */
export const deepCopy = (obj) => {
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

/**
 * 格式化时间戳
 * @param {*} timestamp 
 * @param {*} fmt 
 */
export const formatDate = (date = new Date(), fmt = 'YYYY-MM-DD HH:mm:ss') => {
    // 传入的是时间戳
    if (typeof date === 'number') {
        date = new Date(date)
    }

    // 填充前导零
    // 用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。
    function formatTen(str) {
        // 第一个参数：当前 str 填充后的长度。如果该值小于或等于 str.length，则会直接返回当前 str。
        // 第二个参数：用于填充当前 str 的字符串。
        return String(str).padStart(2, '0')
    }

    return fmt.replace(/YYYY|MM|DD|HH|mm|ss/g, (key) => {
        switch (key) {
            case 'YYYY':
                return formatTen(date.getFullYear())
            case 'MM':
                return formatTen(date.getMonth() + 1)
            case 'DD':
                return formatTen(date.getDate())
            case 'HH':
                return formatTen(date.getHours())
            case 'mm':
                return formatTen(date.getMinutes())
            case 'ss':
                return formatTen(date.getSeconds())
        }
    })
}