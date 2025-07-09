const Icon = ({ name, size = 21, color = 'currentColor' }) => {
	return (
		<svg width={size} height={size} color={color}>
			<use href={`/sprite.svg#${name}`} />
		</svg>
	)
}

export default Icon
 