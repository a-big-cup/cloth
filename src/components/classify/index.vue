<template>
  <div>
    <top></top>
    <topic-one :designer="listTypePage"></topic-one>
    <topic-two :designer="listTypePage"></topic-two>
    <topic-three :designer="listTypePage"></topic-three>
    <topic-four :designer="listTypePage"></topic-four>
    <topic-five :designer="listTypePage"></topic-five>
    <pagination
      v-if="sumPage != undefined"
      :tal="sumPage"
      :count="count"
      :size="parameters.size"
      :currentPage="currentPage"
      :tp="type"
    ></pagination>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
import top from "../component/top.vue";
import topicOne from "./topicOne.vue";
import topicTwo from "./topicTwo.vue";
import topicThree from "./topicThree.vue";
import topicFour from "./topicFour.vue";
import topicFive from "./topicFive.vue";
import pagination from "./pagination.vue";
import bottomFooter from "../component/bottomFooter.vue";
import { listTypeSums, listTypePage } from "@/api/base/index";
export default {
  components: {
    top,
    topicOne,
    topicTwo,
    topicThree,
    topicFour,
    topicFive,
    pagination,
    bottomFooter,
  },
  data() {
    return {
      sumPage: 0,
      listTypePage: [{}],
      count: 9,
      type: "",
      currentPage: this.$route.query.currentPage,
      parameters: { size: 16, currentPage: "", type: "" },
    };
  },
  watch: {
    $route: {
      handler() {
        this.type = this.$route.query.type;
        this.parameters.currentPage = this.$route.query.currentPage;
        this.parameters.type = this.$route.query.type;
        this.getListTypeSums(this.type);
        this.getListTypePage(this.parameters);
        document.body.scrollTop = 30;
        document.documentElement.scrollTop = 30;
      },
      immediate: true,
    },
  },
  // created() {
  //   this.getListTypeSums(this.type);
  //   this.getListTypePage(this.parameters);
  // },
  methods: {
    getListTypeSums: function (type) {
      listTypeSums({ type }).then(
        (res) => {
          this.sumPage = res.data.data;
        },
        (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        }
      );
    },
    getListTypePage: function (parameters) {
      listTypePage(parameters).then(
        (res) => {
          this.listTypePage = res.data.data;
        },
        (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        }
      );
    },
  },
};
</script>

