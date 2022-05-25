import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { ApplicationError } from '../../customErrors/ApplicationError';


export const createProductSchema = yup.object({
  body: yup.object({
    title: yup
      .string()
      .required('Title is required'),
    user: yup
      .string(),
    information: yup
      .string(),
    description: yup
      .string(),
    price: yup
      .number()
      .required('Price is required'),
  }),
});

export const productRequestValidation = (schema: any) => async (req: Request, res:Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        })
        next();
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
