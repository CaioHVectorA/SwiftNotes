import { BlockText, List, Title } from "../components/TextComponents";

export default function getFunc(ident: string) {
    switch (ident) {
        case "Title":
            return Title
        case "List":
            return List
        case "TextBlock":
            return BlockText
    }
}