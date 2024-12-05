import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import {TaskCard} from './TaskCard'
export const TasksList = ({title, color}) => {
    return (
        <Box sx={{
            height: { xs: 'auto', md: '98%' }, width: { xs: '100vw', md: '25vw' },
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',backgroundColor: '#c0c1c0',
            borderRadius: '15px',display:'flex', flexDirection:{xs:'row', md:'column'},
            justifyContent:'center'
        }}>
            <Box sx={{padding:'10px 0px', backgroundColor:'green', display:'flex',flexDirection:'column', alignItems:'center'}}>
                <Typography
                    variant='h6'
                    sx={{
                        color:{color},
                        position: 'relative',
                        paddingLeft: '20px', // Space for the dot
                        '&::before': {
                            content: '""', // Creates the dot
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)', // Center the dot vertically
                            width: '8px', // Size of the dot
                            height: '8px', // Size of the dot
                            borderRadius: '50%', // Makes it circular
                            backgroundColor: 'blue', // Dot color
                        },
                    }}
                >
                    {title}
                </Typography>
                <Divider sx={{ width: '80%', borderWidth: '3px', borderColor: '#4f36c9' }} />
            </Box>
            <Box sx={{height:'100%', display:'flex', flexDirection:{xs:'row', md:'column'}, justifyContent:'center', alignItems:'center'}}>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
            </Box>
        </Box>
    )
}
