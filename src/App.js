
import './App.css';
import DemoLoginOne from './pages/demo_login_one.js'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Router>
          <div>
            <Route exact path="/demo-login-one" component={DemoLoginOne} ></Route>
          </div>
        </Router>
  );
}

export default App;
