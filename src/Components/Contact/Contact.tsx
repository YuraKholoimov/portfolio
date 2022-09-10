import {TextField} from "@mui/material";
import {BigButton} from "../UI/BigButton/BigButton";
import PageTitle from "../UI/PageTitle";
import s from "./contact.module.css";
import {useForm} from "react-hook-form";
import axios, {AxiosRequestConfig} from "axios";

const Contact = () => {
    const description =
        `"Если у вас есть какое-либо предложение, проект или вы просто хотите поздороваться,
     пожалуйста, заполните форму ниже, и я отвечу вам в ближайшее время."`;

    const {register, handleSubmit,} = useForm();


    const onSubmit = (data: any) => {
        console.log(data)
        axios.post("https://smtp--server.herokuapp.com/sendMail", {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        )
            .then(() => alert("message has been sent"))
    }

    return (
        <section id={"contact"}>
            <div className={s.container}>
                <PageTitle
                    title={"Связаться"}
                    subTitle={"Контакты"}
                    description={description}
                />
                <div className={s.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.textField}>
                            <TextField
                                id="outlined-basic"
                                label="Имя *"
                                variant="outlined"
                                sx={{padding: "0px 15px 15px 0px", width: "100%"}}
                                {...register("name", {required: true})}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email*"
                                variant="outlined"
                                sx={{padding: "0px 0px 15px 0px", width: "100%"}}
                                {...register("email", {required: true})}
                            />
                        </div>

                        <TextField
                            id="outlined-basic"
                            label="Телефон*"
                            variant="outlined"
                            sx={{padding: "0px 0px 15px 0px", width: "100%"}}
                            {...register("phone", {required: true})}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Сообщение"
                            multiline
                            rows={6}
                            sx={{padding: "0px 0px 15px 0px", width: "100%"}}
                            {...register("message", {required: true})}
                        />
                        <BigButton>Отправить сообщение</BigButton>
                        <button type="submit">SEND</button>
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
                        <a className={s.link_email} href="mailto:yurakholoimov@ya.ru">
                            yurakholoimov@ya.ru
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
