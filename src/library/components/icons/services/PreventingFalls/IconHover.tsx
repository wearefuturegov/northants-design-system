import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m42.51,9.41c0,4.51-3.64,8.16-8.15,8.16s-8.16-3.64-8.16-8.15S29.84,1.26,34.35,1.25s8.16,3.64,8.16,8.15"
        fill={colourFill}
      />
      <path
        d="m46.06,38.46s-.84-.34-1.37-.6c-.97-.46-1.92-.98-2.86-1.5-2.65-1.46-5.78-2.99-7.63-5.46-.86-1.16-1.56-2.46-2.13-3.85.22-.85.44-1.73.69-2.67,1.69-6.33-8.91-9.5-15.42-2.89-6.51,6.61-7.38,15.38-7.74,23.74-.11,2.59.5,4.52.98,5.71.4.99,1.28,3.75,1.5,4.32.67,1.76-.12,2.38-.43,2.7-.55.54-1.11,1.09-1.68,1.64-2.61,2.53-5.33,5.06-6.98,6.69-4.08,4.03,2.21,10.3,6.29,6.28,3.71-3.67,9.88-7.68,11.71-12.75.59-1.63.55-3.43.2-5.26.58.51,1.15,1.04,1.69,1.58.44.44.63.86.63,1.99,0,4.19-.03,8.38-.03,12.57,0,5.72,8.88,5.72,8.88,0,0-3.36.02-6.73.02-10.09,0-2.43.3-5.06-.74-7.32-.7-1.53-1.8-2.87-3.06-4.11.61-.99.93-2.28.92-3.97,0-2.17.08-4.16.28-6.15,3.62,3.32,8.42,5.75,12.8,7.51,5.32,2.15,8.72-6,3.48-8.11h0Z"
        fill={colourFill}
      />
      <path
        d="m41.47,48.01c-1.29-.55-2.59-1.14-3.89-1.79-.95,1.8-1.39,4.66.23,9.11,0,0,.58,2.47,2.81,1.71,2.48-.84,1.2-3.17,1.2-3.17-.96-2.64-1.07-4.74-.34-5.86h0Z"
        fill={colourFill}
      />
      <path
        d="m58.83,71.93l-8.39-27.77c-.53,1.63-1.73,3.07-3.34,3.69l7.65,25.31s.58,2.38,2.8,1.7c2.22-.66,1.28-2.93,1.28-2.93h0Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
