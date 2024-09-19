import { Request, Response } from 'express';
import tipoCliente from '../models/tipoClientes';

export const getTipoClientes = async (req: Request, res: Response) => {
    const listVentas = await tipoCliente.findAll();

    res.json(listVentas);
}