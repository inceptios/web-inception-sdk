import { useRef, useState, type FC, type ReactNode } from "react"

import './Scaffold.css'

export interface ScaffoldProps {
    leftSideBar?: ReactNode,
    rightSideBar?: ReactNode,
    defaultLeftWidht?: number,
    defaultRightWidth?: number,
    defaultLeftWidthPercentage?:number,
    defaultRightWidthPercentage?:number,
    children: ReactNode,
    classname?: string,
}

export const Scaffold: FC<ScaffoldProps> = ({ leftSideBar, rightSideBar, children, defaultLeftWidht, defaultRightWidth,defaultLeftWidthPercentage, defaultRightWidthPercentage,classname }) => {
    const [leftWidth, setLeftWidth] = useState(defaultLeftWidht ?? 100);
    const [rightWidth, setRightWidth] = useState(defaultRightWidth ?? 100);

    // 2. Track drag data without triggering re-renders
    const dragData = useRef({ isDragging: false, side: '', startX: 0, startWidth: 0 });
    const scaffoldRef = useRef<HTMLDivElement>(null)

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, side: string) => {
        dragData.current = {
            isDragging: true,
            side,
            startX: e.clientX,
            startWidth: side === 'left' ? leftWidth : rightWidth
        };
        // Capture pointer to prevent losing it if the mouse moves fast
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragData.current.isDragging || !scaffoldRef.current) return;

        const delta = e.clientX - dragData.current.startX;

        const combinedWidth = scaffoldRef.current.offsetWidth * 0.35
        if (dragData.current.side === 'left') {
            // Apply minimum width constraints
            setLeftWidth(Math.max(100, Math.min(combinedWidth,dragData.current.startWidth + delta)));
        } else {
            // Dragging the right side leftwards decreases its width
            setRightWidth(Math.max(100, Math.min(combinedWidth,dragData.current.startWidth - delta)));
        }
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        dragData.current.isDragging = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    return (
        <div className={`${classname} scaffold-div`} ref={scaffoldRef}>

            <div className="main">
                {leftSideBar&&<> <div className="left-side-bar" style={{ width: `${defaultLeftWidthPercentage? defaultLeftWidthPercentage+'%' :leftWidth + 'px'}` }}>{leftSideBar}</div>

                <div className="slider"
                    onPointerDown={(e) => handlePointerDown(e, 'left')}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <div className="visible-slider">

                    </div>
                </div></>}

                <div className="main-div">{children}</div>

                {/* The Right Slider */}
               { rightSideBar &&<><div className="slider"
                    onPointerDown={(e) => handlePointerDown(e, 'right')}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <div className="visible-slider">

                    </div>
                </div>

                <div className="right-side-bar" style={{ width: `${defaultRightWidthPercentage? defaultLeftWidthPercentage+'%' :rightWidth + 'px'}` }}>{rightSideBar}</div></>}
            </div>
        </div>
    );
}
