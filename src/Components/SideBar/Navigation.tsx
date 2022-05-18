import * as React from 'react';
import s from "./navigation.module.css"

import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Closer} from "../UI/Closer/Closer";
import {SetStateAction} from "react";
import {onHandlerSmoothScroll} from "../../Utils/OnHandlerRefSmoothScroll";
import {Link} from "react-router-dom";

export const Navigation = (props: Props) => {
    const [navigationMenu, setNavigationMenu] = React.useState([
        {href: 'home', title: 'Домой', isActive: false},
        {href: 'about', title: 'Обо мне', isActive: false},
        {href: 'portfolio', title: 'Портфолио', isActive: false},
        {href: 'services', title: 'Услуги', isActive: false},
        {href: 'customers', title: 'Клиенты', isActive: false},
        {href: 'my_news', title: 'Новости', isActive: false},
        {href: 'contact', title: 'Контакты', isActive: false},
    ])

    const onClickHandler = (e: any, title: string) => {
        onHandlerSmoothScroll(e, title)
        setNavigationMenu(state => {
            return state.map(el => el.href === title ? {...el, isActive: true} : {...el, isActive: false})
        })
        console.log(e.currentTarget)
    }

    return (
        <div className={props.isOpenMenu ? s.isOpen + " " + s.navigation : s.closed + " " + s.navigation}>
            <div className={props.isOpenMenu ? s.nav_open + " " + s.nav_in : s.nav_close + " " + s.nav_in}>

                {/*---- Button closer navigation -----*/}
                <Closer setIsOpenMenu={props.setIsOpenMenu} isVisible={props.isVisible}/>

                {/*---- Navigation menu -----*/}
                <nav id={"nav"}>
                    <h3 className={s.label_menu}>Menu</h3>
                    <ul>
                        {navigationMenu.map((item, i) => {
                            return (
                                <li style={{transitionDelay: "700ms"}} key={i}>
                                    <Link to={`#${item.href}`}
                                             onClick={(e) => onClickHandler(e, item.href)}
                                             className={item.isActive ? s.active : ""}
                                    >{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className={s.nav_footer}>
                    <div className={s.social}>
                        <ul>
                            <li><a href="https://t.me/yuriykholoimov" target={'_blank'}><TelegramIcon
                                style={{fontSize: '40px'}}/></a></li>
                            <li><a href="https://github.com/YuraKholoimov" target={'_blank'}><GitHubIcon
                                style={{fontSize: '40px'}}/></a></li>
                            <li><a href="https://www.linkedin.com/in/yuriykholoimov/" target={'_blank'}><LinkedInIcon
                                style={{fontSize: '40px'}}/></a></li>
                            <li><a href="https://www.codewars.com/users/YuraKholoimov" target={'_blank'}><img
                                className={s.img} alt="codewars"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


type Props = {
    isOpenMenu: boolean
    setIsOpenMenu: React.Dispatch<SetStateAction<boolean>>
    isVisible: boolean
};
