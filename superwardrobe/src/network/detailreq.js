import {req} from "./axiosreq";

export function getDetail(iid) {
  return req({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return req({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
    this.cGoods = shopInfo.cGoods

  }
}

