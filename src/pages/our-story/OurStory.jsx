import about01Img from '@/assets/img/about/01.jpg'
import about02Img from '@/assets/img/about/02.jpg'

function OurStory() {
	return (
		<article className="about-us">
			<div className="about-us__container">
				<h1 className="about-us__title title">About</h1>
				<p className="about-us__label"><strong>Who we are and why we do what we do!</strong></p>
				<div className="text">
					<p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
				</div>
				<h2 className='subtitle'>Top trends</h2>
				<div className="about-us__picture">
					<img src={about01Img} alt="A woman's hand delicately holds a pearl necklace." />
				</div>
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
				</div>
				<ul>
					<li>consectetur adipiscing elit. Aliquam placerat</li>
					<li>Lorem ipsum dolor sit amet consectetur </li>
				</ul>
				<h2 className='subtitle'>Produced with care</h2>
				<div className="about-us__picture">
					<img src={about02Img} alt="A woman's hand holds a stylish watch alongside a delicate bracelet." />
				</div>
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
				</div>
			</div>
		</article>
	)
}

export default OurStory