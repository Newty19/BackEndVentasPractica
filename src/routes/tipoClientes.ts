import { Router } from 'express';
import { getTipoClientes } from '../controllers/tipoClientes';

const router = Router();

router.get('/', getTipoClientes);

export default router;