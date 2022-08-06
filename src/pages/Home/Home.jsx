import React from "react";

import styles from "./Home.module.scss";

import banner_1 from "../../assets/banner_1.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.slider}>
        <img src={banner_1} alt="banner-1"></img>
        <p className={styles.popularDishes}>Популярні страви</p>
      </div>
    </>
  );
};

export default Home;
