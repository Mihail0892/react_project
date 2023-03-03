import React, { useState, useEffect, useRef } from "react";
import CartComponent from "../../components/CartComponent/CartComponent";
import styles from "./CartBox.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import horizontal_line_big from "../../assets/horizontal_line_big.svg";

const CartBox = () => {
  const cartItems = useSelector((state) => state.Cart.items);
  const q = useSelector((state) => state.Cart.items);
  console.log(cartItems);

  const fieldRef = useRef(null);
  useEffect(() => {
    fieldRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const priceTotal = useSelector((state) => state.Cart.totalPrice);

  const [input, setInput] = useState("");

  return (
    <>
      <div ref={fieldRef} className={styles.all_box}>
        <p className={styles.pageName}>
          Кошик {q.length === 0 && <span>порожній</span>}
        </p>
        <div className={styles.grid}>
          {cartItems.map((item) => (
            <CartComponent
              id={item.id}
              key={item.id}
              description={item.description}
              img={item.img}
              dish={item.dish}
              price={item.price}
              count={item.count}
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
              <p>{priceTotal}.00 грн</p>
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
          <button disabled={q.length === 0} className={styles.cartButton}>
            Перейти до замовлення
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartBox;
