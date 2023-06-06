import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 76">
      <path
        d="M39.14 8.38A20.5 20.5 0 0 0 3 22v31.9a20.47 20.47 0 0 0 40.65 3.42 1.07 1.07 0 0 0 0-.4 20.75 20.75 0 0 0 .31-3V22a20.7 20.7 0 0 0-4.82-13.62Zm1.8 46.08-14-7.2L41 40v13.74c0 .24 0 .48-.06.72ZM23.5 4.27A17.51 17.51 0 0 1 41 21.77v15l-17.5 9L6 36.74v-15A17.51 17.51 0 0 1 23.5 4.27Zm-.25 67.27a17.19 17.19 0 0 1-12.19-5.09A17.4 17.4 0 0 1 6 54.2V40.47L22.47 49 40 58.07a17.28 17.28 0 0 1-16.75 13.47ZM23.5 36A14.57 14.57 0 0 0 38 22.18a.88.88 0 0 0 0-.18v-.5a.88.88 0 0 0 0-.23A14.5 14.5 0 0 0 24.83 7.53a1.63 1.63 0 0 0-.49 0c-.28 0-.54-.08-.83-.08A14.55 14.55 0 0 0 9 21.22a.88.88 0 0 0 0 .23V22a.88.88 0 0 0 0 .23A14.57 14.57 0 0 0 23.5 36ZM22 10.44l-1 1.84a3.35 3.35 0 0 0 .57 5.09 4 4 0 0 0 2.24.7 3.81 3.81 0 0 0 3.07-1.57 1.5 1.5 0 1 0-2.42-1.77.84.84 0 0 1-1.15.18.74.74 0 0 1-.32-.47.74.74 0 0 1 .12-.56l2.12-3.45a11.52 11.52 0 0 1 9.86 11.13 11.54 11.54 0 0 1-23.08 0A11.52 11.52 0 0 1 22 10.44Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;
