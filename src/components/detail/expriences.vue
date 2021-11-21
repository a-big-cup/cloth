<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6"
        ><div class="d1">
          <H2>{{ topic }}</H2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7"
        ><div class="">
          <p>{{ text }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['topic', 'text'],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.d1{
  margin-top: 20px;
  color: black;
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
