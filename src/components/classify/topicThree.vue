<template>
  <div class="cbody" align="center" v-if="designer.length > 5">
    <el-row v-if="designer.length > 5">
      <el-col :span="6" class="clbody">
        <router-link
          :to="{
            path: url,
            query: { id: designer[5].id },
          }"
        >
          <el-image
            v-if="designer[5].surface != undefined"
            :src="designer[5].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[5].id },
          }"
        >
          <H2>{{ designer[5].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[5].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[5].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[6] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[6].id },
          }"
        >
          <el-image
            v-if="designer[6].surface != undefined"
            :src="designer[6].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[6].id },
          }"
        >
          <H2>{{ designer[6].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[6].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[6].comment }}</p>
      </el-col>
      <el-col :span="6" class="clbody" v-if="designer[7] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[7].id },
          }"
        >
          <el-image
            v-if="designer[7].surface != undefined"
            :src="designer[7].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[7].id },
          }"
        >
          <H2>{{ designer[7].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[7].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[7].comment }}</p>
      </el-col>
      <el-col :span="5" class="clbody" v-if="designer[8] != undefined">
        <router-link
          :to="{
            path: url,
            query: { id: designer[8].id },
          }"
        >
          <el-image
            v-if="designer[8].surface != undefined"
            :src="designer[8].surface"
            class="img"
          ></el-image>
        </router-link>
        <router-link
          :to="{
            path: url,
            query: { id: designer[8].id },
          }"
        >
          <H2>{{ designer[8].surfaceTopic }}</H2></router-link
        >
        <p class="p1">{{ designer[8].surfaceIntroduce }}</p>
        <p class="p2">{{ designer[8].comment }}</p>
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

