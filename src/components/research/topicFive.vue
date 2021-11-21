<template>
  <div class="cbody" align="center" v-if="designer.length > 12">
    <el-row v-if="designer.length > 12">
      <el-col :span="6" class="clbody">
        <router-link :to="{ path: url, query: { id: designer[12].id } }">
          <el-image
            v-if="designer[12].surface != undefined"
            :src="designer[12].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: designer[12].id } }">
          <H2>{{ designer[12].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[12].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[12].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[13] != undefined">
        <router-link :to="{ path: url, query: { id: designer[13].id } }">
          <el-image
            v-if="designer[13].surface != undefined"
            :src="designer[13].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: designer[13].id } }">
          <H2>{{ designer[13].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[13].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[13].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[14] != undefined">
        <router-link :to="{ path: url, query: { id: designer[14].id } }">
          <el-image
            v-if="designer[14].surface != undefined"
            :src="designer[14].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: designer[14].id } }">
          <H2>{{ designer[14].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[14].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[14].comment }}</p>
      </el-col>
      <el-col :span="5" class="clbody" v-if="designer[15] != undefined">
        <router-link :to="{ path: url, query: { id: designer[15].id } }">
          <el-image
            v-if="designer[15].surface != undefined"
            :src="designer[15].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link :to="{ path: url, query: { id: designer[15].id } }">
          <H2>{{ designer[15].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[15].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[15].comment }}</p>
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
  width: 99%;
}
.clbody {
  margin-left: 10px;
}
.img {
  display: block;
  height: 540px;
}
</style>

