import { Request, Response, Router } from "express";
import studentsServices from "../services/students.services";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const students = await studentsServices.getAll();
    res.send(students);
});

router.get('/:document', async (req: Request, res: Response) => {
    const student = await studentsServices.getByDocument(req.params.document);
    if (!student) {
        res.status(400).send({ message: "Estudante não encontrado!" });
    };
    res.status(200).send({ message: 'Estudante encontrado!' });
});

router.post('/', async (req: Request, res: Response) => {
    if (req.body.age < 18) {
        return res.status(400).send({ message: 'Não autorizado! Idade mínima é de 18 anos.' });
    }
    await studentsServices.create(req.body);
    res.status(201).send({ message: 'Estudante criado com sucesso!' });
});

router.delete('/remove/:document', async (req: Request, res: Response) => {
    try {
        await studentsServices.remove(req.params.document);
        res.send(200).send({ message: "Estudante removido com sucesso!!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});

router.put('/:document', (req: Request, res: Response) => {
    try {
        studentsServices.update(req.params.document, req.body);
        res.send({ message: "Estudandote atualizado com sucesso!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});

export default router;
