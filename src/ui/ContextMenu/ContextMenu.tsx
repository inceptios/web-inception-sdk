import { type RefObject } from 'react'
import { MenuButtonsRecersive } from './MenuButtonsRecursive'
import type { menuItem } from './types'
import './ContextMenu.css'

type ContextMenuProps = {
    isContextMenuShown:boolean,
    menuCoordinates:{x:number, y:number},
    contextRef : RefObject<HTMLDivElement | null>,
    functionRef : RefObject<((id: string) => void) | null>,
    menuItems:menuItem[]
}

export const ContextMenu = ({isContextMenuShown,menuCoordinates,contextRef,functionRef,menuItems}:ContextMenuProps) => {
    return (
        isContextMenuShown && <div
            id="context-menu"
            style={{
                position: 'absolute',
                left: `${menuCoordinates.x}px`,
                top: `${menuCoordinates.y}px`
            }}
            ref={contextRef}
        >
            <MenuButtonsRecersive menuItem={menuItems} onButtonClick={functionRef} />
        </div>
  )
}