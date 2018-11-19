/// <reference path="./core/RpcAjaxService.ts"/>

class HelloRpcService extends RpcAjaxService {
    constructor() {
        super("http://localhost:52693/rpc/hello");
    }

    public sayHello(name: string, receiver?: RpcReceiver<string>);
    public sayHello(name: string, lastName: string, receiver?: RpcReceiver<string>);
    public sayHello(name: string, age: number, receiver?: RpcReceiver<string>);
    public sayHello(param1: string, param2?: RpcReceiver<string> | string | number, param3?: RpcReceiver<string>) {
        let _params: any[] = null;
        let _receiver: RpcReceiver<string> = null;
        if (typeof param2 === "string" || typeof param2 === "number") {
            _params = [param1, param2];
            _receiver = param3;
        } else {
            _params = [param1];
            _receiver = param2;
        }
        this.fire(
            {
                id: 0,
                method: "sayHello",
                params: _params
            },
            _receiver
        );
    }
}

let helloRpcService = new HelloRpcService();
