import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { ApplicationError } from '../../customErrors/ApplicationError';


export const createCartSchema = yup.object({
  body: yup.object({
    userId: yup
      .string(),
    products: yup
      .array()
      .required('ProductId and Quantity is required')
  }),
});

export const cartRequestValidation = (schema: any) => async (req: Request, res:Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        })
        next();
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
