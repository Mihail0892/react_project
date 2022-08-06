import React from "react";
import styles from "./CartComponent.module.scss";
import salat from "../../assets/salat.png";
import delete_icon from "../../assets/delete_icon.svg";

const CartComponent = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.delete_icon}>
          <img src={delete_icon} alt="delete_icon"></img>
        </div>
        <div className={styles.dishProduct}>
          <img src={salat} alt="salat"></img>
        </div>
        <p className={styles.dishName}>Картопля фрі з соусом</p>
        <p className={styles.dishDescription}>Вага: 235/30г</p>
        <p className={styles.dishPrice}>100.00 грн</p>
        <button className={styles.dishMinus}>-</button>
        <p className={styles.dishAmount}>1</p>
        <button className={styles.dishPlus}>+</button>
      </div>
    </>
  );
};
export default CartComponent;
