function isObject(obj) {
    return typeof obj === "object";
}

function isFunction(property) {
    var getType = {};
    return property && getType.toString.call(property) === '[object Function]';
}

(function () {
    var my$ = function (params) {
        return new DomHelper(params);
    };

    var DomHelper = function (selector) {
        this.selector = selector;
        this.elements = document.querySelectorAll(this.selector);
    };

    DomHelper.prototype = {
        toString: function () {
            return document.querySelectorAll(this.selector);
        },
        width: function (val) {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].style.width = val + "px";
            }
            return this;
        },
        height: function (val) {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].style.height = val + "px";
            }
            return this;
        },
        css: function() {
            var self = this;
            var args = [].slice.call(arguments);
            var prop = arguments[0];

            if (isObject(prop)) {
                var duration = args[1];
                for(var p in prop) {
                    if (prop.hasOwnProperty(p) && !isFunction(prop[p])) {
                        self.css(p, prop[p], duration);
                    }
                }
            } else {
                var duration = args[2] || 0;
                setTimeout(function() {
                    for (var i = 0; i < self.elements.length; i++) {
                        self.elements[i].style[prop] = args[1];
                    }
                }, duration);
            }

            return this;
        }
    };

    if (!window.my$) {
        window.my$ = my$;
    }
})();