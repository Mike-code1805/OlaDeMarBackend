import { ICart } from "cart/cartInterface";
import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const cartSchema = new Schema<ICart>({
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
      }, { timestamps: true }
);

