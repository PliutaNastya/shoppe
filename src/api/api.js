import axios from "axios";

const API_URL = "https://shoppe-backend-519h.onrender.com/api"

export const fetchLatestProducts = () => {
	return axios.get(`${API_URL}/products?sort=latest&limit=6`)
}

export const fetchAllProducts = () => {
	return axios.get(`${API_URL}/products`)
}
 