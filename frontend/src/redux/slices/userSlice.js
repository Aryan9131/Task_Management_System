import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // You can define additional reducers here if needed
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
    setUser:(state, action)=>{
      state.user=action.payload.user
    },
    rehydrateUser: (state, action) => {
      state.user = action.payload;
  },
  },
 
});

export const { clearUser,setUser,rehydrateUser } = userSlice.actions;
export default userSlice.reducer;
