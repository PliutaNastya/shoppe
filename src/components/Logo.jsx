import frontRoutes from "@/routes/frontRoutes"
import { Link, useLocation } from "react-router"

function Logo() {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	return isHomePage ?
		<div className="logo">SHOPPE</div>
		:
		<Link to={frontRoutes.navigate.home} className="logo">SHOPPE</Link>
}

export default Logo