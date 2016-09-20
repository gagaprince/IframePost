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
        global.PostMsgUtil = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    "use strict";
    var PostMsgUtil = {
        initPostMsg:function(){
            var _this = this;
            window.addEventListener("message", function(e){
                _this._msgHander(e);
            }, true);
        },
        /*
         * {
         *   type:"function"
         *   data:"(function(){})()"
         * }
         * */
        _msgHander:function(e){
            var obj = e.data;
            var type = obj["type"];
            switch (type){
                case "function":
                    var funStr = obj["data"]||"";
                    this._excutFun(funStr);
                    break;
            }
        },
        _excutFun:function(funStr){
            var fun = new Function(funStr);
            fun();
        },
        postFunMsg:function(fun){
            var funStr = '('+fun.toString()+')()';
            var msg = {
                type:"function",
                data:funStr
            }
            window.parent.postMessage(msg,'*');
        }
    };
//    PostMsgUtil.init();
    return PostMsgUtil;
}));