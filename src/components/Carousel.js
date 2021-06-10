import React from "react";
import "../styles/Main.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <img
          className="slides"
          src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?cs=srgb&dl=pexels-%E2%96%83-1105019.jpg&fm=jpg"
          alt="Variety Of Green Plants; Credit: https://www.pexels.com/@corin"
        />
        <img
          className="slides"
          src="https://images.pexels.com/photos/866047/pexels-photo-866047.jpeg?cs=srgb&dl=pexels-tharatip-sukee-866047.jpg&fm=jpg"
          alt="Green Succulent Flowers on Pot; Credit: https://www.pexels.com/@tharatip-sukee-294273"
        />
        <img
          className="slides"
          src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?cs=srgb&dl=pexels-min-an-793012.jpg&fm=jpg"
          alt="Green Indoor Potted Plant Lot; Credit: https://www.pexels.com/@minan1398"
        />
        <img
          className="slides"
          src="https://images.pexels.com/photos/1982095/pexels-photo-1982095.jpeg?cs=srgb&dl=pexels-lisa-1982095.jpg&fm=jpg"
          alt="Indoor Plants; Credit: https://www.pexels.com/@fotios-photos"
        />
      </div>
    </div>
  );
};

export default Carousel;
