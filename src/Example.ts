import { Client } from "./Client"

const client = new Client({})

client.getCurrentModel().then((model: string) => {
    console.log(model)
})

client.chat("Hello! Who are you?").then((res: any) => {
    console.log(res)
})
