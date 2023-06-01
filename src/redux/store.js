import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice/cartSlice";
import gameSlice from "./slices/gameSlice/gameSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        game: gameSlice
    }
})