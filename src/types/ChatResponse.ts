export interface ChatResponse {
    internal: ChatMessage,
    visible: ChatMessage
}

export interface ChatMessage {
    message: Array<string>
}