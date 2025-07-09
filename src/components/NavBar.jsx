import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router"
import Icon from "./Icon"
import { navbarMenu } from "./utils"

function NavBar({ isOpen, onCloseMenu }) {
	// useState для айді пункту меню, який має підменю і якщо воно закрите, то null
	const [openMenuId, setOpenMenuId] = useState(null)
	// Зберігаю посилання на меню (потрібно для того, щоб закривати підменю при кліку десь поза його межами)
	const menuRef = useRef(null)

	// useEffect, всередині якого логіка для закриття підменю при кліку будь де, окрім самого блоку з меню
	useEffect(() => {
		const handleClickOutside = (e) => {
			if(menuRef.current && !menuRef.current.contains(e.target)) setOpenMenuId(null)
		}
		
		document.addEventListener('click', handleClickOutside)

		return () => document.removeEventListener('click', handleClickOutside)
	})

	// useEffect для додавання класу для боді, коли бургер меню відкрите
	useEffect(() => {
		isOpen ? document.body.classList.add('body--no-scroll') : document.body.classList.remove('body--no-scroll')
	}, [isOpen])

	const toggleSubmenu = (id) => {
		setOpenMenuId(prev => prev === id ? null : id)
	}
	const handleClickToggleSubmenu = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		toggleSubmenu(id);
	}

	return (
		// Навбар
		<nav ref={menuRef} className={`menu ${isOpen ? 'menu--open' : ''}`}>
			{/* Головні пункти меню */}
			<ul className="menu__list">
				{/* Проходимось по списку navbarMenu та виводимо основні пункти меню */}
				{navbarMenu.map((item) => (
					// 1-ий рівень li (по кліку буде закриватись бургер меню)
					<li key={item.id} className="menu__item" onClick={onCloseMenu}>
						{/* Посилання на головний пункт меню, якщо активне то додасться клас */}
						<NavLink to={item.path} className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"} end>
							{item.title}
						</NavLink>
						{/* Якщо у об'єкта є властивість children, то виводжу кнопку зі стрілкою, по кліку на яку випаде підменю */}
						{item.children && (<button type="button" className={openMenuId ? 'menu__icon menu__icon--active' : 'menu__icon'} onClick={(e) => handleClickToggleSubmenu(e, item.id)}>
							<Icon size={15} name='next-arrow-icon' />
						</button>)}
						{/* Якщо у об'єкта є властивість children, то виводимо це підменю */}
						{item.children && (
							// Новий список для підменю
							<ul className={openMenuId ? 'submenu submenu--active' : 'submenu'}>
								{/* Проходимось по масиву з children головного списку */}
								{item.children.map((section, index) => (
									// 2-ий рівень li
									<li key={index} className="submenu__section">
										{/* Якщо є назва секції, то виводимо її всередині li в span, якщо не буде, то нічого не виведемо */}
										{section.section && (
											<span className="submenu__title">{section.section}</span>
										)}
										{/* Всередині li створюю ще один список з пунктів підменю */}
										<ul className="submenu__items">
											{/* Проходимось по масиву з списку підпунктів */}
											{section.items.map((child, index) => (
												// 3-ий рівень li
												<li key={index} className="submenu__item">
													{/* Самі посилання */}
													<NavLink to={child.path} className={({ isActive }) => isActive ? "submenu__link submenu__link--active" : "submenu__link"} end onClick={() => setOpenMenuId(null)}>
														{child.title}
													</NavLink>
												</li>
											))}
										</ul>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
