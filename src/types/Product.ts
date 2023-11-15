import { Category } from "./Category"

export interface Product {
    _id: string
    name: string
    amount: number
    category: Category
}

export interface PostProduct {
    name: string
    categoryId: string
}

export type PatchProduct = Omit<Product, 'name' | 'category'>