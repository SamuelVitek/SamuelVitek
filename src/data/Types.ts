export enum Skills {
    REACT = 'React.js',
    TS = 'Typescript',
    JS = 'JavaScript',
    JQuery = 'jQuery',
    NEXT = 'Next.js',
    JAVA = 'Java',
    PHP = 'PHP',
    BS = 'Bootstrap 5.3',
    SQL = 'SQL',
    TEACHING = 'Teaching',
    WEBDEV = 'Web Development',
    WORDPRESS = 'Wordpress',
    ELEMENTOR = 'Elementor',
    TESTER = 'QA Testing',
}

export enum Tools {
    GA = 'Google Analytics',
    POSTMAN = 'Postman API',
    GITHUB = 'GitHub',
    GIT = 'Git',
    NOTION = 'Notion API',
    SERP = 'Serp API',
    MONGO = 'MongoDB',
    PBI = 'PowerBI',
    JIRA = 'Jira',
    JENKINS = 'Jenkins',
    SCRUM = 'Agile Dev - Scrum',
    MSSQL = 'MS SQL Management Studio',
    DOCKER = 'Docker',
}

export enum Field {
    IT = 'Information Technology',
    WEB = 'Web Design and Web Development'
}

export type Data = {
    title: string;
    company: string;
    location: string;
    logo: string;
    skills: Array<Skills | Tools | Field>
    date: string;
}

export type SocialsType = {
    name: string;
    link: string;
}

export type Lang = {
    lang: string;
    level: string;
    value: number;
}

interface CustomError {
    errorCode: number;
    message?: string;
    raw?: {
        code: string;
        error: string;
        message: string;
        statusCode: number;
    }
}

const errorHandle = (e: any) => {
    const error = e as CustomError;

    return (error.raw?.message || error.message);
}

export default errorHandle;