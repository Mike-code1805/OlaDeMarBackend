import mongoose from "mongoose";
import { IUser } from "../userInterface";

const Schema = mongoose.Schema;

export const userSchemma = new Schema<IUser>({
    username: { 
        type: String, 
        required: true, 
    },
    surname: { 
        type: String, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    isadmin: {
        type: Boolean,
        default: false,
    },
    img: { 
        type: String 
    },
});

