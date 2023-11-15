import {configureStore} from '@reduxjs/toolkit';
import totalProductsReducer from './product/totalProducts';
import productForm from './product/productForm';
import {TypedUseSelectorHook, useSelector} from 'react-redux'

export const store = configureStore({
    reducer: {
        totalProducts: totalProductsReducer,
        productForm: productForm
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
