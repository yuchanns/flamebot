import { TelegramBotAPI } from "./types"
import { fetchFormData, fetchJSON, makeURL } from "./utils"

export const createTelegramBotAPI = (token: string) => {
  return {
    setWebhook: async (params) => {
      const u = makeURL(token, "setWebhook")
      const response = await fetchJSON(u, params)
      return await response.json()
    },
    getMe: async () => {
      const u = makeURL(token, "getMe")
      const response = await fetch(new Request(u))
      return await response.json()
    },
    sendMessage: async (params) => {
      const u = makeURL(token, "sendMessage")
      const response = await fetchJSON(u, params)
      return await response.json()
    },
    editMessageText: async (params) => {
      const u = makeURL(token, "editMessageText")
      const response = await fetchJSON(u, params)
      return await response.json()
    },
    sendVoice: async (params) => {
      const u = makeURL(token, "sendVoice")
      const response = await fetchFormData(u, params)
      return await response.json()
    }
  } as TelegramBotAPI
}

