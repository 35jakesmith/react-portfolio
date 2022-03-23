import './App.css';
import React, { useState } from 'react';
import  { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './componets/Header.js';
import Nav from './componets/Nav.js';
import Footer from './componets/Footer.js';
import About from './componets/About';
import Project from './componets/Project.js';

function App() {

  const [navItems] = useState([
    { name: "About", description: "about me page"},
    { name: "Project", description: "page containing past projects"},
  ]);

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
  <Router>
    <div className="App">
        {/* <Header /> */}
        <Nav
          navItems={navItems}
          setCurrentNavItem={setCurrentNavItem}
          currentNavItem={currentNavItem}
        />
        <main>
          <Routes>
          <Route exact path='/' element={<About />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/project' element={<Project />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  </Router>
  );
}

export default App;