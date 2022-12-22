import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {token} = useSelector(store => store.authStore);
   return  !token? <Navigate to='/login' /> :  children;

}

export default PrivateRoute