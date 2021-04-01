import logo from './logo.svg';
import './App.css';
import JoinUs from './pages/joinUs'
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/joinus">
          <JoinUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
