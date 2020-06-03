import React, { useState } from "react";
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
      color: trigger ? "#47504F" : "transparent",
   });
}

function Header() {
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
