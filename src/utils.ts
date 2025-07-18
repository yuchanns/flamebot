export class HTTPError extends Error {
  status: number
  response?: Response
  constructor(status: number, opts?: { response?: Response }) {
    super(`HTTP Error: ${status}`)
    this.status = status
    this.response = opts?.response
  }
}

export function makeURL(token: string, path: string) {
  return new URL(`https://api.telegram.org/bot${token}/${path}`)
}

export function makeFilePath(token: string, path: string) {
  return `https://api.telegram.org/file/bot${token}/${path}`
}

export async function fetchJSON(u: URL, data: any) {
  const body = JSON.stringify(data)
  const response = await fetch(new Request(u), {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new HTTPError(response.status, { response })
  }
  return response
}

export async function fetchFormData(u: URL, data: any) {
  const body = new FormData()
  Object.keys(data).forEach((key) => {
    body.append(key, data[key])
  })
  const response = await fetch(new Request(u), {
    method: 'POST',
    body,
  })
  if (!response.ok) {
    throw new HTTPError(response.status, { response })
  }
  return response
}
