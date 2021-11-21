<template>
  <div>
    <el-pagination class="pag"
      :hide-on-single-page="t<=s"
      :page-size="s"
      :pager-count="c"
      layout="prev, pager, next"
      :total="t"
      :current-page.sync="cu"
       @current-change=" handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>

export default {
  props:['tal','size','count','currentPage','tp'],//页的总数//一页的数目//显示的页码数
  data() {
    return {
      url: "/classify",
      type:this.tp,
      t:parseInt(this.tal),
      s:parseInt(this.size),
      c:parseInt(this.count),
      cu:parseInt(this.currentPage),
    };
  },
  created() {

  },
  methods: {
    handleCurrentChange(currentPage) {
          this.$router.push({path:this.url,query:{type:this.type,currentPage:currentPage}})
        }
    },
};
</script>
<style lang="less" scoped>
.pag{
 margin: 3% auto;
}

</style>
