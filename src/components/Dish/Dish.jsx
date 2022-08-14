import React from "react";
import styles from "./Dish.module.scss";
import data from "Data/data";

import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";

const Dish = ({ description, img, dish, price, item, setCart }) => {
  const pushCart = () => {
    setCart((prevState) => {
      const isItemInCart = prevState.some((dish) => dish.id === item.id);
      
      return !isItemInCart ? [...prevState, item]:prevState;
        
      
    });

    console.log(item.id, item, "itemID");
  };
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
        <button onClick={pushCart} className={styles.dishBuy}>
          <img src={cart} alt="cart"></img> {price},00 грн
        </button>
      </div>
    </>
  );
};

export default Dish;
