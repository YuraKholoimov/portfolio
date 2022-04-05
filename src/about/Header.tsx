import React, {useState} from 'react';
import s from "./Header.module.css"

const Header = () => {

        return (
        <div className={s.header}>
            <div className={s.headerContent}>
                <p>INTRODUCTION</p>
                <h2>Front-end Developer</h2>
                <p>I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services and
                    online stores.
                </p>
                <div><img src="https://frenify.net/envato/frenify/html/resumo/1/img/signature.png" alt=""/></div>
            </div>
        </div>
    );
};

export default Header;