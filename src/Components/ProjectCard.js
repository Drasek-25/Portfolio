import React from "react";

const ProjectCard = ({
   title,
   image,
   liveLink,
   repoLink,
   techUsed,
   features,
}) => {
   return (
      <div className="projectCard row">
         <div className="projectCardCol col">
            <h5>{title}</h5>
            <img src={image} alt={`${title}`} className="projectImg" />
            <div className="row">
               <a className="projectBtn" href={liveLink}>
                  Live Preview
               </a>
               <a className="projectBtn" href={repoLink}>
                  Code Repo
               </a>
            </div>
         </div>
         <div className="projectCardCol col">
            <h6>Tech Used</h6>
            <ul>
               {techUsed.map((tech, i) => (
                  <li className="projectLi" key={tech + i}>
                     {tech}
                  </li>
               ))}
            </ul>
            <h6>Notable Features</h6>
            <ul>
               {features.map((feature, i) => (
                  <li className="projectLi" key={feature + i}>
                     {feature}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default ProjectCard;
