<template>
  <div>
  <el-divider ></el-divider>
    <div class="rbody">
      <el-row>
        <el-col :span="16"
          ><router-link :to="{ path: urlIndex }"
            ><el-image :src="img" class="img-logo"></el-image></router-link
        ></el-col>
        <el-col :span="7"  align="left" >
          <span>
            网站大部分资源来自于网络，若有所冒犯请联系：1401840570@qq.com
            进行修改
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("@/assets/images/footer-logo.png"),
      urlIndex: "/cloth",
    };
  },
};
</script>
<style lang="less" scoped>
.rbody {
  margin: 2% auto;
  width: 98%;
  height: 250px;
}
.img-logo{
  width: 98%;
  height: 250px;
  display: block;
}
</style>
