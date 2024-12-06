import { Routes, Route,Navigate  } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './Components/Navbar'; // Part of the Layout
import {HomePage} from './Components/HomePage'; // Example children route
import {TaskDetail} from './Components/TaskDetail'; // Example children route
import { useState } from 'react';
import {AllTasks} from './Components/AllTasks'
// import AllTasksPage from './Pages/AllTasksPage'; // Example children route
// import SignInPage from './Pages/SignInPage'; // Standalone page
import {SignUp} from './Components/SignUp'; // Standalone page
import {SignIn} from './Components/SignIn'; // Standalone page

import Layout from './Components/Layout'; // Layout for authenticated pages

function App() {
    const [token, setToken]=useState(localStorage.getItem('token'))
    return (
        <Routes>
            {/* Standalone routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Routes with Layout */}
            <Route path="/" element={token ? <Layout /> : <Navigate to="/sign-up" />}>
                <Route path="/" element={token ? <HomePage />:<Navigate to="/sign-up"/>} />
                <Route path="/all-tasks" element={token ? <AllTasks />:<Navigate to="/sign-up"/>} />
                <Route path="/task-detail/:id" element={<TaskDetail />} />
            </Route>
        </Routes>
    );
}

export default App;
