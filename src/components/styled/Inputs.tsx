import { styled } from "styled-components";

export const Search = styled.input`
background-color: #D9D9D9;
color: #181515;
padding: 8px 12px;
border: none;
border-radius: 12px;
font-family: 'Montserrat';
&::placeholder {
    color: #181515;
    font-weight: 500;
}
&:focus-visible {
    border: none;
    outline: none;
}
`
export const NameNoteInput = styled.input`
background-color: transparent;
font-size: 32px;
border: none;
outline: none;
&::placeholder {
    color: var(--ion-color-medium-shade);
    font-weight: 500;
}
&:focus-visible {
    border: none;
    outline: none;
}
`
export const TextArea  = styled.span`
width: 100%;
background-color: transparent;
word-wrap: break-word;
word-break: break-all;
border: none;
outline: none;
&::placeholder {
    color: #181515;
    font-weight: 500;
}
&:focus-visible {
    border: none;
    outline: none;
}
`