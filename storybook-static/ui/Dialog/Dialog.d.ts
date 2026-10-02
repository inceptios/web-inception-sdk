import { AllHTMLAttributes, FC, ReactNode } from '../../../../node_modules/react';
type DialogBoxProps = AllHTMLAttributes<HTMLDivElement> & {
    dialogTitle: ReactNode;
    children: ReactNode;
    confirmButton: ReactNode;
    dismissButton: ReactNode;
    onDismiss: () => void;
};
export declare const DialogBox: FC<DialogBoxProps>;
export {};
