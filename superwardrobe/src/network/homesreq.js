import {req} from './axiosreq'

export function getHomeMultiData() {
  return req({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return req({
    url: 'home/data',
    params: {
      type,
      page,
    }
  })
}


