import { Link } from "react-router"
import HeroSlider from "./components/HeroSlider"
import LatestProductsList from "./components/LatestProductsList"
import frontRoutes from "@/routes/frontRoutes"

function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero__container">
					<HeroSlider />
				</div>
			</section>
			<section className="latest-products">
				<div className="latest-products__container">
					<div className="block-header">
						<h2 className="title">Shop The Latest</h2>
						<Link to={frontRoutes.navigate.shop.index} className="link">View All</Link>
					</div>
					<LatestProductsList />
				</div>
			</section>
		</>

	)
}

export default Home