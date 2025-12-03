
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import ReviewsCart from "./ReviewsCart";
import useReviews from "../../../Hooks/useReviews";

const ReviewSlider = () => {
  
    const {reviews} =useReviews();
  return (
    <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper my-10"
      >
{reviews.map(review=><SwiperSlide key={review._id}><ReviewsCart review={review}></ReviewsCart></SwiperSlide>)}
      </Swiper>

    </>
  )
}

export default ReviewSlider