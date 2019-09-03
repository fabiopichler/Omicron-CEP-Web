import React from 'react';
import Moment from 'react-moment';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Card, CardContent, Typography } from '@material-ui/core';

import { IAddressContentProps } from './IAddressContentProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            borderRadius: 0,
        },
        marginTop1: {
            marginTop: theme.spacing(1),
        },
        body1: {
            fontWeight: 'bold',
        },
        textPrimary: {
            color: theme.palette.primary.main,
        },
    })
);

const AddressContent: React.FC<IAddressContentProps> = props => {
    const { address } = props;

    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    Pesquisado

                    {' '}

                    <Moment
                        fromNow
                        withTitle
                        titleFormat="LLL"
                        date={address.date}
                    />
                </Typography>
                
                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={clsx(classes.body1, classes.marginTop1)}
                >
                    Logradouro:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {address.logradouro}
                    </span>
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.body1}
                >
                    Cidade:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {address.cidade}
                    </span>
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.body1}
                >
                    UF:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {address.uf}
                    </span>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AddressContent;
