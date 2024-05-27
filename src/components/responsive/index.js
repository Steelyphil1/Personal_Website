import React, { useState } from 'react'
import { getWindowDimension } from '../../helpers/utilities';
import config from '../../config';

const { width, height } = getWindowDimension();
const initialState = { width, height };

function Responsive (props) {
    const { children, displayIn } = props;
    const { width, height } = getWindowDimension();
    const [dimensions, setDimensions] = useState({});
    
    const shouldRender = (display, width, height) => {
        if (display.indexOf('Laptop') !== -1 && width >= config.screenConfig.IdDeviceBreakpointsByWidth.laptop_min) {
            return true;
        }

        if (display.indexOf('Tablet') !== -1 && (width <= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_max && width >= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_min)) {
            return true;
        }

        // For mobile regardless of orientation
        if (display.indexOf('Mobile') !== -1 && width <= config.screenConfig.IdDeviceBreakpointsByWidth.mobile_max) {
            return true;
        }

        if (display.indexOf('MobilePortrait') !== -1 && (width <= config.screenConfig.IdDeviceBreakpointsByWidth.mobile_max && height >= config.screenConfig.IdMobileHeight.mobileLandscape_max)) {
            return true;
        }

        return !!(display.indexOf('MobileLandScape') !== -1 && (width <= config.screenConfig.IdDeviceBreakpointsByWidth.mobile_max && height <= config.screenConfig.IdMobileHeight.mobileLandscape_min));
    }

    const shouldRenderChildren = shouldRender(displayIn, dimensions.width, dimensions.height)
    
    return (
        <React.Fragment>
            {shouldRenderChildren ? children : null}
        </React.Fragment>
    )
}

export default Responsive;