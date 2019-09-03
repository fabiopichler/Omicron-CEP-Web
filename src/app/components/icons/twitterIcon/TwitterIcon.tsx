import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Icon } from '@material-ui/core';

import twitter from '../../../../assets/images/twitter.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
        },
        image: {
            height: '100%',
        },
    })
);

const TwitterIcon: React.FC = props => {
    const classes = useStyles(props);

    return (
        <Icon classes={{ root: classes.root }}>
            <img
                className={classes.image}
                src={twitter}
            />
        </Icon>
    );
};

export default TwitterIcon;
