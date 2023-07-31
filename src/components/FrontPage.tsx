import { useContext, useEffect, useState } from "react"
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from "../utils/envariables"
import { mockup } from "../utils/mockup"
import { Note } from "../utils/type"
import { ColumnContainer, WrapperContainer } from "./styled/Containers"
import { Text } from "./styled/Texts"
import { Title } from "./styled/Titles"
import styled from 'styled-components'
import AddButton from "./AddButton"
import { Search } from "./styled/Inputs"
import { AppContext } from "../utils/AppContext"
import { Link, useHistory } from "react-router-dom"
import { IonNavLink } from "@ionic/react"
import useLongPress from "../utils/UseLongPress"



export default function FrontPage() {
    //@ts-ignore
    const { appData,setAppData } = useContext(AppContext)
    if (!!!appData) {
        return (
            <ColumnContainer widthN="80%" margin="32px auto">
            <Title fs={30} centered bold>
                Você ainda não tem nenhuma nota. <br /> Experimente criar uma! 
            </Title>
            <AddButton />            
            </ColumnContainer>
        )
    }
    return (
        <>
        <Cards data={appData} />
        <AddButton />            
        </>
    )
}

function NoteCard({NoteProps, index}: {NoteProps: Note, index: number}) {
    const [selected, setSelected] = useState(false)
    //@ts-ignore
    const { selectorMode, setSelectorMode }: {selectorMode: Note[], setSelectorMode: any} = useContext(AppContext)
    useEffect(() => {
        if (selectorMode.length === 0) {setSelected(false)}
    }, [selectorMode])
    const onLongPress = () => {
        setSelected(true)
        if (!selectorMode.includes(NoteProps)) {
            setSelectorMode([...selectorMode, NoteProps])
        }
    };
    
    const onClick = () => {
        if (selectorMode.length === 0) {
            localStorage.setItem(INDEX_LOCAL_STORAGE, "" + index);
            history.push('/note')
        } else {
            if (selected) {
                const selectors = selectorMode.filter(item => item !== NoteProps)
                setSelected(false)
                setSelectorMode(selectors)
            } else {
                setSelected(true)
                if (!selectorMode.includes(NoteProps)) {
                    setSelectorMode([...selectorMode, NoteProps])
                }
            }
        }
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const history = useHistory()
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
    return (
        <ColumnContainer backgroundColor="var(--ion-color-primary)" widthN="45%" radius={10} padding="16px" otherProps={{style: {height: '180px',border: selected ? '3px solid blue' : '3px solid transparent',alignItems: 'center', justifyContent: 'center'}, ...longPressEvent}}>
            <Title fs={25}>{NoteProps.title ? NoteProps.title : 'Untitled Note'}</Title>
        </ColumnContainer>
    )
}

function Cards({data}: {data: Note[]}) {
    const [input,setInput] = useState("")
    const Filter = (note: Note) => {
        return note.title.toUpperCase().includes(input.toUpperCase()) || note.body.toUpperCase().includes(input.toUpperCase())
    }
 return (
    <ColumnContainer widthN="90%" margin="20px auto" gap={6}>
    <Search value={input} onChange={({target}) => setInput(target.value)} placeholder="Search" />
    <WrapperContainer gap={20} widthN="100%" margin="24px auto" justify="space-between">
        {data.filter(Filter).map((note,index) => (
            <NoteCard index={index} key={index} NoteProps={note} />
            ))}
    </WrapperContainer>
    </ColumnContainer>
 )
}