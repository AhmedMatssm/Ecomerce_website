import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './features/signUp'
import SignIn from './features/signIn'
import Dashboard from './features/dashboard';
import Profile from './common/components/sidebar/profile';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App

