import axios from "axios";

export const client = axios.create({ baseURL: "https://api.thecatapi.com/v1" });
