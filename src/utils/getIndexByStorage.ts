//@ts-nocheck
import { INDEX_LOCAL_STORAGE } from "./envariables"

export default function getIndex(): number {
    return parseInt(localStorage.getItem(INDEX_LOCAL_STORAGE))
}