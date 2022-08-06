import React from "react";
import styles from "./Dish.module.scss";

import heart from "../../assets/heart.svg";
import product_1 from "../../assets/product_1.png";
import cart from "../../assets/cart.svg";

const Dish = ({description,img,dish,price}) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.heart}>
          <img src={heart} alt="heart"></img>
        </div>
        <div className={styles.dishProduct}>
          <img src={img} alt="product"></img>
        </div>
        <p className={styles.dishName}>{dish}</p>
        <p className={styles.dishDescription}>Вага: {description}г</p>
        <button className={styles.dishBuy}>
          <img src={cart} alt="cart"></img> {price},00 грн
        </button>
      </div>
    </>
  );
};

export default Dish;
