import { ICart } from "cart/cartInterface";
import mongoose from "mongoose";
import { cartSchema } from "./cartSchema";


export const cartModel = mongoose.model<ICart>('Cart', cartSchema);