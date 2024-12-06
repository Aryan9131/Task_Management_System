import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { addTask , updateTask} from '../redux/slices/taskSlice';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function UpdateTaskDialog({prevtask}) {
    console.log("prevTask get --> "+JSON.stringify(prevtask))
    const formatDeadline = (isoDate) => {
        if (!isoDate) return ""; // Return empty string if no date is provided
        const date = new Date(isoDate);
        console.log("Formatted date: ", date); // Debugging: check the parsed date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
        const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
        return `${year}-${month}-${day}`; // Return in YYYY-MM-DD format
    };
    
    const dispatch =useDispatch();
    const [token, setToken]=useState(localStorage.getItem('token'))
    const [title, setTitle] = React.useState(prevtask.title);
    const [description, setDescription] = React.useState(prevtask.description || "");
    const [deadline, setDeadline] = React.useState(formatDeadline(prevtask.deadline) || "");
    const [priority, setPriority]= React.useState(prevtask.priority || 'low')
    const [status, setStatus] = React.useState(prevtask.status || 'progress');
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
   
    const handleUpdateTask=async ()=>{
        try {
        const obj={
            title:title,
            description:description,
            deadline:deadline,
            status:status,
            priority:priority
        }
        const updatedTaskResponse = await fetch(`http://localhost:8000/api/task/update-task/${prevtask._id}`, {
            method: 'POST', // Method should be part of the options object
            headers: {
                'Content-Type': 'application/json', // Header keys should be quoted, not the object itself
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(obj), // The body should be part of the options object
        });
        const updatedTaskData=await updatedTaskResponse.json();
        dispatch(updateTask({task:updatedTaskData.updatedTask}))
        toast.success("Task Updated !", {
            style: {
              backgroundColor: 'green', // Custom background color
              color: 'white',           // Custom text color
            }
          });
        handleClose();
        } catch (error) {
            toast.error("Error while Updating !", {
                style: {
                  backgroundColor: 'red',   // Custom background color for error
                  color: 'white',           // White text color
                }
              });
        }
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Typography
                onClick={handleClickOpen}
            >
               Edit
            </Typography>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    '& .MuiDialog-paper': {
                        width: fullScreen ? '90%' : '30%', // Adjust width
                        height: '70vh', // Adjust height
                        maxWidth: '400px', // Set maximum width
                    },
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"Add Task"}</DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px', // Add spacing between fields
                    }}
                >
                    <TextField
                        variant="filled"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ width: '90%' }} // Make field take 90% of dialog width
                    />
                    <TextField
                        id="filled-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        variant="filled"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ width: '90%' }} // Make field take 90% of dialog width
                    />
                    <TextField
                        variant="filled"
                        label="Deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        sx={{ width: '90%' }}
                        InputLabelProps={{
                            shrink: true, // Ensures the label stays above the input
                        }}
                    />
                    <Box sx={{ marginTop:'20px',width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={status}
                            label="status"
                            onChange={(e)=>setStatus(e.target.value)}
                            sx={{fontWeight:'600', color:status=="progress"?'orange':'green'}}
                        >
                            <MenuItem value="progress" sx={{color:'orange'}}> progress</MenuItem>
                            <MenuItem value="done" sx={{color:'green'}}>done</MenuItem>
                        </Select>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={priority}
                            label="priority"
                            onChange={(e)=>setPriority(e.target.value)}
                            sx={{fontWeight:'600', color:priority=="high"?'red':priority=='moderate'?"orange":'yellow'}}
                        >
                            <MenuItem value="high" sx={{color:'red'}}> high</MenuItem>
                            <MenuItem value="moderate" sx={{color:'orange'}}>moderate</MenuItem>
                            <MenuItem value="low" sx={{color:'yellow'}}>low</MenuItem>
                        </Select>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdateTask} autoFocus>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
