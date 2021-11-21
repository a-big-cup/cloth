<template>
  <div class="cbody" align="center" v-if="designer.length > 9">
    <el-row v-if="designer.length > 9">
      <el-col :span="11" class="clbody">
        <router-link
          :to="{
            path: url,
            query: { id: designer[9].id},
          }"
        >
          <el-image
            v-if="designer[9].surface != undefined"
            :src="designer[9].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[9].id },
          }"
        >
          <H2>{{ designer[9].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[9].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[9].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[10] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[10].id },
          }"
        >
          <el-image
            v-if="designer[10].surface != undefined"
            :src="designer[10].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[10].id },
          }"
        >
          <H2>{{ designer[10].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[10].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[10].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[11] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[11].id },
          }"
        >
          <el-image
            v-if="designer[11].surface != undefined"
            :src="designer[11].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
          }"
        >
          <H2>{{ designer[11].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[11].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[11].comment }}</p>
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

