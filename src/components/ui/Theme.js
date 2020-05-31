import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primary = "#ffcb9a";
const secondary = "#116466";

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
      },
   },
});
theme = responsiveFontSizes(theme);
export default theme;
