<template>
  <div>
    <el-divider></el-divider>
    <div class="block" v-if="hotAdvise[0] != undefined">
      <router-link :to="{ path: url, query: { id: hotAdvise[0].id } }">
        <el-image :src="hotAdvise[0].surface" class="image"></el-image
      ></router-link>
      <router-link :to="{ path: url, query: { id: hotAdvise[0].id } }">
        <H2>{{ hotAdvise[0].surfaceTopic }}</H2></router-link
      >
      <p class="p1">{{ hotAdvise[0].surfaceIntroduce }}</p>

      <p>{{ hotAdvise[0].comment }}</p>
    </div>
    <div class="block" v-if="hotAdvise[1] != undefined">
      <router-link :to="{ path: url, query: { id: hotAdvise[1].id } }">
        <img :src="hotAdvise[1].surface" class="image"
      /></router-link>

      <router-link :to="{ path: url, query: { id: hotAdvise[1].id } }"
        ><H2>{{ hotAdvise[1].surfaceTopic }}</H2></router-link
      >
      <p class="p1">{{ hotAdvise[1].surfaceIntroduce }}</p>
      <p>{{ hotAdvise[1].comment }}</p>
    </div>
  </div>
</template>
<script>
import { listHotAdvise } from "@/api/base/index";
export default {
  data() {
    return {
      hotAdvise: [],
      type: "industry",
      url: "/cloth/detail",
    };
  },
  created() {
    this.getListHotAdvise();
  },
  methods: {
    getListHotAdvise: function () {
      listHotAdvise({ type: this.type }).then(
        (res) => {
          this.hotAdvise = res.data.data;
        },
        (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.p1 {
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 95%;
  height: 43px;
  margin-left: 42px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 80%;
  display: block;
  margin: 0px auto;
  margin-top: 13px;
  height: 500px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
