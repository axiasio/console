import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    collapsed: false,
    selectedKeys: [window.location.pathname.substring(1)],
    defaultOpenKeys: getOpenKeys(window.location.pathname.substring(1))
}

function getOpenKeys(selectedKey) {
    let keys = {
        'dashboard': "dashboard",
        'trustdomain/list': "trustdomain/list",
    }
    return [keys[selectedKey]]
}


export const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState,
    reducers: {
        collapse: (state) => {
            state.collapsed = !state.collapsed
        },
        onMenuClick: (state, action) => {
            console.log("onMenuClick")
            console.log(action.payload)
            console.log(state)
        },
        activeMenuEntry: (state, action) => {
            state.selectedKeys = [action.payload]
            state.defaultOpenKeys = getOpenKeys(action.payload)
        },
    },
})


export const {collapse, onMenuClick, activeMenuEntry} = sideMenuSlice.actions;


export default sideMenuSlice.reducer