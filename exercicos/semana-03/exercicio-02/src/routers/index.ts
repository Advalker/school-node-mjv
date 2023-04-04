import { Router } from "express";
import healthRouter from './health.router';
import produtosRouter from './produtos.router';


const router = Router();

router.use('/health', healthRouter);
router.use('/produtos', produtosRouter);


export default router;

