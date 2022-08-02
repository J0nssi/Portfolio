import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar2.tsx';
import Card from './Components/Card.tsx';
import Skills from './Components/Skills.jsx';
import About from './Components/About.tsx';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.tsx';


//npm install typescript-parser
//npm install react-scroll-motion

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
