const frontRoutes = {
	pages: {
		home: '/',
		shop: {
			index: '/shop',
			fullWidth: 'full-width',
			category: 'category',
			carousel: 'carousel',
			masonry: 'masonry',
		},
		product: {
			details: (id) => `/product/${id}`,
		},
		cart: '/cart',
		checkout: '/checkout',
		orderConfirmation: '/order-confirmation',
		orderTracking: '/order-tracking',
		wishlist: '/wishlist',
		blog: {
			index: '/blog',
			post: (id) => `/blog/${id}`,
		},
		ourStory: '/our-story',
		contact: '/contact',
		privacyPolicy: '/privacy-policy',
		account: {
			index: '/account',
			dashboard: 'dashboard',
			orders: 'orders',
			orderDetails: (id) => `/account/orders/${id}`,
			downloads: 'downloads',
			addresses: 'addresses',
			accountDetails: 'account-details',
			logout: 'log-out',
		},
		signIn: '/sign-in',
		resetPassword: '/reset-password',
		notFound: '*',
	},

	navigate: {
		home: '/',
		shop: {
			index: '/shop',
			fullWidth: '/shop/full-width',
			withSidebar: '/shop/with-sidebar',
			category: '/shop/category',
			carousel: '/shop/carousel',
			masonry: '/shop/masonry',
		},
		product: {
			details: (id) => `/product/${id}`,
		},
		cart: '/cart',
		checkout: '/checkout',
		orderConfirmation: '/order-confirmation',
		orderTracking: '/order-tracking',
		wishlist: '/wishlist',
		blog: {
			index: '/blog',
			post: (id) => `/blog/${id}`,
		},
		ourStory: '/our-story',
		contact: '/contact',
		privacyPolicy: '/privacy-policy',
		account: {
			index: '/account',
			dashboard: '/account/dashboard',
			orders: '/account/orders',
			orderDetails: (id) => `/account/orders/${id}`,
			downloads: '/account/downloads',
			addresses: '/account/addresses',
			accountDetails: '/account/account-details',
			logout: '/account/log-out',
		},
		signIn: '/sign-in',
		resetPassword: '/reset-password',
		notFound: '*',
	},
}

export default frontRoutes
 