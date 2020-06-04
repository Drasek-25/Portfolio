import React from "react";

import {
   Card,
   CardActions,
   CardContent,
   Button,
   Typography,
   Box,
   CardMedia,
   Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   card: {
      backgroundColor: "#47504F",
      //this variable will require media queries to scale to a proper width based on device

      marginLeft: "auto",
      marginRight: "auto",
   },
   media: {
      height: 200,
   },
});

function ProjectCard({ title, image, liveLink, repoLink, techUsed, features }) {
   const classes = useStyles();

   return (
      <Grid item xs={12} sm={6} md={6} lg={4}>
         <Card className={classes.card} elevation={10}>
            <Typography variant="h6" color="primary" component="div" noWrap>
               <Box m=".5rem"> {title}</Box>
            </Typography>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
               <Typography>
                  <b>Tech Used:</b>
                  <br />
                  {techUsed.map((tech, i) =>
                     i < techUsed.length - 1 ? tech + " , " : " " + tech
                  )}
                  <br />
                  <br />
               </Typography>
               <Box height="7rem">
                  <Typography noWrap={false}>
                     <b>Features:</b>
                     <br />
                     {features.map((feature, i) => {
                        return (
                           <span key={feature}>
                              <>{"• " + feature}</>
                              <br />
                           </span>
                        );
                     })}
                  </Typography>
               </Box>
            </CardContent>
            <CardActions>
               <Button href={liveLink} variant="contained" color="secondary">
                  <Typography color="primary">Live View</Typography>
               </Button>
               <Button href={repoLink} variant="contained" color="secondary">
                  <Typography color="primary">Repo</Typography>
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
}

export default ProjectCard;
