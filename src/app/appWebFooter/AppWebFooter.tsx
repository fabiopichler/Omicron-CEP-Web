import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import {
    Theme,
    AppBar,
    Toolbar,
    Typography,
    Container,
    Link
} from '@material-ui/core';

import AndroidIcon from '@material-ui/icons/Android';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            top: 'auto',
            bottom: 0,
            boxShadow: '0 0 6px rgba(0,0,0,.4)',
            background: 'white',
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
        },
        icon: {
            marginRight: theme.spacing(1),
        },
        text: {
            lineHeight: 1.3,
        }
    })
);

const AppWebFooter: React.FC = props => {
    const classes = useStyles(props);

    return (
        <>
            <Toolbar />

            <AppBar
                component="footer"
                className={classes.appBar}
            >
                <Container>
                    <Toolbar>
                        <Link
                            href="https://fabiopichler.net/omicron-cep"
                            target="_blank"
                            className={classes.link}
                        >
                            <AndroidIcon className={classes.icon} />

                            <Typography className={classes.text}>
                                Baixe o App para Android do Omicron CEP
                            </Typography>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default AppWebFooter;
