import React, { useEffect, useState } from 'react';
import Cart from './Carts/Cart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import useScholarships from '../../Hooks/useScholarships';


const Scholar = () => {
 const {topScholarships,isLoading}=useScholarships();

  if (isLoading) {
  return <p className="text-center py-10">Loading scholarships...</p>;
}

    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

{topScholarships.map(item => <SwiperSlide key={item._id}><Cart item={item}></Cart></SwiperSlide>)}

      </Swiper>
      
    );
};

export default Scholar;