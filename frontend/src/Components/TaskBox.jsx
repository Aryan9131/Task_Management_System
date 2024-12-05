import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export const TaskBox = () => {
  return (
    <Box sx={{
            borderRadius:'10px', backgroundColor:'whitesmoke',margin:'10px 5px', 
            width:'180px', height:'130px', display:'flex', flexDirection:'column', 
            alignItems:'center', justifyContent:'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Bottom-only shadow
            }}>
           <ContentPasteOffIcon sx={{color:'red', fontWeight:'bold', width:'35px', height:'35px'}}/>
            <Typography sx={{color: 'text.secondary', fontWeight:'600'}}>
               Expired Tasks
            </Typography>
            <Typography sx={{fontWeight:'1000', fontSize:'25px'}}>
                2
            </Typography>
    </Box>
  )
}
