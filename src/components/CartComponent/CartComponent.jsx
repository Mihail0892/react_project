import React from "react";
import styles from "./CartComponent.module.scss";
import delete_icon from "../../assets/delete_icon.svg";
import { useState } from "react";

const CartComponent = ({
  description,
  img,
  dish,
  price,
  id,
  setCart,
  cart,
  count,
  setNumb,
}) => {
  const [amount, setAmount] = useState(count);
  const onDeleteItem = () => {
    const cartAfterDelete = cart.filter((item) => item.id !== id);
    setCart(cartAfterDelete);
  };

  // useEffect(()=>{
  //   setNumb(amount)
  // },[amount])

  const amountPlus = () => {
    setAmount(amount + 1);
  };

  const amountMinus = () => {
    if (amount >= 2) {
      setAmount(amount - 1);
    } else if (amount === 1) {
      onDeleteItem();
    }
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
        <p className={styles.dishPrice}>{price * amount},00 грн</p>
        <button onClick={amountMinus} className={styles.dishMinus}>
          -
        </button>
        <p className={styles.dishAmount}>{amount}</p>
        <button onClick={amountPlus} className={styles.dishPlus}>
          +
        </button>
      </div>
    </>
  );
};
export default CartComponent;
