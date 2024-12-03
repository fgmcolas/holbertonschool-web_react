interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'BBBWWWWAAAHH',
    lastName: 'OHHHHHHH',
    location: 'HAHAHA',
    fullTimeEmployee: true,
    numberOfReports: 99999,
};
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("Fromage", "Chaussure"));
