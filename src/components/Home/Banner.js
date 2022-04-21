import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Autoplay, Navigation, Pagination } from 'swiper';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Banner.css";

import banner1 from '../../img/banner/banner1.jpg';
import banner2 from '../../img/banner/banner2.jpg';
import banner3 from '../../img/banner/banner3.jpg';

SwiperCore.use([Navigation, Pagination,Autoplay, Keyboard]);

const Banner = () => {
    return (
        <div className=''>
        
        <Swiper
        navigation={true}
        pagination={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper height"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
    
      </Swiper>
        </div>
        
    );
};

export default Banner;