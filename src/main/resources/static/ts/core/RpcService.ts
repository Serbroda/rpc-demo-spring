abstract class RpcService {
    protected url;

    constructor(url: string) {
        this.url = url;
    }

    abstract fire<T>(request: RpcRequest, receiver?: RpcReceiver<T>);
}
