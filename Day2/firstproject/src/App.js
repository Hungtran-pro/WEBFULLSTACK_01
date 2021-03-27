import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {
        <Router>
          <Switch>
            <Route exact={true} path="/">
              <Main />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;