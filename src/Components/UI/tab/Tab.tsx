import * as React from 'react';

import s from "./tab.module.css"
import Experience from "../../About/Experience/Experience";
import Education from "../../About/Education/Education";
import Skills from "../../About/Skills/Skills";

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
                return [...state.map((el: InitStateType) => el.id === action.id ? {...el, isActive: true} : {
                    ...el,
                    isActive: false
                })]
            default:
                throw new Error("Error")
        }
    }
    const [value, dispatch] = React.useReducer(reducer, [
        {id: "Experience", component: <Experience/>, isActive: false},
        {id: "Education", component: <Education/>, isActive: false},
        {id: "Skills", component: <Skills/>, isActive: false},
    ]);

    const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const currentTarget = e.currentTarget.dataset.tab

        currentTarget && dispatch({type: "SHOW", id: currentTarget})
    }

    return (
        <div className={s.containerTab}>
            <div className={s.tabHeader}>
                <ul>
                    <li className={value[0].isActive ? s.active : ''}
                        data-tab={"Experience"}
                        onClick={onClickHandler}
                    >Experience
                    </li>
                    <li className={value[1].isActive ? s.active : ''}
                        data-tab={"Education"}
                        onClick={onClickHandler}
                    >Education
                    </li>
                    <li className={value[2].isActive ? s.active : ''}
                        data-tab={"Skills"}
                        onClick={onClickHandler}
                    >Skills
                    </li>
                </ul>
            </div>
            <div>
                {value && value.map((item: any) => item.isActive && item.component)}
            </div>

        </div>
    );
}
