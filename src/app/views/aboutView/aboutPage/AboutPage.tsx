import React from 'react';
import clsx from 'clsx';

import {
    Card,
    CardContent,
    makeStyles,
    Theme,
    createStyles,
    Typography
} from '@material-ui/core';

import Title from '../../../components/title/Title';

import { Config } from '../../../../config';

const { appName, appVersion } = Config;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            height: '100%',
            boxSizing: 'border-box',
        },
        card: {
            borderRadius: 0,
        },
        marginBottom2: {
            marginBottom: theme.spacing(2),
        },
    })
);

const AboutPage: React.FC = props => {
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            <Title
                title={`${appName} v${appVersion}`}
                desc="&copy; 2019, Fábio Pichler"
            />

            <Card className={clsx(classes.card, classes.marginBottom2)}>
                <CardContent>
                    <Typography
                        component="h2"
                        variant="h6"
                        color="textSecondary"
                        gutterBottom
                    >
                        {appName}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        Com o {appName}, você pesquisa por qualquer CEP ou endereço, e tem o resultado imediatamente, dum jeito muito prático e rápido.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={clsx(classes.card, classes.marginBottom2)}>
                <CardContent>
                    <Typography variant="body1" gutterBottom>
                        O {appName} é um aplicativo especialmente desenvolvido para a consulta de CEPs de todo o Brasil.
                    </Typography>

                    <Typography variant="body1">
                        O aplicativo é open source, totalmente gratuito e utiliza os serviços do webservice ViaCEP.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutPage;
