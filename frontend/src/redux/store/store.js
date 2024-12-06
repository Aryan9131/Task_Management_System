import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../slices/userSlice'; // Replace with your actual slice file
import taskReducer from '../slices/taskSlice'
const store = configureStore({
  reducer: {
    user: userReducer , // Add your reducers here
    tasks:taskReducer
  },
});

export default store;
