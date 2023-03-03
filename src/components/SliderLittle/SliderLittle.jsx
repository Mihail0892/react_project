import React from "react";
import { useMediaQuery } from 'react-responsive';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import data from "Data/data";

import "./SliderLittle.scss";
import Dish from "components/Dish/Dish";





const SliderLittle = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 600 });
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow:isMobileScreen ? 1 : 3,
    slidesToScroll: 1,
  };
  

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) =>
          index % 10 === 0 ? (
            <div key={item.id}>
              <Dish
                item={item}
                id={item.id}
                key={item.id}
                description={item.description}
                img={item.img}
                dish={item.dish}
                price={item.price}
                count={item.count}
              />
            </div>
          ) : null
        )}
      </Slider>
    </div>
  );
};
export default SliderLittle;
