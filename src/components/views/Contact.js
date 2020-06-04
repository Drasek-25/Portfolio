import React, { useState } from "react";
import axios from "axios";

import { Box, TextField, Card, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
   card: {
      backgroundColor: "rgba(71, 80, 79, 1)",
      padding: "1rem",
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      maxWidth: "800px",
   },
   root: {
      "& .MuiTextField-root": {
         margin: theme.spacing(1),
      },
      "& .MuiInput-underline:after": {
         borderBottomColor: "#ffcb9a",
      },
      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "#ffcb9a",
         },
         "&:hover fieldset": {
            borderColor: "#ffcb9a",
         },
         "&.Mui-focused fieldset": {
            borderColor: "#ffcb9a",
         },
      },
      "& .MuiFormLabel-root": {
         color: "#ffcb9a",
      },
   },
}));

//https://docs.google.com/forms/d/e/1FAIpQLScBkNkfcMKh2OJKIqGKADbGq-g5iv-0lofOM6U7-D-30qQSuw/viewform

const Contact = () => {
   const classes = useStyles();

   const initialState = {
      email: "",
      message: "",
   };
   const [form, setForm] = useState(initialState);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [success, setSuccess] = useState(false);

   const handleInput = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
   };

   //found at 'https://medium.com/@levvi/how-to-use-google-forms-as-a-free-email-service-for-your-custom-react-form-or-any-other-1aa837422a4'
   const handleSendMessage = () => {
      setLoading(true);
      setError(false);
      setSuccess(false);

      //after creating form open 'send' and go to the link
      //on the public form inspect the input fields for 'entry.numbers'
      //and for the action='url' in the form tag
      const ACTION_URL =
         "https://docs.google.com/forms/u/0/d/e/1FAIpQLScBkNkfcMKh2OJKIqGKADbGq-g5iv-0lofOM6U7-D-30qQSuw/formResponse";
      const MESSAGE_ID = "entry.248060108";
      const EMAIL_ID = "entry.660275134";
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const formData = new FormData();
      formData.append(MESSAGE_ID, form.message);
      formData.append(EMAIL_ID, form.email);

      axios
         .post(CORS_PROXY + ACTION_URL, formData)
         .then(() => {
            setLoading(false);
            setError(false);
            setSuccess(true);
            setForm(initialState);
            console.log({ loading: loading, error: error, success: success });
         })
         .catch(() => {
            setLoading(false);
            setError(true);
            setSuccess(false);
            console.log({ loading: loading, error: error, success: success });
         });
   };

   return (
      <Box mt="7rem" display="flex" justifyContent="center" m="1rem">
         <Card className={classes.card} elevation={10}>
            <form noValidate className={classes.root}>
               <Box display="flex" flexDirection="column">
                  <TextField
                     required
                     id="email"
                     variant="outlined"
                     label="Email Address"
                     value={form.email}
                     onChange={handleInput}
                     InputProps={classes.input}
                  />
                  <TextField
                     required
                     multiline
                     id="message"
                     variant="outlined"
                     label="Your Message"
                     rows={16}
                     value={form.message}
                     onChange={handleInput}
                     InputProps={classes.input}
                  />
                  <Box display="flex">
                     {loading && (
                        <Box m="5px" display="flex">
                           <Typography variant="h4">Sending...</Typography>
                        </Box>
                     )}
                     {error && (
                        <Box m="5px" display="flex">
                           <Typography variant="h4" color="error">
                              Error.
                           </Typography>
                        </Box>
                     )}
                     {success && (
                        <Box m="5px" display="flex">
                           <Typography variant="h4">Message Sent!</Typography>
                        </Box>
                     )}
                     <Box mt=".6rem" mr=".6rem" mb=".2rem" ml="auto">
                        <Button
                           variant="contained"
                           color="secondary"
                           onClick={handleSendMessage}
                        >
                           <SendIcon
                              color="primary"
                              className={classes.largeIcon}
                              mr="5px"
                           />

                           <Typography color="primary">Send</Typography>
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </form>
         </Card>
      </Box>
   );
};
export default Contact;
