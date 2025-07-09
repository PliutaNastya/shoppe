import Icon from "../components/Icon" 

const icons = [
	'arrow-icon',
	'cart-icon',
	'cross-icon',
	'eye-icon',
	'facebook-icon',
	'insta-icon',
	'mail-icon',
	'next-arrow-icon',
	'like-icon',
	'plus-icon',
	'linkedin-icon',
	'reply-icon',
	'paypal-icon',
	'search-icon',
	'star-empty-icon',
	'star-icon',
	'twitter-icon',
	'user-icon'
]

const IconsPreview = () => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
			{icons.map(name => (
				<div key={name} style={{ textAlign: 'center' }}>
					<Icon name={name} size={40} color="currentColor" />
					<div style={{ marginTop: '5px', fontSize: '12px' }}>{name}</div>
				</div>
			))}
		</div>
	)
}

export default IconsPreview