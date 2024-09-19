import { Request, Response } from 'express';
import detalleVenta from '../models/detalleventas';

export const postDetalleVenta = async (req: Request, res: Response) => {
    const { body } = req;
    
    await detalleVenta.create(body);
    
    res.json({
        msg: `La venta fue agregada con exito`
    })
}