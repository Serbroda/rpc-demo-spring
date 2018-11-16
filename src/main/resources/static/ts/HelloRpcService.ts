/// <reference path="./core/RpcService.ts"/>

class HelloRpcService extends RpcService {
    constructor() {
        super("http://localhost:52693/rpc/hello");
    }

    public sayHello(name: string, receiver?: RpcReceiver<string>) {
        this.fire(
            {
                id: 0,
                method: "sayHello",
                params: [name]
            },
            receiver
        );
    }

    public sayHello2(firstName: string, lastName: string, receiver?: RpcReceiver<string>) {
        this.fire(
            {
                id: 0,
                method: "sayHello",
                params: [firstName, lastName]
            },
            receiver
        );
    }

    public sayHello3(firstName: string, age: number, receiver?: RpcReceiver<string>) {
        this.fire(
            {
                id: 0,
                method: "sayHello",
                params: [firstName, age]
            },
            receiver
        );
    }
}

let helloRpcService = new HelloRpcService();
