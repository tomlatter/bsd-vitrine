import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

// Import images
import img1 from '/photos/carousel/1.jpg';
import img2 from '/photos/carousel/2.jpg';
import img3 from '/photos/carousel/3.jpg';
import img4 from '/photos/carousel/4.jpg';
import img5 from '/photos/carousel/5.jpg';
import img6 from '/photos/carousel/6.jpg';
import img7 from '/photos/carousel/7.jpg';

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
              src={img1}
              alt="football"
              className="relative"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img2}
              alt="cricket"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img3}
              alt="tennis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img4}
              alt="badminton"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img5}
              alt="rugby"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img6}
              alt="baseball"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img7}
              alt="baseball"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
