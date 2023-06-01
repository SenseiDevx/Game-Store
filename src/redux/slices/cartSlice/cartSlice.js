import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        }
    }
})

export const {setItemCart, deleteItem} = cartSlice.actions
export default cartSlice.reducer