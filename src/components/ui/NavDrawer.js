import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import {
   Button,
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
   LinkedIn,
   LastPage,
   Folder,
   Description,
   ContactMail,
} from "@material-ui/icons";

const drawerWidth = 180;
const useStyles = makeStyles((theme) => ({
   largeIcon: {
      marginLeft: "1rem",
      width: 40,
      height: 40,
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
}));

function NavDrawer({ open, handleDrawerClose }) {
   const classes = useStyles();

   return (
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
            <ListItem button key={"Projects"} component={Link} to="/projects">
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
            <ListItem button key={"Contacts"} component={Link} to="/contact">
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
   );
}

export default NavDrawer;
