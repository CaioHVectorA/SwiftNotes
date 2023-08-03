//@ts-nocheck
import { IonTextarea } from "@ionic/react";
import { ChangeEvent, ChangeEventHandler, useContext, useEffect, useState } from "react";
import fontSize from "../utils/FontSizeCalc";
import { NameNoteInput } from "./styled/Inputs";
import { AppContext } from "../utils/AppContext";
import { DATA_LOCAL_STORAGE, INDEX_LOCAL_STORAGE } from "../utils/envariables";
import getIndex from "../utils/getIndexByStorage";

// Basicamente cada nota vai ter uma array de TextComponents, da qual será constituído de de duas propriedades.
// o component, de fato, que é o corpo do componente, que é sempre um valor fixo pra cada componente
// E, com a base do componente, o value o completa preenchendo com o texto e as informações necessárias.
// E portanto, os componentes serão renderizados num .map a partir da array e vão ter os seus valores passados como parâmetros.

// E para o componente ter seu valor sempre atualizado, com as mudanças, automaticamente os
// states devem ser transferidos para o local Storage.

//





export function BlockText({value = "", index}: {value: string, index: number}) {
    const [valueState, setValue] = useState(value)
    const { appData, setAppData } = useContext(AppContext)
    useEffect(() => {
        const component = [...appData] 
        component[getIndex()].body[index].value = valueState
        setAppData(component)
        localStorage.setItem(DATA_LOCAL_STORAGE, JSON.stringify(component))
    }, [valueState])
    return (
    <IonTextarea value={valueState} onIonChange={({detail}) => setValue(detail.value)} style={{border: 'none'}} autoGrow placeholder="Your Text here..."></IonTextarea>
    )
}

export function Title({value = "", index}: {value: string, index: number}) {
    const [valueState, setValue] = useState(value)
    const { appData, setAppData } = useContext(AppContext)
    useEffect(() => {
        const component = [...appData] 
        component[getIndex()].body[index].value = valueState
        setAppData(component)
        localStorage.setItem(DATA_LOCAL_STORAGE, JSON.stringify(component))
    }, [valueState])
    return (
        <NameNoteInput placeholder="Untitled Note" value={valueState} onChange={(e: any) => setValue(e.target.value)} style={{fontSize: `${fontSize(valueState)}px`}} maxLength={36} />
    )
}

export function List({value = [], index}: {value: string[], index: number}) {
    return (
        <>
        <p>lista tem que fazer a lógica etc</p>
        {/* lista aqui */}
        </>
    )
}