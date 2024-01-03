import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   
      <Router>
        <Navbar/>
          <Routes>s
          
            <Route path="/" element={<About/>}> </Route>
            
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
          </Routes>
          
      </Router>

  );
}

export default App;
