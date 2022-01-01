<template>
  <div id="result-container">
    <div id="result-block">
      <div id="text">
        <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-firework-christmas-flatart-icons-flat-flatarticons.png"/>
        <h1>Chúc mừng bạn trả lời đúng:</h1>
        <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-firework-christmas-flatart-icons-flat-flatarticons.png"/>
      </div>
      <div id="points">
        {{ totalCorrectAnswer }} / {{ totalQuestion }}
      </div>
      <div id="buttons">
        <span class="material-icons" title="Xem lại" @click="$router.go()">replay</span>
        <a :href="nextLecture" class="btn-navigation green">Bài giảng tiếp theo</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PracticeResult",
  props: ['totalCorrectAnswer', 'totalQuestion'],

  data() {
    return {
      nextLecture: `/lecture/${parseInt(this.$route.params.id) + 1}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/styles';

#result-container {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  height: 100%;
  width: 100%;
  top: 0;
}

#result-block {
  @include flex-column-center;
  justify-content: space-around;
  position: relative;
  width: 50rem;
  min-height: 40%;
  top: 50%;
  transform: translate(0%, -50%);
  padding: 1rem;
  margin: 0 auto;
  background: white;
  border-radius: 3rem;

  #text {
    @include flex-center;
  }

  #points {
    font-weight: bold;
    font-size: 7rem;
  }

  #buttons {
    @include flex-center;
    .material-icons {
      font-size: 4rem;
      color: $main-color-1;
      margin-right: 2rem;
      border-radius: 50%;
      border: 1px solid $main-color-1;
    }
    .material-icons:hover {
      cursor: pointer;
      color: $main-color-2;
      border: 1px solid $main-color-2;
    }

    .btn-navigation {
      position: static;
      font-size: 1.5rem;
    }
  }


}
</style>
