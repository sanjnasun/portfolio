import Navigation from './components/nav';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import { Box } from '@mui/material';
import './components/app.css';

function App() {
  return (
    <Box className='backgroundIMG'>
      {/* <Navigation className='bean'/> */}
      <Header className='header'/>
      <Projects className="header"/>
      <Experience className="header"/>
      <About className="header"/>
      <Contact className="header"/>
    </Box>
  );
}

export default App;
