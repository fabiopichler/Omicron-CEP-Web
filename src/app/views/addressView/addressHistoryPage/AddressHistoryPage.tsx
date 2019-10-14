import React from 'react';

import {
    makeStyles,
    Theme,
    createStyles,
} from '@material-ui/core';

import Title from '../../../components/title/Title';
import AddressContent from '../../../components/addressContent/AddressContent';
import Info from '../../../components/info/Info';

import { AddressHistoryPageContainer } from './AddressHistoryPageContainer';
import { IAddressHistoryPageProps } from './IAddressHistoryPageProps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            height: '100%',
            boxSizing: 'border-box',
        },
    })
);

const AddressHistoryPage: React.FC<IAddressHistoryPageProps> = props => {
    const { addressState: { historyList }, addressDelete } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            {historyList.length === 0 ? (
                <Info>
                    Você ainda não realizou pesquisas por endereço. Para começar, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                </Info>

            ) : (
                <>
                    <Title
                        title="Histórico de pesquisas"
                        desc="Lista das últimas pesquisas realizadas"
                    />

                    {historyList.map((address, index) => (
                        <AddressContent
                            address={address}
                            key={index}
                            addressDelete={addressDelete}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default AddressHistoryPageContainer(AddressHistoryPage);
