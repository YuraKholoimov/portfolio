import React from 'react';
import PageTitle from "../UI/PageTitle";
import s from "./contact.module.css";
import {Button, TextField} from "@mui/material";
import {BigButton} from "../UI/BigButton/BigButton";

const Contact = () => {
    const description = "Если у вас есть какое-либо предложение, проект или вы просто хотите поздороваться, пожалуйста, заполните форму ниже, и я отвечу вам в ближайшее время."
    return (
        <section id={"contact"}>
            <div className={s.container}>
                <PageTitle title={"Связаться"} subTitle={"Контакты"} description={description}/>
                <div className={s.form}>
                    <form action="src/Components/contact/Contact">
                        <div className={s.textField}>
                            <TextField id="outlined-basic" label="Имя *" variant="outlined"
                                      sx={{padding: "0px 15px 15px 0px", width: "100%",}}/>
                            <TextField id="outlined-basic" label="Email*" variant="outlined"
                                       sx={{padding: "0px 0px 15px 0px", width: "100%"}}/>
                        </div>

                            <TextField id="outlined-basic" label="Телефон*" variant="outlined"
                                       sx={{padding: "0px 0px 15px 0px", width: '100%'}}/>
                            <TextField
                                id="outlined-multiline-static"
                                label="Сообщение"
                                multiline
                                rows={6}
                                sx={{padding: "0px 0px 15px 0px", width: '100%'}}
                            />
                        <BigButton>Отправить сообщение</BigButton>
                    </form>

                </div>

                <div className={s.contact_info}>
                    <p>Адрес</p>
                    <h3>Россия, Москва</h3>
                    <p>Телефон</p>
                    <h3>
                        <a href="tel:+79772641610">(+7) 977 264 1610</a>
                    </h3>
                    <p>
                        <a className={s.link_email} href="mailto:yurakholoimov@ya.ru">yurakholoimov@ya.ru</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;