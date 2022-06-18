import axios from "axios";
class apiClient {
  BASE_URL = "https://vya-api.herokuapp.com";

  async getResultByKey(key) {
    const params = {
      key,
    };
    const response = await axios.get(this.BASE_URL + "/result", { params });
    return response;
  }
}

export function getApiClient() {
  return new apiClient();
}
