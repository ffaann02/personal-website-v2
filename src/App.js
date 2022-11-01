import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroBlock from './components/HeroBlock';
import { Box } from '@mui/system';
import Skill from './components/Skill';
import "./index.css"
import Project from './components/Project';
function App() {
  return (
    <Box>
      <Navbar/>
      <HeroBlock/>
      <Skill/>
      <Project/>
    </Box>
  );
}

export default App;
