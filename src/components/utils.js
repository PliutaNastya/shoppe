import frontRoutes from "@/routes/frontRoutes";

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
];
