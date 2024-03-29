import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/hooks.js';

import ChatPage from './chat/ChatPage.jsx';
import getRoutes from '../routes.js';

const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.user ? (<ChatPage />) : (
      <Navigate
        to={getRoutes.loginPagePath()}
        state={{ from: location }}
      />
    )
  );
};

export default PrivateRoute;
