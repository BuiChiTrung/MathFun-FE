<template>
    <video id="my-player" class="video-js  vjs-theme-forest">
      <source :src="videoPath" type="video/mp4"/>
    </video>
</template>

<script>
import videojs from 'video.js';
import $ from 'jquery';

export default {
  name: "LectureVideo",

  data() {
    return {
      videoPath: require(`@/assets/videos/lecture_${this.$route.params.id}.mp4`),
    }
  },

  mounted() {
    const player = videojs('my-player', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      playbackRates: [0.5, 1, 1.5, 2]
    });

    player.seekButtons({
      forward: 5,
      back: 5
    });

    setTimeout(() => {
      $(".skip-forward").append("<span class='material-icons' style='font-size: 3rem'>forward_5</span>");
      $(".skip-back").append("<span class='material-icons' style='font-size: 3rem'>replay_5</span>");
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
  #my-player {
    width: 100%;
    height: calc(100vh - 13rem);
    font-size: 1.5rem;
  }
</style>
