import { menuItem } from './types';
type menuButtonsRecersiveProps = {
    menuItem: menuItem[];
    onButtonClick: React.RefObject<((id: string) => void) | null>;
    onClose?: () => void;
};
export declare const MenuButtonsRecersive: ({ menuItem, onButtonClick, onClose }: menuButtonsRecersiveProps) => import("react").JSX.Element;
export {};
