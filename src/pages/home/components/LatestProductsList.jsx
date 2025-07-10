import { fetchLatestProducts } from "@/api/api"
import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react"

function LatestProductsList() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetchLatestProducts()
			.then(result => setProducts(result.data))
			.catch(error => console.log(error))
	}, [])
	return (
		<ul className="products">
			{
				products.map(product => (
					<ProductCard key={product._id} id={product._id} image={product.images[0]} title={product.title} price={product.price.toFixed(2)} />
				))
			}
		</ul>
	)
}

export default LatestProductsList