import React from "react";
import stylesSearchPage from "./SearchPage.module.scss";
import Search from "components/Search/Search";


const SearchPage = () => {

  return (
    <div className={stylesSearchPage.all_box}>
    <div className={stylesSearchPage.flex}>
      <p className={stylesSearchPage.left_text}>Результат пошуку</p>
    </div>
    <div className={stylesSearchPage.grid}>
        <Search/>
    </div>
  </div>
  );
};

export default SearchPage;