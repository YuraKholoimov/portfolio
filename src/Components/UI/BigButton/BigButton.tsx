import * as React from 'react';
import s from "./bigButton.module.css";

type Props = {
    children: string
};
export const BigButton = ({children}: Props) => {
    const onHandleClick = (event: any) => {
        event.preventDefault()
    }
    return (
        <div>
            <div className={s.load_more}>
                <a href="#" className={s.done} onClick={onHandleClick}>
                    <span className={s.link_text}>{children}</span>
                </a>
            </div>
        </div>
    );
};