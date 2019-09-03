import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Container, Typography, Paper } from '@material-ui/core';

import CepForm from './cepForm/CepForm';
import CepContent from '../../components/cepContent/CepContent';
import Title from '../../components/title/Title';
import Alert from '../../components/alert/Alert';
import Loading from '../../components/loading/Loading';

import { setPageTitle } from '../../../helpers/system';
import { CepViewContainer } from './CepViewContainer';
import { ICepViewProps } from './ICepViewProps';
import { Status } from '../../../models/Status';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: 0,
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

            <Container>
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
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Você ainda não realizou pesquisas de endereço por CEP.
                        </Typography>

                        <Typography variant="body1">
                            Para começar, insira o número do CEP na caixa de pesquisa.
                        </Typography>
                    </Paper>

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
