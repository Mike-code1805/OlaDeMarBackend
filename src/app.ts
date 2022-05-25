import express, { Application, ErrorRequestHandler, NextFunction, Request, Response }  from "express";
import userRoutes from './users/userRoutes';
import productsRouter from "./product/productRoutes";
import cartRouter from "./cart/cartRoutes";
import orderRouter from "./order/orderRoutes";
import stripeRouter from "./stripe/stripeRoutes";

const cors = require("cors");

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(productsRouter);
app.use(cartRouter);
app.use(orderRouter);
app.use(stripeRouter);

app.use(function(err:any, req:Request, res:Response, next:NextFunction) {
    res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;