import { useState } from 'react'

import './Layout.css'
import { Box, Typography, Button } from '@mui/material'
import { Navbar } from './Navbar'
import { Outlet, useLocation  } from 'react-router-dom'
import { TaskBox } from './TaskBox'
import {AddTaskDialog} from './AddTaskDialog'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
    const {activeTasks} = useSelector((state)=>state.tasks)
    const {expiredTasks} = useSelector((state)=>state.tasks)
    const {completedTasks} = useSelector((state)=>state.tasks)

    return (
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Navbar />
            <ToastContainer />
            <Box sx={{ height: '100%', width: '100vw', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{pading:{xs:'20px 0px', md:'0'}, overflowY:'auto', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '20vw' }, height: { xs: 'auto', md: '80vh' } }}>
                    <TaskBox count={activeTasks} title={'Active'} />
                    <TaskBox count={expiredTasks} title={'Expired'} />
                    <TaskBox count={completedTasks} title={'Completed'} />
                    <AddTaskDialog/>
                </Box>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout
