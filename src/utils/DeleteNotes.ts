import { DATA_LOCAL_STORAGE } from "./envariables";
import { Note } from "./type";

export default function DeleteNotes(dataContext: Note[], selectedContext: Note[], setSelectedContext: any, setDataContext: any) {
    const tempData = [...dataContext]
    const filtered = tempData.filter(item => {
        console.log(selectedContext.includes(item))
        return !selectedContext.includes(item)
    })
    console.log(filtered)
    setSelectedContext([])
    setDataContext(filtered)
    console.log(dataContext)
    localStorage.setItem(DATA_LOCAL_STORAGE, JSON.stringify(filtered))
}