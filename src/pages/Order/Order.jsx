import React, { useState } from "react";
import styles from "./Order.module.scss";
import horizontal_line_big from "../../assets/horizontal_line_big.svg";
import { Link } from "react-router-dom";

const Order = () => {
  const [modal, setModal] = useState(false);
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [value_3, setValue_3] = useState("");
  const [value_4, setValue_4] = useState("");
  const openModal = (e) => {
    e.preventDefault();
    setModal(true);
    setValue_1("");
    setValue_2("");
    setValue_3("");
    setValue_4("");
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.orderBox}>
      <h1 className={styles.orderTitle}>Оформлення замовлення</h1>

      <div className={styles.firstLine}>
        <img src={horizontal_line_big} alt="horisontal_line"></img>
      </div>
      <form onSubmit={openModal}>
        <div className={styles.contacts}>
          <div className={styles.telephone}>
            <p>Телефон:</p>
            <input
              value={value_1}
              onChange={(e) => setValue_1(e.target.value)}
              type="text"
              placeholder=" +38 (0"
            />
          </div>
          <div className={styles.name}>
            <p>Ім'я:</p>
            <input
              value={value_2}
              onChange={(e) => setValue_2(e.target.value)}
              type="text"
              placeholder=" Введіть ваше ім'я"
            />
          </div>
        </div>
        <div className={styles.address}>
          <p>Адреса доставки:</p>
          <input
            value={value_3}
            onChange={(e) => setValue_3(e.target.value)}
            type="text"
            placeholder=" Вулиця, будинок, квартира"
          />
        </div>
        <div className={styles.comment}>
          <p>Комментар до замовлення:</p>
          <textarea
            value={value_4}
            onChange={(e) => setValue_4(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <button type="submit" className={styles.orderButton}>
          Замовити
        </button>
      </form>
      {modal ? (
        <div className={styles.modal}>
          <p className={styles.modalText}>
            Дякуємо. Ваше замовлення прийняте до обробки.
            <br />
            Очікуйте дзвінка оператора для уточнення замовлення.{" "}
          </p>
          <Link to="/">
            <button
              type="submit"
              className={styles.modalButton}
              onClick={closeModal}
            >
              Дякую!
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default Order;
