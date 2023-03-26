import {configureStore} from "@reduxjs/toolkit";
import appHeaderReducer from "./appHeader/appHeaderSlice"
import profileReducer from "./profile/profileSlice"
import trustDomainReducer from "./trustDomain/trustDomainSlice"
import sideMenuReducer from "./sideMenu/sideMenuSlice"

export const store = configureStore({
    reducer: {
        appHeader: appHeaderReducer,
        profile: profileReducer,
        trustDomain: trustDomainReducer,
        sideMenu: sideMenuReducer,
    }
})