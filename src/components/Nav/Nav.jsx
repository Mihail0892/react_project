import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

import logo from "../../assets/logo.svg";
import line_horisontal from "../../assets/line_horisontal.svg";
import persha_strava from "../../assets/persha_strava.svg";
import garniri from "../../assets/garniri.svg";
import miasni_stravi from "../../assets/miasni_stravi.svg";
import salati from "../../assets/salati.svg";
import desert from "../../assets/desert.svg";
import drink from "../../assets/drink.svg";
import other from "../../assets/other.svg";

const Nav = () => {
  return (
    <>
      <aside className={styles.siteBar}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo"></img>
        </Link>
        <img className={styles.line} src={line_horisontal} alt="line"></img>
        <ul className={styles.menu}>
          <li>
            <Link to="/firstDishes">
              <img src={persha_strava} alt="img"></img>Перші страви
            </Link>
          </li>
          <li>
            <Link to="/secondDishes">
              <img src={garniri} alt="img"></img>Гарніри
            </Link>
          </li>
          <li>
            <Link to="/meatDishes">
              <img src={miasni_stravi} alt="img"></img>М'ясні страви
            </Link>
          </li>
          <li>
            <Link to="/salatDishes">
              <img src={salati} alt="img"></img>Салати
            </Link>
          </li>
          <li>
            <Link to="/desertDishes">
              <img src={desert} alt="img"></img>Десерти
            </Link>
          </li>
          <li>
            <Link to="/drinkDishes">
              <img src={drink} alt="img"></img>Напої
            </Link>
          </li>
          <li>
            <Link to="/otherDishes">
              <img src={other} alt="img"></img>Інше
            </Link>
          </li>
        </ul>
        <div className={styles.font}></div>
      </aside>
    </>
  );
};

export default Nav;
