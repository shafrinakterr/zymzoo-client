import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from '../../provider/AuthProvider';
const PriRouter = ({children}) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PriRouter;