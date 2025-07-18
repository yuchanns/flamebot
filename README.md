# flamebot

[![npm version](https://badge.fury.io/js/@yuchanns%2Fflamebot.svg)](https://badge.fury.io/js/@yuchanns%2Fflamebot)

An Incomplete implementation of Telegram Bot SDK for Cloudflare.

## Why Develop Another Telegram Bot SDK?

While the Telegram Bot SDK NPM packages are excellent, they cannot be used in Cloudflare Workers due to their close association with the NodeJS runtime. As a result, I have **re-implemented** an incomplete SDK specifically for Cloudflare.

As I have limited time and energy, I have added features based on my own needs. However, anyone is welcome to submit Pull Requests if they require additional features.

## How to use

Minimal usage in Cloudflare Worker:

```js
import { createTelegramBotAPI } from '@yuchanns/flamebot'

const bot = createTelegramBotAPI(BOT_TOKEN)

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const me = await bot.getMe()
  return new Response(JSON.stringify(me))
}
```

_You can import exported functions/types directly from your package. No need to worry about sub-paths under dist._

See [tests](./src/bots.test.ts)
