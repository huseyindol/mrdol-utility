import React, { ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

export type ButtonVariantProps = VariantProps<typeof button>;
export const button = cva('relative rounded-md', {
  variants: {
    variant: {
      default: 'text-text shadow-button border border-gray-400 bg-white',
      primary: 'bg-primary text-white',
      destructive: 'bg-destructive text-white',
      monochrome: 'text-text border border-gray-400 bg-white',
    },
    modifier: {
      outline: 'border border-current bg-transparent shadow-[0_0_0_1px_currentColor]',
      plain: 'border-none bg-transparent px-2 py-1 text-sm shadow-none',
    },
    size: {
      small: 'text-sm',
      medium: 'text-sm',
      large: 'text-base',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'bg-surfaceDisabled text-textDisabled',
    },
  },
  compoundVariants: [
    {
      modifier: 'outline',
      variant: 'destructive',
      className: '!text-destructive',
    },
    {
      modifier: 'outline',
      variant: 'primary',
      className: '!text-primary',
    },
    {
      modifier: 'plain',
      variant: 'destructive',
      className: '!text-destructive',
    },
    {
      modifier: 'plain',
      variant: 'primary',
      className: '!text-primary',
    },
    {
      modifier: undefined,
      size: 'small',
      className: '!px-3 !py-[3px]',
    },
    {
      modifier: 'outline',
      size: 'small',
      className: '!px-3 !py-[3px]',
    },
    {
      modifier: undefined,
      size: 'medium',
      className: '!px-4 !py-2',
    },
    {
      modifier: 'outline',
      size: 'medium',
      className: '!px-4 !py-2',
    },
    {
      modifier: undefined,
      size: 'large',
      className: '!px-6 !py-3',
    },
    {
      modifier: 'outline',
      size: 'large',
      className: '!px-6 !py-3',
    },
    {
      disabled: true,
      variant: 'default',
      className: '!border-borderDisabled',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});

/**
 * Button
 */
export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  variant?: 'default' | 'primary' | 'destructive' | 'monochrome' | null | undefined;
  modifier?: 'outline' | 'plain' | null | undefined;
  size?: 'small' | 'medium' | 'large' | null | undefined;
  fullWidth?: boolean | undefined;
  disabled?: boolean | undefined;
}

export const CVAButtonComp = ({
  children,
  variant = 'default',
  modifier,
  size = 'medium',
  fullWidth,
  disabled,
  loading = false,
  className,
}: IButtonProps) => {
  return (
    <button className={`${button({ variant, modifier, size, fullWidth, disabled })} ${className}`}>
      <span className={loading ? 'text-transparent' : ''}>{children}</span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg className="animate-spin" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};
