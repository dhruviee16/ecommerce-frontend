import { InputProps, Input as TWInput } from '@material-tailwind/react';
import React from 'react';

export interface Props extends Omit<InputProps, 'ref'> {}

const Input: React.FC<Props> = ({ className, ...props }) => {
  return <TWInput size="lg" className={`w-80 ${className}`} {...props} />;
};

export default Input;
