import { FC, HTMLAttributes } from '../../../node_modules/react';
type MenuButtonType = HTMLAttributes<HTMLButtonElement> & {
    icon: string;
    isCurrent: boolean;
};
export declare const MenuButton: FC<MenuButtonType>;
export {};
