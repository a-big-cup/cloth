<template>
  <div>
    <top></top>
    <topic-one :designer="listResearchPage"></topic-one>
    <topic-two :designer="listResearchPage"></topic-two>
    <topic-three :designer="listResearchPage"></topic-three>
    <topic-four :designer="listResearchPage"></topic-four>
    <topic-five :designer="listResearchPage"></topic-five>
    <pagination
      v-if="sumPage != undefined"
      :tal="sumPage"
      :count="count"
      :size="parameters.size"
      :currentPage="currentPage"
      :tp="research"
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
import { listResearchSums, listResearchPage } from "@/api/base/index";
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
      listResearchPage: [{}],
      count: 9,
      research: "",
      currentPage: this.$route.query.currentPage,
      parameters: { size: 16, currentPage: "", research: "" },
    };
  },
  watch: {
    $route: {
      handler() {
        this.research = this.$route.query.research;
        this.parameters.currentPage = this.$route.query.currentPage;
        this.parameters.research = this.$route.query.research;
        this.getListResearchSums(this.parameters.research);
        this.getListResearchPage(this.parameters);
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
    getListResearchSums: function (research) {
      listResearchSums({ research }).then(
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
    getListResearchPage: function (parameters) {
      listResearchPage(parameters).then(
        (res) => {
          this.listResearchPage = res.data.data;
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

