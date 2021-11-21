<template>
  <div>
    <el-divider></el-divider>
    <el-row v-if="listGraduationShow.length > 0">
      <el-col :span="6" v-for="(o, index) in listGraduationShow" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <router-link :to="{ path: url, query: { id: o.id } }">
            <img v-if="o.surface != undefined" :src="o.surface" class="image"
          /></router-link>

          <router-link :to="{ path: url, query: { id: o.id } }">
            <H3>{{ o.surfaceTopic }}</H3></router-link
          >
          <p class="p1">
            {{ o.surfaceIntroduce }}
          </p>
          <p class="p2">{{ o.comment }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { listGraduationShow } from "@/api/base/index";
export default {
  data() {
    return {
      showType: "designer",
      listGraduationShow: [{}],
      url: "/cloth/detail",
    };
  },
  created() {
    this.getListGraduationShow();
  },
  methods: {
    getListGraduationShow: function () {
      listGraduationShow({ type: this.showType }).then(
        (res) => {
          this.listGraduationShow = res.data.data;
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
  font-size: 13px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 100%;
  height: 33px;
}
.p2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-top: 5%;
  font-size: 10px;
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
