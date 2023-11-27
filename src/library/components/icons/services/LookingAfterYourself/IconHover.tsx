import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="m24.73,15.07c-3.67,0-6.97,2.21-8.37,5.6-1.41,3.39-.63,7.29,1.96,9.88,2.59,2.59,6.49,3.37,9.88,1.96,3.39-1.4,5.6-4.71,5.6-8.37,0-5-4.06-9.06-9.07-9.07h0Zm3.4,6.8c.46,0,.87.27,1.05.7.17.42.08.91-.25,1.24-.33.32-.81.42-1.24.25-.42-.18-.7-.59-.7-1.05,0-.63.51-1.13,1.13-1.13h0Zm-6.8,0c.46,0,.87.27,1.05.7.17.42.08.91-.25,1.24-.33.32-.81.42-1.24.25-.42-.18-.7-.59-.7-1.05,0-.63.51-1.13,1.13-1.13h0Zm3.4,9.07c-2.14,0-4.16-1-5.44-2.72l1.81-1.36c.86,1.14,2.2,1.81,3.63,1.81s2.77-.67,3.63-1.81l1.81,1.36c-1.28,1.72-3.3,2.73-5.44,2.72Z"
        fill={colourFill}
      />
      <path
        d="m60.99,23c0,5.01-4.06,9.07-9.07,9.07s-9.07-4.06-9.07-9.07,4.06-9.07,9.07-9.07,9.07,4.06,9.07,9.07"
        fill={colourFill}
      />
      <path
        d="m38.08,38.81c1.68-3.05,4.33-5.47,7.55-6.87-3.21-2.18-5.07-5.84-4.91-9.68.16-3.84,2.31-7.34,5.69-9.26v-1.52c0-.3-.12-.58-.33-.79s-.5-.33-.81-.33h-4.09l-5.37,5.29-1.61-1.59,3.75-3.7h-2.47l-3.09,3.04-1.61-1.59,1.47-1.45H7.66c-.63,0-1.13.51-1.13,1.13v23.11l3.75-3.7,1.61,1.59-5.37,5.29v6.27c0,.3.12.58.33.79s.5.33.81.33h1.31c.78-5.35,4.3-9.92,9.31-12.11-2.69-1.83-4.45-4.7-4.84-7.89-.39-3.19.62-6.4,2.79-8.8,2.17-2.41,5.27-3.78,8.54-3.78s6.37,1.38,8.53,3.79c2.16,2.41,3.17,5.62,2.77,8.81-.4,3.19-2.17,6.06-4.86,7.88,2.8,1.22,5.19,3.21,6.86,5.74h0Zm-28.42-9.34l-1.6-1.6,2.27-2.27,1.6,1.6-2.27,2.27Z"
        fill={colourFill}
      />
      <path
        d="m4.35,44.65V11.58c0-1.88,1.52-3.4,3.4-3.4h37.87c1.64,0,2.97,1.33,2.97,2.97v.79c.71-.22,1.44-.37,2.18-.45v-2.52c0-1.64-1.33-2.97-2.97-2.97H5.58c-1.88,0-3.4,1.52-3.4,3.4v37.44c0,1.88,1.52,3.4,3.4,3.4h30.69v-2.18H7.77c-1.89,0-3.42-1.53-3.42-3.42h0Z"
        fill={colourFill}
      />
      <path
        d="m28.36,35.08c-2.36.81-4.92.81-7.28,0-2.49.69-4.73,2.07-6.46,3.98-1.73,1.92-2.88,4.28-3.31,6.83h24.79c.09-1.3.35-2.58.75-3.82-1.71-3.43-4.8-5.97-8.5-6.99h0Z"
        fill={colourFill}
      />
      <path
        d="m55.5,32.84h-7.29c-3.21.8-6.05,2.63-8.09,5.21-2.03,2.58-3.14,5.75-3.14,9.02v13.56c0,1.88,1.52,3.4,3.4,3.4h2.4v7.98h7.98v-7.98h2.18v7.98h7.98v-7.98h2.4c1.88,0,3.4-1.52,3.4-3.4v-13.56c0-3.27-1.11-6.44-3.14-9.02-2.03-2.58-4.88-4.41-8.09-5.21h0Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
