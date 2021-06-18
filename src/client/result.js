import axios from "axios"
class apiClient {
    BASE_URL = 'https://vya-sogienator.herokuapp.com/';
    apiClient() {
    }

    async getResultbyValue(type) {
        const params = {
            type,
        }

        const response = await axios.get(this.BASE_URL + "/result", { params })
        return response;
    }
}

export function getApiClient() {
    return new apiClient();
}