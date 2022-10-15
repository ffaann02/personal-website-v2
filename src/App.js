import logo from './logo.svg';
import Navbar from './components/Navbar';
import HeroBlock from './components/HeroBlock';
import { Box } from '@mui/system';
import Skill from './components/Skill';
import "./index.css"
function App() {
  return (
    <Box>
      <Navbar/>
      <HeroBlock/>
      <Skill/>
    </Box>
  );
}

export default App;
