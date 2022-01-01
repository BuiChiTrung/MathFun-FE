<template>
  <main id="content">
    <Title title="Bài giảng" buttonContent="Luyện tập" :buttonLink="`/practice/${this.$route.params.id}`"/>
    <LectureVideo/>
  </main>
</template>

<script>
import Title from "../../components/layout/Title";
import LectureVideo from "./LectureVideo";
export default {
  name: "LectureContent",
  components: {LectureVideo, Title}
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/styles';

</style>
