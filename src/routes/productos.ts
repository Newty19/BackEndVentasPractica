import { Router } from 'express';
import { postVenta } from '../controllers/productos';

const router = Router();

router.post('/', postVenta);

export default router;