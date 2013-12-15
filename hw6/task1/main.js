Element.prototype.delegate = function (selector, eventType, handler) {
    if (typeof handler != 'function') {
        throw new Error('delegate: handler is not a function.');
    }
    if (typeof selector != 'string' || typeof eventType != 'string') {
        throw new Error('delegate: selector and eventType should be a string.');
    }
    var children = this.querySelectorAll(selector);
    for (var i = 0; i < children.length; i++) {
        children[i].addEventListener(eventType, handler);
    }
    return this;
};