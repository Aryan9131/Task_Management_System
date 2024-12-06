import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteTask} from '../redux/slices/taskSlice'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function ConfirmationDialog({currentTask }) {
  const [open, setOpen] = React.useState(false);
  const [token, setToken]=useState(localStorage.getItem('token'))

  const dispatch=useDispatch(); 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTaskDelete=async ()=>{
    try {
        const deletedTaskResponse=await fetch(`http://localhost:8000/api/task/delete-task/${currentTask._id}`, {
            method: 'delete', // Method should be part of the options object
            headers: {
                'Content-Type': 'application/json', // Header keys should be quoted, not the object itself
                'Authorization': `Bearer ${token}`
            },
        });
        const deletedTaskData=await deletedTaskResponse.json();
        dispatch(deleteTask({task:currentTask}))
        toast.success("Task Deleted !", {
          style: {
            backgroundColor: 'green', // Custom background color
            color: 'white',           // Custom text color
          }
        });
        handleClose()
    } catch (error) {
      toast.error("Error while deleting !", {
        style: {
          backgroundColor: 'red',   // Custom background color for error
          color: 'white',           // White text color
        }
      });
        console.log("Error while deleting task : "+error)
    }
  }
  return (
    <React.Fragment>
      <Typography onClick={handleClickOpen}>
          Delete
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Task"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            DO YOU WANT TO DELETE ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleTaskDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
