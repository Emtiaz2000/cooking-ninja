import React from 'react';
import { useTheme } from '../hooks/useTheme';

import './ThemeSelector.css'
import modeImg from '../assets/lightMood.svg'

const themeColor=['#58249c','#249c6b','#b70233']
export default function ThemeSelector() {
    const {changeColor,mode,changeMode}=useTheme()
   // console.log(mode)

    const toggleMode = ()=>{
        changeMode(mode==='dark'?'light':'dark')
    }

  return (
  <div className='theme-selector'>
      <div className='mode-toggle'>
          <img
          src={modeImg}
          onClick={toggleMode}
          alt='light dark icon'
          style={{filter: mode==='dark' ? 'invert(100%)' :'invert(20%)' }}
          />
      </div>

      <div className='theme-buttons'>
        {
            themeColor.map(color=>{
                return(
                    <div key={color} onClick={()=>changeColor(color)} style={{background:color}}/>
                )
            })
        }

      </div>

  </div>
  );
}
