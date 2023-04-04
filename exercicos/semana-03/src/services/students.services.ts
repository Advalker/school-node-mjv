import { Student } from "../models/student.models";

class StudentsServices {
    students: Array<Student> = [
        {
            name: 'Valker Souto',
            email: 'valker@hotmal.com',
            document: '61884506089',
            password: '123456',
            age: 22,
            phone: '81975757589'
        },

        {
            name: 'José Silva',
            email: 'joser@hotmal.com',
            document: '78119542061',
            password: '654321',
            age: 32
        },

        {
            name: 'Aline Maria',
            email: 'aline@hotmal.com',
            document: '59384450006',
            password: '000000',
            age: 26
        },
    ];

    getAll() {
        return this.students
    }

    getByDocument(document: string) {
        const student = this.students.find((std) => std.document === document);
        return this.students
    }

    create(student: Student) {
        this.students.push(student);

    }

    remove(document: string) {
        const studentIndex = this.students.findIndex((students) => students.document === document);
        if (studentIndex === -1) {
            throw new Error("Estudante não encontrado!");
        }
        this.students.splice(studentIndex, 1);
    }

    update(document: string, student: Student) {
        const studentIndex = this.students.findIndex((students) => students.document === document);
        if (studentIndex === -1) {
            throw new Error("Estudante não encontrado!");
        };

        this.students[studentIndex] = student;
    }
}
export default new StudentsServices();