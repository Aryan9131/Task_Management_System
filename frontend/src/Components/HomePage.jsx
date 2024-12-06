import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TaskBox } from './TaskBox'
import { TasksList } from './TasksList'
import { setTasks } from '../redux/slices/taskSlice'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
  const dispatch =useDispatch();
  const [token, setToken]=useState(localStorage.getItem('token'))
  const {tasks}=useSelector((state)=>state.tasks)
  useEffect(()=>{
    console.log(" all tasks get --> "+JSON.stringify(tasks))
  },[tasks])
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const fetchedUserResponse =  await fetch('https://task-management-system-backend-98ub.onrender.com/api/user/get-user', {
          method: "GET",
          headers: {
            'content-type': 'appliation/json',
             'Authorization': `Bearer ${token}`
          },
        })
        const fetchedUserData = await fetchedUserResponse.json();
        if (fetchedUserData.user) {
          localStorage.setItem('userId', fetchedUserData.user._id);
          dispatch(setUser(fetchedUserData.user))
          dispatch(setTasks({ allTasks: fetchedUserData.tasks }))
        }
      }
      fetchUser();
    } catch (error) {
       console.log("Error while fetching user : "+error)
    }
  }, [token])
  
  return (
    <Box sx={{  display: 'flex', 
               justifyContent: { xs: 'flex-start', md: 'space-evenly' }, 
               flexWrap: 'wrap', width: { xs: '100vw', md: '80vw' },
               height: '80vh', overflowY:'auto' }}>
      <TasksList title={"High"} color={"purple"} listPriority={'high'} />
      <TasksList title={"Moderate"} color={"blue"} listPriority={'moderate'} />
      <TasksList title={"Low"} color={"orange"}  listPriority={'low'}/>
    </Box>
  )
}
