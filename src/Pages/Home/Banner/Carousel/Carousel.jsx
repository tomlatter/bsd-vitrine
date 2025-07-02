import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

// Import images
import img8 from '/photos/carousel/8.jpg';
import img9 from '/photos/carousel/9.jpg';
import img10 from '/photos/carousel/10.jpg';
import img11 from '/photos/carousel/11.jpg';
import img12 from '/photos/carousel/12.jpg';
import img13 from '/photos/carousel/13.jpg';
import img14 from '/photos/carousel/14.jpg';
import img15 from '/photos/carousel/15.jpg';
import img16 from '/photos/carousel/16.jpg';
import img17 from '/photos/carousel/17.jpg';
import img18 from '/photos/carousel/18.jpg';
import img19 from '/photos/carousel/19.jpg';

const Carousel = () => {
  return (
    <>
      <div className="container mt-14">
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
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
              src={img8}
              alt="Cours de boxe - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img9}
              alt="Cours de bâton - Toulouse"
              className="relative"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img10}
              alt="Cours de bâton - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img11}
              alt="Cours de self-défense - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img12}
              alt="Cours de self-défense - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img13}
              alt="Cours de combat - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img14}
              alt="Cours de canne mousse - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img15}
              alt="Cours de canne mousse - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img16}
              alt="Cours de bâton - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img17}
              alt="Cours de self-défense - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img18}
              alt="Cours de self-défense - Toulouse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={img19}
              alt="Cours de combat au sol - Toulouse"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
