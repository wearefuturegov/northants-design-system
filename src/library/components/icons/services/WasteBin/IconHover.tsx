import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m50.51,9.2c0-.68-.56-1.24-1.25-1.24H9.3c-1.58,0-3,1-3.53,2.48h44.74v-1.24Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m33.03,4.24c0-.68-.56-1.24-1.25-1.24h-9.99c-.69,0-1.25.55-1.25,1.24v1.24h12.49v-1.24Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m31.78,24.08h-9.99c-.69,0-1.25.55-1.25,1.24s.56,1.24,1.25,1.24h9.99c.69,0,1.25-.55,1.25-1.24s-.56-1.24-1.25-1.24Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m49.26,15.4c.69,0,1.25-.55,1.25-1.24v-1.24H3.05c-.69,0-1.25.55-1.25,1.24s.56,1.24,1.25,1.24h46.2Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m46.22,57.59h-.01c-.23-.02-.47-.04-.7-.04-4.09-.02-7.45,3.2-7.57,7.26-.12,4.06,3.05,7.47,7.13,7.68,4.08.22,7.6-2.85,7.91-6.9.31-4.05-2.69-7.61-6.76-8.01h0Zm-.71,12.36c-2.76,0-4.99-2.22-4.99-4.96s2.24-4.96,4.99-4.96,5,2.22,5,4.96c0,1.32-.53,2.58-1.47,3.51-.93.93-2.2,1.45-3.53,1.45Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path d="m48.01,64.99c0,3.31-4.99,3.31-4.99,0s4.99-3.31,4.99,0" fill={colourFill} strokeWidth="0" />
      <path
        d="m56.75,10.44h-3.75v2.48h3.75c.69,0,1.25-.55,1.25-1.24s-.56-1.24-1.25-1.24Z"
        fill={colourFill}
        strokeWidth="0"
      />
      <path
        d="m45.08,55.1l1.63-37.22H6.85l2.25,51c.08,1.99,1.73,3.56,3.73,3.56h26.1c-3.07-2.66-4.2-6.92-2.84-10.73,1.35-3.82,4.92-6.44,8.99-6.6h0Zm-13.3-26.06h-9.99c-2.07,0-3.75-1.67-3.75-3.72s1.68-3.72,3.75-3.72h9.99c2.07,0,3.75,1.66,3.75,3.72s-1.68,3.72-3.75,3.72Z"
        fill={colourFill}
        strokeWidth="0"
      />
    </svg>
  );
};

export default ServiceIcon;
