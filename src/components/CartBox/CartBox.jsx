import React from "react";
import CartComponent from "../CartComponent/CartComponent";
import styles from "./CartBox.module.scss";
import { Link } from "react-router-dom";

import horizontal_line_big from "../../assets/horizontal_line_big.svg";

const CartBox = () => {
  return (
    <>
      <div className={styles.all_box}>
        <p className={styles.pageName}>Кошик</p>
        <div className={styles.grid}>
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
        </div>
        <div className={styles.firstLine}>
          <img src={horizontal_line_big} alt="horisontal_line"></img>
        </div>
        <div className={styles.cartFlex}>
          <div className={styles.cartFlexText}>
            <div className={styles.cartFlexRightText}>
              <p>Знижка:</p>
              <p>Сума до оплати:</p>
            </div>
            <div className={styles.cartFlexLeftText}>
              <p>30.00 грн</p>
              <p>300.00 грн</p>
            </div>
          </div>
          <div className={styles.cartFlexRightContent}>
            <p>У мене є промокод:</p>
            <input type='text' placeholder=' Введіть промокод'/>
          </div>
        </div>
        <div className={styles.firstLine}>
          <img src={horizontal_line_big} alt="horisontal_line"></img>
        </div>
        <Link to="/Order"> <button className={styles.cartButton}>Перейти до замовлення</button></Link>
      </div>
    </>
  );
};

export default CartBox;
