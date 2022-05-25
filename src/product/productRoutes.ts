import { Router } from "express";
import { userTokenValidation } from "../users/middlewares/userTokenValidation";


import { createProduct, deleteProduct, editProduct, getProductById, getProducts } from "./controllers";

import { createProductSchema, productRequestValidation } from "./middlewares/productRequestValidation";


const productsRouter: Router = Router();

productsRouter
    .route('/api/products')
    .get(userTokenValidation, productRequestValidation(createProductSchema), getProducts)
    .post(userTokenValidation, productRequestValidation(createProductSchema), createProduct)

    productsRouter
    .route('/api/products/:id')
    .get(userTokenValidation, productRequestValidation(createProductSchema), getProductById)
    .delete(userTokenValidation, productRequestValidation(createProductSchema), deleteProduct)
    .put(userTokenValidation, productRequestValidation(createProductSchema), editProduct)

export default productsRouter;