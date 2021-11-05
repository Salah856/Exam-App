import axios from 'axios';

let BASE_URL = 'http://localhost:4000/api/';

export const getQuestions = () => {
    return axios.get(`${BASE_URL}/questions`)
        .then(res => res.data)
}



