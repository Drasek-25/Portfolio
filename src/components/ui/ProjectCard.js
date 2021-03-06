import React, { useState } from "react";

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
   cardTransparent: {
      backgroundColor: "transparent",
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
   const [cardClass, setCardClass] = useState(classes.card);
   const handleCardClassChange = () => {
      cardClass === classes.card
         ? setCardClass(classes.cardTransparent)
         : setCardClass(classes.card);
   };
   return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
         <Card className={cardClass} elevation={10}>
            <Typography variant="h5" color="primary" component="div" noWrap>
               <Box m=".5rem">{title}</Box>
            </Typography>
            {cardClass !== classes.card ? (
               <Box mt="200px" />
            ) : (
               <CardMedia
                  className={classes.media}
                  image={image}
                  title={title}
               />
            )}

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
               <Box
                  ref={(el) => {
                     if (!el) return;
                     console.log(el.getBoundingClientRect().height);
                  }}
               >
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
               {liveLink && (
                  <Button
                     {...(title === "Constellation Animation"
                        ? { onClick: handleCardClassChange }
                        : { href: liveLink })}
                     variant="contained"
                     color="secondary"
                  >
                     <Typography color="primary">Live View</Typography>
                  </Button>
               )}
               <Button href={repoLink} variant="contained" color="secondary">
                  <Typography color="primary">Repo</Typography>
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
}

export default ProjectCard;
