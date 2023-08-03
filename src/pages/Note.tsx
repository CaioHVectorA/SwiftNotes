//@ts-nocheck
import { IonContent, IonItem, IonPage, IonTextarea } from "@ionic/react";
import Header from "../components/Header";
import { Note as Note_T, TextComponents } from "../utils/type";
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from "../utils/envariables";
import { NameNoteInput, TextArea } from "../components/styled/Inputs";
import { ColumnContainer } from "../components/styled/Containers";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../utils/AppContext";
import fontSize from "../utils/FontSizeCalc";
import AddComponents from "../components/AddComponents";
import getIndex from "../utils/getIndexByStorage";
import getFunc from "../utils/getFuncByIdent";
import getDataStorage from "../utils/getStorageData";
function NoteView({ data }: { data: Note_T }) {
    const thisNote: Note_T = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))[getIndex()]
    const { appData, setAppData } = useContext(AppContext)
    const [title, setTitle] = useState(thisNote.title || "")
    // const [body, setBody] = useState(thisNote.body || "")
    const [body, setBody] = useState<TextComponents[]>(JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))[getIndex()].body || [])
    function SaveData() {
        const data: Note_T[] = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))
        data[getIndex()].body = body
        data[getIndex()].title = title
        data[getIndex()].modified = new Date()
        setAppData(data)
        localStorage.setItem(DATA_LOCAL_STORAGE,JSON.stringify(data))
    }
    useEffect(SaveData, [title, body])
    return (
        <ColumnContainer full padding="5px 20px">
            <NameNoteInput placeholder="Untitled Note" value={title} onChange={({target}) => setTitle(target.value)} style={{fontSize: `${fontSize(title)}px`}} maxLength={36} />
            {body.map((item, index) => {
                // console.log(getDataStorage()[getIndex()].body[index].value)
                const Item = getFunc(item.identifier)
             return (
                <Item key={index} value={getDataStorage()[getIndex()].body[index].value || ""} index={index} />
            )
            })}
            <AddComponents state={body} setState={setBody}/>
        </ColumnContainer>
    )
}


export default function Note() {
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))[getIndex()]
    return (
        <IonPage>
        <Header>Sua nota</Header>
        <IonContent fullscreen>
            <NoteView data={data}/>
        </IonContent>
        {/* <AddComponents /> */}
        </IonPage>
    )
}