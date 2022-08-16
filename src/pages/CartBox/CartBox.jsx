import React from "react";
import CartComponent from "../../components/CartComponent/CartComponent";
import styles from "./CartBox.module.scss";
import { Link } from "react-router-dom";

import horizontal_line_big from "../../assets/horizontal_line_big.svg";

const CartBox = ({ cart, setCart }) => {
  const summ = cart?.reduce((acc, dish) => {
    return dish.price + acc;
  }, 0);
  return (
    <>
      <div className={styles.all_box}>
        <p className={styles.pageName}>Кошик</p>
        <div className={styles.grid}>
          {cart.map((item) => (
            <CartComponent
              cart={cart}
              id={item.id}
              setCart={setCart}
              key={item.id}
              description={item.description}
              img={item.img}
              dish={item.dish}
              price={item.price}
            />
          ))}
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
              <p>0.00 грн</p>
              <p>{summ}.00 грн</p>
            </div>
          </div>
          <div className={styles.cartFlexRightContent}>
            <p>У мене є промокод:</p>
            <input type="text" placeholder=" Введіть промокод" />
          </div>
        </div>
        <div className={styles.firstLine}>
          <img src={horizontal_line_big} alt="horisontal_line"></img>
        </div>
        <Link to="/Order">
          {" "}
          <button className={styles.cartButton}>Перейти до замовлення</button>
        </Link>
      </div>
    </>
  );
};

export default CartBox;
