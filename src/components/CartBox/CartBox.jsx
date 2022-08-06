import React from "react";
import CartComponent from "../CartComponent/CartComponent";
import styles from "./CartBox.module.scss";

import horizontal_line_big from "../../assets/horizontal_line_big.svg";

const CartBox = ({name}) => {
  return (
    <>
      <div className={styles.all_box}>
        <p className={styles.pageName}>{name}</p>
        <div className={styles.grid}>
          <CartComponent />
          <CartComponent />
          <CartComponent />
          <CartComponent />
        </div>
        <div className={styles.firstLine}>
        <img src={horizontal_line_big} alt="horisontal_line"></img>
      </div>
      </div>
     
    </>
  );
};

export default CartBox;
