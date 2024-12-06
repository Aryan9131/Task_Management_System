import React from 'react'
import { Box, Typography } from '@mui/material'
import { MenuButtons } from './MenuButtons'
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (dataId) => {
    console.log("CardClicked")
    navigate(`/task-detail/${dataId}`)
  }
  const formatDeadline = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB'); // 'en-GB' formats it as dd/mm/yyyy
  };
  return (
    <Box
      id={data._id}
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
        margin:{xs:'5px 10px', md:'10px 0px'}, backgroundColor: 'white', width: { xs: '50%', md: '90%' }, padding: '10px',
        height: { xs: '85%', md: '28%' }, borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
      }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6'>{data.title}</Typography>
        <MenuButtons currentTask={data} />
      </Box>
      <Typography onClick={()=>{handleNavigate(data._id)}} sx={{ cursor: 'pointer', color: 'text.secondary' }}> {data.description} </Typography>
      <Box  onClick={()=>{handleNavigate(data._id)}} sx={{ cursor: 'pointer', flex: 1, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '5px' }}>
        <Typography sx={{ color: 'text.secondary' }}> <span style={{ fontWeight: '800', fontSize: '13px' }}>Deadline &nbsp;</span>{formatDeadline(data.deadline)}</Typography>
        <Typography>{data.status}</Typography>
      </Box>
    </Box>
  )
}
