import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export function useTheme(){
    const context = useContext(ThemeContext)
    if(context ===undefined){
        throw new Error('useTheme() can not use outside it\'s scope')
    }

    return context
}