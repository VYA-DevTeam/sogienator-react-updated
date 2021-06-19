import axios from 'axios';

export const BASE_API_URL = 'https://vya-sogienator.herokuapp.com/';

const customAxios = axios.create({
  baseURL: BASE_API_URL,
});

export default customAxios;