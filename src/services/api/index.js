import axiosBuilder from "./axios"
let url = window.location;
// place your backend URL here
export const baseUrl = `${url.protocol}//${url.hostname}:4000`

const Api = axiosBuilder(
  baseUrl,
  {
    timeout: 120000, // 2 min
  }
)

export default Api