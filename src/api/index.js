import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://77.120.241.80:8811/api/",
});

export const usersApi = {
  // Get all users
  get: () => {
    return axiosInstance.get(`users`).then((response) => response.data);
  },
  // Delete user
  delete: (id) => {
    return axiosInstance.delete(`user/${id}`).then((res) => res.data);
  },
  // Create new user
  post: (data) => {
    return axiosInstance.post(`users`, { ...data });
  },
  // Update user
  put: (id, data) => {
    return axiosInstance.put(`user/${id}`, { ...data });
  },
};
