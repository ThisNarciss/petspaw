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
  getGalleryCat: async (...rest: any) => {
    try {
      const response = await axios.get(
        `/images/search?limit=${rest[0].limit}&order=${rest[0].order}&breed_ids=${rest[0].breed}&mime_types=${rest[0].type}`
      );
      const data = response.data;

      const newData = data.map(
        (item: { url: string; id: string; breeds?: any[] }) => ({
          image: { url: item.url },
          id: item.id,
          breeds: item.breeds,
        })
      );

      return newData;
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

  getBreeds: async () => {
    try {
      const res = await axios.get(`/breeds`);
      const data = res.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  getUpload: async (limit = "15") => {
    try {
      const res = await axios.get(`/images/?limit=${limit}`);
      const data = res.data;

      const newData = data.map(
        (item: { url: string; id: string; breeds?: any[] }) => ({
          image: { url: item.url },
          id: item.id,
          breeds: item.breeds,
        })
      );

      return newData;
    } catch (error: any) {
      return error.message;
    }
  },

  getBreedsById: async (id: string | string[] | undefined) => {
    try {
      const response = await axios.get(
        `/images/search?limit=5&breed_ids=${id}`
      );

      const data = response.data;

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  searchBreeds: async (breed: string = "", limit: string = "15") => {
    try {
      const res = await axios.get(`/breeds`);

      const breedItems = res.data.find((item: { name: string; id: string }) =>
        item.name.toLowerCase().includes(breed.toLowerCase())
      );

      if (!breedItems) {
        const allBreeds = res.data
          .map((item: { name: string; id: string }) => item.id)
          .join(",");

        const response = await axios.get(
          `/images/search?limit=${limit}&breed_ids=${allBreeds}`
        );

        const data = response.data;
        const newData = data.map(
          (item: {
            url: string;
            id: string;
            breeds: { name: string; id: string }[];
          }) => ({
            image: { url: item.url },
            id: item.id,
            breeds: { name: item.breeds[0].name, id: item.breeds[0].id },
          })
        );

        return newData;
      }
      const response = await axios.get(
        `/images/search?limit=${limit}&breed_ids=${breedItems.id}`
      );

      const data = response.data;

      const newData = data.map(
        (item: {
          url: string;
          id: string;
          breeds: { name: string; id: string }[];
        }) => ({
          image: { url: item.url },
          id: item.id,
          breeds: { name: item.breeds[0].name, id: item.breeds[0].id },
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

  uploadImage: async (image: FormData) => {
    try {
      const response = await axios.post("/images/upload", image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
