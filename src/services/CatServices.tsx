import { ICat } from "@/ts/interfaces";
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
      return error;
    }
  },
  getGalleryCat: async (...rest: any) => {
    try {
      const response = await axios.get(
        `/images/search?limit=${rest[0].limit}&order=${
          rest[0].order
        }&breed_ids=${
          rest[0].breed === "none" ? "" : rest[0].breed
        }&mime_types=${rest[0].type}&page=${rest[1]?.page}`
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
      return error;
    }
  },
  getFavorite: async (limit = 15, page = 0) => {
    try {
      const response = await axios.get(
        `/favourites?limit=${limit}&page=${page}`
      );
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },
  getVotes: async (voting: number, limit = 15, page = 0) => {
    try {
      const response = await axios.get("/votes");
      const data = response.data;
      const votedCats = data
        .filter((vote: ICat) => vote.value === voting)
        .slice(page, limit);

      return votedCats;
    } catch (error: any) {
      return error;
    }
  },

  getBreeds: async () => {
    try {
      const res = await axios.get(`/breeds`);
      const data = res.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },
  getUpload: async (limit = 15, page = 0) => {
    try {
      const res = await axios.get(`/images?limit=${limit}&page=${page}`);
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
      return error;
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
      return error;
    }
  },
  searchBreeds: async (
    breed = "all breeds",
    limit = 15,
    page = 0,
    order = "RANDOM"
  ) => {
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
          `/images/search?limit=${limit}&breed_ids=${allBreeds}&page=${page}&order=${order}`
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
            allBreeds: true,
          })
        );

        return newData;
      }
      const response = await axios.get(
        `/images/search?limit=${limit}&breed_ids=${breedItems.id}&page=${page}&order=ASC`
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
          allBreeds: false,
        })
      );
      return newData;
    } catch (error: any) {
      return error;
    }
  },

  catVotes: async (image_id: string, value: number) => {
    try {
      const response = await axios.post("/votes", { image_id, value });
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },

  addToFavorite: async (image_id: string) => {
    try {
      const response = await axios.post("/favourites", { image_id });
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
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
      return error;
    }
  },

  delFromFavorite: async (image_id: number) => {
    try {
      const response = await axios.delete(`/favourites/${image_id}`);
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },
  delUpload: async (image_id: string) => {
    try {
      const response = await axios.delete(`/images/${image_id}`);
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },

  loadImageAnalysis: async (image_id: number) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/${image_id}/analysis`
      );
      const data = response.data;

      return data;
    } catch (error: any) {
      return error;
    }
  },
};
