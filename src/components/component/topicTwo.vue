<template>
  <div>
    <el-divider></el-divider>
    <div class="block">
      <router-link :to="{ path: url, query: { id: hotDeAndNe[0].id } }">
        <el-image
          v-if="hotDeAndNe[0].surface != undefined"
          :src="hotDeAndNe[0].surface"
          class="img"
        ></el-image
      ></router-link>
      <router-link :to="{ path: url, query: { id: hotDeAndNe[0].id } }">
        <H3>{{ hotDeAndNe[0].surfaceTopic }}</H3></router-link
      >
      <p class="p1">{{ hotDeAndNe[0].surfaceIntroduce }}</p>
      <p>{{ hotDeAndNe[0].comment }}</p>
      <div>
        <router-link :to="{ path: url, query: { id: hotDeAndNe[1].id } }">
          <H1 class="h1">{{ hotDeAndNe[1].surfaceTopic }}</H1></router-link
        >
        <H2 class="h2">{{ hotDeAndNe[1].surfaceIntroduce }}</H2>
        <H3>{{ hotDeAndNe[1].comment }}</H3>
      </div>
    </div>
  </div>
</template>
<script>
import { listHotDeAndNe } from "@/api/base/index";
export default {
  data() {
    return {
      type1: "new",
      type2: "designer",
      hotDeAndNe: [{}, {}],
      url: "/cloth/detail",
    };
  },
  created() {
    this.getListHotDeAndNe();
  },
  methods: {
    getListHotDeAndNe: function () {
      listHotDeAndNe({ type1: this.type1, type2: this.type2 }).then(
        (res) => {
          this.hotDeAndNe = res.data.data;
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
.img {
  margin: 4px auto;
  width: 50%;
  height: 580px;
}
.h1 {
  margin-top: 3%;
  font-size: 48px;
  font-family: "Times New Roman", Times, serif;
}
.h2 {
  margin: 3% auto 1% auto;
  font-size: 30px;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 95%;
  height: 84px;
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
  width: 100%;
  display: block;
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
