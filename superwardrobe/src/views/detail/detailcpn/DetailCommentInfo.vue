<template>
  <div class="comment-info">
    <div style="margin-left: 20px">
      <div class="title">
        <span>用户评价</span>
        <span class="more">更多</span>
      </div>
      <div class="user-info" v-for="(info,index) in commentInfo.list" :key="index">
        <img :src="info.user.avatar" alt="">
        <span>{{ info.user.uname }}</span>
        <div>{{ info.content }}</div>
        <div style="display: inline-block; width: 60px; margin-right: 3px" v-for="(image,index) in info.images"
             :key="index">
          <div>
            <img :src="image" alt="">
          </div>
        </div>
        <div class="explain">{{ info.explain }}</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "DetailCommentInfo",
  props: ['commentInfo'],
}
</script>

<style scoped>
.comment-info {
  box-shadow: 10px 20px 10px gainsboro;
}

.title {
  font-size: 14px;
  text-align: right;
  margin-top: 15px;
  display: inline-block;
  border-bottom: gainsboro solid 1px;
  padding-bottom: 10px;
}

.more {
  margin-left: 250px;
}

.user-info {
  margin-top: 10px;
}

.user-info > img {
  height: 40px;
  width: 40px;
  border-radius: 40px 40px 40px 40px;
  border: 1px gainsboro solid;
}

.user-info > span {
  font-size: 15px;
  display: inline-block;
  margin-top: 11px;
  margin-left: 10px;
  position: absolute;
}

.user-info > div {
  margin-top: 10px;
  font-size: 12px;
  width: 95%;
}

.user-info > div > div > img {
  vertical-align: middle;
  height: 60px;
  width: 60px;
  border: 1px gainsboro solid;
}

.explain {
  height: 26px;
  overflow: hidden;
  color: darkgray;
}
</style>
