import { FC, ReactNode } from '../../../node_modules/react';
export interface ScaffoldProps {
    leftSideBar?: ReactNode;
    rightSideBar?: ReactNode;
    defaultLeftWidht?: number;
    defaultRightWidth?: number;
    defaultLeftWidthPercentage?: number;
    defaultRightWidthPercentage?: number;
    children: ReactNode;
    classname?: string;
}
export declare const Scaffold: FC<ScaffoldProps>;
