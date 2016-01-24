'use strict';

var is = {
    array: function(obj) {
        return obj && '[object Array]' === toString.call(obj);
    },
    promise: function(obj) {
        return obj && obj.then && obj.catch;
    },
    non: function(obj) {
        return obj === null || obj === undefined;
    }
};

module.exports = is;
