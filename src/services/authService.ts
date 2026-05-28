import api from "./api";
import type { AuthUser, LoginCredentials, RegisterUserPayload } from "../types/auth";

const authService = {
  // 1. Register: /auth/register වෙනුවට /api/v1/auth/register
  registerUser: async (payload: RegisterUserPayload) => {
    const response = await api.post("/api/v1/auth/register", payload);
    return response.data;
  },

  // 2. Login: /auth/login වෙනුවට /api/v1/auth/login
  login: async (credentials: LoginCredentials) => {
    const response = await api.post("/api/v1/auth/login", credentials);
    return response.data;
  },

  getProfile: async (): Promise<AuthUser> => {
    const response = await api.get("/api/v1/auth/profile");
    return response.data?.data ?? response.data;
  },

  registerAdmin: async (payload: RegisterUserPayload) => {
    const response = await api.post("/api/v1/auth/admin/register", payload);
    return response.data;
  },

  registerManager: async (payload: RegisterUserPayload) => {
    const response = await api.post("/api/v1/auth/manager/register", payload);
    return response.data;
  },

  getAdminUsers: async () => {
    const response = await api.get("/api/v1/auth/admin/users");
    return response.data;
  },
};

export default authService;