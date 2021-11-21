<template>
  <div align="center">
    <el-image v-if="surface != undefined" :src="surface" class="img"></el-image>
    <H2 class="h1">{{ surfaceTopic }}</H2>
    <p class="p1">{{ time }}</p>
  </div>
</template>
<script>
export default {
  props: ["surfaceTopic", "surface", "time"],
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.p1 {
  width: 50%;
  text-align: right;
  color: black;
}
.h1 {
  font-size: 48px;
  font-family: "Times New Roman", Times, serif;
  color: black;
}
.img {
  margin: 15px auto;
  width: 50%;
  height: 600px;
}
</style>
