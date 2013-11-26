isDefined = function(v){
    return typeof v !== 'undefined';
};

addMixin = function(o, c){
    if(o){
        for(var p in c){
            if(!isDefined(o[p])){
                o[p] = c[p];
            }
        }
    }
    return o;
};

/**
 * Mixin with default selection behaviour and stub for navigation
 */
var Selectable = {
    navigateLeft: function () {},
    navigateRight: function () {},
    navigateUp: function () {},
    navigateDown: function() {},
    select: function() {
        this.el.classList.add('active');
    },
    unselect: function() {
        this.el.classList.remove('active');
    }
};



function Row(table, el) {
    this.table = table;
    this.el = el;
}
Row.prototype = {
    getIndex: function() {
        return this.el.rowIndex;
    },
    navigateRight: function () {
        this.table.selectCell(this.getIndex(), 0);
    },
    navigateUp: function() {
        if (this.isFirst()) {
            this.table.selectTable();
        } else {
            this.table.selectRow(this.getIndex() - 1);
        }
    },
    navigateDown: function() {
        if (!this.isLast()) {
            this.table.selectRow(this.getIndex() + 1);
        }
    },
    isFirst: function() {
        return this.getIndex() == 0;
    },
    isLast: function() {
        return this.getIndex() == this.table.el.rows.length - 1;
    }
};
addMixin(Row.prototype, Selectable);



function Cell(row, el) {
    this.row = row;
    this.table = row.table;
    this.el = el;
}
Cell.prototype = {
    getIndex: function() {
        return this.el.cellIndex;
    },
    navigateLeft: function () {
        if (this.isFirst()) {
            this.table.selectRow(this.row.getIndex());
        } else {
            this.table.selectCell(this.row.getIndex(), this.getIndex() - 1);
        }
    },
    navigateRight: function () {
        if (!this.isLast()) {
            this.table.selectCell(this.row.getIndex(), this.getIndex() + 1);
        }
    },
    navigateUp: function() {
        if (!this.row.isFirst()) {
            this.table.selectCell(this.row.getIndex() - 1, this.getIndex());
        }
    },
    navigateDown: function() {
        if (!this.row.isLast()) {
            this.table.selectCell(this.row.getIndex() + 1, this.getIndex());
        }
    },
    isFirst: function() {
        return this.getIndex() == 0;
    },
    isLast: function() {
        return this.getIndex() == this.table.el.rows.length - 1;
    }
};
addMixin(Cell.prototype, Selectable);



function Table(el) {
    this.el = el;
}
Table.prototype = {
    getRow: function(el) {
        return new Row(this, el);
    },
    getCell: function(el) {
        var row = this.getRow(el.parentNode);
        return new Cell(row, el);
    },
    addRow: function () {
        var index = this.el.rows.length;
        this.el.insertRow(-1);
        for (var i = 0; i < this.el.rows[0].cells.length; i++) {
            this.el.rows[index].insertCell(-1);
        }
    },
    addColumn: function () {
        for (var i = 0; i < this.el.rows.length; i++) {
            this.el.rows[i].insertCell(-1);
        }
    },
    deleteRow: function () {
        this.el.deleteRow(-1);
    },
    deleteColumn: function () {
        for (var i = 0; i < this.el.rows.length; i++) {
            this.el.rows[i].deleteCell(-1);
        }
    },
    selectCell: function (row, col) {
        this.clearSelection();
        this.getCell(this.el.rows[row].cells[col]).select();
    },
    selectRow: function (index) {
        this.clearSelection();
        this.getRow(this.el.rows[index]).select();
    },
    selectTable: function () {
        this.clearSelection();
        this.select();
    },
    getSelection: function() {
        var result;
        if (this.el.classList.contains("active")) {
            result = this;
        } else {
            var el = this.el.getElementsByClassName('active')[0];
            if (el.tagName === 'TD') {
                result = this.getCell(el);
            } else if (el.tagName === 'TR') {
                result = this.getRow(el);
            }
        }
        return result;
    },
    clearSelection: function () {
        var selected = this.getSelection();
        if (selected) selected.unselect();
    },
    navigateDown: function() {
        this.selectRow(0);
    }
};
addMixin(Table.prototype, Selectable);
