import React from 'react'

import './movieSwiper.css'

// import modules styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';


const MovieSwiper = ({slides, slideChange}) => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor = {true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.movieId}>
          <img 
            src={slide.previewImg} 
            alt="Preview Image" 
            onClick={()=>slideChange(slide.movieId)} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieSwiper;
