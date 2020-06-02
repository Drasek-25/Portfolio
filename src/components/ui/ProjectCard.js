import React from "react";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
   card: {
      backgroundColor: "rgba(71, 80, 79, 1)",
      width: "20rem",
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
      <Grid item xs>
         <Card className={classes.card} elevation={10}>
            <Typography variant="h6" color="primary" component="div" noWrap>
               <Box m=".5rem"> {title}</Box>
            </Typography>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
               <Typography>
                  <b>Tech Used:</b>
                  <br />
                  {techUsed.map((tech, i) => {
                     return (
                        <span key={tech}>
                           {i < techUsed.length - 1 ? tech + ", " : tech}
                        </span>
                     );
                  })}
               </Typography>
               <Typography noWrap>
                  <b>Features:</b>
                  <br />
                  {features.map((feature, i) => {
                     return (
                        <span key={feature}>
                           <span>{feature} </span>
                           <br />
                        </span>
                     );
                  })}
               </Typography>
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
