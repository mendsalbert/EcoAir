import React from "react";
import MobileMenu from "../../component/homeFive/MobileMenu";
import Menu from "../../component/homeFive/Menu";
import Hero from "../../component/homeFive/Hero";
import Features from "../../component/homeFive/Features";
import View from "../../component/homeFive/View";
import Widgets from "../../component/homeFive/Widgets";
import WhyUs from "../../component/homeFive/WhyUs";
import ResponsiveLayout from "../../component/homeFive/ResponsiveLayout";
import SliderCom from "../../component/homeFive/SliderCom";
import Accordion from "../../component/homeFive/Accordion";
import Pricing from "../../component/homeFive/Pricing";
import Footer from "../../component/homeFive/Footer";

function HomeFive() {
  return (
    <>
      <MobileMenu />
      <Menu />
      <Hero />
      <Features />
      <View />
      <Widgets />
      <WhyUs />
      <ResponsiveLayout />
      <SliderCom />
      <Accordion />
      <Pricing />
      <Footer />
    </>
  );
}

export default HomeFive;
