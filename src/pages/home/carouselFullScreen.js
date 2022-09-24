import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { EffectFade, Mousewheel, Pagination } from "swiper";
import LandingTrece from "./landing";
import { TreceContext } from "../../context/treceContext";
import { isMobile } from "../../helpers/isMobile";

export default function CarouselFullScreen(props) {
  const { landingData } = useContext(TreceContext);

  return (
    <div
      {...props}
      style={{
        height: isMobile ? "80vh" : "100vh",
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
        {landingData.map((swipData, i) => (
          <SwiperSlide key={i}>
            <LandingTrece data={swipData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
