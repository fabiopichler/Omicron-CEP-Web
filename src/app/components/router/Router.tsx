import React from 'react';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import { MobileApp } from '../../../services/MobileApp';

const Router: React.FC = props => (
    MobileApp.onMobile()
        ? <HashRouter hashType="noslash" {...props} />
        : <BrowserRouter {...props} />
);

export default Router;
