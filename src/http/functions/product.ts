import { PatchProduct, PostProduct, Product } from "../../types/Product"
import shoppingListAxios from "../shoppingListAxios"

export const postProduct = async (product: PostProduct): Promise<Product | undefined> => {
    try {
        const response = await shoppingListAxios.post('/product', {
            ...product
        })
    
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const patchIncrementAmount = async (product: PatchProduct): Promise<Product | undefined> => {
    try {
        const response = await shoppingListAxios.patch(`/product/${product._id}`,{
            amount: product.amount
        })
    
        return response.data
    }catch(err){
        console.log(err)
    }
}