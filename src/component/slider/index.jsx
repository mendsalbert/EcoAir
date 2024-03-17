"use client";
import ProtoTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

function Slider({ children, ...props }) {
  return (
    <Swiper {...props} modules={[Autoplay, Pagination, Navigation, EffectFade]}>
      {children.map((child, index) => (
        <SwiperSlide key={index + "swiper"}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  children: ProtoTypes.node,
};

export default Slider;
