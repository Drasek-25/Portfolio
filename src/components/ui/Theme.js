import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primary = "#ffcb9a";
const secondary = "#116466";
const tertiary = "#47504F";

let theme = createMuiTheme({
   palette: {
      text: {
         primary: primary,
      },
      primary: {
         main: primary,
      },
      secondary: {
         main: secondary,
      },
      background: {
         paper: tertiary,
      },
   },
   typography: {
      button: {
         textTransform: "none",
      },
      tab: {
         fontWeight: 500,
         color: "#ffcb9a",
         fontSize: "1rem",
         opacity: "100",
         minWidth: 80,
         width: 160,
         marginTop: "1rem",
         marginBottom: "1rem",
      },
   },
});
theme = responsiveFontSizes(theme);
export default theme;
