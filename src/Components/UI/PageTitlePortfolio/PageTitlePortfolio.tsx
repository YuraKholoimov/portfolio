import React, {FC} from 'react';
import s from "./pageTitlePortfolio.module.css";
import Arrow from "../Arrows/Arrow";
import CarouselSwiper from "../../Portfolio/Carousel/CarouselSwiper";

type PageTitlePropsType = {
    subTitle: string
    title: string
}

const PageTitle: FC<PageTitlePropsType> = (props) => {
    return (
        <div className={s.headerContent}>
            <div className={s.subTitle}>{props.subTitle}</div>
            <h3 className={s.title}>{props.title}</h3>
        </div>
    );
};

export default PageTitle;