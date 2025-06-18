import React, { useEffect, useState } from 'react';
import Cart from './Carts/Cart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const Scholar = () => {
    const [scholar, setScholar] = useState([]);

    useEffect(() => {
        fetch("info.json") // Adjusted path
            .then(res => res.json())
            .then(data => setScholar(data))
            .catch(err => console.error("Error fetching data:", err)); // Added error handling
    }, []);

//  slider ---------------------------

  

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

{scholar.map(item => <SwiperSlide key={item.id}><Cart item={item}></Cart></SwiperSlide>)}

      </Swiper>
      
    );
};

export default Scholar;