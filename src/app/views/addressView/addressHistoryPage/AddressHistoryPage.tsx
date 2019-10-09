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
            height: '100%',
            boxSizing: 'border-box',
        },
        info: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
            width: '90%',
            maxWidth: '480px',
            margin: '0 auto',
        },
        textInfo: {
            marginBottom: theme.spacing(2),
            fontWeight: 'bold',
            color: '#777',
        }
    })
);

const AddressHistoryPage: React.FC<IAddressHistoryPageProps> = props => {
    const { addressState: { historyList } } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            {historyList.length === 0 ? (
                <div className={classes.info}>
                    <Typography variant="body1" className={classes.textInfo}>
                        Você ainda não realizou pesquisas por endereço. Para começar, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                    </Typography>
                </div>

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
