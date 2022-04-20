import axios from "axios";
class apiClient {
  BASE_URL = "https://vya-api.herokuapp.com/";
  apiClient() {}

  async getGeneralQuestions() {
    const response = await axios.get(this.BASE_URL + "/general-questions");
    return response;
  }

  async getGeneralResult(key) {
    const response = await axios.get(this.BASE_URL + `/result?key=${key}`);
    return response;
  }
}

export function getApiClient() {
  return new apiClient();
}
