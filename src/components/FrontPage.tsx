import { useState } from "react"
import { DATA_LOCAL_STORAGE } from "../utils/envariables"
import { mockup } from "../utils/mockup"
import { Note } from "../utils/type"
import { ColumnContainer, WrapperContainer } from "./styled/Containers"
import { Text } from "./styled/Texts"
import { Title } from "./styled/Titles"
import styled from 'styled-components'
const Search = styled.input`
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



export default function FrontPage() {
    //@ts-ignore
    // const data: JSON = localStorage.getItem(DATA_LOCAL_STORAGE)
    const data = JSON.stringify(mockup)
    if (!!!data) {
        return (
            <Title bold>
                Você ainda não tem nenhuma nota. Experimente criar uma! 
            </Title>
        )
    } 
    return (
        <Cards data={JSON.parse(data)} />
    )
}

function NoteCard({NoteProps}: {NoteProps: Note}) {
    return (
        <ColumnContainer backgroundColor="var(--ion-color-primary)" widthN="46.5%"  radius={20} padding="16px">
            <Title fs={20}>{NoteProps.title}</Title>
            <Text>{NoteProps.body}</Text>
        </ColumnContainer>
    )
}

function Cards({data}: {data: Note[]}) {
    const [input,setInput] = useState("")
    const Filter = (note: Note) => {
        return note.title.toUpperCase().includes(input.toUpperCase()) || note.body.toUpperCase().includes(input.toUpperCase())
    }
 return (
    <ColumnContainer widthN="90%" margin="0px auto" gap={6}>
    <Search value={input} onChange={({target}) => setInput(target.value)} placeholder="Search" />
    <WrapperContainer gap={20} widthN="100%" margin="24px auto" justify="space-between">
        {data.filter(Filter).map((note,index) => (
            <NoteCard key={index} NoteProps={note} />
            ))}
    </WrapperContainer>
    </ColumnContainer>
 )
}