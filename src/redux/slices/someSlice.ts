import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null
}

const someSlice  = createSlice({
  name: "some",
  initialState: initialState,
  reducers: {
    setUser : (state,action) => {
      state.user = action.payload
    },
    setToken : (state,action) => {
      state.token = action.payload
    }
  }
})

export const {setUser, setToken} = someSlice.actions;
export default someSlice.reducer;