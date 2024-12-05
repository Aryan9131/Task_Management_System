import { Box, Button } from '@mui/material'
import React from 'react'
import {TaskBox} from './TaskBox'
import { TasksList } from './TasksList'
export const HomePage = () => {
  return (
     <Box sx={{ backgroundColor: 'purple', display: 'flex', justifyContent: { xs: 'flex-start', md: 'space-evenly' }, flexWrap: 'wrap', width: { xs: '100vw', md: '80vw' }, height: '100%' }}>
          <TasksList title={"High"} color={"purple"} />
          <TasksList title={"Moderate"} color={"blue"} />
          <TasksList title={"Low"} color={"orange"} />
     </Box>
  )
}
