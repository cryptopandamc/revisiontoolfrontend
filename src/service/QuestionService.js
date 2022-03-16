import axios from 'axios'

const BASE_URL = 'http://localhost:8088/revise/api/v1/question'



class QuestionService {

    GetQuestions() {
        return axios.get(`${BASE_URL}/AllQuestions`);
    }

    AddQuestion(question) {
        return axios.post(`${BASE_URL}/CreateQuestion`, question);
    }


}

export default new QuestionService()