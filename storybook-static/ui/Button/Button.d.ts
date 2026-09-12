import { default as React, ButtonHTMLAttributes } from '../../../node_modules/react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default' | 'secondary';
}
export declare const Button: React.FC<ButtonProps>;
