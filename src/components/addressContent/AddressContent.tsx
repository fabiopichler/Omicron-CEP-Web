import React from 'react';
import Moment from 'react-moment';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Card, CardContent, Typography, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import QuestionDialog from '../questionDialog/QuestionDialog';

import { IAddressContentProps } from './IAddressContentProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
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
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    })
);

const AddressContent: React.FC<IAddressContentProps> = props => {
    const { address, addressDelete } = props;

    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            {addressDelete ? (
                <QuestionDialog
                    title="Remover endereço"
                    description={
                        <span>
                            Deseja remover o endereço <strong>{address.logradouro}, {address.cidade}/{address.uf}</strong> do histórico de pesquisas?
                        </span>
                    }
                    onConfirm={() => addressDelete(address)}
                    openButton={(props: any) => (
                        <IconButton
                            aria-label="close"
                            className={classes.closeButton}
                            {...props}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                />
            ) : null}

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
