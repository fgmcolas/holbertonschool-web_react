export interface MajorCredits {
    credits: number;
    brand: string;
}

export interface MinorCredits {
    credits: number;
    brand: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "Major" };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "Minor" };
}

const subject1: MajorCredits = { credits: 5, brand: "Major" };
const subject2: MajorCredits = { credits: 8, brand: "Major" };

const majorCredits = sumMajorCredits(subject1, subject2);
console.log(`Total Major Credits: ${majorCredits.credits}`);

const subject3: MinorCredits = { credits: 3, brand: "Minor" };
const subject4: MinorCredits = { credits: 4, brand: "Minor" };

const minorCredits = sumMinorCredits(subject3, subject4);
console.log(`Total Minor Credits: ${minorCredits.credits}`);