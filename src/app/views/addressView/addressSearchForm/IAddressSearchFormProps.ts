import { IAddress } from "../../../../models/IAddress";

export interface IAddressSearchFormProps {
    onCheckByAddress: (address: IAddress) => void;
}
