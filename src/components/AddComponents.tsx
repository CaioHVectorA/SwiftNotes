import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonLabel,
} from "@ionic/react";
import { add, text, list } from "ionicons/icons";
import { ColumnContainer } from "./styled/Containers";
type ButtonProps = {
  icon: string;
  action: React.ReactNode;
  label: string;
};

const MenuButton = ({ action, icon, label }: ButtonProps) => {
  const state: any[] = [];
  return (
    <IonFabButton
      onClick={() =>
        console.log("Lógica p/ adicionar componetnes na array aqui")
      }
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
const blankFunc = () => {};
const ButtonsData: ButtonProps[] = [
  { icon: text, action: blankFunc, label: "Título" },
  { icon: list, action: blankFunc, label: "Lista" },
  { icon: text, action: blankFunc, label: "Parágrafo" },
];

export default function AddComponents() {
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
              action={item.action}
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
