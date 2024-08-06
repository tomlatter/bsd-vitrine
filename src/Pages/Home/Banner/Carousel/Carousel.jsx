import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

const Carousel = () => {
    return (
      <>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            speed={800}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/1.jpg"
                alt="football"
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/2.jpg"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/3.jpg"
                alt="tennis"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/4.jpg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/5.jpg"
                alt="rugby"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/6.jpg"
                alt="baseball"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="/src/assets/photos/carousel/7.jpg"
                alt="baseball"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default Carousel;