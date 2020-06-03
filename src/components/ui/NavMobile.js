import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Typography, Box, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   menuButtonContainer: {
      margin: [["auto", "5px", "auto", "auto"]],
   },
   largeIcon: {
      marginLeft: "1rem",
      width: 40,
      height: 40,
   },
   hide: {
      display: "none",
   },
}));

function Header({ handleDrawerOpen, open }) {
   const classes = useStyles();

   return (
      <>
         <Box display={{ xs: "block", md: "none", lg: "none" }}>
            <Typography variant="h5" color="primary">
               <Box fontWeight="fontWeightRegular">Patrick Marschlowitz</Box>
            </Typography>
         </Box>
         <Box
            display={{ xs: "block", md: "none", lg: "none" }}
            className={classes.menuButtonContainer}
         >
            <IconButton
               color="inherit"
               aria-label="open drawer"
               edge="end"
               onClick={handleDrawerOpen}
               className={clsx(open && classes.hide)}
               size="small"
            >
               <Menu color="primary" className={classes.largeIcon} />
            </IconButton>
         </Box>
      </>
   );
}

export default Header;
