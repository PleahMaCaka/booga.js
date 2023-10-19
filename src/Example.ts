import { Client } from "./Client.js"
import { defaultChatParams } from "./DefaultParams.js"

const client = new Client({
    uri: "your uri here", // default by localhost:5000
})

client.getCurrentModel().then(model => {
    console.log(model)
})

client.chat("Hello Assistant!", {
    ...defaultChatParams,
    character: "Assistant"
}).then(res => {
    console.log(`User: ${res.input}`)
    console.log(`Assistant: ${res.output}`)
})