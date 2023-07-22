import { useContext } from 'react';

import { AuthContext } from '../contexts/context.js';

const useAuth = () => useContext(AuthContext);

export { useAuth };