import { HTMLAttributes, HTMLProps, ReactNode } from 'react';
import styled from 'styled-components';

interface ColumnContainerProps {
  full?: boolean;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  children: ReactNode;
  gap?: number;
  widthN?: string;
  radius?: number;
  otherProps?: HTMLAttributes<HTMLDivElement>;
  clickAction?: any;
}

interface WrapperContainerProps {
  full?: boolean;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  children: ReactNode;
  gap?: number;
  widthN?: string;
  radius?: number;
  justify?: string;
}

interface SliderContainerProps {
  gap?: number;
  children: ReactNode;
}

const S_Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function ColumnContainer({
  full = false,
  margin,
  padding,
  backgroundColor,
  children,
  gap,
  widthN,
  radius,
  otherProps,
  clickAction
}: ColumnContainerProps) {
  return (
    <S_Column 
      {...otherProps}
      onClick={clickAction}
      style={{
        margin,
        padding,
        backgroundColor,
        width: full ? '100vw' : widthN ? widthN : '',
        gap: gap ? `${gap}px` : '',
        borderRadius: `${radius}px`,
        ...otherProps?.style,
      }}
    >
      {children}
    </S_Column>
  );
}

export function WrapperContainer({
  full = false,
  margin,
  padding,
  backgroundColor,
  children,
  gap,
  widthN,
  radius,
  justify,
}: WrapperContainerProps) {
  return (
    <Wrapper
      style={{
        margin,
        padding,
        backgroundColor,
        width: full ? '100vw' : widthN ? widthN : '',
        gap: gap ? `${gap}px` : '',
        borderRadius: `${radius}px`,
        justifyContent: justify,
      }}
    >
      {children}
    </Wrapper>
  );
}

export function SliderContainer({ gap = 15, children }: SliderContainerProps) {
  return <Slider style={{ gap: `${gap}px` }}>{children}</Slider>;
}

// export function Capturer({children, otherProps}: { children: ReactNode, otherProps: HTMLAttributes<HTMLDivElement> }) {
//   return <div {...otherProps}>{children}</div>
// }