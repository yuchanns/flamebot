import { HTTPException } from "hono/http-exception"

export const makeURL = (token: string, path: string) => {
  return new URL(`https://api.telegram.org/bot${token}/${path}`)
}

export const fetchJSON = async (u: URL, data: any) => {
  const body = JSON.stringify(data)
  const response = await fetch(new Request(u), {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!response.ok) {
    throw new HTTPException(response.status, { res: response })
  }
  return response
}

export const fetchFormData = async (u: URL, data: any) => {
  const body = new FormData()
  Object.keys(data).forEach(key => {
    body.append(key, data[key])
  })
  const response = await fetch(new Request(u), {
    method: "POST",
    body,
  })
  if (!response.ok) {
    throw new HTTPException(response.status, { res: response })
  }
  return response
}
