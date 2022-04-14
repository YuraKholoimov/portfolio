import React from 'react';
import s from "./HeaderOfPage.module.css";

const HeaderOfPage = () => {
    return (
        <div className={s.headerContent}>
            <div className={s.introductions}>INTRODUCTION</div>
            <h3>Front-end Developer</h3>
            <div className={s.headerLine}></div>
            <p>I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores.
            </p>
        </div>
    );
};

export default HeaderOfPage;