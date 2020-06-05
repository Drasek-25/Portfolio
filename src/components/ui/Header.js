import React, { useState, useEffect } from "react";
import NavDrawer from "./NavDrawer";
import NavTabs from "./NavTabs";
import NavTitle from "./NavTitle";
import NavMobile from "./NavMobile";

import { AppBar, Toolbar, useScrollTrigger, Box } from "@material-ui/core";

function ElevationScroll(props) {
   const { children } = props;

   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
   });

   return React.cloneElement(children, {
      // trigger ? shadow during scroll : resting shadow
      elevation: trigger ? 10 : 0,
      color: trigger ? "inherit" : "transparent",
   });
}

function Header(props) {
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

   //handles keeping the current selected item
   //correct on refresh
   useEffect(() => {
      switch (window.location.pathname) {
         case "/":
            pageSelection !== 0 && setPageSelection(0);
            break;
         case "/projects":
            pageSelection !== 1 && setPageSelection(1);
            break;
         case "/resume":
            pageSelection !== 2 && setPageSelection(2);
            break;
         case "/contact":
            pageSelection !== 3 && setPageSelection(3);
            break;
         default:
      }
   }, [pageSelection]);

   return (
      <ElevationScroll>
         <AppBar position="fixed">
            <Box>
               <Toolbar>
                  <NavTitle />
                  <NavTabs
                     handleTabChange={handleTabChange}
                     pageSelection={pageSelection}
                  />
                  <NavMobile handleDrawerOpen={handleDrawerOpen} open={open} />
               </Toolbar>
            </Box>
            <NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
         </AppBar>
      </ElevationScroll>
   );
}

export default Header;
