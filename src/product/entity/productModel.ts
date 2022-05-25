import mongoose from "mongoose";
import { IProduct } from "product/productInterface";
import { productSchema } from "./productSchema";


export const productModel = mongoose.model<IProduct>('Product', productSchema);