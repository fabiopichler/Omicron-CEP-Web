import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

import { ITitleProps } from './ITitleProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            padding: `0 ${theme.spacing(2)}px`,
        }
    })
);

const Title: React.FC<ITitleProps> = props => {
    const { title, desc } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            <Typography
                component="h2"
                variant="h6"
                color="textSecondary"
            >
                {title}
            </Typography>

            <Typography
                component="div"
                variant="subtitle1"
                color="textSecondary"
            >
                {desc}
            </Typography>
        </div>
    );
};

export default Title;
