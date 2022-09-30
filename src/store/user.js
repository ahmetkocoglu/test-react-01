import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: ''
    },
    reducers: {
        storage: (state, action) => {
            localStorage.setItem('token', action.payload);
            state.value = action.payload;
        }
    }
})

export const { storage } = userSlice.actions

export default userSlice.reducer