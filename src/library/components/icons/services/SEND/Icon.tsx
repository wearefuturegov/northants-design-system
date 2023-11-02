import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <g>
        <path
          d="m33.76,27.86c0,1.55-1.26,2.81-2.81,2.81s-2.81-1.26-2.81-2.81,1.26-2.81,2.81-2.81,2.81,1.26,2.81,2.81"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
        />
        <path
          d="m30.94,50.37c-3.57,0-6.47-2.9-6.47-6.47,0-2.33,1.24-4.38,3.1-5.52v-1.28c-2.5,1.25-4.22,3.83-4.22,6.8,0,4.19,3.41,7.6,7.6,7.6,3.35,0,6.21-2.19,7.21-5.21l-.91-.91c-.67,2.86-3.24,4.99-6.3,4.99h0Z"
          fill={colourFill}
          stroke={colourFill}
          strokeMiterlimit="10"
        />
        <path
          d="m28.13,41.08c0,1.55,1.26,2.81,2.81,2.81h5.63l5.63,5.63c.55.55,1.44.55,1.99,0s.55-1.44,0-1.99l-5.63-5.63c-.51-.51-1.21-.82-1.99-.82h-2.81v-7.71c.56-.29,1.09-.67,1.56-1.14l4.78-4.78c.55-.55.55-1.44,0-1.99-.55-.55-1.44-.55-1.99,0l-4.78,4.78c-1.32,1.32-3.46,1.32-4.78,0l-4.78-4.78c-.55-.55-1.44-.55-1.99,0-.55.55-.55,1.44,0,1.99l4.78,4.78c.47.47,1,.85,1.56,1.14v7.71Z"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
        />
      </g>
      <path
        d="m53.5,29.5l1.5.16,5.6-6.57c1.17-1.37,3.21.37,2.07,1.73-1.27,1.51-4,4.62-5.71,6.68-.03,6.58-.05,13.17-.05,19.75,0,1.78-2.95,1.78-2.95,0v-7.73c-.01-1.01-.88-1.07-.88,0v7.73c0,1.78-2.95,1.78-2.96,0l-.07-19.75c-1.71-2.05-4.45-5.16-5.71-6.68-1.14-1.36.9-3.1,2.07-1.73l5.59,6.57,1.5-.16Zm0-7.34c1.82,0,3.29,1.47,3.29,3.29s-1.47,3.29-3.29,3.29-3.29-1.47-3.29-3.29,1.48-3.29,3.29-3.29Z"
        fill="none"
        fillRule="evenodd"
        stroke={colourFill}
        strokeMiterlimit="10"
      />
      <g>
        <path
          d="m13.15,25.48c0,1.86-1.51,3.36-3.36,3.36s-3.37-1.51-3.37-3.36,1.51-3.36,3.37-3.36,3.36,1.51,3.36,3.36"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
        />
        <path
          d="m18.54,26.04c.23-.64-.1-1.34-.74-1.56-.64-.23-1.34.1-1.56.74-.02.05-1.18,3.23-3.44,4.9-.87-.41-1.87-.65-3.02-.65s-2.14.24-3.02.65c-2.26-1.67-3.43-4.85-3.44-4.9-.23-.64-.93-.97-1.56-.74-.64.23-.97.93-.74,1.56.73,2.05,2.52,5.47,5.24,7.15v3.88l-2.57,6.41c-.1.26.04.47.32.47h2.29l.42,8.18c.02.29.26.52.55.52h1.2c.29,0,.53-.23.55-.52l.42-8.18h.67l.42,8.18c.02.29.26.52.55.52h1.2c.29,0,.53-.23.55-.52l.42-8.18h2.29c.28,0,.43-.21.32-.47l-2.57-6.41v-3.88c2.72-1.68,4.52-5.1,5.25-7.15h0Z"
          fill="none"
          stroke={colourFill}
          strokeMiterlimit="10"
        />
      </g>
      <ellipse
        cx="30.98"
        cy="52.49"
        rx="28.97"
        ry="1.02"
        fill={colourFill}
        stroke={colourFill}
        strokeMiterlimit="10"
        strokeWidth=".75"
      />
    </svg>
  );
};

export default ServiceIcon;
