import { IAddressState } from "../../../../store/address/IAddressState";
import { IAddress } from "../../../../models/IAddress";

export interface IAddressHistoryPageProps {
    addressState: IAddressState;
    addressDelete: (address: IAddress) => void;
}
