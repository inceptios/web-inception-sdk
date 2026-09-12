import { type FC, type ReactNode } from 'react'
import './ScrollDiv.css'

export const ScrollDiv:FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className='main-div'>{children}</div>
  )
}
