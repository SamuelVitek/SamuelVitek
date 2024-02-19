export enum Skills {
    REACT = 'React.js',
    TS = 'Typescript',
    NEXT = 'Next.js',
    JAVA = 'Java',
    SQL = 'SQL',
    TEACHING = 'Teaching',
    WEBDEV = 'Web Development',
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