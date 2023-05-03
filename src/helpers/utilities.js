const config = require('../config');

/**
 * Function to get the current Window Dimensions
 * @returns Object containing the width and height of the device
 */
const getWindowDimension = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {width, height};
};

/**
 * Main function for determining Device Information
 * @returns 
 */
const getDeviceTypeInfo = () => {
    const { width, height } = getWindowDimension()
    const buildDeviceDetails = {
      deviceType: '',
      deviceTypeVariant: '',
      orientation: 'Portrait',
      width,
      height,
      isFallback: false
    };
  //  Edge case
    const hasEdgeCase = handleDeviceExceptions(buildDeviceDetails, width, height)
    if (hasEdgeCase) {
      return hasEdgeCase;
    }
    if (height < width) {
      // Orientation is landscape
      buildDeviceDetails.orientation = 'Landscape';
  
      if (height <= config.screenConfig.IdMobileHeight.mobileLandscape_max) {
        // Mobile (landscape)
        buildDeviceDetails.deviceType = 'Mobile';
        for (const devc in config.screenConfig.DeviceWidthObject) {
          if (
            height <= config.screenConfig.DeviceWidthObject[devc].max &&
            height >= config.screenConfig.DeviceWidthObject[devc].min
          ) {
            buildDeviceDetails.deviceTypeVariant = devc;
            break;
          }
        }
      } else if (
        width <= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_max &&
        width >= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_min
      ) {
        // Tablet (landscape)
        buildDeviceDetails.deviceType = 'Tablet';
        buildDeviceDetails.deviceTypeVariant = 'Tablet';
      } else if (
        width <= config.screenConfig.IdDeviceBreakpointsByWidth.laptop_max &&
        width >= config.screenConfig.IdDeviceBreakpointsByWidth.laptop_min
      ) {
        // Laptop (landscape)
        buildDeviceDetails.deviceType = 'Laptop';
  
        for (const devc in config.screenConfig.DeviceWidthObject) {
          if (
            width <= config.screenConfig.DeviceWidthObject[devc].max &&
            width >= config.screenConfig.DeviceWidthObject[devc].min
          ) {
            buildDeviceDetails.deviceTypeVariant = devc;
            break;
          }
        }
      } else if (width > config.screenConfig.IdDeviceBreakpointsByWidth.laptop_max) {
        // Larger than Laptop (landscape)
        buildDeviceDetails.deviceType = 'LargerThanLaptop';
  
        for (const devc in config.screenConfig.DeviceWidthObject) {
          if (
            width <= config.screenConfig.DeviceWidthObject[devc].max &&
            width >= config.screenConfig.DeviceWidthObject[devc].min
          ) {
            buildDeviceDetails.deviceTypeVariant = devc;
            break;
          }
        }
      } else {
        // TODO: UNKNOWN realm
        buildDeviceDetails.deviceType = 'Mobile';
        buildDeviceDetails.deviceTypeVariant = 'MobileLarge';
        buildDeviceDetails.isFallback = true;
      }
  
      return buildDeviceDetails;
    } else {
      // Orientation is portrait
      buildDeviceDetails.orientation = 'Portrait';
  
      for (const devc in config.screenConfig.DeviceWidthObject) {
        if (
          width <= config.screenConfig.DeviceWidthObject[devc].max &&
          width >= config.screenConfig.DeviceWidthObject[devc].min
        ) {
          buildDeviceDetails.deviceTypeVariant = devc;
          break;
        }
      }
  
      if (
        width <= config.screenConfig.IdDeviceBreakpointsByWidth.laptop_max &&
        width >= config.screenConfig.IdDeviceBreakpointsByWidth.laptop_min
      ) {
        buildDeviceDetails.deviceType = 'Laptop';
      }
  
      if (
        width <= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_max &&
        width >= config.screenConfig.IdDeviceBreakpointsByWidth.tablet_min
      ) {
        buildDeviceDetails.deviceType = 'Tablet';
      }
      if (width <= config.screenConfig.IdDeviceBreakpointsByWidth.mobile_max) {
        buildDeviceDetails.deviceType = 'Mobile';
      }
  
      if (width > config.screenConfig.IdDeviceBreakpointsByWidth.laptop_max) {
        buildDeviceDetails.deviceType = 'LargerThanLaptop';
      }
  
      return buildDeviceDetails;
    }
  };

  /**
   * Function to handle Device Size Exceptions
   * @param {Object} buildDeviceDetails Object with which to build the details of the device
   * @param {Number} width How many pixels wide the device is
   * @param {Number} height How many pixels high the device is
   * @returns either the builDeviceDetails object with updated key/values, or undefined
   */
  const handleDeviceExceptions = (buildDeviceDetails, width, height) => {
    //  iPadPro
    if (width === 1024 && height === 1366) {
      buildDeviceDetails.deviceType = 'Tablet';
      buildDeviceDetails.deviceTypeVariant = 'iPadPro';
      buildDeviceDetails.orientation = 'Portrait';
  
      return buildDeviceDetails;
    } else if (width === 1366 && height === 1024) {
      //  Edge case
      buildDeviceDetails.deviceType = 'Tablet';
      buildDeviceDetails.deviceTypeVariant = 'iPadPro';
      buildDeviceDetails.orientation = 'Landscape';
  
      return buildDeviceDetails;
    }
  
    return undefined;
  };

module.exports = {
    getWindowDimension,
    getDeviceTypeInfo
}