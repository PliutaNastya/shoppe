const API_URL = "https://shoppe-backend-519h.onrender.com/api"

export default {
	getLatestProducts: `${API_URL}/products?sort=latest&limit=6`,
	getAllProducts: `${API_URL}/products`
}