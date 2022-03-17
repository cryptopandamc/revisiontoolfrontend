import axios from 'axios'

const BASE_URL = 'http://localhost:8088/revise/api/v1/question'

class QuestionService {

    GetQuestions() {
        return axios.get(`${BASE_URL}/AllQuestions`);
    }

    AddQuestion(question) {
        return axios.post(`${BASE_URL}/CreateQuestion`, question);
    }

    RetrieveOneQuestion(questionId) {
        return axios.get(`${BASE_URL}/Question/${questionId}`);
    }

    EditQuestion(questionId, question) {
        return axios.put(`${BASE_URL}/UpdateQuestion/${questionId}`, question);
    }

    GetByTag(tagId) {
        return axios.get(`${BASE_URL}/GetByTag?tagId=${tagId}`);
    }

}

export default new QuestionService()