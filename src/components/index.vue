<template>
  <div>
    <top></top>
    <index-body></index-body>
    <topic-one></topic-one>
    <topic-two></topic-two>
    <topic-thress></topic-thress>
    <topic-five></topic-five>
    <!--<topic-six></topic-six>-->
    <remomend></remomend>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
import top from "./component/top";
import indexBody from "./component/indexBody";
import topicOne from "./component/topicOne";
import TopicTwo from "./component/topicTwo";
import topicThress from "./component/topicThress";
import topicFive from "./component/topicFive";
import topicSix from "./component/topicSix";
import bottomFooter from "./component/bottomFooter";
import remomend from "./component/remomend.vue";

export default {
  components: {
    top,
    indexBody,
    topicOne,
    TopicTwo,
    topicThress,
    topicFive,
    topicSix,
    bottomFooter,
    remomend,
  },
  data() {
    return {};
  },
};
</script>
