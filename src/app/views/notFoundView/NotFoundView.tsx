import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Container, Link, Typography } from '@material-ui/core';

import Title from '../../../components/title/Title';

import { setPageTitle } from '../../../helpers/system';
import { Config } from '../../../config';

const { baseUrl } = Config;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(2),
            padding: 0,
        },
        desc: {
            '& > p': {
                marginTop: 0,
            }
        },
        errorInfo: {
            textAlign: 'right',
            fontStyle: 'italic',
        },
    })
);

const NotFoundView: React.FC = props => {
    const classes = useStyles(props);

    React.useEffect(() => setPageTitle('Página não encontrada'), []);

    const desc = (
        <div className={classes.desc}>
            <p>
                A página que você está tentando acessar não foi encontrada.<br />
                Talvez a página tenha sido removida, ou o endereço que digitou esteja incorreto.
            </p>

            <p>
                <Link
                    component={RouterLink}
                    to={`${baseUrl}/`}
                >
                    Ir à pagina inicial
                </Link>
            </p>

            <Typography
                variant="body2"
                className={classes.errorInfo}
            >
                Erro 404
            </Typography>
        </div>
    );

    return (
        <Container className={classes.root}>
            <Title
                title="Página não encontrada"
                desc={desc}
            />
        </Container>
    );
};

export default NotFoundView;
