'use strict';

var crypto = require('crypto');

// 合并对象
exports.mix = function(){
    var args = Array.prototype.slice.call(arguments);
    var base = args[0] || {};
    for (var i=1; i<args.length; i++) {
        Object.assign(base, args[i]);
    }
    return base;
}

function hasher(algorithm){
    return function(str) {
        var hash = crypto.createHash(algorithm);
        hash.update(str);
        return hash.digest('hex');
    }
}

// md5
exports.md5 = hasher('md5');
// sha1
exports.sha1 = hasher('sha1');

// 8或16位随机字符串
exports.ss = function(length){
    length = length ? length*2 : 16;
    return Math.random().toString(length).substring(2);
}

// 一定范围内数字
exports.between = function(min, max){
    return Math.round( Math.random()*(max - min) + min );
}

exports.time = function(){
    var tm = new Date;
}
