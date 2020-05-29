import React from "react";
import github from "../images/github.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";

const ContactIcons = () => {
   return (
      <div className="light">
         <a href="https://github.com/Drasek-25">
            <img className="smallBtn" src={github} alt="github" />
         </a>
         <a href="mailto:p.marschlowitz@gmail.com">
            <img className="smallBtn" src={email} alt="email" />
         </a>
         <a href="https://www.linkedin.com/in/patrick-marschlowitz-77ba5b7b">
            <img className="smallBtn" src={linkedin} alt="linkedin" />
         </a>
      </div>
   );
};

export default ContactIcons;
