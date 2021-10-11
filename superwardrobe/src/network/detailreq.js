import {req} from "./axiosreq";

export function getDetail (iid) {
  return req({
    url: '/detail',
    params: {
      iid
    }
  })
}
