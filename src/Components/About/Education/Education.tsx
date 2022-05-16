import * as React from 'react';
import {CardAbout} from "./CardAbout";

type Props = {};
export const Education = (props: Props) => {
    const data = [
        {
            position: '"Прикладная информатика в экономике, Прикладная информатика (бакалавр прикладной информатики)"',
            title: 'РАНХиГС, Москва',
            date: '(2021 - н.в.)',
            description: '',
        },
        {
            position: 'Государственное и муниципальное управление',
            title: 'РАНХиГС, Орел',
            date: '(2005 - 2009)',
            description: 'Менеджер по специальности "Государсвтенное и муниципальное управление", Государсвтенная служба',
        },
        {
            position: 'Государственное и муниципальное управление',
            title: 'Филиал ОрелГТУ',
            date: '(2001 - 2005)',
            description: 'Менеджер по специальности "Государсвтенное и муниципальное управление", Государсвтенная служба',
        },
    ]


    return (
        <div>
            {
                data.map(item => {
                    return (
                        <CardAbout
                            position={item.position}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                        />)
                })
            }

        </div>
    );
};