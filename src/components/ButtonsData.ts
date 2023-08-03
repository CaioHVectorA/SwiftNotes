import { add, text, list } from "ionicons/icons";
import { BlockText, Title, List } from "./TextComponents";
import { TextComponents } from "../utils/type";
type ButtonProps = {
  icon: string;
  component: TextComponents;
  label: string;
};
export const ButtonsData: ButtonProps[] = [
  {
    icon: text,
    component: {
      component: Title,
      value: "",
      identifier: "Title",
      initialValue: "",
    },
    label: "Título",
  },
  {
    icon: list,
    component: {
      component: List,
      value: [],
      identifier: "List",
      initialValue: [],
    },
    label: "Lista",
  },
  {
    icon: text,
    component: {
      component: BlockText,
      value: "",
      identifier: "TextBlock",
      initialValue: "",
    },
    label: "Parágrafo",
  },
];
