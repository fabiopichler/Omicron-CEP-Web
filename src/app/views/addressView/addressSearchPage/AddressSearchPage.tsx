import React from 'react';

import {
    makeStyles,
    Theme,
    createStyles,
    Paper,
    Typography
} from '@material-ui/core';

import CepContent from '../../../components/cepContent/CepContent';
import Title from '../../../components/title/Title';
import Loading from '../../../components/loading/Loading';
import Alert from '../../../components/alert/Alert';
import AddressContent from '../../../components/addressContent/AddressContent';

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
                <div className={classes.info}>
                    <Typography variant="body1" className={classes.textInfo}>
                        Para pesquisar endereços, clique no botão de pesquisa, logo a baixo, e insira o endereço desejado.
                    </Typography>
                </div>

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
