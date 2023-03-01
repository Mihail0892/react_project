import React, { useEffect, useRef } from "react";
import stylesSearchPage from "./SearchPage.module.scss";
import Search from "components/Search/Search";

const SearchPage = ({ setCart }) => {
  const fieldRef = useRef(null);
  useEffect(()=>{
    fieldRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  },[])
  return (
    <div ref={fieldRef} className={stylesSearchPage.all_box}>
      <div className={stylesSearchPage.flex}>
        <p className={stylesSearchPage.left_text}>Пошук товару</p>
      </div>
      <div className={stylesSearchPage.grid}>
        <Search setCart={setCart} />
      </div>
    </div>
  );
};

export default SearchPage;
