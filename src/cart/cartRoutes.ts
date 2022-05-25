import { Router } from "express";
import { userTokenValidation } from "../users/middlewares/userTokenValidation";


import { createCart, deleteCart, editCart, getCartById, getCarts } from "./controllers";
import { cartRequestValidation, createCartSchema } from "./middlewares/cartRequestValidation";



const cartRouter: Router = Router();

cartRouter
    .route('/api/carts')
    .get(userTokenValidation, getCarts)
    .post(userTokenValidation, cartRequestValidation(createCartSchema), createCart)

cartRouter
    .route('/api/carts/:id')
    .get(userTokenValidation, cartRequestValidation(createCartSchema), getCartById)
    .delete(userTokenValidation, cartRequestValidation(createCartSchema), deleteCart)
    .put(userTokenValidation, cartRequestValidation(createCartSchema), editCart)

export default cartRouter;