import React from "react";
import styles from "./Order.module.scss";
import horizontal_line_big from "../../assets/horizontal_line_big.svg";

const Order = () => {
  return (
    <div className={styles.orderBox}>
      <h1 className={styles.orderTitle}>Оформлення замовлення</h1>
      
        <div className={styles.firstLine}>
          <img src={horizontal_line_big} alt="horisontal_line"></img>
        </div>
        <form>
        <div className={styles.contacts}>
          <div className={styles.telephone}>
            <p>Телефон:</p>
            <input type="text" placeholder=" +38 (0" />
          </div>
          <div className={styles.name}>
            <p>Ім'я:</p>
            <input type="text" placeholder=" Введіть ваше ім'я" />
          </div>
        </div>
        <div className={styles.address}>
          <p>Адреса доставки:</p>
          <input type="text" placeholder=" Вулиця, будинок, квартира" />
        </div>
        <div className={styles.comment}>
          <p>Комментар до замовлення:</p>
          <textarea> </textarea>
        </div>
        <button type="submit" className={styles.orderButton}>
          Замовити
        </button>
      </form>
    </div>
  );
};
export default Order;
