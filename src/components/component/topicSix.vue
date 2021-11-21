<template>
  <div>
    <div class="block">
      <el-row >
        <el-col :span="10" :offset="1">
          <div class="grid-content bg-purple">
            <el-image
              src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            ></el-image>
            <p class="demonstration">{{ isseTime }}</p>
            <H3 class="demonstration">{{ topic }}</H3>
            <p class="demonstration">{{ introduce }}</p>
          </div>
        </el-col>
        <el-col :span="10" :offset="2">
          <div class="grid-content bg-purple">
            <el-image
              src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            ></el-image>
            <p class="demonstration">{{ isseTime }}</p>
            <H3 class="demonstration">{{ topic }}</H3>
            <p class="demonstration">{{ introduce }}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isseTime: "发行时间",
      topic: "大标题",
      introduce: "简单介绍",
      relativeRecommend: [{}, {}, {}, {}],
    };
  },
};
</script>
<style lang="less" scoped>
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
