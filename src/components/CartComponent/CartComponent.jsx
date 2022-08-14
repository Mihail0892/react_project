import React from "react";
import styles from "./CartComponent.module.scss";
// import salat from "../../assets/salat.png";
import delete_icon from "../../assets/delete_icon.svg";

const CartComponent = ({
  description,
  img,
  dish,
  price,
  id,
  setCart,
  cart,
}) => {
  const onDeleteItem = () => {
    const cartAfterDelete = cart.filter((item) => item.id !== id);
    setCart(cartAfterDelete);
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.delete_icon}>
          <img src={delete_icon} onClick={onDeleteItem} alt="delete_icon"></img>
        </div>
        <div className={styles.dishProduct}>
          <img src={img} alt="salat"></img>
        </div>
        <p className={styles.dishName}>{dish}</p>
        <p className={styles.dishDescription}>Вага: {description}г</p>
        <p className={styles.dishPrice}>{price},00 грн</p>
        <button className={styles.dishMinus}>-</button>
        <p className={styles.dishAmount}>1</p>
        <button className={styles.dishPlus}>+</button>
      </div>
    </>
  );
};
export default CartComponent;
