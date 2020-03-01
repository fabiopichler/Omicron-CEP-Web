import React from 'react';
import clsx from 'clsx';

import { withRouter, RouterProps } from 'react-router';
import { makeStyles, createStyles } from '@material-ui/styles';
import {
    Theme,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/images/logo.svg';

import AppDrawer from './appDrawer/AppDrawer';
import HideOnScroll from '../../components/hideOnScroll/HideOnScroll';

import { Config } from '../../config';

const baseUrl = Config.baseUrl;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        toolbar: {
            padding: 0,
        },
        logo: {
            width: 26,
            height: 26,
            marginRight: theme.spacing(1.5),
        },
        menuButton: {
            position: 'absolute',
            right: 0,
        },
        titleContainer: {
            flexGrow: 1,
        },
        title: {
            width: 0,
            transition: 'width 1.5s ease',
            whiteSpace: 'nowrap',
            textAlign: 'center',
        },
        titleHome: {
            width: '100%',
        },
        titleContent: {
            display: 'inline-flex',
        }
    })
);

const AppHeader: React.FC<RouterProps> = props => {
    const { history } = props;
    const classes = useStyles(props);

    const [isHome, setIsHome] = React.useState(false);
    const [stateDrawer, openDrawer] = React.useState(false);

    React.useEffect(() => {
        if (history.location.pathname === `${baseUrl}/`)
            setIsHome(true);
        else
            setIsHome(false);
            
    }, [history.location]);

    const handleOpenDrawer = () => {
        openDrawer(true);
    }

    return (
        <header className={classes.root}>
            <AppDrawer open={stateDrawer} onOpenDrawer={openDrawer} />

            <HideOnScroll>
                <AppBar component="div">
                    <Container>
                        <Toolbar className={classes.toolbar}>
                            <div className={classes.titleContainer}>
                                <div className={clsx(classes.title, { [classes.titleHome]: isHome })}>
                                    <div className={classes.titleContent}>
                                        <img
                                            src={logo}
                                            className={classes.logo}
                                            alt="Logo"
                                        />

                                        <Typography
                                            component="h1"
                                            variant="h6"
                                        >
                                            {Config.appName}
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            <IconButton
                                onClick={handleOpenDrawer}
                                className={classes.menuButton}
                                edge="end"
                                color="inherit"
                                aria-label="Menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Toolbar />
        </header>
    );
};

export default withRouter(AppHeader);
