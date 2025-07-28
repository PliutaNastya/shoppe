import ProductCard from "@/components/ProductCard"
import Spinner from "@/components/Spinner"
import { useGetLatestProductsQuery } from "@/services/shoppeApi"

function LatestProductsList() {
	// const { data, loading, error, fetchData } = useFetchApi()

	// useEffect(() => {
	// 	fetchData(api.getLatestProducts)
	// }, [fetchData])

	const { data = [], isLoading, error} = useGetLatestProductsQuery()

	return (
		<ul className="products">
			{isLoading && <Spinner />}
			{error && <div>Error: {error.message || 'Помилка завантаження'}</div>}
			{
				data.map(product => (
					<ProductCard key={product._id} id={product._id} image={product.images[0]} title={product.title} price={product.price.toFixed(2)} />
				))
			}
		</ul>
	)
}

export default LatestProductsList