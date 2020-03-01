import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            width: '90%',
            maxWidth: '480px',
            margin: '0 auto',
        },
        text: {
            marginBottom: theme.spacing(2),
            fontWeight: 'bold',
            color: '#777',
        }
    })
);

const Info: React.FC = props => {
    const { children } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            <Typography variant="body1" className={classes.text}>
                {children}
            </Typography>
        </div>
    );
};

export default Info;
