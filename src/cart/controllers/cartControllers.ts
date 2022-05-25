import { NextFunction, Request, Response }  from 'express';

import { cartModel as Cart } from '../entity/carModel';
import { ApplicationError } from '../../customErrors/ApplicationError';



export const getCarts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carts = await Cart.find({});
        res.status(200).json({ carts });
    } catch (error) {
        res.send(400).json({})
    } 
}

export const getCartById = async (req:Request, res:Response) => {
    const carts = await Cart.findById(req.params.id);
    res.status(200).json({ carts });
}

export const createCart = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const carts = await Cart.create(req.body);

        res.status(200).json(carts);

    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const editCart = async (req:Request, res:Response) => {
    const carts = await Cart.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message : "updated" });
}

export const deleteCart = async (req: Request, res: Response) => {
    const carts = await Cart.findByIdAndRemove(req.params.id);
    res.status(200).json({ message : "deleted" });
}
