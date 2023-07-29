import { ReactNode } from 'react';
import styled from 'styled-components';

const S_Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`
const Slider = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export function ColumnContainer({full = false, margin, padding,backgroundColor,children,gap, widthN,radius}: {full?: boolean, margin?: string, padding?: string, backgroundColor?: string, children: ReactNode,gap?: number,widthN?: string,radius?: number}) {
    return (
        <S_Column style={{margin,padding,backgroundColor, width: full ? '100vw' : widthN ? widthN : '',gap: gap ? `${gap}px` : '',borderRadius: `${radius}px`}}>
            {children}
        </S_Column>
    )
}
export function WrapperContainer({full = false, margin, padding,backgroundColor,children,gap, widthN,radius,justify}: {full?: boolean, margin?: string, padding?: string, backgroundColor?: string, children: ReactNode,gap?: number,widthN?: string,radius?: number,justify?: string}) {
    return (
        <Wrapper style={{margin,padding,backgroundColor, width: full ? '100vw' : widthN ? widthN : '',gap: gap ? `${gap}px` : '',borderRadius: `${radius}px`,justifyContent: justify}}>
            {children}
        </Wrapper>
    )
}

export function SliderContainer({gap = 15, children}: {gap?: number, children: ReactNode}) {
    return (
        <Slider style={{gap: `${gap}px`}}>{children}</Slider>
    )
}