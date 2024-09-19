import { Request, Response } from 'express';
import Producto from '../models/productos';

export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;
    
    await Producto.create(body);
    
    res.json({
        msg: `La venta fue agregada con exito`
    })
}