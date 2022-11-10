import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroBlock from './components/HeroBlock';
import { Box } from '@mui/system';
import Skill from './components/Skill';
import "./index.css"
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import Blog from './components/Blog';

function App() {
  return (
    <Box>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/"
            element={
              <div>
                <HeroBlock />
                <Skill />
                <Project />
                <Blog/>
                <Contact />
              </div>
            }>
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </Box>
  );
}

export default App;
