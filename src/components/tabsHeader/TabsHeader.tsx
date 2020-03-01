import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, Container, Tabs, Tab } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

import { ITabsHeaderProps } from './ITabsHeaderProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height:'100%',
            display:'flex',
            flexDirection:'column',
        },
        header: {
            background: theme.palette.primary.main,
            boxShadow: theme.shadows[3],
            color: 'white',
            zIndex: 2,
        },
        tabsContainer: {
            background: teal[500],
            borderBottom: '1px solid rgba(255, 255, 255, .7)',
        },
        tabs: {
            marginBottom: -1,
        },
        tabsIndicator: {
            backgroundColor: 'white',
        },
        content: {
            height:'100%',
            overflow: 'auto',
            padding: 0,
        },
        swipeableViews: {
            height: '100%',
            zIndex: 1,
        },
    })
);

const TabsHeader: React.FC<ITabsHeaderProps> = props => {
    const { tabList, children, index, setIndex } = props;

    const classes = useStyles(props);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setIndex(newValue);
    }

    const handleChangeIndex = (index: number) => {
        setIndex(index);
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Container>
                    <div className={classes.tabsContainer}>
                        <Tabs
                            value={index}
                            onChange={handleChange}
                            variant="fullWidth"
                            className={classes.tabs}
                            classes={{
                                indicator: classes.tabsIndicator
                            }}
                        >
                            {tabList.map((tab, index) => (
                                <Tab label={tab} key={index} />
                            ))}
                        </Tabs>
                    </div>
                </Container>
            </div>

            <Container className={classes.content}>
                <SwipeableViews
                    index={index}
                    onChangeIndex={handleChangeIndex}
                    className={classes.swipeableViews}
                    springConfig={{
                        duration: '700ms',
                        easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
                        delay: '0s'
                    }}
                >
                    {children}
                </SwipeableViews>
            </Container>
        </div>
    );
};

export default TabsHeader;
