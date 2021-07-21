import React from "react";
import "../styles/Global.css";
import GreenNav from "../components/GreenNav";
import GreenScroll from "../components/GreenScroll";
import Carousel from "../components/Carousel";
import PlantPreview from "../components/PlantPreview";
import GreenFooter from "../components/GreenFooter";

const MainPage = () => {
  return (
    <div className="mainpage">
      <GreenNav />
      <GreenScroll />
      <Carousel />
      <PlantPreview />
      <GreenFooter />
    </div>
  );
};

export default MainPage;
