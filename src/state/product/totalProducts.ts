import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TotalProductsState {
  amount: number;
}

const initialState: TotalProductsState = {
  amount: 0,
};

const counterSlice = createSlice({
  name: "totalProduct",
  initialState,
  reducers: {
    initial: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    }
  }
});

export const { increment, decrement, initial } = counterSlice.actions;

export default counterSlice.reducer;