import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/features/authSlice";
import productReducer from "../redux/features/productSlice";
import filterReducer from "../redux/features/filterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
