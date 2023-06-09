import express from 'express';
import cors from 'cors';
import router from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log('Aplicação online na porta: ', port);
})
