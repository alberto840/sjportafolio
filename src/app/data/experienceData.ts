export interface ExperienceInterfaceData {
    id: number;
    company: string;
    position: string;
    year_begin: string;
    year_end: string;
    month_begin: string;
    month_end: string;
    based: string;
    company_country: string;
    type_contract: string;
}
export const experienceData: ExperienceInterfaceData[] = [
    {
        id: 1,
        company: 'Freelance',
        position: 'UI Designer',
        year_begin: '2024',
        year_end: '2025',
        month_begin: '',
        month_end: '',
        based: 'La Paz',
        company_country: 'Bolivia',
        type_contract: ''
    },
    {
        id: 2,
        company: 'Community Gaming',
        position: 'Motion grapher / Graphic designer / UI Designer',
        year_begin: '2021',
        year_end: '2024',
        month_begin: '',
        month_end: '',
        based: 'New York',
        company_country: 'USA',
        type_contract: ''
    },
    {
        id: 3,
        company: 'Humano',
        position: 'Graphic designer / Motion grapher',
        year_begin: '2020',
        year_end: '2021',
        month_begin: '',
        month_end: '',
        based: 'La Paz',
        company_country: 'Bolivia',
        type_contract: ''
    },
    {
        id: 4,
        company: 'Vintage',
        position: 'Graphic designer / Motion grapher',
        year_begin: '2019',
        year_end: '2020',
        month_begin: '',
        month_end: '',
        based: 'La Paz',
        company_country: 'Bolivia',
        type_contract: ''
    },
    {
        id: 5,
        company: 'Ideas Stock',
        position: 'Graphic designer / Motion grapher (Internship)',
        year_begin: '2017',
        year_end: '2017',
        month_begin: '',
        month_end: '',
        based: 'La Paz',
        company_country: 'Bolivia',
        type_contract: 'Internship'
    }
];
