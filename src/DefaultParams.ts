import { ChatParams } from "./types/ChatParams"

export const defaultChatParams: ChatParams = {
    preset: "simple-1",
    character: "Assistant",
    your_name: "You",
    // history: {
    //     internal: [],
    //     visible: []
    // },
    greeting: "Hello, How can I help you today?",
    user_input: "*nothing said*"
}