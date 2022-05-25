import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { ApplicationError } from '../../customErrors/ApplicationError';


export const createOrderSchema = yup.object({
  body: yup.object({
    userId: yup
      .string(),
    products: yup
      .array()
      .required('ProductId and Quantity is required'),
    amount: yup
        .number(),
  }),
});

export const orderRequestValidation = (schema: any) => async (req: Request, res:Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        })
        next();
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
