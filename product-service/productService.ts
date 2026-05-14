import api from "../lib/api";

export const getProducts = async () => {
  const response = await api.get("/api/product");
  return response.data;
};
