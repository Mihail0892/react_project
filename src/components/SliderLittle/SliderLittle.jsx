import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./SliderLittle.scss";
import Dish from "components/Dish/Dish";

import borsh from "assets/forArray/borsh.png";
import sup_gribniy from "assets/forArray/sup_gribniy.png";
import vareniki from "assets/forArray/vareniki.png";
import krilya_bbq from "assets/forArray/krilya_bbq.png";
import shtrudel from "assets/forArray/shtrudel.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const SliderLittle = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Dish description={450} price={100} img={borsh} dish={'Червоний борщ'}/>
        </div>
        <div>
          <Dish description={350} price={110} img={sup_gribniy} dish={"Грибний крем суп"}/>
        </div>
        <div>
          <Dish description={350} price={80} img={vareniki} dish={"Вареники з картоплею"}/>
        </div>
        <div>
          <Dish description={350} price={150} img={krilya_bbq} dish={"Крила BBQ"}/>
        </div>
        <div>
          <Dish description={180} price={100} img={shtrudel} dish={"Яблучний штрудель"}/>
        </div>
      </Slider>
    </div>
  );
};
export default SliderLittle;
