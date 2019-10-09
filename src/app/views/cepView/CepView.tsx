import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Container } from '@material-ui/core';

import CepForm from './cepForm/CepForm';
import CepContent from '../../components/cepContent/CepContent';
import Title from '../../components/title/Title';
import Alert from '../../components/alert/Alert';
import Loading from '../../components/loading/Loading';
import Info from '../../components/info/Info';

import { setPageTitle } from '../../../helpers/system';
import { CepViewContainer } from './CepViewContainer';
import { ICepViewProps } from './ICepViewProps';
import { Status } from '../../../models/Status';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: '100%',
        },
    })
);

const CepView: React.FC<ICepViewProps> = props => {
    const { cepState: { historyList, status } } = props;

    const classes = useStyles(props);

    const [currentSearch, setCurrentSearch] = React.useState('');

    React.useEffect(() => setPageTitle('Pesquisar por CEP'), []);

    return (
        <>
            <CepForm setCurrentSearch={setCurrentSearch} />

            <Container className={classes.container}>
                {status === Status.Loading ? (
                    <Loading />

                ) : status === Status.NotFound ? (
                    <Alert type="warning">
                        A pesquisa por <strong>{currentSearch}</strong> não retornou resultados
                    </Alert>

                ) : status === Status.Error ? (
                    <Alert type="error">
                        Erro ao realizar a pesquisa
                    </Alert>

                ) : status === Status.Ok && historyList.length > 0 ? (
                    <CepContent cep={historyList[0]} />
                    
                ) : historyList.length === 0 ? (
                    <Info>
                        Você ainda não realizou pesquisas de endereço por CEP. Para começar, insira o número do CEP na caixa de pesquisa.
                    </Info>

                ) : null}
                
                {historyList.length > 1 || (status !== Status.Ok && historyList.length === 1) ? (
                    <>
                        <Title
                            title="Histórico de pesquisas"
                            desc="Lista das últimas pesquisas realizadas"
                        />

                        {historyList.map((cep, index) => (
                            index > 0 || status !== Status.Ok ? (
                                <CepContent cep={cep} key={index} />
                            ) : null
                        ))}
                    </>
                ) : null}
            </Container>
        </>
    );
};

export default CepViewContainer(CepView);
