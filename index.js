'use strict';

var crypto = require('crypto');

// 合并对象
exports.mix = function(){
    var args = Array.prototype.slice.call(arguments);
    var base = args[0] || {};
    for (var i=1; i<args.length; i++) {
        if (Object.assign) {
            Object.assign(base, args[i]);
        }
        else {
            var tar = args[i] || {};
            for(var k in tar) {
                if (tar.hasOwnProperty(k)) {
                    base[k] = tar[k];
                }
            }
        }
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
exports.rnds = function(length){
    length = length ? length*2 : 16;
    return Math.random().toString(length).substring(2);
}

// 指定范围的随机数字
exports.between = function(min, max){
    return Math.round( Math.random()*(max - min) + min );
}

// 当前时间
exports.time = function(format){
    var tm = new Date;

}

// 解析JSON
exports.parse = function(body){
    if (body && type body === 'object') {
        return body;
    }
    var obj = {};
    try {
        obj = JSON.parse(body);
    } catch (e) {
        // console.error(e);
    }
    // fix body == '""'
    if (typeof obj === 'string') {
        return {};
    }
    return obj;
}

exports.is = require('./lib/is.js');
