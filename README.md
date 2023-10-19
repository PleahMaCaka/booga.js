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

You can get easily get API endpoints
use [--public-api](https://github.com/oobabooga/text-generation-webui?tab=readme-ov-file#api) argument

```js
import { Client } from "booga.js"

const client = new Client({
    uri: "your uri here"
})

client.getCurrentModel().then(model => {
    console.log(model)
})

client.chat("Hello Assistant!").then(res => {
    console.log(`User: ${res.input}`)
    console.log(`Assistant: ${res.output}`)
})
```
