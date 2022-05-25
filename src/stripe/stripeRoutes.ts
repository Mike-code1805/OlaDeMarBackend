import { Router } from "express";
import { createPayment } from "./index";

const stripeRouter: Router = Router();

stripeRouter
    .route('/payment')
    .post(createPayment)

export default stripeRouter;