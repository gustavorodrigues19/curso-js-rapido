import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const register = async (email, password) => {
  const response = await api.post("/auth/register", { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get("/bookings");
  return response.data;
};

export const createBooking = async (booking) => {
  const response = await api.post("/bookings", booking);
  return response.data;
};
