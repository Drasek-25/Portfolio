import React from "react";
import resume from "../data/PatrickMarschlowitzResume.pdf";

import { Paper, Box, IconButton, Tooltip } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdf() {
   return (
      <Box mt="6rem" display="flex" flexDirection="row" justifyContent="center">
         <Box ml="auto" width="100rem"></Box>
         <Box display="flex" alignItems="center" justifyContent="center">
            <Paper elevation={20}>
               <Document file={resume} onLoadError={console.error}>
                  <Page pageNumber={1} />
               </Document>
            </Paper>
         </Box>
         <Box mr="auto" width="100rem" ml=".5rem">
            <Tooltip id="download" title="Download PDF">
               <IconButton size="medium" color="primary" href={resume}>
                  <GetAppIcon fontSize="large"></GetAppIcon>
               </IconButton>
            </Tooltip>
         </Box>
      </Box>
   );
}

export default Pdf;
