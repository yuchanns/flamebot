import { createTelegramBotAPI } from "./bots"

const env = getMiniflareBindings()

describe("telegram_bot", () => {
  const bot = createTelegramBotAPI(env.ENV_BOT_TOKEN)
  test("getMe", async () => {
    const me = await bot.getMe()
    expect(me.result.is_bot).toBe(true)
  })
  // TODO: complete other unit tests
})
