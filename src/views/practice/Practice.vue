<template>
  <SideBar/>
  <PracticeContent/>
</template>

<script>
import SideBar from "../../components/layout/SideBar";
import PracticeContent from "./PracticeContent";
require('videojs-seek-buttons');

export default {
  name: 'Practice',
  components: {PracticeContent, SideBar},
}
</script>

<style lang="scss" scoped>

</style>
