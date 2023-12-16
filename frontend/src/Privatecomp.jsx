import React from 'react'
import { Navigate,Outlet } from 'react-router'

const Privatecomp=()=>{
    const auth=localStorage.getItem('user');
    return (
        auth?<Outlet/>:<Navigate to="/Signup"/>
    )

    
}

export default Privatecomp
