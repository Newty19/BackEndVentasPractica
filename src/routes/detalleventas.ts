import { Router } from 'express';
import { postDetalleVenta } from '../controllers/detalleventas';

const router = Router();

router.post('/', postDetalleVenta);

export default router;