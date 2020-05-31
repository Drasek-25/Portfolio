import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { Drawer } from "@material-ui/core/";
import { Divider } from "@material-ui/core/";
import { IconButton } from "@material-ui/core/";
import { List } from "@material-ui/core/";
import { ListItem } from "@material-ui/core/";
import { ListItemIcon } from "@material-ui/core/";
import { ListItemText } from "@material-ui/core/";

import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import LastPageIcon from "@material-ui/icons/LastPage";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";

function ElevationScroll(props) {
   const { children } = props;

   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   return React.cloneElement(children, {
      // trigger ? shadow during scroll : resting shadow
      elevation: trigger ? 0 : 0,
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
   headerName: {
      marginTop: "10px",
   },
   bigIndicator: {
      height: 8,
   },
   menuButtonContainer: {
      margin: [[20, 20, 0, "auto"]],
   },
   largeIcon: {
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
   const theme = useTheme();
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
         <AppBar position="fixed" color="transparent">
            <Toolbar>
               <Box display={{ xs: "none", md: "block", lg: "block" }}>
                  <Typography
                     variant="h5"
                     color="primary"
                     className={classes.headerName}
                  >
                     <Box fontWeight="fontWeightRegular">
                        Patrick Marschlowitz
                     </Box>
                  </Typography>
                  <Box display="flex" justifyContent="center">
                     <Tooltip id="github" title="View my Github">
                        <Button href="https://github.com/Drasek-25">
                           <GitHubIcon />
                        </Button>
                     </Tooltip>
                     <Tooltip id="Email" title="Contact Me">
                        <Button href="mailto:p.marschlowitz@gmail.com">
                           <EmailIcon />
                        </Button>
                     </Tooltip>
                     <Tooltip id="LinkedIn" title="View my LinkedIn">
                        <Button href="https://www.linkedin.com/in/patrick-marschlowitz-77ba5b7b/">
                           <LinkedInIcon />
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
                     <MenuIcon color="primary" className={classes.largeIcon} />
                  </IconButton>
               </Box>
            </Toolbar>
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
                     <LastPageIcon
                        className={classes.largeIcon}
                        color="primary"
                     />
                  </IconButton>
               </div>
               <List>
                  <ListItem button key={"Home"} component={Link} to="/">
                     <ListItemIcon>
                        <HomeIcon color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button key={"Projects"} component={Link} to="/">
                     <ListItemIcon>
                        <FolderIcon color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem button key={"Resume"} component={Link} to="/">
                     <ListItemIcon>
                        <DescriptionIcon color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Resume" />
                  </ListItem>
                  <ListItem button key={"Contacts"} component={Link} to="/">
                     <ListItemIcon>
                        <ContactMailIcon color="primary" />
                     </ListItemIcon>
                     <ListItemText primary="Contacts" />
                  </ListItem>
                  <ListItem>
                     <Button href="https://github.com/Drasek-25">
                        <ListItemIcon>
                           <GitHubIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                     </Button>
                  </ListItem>
                  <ListItem>
                     <Button href="https://www.linkedin.com/in/patrick-marschlowitz-77ba5b7b/">
                        <ListItemIcon>
                           <LinkedInIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                     </Button>
                  </ListItem>
               </List>
            </Drawer>
         </AppBar>
      </ElevationScroll>
   );
}

export default Header;
