import axios from "axios";

function req(config) {
  const reqInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
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
