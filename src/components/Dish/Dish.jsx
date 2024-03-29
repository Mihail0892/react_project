import React from "react";
import { useDispatch } from "react-redux";
import {addToCart } from "../../store/reducers/cart";
import styles from "./Dish.module.scss";

import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";

const Dish = ({ description, img, dish, price, item, count,id }) => {
  const dispatch = useDispatch();
  const addItem = () => {
    const itemObj = {
      description,
      img,
      dish,
      price,
      item,
      count,
      id
    };
    dispatch(addToCart(itemObj))
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
        <button onClick={addItem} className={styles.dishBuy}>
          <img src={cart} alt="cart"></img> {price},00 грн
        </button>
      </div>
    </>
  );
};

export default Dish;
