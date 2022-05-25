import { Types } from 'mongoose';

export interface IProduct{
    title: string,
    user: Types.ObjectId,
    information: string,
    description: string,
    image: string,   
    price: number,
}