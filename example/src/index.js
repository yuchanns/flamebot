import { createTelegramBotAPI } from '@yuchanns/flamebot'

const BOT_TOKEN = ''
const bot = createTelegramBotAPI(BOT_TOKEN)

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(_request) {
  const me = await bot.getMe()
  return new Response(JSON.stringify(me), {
    headers: { 'content-type': 'application/json' },
  })
}
