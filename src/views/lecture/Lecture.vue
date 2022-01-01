<template>
  <SideBar/>
  <LectureContent/>
</template>

<script>
import SideBar from "../../components/layout/SideBar";
import LectureContent from "./LectureContent";
require('videojs-seek-buttons');

export default {
  name: 'Lecture',
  components: {LectureContent, SideBar},
}
</script>

<style lang="scss" scoped>

</style>
