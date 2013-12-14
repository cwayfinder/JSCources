function isObject(obj) {
    return typeof obj === "object";
}
var my$ = function (selector) {
    this.element = document.querySelectorAll(selector);
    this.element.height = function (val) {
        for (var key in this) {
            if (this.hasOwnProperty(key) && isObject(this[key])) {
                this[key].style.height = val + "px";
            }
        }
    };
    this.element.width = function (val) {
        for (var key in this) {
            if (this.hasOwnProperty(key) && isObject(this[key])) {
                this[key].style.width = val + "px";
            }
        }
    };
    return this.element;
};