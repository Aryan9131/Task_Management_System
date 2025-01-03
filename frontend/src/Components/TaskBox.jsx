import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useNavigate } from 'react-router-dom';
export const TaskBox = ({count, title}) => {
   const navigate=useNavigate();
  return (
    <Box 
         onClick={()=>{title=='Active' ? navigate('/') : ""}}
          sx={{
            borderRadius:'10px', backgroundColor:'whitesmoke',margin:'10px 5px', 
            width:'180px', height:{xs:'70px', md:'150px'}, display:'flex', flexDirection:{xs:'column', sm:'row', md:'column'}, 
            alignItems:'center', justifyContent:'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Bottom-only shadow
            cursor:title=='Active' ? 'pointer' :'default',
            transition:'all .3s ease-in-out',
            '&:hover':{
              backgroundColor:title=='Active' ? 'lightblue' :'none'
            }
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
