import { Request, Response, Router } from "express";
import produtosService from "../services/produtos.service";


const router = Router();

router.get('/', (req: Request, res: Response) => {
    const produto = produtosService.getAll();
    res.send(produto);
});

router.get('/:id', (req: Request, res: Response) => {
    const produto = produtosService.getByDocument(req.params.id);
    if (!produto) {
        res.status(400).send({ message: "Produto não encontrado!" });
    };
    res.status(200).send({ message: 'Produto encontrado!' });
});

router.post('/', (req: Request, res: Response) => {
    if (req.body.quant < 1) {
        return res.status(400).send({ message: 'Estoque baixo.' });
    }
    produtosService.create(req.body);
    res.status(201).send({ message: 'Notebook criado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    try {
        produtosService.remove(req.params.id);
        res.send(200).send({ message: "Produto removido com sucesso!!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});

router.put('/:id', (req: Request, res: Response) => {
    try {
        produtosService.remove(req.params.id);
        res.send(200).send({ message: "Produto atualizado com sucesso!!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
});
export default router;
