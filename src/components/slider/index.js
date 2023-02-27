//components/slider/index.js
import React from 'react';
import { SliderContainer } from './style';
import "swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper"
import "swiper/css";
import "swiper/css/pagination"


function Slider (props) {
  const { bannerList } = props;

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false}}
            pagination={{ el: '.swiper-pagination', clickable:true}}
          >
            {
              bannerList.map((slider, index) => (
                <SwiperSlide key={index}>
                  <img src={ slider.imageUrl} width="100%" height="100%" alt='suggest'/>
                </SwiperSlide>

            ))}
          </Swiper>
          
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  );
}

export default React.memo (Slider);