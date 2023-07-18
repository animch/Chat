

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import NotFound from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';

const App = () => (
  <div className="h-100">
    <div className="d-flex flex-column h-100">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  </div>
);

export default App;