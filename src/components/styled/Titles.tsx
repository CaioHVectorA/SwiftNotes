import { ReactNode } from 'react'
import styled from 'styled-components'

const S_Title = styled.h1`
    font-size: 36px;
    font-family: 'Montserrat',sans-serif;
    margin: 0;
    padding: 0;
    `
const S_SubTitle = styled.h3`
    font-size: 24px;
    font-family: 'Montserrat',sans-serif;
    margin: 0;
    padding: 0;
`

export const Title = ({fs, bold = false,children, centered = false, opacity = '1'}: {fs?: number,bold?: boolean, children: ReactNode, centered?: boolean, opacity?: string}) => {
    return <S_Title style={{fontSize: `${fs}px`,fontWeight: bold ? 'bold' : '',textAlign: centered ? 'center' : 'start',opacity}}>{children}</S_Title>
}
export const Subtitle = ({fs, bold = false,children, centered = false,opacity = '1'}: {fs?: number,bold?: boolean, children: ReactNode, centered?: boolean, opacity?: string}) => {
    return <S_SubTitle style={{fontSize: `${fs}px`,fontWeight: bold ? 'bold' : '',textAlign: centered ? 'center' : 'start',opacity}}>{children}</S_SubTitle>
}