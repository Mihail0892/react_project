import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";

import search from "../../assets/search.svg";
import shoppingCart from "../../assets/shopping cart.svg";
import home from "../../assets/home.svg";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

import logo from "../../assets/logo.svg";
import line_horisontal from "../../assets/line_horisontal.svg";
import persha_strava from "../../assets/persha_strava.svg";
import garniri from "../../assets/garniri.svg";
import miasni_stravi from "../../assets/miasni_stravi.svg";
import salati from "../../assets/salati.svg";
import desert from "../../assets/desert.svg";
import drink from "../../assets/drink.svg";
import other from "../../assets/other.svg";

const Header = () => {
  const q = useSelector((state) => state.Cart.items);
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <aside className={styles.siteBar}>
          <img
            onClick={() => setOpen(false)}
            className={styles.burgerClose}
            src={close}
            alt="burger icon"
          />
          <Link onClick={() => setOpen(false)} to="/">
            <img className={styles.logo} src={logo} alt="logo"></img>
          </Link>
          <img className={styles.line} src={line_horisontal} alt="line"></img>
          <ul className={styles.menu}>
            <li>
              <Link onClick={() => setOpen(false)} to="/firstDishes">
                <img src={persha_strava} alt="img"></img>Перші страви
              </Link>
            </li>
            <li>
              <Link to="/secondDishes" onClick={() => setOpen(false)}>
                <img src={garniri} alt="img"></img>Гарніри
              </Link>
            </li>
            <li>
              <Link to="/meatDishes" onClick={() => setOpen(false)}>
                <img src={miasni_stravi} alt="img"></img>М'ясні страви
              </Link>
            </li>
            <li>
              <Link to="/salatDishes" onClick={() => setOpen(false)}>
                <img src={salati} alt="img"></img>Салати
              </Link>
            </li>
            <li>
              <Link to="/desertDishes" onClick={() => setOpen(false)}>
                <img src={desert} alt="img"></img>Десерти
              </Link>
            </li>
            <li>
              <Link to="/drinkDishes" onClick={() => setOpen(false)}>
                <img src={drink} alt="img"></img>Напої
              </Link>
            </li>
            <li>
              <Link to="/otherDishes" onClick={() => setOpen(false)}>
                <img src={other} alt="img"></img>Інше
              </Link>
            </li>
          </ul>
          <div className={styles.font}></div>
        </aside>
      )}
      {/* Desctop menu */}
      <header className={styles.header}>
        <img
          onClick={() => setOpen(true)}
          className={styles.burgerOpen}
          src={menu}
          alt="burger icon"
        />
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
          <Link to="/SearchPage">
            <button className={styles.header__rightFlex__button}>
              <img src={search} alt="search"></img>
            </button>
          </Link>
          <Link to="/">
            <button className={styles.header__rightFlex__button}>
              <img src={home} alt="user"></img>
            </button>
          </Link>
          <Link to="/CartBox">
            <button className={styles.header__rightFlex__cartButton}>
              <img src={shoppingCart} alt="cart"></img>
              <span>({q.length})</span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
