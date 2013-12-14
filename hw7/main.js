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
        css: function(name, value) {
            if (isObject(name)) {
                for(var p in name) {
                    if (name.hasOwnProperty(p) && !isFunction(name[p])) {
                        this.css(p, name[p]);
                    }
                }
            }

            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].style[name] = value;
            }
            return this;
        }
    };

    if (!window.my$) {
        window.my$ = my$;
    }
})();