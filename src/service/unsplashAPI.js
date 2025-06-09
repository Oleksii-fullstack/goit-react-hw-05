import axios from "axios";

export const getPhotos = async (query = "", page = 1) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8Fbg8XV6Im7lJs0f1VbzghdLqBqqzYRxKYWlEuiAB6o",
      AcceptVersion: "v1",
    },
    params: {
      query,
      page,
      per_page: 10,
    },
  });
  return data;
};
