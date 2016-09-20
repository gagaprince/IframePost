(function(global, factory) {
    if (typeof define === "function") { // AMD || CMD
        if (define.amd) {
            define(function() {
                return factory();
            });
        } else if (define.cmd) {
            define(function(require, exports, module) {
                module.exports = factory();
            });
        }
    } else if (typeof module === "object" && typeof module.exports === "object") { // commonJS
        module.exports = factory();
    } else { // global
        global.Parent = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    "use strict";
    var Parent = {
        init:function(){
            PostMsgUtil.initPostMsg();
            this.initListener();
        },
        initListener:function(){

        }
    };
    Parent.init();
}));