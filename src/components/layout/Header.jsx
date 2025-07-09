import { useState } from "react"
import Icon from "../Icon"
import Logo from "../Logo"
import NavBar from "../NavBar"

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const openMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}
	return (
		<header className="header">
			<div className="header__container">
				<Logo />
				<NavBar isOpen={isMenuOpen} onCloseMenu={closeMenu} />
				<div className="header__actions actions-header">
					<button type="button" className="actions-header__icon">
						<Icon name='search-icon' />
					</button>
					<button type="button" className="actions-header__icon">
						<Icon name='cart-icon' />
					</button>
					<button type="button" className="actions-header__icon">
						<Icon name='user-icon' />
					</button>
					<button type="button" className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={openMenu}><span></span></button>
				</div>
			</div>
		</header>
	)
}

export default Header