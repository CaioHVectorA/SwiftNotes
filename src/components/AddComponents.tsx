//@ts-nocheck
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonLabel,
} from "@ionic/react";
import { add, text, list } from "ionicons/icons";
import { ColumnContainer } from "./styled/Containers";
import { Note, TextComponents } from "../utils/type";
import { BlockText, Title, List } from "./TextComponents";
import { SetStateAction, useContext, useState } from "react";
import { AppContext } from "../utils/AppContext";
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from "../utils/envariables";
import getIndex from "../utils/getIndexByStorage";
type ButtonProps = {
  icon: string;
  component: TextComponents;
  label: string;
  identifier: string;
};
  const ButtonsData: ButtonProps[] = [
    { icon: text, component: {component: Title, value: "", identifier: 'Title'}, label: "Título",},
    { icon: list, component: {component: List,value: [], identifier: 'List'}, label: "Lista",},
    { icon: text, component: {component: BlockText, value: "", identifier: 'TextBlock'}, label: "Parágrafo",},
  ];
  export default function AddComponents({ state, setState }: { state: TextComponents[], setState: SetStateAction<TextComponents[]> }) {
    const { setAppData } = useContext(AppContext)
    const MenuButton = ({ component, icon, label }: ButtonProps) => {
      function HandleClick() {
          const data: Note[] = JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))
          setState([...state, component])
          data[getIndex()].body = [...state, component]
          data[getIndex()].modified = new Date()
          setAppData(data)
          localStorage.setItem(DATA_LOCAL_STORAGE,JSON.stringify(data))
      }
      return (
        <IonFabButton
          onClick={HandleClick}
          style={{
            "--border-width": "0.25px",
            "--border-style": "solid",
            "--border-color": "rgba(255,255,255,.6)",
            "--color": "black",
            width: "100%",
          }}
        >
          <IonIcon style={{ color: "white" }} icon={icon}></IonIcon>
        </IonFabButton>
      );
    };
  return (
    <IonFab
      style={{
        position: "fixed",
        bottom: "2%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <IonFabButton
        style={{
          "--background": "var(--ion-color-tertiary)",
          "--color": "white",
        }}
      >
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        {ButtonsData.map((item, index) => (
          <ColumnContainer
            key={index}
            gap={2}
            margin="5px 0px"
            otherProps={{
              style: {
                width: "40px",
                height: "40px",
                position: "relative",
                justifyContent: "center",
              },
            }}
          >
            <MenuButton
              label={item.label}
              component={item.component}
              key={index}
              icon={item.icon}
            />
            <p style={{ position: "absolute", left: "48px" }}>{item.label}</p>
          </ColumnContainer>
        ))}
      </IonFabList>
    </IonFab>
  );
}
