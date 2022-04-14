import React from 'react';
import s from "./Header.module.css"
import HeaderOfPage from "../UI/HeaderOfPage";

const Header = () => {

    return (
        <div className={s.header}>
            <HeaderOfPage/>
            <div><img src="https://frenify.net/envato/frenify/html/resumo/1/img/signature.png" alt=""/></div>
        </div>
    );
};

export default Header;