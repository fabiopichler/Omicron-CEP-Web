import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

import { Link } from "react-router-dom";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InfoIcon from '@material-ui/icons/Info';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

import logo from '../../../assets/images/logo.svg';

import ListItemDrawer from './listItemDrawer/ListItemDrawer';
import TwitterIcon from '../../components/icons/twitterIcon/TwitterIcon';

import { IAppDrawerProps } from './IAppDrawerProps';
import { Config } from '../../../config';

const baseUrl = Config.baseUrl;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bold: {
            fontWeight: 'bold',
        },
        drawerHeader: {
            height: 156,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.primary.main,
            color: 'white',
        },
        logo: {
            width: 64,
            height: 64,
            marginBottom: theme.spacing(1.5),
        },
        title: {
            lineHeight: 1.3,
        },
        subtitle: {
            lineHeight: 1.3,
        },
        list: {
            width: 280,
        },
        dividerText: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },
    })
);

const AppDrawer: React.FC<IAppDrawerProps> = props => {
    const { open: stateOpen, onOpenDrawer } = props;

    const classes = useStyles(props);
    
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return null;
        }
    
        onOpenDrawer(open);
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItemDrawer
                    icon={SearchIcon}
                    text="Pesquisar por CEP"
                    component={Link}
                    to={`${baseUrl}/cep`}
                />

                <ListItemDrawer
                    icon={LocationSearchingIcon}
                    text="Pesquisar por endereço"
                    component={Link}
                    to={`${baseUrl}/address`}
                />
            </List>

            <Divider />

            <Typography variant="body2" color="textSecondary" className={clsx(classes.dividerText, classes.bold)}>
                Ajuda
            </Typography>
            
            <List>
                <ListItemDrawer
                    icon={HomeIcon}
                    text="Visitar o website oficial"
                    component="a"
                    href="https://fabiopichler.net/"
                    target="_blank"
                />

                <ListItemDrawer
                    icon={ThumbUpIcon}
                    text="Curtir página no Facebook"
                    component="a"
                    href="https://www.facebook.com/fabiopichler.net"
                    target="_blank"
                />

                <ListItemDrawer
                    icon={TwitterIcon}
                    text="Perfil no Twitter"
                    component="a"
                    href="https://twitter.com/FabioPichler"
                    target="_blank"
                />

                <ListItemDrawer
                    icon={InfoIcon}
                    text="Sobre o App"
                    component={Link}
                    to={`${baseUrl}/about`}
                />
            </List>
        </div>
    );

    return (
        <SwipeableDrawer
            anchor="right"
            open={stateOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <div className={classes.drawerHeader}>
                <img
                    src={logo}
                    className={classes.logo}
                    alt="Logo"
                />

                <Typography component="h1" variant="h6" className={classes.title}>
                    {Config.appName}
                </Typography>

                <Typography variant="body2" className={clsx(classes.subtitle, classes.bold)}>
                    por Fábio Pichler
                </Typography>
            </div>

            {sideList()}
        </SwipeableDrawer>
    );
};

export default AppDrawer;
