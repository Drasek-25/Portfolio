import React from "react";
import NavButtons from "./NavButtons";
import ContactIcons from "./ContactIcons";

const HomePage = () => {
   return (
      <div className="homePageContainer">
         <div className="splashContainer">
            <ContactIcons />
            <h1 className="centerText">Patrick Marschlowitz</h1>
            <h3 className="centerText">Full Stack Web Developer</h3>
            <NavButtons />
         </div>
      </div>
   );
};

export default HomePage;
