import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import search from "../../assets/search.svg";
import shoppingCart from "../../assets/shopping cart.svg";
import user from "../../assets/user.svg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__leftFlex}>
          <p>
            <span>Наш телефон:</span> +38(097)1858898
          </p>
        </div>
        <div className={styles.header__centerFlex}>
          <ul>
            <li>
              <Link to="/">Доставка і оплата</Link>
            </li>
            <li>
              <Link to="/">Акції</Link>
            </li>
            <li>
              <Link to="/">Відгуки</Link>
            </li>
          </ul>
        </div>
        <div className={styles.header__rightFlex}>
        <Link to="/SearchPage"><button className={styles.header__rightFlex__button}>
            <img src={search} alt="search"></img>
          </button></Link>
          <button className={styles.header__rightFlex__button}>
            <img src={user} alt="user"></img>
          </button>
          <Link to="/CartBox">
          <button className={styles.header__rightFlex__cartButton}>
            <img src={shoppingCart} alt="cart"></img>
            <span>(0)</span>
          </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
