import api from "@/api/api"
import ProductCard from "@/components/ProductCard"
import Spinner from "@/components/Spinner"
import useFetchApi from "@/hooks/useFetchApi"
import { useEffect } from "react"

function LatestProductsList() {
	const { data, loading, error, fetchData } = useFetchApi()

	useEffect(() => {
		fetchData(api.getLatestProducts)
	}, [fetchData])

	return (
		<ul className="products">
			{loading && <Spinner />}
			{error && <div>Error: {error}</div>}
			{
				data.map(product => (
					<ProductCard key={product._id} id={product._id} image={product.images[0]} title={product.title} price={product.price.toFixed(2)} />
				))
			}
		</ul>
	)
}

export default LatestProductsList