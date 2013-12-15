function getObject(path, obj) {
    var index = path.indexOf('.');

    if (index == -1) {
        return obj[path];
    } else {
        var property = path.substring(0, index);

        if(index < path.length) {
            var start = index + 1;
            var subPath = path.substring(start, path.length);

            return getObject(subPath, obj[property]);
        } else {
            return obj[property];
        }
    }
}

var o = {a: {b: 'c'}};
console.log(getObject('a.b', o)); // 'c'
console.log(getObject('a', o)); // {b: 'c'}
console.log(getObject('d', o)); // undefined