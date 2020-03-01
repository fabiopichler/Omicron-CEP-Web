import { IAddress } from "../../models/IAddress";

export interface IAddressContentProps {
    address: IAddress;
    addressDelete?: (address: IAddress) => void;
}
