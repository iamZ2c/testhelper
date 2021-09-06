import {req} from './axiosreq'

export function getHomeMultiData () {
  return req({
    url: '/home/multidata'
  })
}
