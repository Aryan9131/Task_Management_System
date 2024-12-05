import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './Components/Navbar'; // Part of the Layout
import {HomePage} from './Components/HomePage'; // Example children route
import {TaskDetail} from './Components/TaskDetail'; // Example children route

// import AllTasksPage from './Pages/AllTasksPage'; // Example children route
// import SignInPage from './Pages/SignInPage'; // Standalone page
// import SignUpPage from './Pages/SignUpPage'; // Standalone page

import Layout from './Components/Layout'; // Layout for authenticated pages

function App() {
    return (
        <Routes>
            {/* Standalone routes */}
            {/* <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} /> */}

            {/* Routes with Layout */}
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/task-detail" element={<TaskDetail />} />
            </Route>
        </Routes>
    );
}

export default App;
