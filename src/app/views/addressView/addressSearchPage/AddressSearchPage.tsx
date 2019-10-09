import React from 'react';

import {
    makeStyles,
    Theme,
    createStyles,
} from '@material-ui/core';

import CepContent from '../../../components/cepContent/CepContent';
import Title from '../../../components/title/Title';
import Loading from '../../../components/loading/Loading';
import Alert from '../../../components/alert/Alert';
import AddressContent from '../../../components/addressContent/AddressContent';
import Info from '../../../components/info/Info';

import { AddressSearchPageContainer } from './AddressSearchPageContainer';
import { IAddressSearchPageProps } from './IAddressSearchPageProps';
import { Status } from '../../../../models/Status';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            height: '100%',
            boxSizing: 'border-box',
        },
    })
);

const AddressSearchPage: React.FC<IAddressSearchPageProps> = props => {
    const { addressState: { status, historyList, searchResultList } } = props;
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            {status === Status.Loading ? (
                <Loading />

            ) : status === Status.NotFound ? (
                <Alert type="warning">
                    A pesquisa atual não retornou resultados
                </Alert>

            ) : status === Status.Error ? (
                <Alert type="error">
                    Erro ao realizar a pesquisa
                </Alert>

            ) : searchResultList.length === 0 ? (
                <Info>
                    Para pesquisar endereços, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                </Info>

            ) : (
                <>
                    <AddressContent address={historyList[0]} />

                    <Title
                        title="Resultado da pesquisa"
                        desc={`A pesquisa atual retornou ${searchResultList.length} endereços`}
                    />

                    {searchResultList.map((cep, index) => (
                        <CepContent cep={cep} key={index} hideDate />
                    ))}
                </>
            )}
        </div>
    );
};

export default AddressSearchPageContainer(AddressSearchPage);
