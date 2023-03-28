import { Request, Response, Router } from "express";


const router = Router();

const notebook = [
    {
        id: '1',
        descricao: 'Notebook S51',
        preco: 5000,
        quant: 5
    },

    {
        id: '2',
        descricao: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10',
        preco: 3500,
        quant: 3
    },

    {
        id: '3',
        descricao: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
        preco: 4000,
        quant: 2
    },

    {
        id: '4',
        descricao: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
        preco: 5000,
        quant: 0
    },

    {
        id: '5',
        descricao: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
        preco: 3350,
        quant: 2
    }
];


router.get('/', (req: Request, res: Response) => {
    res.send(notebook);
});

router.get('/:id', (req: Request, res: Response) => {
    const produto = notebook.find((not) => not.id === req.params.id);
    if (!produto) {
        res.status(400).send({ message: "Produto não encontrado!" });
    };
    res.status(200).send({ message: 'Produto encontrado!' });
});

router.post('/', (req: Request, res: Response) => {
    if (req.body.quant < 1) {
        return res.status(400).send({ message: 'Estoque baixo.' });
    }
    notebook.push(req.body);
    res.status(201).send({ message: 'Notebook criado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const produtoIndex = notebook.findIndex((notebook) => notebook.id === req.params.id);
    if (produtoIndex === -1) {
        res.status(400).send({ message: "Produto não encontrado!" });
    }
    notebook.splice(produtoIndex, 1);
    res.status(200).send({ message: "Produto removido!" });
});

router.put('/:id', (req: Request, res: Response) => {
    const produtoIndex = notebook.findIndex((notebook) => notebook.id === req.params.id);
    if (produtoIndex === -1) {
        res.status(400).send({ message: "Produto não encontrado!" });
    };

    notebook[produtoIndex] = req.body;
    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
})

export default router;
