import React from 'react';
import s from "./header.module.css"
import PageTitle from "../UI/PageTitle";

const Header = () => {
    return (
        <header id="home">
            <div className={s.header}>
                {/*--- Main Title Block ---*/}
                <PageTitle/>
                <div>
                    <img src="https://frenify.net/envato/frenify/html/resumo/1/img/signature.png" alt=""/>
                </div>
            </div>
        </header>
    );
};

export default Header;