import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export const TaskBox = ({count, title}) => {
  return (
    <Box sx={{
            borderRadius:'10px', backgroundColor:'whitesmoke',margin:'10px 5px', 
            width:'180px', height:{xs:'70px', md:'150px'}, display:'flex', flexDirection:{xs:'column', sm:'row', md:'column'}, 
            alignItems:'center', justifyContent:'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Bottom-only shadow
            }}>
           <ContentPasteOffIcon sx={{color:'red', fontWeight:'bold',display:{xs:'none', sm:'flex'}, width:{xs:"15px", sm:'20px', md:'35px'}, height:{xs:"15px", sm:'20px', md:'35px'}}}/>
            <Typography sx={{color: 'text.secondary', fontWeight:'600'}}>
               {title}
            </Typography>
            <Typography sx={{fontWeight:'1000', fontSize:'25px'}}>
                {count}
            </Typography>
    </Box>
  )
}
