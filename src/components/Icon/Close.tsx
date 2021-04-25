import { fil } from 'date-fns/locale';
import React from 'react';

import { ICommonIconProps } from '.';

type ICloseProps = ICommonIconProps;

const Close = ({
  style = {},
  fill = '#000',
  className = '',
  height = '24px',
  width = '24px',
  viewBox = '0 0 24 24',
}: ICloseProps): JSX.Element => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20.4985 3.26928C20.9001 3.65652 20.8607 4.33194 20.4311 4.83427L20.3242 4.94634L13.4537 11.5714L20.3242 18.1965C20.8524 18.7058 20.9302 19.4563 20.4985 19.8736C20.0969 20.2608 19.3965 20.2228 18.8756 19.8085L18.7593 19.7055L11.8889 13.0804L5.01843 19.7055C4.49024 20.2148 3.71197 20.2898 3.27926 19.8736C2.87768 19.4863 2.9171 18.8109 3.34671 18.3086L3.45359 18.1965L10.324 11.5714L3.45359 4.94634C2.9254 4.43702 2.84759 3.68654 3.27926 3.26928C3.68084 2.88205 4.38127 2.92006 4.90221 3.33433L5.01843 3.43739L11.8889 10.0625L18.7593 3.43739C19.2875 2.92806 20.0658 2.85304 20.4985 3.26928V3.26928Z'
      fill={fill}
    />
  </svg>
);

export default Close;
