import React from 'react'
import SignUp from './features/signUp'
import SignIn from './features/signIn'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './features/dashboard';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App

