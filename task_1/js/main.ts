interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Chaussure',
    fullTimeEmployee: false,
    lastName: 'Fromage',
    location: 'Oui',
    contract: false,
};

console.log(teacher3);
