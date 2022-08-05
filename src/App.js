import './App.css';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.js';
import Skills from './Components/Skills.jsx';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
   </div>
  );
}

export default App;
