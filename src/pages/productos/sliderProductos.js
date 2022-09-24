import React from "react";
import TitleTrece from "../../shared/title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { isPlainObject } from "@mui/utils";
import { Typography } from "@mui/material";

import { isMobile } from "../../helpers/isMobile";

const SliderProductos = (props) => {
  const { ItemCount = 3 } = props;
  return (
    <div>
      {props.dataProductos.map((obj) => (
        <>
          <Typography
            variant="h2"
            style={{ textAlign: "left", marginLeft: 60 }}
          >
            {obj.title}
          </Typography>
          <div
            style={{
              width: 40,
              borderRadius: 10,

              margin: "6px 60px",
              borderBottom: "6px solid #00C5B1",
            }}
          />
          <Slider count={ItemCount} data={obj.slider} />
        </>
      ))}
    </div>
  );
};

const Slider = ({ count, data }) => {
  console.log("COUNT ", count);
  return (
    <Swiper
      slidesPerView={isMobile ? 1 : count}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{
        marginBottom: 60,
        paddingRight: 42,
        paddingLeft: 42,
      }}
    >
      {data.map((obj) => (
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ItemSlider obj={obj} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ItemSlider = ({ obj }) => {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 40,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img src={obj.img} alt={isPlainObject.title} />

      <Typography
        variant="h3"
        style={{ fontFamily: "museoSansRoundedBold", color: "#5F6F81" }}
      >
        {obj.title}
      </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: "normal", marginBottom: 12 }}
      >
        {obj.sub}
      </Typography>

      <Typography
        variant="h5"
        style={{ fontWeight: "normal", marginBottom: 12 }}
      >
        {" "}
        {obj.txt}{" "}
      </Typography>

      {obj.types.map((text) => (
        <Typography variant="h6"> {text} </Typography>
      ))}
    </div>
  );
};

export default SliderProductos;
