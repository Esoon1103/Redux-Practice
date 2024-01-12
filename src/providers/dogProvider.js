import React, {useReducer, createContext} from "react";
import DogReducer from "../reducers/dogs" //import reducer
import {dogReducerDefaultState} from "../reducers/dogs" //import default state

const DogContext = createContext();

const DogProvider = ({children}) => {
    const [state, dispatch] = useReducer(DogReducer, dogReducerDefaultState);

    return (
        <DogContext.Provider value={{state, dispatch}}>
            {children}
        </DogContext.Provider>
    )
}

export {DogContext, DogProvider} 