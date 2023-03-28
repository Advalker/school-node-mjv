import { Router } from "express";
import healthRouter from './health.router';
import notebookRouter from './notebook.router';


const router = Router();

router.use('/health', healthRouter);
router.use('/notebook', notebookRouter);


export default router;

