import axios from 'axios';

let BASE_URL = 'http://localhost:8080/api/v1/';

export const getQuestions = () => {
    return axios.get(`/api/exam/${examId}/questions`)
        .then(res => res.data)
}

