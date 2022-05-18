import React from 'react';
import s from "./about.module.css"
import PageTitle from "../UI/PageTitle";
import CustomizedTabs from "../UI/tab/Tab";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const About = () => {
    const description = "Я Front-end разработчик с\n" +
        "опыт создания SPA с использованием\n" +
        "React, Redux, TypeScript, HTML,\n" +
        "CSS, JS. Я всегда смотрю\n" +
        "вперед, чтобы улучшить свой опыт,\n" +
        " планирую изучать Node.js,\n" +
        "потому что моя следующая цель -\n" +
        "стать Full-Stack разработчиком.\n" +
        "Обычно я люблю проводить свой досуг\n" +
        "на Codewars."
    return (
        <section id={"about"}>
            <div className={s.about}>
                {/*--- Main Title ---*/}
                <PageTitle title={"Биография"} subTitle={"Обо мне"} description={description}/>

                {/*--- About Information ---*/}
                <div className={s.aboutInfo}>

                    {/*--- Table Info ---*/}
                    <div className={s.aboutLeft}>
                        <table>
                            <tbody>
                            <tr>
                                <th>Имя</th>
                                <th>Юрий Холоимов</th>
                            </tr>
                            <tr>
                                <th>День Рождение</th>
                                <th>22 Декабря 1986</th>
                            </tr>
                            <tr>
                                <th>Возрост</th>
                                <th>35 лет</th>
                            </tr>
                            <tr>
                                <th>Адрес</th>
                                <th>Москва</th>
                            </tr>
                            <tr>
                                <th>Телефон</th>
                                <th><a href="tel: +79772641610">(+7) 977 264 1610</a></th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th><a href="mailto:yurakholoimov@ya.ru">yurakholoimov@ya.ru</a></th>
                            </tr>
                            <tr>
                                <th>Telegram</th>
                                <th>
                                    <a href="telegram:@yuriykholoimov">@yuriykholoimov</a>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*--- Download CV Button ---*/}
                    <div className={s.aboutRight}>
                        <a href="../../Assets/YuriyKholoimov.pdf" download className={s.downloadCVButton}>
                            <img className={s.icon}
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABZWVkWFha2traioqLr6+vg4ODj4+P5+fnl5eXa2tpUVFRLS0v09PQ6Ojo1NTVhYWFHR0coKChCQkJPT08KCgoiIiLU1NRmZmZfX1+JiYm+vr5ra2sdHR0xMTGvr692dnaSkpLIyMgJ2DnNAAADf0lEQVR4nO3d63KiQBBA4aAGFATvxqgxMXn/d4yGoDYyENwdmKbO93cx1ae4DF6KfXoCAAAAAAAAAAAAAABFRrt4Ge9GbY9hT+ClgrYHsSU5/BYekrZHseTTy3y2PYols0vhrO1RLOldCnttj2IJhfpRqB+F+lGoH4X6UagfhfpRqB+F+lGoH4X6UagfhfpRqB+F+lGoH4X6UagfhfpRqB+F+lGoH4X6UagfhfpRqB+F+lGoH4X6UagfhfpRqB+F+lGoH4X6UagfhfqpL4xOBetdyQZ/KhwdT//+5uQTbPbp8JOhcYu/FA6n6RZ7GyP+m2E2/TwybfKHwmiebeLeXjxexh+bEqsLo/Flkzdbgz7sxatMrCy8CfQO9kZ90Po6nBcXH2JVhUF88zfWNod9yOJmOm/qF21SUehPxZ+wO+4DPj2h6Gle5YWJ/APPtgeuby4GfAnvtygtDF/E61f2B67N74kRl/eXm7LCaCle3Ss8zNsWvsq9sMlvUFK4WYnXzsy3Da0aViSaC2+XiXOge8v9r3ArBo1zB6qxMJB7sOfoHjzzYzHqRF5uTIXhRLxq7uQ5mBnJYddiWENh0hevmbr+2Eh5TVzf7sXiwlAGTpoeuLZELhqTm3OxsDCQe33s9CGayi0a8fWKWlQY5ZaJghsF9xgXjYLCjVwmXp1dJqThTCZmB+p9YW4PbpUEnhYNuWeWv4PfFYbysrRScYimEnn5OKSXj3xhIm+2nV8mJJno/STmCn25iXtvCMsl8kB9P5+LsjAQb3i9la49eOLLy818kyuM5A3eVtE5mLlfNG4LlS4TUj4xuBZuh1reLpULZcb4+mHVQt7ajRUeoqlErncmEwX3okaT6j51y4Q0WlUGztUtE5K/rQh081O1OnJvpvJc/VStjmFZotZlQgp7xkCXP1Wrw58bApfqz8HMqHjRmHbpv9Qp2ovLLgXmv7b5OQc7c4im7haNLiwTUm7R6MYyIYmvbbad24Nn/vUeNe7YOZi5LBrKPlWrY3X+Fqbv4nf0/83H8e340fYQAAAAAAAAAAAAAFBTtB80aW982oYlX/Gh36xD/NVk4MDwUzy7Bs0FBu+tFL439yujfSuBDT6WZ7RrqXDX1K8Zu1/Y0oWmyYdHRf3qaSxYNPh7xnZ2YqPP/xqsFg2v+Itxww84S/bPzdp39/eMAAAAAAAAZ98eeidjJPoHsQAAAABJRU5ErkJggg=="
                                 alt="download"/>
                            <span>Мое резюме</span>
                        </a>
                    </div>
                </div>
                {/*--- Tabs ---*/}
                <CustomizedTabs/>
            </div>
        </section>
    );
};

export default About;