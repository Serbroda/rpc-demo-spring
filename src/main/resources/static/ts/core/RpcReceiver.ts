interface RpcReceiver<T> {
    onSuccess?: (response: T) => void;
    onFailure?: (error: any) => void;
}
