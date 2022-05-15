import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import Test from "./components/pages/Test";
import Result from "./components/pages/Result";
import QuizPage from "./components/pages/Quiz";

function App() {
  return (
    <Router>
      {/* <Navbar> </Navbar> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={QuizPage}></Route>
        {/* <Route path="/test" component={Test} /> */}
        <Route path="/result" component={Result} />
        {/* <Route path="/feed-back" component={Feedback} /> */}
      </Switch>
    </Router>
  );
}

export default App;
