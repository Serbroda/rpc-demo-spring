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
/// <reference path="../@types/jquery.d.ts"/>
/// <reference path="./RpcReceiver.ts"/>
var RpcService = /** @class */ (function () {
    function RpcService(url) {
        this.url = url;
    }
    RpcService.prototype.fire = function (request, receiver) {
        var requestData = {
            id: request.id,
            method: request.method,
            params: request.params
        };
        console.log("Call", JSON.stringify(requestData));
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
    return RpcService;
}());
/// <reference path="./core/RpcService.ts"/>
var HelloRpcService = /** @class */ (function (_super) {
    __extends(HelloRpcService, _super);
    function HelloRpcService() {
        return _super.call(this, "http://localhost:52693/rpc/hello") || this;
    }
    HelloRpcService.prototype.sayHello = function (name, receiver) {
        this.fire({
            id: 0,
            method: "sayHello",
            params: [name]
        }, receiver);
    };
    HelloRpcService.prototype.sayHello2 = function (firstName, lastName, receiver) {
        this.fire({
            id: 0,
            method: "sayHello",
            params: [firstName, lastName]
        }, receiver);
    };
    HelloRpcService.prototype.sayHello3 = function (firstName, age, receiver) {
        this.fire({
            id: 0,
            method: "sayHello",
            params: [firstName, age]
        }, receiver);
    };
    return HelloRpcService;
}(RpcService));
var helloRpcService = new HelloRpcService();
