import { Request, Response } from 'express';

export const getVentas = (req: Request, res: Response) => {
    res.json({
        msg: 'Obtener venta'
    })
}

export const getVenta = (req: Request, res: Response) => {

    res.json({
        msg: 'Obtener venta',
        id: req.params.id
    })
}

export const deleteVenta = (req: Request, res: Response) => {

    res.json({
        msg: 'delete venta',
        id: req.params.id
    })
}

export const postVenta = (req: Request, res: Response) => {

    res.json({
        msg: 'post venta',
        body: req.params.body
    })
}

export const updateVenta = (req: Request, res: Response) => {

    res.json({
        msg: 'update venta',
        id: req.params.id,
        body: req.params.body
    })
}