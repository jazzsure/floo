/*!
 * Floo.js
 * @author  
 * @version 0.0.1
 * @url https://github.com/jazzsure/floo
 */

/* global define, module */

(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Floo = factory();
    }
}(this, function () {
    'use strict';
    var bigJJ = 'zhangshuo', smallGG = 'lianxiaozhuang';
    var emptyObject = Object.freeze({});
    var Floo = function () {

    }
    Floo.prototype.$addClass = function (el, cls) {
        if (!cls || !(cls = cls.trim()))return;
        if (el.classList) {
            if (cls.indexOf(' ') > -1) {
                cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
            } else {
                el.classList.remove(cls);
            }
            if (!el.classList.length) {
                el.removeAttribute('class');
            }
        } else {
            var cur = " " + (el.getAttribute('class') || '') + " ";
            var tar = ' ' + cls + ' ';
            while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, ' ');
            }
            cur = cur.trim();
            if (cur) {
                el.setAttribute('class', cur);
            } else {
                el.removeAttribute('class');
            }
        }
    }



    return Floo;

}));
