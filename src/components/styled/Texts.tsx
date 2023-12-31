import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
const S_Text = styled.p`
    font-size: 16px;
    max-width: 80%;
    line-height: 23px;
`

export const Text = ({fs,margin,centered = false,maxWidth,padding, children,otherProps}: {centered?: boolean, maxWidth?: string,fs?: number,margin?: string, padding?: string, children: ReactNode,otherProps?: HTMLAttributes<HTMLParagraphElement>}) => {
    return <S_Text style={{fontSize: fs ? fs : '', textAlign: centered ? 'center' : 'start', maxWidth,padding,margin, ...otherProps?.style}}>{children}</S_Text>
}