import {configureStore} from "@reduxjs/toolkit";
import appHeaderReducer from "./appHeader/appHeaderSlice"
import profileReducer from "./profile/profileSlice"

export const store = configureStore({
    reducer: {

        appHeader: appHeaderReducer,
        profile: profileReducer,
    }
})