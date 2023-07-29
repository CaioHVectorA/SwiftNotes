import { IonHeader, IonToolbar, IonTitle, IonButton, IonBackButton, IonButtons, IonIcon } from "@ionic/react";
import { ReactNode } from "react";
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons'
import { Title } from "./styled/Titles";
type HeaderProps = {
    children: ReactNode,
    initial?: boolean
}
export default function Header({ children, initial = false }: HeaderProps) {
    return (
        <IonHeader>
        <IonToolbar  style={{'--border-width': '0px','--background': 'var(--ion-background-color)',padding: '2px 0px',backdropFilter: 'blur(10px)'}}>
            {!initial && 
            <>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
            </>
            }
                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon style={{fill: 'var(--ion-text-color)'}} ios={ellipsisHorizontal} md={ellipsisVertical} />
                    </IonButton>
                </IonButtons>
          <IonTitle slot="start" style={{paddingInline: '8%'}}>
                <Title fs={24} bold>
                    {children}
                </Title>
            </IonTitle>
        </IonToolbar>
      </IonHeader>
    )
}