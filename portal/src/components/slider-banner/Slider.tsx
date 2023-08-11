'use client';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="/banner.jpg" alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src="/banner.jpg" alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner.jpg" alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/banner.jpg" alt="" style={{ width: "100%" }} />
      </SwiperSlide> */}
    </Swiper>
  )
}

export default Slider
