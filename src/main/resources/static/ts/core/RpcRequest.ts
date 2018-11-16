interface RpcRequest {
    id: number | string;
    method: string;
    params: any[];
}
