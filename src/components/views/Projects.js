import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
      minWidth: 275,
   },
   bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
});

const Projects = () => {
   const classes = useStyles();
   return (
      <Grid
         container
         spacing={1}
         direction="column"
         justify="center"
         alignItems="center"
         style={{ minHeight: "95vh" }}
      >
         <Card>
            <CardContent>
               <Typography
                  variant="h1"
                  color="primary"
                  component="div"
                  className={classes.h1}
               >
                  <Box>Patrick Marschlowitz</Box>
               </Typography>
            </CardContent>
            <CardActions>
               <Button>Live View</Button>
               <Button>Repo</Button>
            </CardActions>
         </Card>
      </Grid>
   );
};
export default Projects;
