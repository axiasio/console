import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createAuth0Client} from '@auth0/auth0-spa-js';

const initialState = {
    profile: {}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProfile.fulfilled, (state, action) => {
                state.profile = action.payload
            })
    }
})

export const loadProfile = createAsyncThunk(
    "load-profile",
    async () => {
        console.log("running load profile")
        let auth0Client = await createAuth0Client(
            {
                domain: "dimssss.eu.auth0.com",
                clientId: "uOjxgnXBdFxLEduxn1od2bTTP3KQYpDi"
            }
        )
        let auth = await auth0Client.isAuthenticated()

        if (auth) {
            return await auth0Client.getUser()
        }

        const query = window.location.search;

        if (query.includes("code=") && query.includes("state=")) {

            // Process the login state
            await auth0Client.handleRedirectCallback();

            // Use replaceState to redirect the user away and remove the querystring parameters
            window.history.replaceState({}, document.title, "/");

            return await auth0Client.getUser()

        } else {
            await auth0Client.loginWithRedirect({
                authorizationParams: {
                    redirect_uri: window.location.origin
                }
            });
        }


    }
)
export const {} = profileSlice.actions


export default profileSlice.reducer