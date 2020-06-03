import React, { useState } from "react";
import { Box, TextField, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//MuiFormLabel-root
const useStyles = makeStyles((theme) => ({
   card: {
      backgroundColor: "rgba(71, 80, 79, 1)",
      padding: "1rem",
      marginLeft: "auto",
      marginRight: "auto",
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

const Contact = () => {
   const classes = useStyles();

   const initialState = {
      email: "",
      subject: "",
      message: "",
   };
   const [form, setForm] = useState(initialState);

   const handleInput = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
   };

   return (
      <Box mt="7rem" display="flex" justifyContent="center" m="1rem">
         <Card className={classes.card} elevation={10}>
            <form noValidate className={classes.root}>
               <Box display="flex" flexDirection="column">
                  <Box>
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
                        id="subject"
                        variant="outlined"
                        label="Subject"
                        value={form.subject}
                        onChange={handleInput}
                        InputProps={classes.input}
                     />
                  </Box>
                  <TextField
                     required
                     multiline
                     id="message"
                     variant="outlined"
                     label="Your Message"
                     rows={8}
                     value={form.message}
                     onChange={handleInput}
                     InputProps={classes.input}
                  />
               </Box>
            </form>
         </Card>
      </Box>
   );
};
export default Contact;
