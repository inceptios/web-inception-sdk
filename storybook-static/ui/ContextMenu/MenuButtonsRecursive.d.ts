import { menuItem } from './types';
type menuButtonsRecersiveProps = {
    menuItem: menuItem[];
    onButtonClick: React.RefObject<((id: string) => void) | null>;
};
export declare const MenuButtonsRecersive: ({ menuItem, onButtonClick }: menuButtonsRecersiveProps) => import("react").JSX.Element;
export {};
