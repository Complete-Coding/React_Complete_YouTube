import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}});

export default counterStore;