import { Product } from "../types/Product";

type productByCategory = {
    [category: string]: Product[]
}

export const productsByCategories = (products: Product[])=> {
    return products.reduce((productsByCategories: productByCategory, product) => (
        {
            ...productsByCategories,
            [product.category.name]: [...productsByCategories[product.category.name] ?? [], product],
        }
    ),{})

}