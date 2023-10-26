import { Client } from "./Client.js"

const client = new Client({
    uri: "https://your-share-api-url.trycloudflare.com/api", // default by localhost:5000
})

client.getCurrentModel().then(model => {
    console.log(model ?? "No model loaded! :(")
})

client.chat("Hello Assistant!", {
    character: "Assistant"
}).then(res => {
    console.log(`Assistant: ${res}`)
})