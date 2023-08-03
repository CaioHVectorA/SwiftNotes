import { DATA_LOCAL_STORAGE } from "./envariables";
import { Note } from "./type";

export default function DeleteNotes(dataContext: Note[], selectedContext: Note[], setSelectedContext: any) {
    const tempData = [...dataContext]
    const filtered = tempData.filter(item => {
        return !selectedContext.includes(item)
    })
    setSelectedContext([])
    localStorage.setItem(DATA_LOCAL_STORAGE, JSON.stringify(filtered))
    return filtered
}