import './declare-modules.d.ts';

import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import moment from 'moment';
import Moment from 'react-moment';

import { Provider } from 'react-redux';

import 'moment-timezone';
import 'moment/locale/pt-br';
import 'typeface-roboto';

import './assets/css/index.css';

import { store } from './store/store';
import { defaultTheme } from './themes/defaultTheme';

import Router from './app/components/router/Router';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';
Moment.globalLocal = true;

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
