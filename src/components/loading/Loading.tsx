import React from 'react';

import {
    Paper,
    makeStyles,
    Theme,
    createStyles,
    Typography,
    CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            borderRadius: 0,
            padding: theme.spacing(3),
            textAlign: 'center',
        },
    })
);

const Loading: React.FC = props => {
    const classes = useStyles(props);

    return (
        <Paper className={classes.root}>
            <CircularProgress />

            <Typography variant="body1">
                Carregando...
            </Typography>
        </Paper>
    );
};

export default Loading;
