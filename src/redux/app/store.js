import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './features/basketSlice'
export const store = configureStore({
    reducer: {
    basket: basketReducer 
  }
})

// basket jsx da useSelector ga state.basket bolib chaqiriladi...










