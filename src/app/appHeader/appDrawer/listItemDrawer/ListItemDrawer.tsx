import React from 'react';

import {
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core';

import { IListItemDrawerProps } from './IListItemDrawerProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bold: {
            fontWeight: 'bold',
        },
    })
);

const ListItemDrawer: React.FC<IListItemDrawerProps> = props => {
    const { icon: Icon, text, component, ...p } = props;

    const classes = useStyles(props);

    return (
        <ListItem
            button
            component={component}
            {...p}
        >
            <ListItemIcon>
                <Icon color="primary" />
            </ListItemIcon>

            <ListItemText
                primary={text}
                primaryTypographyProps={{
                    variant: 'body2',
                    color: 'primary',
                    className: classes.bold
                }}
            />
        </ListItem>
    );
};

export default ListItemDrawer;
