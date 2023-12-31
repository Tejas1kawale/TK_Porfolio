import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Router>
          <>
          <Navbar></Navbar>
        
          <Switch>
          
            <Route path="/">
                <About></About>
                <Projects></Projects>
            </Route>
          </Switch>
          </>
      </Router>
    </>

  );
}

export default App;
