import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
            </Route>
            <Route path="/resume">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
