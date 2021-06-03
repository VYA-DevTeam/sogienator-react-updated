import axios from "axios"

class apiClient {
    BASE_URL = process.env.REACT_APP_API_HOST;
    apiClient() {

    }

    async getQuestionByType(type) {
        const params = {
            type: "general",
        }

        const response = await axios.get(this.BASE_URL + "/questions", { params })
        return response;
    }
}

export function getApiClient() {
    return new apiClient();
}