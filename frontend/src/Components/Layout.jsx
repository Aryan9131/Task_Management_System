import { useState } from 'react'

import './Layout.css'
import { Box, Typography, Button } from '@mui/material'
import { Navbar } from './Navbar'
import { Outlet, useLocation  } from 'react-router-dom'
import { TaskBox } from './TaskBox'
import {AddTaskDialog} from './AddTaskDialog'
function Layout() {
    const [count, setCount] = useState(0)

    return (
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: 'orange', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Navbar />
            <Box sx={{ height: '100%', width: '100vw', backgroundColor: 'green', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ backgroundColor: 'red', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '20vw' }, height: { xs: 'auto', md: '100%' } }}>
                    <TaskBox />
                    <TaskBox />
                    <TaskBox />
                    <AddTaskDialog/>
                </Box>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout
