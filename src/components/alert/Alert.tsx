import React from 'react';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Paper, Typography } from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

import { IAlertProps } from './IAlertProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: 0,
        },
        success: {
            backgroundColor: green[600],
            color: 'white',
        },
        warning: {
            backgroundColor: amber[700],
        },
        error: {
            backgroundColor: theme.palette.error.dark,
            color: 'white',
        },
        icon: {
            marginRight: theme.spacing(1),
        },
    })
);

const Alert: React.FC<IAlertProps> = props => {
    const { children, type } = props;

    const classes = useStyles(props);

    const Icon: React.FC<SvgIconProps> = props => {
        switch (type) {
            case 'warning':
                return <WarningIcon {...props} />

            case 'error':
                return <ErrorIcon {...props} />

            default:
                return <InfoIcon {...props} />
        }
    }

    return (
        <Paper className={clsx(classes.root, classes[type])}>
            <Icon className={classes.icon} />

            <Typography variant="body1">
                {children}
            </Typography>
        </Paper>
    );
};

export default Alert;
