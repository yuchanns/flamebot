import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { createTelegramBotAPI } from './bots'

const env = z.object({
  ENV_BOT_TOKEN: z.string(),
  ENV_CHAT_ID: z.string(),
  ENV_FILE_ID: z.string(),
}).parse(process.env)

describe('telegram_bot', () => {
  const bot = createTelegramBotAPI(env.ENV_BOT_TOKEN)

  it('getMe', async () => {
    const me = await bot.getMe()
    expect(me.result.is_bot).toBe(true)
  })

  it('sendAndEditMessage', async () => {
    const message = await bot.sendMessage({
      chat_id: env.ENV_CHAT_ID,
      text: 'hello world!',
    })
    expect(message.result.message_id).toBeTruthy()

    const response = await bot.editMessageText({
      chat_id: env.ENV_CHAT_ID,
      message_id: message.result.message_id,
      text: 'hello world! (modified)',
    })
    expect(response.result.message_id).toBeTruthy()
  })
})
