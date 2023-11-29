import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth';

const HomeView = () => {
  const {isLoggedId} = useAuth();
  console.log("isLoggedId", isLoggedId);
  return (
    <div>
      HomeView
    </div>
  );
}

export default HomeView;
