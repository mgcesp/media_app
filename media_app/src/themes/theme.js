import { createTheme } from "@mui/material";
import { blue, pink } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            light: blue[500]
        },
        secondary: {
            main: pink[700],
            light: pink[500]
        }
    },
});

export default theme;