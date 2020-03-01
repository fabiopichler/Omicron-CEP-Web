import React from 'react';

import { withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import AppHeader from './appHeader/AppHeader';
import AppRouter from './appRouter/AppRouter';
import AppWebFooter from './appWebFooter/AppWebFooter';

import { AppContainer } from './AppContainer';
import { IAppProps } from './IAppProps';
import { MobileApp } from '../services/MobileApp';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        transitionGroup: {
            position: 'relative',
            flexGrow: 1,
        },
        routeSection: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
        }
    })
);

const App: React.FC<IAppProps> = props => {
    const { cepInit, addressInitHistory, location } = props;

    const classes = useStyles(props);

    React.useEffect(() => {
        cepInit();
        addressInitHistory();

        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.root}>
            <AppHeader />

            <TransitionGroup className={classes.transitionGroup}>
                <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    timeout={{ enter: 400, exit: 400 }}
                >
                    <div className={classes.routeSection}>
                        <AppRouter location={location} />
                    </div>
                </CSSTransition>
            </TransitionGroup>

            {!MobileApp.onMobile() ? (
                <AppWebFooter />
            ) : null}
        </div>
    );
};

export default AppContainer(withRouter(App));
