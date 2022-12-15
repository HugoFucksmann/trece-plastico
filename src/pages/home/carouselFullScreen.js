import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../assets/landing/Banner1.png";
import Banner2 from "../../assets/landing/Banner2.png";
import Banner3 from "../../assets/landing/Banner3.png";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { EffectFade, Mousewheel, Pagination } from "swiper";
import LandingTrece from "./landing";
import { isMobile } from "../../helpers/isMobile";

export default function CarouselFullScreen(props) {
  return (
    <div
      {...props}
      style={{
        height: isMobile ? "80vh" : "74vh",
        width: "100%",
      }}
    >
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Mousewheel, Pagination]}
        className="mySwiper"
      >
        {data.map((swipData, i) => (
          <SwiperSlide key={i}>
            <LandingTrece data={swipData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const data = [
  {
    img: Banner1,
    txtT: `Especialistas en Bolsas`,

    txt1: "Eleginos y lográ el mejor resultado en las tareas de todos los días",
  },
  {
    img: Banner2,
    txtT: `No mas derrames o bolsas rotas`,

    txt1: "Eleginos y logra el mejor resultado en tus tareas de todos los dias",
  },
  {
    img: Banner3,
    txtT: `No mas derrames o bolsas rotas`,

    txt1: "Eleginos y logra el mejor resultado en tus tareas de todos los dias",
  },
];
