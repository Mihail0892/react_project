import React from "react";
import CartComponent from "../../components/CartComponent/CartComponent";
import styles from "./CartBox.module.scss";
import { Link } from "react-router-dom";

import horizontal_line_big from "../../assets/horizontal_line_big.svg";
import { useState } from "react";

const CartBox = ({ cart, setCart }) => {
  const [numb, setNumb] = useState(1);
  const summ = cart?.reduce((acc, dish) => {
    console.log(dish.price * numb);
    return acc + dish.price * numb;
  }, 0);

  const [price, setPrice] = useState(summ);
  const [input, setInput] = useState("");

  const newPrice = () => {
    setInput(input.target.value);
    if (input.length > 1) setPrice(summ - summ * 0, 1);
  };
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
              count={item.count}
              setNumb={setNumb}
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
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder=" Введіть промокод"
            />
          </div>
        </div>
        <div className={styles.firstLine}>
          <img src={horizontal_line_big} alt="horisontal_line"></img>
        </div>
        <Link to="/Order">
          {" "}
          <button disabled={cart.length === 0} className={styles.cartButton}>
            Перейти до замовлення
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartBox;
