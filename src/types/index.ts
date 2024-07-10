import { Product } from "@prisma/client";

export type OrderItem = Pick<Product, 'id' | 'name'> & {
    price: number
    quantity: number
    subtotal: number
}