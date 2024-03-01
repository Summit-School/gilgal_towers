import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/app";

const combinedReducer = {
    app: appSlice
};

export default configureStore({
    reducer: combinedReducer,
});
