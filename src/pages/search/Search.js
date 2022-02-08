import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {projectFireStore,collection,query,where,getDocs} from '../../firebase/config'

export default function Search() {
  const quaryString = useLocation().search
  const quaryParams = new URLSearchParams(quaryString)
  const quaryFromUrl = quaryParams.get('q')

  useEffect(()=>{
    const fetchData = async()=>{
      const collerctionRef = collection(projectFireStore,'recipes')
      const fetching = query(collerctionRef,where('title'.includes(quaryFromUrl)))
     const realData = await getDocs(fetching)
      console.log(realData)
    }
  fetchData()
  },[])

  return (
    <p>data</p>
  )

 /*  if(recipes===null || recipes.length===0){
    return <p>No Recipe to show...</p>
  }else{
    return <div>
    <h2 className='page-title'>Recipes includes "{quary}"</h2>
    {error && <p>{error}</p>}
    {isLoading && <p>Recipes is loading....</p>}
    {recipes &&
      recipes.map(recipe => (
        <div key={recipe.id} className='recipe' >
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Time: {recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>{ingredient}</li>
              )
            })}
          </ul>
          <br />
          <p className='method'>{recipe.method}</p>
        </div>
      ))
      
    }
    

  </div>;
  } */
  
  
  }

  

