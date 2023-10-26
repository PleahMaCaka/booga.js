# Booga.js

The simple API Wrapper for the
[**`oobabooga/text-generation-webui`**](https://github.com/oobabooga/text-generation-webui)

## 💡 Usage

### Installation

```bash
npm install booga.js # or yarn/pnpm whatever
```

### Good to see once

You can find all parameters in [here](https://github.com/PleahMaCaka/booga.js/blob/main/src/types/ChatParams.ts)

### Example

You can get to easily get API endpoints
use [--public-api](https://github.com/oobabooga/text-generation-webui?tab=readme-ov-file#api) argument

```js
import { Client } from "booga.js"

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
```
