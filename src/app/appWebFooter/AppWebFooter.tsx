import React from 'react';
import clsx from 'clsx';
import AndroidIcon from '@material-ui/icons/Android';

import { withRouter, RouterProps } from 'react-router';
import { teal } from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';
import {
    Theme,
    AppBar,
    Toolbar,
    Typography,
    Container,
    Link
} from '@material-ui/core';

import { Config } from '../../config';

const { baseUrl } = Config;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            top: 'auto',
            bottom: 0,
            boxShadow: '0 0 6px rgba(0,0,0,.4)',
            background: 'white',
            transition: 'background 800ms ease, box-shadow 800ms ease',
        },
        appBarHome: {
            boxShadow: 'none',
            background: teal[700],
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
            transition: 'color 800ms ease',
        },
        linkHome: {
            color: 'white',
        },
        icon: {
            marginRight: theme.spacing(1),
        },
        text: {
            lineHeight: 1.3,
        }
    })
);

const AppWebFooter: React.FC<RouterProps> = props => {
    const { history } = props;
    const classes = useStyles(props);

    const [isHome, setIsHome] = React.useState(false);

    React.useEffect(() => {
        if (history.location.pathname === `${baseUrl}/`)
            setIsHome(true);
        else
            setIsHome(false);
            
    }, [history.location]);

    return (
        <>
            <Toolbar />

            <AppBar
                component="footer"
                className={clsx(classes.appBar, { [classes.appBarHome]: isHome })}
            >
                <Container>
                    <Toolbar>
                        <Link
                            href="https://fabiopichler.net/omicron-cep"
                            target="_blank"
                            className={clsx(classes.link, { [classes.linkHome]: isHome })}
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

export default withRouter(AppWebFooter);
