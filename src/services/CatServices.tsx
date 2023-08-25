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

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  searchBreeds: async (breed: string) => {
    try {
      const res = await axios.get(`/breeds`);

      const breedItem = res.data.find((item: { name: string }) =>
        item.name.includes(breed)
      );

      const response = await axios.get(
        `/images/search?limit=15&breed_ids=${breedItem.id}`
      );

      const data = response.data;

      const newData = data.map(
        (item: { url: string; id: string; breeds: { name: string }[] }) => ({
          image: { url: item.url },
          id: item.id,
          breeds: { name: item.breeds[0].name },
        })
      );
      return newData;
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
