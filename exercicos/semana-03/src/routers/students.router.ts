import { Request, Response, Router } from "express";


const router = Router();

const students = [
    {
        name: 'Valker Souto',
        email: 'valker@hotmal.com',
        document: '61884506089',
        password: '123456',
        age: 22
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


router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = students.find((std) => std.document === req.params.document);
    if (!student) {
        res.status(400).send({ message: "Estudante não encontrado!" });
    };
    res.status(200).send({ message: 'Estudante encontrado!' });
});

router.post('/', (req: Request, res: Response) => {
    if (req.body.age < 18) {
        return res.status(400).send({ message: 'Não autorizado! Idade mínima é de 18 anos.' });
    }
    students.push(req.body);
    res.status(201).send({ message: 'Estudante criado com sucesso!' });
});

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((students) => students.document === req.params.document);
    if (studentIndex === -1) {
        res.status(400).send({ message: "Estudante não encontrado!" });
    }
    students.splice(studentIndex, 1);
    res.status(200).send({ message: "Estudante removido!" });
});

router.put('/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((students) => students.document === req.params.document);
    if (studentIndex === -1) {
        res.status(400).send({ message: "Estudante não encontrado!" });
    };

    students[studentIndex] = req.body;
    res.status(200).send({ message: 'Estudante atualizado com sucesso!' });
})

export default router;
