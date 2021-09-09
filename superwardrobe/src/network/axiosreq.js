import axios from "axios";

function req(config) {
  const reqInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 10000
  })

  reqInstance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })

  reqInstance.interceptors.response.use(config => {
    return config
  }, error => {
    console.log(error)
  })

  // 返回了promise对象
  return reqInstance(config)
}

export {req}
