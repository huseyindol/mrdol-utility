import React, { ButtonHTMLAttributes } from 'react';
import './button.css';
import { Button } from '@radix-ui/themes';
import { BaseButtonProps } from '@radix-ui/themes/dist/cjs/components/base-button';
interface ButtonProps extends BaseButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComp = ({ label, ...props }: ButtonProps) => {
  return <Button {...props}>{label}</Button>;
};
