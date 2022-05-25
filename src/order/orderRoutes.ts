import { Router } from "express";
import { userTokenValidation } from "../users/middlewares/userTokenValidation";

import { createOrder, deleteOrder, editOrder, getOrderById, getOrders } from "./controllers";
import { createOrderSchema, orderRequestValidation } from "./middlewares/orderRequestValidation";



const orderRouter: Router = Router();

orderRouter
    .route('/api/orders')
    .get(userTokenValidation, getOrders)
    .post(userTokenValidation, orderRequestValidation(createOrderSchema), createOrder)

orderRouter
    .route('/api/orders/:id')
    .get(userTokenValidation, getOrderById)
    .delete(userTokenValidation, orderRequestValidation(createOrderSchema), deleteOrder)
    .put(userTokenValidation, orderRequestValidation(createOrderSchema), editOrder)

export default orderRouter;