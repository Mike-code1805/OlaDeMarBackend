
import mongoose from "mongoose";
import { IOrder } from "order/orderInterface";

import { orderSchema } from "./orderSchema";


export const orderModel = mongoose.model<IOrder>('Order', orderSchema);