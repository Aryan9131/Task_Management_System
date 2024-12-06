import { Box, TextField, InputAdornment, IconButton,Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.reload() 
    }
    return (
        <Box sx={{ height: '13vh', width: {xs:'100vw', md:'90vw'}, backgroundColor: '#ecedef', margin: {xs:'5px 0px',md:'20px 0px'}, borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
            <TextField
                sx={{
                    width: '40%',
                    height: '80%',
                    marginLeft: '20px',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Bottom-only shadow
                    color: 'black',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                        border: 'none', // Remove the border
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Remove the outline
                      }
                }}
                placeholder="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
         <Button sx={{positon:'absolute', top:'0%', right:{xs:'-5%',sm:'-15%', md:'-30%'}}} onClick={()=>navigate('/all-tasks')} >All Tasks</Button>
         <Button sx={{positon:'absolute', top:'0%', right:{xs:'-10%',sm:'-20%', md:'-40%'}}} onClick={handleLogout}>logout</Button>
        </Box>
    )
}
