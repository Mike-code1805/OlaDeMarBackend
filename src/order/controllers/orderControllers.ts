import { NextFunction, Request, Response }  from 'express';

import { orderModel as Order } from '../entity/orderModel';
import { ApplicationError } from '../../customErrors/ApplicationError';


export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carts = await Order.find({});
        res.status(200).json({ carts });
    } catch (error) {
        res.send(400).json({})
    } 
}

export const getOrderById = async (req:Request, res:Response) => {
    const carts = await Order.findById(req.params.id);
    res.status(200).json({ carts });
}


export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const carts = await Order.create(req.body);

        res.status(200).json(carts);

    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const editOrder = async (req:Request, res:Response) => {
    const carts = await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message : "updated" });
}

export const deleteOrder = async (req: Request, res: Response) => {
    const carts = await Order.findByIdAndRemove(req.params.id);
    res.status(200).json({ message : "deleted" });
}
