import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    logged:false
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUserAction: (state, action) => {
            const {logged} = action.payload;
            state.logged = logged;
        }
    }
});

export const {updateUserAction} = userSlice.actions

export default userSlice.reducer