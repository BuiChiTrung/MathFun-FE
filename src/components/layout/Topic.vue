<template>
  <a :href="`/lecture/${topicId}`" class="topic" :class="{isPressed: topicId === $route.params.id}">
    <img class="topic-img" :src="imgSrc" alt="topic-img" :title="title">
    <div class="topic-title">{{ title }}</div>
  </a>
</template>

<script>
export default {
  name: "Topic",
  props: ['title', 'topicId'],
  data() {
    return {
      imgSrc: require(`@/assets/icons/topic-${this.topicId}.png`)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/styles";

  .topic {
    @include flex-center;
    padding: 1rem 2rem;
  }

  .topic:hover, .isPressed {
    background: #D9F9D9;
  }

  .topic-title {
    font-size: 1.7rem;
    font-weight: bold;
  }

  .topic-img {
    width: 3rem;
    margin-right: 2rem;
  }
</style>
