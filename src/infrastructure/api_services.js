import axios from "axios";
import {baseApiUrl} from "../env";

export function getTopicLectureVideo(topicId) {
    return axios.get(`${baseApiUrl}/lecture/${topicId}`);
}

export function getTopicPracticeVideoQuestions(topicId) {
    return axios.get(`${baseApiUrl}/questions/${topicId}`);
}
