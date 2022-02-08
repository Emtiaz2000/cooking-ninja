import React, { useEffect,useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { projectFireStore,getDoc,doc,deleteDoc } from '../../firebase/config'
import {useTheme} from '../../hooks/useTheme'
//css
import './Recipes.css'
import trash from '../../assets/trash.svg'


export default function Recipes() {

  const [recipe, setData] = useState(null)
  const [isLoading, setIsLoding] = useState(false)
  const [delLoading, setDelLoding] = useState(false)
  const [error, setError] = useState(null)
  const {mode} = useTheme()
  


  const params = useParams().id
  const navigate = useNavigate()

  //getting single data from fireStore
  useEffect(()=>{
    
    const fetchSingleData = async ()=>{   
      
      try {
        setIsLoding(true)
        const recipeData =  doc(projectFireStore,'recipes',params)
        const getData = await getDoc(recipeData)
       
          if(!getData.exists()){
            throw new Error('Can not fetch data...')
          }
        setData(getData.data())
        setIsLoding(false)

      } catch (error) {
        setIsLoding(false)
        console.log(error.message)
        setError('Can not fetch data...')
      }
      
    }

    fetchSingleData()


  },[params])


  const deleteRecipe = async ()=>{

    const docRef = doc(projectFireStore,'recipes',params)
    try {
     setDelLoding(true)
     await deleteDoc(docRef)
     navigate('/')
     setDelLoding(false)
    } catch (error) {
      console.log(error.message)
      setDelLoding(false)
    }

  }
 
  //redirect is user pass invalid item
  useEffect(()=>{
    if(error){
      return navigate('/')
    }
  },[error,navigate])
  
  return (
  <div>
  {isLoading && <p style={{color:mode==='dark'?'#fff':'#000'}}>Recipe is loading...</p>}
  {delLoading && <p>Recipe is deleting...</p>}
   {error && <p>{error}</p>}
   { recipe && 
    (
      <div className='recipe' >
        <img className='trashIcon' onClick={deleteRecipe} src={trash} alt="trash"/>
        <h2 className='page-title'>{recipe.title}</h2>
        
        <p>Time: {recipe.cookingTime}</p>
        <ul>
        {recipe.ingredients.map((ingredient)=>{
          return(
              <li key={ingredient}>{ingredient}</li>
          )
        })}
        </ul>
        <br/>
        <p className='method'>{recipe.method}</p>
      </div>
    )
   } 
  </div>
  );
}
