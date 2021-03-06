import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./ui/Header";
import DarkConstellation from "./ui/Canvas";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import Projects from "./views/Projects";
import theme from "./ui/Theme";

import { ThemeProvider } from "@material-ui/core/styles";

function App() {
   console.log(
      `
Hello! 

Thanks for checking out my portfolio. 
I am currently looking for work as a developer and would love to hear from you!
Checkout my resume or contact me to get in touch

Cheers,
   Patrick
`
   );
   return (
      <ThemeProvider theme={theme}>
         <Header />

         <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <h1>404</h1>} />
         </Switch>

         <DarkConstellation className="canvas" />
      </ThemeProvider>
   );
}

export default App;
