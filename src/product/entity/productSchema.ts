import mongoose from "mongoose";
import { IProduct } from "product/productInterface";


const Schema = mongoose.Schema;

export const productSchema = new Schema<IProduct>({
    title: { 
        type: String, 
        required: true, 
    },
    user: {
        type: Schema.Types.ObjectId, ref: "User",
        required: false,
    },
    information: { 
        type: String, 
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },

});

