import React from "react";
import { Cards } from "../Card";
import './style.css';
import mount from '../Images/img1.png';
import opera from '../Images/img2.png';
import river from '../Images/img3.png';
import target from '../Images/Path.png';




export const Main = () => {
    const data = [
        {
            img:mount,
            map:target,
            country: 'JAPAN',
            link:'https://source.unsplash.com/WLxQvbMyfas',
            title:'Mount Fuji',
            date:'12 Jan, 2021 - 24 Jan, 2021',
            description:'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
        },
        {
            img:opera,
            map:target,
            country: 'AUSTRALIA',
            link:'https://source.unsplash.com/JmuyB_LibRo',
            title: 'Sydney Opera House',
            date: '27 May, 2021 - 8 Jun, 2021',
            description: `The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings`,
        },
        {
            img:river,
            map:target,
            country:'NORWAY',
            link:'https://source.unsplash.com/3PeSjpLVtLg',
            title:'Geirangerfjord',
            date:'01 Oct, 2021 - 18 Nov, 2021',
            description:'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
        }
    ]

    return (
        <div>
            {data.map((details) => {
                return(
                    <Cards
                    img={details.img}
                    map={details.map}
                    country={details.country}
                    link={details.link}
                    title={details.title}
                    date={details.date}
                    description={details.description}
                    />
                );

            })}
            
        </div>
    )
}