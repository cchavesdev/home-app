import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Shopping from "./components/Shopping/Shopping";

function App() {
  return (
    <div className="app-content">
    <Router>
          
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/shopping">
                <Shopping />
              </Route>
            </Switch>
            <Navigation></Navigation>
        </Router>     
    </div>
     );
    
}

export default App;
