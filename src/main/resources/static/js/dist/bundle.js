var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RpcService = /** @class */ (function () {
    function RpcService(url) {
        this.url = url;
    }
    return RpcService;
}());
/// <reference path="../@types/jquery.d.ts"/>
/// <reference path="./RpcReceiver.ts"/>
/// <reference path="./RpcService.ts"/>
var RpcAjaxService = /** @class */ (function (_super) {
    __extends(RpcAjaxService, _super);
    function RpcAjaxService(url) {
        return _super.call(this, url) || this;
    }
    RpcAjaxService.prototype.fire = function (request, receiver) {
        var requestData = {
            id: request.id,
            method: request.method,
            params: request.params
        };
        $.ajax({
            type: "POST",
            url: this.url,
            headers: {
                "Content-Type": "application/json"
            },
            dataType: "json",
            data: JSON.stringify(requestData),
            success: function (response) {
                if (receiver && receiver.onSuccess) {
                    receiver.onSuccess(response);
                }
            },
            error: function (error) {
                if (receiver && receiver.onFailure) {
                    receiver.onFailure(error);
                }
            }
        });
    };
    return RpcAjaxService;
}(RpcService));
/// <reference path="./core/RpcAjaxService.ts"/>
var HelloRpcService = /** @class */ (function (_super) {
    __extends(HelloRpcService, _super);
    function HelloRpcService() {
        return _super.call(this, "http://localhost:52693/rpc/hello") || this;
    }
    HelloRpcService.prototype.sayHello = function (param1, param2, param3) {
        var _params = null;
        var _receiver = null;
        if (typeof param2 === "string" || typeof param2 === "number") {
            _params = [param1, param2];
            _receiver = param3;
        }
        else {
            _params = [param1];
            _receiver = param2;
        }
        this.fire({
            id: 0,
            method: "sayHello",
            params: _params
        }, _receiver);
    };
    return HelloRpcService;
}(RpcAjaxService));
var helloRpcService = new HelloRpcService();
