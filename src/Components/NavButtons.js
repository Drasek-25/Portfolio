import React from "react";
import { Link } from "react-router-dom";

const NavButtons = () => {
   return (
      <div className="navButtons">
         <Link className="largeBtn" to="/projects/1">
            Projects
         </Link>
         <Link className="largeBtn" to="/resume">
            Resume
         </Link>
      </div>
   );
};

export default NavButtons;
