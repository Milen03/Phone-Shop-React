import { useState } from "react"

export default function usePersistedState(stateKey,initalSatate){
    const [state,setState] = useState(()=>{
        const persistentStatetJSON = localStorage.getItem(stateKey)
        if(!persistentStatetJSON){
            return initalSatate
        }

        const persistentStatetData = JSON.parse(persistentStatetJSON)

        return persistentStatetData
    })

    const setPersisdentState = (data) =>{
        const persistedData = JSON.stringify(data)

        localStorage.setItem(stateKey,persistedData)
        setState(data)
    }


    return [
        state,
        setPersisdentState
    ]
}