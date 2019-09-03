import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme();

export const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: purple[600],
        },
    },

    overrides: {
        MuiContainer: {
            maxWidthLg: {
                [theme.breakpoints.up('xs')]: {
                    maxWidth: 720,
                    padding: `0 ${theme.spacing(2)}px`,
                },
            },
        },
    },
});
