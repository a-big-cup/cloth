<template>
  <div>
    <top></top>
    <topic
      v-if="listExpriences.length > 0"
      :surfaceTopic="listExpriences[0].surfaceTopic"
      :surface="listExpriences[0].surface"
      :time="222"
    ></topic>
    <div v-for="(o, index) in listExpriences" :key="index">
      <expriences :topic="o.blackTopic" :text="o.text"></expriences>
    </div>
    <car-slide :listCarousel="listCarousel"></car-slide>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
import top from "../component/top";
import topic from "./topic";
import expriences from "./expriences";
import carSlide from "./carSlide";
import bottomFooter from "../component/bottomFooter";
import { listExpriences, listCarousel } from "@/api/base/index";
export default {
  components: { top, topic, expriences, carSlide, bottomFooter },
  data() {
    return {
      listExpriences: [{}],
      designerId: "",
      parameters: { type: "", id: "" },
      listCarousel: [{}],
    };
  },
  watch: {
    $route: {
      handler() {
        this.designerId = this.$route.query.id;
        this.parameters.id = this.designerId;
        this.getListExpriences(this.designerId, this.parameters);
        document.body.scrollTop = 30;
        document.documentElement.scrollTop = 30;
      },
      immediate: true,
    },
  },
  // created() {
  //   this.designerId = this.$route.query.id;
  //   this.parameters.id = this.designerId;
  //   this.getListExpriences(this.designerId,this.parameters);
  // },
  methods: {
    getListExpriences: async function (designerId, parameters) {
      await listExpriences({ id: designerId }).then(
        (res) => {
          this.listExpriences = res.data.data;
          this.parameters.type = this.listExpriences[0].textType;
        },
        (error) => {
          this.$message({
            message: "糟糕，有错误！",
            type: "error",
          });
        }
      );
      this.getListCarousel(parameters);
    },
    getListCarousel: function (parameters) {
      listCarousel(parameters).then(
        (res) => {
          this.listCarousel = res.data.data;
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
