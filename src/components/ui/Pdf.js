import React from "react";
import resumeSvg from "../data/PatrickMarschlowitzResume.svg";
import resumePdf from "../data/PatrickMarschlowitzResume.pdf";

import { Paper, Box, IconButton, Tooltip } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

function Pdf() {
   return (
      <Box mt="6rem" display="flex" flexDirection="row" justifyContent="center">
         <Box
            ml="auto"
            width="4rem"
            display={{ xs: "none", md: "block", lg: "block" }}
         ></Box>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            m="1rem"
         >
            <Paper elevation={20}>
               <Box m="1rem" bgcolor="white">
                  <a href={resumePdf}>
                     <img
                        src={resumeSvg}
                        maxwidth="1300"
                        width="90%"
                        alt="resume"
                     />
                  </a>
               </Box>
            </Paper>
         </Box>
         <Box
            mr="auto"
            width="4rem"
            display={{ xs: "none", md: "block", lg: "block" }}
         >
            <Tooltip id="download" title="Download PDF">
               <IconButton size="medium" color="primary" href={resumePdf}>
                  <GetApp fontSize="large"></GetApp>
               </IconButton>
            </Tooltip>
         </Box>
      </Box>
   );
}

export default Pdf;
