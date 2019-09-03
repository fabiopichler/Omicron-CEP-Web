import React from 'react';
import Moment from 'react-moment';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Card, CardContent, Typography } from '@material-ui/core';

import { ICepContentProps } from './ICepContentProps';

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

const CepContent: React.FC<ICepContentProps> = props => {
    const { cep, hideDate } = props;

    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
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
