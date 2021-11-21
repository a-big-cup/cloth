<template>
  <div>
  <el-divider></el-divider>
    <el-carousel v-if="listCarouselIndex!=undefined" :interval="3500" type="card"  class="carslide">
      <el-carousel-item v-for="item in listCarouselIndex" :key="item.id">
        <router-link :to="{ path: url, query: { id: item.id } }">
          <el-image v-if="item.surface!=undefined" :src="item.surface" class="img"></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: item.id } }">
          <p style="font-size:13px">{{ item.surfaceTopic }}</p></router-link
        >
        <p class="p1">{{ item.surfaceIntroduce }}</p>
        <p class="p2">{{ item.comment }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import{listCarouselIndex}from"@/api/base/index"
export default {
  data() {
    return {
      listCarouselIndex:[{}],
      url: "cloth/detail",
      parameters:{type:'',num:4}
    };
  },
  created(){
    this.getListCarouselIndex(this.parameters);
  },
  methods:{
    getListCarouselIndex:function(parameters){
      listCarouselIndex(parameters).then((res)=>{
        this.listCarouselIndex=res.data.data;
      }, (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        })
    },
  }
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
  width:70%;
  height: 15px;
}
.p2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
  font-size: 10px;
}
.carslide{
height:360px;
width: 95%;
margin:20px auto;
}
</style>
