import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import {
   AppBar,
   Toolbar,
   Typography,
   useScrollTrigger,
   Box,
   Tabs,
   Tab,
   Button,
   Tooltip,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
} from "@material-ui/core";
import {
   Home,
   GitHub,
   Email,
   LinkedIn,
   Menu,
   LastPage,
   Folder,
   Description,
   ContactMail,
} from "@material-ui/icons";

function ElevationScroll(props) {
   const { children } = props;

   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   return React.cloneElement(children, {
      // trigger ? shadow during scroll : resting shadow
      elevation: trigger ? 10 : 0,
      color: trigger ? "#47504F" : "transparent",
   });
}

const drawerWidth = 180;
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
   menuButtonContainer: {
      margin: [["auto", "5px", "auto", "auto"]],
   },
   largeIcon: {
      marginLeft: "1rem",
      width: 40,
      height: 40,
   },
   //all classes down here control the menu button and drawer
   root: {
      display: "flex",
   },
   appBar: {
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
   },
   title: {
      flexGrow: 1,
   },
   hide: {
      display: "none",
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(71, 80, 79, 1)",
      height: "auto",
   },
   drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
   },
   contentShift: {
      transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
   },
}));

function Header() {
   const classes = useStyles();
   const [pageSelection, setPageSelection] = useState(0);
   const [open, setOpen] = React.useState(false);

   const handleTabChange = (e, value) => {
      setPageSelection(value);
   };

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   return (
      <ElevationScroll>
         <AppBar position="fixed">
            <Box>
               <Toolbar>
                  <Box display={{ xs: "none", md: "block", lg: "block" }}>
                     <Typography
                        variant="h5"
                        color="primary"
                        className={classes.headerName}
                     >
                        <Box fontWeight="fontWeightRegular" mt=".5rem">
                           Patrick Marschlowitz
                        </Box>
                     </Typography>
                     <Box display="flex" justifyContent="center" mb=".5rem">
                        <Tooltip id="github" title="View my Github">
                           <Button href="https://github.com/Drasek-25">
                              <GitHub />
                           </Button>
                        </Tooltip>
                        <Tooltip id="Email" title="Contact Me">
                           <Button href="mailto:p.marschlowitz@gmail.com">
                              <Email />
                           </Button>
                        </Tooltip>
                        <Tooltip id="LinkedIn" title="View my LinkedIn">
                           <Button href="https://www.linkedin.com/in/patrick-marschlowitz-77ba5b7b/">
                              <LinkedIn />
                           </Button>
                        </Tooltip>
                     </Box>
                  </Box>
                  <Box
                     display={{ xs: "none", md: "block", lg: "block" }}
                     className={classes.tabContainer}
                  >
                     <Tabs
                        value={pageSelection}
                        onChange={handleTabChange}
                        classes={{ indicator: classes.bigIndicator }}
                     >
                        <Tab
                           label="Home"
                           className={classes.tab}
                           component={Link}
                           to="/"
                        />
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

                  <Box display={{ xs: "block", md: "none", lg: "none" }}>
                     <Typography variant="h5" color="primary">
                        <Box fontWeight="fontWeightRegular">
                           Patrick Marschlowitz
                        </Box>
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
               </Toolbar>
            </Box>
            <Drawer
               className={classes.drawer}
               variant="persistent"
               anchor="right"
               open={open}
               classes={{
                  paper: classes.drawerPaper,
               }}
            >
               <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                     <LastPage className={classes.largeIcon} color="primary" />
                  </IconButton>
               </div>
               <List>
                  <ListItem button key={"Home"} component={Link} to="/">
                     <ListItemIcon>
                        <Home color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                     button
                     key={"Projects"}
                     component={Link}
                     to="/projects"
                  >
                     <ListItemIcon>
                        <Folder color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem button key={"Resume"} component={Link} to="/resume">
                     <ListItemIcon>
                        <Description color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Resume" />
                  </ListItem>
                  <ListItem
                     button
                     key={"Contacts"}
                     component={Link}
                     to="/contact"
                  >
                     <ListItemIcon>
                        <ContactMail color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Contacts" />
                  </ListItem>
                  <ListItem
                     component={Button}
                     href='href="https://github.com/Drasek-25"'
                  >
                     <ListItemIcon>
                        <GitHub color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Github" />
                  </ListItem>
                  <ListItem
                     component={Button}
                     href='href="https://github.com/Drasek-25"'
                  >
                     <ListItemIcon>
                        <LinkedIn color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="LinkedIn" />
                  </ListItem>
               </List>
            </Drawer>
         </AppBar>
      </ElevationScroll>
   );
}

export default Header;
