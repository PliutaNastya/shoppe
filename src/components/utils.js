import frontRoutes from "@/routes/frontRoutes"
import postImage01 from "@/assets/img/insta-posts/01.jpg"
import postImage02 from "@/assets/img/insta-posts/02.jpg"
import postImage03 from "@/assets/img/insta-posts/03.jpg"
import postImage04 from "@/assets/img/insta-posts/04.jpg"
import postImage05 from "@/assets/img/insta-posts/05.jpg"

export const navbarMenu = [
	{
		id: 1,
		path: frontRoutes.navigate.shop.index,
		title: "Shop",
		children: [
			{
				section: "Shop Types",
				items: [
					{
						path: frontRoutes.navigate.shop.fullWidth,
						title: "Shop full width",
					},
					{
						path: frontRoutes.navigate.shop.category,
						title: "Shop category",
					},
					{
						path: frontRoutes.navigate.shop.carousel,
						title: "Shop carousel",
					},
					{
						path: frontRoutes.navigate.shop.masonry,
						title: "Masonry grid",
					},
				],
			},
			{
				section: "Shop Pages",
				items: [
					{
						path: frontRoutes.navigate.cart,
						title: "Cart",
					},
					{
						path: frontRoutes.navigate.checkout,
						title: "Checkout",
					},
					{
						path: frontRoutes.navigate.account.index,
						title: "My account",
					},
					{
						path: frontRoutes.navigate.wishlist,
						title: "Wishlist",
					},
					{
						path: frontRoutes.navigate.orderTracking,
						title: "Order tracking",
					},
				],
			},
		],
	},
	{
		id: 2,
		path: frontRoutes.navigate.blog.index,
		title: "Blog",
	},
	{
		id: 3,
		path: frontRoutes.navigate.ourStory,
		title: "Our Story",
	},
]

export const instaPosts = [
	{
		id: 1,
		image: postImage01,
		alt: "Woman's hands with elegant watch and bracelet.",
		likes: 5212,
		comments: 44,
		href: 'https://www.instagram.com/'
	},
	{
		id: 2,
		image: postImage02,
		alt: "Woman wearing large gold hoop earrings.",
		likes: 5212,
		comments: 44,
		href: 'https://www.instagram.com/'
	},
	{
		id: 3,
		image: postImage03,
		alt: "Hands holding beaded necklace and pearl bracelet.",
		likes: 5212,
		comments: 44,
		href: 'https://www.instagram.com/'
	},
	{
		id: 4,
		image: postImage04,
		alt: "Profile of woman with statement earrings",
		likes: 5212,
		comments: 44,
		href: 'https://www.instagram.com/'
	},
	{
		id: 5,
		image: postImage05,
		alt: "Woman wearing large gold hoop earrings.",
		likes: 5212,
		comments: 44,
		href: 'https://www.instagram.com/'
	},
]

export const footerMenu = [
	{
		id: 1,
		path: frontRoutes.navigate.contact,
		title: "CONTACT",
	},
	{
		id: 2,
		path: frontRoutes.navigate.privacyPolicy,
		title: "TERMS OF SERVICES",
	},
	{
		id: 3,
		path: frontRoutes.navigate.cart,
		title: "SHIPPING AND RETURNS",
	},
]

export const socialsList = [
	{
		id: 1,
		name: 'linkedin-icon',
		href: 'www.linkedin.com/in/pliuta-anastasiia'
	},
	{
		id: 2,
		name: 'facebook-icon',
		href: 'https://www.facebook.com/anastasiia.pliuta'
	},
	{
		id: 3,
		name: 'insta-icon',
		href: 'https://www.instagram.com/koicheva'
	},
	{
		id: 4,
		name: 'twitter-icon',
		href: 'https://x.com/'
	},
]