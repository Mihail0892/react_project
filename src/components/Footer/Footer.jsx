import React from "react";
import styles from "./Footer.module.scss";

import horizontal_line_big from "assets/horizontal_line_big.svg";
import call from "assets/call.svg";
import mail from "assets/mail.svg";
import facebook from "assets/facebook.svg";
import instagram from "assets/instagram.svg";
import telegram from "assets/telegram.svg";
import callback from "assets/callback.svg";
import pay1 from "assets/pay1.svg";
import pay2 from "assets/pay2.svg";
import pay3 from "assets/pay3.svg";
import pay4 from "assets/pay4.svg";
import pay5 from "assets/pay5.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.firstFlex}>
        <p>Промокоди</p>
        <p>Про нас</p>
        <p>Контакти</p>
        <p>FAQ</p>
        <p>Блог</p>
        <span>© 2022 ALL RIGHT RESERVED</span>
      </div>
      <div className={styles.footerLine}>
        <img src={horizontal_line_big} alt="line" />
      </div>
      <div className={styles.secondFlex}>
        <button className={styles.bigFooterButton}>
          <img src={call} alt="call" />
          <p>+38(097) 185 88 98 / +38(096) 848 40 53 </p>
        </button>
        <button className={styles.littleFooterButton}>
          <img src={mail} alt="mail" />
          <p>mama@gmail.com</p>
        </button>
        <div className={styles.media}>
        <a href="https://www.instagram.com/" target="blank">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://uk-ua.facebook.com/" target="blank">
          <img src={facebook} alt="facebookm" />
        </a>
        <a href="https://web.telegram.org/z/" target="blank">
          <img src={telegram} alt="telegram" />
        </a>
        </div>
      </div>
      <div className={styles.thirdFlex}>
        <p>
          2018-2022 © MamaCooking™ Всі права захищені. Доставляємо безкоштовно в
          будь-який час
          <br /> з 10:00 до 17:00. MamaCooking™ залишає за собою право змінювати
          встановлені ціни.
        </p>
        <img src={callback} alt="callback" />
      </div>
      <div className={styles.fourthFlex}>
        <img src={pay1} alt="pay" />
        <img src={pay2} alt="pay" />
        <img src={pay3} alt="pay" />
        <img src={pay4} alt="pay" />
        <img src={pay5} alt="pay" />
      </div>
    </div>
  );
};
export default Footer;
