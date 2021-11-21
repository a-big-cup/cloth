<template>
  <div>
    <el-divider></el-divider>
    <div class="block">
      <el-row>
        <el-col :span="11">
          <div v-if="listInspire.length > 0">
            <router-link :to="{ path: url, query: { id: listInspire[0].id } }">
              <el-image
                v-if="listInspire[0].surface != undefined"
                :src="listInspire[0].surface"
              ></el-image
            ></router-link>

            <router-link :to="{ path: url, query: { id: listInspire[0].id } }">
              <H2>{{ listInspire[0].surfaceTopic }}</H2></router-link
            >
            <p class="p1">{{ listInspire[0].surfaceIntroduce }}</p>
            <p class="p2">{{ listInspire[0].comment }}</p>
          </div>
        </el-col>
        <el-col :span="11" :offset="2">
          <div v-if="listInspire.length > 1">
            <router-link :to="{ path: url, query: { id: listInspire[1].id } }">
              <el-image
                v-if="listInspire[1].surface != undefined"
                :src="listInspire[1].surface"
              ></el-image
            ></router-link>

            <router-link :to="{ path: url, query: { id: listInspire[1].id } }">
              <H3>{{ listInspire[1].surfaceTopic }}</H3></router-link
            >
            <p class="p1">{{ listInspire[1].surfaceIntroduce }}</p>
            <p class="p2">{{ listInspire[1].comment }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <el-row v-if="listNearest.length > 0">
        <el-col :span="8" v-for="(o, index) in listNearest" :key="index">
          <el-card>
            <router-link :to="{ path: url, query: { id: o.id } }">
              <img :src="o.surface"
            /></router-link>
            <div>
              <router-link :to="{ path: url, query: { id: o.id } }">
                <H2>{{ o.surfaceTopic }}</H2></router-link
              >
              <p class="p1">
                {{ o.surfaceIntroduce }}
              </p>
              <p class="p2">{{ o.comment }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { listNearest, listInspire } from "@/api/base/index";
export default {
  data() {
    return {
      inspireType: "inspire",
      listNearest: [{}],
      listInspire: [{}],
      url: "/cloth/detail",
    };
  },

  created() {
    this.getListNearest();
    this.getListInspire();
  },
  methods: {
    getListNearest: function () {
      listNearest({}).then(
        (res) => {
          this.listNearest = res.data.data;
        },
        (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        }
      );
    },
    getListInspire: function () {
      listInspire({ type: this.inspireType }).then(
        (res) => {
          this.listInspire = res.data.data;
        },
        (error) => {
          alert(error.data.data);
        }
      );
    },
  },
};
</script>
<style lang="less" scoped>
.p1 {
  font-size: 13px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  width: 95%;
  height: 33px;
}
.p2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
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
