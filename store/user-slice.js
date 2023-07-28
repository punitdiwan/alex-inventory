import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
    session : {},
}

const cartSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        addSessionToLocalStore(){
            
        }
    }
})