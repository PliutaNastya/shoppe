import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Pagination } from 'swiper/modules'
import { EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { slidesContent } from '../utils'

export default function ParallaxSlider() {
	return (
		<Swiper
			modules={[Parallax, Pagination, EffectFade]}
			effect="fade"
			speed={600}
			parallax={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
		>
			{
				slidesContent.map(slide => (
					<SwiperSlide key={slide.id}>
						<div className="slide-bg">
							<img src={slide.image} alt={slide.title} />
						</div>
						<div className="slide-content">
							<h2 className="slide-title" data-swiper-parallax="-300">
								{slide.title}
							</h2>
							<p className="slide-price" data-swiper-parallax="-200">
								{slide.price}
							</p>
							<button type="button" className='slide-button'>View Product</button>
						</div>
					</SwiperSlide>
				))
			}
		</Swiper>
	);
}
