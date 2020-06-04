import React from "react";
import resumeSvg from "../data/PatrickMarschlowitzResume.svg";
import resumePdf from "../data/PatrickMarschlowitzResume.pdf";

import { Paper, Box } from "@material-ui/core";

function Pdf() {
   return (
      <Paper elevation={20}>
         <Box m="1rem" bgcolor="white">
            <a href={resumePdf}>
               <img src={resumeSvg} maxwidth="1300" width="90%" alt="resume" />
            </a>
         </Box>
      </Paper>
   );
}

export default Pdf;
