import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { defaultChatParams } from "./DefaultParams.js"
import { ChatParams } from "./types/ChatParams.js"
import { ChatResult } from "./types/ChatResult.js"
import { ClientOptions } from "./types/ClientOptions.js"


export class Client {

    private readonly _uri: string

    constructor(options: ClientOptions) {
        this._uri = options.uri ? options.uri + "api/v1/" : "http://127.0.0.1:5000/api/v1/"
    }

    async getCurrentModel(): Promise<string> {
        return axios.get(this._uri + "model").then((res: AxiosResponse) => res.data.result)
    }

    async chat(msg: string, params: ChatParams = defaultChatParams, internal: boolean = false): Promise<ChatResult> {
        const options: AxiosRequestConfig = {
            method: "POST",
            url: this._uri + "chat",
            headers: {
                "content-type": "application/json"
            },
            data: <ChatParams>{ ...params, user_input: msg }
        }

        return await axios(options).then((res: AxiosResponse) => {
            // noinspection JSUnresolvedReference
            const history = res.data.results[0].history
            const context = (internal ? history.internal : history.visible).flat()

            return <ChatResult>{
                input: context[0],
                output: context[1]
            }
        })
    }

}