import * as React from 'react';

import s from "./tab.module.css"
import Experience from "../../About/Experience/Experience";
import {CardAbout} from "../CardAbout/CardAbout";
import Skills from "../../About/Skills/Skills";
import {Education} from "../../About/Education/Education";

type InitStateType = {
    id: string,
    component: React.ReactNode,
    isActive: boolean
}
type ActionType = { type: "SHOW", id: string }

export default function AccessibleTabs() {
    const reducer = (state: InitStateType[], action: ActionType): InitStateType[] => {
        switch (action.type) {
            case "SHOW":
                return [...state.map((el: InitStateType) => el.id === action.id ? {...el, isActive: true}
                    : {...el, isActive: false
                })]
            default:
                throw new Error("Error")
        }
    }

    const [value, dispatch] = React.useReducer(reducer, [
        {id: "Experience", component: <Experience/>, isActive: false},
        {id: "CardAbout", component: <Education/>, isActive: false},
        {id: "Skills", component: <Skills/>, isActive: true},
    ]);

    const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const currentTarget = e.currentTarget.dataset.tab

        currentTarget && dispatch({type: "SHOW", id: currentTarget})
    }

    return (
        <div className={s.containerTab}>
            <div className={s.tabHeader}>
                <ul>
                    <li className={value[2].isActive ? s.active : ''}
                        data-tab={"Skills"}
                        onClick={onClickHandler}
                    >Навыки
                    </li>
                    <li className={value[0].isActive ? s.active : ''}
                        data-tab={"Experience"}
                        onClick={onClickHandler}
                    >Опыт
                    </li>
                    <li className={value[1].isActive ? s.active : ''}
                        data-tab={"CardAbout"}
                        onClick={onClickHandler}
                    >Образование
                    </li>
                </ul>
            </div>
            <div>
                {value && value.map((item: any) => item.isActive && item.component)}
            </div>

        </div>
    );
}
