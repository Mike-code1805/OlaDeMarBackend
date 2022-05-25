import { NextFunction, Request, Response }  from 'express';

import { productModel as Product } from '../entity/productModel';
import { ApplicationError } from '../../customErrors/ApplicationError';



export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.send(400).json({})
    } 
}

export const getProductById = async (req:Request, res:Response) => {
    const products = await Product.findById(req.params.id);
    res.status(200).json({ products });
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const products = await Product.create({
            title: req.body.title,
            user: req.userId,  
            information: req.body.information,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
        })

        res.status(200).json(products);

    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const editProduct = async (req:Request, res:Response) => {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message : "updated" });
}

export const deleteProduct = async (req: Request, res: Response) => {
    const products = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ message : "deleted" });
}

       