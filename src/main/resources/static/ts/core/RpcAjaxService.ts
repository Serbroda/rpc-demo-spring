/// <reference path="../@types/jquery.d.ts"/>
/// <reference path="./RpcReceiver.ts"/>
/// <reference path="./RpcService.ts"/>

class RpcAjaxService extends RpcService {
    constructor(url: string) {
        super(url);
    }

    fire<T>(request: RpcRequest, receiver?: RpcReceiver<T>) {
        let requestData = {
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
            success: function(response) {
                if (receiver && receiver.onSuccess) {
                    receiver.onSuccess(response);
                }
            },
            error: function(error) {
                if (receiver && receiver.onFailure) {
                    receiver.onFailure(error);
                }
            }
        });
    }
}
