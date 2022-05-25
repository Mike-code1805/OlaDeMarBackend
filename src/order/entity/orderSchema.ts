import mongoose from "mongoose";
import { IOrder } from "order/orderInterface";


const Schema = mongoose.Schema;

export const orderSchema = new Schema<IOrder>({
    userId: { 
        type: String, required: true 
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { 
        type: Number, required: true 
    },
    address: { 
        type: Object, required: true 
    },
    status: { 
        type: String, default: "pending" 
    },
  },
  { timestamps: true }
);

