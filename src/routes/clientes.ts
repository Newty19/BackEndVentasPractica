import { Router } from 'express';
import { postCliente } from '../controllers/clientes';

const router = Router();

router.post('/', postCliente);

export default router;