import { Request, Response } from 'express';
import Venta from '../models/ventas';

export const getVentas = async (req: Request, res: Response) => {
    const listVentas = await Venta.findAll();

    res.json(listVentas);
}

export const getVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);
    if(venta){
        res.json(venta);
    }else{
        res.status(404).json({
            msg: "No existe esa venta"
        })
    }
}

export const deleteVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if(!venta){
        res.status(404).json({
            msg: `No existe alguna venta con el id ${id}`
        })
    }else{
        await venta.destroy();
        res.json({
            msg: 'La venta fue eliminado con exito'
        })
    }
}

export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;
    
    await Venta.create(body);
    
    res.json({
        msg: `La venta fue agregada con exito`
    })
}

export const updateVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    const venta = await Venta.findByPk(id);
    if(venta){
        await venta.update(body);
        res.json({
            msg: "Venta actualizada con exito"
        })
    }else{
        res.status(404).json({
            msg: "Venta no existe"
        })
    }
}