import { RouteComponentProps } from "react-router";

export interface IAppProps extends RouteComponentProps {
    cepInit: () => void;
    addressInitHistory: () => void;
}
