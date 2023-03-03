import React from "react";
import styles from "./CartComponent.module.scss";
import delete_icon from "../../assets/delete_icon.svg";
import { useDispatch } from "react-redux";
import { itemMinus, itemPlus, deleteFromCart } from "../../store/reducers/cart";

const CartComponent = ({ description, img, dish, price, id, count }) => {
  const dispatch = useDispatch();

  const onMinusClick = () => {
    dispatch(itemMinus(id));
    if (count === 1) {
      dispatch(deleteFromCart(id));
    }
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.delete_icon}>
          <img
            src={delete_icon}
            onClick={() => dispatch(deleteFromCart(id))}
            alt="delete_icon"
          ></img>
        </div>
        <div className={styles.dishProduct}>
          <img src={img} alt="salat"></img>
        </div>
        <p className={styles.dishName}>{dish}</p>
        <p className={styles.dishDescription}>Вага: {description}г</p>
        <p className={styles.dishPrice}>{price * count},00 грн</p>
        <button onClick={onMinusClick} className={styles.dishMinus}>
          -
        </button>
        <p className={styles.dishAmount}>{count}</p>
        <button
          onClick={() => dispatch(itemPlus(id))}
          className={styles.dishPlus}
        >
          +
        </button>
      </div>
    </>
  );
};
export default CartComponent;
