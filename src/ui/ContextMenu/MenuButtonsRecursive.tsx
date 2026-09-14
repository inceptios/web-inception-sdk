import { useState } from "react"
import './MenuButtonsRecursive.css'
import type { menuItem } from "./types"

type menuButtonsRecersiveProps = {
    menuItem: menuItem[],
    onButtonClick: React.RefObject<((id: string) => void) | null>
}

export const MenuButtonsRecersive = ({ menuItem, onButtonClick }: menuButtonsRecersiveProps) => {

    const [activeSubMenuId, setActiveSubMenuId] = useState<string | null>(null)



    return (
        <>
            {menuItem.map(item => (
                <div className="sub-menu-overlay">
                    <button
                        key={item.menuId}
                        className={`title-menu-sub-button`}
                        style={{
                            anchorName: `--sub-menu-btn-${item.menuId}`,
                        }}

                        onPointerEnter={() => {
                            setActiveSubMenuId(item.menuId)
                        }}

                        onClick={() => {
                            if (!item.items) {
                                onButtonClick.current?.(item.menuId)
                            }
                        }}
                    >
                        <div className="title-menu-sub-text">
                            {item.monoIcon && <div
                                className="rec-menu-icon"
                                style={{
                                    WebkitMaskImage: `url(${item.monoIcon})`,
                                    maskImage: `url(${item.monoIcon})`
                                }}
                            />}
                            {
                                item.icon && <img src={item.icon} width={14} height={14}/>
                            }
                            <p>{item.title}</p>
                        </div>
                        <p>{item.items && '>'}</p>
                    </button>
                    {item.items && activeSubMenuId === item.menuId && <div
                        className="sub-menu-more-options"
                        style={{
                            position: 'absolute',
                            positionAnchor: `--sub-menu-btn-${item.menuId}`,
                        }}
                    >
                        <MenuButtonsRecersive
                            menuItem={item.items}
                            onButtonClick={onButtonClick}
                        />
                    </div>}
                </div>
            ))}


        </>
    )
}