<template>
  <SideBar/>
  <HomeContent/>
</template>

<script>
import SideBar from "../../components/layout/SideBar";
import HomeContent from "./HomeContent";
require('videojs-seek-buttons');

export default {
  name: 'Home',
  components: {HomeContent, SideBar},
}
</script>

<style lang="scss" scoped>

</style>
