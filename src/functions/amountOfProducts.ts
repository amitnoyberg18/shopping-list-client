import { Product } from "../types/Product";

export default function amountOfProducts(product: Product[]) {
    return product.reduce((accumulator, p )=> accumulator += p.amount, 0)
}