import React from 'react';

import {
    makeStyles,
    Theme,
    createStyles,
    Paper,
    Typography
} from '@material-ui/core';

import Title from '../../../components/title/Title';
import AddressContent from '../../../components/addressContent/AddressContent';

import { AddressHistoryPageContainer } from './AddressHistoryPageContainer';
import { IAddressHistoryPageProps } from './IAddressHistoryPageProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
        },
        paper: {
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: 0,
        },
    })
);

const AddressHistoryPage: React.FC<IAddressHistoryPageProps> = props => {
    const { addressState: { historyList } } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            {historyList.length === 0 ? (
                <Paper className={classes.paper}>
                    <Typography
                        variant="body1"
                        gutterBottom
                    >
                        Você ainda não realizou pesquisas por endereço.
                    </Typography>

                    <Typography variant="body1">
                        Para começar, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                    </Typography>
                </Paper>

            ) : (
                <>
                    <Title
                        title="Histórico de pesquisas"
                        desc="Lista das últimas pesquisas realizadas"
                    />

                    {historyList.map((address, index) => (
                        <AddressContent address={address} key={index} />
                    ))}
                </>
            )}
        </div>
    );
};

export default AddressHistoryPageContainer(AddressHistoryPage);
