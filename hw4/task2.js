function deepCopy(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

var a = {b: 'c', d: {e: 'f'}},
    b = deepCopy(a);
a.d = 12;
console.log(b.d); // {e: 'f'}