import { ICepState } from "../../../store/cep/ICepState";

export interface ICepViewProps {
    cepState: ICepState;
    cepDelete: (cep: string) => void;
}
