<template>
  <div class="cbody" align="center">
    <el-row v-if="designer.length > 0">
      <el-col :span="6" class="clbody">
        <router-link
          :to="{
            path: url,
            query: { id: designer[0].id },
          }"
        >
          <el-image
            v-if="designer[0].surface != undefined"
            :src="designer[0].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[0].id },
          }"
        >
          <H2>{{ designer[0].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[0].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[0].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[1] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[1].id },
          }"
        >
          <el-image
            v-if="designer[1].surface != undefined"
            :src="designer[1].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[1].id },
          }"
        >
          <H2>{{ designer[1].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[1].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[1].comment }}</p>
      </el-col>
      <el-col :span="11" class="clbody" v-if="designer[2] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[2].id },
          }"
        >
          <el-image
            v-if="designer[2].surface != undefined"
            :src="designer[2].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[2].id },
          }"
        >
          <H2>{{ designer[2].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[2].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[2].comment }}</p>
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
  margin-left: 15px;
}
.img {
  display: block;
  height: 540px;
}
</style>

