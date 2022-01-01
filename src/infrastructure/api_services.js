import axios from "axios";

const baseApiUrl = 'http://localhost:8000/api';

export function getTopicLectureVideo(topicId) {
    return axios.get(`${baseApiUrl}/lecture/${topicId}`);
}

export function getTopicPracticeVideoQuestions(topicId) {
    return axios.get(`${baseApiUrl}/questions/${topicId}`);
}
