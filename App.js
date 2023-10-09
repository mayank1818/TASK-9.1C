import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css'; // Import the CSS file here

function App() {
  return (
    <div className='App'>
      {/* Browser Routing */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
