import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TaskCard } from './TaskCard'
import { useSelector } from 'react-redux'
export const TasksList = ({ title, color, listPriority }) => {
    const { tasks } = useSelector((state) => state.tasks)
   
    return (
        <Box sx={{
            position:'relative',
            minHeight: '200px',
            margin:{xs:'10px', md:'0px'},
            height: { xs: 'auto', md: '98%' }, width: { xs: '100vw', md: '25vw' },
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', backgroundColor: '#ecedef',
            borderRadius: '15px', display: 'flex', flexDirection: { xs: 'row', md: 'column' },
            justifyContent: { xs: 'flex-start', md: 'center' }, overflowX: { xs: 'auto', md: 'hidden' }
        }}>
            <Box
                sx={{
                    position:'relative',
                    padding: '10px 0px',
                    display: 'flex',
                    flexDirection: { xs: 'row', md: 'column' }, // Row layout for vertical text, column for normal
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth:{xs:'50px', md:'100%'},
                    marginRight:{xs:'10px', md:'0px'}
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: color,
                        transform: { xs: 'rotate(-90deg)', md: 'none' }, // Rotate text on small screens
                        transformOrigin: 'center', // Ensure rotation happens around the center
                        whiteSpace: 'nowrap', // Prevent text wrapping
                        position: 'relative',
                        paddingLeft: { xs: '0', md: '20px' }, // Space for dot in horizontal layout
                        textAlign: 'center',
                        '&::before': {
                            content: '""', // Creates the dot
                            position: 'absolute',
                            left: { xs: '50%', md: '0' }, // Center for vertical, align left for horizontal
                            top: { xs: '-20px', md: '50%' }, // Adjust position for vertical
                            transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'blue',
                        },
                    }}
                >
                    {title}
                </Typography>
                <Divider
                    sx={{
                        width: { xs: '2px', md: '80%' }, // Vertical line for xs, horizontal for md
                        height: { xs: '80%', md: '2px' }, // Adjust height for vertical divider
                        borderColor: '#4f36c9',
                        margin: { xs: '0 10px', md: '10px 0' }, // Spacing for vertical and horizontal layouts
                    }}
                />
            </Box>

            <Box sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, justifyContent: 'flex-start', alignItems: 'center' }}>
                {
                    (tasks && tasks.length > 0)
                        ?
                        tasks.map((task, index) => {
                            if (task.priority == listPriority) {
                                return <TaskCard key={index} data={task} />
                            } else {
                                return null;
                            }
                        })
                        :
                        null
                }
            </Box>
        </Box>
    )
}
