import React from 'react';

import AboutPage from './aboutPage/AboutPage';
import LicensePage from './licensePage/LicensePage';
import TabsHeader from '../../components/tabsHeader/TabsHeader';

import { setPageTitle } from '../../../helpers/system';

const AboutView: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => setPageTitle('Sobre o App'), []);

    return (
        <>
            <TabsHeader
                index={index}
                setIndex={setIndex}
                tabList={['Sobre', 'Licença']}
            >
                <AboutPage />
                    
                <LicensePage />
            </TabsHeader>
        </>
    );
};

export default AboutView;
