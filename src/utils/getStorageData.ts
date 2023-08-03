//@ts-nocheck
import { DATA_LOCAL_STORAGE } from "./envariables"

export default function getDataStorage() {
    return JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE))
}