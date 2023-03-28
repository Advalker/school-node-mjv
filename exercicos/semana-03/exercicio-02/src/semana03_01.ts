import express from 'express';
import { Request, Response, Router } from 'express';
import cors from 'cors';

const app01 = express();

app01.use(cors());
app01.use(express.json());

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const helloWord = { message: 'Hello World!!! ' };
    res.send(helloWord);
});

app01.use(router);

const port = 3001;
app01.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
})
