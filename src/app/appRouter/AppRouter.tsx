import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AboutView from '../views/aboutView/AboutView';
import CepView from '../views/cepView/CepView';
import NotFoundView from '../views/notFoundView/NotFoundView';
import HomeView from '../views/homeView/HomeView';
import AddressView from '../views/addressView/AddressView';

import { IAppRouterProps } from './IAppRouterProps';
import { Config } from '../../config';

const baseUrl = Config.baseUrl;

const AppRouter: React.FC<IAppRouterProps> = ({ location }) => (
    <Switch location={location}>
        <Route
            exact
            path={`${baseUrl}/`}
            component={HomeView}
        />

        <Route
            exact
            path={`${baseUrl}/cep`}
            component={CepView}
        />

        <Route
            exact
            path={`${baseUrl}/address`}
            component={AddressView}
        />

        <Route
            exact
            path={`${baseUrl}/about`}
            component={AboutView}
        />

        <Route
            path="*"
            component={NotFoundView}
        />
    </Switch>
);

export default AppRouter;
