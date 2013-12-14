'use strict'

//task #1

if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context) {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 1);

        return function () {
            return self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}


//task #2

var Person = function (args) {
    for (var key in args) {
        if (key && args.hasOwnProperty(key)) {
            this[key] = args[key];
        } else {
            throw new Error("unacceptable data");
        }
    }
};

//task #3
function isFunction(property) {
    var getType = {};
    return property && getType.toString.call(property) === '[object Function]';
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function deepCopy(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

var PersonExtended = function (args) {
    var that = this;
    var context = deepCopy(args);

    for (var name in context) {
        if (context.hasOwnProperty(name)) {
            if (!isFunction(context[name])) {

                (function (key) {
                    that['get' + capitalize(key)] = function () {
                        return context[key];
                    };

                    that['set' + capitalize(key)] = function (val) {
                        return context[key] = val;
                    };
                })(name);

            } else {
                this[name] = context[name];
            }
        }
    }
};
