import React from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderBig.scss";

import banner_1 from "assets/banner_1.jpg";
import banner_2 from "assets/banner_2.jpg";
import banner_3 from "assets/banner_3.jpg";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderBig = () => {
  return (
    <div>
      <Slider {...settings}>
        <div className="wrapper">
          <img src={banner_1} alt="banner" />
          <h2 className="title_1">
            Ти вперше <br /> на цьому сайті?!{" "}
          </h2>
          <p className="text_1">
            Тоді лови знижку 10%, на перше
            <br /> замовлення. “Матуся” подбає. щоб ви <br /> не були голодні!
          </p>
          <button className="sliderButton">КушацЬ!</button>
        </div>
        <div className="wrapper">
          <img src={banner_2} alt="banner" />
          <h2 className="title_1">
            Літо, сезон
            <br /> смачненьких супів
            <br /> та овочів!
          </h2>
          <Link to="/firstDishes"><button className="sliderButton">Обрати супчик!</button></Link>
        </div>
        <div className="wrapper">
          <img src={banner_3} alt="banner" />
          <h2 className="title_1 title_3">1+1=3 <br />Пропозиція тижня!</h2>
          <p className="text_1">
          Замовляй 2 порції борщику, та<br /> отримуй по щам в третій раз.<br /> Ха-ха-ха!
          </p>
          <Link to="/firstDishes"><button className="sliderButton">КушацЬ!</button></Link>
        </div>
      </Slider>
    </div>
  );
};
export default SliderBig;
