import React from "react";
import ContactIcons from "./ContactIcons";
import NavButtons from "./NavButtons";
import StylisticSeperator from "./StylisticSeperator";
import chevron from "../images/chevron.svg";
import { Link } from "react-router-dom";
import projectData from "../Data/projects";
import ProjectCard from "./ProjectCard";

const ProjectPage = (props) => {
   const projectCardReader = (projectsArray) => {
      return projectsArray.slice(
         props.match.params.pageNumber * 4 - 4,
         props.match.params.pageNumber * 4
      );
   };

   return (
      <div className="light">
         <header className="header row">
            <div className="contactCard col">
               <h5>Patrick Marschlowitz</h5>
               <ContactIcons />
            </div>
         </header>
         <header className="header row ">
            <div className="center col">
               <NavButtons />
               <StylisticSeperator />
            </div>
         </header>
         <div className="mainCardContainer col">
            {props.match.params.pageNumber > 1 ? (
               <div className="chevronContainer">
                  <Link
                     to={`/projects/${
                        parseInt(props.match.params.pageNumber) - 1
                     }`}
                  >
                     <img
                        className="smallBtn chevronTop"
                        src={chevron}
                        alt="chevron"
                     />
                  </Link>
               </div>
            ) : (
               <div className="chevronContainer"></div>
            )}
            <div className="projectsContainer">
               {projectCardReader(projectData).map((project, i) => (
                  <ProjectCard
                     key={project.title}
                     title={project.title}
                     image={project.image}
                     liveLink={project.liveLink}
                     repoLink={project.repoLink}
                     techUsed={project.techUsed}
                     features={project.features}
                  />
               ))}
            </div>
            <div className="chevronContainer">
               <Link
                  to={`/projects/${
                     parseInt(props.match.params.pageNumber) + 1
                  }`}
               >
                  <img
                     className="smallBtn chevronBottom"
                     src={chevron}
                     alt="chevron"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ProjectPage;
