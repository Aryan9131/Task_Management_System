import React from 'react'
import { TaskCard } from './TaskCard'
import {Box, Typography} from '@mui/material'
export const TaskDetail = () => {
  return (
    <Box sx={{ backgroundColor: 'purple', display: 'flex', justifyContent: { xs: 'flex-start', md: 'space-evenly' }, flexWrap: 'wrap', width: { xs: '100vw', md: '80vw' }, height: '100%' }}>
        <Typography variant="h2">Task Title</Typography>
        <Typography>Task Description</Typography>
        <Typography>Task Time</Typography>
        <Typography>Task Status</Typography>
        <Typography>Task Priority</Typography>
    </Box>
  )
}
