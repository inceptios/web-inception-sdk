import { RefObject } from '../../../node_modules/react';
import { menuItem } from './types';
type ContextMenuProps = {
    isContextMenuShown: boolean;
    menuCoordinates: {
        x: number;
        y: number;
    };
    contextRef: RefObject<HTMLDivElement | null>;
    functionRef: RefObject<((id: string) => void) | null>;
    menuItems: menuItem[];
};
export declare const ContextMenu: ({ isContextMenuShown, menuCoordinates, contextRef, functionRef, menuItems }: ContextMenuProps) => false | import("react").JSX.Element;
export {};
