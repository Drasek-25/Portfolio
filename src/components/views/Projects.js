import React from "react";
import data from "../data/data";
import ProjectCard from "../ui/ProjectCard";

import { Grid, Box } from "@material-ui/core";

const Projects = () => {
   return (
      <Box mt="7rem" mx="auto" maxWidth="1280px" width="90%">
         <Grid container spacing={4} justify="center" alignItems="center">
            {data.map((project, i) => {
               return (
                  <ProjectCard
                     key={project.title}
                     title={project.title}
                     image={project.image}
                     liveLink={project.liveLink}
                     repoLink={project.repoLink}
                     techUsed={project.techUsed}
                     features={project.features}
                  />
               );
            })}
         </Grid>
      </Box>
   );
};
export default Projects;
