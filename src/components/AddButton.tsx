import { IonButtons, IonIcon } from '@ionic/react'
import { addCircle } from 'ionicons/icons'
import { CSSProperties } from 'react'
import { useHistory } from 'react-router'
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from '../utils/envariables'
import { Note } from '../utils/type'
import NoteGenerate from '../utils/NoteGenerate'
const buttonStyle: CSSProperties = {
    position: 'fixed',
    bottom: '2%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '72px',
}

export default function AddButton({history}: any) {
    const teste = useHistory()
    function HandleClick() {
        // @ts-ignore
        const data: Note[] = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE)) || []
        data.unshift(NoteGenerate())
        localStorage.setItem(DATA_LOCAL_STORAGE,JSON.stringify(data))
        localStorage.setItem(INDEX_LOCAL_STORAGE,"0")
        teste.push("/note")
    }
    return (
        <IonIcon onClick={HandleClick} style={buttonStyle} ios={addCircle} md={addCircle} />
    )
}