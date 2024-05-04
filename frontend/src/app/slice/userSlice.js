import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
    role:null
  },
  reducers: {
    setuser: (state, payload) => {
      state.value = {
        name: payload.payload.name,
        
      };
      state.role = {
        role:payload.payload.role
      }
    },
   /*  setRole: (state, payload) => {
      state.value = {
        role: payload.payload,
        
      };
    }, */
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.clear();
      state.value = null;
      state.role = null;
      
    },
  },
});

export const { setuser, logout ,setRole } = userSlice.actions;
export default userSlice.reducer;
