import React from "react";
import Pdf from "../ui/Pdf";
import { Box, Tooltip, IconButton } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import resumePdf from "../data/PatrickMarschlowitzResume.pdf";

const Resume = () => {
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
            <Pdf />
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
};
export default Resume;
