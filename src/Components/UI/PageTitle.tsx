import React from 'react';
import s from "./pageTitle.module.css";

type PageTitle = {
    subTitle: string
    title: string
    description: string
}

const PageTitle = ({title, subTitle, description}: PageTitle) => {

    return (
        <div className={s.headerContent}>
            <div className={s.subTitle}>{subTitle}</div>
            <h3 className={s.title}>{title}</h3>
            <div className={s.headerLine}></div>
            <p className={s.description}>{description}</p>
        </div>
    );
};

export default PageTitle;