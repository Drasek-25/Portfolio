import React from "react";
import data from "../data/data";
import ProjectCard from "../ui/ProjectCard";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
   card: {
      backgroundColor: "rgba(71, 80, 79, 1)",
   },
   media: {
      height: 120,
   },
});

const Projects = () => {
   return (
      <Box mt="6rem" mx="auto" maxWidth="1280px" width="90%">
         <Grid container spacing={2} justify="center" alignItems="center">
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
