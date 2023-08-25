import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
const API_KEY =
  "live_M7TrpdgO5VbCT68PiDoZreuuP1DWhiTt0jlWAZSKkjfjmL7DK44NdLcwKXTBLLwB";

axios.defaults.params = { api_key: API_KEY };

export const CatServices = {
  getCat: async () => {
    try {
      const response = await axios.get(`/images/search`);
      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  getFavorite: async (limit: string = "") => {
    try {
      const response = await axios.get(`/favourites${limit}`);
      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  getVotes: async () => {
    try {
      const response = await axios.get("/votes");
      const data = response.data;
      console.log(data);

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  catVotes: async (image_id: string, value: number) => {
    try {
      const response = await axios.post("/votes", { image_id, value });
      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },

  addToFavorite: async (image_id: string) => {
    try {
      const response = await axios.post("/favourites", { image_id });
      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  delFromFavorite: async (image_id: number) => {
    try {
      const response = await axios.delete(`/favourites/${image_id}`);
      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
};
