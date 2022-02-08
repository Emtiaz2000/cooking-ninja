import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { projectFireStore,collection,addDoc } from '../../firebase/config'

import './Create.css'


export default function Create() {
  const [title,setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [newIngrident,setNewIngrident] = useState('')
  const [ingredients,setingredients] = useState([])
  const redirect = useNavigate()

 
  const handleIngridient = (e)=>{
    e.preventDefault()
    const ing = newIngrident.trim()

    if(ing && !ingredients.includes(ing)){
      setingredients((preIngridents=> [...preIngridents,ing]))
    }
    setNewIngrident('')
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
     const documents= {title,method,cookingTime:cookingTime+' minutes',ingredients}
     const addingDataFirestore = async ()=>{
       try {
         await addDoc(collection(projectFireStore,'recipes'),documents)
         setTitle('')
         setMethod('')
         setCookingTime('')
         redirect('/')
       } catch (error) {
         console.log(error.message)
       }
     } 
     addingDataFirestore()
   
      
  }


  return <div className='create'>
              <h1 className='page-title'>Add a New Recipe</h1>

              <form onSubmit={handleSubmit}>
                  <label>
                    <span>Recipe Title:</span>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} required/>
                  </label>

                  <label>
                    <span>Ingridents :</span>
                    <div className='ingredients'>
                      <input onChange={(e)=> setNewIngrident(e.target.value)} value={newIngrident} />
                      <button onClick={(e)=>handleIngridient(e)} className="btn">Add</button>
                    </div>
                   
                  </label>
                  <p> Current ingredients:
                      {ingredients && ingredients.map(ingrident=>{
                        return (
                          <em key={ingrident}> {ingrident},</em>
                        )
                      })}
                    </p>

                  <label>
                    <span>Recipe Method:</span>
                    <textarea type="text" onChange={(e)=> setMethod(e.target.value)} value={method} required/>
                  </label>
                  <label>
                    <span>Cooking Time (minutes):</span>
                    <input type="number" onChange={(e)=> setCookingTime(e.target.value)} value={cookingTime} required/>
                  </label>
                  <button type="submit" className='btn'>Submit</button>
              </form>

          </div>;
}
