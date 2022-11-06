import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroBlock from './components/HeroBlock';
import { Box } from '@mui/system';
import Skill from './components/Skill';
import "./index.css"
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <Box>
      <Navbar/>
      <HeroBlock/>
      <Skill/>
      <Project/>
      <Contact/>
    </Box>
  );
}

export default App;
