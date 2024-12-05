import { Box, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
    return (
        <Box sx={{ height: '13vh', width: '90vw', backgroundColor: '#ecedef', margin: '20px 0px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
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
        </Box>
    )
}
