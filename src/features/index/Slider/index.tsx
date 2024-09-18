"use client";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMedia } from "react-use";

const slides = [
  {
    img: "/assets/static/ava1.jpg",
    price: "$250.00",
    title: "Tiffany",
  },
  {
    img: "/assets/static/ava2.jpg",
    price: "$969.00",
    title: "Jacquemus Grey 'Camiteso' Oversize Coat",
  },
  {
    img: "/assets/static/ava3.jpg",
    price: "$1,070.00",
    title: "MARNI Striped Mohair-Blend Sweater",
  },
  {
    img: "/assets/static/ava4.jpg",
    price: "$990.00",
    title: "Maison Margiela Tabi mary-jane shoes",
  },
  {
    img: "/assets/static/ava5.jpg",
    price: "$2,499.00",
    title: "LOEWE Curve oversized acetate sunglasses",
  },

  {
    img: "/assets/static/ava1.jpg",
    price: "$250.00",
    title: "Tiffany",
  },
  {
    img: "/assets/static/ava2.jpg",
    price: "$969.00",
    title: "Jacquemus Grey 'Camiteso' Oversize Coat",
  },
  {
    img: "/assets/static/ava3.jpg",
    price: "$1,070.00",
    title: "MARNI Striped Mohair-Blend Sweater",
  },
  {
    img: "/assets/static/ava4.jpg",
    price: "$990.00",
    title: "Maison Margiela Tabi mary-jane shoes",
  },
  {
    img: "/assets/static/ava5.jpg",
    price: "$2,499.00",
    title: "LOEWE Curve oversized acetate sunglasses",
  },
];

export const Slider = () => {
  const isMobileBreakpoint = useMedia("(max-width: 640px)", true);

  return (
    <div className="mt-[4.5rem] sm:mt-[7rem] flex flex-col items-center overflow-hidden">
      <div className="flex flex-col items-stretch self-stretch -mx-[19.5rem] z-0 py-[2rem]">
        <Swiper
          className="w-full h-[23rem] min-[640px]:h-[57.1rem]"
          modules={[Autoplay, EffectCoverflow]}
          autoplay={{ pauseOnMouseEnter: false }}
          effect="coverflow"
          slidesPerView={5}
          loop={true}
          watchSlidesProgress={true}
          maxBackfaceHiddenSlides={0}
          coverflowEffect={{
            rotate: 0,
            stretch: -150,
            scale: 0.8,
            depth: 400,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              virtualIndex={index}
              className="flex flex-col items-center select-none"
              style={{ display: "flex" }}
            >
              {isMobileBreakpoint ? (
                <div className="mt-[0.5rem] flex w-[15rem] h-[22rem] rounded-[2rem] overflow-hidden shadow-grid-item bg-white">
                  <img
                    className="backface-hidden duration-200 opacity-100 w-full h-full object-cover"
                    alt={slide.title}
                    src={slide.img}
                  />
                </div>
              ) : (
                <div className="flex flex-col w-[29rem]">
                  <div className="flex h-[45rem] rounded-[3rem] overflow-hidden shadow-grid-item bg-white">
                    <img
                      className="backface-hidden duration-200 opacity-100 w-full h-full object-cover"
                      alt={slide.title}
                      src={slide.img}
                    />
                  </div>
                  <div className="flex-col mt-[2rem] font-inter text-[2.7rem] leading-[120%]">
                    <p className="font-medium opacity-60 line-clamp-2">
                      {slide.title}
                    </p>
                    <p className="mt-[1rem] opacity-20">{slide.price}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pointer-events-none w-[25rem] h-[50.93rem] py-[1.13rem] px-[1.25rem] sm:w-[30rem] sm:h-[61.2rem] sm:py-[1.35rem] sm:px-[1.5rem] hidden sm:flex absolute">
        <img src="/assets/static/screen_profile.Bb2WNp0f.png" alt="" />
        <div className="absolute left-1 right-1 top-1 bottom-1 bg-black rounded-[5rem] duration-600 ease-out-quad opacity-0" />
        <img
          className="absolute left-0 right-0 top-0 bottom-0 object-cover"
          src="/assets/static/iphone_frame.CqXg1c0v.png"
          alt=""
        />
      </div>
    </div>
  );
};
