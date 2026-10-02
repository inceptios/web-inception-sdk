import type { AllHTMLAttributes, FC, ReactNode } from "react";
import './Dialog.css'

type DialogBoxProps = AllHTMLAttributes<HTMLDivElement> & {
    dialogTitle: ReactNode,
    children: ReactNode,
    confirmButton: ReactNode,
    dismissButton: ReactNode,
    onDismiss: () => void,
}

export const DialogBox: FC<DialogBoxProps> = ({ dialogTitle, children, confirmButton, dismissButton, onDismiss, ...props }: DialogBoxProps) => {
    return (
        <div id="dialog-box-backdrop"
            onClick={(e) => {
                e.stopPropagation()
                onDismiss()
            }}
            
        >
            <div
                id="dialog-box"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                {...props}
            >
                {dialogTitle}
                <div
                    id="dialog-body"
                >
                    {children}
                </div>
                <div className="action-btns">
                    {dismissButton}
                    {confirmButton}
                </div>
            </div>
        </div>
    )
}