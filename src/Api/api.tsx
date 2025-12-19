import axios, { type AxiosResponse } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);



// -------------------------
// Types
// -------------------------
export interface ApiResponse<T = any> {
  status: string | boolean;
  message?: string;
  data?: T;
}

export interface UserData {
  name?: string;
  email: string;
  password?: string;
  provider_id?: string;
  avatar?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// export interface GoogleSigninData {
//   email: string;
//   provider_id: string;
//   name?: string;
//   avatar?: string;
// }

// -------------------------
// API FUNCTIONS
// -------------------------

export const createUser = async (userData: UserData): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}users`,
    userData
  );
  return response.data;
};

export const googleSignin = async (
): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}auth/google`,
  );
  return response.data;
};

export const loginUser = async (
  userData: LoginData
): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}login`,
    userData
  );
  return response.data;
};

export const RegisterUser = async (
  userData: UserData
): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}register`,
    userData
  );
  return response.data;
};

export const logoutUser = async (token?: string): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}logout`,
    {},
    {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }
  );
  return response.data;
};

export const getUsers = async (): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.get(
    `${API_BASE_URL}user`
  );
  return response.data;
};

export const forgotPassword = async (
  email: string
): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.post(
    `${API_BASE_URL}forgot-password`,
    { email }
  );
  return response.data;
};
