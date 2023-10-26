import React from 'react';
import './button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComp = ({ label, ...props }: ButtonProps) => {
  return <button {...props}>{label}</button>;
};
