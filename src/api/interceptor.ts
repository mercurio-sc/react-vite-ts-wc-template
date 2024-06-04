import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

/**
 * Axios instance created by Web Component to avoid
 * overriding the global Axios instance.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

/**
 * Interceptor for modifying the request configuration before it is sent.
 * @param config The request configuration.
 * @returns The modified request configuration.
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config // Modify this function to add headers, query params, etc.
);

/**
 * Interceptor for modifying the response data before it is resolved.
 * @param response The response data.
 * @returns The modified response data.
 */
axiosInstance.interceptors.response.use((response: AxiosResponse) => response); // Modify this function to handle errors, etc.
