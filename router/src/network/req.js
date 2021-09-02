import axios from "axios";

export function req(config) {
  const reqInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 3000,
  })
  return reqInstance(config)
}

