import React from 'react';

import AddressSearchPage from './addressSearchPage/AddressSearchPage';
import AddressHistoryPage from './addressHistoryPage/AddressHistoryPage';
import AddressSearchForm from './addressSearchForm/AddressSearchForm';
import TabsHeader from '../../components/tabsHeader/TabsHeader';

import { setPageTitle } from '../../../helpers/system';
import { AddressViewContainer } from './AddressViewContainer';
import { IAddressViewProps } from './IAddressViewProps';
//import { IAddress } from '../../../models/IAddress';

const AddressView: React.FC<IAddressViewProps> = props => {
    const { onCheckByAddress } = props;

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => setPageTitle('Pesquisar por endereço'), []);

    /*const handleCheckByAddress = (address: IAddress) => {
        setIndex(0);
        onCheckByAddress(address);
    }*/

    return (
        <>
            <TabsHeader
                index={index}
                setIndex={setIndex}
                tabList={['Pesquisa', 'Histórico']}
            >
                <AddressSearchPage />

                <AddressHistoryPage />
            </TabsHeader>

            <AddressSearchForm
                index={index}
                onCheckByAddress={onCheckByAddress/*handleCheckByAddress*/}
            />
        </>
    );
};

export default AddressViewContainer(AddressView);
