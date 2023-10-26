import axios, { AxiosResponse } from "axios"
import { defaultChatParams } from "./DefaultParams.js"
import { ChatParams } from "./types/ChatParams.js"
import { ClientOptions } from "./types/ClientOptions.js"


export class Client {

    public readonly url: string

    constructor(options: ClientOptions) {
        let url = options.uri ?? "http://127.0.0.1:5000/api/v1/"

        if (!url.endsWith("/")) url += "/"
        if (!url.endsWith("api/")) url += "api/"
        if (!url.endsWith("v1/")) url += "v1/"

        this.url = url
    }

    public async getCurrentModel(): Promise<string | undefined> {
        const res = await axios.get(this.url + "model").then((res: AxiosResponse) => res.data.result)
        return (res === "None") ? undefined : res
    }

    public async chat(msg: string, params: ChatParams = defaultChatParams, internal: boolean = false): Promise<string> {
        return await axios.post(this.url + "chat", <ChatParams>{
            ...params,
            user_input: msg
        }).then((res: AxiosResponse) => {
            // noinspection JSUnresolvedReference
            const history = res.data.results[0].history
            const context = (internal ? history.internal : history.visible).flat()

            return context[1]
        })
    }

}