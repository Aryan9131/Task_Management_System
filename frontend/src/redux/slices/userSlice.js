import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching user data
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:8000/api/user`);
    const data = await response.json();
    return data; // This will be the payload of the fulfilled action
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Reject action with an error message
  }
});

// Thunk for updating user data
export const updateUser = createAsyncThunk('user/updateUser', async (userDetails, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:8000/api/user/${userDetails.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    return data; // Payload for the fulfilled action
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Reject action with an error message
  }
});

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
  extraReducers: (builder) => {
    // Handle fetchUser
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Handle updateUser
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser,setUser,rehydrateUser } = userSlice.actions;
export default userSlice.reducer;
