import { Subjects } from './subjects/Teacher';
import { Subject } from './subjects/Subject';
import { Cpp } from './subjects/Cpp';
import { React } from './subjects/React';
import { Java } from './subjects/Java';

const teacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe' };
const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(teacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

teacher.experienceTeachingC = 5;
console.log(cppSubject.getAvailableTeacher());

const reactSubject = new Subjects.React();
reactSubject.setTeacher(teacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());

teacher.experienceTeachingReact = 3;
console.log(reactSubject.getAvailableTeacher());
