import { Request, Response } from 'express';
import Cliente from '../models/clientes';

export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;
    
    await Cliente.create(body);
    
    res.json({
        msg: `La venta fue agregada con exito`
    })
}