<template>
  <main id="content">
    <Title title="Luyện tập" buttonContent="Bài giảng" :buttonLink="`/lecture/${this.$route.params.id}`"/>
    <PracticeVideo/>
  </main>
</template>

<script>
import Title from "../../components/layout/Title";
import PracticeVideo from "./PracticeVideo";
export default {
  name: "PracticeContent",
  components: {PracticeVideo, Title}
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/styles';
</style>
