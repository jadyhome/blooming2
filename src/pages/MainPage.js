import React from "react";
import "../styles/Global.css";
import BeigeNav from "../components/BeigeNav";
import Carousel from "../components/Carousel";
import PlantPreview from "../components/PlantPreview";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="mainpage">
      <BeigeNav />
      <Carousel />
      <PlantPreview />
      <Footer />
    </div>
  );
};

export default MainPage;
