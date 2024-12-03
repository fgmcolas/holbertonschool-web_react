namespace Subjects {
    export class Subject {
        teacher: Teacher;
        constructor() {
            this.teacher = {} as Teacher;
        }
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
