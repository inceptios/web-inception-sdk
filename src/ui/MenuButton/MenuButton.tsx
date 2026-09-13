import type { FC, HTMLAttributes } from "react";
import './MenuButton.css'

type MenuButtonType = HTMLAttributes<HTMLButtonElement> & {
    icon:string,
    isCurrent:boolean
}

export const MenuButton: FC<MenuButtonType> = ({ onClick, children,icon, isCurrent, ...props }) => {
    return (
    <button
        onClick={onClick}
        className={`menu-button ${isCurrent?"current-option":""}`}
        {...props}
    >
        <div className="menu-icon"
            style={{
                WebkitMaskImage: `url(${icon})`,
                maskImage: `url(${icon})`
            }}
        /><p>{children}</p>
    </button>)
}