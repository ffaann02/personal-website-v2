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
import Error404 from './components/Error404';

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/"
            element={
              <div>
                <Navbar />
                <HeroBlock />
                <Skill />
                <Project />
                {/*<Blog/>*/}
                <Contact />
              </div>
            }/>
          <Route path="*"
            element={
            <div>
              <Error404/>
            </div>}
          />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
