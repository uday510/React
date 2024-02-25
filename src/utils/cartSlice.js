import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      // mutating the state directly 
      //  because createSlice uses immer under the hood
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// here reducer is a function (action) that takes state and action as arguments and returns the new state

// {
//   actions: {
//     addItem: (payload: any) => { type: string; payload: any; };
//     removeItem: (payload: any) => { type: string; payload: any; };
//     clearCart: (payload: any) => { type: string; payload: any; };
//   },
//   reducer
// }
