function isObject(obj) {
    return typeof obj === "object";
}

(function () {
    var my$ = function (params) {
        return new DomHelper(params);
    };

    var DomHelper = function (selector) {
        this.selector = selector;
        this.elements = document.querySelectorAll(this.selector);
//    this.element = document.querySelectorAll(selector);
//    this.element.height = function (val) {
//        for (var key in this) {
//            if (this.hasOwnProperty(key) && isObject(this[key])) {
//                this[key].style.height = val + "px";
//            }
//        }
//    };
//    this.element.width = function (val) {
//        for (var key in this) {
//            if (this.hasOwnProperty(key) && isObject(this[key])) {
//                this[key].style.width = val + "px";
//            }
//        }
//    };
//    return this.element;
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