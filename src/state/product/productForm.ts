import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { patchIncrementAmount, postProduct } from "../../http/functions/product";
import { PatchProduct } from "../../types/Product";

interface ProductsFormState {
  name: string
  categoryId: string 
}

const initialState: ProductsFormState = {
    name: "",
    categoryId: ""
};

const productsFormSlice = createSlice({
    name: "productsForm",
    initialState,
    reducers: {
      addName: (state, action: PayloadAction<{name: string}>) => {
        state.name = action.payload.name;
      },
      addCategory: (state, action: PayloadAction<{categoryId: string}>) => {
        state.categoryId = action.payload.categoryId ;
      },
    },
    extraReducers: (builder) => {
        builder.addCase(postProductAsync.fulfilled,  (state) => {
          state.name ='';
          state.categoryId='';
        })
        builder.addCase(patchIncrementAmountAsync.fulfilled, (state) => { 
          state.name ='';
          state.categoryId='';
        })
    }
});

export const postProductAsync = createAsyncThunk(
  "productsForm/postProductAsync",
  async (state: ProductsFormState & {onSuccess: ()=> Promise<void>}) => {
    await postProduct({name: state.name, categoryId: state.categoryId});
    await state.onSuccess()
  }
);

export const patchIncrementAmountAsync = createAsyncThunk(
  "productsForm/patchProductAsync",
  async (state: PatchProduct & {onSuccess: ()=> Promise<void>}) => {
    await patchIncrementAmount({_id: state._id, amount: state.amount + 1});
    await state.onSuccess()
  }
);

export const { addName, addCategory } = productsFormSlice.actions;

export default productsFormSlice.reducer;