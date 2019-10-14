import { IAddressState } from "../../../../store/address/IAddressState";
import { IAddress } from "../../../../models/IAddress";

export interface IAddressSearchPageProps {
    addressState: IAddressState;
    addressDelete: (address: IAddress) => void;
}
