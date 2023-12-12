import React from 'react'
import { useAuth } from '../hook/use_auth1'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to="/" />;
  return (children)
}

export default PublicRoute