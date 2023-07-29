import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    session: {},
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        async loginHandler(state, action) {
            const response = await fetch('/api/hello', {
                method: "POST",
                body: JSON.stringify(action.payload),
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await response.json();
            if (data.code && data.code !== 201) {
                throw new Error(data.response.message)
            }

            localStorage.setItem("userId", data.userId);
            state.isLoggedIn = true;
            state.session = data //session data

        },
        isLoggedInHandler(state) {
            const isLoggedIn = localStorage.getItem("userId");
            if (isLoggedIn) {
                state.isLoggedIn = true;
                console.log("User is Logged-In");
            } else {
                state.isLoggedIn = false;
                console.log("User is Logged-out");
            }
        },
        logOutHandler(state, action) { }
    }
})

export const { loginHandler, isLoggedInHandler, logOutHandler } = userSlice.actions;
export default userSlice.reducer;