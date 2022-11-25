import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/SharedPages/Spinner/Spinner';
import { AuthContext } from '../contexts/UserContext/UserContext';
import useCheckRole from '../hooks/useCheckRole';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, roleIsLoading] = useCheckRole(user?.email);


    const location = useLocation();
    if (loading || roleIsLoading) {
        return <Spinner></Spinner>
    }
    if (user?.email && role === 'seller') {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;

};

export default SellerRoute;