import axios  from "axios";


const shoppingListAxios = axios.create({
    baseURL: import.meta.env.VITE_SHOPPING_LIST_URL,
})

export default shoppingListAxios