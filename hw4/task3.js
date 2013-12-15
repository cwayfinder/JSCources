Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

var people = [
    {id: 1, name: 'Brad', friends: [2, 5, 6]},
    {id: 2, name: 'John', friends: [1, 3]},
    {id: 3, name: 'Tom', friends: [2, 5]},
    {id: 4, name: 'Fil', friends: null},
    {id: 5, name: 'John', friends: [1, 3]},
    {id: 6, name: 'Jim', friends: [1]}
];

function exists(userId) {
    var found = false;
    people.forEach(function (user) {
        if (user.id == userId) {
            found = true;
        }
    });
    return found;
}

function getFriends(userId) {
    if (exists(userId)) {
        var result = [];

        people.forEach(function (user) {
            if (user.friends && user.friends.contains(userId)) {
                result.push(user);
            }
        });

        return result;
    } else {
        return null;
    }
}

console.log(getFriends(2)); // [{id: 1, name: 'Brad', friends: [2,5,6]}, {id: 3, name: 'Tom', friends: [2, 5]}]
console.log(getFriends(4)); // []
console.log(getFriends(100500)); // null