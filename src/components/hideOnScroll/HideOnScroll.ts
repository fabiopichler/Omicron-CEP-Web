import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { IHideOnScrollProps } from './IHideOnScrollProps';

const HideOnScroll: React.FC<IHideOnScrollProps> = ({ children }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

export default HideOnScroll;
