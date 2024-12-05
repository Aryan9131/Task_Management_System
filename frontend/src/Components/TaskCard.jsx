import React from 'react'
import {Box, Typography} from '@mui/material'
import {MenuButtons} from './MenuButtons'
import { useNavigate } from 'react-router-dom';

export const TaskCard = () => {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    console.log("CardClicked")
    navigate('/task-detail')
  }
  return (
    <Box sx={{ 
              display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',
              margin:'10px 0px', backgroundColor:'white', width:{xs:'25%', md:'90%'},padding:'10px',
              height:{xs:'90%', md:'28%'}, borderRadius:'15px', boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.2)'   
            }}>
        <Box sx={{width:'100%', display:'flex', justifyContent:'space-between'}}>
           <Typography variant='h6'>Title</Typography>
            <MenuButtons />
        </Box>
         <Typography onClick={handleNavigate} sx={{cursor:'pointer',color:'text.secondary'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus! </Typography>
         <Box onClick={handleNavigate} sx={{cursor:'pointer',flex:1,width:'100%', display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingBottom:'5px'}}>
            <Typography sx={{color:'text.secondary'}}> <span style={{fontWeight:'800', fontSize:'13px'}}>Deadline</span> 12/06/24</Typography>
            <Typography>status</Typography>
         </Box>
    </Box>
  )
}
