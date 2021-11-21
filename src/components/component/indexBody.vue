<template>
  <div>
    <el-row class="hotInformation" type="flex" justify="start">
      <el-col :span="16"
        ><div class="grid-content" v-if="hotRecommend[0] != undefined">
          <el-row type="flex" align="top" justify="start">
            <el-col :span="16">
              <router-link
                :to="{
                  path: url,
                  query: { id: hotRecommend[0].id },
                }"
              >
                <el-image
                  v-if="hotRecommend[0].surface != undefined"
                  class="left-img"
                  :src="hotRecommend[0].surface"
                ></el-image>
              </router-link>
            </el-col>
            <el-col :span="8">
              <!-- 右边文字 -->
              <!-- 上面文字 -->

              <el-row>
                <el-col :span="24" align="center">
                  <router-link
                    :to="{
                      path: url,
                      query: {
                        id: hotRecommend[0].id,
                      },
                    }"
                  >
                    <H1 :underline="false">{{
                      hotRecommend[0].surfaceTopic
                    }}</H1>
                  </router-link>
                </el-col>
              </el-row>
              <div class="hot-ltext">
                <p>{{ hotRecommend[0].surfaceIntroduce }}</p>
              </div>
              <!-- xia面文字 -->
              <div class="hot-ltext2">
                <p>{{ hotRecommend[0].comment }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- 右侧的热榜单 -->
      <el-col :span="8"
        ><div class="grid-content img-size">
          <el-card
            :body-style="{ padding: '0px' }"
            v-for="(item, index) in hotRecommend"
            :key="index"
          >
            <el-row>
              <el-col :span="18">
                <router-link :to="{ path: url, query: { id: item.id } }">
                  <el-image
                    v-if="index > 0 && item.surface != undefined"
                    :src="item.surface"
                    class="image"
                  ></el-image>
                </router-link>
              </el-col>
              <el-col :span="6">
                <div v-if="index > 0">
                  <el-row>
                    <el-col :span="24" align="left">
                      <router-link
                        :to="{
                          path: url,
                          query: { id: item.id },
                        }"
                      >
                        <H4>{{ item.surfaceTopic }}</H4>
                      </router-link>
                    </el-col>
                  </el-row>
                  <div class="hot-rtext">
                    <p>{{ item.surfaceIntroduce }}</p>
                  </div>
                  <div class="hot-rtext2">
                    <p>{{ item.comment }}</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { listHot } from "@/api/base/index";
export default {
  data() {
    return {
      hotRecommend: [{}],
      url: "/cloth/detail",
    };
  },
  created() {
    this.getHotList();
  },
  methods: {
    getHotList: function () {
      listHot({}).then(
        (res) => {
          this.hotRecommend = res.data.data;
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
.hot-ltext2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-top: 10%;
  font-size: 10px;
}
.hot-ltext {
  font-size: 13px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 100%;
  height: 40px;
  margin-top: 100%;
}
.hot-rtext2 {
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-top: 10%;
  font-size: 10px;
}
.hot-rtext {
  font-size: 12px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  width: 100%;
  height: 32px;
  margin-top: 90%;
}
.image {
  width: 100%;
  display: block;
  height: 250px;
}
.left-img {
  width: 100%;
  display: block;
  height: 508px;
}
.time {
  overflow: auto;
  display: flex;
  flex-direction: row;
}
.box {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.hotInformation {
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
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
