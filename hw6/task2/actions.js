var DOWN = 40;
var UP = 38;
var LEFT = 37;
var RIGHT = 39;

var ENTER = 13;
var DELETE = 46;


var actions = {};
actions[LEFT] = function (table) {
    table.getSelection().navigateLeft();
};
actions[RIGHT] = function (table) {
    table.getSelection().navigateRight();
};
actions[UP] = function (table) {
    table.getSelection().navigateUp();
};
actions[DOWN] = function (table) {
    table.getSelection().navigateDown();
};
actions[ENTER] = function (table, shiftKey) {
    if (shiftKey) {
        table.addColumn();
    } else {
        table.addRow();
    }
};
actions[DELETE] = function (table, shiftKey) {
    if (shiftKey) {
        table.deleteColumn();
    } else {
        table.deleteRow();
    }
};


(function() {
    var table = new Table(document.getElementsByTagName('table')[0]);

    document.getElementsByTagName('td')[0].classList.add('active');

    table.el.addEventListener('click', function (e) {
        table.clearSelection();
        e.target.classList.add('active');
    });

    //document.getElementsByTagName('table')[0].addEventListener('keypress', function (e) {
    document.body.addEventListener('keypress', function (e) {
        actions[e.keyCode].call(this, table, e.shiftKey);
    });
})();


