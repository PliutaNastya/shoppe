import frontRoutes from "@/routes/frontRoutes"
import { Link} from "react-router"

function NotFound() {
	return (
		<section className="not-found">
			<div className="not-found__container">
				<h1 className="title">404 ERROR</h1>
				<p>This page not found; <br />
					back to home and start again</p>
				<Link to={frontRoutes.navigate.home} className="button">HOMEPAGE</Link>
			</div>
		</section>
	)
}

export default NotFound