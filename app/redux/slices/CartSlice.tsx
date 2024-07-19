import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    numCart:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const existingItem = state.items.find((i) => i._id === item._id);

            if (existingItem) {
                existingItem.soLuong++;

            } else {
                // If item doesn't exist, add it to the cart
                state.items.push({ ...item, "soLuong":1 });
                if(state.items.length==0){
                    state.numCart=0
                }
                state.numCart=state.items.length;
            }

            console.log(state.items);
            
        },
       
        removeItem: (state, action) => {
            state.items = state.items.filter((item:any) => item._id !== action.payload);
            if(state.items.length==0){
                state.numCart=0
            }
            state.numCart=state.items.length;
        },
        // updateCartItemQuantity: (state, action) => {
        //     const item = state.items.find((item) => item._id === action.payload._id);

        //     if (item) {
        //         item.quantity = action.payload.quantity;
        //     }
        // },
        tangSL: (state, action) => {
            const itemToUpdate = state.items.find((item) => item._id === action.payload);

            if (itemToUpdate) {
                itemToUpdate.soLuong++;
            }
        },
        giamSL: (state, action) => {
            const itemToUpdate = state.items.find((item) => item._id === action.payload);

            if (itemToUpdate && itemToUpdate.soLuong > 1) {
                itemToUpdate.soLuong--;
            }
        },
      
        clearCart: (state) => {
            state.items = [];
            state.numCart=state.items.length;

        },
    },
});
export const selectTotalQuantity = createSelector(
    (state) => state.cart.items,
    (items) => items.reduce((sum:any, item:any) => sum + item.soLuong, 0)
);
export const selectTotal = createSelector(
    (state) => state.cart.items,
    (items) => items.reduce((sum:any, item:any) => sum+=(item.price-(item.price * (item.discount / 100)))*item.soLuong, 0)

);

export const { addToCart,removeItem,clearCart,tangSL,giamSL } = cartSlice.actions;

export default cartSlice;