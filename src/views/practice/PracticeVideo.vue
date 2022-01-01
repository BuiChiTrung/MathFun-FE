<template>
  <div id="video-block">
    <video  id="my-player" class="video-js  vjs-theme-forest">
      <source v-if="videoPath" src="@/assets/videos/logic_ngoc_practice.mp4" type="video/mp4"/>
    </video>
    <PracticeQuestion v-if="isQuestionAppearTime" :question="questions[questionId - 1]" @continueVideo="continueVideo"/>
    <PracticeResult v-if="videoEndAndAllQuestionShowed" :totalQuestion="questions.length" :totalCorrectAnswer="totalCorrectAnswer"/>
  </div>
</template>

<script>
import videojs from 'video.js';
import $ from 'jquery';
import PracticeQuestion from "./PracticeQuestion";
import PracticeResult from "./PracticeResult";
import {getTopicPracticeVideoQuestions} from "../../infrastructure/api_services";
import {baseStorageUrl} from "../../env";

export default {
  name: "PracticeVideo",
  components: {PracticeResult, PracticeQuestion},

  created() {
    getTopicPracticeVideoQuestions(this.$route.params.id)
      .then(({data}) => {
        console.log(data)
        this.videoPath = require(`${baseStorageUrl}/${data['practice_video_path']}`);
        this.questions = data['questions'];
      })
      .catch(err => console.log(err))
  },

  mounted() {
    this.player = videojs('my-player', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      playbackRates: [0.5, 1, 1.5, 2]
    });

    this.player.seekButtons({
      forward: 5,
      back: 5
    });

    setTimeout(() => {
      $(".skip-forward").append("<span class='material-icons' style='font-size: 3rem'>forward_5</span>");
      $(".skip-back").append("<span class='material-icons' style='font-size: 3rem'>replay_5</span>");
    }, 1000);

    this.video = document.querySelector('video');
    this.questionInterval = setInterval(this.checkIfQuestionShouldRaise, 1000);
  },

  methods: {
    checkIfQuestionShouldRaise() {
      const vidCurrentTime = this.video.currentTime;
      while (this.questionId < this.questions.length &&
             vidCurrentTime >= 1.5 + this.questions[this.questionId]['end_second']) {
        this.questionId++;
      }

      if (this.questionId === this.questions.length) {
        if (vidCurrentTime === this.video.duration)
          this.videoEndAndAllQuestionShowed = true;
      }
      else if (vidCurrentTime >= this.questions[this.questionId]['end_second']) {
        this.questionId++;
        this.isQuestionAppearTime = true;
        this.video.pause();
      }
    },

    continueVideo(rightAnswer) {
      this.totalCorrectAnswer += rightAnswer;
      console.log(this.totalCorrectAnswer);
      this.isQuestionAppearTime = false;
      this.video.play();
    }
  },

  data() {
    return {
      questions: [],
      videoPath: null,
      // questions: [
      //   {
      //     "id": 1,
      //     "video_id": 1,
      //     "start_second": 56,
      //     "end_second": 1,
      //     "correct_answer": "C",
      //     "condition_image_url": "https://www.linkpicture.com/q/thumbnail.png",
      //     "content": "Thứ tự về đích từ sớm nhất đến muộn nhất của 4 bạn lần lượt là?",
      //     "solution": {
      //       "id": 1,
      //       "video_id": 1,
      //       "start_second": 2,
      //       "end_second": 3,
      //       "question_id": 1,
      //       "video": {
      //         "id": 1,
      //         "path": "A.mp4"
      //       }
      //     },
      //     "video": {
      //       "id": 1,
      //       "path": "A.mp4"
      //     },
      //     "answers": [
      //       {
      //         "id": 1,
      //         "index": "A",
      //         "content": "Wrong",
      //         "question_id": 1
      //       },
      //       {
      //         "id": 2,
      //         "index": "B",
      //         "content": "Wrong",
      //         "question_id": 1
      //       },
      //       {
      //         "id": 3,
      //         "index": "C",
      //         "content": "Correct",
      //         "question_id": 1
      //       },
      //       {
      //         "id": 4,
      //         "index": "D",
      //         "content": "Wrong",
      //         "question_id": 1
      //       }
      //     ]
      //   }
      // ],
      questionId: 0,
      player: null,
      isQuestionAppearTime: false,
      questionInterval: null,
      videoEndAndAllQuestionShowed: false,
      video: null,
      totalCorrectAnswer: 0
    }
  },
}
</script>

<style lang="scss" scoped>
#video-block {
  position: relative;
}

#my-player {
  width: 100%;
  height: calc(100vh - 13rem);
  font-size: 1.5rem;
}
</style>
