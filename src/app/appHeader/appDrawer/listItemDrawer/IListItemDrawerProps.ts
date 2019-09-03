import { ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface IListItemDrawerProps {
    icon: ComponentType<SvgIconProps>;
    text: string;
    component?: any;
    to?: string;
    href?: string;
    target?: string;
    onClick?: () => void;
}
