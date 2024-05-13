import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../public/slider.css"

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import slideImage1 from "../assets/image/slide1.jpg"
import slideImage2 from "../assets/image/slide2.jpg"
import slideImage3 from "../assets/image/slide3.jpg"
import slideImage4 from "../assets/image/slide4.jpg"
import slideImage5 from "../assets/image/slide5.jpg"
import slideImage6 from "../assets/image/slide6.jpg"
const Carousel = () => {
    return (
        <div className="py-16 lg:py-20">
           <div className="container">
      <h1 className="heading"></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay,Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slideImage1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImage6} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
        </div>
    );
};

export default Carousel;