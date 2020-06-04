import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import { Box, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   tabContainer: {
      marginLeft: "auto",
   },
   tab: {
      ...theme.typography.tab,
   },
   bigIndicator: {
      height: 8,
   },
}));

function NavTabs({ handleTabChange, pageSelection }) {
   const classes = useStyles();

   return (
      <Box
         display={{ xs: "none", md: "block", lg: "block" }}
         className={classes.tabContainer}
      >
         <Tabs
            value={pageSelection}
            onChange={handleTabChange}
            classes={{ indicator: classes.bigIndicator }}
         >
            <Tab label="Home" className={classes.tab} component={Link} to="/" />
            <Tab
               label="Projects"
               className={classes.tab}
               component={Link}
               to="/projects"
            />
            <Tab
               label="Resume"
               className={classes.tab}
               component={Link}
               to="/resume"
            />
            <Tab
               label="Contact"
               className={classes.tab}
               component={Link}
               to="/contact"
            />
         </Tabs>
      </Box>
   );
}

export default NavTabs;
