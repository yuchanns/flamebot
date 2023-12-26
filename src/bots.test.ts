import { createTelegramBotAPI } from "./bots"

declare global {
  function getMiniflareBindings(): {
    ENV_BOT_TOKEN: string
    ENV_CHAT_ID: string
    ENV_FILE_ID: string
  }
}

const env = getMiniflareBindings()

describe("telegram_bot", () => {
  const bot = createTelegramBotAPI(env.ENV_BOT_TOKEN)

  test("getMe", async () => {
    const me = await bot.getMe()
    expect(me.result.is_bot).toBe(true)
  })

  test("sendAndEditMessage", async () => {
    const message = await bot.sendMessage({
      chat_id: env.ENV_CHAT_ID,
      text: "hello world!"
    })
    expect(message.result.message_id).toBeTruthy()

    const response = await bot.editMessageText({
      chat_id: env.ENV_CHAT_ID,
      message_id: message.result.message_id,
      text: "hello world!(modified)"
    })
    expect(response.result.message_id).toBeTruthy()
  })

  test("getFile", async () => {
    const message = await bot.getFile({ file_id: env.ENV_FILE_ID, with_link: true })
    expect(message.result.link).toBeTruthy()
  }, 10000)

  // TODO: complete other unit tests
  // await bot.sendWebhook({
  //   url: "https://my.webhook.com",
  //   secret_token: "secret_token"
  // })
  // await bot.sendVoice({
  //   chat_id: env.ENV_CHAT_ID
  //   voice: VoiceBlob
  // })
})
