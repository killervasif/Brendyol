import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'react-auth-kit';


const PrivateRoute = ({ path, ...props }) => {
  const { token } = useAuth();

  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;