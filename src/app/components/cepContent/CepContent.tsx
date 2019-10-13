import React from 'react';
import Moment from 'react-moment';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Card, CardContent, Typography, IconButton } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import QuestionDialog from '../questionDialog/QuestionDialog';

import { ICepContentProps } from './ICepContentProps';

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

const CepContent: React.FC<ICepContentProps> = props => {
    const { cep, hideDate, onCepDelete } = props;

    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            {onCepDelete ? (
                <QuestionDialog
                    title="Remover CEP"
                    description={`Deseja remover o CEP ${cep.cep} do histórico de pesquisas?`}
                    onConfirm={() => onCepDelete(cep.cep)}
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
                    component="h5"
                    variant="h5"
                    color="primary"
                >
                    CEP: {cep.cep}
                </Typography>

                {!hideDate ? (
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
                            date={cep.date}
                        />
                    </Typography>
                ) : null}
                
                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={clsx(classes.body1, classes.marginTop1)}
                >
                    Logradouro:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {cep.logradouro} {cep.complemento ? `- ${cep.complemento}` : ''}
                    </span>
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.body1}
                >
                    Bairro:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {cep.bairro}
                    </span>
                </Typography>

                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.body1}
                >
                    Cidade/Estado:
                    
                    {' '}

                    <span className={classes.textPrimary}>
                        {cep.localidade}/{cep.uf}
                    </span>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CepContent;
