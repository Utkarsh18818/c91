import React from 'react';
import { Link,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';
import './index.css';
import Navbar from './components/navigation/Navbar';
import FullScreenNav from './components/navigation/FullScreenNav';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;