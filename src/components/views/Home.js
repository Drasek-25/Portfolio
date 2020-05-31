import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";

const Home = () => {
   return (
      <>
         <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            style={{ minHeight: "95vh" }}
         >
            <Grid item>
               <Typography
                  variant="h2"
                  color="primary"
                  fontWeight="fontWeightBold"
               >
                  <Box fontWeight="fontWeightBold">Patrick Marschlowitz</Box>
               </Typography>
            </Grid>
            <Grid item>
               <Typography variant="h4" color="primary">
                  Full Stack Web Developer
               </Typography>
            </Grid>
         </Grid>
      </>
   );
};
export default Home;
