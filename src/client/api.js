import axios from "axios"
class apiClient {
    BASE_URL = 'https://vya-api.herokuapp.com/';
    apiClient() {
    }

    async getQuestionByType(type) {
        const params = {
            type,
        }

        const response = await axios.get(this.BASE_URL + "/general-questions")
        return response;
    }
}

export function getApiClient() {
    return new apiClient();
}