import { Link } from "react-router"
import { footerMenu, instaPosts, socialsList } from "../utils"
import NewsletterForm from "../NewsletterForm"
import Icon from "../Icon"
import likeIcon from '@/assets/img/like.svg'
import commentIcon from '@/assets/img/comment.svg'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="subfooter">
					<h3 className="subfooter__title subtitle">Follow us on instagram</h3>
					<ul className="subfooter__list scrollable">
						{
							instaPosts.map(post => (
								<li className="subfooter__item" key={post.id}>
									<a href={post.href} target="_blank" className="subfooter__link">
										<img src={post.image} alt={post.alt} />
										<div className="subfooter__overlay">
											<div className="likes">
												<img src={likeIcon} alt="Like icon" />
												<span>{post.likes}</span>
											</div>
											<div className="comments">
												<img src={commentIcon} alt="Like icon" />
												<span>{post.comments}</span>
											</div>
										</div>
									</a>
								</li>
							))
						}
					</ul>
				</div>
				<div className="footer__body body-footer">
					<ul className="body-footer__menu">
						{
							footerMenu.map(item => (
								<li className="body-footer__menu-item" key={item.id}>
									<Link to={item.path}>{item.title}</Link>
								</li>
							))
						}
					</ul>
					<NewsletterForm />
					<p className="body-footer__copy">© 2025 Shoppe.</p>
					<ul className="socials">
						{
							socialsList.map(item => (
								<li className="socials__item" key={item.id}>
									<a href={item.href} className="socials__link" target="_blank">
										<Icon name={item.name}/>
									</a>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer