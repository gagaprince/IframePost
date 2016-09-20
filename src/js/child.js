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
        global.Child = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    "use strict";
    var child = {
        init:function(){
            this.initListener();
        },
        initListener:function(){
            $("body").on("click",".btn",function(){
                PostMsgUtil.postFunMsg(function(){
                    $("#lb").html("哈哈哈，我被孩子换了！");
                });
            });
        }
    };
    $(document).ready(function(){
        child.init();
    });

}));