import frontRoutes from "@/routes/frontRoutes"
import { Link } from "react-router"

function ProductCard({ id, image, title, price }) {
	return (
		<li className="product">
			<Link to={frontRoutes.navigate.product.details(id)} className="product__link">
				<div className="product__image">
					<img src={image} alt={title} />
				</div>
				<div className="product__content">
					<h3 className="product__title">{title}</h3>
					<p className="product__price">$ {price}</p>
				</div>
			</Link>
		</li>
	)
}

export default ProductCard