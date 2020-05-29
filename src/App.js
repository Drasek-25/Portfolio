import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import ResumePage from "./Components/ResumePage";
import DarkConstellation from "./Canvas/DarkConstellation";

function App() {
   return (
      <div className="App">
         <DarkConstellation />
         <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/projects/:pageNumber" component={ProjectPage} />
            <Route path="/resume" component={ResumePage} />
            <Route render={() => <h1>404</h1>} />
         </Switch>
      </div>
   );
}

export default App;
