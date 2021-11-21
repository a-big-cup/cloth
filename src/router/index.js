import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index.vue";
import detail from "@/components/detail/index.vue";
import index_classify from "@/components/classify/index.vue";
import index_research from "@/components/research/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/cloth",
      name: "首页",
      component: index
    },
    {
      path: "/cloth/detail",
      name: "详细页",
      component: detail
    },
    {
      path: "/classify",
      name: "分类页",
      component: index_classify
    },
    {
      path: "/research",
      name: "搜索页",
      component: index_research
    }
  ]
});
