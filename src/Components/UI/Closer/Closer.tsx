import * as React from 'react';
import s from './closer.module.css'

type Props = {
    setIsOpenMenu:(arg0:boolean) => void
    isVisible: boolean
};

export const Closer = (props: Props) => {
    const onClickHandler = (e: any) => {
        e.preventDefault()
        props.setIsOpenMenu(false)
    }
    return (
        <div className={s.closer_container}>
            <a href="#" className={s.closer}
            onClick={onClickHandler}></a>
        </div>
    );
};