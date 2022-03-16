import axios from 'axios'

const BASE_URL = 'http://localhost:8088/revise/api/v1/tags'



class TagService {

    retrieveAllTags() {
        return axios.get(`${BASE_URL}/AllTags`);
    }


}

export default new TagService()