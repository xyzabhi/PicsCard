import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Yj_sltDbD8SGiO1y_W0sIs-zVAajuGoWRTMA-3vUyu8",
  },
});
