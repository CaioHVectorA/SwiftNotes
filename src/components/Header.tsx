import { IonHeader, IonToolbar, IonTitle, IonButton, IonBackButton, IonButtons, IonIcon, IonLabel } from "@ionic/react";
import { ReactNode, useContext, useState } from "react";
import { close, ellipsisHorizontal, ellipsisVertical, trash } from 'ionicons/icons'
import { Title } from "./styled/Titles";
import { AppContext } from "../utils/AppContext";
import DeleteNotes from "../utils/DeleteNotes";
type HeaderProps = {
    children: ReactNode,
    initial?: boolean,
    Action?: any
}

function DefaultToolbar({ children, initial = false, Action }: HeaderProps) {
    return (
        <IonToolbar style={{'--border-width': '0px','--background': 'var(--ion-background-color)',padding: '2px 0px',backdropFilter: 'blur(10px)'}}>
        {!initial && 
        <>
            <IonButtons onClick={Action ? Action : null} slot="start">
                <IonBackButton color={"dark"} text={""} />
            </IonButtons>
        </>
        }
            <IonButtons slot="end">
                <IonButton>
                    <IonIcon style={{fill: 'var(--ion-text-color)'}} ios={ellipsisHorizontal} md={ellipsisVertical} />
                </IonButton>
            </IonButtons>
      <IonTitle slot="start" style={{paddingInline: '8%'}}>
            <Title fs={initial ? 24 : 16} bold>
                {children}
            </Title>
        </IonTitle>
    </IonToolbar>
    )
}

function SelectorsToolbar() {
    //@ts-ignore
    const { appData, setAppData, selectorMode, setSelectorMode } = useContext(AppContext)
    return (
        <IonToolbar style={{'--border-width': '0px','--background': 'var(--ion-background-color)',padding: '2px 0px',backdropFilter: 'blur(10px)'}}>
      <IonTitle slot="start" style={{paddingInline: '8%'}}>
            <Title fs={16} bold>
                {selectorMode.length} Selecteds
            </Title>
        </IonTitle>
        <IonButtons slot="end" style={{paddingRight: '2%'}}>
        <IonButton onClick={() => DeleteNotes(appData,selectorMode,setSelectorMode,setAppData)}>
        <IonLabel color={"danger"}>Delete</IonLabel>
        </IonButton>
        <IonButton onClick={() => setSelectorMode([])}>
            <IonIcon color="dark" ios={close} md={close}/>
        </IonButton>
        </IonButtons>
        </IonToolbar>
    )
}

export default function Header({ children, initial = false, Action }: HeaderProps) {
    //@ts-ignore
    const { selectorMode } = useContext(AppContext)
    return (
        <IonHeader>
            {
                selectorMode.length > 0 ?
                <>
                <SelectorsToolbar />
                </>
                :
                <>
                <DefaultToolbar initial={initial} Action={Action}>{children}</DefaultToolbar>
                </>
            }
      </IonHeader>
    )
}