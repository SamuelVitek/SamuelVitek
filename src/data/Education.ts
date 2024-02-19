import {Data, Field} from "./Types";

export const Education: Data[] = [
    {
        title: 'Bachelor\'s degree',
        company: 'Centria, University of Applied Sciences',
        location: 'Kokkola, Finland',
        logo: '/img/timeline/centria.jpg',
        skills: [
            Field.IT
        ],
        date: 'August 2023 - present'
    },
    {
        title: 'Exchange',
        company: 'Centria, University of Applied Sciences',
        location: 'Kokkola, Finland',
        logo: '/img/timeline/centria.jpg',
        skills: [
            Field.IT,
        ],
        date: 'August 2022 - May 2023'
    },
    {
        title: 'Bachelor\'s degree (transfer)',
        company: 'University of Western Bohemia',
        location: 'Pilsen, Czech Republic',
        logo: '/img/timeline/zcu.jpg',
        skills: [
            Field.IT
        ],
        date: 'September 2021 - June 2023'
    },
    {
        title: 'High-School Diploma',
        company: 'VOŠ a SPŠE Pilsen',
        location: 'Pilsen, Czech Republic',
        logo: '/img/timeline/spse.png',
        skills: [
            Field.WEB
        ],
        date: 'September 2016 - May 2020'
    }
]