<template>
  <div v-if="listCarousel.length >= 1">
    <el-divider></el-divider>
    <p style="margin-left: 200px; font-size: 10px" align="left">相关推荐：</p>
    <el-carousel :interval="3500" class="carslide" indicator-position="outside">
      <el-carousel-item v-for="item in listCarousel" :key="item.id">
        <router-link :to="{ path: url, query: { id: item.id } }">
          <el-image
            v-if="item.surface != undefined"
            :src="item.surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: item.id } }">
          <p>{{ item.surfaceTopic }}</p></router-link
        >
        <p class="p1">{{ item.surfaceIntroduce }}</p>
        <p class="p2">{{ item.comment }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ["listCarousel"],
  data() {
    return {
      url: "detail",
    };
  },
};
</script>
<style lang="less" scoped>
.img {
  display: block;
  height: 255px;
}
.p1 {
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  width: 95%;
  height: 14px;
}
.p2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
  font-size: 9px;
}
.carslide {
  height: 330px;
  width: 50%;
  margin: 20px auto;
}
</style>
