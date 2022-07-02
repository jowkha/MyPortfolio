import logo from './logo.svg';
// import { IoLogoGithub } from "react-icons/fa";
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" >
            < Profile /> 
          </Route>
          <Route path="/projects" >
            < Projects />
          </Route>
          <Route path="/experience" >
            < Experience />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
