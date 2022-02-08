import React,{createContext,useReducer} from 'react';

const themeReducer =(state,action)=>{
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
        case 'CHANGE_MODE':
            return {...state,mode:action.payload}
        
        default:
            return state;
    }
}

export const ThemeContext = createContext()

export function ThemeContextProvider({children}){
    const [state,dispatch] = useReducer(themeReducer,{color:"#58249c",mode:'dark'})
    //console.log(state)
    const changeColor = (color)=>{
        return dispatch({type:"CHANGE_COLOR",payload:color})
    }
    const changeMode = (mode)=>{
        return dispatch({type:"CHANGE_MODE",payload:mode})
    }
    return <ThemeContext.Provider value={{...state,changeColor,changeMode}}>
        {children}
    </ThemeContext.Provider>
}
