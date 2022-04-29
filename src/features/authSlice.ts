import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId:'',
    firstName:'',
    lastName:'',
    roles:[],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{}
})

export default authSlice.reducer;