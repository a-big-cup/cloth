<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="1"
      active-text-color="#000000"
    >
      <router-link :to="{ path: urlIndex }"
        ><el-image :src="img" class="img-logo"></el-image
      ></router-link>
      <el-menu-item index="1" @click="drawerMenu = true">菜单</el-menu-item>
      <el-menu-item index="2" @click="drawerResearch = true">搜索</el-menu-item>
    </el-menu>
    <!-- drawerMenu -->
    <el-drawer
      title=""
      :visible.sync="drawerMenu"
      :direction="direction"
      :append-to-body='false'
      size="60%"
    >
      <div class="navIndex" align="left">
        <router-link
          :to="{ path: url, query: { type: type.designer, currentPage: '1' } }"
          ><p>设计师</p></router-link
        >
        <router-link
          :to="{ path: url, query: { type: type.new, currentPage: '1' } }"
          ><p>时尚新闻</p></router-link
        >
        <router-link
          :to="{ path: url, query: { type: type.figure, currentPage: '1' } }"
          ><p>时尚形象</p></router-link
        >
        <router-link
          :to="{ path: url, query: { type: type.industry, currentPage: '1' } }"
          ><p>工业</p></router-link
        >
        <router-link
          :to="{ path: url, query: { type: type.view, currentPage: '1' } }"
          ><p>采访</p></router-link
        >
        <router-link
          :to="{ path: url, query: { type: type.advise, currentPage: '1' } }"
          ><p>意见</p></router-link
        >
        <router-link
          :to="{
            path: url,
            query: { type: type.graduateShow, currentPage: '1' },
          }"
          ><p>杂项</p></router-link
        >
      </div>
      <router-link :to="{ path: urlIndex }"
        ><el-image :src="img" class="img-logo2"></el-image
      ></router-link>
    </el-drawer>
    <!-- drawerResearch -->
    <el-drawer
      title=""
      :visible.sync="drawerResearch"
      :direction="direction"
      :append-to-body='false'
      size="45%"
    >
      <router-link :to="{ path: urlIndex }"
        ><el-image :src="img" class="img-logo3"></el-image
      ></router-link>
      <el-input placeholder="搜索" v-model="research" @keyup.enter.native="putResearch" clearable class="inp">
      </el-input>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      drawerMenu: false,
      drawerResearch: false,
      direction: "ttb",
      research: "",
      type: {
        designer: "designer",
        new: "new",
        figure: "figure",
        industry: "industry",
        view: "view",
        advise: "advise",
        graduateShow: "graduateShow",
      },
      url: "/classify",
      researchUrl:'/research',
      img: require("@/assets/images/logo.png"),
      urlIndex: "/cloth",
    };
  },
  methods: {
    putResearch:function(){
      this.$router.push({path:this.researchUrl,query:{research:this.research,currentPage:1}});
    }

  },
};
</script>
<style lang="less" scoped>
.inp {
  display: block;
  margin-top: 40px;
  font-size: 32px;
  font-family: "Times New Roman", Times, serif;
}
.navIndex {
  width: 28%;
  height: auto;
  float: left;

}
p {
  font-size: 27px;
  margin-left: 20px;
}
.img-logo {
  display: block;
  width: 50%;
  height: 100px;
  margin: 0 auto;
}
.img-logo2 {
  display: block;
  width: 50%;
  height: 100px;
  float: left;
}
.img-logo3 {
  display: block;
  width: 50%;
  height: 100px;
  margin: 0 auto;
}
</style>
