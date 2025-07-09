import { createBrowserRouter } from "react-router"
import frontRoutes from "@/routes/frontRoutes"
import MainLayout from "@/components/layout/MainLayout"
import Home from "@/pages/home/Home"
import Shop from "@/pages/shop/Shop"
import ShopFullWidth from "@/pages/shop/shop-types/ShopFullWidth"
import ShopCategory from "@/pages/shop/shop-types/ShopCategory"
import ShopCarousel from "@/pages/shop/shop-types/ShopCarousel"
import MasonryGrid from "@/pages/shop/shop-types/MasonryGrid"
import ProductDetails from "@/pages/shop/product/ProductDetails"
import Cart from "@/pages/shop/shop-pages/Cart"
import Checkout from "@/pages/shop/shop-pages/Checkout"
import OrderConfirmation from "@/pages/shop/shop-pages/OrderConfirmation"
import OrderTracking from "@/pages/shop/shop-pages/OrderTracking"
import Wishlist from "@/pages/shop/shop-pages/Wishlist"
import Blog from "@/pages/blog/Blog"
import BlogPost from "@/pages/blog/posts/BlogPost"
import OurStory from "@/pages/our-story/OurStory"
import ContactUs from "@/pages/contact/ContactUs"
import PrivacyPolicy from "@/pages/privacy-policy/PrivacyPolicy"
import MyAccount from "@/pages/account/MyAccount"
import Dashboard from "@/pages/account/components/Dashboard"
import Orders from "@/pages/account/components/Orders"
import ViewOrder from "@/pages/account/components/ViewOrder"
import Downloads from "@/pages/account/components/Downloads"
import Addresses from "@/pages/account/components/Addresses"
import Details from "@/pages/account/components/Details"
import LogOut from "@/pages/account/components/LogOut"
import SignIn from "@/pages/account/SignIn"
import ResetPassword from "@/pages/account/ResetPassword"
import NotFound from "@/pages/errors/NotFound"
import ErrorPage from "@/pages/errors/ErrorPage"

export const routes = [
	{
		path: frontRoutes.navigate.home,
		Component: MainLayout,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: frontRoutes.pages.shop.index.slice(1),
				Component: Shop,
				children: [
					{
						path: frontRoutes.pages.shop.fullWidth,
						Component: ShopFullWidth,
					},
					{
						path: frontRoutes.pages.shop.category,
						Component: ShopCategory,
					},
					{
						path: frontRoutes.pages.shop.carousel,
						Component: ShopCarousel,
					},
					{
						path: frontRoutes.pages.shop.masonry,
						Component: MasonryGrid,
					},
				],
			},
			{
				path: "product/:id",
				Component: ProductDetails,
			},
			{
				path: frontRoutes.navigate.cart.slice(1),
				Component: Cart,
			},
			{
				path: frontRoutes.navigate.checkout.slice(1),
				Component: Checkout,
			},
			{
				path: frontRoutes.navigate.orderConfirmation.slice(1),
				Component: OrderConfirmation,
			},
			{
				path: frontRoutes.navigate.orderTracking.slice(1),
				Component: OrderTracking,
			},
			{
				path: frontRoutes.navigate.wishlist.slice(1),
				Component: Wishlist,
			},
			{
				path: frontRoutes.pages.blog.index.slice(1),
				Component: Blog,
			},
			{
				path: frontRoutes.pages.blog.post(":id").slice(1),
				Component: BlogPost,
			},
			{
				path: frontRoutes.navigate.ourStory.slice(1),
				Component: OurStory,
			},
			{
				path: frontRoutes.navigate.contact.slice(1),
				Component: ContactUs,
			},
			{
				path: frontRoutes.navigate.privacyPolicy.slice(1),
				Component: PrivacyPolicy,
			},
			{
				path: frontRoutes.pages.account.index.slice(1),
				Component: MyAccount,
				children: [
					{
						path: frontRoutes.pages.account.dashboard,
						Component: Dashboard,
					},
					{
						path: frontRoutes.pages.account.orders,
						Component: Orders,
					},
					{
						path: `orders/:id`,
						Component: ViewOrder,
					},
					{
						path: frontRoutes.pages.account.downloads,
						Component: Downloads,
					},
					{
						path: frontRoutes.pages.account.addresses,
						Component: Addresses,
					},
					{
						path: frontRoutes.pages.account.accountDetails,
						Component: Details,
					},
					{
						path: frontRoutes.pages.account.logout,
						Component: LogOut,
					},
				],
			},
			{
				path: frontRoutes.navigate.signIn.slice(1),
				Component: SignIn,
			},
			{
				path: frontRoutes.navigate.resetPassword.slice(1),
				Component: ResetPassword,
			},
			{
				path: frontRoutes.navigate.notFound,
				Component: NotFound,
			},
		],
	},
]

const router = createBrowserRouter(routes)

export default router