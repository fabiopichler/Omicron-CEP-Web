import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Button, Typography } from '@material-ui/core';

import { setPageTitle } from '../../../helpers/system';
import { Config } from '../../../config';

const baseUrl = Config.baseUrl;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.primary.main,
        },
        wrapper: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            width: 240,
            height: 60,
            margin: `${theme.spacing(1.2)}px 0`,
            background: 'rgba(255,255,255,.2)',
            color: 'rgba(255,255,255,.8)',
        },
        footer: {
            padding: theme.spacing(2),
            color: 'rgba(255,255,255,.7)',
            textAlign: 'center',
        },
    })
);

const HomeView: React.FC = props => {
    const classes = useStyles(props);

    React.useEffect(() => {
        setPageTitle();
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Button
                    component={Link}
                    to={`${baseUrl}/cep`}
                    className={classes.button}
                >
                    Pesquisar por CEP
                </Button>

                <Button
                    component={Link}
                    to={`${baseUrl}/address`}
                    className={classes.button}
                >
                    Pesquisar por endereço
                </Button>
            </div>

            <footer className={classes.footer}>
                <Typography variant="body2">
                    &copy; 2019, Fábio Pichler
                </Typography>
            </footer>
        </div>
    );
};

export default HomeView;
