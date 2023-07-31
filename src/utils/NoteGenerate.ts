import { Note } from "./type";

export default function NoteGenerate(): Note {
    return {
        created: new Date(),
        modified: new Date(),
        title: "",
        body: "",
    }
}