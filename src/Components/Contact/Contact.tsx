import React from 'react';
import PageTitle from "../UI/PageTitle";
import s from "./contact.module.css";
import {Button, TextField} from "@mui/material";

const Contact = () => {
    return (
        <section id={"Contact"}>
            <div className={s.container}>
                <PageTitle/>
                <div className={s.form}>
                    <form action="src/Components/contact/Contact">
                            <TextField id="outlined-basic" label="Name *" variant="outlined"
                                       sx={{padding: "0px 15px 15px 0px", width: "49%"}}/>
                            <TextField id="outlined-basic" label="Email*" variant="outlined"
                                       sx={{padding: "0px 0px 15px 0px", width: "49%"}}/>

                            <TextField id="outlined-basic" label="Phone*" variant="outlined"
                                       sx={{padding: "0px 0px 15px 0px", width: '100%'}}/>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={6}
                                defaultValue="Default Value"
                                sx={{padding: "0px 0px 15px 0px", width: '100%'}}
                            />
                            <Button variant="outlined" className={s.btn} >
                                SEND MESSAGE
                            </Button>
                    </form>
                </div>
                <div className={s.contact_info}>
                    <p>Адрес</p>
                    <h3>3 Родионово, Химки, МО</h3>
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