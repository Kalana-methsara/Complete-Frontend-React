import api from "./api";
import type { Blog, PaginatedResponse } from "../types";

// URL වලට /api/v1/ කොටස එකතු කරන ලදී
export const createBlog = async (data: FormData) => {
  const res = await api.post("/api/v1/blog/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAllBlog = async (
  page: number,
  limit: number,
): Promise<PaginatedResponse<Blog>> => {
  const res = await api.get(`/api/v1/blog?page=${page}&limit=${limit}`);
  return res.data;
};

export const getMyBlog = async (
  page: number,
  limit: number,
): Promise<PaginatedResponse<Blog>> => {
  const res = await api.get(`/api/v1/blog/me?page=${page}&limit=${limit}`);
  return res.data;
};

export const updateBlog = async (id: string, data: FormData) => {
  const res = await api.put(`/api/v1/blog/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await api.delete(`/api/v1/blog/${id}`);
  return res.data;
};