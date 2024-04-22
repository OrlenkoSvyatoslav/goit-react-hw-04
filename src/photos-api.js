import axios from "axios";

const API_KEY = "VN4nbUP_hfzbJNwtE2nXDUOucJUNV3xTi83bBU-LB08";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchPhotoByQuary = async (query, currentPage) => {
  const response = await axios.get("", {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return response.data.hits;
};
