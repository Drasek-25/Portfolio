import React from "react";

import { Typography, Box, Button, Tooltip } from "@material-ui/core";
import { GitHub, Email, LinkedIn } from "@material-ui/icons";

function NavTitle() {
   return (
      <Box display={{ xs: "none", md: "block", lg: "block" }}>
         <Typography variant="h5" color="primary">
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
   );
}

export default NavTitle;
