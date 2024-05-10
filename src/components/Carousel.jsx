
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../assets/image/slide1.jpg"
import image2 from "../assets/image/slide2.jpg"
import image3 from "../assets/image/slide3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
const Carousel = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
          <Swiper
            spaceBetween={30}
            
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slider image={image1} text="Join us in the fight against hunger! Your donation of food can provide hope and sustenance to those facing hunger. Together, we can make a meaningful difference."/>
            </SwiperSlide>
            <SwiperSlide>
              <Slider image={image2} text="Make a difference today by donating food to those in need. Your generosity can bring smiles to hungry faces and nourishment to empty stomachs. let's create a world where no one goes to bed hungry."/>
            </SwiperSlide>
            <SwiperSlide>
              <Slider image={image3} text="Every meal donated brings us closer to a hunger-free world. Join our food donation campaign today and help us feed families in need. Together, let's turn compassion into action."/>
            </SwiperSlide>
          </Swiper>
        </div>
      );
};

export default Carousel;