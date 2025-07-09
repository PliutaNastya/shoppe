import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import IconsPreview from "@/utils/IconsPreview"

function MainLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
				<IconsPreview />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout