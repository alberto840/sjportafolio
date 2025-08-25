export interface EducationInterfaceData {
    id: number;
    title: string;
    institution: string;
    year_begin: string;
    year_end: string;
    month_begin: string;
    month_end: string;
    description: string;
}
export const educationData: EducationInterfaceData[] = [
    {
        id: 1,
        title: 'College Degree',
        institution: 'Sanfransisco de Asis University',
        year_begin: '2012',
        year_end: '2017',
        month_begin: '',
        month_end: '',
        description: 'Studied Marketing and Publicity'
    },
    {
        id: 2,
        title: 'Courses',
        institution: 'Escuelita de Creativos (Argentina)',
        year_begin: '2017',
        year_end: '2020',
        month_begin: '',
        month_end: '',
        description: 'Studied for Art Director on Publicity'
    },
    {
        id: 3,
        title: 'Courses',
        institution: 'Coderhouse (Argentina)',
        year_begin: '2025',
        year_end: '2025',
        month_begin: '',
        month_end: '',
        description: 'Studied UI/UX Designer'
    }
];
