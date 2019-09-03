import { IAddress } from "../../../models/IAddress";

export interface IAddressViewProps {
    onCheckByAddress: (address: IAddress) => void;
}
