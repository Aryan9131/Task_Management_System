import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { rehydrateUser } from '../redux/slices/userSlice';

const Rehydrate = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [token, setToken]=useState(localStorage.getItem('token'))

    useEffect(() => {
            const fetchUser = async () => {
                const fetchedUserResponse =  await fetch('http://localhost:8000/api/user/get-user', {
                  method: "GET",
                  headers: {
                    'content-type': 'appliation/json',
                     'Authorization': `Bearer ${token}`
                  },
                })
                const fetchedUserData = await fetchedUserResponse.json();
                if (fetchedUserData.user) {
                  localStorage.setItem('userId', fetchedUserData.user._id);
                  dispatch(setUser(fetchedUserData.user))
                  dispatch(setTasks({ allTasks: fetchedUserData.tasks }));
                  dispatch(rehydrateUser(JSON.parse(fetchedUserData.user)));
                }
               
              }            
        fetchUser();
        setLoading(false);
    }, [dispatch,token]);

    if (loading) {
        return <div>Loading...</div>; // You can add a loading spinner here if you like
    }

    return children;
};

export default Rehydrate;