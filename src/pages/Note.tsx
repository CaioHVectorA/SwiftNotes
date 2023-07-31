//@ts-nocheck
import { IonContent, IonItem, IonPage, IonTextarea } from "@ionic/react";
import Header from "../components/Header";
import { Note as Note_T } from "../utils/type";
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from "../utils/envariables";
import { NameNoteInput, TextArea } from "../components/styled/Inputs";
import { ColumnContainer } from "../components/styled/Containers";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../utils/AppContext";
import fontSize from "../utils/FontSizeCalc";
import AddComponents from "../components/AddComponents";

function NoteView({ data }: { data: Note_T }) {
    const thisNote: Note_T = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))[parseInt(localStorage.getItem(INDEX_LOCAL_STORAGE))]
    const { appData, setAppData } = useContext(AppContext)
    const [title, setTitle] = useState(thisNote.title || "")
    const [body, setBody] = useState(thisNote.body || "")
    function SaveData() {
        console.log(body)
        const index = localStorage.getItem(INDEX_LOCAL_STORAGE)
        const data: Note_T[] = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))
        data[parseInt(index)].body = body
        data[parseInt(index)].title = title
        data[parseInt(index)].modified = new Date()
        setAppData(data)
        localStorage.setItem(DATA_LOCAL_STORAGE,JSON.stringify(data))
    }
    useEffect(() => {
        SaveData()
    }, [title, body])
    return (
        <ColumnContainer full padding="5px 20px">
        <NameNoteInput placeholder="Untitled Note" value={title} onChange={({target}) => setTitle(target.value)} style={{fontSize: `${fontSize(title)}px`}} maxLength={36} />
        <IonTextarea value={body} onIonChange={({detail}) => setBody(detail.value)} style={{border: 'none'}} autoGrow placeholder="Your Text here..."></IonTextarea>
        </ColumnContainer>
    )
}


export default function Note() {
    const index = localStorage.getItem(INDEX_LOCAL_STORAGE)
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))[parseInt(index)]
    return (
        <IonPage>
        <Header>Sua nota</Header>
        <IonContent fullscreen>
            <NoteView data={data}/>
        </IonContent>
        <AddComponents />
        </IonPage>
    )
}