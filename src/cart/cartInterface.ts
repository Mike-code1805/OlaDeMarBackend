
export interface ICart{
    userId: string,
    products: {
        productId: string,
        quantity: number,
    },
}