<template>
  <div class="cbody" align="center" v-if="designer.length > 3">
    <el-row v-if="designer.length > 3">
      <el-col :span="11" class="clbody">
        <router-link
          :to="{
            path: url,
            query: { id: designer[3].id },
          }"
        >
          <el-image
            v-if="designer[3].surface != undefined"
            :src="designer[3].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[3].id },
          }"
        >
          <H2>{{ designer[3].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[3].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[3].comment }}</p>
      </el-col>
      <el-col :span="11" class="clbody" v-if="designer[4] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[4].id },
          }"
        >
          <el-image
            v-if="designer[4].surface != undefined"
            :src="designer[4].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[4].id },
          }"
        >
          <H2>{{ designer[4].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[4].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[4].comment }}</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["designer"],
  data() {
    return {
      url: "cloth/detail",
    };
  },
  created() {},
  methods: {},
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
.cbody {
  margin: 13px auto;
  width: 98%;
}
.clbody {
  margin-left: 40px;
}
.img {
  display: block;
  height: 540px;
}
</style>

