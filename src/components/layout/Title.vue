<template>
  <nav>
    <span class="material-icons" @click="toggleSidebar">menu</span>
    <span id="title">{{ title }}</span>
    <a :href="buttonLink" class="btn-navigation">{{ buttonContent }}</a>
  </nav>
  <hr>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: "Title",
  props: ['title', 'buttonContent', 'buttonLink'],
  methods: mapMutations(['toggleSidebar'])
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/styles";

nav{
  @include flex-center;
  font-size: 2rem;
  margin: 2rem 0 3rem 0;
  position: relative;

  .material-icons {
    margin-right: 2rem;
    cursor: pointer;
  }
}

#title {
  font-size: 3rem;
  font-weight: bold;
}
</style>
