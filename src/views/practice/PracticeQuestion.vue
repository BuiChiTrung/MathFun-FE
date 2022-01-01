<template>
  <div id="question-container">
    <div id="question-block">
      <img id="condition" :src="question['condition_image_url']" alt="condition">
      <div v-if="userPickAChoice && correctAnswer" class="alert alert-success" role="alert">
        <img src="https://img.icons8.com/dusk/20/000000/flower.png"/>
        Bạn giỏi quá! Đúng rồi
        <img src="https://img.icons8.com/dusk/20/000000/flower.png"/>
      </div>
      <div v-if="userPickAChoice && !correctAnswer" class="alert alert-danger" role="alert">
        <img src="https://img.icons8.com/color/28/000000/sad--v1.png"/>
        Chưa chính xác rồi! Cùng xem lời giải nhé!
        <img src="https://img.icons8.com/color/28/000000/sad--v1.png"/>
      </div>
      <p id="question">{{ question['content'] }}</p>
      <div id="choices">
        <div class="choice"
             :value="choice['index']"
             @click="answer"
             :key="choice['id']"
             v-for="choice in question['choices']">
          {{ `${choice['index']}. ${choice['content']}` }}
        </div>
      </div>
      <a  v-if="userPickAChoice" @click="this.$emit('continueVideo', correctAnswer)" class="btn-navigation green">Xem lời giải</a>
<!--      <button v-if="userPickAChoice" class="btn btn-success" @click="this.$emit('continueVideo', correctAnswer)">Xem lời giải</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PracticeQuestion",

  props: ['question'],

  data() {
    return {
      'userPickAChoice': false,
      'correctAnswer': false,
    }
  },

  methods: {
    answer(e) {
        if (this.userPickAChoice) return;
        if (e.target.attributes.value.value === this.question['correct_answer'])
          this.correctAnswer = true;
        this.userPickAChoice = true;
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/styles';
#question-container {
  position: absolute;
  background: rgba(255, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  top: 0;
}

#question-block {
  position: relative;
  width: 95%;
  height: 95%;
  top: 50%;
  transform: translate(0%, -50%);
  margin: 0 auto;
  background: white;
  z-index: 2;
  font-size: 1.5rem;
  padding: 4rem;
  overflow-y: scroll;

  .alert {
    text-align: center;
  }

  #condition {
    width: 80%;
    margin-bottom: 1rem;
  }

  #question {
    font-weight: bold;
    color: $main-color-2;
  }

  .choice {
    margin-top: 2rem;
    border-radius: 5rem;
    padding: 1rem;
    background: #D9F9D9;
    color: black;
  }

  .choice:hover {
    background: $main-color-2;
    cursor: pointer;
    color: white;
  }

  .btn-navigation {
    position: static;
    display: block;
    width: fit-content;
    margin-top: 2rem;
    font-size: 1.5rem;
  }
}
</style>
