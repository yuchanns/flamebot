// https://core.telegram.org/bots/api#making-requests
export interface Response<T> {
  ok: boolean
  description?: string
  error_code: number
  parameters?: {
    migrate_to_chat_id?: number
    retry_after?: number
  }
  result: T
}

export interface User {
  id: number
  is_bot: boolean
  username: string
}

export interface MessageEntity {
  type: string
  offset: number
  length: number
  url?: string
  user?: User
  language?: string
  custom_emoji_id: string
}

export interface Chat {
  id: number
  type: string
  title?: string
  username?: string
  first_name?: string
  last_name?: string
}

export interface PhotoSize {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  file_size?: number
}

export interface Message {
  message_id: number
  message_thread_id?: number
  from: User
  date: number
  chat: Chat
  text?: string
  reply_to_message?: Message
  entities?: MessageEntity[]
  photo?: PhotoSize[]
}

export interface Update {
  update_id: number
  message?: Message
  edited_message?: Message
  channel_post?: Message
  edited_channel_post?: Message
}

export interface File {
  file_id: string
  file_unique_id: string
  file_size?: number
  file_path?: string
  link?: string
}

export interface InlineKeyboardMarkup {
  inline_keyboard: Array<Array<{
    text: string
    url?: string
    callback_data?: string
    web_app?: {
      url: string
    }
    login_url?: {
      url: string
      forward_text?: string
      bot_username?: string
      request_write_access?: boolean
    }
  }>>
}

export interface ReplyKeyboardMarkup {
  keyboard: Array<Array<{
    text: string
    request_users?: {
      request_id: number
      user_is_bot?: boolean
      user_is_premium?: boolean
      max_quantity?: number
      request_name?: boolean
      request_username?: boolean
      request_photo?: boolean
    }
    request_chat?: {
      request_id: number
      chat_is_channel?: boolean
      chat_is_forum?: boolean
      chat_has_username?: boolean
      chat_is_created?: boolean
      bot_is_member?: boolean
      request_title?: boolean
      request_username?: boolean
      request_photo?: boolean
    }
    request_contact?: boolean
    request_location?: boolean
    request_poll?: {
      type: string
    }
    web_app?: {
      url: string
    }
  }>>
  is_persistent?: boolean
  resize_keyboard?: boolean
  one_time_keyboard?: boolean
  input_field_placeholder?: string
  selective?: boolean
}

export interface ReplyKeyboardRemove {
  remove_keyboard: boolean
  selective?: boolean
}

export interface ForceReply {
  force_reply: boolean
  input_field_placeholder?: string
  selective?: boolean
}

export interface TelegramBotAPI {
  // https://core.telegram.org/bots/api#setwebhook
  setWebhook: (params: {
    url: string
    secret_token: string
  }) => Promise<Response<boolean>>
  // https://core.telegram.org/bots/api#getme
  getMe: () => Promise<Response<User>>
  // https://core.telegram.org/bots/api#sendmessage
  sendMessage: (params: {
    chat_id: string | number
    message_thread_id?: number
    text: string
    reply_to_message_id?: number
    parse_mode?: string
    disable_web_page_preview?: boolean
    disable_notification?: boolean
    protect_content?: boolean
    allow_sending_without_reply?: boolean
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
  }) => Promise<Response<Message>>
  editMessageText: (params: {
    chat_id?: string | number
    message_id?: number
    inline_message_id?: string
    text: string
    parse_mode?: string
    entities?: MessageEntity[]
    disable_web_page_preview?: boolean
  }) => Promise<Response<Message>>
  sendVoice: (params: {
    chat_id: string | number
    message_thread_id?: number
    voice: Blob
    caption?: string
    parse_mode?: string
    caption_entities?: MessageEntity[]
    duration?: number
    disable_notification?: boolean
    protect_content?: boolean
    allow_sending_without_reply?: boolean
    reply_to_message_id?: number
  }) => Promise<Response<Message>>
  getFile: (params: {
    file_id: string
    with_link?: boolean
  }) => Promise<Response<File>>
}
