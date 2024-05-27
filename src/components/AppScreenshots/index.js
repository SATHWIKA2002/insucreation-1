import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

const screenshots = [
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/AppScreenShots/1",
    altText: "screenshot1",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/AppScreenShots/2",
    altText: "screenshot2",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/AppScreenShots/3",
    altText: "screenshot3",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/AppScreenShots/4",
    altText: "screenshot4",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/AppScreenShots/5",
    altText: "screenshot5",
  },
];

const AppScreenshots = () => {
  return (
    <div className="app-screenshots">
      <h1>App Screenshots</h1>
      <img
        src="https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/InsuCreation/Decor/green-steps"
        alt="greenStepsDecor"
        className="app-screenshots-decor"
      />
      <p>
        Saepe quo labore aenean dictumst expedita commodi auctor, nisl, lorem
        iusto feugiat nemo reiciendis laboris.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        centeredSlides={false}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {screenshots.map((screenshot) => (
          <SwiperSlide key={screenshot.altText}>
            <img
              src={screenshot.imgUrl}
              alt={screenshot.altText}
              className="screenshot-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppScreenshots;
