import { configureStore } from "@reduxjs/toolkit";
import allFakerReducer from "../features/allFakerSlice";
import tableFakerReducer from "../features/tableFakerSlice";


export const store = configureStore({
    reducer:{
        AllFaker : allFakerReducer,
        Wantfaker : tableFakerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch