import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const {user, isLoading} = useAuth()
  const location = useLocation()
    if(isLoading){
      return  <div style={{display:'flex',justifyContent:"center", alignItems:"center", height:"80vh"}}>
      <Spinner animation="border" className="m-5" />
      </div>
   }
   if(user.email){
       return children;
   }
   return <Navigate to="/login" state={{from : location}} />;
};

export default PrivateRoute;